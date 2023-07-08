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
      <meta name=\"topicid\" content=\"GUID-163FB9F5-E911-4BC6-B55C-AE6781B3D108\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: providing help files\" />\n\
      <meta name=\"indexterm\" content=\"help files: providing in a property page\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: specifying a help location: on-the-fly\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: specifying a help location: plug-in based (self-installing)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Providing Help Files</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-163FB9F5-E911-4BC6-B55C-AE6781B3D108\"></a></span><div class=\"head\">\n\
            <h1> Providing Help Files</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E373142-CD43-4B46-A3B0-42F6A4F76DFB\"></a></span>You can provide an HTML page or a web address (URL) as a part of your package. Net\n\
               View loads the page when the help icon (<span class=\"MenuCascade\" id=\"GUID-78237585-BD0D-4C6E-B493-FDBE9A6D78C8\">?</span>) is clicked. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0099\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-63473956-0D57-4F57-9AAB-9882AD421F92\"></a></span> To specify a help location and a help file icon for an on-the-fly custom property:\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"UL_B6F440E123714B5DA1EEA709418ED45A\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B2E3F38B-5048-4660-9414-C7D4D564579E\"></a></span>Use the <a href=\"#!/url=./si_om/PPGLayout.SetAttribute.html\">PPGLayout.SetAttribute</a> or <span class=\"code\" translate=\"no\">PPGLayout::PutAttribute</span> method with the <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siUIHelpFile</a> enum. For example: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oLayout.SetAttribute(siUIHelpFile, \"http://www.softimage.com/support/\");</pre></div> \n\
                  </li>\n\
                  <li>Use the <span class=\"code\" translate=\"no\">siUIHelpButtonFile</span> attribute to specify a help icon file for the property page. The help icon file replaces\n\
                     the default <span class=\"MenuCascade\" id=\"GUID-D53E0B13-8421-46C3-A76A-B3DCEA6590E5\">?</span> icon in the property page. The help icon must be a bitmap file (<span class=\"filePath\" translate=\"no\">*.bmp</span>). It must have a height of 18 pixels and a width not exceeding 100 pixels. \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">oLayout.SetAttribute(siUIHelpButtonFile, \" MyHelpButtonFile.bmp\");</pre></div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-009A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E5C828AC-B4E1-49B2-A006-26129512D88C\"></a></span> To specify a help location and a help icon file for a plug-in based (self-installing)\n\
                  custom property:\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-94BB7758-44D6-42BA-B9A0-B1F59EAF224E\"></a></span>Do the following: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_B8E3EB02F032450495E25A7638D8624D\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2EFAA956-489B-4F3C-BA31-353A95FA856D\"></a></span>Use the <a href=\"#!/url=./si_om/SIObject.Help.html\">SIObject.Help</a> or <span class=\"code\" translate=\"no\">PluginItem::PutHelp</span> or <span class=\"code\" translate=\"no\">PluginRegistrar::PutHelp</span> property in the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> callback: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
in_reg.Help = \"http://www.softimage.com/support/\";</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1DEDEBBA-5D2D-4598-9CDC-2FEA00011CE8\"></a></span>Name your HTML file with the name of your plug-in and add it to the <span class=\"filePath\" translate=\"no\">doc</span> subfolder. Softimage finds your HTML page automatically. For example, following is\n\
                        a file structure for a typical self-installing plug-in containing a custom property:\n\
                        \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
C:\\Public\\Plugins\\MyFabulousProperty.dll\n\
C:\\Public\\Plugins\\doc\\MyFabulousProperty.html</pre></div> \n\
                  </li>\n\
                  <li>Use <span class=\"code\" translate=\"no\">PluginItem.PutHelpButton</span> or <span class=\"code\" translate=\"no\">PluginItemRegistrar.PutHelpButton</span> to specify a help icon file. The help icon must be a bitmap file (<span class=\"filePath\" translate=\"no\">*.bmp</span>). It must have a height of 18 pixels and a width not exceeding 100 pixels. \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-92A29399-6D17-44AC-9A9E-895229470149\"></a></span>If the self-installing property is in an Add-on directory, use the add-on help mechanism.\n\
                        See <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WalkthroughBuildinganAddon.htm#GUID-DAF51890-3846-4499-8D80-34077E1BA31D\">Add Help for the Add-on</a></span>. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";