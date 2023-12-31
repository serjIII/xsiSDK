var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CStatus Class Reference</title>\n\
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
      initNavTree(\'classXSI_1_1CStatus.html\', prefix);\n\
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
            <h1>CStatus Class Reference</h1>\n\
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
<a href=\"#pub-types\">Public Types</a> &#124;\n\
<a href=\"#pub-methods\">Public Member Functions</a>  </div>\n\
  <div class=\"headertitle\">\n\
<div class=\"title\">CStatus Class Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\"><div class=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"closed.png\" alt=\"+\"> This reference page is linked to from the following overview topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><a href=\"#!/url=./files/cus_self_ExportingCallbacks.htm\">Exporting Callbacks</a>, <a href=\"#!/url=./files/cus_icenodes_CustomVector3ToScalarExample.htm\">CustomVector3ToScalar Example</a>, <a href=\"#!/url=./files/cus_icenodes-2.htm\">Regular Custom ICENode</a>, <a href=\"#!/url=./files/cus_icenodes_GenerateCode.htm\">Code</a>, <a href=\"#!/url=./files/cus_displayhost_ComponentsofaCustomDisplayHost.htm\">Components of a Custom Display Host</a>, <a href=\"#!/url=./files/cpp_understand_LegacyCallbacks.htm\">Legacy Plug-in Callbacks</a>, <a href=\"#!/url=./files/cpp_understand_Legacy2SelfInstall.htm\">Migrating Legacy Plug-ins</a>, <a href=\"#!/url=./files/cpp_understand_MixingtheCAPIwiththeCOMAPI.htm\">Mixing the C++ API with the Softimage Object Model</a>.</div></div><hr>\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__status_8h_source.html\">xsi_status.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><p>Encapsulates status data types for error handling purpose. The class also exposes methods to query and set the error code. </p>\n\
<p>The error codes use the same values as the standard HRESULT error codes on Windows. </p>\n\
</div><div id=\"dynsection-0\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\">\n\
  <img id=\"dynsection-0-trigger\" src=\"closed.png\" alt=\"+\"> Inheritance diagram for CStatus:</div>\n\
<div id=\"dynsection-0-summary\" class=\"dynsummary\" style=\"display:block;\">\n\
</div>\n\
<div id=\"dynsection-0-content\" class=\"dyncontent\" style=\"display:none;\">\n\
 <div class=\"center\">\n\
  <img src=\"classXSI_1_1CStatus.png\" usemap=\"#CStatus_map\" alt=\"\">\n\
  <map id=\"CStatus_map\" name=\"CStatus_map\">\n\
<area href=\"classXSI_1_1CMeshBuilder_1_1CErrorDescriptor.html\" title=\"This class reports the error status returned by CMeshBuilder::Build. If the mesh builder fails...\" alt=\"CMeshBuilder::CErrorDescriptor\" shape=\"rect\" coords=\"0,56,143,80\">\n\
<area href=\"classXSI_1_1CScriptErrorDescriptor.html\" title=\"This class extends the CStatus object with additional error details if a Script Error has occured...\" alt=\"CScriptErrorDescriptor\" shape=\"rect\" coords=\"153,56,296,80\">\n\
</map>\n\
 </div></div>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:af31477bc48f67856bedb0fa8e5b5281d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">enum &#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> { <br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da18f893264a00711081b62de694f99db4\">Undefined</a> = 0xFFFFFFFF, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">OK</a> = 0, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281daf9d46b7804d93a4fcde88489a1b68c24\">False</a> = 1, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2c88d6b09611bebcfd079df624ae3bfe\">Fail</a> = 0x80004005L, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281dad795f6709d0c6419c4fe31703e454e27\">InvalidArgument</a> = 0x80070057L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da693a56048c1e1863c980d58364247f7a\">OutOfMemory</a> = 0x8007000EL, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da60a075acd0b5e992180ec8ad7d794ea4\">AccessDenied</a> = 0x80070005L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da60705d33ccd09cb1942945c2a8526bbe\">Unexpected</a> = 0x8000FFFFL, \n\
<br>\n\
&#160;&#160;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281dacb8869b8a5ba913370cbb2ace9a5acf5\">NotImpl</a> = 0x80004001L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da5867f85171267d9072de24ed18683bad\">MemberNotFound</a> = 0x80020003L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da596ba78c00d5ebb3b20ef2865efd74ed\">Abort</a> = 0x80004004L, \n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da0685e3ac66c3e2a666f330707aa05c38\">BadVarType</a> = 0x80020008L\n\
<br>\n\
 }</td></tr>\n\
<tr class=\"memdesc:af31477bc48f67856bedb0fa8e5b5281d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">Error code enumerator.  <a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">More...</a><br></td></tr>\n\
<tr class=\"separator:af31477bc48f67856bedb0fa8e5b5281d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:abaab88b582e9b5b1b803700acb953c23\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#abaab88b582e9b5b1b803700acb953c23\">CStatus</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> in_code=<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">OK</a>)</td></tr>\n\
<tr class=\"separator:abaab88b582e9b5b1b803700acb953c23\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a54706f68752bcc5a502f3cb176088c9e\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a54706f68752bcc5a502f3cb176088c9e\">GetCode</a> () const </td></tr>\n\
<tr class=\"separator:a54706f68752bcc5a502f3cb176088c9e\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a429605c947acd521ec0d6cfc18d58943\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a429605c947acd521ec0d6cfc18d58943\">Succeeded</a> () const </td></tr>\n\
<tr class=\"separator:a429605c947acd521ec0d6cfc18d58943\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aef4797e10edc4d870bcdf04c7b72e82a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#aef4797e10edc4d870bcdf04c7b72e82a\">PutCode</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> in_code)</td></tr>\n\
<tr class=\"separator:aef4797e10edc4d870bcdf04c7b72e82a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a10ac8d4d25f03a926818b8a06b80e1ba\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a10ac8d4d25f03a926818b8a06b80e1ba\">GetDescription</a> () const </td></tr>\n\
<tr class=\"separator:a10ac8d4d25f03a926818b8a06b80e1ba\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ab33161928c0918ddbfe7febde1cf9867\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#ab33161928c0918ddbfe7febde1cf9867\">operator=</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> in_code)</td></tr>\n\
<tr class=\"separator:ab33161928c0918ddbfe7febde1cf9867\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a2105fb136b18efffc7eaba50a0bb6802\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a2105fb136b18efffc7eaba50a0bb6802\">operator==</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> &amp;rhs) const </td></tr>\n\
<tr class=\"separator:a2105fb136b18efffc7eaba50a0bb6802\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8d49d34b4f3bf8e7a8c9b94f2bb2e7e7\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a8d49d34b4f3bf8e7a8c9b94f2bb2e7e7\">operator==</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> rhs) const </td></tr>\n\
<tr class=\"separator:a8d49d34b4f3bf8e7a8c9b94f2bb2e7e7\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af57fcac1a5d736046f3ffa0551d4ca13\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af57fcac1a5d736046f3ffa0551d4ca13\">operator!=</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> &amp;rhs) const </td></tr>\n\
<tr class=\"separator:af57fcac1a5d736046f3ffa0551d4ca13\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9254241fe8b86d785352274d6caf21ff\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a9254241fe8b86d785352274d6caf21ff\">operator!=</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> rhs) const </td></tr>\n\
<tr class=\"separator:a9254241fe8b86d785352274d6caf21ff\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a7c8d4b33259ce6f185eac669b2befd81\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">void&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#a7c8d4b33259ce6f185eac669b2befd81\">AssertSucceeded</a> (const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> &amp;in_strText=<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>()) const </td></tr>\n\
<tr class=\"separator:a7c8d4b33259ce6f185eac669b2befd81\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Enumeration Documentation</h2>\n\
<a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">enum <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>Error code enumerator. </p>\n\
<table class=\"fieldtable\">\n\
<tr><th colspan=\"2\">Enumerator</th></tr><tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281da18f893264a00711081b62de694f99db4\"></a>Undefined</em>&#160;</td><td class=\"fielddoc\">\n\
<p>Undefined </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\"></a>OK</em>&#160;</td><td class=\"fielddoc\">\n\
<p>OK </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281daf9d46b7804d93a4fcde88489a1b68c24\"></a>False</em>&#160;</td><td class=\"fielddoc\">\n\
<p>False </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281da2c88d6b09611bebcfd079df624ae3bfe\"></a>Fail</em>&#160;</td><td class=\"fielddoc\">\n\
<p>Fail </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281dad795f6709d0c6419c4fe31703e454e27\"></a>InvalidArgument</em>&#160;</td><td class=\"fielddoc\">\n\
<p>InvalidArgument </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281da693a56048c1e1863c980d58364247f7a\"></a>OutOfMemory</em>&#160;</td><td class=\"fielddoc\">\n\
<p>OutOfMemory </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281da60a075acd0b5e992180ec8ad7d794ea4\"></a>AccessDenied</em>&#160;</td><td class=\"fielddoc\">\n\
<p>AccessDenied </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281da60705d33ccd09cb1942945c2a8526bbe\"></a>Unexpected</em>&#160;</td><td class=\"fielddoc\">\n\
<p>Unexpected </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281dacb8869b8a5ba913370cbb2ace9a5acf5\"></a>NotImpl</em>&#160;</td><td class=\"fielddoc\">\n\
<p>NotImpl </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281da5867f85171267d9072de24ed18683bad\"></a>MemberNotFound</em>&#160;</td><td class=\"fielddoc\">\n\
<p>MemberNotFound </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281da596ba78c00d5ebb3b20ef2865efd74ed\"></a>Abort</em>&#160;</td><td class=\"fielddoc\">\n\
<p>Abort </p>\n\
</td></tr>\n\
<tr><td class=\"fieldname\"><em><a class=\"anchor\" id=\"af31477bc48f67856bedb0fa8e5b5281da0685e3ac66c3e2a666f330707aa05c38\"></a>BadVarType</em>&#160;</td><td class=\"fielddoc\">\n\
<p>BadVarType </p>\n\
</td></tr>\n\
</table>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"abaab88b582e9b5b1b803700acb953c23\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a>&#160;</td>\n\
          <td class=\"paramname\"><em>in_code</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">OK</a></code></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Constructs a status object from a given error code. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_code</td><td>Error code </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"a54706f68752bcc5a502f3cb176088c9e\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a> GetCode </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the underlying error code. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Error code </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a429605c947acd521ec0d6cfc18d58943\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool Succeeded </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns true if the status is either OK or False </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>true if OK or False, false otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aef4797e10edc4d870bcdf04c7b72e82a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void PutCode </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a>&#160;</td>\n\
          <td class=\"paramname\"><em>in_code</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Sets the error code type </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_code</td><td>Error code </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a10ac8d4d25f03a926818b8a06b80e1ba\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetDescription </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Gets the status code description. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Error description string </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"ab33161928c0918ddbfe7febde1cf9867\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a>&amp; operator= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a>&#160;</td>\n\
          <td class=\"paramname\"><em>in_code</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Sets the <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\" title=\"Encapsulates status data types for error handling purpose. The class also exposes methods to query an...\">CStatus</a> object with a given error code. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_code</td><td>Error code </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\" title=\"Encapsulates status data types for error handling purpose. The class also exposes methods to query an...\">CStatus</a> object. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a2105fb136b18efffc7eaba50a0bb6802\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>The equality operator that takes another <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\" title=\"Encapsulates status data types for error handling purpose. The class also exposes methods to query an...\">CStatus</a> object. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">rhs</td><td>status object </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>bool </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8d49d34b4f3bf8e7a8c9b94f2bb2e7e7\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator== </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a>&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>The equality operator that takes a <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\" title=\"Error code enumerator. \">CStatus::Code</a>. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">rhs</td><td>status code </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>bool </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af57fcac1a5d736046f3ffa0551d4ca13\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>The inequality operator that takes a <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\" title=\"Encapsulates status data types for error handling purpose. The class also exposes methods to query an...\">CStatus</a> object. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">rhs</td><td>status object </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>bool </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9254241fe8b86d785352274d6caf21ff\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">bool operator!= </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\">Code</a>&#160;</td>\n\
          <td class=\"paramname\"><em>rhs</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>The inequality operator that takes a <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281d\" title=\"Error code enumerator. \">CStatus::Code</a>. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">rhs</td><td>status code </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>bool </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a7c8d4b33259ce6f185eac669b2befd81\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">void AssertSucceeded </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_strText</em> = <code><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>()</code></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Assert the current status code is OK or False. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_strText</td><td>Optional message logs if the function doesn\'t assert. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>bool </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__status_8h_source.html\">xsi_status.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";