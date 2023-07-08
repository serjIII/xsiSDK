var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RemoveAnimation</title>\n\
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
            <h1>RemoveAnimation</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RemoveAnimation</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Removes animation (fcurves, expressions,constraints) from the specified parameters.\n\
You can also specify what the value of the parameter will be after removing \n\
the animation using this command.<br /><br />\n\
By default, the new value is set to the value of the parameter at the current \n\
frame. However, if the Frame argument is specified, the command takes the \n\
value from the parameter value at the specified frame to set the new value.\n\
Note: In the case of constraints the constraints will be removed from all the parameters\n\
its affecting not only from the specified parameters.\n\
Note: If the LayerAnimation argument is set to True, the command will remove animation\n\
of the specified parameters on all layers, even on those locked. For each specified parameter\n\
that was animated by a locked animation layers, a warning will be logged to inform the user\n\
the locked animation layer(s) have been modified.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RemoveAnimation( [InputObjs], [Time], [StaticFCurves], [BaseAnimation], [LayerAnimation], [SourceMask] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of animatable parameters (for example \"cone*/kine.local.pos\"). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected and marked parameters			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 The animated values at this frame are assigned to the parameters when the animation is removed. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StaticFCurves		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 If True the command will remove static (constant) fcurves only. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">BaseAnimation		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 If True the command will remove animation on the base layer. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LayerAnimation		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 If True the command will remove animation on all layers, even on those locked, but will not remove animation on the base layer. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SourceMask		</td>\n\
		<td><a href=\"#!/url=./si_om/siSourceType.html\">siSourceType</a>		</td>\n\
		<td>\n\
 Type of animation source to remove. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siAnySource			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example sets up some animation on an object on both\n\
\' the X and Y positions. Then it demonstrates two different \n\
\' ways to remove the replace the animation while removing it:\n\
\' first by passing a specific frame; and then by using the\n\
\' (default) current frame.\n\
\'\n\
NewScene , false\n\
\' Create the object on which to set an expression\n\
set oDonut = CreatePrim( \"Torus\", \"NurbsSurface\" )\n\
\' Make sure the last frame will be set to 100\n\
SetValue \"PlayControl.Out\", 100\n\
\' Set a key frame at frame 1, with XPos = -30\n\
printInfo oDonut &amp; \".kine.local.posx\", Array( 1 ), \"before\"\n\
SaveKey oDonut &amp; \".kine.local.posx\", 1, -30\n\
printInfo oDonut &amp; \".kine.local.posx\", Array( 1 ), \"after\"\n\
\' Set another key frame at frame 100, with XPos = 30\n\
printInfo oDonut &amp; \".kine.local.posx\", Array( 100 ), \"before\"\n\
SaveKey oDonut &amp; \".kine.local.posx\", 100, 30\n\
printInfo oDonut &amp; \".kine.local.posx\", Array( 100 ), \"after\"\n\
\' Temporarily disable cycle checking (this \n\
\' expression creates a cycle on purpose)\n\
bCyclePref = GetValue( \"preferences.data_management.disable_cycle_checking\" )\n\
SetValue \"preferences.data_management.disable_cycle_checking\", True\n\
\' Animate the YPos parameter with an expression\n\
SetExpr oDonut &amp; \".kine.local.posy\", _\n\
		\"5*sin(\" &amp; oDonut &amp; \".kine.local.posx * 15)\"\n\
\' Restore cycle checking to its previous value\n\
SetValue \"preferences.data_management.disable_cycle_checking\", bCyclePref\n\
\' Remove the YPos expression and freeze Y at the value of \n\
\' the animation expression at frame 53\n\
printInfo oDonut &amp; \".kine.local.posy\", Array( 1,50,53,100 ), \"before\"\n\
RemoveAnimation oDonut &amp; \".kine.local.posy\", 53\n\
printInfo oDonut &amp; \".kine.local.posy\", Array( 1,50,53,100 ), \"after\"\n\
\' Set current frame to 50\n\
SetValue \"PlayControl.Current\", 50\n\
\' Remove XPos fcurve and freeze X at the value of the \n\
\' fcurve at the current frame (frame 50)\n\
printInfo oDonut &amp; \".kine.local.posx\", Array( 1,50,53,100 ), \"before\"\n\
RemoveAnimation oDonut &amp; \".kine.local.posx\" \n\
printInfo oDonut &amp; \".kine.local.posx\", Array( 1,50,53,100 ), \"after\"		\n\
\' This is a convenience function for printing out the info easily\n\
function printInfo( in_parameter, in_frame, in_loc )\n\
	LogMessage \"-----\"\n\
	for each f in in_frame\n\
		LogMessage in_parameter &amp; \" parameter at frame \" &amp; f &amp; \" \" _\n\
					&amp; in_loc &amp; \" updating = \" &amp; GetValue( in_parameter, f )\n\
	next\n\
end function\n\
\' Output of above script:\n\
\' INFO : -----\n\
\' INFO : torus.kine.local.posx parameter at frame 1 before updating = 0\n\
\' INFO : -----\n\
\' INFO : torus.kine.local.posx parameter at frame 1 after updating = -30\n\
\' INFO : -----\n\
\' INFO : torus.kine.local.posx parameter at frame 100 before updating = -30\n\
\' INFO : -----\n\
\' INFO : torus.kine.local.posx parameter at frame 100 after updating = -30\n\
\' INFO : -----\n\
\' INFO : torus.kine.local.posy parameter at frame 1 before updating = -5\n\
\' INFO : torus.kine.local.posy parameter at frame 50 before updating = -0.593575239181519\n\
\' INFO : torus.kine.local.posy parameter at frame 53 before updating = 2.80044293403625\n\
\' INFO : torus.kine.local.posy parameter at frame 100 before updating = 5\n\
\' INFO : -----\n\
\' INFO : torus.kine.local.posy parameter at frame 1 after updating = 2.80044293403625\n\
\' INFO : torus.kine.local.posy parameter at frame 50 after updating = 2.80044293403625\n\
\' INFO : torus.kine.local.posy parameter at frame 53 after updating = 2.80044293403625\n\
\' INFO : torus.kine.local.posy parameter at frame 100 after updating = 2.80044293403625\n\
\' INFO : -----\n\
\' INFO : torus.kine.local.posx parameter at frame 1 before updating = -30\n\
\' INFO : torus.kine.local.posx parameter at frame 50 before updating = -0.45452999539318\n\
\' INFO : torus.kine.local.posx parameter at frame 53 before updating = 2.27079487869202\n\
\' INFO : torus.kine.local.posx parameter at frame 100 before updating = 30\n\
\' INFO : -----\n\
\' INFO : torus.kine.local.posx parameter at frame 1 after updating = -0.454529995393187\n\
\' INFO : torus.kine.local.posx parameter at frame 50 after updating = -0.454529995393187\n\
\' INFO : torus.kine.local.posx parameter at frame 53 after updating = -0.454529995393187\n\
\' INFO : torus.kine.local.posx parameter at frame 100 after updating = -0.454529995393187</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.Disconnect.html\">Parameter.Disconnect</a> <a href=\"#!/url=./si_cmds/AddFCurve.html\">AddFCurve</a> <a href=\"#!/url=./si_cmds/RemoveAllAnimation.html\">RemoveAllAnimation</a> <a href=\"#!/url=./si_cmds/SaveKey.html\">SaveKey</a> <a href=\"#!/url=./si_cmds/RemoveKey.html\">RemoveKey</a> <a href=\"#!/url=./si_cmds/NextKey.html\">NextKey</a> <a href=\"#!/url=./si_cmds/PrevKey.html\">PrevKey</a> <a href=\"#!/url=./si_cmds/FirstKey.html\">FirstKey</a> <a href=\"#!/url=./si_cmds/LastKey.html\">LastKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";