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
      <meta name=\"topicid\" content=\"GUID-52E8DF90-F84D-4E6D-BED1-7C18BCF49315\" />\n\
      <meta name=\"indexterm\" content=\"UV: ordering (C++ vs. scripting)\" />\n\
      <meta name=\"indexterm\" content=\"ordering: UVs (C++ vs. scripting)\" />\n\
      <meta name=\"indexterm\" content=\"C++ API: vs. scripting for UV ordering\" />\n\
      <meta name=\"indexterm\" content=\"scripting: vs. C++ API for UV ordering\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>UV Ordering</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-52E8DF90-F84D-4E6D-BED1-7C18BCF49315\"></a></span><div class=\"head\">\n\
            <h1>UV Ordering</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E6325C9-8A89-4527-87A1-ECE394C13E42\"></a></span>Flattened control point arrays in scripting use U-V ordering:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
(0,0)...(0,cntV-1), (1,0)....(1,cntV-1),(cntU-1,0)...(cntU-1,cntV-1)\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4C0581B-1551-49A6-A3DE-107D6F7A385F\"></a></span>However, for the C++ API, control point arrays are ordered inversely (V-U):\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
(0,0)...(cntU-1,0), (0,1)....(cntU-1,1)...(0,cntV-1)...(cntU-1,cntV-1)\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED2148E5-21AC-4DEA-B2D2-9F060C8A9ED6\"></a></span>This means that if you are working with control point arrays in scripting, you can\n\
               get and set control point arrays without any conversion issues. However, if you are\n\
               working with the C++ API, you must invert the ordering of the array before passing\n\
               control point arrays to functions like <a href=\"#!/url=./si_cpp/classXSI_1_1NurbsSurface.html#Set\">NurbsSurface::Set</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html#AddNurbsSurface\">X3DObject::AddNurbsSurface</a>.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0015\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-231D2D69-82FB-436D-B7C6-81A145E8FD10\"></a></span>C++ API Example: Convert Control Point Array from U-V to V-U Ordering\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-88660D86-7643-43CB-9746-00D2365EB8FF\"></a></span>This function is typically used to prepare the data for creating a nurbs surface mesh\n\
                  with <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html#AddNurbsSurface\">X3DObject::AddNurbsSurface</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1NurbsSurfaceMesh.html#Set\">NurbsSurfaceMesh::Set</a>. The size of the resulting array is <span class=\"code\" translate=\"no\">in_nbU x in_nbV</span> and the U-V points are converted to V-U order to match the behavior of the nurbs\n\
                  surface in scripting.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Convert a CDoubleArray containing xyzw UV coordinates to a CVector4Array \n\
void ConvertDoubleArrayToVector4Array\n\
( \n\
	CDoubleArray&amp; in_array, \n\
	LONG in_nbU, \n\
	LONG in_nbV,\n\
	CVector4Array&amp; out_array\n\
)\n\
{\n\
	LONG nSize = in_nbU * in_nbV;\n\
	if ( in_array.GetCount() &lt; 4 * nSize )\n\
	{\n\
		Assert( in_array.GetCount() &gt;= 4 * nSize ) ;\n\
		nSize = in_array.GetCount()/4;		\n\
	}\n\
	out_array.Resize( nSize );\n\
\n\
	// e.g. Original <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> is UV (0,0)...(0,cntV-1), (1,0)....(1,cntV-1),(cntU-1,0)...(cntU-1,cntV-1)\n\
	// and we return <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> as (0,0)...(cntU-1,0), (0,1)....(cntU-1,1)...(0,cntV-1)...(cntU-1,cntV-1)\n\
\n\
	LONG l = 0;\n\
	for ( LONG i=0; i&lt;in_nbU; i++ )	// U\n\
	{\n\
		for ( LONG j=0; j&lt;in_nbV; j++ ) // V\n\
		{			\n\
			LONG k = i + j*in_nbU;			\n\
			double x = in_array[l++];\n\
			double y = in_array[l++];\n\
			double z = in_array[l++];\n\
			double w = in_array[l++];\n\
			\n\
			CVector4 v4(x*w,y*w,z*w,w);			\n\
			out_array[k] = v4;\n\
		}\n\
	}\n\
}\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";