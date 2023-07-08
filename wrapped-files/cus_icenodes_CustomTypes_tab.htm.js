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
      <meta name=\"topicid\" content=\"GUID-1F2A1E74-233A-43DB-AE49-BFBFD678AA3C\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Custom Types</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1F2A1E74-233A-43DB-AE49-BFBFD678AA3C\"></a></span><div class=\"head\">\n\
            <h1>Custom Types</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-24B17D41-31A5-4F24-8918-D66735C3D21A\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-4323CADC-43AC-458B-80B9-7864D6050DC6\">Custom Types</span> tab allows you to define your own user-defined types and can be used like any regular\n\
               data type for defining a custom node port. For more information about custom types\n\
               in general, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_ICENodeDefObjects.htm#WSB2B58C11414F714EB9B26CD8E647E1E1-000D\">Custom (User-defined) Data Types</a></span>.\n\
            </p><img src=\"../images/GUID-1C6F2BE3-AF12-4FBF-B3DF-690E3D784F33-low.png\" /><div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0053\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-89F05625-4484-4FD1-A801-53F25E3F8A3F\"></a></span>Type Name\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7AA0C0B-5A32-4884-9CD9-EC33C23E81C5\"></a></span>The type name is the unique identifier for this type. The first character in the type\n\
                  name should be a letter. Subsequent characters can be letters, numbers, or underscore\n\
                  (_) characters. The wizard automatically replaces spaces with underscores but leaves\n\
                  the spaces in the <span class=\"MenuCascade\" id=\"GUID-083E7E66-D8C0-459F-9BAC-211D27F0FC72\">UI Name</span> box.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0054\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3593D01B-46BB-4A62-A4C0-421A5C0A0A58\"></a></span>UI Name\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-41847B6C-D147-4BCE-9F4E-63ADCBC10666\"></a></span>If you want to use a different display name in the UI for your custom data type, enter\n\
                  the display name in the the <span class=\"MenuCascade\" id=\"GUID-A2F8772B-FFDD-485A-92C8-CF6CBFB6AE57\">UI Name</span> box. By default, the UI name is the same as your type name but with spaces instead\n\
                  of underscores.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0055\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FA766CA0-DC51-407F-956E-2D21B01F3772\"></a></span>Description\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E70F736A-CBB7-4AB3-AC88-C44D7D9F441B\"></a></span>You can specify a brief description for this type. By default, the description is\n\
                  the same as your type name but with spaces instead of underscores.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0056\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2EC27DD8-EDA9-4CA1-85AE-931B4C2E19B5\"></a></span>Connection Handle Color\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E711AFD3-97B8-408F-9DE1-C9F9A4073008\"></a></span>You can define a specific color to use for the port connection handle in the UI.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0057\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-99C9F9D2-EAA2-43E5-BF4B-5D3E3A7FE240\"></a></span>Add button\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9769FA13-9D29-4591-B5D9-792AD97FC5E2\"></a></span>Once you are done filling the fields, click <span class=\"MenuCascade\" id=\"GUID-13C3C7E1-2075-4764-850A-A7CFEE20A5E0\">Add</span> to save the type definition in the grid located in the bottom section of the tab.\n\
                  All values are editable, so you can change any of them if you\'re not satisfied with\n\
                  your initial choices.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0058\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-53031FE0-1111-484F-9AA1-2A552C1C0CD4\"></a></span>Remove Selected button\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-34471D00-D19A-4BC6-A423-09EA904AB6B5\"></a></span>Select a type from the grid to and click <span class=\"MenuCascade\" id=\"GUID-55B96DC7-14E9-4CA5-BD1C-505DB02C0ABC\">Remove Selected</span> to remove it.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";