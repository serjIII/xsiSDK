var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RendererArchiveInfo</title>\n\
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
            <h1>RendererArchiveInfo</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RendererArchiveInfo</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_RendererArchiveInfo\">Object Hierarchy</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The RendererArchiveInfo object holds read-only information on a particular rendering \n\
engine\'s archiving capabilities. It can be accessed through either \n\
<a href=\"#!/url=./si_om/Renderer.SceneArchiveInfo.html\">Renderer.SceneArchiveInfo</a> or <a href=\"#!/url=./si_om/Renderer.ObjectArchiveInfo.html\">Renderer.ObjectArchiveInfo</a></p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/RendererArchiveInfo.DisplayProxy.html\">DisplayProxy</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/RendererArchiveInfo.Extension.html\">Extension</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/RendererArchiveInfo.Multiframe.html\">Multiframe</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/RendererArchiveInfo.Name.html\">Name</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Print out information on all registered rendering engines.\n\
function printRendererArchiveInfo( renderer )\n\
{\n\
	LogMessage( renderer.Name );\n\
	if( renderer.ProcessType( siRenderProcessExportArchive ) )\n\
	{\n\
		var sceneArchive = renderer.SceneArchiveInfo\n\
		LogMessage( \"  Scene Archive:\" );\n\
		LogMessage( \"    Name: \" + sceneArchive.Name );\n\
		LogMessage( \"    File Extension: \" + sceneArchive.Extension );\n\
		LogMessage( \"    Multiframe Support: \" + sceneArchive.Multiframe );\n\
	}\n\
	if( renderer.ProcessType( siRenderProcessExportObjectArchive ) )\n\
	{\n\
		var objectArchive = renderer.ObjectArchiveInfo\n\
		LogMessage( \"  Object Archive:\" );\n\
		LogMessage( \"    Name: \" + objectArchive.Name );\n\
		LogMessage( \"    File Extension: \" + objectArchive.Extension );\n\
		LogMessage( \"    Multiframe Support: \" + objectArchive.Multiframe );\n\
		LogMessage( \"    Display Proxy Support: \" + objectArchive.DisplayProxy );\n\
	}\n\
	LogMessage( \"\" );\n\
}\n\
var e = new Enumerator( Application.Renderers );\n\
for( ; !e.atEnd(); e.moveNext() )\n\
	printRendererArchiveInfo( e.item() );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Renderer.SceneArchiveInfo.html\">Renderer.SceneArchiveInfo</a> <a href=\"#!/url=./si_om/Renderer.ObjectArchiveInfo.html\">Renderer.ObjectArchiveInfo</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";