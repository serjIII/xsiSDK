var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIGetOriginalValueOfOverridden</title>\n\
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
            <h1>SIGetOriginalValueOfOverridden</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIGetOriginalValueOfOverridden</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Returns the original value of the specified (overridden) parameter as if the override were muted.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = SIGetOriginalValueOfOverridden( Target, [Time] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Array.htm\">Array</a>of parameter value(s). If the parameter passed in \n\
is a color, then the returned values will be in R,G,B,A order.</p></div>\n\
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
<a href=\"#!/url=./files/paramexpr.htm\">Parameter</a> \n\
		from which to return the unoverridden value.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Frame at which to get the value. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Demonstrates how to read the original (non-overridden values) \n\
	values of the Point Light parameters\n\
*/\n\
NewScene(null, false);\n\
// Set up the scene\n\
GetPrimLight(\"Point.Preset\", \"Point\");\n\
SetValue(\"Point.light.soft_light.color.red\", 0.3);\n\
SetValue(\"Point.light.soft_light.color.green\", 0.4);\n\
SetValue(\"Point.light.soft_light.color.blue\", 0.5);\n\
SetValue(\"Point.kine.local.pos.posx\", 5);\n\
SetKey(\"Point.kine.local.posx\", 1, 5);\n\
SetKey(\"Point.kine.local.posx\", 100, 15);\n\
AddProp(\"Override\", \"Point\", siBranchPropagation);\n\
SIAddParameterEntryToOverride(\"Point.Override\", \"Point.kine.local.pos.posx, Point.kine.local.pos.posy, Point.kine.local.pos.posz\");\n\
SIAddParameterEntryToOverride(\"Point.Override\", \"Point.light.soft_light.color\");\n\
SetValue(\"Point.Override.posx\", -4);\n\
SetKey(\"Point.Override.posx\", 1, -4);\n\
SetKey(\"Point.Override.posx\", 100, 4);\n\
CreateShaderFromProgID(\"Softimage.txt2d-image-explicit.1.0\", \"Point.light\", null);\n\
SIConnectShaderToCnxPoint(\"Point.light.Image.out\", \"Point.light.soft_light.color\", false);\n\
// Move the play control\n\
SetValue(\"PlayControl.Key\", 50);\n\
SetValue(\"PlayControl.Current\", 50);\n\
var overriddenParams = SIGetOverriddenParameters(\"Point.Override.Entries.entry\");\n\
for (var i=0; i&lt;overriddenParams.Count; i++) {\n\
	// Get the unoverridden value\n\
	var oParam = overriddenParams(i);\n\
	var vbArr = SIGetOriginalValueOfOverridden(oParam);\n\
	// Convert the VBArray to a native JScript array\n\
	var jsArr = vbArr.toArray();\n\
	Application.LogMessage(\"Original value(s)   - \" + oParam + \" -&gt; \" + jsArr.toString());\n\
	// Get the overridden value\n\
	var val = oParam.Value;\n\
	Application.LogMessage(\"Overridden value - \" + oParam + \" -&gt; \" + val);\n\
}\n\
// Output:\n\
// INFO : Original value(s)   - Point.kine.local.posx -&gt; 9.924245000767802\n\
// INFO : Overridden value - Point.kine.local.posx -&gt; -0.06060399938575811</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIGetOverriddenParameters.html\">SIGetOverriddenParameters</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";