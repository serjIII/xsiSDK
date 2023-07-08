var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateSymmetryMap</title>\n\
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
            <h1>CreateSymmetryMap</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateSymmetryMap</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> that is a symmetry map along the \n\
YZ plane, the XZ plane or the XY plane. After you create a symmetry map, every \n\
time you move points on one side, the corresponding points on the other side \n\
of the symmetry map also move.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CreateSymmetryMap( PresetObj, [InputObj], [Name], [PropPresetObj] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a collection of symmetry maps.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (for example, an object obtained from <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/symmetrymapop.htm\">SymmetryMap</a> operator preset 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"SymmetryMap\"			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">SymmetryMap					</td>\n\
					<td>Symmetry map 					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of clusters or objects or points clusters 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the symmetry map property 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Symmetry Map\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropPresetObj		</td>\n\
		<td>Preset object		</td>\n\
		<td>\n\
Symmetry Map Property preset			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Symmetry Map Property\" preset			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example sets up a symmetry map on a sphere and then moves some \n\
\' points on one side only with their corresponding points on the other\n\
\' side moving symmetrically.\n\
NewScene\n\
\' Create a sphere to apply the symmetry map to\n\
Set oSphere = CreatePrim( \"Sphere\", \"NurbsSurface\", \"MySphere\" )\n\
\' Create a symmetry map on the sphere (note how we do not need to specify the \n\
\' preset name of \"SymmetryMap\" for the first argument, since it is the default)\n\
Set oMaps = CreateSymmetryMap( , oSphere, \"MySymmetryMap\" )\n\
\' Log the name of the returned maps.  Here only one.\n\
LogMessage \"Created Map: \" &amp; oMaps(0) \n\
\' Output information of running this script\n\
\'INFO : sphere.polymsh.cls.SymmetryMapCls.MySymmetryMap\n\
\' Move some control points on one side only.\n\
Translate oSphere &amp; \".pnt[(0,7)]\", -1.90216784318022, 0, 0, _\n\
			siRelative, siViewSym, siObj, siXYZ\n\
Translate oSphere &amp; \".pnt[(0,3)]\", -4.39465725765814, 0, 0, _\n\
			siRelative, siViewSym, siObj, siXYZ\n\
Translate oSphere &amp; \".pnt[(0,4)]\", -1.60751873190734, 0, 0, _\n\
			siRelative, siViewSym, siObj, siXYZ\n\
Translate oSphere &amp; \".pnt[(0,8)]\", -0.714956303285471, 0, 0, _\n\
			siRelative, siViewSym, siObj, siXYZ\n\
Translate oSphere &amp; \".pnt[(7,5)]\", -0.570702900944422, 0, 0, _\n\
			siRelative, siViewSym, siObj, siXYZ\n\
\' Make the symmetry map visible in the camera view. \n\
\' This is equivalent to setting the \"Property Maps\" visibility option.\n\
\' Symmetrical areas map red-&gt;blue.\n\
\' Self symmetrical areas are green. \n\
SetValue \"Camera.camvis.objctrlpropmaps\", true\n\
SetDisplayMode \"Camera\", \"constant\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddProp.html\">AddProp</a> <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";