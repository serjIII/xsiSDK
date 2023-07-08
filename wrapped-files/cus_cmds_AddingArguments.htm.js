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
      <meta name=\"topicid\" content=\"GUID-35B07BE7-976F-4003-AE26-5B10F8A90CEF\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: arguments in the Init callback\" />\n\
      <meta name=\"indexterm\" content=\"arguments: custom commands (Init callback)\" />\n\
      <meta name=\"indexterm\" content=\"Init callbacks: custom commands\" />\n\
      <meta name=\"indexterm\" content=\"ArgumentCollection.AddWithHandler method (using)\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: argument handlers (while adding arguments)\" />\n\
      <meta name=\"indexterm\" content=\"argument handlers (while adding arguments)\" />\n\
      <meta name=\"indexterm\" content=\"Adding Simple-Type Arguments\" />\n\
      <meta name=\"indexterm\" content=\"ArgumentCollection.Add method (using)\" />\n\
      <meta name=\"indexterm\" content=\"Adding Array and Object Arguments\" />\n\
      <meta name=\"indexterm\" content=\"Using Argument Handlers\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: argument handlers (using)\" />\n\
      <meta name=\"indexterm\" content=\"argument handlers (using)\" />\n\
      <meta name=\"indexterm\" content=\"Adding Arguments to C++ Commands\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Adding Arguments</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-35B07BE7-976F-4003-AE26-5B10F8A90CEF\"></a></span><div class=\"head\">\n\
            <h1>Adding Arguments</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1AE1052-CB57-4C9F-BDE8-CE0325FE3C56\"></a></span> The <a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init</a> callback is where you add arguments to a custom command. For example, the following\n\
               <span class=\"code\" translate=\"no\">Init</span> callback adds two arguments:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DFD5DCB8-53AE-4B92-B28B-EC8A2B229024\"></a></span> <span class=\"code\" translate=\"no\">Arg0</span> uses an argument handler named \"Collection\". This argument handler converts strings\n\
                     like \"Cube*,sphere*\" or \"*#model\" into collections of objects, and provides the current\n\
                     selection as the default argument value.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD3CE1EB-C2FD-4BD4-8913-5753E31F461C\"></a></span> <span class=\"code\" translate=\"no\">Arg1</span> is a boolean flag that is false by default. The <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a> or ArgumentArray::Add method has an optional fourth parameter that specifies that\n\
                     data type, but Softimage is able to determine the data type of most arguments on their\n\
                     default values.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
function MyCommand_Init( ctxt )\n\
{\n\
	// Get the Command object from the callback context\n\
	var oCmd;\n\
	oCmd = ctxt.Source;\n\
\n\
	// Get the ArgumentCollection\n\
	var oArgs;\n\
	oArgs = oCmd.Arguments;\n\
\n\
	// Arg0 is a collection of Softimage objects\n\
	// By default, Softimage passes in the current selection\n\
	oArgs.AddWithHandler(<em class=\"strong\">\"Arg0\"</em>,\"Collection\");\n\
\n\
	// Arg1 is a boolean flag that is false by default\n\
	oArgs.Add( <em class=\"strong\">\"Arg1\"</em>, siArgumentInput, false );\n\
	return true;\n\
}</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B7F7A71E-5900-4729-84D9-A4C7FC9AF214\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback has the same arguments as the command. When you add a new argument to a\n\
               command, you have to update the <span class=\"code\" translate=\"no\">Execute</span> callback signature.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
function MyCommand_Execute( <em class=\"strong\">Arg0, Arg1</em> )\n\
{\n\
	// ...\n\
}</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E900EC2C-BCE2-4ACE-B3F9-D11570EDB9EA\"></a></span>Using argument handlers and default values make custom commands behave like built-in\n\
               commands:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
MyCommand();// same as MyCommand( Application.Selection, false )\n\
MyCommand( null, true );// same as MyCommand( Application.Selection, true )\n\
MyCommand( \"*\" );// Arg0=all objects; Arg1=false\n\
MyCommand( \"#3dobject*\", true );// Arg0=3d objects only, no models; Arg1=true</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-002E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8ABF883B-03F5-49A7-8801-95C1529DDF64\"></a></span> Adding Simple-Type Arguments\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C4F8064-B0D5-45CA-A3ED-CF26DA1F193D\"></a></span>To add boolean, string, and number arguments, you can use the <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a> or ArgumentArray::Add method and specify a default value. Softimage can determine\n\
                  the data type from the default value, so you can omit the final parameter to <span class=\"code\" translate=\"no\">Add</span>.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
oArgs.Add( \"bFlag\", siArgumentInput, false );		// boolean\n\
oArgs.Add( \"bFlag\", siArgumentInput, false, siBool );// Same as above\n\
\n\
oArgs.Add( \"sName\", siArgumentInput, \"Custom\" );// string\n\
oArgs.Add( \"nParam\", siArgumentInput, 4 );// number</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2387B44-191E-4CCC-AEAC-4B57C6293DC6\"></a></span>When Softimage knows the argument type, it tries to convert argument values to the\n\
                  specified type. If you do not specify a default value or argument type when you add\n\
                  an argument, then the command will accept any type of value as an argument.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ C++ ]\n\
XSIPLUGINCALLBACK CStatus MyCommand_Init( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	Command oCmd;\n\
	oCmd = ctxt.GetSource();\n\
	...\n\
	ArgumentArray oArgs; \n\
	oArgs = oCmd.GetArguments();\n\
	oArgs.Add(L\"Arg0\");// No default value \n\
\n\
	return CStatus::OK;\n\
}\n\
// Arg0 can be any <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> of value.\n\
// JScript examples:\n\
//	MyCommand( \"arg\" );\n\
//	MyCommand( true );\n\
//	MyCommand( 35 );\n\
//\n\
// var a3 = new Array(10, \"Hello\", Date());\n\
//	MyCommand( a3 );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-11AC38ED-81CE-4EA3-BF47-F6ABBB433DDE\"></a></span>For a C++ command, you\'ll have to check the type of the argument value in the <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ C++ ]\n\
XSIPLUGINCALLBACK CStatus MyCommand_Execute( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	CValueArray args = ctxt.GetAttribute(L\"Arguments\");\n\
	CValue Arg0 = args[0];\n\
\n\
	if( args[0].m_t == CValue::siBool )\n\
	...\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-002F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5902981D-D836-4364-AFA2-78D588BCC66E\"></a></span> Adding Array and Object Arguments\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-55E07A71-1E2C-4C80-B43D-3189BBD5A3C6\"></a></span>For array arguments, how you add the argument depends on how you intend to use the\n\
                  command. If you want to call the command from other scripting languages or from C++,\n\
                  you need to let Softimage convert the array argument to a safe array. In the <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback, you\'ll have to convert the safe array to a JScript array.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oArgs.Add( \"safeArray\", siArgumentInput );// safe array\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-809D5275-8EB1-4EE2-A0F6-B1497CA674E9\"></a></span>If you intend to use the command only from JScript code, you can get better performance\n\
                  by specifying <a href=\"#!/url=./si_om/siVariantType.html\">siDispatch</a> as the argument type. This prevents Softimage from converting the input array to\n\
                  a safe array.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oArgs.Add( \"jsArray\", siArgumentInput, 0, siDispatch );// JScript array</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0030\"></a></span> To be able to pass JScript objects to a command, specify <span class=\"code\" translate=\"no\">siDispatch</span> as the argument type (to prevent Softimage from converting the argument to a safe\n\
                  array).\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oArgs.Add( \"jsObject\", siArgumentInput, 0, siDispatch );	// JScript object</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-28DC5C82-B3C4-4965-8231-4F74AAC2EC26\"></a></span>See the <a href=\"#!/url=./si_om/ArgumentCollection.Add.html\">ArgumentCollection.Add</a> reference page for an example.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0031\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BB88ED7A-33E8-4B44-B575-082997F560EA\"></a></span> Using Argument Handlers\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-60F03F31-8F25-48A7-9508-7C5FD152D14E\"></a></span>Argument handlers make it easy to write custom commands that get collections, objects,\n\
                  and marked parameters as arguments. You can also use argument handlers to get the\n\
                  current frame number, or the frame rate, as arguments.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DED2AA99-68D5-464E-901A-224419E6139E\"></a></span>Argument handlers take care of validating argument values, converting strings such\n\
                  as \"*\" to object lists, and supplying default values.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0032\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-02A84F08-D70D-4021-AAF9-94291B5B1262\"></a></span>To get a collection of objects, or the current selection:\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
oArgs.AddWithHandler(\"Arg\",<em class=\"strong\">\"Collection\"</em>);\n\
\n\
// Examples\n\
MyCommand();	// Same as MyCommand( Application.Selection );\n\
MyCommand( \"cone,cube,sphere\" )\n\
MyCommand( \"#model\" );	// All models, incl. Scene_Root</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0033\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-FA103025-6DC6-4831-8938-F75B45AEE838\"></a></span>To get a collection of subcomponents, or the current selection of subcomponents:\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
oArgs.AddWithHandler(\"Arg\",<em class=\"strong\">\"Collection\"</em>);\n\
// Examples\n\
MyCommand();	// Same as MyCommand( Application.Selection );\n\
MyCommand( \"sphere.pnt[1,7,8,13-15\" )</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0034\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-32817649-2784-49CE-BB1D-D9D3FFB0024F\"></a></span>To get an object:\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
oArgs.AddWithHandler( \"Arg\", <em class=\"strong\">\"SingleObj\"</em> );\n\
\n\
// Shortcut adding args with the SingleObj argument handler\n\
oArgs.AddObjectArgument( \"Arg\" );\n\
\n\
// Examples\n\
MyCommand( Application.Selection.Item(0) );\n\
MyCommand( \"cone\" );\n\
MyCommand();	// Same as MyCommand(null)</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0035\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-EB66565C-F2A1-4F81-9A26-E9A601E0EE4C\"></a></span>To get the current frame number and the frame rate:\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
oArgs.AddWithHandler(\"currentFrame\",<em class=\"strong\">\"Frame\"</em>);\n\
oArgs.AddWithHandler(\"frameRate\",<em class=\"strong\">\"FrameRate\"</em>);</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0036\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-3648E21A-94E4-4FFA-A746-6AC16AAB6705\"></a></span>To get the marked parameters on the currently selected objects:\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
// All marked parameters, both animatable and non-animatable\n\
oArgs.AddWithHandler(\"Arg5\",<em class=\"strong\">\"MarkedParameters\"</em>);\n\
\n\
// Only the animatable marked parameters\n\
oArgs.AddWithHandler(\"Arg0\",<em class=\"strong\">\"AnimatableParameters\"</em>);</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0037\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CDF3FD91-8F0B-4BBE-BC35-88C39BEAA192\"></a></span> Adding Arguments to C++ Commands\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-733BEADD-30B3-4C8A-AAF5-50264E46A6EA\"></a></span>Adding arguments in C++ is pretty much the same as in scripting. You can add simple-type\n\
                  arguments like booleans or strings or arrays using <a href=\"#!/url=./si_cpp/classXSI_1_1ArgumentArray.html#Add\">ArgumentArray::Add</a>, or add arguments with specialized handlers using <a href=\"#!/url=./si_cpp/classXSI_1_1ArgumentArray.html#AddWithHandler\">ArgumentArray::AddWithHandler</a>.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-ACFF8ECA-43E3-44C1-9BBC-3B1F9B2EDD3E\"></a></span>One difference is that the C++ <span class=\"code\" translate=\"no\">Add</span> method has two parameters only: the name of the argument and a default value. There\n\
                  is no parameter for specifying the type of the argument value.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ C++ ]\n\
XSIPLUGINCALLBACK CStatus MyCommand_Init( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	Command oCmd;\n\
	oCmd = ctxt.GetSource();\n\
	oCmd.EnableReturnValue(true);\n\
	ArgumentArray oArgs;\n\
	oArgs = oCmd.GetArguments();\n\
\n\
	// Add some simple-<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> args. \n\
	oArgs.Add( L\"bFlag\", false );		// siBool\n\
	oArgs.Add( L\"sString\", L\"someString\" );	// siString\n\
	oArgs.Add( L\"nNumber\", 0l );		// siInt4\n\
	oArgs.Add( L\"Float\", 0.0f );	// siFloat\n\
	oArgs.Add( L\"Arg\" );		// No default value, so can be any <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
\n\
	// Default value is the current selection\n\
	oArgs.AddWithHandler( L\"cloObjects\", L\"Collection\" );\n\
\n\
	// Default value is the all marked animatable parameters\n\
	oArgs.AddWithHandler( L\"Arg0\", L\"AnimatableParameters\" );\n\
	return CStatus::OK;\n\
}</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";