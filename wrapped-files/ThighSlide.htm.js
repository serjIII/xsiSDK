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
      <meta name=\"topicid\" content=\"GUID-5E5780F7-4F36-449B-B37A-8B06138C8585\" />\n\
      <meta name=\"indexterm\" content=\"ThighSlide (character development kit)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>ThighSlide</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5E5780F7-4F36-449B-B37A-8B06138C8585\"></a></span><div class=\"head\">\n\
            <h1> ThighSlide</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD053E8C-B901-4444-BE11-B767FE586C36\"></a></span>The <em class=\"strong\">ThighSlide</em> object represents a two-point slide setup (see <span class=\"char_link\"><a href=\"#!/url=./files/CDKPointSlide.htm\">PointSlide</a></span>) and a spherical thigh volume object that bounding-volume constrains the <em class=\"mild\">Bind</em> null. The collection of guide objects passed to MakeThighSlide determines the position\n\
               of the slide, and the proportions of the thigh volume.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2251C06-321C-42A1-9FF7-3CD35E32196E\"></a></span>The guide collection contains 5 objects. The first two objects are to position the\n\
               top and bottom control objects of the slide. The bind point is the midpoint between\n\
               these two objects, and also determines the center of the thigh volume. The third object\n\
               is the bottom of the hip, and determines the radius of the thigh volume. The fourth\n\
               and fifth objects are the base and tip of the thigh bone (leg and knee joints). The\n\
               vector created by these two points defines the thigh bone and is used to align the\n\
               thigh volume with the thigh bone.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00C1\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C8F6FEDF-E65A-4DC0-BA2E-7430C1545FFF\"></a></span>Returned by\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7E9914E-6BCB-4969-A98B-8736F673640D\"></a></span> <a href=\"#!/url=./si_cmds/MakeThighSlide.html\">MakeThighSlide</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00C2\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C44CCA31-1A0B-460D-90E2-890481A2F8F2\"></a></span>Also available via\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D765DA30-EC22-4CD7-8DED-9C5C51035A9E\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0050\">Biped.RThigh</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-715F014E-184B-40C0-9C98-639AFD043400\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0059\">Biped.LThigh</a></span> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00C3\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-21ADD34B-7F03-4B69-B072-D83E294719EE\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8A11CDD1-9C22-4D52-8FA9-E780464A05C3\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A85592CE-5FD4-43E0-BA93-CE1EE9284CE1\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7FF7C823-B560-4650-A908-F0345427234B\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FBEE6C0F-1E4D-4677-AD58-1816103712DE\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">BindNull</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-067EFBD7-B347-475E-A093-542BDB3A6CC3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Null.html\">Null</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B3F072E4-D770-49DA-9830-0EAB24064BFD\"></a></span><p class=\"table-body\">the new bound center point</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-89853FA2-2513-439F-B3AB-2795558CC4E1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">TopNull</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2FDC5638-8B40-4F59-B116-28C77677D03F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Null.html\">Null</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-50EB3E53-A2BC-450B-A605-18D07BCAEB0B\"></a></span><p class=\"table-body\">the first constraint point</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A5030B9B-5BA3-4E4A-B009-D0F22D19886F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">BaseNull</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1D75A2B3-C446-485F-9D7E-E7C3E4D6D919\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Null.html\">Null</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F17D2AF3-563B-428B-B9CF-DF0D1355A164\"></a></span><p class=\"table-body\">the second constraint point</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6EFCE8AB-77A9-42BA-8F76-0E133ADEDE6B\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Volume</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F3AF8569-7953-4526-B9C6-D52BD071B3C7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6F1BA559-D9A8-4F7A-A06C-78F0D94C769A\"></a></span><p class=\"table-body\">the new implicit volume being avoided by the slide</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-839C00D1-C03F-46FB-8DD5-63C6DD305519\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";