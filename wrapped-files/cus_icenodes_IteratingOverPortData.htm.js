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
      <meta name=\"topicid\" content=\"GUID-A810B67C-BF6F-44C7-B4C7-90DF1CE88DFF\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Iterating Over Port Data</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::MATH::CVector3f\", \"si_cpp/classXSI_1_1MATH_1_1CVector3f.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A810B67C-BF6F-44C7-B4C7-90DF1CE88DFF\"></a></span><div class=\"head\">\n\
            <h1>Iterating Over Port Data</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CBD72933-4617-43A6-BB7D-5136D37D6FB1\"></a></span>Given the following <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> ports:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
nodeOpDef.AddInputPort( ID_Port0, ID_Group0, siICENodePortDataLong, siICENodePortStructureSingle, siICENodeEvaluationContextAny, L\"Port_0\", L\"Port_0\" );\n\
nodeOpDef.AddInputPort( ID_Port1, ID_Group0, siICENodeDataVector3, siICENodePortStructureSingle, siICENodeEvaluationContextAny, L\"Port_1\", L\"Port_1\" );\n\
nodeOpDef.AddInputPort( ID_Port2, ID_Group0, siICENodePortDataFloat, siICENodePortStructureArray, siICENodeEvaluationContextAny, L\"Port_2\", L\"Port_2\" );\n\
nodeOpDef.AddOutputPort( ID_OutPort0, siICENodeDataVector3, siICENodePortStructureSingle, siICENodeEvaluationContextAny, L\"OutPort_0\", L\"OutPort_0\" );\n\
nodeOpDef.AddOutputPort( ID_OutPort1, siICENodePortDataFloat, siICENodePortStructureArray, siICENodeEvaluationContextAny, L\"OutPort_1\", L\"OutPort_1\" );\n\
nodeOpDef.AddOutputPort( ID_OutPort2, siICENodePortDataLong, siICENodePortStructureSingle, siICENodeEvaluationContextAny, L\"OutPort_2\", L\"OutPort_2\" );</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C7E6F34-0907-4A8B-828D-92C19C444945\"></a></span>The next block demonstrates how to iterate over the port data defined above and how\n\
               to filter out elements:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus SampleNode_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	// Switch over the output port being evaluated\n\
	ULONG outportID = in_ctxt.GetEvaluatedOutputPortID( );\n\
	\n\
	// Create the <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a>\n\
	CIndexSet indexSet( in_ctxt );\n\
	switch ( outportID )\n\
	{\n\
		// This section demonstrates a regular array iteration\n\
		case ID_OutPort0:\n\
		{\n\
			// Get the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> from port 0 and port 1\n\
			CDataArrayLong port0( in_ctxt, ID_Port0 );\n\
			CDataArrayVector3f port1( in_ctxt, ID_Port1 );\n\
			\n\
			// Get the output array\n\
			CDataArrayVector3 outPort0( in_ctxt );\n\
			\n\
			// Now fill the output array \n\
			for( CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{	\n\
				ULONG nIndex = it;\n\
				<a href=\"javascript:void(0)\" data=\"XSI::MATH::CVector3f\" class=\"a_multireflink\">XSI::MATH::CVector3f</a> v3f( port1[ nIndex ] );\n\
				outPort0[ nIndex ].Set( v3f.GetY(), port0[ nIndex ] * v3f.GetZ(), v3f.GetX() );\n\
			}\n\
		}\n\
		break;\n\
\n\
		// This section demonstrates how to iterate over a 2D array\n\
		case ID_OutPort1:\n\
		{\n\
			// Get the 2D array from port 2\n\
			CDataArray2DFloat port2( in_ctxt, ID_Port2 );\n\
						\n\
			// Get the output 2D array\n\
			CDataArray2DFloat outPort1( in_ctxt );\n\
			\n\
			// The first loop iterates normally on outPort1 \n\
			for( CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{	\n\
				// Now we use the Accessor class to allocate the output buffer and to iterate over the sub-array of outPort1\n\
				CDataArray2DFloat::Accessor floatAccessor = port2[it];	\n\
				\n\
				CDataArray2DFloat::Accessor outAccessor = outPort1.Resize( it, floatAccessor.GetCount( ) );\n\
\n\
				for (ULONG i=0; i&lt;floatAccessor.GetCount( ); i++)\n\
				{	\n\
					// Set the output 2D array\n\
					outAccessor[i] = floatAccessor[i];\n\
				}							\n\
			}\n\
		}\n\
		break;\n\
\n\
		// This section demonstrates how to filter out element items \n\
		case ID_OutPort2:\n\
		{\n\
			// Get the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> from port 0\n\
			CDataArrayLong port0( in_ctxt, ID_Port0 );\n\
			\n\
			// Get the output array\n\
			CDataArrayLong outPort2( in_ctxt );\n\
			\n\
			for( CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); /* do not call it.Next() here as it could increment the iterator twice! */ )\n\
			{\n\
				outPort2[ it ] = port0[ it ];\n\
				\n\
				if ( port0[ it ] &lt; 10 )\n\
				{\n\
					// Filter out elements of port 0 below 10\n\
					it.Remove( );\n\
					\n\
					// Important: Remove() will increment the iterator position by itself\n\
				}\n\
				else\n\
				{	\n\
					// Nothing to filter out, go to next item\n\
					it.Next( );\n\
				}\n\
			}\n\
		}\n\
		break;	\n\
	};\n\
\n\
	return CStatus::OK;\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";