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
      <meta name=\"topicid\" content=\"GUID-E3E24FF9-EE5A-4134-B978-367706CE21FF\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: examples from C# and Scripting Reference\" />\n\
      <meta name=\"indexterm\" content=\"resizing windows in a property page: for dialog boxes\" />\n\
      <meta name=\"indexterm\" content=\"dialogs (custom): resizing and closing\" />\n\
      <meta name=\"indexterm\" content=\"property pages: resizing and closing from page logic\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: examples from C++ API Reference\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: examples installed with Softimage\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Custom Property Page Examples</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E3E24FF9-EE5A-4134-B978-367706CE21FF\"></a></span><div class=\"head\">\n\
            <h1>Custom Property Page Examples</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C1149DF3-B25B-4685-9D91-85A410ECD608\"></a></span>There are examples throughout the documentation and some provided as part of the Softimage\n\
               installation. This section provides some links to notable examples, along with a brief\n\
               description of them:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-88DA4747-23E6-4772-9777-9CBEBE56D505\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CustomPropertyPageExamples.htm#WS34BA39B437A993419C80CAB58E3BEFA1-009D\">Examples from the C# and Scripting Reference guide</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-02125E51-CDEC-483E-B402-DAFAE1DF5F86\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CustomPropertyPageExamples.htm#WS34BA39B437A993419C80CAB58E3BEFA1-00A0\">Examples from the C++ API Reference guide</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-21DFC50B-C93F-4D80-A178-DB94AC41FB2F\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CustomPropertyPageExamples.htm#WS34BA39B437A993419C80CAB58E3BEFA1-00A1\">Examples Installed in the Softimage SDK Workgroup</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-7B43DFDF-0D8C-44DB-8EE1-585DD9A8F72F\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6777361C-D170-43C4-8087-9B703B4A8399\"></a></span>There is also a <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_wizard.htm\">Custom Property Wizard</a></span> which you can use to quickly generate the code for a custom property. Examining this\n\
                     generated code is a good way to learn about custom properties.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-009D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5F5F2659-CAC2-4649-A68C-4D8B8CE4947A\"></a></span> Examples from the C# and Scripting Reference guide\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2A695C8-45C4-4C75-B776-3DAE12BE34F6\"></a></span>The following custom property page examples are provided in the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a> for the object, method or property indicated. Most of the scripting examples can\n\
                  be run in the Script Editor, unless otherwise noted:\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-009E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-CE4836FE-B204-4BEB-894F-B184DEF8890A\"></a></span>VBScript\n\
                  </h3> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C59AB035-093F-4386-8AD0-3375D71D6F28\"></a></span><a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a>—demonstrates how to set labels.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-874A46F8-27C4-42A1-A58C-0DEE18618739\"></a></span><a href=\"#!/url=./si_om/PPGLayout.AddEnumControl.html\">PPGLayout.AddEnumControl</a>—demonstrates how to work with various Enum controls.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-93D84AD9-9EAE-4320-BA60-641CF34704CA\"></a></span><a href=\"#!/url=./si_om/PPGLayout.AddFCurve.html\">PPGLayout.AddFCurve</a>—demonstrates how to work with FCurve controls.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-A68FF4D4-874F-4B42-A2AE-1DBE7BF803D6\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-2903E442-E643-4A4C-920A-196666548BB6\"></a></span>Also, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CustomPropertyPageExamples.htm#WS34BA39B437A993419C80CAB58E3BEFA1-00A1\">Examples Installed in the Softimage SDK Workgroup</a></span> for where you can get a VBScript example of a self-installing plug-in that implements\n\
                           a custom property.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-009F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-804D25C8-108D-4B14-891C-9E167E1D415F\"></a></span>JScript\n\
                  </h3> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4121F772-F608-4DA4-BD17-A09F306F8625\"></a></span><a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">PluginRegistrar.RegisterProperty</a>—demonstrates how to create a self-installing plug-in based custom property.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB14BCD1-4F6F-4364-A9A8-74BA3B4994A5\"></a></span><a href=\"#!/url=./si_om/PPG.CurrentTab.html\">PPG.CurrentTab</a>—demonstrates how to work with tab controls.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A3361658-C690-49CE-A310-8A83CE53946D\"></a></span><a href=\"#!/url=./si_om/PPG.PPGLayout.html\">PPG.PPGLayout</a>—demonstrates how to build a simple Script viewer using the Folder widget, Drop-Down\n\
                           List/Combo Box control and a Multi-line Text control.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-69D2104A-171B-4DF1-8D65-E84BA7D3A02D\"></a></span><a href=\"#!/url=./si_om/PPG.Close.html\">PPG.Close</a>—demonstrates how to create a non-modal dialog box that cleans itself up using SPDL\n\
                           logic.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAF030FF-B586-4BDC-B38A-89E4D59B67F8\"></a></span><a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a>—demonstrates how to create a dialog with two Path controls.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-72690BBC-5B01-4974-82BD-C025135B7FAB\"></a></span><a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a>—demonstrates how to build a dialog with two list boxes containing items that can\n\
                           be moved back and forth between them.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C5C4F15F-6753-45F0-B359-7F3880EB1950\"></a></span><a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>—two JScript examples demonstrating how to use a property page to collect information\n\
                           from a user and how to work with different number controls.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-60736758-2BB1-4B91-8286-626F319D38C6\"></a></span><a href=\"#!/url=./si_om/PPGLayout.AddColor.html\">PPGLayout.AddColor</a>—demonstrates how to use the layout controls with proxy parameters to build a simplified\n\
                           version of a property page.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A22FCCE-74BA-49D5-BE29-3CDA76563BFA\"></a></span><a href=\"#!/url=./si_om/PPGLayout.AddFCurve.html\">PPGLayout.AddFCurve</a>—demonstrates how to work with FCurve controls.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C5F0BB3A-B24A-4DCC-8827-4C821817AFEA\"></a></span><a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a>—demonstrates how to use logic to create dynamic controls, to interact with the user\n\
                           and how to use the user\'s response to build a simple skeleton.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-9248413A-01D4-4619-ACF4-F25F17031D5C\"></a></span><a href=\"#!/url=./si_om/GridData.html\">GridData</a>—two examples both demonstrating how to display GridData data on a property page.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FBD4EBA-EB0E-42BE-99E4-D4CB18E266F2\"></a></span><a href=\"#!/url=./si_om/View.html\">View</a>— the second JScript example demonstrates how to use logic make a property page resize\n\
                           and close itself.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-00A0\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C79024B9-818B-4E19-9654-4BDEE8A1D591\"></a></span> Examples from the C++ API Reference guide\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1BAAE578-5F22-4EC1-A614-94F1024A7F5C\"></a></span>The following examples are available in the C++ API Reference:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5AD8FA29-E9CB-40D5-856D-9E0B158D1127\"></a></span>PPGItem —two examples demonstrating how to tweak the layout of the property page and\n\
                        how to work with Path controls.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-564E3325-1B27-4BA3-B3EE-899A421CA91D\"></a></span>PPGLayout —demonstrates how to create a temporary dialog to get some information from\n\
                        the user.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-016CB97C-795E-4BA1-B694-052469208997\"></a></span>PluginRegistrar::RegisterProperty —demonstrates how to implement a custom property\n\
                        as a self-installing plug-in using various Enum controls.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-AA0A54BA-4297-4E81-8DDE-B0EE9977CA99\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A9DDED6-73FF-4A6D-AF84-A5C57FD53F22\"></a></span>Also, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CustomPropertyPageExamples.htm#WS34BA39B437A993419C80CAB58E3BEFA1-00A1\">Examples Installed in the Softimage SDK Workgroup</a></span> for where you can get a C++ example of a self-installing plug-in that implements\n\
                        a custom property.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-00A1\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F540360B-AE4E-4C01-93CA-59B82D62E965\"></a></span> Examples Installed in the Softimage SDK Workgroup\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6CF32795-3E88-4E99-90C5-1440854E7632\"></a></span>If you connect to the Softimage SDK Examples <a href=\"#!/url=./examples/Examples.htm\">workgroup</a>, you\'ll find these examples:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-888784D9-B8EA-41FD-BF94-CA1B31BC2BE3\"></a></span> —a C++ API example demonstrating how to create a custom property with various PPG\n\
                        controls.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-15057001-38D4-49FE-90D4-A4C54629E151\"></a></span> —JScript and VBScript examples that show how to build property pages (most of the\n\
                        examples from the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a> are included in this sample).\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";