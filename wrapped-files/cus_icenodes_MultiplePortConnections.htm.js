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
      <meta name=\"topicid\" content=\"GUID-ACF9822E-D005-41F8-B817-820D7BEDA067\" />\n\
      <meta name=\"indexterm\" content=\"Group ID (ICE nodes)\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: multiple ports\" />\n\
      <meta name=\"indexterm\" content=\"ICE nodes: group ID\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Multiple Port Connections</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-ACF9822E-D005-41F8-B817-820D7BEDA067\"></a></span><div class=\"head\">\n\
            <h1>Multiple Port Connections</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-123CEAFC-CDD1-475E-90BF-2F8201A8D6DC\"></a></span> Custom ICENodes can be defined with an unlimited number of input connections, which\n\
               is useful for implementing nodes that need to process multiple input values of similar\n\
               types. The maximum number of connections must be specified for each port group with\n\
               <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#AddPortGroup\">ICENodeDef::AddPortGroup</a>. By default, a port group is created with only one input connection.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CBEE21E8-6975-49C3-81F1-E286BD42352D\"></a></span>The code snippet below demonstrates how to access the multiple connections of a port\n\
               group from the <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> callback:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
/*\n\
	Register an input group with up to 10 connections\n\
*/\n\
CStatus RegisterMaxNode( PluginRegistrar&amp; in_reg )\n\
{\n\
	ICENodeDef nodeDef = Application().GetFactory().CreateICENodeDef(L\"MaxNode\");\n\
\n\
	// Define a port group with a maximum of 10 connections. \n\
	CStatus st = nodeDef.AddPortGroup(ID_G_100, 1, 10);\n\
	st.AssertSucceeded();\n\
\n\
	st = nodeDef.AddInputPort( ID_IN_PointPositions, ID_G_100, siICENodeDataVector3, siICENodeStructureSingle, siICENodeContextComponent0D, L\"PointPositions\", L\"PointPositions\" );\n\
	st.AssertSucceeded();\n\
\n\
	// Add output port.\n\
	st = nodeDef.AddOutputPort( ID_OUT_Max, siICENodeDataVector3, siICENodeStructureSingle, siICENodeContextSingleton,  L\"MaxPos\", L\"MaxPos\" );\n\
	st.AssertSucceeded();\n\
\n\
	in_reg.RegisterICENode(nodeDef);\n\
\n\
	return CStatus::OK;\n\
}\n\
\n\
\n\
/*\n\
	Evaluate each instance\'s value to find the maximum value amongst all instances\n\
*/\n\
XSIPLUGINCALLBACK CStatus Max_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	ULONG nPortID = in_ctxt.GetEvaluatedOutputPortID();\n\
	switch (nPortID)\n\
	{\n\
		case ID_OUT_MaxPos:\n\
		{\n\
			Application xsi;\n\
\n\
			CDataArrayVector3f outData(in_ctxt);\n\
			CVector3f v3fMax(-FLT_MAX,-FLT_MAX,-FLT_MAX);\n\
\n\
			// Get the number of port instances defined for group ID_G_100\n\
			ULONG nInstCount;\n\
			in_ctxt.GetGroupInstanceCount(ID_G_100, nInstCount);\n\
\n\
			// Iterate over the number of instances to access the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> buffer of each input connection\n\
			for (ULONG nInstID=0; nInstID&lt;nInstCount; nInstID++)\n\
			{\n\
				CDataArrayVector3f posArray(in_ctxt, ID_IN_PointPositions, nInstID);	\n\
\n\
				CIndexSet indexSet( in_ctxt );\n\
				for ( CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next() )\n\
				{\n\
					CVector3f&amp; v3f = posArray[it];\n\
					if ( v3fMax.GetX() &lt;= v3f.GetX() &amp;&amp; v3fMax.GetY() &lt;= v3f.GetY() &amp;&amp; v3fMax.GetZ() &lt;= v3f.GetZ() )\n\
					{\n\
						v3fMax = v3f;\n\
					}\n\
				}\n\
			}\n\
\n\
			// Output max value\n\
			outData[0] = v3fMax;\n\
		}\n\
	};\n\
\n\
	return CStatus::OK; \n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";