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
      <meta name=\"topicid\" content=\"GUID-10CA4ADE-2660-4F14-8DB8-0C34B302D49B\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>CustomVector3ToScalar Example</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"xsi_application.h\", \"si_cpp/xsi__application_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_context.h\", \"si_cpp/xsi__context_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_pluginregistrar.h\", \"si_cpp/xsi__pluginregistrar_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_status.h\", \"si_cpp/xsi__status_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_factory.h\", \"si_cpp/xsi__factory_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_math.h\", \"si_cpp/xsi__math_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_vector2f.h\", \"si_cpp/xsi__vector2f_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_vector3f.h\", \"si_cpp/xsi__vector3f_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_vector4f.h\", \"si_cpp/xsi__vector4f_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_matrix3f.h\", \"si_cpp/xsi__matrix3f_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_matrix4f.h\", \"si_cpp/xsi__matrix4f_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_rotationf.h\", \"si_cpp/xsi__rotationf_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_quaternionf.h\", \"si_cpp/xsi__quaternionf_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_color4f.h\", \"si_cpp/xsi__color4f_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_shape.h\", \"si_cpp/xsi__shape_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_indexset.h\", \"si_cpp/xsi__indexset_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_dataarray.h\", \"si_cpp/xsi__dataarray_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_dataarray2D.h\", \"si_cpp/xsi__dataarray2D_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CStatus\", \"si_cpp/classXSI_1_1CStatus.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::PluginRegistrar\", \"si_cpp/classXSI_1_1PluginRegistrar.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-10CA4ADE-2660-4F14-8DB8-0C34B302D49B\"></a></span><div class=\"head\">\n\
            <h1>CustomVector3ToScalar Example</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E1628B42-25E8-4110-9AF8-26ADB2AA0F1E\"></a></span>This summarizes the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> processing topic with a custom version of the built-in Vector3ToScalar ICENode.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_application.h\" class=\"a_multireflink\">xsi_application.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_context.h\" class=\"a_multireflink\">xsi_context.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_pluginregistrar.h\" class=\"a_multireflink\">xsi_pluginregistrar.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_status.h\" class=\"a_multireflink\">xsi_status.h</a>&gt;\n\
\n\
#include &lt;xsi_mdnodecontext.h&gt;\n\
#include &lt;xsi_mdnodedef.h&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_factory.h\" class=\"a_multireflink\">xsi_factory.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_math.h\" class=\"a_multireflink\">xsi_math.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_vector2f.h\" class=\"a_multireflink\">xsi_vector2f.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_vector3f.h\" class=\"a_multireflink\">xsi_vector3f.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_vector4f.h\" class=\"a_multireflink\">xsi_vector4f.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_matrix3f.h\" class=\"a_multireflink\">xsi_matrix3f.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_matrix4f.h\" class=\"a_multireflink\">xsi_matrix4f.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_rotationf.h\" class=\"a_multireflink\">xsi_rotationf.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_quaternionf.h\" class=\"a_multireflink\">xsi_quaternionf.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_color4f.h\" class=\"a_multireflink\">xsi_color4f.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_shape.h\" class=\"a_multireflink\">xsi_shape.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_indexset.h\" class=\"a_multireflink\">xsi_indexset.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_dataarray.h\" class=\"a_multireflink\">xsi_dataarray.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_dataarray2D.h\" class=\"a_multireflink\">xsi_dataarray2D.h</a>&gt;\n\
\n\
// Defines port, group and map identifiers used for registering the ICENode\n\
enum IDs\n\
{\n\
	ID_IN_v3 = 0,\n\
	ID_G_100 = 100,\n\
	ID_OUT_x = 200,\n\
	ID_OUT_y = 201,\n\
	ID_OUT_z = 202,\n\
	ID_TMAP = 400,\n\
	ID_SMAP,\n\
	ID_CMAP,\n\
	ID_UNDEF = ULONG_MAX\n\
};\n\
\n\
<a href=\"javascript:void(0)\" data=\"XSI::CStatus\" class=\"a_multireflink\">XSI::CStatus</a> RegisterCustomVector3ToScalar( <a href=\"javascript:void(0)\" data=\"XSI::PluginRegistrar\" class=\"a_multireflink\">XSI::PluginRegistrar</a>&amp; in_reg );\n\
\n\
using namespace XSI; \n\
\n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"Softimage\");\n\
	in_reg.PutName(L\"CustomVector3ToScalar Plugin\");\n\
	in_reg.PutEmail(L\"\");\n\
	in_reg.PutURL(L\"\");\n\
	in_reg.PutVersion(1,0);\n\
\n\
	RegisterCustomVector3ToScalar( in_reg );\n\
\n\
	//RegistrationInsertionPoint - do not remove this line\n\
\n\
	return CStatus::OK;\n\
}\n\
\n\
CStatus RegisterCustomVector3ToScalar( PluginRegistrar&amp; in_reg )\n\
{\n\
	ICENodeDef nodeOpDef;\n\
	nodeOpDef = Application().GetFactory().CreateICENodeDef(L\"CustomVector3ToScalar\");\n\
\n\
	CStatus st;\n\
\n\
	// Add input ports and groups.\n\
	st = nodeOpDef.AddPortGroup(ID_G_100);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	st = nodeOpDef.AddInputPort(\n\
		ID_IN_v3, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		ID_G_100, // group <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodeDataVector3, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeEvaluationContextComponent0D, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"v3\",					// port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"v3\",					// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		MATH::CVector3f(1.0,1.0,1.0), // default value\n\
		ID_UNDEF, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		ID_SMAP, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		ID_CMAP					// context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> contraint\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// Add output ports\n\
	st = nodeOpDef.AddOutputPort(\n\
		ID_OUT_x, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodePortDataFloat, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeEvaluationContextComponent0D, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"x\",					// port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"x\",					// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		ID_UNDEF, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		ID_SMAP, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		ID_CMAP					// context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> contraint\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	st = nodeOpDef.AddOutputPort(\n\
		ID_OUT_y, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodePortDataFloat, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeEvaluationContextComponent0D, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"y\",					// port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"y\",					// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		ID_UNDEF, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		ID_SMAP, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		ID_CMAP					// context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> contraint\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	st = nodeOpDef.AddOutputPort(\n\
		ID_OUT_z, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodePortDataFloat, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeEvaluationContextComponent0D, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"z\",					// port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"z\",					// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		ID_UNDEF, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		ID_SMAP, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> constraint\n\
		ID_CMAP					// context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> contraint\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	PluginItem nodeItem = in_reg.RegisterICENode(nodeOpDef);\n\
	nodeItem.PutCategories(L\"Custom ICENode Sample\");\n\
\n\
	return CStatus::OK;\n\
\n\
}\n\
\n\
XSIPLUGINCALLBACK CStatus CustomVector3ToScalar_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	// Get the output <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> array\n\
	CDataArrayFloat outData( in_ctxt );\n\
\n\
	// .. and the input array\n\
	CDataArrayVector3f inputData( in_ctxt, ID_IN_v3 );\n\
\n\
	// And the <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a>\n\
	CIndexSet indexSet( in_ctxt );\n\
\n\
	// Set the output <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> \n\
	ULONG outport_uniqid = in_ctxt.GetEvaluatedOutputPortID( );\n\
\n\
	switch( outport_uniqid )\n\
	{\n\
		case ID_OUT_x:\n\
		{\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				outData[it] = inputData[it].GetX();\n\
			}\n\
		}\n\
		break;\n\
\n\
		case ID_OUT_y:\n\
		{\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				outData[it] = inputData[it].GetY();\n\
			}\n\
		}\n\
		break;\n\
\n\
		case ID_OUT_z:\n\
		{\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				outData[it] = inputData[it].GetZ();\n\
			}\n\
		}\n\
		break;\n\
	};\n\
\n\
	return CStatus::OK;\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";