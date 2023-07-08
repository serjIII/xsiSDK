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
      <meta name=\"topicid\" content=\"GUID-853C4623-0276-487F-B95E-1DB21CE2760B\" />\n\
      <meta name=\"indexterm\" content=\"string expression\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>String Expressions</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-853C4623-0276-487F-B95E-1DB21CE2760B\"></a></span><div class=\"head\">\n\
            <h1>String Expressions</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-19A0A24C-4E4D-4FC2-9AB8-0FE0AA89093D\"></a></span>Scripting commands that apply to scene elements (such as objects, components, and\n\
               parameters) use string arguments to identify the scene elements.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9872B733-61EB-4F54-9960-646465E3DE53\"></a></span>For example, the <em class=\"strong\">InspectObj</em> command takes a name as its first argument:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C107279B-81CE-4E5F-BCAD-EBA60FF38C1A\"></a></span> <span class=\"code\" translate=\"no\">InspectObj \"aCube.length\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC3A6514-6451-4DDD-B4E4-1FC1CC62934B\"></a></span>Using a simple syntax, you can write strings to reference any of the scene elements:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-055AE681-6181-410F-82C7-D03DE981F2E6\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/objectexpr.htm\">Object Name</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-685B3A36-B855-4686-A2E7-FEBA15419C18\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/compexpr.htm\">Components</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0DDA5717-4567-4E0A-B0B6-A9CD781E0ED9\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_elements-1.htm\">Parameters</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C3D02603-3530-45CD-883D-C0BCCC6944D4\"></a></span>There is also a special syntax for referencing <a href=\"#!/url=./files/cnxset.htm\">connection set</a>, <span class=\"char_link\"><a href=\"#!/url=./files/elemtype.htm\">Element Types</a></span>, lists of scene objects (<span class=\"char_link\"><a href=\"#!/url=./files/listexpr.htm\">Object List</a></span>) and lists of marked parameters (<span class=\"char_link\"><a href=\"#!/url=./files/markingexpr.htm\">Marked Parameter List</a></span>). For example, the following selects all objects whose names begin with \"right\":\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-10FAA16F-AA8D-4C14-BD38-71C266BB5B76\"></a></span> <span class=\"code\" translate=\"no\">SelectObj \"right*\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-48DEC4FA-BEAA-4A1D-BF63-009E7B85C567\"></a></span>These rules are summarized in the table below, and are discussed in more detail in\n\
               the sections that follow.\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7FBFEB74-C732-41F6-9943-0A0415F84DE4\"></a></span><p class=\"table-heading\">Character(s)</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6190AF2D-F4CA-4ECD-8696-6724D0FC297F\"></a></span><p class=\"table-heading\">Meaning</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6C93CBBA-F0D0-4C4E-AF12-3A04BBB13457\"></a></span><p class=\"table-body\"> <em class=\"strong\">,</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0933CCCE-10FC-4C68-BE4F-816B29B1270D\"></a></span><p class=\"table-body\">Separates items in a list. For example, <em class=\"strong\">\"mycube.kine.local.posx, mycube.kine.local.posy, mycube.kine.local.posz\"</em></p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6FB2ACC5-0BE4-40BE-832D-C1DBB4D73701\"></a></span><p class=\"table-body\"> <em class=\"strong\">{ }</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-51889160-82A4-4479-97E5-A79F8767B3D9\"></a></span><p class=\"table-body\">Specifies a list of objects. For example, <em class=\"strong\">\"{cube, sphere}.kine.local.posx\"</em> selects the local X position of the cube and sphere objects.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-569BEE60-15F6-4FB4-88A7-9DC4204BA61C\"></a></span><p class=\"table-body\"> <em class=\"strong\">B</em>:\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B0F20409-C772-4BE8-82AE-BE06724242DB\"></a></span><p class=\"table-body\">Denotes branch-selection. For example, <em class=\"strong\">DeleteObj \"B:cone\"</em> deletes the object named cone and its children.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5BCEE470-FC83-4B1C-B2A3-B5E43DE6B131\"></a></span><p class=\"table-body\"> <em class=\"strong\">*</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A0422051-33FC-4BF5-903C-3DC6C014051E\"></a></span><p class=\"table-body\">Matches one or more characters. For example:</p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-7D94DCD8-11AD-4F06-B3E7-6B0C9FD7701D\"></a></span> <em class=\"strong\">\"Views.ViewA.*Camera\"</em> matches all cameras of view A.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-420BDAFE-9E4F-4CAB-8FC2-5CE861D13A53\"></a></span> <em class=\"strong\">\"Passes.MyPass.*\"</em> matches all partitions under <em class=\"strong\">\"MyPass\"</em>.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-40DF1F19-92D1-4B83-A8FB-F09486B31126\"></a></span> <em class=\"strong\">\"Layers.MyLayer.*\"</em> matches all objects in <em class=\"strong\">\"MyLayer\"</em>.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6EDFB82-2B02-4A8F-8377-D113C83D46E5\"></a></span> <em class=\"strong\">\"cube*\"</em> matches all objects whose names begin with <em class=\"strong\">\"cube\"</em>.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A02944C0-0A4E-4BC5-8057-9008B5E08097\"></a></span> <em class=\"strong\">\"Cone.pnt[*]\"</em> matches all the points on the object. This is the same as <em class=\"strong\">\"Cone.point[0-LAST]\"</em>.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-836219C2-44F4-4B82-9802-B15B63117FF3\"></a></span><p class=\"table-body\"> <em class=\"strong\">/</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-525B31EB-0191-4646-B0E9-EB0B41CC89BB\"></a></span><p class=\"table-body\">A marking list for a command. Separates a list of objects and a list of animatable\n\
                           parameters. For example, the command <em class=\"strong\">AddFCurve \"cone*/kine.local.pos\"</em> adds fcurves to the local position parameters of all objects whose names begin with\n\
                           the letters <em class=\"strong\">\"cone\"</em>.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EDE936B4-ECAA-405A-B8DD-8AC44D844F8A\"></a></span><p class=\"table-body\"> <em class=\"strong\">#</em> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-11172072-DF2B-4338-A43F-2CF6A2A4F53E\"></a></span><p class=\"table-body\">Used to reference types of objects:</p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-D0144BAE-C049-4B51-85E6-36374B9622C2\"></a></span> <em class=\"strong\">SelectObj \"*.#override*\"</em> selects all overrides in the scene.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-AEB6D3CB-BD2F-447D-A35C-C3F184C9DBA0\"></a></span> <em class=\"strong\">SelectObj \"*.#model*\"</em> selects all models in the scene.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2CE230C7-E0FE-481C-911C-BCEB46FD2D03\"></a></span> <em class=\"strong\">SelectObj \"*.#3dobject*\"</em> selects all 3D objects in the scene.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-54723419-F51B-479B-84B0-810E95C6137C\"></a></span> <em class=\"strong\">SelectObj \"*.#pass*\"</em> selects all passes in the scene.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A226C6A-65AF-419F-9DA0-06C8927C9791\"></a></span> <em class=\"strong\">SelectObj \"*.#group*\"</em> selects all groups in the scene.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/objectexpr.htm\"> Object Name</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/compexpr.htm\"> Components</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/elemtype.htm\"> Element Types</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/script_elements-1.htm\">Parameters</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/listexpr.htm\"> Object List</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/markingexpr.htm\"> Marked Parameter List</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";