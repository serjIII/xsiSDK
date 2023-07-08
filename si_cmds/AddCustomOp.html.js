var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddCustomOp</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>AddCustomOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddCustomOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.1</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates an instance of a Self-Installed Custom Operator and connects it to the specified \n\
inputs and outputs. \n\
<br /><br />\n\
This command is a convenient way to instantiate most self-installed custom operators,\n\
because it combines the functionality of calls to <a href=\"#!/url=./si_om/CustomOperator.AddInputPort.html\">CustomOperator.AddInputPort</a>,\n\
<a href=\"#!/url=./si_om/CustomOperator.AddOutputPort.html\">CustomOperator.AddOutputPort</a>, <a href=\"#!/url=./si_om/CustomOperator.AddIOPort.html\">CustomOperator.AddIOPort</a>,\n\
and <a href=\"#!/url=./si_om/Operator.Connect.html\">Operator.Connect</a> in a single command. \n\
<br /><br />\n\
The objects in the input and output lists must be the specific data that that the operator \n\
will read or write.  For example it is illegal to specify an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> as \n\
the input or output, but objects of type <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>, <a href=\"#!/url=./si_om/Property.html\">Property</a>, \n\
<a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>, <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> or <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> \n\
can all be valid connections. \n\
<br /><br />\n\
This command is only suitable for creating operators that are defined inside a self-installed \n\
plug-in.  To instantiate a Preset-based operator use <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a>.  To instantiate \n\
a runtime operator use <a href=\"#!/url=./si_cmds/AddScriptedOp.html\">AddScriptedOp</a>. \n\
<br /><br />\n\
This command creates all the connections by adding <a href=\"#!/url=./si_om/Port.html\">Port</a>s to a single \n\
<a href=\"#!/url=./si_om/PortGroup.html\">PortGroup</a> and assumes that all the objects to be connected to the operator \n\
already exist in the scene.  \n\
<br /><br />\n\
Note: To define a more dynamic operator that uses more than one PortGroup, it is necessary to use \n\
the more advanced methods on the <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a> object rather than this command.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AddCustomOp( Type, OutputObjs, [InputObjs], [Name], [ConstructionMode] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The newly created <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Name of the Self-Installed <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a> that implements the \n\
		<a href=\"#!/url=./si_om/Operator.html\">Operator</a>.  This command will fail if the plug-in is not installed.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OutputObjs		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">List</a>		</td>\n\
		<td>\n\
\n\
		The output connections for the operator.  If nothing is specified the current \n\
		<a href=\"#!/url=./si_om/Selection.html\">Selection</a> is used.  Most operators only connect to a single Output object.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">List</a>		</td>\n\
		<td>\n\
\n\
		The input connections for the operator.  If nothing is specified then the operator \n\
		will have no inputs.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\" (empty list)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The name of the new operator.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified the Type argument will be used to name the operator.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConstructionMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siConstructionMode.html\">siConstructionMode</a>		</td>\n\
		<td>\n\
\n\
		Specifies under which construction mode the operator will be applied. This \n\
		only applies to output connections made to <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a> objects, \n\
		the mode will be ignored for all other types of connections.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Use the current construction mode			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Create an operator called \"DemoOp\". The type of the operator is \"EmptyOp\", which \n\
	is a very basic operator that does nothing.\n\
	This operator reads from a Local transform of a Null and the Geometry of a Sphere \n\
	and outputs to the Global transform of another Null\n\
*/\n\
NewScene( null, false );\n\
var oOutput = ActiveSceneRoot.AddNull( \"Out\" ).Kinematics.Global ;\n\
var oInput1 = ActiveSceneRoot.AddNull( \"In1\" ).Kinematics.Local ;\n\
var oInput2 = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\", \"In2\" ).ActivePrimitive ;\n\
var oOp = AddCustomOp(\n\
				\"EmptyOp\", \n\
				oOutput, \n\
				[oInput1,oInput2], \n\
				\"DemoOp\" \n\
			) ;</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Create an operator called DemoParamOp that outputs to the PosX parameter of\n\
	the global transform of a null.\n\
	This operator is of type \"EmptyOp\" and it has no inputs so its only effect \n\
	is to force the value of the parameter to remain at 0.0\n\
*/\n\
NewScene( null, false );\n\
var oOutput = ActiveSceneRoot.AddNull( \"Out\" ).Kinematics.Global.Parameters( \"posx\" ) ;\n\
var oOp = AddCustomOp( \n\
				\"EmptyOp\", \n\
				oOutput, \n\
				null, \n\
				\"DemoParamOp\" \n\
			) ;</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Create an operator called DemoManyInputs that reads from the visibility \n\
	property of ten nulls and outputs to the geometry of a Grid. Because it \n\
	uses the EmptyOp operator, it does nothing.\n\
*/\n\
var oInputs = new ActiveXObject( \"XSI.Collection\" ) ;\n\
for ( var i = 0 ; i &lt; 10 ; i++ )\n\
{\n\
	var oNull = ActiveSceneRoot.AddNull( \"Input\" + i ) ;\n\
	oInputs.Add( oNull.Properties( \"Visibility\" ) ) ;\n\
}\n\
var oGrid = ActiveSceneRoot.AddGeometry( \"grid\", \"MeshSurface\", \"Output\" ) ;\n\
SelectObj( oGrid.ActivePrimitive ) ;\n\
AddCustomOp( \n\
		\"EmptyOp\",\n\
		null,			// Softimage will use the selection\n\
		oInputs, \n\
		\"DemoManyInputs\" 	) ;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">Parameter.AddCustomOp</a> <a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">ProjectItem.AddCustomOp</a> <a href=\"#!/url=./si_cmds/AddScriptedOp.html\">AddScriptedOp</a> <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a> <a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a> <a href=\"#!/url=./si_om/XSIFactory.CreateObject.html\">XSIFactory.CreateObject</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";