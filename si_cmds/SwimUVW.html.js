var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SwimUVW</title>\n\
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
            <h1>SwimUVW</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SwimUVW</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Changes the texture projection operator to read from the top of the operator stack (just above Secondary Shape Modeling), so \n\
that the texture projection is applied after all envelope and shape animation. This causes Softimage to reevaluate the UV coordinates \n\
every time the object deforms, and the textures that use these coordinates appear to \"swim\" on the surface of the object.\n\
<br /><br />\n\
SwimUVW takes a list of objects and UV properties (texture projections) as input. If an object is a primitive, \n\
such as a mesh or a NURBS surface, the command changes the current UV properties used by the materials \n\
(see <a href=\"#!/url=./si_om/Material.CurrentUV.html\">Material.CurrentUV</a>) assigned to the object. If a texture projection does not have an operator \n\
(because the operator was frozen), the command has no effect.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SwimUVW( [InputObjs] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects and UV properties (texture projections).			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Set up a sphere with a texture projection and texture image.\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
CreateProjection \"sphere\", , siTxtDefaultPlanarXY, , \"Texture_Projection\"\n\
BlendInTextureLayers , , 1, True, siReplaceAndNoBlendInTextureLayers\n\
SetDisplayMode \"Camera\", \"texturedecal\"\n\
\' Put an animated twist after the texture projection, so the texture sticks to the surface.\n\
ApplyOp \"Twist\", \"sphere\", 3, siPersistentOperation, , 0\n\
SaveKey \"sphere.polymsh.twistop.angle\", 1, -300\n\
SaveKey \"sphere.polymsh.twistop.angle\", 100, 300\n\
MsgBox \"The projection is evaluated before the twist, so the texture sticks to the surface.\"\n\
\' Now modify the projection to swim: the operator is placed at the top of the stack and\n\
\' any deformations occur before the UV property is computed.\n\
SwimUVW \"sphere\"\n\
MsgBox \"The projection is now evaluated after the twist, so the texture swims on the surface.\"\n\
\' Perform a new modeling operation. Note that the texture still swims on the surface.\n\
SelectGeometryComponents \"sphere.pnt[27]\"\n\
Translate , 3.66557060971011, 4.9427099682274, -0.49427099682274, siRelative, siView, siObj, siXYZ, , , , , , , , , , 0\n\
MsgBox \"New modeling operations are inserted in the stack below the texture read position.\"\n\
\' Play back the animation.  Note the texture swims on the surface.\n\
PlayForwardsFromStart</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/StickUVW.html\">StickUVW</a> <a href=\"#!/url=./si_cmds/ReprojectUVW.html\">ReprojectUVW</a> <a href=\"#!/url=./si_cmds/CreateProjection.html\">CreateProjection</a> <a href=\"#!/url=./si_cmds/CreateSubprojection.html\">CreateSubprojection</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";