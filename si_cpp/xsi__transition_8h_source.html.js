var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_transition.h Source File</title>\n\
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
      initNavTree(\'xsi__transition_8h_source.html\', prefix);\n\
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
            <h1>xsi_transition.h Source File</h1>\n\
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
<div class=\"title\">xsi_transition.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__transition_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\">#ifndef __XSITRANSITION_H__</span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSITRANSITION_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__projectitem_8h.html\">xsi_projectitem.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;<span class=\"keyword\">class </span>Clip;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00111\"></a><span class=\"lineno\">  111</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00112\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">  112</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html\">ProjectItem</a></div>\n\
<div class=\"line\"><a name=\"l00113\"></a><span class=\"lineno\">  113</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00114\"></a><span class=\"lineno\">  114</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00116\"></a><span class=\"lineno\">  116</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a>();</div>\n\
<div class=\"line\"><a name=\"l00117\"></a><span class=\"lineno\">  117</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00119\"></a><span class=\"lineno\">  119</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a>();</div>\n\
<div class=\"line\"><a name=\"l00120\"></a><span class=\"lineno\">  120</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00124\"></a><span class=\"lineno\">  124</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00125\"></a><span class=\"lineno\">  125</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00129\"></a><span class=\"lineno\">  129</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00130\"></a><span class=\"lineno\">  130</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00135\"></a><span class=\"lineno\">  135</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00140\"></a><span class=\"lineno\">  140</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00141\"></a><span class=\"lineno\">  141</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00147\"></a><span class=\"lineno\">  147</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00148\"></a><span class=\"lineno\">  148</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00154\"></a><span class=\"lineno\">  154</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00155\"></a><span class=\"lineno\">  155</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00159\"></a><span class=\"lineno\">  159</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Clip.html\">Clip</a> GetStartClip() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00160\"></a><span class=\"lineno\">  160</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00164\"></a><span class=\"lineno\">  164</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Clip.html\">Clip</a> GetEndClip() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00165\"></a><span class=\"lineno\">  165</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00171\"></a><span class=\"lineno\">  171</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> GetItems() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00172\"></a><span class=\"lineno\">  172</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00173\"></a><span class=\"lineno\">  173</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00174\"></a><span class=\"lineno\">  174</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00175\"></a><span class=\"lineno\">  175</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">Transition</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00176\"></a><span class=\"lineno\">  176</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00177\"></a><span class=\"lineno\">  177</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00178\"></a><span class=\"lineno\">  178</span>&#160;}</div>\n\
<div class=\"line\"><a name=\"l00179\"></a><span class=\"lineno\">  179</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00180\"></a><span class=\"lineno\">  180</span>&#160;<span class=\"preprocessor\">#endif // __XSITRANSITION_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ProjectItem_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html\">XSI::ProjectItem</a></div><div class=\"ttdoc\">The ProjectItem class represents the base content class in Softimage from which all other content obj...</div><div class=\"ttdef\"><b>Definition:</b> xsi_projectitem.h:45</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRefArray_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">XSI::CRefArray</a></div><div class=\"ttdoc\">The CRefArray class holds generic CRef objects and acts as a base class for other specialized CRef ar...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:333</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Clip_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Clip.html\">XSI::Clip</a></div><div class=\"ttdoc\">Clips are instances of animation and shape actions (ActionSource), audio and image sources (Source) a...</div><div class=\"ttdef\"><b>Definition:</b> xsi_clip.h:116</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1Transition_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1Transition.html\">XSI::Transition</a></div><div class=\"ttdoc\">This object represents a transition between two clips. A transition is an interpolation used to smoot...</div><div class=\"ttdef\"><b>Definition:</b> xsi_transition.h:112</div></div>\n\
<div class=\"ttc\" id=\"xsi__projectitem_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__projectitem_8h.html\">xsi_projectitem.h</a></div><div class=\"ttdoc\">ProjectItem class declaration. </div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";