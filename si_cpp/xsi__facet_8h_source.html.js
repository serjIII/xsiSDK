var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_facet.h Source File</title>\n\
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
      initNavTree(\'xsi__facet_8h_source.html\', prefix);\n\
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
            <h1>xsi_facet.h Source File</h1>\n\
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
<div class=\"title\">xsi_facet.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__facet_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIFACET_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIFACET_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__siobject_8h.html\">xsi_siobject.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__math_8h.html\">xsi_math.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__longarray_8h.html\">xsi_longarray.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"keyword\">class </span>CSegmentRefArray;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"keyword\">class </span>CSampleRefArray;</div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"keyword\">class </span>CPointRefArray;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"keyword\">class </span>SubComponent;</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00075\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">   75</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">SIObject</a></div>\n\
<div class=\"line\"><a name=\"l00076\"></a><span class=\"lineno\">   76</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a>();</div>\n\
<div class=\"line\"><a name=\"l00080\"></a><span class=\"lineno\">   80</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00082\"></a><span class=\"lineno\">   82</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a>();</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00087\"></a><span class=\"lineno\">   87</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00092\"></a><span class=\"lineno\">   92</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00093\"></a><span class=\"lineno\">   93</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00098\"></a><span class=\"lineno\">   98</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00099\"></a><span class=\"lineno\">   99</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00104\"></a><span class=\"lineno\">  104</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00110\"></a><span class=\"lineno\">  110</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CSegmentRefArray.html\">CSegmentRefArray</a> GetSegments() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00123\"></a><span class=\"lineno\">  123</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00127\"></a><span class=\"lineno\">  127</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CPointRefArray.html\">CPointRefArray</a> GetPoints() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00132\"></a><span class=\"lineno\">  132</span>&#160;    LONG GetNbPoints()<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00133\"></a><span class=\"lineno\">  133</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00137\"></a><span class=\"lineno\">  137</span>&#160;    LONG GetIndex() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00138\"></a><span class=\"lineno\">  138</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00142\"></a><span class=\"lineno\">  142</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CSampleRefArray.html\">CSampleRefArray</a> GetSamples() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00143\"></a><span class=\"lineno\">  143</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00147\"></a><span class=\"lineno\">  147</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">SubComponent</a> GetSubComponent() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00148\"></a><span class=\"lineno\">  148</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00154\"></a><span class=\"lineno\">  154</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a> Navigate(<a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a334ced880a64fec1d3f9db910b789e1c\">siNavigateComponentType</a> in_siNavigate) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00155\"></a><span class=\"lineno\">  155</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00156\"></a><span class=\"lineno\">  156</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00157\"></a><span class=\"lineno\">  157</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00158\"></a><span class=\"lineno\">  158</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">Facet</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\">  160</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00161\"></a><span class=\"lineno\">  161</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00200\"></a><span class=\"lineno\">  200</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00201\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CFacetRefArray.html\">  201</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CFacetRefArray.html\">CFacetRefArray</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a></div>\n\
<div class=\"line\"><a name=\"l00202\"></a><span class=\"lineno\">  202</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00203\"></a><span class=\"lineno\">  203</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00206\"></a><span class=\"lineno\">  206</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CFacetRefArray.html\">CFacetRefArray</a>();</div>\n\
<div class=\"line\"><a name=\"l00207\"></a><span class=\"lineno\">  207</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00211\"></a><span class=\"lineno\">  211</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CFacetRefArray.html\">CFacetRefArray</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CFacetRefArray.html\">CFacetRefArray</a>&amp; in_array);</div>\n\
<div class=\"line\"><a name=\"l00212\"></a><span class=\"lineno\">  212</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00217\"></a><span class=\"lineno\">  217</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> GetItem( LONG in_index ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00218\"></a><span class=\"lineno\">  218</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00223\"></a><span class=\"lineno\">  223</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> GetItem( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_name ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00224\"></a><span class=\"lineno\">  224</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00228\"></a><span class=\"lineno\">  228</span>&#160;    LONG GetCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00229\"></a><span class=\"lineno\">  229</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00233\"></a><span class=\"lineno\">  233</span>&#160;    <span class=\"keywordtype\">bool</span> IsValid() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00234\"></a><span class=\"lineno\">  234</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00238\"></a><span class=\"lineno\">  238</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3Array.html\">MATH::CVector3Array</a> GetNormalArray() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00239\"></a><span class=\"lineno\">  239</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00243\"></a><span class=\"lineno\">  243</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a> GetIndexArray() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00244\"></a><span class=\"lineno\">  244</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00248\"></a><span class=\"lineno\">  248</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">SubComponent</a> GetSubComponent() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00249\"></a><span class=\"lineno\">  249</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00256\"></a><span class=\"lineno\">  256</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CFacetRefArray.html\">CFacetRefArray</a> Navigate(<a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a334ced880a64fec1d3f9db910b789e1c\">siNavigateComponentType</a> in_siNavigate) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00257\"></a><span class=\"lineno\">  257</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00258\"></a><span class=\"lineno\">  258</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00259\"></a><span class=\"lineno\">  259</span>&#160;    <span class=\"keywordtype\">void</span>* m_ptr;</div>\n\
<div class=\"line\"><a name=\"l00260\"></a><span class=\"lineno\">  260</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00261\"></a><span class=\"lineno\">  261</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00262\"></a><span class=\"lineno\">  262</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00263\"></a><span class=\"lineno\">  263</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00264\"></a><span class=\"lineno\">  264</span>&#160;<span class=\"preprocessor\">#endif // __XSIFACET_H__</span></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a334ced880a64fec1d3f9db910b789e1c\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a334ced880a64fec1d3f9db910b789e1c\">XSI::siNavigateComponentType</a></div><div class=\"ttdeci\">siNavigateComponentType</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1452</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1SIObject_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">XSI::SIObject</a></div><div class=\"ttdoc\">SIObject derives from CBase and acts as the base class for the Softimage Object Model library...</div><div class=\"ttdef\"><b>Definition:</b> xsi_siobject.h:66</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CSegmentRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CSegmentRefArray.html\">XSI::CSegmentRefArray</a></div><div class=\"ttdoc\">An array of Segment objects that represents all the segment sub-components in the Geometry...</div><div class=\"ttdef\"><b>Definition:</b> xsi_segment.h:175</div></div>\n\
<div class=\"ttc\" id=\"xsi__longarray_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__longarray_8h.html\">xsi_longarray.h</a></div><div class=\"ttdoc\">CLongArray class declaration. </div></div>\n\
<div class=\"ttc\" id=\"xsi__siobject_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__siobject_8h.html\">xsi_siobject.h</a></div><div class=\"ttdoc\">SIObject class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CSampleRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CSampleRefArray.html\">XSI::CSampleRefArray</a></div><div class=\"ttdoc\">Array of Sample objects that represent the samples in the Geometry. </div><div class=\"ttdef\"><b>Definition:</b> xsi_sample.h:160</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">XSI::CRefArray</a></div><div class=\"ttdoc\">The CRefArray class holds generic CRef objects and acts as a base class for other specialized CRef ar...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:333</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Facet_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Facet.html\">XSI::Facet</a></div><div class=\"ttdoc\">A facet is a generic concept used to describe a Geometry&#39;s PolygonFace, NurbsSurface or NurbsCurve...</div><div class=\"ttdef\"><b>Definition:</b> xsi_facet.h:75</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"xsi__math_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__math_8h.html\">xsi_math.h</a></div><div class=\"ttdoc\">MATH namespace declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1MATH_1_1CVector3Array_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3Array.html\">XSI::MATH::CVector3Array</a></div><div class=\"ttdoc\">The CVector3Array is an uni-dimensional array of CVector3. </div><div class=\"ttdef\"><b>Definition:</b> xsi_vector3.h:1000</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CString_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">XSI::CString</a></div><div class=\"ttdoc\">Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...</div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:76</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CPointRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CPointRefArray.html\">XSI::CPointRefArray</a></div><div class=\"ttdoc\">An array of Point objects that represent the points in the Geometry. </div><div class=\"ttdef\"><b>Definition:</b> xsi_point.h:197</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CFacetRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CFacetRefArray.html\">XSI::CFacetRefArray</a></div><div class=\"ttdoc\">An array of Facet objects representing all segments of the underlying Geometry object. </div><div class=\"ttdef\"><b>Definition:</b> xsi_facet.h:201</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CLongArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">XSI::CLongArray</a></div><div class=\"ttdoc\">The CLongArray is an uni-dimensional array of LONG values. </div><div class=\"ttdef\"><b>Definition:</b> xsi_longarray.h:45</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1SubComponent_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">XSI::SubComponent</a></div><div class=\"ttdoc\">Provides access to the subelements of an object&#39;s Geometry. </div><div class=\"ttdef\"><b>Definition:</b> xsi_subcomponent.h:30</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";