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
      <meta name=\"topicid\" content=\"GUID-D7E6A79B-8141-462E-9112-0DEA2B4EEBAA\" />\n\
      <meta name=\"indexterm\" content=\"DogLeg (CDK reference)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>DogLeg</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Envelope\", \"si_cpp/classXSI_1_1Envelope.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D7E6A79B-8141-462E-9112-0DEA2B4EEBAA\"></a></span><div class=\"head\">\n\
            <h1> DogLeg</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B59FDAD2-E15D-4924-86E5-46CE65491C02\"></a></span>The <em class=\"strong\">DogLeg</em> object represents a three-bone leg with an and up-vector control object, and a rigged\n\
               three bone foot (see <a href=\"#!/url=./si_cmds/MakeFoot.html\">MakeFoot</a>). The leg and foot bones are created from a collection of 9 or more guide objects:\n\
               Femur; Tibia; Metarsal; Middle Pivot; Right Pivot; Left Pivot; and at least 3 objects\n\
               running from the start of the foot to the end of the toe (this means the foot must\n\
               be at least a two bone chain). Extra items are added onto the length of the foot.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-009B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-331F8DBD-CF5B-47F3-A466-147A9D062848\"></a></span>Returned by\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-557E1EE1-21E0-4755-B6E3-EC52191790B6\"></a></span> <a href=\"#!/url=./si_cmds/MakeDogLeg.html\">MakeDogLeg</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-009C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E1D30083-7962-4D88-BF61-8004B081144C\"></a></span>Also available via\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B0310FEB-D50E-430A-AAD8-BDF7F60613EB\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/Quadruped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0069\">Quadruped.RDogLeg</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1019E1C0-A644-4248-8CEC-201B525AF7DA\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/Quadruped.htm#WS59CC1705BE42794BBCB80457F107A6E8-006C\">Quadruped.LDogLeg</a></span> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-009D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9312980F-1A5A-45A2-A5B5-58C6E271D3F7\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-312D51A6-0363-4FBB-B48B-7AD02B9AC32B\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5EC28350-7FE4-442B-AF6F-C66A5A724880\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91D2A8BE-479D-401F-96D0-D7CAE8724111\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C51DDCEC-0AB7-4B6B-99C3-59E7B0265D63\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Root</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D059946C-EFA9-41F7-8F91-6050B01CD60C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainRoot.html\">ChainRoot</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C55CF11C-27B4-4F87-A73A-085E68A182DC\"></a></span><p class=\"table-body\">the root of the dog leg</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C01986AB-B605-44E8-B03E-5F63A0243DC4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Foot.Root</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8119D751-A533-4F47-A409-5C4CF3D9EE33\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainRoot.html\">ChainRoot</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A6E4DA45-4571-4B0B-B5DC-123AA1C4DA52\"></a></span><p class=\"table-body\">the root of the new dog leg foot</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FE15C7A2-EA86-4494-94CF-B291CAC0D7B2\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Knee</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F5E86B74-1962-41FD-B96E-FC92F7387797\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Null.html\">Null</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CE5893E1-017A-47D0-859D-869E32B0DF49\"></a></span><p class=\"table-body\">the knee guide null holding the DogLeg operator</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-62F23B9B-B568-497A-93BD-FFACCE38D71A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Tarsus</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6496B688-96B9-435F-AB09-AAB8785E8B17\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Null.html\">Null</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9C635135-AC89-46EA-979C-EEBFF67A8C90\"></a></span><p class=\"table-body\">the tarsus guide null holding the DogLeg operator</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A402602C-C347-4424-B2C0-B2E2C12A8AC0\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Foot</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-32B13838-DD72-4F4C-AD25-445B962DEF57\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKFoot.htm\">Foot</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-20714DF6-82BB-458D-BB7A-90254D606352\"></a></span><p class=\"table-body\">the guide null that the end of the dog leg effector is constrained to on the foot</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-20ABDAA0-9672-49ED-BFCC-04D96FA45598\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">UpVec</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A357B623-2C68-4A77-A32F-716C14594AA8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-18DDF625-A7A3-4DC1-8D6E-B099CF882083\"></a></span><p class=\"table-body\">the dog leg\'s upvector control</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2EFB09CD-4D4B-4A73-9ED4-2B0525233783\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Skel</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FFFB79FB-F972-4309-8363-BCD86404D957\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BF4D0246-7619-4AFD-BA11-4254B8BCFA22\"></a></span><p class=\"table-body\">a Skeleton collection of the chain elements in the new dog leg</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0D44E934-9FF3-4C43-9360-2A1E5EEB2A5A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Hidden</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F91B7154-9318-49B4-9971-3BE1E6E2D2E5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6254F4EC-6E82-421D-9EE6-216FD504BC6B\"></a></span><p class=\"table-body\">a collection of hidden objects in the leg rig</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E6091682-87AD-4536-9C17-91578BF8698D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Envelope\" class=\"a_multireflink\">Envelope</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F8D2B321-2286-4BC5-9E06-9501DAEA6785\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B0B7C343-CA5A-40FA-8C48-5BB89786411F\"></a></span><p class=\"table-body\">a collection of objects in the leg rig to use for enveloping</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2A480BB4-A2D7-4BBD-A71E-22DF3A83DA60\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ShadowStart</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6CCFEA04-7904-4152-BF7D-3F36F9893145\"></a></span><p class=\"table-body\">(varies depending on type of shadow specified; eg., <a href=\"#!/url=./si_om/Null.html\">Null</a>, <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>, etc.)\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AF4F3CDA-51C4-43C7-8D0F-C9B9DC0EF520\"></a></span><p class=\"table-body\">the shadow start object, usually this is the start of a branch in a shadow hiearchy</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-47F3F961-E3A5-4228-BA05-EA10633A6D16\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ShadowEnds</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EAF6867A-0635-4670-8E01-BD2B528A95E4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CBC44B35-CD55-4CAF-AE12-9EFE38A773A5\"></a></span><p class=\"table-body\">a collection of shadows ends, usually these are leaf nodes or parent of a branch in\n\
                              a shadow hierarchy\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AC8620EF-8F2F-4680-9907-A96B9B8C1BBC\"></a></span><p class=\"table-body\">Shadows</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E602C778-84A3-427C-A2EF-8D7E9BC49E45\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA2E1857-0297-4101-BE4A-DF0F9C2A35C8\"></a></span><p class=\"table-body\">the collection of objects that make up the leg shadow. Will be undefined if there\n\
                              is no shadow\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A17BD8C5-3AF6-4015-9BFD-C514E6193972\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";