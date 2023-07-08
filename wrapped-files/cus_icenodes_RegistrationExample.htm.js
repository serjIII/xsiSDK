var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-54B95926-88E9-4110-85BB-52CE01EA655E\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Registration Example</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"xsi_application.h\", \"si_cpp/xsi__application_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_pluginregistrar.h\", \"si_cpp/xsi__pluginregistrar_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_status.h\", \"si_cpp/xsi__status_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_factory.h\", \"si_cpp/xsi__factory_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_math.h\", \"si_cpp/xsi__math_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_vector3f.h\", \"si_cpp/xsi__vector3f_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_indexset.h\", \"si_cpp/xsi__indexset_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_dataarray.h\", \"si_cpp/xsi__dataarray_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-54B95926-88E9-4110-85BB-52CE01EA655E\"></a></span><div class=\"head\">\n\
            <h1>Registration Example</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD4C769B-3B5E-4258-B8D7-699BE9E26278\"></a></span>This example demonstrates how to define and register an <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> with two input ports and two output ports:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_application.h\" class=\"a_multireflink\">xsi_application.h</a>&gt;\n\
#include &lt;xsi_mdnodecontext.h&gt;\n\
#include &lt;xsi_mdnodedef.h&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_pluginregistrar.h\" class=\"a_multireflink\">xsi_pluginregistrar.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_status.h\" class=\"a_multireflink\">xsi_status.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_factory.h\" class=\"a_multireflink\">xsi_factory.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_math.h\" class=\"a_multireflink\">xsi_math.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_vector3f.h\" class=\"a_multireflink\">xsi_vector3f.h</a>&gt; \n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_indexset.h\" class=\"a_multireflink\">xsi_indexset.h</a>&gt; \n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_dataarray.h\" class=\"a_multireflink\">xsi_dataarray.h</a>&gt;\n\
\n\
using namespace XSI; \n\
using namespace MATH; \n\
\n\
// user defined IDs\n\
enum IDs\n\
{\n\
	// groups\n\
	IdGr_In,\n\
\n\
	// ports\n\
	IdPort_InPos = 100,\n\
	IdPort_OutX,\n\
	IdPort_InValue,\n\
	IdPort_OutY,\n\
\n\
	// maps\n\
	typemapid = 200,\n\
	structmapid, \n\
	contextmapid,\n\
\n\
	UndefinedID = ULONG_MAX\n\
};\n\
\n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"Softimage\");\n\
	in_reg.PutName(L\"ICENode registration sample plugin\");\n\
	in_reg.PutVersion(1,0);\n\
\n\
	Application app ;\n\
\n\
	// Creates an ICENodeDef object from the factory\n\
	Factory factory = app.GetFactory();\n\
	ICENodeDef nodeOpDef = Application().GetFactory().CreateICENodeDef( in_name );\n\
\n\
	// Set the threading model to multi-threading (default)\n\
	CStatus st;\n\
	st = nodeOpDef.PutThreadingModel( siICENodeMultiThreading );\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// Create the input port\n\
	st = nodeOpDef.AddPortGroup( IdGr_In );\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// Create the input port of <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> Vector3f per vertex\n\
	siICENodeDataType nDataType = siICENodeDataVector3;\n\
	siICENodeStructureType nStructType = siICENodePortStructureSingle;\n\
	siICENodeContextType nContextType = siICENodeEvaluationContextComponent0D;\n\
\n\
	// constraint maps are not used for <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> and structure types, <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> them with the default ID\n\
	IDs typemapValue = UndefinedID;\n\
	IDs structmapValue = UndefinedID\n\
	IDs contextmapValue = contextmapid;\n\
\n\
	st = nodeOpDef.AddInputPort( \n\
		IdPort_InPos, // input port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \n\
		IdGr_In, // <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> of group to add port to\n\
		nDataType, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		nStructType, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		nContextType, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		L\"vector\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"vector\", // port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		MATH::CVector3f(1.0, 1.0, 1.0), // default value\n\
		typemapValue, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		structmapValue, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		contextmapValue			// context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// Create the input port of <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> Long with a \'wildcard\' context\n\
	nDataType = siICENodePortDataLong;\n\
	nStructType = siICENodePortStructureSingle;\n\
	nContextType = siICENodeEvaluationContextAny;\n\
\n\
	st = nodeOpDef.AddInputPort( \n\
		IdPort_InValue, // input port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \n\
		IdGr_In, // <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> of group to add port to\n\
		nDataType, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		nStructType, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		nContextType, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		L\"InValue\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"InValue\", // port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		55L, // default value\n\
		typemapValue, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		structmapValue, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		contextmapValue		// context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// Create 2 float output ports\n\
	nDataType = siICENodePortDataFloat;\n\
\n\
	// Note: IdPort_InPos and IdPort_inValue are context constrained by the output ports, \n\
	// if one of the output port context is <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> to siICENodeContextSingleton at \n\
	// connection time, these ports will also be <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> to siICENodeContextSingleton \n\
	// (and vice-versa)\n\
\n\
	st = nodeOpDef.AddOutputPort( \n\
		IdPort_OutX, // output port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \n\
		nDataType, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		nStructType, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		nContextType, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		L\"x\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"x\", // port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		typemapValue, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		structmapValue, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		contextmapValue		// context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	st = nodeOpDef.AddOutputPort( \n\
		IdPort_OutY, // output port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \n\
		nDataType, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		nStructType, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		nContextType, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> for port\n\
		L\"y\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"y\", // port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		typemapValue, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		structmapValue, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		contextmapValue		// context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// Register the new ICENode and add it to the Custom ICENode category\n\
	PluginItem nodeItem = in_reg.RegisterICENode(nodeOpDef);\n\
	nodeItem.PutCategories(L\"Custom ICENode Sample\");\n\
\n\
	return CStatus::OK;\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";