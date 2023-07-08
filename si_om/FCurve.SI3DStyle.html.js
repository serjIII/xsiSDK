var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.SI3DStyle</title>\n\
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
            <h1>FCurve.SI3DStyle</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.SI3DStyle</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the SI3DStyle property of the fcurve as a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
(true for SI3DStyle). If the fcurve is set as SI3DStyle then the key tangents are \n\
constrained using the SI3D tangent constraints. This forces all the key tangents to \n\
have a slope length where the horizontal component is 1/3 of the distance between 2 \n\
consecutive keys. Furthermore, the adjust tangent constraint \n\
(<a href=\"#!/url=./si_om/siFCurveKeyConstraint.html\">siFCurveKeyConstraint</a>) is turned off. If you change an existing \n\
fcurve to use the SI3D style then all tangents are adjusted to meet the SI3D tangent \n\
constraints. \n\
<br /><br />\n\
The SI3D style is only applicable to standard fcurves (<a href=\"#!/url=./si_om/FCurve.Type.html\">FCurve.Type</a> \n\
== siStandardFCurve). If you set this property on other fcurve types the method \n\
returns S_FALSE in C++ and getting the SI3DStyle always returns VARIANT_FALSE.<br /><br />\n\
Setting this property may raise an \"Access Denied\" error. See more information in the FCurve object description.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = FCurve.SI3DStyle;\n\
// set accessor\n\
FCurve.SI3DStyle = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example illustrates how to create an fcurve with\n\
\'	the SI3D style for constraining tangents.\n\
\'\n\
set o = getprim( \"Null\" )\n\
set fc = o.posx.addfcurve()\n\
fc.setkeys( Array(1,50,50,0,100,50) )\n\
fc.si3dstyle = true\n\
\' Get the object as though it was selected and get the fcurve \n\
\' on its local.posx parameter\n\
set o = selection(0)\n\
set fc = o.posx.source\n\
if fc.si3dstyle then\n\
	LogMessage \"fcurve has SI3D style of tangent constraints.\"\n\
end iF\n\
\' Outputs:\n\
\'INFO : fcurve has SI3D style of tangent constraints.</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to create an fcurve with\n\
	the SI3D style for constraining tangents.\n\
*/\n\
// Create a null\n\
Application.NewScene( \"\", false );\n\
var nullobj = ActiveSceneRoot.AddNull();\n\
// Get the posx, posy parameters from the null\n\
var posx = nullobj.posx;\n\
var posy = nullobj.posy;\n\
// Create an fcurve on posx, posy\n\
var fc1 = posx.AddFCurve();\n\
var fc2 = posy.AddFCurve();\n\
// Define the number of keys\n\
var nbkeys = 100;\n\
// Start editing the fcurves\n\
fc1.BeginEdit();\n\
fc2.BeginEdit();\n\
// Set the style of fc1 to SI3D style\n\
fc1.SI3DStyle = true;\n\
var tangents = new Array( nbkeys * 4 );\n\
// Add keys to the fcurve\n\
for ( i=0, j=0; i&lt;nbkeys; i++, j+=4 )\n\
{\n\
	val = (Math.cos( (i+1)/10 ) * 100);\n\
	fc1.AddKey( i, val );\n\
	fc2.AddKey( i, val );\n\
	tangents[j] = 0;\n\
	tangents[j+1] = 0;\n\
	tangents[j+2] = 0;\n\
	tangents[j+3] = 0;\n\
}\n\
// Set the tangent to zero to illustrate the difference \n\
// between the Softimage &amp; SI|3D styles\n\
fc1.SetKeyTangents(tangents);\n\
fc2.SetKeyTangents(tangents);\n\
// End editing the fcurve and put undo event onto the\n\
// undo/redo stack\n\
fc1.EndEdit();\n\
fc2.EndEdit();\n\
// Print the key tangents from both curves to compare\n\
var key1;\n\
var key2;\n\
for ( i=0; i&lt;nbkeys; i++ )\n\
{\n\
	key1 = fc1.GetKeyAtIndex(i);\n\
	key2 = fc2.GetKeyAtIndex(i);\n\
	str = \"fc1: \" + key1.lefttanx + \",\"+ key1.lefttany + \",\"+ key1.righttanx + \",\"+ key1.righttany;\n\
	str += \" fc2: \" + key2.lefttanx + \",\"+ key2.lefttany + \",\"+ key2.righttanx + \",\"+ key2.righttany;\n\
	LogMessage(str);\n\
}\n\
// Outputs:\n\
//INFO : fc1: 0,0,0.3333333333333333,0 fc2: 0,0,0,0\n\
//INFO : fc1: -0.33333333333333326,0,0.33333333333333326,0 fc2: 0,0,0,0\n\
//INFO : fc1: -0.33333333333333326,0,0.3333333333333335,0 fc2: 0,0,0,0\n\
//	etc.\n\
//INFO : fc1: -0.3333333333333343,0,0.3333333333333343,0 fc2: 0,0,0,0\n\
//INFO : fc1: -0.3333333333333343,0,0.3333333333333343,0 fc2: 0,0,0,0\n\
//INFO : fc1: -0.3333333333333343,0,0,0 fc2: 0,0,0,0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";