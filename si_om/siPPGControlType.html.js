var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siPPGControlType</title>\n\
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
            <h1>siPPGControlType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siPPGControlType</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Specifies the different types of controls (i.e. widgets) supported on a Softimage Property Page.\n\
Controls on a Property Page usually display and control the value of a <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> on an\n\
inspected object.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siControlBitmap                                                // BitmapWidget\n\
StringModule.siControlBoolean                                               // Boolean\n\
StringModule.siControlButton                                                // commandbutton\n\
StringModule.siControlCheck                                                 // Check\n\
StringModule.siControlCombo                                                 // Combo\n\
StringModule.siControlEdit                                                  // edit\n\
StringModule.siControlFCurve                                                // FCurveWidget\n\
StringModule.siControlFilePath                                              // FilePath\n\
StringModule.siControlFolder                                                // Folder\n\
StringModule.siControlGradient                                              // gradient\n\
StringModule.siControlGrid                                                  // GridWidget\n\
StringModule.siControlIconList                                              // IconList\n\
StringModule.siControlImageClip                                             // ImageClipWidget\n\
StringModule.siControlListBox                                               // ListBox\n\
StringModule.siControlNumber                                                // Number\n\
StringModule.siControlRadio                                                 // Radio\n\
StringModule.siControlRGB                                                   // RGB\n\
StringModule.siControlRGBA                                                  // RGBA\n\
StringModule.siControlStatic                                                // Static\n\
StringModule.siControlString                                                // String\n\
StringModule.siControlSynoptic                                              // SynopticWidget\n\
StringModule.siControlTextEditor                                            // TextEditorWidget\n\
StringModule.siControlTextureSpace                                          // TextureSpaceItem.TextureSpaceItem.1</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlBitmap\"> </a>siControlBitmap		</td>\n\
		<td class=\"example\">BitmapWidget		</td>\n\
		<td>\n\
A static bitmap control.  The control needs to be associated with a \n\
		real parameter on the inspected object, but the value is neither read nor changed.  This control is often used \n\
		for displaying a logo. The path is specified using <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFilePath\">siUIFilePath</a>. For more \n\
		information, see the <a href=\"#!/url=./files/cus_ppg_BitmapWidget.htm\">Bitmap Widget</a> \n\
		topic.\n\
		<br /><br />\n\
		For Image Clip control, use the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlImageClip\">siControlImageClip</a> control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlBoolean\"> </a>siControlBoolean		</td>\n\
		<td class=\"example\">Boolean		</td>\n\
		<td>\n\
A simple check box.  This is the default control for <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
		parameters. For more information, see the <a href=\"#!/url=./files/cus_ppg_CheckBox.htm\">Check Box</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlButton\"> </a>siControlButton		</td>\n\
		<td class=\"example\">commandbutton		</td>\n\
		<td>\n\
A button is a special kind of control which is not associated with any \n\
		parameter of the inspected object. See <a href=\"#!/url=./si_om/PPGLayout.AddButton.html\">PPGLayout.AddButton</a>. \n\
		<br /><br />\n\
		Supported attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICX\">siUICX</a> and \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a>. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_CommandButton.htm\">Command Button</a> topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlCheck\"> </a>siControlCheck		</td>\n\
		<td class=\"example\">Check		</td>\n\
		<td>\n\
Bitfield control, showing separate check boxes for each item in the \n\
		<a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> list.  The value of the parameter will be equal to the sum of all the \n\
		checked items.  This control is useful for packing many flags into a single integer while still having a \n\
		convenient user interface to set or view which flags have been set. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_Bitfield.htm\">Bitfield</a> topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlCombo\"> </a>siControlCombo		</td>\n\
		<td class=\"example\">Combo		</td>\n\
		<td>\n\
A read-only edit control, with a drop down menu showing items out of the \n\
		<a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> list. \n\
		<br /><br />\n\
		Supported attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICX\">siUICX</a> and \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a>. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_ComboDropDownBox.htm\">Combo/Drop-Down Box</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlEdit\"> </a>siControlEdit		</td>\n\
		<td class=\"example\">Edit		</td>\n\
		<td>\n\
An edit box control.  It is similar to <a href=\"#!/url=./si_om/siPPGControlType.html#siControlString\">siControlString</a>, \n\
		however it supports the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICX\">siUICX</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a> and \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIStyle\">siUIStyle</a> attributes and is used as a multi-line string edit box. For more \n\
		information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_MultilineText.htm\">Multi-line Text</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlFCurve\"> </a>siControlFCurve		</td>\n\
		<td class=\"example\">FCurveWidget		</td>\n\
		<td>\n\
A control for displaying an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> (see \n\
		<a href=\"#!/url=./si_om/PPGLayout.AddFCurve.html\">PPGLayout.AddFCurve</a>). \n\
		<br /><br />\n\
		Supported optional attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICX\">siUICX</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveLabelX\">siUIFCurveLabelX</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveLabelY\">siUIFCurveLabelY</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveViewMinX\">siUIFCurveViewMinX</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveViewMaxX\">siUIFCurveViewMaxX</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveViewMinY\">siUIFCurveViewMinY</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveViewMaxY\">siUIFCurveViewMaxY</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveGridSpaceX\">siUIFCurveGridSpaceX</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveGridSpaceY\">siUIFCurveGridSpaceY</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveNoGrid\">siUIFCurveNoGrid</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveNoRulerX\">siUIFCurveNoRulerX</a>, and <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveNoRulerY\">siUIFCurveNoRulerY</a>. \n\
		For more information, see the <a href=\"#!/url=./files/cus_ppg_FCurveWidget.htm\">FCurve Widget</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlFilePath\"> </a>siControlFilePath		</td>\n\
		<td class=\"example\">FilePath		</td>\n\
		<td>\n\
A control for driving a string Parameter containing a file name. The control \n\
		provides an edit box and a button that launches a file browser (similar to <a href=\"#!/url=./si_om/XSIUIToolkit.FileBrowser.html\">XSIUIToolkit.FileBrowser</a>).  \n\
		<br /><br />\n\
		Supported attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFileFilter\">siUIFileFilter</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIInitialDir\">siUIInitialDir</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUISubFolder\">siUISubFolder</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIAudioFile\">siUIAudioFile</a>,\n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIImageFile\">siUIImageFile</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIOpenFile\">siUIOpenFile</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFileMustExist\">siUIFileMustExist</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIStyle\">siUIStyle</a>. For more \n\
		information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_FileBrowserWidget.htm\">File Browser Widget</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlFolder\"> </a>siControlFolder		</td>\n\
		<td class=\"example\">Folder		</td>\n\
		<td>\n\
A control for driving a string Parameter with an edit box and a button that \n\
		launches a directory picker.  \n\
		<br /><br />\n\
		Supported attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIInitialDir\">siUIInitialDir</a> \n\
		and <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUISubFolder\">siUISubFolder</a>. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_FolderWidget.htm\">Folder Widget</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlGradient\"> </a>siControlGradient		</td>\n\
		<td class=\"example\">gradient		</td>\n\
		<td>\n\
A control that shows a fully featured gradient editor.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlGrid\"> </a>siControlGrid		</td>\n\
		<td class=\"example\">GridWidget		</td>\n\
		<td>\n\
A control of type <a href=\"#!/url=./si_om/GridWidget.html\">GridWidget</a> which displays the data from \n\
		a <a href=\"#!/url=./si_om/GridData.html\">GridData</a> object. It shows a multi-column list control, similar to a spreadsheet.  See \n\
		<a href=\"#!/url=./si_om/CustomProperty.AddGridParameter.html\">CustomProperty.AddGridParameter</a>. \n\
		<br /><br />\n\
		Supported optional attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICX\">siUICX</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridColumnWidths\">siUIGridColumnWidths</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridLockColumnHeader\">siUIGridLockColumnHeader</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridLockRowHeader\">siUIGridLockRowHeader</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridHideColumnHeader\">siUIGridHideColumnHeader</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridReadOnlyColumns\">siUIGridReadOnlyColumns</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridHideRowHeader\">siUIGridHideRowHeader</a> \n\
		and <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridSelectionMode\">siUIGridSelectionMode</a>. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_GridDataWidget.htm\">GridData Widget</a> topic.  \n\
		<br /><br />\n\
		Note: This control has no relationship to the <a href=\"#!/url=./si_cmds/GeometryPrimitives.html#\">geometric shape</a> called \n\
		a \"Grid\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlIconList\"> </a>siControlIconList		</td>\n\
		<td class=\"example\">IconList		</td>\n\
		<td>\n\
Similar to a <a href=\"#!/url=./si_om/siPPGControlType.html#siControlRadio\">siControlRadio</a>, except each \n\
		item is represented by a bitmap on the screen rather than by a text label.  Only .bmp files are supported, and the \n\
		filenames of these files are specified in the <a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> list. \n\
		<br /><br />\n\
		Supported attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIColumnCnt\">siUIColumnCnt</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUILineCnt\">siUILineCnt</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIColumnGap\">siUIColumnGap</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUILineGap\">siUILineGap</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUISelectionColor\">siUISelectionColor</a>, and \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIUseSelectionIcon\">siUIUseSelectionIcon</a>. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_IconButtons.htm\">Icon Buttons</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlImageClip\"> </a>siControlImageClip		</td>\n\
		<td class=\"example\">ImageClipWidget		</td>\n\
		<td>\n\
 A control that shows an Image Clip. You use this control with a \n\
		string parameter whose value is the Image Clip full name.\n\
		<br /><br />\n\
		Supported attribute is <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIShowClip\">siUIShowClip</a>. \n\
		<br /><br />\n\
		For static bitmap control, use the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlBitmap\">siControlBitmap</a> control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlListBox\"> </a>siControlListBox		</td>\n\
		<td class=\"example\">ListBox		</td>\n\
		<td>\n\
This control is functionally similar to \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlRadio\">siControlRadio</a> and <a href=\"#!/url=./si_om/siPPGControlType.html#siControlCombo\">siControlCombo</a> in that it \n\
		shows a list of possible items. However, unlike those other controls, you have the option to use the ListBox in a \n\
		multi-selection mode by using the attribute <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIMultiSelectionListBox\">siUIMultiSelectionListBox</a>. \n\
		<br /><br />\n\
		The <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICX\">siUICX</a> and <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a> attributes can be set \n\
		to change the size. If no <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIStyle\">siUIStyle</a> attribute is assigned and the list is too \n\
		large to fit, the ListBox will display a vertical scroll bar. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_ListBox.htm\">List Box</a> topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlNumber\"> </a>siControlNumber		</td>\n\
		<td class=\"example\">Number		</td>\n\
		<td>\n\
A numeric control, normally with both an edit control and a slider. This is the \n\
		default control for all numeric parameters. \n\
		<br /><br />\n\
		Supported attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICX\">siUICX</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUISyncSlider\">siUISyncSlider</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUILogarithmic\">siUILogarithmic</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIDecimals\">siUIDecimals</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUINoSlider\">siUINoSlider</a>, \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUITreadmill\">siUITreadmill</a> and <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIThumbWheel\">siUIThumbWheel</a>. \n\
		For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_NumericEditBoxWithSlider.htm\">Numeric Edit Box with Slider</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlRadio\"> </a>siControlRadio		</td>\n\
		<td class=\"example\">Radio		</td>\n\
		<td>\n\
Radio control, allowing you to select a single item out of the \n\
		<a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> list.  This is the same behavior as the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlCombo\">siControlCombo</a>\n\
		control, except that all the options are displayed on the screen.  Hence a Combo box is best suited for large lists \n\
		of items. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_RadioButtons.htm\">Radio Buttons</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlRGB\"> </a>siControlRGB		</td>\n\
		<td class=\"example\">RBG		</td>\n\
		<td>\n\
A Color control with no \"Alpha\" channel.  This control is associated with three \n\
		parameters in the underlying object.  See <a href=\"#!/url=./si_om/PPGLayout.AddColor.html\">PPGLayout.AddColor</a>. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_RGBColorControl.htm\">RGB Color Control</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlRGBA\"> </a>siControlRGBA		</td>\n\
		<td class=\"example\">RBGA		</td>\n\
		<td>\n\
A Color control that includes the \"Alpha\" channel.  This control is associated \n\
		with four parameters in the underlying object.  See <a href=\"#!/url=./si_om/PPGLayout.AddColor.html\">PPGLayout.AddColor</a>. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_RGBAColorControl.htm\">RGBA Color Control</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlStatic\"> </a>siControlStatic		</td>\n\
		<td class=\"example\">Static		</td>\n\
		<td>\n\
Static text on the property page, see <a href=\"#!/url=./si_om/PPGLayout.AddStaticText.html\">PPGLayout.AddStaticText</a>.\n\
		If the <a href=\"#!/url=./si_om/PPGItem.Name.html\">PPGItem.Name</a> of the associated item is \"Static\" the <a href=\"#!/url=./si_om/PPGItem.Label.html\">PPGItem.Label</a> will be \n\
		displayed as the static text.  Otherwise the name is assumed to refer to an actual string <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> \n\
		and its value is shown.\n\
		<br /><br /> \n\
		Tip: To break the text onto multiple lines, include line return characters in the text (vbCrLf in vbscript and \"\\n\" in \n\
		JScript). \n\
		<br /><br />\n\
		Supported attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICX\">siUICX</a> and \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a>. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_StaticText.htm\">Static Text</a> topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlString\"> </a>siControlString		</td>\n\
		<td class=\"example\">String		</td>\n\
		<td>\n\
A single line edit box for displaying text. This is the default control for \n\
		<a href=\"#!/url=./files/String.htm\">String</a> parameters. \n\
		<br /><br />\n\
		Supported attributes are <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICX\">siUICX</a> and \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a>.  For multi-line strings use the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlEdit\">siControlEdit</a> instead. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_SingleLineText.htm\">Single-line Text</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlSynoptic\"> </a>siControlSynoptic		</td>\n\
		<td class=\"example\">SynopticWidget		</td>\n\
		<td>\n\
A control that shows a synoptic view. You use this control with a \n\
		string parameter whose value is the full path to the synoptic file. The size of the synoptic view determines the \n\
		size of the control. For an example of the synoptic control, see the \n\
		<a href=\"#!/url=./examples/Addons/PPGDemos/netview_PPGDemos.htm\">PPGDemos</a> example. For more information, see \n\
		the <a href=\"#!/url=./files/cus_ppg_SynopticWidget.htm\">Synoptic Widget</a> topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlTextEditor\"> </a>siControlTextEditor		</td>\n\
		<td class=\"example\">TextEditorWidget		</td>\n\
		<td>\n\
A control that shows a full-featured text editor. You use this control with a \n\
		string parameter whose value will be set to the text in the editor. For more information, see the \n\
		<a href=\"#!/url=./files/cus_ppg_TextEditorWidget.htm\">Text Editor Widget</a> \n\
		topic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlTextureSpace\"> </a>siControlTextureSpace		</td>\n\
		<td class=\"example\">TextureSpaceItem.TextureSpaceItem.1		</td>\n\
		<td>\n\
A control that shows a texture space combo box.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGItem.Type.html\">PPGItem.Type</a> <a href=\"#!/url=./si_om/PPGLayout.AddEnumControl.html\">PPGLayout.AddEnumControl</a> <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html#GetType\">PPGItem::GetType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html#PutType\">PPGItem::PutType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html#AddEnumControl\">PPGLayout::AddEnumControl</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html#AddItem\">PPGLayout::AddItem</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a> <a href=\"#!/url=./files/cus_ppg_PropertyPageControls.htm\">Property Page Controls</a> <a href=\"#!/url=./files/cus_ppg_SettingControlAttributes.htm\">Setting Control Attributes</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";