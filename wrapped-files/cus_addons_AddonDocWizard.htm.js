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
      <meta name=\"topicid\" content=\"GUID-6E3CADF6-88F1-469F-BC90-490B1466A2D1\" />\n\
      <meta name=\"indexterm\" content=\"wizards: creating add-on documentation\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: providing help\" />\n\
      <meta name=\"indexterm\" content=\"help files: providing for add-ons\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<addon-name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<addon-name&gt;\" />\n\
      <title>Documenting Add-ons</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6E3CADF6-88F1-469F-BC90-490B1466A2D1\"></a></span><div class=\"head\">\n\
            <h1>Documenting Add-ons</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2F3D4D0-F8FE-481A-B7A7-7D89DB450FDC\"></a></span> Workgroup add-ons can be \"NetView-enabled\", so that the add-ons are listed on the\n\
               <em class=\"strong\">add-ons</em> page of <em class=\"strong\">XSI Local</em>. Clicking an add-on opens an HTML help page for the add-on. <em class=\"strong\">The add-ons</em> page is a dynamic page that rebuilds itself every time you refresh the NetView window.\n\
            </p><img src=\"../images/GUID-E9DC2229-B4D5-4257-807B-2F7ED1E57AAD-low.png\" /><div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0066\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-91248575-C87A-46F8-A8DC-1EE5D5650D46\"></a></span> To generate help for an add-on\n\
               </h2>   <span class=\"anchor_wrapper\"><a name=\"GUID-DBFD57F6-A182-4B4C-907C-C45FAE07C0B3\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B4E74AC6-5F05-4DE2-AAC8-74B7A9161B8E\"></a></span>In the Plug-in Tree, right-click an Add-on and choose <span class=\"MenuCascade\" id=\"GUID-02A18551-AA05-4CB3-9AA8-8E3D03590869\">New</span><span class=\"MenuCascade\" id=\"GUID-A7CA6BB6-EB4F-4D63-8D7C-445658BB216A\">Add-on Help</span>.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CF4846C8-DA34-47C6-B743-7C5AA6E5662B\"></a></span>The <em class=\"strong\">Add-on Documentation Wizard</em> appears.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-60285ACA-CD59-4A2D-A83A-BE0E6CFE52F2\"></a></span>Type a brief description and click <span class=\"MenuCascade\" id=\"GUID-0ADFA694-FB69-4D39-9658-1DAFF0572439\">OK</span>.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3EDFA991-80EC-4BBE-B9EC-9D3D0BE75139\"></a></span>If you have a JPG icon for the add-on, click <span class=\"MenuCascade\" id=\"GUID-6523C7BB-0AE1-4B95-B812-6FBC79001EFF\"> <img src=\"../images/GUID-9C395550-4D3B-45D0-BA13-1273A20DD935-low.png\" /> </span> beside the <span class=\"MenuCascade\" id=\"GUID-D5EFE83F-69EF-4F5A-AF4E-43AA8988C7D7\">Image</span> box and locate the icon.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C233C5DC-F274-4FC6-AEDE-3E60F895F27D\"></a></span>The wizard uses an HTML template to create the HTML page for the add-on. The HTML\n\
                        template contains the tokens <span class=\"code\" translate=\"no\">%DESCRIPTION%</span> and <span class=\"code\" translate=\"no\">%ADDONIMAGE%</span>, which the wizard replaces with the description and image specified in the wizard.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-13EC62DD-D3E6-4B79-B2E8-7FE1A55129E5\"></a></span>If you have a customized version of the template, click <span class=\"MenuCascade\" id=\"GUID-E22A4C61-783C-403B-A518-2ECF63A1BBF8\"> <img src=\"../images/GUID-9C395550-4D3B-45D0-BA13-1273A20DD935-low.png\" /> </span> beside the <span class=\"MenuCascade\" id=\"GUID-9F0830A9-053F-4FA3-B38D-A0D95C2DB692\">Template for html</span> box and locate the template.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D96F8216-226F-40A9-8ED8-40705B19F888\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-AEC1525B-6D77-44B7-A22C-941E8E216A46\">OK</span> to generate the help page. The wizard will open the html file in a text editor, allowing\n\
                        you to add more details to the description of your add-on.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8A01380-BE3D-4BDC-A5D0-D1720E9877D4\"></a></span>The wizard does not modify the plug-in source code. The add-on help is not specified\n\
                        by setting the Help property of the plug-in or plug-in items. Instead, the wizard\n\
                        generates four files in the Add-on directory. Softimage looks for these files and,\n\
                        if they exist, uses them as the help for the add-on (and for any self-installing plug-ins\n\
                        included with the add-on).\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-31C57EE8-262D-4C9A-BE4F-0DD9D59FBA24\"></a></span> <span class=\"MenuCascade\" id=\"GUID-127E8C71-3BA5-4C1B-8733-D0B4D7B2B139\">netview_<span class=\"keyword\">&lt;addon-name&gt;</span>.jpg</span> is the icon displayed on the add-on page in NetView.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE3DF6EC-BCD0-4FB9-B7B3-39C822C79E1D\"></a></span> <em class=\"strong\">netview_<span class=\"MenuCascade\" id=\"GUID-45A872E2-3017-41E7-9995-8F6D990E21D2\">&lt;addon-name&gt;</span>.txt</em> is the brief description displayed on the add-on page in NetView.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-43323D92-C817-423F-8102-751E9593E7AE\"></a></span> <em class=\"strong\">netview_<span class=\"MenuCascade\" id=\"GUID-7B93EC70-4420-4A00-93AE-0D33FCDBDF90\">&lt;addon-name&gt;</span>.htm</em> is the HTML help page for the add-on. This Html page can be opened from the NetView\n\
                              add-ons page, or from the Plug-in Manager (for example, by right-clicking the Add-on\n\
                              and then choosing Help).\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C3C98C71-773F-4008-8ABE-5CBD8D691E14\"></a></span> <em class=\"strong\">netview_<span class=\"MenuCascade\" id=\"GUID-EB4D91FA-3C2D-48E8-9ACA-84499968FBA2\">&lt;addon-name&gt;</span>.xml</em> stores information, such as the name, e-mail address, and URL of the add-on author,\n\
                              that is used when the add-on is packaged as an .xsiaddon. This information is also\n\
                              displayed on the <span class=\"MenuCascade\" id=\"GUID-F6AC9FD9-D829-4893-A7B0-E291F066F553\">add-ons</span> tab of XSI Local.\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D478E749-D09C-414C-BBFC-D348EADB0D52\"></a></span>To view the help, do one of the following:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-017ED3B4-86B2-46DA-A069-BFC1689A6D4D\"></a></span>In the Plug-in Tree, right-click an Add-on and choose <span class=\"MenuCascade\" id=\"GUID-49668683-1965-4421-9C1E-6945FFD48BAF\">Help</span>.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8561B30-E860-4483-9844-10D7EBB487D6\"></a></span>In NetView, go to the add-ons page of XSI Local.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-7AD35C8A-E6D5-4968-9D13-EDA7E377CAD4\"></a></span>If the add-on includes a self-installing property, then in the property page, click\n\
                              the ? icon in the title bar.\n\
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