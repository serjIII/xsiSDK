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
      <meta name=\"topicid\" content=\"GUID-39E98227-F410-446D-8E59-C8555A920B3A\" />\n\
      <meta name=\"indexterm\" content=\"Using Queries\" />\n\
      <meta name=\"indexterm\" content=\"sorting, spreadsheet queries\" />\n\
      <meta name=\"indexterm\" content=\"spreadsheet: sorting\" />\n\
      <meta name=\"indexterm\" content=\"How the Spreadsheet Works\" />\n\
      <meta name=\"indexterm\" content=\"Types of Queries\" />\n\
      <meta name=\"indexterm\" content=\"Types of Cells\" />\n\
      <meta name=\"indexterm\" content=\"The Components of a Spreadsheet Query\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is a Spreadsheet Query?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-39E98227-F410-446D-8E59-C8555A920B3A\"></a></span><div class=\"head\">\n\
            <h1>What is a Spreadsheet Query?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B7EE7C6-EB13-48E0-981B-64B0C130FD54\"></a></span>The spreadsheet view displays scene information about elements and their parameters\n\
            in a grid. This information is filtered and organized by <em class=\"mild\">queries</em> that you create to show specific aspects of your scene in combination with sorting\n\
            operations you can perform based on object data. You can then perform operations on\n\
            many elements or parameters at once.\n\
         </p><img src=\"../images/GUID-A439DA06-89E0-465D-A5D1-85F667708CF4-low.png\" /><div class=\"table_Ruled\">\n\
            <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
               <colgroup>\n\
                  <col align=\"left\" />\n\
                  <col align=\"left\" />\n\
               </colgroup>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D8AB68F6-F9E2-41CE-B363-66A43E854F9E\"></a></span><p class=\"table-body\"> <em class=\"strong\">A</em> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EC0556D2-1FEA-4D90-8F00-772AA7E29579\"></a></span><p class=\"table-body\">Each row represents a scene element. Click a row heading to select all of an element\'s\n\
                        properties. Right-click the row to select objects in your scene.\n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledEvenRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ACA8E24E-8825-45B6-A713-45FC88208806\"></a></span><p class=\"table-body\"> <em class=\"strong\">B</em> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-73D1380D-E894-416F-B4E7-370FCA0A997E\"></a></span><p class=\"table-body\">Each column represents a parameter. Click a column heading to select a parameter on\n\
                        all of the displayed objects. Right-click a heading to quickly sort elements and mark\n\
                        parameters for animation.\n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
               <tr class=\"ruledOddRow\">\n\
                  <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C9B2EE85-C32F-46EB-A5FD-2595B00DC392\"></a></span><p class=\"table-body\"> <em class=\"strong\">C</em> \n\
                     </p> \n\
                  </td>\n\
                  <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-28A3D0BE-F9D2-4563-B3AF-C08AED765A8D\"></a></span><p class=\"table-body\">The intersection between a row and a column is called a cell, each of which holds\n\
                        one value. You can select many cells at once and modify them all simultaneously.\n\
                     </p> \n\
                  </td>\n\
               </tr>\n\
            </table>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0005\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-39772C64-8420-4F11-BC8A-857D05ACCF2C\"></a></span> Using Queries\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7B3353A6-DF98-491D-8D2D-19ADE096F1D4\"></a></span>A query is a means of requesting information filtered a specific way for display in\n\
               the spreadsheet. For example, you could query Softimage for a list of local rotation\n\
               values for only selected objects. Queries are text files with a .query extension;\n\
               default queries are located in <em class=\"strong\">%SI_HOME%\\Application\\Queries</em>.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-42341D3A-4A7A-4BFA-9070-649892CC0CB1\"></a></span>You can execute a query by using one of the predefined queries found in the spreadsheet\'s\n\
               Query menu, or you can choose <span class=\"MenuCascade\" id=\"GUID-E9C37FA0-8612-4090-95F6-758E9C7826DF\">Query</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-6B6AB017-245E-4383-9BA8-697880546AA6\">Open</span> to load a query file you have created.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A787F9EA-3D12-44EB-863B-4423BF25A4C4\"></a></span> Once you have executed a query and the spreadsheet displays the data you have requested,\n\
               you can further organize the information by sorting the table. Right-click any column\n\
               heading to sort the table entries based on the column\'s entries. To return to the\n\
               default sorting as defined in the .query file, choose <span class=\"MenuCascade\" id=\"GUID-B02EA62D-36FD-4B08-B05B-66EAF4CE0F5D\">Query</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-92A3F6FC-F0F8-4229-BAEA-7C4769466DE4\">Sort</span> from the spreadsheet menu.\n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0006\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9949B556-B1D4-4200-97F6-0EF60A339677\"></a></span> How the Spreadsheet Works\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B35502CE-F7DF-40F3-B6EA-62B1316225E9\"></a></span>The Softimage spreadsheet builds the content of the spreadsheet using scripting, which\n\
               gives you a lot of flexibility with the type of information you can display.\n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0007\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-5F966C29-1ABA-4480-8917-FB9B19AB7819\"></a></span> Types of Queries\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C35007E8-4A36-4938-B331-C7D7FEEFDC98\"></a></span>There are two types of queries:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-780DD4EB-D2AB-40E2-A0F0-BED10B3D58FA\"></a></span>The <em class=\"strong\">single level query</em> filters certain types of elements from the scene, and display a information about\n\
                        them (for example the Geometry query).\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3BAD0F25-B0A2-44BD-8C56-4BE17BDA9E88\"></a></span>The <em class=\"strong\">relational query</em> shows the relationship among different scene elements, such as showing all of the\n\
                        clusters that exist on all of the objects in a scene, or showing the textures and\n\
                        their object owner.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0008\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-727A2FE2-EC89-4029-9874-F2A560D93105\"></a></span> Types of Cells\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6A6707C-519C-4341-861B-0A2DB6AEB94E\"></a></span>Each cell in the spreadsheet can show two main types of information:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-51FBD0E9-7D7F-4BE5-9285-E1D4B7728114\"></a></span> <em class=\"strong\">Softimage parameters in what are called <em class=\"mild\">GetValue/SetValue</em> cells</em>. These cells display the value of a parameter that already exists within Softimage\n\
                        (whether native or custom parameters), and that are accessible to standard GetValue\n\
                        and SetValue calls in scripts. These cells are automatically handled by the spreadsheet\n\
                        as long as you identify which parameter to display.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D95A858F-5FC9-4427-87FF-AEAFF6A6D7B7\"></a></span> <em class=\"strong\">Custom information in scripted cells</em>. The information displayed in these cells is computed by a custom script, which allows\n\
                        you to compute certain custom measurements and display them. These cells are read-only.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0009\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-26C09153-6577-4376-83FA-9FDD219D2E41\"></a></span> The Components of a Spreadsheet Query\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D0ED595-8A3C-43C0-BE9C-2CB05BC83286\"></a></span>A single level query is described using three elements:\n\
            </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F7A81641-9646-44F3-AE6E-897C2AC7FC7B\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA878370-761F-46F3-A1BF-82A8218F927B\"></a></span>A script function that tells the spreadsheet which scene elements to show on each\n\
                     row.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB969E07-AD59-4402-8618-D60FB49300AD\"></a></span>A script function that defines the columns that show the information for each row.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F11FECC-B009-4589-AEF0-9B33937063F3\"></a></span>A query file that tells the spreadsheet which script to call for rows and columns\n\
                     (and where to find these scripts). This is the file that gets opened when you choose\n\
                     <span class=\"MenuCascade\" id=\"GUID-5159B39C-8580-4B24-A0A3-601B491807AE\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-1BA67032-82AC-457B-A537-362CFBD3EEA8\">Open</span> or when you run preset queries within Softimage.\n\
                  </p> \n\
               </li>\n\
            </ol> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F286F078-E7FF-4790-A82E-8FC56A7DC2AF\"></a></span>Separate row and column scripts are very useful as they allow you to reuse one or\n\
               the other in different queries. For example, there\'s a row script called <em class=\"mild\">Current_Selection</em> that is used in a few of the preset scripts and that you can use for your own queries\n\
               if you need to display all of the selected elements. All spreadsheet query scripts\n\
               must return elements in the form of an array.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4BE97E86-6144-46F3-A036-2E53785BF59C\"></a></span>A relational query will have the same elements as the single level query, but with\n\
               the addition of two scripts.\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-19D8B6F0-98FE-4DCB-A65C-38C1B833C4B4\"></a></span>A relation association script, which determines, for each row, the associated items.\n\
                     This script defines the second-level of rows (for example, a list of clusters for\n\
                     each of the selected elements). There can be only two levels in Softimage, that is,\n\
                     only one relation per query.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D5DE6F31-BA6C-4060-BB9B-E8B73C0F3501\"></a></span>A column definition script, much like for single-level scripts, which defines what\n\
                     columns to display for the elements that are displayed at the second-level of the\n\
                     query.\n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";