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
      <meta name=\"topicid\" content=\"GUID-E3930D41-AAB5-4DB2-A742-892D4BF22863\" />\n\
      <meta name=\"indexterm\" content=\"ERROR:... #exceptions.TypeError: Objects of type \'dict\' can not be converted to a COM VARIANT\" />\n\
      <meta name=\"indexterm\" content=\"Objects of type \'dict\' can not be converted to a COM VARIANT\" />\n\
      <meta name=\"indexterm\" content=\"ERROR:# raise AttributeError, &#34;%s.%s&#34; % (self._username_, attr) #AttributeError\" />\n\
      <meta name=\"indexterm\" content=\"AttributeError (Python dict can not be converted to a COM VARIANT)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>ERROR : (Python) dict can not be converted to a COM VARIANT</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E3930D41-AAB5-4DB2-A742-892D4BF22863\"></a></span><div class=\"head\">\n\
            <h1>ERROR : (Python) dict can not be converted to a COM VARIANT</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> #ERROR : ...\n\
#exceptions.TypeError: Objects of <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'dict\' can not be converted to a COM VARIANT</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBEDC2F0-1A2E-4A0C-80CA-D66ABA8F4DB3\"></a></span> —or— \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">#ERROR : Traceback (most recent call last):\n\
#  File \"&lt;Script Block &gt;\", line 2, in ?\n\
#    &lt;line triggering error&gt;\n\
#  File \"C:\\Python23\\lib\\site-packages\\win32comext\\axscript\\client\\pyscript.py\", line 150, in __getattr__\n\
#    return getattr(self._scriptItem_.dispatchContainer,attr)\n\
#  File \"C:\\Python23\\lib\\site-packages\\win32com\\client\\dynamic.py\", line 150 in __getattr__\n\
#    raise AttributeError, \"%s.%s\" % (self._username_, attr)\n\
#AttributeError: line 150</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-0034\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-269BC4B2-C731-49B2-8A79-8454838B69F7\"></a></span>Possible Cause\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C72D9CA-123B-48F5-8B10-F96523DAEA6B\"></a></span>You may see an error like one of these accompanying a Traceback for a script block\n\
                  that tries to use a native Python dictionary for return value from a custom command.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-0035\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B72C2324-3A91-44E8-82C2-7AFCF902F323\"></a></span>Suggested Solution\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CF0F75A6-5FC9-4CDA-BC01-0534F937F603\"></a></span>You cannot use the native Python dictionary type as the return value for a custom\n\
                  command, but you can use an ActiveX Scripting Dictionary instead (see <a href=\"#!/url=./files/script_python_RestrictionsonUsingSpecialPythonTypesasReturnValuesfromCustomCommands.htm\">Using Python Dictionaries as Return Values</a>).\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";