var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveKey.Set</title>\n\
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
            <h1>FCurveKey.Set</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a>.Set</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets the fcurvekey time (see <a href=\"#!/url=./si_om/FCurveKey.Time.html\">FCurveKey.Time</a>) and value (see <a href=\"#!/url=./si_om/FCurveKey.Value.html\">FCurveKey.Value</a>).<br /><br />\n\
Key locks can be overridden using the OverrideKeyLock argument.<br /><br />\n\
Note: If another key already exists at the new frame value then the method raises a \n\
\'Cannot set key\' (E_FAIL) error.<br /><br />\n\
Calling this method may raise an \"Access Denied\" error. See more information in the FCurveKey object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurveKey.Set( Object in_Frame, Object in_Value, Boolean in_OverrideLock );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurveKey.Set( Frame, Value, [OverrideKeyLock] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Frame		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The new key time in frames.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		The new key value. <br /><br />\n\
		For standard and raw fcurves use a double value (VT_R8)<br /><br />\n\
		For integer fcurves use a LONG (VT_I4)<br /><br />\n\
		For boolean fcurves use a variant bool value (VT_BOOL,VARIANT_TRUE,VARIANT_FALSE).\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OverrideKeyLock		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		True to override the <a href=\"#!/url=./si_om/FCurveKey.Locked.html\">FCurveKey.Locked</a> \n\
		value to force key to be set.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to use the FCurveKey.Set method to translate keys.\n\
*/\n\
// Create new scene\n\
Application.NewScene( \"\", false );\n\
var empty;\n\
var nullobj = Application.ActiveSceneRoot.AddNull();\n\
var cpset = nullobj.AddProperty( \"Custom_parameter_list\", empty, \"CustomPSet\" );\n\
var x = cpset.AddParameter( \"X\", siDouble, empty, siAnimatable, \"X\", \"X\", empty, 0.25, -100, 100 );\n\
var y = cpset.AddParameter( \"Y\", siDouble, empty, siAnimatable, \"Y\", \"Y\", empty, 0.25, -100, 100 );\n\
// Create some fcurves\n\
var fc1 = x.AddFCurve();\n\
var fc2 = y.AddFCurve();\n\
// Start editing fcurve\n\
fc1.BeginEdit();\n\
fc2.BeginEdit();\n\
// Add keys to the fcurves\n\
fc1.Resample();\n\
fc2.Resample();\n\
// Assign some values to keys\n\
for ( i=0; i&lt;fc1.GetNumKeys(); i++ ) {\n\
	var calcX = ((i+1)-10)/10;\n\
	fc1.GetKeyAtIndex(i).Value = Math.atan(calcX / Sqr(-calcX * calcX + 1));\n\
	// Copy the value to fc2 for comparison\n\
	fc2.GetKeyAtIndex(i).Value = fc1.GetKeyValue(i);\n\
}\n\
var ckeys = fc1.GetNumKeys();\n\
var tangents = new Array(ckeys*4);\n\
var itan=0;\n\
// Save tangents\n\
for ( var i=0; i&lt;ckeys; i++ ) {\n\
	var fckey = fc1.GetKeyAtIndex(i);\n\
	// Save the tangents\n\
	tangents[itan++] = fckey.LeftTanX;\n\
	tangents[itan++] = fckey.LeftTanY;\n\
	tangents[itan++] = fckey.RightTanX;\n\
	tangents[itan++] = fckey.RightTanY;\n\
}\n\
// Translate the keys\n\
for ( var i=0; i&lt;ckeys; i++ ) {\n\
	var frame = fc1.GetKeyFrame(i);\n\
	var val = fc1.GetKeyValue(i);\n\
	var fckey = fc1.GetKey(frame);\n\
	fckey .set( frame-100, val * 1.25 );\n\
}\n\
// Reset the tangents\n\
fc1.SetKeyTangents(tangents);\n\
// End editing fcurve\n\
fc2.EndEdit();\n\
fc1.EndEdit();\n\
// Convenience function\n\
function Sqr( x ) \n\
{\n\
	return x * x;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";