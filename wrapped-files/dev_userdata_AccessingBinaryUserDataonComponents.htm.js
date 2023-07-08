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
      <meta name=\"topicid\" content=\"GUID-CAA31BA1-4676-456A-B8CF-5918670CED22\" />\n\
      <meta name=\"indexterm\" content=\"binary user data: accessing data\" />\n\
      <meta name=\"indexterm\" content=\"user data: binary data: accessing\" />\n\
      <meta name=\"indexterm\" content=\"custom data: binary data: accessing\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing Binary User Data on Components</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"UserDataBlob\", \"si_cpp/classXSI_1_1UserDataBlob.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"UserDataMap\", \"si_cpp/classXSI_1_1UserDataMap.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-CAA31BA1-4676-456A-B8CF-5918670CED22\"></a></span><div class=\"head\">\n\
            <h1>Accessing Binary User Data on Components</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-982EBEA1-2708-49D5-8078-63F6CE0DCE08\"></a></span><a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMaps</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1UserDataMap.html\">UserDataMaps</a> are similar to <a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlobs</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1UserDataBlob.html\">UserDataBlobs</a>, but support storing per-component binary data rather than object-level binary data.\n\
               For example, if some user data is meant to apply to every point in a vertex cluster\n\
               then it should be stored in a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"UserDataBlob\" class=\"a_multireflink\">UserDataBlob</a></span>, whereas, if the user data is meant to apply only to a single vertex, it should be\n\
               stored at the correct index in a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"UserDataMap\" class=\"a_multireflink\">UserDataMap</a></span>. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-55307EE7-1144-48ED-B977-A622D4B58FC1\"></a></span>Raw binary user data on components is available to plug-in developers through the\n\
               object model as the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"UserDataMap\" class=\"a_multireflink\">UserDataMap</a></span> object. The user data map attaches to a cluster of components, with individual user\n\
               data items on the map corresponding to each item in the cluster. Each of these items\n\
               can contain its own piece of data in binary (BLOB) format. This is similar to a weight\n\
               map except that instead of storing only floating point values, any kind of data may\n\
               be attached to each component. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B7E6BA0D-6E87-424C-B2FC-6A832FF0BD27\"></a></span>Once you get the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"UserDataMap\" class=\"a_multireflink\">UserDataMap</a></span> object, you can attach or retrieve the data stored on individual components (points,\n\
               edges, etc.) by one of these methods: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_1B3E17D8050842CBAEEEB638BDCC50E3\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-620E673D-365F-41AA-868B-FFBD1B11687F\"></a></span>For scripting and C#, you can get each <a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a> individually via <a href=\"#!/url=./si_om/UserDataMap.Item.html\">UserDataMap.Item</a> (<a href=\"#!/url=./si_om/UserDataMap.GetItem2.html\">UserDataMap.GetItem2</a> for Python) and then use the <a href=\"#!/url=./si_om/UserDataItem.Value.html\">UserDataItem.Value</a> property to get the values on the cluster element (component). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-41553F2C-E72C-40A4-B65B-3D51EA397F5B\"></a></span>For both the Object Model and the C++ API, you can get the value of the item using\n\
                     <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue property</a> (Object Model) or UserDataMap.GetItemValue member function (C++ API) on the cluster\n\
                     element (component) directly. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-53B9BF3F-2BFF-44CF-B5D1-F6D080C21592\"></a></span>For the C++ API, you can also use <a href=\"#!/url=./si_cpp/classXSI_1_1UserDataMap.html#GetValues\">UserDataMap::GetValues</a> to get the entire set of user data values stored on the cluster in an array. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-000B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D9D09BC8-F8EF-41D2-97DB-B733FCFECC5A\"></a></span>C++ Example: Applying a User Data Map to the edges of a sphere\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++ example (using the C++ API) giving an overview of accessing\n\
// per-component user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> on a cluster\n\
using namespace XSI;\n\
\n\
Application app;\n\
Model root = app.GetActiveSceneRoot();\n\
\n\
// equiv: oRoot.AddGeometry( \"Sphere\", \"NurbsSurface\" )\n\
X3DObject sphere;\n\
root.AddGeometry( L\"Sphere\", L\"MeshSurface\", \"SphereWithUserData\",sphere);\n\
\n\
// Create a cluster containing all the edges on the geometry, then\n\
// create a user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> map\n\
Cluster cls;\n\
Geometry geom( myGrid.GetActivePrimitive().GetGeometry(0) );\n\
CLongArray edges(4);\n\
edges[0] = 31; edges[1] = 45; edges[2] = 46; edges[3] = 47; \n\
geom.AddCluster( siEdgeCluster, L\"UserDataCls\", edges, cls );\n\
\n\
UserDataMap map;\n\
cls.AddProperty( L\"UserDataMap\", false, L\"UserDataBasicExample\", map );\n\
\n\
// In C++ it is easy and efficient to save binary <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> instead of strings\n\
unsigned char aExampleData[] = { 0, 23, 1, 244, 20, 99 };\n\
\n\
// Copy the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> into the user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> map\n\
map.PutItemValue( 3, (unsigned char*)&amp;aExampleData,sizeof(aExampleData) );\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";