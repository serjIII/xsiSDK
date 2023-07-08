var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AnimationSourceItem.Source</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>AnimationSourceItem.Source</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a>.Source</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns an animation source. You can get an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>, <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a> \n\
or a <a href=\"#!/url=./si_om/StaticSource.html\">StaticSource</a>) but you can only set an fcurve or a static animation source.\n\
<br /><br />\n\
If the new source is null or not a valid source then an invalid argument error is raised.<br /><br />\n\
If the new source is used by a locked animation layer, access denied error is raised (see <a href=\"#!/url=./si_cmds/IsAnimationLayerLocked.html\">IsAnimationLayerLocked</a>).<br /><br />\n\
Note: If the AnimationSourceItem is a compound (siAnimCompoundAnimItem or siShapeCompoundAnimItem)\n\
this property will fail. You can test for whether this is a compound or not by testing the AnimationSourceItem \n\
with the base property <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
AnimationSource rtn = AnimationSourceItem.Source;\n\
// set accessor\n\
AnimationSourceItem.Source = AnimationSource;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to create a simple actionsource from some position animation. \n\
\' The AnimationSourceItem.Source property is used to get the fcurve source and modify the keys.\n\
\'\n\
NewScene , false\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
\' These commands were cut and pasted from scripting history\n\
\' and modified to work in a script. They create a simple \n\
\' actionsource from some animation on the null\'s position\n\
set oNull = GetPrim( \"Null\" )\n\
strPosParams = oNull &amp; \".kine.local.posx,\" &amp; oNull &amp; \".kine.local.posy,\" &amp; oNull &amp; \".kine.local.posz\"\n\
Translate oNull, -8.153, 7.015, -0.702, siRelative, siView, siObj, siXYZ\n\
SaveKey strPosParams, 1.000\n\
Translate oNull, 8.350, -8.935, 0.894, siRelative, siView, siObj, siXYZ\n\
SaveKey strPosParams, 50.000\n\
Translate oNull, 9.413, 8.935, -0.894, siRelative, siView, siObj, siXYZ\n\
SaveKey strPosParams, 100.000\n\
StoreAction oRoot, strPosParams, 2, \"StoredFcvAction\", True, 1, 100\n\
\' Get the actionsource from the model\n\
set oActionSource = oRoot.Sources(\"StoredFcvAction\")\n\
\' Find animation source item with posx\n\
for each oSourceItem in oActionSource.SourceItems\n\
	if InStr(1,CStr(oSourceItem.Target),\"posx\",vbTextCompare)&lt;&gt;0 then\n\
		exit for\n\
	end if\n\
next\n\
\' Change the fcurve keys on the posx source\n\
set oFCurve = oSourceItem.Source\n\
oFCurve.SetKeys Array(1, -8, 50, 8, 100, 9 )\n\
\' Apply actionsource with modified posx fcurve\n\
AddClip oRoot, oActionSource\n\
\' Now find the clip and test the source items\n\
set oClip = oRoot.Mixer.Clips(0)\n\
for each oAnimSrcItem in oClip.Source.SourceItems\n\
	LogMessage oAnimSrcItem.FullName &amp; \" is active: \" &amp; oAnimSrcItem.Active\n\
next\n\
\' Output of above script:\n\
\'INFO : muting null.kine.local.posx\n\
\'INFO : AnimationSourceItem is active: False\n\
\'INFO : AnimationSourceItem is active: True\n\
\'INFO : AnimationSourceItem is active: True</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";