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
      <meta name=\"topicid\" content=\"GUID-54498174-330A-4125-9976-036159E33B9E\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Regular Custom ICENode</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"XSI::CStatus\", \"si_cpp/classXSI_1_1CStatus.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::PluginRegistrar\", \"si_cpp/classXSI_1_1PluginRegistrar.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"positions\", \"si_cpp/group__RenderMapDefine.html#ga4ff6c20401928cc896711bb86fab2870\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-54498174-330A-4125-9976-036159E33B9E\"></a></span><div class=\"head\">\n\
            <h1>Regular Custom ICENode</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E9B285CF-0764-4664-AFD4-53E8D6A18A88\"></a></span>Most custom <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a> are regular ICENodes processed in multi-threading mode. <a href=\"#!/url=./si_om/siICENodeDataType.html\">Data</a> and <a href=\"#!/url=./si_om/siICENodeStructureType.html\">structure</a> types define the port data type that gets propagated through other ICENodes and <a href=\"#!/url=./si_om/siICENodeContextType.html\">context</a> types specify the connection compatibility of custom node ports with other ICENode\n\
               ports. Mixing context types together is supported for both input and output ports\n\
               but must follow this rule:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D86B39A-F9F4-4645-B928-2BBE38B31F8D\"></a></span> <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextSingleton</a> can be mixed with\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A554AB92-5B68-4664-BD23-34E4739009BC\"></a></span> <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextComponent0D</a> and/or\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1B43AC0-2079-4100-BC5D-748E81BDD7B0\"></a></span> <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextComponent1D</a> and/or\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0EB53406-4F58-4EE1-ABF2-20B656783652\"></a></span> <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextComponent2D</a> and/or\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6DF291E2-21FC-4882-9019-621BB0982CAB\"></a></span> <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextComponent0D2D</a>. All ports defined with a mixed context type must be constrained with a context map\n\
                     ID.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-AC3F4676-1637-4068-B2B1-D777C62F1954\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F6EA717E-4B9E-4357-A5F4-03075C3186B0\"></a></span>Softimage will log an error at registration time if the above rule is not met, in\n\
                     which case the ICENode registration will be aborted.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-5536F8CF-A009-46F9-9B0F-284FDE49232D\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3DCE9CB-D32C-42B1-A913-7A636E39B25D\"></a></span>See the <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_CustomVector3ToScalarExample.htm\">CustomVector3ToScalar Example</a></span> for an example of how to create a regular ICENode.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0029\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-85DC128E-AB7D-4AD9-AF57-5AAF146A718C\"></a></span>Example: Custom ICENode Using Mixed Context Types:\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
enum IDs\n\
{\n\
	ID_IN_SINGLETON = 0,\n\
	ID_IN_COMPONENT0D = 1,\n\
	ID_IN_SINGLETON_OR_COMPONENT0D = 2,\n\
	ID_G_100 = 100,\n\
	ID_OUT_FLOAT_ARRAY = 200,\n\
	ID_OUT_VECTOR3F_ARRAY = 201,\n\
	ID_TYPE_CNS = 400,\n\
	ID_STRUCT_CNS,\n\
	ID_CTXT_CNS,\n\
	ID_UNDEF = ULONG_MAX\n\
};\n\
 \n\
<a href=\"javascript:void(0)\" data=\"XSI::CStatus\" class=\"a_multireflink\">XSI::CStatus</a> MixedContextSample_Register( <a href=\"javascript:void(0)\" data=\"XSI::PluginRegistrar\" class=\"a_multireflink\">XSI::PluginRegistrar</a>&amp; in_reg );\n\
 \n\
XSIPLUGINCALLBACK CStatus XSILoadPlugin( PluginRegistrar&amp; in_reg )\n\
{\n\
	in_reg.PutAuthor(L\"Softimage\");\n\
	in_reg.PutName(L\"MixedContextSample Plugin\");\n\
	in_reg.PutVersion(1,0);\n\
\n\
	MixedContextSample_Register( in_reg );\n\
\n\
	return CStatus::OK;\n\
}\n\
 \n\
CStatus MixedContextSample_Register( PluginRegistrar&amp; in_reg )\n\
{\n\
	ICENodeDef nodeDef;\n\
	nodeDef = Application().GetFactory().CreateICENodeDef(L\"MixedContextSample\");\n\
	CStatus st;\n\
\n\
	st = nodeDef.AddPortGroup( ID_G_100 );\n\
	st.AssertSucceeded();\n\
\n\
	// This port is a single integer.\n\
	st = nodeDef.AddInputPort( ID_IN_SINGLETON, \n\
		ID_G_100,\n\
		siICENodeDataLong,\n\
		siICENodeStructureSingle,\n\
		siICENodeContextSingleton,\n\
		L\"int_singleton\", L\"int_singleton\",\n\
		1L,\n\
		ID_UNDEF, ID_UNDEF, ID_UNDEF );\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// Array of <a href=\"javascript:void(0)\" data=\"positions\" class=\"a_multireflink\">positions</a> port.\n\
	st = nodeDef.AddInputPort( ID_IN_COMPONENT0D, \n\
		ID_G_100,\n\
		siICENodeDataVector3,\n\
		siICENodeStructureSingle,\n\
		siICENodeContextSingleton | siICENodeContextComponent0D,\n\
		L\"C0D\", L\"C0D\",\n\
		MATH::CVector3f(1.0,1.0,1.0),\n\
		ID_UNDEF, ID_UNDEF, ID_CTXT_CNS );\n\
	st.AssertSucceeded( ) ;\n\
\n\
	// A single float or an array of floats matching the <a href=\"javascript:void(0)\" data=\"positions\" class=\"a_multireflink\">positions</a> array count above.\n\
	st = nodeDef.AddInputPort( ID_IN_SINGLETON_OR_COMPONENT0D, \n\
		ID_G_100,\n\
		siICENodeDataFloat,\n\
		siICENodeStructureSingle,\n\
		siICENodeContextSingleton | siICENodeContextComponent0D,\n\
		L\"Singleton_or_C0D\", L\"Singleton_or_C0D\",\n\
		1.0f,\n\
		ID_UNDEF, ID_UNDEF, ID_CTXT_CNS );\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Port to output an array of float values\n\
	st = nodeDef.AddOutputPort( ID_OUT_FLOAT_ARRAY, \n\
		siICENodeDataFloat,\n\
		siICENodeStructureArray,\n\
		siICENodeContextSingleton | siICENodeContextComponent0D,\n\
		L\"OutFloatArray\", L\"OutFloatArray\",\n\
		ID_UNDEF, ID_UNDEF, ID_CTXT_CNS );\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	// Port to output an array of CVector3f values\n\
	st = nodeDef.AddOutputPort( ID_OUT_VECTOR3F_ARRAY, \n\
		siICENodeDataVector3,\n\
		siICENodeStructureSingle,\n\
		siICENodeContextSingleton | siICENodeContextComponent0D,\n\
		L\"OutVector3fArray\", L\"OutVector3fArray\",\n\
		ID_UNDEF, ID_UNDEF, ID_CTXT_CNS );\n\
	st.AssertSucceeded( ) ;\n\
	\n\
	PluginItem nodeItem = in_reg.RegisterICENode( nodeDef );\n\
	nodeItem.PutCategories( L\"Custom ICENode\" );\n\
	\n\
	return CStatus::OK;\n\
}\n\
 \n\
XSIPLUGINCALLBACK CStatus MixedContextSample_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	switch( (ULONG)in_ctxt.GetEvaluatedOutputPortID() )\n\
	{\n\
		case ID_OUT_FLOAT_ARRAY :\n\
		{\n\
			CDataArrayLong a_count( in_ctxt, ID_IN_SINGLETON );\n\
			LONG count = a_count[0];\n\
			CDataArray2DFloat aa_out( in_ctxt );\n\
			CDataArray2DFloat::Accessor a_out = aa_out.Resize( 0, count );\n\
			for( ULONG i = 0; i &lt; a_out.GetCount(); ++i ) \n\
			{\n\
				a_out[i] = (float)i;\n\
			}	\n\
		}\n\
		break;\n\
		\n\
		case ID_OUT_VECTOR3F_ARRAY :\n\
		{\n\
			CIndexSet indexSet( in_ctxt );\n\
			CDataArrayVector3f v3fArray( in_ctxt, ID_IN_COMPONENT0D );\n\
			CDataArrayFloat fArray( in_ctxt, ID_IN_SINGLETON_OR_COMPONENT0D );	\n\
			float fFact = fArray[0];\n\
			MATH::CVector3f v3f( fFact, fFact*2.0, -fFact );\n\
			CDataArrayVector3f outVector3f( in_ctxt );\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{ \n\
				fFact *= 1.1;\n\
				v3f.ScaleInPlace( fFact );\n\
				outVector3f[it] = v3f;\n\
			}\n\
		}\n\
		break;\n\
	};\n\
	\n\
	return CStatus::OK;\n\
}</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";