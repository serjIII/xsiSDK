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
      <meta name=\"topicid\" content=\"GUID-EE9E8C7A-EA43-471A-99EB-5EDA2C674E05\" />\n\
      <meta name=\"indexterm\" content=\"vertex colors\" />\n\
      <meta name=\"indexterm\" content=\"vertex colors: accessing\" />\n\
      <meta name=\"indexterm\" content=\"accessing: vertex colors\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing Vertex Colors</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"color\", \"si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EE9E8C7A-EA43-471A-99EB-5EDA2C674E05\"></a></span><div class=\"head\">\n\
            <h1> Accessing Vertex Colors</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9CA5D3D7-3356-47D1-9B47-034DC7B65FF9\"></a></span>You can get and set vertex colors from the Geometry object by using the VertexColors\n\
               property and enumerating over them.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0025\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0026\"></a></span>Example: adding and finding vertex color\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-59FD1816-1655-45AF-A973-6CC9A4CA8C16\"></a></span>This example demonstrates setting up local material on a mesh sphere, adding vertex\n\
                  colors, and then finding those vertex colors.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Create a new scene with a sphere\n\
NewScene , false\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
\n\
\' Get the selected elements (ie., the sphere)\n\
if Selection.Count = 0 then\n\
	LogMessage \"Nothing selected\", siError\n\
else\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oSelectedObjects = Selection\n\
\n\
	\' Get selected oMeshes from selection list\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oMeshes = SIFilter(oSelectedObjects, \"polygon_mesh\", true, siQuickSearch)\n\
\n\
	if oMeshes.Count &lt; 1 then\n\
		LogMessage \"No polygon oMeshes selected\", siError\n\
	end if\n\
\n\
	\' Add 4 vertex <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a> properties to each mesh\n\
	for i = 0 to oSelectedObjects.Count - 1\n\
		\' Get current mesh (<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> : \"polyMsh\")\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oMesh = oSelectedObjects(i)\n\
\n\
		\' Get obj material\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oMaterial = oMesh.Material\n\
\n\
		\' If material is not local add one\n\
		if oMaterial.IsA(siSharedPSet) then\n\
			<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oMaterial = oMesh.AddMaterial\n\
		end if\n\
\n\
		\' Get polygon mesh geometry\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oPolyGeometry = oMesh.ActivePrimitive.Geometry\n\
\n\
		for j = 0 to 3\n\
			oPolyGeometry.AddVertexColor\n\
		next\n\
	next\n\
\n\
	\' List all vertex colors installed on polygon oMeshes\n\
	for i = 0 to oSelectedObjects.Count - 1\n\
		\' Get current mesh (<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> : \"polyMsh\")\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oMesh = oSelectedObjects(i)\n\
\n\
		\' Get polygon mesh geometry\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oPolyGeometry = oMesh.ActivePrimitive.Geometry\n\
\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oVertexColors = oPolyGeometry.VertexColors\n\
		LogMessage oVertexColors.Count\n\
\n\
		for j = 0 to oVertexColors.Count - 1\n\
			<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oVtxColor = oVertexColors(j)\n\
			LogMessage oVtxColor.FullName\n\
		next\n\
	next\n\
end if\n\
\n\
\' Output of above script:\n\
\'INFO : \"4\"\n\
\'INFO : \"sphere.polymsh.cls.UV_Cluster_AUTO.Vertex_Color\"\n\
\'INFO : \"sphere.polymsh.cls.UV_Cluster_AUTO.Vertex_Color1\"\n\
\'INFO : \"sphere.polymsh.cls.UV_Cluster_AUTO.Vertex_Color2\"\n\
\'INFO : \"sphere.polymsh.cls.UV_Cluster_AUTO.Vertex_Color3\"\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";