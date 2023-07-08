var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Material Presets</title>\n\
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
            <h1>Material Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Material Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available <a href=\"http://softimage.wiki.softimage.com/xsidocs/rendertree_WheretoStart.htm\">Material node</a> presets organized by type:</p>\n\
<ul>\n\
	<li><a href=\"#!/url=./si_cmds/ArtMaterialPresets.html\">Art Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/BricksMaterialPresets.html\">Bricks Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/ChurchMaterialPresets.html\">Church Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/ColdMaterialPresets.html\">Cold Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/CreaturesMaterialPresets.html\">Creatures Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/EyesMaterialPresets.html\">Eyes Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/FabricsMaterialPresets.html\">Fabrics Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/FleshMaterialPresets.html\">Flesh Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/GlassMaterialPresets.html\">Glass Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/HairMaterialPresets.html\">Hair Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/MetalMaterialPresets.html\">Metal Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/MetalsMaterialPresets.html\">Metals Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/MiscellaneousMaterialPresets.html\">Miscellaneous Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/MoreMaterialPresets.html\">More Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/OrganicMaterialPresets.html\">Organic Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/PlasticAndCeramicMaterialPresets.html\">Plastic And Ceramic Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/PrimaryColorsMaterialPresets.html\">Primary Colors Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/PTypeMaterialPresets.html\">PType Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/RetroMaterialPresets.html\">Retro Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/SecondaryColorsMaterialPresets.html\">Secondary Colors Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/TechnicalMaterialPresets.html\">Technical Material Presets</a></li>\n\
	<li><a href=\"#!/url=./si_cmds/AlphabeticalListOfAllMaterialPresets.html\">Alphabetical List of All Material Presets</a></li>\n\
</ul>\n\
</div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";