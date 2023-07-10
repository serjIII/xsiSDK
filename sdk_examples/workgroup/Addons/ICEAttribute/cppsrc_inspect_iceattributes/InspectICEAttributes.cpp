// InspectICEAttributePlugin
// Initial code generated by Softimage SDK Wizard
// Executed Tue Jun 16 15:11:54 EDT 2009 by belzilm
// 
// Tip: You need to compile the generated code before you can load the plug-in.
// After you compile the plug-in, you can load it by clicking Update All in the Plugin Manager.
#include <xsi_application.h>
#include <xsi_context.h>
#include <xsi_pluginregistrar.h>
#include <xsi_status.h>
#include <xsi_argument.h>
#include <xsi_command.h>
#include <xsi_menu.h>
#include <xsi_geometry.h>
#include <xsi_primitive.h>
#include <xsi_iceattribute.h>
#include <xsi_iceattributedataarray.h>
#include <xsi_iceattributedataarray2D.h>
#include <xsi_model.h>
#include <xsi_shape.h>


using namespace XSI; 

SICALLBACK XSILoadPlugin( PluginRegistrar& in_reg )
{
	in_reg.PutAuthor(L"belzilm");
	in_reg.PutName(L"InspectICEAttributesPlugin");
	in_reg.PutVersion(1,0);
	in_reg.RegisterCommand(L"InspectICEAttributes");
	in_reg.RegisterMenu(siMenuTbICEEditID,L"InspectICEAttributes_Menu",false,false);
	//RegistrationInsertionPoint - do not remove this line

	return CStatus::OK;
}

SICALLBACK InspectICEAttributes_Init( CRef& in_ctxt )
{
	Context ctxt( in_ctxt );
	Command oCmd;
	oCmd = ctxt.GetSource();
	oCmd.PutDescription(L"");
	oCmd.EnableReturnValue(true);

	ArgumentArray oArgs;
	oArgs = oCmd.GetArguments();
	oArgs.AddWithHandler(L"Arg0",L"Collection");
	return CStatus::OK;
}

template < class T >
class CICEAttributeDataLogger
{
	public:
	static void Log( ICEAttribute& attr )
	{
		Application xsi;
		if ( attr.GetStructureType() == XSI::siICENodeStructureSingle )
		{		
			CICEAttributeDataArray< T > data;
			attr.GetDataArray( data );

			for( ULONG i=0; i<data.GetCount( ); i++ )
			{
				xsi.LogMessage( CString( data[ i ] ) );
			}
		}
		else if ( attr.GetStructureType() == XSI::siICENodeStructureArray )
		{
			CICEAttributeDataArray2D< T > data2D;
			attr.GetDataArray2D( data2D );

			for( ULONG i=0; i<data2D.GetCount( ); i++ )
			{
				CICEAttributeDataArray< T > data;
				data2D.GetSubArray( i, data );
				for( ULONG j=0; j<data.GetCount( ); j++ )
				{
					xsi.LogMessage( CString( data[ j ] ) );
				}
			}		
		}
	}
};

// special case for custom data type
template < >
class CICEAttributeDataLogger< CICEAttributeDataArrayCustomType::TData >
{
	public:
	static void Log( ICEAttribute& attr )
	{
		Application app;
		if ( attr.GetStructureType() == XSI::siICENodeStructureSingle )
		{		
			CICEAttributeDataArrayCustomType customData;
			attr.GetDataArray( customData );
			
			for( ULONG i=0; i<customData.GetCount( ); i++ )
			{
				ULONG nSize;
				const CICEAttributeDataArrayCustomType::TData* pBuffer;
				customData.GetData( i, &pBuffer, nSize );
				
				app.LogMessage( CString( (void*)pBuffer ) + L":" + CString( nSize ) );
			}
		}
		else if ( attr.GetStructureType() == XSI::siICENodeStructureArray )
		{
			CICEAttributeDataArray2DCustomType customData2D;

			attr.GetDataArray2D( customData2D );

			for( ULONG i=0; i<customData2D.GetCount( ); i++ )
			{
				CICEAttributeDataArrayCustomType customData;
				customData2D.GetSubArray( i, customData );
				for( ULONG j=0; j<customData.GetCount( ); j++ )
				{
					ULONG nSize;
					const CICEAttributeDataArrayCustomType::TData* pBuffer;
					customData.GetData( j, &pBuffer, nSize );

					app.LogMessage( CString( (void*)pBuffer ) + L":" + CString( nSize ) );
				}
			}
		}
	}
};

// special case for the string type
template < >
class CICEAttributeDataLogger< CICEAttributeDataArrayString::TData >
{
	public:
	static void Log( ICEAttribute& attr )
	{
		Application app;
		if ( attr.GetStructureType() == XSI::siICENodeStructureSingle )
		{		
			CICEAttributeDataArrayString strData;
			attr.GetDataArray( strData );
			
			for( ULONG i=0; i<strData.GetCount( ); i++ )
			{
				ULONG nCount;
				const CICEAttributeDataArrayString::TData* pStr;
				strData.GetData( i, &pStr, nCount );
				
				app.LogMessage( CString( pStr, nCount ) + L":" + CString( nCount ) );
			}
		}
		else if ( attr.GetStructureType() == XSI::siICENodeStructureArray )
		{
			CICEAttributeDataArray2DString strData2D;

			attr.GetDataArray2D( strData2D );

			for( ULONG i=0; i<strData2D.GetCount( ); i++ )
			{
				CICEAttributeDataArrayString strData;
				strData2D.GetSubArray( i, strData );
				for( ULONG j=0; j<strData.GetCount( ); j++ )
				{
					ULONG nCount;
					const CICEAttributeDataArrayString::TData* pStr;
					strData.GetData( j, &pStr, nCount );

					app.LogMessage( CString( pStr, nCount ) + L":" + CString( nCount ) );
				}
			}
		}
	}
};

SICALLBACK InspectICEAttributes_Execute( CRef& in_ctxt )
{
	Application app;
	Context ctxt( in_ctxt );
	CValueArray args = ctxt.GetAttribute(L"Arguments");
	CValueArray objArray( (CValueArray&)args[0] );
	SIObject obj( objArray[0] );

	CRefArray attribs;
	if ( obj.IsA( XSI::siX3DObjectID ) )
	{
		attribs = Geometry( X3DObject(obj).GetActivePrimitive().GetGeometry() ).GetICEAttributes( );
	}
	else if ( obj.IsA( XSI::siPrimitiveID ) )
	{
		attribs = Geometry( Primitive(obj).GetGeometry() ).GetICEAttributes( );
	}
	else if ( obj.IsA( XSI::siGeometryID ) )
	{
		attribs = Geometry( obj ).GetICEAttributes( );
	}
	else if ( obj.IsA( XSI::siProjectItemID ) )
	{
		attribs = ProjectItem( obj ).GetICEAttributes( );
	}
	else
	{
		app.LogMessage( "InspectICEAttributes: No object selected for inspection.", siWarningMsg );
		return CStatus::False;
	}
		
	for( LONG i = 0; i<attribs.GetCount(); i++ )
    {
        ICEAttribute attr = attribs[i];
		
		app.LogMessage( L"*******************************************************************" );
		app.LogMessage( L"Name: " + attr.GetName() );
		app.LogMessage( L"DataType: " + CString(attr.GetDataType()) );
		app.LogMessage( L"StructType: " + CString(attr.GetStructureType()) );
		app.LogMessage( L"ContextType: " + CString(attr.GetContextType()) );
		app.LogMessage( L"IsConstant: " + CString(attr.IsConstant()) );
		app.LogMessage( L"Readonly: " + CString(attr.IsReadonly()) );
		app.LogMessage( L"IsDefined: " + CString(attr.IsDefined()) );
		app.LogMessage( L"AttributeCategory: " + CString(attr.GetAttributeCategory()) );
		app.LogMessage( L"Element count: " + CString(attr.GetElementCount()) );

		CStringArray customDataTypes = attr.GetCustomDataTypes();
		for (LONG j=0; j<customDataTypes.GetCount(); j++ )
		{
			app.LogMessage( CString("Custom data type: ") + customDataTypes[j] );	
		}

		switch( attr.GetDataType() )
		{
			case XSI::siICENodeDataFloat: CICEAttributeDataLogger<float>::Log( attr ); break;
			case XSI::siICENodeDataLong: CICEAttributeDataLogger<LONG>::Log( attr ); break;
			case XSI::siICENodeDataBool: CICEAttributeDataLogger<bool>::Log( attr ); break;
			case XSI::siICENodeDataVector2: CICEAttributeDataLogger<XSI::MATH::CVector2f>::Log( attr ); break;
			case XSI::siICENodeDataVector3: CICEAttributeDataLogger<XSI::MATH::CVector3f>::Log( attr ); break;
			case XSI::siICENodeDataVector4: CICEAttributeDataLogger<XSI::MATH::CVector4f>::Log( attr ); break;
			case XSI::siICENodeDataQuaternion: CICEAttributeDataLogger<XSI::MATH::CQuaternionf>::Log( attr ); break;
			case XSI::siICENodeDataRotation: CICEAttributeDataLogger<XSI::MATH::CRotationf>::Log( attr ); break;
			case XSI::siICENodeDataMatrix33: CICEAttributeDataLogger<XSI::MATH::CMatrix3f>::Log( attr ); break;
			case XSI::siICENodeDataMatrix44: CICEAttributeDataLogger<XSI::MATH::CMatrix4f>::Log( attr ); break;
			case XSI::siICENodeDataColor4: CICEAttributeDataLogger<XSI::MATH::CColor4f>::Log( attr ); break;
			case XSI::siICENodeDataShape: CICEAttributeDataLogger<XSI::MATH::CShape>::Log( attr ); break;
			case XSI::siICENodeDataCustomType: CICEAttributeDataLogger<CICEAttributeDataArrayCustomType::TData>::Log( attr ); break;
			case XSI::siICENodeDataString: CICEAttributeDataLogger<CICEAttributeDataArrayString::TData>::Log( attr ); break;
		};
    }

	// Return CStatus::Fail if you want to raise a script error
	return CStatus::OK;
}

SICALLBACK InspectICEAttributes_Menu_Init( CRef& in_ctxt )
{
	Context ctxt( in_ctxt );
	Menu oMenu;
	oMenu = ctxt.GetSource();
	MenuItem oNewItem;
	oMenu.AddCommandItem(L"Inspect ICE Attributes",L"InspectICEAttributes",oNewItem);
	return CStatus::OK;
}
