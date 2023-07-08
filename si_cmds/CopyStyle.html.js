var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CopyStyle</title>\n\
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
            <h1>CopyStyle</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CopyStyle</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Copies a hair style from one hair object to another.<br /><br />\n\
Note: The source and target may not be from the same emitter object and \n\
the source and target hair may not have dynamics on (the copy style must \n\
occur during style mode).<br /><br />\n\
You also need to line up the source and target objects, preferably both \n\
at the origin. This avoids any backwards-compatibility problems copying\n\
a style between 3.5 and previous versions where there is a new pose \n\
constraint on the 3.5 (which causes the positions to be slightly off if \n\
they were not centered at the origin).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CopyStyle( [TargetHairObject], [ModelHairStyleObject] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">TargetHairObject		</td>\n\
		<td><a href=\"#!/url=./files/objectexpr.htm\">Object</a> name		</td>\n\
		<td>\n\
Hair object to receive new style 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ModelHairStyleObject		</td>\n\
		<td><a href=\"#!/url=./files/objectexpr.htm\">Object</a> name		</td>\n\
		<td>\n\
Hair <a href=\"#!/url=./files/objectexpr.htm\">object</a> to copy style from 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Starts a pick session			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'Create two grids of different subdivision settings\n\
Set oGridSource = CreatePrim( \"Grid\", \"MeshSurface\", \"EmitterSource\" )\n\
Translate oGridSource, -5, 0, 0, siAbsolute, siParent, siObj, siX\n\
Set oGridTarget = CreatePrim( \"Grid\", \"MeshSurface\", \"EmitterTarget\" )\n\
SetValue oGridTarget &amp; \".polymsh.geom.subdivu\", 4\n\
SetValue oGridTarget &amp; \".polymsh.geom.subdivv\", 4\n\
Translate oGridTarget, 5, 0, 0, siAbsolute, siParent, siObj, siX\n\
\'Apply hair to each grid.  The \"source\" hair will have a style we\'ll copy to the \"target\".\n\
Set oHairSource = ApplyHairOp( oGridSource )\n\
SetValue oHairSource &amp; \".Name\", \"HairSource\"\n\
ApplyHairClumpOp oHairSource\n\
SetValue oHairSource &amp; \".ClumpOp.clump\", 0.2\n\
ApplyHairRotateOp oHairSource\n\
SetValue oHairSource &amp; \".RotateOp.type\", 1\n\
SetValue oHairSource &amp; \".RotateOp.angle\", 20\n\
Set oHairTarget = ApplyHairOp( oGridTarget )\n\
SetValue oHairTarget &amp; \".Name\", \"HairTarget\"\n\
\'Now Transplant hair from Source to Target\n\
CopyStyle oHairTarget, oHairSource</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyHairOp.html\">ApplyHairOp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";