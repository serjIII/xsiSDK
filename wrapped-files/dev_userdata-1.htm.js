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
      <meta name=\"topicid\" content=\"GUID-5B15C55D-E2CB-4812-8AED-C6286DBBC287\" />\n\
      <meta name=\"indexterm\" content=\"custom data: overview\" />\n\
      <meta name=\"indexterm\" content=\"user data: overview\" />\n\
      <meta name=\"indexterm\" content=\"bnary user data: what elements can store binary data\" />\n\
      <meta name=\"indexterm\" content=\"user data: what elements can store binary data\" />\n\
      <meta name=\"indexterm\" content=\"custom data: what elements can store binary data\" />\n\
      <meta name=\"indexterm\" content=\"binary user data: overview\" />\n\
      <meta name=\"indexterm\" content=\"custom data: binary data: about\" />\n\
      <meta name=\"indexterm\" content=\"user data: binary data: about\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is User Data?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5B15C55D-E2CB-4812-8AED-C6286DBBC287\"></a></span><div class=\"head\">\n\
            <h1>What is User Data?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF99F26D-E126-4756-A115-32CA78970746\"></a></span>User Data is any data that you want to store on either a component or an object in\n\
            a Autodesk Softimage scene. This data may be stored as Binary Large OBjects (BLOBs)\n\
            or as data values (integers, boolean values, strings, etc.).\n\
         </p>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-CAEA1D3A-025B-4D2C-A5F5-30D3A06FE7F1\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD198A9A-C85C-4765-80A9-24B347DEC112\"></a></span>According to www.msdn.microsoft.com, a BLOB is a type of data column that contains\n\
                  binary data such as graphics, sound, or compiled code.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-F637ABDD-5104-4413-9836-A6ED95053221\"></a></span>These data formats belong to four main categories:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6A1FB5F-DD61-4C7D-959A-CCFD1C1412DC\"></a></span> <em class=\"strong\">Non-Binary Object-level User Data</em>—see <a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a>:\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-55EA8BA5-8CCE-4423-A8E5-45FB32C252EA\"></a></span>You can store non-binary user data (such as string values, numeric values, boolean\n\
                  values, etc.) on objects using custom properties which can be accessed directly through\n\
                  scripting commands or the object model.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-587E7425-430E-417C-B9E6-D75FBCDEDFEA\"></a></span>These maps are attached directly to objects (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata-1.htm#WS324D95A558291241ACE764CD4620449D-0004\">What Elements Can Store Binary User Data?</a></span>). The data can be viewed and updated using property pages. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E68649F6-B280-40F9-9324-DDE41ED512A8\"></a></span> <em class=\"strong\">Binary Object-level User Data</em>—see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_AttachingBinaryUserDatatoObjects.htm\">Attaching Binary User Data to Objects</a></span>:\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-52F441CC-A965-4ED8-8D3D-F76435249681\"></a></span><a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlobs</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1UserDataBlob.html\">UserDataBlobs</a> contain binary user data (BLOBs) and can be accessed directly through scripting commands\n\
                  or the object model.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-283CC972-4F7E-4B4A-B2A8-1A00C8124CAA\"></a></span>These BLOBs are attached directly to objects (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata-1.htm#WS324D95A558291241ACE764CD4620449D-0004\">What Elements Can Store Binary User Data?</a></span>) and are designed to carry rendering data from Softimage to mental ray.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-CA61327E-E32B-4931-ABCB-23865216CF1D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7E000A8-A415-4B4D-95E6-4EB9931AC977\"></a></span>Using the UserDataBlob object with C++ is easier and more efficient than using it\n\
                        with scripting. The C++ API version is the preferred implementation.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD780722-AF2D-459A-B8F6-09069B2CA582\"></a></span> <em class=\"strong\">Binary Component-level User Data</em>—see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_AccessingBinaryUserDataonComponents.htm\">Accessing Binary User Data on Components</a></span>:\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-626C90DD-F3DF-40AE-8938-19B79FD2B70F\"></a></span><a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMaps</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1UserDataMap.html\">UserDataMaps</a> are containers for binary user data (BLOBs) and can be accessed directly through\n\
                  scripting commands or the object model.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8402B5EA-4D73-4D46-9CE0-FCE78F4B0A1A\"></a></span>These maps are attached to clusters of subcomponents (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata-1.htm#WS324D95A558291241ACE764CD4620449D-0004\">What Elements Can Store Binary User Data?</a></span>). The data cannot be viewed or updated through the user interface. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D75B18E-EE05-4F0A-83BE-C8D7289A4680\"></a></span> <em class=\"strong\">Templated Binary Component-level User Data</em>—see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_AccessingTemplatedUserDataonComponents.htm\">Accessing Templated User Data on Components</a></span>:\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A50EF890-947D-431D-BAC6-CE72854F292E\"></a></span>This type of user data container allows the plug-in developer to determine what types\n\
                  of data can be attached before the user begins associating data with a given object.\n\
                  In other words, this is a mechanism for creating a template or mask that declares\n\
                  what kind of user data can be associated with a given cluster.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-16B19DD8-E665-4592-857E-B8755B5F4D16\"></a></span>Plug-in developers can create Templated User Data by creating a custom parameter page\n\
                  in the user interface and then attaching that parameter set to the User Data Map through\n\
                  scripting commands or object model.\n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-37C7A796-FE1E-4832-B3B1-8E9CA2E6C139\"></a></span>What Elements Can Store Binary User Data?\n\
            </h2>    \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA9FD134-F201-46AA-94EF-93F8F0B8D123\"></a></span>Autodesk Softimage supports user data on any scene object, material, shader or action\n\
               or on any subcomponent element, such as points, vertices, knots, segments, edges,\n\
               curves, facets, surfaces, etc.\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-BDDC0939-3244-4D57-985A-E855AE962B6D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A57D44D7-0D3D-4CA7-975D-CC4EE05FC692\"></a></span>SI|3D and Autodesk Softimage both support user data, and you can import the SI|3D\n\
                     user data into Softimage. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_ImportingUserDatafromSOFTIMAGE3D.htm\">Importing User Data from SOFTIMAGE|3D</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3363FD20-85CA-4C75-93D4-791716F5E41A\"></a></span>User data is stored on objects using <a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlobs</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1UserDataBlob.html\">UserDataBlobs</a> and on components using <a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMaps</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1UserDataMap.html\">UserDataMaps</a>.\n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-0005\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DE79A0C5-D1A6-420C-8A64-3B7FED7CEDEB\"></a></span>Typical Uses for Binary User Data\n\
            </h2>    \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F95F9694-B5DA-4D9B-919F-46F0E474F884\"></a></span>User data can be used as interchange information between the scene data as it exists\n\
               in SI|3D or Autodesk Softimage and proprietary software, game platform or plug-ins.\n\
            </p> \n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4316C6C5-0781-4C2E-9C6B-F6B287216CF3\"></a></span><p class=\"table-heading\">Scenario</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA750AC1-A661-4546-B47D-3211AAAE0A1F\"></a></span><p class=\"table-heading\">How it could be accomplished with User Data</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0BAD446F-6236-466E-B2DC-D8BD72BD527C\"></a></span><p class=\"table-body\">Adding flags to polygons</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-439C9EC3-F1C9-49E8-A306-2E33006A95F1\"></a></span><p class=\"table-body\">Games use various different render functions in realtime that need to be applied to\n\
                           specific polygons in a mesh. For example, reflective rendering on the windows of a\n\
                           vehicle, or adding an emissive color effect to the engine exhaust area.\n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-D31315A0-FCB2-4F3F-9809-013B7DB82C6D\"></a></span><p class=\"table-body\">Also, selecting polygons and tagging them as non-collideable could be used to create\n\
                           hanging cobwebs inside a hallway without having the player collide with the polygon.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-48AFF7E9-51CE-4EB6-9485-1343F434C74D\"></a></span><p class=\"table-body\">Tagging vertices in a mesh for numbering purposes</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7A60760A-96C3-4061-89BC-7A201D49FE08\"></a></span><p class=\"table-body\">Sometimes an effect needs to travel across a mesh in a certain way. This could be\n\
                           done by flagging the vertices in order of the way the effect should proceed across\n\
                           the mesh. For example, a lightning shock could be configured to jump between flagged\n\
                           points on a mesh.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE85B998-57BC-4EED-988C-2A4194B66B23\"></a></span><p class=\"table-body\">Incorporating variable weighting into specified areas of a mesh</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-25D98305-14F7-4663-BF81-0B85CECCEDBA\"></a></span><p class=\"table-body\">It would be useful to assign variable weighting to points based on the rotation of\n\
                           the bones. This would facilitate animating the elbow and knee regions of a character\n\
                           so that the polygons won\'t intersect poorly. With these annotations on points, the\n\
                           engine could read the points from a set of variables and perform these actions in\n\
                           the engine.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-25A8C6DF-CBD1-4346-B20B-C5B49FD5024C\"></a></span><p class=\"table-body\">Pushing shader information through to mental ray</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7B0AAECA-9E55-4AA0-923B-B30AE7F18E0D\"></a></span><p class=\"table-body\">You can write store shader information for an object which can then be retrieved by\n\
                           the the renderer (for example, mental ray).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A80159B6-22A3-4B65-BFD9-749BB807B952\"></a></span><p class=\"table-body\">Plug-in maintains its own state in a scene</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7E150D63-2DF7-4CBB-939F-7C7ACE257B37\"></a></span><p class=\"table-body\">State information can be stored as a simple data value (using the CustomProperty object)\n\
                           or as a binary value (using the UserDataBlob) inside the scene so that every time\n\
                           a custom command or other plugin is executed it can continue from where it left off.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";