var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shader.Root</title>\n\
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
            <h1>Shader.Root</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Shader.html\">Shader</a>.Root</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the root of the shader tree, which may be a <a href=\"#!/url=./si_om/Material.html\">Material</a>, <a href=\"#!/url=./si_om/Light.html\">Light</a>, \n\
or <a href=\"#!/url=./si_om/Camera.html\">Camera</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = Shader.Root;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to find the material from a shader even when the\n\
	shader is buried deeply in a shader tree.\n\
*/\n\
// Create an object with a texture shader\n\
newscene(null,false);\n\
var root = Application.ActiveProject.ActiveScene.Root;\n\
var model = root.AddModel();\n\
model.name = \"MyModel\";\n\
var sphere = model.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
var grid = model.AddGeometry( \"Grid\", \"MeshSurface\" );\n\
var col = XSIFactory.CreateObject(\"XSI.Collection\");\n\
col.add(sphere);\n\
col.add(grid);\n\
BlendInPresets( \"Image\", col, false, false );\n\
CreateProjection( col, siTxtSpherical, siTxtDefaultSpherical, \"TxtSupport\", \"TxtProjection\" );\n\
var filename = Application.InstallationPath( siFactoryPath ) + \n\
	\"\\\\Data\\\\XSI_SAMPLES\\\\Pictures\\\\xsilogo.jpg\";\n\
var imageclip = CreateImageClip( filename, \"XSILogo\" );\n\
// Set up the texture space on texture shader\n\
var mat = sphere.Material;\n\
var textureshader = sphere.Material.CurrentTexture;\n\
// Set the texturespace parameter\n\
textureshader.parameters(\"tspace_id\").Value = \"TxtProjection\";\n\
textureshader.parameters(\"tex\").Connect(imageclip);\n\
// Select the texture shader\n\
SelectObj(\"MyModel.sphere.Scene_Material.Phong.ambient_blend.Image\", null, null);\n\
// Get the sphere from the selection list\n\
var obj = selection(0);\n\
// Set up the sharee material with a specific txtuv for the sphere.\n\
if ( obj.isclassof( siShaderID ) )\n\
{\n\
	var tspace_id = obj.parameters(\"tspace_id\");\n\
	var tex = obj.parameters(\"tex\");\n\
	if ( tspace_id &amp;&amp; tex )\n\
	{\n\
		// If the object has a texture shader then change the\n\
		// material hardware display settings to explicitly\n\
		// track the shader\'s texture uvws and image clip\n\
		// Get material from shader\n\
		var mat = obj.Root;\n\
		// A material may be used by many objects, just pick the first one\n\
		// with a uvw and image clip setting\n\
		var eUsedBy = new Enumerator(mat.usedby);\n\
		for ( ; !eUsedBy.atEnd(); eUsedBy.moveNext() )\n\
		{\n\
			var curObj = eUsedBy.item();\n\
			var uvw = tspace_id.getinstancevalue( curObj, true );\n\
			var imageclip = tex.source;\n\
			if ( uvw &amp;&amp; imageclip )\n\
			{\n\
				mat.parameters(\"TextureSel\").value = 3; // Specific TxtUVW &amp; ImageClip\n\
				mat.parameters(\"UV\").setinstancevalue( curObj, uvw );\n\
				mat.parameters(\"ImageClipName\").value = imageclip.name;\n\
			}	\n\
		}\n\
	}\n\
}\n\
// Log the hardware display settings for txtuvw on the scene material\n\
mat = ActiveSceneRoot.Material;\n\
var eUsedBy = new Enumerator(mat.usedby);\n\
var uvparam = mat.parameters(\"UV\");\n\
for ( ; !eUsedBy.atEnd(); eUsedBy.moveNext() )\n\
{\n\
	var curObj = eUsedBy.item();\n\
	var uvwObj = uvparam.getinstancevalue( curObj, true );\n\
	var uvwval = \"\\\"\\\"\";\n\
	if (uvwObj!=null)\n\
		uvwval = uvwObj.fullname;\n\
	logmessage( mat.fullname + \" \" + curObj.fullname + \" \" + uvwval );\n\
}\n\
//INFO : Scene_Material MyModel.sphere MyModel.sphere.polymsh.cls.Texture_Coordinates_AUTO.TxtProjection\n\
//INFO : Scene_Material MyModel.grid \"\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";