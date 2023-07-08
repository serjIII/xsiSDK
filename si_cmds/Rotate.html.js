var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Rotate</title>\n\
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
            <h1>Rotate</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Rotate</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Rotates elements to an absolute rotation or by a relative amount.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Rotate( [InputObjs], [X], [Y], [Z], [Delta], [RefMode], [Center], [AxesFilter], [Reference], [SplitLocalComponents], [PropTagOnly], [Pivot], [PivotX], [PivotY], [PivotZ], [ConstructionMode], [SlideComponents] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects or components to rotate. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected elements			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">X		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 X rotation  in degrees			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Y		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Y rotation 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Z		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Z rotation 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Delta		</td>\n\
		<td><a href=\"#!/url=./si_om/siDeltaMode.html\">siDeltaMode</a>		</td>\n\
		<td>\n\
 Specifies whether to rotate the object a relative or absolute amount 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siRelative			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RefMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siRefMode.html\">siRefMode</a>		</td>\n\
		<td>\n\
 The reference mode to rotate within 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siGlobal			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Center		</td>\n\
		<td><a href=\"#!/url=./si_om/siCenterMode.html\">siCenterMode</a>		</td>\n\
		<td>\n\
 Specifies whether to rotate the object or its center. <br /><br />Note: If an object does not have a moveable center, then rotating its center rotates the object. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siObj			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AxesFilter		</td>\n\
		<td><a href=\"#!/url=./si_om/siAxesFilter.html\">siAxesFilter</a>		</td>\n\
		<td>\n\
 Determines which of the x,y,z arguments are valid (used with Absolute mode only). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siXYZ			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Reference		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 In By Reference mode, the rotation is relative to the center of this object 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">					</td>\n\
					<td>Reference not used (World)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Grid					</td>\n\
					<td>Use the center of the Grid					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SplitLocalComponents		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether to rotate all components independently in Local mode 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
 If true the specified global pivot point is used for rotation 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
 In which construction mode will the deformation be applied. This only applies when rotating geometry components.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
<td class=\"example\"><pre class=\"vbscript\">dim object\n\
set object = GetPrim( \"Null\" )\n\
\' Rotate the selected objects 5 degrees about the global X\n\
Rotate ,5\n\
\' Rotate the selected objects about the y-axis to 5 degrees in world space\n\
Rotate ,,5,,siAbsolute\n\
\' Rotate the selected objects to align with their parents rotation\n\
Rotate ,,,,siAbsolute,siParent\n\
\' Rotate the objects in the selection 6 degrees about the Z-axis of their parent\'s centers\n\
Rotate ,,,6,siRelative,siParent\n\
\' Rotate a given object 5 degrees about their X axis\n\
Rotate object,5,0,0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Translate.html\">Translate</a> <a href=\"#!/url=./si_cmds/Scale.html\">Scale</a> <a href=\"#!/url=./si_cmds/ResetTransform.html\">ResetTransform</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";