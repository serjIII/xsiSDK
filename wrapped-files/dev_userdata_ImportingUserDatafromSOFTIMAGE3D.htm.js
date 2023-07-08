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
      <meta name=\"topicid\" content=\"GUID-7320832C-014A-4348-B681-44D2E70CD352\" />\n\
      <meta name=\"indexterm\" content=\"custom data: SI3D component user data in Softimage\" />\n\
      <meta name=\"indexterm\" content=\"user data: SI3D component user data in Softimage\" />\n\
      <meta name=\"indexterm\" content=\"custom data: SI3D vs. Softimage\" />\n\
      <meta name=\"indexterm\" content=\"user data: SI3D vs. Softimage\" />\n\
      <meta name=\"indexterm\" content=\"custom data: Tag, UserDataMap.Name\" />\n\
      <meta name=\"indexterm\" content=\"user data: Tag, UserDataMap.Name\" />\n\
      <meta name=\"indexterm\" content=\"custom data: bigendian, LittleEndian\" />\n\
      <meta name=\"indexterm\" content=\"user data: bigendian, LittleEndian\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Importing User Data from SOFTIMAGE|3D</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7320832C-014A-4348-B681-44D2E70CD352\"></a></span><div class=\"head\">\n\
            <h1>Importing User Data from SOFTIMAGE|3D</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-184E2F72-A6C5-40D0-B148-4EEA34547920\"></a></span>There are certain limitations with importing user data into Autodesk Softimage from\n\
               SI|3D. Specifically, Softimage can import user data from components (blobs attached\n\
               to vertices, polygons and edges of polygon meshes), called <em class=\"mild\">subelements</em> in SI|3D, but not from models, materials, textures, cameras, etc.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-78237C71-DCF0-4034-8CC9-63F9162124FA\"></a></span>Some of the issues you need to be aware of when importing from SI|3D concern how SI3D\n\
               user data is mapped onto Softimage component user data.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-0018\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6720FE3A-92EF-4438-9DD7-97AE116C7387\"></a></span> How Softimage Interprets the SI3D Component User Data\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC63DC37-3A40-4848-A7B7-15232FD5923B\"></a></span>When you load a SI|3D scene into Softimage, complete clusters are created for any\n\
                  user data in the scene. The type of component where the user data was stored in the\n\
                  old scene determines what type of cluster will be created. These clusters are named\n\
                  according to their type:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-546E6CCE-6F3C-4E7D-A171-132E49C44C97\"></a></span> <em class=\"strong\">SI3DUserDataPolyCls</em>—user data found on polygons \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1DA72CC1-E0AD-4799-84CC-AF7D9228AF7D\"></a></span> <em class=\"strong\">SI3DUserDataEdgeCls</em>—user data found on edges \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B1C0682-25D8-44DE-A7E1-AAE5487F8833\"></a></span> <em class=\"strong\">SI3DUserDataPntCls</em>—user data found on vertices\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-ADF628D5-6B72-49B1-A00D-EB3772157D67\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9BA8500-D945-4B7D-A4A2-2DA5CF35EFFF\"></a></span>These clusters are only created if there is actually any data on the relevant component\n\
                              type.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-437637C5-75E6-44C3-A9E2-9536C882E2B2\"></a></span>The data can have any length, including variable length data within the same UserDataMap.\n\
                  The actual user data is copied exactly as it is found.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-93EE3F02-DD44-4F20-86AE-E4AB2181C14A\"></a></span>Softimage does not interpret the contents in any way and there is no template associated\n\
                  with user data maps created from the SI|3D scene. Since the format of this data is\n\
                  unknown, plug-in developers must write their own UI.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-0019\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-99F27BF9-534D-4D66-A968-C68397B7D40E\"></a></span> Other Differences between SI3D and Softimage\n\
               </h2>   \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-001A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2D618125-E6DA-4107-B567-755C2C2B2B58\"></a></span> Tag &gt; UserDataMap.Name\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CA1924D-BF1C-46A4-8A13-42E6BEFFF6F0\"></a></span>SI3D uses the concept of <em class=\"strong\">Tag</em> to identify each piece of user data. When accessing user data in SI3D, you use the\n\
                     tag to specify the piece of user data. The tag allowed multiple blobs to be attached\n\
                     to the same element. When you load SI3D user data in Softimage, these tag names are\n\
                     written to <a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> property of the relevant <a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a> object.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-001B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-63C9F709-7173-41E3-A08E-7492FABAB493\"></a></span> bigendian &gt; LittleEndian\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-920E8B32-C685-413C-BCAA-A0E2222E3976\"></a></span>When transferring scenes with binary data between platforms with different byte order\n\
                     (MIPS versus x86 processors), plug-in developers can write plug-ins that use the <em class=\"strong\">bigendian</em> (SI3D) and <a href=\"#!/url=./si_om/UserDataMap.LittleEndian.html\">LittleEndian</a> flags to help determine whether or not to byte-swap the data.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-505D1F25-2275-49E9-B0C5-364CBF5EBC5F\"></a></span>The <em class=\"strong\">bigendian</em> parameter in SI3D specifies the byte order of the user data (TRUE for big endian,\n\
                     FALSE for little endian) for each blob. In Softimage this information is imported\n\
                     and stored in the <a href=\"#!/url=./si_om/UserDataMap.LittleEndian.html\">UserDataMap.LittleEndian</a> property.\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-1913AB56-D45C-4E7B-ADA5-B43CD44E719D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E10BE239-03B0-49E2-87F1-A4FD8FD2A695\"></a></span>There is no byte-order flag for user data items in Autodesk Softimage, since the <a href=\"#!/url=./si_om/UserDataMap.LittleEndian.html\">LittleEndian</a> flag is set only on the user data map. This differs from how the <em class=\"strong\">bigendian</em> parameter was used in SI3D, since each individual subcomponent could have it\'s own\n\
                           flag.\n\
                        </p> \n\
                     </div>\n\
                  </div> <img src=\"../images/GUID-60BF1B51-2452-4483-9691-F16860FD0CF7-low.png\" /> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";