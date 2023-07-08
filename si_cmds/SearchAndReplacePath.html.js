var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SearchAndReplacePath</title>\n\
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
            <h1>SearchAndReplacePath</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SearchAndReplacePath</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Updates the file paths for files that are used in the scene. For example, when your picture \n\
directory location changes. You can view the list of paths, also called the \'external file list\'\n\
by selecting Source Paths from the File menu.<br /><br />\n\
You can use this command to rename all files in a specific category (eg., all Pictures) or \n\
to rename every file in the external file list. If no arguments are specified, a property page\n\
appears asking you to enter the input values.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SearchAndReplacePath( [Category], [OldString], [NewString], [CaseSensitive], [Files] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Category		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Category of files to change. This corresponds to the Category column in the \n\
		File > Source Paths dialog. \n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
All			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">All					</td>\n\
					<td>All files in the ExternalFilesList.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Actions					</td>\n\
					<td>All actions(\".eani\") files.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Audio					</td>\n\
					<td>All audio (\".wav\", \".aiff\", \".mov\", etc.) files.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Models					</td>\n\
					<td>All model (\".emdl\") files.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">MatLib					</td>\n\
					<td>All material library(\".xsi\") files.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Pictures					</td>\n\
					<td>All picture (\".pic\", \".tga\", \".gif\", etc.) files.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Render_Pictures					</td>\n\
					<td>All pictures for rendering ex: HDR.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Synoptic					</td>\n\
					<td>All synoptic (\".htm\", \".html\") files.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Thumbnails					</td>\n\
					<td>All Thumbnails files.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OldString		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The string to search for in the path(s) specified. This can be the name of a directory \n\
		(eg., \"fillet\" in \"c:\\users\\fillet\\src\"), an entire path (eg., \"c:\\users\\fillet\\src\"), \n\
		or a substring of the directory (eg., \"fill\" in \"c:\\users\\fillet\\src\").\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If this parameter is not specified, a property page pops up asking for input.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NewString		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The string to replace the OldString with in the path(s) specified.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If this parameter is not specified, a property page pops up asking for input.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CaseSensitive		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to perform the search-and-replace in a case-sensitive mode.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Files		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
\n\
		A collection of <a href=\"#!/url=./si_om/FileReference.html\">FileReference</a> objects to be processed. \n\
		If nothing is specified, all external files used by the scene will be \n\
		processed. This is used by the External File Manager dialog. \n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//----------------------------------------------------------------------------\n\
//\n\
// This example demonstrates how to search and replace a portion of\n\
// the path in the external file list.\n\
//\n\
//----------------------------------------------------------------------------\n\
NewScene( null, false );\n\
// First add the no_icon pic to the external file list by adding a texture\n\
CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
BlendInPresets( null, null, 0, true, siReplaceNoBlend );\n\
var oExternalFileList = GetValue( \"Project.ExternalFilesList\" );\n\
// Print current external file list before SearchAndReplacePath\n\
Application.LogMessage( \"Original paths:\" );\n\
for ( var i=0; i&lt; oExternalFileList.Count; i++ ) {\n\
	Application.LogMessage( oExternalFileList.Item(i) );\n\
}\n\
// Change the pictures (only 1 in this case) to a new name which will be invalid\n\
SearchAndReplacePath( \"Pictures\", \"noIcon\", \"missingIcon\" );\n\
// Print replaced external file list\n\
oExternalFileList = GetValue( \"Project.ExternalFilesList\" );\n\
Application.LogMessage( \"Changed paths:\" );\n\
for (i=0; i&lt; oExternalFileList.Count; i++) {\n\
	Application.LogMessage( oExternalFileList.Item(i) );\n\
}\n\
// Change back the pictures to the original filename.\n\
SearchAndReplacePath( \"Pictures\", \"missing\", \"no\" );\n\
// Print restored external file list\n\
oExternalFileList = GetValue( \"Project.ExternalFilesList\" );\n\
Application.LogMessage( \"Restored paths:\" );\n\
for ( i=0; i&lt; oExternalFileList.Count; i++ )\n\
{\n\
	Application.LogMessage( oExternalFileList.Item(i) );\n\
}\n\
//----------------------------------------------------------------------------\n\
// Output of above script:\n\
//----------------------------------------------------------------------------\n\
// INFO : Original paths:\n\
// INFO : $XSI_HOME/Application/rsrc/noIcon.pic\n\
// INFO : Changing $XSI_HOME/Application/rsrc/noIcon.pic To $XSI_HOME/Application/rsrc/missingIcon.pic\n\
// INFO : Changed paths:\n\
// INFO : $XSI_HOME/Application/rsrc/missingIcon.pic\n\
// INFO : Changing $XSI_HOME/Application/rsrc/missingIcon.pic To $XSI_HOME/Application/rsrc/noIcon.pic\n\
// INFO : Restored paths:\n\
// INFO : $XSI_HOME/Application/rsrc/noIcon.pic</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FileReference.html\">FileReference</a> <a href=\"#!/url=./si_om/Scene.GetExternalFile.html\">Scene.GetExternalFile</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";