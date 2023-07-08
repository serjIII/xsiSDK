var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Text Based Editors (Scintilla) Attributes</title>\n\
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
            <h1>Text Based Editors (Scintilla) Attributes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Text Based Editors (Scintilla) Attributes</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v8.0 (2010)</p></div>\n\
\n\
<div>\n\
	<p>Sub-set of view attributes for all the text based editors.</p>\n\
	<p>Not all attributes support both setting and getting. Check the third column in the table.</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">See <a href=\"#!/url=./si_cmds/ViewAttributes.html#\">ViewAttributes</a> for a complete list of types of attributes that you can use when customizing your Relational Views.</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Attribute Name</th>\n\
		<th>Description</th>\n\
		<th>Supports</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">curlinenum</td>\n\
		<td>\n\
Gets the line number of the current cursor position.  Can also be used to set the current cursor position to the beginning of the specified line.  The first line is considered line 1 (not 0).			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;a number&gt;</td>\n\
					<td>Line number of the current cursor position					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">text</td>\n\
		<td>\n\
The entire contents of the editor as a single string.  Note: on Windows the \"\\r\\n\" characters are used to mark new line, while on Linux only \"\\n\" is used.  Can also be used to set the text content, in which case the existing content is lost.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;a string&gt;</td>\n\
					<td>Content of the script or text file					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectedtext</td>\n\
		<td>\n\
Get access to the currently selected (highlighted) text, if any.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;a string&gt;</td>\n\
					<td>Content of the selected text, or an empty string					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">inserttext</td>\n\
		<td>\n\
If there is a text selection then setting this property will replace the existing selection with the new text.  If there is no selection then the text is inserted at the current cursor position.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;a string&gt;</td>\n\
					<td>A string to append to the end of the script or text file					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">font</td>\n\
		<td>\n\
The name of the font to use in the editor.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;a string&gt;</td>\n\
					<td>Any supported font name.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">fontsize</td>\n\
		<td>\n\
The size of the font to use in the editor.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;font size&gt;</td>\n\
					<td>The string representation of the font size.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">tabsize</td>\n\
		<td>\n\
The display size of the tabs to use in the editor.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;tab size&gt;</td>\n\
					<td>The string representation of the tab size.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">usespacesfortab</td>\n\
		<td>\n\
Controls whether the tab key inserts a tab character or spaces.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Pressing the tab key inserts a tab character. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Pressing the tab key inserts spaces. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">showindentationguides</td>\n\
		<td>\n\
Controls whether the indentation guides are displayed or not in the editor. Indentation guides appear as dotted vertical lines within indentation white space every tab size columns.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Indentation guides are displayed. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Indentation guides are not displayed. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">showlinenumbers</td>\n\
		<td>\n\
Controls whether line numbers are displayed or not in a special margin on the left hand side of the editor.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Line numbers are displayed. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>No line numbers are displayed. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">showwhitespace</td>\n\
		<td>\n\
Controls whether whitespace characters (spaces and tabs) are displayed or not in the editor. Space characters appear as small centred dots and tab characters as light arrows pointing to the right.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Whitespace is displayed. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Normal display. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">folding</td>\n\
		<td>\n\
When folding is enabled, you are able to control the display of lines by making them invisible or visible.  Generally, the fold points of a document are based on the hierarchical structure of its contents.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Folding is enabled. Folding points are displayed in a margin on the left hand side of view and displayed as small +/- icons. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Folding is disabled. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectionmargin</td>\n\
		<td>\n\
If enabled, display an extra margin on the left hand side of view useful for selecting lines and displaying bookmarks.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;font size&gt;</td>\n\
					<td>The string representation of the size for the selection margin (from 0 to 22).  A value of 0 means no selection margin is displayed.  In this case the bookmarks will be displayed by changing the background color of the entire line.  Value value greater than 0 means display a selection margin of that size.  In this case the bookmarks will be displayed as a small box with rounded corners in the selection margin.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">syntaxhighlight</td>\n\
		<td>\n\
Returns the current programming language in use for the current text/file. This language is used for the styling and fold points. When setting allows you to change the current language used.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">cpp</td>\n\
					<td>cpp					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">JScript</td>\n\
					<td>JScript					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">c#</td>\n\
					<td>c#					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">VBScript</td>\n\
					<td>VBScript					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Python</td>\n\
					<td>Python					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">PerlScript</td>\n\
					<td>PerlScript					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">HTML</td>\n\
					<td>HTML					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">XML</td>\n\
					<td>XML					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">None</td>\n\
					<td>None					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">files</td>\n\
		<td>\n\
Returns a semicolon-delimited list of files which are currently opened (from each tab).			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;list of files&gt;</td>\n\
					<td>A semicolon-delimited list of files (full path and name).					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">activetab</td>\n\
		<td>\n\
Sets or returns the currently active tab (the one being displayed) of the editor.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;a string&gt;</td>\n\
					<td>Name of the filename currently open or to be opened in the active tab. When getting this value, just the name displayed on the tab is returned.\n\
											<div class=\"tip\">\n\
					<table cellpadding=\"5\" cellspacing=\"5\">\n\
						<tr>\n\
							<td class=\"label\">Note</td>\n\
							<td class=\"emph\">This can be either just the filename or the full path and name</td>\n\
						</tr>\n\
					</table>\n\
					</div>\n\
					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">smarthighlighting</td>\n\
		<td>\n\
Controls whether the editor is highlighting all instances of the currently selected word.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Smart highlighting is enabled. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Smart highlighting is disabled. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";