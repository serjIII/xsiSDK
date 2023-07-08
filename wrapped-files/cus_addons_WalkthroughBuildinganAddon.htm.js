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
      <meta name=\"topicid\" content=\"GUID-82CF083C-5F49-4857-99CF-CC95CF528DC9\" />\n\
      <meta name=\"indexterm\" content=\"workgroups: setting: from the Plug-in Manager\" />\n\
      <meta name=\"indexterm\" content=\"Plug-in Manager: creating: workgroup folders\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: help files\" />\n\
      <meta name=\"indexterm\" content=\"help files: adding to add-on packages\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: adding contents to package\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: drag-and-drop editing\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Walkthrough: Building an Add-on</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-82CF083C-5F49-4857-99CF-CC95CF528DC9\"></a></span><div class=\"head\">\n\
            <h1>Walkthrough: Building an Add-on</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3B4A1C4-1E36-4E17-B5EA-AA8201CFF688\"></a></span>This walkthrough shows an easy workflow for working with add-ons and .xsiaddon files.\n\
               In this walkthrough, we\'ll build a tool named <span class=\"code\" translate=\"no\">MyTool</span> and distribute it as an .xsiaddon file. The actual content of MyTool is not what\n\
               is important; what\'s important is the workflow. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0042\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8B71B2C0-0595-46B1-967D-77BF29563976\"></a></span> Create a workgroup\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E96FD85C-251B-49D4-8203-531B72B01BBB\"></a></span>You can build add-ons in the User location, but the recommended location is a workgroup.\n\
                  As you will see, it is easier to test an .xsiaddon if the original add-on files are\n\
                  located on a workgroup. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DCF1B844-39B6-4255-92EE-CAD5D4B52747\"></a></span>Workgroups are often shared by many users, but for tool development, it\'s better to\n\
                  work in a private workgroup, which can be either on the local machine or a network\n\
                  share. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C55D2707-92FF-4195-8813-43170BDE9C4C\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E59AB08-EBF6-4E16-B0FD-3974BC61B68D\"></a></span>In the Softimage main menubar, choose <span class=\"MenuCascade\" id=\"GUID-16DAC4D8-7CF2-4EE2-90BB-F5EA77500645\">View</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-3C12F058-657B-4CF3-98DE-2D1F428FEC78\">Layouts</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-626A40AC-BE53-40BA-A0E1-544B12C9E3B0\">Tool Development Environment</span>. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C9CBD39F-167A-4D28-A926-76F2132ABD64\"></a></span>The Tool Development Environment is a layout that combines many of the most-used Softimage\n\
                        development tools, such as the Plug-in Manager, script editors, the SDK Explorer,\n\
                        and NetView. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-05BBA32D-392F-4C9B-903C-98FCA1EA5C51\"></a></span>In the Plug-in Manager, click the <span class=\"MenuCascade\" id=\"GUID-626ABE02-7DF7-4110-9AE3-21FBBB331342\">Workgroup</span> tab, and then choose <span class=\"MenuCascade\" id=\"GUID-D31192A2-1958-418B-B86A-A84D745D1169\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-B69E9437-9EE9-431F-909C-B8959320BD44\">Create</span>. \n\
                     </p> <img src=\"../images/GUID-980A6A3C-3F81-4558-A7C2-179E91F56BC9-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF2154CB-5149-4DC4-BCEB-B74C0546B1EC\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-10CD118D-9F0F-4941-AD01-AA8687EBF889\">Create Workgroup</span> dialog box: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_BDB7EE1C1BEB4CA3838324D49379E9BE\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B0DD696-E0B1-4137-B4F7-9CFC576D85A1\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-C4D7AB01-CA55-4F6B-BAC4-2726549502DC\">Workgroup Folder Name</span> box, type a name for the workgroup. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-BC19FC70-1796-488C-B76F-338FA76D9588\"></a></span>Beside the <span class=\"MenuCascade\" id=\"GUID-E5CD2401-830C-4018-95E1-9ED4CEBDCC0C\">Location of Workgroup</span> box, click <span class=\"MenuCascade\" id=\"GUID-D62D88CA-D8BC-4B69-A00B-765DFD82B3E1\"> <img src=\"../images/GUID-9C395550-4D3B-45D0-BA13-1273A20DD935-low.png\" /> </span> and locate the folder that will contain the workgroup. \n\
                           </p> <img src=\"../images/GUID-1AC954D0-D36C-4041-AD1C-056FDADD467C-low.png\" /> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC3E39E1-B30D-47C4-96AD-84424CC7C768\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-2E5F69BA-45B4-4C82-B824-84F88B2D5431\">OK</span> to create the workgroup. Softimage automatically connects to the workgroup, and the\n\
                        workgroup appears in the plug-in tree. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0046\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E285965D-CF0C-4298-BBA0-BC618B830384\"></a></span>Create the Add-on Directory\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EDD90A7E-BA84-4BDF-84CF-E272F3DCB437\"></a></span>If you intend to distribute a tool, we recommend you create an Add-on directory in\n\
                  your workgroup. This separates your files from any other content in the workgroup,\n\
                  and makes it easy to package the .xsiaddon file. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-59EC2157-CC6B-4C87-87DD-665996F2178B\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-16F3356D-BB70-483C-ACBB-B7FE0C026485\"></a></span>In the Plug-in Tree, right-click your workgroup and choose <span class=\"MenuCascade\" id=\"GUID-DB31F760-9BB9-4788-9170-0C06FE0B051B\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-89478E27-F425-4F63-ADB8-96916AF52338\">Add- Directory</span>. \n\
                     </p> <img src=\"../images/GUID-EB5FF5D9-E116-40D5-B517-9CC93539E35D-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5143BC20-5D91-4364-A6D8-7464351E8B3D\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-72F499D2-FE82-46F8-8EBC-C4B30D763C8D\">Create Add-on Directory</span> dialog box, type \"MyTools\" as the name for the add-on. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E95DC0CE-7EC8-47DB-95F7-012380DD72A2\"></a></span>In the Plug-in Tree, a new Addon folder node appears under the workgroup. \n\
                     </p> <img src=\"../images/GUID-22E77639-5B9B-4E19-8C50-4E23463E9516-low.png\" /> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0049\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DAF51890-3846-4499-8D80-34077E1BA31D\"></a></span> Add Help for the Add-on\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-22129493-1C0A-4CDC-948D-C5B6336413DB\"></a></span>Softimage includes a convenient workflow for establishing Help files and contact information\n\
                  for the Add-on. By using a standard naming scheme for the help files Softimage is\n\
                  able to offer context-sensitive help for custom tools just as it does for internal\n\
                  features. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5AA2D74B-8E64-4F03-8E43-133B423C3E5D\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-09AF229A-E400-41C6-9F90-7DF9335CD982\"></a></span>In the Plug-in Tree, right-click the MyTool add-on and choose <span class=\"MenuCascade\" id=\"GUID-758B384B-8587-4CC3-A7A9-053CE012979E\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-14AB223F-CB6B-4557-AF95-5924194DD70B\">Add-on Help</span>. \n\
                     </p> <img src=\"../images/GUID-24807DE1-F86F-4D0E-8832-B91E4775536D-low.png\" /> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8248AF25-135C-4AC5-A362-D2C967AC5AB2\"></a></span>The <em class=\"strong\">Add-on Documentation Wizard</em> appears. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AD5F55D6-DFC5-4755-9843-921BD0DD0B25\"></a></span>If you want to see examples of add-on help pages, click the <span class=\"MenuCascade\" id=\"GUID-34E0D75F-49E8-4E58-BF16-1A4B956F4FE4\">Help</span> tab and then click <span class=\"MenuCascade\" id=\"GUID-08F5433B-2B25-49E0-B96E-4956C396E8DA\">Show Me</span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6EB3100D-971A-4763-8D82-A4B6B7313A5F\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-154223CA-DFAB-46F4-ABF1-21F04BC7FFB0\">Description</span> box, type some a brief description of the add-on. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-88D8755E-2169-4517-9CB6-3FFB91CC9033\"></a></span>This short description is displayed on the add-ons page of XSI Local, and is inserted\n\
                        into the add-on help page (an HTML file). \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A29A805A-FC50-44BD-975D-54BED8096D37\"></a></span>Use the default image and template. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C974A9C-1060-4769-9D1F-CFC153CA901B\"></a></span> <em class=\"strong\">Image</em> is a 56x56 JPG file that is used as an icon for the add-on. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-25074E4F-3DC8-4FE4-92B3-3EDE90A34CDA\"></a></span> <em class=\"strong\">Template</em> is a simple HTML page. The wizard replaces the tokens %DESCRIPTION% and %ADDONIMAGE%\n\
                        with the description and image specified in the wizard. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED1A38D4-29A7-4A40-8C0A-FF296FB68B73\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-7C364910-A880-43A9-BF51-F2328EC3A181\">OK</span> to generate the help page. The wizard will open the html file in a text editor, allowing\n\
                        you to add more details to the description of your add-on. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B63C3544-504F-4590-8F3B-871F90935FBF\"></a></span>The wizard does not modify the plug-in source code. The add-on help is not specified\n\
                        by setting the Help property of the plug-in or plug-in items. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BA255D30-F2EA-4C0A-B6D1-7F8022D5F713\"></a></span>Instead, the wizard generates four files in the Add-on directory: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_BF3F32FA66E94FE4B46410875C80372B\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6EC1520-632A-4542-96B8-1E25F62DA275\"></a></span>netview_&lt;Addon&gt;.htm \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-274CB33C-7E00-46C9-B11B-334C9E0EA4FF\"></a></span>netview_&lt;Addon&gt;.jpg \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-7E3A6150-B4E2-49C6-97CF-5171D13F2549\"></a></span>netview_&lt;Addon&gt;.txt \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-29962663-6D8A-44F1-BDBB-B707269D2503\"></a></span>netview_&lt;Addon&gt;.xml \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A41D2DE-8090-4A43-9CDC-FEA8B508F728\"></a></span>Softimage looks for these files and, if they exist, uses them as the add-on help.\n\
                        See <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_AddonDocWizard.htm\">Documenting Add-ons</a></span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3CBBED30-EDE3-4C77-BDC4-9282C3E038F0\"></a></span>To view the help, do one of the following: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_1254CA47E18A40C89F5D5D0E06D79551\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-28B1109D-94D2-4BFC-AD58-B9335DB7C474\"></a></span>In the Plug-in Tree, right-click an Add-on and choose <span class=\"MenuCascade\" id=\"GUID-E4EE10D8-322F-446F-B976-7757E5BC4011\">Help</span>. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-80AE5EB6-6AFF-421A-A2FC-B142DEE642B3\"></a></span>In NetView, go to the add-ons page of XSI Local. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAE1886D-FE9D-45F5-B096-7698EF01F969\"></a></span>If the add-on includes a self-installing property, then in the property page, click\n\
                              the <em class=\"strong\">?</em> icon in the title bar. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD237F67-AC6B-4BBA-92CE-64A2909FB4BF\"></a></span>The generated help files do not appear in the plug-in tree, but you can easily access\n\
                        them by choosing <span class=\"MenuCascade\" id=\"GUID-50784C94-3CE7-45D4-BA01-6473D3B90E06\">Browse</span> from the Add-on context menu: \n\
                     </p> <img src=\"../images/GUID-35CA2CA8-3FB4-46E7-8B8A-9312CA6EE5AD-low.png\" /> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1893C592-7BE2-41E4-A754-9325ED8B3DF0\"></a></span>The browser shows the folders and files associated with the MyTool addon, which so\n\
                        far consists only of the documentation files. \n\
                     </p> <img src=\"../images/GUID-95F22FFD-64BF-4677-BBFE-0FFCEA57744B-low.png\" /> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-004D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0D2ED9F3-E0E3-4BED-B245-114579F306B4\"></a></span> Create Add-on Content\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FE8065F2-38A8-40A4-8B58-BEB6FCE922F5\"></a></span>An add-on can contain any number of self-installing plug-ins, shaders, toolbars, scripts,\n\
                  images, and other content. Basically, any Softimage customization or auxiliary file\n\
                  can be included in an add-on (the SDK example workgroup provide some good examples\n\
                  of possible add-ons). \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-004E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-54FCE59A-E3A4-41AD-805D-543CD508E561\"></a></span>Generating content with wizards\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A33312B8-5025-4365-86B8-346A332640B6\"></a></span>Softimage includes wizards for generating self-installing plug-ins such as shaders,\n\
                     commands, operators, properties, and events. For example, to generate a self-installing\n\
                     command in an Add-on directory, right-click the Plugins folder in the add-on and choose\n\
                     <span class=\"MenuCascade\" id=\"GUID-D44FBB6F-9251-49D6-A031-062299467BEE\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-7FC2D3B5-1627-4942-A2D6-37A0589043B6\">Command</span>. \n\
                  </p> <img src=\"../images/GUID-8E01E251-9454-447D-887C-01F25B4E014A-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-445D2491-ED04-44A2-A2A1-ACFC4EEE587A\"></a></span>Softimage also includes a wizard for creating toolbars. You can run this wizard by\n\
                     right-clicking Toolbars (for the Toolbar Wizard). \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0050\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-28A6910C-CC0D-4A1E-BD30-5706E4ED22B5\"></a></span> Moving content to the add-on\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6EEEBEE2-AEE5-4589-8C6A-411C609B33C2\"></a></span>Using the plug-in tree, you can drag plug-ins, toolbars, and views from another location\n\
                     to your add-on. \n\
                  </p> <img src=\"../images/GUID-539A1940-C1B3-490B-A829-D6260220E501-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5B3F54D3-E8B9-4B98-83E8-D19DB56CF9C8\"></a></span>You can also move files into the Add-on directory using Windows Explorer, a command\n\
                     prompt, or any other external file manager. The Plug-in Tree does not support every\n\
                     possible type of Add-on content, so for files like layouts, keymaps, and documentation,\n\
                     you need to move files through the file system. \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-30F85EE0-7DBE-4489-9ED7-1AF8349D47D1\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-25D9699B-7289-41A3-A665-DF9FFA4CC65E\"></a></span>When you add files to an addon, you must put the files in the correct folders. Softimage\n\
                           finds files by looking in specific sub-folders of an Add-on location. For example,\n\
                           toolbar (.xsitb) files must be put in the <span class=\"filePath\" translate=\"no\">Application\\Toolbars</span> folder, so in this case, toolbars must be put in <span class=\"filePath\" translate=\"no\">C:\\XSITools\\Addons\\Foo\\Application\\Toolbars</span>. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0052\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AA92F46C-2C23-4421-A96A-B9E05DF7E8CF\"></a></span>Package the .xsiaddon\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9F861854-0BE5-4E86-86DC-427EF0510B0F\"></a></span>When you\'re ready to distribute your add-on, you have two choices: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_A5B0129E0CBC4B71A8EFD5522B1CF8DE\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A6BEDEA2-1E82-48A1-BCEA-001CB72E1B5F\"></a></span>If the add-on is for internal usage within your company, you can distribute the add-on\n\
                        by copying it to a shared workgroup location on the network. You can do this using\n\
                        an external file manager such as Windows Explorer. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-77C8E2D3-3F3E-4297-B0BE-B6E27F9E3A60\"></a></span>If the add-on is to be distributed to external users, who do not have access to the\n\
                        same network, then you use an .xsiaddon file. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7BA66A59-4A5D-4609-BE90-15EE6B3FFE00\"></a></span>An .xsiaddon file is single file that contains a compressed version of all the files\n\
                  of an Add-on location. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C9C69D6C-2409-4984-88BD-0E0B19467561\"></a></span>Previous versions of Softimage had a Package Add-on dialog box that required you to\n\
                  add files one at a time. This dialog is still available, but now there is an easier-to-use\n\
                  Package Location option. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD65CE3B-3C63-4635-8339-571A9DBF0485\"></a></span>Before you package an add-on, make sure the add-on directory contains only the files\n\
                  and folders you want to distribute: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_9C031D74623949E0BEF824D866EC44E8\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-41083FCD-0026-4683-BED0-B85EB69B7F90\"></a></span>Delete any temporary files and folders. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-647736D2-CB8E-4D50-95DD-7F888655949E\"></a></span>Compile Release versions of any DLLS (not Debug versions). \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A41F410C-14E5-4035-BFC1-648203586866\"></a></span>Note that you can exclude directories when you create the add-on package. For example,\n\
                  if you keep any C++ source code in a separate folder, you can just exclude the folder\n\
                  from the package. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0053\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-25C2262E-BB5E-4426-ACE7-09E248481118\"></a></span>To package the add-on\n\
                  </h3> <span class=\"anchor_wrapper\"><a name=\"GUID-5D00EC97-801F-4553-B5AB-9DB9B37A0EF0\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E732BB8F-B92F-466F-961E-6FA2D55A3B82\"></a></span>In the Plug-in Tree, right-click the MyTool add-on and choose <span class=\"MenuCascade\" id=\"GUID-1335C2CA-D6FA-4D0A-AFC8-0470B09E7DBB\">Package Add-on</span>. \n\
                        </p> <img src=\"../images/GUID-A40F4A26-3F66-47A2-9C52-8876507D2AC7-low.png\" /> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B397D05B-8E61-4ABD-A5D9-B2748413B67C\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-E2990B3E-54EC-405E-9236-273C45994A72\">Package Location Options</span> dialog box, set the packaging options: \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"UL_9FDDF6A8D6614B1EB3CC80082828556E\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6D917466-9329-482D-BEF2-602433BE6910\"></a></span> <em class=\"strong\">Source</em> is the location of the Add-on directory. The .xsiaddon file will contain everything\n\
                                 under the source folder. \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C3EBB9C-B7DE-4569-86A3-54B6FE337F9B\"></a></span> <em class=\"strong\">Destination</em> is where the .xsiaddon file will be created. You may want to add a version number\n\
                                 to the file name, since .xsiaddon files do not support versioning. \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B4BE021-237B-4941-813D-1EC08D1796DF\"></a></span> <em class=\"strong\">Directories</em> to Exclude is a semi-colon (;) separated list of folders that you do not want to\n\
                                 include in the .xsiaddon file. \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF263F6D-26DA-49F8-A086-AA3A120B1A0D\"></a></span> <em class=\"strong\">Author</em> and <em class=\"strong\">Description</em> are optional. Information entered here is saved in netview_MyTool.xml, and reused\n\
                                 each time you repackage the add-on. The information is also displayed on the <em class=\"strong\">add-ons</em> page of XSI Local. \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-DBEFE496-4A45-4D59-97CA-26A3EFF6E344\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-2565367C-E2C1-4EC6-9618-2CD0DEF48000\">OK</span> to generate the .xsiaddon file. If the file contains .dlls or other large content\n\
                           it may take a few minutes to generate the output file. \n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3795DC8-18ED-424F-802C-535B66AAE64E\"></a></span>The .xsiaddon file is an xml file, so it is possible to view its contents and even\n\
                           make minor modifications, such as filling in the Usage or Platform information. \n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0055\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E8560326-D063-4E9F-B984-6632B8D8095D\"></a></span>Test the add-on\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9AB0698-AA74-4415-AE6E-6A06B1B36423\"></a></span>To test the .xsiaddon, you could move it to a different computer or ask someone to\n\
                  try it, but you can also do it on your own computer. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-1A8DD37E-2C0E-4D22-8520-36F6C5A29B50\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F5FDCD32-8979-44E5-A687-1D7B9F1EC643\"></a></span>Remove the original MyTool from memory, to avoid conflict errors and other confusion.\n\
                        Because the add-on is in a workgroup, all you have to do is unload (disable) the workgroup.\n\
                        \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F47CF44D-D503-4F55-8FF9-576D818D2D3F\"></a></span>On the <span class=\"MenuCascade\" id=\"GUID-9C333CBB-51D6-4C3E-829D-3DB6E816DC5C\">Workgroups</span> tab, clear the check box beside the XSITool workgroup. \n\
                     </p> <img src=\"../images/GUID-DB6F1AFF-8F01-494B-890E-3CC317D7E057-low.png\" /> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0094B2AF-CD1F-4155-B6D8-5E280EEBD8BD\"></a></span>This unloads the self-installing plug-ins and other content of the Add-on. Note that\n\
                        some less-common workgroup files, such as keymaps and layouts, are not unloaded until\n\
                        Softimage is restarted. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BA5614AD-716F-4A04-97C4-4BA8D65AA2FA\"></a></span>Install the MyTool add-on in the User location or in another workgroup location. Right-click\n\
                        the location and choose <span class=\"MenuCascade\" id=\"GUID-ABA4FE44-37B8-4086-B447-FFAF9C94A34B\">Install .xsiaddon</span>. \n\
                     </p> <img src=\"../images/GUID-CA69563A-9D65-4E6F-A64B-4192851176E4-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CFDBBEE-CCFB-409C-B6AA-88DD1AC55240\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-32EA9D32-DFBD-473E-8237-01D2A3C67CF6\">Select Add-on File</span> dialog box, locate the MyTool.xsiaddon file (it is in <span class=\"filePath\" translate=\"no\">C:\\My Documents\\XSITools\\Addons</span>) and select it. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C33AA5E-9220-4EF6-82EA-8FA33FB172DC\"></a></span>The add-on appears in the plug-in tree under the location where you installed the\n\
                        add-on. \n\
                     </p> <img src=\"../images/GUID-7E0CABB3-A615-49BD-BF96-E638BBE7CE8C-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8FE4A20-200C-4FD7-B4D9-6006F3F0CFB1\"></a></span>Now you can test the add-on. For example, make sure that all commands, toolbars, and\n\
                        other content work properly. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA2DBC9B-3162-4BEA-9C15-781A600F6B30\"></a></span>You should also check that your help works. \n\
                     </p> <img src=\"../images/GUID-7A99C607-86F4-48B7-96B0-BCD9485FF49C-low.png\" /> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-02C78154-70D9-44FB-9386-D1BB96C7A993\"></a></span>In NetView, click <span class=\"MenuCascade\" id=\"GUID-6A9DC604-028A-4AF5-98E9-9D5C9D38B914\">XSI Local</span> and then click <span class=\"MenuCascade\" id=\"GUID-65355484-3F28-4212-89DF-71484A3373EB\">add-ons</span>, and verify that your add-on is listed: \n\
                     </p> <img src=\"../images/GUID-EC88E133-1B21-4674-9473-3704C6D036CD-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C2520035-4110-4A89-966A-452934A1B0EA\"></a></span>When you finish testing, uninstall the MyTool add-on and reconnect to your original\n\
                        workgroup. \n\
                     </p> <img src=\"../images/GUID-A8D793B3-A409-4592-A107-67718E5DEB04-low.png\" /> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-005C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F946256B-2B8F-4285-ABD0-34641919856E\"></a></span>Repackaging the .xsiaddon\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8240102-33B3-487E-8876-AFAE1BA90F97\"></a></span>Any time that you modify or update a tool (for example, by adding new content or new\n\
                  features, or by fixing a bug) you need to repackage the .xsiaddon so you can redistribute\n\
                  it to your users. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D022C90-A16D-4BBA-B08B-4741284A3162\"></a></span>To repackage an add-on, just <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WalkthroughBuildinganAddon.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0053\">package</a></span> it again, but perhaps with a different file name. Repackaging takes just a few mouse\n\
                  clicks, because all the information you entered when you first packaged the add-on\n\
                  is automatically filled in when you repackage. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";