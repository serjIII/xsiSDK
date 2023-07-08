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
      <meta name=\"topicid\" content=\"GUID-E3F23300-0E59-4CD7-B370-F72BE2B73D3E\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: single-threading\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Single-Thread Custom ICENode</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"XSI::siICENodeSingleThreading\", \"si_cpp/namespaceXSI.html#a2e77132c412f0b988ff1e9b88ba0fe9aadcb9b57357b7c73b1a953946848cee08\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E3F23300-0E59-4CD7-B370-F72BE2B73D3E\"></a></span><div class=\"head\">\n\
            <h1>Single-Thread Custom ICENode</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2994EDC-E390-440C-8440-81014A10D1BC\"></a></span>Custom <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a> are processed in multi-thread by default. Sometimes it may be required to have a\n\
               way of processing the node in one single thread instead. Single-thread processing\n\
               gives you the ability to access the entire input data set at once, as opposed to batch\n\
               processing as it\'s the case in multi-threading. Single-threading mode is useful for\n\
               implementing simple mathematical functions such as average, min, or max. You could\n\
               also use it to implement more sophisticated nodes such as bounding box generators\n\
               or particle collison detectors. The bounding box generator however can also be done\n\
               in multi-threading but will force you to perform extra operations in order to find\n\
               the min and max values among the values collected once the multi-thread processing\n\
               is done.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-072495A1-DAA8-4497-81B4-560DC07F443B\"></a></span>The first step to enable the single-thread processing is to set the threading model\n\
               to <a href=\"#!/url=./si_om/siICENodeThreadingModel.html\">siICENodeSingleThreadingModel</a>. This must be done during the node registration with <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#PutThreadingModel\">ICENodeDef::PutThreadingModel</a>. The input and output ports need to be defined with respect to the following rules:\n\
            </p><span class=\"anchor_wrapper\"><a name=\"GUID-23B12C32-44EE-4F38-B29F-C86F92A51FB4\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4560659B-4F3A-400D-8C67-EAC9D7A5048C\"></a></span>All input ports must be set with a singleton context (<a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextSingleton</a>), if not set with a singleton context then all input ports\' context must be constrained\n\
                     by their context type.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F70EAA2D-3B2F-4056-A009-3DD14515A815\"></a></span>Output ports can be of any context type.\n\
                  </p> \n\
               </li>\n\
            </ol>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2321D89F-0C5C-4CDF-9813-4B12919BB2AC\"></a></span>If the first rule is not met, Softimage will log an error at registration time and\n\
               then abort the ICENode registration.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-33AFD636-5AA4-42A2-908D-E48F8B9F9D17\"></a></span>The following example demonstrates how the single-threading model can be used to generate\n\
               a bounding box out of a geometry vertices:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"Softimage\");\n\
	in_reg.PutName(L\"BBoxGenerator Plugin\");\n\
	in_reg.PutVersion(1,0);\n\
	\n\
	ICENodeDef nodeOpDef;\n\
	nodeOpDef = Application().GetFactory().CreateICENodeDef(L\"BBoxGenerator\");\n\
	\n\
	// Set the threading model to single-thread\n\
	CStatus st;\n\
	st = nodeOpDef.PutThreadingModel(<a href=\"javascript:void(0)\" data=\"XSI::siICENodeSingleThreading\" class=\"a_multireflink\">XSI::siICENodeSingleThreading</a>);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Add input ports and groups.\n\
	st = nodeOpDef.AddPortGroup(ID_G_100);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeOpDef.AddInputPort(\n\
		ID_IN_vector3, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		ID_G_100, // group <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodeDataVector3, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeEvaluationContextAny, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"vector3\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"vector3\", // port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		MATH::CVector3f(1.0,1.0,1.0)// default value\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Add output ports.\n\
	st = nodeOpDef.AddOutputPort(\n\
		ID_OUT_minPos, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodeDataVector3, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeContextSingleton, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"minPos\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"minPos\"// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	st = nodeOpDef.AddOutputPort(\n\
		ID_OUT_maxPos, // port <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
		siICENodeDataVector3, // <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodePortStructureSingle, // structure <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		siICENodeContextSingleton, // context <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
		L\"maxPos\", // port <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
		L\"maxPos\"// port scripting <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	);\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	PluginItem nodeItem = in_reg.RegisterICENode(nodeOpDef);\n\
	nodeItem.PutCategories(L\"Custom ICENode\");\n\
	\n\
	return CStatus::OK;\n\
}\n\
XSIPLUGINCALLBACK CStatus BBoxGenerator_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	ULONG nPortID = in_ctxt.GetEvaluatedOutputPortID();\n\
	switch ( nPortID )\n\
	{\n\
		case ID_OUT_minPos:\n\
		case ID_OUT_maxPos:\n\
		{\n\
			Application xsi;\n\
			\n\
			CDataArrayVector3f posArray( in_ctxt, ID_IN_vector3 );\n\
			CDataArrayVector3f outData( in_ctxt );\n\
			CVector3f v3fMin(FLT_MAX,FLT_MAX,FLT_MAX);\n\
			CVector3f v3fMax(-FLT_MAX,-FLT_MAX,-FLT_MAX);\n\
			CIndexSet indexSet( in_ctxt );\n\
			for ( CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next() )\n\
			{\n\
				CVector3f&amp; v3f = posArray[ it ];\n\
				\n\
				if ( v3fMin.GetX() &gt; v3f.GetX() &amp;&amp; v3fMin.GetY() &gt; v3f.GetY() &amp;&amp; v3fMin.GetZ() &gt; v3f.GetZ() )\n\
				{\n\
					v3fMin = v3f;\n\
				}\n\
				else if ( v3fMax.GetX() &lt; v3f.GetX() &amp;&amp; v3fMax.GetY() &lt; v3f.GetY() &amp;&amp; v3fMax.GetZ() &lt; v3f.GetZ() )\n\
				{\n\
					v3fMax = v3f;\n\
				}\n\
			}\n\
			\n\
			if ( ID_OUT_minPos == nPortID ) \n\
			{\n\
				xsi.LogMessage( L\"BBox Min: \" + CString( v3fMin ) );\n\
				outData[ 0 ] = v3fMin;\n\
			}\n\
			else\n\
			{\n\
				xsi.LogMessage( L\"BBox Max: \" + CString( v3fMax ) );\n\
				outData[ 0 ] = v3fMax;\n\
			}\n\
		}\n\
		break;\n\
	};\n\
	return CStatus::OK;\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";