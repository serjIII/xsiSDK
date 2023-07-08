var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKey.Constraint</title>\n\
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
            <h1>FCurveKey.Constraint</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a>.Constraint</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> value indicating whether or not the specified fcurve key \n\
constraint is set. The siFCurveKeyConstraint values are of type <a href=\"#!/url=./files/Long.htm\">Long</a> (see \n\
<a href=\"#!/url=./si_om/siFCurveKeyConstraint.html\">siFCurveKeyConstraint</a> for a list of possible values).\n\
<br /><br />\n\
Warning: Getting and setting this property in Python is not supported. To set a specific constraint \n\
in Python, use the \"Set\" prefix with method syntax: \'fcrvkey.SetConstraint( c.siLockConstraint, true )\'. \n\
This is demonstrated in the Python example below. To get a specific constraint, use the Python-compliant\n\
method <a href=\"#!/url=./si_om/FCurveKey.GetConstraint2.html\">FCurveKey.GetConstraint2</a> instead.<br /><br />\n\
Setting this property may raise an \"Access Denied\" error. See more information in the FCurveKey object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean FCurveKey.get_Constraint( siFCurveKeyConstraint in_eConstraint );\n\
// set accessor\n\
FCurveKey.set_Constraint( siFCurveKeyConstraint in_eConstraint, Boolean out_pVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Constraint		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveKeyConstraint.html\">siFCurveKeyConstraint</a>		</td>\n\
		<td>\n\
\n\
		The type of fcurve key constraint to set or return. You can add these values \n\
		together to specify several constraints at once. \n\
		<br /><br />\n\
		For example, use siParameterConstraint + siSameLengthTangentConstraint \n\
		to lock all parameters and force left and right tangent lengths to be the same.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example illustrates how to create an fcurve with keys and then how to set a \n\
	constraint on one of the keys. \n\
*/ \n\
// ---------------------------------------------------------------------------------\n\
// Functions and Setup\n\
// ---------------------------------------------------------------------------------\n\
function GetConsList(fckey,setchk)\n\
{\n\
	var dicConstraintTypes = new ActiveXObject( \"Scripting.Dictionary\" );\n\
	dicConstraintTypes.Add( \"LockParameter\",		siParameterConstraint );\n\
	dicConstraintTypes.Add( \"LeftRightParameter\",		siLeftRightValuesConstraint );\n\
	dicConstraintTypes.Add( \"G1Continuous\",			siG1ContinuousConstraint );\n\
	dicConstraintTypes.Add( \"LeftRightTangentDirection\",	siLeftRightTangentDirectionConstraint );\n\
	dicConstraintTypes.Add( \"LeftRightTangentLength\",	siLeftRightTangentLengthConstraint );\n\
	dicConstraintTypes.Add( \"LockAll\",			siLockConstraint );\n\
	dicConstraintTypes.Add( \"HorizontalTangent\",		siHorizontalTangentConstraint );\n\
	dicConstraintTypes.Add( \"ExtremumHorizontalTangent\",	siExtremumHorizontalTangentConstraint );\n\
	dicConstraintTypes.Add( \"AdjustedTangent\",		siAdjustedTangentConstraint );\n\
	dicConstraintTypes.Add( \"ZeroLengthTangent\",		siZeroLengthTangentConstraint );\n\
	dicConstraintTypes.Add( \"SameLengthTangent\",		siSameLengthTangentConstraint );\n\
	dicConstraintTypes.Add( \"NeighborTangent\",			siNeighborTangentConstraint );\n\
	dicConstraintTypes.Add( \"MirrorTangent\",			siMirrorTangentConstraint );\n\
	dicConstraintTypes.Add( \"AutoPlateauTangent\",		siAutoPlateauTangentConstraint );\n\
	var strlist = \"\";\n\
	var vbKeys = dicConstraintTypes.Keys();		// the Dictionary.Keys method returns a safearray\n\
	var jsKeys = vbKeys.toArray();			// that you can convert with the toArray() method\n\
	for ( var k=0; k&lt;jsKeys.length; k++ ) {\n\
		if ( setchk == fckey.Constraint( dicConstraintTypes.Item(jsKeys[k]) ) ) {\n\
			strlist += jsKeys[k] + \" \";\n\
		}\n\
	}\n\
	return strlist;\n\
}\n\
// ---------------------------------------------------------------------------------\n\
// Create new scene\n\
// ---------------------------------------------------------------------------------\n\
NewScene( null, false );\n\
// Create a null\n\
var n = Application.ActiveSceneRoot.AddNull()\n\
// Add a custompvar to the null\n\
var cpset = n.AddProperty( \"Custom_parameter_list\", false, \"CustomPSet\" );\n\
// Add a double parameter to cpset\n\
var x = cpset.AddParameter3( \"X\", siDouble, 0, -100, 100, 1 );\n\
// Create a fcurve on posx\n\
var fc = x.AddFCurve2( new Array(1,0.5), siStandardFCurve );\n\
var fckey = fc.Keys(0);\n\
// ---------------------------------------------------------------------------------\n\
// Set the siLockConstraint ( time, value &amp; tangents are locked )\n\
// ---------------------------------------------------------------------------------\n\
// Set the Constraint property \n\
fckey.Constraint( siLockConstraint ) = 1;\n\
if ( fckey.Constraint(siLockConstraint) ) {\n\
	Application.LogMessage( \"fckey(\" + fckey.Index + \") lock all constraints: true\" );\n\
} else {\n\
	Application.LogMessage( \"fckey(\" + fckey.Index + \") lock all constraints: false\" );\n\
}\n\
Application.LogMessage( \"fckey(\" + fckey.Index + \") constraints set: \" + GetConsList(fckey,true) );\n\
Application.LogMessage( \"fckey(\" + fckey.Index + \") constraints NOT set: \" + GetConsList(fckey,false) );\n\
// If you try and change the key value when the lock constraint is on it raises \n\
// an \'Access Denied\' error.\n\
try {\n\
	fckey.Value = 5;\n\
} catch(e) {\n\
	if ( e.number ) {\n\
		Application.LogMessage( \"fckey(\" + fckey.Index + \") set value failed: \" + e.description );\n\
	}\n\
}\n\
// ---------------------------------------------------------------------------------\n\
// Expected results::\n\
// ---------------------------------------------------------------------------------\n\
//INFO : fckey(0) lock all constraints: true\n\
//INFO : fckey(0) constraints set: LockParameter LeftRightParameter G1Continuous LeftRightTangentDirection LeftRightTangentLength LockAll AutoPlateauTangent\n\
//INFO : fckey(0) constraints NOT set: HorizontalTangent ExtremumHorizontalTangent AdjustedTangent ZeroLengthTangent SameLengthTangent NeighborTangent MirrorTangent\n\
//INFO : 2009 - fckey(0) set value failed: Access denied</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example illustrates how to create an fcurve with keys and then how to set a constraint \n\
\' on one of the keys. \n\
\' \n\
\' ---------------------------------------------------------------------------------\n\
\' Functions and Setup\n\
\' ---------------------------------------------------------------------------------\n\
function GetConsList(fckey,setchk)\n\
	set dicConstraintTypes = CreateObject( \"Scripting.Dictionary\" )\n\
	dicConstraintTypes.Add \"LockParameter\",			siParameterConstraint\n\
	dicConstraintTypes.Add \"LeftRightParameter\",		siLeftRightValuesConstraint\n\
	dicConstraintTypes.Add \"G1Continuous\",			siG1ContinuousConstraint\n\
	dicConstraintTypes.Add \"LeftRightTangentDirection\",	siLeftRightTangentDirectionConstraint\n\
	dicConstraintTypes.Add \"LeftRightTangentLength\",	siLeftRightTangentLengthConstraint\n\
	dicConstraintTypes.Add \"LockAll\",			siLockConstraint\n\
	dicConstraintTypes.Add \"HorizontalTangent\",		siHorizontalTangentConstraint\n\
	dicConstraintTypes.Add \"ExtremumHorizontalTangent\",	siExtremumHorizontalTangentConstraint\n\
	dicConstraintTypes.Add \"AdjustedTangent\",		siAdjustedTangentConstraint\n\
	dicConstraintTypes.Add \"ZeroLengthTangent\",		siZeroLengthTangentConstraint\n\
	dicConstraintTypes.Add \"SameLengthTangent\",		siSameLengthTangentConstraint\n\
	dicConstraintTypes.Add \"NeighborTangent\",		siNeighborTangentConstraint\n\
	dicConstraintTypes.Add \"MirrorTangent\",			siMirrorTangentConstraint\n\
	dicConstraintTypes.Add \"AutoPlateauTangent\",	siAutoPlateauTangentConstraint\n\
	strlist = \"\"\n\
	dkeys = dicConstraintTypes.Keys()\n\
	for each k in dkeys\n\
		if setchk = fckey.Constraint(dicConstraintTypes.Item(k)) then\n\
			strlist = strlist &amp; k + \" \" \n\
		end if\n\
	next\n\
	GetConsList = strlist\n\
end function\n\
\' ---------------------------------------------------------------------------------\n\
\' Create new scene\n\
\' ---------------------------------------------------------------------------------\n\
NewScene , 0\n\
\' Create a null\n\
set n = Application.ActiveSceneRoot.AddNull()\n\
\' Add a custompset to the null\n\
set cpset = n.AddProperty( \"Custom_parameter_list\", , \"CustomPSet\" )\n\
\' Add a double parameter to cpset\n\
set x = cpset.AddParameter3( \"X\", siDouble, 0, -100, 100, 1 )\n\
\' Create a fcurve on posx\n\
set fc = x.AddFCurve2( array(1,0.5), siStandardFCurve )\n\
set fckey = fc.Keys(0)\n\
\' ---------------------------------------------------------------------------------\n\
\' Set the siLockConstraint ( time, value &amp; tangents are locked )\n\
\' ---------------------------------------------------------------------------------\n\
\' Set the Constraint property \n\
fckey.Constraint( siLockConstraint ) = 1\n\
if fckey.Constraint( siLockConstraint ) then\n\
	Application.LogMessage \"fckey(\" &amp; fckey.Index &amp; \") lock all constraints: true\" \n\
else\n\
	Application.LogMessage \"fckey(\" &amp; fckey.Index &amp; \") lock all constraints: false\" \n\
end if\n\
Application.LogMessage \"fckey(\" &amp; fckey.Index &amp; \") constraints set: \" &amp; GetConsList(fckey,true)\n\
Application.LogMessage \"fckey(\" &amp; fckey.Index &amp; \") constraints NOT set: \" &amp; GetConsList(fckey,false)\n\
\' If you try and change the key value when the lock constraint is on it raises \n\
\' an \'Access Denied\' error.\n\
on error resume next\n\
fckey.Value = 5\n\
if Err.Number then\n\
	Application.LogMessage \"fckey(\" &amp; fckey.Index &amp; \") set value failed: \" &amp; Err.Description\n\
end if\n\
on error goto 0\n\
\' ---------------------------------------------------------------------------------\n\
\' Expected results::\n\
\' ---------------------------------------------------------------------------------\n\
\'INFO : fckey(0) lock all constraints: true\n\
\'INFO : fckey(0) constraints set: LockParameter LeftRightParameter G1Continuous LeftRightTangentDirection LeftRightTangentLength LockAll AutoPlateauTangent\n\
\'INFO : fckey(0) constraints NOT set: HorizontalTangent ExtremumHorizontalTangent AdjustedTangent ZeroLengthTangent SameLengthTangent NeighborTangent MirrorTangent\n\
\'INFO : 2009 - fckey(0) set value failed: Access denied</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># \n\
# This example illustrates how to create an fcurve with keys and then how to set a constraint \n\
# on one of the keys. \n\
# \n\
# ---------------------------------------------------------------------------------\n\
# Functions and Setup\n\
# ---------------------------------------------------------------------------------\n\
# Get the Softimage constants from win32com.client and error handling from pythoncom\n\
from win32com.client import constants as c\n\
from pythoncom import com_error as e\n\
constrainttypes = [ \\\n\
	(c.siParameterConstraint,			\"LockParameter\"),\\\n\
	(c.siLeftRightValuesConstraint,		\"LeftRightParameter\"),\\\n\
	(c.siG1ContinuousConstraint,			\"G1Continuous\"),\\\n\
	(c.siLeftRightTangentDirectionConstraint,	\"LeftRightTangentDirection\"),\\\n\
	(c.siLeftRightTangentLengthConstraint,		\"LeftRightTangentLength\"),\\\n\
	(c.siLockConstraint,				\"LockAll\"),\\\n\
	(c.siHorizontalTangentConstraint,		\"HorizontalTangent\"),\\\n\
	(c.siExtremumHorizontalTangentConstraint,	\"ExtremumHorizontalTangent\"),\\\n\
	(c.siAdjustedTangentConstraint,			\"AdjustedTangent\"),\\\n\
	(c.siZeroLengthTangentConstraint,		\"ZeroLengthTangent\"),\\\n\
	(c.siSameLengthTangentConstraint,		\"SameLengthTangent\"),\\\n\
	(c.siNeighborTangentConstraint,			\"NeighborTangent\"),\\\n\
	(c.siMirrorTangentConstraint,			\"MirrorTangent\"),\\\n\
	(c.siAutoPlateauTangentConstraint,		\"AutoPlateauTangent\") ]\n\
def GetConsList(fckey,setchk):\n\
	strlist = \"\"\n\
	for ( c, strc ) in constrainttypes :\n\
		if fckey.Constraint(c) == setchk:\n\
			strlist += strc \n\
			strlist += \" \" \n\
	return strlist\n\
# ---------------------------------------------------------------------------------\n\
# Create new scene\n\
# ---------------------------------------------------------------------------------\n\
Application.NewScene(\"\", 0)\n\
# Create a null\n\
null = Application.GetPrim(\"Null\", \"\", \"\", \"\")\n\
# Add a custompset to the null\n\
cpset = null.AddProperty(\"Custom_parameter_list\",0,\"CustomPSet\")\n\
# Add a double parameter to cpset\n\
x = cpset.AddParameter3( \"X\", c.siDouble, 0, -100, 100, 1 )\n\
# Create a fcurve on posx\n\
fc = x.AddFCurve2( [ 1, 0.5 ], c.siStandardFCurve )\n\
fckey = fc.Keys(0)\n\
# ---------------------------------------------------------------------------------\n\
# Set the siLockConstraint ( time, value &amp; tangents are locked )\n\
# ---------------------------------------------------------------------------------\n\
# Notice how you have to use \'SetConstraint\' for the Constraint property when setting\n\
fckey.SetConstraint(c.siLockConstraint,1)\n\
if fckey.Constraint(c.siLockConstraint) :\n\
	Application.LogMessage( \'fckey(%d) lock all constraints: true\' % (fckey.Index) )\n\
else :\n\
	Application.LogMessage( \'fckey(%d) lock all constraints: false\' % (fckey.Index) )\n\
Application.LogMessage( \'fckey(%d) constraints set: %s\' % (fckey.Index,GetConsList(fckey,1)))\n\
Application.LogMessage( \'fckey(%d) constraints NOT set: %s\' % (fckey.Index,GetConsList(fckey,0)))\n\
# If you try and change the key value when the lock constraint is on it raises \n\
# an \'Access Denied\' error.\n\
try:\n\
	fckey.Value = 5\n\
except e, (hr, msg, exc, arg):\n\
	if exc and exc[2]: msg = exc[2]\n\
	Application.LogMessage( \'fckey(%d) set value failed: %s\' % (fckey.Index,msg))\n\
# ---------------------------------------------------------------------------------\n\
# Expected results::\n\
# ---------------------------------------------------------------------------------\n\
#INFO : fckey(0) lock all constraints: true\n\
#INFO : fckey(0) constraints set: LockParameter LeftRightParameter G1Continuous LeftRightTangentDirection LeftRightTangentLength LockAll AutoPlateauTangent\n\
#INFO : fckey(0) constraints NOT set: HorizontalTangent ExtremumHorizontalTangent AdjustedTangent ZeroLengthTangent SameLengthTangent NeighborTangent MirrorTangent\n\
#INFO : 2009 - fckey(0) set value failed: Access denied</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurveKey.GetConstraint2.html\">FCurveKey.GetConstraint2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";