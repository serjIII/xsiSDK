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
      <meta name=\"topicid\" content=\"GUID-A1591BDE-D8C3-407F-B07D-7F74A1D65229\" />\n\
      <meta name=\"indexterm\" content=\"Available Commands\" />\n\
      <meta name=\"indexterm\" content=\"Body Parts\" />\n\
      <meta name=\"indexterm\" content=\"Other Commands\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Building a Customized Rig</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A1591BDE-D8C3-407F-B07D-7F74A1D65229\"></a></span><div class=\"head\">\n\
            <h1>Building a Customized Rig</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D146C72D-B85D-4F5B-9E51-919C95B21F74\"></a></span>Based on Softimage\'s default proportional guides or on guides of your own, you can\n\
               build a customized rig to make any configuration of creature you want. Each of the\n\
               commands lets you set options for your creature\'s body parts.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-000B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B685999C-1640-4C8A-9304-40C61373F30B\"></a></span> Available Commands\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-000C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-D761A937-FE58-4948-8471-D22661895F92\"></a></span> Body Parts\n\
                  </h3>  \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-9676B42B-EB98-4617-8EE1-0CA53DDE4698\"></a></span><a href=\"#!/url=./si_cmds/MakeHead.html\">MakeHead</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_HeadandNeck.htm\">Head and Neck</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-75EB0434-9136-4765-A67D-503BC624C588\"></a></span><a href=\"#!/url=./si_cmds/MakeTorso.html\">MakeTorso</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_ChestandSpine.htm\">Chest and Spine</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-82884286-BC3E-4C8B-B936-D8A18F4A3462\"></a></span><a href=\"#!/url=./si_cmds/MakeBelly.html\">MakeBelly</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_BellyandHips.htm\">Belly and Hips</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-8107DB37-4D4D-4054-B261-468A4814977B\"></a></span><a href=\"#!/url=./si_cmds/MakeHip.html\">MakeHip</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_BellyandHips.htm\">Belly and Hips</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9AB6EC6-D805-4608-8065-1C7C7F27B3F4\"></a></span><a href=\"#!/url=./si_cmds/MakeTail.html\">MakeTail</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_Tail.htm\">Tail</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3F30371-C30B-48EB-BF82-66D2D47AF865\"></a></span><a href=\"#!/url=./si_cmds/MakeArm.html\">MakeArm</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_ArmsHandsandFingers.htm\">Arms, Hands, and Fingers</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-3A7C7C73-C607-442F-90D4-2AAAF4100D3B\"></a></span><a href=\"#!/url=./si_cmds/MakeHand.html\">MakeHand</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_ArmsHandsandFingers.htm\">Arms, Hands, and Fingers</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-7AE0B76D-B2E7-49A6-997E-80EB2D22EF51\"></a></span><a href=\"#!/url=./si_cmds/MakeForearmRoll.html\">MakeForearmRoll</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_ArmsHandsandFingers.htm\">Arms, Hands, and Fingers</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C943295D-BC35-4223-B089-918ABEBF0789\"></a></span><a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_ArmsHandsandFingers.htm\">Arms, Hands, and Fingers</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A8AC094-DB65-47C6-9815-2F2868C59BE1\"></a></span><a href=\"#!/url=./si_cmds/MakeLeg.html\">MakeLeg</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_LegsandFeet.htm\">Legs and Feet</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-249E531D-B2F5-4F5A-B3D8-6C07D4499BB2\"></a></span><a href=\"#!/url=./si_cmds/MakeDogLeg.html\">MakeDogLeg</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_LegsandFeet.htm\">Legs and Feet</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-659F4E04-0CB0-42AF-A463-DF1BFA90DD76\"></a></span><a href=\"#!/url=./si_cmds/MakeFoot.html\">MakeFoot</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_LegsandFeet.htm\">Legs and Feet</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA800E3E-6834-49A1-BEF7-73A83EE660F9\"></a></span><a href=\"#!/url=./si_cmds/MakeJointCompression.html\">MakeJointCompression</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_Skin.htm\">Skin</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-CBA6E5ED-97C4-47C4-A0CC-AC2B43B5B21E\"></a></span><a href=\"#!/url=./si_cmds/Make2PointSlide.html\">Make2PointSlide</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_Skin.htm\">Skin</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-D12E0995-47BB-4704-817B-518C68024B54\"></a></span><a href=\"#!/url=./si_cmds/MakeThighSlide.html\">MakeThighSlide</a>—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_Skin.htm\">Skin</a></span>.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-000D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-FE98B518-A612-49BD-99CF-1902D2CEE107\"></a></span> Other Commands\n\
                  </h3>  \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C2984338-7F3E-4C5A-A991-04DB52D463A3\"></a></span><a href=\"#!/url=./si_cmds/MakeRigIcon.html\">MakeRigIcon</a>: Allows you set the kind of icon you want use for the control objects in your rig.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-9897BD25-3DA0-4993-AC8A-BEA7F763F877\"></a></span><a href=\"#!/url=./si_cmds/MakeShadowChain.html\">MakeShadowChain</a> and <a href=\"#!/url=./si_cmds/MakeShadowSpine.html\">MakeShadowSpine</a>: Lets you create shadow rigs separately from the main rig component commands.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-143D5D23-6AA6-4083-852F-F49E8437EF96\"></a></span><a href=\"#!/url=./si_cmds/MakeSpine.html\">MakeSpine</a>: Equivalent to the <span class=\"MenuCascade\" id=\"GUID-3A9B44EA-6B42-4B86-A93C-90B1780D6257\">Create Spine</span> option in the Animate Toolbar, which creates a quaternion spine.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-78396494-2EE4-4C83-9424-59EEC1961B03\"></a></span><a href=\"#!/url=./si_cmds/MakeControlSplines.html\">MakeControlSplines</a>: Equivalent to the <span class=\"MenuCascade\" id=\"GUID-10EDA664-22FE-4276-BD63-282160ABDBC2\">Create Control Splines</span> option in the Animate Toolbar. Control splines are used for facial setups where you\n\
                           want to simulate skin sliding by using a network of curves to simulate where the flow\n\
                           lines of deformation are on your character\'s face.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9870EC92-1C82-4083-8E30-4A1594E61710\"></a></span>Most of the commands share these common features:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-15EE34F8-C37D-4D8C-8414-FAD49B4C5A50\"></a></span> <em class=\"strong\">Guide objects</em>: Each component requires guide objects to position the controls relative to your\n\
                           character\'s topology. You can use the default guides, or create your own.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-69F72861-8710-44EF-BFF6-CE18C6D65AC2\"></a></span> <em class=\"strong\">Parent objects</em>: You specify which component is parented to which other component in the rig. Each\n\
                           command returns a JScript object containing the data members it creates.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B9DA3B2-C812-48CA-8934-3CF7177491F6\"></a></span> <em class=\"strong\">Prefixes for objects</em>: You can easily supply a prefix to identify left and right body parts where appropriate.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E1EC29DB-DAF3-4738-ACDE-3FD673016B2A\"></a></span> <em class=\"strong\">Shadow rigs</em>: Optional parameters for each rig component let you specify the type of shadow rig\n\
                           you\'d like to create. There are also commands that allow you to create shadow rigs\n\
                           separately from the component commands.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6D9C4D16-EBEC-402F-8743-64F751C6A51E\"></a></span> <em class=\"strong\">Return Objects</em>: Each command returns a JScript object which contains the components of the rig,\n\
                           as well as envelope groups and hidden object groups where appropriate.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2106737F-88EF-4FEA-99AF-2CFD7246187D\"></a></span>The following provides an overview to building the various components of your rig.\n\
                     For details about each of the commands, see <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";