var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ArgumentCollection.Add</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>ArgumentCollection.Add</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a>.Add</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds an argument to the <a href=\"#!/url=./si_om/Command.html\">Command</a> definition. <br /><br />\n\
To add an argument that receives an object call, use <a href=\"#!/url=./si_om/ArgumentCollection.AddObjectArgument.html\">ArgumentCollection.AddObjectArgument</a> instead.\n\
To use an <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a> use <a href=\"#!/url=./si_om/ArgumentCollection.AddWithHandler.html\">ArgumentCollection.AddWithHandler</a> instead.\n\
This method is only available on custom commands. Normally this is called \n\
during the definition of a command (before <a href=\"#!/url=./si_om/XSIApplication.AddCommand.html\">XSIApplication.AddCommand</a> \n\
is called). However it is also possible to add an argument and call \n\
<a href=\"#!/url=./si_om/Command.Update.html\">Command.Update</a> to change an existing command.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Argument ArgumentCollection.Add( String Name, siArgumentFlags argflags, Object defval, siVariantType in_vtValType );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ArgumentCollection.Add( Name, [Flags], [Value], [ArgType] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A name for the argument. The particular name chosen is not particularly important \n\
		as long as it is unique in the <a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a>.  \n\
		However having a good Argument name helps users understand how to use the <a href=\"#!/url=./si_om/Command.html\">Command</a>.\n\
		In the case of script-based custom commmands the names of the equivalent argument in the \n\
		implementation does not need to match.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Flags		</td>\n\
		<td><a href=\"#!/url=./si_om/siArgumentFlags.html\">siArgumentFlags</a>		</td>\n\
		<td>\n\
Currently siArgumentInput is the only supported value for custom commands			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siArgumentInput			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
 \n\
		The argument default value (defaults to empty). Specifying a default value\n\
		also serves the purpose of specifying the specific VARIANT type that is expected\n\
		(See <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a>).\n\
		For example if the default value is a double then Softimage will attempt \n\
		to convert any input argument to double before invoking the command.  \n\
		When not specified the argument will be passed in directly without conversion. \n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ArgType		</td>\n\
		<td><a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a>		</td>\n\
		<td>\n\
\n\
		The argument value type, by default the argument is set to siEmpty. <br /><br />\n\
		This argument is optional for arguments which are normal Variant values, for \n\
		example strings, ints, doubles and arrays.  However to specify that the argument\n\
		is a pointer to a Softimage object you must set this argument to siDispatch and \n\
		the Value argument must be 0. (An easier approach is to use \n\
		<a href=\"#!/url=./si_om/ArgumentCollection.AddObjectArgument.html\">ArgumentCollection.AddObjectArgument</a> instead.)<br /><br />\n\
		If the argument is meant to receive a JScript object or JScript <a href=\"#!/url=./files/Array.htm\">Array</a>\n\
		then siDispatch must be specified, as shown in the example below.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siEmpty			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This is an advanced JScript example showing how to use the powerful jscript\n\
	class and array features in conjunction with Softimage Custom Commands.\n\
	When a jscript plugin becomes very large it can be necessary to split the \n\
	code into multiple self-installed plugin script files and to organize the\n\
	code into classes.  This example shows how you can pass JScript objects and \n\
	arrays back and forth between these files via Softimage Custom Commands.\n\
*/ \n\
var strCmdName = \"TestJScriptArgs\"\n\
var oCmd = Application.CreateCommand( strCmdName  )\n\
oCmd.ScriptingName = strCmdName  ;\n\
// For demonstration purposes this is an embedded command.\n\
// \n\
// We need to copy the implementation of JScriptClass as well as the implementation \n\
// of the command so that JSCmdImpl can instantiate this class as the return value\n\
oCmd.Code = JSCmdImpl.toString() \n\
		+ JScriptClass.toString()\n\
		+ JScriptClass_Foo.toString() ;\n\
oCmd.Handler = \"JSCmdImpl\" ;\n\
oCmd.Language = \"JScript\" ;\n\
// You cannot print out a jscript object or a jscript array.  This is ok because\n\
// printing out large arrays would slow down execution of your script.\n\
oCmd.SetFlag(siNoLogging) ; \n\
// It is critical to specify siDispatch, otherwise Softimage will attempt\n\
// to convert the jscript object into a SAFEARRAY\n\
oCmd.Arguments.Add( \"JSObjArg\", siArgumentInput, 0, siDispatch ) ;	\n\
// For normal custom command development this is the way to specify an array \n\
// argument.  But this means the array will be converted to a SAFEARRAY \n\
// (also called vbarray). This is important if you want your custom command\n\
// to be available to all other scripting languages and C++ API\n\
oCmd.Arguments.Add( \"JSArrayToVBArray\", siArgumentInput ) ;	\n\
// If you only want your custom command to be available from other jscript \n\
// code then you can get better speed by passing the JScript array \n\
// untouched by specifying siDispatch\n\
oCmd.Arguments.Add( \"JSArrayUnconverted\", siArgumentInput, 0, siDispatch ) ;\n\
Application.AddCommand( oCmd ) ;\n\
// Create some data to pass to the command\n\
var oObj = new JScriptClass( 12 ) ;\n\
var jsarray = new Array( \"A\", 89, 2.5, \"banana\" ) ;\n\
// Invoke the command (which calls JSCmdImpl)		\n\
var oRetVal = TestJScriptArgs(oObj,jsarray,jsarray) ;\n\
// Demonstrate that calling the command actually changed\n\
// MemberVar from 12 to 13\n\
logmessage( \"oObj.MemberVar = \" + oObj.MemberVar ) ;\n\
// Demonstrate that the command returned a jscript object\n\
logmessage( \"oRetVal.MemberVar = \" + oRetVal.MemberVar ) ;\n\
Application.RemoveCommand( strCmdName  ) ;\n\
// Simple jscript class\n\
function JScriptClass( in_x )\n\
{\n\
	// Remember the constructor argument\n\
	// as a member variable\n\
	this.MemberVar = in_x ;\n\
	// function\n\
	this.Foo = 	JScriptClass_Foo ;\n\
}\n\
// Function used as a method of JScriptClass\n\
function JScriptClass_Foo()\n\
{\n\
	return \"Foo called\" ;\n\
}\n\
// Custom command Implementation\n\
function JSCmdImpl(in_jscriptObj, in_vbarg, in_jsarg)\n\
{	\n\
	logmessage( \"JSCmdImpl called\" ); \n\
	// Demonstrate that we really have an instance of JScriptClass\n\
	logmessage( \"in_jscriptObj.MemberVar = \" + in_jscriptObj.MemberVar ) ;\n\
	logmessage( \"in_jscriptObj.Foo function = \" + in_jscriptObj.Foo() ) ;\n\
	// We can also change the content of the object passed to us\n\
	// and the caller will see the change.  This is an excellent\n\
	// way to share data between different script files	\n\
	in_jscriptObj.MemberVar = 13 ;\n\
	// For a safearray we need to convert it (back) to \n\
	// a JScript array.  This is our only choice\n\
	// if we want the command to be called from vbscript\n\
	backAsJS = new VBArray( in_vbarg ).toArray(); \n\
	logmessage( \"in_vbarg[2] = \" + backAsJS[2] ) ;\n\
	// Demonstrate that we really have a JScript array\n\
	logmessage( \"in_jsarg[3] = \" + in_jsarg[3] ) ;\n\
	// You can also return a JScript object\n\
	return new JScriptClass( 1000 ) ;\n\
}\n\
//Expected output:\n\
//INFO : JSCmdImpl called\n\
//INFO : in_jscriptObj.MemberVar = 12\n\
//INFO : in_jscriptObj.Foo function = Foo called\n\
//INFO : in_vbarg[2] = 2.5\n\
//INFO : in_jsarg[3] = banana\n\
//INFO : oObj.MemberVar = 13\n\
//INFO : oRetVal.MemberVar = 1000</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.CreateCommand.html\">XSIApplication.CreateCommand</a> <a href=\"#!/url=./si_om/Command.html\">Command</a> <a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a> <a href=\"#!/url=./si_om/ArgumentCollection.AddObjectArgument.html\">ArgumentCollection.AddObjectArgument</a> <a href=\"#!/url=./si_om/ArgumentCollection.AddWithHandler.html\">ArgumentCollection.AddWithHandler</a> <a href=\"#!/url=./si_om/Argument.html\">Argument</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";