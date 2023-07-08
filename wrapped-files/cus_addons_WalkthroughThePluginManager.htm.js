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
      <meta name=\"topicid\" content=\"GUID-1B2709CB-AED8-4052-B6BC-86C079EED6D6\" />\n\
      <meta name=\"indexterm\" content=\"commands: creating from the Plug-in Manager\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: creating: commands\" />\n\
      <meta name=\"indexterm\" content=\"toolbars: creating from the Plug-in Manager\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: creating: toolbars\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: creating folders\" />\n\
      <meta name=\"indexterm\" content=\"tools: distribution (add-on packages)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Walkthrough: The Plug-in Manager</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1B2709CB-AED8-4052-B6BC-86C079EED6D6\"></a></span><div class=\"head\">\n\
            <h1>Walkthrough: The Plug-in Manager</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-066101C1-70B8-401E-9ED7-D5A594427982\"></a></span>This walkthrough shows how to use the Plug-in Manager to create plug-ins in a workgroup.\n\
               Steps include creating a new workgroup, creating a custom command, creating a toolbar,\n\
               and creating an Add-on directory. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0017\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A57D3DA9-CE45-4690-899E-A898706BA1AC\"></a></span>Create a workgroup\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"GUID-EB5A3FFE-139F-468E-9D2A-BDFF1BDBE568\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-47DFCB38-695C-4E38-AF18-BC87B963646E\"></a></span>In the Plug-in Manager, click the <span class=\"MenuCascade\" id=\"GUID-D7CB5C1D-F0B3-4D5E-BFCC-548FFD0AE4B7\">Workgroup</span> tab, and then choose <span class=\"MenuCascade\" id=\"GUID-73D0C4BE-58A1-4B31-BA30-FB7C7A8DAEE7\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-97B9E6F2-E220-4A50-99A2-E8F5E82E9988\">Create</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C10F876-FC3C-44DC-BAC1-589879A4876F\"></a></span> <img src=\"../images/GUID-980A6A3C-3F81-4558-A7C2-179E91F56BC9-low.png\" /> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D2A68E2-A9FF-41EA-929E-D6322054AD93\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-735D6B3F-31D2-4063-8877-C24BD36E3BD0\">Create Workgroup</span> dialog box \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_4829BE37EA3149DFB922825FDAE76068\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-61585776-F12D-4A04-AA37-28F3EB57DB1A\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-A9EB0CAD-1E5C-4C04-A9A0-D4BB82AD97FE\">Workgroup Folder Name</span> box, type a name for the workgroup. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5678671-61FA-4752-8E1A-F53576D22C72\"></a></span>Beside the <span class=\"MenuCascade\" id=\"GUID-036370C3-3689-43CF-A385-1DBAF16CCB54\">Location of Workgroup</span> box, click <img src=\"../images/GUID-9C395550-4D3B-45D0-BA13-1273A20DD935-low.png\" /> and locate the folder that will contain the workgroup. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-BAE1E396-6F55-4C1D-9A90-E78D8E41F95C\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-DCC449E3-25B1-48DD-B6F7-E9F772D3567F\">OK</span>. Softimage creates a folder structure for your workgroup that looks like this: \n\
                           </p> <img src=\"../images/GUID-4D519AC2-B77E-45D7-ABF2-E344C97CEFD1-low.png\" /> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-001B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FA6587E6-6550-40DF-BFCB-B6BC425C4B9E\"></a></span> Create a custom command\n\
               </h2>   <span class=\"anchor_wrapper\"><a name=\"GUID-9E685C52-2421-4A9C-AD31-D3A38A6497D3\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5BC554BF-6ADB-456F-A7FF-6E6E2FEE1F3C\"></a></span>In the Plug-in Manager, click the <span class=\"MenuCascade\" id=\"GUID-503D21D8-DDC7-4780-BADB-B5485E8A1A70\">Tree</span> tab. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-16911EF2-A659-4D74-B681-708703B3F9E0\"></a></span>Expand your workgroup, right-click the <span class=\"MenuCascade\" id=\"GUID-0F62E2BA-E7E9-4FEC-B534-E514DEBD98EE\">Plug-ins</span> folder and choose <span class=\"MenuCascade\" id=\"GUID-8B641DA3-8A90-4613-94DB-E03CE61D4EC6\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-BD70D99C-D3A0-47F4-8615-4290EA3CEC8C\">Command</span>. \n\
                     </p> <img src=\"../images/GUID-28D8BCB1-EB82-4CF8-8C06-6356F72F8966-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-68A48548-3044-4B71-AC3C-248CDA966B83\"></a></span>In the <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds_wizard.htm\">Command Wizard</a></span>, click <span class=\"MenuCascade\" id=\"GUID-989EAB4B-6EDC-4963-9958-B68AA84AC3A8\">Generate Code</span> to generate the custom command \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-784D2436-A017-4EE9-AD63-BF5DCF7A8BAA\"></a></span>The plug-in and the custom command appear in the Plug-in Tree under the workgroup\n\
                        Plug-ins folder: \n\
                     </p> <img src=\"../images/GUID-405D5EE2-A98E-4756-9B1B-053AD6898D42-low.png\" /> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9CB51EAB-7E6A-4BB7-8C29-9B828F4C5D86\"></a></span>The generated code is put in the Application\\Plugins folder of the workgroup. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1B9DC64-8947-4E73-9D91-EE68A812E45E\"></a></span>If you chose a scripting language, the generated plug-in is automatically loaded and\n\
                        executed. Then, no matter what language you chose, the generated code is opened in\n\
                        a script editor. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-003A1650-98B1-4C6F-9724-B10B0A4CF2C5\"></a></span>To manage the plug-in (for example, to unload it, remove it from the cache, or delete\n\
                        it), right-click the plug-in: \n\
                     </p> <img src=\"../images/GUID-43A5AB7D-77B8-4EB1-82B9-F55BDDBB7290-low.png\" /> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B4DD99D8-18F2-41C7-ACDD-483E5D49A608\"></a></span>Note that if you edit a plug-in in the script editor, Softimage automatically reloads\n\
                        (updates) the plug-in when you save your changes. If you use an external editor (for\n\
                        example, to edit and recompile a C++ plug-in), you can use the <span class=\"MenuCascade\" id=\"GUID-02D14B99-47A1-49AF-85A5-E8C827BCD147\">Update</span> command in the context menu to reload the plug-in. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C048E52-2A05-4B53-BEF6-E64CCB34CBB6\"></a></span>If the plug-in had a help file, the context menu would include a <span class=\"MenuCascade\" id=\"GUID-167A7EBC-250F-4827-BC3C-DB3BC9FF6BE2\">Help</span> command. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8B6466F-6F58-4272-8B50-BD68361A9EC2\"></a></span>To run the command, expand the plug-in, right-click the command and choose <span class=\"MenuCascade\" id=\"GUID-4CBFF865-9A70-4E71-BA66-B92D6E544CD5\">Invoke</span>. \n\
                     </p> <img src=\"../images/GUID-E2247A51-B461-4CE6-913E-146F8FAE7B9B-low.png\" /> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2CE190E-9DA5-4970-816F-197D4ECADB10\"></a></span>Of course, you can easily run a command from the script editor. For custom properties,\n\
                        however, the Plug-in Tree provides a quick way to create an instance of the property\n\
                        on the scene root: just right-click the property and choose <span class=\"MenuCascade\" id=\"GUID-B642822A-28B2-4178-8C0E-852DAE58ADB3\">Create Property</span>. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0020\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2BA317AF-5DC9-402B-BB9F-47B6E592CBE8\"></a></span> Create a Toolbar\n\
               </h2>   <span class=\"anchor_wrapper\"><a name=\"GUID-448C6FF3-7E24-4983-934D-0DEE7993D800\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F656F282-279A-43EB-A7EC-3E69755A3366\"></a></span>Under your workgroup, right-click the <em class=\"strong\">Toolbars</em> folder and choose <span class=\"MenuCascade\" id=\"GUID-08BE1D6C-E83B-45E2-ADF4-A4F656666CA0\">New</span><img src=\"../images/ac.menuaro.gif\" /> Toolbar. \n\
                     </p> <img src=\"../images/GUID-7D1A2AD5-0EBE-405B-ACC2-BF983F6094A0-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-645A298A-1DB5-4F3F-B51A-1A6DE80785A8\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-7F239015-4AF0-4DD7-AD58-3716EAB94B29\">Toolbar Wizard</span>, type a name for the toolbar and then click <span class=\"MenuCascade\" id=\"GUID-074FF761-7912-427D-9816-AEE6F6DE08BD\">OK</span>. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EBDF9BF1-39C0-46F2-A23F-A29E63B6E3D3\"></a></span>The wizard creates a new toolbar and opens it, and loads the toolbar .xsitb file into\n\
                        a script editor. The new toolbar is also added to the <span class=\"MenuCascade\" id=\"GUID-861EA2B5-2CCF-4A45-8D9E-2607CED53962\">View</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-A9C5C8A9-AC60-4EED-877F-6B7C0370CB61\">Toolbars</span> menu in the Softimage menu bar. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-20EFE8BF-379A-4B3A-AD33-689C6C467DEA\"></a></span>Note that the toolbar already includes a button for the command you created. If you\n\
                        create more commands in the workgroup, you can add them to the toolbar by dragging\n\
                        them from the Plug-in Tree to the toolbar. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE0D1BD6-F0FC-48ED-B910-DAB3BF475AEE\"></a></span> <em class=\"strong\">Notes</em> \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_8A0CD03A618645BEB2EFEAF1B8890EAC\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4399208D-F399-4460-9A16-3FCA42FA25A7\"></a></span>To edit the .xsitb file, expand the <span class=\"MenuCascade\" id=\"GUID-726C7484-532B-40EF-AE68-8542557AFF0E\">Toolbars</span> folder in the Plug-in Tree, right-click the file and choose <span class=\"MenuCascade\" id=\"GUID-2CB14E21-BD04-481E-893D-C029D49728C5\">Edit</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4AE64A68-354C-42A6-B6CA-5B0FD1739BD1\"></a></span>To open a toolbar, double-click the .xsitb file in the Plug-in Tree. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0022\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D7249943-A575-4AFD-8B6D-6CB45F672B7B\"></a></span> Create an Add-on Directory\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-222BA4C2-FCCB-4C85-BB5F-BBB9C5E0BD18\"></a></span>As you create more plug-ins in a workgroup, you may find your Application\\Plugins\n\
                  folder getting rather cluttered. If you want to separate the source code for different\n\
                  plug-ins, you can create an Add-on directory for each plug-in. An Add-on directory\n\
                  is located in the Addons folder of a workgroup. Each Add-on directory has its own\n\
                  Application and Data folders. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-772ECFCE-6CF6-4614-858B-92A6A5D69F50\"></a></span>Using Add-on directories also simplifies the process of packaging an add-on for distribution.\n\
                  \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-49DE8C00-AABE-4CA8-8CCE-FA8331EFE1F8\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D5F83309-78DD-4216-A691-1CDD24AE6B75\"></a></span>In the Plug-in Tree, right-click your workgroup and choose <span class=\"MenuCascade\" id=\"GUID-9DEA6FFA-8909-49E3-BCC3-A3D36E1D71F3\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-188F979D-A97C-48E8-BE28-449E122F57FD\">Add- Directory</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-44B9FA52-F7B7-4D1D-BD3D-0B077280C951\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-4F49D929-E890-4AE1-A253-B3D52031A63C\">Create Add-on Directory</span> dialog box, type a name for the add-on. This name must be a valid name for a folder.\n\
                        \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8E31F69-F8D2-4B9E-BA8A-8CC81C23FBBA\"></a></span>In the Plug-in Tree, a new Addon folder node appears under the workgroup. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-17497D31-F96B-4592-814F-66856E28B83F\"></a></span>Expand the Addon folder, and then drag the plug-in from the workgroup to the Plugins\n\
                        folder in the Add-on. \n\
                     </p> <img src=\"../images/GUID-92B3F118-7A2F-41E1-A21B-4FDBE8E01B9A-low.png\" /> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-391C54A8-E227-4345-955B-0F4E361A4CF1\"></a></span>This moves the plug-in from the workgroup Application\\Plugins folder to the Application\\Plugins\n\
                        folder in the Add-on directory. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DACC90C-3069-474A-B008-DB17DEE74E14\"></a></span>If you want, you can move the toolbar the same way: drag the .xsitb file from the\n\
                        workgroup to the Toolbars folder in the Add-on. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2BC00C3E-B770-4FC7-9C04-86FA1DE763EF\"></a></span> Package an Add-on for Distribution\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCE91385-7CA3-419D-A9C8-9ED85F5261FE\"></a></span>If you need to distribute an add-on to people who cannot access your workgroup, you\n\
                  can easily package everything in an Add-on directory into an .xsiaddon file. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-531341CD-B6FE-40C4-9BB0-B74B1A2E2FF3\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0FE8ACED-4C6F-4FF3-9B86-B0481AF043AB\"></a></span>In the Plug-in Tree, right-click an Add-on and choose <span class=\"MenuCascade\" id=\"GUID-785704FC-CCD4-42A0-BCC4-DFA1465161D1\">Package Add-on</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-82CBBD9E-7079-4D88-975E-4958E6743856\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-1FE5F522-DB03-4B90-A929-22825E61F165\">Package Location Options</span> dialog box, set the packaging options: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_DDF7C7A7176E40E089C523594A093E15\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-07BD8329-48DB-4D8C-9FBE-A53AD89634E3\"></a></span> <em class=\"strong\">Source</em> is the location of the Add-on directory. The .xsiaddon file will contain everything\n\
                              under the source folder. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-9018BA96-CDE6-4545-A0D9-3CAB4BFAC562\"></a></span> <em class=\"strong\">Destination</em> is where the .xsiaddon file will be created. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-56C47E65-0A12-49DE-B982-8DA6EDD423A9\"></a></span> <em class=\"strong\">Directories</em> to Exclude is a semi-colon (;) separated list of folders that you do not want to\n\
                              include in the .xsiaddon file. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";