var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Light.FindShaders</title>\n\
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
            <h1>Light.FindShaders</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Light.html\">Light</a>.FindShaders</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns all shaders applied to the light that match a filter. If no matching shaders are found, \n\
FindShaders returns an empty collection.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ShaderCollection Light.FindShaders( String );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Light.FindShaders( Filter );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ShaderCollection.html\">ShaderCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Filter		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of a shader <a href=\"#!/url=./si_om/Filter.html\">Filter</a> object. For example, you can use siShaderFilter \n\
	(the standard Softimage shader filter), or you can use a custom filter.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Create a scene with an object lit by a spotlight\n\
var root = Application.ActiveProject.ActiveScene.Root;\n\
var grid = root.AddGeometry( \"Grid\", \"MeshSurface\" );\n\
scale( grid, 2, 2, 2, siAbsolute );\n\
var cone = root.AddGeometry( \"Cone\", \"MeshSurface\" );\n\
translate(cone, 0, 1.3, 0 );\n\
var light = root.AddLight( \"LightSpot\", true, \"SpotLight\" );\n\
ApplyCns( \"Position\", light.interest, cone );\n\
ApplyCns( \"Orientation\", light.interest, cone );\n\
translate( light, 4, 6, 4);\n\
var strFileName = Application.InstallationPath( siFactoryPath ) + \n\
	\"\\\\Data\\\\XSI_SAMPLES\\\\Pictures\\\\xsilogo.jpg\";\n\
var imageclip = CreateImageClip( strFileName, \"XSILogo\" );\n\
// Find the first parameter that is texturable and of type color. \n\
// This is the shader connection point.\n\
var shader_param = null;\n\
for ( i=0; i &lt; light.parameters.count; i++ )\n\
{\n\
	var param =  light.parameters(i);\n\
	var inputtype =  light.GetShaderInputType(param.scriptname);\n\
	if ((param.capabilities &amp; siTexturable) &amp;&amp; (inputtype == siColorParameterType ))\n\
	{\n\
		shader_param = param;\n\
		break;\n\
	}\n\
}\n\
logmessage( \"shader connection point = \" + shader_param.fullname );\n\
// set up shader tree\n\
if ( shader_param )\n\
{\n\
	var mix2 = shader_param.ConnectFromProgID(\"Softimage.sib_color_2mix\");\n\
	var soft_light = mix2.parameters(\"base_color\").ConnectFromProgID(\"Softimage.soft_light\");\n\
	var fast_light_effect = mix2.parameters(\"color1\").ConnectFromProgID(\"Softimage.Bionic_Light.lit\");\n\
	fast_light_effect.parameters(\"Projector_Pic\").connect(imageclip);\n\
}\n\
// Find the soft_light shader\n\
var shaders = light.FindShaders(siShaderFilter);\n\
var eShaders = new Enumerator(shaders);\n\
// Set up shadows with a softlight.\n\
var soft_light_id = String(\"Softimage.soft_light.1\").toLowerCase();\n\
for ( ; !eShaders.atEnd(); eShaders.moveNext() )\n\
{\n\
	var shader = eShaders.item();\n\
	if (shader.progid.toLowerCase() == soft_light_id)\n\
	{\n\
		// setup shadows\n\
		var soft_light = shader;\n\
		soft_light.parameters(\"shadow\").value = true;\n\
		soft_light.parameters(\"factor\").value = 0.5;\n\
		break;\n\
	}\n\
}\n\
//INFO : shader connection point = SpotLight.light.LightShader</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Light.GetShaderInputType.html\">Light.GetShaderInputType</a> <a href=\"#!/url=./si_om/Material.FindShaders.html\">Material.FindShaders</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";