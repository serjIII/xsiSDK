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
      <meta name=\"topicid\" content=\"GUID-0DF0E161-CFB1-4A97-96AE-7A8F4CAE4A60\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: &#34;Object required&#34;\" />\n\
      <meta name=\"indexterm\" content=\"Object required\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>ERROR : Object required</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-0DF0E161-CFB1-4A97-96AE-7A8F4CAE4A60\"></a></span><div class=\"head\">\n\
            <h1>ERROR : Object required</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> \'ERROR : Object required</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-0030\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D8A59B3A-110A-47E8-87E1-BF45F5C9E4C2\"></a></span>Possible Cause\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-22A78F1B-9652-4EC2-9D8F-2B09E98EAC0E\"></a></span>You may be trying to return an object from a function that returns a data value. For\n\
                  VBScript, you can get this error message if you try to use the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a></span> keyword to get a return value from a function that returns a data value (because\n\
                  the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a></span> keyword creates an object variable).\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-0031\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6900191D-702B-472E-BCEB-02A3654A870D\"></a></span>Suggested Solution\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A6D6B1E6-5796-4573-8D12-4C49F052CFD8\"></a></span>Check the return value of the command, method, event or property again. For VBScript,\n\
                  check to see whether you should be using the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a></span> keyword.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-DCFF9A79-BD14-4EF1-8827-6CD33D13C683\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCE5C3BC-E153-4CEF-9D87-2B605C00AD08\"></a></span>In some cases, you may be expecting a function to return a valid object, but you get\n\
                        this error message. For example, the <a href=\"#!/url=./si_om/Model.Sources.html\">Model.Sources</a> property returns a <a href=\"#!/url=./si_om/DataSourceCollection.html\">DataSourceCollection</a> of all <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> objects found on the specified <a href=\"#!/url=./si_om/Model.html\">Model</a>. If there are no sources on that model, the property returns the string <span class=\"code\" translate=\"no\">\"Nothing\"</span> in VBScript.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";