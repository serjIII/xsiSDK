var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CDataArray&lt; T &gt; Class Template Reference</title>\n\
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
      initNavTree(\'classXSI_1_1CDataArray.html\', prefix);\n\
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
            <h1>CDataArray&lt; T &gt; Class Template Reference</h1>\n\
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
<div class=\"title\">CDataArray&lt; T &gt; Class Template Reference</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\"><div class=\"OverviewLinksDiv\"><div id=\"dynsection-overview\" onclick=\"return toggleVisibility(this)\" class=\"dynheader closed\" style=\"cursor:pointer;\"><img id=\"dynsection-overview-trigger\" src=\"closed.png\" alt=\"+\"> This reference page is linked to from the following overview topics: </div><div id=\"dynsection-overview-content\" class=\"dyncontent\" style=\"display:none;\"><a href=\"#!/url=./files/cus_icenodes_PortDataAccess.htm\">Port Data Access</a>.</div></div><hr>\n\
\n\
<p><code>#include &lt;<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__dataarray_8h_source.html\">xsi_dataarray.h</a>&gt;</code></p>\n\
<a name=\"details\" id=\"details\"></a><h2 class=\"groupheader\">Class Description</h2>\n\
<div class=\"textblock\"><h3>template&lt;class T&gt;<br>\n\
class XSI::CDataArray&lt; T &gt;</h3>\n\
\n\
<p>This template class encapsulates the 1D data arrays passed to custom node plug-ins during a graph evaluation. The underlying data arrays are zero-based, the following types are available: </p>\n\
<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayFloat\">CDataArrayFloat</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayLong\">CDataArrayLong</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayBool\">CDataArrayBool</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayVector2f\">CDataArrayVector2f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayVector3f\">CDataArrayVector3f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayVector4f\">CDataArrayVector4f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayQuaternionf\">CDataArrayQuaternionf</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayRotationf\">CDataArrayRotationf</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayMatrix3f\">CDataArrayMatrix3f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayMatrix4f\">CDataArrayMatrix4f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayColor4f\">CDataArrayColor4f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayShape\">CDataArrayShape</a></li>\n\
</ul>\n\
<p><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\" title=\"This template class encapsulates the 1D data arrays passed to custom node plug-ins during a graph eva...\">CDataArray</a> objects are created based on the current evaluation context and a specific port type (input ports only). Data are usually indexed with a <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\" title=\"CIndexSet encapsulates an index set for indexing CDataArray object types for the current evaluation...\">CIndexSet</a> which contains the array index set for the whole evaluation graph.</p>\n\
<dl class=\"section user\"><dt>Note:</dt><dd>If the class type doesn\'t match the port data type being evaluated, an error occurs at run-time and a class instance is created with an empty array.</dd></dl>\n\
<dl class=\"section user\"><dt>Example:</dt><dd><div class=\"fragment\"><div class=\"line\"><span class=\"keyword\">using namespace </span>XSI;</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">CDataArrayVector3f</a> outData( in_ctxt );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">CDataArrayVector3f</a> inData( in_ctxt, ID_IN_vector3 );</div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">CDataArrayFloat</a> scalarData( in_ctxt, ID_IN_factor );</div>\n\
<div class=\"line\"></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\">CIndexSet</a> indexSet( in_ctxt );</div>\n\
<div class=\"line\"><span class=\"keywordflow\">for</span>(<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html\">CIndexSet::Iterator</a> it = indexSet.Begin(); it.<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet_1_1Iterator.html#a1f00a3daad37178257564e4817b69d40\">HasNext</a>(); it.Next())</div>\n\
<div class=\"line\">{</div>\n\
<div class=\"line\">    outData[it] = inData[it];</div>\n\
<div class=\"line\">    outData[it].ScaleInPlace( scalarData[it] );</div>\n\
<div class=\"line\">}</div>\n\
</div><!-- fragment --></dd></dl>\n\
<dl class=\"section since\"><dt>Since</dt><dd>7.0 </dd></dl>\n\
<dl class=\"section see\"><dt>See Also</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray2D.html\" title=\"This template class encapsulates 2D data arrays that are passed to custom node plug-ins during a grap...\">CDataArray2D</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\" title=\"CIndexSet encapsulates an index set for indexing CDataArray object types for the current evaluation...\">CIndexSet</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\" title=\"ICENodeDef objects are used for describing a unique custom ICENode object. Instances of this object a...\">ICENodeDef</a>, <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html\">Type Definitions for CDataArray</a> </dd></dl>\n\
</div>\n\
<p>Inherits CBaseDataArray.</p>\n\
<table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-types\"></a>\n\
Public Types</h2></td></tr>\n\
<tr class=\"memitem:acd97f8965271e60fd7a807123ac5c72d\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">typedef T&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#acd97f8965271e60fd7a807123ac5c72d\">TData</a></td></tr>\n\
<tr class=\"memdesc:acd97f8965271e60fd7a807123ac5c72d\"><td class=\"mdescLeft\">&#160;</td><td class=\"mdescRight\">TData is the underlying data type of a <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\" title=\"This template class encapsulates the 1D data arrays passed to custom node plug-ins during a graph eva...\">CDataArray</a> instance. Possible values are:  <a href=\"#acd97f8965271e60fd7a807123ac5c72d\">More...</a><br></td></tr>\n\
<tr class=\"separator:acd97f8965271e60fd7a807123ac5c72d\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table><table class=\"memberdecls\">\n\
<tr class=\"heading\"><td colspan=\"2\"><h2 class=\"groupheader\"><a name=\"pub-methods\"></a>\n\
Public Member Functions</h2></td></tr>\n\
<tr class=\"memitem:a1a8867ee811f3fb184545bf47448513c\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#a1a8867ee811f3fb184545bf47448513c\">CDataArray</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;in_ctxt, ULONG in_nInputPortID, ULONG in_nInstanceIndex=0)</td></tr>\n\
<tr class=\"separator:a1a8867ee811f3fb184545bf47448513c\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a20e2e64eaf68fae5a5b93ec708201819\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#a20e2e64eaf68fae5a5b93ec708201819\">CDataArray</a> (<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;in_ctxt)</td></tr>\n\
<tr class=\"separator:a20e2e64eaf68fae5a5b93ec708201819\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:afd4470bab946ac569a8cc3883ab4b12a\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#afd4470bab946ac569a8cc3883ab4b12a\">CDataArray</a> ()</td></tr>\n\
<tr class=\"separator:afd4470bab946ac569a8cc3883ab4b12a\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:aff9198955a668a38f8a50427144ae854\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#aff9198955a668a38f8a50427144ae854\">~CDataArray</a> ()</td></tr>\n\
<tr class=\"separator:aff9198955a668a38f8a50427144ae854\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:ad09bcf7aa6b6aa79b0884c05faaf1cb4\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE const <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#acd97f8965271e60fd7a807123ac5c72d\">TData</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#ad09bcf7aa6b6aa79b0884c05faaf1cb4\">operator[]</a> (ULONG in_nIndex) const </td></tr>\n\
<tr class=\"separator:ad09bcf7aa6b6aa79b0884c05faaf1cb4\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a8a92314f55ac35b0e60374b51d671a37\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#acd97f8965271e60fd7a807123ac5c72d\">TData</a> &amp;&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#a8a92314f55ac35b0e60374b51d671a37\">operator[]</a> (ULONG in_nIndex)</td></tr>\n\
<tr class=\"separator:a8a92314f55ac35b0e60374b51d671a37\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:af680cca5a8cdd45cb71f11ad895b2ef1\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a>&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#af680cca5a8cdd45cb71f11ad895b2ef1\">CopyFrom</a> (ULONG in_nInputPortID, ULONG in_nInstanceIndex=0)</td></tr>\n\
<tr class=\"separator:af680cca5a8cdd45cb71f11ad895b2ef1\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a9826803803a4180df1d17203f56fafe9\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE ULONG&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#a9826803803a4180df1d17203f56fafe9\">GetCount</a> () const </td></tr>\n\
<tr class=\"separator:a9826803803a4180df1d17203f56fafe9\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
<tr class=\"memitem:a069586033e550d1cc060ae0247b54c50\"><td class=\"memItemLeft\" translate=\"no\" align=\"right\" valign=\"top\">SICPPSDK_INLINE bool&#160;</td><td class=\"memItemRight\" translate=\"no\" valign=\"bottom\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#a069586033e550d1cc060ae0247b54c50\">IsConstant</a> () const </td></tr>\n\
<tr class=\"separator:a069586033e550d1cc060ae0247b54c50\"><td class=\"memSeparator\" colspan=\"2\">&#160;</td></tr>\n\
</table>\n\
<h2 class=\"groupheader\">Member Typedef Documentation</h2>\n\
<a class=\"anchor\" id=\"acd97f8965271e60fd7a807123ac5c72d\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">T <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html#acd97f8965271e60fd7a807123ac5c72d\">TData</a></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
\n\
<p>TData is the underlying data type of a <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\" title=\"This template class encapsulates the 1D data arrays passed to custom node plug-ins during a graph eva...\">CDataArray</a> instance. Possible values are: </p>\n\
<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayFloat\">float</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayLong\">LONG</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayBool\">bool</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayVector2f\">CVector2f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayVector3f\">CVector3f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayVector4f\">CVector4f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayQuaternionf\">CQuaternionf</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayRotationf\">CRotationf</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayMatrix3f\">CMatrix3f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayMatrix4f\">CMatrix4f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/CDataArrayTypedefs.html#CDataArrayColor4f\">CColor4f</a> </li>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CShape.html\">CShape</a> </li>\n\
</ul>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Constructor &amp; Destructor Documentation</h2>\n\
<a class=\"anchor\" id=\"a1a8867ee811f3fb184545bf47448513c\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">CDataArray</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_ctxt</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_nInputPortID</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_nInstanceIndex</em> = <code>0</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Constructor for data types bound to input ports. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_ctxt</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\" title=\"The ICENode object represents an effect node in the ICE graph. \">ICENode</a> evaluation context. </td></tr>\n\
    <tr><td class=\"paramname\">in_nInputPortID</td><td>Input port identifier. </td></tr>\n\
    <tr><td class=\"paramname\">in_nInstanceIndex</td><td>The group instance of the port. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a20e2e64eaf68fae5a5b93ec708201819\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">CDataArray</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\"><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> &amp;&#160;</td>\n\
          <td class=\"paramname\"><em>in_ctxt</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Constructor for data types bound to output ports. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_ctxt</td><td><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\" title=\"The ICENode object represents an effect node in the ICE graph. \">ICENode</a> evaluation context. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"afd4470bab946ac569a8cc3883ab4b12a\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">CDataArray</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Default Constructor. </p>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"aff9198955a668a38f8a50427144ae854\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE ~<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">CDataArray</a> </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Destructor. </p>\n\
\n\
</div>\n\
</div>\n\
<h2 class=\"groupheader\">Member Function Documentation</h2>\n\
<a class=\"anchor\" id=\"ad09bcf7aa6b6aa79b0884c05faaf1cb4\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE const T &amp; operator[] </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_nIndex</em></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Accessor to the encapsulated array. This operator is called when reading the data so the return value is read-only. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_nIndex</td><td>Index in the array. The index must be smaller than the number of elements in the array, otherwise the results are unpredicted. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A read-only reference to the indexed item. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a8a92314f55ac35b0e60374b51d671a37\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE T &amp; operator[] </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_nIndex</em></td><td>)</td>\n\
          <td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Accessor to elements at a given index. </p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_nIndex</td><td>Index in this zero based array. The index must be smaller than the number of elements in the array, otherwise the results are unpredicted. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>A reference to the indexed item. </dd></dl>\n\
<dl class=\"section user\"><dt>Note:</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray_3_01bool_01_4.html#a92b5e7b03ad3f20b2025e08c1c1c3468\">CDataArray&lt; bool &gt;::operator []</a> cannot be used for setting an array element, you must use <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray_3_01bool_01_4.html#a2d201bbad555dde2426981a4ebeac0d6\">CDataArray&lt; bool &gt;::Set</a> instead. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"af680cca5a8cdd45cb71f11ad895b2ef1\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE <a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> CopyFrom </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_nInputPortID</em>, </td>\n\
        </tr>\n\
        <tr>\n\
          <td class=\"paramkey\"></td>\n\
          <td></td>\n\
          <td class=\"paramtype\">ULONG&#160;</td>\n\
          <td class=\"paramname\"><em>in_nInstanceIndex</em> = <code>0</code>&#160;</td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td>)</td>\n\
          <td></td><td></td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Copy the data from a given input port to this object buffer without allocating memory. This is typically used for passing data by reference from input to output ports, similar to what the built-in \'pass through\' node is doing.</p>\n\
<dl class=\"params\"><dt>Parameters</dt><dd>\n\
  <table class=\"params\">\n\
    <tr><td class=\"paramname\">in_nInputPortID</td><td>Input port identifier. </td></tr>\n\
    <tr><td class=\"paramname\">in_nInstanceIndex</td><td>The group instance of the port. </td></tr>\n\
  </table>\n\
  </dd>\n\
</dl>\n\
<dl class=\"section return\"><dt>Returns</dt><dd><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da2bc49ec37d6a5715dd23e85f1ff5bb59\">CStatus::OK</a> Success </dd>\n\
<dd>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281dad795f6709d0c6419c4fe31703e454e27\">CStatus::InvalidArgument</a> Fails if in_nInputPortID is not an input port identifier or in_nInstanceIndex is invalid. </dd>\n\
<dd>\n\
<a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html#af31477bc48f67856bedb0fa8e5b5281da60a075acd0b5e992180ec8ad7d794ea4\">CStatus::AccessDenied</a> This array is not an output type or wasn\'t created properly.</dd></dl>\n\
<dl class=\"section user\"><dt>Example:</dt><dd><div class=\"fragment\"><div class=\"line\"><span class=\"comment\">// Copy data from the ID_IN_PointPosition port to the current output port</span></div>\n\
<div class=\"line\"><a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CDataArray.html\">XSI::CDataArrayVector3f</a> outData( in_ctxt );</div>\n\
<div class=\"line\">outData.CopyFrom( ID_IN_PointPosition );</div>\n\
</div><!-- fragment --> </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a9826803803a4180df1d17203f56fafe9\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE ULONG GetCount </td>\n\
          <td>(</td>\n\
          <td class=\"paramtype\">void&#160;</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns the number of elements in the array. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>Number of elements. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<a class=\"anchor\" id=\"a069586033e550d1cc060ae0247b54c50\"></a>\n\
<div class=\"memitem\">\n\
<div class=\"memproto\">\n\
      <table class=\"memname\">\n\
        <tr>\n\
          <td class=\"memname\" translate=\"no\">SICPPSDK_INLINE bool IsConstant </td>\n\
          <td>(</td>\n\
          <td class=\"paramname\"></td><td>)</td>\n\
          <td> const</td>\n\
        </tr>\n\
      </table>\n\
</div><div class=\"memdoc\">\n\
<p>Returns true if the array is constant or false otherwise. A constant array has only one value. </p>\n\
<dl class=\"section return\"><dt>Returns</dt><dd>True if constant, false otherwise. </dd></dl>\n\
\n\
</div>\n\
</div>\n\
<hr>The documentation for this class was generated from the following file:<ul>\n\
<li><a class=\"el\" translate=\"no\" href=\"#!/url=./si_cpp/xsi__dataarray_8h_source.html\">xsi_dataarray.h</a></li>\n\
</ul>\n\
</div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";