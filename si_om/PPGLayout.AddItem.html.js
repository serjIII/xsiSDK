var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGLayout.AddItem</title>\n\
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
            <h1>PPGLayout.AddItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.AddItem <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a control to the PPGLayout.  Normally this new item will represents a parameter on the\n\
object that is inspected, and will allow a user to view and change its value.  For example\n\
this method can be used to add a Slider control which shows the value of a numeric parameter on\n\
a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>.\n\
<br /><br />\n\
It is possible to add any kind of control using this method.  However convenience methods such as \n\
<a href=\"#!/url=./si_om/PPGLayout.AddColor.html\">PPGLayout.AddColor</a> have been added for some of the most common controls.\n\
<br /><br />\n\
Often a call to this method is followed by one or more calls to <a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">PPGItem.SetAttribute</a>\n\
to provide additional information about the appearance of the item.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PPGItem PPGLayout.AddItem( String in_ParamName, String in_opt_Label, String in_opt_UIType );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PPGLayout.AddItem( ParamName, [Label], [UIType] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParamName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Scripting name of the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.  The call does not fail even if\n\
		no parameter by this name exists.  However in that case the control is not drawn as \n\
		part of the layout.  (See <a href=\"#!/url=./si_om/PPGItem.Name.html\">PPGItem.Name</a>).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Label		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Most controls have a label, for example the text that appears to \n\
		the left of a numeric slider.  If not specified here, the name of the parameter\n\
		(see <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a>) or <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a> is\n\
		shown instead. (See <a href=\"#!/url=./si_om/PPGItem.Label.html\">PPGItem.Label</a>).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UIType		</td>\n\
		<td><a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
		<td>\n\
\n\
		Specify the control to draw.  For example this argument can be used to specify\n\
		that a parameter should be displayed as a combo box. (See <a href=\"#!/url=./si_om/PPGItem.Type.html\">PPGItem.Type</a>).\n\
		<br /><br />\n\
		If not specified, Softimage uses a simple heuristic for determining what control to use, based on the\n\
		<a href=\"#!/url=./si_om/Parameter.ValueType.html\">Parameter.ValueType</a>.  For example strings have an edit control, \n\
		numeric types like <a href=\"#!/url=./files/float.htm\">float</a> and <a href=\"#!/url=./files/integer.htm\">integer</a> use a slider, and \n\
		<a href=\"#!/url=./files/boolean.htm\">boolean</a> parameters use a checkbox.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a> <a href=\"#!/url=./si_om/PPGLayout.AddString.html\">PPGLayout.AddString</a> <a href=\"#!/url=./si_om/PPGLayout.AddEnumControl.html\">PPGLayout.AddEnumControl</a> <a href=\"#!/url=./si_om/PPGLayout.AddColor.html\">PPGLayout.AddColor</a> <a href=\"#!/url=./si_om/PPGLayout.AddButton.html\">PPGLayout.AddButton</a> <a href=\"#!/url=./si_om/PPGLayout.AddGroup.html\">PPGLayout.AddGroup</a> <a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">PPGLayout.AddTab</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";