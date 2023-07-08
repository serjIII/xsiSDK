var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Property Presets</title>\n\
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
            <h1>Property Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Property Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				This chapter contains the list of available <a href=\"#!/url=./si_om/Property.html\">Property</a> object presets organized by class type (that is, the class of object returned by one of the <span style=\"font-family: courier, monospace;\">AddProperty</span> methods). These presets can be used with the following methods:\n\
			</p>\n\
<ul>\n\
	<li><a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a></li>\n\
	<li><a href=\"#!/url=./si_om/Material.AddProperty.html\">Material.AddProperty</a></li>\n\
	<li><a href=\"#!/url=./si_om/Shader.AddProperty.html\">Shader.AddProperty</a></li>\n\
	<li><a href=\"#!/url=./si_om/Source.AddProperty.html\">Source.AddProperty</a></li>\n\
	<li><a href=\"#!/url=./si_om/Clip.AddProperty.html\">Clip.AddProperty</a></li>\n\
</ul>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Warning</td>\n\
		<td class=\"emph\">\n\
				Not all values are supported in every context; for example, some <a href=\"#!/url=./si_cmds/CustomPropertyPresets.html\">CustomProperty Presets</a> such as <span style=\"font-family: courier, monospace;\">Vertex Color</span> can only be applied to a complete <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> with the <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> method, while some <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> presets such as <span style=\"font-family: courier, monospace;\">Annotation</span> can be applied to <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>s, partial or complete <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>s, <a href=\"#!/url=./si_om/Material.html\">Material</a>s, <a href=\"#!/url=./si_om/Shader.html\">Shader</a>s, <a href=\"#!/url=./si_om/Source.html\">Source</a>s, or <a href=\"#!/url=./si_om/Clip.html\">Clip</a>s.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
	<p>For information on the specific property classifications and a list of the properties that support them, click on the corresponding link below:</p>\n\
<ul>\n\
	<li><a href=\"#!/url=./si_cmds/ClusterPropertyPresets.html\">ClusterProperty Property Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/CustomPropertyPresets.html\">CustomProperty Property Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/PropertyObjectPresets.html\">Property (Object) Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/UserDataBlobPresets.html\">UserDataBlob Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/UserDataMapPresets.html\">UserDataMap Presets</a></li>\n\
</ul>\n\
</div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";