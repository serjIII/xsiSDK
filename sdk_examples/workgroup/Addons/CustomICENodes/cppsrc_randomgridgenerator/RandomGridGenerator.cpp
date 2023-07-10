// RandomGridGenerator Plugin
// Initial code generated by Softimage SDK Wizard
// Executed Dec 09 17:43:33 EST 2008 by mbelzile
// 
// 
// Tip: You need to compile the generated code before you can load the plug-in.
// After you compile the plug-in, you can load it by clicking Update All in the Plugin Manager.

#pragma warning (disable : 4127) // conditional expression is constant
#pragma warning (disable : 4389) // signed/unsigned mismatch
#pragma warning (disable : 4714) // marked as __forceinline not inlined
#pragma warning (disable : 4244) // conversion ... possible loss of data
#pragma warning (disable : 4245) // signed/unsigned mismatch

#include <xsi_application.h>
#include <xsi_context.h>
#include <xsi_pluginregistrar.h>
#include <xsi_status.h>

#include <xsi_icenodecontext.h>
#include <xsi_icenodedef.h>
#include <xsi_command.h>
#include <xsi_factory.h>
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
#include <xsi_indexset.h>
#include <xsi_dataarray.h>
#include <xsi_dataarray2D.h>
#include <xsi_random.h>

// Defines port, group and map identifiers used for registering the MDNode
enum IDs
{
	ID_IN_Seed = 1,
	ID_IN_Size = 2,
	ID_G_100 = 100,
	ID_OUT_CloudPositions = 200,
	ID_OUT_NumberOfElements = 201,
	ID_TMAP = 400,
	ID_SMAP,
	ID_CMAP,
	ID_UNDEF = ULONG_MAX
};

XSI::CStatus RegisterRandomGridGenerator( XSI::PluginRegistrar& in_reg );

using namespace XSI; 

XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar& in_reg )
{
	in_reg.PutAuthor(L"Autodesk");
	in_reg.PutName(L"RandomGridGenerator Plugin");
	in_reg.PutVersion(1,0);

	RegisterRandomGridGenerator( in_reg );

	return CStatus::OK;
}

CStatus RegisterRandomGridGenerator( PluginRegistrar& in_reg )
{
	ICENodeDef nodeDef;
	nodeDef = Application().GetFactory().CreateICENodeDef(L"RandomGridGenerator", L"Random Grid Generator");

	CStatus st;

	// Add input ports and groups.
	st = nodeDef.AddPortGroup(ID_G_100);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(	ID_IN_Size,
								ID_G_100,
								siICENodeDataLong,
								siICENodeStructureSingle,
								siICENodeContextSingleton,
								L"Size",L"Size",
								20);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(	ID_IN_Seed,
								ID_G_100,
								siICENodeDataLong,
								siICENodeStructureSingle,
								siICENodeContextSingleton,
								L"Seed",L"Seed",
								123);
	st.AssertSucceeded( ) ;

	// Add output ports.
	st = nodeDef.AddOutputPort(	ID_OUT_CloudPositions,
								siICENodeDataVector3,
								siICENodeStructureSingle,
								siICENodeContextElementGenerator,
								L"CloudPositions",L"CloudPositions");
	st.AssertSucceeded( ) ;

	st = nodeDef.AddOutputPort(	ID_OUT_NumberOfElements,
								siICENodeDataLong,
								siICENodeStructureSingle,
								siICENodeContextSingleton,
								L"NumberOfElements",L"NumberOfElements");
	st.AssertSucceeded( ) ;

	PluginItem nodeItem = in_reg.RegisterICENode(nodeDef);
	nodeItem.PutCategories(L"Custom ICENode Sample");

	return CStatus::OK;
}

XSIPLUGINCALLBACK CStatus RandomGridGenerator_Evaluate( ICENodeContext& in_ctxt )
{
	// The current output port being evaluated...
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );
	
	switch( out_portID )
	{
		case ID_OUT_CloudPositions:
		{
			// Set the output port array with random points
			CDataArrayVector3f outData( in_ctxt );
			CDataArrayLong inSize( in_ctxt, ID_IN_Size );
			CDataArrayLong inSeed( in_ctxt, ID_IN_Seed );
			
			CIndexSet indexSet( in_ctxt );			
			CIndexSet::Iterator it = indexSet.Begin();			
			
			// Create a random sequence of numbers using the seed provided by the connection
			MATH::CRandom rnd( inSeed[0] );

			// Since we need two random numbers to generate X and Y, skip index by 2 to make sure
			// we don't generate overlapping values between element batches.
			rnd.Skip( it.GetAbsoluteIndex() * 2 );
			
			float fSize = (float)inSize[0];
			for( ; it.HasNext(); it.Next())
			{
				float x = (rnd.GetNormalizedValue() - 0.5)*fSize;
				rnd++;
				float z = (rnd.GetNormalizedValue() - 0.5)*fSize;
				rnd++;

				MATH::CVector3f v;
				v.PutX( x );
				v.PutY( 0.0f );					
				v.PutZ( z );

				outData[ it ] = v;				
			}
		}
		break;

		case ID_OUT_NumberOfElements:
		{
			// Returns the number of elements generated
			CDataArrayLong outData( in_ctxt );
			outData[ 0 ] = in_ctxt.GetNumberOfElementsToProcess( );
		}
		break;

	};

	return CStatus::OK;
}

XSIPLUGINCALLBACK CStatus RandomGridGenerator_BeginEvaluate( ICENodeContext& in_ctxt )
{	
	// Force evaluation at each frame
	in_ctxt.SetAsTimeVarying( );	

	// Use frame number to set the number of elements to generate
	in_ctxt.PutNumberOfElementsToProcess( (LONG)(double)in_ctxt.GetTime( ) );

	return CStatus::OK;
}
