var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_vertex.h Source File</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><link rel=\"stylesheet\" type=\"text/css\" href=\"si_cpp/navtree.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"si_cpp/doxygen.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"si_cpp/tabs.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"style/adsk.cpm.css\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/yepnope.1.5.4-min.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">\n\
var weAreIn21 = $(\"div#main.view-active\").length;\n\
var prefix = \"\";\n\
if (weAreIn21)\n\
{ prefix = \"si_cpp/\"; }\n\
yepnope([{\n\
load:[prefix + \"jquery.js\", prefix + \"navtree.js\", prefix + \"resize.js\", prefix + \"dynsections.js\"],\n\
complete: function() {\n\
  dQuery = jQuery.noConflict(\'true\');\n\
  dQuery(window).load(resizeHeight);\n\
  dQuery(document).ready( function () {\n\
    setTimeout( function () {\n\
      initResizable();\n\
      initNavTree(\'xsi__vertex_8h_source.html\', prefix);\n\
      dQuery(window).trigger(\"load\");\n\
      }, 100);\n\
    }\n\
  );\n\
}\n\
}]\n\
)\n\
</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>xsi_vertex.h Source File</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.6 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/annotated.html\"><span>Classes</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/files.html\"><span>Files</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/files.html\"><span>File&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/globals.html\"><span>File&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
</div><!-- top -->\n\
<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n\
  <div id=\"nav-tree\">\n\
    <div id=\"nav-tree-contents\">\n\
      <div id=\"nav-sync\" class=\"sync\"></div>\n\
    </div>\n\
  </div>\n\
  <div id=\"splitbar\" style=\"-moz-user-select:none;\" class=\"ui-resizable-handle\">\n\
  </div>\n\
</div>\n\
\n\
<div id=\"doc-content\">\n\
<div class=\"header\">\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">xsi_vertex.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__vertex_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIVERTEX_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIVERTEX_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__point_8h.html\">xsi_point.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">class </span>CPolygonNodeRefArray;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"keyword\">class </span>CVertexRefArray;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"keyword\">class </span>CEdgeRefArray;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"keyword\">class </span>CPolygonFaceRefArray;</div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"keyword\">class </span>CDoubleArray;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00057\"></a><span class=\"lineno\">   57</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">   59</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Point.html\">Point</a></div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00063\"></a><span class=\"lineno\">   63</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a>();</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a>();</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00106\"></a><span class=\"lineno\">  106</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CPolygonNodeRefArray.html\">CPolygonNodeRefArray</a> GetNodes() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00107\"></a><span class=\"lineno\">  107</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">CVertexRefArray</a> GetNeighborVertices(LONG in_lDistance = 1) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CEdgeRefArray.html\">CEdgeRefArray</a> GetNeighborEdges(LONG in_lDistance = 1) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CPolygonFaceRefArray.html\">CPolygonFaceRefArray</a> GetNeighborPolygons(LONG in_lDistance = 1) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00130\"></a><span class=\"lineno\">  130</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00135\"></a><span class=\"lineno\">  135</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">CVertexRefArray</a> GrowNeighborVertices(LONG in_lDistance = 1) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00141\"></a><span class=\"lineno\">  141</span>&#160;    <span class=\"keywordtype\">double</span> GetCrease()<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00142\"></a><span class=\"lineno\">  142</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00147\"></a><span class=\"lineno\">  147</span>&#160;    <span class=\"keywordtype\">bool</span> GetIsBoundary()<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00148\"></a><span class=\"lineno\">  148</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00149\"></a><span class=\"lineno\">  149</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00150\"></a><span class=\"lineno\">  150</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00151\"></a><span class=\"lineno\">  151</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">Vertex</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00152\"></a><span class=\"lineno\">  152</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00153\"></a><span class=\"lineno\">  153</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00154\"></a><span class=\"lineno\">  154</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00188\"></a><span class=\"lineno\">  188</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00189\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">  189</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">CVertexRefArray</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CPointRefArray.html\">CPointRefArray</a></div>\n\
<div class=\"line\"><a name=\"l00190\"></a><span class=\"lineno\">  190</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00191\"></a><span class=\"lineno\">  191</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00192\"></a><span class=\"lineno\">  192</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">CVertexRefArray</a>();</div>\n\
<div class=\"line\"><a name=\"l00193\"></a><span class=\"lineno\">  193</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00197\"></a><span class=\"lineno\">  197</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">CVertexRefArray</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">CVertexRefArray</a>&amp; in_array );</div>\n\
<div class=\"line\"><a name=\"l00198\"></a><span class=\"lineno\">  198</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00203\"></a><span class=\"lineno\">  203</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> GetItem( LONG in_index ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00204\"></a><span class=\"lineno\">  204</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00209\"></a><span class=\"lineno\">  209</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> GetItem( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_name ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00210\"></a><span class=\"lineno\">  210</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00214\"></a><span class=\"lineno\">  214</span>&#160;    LONG GetCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00215\"></a><span class=\"lineno\">  215</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00219\"></a><span class=\"lineno\">  219</span>&#160;    <span class=\"keywordtype\">bool</span> IsValid() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00220\"></a><span class=\"lineno\">  220</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00225\"></a><span class=\"lineno\">  225</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">CVertexRefArray</a> GetNeighborVertices(LONG in_lDistance = 1) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00226\"></a><span class=\"lineno\">  226</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00231\"></a><span class=\"lineno\">  231</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CEdgeRefArray.html\">CEdgeRefArray</a> GetNeighborEdges(LONG in_lDistance = 1) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00232\"></a><span class=\"lineno\">  232</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00237\"></a><span class=\"lineno\">  237</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CPolygonFaceRefArray.html\">CPolygonFaceRefArray</a> GetNeighborPolygons(LONG in_lDistance = 1) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00238\"></a><span class=\"lineno\">  238</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00243\"></a><span class=\"lineno\">  243</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">CVertexRefArray</a> GrowNeighborVertices(LONG in_lDistance = 1) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00244\"></a><span class=\"lineno\">  244</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00249\"></a><span class=\"lineno\">  249</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> GetCreaseArray() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00250\"></a><span class=\"lineno\">  250</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00251\"></a><span class=\"lineno\">  251</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00252\"></a><span class=\"lineno\">  252</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00253\"></a><span class=\"lineno\">  253</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00254\"></a><span class=\"lineno\">  254</span>&#160;<span class=\"preprocessor\">#endif // __XSIVERTEX_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CEdgeRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CEdgeRefArray.html\">XSI::CEdgeRefArray</a></div><div class=\"ttdoc\">Array of Edge objects. </div><div class=\"ttdef\"><b>Definition:</b> xsi_edge.h:193</div></div>\n\
<div class=\"ttc\" id=\"xsi__point_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__point_8h.html\">xsi_point.h</a></div><div class=\"ttdoc\">Point and CPointRefArray class declarations. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Point_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Point.html\">XSI::Point</a></div><div class=\"ttdoc\">A Point is a generic concept used to describe a Geometry&#39;s Vertex or ControlPoint. </div><div class=\"ttdef\"><b>Definition:</b> xsi_point.h:65</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CDoubleArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">XSI::CDoubleArray</a></div><div class=\"ttdoc\">The CDoubleArray is an uni-dimensional array of doubles. </div><div class=\"ttdef\"><b>Definition:</b> xsi_doublearray.h:41</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Vertex_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Vertex.html\">XSI::Vertex</a></div><div class=\"ttdoc\">The Vertex object gives access to the geometry vertices of an X3DObject&#39;s Primitive. A Vertex is the object PolygonMesh specifics of the Point object. </div><div class=\"ttdef\"><b>Definition:</b> xsi_vertex.h:59</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CPolygonNodeRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CPolygonNodeRefArray.html\">XSI::CPolygonNodeRefArray</a></div><div class=\"ttdoc\">An array of PolygonNode objects representing the edge junction in a polygon. </div><div class=\"ttdef\"><b>Definition:</b> xsi_polygonnode.h:158</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CString_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">XSI::CString</a></div><div class=\"ttdoc\">Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...</div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:76</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CPointRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CPointRefArray.html\">XSI::CPointRefArray</a></div><div class=\"ttdoc\">An array of Point objects that represent the points in the Geometry. </div><div class=\"ttdef\"><b>Definition:</b> xsi_point.h:197</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CVertexRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CVertexRefArray.html\">XSI::CVertexRefArray</a></div><div class=\"ttdoc\">Represents an array of Vertex objects. </div><div class=\"ttdef\"><b>Definition:</b> xsi_vertex.h:189</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CPolygonFaceRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CPolygonFaceRefArray.html\">XSI::CPolygonFaceRefArray</a></div><div class=\"ttdoc\">An array of PolygonFace objects representing the polygons in a polygon mesh. </div><div class=\"ttdef\"><b>Definition:</b> xsi_polygonface.h:269</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";