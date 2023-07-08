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
      <meta name=\"topicid\" content=\"GUID-3F963391-331A-4FA1-9733-A40039CE7C3A\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: contents of an add-on package\" />\n\
      <meta name=\"indexterm\" content=\"add-ons: versions\" />\n\
      <meta name=\"indexterm\" content=\"versioning (add-ons)\" />\n\
      <meta name=\"indexterm\" content=\"paths: directory structure for the factory, user and workgroup paths\" />\n\
      <meta name=\"indexterm\" content=\"directory structure (factory, user, workgroup paths)\" />\n\
      <meta name=\"indexterm\" content=\"Addons folder for add-ons\" />\n\
      <meta name=\"indexterm\" content=\"paths: Addons subdirectory\" />\n\
      <meta name=\"indexterm\" content=\"folder locations: Addons\" />\n\
      <meta name=\"indexterm\" content=\"Application folder for add-ons\" />\n\
      <meta name=\"indexterm\" content=\"paths: Application subdirectory\" />\n\
      <meta name=\"indexterm\" content=\"folder locations: Application\" />\n\
      <meta name=\"indexterm\" content=\"Data folder for add-ons\" />\n\
      <meta name=\"indexterm\" content=\"folder locations: Data\" />\n\
      <meta name=\"indexterm\" content=\"paths: Data subdirectory\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What\'s in an Add-on Package?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Application\", \"si_cpp/classXSI_1_1Application.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"PluginRegistrar\", \"si_cpp/classXSI_1_1PluginRegistrar.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3F963391-331A-4FA1-9733-A40039CE7C3A\"></a></span><div class=\"head\">\n\
            <h1>What\'s in an Add-on Package?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-FCA30FDA-3B3E-4979-A99C-C93CAD90D530\"></a></span>You can package and distribute your customizations by creating your own add-on package,\n\
            or install and uninstall existing add-on packages. Add-on packages can contain: \n\
         </p><span class=\"anchor_wrapper\"><a name=\"UL_09D58DEDF8C045FB839BBA3246433CC6\"></a></span><ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8426D3BF-4CCD-4DAC-92A5-FB5A954EB987\"></a></span> <em class=\"strong\">Layouts</em> – Any custom layout defined in a <span class=\"filePath\" translate=\"no\">*.xsily</span> file in the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Application\" class=\"a_multireflink\">Application</a>/layouts</span> folder under your <em class=\"mild\">factory, user, workgroup, factory add-on, user add-on or workgroup add-on</em> locations. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D0118B1-C783-4161-9FF8-3694B5F32E88\"></a></span> <em class=\"strong\">Old Toolbars</em> – Any custom toolbar created with a version of Softimage prior to v4.0. These toolbars\n\
                  are defined in binary files which generally appear in the <span class=\"filePath\" translate=\"no\">Data/Preferences/Toolbars</span> folder under your <em class=\"mild\">factory add-on, user add-on or workgroup add-on</em> locations. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-069EE6B5-36AB-4AEE-822D-4A529C8CBFA3\"></a></span> <em class=\"strong\">Shelves/Toolbars</em> – Any custom toolbar or shelf defined in a <span class=\"filePath\" translate=\"no\">*.xsitb</span> file in the <span class=\"filePath\" translate=\"no\">Application/toolbars</span> folder under your <em class=\"mild\">factory, user, workgroup, factory add-on, user add-on or workgroup add-on</em> locations. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBDA5B5C-0138-44BE-8784-EC82D07A23CE\"></a></span> <em class=\"strong\">Custom Commands</em> – Any custom command implemented as a v1.0 plug-in (where the command is explicitly\n\
                  installed in Softimage instead of implemented as part of a self-installing plug-in\n\
                  module). \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE74986D-5D13-41E6-9C0E-9F471CB63031\"></a></span> <em class=\"strong\">Libraries</em> – Any library files which contain the implementation of self-installing plug-in modules\n\
                  or v1.0 plug-in items. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7556262-D213-4B4C-9FEB-2EC925D0E200\"></a></span> <em class=\"strong\">Scripts</em> – Any script files which contain the implementation of self-installing plug-in modules\n\
                  or v1.0 plug-in items. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3C0EF423-85B0-4E4D-8E8C-2D947A46CBDE\"></a></span> <em class=\"strong\">Events</em> – Any implementation files used for custom events. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0CBDB638-922D-46DB-8BDB-1A9C8B1EE96C\"></a></span> <em class=\"strong\">Plug-ins</em> – Custom elements implemented as a self-installing plug-in module (see <a href=\"#!/url=./files/cus_self_WhatisaSelfInstallingPlugin.htm\">What is a Self-Installing Plug-in?</a>). \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-83500E04-5655-4ED2-9263-0DC689C081C2\"></a></span> <em class=\"strong\">Other</em> – Any file not falling under one of the above categories such as, a device description\n\
                  file (*.xsidevice), a help file (*.html, *.hlp, and so on) or an image file (*.bmp,\n\
                  *.jpg, and so on). \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-AD77D8BC-0814-4100-9106-18CBF9EA324A\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>The difference between an add-on and a plug-in is that an add-on is a set of plug-ins\n\
               packaged together for easy installation, and a plug-in is a single item that extends\n\
               the functionality of Softimage such as, a shader, a script, or a compiled operator.\n\
               \n\
            </div>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0075\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CE11B8A5-CB7B-414D-B05E-FDF8F5C1A84F\"></a></span>Versioning\n\
            </h2>   \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C23EC5D-C646-445B-99ED-79630ACAACE4\"></a></span>Add-ons currently have no built-in versioning. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB31E182-9523-406F-BC63-C8A292DE3A6E\"></a></span>Each time the contents of an Add-on directory are updated, you need to repackage a\n\
               new version of the add-on. To help keep track of multiple versions of .xsiaddon files,\n\
               it is recommended that the version number or date be included in the file name (for\n\
               example, <span class=\"code\" translate=\"no\">MyTool.v12..xsiaddon</span> or <span class=\"code\" translate=\"no\">MyTool.12May2005.xsiaddon</span>). \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5075C5C0-3392-4E96-8036-512F14C0D918\"></a></span>Typically, it is not possible to install multiple copies of an .xsiaddon at the same\n\
               time, so you must uninstall the older version of the .xsiaddon before installing a\n\
               newer version. \n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-DB35F5CB-7DFB-4728-850E-D393B0DE1F1A\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>Each time you repackage an add-on, you need to consider the backward-compatibility\n\
                  issues. For example, scenes saved with an older version of a shader cannot be loaded\n\
                  if there are substantial changes to shader parameter definitions. \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0076\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E2F8E4BB-7ACB-4679-AAA4-6679A12F481D\"></a></span> Directory Structure\n\
            </h2>   \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6893DB95-717B-4868-8090-60A723CE0397\"></a></span>Typically, you save your customization, and install your plug-ins and add-ons in the\n\
               user path. Following is a typical tree-view of its contents: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"FIG_F488CCFF04B348039FE2FA0DAE7F88AF\"></a></span><div class=\"figure-anchor\"><img src=\"../images/GUID-1A9A359D-5D8C-466D-BDD5-6146CC85A47B-low.png\" /></div> <span class=\"anchor_wrapper\"><a name=\"TABLE_1CC34491B1264BC5ADEA95E23D08D9B2\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"66.66666666666666%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4D1E1FBB-D20E-4B6B-96E0-A8384BD4DE3A\"></a></span><p class=\"table-body\"> <em class=\"strong\">A</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-21724527-2E6F-4905-A6CB-084C781577FF\"></a></span><p class=\"table-body\">You can find the installed add-ons in the <span class=\"filePath\" translate=\"no\">Addons</span> directory. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-221161DD-46DE-4077-9C0C-04316A407A0F\"></a></span><p class=\"table-body\"> <em class=\"strong\">B</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0B7BF1A6-FB59-4A3F-ABB9-782EF717DF79\"></a></span><p class=\"table-body\">The <span class=\"filePath\" translate=\"no\">bin</span> directory is where the implementation files for your compiled shaders reside. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-24CADFE2-C463-4217-AB65-95E71265FEDE\"></a></span><p class=\"table-body\"> <em class=\"strong\">C</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9C90040D-4EB0-4DC7-9BE4-567FB32F3FE3\"></a></span><p class=\"table-body\">You can drop your self-installing custom plug-ins into the <span class=\"filePath\" translate=\"no\">Plugins</span> directory. Softimage loads them when it starts. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF1F2D6D-15C3-4017-91E7-3C75A6D5FF52\"></a></span><p class=\"table-body\"> <em class=\"strong\">D</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BDCFA90D-62A2-45B5-B702-05EDBCA39BF9\"></a></span><p class=\"table-body\">The other folders contain Softimage customizations: custom key mapping, custom layouts,\n\
                           custom toolbars, and relational views. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-41A58B69-7FBC-4E3A-95A4-D65D4C1D4526\"></a></span><p class=\"table-body\"> <em class=\"strong\">E</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-70BAD4BB-CDA8-424D-964F-F24C107A9D62\"></a></span><p class=\"table-body\">The <span class=\"filePath\" translate=\"no\">DSPresets</span> folder contains presets. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A8DDF287-F66C-4C65-9DE1-80252FB47546\"></a></span><p class=\"table-body\"> <em class=\"strong\">F</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-298E055B-8E41-4393-922B-6C32C001E75C\"></a></span><p class=\"table-body\">Custom user preferences are stored in this folder. </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0DE6B9A8-DA93-4313-B692-A3B766248699\"></a></span><p class=\"table-body\"> <em class=\"strong\">G</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3F771B3C-3838-4BF6-B5DE-1ADE16F7E639\"></a></span><p class=\"table-body\"> You can put your script files in the <span class=\"filePath\" translate=\"no\">Scripts</span> directory. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-60D4798F-5AA1-4767-998D-AB3E8F8CE1A3\"></a></span>In addition to the customization folders that appear in this tree, a number of other\n\
               folders might appear under the <span class=\"filePath\" translate=\"no\">Application</span> folder to represent custom plug-ins, such as properties, filters, menus, and others.\n\
               \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0078\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-EF841E91-EB0D-4AF6-B684-AB7396130278\"></a></span> Addons\n\
               </h3>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-06488508-27F0-4DE5-A330-BC9A6123400A\"></a></span>You can mirror the folder structure in the <span class=\"filePath\" translate=\"no\">Application</span> and <span class=\"filePath\" translate=\"no\">Data</span> folders under the <span class=\"filePath\" translate=\"no\">Addons</span> folder for the installed add-ons or self-installed plug-ins. This happens when an\n\
                  add-on with a specified subdirectory is installed. \n\
               </p> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-0079\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-94A89584-B8BB-443C-AA32-AA431DCC702C\"></a></span> Application\n\
               </h3>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-989C6529-5B1A-4132-B412-65FC20411A56\"></a></span>The <span class=\"filePath\" translate=\"no\">Application</span> folder contains extensions and customization for Softimage: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_A17EF01466E94BB8BECD8CAEF034B6D3\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"66.66666666666666%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FD6A36B3-47A6-4119-933A-80331CFE5722\"></a></span><p class=\"table-heading\">Subfolder name </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DE8BA799-4999-482B-82C0-9366C4D01FE0\"></a></span><p class=\"table-heading\">Description of contents </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5238CDA9-320B-463E-9045-682C113CF299\"></a></span><p class=\"table-body\">bin </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-72F22151-360A-4A87-A50C-3D5C013F099F\"></a></span><p class=\"table-body\">Implementation files for your compiled shader. </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-007A\"></a></span><p class=\"table-body\"> Plugins </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-30442570-B645-4BA5-A672-C6EB1A275B9B\"></a></span><p class=\"table-body\">Drop-location for self-installing plug-ins. You can put the scripted plug-ins directly\n\
                              in this folder and compiled plug-ins appear in the <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_CrossPlatformDeployment.htm\">platform-specific folders</a></span> under a bin subfolder. Inside this folder you might also include the <span class=\"filePath\" translate=\"no\">doc</span> subfolder to store help files for your plug-ins. If you store the help file in this\n\
                              location, it is not necessary to specify the location to the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"PluginRegistrar\" class=\"a_multireflink\">PluginRegistrar</a></span>. \n\
                           </p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-A32D5EB9-FEE3-4B60-8767-A87F416845BF\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>You can create subfolders in this location to store files that implement helper functions\n\
                                 for the main plug-in files. To load faster, you can turn off the Scan sub-folders\n\
                                 preference so that these folders are not scanned. However, the platform-specific folders\n\
                                 are not affected by this preference. \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C9BE91DD-A97C-4DFF-B544-B4D8321823EE\"></a></span><p class=\"table-body\">Properties </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34E0F7B5-3C38-4CB5-B1DE-B5554390A59F\"></a></span><p class=\"table-body\">Plug-in based Custom Property implementation files as well as a <span class=\"filePath\" translate=\"no\">doc</span> folder for your help file. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-82524311-50F6-49E8-85B5-6A8BC42E55AF\"></a></span><p class=\"table-body\">Filters </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0D58DCEF-1B86-4A39-BB00-321C0BBC7CE2\"></a></span><p class=\"table-body\">Plug-in based Filter implementation files as well as a <span class=\"filePath\" translate=\"no\">doc</span> folder for your help file. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-99A2063E-8A48-43D2-BC44-2CBD797BACE3\"></a></span><p class=\"table-body\">Menus </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-679FBEA8-E8E3-423B-9954-B18CA926A14A\"></a></span><p class=\"table-body\">Plug-in based Menu implementation files as well as a <span class=\"filePath\" translate=\"no\">doc</span> folder for your help file. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-905E030A-D230-4400-AAF4-940E7BC51ADD\"></a></span><p class=\"table-body\">CommandMaps </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B98B2EB4-EF0D-45ED-8377-7B8552DCE89B\"></a></span><p class=\"table-body\">Custom keyboard mapping files (<span class=\"filePath\" translate=\"no\">*.DSDynamicCommandMap</span>). When you change the key assignments in Softimage, you can save your modifications\n\
                              to a custom file which is saved in this directory. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-22F8ABF7-8BF8-4077-84BB-4806CC911303\"></a></span><p class=\"table-body\">layouts </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E04CEE0A-F657-4B42-BEC2-5E20B408AF8B\"></a></span><p class=\"table-body\">Custom layout files (<span class=\"filePath\" translate=\"no\">*.xsily</span>). When you create your own layouts, Softimage creates an XML file containing the\n\
                              information and stores it in this directory. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-029BFBEA-3BDB-4BB0-AECD-53F48E6BB68D\"></a></span><p class=\"table-body\">toolbars </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1D15D73D-BE0F-42BC-BAE6-88B4A179BC46\"></a></span><p class=\"table-body\">Custom toolbar and shelf files (<span class=\"filePath\" translate=\"no\">*.xsitb</span>). When you create your own toolbars and shelves, Softimage creates an XML file containing\n\
                              the information and stores it in this directory. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C90945B1-6753-4785-AB95-A50A23DABBD2\"></a></span><p class=\"table-body\">views </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FA2FFBB4-33E4-46BC-8B88-FF5393046B5A\"></a></span><p class=\"table-body\">Custom view files (<span class=\"filePath\" translate=\"no\">*.xsivw</span>). When you create your own views, Softimage creates an XML file containing the information\n\
                              and stores it in this directory. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8AD400B78794354E8F5A74BCE7CD86FD-007B\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BBB9551A-A88D-4947-9771-D5D7DC65A133\"></a></span> Data\n\
               </h3>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2AB9CF0B-4757-4C6B-BC80-38B10E70D4BF\"></a></span>The <span class=\"filePath\" translate=\"no\">Data</span> folder contains presets, preference sets, and scripts: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_720AA13B2163457E87F75C15F6009702\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"66.66666666666666%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D34103FA-E690-40F2-85E6-CC6C75C3F482\"></a></span><p class=\"table-heading\">Subfolder name </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E6654DD2-6D34-40E9-80C9-77C63789360E\"></a></span><p class=\"table-heading\">Description of contents </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3253897D-72D4-4B8D-96C6-2B7EC86C3FD5\"></a></span><p class=\"table-body\">DSPresets </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-57E30935-6D05-4925-A126-D5753CC30CB0\"></a></span><p class=\"table-body\">Preset files for Softimage organized by type: 2DCurves, Constraints, Devices, FCurves,\n\
                              and so on. Preset files are binary and use the <span class=\"filePath\" translate=\"no\">.Preset</span> extension. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B35B8EEB-8418-41DF-B966-1C4B4FC9F63D\"></a></span><p class=\"table-body\">Preferences </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2798DBFE-236E-4F69-862A-75D93017F5D2\"></a></span><p class=\"table-body\">User Preferences for Softimage (<span class=\"filePath\" translate=\"no\">*.xsipref</span>) stored in a text format. There are also a number of subfolders containing binary\n\
                              keyboard mappings, layouts, and toolbars. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-53E29898-1292-4B31-8BF8-0B9BFFB8F31B\"></a></span><p class=\"table-body\">Scripts </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2D11E1E-887B-4BD4-A8BE-A1D17D7C830D\"></a></span><p class=\"table-body\">Container for script files. This is the default location for opening and saving scripts\n\
                              in the script editor. \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-DD37B89A-64C6-4882-8A65-8474EA5B5A4E\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3F67CAD-D9A5-4744-969E-8818C41BE413\"></a></span>This directory structure is consistent throughout the Softimage directory locations:\n\
                        \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_A54896FE4F664D42B4149BD826F72556\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-028B5F1E-1D2F-4F94-A676-4619DF2F50B9\"></a></span>user, factory, and workgroup \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-0133B230-1608-4305-9822-AA72C1B5C8BA\"></a></span>user add-on, factory add-on, and workgroup add-on \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </div>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-7FD2C76D-642A-4855-90BB-09BB7874E3FD\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>The project directory has a different structure. \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";