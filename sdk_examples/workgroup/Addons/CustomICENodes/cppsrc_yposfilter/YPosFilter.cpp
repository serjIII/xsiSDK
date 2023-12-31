// YPosFilter Plugin
// Initial code generated by Softimage SDK Wizard
// Executed Sun Dec 16 18:01:49 EST 2007 by mbelzile
//
//
// Tip: You need to compile the generated code before you can load the plug-in.
// After you compile the plug-in, you can load it by clicking Update All in the Plugin Manager.
//
//	Copyright 2008 Autodesk, Inc.  All rights reserved.  
//	Use of this software is subject to the terms of the Autodesk license agreement 
//	provided at the time of installation or download, or which otherwise accompanies 
//	this software in either electronic or hard copy form.   

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

// Defines port, group and map identifiers used for registering the ICENode
enum IDs
{
	ID_IN_PointPositions = 0,
	ID_G_100 = 100,
	ID_OUT_FilteredPointPositions = 200,
	ID_TMAP = 400,
	ID_SMAP,
	ID_CMAP,
	ID_UNDEF = ULONG_MAX
};

XSI::CStatus RegisterYPosFilter( XSI::PluginRegistrar& in_reg );

using namespace XSI;

XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar& in_reg )
{
	in_reg.PutAuthor(L"Softimage");
	in_reg.PutName(L"YPosFilter Plugin");
	in_reg.PutEmail(L"");
	in_reg.PutURL(L"");
	in_reg.PutVersion(1,0);

	RegisterYPosFilter( in_reg );

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

CStatus RegisterYPosFilter( PluginRegistrar& in_reg )
{
	ICENodeDef nodeDef;
	nodeDef = Application().GetFactory().CreateICENodeDef(L"YPosFilter", L"Y Position Filter");

	CStatus st;

	// Add input ports and groups.
	st = nodeDef.AddPortGroup(ID_G_100);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(	ID_IN_PointPositions,
								ID_G_100,
								siICENodeDataVector3,
								siICENodeStructureSingle,
								siICENodeContextComponent0D,
								L"PointPositions",L"PointPositions",
								MATH::CVector3f(1.0,1.0,1.0),
								ID_UNDEF, ID_SMAP, ID_CMAP);
	st.AssertSucceeded( ) ;

	// Add output ports.
	st = nodeDef.AddOutputPort(	ID_OUT_FilteredPointPositions,
								siICENodeDataVector3,
								siICENodeStructureSingle,
								siICENodeContextComponent0D,
								L"FilteredPointPositions",L"FilteredPointPositions",
								ID_UNDEF, ID_SMAP, ID_CMAP);
	st.AssertSucceeded( ) ;

	PluginItem nodeItem = in_reg.RegisterICENode(nodeDef);
	nodeItem.PutCategories(L"Custom ICENode Sample");

	return CStatus::OK;
}

XSIPLUGINCALLBACK CStatus YPosFilter_Evaluate( ICENodeContext& in_ctxt )
{
	// The current output port being evaluated...
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );

	CIndexSet indexSet( in_ctxt );
	switch( out_portID )
	{
		case ID_OUT_FilteredPointPositions:
		{
			// All positions below 0.0 in Y will be removed from the index set.
			CDataArrayVector3f inputData0( in_ctxt, ID_IN_PointPositions );
			CDataArrayVector3f outData( in_ctxt );

			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); /*do not increment the iterator here*/)
			{
				outData[ it ] = inputData0[ it ];

				if ( inputData0[it].GetY() < 0.0 )
				{
					// Removing moves the iterator to the next index.
					it.Remove( );
				}
				else
				{
					it.Next( );
				}
			}
		}
		break;
	};

	return CStatus::OK;
}

