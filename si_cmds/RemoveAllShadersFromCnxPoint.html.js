var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RemoveAllShadersFromCnxPoint</title>\n\
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
            <h1>RemoveAllShadersFromCnxPoint</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RemoveAllShadersFromCnxPoint</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Disconnects all shaders from the specified shader\'s connection points, without the need to \n\
know information about the connected shaders or if shaders are indeed connected. \n\
<br /><br />\n\
The second argument allows the user to specify in detail what types of shader connections\n\
should be disconnected. \n\
<br /><br />\n\
Note: Shaders that are not used anymore once disconnected are automatically deleted.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RemoveAllShadersFromCnxPoint( [InputObjs], [Type] );</pre>		</td>	</tr>\n\
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
 List of connection points. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siShaderCnxPointType.html\">siShaderCnxPointType</a>		</td>\n\
		<td>\n\
 Types of connection points to disconnect. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siShaderCnxPointAll			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to disconnect shaders on a scene object. It\n\
\' also shows how you can find out whether the object\'s material is connected\n\
\' to a shader or a texture.\n\
\'\n\
sPath = XSIUtils.BuildPath( _\n\
	Application.InstallationPath( siFactoryPath ), _\n\
	\"Data\", \"XSI_SAMPLES\", \"Scenes\", \"Rendering\", _\n\
	\"Rendertree_Displacement_Cell.scn\" _\n\
)\n\
OpenScene sPath, False\n\
\' Select the grid and get a pointer to it\n\
SelectObj \"grid\"\n\
Set oGrid = Selection(0)\n\
\' Output at this point (before removing the shaders):\n\
\' INFO : --------------------------------------------\n\
\' INFO : Found a shader on Surface\n\
\' INFO : Found a texture on Displacement\n\
\' INFO : Found a shader on Shadow\n\
\' INFO : Found a shader on Photon\n\
displayDetails oGrid\n\
\' Disconnect the shaders, if any, connected to the grid material Volume,\n\
\' Displacement and Photon connection points. (Note that specifying the \n\
\' Volume parameter is redundant in this case since it is not connected)\n\
Set oCnxPoints = CreateObject( \"XSI.Collection\" )\n\
oCnxPoints.Add oGrid.Material.Parameters( \"volume\" )\n\
oCnxPoints.Add oGrid.Material.Parameters( \"displacement\" )\n\
oCnxPoints.Add oGrid.Material.Parameters( \"photon\" )\n\
RemoveAllShadersFromCnxPoint oCnxPoints, siShaderCnxPointAll\n\
\' Output at this point (notice that we only disconnected the shaders on the\n\
\' Displacement and Photon points so we still have shaders on Surface and\n\
\' Shadow):\n\
\' INFO : --------------------------------------------\n\
\' INFO : Found a shader on Surface\n\
\' INFO : Found a shader on Shadow\n\
displayDetails oGrid\n\
\' ----------------------------------------------------------------------\n\
function displayDetails( in_obj )\n\
	Application.LogMessage \"--------------------------------------------\"\n\
	\' Look for each parameter that is connected to a shader and print its name\n\
	For Each p In in_obj.Material.Parameters\n\
		If TypeName( p.Source ) = \"Shader\" Then\n\
			Application.LogMessage \"Found a shader on \" &amp; p.Name\n\
		ElseIf TypeName( p.Source ) = \"Texture\" Then\n\
			Application.LogMessage \"Found a texture on \" &amp; p.Name\n\
		End If\n\
	Next\n\
end function</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddObjectsToShader.html\">AddObjectsToShader</a> <a href=\"#!/url=./si_cmds/RemoveObjectsFromShader.html\">RemoveObjectsFromShader</a> <a href=\"#!/url=./si_cmds/ApplyShader.html\">ApplyShader</a> <a href=\"#!/url=./si_cmds/RemoveShaderFromCnxPoint.html\">RemoveShaderFromCnxPoint</a> <a href=\"#!/url=./si_cmds/SIConnectShaderToCnxPoint.html\">SIConnectShaderToCnxPoint</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";