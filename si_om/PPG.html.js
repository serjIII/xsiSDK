var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPG</title>\n\
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
            <h1>PPG</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PPG</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_PPG\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1PPGEventContext.html\">PPGEventContext</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Represents an instance of a Property Page.  This object can be manipulated within\n\
the event handling script code associated with a <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.\n\
(This event handling code is often called \"SPDL logic\" because in previous versions\n\
it could only be specified by putting script code directly in a spdl file.)  \n\
This object is available\n\
to logic code as a global variable called \"PPG\".  (For the purposes of \n\
backward compatibility it is also available via the global variable \"PSet\".\n\
It is also for reasons of backward compatibility that this\n\
object does not derive from <a href=\"#!/url=./si_om/Context.html\">Context</a> and \n\
is available as a global variable rather than being passed as an argument\n\
to the callback routines).<br /><br />\n\
There are two ways a Property Page can inspect multiple objects.\n\
In the first case, where the objects are of different types, there\n\
will actually be separate Property Page objects displayed within the \n\
same frame.  In the second case, where the objects have the same type,\n\
multi-edit mode is used and a single instance of the PPG object may\n\
actually represent multiple objects.  This is why the property\n\
<a href=\"#!/url=./si_om/PPG.Inspected.html\">PPG.Inspected</a> returns an array rather than a single object.<br /><br />\n\
This object provides shortcuts for direct access to the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>s \n\
of the inspected object.  For example, if a Property Page has a parameter named \n\
x then \"PPG.x.Value = 10\" is the VBScript code to change the value.\n\
In the case of multi-edit mode, this technique will only modify the first inspected\n\
object.<br /><br />\n\
Note: The equivalent object in the C++ API is called PPGEventContext.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPG.Close.html\">Close</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPG.Refresh.html\">Refresh</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPG.CurrentTab.html\">CurrentTab</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPG.Inspected.html\">Inspected</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPG.InspectedObjects.html\">InspectedObjects</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPG.PPGLayout.html\">PPGLayout</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to build an extremely dynamic Custom Property using \n\
	the PPG object. It appears in two parts: \n\
	 * PART ONE writes the implementation to disk, loads it in Softimage, and\n\
	   then displays the property editor.\n\
	 * PART TWO is the code that implements the custom property\n\
	Not only does the layout change but the actual underlying parameters are \n\
	rebuilt each time the Property Page is shown.\n\
	Once this plugin is installed you can apply an instance of the custom \n\
	property via the Property Menu on the left side of the screen.  Then \n\
	each time you inspect the custom property it will regenerate its UI \n\
	so that there is a check box for each X3DObject parented under the scene \n\
	root.  You can pick which ones to select and then click apply.\n\
	Normally a feature like this would probably be implemented as a custom \n\
	command that pops up a temporary, modal custom property which is deleted \n\
	after the fact.  However for the purpose of this example the custom \n\
	property remains in the scene for use whenever the user wants to change \n\
	selection.\n\
	(This example was implemented by using the Custom Property wizard to \n\
	generate the initial plugin and then editing the code to add the dynamic \n\
	behavior)\n\
*/\n\
NewScene( null, false );\n\
// ------------------------------------------------------------\n\
//\n\
//		PART ONE: Save Implementation to Disk and Open PPG\n\
//\n\
var filename = XSIUtils.BuildPath( Application.InstallationPath(siUserPath), \n\
	\"Application\", \"Plugins\", \"DynParamDemo.js\" );\n\
// Write the contents of the Implementation functions below to DynParamDemo.js\n\
var fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
var ts = fso.CreateTextFile( filename, true );\n\
ts.Write( XSILoadPlugin.toString() + \"\\n\\n\" );\n\
ts.Write( DynParamDemo_Define.toString() + \"\\n\\n\" );\n\
ts.Write( DynParamDemo_DefineLayout.toString() + \"\\n\\n\" );\n\
ts.Write( DynParamDemo_OnInit.toString() + \"\\n\\n\" );\n\
ts.Write( DynParamDemo_Apply_OnClicked.toString() );\n\
ts.Close();\n\
// Load the plugin \n\
Application.LoadPlugin( filename );\n\
// Instantiate the custom property and display its property page\n\
var oCustomProperty = Application.ActiveSceneRoot.AddProperty( \"DynParamDemo\" );\n\
InspectObj( oCustomProperty );\n\
// ------------------------------------------------------------\n\
//\n\
//		PART TWO: PPG Implementation\n\
//\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage\";\n\
	in_reg.Name = \"DynParamDemoPlugin\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 1;\n\
	in_reg.RegisterProperty( \"DynParamDemo\" );\n\
	return true;\n\
}\n\
function DynParamDemo_Define( io_Context )\n\
{\n\
	// No parameters are added here because we want the\n\
	// data to be dynamic, see DynParamDemo_OnInit\n\
}\n\
function DynParamDemo_DefineLayout( io_Context )\n\
{\n\
	// Do nothing here because we want a dynamic layout.\n\
	// The work is done inside DynParamDemo_OnInit instead.\n\
}\n\
function DynParamDemo_OnInit()\n\
{\n\
	// This example doesn\'t make sense in the case\n\
	// of selection of more than one instance of the custom\n\
	// property at a time, so we only look at the first inspected\n\
	var oCustomProperty = PPG.Inspected.Item(0);\n\
	// Remove any existing parameters\n\
	for ( var i=oCustomProperty.Parameters.Count-1; i&gt;=0; i-- ) {\n\
		oCustomProperty.RemoveParameter( oCustomProperty.Parameters.Item(i) );\n\
	}\n\
	var oLayout = PPG.PPGLayout;\n\
	oLayout.Clear();\n\
	var oSceneChildren = Application.ActiveSceneRoot.Children; \n\
	for ( var j=0; j&lt;oSceneChildren.Count; j++ ) {\n\
		var oChild = oSceneChildren.Item(j);\n\
		// Add a boolean parameter to represent this object\n\
		oCustomProperty.AddParameter2( oChild.Name, siBool, false,\n\
				null, null, null, null, 0, siPersistable );\n\
		// Put this in the layout\n\
		oLayout.AddItem( oChild.Name, \"Select \" + oChild.Name );		\n\
	}\n\
	oLayout.AddButton( \"Apply\" );\n\
	PPG.Refresh();\n\
}\n\
function DynParamDemo_Apply_OnClicked()\n\
{\n\
	DeselectAll(); // Call Softimage Command\n\
	var oCustomProperty = PPG.Inspected.Item(0);\n\
	for ( var j=0; j&lt;oCustomProperty.Parameters.Count; j++ ) {\n\
		var oParam = oCustomProperty.Parameters.Item(j);\n\
		if ( oParam.Value == true ) {\n\
			// We used a naming sceme for the parameters that matches the object	\n\
			AddToSelection( oParam.Name );	// Call Softimage Command\n\
		}\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a> <a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> <a href=\"#!/url=./si_om/Context.html\">Context</a> <a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Property Host Callbacks</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";