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
      <meta name=\"topicid\" content=\"GUID-4504D911-7791-4999-8670-A1F3BEEEFE95\" />\n\
      <meta name=\"indexterm\" content=\"SDK components\" />\n\
      <meta name=\"indexterm\" content=\"language-specific APIs\" />\n\
      <meta name=\"indexterm\" content=\"file conversion tools\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Introducing the Components of the SDK</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-4504D911-7791-4999-8670-A1F3BEEEFE95\"></a></span><div class=\"head\">\n\
            <h1>Introducing the Components of the SDK</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-576C6ABE-D6DC-41BC-B79E-6B19ED907AEC\"></a></span>The kind of development you decide to do depends largely on what you need to accomplish\n\
            and what you are capable of doing, so it\'s really an individual decision. For example,\n\
            you may be a C++ programmer who is interested in creating a compiled plug-in for Autodesk\n\
            Softimage; or you may be a technical director who just needs to automate some repetitive\n\
            tasks. \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS65F31EF2B9FB63408E6329CD03977DC1-0002\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9BC67C7E-0AA7-4E60-992C-3BD4ABB0E8E1\"></a></span> Language-specific APIs\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-94992CF4-5239-4453-879C-6C94AE6741C8\"></a></span>Softimage\'s SDK can accommodate both types of users, since it provides support for\n\
               both C++ programmers and script authors. The SDK consists of these APIs: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"UL_A037F59B7A1F43A098D604CBC69A8173\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF8D86BE-4F17-4048-A237-E92CAC6918C3\"></a></span>The <em class=\"strong\">Scripting Command API</em> — provides access to the same commands that drive the Autodesk Softimage user interface.\n\
                     This is a great API to get started with, since most commands are logged to history,\n\
                     so you can find out how to script in Softimage interactively. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-06218808-E76A-471D-A398-38851A00D4C2\"></a></span>The <em class=\"strong\">Softimage Object Model</em> — can be used either with the Active Scripting Engine to create VBScript, JScript,\n\
                     and Python scripts or any .NET language, such as C#. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6FF17C71-0A2E-48F5-9FF4-F0934C6DBC6F\"></a></span>The <em class=\"strong\">C++ API</em>—pure C++ development kit available to create compiled library files for plug-in and\n\
                     shader development for Softimage. \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1470F99-9A57-4919-9DDD-862600A289E7\"></a></span>For more information on these APIs, see <a href=\"#!/url=./files/dev_intro-1.htm\">Understanding the Softimage SDK Architecture</a>. \n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-F6848EC4-167D-4CD4-84E5-2C58F1C3A8C4\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD5C97F5-EDB4-4C17-B9F8-1D15E9F9A9C2\"></a></span>In previous releases of Softimage, the object model could also be used with the COM\n\
                     (Component Object Model) Compiler to create compiled ActiveX plug-ins. However, it\n\
                     is now strongly recommended to use either C# or the C++ API to create compiled plug-ins.\n\
                     \n\
                  </p> \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS65F31EF2B9FB63408E6329CD03977DC1-0003\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C5C8FF50-29DC-4B61-B9EC-3F170AA3E2D7\"></a></span> File Conversion Tools\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-409F45B5-B93E-4639-9A6D-731FCB1F4E4D\"></a></span>In addition, the dotXSI file format provides a text-based file conversion format which\n\
               comes with its own API, the Crosswalk SDK. Together, these features allow you to import\n\
               and export information between Softimage and another 3D animation package or a game\n\
               engine. \n\
            </p> \n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_intro.htm\">Understanding the Softimage SDK Architecture</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";