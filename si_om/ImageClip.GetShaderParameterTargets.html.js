var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ImageClip.GetShaderParameterTargets</title>\n\
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
            <h1>ImageClip.GetShaderParameterTargets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a>.GetShaderParameterTargets</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> containing the object(s) connected to an \n\
image clip output. This traverses the render tree in the opposite direction as the\n\
<a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> property:\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ParameterCollection ImageClip.GetShaderParameterTargets();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ImageClip.GetShaderParameterTargets();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a></p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example creates a sample shader tree that uses 3 image clips and shows \n\
	how to get to which input parameters thoses image clips are connected. An image clip\n\
	can be shared across different materials.\n\
*/\n\
NewScene(null, false);\n\
//Create 4 Image Nodes\n\
SIApplyShaderToCnxPoint(\"Image\", \"Sources.Materials.DefaultLib.Scene_Material.Phong.diffuse\", null, null);\n\
SIApplyShaderToCnxPoint(\"Image\", \"Sources.Materials.DefaultLib.Scene_Material.Phong.ambient\", null, null);\n\
SIApplyShaderToCnxPoint(\"Image\", \"Sources.Materials.DefaultLib.Scene_Material.Phong.specular\", null, null);\n\
SIApplyShaderToCnxPoint(\"ScalarImage\", \"Sources.Materials.DefaultLib.Scene_Material.Phong.shiny\", null, null);\n\
//Create 3 Image Clips From File\n\
SICreateImageClip(\"\\Pictures\\\\chrom[1..3].tga\", null, null);\n\
SICreateImageClip(\"\\Pictures\\\\cloud02.pic\", null, null);\n\
SICreateImageClip(\"\\Pictures\\\\refmap2.tga\", null, null);\n\
//Connect the first 2 Image Clip to different Shader Input Parameters \n\
SIConnectShaderToCnxPoint(\"Clips.chrom_1__3__tga\", \"Sources.Materials.DefaultLib.Scene_Material.Image.tex\", false);\n\
SIConnectShaderToCnxPoint(\"Clips.cloud02_pic\", \"Sources.Materials.DefaultLib.Scene_Material.Image1.tex\", false);\n\
//The last Image Clip is connected to 2 input parameters.\n\
SIConnectShaderToCnxPoint(\"Clips.refmap2_tga\", \"Sources.Materials.DefaultLib.Scene_Material.Image2.tex\", false);\n\
SIConnectShaderToCnxPoint(\"Clips.refmap2_tga\", \"Sources.Materials.DefaultLib.Scene_Material.ScalarImage.tex\", false);\n\
//Remove No-Icon from this material\n\
DisconnectAndDeleteOrUnnestShaders(\"Clips.noIcon_pic\", \"Sources.Materials.DefaultLib.Scene_Material\");\n\
//Now Get the Image Clips and use the GetShaderParameterTarget method to get where they are connected.\n\
var oCloudClip, oChromeClip, oRefMapClip, oNoIconClip;\n\
SICreateImageClip(\"\\Pictures\\\\refmap2.tga\", null, null);\n\
oCloudClip = GetValue(\"Clips.cloud02_pic\");\n\
oChromeClip = GetValue(\"Clips.chrom_1__3__tga\");\n\
oRefMapClip = GetValue(\"Clips.refmap2_tga\");\n\
oNoIconClip = GetValue(\"Clips.noIcon_pic\");\n\
//Cloud and Chrome Should be connected to 1 target.\n\
var oCloudClipTargets, oChromeClipTargets;\n\
oCloudClipTargets = oCloudClip.GetShaderParameterTargets();\n\
oChromeClipTargets = oChromeClip.GetShaderParameterTargets();\n\
LogMessage( \"Cloud and Chrome Should be connected to 1 target.\" );\n\
LogMessage( \"Cloud is connected to \" + oCloudClipTargets.Count + \" Target(s).\" );\n\
LogMessage( \"Chromeis connected to \" + oChromeClipTargets.Count + \" Target(s).\" );\n\
//RefMap Should be connected to 2 targets.\n\
var oRefMapClipTargets;\n\
oRefMapClipTargets= oRefMapClip.GetShaderParameterTargets();\n\
LogMessage( \"RefMap Should be connected to 2 targets.\" );\n\
LogMessage( \"RefMap is connected to \" + oRefMapClipTargets.Count + \" Target(s).\" );\n\
//NoIcon Should be connected to 0 target.\n\
var oNoIconClipTargets;\n\
oNoIconClipTargets= oNoIconClip.GetShaderParameterTargets();\n\
LogMessage( \"NoIcon Should be connected to 0 target.\" );\n\
LogMessage( \"NoIcon is connected to \" + oNoIconClipTargets.Count + \" Target(s).\" );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Shader.GetShaderParameterTargets.html\">Shader.GetShaderParameterTargets</a> <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";