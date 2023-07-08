var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIUtils.Translate</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>XSIUtils.Translate</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a>.Translate</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.2</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Looks up a string in the specified Softimage dictionary and returns the corresponding\n\
string in the other language.<br /><br />\n\
Softimage has a concept of a translation dictionary, which is a table of strings that \n\
have been translated from English into one or more other languages. Each translation \n\
dictionary is represented by a file in the factory/Application/Dictionary/en \n\
directory, with a .dict extension. When one of these dictionaries is translated into \n\
another language, a file with the same name is created in a directory named after \n\
the language.  For example japanese translations are stored in the jp directory.<br /><br />\n\
Each string can be referenced by its numeric ID or by providing the English \n\
version of the string.<br /><br />\n\
Often a string needs to contain data that is very specific to the circumstance.\n\
For example if an error message was \"File c:\\temp\\myfile.txt not found\" then it \n\
would be impossible to translate every possible filename in the dictionary. In\n\
these cases the dictionary may use the %s token which represents a placeholder for \n\
up to three strings that you supply (via the String1, String2, and String3 arguments).<br /><br />\n\
The number of %s tokens must exactly match the number of optional strings provided, \n\
up to a maximum of three.  Other format tokens like %d are not supported and could \n\
result in a crash if they are present. <br /><br />\n\
For example, instead of using \"File c:\\temp\\myfile.txt not found\", the dictionary string \n\
should take the format \"File %s not found\" so that when Translate method is called, the \n\
filename is specified using the String1 argument (see the \'warningMsg\' example below). \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>String XSIUtils.Translate( Object in_ToTranslate, String in_Dictionary, String in_string1, String in_string2, String in_string3 );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = XSIUtils.Translate( Key, Dictionary, [String1], [String2], [String3] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/String.htm\">String</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Key		</td>\n\
		<td>String or Integer		</td>\n\
		<td>\n\
\n\
		When a string is passed the English dictionary is searched\n\
		to find the exact match and, if found, the equivalent in the\n\
		current language dictionary is returned.  \n\
		If the string is not found then the provided string is returned.\n\
		If the current language is English then it will always return\n\
		whatever string was passed.<br /><br />\n\
		It is also possible to provide the numeric id of the string in\n\
		the dictionary.  In this case it will go directly to the \n\
		dictionary of the current language and attempt to find \n\
		the string.  If it does not find a string by that ID an\n\
		empty string is returned.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Dictionary		</td>\n\
		<td>String		</td>\n\
		<td>\n\
\n\
		Name of the dictionary to search.  Dictionary names match the filename without\n\
	the .dict extension.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">String1		</td>\n\
		<td>String		</td>\n\
		<td>\n\
Optional argument to match the first %s in the string in the dictionary.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">String2		</td>\n\
		<td>String		</td>\n\
		<td>\n\
Optional argument to match the second %s in the string in the dictionary.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">String3		</td>\n\
		<td>String		</td>\n\
		<td>\n\
Optional argument to match the third %s in the string in the dictionary.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Demonstration of XSIUtils.Translate\n\
currentLang = GetValue(\"Preferences.General.language\") ;\n\
Application.LogMessage( \"The current language is \" + currentLang ) ;\n\
// You can\'t translate any arbitrary string, only\n\
// ones that are already in the dictionary.\n\
pixelRatio = XSIUtils.Translate( \"Pixel Ratio\", \"XSIXSI\" ) ;\n\
Application.LogMessage( \"Pixel Ratio translated is \" + pixelRatio ) ;\n\
// Load a Softimage warning message, in English\n\
// it says \"Do you want to remove it?\"\n\
errorMsg = XSIUtils.Translate( 333, \"XSIMSGCAT\" ) ;\n\
XSIUIToolkit.MsgBox( errorMsg ) ;\n\
// This is an error message that contains additional\n\
// context information\n\
// Dictionary contains: \"31$Path %s has been changed to %s\"\n\
// Resulting string is:\n\
// WARNING : 31$Path C:\\out.txt has been changed to C:\\temp\\out.txt\n\
warningMsg = XSIUtils.Translate(32, \"XSIMSGCAT\", \"C:\\\\out.txt\", \"C:\\\\temp\\\\out.txt\" );\n\
Application.LogMessage( warningMsg, siWarning ) ;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";