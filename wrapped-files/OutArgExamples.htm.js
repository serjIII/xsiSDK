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
      <meta name=\"topicid\" content=\"GUID-1DE1BC73-3B01-4218-9B3B-B2C531EB4B3D\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Examples of Handling Return Values and Output Arguments</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1DE1BC73-3B01-4218-9B3B-B2C531EB4B3D\"></a></span><div class=\"head\">\n\
            <h1>Examples of Handling Return Values and Output Arguments</h1>\n\
         </div>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE4FFF97-8ACF-4BA6-87E4-8B5BE9105126\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/outarg_vs_ivtcoll.htm\">VBScript Example: Output Arguments vs. the ISIVTCollection</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AAB8E0D4-538C-4E64-BF68-6F5949AA4527\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/vbs_ex.htm\">VBScript Example: Getting Output Arguments from a Method</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-01CA87BA-29DE-4DB0-AEB2-DB388BDFAEA1\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/js_ex.htm\">JScript Example: Using the Method Ô2\' Workaround</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E223F43-94F7-448E-BED2-0B26EC8313DC\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/js_ex_isivt.htm\">JScript Example: Using the ISIVTCollection</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-09CB83A3-7E80-4E36-A69E-AC1E632864F3\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/pys_ex.htm\">Python Example: Working with the ISIVTCollection returned from a Command</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-36B0ECE7-608D-4F3C-B756-8D541E1401C7\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/tuple_outargs.htm\">Python Example: Using Tuples to Access Output Arguments from a Method</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD669011-8755-4739-A33E-7A02E35A9618\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/vbs_cmd_workaround.htm\">Example: Custom Command Workaround for Both Output Arguments and Return Values</a></span> \n\
               </p> \n\
            </li>\n\
         </ul><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/outarg_vs_ivtcoll.htm\"> VBScript Example: Output Arguments vs. the ISIVTCollection</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/vbs_ex.htm\"> VBScript Example: Getting Output Arguments from a Method</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/js_ex.htm\"> JScript Example: Using the Method Ô2\' Workaround</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/js_ex_isivt.htm\">JScript Example: Using the ISIVTCollection</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/pys_ex.htm\"> Python Example: Working with the ISIVTCollection returned from a Command</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/tuple_outargs.htm\">Python Example: Using Tuples to Access Output Arguments from a Method</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/vbs_cmd_workaround.htm\">Example: Custom Command Workaround for Both Output Arguments and Return Values</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";