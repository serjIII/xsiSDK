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
      <meta name=\"topicid\" content=\"GUID-60AAD615-6BFA-41AC-94F0-02E7ECA0E3C8\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Building Softimage Plug-ins with C#</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-60AAD615-6BFA-41AC-94F0-02E7ECA0E3C8\"></a></span><div class=\"head\">\n\
            <h1>Building Softimage Plug-ins with C#</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-483F35BC-97E8-4E8B-A800-D2DE26EA95FB\"></a></span>All C# plug-ins for Softimage define self-installing custom plug-in items available\n\
               in the Softimage Object Model. These include commands, events, filters, menus, operators\n\
               and properties. Custom Display and GraphicSequencer plug-in items are not available\n\
               to C# because they are only implemented in the C++ API. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-6538DE6D-2E43-4713-80DE-C11EE2D51066\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-836BAB8B-ADAA-443A-89D6-E1092AA3E536\"></a></span>The sample code in this section is generated automatically by one of the Softimage\n\
                     plug-in wizards and it is highly recommended to use the wizards to set up your plug-ins.\n\
                     See <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CreatingCSharpPlugins.htm\">Creating C# Plug-ins</a></span> for more details. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C7E72472-B742-466A-A8A7-E24AC2E10E62\"></a></span>Plug-in Registration\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE703CDC-0B2D-478C-9D63-9C42CE9A4F5D\"></a></span>To get a hook into Softimage, you make sure you include the <span class=\"code\" translate=\"no\">XSIOM</span> (object model) assembly and then create a class to register the plug-in in Softimage\n\
                  (<span class=\"code\" translate=\"no\">XSIPlugin</span> in the example below). Each plug-in item is defined within its own class and you\n\
                  use the name of the plug-in item class to register the plug-in item: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using System;\n\
using System.Reflection;\n\
using XSIOM; // Softimage Object model assembly\n\
\n\
public class XSIPlugin\n\
{\n\
	public bool Load( PluginRegistrar in_reg )\n\
	{\n\
		in_reg.Author = \"Kilroy\";\n\
		in_reg.Name = \"MyCSharpPlugin\";\n\
		in_reg.Major = 1;\n\
		in_reg.Minor = 0;\n\
\n\
		in_reg.RegisterCommand( \"MyCSharpCmd\", null );\n\
		in_reg.RegisterMenu( siMenuAnchorPoints.siMenuMainTopLevelID, \"MyCSharpMenu\", false, false );\n\
		in_reg.RegisterProperty( \"MyCSharpCustomProp\" );\n\
		in_reg.RegisterEvent( \"MyCSharpSelectionEvent\", siEventID.siOnSelectionChange );\n\
		in_reg.RegisterFilter( \"MyCSharpTriangleFilter\", siFilterType.siFilterSubComponentPolygon );\n\
		in_reg.RegisterOperator( \"SplatterCS\" );\n\
		in_reg.RegisterCommand( \"DotNETHost\", null );\n\
		return true;\n\
	}\n\
\n\
	public bool UnLoad( PluginRegistrar in_reg )\n\
	{\n\
		return true;\n\
	}\n\
}</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-F1BE5AF1-09A3-4091-9D50-44786943ABEB\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1861FBB7-2E45-4E10-A54F-9A349E03E59F\"></a></span>Note that once the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">Load</a> method terminates, the class uesd to register the plug-in in Softimage (<span class=\"code\" translate=\"no\">XSIPlugin</span> in the example above) is destroyed. This is by design since the plug-in is unloaded\n\
                        by Softimage once the registration step is done. For more information about Softimage\n\
                        plug-ins in general, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_self.htm\">Self-Installing Plug-ins</a></span>. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0025\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-14B8D580-374D-419B-9512-D7748D36129E\"></a></span>Defining the Plug-in Items\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3EAC74C-5E77-49FF-A363-19A396DCC0B0\"></a></span>The plug-in item class definition must implement the callbacks as public methods (rather\n\
                  than imported function callbacks as it is in the C++ API). \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
public class MyCSharpCmd\n\
{\n\
	public MyCSharpCmd()\n\
	{\n\
	}\n\
\n\
	// Command mandatory implementation\n\
	public bool Init( Context in_ctxt )\n\
	{\n\
		// ...\n\
	}\n\
\n\
	public bool Execute( Context in_ctxt )\n\
	{\n\
		// ...\n\
	}\n\
\n\
	// etc.\n\
}\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A4E92CE-137A-46BB-8ED9-4DDFF1BC2ED6\"></a></span>For those already familiar with developing plug-ins with the C++ API, this table maps\n\
                  the C# style to the C++ API style: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_AC911694D2814997AF5AC52A8207A501\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"9.485390318360226%\" align=\"left\" />\n\
                        <col width=\"57.76275621456607%\" align=\"left\" />\n\
                        <col width=\"10.902747492368077%\" align=\"left\" />\n\
                        <col width=\"21.849105974705626%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5E686F94-119E-4419-92FE-4215DA039E7E\"></a></span><p class=\"table-heading\">Plug-in Item to Create </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-782D5295-D490-4C9F-9081-325F4D158590\"></a></span><p class=\"table-heading\">Comments </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-47B52AE4-0BD1-4FD0-AF3A-01554F826684\"></a></span><p class=\"table-heading\">C# Public Methods to Create </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-89823442-679B-45DB-B2B5-6658170B5235\"></a></span><p class=\"table-heading\">C++ Callback Function </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4AD3239-8F26-411D-A63C-8111CF919CCE\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds.htm\">Custom Commands</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-080ABE20-3A90-46A6-902A-2B4A741E2D9B\"></a></span><p class=\"table-body\">Implement a class (for example, <span class=\"code\" translate=\"no\">MyCSharpCmd</span>) \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">MyCSharpCmd.Init\n\
MyCSharpCmd.Execute</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ED44B9D8-A3D4-4BAD-A9A6-7344E744FAEB\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/cb_Command_Init.html\">MyCSharpCmd_Init</a> \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">MyCSharpCmd_Execute </pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DA122873-E40D-4C6F-BF64-DD9298776121\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_events.htm\">Custom Events</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6B795618-50A3-4BFF-92EB-F3E44E7690C1\"></a></span><p class=\"table-body\">Implement a class (for example, <span class=\"code\" translate=\"no\">MyCSharpSelectionEvent</span>) \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">MyCSharpSelectionEvent.OnEvent</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html\">MyCSharpSelectionEvent_OnEvent</a></pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5ACA2C81-A32A-488E-B6E9-E05C149A4EC8\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_filters.htm\">Custom Filters</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-67744D7B-76DC-4C95-805D-C3655B3842DC\"></a></span><p class=\"table-body\">Implement a class (for example, <span class=\"code\" translate=\"no\">MyCSharpTriangleFilter</span>) \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
MyCSharpTriangleFilter.Match \n\
MyCSharpTriangleFilter.Subset \n\
MyCSharpTriangleFilter.IsApplicable\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"#!/url=./si_cmds/cb_Filter_Match.html\">MyCSharpTriangleFilter_Match</a> <a href=\"#!/url=./si_cmds/cb_Filter_Subset.html\">MyCSharpTriangleFilter_Subset</a> <a href=\"#!/url=./si_cmds/cb_Filter_IsApplicable.html\">MyCSharpTriangleFilter_IsApplicable</a> </pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B9694EE5-83B7-49E9-A41C-88D065C18EF4\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus.htm\">Standard and Contextual Menus</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-92BCBB53-6CBB-41EB-ADCE-A8C104169F76\"></a></span><p class=\"table-body\">Implement a class (for example, <span class=\"code\" translate=\"no\">MyCSharpMenu</span>). \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-57BAAEFF-668B-40E9-B490-F909F7148411\"></a></span><p class=\"table-body\">Add callbacks by defining methods in the menu class which contain calls to <a href=\"#!/url=./si_om/Menu.AddCallbackItem.html\">Menu.AddCallbackItem</a>. \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
MyCSharpMenu.Init \n\
MyCSharpMenu.&lt;menu-item_callback_name&gt;\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"#!/url=./si_cmds/cb_Menu_Init.html\">MyCSharpMenu_Init</a><a href=\"#!/url=./si_cmds/cb_MenuItem_Callback.html\">MyCSharpMenu_&lt;menu-item_callback_name&gt;</a></pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E2599648-6863-41DA-826F-3DE89072F7A7\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops.htm\">Custom Operators</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2722A9D1-4183-4E79-B733-E51F19918704\"></a></span><p class=\"table-body\">Implement a class (for example, <span class=\"code\" translate=\"no\">SplatterCS</span>) \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">SplatterCS.Update \n\
SplatterCS.Init \n\
SplatterCS.Define \n\
SplatterCS.DefineLayout \n\
SplatterCS.PPGEvent</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">SplatterCS_Update</a><a href=\"#!/url=./si_cmds/cb_Operator_Init.html\">SplatterCS_Init</a><a href=\"#!/url=./si_cmds/cb_Property_Define.html\">SplatterCS_Define</a><a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">SplatterCS_DefineLayout</a><a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">SplatterCS_PPGEvent</a></pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7B2FC7A4-AB00-4B83-AB39-C8C335EE7F69\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F6752449-6A4A-42CD-B9BF-5C1FA85B61D6\"></a></span><p class=\"table-body\">Implement a class (for example, <span class=\"code\" translate=\"no\">MyCSharpCustomProp</span>). \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-1F23D1E6-E4AE-4137-991A-11C06D14F799\"></a></span><p class=\"table-body\">Handling logic for property pages in C# mirrors how the C++ API handles logic, unlike\n\
                              the scripting languages that use the Softimage Object Model. For more information,\n\
                              see the <a href=\"#!/url=./si_om/PPGEventContext.html\">PPGEventContext</a> documentation. \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
MyCSharpCustomProp.Define \n\
MyCSharpCustomProp.DefineLayout \n\
MyCSharpCustomProp.PPGEvent\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"#!/url=./si_cmds/cb_Property_Define.html\">MyCSharpCustomProp_Define</a><a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">MyCSharpCustomProp_DefineLayout</a><a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">MyCSharpCustomProp_PPGEvent</a></pre></div> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-C05B96EC-4C63-4A2D-9484-710239CA1843\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B308AF7A-6631-466E-87F8-38B478D5D7F7\"></a></span>Since the Custom Display (View) callbacks and the GraphicSequencer callbacks are not\n\
                        implemented in the object model, they are not available for development with the C#\n\
                        language. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";