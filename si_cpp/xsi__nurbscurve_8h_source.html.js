var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_nurbscurve.h Source File</title>\n\
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
      initNavTree(\'xsi__nurbscurve_8h_source.html\', prefix);\n\
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
            <h1>xsi_nurbscurve.h Source File</h1>\n\
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
<div class=\"title\">xsi_nurbscurve.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__nurbscurve_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSINURBSCURVE_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSINURBSCURVE_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__siobject_8h.html\">xsi_siobject.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__math_8h.html\">xsi_math.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__nurbsdata_8h.html\">xsi_nurbsdata.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"keyword\">class </span>CKnotArray;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"keyword\">class </span>SubComponent;</div>\n\
<div class=\"line\"><a name=\"l00028\"></a><span class=\"lineno\">   28</span>&#160;<span class=\"keyword\">class </span>CControlPointRefArray;</div>\n\
<div class=\"line\"><a name=\"l00029\"></a><span class=\"lineno\">   29</span>&#160;<span class=\"keyword\">class </span>CNurbsSampleRefArray;</div>\n\
<div class=\"line\"><a name=\"l00030\"></a><span class=\"lineno\">   30</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00031\"></a><span class=\"lineno\">   31</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00032\"></a><span class=\"lineno\">   32</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00066\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">   66</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">SIObject</a></div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00070\"></a><span class=\"lineno\">   70</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a>();</div>\n\
<div class=\"line\"><a name=\"l00071\"></a><span class=\"lineno\">   71</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a>();</div>\n\
<div class=\"line\"><a name=\"l00074\"></a><span class=\"lineno\">   74</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00079\"></a><span class=\"lineno\">   79</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00090\"></a><span class=\"lineno\">   90</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00094\"></a><span class=\"lineno\">   94</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00101\"></a><span class=\"lineno\">  101</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00108\"></a><span class=\"lineno\">  108</span>&#160;     <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00109\"></a><span class=\"lineno\">  109</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CKnotArray.html\">CKnotArray</a> GetKnots()<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CControlPointRefArray.html\">CControlPointRefArray</a> GetControlPoints()<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00120\"></a><span class=\"lineno\">  120</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00127\"></a><span class=\"lineno\">  127</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> Get</div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a5e68ac68443f945d0dd92137e2895d0b\">siNurbsFormat</a>           in_siNurbsFormat,</div>\n\
<div class=\"line\"><a name=\"l00130\"></a><span class=\"lineno\">  130</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsCurveData.html\">CNurbsCurveData</a>&amp;        out_curve</div>\n\
<div class=\"line\"><a name=\"l00131\"></a><span class=\"lineno\">  131</span>&#160;    )<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00132\"></a><span class=\"lineno\">  132</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00133\"></a><span class=\"lineno\">  133</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00142\"></a><span class=\"lineno\">  142</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> Set</div>\n\
<div class=\"line\"><a name=\"l00143\"></a><span class=\"lineno\">  143</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00144\"></a><span class=\"lineno\">  144</span>&#160;        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsCurveData.html\">CNurbsCurveData</a>&amp;  in_curve,</div>\n\
<div class=\"line\"><a name=\"l00145\"></a><span class=\"lineno\">  145</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a5e68ac68443f945d0dd92137e2895d0b\">siNurbsFormat</a>           in_siNurbsFormat = <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a5e68ac68443f945d0dd92137e2895d0baa33e32f7f996bf361ee8031a38b4dcce\">siSINurbs</a></div>\n\
<div class=\"line\"><a name=\"l00146\"></a><span class=\"lineno\">  146</span>&#160;    );</div>\n\
<div class=\"line\"><a name=\"l00147\"></a><span class=\"lineno\">  147</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00157\"></a><span class=\"lineno\">  157</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> EvaluatePosition</div>\n\
<div class=\"line\"><a name=\"l00158\"></a><span class=\"lineno\">  158</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;        <span class=\"keywordtype\">double</span>                  in_dUValue,</div>\n\
<div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\">  160</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vPosition,</div>\n\
<div class=\"line\"><a name=\"l00161\"></a><span class=\"lineno\">  161</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vTangent,</div>\n\
<div class=\"line\"><a name=\"l00162\"></a><span class=\"lineno\">  162</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vNormal,</div>\n\
<div class=\"line\"><a name=\"l00163\"></a><span class=\"lineno\">  163</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vBiNormal</div>\n\
<div class=\"line\"><a name=\"l00164\"></a><span class=\"lineno\">  164</span>&#160;    )<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00165\"></a><span class=\"lineno\">  165</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00175\"></a><span class=\"lineno\">  175</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> EvaluateNormalizedPosition</div>\n\
<div class=\"line\"><a name=\"l00176\"></a><span class=\"lineno\">  176</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00177\"></a><span class=\"lineno\">  177</span>&#160;        <span class=\"keywordtype\">double</span>                  in_dUNormalizedValue,</div>\n\
<div class=\"line\"><a name=\"l00178\"></a><span class=\"lineno\">  178</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vPosition,</div>\n\
<div class=\"line\"><a name=\"l00179\"></a><span class=\"lineno\">  179</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vTangent,</div>\n\
<div class=\"line\"><a name=\"l00180\"></a><span class=\"lineno\">  180</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vNormal,</div>\n\
<div class=\"line\"><a name=\"l00181\"></a><span class=\"lineno\">  181</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vBiNormal</div>\n\
<div class=\"line\"><a name=\"l00182\"></a><span class=\"lineno\">  182</span>&#160;    )<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00183\"></a><span class=\"lineno\">  183</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00194\"></a><span class=\"lineno\">  194</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> EvaluatePositionFromPercentage</div>\n\
<div class=\"line\"><a name=\"l00195\"></a><span class=\"lineno\">  195</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00196\"></a><span class=\"lineno\">  196</span>&#160;        <span class=\"keywordtype\">double</span>                  in_dPercentage,</div>\n\
<div class=\"line\"><a name=\"l00197\"></a><span class=\"lineno\">  197</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vPosition,</div>\n\
<div class=\"line\"><a name=\"l00198\"></a><span class=\"lineno\">  198</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vTangent,</div>\n\
<div class=\"line\"><a name=\"l00199\"></a><span class=\"lineno\">  199</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vNormal,</div>\n\
<div class=\"line\"><a name=\"l00200\"></a><span class=\"lineno\">  200</span>&#160;        <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">MATH::CVector3</a>&amp;         out_vBiNormal</div>\n\
<div class=\"line\"><a name=\"l00201\"></a><span class=\"lineno\">  201</span>&#160;    )<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00202\"></a><span class=\"lineno\">  202</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00208\"></a><span class=\"lineno\">  208</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetDegree(LONG&amp; out_lDegree)<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00209\"></a><span class=\"lineno\">  209</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00215\"></a><span class=\"lineno\">  215</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetLength(<span class=\"keywordtype\">double</span>&amp; out_dLength)<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00216\"></a><span class=\"lineno\">  216</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00223\"></a><span class=\"lineno\">  223</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetNormalizedUFromU</div>\n\
<div class=\"line\"><a name=\"l00224\"></a><span class=\"lineno\">  224</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00225\"></a><span class=\"lineno\">  225</span>&#160;        <span class=\"keywordtype\">double</span>                  in_dUValue,</div>\n\
<div class=\"line\"><a name=\"l00226\"></a><span class=\"lineno\">  226</span>&#160;        <span class=\"keywordtype\">double</span>&amp;                 out_dNormalizedUValue</div>\n\
<div class=\"line\"><a name=\"l00227\"></a><span class=\"lineno\">  227</span>&#160;    )<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00228\"></a><span class=\"lineno\">  228</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00235\"></a><span class=\"lineno\">  235</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetUFromNormalizedU</div>\n\
<div class=\"line\"><a name=\"l00236\"></a><span class=\"lineno\">  236</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00237\"></a><span class=\"lineno\">  237</span>&#160;        <span class=\"keywordtype\">double</span>                  in_dNormalizedUValue,</div>\n\
<div class=\"line\"><a name=\"l00238\"></a><span class=\"lineno\">  238</span>&#160;        <span class=\"keywordtype\">double</span>&amp;                 out_dUValue</div>\n\
<div class=\"line\"><a name=\"l00239\"></a><span class=\"lineno\">  239</span>&#160;    )<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00240\"></a><span class=\"lineno\">  240</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00247\"></a><span class=\"lineno\">  247</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetUFromPercentage</div>\n\
<div class=\"line\"><a name=\"l00248\"></a><span class=\"lineno\">  248</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00249\"></a><span class=\"lineno\">  249</span>&#160;        <span class=\"keywordtype\">double</span>                  in_dPercentage,</div>\n\
<div class=\"line\"><a name=\"l00250\"></a><span class=\"lineno\">  250</span>&#160;        <span class=\"keywordtype\">double</span>&amp;                 out_dUValue</div>\n\
<div class=\"line\"><a name=\"l00251\"></a><span class=\"lineno\">  251</span>&#160;    )<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00252\"></a><span class=\"lineno\">  252</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00259\"></a><span class=\"lineno\">  259</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetPercentageFromU</div>\n\
<div class=\"line\"><a name=\"l00260\"></a><span class=\"lineno\">  260</span>&#160;    (</div>\n\
<div class=\"line\"><a name=\"l00261\"></a><span class=\"lineno\">  261</span>&#160;        <span class=\"keywordtype\">double</span>                  in_dUValue,</div>\n\
<div class=\"line\"><a name=\"l00262\"></a><span class=\"lineno\">  262</span>&#160;        <span class=\"keywordtype\">double</span>&amp;                 out_dPercentage</div>\n\
<div class=\"line\"><a name=\"l00263\"></a><span class=\"lineno\">  263</span>&#160;    )<span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00264\"></a><span class=\"lineno\">  264</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00269\"></a><span class=\"lineno\">  269</span>&#160;    LONG GetIndex() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00270\"></a><span class=\"lineno\">  270</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00274\"></a><span class=\"lineno\">  274</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">SubComponent</a> GetSubComponent() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00275\"></a><span class=\"lineno\">  275</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00281\"></a><span class=\"lineno\">  281</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a> Navigate(<a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a334ced880a64fec1d3f9db910b789e1c\">siNavigateComponentType</a> in_siNavigate) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00282\"></a><span class=\"lineno\">  282</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00283\"></a><span class=\"lineno\">  283</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00284\"></a><span class=\"lineno\">  284</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00285\"></a><span class=\"lineno\">  285</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">NurbsCurve</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00286\"></a><span class=\"lineno\">  286</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00287\"></a><span class=\"lineno\">  287</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00288\"></a><span class=\"lineno\">  288</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00313\"></a><span class=\"lineno\">  313</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00314\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html\">  314</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html\">CNurbsCurveRefArray</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a></div>\n\
<div class=\"line\"><a name=\"l00315\"></a><span class=\"lineno\">  315</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00316\"></a><span class=\"lineno\">  316</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00318\"></a><span class=\"lineno\">  318</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html\">CNurbsCurveRefArray</a>();</div>\n\
<div class=\"line\"><a name=\"l00319\"></a><span class=\"lineno\">  319</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00321\"></a><span class=\"lineno\">  321</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html\">CNurbsCurveRefArray</a>();</div>\n\
<div class=\"line\"><a name=\"l00322\"></a><span class=\"lineno\">  322</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00326\"></a><span class=\"lineno\">  326</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html\">CNurbsCurveRefArray</a>( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html\">CNurbsCurveRefArray</a>&amp; in_array );</div>\n\
<div class=\"line\"><a name=\"l00327\"></a><span class=\"lineno\">  327</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00332\"></a><span class=\"lineno\">  332</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> GetItem( LONG in_index ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00333\"></a><span class=\"lineno\">  333</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00338\"></a><span class=\"lineno\">  338</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> GetItem( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_name ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00339\"></a><span class=\"lineno\">  339</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00343\"></a><span class=\"lineno\">  343</span>&#160;    LONG GetCount() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00344\"></a><span class=\"lineno\">  344</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00348\"></a><span class=\"lineno\">  348</span>&#160;    <span class=\"keywordtype\">bool</span> IsValid() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00349\"></a><span class=\"lineno\">  349</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00353\"></a><span class=\"lineno\">  353</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a> GetIndexArray() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00354\"></a><span class=\"lineno\">  354</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00358\"></a><span class=\"lineno\">  358</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">SubComponent</a> GetSubComponent() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00359\"></a><span class=\"lineno\">  359</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00365\"></a><span class=\"lineno\">  365</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html\">CNurbsCurveRefArray</a> Navigate(<a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a334ced880a64fec1d3f9db910b789e1c\">siNavigateComponentType</a> in_siNavigate) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00366\"></a><span class=\"lineno\">  366</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00367\"></a><span class=\"lineno\">  367</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00368\"></a><span class=\"lineno\">  368</span>&#160;    <span class=\"keywordtype\">void</span>* m_ptr;</div>\n\
<div class=\"line\"><a name=\"l00369\"></a><span class=\"lineno\">  369</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00370\"></a><span class=\"lineno\">  370</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00371\"></a><span class=\"lineno\">  371</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00372\"></a><span class=\"lineno\">  372</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00373\"></a><span class=\"lineno\">  373</span>&#160;<span class=\"preprocessor\">#endif // __XSINURBSCURVE_H__</span></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a334ced880a64fec1d3f9db910b789e1c\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a334ced880a64fec1d3f9db910b789e1c\">XSI::siNavigateComponentType</a></div><div class=\"ttdeci\">siNavigateComponentType</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1452</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a5e68ac68443f945d0dd92137e2895d0baa33e32f7f996bf361ee8031a38b4dcce\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a5e68ac68443f945d0dd92137e2895d0baa33e32f7f996bf361ee8031a38b4dcce\">XSI::siSINurbs</a></div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1094</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1SIObject_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">XSI::SIObject</a></div><div class=\"ttdoc\">SIObject derives from CBase and acts as the base class for the Softimage Object Model library...</div><div class=\"ttdef\"><b>Definition:</b> xsi_siobject.h:66</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CKnotArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CKnotArray.html\">XSI::CKnotArray</a></div><div class=\"ttdoc\">An array of knot values representing the NURBS curve or surface knots. </div><div class=\"ttdef\"><b>Definition:</b> xsi_knot.h:68</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1NurbsCurve_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1NurbsCurve.html\">XSI::NurbsCurve</a></div><div class=\"ttdoc\">The NurbsCurve object gives access to the geometry curves of an X3DObject&#39;s primitive. </div><div class=\"ttdef\"><b>Definition:</b> xsi_nurbscurve.h:66</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a5e68ac68443f945d0dd92137e2895d0b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a5e68ac68443f945d0dd92137e2895d0b\">XSI::siNurbsFormat</a></div><div class=\"ttdeci\">siNurbsFormat</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1091</div></div>\n\
<div class=\"ttc\" id=\"xsi__siobject_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__siobject_8h.html\">xsi_siobject.h</a></div><div class=\"ttdoc\">SIObject class declaration. </div></div>\n\
<div class=\"ttc\" id=\"xsi__nurbsdata_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__nurbsdata_8h.html\">xsi_nurbsdata.h</a></div><div class=\"ttdoc\">Contains the following Nurbs data structures and class declarations: </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CNurbsCurveRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CNurbsCurveRefArray.html\">XSI::CNurbsCurveRefArray</a></div><div class=\"ttdoc\">An array of NurbsCurve objects representing the curve in a curve list. </div><div class=\"ttdef\"><b>Definition:</b> xsi_nurbscurve.h:314</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">XSI::CRefArray</a></div><div class=\"ttdoc\">The CRefArray class holds generic CRef objects and acts as a base class for other specialized CRef ar...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:333</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"xsi__math_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__math_8h.html\">xsi_math.h</a></div><div class=\"ttdoc\">MATH namespace declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CString_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">XSI::CString</a></div><div class=\"ttdoc\">Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...</div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:76</div></div>\n\
<div class=\"ttc\" id=\"structXSI_1_1CNurbsCurveData_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/structXSI_1_1CNurbsCurveData.html\">XSI::CNurbsCurveData</a></div><div class=\"ttdoc\">This structure represents a data description for a NurbsCurve. </div><div class=\"ttdef\"><b>Definition:</b> xsi_nurbsdata.h:40</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1MATH_1_1CVector3_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">XSI::MATH::CVector3</a></div><div class=\"ttdoc\">A 3-element vector that is represented by double precision floating point x,y,z coordinates. </div><div class=\"ttdef\"><b>Definition:</b> xsi_vector3.h:100</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CControlPointRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CControlPointRefArray.html\">XSI::CControlPointRefArray</a></div><div class=\"ttdoc\">An array of ControlPoint object references representing the NurbsCurve or NurbsSurface control points...</div><div class=\"ttdef\"><b>Definition:</b> xsi_controlpoint.h:212</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CLongArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">XSI::CLongArray</a></div><div class=\"ttdoc\">The CLongArray is an uni-dimensional array of LONG values. </div><div class=\"ttdef\"><b>Definition:</b> xsi_longarray.h:45</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1SubComponent_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">XSI::SubComponent</a></div><div class=\"ttdoc\">Provides access to the subelements of an object&#39;s Geometry. </div><div class=\"ttdef\"><b>Definition:</b> xsi_subcomponent.h:30</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";