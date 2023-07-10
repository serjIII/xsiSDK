// CustomUI.cpp: implementation of the CCustomUI class.
//
//	Copyright 2008 Autodesk, Inc.  All rights reserved.  
//	Use of this software is subject to the terms of the Autodesk license agreement 
//	provided at the time of installation or download, or which otherwise accompanies 
//	this software in either electronic or hard copy form.   

#include "stdafx.h"
#include <stdio.h>
#include <assert.h>
#include "CustomUI.h"

#include "resource.h"

#include <xsi_ref.h>
#include <xsi_viewnotification.h>
#include <xsi_x3dobject.h>
#include <xsi_siobject.h>
#include <xsi_viewcontext.h>
#include <xsi_primitive.h>
#include <xsi_geometry.h>
#include <xsi_point.h>
#include <xsi_parameter.h>
#include <xsi_cluster.h>

extern HINSTANCE __gInstance;

//
// Map of standard Windows message
//

Msg2Name Maps [] =
{

"WM_NULL",0x0000,
"WM_CREATE",0x0001,
"WM_DESTROY",0x0002,
"WM_MOVE",0x0003,
"WM_SIZE",0x0005,
"WM_ACTIVATE",0x0006,

"WM_SETFOCUS",0x0007,
"WM_KILLFOCUS",0x0008,
"WM_ENABLE",0x000A,
"WM_SETREDRAW",0x000B,
"WM_SETTEXT",0x000C,
"WM_GETTEXT",0x000D,
"WM_GETTEXTLENGTH",0x000E,
"WM_PAINT",0x000F,
"WM_CLOSE",0x0010,
"WM_QUERYENDSESSION",0x0011,
"WM_QUIT",0x0012,
"WM_QUERYOPEN",0x0013,
"WM_ERASEBKGND",0x0014,
"WM_SYSCOLORCHANGE",0x0015,
"WM_ENDSESSION",0x0016,
"WM_SHOWWINDOW",0x0018,
"WM_WININICHANGE",0x001A,

"WM_DEVMODECHANGE",0x001B,
"WM_ACTIVATEAPP",0x001C,
"WM_FONTCHANGE",0x001D,
"WM_TIMECHANGE",0x001E,
"WM_CANCELMODE",0x001F,
"WM_MOUSEACTIVATE",0x0021,
"WM_CHILDACTIVATE",0x0022,
"WM_QUEUESYNC",0x0023,

"WM_GETMINMAXINFO",0x0024,
"WM_PAINTICON",0x0026,
"WM_ICONERASEBKGND",0x0027,
"WM_NEXTDLGCTL",0x0028,
"WM_SPOOLERSTATUS",0x002A,
"WM_DRAWITEM",0x002B,
"WM_MEASUREITEM",0x002C,
"WM_DELETEITEM",0x002D,
"WM_VKEYTOITEM",0x002E,
"WM_CHARTOITEM",0x002F,
"WM_SETFONT",0x0030,
"WM_GETFONT",0x0031,
"WM_SETHOTKEY",0x0032,
"WM_GETHOTKEY",0x0033,
"WM_QUERYDRAGICON",0x0037,
"WM_COMPAREITEM",0x0039,
"WM_COMPACTING",0x0041,
"WM_COMMNOTIFY",0x0044,
"WM_WINDOWPOSCHANGING",0x0046,
"WM_WINDOWPOSCHANGED",0x0047,
"WM_POWER",0x0048,
"WM_COPYDATA",0x004A,
"WM_CANCELJOURNAL",0x004B,
"WM_NOTIFY",0x004E,
"WM_INPUTLANGCHANGEREQUEST",0x0050,
"WM_INPUTLANGCHANGE",0x0051,
"WM_TCARD",0x0052,
"WM_HELP",0x0053,
"WM_USERCHANGED",0x0054,
"WM_NOTIFYFORMAT",0x0055,
"WM_CONTEXTMENU",0x007B,
"WM_STYLECHANGING",0x007C,
"WM_STYLECHANGED",0x007D,
"WM_DISPLAYCHANGE",0x007E,
"WM_GETICON",0x007F,
"WM_SETICON",0x0080,
"WM_NCCREATE",0x0081,
"WM_NCDESTROY",0x0082,
"WM_NCCALCSIZE",0x0083,
"WM_NCPAINT",0x0085,
"WM_NCACTIVATE",0x0086,
"WM_GETDLGCODE",0x0087,
"WM_SYNCPAINT",0x0088,
"WM_NCMOUSEMOVE",0x00A0,
"WM_NCLBUTTONDOWN",0x00A1,
"WM_NCLBUTTONUP",0x00A2,
"WM_NCLBUTTONDBLCLK",0x00A3,
"WM_NCRBUTTONDOWN",0x00A4,
"WM_NCRBUTTONUP",0x00A5,
"WM_NCRBUTTONDBLCLK",0x00A6,
"WM_NCMBUTTONDOWN",0x00A7,
"WM_NCMBUTTONUP",0x00A8,
"WM_NCMBUTTONDBLCLK",0x00A9,

"WM_KEYFIRST",0x0100,
"WM_KEYDOWN",0x0100,
"WM_KEYUP",0x0101,
"WM_CHAR",0x0102,
"WM_DEADCHAR",0x0103,
"WM_SYSKEYDOWN",0x0104,
"WM_SYSKEYUP",0x0105,
"WM_SYSCHAR",0x0106,
"WM_SYSDEADCHAR",0x0107,
"WM_KEYLAST",0x0108,

"WM_IME_STARTCOMPOSITION",0x010D,
"WM_IME_ENDCOMPOSITION",0x010E,
"WM_IME_COMPOSITION",0x010F,
"WM_IME_KEYLAST",0x010F,

"WM_INITDIALOG",0x0110,
"WM_COMMAND",0x0111,
"WM_SYSCOMMAND",0x0112,
"WM_TIMER",0x0113,
"WM_HSCROLL",0x0114,
"WM_VSCROLL",0x0115,
"WM_INITMENU",0x0116,
"WM_INITMENUPOPUP",0x0117,
"WM_MENUSELECT",0x011F,
"WM_MENUCHAR",0x0120,
"WM_ENTERIDLE",0x0121,

"WM_MENURBUTTONUP",0x0122,
"WM_MENUDRAG",0x0123,
"WM_MENUGETOBJECT",0x0124,
"WM_UNINITMENUPOPUP",0x0125,
"WM_MENUCOMMAND",0x0126,

"WM_CTLCOLORMSGBOX",0x0132,
"WM_CTLCOLOREDIT",0x0133,
"WM_CTLCOLORLISTBOX",0x0134,
"WM_CTLCOLORBTN",0x0135,
"WM_CTLCOLORDLG",0x0136,
"WM_CTLCOLORSCROLLBAR",0x0137,
"WM_CTLCOLORSTATIC",0x0138,

"WM_MOUSEMOVE",0x0200,
"WM_LBUTTONDOWN",0x0201,
"WM_LBUTTONUP",0x0202,
"WM_LBUTTONDBLCLK",0x0203,
"WM_RBUTTONDOWN",0x0204,
"WM_RBUTTONUP",0x0205,
"WM_RBUTTONDBLCLK",0x0206,
"WM_MBUTTONDOWN",0x0207,
"WM_MBUTTONUP",0x0208,
"WM_MBUTTONDBLCLK",0x0209,


"WM_MOUSEWHEEL",0x020A,
"WM_MOUSELAST",0x020A,

"WM_PARENTNOTIFY",0x0210,
"WM_ENTERMENULOOP",0x0211,
"WM_EXITMENULOOP",0x0212,
"WM_NEXTMENU",0x0213,
"WM_SIZING",0x0214,
"WM_CAPTURECHANGED",0x0215,
"WM_MOVING",0x0216,

"WM_POWERBROADCAST",0x0218,

"WM_DEVICECHANGE",0x0219,

"WM_MDICREATE",0x0220,
"WM_MDIDESTROY",0x0221,
"WM_MDIACTIVATE",0x0222,
"WM_MDIRESTORE",0x0223,
"WM_MDINEXT",0x0224,
"WM_MDIMAXIMIZE",0x0225,
"WM_MDITILE",0x0226,
"WM_MDICASCADE",0x0227,
"WM_MDIICONARRANGE",0x0228,
"WM_MDIGETACTIVE",0x0229,


"WM_MDISETMENU",0x0230,
"WM_ENTERSIZEMOVE",0x0231,
"WM_EXITSIZEMOVE",0x0232,
"WM_DROPFILES",0x0233,
"WM_MDIREFRESHMENU",0x0234,


"WM_IME_SETCONTEXT",0x0281,
"WM_IME_NOTIFY",0x0282,
"WM_IME_CONTROL",0x0283,
"WM_IME_COMPOSITIONFULL",0x0284,
"WM_IME_SELECT",0x0285,
"WM_IME_CHAR",0x0286,
"WM_IME_REQUEST",0x0288,
"WM_IME_KEYDOWN",0x0290,
"WM_IME_KEYUP",0x0291,
"WM_MOUSEHOVER",0x02A1,
"WM_MOUSELEAVE",0x02A3,
"WM_CUT",0x0300,
"WM_COPY",0x0301,
"WM_PASTE",0x0302,
"WM_CLEAR",0x0303,
"WM_UNDO",0x0304,
"WM_RENDERFORMAT",0x0305,
"WM_RENDERALLFORMATS",0x0306,
"WM_DESTROYCLIPBOARD",0x0307,
"WM_DRAWCLIPBOARD",0x0308,
"WM_PAINTCLIPBOARD",0x0309,
"WM_VSCROLLCLIPBOARD",0x030A,
"WM_SIZECLIPBOARD",0x030B,
"WM_ASKCBFORMATNAME",0x030C,
"WM_CHANGECBCHAIN",0x030D,
"WM_HSCROLLCLIPBOARD",0x030E,
"WM_QUERYNEWPALETTE",0x030F,
"WM_PALETTEISCHANGING",0x0310,
"WM_PALETTECHANGED",0x0311,
"WM_HOTKEY",0x0312,
"WM_PRINT",0x0317,
"WM_PRINTCLIENT",0x0318,
"WM_HANDHELDFIRST",0x0358,
"WM_HANDHELDLAST",0x035F,
"WM_AFXFIRST",0x0360,
"WM_AFXLAST",0x037F,
"WM_PENWINFIRST",0x0380,
"WM_PENWINLAST",0x038F,
NULL,0
};

//
// Helper function to convert a wide char string into ASCII
//

void W2AHelper( LPSTR out_sz, LPCWSTR in_wcs, int in_cch = -1);


//
// Standard Win32 dialog callback
//

LRESULT CALLBACK	_view_proc(HWND hDlg, UINT message, WPARAM wParam, LPARAM lParam);

//////////////////////////////////////////////////////////////////////
// Construction/Destruction
//////////////////////////////////////////////////////////////////////

CCustomUI::CCustomUI()
{

}

CCustomUI::~CCustomUI()
{

}

//********************************************************************
//
// @mfunc	CCustomUI::Init | Creates the dialog has a child of the
//								window handle specified by the view
//								context.
//
//********************************************************************
LRESULT	CCustomUI::Init( XSI::CRef& in_pViewCtx )
{
	XSI::ViewContext l_vViewContext = in_pViewCtx;
	assert ( l_vViewContext.IsValid() );


	l_hWnd = CreateDialog(  __gInstance ,  MAKEINTRESOURCE(IDD_CUSTOMUI_EXAMPLE), (HWND)l_vViewContext.GetParentWindowHandle(), (DLGPROC)_view_proc);
	
	return S_OK;
}

//********************************************************************
//
// @mfunc	CCustomUI::Term | Destroys the dialog
//
//********************************************************************
LRESULT	CCustomUI::Term( XSI::CRef& in_pViewCtx )
{

	DestroyWindow ( l_hWnd );
	l_hWnd = NULL;

	return S_OK;
}

//********************************************************************
//
// @mfunc	CCustomUI::Notify | Handles Softimage notifications
//
//********************************************************************
LRESULT CCustomUI::Notify ( XSI::CRef& in_pViewCtx )
{
	using namespace XSI;

	//
	// Convert the CRef into a ViewContext
	//

	XSI::ViewContext l_vViewContext = in_pViewCtx;
	assert ( l_vViewContext.IsValid() );

	//
	// Retrieve the notification information from the view context
	//

	XSI::siEventID in_eNotifcation;
	void*	in_pData;

	l_vViewContext.GetNotificationData ( in_eNotifcation, &in_pData );

	switch ( in_eNotifcation )
	{
	case siOnSelectionChange:
		{
			//
			// The selection list has changed. Cast the notification data
			// into a CSelectionChangeNotification pointer to get at the
			// details.
			//

			XSI::CSelectionChangeNotification* l_pSelection = (XSI::CSelectionChangeNotification*)in_pData;

			XSI::CString	l_szMessage;
			l_szMessage = L"XSI_SELECTION_CHANGED_CV";
			l_szMessage += L" [ ";

			//
			// Build a string of all objects that are in the selection list
			//

			for (int c=0;c<l_pSelection->GetSelectionList().GetCount();c++)
			{
				XSI::CRef&	l_pCRef = l_pSelection->GetSelectionList().GetItem(c);

				XSI::SIObject mySIObject ( l_pCRef );
				
				XSI::CString	Name = mySIObject.GetFullName();

				if ( c != 0 )
					l_szMessage += L",";

				l_szMessage += Name;;

			}

			l_szMessage += L" ]";

			//
			// And print it
			//

			char *l_szMessChar = new char [ l_szMessage.Length() + 1 ];
			W2AHelper ( l_szMessChar, l_szMessage.GetWideString() );
			PrintNotification ( l_szMessChar );
			delete [] l_szMessChar;

			break;
			
		}

	case siOnTimeChange:
		{
			//
			// The current time has changed (the timeline has been scrubbed).
			// Cast the data into a CTimeChangeNotification pointer to get at the
			// details and print it.
			//

			XSI::CTimeChangeNotification* l_pTimeChange = (XSI::CTimeChangeNotification*)in_pData;
			
			XSI::CString	l_szMessage;
			l_szMessage = L"XSI_TIME_CHANGE_CV";
		
			char *l_szMessChar = new char [ l_szMessage.Length() + 1 ];
			W2AHelper ( l_szMessChar, l_szMessage.GetWideString() );
			PrintNotification ( l_szMessChar );
			delete [] l_szMessChar;
			
			break;
		}

	case siOnObjectAdded:
		{
			//
			// A new object is being added to the scene
			// Print it's name 
			//
            
			XSI::CObjectAddedNotification* l_pObjectAdded = (XSI::CObjectAddedNotification*)in_pData;
			
			XSI::CString	l_szMessage;
			l_szMessage = L"XSI_OBJECT_ADDED_CV";

			const XSI::CRef&	l_pCRef = l_pObjectAdded->GetObjectAdded();
			XSI::SIObject mySIObject ( l_pCRef );
			XSI::CString	Name = mySIObject.GetFullName();

			l_szMessage += L"[ ";
			l_szMessage += Name;
			l_szMessage += L" ]";
		
			char *l_szMessChar = new char [ l_szMessage.Length() + 1 ];
			W2AHelper ( l_szMessChar, l_szMessage.GetWideString() );
			PrintNotification ( l_szMessChar );
			delete [] l_szMessChar;
			
			break;
		}
	case siOnWindowEvent:
		{

			XSI::CWindowNotification* lpWindowEvent = (XSI::CWindowNotification*)in_pData;

			switch (lpWindowEvent->GetWindowState())
			{
			case siWindowSize: 
				{
					int x,y,w,h;

					lpWindowEvent->GetPosition (x,y,w,h);
					char l_szMessage[MAX_PATH];
					sprintf ( l_szMessage, "XSI_WINDOW_SIZE: (%d,%d) (%d, %d)",x,y,w,h);
					PrintNotification(l_szMessage);
                    break;
				}
			case siWindowPaint: PrintNotification ( "XSI_WINDOW_PAINT"); break;
			case siWindowSetFocus: PrintNotification ( "XSI_WINDOW_SETFOCUS"); break;
			case siWindowLostFocus: PrintNotification ( "XSI_WINDOW_LOSTFOCUS");break;
			}
			break;
		}

	case siOnObjectRemoved:
		{
			//
			// An existing object is being removed from the scene (deleted)
			// Print it's name 
			//
            
			XSI::CObjectRemovedNotification* l_pObjectRemoved = (XSI::CObjectRemovedNotification*)in_pData;
			
			XSI::CString	l_szMessage;
			l_szMessage = L"XSI_OBJECT_REMOVED_CV";

			const XSI::CString	l_szObjectName = l_pObjectRemoved->GetObjectName();
			const XSI::siBranchFlag l_eFlag = l_pObjectRemoved->GetBranchFlag();
			l_szMessage += L"[ ";
			l_szMessage += l_szObjectName;

			switch (l_eFlag)
			{
			case siNode:	l_szMessage += L" [Node] "; break;
			case siBranch:	l_szMessage += L" [Branch] "; break;
			case siUnspecified:	l_szMessage += L" [Unspecified] "; break;
			}

			l_szMessage += L" ]";
		
			char *l_szMessChar = new char [ l_szMessage.Length() + 1 ];
			W2AHelper ( l_szMessChar, l_szMessage.GetWideString() );
			PrintNotification ( l_szMessChar );
			delete [] l_szMessChar;
			
			break;
		}


	case siOnValueChange:
		{
			//
			// Something has changed in the scene.
			//

			XSI::CString	l_szMessage;
			l_szMessage = L"XSI_SET_VALUE_CV ";
		
			XSI::CValueChangeNotification* l_pData = (XSI::CValueChangeNotification*) in_pData;

			//
			// Get the object that generated the notification
			//
			XSI::CRef cRef = l_pData->GetOwner();

			XSI::CString l_csCIDName = cRef.GetClassIDName();

			//
			// Get the full name of the parameter that has changed
			//

			l_szMessage += l_csCIDName;
			l_szMessage += L" [ ";
			l_szMessage += l_pData->GetComponentName();

			// note: GetOwner returns the Softimage object that initiates the 
			// notification. The returned object is actually a CRef object 
			// which refers to the underlying Softimage object which can be accessed
			// through an API class.
			//			
			// For instance, if a parameter value is changed on a primitive 
			// object then GetOwner returns a reference (i.e. CRef) to the 
			// primitive object. The CRef can then be used to access the 
			// primitive's geometry with the Primitive API class.
			// 
			// Please refer to the CRef documentation page and the section
			// entitled "Understanding the C++ library" in the on-line 
			// documentation for more details.
			//

			LONG objClassID = cRef.GetClassID();
			switch (objClassID)
			{
				case siPrimitiveID:
				{
					Primitive primObj(cRef);
					Geometry geomObj = primObj.GetGeometry();
					LONG nPoints = geomObj.GetPoints().GetCount();

					l_szMessage += L": Number of points: " + CValue(nPoints).GetAsText();
				}
				break;

				case siParameterID:
				{
					Parameter paramObj(cRef);
					l_szMessage += L": New value: " + paramObj.GetValue().GetAsText();
				}
				break;

				case siClusterID:
				{
					Cluster clustObj(cRef);
					CClusterElementArray elemArray = clustObj.GetElements();
					LONG nElems = elemArray.GetCount();
					l_szMessage += L": Number of elements: " + CValue(nElems).GetAsText();
				}
				break;
			}

			l_szMessage += L" ] ";

			char *l_szMessChar = new char [ l_szMessage.Length() + 1 ];
			W2AHelper ( l_szMessChar, l_szMessage.GetWideString() );
			PrintNotification ( l_szMessChar );
			delete [] l_szMessChar;
			
			break;

		}

	}


	return S_OK;
}

LRESULT CCustomUI::SetAttributeValue ( XSI::CString& in_cString, XSI::CValue& in_vValue )
{

	XSI::CString l_mess;
	l_mess = L"SetAttributeValue: ";
	l_mess += in_cString;
	PrintNotification ( (char*)l_mess.GetAsciiString());

	return S_OK;
}

LRESULT CCustomUI::GetAttributeValue ( XSI::CString& in_cString, XSI::CValue& out_vValue )
{

	XSI::CString l_mess;
	l_mess = L"GetAttributeValue: ";
	l_mess += in_cString;
	PrintNotification ( (char*)l_mess.GetAsciiString());

	return S_OK;
}



//********************************************************************
//
// @mfunc	CCustomUI::SetWindowSize | It is important to handle this 
//										message or else the window
//										will end up in the wrong place
//										in the Softimage UI.
//
//********************************************************************
LRESULT CCustomUI::SetWindowSize(int ox, int oy, int cx, int cy)
{

	SetWindowPos( l_hWnd,NULL,ox,oy,cx,cy,SWP_NOZORDER); 

	return S_OK;
}

	
LRESULT CCustomUI::Paint( WPARAM, LPARAM )
{
	
	return S_OK;
}

LRESULT CCustomUI::MouseMove( WPARAM, LPARAM )
{

	return S_OK;
}

void	CCustomUI::PrintNotification ( char*	in_szMessage )
{
	// Get the number of items in the list box.
	int count = (int)SendDlgItemMessage ( l_hWnd, IDC_OUTPUT2,LB_GETCOUNT, 0, 0);

	if ( count > 500 )
	{
		SendDlgItemMessage ( l_hWnd, IDC_OUTPUT2,LB_RESETCONTENT,0,0 );
		count = 0;
	}


	SendDlgItemMessage ( l_hWnd, IDC_OUTPUT2,LB_ADDSTRING, 0, (LPARAM)in_szMessage);

	SendDlgItemMessage ( l_hWnd, IDC_OUTPUT2,LB_SETCURSEL, count, 0);
}


LRESULT CALLBACK	_view_proc(HWND hDlg, UINT message, WPARAM wParam, LPARAM lParam)
{
	// Get the number of items in the list-box
	int count = (int)SendDlgItemMessage ( hDlg, IDC_OUTPUT,LB_GETCOUNT, 0, 0);

	if ( count > 500 )
	{
		SendDlgItemMessage ( hDlg, IDC_OUTPUT,LB_RESETCONTENT,0,0 );
		count = 0;
	}

	int index =0;
	while (1)
	{
		if ( Maps[index].m_iID == message )
		{
			char newString[512];
			sprintf ( newString, "%s   wParam:0x%X   lParam:0x%X",Maps[index].m_szName,wParam, lParam );
			SendDlgItemMessage ( hDlg, IDC_OUTPUT,LB_ADDSTRING, 0, (LPARAM)newString);
			break;
		}
		index++;

		if ( Maps[index].m_szName == NULL )
		{
			break;
		}
	}

	
	SendDlgItemMessage ( hDlg, IDC_OUTPUT,LB_SETCURSEL, count, 0);

	switch (message)
	{
		

		case WM_INITDIALOG:
			{
			
				return TRUE;

			}
		
		case WM_SHOWWINDOW:
			{
				//
				// Very important that we hide the window when we receive this message
				//
				ShowWindow ( hDlg, (int)wParam );

				break;
			}
			break;

		case WM_CHAR:
			{
				MessageBox ( hDlg, "CustomUITest.dll receives a WM_CHAR", "test", MB_OK );
				int a = 10;
				break;
			}
		case WM_KEYDOWN:
			{
				MessageBox ( hDlg, "CustomUITest.dll receives a df", "test", MB_OK );
				int a = 10;
				break;
			}
		case WM_CLOSE:

			EndDialog(hDlg, 0);
			break;
	}

    return FALSE;
}


void W2AHelper( LPSTR out_sz, LPCWSTR in_wcs, int in_cch )
{
	if ( out_sz != NULL && 0 != in_cch )
	{
		out_sz[0] = '\0' ;

		if ( in_wcs != NULL )
		{
			size_t l_iLen = 0;
			l_iLen = ::wcstombs( out_sz, in_wcs, ( in_cch < 0 ) ? ::wcslen(in_wcs) + 1 : (size_t) in_cch ) ;

			if ( in_cch > 0 ) { out_sz[ in_cch - 1 ] = '\0'; }
		}
	}
}
