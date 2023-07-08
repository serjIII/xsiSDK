var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.Show</title>\n\
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
            <h1>Parameter.Show</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.Show <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Controls whether the parameter is inspectable or not. Calling this method with false is identical \n\
to setting the siNotInspectable capability flag (see <a href=\"#!/url=./si_om/Parameter.SetCapabilityFlag.html\">Parameter.SetCapabilityFlag</a>).\n\
A parameter on a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or an FXTree node that is non-inspectable will not \n\
be shown in the Property Page or in the Scene Explorer; however, it is still accessible to scripting \n\
(see <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">ProjectItem.Parameters</a>). By creating hidden parameters on a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> \n\
or custom <a href=\"#!/url=./si_om/Operator.html\">Operator</a>, a plug-in can save private state information inside a scene. <br /><br />\n\
An alternative way to exclude a parameter from a Property Page is to not include it in the \n\
<a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Parameter.Show( Boolean in_bShow );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = Parameter.Show();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Boolean.htm\">Boolean</a></p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to create hidden parameters \n\
\'\n\
NewScene , false \n\
\' -------------------------------------\n\
\'	Method 1: Using the Show method \n\
dim oPset1, oParam \n\
set oPset1 = Application.ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"HiddenWithShow\" ) \n\
set oParam = oPset1.AddParameter2( \"Hidden\", siDouble ) \n\
oParam.Show( false ) \n\
oPset1.AddParameter2 \"NotHidden\", siDouble  \n\
InspectObj oPset1 , , , siLock\n\
\' -------------------------------------\n\
\'	Method 2: Create a Property Page layout excluding this parameter \n\
dim oPset2, oLayout \n\
set oPset2 = Application.ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"HiddenWithLayout\" ) \n\
oPset2.AddParameter2 \"Hidden\", siDouble  \n\
oPset2.AddParameter2 \"NotHidden\", siDouble  \n\
set oLayout = oPSet2.PPGLayout \n\
oLayout.Clear \n\
oLayout.AddItem \"NotHidden\" \n\
InspectObj oPset2 , , , siLock\n\
\' In either case you can still read and write the \n\
\' the values from the Object Model \n\
Application.LogMessage \"Old Value for \" &amp; oPset1.FullName &amp; \": \" &amp; oPset1.Parameters(\"Hidden\").Value\n\
oPset1.Parameters(\"Hidden\").Value = 5\n\
Application.LogMessage \"New Value for \" &amp; oPset1.FullName &amp; \": \" &amp; oPset1.Parameters(\"Hidden\").Value\n\
Application.LogMessage \"Old Value for \" &amp; oPset2.FullName &amp; \": \" &amp; oPset2.Parameters(\"Hidden\").Value\n\
oPset2.Parameters(\"Hidden\").Value = 25\n\
Application.LogMessage \"New Value for \" &amp; oPset2.FullName &amp; \": \" &amp; oPset2.Parameters(\"Hidden\").Value\n\
\' Output of above script:\n\
\'INFO : Old Value for HiddenWithShow: 0\n\
\'INFO : New Value for HiddenWithShow: 5\n\
\'INFO : Old Value for HiddenWithLayout: 0\n\
\'INFO : New Value for HiddenWithLayout: 25</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a> <a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">ProjectItem.PPGLayout</a> <a href=\"#!/url=./si_om/Parameter.SetCapabilityFlag.html\">Parameter.SetCapabilityFlag</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";