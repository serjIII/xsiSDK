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
      <meta name=\"topicid\" content=\"GUID-612EF13E-4267-48E7-A6C4-DD1B35BC8E14\" />\n\
      <meta name=\"indexterm\" content=\"Automatic Object Memory Management\" />\n\
      <meta name=\"indexterm\" content=\"error handling: C++\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>About the C++ API</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-612EF13E-4267-48E7-A6C4-DD1B35BC8E14\"></a></span><div class=\"head\">\n\
            <h1>About the C++ API</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-259B7295-3180-41C1-99CF-767C25828096\"></a></span>The C++ Application Programmer\'s Interface (API) is a library of C++ classes that\n\
            gives C++ developers access to the Softimage object model. The library uses, among\n\
            others, these kinds of classes:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-831EEAB4-CAB4-411C-AA95-D98290B0CEA0\"></a></span> <em class=\"strong\">API classes</em>—these classes, the mutator and accessor classes, encapsulate the methods applicable\n\
                  to internal Softimage objects.\n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-788595BD-EB57-4506-BAE0-9733692C6091\"></a></span> <em class=\"strong\">Core classes</em>—these provide some general services such as the generic class <em class=\"strong\">(CRef)</em> used by the API classes for accessing Softimage internal objects and arrays.\n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F36932CF-D636-470F-9BFD-4DAE71DB8F4F\"></a></span> <em class=\"strong\">Math classes</em>—these provide access to Softimage math library elements such as vector, matrix, transformation,\n\
                  rotation, and quaternion. Math classes should not be treated as API class objects\n\
                  because they aren\'t represented with reference objects and they don\'t need an CRef\n\
                  object at creation time, so you can create them freely.\n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-97713EF3-BD52-4AA0-84C6-03A9163D83F6\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F94D2D5F-5AEA-4627-8615-D5FD74AA0D9A\"></a></span>For a complete list of available classes and their descriptions, see the C++ API Reference.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS85AF1D1770E56E449B28FF310D81BAB0-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6FCFCD63-0734-478E-9F4C-8506197E308D\"></a></span>Features of the C++ API\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF197BEB-64F5-477C-AB50-53F35E44A65F\"></a></span>These are a few of the C++ API features:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D9205B03-5B08-46E4-A4D8-DC59052D7708\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_intro-1.htm#WS85AF1D1770E56E449B28FF310D81BAB0-0005\">Automatic Object Memory Management</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FE75B626-7571-4AA7-A656-98B825A11410\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_intro-1.htm#WS85AF1D1770E56E449B28FF310D81BAB0-0006\">Backward Compatibility</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-98F32FC7-44AA-4B74-890F-B462B229BD24\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_intro-1.htm#WS85AF1D1770E56E449B28FF310D81BAB0-0007\">Error Handling</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS85AF1D1770E56E449B28FF310D81BAB0-0005\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-9E66BD8F-E2C4-457F-B116-D17A74E4452F\"></a></span> Automatic Object Memory Management\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6658981B-63B4-4136-8B58-A6DCAE551302\"></a></span>The C++ API is designed to automatically take care of object lifetime. Classes that\n\
                  reference objects in the scene (for example, CRef and the API classes) are lightweight\n\
                  and should be created on the stack as shown in the examples in this chapter. The constructor\n\
                  of these objects automatically increments a reference count, and the destructor automatically\n\
                  decrements this count. This is much easier than COM development where object lifetime\n\
                  needs to be explicitly controlled with calls to <em class=\"strong\">AddRef()</em> and <em class=\"strong\">Release()</em>.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-5A664127-26F6-4E7A-A778-27A19866C922\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-961D9D23-3E18-4A7E-B09D-85186D5E7501\"></a></span>Care must be taken to avoid keeping a reference to an object that has been deleted\n\
                        from the scene. For example, if a plug-in maintains a reference object to a sphere\n\
                        in the heap, and that sphere is removed from the scene (or a different scene is opened),\n\
                        then the C++ API reference will be pointing to a <em class=\"mild\">zombie</em> object that no longer has any valid existence in the current context of Softimage.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF20435A-EFD4-42C8-A858-9285353B9449\"></a></span>For normal C++ API plug-ins this is not a problem because the classes are created\n\
                        in a temporary fashion on the stack, and objects are only removed during the execution\n\
                        of a plug-in callback if the plug-in deletes the object explicitly (by calling the\n\
                        <a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a> command).\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS85AF1D1770E56E449B28FF310D81BAB0-0006\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1ABCED4E-122D-487E-888B-0F0970CA7222\"></a></span>Backward Compatibility\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF9133EB-0843-4B09-A64C-26F92B526CDB\"></a></span>API classes are wrapper classes with no virtual methods that call internal object\n\
                  methods. Because the polymorphism happens inside the API, these classes act like a\n\
                  basic API function set. This extra layer ensures that backward compatibility is preserved\n\
                  between versions.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-6148985D-5363-420D-8EF3-EA6E5158018E\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DEFC1C33-0AEA-48BE-A674-7DD28589BE39\"></a></span>If you are having any problems with .so files that will not load in Softimage we recommend\n\
                        that you look for unresolved symbols after running the following:\n\
                     </p> <span class=\"code\" translate=\"no\">ldd -r filename.so</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3106F228-66FE-4146-B200-1AD69C4869B4\"></a></span>Warnings about <em class=\"strong\">mainwin_init</em> not resolved could be ignored but other errors are a sign that the .so file was compiled\n\
                        with an older version of Softimage. If you attempt to execute a custom command inside\n\
                        Softimage that is implemented in an old .so file, you will see a descriptive error\n\
                        message.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-C385AEF0-D736-4B9F-B735-605A58169582\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F52DB5E2-605A-4217-8B85-9973F67062B9\"></a></span>Some of the custom ICE node classes may break backwards compatibilty as of Softimage\n\
                        2010. For more information, see Backwards Compatibility in the C++ API.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS85AF1D1770E56E449B28FF310D81BAB0-0007\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-FE54A3F7-B4B7-40C8-8564-BAD640B379DF\"></a></span> Error Handling\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AFAF6FC9-879C-43A5-91CD-E6F85B878764\"></a></span>The C++ API uses the <a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> class with error handling. The CStatus class encapsulates status data types (Fail,\n\
                  Invalid Argument, Out of Memory, Access Denied, etc.) and allows you to query, set\n\
                  the error code and print the extended error description.\n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";