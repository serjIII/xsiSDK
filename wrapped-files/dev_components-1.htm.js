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
      <meta name=\"topicid\" content=\"GUID-FBA178CB-AD7F-45DF-B238-DA75C47EA27B\" />\n\
      <meta name=\"indexterm\" content=\"deforming geometry (changing components)\" />\n\
      <meta name=\"indexterm\" content=\"accessing: subcomponents\" />\n\
      <meta name=\"indexterm\" content=\"accessing: components\" />\n\
      <meta name=\"indexterm\" content=\"accessing: geometry(components)\" />\n\
      <meta name=\"indexterm\" content=\"components: accessing\" />\n\
      <meta name=\"indexterm\" content=\"subcomponents: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: control points\" />\n\
      <meta name=\"indexterm\" content=\"points: accessing control points\" />\n\
      <meta name=\"indexterm\" content=\"accessing: knots\" />\n\
      <meta name=\"indexterm\" content=\"knots: accessing\" />\n\
      <meta name=\"indexterm\" content=\"isopoints: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: isopoints\" />\n\
      <meta name=\"indexterm\" content=\"knot curves: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: knot curves\" />\n\
      <meta name=\"indexterm\" content=\"segments: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: segments (subcurves)\" />\n\
      <meta name=\"indexterm\" content=\"subcurves: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: subcurves\" />\n\
      <meta name=\"indexterm\" content=\"accessing: isolines\" />\n\
      <meta name=\"indexterm\" content=\"isolines: accessing\" />\n\
      <meta name=\"indexterm\" content=\"facets: accessing subsurfaces\" />\n\
      <meta name=\"indexterm\" content=\"accessing: facets: subsurfaces\" />\n\
      <meta name=\"indexterm\" content=\"subsurfaces: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: subsurfaces\" />\n\
      <meta name=\"indexterm\" content=\"accessing: points\" />\n\
      <meta name=\"indexterm\" content=\"points: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: vertices\" />\n\
      <meta name=\"indexterm\" content=\"vertices: accessing\" />\n\
      <meta name=\"indexterm\" content=\"segments: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: segments (edges)\" />\n\
      <meta name=\"indexterm\" content=\"edges: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: edges\" />\n\
      <meta name=\"indexterm\" content=\"accessing: facets: polygons\" />\n\
      <meta name=\"indexterm\" content=\"facets: accessing polygons\" />\n\
      <meta name=\"indexterm\" content=\"accessing: 0D geometry (vertices, points, knots, etc.)\" />\n\
      <meta name=\"indexterm\" content=\"accessing: 1D geometry (segments, curves, etc.)\" />\n\
      <meta name=\"indexterm\" content=\"accessing: 2D geometry (facets and subsurfaces)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Deforming Geometry (Changing Components)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-FBA178CB-AD7F-45DF-B238-DA75C47EA27B\"></a></span><div class=\"head\">\n\
            <h1> Deforming Geometry (Changing Components)</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5441F16F-8693-43C0-B30D-1EED24D46A8B\"></a></span>Components are the parts of a geometric object, such as points, segments, and facets.\n\
               Since each object consists of several components, you need to refer to the individual\n\
               components by using a number called an index. For example, the expression that follows\n\
               refers to the point number 3 on the cube \"aCube\":\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"aCube.pnt[3]\"\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-51E6166E-B9F4-4CAE-820B-47CAB5521174\"></a></span>Native Softimage commands use string expressions, while the object model uses properties,\n\
               so if you want to use the equivalent expression in the object model, the corresponding\n\
               statement is:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oGeo.Points(3)\n\
</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-0AFF34F6-177A-4878-BCFF-3B6872FA2CB6\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B93065AF-5B75-4E6D-BC94-FA5AD6554BE1\"></a></span>The purpose of these statements is to illustrate how to use an index number to identify\n\
                     the component, in this case a point. However, accessing points is a more complex process,\n\
                     involving much more context, as you will see in the next few sections.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F7C48C9-B151-4964-A9D2-180BDDCEA25C\"></a></span>Component indexes start at 0, so \"<em class=\"strong\">aCube.pnt[0]</em>\" or <em class=\"strong\">oGeo.Points(0)</em> is the first point. For this reason, it is easier to think of \"<em class=\"strong\">aCube.pnt[3]</em>\" or <em class=\"strong\">oGeo.Points(3)</em> as point number 3 instead of as the fourth point.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-29C0D66C-9219-4F8A-92B1-29674306A642\"></a></span>String expressions are very flexible. You can select any combination of individual\n\
               points, ranges, and even use wildcards. For more about using string expressions, see\n\
               <a href=\"#!/url=./files/script_elements.htm\">Accessing Scene Elements</a>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4DECE07-92A2-4906-B32B-605CAF92EAE4\"></a></span>The tables below provides an overview of how to access object components.\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-08222412-506C-4ECB-8F8B-CA7FCA24EB02\"></a></span><p class=\"table-heading\">Curves</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-61B18601-4279-4E63-8AEE-77D7E9ECB7A5\"></a></span><p class=\"table-heading\">Using native Softimage commands...</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F8F47CB9-6705-4936-A0D5-46F192BCE73A\"></a></span><p class=\"table-heading\">Using the object model (from X3DObject)</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0004\"></a></span><p class=\"table-body\"> Control Points</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"myObj.pnt[(9,2),(8,3)]\"\n\
\"myObj.pnt[3-7]\"\n\
</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
.Geometry.Points\n\
.Geometry.Curves(0).ControlPoints\n\
</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0005\"></a></span><p class=\"table-body\"> Knots</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"myObj.knot[14-18]\"\n\
\"myObj.knot[(0,2),(2,2)]\"\n\
</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
.Geometry.Surfaces(0).UKnots\n\
.Geometry.Surfaces(0).Knots(siUDirection)\n\
</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0006\"></a></span><p class=\"table-body\"> Isopoints</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"myObj.isopnt[0,1.25]\"\n\
</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3D873A6F-E457-404F-94AC-9B2EA3ACCAA6\"></a></span><p class=\"table-body\">---</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0007\"></a></span><p class=\"table-body\"> Knot Curves</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"myObj.knotcrvu[3]\"\n\
</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B4433603-D4CD-4645-9863-9EFB736956AB\"></a></span><p class=\"table-body\">---</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0008\"></a></span><p class=\"table-body\"> Subcurves</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"myObj.subcrv[0]\"\n\
</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
.Geometry.Segments\n\
.Geometry.Curves\n\
</pre></div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-731F7F0E-832C-4AD4-B86F-B0A6958F1978\"></a></span><p class=\"table-heading\">Surfaces</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2B60118B-B937-419B-AF13-D774DF5B7342\"></a></span><p class=\"table-heading\">Using native Softimage commands...</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-369A2C5D-DD58-4B8C-8685-DA9E91BA94B6\"></a></span><p class=\"table-heading\">Using the object model (from X3DObject)</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0009\"></a></span><p class=\"table-body\"> Boundaries</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"myObj.bndry[0]\"\n\
</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-138FBA0E-1598-47D2-901F-9E909061C6A5\"></a></span><p class=\"table-body\">---</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-000A\"></a></span><p class=\"table-body\"> Isolines</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\"myCube.isolineu[2.25]\"</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CFF9F01E-356F-4DBB-AEDF-0FBD654D100A\"></a></span><p class=\"table-body\">---</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-000B\"></a></span><p class=\"table-body\"> Subsurfaces</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"myCube.subsrf[0]\"\n\
</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
.Geometry.Facets\n\
.Geometry.Surfaces\n\
</pre></div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0DF3BF0E-7117-4EB7-AC4A-2D3CB98824DD\"></a></span><p class=\"table-heading\">Polygons</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3F1C19B0-767B-4010-8B6B-638A3A28C843\"></a></span><p class=\"table-heading\">Using native Softimage commands...</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-013BE0A0-D7B9-4121-BCB9-F68A6168B65C\"></a></span><p class=\"table-heading\">Using the object model (from X3DObject)</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-000C\"></a></span><p class=\"table-body\"> Vertices</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"myCube.pnt[*]\"\n\
</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
.Geometry.Points\n\
</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-000D\"></a></span><p class=\"table-body\"> Edges</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\"myCube.edge[LAST]\"</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">.Geometry.Segments</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-000E\"></a></span><p class=\"table-body\"> Polygons</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"myCube.poly[4]\"\n\
</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
.Geometry.Facets\n\
.PolygonMesh.Polygons\n\
</pre></div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-000F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C2BBB40D-3969-4494-99A0-DF7421EE8909\"></a></span> Accessing 0D Geometry (Vertices, Points, Knots, and More)\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FBC2E32-7E9B-4E88-A861-B9DC29263A52\"></a></span>Depending on the method or command you choose, \"points\" may refer to the control points\n\
                  of a NURBS object or the vertices of a polygon mesh object, or both.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CC7C6154-6DBA-49D5-B31C-3D1F0A27E0D9\"></a></span> Accessing 1D Geometry (Segments, Curves, and More)\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-27504FF7-7073-4B15-9FA3-7CA377A1E380\"></a></span>Depending on the method or command you choose, \"segments\" may refer to the curves\n\
                  of a NURBS object or the edges of a polygon mesh object, or both.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0011\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EB0A188F-05B7-4924-9CFB-7A724B19BC76\"></a></span> Accessing 2D Geometry (Facets and Subsurfaces)\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF77BA43-B141-4F59-9F23-CF2BC3E63AE4\"></a></span>Depending on the method or command you choose, \"facets\" may refer to the subsurfaces\n\
                  of a NURBS object or the faces of a polygon mesh object, or both.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";