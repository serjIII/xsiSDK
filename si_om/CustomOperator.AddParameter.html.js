var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CustomOperator.AddParameter</title>\n\
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
            <h1>CustomOperator.AddParameter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a>.AddParameter</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds a new custom <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> to the custom operator.\n\
<br /><br />\n\
The Parameters of a Custom Operator are a convenient way to configure the behavior of \n\
the Operator.  The Parameters normally appear on the <a href=\"#!/url=./si_om/PPG.html\">PPG</a> of the \n\
operator, making it possible for users to control the operator by moving sliders and \n\
other controls. Any change to the Parameter value will \"dirty\" the operator so that it \n\
is re-evaluated the next time its outputs are evaluated.  \n\
<br /><br />\n\
During the evaluation of a Self-Installed Custom Operator the parameter values are \n\
available via <a href=\"#!/url=./si_om/OperatorContext.GetParameterValue.html\">OperatorContext.GetParameterValue</a>. Other types of custom \n\
operators can read the Parameter values via the Parameters property of the \n\
<a href=\"#!/url=./si_om/Operator.html\">Operator</a>,  which can be retrieved via <a href=\"#!/url=./si_om/UpdateContext.Operator.html\">UpdateContext.Operator</a> \n\
as shown in the example below.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Parameter CustomOperator.AddParameter( ParamDef in_ParamDef );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CustomOperator.AddParameter( ParamDef );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The newly created <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParamDef		</td>\n\
		<td><a href=\"#!/url=./si_om/ParamDef.html\">ParamDef</a>		</td>\n\
		<td>\n\
This argument specifies the parameter definition.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to add parameters to a custom operator\n\
*/\n\
NewScene( null, false )\n\
var null1 = GetPrim( \"null\" );\n\
// Create the operator\n\
var sop = XSIFactory.CreateScriptedOp( \"MySOP\", MySOP_Update.toString(), \"JScript\" );\n\
// Add the ports\n\
sop.AddOutputPort( null1.posx );\n\
// Add the parameters\n\
var param1 = sop.AddParameter( XSIFactory.CreateParamDef2(\"text\", siString, \"hello\") );\n\
var param2 = sop.AddParameter( XSIFactory.CreateParamDef2(\"bool\", siBool, true) );\n\
var param3 = sop.AddParameter( XSIFactory.CreateParamDef2(\"int\", siInt4, 10, 0, 100) );\n\
var param4 = sop.AddParameter( XSIFactory.CreateParamDef2(\"dbl\", siDouble, 0.5, 0.0, 1.0) );\n\
// List operator\'s parameters\n\
var eParams = new Enumerator( sop.Parameters );\n\
for ( ; !eParams.atEnd(); eParams.moveNext() )\n\
{\n\
	var param = eParams.item();\n\
	Application.LogMessage( param.Name + \" = \" + param.Value );\n\
}\n\
// Connect the operator\n\
sop.Connect();\n\
// Show the PPG of the operator which includes the parameters\n\
InspectObj( sop ) ;\n\
// The operator\'s update function\n\
function MySOP_Update( ctx, out )\n\
{\n\
	// Normally we would do something with the parameters\n\
	// but for the purpose of the demo just print the values\n\
	oParams = ctx.Operator.Parameters ;\n\
	Application.LogMessage( \"MySOP_Update\" ) ;\n\
	Application.LogMessage( \"   Text parameter: \" + oParams( \"text\" ).Value ) ;\n\
	Application.LogMessage( \"   Bool parameter: \" + oParams( \"bool\" ).Value ) ;\n\
	Application.LogMessage( \"   int parameter: \" + oParams( \"int\" ).Value ) ;\n\
	Application.LogMessage( \"   double parameter: \" + oParams( \"dbl\" ).Value ) ;\n\
	out.Value = ctx.CurrentFrame;	\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomOperator.RemoveParameter.html\">CustomOperator.RemoveParameter</a> <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">ProjectItem.Parameters</a> <a href=\"#!/url=./si_om/UpdateContext.Operator.html\">UpdateContext.Operator</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";