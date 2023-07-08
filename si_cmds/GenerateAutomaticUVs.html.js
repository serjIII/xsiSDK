var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GenerateAutomaticUVs</title>\n\
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
            <h1>GenerateAutomaticUVs</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GenerateAutomaticUVs</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Generates a UV texture coordinate cluster property from the specified generator operator. Only \n\
operators that generate mesh or NURBS geometry from input curves are supported \n\
(Birail, \n\
CrvNet, \n\
ExtrusionAlongAxis,\n\
Extrusion, \n\
ExtrusionTwoProfiles,\n\
FourSided, \n\
Loft,\n\
RevolutionAlongAxis, and \n\
Revolution).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = GenerateAutomaticUVs( Operator, Object, [ClusterPropertyName] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the newly created UV texture coordinate <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Operator		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Specifies the generator operator from which to create the UV texture coordinates. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Object		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Specifies the object to which the new UV cluster property will be added.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ClusterPropertyName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Specifies the name of the new UV texture coordinate cluster property. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\" (use Softimage\'s naming heuristic)			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to generate a NURBS object from curves via the Extrusion operator\n\
\'	and then use that operator to generate UV texture coordinates for the new surface mesh. For a\n\
\'	JScript version, see the next example.\n\
\'\n\
Dim l_GeneratedUVs\n\
Dim l_AlreadyGeneratedUVs\n\
NewScene ,false\n\
\' Create curve objects that will be used to create surfaces.\n\
CreatePrim \"Circle\", \"NurbsCurve\" \n\
SetValue \"circle.circle.radius\", 1\n\
SICreateCurve \"crvlist\", 3, 1\n\
SIAddPointOnCurveAtEnd \"crvlist\", 0, 0, -3, False, 1\n\
SIAddPointOnCurveAtEnd \"crvlist\", 0, 0, -13, False, 1\n\
SIAddPointOnCurveAtEnd \"crvlist\", 8, 0, -13, False, 1\n\
SIAddPointOnCurveAtEnd \"crvlist\", 8, 0, -3, False, 1\n\
\' Generate a mesh surface from the curves.\n\
ApplyGenOp \"Extrusion\", \"MeshSurface\", \"circle;crvlist\", 3, siPersistentOperation, siKeepGenOpInputs\n\
SetValue \"polymsh.polymsh.extrusion.subdivvperspan\", 5\n\
\' Put a material on the generated surface\n\
ApplyShader , , , , siLetLocalMaterialsOverlap\n\
SIApplyShaderToCnxPoint \"Image\", \"Sources.Materials.DefaultLib.Material.Phong.diffuse\"\n\
\' Generate automatic UVs.\n\
set l_GeneratedUVs = GenerateAutomaticUVs( \"polymsh.polymsh.extrusion\", \"polymsh\", \"AutoUVTxtCoords\")\n\
\' Log name of UV texture coordinate cluster property\n\
Application.LogMessage \"Automatic Generation of UV Texture Coordinates returns the generated cluster property.\"\n\
Application.LogMessage \"Generated UV Texture Coordinate Cluster Property: \" &amp; l_GeneratedUVs.FullName\n\
\' Trying to regenerate again will log a warning message and the already existing \n\
\' UV texture coordinate cluster property will be returned.\n\
\' Generate automatic UVs.\n\
Application.LogMessage \"Regeneration of UV Texture Coordinates generates a warning and the already generated cluster property is returned.\"\n\
set l_AlreadyGeneratedUVs = GenerateAutomaticUVs( \"polymsh.polymsh.extrusion\", \"polymsh\", \"AutoUVTxtCoords\")\n\
\'Log name of UV texture coordinate cluster property\n\
Application.LogMessage \"Already Generated UV Texture Coordinate Cluster Property: \" &amp;l_AlreadyGeneratedUVs.FullName\n\
\'Logged information and warning by this example.\n\
\'INFO : Automatic Generation of UV Texture Coordinates returns the generated cluster property.\"\n\
\'INFO : Generated UV Texture Coordinate Cluster Property: polymsh.polymsh.cls.AutomaticSamples.AutoUVTxtCoords\n\
\'INFO : Regeneration of UV Texture Coordinates generates a warning and the already generated cluster property is returned.\n\
\'WARNING : 3000-MODE-GenerateAutomaticUVs - Returning already generated UV texture coordinate cluster property. None re-generated.\n\
\'INFO : Already Generated UV Texture Coordinate Cluster Property: polymsh.polymsh.cls.AutomaticSamples.AutoUVTxtCoords\n\
\' View results.  \n\
SetDisplayMode \"Camera\", \"texturedecal\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to generate a NURBS object from curves via the Extrusion operator\n\
	and then use that operator to generate UV texture coordinates for the new surface mesh. This\n\
	example is similar to the VBScript version above, except that it uses the object model \n\
	instead of scripting commands.\n\
*/\n\
var l_GeneratedUVs;\n\
var l_AlreadyGeneratedUVs;\n\
NewScene( null, false );\n\
// Create curve objects that will be used to create surfaces.\n\
var oCrv = ActiveSceneRoot.AddGeometry( \"Circle\", \"NurbsCurve\" );\n\
oCrv.radius = 1;\n\
var pnts = new Array( 0,0,-3,1, 0,0,-3,1, 0,0,-3,1, 0,0,-3,1, 0,0,-6.333333333333333,1,\n\
	0,0,-9.666666666666666,1, 0,0,-13,1, 2.6666666666666665,0,-13,1, 5.333333333333333,0,-13,1, \n\
	8,0,-13,1, 8,0,-9.666666666666667,1, 8,0,-6.333333333333334,1, 8,0,-3,1 );\n\
var oCrvlist = ActiveSceneRoot.AddNurbsCurve( pnts );\n\
// // Generate a mesh surface from the curves.\n\
var oGenOp = ApplyGenOp( \"Extrusion\", \"MeshSurface\", oCrv + \";\" + oCrvlist, 3, siPersistentOperation, siKeepGenOpInputs )(0);\n\
var oNewMesh = oGenOp.OutputPorts(0).Target2.Parent3DObject;\n\
oGenOp.subdivvperspan = 5;\n\
// Put a material on the generated surface\n\
ApplyShader( null, null, null, null, siLetLocalMaterialsOverlap );\n\
SIApplyShaderToCnxPoint( \"Image\", \"Sources.Materials.DefaultLib.Material.Phong.diffuse\" );\n\
// Generate automatic UVs.\n\
l_GeneratedUVs = GenerateAutomaticUVs( oGenOp, oNewMesh, \"AutoUVTxtCoords\");\n\
// Log name of UV texture coordinate cluster property\n\
Application.LogMessage( \"Automatic Generation of UV Texture Coordinates returns the generated cluster property.\" );\n\
Application.LogMessage( \"Generated UV Texture Coordinate Cluster Property: \" + l_GeneratedUVs.fullname );\n\
// Trying to regenerate again will log a warning message and the already existing \n\
// UV texture coordinate cluster property will be returned.\n\
// Generate automatic UVs.\n\
Application.LogMessage( \"Regeneration of UV Texture Coordinates generates a warning and the already generated cluster property is returned.\" );\n\
l_AlreadyGeneratedUVs = GenerateAutomaticUVs( oGenOp, oNewMesh, \"AutoUVTxtCoords\");\n\
// Log name of UV texture coordinate cluster property\n\
Application.LogMessage( \"Already Generated UV Texture Coordinate Cluster Property: \" + l_AlreadyGeneratedUVs.fullname );\n\
// Logged information and warning by this example.\n\
//INFO : Automatic Generation of UV Texture Coordinates returns the generated cluster property.\"\n\
//INFO : Generated UV Texture Coordinate Cluster Property: polymsh.polymsh.cls.AutomaticSamples.AutoUVTxtCoords\n\
//INFO : Regeneration of UV Texture Coordinates generates a warning and the already generated cluster property is returned.\n\
//WARNING : 3000-MODE-GenerateAutomaticUVs - Returning already generated UV texture coordinate cluster property. None re-generated.\n\
//INFO : Already Generated UV Texture Coordinate Cluster Property: polymsh.polymsh.cls.AutomaticSamples.AutoUVTxtCoords\n\
// View results.  \n\
SetDisplayMode( \"Camera\", \"texturedecal\" );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyGenOp.html\">ApplyGenOp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";