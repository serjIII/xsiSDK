var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FindFilesInFolder</title>\n\
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
            <h1>FindFilesInFolder</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FindFilesInFolder</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Searches a folder for files with names that match a regular expression. The search is not recursive: \n\
only the specified folder is searched. On Windows, the search is case-insensitive; on Linux, it is case-sensitive.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = FindFilesInFolder( Directory, [RegularExpression], [FindAllMatches], [ReturnFullPath] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
By default, FindFilesInFolder returns the name of the first file that matches the regular expression. \n\
If no match is found, an empty string is returned.<br /><br />\n\
If FindAllMatches is True, FindFilesInFolder returns a JScript <a href=\"#!/url=./files/Array.htm\">Array</a> that contains the names of \n\
all the files that match. The VBScript example on this page shows how to handle this JScript array in VBScript.\n\
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
		<td class=\"name\">Directory		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Full path of the folder to search		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RegularExpression		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
A correctly-formed regular expression			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\".*\", which matches all files			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FindAllMatches		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to return all files that match the regular expression.\n\
	False to return only the first file that matches.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ReturnFullPath		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to return the full path name of the files that match. False to\n\
	return only the file name.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
true			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example that shows how to get all the .scntoc files in the \n\
	current project\n\
*/\n\
var strTestFolder = XSIUtils.BuildPath( Application.InstallationPath( siProjectPath ), \"Scenes\" ) ;\n\
/*\n\
	This regular expression matches any string\n\
	that ends with \".scntoc\". This is the same\n\
	as the command-line wildcard \"*.scntoc\".\n\
*/\n\
var regularExpressionToMatch = \".*\\.scntoc$\" ;\n\
var aTocFiles = FindFilesInFolder( \n\
			strTestFolder, \n\
			regularExpressionToMatch, \n\
			true, 			// Find all matches\n\
			false ) ;		// Return file name only\n\
					\n\
				\n\
strMsg = \"\\nFound the following .scntoc files in \" + strTestFolder + \"\\n\" ;\n\
	\n\
for ( var i = 0 ; i &lt; aTocFiles.length ; i++ )\n\
{\n\
	strMsg += aTocFiles[i] + \"\\n\" ;\n\
}\n\
Application.LogMessage( strMsg ) ;</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	Example that shows how to get the list of .scntoc files\n\
\'\n\
\'in a folder.\n\
dim strTestFolder, strTocFiles, strMsg, aTocFiles, regularExpressionToMatch\n\
strTestFolder = XSIUtils.BuildPath( Application.InstallationPath( siProjectPath ),\"Scenes\" ) \n\
\' This regular expression matches any string\n\
\' that ends with \".scntoc\". This is the same\n\
\' as the command-line wildcard \"*.scntoc\".\n\
regularExpressionToMatch = \".*\\.scntoc$\" \n\
\'The command returns a JScript array, which appears as a \n\
\'comma-delimited string in VBScript\n\
strTocFiles = FindFilesInFolder( _\n\
			strTestFolder, _\n\
			regularExpressionToMatch, _\n\
			true, 		 _	\n\
			false )\n\
\'It is easy to convert it to a VBScript array\n\
aTocFiles = split( strTocFiles, \",\" )\n\
									\n\
strMsg = vbCrLf &amp; \"Found the following .scntoc files in \" &amp; strTestFolder &amp; vbCrLf	\n\
for i = 0 to Ubound( aTocFiles )\n\
	strMsg = strMsg &amp; aTocFiles(i) &amp; vbCrLf \n\
next\n\
Application.LogMessage strMsg</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how the FindFilesInFolder command could\n\
	be implemented in JScript as a self-installed custom command.  \n\
	The custom command uses the FileSystemObject class and\n\
	JScript Regular Expression support\n\
*/\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Softimage SDK\";\n\
	in_reg.Name = \"FindFilesInFolderExample\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
	in_reg.RegisterCommand(\"FindFilesInFolder\",\"FindFilesInFolder\");\n\
	return true;\n\
}\n\
function FindFilesInFolder_Init( ctxt )\n\
{\n\
	var oCmd = ctxt.Source;\n\
	oCmd.Description = \"Search for files with a particular pattern in a directory\";\n\
	oCmd.SetFlag(siNoLogging,true);\n\
	oCmd.ReturnValue = true;\n\
	var oArgs = oCmd.Arguments;\n\
	oArgs.Add(\"Directory\",siArgumentInput,\"\", siString);	\n\
	oArgs.Add(\"RegularExpression\",siArgumentInput,\".*\", siString);\n\
	oArgs.Add(\"FindAllMatches\",siArgumentInput, false, siBool );\n\
	oArgs.Add(\"ReturnFullPath\",siArgumentInput, true, siBool );	\n\
	return true;\n\
}\n\
function FindFilesInFolder_Execute\n\
( \n\
	in_Directory,\n\
	in_RegularExpression,\n\
	in_FindAllMatches,\n\
	in_ReturnFullPath \n\
)\n\
{\n\
	var strFlags = \"\" ;\n\
	if ( !XSIUtils.IsFileSystemCaseSensitive() )\n\
		strFlags = \"i\" ; // Case-insensitive filesystem\n\
	var oRegExp = new RegExp( in_RegularExpression, strFlags ) ;\n\
	var oFSO = new ActiveXObject( \"Scripting.FileSystemObject\" ) ;		\n\
	var oFolder = oFSO.GetFolder( in_Directory ) ;				\n\
	var aResults = new Array() ;\n\
	\n\
	enumFiles = new Enumerator(oFolder.files);\n\
	for (; !enumFiles.atEnd(); enumFiles.moveNext())\n\
	{\n\
		var oFile = enumFiles.item();\n\
		strName = oFile.Name ;\n\
			\n\
		if ( 0 == strName.search( oRegExp ) )\n\
		{\n\
			if ( in_ReturnFullPath )\n\
				strMatch = XSIUtils.BuildPath( in_Directory, oFile.Name ) ;\n\
			else\n\
				strMatch = oFile.Name ;\n\
			\n\
			if ( in_FindAllMatches )\n\
				aResults.push( strMatch ) ;\n\
			else\n\
				return strMatch ;			\n\
		}\n\
	}	\n\
	\n\
	\n\
	if ( in_FindAllMatches )\n\
		return aResults ;\n\
	else	\n\
		return \"\" ; // No Matches			\n\
}\n\
// Add a push method to the JScript Array Object\n\
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)\n\
// @cc_on\n\
// @if (@_jscript_version &lt; 5.5)\n\
var push = function(){\n\
	for( var i = 0; arguments[ i ] != null; i++ )\n\
		this[this.length++] = arguments[ i ];\n\
	return( this );\n\
	}\n\
Array.prototype.push = push;\n\
// @end</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateFolder.html\">CreateFolder</a> <a href=\"#!/url=./si_om/FileBrowser.html\">FileBrowser</a> <a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";