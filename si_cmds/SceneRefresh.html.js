var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SceneRefresh</title>\n\
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
            <h1>SceneRefresh</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SceneRefresh</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Removes all temporary parameter values for a clean scene refresh. For example, if\n\
you apply an animation fcurve to an object\'s position and then change that position\n\
without setting a new key, you can reset the new temporary parameter values to the \n\
previous values by running this command. See the example below for a demonstration.<br /><br />\n\
This is different from the <a href=\"#!/url=./si_cmds/Refresh.html\">Refresh</a> command, which redraws all \n\
3D views for a scene.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SceneRefresh();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example sets up an animation fcurve on a null, then sets a temporary value \n\
\' on one of the animated parameters, and shows how to remove that temporary value\n\
\' using the SceneRefresh command.\n\
\'\n\
NewScene , false\n\
\' Create a null and store the parameter list we will use to set keys. \n\
\'---------------\n\
\' Note: We are using a combination of Softimage commands and the object model\n\
\' here. For example, we are using the OM shortcut oNull.posx in the\n\
\' SetValue and SaveKey commands.\n\
\'---------------\n\
Set oNull = ActiveSceneRoot.AddNull()\n\
sParams = oNull.posx &amp; \",\" &amp; oNull.posy &amp; \",\" &amp; oNull.posz\n\
\' Move the null along the negative X-axis and save a key for frame 1\n\
Translate oNull, -6.07766990291262, -2.37887869051207E-18, _\n\
	3.88513203951106E-02, siRelative, siView, siObj, siXYZ\n\
SaveKey sParams, 1\n\
\' Set a key for frame 90 towards the positive X-axis\n\
SetValue \"PlayControl.Key\", 90\n\
SetValue \"PlayControl.Current\", 90\n\
Translate oNull, 14.2301617773766, -0.743180286278171, _\n\
	7.43180286278171E-02, siRelative, siView, siObj, siXYZ\n\
SaveKey sParams, 90\n\
\' Go to frame 30 and display the posx value for that frame. \n\
SetValue \"PlayControl.Key\", 30\n\
SetValue \"PlayControl.Current\", 30\n\
Application.LogMessage GetValue( oNull.posx )	\'INFO : \"-2.52968225317525\"\n\
\' Set a temporary value on posx\n\
SetValue oNull.posx, 2\n\
\' Redisplay the value after setting the posx value but before the scene refresh.\n\
Application.LogMessage GetValue( oNull.posx )	\'INFO : \"2\"\n\
\' Remove all temporary values\n\
SceneRefresh\n\
\' Now display the value from the fcurve again after the scene refresh\n\
Application.LogMessage GetValue( oNull.posx )	\'INFO : \"-2.52968225317525\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Refresh.html\">Refresh</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";