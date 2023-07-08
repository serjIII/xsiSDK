var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_envelope.h Source File</title>\n\
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
      initNavTree(\'xsi__envelope_8h_source.html\', prefix);\n\
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
            <h1>xsi_envelope.h Source File</h1>\n\
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
<div class=\"title\">xsi_envelope.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__envelope_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIENVELOPE_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIENVELOPE_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__operator_8h.html\">xsi_operator.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__doublearray_8h.html\">xsi_doublearray.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__cluster_8h.html\">xsi_cluster.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__clusterproperty_8h.html\">xsi_clusterproperty.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"keyword\">struct </span>CColor;</div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00047\"></a><span class=\"lineno\">   47</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00048\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">   48</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Operator.html\">Operator</a></div>\n\
<div class=\"line\"><a name=\"l00049\"></a><span class=\"lineno\">   49</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00050\"></a><span class=\"lineno\">   50</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00052\"></a><span class=\"lineno\">   52</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a>();</div>\n\
<div class=\"line\"><a name=\"l00053\"></a><span class=\"lineno\">   53</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00055\"></a><span class=\"lineno\">   55</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a>();</div>\n\
<div class=\"line\"><a name=\"l00056\"></a><span class=\"lineno\">   56</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\">   60</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\">   66</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00091\"></a><span class=\"lineno\">   91</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> GetDeformers() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00186\"></a><span class=\"lineno\">  186</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">CClusterPropertyElementArray</a> GetWeights( <span class=\"keywordtype\">double</span> in_dFrame ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00187\"></a><span class=\"lineno\">  187</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00192\"></a><span class=\"lineno\">  192</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">CClusterElementArray</a> GetElements( <span class=\"keywordtype\">double</span> in_dFrame ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00193\"></a><span class=\"lineno\">  193</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00200\"></a><span class=\"lineno\">  200</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> GetDeformerWeights( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> &amp;in_Deformer, <span class=\"keywordtype\">double</span> in_dFrame ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00201\"></a><span class=\"lineno\">  201</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00275\"></a><span class=\"lineno\">  275</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> SetDeformerWeights( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> &amp;in_Deformer, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> &amp;in_Array );</div>\n\
<div class=\"line\"><a name=\"l00276\"></a><span class=\"lineno\">  276</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00284\"></a><span class=\"lineno\">  284</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetDeformerColor( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> &amp;in_Deformer, <a class=\"code\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a> &amp;io_Color ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00285\"></a><span class=\"lineno\">  285</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00293\"></a><span class=\"lineno\">  293</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> SetDeformerColor( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> &amp;in_Deformer, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a> &amp;in_Color );</div>\n\
<div class=\"line\"><a name=\"l00294\"></a><span class=\"lineno\">  294</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00373\"></a><span class=\"lineno\">  373</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> SetDeformerWeights2( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> &amp;in_Deformer, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">CDoubleArray</a> &amp;in_Array );</div>\n\
<div class=\"line\"><a name=\"l00374\"></a><span class=\"lineno\">  374</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00375\"></a><span class=\"lineno\">  375</span>&#160;<span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00376\"></a><span class=\"lineno\">  376</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00377\"></a><span class=\"lineno\">  377</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">Envelope</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00378\"></a><span class=\"lineno\">  378</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00379\"></a><span class=\"lineno\">  379</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00380\"></a><span class=\"lineno\">  380</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00381\"></a><span class=\"lineno\">  381</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00382\"></a><span class=\"lineno\">  382</span>&#160;<span class=\"preprocessor\">#endif // __XSIENVELOPE_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CClusterElementArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CClusterElementArray.html\">XSI::CClusterElementArray</a></div><div class=\"ttdoc\">An array of cluster elements in a Cluster object. </div><div class=\"ttdef\"><b>Definition:</b> xsi_cluster.h:365</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"xsi__cluster_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__cluster_8h.html\">xsi_cluster.h</a></div><div class=\"ttdoc\">Cluster and CClusterElementArray class declarations. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CDoubleArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CDoubleArray.html\">XSI::CDoubleArray</a></div><div class=\"ttdoc\">The CDoubleArray is an uni-dimensional array of doubles. </div><div class=\"ttdef\"><b>Definition:</b> xsi_doublearray.h:41</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Operator_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Operator.html\">XSI::Operator</a></div><div class=\"ttdoc\">The Operator object represents an operator in the scene graph. Objects or Parameters are connected to...</div><div class=\"ttdef\"><b>Definition:</b> xsi_operator.h:171</div></div>\n\
<div class=\"ttc\" id=\"structXSI_1_1CColor_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">XSI::CColor</a></div><div class=\"ttdoc\">This struct represents an RGBA color. </div><div class=\"ttdef\"><b>Definition:</b> xsi_color.h:56</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">XSI::CRefArray</a></div><div class=\"ttdoc\">The CRefArray class holds generic CRef objects and acts as a base class for other specialized CRef ar...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:333</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"xsi__operator_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__operator_8h.html\">xsi_operator.h</a></div><div class=\"ttdoc\">Operator class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CClusterPropertyElementArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyElementArray.html\">XSI::CClusterPropertyElementArray</a></div><div class=\"ttdoc\">An array of cluster property elements in a ClusterProperty object. </div><div class=\"ttdef\"><b>Definition:</b> xsi_clusterproperty.h:484</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"xsi__doublearray_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__doublearray_8h.html\">xsi_doublearray.h</a></div><div class=\"ttdoc\">CDoubleArray class declaration. </div></div>\n\
<div class=\"ttc\" id=\"xsi__clusterproperty_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__clusterproperty_8h.html\">xsi_clusterproperty.h</a></div><div class=\"ttdoc\">ClusterProperty and CClusterPropertyElementArray class declarations. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1X3DObject_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">XSI::X3DObject</a></div><div class=\"ttdoc\">The X3DObject object represents a basic 3D object of a scene in Softimage. </div><div class=\"ttdef\"><b>Definition:</b> xsi_x3dobject.h:91</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Envelope_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Envelope.html\">XSI::Envelope</a></div><div class=\"ttdoc\">An envelope is an object or hierarchy that is assigned as a skin to a set of deformers such as IK cha...</div><div class=\"ttdef\"><b>Definition:</b> xsi_envelope.h:48</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";