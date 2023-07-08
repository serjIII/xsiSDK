var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siGridWidgetColumnType</title>\n\
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
            <h1>siGridWidgetColumnType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siGridWidgetColumnType</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Types of Columns supported by siControlGrid (see <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>\n\
and <a href=\"#!/url=./si_om/GridData.SetColumnType.html\">GridData.SetColumnType</a>)</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siGridWidgetColumnType.siColumnStandard                                     // 0\n\
siGridWidgetColumnType.siColumnBool                                         // 1\n\
siGridWidgetColumnType.siColumnCombo                                        // 2\n\
siGridWidgetColumnType.siColumnInt                                          // 3\n\
siGridWidgetColumnType.siColumnFloat                                        // 4\n\
siGridWidgetColumnType.siColumnImageClip                                    // 5\n\
siGridWidgetColumnType.siColumnColor                                        // 6\n\
siGridWidgetColumnType.siColumnVector                                       // 7\n\
siGridWidgetColumnType.siColumnButton                                       // 8\n\
siGridWidgetColumnType.siColumnFile                                         // 9\n\
siGridWidgetColumnType.siColumnShaderBall                                   // 10\n\
siGridWidgetColumnType.siColumnMultiLine                                    // 11</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnStandard\"> </a>siColumnStandard		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
A column of text.  Numeric values are shown in decimal format without a slider.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnBool\"> </a>siColumnBool		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
A check mark is shown if the value of the zero is non-zero		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnCombo\"> </a>siColumnCombo		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
The value of the cell is chosen from a drop down list		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnInt\"> </a>siColumnInt		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
The value of the cell is an integer number		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnFloat\"> </a>siColumnFloat		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
The value of the cell is a floating point number		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnImageClip\"> </a>siColumnImageClip		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
The value of the cell is an image clip, represented by a thumbnail		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnColor\"> </a>siColumnColor		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
The value of the cell is a color		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnVector\"> </a>siColumnVector		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
The value of the cell is an array of doubles of dimension 2, 3 or 4 depending on the column definition		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnButton\"> </a>siColumnButton		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
The value of the cell is a button label, represented by a button		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnFile\"> </a>siColumnFile		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
The value of the cell is a file/folder name		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnShaderBall\"> </a>siColumnShaderBall		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
The value of the cell is a material, represented by a shader ball		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siColumnMultiLine\"> </a>siColumnMultiLine		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
A column of text that can span over multiple lines		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/GridData.GetColumnType.html\">GridData.GetColumnType</a> <a href=\"#!/url=./si_om/GridData.SetColumnType.html\">GridData.SetColumnType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html#PutColumnType\">GridData::PutColumnType</a> <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html#GetColumnType\">GridData::GetColumnType</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/GridData.GetColumnComboItems.html\">GridData.GetColumnComboItems</a> <a href=\"#!/url=./si_om/GridData.SetColumnComboItems.html\">GridData.SetColumnComboItems</a> <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html#GetColumnComboItems\">GridData::GetColumnComboItems</a> <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html#PutColumnComboItems\">GridData::PutColumnComboItems</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";