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
      <meta name=\"topicid\" content=\"GUID-9C0B9098-CCFC-40DD-B492-0062B9FF35DD\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Property Page Controls</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9C0B9098-CCFC-40DD-B492-0062B9FF35DD\"></a></span><div class=\"head\">\n\
            <h1>Property Page Controls</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-28DC5051-4005-424D-A083-783AA7D56846\"></a></span>Most controls are typically inherently tied to the data type of the associated parameter.\n\
               For example, a check box is the default control for a boolean parameter and a numeric\n\
               control (normally with both an edit control and a slider) is the default control for\n\
               any numeric parameter.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-49EBD87C-ACDD-4504-BD8C-1AF0A257A759\"></a></span>There are also alternate controls, like the icon list control, which functions like\n\
               a radio control but displays a bitmap icon instead of the radio button. Another example\n\
               is the list box and combo (drop-down) box controls which both offer a set of choices\n\
               to the user but one (list box) is more suited to short lists than the other (combo\n\
               box).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F02E5BBB-7665-4A6F-9141-887EA7D7486F\"></a></span>The command button control is not directly associated with a parameter. In this case,\n\
               a function in the underlying logic is executed when the user clicks the button. This\n\
               function may perform tasks using the parameter data from the associated property set.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7BF5483-AD96-4B3D-967F-4997FD5EAC35\"></a></span>The various controls available on the <a href=\"#!/url=./si_om/PPGLayout.html\">Property Page Layout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">Property Page Layout</a> are summarized in the following table. The <em class=\"strong\">Name</em> column contains links to more specific information about the control, including which\n\
               attributes it supports:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B5251B0D-6397-4C0E-9B40-2571200B74CA\"></a></span><p class=\"table-heading\">Name</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A7D5EAF0-F23B-46C2-A646-9985D746FEC1\"></a></span><p class=\"table-heading\">Category</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E6AB3EA1-6284-4796-ADA4-60AA1E2396B5\"></a></span><p class=\"table-heading\">Data Type</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-216395B1-ACF9-4152-81E7-71CB194D334D\"></a></span><p class=\"table-heading\">Default</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1DD8B006-A526-4017-B969-A95100A3F7F8\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-604E1169-0994-4247-A394-B1998B000BF9\"></a></span><p class=\"table-heading\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a> value\n\
                        </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4A0F5BCE-6541-4753-9ACC-A38CF819AC5B\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_StaticText.htm\">Static Text</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FF756C9D-C3A3-446F-8F20-AC9CACA48C99\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Labels.htm\">Labels</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2E5EDED-3E81-4922-8961-6893CE3AC3E7\"></a></span><p class=\"table-body\">string</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4FA80C75-30CA-4CD1-B509-92DDBD453F14\"></a></span><p class=\"table-body\">Displays value of a string parameter as read-only. This can be used to add instructions\n\
                           to a Property Page.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2F08D2A-A26D-410F-8E08-B99CE20C0AD4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlStatic</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A48E91B2-F2CA-4D86-8435-AA1101D5C4EF\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_BitmapWidget.htm\">Bitmap Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-99C325A5-492B-4753-8518-42BD73DA1B00\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Labels.htm\">Labels</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-08EB4F9A-1F4D-4A83-8CBA-5624C0AC558C\"></a></span><p class=\"table-body\">anything</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6AAEEF36-AD6B-472B-AA0A-D760BED59158\"></a></span><p class=\"table-body\">Generally used for displaying bitmap (icon or logo), this control is associated with\n\
                           a real parameter on the underlying CustomProperty but the value is neither read nor\n\
                           changed.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-10163196-997B-42D4-8D44-C106320B4E38\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlBitmap</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7DD20820-A455-4297-9C48-FE7A3305FE8F\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_SingleLineText.htm\">Single-line Text</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4D1C90C4-C76E-4E96-AA2C-1C9516302948\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_EditableTextBoxes.htm\">Editable Text Boxes</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-049FF261-3287-46D6-BFA6-F51A7013EF7E\"></a></span><p class=\"table-body\">string</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-050B460E-77F0-40F1-9069-5D3D9D4C04A3\"></a></span><p class=\"table-body\">yes</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8D3B7978-F736-43FF-A7B0-19FBCD3C9CFC\"></a></span><p class=\"table-body\">Editable text box; default control for a string parameter.</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8B2B66B5-1CC3-4E87-AC38-080DBBE2FAAB\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlString</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-24C84B40-A994-46F1-9D40-538F7DAABF20\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_MultilineText.htm\">Multi-line Text</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB952A98-3B88-4E6E-9E5F-D166361940AA\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_EditableTextBoxes.htm\">Editable Text Boxes</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EB2EE94B-7611-4145-A8BC-ED92397F4712\"></a></span><p class=\"table-body\">string</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA821A27-A93C-40B3-9628-1280539127CC\"></a></span><p class=\"table-body\">Editable text box; the size and style can be customized.</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A7D23999-79D3-417B-8F74-EE0B80CFFAA8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlEdit</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-114AE317-7F0D-444F-928B-933755C057E6\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_TextEditorWidget.htm\">Text Editor Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-872E28EE-F534-472F-857C-03FBCE6A580E\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_EditableTextBoxes.htm\">Editable Text Boxes</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2A26AABF-208A-43FE-ABCA-67DD8173FDFF\"></a></span><p class=\"table-body\">string</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E97515C7-AEEC-4DF8-9C36-D46494BCAA6B\"></a></span><p class=\"table-body\">Editable text box; greater customization is possible.</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42FC3493-FEEB-4BC4-AFC6-A8BB6E5B0E1B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlEdit</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-036E9280-A0FE-436A-A3A9-214FE784F64C\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_ListBox.htm\">List Box</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3F7DDCD2-916B-45E6-9719-94541DA58A82\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_EnumControls.htm\">Enum Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E04DD550-4DAE-4E5B-B555-AA084FDB648F\"></a></span><p class=\"table-body\">string or numeric (integers, longs, floats and doubles)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-651FCB2B-DA2B-49A4-BB39-6AC7CA408C63\"></a></span><p class=\"table-body\">Lists a number of options (read-only values); but only one item can be selected at\n\
                           a time; supports scroll bars.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8EA6CFE1-F9C7-4C8C-8CFF-3EA0370EDF86\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlListBox</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B531BB35-5C1F-4CC0-A862-6AC904779E95\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_ComboDropDownBox.htm\">Combo/Drop-Down Box</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-631E3E02-ED72-4253-8891-3AEF4918FCED\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_EnumControls.htm\">Enum Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3AA4D7C7-0E9C-43D6-A9B0-84C4EEA80A13\"></a></span><p class=\"table-body\">string or numeric (integers, longs, floats and doubles)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-33644CA5-1EBA-4FD3-BFCF-16DCE01A502C\"></a></span><p class=\"table-body\">Lists a number of options (read-only values) with only the selected item visible;\n\
                           user clicks on control to display all possible items to choose from; well-suited for\n\
                           large lists.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BDB768AD-8D29-40C3-87E4-8FB3E51AA3BB\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlCombo</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AC174B91-9FBF-47CC-A3C2-09E073BF09BF\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_RadioButtons.htm\">Radio Buttons</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-442DBE0C-F9C9-454C-A8DE-FD2E853D1A08\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_EnumControls.htm\">Enum Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-486DE84B-D79F-4A39-8289-147AB414B431\"></a></span><p class=\"table-body\">string or numeric (integers, longs, floats and doubles)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8137478C-9489-414B-8DBA-3E0838213893\"></a></span><p class=\"table-body\">Lists all options (read-only values) on the page at the same time; user clicks on\n\
                           small circle to select one at a time; well-suited for small lists.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2B5BF264-D993-4BC7-821A-012F2266BFD9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlRadio</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA10B34E-8DEE-4969-90B3-8647FDEF8FC4\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_IconButtons.htm\">Icon Buttons</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5F7E90D6-D7B2-4EE3-845D-7120E4D5A2D9\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_EnumControls.htm\">Enum Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ABFFE437-21A6-47E8-9436-9DB6AB14038C\"></a></span><p class=\"table-body\">string or numeric (integers, longs, floats and doubles)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D99569AF-23D3-43AD-999D-D6BB6F324556\"></a></span><p class=\"table-body\">Lists all options (read-only values) on the page at the same time; user clicks on\n\
                           specified (bitmap) icon to select one at a time; well-suited for small lists.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-464ACB29-5B78-467D-A6E2-2FBF639F4290\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlIconList</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-93AFC511-39EE-4766-943F-BCDE8CD05134\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Bitfield.htm\">Bitfield</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2CF99BB8-0732-4451-B091-102BB3B2B826\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_EnumControls.htm\">Enum Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FC25261A-EDE4-443E-A36D-49EF6A39822B\"></a></span><p class=\"table-body\">numeric (integers, longs, floats and doubles)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D3E89EDA-BCEF-427C-9049-70CD65A70067\"></a></span><p class=\"table-body\">Set of small squares indicating whether or not the underlying value is added to the\n\
                           total for the control; user clicks the control to toggle between true and false.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-70FB2956-6E8B-4F11-9653-4FD1A481101A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlCheck</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9F272054-F245-491D-A410-386DAED2FDA0\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_FileBrowserWidget.htm\">File Browser Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42FD241C-FB52-4A1A-BDC3-A41BBD0683DD\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PathControls.htm\">Path Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-18583614-D36B-49CD-A85B-C90DAE1EEC24\"></a></span><p class=\"table-body\">string</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-858DCCA3-EED4-4A7A-BC7E-CB273439CF1E\"></a></span><p class=\"table-body\">Edit box for string path of file and widget for calling the File Browser to pick a\n\
                           file.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B649D63E-C330-4BFE-BE35-1913FBA1565E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlFilePath</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5A5E0478-7658-4FB0-AA48-736F71A06414\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_FolderWidget.htm\">Folder Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34664C81-1D28-412A-BAC9-1E57D74AAD32\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PathControls.htm\">Path Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B0618972-E37E-4E11-ABAE-512AB7B2A1E6\"></a></span><p class=\"table-body\">string</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-893414EF-EE03-4B1C-9D3D-7C331C5D95FC\"></a></span><p class=\"table-body\">Edit box for string path of folder and widget for calling the Folder Picker to pick\n\
                           a directory.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-51449498-BA96-4DA4-87FE-D2603CE6460F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlFolder</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6EEEE9C6-5257-4297-AAC9-AB2CE97D0C4A\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_NumericEditBoxWithSlider.htm\">Numeric Edit Box with Slider</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ECD8652E-EA3B-49D7-9925-1B93F900008D\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_NumericControls.htm\">Numeric Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B42B51EC-B961-411E-9DCF-65605E33573E\"></a></span><p class=\"table-body\">numeric (integers, longs, floats and doubles)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FAEBFCC3-EFDE-4467-9621-BF501116478A\"></a></span><p class=\"table-body\">yes</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A4AC4818-6C71-4487-9DD1-B3AE6B66BB9C\"></a></span><p class=\"table-body\">Numeric edit box for manually typing numbers; optionally includes slider; default\n\
                           for all numeric parameters.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E39AB011-2F1C-459C-8548-FBFF08A87E12\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlNumber</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D94664CB-A6BD-49F2-A250-7E7001569D03\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_RGBColorControl.htm\">RGB Color Control</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-80991A11-529D-40AF-84BC-D3A4AB0A22D7\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_NumericControls.htm\">Numeric Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ED85B9F6-5693-41E9-AB45-EC65A1804D49\"></a></span><p class=\"table-body\">(3) doubles</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4FD3999A-DA0D-4A88-92AA-20CB5C5656C8\"></a></span><p class=\"table-body\">Softimage color control with three channels (no Alpha); associated with 3 underlying\n\
                           parameters (one for each channel).\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-30C1DB3E-E635-4CF8-9A34-F119AD5D6600\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlRGB</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1D733C5B-9A45-4135-B26E-5D44C1BDA20E\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_RGBAColorControl.htm\">RGBA Color Control</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E178FE3F-AAE3-4D23-A848-5D826FACA24F\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_NumericControls.htm\">Numeric Controls</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-93B4F679-3331-4D9F-97F0-D06C4A4DD288\"></a></span><p class=\"table-body\">(4) doubles</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5C45F39F-3AEF-4C3E-9A4F-708915A4BD7D\"></a></span><p class=\"table-body\">Softimage color control with four channels; associated with 4 underlying parameters\n\
                           (one for each channel).\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ACE12C09-F9F5-4C15-AE0D-094B0B215675\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlRGBA</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A0D1B779-FC18-4030-B9A5-C843F62A115C\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_FCurveWidget.htm\">FCurve Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E5C82020-3518-4721-A785-682C5A07E324\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_FCurveWidget.htm\">FCurve Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F9E682EA-6A57-4B92-B506-38394AF61762\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html\">FCurve</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DD69BC5E-A033-495B-BD92-D6505412CA28\"></a></span><p class=\"table-body\">yes</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-76731C9A-E576-4EB1-A091-AF6F2CA90E93\"></a></span><p class=\"table-body\">Softimage fcurve control; changes can be handled by OnChanged events in Logic like\n\
                           other controls.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4F6525A3-2373-45E0-99C9-3ED2A0B2A0F3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlFCurve</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A6227967-1F5D-488B-899B-CF8D8E48E76B\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_GridDataWidget.htm\">GridData Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D81BBCC5-8403-4268-B6BE-17202B2C6358\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_GridDataWidget.htm\">GridData Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-381D61B0-19D8-4ABA-A145-294279973F55\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/GridData.html\">GridData</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1549CF61-EDEE-4D57-BADE-18FDAEB04154\"></a></span><p class=\"table-body\">yes</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E0ACFBA5-4AF1-4A31-9BF2-E48F5A36D77F\"></a></span><p class=\"table-body\">Multi-column list control, similar to a spreadsheet; supports 2-dimensional array.</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BAE437E0-2423-4099-AD67-847154555153\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlGrid</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-964292D9-7258-4E8F-A872-6E48B6EE0D64\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_SynopticWidget.htm\">Synoptic Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9885E389-6039-4373-BDF6-49DA0F289718\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_SynopticWidget.htm\">Synoptic Widget</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-193C9583-C241-4C38-B856-1C7EBEF92A51\"></a></span><p class=\"table-body\">string</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-81AC4733-3E7F-4887-880A-FE3F1AFC477C\"></a></span><p class=\"table-body\">A control that shows a synoptic view. You use this control with a string parameter\n\
                           whose value is the full path to the synoptic file.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-319FA3A2-40E0-4366-AA01-08F1A48FAAEB\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlSynoptic</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F72AF455-BF60-4734-B519-0F28EACC756B\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CheckBox.htm\">Check Box</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C69E9FB3-551D-4B8F-B3A9-5E74CD1B62B3\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CheckBox.htm\">Check Box</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F613F317-533A-4D82-9796-76D6E5B377B4\"></a></span><p class=\"table-body\">boolean</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CA1D4E29-AEA1-49CB-8555-0632088E1EFA\"></a></span><p class=\"table-body\">yes</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-75F5C0C4-FA85-4A71-8C6D-F829E4C3D45B\"></a></span><p class=\"table-body\">Small square indicating true value if checkmark is visible; user clicks the control\n\
                           to toggle between true and false.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F4AAA2F9-10E4-4875-BD18-99569B4DA3C0\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlBoolean</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8970792B-D06F-4502-8632-ADDB77828111\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CommandButton.htm\">Command Button</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6DE7C1F0-7083-46F0-92B9-6C91FF35F89C\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CommandButton.htm\">Command Button</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CD43DFCE-05DE-4C12-AA72-E9A92F3D1BD5\"></a></span><p class=\"table-body\">none</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-88ED6752-F3B3-48BA-9E9C-504AE2BE8D73\"></a></span><p class=\"table-body\">n/a</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B0DB2FA9-A2FF-4576-82AF-DB3319396350\"></a></span><p class=\"table-body\">Buttons that are linked to OnClicked events in Logic; no underlying parameters are\n\
                           associated with buttons.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C01B2B65-A673-4AA3-8DC7-0C807E5FB9AB\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlButton</a> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_Labels.htm\">Labels</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_EditableTextBoxes.htm\"> Editable Text Boxes</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_EnumControls.htm\"> Enum Controls</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_PathControls.htm\"> Path Controls</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_NumericControls.htm\"> Numeric Controls</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_FCurveWidget.htm\"> FCurve Widget</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_GridDataWidget.htm\"> GridData Widget</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_SynopticWidget.htm\">Synoptic Widget</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_CheckBox.htm\"> Check Box</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_CommandButton.htm\"> Command Button</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";