var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siPPGLayoutAttribute</title>\n\
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
            <h1>siPPGLayoutAttribute</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siPPGLayoutAttribute</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Specifies the different attributes supported on <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>s.\n\
		This enum is different from <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a> because it lists\n\
		attributes which apply to the entire Property Page, not any individual control.\n\
		Some of the most common attributes\n\
		are available more directly as properties of the PPGLayout, for example  \n\
		<a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a> is a convenient way to set the siUILogic attribute.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siUIDictionary                                                 // Dictionary\n\
StringModule.siUIHelpButtonFile                                             // HelpButtonFile\n\
StringModule.siUIHelpFile                                                   // HelpFile\n\
StringModule.siUIHelpID                                                     // HelpID\n\
StringModule.siUILanguage                                                   // Language\n\
StringModule.siUILogic                                                      // Logic\n\
StringModule.siUILogicFile                                                  // LogicFile\n\
StringModule.siUILogicPrefix                                                // LogicPrefix\n\
StringModule.siUIShowChildren                                               // ShowChildren</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIDictionary\"> </a>siUIDictionary		</td>\n\
		<td class=\"example\">Dictionary		</td>\n\
		<td>\n\
By default all labels, combo box items and other visible strings on a PPG \n\
		are automatically translated if that string is found in the XSISPDLFILE string dictionary.  To turn off all translation \n\
		set this attribute to \"None\".  To specify a different dictionary set this attribute to the name of the dictionary (without \n\
		the .dict extension) (See <a href=\"#!/url=./si_om/XSIUtils.Translate.html\">XSIUtils.Translate</a>).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHelpButtonFile\"> </a>siUIHelpButtonFile		</td>\n\
		<td class=\"example\">HelpButtonFile		</td>\n\
		<td>\n\
Help button file associated with this property page.  This help button file replaces\n\
		the factory \"?\" button on the property page. For self-installed plug-ins it is not necessary to specify a help button file\n\
		with this attribute, see <a href=\"#!/url=./si_om/PluginRegistrar.HelpButton.html\">PluginRegistrar.HelpButton</a> and <a href=\"#!/url=./si_om/PluginItem.HelpButton.html\">PluginItem.HelpButton</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHelpFile\"> </a>siUIHelpFile		</td>\n\
		<td class=\"example\">HelpFile		</td>\n\
		<td>\n\
Help file associated with this property page.  This help file or web address\n\
		appears when the \"?\" button on the property page is clicked.  It can also be retrieved via <a href=\"#!/url=./si_om/SIObject.Help.html\">SIObject.Help</a>.  \n\
		For self-installed plug-ins it is not necessary to specify a help file with this attribute, see <a href=\"#!/url=./si_om/SIObject.Help.html\">SIObject.Help</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHelpID\"> </a>siUIHelpID		</td>\n\
		<td class=\"example\">HelpID		</td>\n\
		<td>\n\
Reference to a topic in the Help file. Normally this is only used for internal objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILanguage\"> </a>siUILanguage		</td>\n\
		<td class=\"example\">Language		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/PPGLayout.Language.html\">PPGLayout.Language</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILogic\"> </a>siUILogic		</td>\n\
		<td class=\"example\">Logic		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILogicFile\"> </a>siUILogicFile		</td>\n\
		<td class=\"example\">LogicFile		</td>\n\
		<td>\n\
This attribute is an alternative to siUILogic. Rather than have a value that is \n\
		actual script, the value of this attribute is a string with the path of an external file containing the call backs.\n\
		<br /><br />\n\
		This attribute is filled in automatically in the case of <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> based <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILogicPrefix\"> </a>siUILogicPrefix		</td>\n\
		<td class=\"example\">LogicPrefix		</td>\n\
		<td>\n\
This optional string attribute makes it possible to define a prefix that will be \n\
		expected on all functions in the <a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a>. For example if the prefix is \"MyPlugin_\" then Softimage will expect \n\
		a method named \"MyPlugin_OnInit\" rather than \"OnInit\".  This can be useful to avoid naming conflicts in cases where multiple \n\
		property pages are in the same script file.  In the case of <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> based <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> objects \n\
		this attribute is automatically set to the name of the CustomProperty <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowChildren\"> </a>siUIShowChildren		</td>\n\
		<td class=\"example\">ShowChildren		</td>\n\
		<td>\n\
Normally a property page shows nested objects as well as the inspected object.  \n\
		For example an inspected <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> may show details of any <a href=\"#!/url=./si_om/Expression.html\">Expression</a>s applied to the \n\
		<a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>s. To disable the display of all nested objects set this attribute to false.\n\
		<br /><br />\n\
		Note: To selectively filter which nested children are shown use the Keywords argument of <a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a> instead.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGLayout.GetAttribute.html\">PPGLayout.GetAttribute</a> <a href=\"#!/url=./si_om/PPGLayout.SetAttribute.html\">PPGLayout.SetAttribute</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html#GetAttribute\">PPGLayout::GetAttribute</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html#PutAttribute\">PPGLayout::PutAttribute</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";