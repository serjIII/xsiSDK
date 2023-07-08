var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Color</title>\n\
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
            <h1>Color</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Color</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Color\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object represents an RGBA color.  The RBGA component values\n\
are stored as double precision numbers.\n\
<br /><br />\n\
Note: if a component value is greater than a signed, single-precision value, \n\
the component value is interpreted as a negative value. In most cases, the \n\
component values are normalized to the range 0 to 1. \n\
<a href=\"#!/url=./si_om/TrianglePoint.Color.html\">TrianglePoint.Color</a> is an exception, and returns values \n\
in the range 0 to 255.\n\
<br /><br />\n\
Other Softimage objects and properties store colors differently:\n\
<br /><br />\n\
- Shaders and Softimage objects have separate Parameter objects for each \n\
color component (for example, \"Scene_Material.Phong.diffuse.Green\").\n\
These component values are normalized and use double precision.\n\
<br /><br />\n\
- Vertex Color properties store color component values as arrays of \n\
doubles inside a ClusterProperty.\n\
<br /><br />\n\
- Wireframe colors are encoded as 10-bit values (0 to 1023), with the least\n\
significant bit ignored. Each of the R,G,B channels is 3 bits (a number from 0 to 7), \n\
and the wireframe color is encoded as B2|B1|B0|G2|G1|G0|R2|R1|R0|0|\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Color.Alpha.html\">Alpha</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Color.Blue.html\">Blue</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Color.Green.html\">Green</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Color.Red.html\">Red</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to create a tool for changing the\n\
	wireframe color of an object and how to map an RGB color to\n\
	a wireframe color.\n\
*/ \n\
CreateColorizeTool();\n\
function CreateColorizeTool()\n\
{\n\
	var color_tool = ActiveSceneRoot.Properties(\"ColorizeTool\");\n\
	if (!color_tool)\n\
	{\n\
		var color_tool = ActiveSceneRoot.AddCustomProperty( \"ColorizeTool\" );\n\
		var wirecolor = color_tool.AddParameter( \"wirecolor\", siInt4 );\n\
		wirecolor.ReadOnly = true;\n\
		var r = color_tool.AddParameter( \"R\", siDouble );\n\
		var g = color_tool.AddParameter( \"G\", siDouble );\n\
		var b = color_tool.AddParameter( \"B\", siDouble );\n\
		var a = color_tool.AddParameter( \"A\", siDouble );\n\
		var layout = color_tool.PPGLayout ;\n\
		layout.AddRow();\n\
		var item = layout.AddItem( \"wirecolor\", \"wirecolor\" );\n\
		item.SetAttribute( \"NoSlider\", true );\n\
		layout.AddButton( \"ColorizeObject\", \"Colorize object\" );\n\
		layout.EndRow();\n\
		layout.AddGroup( \"Color\" );\n\
		item = layout.AddColor( \"R\", \"\",true );\n\
		item.SetAttribute( \"NoLabel\", true );\n\
		layout.EndGroup();\n\
		layout.Language = \"JScript\" ;\n\
		layout.Logic = \n\
			ColorizeTool_R_OnChanged.toString() + \n\
			ColorizeTool_G_OnChanged.toString() + \n\
			ColorizeTool_B_OnChanged.toString() + \n\
			RGBToWireframeColor.toString() + \n\
			ColorizeTool_ColorizeObject_OnClicked.toString();\n\
		layout.SetAttribute( \"LogicPrefix\", \"ColorizeTool_\" ) ;\n\
	}\n\
	InspectObj( color_tool, \"Colorize Tool\", \"\", siLock ); \n\
}\n\
function ColorizeTool_R_OnChanged()\n\
{\n\
	PSet.wirecolor.ReadOnly = false;\n\
	PSet.wirecolor.Value = RGBToWireframeColor(PSet.R.Value,PSet.G.Value,PSet.B.Value);\n\
	PSet.wirecolor.ReadOnly = true;\n\
}\n\
function ColorizeTool_G_OnChanged()\n\
{\n\
	PSet.wirecolor.ReadOnly = false;\n\
	PSet.wirecolor.Value = RGBToWireframeColor(PSet.R.Value,PSet.G.Value,PSet.B.Value);\n\
	PSet.wirecolor.ReadOnly = true;\n\
}\n\
function ColorizeTool_B_OnChanged()\n\
{\n\
	PSet.wirecolor.ReadOnly = false;\n\
	PSet.wirecolor.Value = RGBToWireframeColor(PSet.R.Value,PSet.G.Value,PSet.B.Value);\n\
	PSet.wirecolor.ReadOnly = true;\n\
}\n\
function ColorizeTool_ColorizeObject_OnClicked()\n\
{\n\
	var color = PSet.wirecolor.Value;\n\
	var o = null;\n\
	var siRMB = 0;\n\
	var button = -1, modifier;\n\
	while ( o==null &amp;&amp; button != siRMB )\n\
	{\n\
		Application.StatusBar =\"Pick object to colorize\";\n\
		var rtn = PickObject( \"Select object\", \"\");\n\
		o = rtn.Value(\"PickedElement\");\n\
		button = rtn.Value(\"ButtonPressed\");\n\
		modifier = rtn.Value(\"ModifierPressed\");\n\
	}\n\
	if ( button == siRMB )\n\
		return;\n\
	var display = o.Properties(\"Display\");\n\
	if (display.isa(siSharedPSet))\n\
	{\n\
		display = MakeLocal( display, siNodePropagation )(0);\n\
	}\n\
	display.wirecol.Value = color;\n\
	return color;\n\
}\n\
// Convert wireframe color index to double-precision RGB color\n\
function WireframeColorToRGB(lWireframeColor)\n\
{\n\
	var aColor = new Array(3);\n\
	aColor[0] = ((lWireframeColor &gt;&gt;&gt; 1) &amp; 0x7)/7;\n\
	aColor[1] = ((lWireframeColor &gt;&gt;&gt; 4) &amp; 0x7)/7;\n\
	aColor[2] = ((lWireframeColor &gt;&gt;&gt; 7) &amp; 0x7)/7;\n\
	return aColor;\n\
}\n\
// Convert double-precision RGB color to wireframe color index\n\
function RGBToWireframeColor(dR,dG,dB)\n\
{\n\
	// Convert RGB to wirecolor\n\
	var wirecolR, wirecolG, wirecolB;\n\
	wirecolR = (Math.round(dR * 7)) &lt;&lt; 1\n\
	wirecolG = (Math.round(dG * 7)) &lt;&lt; 4\n\
	wirecolB = (Math.round(dB * 7)) &lt;&lt; 7\n\
	return wirecolR | wirecolG | wirecolB;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oSpot = GetValue(\"Scene_Root\").AddLightRig(\"Spot\").Light\n\
set oColor = oSpot.OGLLight.Color\n\
Application.LogMessage \"color: \" &amp; oColor.Red &amp; \", \" &amp; oColor.Green &amp; \", \" &amp; oColor.Blue &amp; \", \" &amp; oColor.Alpha</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ColorizeObject.html\">ColorizeObject</a> <a href=\"#!/url=./si_om/TrianglePoint.Color.html\">TrianglePoint.Color</a> <a href=\"#!/url=./si_om/Triangle.html\">Triangle</a> <a href=\"#!/url=./si_om/OGLLight.Color.html\">OGLLight.Color</a> <a href=\"#!/url=./si_om/OGLMaterial.html\">OGLMaterial</a> <a href=\"#!/url=./si_om/Light.html\">Light</a> <a href=\"#!/url=./si_om/Envelope.GetDeformerColor.html\">Envelope.GetDeformerColor</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";