var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.HasInstanceValue</title>\n\
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
            <h1>Parameter.HasInstanceValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.HasInstanceValue</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> value indicating whether the parameter is an instance \n\
value (true) or not (false). An instance parameter is a parameter belonging to an object \n\
that can be shared but which can have a unique value for each place that it is shared. \n\
<br /><br />\n\
Instance values include: ImageShader.tspace_id, Material.ImageClipName, Material.UV, \n\
Material.CAV. For example, the material is owned by the <a href=\"#!/url=./si_om/MaterialLibrary.html\">MaterialLibrary</a> \n\
but may be used by many objects. Each object may have a unique value for the \n\
ImageShader.tspace_id parameter.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = Parameter.HasInstanceValue;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to detect all parameters that support instance values \n\
	and determine which parameters are currently in use based on the usage of the material.\n\
	Parameters with instances values include: ImageShader.tspace_id, Material.ImageClipName, \n\
	Material.UV, Material.CAV.\n\
*/\n\
NewScene( null, false );\n\
// Create an object with its own material\n\
var cube = Application.ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\", \"MyCube\" );\n\
var mat = cube.AddMaterial( \"Blinn\", false, \"MyMaterial\" );\n\
// Create an object with a material on a polygon cluster\n\
var torus = Application.ActiveSceneRoot.AddGeometry( \"Torus\", \"MeshSurface\", \"MyTorus\" );\n\
var cluster = torus.ActivePrimitive.Geometry.AddCluster( siPolygonCluster, \"MyPolygonCluster\" );\n\
var clsmat = cluster.AddMaterial( \"Phong\", false, \"MyMaterialOnCluster\" );\n\
// This object will get the material from the scene root.\n\
var sphere = Application.ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\", \"MySphere\" );\n\
// Create an unused material\n\
SICreateMaterial( \"Lambert\", \"UnusedMaterial\"  );\n\
var matlib = Application.ActiveProject.ActiveScene.ActiveMaterialLibrary;\n\
for ( var i = 0; i &lt; matlib.Items.Count; i++ )\n\
{\n\
	var mat = matlib.Items(i);\n\
	if ( mat.UsedBy.Count == 0 )\n\
	{\n\
		Application.LogMessage( mat.fullname + \" is unused\" );\n\
		continue;\n\
	}\n\
	for ( var j = 0; j &lt; mat.Parameters.Count; j++ )\n\
	{\n\
		var param = mat.Parameters(j);\n\
		if ( param.HasInstanceValue )\n\
		{\n\
			var colUsedBy = XSIFactory.CreateObject( \"XSI.Collection\" );\n\
			colUsedBy.AddItems( mat.UsedBy );\n\
			colUsedBy.RemoveItems( Application.ActiveSceneRoot );\n\
			// Don\'t consider scene material in use - if there are no renderable objects.\n\
			if ( colUsedBy.Count == 0 )\n\
				Application.LogMessage( param.FullName + \" belongs to the scene material and is currently unused\" );\n\
			else\n\
				Application.LogMessage( param.FullName + \" is an instance value and is being used by \" \n\
								+ colUsedBy.GetAsText() );\n\
		}	\n\
	}\n\
}\n\
// Expected results:\n\
//INFO : Sources.Materials.DefaultLib.Scene_Material.CAV is an instance value and is being used by MyTorus,MySphere\n\
//INFO : Sources.Materials.DefaultLib.Scene_Material.UV is an instance value and is being used by MyTorus,MySphere\n\
//INFO : Sources.Materials.DefaultLib.Material.CAV is an instance value and is being used by MyCube\n\
//INFO : Sources.Materials.DefaultLib.Material.UV is an instance value and is being used by MyCube\n\
//INFO : Sources.Materials.DefaultLib.Material1.CAV is an instance value and is being used by MyTorus.polymsh.cls.MyPolygonCluster\n\
//INFO : Sources.Materials.DefaultLib.Material1.UV is an instance value and is being used by MyTorus.polymsh.cls.MyPolygonCluster\n\
//INFO : Sources.Materials.DefaultLib.UnusedMaterial is unused</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";