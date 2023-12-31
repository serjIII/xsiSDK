// XSIServerPlugin
// 
// This plugin provides an example of a TCP server implementation for Softimage. The 
// server manages client connections asynchronously. The server executes 
// simple requests received from client connections.
//
// The XSIClientSample command-line application can be used for sending requests 
// to the Softimage server.
//
// Initial code generated by Softimage SDK Wizard
// Executed Fri Nov 3 17:21:06 EST 2006 by mbelzile
// 
// Tip: You need to compile the generated code before you can load the plug-in.
// After you compile the plug-in, you can load it by right-clicking the 
// User Root | Plug-ins node in the Plugin Manager tree or by clicking Update All.
//
//	Copyright 2008 Autodesk, Inc.  All rights reserved.  
//	Use of this software is subject to the terms of the Autodesk license agreement 
//	provided at the time of installation or download, or which otherwise accompanies 
//	this software in either electronic or hard copy form.   

using System;
using System.Net;
using XSI.TCP;
using XSI.Helpers;
using Softimage.XSIOM; // Softimage object model

public class XSIPlugin : Base
{
	public bool Load( PluginRegistrar in_reg )
	{
		in_reg.Author = "Softimage";
		in_reg.Name = "XSIServerPlugin";
		in_reg.Major = 1;
		in_reg.Minor = 0;

		in_reg.RegisterCommand("XSIStartServer",null );
		in_reg.RegisterCommand("XSIStopServer",null );
		in_reg.RegisterTimerEvent("ProcessRequestsTimerEvent", 500, 0);
		TimerEvent evTimer = (TimerEvent)GetXSI().EventInfos["ProcessRequestsTimerEvent"];
		evTimer.Mute = true;

		in_reg.RegisterMenu(siMenuAnchorPoints.siMenuMainTopLevelID,"XSIServer_Menu",false,false);
		in_reg.RegisterProperty("XSIServerProp");
	//RegistrationInsertionPoint - do not remove this line

		return true;
	}

	public bool Unload( PluginRegistrar in_reg )
	{
		String strPluginName = null;
		strPluginName = in_reg.Name;
		Log(strPluginName + " has been unloaded.");

		// stop server
		XSIServer.Stop();

		return true;
	}
}

// Timer event calback for executing client requests in Softimage. 
// Note: This callback is necessary in order to perform Softimage operations in the 
// main thread. Calling Softimage operations from worker threads may put Softimage in an 
// undefined state.
public class ProcessRequestsTimerEvent : Base
{
	public bool OnEvent(Context in_ctxt)
	{
		ClientRequests requests = new ClientRequests();
		requests.Process();
		return false; // return false if we don't want to mute the timer
	}
}

// The Softimage tcp server implementation
public class XSIServer
{
	public static RequestsService m_provider = null;
	public static Server m_server = null;
	public static void Start( String in_address, int in_port, int in_max )
	{
		if (m_server == null)
		{
			// Creates a TCP server to execute client requests asynchronously. 
			m_provider = new RequestsService();
			m_server = new Server(m_provider, in_port, in_max);
			m_server.Start(in_address);
		}
	}
	public static void Stop()
	{
		if (m_server != null)
		{
			m_server.Stop();
			m_server = null;
		}
	}
}

// XSIStartServer command
public class XSIStartServer : Base
{
	public bool Execute( Context in_ctxt )
	{
		TimerEvent evTimer = (TimerEvent)GetXSI().EventInfos["ProcessRequestsTimerEvent"];

		try
		{
			// use localhost adr
			Info("Softimage server started.");
			Property p = XSIServerProp.PSet(GetXSI());
			XSIServer.Start(	(String)p.Parameters["Address"].GetValue2(null),
								(int)p.Parameters["Port"].GetValue2(null),
								(int)p.Parameters["MaxCnx"].GetValue2(null) );
			evTimer.Mute = false;
		}
		catch
		{
			XSIServer.Stop();
			evTimer.Mute = true;
		}
		return true;
	}
}

// XSIStopServer command
public class XSIStopServer : Base
{
	public bool Execute(Context in_ctxt)
	{
		Info("Softimage server stopped.");
		XSIServer.Stop();
		TimerEvent evTimer = (TimerEvent)GetXSI().EventInfos["ProcessRequestsTimerEvent"];
		evTimer.Mute = true;
		return true;
	}
}

// XSIServer menu
public class XSIServer_Menu : Base
{
	public bool Init( Context in_ctxt )
	{
		Menu oMenu = null;
		oMenu = (Menu)in_ctxt.Source;
		oMenu.AddCallbackItem("Softimage Server Properties...", "OnOpenXSIServerPPG");
		return true;
	}

	public bool OnOpenXSIServerPPG(Context in_ctxt)
	{	
		try
		{
			Array inspectobjArgs = Array.CreateInstance( typeof(Object), 5 );
			inspectobjArgs.SetValue(XSIServerProp.PSet(GetXSI()), 0);
			GetXSI().ExecuteCommand( "InspectObj", inspectobjArgs);
		}
		catch (Exception e)
		{
			Error(e.ToString());
		}
		return true;
	}
}

//
// XSIServerProp: Provides the UI for managing the Softimage server
//

public class XSIServerProp : Base
{
	public bool Define(Context in_ctxt)
	{
		try
		{
			CustomProperty oCustomProperty = (CustomProperty)in_ctxt.Source;
			oCustomProperty.AddParameter2("StartStop",siVariantType.siInt4,2,1,2,1,2,siParamClassification.siClassifUnknown,(int)siCapabilities.siPersistable,null,null,null);
			oCustomProperty.AddParameter2("Address", siVariantType.siString, "127.0.0.1", null, null, null, null, siParamClassification.siClassifUnknown, (int)(siCapabilities.siPersistable | siCapabilities.siReadOnly), null, null, null);
			oCustomProperty.AddParameter2("Port", siVariantType.siInt4, 10000, 10000, 65536, 10000, 65536, siParamClassification.siClassifUnknown, (int)siCapabilities.siPersistable, null, null, null);
			oCustomProperty.AddParameter2("MaxCnx", siVariantType.siInt4, 10, 1, 20, 1, 20, siParamClassification.siClassifUnknown, (int)siCapabilities.siPersistable, null, null, null);
			oCustomProperty.AddParameter2("ProcessReqTimer", siVariantType.siInt4, 500, 100, 10000, 100, 10000, siParamClassification.siClassifUnknown, (int)siCapabilities.siPersistable, null, null, null);
			oCustomProperty.AddParameter2("EnableRequests", siVariantType.siBool, true, null, null, null, null, siParamClassification.siClassifUnknown, (int)siCapabilities.siPersistable, null, null, null);
		}
		catch (Exception e)
		{
			Error(e.ToString());
		}

		return true;
	}	

	public bool DefineLayout(Context in_ctxt)
	{
		try
		{
			PPGLayout oLayout = (PPGLayout)in_ctxt.Source;
			oLayout.Clear();

			oLayout.AddGroup("Server", true, 0);
			PPGItem oItem = oLayout.AddItem("StartStop", "Server", StringModule.siControlRadio);

			Object[] items = new Object[4] { "Start", 1,
											 "Stop", 2 };
			oItem.UIItems = items;
			
			oLayout.AddGroup(null, true, 0);
			oLayout.AddItem("Address", "Address", null);
			oLayout.AddRow();
			oLayout.AddButton("GetHostAddress", "Use Host Address");
			oLayout.AddButton("GetLocalHostAddress", "Use Local Host Address");
			oLayout.EndRow();
			oLayout.EndGroup();

			oLayout.AddItem("Port", "Port", null);
			oLayout.AddItem("MaxCnx", "Maximum Connections", null);
			oLayout.EndGroup();

			oLayout.AddGroup("Requests", true, 0);
			oLayout.AddItem("EnableRequests", "Enable Processing", null);
			oLayout.AddItem("ProcessReqTimer", "Processing Interval (ms)", null);
			
			oLayout.AddGroup(null, true, 0);
			oLayout.AddRow();
			oLayout.AddButton("LogRequests", "Log");
			oLayout.AddButton("ClearRequests", "Clear");
			oLayout.EndRow();
			oLayout.EndGroup();

			oLayout.EndGroup();
		}
		catch (Exception e)
		{
			Error(e.ToString());
		}

		return true;
	}

	public bool PPGEvent(Context in_ctxt)
	{
		try
		{
			PPGEventContext ppgctxt = (PPGEventContext)in_ctxt;
			siPPGEventID eventID = ppgctxt.EventID;

			if (eventID == siPPGEventID.siParameterChange)
			{
				// The Source of the event is the parameter itself
				Parameter changed= (Parameter)ppgctxt.Source;
				if ("StartStop" == changed.ScriptName)
				{
					int select = (int)changed.GetValue2(null);
					TimerEvent evTimer = (TimerEvent)GetXSI().EventInfos["ProcessRequestsTimerEvent"];

					if (select == 1)
					{
						// Start server
						Info("Softimage server started.");
						Property p = (Property)changed.Parent;
						XSIServer.Start(	(String)p.Parameters["Address"].GetValue2(null),
											(int)p.Parameters["Port"].GetValue2(null),
											(int)p.Parameters["MaxCnx"].GetValue2(null));
						evTimer.Mute = false;
					}
					else
					{
						// Stop server
						Info("Softimage server stopped.");
						XSIServer.Stop();
						evTimer.Mute = true;
					}
				}
				else if ("ProcessReqTimer" == changed.ScriptName)
				{
					int interval = (int)changed.GetValue2(null);
					TimerEvent evTimer = (TimerEvent)GetXSI().EventInfos["ProcessRequestsTimerEvent"];
					evTimer.Reset(interval, 0);
				}
				else if ("EnableRequests" == changed.ScriptName)
				{
					bool bValue = (bool)changed.GetValue2(null);
					EventInfo evTimer = GetXSI().EventInfos["ProcessRequestsTimerEvent"];
					evTimer.Mute = bValue == false;
				}
				
			}
			else if (eventID == siPPGEventID.siButtonClicked)
			{
				String buttonPressed = (String)ppgctxt.GetAttribute("Button");

				if (buttonPressed == "GetHostAddress")
				{
					// Set host param with this host address
					IPHostEntry hostEntry = Dns.GetHostEntry(Dns.GetHostName());
					IPAddress[] ipAddresses = hostEntry.AddressList;

					Property prop = (Property)ppgctxt.Source;
					Parameter adr = prop.Parameters["Address"];
					adr.PutValue2(null, ipAddresses[0].ToString());
				}
				else if (buttonPressed == "GetLocalHostAddress")
				{
					// Set host param with this host address
					Property prop = (Property)ppgctxt.Source;
					Parameter adr = prop.Parameters["Address"];
					adr.PutValue2(null, "127.0.0.1");
				}					
				else if (buttonPressed == "LogRequests")
				{
					Info("Logging all requests ...");
					ClientRequests requests = new ClientRequests();
					requests.Log();
				}
				else if (buttonPressed == "ClearRequests")
				{
					Info("Removing all requests ...");
					ClientRequests requests = new ClientRequests();
					requests.Clear();					
				}
			}
		}
		catch (Exception e)
		{
			Error(e.ToString());
		}

		return true;
	}
	
	static public Property PSet( XSIApplication in_xsi)
	{
		Property prop = null;
		try
		{
			Model root = in_xsi.ActiveSceneRoot;
			prop = root.Properties[ "XSIServerProp" ];

			if ( prop == null )
			{
				prop = root.AddProperty("XSIServerProp", false, "XSIServerProp");
			}
		}
		catch (Exception e)
		{
			in_xsi.LogMessage(e.ToString(),siSeverity.siError);
		}
		return prop;
	}

}
