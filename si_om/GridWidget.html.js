var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GridWidget</title>\n\
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
            <h1>GridWidget</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GridWidget</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_GridWidget\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1GridWidget.html\">GridWidget</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.2</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The GridWidget object represents the user interface control that\n\
shows a <a href=\"#!/url=./si_om/GridData.html\">GridData</a> object inside a Property Page.\n\
It exposes information that is transitive and directly related to the\n\
state of the control itself rather than the underlying GridData.\n\
For example, this object exposes information about which cells the\n\
user has clicked on.<br /><br />\n\
Unlike the actual GridData content, the selection state is lost when\n\
the Property Page (<a href=\"#!/url=./si_om/PPG.html\">PPG</a>) is closed and then reopened.<br /><br />\n\
Note: The layout of the GridData on the property page is defined by the \n\
<a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a> object that represents the GridData on the \n\
<a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> for that property page. For example, the \n\
siUIGridSelectionMode attribute controls whether cells are selected \n\
individually, by row or column, or not at all (see <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>).\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridWidget.AddToSelection.html\">AddToSelection</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridWidget.ClearSelection.html\">ClearSelection</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridWidget.GetSelection.html\">GetSelection</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridWidget.IsCellSelected.html\">IsCellSelected</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridWidget.IsColumnSelected.html\">IsColumnSelected</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridWidget.IsRowSelected.html\">IsRowSelected</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridWidget.SortColumn.html\">SortColumn</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demontrates a typical use of the \n\
	GridWidget object - as a way of allowing users to \n\
	delete rows or columns from a GridData object\n\
*/\n\
var oProp = ActiveSceneRoot.AddProperty( \"CustomProperty\", \n\
				false, \"GridWidgetDemo\" );			\n\
var oParameter = oProp.AddGridParameter( \"DemoGrid\" ) ;\n\
var oGridData = oParameter.Value ;\n\
oGridData.ColumnCount = 3\n\
oGridData.RowCount = 20\n\
// Fill in some initial values\n\
for ( i = 0 ; i &lt; oGridData.RowCount ; i++ )\n\
	for ( j = 0 ; j &lt; oGridData.ColumnCount ; j++ )\n\
		oGridData.SetCell( j, i, i + \".\" + j ) ;\n\
var oPPGLayout = oProp.PPGLayout\n\
var oGridPPGItem = oPPGLayout.AddItem( \"DemoGrid\" )\n\
oGridPPGItem.SetAttribute( siUINoLabel, true );\n\
oGridPPGItem.SetAttribute( siUIGridSelectionMode, siSelectionHeader );\n\
oGridPPGItem.SetAttribute( siUIGridColumnWidths, \"25:100:75:100\" );\n\
oGridPPGItem.SetAttribute( siUIGridReadOnlyColumns, \"1\" );\n\
oPPGLayout.AddRow() ;\n\
oPPGLayout.AddButton( \"DeleteRow\", \"Delete Selected Row(s)\" ) ;\n\
oPPGLayout.AddButton( \"DeleteColumn\", \"Delete Selected Column(s)\" ) ;\n\
oPPGLayout.EndRow() ;\n\
oPPGLayout.Language = \"JScript\" ;\n\
oPPGLayout.Logic = DeleteRow_OnClicked.toString() + \n\
	DeleteColumn_OnClicked.toString() ; \n\
InspectObj( oProp ) ;\n\
function DeleteRow_OnClicked()\n\
{\n\
	var oGridData = PPG.DemoGrid.Value ;\n\
	oGridData.BeginEdit() ;\n\
	var oGridWidget = oGridData.GridWidget\n\
	// shift the rows upwards to overwrite the selected rows\n\
	var writePos = 0 ;\n\
	for ( var readPos = 0  ; readPos &lt; oGridData.RowCount ; readPos++ )\n\
	{\n\
		if ( !oGridWidget.IsRowSelected(readPos) )\n\
		{\n\
			if ( readPos != writePos )\n\
			{\n\
				oGridData.SetRowValues( \n\
							writePos, \n\
							oGridData.GetRowValues( readPos ) ) ;\n\
			}\n\
			writePos++ ;\n\
		}\n\
	}\n\
	// Shrink the GridData\n\
	oGridData.RowCount = writePos ;\n\
	oGridData.EndEdit() ;	\n\
}\n\
function DeleteColumn_OnClicked()\n\
{\n\
	var oGridData = PPG.DemoGrid.Value ;\n\
	oGridData.BeginEdit() ;\n\
	var oGridWidget = oGridData.GridWidget\n\
	// shift the rows upwards to overwrite the selected rows\n\
	var writePos = 0 ;\n\
	for ( var readPos = 0  ; readPos &lt; oGridData.ColumnCount ; readPos++ )\n\
	{\n\
		if ( !oGridWidget.IsColumnSelected(readPos) )\n\
		{\n\
			if ( readPos != writePos )\n\
			{\n\
				oGridData.SetColumnValues( \n\
							writePos, \n\
							oGridData.GetColumnValues( readPos ) ) ;\n\
			}\n\
			writePos++ ;\n\
		}\n\
	}\n\
	// Shrink the GridData\n\
	oGridData.ColumnCount = writePos ;\n\
	oGridData.EndEdit() ;	\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/GridData.html\">GridData</a> <a href=\"#!/url=./si_om/GridData.GridWidget.html\">GridData.GridWidget</a> <a href=\"#!/url=./si_om/PPG.html\">PPG</a> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";