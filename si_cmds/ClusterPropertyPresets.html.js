var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClusterProperty Property Presets</title>\n\
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
            <h1>ClusterProperty Property Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ClusterProperty Property Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available ClusterProperty <a href=\"#!/url=./si_om/Property.html\">Property</a> presets. These presets can be used to create <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> objects on partial or complete <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>s using the <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> method.\n\
			</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Warning</td>\n\
		<td class=\"emph\">\n\
				Some of these presets can only be added to always-complete <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>s. Such cases are indicated in the table below. An always-complete cluster always covers all the components of the <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>, even when new components are added by a modeling operation (see <a href=\"#!/url=./si_om/Cluster.IsAlwaysComplete.html\">Cluster.IsAlwaysComplete</a> for more information).\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">\n\
				See <a href=\"#!/url=./si_cmds/PropPreset.html\">Property Presets</a> for property classification. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllPropertyPresets.html\">Alphabetical Listing of All Property Presets</a> for a complete list of available property types.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Properties</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ColorAtVertices.Preset</td>\n\
		<td><a name=\"ColorAtVertices\"></a>Cluster Color<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/clscolor.html\">clscolor</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Symmetry Map Property.Preset</td>\n\
		<td><a name=\"Symmetry_Map_Property\"></a>Symmetry Map<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/map.html\">map</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset can only be added to always-complete <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> objects.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Texture Projection.Preset</td>\n\
		<td><a name=\"Texture_Projection\"></a>Cluster Property UV Texture Projection<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/uvspace.html\">uvspace</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset can only be added to always-complete <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> objects.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">User Normal Property.Preset</td>\n\
		<td><a name=\"User_Normal_Property\"></a>User Normal Property<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/normal.html\">normal</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Vertex Color.Preset</td>\n\
		<td><a name=\"Vertex_Color\"></a>Vertex Color Property<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/vertexcolor.html\">vertexcolor</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset can only be added to always-complete <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> objects.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Weight Map Property.Preset</td>\n\
		<td><a name=\"Weight_Map_Property\"></a>Weight Map<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/wtmap.html\">wtmap</a> property parameter list information.		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";