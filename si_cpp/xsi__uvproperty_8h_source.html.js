var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_uvproperty.h Source File</title>\n\
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
      initNavTree(\'xsi__uvproperty_8h_source.html\', prefix);\n\
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
            <h1>xsi_uvproperty.h Source File</h1>\n\
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
<div class=\"title\">xsi_uvproperty.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__uvproperty_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\">#ifndef __XSIUVPROPERTY_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIUVPROPERTY_H__</span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__clusterproperty_8h.html\">xsi_clusterproperty.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">class </span>CBitArray;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;<span class=\"keyword\">class </span>CLongArray;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00027\"></a><span class=\"lineno\">   27</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00115\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">  115</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a></div>\n\
<div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;    <span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00118\"></a><span class=\"lineno\">  118</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00120\"></a><span class=\"lineno\">  120</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a>();</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00123\"></a><span class=\"lineno\">  123</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a>();</div>\n\
<div class=\"line\"><a name=\"l00124\"></a><span class=\"lineno\">  124</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00128\"></a><span class=\"lineno\">  128</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00133\"></a><span class=\"lineno\">  133</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00134\"></a><span class=\"lineno\">  134</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00139\"></a><span class=\"lineno\">  139</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00140\"></a><span class=\"lineno\">  140</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00144\"></a><span class=\"lineno\">  144</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00145\"></a><span class=\"lineno\">  145</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00151\"></a><span class=\"lineno\">  151</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00152\"></a><span class=\"lineno\">  152</span>&#160;    </div>\n\
<div class=\"line\"><a name=\"l00158\"></a><span class=\"lineno\">  158</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00163\"></a><span class=\"lineno\">  163</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PinAllComponents(  );</div>\n\
<div class=\"line\"><a name=\"l00164\"></a><span class=\"lineno\">  164</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00171\"></a><span class=\"lineno\">  171</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PinComponents( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; in_componentArray ) ;</div>\n\
<div class=\"line\"><a name=\"l00172\"></a><span class=\"lineno\">  172</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00176\"></a><span class=\"lineno\">  176</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> UnPinAllComponents(  ) ;</div>\n\
<div class=\"line\"><a name=\"l00177\"></a><span class=\"lineno\">  177</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00184\"></a><span class=\"lineno\">  184</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> UnPinComponents( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; in_componentArray ) ;</div>\n\
<div class=\"line\"><a name=\"l00185\"></a><span class=\"lineno\">  185</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00190\"></a><span class=\"lineno\">  190</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetPinComponentArray( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>&amp; out_componentArray ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00191\"></a><span class=\"lineno\">  191</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00198\"></a><span class=\"lineno\">  198</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetPinComponentArray( <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CBitArray.html\">CBitArray</a>&amp; out_baComponents ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00199\"></a><span class=\"lineno\">  199</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00200\"></a><span class=\"lineno\">  200</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00201\"></a><span class=\"lineno\">  201</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00202\"></a><span class=\"lineno\">  202</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">UVProperty</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00203\"></a><span class=\"lineno\">  203</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00204\"></a><span class=\"lineno\">  204</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00205\"></a><span class=\"lineno\">  205</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00206\"></a><span class=\"lineno\">  206</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00207\"></a><span class=\"lineno\">  207</span>&#160;<span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00208\"></a><span class=\"lineno\">  208</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CBitArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CBitArray.html\">XSI::CBitArray</a></div><div class=\"ttdoc\">This class encapsulates an array of binary values represented as booleans, where true indicates a bit...</div><div class=\"ttdef\"><b>Definition:</b> xsi_bitarray.h:57</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ClusterProperty_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">XSI::ClusterProperty</a></div><div class=\"ttdoc\">Represents a property of a cluster. </div><div class=\"ttdef\"><b>Definition:</b> xsi_clusterproperty.h:235</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"xsi__clusterproperty_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__clusterproperty_8h.html\">xsi_clusterproperty.h</a></div><div class=\"ttdoc\">ClusterProperty and CClusterPropertyElementArray class declarations. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CLongArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">XSI::CLongArray</a></div><div class=\"ttdoc\">The CLongArray is an uni-dimensional array of LONG values. </div><div class=\"ttdef\"><b>Definition:</b> xsi_longarray.h:45</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1UVProperty_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1UVProperty.html\">XSI::UVProperty</a></div><div class=\"ttdoc\">UVProperty is a kind of ClusterProperty object used for storing and accessing the UV information of a...</div><div class=\"ttdef\"><b>Definition:</b> xsi_uvproperty.h:115</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";