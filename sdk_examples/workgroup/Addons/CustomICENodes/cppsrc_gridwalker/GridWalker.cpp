// Grid Walker Plugin
// Initial code generated by Softimage SDK Wizard
// Executed Mon Mar 30 13:34:32 EDT 2009 by couturj
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
#include <xsi_iceportstate.h>
#include <xsi_indexset.h>
#include <xsi_dataarray.h>
#include <xsi_dataarray2D.h>
#include <xsi_random.h>
#include <memory.h>

// Defines port, group and map identifiers used for registering the ICENode
enum IDs
{
	ID_IN_InState = 0,
	ID_IN_InSeed,
	ID_IN_InSteps,
	ID_IN_InGridSubdiv,
	ID_G_100 = 100,
	ID_OUT_OutState = 200,
	ID_OUT_position = 201,
	ID_TYPE_CNS = 400,
	ID_STRUCT_CNS,
	ID_CTXT_CNS,
	ID_UNDEF = ULONG_MAX
};

XSI::CStatus RegisterGridWalker( XSI::PluginRegistrar& in_reg );

using namespace XSI; 

XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar& in_reg )
{
	in_reg.PutAuthor(L"Autodesk");
	in_reg.PutName(L"Grid Walker Plugin");
	in_reg.PutVersion(1,0);

	RegisterGridWalker( in_reg );

	//RegistrationInsertionPoint - do not remove this line

	return CStatus::OK;
}

CStatus RegisterGridWalker( PluginRegistrar& in_reg )
{
	ICENodeDef nodeDef;
	nodeDef = Application().GetFactory().CreateICENodeDef(L"GridWalker",L"Grid Walker");

	CStatus st;

	// Define the GridWalkState_v1 custom type.
	st = nodeDef.DefineCustomType(	L"GridWalkState_v1",
									L"Grid Walk State", 
									L"Hold particle states used for moving them on a grid.",
									23, 255, 255);
	st.AssertSucceeded( ) ;

	// Add input ports and groups.
	st = nodeDef.AddPortGroup(ID_G_100);
	st.AssertSucceeded( ) ;

	// Set the state input port with the GridWalkState_v1 custom type. The data is stored for each particle points.
	CStringArray inStateCustomType(1);
	inStateCustomType[0] = L"GridWalkState_v1";

	st = nodeDef.AddInputPort(	ID_IN_InState,ID_G_100,
								inStateCustomType, siICENodeStructureSingle, siICENodeContextComponent0D,
								L"In State",L"InState",
								ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(	ID_IN_InSeed,
								ID_G_100,
								siICENodeDataLong,siICENodeStructureSingle,siICENodeContextSingleton,
								L"Seed",L"Seed",123);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(	ID_IN_InSteps,
								ID_G_100,
								siICENodeDataLong,siICENodeStructureSingle,siICENodeContextSingleton,
								L"Substeps",L"Substeps",8);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(	ID_IN_InGridSubdiv,
								ID_G_100,
								siICENodeDataLong,siICENodeStructureSingle,siICENodeContextSingleton,
								L"Grid Subdivision",L"GridSubdiv",8);
	st.AssertSucceeded( ) ;

	// Add output ports.
	// Set the output state port with the GridWalkState_v1 custom type
	CStringArray outStateCustomType(1);
	outStateCustomType[0] = L"GridWalkState_v1";

	st = nodeDef.AddOutputPort(	ID_OUT_OutState,
								outStateCustomType,siICENodeStructureSingle,siICENodeContextComponent0D,
								L"Out State",L"OutState",
								ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddOutputPort(	ID_OUT_position,
								siICENodeDataVector3,siICENodeStructureSingle,siICENodeContextComponent0D,
								L"Position",L"position",
								ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	PluginItem nodeItem = in_reg.RegisterICENode(nodeDef);
	nodeItem.PutCategories(L"Custom ICENode Sample");

	return CStatus::OK;
}
// Data structure holding the states for each particule
struct GridWalkerState
{
	ULONG m_nRandomSequencePosition;
	ULONG m_nCurrentStep;

	LONG m_nCurrentPositionX, m_nCurrentPositionY;
	LONG m_nDirectionX, m_nDirectionY;
};

XSIPLUGINCALLBACK CStatus GridWalker_Evaluate( ICENodeContext& in_ctxt )
{
	// The current output port being evaluated...
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );
	
	CDataArrayLong seed( in_ctxt, ID_IN_InSeed );
	CDataArrayLong steps( in_ctxt, ID_IN_InSteps );
	CDataArrayLong gridSubdiv( in_ctxt, ID_IN_InGridSubdiv );
	
	LONG nSteps = abs(steps[0])+1;
	LONG nGridSize = abs(gridSubdiv[0])+1;

	MATH::CRandom rnd( seed[0] );

	// Get the input data buffers for each port
	CDataArrayCustomType inStateData( in_ctxt, ID_IN_InState );

	// We need a CIndexSet to iterate over the data 		
	CIndexSet indexSet( in_ctxt );

	// We want the output to vary independently of the input ports data state.
	in_ctxt.SetAsElementDataVarying( );

	switch( out_portID )
	{		
		case ID_OUT_OutState :
		{
			CDataArrayCustomType outData( in_ctxt );

			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				ULONG nPreviousSize;
				GridWalkerState* pBufferInState;
				inStateData.GetData(it, (const CDataArrayCustomType::TData**)&pBufferInState, nPreviousSize);

				GridWalkerState* pState = (GridWalkerState*)outData.Resize(it, sizeof(GridWalkerState));

				if( nPreviousSize )
				{
					assert(nPreviousSize == sizeof(GridWalkerState));
					::memcpy(pState, pBufferInState, nPreviousSize);
				}
				else
				{
					//Re-seed the sequence with element index: pseudo-2D random
					rnd.PutSeed( seed[0]+it.GetAbsoluteIndex() );

					//Set initial state
					pState->m_nCurrentPositionX = rnd++ % (nGridSize+1);
					pState->m_nCurrentPositionY = rnd++ % (nGridSize+1);
					
					pState->m_nDirectionX = 0;
					pState->m_nDirectionY = 0;

					pState->m_nCurrentStep = nSteps - 1; //Make sure we update the data in this iteration
					pState->m_nRandomSequencePosition = 2; //We used 2 items in the sequence
				}

				pState->m_nCurrentStep++;

				if (pState->m_nCurrentStep == nSteps)
				{
					//Re-seed the sequence with element index: pseudo-2D random
					rnd.PutSeed( seed[0]+it.GetAbsoluteIndex() );

					// Goto last position of the sequence
					rnd.Skip( pState->m_nRandomSequencePosition );

					// Create the next waypoint
					pState->m_nCurrentPositionX += pState->m_nDirectionX;
					pState->m_nCurrentPositionY += pState->m_nDirectionY;

					pState->m_nDirectionX = 0;
					pState->m_nDirectionY = 0;

					// Set the moving direction: Note: We can't use (rnd++ % 4) as the lowest bits are not random.
					ULONG nDir = ULONG(rnd.GetNormalizedValue()*4) % 4;
					rnd++;
					pState->m_nRandomSequencePosition++;

					switch(nDir)
					{
						case 0:
							pState->m_nDirectionX = 1;
							break;
						case 1:
							pState->m_nDirectionY = 1;
							break;
						case 2:
							pState->m_nDirectionX = -1;
							break;
						case 3:
							pState->m_nDirectionY = -1;
							break;
					}

					LONG nNextPos = pState->m_nCurrentPositionX + pState->m_nDirectionX;
					if (nNextPos < 0 || nNextPos > nGridSize)
					{
						pState->m_nDirectionX = -pState->m_nDirectionX;
					}

					nNextPos = pState->m_nCurrentPositionY + pState->m_nDirectionY;
					if (nNextPos < 0 || nNextPos > nGridSize)
					{
						pState->m_nDirectionY = -pState->m_nDirectionY;
					}

					pState->m_nCurrentStep = 0;
				}
			}
		}
		break;
		
		case ID_OUT_position :
		{
			CDataArrayVector3f outData( in_ctxt );

			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				ULONG nPreviousSize;
				GridWalkerState* pBufferInState;
				inStateData.GetData(it, (const CDataArrayCustomType::TData**)&pBufferInState, nPreviousSize);
				
				if (nPreviousSize)
				{
					float fFraction = pBufferInState->m_nCurrentStep / (float)nSteps;

					outData[it].PutX( pBufferInState->m_nCurrentPositionX + fFraction*pBufferInState->m_nDirectionX );
					outData[it].PutY( 0 );
					outData[it].PutZ( pBufferInState->m_nCurrentPositionY + fFraction*pBufferInState->m_nDirectionY );
				}
				else
				{
					outData[it] = MATH::CVector3f( 0, 0, 0 ); //State not initialized yet
				}
			}
		}
		break;
	};
	
	return CStatus::OK;
}

