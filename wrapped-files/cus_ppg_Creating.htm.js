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
      <meta name=\"topicid\" content=\"GUID-1625C241-7B1E-4C0C-AA41-79E20AE509AC\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: ways to create them\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: interactive tools\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: On-the-Fly definition\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: self-installing plug-in definition\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: SPDL file definition\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating Custom Properties</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1625C241-7B1E-4C0C-AA41-79E20AE509AC\"></a></span><div class=\"head\">\n\
            <h1>Creating Custom Properties</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-65930DDB-7606-4A2A-86DE-B80F4A072E43\"></a></span> There are basically four ways to create custom properties. All these methods are\n\
               valid, and which method you use depends on the purpose of your CustomProperty:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB0B36CC-A83F-4001-8C3E-F74B050A8BA4\"></a></span>Using the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Creating.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0007\">Interactive Tools</a></span> in Softimage\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BC127EE5-7919-43E7-A80D-B0C2A89864AC\"></a></span>Using the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Creating.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0008\">On-the-Fly</a></span> Approach\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F09AE41-36DC-41F9-8C0D-FAA0459BCB9B\"></a></span>Creating an instance of a <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Creating.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0009\">Self-installing CustomProperty Plug-in</a></span> (recommended for persistent data)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-975C853D-3901-478F-A87F-AA998858BCF7\"></a></span>Creating an instance of a <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Creating.htm#WS34BA39B437A993419C80CAB58E3BEFA1-000A\">CustomProperty defined in a SPDL file</a></span> (supported for shaders, deprecated for other persistent-data plug-ins)\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0007\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-29400C9F-896B-413B-94FA-C477E7C86EF4\"></a></span> Interactive Tools\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FEFBF036-DEAD-47FD-B8AA-6942BD066012\"></a></span>You can create custom property sets and pages from the user interface under the <span class=\"MenuCascade\" id=\"GUID-DF11C7B1-B178-4D0D-8118-C52FB94B179B\">Animate</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-FC07F44A-6640-411E-A4A0-4865C1DF05BF\">Create</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-1BDB27B2-4D48-4BAE-AA00-81DB2155BC3D\">Parameter</span> menu. These are persisted in the scene but are not available to other scenes unless\n\
                  you explicitly save them as a preset.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-84AEA126-83B7-4649-B752-3054867D7900\"></a></span>Using the interactive tools is a great way to learn about custom property sets and\n\
                  to prototype, but you need to create an instance of a <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Creating.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0009\">Self-installing CustomProperty Plug-in</a></span> if you want a more sophisticated toolset.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A903676-2906-41AC-B99C-3836FB4A84D4\"></a></span>For more information about using the interactive tools, see the Softimage user guide.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0008\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FDCB0CC4-6987-4278-8622-FBF4D81638AF\"></a></span> On-the-Fly\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E6C99FE5-0C8F-42A8-A7C5-FC5AAB00AEDA\"></a></span>You can create custom property sets and pages from a script or C++ API custom command\n\
                  using the basic <a href=\"#!/url=./si_cmds/SIAddProp.html\">SIAddProp</a> and <a href=\"#!/url=./si_cmds/SIAddCustomParameter.html\">SIAddCustomParameter</a> commands or the more sophisticated <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html\">CustomProperty</a>, <a href=\"#!/url=./si_om/PPG.html\">PPG</a> or <a href=\"#!/url=./si_om/PPGEventContext.html\">PPG</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGEventContext.html\">PPG</a>, and <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> objects.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB183F83-A604-4BA5-AC49-E0487C431C74\"></a></span>If you are using a custom property set as a temporary dialog box, it is easy to create\n\
                  it on the fly and delete it afterwards. Any parameter data you create as part of this\n\
                  custom property set persists for the duration of the scene or until you explicitly\n\
                  delete it. However, you may need to install it as a <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Creating.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0009\">Self-installing CustomProperty Plug-in</a></span> in either of these two situations:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DB93B088-0657-493B-8171-114A119E1565\"></a></span>If you want to reuse the same custom property in another scene.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DA7EF683-F00C-4B97-B114-8FFC8A2D095F\"></a></span>If you quit Softimage and then re-start it the layout for your custom property set\n\
                        is gone, even though the data contained in the custom properties is still there. If\n\
                        you inspect the property set the parameters all appear, but with no Logic (no buttons,\n\
                        since they are not associated with any parameters), and no special controls (such\n\
                        as Combo boxes).\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-69CCBD44-6850-4D9C-A017-6106440C8C95\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F516E938-6B09-4445-98BB-BE9A83421891\"></a></span>On-the-Fly properties are defined directly on their owners in the implementation code,\n\
                              whereas self-installing custom properties are defined, installed, and then applied\n\
                              on their owner using the <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> method.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0009\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F22F5203-24BA-442E-AD20-AD2A50FB5F01\"></a></span> Self-installing CustomProperty Plug-in\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB4FAD61-D023-46FF-B197-DCC6718F55CC\"></a></span>The Autodesk Softimage SDK provides a rich toolset to define a self-installing custom\n\
                  property plug-in (sometimes called a <em class=\"mild\">plug-in-based CustomProperty</em>). The custom property sets can be built in much the same way as the On-the-Fly properties;\n\
                  however, they are applied as if there is a preset defined on the system (using the\n\
                  <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> or SceneItem::AddProperty method) and are available to other scenes after the plug-in\n\
                  is installed.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-000A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-75C3572D-6DDA-4795-9884-C25EACFBBE6F\"></a></span> CustomProperty defined in a SPDL file\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DA82C71-B124-47E7-BDD4-D7BF8052E15E\"></a></span>You can use the <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> or SceneItem::AddProperty method to apply a custom property defined in an installed\n\
                  SPDL file in the same way as you apply a self-installing custom property. However,\n\
                  defining the property set and property page layout is not as easy and is more error-prone\n\
                  than using the object model.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-40C1321B-E0F6-42F7-BF76-4E006B700200\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-52B01E7A-E16F-4658-9ABF-209F51C4EC4E\"></a></span>Using a SPDL file is no longer the recommended approach, but is being maintained for\n\
                        backwards compatibility. Creating a <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Creating.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0009\">Self-installing CustomProperty Plug-in</a></span> is the recommended approach.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";