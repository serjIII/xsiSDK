var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>InvertSelection</title>\n\
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
            <h1>InvertSelection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">InvertSelection</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Deselects the elements that are currently selected, and selects the elements that are selected.\n\
<br /><br />\n\
Note: If the SelectionList argument contains an error, the command fails.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>InvertSelection( [SelFilter], [CheckComponentVisibility], [CheckObjectSelectability] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">SelFilter		</td>\n\
		<td><a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
		<td>\n\
 Selection filter that specifies what type of elements to select. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection filter			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CheckComponentVisibility		</td>\n\
		<td><a href=\"#!/url=./si_om/siComponentVisibilityMode.html\">siComponentVisibilityMode</a>		</td>\n\
		<td>\n\
Specifies whether the command should apply to visible components only.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siIgnoreComponentVisibility			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siIgnoreComponentVisibility					</td>\n\
					<td>The command will ignore component visibility					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCheckComponentVisibility					</td>\n\
					<td>The command will apply to visible components only					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CheckObjectSelectability		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether to select objects that marked as unselectable. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">False					</td>\n\
					<td>Select objects even if they are marked as unselectable.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">True					</td>\n\
					<td>Do not select objects if they are marked as unselectable.					</td>\n\
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
<td class=\"example\"><pre class=\"vbscript\">NewScene \n\
\' Create some objects and an extra light to play with\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
Translate , -6, -0.995037190209989, 9.95037190209989E-02, siAbsolute, siView, siObj, siXYZ, True, , , , , , , , , 0\n\
Scale , 0.46615087040619, 0.46615087040619, 0.46615087040619, siRelative, siGlobal, siObj, siXYZ, , , , , , , , 0\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
Translate , 6, -0.995037190209989, 9.95037190209989E-02, siAbsolute, siView, siObj, siXYZ, True, , , , , , , , , 0\n\
GetPrimLight \"Infinite.Preset\", \"Infinite\"\n\
SelectObj \"Cube,Infinite\"\n\
\' Deselect all selected objects, and select all unselected objects \n\
PrintSelection\n\
InvertSelection \"object\"\n\
PrintSelection\n\
\' Note that when you use a filter, everything that does not match the filter is unselected \n\
\' For example, this command inverts the selection status of all the lights, and unselects \n\
\' all other elements in the scene. \n\
InvertSelection \"light\" \n\
PrintSelection\n\
\' Invert the selection of some components\n\
SetSelFilter \"Vertex\"\n\
SelectGeometryComponents \"cube.pnt[3,4]\"\n\
PrintSelection\n\
InvertSelection \"point\" \n\
PrintSelection\n\
Sub PrintSelection\n\
	msg = \"Selection:\"\n\
	if Selection.count = 0 then\n\
		msg = msg &amp; \" &lt;empty&gt;\"\n\
	else\n\
		for each obj in Selection\n\
			msg = msg &amp; \" \" &amp; obj\n\
		next\n\
	end if\n\
	logmessage msg\n\
End Sub</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene \n\
\' Create a sphere, hide some polygons\n\
CreatePrim \"Sphere\", \"MeshSurface\" \n\
ActivatePolygonSelTool \n\
SelectGeometryComponents \"sphere.poly[4,12,20,28,36,44,52,60]\"\n\
ToggleVisibility\n\
\' Select the right half of the sphere.\n\
SelectGeometryComponents \"sphere.poly[16-47]\"\n\
\' Invert the poly selection, ignoring the fact that some of the polys are hidden\n\
MsgBox \"Will now InvertSelection ignoring component visibility...\"\n\
InvertSelection , siIgnoreComponentVisibility\n\
MsgBox \"Notice some of the hidden polygons are selected\"\n\
\' Invert the poly selection again, taking into account the fact that some of the polys are hidden\n\
MsgBox \"Will now InvertSelection again, but checking component visibility...\"\n\
InvertSelection , siCheckComponentVisibility \n\
MsgBox \"Notice no hidden polygons are selected\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";