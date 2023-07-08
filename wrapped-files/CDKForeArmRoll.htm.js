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
      <meta name=\"topicid\" content=\"GUID-D062C8BA-E5DD-4F81-AA18-6F966C5B7B1F\" />\n\
      <meta name=\"indexterm\" content=\"ForeArmRoll\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>ForeArmRoll</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D062C8BA-E5DD-4F81-AA18-6F966C5B7B1F\"></a></span><div class=\"head\">\n\
            <h1> ForeArmRoll</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7A20F540-776E-40C6-AE27-4B088664F973\"></a></span>The <em class=\"strong\">ForeArmRoll</em> object represents roll nulls along the length of a bone. When used as deformers on\n\
               an envelope they evenly distribute twist along the length of a bone giving a more\n\
               natural skin deformation.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0EEED158-B39E-449D-B775-E750BC6CDD92\"></a></span>The start and end rotations are determined differently for a forearm roll and bicep\n\
               roll (see <span class=\"char_link\"><a href=\"#!/url=./files/CDKBicepRoll.htm\">BicepRoll</a></span>). In forearm roll, the starting rotation is the forearm\'s rotation minus any spin,\n\
               calculated using the bicep\'s rotation. The end rotation is the next bone\'s rotation\n\
               (wrist) with spin. Roll division rotations are then interpolated between the start\n\
               and end. In the case of bicep roll the bicep bone is used for both start and end rotations.\n\
               The start rotation is the bone\'s rotation minus spin, the end rotation is its rotation\n\
               with spin.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00B3\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-36F6492B-9CC1-4581-9E2A-F71DE3746447\"></a></span>Returned by\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9B8B321E-4EB5-442D-9977-4F157115A5C4\"></a></span> <a href=\"#!/url=./si_cmds/MakeForearmRoll.html\">MakeForearmRoll</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00B4\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F3271E31-AB6F-4D65-B61E-4D888216804C\"></a></span>Also available via\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C848385E-FD64-4786-933D-77F4ACC908D6\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKArm.htm#WS59CC1705BE42794BBCB80457F107A6E8-0078\">Arm.ForeArmRoll</a></span> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-00B5\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F246CD43-422B-461E-BDA7-06F5DA2E0365\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-61149C2B-DCAA-432F-8B47-E63400C115BF\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34DD28F8-9EE4-46BF-A91D-A618F482E0A3\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-95E66349-76B1-411A-B537-CB1888211422\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-46F6CFED-7DC9-4696-9AA1-82497CF2C94B\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Divisions</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5D1368C0-1CB8-4466-88C4-7504CD671032\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-271C22C9-8A51-4E92-AF44-679E2ED7173F\"></a></span><p class=\"table-body\">a collection of the dividing null objects</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AE1FCCFF-1CB1-4105-BF41-EE68CE67458F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Sliders</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A8784C89-F718-439B-BC67-29873BF700DC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E381AD6C-186E-4BD0-BF1F-6172768C1C55\"></a></span><p class=\"table-body\">the slider page for roll offset placed on the hand</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-07CC28F4-8B04-40F9-94B8-A0720110275B\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Nb</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3D348936-5B57-443C-A8E0-F90C39F47535\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./files/Integer.htm\">Integer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F0317F61-8E9C-4A95-AD1D-6B759B738731\"></a></span><p class=\"table-body\">the number of divisions</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E8812A9D-ABC8-4E7E-A829-7BB35CB2AB24\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">RollOffset</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB999BEE-ABFE-4D19-B2EC-0FD53F3E8CEF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-52F53BC1-39E1-4297-AA21-687FEEE19874\"></a></span><p class=\"table-body\">the value of the roll Offset on creation</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFB3B435-E9FC-4BE6-96A4-BDCAF24660FE\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";