var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Translate</title>\n\
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
            <h1>Translate</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Translate</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Translates elements to an absolute position or by a relative amount. Translation can be performed on all axes, or limited to a specific axis.  It can also snap to the 3D grid.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Translate( [InputObjs], [X], [Y], [Z], [Delta], [RefMode], [Center], [AxesFilter], [Snap], [SnapReference], [SnapFilter], [SplitLocalComponents], [PropTagOnly], [Pivot], [PivotX], [PivotY], [PivotZ], [ConstructionMode], [SlideComponents] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects or components to translate. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected elements			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">X		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 X position 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Y		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Y position 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Z		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Z position 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Delta		</td>\n\
		<td><a href=\"#!/url=./si_om/siDeltaMode.html\">siDeltaMode</a>		</td>\n\
		<td>\n\
 Specifies whether the translation is relative or absolute 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siRelative			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RefMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siRefMode.html\">siRefMode</a>		</td>\n\
		<td>\n\
 The reference mode to translate within 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siGlobal			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Center		</td>\n\
		<td><a href=\"#!/url=./si_om/siCenterMode.html\">siCenterMode</a>		</td>\n\
		<td>\n\
Specifies whether to translate the object or its center. <br /><br />Note: If an object does not have a moveable center, then translating its center moves the object.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siObj			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AxesFilter		</td>\n\
		<td><a href=\"#!/url=./si_om/siAxesFilter.html\">siAxesFilter</a>		</td>\n\
		<td>\n\
 Determines which of the x,y,z arguments are valid (used with Absolute mode only).			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siXYZ			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Snap		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether to snap the translation values to the nearest 3D grid increment 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SnapReference		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/objectexpr.htm\">Object Name</a> reference frame for snap filtering. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SnapFilter		</td>\n\
		<td><a href=\"#!/url=./si_om/siAxesFilter.html\">siAxesFilter</a>		</td>\n\
		<td>\n\
 Optional x,y,z absolute snap filter 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siXYZ			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SplitLocalComponents		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether to translate all components independently in Local mode 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropTagOnly		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether to restrict proportional to tagged components only 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Pivot		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 If true the specified global pivot point is used for snapping 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PivotX		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 X position of the pivot point			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PivotY		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Y position of the pivot point			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PivotZ		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Z position of the pivot point			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConstructionMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siConstructionMode.html\">siConstructionMode</a>		</td>\n\
		<td>\n\
 In which construction mode will the deformation be applied. This only applies when translating geometry components.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Use the current construction mode			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SlideComponents		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Constrain components to surface during translation. Works like shrink wrap for points/polygons while edges are constrained along adjacent polygon edges. Currently only supported for mesh objects.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create a Sphere\n\
CreatePrim \"Sphere\", \"NurbsSurface\", \"MySphere\"\n\
\' Translate the Sphere by (6,6,6) using siRelative mode\n\
translate \"MySphere\", 2, 2, 2, siRelative\n\
translate \"MySphere\", 2, 2, 2, siRelative\n\
translate \"MySphere\", 2, 2, 2, siRelative\n\
\' Translate the Sphere to (2,2,2) using Absolute mode\n\
translate \"MySphere\", 2, 2, 2, siAbsolute, , , siXYZ\n\
\' Return to position (0,0,0)\n\
translate \"MySphere\", , , , siAbsolute</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Scale.html\">Scale</a> <a href=\"#!/url=./si_cmds/Rotate.html\">Rotate</a> <a href=\"#!/url=./si_cmds/ResetTransform.html\">ResetTransform</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";