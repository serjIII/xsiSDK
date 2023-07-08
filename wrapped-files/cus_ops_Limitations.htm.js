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
      <meta name=\"topicid\" content=\"GUID-18106643-7586-47FD-ACE8-BFFF37FA6F09\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Limitations</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-18106643-7586-47FD-ACE8-BFFF37FA6F09\"></a></span><div class=\"head\">\n\
            <h1>Limitations</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0062\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-88AE8CA6-D317-4680-8F82-5803AB5178B8\"></a></span>Connections to String Parameters\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2851B793-D40F-42B2-BEF5-3ABE9B765562\"></a></span>A custom operator cannot connect directly to a string parameter. To read or write\n\
                  to a string parameter from a custom operator connect to the object (for example a\n\
                  <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html\">CustomProperty</a>) that owns the parameter. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0063\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5100BB54-4745-4D9E-864C-77881B1BE513\"></a></span>Blocked Methods and Properties\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_280F4DF1B64846948B57BAE127A0A300\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E26F338-2C49-4A09-97CA-2C5F76971CF0\"></a></span>Certain methods and properties are blocked in the context of custom operators (the\n\
                        same is true of legacy and runtime operators). You must never attempt to change the\n\
                        value of the input or read elements of the scene that are not connected as inputs.\n\
                        \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE802D98-7F45-459D-BC43-3F9C15104AEB\"></a></span>If you need to know whether the method or property you want to use is safe for custom\n\
                        operators you can refer to the individual reference page for that item. It will be\n\
                        marked with an asterisk (*) beside its name if it can be safely used. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0064\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E9D7E45A-45B8-4886-8BD8-C3C4D25ABE41\"></a></span>Commands Cannot Be Used\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_49081E86EFA8409D900459AE7BF60029\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8E0DA05A-3804-42CB-A373-28A7F745020B\"></a></span>You must never try and call a command from inside an operator, unless that command\n\
                        does not affect scene data at all (for example <a href=\"#!/url=./si_cmds/PickObject.html\">PickObject</a>). \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-88883689-050C-4C7A-A0D5-54C4C44A0F65\"></a></span>Commands that generate geometry or scene objects (such as CreatePrim and AddNull)\n\
                        as well as any command that changes topology or adds items to a cluster, etc. are\n\
                        strictly off-limits, as they change scene data and may destabilize Softimage. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0065\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C34D73EC-6827-4398-80FF-008A7EF2FCF4\"></a></span>Topological Changes\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_7C1CC199056542D7AAF7E40C6327E86A\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-18BB5C2C-F705-407A-BD7D-E2E362D9A874\"></a></span>Topological changes are not allowed for custom operators, since this type of change\n\
                        can destabilize the integrity of the geometry. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0066\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-46F854E1-FBDB-4A8D-B2CA-73174AD9425F\"></a></span>Restrictions on Scene Time\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_3D178107AD6E42FAA0E82221D37113FB\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-50A90594-D1D8-4D94-AD93-B07CE574DD27\"></a></span>You cannot read the scene graph at any other time than the time at which the operator\n\
                        is being evaluated. However, as a workaround you can cache the data inside the operator,\n\
                        if the scene is carefully evaluated from beginning to end. See the <a href=\"#!/url=./examples/Addons/ParticleOp/netview_ParticleOp.htm\">ParticleOp example</a> for a demonstration of how you can implement this kind of workaround. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2807399-9DD0-495F-BE07-EA1FA7D6C5E2\"></a></span>You cannot assume that the time the operator is evaluated at is the <em class=\"mild\">current</em> time as set by the <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl.htm\">Playback Controls</a></span> or that there is only one evaluation per frame. You can use <a href=\"#!/url=./si_om/OperatorContext.Time.html\">OperatorContext.Time</a> or OperatorContext::GetTime to get the current evaluation time. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0067\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-383067A8-5488-4498-B0AE-65FB1F8DE739\"></a></span>Setting Up Deformer Connections\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_954A9E13F6DD40B181B8E10F6540BA4C\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C9990CCD-B7CC-407C-B9A2-A18FDADC7393\"></a></span>Deformer operators must define their input and output connections within the same\n\
                        port group. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A96BABE5-B030-4FD7-AAC4-7E823DD46C65\"></a></span>There is no way to get bounding box information on branch/grouped geometry for deform.\n\
                        \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0068\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A84B0133-7724-4F3B-89B5-0EDE4CE1172C\"></a></span>Multiple Connections in Port Groups\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_7517060110894C68BFA247F5184BC619\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E02C3F50-1DA2-432E-820C-AB0FB680FC89\"></a></span>It is recommended to keep connections unambiguous by using one port for each port\n\
                        group if possible. For dynamic operators, you can define one port with many instances.\n\
                        See <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_StaticversusDynamicOperators.htm\">Static versus Dynamic Operators</a></span> for more information. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0069\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FD7495F9-4F97-49B9-95C2-78FA450BF8CF\"></a></span>Issues with Persistence\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_8E5BA2A24B994BE1B737068DEB8A0A06\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C39236F-C729-44BE-B1BE-760121B4E2F2\"></a></span>One of the many uses for custom operators is to write a custom particle simulation.\n\
                        The particle types defined for a scene are stored in the <span class=\"code\" translate=\"no\">\"Scene.ParTypes\"</span> container. Remember that although you can connect to <span class=\"code\" translate=\"no\">\"Scene.ParTypes\"</span>, the connection will be lost when the scene is reloaded. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-006A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C42FC49B-FDCE-4151-8E67-A68AE5A4298F\"></a></span>Working in Branch or with Groups\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_F2753D8DA4F14C7A86DCA1F7F10A5DFC\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-91989633-6F40-4871-967A-389B194F75B0\"></a></span>Objects added or removed from a group or hierarchy are only automatically connected\n\
                        to or disconnected from a custom operator if and only if the custom operator defines\n\
                        an output port that writes to a primitive. This is a known limitation of the group/branch\n\
                        operator functionality. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-960F580B-C4B7-454C-8986-29723BAA0D46\"></a></span>If a PortGroup defines a Filter and the operator supports branch group connections,\n\
                        then the filter must include the group filter. This ensures that the ApplyOp command\n\
                        or the Operator.Connect method will validate the input objects when applying the operator\n\
                        to an object in branch or on a group object. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B213D9DB-3978-4D30-BC74-C4C4FC2333F9\"></a></span>The group/branch flag only works for IO ports on a Primitive. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";