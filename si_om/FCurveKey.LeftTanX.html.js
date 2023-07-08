var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKey.LeftTanX</title>\n\
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
            <h1>FCurveKey.LeftTanX</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a>.LeftTanX</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the left tangent X (in frames) of the fcurve key\n\
relative to the <a href=\"#!/url=./si_om/FCurveKey.Time.html\">FCurveKey.Time</a> value as a \n\
<a href=\"#!/url=./files/Double.htm\">Double</a>. <br /><br />\n\
The left tan x value may be a negative value between a distance which \n\
is one third the distance between 2 consecutive key and 0; this \n\
guarantees that the curve is valid.<br /><br />\n\
The left tangent of the first key and the right tangent of the last key\n\
cannot be changed. If you try to set the tangent for one of these \n\
the property does nothing and returns S_FALSE in C++. <br /><br />\n\
Tangent values only apply to standard function curves (where \n\
<a href=\"#!/url=./si_om/FCurve.Type.html\">FCurve.Type</a> = siStandardFCurve), the tangent \n\
value 0 is  returned for all other function curve types \n\
defined by <a href=\"#!/url=./si_om/siFCurveType.html\">siFCurveType</a>.<br /><br />\n\
Setting this property may raise an \"Access Denied\" error. See more information in the FCurveKey object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = FCurveKey.LeftTanX;\n\
// set accessor\n\
FCurveKey.LeftTanX = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to create an fcurve and set the tangents on a specific key\n\
*/\n\
// Create new scene\n\
NewScene( \"\", false );\n\
// Create a null\n\
var nullobj = Application.ActiveSceneRoot.AddNull();\n\
// Get the posx parameter from the null\n\
var posx = nullobj.posx;\n\
// Create an fcurve on posx\n\
var fc = posx.AddFCurve2();\n\
// Define some keys (3 key-value pairs)\n\
var keyvalues = new Array( 0,0, 50,25, 100,50 );\n\
fc.SetKeys( keyvalues );\n\
// Get the 1st, 2nd &amp; 3rd FCurveKey objects\n\
var key0 = fc.Keys(0);\n\
var key1 = fc.Keys(1);\n\
var key2 = fc.Keys(2);\n\
// Make the key non-G1 continuous so it can have different left and right values\n\
key1.Constraint( siG1ContinuousConstraint ) = false;\n\
key1.LeftTanX = 0;\n\
key1.LeftTanY = Math.abs( key1.Value - key0.Value );\n\
key1.RightTanX = key2.Time - key1.Time;\n\
key1.RightTanY = 0;\n\
PrintKeys( fc );\n\
// Convenience function to print the FCurveKeys\n\
function PrintKeys( in_fcrv )\n\
{\n\
	for ( var i=0; i&lt;in_fcrv.Keys.Count; i++ ) {\n\
		var fckey = in_fcrv.Keys(i);\n\
		var str = \"key : \" + fckey.Index;\n\
		str += \"\\n\\ttime : \" + fckey.Time;\n\
		str += \"\\n\\tvalue : \" + fckey.Value;\n\
		str += \"\\n\\ttangents : \" + fckey.LeftTanX + \",\" + fckey.LeftTanY + \",\" + fckey.RightTanX + \",\" + fckey.RightTanY;\n\
		str += \"\\n\\tconstraints : \" + GetConstraintType( fckey );\n\
		Application.LogMessage( str );\n\
	}\n\
}\n\
// Convenience function to get the user-friendly string describing the contraint type\n\
function GetConstraintType( in_fcrvkey )\n\
{\n\
	var ConstraintTypes = new Array (\n\
		new Array (siParameterConstraint,			\"LockParameter\"),\n\
		new Array (siLeftRightValuesConstraint,			\"LeftRightParameter\"),\n\
		new Array (siG1ContinuousConstraint,			\"G1Continuous\"),\n\
		new Array (siLeftRightTangentDirectionConstraint,	\"LeftRightTangentDirection\"),\n\
		new Array (siLeftRightTangentLengthConstraint,		\"LeftRightTangentLength\"),\n\
		new Array (siLockConstraint,				\"LockAll\"),\n\
		new Array (siHorizontalTangentConstraint,		\"HorizontalTangent\"),\n\
		new Array (siExtremumHorizontalTangentConstraint,	\"ExtremumHorizontalTangent\"),\n\
		new Array (siAdjustedTangentConstraint,			\"AdjustedTangent\"),\n\
		new Array (siZeroLengthTangentConstraint,		\"ZeroLengthTangent\"),\n\
		new Array (siSameLengthTangentConstraint,		\"SameLengthTangent\"), \n\
		new Array (siNeighborTangentConstraint,			\"NeighborTangent\"),\n\
		new Array (siMirrorTangentConstraint,			\"MirrorTangent\"),\n\
		new Array (siAutoPlateauTangentConstraint,		\"AutoPlateauTangent\") \n\
	)\n\
	var str = \"\";\n\
	for ( var i=0; i&lt;ConstraintTypes.length; i++ ) {\n\
		if ( in_fcrvkey.Constraint( ConstraintTypes[i][0] ) ) {\n\
			str += ConstraintTypes[i][1] + \" \";\n\
		}		 \n\
	}\n\
	return str;\n\
}\n\
// Expected results:\n\
//INFO : key : 0\n\
//	time : 0\n\
//	value : 0\n\
//	tangents : -16.666666666666668,0,16.666666666666668,0\n\
//	constraints : G1Continuous  \n\
//INFO : key : 1\n\
//	time : 50\n\
//	value : 25\n\
//	tangents : 0,25,50,0\n\
//	constraints : \n\
//INFO : key : 2\n\
//	time : 100\n\
//	value : 50\n\
//	tangents : -16.666666666666664,0,16.666666666666664,0\n\
//	constraints : G1Continuous</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to create an fcurve and set the tangents on a specific key\n\
\' \n\
\' Create new scene\n\
NewScene , false \n\
\' Create a null\n\
set nullobj = Application.ActiveSceneRoot.AddNull()\n\
\' Get the posx parameter from the null\n\
set posx = nullobj.posx\n\
\' Create an fcurve on posx\n\
set fc = posx.AddFCurve2()\n\
\' Define some keys (3 key-value pairs)\n\
keyvalues = array( 0,0, 50,25, 100,50 )\n\
fc.SetKeys keyvalues \n\
\' Get the 1st, 2nd &amp; 3rd FCurveKey objects\n\
set key0 = fc.Keys(0)\n\
set key1 = fc.Keys(1)\n\
set key2 = fc.Keys(2)\n\
\' Make the key non-G1 continuous so it can have different left and right values\n\
key1.Constraint( siG1ContinuousConstraint ) = false\n\
key1.LeftTanX = 0\n\
key1.LeftTanY = Abs( key1.Value - key0.Value )\n\
key1.RightTanX = key2.Time - key1.Time\n\
key1.RightTanY = 0\n\
PrintKeys fc \n\
\' Convenience routine to print the FCurveKeys\n\
sub PrintKeys( in_fcrv )\n\
	for each fckey in in_fcrv.Keys\n\
		str = \"key : \" &amp; fckey.Index\n\
		str = str &amp; vbCrLf &amp; vbTab &amp; \"time : \" &amp; fckey.Time\n\
		str = str &amp; vbCrLf &amp; vbTab &amp; \"value : \" &amp; fckey.Value\n\
		str = str &amp; vbCrLf &amp; vbTab &amp; \"tangents : \" &amp; fckey.LeftTanX &amp; \",\" &amp; fckey.LeftTanY &amp; \",\" &amp; fckey.RightTanX &amp; \",\" &amp; fckey.RightTanY\n\
		str = str &amp; vbCrLf &amp; vbTab &amp; \"constraints : \" &amp; GetConstraintType( fckey )\n\
		Application.LogMessage str \n\
	next\n\
end sub\n\
\' Convenience function to get the user-friendly string describing the contraint type\n\
function GetConstraintType( in_fcrvkey )\n\
	set ConstraintTypes = CreateObject( \"Scripting.Dictionary\" )\n\
	ConstraintTypes.Add siParameterConstraint, 			\"LockParameter\"\n\
	ConstraintTypes.Add siLeftRightValuesConstraint,		\"LeftRightParameter\"\n\
	ConstraintTypes.Add siG1ContinuousConstraint,			\"G1Continuous\"\n\
	ConstraintTypes.Add siLeftRightTangentDirectionConstraint,	\"LeftRightTangentDirection\"\n\
	ConstraintTypes.Add siLeftRightTangentLengthConstraint,		\"LeftRightTangentLength\"\n\
	ConstraintTypes.Add siLockConstraint,				\"LockAll\"\n\
	ConstraintTypes.Add siHorizontalTangentConstraint,		\"HorizontalTangent\"\n\
	ConstraintTypes.Add siExtremumHorizontalTangentConstraint,	\"ExtremumHorizontalTangent\"\n\
	ConstraintTypes.Add siAdjustedTangentConstraint,		\"AdjustedTangent\"\n\
	ConstraintTypes.Add siZeroLengthTangentConstraint,		\"ZeroLengthTangent\"\n\
	ConstraintTypes.Add siSameLengthTangentConstraint,		\"SameLengthTangent\"\n\
	ConstraintTypes.Add siNeighborTangentConstraint,		\"NeighborTangent\"\n\
	ConstraintTypes.Add siMirrorTangentConstraint,			\"MirrorTangent\"\n\
	ConstraintTypes.Add siAutoPlateauTangentConstraint,		\"AutoPlateauTangent\"\n\
	str = \"\"\n\
	for each k in ConstraintTypes.Keys\n\
		if in_fcrvkey.Constraint( k ) then\n\
			str = str &amp; ConstraintTypes(k) &amp; \" \"\n\
		end if\n\
	next\n\
	GetConstraintType = str\n\
end function\n\
\' Expected results:\n\
\'INFO : key : 0\n\
\'	time : 0\n\
\'	value : 0\n\
\'	tangents : -16.6666666666667,0,16.6666666666667,0\n\
\'	constraints : G1Continuous  \n\
\'INFO : key : 1\n\
\'	time : 50\n\
\'	value : 25\n\
\'	tangents : 0,25,50,0\n\
\'	constraints : \n\
\'INFO : key : 2\n\
\'	time : 100\n\
\'	value : 50\n\
\'	tangents : -16.6666666666667,0,16.6666666666667,0\n\
\'	constraints : G1Continuous</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example illustrates how to create an fcurve and set the tangents on a specific key\n\
# \n\
from win32com.client import constants as c\n\
# Convenience function to get the user-friendly string describing the contraint type\n\
def GetConstraintType( in_fcrvkey ) :\n\
	ConstraintTypes = {\n\
		c.siParameterConstraint:\"LockParameter\", \n\
		c.siLeftRightValuesConstraint:\"LeftRightParameter\", \n\
		c.siG1ContinuousConstraint:\"G1Continuous\", \n\
		c.siLeftRightTangentDirectionConstraint:\"LeftRightTangentDirection\", \n\
		c.siLeftRightTangentLengthConstraint:\"LeftRightTangentLength\", \n\
		c.siLockConstraint:\"LockAll\", \n\
		c.siHorizontalTangentConstraint:\"HorizontalTangent\", \n\
		c.siExtremumHorizontalTangentConstraint:\"ExtremumHorizontalTangent\", \n\
		c.siAdjustedTangentConstraint:\"AdjustedTangent\", \n\
		c.siZeroLengthTangentConstraint:\"ZeroLengthTangent\", \n\
		c.siSameLengthTangentConstraint:\"SameLengthTangent\",\n\
		c.siNeighborTangentConstraint:\"NeighborTangent\",\n\
		c.siMirrorTangentConstraint:\"MirrorTangent\",\n\
		c.siAutoPlateauTangentConstraint:\"AutoPlateauTangent\"\n\
	}\n\
	str = \"\"\n\
	for k in ConstraintTypes.keys() :\n\
		if ( in_fcrvkey.Constraint(k) ) :\n\
			str += ConstraintTypes[k] + \" \"\n\
	return str\n\
# Convenience function to print the FCurveKeys\n\
def PrintKeys( in_fcrv ) :\n\
	for fckey in in_fcrv.Keys :\n\
		str = \"key : %d\" % (fckey.Index)\n\
		str = str + \"\\n\\ttime : %d\" % (fckey.Time)\n\
		str = str + \"\\n\\tvalue : %d\" % (fckey.Value)\n\
		str = str + \"\\n\\ttangents : %d,%d,%d,%d\" % (fckey.LeftTanX,fckey.LeftTanY,fckey.RightTanX,fckey.RightTanY)\n\
		str = str + \"\\n\\tconstraints : \" + GetConstraintType( fckey )\n\
		Application.LogMessage( str )\n\
	return None\n\
# Create new scene\n\
Application.NewScene( \"\", 0 )\n\
# Create a null\n\
nullobj = Application.ActiveSceneRoot.AddNull()\n\
# Get the posx parameter from the null\n\
posx = nullobj.posx\n\
# Create an fcurve on posx\n\
fc = posx.AddFCurve2()\n\
# Define some keys (3 key-value pairs)\n\
keyvalues = [ 0,0, 50,25, 100,50 ]\n\
fc.SetKeys( keyvalues )\n\
# Get the 1st, 2nd &amp; 3rd FCurveKey objects\n\
key0 = fc.Keys(0)\n\
key1 = fc.Keys(1)\n\
key2 = fc.Keys(2)\n\
# Make the key non-G1 continuous so it can have different left and right values\n\
# (Python can\'t use the Constraint property as-is, so use SetConstraint as an alias)\n\
key1.SetConstraint( c.siG1ContinuousConstraint, 0 )\n\
key1.LeftTanX = 0\n\
key1.LeftTanY = abs( key1.Value - key0.Value )\n\
key1.RightTanX = key2.Time - key1.Time\n\
key1.RightTanY = 0\n\
PrintKeys( fc )\n\
# Expected results:\n\
# INFO : key : 0\n\
# 	time : 0\n\
# 	value : 0\n\
# 	tangents : -16,0,16,0\n\
# 	constraints : G1Continuous \n\
# INFO : key : 1\n\
# 	time : 50\n\
# 	value : 25\n\
# 	tangents : 0,25,50,0\n\
# 	constraints : \n\
# INFO : key : 2\n\
# 	time : 100\n\
# 	value : 50\n\
# 	tangents : -16,0,16,0\n\
# 	constraints : G1Continuous</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.SetKeyTangents.html\">FCurve.SetKeyTangents</a> <a href=\"#!/url=./si_om/FCurveKey.LeftTanY.html\">FCurveKey.LeftTanY</a> <a href=\"#!/url=./si_om/FCurveKey.RightTanY.html\">FCurveKey.RightTanY</a> <a href=\"#!/url=./si_om/FCurveKey.RightTanX.html\">FCurveKey.RightTanX</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";