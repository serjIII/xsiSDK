var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siCapabilities</title>\n\
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
            <h1>siCapabilities</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siCapabilities</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Determines the capabilities of a parameter. They can be combined by adding \n\
them: for example, to have a parameter animatable (1) and persistable (4), use 5.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siCapabilities.siAnimatable                                                 // 1\n\
siCapabilities.siReadOnly                                                   // 2\n\
siCapabilities.siPersistable                                                // 4\n\
siCapabilities.siNotInspectable                                             // 8\n\
siCapabilities.siSilent                                                     // 16\n\
siCapabilities.siNotPresetPersistable                                       // 128\n\
siCapabilities.siTexturable                                                 // 256\n\
siCapabilities.siKeyable                                                    // 2048\n\
siCapabilities.siNonKeyableVisible                                          // 4096</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAnimatable\"> </a>siAnimatable		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Animatable		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siReadOnly\"> </a>siReadOnly		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Cannot be written to		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPersistable\"> </a>siPersistable		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Is saved with its parameter set		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNotInspectable\"> </a>siNotInspectable		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Does not show up in the UI		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSilent\"> </a>siSilent		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
For internal use only. Do not use.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNotPresetPersistable\"> </a>siNotPresetPersistable		</td>\n\
		<td class=\"example\">128		</td>\n\
		<td>\n\
Will not be saved in presets		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTexturable\"> </a>siTexturable		</td>\n\
		<td class=\"example\">256		</td>\n\
		<td>\n\
Parameter supports connection to rendering node		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKeyable\"> </a>siKeyable		</td>\n\
		<td class=\"example\">2048		</td>\n\
		<td>\n\
Parameter is visible in \'Keying Panel\' and keyable		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNonKeyableVisible\"> </a>siNonKeyableVisible		</td>\n\
		<td class=\"example\">4096		</td>\n\
		<td>\n\
Parameter is only visible in \'Keying Panel\'		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIAddCustomParam.html\">SIAddCustomParam</a> <a href=\"#!/url=./si_cmds/SIAddCustomParameter.html\">SIAddCustomParameter</a> <a href=\"#!/url=./si_om/Parameter.SetCapabilityFlag.html\">Parameter.SetCapabilityFlag</a> <a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">ProjectItem.SetCapabilityFlag</a> <a href=\"#!/url=./si_om/XSICollection.FindObjectsByMarkingAndCapabilities.html\">XSICollection.FindObjectsByMarkingAndCapabilities</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html#AddParameter\">CustomProperty::AddParameter</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Factory.html#CreateParamDef\">Factory::CreateParamDef</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetCapabilities\">Parameter::GetCapabilities</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#PutCapabilityFlag\">Parameter::PutCapabilityFlag</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetCapabilities\">ProjectItem::GetCapabilities</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#PutCapabilityFlag\">ProjectItem::PutCapabilityFlag</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CollectionItem.Capabilities.html\">CollectionItem.Capabilities</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">CustomProperty.AddParameter2</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter3.html\">CustomProperty.AddParameter3</a> <a href=\"#!/url=./si_om/Parameter.Animatable.html\">Parameter.Animatable</a> <a href=\"#!/url=./si_om/Parameter.Capabilities.html\">Parameter.Capabilities</a> <a href=\"#!/url=./si_om/Parameter.Enable.html\">Parameter.Enable</a> <a href=\"#!/url=./si_om/Parameter.GetValue2.html\">Parameter.GetValue2</a> <a href=\"#!/url=./si_om/Parameter.Keyable.html\">Parameter.Keyable</a> <a href=\"#!/url=./si_om/Parameter.ReadOnly.html\">Parameter.ReadOnly</a> <a href=\"#!/url=./si_om/Parameter.Show.html\">Parameter.Show</a> <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> <a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">ProjectItem.Capabilities</a> <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Shader.html#GetShaderInputType\">Shader::GetShaderInputType</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";