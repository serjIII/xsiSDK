// AddSmoothEdgeLoopTool Plugin
// Initial code generated by Softimage SDK Wizard
// Executed Mon May 23 09:29:27 UTC+0100 2011 by mcpherb
// 
// 
// Tip: You need to compile the generated code before you can load the plug-in.
// After you compile the plug-in, you can load it by clicking Update All in the Plugin Manager.
//
#include <xsi_application.h>
#include <xsi_context.h>
#include <xsi_pluginregistrar.h>
#include <xsi_status.h>
#ifndef linux
#define WIN32_LEAN_AND_MEAN
#include <windows.h> // Needed for OpenGL on windows
#endif
#include <wchar.h>
#include <GL/gl.h>
#include <xsi_utils.h>
#include <xsi_math.h>
#include <xsi_argument.h>
#include <xsi_toolcontext.h>
#include <xsi_menu.h>
#include <xsi_menuitem.h>
#include <xsi_selection.h>
#include <xsi_primitive.h>
#include <xsi_polygonmesh.h>
#include <xsi_comapihandler.h>
#include <xsi_kinematics.h>
#include <xsi_edge.h>
#include <xsi_vertex.h>
#include <xsi_operator.h>
#include <xsi_parameter.h>
#include <xsi_preferences.h>
#include <xsi_filter.h>

using namespace XSI::MATH; 
using namespace XSI; 

SICALLBACK XSILoadPlugin( PluginRegistrar& in_reg )
{
	in_reg.PutAuthor(L"Autodesk");
	in_reg.PutName(L"AddSmoothEdgeLoopTool Plugin");
	in_reg.PutVersion(1,0);
	in_reg.RegisterTool(L"AddSmoothEdgeLoopTool");
	//RegistrationInsertionPoint - do not remove this line

	return CStatus::OK;
}

SICALLBACK XSIUnloadPlugin( const PluginRegistrar& in_reg )
{
	return CStatus::OK;
}


////////////////////////////////////////////////////////////////////////////////
//
// AddSmoothEdgeLoopTool
//
////////////////////////////////////////////////////////////////////////////////

class AddSmoothEdgeLoopTool {
private: // Data
	enum ToolMode { kNone, kAddEdgeLoop, kEditCurvature };

	ToolMode		m_toolMode;
	CRefArray		m_picked;
	X3DObject		m_meshObject;
	LONG			m_edgeIndex;
	CLine			m_edgeLine;
	Operator		m_splitOp;
	double			m_splitRatio;
	bool			m_interacting;
	Parameter		m_dragParameter;
	CString			m_lastOpName;

public: // Methods
	AddSmoothEdgeLoopTool()
	:	m_toolMode( kNone )
	,	m_edgeIndex( -1 )
	{}

	~AddSmoothEdgeLoopTool()
	{}

	CString Translate( const CString &in_string )
	{
		CString translated = CUtils::Translate( in_string, L"XSIVIEWINTERACTION" );
		return !translated.IsEmpty() ? translated : in_string;
	}

	CStatus Activate( ToolContext& in_ctxt )
	{
		in_ctxt.SetCursor( siPenCursor );
		// NOTE: Must update XSIVIEWINTERACTION.dictxml if the tool description is changed
		in_ctxt.SetToolDescription( Translate(L"Add Smooth Edge Loop\nAdd Edge Loop\nSplit Edge Evenly\nContext Menu") );

		// Set selection filter to object if necessary
		Filter selFilter = Application().GetSelection().GetFilter();
		if ( !selFilter.GetName().IsEqualNoCase(L"object") )
		{
			CValue retval;
			CValueArray args(1);
			args[0] = L"object";
			Application().ExecuteCommand( L"SetSelFilter", args, retval );
		}

		return CStatus::OK;
	}

	void ClearData()
	{
		m_edgeIndex = -1;
		m_meshObject = X3DObject();
		m_picked.Clear();
		m_edgeLine = CLine();
		m_splitOp = Operator();
		m_dragParameter = Parameter();
	}

	void UpdateSplitRatio( ToolContext &in_ctxt )
	{
		// Udpate split ratio
		if ( m_dragParameter.IsValid() )
		{
			LONG x, y;
			CLine l_cursorRay;
			in_ctxt.GetMousePosition( x, y );
			in_ctxt.GetWorldRay( x, y, l_cursorRay );
			m_splitRatio = m_edgeLine.GetParameter( m_edgeLine.GetClosestPoint( l_cursorRay ) );

			// If close to half then snap to 50% ratio 
			if ( !in_ctxt.IsShiftKeyDown() && fabs(m_splitRatio - 0.5) < 0.025/*snap tolerance*/ ) m_splitRatio = 0.5;

			// Clamp to valid range defined in the operator
			double l_dNewRatio = m_splitRatio * 100.0;
			if ( l_dNewRatio < 0.001 ) l_dNewRatio = 0.001;
			else if ( l_dNewRatio > 99.999 ) l_dNewRatio = 99.999;
			in_ctxt.UpdateParameter( m_dragParameter, l_dNewRatio );
		}
	}

	void UpdateSelectedEdge( ToolContext &in_ctxt )
	{
		// Clear data
		ClearData();

		// Get edge under the cursor
		LONG x, y;
		in_ctxt.GetMousePosition( x, y );
		Selection selection = Application().GetSelection();
		if ( selection.GetCount() > 0 )
		{
			CLongArray l_points;
			l_points.Add( x);
			l_points.Add( y );
			CRefArray selected = selection.GetArray();
			in_ctxt.Pick( l_points, siPickSingleSubComponent, siPickRaycast, siEdgeFilter, selected, m_picked );
			if ( m_picked.GetCount() > 0 )
			{
				CComAPIHandler selectionItem( m_picked[0] ); 
				CComAPIHandler subComponentItem( selectionItem.GetProperty(L"SubComponent") );
				CValueArray    indices = subComponentItem.GetProperty( L"ElementArray" );
				m_meshObject = subComponentItem.GetProperty( L"Parent3DObject" ); 
				m_edgeIndex = indices[0];

				// Get edge	in world-space
				CTransformation localToGlobal = m_meshObject.GetKinematics().GetGlobal().GetTransform();
				PolygonMesh mesh( m_meshObject.GetActivePrimitive().GetGeometry() );
				Edge edge = mesh.GetEdges().GetItem(m_edgeIndex);
				CVertexRefArray verts = edge.GetNeighborVertices();
				Vertex vtx1  = verts.GetItem(0);
				Vertex vtx2  = verts.GetItem(1);
				CVector3 pt1 = vtx1.GetPosition();
				CVector3 pt2 = vtx2.GetPosition();	
				pt1.MulByTransformationInPlace(localToGlobal);
				pt2.MulByTransformationInPlace(localToGlobal);
				pt2.SubInPlace(pt1);
				m_edgeLine = CLine(pt1, pt2);
			}
		}
	}

	bool GetDefaultContinuity()
	{
		CValue retval;
		CValueArray args(1);
		args[0] = L"AddSmoothEdgeLoopTool_Continuity";
		Application().ExecuteCommand( L"GetGlobal", args, retval );
		return retval.IsEmpty() ? true : (bool)retval;
	}	

	void SetDefaultContinuity( bool in_value )
	{
		CValue retval;
		CValueArray args(2);
		args[0] = L"AddSmoothEdgeLoopTool_Continuity";
		args[1] = in_value;
		Application().ExecuteCommand( L"SetGlobal", args, retval );
	}

	bool ApplyEdgeLoopOperator()
	{
		bool l_bAdded = false;
		if ( m_edgeIndex != -1 )
		{
			// We want the SplitEdge command to be logged
			Application().GetPreferences().SetPreferenceValue( L"scripting.cmdlog", true );

			CValue retval;
			CValueArray args(2);
			args[0] = L"SplitEdge";
			args[1] = m_picked[0];
			if ( Application().ExecuteCommand( L"ApplyOp", args, retval ) == CStatus::OK )
			{
				CRefArray result = retval;
				m_splitOp = result[0];
				if (m_splitOp.IsValid())
				{
					m_splitOp.PutParameterValue( L"paralleledgeloop", true );
					m_splitOp.PutParameterValue( L"continuity", GetDefaultContinuity() ? 1.0 : 0.0 );
					m_lastOpName = result[0].GetAsText();
				}
				l_bAdded = true;
			}

			// Turn off logging again
			Application().GetPreferences().SetPreferenceValue( L"scripting.cmdlog", false );
		}
		return l_bAdded;
	}	

	CStatus MouseMove( ToolContext& in_ctxt )
	{
		UpdateSelectedEdge( in_ctxt );
		in_ctxt.Redraw( false );
		return CStatus::OK;
	}

	CStatus MouseDown( ToolContext& in_ctxt )
	{
		LONG x, y;
		in_ctxt.GetMousePosition( x, y );
		UpdateSelectedEdge( in_ctxt );

		if ( in_ctxt.IsLeftButtonDown() )
		{
			if ( ApplyEdgeLoopOperator() )
			{
				m_toolMode = kAddEdgeLoop;
				m_dragParameter = m_splitOp.GetParameter( L"ratioedge" );
				in_ctxt.BeginParameterUpdate( m_dragParameter );
				UpdateSplitRatio( in_ctxt );
			}
		}
		else if ( in_ctxt.IsMiddleButtonDown() )
		{
			if ( ApplyEdgeLoopOperator() )
			{
				LogResult();
				ClearData();
			}
		}
		else if ( in_ctxt.IsRightButtonDown() )
		{
			in_ctxt.ShowContextMenu( x, y );
			//in_ctxt.ExitTool();
		}
		return m_toolMode != kNone ? CStatus::OK : CStatus::False;
	}

	CStatus MouseDrag( ToolContext& in_ctxt )
	{
		LONG x, y;
		in_ctxt.GetMousePosition( x, y );

		if ( in_ctxt.IsLeftButtonDown() )
		{
			UpdateSplitRatio( in_ctxt );
		}
		return CStatus::OK;
	}

	CStatus MouseUp( ToolContext& in_ctxt )
	{
		LONG x, y;
		in_ctxt.GetMousePosition( x, y );

		if ( in_ctxt.IsLeftButtonDown() )
		{
			UpdateSplitRatio( in_ctxt );
			in_ctxt.EndParameterUpdate( m_dragParameter );
			LogResult();
			ClearData();
		}
		m_toolMode = kNone;
		return CStatus::OK;
	}

	CStatus Draw( ToolContext& in_ctxt )
	{
		// Called when a redraw occurs to allow the tool to show feedback
		if ( in_ctxt.IsActiveView() && !in_ctxt.IsNavigating() )
		{
			if ( m_toolMode == kNone && m_edgeIndex != -1 )
			{
				// Draw edge under the cursor
				CVector3 pt1 = m_edgeLine.GetOrigin();
				CVector3 pt2 = m_edgeLine.GetPosition(1.0);
				glLineWidth(2.0);
				glColor3d(0.0, 1.0, 0.0);
				glBegin( GL_LINES );
				glVertex3d( pt1.GetX(), pt1.GetY(), pt1.GetZ() );
				glVertex3d( pt2.GetX(), pt2.GetY(), pt2.GetZ() );
				glEnd();
				glLineWidth(1.0);
			}
		}
		return CStatus::OK;
	}

	CStatus MenuInit( ToolContext& in_ctxt )
	{
		MenuItem menuItem;
		Menu menu = in_ctxt.GetSource();
		CRef lastOp; lastOp.Set( m_lastOpName );

		// NOTE: Must update XSIVIEWINTERACTION.dictxml if any menu item names are changed
		menu.AddCallbackItem( Translate(L"Preserve Mesh Curvature"), L"AddSmoothEdgeLoopTool_ToggleContinuity", menuItem );
		menuItem.PutChecked( GetDefaultContinuity() );
		menu.AddSeparatorItem();
		menu.AddCallbackItem( Translate(L"Last Split Operator..."), L"AddSmoothEdgeLoopTool_InspectOperator", menuItem );
		menuItem.PutEnabled( lastOp.IsValid() );
		menu.AddCallbackItem( Translate(L"Exit Tool"), L"AddSmoothEdgeLoopTool_ExitTool", menuItem );
		return CStatus::OK;
	}

	CStatus ToggleContinuity( ToolContext& in_ctxt )
	{
		SetDefaultContinuity( !GetDefaultContinuity() );
		return CStatus::OK;
	}

	CStatus InspectOperator( ToolContext& in_ctxt )
	{
		CRef lastOp;
		lastOp.Set( m_lastOpName );
		if ( lastOp.IsValid() )
		{
			CValue retval;
			CValueArray args(1);
			args[0] = lastOp;
			Application().ExecuteCommand( L"InspectObj", args, retval );
		}
		return CStatus::OK;
	}

	CStatus ExitTool( ToolContext& in_ctxt )
	{
		in_ctxt.ExitTool();
		return CStatus::OK;
	}

	void LogResult () 
	{
		// Log SetValue commands to replicate the tool interaction and maintain the history log
		Application().GetPreferences().SetPreferenceValue( L"scripting.cmdlog", true );

		CValue retval;
		CValueArray args(2);

		args[0] = m_lastOpName + L".paralleledgeloop";
		args[1] = m_splitOp.GetParameterValue( L"paralleledgeloop" );
		Application().ExecuteCommand( L"SetValue", args, retval );

		args[0] = m_lastOpName + L".continuity";
		args[1] = m_splitOp.GetParameterValue( L"continuity" );
		Application().ExecuteCommand( L"SetValue", args, retval );

		args[0] = m_lastOpName + L".ratioedge";
		args[1] = m_splitOp.GetParameterValue( L"ratioedge" );
		Application().ExecuteCommand( L"SetValue", args, retval );

		Application().GetPreferences().SetPreferenceValue( L"scripting.cmdlog", false );
	}

}; // end class


////////////////////////////////////////////////////////////////////////////////
//
// Plugin Callbacks
//
////////////////////////////////////////////////////////////////////////////////

SICALLBACK AddSmoothEdgeLoopTool_Init( CRef& in_ctxt )
{
	AddSmoothEdgeLoopTool *l_pTool = new AddSmoothEdgeLoopTool;
	if ( !l_pTool ) return CStatus::Fail;
	ToolContext l_ctxt( in_ctxt );
	l_ctxt.PutUserData( CValue((CValue::siPtrType)l_pTool) );
	return CStatus::OK;
}

SICALLBACK AddSmoothEdgeLoopTool_Term( CRef& in_ctxt )
{
	ToolContext l_ctxt( in_ctxt );
	AddSmoothEdgeLoopTool *l_pTool = (AddSmoothEdgeLoopTool *)(CValue::siPtrType)l_ctxt.GetUserData();
	if ( !l_pTool ) return CStatus::Fail;
	delete l_pTool;
	l_ctxt.PutUserData( CValue((CValue::siPtrType)NULL) ); // Clear user data
	return CStatus::OK;
}

// Use a macro to simplify callback setup and forwarding...
#define DECLARE_TOOL_CALLBACK(TOOL,CALLBACK) \
SICALLBACK TOOL##_##CALLBACK( ToolContext& in_ctxt ) { \
	TOOL *l_pTool = (TOOL *)(CValue::siPtrType)in_ctxt.GetUserData(); \
	return ( l_pTool ? l_pTool->CALLBACK( in_ctxt ) : CStatus::Fail ); }

DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, Activate );
DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, MouseDown );
DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, MouseDrag );
DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, MouseUp );
DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, Draw );
DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, MouseMove );
DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, MenuInit );
DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, ToggleContinuity );
DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, InspectOperator );
DECLARE_TOOL_CALLBACK( AddSmoothEdgeLoopTool, ExitTool );
