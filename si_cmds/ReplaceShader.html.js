var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ReplaceShader</title>\n\
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
            <h1>ReplaceShader</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ReplaceShader</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Disconnects a shader and connects another shader in its place. <br /><br />\n\
Note: Both parameters are required, and you cannot use a preset path for the\n\
Target parameter (\"Shaders/Material/Lambert.Preset\" does not work), so if\n\
you need to specify a shader that has not been introduced to the scene yet, you\n\
get it with the <a href=\"#!/url=./si_cmds/CreateShaderFromPreset.html\">CreateShaderFromPreset</a> command, which returns \n\
the newly created (but disconnected) <a href=\"#!/url=./si_om/Shader.html\">Shader</a> object for the Target \n\
parameter (see the example for details) or use the \n\
<a href=\"#!/url=./si_cmds/ReplaceShaderWithPreset.html\">ReplaceShaderWithPreset</a> command.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ReplaceShader( Source, Target );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Source		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Shaders to disconnect (eg., \"sphere.Material.Phong\").		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Shader to connect. Only a shader that is already in the scene is accepted, \n\
		so if you are using a shader from disk, you need to add it with the \n\
		<a href=\"#!/url=./si_cmds/CreateShaderFromPreset.html\">CreateShaderFromPreset</a> command first.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to replace one shader with another one\n\
\' on scene objects. It also shows how you can use the scripting\n\
\' equivalent of Drag &amp; Drop (CreateShaderFromPreset) which is required \n\
\' by the ReplaceShader command.\n\
\'\n\
NewScene , false\n\
\' Get the default pass\n\
Set oDefPass = GetValue( \"Passes.Default_Pass\" )\n\
\' Create a sphere and apply a default shader to it (since the sphere \n\
\' is already selected we don\'t need to specify it as an input object)\n\
Set oSphere = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
ApplyShader\n\
\' Tweak the color values on the sphere\'s material using the Shader\n\
\' parameter shortcuts \"diffuse\" and \"ambient\"\n\
Set oPhong = oSphere.Material.Shaders( \"Phong\" )\n\
oPhong.diffuse.Parameters( \"red\" ).Value = 0.9\n\
oPhong.diffuse.Parameters( \"green\" ).Value = 0.5\n\
oPhong.ambient.Parameters( \"green\" ).Value = 0.7\n\
\' View the results in a rendered frame. (You can see the sphere now has the \n\
\' default image wrapped around it with a specular highlight)\n\
RenderPasses oDefPass, 1, 1\n\
\' Now, replace the Phong shader on the sphere by a Lambert preset shader which\n\
\' we access through the CreateShaderFromPreset command (the scripting equivalent \n\
\' of Drag &amp; Drop), which handily returns a pointer to the unconnected shader\n\
set oLambert = CreateShaderFromPreset( \"Shaders\\Material\\Lambert.Preset\", _\n\
	\"Sources.Materials.DefaultLib.Material\" )\n\
oLambert.diffuse.Parameters( \"red\" ).Value = 0.9\n\
oLambert.diffuse.Parameters( \"green\" ).Value = 0.5\n\
oLambert.ambient.Parameters( \"green\" ).Value = 0.7\n\
ReplaceShader \"sphere.Material.Phong\", oLambert \n\
\' View the results in a rendered frame. (Now the image is still on the sphere, \n\
\' but it appears with a matte surface and no specular highlight)\n\
RenderPasses oDefPass, 1, 1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyShader.html\">ApplyShader</a> <a href=\"#!/url=./si_cmds/CreateShaderFromPreset.html\">CreateShaderFromPreset</a> <a href=\"#!/url=./si_cmds/ReplaceShaderWithPreset.html\">ReplaceShaderWithPreset</a> <a href=\"#!/url=./si_cmds/ReplaceShaderWithProgID.html\">ReplaceShaderWithProgID</a> <a href=\"#!/url=./si_cmds/RemoveShaderFromCnxPoint.html\">RemoveShaderFromCnxPoint</a> <a href=\"#!/url=./si_cmds/SIConnectShaderToCnxPoint.html\">SIConnectShaderToCnxPoint</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";