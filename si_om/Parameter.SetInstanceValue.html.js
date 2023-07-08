var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.SetInstanceValue</title>\n\
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
            <h1>Parameter.SetInstanceValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.SetInstanceValue</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets an instance value for specified object. Instance values only applied to <a href=\"#!/url=./si_om/Property.html\">Property</a>\n\
objects that can be shared or <a href=\"#!/url=./si_om/Shader.html\">Shader</a> objects connected under shared \n\
<a href=\"#!/url=./si_om/Material.html\">Material</a> object.  For example, the ImageShader.tspace_id parameter is an instance \n\
value. \n\
<br /><br />\n\
For parameters supporting object binding (such as a texturespace parameter) this method will accept \n\
a valid <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a> as an instance value. It will validate that the object is supported \n\
and will set the value using the name of the object. If the object is not supported it will return \n\
false.\n\
<br /><br />\n\
If the object does not exist you can set the instance value using the name of the object and set the \n\
Bind argument to false. \n\
<br /><br />\n\
Note: Instance values cannot be animated, so this method doesn\'t take a time argument.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Boolean Parameter.SetInstanceValue( Object in_obj, Object, Boolean );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = Parameter.SetInstanceValue( Object, Value, [Bind] );</pre>		</td>	</tr>\n\
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
Object nesting the shared property		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		New value for instance. This may be the object itself, such as the UVW texture \n\
		property or the name of the object.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Bind		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		If the instance value supports object binding and the value passed is a string then the method \n\
		will attempt to test for the existence of a supported object specified by the \n\
		string. If the object does not exist the method will return False.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to set instance values on a shared material parameter\n\
	Applies to parameters: ImageShader.tspace_id, Material.ImageClipName, Material.UV, Material.CAV.\n\
*/\n\
NewScene( null, false );\n\
var app = Application;\n\
var scene = app.ActiveProject.ActiveScene;\n\
var root = scene.Root;\n\
// Create cube with a texture projection (not connected)\n\
var cube = root.AddGeometry( \"Cube\", \"MeshSurface\", \"MyCubeWithTexture\" );\n\
// Create projection for cube\n\
CreateProjection( \n\
	cube, \n\
	siTxtCubic, \n\
	siTxtDefaultCubic , \n\
	\"MyCubicTextureSupport\", \n\
	\"MyCubicTextureProjection\" ); \n\
// Create sphere with a texture projection (not connected)\n\
var sphere = root.AddGeometry( \"Sphere\", \"MeshSurface\", \"MySphereWithTexture\" );\n\
// Create projection for sphere\n\
CreateProjection( \n\
	sphere, \n\
	siTxtSpherical, \n\
	siTxtDefaultSpherical, \n\
	\"MySphericalTextureSupport\", \n\
	\"MySphericalTextureProjection\" ); \n\
// Create a group with a material hooked up to texture image\n\
var objs = XSIFactory.CreateObject( \"XSI.Collection\" );\n\
objs.Add( cube );\n\
objs.Add( sphere );\n\
var group = root.AddGroup( objs, \"MyGroup\", false );\n\
var mat = group.AddMaterial( \"Blinn\", false, \"MyGroupMaterialWithTexture\" );\n\
var shaders = mat.Shaders;\n\
var blinn = shaders(0);\n\
var ambient = blinn.Parameters(\"ambient\");\n\
var diffuse = blinn.Parameters(\"diffuse\");\n\
// Create image clip\n\
var strFileName = app.InstallationPath( siFactoryPath ) + \"\\\\Data\\\\XSI_SAMPLES\\\\Pictures\\\\xsilogo.jpg\";\n\
var imageclip = CreateImageClip( strFileName, \"MyImageClip\" );\n\
// Connect imageshader1 to blinn.ambient\n\
var imageshader1 = ambient.ConnectFromPreset( \"Image\", siTextureShaderFamily );\n\
// Connect imageshader2 to blinn.diffuse\n\
var imageshader2 = diffuse.ConnectFromPreset( \"Image\", siTextureShaderFamily );\n\
// Connect the imageshader1.tex to imageclip\n\
var tex = imageshader1.Parameters(\"tex\");\n\
tex.Connect( imageclip );\n\
// get tspace_id from imageshader\n\
var tspace_id = imageshader1.Parameters(\"tspace_id\");\n\
// set the cube.material.image.tspace_id = MyCubicTextureProjection\n\
tspace_id.SetInstanceValue( cube, \"MyCubicTextureProjection\" );\n\
// set the sphere.material.image.tspace_id = MySphericalTextureProjection\n\
tspace_id.SetInstanceValue( sphere, \"MySphericalTextureProjection\" );\n\
// Dump all shader parameter instance values for each objects found using \n\
// a material from the active  material library\n\
var matlib = scene.ActiveMaterialLibrary;\n\
for ( var i=0; i&lt;matlib.Items.Count; i++ ) {\n\
	var mat = matlib.Items(i);\n\
	// Get all shaders in materials shader tree\n\
	var shaders = mat.FindShaders( siShaderFilter );\n\
	for ( j=0; j&lt;shaders.Count; j++ ) {	\n\
		var shader = shaders(j);\n\
		for ( var k=0; k&lt;shader.Parameters.Count; k++ ) {\n\
			var shader_param = shader.Parameters(k);\n\
			// If the shader parameter has an instance value look up\n\
			// its object value\n\
			if ( shader_param.HasInstanceValue ) {\n\
				var eObjs = new Enumerator( mat.UsedBy );\n\
				for ( ; !eObjs.atEnd(); eObjs.moveNext() ) {\n\
					var obj = eObjs.item();\n\
					var instancevalue = shader_param.GetInstanceValue( obj );\n\
					// Log parameter instance value for object\n\
					app.LogMessage( obj.name + \" \" + shader.Name + \" \" + shader_param.Name + \" = \" + instancevalue  );\n\
				}\n\
			}\n\
		}\n\
	}	\n\
}\n\
// Expected results:\n\
//INFO : MyCubeWithTexture Image tspace_id = MyCubicTextureProjection\n\
//INFO : MySphereWithTexture Image tspace_id = MySphericalTextureProjection\n\
//INFO : MyCubeWithTexture Image1 tspace_id = \n\
//INFO : MySphereWithTexture Image1 tspace_id =</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.HasInstanceValue.html\">Parameter.HasInstanceValue</a> <a href=\"#!/url=./si_om/Parameter.IsSupportedInstanceValue.html\">Parameter.IsSupportedInstanceValue</a> <a href=\"#!/url=./si_om/Parameter.GetInstanceValue.html\">Parameter.GetInstanceValue</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";