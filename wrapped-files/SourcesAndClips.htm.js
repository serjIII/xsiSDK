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
      <meta name=\"topicid\" content=\"GUID-6BFEF5AF-A9D9-4CC7-B382-BFD658704B04\" />\n\
      <meta name=\"indexterm\" content=\"clips: overview\" />\n\
      <meta name=\"indexterm\" content=\"sources: overview\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Sources and Clips</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6BFEF5AF-A9D9-4CC7-B382-BFD658704B04\"></a></span><div class=\"head\">\n\
            <h1>Sources and Clips</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-356A8B04-A333-46A9-B740-B19C28CDADAC\"></a></span>At the most simple level, any data that can be instantiated as a <em class=\"mild\">clip</em> is called a <em class=\"mild\">source</em>. This covers a broad range of data, from animation in the <span class=\"char_link\"><a href=\"#!/url=./files/RelativeName.htm#WS00FA839CE9F5F148906F76DDEF5331DD-005A\">Animation Mixer</a></span> to an image in the FxTree. The word <em class=\"mild\">source</em> can refer to the atomic data element that drives a parameter (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_animation-1.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0004\">Low-Level (Parameter-Based) Animation</a></span>) or to the action, shape, audio, or image on which a clip is instantiated. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0055\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-60765F3A-01DA-4372-8179-35231A092293\"></a></span> Clips\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C81ABB86-5D68-4247-BF82-69E1AC356CDC\"></a></span>In Softimage, there are three categories of clips, as described in this table: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_103C25FE7E264EBAA4D43B7CE4EC85C2\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"16.666666666666664%\" align=\"left\" />\n\
                        <col width=\"16.666666666666664%\" align=\"left\" />\n\
                        <col width=\"16.666666666666664%\" align=\"left\" />\n\
                        <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        <col width=\"16.666666666666664%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-02E9A216-03FD-4875-9D95-593DCE67C079\"></a></span><p class=\"table-heading\">Clip Category </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-138F76FA-D661-4818-ADB5-8D303EFC7ACE\"></a></span><p class=\"table-heading\">Softimage Object Model </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CF2DB9F4-CCF5-4F4D-83AE-6A116AE16879\"></a></span><p class=\"table-heading\">C++ API </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3178A211-5977-4D5A-B84F-D28285D7C080\"></a></span><p class=\"table-heading\">Description </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3CA1C754-6C49-404C-B88C-43693E1FA290\"></a></span><p class=\"table-heading\">Mixer? </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D8629761-6F5B-4C37-A87D-1657B73DD262\"></a></span><p class=\"table-body\">Animation/Audio </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9686802D-A270-43B9-AE87-86823F52BDD6\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Clip.html\">Clip</a> <a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a> <a href=\"#!/url=./si_om/ClipContainer.html\">ClipContainer</a> <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A831CF05-2E5C-485D-91B9-4656E66871F5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Clip.html\">Clip</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5F69D7D5-71E8-4CE5-A6B0-DDBD5F8B2E08\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ShapeClip.html\">ShapeClip</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-46E4443C-BEB2-4465-B0A5-1D99B6F34274\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ClipContainer.html\">ClipContainer</a> \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-DABB6257-524A-4BD0-B8EB-D33C45E0DD83\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1Mixer.html\">Mixer</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AFBFC9F7-48D9-4AC1-B993-02CD6669D443\"></a></span><p class=\"table-body\">Instance of audio or some animation in the Animation Mixer. In the SDK, anything accessible\n\
                              from the Mixer usually uses the <em class=\"strong\">Clip</em> interface. \n\
                           </p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-A45FE1F9-F5ED-46A2-B060-0FE9BE6EE3C2\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-197E4906-124B-475A-8344-6F6CAFD0BBBE\"></a></span> <em class=\"strong\">ShapeClip</em> is a specialization of <em class=\"strong\">Clip</em> but does not define any methods or functions of its own. \n\
                                 </p> \n\
                              </div>\n\
                           </div> <span class=\"anchor_wrapper\"><a name=\"GUID-0A2B8B38-3BFE-4915-97E5-BA5C7BEA9FDC\"></a></span><p class=\"table-body\">The Animation Mixer also uses the concept of <em class=\"mild\">compound clips</em>, which are basically containers that nest related clips, storing their transitions\n\
                              and weights. \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C56EEF2D-D4FA-4F80-9115-066A9CB22CBD\"></a></span><p class=\"table-body\">yes </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AB6D8657-9A15-4DBD-A4D2-A8C1C6440224\"></a></span><p class=\"table-body\">Image </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-60B93931-1BF2-41F4-AA8F-FD7402D48842\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8498E2A5-70D1-4B3B-8266-7A12A6F1C677\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cpp/classXSI_1_1ImageClip2.html\">ImageClip2</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-00F98B63-4FD4-4940-A32B-F98CA86E43BE\"></a></span><p class=\"table-body\">As a texture (for example, in a texture projection or in the FxTree). Image clips\n\
                              are stored under the scene or their shader/material owner. \n\
                           </p> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-B68BEC32-A82E-4BF6-BB21-51C89AF5CA15\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-D26EA7D1-114C-4E72-A26C-C347D221C9B0\"></a></span>ImageClips can also be manipulated in the Mixer. \n\
                                 </p> \n\
                              </div>\n\
                           </div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C987DBCD-992F-429E-A539-D8724D52267B\"></a></span><p class=\"table-body\">yes </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-07A5A52D-EEF5-4937-B6E9-432A905BB947\"></a></span><p class=\"table-body\">Shot </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2CDC7877-9E02-4400-B7D8-664A594E0D74\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Clip.html\">Clip</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ABD229C3-1086-4DB5-AEDC-22AB4AC93C44\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Clip.html\">Clip</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D12A0FDC-AD62-4993-9CF6-AF05C28F15A7\"></a></span><p class=\"table-body\">The Camera Sequencer introduces a second timeline (Sequencer Time) in Softimage to\n\
                              playback the original scene in another timing while keeping the original animation.\n\
                              Using ShotClips, you can map between the Sequence Time and Scene Time (Global Time).\n\
                              See the Softimage User\'s Guide for more information about the Camera Sequencer. \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"GUID-64A5DE77-418B-40C9-A7F3-E8A718B03478\"></a></span><p class=\"table-body\">A ShotClip defines: <span class=\"anchor_wrapper\"><a name=\"UL_47206D851E6C41A8A43E644055BBF20A\"></a></span><ul>\n\
                                 <li>The mapping between the Sequence Time and Scene Time. </li>\n\
                                 <li>An active camera for its duration. </li>\n\
                              </ul> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-96BFA130-22F7-49B9-BD17-EE25BF6242C2\"></a></span><p class=\"table-body\">NA </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-20A73B35-6EE5-4C49-B813-745FDF105AC4\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-04DA87B1-04CA-4932-A9E1-2C7519E68D9C\"></a></span>The first two categories in the table above are a generalization of mixer clip types\n\
                        which describe any type of clip that can be manipulated in the Mixer (see the <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a> constant). Any clip returns one of the <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a> values from the <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> or SIObject::GetType property. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0056\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-05E204C7-9C56-4948-9218-CFD2E00210BD\"></a></span> Sources\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EFB6488B-F5C4-49B6-9C14-550AEBA9BE00\"></a></span>There are basically two kinds of sources (apart from a <span class=\"char_link\"><a href=\"#!/url=./files/DataSource.htm\">DataSource</a></span>, which is a piece of data or logic that drives the animated parameter): a reference\n\
                  to a file on disk (a Source) and a container for combining one or more actions (an\n\
                  <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a>). \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FC70A084-4ADB-40F7-98E8-61BA6C8921E7\"></a></span>Reference-type <a href=\"#!/url=./si_om/Source.html\">Source</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Source.html\">Source</a> (audio and image sources) can be instantiated in the mixer. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5367364C-355F-4564-AF71-460853E3484B\"></a></span>Action-type sources (see <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a>) are usually manipulated in the context of the mixer. They hold other action sources\n\
                  such as, low-level animation and shape animation. The components of an <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a> are called <a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItems</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1AnimationSourceItem.html\">AnimationSourceItems</a>. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-93B674BF-A44C-422B-8AF6-059BA7330E5D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F1C6676B-9873-4F97-8C06-E49471E1C789\"></a></span>One of the most important concepts with action sources is the <em class=\"mild\">relative names</em>. Action sources are stored with relatives names so that they are not tied to a specific\n\
                        model. For more information, see the <span class=\"char_link\"><a href=\"#!/url=./files/RelativeName.htm\">Relative Name</a></span> topic. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/DataSource.htm\"> DataSource</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/RelativeName.htm\"> Relative Name</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";