// CustomPassThrough Plugin
// Initial code generated by Softimage SDK Wizard
// Executed Wed Jun 17 12:15:14 EDT 2009 by belzilm
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
#include <memory.h>

// Defines port, group and map identifiers used for registering the ICENode
enum IDs
{
	ID_IN = 0,
	ID_G_100 = 100,
	ID_OUT = 200,
	ID_TYPE_CNS = 400,
	ID_STRUCT_CNS,
	ID_CTXT_CNS,
	ID_UNDEF = ULONG_MAX
};

XSI::CStatus RegisterCustomPassThrough( XSI::PluginRegistrar& in_reg );

using namespace XSI; 

SICALLBACK XSILoadPlugin( PluginRegistrar& in_reg )
{
	in_reg.PutAuthor(L"belzilm");
	in_reg.PutName(L"CustomPassThrough Plugin");
	in_reg.PutVersion(1,0);

	RegisterCustomPassThrough( in_reg );

	//RegistrationInsertionPoint - do not remove this line

	return CStatus::OK;
}

SICALLBACK XSIUnloadPlugin( const PluginRegistrar& in_reg )
{
	CString strPluginName;
	strPluginName = in_reg.GetName();
	Application().LogMessage(strPluginName + L" has been unloaded.",siVerboseMsg);
	return CStatus::OK;
}

CStatus RegisterCustomPassThrough( PluginRegistrar& in_reg )
{
	ICENodeDef nodeDef;
	nodeDef = Application().GetFactory().CreateICENodeDef(L"CustomPassThrough",L"Custom Pass Through");

	CStatus st;
	st = nodeDef.PutColor(236,188,23);
	st.AssertSucceeded( ) ;

	// Add input ports and groups.
	st = nodeDef.AddPortGroup(ID_G_100);
	st.AssertSucceeded( ) ;

	st = nodeDef.AddInputPort(ID_IN,ID_G_100,siICENodeOutputDataAny,siICENodeStructureAny,siICENodeContextAny,L"IN",L"IN",CValue(),CValue(),CValue(),ID_TYPE_CNS,ID_STRUCT_CNS,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	// Add output ports.
	st = nodeDef.AddOutputPort(ID_OUT,siICENodeOutputDataAny,siICENodeStructureAny,siICENodeContextAny,L"OUT",L"OUT",ID_TYPE_CNS,ID_STRUCT_CNS,ID_CTXT_CNS);
	st.AssertSucceeded( ) ;

	PluginItem nodeItem = in_reg.RegisterICENode(nodeDef);
	nodeItem.PutCategories(L"Custom ICENode Sample");

	return CStatus::OK;
}

// CEvaluator class is handling the most common types. The data is copied by reference, this is the most optimal way of setting output ports with input ports.
template < class T >
class CEvaluator
{
	public:
	static void Do( ICENodeContext& in_ctxt, ULONG in_nInPortID, XSI::siICENodeStructureType in_outStruct )
	{
		if ( in_outStruct == XSI::siICENodeStructureSingle )
		{
			CDataArray<T> outData( in_ctxt );
			outData.CopyFrom( in_nInPortID );
		}
		else if ( in_outStruct == XSI::siICENodeStructureArray )
		{
			CDataArray2D<T> outData( in_ctxt );
			outData.CopyFrom( in_nInPortID );
		}
	}
};

// Special case for the custom data type
template <>
class CEvaluator< CDataArrayCustomType::TData >
{
	public:
	static void Do( ICENodeContext& in_ctxt, ULONG in_nInPortID, XSI::siICENodeStructureType in_outStruct )
	{
		if ( in_outStruct == XSI::siICENodeStructureSingle )
		{
			CDataArrayCustomType outData( in_ctxt );
			outData.CopyFrom( in_nInPortID );
		}
		else if ( in_outStruct == XSI::siICENodeStructureArray )
		{
			CDataArray2DCustomType outData( in_ctxt );
			outData.CopyFrom( in_nInPortID );
		}
	}
};

// Special case for the string type
template <>
class CEvaluator< CDataArrayString::TData >
{
	public:
	static void Do( ICENodeContext& in_ctxt, ULONG in_nInPortID, XSI::siICENodeStructureType in_outStruct )
	{
		if ( in_outStruct == XSI::siICENodeStructureSingle )
		{
			CDataArrayString outData( in_ctxt );
			outData.CopyFrom( in_nInPortID );
		}
		else if ( in_outStruct == XSI::siICENodeStructureArray )
		{
			CDataArray2DString outData( in_ctxt );
			outData.CopyFrom( in_nInPortID );
		}
	}
};

SICALLBACK CustomPassThrough_Evaluate( ICENodeContext& in_ctxt )
{
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );
  
	switch( out_portID )
	{		
		case ID_OUT :
		{
			XSI::siICENodeDataType outPortType;
			XSI::siICENodeStructureType outPortStruct;
			XSI::siICENodeContextType outPortContext;
			in_ctxt.GetPortInfo( ID_OUT, outPortType, outPortStruct, outPortContext );

			switch( outPortType )
			{
				case siICENodeDataFloat:		CEvaluator<float>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataLong:			CEvaluator<LONG>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataBool:			CEvaluator<bool>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataVector2:		CEvaluator<MATH::CVector2f>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataVector3:		CEvaluator<MATH::CVector3f>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataVector4:		CEvaluator<MATH::CVector4f>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataQuaternion:	CEvaluator<MATH::CQuaternionf>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataRotation:		CEvaluator<MATH::CRotationf>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataMatrix33:		CEvaluator<MATH::CMatrix3f>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataMatrix44:		CEvaluator<MATH::CMatrix4f>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataColor4:		CEvaluator<MATH::CColor4f>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataShape:		CEvaluator<MATH::CShape>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataCustomType:	CEvaluator<CDataArrayCustomType::TData>::Do( in_ctxt, ID_IN, outPortStruct ); break;
				case siICENodeDataString:		CEvaluator<CDataArrayString::TData>::Do( in_ctxt, ID_IN, outPortStruct ); break;
			};			  		
		}
		break;		
	};
	
	return CStatus::OK;
}

// Another version of the CEvaluator class that copies data by allocating memory. The main purpose is to demonstrate how to iterate 
// and copy the data for all CDataArray types.
template < class T >
class CCopyEvaluator
{
	public:
	static void Do( ICENodeContext& in_ctxt, ULONG in_nInPortID, XSI::siICENodeStructureType in_outStruct )
	{
		CIndexSet indexSet( in_ctxt );

		if ( in_outStruct == XSI::siICENodeStructureSingle )
		{
			CDataArray<T> outData( in_ctxt );
			CDataArray<T> inData( in_ctxt, in_nInPortID );
		
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				outData[it] = inData[it];
			}
		}
		else if ( in_outStruct == XSI::siICENodeStructureArray )
		{
			CDataArray2D<T> outData( in_ctxt );
			CDataArray2D<T> inData( in_ctxt, in_nInPortID );
					
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				typename CDataArray2D<T>::Accessor inAccess = inData[it];
				typename CDataArray2D<T>::Accessor outAccess = outData.Resize( it, inAccess.GetCount() );
				
				memcpy( &outAccess[0], &inAccess[0], outAccess.GetCount() );
			}
		}
	}
};

// Special case for the bool type
template <>
class CCopyEvaluator< bool >
{
   public:
   static void Do( ICENodeContext& in_ctxt, ULONG in_nInPortID, XSI::siICENodeStructureType in_outStruct )
   {
		CIndexSet indexSet( in_ctxt );
		if ( in_outStruct == XSI::siICENodeStructureSingle )
		{
			CDataArray<bool> outData( in_ctxt );
			CDataArray<bool> inData( in_ctxt, in_nInPortID );
		
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				outData.Set( it, inData[it] );
			}
		}
		else if ( in_outStruct == XSI::siICENodeStructureArray )
		{
			CDataArray2D<bool> outData( in_ctxt );
			CDataArray2D<bool> inData( in_ctxt, in_nInPortID );
					
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				CDataArray2D<bool>::Accessor inAccess = inData[it];
				CDataArray2D<bool>::Accessor outAccess = outData.Resize( it, inAccess.GetCount() );
				for ( ULONG i=0; i<outAccess.GetCount(); i++ )
				{
					outAccess.Set( i, inAccess[i] );
				}
			}
		}
	}
};

// Special case for the custom data type
template <>
class CCopyEvaluator< CDataArrayCustomType::TData >
{
	public:
	static void Do( ICENodeContext& in_ctxt, ULONG in_nInPortID, XSI::siICENodeStructureType in_outStruct )
	{
		if ( in_outStruct == XSI::siICENodeStructureSingle )
		{
			CDataArrayCustomType outData( in_ctxt );
			CDataArrayCustomType inData( in_ctxt, in_nInPortID  );

			CIndexSet indexSet( in_ctxt );
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				ULONG nSize;
				const XSI::CDataArrayCustomType::TData* pInData;
				inData.GetData(it, &pInData, nSize);

				XSI::CDataArrayCustomType::TData* pOutData = outData.Resize(it, nSize);
				
				::memcpy( pOutData, pInData, nSize );           
			}
		}
		else if ( in_outStruct == XSI::siICENodeStructureArray )
		{
			CDataArray2DCustomType outData( in_ctxt );
			CDataArray2DCustomType inData( in_ctxt, in_nInPortID );
		
			CIndexSet indexSet( in_ctxt );
			for (CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				CDataArray2DCustomType::Accessor inAccess = inData[ it ];
				CDataArray2DCustomType::Accessor outAccess = outData.Resize( it, inAccess.GetCount( ) );

				for ( ULONG i=0; i<outAccess.GetCount(); i++ )
				{
					CDataArray2DCustomType::TData* pInData = NULL;
					ULONG nSize;
					
					inAccess.GetData( i, &pInData, nSize );
					
					CDataArray2DCustomType::TData* pOutData = outAccess.Resize( i, nSize );
					
					::memcpy( pOutData, pInData, nSize );
				}
			}	
		}
	}
};

// Special case for the string type
template <>
class CCopyEvaluator< CDataArrayString::TData >
{
	public:
	static void Do( ICENodeContext& in_ctxt, ULONG in_nInPortID, XSI::siICENodeStructureType in_outStruct )
	{
		if ( in_outStruct == XSI::siICENodeStructureSingle )
		{
			CDataArrayString outData( in_ctxt );
			CDataArrayString inData( in_ctxt, in_nInPortID  );

			CIndexSet indexSet( in_ctxt );
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				ULONG nCount;
				const XSI::CDataArrayString::TData* pInStr;
				inData.GetData(it, &pInStr, nCount);

				XSI::CDataArrayString::TData* pOutData = outData.Resize(it, nCount);
				
				::memcpy( pOutData, pInStr, nCount*sizeof(XSI::CDataArrayString::TData) );           
			}
		}
		else if ( in_outStruct == XSI::siICENodeStructureArray )
		{
			CDataArray2DString outData( in_ctxt );
			CDataArray2DString inData( in_ctxt, in_nInPortID );
		
			CIndexSet indexSet( in_ctxt );
			for (CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())
			{
				CDataArray2DString::Accessor inAccess = inData[ it ];
				CDataArray2DString::Accessor outAccess = outData.Resize( it, inAccess.GetCount( ) );

				for ( ULONG i=0; i<outAccess.GetCount(); i++ )
				{
					ULONG nCount;					
					CDataArray2DString::TData* pInStr = NULL;
					inAccess.GetData( i, &pInStr, nCount );
					
					CDataArray2DString::TData* pOutData = outAccess.Resize( i, nCount );
					
					::memcpy( pOutData, pInStr, nCount*sizeof(XSI::CDataArrayString::TData) );           
				}
			}	
		}
	}
};