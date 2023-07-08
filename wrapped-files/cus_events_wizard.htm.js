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
      <meta name=\"topicid\" content=\"GUID-53E90901-7ADF-4BBD-8765-CAF36C088ADF\" />\n\
      <meta name=\"indexterm\" content=\"wizards: creating events\" />\n\
      <meta name=\"indexterm\" content=\"To create a self-installing event\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating an Event</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-53E90901-7ADF-4BBD-8765-CAF36C088ADF\"></a></span><div class=\"head\">\n\
            <h1>Creating an Event</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-546E67F0-3C10-4FCC-B0A5-B09E63E3099A\"></a></span> You can use a wizard to generate the code for a self-installing plug-in that contains\n\
               a custom event. In addition to generating the skeleton code for the plug-in and the\n\
               event, the wizard can also generate the code required to add the event to a menu.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE6F22389D4AF5541AB13394556078574-0009\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6EE9DBFE-3B0D-4A98-A8AC-415C4E6E7AFC\"></a></span> To create a self-installing event\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"GUID-98D6FEA1-2F1A-40FA-8A7B-D3AD89198856\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5682316C-17AC-4074-8B92-6937C3E32674\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-2C1FD683-F521-4DF2-AFF6-239277ACC1F8\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-45C2177C-EFA9-4E35-8CDF-E29E145C892A\">Plug-ins</span> to open the Plug-in Manager.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-826A4E96-33CD-46C7-9FB6-1A04C285D2D1\"></a></span> <span class=\"MenuCascade\" id=\"GUID-C12D51DD-F49B-4780-A239-809CF7C6BCEE\">Tip</span> In the Tools Development Environment layout, click the <span class=\"MenuCascade\" id=\"GUID-30DC12F1-BA5E-4A88-A90D-CE98063FDB47\">Plug-ins</span> tab to switch to the Plug-in Manager view.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C8C6859-A96C-44A4-83D9-81F25421A993\"></a></span>Do one of the following:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-39D8EE94-90D2-4DBB-8BB2-655EEFFB29CA\"></a></span>To create the event in the User location, click <span class=\"MenuCascade\" id=\"GUID-A77E8268-8745-4968-8B84-A516597A3899\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-299C498E-8D38-4655-AE36-1AF5D842DE48\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-D7B0542C-41AE-4029-B8C9-8D912F7D78AD\">Event</span>.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B37D82A-6319-4FC5-A78C-1CCB9D6E1D85\"></a></span>To create the event in a different location (such as a workgroup or an Add-on directory),\n\
                              expand the location in the Plug-in Tree, right-click the <span class=\"MenuCascade\" id=\"GUID-7EF054B3-C658-4B64-BA77-171C3F8B842B\">Plugins</span> folder and click <span class=\"MenuCascade\" id=\"GUID-A99E401A-D637-4D72-B4CE-89A2D192FD81\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-66E4BAF8-497F-45EF-85D9-9FA5821CC74D\">Event</span>.\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D54D65A-0171-4856-AD8A-AD945194BC2E\"></a></span>The custom event wizard appears.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D22A8A3E-3DF9-4379-B228-E3FDDBC18D5B\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-6F7060EE-1955-4AC3-9AF7-EDCBF23E9048\">Name</span> box, type a name for the plug-in.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3FE48DA4-A9FA-49A6-9879-6F7A73F0D8DC\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-C00B3554-688D-48B6-85FE-9FF18F63C287\">File name</span> box, type a valid file name.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE505D64-7A13-4A0C-8F6E-0EB87736E07D\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-037B98B8-2903-4BC9-B6A8-1A30C0F4140F\">Script Language</span> list, click the language you want to generate.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4D6E9BFE-4A14-4FBE-BFBB-9B602AC4F3CE\"></a></span>On the <span class=\"MenuCascade\" id=\"GUID-06623F3B-D5B2-454A-8F42-82571757D0FA\">Event Definition</span> tab, select the check boxes for the events you want to handle.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-46398F41-D691-4687-96A7-4EE9C81A4900\"></a></span>The wizard generates an <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html\">OnEvent</a> callback for each event you select. The <em class=\"strong\">User Event Name</em> is used to name the callback function. For example, the default name for an OnEvent\n\
                        callback for an siOnSelectionChange event is \"siOnSelectionChangeEvent_OnEvent\".\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F68E75D0-8A55-48BB-931F-75C5901BF937\"></a></span>The first character in the user event name should be a letter. Subsequent characters\n\
                        can be letters, numbers, or underscore (_) characters.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8778BB9-510B-48D2-9643-E228A749A4D3\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-D22D2A5B-C182-45AE-9926-A4F759C0C266\">Generate Code</span>.\n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";