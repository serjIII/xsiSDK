var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SavePivotKey</title>\n\
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
            <h1>SavePivotKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SavePivotKey</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Key frames current values on pivot and pivot compensation parameters of the given S,R,T channels.\n\
The fcurves on pivot and pivot compensation have constant interpolation - pivot and pivot compensation require \n\
constant values to balance correctly.   \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SavePivotKey( [InputObjs], [Type], [Time] );</pre>		</td>	</tr>\n\
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
List of objects to key			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siTransformFilter.html\">siTransformFilter</a>		</td>\n\
		<td>\n\
 Specifies the type of transformation to reset 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSRT			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 Key frames are set at this frame. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Key frame			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example animates rotation and pivot point of a cube, \n\
\' creating a rolling cube animation. \n\
\'\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
SetValue \"cube.polymsh.geom.cube.length\", 2\n\
Translate , -5, 1, 0, siAbsolute, siPivot, siObj, siXYZ, , , , , , , , , , 0\n\
SetValue \"Camera.camvis.compobjselcenterpivot\", True\n\
\'save initial rotation key, move pivot and save pivot key\n\
SaveKey \"cube.kine.local.rotx,cube.kine.local.roty,cube.kine.local.rotz\", 1\n\
\'move pivot and save pivot key at frame 1\n\
SetValue \"cube.kine.local.pposx\", 1\n\
SetValue \"cube.kine.local.pposy\", -1\n\
SavePivotKey \"cube\", siTrn, 1\n\
Rot90AndKey \"cube\", 10\n\
SetValue \"cube.kine.local.pposy\", 1\n\
SavePivotKey \"cube\", siTrn, 10\n\
Rot90AndKey \"cube\", 20\n\
SetValue \"cube.kine.local.pposx\", -1\n\
SavePivotKey \"cube\", siTrn, 20\n\
Rot90AndKey \"cube\", 30\n\
SetValue \"cube.kine.local.pposy\", -1\n\
SavePivotKey \"cube\", siTrn, 30\n\
Rot90AndKey \"cube\", 40\n\
SetValue \"cube.kine.local.pposx\", 1\n\
SavePivotKey \"cube\", siTrn, 40\n\
Rot90AndKey \"cube\", 50\n\
SetValue \"cube.kine.local.pposy\", 1\n\
SavePivotKey \"cube\", siTrn, 50\n\
Rot90AndKey \"cube\", 60\n\
sub Rot90AndKey( obj, in_frame )\n\
	\'rotate about pivot point and save rotation key\n\
	SetValue \"PlayControl.Key\", in_frame\n\
	SetValue \"PlayControl.Current\", in_frame\n\
	Rotate obj, 0, 0, -90, siRelative, siAdd, siObj, siXYZ, , , , , , , , 0\n\
	SaveKey obj&amp;\".kine.local.rotx,\"&amp;obj&amp;\".kine.local.roty,\"&amp;obj&amp;\".kine.local.rotz\", in_frame\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SaveKey.html\">SaveKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";