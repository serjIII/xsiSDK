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
      <meta name=\"topicid\" content=\"GUID-39A4E6FA-FB47-43D1-98C5-EF5BE4C2C0EB\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Specifying File Formats</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-39A4E6FA-FB47-43D1-98C5-EF5BE4C2C0EB\"></a></span><div class=\"head\">\n\
            <h1>Specifying File Formats</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2EBD2F88-2898-40AB-A901-F6B8CD14F37E\"></a></span>All file formats are registered with a display name, a file extension and one or more\n\
               image subtypes. Each format registration starts with a call to Renderer::AddOutputImageFormat,\n\
               followed by one or more calls to Renderer::AddOutputImageFormatSubType. If the subtype\n\
               call is omitted, the format is not registered.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A1E6180-B359-4F72-948A-F4CAB12F2E73\"></a></span>The image subtypes indicate which render channel types the file format can support\n\
               and what kind of image data format will be used to write out that channel type. For\n\
               example, it is entirely possible to write out an object label channel as an RGB image,\n\
               where each label is encoded as an RGB value.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-CD524108-12C4-4D4B-821A-B8722654E33B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E3F623A-A169-49E7-9972-D73E5913D1C6\"></a></span>For convenience, you can register supported file formats that have the same extension\n\
                     as file formats supported by Softimage-provided rendering engines, using the same\n\
                     display name and preferably with the same coverage of subtypes. This ensures a more\n\
                     uniform presentation to the user when switching engines and ensures that their already\n\
                     chosen output types remain, if not completely, at least mostly identical.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-74786D14-F347-4A61-81BA-A404138890CA\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-48C3198A-CF06-4D6A-B620-EA3DF8F97060\"></a></span>The file formats are currently only used for output; however, this may change in future\n\
                     releases.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";