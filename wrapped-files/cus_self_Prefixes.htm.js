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
      <meta name=\"topicid\" content=\"GUID-7664E770-5EA2-4512-BD7C-E84D5A47EC7C\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using Prefixes with Custom Properties</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"color\", \"si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7664E770-5EA2-4512-BD7C-E84D5A47EC7C\"></a></span><div class=\"head\">\n\
            <h1>Using Prefixes with Custom Properties</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C9E9D89-5AB6-446F-AE8E-6C1DB5903F86\"></a></span>The naming conventions for property page event handlers differ slightly for SPDL-based,\n\
               <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0021\">runtime and plug-in properties:</a></span> \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_DF68830871B44ED79C77AB76E31214C5\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-134D2633-E130-4BB7-8340-837290E12CE5\"></a></span>By default, plug-in based (self-installing) properties use the name of the property\n\
                     as a prefix. For example, the <span class=\"code\" translate=\"no\">MyProp</span> property\'s <a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a> callback would be <span class=\"code\" translate=\"no\">MyProp_OnInit</span>. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C1035D8-BFC1-48C0-8F26-29BE19848495\"></a></span>By default, SPDL- and runtime-based properties use no prefix at all. For example,\n\
                     the <span class=\"code\" translate=\"no\">MyProp</span> property\'s <a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a> callback would be simply <span class=\"code\" translate=\"no\">OnInit</span> whether it\'s defined in a SPDL file or on the fly. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4202883D-8428-4664-AF9A-7713ED817AB8\"></a></span>However, when a prefix is specified, it is used across the board for all event handler\n\
               callbacks, regardless of the name of the property or how it was implemented. For example,\n\
               for the <span class=\"code\" translate=\"no\">MyProp</span> property with a prefix defined as <span class=\"code\" translate=\"no\">FooBar</span>, the <a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a> callback would be <span class=\"code\" translate=\"no\">FooBar_OnInit</span> for SPDL-based, runtime-based, and plug-in based custom properties alike. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEFBD9C1CA813C8499600F28142419F26-0014\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8E3502C4-2B59-4B91-9D93-77D560DE824F\"></a></span>Defining a Prefix\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-159AD587-8F1B-4231-9DD3-000ADEC5C618\"></a></span>For <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm#WSEFBD9C1CA813C8499600F28142419F26-0015\">runtime</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm#WSEFBD9C1CA813C8499600F28142419F26-0016\">plug-in properties</a></span> you can explicitly specify a prefix via scripting, by setting the siUILogicPrefix\n\
                  via <a href=\"#!/url=./si_om/PPGLayout.SetAttribute.html\">PPGLayout.SetAttribute</a> or PPGLayout::PutAttribute. <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm#WSEFBD9C1CA813C8499600F28142419F26-0017\">SPDL-based properties</a></span>, on the other hand, can either define a prefix via scripting in the Logic block of\n\
                  the SPDL file or via the LogicPrefix setting. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEFBD9C1CA813C8499600F28142419F26-0015\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2968AA7D-D1BD-4A5E-BEB8-A626612D7F69\"></a></span>Example: Simple Runtime Property\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-83AD762B-8589-48DC-BFE4-46A97BE05F81\"></a></span>This example creates a very simple custom property on the fly using the prefix <span class=\"code\" translate=\"no\">FooBar</span>, which must appear on the event handlers for this page\'s logic. \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">// Define an on-the-fly property with a single boolean parameter\n\
var root = Application.ActiveSceneRoot;\n\
var prop = root.AddCustomProperty( \"RuntimePropertyDemo\" );\n\
prop.AddParameter3( \"BooParam\", siBool );\n\
\n\
\n\
// Access the logic via the layout and simply add the handlers \n\
// specified below via the JScript toString() function\n\
var ppglay = prop.PPGLayout;\n\
ppglay.Logic = FooBar_OnInit.toString() + FooBar_BooParam_OnChanged.toString();\n\
\n\
// Specify the new prefix and <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the language to JScript\n\
ppglay.Language = \"JScript\";\n\
<em class=\"strong\">ppglay.SetAttribute( siUILogicPrefix, \"FooBar_\" );</em> // explicitly specify the underscore \n\
\n\
\n\
//\n\
// Event handlers: for demo, these just log their names when called\n\
//\n\
// INFO : OnInit handler called\n\
function <em class=\"strong\">FooBar_OnInit</em>() // specify the prefix before \'OnInit\'\n\
\n\
{\n\
	Application.LogMessage( \"OnInit handler called\" );\n\
}\n\
\n\
// INFO : Parameter_OnChanged handler called\n\
function <em class=\"strong\">FooBar_BooParam_OnChanged</em>() // specify the prefix before \'Parameter_OnChanged\'\n\
{\n\
	Application.LogMessage( \"Parameter_OnChanged handler called\" );\n\
}</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEFBD9C1CA813C8499600F28142419F26-0016\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F32D971D-86C1-4F6F-B65E-EF95960CD5AE\"></a></span>Example: Simple Plug-in Based Property\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CA715F4-ABCA-45EF-8E75-83BA86169895\"></a></span>This example is very similar to its <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm#WSEFBD9C1CA813C8499600F28142419F26-0015\">runtime</a></span> counterpart except that it is a scripted plug-in. To test it, follow these instructions:\n\
                     \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"GUID-606A16E4-3D26-4CC9-A0D8-67CB333875D9\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E53A0AF-A38C-460D-86B6-02441DF5DD35\"></a></span>Copy and paste the example text below into a file under the <span class=\"filePath\" translate=\"no\">Applications/Plugins</span> folder of your user directory (call it <span class=\"filePath\" translate=\"no\">PluginPropertyDemoPlugin.js</span>). \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-693DA29A-BC12-4586-B82C-F3CC9E823DE5\"></a></span>Apply the property to the scene root by running the following in the script editor:\n\
                           \n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">Application.ActiveSceneRoot.AddProperty( \"PluginPropertyDemo\" );</pre></div> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-58E247EF-33D0-485D-AA85-B01EFAC4D81D\"></a></span>Inspect the new property (the <span class=\"code\" translate=\"no\">OnInit</span> event handler will log a message). \n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-0ADE0B1E-090D-4177-BE4B-18B07E04FA0A\"></a></span>You can toggle the <span class=\"MenuCascade\" id=\"GUID-5C28FCE5-2B44-45D4-B3CF-E9E31301A1CC\">BooParam</span> check box to see its event handler log messages to the screen. \n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-06D4DFE2-473F-4A14-BF9B-A3D50A8A7B60\"></a></span>In this example, notice that not only do the <a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a> and <a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a> callbacks use the prefix, but also the <a href=\"#!/url=./si_cmds/cb_Property_Define.html\">Define</a> and <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callbacks. \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">// Define a plug-in based property with a single boolean parameter\n\
//\n\
// Notice that the Define and DefineLayout callbacks use the \n\
// property <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>; only the event handlers use the prefix\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Name = \"PluginPropertyDemoPlugin\";\n\
	in_reg.RegisterProperty( \"PluginPropertyDemo\" );\n\
	return true;\n\
}\n\
\n\
// Add parameters in this callback\n\
function PluginPropertyDemo_Define( in_ctxt )\n\
{\n\
	var prop = in_ctxt.Source; // Get the CustomProperty\n\
	prop.AddParameter3( \"BooParam\", siBool );\n\
	return true;\n\
}\n\
\n\
// Set the language and prefix in this callback (the logic is automatically \n\
// provided by the event handler callbacks specified at the bottom of the file)\n\
function PluginPropertyDemo_DefineLayout( in_ctxt )\n\
{\n\
	var ppglay = in_ctxt.Source; // Get the PPGLayout\n\
	\n\
	// Set the language to JScript and specify the new prefix \n\
	ppglay.Language = \"JScript\";\n\
	ppglay.SetAttribute( siUILogicPrefix, \"FooBar_\" ); // explicitly specify the underscore \n\
	return true;\n\
}\n\
\n\
\n\
//\n\
// Event handlers: for demo, these just log their names when called\n\
//\n\
// INFO : OnInit handler called\n\
function FooBar_OnInit() // specify the prefix before \'OnInit\'\n\
{\n\
	Application.LogMessage( \"OnInit handler called\" );\n\
}\n\
\n\
// INFO : Parameter_OnChanged handler called\n\
function FooBar_BooParam_OnChanged() // specify the prefix before \'Parameter_OnChanged\'\n\
{\n\
	Application.LogMessage( \"Parameter_OnChanged handler called\" );\n\
}</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSEFBD9C1CA813C8499600F28142419F26-0017\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-7701CAF7-58C2-4AA0-9749-2C4B7BF674FF\"></a></span>Example: Simple SPDL Shader Property\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9DEA0A12-EFCA-49D8-BE4C-E31C9985574C\"></a></span>This example demonstrates how to set the prefix using the LogicPrefix setting. It\n\
                     is a fully functional SPDL file although as a shader it will obviously fail without\n\
                     some kind of library file. To test it, follow these instructions: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9AA5A62F-D422-4CC9-942F-14C6D4FDCB32\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-63608E23-819E-47C2-B562-59526D237E7F\"></a></span>Copy and paste the text below into a file under the <span class=\"filePath\" translate=\"no\">Applications/spdl</span> folder of your user directory (call it <span class=\"filePath\" translate=\"no\">SPDLPropertyDemo.spdl</span>). \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-45C1BF4E-22CB-4340-BBA4-985C2E698AC4\"></a></span>From the Plug-in Tree in Softimage, right-click the new spdl file (click <span class=\"MenuCascade\" id=\"GUID-E45546AE-C6F5-48CE-B994-F3C4B5165CE2\">Update All</span> if you don\'t see it) and choose <span class=\"MenuCascade\" id=\"GUID-D4EF1292-BF61-4676-B7E6-9C75ADA3F72F\">Regenerate Preset</span>. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-56B447CF-AD34-42A4-A322-70461CC5ABEB\"></a></span>Apply the shader to a cube in Softimage scene by running the following in the script\n\
                           editor: \n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">var obj = Application.ActiveSceneRoot.AddGeometry( \"Cube\", \"NurbsSurface\" );\n\
var shaderpreset = XSIUtils.BuildPath( \n\
   Application.InstallationPath( siUserPath ),\n\
   \"Data\", \"DSPresets\", \"Shaders\", \"Texture\", \"SPDLPropertyDemo.Preset\" );\n\
CreateShaderFromPreset( shaderpreset, \"Sources.Materials.DefaultLib.Material\" );\n\
SIConnectShaderToCnxPoint( \"Sources.Materials.DefaultLib.Material.SPDLPropertyDemo\", \n\
	\"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", false );</pre></div> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-73F84685-E525-4426-97C2-B3B93B59DA3B\"></a></span>Inspect the new shader property (the <span class=\"code\" translate=\"no\">OnInit</span> event handler will log a message). \n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-0723B9A9-A0DB-499E-A812-E3300DE84B88\"></a></span>You can toggle the <span class=\"MenuCascade\" id=\"GUID-532D8BF3-18D3-4AD5-899D-E23FFD853B28\">BooParam</span> check box to see its event handler log messages to the screen. \n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-98AA3E5D-D48F-4FFE-A1B8-2F143011153C\"></a></span>Notice that, in this SPDL snippet, the prefix is specified exactly as in the <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm#WSEFBD9C1CA813C8499600F28142419F26-0015\">runtime</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm#WSEFBD9C1CA813C8499600F28142419F26-0016\">plug-in</a></span> based examples, and the event handlers are identical. \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">SPDL\n\
Version = \"2.0.0.0\";\n\
Reference = \"{0DEC8359-4327-42E4-AE1B-A9504FF4047C}\";\n\
PropertySet \"SPDLPropertyDemo_pset\"\n\
{\n\
	Parameter \"out\" output\n\
	{\n\
		GUID = \"{248FCEFE-DBA6-412A-9A8F-17A96D97F1E3}\";\n\
		Type = <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a>;\n\
	}\n\
	Parameter \"BooParam\" input\n\
	{\n\
		GUID = \"{4F5EE6C2-D219-4986-B455-EFAA6C538FC7}\";\n\
		Type = boolean;\n\
		Value = off;\n\
	}\n\
}\n\
\n\
MetaShader \"SPDLPropertyDemo_meta\"\n\
{\n\
	Name = \"SPDL Property Demo Shader\";\n\
	Type = texture;\n\
	Renderer \"mental ray\"\n\
	{\n\
		Name = \"SPDLPropertyDemo\";\n\
		FileName = \"SPDLPropertyDemo\";\n\
		Options\n\
		{\n\
			\"<a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>\" = 1;\n\
		}\n\
	}\n\
}\n\
\n\
Layout \"Default\"\n\
{\n\
	BooParam;\n\
}\n\
\n\
Language = \"JScript\";\n\
<em class=\"strong\">LogicPrefix = \"FooBar_\";</em>\n\
# Alternatively you could copy the code between the BeginScript and EndScript\n\
# keywords and save them in the following file (and uncomment the next line):\n\
#LogicFile = \"$XSI_USERHOME/Application/spdl/lib/SPDLPropertyDemo.js\";\n\
\n\
BeginScript\n\
	//\n\
	// Event handlers: for demo, these just log their names when called\n\
	//\n\
	// INFO : OnInit handler called\n\
	function <em class=\"strong\">FooBar_OnInit()</em> // specify the prefix before \'OnInit\'\n\
	{\n\
		Application.LogMessage( \"OnInit handler called\" );\n\
	}\n\
	\n\
	// INFO : Parameter_OnChanged handler called\n\
	function <em class=\"strong\">FooBar_BooParam_OnChanged</em>()					// specify the prefix before \'Parameter_OnChanged\'\n\
	{\n\
		Application.LogMessage( \"Parameter_OnChanged handler called\" );\n\
	}\n\
EndScript\n\
\n\
Plugin = Shader\n\
{\n\
	FileName = \"SPDLPropertyDemo\";\n\
}</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";