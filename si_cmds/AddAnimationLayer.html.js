var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AddAnimationLayer</title>\n\
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
            <h1>AddAnimationLayer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AddAnimationLayer</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a new animation layer above the current animation layer and makes it the current animation layer for the specified objects.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>AddAnimationLayer( [InputObjs], [Name], [MakeCurrent] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name for the new layer. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MakeCurrent		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Make the new layer the current animation layer 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' In this example, an FCurve is created on the XPos param\n\
\' of the sphere. Then, two keys are created (at frame 1,\n\
\' XPos = -2; at frame 30, XPos = 5). A layer is then added\n\
\' to adjust the end frame position. (frame 30, XPos = 8)\n\
\'\n\
NewScene\n\
CreatePrim \"Sphere\", \"NurbsSurface\", \"MySphere\"\n\
\' Add a posx fcurve\n\
AddFCurve \"MySphere.kine.local.posx\"\n\
\' Add two keys, at frame 1 and 30\n\
SaveKey \"MySphere.kine.local.posx\", 1, -2 \n\
SaveKey \"MySphere.kine.local.posx\", 30, 5 \n\
\' Create a new animation layer and make it current\n\
AddAnimationLayer\n\
\' Add two layer keys, at frame 1 and 30\n\
SaveKey \"MySphere.kine.local.posx\", 1, 0 \n\
SaveKey \"MySphere.kine.local.posx\", 30, 3 \n\
\' Set back to layer 0\n\
SetCurrentAnimationLayer ,0\n\
\' Play the animation\n\
PlayForwardsFromStart</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SetCurrentAnimationLayer.html\">SetCurrentAnimationLayer</a> <a href=\"#!/url=./si_cmds/GetCurrentAnimationLayer.html\">GetCurrentAnimationLayer</a> <a href=\"#!/url=./si_cmds/GetNumberOfAnimationLayers.html\">GetNumberOfAnimationLayers</a> <a href=\"#!/url=./si_cmds/DeleteAnimationLayer.html\">DeleteAnimationLayer</a> <a href=\"#!/url=./si_cmds/DuplicateAnimationLayer.html\">DuplicateAnimationLayer</a> <a href=\"#!/url=./si_cmds/LockAnimationLayer.html\">LockAnimationLayer</a> <a href=\"#!/url=./si_cmds/UnlockAnimationLayer.html\">UnlockAnimationLayer</a> <a href=\"#!/url=./si_cmds/IsAnimationLayerLocked.html\">IsAnimationLayerLocked</a> <a href=\"#!/url=./si_cmds/RemoveAnimation.html\">RemoveAnimation</a> <a href=\"#!/url=./si_cmds/RemoveAllAnimation.html\">RemoveAllAnimation</a> <a href=\"#!/url=./si_cmds/SaveKey.html\">SaveKey</a> <a href=\"#!/url=./si_cmds/RemoveKey.html\">RemoveKey</a> <a href=\"#!/url=./si_cmds/PrevKey.html\">PrevKey</a> <a href=\"#!/url=./si_cmds/FirstKey.html\">FirstKey</a> <a href=\"#!/url=./si_cmds/LastKey.html\">LastKey</a> <a href=\"#!/url=./si_om/Parameter.AddFCurve.html\">Parameter.AddFCurve</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";