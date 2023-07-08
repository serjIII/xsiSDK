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
      <meta name=\"topicid\" content=\"GUID-A4A00357-6B9A-47C8-A36C-DB8768A7C6DE\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Custom Primitive Wizard</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A4A00357-6B9A-47C8-A36C-DB8768A7C6DE\"></a></span><div class=\"head\">\n\
            <h1>Custom Primitive Wizard</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-491EEC03-8D8B-47F9-8E33-A7C2566A3D59\"></a></span>You can use the Custom Primitive Wizard to generate the basic code for a self-installing\n\
            plug-in that contains a custom primitive object. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-76E2759C-5DB2-4F73-93E9-B0DF9AA7DC0C\"></a></span>To generate the code for the plug-in using the Custom Primitive Wizard: \n\
         </p><span class=\"anchor_wrapper\"><a name=\"OL_307F06D61EB8406BB10FCF3BB0F34297\"></a></span><ol type=\"1\" start=\"1\">\n\
            <li>Click <span class=\"MenuCascade\" id=\"GUID-4239C3A6-499C-48D6-967C-354ECB3A8F7C\">File <img src=\"../images/ac.menuaro.gif\" /> Plug-in Manager</span>. \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-36E24B88-B25F-459C-8EF3-86ECFD1F9DCA\"></a></span>The Plug-in Manager appears. <span class=\"anchor_wrapper\"><a name=\"FIG_B06BCCA306124D27A7AF18ED924885C9\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-759DC2DF-7292-46FD-A684-4EDD355EEFE3-low.png\" /></div> \n\
               </p> \n\
            </li>\n\
            <li>Perform one of the following: <span class=\"anchor_wrapper\"><a name=\"UL_177B74A925FE4C33BD3135CB00DE89C6\"></a></span><ul>\n\
                  <li>To create the plug-in in the User location – Select <span class=\"MenuCascade\" id=\"GUID-4F7A03B5-E4AA-4BB4-BFE6-4E9E5EBD407A\">File <img src=\"../images/ac.menuaro.gif\" /> New <img src=\"../images/ac.menuaro.gif\" /> Primitive</span>. \n\
                  </li>\n\
                  <li>To create the plug-in in a different location (such as a workgroup or an Add-on directory)\n\
                     – Expand the location in the Plug-in Tree, right-click the <span class=\"MenuCascade\" id=\"GUID-35A9A964-EB1C-4B6C-9DAC-9F516F8577D6\">Plugins</span> folder and select <span class=\"MenuCascade\" id=\"GUID-FDE4057F-3B5B-4C7D-A374-371A06316E1B\">New <img src=\"../images/ac.menuaro.gif\" /> Primitive</span>. \n\
                  </li>\n\
               </ul>\n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-26AFAE1D-CFC4-42A4-B7CF-DFFD2D179A3B\"></a></span>The Custom Primitive Wizard appears. \n\
               </p> \n\
            </li>\n\
            <li>Select the <span class=\"MenuCascade\" id=\"GUID-2565873F-3EB8-46F5-B20A-C7C6A0BBFB3D\">Plugin-Info</span> tab, and type a <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">name</a></span> for the custom primitive object in the <span class=\"MenuCascade\" id=\"GUID-6CF0EF2D-D5D6-4A7E-A09F-6098812907E6\">Primitive Name</span> text box. \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D123CD4-B8E3-4428-9F86-86EEE1283AA3\"></a></span>The first character in the name must be a letter. Subsequent characters can be letters,\n\
                  numbers, or underscore (_). The wizard automatically replaces spaces in a name with\n\
                  underscores. \n\
               </p> \n\
            </li>\n\
            <li>Type the name of the plug-in author, for example, your name or the organization name\n\
               in the <span class=\"MenuCascade\" id=\"GUID-EAEBA7C5-8089-488E-9061-78BAD34F26F9\">Author</span> text box. \n\
            </li>\n\
            <li>Select the correct version of the compiler in the <span class=\"MenuCascade\" id=\"GUID-AC16F293-5D41-43A8-BA7F-C73AB669104F\">C++ Compiler Version</span> list box. In the <span class=\"MenuCascade\" id=\"GUID-449E3D5E-44C8-4C1D-9FAB-35BB44A6C1DC\">Coding Language</span> list box, C++ is selected as the coding language. \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-4BD72F12-5ED3-4DD5-AF7E-1B3F33D66CC7\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>Only C++ is currently supported as the coding language for the custom primitive object.\n\
                     \n\
                  </div>\n\
               </div> \n\
            </li>\n\
            <li>Make sure that the location of the generated files as shown in the <span class=\"MenuCascade\" id=\"GUID-7871F04D-1A86-4408-9A13-B111B081BEB6\">Output Directory</span> box is correct. \n\
            </li>\n\
            <li>Select the <span class=\"MenuCascade\" id=\"GUID-877CF667-8B19-4DA0-8010-D277B01C4A0B\">Add Parameter</span> tab to add parameters or buttons to the property page for the custom primitive object.\n\
               You can define each parameter using the options in the <span class=\"MenuCascade\" id=\"GUID-0B039A65-6626-4C3B-9C19-BCE13A200FF2\">Define Item</span> group, and click <span class=\"MenuCascade\" id=\"GUID-48F4AEFB-BC28-46A2-8CEF-9363D3EE154F\">Add Item</span> to add the parameter to the property page. See the <span class=\"char_link\"><a href=\"#!/url=./files/GUID-A4A00357-6B9A-47C8-A36C-DB8768A7C6DE.htm#SECTION_49C29070B5DE459AA90998D6C9ABD3E2\">Adding Parameters</a></span> section for more information about the <span class=\"MenuCascade\" id=\"GUID-CEF2988F-C59C-4DB3-A50B-D72D75D72CA1\">Add Parameter</span> tab. \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E7427AF8-CF75-4C82-BBEB-290673E57775\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span>To remove a parameter, click on the corresponding row handle (the first dark column\n\
                     in the <span class=\"MenuCascade\" id=\"GUID-D3093D73-A5AC-4BFD-8083-DD6CD6EA0F56\">Parameters</span> group), and then click <span class=\"MenuCascade\" id=\"GUID-BF8DC02A-A095-46AF-B8DE-4AF9CEA248C9\">Delete Selected</span>. \n\
                  </div>\n\
               </div> \n\
            </li>\n\
            <li>Select the <span class=\"MenuCascade\" id=\"GUID-B73923C7-7BEF-4757-B89C-15C3FA0E7669\">Callbacks</span> tab to specify which callbacks must be generated for the plug-in. To select a callback,\n\
               select the corresponding checkbox. \n\
            </li>\n\
            <li>Select the <span class=\"MenuCascade\" id=\"GUID-2AD02FB5-F9FD-4B8D-994D-B8120A91C52E\">Layout (Optional)</span> tab to define the layout of the property page. You can do the following: <span class=\"anchor_wrapper\"><a name=\"UL_F36AF08C573B4358A54F40A7416FBA57\"></a></span><ul>\n\
                  <li>Prevent parameters from appearing on the property page. </li>\n\
                  <li>Assign a parameter to a tab on a property page. </li>\n\
                  <li>Assign a parameter to a group on a property page. </li>\n\
                  <li>Assign a parameter to a row on a property page. </li>\n\
                  <li>Change the parameters\'s order of appearance in the property page. </li>\n\
               </ul>\n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B90AC0F7-43F9-44F2-95CA-F213ABC9C9CB\"></a></span>See the <span class=\"char_link\"><a href=\"#!/url=./files/GUID-A4A00357-6B9A-47C8-A36C-DB8768A7C6DE.htm#SECTION_2C14D6B78D704C3ABFDEACB75FB6E2AD\">Property Page Layout</a></span> section for more information about the <span class=\"MenuCascade\" id=\"GUID-18834311-CF51-4809-992C-72356270DCD3\">Layout (Optional)</span> tab. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-19A4611D-8E25-43ED-82C4-0AFED674E981\"></a></span>The wizard creates the basic layout, but you can tweak the property page further using\n\
                  the <span class=\"code\" translate=\"no\">DefineLayout</span> callback. For more information on the kinds of controls you can add and customize,\n\
                  see <a href=\"#!/url=./files/cus_ppg_WhatareMyOptions.htm\">Interacting with the User</a>. \n\
               </p> \n\
            </li>\n\
            <li>Click <span class=\"MenuCascade\" id=\"GUID-8E8A07C7-EF7E-49D7-BD2D-6DA910F16669\">Generate Code </span> to generate the code for the custom primitive plug-in. \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5F31BCB-F7BF-4BC2-A6BF-BD39F89ECCF0\"></a></span>The generated plug-in is automatically loaded and executed, and the code is loaded\n\
                  into the script editor. \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-2DB6692B-C65A-4DAC-9110-05DA119EB9BB\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>Any change that you make manually to the code is overwritten if you regenerate the\n\
                        code using the wizard. It is a good practice to make sure that you are ready to begin\n\
                        coding before you click <span class=\"MenuCascade\" id=\"GUID-14A94FC0-9D4D-4956-B85A-87F2412F884C\">Generate Code</span>. \n\
                     </div>\n\
                  </div> \n\
               </p> \n\
            </li>\n\
         </ol>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_49C29070B5DE459AA90998D6C9ABD3E2\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A9663F0E-7FC5-4685-BE9D-AF5409E2F9E8\"></a></span>Adding Parameters\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F5751F02-2A46-4597-8E80-792B5CAB25B6\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-C87693C0-CCDA-42DC-930E-C5EA07C8008B\">Add Parameter</span> tab enables you to define the parameters for the Custom Primitive. The wizard uses\n\
               these settings to determine what code to generate. You can customize the code further\n\
               and add extra functionality as desired. The following table defines the settings in\n\
               the <span class=\"MenuCascade\" id=\"GUID-8CF99FBF-21A2-4AA0-ACA4-E7F0D842DE61\">Add Parameter</span> tab. \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_3E612B8A8A3C422680D2A37396FF3AA8\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" />\n\
                     <col width=\"66.66666666666666%\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\">Control </th>\n\
                     <th class=\"table-heading\">Description </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-20890937-1CD5-4818-A45B-5539F4D6EA1F\">ParamType</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-06A0848D-401A-4787-931D-A7B1677C0008\"></a></span><p class=\"table-body\">Specifies the data type for the parameter. Most of these types correspond to actual\n\
                           data types (integer, string, boolean, and others). However, the <span class=\"MenuCascade\" id=\"GUID-000DE73A-EC17-4218-A6CC-72BB05A667F6\">Button</span> option just adds a button and is not a parameter type. \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-4CBCCE40-78AE-4C6D-8CA8-E8D7D9B8C16E\"></a></span><p class=\"table-body\">Depending on the value you choose in this control, some of the other settings in the\n\
                           <span class=\"MenuCascade\" id=\"GUID-5E272B5B-B30D-4794-AD6E-526877705E0B\">Add Parameter</span> tab might not be available. For example, value range settings such as <span class=\"MenuCascade\" id=\"GUID-3704E8A3-B2E6-4D08-A16C-62E83598A262\">Min</span> and <span class=\"MenuCascade\" id=\"GUID-B00A3F6C-F6F7-4AD9-95BF-686C74435444\">Max</span> appear only for parameters with a numerical data type. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-58AF86E9-DA3C-4E1E-8EBC-CD7AD4F89FC3\">Name/Label</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1CCC0805-C29B-4E94-8FB1-62FF57245EBC\"></a></span><p class=\"table-body\">Specifies the name for the parameter. </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-E6FFC523-68C6-42B1-8827-F20567D3C6EC\">ReadOnly</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D334B6B5-A4AA-4EBA-B75C-428D3F297F3F\"></a></span><p class=\"table-body\">Specifies whether you can write to the parameter. </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-4A5FC111-573D-4D57-AA2E-937CAEA3C2F8\">Animatable</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1EF9F048-DE21-495C-8A94-882BF50B590C\"></a></span><p class=\"table-body\">Specifies whether the parameter can be animated. </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-6B574039-8F6A-4CBB-8047-C8C5EE0E60FB\">Keyable</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CD684D98-62E3-42FE-99BA-E27B2F92FA53\"></a></span><p class=\"table-body\">Specifies whether the parameter is keyable or not. </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-0EC6A483-363E-4197-BB68-CA80E768047B\">Default</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E22478F2-5F70-4A19-8FB5-BF13F14BC4CF\"></a></span><p class=\"table-body\">Specifies the default value to use for the parameter. This setting appears as a text\n\
                           box for the text (string) type, a checkbox for the boolean type, a slider for numeric\n\
                           types, and a color box for the color type. It is not available for FCurves, grid controls,\n\
                           and buttons. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-349638CE-99E1-4756-8219-C482E0F9C59D\">Min</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B90E5184-E875-449B-9514-94D020A0D746\"></a></span><p class=\"table-body\">Specifies the lower limit of the parameter. This setting is only available for parameters\n\
                           of numeric type. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-5A714FDD-1D2F-4281-B642-B524586F1521\">Max</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9282D789-5BA2-4F3F-ADA5-5E610780905C\"></a></span><p class=\"table-body\">Specifies the upper limit of the parameter. This setting is only available for parameters\n\
                           of numeric type. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"MenuCascade\" id=\"GUID-3247CD34-4D5B-4C55-AD87-A2B992830159\">UIRange</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8860ACA6-E4AC-47B5-B5C3-EAD5202A0E3E\"></a></span><p class=\"table-body\">Toggles the availability of the <span class=\"MenuCascade\" id=\"GUID-9A549BE0-A40F-4695-94F4-B4F181538323\">UIMin</span> and <span class=\"MenuCascade\" id=\"GUID-73DE6343-A25D-4F78-8D62-B28BA0A4BEAB\">UIMax</span> settings that allow you to define the range of values on the parameter\'s slider bar\n\
                           when the property page is displayed. This option is only available for parameters\n\
                           of numeric type. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_2C14D6B78D704C3ABFDEACB75FB6E2AD\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EFC7B955-9EB3-44FE-B41B-6D20613EDDFE\"></a></span>Property Page Layout\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C4DCA0C-6044-4162-A2BF-D1ED5563A71F\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-BE33A056-B470-48DD-B172-9123EE4E9085\">Layout (Optional)</span> tab defines the layout of the property page. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-03E90DAD-7359-4E6C-8EDE-3EE8A83BF505\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-7CB73D7E-9DA1-4419-904C-68EF4BA5BA2D\">Layout</span> list in the <span class=\"MenuCascade\" id=\"GUID-14ECBB9B-7FB2-47F7-8288-830E230129A4\">Layout (Optional)</span> tab represents the set of parameters that appear in the property page. You can click\n\
               <span class=\"MenuCascade\" id=\"GUID-CC0BD290-0E43-41A1-B48A-3C1E03499EF8\">Up</span> and <span class=\"MenuCascade\" id=\"GUID-538CD188-1932-4CBC-9B05-27EB76793063\">Down</span> to change the order in which parameters are arranged in the <span class=\"MenuCascade\" id=\"GUID-60D56D4B-747E-4A95-AC09-9E42A98D408F\">Layout</span> list (and eventually in the property page). The <span class=\"MenuCascade\" id=\"GUID-0980CE70-24AF-4DF4-ACB8-6E94AC96F831\">Layout</span> list represents the groupings as blocks delimited by labeled brackets inside which\n\
               the parameters can appear as shown in the following figure. \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"FIG_5B2F6349F79545AF80725A67F9FF9DC3\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-19D5C1F8-F4DA-4311-8983-15A248991EEC-low.png\" /></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF18323A-102D-4BFF-B4FB-D26C32632C18\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-C372F3EB-5EDF-4046-AA38-B869B65F4B1B\">Parameters</span> list displays all parameters defined for the custom primitive object. By default,\n\
               all parameters appear in the property page. However, if you add some parameters to\n\
               the <span class=\"MenuCascade\" id=\"GUID-63ED408A-8379-45FC-803D-0D01EB7D65B9\">Layout</span> list, then only these parameters are visible in the property page. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D36E303-1ACA-4AD8-9C76-8F5D9C40459C\"></a></span>To add a parameter to the <span class=\"MenuCascade\" id=\"GUID-B96A2C25-4200-4695-AB8F-894F5A850830\">Layout</span> list: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2A064230-9976-4A5D-9B8C-320D7DDE7605\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2CFCC409-98FC-4637-979B-E72740A4C48A\"></a></span>Click the parameter in the <span class=\"MenuCascade\" id=\"GUID-294D0A88-E66A-4D24-A1F8-505E7CCABDB3\">Parameters</span> list \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-72199EF5-C9FB-444F-BAFA-C930DFF2FCF7\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-9D02742F-321E-4C36-B0EB-77299E43E936\">Add</span> under the <span class=\"MenuCascade\" id=\"GUID-21C02B43-E67E-4567-9B36-FA136340A73F\">Parameters</span> list. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A167A92-5D69-4D8E-9E32-660E54B73DEA\"></a></span>Notice that adding parameters to the Layout list does not remove them from the Parameters\n\
                     list. \n\
                  </p> \n\
               </li>\n\
            </ol> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAC48141-F110-41A6-8C2A-8EDA253A17F6\"></a></span>You can click <span class=\"MenuCascade\" id=\"GUID-8AB03D4C-E6AC-41E8-99A1-46AA754381CF\">Remove</span> to remove either groupings or parameters from the <span class=\"MenuCascade\" id=\"GUID-CFF0AB9F-F4C2-485B-9DE3-9C14CD61C46C\">Layout</span> group. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DBE54CC-616C-4B3D-8FEB-0C552D868105\"></a></span>To remove a parameter from the <span class=\"MenuCascade\" id=\"GUID-88CE6B8A-6895-4F06-BBFA-96CF44827480\">Layout</span> list: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"GUID-85CF32D0-37BA-44D4-8740-1D45AEB56C47\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C700BC02-EE9E-455B-A8AF-B1C4A4356054\"></a></span>Click the parameter in the <span class=\"MenuCascade\" id=\"GUID-AC88E706-90AC-44F2-8A83-FE99543CCE05\">Layout</span> list. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3EE768C4-FB8A-4B32-8216-E4F40C28C667\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-C1B2C22C-23D7-43C3-A6A7-3201B9180FD4\">Remove</span>. The parameter disappears from the <span class=\"MenuCascade\" id=\"GUID-8F270D1E-56C3-4F9A-856C-85735FD95E6A\">Layout</span> list (but remains in the <span class=\"MenuCascade\" id=\"GUID-6B0908EF-D835-4EBC-8DD4-82A04AFB000B\">Parameters</span> list). \n\
                  </p> \n\
               </li>\n\
            </ol> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3CB0E84-91C8-4EDB-B6B2-9210395F5BB1\"></a></span>To remove a grouping from the <span class=\"MenuCascade\" id=\"GUID-FAA3FAE3-53D0-4AA4-8DC9-C75341E49397\">Layout</span> list: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A3E622BC-D941-4B00-872F-9E90246EB9DD\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0ED09DFC-E92C-49B2-8106-68E161AA65D4\"></a></span>Click either bracket of the group that you want to remove. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B3D6DFB5-CDAB-4355-A654-3500091CB143\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-6CF51CCF-8AB0-434F-84FF-F11995799A4E\">Remove</span>. The grouping is removed from the <span class=\"MenuCascade\" id=\"GUID-35251D78-73E4-4CC6-83BA-48B41AFFFCE0\">Layout</span> list leaving the parameters. The parameters are now nested under the next highest\n\
                     control. For example, if the parameters are nested inside a Row on a Tab and you remove\n\
                     the row, the parameters now appear inside the Tab. \n\
                  </p> \n\
               </li>\n\
            </ol> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-26BBEF91-E0CF-4C09-B524-4D1C8BC5AE13\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-8241B169-C935-4BD0-A570-56E531150928\">Groupings</span> area enables you to add tabs, groups and rows to the property page. Each tab or group\n\
               must be identified by a label which you can specify in the <span class=\"MenuCascade\" id=\"GUID-40AA2362-79F9-48B9-87B3-4E2ABAF40D44\">Name</span> text box. You can click the button corresponding to the type of control such as <span class=\"MenuCascade\" id=\"GUID-FDA3A95B-C9FC-4440-9A33-7C9D3B8B695C\">AddTab</span>, <span class=\"MenuCascade\" id=\"GUID-3464A2FE-348B-468C-B0CC-D6CF08B342DC\"> AddGroup</span>, or <span class=\"MenuCascade\" id=\"GUID-0C86997D-862D-45B1-84D2-076D0F156628\">AddRow</span>, and the control brackets appear in the <span class=\"MenuCascade\" id=\"GUID-273DD902-B6FC-4B3A-A683-ABBBBE15BE23\">Layout</span> list. \n\
            </p> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";