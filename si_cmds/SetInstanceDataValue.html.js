var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetInstanceDataValue</title>\n\
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
            <h1>SetInstanceDataValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetInstanceDataValue</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets instance-specific data for a parameter. Some properties, such as materials, can be shared \n\
with several objects. In some situations, it is necessary to assign different parameter values \n\
to one of the object\'s properties. <br /><br />\n\
Note that the value of the parameter is context-specific--its value depends on the object. \n\
Currently this command is only used for specifying which Texture Projection should be used for \n\
a shader. If the command is called with an empty list of objects, all objects are given this value, \n\
and all future objects created that use this parameter will have this value as well. If the command \n\
is called with the value set to an empty string then the instance data value is reset.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetInstanceDataValue( [InputObjs], InputObj, Value );</pre>		</td>	</tr>\n\
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
Empty, all the objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>s to set. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 New data 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates setting a parameter on a shader so that it uses \n\
\' two different projections depending on which item it applies to. In this\n\
\' case, we will create one projection for the cube and another for the sphere\n\
\' and then tell the shader to use the CubeProjection on the cube and the\n\
\' SphereProjection on the sphere.\n\
\'\n\
NewScene , false\n\
\' Get the default pass\n\
Set oDefPass = GetValue( \"Passes.Default_Pass\" )\n\
\' Create a cube and a sphere\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
Translate \"sphere\", 5.987, 0.039, -0.004, siRelative, siView, siObj, siXYZ\n\
\' Create an XZ texture projection on the object\n\
CreateProjection \"cube,sphere\", \"siTxtPlanarXZ\", _\n\
	\"siTxtDefaultPlanarXY\", , \"WrongProjection\"\n\
\' Create XY texture projections on the objects, named \"CubeProjection\" \n\
\' and \"SphereProjection\"\n\
CreateProjection \"cube\", \"siTxtPlanarXY\", _\n\
	\"siTxtDefaultPlanarXY\", , \"CubeProjection\"\n\
CreateProjection \"sphere\", \"siTxtPlanarXY\", _\n\
	\"siTxtDefaultPlanarXZ\", , \"SphereProjection\"\n\
\' Put the cube and sphere in a group, put a material on it, with \n\
\' an image attached to diffuse.\n\
ToggleSelection \"cube\"\n\
CreateGroup\n\
ApplyShader\n\
SIApplyShaderToCnxPoint \"Image\", \"sphere.Material.Phong.diffuse\"\n\
\' Now render one frame of the scene to see the effect  \n\
\' (the default image was plunked directly on the top of the \n\
\' cube and sphere)\n\
RenderPasses oDefPass, 1, 1\n\
\' At this point, the image shader will, by default, choose the \n\
\' texture projection named \"WrongProjection\".  We want to tell \n\
\' the image shader that on the cube, it should use \"CubeProjection\", \n\
\' and on the sphere, it should use \"SphereProjection\".  This \n\
\' means that the parameter is instance-specific, so we use \n\
\' the SetInstanceDataValue command\n\
\' This line sets the parameter \"tspace_id\" to be \"SphereProjection\" \n\
\' for the object \"sphere\"\n\
SetInstanceDataValue \"sphere\", _\n\
	\"Group.Material.Phong.Image.tspace_id\", \"SphereProjection\"\n\
\' This line sets the parameter \"tspace_id\" to be \"CubeProjection\" \n\
\' for the object \"cube\"\n\
SetInstanceDataValue \"cube\", _\n\
	\"Group.Material.Phong.Image.tspace_id\", \"CubeProjection\"\n\
\' Now render one frame of the scene to see the effect \n\
\' (the default image was applied to the visible area of the \n\
\' cube and sphere)\n\
RenderPasses oDefPass, 1, 1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";