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
      <meta name=\"topicid\" content=\"GUID-BF160A7B-14B1-4AB7-8E0C-807C8ED2CB64\" />\n\
      <meta name=\"indexterm\" content=\"How Custom Display Hosts Work\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>About the Custom Display Host</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-BF160A7B-14B1-4AB7-8E0C-807C8ED2CB64\"></a></span><div class=\"head\">\n\
            <h1>About the Custom Display Host</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3F971BA1-BD8B-42E7-B491-11E4EE37A70F\"></a></span>The custom display host enables you to run other applications within Autodesk Softimage.\n\
               These applications can interact in real time with Softimage scene data. Custom displays\n\
               are well-suited to displaying external rendering engines, particularly if you\'ve already\n\
               developed one, as they can use the Win32 API and the Motif API (Linux). In this way,\n\
               you can embed any application in Softimage with minor modifications. \n\
            </p><img src=\"../images/GUID-573ABFB6-F322-4BF5-BBF8-F861082A06CA-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-99E4D3D6-F277-4900-AAB8-823004924DB5\"></a></span>Example of a game engine running inside Softimage. End-users can modify geometry,\n\
               which is automatically updated in the custom display, and test the game without leaving\n\
               Softimage. \n\
            </p><img src=\"../images/GUID-EB5FAAA5-412B-4596-BA18-DFE3FC35637C-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-A964E589-9770-4C15-A25A-4000A25C7405\"></a></span>Example of a vertex painting tool that lets end-users paint and bake out the information.\n\
               The source code for this example is supplied with the Softimage SDK. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-98260C7B-8042-465D-85AB-33DCFA2BF4B3\"></a></span>This section contains the following topics: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_D428726AA5814FB4A2CA1075704858FD\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-65968E74-60FE-470E-96DA-28B7CF58DC54\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_AbouttheCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-0006\">How They Work</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E1B35085-B3AF-4DDF-B852-04754F1C1FB1\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_AbouttheCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-0009\">Examples</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0006\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F44BD089-B225-43DA-B968-BC454DE312BC\"></a></span> How They Work\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E7C64600-22EA-4B00-AAC3-16D58522508B\"></a></span>Custom displays are standard modeless dialogs that you create yourself with a resource\n\
                  editor. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_ComponentsofaCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-000E\">View Context: Initializing and Drawing the Interface</a></span>. \n\
               </p> <img src=\"../images/GUID-1B0E3E4A-5C10-4EB2-A121-6624CD005A39-low.png\" /> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-69B70F24-CA75-45EE-802F-E8EB15E34689\"></a></span>The display host allows interaction between Softimage and the custom application via\n\
                  a notification loop. Special classes in the C++ API allows the custom display to receive\n\
                  and filter notifications as they occur in Softimage, and act upon them. The custom\n\
                  display and Softimage can update simultaneously--when users make changes in either\n\
                  Softimage or the custom display, the other updates accordingly. For more information,\n\
                  see <span class=\"char_link\"><a href=\"#!/url=./files/cus_displayhost_ComponentsofaCustomDisplayHost.htm#WS80E1DB301E4FA64088A6717142BEA52A-0011\">View Notification</a></span>. \n\
               </p> <img src=\"../images/GUID-6C09397B-2E59-4C3C-AB3C-2167402F5D8B-low.png\" /> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS80E1DB301E4FA64088A6717142BEA52A-0009\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-94474AE3-A993-436D-A0E1-78595827ECB9\"></a></span>Examples\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-102AFD89-82CA-455B-BE46-6F0A4B56E0F3\"></a></span>The following examples of custom display hosts are available in the examples folder\n\
                  of the Softimage SDK installation directory. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_852AF8F931D249C6838D467599A1A950\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8CBA53CD-7363-41A4-95AC-C6A5C9841675\"></a></span> <em class=\"strong\">CustomUI</em>: This simple example shows the basic mechanism of creating a custom display that\n\
                        acts upon Softimage and Win32 notifications. The example shows how to define the interface\n\
                        and callbacks to Softimage, and how to access the notifications that Softimage pushes\n\
                        to the custom display host. See <a href=\"#!/url=./examples/Addons/CustomUITest/netview_CustomUITest.htm\">CustomUI Test</a>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1FABC519-D97E-4011-A7AE-D8FB372300CF\"></a></span> <em class=\"strong\">VertexColors</em>: In addition to the basic mechanisms exposed in the CustomUI example, the VertexColors\n\
                        example shows how custom tools (developed using the C++ API) can be embedded in Softimage\n\
                        as a custom display that acts upon scene data. See <a href=\"#!/url=./examples/Addons/VertexColors/netview_VertexColors.htm\">VertexColors</a>. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";