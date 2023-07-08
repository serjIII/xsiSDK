var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shader.ImageClips</title>\n\
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
            <h1>Shader.ImageClips</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Shader.html\">Shader</a>.ImageClips</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns an <a href=\"#!/url=./si_om/ImageClipCollection.html\">ImageClipCollection</a> containing each <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> object \n\
connected to the shader or child shaders. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
ImageClipCollection rtn = Shader.ImageClips;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
This example illustrates how to enumerate all the image clips affecting a shader, \n\
either directly or indirectly.\n\
*/\n\
NewScene( null, false );\n\
var root = Application.ActiveProject.ActiveScene.Root;\n\
var obj = root.AddGeometry( \"Cylinder\", \"MeshSurface\" );\n\
Selection.SetAsText( obj.Name );\n\
ApplyShader( \"Material\\\\Constant\" );\n\
BlendInTextureLayers( \"Image\" );\n\
var mat = obj.Material;\n\
var shad = mat.Shaders(0);\n\
// Log shader parameters\n\
LogMessage( \"Shader: \" + shad.FullName );\n\
// Log the image clip used\n\
var cliplist = new Enumerator( shad.ImageClips );\n\
for ( ; !cliplist.atEnd(); cliplist.moveNext() ) {\n\
	LogMessage( \"Image Clip: \" + cliplist.item().FullName );\n\
}\n\
// Expected results:\n\
//INFO : Shader: cylinder.Material.Constant\n\
//INFO : Image Clip: cylinder.Material.Constant.Image_Layer.Image.noIcon_pic</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> <a href=\"#!/url=./si_om/Image.html\">Image</a> <a href=\"#!/url=./si_om/Material.ImageClips.html\">Material.ImageClips</a> <a href=\"#!/url=./si_om/Scene.ImageClips.html\">Scene.ImageClips</a> <a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> <a href=\"#!/url=./si_cmds/AddImageClip.html\">AddImageClip</a> <a href=\"#!/url=./si_cmds/CreateImageClip.html\">CreateImageClip</a> <a href=\"#!/url=./si_cmds/CreateImageClip2.html\">CreateImageClip2</a> <a href=\"#!/url=./si_cmds/AddImageTextureLayer.html\">AddImageTextureLayer</a> <a href=\"#!/url=./si_cmds/AddImageClipFxOp.html\">AddImageClipFxOp</a> <a href=\"#!/url=./si_cmds/DeleteUnusedImageClips.html\">DeleteUnusedImageClips</a> <a href=\"#!/url=./si_cmds/DeleteUnusedImageSources.html\">DeleteUnusedImageSources</a> <a href=\"#!/url=./si_cmds/SetImageSource.html\">SetImageSource</a> <a href=\"#!/url=./si_cmds/SIAddImageClip.html\">SIAddImageClip</a> <a href=\"#!/url=./si_cmds/SIAddImageSource.html\">SIAddImageSource</a> <a href=\"#!/url=./si_cmds/SICreateImageClip.html\">SICreateImageClip</a> <a href=\"#!/url=./si_cmds/SICreateImageClip2.html\">SICreateImageClip2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";