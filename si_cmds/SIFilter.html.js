var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIFilter</title>\n\
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
            <h1>SIFilter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIFilter</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Filters a given list of elements according to the specified filtering type and \n\
returns the filtered list. When used with <a href=\"#!/url=./si_cmds/PickObject.html\">PickObject</a>, this allows \n\
for validating the picked object against the proper filter, before passing the element \n\
to another command.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SIFilter( [InputObjs], [Type], [Include], [Mode] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the filtered list as an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.</p></div>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to filter. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a> to use (eg., scene object, operator, primitive, \n\
		material, etc.).\n\
		<br /><br />\n\
		Note: Calling SIFilter with a custom filter name containing spaces will fail. \n\
		You can overcome this limitation by replacing all space characters with \n\
		underscores.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siGenericObjectFilter			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Include		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to include objects that match filter, False to exclude objects that match filter. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./si_om/siFilterMode.html\">siFilterMode</a>		</td>\n\
		<td>\n\
 Filter lookup mode. The full search is the most powerful, but requires more time. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siQuickSearch			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create 2 objects, then select ALL objects in the scene:\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
SelectAll\n\
\' From the selection list collection, get the light and camera only:\n\
dim list\n\
set list = GetValue ( \"SelectionList\" )\n\
set LigAndCam = SIFilter( list, siLightFilter &amp; \", \" &amp; siCameraFilter )\n\
if TypeName( LigAndCam ) &lt;&gt; \"Nothing\" then\n\
	LogMessage LigAndCam.Count &amp; \" light &amp; camera(s) found.\"\n\
	LogMessage vbTab &amp; LigAndCam\n\
end if\n\
\' Now get the 3D objects only, from the currently selected objects:\n\
set AllObjects = SIFilter( , siObjectFilter )\n\
if TypeName( AllObjects ) &lt;&gt; \"Nothing\" then\n\
	set objects = SIFilter( AllObjects, \"polygon_mesh\", True )\n\
	LogMessage objects.Count &amp; \" object(s) found.\"\n\
	LogMessage vbTab &amp; objects(0) &amp; \", \" &amp; objects(1) \n\
	\' Filter out polygon meshes objects:\n\
	set non3DObjects = SIFilter( AllObjects, \"polygon_mesh\", False )\n\
	if TypeName( non3DObjects ) &lt;&gt; \"Nothing\" then\n\
		LogMessage non3DObjects.Count &amp; \" non-3D object(s) found.\"\n\
		for each non3DObj in non3DObjects\n\
			LogMessage vbTab &amp; non3DObj \n\
		next\n\
	end if\n\
end if\n\
\' Running this script should log the following:\n\
\' ---------------------------------------------\n\
\'INFO : \"2 light &amp; camera(s) found.\"\n\
\'INFO : \"	Camera,light\"\n\
\'INFO : \"2 object(s) found.\"\n\
\'INFO : \"	sphere, cone\"\n\
\'INFO : \"4 non-3D object(s) found.\"\n\
\'INFO : \"	Camera_Root\"\n\
\'INFO : \"	Camera\"\n\
\'INFO : \"	Camera_Interest\"\n\
\'INFO : \"	light\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/EnumElements.html\">EnumElements</a> <a href=\"#!/url=./si_cmds/SIMatchSubComponent.html\">SIMatchSubComponent</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";