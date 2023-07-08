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
      <meta name=\"topicid\" content=\"GUID-133446F1-230C-432A-9141-F95183C26FC0\" />\n\
      <meta name=\"indexterm\" content=\"UI\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>UI</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-133446F1-230C-432A-9141-F95183C26FC0\"></a></span><div class=\"head\">\n\
            <h1> UI</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E125D73E-EEC9-475E-98A2-8BA4BBB6E557\"></a></span>The <em class=\"strong\">UI</em> object represents the property page used to interactively create either the <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm\">Biped</a></span> object or the <span class=\"char_link\"><a href=\"#!/url=./files/Quadruped.htm\">Quadruped</a></span> object.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00C6\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-76E04178-3CC9-425A-A449-D48A585808CB\"></a></span>Also available via\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-61B2AE16-1123-422B-8394-9A60C2EF252C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0045\">Biped.UI</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-604A6146-70A5-4D94-B10A-34489D1CF4B8\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/Quadruped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0061\">Quadruped.UI</a></span> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00C7\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-06387D12-827E-49B3-8A10-7EE50F2746C0\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-65109D19-A4D5-472D-8854-89992D1802B3\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0AE31ED1-BE88-4302-8609-F578052E4F0B\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB00C978-E793-458F-A37D-2143018E0CA0\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A6E143D2-8005-45D9-AA60-F5961885BE0E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">TorsoType</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-376B2894-7A09-4621-A8A5-1CD5B7307DAE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-69E4FD6C-6815-4792-8EE0-BCED9384FA8A\"></a></span><p class=\"table-body\">type of spine</p> <span class=\"anchor_wrapper\"><a name=\"GUID-F1F832BC-F481-4618-A92E-C28A92E78C1B\"></a></span><p class=\"table-body\"> <em class=\"mild\">Possible values:</em> \n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F74E570-63A7-4A81-BD60-704CBFD3A75B\"></a></span> <span class=\"code\" translate=\"no\">0</span> = quaternion\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE0C474D-E92D-4E4F-8E9E-065F46F46ADE\"></a></span> <span class=\"code\" translate=\"no\">1</span> = skeleton\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-011E216C-10C3-41EF-B1E8-780F34E4E86B\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">TorsoStretch</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DAAC1541-3BEF-4AE9-8384-A9BE51290C02\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5B0FBFF5-C039-48C3-8BFE-7A4B886B108A\"></a></span><p class=\"table-body\">how the spine stretches</p> <span class=\"anchor_wrapper\"><a name=\"GUID-1E0170AA-06BE-4056-BAAB-3E0678BE3B69\"></a></span><p class=\"table-body\"> <em class=\"mild\">Possible values:</em> \n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-8E7D122A-C366-4A9F-8FF1-98C610185524\"></a></span> <span class=\"code\" translate=\"no\">0</span> = by spine scale slider\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-17482300-BDDC-4A55-8221-DF958D2374CF\"></a></span> <span class=\"code\" translate=\"no\">1</span> = to meet the chest controller\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-802B4351-DC46-4090-86F4-49470BB0E9AA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">TorsoDivisions</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ECDCCFE7-BB4E-4233-81C3-58E3134F2B6B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2BDC2748-13F1-4247-8A48-30A0DFEDAD12\"></a></span><p class=\"table-body\">the number of spine divisions</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-22958215-E198-4627-BAF4-DC9F77E96507\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">IconType</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-77E6E42A-5ADD-4137-BD0A-008FAC9412B5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2866577B-D5B3-4802-8073-B790DE5B9B1D\"></a></span><p class=\"table-body\">type of icon to use for chest, hip, and upper body controls</p> <span class=\"anchor_wrapper\"><a name=\"GUID-6A946E3F-3C4A-4103-BF2D-47E88E712EDE\"></a></span><p class=\"table-body\"> <em class=\"mild\">Possible values:</em> \n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-8BA28EBB-12D7-43C3-96C8-451FB4566B82\"></a></span> <span class=\"code\" translate=\"no\">0</span> = square\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-829648F1-1787-4085-9288-4B55F58B67C1\"></a></span> <span class=\"code\" translate=\"no\">1</span> = cube\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4AA9F91-E637-4D2E-B427-A44E40048C93\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">MakeBelly</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-25733FA3-C3D1-4FFD-9E24-077DFD4BA9E6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0BA224AC-2B59-402F-81E8-5D42411EF7FD\"></a></span><p class=\"table-body\">whether there\'s a belly control or not</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BB861C19-E9E9-408F-ACFB-9BA46B14F860\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">BellySlide</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E757A3E8-AFCC-4600-A2E9-408D91914D3B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BE4E08E4-352B-47E7-982C-F491D13A6A0C\"></a></span><p class=\"table-body\">the value of the belly slide control (blending motion between the hip and belly)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BF716AA4-CD8C-4131-9631-0E7F014519A1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">BellyCenterPercentage</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-23984154-A441-4664-9D0D-AD42FFC3DB07\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FE6FB3AB-5675-4DD0-A722-810AEAD7393C\"></a></span><p class=\"table-body\">where the center of the belly is placed</p> <span class=\"anchor_wrapper\"><a name=\"GUID-FD825438-6A4B-4ABE-8528-BF023CD0F403\"></a></span><p class=\"table-body\"> <em class=\"mild\">Possible values:</em> \n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF587D6D-BDA4-433D-A0C9-5D28153234FD\"></a></span> <span class=\"code\" translate=\"no\">0</span> = dead center\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-9BBBBF65-A250-4641-A5A3-F3C4BA76CE22\"></a></span> <span class=\"code\" translate=\"no\">1+</span> = the larger the swing radius, the slower the bounce and jiggle\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0BD388F0-E3F7-46FE-8417-1B53A3389A83\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">HeadType</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D9E68586-81AC-4C00-A09A-B8C2D05D412B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AD4DCC2F-5BEE-4ABB-93F9-1DEB2EF672D4\"></a></span><p class=\"table-body\">the style of head and neck assembly Possible values:</p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-F151310A-5B44-4DC8-8C07-82C747370D92\"></a></span> <span class=\"code\" translate=\"no\">0</span> = skeleton\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-F519B37C-BB9E-4640-905D-CB233B226515\"></a></span> <span class=\"code\" translate=\"no\">1</span> = spine\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-200213A2-1565-4000-AD57-04C33D483EDA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">HeadStretch</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE25DF3D-A7F2-4930-8DE8-C6F201E09D85\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E4863CF8-9117-45BB-9BD6-26244CB1111E\"></a></span><p class=\"table-body\">whether the neck spine should stretch automatically to follow the head, or try to\n\
                              maintain a constant length (for spine head types only)\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-26637262-BB0A-45EF-959E-A536E15D17B0\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">HeadDivisions</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-60C35AA7-1152-40DC-A135-E1A3D9E62175\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-53DA18FA-AED6-4DC2-B96C-B4CE106CB97B\"></a></span><p class=\"table-body\">the number of divisions on the neck (for spine head types only)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FF598318-8C4A-4740-BFAA-AC5D316CECD1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Ears</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7B79EC31-5689-4800-8918-11AC8073865A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6772C6E2-6989-4ACC-A870-726B3F8BF8FD\"></a></span><p class=\"table-body\">whether or not to generate ears from the ear guides on the biped guide</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D451851A-7C7B-455E-BE1E-18E585B14882\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">RotationOrder</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AC384874-1C00-45A7-8585-614BAE7FE18F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-94573C09-2B0B-4281-BF2A-A3B7F46A91E3\"></a></span><p class=\"table-body\">the rotation order on the arms (YZX is the best rotation order for preventing gimble\n\
                              lock on arms)\n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-17AC03B7-A813-4918-8809-EDCB6464EC43\"></a></span><p class=\"table-body\"> <em class=\"mild\">Possible values:</em> \n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-B751B56A-AA1F-4CED-B315-273AF1D6A86C\"></a></span> <span class=\"code\" translate=\"no\">0</span> = YZX\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE97DC99-6A48-427A-A4E3-F6D2E2370CEE\"></a></span> <span class=\"code\" translate=\"no\">1</span> = XYZ\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-F741CC15-532C-46D1-9735-33F9BB5B9DA6\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-ECB2D575-ACBC-489E-A903-5A52294D5192\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8AC94669-5BD0-414F-BD3E-D2781C0D440B\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ArmSymmetry</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9A0243AB-59F0-4A0B-B38E-05D4E4A72F1E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0D80282D-3B66-4D76-9E66-B6D746C97A1A\"></a></span><p class=\"table-body\">whether to use negative scaling on the right arm</p> <span class=\"anchor_wrapper\"><a name=\"GUID-D659269B-FE8F-48A5-B583-8FEA7107F013\"></a></span><p class=\"table-body\"> <em class=\"mild\">Possible values:</em> \n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-131C2CD8-B37F-4D0B-91D7-7EF270D8A87B\"></a></span>0 = symmetric manipulation\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-918B446E-6B88-4B06-BFBC-A1AE4F9A8A3A\"></a></span>1 = asymmetric manipulation\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-45B55A84-7830-4A1B-801A-C1F91D5462ED\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C2A3FA6-E86E-4A6C-8143-6D13DEB62C66\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D4204CBA-648B-45F6-80A2-5F05311939E0\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ArmAttachment</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-43B9AD77-F860-4492-9765-E1D665569372\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F697BF09-488F-4B91-BE48-C321FF8B2395\"></a></span><p class=\"table-body\">where to parent the arms</p> <span class=\"anchor_wrapper\"><a name=\"GUID-DE6B0CB4-2928-444B-839A-E3B144AA9132\"></a></span><p class=\"table-body\"> <em class=\"mild\">Possible values:</em> \n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-38DFF15D-F641-408D-9040-E54CFAE258EC\"></a></span>0 = under the shoulders\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED16D71E-417B-4DD9-A190-2AE8A8224B0C\"></a></span>1 = under the hips\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-A58C2B02-1BA5-4C5D-A002-3303CF4D81AC\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-139CEE5B-9CEB-4677-9A05-4ADB27FF446F\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AF5EECCE-8528-449A-B4FC-8FD0A9441C1C\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">FingerType</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E7E956DD-6792-4D7F-ADBD-D8461C3B6D57\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C334F126-0255-4324-8B6F-D0D24B97B552\"></a></span><p class=\"table-body\">construct finger bones</p> <span class=\"anchor_wrapper\"><a name=\"GUID-5A2FE586-4D58-4719-933B-F8BA1F39D414\"></a></span><p class=\"table-body\"> <em class=\"mild\">Possible values:</em> \n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-99375804-F61D-4635-ADD3-56355FE254EF\"></a></span>0 = from 2D chains\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-5009F4EB-BFF9-427F-B3CE-1DDB949C3310\"></a></span>1 = from 3D chains\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-1A24F6AD-925C-453B-9E00-F6DCC8B5D660\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-B2DE076B-81D8-47FD-8A22-A8ADB7B0AD7E\"></a></span>Not available for Quadrupeds\n\
                                 </p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0B8E9306-A6B6-49EF-9C70-493F2620F0DF\"></a></span><p class=\"table-body\">ForeArmRoll</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4806A3B0-57F1-49CC-AA48-A073944AC4FF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-84EE809D-194F-42DA-BA13-D3F3AB67F9EA\"></a></span><p class=\"table-body\">whether or not to add forearm roll division</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-DA9E08AA-8CCD-4292-A4F2-0E6182BC6B15\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B8FA16D-1BD6-44B3-9832-789BD6DCFF1A\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-51EECA81-FE33-40A8-81AD-DF84A4A2F1D1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ForeArmDivisions</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-385FB12D-C9E0-4FE6-A4E4-17B87DC0E267\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D3FB593D-02F6-4D81-A14D-252EA2ED16EE\"></a></span><p class=\"table-body\">the number of forearm roll divisions</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-77EFE837-813C-4B4F-902C-E0D16B844EA0\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-F866C44A-62F4-4903-8829-569CC6EF1758\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B3B7A75F-D71E-4B59-91FA-059DCBA4CFAA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">BicepRoll</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-08EFDA92-0CE0-4719-8234-AA5927A6F56D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C1C8040E-4613-49D9-9B6B-C8FFC0A10FB6\"></a></span><p class=\"table-body\">whether or not to add bicep roll division</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-0F71E36B-EAF6-441C-AAE2-8F1A58075DE5\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1656BA3-9BF7-425A-83FB-61DF730B34F1\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0D06E75B-C8C7-42C1-8ED0-8E4BE475D6D0\"></a></span><p class=\"table-body\">BicepDivisions</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-906AC4C8-A1BB-4ACD-AB9D-6E400FA4C168\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B821E56E-BAB3-4BA2-BA86-4B7947BE8CF8\"></a></span><p class=\"table-body\">the number of bicep roll divisions</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-6BCC3200-5849-4F24-A0AD-846B078D6F90\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2F5DE79B-CC0A-481F-A0AE-97DB196152B2\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-717124E0-55CC-4AB6-839F-B9C540113926\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ThighRoll</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AFD1F71B-9FFB-4CEA-A1C1-8D944349F384\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8A0B8890-B318-403B-9796-D1D424C58A49\"></a></span><p class=\"table-body\">whether or not to add thigh roll division to the thigh bone</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-0B8364F1-8730-4B93-B9FF-947B3C340ABC\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-AD44527E-9113-4AB1-8AB4-A0D2A4494A02\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4F2A31A-0290-4CF2-8470-E0AE1449C4F2\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ThighDivisions</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E6FC3D12-A690-43C1-8C5C-9E1D46A0A23C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7C1C0E9F-9059-4AD4-BDFF-0957DC2008B3\"></a></span><p class=\"table-body\">the number of thigh roll divisions</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-AE1294CF-639E-4B81-AA21-732494D8E166\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-B649950E-5BDD-4D1D-975E-FD1676433CD0\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-81F708B5-C8F6-4A67-9663-9F8117BD8DC6\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ArmPitSlide</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-81C14AC9-4852-4AD6-AA34-167D781F0DDC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7C6DD1D2-B992-4079-9F82-1855D8D0FB0B\"></a></span><p class=\"table-body\">whether or not to create a two-point slide between the bicep and the chest bone</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-6BF7FC7A-0058-4335-A5C7-53DFF1896341\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-F5509EE7-40C3-498C-8709-754C6F18DA66\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-89F516AF-3B21-4BD8-950D-DB7CC39E0573\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">HipSlide</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F8A9C08-457C-4511-8B62-A7A88C961A16\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B1C10812-E085-4E5F-ACED-A98EEAE1FB3F\"></a></span><p class=\"table-body\">whether or not to create a two-point slide between the thigh and the hip bone with\n\
                              guides on either side of the hip\n\
                           </p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-7919A89C-C076-4A0A-8A02-CF3AF11F58F8\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-242A36FB-EA7B-42E9-9442-A02E586A83E9\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AADE45A2-D8BC-4513-86DC-55899E99F192\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ThighSlide</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-382F672D-7756-4C17-BAF0-3340F12D4B12\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AB79F2B8-9927-4807-AA24-57BBF8549228\"></a></span><p class=\"table-body\">whether or not to create a two-point slide between the thigh and the hip bone with\n\
                              guides behind the legs\n\
                           </p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-797D6600-4E52-48DA-ADFD-D280265C946B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-3343D42D-FAF9-461C-8743-9BF1983AF82C\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-62EE7F31-6CE0-4448-AC48-83BB5883FE7B\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ElbowsJoint</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-03873A68-70CB-4010-862B-74D3515B4CAB\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CE88353D-5EA4-4AFB-B02D-37350B7F235E\"></a></span><p class=\"table-body\">whether or not to create joint compression between the bicep and the forearm</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-CB41370E-A576-44C4-95D0-248C8F264DEC\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-15B9A90C-0D38-4038-83C2-DD164C04F7A5\"></a></span>Not available for Quadrupeds\n\
                                 </p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B8B5802E-D40D-4E26-BFB5-116174DC40CA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">KneeJoint</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AB3F4473-4CE7-4A9D-8926-F3C54BDFEB02\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4ACCC558-FCC8-4D65-89C3-93DA57E79266\"></a></span><p class=\"table-body\">whether or not to create joint compression between the femur and tibia</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-FE4A96C5-2D4F-4136-A0B8-D3DD5EB7788D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-E6B409A5-123D-44D9-AC86-196F28721B9B\"></a></span>Not available for <em class=\"strong\">BipedDogLegs</em> or <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A2BB1550-D3D2-48CA-BE61-6FF0757A02C7\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ShadowType</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FBC78E79-C7D0-44E1-B136-AF4F5A267B60\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A93F64C6-484D-47EC-8A8B-5A71DDBD5621\"></a></span><p class=\"table-body\">the type of shadow rig to constrain to the biped.</p> <span class=\"anchor_wrapper\"><a name=\"GUID-FD762E29-0DE7-4710-9524-4EF7899F271F\"></a></span><p class=\"table-body\"> <em class=\"mild\">Possible values:</em> \n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-794909AF-8306-4390-9BE0-5E567DAF28E3\"></a></span> <span class=\"code\" translate=\"no\">0</span> =\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-358AF4EC-39CB-4BC2-87DB-3CF517ED4D28\"></a></span> <span class=\"code\" translate=\"no\">1</span> = SI3D Skeleton\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-CECBC3BC-F6EA-4EB2-832F-B1A83AFC35D4\"></a></span> <span class=\"code\" translate=\"no\">2</span> = Softimage Skeleton\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-424FA9B5-D225-4758-84AF-3614120CA12F\"></a></span> <span class=\"code\" translate=\"no\">3</span> = Null\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-C23B45D4-DCD2-4B44-84AD-04E9077EC5AA\"></a></span> <span class=\"code\" translate=\"no\">4</span> = Box\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-33A4D127-6F89-4615-8E48-DC20D50E1B8E\"></a></span> <span class=\"code\" translate=\"no\">5</span> = Box with skeleton arms\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-4BA833B3-ABE5-4E06-80A6-D57655BFF480\"></a></span> <span class=\"code\" translate=\"no\">6</span> = Box with skeleton legs\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-39D9F4F4-1788-4C3A-89A1-9D73B2DFE9B7\"></a></span> <span class=\"code\" translate=\"no\">7</span> = Box with skeleton legs and arms\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5A0CE90A-58AA-43A9-87CE-3302B0491C64\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">ShadowHands</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AA4A65F8-2FC6-4304-8FB1-DA422CE929BF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-92F068A5-B22C-4AEA-A9C9-55308772697F\"></a></span><p class=\"table-body\">whether or not to create a shadow rig for the hands</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-6FB250A5-557F-4A76-9E99-A376B880BE8B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2626DB5A-573B-4040-BC01-DDF2E87DEE2F\"></a></span>Not available for <em class=\"strong\">Quadrupeds</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-46D11DBB-EF13-48B4-BAAC-F855838FDFA4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"> <span class=\"code\" translate=\"no\">MakeTail</span> </span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-620BB747-1CDA-4892-A8CE-0305B97B6D05\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-79B12972-7BA8-4DCC-B2EA-2FD74E6FE070\"></a></span><p class=\"table-body\">whether or not to generate tail</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-028B3D49-94C0-4631-ACC7-DDC0C8052790\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-D1C8F3CA-6EB8-4649-A87F-D2BC99E1E525\"></a></span>Not available for <em class=\"strong\">Bipeds</em> or <em class=\"strong\">BipedDogLegs</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E51CDD04-DB83-4B8C-A1D3-AB64A3A29A91\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">TailDivisions</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F90D8AD3-963E-4A0D-8C10-1067F252FDFB\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1BB67CF6-F5E1-4EC5-94CE-9FC2CF558E1F\"></a></span><p class=\"table-body\">the number of bones in tail\'s tracing chain</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-ABBB3C65-BF13-4557-8C76-21A374A95638\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-CF06115E-228D-4C68-AA74-F4EA8D41F26A\"></a></span>Not available for <em class=\"strong\">Bipeds</em> or <em class=\"strong\">BipedDogLegs</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-06B9380C-CBFF-4872-B737-C7281D22FBCD\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">FrontRoll</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8910F058-406D-4A28-9A2B-4563794B81D4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9492D5C8-347D-44E2-9EAA-5DA748B5B1D6\"></a></span><p class=\"table-body\">whether or not to apply roll divisions to the front legs (roll divisions behave the\n\
                              same as the bicep or thigh roll divisions)\n\
                           </p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-FDA8CBDC-AB44-49DD-B1F5-6A76651F4476\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-25EE44F4-2CE2-4DD2-9886-8D70CD288039\"></a></span>Not available for <em class=\"strong\">Bipeds</em> or <em class=\"strong\">BipedDogLegs</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2E13779-8DC6-423D-8803-B7676CFA7BCA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">FrontRollDivisions</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0982AD89-D949-420C-8847-9C805D6BE524\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FC4F6190-AC28-4C0E-A1A8-28D1DE229E0B\"></a></span><p class=\"table-body\">the number of roll divisions on the front legs</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-F6EBCCF1-A3A1-4D6D-9E52-9A432EB64C58\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-1BB3A39F-35F4-4C58-A5BE-2CA6508EFF8B\"></a></span>Not available for <em class=\"strong\">Bipeds</em> or <em class=\"strong\">BipedDogLegs</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9A40344C-55C1-4BFF-BD45-3B70F1FD3403\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">BackRoll</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C0C082D3-4BDC-41D4-A036-7DB1E1131FA6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AEE98F36-7453-427A-9C77-E58ECBC2E836\"></a></span><p class=\"table-body\">whether or not to apply roll divisions to the hind legs (roll divisions behave the\n\
                              same as the bicep or thigh roll divisions)\n\
                           </p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-66CD7C50-9B78-4886-B7A9-C12E0C42B859\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-2F19BB7F-3B0F-480D-A355-E79A1DC97DA9\"></a></span>Not available for Bipeds or BipedDogLegs\n\
                                 </p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A514F76E-7A66-4F0A-9A82-51BDEFA404C0\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">BackRollDivisions</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91EB32AF-17A8-43C2-B66B-FCDD65E0DB36\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D8D2482E-D0AE-4C61-BDB0-E1F3CC75E5A4\"></a></span><p class=\"table-body\">the number of roll divisions on the hind legs</p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-0B49DC6D-B249-4069-956B-BC11970B270B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2780521-EA9B-4BAA-A736-F16BCB84048C\"></a></span>Not available for <em class=\"strong\">Bipeds</em> or <em class=\"strong\">BipedDogLegs</em></p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7961A01-8A5B-458D-BC52-AB790A8D2104\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";