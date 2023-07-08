var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.ReadOnly</title>\n\
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
            <h1>Parameter.ReadOnly</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.ReadOnly <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns a <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> value indicating whether the parameter \n\
is read-only.  This flag is primarily a user interface concept; if set to true, \n\
the parameter appears to be greyed out on the Property Page. \n\
<br /><br />\n\
Although the value of a read-only parameter in the Property Page (PPG) cannot \n\
be changed through the user interface, it can be changed using the Object Model \n\
(see <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a>).\n\
<br /><br />\n\
Tip: Changing the ReadOnly flag only affects one particular instance of the parameter.\n\
<br /><br />\n\
Note: Setting this property is not undoable.  If you want to change the read-only\n\
capability and make it undoable, then use <a href=\"#!/url=./si_om/Parameter.SetCapabilityFlag.html\">Parameter.SetCapabilityFlag</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Boolean rtn = Parameter.ReadOnly;\n\
// set accessor\n\
Parameter.ReadOnly = Boolean;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to use Parameter.ReadOnly\n\
*/\n\
NewScene( null, false ) ;\n\
var oProp = Application.ActiveSceneRoot.AddProperty( \"CustomProperty\",false,\"Prop\" ) ;\n\
var oParam = oProp.AddParameter2( \"ReadOnlyString\", siString, null, null, null, \n\
					null, null, 0, siPersistable | siReadOnly ) ;\n\
if ( !oParam.ReadOnly ) {\n\
	Application.LogMessage( \"Expected readonly\" ) ;\n\
}\n\
// Another way to test the same thing\n\
if ( !(oParam.Capabilities &amp;&amp; siReadOnly) ) {\n\
	Application.LogMessage( \"Expected readonly\" ) ;	\n\
}\n\
// You can still change the value from scripting,\n\
// but the user would not be able to modify this from a PPG.\n\
oParam.Value = \"A string\" ;	\n\
//\n\
// Show how the changing the read-only flag \n\
// only affects the specific instance\n\
//\n\
// Copy inside a null\n\
var oNull = Application.ActiveSceneRoot.AddNull() ;\n\
CopyPaste( oProp, null, oNull, 2 ) ;\n\
// Remove the readonly flag on the copy\n\
var oProp2 = oNull.Properties( \"Prop\" ) ;\n\
oProp2.Parameters(\"ReadOnlyString\").ReadOnly = false ;\n\
// Demonstrate that the original pset parameter is still read-only.\n\
if ( !oParam.ReadOnly ) {\n\
	Application.LogMessage( \"Expected still read-only\" ) ;\n\
}\n\
// Show that the parameter is greyed out\n\
InspectObj( oProp ) ;\n\
// Expected result: &lt;no messages are logged&gt;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a> <a href=\"#!/url=./si_om/Parameter.Capabilities.html\">Parameter.Capabilities</a> <a href=\"#!/url=./si_om/Parameter.SetCapabilityFlag.html\">Parameter.SetCapabilityFlag</a> <a href=\"#!/url=./si_om/Parameter.Show.html\">Parameter.Show</a> <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter3.html\">CustomProperty.AddParameter3</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";