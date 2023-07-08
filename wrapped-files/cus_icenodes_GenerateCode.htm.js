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
      <meta name=\"topicid\" content=\"GUID-58F0A69B-5781-4228-8DF0-04A42336B02F\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Code</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"xsi_application.h\", \"si_cpp/xsi__application_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_context.h\", \"si_cpp/xsi__context_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_pluginregistrar.h\", \"si_cpp/xsi__pluginregistrar_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_status.h\", \"si_cpp/xsi__status_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_icenodecontext.h\", \"si_cpp/xsi__icenodecontext_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_icenodedef.h\", \"si_cpp/xsi__icenodedef_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_command.h\", \"si_cpp/xsi__command_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_factory.h\", \"si_cpp/xsi__factory_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_longarray.h\", \"si_cpp/xsi__longarray_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_doublearray.h\", \"si_cpp/xsi__doublearray_8h.html\", \"C++ API Reference\", \"../\"]); \n\
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
reflinkdata.push([\"xsi_icegeometry.h\", \"si_cpp/xsi__icegeometry_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_iceportstate.h\", \"si_cpp/xsi__iceportstate_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_indexset.h\", \"si_cpp/xsi__indexset_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_dataarray.h\", \"si_cpp/xsi__dataarray_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_dataarray2D.h\", \"si_cpp/xsi__dataarray2D_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CStatus\", \"si_cpp/classXSI_1_1CStatus.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::PluginRegistrar\", \"si_cpp/classXSI_1_1PluginRegistrar.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-58F0A69B-5781-4228-8DF0-04A42336B02F\"></a></span><div class=\"head\">\n\
            <h1>Code</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-21171FEF-D891-4187-BE16-DC952C36CFE2\"></a></span>The <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_Registering.htm\">ICENode</a></span> registration and <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> callback code is generated by default. Several check box options are offered to let\n\
               you generate more code to suit your needs.\n\
            </p><img src=\"../images/GUID-DA0D9421-7AD7-4F94-9032-5995C5592816-low.png\" /><div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0061\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A833D1D2-00EA-407F-B3E5-37CCC8DCF0F6\"></a></span>BeginEvaluate callback\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C9F6109D-814F-4C91-8551-D7BA4399D77E\"></a></span>Generates the skeleton code for the optional <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a> callback.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0062\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B5B5B99C-F03B-4FB8-8A7E-6C6B381F95E2\"></a></span>EndEvaluate callback\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-488A7E28-2F82-4878-B6B0-788788E030AD\"></a></span>Generates the skeleton code for the optional <a href=\"#!/url=./si_cmds/cb_ICENode_EndEvaluate.html\">EndEvaluate</a> callback.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0063\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8FBFDA4E-18BF-4EB1-A805-E310569BA1F8\"></a></span>Init callback\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-391CC8EE-C936-4727-843A-9B7982A2C033\"></a></span>Generates the skeleton code for the optional Init callback.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0064\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D6D5AC6B-B204-4C48-B529-54950C639A97\"></a></span>Term callback\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF9AB649-6B4B-4332-8846-D064D221C433\"></a></span>Generates the skeleton code for the optional <a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a> callback.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0065\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B8071B4E-A6AF-4463-835B-F193E5082272\"></a></span>Add Sample Code\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA9E200F-2540-406F-BA60-FDC4C968E625\"></a></span>Adds extra code to get you started for each function. This includes helpful comments\n\
                  explaining how to code the blocks.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0066\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0797E550-23A9-49C8-8B5F-DBDB605A7237\"></a></span>Add Debug Trace\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C19070EC-E9EA-4E1C-875B-692A7E3A1D8A\"></a></span>Inserts a call to print the location at the beginning of each function. For example:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application().LogMessage(L\"MyCustomICENode_EndEvaluate called\",siVerboseMsg);</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0067\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-98B3BD8D-CB56-447B-AB73-4D56C7CFFE52\"></a></span>Generate Code button\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8A4DA68-F0AB-4D09-B179-CDFDCE0B6848\"></a></span>The wizard will generate code that looks similar to the following snippet:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// My Custom ICENode Plugin\n\
// Initial code generated by Softimage SDK Wizard\n\
// Executed Fri May 15 21:24:29 EDT 2009 by greena\n\
// \n\
// \n\
// Tip: You need to compile the generated code before you can load the plug-in.\n\
// After you compile the plug-in, you can load it by clicking Update All in the Plugin Manager.\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_application.h\" class=\"a_multireflink\">xsi_application.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_context.h\" class=\"a_multireflink\">xsi_context.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_pluginregistrar.h\" class=\"a_multireflink\">xsi_pluginregistrar.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_status.h\" class=\"a_multireflink\">xsi_status.h</a>&gt;\n\
\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_icenodecontext.h\" class=\"a_multireflink\">xsi_icenodecontext.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_icenodedef.h\" class=\"a_multireflink\">xsi_icenodedef.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_command.h\" class=\"a_multireflink\">xsi_command.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_factory.h\" class=\"a_multireflink\">xsi_factory.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_longarray.h\" class=\"a_multireflink\">xsi_longarray.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_doublearray.h\" class=\"a_multireflink\">xsi_doublearray.h</a>&gt;\n\
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
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_icegeometry.h\" class=\"a_multireflink\">xsi_icegeometry.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_iceportstate.h\" class=\"a_multireflink\">xsi_iceportstate.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_indexset.h\" class=\"a_multireflink\">xsi_indexset.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_dataarray.h\" class=\"a_multireflink\">xsi_dataarray.h</a>&gt;\n\
#include &lt;<a href=\"javascript:void(0)\" data=\"xsi_dataarray2D.h\" class=\"a_multireflink\">xsi_dataarray2D.h</a>&gt;\n\
\n\
// Defines port, group and map identifiers used for registering the ICENode\n\
enum IDs\n\
{\n\
	ID_IN_InPort = 0,\n\
	ID_IN_InPort2 = 1,\n\
	ID_G_100 = 100,\n\
	ID_OUT_OutPort = 200,\n\
	ID_TYPE_CNS = 400,\n\
	ID_STRUCT_CNS,\n\
	ID_CTXT_CNS,\n\
	ID_UNDEF = ULONG_MAX\n\
};\n\
\n\
<a href=\"javascript:void(0)\" data=\"XSI::CStatus\" class=\"a_multireflink\">XSI::CStatus</a> RegisterMyCustomICENode( <a href=\"javascript:void(0)\" data=\"XSI::PluginRegistrar\" class=\"a_multireflink\">XSI::PluginRegistrar</a>&amp; in_reg );\n\
using namespace XSI; \n\
\n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"greena\");\n\
	in_reg.PutName(L\"My Custom ICENode Plugin\");\n\
	in_reg.PutVersion(1,0);\n\
	\n\
	RegisterMyCustomICENode( in_reg );\n\
	\n\
	//RegistrationInsertionPoint - do not remove this line\n\
	\n\
	return CStatus::OK;\n\
}\n\
\n\
XSIPLUGINCALLBACK CStatus XSIUnloadPlugin( const PluginRegistrar&amp; in_reg )\n\
{\n\
	CString strPluginName;\n\
	strPluginName = in_reg.GetName();\n\
	Application().LogMessage(strPluginName + L\" has been unloaded.\",siVerboseMsg);\n\
	return CStatus::OK;\n\
}\n\
\n\
CStatus RegisterMyCustomICENode( PluginRegistrar&amp; in_reg )\n\
{\n\
	ICENodeDef nodeDef;\n\
	nodeDef = Application().GetFactory().CreateICENodeDef(L\"MyCustomICENode\",L\"My Custom ICENode\");\n\
	CStatus st;\n\
	\n\
	st = nodeDef.PutColor(154,188,102);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Add custom types definition.\n\
	st = nodeDef.DefineCustomType(L\"MyCustomDataType\",L\"MyCustomDataType\",L\"MyCustomDataType\",255,8,255);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Add input ports and groups.\n\
	st = nodeDef.AddPortGroup(ID_G_100);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeDef.AddInputPort(ID_IN_InPort,ID_G_100,siICENodeDataFloat,siICENodeStructureSingle,siICENodeContextSingleton,L\"InPort\",L\"InPort\",1.0f,ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeDef.AddInputPort(ID_IN_InPort2,undefined,siICENodeDataFloat,siICENodeStructureArray,siICENodeContextAny,L\"InPort2\",L\"InPort2\",1.0f,ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Add output ports.\n\
	CStringArray OutPortCustomType(1);\n\
	OutPortCustomType[0] = L\"MyCustomDataType\";\n\
	\n\
	st = nodeDef.AddOutputPort(ID_OUT_OutPort,siICENodeDataCustomType,OutPortCustomType,siICENodeStructureSingle,siICENodeContextAny,L\"OutPort\",L\"OutPort\",ID_UNDEF,ID_UNDEF,ID_CTXT_CNS);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	PluginItem nodeItem = in_reg.RegisterICENode(nodeDef);\n\
	nodeItem.PutCategories(L\"Custom ICENode\");\n\
	\n\
	return CStatus::OK;\n\
}\n\
\n\
XSIPLUGINCALLBACK CStatus MyCustomICENode_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	// The current output port being evaluated...\n\
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );\n\
 \n\
	switch( out_portID )\n\
	{		\n\
		case ID_OUT_OutPort :\n\
		{\n\
			// Get the output port array ...			\n\
			CDataArrayCustomType outData( in_ctxt );\n\
			\n\
 			// Get the input <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> buffers for each port\n\
			CDataArrayFloat InPortData( in_ctxt, ID_IN_InPort );\n\
			CDataArray2DFloat InPort2Data( in_ctxt, ID_IN_InPort2 );\n\
			\n\
 			// We need a CIndexSet to iterate over the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> 		\n\
			CIndexSet indexSet( in_ctxt );\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				// Add code to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> output port...\n\
				Application().LogMessage( CString( InPortData[it] ) );\n\
				CDataArray2DFloat::Accessor InPort2SubArray = InPort2Data[it];\n\
				for (ULONG i=0; i&lt;InPort2SubArray.GetCount( ); i++)\n\
				{\n\
					Application().LogMessage( CString( InPort2SubArray[i] ) );\n\
				}\n\
				\n\
				\n\
			}\n\
		}\n\
		break;\n\
		\n\
		// Other output ports...\n\
	};\n\
	\n\
	return CStatus::OK;\n\
}</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";