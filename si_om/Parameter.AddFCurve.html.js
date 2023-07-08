var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.AddFCurve</title>\n\
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
            <h1>Parameter.AddFCurve</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.AddFCurve</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates and connects an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> to a <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object, and \n\
optionally adds keys.  If no type argument is specified, then the type of fcurve added will \n\
be based on the parameter\'s type (which is configured in the parameter\'s definition). You can \n\
override the default fcurve type associated with a parameter by adding the SPDL attribute \n\
\'FCurveType = Standard;\' or \'FCurveType = Integer;\'.\n\
<br /><br />\n\
By default standard fcurves will be created for parameters of type: siDouble, siFloat, siInt4, \n\
siInt2, siByte, siUInt4, siUInt2 and siUByte (see <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a> for further \n\
details on types). If the parameter represents a boolean, then a boolean fcurve will be created.\n\
<br /><br />\n\
For the JScript-compliant version of this method, see <a href=\"#!/url=./si_om/Parameter.AddFCurve2.html\">Parameter.AddFCurve2</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve Parameter.AddFCurve( Object in_Type, Object in_Interpolation, Object in_Extrapolation, Object in_KeyDataArray );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Parameter.AddFCurve( [Type], [Interpolation], [Extrapolation], [KeyDataArray] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveType.html\">siFCurveType</a>		</td>\n\
		<td>\n\
 The type of the FCurve.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
defined by parameter type			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Interpolation		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveInterpolation.html\">siFCurveInterpolation</a>		</td>\n\
		<td>\n\
 The interpolation of the FCurve 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
defined by parameter type			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Extrapolation		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveExtrapolation.html\">siFCurveExtrapolation</a>		</td>\n\
		<td>\n\
 The extrapolation of the FCurve 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
defined by parameter type			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">KeyDataArray		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		The structure of the array is defined by the previous parameters and the number keys. The array must be \n\
		either 1-dimensional or 2-dimensional.  For 2-dimensional arrays, the first dimension defines the values \n\
		for each key; the second defines the number of keys.\n\
		<br /><br />\n\
		It is necessary to explicitly define the tangency for standard fcurves that use the default key interpolation \n\
		or specify cubic interpolation. For standard fcurves using constant and linear key interpolation, 2 values \n\
		are defined for each key: the key time in frames, and the key value at that frame.  \n\
		<br /><br />\n\
		To specify the tangency there must be 6 values defined for each key in the following order: the key time \n\
		in frames, the key value at that frame, the left tangent time in frames relative to the key time (must be \n\
		a negative value), the left tangent value relative to key value, the right tangent time in frames relative \n\
		to key time (must be a positive value), and the right tangent value relative to key value. \n\
		<br /><br />\n\
		In order to allow tangents to be set exactly as specified the auto tangent constraint is turned off. This may \n\
		lead to an invalid curve depending on the tangent values but allows the tangents to be set as specified. If \n\
		empty values are specified for tangency values the default tangents are calculated. \n\
		<br /><br />\n\
		You can specify tangents for fcurves using constant or linear key interpolation although this is optional\n\
		and is only used if the key interpolation is changed to cubic.\n\
		<br /><br />\n\
		The curve handles must never extend past the value of the neighboring key frames.  When the tangency is \n\
		explicitly defined, the tangent values must reflect this fact.  Passing \"Empty\" for the tangents in the case \n\
		of the cubic fcurves, and not having to specify them in the case of linear and constant fcurves, ensures that \n\
		the tangents for the correct handles are automatically calculated.  The left and right tangents of a fcurve \n\
		can be set to any real value; however, in order to preserve the functional characteristic of the curve, these \n\
		tangents are subject to change.  The values are automatically changed and a different fcurve is drawn if the \n\
		original chosen values do not generate a curve that is also a valid function on the x and y axes.  By definition \n\
		an fcurve is a function, and therefore must have the property that for every value of x there exists a unique y \n\
		value.  Visually, this means that any vertical line drawn along the domain of x can only pass through the curve \n\
		once.  A minimal rule to guarantee that this functional property holds for a curve is to ensure that the right \n\
		tangent of a given key is less than or equal to the left tangent of the successive key.  It is possible that the \n\
		right tangent can be moved past this point and the fcurve is still valid, but anything past this point and the \n\
		tangent values are subject to change.  Furthermore, to ensure the functionality of an fcurve, the right tangent \n\
		of a given key must always be greater than or equal to the value of the key itself and the left tangent must be \n\
		less than or equal to the key.  There are no constraints on the y axis.  \n\
		<br /><br />\n\
		For boolean fcurves you don\'t need to specify the tangency; the only values you need to define are the key time, \n\
		which can have any real value, and the key value, which can have value \"1\" or \"0\".  Note that \"True\" and \"False\" \n\
		are not valid parameters and \"1\" and \"0\" must respectively be used as representative values.      \n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to create a standard fcurve with tangents automationally\n\
\'	calculated.\n\
\'\n\
NewScene , False\n\
set oCube = Application.ActiveSceneRoot.AddGeometry( \"Cube\",\"MeshSurface\" )\n\
dim aKeyData : aKeyData = array( 1.00, 5.00, Empty, Empty, Empty, Empty, 100.00, 6.00, Empty, Empty, Empty, Empty )\n\
set f = oCube.posx.AddFCurve( , , , aKeyData )\n\
\' Write the fcurve keys (assuming standard fcurve)\n\
for each k in f.Keys\n\
	Application.LogMessage k.Name &amp;\" Value: \" &amp; k.Value\n\
	Application.LogMessage k.Name &amp;\" Locked: \" &amp; k.Locked\n\
	Application.LogMessage k.Name &amp;\" Left: \" &amp; k.Left\n\
	Application.LogMessage k.Name &amp;\" Right: \" &amp; k.Right\n\
	Application.LogMessage k.Name &amp;\" LeftTanX: \" &amp; k.LeftTanX\n\
	Application.LogMessage k.Name &amp;\" LeftTanY: \" &amp; k.LeftTanY\n\
	Application.LogMessage k.Name &amp;\" RightTanX: \" &amp; k.RightTanX\n\
	Application.LogMessage k.Name &amp;\" RightTanY: \" &amp; k.RightTanY\n\
	Application.LogMessage k.Name &amp;\" Interpolation: \" &amp; k.Interpolation\n\
	Application.LogMessage k.Name &amp;\" Flags: \" &amp; k.Flags\n\
next</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to create a standard fcurve with linear interpolation\n\
*/\n\
NewScene( null, false );\n\
var cube = Application.ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
var aKeyData = Array\n\
(\n\
	1.00, 5.00, \n\
	100.00, 6.00\n\
)\n\
// Create a standard fcurve with linear interpolation. Notice that you\n\
// only specify time/value pairs for the keydata.\n\
var fc = cube.posx.AddFCurve( null, siLinearInterpolation, null, aKeyData );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> <a href=\"#!/url=./si_om/Parameter.AddFCurve2.html\">Parameter.AddFCurve2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";