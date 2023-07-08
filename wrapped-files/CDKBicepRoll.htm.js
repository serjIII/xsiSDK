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
      <meta name=\"topicid\" content=\"GUID-9DF2294B-932B-45D7-9580-EFA6ADFCF60F\" />\n\
      <meta name=\"indexterm\" content=\"BicepRoll\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>BicepRoll</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9DF2294B-932B-45D7-9580-EFA6ADFCF60F\"></a></span><div class=\"head\">\n\
            <h1> BicepRoll</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6B3A1CBF-A3CA-4FB4-A4B0-D2BD2C5A56FC\"></a></span>The <em class=\"strong\">BicepRoll</em> object represents roll nulls along the length of a bone. When used as deformers on\n\
               an envelope they evenly distribute twist along the length of a bone giving a more\n\
               natural skin deformation.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D5E617D-9622-4B8D-B3F3-E31FD19AD3E2\"></a></span>The start and end rotations are determined differently for a bicep division than a\n\
               forearm division (see <span class=\"char_link\"><a href=\"#!/url=./files/CDKForeArmRoll.htm\">ForeArmRoll</a></span>). In a bicep roll division, the bicep\'s local rotation without spin is the start\n\
               rotation, while its rotation with spin is used for the end rotation. Roll divisions\n\
               are then interpolated between start and end. In the case of forearm roll, the forearm\'s\n\
               rotation minus spin (calculated using the bicep\'s rotation) is used as the starting\n\
               rotation, while the end rotation is the next bone\'s rotation (wrist) including spin.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00AE\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-7654E690-D60C-4D98-934A-320B677FC07E\"></a></span>Returned by\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D1401CB7-3BF4-4E91-9458-E53BDFB4BAE1\"></a></span> <a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00AF\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0BA65160-59EE-4F31-88C5-191B427F0FEC\"></a></span>Also available via\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C3EE112-8669-4537-8E3F-27F8A5724654\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKArm.htm#WS59CC1705BE42794BBCB80457F107A6E8-0077\">Arm.BicepRoll</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-98CC8336-4770-4649-9FEE-C1872F4B1F97\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKLeg.htm#WS59CC1705BE42794BBCB80457F107A6E8-0098\">Leg.ThighRoll</a></span> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00B0\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3D268355-F61A-4B56-92DB-9B2793D5C31A\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-94F9A52B-3B86-4C7F-83CE-7AEF5387746B\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB01D330-A9FC-4E7E-8439-88FC162EC0BC\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4F40F91E-434F-481A-93A4-1F7DFC21A080\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4651454E-651E-4BC2-AE05-EE7AF65FCCC5\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Divisions</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BCC65B36-E094-40A4-A419-4AB0B3B8FC00\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8014FDFD-B1D2-4F70-B21A-BB2CAB02C83B\"></a></span><p class=\"table-body\">a collection of the dividing null objects</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7F59A9FB-3AFB-45C7-AAE0-6BCF7B3D925F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Nb</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4AB3D62-BEBD-463D-B277-E98998EBF6E5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AC56B381-C9EF-47FA-9052-50B36DFF04F5\"></a></span><p class=\"table-body\">the number of divisions</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A0071772-85EC-446E-85D0-E6D0D77BC5FA\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";