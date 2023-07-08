var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ResetTransform</title>\n\
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
            <h1>ResetTransform</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ResetTransform</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Resets the translation, scaling and rotation of the given objects.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ResetTransform( [InputObjs], [Center], [Type], [AxesFilter] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects or components. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected elements			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Center		</td>\n\
		<td><a href=\"#!/url=./si_om/siCenterMode.html\">siCenterMode</a>		</td>\n\
		<td>\n\
 Specifies whether to translate the object or its center 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siObj			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siObj					</td>\n\
					<td>Object					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCtr					</td>\n\
					<td>Object center					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siTransformFilter.html\">siTransformFilter</a>		</td>\n\
		<td>\n\
 Specifies the type of transformation to reset 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSRT			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siScl					</td>\n\
					<td>Reset scaling					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siRot					</td>\n\
					<td>Reset rotation					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siTrn					</td>\n\
					<td>Reset translation					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSR					</td>\n\
					<td>Reset scaling and rotation					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siST					</td>\n\
					<td>Reset scaling and translation					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siRT					</td>\n\
					<td>Reset rotation and translation					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSRT					</td>\n\
					<td>Reset scaling, rotation, and translation					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AxesFilter		</td>\n\
		<td><a href=\"#!/url=./si_om/siAxesFilter.html\">siAxesFilter</a>		</td>\n\
		<td>\n\
 Determines which of the x,y,z arguments are valid 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siXYZ			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siX					</td>\n\
					<td>Filter in X					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siY					</td>\n\
					<td>Filter in Y					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siXY					</td>\n\
					<td>Filter in X & Y					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siZ					</td>\n\
					<td>Filter in Z					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siXZ					</td>\n\
					<td>Filter in X & Z					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siYZ					</td>\n\
					<td>Filter in Y & Z					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siXYZ					</td>\n\
					<td>Filter in X & Y & Z					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example demonstrates how to reset all transformations \n\
\' of the selected objects\n\
\'\n\
NewScene , false\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
Translate , -5.5, 5, -0.5\n\
ResetTransform</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to reset the translation of \n\
# the object center on the X axis\n\
#\n\
app = Application\n\
app.NewScene(\"\", 0)\n\
app.CreatePrim(\"Torus\", \"MeshSurface\")\n\
app.CreatePrim(\"Torus\", \"MeshSurface\")\n\
app.Translate(\"Torus,Torus1\", -5, 0, 0, \"siRelative\", \"siView\", \"siObj\", \"siXYZ\", \n\
	\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", 0, \"\")\n\
app.ResetTransform(\"Torus1\", \"siCtr\", \"siTrn\", \"siX\")</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to reset the scaling \n\
	and rotation transformation of the objects Grid and \n\
	Sphere along the Y and Z axis.\n\
*/\n\
NewScene(null, false);\n\
CreatePrim(\"Grid\", \"MeshSurface\");\n\
CreatePrim(\"Sphere\", \"MeshSurface\");\n\
Scale(\"Grid,Sphere\", 2, 2, 2, siRelative, siLocal, siObj, siXYZ);\n\
Rotate(\"Grid,Sphere\", 0, 6, 0, siRelative, siAdd, siObj, siXYZ);\n\
ResetTransform(\"Grid,Sphere\", siObj, siSR, siYZ);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Translate.html\">Translate</a> <a href=\"#!/url=./si_cmds/Scale.html\">Scale</a> <a href=\"#!/url=./si_cmds/Rotate.html\">Rotate</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";