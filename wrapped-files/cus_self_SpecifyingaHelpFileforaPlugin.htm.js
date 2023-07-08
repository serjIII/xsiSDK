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
      <meta name=\"topicid\" content=\"GUID-8F66ABE9-C597-4B38-B014-858A90BAEF47\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Specifying a Help File for a Plug-in</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"PluginRegistrar::PutHelp()\", \"si_cpp/classXSI_1_1PluginRegistrar.html#afe6e6e6b1af9b70370de81719eef0569\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"PluginItem::PutHelp()\", \"si_cpp/classXSI_1_1PluginItem.html#afe6e6e6b1af9b70370de81719eef0569\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-8F66ABE9-C597-4B38-B014-858A90BAEF47\"></a></span><div class=\"head\">\n\
            <h1>Specifying a Help File for a Plug-in</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-253F917F-31EC-4A68-BC08-1D1CB69C13B9\"></a></span>You can specify an html page as the help file for a plug-in. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B274ACD0-1F02-490C-BE92-699A0A431107\"></a></span>You can access the help for a plug-in in the following ways: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_C5CB792F03994212976D62094CFC2F9F\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-01DDE303-9586-4059-8370-AEB512E3972E\"></a></span>In the Plug-in Tree, right-click the plug-in and choose Help. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F5642FB5-B38D-43C5-966F-87A45659FBE8\"></a></span>If the plug-in includes a self-installing property, click the <span class=\"MenuCascade\" id=\"GUID-44F7FAE9-6E24-40BB-8C71-BC79D8013C3C\">?</span> icon in the title bar of the property page. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-45C395DF-C9FF-4EC4-AC53-DDC70E463783\"></a></span> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-2DD199A1-36E5-4A10-92B6-E62860B6EB6C\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>Pressing F1 in the script editor does not open the help for a custom command. This\n\
                     action works only for commands, objects, methods, and properties that are described\n\
                     in the Softimage SDK help. \n\
                  </div>\n\
               </div> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-35401D3F-D355-420D-88DE-08E58687ABAF\"></a></span>By default, Softimage looks for a help file with the same name as the plug-in in a\n\
               <span class=\"filePath\" translate=\"no\">Doc</span> subfolder. For example, consider that the plug-in <span class=\"filePath\" translate=\"no\">MyPlugin.js</span> is located in the following folder: \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CDB48303-A583-4C18-B0B1-5EAF045D2D50\"></a></span> <span class=\"filePath\" translate=\"no\">C:\\users\\xyz\\Autodesk\\Softimage_&lt;version&gt;\\Application\\Plugins\\MyPlugin</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F61D43EE-38FF-4E99-81DF-74CDFD030C8D\"></a></span>In this example, Softimage looks for the help file named <span class=\"filePath\" translate=\"no\">MyPlugin.html</span> or <span class=\"filePath\" translate=\"no\">MyPlugin.htm</span> in the <span class=\"filePath\" translate=\"no\">MyPlugin\\Doc</span> subfolder. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCE5AEF8-44D5-41A8-A707-3FC9B3084F9C\"></a></span>If a plug-in help file has a different name or location, you can use <a href=\"#!/url=./si_om/SIObject.Help.html\">SIObject.Help</a>, <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"PluginRegistrar::PutHelp()\" class=\"a_multireflink\">PluginRegistrar::PutHelp()</a></span>, or <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"PluginItem::PutHelp()\" class=\"a_multireflink\">PluginItem::PutHelp()</a></span> to specify the help file. See the following example: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">// JScript\n\
function XSILoadPlugin(in_reg)\n\
{\n\
	in_reg.Author = \"xyz\";\n\
	in_reg.Name = \"MyPlugin\";\n\
	\n\
	// Help file is in the same folder as the plug-in\n\
	in_reg.Help = XSIUtils.BuildPath(in_reg.OriginPath, \"MyPlugin.htm\");\n\
	\n\
	var oPluginItem = in_reg.RegisterProperty(\"MyProperty\");\n\
	\n\
	// Open a specific help topic for the property\n\
	oPluginItem.Help = XSIUtils.BuildPath(in_reg.OriginPath, \"MyProperty.htm\");\n\
	\n\
	//RegistrationInsertionPoint - do not remove this line\n\
	\n\
	return true;\n\
}\n\
</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-AB36667F-CE0F-45D2-8462-EEDCC7E12146\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>For html pages, you cannot include a destination anchor. For example, <span class=\"code\" translate=\"no\">MyPlugin.htm#command</span>. \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_F0FA095E00544B729BE5285DAC138B5F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B32FB386-F1B3-46A6-B9D4-443481EF9CA9\"></a></span>Customizing the Plug-In Help Icon\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-27A6FF46-8364-40A7-9A1E-7165C8726E71\"></a></span>You can customize the help icon that appears in the property page of a plug-in. The\n\
                  help icon must be a bitmap file (<span class=\"filePath\" translate=\"no\">*.bmp</span>). It must have a height of 18 pixels and a width not exceeding 100 pixels. If the\n\
                  help icon does not meet this criteria, the default <span class=\"MenuCascade\" id=\"GUID-C0916C0D-5701-486D-BC91-5171779033EA\">?</span> icon is displayed in the property page. By default, Softimage looks for the help\n\
                  icon file in a <span class=\"filePath\" translate=\"no\">Doc</span> subfolder inside the plug-in installation folder. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2BD78C4A-BFB0-4E31-B363-D33BD1588683\"></a></span>You can use one of the following to specify a help icon file for the help button in\n\
                  a property page: <span class=\"anchor_wrapper\"><a name=\"UL_323C85EB6F0C4231966FACE54F034F2B\"></a></span><ul>\n\
                     <li><span class=\"code\" translate=\"no\">PluginItem.HelpButton</span> or <span class=\"code\" translate=\"no\">PluginItem.PutHelpButton</span> \n\
                     </li>\n\
                     <li><span class=\"code\" translate=\"no\">PluginItemRegistrar.HelpButton</span> or <span class=\"code\" translate=\"no\">PluginItemRegistrar.PutHelpButton</span> \n\
                     </li>\n\
                  </ul> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F5D0D63D-4523-46DE-9AA0-5B126C393ABC\"></a></span>See the following example: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\' VBScript\n\
\'\n\
\' This example shows how to specify a help icon file for a plug-in \n\
\' and specific plug-in items. The help icon files are assumed\n\
\' to be in a \"doc\" subfolder inside the plug-in installation folder.\n\
\'\n\
	\n\
Function XSILoadPlugin( in_reg )\n\
	\' Register plugin information\n\
	in_reg.Author = \"Autodesk Softimage\" \n\
	in_reg.Name = \"Help Button\"\n\
	in_reg.Major = 1\n\
	in_reg.Minor = 0 \n\
	in_reg.Help = \"Help_Button.htm\"\n\
	in_reg.HelpButton = \"Help_Button.bmp\"\n\
	\n\
	\' No need to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the help icon file for this property,\n\
	\' the \"MyFirstProperty_HelpButton.bmp\" file located in the\n\
	\' \"doc\" subfolder is automatically found by Softimage\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> item = in_reg.RegisterProperty( \"MyFirstProperty\" )\n\
	\'item.HelpButton = \"MyFirstProperty_HelpButton.bmp\"\n\
\n\
	\' This help icon file is in the same folder as the plug-in\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> item = in_reg.RegisterProperty( \"MySecondProperty\" )\n\
	sHelpButton = \"MyHelpButtonFile.bmp\"\n\
	item.HelpButton = XSIUtils.BuildPath( in_reg.OriginPath, sHelpButton )\n\
\n\
	\' No need to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the help icon file for this plug-in item, the help\n\
        \' button file <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> for the plug-in is suitable for this plug-in\n\
        \' item (considering there is no \"MyThirdProperty_HelpButton.bmp\" file\n\
        \' located in the \"doc\" subfolder of the plug-in installation folder)\n\
	\n\
	in_reg.RegisterProperty \"MyThirdProperty\"\n\
	\n\
	XSILoadPlugin = true\n\
end Function</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";