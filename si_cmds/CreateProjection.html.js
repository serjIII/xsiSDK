var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateProjection</title>\n\
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
            <h1>CreateProjection</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateProjection</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Creates a new texture projection and support, if appropriate,\n\
on the given object. Texture projection helps editing a 2D texture by\n\
precisely controlling every part of the 2D texturing pipeline. <br /><br />\n\
Note: This command uses output arguments. Some scripting languages don\'t\n\
support arguments passed by reference (such as JScript and Python). For more\n\
information on how to handle getting output arguments through a return-value array,\n\
see <a href=\"#!/url=./files/OutputArgArrays.htm\">Output Arguments, Return Values and Output Value Arrays</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CreateProjection( [InputObjs], [Type], [UVDefaultType], [SupportName], [PropertyName], [Parenting], [Fitting], [Camera] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to which the texture support is applied. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siTxtCreationType.html\">siTxtCreationType</a>		</td>\n\
		<td>\n\
 Projection type 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siTxtPlanarXY			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UVDefaultType		</td>\n\
		<td><a href=\"#!/url=./si_om/siTxtDefaultCreationType.html\">siTxtDefaultCreationType</a>		</td>\n\
		<td>\n\
 Default projection type for mesh objects. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siTxtDefaultSpherical			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SupportName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name for the texture support object, if appropriate. Returns the actual name. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Texture_Support			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropertyName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name for the texture projection name. Returns the actual name. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Texture_Projection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parenting		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to parent the texture support to the objects. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Fitting		</td>\n\
		<td><a href=\"#!/url=./si_om/siTxtProjFitMethod.html\">siTxtProjFitMethod</a>		</td>\n\
		<td>\n\
 Method to use to fit the new texture support on the objects (only relevant for planar, cylindrical, spherical and lollipop). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siRelObject			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Camera		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Camera to use if Type is siTxtCamera. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Starts a pick session			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create a sphere, assign default image to scene\'s material:\n\
oSphere = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
SIApplyShaderToCnxPoint \"Image\", \"Sources.Materials.DefaultLib.Scene_Material.Phong.diffuse\"\n\
\' Create the Texture projection:\n\
dim sSupportName, sPropertyName\n\
sSupportName = \"NewSupport\"\n\
sPropertyName = \"NewProjection\"\n\
CreateProjection oSphere, siTxtPlanarXY, siTxtDefaultPlanarXY, sSupportName, sPropertyName, True\n\
LogMessage \"Texture support created: \" &amp; sSupportName\n\
LogMessage \"Texture projection created: \" &amp; sPropertyName\n\
\' View the results:\n\
SetDisplayMode \"Camera\", \"textured\"\n\
\' Running this script should log the following:\n\
\' ---------------------------------------------\n\
\'INFO : \"Texture support created: NewSupport\"\n\
\'INFO : \"Texture projection created: NewProjection\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ConnectToSupport.html\">ConnectToSupport</a> <a href=\"#!/url=./si_cmds/ConnectToProjection.html\">ConnectToProjection</a> <a href=\"#!/url=./si_cmds/CreateSubprojection.html\">CreateSubprojection</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";