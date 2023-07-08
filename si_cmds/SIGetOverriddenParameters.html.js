var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIGetOverriddenParameters</title>\n\
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
            <h1>SIGetOverriddenParameters</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIGetOverriddenParameters</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Returns the parameters affected by the specified override entry.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SIGetOverriddenParameters( Target );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing each <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> affected by this override entry.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/objectexpr.htm\">Override entry</a> from which \n\
		to return a list of affected parameters.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# This example demonstrates how to get a list of \n\
# overridden parameters under a Point light.\n\
#\n\
app = Application\n\
app.NewScene(None, 0);\n\
# Import the Softimage constants module\n\
from win32com.client import constants as c\n\
# Set up the scene\n\
app.GetPrimLight(\"Point.Preset\", \"Point\")\n\
app.SetValue(\"Point.kine.local.pos.posx\", 5);\n\
app.SetValue(\"Point.light.soft_light.color.red\", 0.3)\n\
app.SetValue(\"Point.light.soft_light.color.green\", 0.4)\n\
app.SetValue(\"Point.light.soft_light.color.blue\", 0.5)\n\
app.SetKey(\"Point.kine.local.posx\", 1, 5);\n\
app.SetKey(\"Point.kine.local.posx\", 100, 15);\n\
# Override the values\n\
app.AddProp(\"Override\", \"Point\", c.siBranchPropagation);\n\
app.SIAddParameterEntryToOverride(\"Point.Override\", \"Point.kine.local.pos.posx, Point.kine.local.pos.posy, Point.kine.local.pos.posz\");\n\
app.SIAddParameterEntryToOverride(\"Point.Override\", \"Point.light.soft_light.color\");\n\
# Set override values\n\
app.SetValue(\"Point.Override.posx\", -4);\n\
app.SetValue(\"Point.Override.posx\", -4);\n\
app.SetKey(\"Point.Override.posx\", 1, -4);\n\
app.SetKey(\"Point.Override.posx\", 100, 4);\n\
app.CreateShaderFromProgID(\"Softimage.txt2d-image-explicit.1.0\", \"Point.light\")\n\
app.SIConnectShaderToCnxPoint(\"Point.light.Image.out\", \"Point.light.soft_light.color\", False)\n\
# Move the play control\n\
app.SetValue(\"PlayControl.Key\", 50);\n\
app.SetValue(\"PlayControl.Current\", 50);\n\
overriddenParams = app.SIGetOverriddenParameters(\"Point.Override.Entries.entry\");\n\
for oParam in overriddenParams:\n\
	# Get the unoverridden value\n\
	val = app.SIGetOriginalValueOfOverridden(oParam);\n\
	app.LogMessage(\"Original value   -&gt; \" + oParam.FullName + \" -&gt; \" + str(val[0]));\n\
	# Get the overridden value\n\
	val = app.GetValue(oParam);\n\
	app.LogMessage(\"Overridden value -&gt; \" + oParam.FullName + \" -&gt; \" + str(val));\n\
# Output:\n\
# INFO : Original value   -&gt; Point.kine.local.posx -&gt; 9.92424500077\n\
# INFO : Overridden value -&gt; Point.kine.local.posx -&gt; -0.0606039993858</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIGetOriginalValueOfOverridden.html\">SIGetOriginalValueOfOverridden</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";