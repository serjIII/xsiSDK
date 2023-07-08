var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Operator.Port</title>\n\
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
            <h1>Operator.Port</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Operator.html\">Operator</a>.Port <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Finds and returns the specified <a href=\"#!/url=./si_om/Port.html\">Port</a> object for the operator. PortGroup \n\
and PortGroupInstance (index) arguments are ignored for scripted operators created using \n\
the scripted operator editor (also known as runtime scripted operators). For all other \n\
types of operators if PortGroup and PortGroupInstance are not specified, the first port \n\
found with the given Name is returned.\n\
<br /><br />\n\
Note: Python does not support input parameters on properties, so this property will fail \n\
in Python. Use the <a href=\"#!/url=./si_om/Operator.GetPort2.html\">Operator.GetPort2</a> method instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Port Operator.get_Port( String in_bstrPort, String in_bstrPortGroup, Int32 in_lPortGroupInstance );</pre>		</td>	</tr>\n\
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
 Name of a port		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PortGroup		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of a port group.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\" (empty string)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PortGroupInstance		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
\n\
		The port group instance index. This argument does not apply to runtime operators. \n\
		If you don\'t provide a port group this argument is ignored. \n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	The following code illustrates how to get the port from an operator if\n\
	you know its name. \n\
*/\n\
NewScene( null, false );\n\
var oObject = ActiveSceneRoot.AddGeometry(\"Sphere\",\"MeshSurface\");\n\
apply_deform( oObject );\n\
var oDeformOperator = oObject.ActivePrimitive.ConstructionHistory.Find( \"MyDeform\" );\n\
var oPort = oDeformOperator.Port(\"InGeom\",\"MainGroup\",0);\n\
var oInputGeometry = oPort.Target2;\n\
Application.LogMessage( oDeformOperator.Name + \" is reading from the \" + oInputGeometry.FullName );\n\
function apply_deform( oObject )\n\
{\n\
	var op = XSIFactory.CreateScriptedOp( \"MyDeform\", MyDeform_Update.toString(), \"JScript\" );\n\
	// Define connections\n\
	var group = op.AddPortGroup( \"MainGroup\" );\n\
	var ioport = op.AddIOPort( oObject.ActivePrimitive, \"Geom\", group.Index );\n\
	// Define parameters\n\
	var pdef = XSIFactory.CreateParamDef2( \"Factor\", siDouble, 0.5, 0, 1 );\n\
	op.addparameter(pdef);\n\
	// Connect operator\n\
	op.Connect(oObject);\n\
}\n\
function MyDeform_Update( ctx, out, InGeom )\n\
{\n\
	// Get the factor.\n\
	var dFactor = ctx.Parameters(\"Factor\").Value\n\
	// Get the array of point positions.\n\
	var aPnts = InGeom.Value.Geometry.Points.PositionArray.toArray();\n\
	// Deform geometry\n\
	// Update the object//s point positions.\n\
	out.Value.Geometry.Points.PositionArray = aPnts;\n\
	return;\n\
}\n\
//</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Operator.GetPort2.html\">Operator.GetPort2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";