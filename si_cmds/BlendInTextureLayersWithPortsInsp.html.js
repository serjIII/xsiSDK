var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>BlendInTextureLayersWithPortsInsp</title>\n\
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
            <h1>BlendInTextureLayersWithPortsInsp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">BlendInTextureLayersWithPortsInsp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates and returns layers with the requested presets, and adds the provided ports to the layers.<br /><br />\n\
Note: This command is the same as <a href=\"#!/url=./si_cmds/BlendInTextureLayersWithPorts.html\">BlendInTextureLayersWithPorts</a> except \n\
that it also inspects the newly created shaders.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = BlendInTextureLayersWithPortsInsp( [PresetNames], [InputObjs] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the layers created as an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PresetNames		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./si_cmds/ShaderPreset.html\">Shader Presets</a> corresponding to \n\
		the shaders and/or images you want to connect\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Image\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of \n\
		shader connections to blend in new layers\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to apply blended shaders to a specific connection\n\
\' point on a cube. It also shows how to access the shader information both from the\n\
\' collection returned by BlendInTextureLayersWithPortsInsp and through the object\'s material.\n\
\'\n\
NewScene , false\n\
\' Create a default cube and apply a default Phong shader:\n\
Set oBox = ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
ApplyShader , oBox\n\
\' Apply Cloud and Gradient presets on the cube\'s Material Surface port:\n\
Set oLayers = BlendInTextureLayersWithPortsInsp( \"Cloud,Gradient\", _\n\
	oBox.Material.Parameters( \"Surface\" ) )\n\
\' At this point you will also see a Multiple Property Sets page pop up for the shaders.\n\
\' Now display the name of the created layers:\n\
For Each oLayer In oLayers\n\
	Set oShader = SIGetShaderOnCnxPoint( oLayer &amp; \".color\" )\n\
	Application.LogMessage oLayer.Name &amp; \" created with shader \" &amp; oShader.Name\n\
Next\n\
\' View the results in a rendered frame. (The colors appear quite smooth.)\n\
RenderPasses oDefPass, 1, 1\n\
\' Set the mode of the Gradient to \"Darken\":\n\
SetValue oBox.Material &amp; \".Gradient_Layer.mode\", 8\n\
\' View the results in a rendered frame. (Now the colors seem to have a mottled effect.) \n\
RenderPasses oDefPass, 1, 1\n\
\' Output of above script:\n\
\'INFO : \"Cloud_Layer created with shader Cloud\"\n\
\'INFO : \"Gradient_Layer created with shader Gradient\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/BlendInTextureLayers.html\">BlendInTextureLayers</a> <a href=\"#!/url=./si_cmds/BlendInTextureLayersInsp.html\">BlendInTextureLayersInsp</a> <a href=\"#!/url=./si_cmds/BlendInTextureLayersWithPorts.html\">BlendInTextureLayersWithPorts</a> <a href=\"#!/url=./si_cmds/BlendClipsInTextureLayers.html\">BlendClipsInTextureLayers</a> <a href=\"#!/url=./si_cmds/BlendClipsInTextureLayersInsp.html\">BlendClipsInTextureLayersInsp</a> <a href=\"#!/url=./si_cmds/BlendClipsInTextureLayersWithPorts.html\">BlendClipsInTextureLayersWithPorts</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";