var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ActivateFCurve</title>\n\
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
            <h1>ActivateFCurve</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ActivateFCurve</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Activates or deactivates an entire curve or just a region of the curve. <br /><br />\n\
ActivateFCurve is the command equivalent of the same functionality available in\n\
the DopeSheet.  It should be used when trying to emulate the DopeSheet behavior. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ActivateFCurve( [InputObjs], Activate, [StartFrame], [EndFrame], [Type] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of animatable parameters \n\
		   (for example \"cone*/kine.local.pos\"). This parameter uses the Type parameter to\n\
		   interpret which parameters to use in this way: <br /><br />\n\
		   - If Type == siInputParameters then InputObjs is used exactly as input (either from the \n\
		   specified list or the animatable parameters on the selected objects). <br /><br />\n\
		   - If Type == siAnimatedParameters then InputObjs is expected to be a list of objects on\n\
		   which each animatable parameter will be affected. <br /><br />\n\
		   - If Type == siAllAnimatedParameters then the value of InputObjs is ignored and instead\n\
		   the command uses all animated parameters on all objects in the entire scene.\n\
	   			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
 \n\
		   If no value is specified for this parameter, the Object List will use the selected\n\
		   objects or parameters respecting the scope indicated by the Type argument.\n\
	   			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Activate		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Activate or Deactivate the entire curve or the input range.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>False					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>True					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Start frame of the region of the fcurve(s) you want to operate. <br /><br />Leave both Start and End blank for entire curve. <br /><br />Value range -Inf, +Inf		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
End frame of the region of the fcurve(s) you want to operate. <br /><br />Leave both Start and End blank for entire curve. <br /><br />Value range -Inf, +Inf		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siParameterScope.html\">siParameterScope</a>		</td>\n\
		<td>\n\
 Parameter scope of the operation 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siInputParameters			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' First get a primitive and animate its translation\n\
NewScene , False\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
Translate , -7.01063515498729, 5.25147709343595, -0.525147709343595, siRelative, siView, siObj, siXYZ\n\
SaveKey \"cylinder.kine.local.posx,cylinder.kine.local.posy,cylinder.kine.local.posz\", 1\n\
SetValue \"PlayControl.Key\", 25\n\
SetValue \"PlayControl.Current\", 25\n\
Translate , 14.8089821251417, -10.34619367662, 1.034619367662, siRelative, siView, siObj, siXYZ\n\
SaveKey \"cylinder.kine.local.posx,cylinder.kine.local.posy,cylinder.kine.local.posz\", 25\n\
SetValue \"PlayControl.Key\", 50\n\
SetValue \"PlayControl.Current\", 50\n\
Translate , -15.3603803957587, -0.391901275629446, 3.91901275629446E-02, siRelative, siView, siObj, siXYZ\n\
SaveKey \"cylinder.kine.local.posx,cylinder.kine.local.posy,cylinder.kine.local.posz\", 50\n\
SetValue \"PlayControl.Key\", 75\n\
SetValue \"PlayControl.Current\", 75\n\
Translate , 14.5726685805916, 10.9732357176274, -1.09732357176274, siRelative, siView, siObj, siXYZ\n\
SaveKey \"cylinder.kine.local.posx,cylinder.kine.local.posy,cylinder.kine.local.posz\", 75\n\
SetValue \"PlayControl.Key\", 1\n\
SetValue \"PlayControl.Current\", 1\n\
SetValue \"PlayControl.Key\", 100\n\
SaveKey \"cylinder.kine.local.posx,cylinder.kine.local.posy,cylinder.kine.local.posz\", 100\n\
\' Note: to see these deactivations open the DopeSheet on the cylinder\n\
\' Deactivate the entire posx FCurve\n\
ActivateFCurve \"cylinder.kine.local.posx\", False\n\
\' Reactivate the entire posx FCurve\n\
ActivateFCurve \"cylinder.kine.local.posx\", True\n\
\' Deactivate the range 20 - 60 on the posx FCurve\n\
ActivateFCurve \"cylinder.kine.local.posx\", False, 20, 60\n\
\' Reactivate the range 20 - 60 on the posx FCurve\n\
ActivateFCurve \"cylinder.kine.local.posx\", True, 20, 60</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> <a href=\"#!/url=./si_cmds/Sequence.html\">Sequence</a> <a href=\"#!/url=./si_cmds/ScaleAndOffset.html\">ScaleAndOffset</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";