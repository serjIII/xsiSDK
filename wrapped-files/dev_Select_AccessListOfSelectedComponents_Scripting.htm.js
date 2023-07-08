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
      <meta name=\"topicid\" content=\"GUID-1CF0CF8C-5C2B-47E7-9B85-F2E690E86F4E\" />\n\
      <meta name=\"indexterm\" content=\"selecting: getting selected components: object model only\" />\n\
      <meta name=\"indexterm\" content=\"selection: getting selected components: object model only\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing the List of Selected Components via the Object Model</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"points\", \"si_cpp/group__RenderMapDefine.html#ga7b51c5e95877ebaeb51314f8731f55f6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1CF0CF8C-5C2B-47E7-9B85-F2E690E86F4E\"></a></span><div class=\"head\">\n\
            <h1>Accessing the List of Selected Components via the Object Model</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><span class=\"anchor_wrapper\"><a name=\"UL_965AE1532F414C90ADAC0B544A3F275D\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-10046C5B-1B7D-4D17-9804-5CF7DC6E78CD\"></a></span>When components are selected, the <a href=\"#!/url=./si_om/Selection.Item.html\">Selection.Item</a> property returns a <a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a> object which you can use to get the <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a> object via the <a href=\"#!/url=./si_om/CollectionItem.SubComponent.html\">CollectionItem.SubComponent</a> property. From there, the <a href=\"#!/url=./si_om/SubComponent.ComponentCollection.html\">SubComponent.ComponentCollection</a> property returns one of the geometry-specific component collections (<a href=\"#!/url=./si_om/VertexCollection.html\">VertexCollection</a>, <a href=\"#!/url=./si_om/ControlPointCollection.html\">ControlPointCollection</a>, <a href=\"#!/url=./si_om/EdgeCollection.html\">EdgeCollection</a>, etc.) containing the selected components: \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C# -- assuming sampled <a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a> are selected\n\
CXSIApplication app = new CXSIApplication();\n\
CollectionItem collitem = (CollectionItem)app.Selection[0];\n\
SubComponent subcmp = (SubComponent)collitem.SubComponent;\n\
SampleCollection smplcoll = (SampleCollection)subcmp.ComponentCollection;\n\
app.LogMessage(\"There are \" + smplcoll.Count.ToString() \n\
	+ \" selected samples.\", siSeverity.siInfo);\n\
foreach (Sample smpl in smplcoll)\n\
{\n\
	app.LogMessage(\"Current sample[\" + smpl.Index.ToString()\n\
		+ \"] (prev:[\" + smpl.Navigate(siNavigateComponentType.siPreviousComponent).Index.ToString()\n\
		+ \"]; next:[\" + smpl.Navigate(siNavigateComponentType.siNextComponent).Index.ToString()\n\
		+ \"])\", siSeverity.siInfo);\n\
}\n\
\n\
// JScript -- assuming control <a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a> are selected\n\
var subcmp = Selection(0).SubComponent;\n\
var ctrlpts = subcmp.ComponentCollection;\n\
for( var i=0; i&lt;ctrlpts.Count; i++ ) \n\
{\n\
	LogMessage( \"Position of ctrlpt[\" + ctrlpts(i).Index + \"]: \"\n\
		+ ctrlpts(i).X + \",\" \n\
		+ ctrlpts(i).Y + \",\" \n\
		+ ctrlpts(i).Z );\n\
}\n\
\n\
\' VBScript -- assuming vertices are selected\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> subcmp = Selection(0).SubComponent\n\
for each vtx in subcmp.ComponentCollection\n\
	LogMessage vtx.Index &amp; \" has \" &amp; vtx.Nodes.Count &amp; \" polygon nodes\"\n\
next\n\
\n\
# Python -- assuming edges are selected\n\
subcmp = Application.Selection(0).SubComponent\n\
for edg in subcmp.ComponentCollection :\n\
	Application.LogMessage( \"edge[%s] is hard: %s\" % (edg.Index,edg.IsHard) )\n\
\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-000B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8BEEAD65-201E-43E7-BC24-447E133B0057\"></a></span>Related Scripting Commands\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_C10B3B6906DE4B9886C21B5996BCC84F\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE7EEFA7-88BF-49F6-8944-4B2755ED6667\"></a></span><a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> (used with \"SelectionList\") \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F1327ED-C3B1-40E8-9346-57C70DD65BB8\"></a></span><a href=\"#!/url=./si_cmds/PickElement.html\">PickElement</a>, <a href=\"#!/url=./si_cmds/PickObject.html\">PickObject</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-06333279-8574-42EC-9CBB-D068ADBF1F8C\"></a></span><a href=\"#!/url=./si_cmds/SelectFilter.html\">SelectFilter</a>, <a href=\"#!/url=./si_cmds/SelectEdgeFilter.html\">SelectEdgeFilter</a>, <a href=\"#!/url=./si_cmds/SelectObjectFilter.html\">SelectObjectFilter</a>, <a href=\"#!/url=./si_cmds/SelectPolygonFilter.html\">SelectPolygonFilter</a>, <a href=\"#!/url=./si_cmds/SelectSampledPointFilter.html\">SelectSampledPointFilter</a>, <a href=\"#!/url=./si_cmds/SelectVertexFilter.html\">SelectVertexFilter</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1FF4AD1A-DDFF-4162-B372-FCCF53BABE5A\"></a></span><a href=\"#!/url=./si_cmds/SetEdgeSelectionFilter.html\">SetEdgeSelectionFilter</a>, <a href=\"#!/url=./si_cmds/SetPointSelectionFilter.html\">SetPointSelectionFilter</a>, <a href=\"#!/url=./si_cmds/SetPolygonSelectionFilter.html\">SetPolygonSelectionFilter</a>, <a href=\"#!/url=./si_cmds/SetSampleSelectionFilter.html\">SetSampleSelectionFilter</a> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";