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
      <meta name=\"topicid\" content=\"GUID-1C76F9FC-8EA8-4A25-A6A3-21B6977F213A\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: user data\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>User Data</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1C76F9FC-8EA8-4A25-A6A3-21B6977F213A\"></a></span><div class=\"head\">\n\
            <h1>User Data</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7E5D46B6-6E42-481A-9237-92E8F9B015A7\"></a></span>User data can be attached to a UFO process instance and to a UFO editor instance.\n\
               This can be set and accessed within any user functions using <em class=\"mild\">ufoProcessSetUserData</em>, <em class=\"mild\">ufoProcessGetUserData</em>, <em class=\"mild\">ufoEditorSetUserData</em>, and <em class=\"mild\">ufoEditorGetUserData</em>, respectively.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9323395D-F3F8-4223-8DCE-7B289668C4E2\"></a></span>If a UFO process instance is copied, then the associated process user data can be\n\
               copied with a user-defined method by supplying the user function <em class=\"mild\">ufoProcessCopyUserData</em>. Similarly, if a UFO process instance is destroyed (that is, put away) it can be\n\
               tidied up with a user-defined method by supplying the <em class=\"mild\">ufoProcessDeleteUserData</em> user function.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7F9F7777-D844-4B18-98A4-E0BFD53A093A\"></a></span>There are user functions to facilitate reading and writing of UFO user data from and\n\
               to a process file on disk, along with the standard parameter and input and output\n\
               settings of UFO process. The data may be saved and loaded in ASCII format by supplying\n\
               the <em class=\"mild\">ufoProcessWriteAsciiData</em> and <em class=\"mild\">ufoProcessReadAsciiData</em> user functions, respectively. Alternatively, the data may be saved and loaded in\n\
               binary format by supplying the user functions <em class=\"mild\">ufoProcessWriteBinaryData</em> and <em class=\"mild\">ufoProcessReadBinaryData</em>, respectively.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-69479ECF-F38E-4D8F-AB4B-65F8C6BC9BB0\"></a></span>Currently, there is only one UFO editor instance in existence at any one time, therefore\n\
               there are no corresponding <em class=\"mild\">ufoEditorCopyUserData</em> and <em class=\"mild\">ufoEditorDeleteUserData</em> user functions. If a UFO editor were to be destroyed, the editor user data can be\n\
               tidied up with a user-defined method by supplying the <em class=\"mild\">ufoProcessDeleteUserData</em> user function.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D21E95E-30B6-4AC2-AD4B-25D2B483585C\"></a></span>UFO writers should refrain from using global data in their UFO code for storing structures\n\
               and values commonly used during rendering, and adopt a method which distinguishes\n\
               between the different instances of a UFO using UFO user data. Essentially, this is\n\
               to safeguard against multiple instances of the same UFO process being used simultaneously\n\
               and accessing the same data. In particular, writing to global data during rendering\n\
               is likely to cause errors if multiprocessing.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";