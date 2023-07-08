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
      <meta name=\"topicid\" content=\"GUID-CD990A5E-BBA5-46BE-B912-64B8A846F4E5\" />\n\
      <meta name=\"indexterm\" content=\"converting: legacy C++ commands to self-installing\" />\n\
      <meta name=\"indexterm\" content=\"legacy C++ commands: converting to self-installing\" />\n\
      <meta name=\"indexterm\" content=\"self-installing plug-ins: converting from legacy C++ commands\" />\n\
      <meta name=\"indexterm\" content=\"porting legacy C++ commands to self-installing\" />\n\
      <meta name=\"indexterm\" content=\"To port a legacy C++ command to a self-installed plugin.\" />\n\
      <meta name=\"indexterm\" content=\"Multiple commands\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Migrating Legacy Plug-ins</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"XSI::CStatus\", \"si_cpp/classXSI_1_1CStatus.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CString\", \"si_cpp/classXSI_1_1CString.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CValueArray\", \"si_cpp/classXSI_1_1CValueArray.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CValue\", \"si_cpp/classXSI_1_1CValue.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_context.h\", \"si_cpp/xsi__context_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_pluginregistrar.h\", \"si_cpp/xsi__pluginregistrar_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_argument.h\", \"si_cpp/xsi__argument_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_command.h\", \"si_cpp/xsi__command_8h.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-CD990A5E-BBA5-46BE-B912-64B8A846F4E5\"></a></span><div class=\"head\">\n\
            <h1>Migrating Legacy Plug-ins</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3ADD9F00-EF1A-41C9-8219-19EF9A5D7293\"></a></span>Softimage continues to support legacy C++ commands, but because of the rich feature\n\
               set and the improved workflow associated with self-installed custom commands you should\n\
               really take the time to port them to the new mechanism. The good news is that the\n\
               actual implementation of your code does not need to change significantly.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2419E28F-124A-4A9E-8929-2BF7A2DFB67C\"></a></span>One way to port your Custom Command to Softimage is to create a new command using\n\
               the SDK Command Wizard (see <a href=\"#!/url=./files/cus_cmds_wizard.htm\">Custom Command Wizard</a> for more information) and then copy and paste your actual implementation into the\n\
               new dll. However it is also easy to do this manually. For the purpose of this example,\n\
               assume that your command in called <span class=\"code\" translate=\"no\">Foo</span>.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-002C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-09D985EF-D857-4864-83C2-9181A9695AA9\"></a></span> To port a legacy C++ command to a self-installed plugin.\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"GUID-51D2149D-0127-46DF-ADF1-B97497C46AE8\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3DE6338-3F1E-443A-82E0-0B12C0958441\"></a></span>Back up your source files.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A0A57B33-57C1-433C-8102-D544EBDDA850\"></a></span>In Softimage make sure that any old version of the command has been removed by running\n\
                        the following code snippet in the Script Editor:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript\n\
Application.RemoveCommand( \"Foo\" );\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE22FEE7-0EC3-4668-8409-0A81714DDD82\"></a></span>For Windows, instead of using a .def file to export functions, add the <em class=\"strong\">XSIPLUGINCALLBACK</em> macro to the function definition:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B47F2155-CFF2-4354-9D12-D33302DA3768\"></a></span>In your .cpp file add a <span class=\"code\" translate=\"no\">XSILoadPlugin</span> callback function similar to this:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	#ifdef unix\n\
	extern \"C\"\n\
	#endif\n\
	XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
	{\n\
		in_reg.PutAuthor(L\"My Name\");\n\
		in_reg.PutName(L\"foo Plug-in\");\n\
		in_reg.PutVersion(1,0);\n\
		in_reg.RegisterCommand(L\"Foo\",L\"Foo\");\n\
	\n\
		return CStatus::OK;\n\
	}\n\
</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-42DAF3E8-AB5B-49CA-84FE-839F948FA5BD\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1876A34F-CD94-4569-A923-9D08DF648EB6\"></a></span>For more information on this callback and more about self-installing plug-ins in general,\n\
                              see <a href=\"#!/url=./files/cus_self.htm\">Self-Installing Plug-ins</a>.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8769ABE7-052D-4FBC-94AD-05E42830A3E3\"></a></span>Add another callback function called <span class=\"code\" translate=\"no\">Foo_Init</span>. This function replaces your old installation script which probably looked like this.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\'OBSOLETE:\n\
	SUB InstallFooDemo( dllDir, ext )\n\
		Module=\"Foo\"\n\
		filename = dllDir &amp; \"/\" &amp; Module &amp; ext\n\
\n\
		Application.RemoveCommand \"Foo\"\n\
		SET oCmd = Application.CreateCommand(\"Foo\",siNoCategory)\n\
		oCmd.ScriptingName = \"Foo\"\n\
		oCmd.FileName = filename\n\
		oCmd.Language = \"CPP\"\n\
\n\
		oCmd.arguments.add \"Arg0\", siArgumentInput\n\
		oCmd.arguments.addObjectArgument \"Arg1\"\n\
\n\
		\' Add the new command\n\
		Application.AddCommand oCmd\n\
	END SUB\n\
</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B554DA0-0372-41EC-BEC7-7A0785EE00EE\"></a></span>The new <span class=\"code\" translate=\"no\">Foo_Init</span> function is where you define the arguments and the flags for your command. The C++\n\
                        API for defining a command is very similar to the Object Model API that you used in\n\
                        your install script so porting your code should not be too difficult. See the <a href=\"#!/url=./si_cpp/classXSI_1_1Argument.html\">Argument</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1Command.html\">Command</a> classes for more details.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D9465271-8425-496B-A2C3-0F1DBEA1F3C9\"></a></span>Here is an example of what your <span class=\"code\" translate=\"no\">Foo_Init</span> function could look like:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	#ifdef unix\n\
	extern \"C\"\n\
	#endif\n\
	XSIPLUGINCALLBACK CStatus Foo_Init( CRef&amp; in_ctxt )\n\
	{\n\
		Context ctxt( in_ctxt );\n\
		Command oCmd;\n\
		oCmd = ctxt.GetSource();\n\
		oCmd.PutDescription(L\"Foo does important stuff\");\n\
		oCmd.EnableReturnValue(true);\n\
\n\
		ArgumentArray oArgs;\n\
		oArgs = oCmd.GetArguments();\n\
		oArgs.Add(L\"Arg0\");\n\
		oArgs.AddObjectArgument(L\"Arg1\");\n\
		return CStatus::OK;\n\
	}\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-72B1B615-C621-404A-9099-FB3B3099FB8B\"></a></span>Once you are done writing your <span class=\"code\" translate=\"no\">Foo_Init</span> function, remove the old install script code.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-549FEF30-777A-4FF5-BCFF-6799C3C4222B\"></a></span>Now you need to replace the old <span class=\"code\" translate=\"no\">XSIOnCommandCPP</span> callback with the new <span class=\"code\" translate=\"no\">Foo_Execute</span> callback function. Your old code:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	#ifdef unix\n\
	extern \"C\"\n\
	#endif\n\
	<a href=\"javascript:void(0)\" data=\"XSI::CStatus\" class=\"a_multireflink\">XSI::CStatus</a> XSIOnCommandCPP\n\
	( \n\
		const <a href=\"javascript:void(0)\" data=\"XSI::CString\" class=\"a_multireflink\">XSI::CString</a>&amp;	in_strCmdName, // <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> of the command \n\
		<a href=\"javascript:void(0)\" data=\"XSI::CValueArray\" class=\"a_multireflink\">XSI::CValueArray</a>&amp;	args, // array of arguments\n\
		<a href=\"javascript:void(0)\" data=\"XSI::CValue\" class=\"a_multireflink\">XSI::CValue</a>&amp;		io_retVal		// return value\n\
	)\n\
	{\n\
		...	\n\
	}\n\
</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2991505D-AE4B-4F03-8F6C-BC6A47F50E28\"></a></span>becomes:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	#ifdef unix\n\
	extern \"C\"\n\
	#endif\n\
	XSIPLUGINCALLBACK CStatus foo_Execute( CRef&amp; in_ctxt )\n\
	{\n\
		Context ctxt( in_ctxt );\n\
		CValueArray args = ctxt.GetAttribute(L\"Arguments\");\n\
		...\n\
	}\n\
</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-1D65D51E-454E-4298-B45C-4D294BDE74E2\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F26725D9-E73C-4477-9440-4A438DF4031E\"></a></span>There is no <span class=\"code\" translate=\"no\">io_retVal</span> argument anymore, instead you can return a value like this:\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	CValue returnValue ;\n\
	//...<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> a value in returnValue ;\n\
	ctxt.PutAttribute( L\"ReturnValue\", returnValue );	\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-143C2C91-45A0-4CAD-A0B2-1B372278A286\"></a></span>Compilation time. You may find that you need to add some new C++ API include statements.\n\
                        For example:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_context.h\" class=\"a_multireflink\">xsi_context.h</a>&gt;\n\
	#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_pluginregistrar.h\" class=\"a_multireflink\">xsi_pluginregistrar.h</a>&gt;\n\
	#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_argument.h\" class=\"a_multireflink\">xsi_argument.h</a>&gt;\n\
	#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_command.h\" class=\"a_multireflink\">xsi_command.h</a>&gt;\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1EB2E251-9B27-4DD9-9698-3496F4AB0871\"></a></span>Now you just need to make sure your dll is in the correct path, for example in the\n\
                        \"\\Application\\Plugins\" directory on your workgroup. You can use the Plugin Manager\n\
                        to load/reload the dll without restarting Softimage (see <a href=\"#!/url=./files/ManageLibraries__Dialog.htm\">Working with the Plug-in Manager</a> for more information).\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-467A0582-861F-4DCE-98A8-728BB05B3055\"></a></span>Invoke your command in the Script Editor to test it and that\'s it!\n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-002D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B859E565-E09D-4F3E-9F8B-A4510406E04D\"></a></span> Multiple commands\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B7440D09-D952-4E47-905E-81C27086DFA2\"></a></span>The preceding procedure only covers the case of a single command in a .dll or .so.\n\
                  However you can easily have multiple commands implemented in your self-installing\n\
                  plug-in dll. Just register them in your <span class=\"code\" translate=\"no\">XSILoadPlugin</span> implementation, and add an <span class=\"code\" translate=\"no\">Init</span> and <span class=\"code\" translate=\"no\">Execute</span> function for each one.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD1BB0E3-A41D-47E3-8ACC-45DAE0245C84\"></a></span>You can use the Command Wizard to add commands to a plug-in. In the script editor,\n\
                  right-click and choose <span class=\"MenuCascade\" id=\"GUID-D407D363-B435-4D82-94B9-7FC3EC11E600\">Tools</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-5BE3B96B-7173-49E7-BF2D-171C518F3F85\">Add Command</span>.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";