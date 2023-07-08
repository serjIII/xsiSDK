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
      <meta name=\"topicid\" content=\"GUID-5E736F93-FA45-469D-AC98-6C56B6234540\" />\n\
      <meta name=\"indexterm\" content=\"Torso (character development kit)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Torso</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Envelope\", \"si_cpp/classXSI_1_1Envelope.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5E736F93-FA45-469D-AC98-6C56B6234540\"></a></span><div class=\"head\">\n\
            <h1> Torso</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C3CFC8E-0BA5-46B3-9975-F56D38ECB7DE\"></a></span>The <em class=\"strong\">Torso</em> object represents a rig consisting of a spine, left and right shoulders, and a hip.\n\
               The torso is rigged with controls for the chest, hip and upper body.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9CC94835-65C5-46CD-B840-AB1FAE5DC0F8\"></a></span>A collection of 10 or 11 guide objects defines the torso. The first four guide objects\n\
               determine the shape of the spine. The next six define the left side of the torso (left\n\
               leg base, left shouder base, left shoulder tip, right leg base, right shouder base,\n\
               right shoulder tip). An 11th guide object can be added to create a chest bone. A hip\n\
               icon is created with hip sockets positioned at the leg bases, and the top of the hip\n\
               is positioned at the base of the spine. One bone shoulder is created using the shoulder\n\
               base and tip guide objects.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-008A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E891753F-798B-4EDD-B770-C9F38955A84C\"></a></span>Returned by\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C82D8E4-7CE6-4399-8887-4E1D96AD97DC\"></a></span> <a href=\"#!/url=./si_cmds/MakeTorso.html\">MakeTorso</a> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-008B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-868F2907-2A19-46A3-B76C-C4B193B3C869\"></a></span>Also available via\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CF598E6B-9C27-458A-BF45-B534AC6260D9\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/CDKBiped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0046\">Biped.Torso</a></span> \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3EF72F3C-696F-4370-95A3-5CF3D149ED15\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/Quadruped.htm#WS59CC1705BE42794BBCB80457F107A6E8-0062\">Quadruped.Torso</a></span> \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-008C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4EE20108-7512-47CC-A81F-A8F72E54441C\"></a></span>Properties\n\
               </h2> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-00DD1D09-8B8C-438D-A1B2-B22A5627C6C3\"></a></span><p class=\"table-heading\">Property Name</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-926D9967-A043-4C45-883C-EF32C3F43673\"></a></span><p class=\"table-heading\">Type</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AA58AE22-14B5-4E6C-B68D-D82D08FA66BA\"></a></span><p class=\"table-heading\">Description</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-98C8B2C0-7DD3-4F76-AA02-7A7C3CEBBF78\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">parent</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3277E677-012A-4958-94F6-B2C24DDD43A2\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Model.html\">Model</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-05BD01A7-F9D5-4F1F-BFDC-C5F53C2ACDE5\"></a></span><p class=\"table-body\">the Upper Body Parent</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-62117EFC-8A79-494A-B600-7F46F28491BD\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Spine.Curve</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5EEF3AC9-4156-45A2-B14C-C7243E216D37\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4EEB2A4B-C20E-446F-94AE-C0CD66B994A8\"></a></span><p class=\"table-body\">the curve of the spine.</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0527D6A5-FD64-4511-AED2-91D619ECA356\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">HipBone</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3CEEC1E5-16D7-451C-B0C6-941C31369A7C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-10160C2E-49B3-4564-A25F-51B18EA3F489\"></a></span><p class=\"table-body\">the new Hip icon.</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-72A0B4F2-A638-4ECF-B1DB-EA4A15718683\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Spine.TopVertebra</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CF7C083E-07BD-447F-B256-9C84B8381630\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-10E023CC-5465-403F-9C77-B093AC8207C7\"></a></span><p class=\"table-body\">the end of the new spine. if a Chest bone was created it will be the icon for this\n\
                              bone, otherwise it will be the last vertebra.\n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF79ADF6-F73C-49BD-81FE-7BBE599ED7DD\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">REff</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E954ACC6-CF7C-424B-A3BD-1825E05E6F68\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainEffector.html\">ChainEffector</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-49BF68A6-2DBA-4474-B815-812C21E75CB7\"></a></span><p class=\"table-body\">the effector of the right shoulder.</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CA8BA3F6-79A0-4360-A199-5C3BF8B94DFF\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">LEff</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E2ECE6A4-3DF6-4404-A8C6-7D06AAB77949\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/ChainEffector.html\">ChainEffector</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DF7336D7-783B-4649-A0D9-0D335A1CBDF0\"></a></span><p class=\"table-body\">the effector of the left shoulder.</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-70F85C75-4146-4522-97C2-5E094EB43892\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">RSkel</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D339710B-BEB7-45D5-A6DC-8BBF502E8E9B\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-97AC8ED4-CE02-44ED-B925-F1A2C7EFF5E0\"></a></span><p class=\"table-body\">a collection of right shoulder skeleton elements</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DBF1D194-21B7-4201-93A0-DADDD5EB3E95\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">LSkel</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4936C4EE-AF82-41C5-975B-29DA262124B3\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7CAEF929-A936-4F53-9504-C9BC4E99C879\"></a></span><p class=\"table-body\">a collection of left shoulder skeleton elements</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A45EA01E-4322-49A7-8138-DB6C8E128BC4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Spine.Vertebra</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E9284E83-4405-4209-B520-95E36752B6B2\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E071AE33-5C5C-4E11-BFEC-1FE254951C05\"></a></span><p class=\"table-body\">a collection of spine vertebra</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-008D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Tail</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A509B79F-6B49-48E2-8C58-D846CFF403E6\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/CDKTail.htm\">Tail</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E07E21DB-9872-4922-9AD4-4A0FB78F363A\"></a></span><p class=\"table-body\">a tail object, created if duplications of the spine base are found</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B5EAD2A1-7B42-47F0-9FE9-D3D5C6CDF99E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">UpperBody</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7629F8F4-0DB8-4271-BC53-820E41ADE900\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BA8CC775-8B66-41AF-8C88-AA82D254976F\"></a></span><p class=\"table-body\">the UpperBody control icon</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A46A823D-BFB5-4FD9-81FB-617E6BB34B68\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Hip</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E8C72D2A-64C1-424C-9894-0FA19594F865\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7F3D8E4D-52A1-4BC8-B03C-84600AE5B680\"></a></span><p class=\"table-body\">the Hip control icon</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4A3CF69-EF91-4132-8627-EE801B247BC2\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Chest</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0D661020-5FEF-4C95-886B-2991F2F9BD75\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-89042915-48B1-4866-8788-C55873F48D43\"></a></span><p class=\"table-body\">the Chest control icon</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EFCBACB0-6C9D-48D4-9729-6115BEBC857A\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Hidden</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DF4C85E2-6C3E-4D99-8956-0C30854403EF\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A488055E-159B-4A77-AC06-380C94D7FCB3\"></a></span><p class=\"table-body\">a collection of Hidden object</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E30567D8-D806-498D-9B4A-0C24CFDAC22E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Envelope\" class=\"a_multireflink\">Envelope</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E054F869-0286-442B-A254-4E6CA5C76625\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DC3FB2DF-ED92-40EF-AFAF-2AC75E0FFD64\"></a></span><p class=\"table-body\">a collection of objects to be Enveloped</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D2C3B388-E2AC-4D69-8504-740724D7D87C\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">Shadows</span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AE0744B1-F9B5-4AAE-95AC-079506660C8C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3D7BE5D8-3F65-4BFD-8D6E-84535CB1A875\"></a></span><p class=\"table-body\">a collection of box shadows</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A931E91D-9020-4896-BACE-90D082251000\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> for complete list of objects available in the Character Development Kit.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";