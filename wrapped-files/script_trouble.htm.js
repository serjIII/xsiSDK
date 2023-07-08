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
      <meta name=\"topicid\" content=\"GUID-9D9EA8B5-8579-4E12-9184-B38EEEE0111F\" />\n\
      <meta name=\"indexterm\" content=\"solutions to scripting error messages\" />\n\
      <meta name=\"indexterm\" content=\"error messages (scripting)\" />\n\
      <meta name=\"indexterm\" content=\"troubleshooting: scripting\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Understanding Error Messages</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9D9EA8B5-8579-4E12-9184-B38EEEE0111F\"></a></span><div class=\"head\">\n\
            <h1> Understanding Error Messages</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-EDB9991A-0ECD-4425-9455-6F24BDC67023\"></a></span>At some point you may create a script that causes an error message to appear in the\n\
            History Log of the Script Editor. Some of the error messages are self-explanatory,\n\
            but others may cover several possible scenarios.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-2EB9B2F4-4887-4F32-A9AA-333162D92DFD\"></a></span>To help you unravel the mystery of these error messages, here is a small sample of\n\
            error messages, what they may mean, and how to fix your script.\n\
         </p><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERROR2001function_nameArgumentisinvalid.htm\">ERROR : 2001-&lt;function_name&gt; - Argument &lt;#&gt; is invalid</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERROR2038BadVariableType.htm\">ERROR : 2038 - Bad Variable Type</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERROR2000Argumentparameternameisinvalid.htm\">ERROR : 2000 - Argument &lt;#&gt; (&lt;parametername&gt;) is invalid</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORCannotuseparentheseswhencallingaSub.htm\">ERROR : Cannot use parentheses when calling a Sub</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORExpectedendofstatement.htm\">ERROR : Expected end of statement</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORInvalidargumentspecified.htm\">ERROR : Invalid argument specified</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORenum_nameisnotdefined.htm\">ERROR : &lt;enum_name&gt; is not defined</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORtuple_nameisnotdefined.htm\">ERROR : &lt;tuple_name&gt; is not defined</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORtupleqobjecthasnoattribute.htm\">ERROR : \'tuple\' object has no attribute</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORObjectdoesntsupportthispropertyormethod.htm\">ERROR : Object doesn\'t support this property or method:</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORObjectnotacollection.htm\">ERROR : Object not a collection</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORObjectrequired.htm\">ERROR : Object required</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORPythondictcannotbeconvertedtoaCOMVARIANT.htm\">ERROR : (Python) dict can not be converted to a COM VARIANT</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORSyntaxerror.htm\">ERROR : Syntax error</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORTypemismatch.htm\">ERROR : Type mismatch</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_trouble_ERRORWrongnumberofargumentsorinvalidpropertyassignment.htm\">ERROR : Wrong number of arguments or invalid property assignment</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";