var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ProxyParameter.MasterParameter</title>\n\
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
            <h1>ProxyParameter.MasterParameter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ProxyParameter.html\">ProxyParameter</a>.MasterParameter <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the master <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> property, which is only available on proxy \n\
parameters, provides access to the real (master) parameter that the proxy parameter represents.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Parameter rtn = ProxyParameter.MasterParameter;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'MasterParameter property\n\
dim oRoot, oPSet, oPrxyPSet\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oPSet = oRoot.AddProperty(\"Custom_parameter_list\",,\"RealParams\")							\n\
oPSet.AddParameter3 \"B\", siInt4, 5, 0, 10 \n\
set oPrxyPSet = oRoot.AddProperty(\"Custom_parameter_list\",,\"ProxyParams\")							\n\
oPrxyPSet.AddProxyParameter oPSet.Parameters( \"B\" )\n\
\'Also add some proxy parameters to other parameters in the scene\n\
oPrxyPSet.AddProxyParameter \"light.LightShader.out.color.red\"\n\
oPrxyPSet.AddProxyParameter \"Camera.camdisp.camdispgenpage.antialias\"\n\
logmessage IsProxyParam( oPSet.Parameters( \"B\" ) )\n\
logmessage IsProxyParam( oPrxyPSet.Parameters( \"Scene_Root_RealParams_B\" ) )\n\
logmessage IsProxyParam( oPrxyPSet.Parameters( \"light_light_soft_light_color_red\" ) )\n\
logmessage IsProxyParam( oPrxyPSet.Parameters( \"Camera_antialias\" ) )\n\
logmessage oPrxyPSet.Parameters( \"Camera_antialias\" ) &amp; \" is a proxy parameter to \" &amp; _\n\
oPrxyPSet.Parameters( \"Camera_antialias\" ).MasterParameter\n\
function IsProxyParam( in_oParam )\n\
	IsProxyParam = ( typename( in_oParam ) = \"ProxyParameter\" )\n\
end function\n\
\'Output of this example is the following:\n\
\'INFO : \"False\"\n\
\'INFO : \"True\"\n\
\'INFO : \"True\"\n\
\'INFO : \"True\"\n\
\'INFO : \"ProxyParams.Camera_Antialias is a proxy parameter to Camera.camdisp.antialias\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//JScript example - MasterParameter property\n\
var oRoot, oPSet, oPrxyPSet ;\n\
oRoot = Application.ActiveProject.ActiveScene.Root ;\n\
oPSet = oRoot.AddProperty(\"Custom_parameter_list\",false,\"RealParams\") ;\n\
oPSet.AddParameter3( \"B\", siInt4, 5, 0, 10 ) ;\n\
oPrxyPSet = oRoot.AddProperty(\"Custom_parameter_list\",false,\"ProxyParams\") ;\n\
oPrxyPSet.AddProxyParameter( oPSet.Parameters( \"B\" ) ) ;\n\
//Also add some proxy parameters to other parameters in the scene\n\
oPrxyPSet.AddProxyParameter( \"light.LightShader.out.color.red\" ) ;\n\
oPrxyPSet.AddProxyParameter( \"Camera.camdisp.camdispgenpage.antialias\" ) ;\n\
logmessage( IsProxyParam( oPSet.Parameters( \"B\" ) ) ) ;\n\
logmessage( IsProxyParam( oPrxyPSet.Parameters( \"Scene_Root_RealParams_B\" ) ) ) ;\n\
logmessage( IsProxyParam( oPrxyPSet.Parameters( \"light_light_soft_light_color_red\" ) ) );\n\
logmessage( IsProxyParam( oPrxyPSet.Parameters( \"Camera_antialias\" ) ) ) ;\n\
logmessage( oPrxyPSet.Parameters( \"Camera_antialias\" ) + \n\
			\" is a proxy parameter to \" +\n\
			oPrxyPSet.Parameters( \"Camera_antialias\" ).MasterParameter ) ;\n\
function IsProxyParam( in_oParam )\n\
{\n\
	return ( Application.ClassName( in_oParam ) == \"ProxyParameter\" ) ;\n\
}\n\
//Output of this example is the following:\n\
//INFO : \"False\"\n\
//INFO : \"True\"\n\
//INFO : \"True\"\n\
//INFO : \"True\"\n\
//INFO : \"ProxyParams.Camera_Antialias is a proxy parameter to Camera.camdisp.antialias\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> <a href=\"#!/url=./si_om/CustomProperty.AddProxyParameter.html\">CustomProperty.AddProxyParameter</a> <a href=\"#!/url=./si_cmds/AddProxyParam.html\">AddProxyParam</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";