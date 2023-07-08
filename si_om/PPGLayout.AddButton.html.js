var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGLayout.AddButton</title>\n\
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
            <h1>PPGLayout.AddButton</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.AddButton <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a button to a layout.  Unlike other controls a button doesn\'t have to\n\
be associated with any particular <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> on the inspected object.\n\
Instead it basically serves the purpose of executing some script code when\n\
pressed.\n\
<br /><br />\n\
By default, the width of the button is automatically determined based on the\n\
text of the Label.  However this can be overridden with the siUICX\n\
attribute. (See <a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">PPGItem.SetAttribute</a>)\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PPGItem PPGLayout.AddButton( String in_ScriptName, String in_opt_Label );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PPGLayout.AddButton( ScriptName, [Label] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">ScriptName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		A unique name for the button, which should not contain any space characters.\n\
		This name is used to determine the logic subroutine to call when the\n\
		button is pressed.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Label		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Label of the button.  If not specified then the ScriptName is displayed.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example creates a custom property with a single parameter called \"Data\" and a button.\n\
	Each time you click the button the value is randomized\n\
*/\n\
var oPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"ButtonExample\" ) ;\n\
oPSet.AddParameter3( \"Data\", siDouble, 0, 0, 1 ) ;\n\
var oLayout = oPSet.PPGLayout\n\
oLayout.AddRow() ;\n\
oLayout.AddItem( \"Data\" ) ;\n\
oLayout.AddButton( \"Randomize\" ) ;\n\
oLayout.EndRow() ;\n\
oLayout.Logic = Randomize_OnClicked.toString() ;\n\
oLayout.Language = \"JScript\" ;\n\
InspectObj( oPSet ) ;\n\
function Randomize_OnClicked()\n\
{\n\
	PPG.Data.Value = Math.random() ;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"VBScript\">\'\n\
\' This example creates a custom property with a single parameter called \"Data\" and a button.\n\
\' Each time you click the button the value is randomized\n\
\'\n\
set oPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"ButtonExample\" )\n\
oPSet.AddParameter3 \"Data\", siDouble, 0, 0, 1\n\
set oLayout = oPSet.PPGLayout\n\
oLayout.AddRow\n\
oLayout.AddItem \"Data\"\n\
oLayout.AddButton \"Randomize\"\n\
oLayout.EndRow\n\
\'Store a little VBScript code to react to the button press.\n\
\'If this code was more sophisticated we could read it out\n\
\'of a file\n\
oLayout.Logic = \"sub Randomize_OnClicked\"   &amp; vbCrlf &amp; \"   PPG.Data.Value = Rnd\" &amp; vbCrlf &amp; \"end sub\"\n\
oLayout.Language = \"VBScript\" \'Optional because this is the default\n\
InspectObj oPSet</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example showing how to disable a button\n\
	Often certain buttons should be disabled if they don\'t apply in the current context.\n\
	In this case a button is only enabled if there is text entered in a edit box.  The \n\
	button gets enabled and disabled by the SomeText_OnChanged() callback.  This callback\n\
	is not called as characters are actually entered in the text box, but as soon as that \n\
	edit box loses focus (for example if the tab key is pressed )\n\
*/\n\
var oPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"ButtonExample\" ) ;\n\
oPSet.AddParameter3( \"SomeText\", siString ) ;\n\
var oLayout = oPSet.PPGLayout\n\
oLayout.AddRow() ;\n\
oLayout.AddItem( \"SomeText\" ) ;\n\
var oItem = oLayout.AddButton( \"ClickMe\", \"Click Me\" ) ;\n\
// Set a PPGItem attribute to disable the control\n\
// (because initially there is no text inside SomeText)\n\
oItem.SetAttribute( \"buttondisable\", true ) ;\n\
oLayout.EndRow() ;\n\
oLayout.Logic = SomeText_OnChanged.toString() + ClickMe_OnClicked.toString() ;\n\
oLayout.Language = \"JScript\" ;\n\
InspectObj( oPSet ) ;\n\
// PPG Logic that is provided to the PPG\n\
function SomeText_OnChanged()\n\
{\n\
	// Button will be disabled until some text is entered\n\
	bDisableButton = ( PPG.SomeText.Value.length == 0 ) ;	\n\
	// Get the layout\n\
	oPPGLayout = PPG.PPGLayout ;\n\
	// Lookup the PPGItem associated with the button\n\
	oPPGItem = oPPGLayout.Item( \"ClickMe\" ) ;			\n\
	bAlreadyDisabled = oPPGItem.GetAttribute( \"buttondisable\" ) ;\n\
	if ( bDisableButton != bAlreadyDisabled )\n\
	{	\n\
		oPPGItem.SetAttribute( \"buttondisable\", bDisableButton ) ;	\n\
		// We only call refresh if we determine the state has\n\
		// actually changed		\n\
		PPG.Refresh() ;\n\
	}\n\
}\n\
function ClickMe_OnClicked()\n\
{\n\
	// Will never be called if the SomeText is empty\n\
	XSIUIToolkit.MsgBox( \"Value of text is \" +  PPG.SomeText.Value ) ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> <a href=\"#!/url=./si_om/PPGItem.Label.html\">PPGItem.Label</a> <a href=\"#!/url=./si_om/PPGItem.Name.html\">PPGItem.Name</a> <a href=\"#!/url=./si_om/PPG.html\">PPG</a> <a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";