// CustomMultiPhaseGoal Plugin
// Initial code generated by Softimage SDK Wizard
// Executed Tue Feb 24 13:49:59 EST 2009 by belzilm
// 
// 
// Tip: You need to compile the generated code before you can load the plug-in.
// After you compile the plug-in, you can load it by clicking Update All in the Plugin Manager.
#include <xsi_application.h>
#include <xsi_context.h>
#include <xsi_pluginregistrar.h>
#include <xsi_status.h>

#include <xsi_icenodecontext.h>
#include <xsi_icenodedef.h>
#include <xsi_command.h>
#include <xsi_factory.h>
#include <xsi_longarray.h>
#include <xsi_doublearray.h>
#include <xsi_math.h>
#include <xsi_vector2f.h>
#include <xsi_vector3f.h>
#include <xsi_vector4f.h>
#include <xsi_matrix3f.h>
#include <xsi_matrix4f.h>
#include <xsi_rotationf.h>
#include <xsi_quaternionf.h>
#include <xsi_color4f.h>
#include <xsi_shape.h>
#include <xsi_icegeometry.h>
#include <xsi_indexset.h>
#include <xsi_dataarray.h>
#include <xsi_dataarray2D.h>
#include <xsi_random.h>

// Defines port, group and map identifiers used for registering the ICENode
enum IDs
{
	ID_IN_GoalPoints = 0,
	ID_IN_SourcePoints = 1,
	ID_IN_Speed = 2,
	ID_IN_Seed = 3,
	ID_G_100 = 100,
	ID_G_101 = 101,
	ID_G_103 = 103,
	ID_G_104 = 104,
	ID_OUT_NewPoints = 200,
	ID_TYPE_CNS = 400,
	ID_STRUCT_CNS,
	ID_CTXT_CNS,
	ID_UNDEF = ULONG_MAX
};

XSI::CStatus RegisterCustomMultiPhaseGoal( XSI::PluginRegistrar& in_reg );

using namespace XSI; 

XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar& in_reg )
{
	in_reg.PutAuthor(L"belzilm");
	in_reg.PutName(L"CustomMultiPhaseGoal Plugin");
	in_reg.PutVersion(1,0);

	RegisterCustomMultiPhaseGoal( in_reg );

	//RegistrationInsertionPoint - do not remove this line

	return CStatus::OK;
}

XSIPLUGINCALLBACK CStatus XSIUnloadPlugin( const PluginRegistrar& in_reg )
{
	CString strPluginName;
	strPluginName = in_reg.GetName();
	Application().LogMessage(strPluginName + L" has been unloaded.",siVerboseMsg);
	return CStatus::OK;
}

CStatus RegisterCustomMultiPhaseGoal( PluginRegistrar& in_reg )
{
	ICENodeDef nodeDef;
	nodeDef = Application().GetFactory().CreateICENodeDef(L"CustomMultiPhaseGoal",L"Custom Multi-Phase Goal");

	CStatus st;
	st = nodeDef.PutThreadingModel(XSI::siICENodeMultiEvaluationPhase);
	st.AssertSucceeded( ) ;

	// Add input ports and groups.
	st = nodeDef.AddPortGroup(ID_G_100);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddPortGroup(ID_G_101);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddPortGroup(ID_G_103);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddPortGroup(ID_G_104);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(	ID_IN_GoalPoints,
								ID_G_100,
								siICENodeDataVector3,siICENodeStructureSingle,siICENodeContextAny,
								L"Goal Points",L"GoalPoints",
								MATH::CVector3f(1.0,1.0,1.0) );
	st.AssertSucceeded( ) ;

	// The ID_IN_SourcePoints port is constrained to the context of ID_OUT_NewPoints
	st = nodeDef.AddInputPort(	ID_IN_SourcePoints,
								ID_G_101,
								siICENodeDataVector3,siICENodeStructureSingle,siICENodeContextAny,
								L"Source Points",L"SourcePoints",
								MATH::CVector3f(1.0,1.0,1.0),
								ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(	ID_IN_Speed,
								ID_G_103,
								siICENodeDataFloat,siICENodeStructureSingle,siICENodeContextSingleton,
								L"Speed",L"Speed",
								0.1f );
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(	ID_IN_Seed,
								ID_G_104,
								siICENodeDataLong,siICENodeStructureSingle,siICENodeContextSingleton,
								L"Seed",L"Seed",
								19 );
	st.AssertSucceeded( ) ;

	// The output port is constrained to the context of ID_IN_SourcePoints
	st = nodeDef.AddOutputPort(	ID_OUT_NewPoints,
								siICENodeDataVector3,siICENodeStructureSingle,siICENodeContextAny,
								L"New Points",L"NewPoints",
								ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	PluginItem nodeItem = in_reg.RegisterICENode(nodeDef);
	nodeItem.PutCategories(L"Custom ICENode Sample");

	return CStatus::OK;
}

XSIPLUGINCALLBACK CStatus CustomMultiPhaseGoal_SubmitEvaluationPhaseInfo( ICENodeContext& in_ctxt )
{
	ULONG nPhase = in_ctxt.GetEvaluationPhaseIndex( );
	
	switch( nPhase )
	{
		case 0:
		{		
			// Pull ID_IN_GoalPoints to make the data available during the last evaluation phase
			in_ctxt.AddEvaluationPhaseInputPort( ID_IN_GoalPoints );
		}
		break;

		case 1:
		{
			in_ctxt.AddEvaluationPhaseInputPort( ID_IN_SourcePoints );
			in_ctxt.AddEvaluationPhaseInputPort( ID_IN_Seed );
			in_ctxt.AddEvaluationPhaseInputPort( ID_IN_Speed );
			in_ctxt.SetLastEvaluationPhase();
		}
		break;
		
		default:
			// Abort evaluation if the current phase is not handled
			return CStatus::Abort;		
	}
	return CStatus::OK;
}
XSIPLUGINCALLBACK CStatus CustomMultiPhaseGoal_Evaluate( ICENodeContext& in_ctxt )
{
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );

	ULONG nPhase = in_ctxt.GetEvaluationPhaseIndex( );
	
	switch( nPhase )
	{
		case 0:
		{		
			// Nothing to do as the data has been automatically pulled and cached by Softimage
			return CStatus::OK;
		}
	}
	
	switch( out_portID )
	{
		case ID_OUT_NewPoints:
		{
			// The final evaluation phase to perform points blending based on a 'speed' factor and a goal point
			CDataArrayVector3f newPoints( in_ctxt );
			CDataArrayVector3f sourcePoints( in_ctxt, ID_IN_SourcePoints );
			CDataArrayVector3f goalPoints( in_ctxt, ID_IN_GoalPoints );
			CDataArrayLong seedValue( in_ctxt, ID_IN_Seed );
			CDataArrayFloat speedValue( in_ctxt, ID_IN_Speed );

			CIndexSet indexSet( in_ctxt );
			CIndexSet::Iterator it = indexSet.Begin();
			ULONG nGoalPointCount = goalPoints.GetCount();
			float fSpeedValue = speedValue[0];									

			// Use CRandom to randomly select the goal point to blend
			MATH::CRandom rnd( seedValue[0] );				

			// Start the sequence with the absolute cloud buffer index
			rnd.Skip( it.GetAbsoluteIndex() );			
			
			for( ; it.HasNext(); it.Next())
			{
				ULONG nIndex = it;
				if ( !nGoalPointCount )
				{
					newPoints[it] = sourcePoints[it];
					rnd++;
					continue;
				}
				
				ULONG nGoalIndex = (ULONG)(nGoalPointCount * rnd.GetNormalizedValue());				
				
				if (nGoalIndex >= nGoalPointCount)
				{
					nGoalIndex -= 1;
				}
								
				MATH::CVector3f vGoalPt = goalPoints[ nGoalIndex ];
				vGoalPt -= sourcePoints[it];
				vGoalPt *= fSpeedValue;
				vGoalPt += sourcePoints[it];
				newPoints[it] = vGoalPt;
				
				rnd++;
			}
		}
		break;
	};

	return CStatus::OK;	
}
