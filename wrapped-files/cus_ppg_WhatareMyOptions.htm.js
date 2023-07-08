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
      <meta name=\"topicid\" content=\"GUID-7F1010F5-FF5C-4CD2-86E8-070A367B3AFB\" />\n\
      <meta name=\"indexterm\" content=\"PPG. custom properties\" />\n\
      <meta name=\"indexterm\" content=\"Property pages. custom properties\" />\n\
      <meta name=\"indexterm\" content=\"Custom Dialog Tools\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Interacting with the User</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"ProgressBar\", \"si_cpp/classXSI_1_1ProgressBar.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CustomProperty\", \"si_cpp/classXSI_1_1CustomProperty.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"GridData\", \"si_cpp/classXSI_1_1GridData.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7F1010F5-FF5C-4CD2-86E8-070A367B3AFB\"></a></span><div class=\"head\">\n\
            <h1>Interacting with the User</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3B52C98-0F9C-4B17-9801-E3D50206B18F\"></a></span>There are many types of interaction that you may need to implement in your tool or\n\
               customization. For example, you may want to simply give the user some information\n\
               about the status of the action (typically using a message box dialog or a progress\n\
               bar). Conversely, you may need the user to supply some information, such as the name\n\
               of a file to use as input or output (typically using a browser dialog).\n\
            </p><img src=\"../images/GUID-02DC46EE-209F-4D2A-9186-872A0EA4B2EF-low.png\" /><img src=\"../images/GUID-015964C1-2007-49A8-B867-CCDB93C55913-low.png\" /><img src=\"../images/GUID-FEF41F4E-3BED-4EB3-93BD-230D18745D1E-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-CFCF5DEF-527A-4188-922F-C01FEFEEAD88\"></a></span>These types of services can be handled either by tools provided by the implementation\n\
               language (for example, the <em class=\"strong\">MsgBox</em> function in VBScript) or by some of the UI toolkits Softimage provides (for example,\n\
               the <a href=\"#!/url=./si_om/XSIUIToolkit.MsgBox.html\">XSIUIToolkit.MsgBox</a> or UIToolkit::MsgBox and <a href=\"#!/url=./si_om/XSIUIToolkit.ProgressBar.html\">XSIUIToolkit.ProgressBar</a> or UIToolkit::GetProgressBar features). However, you may need a tool that\'s more\n\
               flexible and able to handle complex solutions.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-000B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2DA7999F-343E-487C-B06C-12F806D2FD2D\"></a></span> Custom Dialog Tools\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB5A5886-26E9-44E4-8C7E-4D21FCA50687\"></a></span>Often you need something more comprehensive; something highly malleable but quick\n\
                  and easy to use. For example, you may need to ask the user to set some parameters\n\
                  that have very different data types: integers, doubles, colors, strings, etc. Or you\n\
                  may want to trigger some fancy-schmancy action behind the scenes when the user clicks\n\
                  a button or indicates an option. These types of services are best handled by a custom\n\
                  dialog box called a <em class=\"mild\">property page</em> (or <em class=\"mild\">PPG</em>) which provides you with a large range of tools that are easy to configure and implement.\n\
               </p> <img src=\"../images/GUID-82B10B5D-116E-4D18-893D-8EE2205BED61-low.png\" /> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-23265F5A-74DE-42C5-A88B-CCF2B2431CE4\"></a></span>Here are the types of actions you can take using the Softimage UI-building tools:\n\
               </p> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-67E3F9CD-3798-4843-8775-C1FA572B1FDD\"></a></span><p class=\"table-heading\">Action</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5BB97BED-74D5-4E2D-B620-E719E1368325\"></a></span><p class=\"table-heading\">Tool Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3B1D9CE7-01B6-44A6-B0A5-225E51C43B21\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FA034701-8883-4040-9D3C-B6C137D88824\"></a></span><p class=\"table-heading\">For details, see...</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\" rowspan=\"2\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA159827-B36C-4437-86A6-967487EBC8AE\"></a></span><p class=\"table-body\">Ask users to provide the name and location of the file to save.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1FB78FD2-967E-4022-AF70-0AEB90766DC4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">PPG</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-77D16B4F-39F7-41AD-B94D-AFD36A2810F9\"></a></span> <em class=\"strong\">PPG</em> using a PPGLayout with the FileBrowser widget\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-019F1EA8-FD39-44D1-AAA9-4AEEDD0307F9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_ppg_FileBrowserWidget.htm\">File Browser Widget</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-86C3CCD9-3821-40E4-9A4C-72EFBAAF7665\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">FileBrowser</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-037EF275-3993-4D31-90E0-93982CCA03C4\"></a></span> <em class=\"strong\">XSIUIToolkit.FileBrowser</em> with the ShowSave method\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D7FE341F-0345-41C7-9729-6100D2DE7BA4\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_UsingtheXSIUserInterfaceToolkitXSIUIToolkit.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-000F\">FileBrowser</a></span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\" rowspan=\"2\"> <span class=\"anchor_wrapper\"><a name=\"GUID-157D451E-6D28-4B96-95B9-8CAB06EF1F1F\"></a></span><p class=\"table-body\">Ask users to provide the name and location of the file to open.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-63C2EB40-C60F-46F9-A0FB-B714BE16031D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">FileBrowser</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-3F93B015-A0FA-445B-B4AF-74EEB34E5F20\"></a></span> <em class=\"strong\">PPG</em> using a PPGLayout with the FileBrowser widget\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7D7F20EB-2021-4160-AC59-7BDB7571B127\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_ppg_FileBrowserWidget.htm\">File Browser Widget</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-69CE5633-5682-4F0F-947E-13C7E9494B74\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">FileBrowser</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E2DE34C-1905-49E7-8D04-BA339A5D49FC\"></a></span> <em class=\"strong\">XSIUIToolkit.FileBrowser</em> with the ShowOpen method\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F130508-05CB-44A8-86DB-8F6DA538ADD2\"></a></span><p class=\"table-body\">FileBrowser</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1A1696FD-8F8E-4AA1-B891-FB3DFB759BF9\"></a></span><p class=\"table-body\">Inform users how long to wait for the process to finish and how long they\'ve been\n\
                              waiting.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E438C060-91F0-4CF4-B164-2AC4D72AEF6A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"ProgressBar\" class=\"a_multireflink\">ProgressBar</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-24DAEEEC-8D04-48C3-9E20-994A2030D3E2\"></a></span> <em class=\"strong\">XSIUIToolkit.ProgressBar</em> \n\
                                 </p> \n\
                                 <div><span class=\"anchor_wrapper\"><a name=\"GUID-723DB2EA-BBAD-4EF9-B90E-90A9127F6419\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-D1EA9BB6-5A27-484E-A12A-D26DCA6FBB88\"></a></span>You could also use a <em class=\"strong\">PPG</em> to simulate this behavior, but why reinvent the wheel?\n\
                                       </p> \n\
                                    </div>\n\
                                 </div> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CA7C4CD5-C0DB-42B3-B263-12DCD7A950F8\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_UsingtheXSIUserInterfaceToolkitXSIUIToolkit.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0013\">ProgressBar</a></span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CC3C654E-7EA6-458A-9052-092379290773\"></a></span><p class=\"table-body\">Send information or messages to users without feedback.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-05BC2B08-0DD9-4E75-A788-143B8B158773\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">MsgBox</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A6B3720-9F14-4E17-B7AA-471E80B49DB2\"></a></span> <em class=\"strong\">XSIUIToolkit.MsgBox</em> \n\
                                 </p> \n\
                                 <div><span class=\"anchor_wrapper\"><a name=\"GUID-91D9B66E-E872-4279-8889-F1932E659F5A\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-D377C4EF-06F7-48EB-842F-9D57A894E5EE\"></a></span>You could also use a <em class=\"strong\">PPG</em>, but MsgBox is simpler to implement for single messages.\n\
                                       </p> \n\
                                    </div>\n\
                                 </div> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1229666D-BD7F-451F-9794-C5BAB28EAD69\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_UsingtheXSIUserInterfaceToolkitXSIUIToolkit.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0011\">MsgBox</a></span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-368D1542-6CE7-4AD6-B62B-59A94B500716\"></a></span><p class=\"table-body\">Ask users to click OK, No, Cancel, Abort, Retry or Ignore in response to a question\n\
                              or statement.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0B92C7E7-40F0-49C2-8B7E-96700BC15363\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">MsgBox</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-7C24EE54-3DF0-413A-81BD-50C93A9265EF\"></a></span> <em class=\"strong\">XSIUIToolkit.MsgBox</em> \n\
                                 </p> \n\
                                 <div><span class=\"anchor_wrapper\"><a name=\"GUID-4A41E0F8-17FA-42E4-A5D8-57A7C22B4DC3\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                       <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7CB77BE-16C2-4634-AEFE-8AB7D4D333EA\"></a></span>You could also use a <em class=\"strong\">PPG</em>, but MsgBox is simpler to implement for single messages.\n\
                                       </p> \n\
                                    </div>\n\
                                 </div> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-52D79D5D-35EE-46F3-9092-CEC626B54028\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_UsingtheXSIUserInterfaceToolkitXSIUIToolkit.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0011\">MsgBox</a></span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2165159-4EFE-4C40-AD3C-756C90BC4303\"></a></span><p class=\"table-body\">Ask users to set data on parameters, select an item from a drop-down or list box or\n\
                              choose one option from a set.\n\
                           </p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-93B777B9-C347-479E-95A4-7A08953735B0\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-100ED48B-07B8-4999-B5BD-F57CA78B8EC9\"></a></span>A rich toolset is available in Softimage to easily specify very complex or specific\n\
                                    types of controls, such as an FCurve, a Color Selector, a Folder Picker, etc.\n\
                                 </p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9ACEF98A-E506-48C1-9A8A-E5526039A57F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">PPG/<a href=\"javascript:void(0)\" data=\"CustomProperty\" class=\"a_multireflink\">CustomProperty</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-1DFB9DF6-9AA4-40D4-B214-F4F7C46F2782\"></a></span>Parameter data can be saved in a <em class=\"strong\">CustomProperty</em> (parameter set) object. It can then be persisted in the scene even after the dialog\n\
                                    box is no longer visible.\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B0C91CC-9B11-4A05-ACFC-D18DBE4413B2\"></a></span>The <em class=\"strong\">PPG</em> provides the mechanism for viewing the CustomProperty data, as well as providing\n\
                                    extra functionality, such as command buttons, file- and folder-pickers, etc.\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-7DFAA95F-2D61-4047-BED2-B067EFC9FF32\"></a></span>You set up the format and layout of the PPG using the PPGLayout object.\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-32012321-64AC-4E66-8E9C-37A6C674EA43\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_ppg_Creating_Dialogs.htm\">Building Dialogs</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A9E63EB4-CB47-4032-B366-ECAB47CC3B74\"></a></span><p class=\"table-body\">Allow users to perform one or more actions in relation to the data displayed by clicking\n\
                              a button.\n\
                           </p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-2626DCD2-49D3-464A-BAE7-F45C9E14E873\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA4DC4B4-9D06-45DF-96FA-E929F75A1AA9\"></a></span>If you are providing only command buttons (without data) on your property page, you\n\
                                    may want to consider simply creating a custom toolbar to host your command buttons\n\
                                    instead. For more information, see CreateToolbar.\n\
                                 </p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-85925CAA-CB15-4493-BE57-0633DBFBDFB2\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">PPG</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-ECCD387C-D726-4F07-9ABA-F6C448D908CE\"></a></span> <em class=\"strong\">PPG</em> using a PPGLayout with the CommandButton type of control (<a href=\"#!/url=./si_om/siPPGControlType.html\">siControlButton</a>).\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-795F2BE6-AF7F-4A35-B06B-B921C3E8DD41\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_ppg_CommandButton.htm\">Command Button</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AC823A5F-A0A0-41BD-BAF0-760F537F4CA5\"></a></span><p class=\"table-body\">Display a complex set of data, such as a 2-dimensional array.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-553568D1-6BE4-4826-A3EC-EE8F37942862\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">PPG/<a href=\"javascript:void(0)\" data=\"GridData\" class=\"a_multireflink\">GridData</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2CA012EF-4F9C-4458-8FDB-D5A8B4B7632B\"></a></span> <em class=\"strong\">GridData</em> can hold 2-dimensional sets of data, which provides an excellent workaround to the\n\
                                    problem of how to work with 2-dimensional arrays in JScript.\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FC5C639-EDE0-4B33-8D51-707010922246\"></a></span> <em class=\"strong\">PPG</em> using a PPGLayout with the GridData type of control (<a href=\"#!/url=./si_om/siPPGControlType.html\">siControlGrid</a>).\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-41FB93B7-09F4-4090-BB1C-D52A9EC26D50\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_ppg_GridDataWidget.htm\">GridData Widget</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-56C5A5F0-AD15-4ADD-A756-B5F7F23E453F\"></a></span><p class=\"table-body\">Use a multi-page layout with tab control to display extensive data.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-98CCFCE3-62C5-44CF-850D-DFBA1C53644C\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">PPG</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2111394C-EB0C-403C-9201-F420144FE2B0\"></a></span> <em class=\"strong\">PPG</em> using a PPGLayout with the pages delimited using the <a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">PPGLayout.AddTab</a> or PPGLayout::AddTab method.\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-598DD455-5383-4122-B403-48878FCB154E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_ppg_UsingMultiplePagesTabs.htm\">Using Multiple Pages (Tabs)</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-50F1869D-5D2C-485C-874A-258A40EFD619\"></a></span><p class=\"table-body\">Display your company\'s logo on your custom dialog box.</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-41378035-C22A-4471-8AFA-8B216059B56F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">PPG</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E58233E-FFD9-4B75-9498-599F0201949D\"></a></span> <em class=\"strong\">PPG</em> using a PPGLayout with the Bitmap type of control (<a href=\"#!/url=./si_om/siPPGControlType.html\">siControlBitmap</a>).\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0546290A-FEB5-496A-BBA2-5F1CF68A4765\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_ppg_BitmapWidget.htm\">Bitmap Widget</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4FCFD675-1CE1-4A9B-867C-81849B40EF71\"></a></span><p class=\"table-body\">Set up a Scintilla-based text editor to utilize C++ style formatting, auto-complete,\n\
                              folding, etc. inside Softimage\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E6E2B925-BB4F-49A4-B590-97417B2B58A9\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">PPG</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-12DCC7FA-CF01-4299-BB66-E54EFE886429\"></a></span> <em class=\"strong\">PPG</em> using a PPGLayout with the Text Edirot Widget type of control (<a href=\"#!/url=./si_om/siPPGControlType.html\">siControlTextEditor</a>).\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8D1D9090-2C53-47CE-BDBC-9766B5DAE6C0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/cus_ppg_TextEditorWidget.htm\">Text Editor Widget</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-FF1F5DA5-3E98-4301-9D0A-C892A1E5C24D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C3745800-9AEA-4CDB-BA9D-A610DF2BB6A7\"></a></span>Only tools available in Softimage are presented in this chapter; for standard tools\n\
                        deployed by your specific implementation language, see your language supplier\'s documentation.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";