var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-5A42B402-2420-4CED-B63F-432D4074119B\" />\n\
      <meta name=\"indexterm\" content=\"Writing the Device Driver\" />\n\
      <meta name=\"indexterm\" content=\"Creating the Device Driver\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: callbacks\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: for device drivers\" />\n\
      <meta name=\"indexterm\" content=\"XSIDeviceOnActivate callback\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: XSIDeviceOnActivate\" />\n\
      <meta name=\"indexterm\" content=\"Example: using a timer loop (instead of an event)\" />\n\
      <meta name=\"indexterm\" content=\"Example: using an event (instead of a timer loop)\" />\n\
      <meta name=\"indexterm\" content=\"Example: caching your device information\" />\n\
      <meta name=\"indexterm\" content=\"caching: device information\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: caching information\" />\n\
      <meta name=\"indexterm\" content=\"To add options to your device driver\" />\n\
      <meta name=\"indexterm\" content=\"Accessing Device Drivers through the Object Model\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: accessing through the object model\" />\n\
      <meta name=\"indexterm\" content=\"object model: accessing device drivers\" />\n\
      <meta name=\"indexterm\" content=\"Example: getting the device driver information\" />\n\
      <meta name=\"indexterm\" content=\"Example: getting the information for all channels\" />\n\
      <meta name=\"indexterm\" content=\"Example: getting the information for a specific channel\" />\n\
      <meta name=\"indexterm\" content=\"Adding Peripheral Files\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: using presets\" />\n\
      <meta name=\"indexterm\" content=\"preset files: with device drivers\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: adding custom properties (options)\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: for device drivers\" />\n\
      <meta name=\"indexterm\" content=\"help files: for device drivers\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: help files\" />\n\
      <meta name=\"indexterm\" content=\"Understanding the XML device description file\" />\n\
      <meta name=\"indexterm\" content=\"XML device description files: understanding\" />\n\
      <meta name=\"indexterm\" content=\".xsidevice: files\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: device description (.xsidevice) files\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: XML description tags: for devices\" />\n\
      <meta name=\"indexterm\" content=\"XML device description tags reference\" />\n\
      <meta name=\"indexterm\" content=\".xsidevice: XML tag reference: for devices\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: XML description tags: for channels\" />\n\
      <meta name=\"indexterm\" content=\"XML channel description tags reference\" />\n\
      <meta name=\"indexterm\" content=\".xsidevice: XML tag reference: for channels\" />\n\
      <meta name=\"indexterm\" content=\".xsidevice: validating\" />\n\
      <meta name=\"indexterm\" content=\"Validating XML device description files\" />\n\
      <meta name=\"indexterm\" content=\"XML device description files: validating\" />\n\
      <meta name=\"indexterm\" content=\"device drivers: deviceparser tool\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<DeviceType&gt;\" />\n\
      <meta name=\"keyword\" content=\"<DeviceType&gt;\" />\n\
      <title>Creating a Device Driver</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5A42B402-2420-4CED-B63F-432D4074119B\"></a></span><div class=\"head\">\n\
            <h1>Creating a Device Driver</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0007\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DE72BE25-B9CA-4039-8EA4-BE0E0DC929EE\"></a></span> Writing the Device DriverCreating the Device Driver\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C7459BF-021D-4BCB-A405-514453F1169A\"></a></span>When you create the library file for your device driver, there are a few things that\n\
                  you need to think about: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_F1CB43A9077A431A92BF492F5183B82B\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E99B0849-0408-45D4-BF35-204E2DC4F7D5\"></a></span>You need to retrieve information from the connected device in order to make the device\n\
                        drive something in Softimage. To do this, you can use one of the following strategies\n\
                        according to your needs and style: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_D173AEAE3AB549668938D51D15963A6B\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-B78B59C9-C6FA-4D40-884E-A09F7FD93100\"></a></span>Set up a timer procedure that checks the status of the device every few milliseconds\n\
                              . \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-33240AF7-A3B6-4832-9CA2-3D314F870A9F\"></a></span>Write event procedures that run code whenever there is a change in the status of the\n\
                              device. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-81799E6D-92D7-41AD-92C5-63CD6B22F8C2\"></a></span>Device drivers can contain many channels with data that are continuously being refreshed.\n\
                        For this reason, you should cache the device information to maximize your driver\'s\n\
                        performance. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D5394C5-10AA-4A30-A3E7-37E5E5778739\"></a></span>For example, you can cache the channel object when the driver is activated. For details\n\
                        on how to do this, see the Mouse Driver example under the <span class=\"code\" translate=\"no\">mousedriver</span> directory in the SDK example directory. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-59E8E582-16C4-45A4-8EBD-4CAE904806DC\"></a></span>To hook into Softimage, use the device callbacks listed in the table below. \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_6FB9E97C0CF84A2B9FEF304042C8FFB3\"></a></span><div class=\"table_Ruled\">\n\
                        <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                           <colgroup>\n\
                              <col align=\"left\" />\n\
                              <col align=\"left\" />\n\
                           </colgroup>\n\
                           <tr class=\"ruledHeading\">\n\
                              <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F819C542-E7E7-4307-87CF-C9C11E1F9BC0\"></a></span><p class=\"table-heading\">Callback </p> \n\
                              </th>\n\
                              <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A8AD1515-3C6C-403A-BA14-1B4D1AE3DB17\"></a></span><p class=\"table-heading\">Description </p> \n\
                              </th>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-401E9D95-7955-4BF6-AFAC-D41DADF3BED8\"></a></span><p class=\"table-body\">XSIDeviceOnInitialize </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7E347687-7D83-4348-84E0-5400EDEB7492\"></a></span><p class=\"table-body\">Fired when Softimage loads the device. When the Device Manager turned on (activated),\n\
                                    Softimage reads each XML device description file and builds a list of devices corresponding\n\
                                    to each file it finds. \n\
                                 </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DAD00D93-C61C-4C68-8670-BF81F813BE81\"></a></span><p class=\"table-body\">XSIDeviceOnUnInitialize </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AF10919E-3996-40D2-A6DA-9476EF62BD4C\"></a></span><p class=\"table-body\">Fired when Softimage unloads the device when quitting or when the Device Manager is\n\
                                    turned off (deactivated). \n\
                                 </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A6C987F3-2A0D-47EC-8A00-9FBEAF4CDC14\"></a></span><p class=\"table-body\">XSIDeviceOnActivate </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E270F4E6-B86F-4B02-936B-2C014D78D0C4\"></a></span><p class=\"table-body\">Fired when the user connects the driver by checking the Active option in the DeviceManager\n\
                                    or selecting <span class=\"MenuCascade\" id=\"GUID-CF8140E7-D774-4BAB-8F42-FD74651989DE\">Devices</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-D1D731D0-A7D0-4842-BA87-43E6BFEEED19\">Enable All Devices</span> from the Animate toolbar or menu. \n\
                                 </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B9340C92-254E-4B03-BFF6-FB8D36274079\"></a></span><p class=\"table-body\">XSIDeviceOnDeActivate </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4B47ABAC-75E0-40EF-81C4-3FB7ED94E6EF\"></a></span><p class=\"table-body\">Fired when the user disconnects the driver by unchecking the Active option in the\n\
                                    DeviceManager or selecting <span class=\"MenuCascade\" id=\"GUID-AE9C6794-008B-4626-8E60-919505FABC59\">Devices</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-2FDA9D58-09B2-4ADC-9BB3-0C3A9B8CC14C\">Disable All Devices</span> from the Animate toolbar or menu. \n\
                                 </p> \n\
                              </td>\n\
                           </tr>\n\
                        </table>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D238C3EC-CA3D-499C-813F-4696EFB23128\"></a></span>The Mouse driver plug-in uses the mouse\'s position to drive the X and Y position.\n\
                  This example illustrates how to use the tools mentioned above to create your device\n\
                  driver. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-7D6DE159-CEB9-41A8-83F9-08C30464BA03\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DB40226E-091E-420A-9DC0-60C062150092\"></a></span>You can find the source code and .xsidevice file for the Mouse plug-in under the <span class=\"code\" translate=\"no\">mousedriver</span> directory in the SDK example directory (for example: \n\
                     </p> \n\
                  </div>\n\
               </div> <span class=\"code\" translate=\"no\">&lt;factory_path&gt;\\XSISDK\\examples\\drivers\\MouseDriver</span> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0008\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1BF0F007-C011-4AD8-8EE4-3517314B910B\"></a></span> Example: using the XSIDeviceOnActivate callback\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4426A20C-D543-4332-90AC-6A9E287587F3\"></a></span>If you look at the source code for the Mouse driver, it uses the <em class=\"strong\">XSIDeviceOnActivate</em> callback to set up the coordinates for the mouse\'s position. \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
extern \"C\" HRESULT WINAPI XSIDeviceOnActivate()\n\
{\n\
	ApplicationPtr		l_pApp;\n\
\n\
	l_pApp.CreateInstance(\"XSI.Application\");\n\
\n\
#ifdef DEBUG\n\
	l_pApp-&gt;LogMessage(L\"Connecting Mouse Device...\", siInfo);\n\
#endif \n\
\n\
	//-----------------------------------------------------\n\
	// Get the mouse position \n\
	//-----------------------------------------------------\n\
	POINT		l_ptClientMousePos;\n\
	::GetCursorPos( &amp;l_ptClientMousePos );\n\
\n\
	//-----------------------------------------------------\n\
	//-----------------------------------------------------\n\
	if (g_pDeviceinfo.m_pChannelX == 0 || g_pDeviceinfo.m_pChannelY ==0)\n\
	{\n\
		// here is where the information from the device is initialized\n\
		// (the actual code that goes here appears in below)\n\
	}\n\
\n\
	//-----------------------------------------------------\n\
	// Start a timer  using the parameter named :\n\
	// PollingInterval (20 msec by default)\n\
	//-----------------------------------------------------\n\
#ifdef _TIMER_BASED_EXAMPLE	\n\
	ULONG l_ulPollingInterval = 20;\n\
	m_idTimer = ::SetTimer( NULL, 1, l_ulPollingInterval, (TIMERPROC)fnTimerProc ) ;\n\
#endif \n\
\n\
	g_currentHook = SetWindowsHookEx(WH_MOUSE_LL, (HOOKPROC)MyMouseProc, g_hInstance,0);\n\
\n\
	return S_OK;\n\
}</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0009\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-AA5DE42A-9691-484E-8BA9-DD0D45286C4A\"></a></span> Example: using a timer loop (instead of an event)\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB811127-8F81-4FD5-BA15-AAE3FC211293\"></a></span>The timer loop forces the driver to periodically refresh the information: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
VOID CALLBACK fnTimerProc( HWND /*hwnd*/, UINT /*uMsg*/, UINT /*idEvent*/, DWORD /*dwTime*/ )\n\
{\n\
	ApplicationPtr		l_pApp;\n\
	l_pApp.CreateInstance(\"XSI.Application\");\n\
\n\
	//-----------------------------------------------------\n\
	// Get the mouse position \n\
	//-----------------------------------------------------\n\
	POINT		l_ptClientMousePos;\n\
	::GetCursorPos( &amp;l_ptClientMousePos );\n\
\n\
	// Set the X channel\n\
	CComVariant l_varX( (DOUBLE)l_ptClientMousePos.x );\n\
	CComVariant l_varY( (DOUBLE)l_ptClientMousePos.y );\n\
\n\
	g_pDeviceinfo.m_pChannelX-&gt;put_Value( l_varX );\n\
	g_pDeviceinfo.m_pChannelY-&gt;put_Value( l_varY );\n\
}</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-000A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-069E53E4-CA20-4275-BEB1-32C253D9AABC\"></a></span> Example: using an event (instead of a timer loop)\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C972A245-8D5D-4379-B55D-862EC83DD4FA\"></a></span>The Mouse driver example also illustrates how to use an event procedure to update\n\
                     the information \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
LRESULT CALLBACK MyMouseProc\n\
(\n\
  int nCode,      // hook code\n\
  WPARAM wParam,  // message identifier\n\
  LPARAM lParam   // mouse coordinates\n\
)\n\
{\n\
	if (wParam == WM_MOUSEMOVE)\n\
	{\n\
		MOUSEHOOKSTRUCT *l_sMouseInfo = (MOUSEHOOKSTRUCT *)lParam;\n\
\n\
		if (g_pDeviceinfo.m_pChannelX)\n\
		{\n\
			// Set the X an Y channels\n\
			CComVariant l_varX( (DOUBLE)l_sMouseInfo-&gt;pt.x );\n\
			CComVariant l_varY( (DOUBLE)l_sMouseInfo-&gt;pt.y );\n\
\n\
			g_pDeviceinfo.m_pChannelX-&gt;put_Value( l_varX );\n\
			g_pDeviceinfo.m_pChannelY-&gt;put_Value( l_varY );\n\
		}\n\
	}\n\
	else if (wParam == WM_LBUTTONDOWN)\n\
	{\n\
		if (g_pDeviceinfo.m_pChannelLB)\n\
		{\n\
			// Trigger the command on the Left Button\n\
			g_pDeviceinfo.m_pChannelLB-&gt;put_Value( CComVariant(1) );\n\
		}\n\
	}\n\
	else if (wParam == WM_MBUTTONDOWN)\n\
	{\n\
		if (g_pDeviceinfo.m_pChannelMB)\n\
		{\n\
			// Trigger the command on the Middle Button\n\
			g_pDeviceinfo.m_pChannelMB-&gt;put_Value( CComVariant(1) );\n\
		}\n\
	}\n\
	else if (wParam == WM_RBUTTONDOWN)\n\
	{\n\
		if (g_pDeviceinfo.m_pChannelRB)\n\
		{\n\
			// Trigger the command on the Right Button\n\
			g_pDeviceinfo.m_pChannelRB-&gt;put_Value( CComVariant(1) );\n\
		}\n\
	}\n\
\n\
	return CallNextHookEx(g_currentHook,nCode,wParam,lParam);\n\
}</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-000B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-D6530972-CD08-4EE9-813B-3356B77CBFD7\"></a></span> Example: caching your device information\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DA7B70F-B2B3-4159-B033-8334D5032C47\"></a></span>You can create a global instance of the device information, which caches the channel\n\
                     objects so you don\'t have to get new ones for each mouse message: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">static _DeviceInfo g_pDeviceinfo;</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-000C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F6E89339-AB9D-43EB-9372-6C18152AC8DD\"></a></span> To add options to your device driver\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-28E6FC2B-58B2-4F5C-800C-A1C9ACB515CF\"></a></span>Users can click the Options button on the device driver window to access the options\n\
                     you set up. To create add options to your device driver plug-in: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"GUID-B41D7232-081F-47DE-846A-C609A7A491BC\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-46277F6A-BF84-4C26-BD62-0DD94058041A\"></a></span>Create a custom parameter set that contains the set of options you want to make available\n\
                           to your device driver. For more information on how to create custom parameter sets,\n\
                           see the <em class=\"mild\">Animation</em> guide. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7D68F02-49B7-4FE6-A4A4-940DFE300575\"></a></span>In the .xsidevice file, specify the filename (including the path) of the options custom\n\
                           parameter set in the &lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-001F\">OptionsPreset</a></span>&gt; tag. \n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-70D5327A-0508-4EA5-8192-9AB0C9AA5649\"></a></span>When the device driver is instantiated, a new custom parameter set is created and\n\
                           nested under the device driver. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB65AFEF-A82E-4EA1-A6B2-8124463752FC\"></a></span>When you write your device driver plug-in you can use the object model to access the\n\
                           options values. For more information on how to use the object model to access custom\n\
                           parameter sets, see <a href=\"#!/url=./files/dev_params.htm\">Working with Parameters</a>. \n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-000D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D8243A35-1837-4A03-8DEA-6C5D879D8445\"></a></span> Accessing Device Drivers through the Object Model\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D971E3EF-9673-4949-8D3C-0B4183145CD6\"></a></span>The Softimage object model contains these objects: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_FD0DC99509C54935BCCA674BC757CB1C\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D267458-C667-427F-99E2-0858EBEE2764\"></a></span>The <em class=\"strong\">Device</em> object represents a device driver in Softimage. In the User Interface, device drivers\n\
                        are accessible through the Device Manager, which you can open with <span class=\"MenuCascade\" id=\"GUID-976AA4CA-5965-456B-AFEF-6B3C48FBD0A4\">Tools</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-422BCF13-CC81-41CC-8B68-67F8F25E975B\">Devices</span> on the Animate toolbar. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-25B80B5A-1D97-4D2D-92F9-6795FF9E39CF\"></a></span>The <em class=\"strong\">DeviceCollection</em> gives access to all device drivers in Softimage. This is the scripting equivalent\n\
                        of the Device Manager, in which you can activate or deactivate a device, add or remove\n\
                        devices, etc. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5429E950-E55F-44D8-AAA6-FECAB59B3715\"></a></span>The <em class=\"strong\">Channel</em> object represents the wire between a device and its input into Softimage. Each device\n\
                        driver has a set of channels and each channel can drive something different in the\n\
                        scene. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4384348-FC3E-4457-8B21-C8CFB76F947F\"></a></span>The <em class=\"strong\">ChannelCollection</em> gives access to all channels in the device. \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-5B3571C6-2584-436E-946F-CD962217CB32\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A51B296C-B28E-478F-8819-4B51ECDC4201\"></a></span>For more information on the specifics of each device driver object and their functions,\n\
                              see the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3C8B3F66-68C7-4414-BC89-A36405DC55A9\"></a></span>To illustrate how to use the COM API, you can return to the Mouse driver example.\n\
                  \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-000E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-CB3DB6A4-842A-473C-86E8-6E63252A2E39\"></a></span> Example: getting the device driver information\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-910F5F27-CFBC-42E9-94D6-EE25F54F087B\"></a></span>You need to get pointers to the Application, the ChannelCollection, and the Device\n\
                     objects: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
HRESULT					l_hr;\n\
XSIApplicationPtr		l_xsiApp(l_pApp);\n\
ChannelCollectionPtr	l_pChannels; \n\
DevicePtr				l_pDevice;\n\
\n\
// Get the DeviceCollection from the Application\n\
DeviceCollectionPtr		l_pDeviceManager;\n\
l_hr = l_xsiApp-&gt;get_Devices(&amp;l_pDeviceManager);\n\
AssertAndReturn(l_hr);\n\
\n\
// Get the \"Mouse\" Device object\n\
l_hr = l_pDeviceManager-&gt;get_Item( CComVariant(L\"Mouse\"), &amp;l_pDevice );\n\
AssertAndReturn(l_hr);\n\
\n\
// Get all channels in the Mouse device\n\
l_hr = l_pDevice-&gt;get_Channels( &amp;l_pChannels );\n\
AssertAndReturn(l_hr);</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-000F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-45A67378-6408-4439-A48F-93663D00ABFE\"></a></span> Example: getting the information for all channels\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FC89DE4C-7657-477E-8A25-2E357288386B\"></a></span>Once you have all the channels for a device, you can enumerate the collection to get\n\
                     each member: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Iterate through all channels in the Mouse device\n\
l_hr = l_pChannels-&gt;get_Item( CComVariant(0), &amp;g_pDeviceinfo.m_pChannelX);\n\
AssertAndReturn(l_hr);\n\
\n\
l_hr = l_pChannels-&gt;get_Item( CComVariant(1), &amp;g_pDeviceinfo.m_pChannelY);\n\
AssertAndReturn(l_hr);\n\
\n\
l_hr = l_pChannels-&gt;get_Item( CComVariant(2), &amp;g_pDeviceinfo.m_pChannelLB);\n\
AssertAndReturn(l_hr);\n\
l_hr = l_pChannels-&gt;get_Item( CComVariant(3), &amp;g_pDeviceinfo.m_pChannelMB);\n\
AssertAndReturn(l_hr);\n\
\n\
l_hr = l_pChannels-&gt;get_Item( CComVariant(4), &amp;g_pDeviceinfo.m_pChannelRB);\n\
AssertAndReturn(l_hr);</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0010\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-8F1E58E6-5440-46B9-9D61-1997BD344EAC\"></a></span> Example: getting the information for a specific channel\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C85AE558-0BDC-4B28-8EA5-56991F5F2EC7\"></a></span>You can use the Channel ID to get the channel, which is faster than iterating the\n\
                     entire collection: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
l_hr = l_pDevice-&gt;get_Channel( 1, &amp;g_pDeviceinfo.m_pChannelX);\n\
AssertAndReturn(l_hr);\n\
\n\
l_hr = l_pDevice-&gt;get_Channel( 2, &amp;g_pDeviceinfo.m_pChannelY);\n\
AssertAndReturn(l_hr);</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0011\"></a></span> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0012\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F8FFFACB-C681-4D1B-A6CE-6D25AA592F0F\"></a></span> Adding Peripheral Files\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-93F81FB7-B9AD-4BBF-A9E0-F4E6C31BD692\"></a></span>You may want to create some extra files that can help support your driver in Softimage,\n\
                     such as: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_8EF0D7BAA8004F48955CA911413025BD\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-52B2D71E-E16B-465C-987E-80E0C3E6CBD6\"></a></span> <em class=\"strong\">Device</em> <em class=\"strong\">presets</em>—you can specify values in a preset so that they load by default. For example, you\n\
                           can create a preset that has a channel with Command specified for the Action field\n\
                           and the name of the command or procedure specified for the Target field. \n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB97096D-CBA7-412F-9757-D29E9805CADF\"></a></span>For more information on how to save and load presets, see the Softimage user guidethe\n\
                           Softimage user guide. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-19CBF82C-7C8F-4D4B-AFB7-C3C65C28738F\"></a></span> <em class=\"strong\">Option</em> <em class=\"strong\">custom property sets</em>—you can create a custom property set that contains lists of special options for the\n\
                           device. When available, these options appear on the options window for your device,\n\
                           which the user can open by clicking the Options button on the Device Manager window.\n\
                           \n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-8DB970B2-A32A-44E7-BDDD-A1DD113CBDF7\"></a></span>For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-000C\">To add options to your device driver</a></span>. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-50E83944-2762-492E-9E3A-7F5E1FCEF542\"></a></span> <em class=\"strong\">Help</em> <em class=\"strong\">files</em>—you may also want to create a web page or a help file for users to explain the functionality\n\
                           of your device driver. In this case, you will need to include your HTML or WinHelp\n\
                           files with your library, .xsidevice, preset, and SPDL files when you distribute your\n\
                           device. \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0013\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2A43CEC2-46AE-4634-B063-788097D4638A\"></a></span>Communicating the Device Information to Softimage\n\
               </h2> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0014\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-63DAA692-71FB-4CFB-AF8D-63FA87117D7D\"></a></span>Communicating the Device Information to Softimage\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9ACB76B0-16C9-49DB-848A-C88346E9D885\"></a></span>Softimage builds a set of device drivers based on the information that you provide\n\
                     in the .xsidevice file. When Softimage starts, it reads the .xsidevice file and creates\n\
                     a device driver for each device specified. \n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0015\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-34447EE9-7F2D-42A0-9967-9E5A32BB3407\"></a></span> Understanding the XML device description file\n\
                     </h4>     \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-66CDCEC7-1FBA-45F8-82C5-5BEDFB930354\"></a></span>When you want to tell Softimage about the device you want to use, you need to enter\n\
                        all the information in a <em class=\"strong\">Device Description file</em> (<span class=\"code\" translate=\"no\">.xsidevice</span>). The .xsidevice file uses the following XML tag structure: \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-45936031-BFFA-4792-A6B1-B93CFBF8ED63\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-D69E5EDD-1953-4399-BC29-7387412C9AE1\"></a></span>Click on the tag name to see a description and any possible values in the sample below.\n\
                              \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
&lt;?xml <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>=\"1.0\"?&gt;\n\
&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0017\">Device</a></span>&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0018\">FileVersion</a></span>&gt;...&lt;/FileVersion&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0019\">DeviceName</a></span>&gt;...&lt;/DeviceName&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-001A\">DeviceType</a></span>&gt;...&lt;/DeviceType&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-001B\">DefaultPresetFilename</a></span>&gt;...&lt;/DefaultPresetFilename&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-001C\">PluginFilename</a></span>&gt;...&lt;/PluginFilename&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-001D\">SupportMultiInstance</a></span>&gt;...&lt;/SupportMultiInstance&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-001E\">OtherInfo</a></span>&gt;...&lt;/OtherInfo&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-001F\">OptionsPreset</a></span>&gt;...&lt;/OptionsPreset&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0020\">Description</a></span>&gt;\n\
		&lt;![CDATA[ 	...	 ]]&gt;\n\
	&lt;/Description&gt;\n\
	&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0022\">Channel</a></span>&gt;\n\
		&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0023\">ChannelName</a></span>&gt;...&lt;/ChannelName&gt;\n\
		&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0024\">ChannelDescription</a></span>&gt;\n\
			&lt;![CDATA[ 	...	 ]]&gt;\n\
		&lt;/ChannelDescription&gt;\n\
		&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0025\">ChannelID</a></span>&gt;...&lt;/ChannelID&gt;\n\
		&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0026\">ChannelDirectionType</a></span>&gt;...&lt;/ChannelDirectionType&gt;\n\
		&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0027\">ChannelType</a></span>&gt;...&lt;/ChannelType&gt;\n\
		&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0028\">ChannelMin</a></span>&gt;...&lt;/ChannelMin&gt;\n\
		&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-0029\">ChannelMax</a></span>&gt;...&lt;/ChannelMax&gt;\n\
		&lt;<span class=\"char_link\"><a href=\"#!/url=./files/cus_devices_CreatingaDeviceDriver.htm#WSB99CDE6FAF7EBE47995BFF85208422B1-002A\">SaveKeyOnSameValue</a></span>&gt;...&lt;/SaveKeyOnSameValue&gt;\n\
	&lt;/Channel&gt;\n\
	&lt;Channel&gt;\n\
		...\n\
	&lt;/Channel&gt;\n\
	...\n\
&lt;/Device&gt;</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A2856E5-2FFA-4BDB-B81A-0071F17150BD\"></a></span>Softimage uses these tags to build a list of available device drivers that users can\n\
                        access through the DeviceManager window. \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-C09E63BF-9CD5-4BDD-9176-78CA5402108E\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-ADF32DF0-AAE3-4F9D-9FB1-9C5914BB3E4B\"></a></span>You must use a separate .xsidevice file for each device you want to make available\n\
                              in Softimage. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0016\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-A1A4AB12-9EAB-4FAB-9B0E-7840ECDF1855\"></a></span> XML device description tags reference\n\
                     </h4>    \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-55D0A50C-FAB2-40C9-99EA-FBD1FC89ADED\"></a></span>The following table lists each XML tag for devices and how to use it. \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_218B14B147024D84BCC44B895B5C20E2\"></a></span><div class=\"table_Ruled\">\n\
                        <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                           <colgroup>\n\
                              <col align=\"left\" />\n\
                              <col align=\"left\" />\n\
                           </colgroup>\n\
                           <tr class=\"ruledHeading\">\n\
                              <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-16D0924E-C8C4-4D41-9C37-E7F0100EA19B\"></a></span><p class=\"table-heading\">Tag Name </p> \n\
                              </th>\n\
                              <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D0AC98A3-FB7A-49BE-A5A2-BEED83AD2F1F\"></a></span><p class=\"table-heading\">Description </p> \n\
                              </th>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0017\"></a></span><p class=\"table-body\"> Device </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-26AA11F3-A099-40D2-A285-362C331A8E20\"></a></span><p class=\"table-body\">Starting tag to decribe a device. </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0018\"></a></span><p class=\"table-body\"> FileVersion </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-796F8A08-ADDC-47F8-A1B7-81329C001080\"></a></span><p class=\"table-body\">Version of the file. </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0019\"></a></span><p class=\"table-body\"> DeviceName </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5DDA92C0-CFA2-4CCB-8DCA-49C143D4C0BD\"></a></span><p class=\"table-body\">Name of the device to be used. This name will be use to instantiate the device. </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-001A\"></a></span><p class=\"table-body\"> DeviceType </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4CB96B48-E0F5-4709-ADF8-FD9BDAAD884C\"></a></span><p class=\"table-body\">Type of device. Possible values are: </p> <span class=\"anchor_wrapper\"><a name=\"UL_5DCF3F3C2A8E45C1BE0E5202D8A48C5E\"></a></span><ul>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6960744-971D-4855-842E-6AD43BD768BF\"></a></span> <em class=\"strong\">MIDI</em>: Musical Instrument Digital Interface \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A2C31DC-73B9-4D65-8D6B-DF080F8B7016\"></a></span> <em class=\"strong\">SOCK</em>: Socket Driver for Softimage|3D \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD0BA49E-C570-4E70-8160-F3D76847EBE1\"></a></span> <em class=\"strong\">Controller</em>: Input device to control Softimage \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-C50B1D39-9123-4568-83A6-33A8AF0FD86E\"></a></span> <em class=\"strong\">Other</em>: Other kind of device \n\
                                       </p> \n\
                                    </li>\n\
                                 </ul> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-001B\"></a></span><p class=\"table-body\"> DefaultPresetFilename </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EAA61505-15FA-4DE5-9AB0-FFEE1091D907\"></a></span><p class=\"table-body\">(Optional) Filename of the device\'s default preset to be used when instantiating the\n\
                                    driver. \n\
                                 </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-001C\"></a></span><p class=\"table-body\"> PluginFilename </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A01817E2-1DCD-46C8-9940-25361F41285F\"></a></span><p class=\"table-body\">For non built-in drivers (MIDI or SOCK) this is the filename of the plug-in library.\n\
                                    The extension is optional since it can be supported on multiple platforms. \n\
                                 </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-001D\"></a></span><p class=\"table-body\"> SupportMultiInstance </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EC32FB47-CCD4-4C98-A97B-66D22FEEC1C6\"></a></span><p class=\"table-body\">Can the device be instantiated multiple times in the same session? Possible values\n\
                                    are: \n\
                                 </p> <span class=\"anchor_wrapper\"><a name=\"UL_64B46507B2A349FFABFC27DE4248CC59\"></a></span><ul>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-98CAC6A6-B03B-4DD8-9E48-9B87B11DF1AE\"></a></span> <em class=\"strong\">false</em>: single instances only (default) \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-18E5728B-00ED-474B-B008-CB705B94D626\"></a></span> <em class=\"strong\">true</em>: multiple instances are allowed \n\
                                       </p> \n\
                                    </li>\n\
                                 </ul> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-001E\"></a></span><p class=\"table-body\"> OtherInfo </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D3ED5B88-3ED5-4F4B-97E1-303349E63ABD\"></a></span><p class=\"table-body\">(Optional) Other information used by the sock driver. May contain internal information\n\
                                    or reserved data. \n\
                                 </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-001F\"></a></span><p class=\"table-body\"> OptionsPreset </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-49ACB5F2-D7E4-46FF-8053-70570B1ACDBE\"></a></span><p class=\"table-body\">(Optional) Filename of the custom parameter set preset that contains device options.\n\
                                    You may want to use options to create modes for keypad buttons. For example, you could\n\
                                    specify an option for toggling whether or not to invoke capture sessions for keydown\n\
                                    and keyup or just keydown. \n\
                                 </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0020\"></a></span><p class=\"table-body\"> Description </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-026603FE-AC15-4AD0-82E0-4DD62F4695FB\"></a></span><p class=\"table-body\">(Optional) An informative description of the device. </p> \n\
                              </td>\n\
                           </tr>\n\
                        </table>\n\
                     </div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0021\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-3B2898AB-1FFB-4BDB-997D-B034FF124901\"></a></span> XML channel description tags reference\n\
                     </h4>    \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF03277F-070C-4C53-8E87-DF03121C31E3\"></a></span>The following table lists each XML tag for channels and how to use it. \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_8D6FCE7C29354299830C00D655BFEA6F\"></a></span><div class=\"table_Ruled\">\n\
                        <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                           <colgroup>\n\
                              <col align=\"left\" />\n\
                              <col align=\"left\" />\n\
                           </colgroup>\n\
                           <tr class=\"ruledHeading\">\n\
                              <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E2320618-0E8D-4969-99D0-6CFBF13B784A\"></a></span><p class=\"table-heading\">Tag Name </p> \n\
                              </th>\n\
                              <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-453D2ADF-D19E-499E-B9EA-536641CEF0D7\"></a></span><p class=\"table-heading\">Description </p> \n\
                              </th>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0022\"></a></span><p class=\"table-body\"> Channel </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5D2DF8A3-E2EF-4196-82B8-EF2FCE8DD334\"></a></span><p class=\"table-body\">Starting tag to describe a channel. </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0023\"></a></span><p class=\"table-body\"> ChannelName </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C5A3E1FE-3AF4-48AE-9EE3-A281E6E125ED\"></a></span><p class=\"table-body\">Name of the channel. </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0024\"></a></span><p class=\"table-body\"> ChannelDescription </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-461C2CF9-0C99-4D55-AA62-BBA5F2DA660D\"></a></span><p class=\"table-body\">(Optional) A description of the channel. </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0025\"></a></span><p class=\"table-body\"> ChannelID </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CFA7C17E-9D90-4FF3-B7A7-BD21C053C05E\"></a></span><p class=\"table-body\">The Identifier of the channel. This must be a non-negative number. </p> \n\
                                 <div><span class=\"anchor_wrapper\"><a name=\"GUID-E2BEF786-5571-4E96-B2CE-EED8A769ACD5\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-A42310AE-676C-4CD0-AA33-517D3467AA9E\"></a></span>Two channels cannot have the same ID. \n\
                                       </p> \n\
                                    </div>\n\
                                 </div> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0026\"></a></span><p class=\"table-body\"> ChannelDirectionType </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-58B2A88D-C2EE-4C7E-888C-5E5E99D03960\"></a></span><p class=\"table-body\">Direction Type of the channel. Possible values are: </p> <span class=\"anchor_wrapper\"><a name=\"UL_9DE63BA46BB94C09B4F82FEDBF529FE2\"></a></span><ul>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-60464475-E4C0-477B-B9AA-816DEBFF8832\"></a></span> <em class=\"strong\">input</em>: channel is an input for Softimage \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C8AF66F-EF44-4541-B5B1-10BC93E37B44\"></a></span> <em class=\"strong\">output</em>: channel is an output for Softimage \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-724B6512-2979-4F55-9BEA-B697660035A9\"></a></span> <em class=\"strong\">io</em>: channel is an input and an output \n\
                                       </p> \n\
                                    </li>\n\
                                 </ul> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0027\"></a></span><p class=\"table-body\"> ChannelType </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F2ED495F-2C5D-434F-ACDC-28F4E5434692\"></a></span><p class=\"table-body\">Type of channel. Possible values are: </p> <span class=\"anchor_wrapper\"><a name=\"UL_92BCEB911E1A4E7696681BAFCD4AF185\"></a></span><ul>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-9673B712-C148-4551-A87B-6F77247C9446\"></a></span> <em class=\"strong\">slider</em>: slider (commonly found on electronic audio equipment) \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-9203BDA7-E136-4E44-8203-296CB1265C77\"></a></span> <em class=\"strong\">button</em>: 2-state button (for example, ON or OFF) \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-F09BFB28-2EEF-441C-821D-19A185970EF1\"></a></span> <em class=\"strong\">3states</em>: 3-state button (for example, LEFT, MIDDLE or RIGHT) \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF37EABB-D8E4-47E5-859B-2EBFF919810A\"></a></span> <em class=\"strong\">jog</em>: jog or dial control (commonly found on electronic audio equipment) \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-F83CF6F8-0AAE-4B53-AF0C-8307F59BA428\"></a></span> <em class=\"strong\">unknown</em>: other type \n\
                                       </p> \n\
                                    </li>\n\
                                 </ul> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0028\"></a></span><p class=\"table-body\"> ChannelMin </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-05CC255C-66A0-4BCF-B9DA-FD234AF92E62\"></a></span><p class=\"table-body\">The hardware minimum value of the channel. </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledEvenRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-0029\"></a></span><p class=\"table-body\"> ChannelMax </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D99B53A5-E203-4C23-8D2F-66F1D70F1ED0\"></a></span><p class=\"table-body\">The hardware maximum value of the channel. </p> \n\
                              </td>\n\
                           </tr>\n\
                           <tr class=\"ruledOddRow\">\n\
                              <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-002A\"></a></span><p class=\"table-body\"> SaveKeyOnSameValue </p> \n\
                              </td>\n\
                              <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-45A1ACB7-1D8F-4CA5-A104-A858CDA6B87B\"></a></span><p class=\"table-body\">This is only for the slider type of channel. Possible values are: </p> <span class=\"anchor_wrapper\"><a name=\"UL_62A7FFA1E4804E81A156898135EA78AA\"></a></span><ul>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-A940A6AE-4C48-4C06-B8B1-651F86A4FD12\"></a></span> <em class=\"strong\">true</em>: For motion capture, a key is saved even if the value is the same as the previous\n\
                                          one (ie there were no changes). \n\
                                       </p> \n\
                                    </li>\n\
                                    <li> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-86BF0BB6-41A9-4CD9-961B-8A6D68259033\"></a></span> <em class=\"strong\">false</em>: No new key if the value is the same. This can help on performance. (default) \n\
                                       </p> \n\
                                    </li>\n\
                                 </ul> \n\
                              </td>\n\
                           </tr>\n\
                        </table>\n\
                     </div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-002B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-4700E9FC-EBF8-4A85-A413-623D1F0E18B5\"></a></span> Validating XML device description files\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6D670BA-49B0-4FD9-817D-7ED793AA3E7D\"></a></span>When you launch Softimage, it reads each XML device description file and checks to\n\
                     make sure it is valid. If all .xsidevice files are valid, when you click on the <span class=\"MenuCascade\" id=\"GUID-BDF6FF7F-383A-4833-8B25-23287D006CC0\">Add</span> button from the DeviceManager, the <span class=\"MenuCascade\" id=\"GUID-CC4C0B0D-17AF-41F5-9714-66DD6176283F\">Select a Device Driver</span> dialog box lists each driver. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-75059882-B21C-4439-8832-5874B62FE762\"></a></span>However, if one or more of your .xsidevice files is not valid, as soon as you activate\n\
                     the DeviceManager a message identifying the problem with the file appears in the history\n\
                     log of the Script Editor window. For example, if you forgot to use a closing tag,\n\
                     this message appears: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'ERROR : \"2000 - Error Parsing the DeviceInfo: mismatched tag at line ** col *\'\"</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DBBE7B6E-BC61-4493-BC3A-4BD88818C8C8\"></a></span>If you leave out the type of the device (no <span class=\"keyword\">&lt;DeviceType&gt;</span> set of tags), this message appears: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'ERROR : \"2000 - Error parsing the Device [device_name], File: [$factory]\\Data\\Devices\\[filename].xsidevice\n\
\n\
\'Error parsing the device:\n\
\n\
	\'- Device plugin filename is empty\n\
\n\
\'\"</pre></div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB99CDE6FAF7EBE47995BFF85208422B1-002C\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-4863B342-04A4-4DE9-B817-FA8A89E2AC1B\"></a></span>To validate XML device description files outside Softimage\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4FDF5C3A-C1D3-452D-BC97-2B54D8CEA584\"></a></span>To verify whether or not your .xsidevice file is valid, you can use the <span class=\"MenuCascade\" id=\"GUID-434E3901-98DA-46F1-A747-B5EBA94C572A\">deviceparser</span> tool: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"GUID-4F23A859-113D-4CE9-AB8E-E2C9EE895FAB\"></a></span><ol type=\"1\" start=\"1\">\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE4B6FEC-0348-415C-B76B-F2BC169E69A5\"></a></span>Open a command prompt and navigate to the bin directory of your installation folder\n\
                              (for example, <span class=\"filePath\" translate=\"no\">C:\\Softimage\\Softimage_<span class=\"charspan-msgph\" translate=\"no\">2015</span>\\Application\\bin</span>). \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-40D96AAE-C4E2-4EC6-8B5A-6CE29105D8C2\"></a></span>Type the following line: \n\
                           </p> <span class=\"code\" translate=\"no\">deviceparser.exe -list &lt;filename&gt;</span> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-EF46BD6F-621A-4910-A362-849DE916E5E7\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-89766F8A-380A-47C5-B251-32532BB4325F\"></a></span>You can use this tool on just one file at a time. \n\
                                 </p> \n\
                              </div>\n\
                           </div> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F5FB2164-418F-4600-9257-598FEDAAD360\"></a></span>If your file is valid, this message appears followed by a summary of the information\n\
                              for the device and all valid channels: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Parsing device desription file: [$factory]\\Data\\Devices\\[filename].xsidevice\n\
\n\
	-- Succeeded</pre></div> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-B23C1288-2CEC-4EEA-8175-D7BB27F8F6E8\"></a></span>If your file is not valid, a message similar to this appears: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Parsing device desription file: [$factory]\\Data\\Devices\\[filename].xsidevice\n\
Error Parsing the DeviceInfo: mismatched tag at line ** col *</pre></div> \n\
                        </li>\n\
                     </ol> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";