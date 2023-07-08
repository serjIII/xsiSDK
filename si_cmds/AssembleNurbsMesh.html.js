var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AssembleNurbsMesh</title>\n\
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
            <h1>AssembleNurbsMesh</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AssembleNurbsMesh</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Assembles surfaces into a surface mesh.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>AssembleNurbsMesh( InputObj, [Tolerance], [CopyUserCluster], [CopyMaterial], [CenterGeomCenter] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of nurbs surfaces. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Tolerance		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Tolerance (a value between 0.0 to 1.0) for building topology. Used to check if two points can be treated as equal. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.15			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CopyUserCluster		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to copy clusters. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CopyMaterial		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to copy materials and textures. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CenterGeomCenter		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to move the center to the geometric center. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example assembles 4 grids.\n\
\'Assemble is not an operator and its inputs can be deleted.\n\
newscene\n\
\'Create grids to assemble\n\
CreatePrim \"Grid\", \"NurbsSurface\"\n\
Duplicate \"grid\", , 2, 1, 1, 0, 0, 1, 0, 1\n\
Translate , 8, 0, 0, siAbsolute, siParent, siObj, siX\n\
ToggleSelection \"grid\", , True\n\
Duplicate \"grid1,grid\", , 2, 1, 1, 0, 0, 1, 0, 1\n\
Translate , 0, 0, 8, siAbsolute, siParent, siObj, siZ\n\
ToggleSelection \"grid\", , True\n\
ToggleSelection \"grid1\", , True\n\
\'Assemble selection without carrying over user clusters nor material\n\
\'The tolerance gap to assemble is 0.15 softimage units.\n\
AssembleNurbsMesh , 0.15, False, False, True\n\
SelectObj \"surfmsh\"\n\
AutoInspect \"surfmsh\", , siRecycle\n\
\'Delete the input grids... Assemble is not linked by an operator.\n\
SelectObj \"grid\"\n\
ToggleSelection \"grid1\"\n\
ToggleSelection \"grid2\"\n\
ToggleSelection \"grid3\"\n\
DeleteObj \"grid,grid1,grid2,grid3\"\n\
\'Move some points, notice that the seams stay together.\n\
SelectObj \"surfmsh\", , True\n\
ActivateVertexSelTool\n\
SelectGeometryComponents \"surfmsh.pnt[(0,0,7),(0,1,7),(0,2,7),(0,0,8),(0,1,8),(0,2,8),(1,8,7),(1,9,7),(1,10,7),(1,8,8),(1,9,8),(1,10,8)]\"\n\
Translate , 0, 5, 0, siRelative, siView, siObj, siXYZ\n\
SelectGeometryComponents \"surfmsh.pnt[(0,0,3),(1,10,3)]\"\n\
Translate , 0, 10, 0, siAbsolute, siParent, siObj, siY</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";