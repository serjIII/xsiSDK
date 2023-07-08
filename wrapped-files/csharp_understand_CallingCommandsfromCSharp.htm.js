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
      <meta name=\"topicid\" content=\"GUID-838F0D68-2DB2-4BB4-8BA4-48DD4B5B25ED\" />\n\
      <meta name=\"indexterm\" content=\"commands: calling from C#\" />\n\
      <meta name=\"indexterm\" content=\"C#: calling commands from C# plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"output parameters: accessing in C#\" />\n\
      <meta name=\"indexterm\" content=\"parameters: returning output parameters: C#\" />\n\
      <meta name=\"indexterm\" content=\"commands: returning output parameters (C#)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Calling Commands from C#</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-838F0D68-2DB2-4BB4-8BA4-48DD4B5B25ED\"></a></span><div class=\"head\">\n\
            <h1>Calling Commands from C#</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-C5470B00-FDC3-4032-AB41-F6DCF5A858EF\"></a></span>Commands can be invoked in C# using the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method. For more information, see the following sections:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-711A1561-E6E4-4370-8435-D2CC52E54F3E\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm#WS867B13D549B34C4DB8B9D98945203C0F-001B\">How to Pass in Arguments</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F330341-CE8B-477D-B102-EA844BAA60CB\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm#WS867B13D549B34C4DB8B9D98945203C0F-001E\">Dealing with Return Values</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C390528E-60EC-480A-9BD6-FBC0AB981BF3\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm#WS867B13D549B34C4DB8B9D98945203C0F-0020\">Getting Output Arguments</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-001B\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-ECE21DFD-5104-471B-B625-C6D9DCA4512A\"></a></span>How to Pass in Arguments\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-ABFF3B33-0DC4-48A7-8DFD-0F198440CAC9\"></a></span>Input arguments are packed into an array of <span class=\"code\" translate=\"no\">System.Object</span> objects (the C# version of the <a href=\"#!/url=./files/Variant.htm\">Variant</a> type):\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Use XSIUtils.BuildPath to create the string path to the preset\n\
CXSIUtilsClass utils = new CXSIUtilsClass();\n\
string presetfile = utils.BuildPath(\n\
    app.get_InstallationPath(siInstallationPath.siUserPath),\n\
    \"Data\", \"DSPresets\", \"Properties\", \"Example.Preset\", \"\", \"\", \"\"\n\
    );\n\
\n\
// Notice how you don\'t have to explicitly cast these strings into objects\n\
// in order to pack them into the array of objects\n\
object[] args = new object[2] { presetfile, \"MyPSet\" };\n\
app.ExecuteCommand(\"SILoadPreset\", args);\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-001C\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-558D0655-BD17-49B1-B590-238B4D26A2A8\"></a></span>C# Example: Calling a Command with Optional Arguments\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE13CCF2-8D33-4542-AD3A-760EC007C8E2\"></a></span>All arguments need to be explicitly passed to command arguments. However, in some\n\
                  cases you can invoke the default value by passing in a null value. This is similar\n\
                  to JScript, but whereas JScript lets you omit any trailing optional arguments, you\n\
                  must still pass them in C#:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using XSIOM;\n\
CXSIApplicationClass app = new CXSIApplicationClass();\n\
\n\
// Notice that passing null triggers the default value \n\
app.ExecuteCommand(\"NewScene\", null);\n\
Model root = app.ActiveSceneRoot;\n\
X3DObject sph = root.AddGeometry(\"Cube\", \"MeshSurface\", \"MyCube\");\n\
\n\
// The JScript <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> can simply ignore the final argument and it \n\
// will default to false, but C# needs to explicitly pass null\n\
object[] args = new object[3] { sph.Name + \".kine.local.posx\", \"-10 + T * 3\", null };\n\
app.ExecuteCommand(\"AddExpr\", args);\n\
\n\
// JScript <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> would look like this:\n\
NewScene( null, false );\n\
var root = Application.ActiveSceneRoot;\n\
var sph = root.AddGeometry(\"Cube\", \"MeshSurface\", \"MyCube\");\n\
\n\
// Here the final argument is missing\n\
AddExpr( sph.Name + \".kine.local.posx\", \"-10 + T * 3\" );\n\
</pre></div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-001D\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-B1E52C28-CCF1-49EE-98B6-35A2F6E14289\"></a></span>C# Example: Calling a Command with No Arguments\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A585E036-ADA5-470F-812A-BDB09495A4FD\"></a></span>If the command takes no arguments you can specify a null:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
app.ExecuteCommand(\"LastFrame\", null);\n\
</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-3FD0E216-8008-4A33-9AF0-15707A904656\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-7768F56D-98D3-4922-B99F-B3CE1D0DD1EF\"></a></span>If you try to pass only the name of the command, you will get a <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CommonBuildProblems.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-001C\">compiler error</a></span> telling you are trying to specify the wrong number of arguments for the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-001E\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-967392FE-A859-40B5-8511-E4D54891EB87\"></a></span>Dealing with Return Values\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B1FAEFD-0124-4727-94F0-AD687F6F2119\"></a></span><a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> always returns a <a href=\"#!/url=./files/Variant.htm\">Variant</a> object which maps to a <span class=\"code\" translate=\"no\">System.Object</span> object in C#. You can check the command reference documentation to figure out what\n\
               is contained in the returned array.\n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-001F\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C0485104-02D6-48FB-B31C-39EA22ABBDBE\"></a></span>C# Example: Calling a Command with a Return Value\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A07C99EA-69B7-48D6-9C2E-E61334F69BCC\"></a></span>This example explicitly casts the returned C# Object to the <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> interface:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using XSIOM;\n\
CXSIApplicationClass app = new CXSIApplicationClass();\n\
\n\
// Setup the scene\n\
Model root = app.ActiveSceneRoot;\n\
X3DObject sph = root.AddGeometry(\"Cube\", \"MeshSurface\", \"MyCube\");\n\
\n\
// Build the arguments list for the StoreAction command \n\
object[] args = new object[11];\n\
args[0] = sph.Name; \n\
args[1] = \"MyCube.kine.local.posx,MyCube.kine.local.posy,MyCube.kine.local.posz\"; \n\
args[2] = 1; \n\
args[3] = \"StoredStaticPose\"; \n\
args[4] = true; \n\
args[5] = 1.0; \n\
args[6] = 5.0; \n\
args[7] = false; \n\
args[8] = false; \n\
args[9] = false; \n\
args[10] = -1.0;\n\
ActionSource src = (ActionSource)app.ExecuteCommand(\"StoreAction\", args);\n\
app.LogMessage(\"Created new source: \" + src.FullName, siSeverity.siInfo);\n\
// Sources.Scene_Root.StoredStaticPose\n\
</pre></div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0020\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5AE57819-CA21-47D4-8B14-6CCFAD719DFE\"></a></span>Getting Output Arguments\n\
            </h2> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0021\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-8185A9C0-608E-4115-9A18-1B7B83699887\"></a></span>C# Example: Calling a Command with Output Arguments\n\
               </h3>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A10454BB-FFA4-47A3-8851-E6CCE2CE1D3A\"></a></span>The <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> returns a <a href=\"#!/url=./files/Variant.htm\">Variant</a> object containing an array of the output arguments which you can test and cast to\n\
                  the correct data type or interface.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-86310E12-0334-4623-845B-C992A924FE8A\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BAF1BEF7-3DFA-4911-931D-FEC6D0686089\"></a></span>Some commands both return a value and use output arguments. For those commands only\n\
                        the return value is accessible. The only possible workaround in this case is to implement\n\
                        a VBScript custom command to return all elements in an array or <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9AB6E712-5E90-4997-80C7-E5321CFF2F38\"></a></span>Check the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a> for return value and output parameter information on each command you need to call.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
object[] args = new object[7] { StringModule.siGenericObjectFilter, null, null, null, null, null, null };\n\
Array rtn = (Array)app.ExecuteCommand(\"PickElement\", args);\n\
foreach (object obj in rtn)\n\
{\n\
	if (obj.GetType() == System.Int32)\n\
	{\n\
		int val = (int)obj;\n\
		Log(val.ToString());\n\
	}\n\
	else\n\
	{\n\
		CollectionItem itm = (CollectionItem)obj;\n\
		Log(itm.Name);\n\
	}\n\
}\n\
</pre></div> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";