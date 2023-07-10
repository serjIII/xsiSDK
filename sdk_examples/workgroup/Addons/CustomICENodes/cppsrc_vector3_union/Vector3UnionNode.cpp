// UnionArrayNode Plugin
// Initial code generated by Softimage SDK Wizard
// Executed Fri Jan 16 08:56:28 EST 2009 by belzilm
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

#include <algorithm>

// Defines port, group and map identifiers used for registering the ICENode
enum IDs
{
	ID_IN_InArray1 = 0,
	ID_IN_InArray2 = 1,
	ID_G_100 = 100,
	ID_OUT_result = 200,
	ID_TYPE_CNS = 400,
	ID_STRUCT_CNS,
	ID_CTXT_CNS,
	ID_UNDEF = ULONG_MAX
};

XSI::CStatus RegisterUnionArrayNode( XSI::PluginRegistrar& in_reg );

using namespace XSI; 

XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar& in_reg )
{
	in_reg.PutAuthor(L"belzilm");
	in_reg.PutName(L"Vector3Union Plugin");
	in_reg.PutEmail(L"");
	in_reg.PutURL(L"");
	in_reg.PutVersion(1,0);

	RegisterUnionArrayNode( in_reg );

	//RegistrationInsertionPoint - do not remove this line

	return CStatus::OK;
}

CStatus RegisterUnionArrayNode( PluginRegistrar& in_reg )
{
	ICENodeDef nodeDef;
	nodeDef = Application().GetFactory().CreateICENodeDef(L"Vector3UnionNode", L"Vector3 Union");

	CStatus st;

	// Add input ports and groups.
	st = nodeDef.AddPortGroup(ID_G_100);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(ID_IN_InArray1,ID_G_100,siICENodeDataVector3,siICENodeStructureArray,siICENodeContextComponent0D|siICENodeContextSingleton,L"InArray1",L"InArray1",MATH::CVector3f(1.0,1.0,1.0),ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(ID_IN_InArray2,ID_G_100,siICENodeDataVector3,siICENodeStructureArray,siICENodeContextComponent0D|siICENodeContextSingleton,L"InArray2",L"InArray2",MATH::CVector3f(1.0,1.0,1.0),ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	// Add output ports.
	st = nodeDef.AddOutputPort(ID_OUT_result,siICENodeDataVector3,siICENodeStructureArray,siICENodeContextComponent0D|siICENodeContextSingleton,L"result",L"result",ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	PluginItem nodeItem = in_reg.RegisterICENode(nodeDef);
	nodeItem.PutCategories(L"Custom ICENode Sample");

	return CStatus::OK;
}

XSIPLUGINCALLBACK CStatus Vector3UnionNode_Evaluate( ICENodeContext& in_ctxt )
{
	// The current output port being evaluated...
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );

	switch( out_portID )
	{
		case ID_OUT_result:
		{
			// Get the output port array ...
			CDataArray2DVector3f outData( in_ctxt );

			// Get the input data buffers for each port
			CDataArray2DVector3f InArray1Data( in_ctxt, ID_IN_InArray1 );
			CDataArray2DVector3f InArray2Data( in_ctxt, ID_IN_InArray2 );
					
			// We need a CIndexSet to iterate over the data
			CIndexSet indexSet( in_ctxt );
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				CDataArray2DVector3f::Accessor a1 = InArray1Data[it];
				CDataArray2DVector3f::Accessor a2 = InArray2Data[it];
				
				// Sort arrays in place
				ULONG nCount1 = a1.GetCount();
				ULONG nCount2 = a2.GetCount();
				std::sort( &a1[0], &a1[0]+nCount1 );
				std::sort( &a2[0], &a2[0]+nCount2 );

				// Resize out to max array
				CDataArray2DVector3f::Accessor out = outData.Resize( it, nCount1 + nCount2 );
				
				// Union of a1 + a2
				MATH::CVector3f* pLast = std::set_union( &a1[0], &a1[0]+nCount1, &a2[0], &a2[0]+nCount2, &out[0]);
				
				// Resize out with number of elements in union
				ULONG nOutCount = (ULONG)(pLast - &out[0]);
				outData.Resize( it, nOutCount );
			}
		}
		break;

	};

	return CStatus::OK;
}

