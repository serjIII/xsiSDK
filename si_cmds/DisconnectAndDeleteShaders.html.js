var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DisconnectAndDeleteShaders</title>\n\
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
            <h1>DisconnectAndDeleteShaders</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">DisconnectAndDeleteShaders</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Deletes the specified list of shaders after disconnecting them. This is a safer approach\n\
than using the <a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a> command on the same list because this\n\
command only deletes the specified shader node in the rendertree (rather than the\n\
entire subtree, which is what would happen with DeleteObj).\n\
<br /><br />\n\
Removes the shader compound ports when an internal connection is broken. Prevents image \n\
clips and materials from being deleted from within the render tree.\n\
<br /><br />\n\
Note: This command does not unnest image clips properly from the current container. \n\
You should use <a href=\"#!/url=./si_cmds/DisconnectAndDeleteOrUnnestShaders.html\">DisconnectAndDeleteOrUnnestShaders</a> instead, or call \n\
<a href=\"#!/url=./si_cmds/DeleteUnusedImageClips.html\">DeleteUnusedImageClips</a> after this call to clean up a container of \n\
unconnected image clips.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>DisconnectAndDeleteShaders( Shaders );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Shaders		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of shaders to delete.  \n\
		This ensures that all the shaders are disconnected before they are deleted, which \n\
		is important in the rendertree, where if you delete a node you only want that node \n\
		to be deleted, and not the entire subtree.  \n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use the DisconnectAndDeleteShaders command by\n\
	creating two shaders in a simple render tree, and deleting the phong without\n\
	deleting the attached fractal.\n\
*/\n\
NewScene( null, false );\n\
// Build our shaders (a Phong and a Fractal)\n\
var oSph = CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
var oPhong = SIApplyShader( \"Phong\", oSph );\n\
var oFractal = BlendInPresets( \"Fractal\", null, null, true, siReplaceNoBlend, \n\
	false, false, true );\n\
// Now display the render tree. A message box appears so that you can see the \n\
// contents of the render tree before deleting one of the shaders. When you are\n\
// ready to proceed, click OK...\n\
OpenView( \"Render Tree\" );\n\
var lResponse = XSIUIToolkit.MsgBox( \"When you are ready to proceed, click OK. \"\n\
	+ \"The message box will close and the DisconnectAndDeleteShaders command \"\n\
	+ \"will remove the shader node only.\", siMsgOkCancel + siMsgInformation, \n\
	\"DisconnectAndDeleteShaders Demo\" );\n\
if ( lResponse == siMsgOk ) {\n\
	DisconnectAndDeleteShaders( oPhong );\n\
} else {\n\
	Application.LogMessage( \"You opted not to complete the demonstration.\" );\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIApplyShader.html\">SIApplyShader</a> <a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a> <a href=\"#!/url=./si_cmds/DisconnectAndDeleteOrUnnestShaders.html\">DisconnectAndDeleteOrUnnestShaders</a> <a href=\"#!/url=./si_cmds/DeleteUnusedImageClips.html\">DeleteUnusedImageClips</a> <a href=\"#!/url=./si_om/Shader.html\">Shader</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";