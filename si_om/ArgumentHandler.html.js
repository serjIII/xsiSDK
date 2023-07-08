var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ArgumentHandler</title>\n\
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
            <h1>ArgumentHandler</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ArgumentHandler</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ArgumentHandler\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ArgumentHandler.html\">ArgumentHandler</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">ArgumentHandler</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> An argument handler is an object that helps determine the\n\
value that is passed to a command.  Argument handlers\n\
come into play when a command is invoked without providing a explicit value\n\
for an argument, or when the argument that was provided requires some\n\
processing before it can be sent to the command.  For example the\n\
\"Collection\" argument handler can turn a string-based list of objects\n\
into a <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> representing those objects.<br /><br />\n\
Argument handlers are widely used on built-in commands, and can be specified \n\
for custom commands (see <a href=\"#!/url=./si_om/ArgumentCollection.AddWithHandler.html\">ArgumentCollection.AddWithHandler</a>).\n\
They make it easier to implement flexible custom commands, and reduce the amount \n\
of error handling necessary inside the command implementation.<br /><br />\n\
Once specified as part of the command definition they act behind the scenes during the\n\
process of the command invocation.  Neither the caller nor the implementation need to \n\
explicitly manipulate ArgumentHandler objects.<br /><br />\n\
Note: Internally the state of an argument handler is stored in the value of \n\
the argument. For this reason a call to <a href=\"#!/url=./si_om/Argument.Handler.html\">Argument.Handler</a> clears \n\
any existing <a href=\"#!/url=./si_om/Argument.Value.html\">Argument.Value</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//Jscript example demonstrating how to use the Argument Handlers.\n\
//It also shows how the implementation of Custom Command can\n\
//be embedded directly inside the definition.\n\
RemoveCommands() ;\n\
InstallCommands() ;	\n\
DemoCommands() ;\n\
function DemoCommands()\n\
{\n\
	// First set up a little scenario to\n\
	// show how the arg handlers will react\n\
	newscene(null,false) ;\n\
	var oGrid1 = ActiveSceneRoot.AddGeometry( \"Grid\",\"MeshSurface\",\"G1\" ) ;\n\
	var oGrid2 = ActiveSceneRoot.AddGeometry( \"Grid\",\"MeshSurface\",\"G2\" ) ;\n\
	var oGrid3 = ActiveSceneRoot.AddGeometry( \"Grid\",\"MeshSurface\",\"G3\" ) ;\n\
	SelectObj( oGrid1 ) ;\n\
	/////////////////////////////////////////////////////////////\n\
	// Collection Arg Handler\n\
	/////////////////////////////////////////////////////////////\n\
	//If we provide no argument then the current selection\n\
	//is passed as the argument:\n\
	DemoCollectionArgHandler() ;\n\
	//Result:\n\
	//INFO : \"DemoCollectionArgHandler called with 1 items\"\n\
	//INFO : \"		Item 0 : G1\"\n\
	// Also very useful for turning string names of objects into\n\
	// an XSICollection\n\
	DemoCollectionArgHandler( \"G1,G2\" );\n\
	//Result:\n\
	// \"DemoCollectionArgHandler called with 2 items\"\n\
	// \"		Item 0 : G1\"\n\
	// \"		Item 1 : G2\"\n\
	/////////////////////////////////////////////////////////////\n\
	// SingleObj Arg Handler\n\
	/////////////////////////////////////////////////////////////\n\
	// The SingleObj arg handler is very\n\
	// useful for converting from\n\
	// a string to a object.  This is widely\n\
	// used in Softimage internal commands\n\
	DemoSingleObjArgHandler( \"G1\" ) ;\n\
	//Result: \"DemoSingleObjArgHandler called with G1(Type: polymsh)\"\n\
	// Of course if you already have the object pointer it\n\
	// is identical to the above call, but even faster to do this:\n\
	// In this case the arg handler has nothing to do:\n\
	DemoSingleObjArgHandler( oGrid1 ) ;\n\
	//Result: \"DemoSingleObjArgHandler called with G1(Type: polymsh)\"\n\
	/////////////////////////////////////////////////////////////\n\
	// FrameRate Arg Handler\n\
	/////////////////////////////////////////////////////////////\n\
	// Change the current framerate to film (24fps)\n\
	SetValue(\"PlayControl.Format\", 7, null);\n\
	DemoFrameRateArgHandler() ;\n\
	//Result : \"DemoFrameRateArgHandler called with 24\"\n\
	// If you call with an specific value then\n\
	// the ArgHandler does nothing\n\
	DemoFrameRateArgHandler( 12.5 ) ;\n\
	//Result : \"DemoFrameRateArgHandler called with 12.5\"\n\
	/////////////////////////////////////////////////////////////\n\
	// Frame Arg Handler\n\
	/////////////////////////////////////////////////////////////\n\
	SetValue(\"PlayControl.Current\", 33, null);\n\
	// This arghandler is very useful for commands\n\
	// that normally operate on the current frame\n\
	// but which could also be used to process a different\n\
	// frame.\n\
	//\n\
	// By default the current frame is passed as the argument\n\
	DemoFrameArgHandler() ;\n\
	//Result : \"DemoFrameArgHandler called with 33\"\n\
	// but the user can override\n\
	DemoFrameArgHandler( 99 ) ;\n\
	/////////////////////////////////////////////////////////////\n\
	// MarkedParameters ArgHandler\n\
	/////////////////////////////////////////////////////////////\n\
	// This handler is very useful for collecting information\n\
	// about which parameters have been marked on the currently\n\
	// Selected objects\n\
	//\n\
	// Select the name and subdivu parameters on all three grids\n\
	SelectObj( oGrid1 ) ;\n\
	AddToSelection( oGrid2 ) ;\n\
	AddToSelection( oGrid3 ) ;\n\
	SetMarking( \"Name\" ) ;\n\
	AddToMarking( \"polymsh.geom.subdivu\" ) ;\n\
	// Remove G2 from the list, to demonstrate that even though\n\
	// it also has marked parameters these are not passed in\n\
	RemoveFromSelection( oGrid2 ) ;\n\
	DemoMarkedParametersArgHandler() ;\n\
	//Results:\n\
	// \"		Item 0 : G1.Name\"\n\
	// \"		Item 1 : G1.polymsh.geom.subdivu\"\n\
	// \"		Item 2 : G3.Name\"\n\
	// \"		Item 3 : G3.polymsh.geom.subdivu\"\n\
	//and the command is logged in the history like this:\n\
	//DemoMarkedParametersArgHandler(\"G1.Name,G1.polymsh.geom.subdivu,G3.Name,G3.polymsh.geom.subdivu\");\n\
	// You can also pass the marked parameters as a string.\n\
	var bigMarkingString = \"G1.Name,\" +\n\
						  \"G1.polymsh.geom.subdivu,\" +\n\
						  \"G2.Name,\" +\n\
						  \"G2.polymsh.geom.subdivu,\" +\n\
						  \"G3.Name,\" +\n\
						  \"G3.polymsh.geom.subdivu\"		\n\
	DemoMarkedParametersArgHandler(bigMarkingString);	\n\
	// There is a short form using the \"/\" character\n\
	// which is equivalent to the previous call:\n\
	DemoMarkedParametersArgHandler(\"G1,G2,G3/name,polymsh.geom.subdivu\");\n\
	//Results:	\n\
	// \"DemoMarkedParametersArgHandler called with 6 items\"\n\
	// \"		Item 0 : G1.Name\"\n\
	// \"		Item 1 : G1.polymsh.geom.subdivu\"\n\
	// \"		Item 2 : G2.Name\"\n\
	// \"		Item 3 : G2.polymsh.geom.subdivu\"\n\
	// \"		Item 4 : G3.Name\"\n\
	// \"		Item 5 : G3.polymsh.geom.subdivu\"\n\
	/////////////////////////////////////////////////////////////\n\
	// MarkedParameters ArgHandler\n\
	/////////////////////////////////////////////////////////////\n\
	// This handler is almost exactly the same as the \n\
	// MarkedParameter arg handler, except that it\n\
	// will strip out the non-animatable parameters\n\
	// that have been marked.  In this case it doesn\'t\n\
	// pass the \"G1.Name\" and \"G3.Name\" parameters that have been\n\
	// marked\n\
	DemoAnimatableParametersArgHandler() ;	\n\
	//Results:	\n\
	// \"DemoMarkedParametersArgHandler called with 2 items\"\n\
	// \"		Item 0 : G1.polymsh.geom.subdivu\"\n\
	// \"		Item 1 : G3.polymsh.geom.subdivu\"\n\
	//You can also pass a string and the same sort of \n\
	//shortcut works:\n\
	DemoAnimatableParametersArgHandler(\"G1.polymsh.geom/subdivu,subdivv\") ;	\n\
	//Results:	\n\
	// \"DemoMarkedParametersArgHandler called with 2 items\"\n\
	// \"		Item 0 : G1.polymsh.geom.subdivu\"\n\
	// \"		Item 1 : G1.polymsh.geom.subdivv\"\n\
}\n\
function RemoveCommands()\n\
{\n\
	Application.RemoveCommand( \"DemoCollectionArgHandler\" ) ;\n\
	Application.RemoveCommand( \"DemoSingleObjArgHandler\" ) ;\n\
	Application.RemoveCommand( \"DemoFrameRateArgHandler\" ) ;\n\
	Application.RemoveCommand( \"DemoFrameArgHandler\" ) ;\n\
	Application.RemoveCommand( \"DemoMarkedParametersArgHandler\" ) ;\n\
	Application.RemoveCommand( \"DemoAnimatableParametersArgHandler\" ) ;\n\
}\n\
function InstallCommands()\n\
{\n\
	InstallArgDemoCommand( \n\
		\"DemoCollectionArgHandler\", \n\
		\"Collection\",\n\
		OnDemoCollectionArgHandler.toString() ) ;\n\
	InstallArgDemoCommand( \n\
		\"DemoSingleObjArgHandler\", \n\
		\"SingleObj\",\n\
		OnDemoSingleObjArgHandler.toString() ) ;\n\
	InstallArgDemoCommand( \n\
		\"DemoFrameRateArgHandler\", \n\
		\"FrameRate\",\n\
		OnDemoFrameRateArgHandler.toString() ) ;\n\
	InstallArgDemoCommand( \n\
		\"DemoFrameArgHandler\", \n\
		\"Frame\",\n\
		OnDemoFrameArgHandler.toString() ) ;\n\
	InstallArgDemoCommand( \n\
		\"DemoMarkedParametersArgHandler\", \n\
		\"MarkedParameters\",\n\
		OnDemoMarkedParametersArgHandler.toString() ) ;\n\
	InstallArgDemoCommand( \n\
		\"DemoAnimatableParametersArgHandler\", \n\
		\"AnimatableParameters\",\n\
		OnDemoAnimatableParametersArgHandler.toString() ) ;\n\
}\n\
function InstallArgDemoCommand( in_Name, in_ArgHandlerName, in_Code )\n\
{\n\
	var oCmd = Application.CreateCommand( in_Name ) ;\n\
	// Same as ScriptName\n\
	oCmd.ScriptingName = in_Name ;	\n\
	// Same of the routine to call inside the \"in_Code\" argument\n\
	// We use a naming scheme based on command name\n\
	oCmd.Handler = \"On\" + in_Name ; \n\
	// Embed the code rather than referring to file\n\
	oCmd.Code = in_Code ;		\n\
	oCmd.Language = \"JScript\" ;\n\
	oCmd.ReturnValue = true ;\n\
	oCmd.Arguments.AddWithHandler( \"Arg\", in_ArgHandlerName ) ;\n\
	Application.AddCommand( oCmd ) ;\n\
}\n\
//\n\
// Command implementations\n\
//\n\
function OnDemoCollectionArgHandler( in_arg )\n\
{\n\
	// We recieve a Selection object or an\n\
	// XSICollection.  In either case we use the Count and Item\n\
	// properties to access the items.\n\
	Logmessage( \"DemoCollectionArgHandler called with \" + in_arg.Count + \" items\" ) ;\n\
	for ( i = 0 ; i &lt; in_arg.Count ; i++ )\n\
	{\n\
		Logmessage( \"\\t\\tItem \" + i + \" : \" + in_arg.Item(i).FullName ) ;\n\
	}\n\
	return in_arg ;\n\
}\n\
function OnDemoSingleObjArgHandler( in_arg )\n\
{\n\
	Logmessage( \"DemoSingleObjArgHandler called with \" + in_arg.Name + \n\
				\"(Type: \" + in_arg.Type + \")\" ) ;\n\
	return in_arg ;\n\
}\n\
function OnDemoFrameRateArgHandler( in_arg )\n\
{\n\
	// Unless the user calls with a specific value for the argument\n\
	// we get the current frame rate\n\
	Logmessage( \"DemoFrameRateArgHandler called with \" + in_arg ) ;\n\
	return in_arg ;\n\
}\n\
function OnDemoFrameArgHandler( in_arg )\n\
{\n\
	// Unless the user calls with a specific value for the argument\n\
	// we get the current frame rate\n\
	Logmessage( \"DemoFrameArgHandler called with \" + in_arg ) ;\n\
	return in_arg ;\n\
}\n\
function OnDemoMarkedParametersArgHandler( in_arg )\n\
{\n\
	// We recieve a XSICollection with the Marked parameters \n\
	// on the selected objects\n\
	Logmessage( \"DemoMarkedParametersArgHandler called with \" + in_arg.Count + \" items\" ) ;\n\
	for ( i = 0 ; i &lt; in_arg.Count ; i++ )\n\
	{\n\
		Logmessage( \"\\t\\tItem \" + i + \" : \" + in_arg.Item(i).FullName ) ;\n\
	}\n\
	return in_arg ;\n\
}\n\
function OnDemoAnimatableParametersArgHandler( in_arg )\n\
{\n\
	// We recieve a XSICollection with the Animatable Marked parameters \n\
	// on the selected objects\n\
	Logmessage( \"DemoMarkedParametersArgHandler called with \" + in_arg.Count + \" items\" ) ;\n\
	for ( i = 0 ; i &lt; in_arg.Count ; i++ )\n\
	{\n\
		Logmessage( \"\\t\\tItem \" + i + \" : \" + in_arg.Item(i).FullName ) ;\n\
	}\n\
	return in_arg ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Command.html\">Command</a> <a href=\"#!/url=./si_om/Argument.html\">Argument</a> <a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";