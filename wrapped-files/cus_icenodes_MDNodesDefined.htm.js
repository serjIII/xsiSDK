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
      <meta name=\"topicid\" content=\"GUID-E3D541EC-721F-474E-9686-78FC672B1483\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is a Custom ICENode?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E3D541EC-721F-474E-9686-78FC672B1483\"></a></span><div class=\"head\">\n\
            <h1>What is a Custom ICENode?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-93A75E97-E970-420A-82B8-6464930401CD\"></a></span>Custom ICENodes are regular <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_i_c_e_node.html\">ICENodes</a> implemented as self-installable plug-ins with the C++ API. Like built-in ICENodes,\n\
            a custom ICENode reads in data, processes it and then writes out the data. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8E5437A-8953-435B-81C4-4761600B283D\"></a></span>An ICENode can be used along with other custom or built-in ICENodes to create compound\n\
            nodes. Input and output data comes from the other ICENodes in a graph: the data flows\n\
            along each ICENode encapsulated in single or 2D array. The type of data encapsulation\n\
            is specified when a new ICENode is registered in Softimage. For example, an ICENode\n\
            can be defined with an input connection of float and an output connection of float\n\
            vectors. \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"SoftimageUser\");\n\
	in_reg.PutName(L\"MySimpleICENode Plugin\");\n\
\n\
	enum IDs\n\
	{\n\
		ID_InPort = 0,\n\
		ID_OutPort = 1,\n\
		ID_InGroup = 100,\n\
		ID_TMAP = 400,\n\
		ID_SMAP,\n\
		ID_CMAP,\n\
		ID_UNDEF = UINT_MAX\n\
	};\n\
\n\
	ICENodeDef nodeOpDef;\n\
	nodeOpDef = Application().GetFactory().CreateICENodeDef(L\"MySimpleICENode\");\n\
\n\
	// Add input port and group.\n\
	CStatus st;\n\
	st = nodeOpDef.AddPortGroup( ID_InGroup );\n\
	st.AssertSucceeded( ) ;\n\
\n\
	st = nodeOpDef.AddInputPort( \n\
		ID_InPort, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> (defined in IDs enum)\n\
		ID_InGroup, // <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> of group to add port to\n\
		siICENodePortDataFloat, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeEvaluationContextAny, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"InFloats\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"InFloats			\"// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// Add output port.\n\
	st = nodeOpDef.AddOutputPort( \n\
		ID_OutPort, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> (defined in IDs enum)\n\
		siICENodePortDataFloat, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeEvaluationContextAny, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"Out2DVectors\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"Out2DVectors 		\"// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// Register a new ICENode definition\n\
	PluginItem nodeItem = in_reg.RegisterICENode( nodeOpDef );\n\
\n\
	// Set the new ICENode category\n\
	nodeItem.PutCategories(L\"ICENode Category Sample\");\n\
\n\
	return CStatus::OK;\n\
}</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B5657E2-D0E5-43BA-9300-FBA351ECB641\"></a></span>The <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> callback is typically called in a multi-threaded context managed by Softimage, so\n\
            you don\'t have to worry about thread locking when reading or writing the data passed\n\
            to a custom <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_i_c_e_node.html\">ICENode</a>. Evaluation threads are created by Softimage and assigned on a per-processor basis,\n\
            so there will be one thread created per processor on your machine. The data is process\n\
            in several passes where each pass is assigned to a thread. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-E773A8B9-455D-41A1-A411-240C1FE9DA75\"></a></span>You can also tell Softimage to process your custom ICENode in a single-thread or in\n\
            multi-phase processing. Single-threading processing is often required when you need\n\
            to access all the input data in one single pass. For instance you could create a node\n\
            to compute the bounding-box of a geometry which requires access to the entire set\n\
            of point positions in one pass. See <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_ICENodeProcessingSingleThread.htm\">Single-Thread Custom ICENode</a></span> for more information. Multi-phase processing gives more control on the ports to evaluate\n\
            and the context data types to process. See <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_MultiPhaseCustomICENode.htm\">Multi-Phase Custom ICENode</a></span> for more information. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-216FF077-96E8-4338-A936-8B41FBF341E6\"></a></span> See the <a href=\"#!/url=./examples/Addons/CustomICENodes/netview_CustomICENodes.htm\">Custom ICENode</a> example located in the examples folder of the Softimage SDK installation directory.\n\
            \n\
         </p>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";