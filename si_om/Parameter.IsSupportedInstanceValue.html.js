var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.IsSupportedInstanceValue</title>\n\
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
            <h1>Parameter.IsSupportedInstanceValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.IsSupportedInstanceValue</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns true if the value is supported by the parameter. For example, many shaders have a \n\
parameter of input type of siTextureSpaceParameterType (see \n\
<a href=\"#!/url=./si_om/Shader.GetShaderInputType.html\">Shader.GetShaderInputType</a>) but may only support vertex color \n\
<a href=\"#!/url=./si_om/Property.html\">Property</a> objects. This method will support passing the name of the property \n\
or the actual property itself.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Boolean Parameter.IsSupportedInstanceValue( Object in_obj, Object );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = Parameter.IsSupportedInstanceValue( Object, Value );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Boolean.htm\">Boolean</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Object		</td>\n\
		<td>Object such as a <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>		</td>\n\
		<td>\n\
Object using the shared property		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
New value for instance.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to set a map lookup shader on a parameter \n\
	and then test it for supported maps\n\
*/\n\
NewScene( null, false );\n\
// Create a grid with a map lookup shader\n\
var root = Application.ActiveProject.ActiveScene.Root;\n\
var grid = root.AddGeometry( \"Grid\", \"MeshSurface\" );\n\
BlendInPresets( \"Image\", grid, 1, false );\n\
CreateProjection( grid, siTxtSpherical, siTxtDefaultSpherical, \"TxtSupport\", \"TxtProjection\" );\n\
var filename = Application.InstallationPath( siFactoryPath ) + \"\\\\Data\\\\XSI_SAMPLES\\\\Pictures\\\\xsilogo.jpg\";\n\
var imageclip = CreateImageClip( filename, \"XSILogo\" );\n\
var mat = grid.Material;\n\
var shaders = mat.FindShaders( siShaderFilter );\n\
var textureshader = shaders(\"Image\");\n\
var txtparam = textureshader.Parameters(\"tspace_id\");\n\
// Don\'t want to deal with cluster to find UVW prop\n\
txtparam.SetInstanceValue( grid, \"TxtProjection\" );\n\
var txtuvw = txtparam.GetInstanceValue( grid, true );		// true == bind to object\n\
var cav = grid.ActivePrimitive.Geometry.AddVertexColor();\n\
var weightmap = CreateWeightMap( \"WeightMap\", grid, \"Weight_Map\" )(0);\n\
var txtmap = Create2DMap( grid, \"Texture_Map\", siDefaultPropagation )(0);\n\
txtmap.Parameters(\"ImageClipName\").Value = imageclip.Name;\n\
txtmap.Parameters(\"UVReference\").SetInstanceValue( grid, txtuvw );\n\
var polycls = grid.ActivePrimitive.Geometry.AddCluster( siPolygonCluster,\"RenderMapCluster\" );\n\
var rendermap = polycls.AddProperty( \"RenderMap\" );\n\
// Replace image shader with map lookup \n\
var ambient_blend = shaders(\"ambient_blend\");\n\
var maplookup = ambient_blend.Parameters(\"color1\").ConnectFromProgID( \"Softimage.map_lookup_color\" );\n\
var mapparam = maplookup.Parameters(\"map\");\n\
// Setup maps array\n\
var maps = Array( weightmap, cav, txtuvw, txtmap, rendermap );\n\
// Test map lookup shader for supported maps\n\
for ( var i = 0; i &lt; maps.length; i++ ) {\n\
	if ( mapparam.IsSupportedInstanceValue( grid, maps[i] ) ) {\n\
		Application.LogMessage( mapparam.FullName + \" parameter supports objects of \"+ maps[i].Type );\n\
	} else {\n\
		Application.LogMessage( mapparam.FullName + \" parameter does not supports objects of \"+ maps[i].Type );\n\
	}\n\
}\n\
// Expected results:\n\
//INFO : grid.Scene_Material1.Phong.ambient_blend.Softimage.map parameter supports objects of wtmap\n\
//INFO : grid.Scene_Material1.Phong.ambient_blend.Softimage.map parameter supports objects of vertexcolor\n\
//INFO : grid.Scene_Material1.Phong.ambient_blend.Softimage.map parameter supports objects of uvspace\n\
//INFO : grid.Scene_Material1.Phong.ambient_blend.Softimage.map parameter supports objects of TextureProp\n\
//INFO : grid.Scene_Material1.Phong.ambient_blend.Softimage.map parameter does not supports objects of rendermap</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.GetInstanceValue.html\">Parameter.GetInstanceValue</a> <a href=\"#!/url=./si_om/Parameter.SetInstanceValue.html\">Parameter.SetInstanceValue</a> <a href=\"#!/url=./si_om/Parameter.HasInstanceValue.html\">Parameter.HasInstanceValue</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";