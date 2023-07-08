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
      <meta name=\"topicid\" content=\"GUID-EDD983A3-0F29-429A-BFC2-D69E4CB26612\" />\n\
      <meta name=\"indexterm\" content=\"Quadruped\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Quadruped</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EDD983A3-0F29-429A-BFC2-D69E4CB26612\"></a></span><div class=\"head\">\n\
            <h1> Quadruped</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCEA3934-A374-488B-9D1C-2470A804AC42\"></a></span>The <em class=\"strong\">Quadruped</em> object represents a character with the same proportions as a quadruped guide. It\n\
               contains many of the components you can create with other Character Rigging commands,\n\
               such as <span class=\"char_link\"><a href=\"#!/url=./files/CDKDogLeg.htm\">DogLeg</a></span>s, <span class=\"char_link\"><a href=\"#!/url=./files/CDKTorso.htm\">Torso</a></span>s, <span class=\"char_link\"><a href=\"#!/url=./files/CDKHead.htm\">Head</a></span>s, etc.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-005F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9C9AFBE9-23C0-4BFA-9D07-CCA75B62EC68\"></a></span>Command to create\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-29E9CE71-EAF6-4C09-BF70-78B1A491F801\"></a></span> <a href=\"#!/url=./si_cmds/MakeQuadruped.html\">MakeQuadruped</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0060\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3CE50D6D-9462-4EBB-A620-A293C29FA29F\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B5A4633-59DE-4456-8616-24629DF575F3\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-52F47DC8-EB36-4EFC-A23B-1E36F188BC5A\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D0887CC3-6C18-4FF7-AA63-D673C6D33B13\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0061\"></a></span><p class=\"table-body\"> UI</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A956C8E1-3EAC-4D8F-8CDB-9DB6B8E1FFD2\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKUI.htm\">UI</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6403C71B-67D7-4AE4-9130-AE1ABA64F851\"></a></span><p class=\"table-body\">dialog used to interactively create the Biped object</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7A5FD958-7CEB-4470-BBB5-6F56D4D0232B\"></a></span><p class=\"table-body\">Model</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AF5AF4B6-881A-46FC-ABBF-27210B56B9D3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Model.html\">Model</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B2C1463E-5F02-43EE-9603-12467228518F\"></a></span><p class=\"table-body\">the quadruped\'s model object</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-24E47D6A-C218-42F9-B998-358B073F5A1D\"></a></span><p class=\"table-body\">GlobalSRT</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D7A66CC8-5117-41B0-99FD-E920DB4AF3EF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AF3F7EEA-59A9-4E45-B7E5-0543B482DC03\"></a></span><p class=\"table-body\">the curvelist representing the quadruped\'s global transform object</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-00D76992-F2BE-4807-AF02-5B607048A548\"></a></span><p class=\"table-body\">Sliders</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DE961075-6389-45B8-8B3B-B06C0353202E\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B623ABA8-096C-453B-9C75-F0BCE9635D7E\"></a></span><p class=\"table-body\">the custom property containing quadruped controls</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C52C8C5D-1F68-4F68-934D-E2AE87D05490\"></a></span><p class=\"table-body\">HiddenGroup</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-93AB6ECF-6A7E-4238-B9FF-A1F0B5DFB1CF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Group.html\">Group</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-98D70FDD-9D7E-4404-8501-0E4EC266625B\"></a></span><p class=\"table-body\">a collection of objects that are hidden</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D3C5057D-05BE-435F-84AB-5A1CD0D830E1\"></a></span><p class=\"table-body\">EnvGroup</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-41606D04-DE4D-4A52-BD02-D16F4DABDD69\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Group.html\">Group</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-70902278-5C79-46DA-9959-3E975FC08F55\"></a></span><p class=\"table-body\">a collection of objects to be enveloped</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0062\"></a></span><p class=\"table-body\"> Torso</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-35B835BC-E6A7-48CA-89B7-F9715EDB08A1\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKTorso.htm\">Torso</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EB3A4891-94D5-4B06-97B8-D3DBB8E76766\"></a></span><p class=\"table-body\">the torso</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0063\"></a></span><p class=\"table-body\"> Tail</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B7660DFC-A42F-46D5-9B66-4496B731FF65\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKTail.htm\">Tail</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C8D8EDAF-058F-4E6C-BF34-45432D1CF507\"></a></span><p class=\"table-body\">the tail</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0064\"></a></span><p class=\"table-body\"> Head</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DBE532EB-8A5F-46D5-9508-0593779B0986\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKHead.htm\">Head</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6AC44B65-D738-494A-A5AF-54FCF0E1ABD2\"></a></span><p class=\"table-body\">the head</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0065\"></a></span><p class=\"table-body\"> Belly</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5E9050DC-8149-4B13-96C9-54C73F67A31B\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBelly.htm\">Belly</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-83149148-A0C6-4C9A-9233-A3C1F58259CB\"></a></span><p class=\"table-body\">the belly</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A81DE5A1-44B8-4854-9641-7C919A0699B3\"></a></span><p class=\"table-body\">ChestBone</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0947D9C3-F5F0-49A6-9B07-833C06E5B344\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B4DFE5FF-8F9C-40A6-9783-97C3F16CD9ED\"></a></span><p class=\"table-body\">the chest bone</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B8FEE938-9CE7-4D27-A89E-A6ACAD712596\"></a></span><p class=\"table-body\">UpperBody</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-00B78DD8-F411-41F7-8C0F-D5093170A3D5\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE16D2B9-1200-4B42-8CA9-E539C3036981\"></a></span><p class=\"table-body\">the upper body</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0066\"></a></span><p class=\"table-body\"> SpineCurve</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E4744ABD-0D1F-4D2E-8515-F02FD54B634D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-43734136-4BBE-4B3D-8DB0-B8894A58C595\"></a></span><p class=\"table-body\">the spine</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8D17782E-0E8B-41EE-855B-1E6A169D2D5D\"></a></span><p class=\"table-body\">HipBone</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D156A484-CF64-4C67-B4E1-4AA0651277FF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A2FE2C3F-6D8B-47DB-AA62-3215ED60C540\"></a></span><p class=\"table-body\">the hip bone</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-54E638CC-1559-4675-AB25-23B6BFA35A77\"></a></span><p class=\"table-body\">RShoulderEff</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-864D045B-E480-4E3F-B746-D3E8425F1026\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainEffector.html\">ChainEffector</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3536FFC7-F41E-4262-8290-782BED89BC48\"></a></span><p class=\"table-body\">the right shoulder effector</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0067\"></a></span><p class=\"table-body\"> RLeg</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3605299E-DE4B-4DF0-BDC3-85754BC701EA\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKLeg.htm\">Leg</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1542C38E-AE59-4FB1-A088-52C64A632DB1\"></a></span><p class=\"table-body\">the right leg</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0068\"></a></span><p class=\"table-body\"> RFoot</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7885ACCF-D4F8-44DC-9F24-5249AA080C92\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKFoot.htm\">Foot</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3C0CA258-DD54-4D8D-9103-D9715D12DFC6\"></a></span><p class=\"table-body\">the right foot</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0069\"></a></span><p class=\"table-body\"> RDogLeg</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-636460DF-DF69-4C23-9EFE-3DFF8553A8A6\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKDogLeg.htm\">DogLeg</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8640E351-13D6-45B0-A7F4-756B870E6586\"></a></span><p class=\"table-body\">the right dogleg</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-76AFF22A-4AE0-4761-A825-08357B97942F\"></a></span><p class=\"table-body\">LShoulderEff</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D9CFF7BB-55F8-471C-B218-24E55F3D5A92\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainEffector.html\">ChainEffector</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-17150EFA-9D60-41A8-8803-67AE867F657A\"></a></span><p class=\"table-body\">the left shoulder effector</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-006A\"></a></span><p class=\"table-body\"> LLeg</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A9C53DD2-B25A-4988-93D5-96691FFE4703\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKLeg.htm\">Leg</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1A97FDC3-902C-4A66-ABDD-43F01BDFEA58\"></a></span><p class=\"table-body\">the left leg</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-006B\"></a></span><p class=\"table-body\"> LFoot</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E27843E5-F293-42C9-9BF2-F0A712C1605A\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKFoot.htm\">Foot</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A5570C52-7A00-43E5-959B-242474FFF678\"></a></span><p class=\"table-body\">the left foot</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-006C\"></a></span><p class=\"table-body\"> LDogLeg</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D5FED3A1-1BDB-4721-9D3D-38990A6FB5CB\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKDogLeg.htm\">DogLeg</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-48DBB145-A71F-45A4-9A78-BED034F290E6\"></a></span><p class=\"table-body\">the left dogleg</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1DFB351B-4B5B-42C4-9425-38484C664CCF\"></a></span><p class=\"table-body\">ShadowModel</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3B6DE0B7-9441-4EE6-ADE5-8E60CA24FB19\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Model.html\">Model</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AE917BBC-F537-4ECC-B74E-5EEC0A102C23\"></a></span><p class=\"table-body\">the model that the shadow chain or spine belongs to</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F717CEF8-51CC-451E-8810-4D12E5A69DA3\"></a></span><p class=\"table-body\">ShadowHiddenGroup</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CAF7453B-AFE4-432D-BF3A-DD6078654281\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Group.html\">Group</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-209876DD-BB9B-4DDA-99D2-CAAF03104887\"></a></span><p class=\"table-body\">a collection of the dividing null objects for the shadow</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-67D3B4A0-58B4-407A-8CFF-ADB3F19DF623\"></a></span><p class=\"table-body\">ShadowEnvGroup</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1033E75C-9877-47CA-B154-BCC5722B1D43\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Group.html\">Group</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C8468908-383E-45D0-B1EC-3570E91C0E46\"></a></span><p class=\"table-body\">a collection of objects that should be enveloped for the shadow</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34195801-EC04-4B10-9A99-3A8E386DFC29\"></a></span><p class=\"table-body\">ShadowGlobalSRT</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-000F3115-6E50-4F5E-AEB1-EE246464F4BF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2802A983-5299-4BF1-8CAB-3B55E1C20729\"></a></span><p class=\"table-body\">the curvelist representing the shadow\'s global transform object</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4ECE1A6C-8D46-4063-BFDA-ED0B50399290\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";