var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>xsi_pluginregistrar.h Source File</title>\n\
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
      initNavTree(\'xsi__pluginregistrar_8h_source.html\', prefix);\n\
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
            <h1>xsi_pluginregistrar.h Source File</h1>\n\
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
<div class=\"title\">xsi_pluginregistrar.h</div>  </div>\n\
</div><!--header-->\n\
<div class=\"contents\">\n\
<a href=\"#!/url=./si_cpp/xsi__pluginregistrar_8h.html\">Go to the documentation of this file.</a><div class=\"fragment\"><div class=\"line\"><a name=\"l00001\"></a><span class=\"lineno\">    1</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00010\"></a><span class=\"lineno\">   10</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00011\"></a><span class=\"lineno\">   11</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00012\"></a><span class=\"lineno\">   12</span>&#160;<span class=\"preprocessor\">#if (_MSC_VER &gt; 1000) || defined(SGI_COMPILER)</span></div>\n\
<div class=\"line\"><a name=\"l00013\"></a><span class=\"lineno\">   13</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#pragma once</span></div>\n\
<div class=\"line\"><a name=\"l00014\"></a><span class=\"lineno\">   14</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#endif</span></div>\n\
<div class=\"line\"><a name=\"l00015\"></a><span class=\"lineno\">   15</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00016\"></a><span class=\"lineno\">   16</span>&#160;<span class=\"preprocessor\">#ifndef __XSIPLUGINREGISTRAR_H__</span></div>\n\
<div class=\"line\"><a name=\"l00017\"></a><span class=\"lineno\">   17</span>&#160;<span class=\"preprocessor\"></span><span class=\"preprocessor\">#define __XSIPLUGINREGISTRAR_H__</span></div>\n\
<div class=\"line\"><a name=\"l00018\"></a><span class=\"lineno\">   18</span>&#160;<span class=\"preprocessor\"></span></div>\n\
<div class=\"line\"><a name=\"l00019\"></a><span class=\"lineno\">   19</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__siobject_8h.html\">xsi_siobject.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00020\"></a><span class=\"lineno\">   20</span>&#160;<span class=\"preprocessor\">#include &lt;<a class=\"code\" href=\"#!/url=./si_cpp/xsi__pluginitem_8h.html\">xsi_pluginitem.h</a>&gt;</span></div>\n\
<div class=\"line\"><a name=\"l00021\"></a><span class=\"lineno\">   21</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00022\"></a><span class=\"lineno\">   22</span>&#160;<span class=\"keyword\">namespace </span>XSI {</div>\n\
<div class=\"line\"><a name=\"l00023\"></a><span class=\"lineno\">   23</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00024\"></a><span class=\"lineno\">   24</span>&#160;<span class=\"keyword\">class </span>ICENodeDef;</div>\n\
<div class=\"line\"><a name=\"l00025\"></a><span class=\"lineno\">   25</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00026\"></a><span class=\"lineno\">   26</span>&#160;<span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00058\"></a><span class=\"lineno\">   58</span>&#160;<span class=\"comment\"></span><span class=\"comment\">//*****************************************************************************</span></div>\n\
<div class=\"line\"><a name=\"l00059\"></a><span class=\"lineno\">   59</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00060\"></a><span class=\"lineno\"><a class=\"line\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">   60</a></span>&#160;<span class=\"keyword\">class </span>SICPPSDKDECL <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a> : <span class=\"keyword\">public</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">SIObject</a></div>\n\
<div class=\"line\"><a name=\"l00061\"></a><span class=\"lineno\">   61</span>&#160;{</div>\n\
<div class=\"line\"><a name=\"l00062\"></a><span class=\"lineno\">   62</span>&#160;<span class=\"keyword\">public</span>:</div>\n\
<div class=\"line\"><a name=\"l00064\"></a><span class=\"lineno\">   64</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a>();</div>\n\
<div class=\"line\"><a name=\"l00065\"></a><span class=\"lineno\">   65</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00067\"></a><span class=\"lineno\">   67</span>&#160;    ~<a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a>();</div>\n\
<div class=\"line\"><a name=\"l00068\"></a><span class=\"lineno\">   68</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00072\"></a><span class=\"lineno\">   72</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00073\"></a><span class=\"lineno\">   73</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00077\"></a><span class=\"lineno\">   77</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a>(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00078\"></a><span class=\"lineno\">   78</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00083\"></a><span class=\"lineno\">   83</span>&#160;    <span class=\"keywordtype\">bool</span> IsA( <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> in_ClassID) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00084\"></a><span class=\"lineno\">   84</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00088\"></a><span class=\"lineno\">   88</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">siClassID</a> GetClassID() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00089\"></a><span class=\"lineno\">   89</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00095\"></a><span class=\"lineno\">   95</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a>&amp; in_obj);</div>\n\
<div class=\"line\"><a name=\"l00096\"></a><span class=\"lineno\">   96</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00102\"></a><span class=\"lineno\">  102</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a>&amp; operator=(<span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a>&amp; in_ref);</div>\n\
<div class=\"line\"><a name=\"l00103\"></a><span class=\"lineno\">  103</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00121\"></a><span class=\"lineno\">  121</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterFilter( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName, <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#a820a1cd00108d15bee3d809e341c6f95\">siFilterType</a> in_type );</div>\n\
<div class=\"line\"><a name=\"l00122\"></a><span class=\"lineno\">  122</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00135\"></a><span class=\"lineno\">  135</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterCustomDisplay( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName );</div>\n\
<div class=\"line\"><a name=\"l00136\"></a><span class=\"lineno\">  136</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00406\"></a><span class=\"lineno\">  406</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterProperty( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName );</div>\n\
<div class=\"line\"><a name=\"l00407\"></a><span class=\"lineno\">  407</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00421\"></a><span class=\"lineno\">  421</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterDisplayCallback( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName );</div>\n\
<div class=\"line\"><a name=\"l00422\"></a><span class=\"lineno\">  422</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00436\"></a><span class=\"lineno\">  436</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterDisplayPass( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName );</div>\n\
<div class=\"line\"><a name=\"l00437\"></a><span class=\"lineno\">  437</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00465\"></a><span class=\"lineno\">  465</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterMenu(    <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#af9700f1d68da1287ef23c3f26687bc2a\">siMenuAnchorPoints</a>  in_anchorID,</div>\n\
<div class=\"line\"><a name=\"l00466\"></a><span class=\"lineno\">  466</span>&#160;                                <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;      in_menuName,</div>\n\
<div class=\"line\"><a name=\"l00467\"></a><span class=\"lineno\">  467</span>&#160;                                <span class=\"keywordtype\">bool</span>                in_bDisplayAsSubmenu=<span class=\"keyword\">true</span>,</div>\n\
<div class=\"line\"><a name=\"l00468\"></a><span class=\"lineno\">  468</span>&#160;                                <span class=\"keywordtype\">bool</span>                in_bDynamicMenu=<span class=\"keyword\">true</span> );</div>\n\
<div class=\"line\"><a name=\"l00469\"></a><span class=\"lineno\">  469</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00486\"></a><span class=\"lineno\">  486</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterCommand( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_commandScriptName );</div>\n\
<div class=\"line\"><a name=\"l00487\"></a><span class=\"lineno\">  487</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00519\"></a><span class=\"lineno\">  519</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterCommand( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_commandName,</div>\n\
<div class=\"line\"><a name=\"l00520\"></a><span class=\"lineno\">  520</span>&#160;                                <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_commandScriptName );</div>\n\
<div class=\"line\"><a name=\"l00521\"></a><span class=\"lineno\">  521</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00540\"></a><span class=\"lineno\">  540</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterEvent( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_eventName, <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#afb6ebbe7710e6898a918148eb7c6b0e5\">siEventID</a> in_eventID );</div>\n\
<div class=\"line\"><a name=\"l00541\"></a><span class=\"lineno\">  541</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00570\"></a><span class=\"lineno\">  570</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterTimerEvent(  <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_eventName,</div>\n\
<div class=\"line\"><a name=\"l00571\"></a><span class=\"lineno\">  571</span>&#160;                                    LONG            in_nInterval,</div>\n\
<div class=\"line\"><a name=\"l00572\"></a><span class=\"lineno\">  572</span>&#160;                                    LONG            in_nDelay=0 );</div>\n\
<div class=\"line\"><a name=\"l00573\"></a><span class=\"lineno\">  573</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00595\"></a><span class=\"lineno\">  595</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterConverterEvent(  <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_eventName,</div>\n\
<div class=\"line\"><a name=\"l00596\"></a><span class=\"lineno\">  596</span>&#160;                                        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/namespaceXSI.html#afb6ebbe7710e6898a918148eb7c6b0e5\">siEventID</a> in_eventID,</div>\n\
<div class=\"line\"><a name=\"l00597\"></a><span class=\"lineno\">  597</span>&#160;                                        <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp;  in_eventExtension );</div>\n\
<div class=\"line\"><a name=\"l00598\"></a><span class=\"lineno\">  598</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00613\"></a><span class=\"lineno\">  613</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterOperator( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_name );</div>\n\
<div class=\"line\"><a name=\"l00614\"></a><span class=\"lineno\">  614</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00630\"></a><span class=\"lineno\">  630</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterRenderer( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_name );</div>\n\
<div class=\"line\"><a name=\"l00631\"></a><span class=\"lineno\">  631</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00646\"></a><span class=\"lineno\">  646</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterICENode( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a>&amp; in_nodedef );</div>\n\
<div class=\"line\"><a name=\"l00647\"></a><span class=\"lineno\">  647</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00658\"></a><span class=\"lineno\">  658</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterPrimitive( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_name );</div>\n\
<div class=\"line\"><a name=\"l00659\"></a><span class=\"lineno\">  659</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00667\"></a><span class=\"lineno\">  667</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterShaderLanguageParser( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strParserName );</div>\n\
<div class=\"line\"><a name=\"l00668\"></a><span class=\"lineno\">  668</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00679\"></a><span class=\"lineno\">  679</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterShader( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strShaderClassName, ULONG in_ulMajorVersion, ULONG in_ulMinorVersion );</div>\n\
<div class=\"line\"><a name=\"l00680\"></a><span class=\"lineno\">  680</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00696\"></a><span class=\"lineno\">  696</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">PluginItem</a> RegisterTool( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_name );</div>\n\
<div class=\"line\"><a name=\"l00697\"></a><span class=\"lineno\">  697</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00701\"></a><span class=\"lineno\">  701</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetAuthor() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00702\"></a><span class=\"lineno\">  702</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00707\"></a><span class=\"lineno\">  707</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetURL() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00708\"></a><span class=\"lineno\">  708</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00713\"></a><span class=\"lineno\">  713</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetEmail() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00714\"></a><span class=\"lineno\">  714</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00722\"></a><span class=\"lineno\">  722</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> GetVersion( LONG&amp; out_major, LONG&amp; out_minor ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00723\"></a><span class=\"lineno\">  723</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00729\"></a><span class=\"lineno\">  729</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetLanguage() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00730\"></a><span class=\"lineno\">  730</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00734\"></a><span class=\"lineno\">  734</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetFilename() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00735\"></a><span class=\"lineno\">  735</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00740\"></a><span class=\"lineno\">  740</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutAuthor( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strName );</div>\n\
<div class=\"line\"><a name=\"l00741\"></a><span class=\"lineno\">  741</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00746\"></a><span class=\"lineno\">  746</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutURL( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strURL );</div>\n\
<div class=\"line\"><a name=\"l00747\"></a><span class=\"lineno\">  747</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00752\"></a><span class=\"lineno\">  752</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutEmail( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strEmail );</div>\n\
<div class=\"line\"><a name=\"l00753\"></a><span class=\"lineno\">  753</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00759\"></a><span class=\"lineno\">  759</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutVersion( LONG in_major, LONG in_minor );</div>\n\
<div class=\"line\"><a name=\"l00760\"></a><span class=\"lineno\">  760</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00776\"></a><span class=\"lineno\">  776</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutHelp( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strHelp );</div>\n\
<div class=\"line\"><a name=\"l00777\"></a><span class=\"lineno\">  777</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00784\"></a><span class=\"lineno\">  784</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> GetHelpButton() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00785\"></a><span class=\"lineno\">  785</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00809\"></a><span class=\"lineno\">  809</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutHelpButton( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strHelpButton );</div>\n\
<div class=\"line\"><a name=\"l00810\"></a><span class=\"lineno\">  810</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00816\"></a><span class=\"lineno\">  816</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutCategories( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a>&amp; in_strCat );</div>\n\
<div class=\"line\"><a name=\"l00817\"></a><span class=\"lineno\">  817</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00831\"></a><span class=\"lineno\">  831</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">CStatus</a> PutUserData( <span class=\"keyword\">const</span> <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a>&amp; in_userdata ) ;</div>\n\
<div class=\"line\"><a name=\"l00832\"></a><span class=\"lineno\">  832</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00837\"></a><span class=\"lineno\">  837</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> GetUserData( ) <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00838\"></a><span class=\"lineno\">  838</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00839\"></a><span class=\"lineno\">  839</span>&#160;    <span class=\"keyword\">private</span>:</div>\n\
<div class=\"line\"><a name=\"l00840\"></a><span class=\"lineno\">  840</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a> * operator&amp;() <span class=\"keyword\">const</span>;</div>\n\
<div class=\"line\"><a name=\"l00841\"></a><span class=\"lineno\">  841</span>&#160;    <a class=\"code\" href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a> * operator&amp;();</div>\n\
<div class=\"line\"><a name=\"l00842\"></a><span class=\"lineno\">  842</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00843\"></a><span class=\"lineno\">  843</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00844\"></a><span class=\"lineno\">  844</span>&#160;};</div>\n\
<div class=\"line\"><a name=\"l00845\"></a><span class=\"lineno\">  845</span>&#160;</div>\n\
<div class=\"line\"><a name=\"l00846\"></a><span class=\"lineno\">  846</span>&#160;<span class=\"preprocessor\">#endif // __XSIPluginRegistrar_H__</span></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CRef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">XSI::CRef</a></div><div class=\"ttdoc\">This class is used to reference Softimage objects. Each instance of an CRef maintains a link with onl...</div><div class=\"ttdef\"><b>Definition:</b> xsi_ref.h:142</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_a820a1cd00108d15bee3d809e341c6f95\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#a820a1cd00108d15bee3d809e341c6f95\">XSI::siFilterType</a></div><div class=\"ttdeci\">siFilterType</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:2056</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1PluginRegistrar_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">XSI::PluginRegistrar</a></div><div class=\"ttdoc\">This class provides functions for registering a PluginItem in Softimage. </div><div class=\"ttdef\"><b>Definition:</b> xsi_pluginregistrar.h:60</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1SIObject_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">XSI::SIObject</a></div><div class=\"ttdoc\">SIObject derives from CBase and acts as the base class for the Softimage Object Model library...</div><div class=\"ttdef\"><b>Definition:</b> xsi_siobject.h:66</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CValue_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">XSI::CValue</a></div><div class=\"ttdoc\">The CValue object provides the convenience of a loosely typed variable inside a strictly typed langua...</div><div class=\"ttdef\"><b>Definition:</b> xsi_value.h:159</div></div>\n\
<div class=\"ttc\" id=\"xsi__siobject_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__siobject_8h.html\">xsi_siobject.h</a></div><div class=\"ttdoc\">SIObject class declaration. </div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_ad483c77b3d997caca1f369db99c1e68b\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#ad483c77b3d997caca1f369db99c1e68b\">XSI::siClassID</a></div><div class=\"ttdeci\">siClassID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1537</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CString_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">XSI::CString</a></div><div class=\"ttdoc\">Character strings in the Softimage SDK are represented with the CString class. CString consist of a v...</div><div class=\"ttdef\"><b>Definition:</b> xsi_string.h:76</div></div>\n\
<div class=\"ttc\" id=\"xsi__pluginitem_8h_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/xsi__pluginitem_8h.html\">xsi_pluginitem.h</a></div><div class=\"ttdoc\">PluginItem class declaration. </div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1CStatus_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1CStatus.html\">XSI::CStatus</a></div><div class=\"ttdoc\">Encapsulates status data types for error handling purpose. The class also exposes methods to query an...</div><div class=\"ttdef\"><b>Definition:</b> xsi_status.h:36</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1PluginItem_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1PluginItem.html\">XSI::PluginItem</a></div><div class=\"ttdoc\">The PluginItem class contains the information on each item of a plug-in. </div><div class=\"ttdef\"><b>Definition:</b> xsi_pluginitem.h:38</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_af9700f1d68da1287ef23c3f26687bc2a\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#af9700f1d68da1287ef23c3f26687bc2a\">XSI::siMenuAnchorPoints</a></div><div class=\"ttdeci\">siMenuAnchorPoints</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:2187</div></div>\n\
<div class=\"ttc\" id=\"namespaceXSI_html_afb6ebbe7710e6898a918148eb7c6b0e5\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/namespaceXSI.html#afb6ebbe7710e6898a918148eb7c6b0e5\">XSI::siEventID</a></div><div class=\"ttdeci\">siEventID</div><div class=\"ttdef\"><b>Definition:</b> xsi_decl.h:1334</div></div>\n\
<div class=\"ttc\" id=\"classXSI_1_1ICENodeDef_html\"><div class=\"ttname\"><a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">XSI::ICENodeDef</a></div><div class=\"ttdoc\">ICENodeDef objects are used for describing a unique custom ICENode object. Instances of this object a...</div><div class=\"ttdef\"><b>Definition:</b> xsi_icenodedef.h:36</div></div>\n\
</div><!-- fragment --></div><!-- contents -->\n\
</div><!-- doc-content -->\n\
          <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br></div>\n\
   </div></body>\n\
</html>\n\
";