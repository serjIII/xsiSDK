var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.RemoveKeyAtIndex</title>\n\
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
            <h1>FCurve.RemoveKeyAtIndex</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.RemoveKeyAtIndex</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Removes the key at the specified index. <br /><br />\n\
Key locks can be overridden using the OverrideKeyLock argument.<br /><br />\n\
Calling this method may raise an \"Access Denied\" error. See more information in the FCurve object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.RemoveKeyAtIndex( Int32 in_Index, Boolean in_OverrideKeyLock );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.RemoveKeyAtIndex( Index, [OverrideKeyLock] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Index		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Index of the key; must be a value between 0 and (number of keys - 1).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OverrideKeyLock		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Override the <a href=\"#!/url=./si_om/FCurveKey.Locked.html\">FCurveKey.Locked</a> value to force the key to be removed.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
	This JScript example illustrates how to use the FCurve.RemoveKeyAtIndex method\n\
	to remove a key at a specified index.\n\
*/\n\
// Create a null\n\
Application.NewScene( \"\", false );\n\
var nullobj = ActiveSceneRoot.AddNull();\n\
var empty;\n\
// Create a custom property set on the null\n\
var cpset = nullobj.AddCustomProperty( \"CustomPSet\" );\n\
var x = cpset.AddParameter( \"X\", siDouble, empty, siAnimatable, \"X\", \"X\", empty, 0.25, -100, 100 );\n\
var y = cpset.AddParameter( \"Y\", siDouble, empty, siAnimatable, \"Y\", \"Y\", empty, 0.25, -100, 100 );\n\
// Create some fcurves\n\
var fc1 = x.AddFCurve();\n\
var fc2 = y.AddFCurve();\n\
// Start editing the fcurves\n\
fc1.BeginEdit();\n\
fc2.BeginEdit();\n\
// Add keys to the fcurves\n\
fc1.Resample();\n\
fc2.Resample();\n\
// Assign random values to the keys\n\
for ( i=0; i&lt;fc1.GetNumKeys(); i++ )\n\
{\n\
	fc1.GetKeyAtIndex(i).Value = ( Math.random() * 200 ) - 100;\n\
	// Copy the value to fc2 for comparison\n\
	fc2.GetKeyAtIndex(i).Value = fc1.GetKeyValue(i);\n\
}\n\
var cKeys = fc1.GetNumKeys();\n\
Application.LogMessage( \"total num keys : \" +  cKeys );\n\
// Remove all keys that have an absolute value greater than 75\n\
for ( i=cKeys-1; i&gt;0; i-- )\n\
{\n\
	if ( Math.abs( fc1.GetKeyValue(i) ) &gt; 75 ) \n\
	{\n\
		fc1.RemoveKeyAtIndex(i);\n\
	}	\n\
}\n\
Application.LogMessage( \"total num keys : \" +  fc1.GetNumKeys() );\n\
// End editing fcurve\n\
fc2.EndEdit();\n\
fc1.EndEdit();\n\
// Outputs:\n\
//INFO : \"total num keys : 100\"\n\
//INFO : \"total num keys : 74\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.RemoveKey.html\">FCurve.RemoveKey</a> <a href=\"#!/url=./si_om/FCurve.RemoveKeysAtIndex.html\">FCurve.RemoveKeysAtIndex</a> <a href=\"#!/url=./si_om/FCurve.RemoveKeys.html\">FCurve.RemoveKeys</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";