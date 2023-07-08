var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siFCurveKeyConstraint</title>\n\
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
            <h1>siFCurveKeyConstraint</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siFCurveKeyConstraint</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Function curve key constraints. The last seven tangent constraints apply only to \n\
standard function curves. FCurve key constraints can be set and retrieved via the \n\
<a href=\"#!/url=./si_om/FCurveKey.Constraint.html\">FCurveKey.Constraint</a> property. \n\
<br /><br />\n\
The constraints are not mutally exclusive for example if you have the siParameterConstraint\n\
set and clear the siLockConstraint you will also clear the siParameterConstraint.\n\
You cannot set constraints on a raw function curve. They will be ignored.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siFCurveKeyConstraint.siParameterConstraint                                 // 1\n\
siFCurveKeyConstraint.siLeftRightValuesConstraint                           // 2\n\
siFCurveKeyConstraint.siG1ContinuousConstraint                              // 4\n\
siFCurveKeyConstraint.siLeftRightTangentDirectionConstraint                 // 8\n\
siFCurveKeyConstraint.siLeftRightTangentLengthConstraint                    // 16\n\
siFCurveKeyConstraint.siLockConstraint                                      // 32\n\
siFCurveKeyConstraint.siHorizontalTangentConstraint                         // 64\n\
siFCurveKeyConstraint.siExtremumHorizontalTangentConstraint                 // 128\n\
siFCurveKeyConstraint.siZeroLengthTangentConstraint                         // 512\n\
siFCurveKeyConstraint.siSameLengthTangentConstraint                         // 1024\n\
siFCurveKeyConstraint.siNeighborTangentConstraint                           // 2048\n\
siFCurveKeyConstraint.siMirrorTangentConstraint                             // 4096\n\
siFCurveKeyConstraint.siAutoPlateauTangentConstraint                        // 8192\n\
siFCurveKeyConstraint.siAdjustedTangentConstraint                           // 8448</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAdjustedTangentConstraint\"> </a>siAdjustedTangentConstraint		</td>\n\
		<td class=\"example\">8448		</td>\n\
		<td>\n\
If on, the tangents are adjusted automatically when neighbouring keys are created or moved.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAutoPlateauTangentConstraint\"> </a>siAutoPlateauTangentConstraint		</td>\n\
		<td class=\"example\">8192		</td>\n\
		<td>\n\
If on, the left and right tangents are automatically adjusted and plateaued based on neighbouring keys.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtremumHorizontalTangentConstraint\"> </a>siExtremumHorizontalTangentConstraint		</td>\n\
		<td class=\"example\">128		</td>\n\
		<td>\n\
If on, the tangents are considered as horizontal when the key is a local extremum.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siG1ContinuousConstraint\"> </a>siG1ContinuousConstraint		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
If on, the left and right tangent orientations are the same.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHorizontalTangentConstraint\"> </a>siHorizontalTangentConstraint		</td>\n\
		<td class=\"example\">64		</td>\n\
		<td>\n\
If on, the tangents are considered horizontal.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLeftRightTangentDirectionConstraint\"> </a>siLeftRightTangentDirectionConstraint		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
If on, the left and right tangent directions are locked.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLeftRightTangentLengthConstraint\"> </a>siLeftRightTangentLengthConstraint		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
If on, the left and right tangent lengths are locked.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLeftRightValuesConstraint\"> </a>siLeftRightValuesConstraint		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
If on, the left and right key values are locked.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLockConstraint\"> </a>siLockConstraint		</td>\n\
		<td class=\"example\">32		</td>\n\
		<td>\n\
If on, the parameter, values, and tangents are locked.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMirrorTangentConstraint\"> </a>siMirrorTangentConstraint		</td>\n\
		<td class=\"example\">4096		</td>\n\
		<td>\n\
If on, the left and right tangents are mirrored.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNeighborTangentConstraint\"> </a>siNeighborTangentConstraint		</td>\n\
		<td class=\"example\">2048		</td>\n\
		<td>\n\
If on, the left and right tangent point at the previous and next keys.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParameterConstraint\"> </a>siParameterConstraint		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
If on, the parameter (or key time) is locked.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSameLengthTangentConstraint\"> </a>siSameLengthTangentConstraint		</td>\n\
		<td class=\"example\">1024		</td>\n\
		<td>\n\
If on, the left and right tangent lengths are the same.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siZeroLengthTangentConstraint\"> </a>siZeroLengthTangentConstraint		</td>\n\
		<td class=\"example\">512		</td>\n\
		<td>\n\
If on, the left and right tangent lengths are constrained to be zero.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurveKey.Constraint.html\">FCurveKey.Constraint</a> <a href=\"#!/url=./si_om/FCurveKey.GetConstraint2.html\">FCurveKey.GetConstraint2</a> <a href=\"#!/url=./si_cpp/classXSI_1_1FCurveKey.html#GetConstraint\">FCurveKey::GetConstraint</a> <a href=\"#!/url=./si_cpp/classXSI_1_1FCurveKey.html#PutConstraint\">FCurveKey::PutConstraint</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.SI3DStyle.html\">FCurve.SI3DStyle</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";