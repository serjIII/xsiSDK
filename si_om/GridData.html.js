var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GridData</title>\n\
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
            <h1>GridData</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GridData</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_GridData\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object represents a 2-Dimensional array of data.  The word \"Grid\" refers to the\n\
visual presentation of 2-Dimensional data on a grid control (sometimes called a table \n\
or spreadsheet control).  The word \"Cell\" refers to a single element of the array.\n\
<br /><br />\n\
The dimensions of the array can be dynamically resized and \n\
many types of data can be stored as Cell data.  The Columns and Rows can be \n\
labelled and it is possible to refer to the data by these label strings rather than \n\
by indices.\n\
<br /><br />\n\
There are three main uses for the GridData object.  The first is as the data for\n\
a siGridControl on a custom object, see <a href=\"#!/url=./si_om/CustomProperty.AddGridParameter.html\">CustomProperty.AddGridParameter</a>.\n\
In this case the user can view and edit the data and the data is saved inside the scene along\n\
with the CustomProperty.  This can be an effective way to store lists, vectors or even\n\
arrays of vectors related to a plug-in.  Some aspects of the visual representation of the\n\
GridData object are set directly on the GridData object, for example \n\
<a href=\"#!/url=./si_om/GridData.SetColumnType.html\">GridData.SetColumnType</a>, but most attributes are set inside the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>\n\
using <a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">PPGItem.SetAttribute</a>.  <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>s that apply to the\n\
siGridControl include siUIGridColumnWidths and siUIGridHideRowHeader.\n\
<br /><br />\n\
A second possible use of the GridData object is to store hidden data that is intended for internal\n\
use by a plug-in.  In this case it is still part of a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> but\n\
it is not exposed to the user, which is easily done by not including the \n\
GridData <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> in the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.\n\
<br /><br />\n\
The third possible use of this object is as a temporary convenience object for dealing \n\
with 2-Dimensional Arrays.  \n\
In particular some scripting languages like JScript\n\
do not support 2-Dimensional arrays in their built-in <a href=\"#!/url=./files/Array.htm\">Array</a> \n\
objects, so the GridData object provides a workaround.  You can get a temporary GridData \n\
object by calling <a href=\"#!/url=./si_om/XSIFactory.CreateGridData.html\">XSIFactory.CreateGridData</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.BeginEdit.html\">BeginEdit</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.EndEdit.html\">EndEdit</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetCell.html\">GetCell</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetCellBackgroundColor.html\">GetCellBackgroundColor</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetCellReadOnlyFlags.html\">GetCellReadOnlyFlags</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetColumnComboItems.html\">GetColumnComboItems</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetColumnComboItemsSortType.html\">GetColumnComboItemsSortType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetColumnDef.html\">GetColumnDef</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetColumnLabel.html\">GetColumnLabel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetColumnType.html\">GetColumnType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetColumnValues.html\">GetColumnValues</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetRowBackgroundColor.html\">GetRowBackgroundColor</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetRowLabel.html\">GetRowLabel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GetRowValues.html\">GetRowValues</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.InsertColumn.html\">InsertColumn</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.InsertRow.html\">InsertRow</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.RemoveColumn.html\">RemoveColumn</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.RemoveRow.html\">RemoveRow</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetCell.html\">SetCell</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetCellBackgroundColor.html\">SetCellBackgroundColor</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetCellReadOnlyFlags.html\">SetCellReadOnlyFlags</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetColumnComboItems.html\">SetColumnComboItems</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetColumnComboItemsSortType.html\">SetColumnComboItemsSortType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetColumnDef.html\">SetColumnDef</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetColumnLabel.html\">SetColumnLabel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetColumnType.html\">SetColumnType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetColumnValues.html\">SetColumnValues</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetColumnsVisibility.html\">SetColumnsVisibility</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetRowBackgroundColor.html\">SetRowBackgroundColor</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetRowLabel.html\">SetRowLabel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetRowValues.html\">SetRowValues</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.SetRowsVisibility.html\">SetRowsVisibility</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.ColumnCount.html\">ColumnCount</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.Data.html\">Data</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.GridWidget.html\">GridWidget</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.MultiSelectionMode.html\">MultiSelectionMode</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.ReadOnly.html\">ReadOnly</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/GridData.RowCount.html\">RowCount</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"jscript\">GridTester();\n\
function GridTester()\n\
{\n\
	// \n\
	// A demonstration of the Grid Control on a Custom Property Set.\n\
	// Controls on the Property Page demonstrate the OM API that \n\
	// can be used to change the values and even size of the Grid Control\n\
	// based on Property Page Logic code.\n\
	//\n\
	var oPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"GridTester\" ) ;\n\
	var oGridParam = oPSet.AddGridParameter( \"TestGrid\" ) ;\n\
	// Set up some initial size\n\
	oGridParam.Value.RowCount = 3 ;\n\
	oGridParam.Value.ColumnCount = 2 ;\n\
	// Add the Edit boxes and other controls that will\n\
	// be used to get information from the user\n\
	oPSet.AddParameter3( \"DimRows\", siInt2, 3,null,null,false ) ;\n\
	oPSet.AddParameter3( \"DimCols\", siInt2, 2,null,null,false ) ;\n\
	oPSet.AddParameter3( \"CellRow\", siInt2, 0,null,null,false ) ;\n\
	oPSet.AddParameter3( \"CellCol\", siInt2, 0,null,null,false ) ;\n\
	oPSet.AddParameter3( \"CellValue\", siString, \"New Value\" ) ;\n\
	oPSet.AddParameter3( \"RowToChange\", siInt2, 0,null,null,false ) ;\n\
	oPSet.AddParameter3( \"RowValue\", siString, \"New Value\" ) ;\n\
	oPSet.AddParameter3( \"ColToChange\", siInt2, 0,null,null,false ) ;\n\
	oPSet.AddParameter3( \"ColValue\", siString, \"New Value\" ) ;\n\
	oPSet.AddParameter3( \"RowLabelToChange\", siInt2, 0,null,null,false ) ;\n\
	oPSet.AddParameter3( \"RowLabel\", siString, \"New Row Label\" ) ;\n\
	oPSet.AddParameter3( \"ColLabelToChange\", siInt2, 0,null,null,false ) ;\n\
	oPSet.AddParameter3( \"ColLabel\", siString, \"New Column Label\" ) ;\n\
	oPSet.AddParameter3( \"Batch\", siBool,false,null,null,false ) ;\n\
	oPSet.AddParameter3( \"ColHeaderMode\", siInt2, 0,null,null,false) ;\n\
	oPSet.AddParameter3( \"RowHeaderMode\", siInt2, 0,null,null,false) ;\n\
	oPSet.AddParameter3( \"Width\", siInt4, 0,null,null,false ) ;\n\
	oPSet.AddParameter3( \"Height\", siInt4, 0,null,null,false ) ;\n\
	oPSet.AddParameter3( \"ColWidths\", siString, \"45;30;50\" ) ;\n\
	oPSet.AddParameter3( \"ROCols\", siString, \"0;1\" ) ; // second column read-only be default\n\
	// Organize the controls on the PPG\n\
	var oLayout = oPSet.PPGLayout\n\
	var oPPGItem = oLayout.AddItem( \"TestGrid\", \"\",siControlGrid ) ;\n\
	oPPGItem.SetAttribute( \"NoLabel\", true  ) ;\n\
	oLayout.AddGroup( \"Change Contents Via OM\" ) ;\n\
		oLayout.AddGroup( \"Dimensions\" ) ;\n\
		oLayout.AddRow() ;\n\
			AddNonSliderItem( oLayout, \"DimRows\", \"Rows\", 50) ;\n\
			AddNonSliderItem( oLayout, \"DimCols\", \"Columns\", 50) ;\n\
			oLayout.AddButton( \"DimUpdate\", \"Update\" ) ;\n\
		oLayout.EndRow() ;\n\
		oLayout.EndGroup();\n\
		oLayout.AddGroup( \"Cell value\" ) ;\n\
		oLayout.AddRow() ;\n\
			AddNonSliderItem( oLayout, \"CellRow\", \"Row\", 75 ) ;\n\
			AddNonSliderItem( oLayout, \"CellCol\", \"Column\", 75 ) ;\n\
		oLayout.EndRow() ;\n\
		oLayout.AddRow() ;		\n\
			oLayout.AddItem( \"CellValue\", \"Value\" ) ;\n\
			oLayout.AddButton( \"CellValueUpdate\", \"Update\" ) ;\n\
		oLayout.EndRow() ;		\n\
		oLayout.EndGroup();\n\
		oLayout.AddGroup( \"Row Values\" ) ;\n\
		oLayout.AddRow() ;\n\
			AddNonSliderItem( oLayout, \"RowToChange\", \"Row\", 50 ) ;\n\
			oLayout.AddItem( \"RowValue\", \"Value\" ) ;\n\
			oLayout.AddButton( \"RowUpdate\", \"Update\" ) ;\n\
		oLayout.EndRow() ;\n\
		oLayout.EndGroup();\n\
		oLayout.AddGroup( \"Column Values\" ) ;\n\
		oLayout.AddRow() ;\n\
			AddNonSliderItem( oLayout, \"ColToChange\", \"Column\", 50 ) ;\n\
			oLayout.AddItem( \"ColValue\", \"Value\" ) ;\n\
			oLayout.AddButton( \"ColUpdate\", \"Update\" ) ;\n\
		oLayout.EndRow() ;\n\
		oLayout.EndGroup();\n\
		oLayout.AddGroup( \"Row Label\" ) ;\n\
		oLayout.AddRow() ;\n\
			AddNonSliderItem( oLayout, \"RowLabelToChange\", \"Row\", 50 ) ;\n\
			oLayout.AddItem( \"RowLabel\", \"Label\" ) ;\n\
			oLayout.AddButton( \"RowLabelUpdate\", \"Update\" ) ;\n\
		oLayout.EndRow() ;\n\
		oLayout.EndGroup();\n\
		oLayout.AddGroup( \"Column Label\" ) ;\n\
		oLayout.AddRow() ;\n\
			AddNonSliderItem( oLayout, \"ColLabelToChange\", \"Column\", 50 ) ;\n\
			oLayout.AddItem( \"ColLabel\", \"Label\" ) ;\n\
			oLayout.AddButton( \"ColLabelUpdate\", \"Update\" ) ;\n\
		oLayout.EndRow() ;\n\
		oLayout.EndGroup();\n\
		AddPushButton( oLayout, \"Batch\", \"Batch Edit\" ) ;\n\
	oLayout.EndGroup();\n\
	oLayout.AddGroup( \"Change Layout\" ) ;\n\
		oLayout.AddRow() ;\n\
			var headerModes = new Array( \"Normal\", 0, \"None\", 1, \"Locked\", 2) ;					\n\
			var oItem = oLayout.AddEnumControl( \"ColHeaderMode\", headerModes ) ;\n\
			oItem.SetAttribute( siUICX, 75 ) ;\n\
			oItem = oLayout.AddEnumControl( \"RowHeaderMode\", headerModes ) ;\n\
			oItem.SetAttribute( siUICX, 75 ) ;\n\
		oLayout.EndRow();			\n\
		oLayout.AddRow() ;\n\
			AddNonSliderItem( oLayout, \"Height\", \"Height\",75 ) ;\n\
			AddNonSliderItem( oLayout, \"Width\", \"Width\",75 ) ;\n\
		oLayout.EndRow() ;\n\
		oLayout.AddItem( \"ColWidths\" ) ;\n\
		oLayout.AddItem( \"ROCols\", \"Read Only Columns\" ) ;\n\
		oLayout.AddButton( \"Refresh\", \"Full Refresh\" ) ;\n\
	oLayout.EndGroup();\n\
	// Inject the event code\n\
	oLayout.Language = \"JScript\" ;	\n\
	oLayout.SetAttribute( \"HelpFile\", \"www.yahoo.com\" ) ;\n\
	oLayout.SetAttribute( \"LogicPrefix\", \"GridTester_\" )	\n\
	oLayout.Logic = GridTester_OnInit.toString() +	\n\
			GridTester_TestGrid_OnChanged.toString() +	\n\
			GridTester_DimUpdate_OnClicked.toString() +\n\
			GridTester_CellValueUpdate_OnClicked.toString() +\n\
			GridTester_RowUpdate_OnClicked.toString() +\n\
			GridTester_ColUpdate_OnClicked.toString() +\n\
			GridTester_RowLabelUpdate_OnClicked.toString() +\n\
			GridTester_ColLabelUpdate_OnClicked.toString() +\n\
			GridTester_Height_OnChanged.toString() +\n\
			GridTester_Width_OnChanged.toString() +\n\
			GridTester_Batch_OnChanged.toString() +\n\
			GridTester_ColHeaderMode_OnChanged.toString() +\n\
			GridTester_RowHeaderMode_OnChanged.toString() +\n\
			GridTester_Refresh_OnClicked.toString() + \n\
			GridTester_ColWidths_OnChanged.toString() + \n\
			GridTester_ROCols_OnChanged.toString() ;\n\
	InspectObj( oPSet ) ;\n\
}\n\
//Helper function to create a button rather than a check box\n\
//for showing a boolean parameter\n\
function AddPushButton( in_oLayout, in_ParamName, in_Label )\n\
{\n\
	var oPPGItem = in_oLayout.AddItem( in_ParamName, \"\", \"dscontrol\" ) ;\n\
	oPPGItem.SetAttribute( \"Caption\", in_ParamName );\n\
	oPPGItem.SetAttribute( \"Class\", \"Button\" );\n\
	oPPGItem.SetAttribute( \"CX\", 200 );		\n\
	oPPGItem.SetAttribute( \"Style\", 0x00001003 );//(BS_AUTOCHECKBOX|BS_PUSHLIKE)\n\
	oPPGItem.SetAttribute( \"NoLabel\", true ) ;\n\
}\n\
// By default numeric params have a slider, but\n\
// if we hide the slider the control takes up less horizontal space\n\
function AddNonSliderItem( in_oLayout, in_strParamName, in_strLabel, in_width )\n\
{\n\
	var oPPGItem = in_oLayout.AddItem( in_strParamName, in_strLabel ) ;\n\
	oPPGItem.SetAttribute( siUINoSlider, true ) ;\n\
	// Set a small width\n\
	oPPGItem.SetAttribute( siUICX, in_width ) ;\n\
	oPPGItem.WidthPercentage = 20 ;\n\
	oPPGItem.LabelPercentage = 20 ;\n\
	oPPGItem.LabelMinPixels = 20 ;	\n\
}\n\
//Logic Code for GridTester\n\
function GridTester_OnInit()\n\
{\n\
//Force the logic code to run for setting the Column Widths to the \n\
//default values\n\
	GridTester_ColWidths_OnChanged()\n\
	GridTester_ROCols_OnChanged()\n\
}\n\
function GridTester_TestGrid_OnChanged()\n\
{\n\
	// This is never called if the change to the grid\n\
	// if provoked by changes to the grid caused\n\
	// by the logic code itself.  It is only called\n\
	// if the cell contents are changed manually or by\n\
	// an external script that uses the Object Model.\n\
	logmessage( \"Callback called for contents of TestGrid changing\" ) ;\n\
	var oGridData = PPG.TestGrid.value ;\n\
	//Update the dimensions items based on the current size\n\
	PPG.DimRows.Value = oGridData.RowCount ;\n\
	PPG.DimCols.Value = oGridData.ColumnCount ;\n\
}\n\
function GridTester_DimUpdate_OnClicked()\n\
{\n\
	var oGridData = PPG.TestGrid.value ;\n\
	//Bracket with BeginEdit/EndEdit \n\
	//so we only do a single update\n\
	oGridData.BeginEdit() ;\n\
	oGridData.RowCount = DimRows ;\n\
	oGridData.ColumnCount = DimCols ;\n\
	oGridData.EndEdit() ;\n\
	Logmessage( \"Calling GridData.RowCount = \" + DimRows ) ;\n\
	Logmessage( \"Calling GridData.ColumnCount = \" + DimCols ) ;\n\
	// Notice that no call to PPG.Refresh is necessary\n\
}\n\
function GridTester_CellValueUpdate_OnClicked()\n\
{\n\
	var oGridData = PPG.TestGrid.value ;\n\
	oGridData.SetCell( \n\
				PPG.CellCol.Value, \n\
				PPG.CellRow.Value, \n\
				PPG.CellValue.Value ) ;\n\
	Logmessage( \"Calling GridData.SetCell\" ) ;\n\
}\n\
function GridTester_RowUpdate_OnClicked()\n\
{\n\
	var oGridData = PPG.TestGrid.value ;\n\
	//All items in the row will have the same value\n\
	var newValue = PPG.RowValue.Value ;\n\
	var aRowValues = new Array( oGridData.ColumnCount ) ;\n\
	for ( var i = 0 ; i &lt; aRowValues.length ; i++ )\n\
	{\n\
		aRowValues[i] = newValue ;\n\
	}\n\
	oGridData.SetRowValues( PPG.RowToChange.Value, aRowValues ) ;\n\
	Logmessage( \"Calling GridData.SetRowValues\" ) ;\n\
}\n\
function GridTester_ColUpdate_OnClicked()\n\
{\n\
	var oGridData = PPG.TestGrid.value\n\
	var newValue = PPG.ColValue.Value ;\n\
	var aColValues = new Array( oGridData.RowCount ) ;\n\
	for ( var i = 0 ; i &lt; aColValues.length ; i++ )\n\
	{\n\
		aColValues[i] = newValue ;\n\
	}\n\
	oGridData.SetColumnValues( PPG.ColToChange.Value, aColValues ) ;\n\
	Logmessage( \"Calling GridData.SetColumnValues\" ) ;\n\
}\n\
function GridTester_RowLabelUpdate_OnClicked()\n\
{\n\
	var oGridData = PPG.TestGrid.value ;	\n\
	oGridData.SetRowLabel( PPG.RowLabelToChange.Value, PPG.RowLabel ) ;\n\
	Logmessage( \"Calling GridData.SetRowLabel\" ) ;\n\
}\n\
function GridTester_ColLabelUpdate_OnClicked()\n\
{\n\
	var oGridData = PPG.TestGrid.value ;\n\
	oGridData.SetColumnLabel( PPG.ColLabelToChange.Value, PPG.ColLabel ) ;\n\
	Logmessage( \"Calling GridData.SetColumnLabel\" ) ;\n\
}\n\
function GridTester_Batch_OnChanged()\n\
{\n\
	var oGridData = PPG.TestGrid.value ;\n\
	// Demonstrate the ability to do multiple\n\
	// updates without forcing a refresh\n\
	if ( PPG.Batch.Value == 0 )\n\
	{\n\
		logmessage( \"Calling GridData.EndEdit\" ) ;\n\
		oGridData.EndEdit() ;\n\
	}\n\
	else\n\
	{\n\
		// Button pushed in\n\
		logmessage( \"Calling GridData.BeginEdit\" ) ;\n\
		oGridData.BeginEdit() ;\n\
	}\n\
}\n\
function GridTester_Refresh_OnClicked()\n\
{\n\
	// Does a complete refresh of the Property Page\n\
	// Normal updates to the Grid should not require this\n\
	PPG.Refresh() ;\n\
	Logmessage( \"Calling PPG.Refresh\" ) ;\n\
}\n\
function GridTester_Height_OnChanged()\n\
{\n\
	var oLayout = PPG.PPGLayout\n\
	var oPPGItem = oLayout.Item( \"TestGrid\" )\n\
	if ( PPG.Height.Value != 0 ) \n\
	{\n\
		oPPGItem.SetAttribute( \"CY\", PPG.Height.Value ) ;\n\
	}\n\
	else\n\
	{\n\
		// When no attribute is set control will resize to fit the data\n\
		oPPGItem.SetAttribute( \"CY\", null ) ;\n\
	}\n\
	// Attribute changes don\'t appear until there is a complete refresh\n\
	PPG.Refresh() ;\n\
}\n\
function GridTester_Width_OnChanged()\n\
{\n\
	var oLayout = PPG.PPGLayout\n\
	var oPPGItem = oLayout.Item( \"TestGrid\" )\n\
	if ( PPG.Width.Value != 0 ) \n\
	{\n\
		oPPGItem.SetAttribute( \"CX\", PPG.Width.Value ) ;\n\
	}\n\
	else\n\
	{\n\
		oPPGItem.SetAttribute( \"CX\", null ) ;\n\
	}\n\
	PPG.Refresh() ;\n\
}\n\
function GridTester_ColWidths_OnChanged()\n\
{\n\
	var oLayout = PPG.PPGLayout\n\
	var oPPGItem = oLayout.Item( \"TestGrid\" )\n\
	if ( PPG.ColWidths.Value != \"\" )\n\
	{\n\
		oPPGItem.SetAttribute( \"ColumnWidths\", PPG.ColWidths.Value ) ;\n\
	}\n\
	else\n\
	{\n\
		oPPGItem.SetAttribute( \"ColumnWidths\", null ) ;\n\
	}\n\
	PPG.Refresh() ;	\n\
}\n\
function GridTester_ROCols_OnChanged()\n\
{\n\
	var oLayout = PPG.PPGLayout\n\
	var oPPGItem = oLayout.Item( \"TestGrid\" )\n\
	if ( PPG.ColWidths.Value != \"\" )\n\
	{\n\
		oPPGItem.SetAttribute( \"ReadOnlyColumns\", PPG.ROCols.Value ) ;\n\
	}\n\
	else\n\
	{\n\
		oPPGItem.SetAttribute( \"ReadOnlyColumns\", null ) ;\n\
	}\n\
	PPG.Refresh() ;	\n\
}\n\
function GridTester_ColHeaderMode_OnChanged()\n\
{\n\
	var oLayout = PPG.PPGLayout\n\
	var oPPGItem = oLayout.Item( \"TestGrid\" )\n\
	//Locked only makes sense if you set an explicit Height to the control\n\
	oPPGItem.SetAttribute( \"LockColumnHeader\", PPG.ColHeaderMode.Value == 2 ) ;\n\
	oPPGItem.SetAttribute( \"HideColumnHeader\", PPG.ColHeaderMode.Value == 1 ) ;\n\
	PPG.Refresh()\n\
	if ( PPG.ColHeaderMode.Value == 2 )\n\
	{\n\
		Logmessage( \"Setting LockColumnHeader attribute on Layout\" ) ;\n\
	}\n\
	else if (  PPG.ColHeaderMode.Value == 1 )\n\
	{\n\
		Logmessage( \"Setting HideColumnHeader attribute on Layout\" ) ;\n\
	}\n\
}\n\
function GridTester_RowHeaderMode_OnChanged()\n\
{\n\
	var oLayout = PPG.PPGLayout\n\
	var oPPGItem = oLayout.Item( \"TestGrid\" )\n\
	oPPGItem.SetAttribute( \"LockRowHeader\", PPG.RowHeaderMode.Value == 2 ) ;\n\
	oPPGItem.SetAttribute( \"HideRowHeader\", PPG.RowHeaderMode.Value == 1 ) ;\n\
	PPG.Refresh()\n\
	if ( PPG.RowHeaderMode.Value == 2 )\n\
	{\n\
		Logmessage( \"Setting LockRowHeader attribute on Layout\" ) ;\n\
	}\n\
	else if (  PPG.RowHeaderMode.Value == 1 )\n\
	{\n\
		Logmessage( \"Setting HideRowHeader attribute on Layout\" ) ;\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Example of using GridData as a convenient way\n\
// to deal with 2D arrays from JScript\n\
//\n\
// ClusterProperties are widely used in scripting\n\
// and their data is represented as a 2D array.  E.g.\n\
// there is a row for each component and each component\n\
// has multiple values (e.g. RGBA or UVW) which\n\
// are the column values.  Even a Weight map is represented\n\
// this way, even though there is only 1 value per component\n\
//\n\
// JScript has no 2D support.  Normally it is necessary to \n\
// convert to a 1D array using the VBArray.toArray method.\n\
// However if the data is transferred into a DataGrid object\n\
// it is then possible to access the data via a more convenient\n\
// API, for example Row by Row or setting values at a precise\n\
// Row/Column coordinate.  This is demonstrated here:\n\
var oGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\" ) ;\n\
oGrid.subdivu = 1 ;\n\
oGrid.subdivv = 1 ;\n\
SelectObj( oGrid ) ;\n\
CreateVertexColorSupport(null, \"Vertex_Color\", null, null);\n\
var oClusterProp = oGrid.ActivePrimitive.Geometry.Clusters(0).Properties( \"Vertex_Color\" ) ;\n\
var oGridData = XSIFactory.CreateGridData()\n\
// Example 1: Read the vertex color values\n\
// By transferring into GridData.  \n\
// There are 4 Columns - R,G,B, and A \n\
// and there is 1 Row for each vertex.\n\
oGridData.Data = oClusterProp.Elements.Array\n\
LogMessage( \"Blue Component on Vertex 0: \" + oGridData.GetCell( 2, 0 ) ) ;\n\
LogMessage( \"Red Component on Vertex 2: \" + oGridData.GetCell( 0, 2 ) ) ;\n\
// Example 2: Change the vertex color values\n\
for ( var i = 0 ; i &lt; oGridData.RowCount ; i++ )\n\
{\n\
	// Set RGBA value on each vertex\n\
	oGridData.SetRowValues( i, Array( i * 0.10, 0.50, 0.75, 0.1 ) ) ;\n\
}\n\
// We MUST put the changed data back into the cluster property if we\n\
// want our changes to take effect\n\
oClusterProp.Elements.Array = oGridData.Data\n\
// Example 3: Display the values in custom pset\n\
var oPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"ClusterPropContents\" ) ;\n\
var oParam1 = oPSet.AddGridParameter( \"mygrid\" ) ;\n\
var oLayout = oPSet.PPGLayout\n\
var oPPGItem = oLayout.AddItem( \"mygrid\", \"\",siControlGrid ) ;\n\
oPPGItem.SetAttribute( \"NoLabel\", true  ) ;\n\
//Copy data from our free floating \n\
//GridData object to the one on the Custom Property\n\
var oGridDataOnPSet = oParam1.Value ;\n\
oGridDataOnPSet.Data = oGridData.Data ;\n\
// Set up labels so the user knows what the data is\n\
oGridDataOnPSet.SetColumnLabel(0, \"R\" ) ;\n\
oGridDataOnPSet.SetColumnLabel(1, \"G\" ) ;\n\
oGridDataOnPSet.SetColumnLabel(2, \"B\" ) ;\n\
oGridDataOnPSet.SetColumnLabel(3, \"A\" ) ;\n\
for ( i = 0 ; i &lt; oGridData.RowCount ; i++ )\n\
{\n\
	oGridDataOnPSet.SetRowLAbel( i, \"Vertex \" + i.toString() ) ;\n\
}\n\
// Now you can change the data by using the labels\n\
// (this doesn\'t change the copy of the data inside oGridData)\n\
oGridDataOnPSet.SetCell( \"G\", \"Vertex 2\", 0.99 ) ;\n\
InspectObj( oPSet ) ;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIFactory.CreateGridData.html\">XSIFactory.CreateGridData</a> <a href=\"#!/url=./si_om/CustomProperty.AddGridParameter.html\">CustomProperty.AddGridParameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";