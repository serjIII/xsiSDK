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
      <meta name=\"topicid\" content=\"GUID-980E4D0E-82C2-409A-8878-087CD387C7BC\" />\n\
      <meta name=\"indexterm\" content=\"return values: data types vs. objects vs. collections\" />\n\
      <meta name=\"indexterm\" content=\"return values: knowing what to expect\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What You Should Know about Return Values</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-980E4D0E-82C2-409A-8878-087CD387C7BC\"></a></span><div class=\"head\">\n\
            <h1>What You Should Know about Return Values</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8A8E700-9A35-48FC-8039-501C722DB9C6\"></a></span>Autodesk Softimage provides a very diverse set of native scripting commands and object\n\
               model methods. This means that what gets returned completely depends on which command\n\
               or method you are calling and how you capture that value. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1F8973D-A16A-45CA-9B19-528CAD194942\"></a></span>The <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a> provides documentation for each native command and object model method in Softimage.\n\
               Part of this documentation includes the kind of value it returns. For VBScript, when\n\
               you are getting return values from commands or methods, you need to decide whether\n\
               to use a data value variable or an object variable: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' The <em class=\"strong\">Set</em> keyword declares your variable to be a\n\
\' pointer to an object, not a <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> value variable\n\
\n\
\' Setting a <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> value variable in VBScript\n\
myVar = CommandOrMethodName()\n\
\n\
\' Setting an object variable in VBScript\n\
Set myVar = CommandOrMethodName()</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-613D5C94-AE79-4178-8525-EEEC0E8CB073\"></a></span>For example, if you use a method that is supposed to return an object, you must use\n\
               an object variable; alternatively, if you use a method that is supposed to return\n\
               a numerical value (like <em class=\"strong\">double</em>), you must use a data value variable. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-379E5612-113F-4A6A-B379-520301258914\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB4DB055-1FD6-4AE4-82DF-90F25A20DA12\"></a></span>For more specifics about the differences between these types of return values, see\n\
                     <span class=\"char_link\"><a href=\"#!/url=./files/script_data_WhattoWatchOutforwithObjectsandCollections.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-002C\">Returning Data Values</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/script_data_WhattoWatchOutforwithObjectsandCollections.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-002D\">Returning Objects</a></span>. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";