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
      <meta name=\"topicid\" content=\"GUID-8E407137-D4D9-438D-909D-6A4CAB6CA80F\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Python Scripting</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-8E407137-D4D9-438D-909D-6A4CAB6CA80F\"></a></span><div class=\"head\">\n\
            <h1>Python Scripting</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-14CCDD83-32BB-47F3-A07B-65F4FA77CB02\"></a></span>This section answers some of the questions or issues that you might have when working\n\
            with Python ActiveX Scripting. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-0BCDD474-C13F-4FC5-A741-7E11DDB03A8F\"></a></span>Python ActiveX Scripting is a version of the Python scripting language that supports\n\
            ActiveX. Softimage automatically installs the following for Windows and Linux operating\n\
            systems. <span class=\"anchor_wrapper\"><a name=\"UL_8E0CE8E17D1F449AA96AD53D2A9C1F6F\"></a></span><ul>\n\
               <li>Python v2.7.3 </li>\n\
               <li>The pywin32 extensions v217 </li>\n\
            </ul> \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-D06A2C73-6287-4754-B0E2-79EA0D3DBC1E\"></a></span>If you want to use a different version of Python in Softimage, you can set the location\n\
            of the Python directory to use with the <span class=\"code\" translate=\"no\">PYTHONPATH</span> environment variable. \n\
         </p><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_python_HowDoIGetPythontoRecognizeXSIConstantsEnums.htm\">Getting Python to Recognize Softimage Constants (Enums)</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_python_GettingOutputArgumentsfromMethods.htm\">Getting Output Arguments from Methods</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_python_LinkingPythonClassestoCommandButtons.htm\">Linking Python Classes to Command Buttons</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_python_WorkingwithCustomPythonModulesinXSI.htm\">Working with Custom Python Modules in Softimage</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_python_RestrictionsonUsingSpecialPythonTypesasReturnValuesfromCustomCommands.htm\"> Returning Python Types from Custom Commands</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_python_ScriptingShortcutsforPython.htm\">Shortcuts for Python</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/GUID-8FA734C2-27AA-4CAE-91FA-61C1D13439C3.htm\">Tips</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/GUID-1A094700-745D-4719-8A30-42C157AD2F5F.htm\"> Examples</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";