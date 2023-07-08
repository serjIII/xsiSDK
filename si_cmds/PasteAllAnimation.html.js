var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PasteAllAnimation</title>\n\
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
            <h1>PasteAllAnimation</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PasteAllAnimation</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Pastes all the animation from the clipboard (see <a href=\"#!/url=./si_cmds/CopyAllAnimation2.html\">CopyAllAnimation2</a>) \n\
under the specified object.<br /><br />\n\
Note: If animation has been copied from all layers (base layer not included), the command will paste animation\n\
on all layers, even on those locked. For each parameter that has a new animation on locked animation layers,\n\
a warning will be logged to inform the user the locked animation layer(s) have been modified.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PasteAllAnimation( InputObjs, [UsePosition] );</pre>		</td>	</tr>\n\
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
		<td><a href=\"#!/url=./files/objectexpr.htm\">Object</a> name or Psets (anything selectable)		</td>\n\
		<td>\n\
 The objects (or psets) under which we want to paste the animations 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UsePosition		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
If TRUE, the paste will try to copy the animation sources in the order of the target\'s animatable parameter.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Animate a path-constrained null. Then, copy and paste this \n\
\' animation onto another (unanimated) path-constrained null.\n\
\'\n\
dim oCircle1,oCircle2,oColl\n\
dim oNull1,oNull2\n\
\'\n\
\' Create two ellipses and put them side by side.\n\
\'\n\
set oCircle1 = CreatePrim(\"Circle\", \"NurbsCurve\")\n\
Rotate oCircle1, 90, 0, 0, siRelative, siAdd, siObj, siXYZ\n\
Scale oCircle1, 1, 0.25, 1, siRelative, siLocal, siObj, siXYZ\n\
\'Make a duplicate copy of the circle.\n\
set oColl = Duplicate(oCircle1, 1 , _\n\
				 siDuplicateHistory, _\n\
				 siSharedParent, _\n\
				 siShareGrouping, _\n\
				 siDuplicateProperties, _\n\
				 siDuplicateAnimation, _\n\
				 siShareConstraints, _ \n\
				 siSetSelection, _\n\
				 siApplyRepeatXForm)\n\
\'Get the duplicated circle\n\
set oCircle2 = oColl(0)\n\
\'Separate the circles\n\
Translate oCircle1 , 0, 0, -2, siAbsolute, siView, siObj, siXYZ\n\
Translate oCircle2 , 0, 0, 2, siAbsolute, siView, siObj, siXYZ\n\
\'\n\
\' ApplyPath will path-constrain the null to the circle and animate it\n\
\' to travel the entire length of the curve. Copy this animation.\n\
\'\n\
set oNull1 = GetPrim(\"Null\")\n\
ApplyPath oNull1, oCircle1, 1, 100, 2, False, False\n\
CopyAllAnimation2 oNull1, siAnySource, siAllParam, False\n\
\'\n\
\' Create a second null, apply a path constraint \n\
\' (no animation), then paste the animation from oNull1\n\
\'\n\
set oNull2 = GetPrim(\"Null\")\n\
ApplyCns \"Path\", oNull2, oCircle2\n\
PasteAllAnimation oNull2\n\
\'\n\
\' show the constraint relation in top view of viewport A\n\
\'\n\
SetValue \"Views.ViewA.TopCamera.camvis.*constraint*\", True\n\
\'\n\
\' Play animation to show that it has been copied\n\
\'\n\
PlayForwardsFromStart</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CopyAllAnimation.html\">CopyAllAnimation</a> <a href=\"#!/url=./si_cmds/CopyAnimation.html\">CopyAnimation</a> <a href=\"#!/url=./si_cmds/PasteAnimation.html\">PasteAnimation</a> <a href=\"#!/url=./si_cmds/CopyAllAnimation2.html\">CopyAllAnimation2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";