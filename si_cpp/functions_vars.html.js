var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><meta name=\"robots\" content=\"noindex, follow\"><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Class Members - Variables</title>\n\
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
      initNavTree(\'functions_vars.html\', prefix);\n\
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
            <h1>Class Members - Variables</h1>\n\
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
      <li><a href=\"#!/url=./si_cpp/functions_func.html\"><span>Functions</span></a></li>\n\
      <li class=\"current\"><a href=\"#!/url=./si_cpp/functions_vars.html\"><span>Variables</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_type.html\"><span>Typedefs</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_enum.html\"><span>Enumerations</span></a></li>\n\
      <li><a href=\"#!/url=./si_cpp/functions_eval.html\"><span>Enumerator</span></a></li>\n\
    </ul>\n\
  </div>\n\
  <div id=\"navrow4\" class=\"tabs3\">\n\
    <ul class=\"tablist\">\n\
      <li><a href=\"#index_a\"><span>a</span></a></li>\n\
      <li><a href=\"#index_b\"><span>b</span></a></li>\n\
      <li><a href=\"#index_c\"><span>c</span></a></li>\n\
      <li><a href=\"#index_d\"><span>d</span></a></li>\n\
      <li><a href=\"#index_e\"><span>e</span></a></li>\n\
      <li><a href=\"#index_f\"><span>f</span></a></li>\n\
      <li><a href=\"#index_g\"><span>g</span></a></li>\n\
      <li><a href=\"#index_i\"><span>i</span></a></li>\n\
      <li><a href=\"#index_l\"><span>l</span></a></li>\n\
      <li><a href=\"#index_m\"><span>m</span></a></li>\n\
      <li><a href=\"#index_n\"><span>n</span></a></li>\n\
      <li><a href=\"#index_o\"><span>o</span></a></li>\n\
      <li><a href=\"#index_p\"><span>p</span></a></li>\n\
      <li><a href=\"#index_r\"><span>r</span></a></li>\n\
      <li><a href=\"#index_s\"><span>s</span></a></li>\n\
      <li><a href=\"#index_t\"><span>t</span></a></li>\n\
      <li><a href=\"#index_u\"><span>u</span></a></li>\n\
      <li class=\"current\"><a href=\"#index_v\"><span>v</span></a></li>\n\
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
<h3><a class=\"anchor\" id=\"index_a\"></a>- a -</h3><ul>\n\
<li>a\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html#a1031d0e0a97a340abfe0a6ab9e831045\">CColor</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CVertexColor.html#a24420a9beaac7cee08b5e255a4c29db1\">CVertexColor</a>\n\
</li>\n\
<li>attributes\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga846eefb80d8eb3fd3e0fd17e1fee1e63\">xsimrPointCloudData</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_b\"></a>- b -</h3><ul>\n\
<li>b\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html#a1510a66dacf9cf3586de5fc89ae2a073\">CColor</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CVertexColor.html#a41cede1b4c0d05cff170ad5761f70964\">CVertexColor</a>\n\
</li>\n\
<li>blob_type\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga63985b7dc97da11d53b5e60dd092d25c\">xsimrAttributeData</a>\n\
</li>\n\
<li>bval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#adfe3e838cacf55495efe351e132f753b\">CValue::ValueField</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_c\"></a>- c -</h3><ul>\n\
<li>color\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\">xsimrLightIllumData</a>\n\
</li>\n\
<li>constant\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga3be3199d36669028e9a1169e4cc7ee88\">xsimrAttributeData</a>\n\
</li>\n\
<li>cval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a69f9c906955fddecbf137d846ad56451\">CValue::ValueField</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_d\"></a>- d -</h3><ul>\n\
<li>data\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\">xsimrAttributeData</a>\n\
</li>\n\
<li>diffuse\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gac02a5759faf727e79c12be067fe7f928\">xsimrLightIllumData</a>\n\
</li>\n\
<li>dval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#acefc0ddbab467d8de90049105846767c\">CValue::ValueField</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_e\"></a>- e -</h3><ul>\n\
<li>extrapolation_type\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gacd68013c12fb5d633bac0b75241d6206\">xsimrProfileCurveData</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_f\"></a>- f -</h3><ul>\n\
<li>fval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a89560ba498e3fe528d97a435d5f61054\">CValue::ValueField</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_g\"></a>- g -</h3><ul>\n\
<li>g\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html#ab30c765b9be1b7776c97c899a12a66bb\">CColor</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CVertexColor.html#a83576af39a9f289a28c1263d61073508\">CVertexColor</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_i\"></a>- i -</h3><ul>\n\
<li>i_data\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gaa1bfa0c6e1ffcc0ccdbd3bf2aac4c01d\">xsimrPointCloudData</a>\n\
</li>\n\
<li>index\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\">xsimrTimeMapValue</a>\n\
</li>\n\
<li>instance_id\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga4e7b56397cabae23ea1cd3d1c61ccd48\">xsimrParticleShape</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_l\"></a>- l -</h3><ul>\n\
<li>llval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a4c4632d3ace6ea28ce14bf6b463dfd8e\">CValue::ValueField</a>\n\
</li>\n\
<li>lval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a256811f99366f9c047077f1a39150d3c\">CValue::ValueField</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_m\"></a>- m -</h3><ul>\n\
<li>m_aControlPoints\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsCurveData.html#a3231fdedd4ab1d27b8ba183023aab657\">CNurbsCurveData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a3231fdedd4ab1d27b8ba183023aab657\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_aCurvesData\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CTrimCurveData.html#a80e8f3f1021a13909fb2d6707d572272\">CTrimCurveData</a>\n\
</li>\n\
<li>m_aKnots\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsCurveData.html#a7f87558da81c54a859be776791dbb79d\">CNurbsCurveData</a>\n\
</li>\n\
<li>m_aUKnots\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a70ebc4431400a95e0010af235a27d46a\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_aVKnots\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a4539c16532aeb2fae422854444ffdebc\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_bClosed\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsCurveData.html#a383df7fd6094a264b043638ecb7d8d51\">CNurbsCurveData</a>\n\
</li>\n\
<li>m_bIsBoundary\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CTrimCurveData.html#a7b4509e19e1be9cb1daba97fdac90436\">CTrimCurveData</a>\n\
</li>\n\
<li>m_bUClosed\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#ab6367b379609625a8aa02aa69831e21c\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_bVClosed\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a9fb32daf786fb2f6b45664bf3c0888aa\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_edgeIndices\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CMeshBuilder_1_1CErrorDescriptor.html#a45eb27b525ad20cf0a8611e7389ad4a7\">CMeshBuilder::CErrorDescriptor</a>\n\
</li>\n\
<li>m_lDegree\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsCurveData.html#a70548e7436d5430ca619841e27f500ce\">CNurbsCurveData</a>\n\
</li>\n\
<li>m_lNbUControlPoints\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a33efb5a21096eb383b86123b2670f480\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_lNbVControlPoints\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a9095f1ee5eab89aef73d24e59dede747\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_lProjectionType\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CTrimCurveData.html#a5ba61111438aca9525c9de373a28e3bc\">CTrimCurveData</a>\n\
</li>\n\
<li>m_lUDegree\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a623f62f2a7049b73a0a84812826b810a\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_lVDegree\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#ab819af3ed4886fe4b9349d22b8c2632a\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_nodeIndices\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CMeshBuilder_1_1CErrorDescriptor.html#aef8614a3cf6ee02a3a552e46e5e1479a\">CMeshBuilder::CErrorDescriptor</a>\n\
</li>\n\
<li>m_polygonIndices\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CMeshBuilder_1_1CErrorDescriptor.html#abd16b83004e973694b8446c8dd4a4421\">CMeshBuilder::CErrorDescriptor</a>\n\
</li>\n\
<li>m_siParameterization\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsCurveData.html#af2dcf232abbf24899d356b13a0dd383a\">CNurbsCurveData</a>\n\
</li>\n\
<li>m_siUParameterization\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a61466b40b53aa16d99149f56f1b6776a\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_siVParameterization\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CNurbsSurfaceData.html#a531f04c8db2e82a6d2e5ca03cb55c492\">CNurbsSurfaceData</a>\n\
</li>\n\
<li>m_vertexIndices\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CMeshBuilder_1_1CErrorDescriptor.html#aa5e349950732a9535b2dd827324f1855\">CMeshBuilder::CErrorDescriptor</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_n\"></a>- n -</h3><ul>\n\
<li>n_data\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga99f35ff054c19acbffb9f98bdcac93b3\">xsimrPointCloudData</a>\n\
</li>\n\
<li>n_points\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga97f1eeade9005dde161246c3aa875e14\">xsimrProfileCurveData</a>\n\
</li>\n\
<li>n_time_map\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gaa52d546eafe23c95ce837f6a40a4d987\">xsimrAttributeImageTimeMap</a>\n\
</li>\n\
<li>name\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\">xsimrAttributeData</a>\n\
</li>\n\
<li>nb_particles\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga1bde0c27cc1addfa923ed2b6fd215a77\">xsimrPointCloudData</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_o\"></a>- o -</h3><ul>\n\
<li>offset\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga7d958482ce00994394098552086a532b\">xsimrParticleBlob</a>\n\
</li>\n\
<li>offsets\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga83bdd9bbdce821b671e8097c6992f327\">xsimrAttributeData</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_p\"></a>- p -</h3><ul>\n\
<li>paval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a941857ecf47a07d09f1e64c08070e21d\">CValue::ValueField</a>\n\
</li>\n\
<li>pblobval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a7e4861aa2d5501c74a4dc1e0572d1fe9\">CValue::ValueField</a>\n\
</li>\n\
<li>pc4f\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ab4d1ca3f6b7d47e6dbc8a81cafa2dab3\">CValue::ValueField</a>\n\
</li>\n\
<li>pfaval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a760f987771b124e9758d8d56bb84752c\">CValue::ValueField</a>\n\
</li>\n\
<li>plaval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a0042399b9c46361b9be692d04721027d\">CValue::ValueField</a>\n\
</li>\n\
<li>pm3f\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a2a0fe89ff6a08192dee398b7033e5aee\">CValue::ValueField</a>\n\
</li>\n\
<li>pm4f\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#adb81e573c7661831552f6f4315b8a74c\">CValue::ValueField</a>\n\
</li>\n\
<li>points\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga7b51c5e95877ebaeb51314f8731f55f6\">xsimrProfileCurveData</a>\n\
</li>\n\
<li>positions\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga4ff6c20401928cc896711bb86fab2870\">xsimrPointCloudData</a>\n\
</li>\n\
<li>pqf\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#aecaca07c73e178e3cf93cb736fe6c3fa\">CValue::ValueField</a>\n\
</li>\n\
<li>prf\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a6efece79953e8274a8f83fe375727565\">CValue::ValueField</a>\n\
</li>\n\
<li>pshp\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a733d8ce04d8e59332a018da7c983ecc7\">CValue::ValueField</a>\n\
</li>\n\
<li>pstrarrayval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ad1bcf2da0566f6e8ddd1393f50073894\">CValue::ValueField</a>\n\
</li>\n\
<li>pv2f\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a77cc086d976a6ae075a70f5a01f73328\">CValue::ValueField</a>\n\
</li>\n\
<li>pv3f\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a9a8a586e8106ee0935ccd1d420a86291\">CValue::ValueField</a>\n\
</li>\n\
<li>pv4f\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#af7056e8eb665d87b54695af0b6da7ebe\">CValue::ValueField</a>\n\
</li>\n\
<li>pval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a403414386f90c7383d9aec51e5c56029\">CValue::ValueField</a>\n\
</li>\n\
<li>pwval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ad61def09fbd0a94725db3d9819ad632a\">CValue::ValueField</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_r\"></a>- r -</h3><ul>\n\
<li>r\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CColor.html#a880a49112fedae68e714341a9a082fb6\">CColor</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CVertexColor.html#afd7b1ea9ff115205b65e0bffc92946ac\">CVertexColor</a>\n\
</li>\n\
<li>range_max\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga7d254d3f5383d411eb841d3c62a9b6d6\">xsimrTimeMapValue</a>\n\
</li>\n\
<li>range_min\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga297d42e3d6807cc7111a1abe26dfec45\">xsimrTimeMapValue</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_s\"></a>- s -</h3><ul>\n\
<li>set\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\">xsimrLightIllumData</a>\n\
</li>\n\
<li>shadow\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga2779bc97d58f2cac3fde332db7516177\">xsimrLightIllumData</a>\n\
</li>\n\
<li>size\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gaa9831b27d43e13316c674746b6efccb1\">xsimrAttributeData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gaa9831b27d43e13316c674746b6efccb1\">xsimrParticleBlob</a>\n\
</li>\n\
<li>specular\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga3943ae8b3f125eecca1b864e7a1e7316\">xsimrLightIllumData</a>\n\
</li>\n\
<li>struct_size\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gad6f38c2394f16f3f764d6b32b5026f11\">xsimrLightIllumData</a>\n\
</li>\n\
<li>sval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ad13f9a030ae014e2099b4f717444c585\">CValue::ValueField</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_t\"></a>- t -</h3><ul>\n\
<li>time_map\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gabe28e340b29c3928d38d47653d3055af\">xsimrAttributeImageTimeMap</a>\n\
</li>\n\
<li>type\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga0b8c27e567a6169556867dfeb90ce9ff\">xsimrAttributeData</a>\n\
, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\">xsimrParticleShape</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_u\"></a>- u -</h3><ul>\n\
<li>u\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CUV.html#aed08c8478a62910aab06ba708a0e5b5f\">CUV</a>\n\
</li>\n\
<li>ucval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ad3ea815c133e8b0d27657141d8b2a430\">CValue::ValueField</a>\n\
</li>\n\
<li>ullval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#afd05a91e90a2ae6b069926582317305d\">CValue::ValueField</a>\n\
</li>\n\
<li>ulval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ab87d6f3617ae1fcb9f87fbee6524771d\">CValue::ValueField</a>\n\
</li>\n\
<li>usval\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a85bf72ca755b72a90137d0ab64393d34\">CValue::ValueField</a>\n\
</li>\n\
</ul>\n\
\n\
\n\
<h3><a class=\"anchor\" id=\"index_v\"></a>- v -</h3><ul>\n\
<li>v\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/structXSI_1_1CUV.html#a3b90d5a73541ab9402511d87bed076ef\">CUV</a>\n\
</li>\n\
<li>version\n\
: <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\">xsimrPointCloudData</a>\n\
</li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";