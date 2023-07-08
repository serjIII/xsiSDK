var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKey</title>\n\
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
            <h1>FCurveKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FCurveKey</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_FCurveKey\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1FCurveKey.html\">FCurveKey</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">FCurveKey</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The FCurveKey represents a key on an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> and is used \n\
to access and modify information about that key.<br /><br />\n\
Note: For more information about interpolation and extrapolation for fcurves. \n\
For more information, see \"FCurve Interpolation and Extrapolation\" in the Softimage user guide. <br /><br />\n\
If setting one property or calling one method raises an \"Access Denied\" error, this may due to different reasons:\n\
the function curve key is locked (see <a href=\"#!/url=./si_om/FCurveKey.Locked.html\">FCurveKey.Locked</a>),\n\
the function curve key is constrained (see <a href=\"#!/url=./si_om/FCurveKey.Constraint.html\">FCurveKey.Constraint</a>) or\n\
the function curve key is part of a function curve used by a locked animation layer (see <a href=\"#!/url=./si_cmds/IsAnimationLayerLocked.html\">IsAnimationLayerLocked</a>).\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.GetConstraint2.html\">GetConstraint2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Set.html\">Set</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Constraint.html\">Constraint</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Index.html\">Index</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Interpolation.html\">Interpolation</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Left.html\">Left</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.LeftTanX.html\">LeftTanX</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.LeftTanY.html\">LeftTanY</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Locked.html\">Locked</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Right.html\">Right</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.RightTanX.html\">RightTanX</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.RightTanY.html\">RightTanY</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Selected.html\">Selected</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Time.html\">Time</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveKey.Value.html\">Value</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
	This example demonstrates how to set an fcurve on the posx parameter\n\
	and then how to access the keys through the FCurveKey object\n\
*/\n\
NewScene( null, false )\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oNull = oRoot.AddNull();\n\
var oPosX = oNull.posx;\n\
// Create and connect an fcurve to the position x\n\
var oFCurve = oPosX.AddFCurve2( new Array(1, 10, 50, 0, 100, 10) );\n\
// Set the zero slopes on the key tangents\n\
oFCurve.SetKeyTangents( new Array( \n\
	-10.5, 0, 10.5, 0, \n\
	-10.5, 0, 10.5, 0, \n\
	-10.5, 0, 10.5, 0 \n\
));\n\
// Get the keys on the fcurve\n\
for ( var i=0; i&lt;oFCurve.Keys.Count; i++ ) {\n\
	var oFCKey = oFCurve.Keys(i);\n\
	Application.LogMessage( \"oFCKey[\" + oFCKey.Index + \"] at frame \" + oFCKey.Time + \" = \" + oFCKey.Value );\n\
}\n\
// Expected results:\n\
//INFO : oFCKey[0] at frame 1 = 10\n\
//INFO : oFCKey[1] at frame 50 = 0\n\
//INFO : oFCKey[2] at frame 100 = 10</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to set an fcurve on the posx parameter\n\
\' and then how to access the keys through the FCurveKey object\n\
\'\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oNull = oRoot.AddNull\n\
set oPosX = oNull.posx\n\
\' Create and connect an fcurve to the position x\n\
set oFCurve = oPosX.AddFCurve2( Array( 1, 10, 50, 0, 100, 10 ))\n\
\' Set the zero slopes on the key tangents\n\
oFCurve.SetKeyTangents( Array( _\n\
	-10.5, 0, 10.5, 0, _\n\
	-10.5, 0, 10.5, 0, _\n\
	-10.5, 0, 10.5, 0 _\n\
))\n\
\' Get the keys on the fcurve\n\
for each oFCKey in oFCurve.Keys\n\
	Application.LogMessage \"oFCKey[\" &amp; oFCKey.Index &amp; \"] at frame \" &amp; oFCKey.Time &amp; \" = \" &amp; oFCKey.Value\n\
next\n\
\' Expected results:\n\
\'INFO : oFCKey[0] at frame 1 = 10\n\
\'INFO : oFCKey[1] at frame 50 = 0\n\
\'INFO : oFCKey[2] at frame 100 = 10</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to set an fcurve on the posx parameter\n\
# and then how to access the keys through the FCurveKey object\n\
#\n\
Application.NewScene( \"\", 0 )\n\
oRoot = Application.ActiveProject.ActiveScene.Root\n\
oNull = oRoot.AddNull()\n\
oPosX = oNull.posx\n\
# Create and connect an fcurve to the position x\n\
oFCurve = oPosX.AddFCurve2( [1, 10, 50, 0, 100, 10] )\n\
# Set the zero slopes on the key tangents\n\
oFCurve.SetKeyTangents( [ \n\
	-10.5, 0, 10.5, 0, \n\
	-10.5, 0, 10.5, 0, \n\
	-10.5, 0, 10.5, 0 \n\
])\n\
# Get the keys on the fcurve\n\
for oFCKey in oFCurve.Keys :\n\
	Application.LogMessage( \"oFCKey[\" + str(oFCKey.Index) + \"] at frame \" + str(oFCKey.Time) + \" = \" + str(oFCKey.Value) )\n\
# Expected results:\n\
#INFO : oFCKey[0] at frame 1.0 = 10.0\n\
#INFO : oFCKey[1] at frame 50.0 = 0.0\n\
#INFO : oFCKey[2] at frame 100.0 = 10.0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.Keys.html\">FCurve.Keys</a> <a href=\"#!/url=./si_om/FCurveKeyCollection.html\">FCurveKeyCollection</a> <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";