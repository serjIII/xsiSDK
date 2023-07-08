var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Material.ImageClips</title>\n\
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
            <h1>Material.ImageClips</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Material.html\">Material</a>.ImageClips</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns an <a href=\"#!/url=./si_om/ImageClipCollection.html\">ImageClipCollection</a> containing all \n\
<a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> objects connected to the material. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
ImageClipCollection rtn = Material.ImageClips;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example shows how to find all image clips associated with a Material\n\
\'\n\
set oObj = BuildDemoScene\n\
set oImageClips = oObj.Material.ImageClips \n\
for each oImageClip in oImageClips\n\
	Application.LogMessage oImageClip.FullName\n\
next\n\
\'Example output:\n\
\'INFO : sphere.Material.Phong.Image.jaiqua_face_jpg\n\
\'INFO : sphere.Material.Phong.Color2scalar.Image1.ehair_08_jpg\n\
\'	Create a little sample render tree\n\
\'	It has no interesting visual appearance but is a render tree with\n\
\'	various shaders and two images so that we can demonstrate the \n\
\'	FindImageClips routine\n\
\'\n\
\'   Return value is the X3DObject\n\
\'\n\
function BuildDemoScene\n\
	NewScene ,false\n\
	ImageFile1 = XSIUtils.BuildPath( Application.InstallationPath(siFactoryPath), _\n\
				\"Data\", _\n\
				\"XSI_SAMPLES\",_\n\
				\"Pictures\",_\n\
				\"jaiqua_face.jpg\" )			\n\
	ImageFile2 = XSIUtils.BuildPath( Application.InstallationPath(siFactoryPath), _\n\
				\"Data\", _\n\
				\"XSI_SAMPLES\",_\n\
				\"Pictures\",_\n\
				\"ehair_08.jpg\" )			\n\
	NewScene , false\n\
	set oObj = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
	oObj.AddMaterial \"Phong\" \n\
	dim oPhongShader, oAmbientParam, oDiffuseParam, oShinyParam\n\
	set oPhongShader = oObj.Material.Shaders(0)\n\
	set oAmbientParam = oPhongShader.Parameters( \"ambient\" )\n\
	set oDiffuseParam = oPhongShader.Parameters( \"diffuse\" )	\n\
	set oShinyParam= oPhongShader.Parameters( \"shiny\" )	\n\
	dim oImageClip1, oImageClip2\n\
	SICreateImageClip ImageFile1, ,oImageClip1	\n\
	SICreateImageClip ImageFile2, ,oImageClip2\n\
	dim oImageNode1,oImageNode2\n\
	set oImageNode1 = oAmbientParam.connectfrompreset(\"Image\", siTextureShaderFamily)\n\
	oDiffuseParam.Connect( oImageNode1 )	\n\
	oImageNode1.Parameters( \"tex\" ).Connect( oImageClip1 )\n\
	set oImageNode2 = oShinyParam.connectfrompreset(\"Image\", siTextureShaderFamily)\n\
	oImageNode2.Parameters( \"tex\" ).Connect( oImageClip2 )\n\
	set BuildDemoScene = oObj\n\
end function</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> <a href=\"#!/url=./si_om/Image.html\">Image</a> <a href=\"#!/url=./si_om/Shader.ImageClips.html\">Shader.ImageClips</a> <a href=\"#!/url=./si_om/Scene.ImageClips.html\">Scene.ImageClips</a> <a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> <a href=\"#!/url=./si_cmds/AddImageClip.html\">AddImageClip</a> <a href=\"#!/url=./si_cmds/CreateImageClip.html\">CreateImageClip</a> <a href=\"#!/url=./si_cmds/CreateImageClip2.html\">CreateImageClip2</a> <a href=\"#!/url=./si_cmds/AddImageTextureLayer.html\">AddImageTextureLayer</a> <a href=\"#!/url=./si_cmds/AddImageClipFxOp.html\">AddImageClipFxOp</a> <a href=\"#!/url=./si_cmds/DeleteUnusedImageClips.html\">DeleteUnusedImageClips</a> <a href=\"#!/url=./si_cmds/DeleteUnusedImageSources.html\">DeleteUnusedImageSources</a> <a href=\"#!/url=./si_cmds/SetImageSource.html\">SetImageSource</a> <a href=\"#!/url=./si_cmds/SIAddImageClip.html\">SIAddImageClip</a> <a href=\"#!/url=./si_cmds/SIAddImageSource.html\">SIAddImageSource</a> <a href=\"#!/url=./si_cmds/SICreateImageClip.html\">SICreateImageClip</a> <a href=\"#!/url=./si_cmds/SICreateImageClip2.html\">SICreateImageClip2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";