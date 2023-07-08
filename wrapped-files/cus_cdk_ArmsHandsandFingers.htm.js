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
      <meta name=\"topicid\" content=\"GUID-60CC0535-79A5-4BB4-9836-E69F72F23A2E\" />\n\
      <meta name=\"indexterm\" content=\"Arms (character development kit)\" />\n\
      <meta name=\"indexterm\" content=\"Arm Rotation, Manipulation, and Attachment\" />\n\
      <meta name=\"indexterm\" content=\"Hands and Fingers (character development kit)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Arms, Hands, and Fingers</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-60CC0535-79A5-4BB4-9836-E69F72F23A2E\"></a></span><div class=\"head\">\n\
            <h1>Arms, Hands, and Fingers</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-4ED3FA35-2E6A-4126-AED6-A800EC6E340B\"></a></span>This section contains the following topics:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2290F1CD-74A3-4F37-B9A5-B4D8EA4D9FC3\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_ArmsHandsandFingers.htm#WS59CC1705BE42794BBCB80457F107A6E8-0025\">Arms</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4EFF336F-B7A7-4ACF-9D35-5AF7D2C2504C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_ArmsHandsandFingers.htm#WS59CC1705BE42794BBCB80457F107A6E8-0028\">Arm Rotation, Manipulation, and Attachment</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCF1FDD1-359A-45F3-9477-949E20DAACCD\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_cdk_ArmsHandsandFingers.htm#WS59CC1705BE42794BBCB80457F107A6E8-002A\">Hands and Fingers</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0025\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8E239088-C24F-4415-B3F5-E669C30FA36D\"></a></span> Arms\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB3116CC-7C82-40C9-851E-66C437EC749B\"></a></span>The <a href=\"#!/url=./si_cmds/MakeArm.html\">MakeArm</a> command creates a two-bone arm and an up vector control object. The arm bones are\n\
               created from a collection of guide objects that define the shoulder, elbow, and hand\n\
               positions. MakeArm can optionally add roll divisions to the bicep and forearm. Alternatively,\n\
               you can control roll subdivisions with <a href=\"#!/url=./si_cmds/MakeForearmRoll.html\">MakeForearmRoll</a> and <a href=\"#!/url=./si_cmds/MakeBicepRoll.html\">MakeBicepRoll</a>. If creating forearm or bicep roll, the command also needs a hand (<a href=\"#!/url=./si_cmds/MakeHand.html\">MakeHand</a>) to attach to the root of the roll division objects.\n\
            </p> <img src=\"../images/GUID-600B0453-8FB7-4276-A721-80026834B0C8-low.png\" /> <img src=\"../images/GUID-6A50AF3B-4306-45FD-9C82-71DBBB5393B1-low.png\" /> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-06363C9B-C1F1-452E-BF7A-A71341B1CBEB\"></a></span>Example of left and right arm. Rig. Notice that the left arm has roll subdivisions\n\
               and a hand bone.\n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0028\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9AC70BB5-CC44-477E-A065-6AFE3666490D\"></a></span> Arm Rotation, Manipulation, and Attachment\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-74F9F752-1585-4A19-AEED-F27B2CF60F94\"></a></span>The parameters for controlling arm rotation, symmetrical manipulation or hierarchy\n\
               attachment are called from the <a href=\"#!/url=./si_cmds/MakeBiped.html\">MakeBiped</a> command.\n\
            </p> <img src=\"../images/GUID-60999AE3-DEB6-42B8-B69D-813779DAC1F5-low.png\" /> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-002A\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8BA1F7CD-B546-4421-AFF3-F38AF56B8B40\"></a></span> Hands and Fingers\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-80D576AA-FB48-4D18-9847-9C139B94F5D4\"></a></span>The <a href=\"#!/url=./si_cmds/MakeHand.html\">MakeHand</a> command uses guide objects that define the finger joints and the direction in which\n\
               the fingers curl. This command also lets you create 2 or 3-D chains for the fingers.\n\
            </p> <img src=\"../images/GUID-65E44747-BF53-4603-B799-CE6238138898-low.png\" /> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";