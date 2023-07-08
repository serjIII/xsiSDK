var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry.GetBoundingBox</title>\n\
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
            <h1>Geometry.GetBoundingBox</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>.GetBoundingBox</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the center and extents of a bounding box of the Geometry object. If an input transform \n\
is specified, it is applied to the Geometry before the bounding box is calculated.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object Geometry.GetBoundingBox( Object in_pXfoObjectToBBoxSpace );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = Geometry.GetBoundingBox( [Transform] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p> 1-dimensional <a href=\"#!/url=./files/Array.htm\">Array</a> containing six values: the X, Y and Z coordinates of the\n\
center, followed by the extents of the bounding box in the (local) X, Y, and Z axes.\n\
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
		<td class=\"name\">Transform		</td>\n\
		<td><a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>		</td>\n\
		<td>\n\
Transform to be applied to the Geometry before the bounding box is calculated		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example using no input transform\n\
*/\n\
// Create and move (rotate and translate) a torus\n\
NewScene( null, false ) ;\n\
var oTorus = ActiveSceneRoot.AddGeometry( \"Torus\", \"MeshSurface\" ) ;\n\
SelectObj( oTorus ) ;\n\
Rotate(null, 45, 0, 0, siAbsolute, siPivot, siObj, siX, null, null, null, null, null, null, null, 0, null) ;\n\
Translate(null, 3, 2, 1, siAbsolute, siPivot, siObj, siX, null, null, null, null, null, null, null, null, null, 0, null) ;\n\
// Find the bounding box\n\
var vba = new VBArray( oTorus.ActivePrimitive.Geometry.GetBoundingBox() ) ;\n\
var jsa = vba.toArray() ;\n\
// Report the (local) center and extents\n\
Application.LogMessage( \"center:\"  + jsa[0] + \", \" + jsa[1] + \", \" + jsa[2] ) ;\n\
Application.LogMessage( \"extents:\" + jsa[3] + \", \" + jsa[4] + \", \" + jsa[5] ) ;</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Example using an input transform to preserve scaling\n\
//\n\
// Create and move (rotate and translate) a torus\n\
NewScene( null, false ) ;\n\
var oTorus = ActiveSceneRoot.AddGeometry( \"Torus\", \"MeshSurface\" ) ;\n\
SelectObj( oTorus ) ;\n\
Scale(null, 0.5, 0.5, 1, siAbsolute, siGlobal, siObj, siY, null, null, null, null, null, null, null, 0, null) ;\n\
oTransform = oTorus.Kinematics.Local.Transform ;\n\
// Find the bounding box\n\
var vba = new VBArray( oTorus.ActivePrimitive.Geometry.GetBoundingBox(oTransform) ) ;\n\
var jsa = vba.toArray() ;\n\
// Report the (local) center and extents\n\
Application.LogMessage( \"center:\" + jsa[0] + \", \" + jsa[1] + \", \" + jsa[2] ) ;\n\
Application.LogMessage( \"extents:\" + jsa[3] + \", \" + jsa[4] + \", \" + jsa[5] ) ;\n\
// Build a cube that shows the bounding box\n\
var oCube = ActiveSceneRoot.AddPrimitive(\"Cube\") ;\n\
oCube.length = 1 ;\n\
oCube.PosX = jsa[0] ;\n\
oCube.PosY = jsa[1] ;\n\
oCube.PosZ = jsa[2] ;\n\
oCube.sclx = jsa[3] ;\n\
oCube.scly = jsa[4] ;\n\
oCube.sclz = jsa[5] ;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Geometry.GetBoundingSphere.html\">Geometry.GetBoundingSphere</a> <a href=\"#!/url=./si_om/Geometry.GetBoundingCapsule.html\">Geometry.GetBoundingCapsule</a> <a href=\"#!/url=./si_om/X3DObject.GetBoundingBox.html\">X3DObject.GetBoundingBox</a> <a href=\"#!/url=./si_cmds/GetBBox.html\">GetBBox</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";