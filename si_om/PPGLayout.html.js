var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGLayout</title>\n\
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
            <h1>PPGLayout</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PPGLayout</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_PPGLayout\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The PPGLayout object represents the visual appearance of an object\'s state when it is \n\
inspected.  (PPG is a common acronym for Property Page). The layout makes it possible \n\
to group objects together, use special controls, hide obsolete parameters, add Buttons \n\
and in general create a presentation of an object\'s state that is pleasing to the eye.\n\
<br /><br />\n\
A Layout is modeled in Softimage as a linear list of <a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a> objects. \n\
Each PPGItem represents either a parameter in the inspected object, or a special UI item \n\
like a Tab or Button.  In most cases the layout does not specify hard-coded pixel positions \n\
or dimensions for the PPGItems.  Instead Softimage automatically draws the controls with \n\
a sensible layout.  This allows the presentation to change in a pleasing manner when the \n\
user resizes the property page.  However there is some support for providing hints, for \n\
example <a href=\"#!/url=./si_om/PPGItem.WidthPercentage.html\">PPGItem.WidthPercentage</a>, or even explicit sizes via \n\
<a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">PPGItem.SetAttribute</a>.\n\
<br /><br />\n\
Many different controls are available for use on a property page, see <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>. \n\
All controls can be added using <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> but convenience methods \n\
are provided for some of the most common controls, for example <a href=\"#!/url=./si_om/PPGLayout.AddColor.html\">PPGLayout.AddColor</a>.\n\
<br /><br />\n\
Practically every built-in Softimage object has its own layout.  However, if there is no specific \n\
layout, Softimage displays a default layout that lists all the parameters in a simple fashion.\n\
<br /><br />\n\
Layouts are remembered in memory while Softimage is running.  For internal objects they are \n\
reloaded from SPDL files when Softimage restarts.  The layout for a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> \n\
object implemented as a <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a> is defined by implementing the DefineLayout \n\
callback.\n\
<br /><br />\n\
You cannot directly modify an existing layout structure, apart from adding new items at the \n\
end or changing the attributes of items already in the layout. However to modify a layout it \n\
is often reasonable to call <a href=\"#!/url=./si_om/PPGLayout.Clear.html\">PPGLayout.Clear</a> and then rebuild the entire \n\
layout with the changes included.  You can also use the <a href=\"#!/url=./si_om/Parameter.Enable.html\">Parameter.Enable</a>\n\
method to hide parameters without removing them from the layout.\n\
<br /><br />\n\
If the layout is changed from within Logic code (see <a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a>)\n\
it is necessary to call <a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> to see the changes take effect.\n\
<br /><br />\n\
Normally the layout is associated with an object that remains in the scene.  However it is \n\
also possible to use this object to define the user interface of a temporary dialog box. \n\
For example a script can ask the user to specify some import or export options. This is done \n\
in conjunction with a temporary <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> object and the \n\
<a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a> command.  This approach is demonstrated in the following examples.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddButton.html\">AddButton</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddColor.html\">AddColor</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddEnumControl.html\">AddEnumControl</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddFCurve.html\">AddFCurve</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddGroup.html\">AddGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">AddItem</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddRow.html\">AddRow</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddSpacer.html\">AddSpacer</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddStaticText.html\">AddStaticText</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddString.html\">AddString</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">AddTab</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.Clear.html\">Clear</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.Delete.html\">Delete</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.EndGroup.html\">EndGroup</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.EndRow.html\">EndRow</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.GetAttribute.html\">GetAttribute</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.SetAttribute.html\">SetAttribute</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.SetViewPosition.html\">SetViewPosition</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.SetViewSize.html\">SetViewSize</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.Count.html\">Count</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.Item.html\">Item</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.Language.html\">Language</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.Logic.html\">Logic</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.ViewPosition.html\">ViewPosition</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGLayout.ViewSize.html\">ViewSize</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates a typical use of a custom pset with custom layout as a way of \n\
	collecting some information from the user.\n\
*/\n\
// Step 1: Create a custom pset and define the data on it\n\
var oPSet=ActiveSceneRoot.AddProperty(\"CustomProperty\",false,\"Demo\") ;\n\
// Color is made up of 4 components\n\
oPSet.AddParameter3( \"MyR\", siDouble ) ;\n\
oPSet.AddParameter3( \"MyG\", siDouble ) ;\n\
oPSet.AddParameter3( \"MyB\", siDouble ) ;\n\
oPSet.AddParameter3( \"MyA\", siDouble ) ;\n\
oPSet.AddParameter3( \"EnumCtrl\", siInt4, 4 ) ;\n\
// Step 2: Put the items on the layout with a custom UI\n\
var oPPGLayout = oPSet.PPGLayout ;\n\
oPPGLayout.AddGroup( \"Pick a Color\" ) ;\n\
var oItem = oPPGLayout.AddColor( \"MyR\", \"\",true ) ;\n\
oItem.SetAttribute(\"NoLabel\", true ) ;\n\
oPPGLayout.EndGroup() ;\n\
oPPGLayout.AddEnumControl( \"EnumCtrl\", new Array( \"item 1\", 4, \"item 2\", 6 ), \"Choice\",  siControlCombo ) ;\n\
// Step 3: Show the user the dialog.  They can change the\n\
// parameter values and then click OK or Cancel\n\
try {\n\
	InspectObj( oPSet, \"\", \"Check out this layout created from scripting\", siModal );\n\
	// Step 4: Read the values and do something with them.  Normally this\n\
	//	would be where you call a custom command which does the operation\n\
	Application.LogMessage( \"User picked the color (\" + oPSet.Parameters(\"MyR\").Value + \",\"  + oPSet.Parameters(\"MyG\").Value + \",\" \n\
		+ oPSet.Parameters(\"MyB\").Value + \",\"  + oPSet.Parameters(\"MyA\").Value + \")\" ) ;		\n\
	if ( oPSet.Parameters( \"EnumCtrl\" ).Value == 4 ) {\n\
		Application.LogMessage( \"User selected item 1\" ) ;\n\
	} else {\n\
		Application.LogMessage( \"User selected item 2\" ) ;\n\
	}\n\
} catch( e ) {\n\
	// Tip: rather than using try/catch, you can specify false\n\
	// as the 5th argument to InspectObj and it will not throw an exception\n\
	Application.LogMessage( \"User Cancelled\" );\n\
}\n\
//Step 5: Remove the pset now that we are done with it\n\
DeleteObj( oPSet ) ;</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	A demonstration of the Number Control on a Custom Property Set. The number control \n\
	normally appears as a [Animation Divot] [Label] [Edit+Slider Control] but this \n\
	example demonstrates how this appearance can be controlled. It also shows how to \n\
	change the range of a parameter. All these changes can be made dynamically.\n\
*/\n\
NewScene( null, false ) ;\n\
var oCustomProperty = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"NumberControlTester\" ) ;\n\
// Add a parameter of type double.  \n\
// It has the min/max values of -1000 to 1000,\n\
// default value of -1.0, and ui range -100 to 100\n\
var oGridParam = oCustomProperty.AddParameter2( \"number\", siDouble, -1.0, -1000.0, 1000.0, -100.0, 100.0, siClassifUnknown, siPersistable | siAnimatable ) ;\n\
// Add the Edit boxes and other controls that will\n\
// be used to get information from the user\n\
oCustomProperty.AddParameter3( \"setLabel\", siString, \"NewLabel\" ) ;\n\
oCustomProperty.AddParameter3( \"setNoLabel\", siBool, false,null,null,false) ;\n\
oCustomProperty.AddParameter3( \"setValueOnly\", siBool, false,null,null,false) ;\n\
oCustomProperty.AddParameter3( \"setNoSlider\", siBool, false,null,null,false) ;\n\
oCustomProperty.AddParameter3( \"setThumbWheel\", siBool, false,null,null,false) ;\n\
oCustomProperty.AddParameter3( \"setTreadmill\", siBool, false,null,null,false) ;\n\
oCustomProperty.AddParameter3( \"setDecimals\", siInt4, 3,0,10,false) ;\n\
oCustomProperty.AddParameter3( \"setLabelMinPixels\", siInt4, 10,0,300,false) ;\n\
oCustomProperty.AddParameter3( \"setLabelPercentage\", siInt4, 30,0,100,false) ;\n\
oCustomProperty.AddParameter3( \"setCX\", siInt4, 0,0,500,false) ;\n\
oCustomProperty.AddParameter3( \"setCY\", siInt4, 0,0,100,false) ;\n\
oCustomProperty.AddParameter3( \"setUIMin\", siDouble, -100,-10000,10000,false) ;\n\
oCustomProperty.AddParameter3( \"setUIMax\", siDouble, 100,-10000,10000,false) ;\n\
oCustomProperty.AddParameter3( \"setMin\", siDouble, -1000,-10000,10000,false) ;\n\
oCustomProperty.AddParameter3( \"setMax\", siDouble, 1000,-10000,10000,false) ;\n\
//\n\
// Build the layout for the test property page\n\
// \n\
var oLayout = oCustomProperty.PPGLayout\n\
oLayout.AddGroup( \"Test Number Parameter\" ) ;\n\
	//The logic code will set all the detailed attributes\n\
	oLayout.AddItem( \"number\" ) ;\n\
oLayout.EndGroup() ;\n\
oLayout.AddGroup( \"Display Attributes\" ) ;\n\
	oLayout.AddItem( \"setLabel\",\"Label\" ) ;\n\
	oLayout.AddItem( \"setNoLabel\",\"NoLabel\" ) ;\n\
	oLayout.AddItem( \"setNoSlider\",\"NoSlider\" ) ;\n\
	oLayout.AddItem( \"setThumbWheel\",\"ThumbWheel\" ) ;\n\
	oLayout.AddItem( \"setTreadmill\",\"Treadmill\" ) ;\n\
	oLayout.AddItem( \"setCX\",\"Fixed Width\" ) ;\n\
	oLayout.AddItem( \"setCY\",\"Fixed Height\" ) ;\n\
	oLayout.AddItem( \"setDecimals\",\"Decimals\" ) ;\n\
	oLayout.AddItem( \"setLabelMinPixels\",\"Label Pixels (Min)\" ) ;\n\
	oLayout.AddItem( \"setLabelPercentage\",\"Label %\" ) ;\n\
	oLayout.AddButton( \"Update\" ) ;\n\
oLayout.EndGroup() ;\n\
// These values actually fundamentally affect the\n\
// parameter itself.\n\
// Note1:You could potentially change the script name\n\
// 	but that would break the logic code that depends\n\
// 	on the scripting name\n\
// Note2:You can\'t change the type of a parameter.\n\
// 	Instead you could delete and recreate a new parameter\n\
// 	dynamically but that is not part of this example\n\
oLayout.AddGroup( \"Parameter Attributes\" ) ;\n\
	oLayout.AddItem( \"setMin\" ) ;\n\
	oLayout.AddItem( \"setMax\" ) ;\n\
	oLayout.AddItem( \"setUIMin\" ) ;\n\
	oLayout.AddItem( \"setUIMax\" ) ;\n\
	oLayout.AddButton( \"PDefUpdate\",\"Update\" ) ;\n\
oLayout.EndGroup() ;\n\
oLayout.Language = \"Jscript\" ;\n\
oLayout.Logic = NumberControlTester_Update_OnClicked.toString() + \n\
		NumberControlTester_PDefUpdate_OnClicked.toString();\n\
oLayout.SetAttribute( \"LogicPrefix\", \"NumberControlTester_\" ) ;\n\
InspectObj( oCustomProperty ) ;\n\
//\n\
// This is the logic code\n\
// \n\
function NumberControlTester_Update_OnClicked()\n\
{\n\
	var oCustomProperty = PPG.Inspected(0) ;\n\
	var oLayout = oCustomProperty.PPGLayout\n\
	var oPPGItem = oLayout.Item( \"number\" ) ;\n\
	// Based on the property page items, set the attributes\n\
	// of the control\n\
	oPPGItem.Label = oCustomProperty.setLabel.Value ;\n\
	oPPGItem.SetAttribute( \"NoLabel\", oCustomProperty.setNoLabel.Value ) ;\n\
	oPPGItem.SetAttribute( \"ValueOnly\", oCustomProperty.setValueOnly.Value ) ;\n\
	oPPGItem.SetAttribute( \"NoSlider\", oCustomProperty.setNoSlider.Value ) ;\n\
	oPPGItem.SetAttribute( \"Decimals\", oCustomProperty.setDecimals.Value ) ;	\n\
	oPPGItem.SetAttribute( \"ThumbWheel\", oCustomProperty.setThumbWheel.Value ) ;	\n\
	oPPGItem.SetAttribute( \"Treadmill\", oCustomProperty.setTreadmill.Value ) ;	\n\
	oPPGItem.SetAttribute( \"CX\", oCustomProperty.setCX.Value ) ;	\n\
	oPPGItem.SetAttribute( \"CY\", oCustomProperty.setCY.Value ) ;	\n\
	oPPGItem.LabelMinPixels = oCustomProperty.setLabelMinPixels.Value ;\n\
	oPPGItem.LabelPercentage = oCustomProperty.setLabelPercentage.Value ;\n\
	// (There is also a logithmic attribute \n\
	// but it only works for integer parameters)\n\
	// You need to rebuild the PPG contents to see the changes\n\
	PPG.Refresh() ;\n\
}\n\
function NumberControlTester_PDefUpdate_OnClicked()\n\
{\n\
	var oCustomProperty = PPG.Inspected(0) ;\n\
	var oLayout = oCustomProperty.PPGLayout\n\
	var newUIMin = oCustomProperty.setUIMin.Value ;\n\
	var newUIMax = oCustomProperty.setUIMax.Value ;\n\
	var newMin = oCustomProperty.setMin.Value ;\n\
	var newMax = oCustomProperty.setMax.Value ;\n\
	if ( newUIMin &gt; newUIMax ) {\n\
		Logmessage( \"UIMin must be less than UIMax!\" ) ;\n\
		return ;\n\
	}\n\
	if ( newMax &lt; newUIMax ) {\n\
		Logmessage( \"UIMax can\'t be bigger than Max!\" ) ;\n\
		return ;		\n\
	}\n\
	if ( newMin &gt; newUIMin ) {\n\
		Logmessage( \"UIMin can\'t be smaller than Min!\" ) ;\n\
		return ;		\n\
	}\n\
	// Call the command with the new parameter ranges\n\
	EditParameterDefinition( oCustomProperty.number.FullName, null, null, newMin, newMax, newUIMin, newUIMax ) ;\n\
	// You need to rebuild the PPG contents to see the changes\n\
	PPG.Refresh() ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a> <a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">ProjectItem.PPGLayout</a> <a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";