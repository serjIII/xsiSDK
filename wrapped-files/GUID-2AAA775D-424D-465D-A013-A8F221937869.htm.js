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
      <meta name=\"topicid\" content=\"GUID-2AAA775D-424D-465D-A013-A8F221937869\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating a Custom Primitive</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"PolygonMesh\", \"si_cpp/classXSI_1_1PolygonMesh.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-2AAA775D-424D-465D-A013-A8F221937869\"></a></span><div class=\"head\">\n\
            <h1>Creating a Custom Primitive</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4ECBE4F-457A-481E-A866-5297066C6B46\"></a></span> Before you can create a custom primitive object, you must register it in the <span class=\"code\" translate=\"no\">XSILoadPlugin</span> callback, which is called when Softimage loads a self-installing plug-in. You can\n\
            use the <span class=\"code\" translate=\"no\">PluginRegistrar.RegisterPrimitive</span> method to register the custom primitive. \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SICALLBACK XSILoadPlugin(PluginRegistrar&amp; in_reg)\n\
{\n\
\n\
	in_reg.PutAuthor(L\"SoftimageUser\");\n\
	in_reg.PutName(L\"CustomPrimitives Plug-in\");\n\
	in_reg.PutVersion(1,0);\n\
 \n\
	// Register primitive types\n\
	in_reg.RegisterPrimitive(\"Box\");\n\
 \n\
	...\n\
\n\
}</pre></div> \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-75DA5DF2-7BF2-4520-8494-73ECF957EA84\"></a></span> After registering the custom primitive object, it can be created using the create\n\
            primitive commands like <span class=\"code\" translate=\"no\">GetPrim</span> and <span class=\"code\" translate=\"no\">X3DObject::AddPrimitive</span>. You can pass in the registered custom primitive type as the preset argument to the\n\
            commands. \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">GetPrim \"Box\"</pre></div> \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_8FCD9C127E6241B398D4F0CF94C4C25A\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-471B84AD-E144-4408-9166-0E9AC498A2C0\"></a></span>Adding Parameters\n\
            </h2>You can define the parameters for a custom primitive object using the <span class=\"code\" translate=\"no\">Define</span> callback and tweak where they appear in the property page using the <span class=\"code\" translate=\"no\">DefineLayout</span> callback. \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SICALLBACK Box_Define(const CRef&amp; in_ref)\n\
{\n\
	Context in_ctxt(in_ref);\n\
	CustomPrimitive in_prim(in_ctxt.GetSource());\n\
	if(in_prim.IsValid())\n\
	 {\n\
	  Application().LogMessage(CString(\"Box_Define: \") + in_prim.GetFullName());\n\
	  Factory l_fact = Application().GetFactory();\n\
	  double dMin = 0.01;\n\
	  double dMax = 10.0;\n\
	  CRef l_widthDef = l_fact.CreateParamDef(“Width”, CValue::siDouble, 1.0,   dMin, dMax);\n\
	  CRef l_lengthDef = l_fact.CreateParamDef(“Length”, CValue::siDouble, 1.0, dMin, dMax);\n\
	  CRef l_heightDef = l_fact.CreateParamDef(“Height”, CValue::siDouble, 1.0, dMin, dMax);\n\
	  Parameter l_width, l_length, l_height;\n\
	  in_prim.AddParameter(l_widthDef, l_width);\n\
	  in_prim.AddParameter(l_lengthDef, l_length);\n\
	  in_prim.AddParameter(l_heightDef, l_height);\n\
	}\n\
	return CStatus::OK;\n\
}\n\
\n\
SICALLBACK Box_DefineLayout(const CRef&amp; in_ref)\n\
{\n\
	Context in_ctxt(in_ref);\n\
	\n\
	PPGLayout layout = in_ctxt.GetSource();\n\
	layout.Clear();\n\
	layout.AddGroup(\"Box Group\");\n\
	layout.AddItem(“Width”, \"Half-Width\");\n\
	layout.AddItem(“Length”, \"Half-Length\");\n\
	layout.AddItem(“Height”, \"Half-Height\");\n\
	layout.AddButton(\"ConvertGeom\", \"Convert to PolygonMesh\");	\n\
	layout.AddButton(\"CloseTheInspector\", \"Close the Inspector\");\n\
	layout.EndGroup();\n\
	return CStatus::OK;\n\
}</pre></div> The <span class=\"code\" translate=\"no\">PPGEvent</span> callback can be used for tracking the parameter changes using the <span class=\"code\" translate=\"no\">siParameterChange</span> event id. \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SICALLBACK Box_PPGEvent(const CRef&amp; in_ref)\n\
{\n\
	PPGEventContext in_ctxt(in_ref);\n\
\n\
	switch (in_ctxt.GetEventID())\n\
	  {\n\
	    case siOnInit:\n\
	      {\n\
	        CustomPrimitive primitive = in_ctxt.GetSource();\n\
	        Application().LogMessage(CString(\"Box_PPGEvent: OnInit: \" + primitive.GetName()));\n\
	        break;\n\
	      }\n\
	    case siOnClosed:\n\
	      {\n\
	        CustomPrimitive primitive = in_ctxt.GetSource();\n\
	        Application().LogMessage(CString(\"Box_PPGEvent: siOnClosed: \" +  primitive.GetName()));\n\
	        break;\n\
	      }\n\
	    case siParameterChange:\n\
	      {\n\
	        Parameter changed = in_ctxt.GetSource();\n\
	        CustomPrimitive primitive = changed.GetParent();\n\
	        CString paramName = changed.GetScriptName();\n\
	        // Show that it is possible to change a value in the callback.\n\
	        // Note that the Draw() call might see the intermediary value before\n\
	        // it is changed this way.\n\
         \n\
	        if (paramName == kWidthName)\n\
	        {\n\
	          primitive.PutParameterValue(kHeightName, changed.GetValue());\n\
	        }\n\
	          else if (paramName == kHeightName)\n\
	        {\n\
	          primitive.PutParameterValue(kWidthName, changed.GetValue());\n\
	        }\n\
	        Application().LogMessage(CString(\"Box_PPGEvent: siParameterChange: \" + primitive.GetName() + CString(\"/\") + paramName\n\
	        + CString(\" = \") + changed.GetValue().GetAsText()));\n\
	        break;\n\
	      }\n\
	      ...\n\
	  }\n\
\n\
	return CStatus::OK;\n\
}</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_32171EBC5FB04315969CEBFEE9FBBAD5\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EE0FBAEB-C13D-4862-9C80-C28FC63D8500\"></a></span>Drawing the Custom Primitive Object\n\
            </h2>The <span class=\"code\" translate=\"no\">Draw</span> callback draws the custom primitive object in the scene. The custom primitive object\n\
            is drawn in the scene directly using the OpenGL calls. \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SICALLBACK Box_Draw(const CRef&amp; in_ref)\n\
{\n\
	Context in_ctxt(in_ref);\n\
	CustomPrimitive in_prim(in_ctxt.GetSource());\n\
	if(!in_prim.IsValid())\n\
	{\n\
	  return CStatus::Fail;\n\
	}\n\
\n\
	// Keep a cache of primitive data.\n\
\n\
	Box_CachedData&amp; <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> = g_Cache.Get(in_prim);\n\
	double boxHalfWidth  = data.halfWidth;\n\
	double boxHalfLength = data.halfLength;\n\
	double boxHalfHeight = data.halfHeight;\n\
\n\
	// Draw Box\n\
	::glBegin();\n\
\n\
	...\n\
 \n\
	::glEnd();\n\
 \n\
	return CStatus::OK;\n\
\n\
}</pre></div> In the <span class=\"code\" translate=\"no\">Draw</span> callback, you can call the OpenGL API to draw the custom primitive. When the <span class=\"code\" translate=\"no\">Draw</span> callback is called, the OpenGL state is set to the local coordinates of the custom\n\
            primitive object. You must not make changes to the OpenGL states, otherwise rendering\n\
            of the whole scene is affected. It is best to keep this method optimized because it\n\
            is called in each draw cycle. \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_FCACB2AAD7494338A3B607BB72689E30\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8B62FB01-4408-47F6-8CFE-E9C6730ED23F\"></a></span>Bounding Box\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EADD0A3E-3087-4521-B370-C1C4A0A69A96\"></a></span>A bounding box represents a simplified version of a custom primitive object and it\n\
               is used for improving performance in certain operations. The <span class=\"code\" translate=\"no\">BoundingBox</span> callback returns the bounding box for the custom primitive. \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">SICALLBACK Box_BoundingBox(const CRef&amp; in_ref)\n\
{\n\
	Context in_ctxt(in_ref);\n\
	CustomPrimitive in_prim(in_ctxt.GetSource());\n\
	if(!in_prim.IsValid())\n\
	{\n\
	  return CStatus::Fail;\n\
	}\n\
\n\
	// Keep a cache of primitive data.\n\
\n\
	Box_CachedData&amp; <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> = g_Cache.Get(in_prim);\n\
	double boxHalfWidth  = data.halfWidth;\n\
	double boxHalfHeight = data.halfHeight;\n\
	double boxHalfLength = data.halfLength;\n\
\n\
	in_ctxt.PutAttribute(\"LowerBoundX\", -boxHalfWidth);\n\
	in_ctxt.PutAttribute(\"LowerBoundY\", -boxHalfHeight);\n\
	in_ctxt.PutAttribute(\"LowerBoundZ\", -boxHalfLength);\n\
	in_ctxt.PutAttribute(\"UpperBoundX\", boxHalfWidth);\n\
	in_ctxt.PutAttribute(\"UpperBoundY\", boxHalfHeight);\n\
	in_ctxt.PutAttribute(\"UpperBoundZ\", boxHalfLength);\n\
 \n\
	return CStatus::OK;\n\
\n\
}</pre></div>Unlike the <span class=\"code\" translate=\"no\">Draw</span> callback, the bounding box values are cached internally and only called when there\n\
               are updates such as changes to parameter values. You must ensure that the <span class=\"code\" translate=\"no\">BoundingBox</span> callback always returns the correct dimensions, or a box that contains the whole\n\
               custom primitive object. \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_3D41E13F350542BA9BD590FB7F28F23A\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B766489F-E8F1-4A69-806C-C6E1935CA85C\"></a></span>Converting to a Geometry\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8B05E77-3F8C-4A9A-A584-6CF825BDBA4B\"></a></span>Like other implicit primitives, a custom primitive object can be converted to a geometry\n\
               using either the <span class=\"code\" translate=\"no\">SIConvert</span> command or <span class=\"code\" translate=\"no\">CreatePrim</span> command. In Softimage 2014, a custom primitive object can be converted to <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"PolygonMesh\" class=\"a_multireflink\">PolygonMesh</a></span> only. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SICALLBACK Box_ConvertToGeom(const CRef&amp; in_ref)\n\
//\n\
// This callback is invoked when the SIConvert or CreatePrim commands are run\n\
//	for a custom primitive object. \n\
//\n\
\n\
{\n\
	CustomPrimitiveContext in_ctxt(in_ref);\n\
	CustomPrimitive in_prim(in_ctxt.GetSource());\n\
	if(!in_prim.IsValid())\n\
	{\n\
	  return CStatus::Fail;\n\
	}\n\
 \n\
	Box_CachedData&amp; <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> = g_Cache.Get(in_prim);\n\
	double boxHalfWidth  = data.halfWidth;\n\
	double boxHalfHeight = data.halfHeight;\n\
	double boxHalfLength = data.halfLength;\n\
 \n\
	double boxMinPt[3];\n\
	double boxMaxPt[3];\n\
\n\
	boxMinPt[0] = -boxHalfWidth;\n\
	boxMinPt[1] = -boxHalfHeight;\n\
	boxMinPt[2] = 0;\n\
\n\
	boxMaxPt[0] = boxHalfWidth;\n\
	boxMaxPt[1] = boxHalfHeight;\n\
	boxMaxPt[2] = 0;\n\
\n\
	Geometry out_geo = in_ctxt.GetGeometry();\n\
\n\
	// PolygonMesh support\n\
	\n\
	PolygonMesh out_mesh(out_geo);\n\
	if(out_mesh.IsValid())\n\
	{\n\
	  // Convert to polygon\n\
	  MATH::CVector3Array out_verts;\n\
	  CLongArray out_faces;\n\
\n\
	  int <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> = 0;\n\
	  for (int i = -boxHalfLength; i &lt;= boxHalfLength; ++i)\n\
	  {\n\
	    MATH::CVector3 vMinXMinY(-boxHalfWidth, -boxHalfHeight, 1.0 * i);\n\
	    MATH::CVector3 vMinXMaxY(-boxHalfWidth, boxHalfHeight, 1.0 * i);\n\
	    MATH::CVector3 vMaxXMinY(boxHalfWidth, -boxHalfHeight, 1.0 * i);\n\
	    MATH::CVector3 vMaxXMaxY(boxHalfWidth, boxHalfHeight, 1.0 * i);\n\
\n\
	    out_verts.Add(vMinXMinY);\n\
	    out_verts.Add(vMinXMaxY);\n\
	    out_verts.Add(vMaxXMaxY);\n\
	    out_verts.Add(vMaxXMinY);\n\
   \n\
	    out_faces.Add(4); // Vertex count for tri\n\
	    out_faces.Add(<a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> + 0);\n\
	    out_faces.Add(<a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> + 1);\n\
	    out_faces.Add(<a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> + 2);\n\
	    out_faces.Add(<a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> + 3);\n\
	    <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> += 4;\n\
	  }\n\
\n\
	  return out_mesh.Set(out_verts, out_faces);\n\
	}\n\
\n\
}</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-ADEC3510-8CB8-4E8C-AD65-EB71B5244EC6\"></a></span>In the <span class=\"code\" translate=\"no\">ConvertToGeom</span> callback, a geometry is attached to the context in the callback. You can update the\n\
               geometry with the result of the conversion. \n\
            </p> \n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-34086B4D-2E30-4FEF-95B6-5B8977E9D78D\"></a></span>For more information, see the custom primitive examples in the SDK workgroup (<span class=\"filePath\" translate=\"no\">&lt;your_installation_folder&gt;\\Softimage2014\\XSISDK\\examples\\workgroup\\Addons\\CustomPrimitive)</span>. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8F76171-6796-4645-9E0E-D8804CE78999\"></a></span>You can use the Custom Primitive Wizard to generate the code for a self-installing\n\
            plug-in that contains a custom primitive object. To access the Custom Primitive Wizard,\n\
            select <span class=\"MenuCascade\" id=\"GUID-3DCC4926-1988-4031-AF31-AC5C9BB0205C\">Plug-in Manager <img src=\"../images/ac.menuaro.gif\" /> File <img src=\"../images/ac.menuaro.gif\" /> New <img src=\"../images/ac.menuaro.gif\" /> Primitive</span>. \n\
         </p>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";