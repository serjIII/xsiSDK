var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_math.h File Reference</title>\n\
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
      initNavTree(\'xsi__math_8h.html\', prefix);\n\
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
            <h1>xsi_math.h File Reference</h1>\n\
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
  <div class=\"summary\">\n\
<a href=\"#namespaces\">Namespaces</a> &#124;\n\
<a href=\"#func-members\">Functions</a>  </div>\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">xsi_math.h File Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\"><div class=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"closed.png\" alt=\"+\"> This reference page is linked to from the following overview topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><a href=\"#!/url=./files/cus_icenodes_RegistrationExample.htm\">Registration Example</a>, <a href=\"#!/url=./files/cus_icenodes_CustomVector3ToScalarExample.htm\">CustomVector3ToScalar Example</a>, <a href=\"#!/url=./files/cus_icenodes_ElementGeneratorNodes.htm\">Element Generator Custom ICENodes</a>, <a href=\"#!/url=./files/cus_icenodes_GenerateCode.htm\">Code</a>.</div></div><hr>\n\
<div class=\"textblock\"><code>#include &quot;sicppsdk.h&quot;</code><br>\n\
<code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__vector3_8h_source.html\">xsi_vector3.h</a>&quot;</code><br>\n\
<code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__vector4_8h_source.html\">xsi_vector4.h</a>&quot;</code><br>\n\
<code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__matrix3_8h_source.html\">xsi_matrix3.h</a>&quot;</code><br>\n\
<code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__matrix4_8h_source.html\">xsi_matrix4.h</a>&quot;</code><br>\n\
<code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__transformation_8h_source.html\">xsi_transformation.h</a>&quot;</code><br>\n\
<code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__quaternion_8h_source.html\">xsi_quaternion.h</a>&quot;</code><br>\n\
<code>#include &quot;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__rotation_8h_source.html\">xsi_rotation.h</a>&quot;</code><br>\n\
</div><a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">File Description</h2>\n\
<div class=\"textblock\"><p>MATH namespace declaration. </p>\n\
<p>Copyright 2008 Autodesk, Inc. All rights reserved. Use of this software is subject to the terms of the Autodesk license agreement provided at the time of installation or download, or which otherwise accompanies this software in either electronic or hard copy form. </p>\n\
</div><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"namespaces\"></a>\n\
Namespaces</h2></td></tr>\n\
<tr class=\"memitem:namespaceXSI\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html\">XSI</a></td></tr>\n\
<tr class=\"memdesc:namespaceXSI\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">The <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html\" title=\"The XSI namespace defines a region where all API classes are declared. Namespaces are used to prevent...\">XSI</a> namespace defines a region where all API classes are declared. Namespaces are used to prevent global namespace pollution and name clashing. <br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:namespaceXSI_1_1MATH\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html\">XSI::MATH</a></td></tr>\n\
<tr class=\"memdesc:namespaceXSI_1_1MATH\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">All Math classes and functions defined in the C++ API are assigned to the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html\" title=\"All Math classes and functions defined in the C++ API are assigned to the MATH namespace which is nes...\">MATH</a> namespace which is nested under the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI.html\" title=\"The XSI namespace defines a region where all API classes are declared. Namespaces are used to prevent...\">XSI</a> namespace. <br></td></tr>\n\
<tr class=\"separator:\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"func-members\"></a>\n\
Functions</h2></td></tr>\n\
<tr class=\"memitem:aa4a41e7e30787da29837ed2b3cd3ecec\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">double&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#aa4a41e7e30787da29837ed2b3cd3ecec\">DegreesToRadians</a> (double in_dDegrees)</td></tr>\n\
<tr class=\"separator:aa4a41e7e30787da29837ed2b3cd3ecec\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af44abc571f91c8eb57309b311cc10882\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">double&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#af44abc571f91c8eb57309b311cc10882\">RadiansToDegrees</a> (double in_dRadians)</td></tr>\n\
<tr class=\"separator:af44abc571f91c8eb57309b311cc10882\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a659263679d6c6545aa2d2489334fc06d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">CTransformation&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#a659263679d6c6545aa2d2489334fc06d\">MapObjectPoseToWorldSpace</a> (const CTransformation &amp;in_transfoObjectSpace, const CTransformation &amp;in_transfoPose)</td></tr>\n\
<tr class=\"separator:a659263679d6c6545aa2d2489334fc06d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a331621bd4fad18dbf22722fa266ab121\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">CVector3&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#a331621bd4fad18dbf22722fa266ab121\">MapObjectOrientationToWorldSpace</a> (const CTransformation &amp;in_transfoObjectSpace, const CVector3 &amp;in_vector3Orientation)</td></tr>\n\
<tr class=\"separator:a331621bd4fad18dbf22722fa266ab121\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aba1bcc6b4bf965d4e57cf7310a85f05b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">CVector3&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#aba1bcc6b4bf965d4e57cf7310a85f05b\">MapObjectPositionToWorldSpace</a> (const CTransformation &amp;in_transfoObjectSpace, const CVector3 &amp;in_vector3Position)</td></tr>\n\
<tr class=\"separator:aba1bcc6b4bf965d4e57cf7310a85f05b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afdb4c06a40f15e2eb6cf5eea00ac3be2\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">CTransformation&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#afdb4c06a40f15e2eb6cf5eea00ac3be2\">MapWorldPoseToObjectSpace</a> (const CTransformation &amp;in_transfoObjectSpace, const CTransformation &amp;in_transfoPose)</td></tr>\n\
<tr class=\"separator:afdb4c06a40f15e2eb6cf5eea00ac3be2\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ac37ca3e6b54b7e8689794c1c84c0b13b\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">CVector3&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#ac37ca3e6b54b7e8689794c1c84c0b13b\">MapWorldOrientationToObjectSpace</a> (const CTransformation &amp;in_transfoObjectSpace, const CVector3 &amp;in_vector3Orientation)</td></tr>\n\
<tr class=\"separator:ac37ca3e6b54b7e8689794c1c84c0b13b\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:acc0b9c85408a960e4003ec446c8a73c9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">CVector3&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#acc0b9c85408a960e4003ec446c8a73c9\">MapWorldPositionToObjectSpace</a> (const CTransformation &amp;in_transfoObjectSpace, const CVector3 &amp;in_vector3Position)</td></tr>\n\
<tr class=\"separator:acc0b9c85408a960e4003ec446c8a73c9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a61f1f9536adaf355bfe502fb1bd8d61e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">CTransformation&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#a61f1f9536adaf355bfe502fb1bd8d61e\">MapObjectPoseToObjectSpace</a> (const CTransformation &amp;in_transfoObjectSpace, const CTransformation &amp;in_transfoSpace, const CTransformation &amp;in_transfoPose)</td></tr>\n\
<tr class=\"separator:a61f1f9536adaf355bfe502fb1bd8d61e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab05a66a36f106e4ce3145157ea2e9b53\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">CVector3&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#ab05a66a36f106e4ce3145157ea2e9b53\">MapObjectOrientationToObjectSpace</a> (const CTransformation &amp;in_transfoObjectSpace, const CTransformation &amp;in_transfoSpace, const CVector3 &amp;in_vector3Orientation)</td></tr>\n\
<tr class=\"separator:ab05a66a36f106e4ce3145157ea2e9b53\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a23024cf6634dba4fd7bb4f58939ebf61\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">CVector3&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/namespaceXSI_1_1MATH.html#a23024cf6634dba4fd7bb4f58939ebf61\">MapObjectPositionToObjectSpace</a> (const CTransformation &amp;in_transfoObjectSpace, const CTransformation &amp;in_transfoSpace, const CVector3 &amp;in_vector3Position)</td></tr>\n\
<tr class=\"separator:a23024cf6634dba4fd7bb4f58939ebf61\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
\n\
<p><a href=\"#!/url=./si_cpp/xsi__math_8h_source.html\">Go to the source code of this file.</a></p>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";