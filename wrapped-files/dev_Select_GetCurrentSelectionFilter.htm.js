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
      <meta name=\"topicid\" content=\"GUID-BA328D50-93F6-4766-8139-22DD685B1442\" />\n\
      <meta name=\"indexterm\" content=\"scripting: getting the selection filter\" />\n\
      <meta name=\"indexterm\" content=\"selection: getting the selection filter\" />\n\
      <meta name=\"indexterm\" content=\"selection filters: getting\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Getting the Current Selection Filter</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-BA328D50-93F6-4766-8139-22DD685B1442\"></a></span><div class=\"head\">\n\
            <h1>Getting the Current Selection Filter</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><span class=\"anchor_wrapper\"><a name=\"UL_D768712C14E24FE19BD9734FDA0880D9\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-890317F0-D276-4A06-B6F2-43805934AFDD\"></a></span>Use the <a href=\"#!/url=./si_om/Selection.Filter.html\">Selection.Filter</a> or Selection::GetFilter property: \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++ API\n\
Selection sel( Application().GetSelection() );\n\
Filter myFilter = sel.GetFilter();\n\
\n\
// C#\n\
CXSIApplication app = new CXSIApplication();\n\
Selection sel = app.Selection;\n\
Filter myFilter = sel.Filter;\n\
\n\
// JScript\n\
var sel = Selection;\n\
var myFilter = sel.Filter;\n\
\n\
\' VBScript\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> sel = Selection\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> myFilter = sel.Filter\n\
\n\
# Python\n\
sel = Application.Selection\n\
myFilter = sel.Filter\n\
\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0012\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BCEBAA69-2841-4D96-9095-253F92BB1E6A\"></a></span>Related Scripting Commands\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_C05F010C563C4E5FB9B4A5460FE81396\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C25277CD-0E5F-4185-9469-3B0265A04C81\"></a></span><a href=\"#!/url=./si_cmds/SelectFilter.html\">SelectFilter</a>, <a href=\"#!/url=./si_cmds/SelectEdgeFilter.html\">SelectEdgeFilter</a>, <a href=\"#!/url=./si_cmds/SelectObjectFilter.html\">SelectObjectFilter</a>, <a href=\"#!/url=./si_cmds/SelectPolygonFilter.html\">SelectPolygonFilter</a>, <a href=\"#!/url=./si_cmds/SelectSampledPointFilter.html\">SelectSampledPointFilter</a>, <a href=\"#!/url=./si_cmds/SelectVertexFilter.html\">SelectVertexFilter</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-96247D79-90D0-49E8-A25C-D39E1E5D329B\"></a></span><a href=\"#!/url=./si_cmds/SetEdgeSelectionFilter.html\">SetEdgeSelectionFilter</a>, <a href=\"#!/url=./si_cmds/SetPointSelectionFilter.html\">SetPointSelectionFilter</a>, <a href=\"#!/url=./si_cmds/SetPolygonSelectionFilter.html\">SetPolygonSelectionFilter</a>, <a href=\"#!/url=./si_cmds/SetSampleSelectionFilter.html\">SetSampleSelectionFilter</a> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";