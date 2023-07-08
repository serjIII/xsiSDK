var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siPPGItemAttribute</title>\n\
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
            <h1>siPPGItemAttribute</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siPPGItemAttribute</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Specifies the different attributes supported on <a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a>s. Many of these attributes only apply to a specific \n\
type of control, for example siUIColumnGap only applies to <a href=\"#!/url=./si_om/siPPGControlType.html#siControlIconList\">siControlIconList</a>. Other attributes, \n\
such as <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUINoLabel\">siUINoLabel</a> and <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a>, are supported on practically \n\
every control.\n\
<br /><br />\n\
Some of the most common attributes are available more directly as properties of the PPGItem, for example <a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> \n\
is a convenient way to set the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIItems\">siUIItems</a> attribute.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siUIAlignCenter                                                // AlignCenter\n\
StringModule.siUIAlignLeft                                                  // AlignLeft\n\
StringModule.siUIAlignRight                                                 // AlignRight\n\
StringModule.siUIAudioFile                                                  // AudioFile\n\
StringModule.siUIButtonDisable                                              // ButtonDisable\n\
StringModule.siUICaption                                                    // caption\n\
StringModule.siUIColumnCnt                                                  // nocol\n\
StringModule.siUIColumnGap                                                  // colgap\n\
StringModule.siUIContinue                                                   // Continue\n\
StringModule.siUICX                                                         // CX\n\
StringModule.siUICY                                                         // CY\n\
StringModule.siUIDecimals                                                   // decimals\n\
StringModule.siUIFCurveColorNonBijective                                    // ColorNonBijective\n\
StringModule.siUIFCurveGhosting                                             // Ghosting\n\
StringModule.siUIFCurveGridSpaceX                                           // GridSpaceX\n\
StringModule.siUIFCurveGridSpaceY                                           // GridSpaceY\n\
StringModule.siUIFCurveLabelX                                               // LabelX\n\
StringModule.siUIFCurveLabelY                                               // LabelY\n\
StringModule.siUIFCurveNoGrid                                               // NoGrid\n\
StringModule.siUIFCurveNoRulerX                                             // NoRulerX\n\
StringModule.siUIFCurveNoRulerY                                             // NoRulerY\n\
StringModule.siUIFCurveShowTimeCursor                                       // ShowTimeCursor\n\
StringModule.siUIFCurveSnapX                                                // SnapX\n\
StringModule.siUIFCurveSnapY                                                // SnapY\n\
StringModule.siUIFCurveViewMaxX                                             // ViewMaxX\n\
StringModule.siUIFCurveViewMaxY                                             // ViewMaxY\n\
StringModule.siUIFCurveViewMinX                                             // ViewMinX\n\
StringModule.siUIFCurveViewMinY                                             // ViewMinY\n\
StringModule.siUIFileFilter                                                 // FileFilter\n\
StringModule.siUIFileMustExist                                              // MustExist\n\
StringModule.siUIFilePath                                                   // path\n\
StringModule.siUIGradientConDivot                                           // ConDivot\n\
StringModule.siUIGradientMaxMarker                                          // MaxMarker\n\
StringModule.siUIGradientMidPoint                                           // MidPoint\n\
StringModule.siUIGradientType                                               // GradientType\n\
StringModule.siUIGridColumnWidths                                           // ColumnWidths\n\
StringModule.siUIGridHideColumnHeader                                       // HideColumnHeader\n\
StringModule.siUIGridHideRowHeader                                          // HideRowHeader\n\
StringModule.siUIGridLockColumnHeader                                       // LockColumnHeader\n\
StringModule.siUIGridLockColumnWidth                                        // LockColumnWidth\n\
StringModule.siUIGridLockRowHeader                                          // LockRowHeader\n\
StringModule.siUIGridLockRowHeight                                          // LockRowHeight\n\
StringModule.siUIGridReadOnlyColumns                                        // ReadOnlyColumns\n\
StringModule.siUIGridSelectionMode                                          // SelectionMode\n\
StringModule.siUIGridShowColumns                                            // ShowColumns\n\
StringModule.siUIGridThumbnailSize                                          // ThumbnailSize\n\
StringModule.siUIImageFile                                                  // ImageFile\n\
StringModule.siUIInitialDir                                                 // InitialDir\n\
StringModule.siUIItems                                                      // UIItems\n\
StringModule.siUILabel                                                      // label\n\
StringModule.siUILabelMinPixels                                             // LabelMinPixels\n\
StringModule.siUILabelPercentage                                            // LabelPercentage\n\
StringModule.siUILineCnt                                                    // noline\n\
StringModule.siUILineGap                                                    // linegap\n\
StringModule.siUILogarithmic                                                // log\n\
StringModule.siUIMultiSelectionListBox                                      // MultiSelectionListBox\n\
StringModule.siUINoLabel                                                    // NoLabel\n\
StringModule.siUINoSlider                                                   // NoSlider\n\
StringModule.siUIOpenFile                                                   // OpenFile\n\
StringModule.siUISelectionColor                                             // selcolor\n\
StringModule.siUIShowClip                                                   // showclip\n\
StringModule.siUIShowFrame                                                  // ShowFrame\n\
StringModule.siUIStyle                                                      // style\n\
StringModule.siUISubFolder                                                  // SubFolder\n\
StringModule.siUISyncSlider                                                 // SyncSlider\n\
StringModule.siUIThumbWheel                                                 // ThumbWheel\n\
StringModule.siUITreadmill                                                  // Treadmill\n\
StringModule.siUIType                                                       // UIType\n\
StringModule.siUIUseSelectionIcon                                           // useselicon\n\
StringModule.siUIValueOnly                                                  // ValueOnly\n\
StringModule.siUIWidthPercentage                                            // WidthPercentage\n\
StringModule.siUILineNumbering                                              // LineNumbering\n\
StringModule.siUIFolding                                                    // Folding\n\
StringModule.siUIBackgroundColor                                            // Background\n\
StringModule.siUIForegroundColor                                            // Foreground\n\
StringModule.siUIFont                                                       // Font\n\
StringModule.siUICommentColor                                               // CommentColor\n\
StringModule.siUIPreprocessorColor                                          // PreprocessorColor\n\
StringModule.siUIMarginWidth                                                // MarginWidth\n\
StringModule.siUICommentFont                                                // CommentFont\n\
StringModule.siUIFontSize                                                   // FontSize\n\
StringModule.siUIKeywords                                                   // Keywords\n\
StringModule.siUIHeight                                                     // Height\n\
StringModule.siUIHorizontalScroll                                           // HorizontalScroll\n\
StringModule.siUIVerticalScroll                                             // VerticalScroll\n\
StringModule.siUILineWrap                                                   // LineWrap\n\
StringModule.siUIKeywordFile                                                // KeywordFile\n\
StringModule.siUIAutoComplete                                               // AutoComplete\n\
StringModule.siUIToolbar                                                    // Toolbar\n\
StringModule.siUICapability                                                 // Capability\n\
StringModule.siUITabSize                                                    // TabSize\n\
StringModule.siUIUseSpacesForTab                                            // UseSpacesForTab\n\
StringModule.siUIShowIndentationGuides                                      // ShowIndentationGuides\n\
StringModule.siUIShowWhitespace                                             // ShowWhitespace</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAlignCenter\"> </a>siUIAlignCenter		</td>\n\
		<td class=\"example\">AlignCenter		</td>\n\
		<td>\n\
NOT SUPPORTED (as of v5.0). A boolean attribute that applies to most controls.  (Default: false)\n\
		<br /><br />\n\
		True to align control to the center of the property page.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAlignLeft\"> </a>siUIAlignLeft		</td>\n\
		<td class=\"example\">AlignLeft		</td>\n\
		<td>\n\
NOT SUPPORTED (as of v5.0). A boolean attribute that applies to most controls.  (Default: true)\n\
		<br /><br />\n\
		True to align control to the left side of the property page.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAlignRight\"> </a>siUIAlignRight		</td>\n\
		<td class=\"example\">AlignRight		</td>\n\
		<td>\n\
NOT SUPPORTED (as of v5.0). A boolean attribute that applies to most controls.  (Default: false)\n\
		<br /><br />\n\
		True to align control to the right side of the property page.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAudioFile\"> </a>siUIAudioFile		</td>\n\
		<td class=\"example\">AudioFile		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFilePath\">siControlFilePath</a> control.\n\
		<br /><br />\n\
		True to use all audio file formats as extensions for the name filters on the File Browser control.\n\
		<br /><br />\n\
		Note: This is a convenience to save you hardcoding a long list of supported audio file extensions into the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFileFilter\">siUIFileFilter</a> attribute. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIButtonDisable\"> </a>siUIButtonDisable		</td>\n\
		<td class=\"example\">ButtonDisable		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlButton\">siControlButton</a> control.\n\
		<br /><br />\n\
		True to disable the button (see <a href=\"#!/url=./si_om/PPGLayout.AddButton.html\">PPGLayout.AddButton</a> for an example).\n\
		<br /><br />\n\
		Note: A special attribute is required because there is no <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> associated with a button, and hence \n\
		no way to call <a href=\"#!/url=./si_om/Parameter.Enable.html\">Parameter.Enable</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICaption\"> </a>siUICaption		</td>\n\
		<td class=\"example\">caption		</td>\n\
		<td>\n\
NOT SUPPORTED. A string attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFilePath\">siControlFilePath</a> control.\n\
		<br /><br />\n\
		This attribute is normally for internal use only; however, it can be used to specify additional arguments for the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFilePath\">siControlFilePath</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIColumnCnt\"> </a>siUIColumnCnt		</td>\n\
		<td class=\"example\">nocol		</td>\n\
		<td>\n\
A LONG attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlIconList\">siControlIconList</a>\n\
		control.\n\
		<br /><br />\n\
		Specifies the maximum number of icons that should appear on a single row for the Icon List type of control. For example, \n\
		if there are 10 icons in the <a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> and this attribute is 5, then the icons will be displayed \n\
		as two rows of five icons. By default, all icons appear on a single row. \n\
		<br /><br />\n\
		Note: Usually you would use this attribute or <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUILineCnt\">siUILineCnt</a>, but not both.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIColumnGap\"> </a>siUIColumnGap		</td>\n\
		<td class=\"example\">colgap		</td>\n\
		<td>\n\
A LONG attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlIconList\">siControlIconList</a> control.\n\
		<br /><br />\n\
		Specifies the width of the gap in pixels between icons in the Icon List control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIContinue\"> </a>siUIContinue		</td>\n\
		<td class=\"example\">Continue		</td>\n\
		<td>\n\
A boolean attribute that applies to most controls.  (Default: false)\n\
		<br /><br />\n\
		True to keep the next control on the same row as this control, rather than starting a new line. This allows you to \n\
		draw multiple controls in a row and hence make more compact layouts for complex objects. To place two groups of \n\
		controls side by side this attribute is applied to the first group (see \n\
		<a href=\"#!/url=./files/cus_ppg_WrappingControlsRows.htm\">Wrapping Controls (Rows)</a>).\n\
		<br /><br />\n\
		This is the internal representation and can be used directly, but the methods <a href=\"#!/url=./si_om/PPGLayout.AddRow.html\">PPGLayout.AddRow</a> and \n\
		<a href=\"#!/url=./si_om/PPGLayout.EndRow.html\">PPGLayout.EndRow</a> are available for convenience.  		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICX\"> </a>siUICX		</td>\n\
		<td class=\"example\">cx		</td>\n\
		<td>\n\
A LONG attribute that applies to most controls.\n\
		<br /><br />\n\
		Width in pixels for the control. When left blank, the control automatically resizes itself.  \n\
		<br /><br />\n\
		To achieve precise placement of multiple controls that are on the same row, use this in conjunction with \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUILabelMinPixels\">siUILabelMinPixels</a>, <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUILabelPercentage\">siUILabelPercentage</a> and \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIWidthPercentage\">siUIWidthPercentage</a>.  \n\
		<br /><br />\n\
		Note: Often it is better to leave this undefined so that Softimage can use its own heuristic to resize the layout. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICY\"> </a>siUICY		</td>\n\
		<td class=\"example\">cy		</td>\n\
		<td>\n\
A LONG attribute that applies to most controls.\n\
		<br /><br />\n\
		Height in pixels for the control. This is useful when creating a multiline edit box for a string (see \n\
		<a href=\"#!/url=./si_om/PPGLayout.AddString.html\">PPGLayout.AddString</a>).\n\
		<br /><br />\n\
		Note: Often it is better to leave this undefined so that Softimage can use its own heuristic to resize the layout. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIDecimals\"> </a>siUIDecimals		</td>\n\
		<td class=\"example\">decimals		</td>\n\
		<td>\n\
A LONG attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlNumber\">siControlNumber</a>. \n\
		(Default: 3)\n\
		<br /><br />\n\
		Number of decimals of precision to show in the edit box.  For example 0.123456 will show up as 0.1 if \n\
		this attribute is set to 1.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveColorNonBijective\"> </a>siUIFCurveColorNonBijective		</td>\n\
		<td class=\"example\">ColorNonBijective		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		True to color the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>\n\
		orange if any Y value is shared by more than one point on the X axis on an FCurve control. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveGhosting\"> </a>siUIFCurveGhosting		</td>\n\
		<td class=\"example\">Ghosting		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		True to show the original curve ghosted behind the modified curve on an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveGridSpaceX\"> </a>siUIFCurveGridSpaceX		</td>\n\
		<td class=\"example\">GridSpaceX		</td>\n\
		<td>\n\
A double attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		Specifies the spaces between the horizontal lines for the grid on the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveGridSpaceY\"> </a>siUIFCurveGridSpaceY		</td>\n\
		<td class=\"example\">GridSpaceY		</td>\n\
		<td>\n\
A double attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		Specifies the spaces between the vertical lines for the grid on the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveLabelX\"> </a>siUIFCurveLabelX		</td>\n\
		<td class=\"example\">LabelX		</td>\n\
		<td>\n\
A string attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		Specifies a label for the X-axis on the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		Note: Use this attribute in conjunction with the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveLabelY\">siUIFCurveLabelY</a> attribute for \n\
		best results. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveLabelY\"> </a>siUIFCurveLabelY		</td>\n\
		<td class=\"example\">LabelY		</td>\n\
		<td>\n\
A string attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		Specifies a label for the Y-axis on the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		Note: This attribute is ignored unless the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFCurveLabelX\">siUIFCurveLabelX</a> attribute is also \n\
		specified. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveNoGrid\"> </a>siUIFCurveNoGrid		</td>\n\
		<td class=\"example\">NoGrid		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		True to hide the grid on the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveNoRulerX\"> </a>siUIFCurveNoRulerX		</td>\n\
		<td class=\"example\">NoRulerX		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		True to hide the ruler for the X-axis on the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveNoRulerY\"> </a>siUIFCurveNoRulerY		</td>\n\
		<td class=\"example\">NoRulerY		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		True to hide the ruler for the Y-axis on the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveShowTimeCursor\"> </a>siUIFCurveShowTimeCursor		</td>\n\
		<td class=\"example\">ShowTimeCursor		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		True to display the time cursor on an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveSnapX\"> </a>siUIFCurveSnapX		</td>\n\
		<td class=\"example\">SnapX		</td>\n\
		<td>\n\
A double attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		Specifies the spacing size to use for a snapping grid in the X-axis on an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control. For example, \n\
		if this attribute is set to 3.5 then users can only set keys at 0, 3.5, 7, 10.5 etc.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveSnapY\"> </a>siUIFCurveSnapY		</td>\n\
		<td class=\"example\">SnapY		</td>\n\
		<td>\n\
A double attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a> control.\n\
		<br /><br />\n\
		Specifies the spacing size to use for a snapping grid in the Y-axis on an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control. For example, \n\
		if this attribute is set to 1.5 then users can only set keys at 0, 1.5, 3, 4.5 etc. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveViewMaxX\"> </a>siUIFCurveViewMaxX		</td>\n\
		<td class=\"example\">ViewMaxX		</td>\n\
		<td>\n\
A double attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a>.\n\
		<br /><br />\n\
		Specifies the maximum value for the range on the X-axis on the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control.For example, the range \n\
		could be from -1 to 1 in the X axis and 0 to 100 in the Y axis.\n\
		<br /><br />\n\
		Note: In order to set the range you need to specify a valid range in both axis. Otherwise the widget automatically sets \n\
		the ranges such that it show all the keys of the fcurve. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveViewMaxY\"> </a>siUIFCurveViewMaxY		</td>\n\
		<td class=\"example\">ViewMaxY		</td>\n\
		<td>\n\
A double attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a>.\n\
		<br /><br />\n\
		Specifies the maximum value for the range on the Y-axis on the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control.For example, the range \n\
		could be from -1 to 1 in the X axis and 0 to 100 in the Y axis.\n\
		<br /><br />\n\
		Note: In order to set the range you need to specify a valid range in both axis. Otherwise the widget automatically sets \n\
		the ranges such that it show all the keys of the fcurve.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveViewMinX\"> </a>siUIFCurveViewMinX		</td>\n\
		<td class=\"example\">ViewMinX		</td>\n\
		<td>\n\
A double attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a>.\n\
		<br /><br />\n\
		Specifies the minimum value for the range on the X-axis on the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control. For example, the range \n\
		could be from -1 to 1 in the X axis and 0 to 100 in the Y axis.\n\
		<br /><br />\n\
		Note: In order to set the range you need to specify a valid range in both axis. Otherwise the widget automatically sets \n\
		the ranges such that it show all the keys of the fcurve. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveViewMinY\"> </a>siUIFCurveViewMinY		</td>\n\
		<td class=\"example\">ViewMinY		</td>\n\
		<td>\n\
A double attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFCurve\">siControlFCurve</a>.\n\
		<br /><br />\n\
		Specifies the minimum value for the range on the Y-axis on the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> control.For example, the range \n\
		could be from -1 to 1 in the X axis and 0 to 100 in the Y axis.\n\
		<br /><br />\n\
		Note: In order to set the range you need to specify a valid range in both axis. Otherwise the widget automatically sets \n\
		the ranges such that it show all the keys of the fcurve. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFileFilter\"> </a>siUIFileFilter		</td>\n\
		<td class=\"example\">FileFilter		</td>\n\
		<td>\n\
A string attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFilePath\">siControlFilePath</a> control.\n\
		<br /><br />\n\
		Specifies the extensions to use as name filters on the File Browser control. \n\
		<br /><br />\n\
		For a shortcut to all audio file formats, set the siUIAudioFile attribute to true.\n\
		<br /><br />\n\
		For a shortcut to all image file formats, set the siUIImageFile attribute to true.\n\
		<br /><br />\n\
		Note: The syntax of this string is same as the standard Win32 syntax; see documentation for OPENFILENAME structure, \n\
		(lpstrFilter member). There is one difference: when there are multiple file extensions for a single item, separate them \n\
		with the colon character (:) instead of a semi-colon (;). For example:\n\
		<br /><br />\n\
		\"Text files (*.txt *.text)|*.txt:*.text|All Files (*.*)|*.*||\"\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFileMustExist\"> </a>siUIFileMustExist		</td>\n\
		<td class=\"example\">MustExist		</td>\n\
		<td>\n\
A boolean attribute that applies to \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlFilePath\">siControlFilePath</a> control.\n\
		<br /><br />\n\
		True to force the user to pick an existing file to load. Normally this is used for the case of picking an existing \n\
		file to load. \n\
		<br /><br />\n\
		Note: Used in conjunction with <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIOpenFile\">siUIOpenFile</a>. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFilePath\"> </a>siUIFilePath		</td>\n\
		<td class=\"example\">path		</td>\n\
		<td>\n\
A string attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlBitmap\">siControlBitmap</a><br /><br />\n\
		Specifies the filename of the bitmap to use for the Bitmap widget.\n\
		<br /><br />\n\
		Note: The path is absolute (or, where applicable, relative to the SPDL file).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGradientConDivot\"> </a>siUIGradientConDivot		</td>\n\
		<td class=\"example\">ConDivot		</td>\n\
		<td>\n\
A boolean attribute that \n\
		applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlGradient\">siControlGradient</a> control.\n\
		<br /><br />\n\
		True by default. False to hide the connection divot.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGradientMaxMarker\"> </a>siUIGradientMaxMarker		</td>\n\
		<td class=\"example\">MaxMarker		</td>\n\
		<td>\n\
An integer attribute that \n\
		applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlGradient\">siControlGradient</a> control.\n\
		<br /><br />\n\
		Controls the maximal number of markers the gradient control can handle.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGradientMidPoint\"> </a>siUIGradientMidPoint		</td>\n\
		<td class=\"example\">MidPoint		</td>\n\
		<td>\n\
A boolean attribute that \n\
		applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlGradient\">siControlGradient</a> control.\n\
		<br /><br />\n\
		True if gradient parameters supports mid points. False if not.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGradientType\"> </a>siUIGradientType		</td>\n\
		<td class=\"example\">GradientType		</td>\n\
		<td>\n\
A string attribute that \n\
		applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlGradient\">siControlGradient</a> control.\n\
		<br /><br />\n\
		Specifies the gradient type with one of the following values: \"RGBA\", \"RGBA\", \"RGB+A\" and \"Alpha\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridColumnWidths\"> </a>siUIGridColumnWidths		</td>\n\
		<td class=\"example\">ColumnWidths		</td>\n\
		<td>\n\
An integer (or a colon-delimited array of integers) attribute that \n\
		applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		Specifies column width in pixels for the <a href=\"#!/url=./si_om/GridWidget.html\">GridWidget</a> in one of two ways:\n\
		<br /><br />\n\
		(1) A single integer representing the total width for all columns (of equal widths).\n\
		<br /><br />\n\
		(2) An array of integers separated by a colon (:), each of which represents the width of a specific column in the \n\
		grid from left to right. The first element specifies the width of the row label column, followed by the normal data \n\
		columns.  For example, \"100:50:50\" specifies that the row labels have 100 pixels and the first and second column has \n\
		50 pixels.  (This is true even if the row label column has been hidden with the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridHideRowHeader\">siUIGridHideRowHeader</a> attribute).\n\
		<br /><br />\n\
		Note: If not specified the GridWidget resizes its columns to fit the initial data. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridHideColumnHeader\"> </a>siUIGridHideColumnHeader		</td>\n\
		<td class=\"example\">HideColumnHeader		</td>\n\
		<td>\n\
A boolean attribute that applies to the\n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		True to suppress the column labels from appearing on the <a href=\"#!/url=./si_om/GridWidget.html\">GridWidget</a> (see \n\
		<a href=\"#!/url=./si_om/GridData.SetColumnLabel.html\">GridData.SetColumnLabel</a>).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridHideRowHeader\"> </a>siUIGridHideRowHeader		</td>\n\
		<td class=\"example\">HideRowHeader		</td>\n\
		<td>\n\
A boolean attribute that applies to the\n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		True to suppress the row labels from appearing on the <a href=\"#!/url=./si_om/GridWidget.html\">GridWidget</a> (see \n\
		<a href=\"#!/url=./si_om/GridData.SetRowLabel.html\">GridData.SetRowLabel</a>).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridLockColumnHeader\"> </a>siUIGridLockColumnHeader		</td>\n\
		<td class=\"example\">LockColumnHeader		</td>\n\
		<td>\n\
A boolean attribute that applies to the\n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		True to freeze the column labels of the <a href=\"#!/url=./si_om/GridWidget.html\">GridWidget</a> in place even when you scroll off to the \n\
		right. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridLockColumnWidth\"> </a>siUIGridLockColumnWidth		</td>\n\
		<td class=\"example\">LockColumnWidth		</td>\n\
		<td>\n\
An boolean attribute that applies to the\n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		True to prevent users from being able to adjust the column width.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridLockRowHeader\"> </a>siUIGridLockRowHeader		</td>\n\
		<td class=\"example\">LockRowHeader		</td>\n\
		<td>\n\
A boolean attribute that applies to the\n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		True to freeze the row labels of the <a href=\"#!/url=./si_om/GridWidget.html\">GridWidget</a> in place even when you scroll off to the bottom.\n\
		<br /><br />\n\
		Note: This attribute only takes effect when the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICY\">siUICY</a> attribute has been set \n\
		to something smaller than the natural height of the GridWidget.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridLockRowHeight\"> </a>siUIGridLockRowHeight		</td>\n\
		<td class=\"example\">LockRowHeight		</td>\n\
		<td>\n\
An boolean attribute that applies to the\n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		True to prevent users from being able to adjust the row height.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridReadOnlyColumns\"> </a>siUIGridReadOnlyColumns		</td>\n\
		<td class=\"example\">ReadOnlyColumns		</td>\n\
		<td>\n\
An integer (or a colon-delimited array of integers) attribute \n\
		that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		Specifies which columns are read-only and which are editable. Cells in a read-only column cannot be edited through \n\
		the UI; however, they can still be changed via scripting. This attribute can be specified in one of two ways:\n\
		<br /><br />\n\
		(1) The single value \"1\" to make all columns read-only.\n\
		<br /><br />\n\
		(2) An array of values separated by a colon (:), each of which represents whether that column is read-only (\"1\") or \n\
		edtable (\"0\"). For example \"0:1:0:1\" means that second and fourth columns are read-only.\n\
		<br /><br />\n\
		Note: Unlike the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridColumnWidths\">siUIGridColumnWidths</a> attribute, the first element in this \n\
		string refers to the first data column, not the row label column (which is always read-only).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridSelectionMode\"> </a>siUIGridSelectionMode		</td>\n\
		<td class=\"example\">SelectionMode		</td>\n\
		<td>\n\
An <a href=\"#!/url=./si_om/siGridSelectionMode.html\">siGridSelectionMode</a> attribute that applies to the\n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		Set this attribute to a value from the <a href=\"#!/url=./si_om/siGridSelectionMode.html\">siGridSelectionMode</a> enum to change the cell selection behavior \n\
		of the <a href=\"#!/url=./si_om/GridWidget.html\">GridWidget</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridShowColumns\"> </a>siUIGridShowColumns		</td>\n\
		<td class=\"example\">ShowColumns		</td>\n\
		<td>\n\
An integer (or a colon-delimited array of integers) attribute that applies \n\
		to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		Specifies which columns are shown and which are hidden in one of two ways:\n\
		<br /><br />\n\
		(1) The single value \"1\" to show all columns.\n\
		<br /><br />\n\
		(2) An array of values separated by a colon (:), each of which represents whether to display that column (\"1\") or not (\"0\").\n\
		For example \"1:1:1:0\" means that fourth columns is hidden and the first three are shown.\n\
		<br /><br />\n\
		Note: Unlike the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridColumnWidths\">siUIGridColumnWidths</a> attribute, the first element in this string refers \n\
		to the first data column, not the row label column (which is shown or hidden with the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIGridHideRowHeader\">siUIGridHideRowHeader</a> attribute).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridThumbnailSize\"> </a>siUIGridThumbnailSize		</td>\n\
		<td class=\"example\">ThumbnailSize		</td>\n\
		<td>\n\
An integer attribute that applies to the\n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlGrid\">siControlGrid</a> control.\n\
		<br /><br />\n\
		Specifies the default thumbnail size in the GridControl.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIImageFile\"> </a>siUIImageFile		</td>\n\
		<td class=\"example\">ImageFile		</td>\n\
		<td>\n\
A boolean attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFilePath\">siControlFilePath</a> control.\n\
		<br /><br />\n\
		True to use all image file formats as extensions for the name filters on the File Browser control.\n\
		<br /><br />\n\
		Note: This is a convenience to save you hardcoding a long list of supported image file extensions into the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFileFilter\">siUIFileFilter</a> attribute.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIInitialDir\"> </a>siUIInitialDir		</td>\n\
		<td class=\"example\">InitialDir		</td>\n\
		<td>\n\
A string attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFilePath\">siControlFilePath</a> \n\
		and <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFolder\">siControlFolder</a><br /><br />\n\
		This specifies a default directory to start browsing if the string parameter is empty.  This can be an \n\
		absolute path or the following special values: \"workgroup\", \"factory\", \"user\" or \"project\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIItems\"> </a>siUIItems		</td>\n\
		<td class=\"example\">uiitems		</td>\n\
		<td>\n\
A variant array attribute that applies to drop-down list (enumerator) controls such as \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlCombo\">siControlCombo</a>, <a href=\"#!/url=./si_om/siPPGControlType.html#siControlCheck\">siControlCheck</a>, \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlRadio\">siControlRadio</a>, <a href=\"#!/url=./si_om/siPPGControlType.html#siControlListBox\">siControlListBox</a> and \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlIconList\">siControlIconList</a>.\n\
		<br /><br />\n\
		Specifies the label/value pairs for the enumerator controls (see <a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a>).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILabel\"> </a>siUILabel		</td>\n\
		<td class=\"example\">label		</td>\n\
		<td>\n\
A string attribute that applies to most controls.\n\
		<br /><br />\n\
		Specifies the label for the control. By default this is set to the <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> or \n\
		<a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a> value (see <a href=\"#!/url=./si_om/PPGItem.Label.html\">PPGItem.Label</a>). \n\
		<br /><br />\n\
		Note: Labels are mandatory for <a href=\"#!/url=./files/cus_ppg_UsingMultiplePagesTabs.htm\">Tab</a> \n\
		controls but optional for <a href=\"#!/url=./files/cus_ppg_GroupingControls.htm\">Group</a> and \n\
		<a href=\"#!/url=./files/cus_ppg_CommandButton.htm\">Command Button</a> controls.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILabelMinPixels\"> </a>siUILabelMinPixels		</td>\n\
		<td class=\"example\">LabelMinPixels		</td>\n\
		<td>\n\
A LONG attribute that applies to most controls.\n\
		<br /><br />\n\
		Specifies the minimum width, in pixels, to use when drawing a label. A label gets split into multiple lines when there \n\
		is not enough space on a single line (see <a href=\"#!/url=./si_om/PPGItem.LabelMinPixels.html\">PPGItem.LabelMinPixels</a>).\n\
		<br /><br />\n\
		Note: Use in conjunction with <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUILabelPercentage\">siUILabelPercentage</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILabelPercentage\"> </a>siUILabelPercentage		</td>\n\
		<td class=\"example\">LabelPercentage		</td>\n\
		<td>\n\
A LONG attribute that applies to most controls.\n\
		<br /><br />\n\
		Specifies the width of the label of a control, in terms of its percentage of the control\'s total width. Use in conjunction with siUILabelMinPixels (see <a href=\"#!/url=./si_om/PPGItem.LabelPercentage.html\">PPGItem.LabelPercentage</a>).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILineCnt\"> </a>siUILineCnt		</td>\n\
		<td class=\"example\">noline		</td>\n\
		<td>\n\
A LONG attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlIconList\">siControlIconList</a> control.\n\
		<br /><br />\n\
		Specifies the number of rows to use for the Icon List control. This is the alternative to using \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIColumnCnt\">siUIColumnCnt</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILineGap\"> </a>siUILineGap		</td>\n\
		<td class=\"example\">linegap		</td>\n\
		<td>\n\
A LONG attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlIconList\">siControlIconList</a> control.\n\
		<br /><br />\n\
		Specifies the height of the gap in pixels between icons appearing on different rows in the Icon List control. Only comes \n\
		into play if the icons are displayed on multiple lines.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILogarithmic\"> </a>siUILogarithmic		</td>\n\
		<td class=\"example\">log		</td>\n\
		<td>\n\
A boolean attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlNumber\">siControlNumber</a>. \n\
		(Default: false)\n\
		<br /><br />\n\
		True to use logarithmic scaling for the slider. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIMultiSelectionListBox\"> </a>siUIMultiSelectionListBox		</td>\n\
		<td class=\"example\">MultiSelectionListBox		</td>\n\
		<td>\n\
A boolean attribute that applies to \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlListBox\">siControlListBox</a> controls which are bound to string parameters (otherwise this attribute \n\
		is ignored).\n\
		<br /><br />\n\
		True to support multiple selection for this list box control. For multiple-selection list box controls, the value of \n\
		the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> (the items selected) is returned as a semicolon-separated string. For an example\n\
		demonstrating how to use this attribute, see <a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUINoLabel\"> </a>siUINoLabel		</td>\n\
		<td class=\"example\">NoLabel		</td>\n\
		<td>\n\
A boolean attribute that applies to most controls (Default: false)\n\
		<br /><br />\n\
		True to suppress the text label. If this is an animatable parameter then the animation divot will still be drawn \n\
		to the left of the control.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUINoSlider\"> </a>siUINoSlider		</td>\n\
		<td class=\"example\">noslider		</td>\n\
		<td>\n\
A boolean attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlNumber\">siControlNumber</a>. \n\
		(Default: false)\n\
		<br /><br />\n\
		True to suppress the slider control (and display only the numeric edit box). This is useful if there is not a lot of \n\
		space to fit many controls.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIOpenFile\"> </a>siUIOpenFile		</td>\n\
		<td class=\"example\">OpenFile		</td>\n\
		<td>\n\
A boolean attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFilePath\">siControlFilePath</a> control.\n\
		<br /><br />\n\
		True to turn off the warning that a file exists for the File Browser control. Normally this is used for the case of \n\
		picking an existing file to load. \n\
		<br /><br />\n\
		Note: Used in conjunction with <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIFileMustExist\">siUIFileMustExist</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUISelectionColor\"> </a>siUISelectionColor		</td>\n\
		<td class=\"example\">selcolor		</td>\n\
		<td>\n\
A LONG attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlIconList\">siControlIconList</a> control.\n\
		<br /><br />\n\
		Specifies an RGBA color value for the highlighting around the selected icon in an Icon List control. The color is represented \n\
		by considering the least significant byte as the R value, the next byte as the G, etc. For example, 0xFFFF is Yellow. \n\
		<br /><br />\n\
		Note: If the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIUseSelectionIcon\">siUIUseSelectionIcon</a> has been enable this attribute is ignored.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowClip\"> </a>siUIShowClip		</td>\n\
		<td class=\"example\">showclip		</td>\n\
		<td>\n\
A boolean attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlImageClip\">siControlImageClip</a> control.\n\
		<br /><br />\n\
		Set to True to show the thumbnail of the Image Clip control. The control toolbar is always displayed, regardless of this attribute value.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowFrame\"> </a>siUIShowFrame		</td>\n\
		<td class=\"example\">ShowFrame		</td>\n\
		<td>\n\
A boolean attribute that applies to Groups.  (Default: false)\n\
		<br /><br />\n\
		This attribute only applies when there is no label for the group, and is used to determine whether there should \n\
		be a box drawn around the controls of the group.  See <a href=\"#!/url=./si_om/PPGLayout.AddGroup.html\">PPGLayout.AddGroup</a> and\n\
		<a href=\"#!/url=./files/cus_ppg_GroupingControls.htm\">Grouping Controls</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIStyle\"> </a>siUIStyle		</td>\n\
		<td class=\"example\">style		</td>\n\
		<td>\n\
A LONG attribute that applies to many controls, including the multi-line edit and \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlListBox\">siControlListBox</a> controls.\n\
		<br /><br />\n\
		Specifies advanced window style options such as scroll bars and support for multiple lines. For advanced use only. \n\
		<br /><br />\n\
		The values are based on the flags defined in the Windows Header file winuser.h (long). For example, using the value for \n\
		ES_PASSWORD (0x0020, or 32), displays the text the user types as asterisks; while using the value for ES_UPPERCASE \n\
		(0x0008, or 8) converts the text to uppercase.\n\
		<br /><br />\n\
		Note: You can also combine these flags for multiple effects. For example, you can 9 as the value for the siUIStyle \n\
		attribute to create a text box with centered and uppercase text (because ES_CENTER=1 and ES_UPPERCASE=8). 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUISubFolder\"> </a>siUISubFolder		</td>\n\
		<td class=\"example\">SubFolder		</td>\n\
		<td>\n\
A string attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFilePath\">siControlFilePath</a> \n\
		and <a href=\"#!/url=./si_om/siPPGControlType.html#siControlFolder\">siControlFolder</a> controls.\n\
		<br /><br />\n\
		A subfolder relative to the value specified for <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIInitialDir\">siUIInitialDir</a>.  For example, if \n\
		the initial directory is \"project\" and the subfolder is \"scenes/myscenes\" then the browser opens in the scenes/myscenes \n\
		directory inside the current project.  This attribute is ignored if siUIInitialDir is not specified.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUISyncSlider\"> </a>siUISyncSlider		</td>\n\
		<td class=\"example\">SyncSlider		</td>\n\
		<td>\n\
A boolean attribute that applies to \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlNumber\">siControlNumber</a>. (Default: true)\n\
		<br /><br />\n\
		True to force an update of the parameter value in Softimage when the slider is moved. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIThumbWheel\"> </a>siUIThumbWheel		</td>\n\
		<td class=\"example\">ThumbWheel		</td>\n\
		<td>\n\
A boolean attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlNumber\">siControlNumber</a>. \n\
		(Default: false)\n\
		<br /><br />\n\
		True to reduce the slider to a small portion of the screen (like a thumbwheel). This is useful when many parameters \n\
		need to be displayed in a small amount of space.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUITreadmill\"> </a>siUITreadmill		</td>\n\
		<td class=\"example\">Treadmill		</td>\n\
		<td>\n\
A boolean attribute that applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlNumber\">siControlNumber</a>. \n\
		(Default: false)\n\
		<br /><br />\n\
		True to display a control similar in size to the Thumb Wheel which can be dragged left/right to decrement/increment \n\
		the value. This control is useful when many parameters need to be displayed in a small amount of space. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIType\"> </a>siUIType		</td>\n\
		<td class=\"example\">uitype		</td>\n\
		<td>\n\
An <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a> attribute that applies to all controls.\n\
		<br /><br />\n\
		Specifies the type of control for this property page item (see <a href=\"#!/url=./si_om/PPGItem.Type.html\">PPGItem.Type</a>).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIUseSelectionIcon\"> </a>siUIUseSelectionIcon		</td>\n\
		<td class=\"example\">useselicon		</td>\n\
		<td>\n\
A boolean attribute that applies to \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlIconList\">siControlIconList</a>. (Default: false)\n\
		<br /><br />\n\
		True to use an alternate bitmap for selected icons in the Icon List control. For example, rather than drawing a box around \n\
		a button the selected icon might show the button in a compressed position. \n\
		<br /><br />\n\
		Note: Filenames of the alternate bitmaps must use the same name but appended with \"_sel\" before the extension.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIValueOnly\"> </a>siUIValueOnly		</td>\n\
		<td class=\"example\">ValueOnly		</td>\n\
		<td>\n\
A boolean attribute that applies to most controls (Default: false)\n\
		<br /><br />\n\
		True to suppress the text label and animation divot.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIWidthPercentage\"> </a>siUIWidthPercentage		</td>\n\
		<td class=\"example\">WidthPercentage		</td>\n\
		<td>\n\
A LONG attribute that applies to most controls.\n\
		<br /><br />\n\
		Specifies the percentage of the row that this control should use relative to the other members of the row (see \n\
		<a href=\"#!/url=./si_om/PPGItem.WidthPercentage.html\">PPGItem.WidthPercentage</a>).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILineNumbering\"> </a>siUILineNumbering		</td>\n\
		<td class=\"example\">LineNumbering		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		True to display line numbers on the left edge of the text editor.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFolding\"> </a>siUIFolding		</td>\n\
		<td class=\"example\">Folding		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		True to enable folding of comments, functions and namespaces in the text editor control. Folding makes code more readable \n\
		and navigable because it allows users to expand or collapse blocks of related text (multi-line comments, entire functions, \n\
		etc.) by clicking a plus or minus control. Most IDE tools such as Visual Studio .NET 2005 offer folding as a usability \n\
		feature.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIBackgroundColor\"> </a>siUIBackgroundColor		</td>\n\
		<td class=\"example\">Background		</td>\n\
		<td>\n\
A hexadecimal attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Sets the background color of the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIForegroundColor\"> </a>siUIForegroundColor		</td>\n\
		<td class=\"example\">Foreground		</td>\n\
		<td>\n\
A hexadecimal attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Sets the text color of the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFont\"> </a>siUIFont		</td>\n\
		<td class=\"example\">Font		</td>\n\
		<td>\n\
A string attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Sets the font used by the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICommentColor\"> </a>siUICommentColor		</td>\n\
		<td class=\"example\">CommentColor		</td>\n\
		<td>\n\
A hexadecimal attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Sets the color of commented text in the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIPreprocessorColor\"> </a>siUIPreprocessorColor		</td>\n\
		<td class=\"example\">PreprocessorColor		</td>\n\
		<td>\n\
A hexadecimal attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Sets the color of preprocessor commands in the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIMarginWidth\"> </a>siUIMarginWidth		</td>\n\
		<td class=\"example\">MarginWidth		</td>\n\
		<td>\n\
A numeric attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Sets the width (in characters) of the margin in the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICommentFont\"> </a>siUICommentFont		</td>\n\
		<td class=\"example\">CommentFont		</td>\n\
		<td>\n\
A string attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Sets the font used by comments in the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFontSize\"> </a>siUIFontSize		</td>\n\
		<td class=\"example\">FontSize		</td>\n\
		<td>\n\
A numeric attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Sets the size of the font used by the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIKeywords\"> </a>siUIKeywords		</td>\n\
		<td class=\"example\">Keywords		</td>\n\
		<td>\n\
A string attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>. This is similar to the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIKeywordFile\">siUIKeywordFile</a> attribute, but more suited to small lists.\n\
		<br /><br />\n\
		Specifies a space-delimited list of keywords that are to be highlighted in the text editor \n\
		control. These values are also available for auto-completion (see the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIAutoComplete\">siUIAutoComplete</a> attribute).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHeight\"> </a>siUIHeight		</td>\n\
		<td class=\"example\">Height		</td>\n\
		<td>\n\
A numeric attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Specifies the height in pixels of the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHorizontalScroll\"> </a>siUIHorizontalScroll		</td>\n\
		<td class=\"example\">HorizontalScroll		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		True to display a horizontal scrollbar in the text editor.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIVerticalScroll\"> </a>siUIVerticalScroll		</td>\n\
		<td class=\"example\">VerticalScroll		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		True to display a vertical scrollbar in the text editor.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILineWrap\"> </a>siUILineWrap		</td>\n\
		<td class=\"example\">LineWrap		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		True to enable line wrapping in the text editor.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIKeywordFile\"> </a>siUIKeywordFile		</td>\n\
		<td class=\"example\">KeywordFile		</td>\n\
		<td>\n\
A string attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>. This is similar to the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIKeywords\">siUIKeywords</a> attribute, but more suited to large lists.\n\
		<br /><br />\n\
		Specifies the location of a file that contains a space-delimited list of keywords to be highlighted \n\
		in the text editor control. These values are also available for auto-completion (see the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIAutoComplete\">siUIAutoComplete</a> attribute).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAutoComplete\"> </a>siUIAutoComplete		</td>\n\
		<td class=\"example\">AutoComplete		</td>\n\
		<td>\n\
An <a href=\"#!/url=./si_om/siAutoCompleteMode.html\">siAutoCompleteMode</a> attribute that \n\
		applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Specifies the behavior of the auto complete feature in the text editor control. By default, only\n\
		keywords are highlighted. See <a href=\"#!/url=./si_om/siAutoCompleteMode.html\">siAutoCompleteMode</a> for a list of values you can\n\
		specify. Use either the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIKeywords\">siUIKeywords</a> attribute or the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIKeywordFile\">siUIKeywordFile</a> attribute to specify which keywords can be \n\
		autocompleted.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIToolbar\"> </a>siUIToolbar		</td>\n\
		<td class=\"example\">Toolbar		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		True to display the File and Edit menus in a toolbar at the top of the text editor. You can limit\n\
		which File menu options are enabled with the <a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUICapability\">siUICapability</a>\n\
		attribute.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICapability\"> </a>siUICapability		</td>\n\
		<td class=\"example\">Capability		</td>\n\
		<td>\n\
An <a href=\"#!/url=./si_om/siTextEditorCapability.html\">siTextEditorCapability</a> attribute that \n\
		applies to the <a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Specifies the capabilities of some of the File menu functionality for the text editor control. \n\
		<br /><br />\n\
		Note: The File and Edit menus do not appear by default, but you can use the \n\
		<a href=\"#!/url=./si_om/siPPGItemAttribute.html#siUIToolbar\">siUIToolbar</a> attribute to display them.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUITabSize\"> </a>siUITabSize		</td>\n\
		<td class=\"example\">TabSize		</td>\n\
		<td>\n\
A numeric attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		Specifies the size of the tabs in the text editor control.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIUseSpacesForTab\"> </a>siUIUseSpacesForTab		</td>\n\
		<td class=\"example\">UseSpacesForTab		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		True to insert spaces characters instead of a tab character when pressing the tab key.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowIndentationGuides\"> </a>siUIShowIndentationGuides		</td>\n\
		<td class=\"example\">ShowIndentationGuides		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		True to display indentation guides appearing as dotted vertical lines within indentation white space\n\
		every tab size columns.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowWhitespace\"> </a>siUIShowWhitespace		</td>\n\
		<td class=\"example\">ShowWhitespace		</td>\n\
		<td>\n\
A boolean attribute that applies to the \n\
		<a href=\"#!/url=./si_om/siPPGControlType.html#siControlTextEditor\">siControlTextEditor</a>.\n\
		<br /><br />\n\
		True to display whitespace characters (spaces and tabs) in the text editor control.\n\
		Space characters appear as small centered dots and tab characters as light arrows pointing to the right.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGItem.GetAttribute.html\">PPGItem.GetAttribute</a> <a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">PPGItem.SetAttribute</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html#GetAttribute\">PPGItem::GetAttribute</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html#PutAttribute\">PPGItem::PutAttribute</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a> <a href=\"#!/url=./si_om/siAutoCompleteMode.html\">siAutoCompleteMode</a> <a href=\"#!/url=./si_om/siTextEditorCapability.html\">siTextEditorCapability</a> <a href=\"#!/url=./files/cus_ppg_SettingControlAttributes.htm\">Setting Control Attributes</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";