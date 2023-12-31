var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>OGLMaterial Class Reference</title>\n\
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
      initNavTree(\'classXSI_1_1OGLMaterial.html\', prefix);\n\
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
            <h1>OGLMaterial Class Reference</h1>\n\
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
      <li><a href=\"#!/url=./si_cpp/functions.html\"><span>Class&#160;Members</span></a></li>\n\
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
  <div class=\"summary\">\n\
<a href=\"#pub-methods\">Public Member Functions</a>  </div>\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">OGLMaterial Class Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__oglmaterial_8h_source.html\">xsi_oglmaterial.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>This object represents the OpenGL properties of a material object. </p>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\" title=\"This object represents the OpenGL properties of a material object. \">OGLMaterial</a> objects are read-only. <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\" title=\"This object represents the OpenGL properties of a material object. \">OGLMaterial</a> can be created with Material.OGLMaterial.</p>\n\
<dl class=\"section see\"><dt>See Also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\" title=\"The Material object represents a material property of a SceneItem object. \">Material</a></dd></dl>\n\
<dl class=\"section user\"><dt>Example:</dt><dd><div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">using namespace </span>XSI;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Application.html\">Application</a> app;</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Model.html\">Model</a> root = app.<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Application.html#a90b73ddc91605180a7d1ea4fa22014bf\">GetActiveSceneRoot</a>();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a> myGrid;</div>\n\
<div class=\"line\">root.<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html#a0aa53709fda0b1b3de1cbdbfcd65445e\">AddGeometry</a>( L<span class=\"stringliteral\">&quot;Grid&quot;</span>, L<span class=\"stringliteral\">&quot;MeshSurface&quot;</span>, L<span class=\"stringliteral\">&quot;&quot;</span>, myGrid );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1Material.html\">Material</a> myMaterial(myGrid.<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SceneItem.html#a56117ad23c37c36414097616356c0589\">GetMaterial</a>());</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> myOGLMaterial(myMaterial.GetOGLMaterial());</div>\n\
</div><!-- fragment --> </dd></dl>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"closed.png\" alt=\"+\"> Inheritance diagram for OGLMaterial:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"classXSI_1_1OGLMaterial.png\" usemap=\"#OGLMaterial_map\" alt=\"\">\n\
  <map id=\"OGLMaterial_map\" name=\"OGLMaterial_map\">\n\
<area href=\"classXSI_1_1CBase.html\" title=\"CBase is the base class of all API classes and provides access to Softimage objects through generic C...\" alt=\"CBase\" shape=\"rect\" coords=\"0,0,84,24\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:ad1f35b330f83dad58e62c379bd2c8bba\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#ad1f35b330f83dad58e62c379bd2c8bba\">OGLMaterial</a> ()</td></tr>\n\
<tr class=\"separator:ad1f35b330f83dad58e62c379bd2c8bba\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a68ed5facfe334c23258207227759e207\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#a68ed5facfe334c23258207227759e207\">~OGLMaterial</a> ()</td></tr>\n\
<tr class=\"separator:a68ed5facfe334c23258207227759e207\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a21f2a2089360380ccce3fe1a4e78cc20\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#a21f2a2089360380ccce3fe1a4e78cc20\">OGLMaterial</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> &amp;in_ref)</td></tr>\n\
<tr class=\"separator:a21f2a2089360380ccce3fe1a4e78cc20\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aab3ce9807f5f8bc9217d68918276e858\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#aab3ce9807f5f8bc9217d68918276e858\">OGLMaterial</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> &amp;in_obj)</td></tr>\n\
<tr class=\"separator:aab3ce9807f5f8bc9217d68918276e858\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6dd5a8a11eee55f434f151d1cd5d29d8\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#a6dd5a8a11eee55f434f151d1cd5d29d8\">IsA</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) const </td></tr>\n\
<tr class=\"separator:a6dd5a8a11eee55f434f151d1cd5d29d8\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acc34f4a01f2089e40f7abc7e9d98bf15\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#acc34f4a01f2089e40f7abc7e9d98bf15\">GetClassID</a> () const </td></tr>\n\
<tr class=\"separator:acc34f4a01f2089e40f7abc7e9d98bf15\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aa45f84417118dd73b19d6c53e963e7ec\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#aa45f84417118dd73b19d6c53e963e7ec\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> &amp;in_obj)</td></tr>\n\
<tr class=\"separator:aa45f84417118dd73b19d6c53e963e7ec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af9a28e8c2db21b3a45577f6e19cb0d15\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#af9a28e8c2db21b3a45577f6e19cb0d15\">operator=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> &amp;in_ref)</td></tr>\n\
<tr class=\"separator:af9a28e8c2db21b3a45577f6e19cb0d15\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a49c3569bd6f508d361d9a2dde5865e64\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#a49c3569bd6f508d361d9a2dde5865e64\">GetDiffuse</a> () const </td></tr>\n\
<tr class=\"separator:a49c3569bd6f508d361d9a2dde5865e64\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acfd9ea8c6c98fe9902ba6d816cb289fb\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#acfd9ea8c6c98fe9902ba6d816cb289fb\">GetSpecular</a> () const </td></tr>\n\
<tr class=\"separator:acfd9ea8c6c98fe9902ba6d816cb289fb\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a216082f2da67ed54092e33a441a86fb4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#a216082f2da67ed54092e33a441a86fb4\">GetAmbient</a> () const </td></tr>\n\
<tr class=\"separator:a216082f2da67ed54092e33a441a86fb4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aca7c15ca14a7dd09d6a66c887ba8a210\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">double&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#aca7c15ca14a7dd09d6a66c887ba8a210\">GetDecay</a> () const </td></tr>\n\
<tr class=\"separator:aca7c15ca14a7dd09d6a66c887ba8a210\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4fd1379e54e4e426c407c85deaea75e1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#ab76e9481e853081b97b1c24f4d1926c9\">siShadingModel</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html#a4fd1379e54e4e426c407c85deaea75e1\">GetShadingModel</a> () const </td></tr>\n\
<tr class=\"separator:a4fd1379e54e4e426c407c85deaea75e1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"inherit_header pub_methods_classXSI_1_1CBase\"><td colspan=\"2\" onclick=\"javascript:toggleInherit(\'pub_methods_classXSI_1_1CBase\')\"><img src=\"closed.png\" alt=\"-\">&#160;Public Member Functions inherited from <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a></td></tr>\n\
<tr class=\"memitem:a3878f3ab13413eb6d4811dca38b4fa73 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#a3878f3ab13413eb6d4811dca38b4fa73\">CBase</a> ()</td></tr>\n\
<tr class=\"separator:a3878f3ab13413eb6d4811dca38b4fa73 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a012a4573399b53f0720fcf4ff787c048 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">virtual&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#a012a4573399b53f0720fcf4ff787c048\">~CBase</a> ()</td></tr>\n\
<tr class=\"separator:a012a4573399b53f0720fcf4ff787c048 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac347619969a79eb8afc0adf6ea9394ba inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#ac347619969a79eb8afc0adf6ea9394ba\">GetClassIDName</a> () const </td></tr>\n\
<tr class=\"separator:ac347619969a79eb8afc0adf6ea9394ba inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac8759bb33eaf8bf83949277169a048e6 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#ac8759bb33eaf8bf83949277169a048e6\">IsA</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> &amp;in_ref) const </td></tr>\n\
<tr class=\"separator:ac8759bb33eaf8bf83949277169a048e6 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a458e6e03ea0b71cb2205a5fd9e1999c8 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#a458e6e03ea0b71cb2205a5fd9e1999c8\">SetObject</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> &amp;in_obj)</td></tr>\n\
<tr class=\"separator:a458e6e03ea0b71cb2205a5fd9e1999c8 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afa8720abaf6972d6dac22a8cd1a67225 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#afa8720abaf6972d6dac22a8cd1a67225\">IsValid</a> () const </td></tr>\n\
<tr class=\"separator:afa8720abaf6972d6dac22a8cd1a67225 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac5a79b5ac1759bc4e66e8f662b8bad49 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#ac5a79b5ac1759bc4e66e8f662b8bad49\">ResetObject</a> ()</td></tr>\n\
<tr class=\"separator:ac5a79b5ac1759bc4e66e8f662b8bad49 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a20250592358718fccc1dad9e949d3d28 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#a20250592358718fccc1dad9e949d3d28\">operator CRef &amp;</a> ()</td></tr>\n\
<tr class=\"separator:a20250592358718fccc1dad9e949d3d28 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac91cdd4cb81fac44686c538126a4b98a inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#ac91cdd4cb81fac44686c538126a4b98a\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a> &amp;in_obj) const </td></tr>\n\
<tr class=\"separator:ac91cdd4cb81fac44686c538126a4b98a inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a99049c404ae9b0ae189f80771dee0596 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#a99049c404ae9b0ae189f80771dee0596\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a> &amp;in_obj) const </td></tr>\n\
<tr class=\"separator:a99049c404ae9b0ae189f80771dee0596 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aac2a77c9ccdd6d0f9953ef784e2be5e9 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#aac2a77c9ccdd6d0f9953ef784e2be5e9\">GetRef</a> () const </td></tr>\n\
<tr class=\"separator:aac2a77c9ccdd6d0f9953ef784e2be5e9 inherit pub_methods_classXSI_1_1CBase\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"ad1f35b330f83dad58e62c379bd2c8bba\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Default constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a68ed5facfe334c23258207227759e207\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">~<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Default destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a21f2a2089360380ccce3fe1a4e78cc20\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_ref</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_ref</td><td>constant reference object. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aab3ce9807f5f8bc9217d68918276e858\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_obj</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Copy constructor. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_obj</td><td>constant class object. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a6dd5a8a11eee55f434f151d1cd5d29d8\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool IsA </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a>&#160;</td>\n\
          <td class=\"paramname\"><em>in_ClassID</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns true if a given class type is compatible with this API class. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_ClassID</td><td>class type. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if the class is compatible, false otherwise. </dd></dl>\n\
\n\
<p>Reimplemented from <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#a5a1833349ed14be553ae68b84ff60b8d\">CBase</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acc34f4a01f2089e40f7abc7e9d98bf15\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
<table class=\"mlabels\">\n\
  <tr>\n\
  <td class=\"mlabels-left\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
  </td>\n\
  <td class=\"mlabels-right\">\n\
<span class=\"mlabels\"><span class=\"mlabel\">virtual</span></span>  </td>\n\
  </tr>\n\
</table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the type of the API class. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The class type. </dd></dl>\n\
\n\
<p>Implements <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#a4b1359dd080cedb25e5f53df23d264b5\">CBase</a>.</p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aa45f84417118dd73b19d6c53e963e7ec\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a>&amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_obj</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Creates an object from another object. The newly created object is set to empty if the input object is not compatible. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_obj</td><td>constant class object. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The new <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\" title=\"This object represents the OpenGL properties of a material object. \">OGLMaterial</a> object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af9a28e8c2db21b3a45577f6e19cb0d15\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\">OGLMaterial</a>&amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_ref</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Creates an object from a reference object. The newly created object is set to empty if the input reference object is not compatible. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_ref</td><td>constant class object. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The new <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1OGLMaterial.html\" title=\"This object represents the OpenGL properties of a material object. \">OGLMaterial</a> object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a49c3569bd6f508d361d9a2dde5865e64\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a> GetDiffuse </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the diffuse color of this material. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The diffuse color. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acfd9ea8c6c98fe9902ba6d816cb289fb\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a> GetSpecular </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the specular color of this material. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The specular color. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a216082f2da67ed54092e33a441a86fb4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a> GetAmbient </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the ambient color of this material. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The ambient color. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aca7c15ca14a7dd09d6a66c887ba8a210\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">double GetDecay </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>The decay value of this material. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The decay value. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4fd1379e54e4e426c407c85deaea75e1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html#ab76e9481e853081b97b1c24f4d1926c9\">siShadingModel</a> GetShadingModel </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the shading model of this material. It is usually not possible to exactly represent the mental ray shaders attached to a material in OpenGL; however, Softimage tries to guess the best OpenGL shading model to approximate these shaders.</p>\n\
<p>Softimage chooses a shading model based on specific markings on shader parameters provided by the shader developer (using the ui <code>\"mapping\"</code> <code>=</code> <code>\"guid\"</code> syntax in the SPDL). These markings tell Softimage if a parameter can be interpreted as a diffuse color, a specular color, etc. and based on the presence or absence of these markings, Softimage guesses a shading model. For example, if there is a diffuse, specular, and ambient-like parameter, Softimage chooses the Phong shading model (which in OpenGL, is actually Gouraud). If only diffuse and ambient-like parameters are present, Lambert would be used instead (since the Lambert shading model does not have a specular color). If only ambient is present, Constant is used. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>The shading model. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__oglmaterial_8h_source.html\">xsi_oglmaterial.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";