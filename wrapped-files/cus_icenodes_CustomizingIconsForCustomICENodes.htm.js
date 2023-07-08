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
      <meta name=\"topicid\" content=\"GUID-A9E2FA6D-854F-4D9F-8242-B5849935BB8C\" />\n\
      <meta name=\"indexterm\" content=\"thumbnails: customizing in Preset Manager\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: custom thumbnails\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<userpath&gt;\" />\n\
      <meta name=\"keyword\" content=\"<userpath&gt;\" />\n\
      <title>Customizing Icons for Custom ICENodes</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A9E2FA6D-854F-4D9F-8242-B5849935BB8C\"></a></span><div class=\"head\">\n\
            <h1>Customizing Icons for Custom ICENodes</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB0FF283-56AB-41E5-A8F4-2935B12E0F49\"></a></span>In the Preset Manager, each custom ICENode appears with the default node icon (<img src=\"../images/GUID-89D4AAF0-16CB-42A8-867F-5BCACDA022FF-low.png\" />), but you can specify your own thumbnail to use:\n\
            </p><span class=\"anchor_wrapper\"><a name=\"GUID-E854B2C3-8211-4A86-973C-3B875EB96377\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D90ABFE7-6D1D-41A8-969C-819C846D5727\"></a></span>Add a new Thumbnails subfolder to the directory where your custom node library is\n\
                     installed (for example, <span class=\"filePath\" translate=\"no\"><span class=\"keyword\">&lt;userpath&gt;</span>/Application/Plugins/ABCPlugin</span>).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D6124D33-D0E2-4654-9886-98BE21A0238C\"></a></span>Drop the file(s) you want to use for a thumbnail in that folder: <img src=\"../images/GUID-CFBAC690-8A3B-4F6E-8F89-9E21DD99C4AA-low.png\" /></p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A49F2B69-D803-44DE-8E82-A07C1758FB33\"></a></span>You can use the usual graphics file formats (BMP, JPG, GIF, PNG, PIC, etc.) without\n\
                     having to convert or resize them.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8D4B0A6-923F-4EA7-BC98-932D3180A38B\"></a></span>Make sure the filename matches the name of the plug-in or plug-in item exactly (capitalization,\n\
                     spaces, etc.). You can set one thumbnail for the entire plug-in or individual thumbnails\n\
                     for each plug-in item.\n\
                  </p> \n\
               </li>\n\
            </ol>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-528BDC85-FF95-4994-9117-D3CDB993EAEA\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3861384-EB0C-4F7F-9A6C-4DCDDCF01F69\"></a></span>Softimage tries to match the graphic to each plug-in item and if not found, then looks\n\
                     for a plug-in to match instead.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";