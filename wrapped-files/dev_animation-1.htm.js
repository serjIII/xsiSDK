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
      <meta name=\"topicid\" content=\"GUID-2FBD58C8-67A2-401C-9D55-0934C571412B\" />\n\
      <meta name=\"indexterm\" content=\"parameter-based animation\" />\n\
      <meta name=\"indexterm\" content=\"low-level animation\" />\n\
      <meta name=\"indexterm\" content=\"animation: basic tasks\" />\n\
      <meta name=\"indexterm\" content=\"basic animation tasks\" />\n\
      <meta name=\"indexterm\" content=\"keyframing: related commands, objects, and classes\" />\n\
      <meta name=\"indexterm\" content=\"locks: related commands, objects, and classes\" />\n\
      <meta name=\"indexterm\" content=\"tags: related commands, objects, and classes\" />\n\
      <meta name=\"indexterm\" content=\"lightboxing: related commands, objects, and classes\" />\n\
      <meta name=\"indexterm\" content=\"onion-skinning: related commands, objects, and classes\" />\n\
      <meta name=\"indexterm\" content=\"ghosting: related commands, objects, and classes\" />\n\
      <meta name=\"indexterm\" content=\"animation: character\" />\n\
      <meta name=\"indexterm\" content=\"character animation\" />\n\
      <meta name=\"indexterm\" content=\"animation: nonlinear\" />\n\
      <meta name=\"indexterm\" content=\"nonlinear animation\" />\n\
      <meta name=\"indexterm\" content=\"animation: high-level tasks\" />\n\
      <meta name=\"indexterm\" content=\"high-level animation tasks\" />\n\
      <meta name=\"indexterm\" content=\"rotations: converting between radians and degrees\" />\n\
      <meta name=\"indexterm\" content=\"degrees vs. radians\" />\n\
      <meta name=\"indexterm\" content=\"radians vs. degrees\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Animation Levels</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-2FBD58C8-67A2-401C-9D55-0934C571412B\"></a></span><div class=\"head\">\n\
            <h1>Animation Levels</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-1321F89D-F5FF-4A68-BD49-39823A3DAD8D\"></a></span>In Autodesk Softimage, there are basically three types of animation, generally grouped\n\
            into the following animation <em class=\"mild\">levels</em>:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6CD7C00E-6038-4F41-85E7-95D4AC6764DF\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_animation-1.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0004\">Low-Level (Parameter-Based) Animation</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-557D8BEA-9C82-4250-A807-4D14E2FB4F61\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_animation-1.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0006\">Character Animation</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-58170AEB-AA54-4FE3-9C33-7371882B2E2C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_animation-1.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0007\">Nonlinear Animation</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4FB8808C-E701-42C0-A5A0-4BF02912424F\"></a></span> Low-Level (Parameter-Based) Animation\n\
            </h2>   \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-57EC16C0-BF58-4D04-9233-1115561081AE\"></a></span>This type of animation involves some kind of data directly attached to a parameter\n\
               driving its value. Since it happens at the parameter level, which is the lowest customizable\n\
               element in Softimage, it is generally called <em class=\"mild\">low-level</em> animation.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-754FED69-7C62-46BA-BD06-A776D1C9B3E3\"></a></span>Typical examples of low-level animation are:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-99BC376A-4852-49A7-83D9-46DAB1D272BA\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_FCurves.htm\">FCurves</a></span> (keyframing)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8EDCE7E4-37EA-49C5-AF36-2992FCED588D\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_animation_FCurveInterpolationAndExtrapolation.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0034\">Constraints</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-84A0094D-A920-4161-8AEF-7C9AC951AD54\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_LinkedParameters.htm\">Linked Parameters</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CAC44F2E-5681-4182-9065-034ABC1D60C2\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions.htm\">Expressions</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A73E63A0-6D53-4C66-BA8C-F3F09D8A8EB7\"></a></span> <a href=\"#!/url=./files/cus_ops.htm\">Custom Operators</a> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-830281EA-3E90-4D30-B2B9-C739D8AD0BB1\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0742B019-7496-43B6-BB7C-9803E82F8004\"></a></span>These types of animation form the building blocks of the third type of animation,\n\
                     <span class=\"char_link\"><a href=\"#!/url=./files/dev_animation-1.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0007\">Nonlinear Animation</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0005\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-578FACB1-5ABA-4DC2-82B2-D5C65BFF4B41\"></a></span> Basic Animation Tasks\n\
               </h3>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB829BE7-AB21-4630-B760-535243CC0DD1\"></a></span>Basic animation tasks involve working at the parameter level. For example, setting\n\
                  keys on an FCurve. The following table provides links to the reference pages for many\n\
                  of the SDK tools you can use to help accomplish these tasks:\n\
               </p> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6F63358A-BAB1-43D0-AD9E-3C33017B30F4\"></a></span><p class=\"table-heading\">Type of Task</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-28441D86-A439-4604-85A9-BBA126B24E9B\"></a></span><p class=\"table-heading\">Commands Available</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B7CC48CB-45D5-45DE-85D2-FB51EAF867F6\"></a></span><p class=\"table-heading\">Object Model</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-528545E9-93C8-472E-ABC8-7EE5DB7E0771\"></a></span><p class=\"table-heading\">C++ API</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7759C892-AFF3-475D-801B-FC30F51F9D19\"></a></span><p class=\"table-body\"> Keyframing (setting and removing keys, working with fcurves)</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B81005C4-32D4-424A-A98D-7C4D11F549EE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SaveKey.html\">SaveKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C95A05AA-1CF8-48F3-9EE1-D38C3D50C60C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SaveKeyOnKeyable.html\">SaveKeyOnKeyable</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-394F9355-B15E-4479-BFBE-A1CC08E182E9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SaveKeyOnMarkedKeyable.html\">SaveKeyOnMarkedKeyable</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-B850FAF2-AAB3-4F0F-8B20-172E10F36E3B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SaveKeyOnPath.html\">SaveKeyOnPath</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-3782DF05-7C4B-4EA5-AC80-A6DE4A850803\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SavePivotKey.html\">SavePivotKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-EC85F413-3BF1-45B5-AF8B-546CAFF9AE1A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SetKeyUsingMarkingSet.html\">SetKeyUsingMarkingSet</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-26AD483E-A9B2-4C06-8813-A9675573A62E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SetKeyableAttributes.html\">SetKeyableAttributes</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-13F20688-C6EF-4226-818A-A335820F8EE5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/CopyKeys.html\">CopyKeys</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-813A2C92-27A0-482B-B593-5A9494DBAED8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/CutKeys.html\">CutKeys</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-560471F5-07D1-4123-92B1-0F84816B5E3D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/GetKeyInfo.html\">GetKeyInfo</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7D72B23A-AF7C-4E8A-8A43-EC370EF0E3B9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/PasteKeys.html\">PasteKeys</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2576CEF0-838C-4ABE-846D-8FB2938A34D9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SaveActionKey.html\">SaveActionKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-FEBC6B7C-3198-456C-AE4E-A41DB9BB6D24\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/KeyAllBoneRotations.html\">KeyAllBoneRotations</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-39C9446E-1F18-41F7-B6F4-375590A75D38\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/RemoveKey.html\">RemoveKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-88BB9FD9-819E-41DE-9742-1B4949EF565E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/RemoveKeyOnKeyable.html\">RemoveKeyOnKeyable</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A3E00F5D-450D-43C7-98DD-E6F67FFD652C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/RemoveKeyOnMarkedKeyable.html\">RemoveKeyOnMarkedKeyable</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-13E3DA34-1C4F-4B71-BB97-6D88D5CE36DE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-4EA0F7CD-4D2E-4C11-9718-92B44872F6A6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-B8F8E968-DDCF-47B0-B3F3-8B61AB2E843E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FCurveEditor.html\">FCurveEditor</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5D3B056D-3629-4CB5-9D3C-9221949292F3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html\">FCurve</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C9869BE6-E1BD-4AFF-BC2B-8CFD10185CB9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1FCurveKey.html\">FCurveKey</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9CE526AD-A8F6-4B7D-8A02-6606D0397073\"></a></span><p class=\"table-body\"> Locking parameters and objects</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A3093086-B11D-40E6-BA9B-ED6343507AB7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/Lock.html\">Lock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8C1D2F34-4693-4BB2-86EF-D002BB75FD0E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/Unlock.html\">Unlock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-599A8C2A-3FEB-469D-9F74-C1B2D3FA3836\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/InspectLocks.html\">InspectLocks</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8E64507A-CF7F-4FBE-A288-DFA2616A9E4B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Parameter.IsLocked.html\">Parameter.IsLocked</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-3AEAC54E-21E5-49E1-9C96-3D0DA2623C52\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Parameter.SetLock.html\">Parameter.SetLock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2897E7FA-1866-429C-87D6-9A30B266C3B4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Parameter.UnSetLock.html\">Parameter.UnSetLock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-26F87B15-352C-4523-BFD2-44D1242E26B9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Parameter.LockLevel.html\">Parameter.LockLevel</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-513267A8-5343-46BA-9852-CB63204951EF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Parameter.LockType.html\">Parameter.LockType</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C2B96099-16CA-473D-AF3D-AF60625AFFC2\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">ProjectItem.IsLocked</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-B3F95897-F3D1-4124-BA57-0C9022B00242\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">ProjectItem.LockOwners</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-978490D7-17C8-481C-9E2B-1D9AAC56BD43\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">ProjectItem.SetLock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A14C1768-A806-4540-B3B5-45FF8088B60A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">ProjectItem.UnSetLock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-A42FECE9-F19D-4766-8773-48BAD606A411\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">ProjectItem.LockLevel</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-CAA71ABB-5AFD-48A5-8327-2F3BC10AE418\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">ProjectItem.LockMasters</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-FFC2FCAB-DDB4-4B2B-91E7-FDE94A2D4260\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ProjectItem.LockType.html\">ProjectItem.LockType</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-BC144DE7-53A9-4DA2-BD10-6EC287D3662F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FCurve.Locked.html\">FCurve.Locked</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-CE9C6CF4-4A2F-4CD1-BD83-E8BC44F17665\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FCurveKey.Locked.html\">FCurveKey.Locked</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BDD35D61-0E4B-493C-96D4-04F28DE177DE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#IsLocked\">Parameter::IsLocked</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8F9DAA7F-A05D-4326-A06A-4C84C767D25E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#SetLock\">Parameter::SetLock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-27B86472-661E-4356-BEF3-A84DF3C13B1D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#UnSetLock\">Parameter::UnSetLock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-69967C1E-1429-4EA3-AAA7-C82AAF9D1CE8\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetLockLevel\">Parameter::GetLockLevel</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2DD426CE-8043-4A0D-A66F-DEB32A52B3EC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetLockType\">Parameter::GetLockType</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-39688BEC-4DE7-4C40-8395-BD367751B798\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#IsLocked\">ProjectItem::IsLocked</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F6F55B62-D9B8-475E-83F8-65227BBA08E7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetLockOwners\">ProjectItem::GetLockOwners</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2902BD47-44AD-4BA8-A7B7-4C6E7A5C8559\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#SetLock\">ProjectItem::SetLock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7388DD95-02C3-4B25-A31A-0FB3D4EF81B7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#UnSetLock\">ProjectItem::UnSetLock</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-0FBF8A22-7F22-4564-B701-FB76E34B2754\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetLockLevel\">ProjectItem::GetLockLevel</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-B50C42BB-C9B3-4E90-AA53-F81584CCAA83\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetLockType\">ProjectItem::GetLockType</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-B4DFC8A9-5D84-421C-9BE8-C6693F50017B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html#GetLocked\">FCurve::GetLocked</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-50154A41-641B-4260-BE5E-E2B10F1936D4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1FCurveKey.html#GetLocked\">FCurveKey::GetLocked</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-15F3881A-4F00-4639-A974-B2A650C0AEC5\"></a></span><p class=\"table-body\"> Tagging parameters</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1D43D831-2775-49B4-ABF1-0A74C32574D9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/Tag.html\">Tag</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-424111F8-F2AE-4ADC-833F-D3E4E26247AD\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/Untag.html\">Untag</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C5C16E84-F99D-449B-8132-952AFBC2E09F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/TagObject.html\">TagObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E336BFB0-641F-43D6-845F-89F23A10DD27\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Parameter.Tags.html\">Parameter.Tags</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E36D715A-D59D-40F3-A157-3F66BCB01D5E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">ProjectItem.TaggedParameters</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-982497E2-F67F-464E-8DFB-8D1CFBD8EDF1\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetTags\">Parameter::GetTags</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-61041F02-7FBC-418F-A38E-2DFB5F9693F7\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetTaggedParameters\">ProjectItem::GetTaggedParameters</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E79AC0E3-5EC6-4492-847F-1F71ABDD8FD9\"></a></span><p class=\"table-body\"> Ghosting animation (onion-skinning or lightboxing)</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B50CA52A-7CF5-4DEB-84BF-F2A3385CF288\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ToggleGhosting.html\">ToggleGhosting</a> <a href=\"#!/url=./si_cmds/UnghostAll.html\">UnghostAll</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7833C3FB-C62D-470D-8B2E-6CE5291402A1\"></a></span><p class=\"table-body\">n/a</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E419DF1B-ED06-4EE7-9E63-77C808C9D611\"></a></span><p class=\"table-body\">n/a</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0006\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C5A5A62E-ACC6-4552-9107-3126706A3B1E\"></a></span> Character Animation\n\
            </h2>   \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B3620C41-09B1-4873-9056-876E4A27148F\"></a></span>Character Animation involves building skeletons and enveloping them, setting IK/FK\n\
               constraints on their joints to simulate <em class=\"mild\">natural</em> movement, and then keyframing their movement. Some issues pertaining to <span class=\"char_link\"><a href=\"#!/url=./files/dev_Envelopes.htm\">Envelopes</a></span> are covered in this chapter.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC8F72FB-1381-408D-817E-73B5F26DC578\"></a></span>When creating more complex characters, usually control rigs are used. You can make\n\
               your own character rigs using the SDK\'s <a href=\"#!/url=./files/cus_cdk.htm\">Character Development Kit</a> (CDK).\n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0007\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8512A21F-E5E0-4521-A5AD-163E8E1ACBFC\"></a></span> Nonlinear Animation\n\
            </h2>   \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D136CF6A-D41A-421E-BB0B-D62D003757BC\"></a></span>Nonlinear Animation is another layer of abstraction: it basically involves wrapping\n\
               low-level and shape animation in a special container called a <em class=\"mild\">source</em> and then using that source to instantiate a clip in the <span class=\"char_link\"><a href=\"#!/url=./files/RelativeName.htm#WS00FA839CE9F5F148906F76DDEF5331DD-005A\">Animation Mixer</a></span>. That is, a version of the source animation that can be modified independently of\n\
               the original source. The other benefit of the mixer is that, as its name suggests,\n\
               you can use it to build transitions between clips, apply weighting, cycle and warp\n\
               clips, etc.\n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0008\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-8F654CA3-F736-44E1-9476-F1DB195C0CCD\"></a></span> High-Level Animation Tasks\n\
               </h3>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-14123298-E219-4753-BC13-9641C366DCBA\"></a></span>High-level animation tasks are often related to the <span class=\"char_link\"><a href=\"#!/url=./files/RelativeName.htm#WS00FA839CE9F5F148906F76DDEF5331DD-005A\">Animation Mixer</a></span> and its basic components, <span class=\"char_link\"><a href=\"#!/url=./files/SourcesAndClips.htm\">Sources and Clips</a></span>. For example, creating clip effects. The following table provides links to the reference\n\
                  pages for many of the SDK tools you can use to help accomplish these tasks:\n\
               </p> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3B6E2F41-E455-4431-AD0A-0A832EA386A5\"></a></span><p class=\"table-heading\">Type of task</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-356077EC-7F44-4DE0-B002-F515827B67DD\"></a></span><p class=\"table-heading\">Commands Available</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-915173CC-B968-4656-908F-3097491C54C5\"></a></span><p class=\"table-heading\">Object Model</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-40076CA1-3831-45DE-815F-DAF3446310D6\"></a></span><p class=\"table-heading\">C++ API</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4E167D4C-B1E2-48FB-89AE-CC5381289343\"></a></span><p class=\"table-body\">Copying and pasting animation</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-68C409C7-32D1-4D5E-BB8F-636B0935E975\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyDeformKey.html\">ApplyDeformKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-AD7A37AB-C8E0-45C3-B652-992B51A2A90E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyShapeKey.html\">ApplyShapeKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9AA691FA-B42F-4F99-B42A-44BB26D0BAA3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ReplaceShapeKey.html\">ReplaceShapeKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-CA7B9FFD-0BB2-4F69-A7D3-5F616F9BE056\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SaveDeformKey.html\">SaveDeformKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-B67BEA02-197F-4B66-B193-97618CE2579C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SaveShapeKey.html\">SaveShapeKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F8591A2E-6317-49DB-83B0-80187E8DF973\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SelectShapeKey.html\">SelectShapeKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-4B1FAA32-F685-409D-990A-6234B8A5C71C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/StoreShapeKey.html\">StoreShapeKey</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3D55C4ED-FA38-46AA-A042-B9C04A19AE67\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5765972C-02C1-43F8-A4A6-5824029BCB2F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F99D99CD-9C2D-4067-85CE-F98A344DFF81\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B4DAE98-184A-426D-BE2C-45B4F5E0C335\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ShapeKey.html\">ShapeKey</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-028A026B-C2F0-4A46-9805-89477802909A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ShapeClip.html\">ShapeClip</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E65BCE29-3E1C-4630-8081-51BB80017297\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91BB0FA4-BB53-48C9-AA6A-DFFE78855F6D\"></a></span><p class=\"table-body\">Clip effects</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F0156503-DF66-4649-90CB-FB3504F87B99\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SaveOffsetKeys.html\">SaveOffsetKeys</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-C8280888-BEA5-4D42-8F67-3D2F75AD1300\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/CreateOffsetEffect.html\">CreateOffsetEffect</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-1CEF93E6-5760-4D9A-808F-3E16FA688ED4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/OffsetValueMap.html\">OffsetValueMap</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-D44971C6-BC9D-4987-B177-8DA9ACC0C69D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ResetOffset.html\">ResetOffset</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-371BB354-7D78-43BE-809C-B0831426E2F2\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SaveOffsetKeys.html\">SaveOffsetKeys</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F7CC1794-4AF2-4ED9-8315-00825C61653E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ClipEffect.html\">ClipEffect</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9E9E852A-8915-42A0-86E2-B184082BAF03\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ClipEffectItem.html\">ClipEffectItem</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-AE626460-9EE4-4141-848C-452323EF9247\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/MappedItem.html\">MappedItem</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0E858548-2BC1-4A41-AC73-826CD8E4F589\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ClipEffect.html\">ClipEffect</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-7088A73F-73FB-42D5-A478-400A838F916D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ClipEffectItem.html\">ClipEffectItem</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8EBFFEC1-F840-4CF7-B2AD-4919AEAF07BE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1MappedItem.html\">MappedItem</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-652DE24D-4AAD-4488-A095-B5DB6E43697D\"></a></span><p class=\"table-body\">Merging animation (copies only existing keys into action)</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-03B476AC-3387-4802-9E68-6D553FDF807A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/MergeClips.html\">MergeClips</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" rowspan=\"2\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4453BA64-26CC-4898-9B7E-7B74A36DF8AF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Clip.html\">Clip</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-67988790-E878-4FA5-B16C-A8B8484312CE\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-6A6A6060-CA95-4676-86AB-2D830816480C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" rowspan=\"2\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-50D37838-BBEE-4CBD-9C0B-6B7DBC592F18\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Clip.html\">Clip</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-72B3BA7E-C5CD-46C4-903C-026A1CB0B942\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-42609715-E0E7-4169-8186-246582B37569\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html\">FCurve</a> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E27F4D98-C778-49E6-9824-6E19C5083872\"></a></span><p class=\"table-body\">Plotting (or freezing) animation (creates one key for each frame in the action)</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F1A31354-7DF3-436C-ACD5-007DFD731688\"></a></span><p class=\"table-body\"> PlotAndApplyAction </p> <span class=\"anchor_wrapper\"><a name=\"GUID-E3BD1158-DA6B-4E7D-937C-795A9B69A7BE\"></a></span><p class=\"table-body\"> PlotConstrainedTransforms </p> <span class=\"anchor_wrapper\"><a name=\"GUID-AE8E191B-2968-42B1-AD93-256499D9A610\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/PlotShape.html\">PlotShape</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-EBB96D3C-28AE-42A7-BC26-C4C24E0FB34A\"></a></span><p class=\"table-body\"> PlotToAction </p> <span class=\"anchor_wrapper\"><a name=\"GUID-FD296F5E-9F3D-4431-939E-7C8D69186AE4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/FreezeAndReplaceClips.html\">FreezeAndReplaceClips</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-D378BCD8-899B-4A42-9D93-57F04A2C4D45\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/FreezeClips.html\">FreezeClips</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-1EADD981-F602-4FB6-A2A4-1DF017284E38\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-30E15616-AA87-4BB8-8D0A-9654AA3DD91D\"></a></span><p class=\"table-body\" /> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0009\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-703FCD5A-C19E-422E-B0AF-CDC9CAEBA297\"></a></span> Radians vs. Degrees (Rotations)\n\
            </h2>    \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5CE8CAE-B310-4C8A-AC89-9F429EE95D04\"></a></span>Something important to remember when working with rotations is that scripting commands\n\
               process rotation data as degrees whereas the object model and the C++ API process\n\
               rotation data as radians. To help cope with converting between these systems, the\n\
               SDK provides some conversion functions:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4408F6E1-809E-47AE-BD83-A20C54BCA3E5\"></a></span><a href=\"#!/url=./si_om/XSIMath.RadiansToDegrees.html\">XSIMath.RadiansToDegrees</a> or XSI::MATH::RadiansToDegrees\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-46FB3A9E-5058-4469-8AF9-28037A9A7E55\"></a></span><a href=\"#!/url=./si_om/XSIMath.DegreesToRadians.html\">XSIMath.DegreesToRadians</a> or XSI::MATH::DegreesToRadians\n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";