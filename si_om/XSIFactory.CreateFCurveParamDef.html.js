var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIFactory.CreateFCurveParamDef</title>\n\
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
            <h1>XSIFactory.CreateFCurveParamDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>.CreateFCurveParamDef</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> parameter definition for use with a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> \n\
or <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a>. An FCurve of this type is often called a \"Profile Curve\" \n\
because, unlike most FCurves, this curve does not animate any parameter, but instead is available for \n\
use in any fashion the plug-in developer or user wishes.\n\
<br /><br />\n\
Unlike parameters that have simple types like an Integer or a String, this Parameter is an instance \n\
of an FCurve. It uses units of Frames for its x axis, but because it does not directly animate any\n\
object this axis can actually be interpreted in any fashion.  An example use of an FCurve\n\
parameter can be found on the Bulge Operator.\n\
<br /><br />\n\
The FCurve object is retrieved via the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> method.\n\
This should not be confused with the method for retrieving an FCurve\n\
that is animating a \"basic\" parameter (the <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> method).\n\
<br /><br />\n\
In order to view the FCurve on the Property Page for the <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or\n\
<a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a> use <a href=\"#!/url=./si_om/PPGLayout.AddFCurve.html\">PPGLayout.AddFCurve</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ParamDef XSIFactory.CreateFCurveParamDef( String in_ScriptName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIFactory.CreateFCurveParamDef( ScriptName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ParamDef.html\">ParamDef</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ScriptName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		This argument specifies the ScriptName of a parameter (see \n\
		<a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a>). This name is also \n\
		used as the name and description.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to create an fcurve parameter \n\
	from a parameter definition.\n\
*/\n\
var o = Application.ActiveSceneRoot.AddCustomProperty( \"MyProfileEditor\" );\n\
var param = o.AddParameterFromDef( XSIFactory.CreateFCurveParamDef(\"fc\") );\n\
// Set keys on profile curve\n\
var fc = param.Value;\n\
for ( var i = 0; i &lt; 360; i=i+3 )\n\
{\n\
	fc.AddKey( (i/360) * 100, Math.sin( i ) * 100 );\n\
}\n\
// Set the ppglayout to show fcurve\n\
var oLayout = o.PPGLayout;\n\
oLayout.AddFCurve( \"fc\", 250 );		// 250 == height of editor</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomOperator.AddParameter.html\">CustomOperator.AddParameter</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameterFromDef.html\">CustomProperty.AddParameterFromDef</a> <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";