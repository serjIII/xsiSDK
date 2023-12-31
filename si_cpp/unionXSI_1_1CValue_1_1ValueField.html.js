var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CValue::ValueField Union Reference</title>\n\
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
      initNavTree(\'unionXSI_1_1CValue_1_1ValueField.html\', prefix);\n\
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
            <h1>CValue::ValueField Union Reference</h1>\n\
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
<a href=\"#pub-attribs\">Public Attributes</a>  </div>\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">CValue::ValueField Union Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__value_8h_source.html\">xsi_value.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>This union is used for storing the value described by the CValue::m_t data member. Instead of accessing the value stored in CValue::m_u directly, it is strongly recommended to use the extractor methods defined by <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\" title=\"The CValue object provides the convenience of a loosely typed variable inside a strictly typed langua...\">CValue</a>.</p>\n\
<dl class=\"section user\"><dt>Example:</dt><dd>Demonstrates the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\" title=\"The CValue object provides the convenience of a loosely typed variable inside a strictly typed langua...\">CValue</a> extractor methods <div class=\"fragment\"><div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html#abd6da0cefa7a21c274d0f8f2231ef1db\">CValue</a> val((<span class=\"keywordtype\">short</span>)255);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// good but not recommended</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">short</span> wrong = val.sval;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// right way to do it</span></div>\n\
<div class=\"line\"><span class=\"keywordtype\">short</span> good = (short)val;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\">CComAPIHandler uitoolkit;</div>\n\
<div class=\"line\">uitoolkit.CreateInstance( L<span class=\"stringliteral\">&quot;XSI.UIToolkit&quot;</span>);</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html#abd6da0cefa7a21c274d0f8f2231ef1db\">CValue</a> dispVal = uitoolkit.GetRef();</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// wrong way of accessing a COM object from a CValue, could return</span></div>\n\
<div class=\"line\"><span class=\"comment\">// an invalid pointer</span></div>\n\
<div class=\"line\">IDispatch* pDisp = dispVal.pval;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><span class=\"comment\">// this is the right way to do it</span></div>\n\
<div class=\"line\">IDispatch* pDisp = (IDispatch*)(CValue::siPtrType)dispVal;</div>\n\
</div><!-- fragment --> </dd></dl>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-attribs\"></a>\n\
Public Attributes</h2></td></tr>\n\
<tr class=\"memitem:ad13f9a030ae014e2099b4f717444c585\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ad13f9a030ae014e2099b4f717444c585\">sval</a></td></tr>\n\
<tr class=\"separator:ad13f9a030ae014e2099b4f717444c585\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a256811f99366f9c047077f1a39150d3c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">LONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a256811f99366f9c047077f1a39150d3c\">lval</a></td></tr>\n\
<tr class=\"separator:a256811f99366f9c047077f1a39150d3c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a89560ba498e3fe528d97a435d5f61054\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">float&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a89560ba498e3fe528d97a435d5f61054\">fval</a></td></tr>\n\
<tr class=\"separator:a89560ba498e3fe528d97a435d5f61054\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acefc0ddbab467d8de90049105846767c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">double&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#acefc0ddbab467d8de90049105846767c\">dval</a></td></tr>\n\
<tr class=\"separator:acefc0ddbab467d8de90049105846767c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adfe3e838cacf55495efe351e132f753b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#adfe3e838cacf55495efe351e132f753b\">bval</a></td></tr>\n\
<tr class=\"separator:adfe3e838cacf55495efe351e132f753b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad61def09fbd0a94725db3d9819ad632a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">wchar_t *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ad61def09fbd0a94725db3d9819ad632a\">pwval</a></td></tr>\n\
<tr class=\"separator:ad61def09fbd0a94725db3d9819ad632a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a403414386f90c7383d9aec51e5c56029\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">siPtrType&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a403414386f90c7383d9aec51e5c56029\">pval</a></td></tr>\n\
<tr class=\"separator:a403414386f90c7383d9aec51e5c56029\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a69f9c906955fddecbf137d846ad56451\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">signed char&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a69f9c906955fddecbf137d846ad56451\">cval</a></td></tr>\n\
<tr class=\"separator:a69f9c906955fddecbf137d846ad56451\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad3ea815c133e8b0d27657141d8b2a430\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned char&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ad3ea815c133e8b0d27657141d8b2a430\">ucval</a></td></tr>\n\
<tr class=\"separator:ad3ea815c133e8b0d27657141d8b2a430\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a941857ecf47a07d09f1e64c08070e21d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a941857ecf47a07d09f1e64c08070e21d\">paval</a></td></tr>\n\
<tr class=\"separator:a941857ecf47a07d09f1e64c08070e21d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a0042399b9c46361b9be692d04721027d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a0042399b9c46361b9be692d04721027d\">plaval</a></td></tr>\n\
<tr class=\"separator:a0042399b9c46361b9be692d04721027d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a760f987771b124e9758d8d56bb84752c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CFloatArray.html\">CFloatArray</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a760f987771b124e9758d8d56bb84752c\">pfaval</a></td></tr>\n\
<tr class=\"separator:a760f987771b124e9758d8d56bb84752c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a85bf72ca755b72a90137d0ab64393d34\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">unsigned short&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a85bf72ca755b72a90137d0ab64393d34\">usval</a></td></tr>\n\
<tr class=\"separator:a85bf72ca755b72a90137d0ab64393d34\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab87d6f3617ae1fcb9f87fbee6524771d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">ULONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ab87d6f3617ae1fcb9f87fbee6524771d\">ulval</a></td></tr>\n\
<tr class=\"separator:ab87d6f3617ae1fcb9f87fbee6524771d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a77cc086d976a6ae075a70f5a01f73328\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector2f.html\">MATH::CVector2f</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a77cc086d976a6ae075a70f5a01f73328\">pv2f</a></td></tr>\n\
<tr class=\"separator:a77cc086d976a6ae075a70f5a01f73328\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9a8a586e8106ee0935ccd1d420a86291\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3f.html\">MATH::CVector3f</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a9a8a586e8106ee0935ccd1d420a86291\">pv3f</a></td></tr>\n\
<tr class=\"separator:a9a8a586e8106ee0935ccd1d420a86291\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af7056e8eb665d87b54695af0b6da7ebe\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector4f.html\">MATH::CVector4f</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#af7056e8eb665d87b54695af0b6da7ebe\">pv4f</a></td></tr>\n\
<tr class=\"separator:af7056e8eb665d87b54695af0b6da7ebe\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aecaca07c73e178e3cf93cb736fe6c3fa\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CQuaternionf.html\">MATH::CQuaternionf</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#aecaca07c73e178e3cf93cb736fe6c3fa\">pqf</a></td></tr>\n\
<tr class=\"separator:aecaca07c73e178e3cf93cb736fe6c3fa\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a6efece79953e8274a8f83fe375727565\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CRotationf.html\">MATH::CRotationf</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a6efece79953e8274a8f83fe375727565\">prf</a></td></tr>\n\
<tr class=\"separator:a6efece79953e8274a8f83fe375727565\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2a0fe89ff6a08192dee398b7033e5aee\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3f.html\">MATH::CMatrix3f</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a2a0fe89ff6a08192dee398b7033e5aee\">pm3f</a></td></tr>\n\
<tr class=\"separator:a2a0fe89ff6a08192dee398b7033e5aee\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:adb81e573c7661831552f6f4315b8a74c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4f.html\">MATH::CMatrix4f</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#adb81e573c7661831552f6f4315b8a74c\">pm4f</a></td></tr>\n\
<tr class=\"separator:adb81e573c7661831552f6f4315b8a74c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab4d1ca3f6b7d47e6dbc8a81cafa2dab3\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CColor4f.html\">MATH::CColor4f</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ab4d1ca3f6b7d47e6dbc8a81cafa2dab3\">pc4f</a></td></tr>\n\
<tr class=\"separator:ab4d1ca3f6b7d47e6dbc8a81cafa2dab3\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a733d8ce04d8e59332a018da7c983ecc7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CShape.html\">MATH::CShape</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a733d8ce04d8e59332a018da7c983ecc7\">pshp</a></td></tr>\n\
<tr class=\"separator:a733d8ce04d8e59332a018da7c983ecc7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a4c4632d3ace6ea28ce14bf6b463dfd8e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">LLONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a4c4632d3ace6ea28ce14bf6b463dfd8e\">llval</a></td></tr>\n\
<tr class=\"separator:a4c4632d3ace6ea28ce14bf6b463dfd8e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afd05a91e90a2ae6b069926582317305d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">ULLONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#afd05a91e90a2ae6b069926582317305d\">ullval</a></td></tr>\n\
<tr class=\"separator:afd05a91e90a2ae6b069926582317305d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7e4861aa2d5501c74a4dc1e0572d1fe9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">siBlobType *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#a7e4861aa2d5501c74a4dc1e0572d1fe9\">pblobval</a></td></tr>\n\
<tr class=\"separator:a7e4861aa2d5501c74a4dc1e0572d1fe9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad1bcf2da0566f6e8ddd1393f50073894\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\">CStringArray</a> *&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/unionXSI_1_1CValue_1_1ValueField.html#ad1bcf2da0566f6e8ddd1393f50073894\">pstrarrayval</a></td></tr>\n\
<tr class=\"separator:ad1bcf2da0566f6e8ddd1393f50073894\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Data Documentation</h2>\n\
<a class=\"anchor\" id=\"ad13f9a030ae014e2099b4f717444c585\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">short sval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>2 bytes signed integer number value (-32768..32767) </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a256811f99366f9c047077f1a39150d3c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">LONG lval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>4 bytes signed integer number value (-2147483648..2147483647) </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a89560ba498e3fe528d97a435d5f61054\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">float fval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>float value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"acefc0ddbab467d8de90049105846767c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">double dval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>double value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"adfe3e838cacf55495efe351e132f753b\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool bval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>bool value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad61def09fbd0a94725db3d9819ad632a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">wchar_t* pwval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\" title=\"Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...\">CString</a> value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a403414386f90c7383d9aec51e5c56029\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">siPtrType pval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>pointer value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a69f9c906955fddecbf137d846ad56451\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">signed char cval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>byte value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad3ea815c133e8b0d27657141d8b2a430\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned char ucval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>unsigned byte value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a941857ecf47a07d09f1e64c08070e21d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a>* paval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Array value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a0042399b9c46361b9be692d04721027d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CLongArray.html\">CLongArray</a>* plaval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Long Array value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a760f987771b124e9758d8d56bb84752c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CFloatArray.html\">CFloatArray</a>* pfaval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Float Array value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a85bf72ca755b72a90137d0ab64393d34\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">unsigned short usval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>2 bytes unsigned integer number value (0..65535) </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab87d6f3617ae1fcb9f87fbee6524771d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">ULONG ulval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>4 bytes unsigned integer number value (0..4294967295) </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a77cc086d976a6ae075a70f5a01f73328\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector2f.html\">MATH::CVector2f</a>* pv2f</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>CVector2f pointer </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9a8a586e8106ee0935ccd1d420a86291\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3f.html\">MATH::CVector3f</a>* pv3f</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>CVector3f pointer </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af7056e8eb665d87b54695af0b6da7ebe\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector4f.html\">MATH::CVector4f</a>* pv4f</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>CVector4f pointer </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aecaca07c73e178e3cf93cb736fe6c3fa\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CQuaternionf.html\">MATH::CQuaternionf</a>* pqf</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>CQuaternionf pointer </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a6efece79953e8274a8f83fe375727565\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CRotationf.html\">MATH::CRotationf</a>* prf</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>CRotationf pointer </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2a0fe89ff6a08192dee398b7033e5aee\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3f.html\">MATH::CMatrix3f</a>* pm3f</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>CMatrix3f pointer </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"adb81e573c7661831552f6f4315b8a74c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4f.html\">MATH::CMatrix4f</a>* pm4f</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>CMatrix4f pointer </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab4d1ca3f6b7d47e6dbc8a81cafa2dab3\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CColor4f.html\">MATH::CColor4f</a>* pc4f</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>CColor4f pointer </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a733d8ce04d8e59332a018da7c983ecc7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CShape.html\">MATH::CShape</a>* pshp</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>CShape pointer </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a4c4632d3ace6ea28ce14bf6b463dfd8e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">LLONG llval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>8 bytes signed integer number type (-9223372036854775808..9223372036854775807) </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afd05a91e90a2ae6b069926582317305d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">ULLONG ullval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>8 bytes unsigned integer number type (0..18446744073709551615) </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7e4861aa2d5501c74a4dc1e0572d1fe9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">siBlobType* pblobval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>siBlobType value </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ad1bcf2da0566f6e8ddd1393f50073894\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\">CStringArray</a>* pstrarrayval</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStringArray.html\" title=\"The CStringArray is an uni-dimensional array of CString objects. \">CStringArray</a> value </p>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this union was generated from the following file:<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__value_8h_source.html\">xsi_value.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";