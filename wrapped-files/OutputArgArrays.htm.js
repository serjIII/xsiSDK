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
      <meta name=\"topicid\" content=\"GUID-9EBCB6BC-2D05-4EF5-A854-BCEC3EB322D0\" />\n\
      <meta name=\"indexterm\" content=\"parameters: returning output parameters: scripting\" />\n\
      <meta name=\"indexterm\" content=\"returning output parameters (scripting)\" />\n\
      <meta name=\"indexterm\" content=\"object model: returning output parameters\" />\n\
      <meta name=\"indexterm\" content=\"commands: returning output parameters (scripting)\" />\n\
      <meta name=\"indexterm\" content=\"output parameters (scripting)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Working with Return Values and Output Arguments</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9EBCB6BC-2D05-4EF5-A854-BCEC3EB322D0\"></a></span><div class=\"head\">\n\
            <h1>Working with Return Values and Output Arguments</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-975C96E3-23E9-4A98-A8B5-11FBA4B0582E\"></a></span>This section explains what to expect when working with <span class=\"char_link\"><a href=\"#!/url=./files/scripting_RtnValDefined.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0026\">return values</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a></span> (sometimes called <em class=\"mild\">output parameters</em>), specifically when the language you are using <span class=\"char_link\"><a href=\"#!/url=./files/ISIVTCollection.htm\">does not support output arguments</a></span> or when the Softimage function (command or property) <span class=\"char_link\"><a href=\"#!/url=./files/RtnValProblem.htm\">both returns a value and uses an output argument</a></span>.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-34AE265D-3941-4891-BEE0-5B9E66AAEB35\"></a></span>Note that this is largely a scripting/object model issue, since the C++ API provides\n\
            a separate mechanism for calling commands (see <a href=\"#!/url=./files/cpp_understand_CallingCommandsfromC.htm\">Calling Commands from C++</a>). However, there are still some aspects of accessing output arguments and return\n\
            values in the C++ API that require some explanation.\n\
         </p>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-5124937A-A941-4332-8E63-B7D6F8F49D9C\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-53EFBBDE-8CE5-44FB-AA41-46B55003D70F\"></a></span>Each language behaves slightly differently with respect to the level of support for\n\
                  commands vs. methods, output arguments vs. ISIVTCollections. For a breakdown by language,\n\
                  see <span class=\"char_link\"><a href=\"#!/url=./files/outarg_bylang.htm\">Output Argument Support by Language</a></span>.\n\
               </p> \n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/RtnValDefined.htm\"> What is a Return Value?</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/OutArgDefined.htm\"> What is an Output Argument?</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/outarg_bylang.htm\">Output Argument Support by Language</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/ISIVTCollection.htm\"> What is an ISIVTCollection?</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/RtnValProblem.htm\"> What Happens when the Function Already Returns a Value?</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/OutArgExamples.htm\">Examples of Handling Return Values and Output Arguments</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";