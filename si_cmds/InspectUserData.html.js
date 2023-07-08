var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>InspectUserData</title>\n\
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
            <h1>InspectUserData</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">InspectUserData</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Allow user to view and edit User Data on particular components.  The data is stored inside a \n\
<a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a> and the associated template is used to present a modal Property Page \n\
to the user.<br /><br />\n\
The following requirements must be meet in order for the command to work:<br /><br />\n\
The selection must contain a selection of components, or the input argument should provide a SubComponent object\n\
specifying these components.<br /><br />\n\
A least one of the components must be part of a cluster.<br /><br />\n\
This cluster must have a templated User Data Map on it.<br /><br />\n\
For example if polygon number 4 is selected then there needs to be a\n\
polygon cluster that includes polygon 4 in it, and there must be a User Data Map with a valid \n\
<a href=\"#!/url=./si_om/UserDataMap.Template.html\">UserDataMap.Template</a> on this cluster.<br /><br />\n\
Unless a specific UserDataMap is provided in the argument (or part of the selection), the\n\
first User Data Map that meets these criteria, if any, is used, which can have implications if multiple\n\
user data maps are placed on the same object.<br /><br />\n\
If multiple components are specified then the first component is used to initialize the controls on the \n\
user interface.  If the user clicks OK then the values of the controls of the User Interface\n\
will be saved on each of the provided components.\n\
If there is no user data (see <a href=\"#!/url=./si_om/UserDataMap.IsEmpty.html\">UserDataMap.IsEmpty</a>) on the selected component then the\n\
user interface is shown with all the controls at their default values.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>InspectUserData( InputObjs );</pre>		</td>	</tr>\n\
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
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of Objects		</td>\n\
		<td>\n\
At the very least this argument needs to specify the subcomponents that will be inspected.  It can also include the User Data Map that contains the data that is to be inspected.  If no User Data Map is specified then the command will attempt to find a suitable UserDataMap.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current <a href=\"#!/url=./si_om/Selection.html\">Selection</a>			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a> <a href=\"#!/url=./si_cmds/SIInspectUserData.html\">SIInspectUserData</a> <a href=\"#!/url=./si_cmds/CreateUserDataMap.html\">CreateUserDataMap</a> <a href=\"#!/url=./si_cmds/SIAddCustomParameter.html\">SIAddCustomParameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";