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
      <meta name=\"topicid\" content=\"GUID-285FF94E-33A4-4A7B-A79C-B65964B4A764\" />\n\
      <meta name=\"indexterm\" content=\"Human Leg (character development kit)\" />\n\
      <meta name=\"indexterm\" content=\"Dog Leg\" />\n\
      <meta name=\"indexterm\" content=\"Quadruped Humerus and Femur Roll Control\" />\n\
      <meta name=\"indexterm\" content=\"Feet\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Legs and Feet</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-285FF94E-33A4-4A7B-A79C-B65964B4A764\"></a></span><div class=\"head\">\n\
            <h1>Legs and Feet</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-E888AF9D-675A-4FEC-8415-98FC2865B6AA\"></a></span>You can automatically create human-like or animal-like legs using the <a href=\"#!/url=./si_cmds/MakeLeg.html\">MakeLeg</a> or <a href=\"#!/url=./si_cmds/MakeDogLeg.html\">MakeDogLeg</a> commands. Thigh roll subdivision as well as optional up vectors can be added to either\n\
            command. Either can be used in any combination to create the legs of bipeds or quadrupeds.\n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-505EDA2F-BF93-4D62-A752-486C68AE7811\"></a></span>This section contains the following topics:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B89CAC98-4380-4322-BB26-C2FEC09F74C6\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_LegsandFeet.htm#WS59CC1705BE42794BBCB80457F107A6E8-002E\">Human Leg</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3C09C00-AA28-42AD-B943-77B85453E2DE\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_LegsandFeet.htm#WS59CC1705BE42794BBCB80457F107A6E8-0031\">Dog Leg</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BBD31BFC-10A4-46D7-8C01-CAF6C6BB3CCC\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_LegsandFeet.htm#WS59CC1705BE42794BBCB80457F107A6E8-0035\">Feet</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-002E\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5D3A8D87-AEF9-48FE-89C0-BF6CE5D2368A\"></a></span> Human Leg\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB148E8B-8D24-4B9A-BDE4-4B48BBA2DCCA\"></a></span>The <a href=\"#!/url=./si_cmds/MakeLeg.html\">MakeLeg</a> command creates a two-bone chain based on the positions of the top of the leg, the\n\
               knee and the ankle. Use the <a href=\"#!/url=./si_cmds/MakeFoot.html\">MakeFoot</a> command to add a foot.\n\
            </p> <img src=\"../images/GUID-75F75D63-EFAA-4F96-B20F-5305A9C9EE9D-low.png\" /> <img src=\"../images/GUID-63D5FD22-15FF-4A9F-BDBA-5ECBD0F740D5-low.png\" /> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-46536B07-820E-4784-827C-87308C629527\"></a></span>Example of leg. Right leg automatically created with box shadow rig and left leg with\n\
               thigh roll division.\n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0031\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D8E67620-0B04-4B7F-805F-49BB329883F1\"></a></span> Dog Leg\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-68E84ED0-D7EE-48DB-9361-31962274C71A\"></a></span>The <a href=\"#!/url=./si_cmds/MakeDogLeg.html\">MakeDogLeg</a> command creates a three-bone chain for the leg as well as a three-boned foot. The\n\
               command requires six guide objects for the leg and three more for the foot.\n\
            </p> <img src=\"../images/GUID-DB8BB2AC-B519-4A37-9DD4-BB9E2F2FA5DC-low.png\" /> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E27A5C1B-0852-4C36-9F81-48FE170178FA\"></a></span>When creating a dog leg style leg, the foot is automatically added.\n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0033\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-562FF737-8921-4237-9EA9-C8465CD86FD0\"></a></span> Quadruped Humerus and Femur Roll Control\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9759FA8-FAFF-45D2-A5DF-1B5DBEC72042\"></a></span>Note that the quadruped\'s humerus and femur roll subdivisions (the upper parts of\n\
                  their front and hind legs), are controlled from the <a href=\"#!/url=./si_cmds/MakeQuadruped.html\">MakeQuadruped</a> and <a href=\"#!/url=./si_cmds/MakeBipedDogLeg.html\">MakeBipedDogLeg</a> commands.\n\
               </p> <img src=\"../images/GUID-3482027F-C972-45E4-90E9-FB4C73001DE2-low.png\" /> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0035\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-7758ACDD-8847-4EA9-98B1-A95C5F8B2DA9\"></a></span> Feet\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B9CFB138-B5FA-4EB8-B963-DBC943B93A69\"></a></span>The <a href=\"#!/url=./si_cmds/MakeFoot.html\">MakeFoot</a> command is created from six control objects that identify its position and pivot\n\
               points. Note that the <a href=\"#!/url=./si_cmds/MakeBipedDogLeg.html\">MakeBipedDogLeg</a> command automatically creates a foot for you.\n\
            </p> <img src=\"../images/GUID-548D3CD3-2CC3-4F70-B0F9-F933470F538D-low.png\" /> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";