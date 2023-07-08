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
      <meta name=\"topicid\" content=\"GUID-EB7A8C6A-B236-49A1-8AC1-DEEF830D3D22\" />\n\
      <meta name=\"indexterm\" content=\"polymorphism: in plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"constraint maps: for plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: polymorphism: in plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: constraint maps: for plug-ins\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Handling Port Polymorphism</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::siICENodeStructureType\", \"si_cpp/namespaceXSI.html#a58431bcbd7f928638af8829b1db114ce\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::siICENodeStructureSingle\", \"si_cpp/namespaceXSI.html#a25edb7cb80d670db4441230cee17938dad27363313efc37ac55e9ecaf64f7e863\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::siICENodeStructureArray\", \"si_cpp/namespaceXSI.html#a25edb7cb80d670db4441230cee17938da06dc951d3628807244809d48f8ff40bb\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::siICENodeDataType\", \"si_cpp/namespaceXSI.html#a7fea4afcc91893e61f9fcaad649fd658\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::siICENodeContextType\", \"si_cpp/namespaceXSI.html#a2d36b0ce29ca1f9d739ca5a2c265e59f\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EB7A8C6A-B236-49A1-8AC1-DEEF830D3D22\"></a></span><div class=\"head\">\n\
            <h1>Handling Port Polymorphism</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-287EC2AA-8174-4048-9C58-385F7D484175\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_icenodes_PortPolymorphismAndDataIntegrity.htm\">Polymorphism</a></span> is the ability of ports to expose multiple data types. A more advanced implementation\n\
               technique is needed for handling port polymorphism during the evaluation of a custom\n\
               <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a>. Since the type resolution will occur at connection time, the coding of the ICENode\n\
               must be done in a generic way to support multiple data types. The recommended approach\n\
               is to query the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> object for the current output port types and to use a template class to delegate\n\
               the evaluation.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E3442A5-617B-4AA5-BC5D-23515BF4AD89\"></a></span>The following code snippet is part of the SDK example which demonstrates this technique\n\
               for both 1D and 2D-arrays:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// CEvaluator class is handling the most common types. The <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> is copied by reference, \n\
// this is the most optimal way of setting output ports with input ports.\n\
template &lt; class T &gt;\n\
class CEvaluator\n\
{\n\
	public:\n\
	static void Do( ICENodeContext&amp; in_ctxt, ULONG in_nInPortID, <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureType\" class=\"a_multireflink\">XSI::siICENodeStructureType</a> in_outStruct )\n\
	{\n\
		if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureSingle\" class=\"a_multireflink\">XSI::siICENodeStructureSingle</a> )\n\
		{\n\
			CDataArray&lt;T&gt; outData( in_ctxt );\n\
			outData.CopyFrom( in_nInPortID );\n\
		}\n\
		else if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureArray\" class=\"a_multireflink\">XSI::siICENodeStructureArray</a> )\n\
		{\n\
			CDataArray2D&lt;T&gt; outData( in_ctxt );\n\
			outData.CopyFrom( in_nInPortID );\n\
		}\n\
	}\n\
};\n\
\n\
// Special case for the custom <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
template &lt;&gt;\n\
class CEvaluator&lt; CDataArrayCustomType::TData &gt;\n\
{\n\
	public:\n\
	static void Do( ICENodeContext&amp; in_ctxt, ULONG in_nInPortID, <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureType\" class=\"a_multireflink\">XSI::siICENodeStructureType</a> in_outStruct )\n\
	{\n\
		if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureSingle\" class=\"a_multireflink\">XSI::siICENodeStructureSingle</a> )\n\
		{\n\
			CDataArrayCustomType outData( in_ctxt );\n\
			outData.CopyFrom( in_nInPortID );\n\
		}\n\
		else if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureArray\" class=\"a_multireflink\">XSI::siICENodeStructureArray</a> )\n\
		{\n\
			CDataArray2DCustomType outData( in_ctxt );\n\
			outData.CopyFrom( in_nInPortID );\n\
		}\n\
	}\n\
};\n\
\n\
SICALLBACK CustomPassThrough_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	ULONG out_portID = in_ctxt.GetEvaluatedOutputPortID( );\n\
\n\
	switch( out_portID )\n\
\n\
	{	 \n\
		case ID_OUT :\n\
		{\n\
			<a href=\"javascript:void(0)\" data=\"XSI::siICENodeDataType\" class=\"a_multireflink\">XSI::siICENodeDataType</a> outPortType;\n\
			<a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureType\" class=\"a_multireflink\">XSI::siICENodeStructureType</a> outPortStruct;\n\
			<a href=\"javascript:void(0)\" data=\"XSI::siICENodeContextType\" class=\"a_multireflink\">XSI::siICENodeContextType</a> outPortContext;\n\
			in_ctxt.GetPortInfo( ID_OUT, outPortType, outPortStruct, outPortContext );\n\
\n\
			switch( outPortType )\n\
			{\n\
				case siICENodeDataFloat:	CEvaluator&lt;float&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataLong:		CEvaluator&lt;LONG&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataBool:		CEvaluator&lt;bool&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataVector2:	CEvaluator&lt;MATH::CVector2f&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataVector3:	CEvaluator&lt;MATH::CVector3f&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataVector4:	CEvaluator&lt;MATH::CVector4f&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataQuaternion:	CEvaluator&lt;MATH::CQuaternionf&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataRotation:	CEvaluator&lt;MATH::CRotationf&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataMatrix33:	CEvaluator&lt;MATH::CMatrix3f&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataMatrix44:	CEvaluator&lt;MATH::CMatrix4f&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataColor4:	CEvaluator&lt;MATH::CColor4f&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataShape:	CEvaluator&lt;MATH::CShape&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
				case siICENodeDataCustomType:	CEvaluator&lt;CDataArrayCustomType::TData&gt;::Do( in_ctxt, ID_IN, outPortStruct ); break;\n\
			};\n\
		}\n\
		break;\n\
	};\n\
	\n\
	return CStatus::OK;\n\
}\n\
\n\
The next example shows another approach to handle port polymorphism when output arrays need to be <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> by <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> (memory allocation is required):\n\
// Another <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> of the CEvaluator class that copies <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> by allocating memory.\n\
template &lt; class T &gt;\n\
class CCopyEvaluator\n\
{\n\
	public:\n\
	static void Do( ICENodeContext&amp; in_ctxt, ULONG in_nInPortID, <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureType\" class=\"a_multireflink\">XSI::siICENodeStructureType</a> in_outStruct )\n\
	{\n\
		CIndexSet indexSet( in_ctxt );\n\
\n\
		if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureSingle\" class=\"a_multireflink\">XSI::siICENodeStructureSingle</a> )\n\
		{\n\
			CDataArray&lt;T&gt; outData( in_ctxt );\n\
			CDataArray&lt;T&gt; inData( in_ctxt, in_nInPortID );\n\
		\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				outData[it] = inData[it];\n\
			}\n\
		}\n\
		else if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureArray\" class=\"a_multireflink\">XSI::siICENodeStructureArray</a> )\n\
		{\n\
			CDataArray2D&lt;T&gt; outData( in_ctxt );\n\
			CDataArray2D&lt;T&gt; inData( in_ctxt, in_nInPortID );\n\
					\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				typename CDataArray2D&lt;T&gt;::Accessor inAccess = inData[it];\n\
				typename CDataArray2D&lt;T&gt;::Accessor outAccess = outData.Resize( it, inAccess.GetCount() );\n\
				\n\
				memcpy( &amp;outAccess[0], &amp;inAccess[0], outAccess.GetCount() );\n\
			}\n\
		}\n\
	}\n\
};\n\
\n\
// Special case for the bool <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
template &lt;&gt;\n\
class CCopyEvaluator&lt; bool &gt;\n\
{\n\
   public:\n\
   static void Do( ICENodeContext&amp; in_ctxt, ULONG in_nInPortID, <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureType\" class=\"a_multireflink\">XSI::siICENodeStructureType</a> in_outStruct )\n\
   {\n\
		CIndexSet indexSet( in_ctxt );\n\
		if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureSingle\" class=\"a_multireflink\">XSI::siICENodeStructureSingle</a> )\n\
		{\n\
			CDataArray&lt;bool&gt; outData( in_ctxt );\n\
			CDataArray&lt;bool&gt; inData( in_ctxt, in_nInPortID );\n\
		\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				outData.Set( it, inData[it] );\n\
			}\n\
		}\n\
		else if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureArray\" class=\"a_multireflink\">XSI::siICENodeStructureArray</a> )\n\
		{\n\
			CDataArray2D&lt;bool&gt; outData( in_ctxt );\n\
			CDataArray2D&lt;bool&gt; inData( in_ctxt, in_nInPortID );\n\
					\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				CDataArray2D&lt;bool&gt;::Accessor inAccess = inData[it];\n\
				CDataArray2D&lt;bool&gt;::Accessor outAccess = outData.Resize( it, inAccess.GetCount() );\n\
				for ( ULONG i=0; i&lt;outAccess.GetCount(); i++ )\n\
				{\n\
					outAccess.Set( i, inAccess[i] );\n\
				}\n\
			}\n\
		}\n\
	}\n\
};\n\
\n\
// Special case for the custom <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
template &lt;&gt;\n\
class CCopyEvaluator&lt; CDataArrayCustomType::TData &gt;\n\
{\n\
	public:\n\
	static void Do( ICENodeContext&amp; in_ctxt, ULONG in_nInPortID, <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureType\" class=\"a_multireflink\">XSI::siICENodeStructureType</a> in_outStruct )\n\
	{\n\
		if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureSingle\" class=\"a_multireflink\">XSI::siICENodeStructureSingle</a> )\n\
		{\n\
			CDataArrayCustomType outData( in_ctxt );\n\
			CDataArrayCustomType inData( in_ctxt, in_nInPortID  );\n\
\n\
			CIndexSet indexSet( in_ctxt );\n\
			for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				ULONG nSize;\n\
				const XSI::CDataArrayCustomType::TData* pInData;\n\
				inData.GetData(it, &amp;pInData, nSize);\n\
\n\
				XSI::CDataArrayCustomType::TData* pOutData = outData.Resize(it, nSize);\n\
				\n\
				::memcpy( pOutData, pInData, nSize );\n\
			}\n\
		}\n\
		else if ( in_outStruct == <a href=\"javascript:void(0)\" data=\"XSI::siICENodeStructureArray\" class=\"a_multireflink\">XSI::siICENodeStructureArray</a> )\n\
		{\n\
			CDataArray2DCustomType outData( in_ctxt );\n\
			CDataArray2DCustomType inData( in_ctxt, in_nInPortID );\n\
		\n\
			CIndexSet indexSet( in_ctxt );\n\
			for (CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
			{\n\
				CDataArray2DCustomType::Accessor inAccess = inData[ it ];\n\
				CDataArray2DCustomType::Accessor outAccess = outData.Resize( it, inAccess.GetCount( ) );\n\
\n\
				for ( ULONG i=0; i&lt;outAccess.GetCount(); i++ )\n\
				{\n\
					CDataArray2DCustomType::TData* pInData = NULL;\n\
					ULONG nSize;\n\
					\n\
					inAccess.GetData( i, &amp;pInData, nSize );\n\
					\n\
					CDataArray2DCustomType::TData* pOutData = outAccess.Resize( i, nSize );\n\
					\n\
					::memcpy( pOutData, pInData, nSize );\n\
				}\n\
			}              \n\
		}\n\
	}\n\
};</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";