var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGLayout.AddFCurve</title>\n\
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
            <h1>PPGLayout.AddFCurve</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.AddFCurve <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds an FCurve editor to the layout.  It should be associated with an FCurve Parameter\n\
(see <a href=\"#!/url=./si_om/CustomProperty.AddFCurveParameter.html\">CustomProperty.AddFCurveParameter</a>).  This control is a\n\
full FCurve editor, and should not be confused with the Animation Divot.\n\
<br /><br />\n\
Like other Parameters you can add custom Logic code to the Layout \n\
that is called whenever the FCurve changes.  This is demonstrated in the\n\
examples.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PPGItem PPGLayout.AddFCurve( String in_ScriptName, Int32 in_opt_Height );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PPGLayout.AddFCurve( ScriptName, [Height] );</pre>		</td>	</tr>\n\
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
		Scripting name of the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>, which must be of\n\
		type <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.\n\
		The call does not fail even if\n\
		no parameter by this name exists.  However in that case the control is not \n\
		drawn as part of the layout.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Height		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
\n\
		Height of the control.  Note: It is not necessary to set the width because \n\
		the control automatically resizes according to the size of the property page.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
300			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how an FCurve can be stored on a Custom Property and UI tools can be added \n\
	via the PPGLayout object\n\
*/\n\
BuildScene()\n\
function BuildScene()\n\
{\n\
	NewScene( null, false ) ;\n\
	var oCustomProperty = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"DataTemplate\" ) ;\n\
	oCustomProperty.AddFCurveParameter( \"Curve\" ) ;\n\
	// Create read-only parameters that will be updated by the logic\n\
	oCustomProperty.AddParameter3( \"KeyCount\", siInt4,null,null,null,false,true ) ;\n\
	oCustomProperty.AddParameter3( \"MaxY\", siInt4,null,null,null,false,true ) ;\n\
	// Build the Layout\n\
	var oLayout = oCustomProperty.PPGLayout		\n\
	var oLayoutItem = oLayout.AddFCurve( \"Curve\", 150 );\n\
	oLayout.AddGroup( \"Info\" ) ;	\n\
	oLayout.AddRow() ;\n\
	oLayout.AddItem( \"KeyCount\" ) ;\n\
	oLayout.AddItem( \"MaxY\" ) ;	\n\
	oLayout.EndRow() ;\n\
	oLayout.EndGroup() ;\n\
	oLayout.AddRow() ;\n\
	oLayout.AddButton( \"Randomize\" ) ;\n\
	oLayout.AddButton( \"Reframe\" ) ;\n\
	oLayout.EndRow() ;\n\
	oLayout.Language = \"JScript\" ;\n\
	oLayout.Logic = OnInit.toString() +\n\
		Randomize_OnClicked.toString() +\n\
		Reframe_OnClicked.toString() +\n\
		ReCalcInfo.toString() +\n\
		Curve_OnChanged.toString() ;\n\
	InspectObj( oCustomProperty ) ;\n\
}\n\
//\n\
// The following code is Logic code for the Property Page\n\
//\n\
function Randomize_OnClicked()\n\
{\n\
	// Get access to the curve\n\
	var oFCurve = PPG.Curve.Value;\n\
	oFCurve.BeginEdit();\n\
	oFCurve.RemoveKeys();\n\
	var maxKeys = 10.0 ;\n\
	var maxX = 100.0 ;\n\
	var maxY = 100.0 ;\n\
	var keys = Math.round( maxKeys * Math.random() ) ;\n\
	for ( var i = 0 ; i &lt; keys ; i++ ) {\n\
		var keyFrame = Math.round( maxX * Math.random() )\n\
		oFCurve.AddKey( keyFrame,\n\
							maxY * Math.random() ) ;\n\
	}\n\
	// Always end back at zero\n\
	oFCurve.AddKey( 0, 0 ) ;\n\
	oFCurve.AddKey( maxX, 0 ) ;\n\
	oFCurve.EndEdit() ;	\n\
	ReCalcInfo() ;\n\
}\n\
function Reframe_OnClicked()\n\
{\n\
	//Redraw, which will reframe the new pset\n\
	PPG.Refresh() ;\n\
}\n\
function ReCalcInfo()\n\
{\n\
	// Show the number of keys and maximum\n\
	// Y value for the curves\n\
	var oFCurve = PPG.Curve.Value;\n\
	PPG.KeyCount.Value = oFCurve.Keys.Count\n\
	var maxYFound = 0 ;\n\
	for ( var i = 0 ; i &lt; oFCurve.Keys.Count ; i++ ) {\n\
		var y = oFCurve.GetKeyValue(i) ;	\n\
		if ( y &gt; maxYFound )  {\n\
			maxYFound = y ;\n\
		}\n\
	}\n\
	PPG.MaxY.Value = maxYFound ;\n\
}\n\
function Curve_OnChanged()\n\
{\n\
	// Called when every the user changes the FCurve from the user interface.\n\
	ReCalcInfo();\n\
}\n\
function OnInit()\n\
{\n\
	// Called when PPG is first draw, use the opportunity to calculate the initial\n\
	// FCurve values\n\
	ReCalcInfo() ;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how the FCurve control can be customized via SetUIAttribute\n\
\' All editors show the same curve but the presentation differs\n\
option explicit\n\
dim oCustomProperty, oLayout, oLayoutItem\n\
set oCustomProperty = ActiveSceneRoot.AddProperty( \"CustomProperty\",false,\"FCurves\" )\n\
oCustomProperty.AddFCurveParameter \"curve1\" \n\
oCustomProperty.AddFCurveParameter \"curve2\" \n\
oCustomProperty.AddFCurveParameter \"curve3\" \n\
oCustomProperty.AddFCurveParameter \"curve4\" \n\
set oLayout = oCustomProperty.PPGLayout\n\
oLayout.AddRow\n\
oLayout.AddFCurve \"curve1\", 150\n\
oLayout.AddFCurve \"curve2\"\n\
oLayout.EndRow\n\
oLayout.AddRow\n\
oLayout.AddFCurve \"curve3\", 150\n\
oLayout.AddFCurve \"curve4\", 150\n\
oLayout.EndRow\n\
\'Now set attributes\n\
set oLayoutItem = oLayout.Item(\"curve2\")\n\
oLayoutItem.SetAttribute \"NoGrid\", true\n\
oLayoutItem.SetAttribute \"NoRulerX\", true\n\
oLayoutItem.SetAttribute \"NoRulerY\", true\n\
\'In order to line up nicely with the \n\
\'other curve in the row set a smaller size (because\n\
\'the ruler is not showing\n\
oLayoutItem.SetAttribute \"CY\", 125\n\
set oLayoutItem = oLayout.Item(\"curve3\")\n\
oLayoutItem.SetAttribute \"ViewMinX\", -100\n\
oLayoutItem.SetAttribute \"ViewMaxX\", 100\n\
oLayoutItem.SetAttribute \"ViewMinY\", 0\n\
oLayoutItem.SetAttribute \"ViewMaxY\", 150\n\
oLayoutItem.SetAttribute \"LabelX\", \"My X-Axis Label\"\n\
oLayoutItem.SetAttribute \"LabelY\", \"My Y-Axis Label\"\n\
oLayoutItem.SetAttribute \"ColorNonBijective\", true\n\
oLayoutItem.SetAttribute \"Ghosting\", true\n\
\'Grid spacing is mostly only a hint to the editor.\n\
\'It will ignore values that are too small\n\
set oLayoutItem = oLayout.Item(\"curve4\")\n\
oLayoutItem.SetAttribute \"GridSpaceX\", 25\n\
oLayoutItem.SetAttribute \"GridSpaceY\", 25\n\
\'Snap Grid is independent of the visible grid\n\
oLayoutItem.SetAttribute \"SnapX\", 10\n\
oLayoutItem.SetAttribute \"SnapY\", 10\n\
InspectObj oCustomProperty</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomProperty.AddFCurveParameter.html\">CustomProperty.AddFCurveParameter</a> <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> <a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";