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
      <meta name=\"topicid\" content=\"GUID-2957B9F5-0960-4305-886D-BD9696760967\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Automatically Closing the Command Window</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-2957B9F5-0960-4305-886D-BD9696760967\"></a></span><div class=\"head\">\n\
            <h1>Automatically Closing the Command Window</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2CD76E1-192B-4E37-8534-9CB76978D47B\"></a></span>By default in batch mode on Windows, Autodesk Softimage runs in a new window that\n\
               stays open after the process is finished. This allows you to see any messages that\n\
               have been logged to the console.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB51E403-01FF-4A78-9B52-EC5F5D9D7185\"></a></span>However, it is sometimes desirable to turn this behavior off. For example, you may\n\
               want to automatically run several scripts one after another from a single batch file.\n\
               If the new window does not close, control does not return to the original batch process\n\
               and the next script cannot start.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CBB8D95-A264-4CB2-AFBB-ABE7675C5A2D\"></a></span>To make the command window close automatically, do either of the following:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5B73B996-95B4-48F9-8A14-5CF28569022A\"></a></span>Use <em class=\"strong\">xsibatch</em> as described in the previous section\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-081AB095-4085-43B9-A279-4897C6B561D1\"></a></span> <em class=\"mild\">or</em> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-43A7A5AF-F262-4B18-958D-448F603FA8A4\"></a></span>Use <em class=\"strong\">xsi</em> with the <em class=\"strong\">-continue</em> option in the command line that starts Autodesk Softimage:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">xsi -continue -script myscript.vbs</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-22753AFB-5EF0-478E-8887-12163DEA30F0\"></a></span>When started with this option, the new window will close automatically when the process\n\
                     terminates. The script or batch file that started Autodesk Softimage can then continue\n\
                     processing.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";