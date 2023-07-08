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
      <meta name=\"topicid\" content=\"GUID-951BA005-230D-4702-959B-329F6CC0B6D4\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Environment Variables and Build Flags</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-951BA005-230D-4702-959B-329F6CC0B6D4\"></a></span><div class=\"head\">\n\
            <h1>Environment Variables and Build Flags</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-11E3F201-B7E7-42C0-81E2-E711481F937D\"></a></span>If you use the Softimage SDK wizards, you do not need to set up the development environment.\n\
               However, if you want to set up your development environment, this topic provides a\n\
               quick reference to the required settings. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-002A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D92A97C3-0329-4BCC-A30B-FF827F88AF3D\"></a></span>Windows\n\
               </h2> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-002B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E639E709-A7B8-4466-9AA5-D6C7B46E489F\"></a></span>Starting Visual Studio\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6B79B591-BEA7-4DB0-9717-AFCC74BFCEFB\"></a></span>You must start Visual Studio from a <span class=\"char_link\"><a href=\"#!/url=./files/cus_addons_WorkingwiththePluginTree.htm#WS8AD400B78794354E8F5A74BCE7CD86FD-0033\">Softimage command prompt</a></span> to make sure that the environment variables such as <span class=\"code\" translate=\"no\">XSISDK_ROOT</span> are set correctly to avoid the build and link errors. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-002C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-DC967A5E-EBAD-4137-9F45-EEE130925FCA\"></a></span>Project Configuration Properties\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BFA31C7F-906F-43F6-985F-49860FB0F73A\"></a></span>The Softimage SDK <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CreatingCPlugins.htm\">wizards</a></span> generate projects with the following configuration properties. \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_D3AC637376654F9ABB183CAD34F12F1F\"></a></span><div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col width=\"66.66666666666666%\" align=\"left\" />\n\
                           <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        </colgroup>\n\
                        <tr class=\"ruledHeading\">\n\
                           <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-06245E0D-77DA-46DA-8A10-A75450775618\"></a></span><p class=\"table-heading\">Property </p> \n\
                           </th>\n\
                           <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1FAE4F23-9B18-45C6-A29A-BA0CD1563086\"></a></span><p class=\"table-heading\">Value </p> \n\
                           </th>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DEF31136-30CA-48CB-9C69-7D96CF32AC8F\"></a></span><p class=\"table-body\">C/C++ &gt; General &gt; Additional Include Directories </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C9BE9CBD-6C50-4DB6-B45D-88CFF4022C19\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">$(XSISDK_ROOT)\\include</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8C8CEF5D-5991-427A-9A21-D98A8F827E27\"></a></span><p class=\"table-body\">C/C++ &gt; Preprocessor &gt; Preprocessor Definitions </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0408B7C0-4C93-42C4-9D09-0ECDE3299F02\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">WIN32;NDEBUG;_WINDOWS</span> \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F0509F63-464C-4BB8-A4A2-491FF5C3246F\"></a></span><p class=\"table-body\">or </p> <span class=\"anchor_wrapper\"><a name=\"GUID-DC244F26-E645-45E5-93C2-61AA024F2EEC\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">WIN32;_DEBUG;_WINDOWS</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A3F6EC50-ABFB-4521-B740-727FE54287EE\"></a></span><p class=\"table-body\">C/C++ &gt; Code Generation &gt; Runtime Library </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4A9576C0-A3AF-4B26-8931-BBFAF393C9E1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Multi-threaded DLL (/MDd)</span> \n\
                              </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7EA764C2-069B-423B-A42F-F9AEFA483345\"></a></span><p class=\"table-body\"> or </p> <span class=\"anchor_wrapper\"><a name=\"GUID-1094707B-875B-441E-9630-ABE527EB63D8\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Multi-threaded Debug DLL (/MDd)</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-51B7CEDF-797B-4521-A3DC-19796B882591\"></a></span><p class=\"table-body\">Linker &gt; General &gt; Additional Library Directories </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FBC00B60-03D1-421D-9ABF-2D93CF2F1D35\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">$(XSISDK_ROOT)/lib/nt-x86-64</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9A4AE0B0-4AF7-493C-B47A-E793A0AEC07A\"></a></span><p class=\"table-body\">Linker &gt; Input &gt; Additional Dependencies </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-49764A0C-915B-48F6-9D49-EF43EAD7C918\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">sicppsdk.lib sicoresdk.lib</span> \n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8589E99E-48ED-475C-A7CF-F862C054579A\"></a></span>To make the location of the include and library directories available in all projects,\n\
                     you can add these to the global VC++ directories. \n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-002D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6F931AC8-9369-43C1-BBF2-674902F6EE02\"></a></span>Linux\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-595284BA-03AD-42F7-80FE-D00139D2251E\"></a></span>The Softimage SDK <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CreatingCPlugins.htm\">wizards</a></span> generate GNU makefiles that you can use to build your plug-ins. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";