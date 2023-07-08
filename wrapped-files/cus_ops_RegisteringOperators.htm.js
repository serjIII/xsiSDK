var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-AD2ED7D7-05E8-4102-95E1-269033E33BBD\" />\n\
      <meta name=\"indexterm\" content=\"custom operators: registering\" />\n\
      <meta name=\"indexterm\" content=\"RegisterOperator (PluginRegistrar): using\" />\n\
      <meta name=\"indexterm\" content=\"PluginRegistrar object (registering operators)\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: Registering a custom operator\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Registering a custom operator\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Registering Operators</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-AD2ED7D7-05E8-4102-95E1-269033E33BBD\"></a></span><div class=\"head\">\n\
            <h1>Registering Operators</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C04B9A8-4DE5-440C-A535-3CF4E40CDF09\"></a></span>Before you can apply an operator in Softimage, you need to register it in <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a>, which is called when Softimage loads a self-installing plug-in. XSILoadPlugin gets\n\
               a <a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a> object from Softimage, and you use <a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a> or PluginRegistrar::RegisterOperatorto register custom operators.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-000E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AE6B170C-43F4-4D07-8211-CCA64C3B7FA6\"></a></span> C++ Example: Registering a custom operator\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor = L\"Operator Wizard User\";\n\
	in_reg.PutName = L\"MyNewOperatorPlugin\";\n\
	in_reg.PutVersion( 1, 0 );\n\
\n\
	// This plug-in contains a custom operator and a custom command to apply it\n\
	in_reg.RegisterOperator( L\"MyNewOperator\" );\n\
	in_reg.RegisterCommand( L\"ApplyMyNewOperator\", L\"ApplyMyNewOperator\" );\n\
	return true;\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-000F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FD7526DF-63CC-41C5-8329-876999EACCA5\"></a></span> JScript Example: Registering a custom operator\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Operator Wizard User\";\n\
	in_reg.Name = \"MyNewOperatorPlugin\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
\n\
	// This plug-in contains a custom operator and a custom command to apply it\n\
	in_reg.RegisterOperator \"MyNewOperator\" );\n\
	in_reg.RegisterCommand( \"ApplyMyNewOperator\", \"ApplyMyNewOperator\" );\n\
	return true;\n\
}\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";