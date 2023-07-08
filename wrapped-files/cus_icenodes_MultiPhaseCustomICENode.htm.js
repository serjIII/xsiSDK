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
      <meta name=\"topicid\" content=\"GUID-C2360024-6F13-4514-9862-9F5B892CCBC1\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: multi-phase processing\" />\n\
      <meta name=\"indexterm\" content=\"troubleshooting: restrictions on ICE nodes\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: restrictions\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: troubleshooting\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Multi-Phase Custom ICENode</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"XSI::siICENodeMultiEvaluationPhase\", \"si_cpp/namespaceXSI.html#a2e77132c412f0b988ff1e9b88ba0fe9aae9f32fd23b51a1afbf5c165ab277fa27\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"points\", \"si_cpp/group__RenderMapDefine.html#ga7b51c5e95877ebaeb51314f8731f55f6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C2360024-6F13-4514-9862-9F5B892CCBC1\"></a></span><div class=\"head\">\n\
            <h1>Multi-Phase Custom ICENode</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-55944B6A-3FC5-401C-8C73-22461B41DD69\"></a></span> The multi-phase processing model allows custom nodes to process the input data in\n\
               single or multiple phases, where each phase can contain the input ports to process\n\
               grouped in similar contexts. One of the main goals of the multi-phase evaluation model\n\
               is to optimize the way input ports are evaluated. For instance, you could pull one\n\
               port in phase 0 and then decide which ports to pull in subsequent phases based on\n\
               the data read in phase 0. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA3360C2-C312-4493-B603-214D3B085494\"></a></span>The multi-phase evaluation model has the following characteristics: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_B122398963924D01862FFFBD5AFA4C74\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9D07801B-5638-4C95-9F7D-E521A2A35A1C\"></a></span>You can specify what port(s) to pull for a specific evaluation phase. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E6973F94-3ADB-49DA-8876-AF6C452A4388\"></a></span>You have complete control on the port evaluation ordering. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-799501C6-64E2-4DBE-96D4-A1C51CC06B26\"></a></span>Specification of the input port data types is more flexible and doesn\'t impose any\n\
                     dependency constraints on the output port data types. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-613A5CCA-146C-4ED2-9C92-A0F29BB8D3E3\"></a></span>You have complete freedom for specifying input context types: no validation is performed\n\
                     by Softimage at load time. For instance, you could choose to connect the points of\n\
                     two objects with different topologies or two different data sets (for example, normals\n\
                     and points) from the same object. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B434E731-23FB-4203-BB9E-2CF2FDE06835\"></a></span>All phases are executed in single-threading mode except for the final phase which\n\
                     is processed in multi-threading mode. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D9E334B-01DE-4640-93A9-3B755A8B335A\"></a></span>The data pulled for each port is cached by Softimage and available for the entire\n\
                     duration of the evaluation. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-002E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C5CAA397-4055-4C07-88B5-91DDFFDA7576\"></a></span> Restrictions\n\
               </h2>    <span class=\"anchor_wrapper\"><a name=\"UL_30EACC32F4124CE6BD2422C67690ED2E\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C2D7C43-9B0F-4B8C-B77C-390C5E8D776F\"></a></span>Ports to pull must share the same context type, otherwise an error is raised. You\n\
                        can however mix singleton contexts with the phase context. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C78C453-2358-4590-90A9-840F063B7943\"></a></span>Ports to pull in the last phase must match the context type of the output port, otherwise\n\
                        an error is raised. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-35774211-D3F6-4358-99B6-DD30CA11B247\"></a></span>All phases but the last cannot be submitted without pulling ports. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-71C5190E-82C3-4C86-B4C9-2A7E81F06D8E\"></a></span>Ports must be pulled first in order to be accessible from the Evaluate callback. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-519CEA6A-7365-4618-8B97-A9C4BEBBFC50\"></a></span>The <a href=\"#!/url=./si_cmds/cb_ICENode_SubmitEvaluationPhaseInfo.html\">SubmitEvaluationPhaseInfo</a> callback must be supplied. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-9C18E630-7126-44FA-8364-EBD1FCAFC351\"></a></span><div class=\"note-warning\"><span class=\"label\">WARNING:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D0AB1F4B-CCBA-4A64-B74E-67D08E2AE2BC\"></a></span>It is crucial to follow these rules. Otherwise, your custom node can become unstable.\n\
                        \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-002F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6305EB7D-E709-4179-8CE1-64E54398F1A3\"></a></span>How does it work?\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D584BD1B-7E4F-4F30-B8F1-0F4E6B0F43CD\"></a></span>The following workflow illustrates the implementation of a typical multi-phase custom\n\
                  ICENode. For more details, see the <a href=\"#!/url=./examples/Addons/CustomICENodes/netview_CustomICENodes.htm\">RandomGridGenerator</a> example located in the Softimage SDK installation directory. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-2A368FE1-5F08-4550-A2EB-55491D45641A\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-7D8D5D79-C53E-46DB-8005-18815F8D28F3\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_MultiPhaseCustomICENode.htm#WSB2B58C11414F714EB9B26CD8E647E1E1-0030\">Register the node as multi-phase</a></span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DBD847B3-C96A-4DFF-AFCB-F865341F39F9\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_MultiPhaseCustomICENode.htm#WSB2B58C11414F714EB9B26CD8E647E1E1-0031\">Implement the SubmitEvaluationPhaseInfo callback.</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-278BCBCB-EBD6-49D8-B1BC-41E9509F6B4A\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_MultiPhaseCustomICENode.htm#WSB2B58C11414F714EB9B26CD8E647E1E1-0032\">Implement the Evaluate callback</a></span>. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-40300710-B57E-4989-A3E7-C0E836EE20A8\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DECD85C1-99BF-476C-83CD-F3F85524CB50\"></a></span>The <a href=\"#!/url=./si_cmds/callbacks.html\">BeginEvaluate</a> and <a href=\"#!/url=./si_cmds/cb_ICENode_EndEvaluate.html\">EndEvaluate</a> callbacks are still optional and are only called during the last evaluation phase.\n\
                        \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0030\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2A54B743-4E01-4D88-8DEC-9E6084F30EC8\"></a></span>To register a multi-phase custom node\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C2599FA-710F-4D28-BD37-67FC86369D95\"></a></span>Use the ICE node definition to set the threading model to multi-phase (<a href=\"#!/url=./si_om/siICENodeThreadingModel.html\">siICENodeMultiEvaluationPhase</a>): \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CStatus RegisterMultiPhaseSample( PluginRegistrar&amp; in_reg )\n\
{\n\
	ICENodeDef nodeDef;\n\
	nodeDef = Application().GetFactory().CreateICENodeDef(L\"MultiPhaseSample\",L\"Multi Phase Sample\");\n\
	\n\
	CStatus st;\n\
	st = nodeDef.PutThreadingModel(<a href=\"javascript:void(0)\" data=\"XSI::siICENodeMultiEvaluationPhase\" class=\"a_multireflink\">XSI::siICENodeMultiEvaluationPhase</a>);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Add input ports and groups.\n\
	st = nodeDef.AddPortGroup(ID_G_100);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeDef.AddPortGroup(ID_G_102);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeDef.AddPortGroup(ID_G_103);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeDef.AddPortGroup(ID_G_114);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeDef.AddInputPort(ID_IN_condition,ID_G_100,siICENodeDataBool,siICENodeStructureSingle,siICENodeContextSingleton,L\"condition\",L\"condition\",true); \n\
	st.AssertSucceeded( ) ;\n\
	st = nodeDef.AddInputPort(ID_IN_true,ID_G_102,siICENodeDataFloat,siICENodeStructureSingle,siICENodeContextSingleton,L\"true\",L\"true\",1.0f);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeDef.AddInputPort(ID_IN_false,ID_G_103,siICENodeDataFloat,siICENodeStructureSingle,siICENodeContextSingleton,L\"false\",L\"false\",1.0f);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st =nodeDef.AddInputPort(ID_IN_points,ID_G_114,siICENodeDataVector3,siICENodeStructureSingle,siICENodeContextComponent0D|siICENodeContextSingleton,L\"<a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a>\",L\"<a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a>\",MATH::CVector3f(1.0,1.0,1.0));\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Add output ports.\n\
	st = nodeDef.AddOutputPort(ID_OUT_results,siICENodeDataVector3,siICENodeStructureSingle,siICENodeContextComponent0D|siICENodeContextSingleton,L\"results\",L\"results\");\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	PluginItem nodeItem = in_reg.RegisterICENode(nodeDef);\n\
	nodeItem.PutCategories(L\"Custom ICENode\");\n\
	return CStatus::OK;\n\
}</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0031\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2307577B-5FE4-4614-897C-F4A344C9F7D7\"></a></span>To implement the SubmitEvaluationPhaseInfo callback\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B09F8E18-E6F2-42FB-BC45-3E0C650EBD1E\"></a></span>The <a href=\"#!/url=./si_cmds/callbacks.html\">SubmitEvaluationPhaseInfo</a> callback is required for specifying the ports to pull for the current evaluation\n\
                     phase. The callback is called by Softimage indefinitely until you mark the current\n\
                     phase as the last phase with <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html#SetLastEvaluationPhase\">ICENodeContext::SetLastEvaluationPhase</a>. \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus MultiPhaseSample_SubmitEvaluationPhaseInfo( ICENodeContext&amp; in_ctxt )\n\
{\n\
	ULONG nPhase = in_ctxt.GetEvaluationPhaseIndex( );\n\
	switch( nPhase )\n\
	{\n\
		case 0:\n\
		{\n\
			in_ctxt.AddEvaluationPhaseInputPort( ID_IN_condition );\n\
		}\n\
		break;\n\
		\n\
		case 1:\n\
		{\n\
			bool bCondition = (bool)in_ctxt.GetUserData();\n\
			ULONG nPortToPull = bCondition ? ID_IN_true : ID_IN_false;\n\
			in_ctxt.PutUserData( nPortToPull );\n\
			in_ctxt.AddEvaluationPhaseInputPort( nPortToPull );\n\
			in_ctxt.AddEvaluationPhaseInputPort( ID_IN_points );\n\
			// This phase is the last one. All ports specified for phase 1 will be evaluated in multi-threaded batches.\n\
			in_ctxt.SetLastEvaluationPhase();\n\
		}\n\
		break;\n\
	}\n\
	return CStatus::OK;\n\
}</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0032\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-ACF5026F-FE0C-4564-931D-6A153A224622\"></a></span>To implement the Evaluate callback\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-463D80D0-4CB5-401F-A746-176A514FB302\"></a></span>The <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> callback is where you can process the intermediate phases in single-threading and\n\
                     the last phase in multi-threading. \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus MultiPhaseSample_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	// Read the current phase. \n\
	// Note: ULONG_MAX is returned if the last phase is being processed.\n\
	ULONG nPhase = in_ctxt.GetEvaluationPhaseIndex( );\n\
	\n\
	switch( nPhase )\n\
	{\n\
		case 0:\n\
		{\n\
			CDataArrayBool conditionData( in_ctxt, ID_IN_condition );\n\
			in_ctxt.PutUserData( conditionData[0] );\n\
			return CStatus::OK;\n\
		}\n\
		break;\n\
	};\n\
	\n\
	// Process the output port being evaluated in multi-threading.\n\
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );\n\
	\n\
	switch( out_portID )\n\
	{\n\
		case ID_OUT_results:\n\
		{\n\
			ULONG nPortToPull = (ULONG)in_ctxt.GetUserData();\n\
			\n\
			CDataArrayFloat scaleValue( in_ctxt, nPortToPull );\n\
			float fScaleValue = scaleValue[0];\n\
			\n\
			CDataArrayVector3f resultsData( in_ctxt );\n\
			CDataArrayVector3f <a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a>( in_ctxt, ID_IN_points );\n\
			\n\
			CIndexSet indexSet( in_ctxt );\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				resultsData[it] = <a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a>[it];\n\
				resultsData[it] *= fScaleValue;\n\
			}\n\
		}\n\
		break;\n\
	};\n\
	\n\
	return CStatus::OK;\n\
}</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";