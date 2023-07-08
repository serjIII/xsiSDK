var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGLayout.AddEnumControl</title>\n\
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
            <h1>PPGLayout.AddEnumControl</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.AddEnumControl <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This method is similar to <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> except it makes it\n\
easy to specify enumeration style controls like siControlCombo, siControlRadio, siControlListBox and siControlIconList.\n\
These are controls which restrict the values that a users can set on a parameter by\n\
offering a specific list of valid values.  Any numeric or string <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> type can be\n\
driven by these controls.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PPGItem PPGLayout.AddEnumControl( String in_ParamName, Object in_UIItemsArray, String in_opt_Label, String in_opt_UIType );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PPGLayout.AddEnumControl( ParamName, UIItemsArray, [Label], [UIType] );</pre>		</td>	</tr>\n\
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
		no parameter by this name exists.  However in that case the control is not\n\
		drawn as part of the layout.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UIItemsArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Variant.htm\">Variant</a>s		</td>\n\
		<td>\n\
\n\
		A 1-dimensional array of Label/Value pairs.  Each label is a string and\n\
		the value is a variant whose type should match the <a href=\"#!/url=./si_om/Parameter.ValueType.html\">Parameter.ValueType</a> of\n\
		the associated parameter.  For example, for a bitfield, the array\n\
		might be Array( \"Bit 0\", 1, \"Bit 1\", 2, \"Bit 2\", 4 ).\n\
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
		shown.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UIType		</td>\n\
		<td><a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
		<td>\n\
\n\
		Specifies what type of control to show.  Only certain controls, such\n\
		as siControlCombo, siControlRadio, siControlCheck, and siControlIconList\n\
		are supported.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siControlCombo			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates various Enum Controls\n\
\'\n\
set oCustomProperty = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"Enum Controls\" )\n\
\'Create the custom parameters, and set the default values\n\
oCustomProperty.AddParameter3 \"MyCombo\", siString, \"Yellow\"\n\
oCustomProperty.AddParameter3 \"MyBitField\", siUByte, 68\n\
oCustomProperty.AddParameter3 \"MyRadio\", siInt4\n\
oCustomProperty.AddParameter3 \"NotShown\", siInt4\n\
\'Define the layout\n\
set oLayout = oCustomProperty.PPGLayout\n\
\'For the combo box we set the label and the value the same\n\
\'because we actually want to store the string the user \n\
\'selects as the parameter value\n\
dim aComboItems, aBitfieldItems, aRadioItems\n\
aComboItems = Array( 	\"Orange\", \"Orange\", _\n\
						 \"Yellow\", \"Yellow\", _\n\
						 \"Apple\", \"Apple\" )\n\
oLayout.AddEnumControl \"MyCombo\", aComboItems, \"Things\", siControlCombo\n\
\' For a bitfields the values normally should be powers of two\n\
\' Notice they can be in any order\n\
aBitfieldItems = Array( 	\"Bit 0\", 1, _\n\
							 \"Bit 6\", 64, _\n\
							 \"Bit 2\", 4, _\n\
							 \"Bit 7\", 128 )\n\
oLayout.AddEnumControl \"MyBitField\", aBitfieldItems, , siControlCheck\n\
\' Radio button is a good alternative to ComboBox when you only\n\
\' have a few options to give to the user\n\
aRadioItems = Array( 	\"Slow\", 0, _\n\
						 \"Fast\", 1 )\n\
oLayout.AddEnumControl \"MyRadio\", aRadioItems, , siControlRadio\n\
InspectObj oCustomProperty</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> <a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> <a href=\"#!/url=./si_om/PPGItem.Label.html\">PPGItem.Label</a> <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a> <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a> <a href=\"#!/url=./si_om/XSIDialog.html\">XSIDialog</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";