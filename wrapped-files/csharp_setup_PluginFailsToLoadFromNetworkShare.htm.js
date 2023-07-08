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
      <meta name=\"topicid\" content=\"GUID-0C968C18-721F-43EF-B067-724B07282456\" />\n\
      <meta name=\"indexterm\" content=\"load errors: Plug-in failes to load from network share\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Plug-in failes to load from network share\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in failes to load from network share\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Plug-in Fails to Load from Network Share</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-0C968C18-721F-43EF-B067-724B07282456\"></a></span><div class=\"head\">\n\
            <h1>Plug-in Fails to Load from Network Share </h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-97D11BC0-8280-4449-84A0-D26B2ADFAA44\"></a></span>If you try to load a plug-in from a shared network server that is not added to the\n\
               GAC (Global Assembly Cache), it will fail to load. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-0025\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5458C4E4-962A-4E80-9382-53BF0B25329E\"></a></span>Solution\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F76424E3-70A1-485D-8D3A-856835F6677B\"></a></span>You must give the plug-in a strong name key and move it into the GAC: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-96D8F954-81B8-449A-9092-58D560CE0E9D\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BDB90E6F-AC29-417B-AA45-46B914897BC9\"></a></span>In Visual Studio, open the <span class=\"filePath\" translate=\"no\">.csproj</span> project file. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FE33651B-7ED0-4461-84C8-A522C8D2D009\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CompilingPlugins.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-000F\">Create a strong name key</a></span> for your plug-in. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C2B0C674-6DCF-448A-8643-FD25983875A9\"></a></span>Recompile the plug-in. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E5D457D-5A07-4688-8518-95548AEC8077\"></a></span>From a command-prompt, type the following to add the assembly to the GAC: \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">gacutil /i \\servername\\&lt;plugin_path&gt;\\YourPluginName.dll</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";