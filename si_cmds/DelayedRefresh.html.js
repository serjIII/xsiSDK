var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DelayedRefresh</title>\n\
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
            <h1>DelayedRefresh</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">DelayedRefresh</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Redraws the 3D viewports when the script is done executing and control has returned\n\
to the application. Calling this command multiple times will only produce a single\n\
redraw after the script execution.<br /><br />\n\
Note: This is different from <a href=\"#!/url=./si_cmds/Refresh.html\">Refresh</a> which redraws the scene\n\
immediately when it is called.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>DelayedRefresh( [Time] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Time		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Frame at which to refresh 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates the effect of the DelayedRefresh command by creating a few objects and \n\
\' then translating them with delayed refresh calls after each step.\n\
\'\n\
NewScene , false\n\
\' Set up some variables and constants to start\n\
Set oSmarmy = CreateObject( \"XSI.Collection\" )\n\
iDisplacement = 0\n\
Const MAX_ARMY = 19\n\
\' This is just a utility loop that makes it easier adding a lot of elements to the scene\n\
For i = 0 To 19\n\
	\' Make a new soldier and add it to the army\n\
	Set oSoldier = ActiveSceneRoot.AddNull()\n\
	oSmarmy.Add oSoldier\n\
	\' Get the array of position values for the soldier\n\
	aPos = Array( oSoldier.posx.Value, oSoldier.posy.Value, oSoldier.posz.Value )\n\
	\' If we\'ve already made half the army, position them in one direction\n\
	If i &gt;= (MAX_ARMY/2) Then\n\
		oSoldier.posx.Value = aPos(0) + iDisplacement \n\
		oSoldier.posy.Value = aPos(1) + iDisplacement \n\
		oSoldier.posz.Value = aPos(2) + iDisplacement \n\
	Else\n\
		oSoldier.posx.Value = aPos(0) - iDisplacement \n\
		oSoldier.posy.Value = aPos(1) - iDisplacement \n\
		oSoldier.posz.Value = aPos(2) - iDisplacement \n\
	End If\n\
	\' When we\'re half done, we need to reset the displacement counter \n\
	If iDisplacement = CInt(MAX_ARMY/2) Then\n\
		iDisplacement = 0.1\n\
	Else\n\
		iDisplacement = iDisplacement + 0.2\n\
	End If\n\
Next\n\
\' Now that our army is built, let\'s move them towards us a set at a time for a few steps.\n\
\' (Only the end result will be displayed)\n\
move3Steps oSmarmy\n\
sub move3Steps( in_collection )\n\
	\' Local settings\n\
	iStep = 0.25\n\
	Const STEP_LIMIT = 30\n\
	\' First clear the selection (just in case we get unwanted members)\n\
	Selection.Clear\n\
	\' Then set the selection according to the collection members specified \n\
	Selection.SetAsText in_collection.GetAsText\n\
	\' Now we can move everything at one (using a loop to make it easier)\n\
	For j = 0 To STEP_LIMIT\n\
		Translate , , , +iStep\n\
		DelayedRefresh\n\
	Next\n\
end sub</pre></td></tr>\n\
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