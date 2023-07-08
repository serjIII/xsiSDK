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
      <meta name=\"topicid\" content=\"GUID-35BACBDC-6973-41F3-ACA7-612DFCCC319F\" />\n\
      <meta name=\"indexterm\" content=\"envelopes: creating chains\" />\n\
      <meta name=\"indexterm\" content=\"envelopes: posing chains\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Envelopes</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"positions\", \"si_cpp/group__RenderMapDefine.html#ga4ff6c20401928cc896711bb86fab2870\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-35BACBDC-6973-41F3-ACA7-612DFCCC319F\"></a></span><div class=\"head\">\n\
            <h1>Envelopes</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C87000A-5577-4FCB-8BD5-CF6577227CE2\"></a></span>When building a two step process: first creating the chains, then posing the chains.\n\
               This section will explain these two steps in detail.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6E35546-AF10-4694-B741-0E84F15E718B\"></a></span>The reason two steps are used is root and bone orientations are difficult to set at\n\
               chain creation time. Methods like <a href=\"#!/url=./si_om/X3DObject.Add2DChain.html\">X3DObject.Add2DChain</a> or X3DObject::Add2DChain, <a href=\"#!/url=./si_om/X3DObject.Add3DChain.html\">X3DObject.Add3DChain</a> or X3DObject::Add3DChain and <a href=\"#!/url=./si_om/ChainRoot.AddBone.html\">ChainRoot.AddBone</a> or ChainRoot::AddBone create bones using target positions, but calculate orientation\n\
               automatically. To ensure the desired bone orientation we set poses explicitly in a\n\
               separate step after the chain has been created.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-004F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-91EF1B74-B0DA-45A6-ABC0-C7B3602971A6\"></a></span> Creating Chains\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6BF60BE4-25C8-471B-9291-8CFAEE3AE520\"></a></span>When you create chains you are specifying the position of each joint in global coordinates.\n\
                  You specify the first two joint positions via the <a href=\"#!/url=./si_om/X3DObject.Add2DChain.html\">X3DObject.Add2DChain</a> or X3DObject::Add2DChain or <a href=\"#!/url=./si_om/X3DObject.Add3DChain.html\">X3DObject.Add3DChain</a> or X3DObject::Add3DChain methods and any subsequent ones to the <a href=\"#!/url=./si_om/ChainRoot.AddBone.html\">ChainRoot.AddBone</a> or ChainRoot::AddBone method.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DCB6652B-A589-444B-98F8-A8ECD479F864\"></a></span>While a chain is made up of separate objects, its elements are interrelated so it\n\
                  is much easier to import an entire chain at once rather than each element one at a\n\
                  time. For the initial creation of a chain using the <a href=\"#!/url=./si_om/X3DObject.Add2DChain.html\">X3DObject.Add2DChain</a> or X3DObject::Add2DChain or <a href=\"#!/url=./si_om/X3DObject.Add3DChain.html\">X3DObject.Add3DChain</a> or X3DObject::Add3DChain methods, you must specify positions for both the root and\n\
                  tip of the second bone. To add bones you must have a <a href=\"#!/url=./si_om/ChainRoot.html\">ChainRoot</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ChainRoot.html\">ChainRoot</a> object (since it is this interface which implements the <a href=\"#!/url=./si_om/ChainRoot.AddBone.html\">ChainRoot.AddBone</a> or ChainRoot::AddBone method). Therefore to create any chain element you require\n\
                  data from at least one other chain element, so it is much easier to create the chain\n\
                  all at once.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E4507AF1-A303-4EAC-BB36-9A2B2F18BBFC\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D33BEB32-554F-4471-B68D-520D11DE8EA2\"></a></span>The third and fourth arguments in <a href=\"#!/url=./si_om/X3DObject.Add2DChain.html\">X3DObject.Add2DChain</a> or X3DObject::Add2DChain are used to control the root\'s orientation and the 2D chain\n\
                        plane. Since you can pose each element explicitly later, you need to provide only\n\
                        default values for them.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0050\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BBAE2878-F366-4012-8063-8912E3191039\"></a></span>JScript Example: Creating Chains and Bones\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
NewScene( null, false ); \n\
 \n\
// Set up vectors for specifying <a href=\"javascript:void(0)\" data=\"positions\" class=\"a_multireflink\">positions</a>, etc. \n\
var l_oPosRoot = XSIMath.CreateVector3(); // Chain root  \n\
l_oPosRoot.Set( -7.40740740740709E-03, -2.65333293080546, 0 ); \n\
 \n\
var l_oPosEff = XSIMath.CreateVector3();  // Chain effector  \n\
l_oPosEff.Set( 2.36296296296296, -0.088938533993479, 0 ); \n\
\n\
var l_oNormal = XSIMath.CreateVector3();  // Skeleton plane normal  \n\
l_oNormal.Set( 0, 0, 0 ); \n\
 \n\
var l_oPosEff_Bone1 = XSIMath.CreateVector3();  // Effector for 2nd bone  \n\
l_oPosEff_Bone1.Set( 2.22222222222221E-02, 2.29757879483154, 0 ); \n\
 \n\
var l_oPosEff_Bone2 = XSIMath.CreateVector3();  // Effector for 3rd bone  \n\
l_oPosEff_Bone2.Set( 0.466666666666667, 3.54271827074025, 0 ); \n\
 \n\
 // Create chain \n\
var l_oChainRoot = ActiveSceneRoot.Add2DChain( l_oPosRoot, l_oPosEff,  \n\
   l_oNormal, si2DChainNormalDegree ); \n\
var l_oFirstBone = l_oChainRoot.Bones(0); \n\
 \n\
// Add remaining bones \n\
l_oChainRoot.AddBone( l_oPosEff_Bone1, siChainBonePin ); \n\
l_oChainRoot.AddBone( l_oPosEff_Bone2, siChainBonePin ); \n\
</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0051\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EE37222E-C4D1-4B93-A6EF-52D785CDC9F5\"></a></span> Posing Chains\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A50DAEDB-7AA2-401B-A9D2-E9DE30D544D0\"></a></span>The trick with posing chains is to avoid triggering a chain\'s IK solver. IK solvers\n\
                  are triggered whenever the position of a bone or effector is <em class=\"mild\">controlled</em>, which includes anything that could change position, such as changing the position\n\
                  value in a property page, constraining in position, position expressions, scripted\n\
                  ops on the kinematics node, etc. Even setting transforms from the SDK are considered\n\
                  position control, and the IK evaluations that result lead to problems importing pose\n\
                  data onto chains.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9D207692-A734-452B-AC8B-F895A6ED405B\"></a></span>If you set a pose while controlling position, the IK solver will evaluate and write\n\
                  its solution to the chain, thereby overwriting the poses that have just been set.\n\
                  Therefore, to ensure you are setting the correct poses on your chains you must avoid\n\
                  triggering a chain\'s IK solver.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-58F0CFEC-DC95-4070-A520-5FA88BA30616\"></a></span>In Softimage v3.5 or earlier the only way to avoid the IK solver was to avoid controlling\n\
                  positions. This was done by posing in FK(rotations) only. Chains can be posed in FK\n\
                  either by using the <a href=\"#!/url=./si_cmds/Rotate.html\">Rotate</a> command, or by setting rotation parameters in the local or global transform. Neither\n\
                  of these approaches will control position so the IK solver will not overwrite the\n\
                  pose.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-17BAFB12-B74E-4C8A-B5A4-777292E99349\"></a></span>However, as of v4.0 you can actually mute the IK Solver before setting the pose.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0052\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1AADF743-6661-4593-BD04-FE110592C8E8\"></a></span>JScript Example: Setting Poses on the New Chains\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-52CFF34E-73BA-41CC-B6F8-40DA95D0A602\"></a></span>This example continues from <span class=\"char_link\"><a href=\"#!/url=./files/dev_Envelopes.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0050\">JScript Example: Creating Chains and Bones</a></span> and demonstrates how to turn off the IK Solver before posing the chains.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Create transform for pose (ie., if you are writing an importer this \n\
// transform would be provided instead of this one) \n\
var l_oNewPose = XSIMath.CreateTransform(); \n\
var l_oMatrix4Rot = XSIMath.CreateMatrix3();\n\
l_oMatrix4Rot.Set( 1.0,1.0,0.0, -1.0,1.0,0.0, 0.0,0.0,-1.0 );\n\
 \n\
// Turn off IK Solver \n\
var l_oKineChainProp = l_oFirstBone.Properties( \"Kinematic Chain\" ); \n\
var l_oMuteOpParam = l_oKineChainProp.Parameters( \"muteikop\" ); \n\
l_oMuteOpParam.Value = true; \n\
 \n\
// Apply the Transform \n\
l_oNewPose.SetRotationFromMatrix3( l_oMatrix4Rot );\n\
\n\
\n\
// Turn the IK Solver back on\n\
l_oMuteOpParam.Value = false; \n\
</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";