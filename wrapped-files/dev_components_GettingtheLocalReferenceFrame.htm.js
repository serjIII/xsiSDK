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
      <meta name=\"topicid\" content=\"GUID-8809B44F-A091-4988-B627-5ABA0C9ABB0D\" />\n\
      <meta name=\"indexterm\" content=\"accessing: local reference frame\" />\n\
      <meta name=\"indexterm\" content=\"local reference frame: accessing\" />\n\
      <meta name=\"indexterm\" content=\"local reference frame: magic formula for polygon mesh vertices\" />\n\
      <meta name=\"indexterm\" content=\"magic formula for polygon mesh vertices (local reference frame)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Getting the Local Reference Frame</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"flags\", \"si_cpp/group__RenderMapDefine.html#ga74650ad65c5a99135a0f10f4827f0b1a\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-8809B44F-A091-4988-B627-5ABA0C9ABB0D\"></a></span><div class=\"head\">\n\
            <h1>Getting the Local Reference Frame</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-51723C27-E8C9-4668-A825-F9BB2643FE50\"></a></span>At this time, the SDK does not have an official way to access the local frame reference\n\
               information. There is, however, a <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingtheLocalReferenceFrame.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0030\">Local Frame Magic Formula</a></span> for polygon mesh vertices that you can use to evaluate it yourself, or you can use\n\
               a workaround involving one of the SDK object model\'s deprecated interfaces.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-FF5F253A-633A-4200-ABC5-451127BE5C6E\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-096BF36B-7777-4D80-B6F8-AFC3ABEE5233\"></a></span>Only the magic formula for polygon mesh vertices is provided because it is often used\n\
                     to compute the displacement from local relative shapes on polygon meshes. For other\n\
                     cases, please use the following workaround.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-41E7511F-A832-4768-B692-576A07C0F54E\"></a></span>The deprecated <a href=\"#!/url=./si_om/Geometry0D.html\">Geometry0D</a>, <a href=\"#!/url=./si_om/Geometry1D.html\">Geometry1D</a>, and <a href=\"#!/url=./si_om/Geometry2D.html\">Geometry2D</a> interfaces represent the original versions (implemented in v1.0 but deprecated in\n\
               v1.5) of the <a href=\"#!/url=./si_om/Point.html\">Point</a>, <a href=\"#!/url=./si_om/Edge.html\">Edge</a>, and <a href=\"#!/url=./si_om/Facet.html\">Facet</a> interfaces, respectively. Each of these interfaces implements a <em class=\"strong\">LocalReferenceFrame</em> method which returns the X, Y, and Z axes of the local reference frame at the specified\n\
               index of the subcomponent.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-668D64CD-3B47-4630-90BB-E8B69AD3EF86\"></a></span>You can get these deprecated interfaces through the (also deprecated) <a href=\"#!/url=./si_om/Geometry_V1.html\">Geometry_V1</a> interface, which is available via the <a href=\"#!/url=./si_om/CollectionItem.Obj.html\">CollectionItem.Obj</a> property.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-849611F8-3866-4C0F-A8E7-AC1E14B6C6EC\"></a></span>Ok, so here\'s the catch: the LocalReferenceFrame methods use output objects and so\n\
               are not available to JScript and the C++ API (Python can handle output arguments from\n\
               methods without difficulty—see <a href=\"#!/url=./files/OutputArgArrays.htm\">Working with Return Values and Output Arguments</a> for more information). As a workaround, you can implement a custom command (in VBScript)\n\
               to return an array of these values. That command can then be used by JScript or the\n\
               C++ API to read the local reference frame, as <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingtheLocalReferenceFrame.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-002D\">JScript Example: Using the VBS wrapper to get the Local Reference Frame</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingtheLocalReferenceFrame.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-002F\">C++ Example: Using the VBS wrapper to get the Local Reference Frame</a></span> illustrate, using a custom command implemented like the one in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingtheLocalReferenceFrame.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-002C\">VBScript Example: Implementing a JScript-compliant version of the LocalReferenceFrame\n\
                     methods</a></span> or <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingtheLocalReferenceFrame.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-002E\">VBScript Example: Implementing a C++ API-compliant version of the LocalReferenceFrame\n\
                     methods</a></span>.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-002C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-354CABCA-60DB-4242-B39B-30CEC0AE0F36\"></a></span>VBScript Example: Implementing a JScript-compliant version of the LocalReferenceFrame\n\
                  methods\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB6186A6-1549-4EC4-B043-F5F7B50E7A0D\"></a></span>This version of this custom command returns an array containing the output arguments\n\
                  exactly as they are returned from the LocalReferenceFrame methods (that is, a safearray\n\
                  containing the following elements: SIVector3, Boolean, SIVector3, Boolean, SIVector3,\n\
                  Boolean).\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-2C82066B-00CD-48F0-BA36-C368B33B69A5\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BED23D41-8EBB-4123-B2EC-1E927D16816B\"></a></span>The C++ API cannot read the <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> interface and cannot convert it to the CVector3 class, so this version will not work\n\
                        with the C++ API. For a C++ API-compliant version, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingtheLocalReferenceFrame.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-002E\">VBScript Example: Implementing a C++ API-compliant version of the LocalReferenceFrame\n\
                              methods</a></span>.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'\n\
\' GetLocalReferenceFramePlugin\n\
\'\n\
\n\
\' Registration\n\
function XSILoadPlugin( in_reg )\n\
	in_reg.Author = \"yourname\"\n\
	in_reg.Name = \"GetLocalReferenceFramePlugin\"\n\
	in_reg.Email = \"yourname@yourcompany.com\"\n\
	in_reg.URL = \"www.yourcompany.com\"\n\
	in_reg.Major = 1\n\
	in_reg.Minor = 0\n\
\n\
	in_reg.RegisterCommand \"GetLocalReferenceFrame\",\"GetLocalReferenceFrame\"\n\
\n\
	XSILoadPlugin = true\n\
end function\n\
\n\
\' De-registration\n\
function XSIUnloadPlugin( in_reg )\n\
	strPluginName = in_reg.Name\n\
	Application.LogMessage strPluginName &amp; \" has been unloaded.\"\n\
	XSIUnloadPlugin = true\n\
end function\n\
\n\
\' Set up command arguments, return value and <a href=\"javascript:void(0)\" data=\"flags\" class=\"a_multireflink\">flags</a>\n\
function GetLocalReferenceFrame_Init( ctxt )\n\
	dim oCmd\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oCmd = ctxt.Source\n\
	oCmd.Description = \"Get Local Reference Frame\"\n\
	oCmd.SetFlag siNoLogging, true\n\
	oCmd.ReturnValue = true\n\
\n\
	dim oArgs\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oArgs = oCmd.Arguments\n\
	oArgs.AddWithHandler \"InputObjs\", siArgHandlerCollection\n\
	oArgs.Add \"Index\",		siArgumentInput,	,		siInt4\n\
	oArgs.Add \"Dimension\",	siArgumentInput,	\"0\",	siInt2\n\
	\n\
	GetLocalReferenceFrame_Init = true\n\
end function\n\
\n\
\' Main implementation\n\
function GetLocalReferenceFrame_Execute( InputObjs, Index, Dimension )\n\
	dim oXDGeometry, aInfoCollection\n\
	dim oXAxis, oYAxis, oZAxis \n\
	dim bXAxisValid, bYAxisValid, bZAxisValid\n\
	\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oXAxis = XSIMath.CreateVector3()\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oYAxis = XSIMath.CreateVector3()\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oZAxis = XSIMath.CreateVector3()\n\
	\n\
	\' Make sure input object is valid\n\
	if TypeName(InputObjs(0)) &lt;&gt; \"X3DObject\" then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> GetLocalReferenceFrame_Execute = Nothing\n\
		Application.LogMessage( \"Input object is not a valid object: \" &amp; InputObj.Type )\n\
		exit function\n\
	end if\n\
	\n\
	\' Decide which info to get\n\
	if Dimension = 0 then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oXDGeometry = InputObjs(0).Obj.Geometry0D\n\
	elseif Dimension = 1 then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oXDGeometry = InputObjs(0).Obj.Geometry1D\n\
	else\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oXDGeometry = InputObjs(0).Obj.Geometry2D\n\
	end if\n\
	\n\
	\' Call the correct method and then use the output arguments to populate the array to return\n\
	oXDGeometry.LocalReferenceFrame i, oXAxis, bXAxisValid, oYAxis, bYAxisValid, oZAxis, bZAxisValid\n\
	aInfoCollection = Array( oXAxis, bXAxisValid, oYAxis, bYAxisValid, oZAxis, bZAxisValid )\n\
	 \n\
	\' The array returned will be a 1-dimensional SAFEARRAY\n\
	GetLocalReferenceFrame_Execute = aInfoCollection \n\
end function\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-002D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-04CAACFA-F05E-43C3-AC94-64261B7E28DB\"></a></span>JScript Example: Using the VBS wrapper to get the Local Reference Frame\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-64E8B23A-15C5-4D90-B998-196FBF4047EB\"></a></span>This example demonstrates how to get the Local Reference Frame information on a cube\n\
                  using JScript. Because JScript cannot handle the output arguments returned by the\n\
                  LocalReferenceFrame methods on the deprecated Geometry0D, Geometry1D, and Geometry2D\n\
                  objects, you must write a custom command in VBScript to extract the information and\n\
                  reformat it for use by JScript. In this example, the expected result is a 1-dimensional\n\
                  safearray containing 3 pairs of SIVector3 and Boolean elements (as implemented in\n\
                  <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingtheLocalReferenceFrame.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-002C\">VBScript Example: Implementing a JScript-compliant version of the LocalReferenceFrame\n\
                        methods</a></span>).\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Create a cube\n\
var objItem = CreatePrim( \"Cube\", \"MeshSurface\" );\n\
\n\
// Get number of vertices in the cube\n\
var nbrPoints = objItem.ActivePrimitive.Geometry.Points.Count;\n\
\n\
// Set up some storage for the local reference frame info\n\
var vc3XAxis = XSIMath.CreateVector3(); var booXAxisValid;\n\
var vc3YAxis = XSIMath.CreateVector3(); var booYAxisValid;\n\
var vc3ZAxis = XSIMath.CreateVector3(); var booZAxisValid;\n\
\n\
// Get the local reference frame for each point\n\
for ( var i=0; i&lt;nbrPoints; i++ ) {\n\
	var aResults = GetLocalReferenceFrame( objItem, i, 0 ).toArray();\n\
	vc3XAxis = aResults[0];\n\
	booXAxisValid = aResults[1];\n\
	vc3YAxis = aResults[2];\n\
	booYAxisValid = aResults[3];\n\
	vc3ZAxis = aResults[4];\n\
	booZAxisValid = aResults[5];\n\
\n\
	if ( booXAxisValid ) {\n\
		Application.LogMessage ( \"Component [\" + i + \"] X axis : \" + vc3XAxis.x + \" | \" + vc3XAxis.y + \" | \" + vc3XAxis.z );\n\
	} else {\n\
		Application.LogMessage ( \"Component [\" + i + \"] INVALID X axis\" );\n\
	}\n\
\n\
	if ( booYAxisValid ) {\n\
		Application.LogMessage ( \"Component [\" + i + \"] Y axis : \" + vc3YAxis.x + \" | \" + vc3YAxis.y + \" | \" + vc3YAxis.z );\n\
	} else {\n\
		Application.LogMessage ( \"Component [\" + i + \"] INVALID Y axis\" );\n\
	}\n\
\n\
	if ( booZAxisValid ) {\n\
		Application.LogMessage ( \"Component [\" + i + \"] Z axis : \" + vc3ZAxis.x + \" | \" + vc3ZAxis.y + \" | \" + vc3ZAxis.z );\n\
	} else {\n\
		Application.LogMessage ( \"Component [\" + i + \"] INVALID Z axis\" );\n\
	}\n\
}\n\
\n\
//INFO : Component [0] X axis : 0.408248290463863 | -0.816496580927726 | 0.408248290463863\n\
//INFO : Component [0] Y axis : -0.577350269189626 | -0.577350269189626 | -0.577350269189626\n\
//INFO : Component [0] Z axis : 0.707106781186547 | 0 | -0.707106781186547\n\
//INFO : Component [1] X axis : -0.408248290463863 | 0.408248290463863 | -0.816496580927726\n\
//INFO : Component [1] Y axis : 0.577350269189626 | -0.577350269189626 | -0.577350269189626\n\
//INFO : Component [1] Z axis : -0.707106781186547 | -0.707106781186547 | 0\n\
//INFO : Component [2] X axis : -0.816496580927726 | -0.408248290463863 | 0.408248290463863\n\
//INFO : Component [2] Y axis : -0.577350269189626 | 0.577350269189626 | -0.577350269189626\n\
//INFO : Component [2] Z axis : 0 | -0.707106781186547 | -0.707106781186547\n\
//INFO : Component [3] X axis : -0.408248290463863 | -0.408248290463863 | -0.816496580927726\n\
//INFO : Component [3] Y axis : 0.577350269189626 | 0.577350269189626 | -0.577350269189626\n\
//INFO : Component [3] Z axis : 0.707106781186547 | -0.707106781186547 | 0\n\
//INFO : Component [4] X axis : 0.408248290463863 | -0.816496580927726 | -0.408248290463863\n\
//INFO : Component [4] Y axis : -0.577350269189626 | -0.577350269189626 | 0.577350269189626\n\
//INFO : Component [4] Z axis : -0.707106781186547 | 0 | -0.707106781186547\n\
//INFO : Component [5] X axis : 0.816496580927726 | 0.408248290463863 | -0.408248290463863\n\
//INFO : Component [5] Y axis : 0.577350269189626 | -0.577350269189626 | 0.577350269189626\n\
//INFO : Component [5] Z axis : 0 | -0.707106781186547 | -0.707106781186547\n\
//INFO : Component [6] X axis : -0.816496580927726 | -0.408248290463863 | -0.408248290463863\n\
//INFO : Component [6] Y axis : -0.577350269189626 | 0.577350269189626 | 0.577350269189626\n\
//INFO : Component [6] Z axis : 0 | 0.707106781186547 | -0.707106781186547\n\
//INFO : Component [7] X axis : -0.408248290463863 | 0.816496580927726 | -0.408248290463863\n\
//INFO : Component [7] Y axis : 0.577350269189626 | 0.577350269189626 | 0.577350269189626\n\
//INFO : Component [7] Z axis : 0.707106781186547 | 0 | -0.707106781186547\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-002E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2818E364-41CE-4368-A0C2-BDEC1A7B4434\"></a></span>VBScript Example: Implementing a C++ API-compliant version of the LocalReferenceFrame\n\
                  methods\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F6A5B70-86C7-4015-9690-06614D9EA5A3\"></a></span>The C++ API cannot read the <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> interface and cannot convert it to the CVector3 class, so this version of the custom\n\
                  command returns an array containing the output arguments flattened (that is, each\n\
                  SIVector3 is expanded in place to its x,y,z values).\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-7007B444-7BDE-4E27-B850-268448DAE292\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4416AD5-82CD-40AB-80D9-6B25DF826BF0\"></a></span>Only the implementation is presented here, since all other aspects of the custom command\n\
                        (declaration, initialization) remain the same. See <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingtheLocalReferenceFrame.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-002C\">VBScript Example: Implementing a JScript-compliant version of the LocalReferenceFrame\n\
                              methods</a></span> to see the other callbacks for this command.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Main implementation\n\
function GetLocalReferenceFrame_Execute( InputObjs, Index, Dimension )\n\
	dim oXDGeometry, aInfoCollection\n\
	dim oXAxis, oYAxis, oZAxis \n\
	dim bXAxisValid, bYAxisValid, bZAxisValid\n\
	\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oXAxis = XSIMath.CreateVector3()\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oYAxis = XSIMath.CreateVector3()\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oZAxis = XSIMath.CreateVector3()\n\
	\n\
	\' Make sure input object is valid\n\
	if TypeName(InputObjs(0)) &lt;&gt; \"X3DObject\" then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> GetLocalReferenceFrame_Execute = Nothing\n\
		Application.LogMessage( \"Input object is not a valid object: \" &amp; InputObj.Type )\n\
		exit function\n\
	end if\n\
	\n\
	\' Decide which info to get\n\
	if Dimension = 0 then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oXDGeometry = InputObjs(0).Obj.Geometry0D\n\
	elseif Dimension = 1 then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oXDGeometry = InputObjs(0).Obj.Geometry1D\n\
	else\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oXDGeometry = InputObjs(0).Obj.Geometry2D\n\
	end if\n\
	\n\
	\' Call the correct method and then use the output arguments to populate the array to return\n\
	\' In this case we want to return the actual values of the SIVector3, not the SIVector3 \n\
	\' itself. This is because the C++ API cannot handle the SIVector3 interface so we need to pass\n\
	\' the actual x,y,z values.\n\
	oXDGeometry.LocalReferenceFrame i, oXAxis, bXAxisValid, oYAxis, bYAxisValid, oZAxis, bZAxisValid\n\
	aInfoCollection = Array(	oXAxis.X, oXAxis.Y, oXAxis.Z, bXAxisValid, _\n\
								oYAxis.X, oYAxis.Y, oYAxis.Z, bYAxisValid, _\n\
								oZAxis.X, oZAxis.Y, oZAxis.Z, bZAxisValid )\n\
	 \n\
	\' The array returned will be a 1-dimensional SAFEARRAY\n\
	GetLocalReferenceFrame_Execute = aInfoCollection \n\
end function\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-002F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AB2CD426-97FF-4D85-9900-D212C9AB9E47\"></a></span>C++ Example: Using the VBS wrapper to get the Local Reference Frame\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D5790A5-B519-4E0C-97D4-7DB1AA40408E\"></a></span>This example demonstrates how to get the Local Reference Frame information on a cube\n\
                  using the C++ API. Because the C++ API cannot handle the output arguments returned\n\
                  by the LocalReferenceFrame methods on the deprecated Geometry0D, Geometry1D, and Geometry2D\n\
                  objects, you must write a custom command in VBScript to extract the information and\n\
                  reformat it for use by the C++ API. In this example, the expected result is a flat\n\
                  array of 12 elements arranged as 3 quartets of double, double, double, bool elements.\n\
                  Each quartet represents the x.y.z values plus an indicator of the validity for each\n\
                  axis (as implemented in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingtheLocalReferenceFrame.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-002E\">VBScript Example: Implementing a C++ API-compliant version of the LocalReferenceFrame\n\
                        methods</a></span>).\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	Application app;\n\
	Model root = app.GetActiveSceneRoot();\n\
\n\
	// Create a cube\n\
	X3DObject objItem; root.AddGeometry( L\"Cube\", L\"MeshSurface\", L\"MyCube\", objItem );\n\
\n\
	// Get number of vertices in the cube\n\
	CPointRefArray refPoints = objItem.GetActivePrimitive().GetGeometry().GetPoints();\n\
	LONG nbrPoints = refPoints.GetCount();\n\
\n\
	// Set up the arguments for the custom command\n\
	CValueArray ccArgs(3); CValue ccOut;\n\
	ccArgs[0] = objItem;\n\
	ccArgs[2] = CValue(0.0);\n\
\n\
	// Get the local reference frame for each point\n\
	for ( LONG i=0; i&lt;nbrPoints; ++i ) \n\
	{\n\
		// Run the command (you only need to change the <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> number for this example)\n\
		ccArgs[1] = i;\n\
		app.ExecuteCommand( L\"GetLocalReferenceFrame\", ccArgs, ccOut );\n\
		\n\
		// Grab the output arguments from the returned array\n\
		if ( ccOut.m_t == CValue::siArray ) \n\
		{\n\
			MATH::CVector3 vc3XAxis; MATH::CVector3 vc3YAxis; MATH::CVector3 vc3ZAxis;\n\
			bool booXAxisValid; bool booYAxisValid; bool booZAxisValid;\n\
\n\
			CValueArray aResults(ccOut);\n\
			vc3XAxis.Set( aResults[0], aResults[1], aResults[2]  ); // XAxis \n\
			booXAxisValid = aResults[3];								// XAxisValid \n\
			vc3YAxis.Set( aResults[4], aResults[5], aResults[6]  ); // YAxis \n\
			booYAxisValid = aResults[7];								// YAxisValid \n\
			vc3ZAxis.Set( aResults[8], aResults[9], aResults[10]  ); // ZAxis \n\
			booZAxisValid = aResults[11];								// ZAxisValid \n\
\n\
			// Log the information in Softimage\n\
			if ( booXAxisValid ) \n\
			{\n\
				app.LogMessage ( L\"Component [\" + CString(i) + L\"] X axis : \" + CString(vc3XAxis.GetX()) + L\" | \" + CString(vc3XAxis.GetY()) + L\" | \" + CString(vc3XAxis.GetZ()) );\n\
			} else {\n\
				app.LogMessage ( L\"Component [\" + CString(i) + L\"] INVALID X axis\" );\n\
			}\n\
\n\
			if ( booYAxisValid ) \n\
			{\n\
				app.LogMessage ( L\"Component [\" + CString(i) + L\"] Y axis : \" + CString(vc3YAxis.GetX()) + L\" | \" + CString(vc3YAxis.GetY()) + L\" | \" + CString(vc3YAxis.GetZ()) );\n\
			} else {\n\
				app.LogMessage ( L\"Component [\" + CString(i) + L\"] INVALID Y axis\" );\n\
			}\n\
\n\
			if ( booZAxisValid ) \n\
			{\n\
				app.LogMessage ( L\"Component [\" + CString(i) + L\"] Z axis : \" + CString(vc3ZAxis.GetX()) + L\" | \" + CString(vc3ZAxis.GetY()) + L\" | \" + CString(vc3ZAxis.GetZ()) );\n\
			} else {\n\
				app.LogMessage ( L\"Component [\" + CString(i) + L\"] INVALID Z axis\" );\n\
			}\n\
		}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0030\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C8854B67-8B98-4DB2-BC2B-F77848403082\"></a></span> Local Frame Magic Formula\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-914A29F2-D424-4F9E-81F7-3E7F97D88E8F\"></a></span>The local reference frame for vertices of polygon meshes is computed in object space,\n\
                  as the following:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3677EB80-E467-4C50-A09E-83F4D5700E7E\"></a></span> <em class=\"strong\">Y = vertex normal</em> This is the same as <a href=\"#!/url=./si_om/Geometry0D.Normal.html\">Geometry0D.Normal</a> or <a href=\"#!/url=./si_om/Point.Normal.html\">Point.Normal</a> (or <a href=\"#!/url=./si_cpp/classXSI_1_1Point.html#GetNormal\">Point::GetNormal</a> in the C++ API). To compute it yourself, you have to take the normalized sum of the\n\
                        cross products of the pair of consecutive normalized edge vectors around the vertex.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-42842405-6551-4EB9-9079-618E2AD4F43A\"></a></span> <em class=\"strong\">X = normalized projection of the first edge vector</em> (starting from current vertex) onto the normal plane.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F72EB2F-0DCD-46A6-9D06-D1DAD0930309\"></a></span> <em class=\"strong\">Z = cross prod of X and Y</em>.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";