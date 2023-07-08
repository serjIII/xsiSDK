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
      <meta name=\"topicid\" content=\"GUID-5490C3B8-5548-4EBC-B95C-49DFF430D21E\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Element Generator Custom ICENodes</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"xsi_application.h\", \"si_cpp/xsi__application_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_context.h\", \"si_cpp/xsi__context_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_pluginregistrar.h\", \"si_cpp/xsi__pluginregistrar_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_status.h\", \"si_cpp/xsi__status_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_factory.h\", \"si_cpp/xsi__factory_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_math.h\", \"si_cpp/xsi__math_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_vector3f.h\", \"si_cpp/xsi__vector3f_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_indexset.h\", \"si_cpp/xsi__indexset_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_dataarray.h\", \"si_cpp/xsi__dataarray_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"size\", \"si_cpp/group__RenderMapDefine.html#gaa9831b27d43e13316c674746b6efccb1\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5490C3B8-5548-4EBC-B95C-49DFF430D21E\"></a></span><div class=\"head\">\n\
            <h1>Element Generator Custom ICENodes</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFC22015-38E0-46D1-8B6D-4F44AA4F7A26\"></a></span>Element generator nodes are like regular custom <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a> with the additional capability to define the number of elements to process during\n\
               an evaluation. For now, this feature can only be used to generate particles. The element\n\
               generator capability is enabled by setting one or more output ports context to <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextElementGenerator</a> during the ICENode registration phase. The siICENodeContextElementGenerator context\n\
               is not compatible with other contexts and must be the only one specified.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-92FE1F4B-DAD2-4B51-A5F9-0095477A3BF4\"></a></span>Some simple registration rules must be followed when defining the element generator\n\
               ports:\n\
            </p><span class=\"anchor_wrapper\"><a name=\"GUID-4465B979-AF81-4267-A639-51B83C1C096C\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F331C122-5CEF-4817-8522-495D75A5BD94\"></a></span>All input ports must be defined with a singleton context (<a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextSingleton</a>).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C5100655-1DAC-47E9-AC93-573BCBCA6825\"></a></span>All output ports must be defined with a <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextSingleton</a> or <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextElementGenerator</a>.\n\
                  </p> \n\
               </li>\n\
            </ol>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-71B6CE9A-3A0C-4BE3-8A93-7BF2B664F717\"></a></span>If these rules are not met, Softimage will log an error at registration time and then\n\
               abort the ICENode registration.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-89BF277F-23F2-4993-92BE-646538F85E8B\"></a></span>The number of elements to process must be specified in the <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a> callback with <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html#PutNumberOfElementsToProcess\">MDNodeContext::PutNumberOfElementsToProcess</a>. Exceptionally, accessing input port data from the BeginEvaluate callback is supported\n\
               for generator nodes. Softimage issues an error if the BeginEvaluate callback is missing.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C2B65AA-6942-4F23-A060-8EE7A463885F\"></a></span>The following ICENode example demonstrates the element generator feature by generating\n\
               a 2D particle grid:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_application.h\" class=\"a_multireflink\">xsi_application.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_context.h\" class=\"a_multireflink\">xsi_context.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_pluginregistrar.h\" class=\"a_multireflink\">xsi_pluginregistrar.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_status.h\" class=\"a_multireflink\">xsi_status.h</a>&gt;\n\
#include &lt;xsi_mdnodecontext.h&gt;\n\
#include &lt;xsi_mdnodedef.h&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_factory.h\" class=\"a_multireflink\">xsi_factory.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_math.h\" class=\"a_multireflink\">xsi_math.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_vector3f.h\" class=\"a_multireflink\">xsi_vector3f.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_indexset.h\" class=\"a_multireflink\">xsi_indexset.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_dataarray.h\" class=\"a_multireflink\">xsi_dataarray.h</a>&gt;\n\
\n\
// Defines port, group and map identifiers used for registering the ICENode\n\
enum IDs\n\
{\n\
	ID_Size = 1,\n\
	ID_G_100 = 100,\n\
	ID_Vector3D = 200,\n\
	ID_Elements = 201,\n\
	ID_TMAP = 400,\n\
	ID_SMAP,\n\
	ID_CMAP,\n\
	ID_UNDEF = ULONG_MAX\n\
};\n\
\n\
using namespace XSI;\n\
 \n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"Softimage\");\n\
	in_reg.PutName(L\"ICENodeGenerator Plugin\");\n\
	in_reg.PutVersion(1,0);\n\
	ICENodeDef nodeOpDef;\n\
	nodeOpDef = Application().GetFactory().CreateICENodeDef( L\"ICENodeGenerator\" );\n\
	CStatus st;\n\
	\n\
	// Add a port to specify the <a href=\"javascript:void(0)\" data=\"size\" class=\"a_multireflink\">size</a> of the grid to generate\n\
	st = nodeOpDef.AddPortGroup(ID_G_100);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeOpDef.AddInputPort(\n\
		ID_Size, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		ID_G_100, // group <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodePortDataLong, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeContextSingleton, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"Size\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"Size\", // port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		10			// default value\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Add output ports.\n\
	st = nodeOpDef.AddOutputPort(\n\
		ID_Vector3D, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodeDataVector3, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeContextElementGenerator, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"OutVector3D\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"OutVector3D\"// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeOpDef.AddOutputPort(\n\
		ID_Elements, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodePortDataLong, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeContextSingleton, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"Elements\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"Elements 				\"// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	PluginItem nodeItem = in_reg.RegisterICENode(nodeOpDef);\n\
	nodeItem.PutCategories(L\"Custom ICENode\");\n\
	\n\
	return CStatus::OK;\n\
}\n\
XSIPLUGINCALLBACK CStatus ICENodeGenerator_BeginEvaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	CDataArrayLong inSize( in_ctxt, ID_Size );\n\
	\n\
	// Total number of elements to generate\n\
	ULONG nSize = inSize[ 0 ];\n\
	ULONG nElements = nSize * nSize;\n\
	in_ctxt.PutNumberOfElementsToProcess( nElements );\n\
	\n\
	return CStatus::OK;\n\
}\n\
XSIPLUGINCALLBACK CStatus ICENodeGenerator_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	// The current output port being evaluated...\n\
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );\n\
	\n\
	switch( out_portID )\n\
	{\n\
		case ID_Vector3D:\n\
		{\n\
			// Set the output port array with the new elements\n\
			CDataArrayVector3f outData( in_ctxt );\n\
			CDataArrayLong inSize( in_ctxt, ID_Size );\n\
			\n\
			ULONG nSize = inSize[ 0 ];\n\
			CIndexSet indexSet( in_ctxt );\n\
			\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				ULONG nAbsIndex = it.GetAbsoluteIndex( );\n\
				\n\
				ULONG x = nAbsIndex % nSize;\n\
				ULONG y = nAbsIndex / nSize;\n\
				MATH::CVector3f v;\n\
				v.PutX( x * 1.0f - nSize/2 );\n\
				v.PutY( y * 1.0f - nSize/2 );\n\
				v.PutZ( 0.0f );\n\
				outData[ it ] = v;\n\
			}\n\
		}\n\
		break;\n\
		\n\
		case ID_Elements:\n\
		{\n\
			// Returns the number of elements to generate\n\
			CDataArrayLong outData( in_ctxt );\n\
			outData[ 0 ] = in_ctxt.GetNumberOfElementsToGenerate( );\n\
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