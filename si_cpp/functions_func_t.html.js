var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><meta name=\"robots\" content=\"noindex, follow\"><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Class Members - Functions</title>\n\
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
      initNavTree(\'functions_func_t.html\', prefix);\n\
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
            <h1>Class Members - Functions</h1>\n\
         </div>\n\
\n\
    <div id=\"top\"><!-- Generated by Doxygen 1.8.6 -->\n\
  <div id=\"navrow1\" class=\"tabs\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/index.html\"><span>Main&#160;Page</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/pages.html\"><span>Topics</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/modules.html\"><span>Modules</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/namespaces.html\"><span>Namespaces</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/annotated.html\"><span>Classes</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/files.html\"><span>Files</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow2\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/annotated.html\"><span>Class&#160;List</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/hierarchy.html\"><span>Class&#160;Hierarchy</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/functions.html\"><span>Class&#160;Members</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow3\" class=\"tabs2\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/functions.html\"><span>All</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/functions_func.html\"><span>Functions</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_eval.html\"><span>Enumerator</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#!/url=./si_cpp/functions_func.html#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_b.html#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_c.html#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_d.html#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_e.html#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_f.html#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_g.html#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_h.html#index_h\"><span>h</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_i.html#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_j.html#index_j\"><span>j</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_k.html#index_k\"><span>k</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_l.html#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_m.html#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_n.html#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_o.html#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_p.html#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_r.html#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_s.html#index_s\"><span>s</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/functions_func_t.html#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_u.html#index_u\"><span>u</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_v.html#index_v\"><span>v</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_w.html#index_w\"><span>w</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_x.html#index_x\"><span>x</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_func_~.html#index_~\"><span>~</span></a></li>\n\
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
<div class=\"contents\">\n\
&#160;\n\
\n\
<h3><a class=\"anchor\" id=\"index_t\"></a>- t -</h3><ul>\n\
<li>Texture()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Texture.html#a5c292543baec1a3caa8a4ee3f19dbeb7\">Texture</a>\n\
</li>\n\
<li>TextureLayer()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1TextureLayer.html#af6c5b81d4ebd55ac4fc934d61baf9b35\">TextureLayer</a>\n\
</li>\n\
<li>TextureLayerPort()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1TextureLayerPort.html#aaf851d82baefcae13da90065290c1881\">TextureLayerPort</a>\n\
</li>\n\
<li>TimeControl()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1TimeControl.html#abbb5dd20fdc39a7c0ea517afb6957e6e\">TimeControl</a>\n\
</li>\n\
<li>TimerEvent()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1TimerEvent.html#a34640a15dc5b54243b244b9e3bcb2a7b\">TimerEvent</a>\n\
</li>\n\
<li>TimeTransport()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1TimeTransport.html#a6df0c9945dc443173ab2a713b5222bf5\">TimeTransport</a>\n\
</li>\n\
<li>TimeTransportContext()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1TimeTransportContext.html#a18f7c876d8894d2e9f66e810b2ace2ac\">TimeTransportContext</a>\n\
</li>\n\
<li>ToolContext()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ToolContext.html#ae325a4daf4934cad4a6d8ddec681f481\">ToolContext</a>\n\
</li>\n\
<li>Track()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Track.html#a850b30daca1d30ccce56038caab703ff\">Track</a>\n\
</li>\n\
<li>Transition()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Transition.html#a5cff3a67b77de17d053a190f241aa753\">Transition</a>\n\
</li>\n\
<li>Translate()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CUtils.html#ac9fd40fbbfcd2dee8dd9759a4bc96bb6\">CUtils</a>\n\
</li>\n\
<li>Transpose()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3.html#a31eca736f1bfaeeb603b751abf15af0c\">CMatrix3</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3f.html#a45db8a2a955ff945c9e8bb936495e74f\">CMatrix3f</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4.html#af4590e2b216c5297740ff0ecedc146ec\">CMatrix4</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4f.html#a29d5a17ce5e9382cd467452c2f218761\">CMatrix4f</a>\n\
</li>\n\
<li>TransposeInPlace()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3.html#abf33a1c0005458a7c27ca7b308c9787c\">CMatrix3</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3f.html#abf33a1c0005458a7c27ca7b308c9787c\">CMatrix3f</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4.html#abf33a1c0005458a7c27ca7b308c9787c\">CMatrix4</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4f.html#abf33a1c0005458a7c27ca7b308c9787c\">CMatrix4f</a>\n\
</li>\n\
<li>TransposeInverse()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3.html#af2d42652b36cc572ee2ce5832eef2423\">CMatrix3</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3f.html#a3d3338dea9ea11f63a54812850852ca2\">CMatrix3f</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4.html#a4d8c9245808abaf6ca3cc3859394d2f7\">CMatrix4</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4f.html#a18d016d6303ebc14cbffee9e7feecafb\">CMatrix4f</a>\n\
</li>\n\
<li>TransposeInverseInPlace()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3.html#aa380c3e9572445c6f435f727505a6608\">CMatrix3</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3f.html#ad6f5eef9c6bf37cc8aa99faa6c6ab3e4\">CMatrix3f</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4.html#aa380c3e9572445c6f435f727505a6608\">CMatrix4</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4f.html#ad6f5eef9c6bf37cc8aa99faa6c6ab3e4\">CMatrix4f</a>\n\
</li>\n\
<li>Triangle()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Triangle.html#a56e2160d21ceb4ff81a0c7dee1335dc7\">Triangle</a>\n\
</li>\n\
<li>TriangleVertex()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1TriangleVertex.html#a03e854435b3a4f93b13de9f62948fb5f\">TriangleVertex</a>\n\
</li>\n\
<li>TriggerEvent()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1RendererContext.html#a0dae3b66379c4fac4e728ccfebb08dea\">RendererContext</a>\n\
</li>\n\
<li>TrimLeft()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html#abfcb4e2dfc2c01a410e6a44d30682d74\">CString</a>\n\
</li>\n\
<li>TrimRight()\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html#a2c98b3878155122fa02e5b5ae6c986d7\">CString</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";