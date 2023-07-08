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
      <meta name=\"topicid\" content=\"GUID-D5374972-0127-46A0-87BE-31A97AAA0E5C\" />\n\
      <meta name=\"indexterm\" content=\"topology changes\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Changing the Topology (Adding and Removing Components)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D5374972-0127-46A0-87BE-31A97AAA0E5C\"></a></span><div class=\"head\">\n\
            <h1>Changing the Topology (Adding and Removing Components)</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CC19B66-AA7C-45AE-B76C-E2B5E3846926\"></a></span>The tables below provides a list of some of the more common commands and methods that\n\
               add or remove components:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A61C22CF-35C6-4BDD-AC7D-12BA86BEEC55\"></a></span><p class=\"table-heading\">Geometry</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CF9CE1F9-5A48-48EA-B81D-F463BEE041DE\"></a></span><p class=\"table-heading\">Native Softimage Commands</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BF62E8E2-8394-4DF9-9F46-53443632EF6F\"></a></span><p class=\"table-heading\">Object Model</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-57F1E9EB-5E01-4F7F-A8A6-BCF2A49DCF61\"></a></span><p class=\"table-body\">Curves</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-52AF6DA5-F718-4DB4-81BC-720890D61BF1\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyTopoOp.html\">ApplyTopoOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-1A50D192-3AFF-4111-BCA2-02A81974ADE9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SIAddPointOnCurve.html\">SIAddPointOnCurve</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-CBD339AB-EB91-4E0B-9FCD-589FD9AEB9D4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SIAddPointOnCurveAtEnd.html\">SIAddPointOnCurveAtEnd</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-5F7440CE-B39B-49CC-BAF3-892DEC47283C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SIAddPointOnCurveAtStart.html\">SIAddPointOnCurveAtStart</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-1755D3A5-4F44-4AB3-A9DE-53A5161C171C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SIDeletePointOnCurve.html\">SIDeletePointOnCurve</a> \n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-D4BD8D03-D990-484A-AC9A-720C04424EBD\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-780A241C-2BBB-4576-8091-BD99F4C0B62C\"></a></span>Many topology-changing commands are handled by using <em class=\"strong\">ApplyTopoOp</em> and specifying one of the many operators, such as InsertNurbsCrvKnot, RemoveNurbsCrvKnot,\n\
                                 CrvOpenClose, etc.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                     <td class=\"table-body\" rowspan=\"3\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0B5D94F3-AA86-4267-B34C-62FA4A5BB105\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SubComponent.AddElement.html\">AddElement (SubComponent)</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-462A2011-AC0D-4CBE-AA81-FD5E42517B4A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/SubComponent.RemoveElement.html\">RemoveElement (SubComponent)</a> \n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-FD80CF4B-66E2-4E99-8DD6-0095DB90BEB3\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-31246277-24F6-449D-9838-5EC745290281\"></a></span>In the object model, all subelements can be added and removed using these methods\n\
                                 except isolines and isopoints (because they cannot be indexed). However, <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a>s are only available through a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5CC55443-C072-4221-B8A7-85F4BC950924\"></a></span><p class=\"table-body\">Polygon</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91E784EF-51C3-4E95-833F-932AE09C8993\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/AddEdge.html\">AddEdge</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-70EE2619-2A32-406D-9F6F-2E64DD32529C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyTopoOp.html\">ApplyTopoOp</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-3DF0D449-D795-4582-A255-8471269A8C5D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/DuplicateMeshComponent.html\">DuplicateMeshComponent</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-DACBC4BA-3B28-445F-B40A-B3F4D93C0A8F\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SplitEdge.html\">SplitEdge</a> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2BEF829D-0D9B-4A0D-8670-CD13937F2111\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/SplitPolygon.html\">SplitPolygon</a> \n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-96D8D76C-4665-4473-8621-620784E47E89\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-3CE4C30E-AA81-416D-A4DE-0CADE9A8336D\"></a></span>Many topology-changing commands are handled by using <em class=\"strong\">ApplyTopoOp</em> and specifying one of the many operators, such as DeleteComponent, DiceObject, WeldPoints,\n\
                                 etc.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6E213836-36D7-4ED1-8E35-177DD4490E40\"></a></span><p class=\"table-body\">Nurbs</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B1BCF168-B246-40CC-A06C-83F1A011EFD1\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_cmds/ApplyTopoOp.html\">ApplyTopoOp</a> \n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-67E2A0E6-5CF0-4EC2-8F59-72836E5C3496\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-4808D91D-35D9-4E9C-8A22-DA80715A67D1\"></a></span>Most topology-changing commands are handled by using <em class=\"strong\">ApplyTopoOp</em> and specifying one of the many operators, such as InsertSrfKnot, RemoveSrfKnot, SrfOpenClose,\n\
                                 etc.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-396647D2-E9C4-4407-A6E0-B60B6EA28B61\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3662E506-5BCD-4506-962A-646ADFCAD7E7\"></a></span>For examples of topology changes inside clusters, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001C\">Example: Add points to the cluster</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001D\">Example: Remove points from the cluster</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0014\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-80BBC01F-DFD8-4973-86EF-D1C0D8DF84CF\"></a></span> Coping with Topology Changes\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F03B7ABF-5701-41AD-9100-8CB81A2A9558\"></a></span>What\'s the difference between the indicies of the polygons and their ID\'s? How can\n\
                  I show the ID\'s of those polygon in a list? The short answer is that you cannot, because\n\
                  the mapping of indices is not exposed. However, you can create a workaround with user\n\
                  data properties.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-D11C3417-86AF-4C2E-A99E-A13526A853BA\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1EE430C4-1AE2-41D0-B953-7C048D56BA2C\"></a></span>By design, before and after applying a topology operator, mesh components are numbered\n\
                        0..N-1, with all IDs used.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE9EE400-EBA3-4CFE-8DED-7894F4CA648A\"></a></span>If you delete geometry components, the topology operation essentially re-indexes all\n\
                  the components in order to respect the rule above. For example, if you have a four-polygon\n\
                  grid (with indices 0,1,2,3) and you delete the polygons at index 1 and 2, the result\n\
                  is a two polygon grid (with indices 0,1). In other words, using poly[4] results in\n\
                  an error, since poly[1] is the highest valid index for that grid.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-224750E6-29E2-4AF2-8F45-B10CA6DD239E\"></a></span>Topology operators can change mesh components as they need, by doing internal operations\n\
                  such as:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6A91FC6-15C9-43BF-B16C-74CA11477D2C\"></a></span>Renaming index A to B\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E58ACF67-EEC4-4562-8A5E-2F21A8F0274E\"></a></span>Swapping indices A and B\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A92305CC-6AA6-48CE-BE0D-3EC427C6FB79\"></a></span>Renaming any index among [A,B,C,D...] to A; for example, dissolving (reducing several\n\
                        vertices to a single vertex)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CD4D614-E659-4B6A-AF28-3C9ADA082F49\"></a></span>Replacing A with [A,B,C,D...]; for example, splitting a single polygon into many (polygon\n\
                        A becomes polygons A,B,C,D)\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6113A483-615A-4026-8D73-4D7BFA11846F\"></a></span>Then the topolology update mechanism ensures that all cluster elements are processed\n\
                  in the same way. As you see in these operations, the mapping is not necessarily 1\n\
                  to 1.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-907C2A61-5A06-4E0C-8BAB-D8759815F367\"></a></span>If you are trying to update some properties or some data in the same way as the topology\n\
                  operators are updating the clusters, the only correct way of doing this is to put\n\
                  your data in a cluster property under the cluster (for example, using a user data\n\
                  map). Using cluster properties is actually a way of extracting 1 to 1 mapping. However,\n\
                  it is not always sufficient since there are also situations involving N-to-1 and 1-to-N\n\
                  mapping.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F27E5B96-33FA-4081-9823-4D0FB97F9A7D\"></a></span>If you want to get the 1 to 1 mapping (for example, to handle the aftermath of deleting\n\
                  a polygon), a safe way of doing this is to create a user data property under the cluster,\n\
                  with the same content as the cluster:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Cluster A = {1,3,4}\n\
\n\
Property under cluster A = {1,3,4}\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BE0AD893-B8B8-49B0-BCF3-2034BB31E219\"></a></span>Then, if a topo operation deletes element 3 and renames element 4 to 3, the resulting\n\
                  data will be:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Cluster A = {1,3}\n\
\n\
Prop under cluster A = {1,4}\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";