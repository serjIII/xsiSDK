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
      <meta name=\"topicid\" content=\"GUID-25301478-92D5-4FFB-A36E-E49A5A37CAD9\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Deploying Self-Installing Plug-ins</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-25301478-92D5-4FFB-A36E-E49A5A37CAD9\"></a></span><div class=\"head\">\n\
            <h1>Deploying Self-Installing Plug-ins</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B865111-9121-4B7A-BB7A-9535764EFD8D\"></a></span>Deploying plug-ins is simple: just put your plug-in in the <span class=\"filePath\" translate=\"no\">Application\\Plugins</span> folder of one of these locations: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_80DD40D9F9E745B49E789BB78EFE43EA\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C0DD6009-2DFB-4A0F-9296-5A35B75DAACE\"></a></span>A workgroup \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0CE0F512-66DF-4C4A-987D-51C6CEFED0F7\"></a></span>An add-on directory in a workgroup \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9EB5C0EF-DFE9-4444-B4B1-E377BB191B37\"></a></span>The User location \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-71C552A6-FAE1-4693-AE52-5E5F640CAD84\"></a></span>Softimage automatically scans these locations at startup, and loads any self-installing\n\
               plug-ins it finds. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E9E54F4-CBAB-460D-87B6-3771DE6FF2C9\"></a></span>The Factory location is not a recommended location for custom plug-ins. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D82CAAE8-DBF8-4505-AF74-0EA1F6610BB7\"></a></span>At start up, Softimage scans the workgroup, user, and factory locations for self-isntalling\n\
               plug-ins. As long as you use the <span class=\"filePath\" translate=\"no\">Application\\Plugins</span> directory (or one of its subdirectories) in the user, workgroup, or factory locations,\n\
               you do not have to explicitly tell Softimage to read those plug-in files. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-B2B1162A-8328-4627-83F7-B4253EA35630\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E664F5B0-DD4E-493F-A5E5-B869DD859431\"></a></span>The C++ examples demonstrate how convenient it is to locate the source code of a self-installed\n\
                     plug-in, shader or custom operator directly inside the Addon location of the workgroup\n\
                     where the compiled .dll or .so will be located. For example, the <a href=\"#!/url=./examples/Addons/ImportExport/netview_ImportExport.htm\"> </a> example has its source code in a cppsrc directory and its <span class=\"filePath\" translate=\"no\">.vcproj/GN/makefile</span> are set to output the <span class=\"filePath\" translate=\"no\">.dll/.so</span> output directly into the <span class=\"filePath\" translate=\"no\">Application\\Plugins</span> directory. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";