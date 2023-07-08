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
      <meta name=\"topicid\" content=\"GUID-32D1AF27-0083-456F-8648-DC0538A400BA\" />\n\
      <meta name=\"indexterm\" content=\"scripts: editing\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Editing Scripts</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-32D1AF27-0083-456F-8648-DC0538A400BA\"></a></span><div class=\"head\">\n\
            <h1>Editing Scripts</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF384ADB-BE77-4889-B094-73925DC41775\"></a></span>You can use the editing pane in the script editor to create and edit a script. You\n\
               can cut, copy, paste, move, and type text in the editing pane. You can use the history\n\
               pane as a source for copying text or as a reference for command names and syntax.\n\
               \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-A196B61A-FCE1-4078-AFD6-08651227378E\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>You must keep the mouse pointer over the script editor window when editing scripts.\n\
                  Otherwise, your keystrokes are interpreted as commands in the viewport or any other\n\
                  Softimage window. \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-000A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AE6564A3-A10A-4AC7-988A-5BD5165714CD\"></a></span>Commands in the Script Editor\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BDEEBD52-F69A-4AAF-A6CD-E4FDA0A6D0C2\"></a></span>You can use the commands in the <span class=\"MenuCascade\" id=\"GUID-0BC45608-EBBF-498E-81DC-07ACAF8C7260\">Edit</span> and <span class=\"MenuCascade\" id=\"GUID-6EFDAE0E-4ED9-44F0-87DD-E21F99487767\">View</span> menus on the command bar as well as in the pop-up (<em class=\"mild\">context</em>) menu that appears when you right-click in the history pane or editing pane. The\n\
                  context menus are shown in the following figures: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_86363CACD77A44AEB94CEE8075F68FEE\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"50%\" align=\"left\" />\n\
                        <col width=\"50%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"FIG_9349A22B25384348AA52669CC6A68E3D\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-625695BF-08BD-4971-A532-AD92B696107A-low.jpg\" /></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"FIG_D2AC037145ED4570A73EEE727D54E6FF\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-C6CAD11A-012C-45D3-9C70-7FBC0BF85587-low.jpg\" /></div> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> <span class=\"anchor_wrapper\"><a name=\"TABLE_6998654D4FA44B6FA54F11F889D38D28\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"66.66666666666666%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-824D0858-9038-4E93-81D9-2876C33371B7\"></a></span><p class=\"table-body\"> <em class=\"strong\">A</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-949E803E-02CD-4400-8496-FF1F246411B5\"></a></span><p class=\"table-body\">Context menu in the history pane. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A0748952-83E4-4226-9372-50C5B94D546D\"></a></span><p class=\"table-body\"> <em class=\"strong\">B</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5E3EDB20-7B8F-4DEE-8D70-235DFF39658B\"></a></span><p class=\"table-body\">Context menu in the editing pane. You can access more editing options from the context\n\
                              menu than from either the command bar menus or keyboard shortcuts. For more information\n\
                              about these features, see the <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_MakingCodingEasier.htm\">Making Coding Easier</a></span> topic. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD341A12-A64D-4B1E-A82A-AA40B7B7982C\"></a></span>You can also use the standard mouse and keyboard commands as shown in the following\n\
                  table: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_29F1B7EFB35942FFB554EED696A37821\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"50%\" align=\"left\" />\n\
                        <col width=\"50%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BE19AE00-E2A3-4EEE-8B72-949173AB0682\"></a></span><p class=\"table-heading\">Action/Command </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E673945B-F668-428C-8422-09CAFA31A3E6\"></a></span><p class=\"table-heading\"> Description </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0C330F42-0E97-4CE1-AD31-3D30F56DB45F\"></a></span><p class=\"table-body\">Ctrl+A, or choose <span class=\"MenuCascade\" id=\"GUID-AEFBDB5A-73B2-4FE9-A21C-5816F5BDD45E\">Select All</span> from the context menu (right-click) \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-15BD3E7E-A7E7-4B39-8B09-044C71885319\"></a></span><p class=\"table-body\">Select all of the content in the history pane or editing pane. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-174B88EE-0E5C-48AA-8ADF-208F27A68831\"></a></span><p class=\"table-body\">Double-click on a word. </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0D6D5261-1A25-4D88-9ACD-9D085886F9A0\"></a></span><p class=\"table-body\">Select a word in the history or editing pane. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-37E44104-4346-42DB-9203-4CE401EE0CEA\"></a></span><p class=\"table-body\">Triple-click on a line. </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2B4BF9E8-41E8-4CC7-8A79-8F5C12DC3A32\"></a></span><p class=\"table-body\">Select a line in the history or editing pane. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0420809F-4F61-4B28-A86C-CD1ED94C66B9\"></a></span><p class=\"table-body\">Drag to a new location. </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-337267FA-6265-4305-A4D6-732EB8A8DFD7\"></a></span><p class=\"table-body\">Move the selected text to the new location. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0B61D231-E94E-4444-89A4-2B85EC077BD2\"></a></span><p class=\"table-body\">Ctrl+drag to a new location. </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CD4F5F0F-0E2C-463F-85C2-20525DB43097\"></a></span><p class=\"table-body\">Copy the selected text to the new location. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7EC0F750-619A-441F-8A97-64E0A2DC509D\"></a></span><p class=\"table-body\">Ctrl+X, or Shift+Delete </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D8368DBB-BA18-4504-A128-F4535BDA5B3A\"></a></span><p class=\"table-body\">Cut the selected text into the clipboard. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7BF99FA2-B470-4A53-9E39-8680C7D1AD7B\"></a></span><p class=\"table-body\">Ctrl+C, or Ctrl+Insert </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CDBEE618-55F5-494E-845E-B13408D42DB5\"></a></span><p class=\"table-body\">Copy the selected text into the clipboard. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F05294CE-11CA-4C35-995E-5B3A22C966DA\"></a></span><p class=\"table-body\">Ctrl+V, or Shift+Insert </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2D4B407E-7DFB-4ECA-9D20-2F268EBDC125\"></a></span><p class=\"table-body\">Paste the text from the clipboard. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1C292DF3-C72D-40C3-90AF-218459DDD13F\"></a></span><p class=\"table-body\">Ctrl+Z </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EFBA3D3E-63E9-4B7A-B766-3DC6B0B5F9D3\"></a></span><p class=\"table-body\">Undo the last edit. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-07715267-A9A7-462E-9B2C-3BD7474C8D7E\"></a></span><p class=\"table-body\">Ctrl+Y </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FCF2172A-7D80-48F7-B18C-3D2546C26379\"></a></span><p class=\"table-body\">Redo the last undone edit. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4CB5C0B1-3DB3-419D-967A-9925B3A4355C\"></a></span><p class=\"table-body\">Ctrl+right/left arrow </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-49C3C8D7-FEE4-4FEC-B66E-AEB511626517\"></a></span><p class=\"table-body\">Go to the next/previous word. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-078ABAA7-8A53-48E7-8489-7B0C3A6005BC\"></a></span><p class=\"table-body\">Ctrl+Home </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8447EFFA-0E00-4CB5-AA94-DBA4BDB8B573\"></a></span><p class=\"table-body\">Go to the beginning of the script. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-02B5E6B1-F197-40E2-903A-C13796F4E046\"></a></span><p class=\"table-body\">Ctrl+End </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-23F0D0EB-C266-4FF8-A2E6-2A71A982B3A3\"></a></span><p class=\"table-body\">Go to the end of the script. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-65CABB2D-7445-47CB-9896-E7442395210F\"></a></span><p class=\"table-body\">Shift+arrow keys </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-313BA5AD-889A-4CF2-81E0-2F7F5D4027AE\"></a></span><p class=\"table-body\">Extend the selection. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-81B9FC28-2E02-44D6-B999-B0F24FCE9B64\"></a></span><p class=\"table-body\">Shift+Home </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0B338A26-8D58-4CAA-AB87-3C78338656A6\"></a></span><p class=\"table-body\">Select from the cursor to the beginning of the line. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5230BF88-0F2B-4A3F-9FE2-F901177B94AE\"></a></span><p class=\"table-body\">Shift+End </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-15D8DA76-2239-432E-BD26-3474AA78F98A\"></a></span><p class=\"table-body\">Select from the cursor to the end of the line. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C1E01484-A884-40FE-B5B7-AA70EF17CFDE\"></a></span><p class=\"table-body\">Ctrl+Shift+Home </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-973772DB-3B89-4743-B20A-838685D36448\"></a></span><p class=\"table-body\">Select from the cursor to the beginning of the script. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A5416229-5CB4-430E-9041-CC0950C38A4A\"></a></span><p class=\"table-body\">Ctrl+Shift+End </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7216A5A8-28DB-4FED-96B6-392C43935CB4\"></a></span><p class=\"table-body\">Select from the cursor to the end of the script. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1D2928F8-7C2A-4F19-A282-0CD29E82A1FE\"></a></span><p class=\"table-body\">Insert </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DDD75063-AC66-41C0-BD98-26A818876A26\"></a></span><p class=\"table-body\">Toggle overtype mode on or off. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-695EE3A3-FFA3-4D76-BBA7-E098A9110DE2\"></a></span><p class=\"table-body\">Tab </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D5C903C3-D10B-477E-BDED-99AC049A2E8A\"></a></span><p class=\"table-body\">Increase indenting on the selected block. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-846413E9-C7A7-444F-96FD-A3DFFB427FDE\"></a></span><p class=\"table-body\">Shift+Tab </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F55042FC-72DA-4132-A595-FB20B4698433\"></a></span><p class=\"table-body\">Decrease indenting on the selected block. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-94C0EB58-D27D-446A-8DF8-FB81D94921EC\"></a></span><p class=\"table-body\">Ctrl + [ </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A0CB8814-9CE0-49FD-BAE0-E121A604111C\"></a></span><p class=\"table-body\">Move the cursor to the previous paragraph. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F604D652-CA65-466D-9D06-A38D7DBAA204\"></a></span><p class=\"table-body\">Ctrl + ] </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C250441B-376C-44DD-950D-4183C1822B72\"></a></span><p class=\"table-body\">Move the cursor to the next paragraph. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0AD27C21-2EA9-4E1C-B1AB-58DCB9ED2DD9\"></a></span><p class=\"table-body\">Ctrl + / </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E624ADDD-19EC-475E-8649-7C7E8C35349A\"></a></span><p class=\"table-body\">Move the cursor to the previous word (capital letter). </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5D7A9DAE-2C20-4506-8B1D-C008B23F0ABD\"></a></span><p class=\"table-body\">Ctrl + Shift + / </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6FA63B2C-FA06-45B7-A56E-B6112A5F0400\"></a></span><p class=\"table-body\">Move the cursor to the previous word (capital letter) and extend selection. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7DC2DCC4-ECBB-40BA-BE3D-8A15E8B50BF8\"></a></span><p class=\"table-body\">Ctrl + \\ </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-09916FD4-BD1F-4171-82B2-6383E3C56ADA\"></a></span><p class=\"table-body\">Move the cursor to the next word (capital letter). </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-99D210EC-ADF8-43E0-9AD7-6BA55562CF14\"></a></span><p class=\"table-body\">Ctrl + Num Lock + (+) </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B0391CF4-75F1-49BF-86E5-D287B377944F\"></a></span><p class=\"table-body\">Zoom in the content. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-286D666C-735B-43EA-9ADF-0DFA0962706E\"></a></span><p class=\"table-body\">Ctrl + Num Lock + (-) </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9F929C9A-DFBD-4E71-9F64-48E8CBE237A2\"></a></span><p class=\"table-body\">Zoom out the content. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6FC56C4D-9349-44BA-A3ED-75CF870B66D9\"></a></span><p class=\"table-body\">Ctrl + Num Lock + / </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B896FE9C-5DE1-4305-8610-0707B6E2638E\"></a></span><p class=\"table-body\">Restore the default zoom. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F322341-13DE-4CE2-832F-E47339F83F2C\"></a></span><p class=\"table-body\">Ctrl + L </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A1DFB959-A7DD-437D-A31B-AEC1EBE47097\"></a></span><p class=\"table-body\">Cut a line. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1BE3F036-1C82-4E85-A68B-C76B700F38D8\"></a></span><p class=\"table-body\">Ctrl + Shift + L </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-23E8C91B-4AD9-48A6-9880-953DFCB3F4DC\"></a></span><p class=\"table-body\">Delete a line. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2C0CF3C-A226-4B98-AE5A-E06F29049D58\"></a></span><p class=\"table-body\">Ctrl + T </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D83A9726-B567-4790-A2D7-76838C8A79E3\"></a></span><p class=\"table-body\">Transpose a line. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5C8B3A33-7B32-47E9-83CE-10FF927440E4\"></a></span><p class=\"table-body\">Ctrl + Shift + T </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CA3AF6D9-E076-4E61-A441-773079FFF622\"></a></span><p class=\"table-body\">Copy a line. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9F304A63-9047-4B8E-99BF-9FB7B73FED3C\"></a></span><p class=\"table-body\">Ctrl + D </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F55C66E8-4F60-42B9-BC49-EA339FE32EAE\"></a></span><p class=\"table-body\">Duplicate a line or selection. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DA904202-DEA7-434C-895B-1A65CF2D692A\"></a></span><p class=\"table-body\">Ctrl + Shift + U </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-40614F51-1C53-4734-9BD3-5A64A0F9004E\"></a></span><p class=\"table-body\">Convert to uppercase. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F4A95501-99F6-4E23-B0D3-FED98CDAE6AA\"></a></span><p class=\"table-body\">Ctrl + U </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-18A87FFE-96B6-4B14-84D1-6DDFA019F616\"></a></span><p class=\"table-body\">Convert to lowercase. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\">Ctrl + K </td>\n\
                        <td class=\"table-body\" align=\"left\">Comment the selected lines. </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> Shift + Ctrl + K </td>\n\
                        <td class=\"table-body\" align=\"left\">Remove the comment characters (uncomment). </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AD367F9E-85E3-4A80-BE7F-D8975D6A7E66\"></a></span><p class=\"table-body\">Ctrl + Tab </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB88A12B-82D4-4B3F-B6D4-34AD3BE8FA83\"></a></span><p class=\"table-body\">View the next tab in the editing pane. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4B2BBA57-E874-4E3A-8EC3-B0BDC3264BFB\"></a></span><p class=\"table-body\">Ctrl + Shift + Tab </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0EB94D8D-EEF8-4403-B7B4-7845B65C201F\"></a></span><p class=\"table-body\">View the previous tab in the editing pane. </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-000D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A14B8CE2-44D3-46B3-B499-713EC840B049\"></a></span>Finding and Replacing Text\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9D352CF6-4227-4230-8476-41146200F944\"></a></span>You can find and replace text in the editing pane. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_D3D7E6D9020F4208BBD0CE35070C857F\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E3E97913-6A34-4FD6-8382-0F9103AC0A27\"></a></span>To find text, select <span class=\"MenuCascade\" id=\"GUID-B4DD04BB-C774-4C25-A4AF-45533511E1DA\">Edit <img src=\"../images/ac.menuaro.gif\" /> Find and Replace <img src=\"../images/ac.menuaro.gif\" /> Find</span> in the command bar or press Ctrl+F. The Find dialog appears. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-74D3B012-77C1-439C-9DDF-F4824E62F1AB\"></a></span> <img src=\"../images/GUID-38501E18-B536-4278-A126-40ED90C396DD-low.png\" /> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E3A797BC-52F0-4104-A3FF-5EF9DADA11A8\"></a></span>To replace text, select <span class=\"MenuCascade\" id=\"GUID-53967E36-A0EB-46C1-88ED-CA45AE32807B\">Edit <img src=\"../images/ac.menuaro.gif\" /> Find and Replace <img src=\"../images/ac.menuaro.gif\" /> Replace</span> in the command bar or press Ctrl+H. The Replace dialog appears. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0AB19B2F-34AC-4412-8BD6-7E27CAD164AA\"></a></span> <img src=\"../images/GUID-9E46D019-A95D-4ABA-89CA-59CFC59568BA-low.png\" /> \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-F210000F-3349-4EB8-AB5E-38F112393732\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>You can set your preferences for the search feature. For example, you can set the\n\
                           search feature to continue searching from the beginning of a file and specify what\n\
                           action to perform when a search string is not found. See <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_CustomizingYourScriptingEnvironment.htm#UL_8D8CDC7B0C264194BE0086ED5AD56DD9\">Find and Replace Features</a></span> for more information. \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_507EA3DD52B4440594F28BC12470A577\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B8DA9F68-4754-4750-8FE9-EDBF49993EC5\"></a></span>Incremental Search\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-667F6ACB-79B0-4780-95B1-EEFDFD3DCB7B\"></a></span>You can use incremental search to find all the occurrences of a word in the editing\n\
                  pane at the same time. As you type the word that you want to search, all the matching\n\
                  words in the editing pane are highlighted. To use incremental search, select <span class=\"MenuCascade\" id=\"GUID-625740C6-641C-4B2A-9E8A-214DA99EEDD2\">Edit <img src=\"../images/ac.menuaro.gif\" /> Find and Replace <img src=\"../images/ac.menuaro.gif\" /> Incremental Search</span> in the command bar or press Ctrl+I. The incremental search is shown in the following\n\
                  figure. <span class=\"anchor_wrapper\"><a name=\"FIG_BF9C05709A554CD5A99B9C40029C5482\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-B9A915A6-BA90-478A-9B97-49559151FE32-low.jpg\" /></div> \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_35E0D6FC87E446649247BF0A643D3A58\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"66.66666666666666%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D268E7D2-5BA6-452B-8059-FE6011FB372C\"></a></span><p class=\"table-body\"> <em class=\"strong\">A</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2B63A522-FE25-4275-80BD-6AEC10C2EFB5\"></a></span><p class=\"table-body\">As you type a word to search, it appears in the <span class=\"MenuCascade\" id=\"GUID-6E133908-4774-4023-A9B7-449090CE329A\">Incremental Search</span> field. For example, in the figure when the word <em class=\"mild\">menu</em> is searched, all the instances of <em class=\"mild\">menu</em> are highlighted in the editing pane. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BB11CCF7-7F8D-48B4-A8DC-6107B1E4953C\"></a></span>Clearing the Editing Pane\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-81103F40-F20F-4838-A03C-75DCAA8E6B74\"></a></span>To clear all of the text from the editing pane, select <span class=\"MenuCascade\" id=\"GUID-8BD591F7-51A8-4091-B97B-1AB302001843\">Edit <img src=\"../images/ac.menuaro.gif\" /> Clear Script Editor</span>. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-5F6B3A99-5967-4414-AA87-9924DB67E28D\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> Using the <span class=\"MenuCascade\" id=\"GUID-FC67EE93-7807-4FCA-88D5-3D2BF13564BD\">Clear Script Editor</span> option does not create a new script file. If a saved script file is open and you\n\
                     clear the editing pane and save it, the file on the disk is replaced. To create a\n\
                     new script file, click the new icon or select <span class=\"MenuCascade\" id=\"GUID-A509B32A-6858-4783-BDB9-1336A48E4FAE\">File <img src=\"../images/ac.menuaro.gif\" /> New</span>. \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3394E42-2DBB-4D5A-8844-461D0A7ABF7E\"></a></span>To clear both the editing pane and history pane, you can select <span class=\"MenuCascade\" id=\"GUID-DFEB7C4A-477A-4CC5-9553-9CC6586323C4\">Edit <img src=\"../images/ac.menuaro.gif\" /> Clear Both</span>. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7764D933E362064489C22357B4B7178F-0011\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1D635CAF-4EF1-4119-9294-0E411D4B4DF2\"></a></span>Using Bookmarks\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3782B371-1074-4038-9C5D-AF00AEC44648\"></a></span>You can use bookmarks for easily navigating to certain script locations in the editing\n\
                  pane. You can move from a bookmark to another until you find the location that you\n\
                  need. For example, you might want to switch between a call to a function and the function\n\
                  definition in a script. To access bookmarks, select <span class=\"MenuCascade\" id=\"GUID-A6E17BB8-3013-469B-92CC-CC9B1557447C\">Edit <img src=\"../images/ac.menuaro.gif\" /> Bookmark</span> in the command bar. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-518615CB-BBE8-4A78-B237-6A43A25D5846\"></a></span>You can also set, remove, and navigate between bookmarks using these commands: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_5340BA39D0A744A6A8B79100E949F8AF\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"66.66666666666666%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9EC6441A-8471-48A9-BFB9-F3898100AFD5\"></a></span><p class=\"table-heading\">Command </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D33920BA-BD37-40CC-BB81-CA64D4A0873B\"></a></span><p class=\"table-heading\">Description </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EC83C036-8B8E-40BD-A827-7D3774148EFE\"></a></span><p class=\"table-body\">Ctrl+F2 </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CCFFF586-4445-4234-B34A-7A8F4D038BB4\"></a></span><p class=\"table-body\">Set or remove a bookmark in the line where the cursor is placed. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7D80F3B6-D417-40E4-BDD9-0F004D45B366\"></a></span><p class=\"table-body\">F2 </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5A416D3A-C771-4DCF-9619-53FFFD6A3AB7\"></a></span><p class=\"table-body\">Move to the next bookmark. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-589FBD85-8393-4D59-B83C-E510134BCDD1\"></a></span><p class=\"table-body\">Shift+F2 </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F6E9C71B-8B4E-46E1-9CB7-BE9A5E3A6BF4\"></a></span><p class=\"table-body\">Move to the previous bookmark. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-66880C0B-1B38-4056-B3BC-CB5D321BDB12\"></a></span><p class=\"table-body\">Ctrl+Shift+F2 </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ED9CDEC1-8AD2-4A02-A62F-D6C59E4FC67F\"></a></span><p class=\"table-body\">Remove all bookmarks from the file. </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A2699B5-3123-4318-AC9F-901A7C5ADACD\"></a></span>By default, bookmarks are indicated using light blue highlighted text in the editing\n\
                  pane as shown in the following figure. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_24C14E9082084A41957DE8C58385DFAA\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-AD958F81-3AE9-42F6-A924-82ECD81EEB6A-low.png\" /></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2B1C4E6-7128-4F15-83DA-9135F75B0874\"></a></span>Instead of the blue highlighting, you can choose to indicate bookmarks with a light\n\
                  blue square in the margin using the <span class=\"char_link\"><a href=\"#!/url=./files/script_editor_CustomizingYourScriptingEnvironment.htm#WS7764D933E362064489C22357B4B7178F-002B\">Selection Margin</a></span> scripting preference. This is shown in the following figure. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"FIG_4FD37C992F12436F8BC4C0EE21DAF428\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-36BEEE48-F780-4808-BFA4-5368E2C19DD1-low.png\" /></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";