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
      <meta name=\"topicid\" content=\"GUID-7950DCB9-F07B-4783-A601-7A5F0A95AFE6\" />\n\
      <meta name=\"indexterm\" content=\"Hand (character development kit)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Hand</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Envelope\", \"si_cpp/classXSI_1_1Envelope.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7950DCB9-F07B-4783-A601-7A5F0A95AFE6\"></a></span><div class=\"head\">\n\
            <h1> Hand</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C975F95-8328-4ED3-BC6A-08BCF474B136\"></a></span>The <em class=\"strong\">Hand</em> object represents a one-bone hand and a set of finger bones using guide objects to\n\
               position and orient the bone joints. Two collections of guide objects are necessary\n\
               to create a hand: a collection of finger guide objects to position finger joints;\n\
               and a collection of \"blade\" objects that control the curl direction of the fingers.\n\
               The finger chain is set up so that bone Z rotation is in the plane of the blade.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-007B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-620ED68D-083C-4746-A6DD-C3912E90EF55\"></a></span>Returned by\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-886E256A-C0C1-4070-B84F-69A3F6A7A2E8\"></a></span> <a href=\"#!/url=./si_cmds/MakeHand.html\">MakeHand</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-007C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3CA7C36B-CF31-40D0-8738-B0D79EBF8810\"></a></span>Also available via\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-93F3B7B4-3F3C-4B00-B184-292C904F5B50\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-004C\">Biped.RHand</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-26973686-7837-4E16-93B8-198769C8D5D1\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0055\">Biped.LHand</a></span> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-007D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-17B255AD-DC74-4B4D-93AC-40F4821D4B0E\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DD2FA9A9-8558-431C-8221-26A19DB2A252\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-585FD4F2-476B-4B56-8ABF-E3ED23451A73\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-00C85CDB-C9F9-4CD6-9A1F-E1F1F13A905F\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BAAC9849-5B9F-489F-AC3B-F13C157F3E51\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Root</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-793F5252-7421-4CFB-A14F-9748E7D39108\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainRoot.html\">ChainRoot</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2C6A7E39-D4D0-4536-81B2-B75714CAC0E7\"></a></span><p class=\"table-body\">the Root of the hand chain</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-96749A9E-99D1-4C18-AD8A-89322AA3D628\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Eff</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E8C0F08D-05E6-4CB3-912C-0E4F6D5D3933\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainEffector.html\">ChainEffector</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6BE9D63F-C1C5-48DF-A137-8E1C2E2D8421\"></a></span><p class=\"table-body\">the Effector of the hand chain</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91DE1385-9EEF-46CD-91E0-92C0310B0C33\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">FingerRoots</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FFBCBEDC-631A-4239-9583-F135E401BBF5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FC277F38-D826-46DC-A8D3-D72C4A51EFF6\"></a></span><p class=\"table-body\">a collection of Finger Roots</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-784C8E30-8ED3-48FC-96AD-D947E51CBBDB\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Hidden</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3DD5C1C0-77C1-46E2-9C3F-FD56E50E0DF6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3579EAF2-EA7C-4FED-BA11-FE8A7B8197D2\"></a></span><p class=\"table-body\">a collection of Hidden object</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2BA6230E-85BA-41AF-A631-17D44E038CD3\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Envelope\" class=\"a_multireflink\">Envelope</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8CB20EC7-4DA9-4405-97A9-57EB4B788B96\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1FD41B8F-CAA1-4E31-8C23-824F201396D6\"></a></span><p class=\"table-body\">a collection of objects to be Enveloped</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C2133243-2560-432A-8126-2E062EF93672\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Shadows</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C7E24A90-B2A8-4034-93EA-500E4DFA23A9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B1CCB177-23D1-465A-83FC-68FA2A4CF580\"></a></span><p class=\"table-body\">a collection of box shadows</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-96279C2E-2501-4755-AE7D-B55545B6E687\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";