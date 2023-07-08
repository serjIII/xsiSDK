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
      <meta name=\"topicid\" content=\"GUID-F369703A-2BB9-499E-9EB4-774EF3CCC79B\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Ports</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F369703A-2BB9-499E-9EB4-774EF3CCC79B\"></a></span><div class=\"head\">\n\
            <h1>Ports</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-745EB68B-6013-4E27-803E-7D12C6D84127\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-F47D8447-D840-4AC4-A410-0F086189CDE6\">Input Ports</span> and <span class=\"MenuCascade\" id=\"GUID-26EB61FB-6F92-425F-9306-07CD2903C30B\">Output Ports</span> tabs allow you to set up ports and portgroups. Both tabs provide the same tools except\n\
               for <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_Ports_tab.htm#WSB2B58C11414F714EB9B26CD8E647E1E1-004D\">\n\
                     Group ID\n\
                     </a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_Ports_tab.htm#WSB2B58C11414F714EB9B26CD8E647E1E1-0047\">\n\
                     Default Value\n\
                     </a></span>, and the <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_Ports_tab.htm#WSB2B58C11414F714EB9B26CD8E647E1E1-0048\">\n\
                     UI Value Range\n\
                     </a></span> group, which are not available for output ports.\n\
            </p><img src=\"../images/GUID-383C120A-A80E-49EA-B4F4-209763E9D9A7-low.png\" /><div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0042\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-63B5A55B-0A26-4D0B-8C84-EE8756624BA3\"></a></span>Name\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5361165E-95DC-44E6-8DFF-9AA0EE693D4D\"></a></span>Use this text box to specify a new name for your port.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0043\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-77BEC089-06AA-4B6A-8AA0-E591503477E0\"></a></span>Data Type\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B662F80-0AE3-4DA1-94A6-D7CF93ABFB4B\"></a></span>Select one of the supported data types from the drop-down list. These values correspond\n\
                  to the <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataType</a> enum.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-67A01EFC-0CA2-4513-9A8F-4513BB38BA84\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8EE7B4A-66D3-48FA-AEEB-AEFE22926CDD\"></a></span>To use a custom type you defined on the <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_CustomTypes_tab.htm\">Custom Types</a></span> tab, select <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeCustomDataType</a> from the <span class=\"MenuCascade\" id=\"GUID-5A84C931-BCD7-4BEC-B9A0-1CF906B507AF\">Data Type</span> drop-down list and follow the instructions for the <span class=\"MenuCascade\" id=\"GUID-181FA502-F810-40B0-9596-C442A3FBF268\">Custom Type</span> drop-down list.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0044\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BCE33346-86EC-44C7-86F3-30FC563196E0\"></a></span>Structure Type\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C4B665B9-3717-44C9-9F37-C10B8A3F1EA8\"></a></span>Select one of the supported structure types from the drop-down list. These values\n\
                  correspond to the <a href=\"#!/url=./si_om/siICENodeStructureType.html\">siICENodeStructureType</a> enum.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0045\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9AC38A14-788F-4BB5-9D9A-4497505B31D7\"></a></span>Context Type\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F12DF18A-B0C0-479C-95FE-4C314961839B\"></a></span>Select one of the supported context types from the drop-down list. These values correspond\n\
                  to the <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextType</a> enum.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0046\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EDE7A9D3-6E4E-4CAC-842E-72034EA89E30\"></a></span>Constraint Port Type\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-46D05FDA-5382-4791-A70D-80FC7053FB15\"></a></span>Check this option to constrain the new port with other ports in your ICENode. For\n\
                  more information on using <span class=\"char_link\"><a href=\"#!/url=./files/dev_icenodes_PortPolymorphismAndDataIntegrity.htm\">constraint maps</a></span> in your plug-in, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes-1.htm\">Handling Port Polymorphism</a></span>.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0047\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8753303A-AD5D-4AC6-B8CF-878F0A9BA47F\"></a></span>Default Value (Input Ports tab only)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3AD76BE1-1810-46B0-A210-81097678CB77\"></a></span>For the <a href=\"#!/url=./files/Float.htm\">Float</a> and <a href=\"#!/url=./files/Float.htm\">Float</a> data types, you can use this numeric slider to specify a default value. For all other\n\
                  data types, this slider is not visible.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0048\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5820D423-91D8-4C15-952C-BD10C661D4DA\"></a></span>UI Range (Input Ports tab only)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-90169A1D-07C1-45BA-83C4-C324F6C81D6F\"></a></span>For the <a href=\"#!/url=./files/Float.htm\">Float</a> and <a href=\"#!/url=./files/Float.htm\">Float</a> data types, you can check this option to enable the <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetSuggestedMax\">UI Max</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetSuggestedMin\">UI Min</a> sliders which allow you to set a specific UI Range for this parameter. For all other\n\
                  data types, this checkbox is not visible.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0049\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E87C9707-726B-4D8D-AEF2-BD849EE10E06\"></a></span>UI Min (Input Ports tab only)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6CD07BD4-42C5-4CAC-B40A-F6E2289CD723\"></a></span>For the <a href=\"#!/url=./files/Float.htm\">Float</a> and <a href=\"#!/url=./files/Float.htm\">Float</a> data types, you can use this numeric slider to specify a <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetSuggestedMin\">minimum value</a>. For all other data types, this slider is not visible.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-0BE19605-5E96-4C4F-9FD7-D6681377530B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-70991ADB-2E9B-4B23-AEAF-9C6564B77BC9\"></a></span>You can still set the minimum value directly in the code provided that the data type\n\
                        is based on the <a href=\"#!/url=./files/Float.htm\">Float</a> type (for example, <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataMatrix33</a>).\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-004A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9566649E-36CD-4BB9-B8A2-82588F71998A\"></a></span>UI Max (Input Ports tab only)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E287A802-3D24-4A1C-8988-348AAAE7D741\"></a></span>For the <a href=\"#!/url=./files/Float.htm\">Float</a> and <a href=\"#!/url=./files/Float.htm\">Float</a> data types, you can use this numeric slider to specify a <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetSuggestedMax\">maximum value</a>. For all other data types, this slider is not visible.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E09E6DEA-5ED6-4733-917B-A521706CB918\"></a></span>You can still set the minimum value directly in the code provided that the data type\n\
                  is based on the <a href=\"#!/url=./files/Float.htm\">Float</a> type (for example, <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataMatrix33</a>).\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-004B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E93B24D0-F217-4C60-AA9E-98C5657955FB\"></a></span>Custom Type\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBE30A9B-FBFC-46F6-8AAB-EF36C3F9C656\"></a></span>You can use a custom data type that you defined on the <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_CustomTypes_tab.htm\">\n\
                        Custom Types\n\
                        </a></span> tab as the data type for a port connection:\n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5FB055D2-096C-416A-AC59-6857A5117991\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF8D6501-6819-404C-A454-42029C4D94F2\"></a></span>Make sure you have defined the custom type you want to use on the <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_CustomTypes_tab.htm\">\n\
                              Custom Types\n\
                              </a></span> tab.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-585943C0-DF1D-4D38-9405-B7F9855B5BB7\"></a></span>Select <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeCustomDataType</a> from the <span class=\"MenuCascade\" id=\"GUID-86F4F06C-143D-42F5-9DE6-E5F734BA0BE0\">Data Type</span> drop-down list. The <span class=\"MenuCascade\" id=\"GUID-B01D7888-3959-42B3-B1B8-D94E3FEB33C2\">Custom Type</span> drop-down list is now enabled.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-24B5CC15-B633-4D16-944F-21F423CC2A5F\"></a></span>Select the type you want from the <span class=\"MenuCascade\" id=\"GUID-5F5A5CEF-9122-45DF-9365-AD5486F6912D\">Custom Type</span> drop-down list.\n\
                     </p> <img src=\"../images/GUID-117EE92B-6653-4BDD-86E9-224F158DF885-low.png\" /> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-004D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E144DBA2-B7D7-4482-9A51-8AE96A30A816\"></a></span>Group ID (Input Ports tab only)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-080BE335-7294-485D-9E7C-928FFB4B66C8\"></a></span>Input ports IDs are generated by the wizard and added to the input port group specified\n\
                  by the <span class=\"MenuCascade\" id=\"GUID-72C0C515-4074-4B17-9A60-4CF9D2FF852E\">Group ID</span> slider. For more information on using port instances in your plug-in, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_MultiplePortConnections.htm\">Multiple Port Connections</a></span>.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-5C7D65D7-7EA0-4C79-A57C-9A2C3AB42F4F\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A9A62FB-A6E1-44ED-8A38-49306990E55C\"></a></span>You can assign input ports to different groups or bundle more than one in the same\n\
                        group. You control this by either editing the <span class=\"MenuCascade\" id=\"GUID-CAF8A957-B99B-41FA-B161-3C466522D549\">Group</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-FEDD7372-34DD-496A-83F4-A55DE74857CF\">Group ID</span> field before adding the input port definition to the grid or you can also edit the\n\
                        <span class=\"MenuCascade\" id=\"GUID-72B21980-5EE6-47AD-BE4C-6FF52DE69F5A\">Group ID</span> field directly in the grid table.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-004E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-61BC9013-B396-4DA2-9FBB-B5E9810F5553\"></a></span>Add button\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-57A8DC6F-6482-46D0-9130-D66845470776\"></a></span>Once you are done filling the fields, click <span class=\"MenuCascade\" id=\"GUID-36CEF1C9-FE32-4E21-8C44-4EF283703C76\">Add</span> to save the port definition in the Port grid located in the bottom section of the\n\
                  tab. All values are editable, so you can change any of them if you\'re not satisfied\n\
                  with your initial choices.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-004F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EE0205B6-5593-441A-B63E-56462816B72C\"></a></span>Remove Selected button\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6936F1A2-B05D-4884-978F-9496C32DEE4C\"></a></span>Select a port from the grid to and click <span class=\"MenuCascade\" id=\"GUID-6BF9D8BD-38DA-4FCA-9414-A6276B348051\">Remove Selected</span> to remove it.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";