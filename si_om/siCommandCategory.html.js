var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siCommandCategory</title>\n\
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
            <h1>siCommandCategory</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siCommandCategory</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Custom (v1.0) <a href=\"#!/url=./si_om/Command.html\">Command</a>s can be defined from a pre-defined category. \n\
Each category specifies the base arguments of a command and the location of the menu item for that \n\
command in Softimage. Softimage automatically installs a menu item for each command created for a \n\
specific category.\n\
<br /><br />\n\
You can retrieve the type of category specified using either <a href=\"#!/url=./si_om/SIObject.Categories.html\">SIObject.Categories</a> \n\
or <a href=\"#!/url=./si_om/Command.Category.html\">Command.Category</a> but you cannot define custom categories for this type of\n\
command. For that you need to use the alternative and more powerful, way to create custom commands \n\
and add them to <a href=\"#!/url=./si_om/Menu.html\">Menu</a>s: via the self-installing plug-in APIs.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siCommandCategory.siImportCategory                                          // 0\n\
siCommandCategory.siExportCategory                                          // 1\n\
siCommandCategory.siSettingsCategory                                        // 2\n\
siCommandCategory.siHelpCategory                                            // 3\n\
siCommandCategory.siNoCategory                                              // 4\n\
siCommandCategory.siFCurveCategory                                          // 5</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImportCategory\"> </a>siImportCategory		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
\n\
		File import operations. Commands of this category take a single argument, which \n\
		is the name of the file to import.  These commands appear in the Softimage File|Import \n\
		menu pane. When called from the menu the file name argument will be empty, in which case\n\
		the command implementation will often display some user interface to ask the user for \n\
		information about the file to import (see <a href=\"#!/url=./si_om/XSIUIToolkit.FileBrowser.html\">XSIUIToolkit.FileBrowser</a>\n\
		and <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>).  The filename argument can be explicitly \n\
		specified when the command is called from scripting, as a way to execute the import \n\
		operation in batch mode.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExportCategory\"> </a>siExportCategory		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
\n\
		File export operations. Commands of this category take a single argument, which is the \n\
		name of the file to export. These commands appear in the Softimage File|Export menu pane. \n\
		Like Import commands, the file argument is empty when the command is invoked from the menu.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSettingsCategory\"> </a>siSettingsCategory		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
\n\
		This category is deprecated, any commands that are registered with this\n\
		category now appear at the bottom of the File menu.  It is recommended\n\
		that a custom menu be used instead, with the anchor point siMenuMainApplicationPreferencesID.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHelpCategory\"> </a>siHelpCategory		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
\n\
		This category is deprecated.  It is possible to add a menu item to the Help menu \n\
		by creating a custom <a href=\"#!/url=./si_om/Menu.html\">Menu</a> at the siMenuMainHelpID anchor point.\n\
		See also <a href=\"#!/url=./si_cmds/OpenNetView.html\">OpenNetView</a> and <a href=\"#!/url=./si_om/SIObject.Help.html\">SIObject.Help</a>.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNoCategory\"> </a>siNoCategory		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
\n\
		Used for declaring a command with no category. The majority of custom and built-in commands \n\
		belong to this category and they do not appear automatically in any Softimage menu (they can \n\
		be placed in Softimage menus by calling <a href=\"#!/url=./si_om/Menu.AddCommandItem.html\">Menu.AddCommandItem</a>).\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFCurveCategory\"> </a>siFCurveCategory		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
\n\
		Category of commands which operate on fcurves and appear in the Edit menu of the \n\
		fcurve editor. They cannot be invoked from Scripting.  They take a single argument\n\
		which is the <a href=\"#!/url=./si_om/FCurveEditor.html\">FCurveEditor</a> context object.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIApplication.CreateCommand.html\">XSIApplication.CreateCommand</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Application.html#CreateCommand\">Application::CreateCommand</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Command.html\">Command</a> <a href=\"#!/url=./si_om/FCurveEditor.html\">FCurveEditor</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Command.html\">Command</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";