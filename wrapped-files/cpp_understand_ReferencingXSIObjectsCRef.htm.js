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
      <meta name=\"topicid\" content=\"GUID-63CB22C0-01C2-46AB-B83C-45EE49313C75\" />\n\
      <meta name=\"indexterm\" content=\"Example: Creating objects in Softimage\" />\n\
      <meta name=\"indexterm\" content=\"Example: Accessing the geometry of 3d objects (typed)\" />\n\
      <meta name=\"indexterm\" content=\"Example: Accessing the parameters of 3d objects\" />\n\
      <meta name=\"indexterm\" content=\"Example: Accessing the geometry of 3d objects (not typed)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Referencing Softimage Objects: CRef</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"points\", \"si_cpp/group__RenderMapDefine.html#ga7b51c5e95877ebaeb51314f8731f55f6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-63CB22C0-01C2-46AB-B83C-45EE49313C75\"></a></span><div class=\"head\">\n\
            <h1>Referencing Softimage Objects: CRef</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E61EEC0-4EBD-4F6D-AEE7-2EA963523CC0\"></a></span>The C++ API uses the <a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> class to reference Softimage objects and the <a href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a> class is the base class of all API classes. You can get the underlying object class\n\
               type of a CRef object to determine if it is compatible with a given API class:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
siClassID GetClassID() const;\n\
bool IsA( siClassID in_classID ) const;\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A7511B7-2F5C-4A66-9E75-32633919D9D1\"></a></span>CBase provides methods to determine if an API class is compatible with a given Softimage\n\
               object type or a specific CRef instance:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
virtual bool IsA( siClassID in_ClassID ) const;\n\
bool IsA( const CRef&amp; in_ref ) const;\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-41237FCF-167D-42CA-BAC7-6231007E0961\"></a></span>A CRef object can only have one Softimage object type, and a API class can have only\n\
               one API class type. However, a CRef object can be compatible with many API classes.\n\
               This compatibility model follows the hierarchy class, so that a CRef object with the\n\
               <span class=\"code\" translate=\"no\">siPolygonMeshID</span> type is compatible with <a href=\"#!/url=./si_cpp/classXSI_1_1PolygonMesh.html\">PolygonMesh</a>, <a href=\"#!/url=./si_cpp/classXSI_1_1Geometry.html\">Geometry</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">SIObject</a> classes.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D563FA7-833F-4D83-BE2A-B7FCB43F6219\"></a></span>The following example demonstrates the use of the RTTI system. The example iterates\n\
               over a list of objects and gets the geometry of each primitive.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0004\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B2E1BA5A-3324-4CC7-B637-D32081D430BB\"></a></span> Example: Creating objects in Softimage\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-91B9B443-ECFD-49CC-B9D2-E4D703B9B7C5\"></a></span>This example shows how to hook into Softimage to create a cube, a cone, and add a\n\
                  phong shader to the cone. Then these items are added to the array specified. This\n\
                  function (GetSomeObjects) is also used in the next few examples.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using namespace XSI;\n\
\n\
// Fills an array with CRef objects\n\
void GetSomeObjects( CRefArray&amp; io_array, const Application&amp; in_app )\n\
{\n\
		X3DObject myCube;\n\
		X3DObject myCone;\n\
		Material myPhong;\n\
\n\
		Model root = in_app.GetActiveSceneRoot();\n\
\n\
		root.AddGeometry( L\"Cube\", L\"MeshSurface\", L\"\", myCube );\n\
		root.AddGeometry( L\"Cone\", L\"MeshSurface\", L\"\", myCone );\n\
		myCone.AddMaterial(L\"Phong\", false, L\"\", myPhong );\n\
\n\
		// add CRef items to the input array\n\
		io_array.Add(myCube.GetActivePrimitive().GetRef());\n\
		io_array.Add(myCone.GetActivePrimitive().GetRef());\n\
		io_array.Add(myPhong.GetRef());\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0005\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E4AC50E1-77A9-4259-A66C-B4FD532DAD01\"></a></span> Example: Accessing the geometry of 3d objects (typed)\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-830C8B65-C1EA-4408-AB91-2490FC2C0E83\"></a></span>This example uses the GetSomeObjects() function defined in <span class=\"char_link\"><a href=\"#!/url=./files/cpp_understand_ReferencingXSIObjectsCRef.htm#WS7902B6CCE0739F4D8C2836B524C1EB2F-0004\">Example: Creating objects in Softimage</a></span> to populate a reference array and then loop through it, testing each item and printing\n\
                  its name and the number of points on its geometry.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using namespace XSI;\n\
Application app;\n\
\n\
CRefArray array;\n\
GetSomeObjects(array,app);\n\
\n\
Geometry geom;\n\
Primitive prim;\n\
for (long i = 0; i &lt; array.GetCount(); ++i )\n\
{\n\
	if (array[i].IsA( siPrimitiveID ) )\n\
	{\n\
		prim.SetObject(array[i]);\n\
		geom = prim.GetGeometry();\n\
\n\
		app.LogMessage( geom.GetName() + L\" is a valid Geometry object: \" \n\
				+ CValue(geom.IsValid()).GetAsText() );\n\
		app.LogMessage( L\"Number of <a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a> on \" + geom.GetName() + L\": \" \n\
				+ CValue(geom.GetPoints().GetCount()).GetAsText() );\n\
	}\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0006\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BE800E44-050C-4F08-8C94-69E554FF73F3\"></a></span> Example: Accessing the parameters of 3d objects\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E0B0601-384B-4FC2-99D7-E73EFF48D665\"></a></span>This example uses the GetSomeObjects() function defined in <span class=\"char_link\"><a href=\"#!/url=./files/cpp_understand_ReferencingXSIObjectsCRef.htm#WS7902B6CCE0739F4D8C2836B524C1EB2F-0004\">Example: Creating objects in Softimage</a></span> to populate a reference array and then adds any objects it finds in the scene and\n\
                  the parameters of a new grid to the array. Then it loops through the array, testing\n\
                  each item and printing its class type and some type-specific information.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	using namespace XSI;\n\
	Application app;\n\
\n\
	CRefArray array;\n\
	GetSomeObjects(array,app);\n\
\n\
	// Find all X3DObject in the scene and adds it to the ref array\n\
	CStringArray emptyArray;\n\
	Model root( app.GetActiveSceneRoot() );\n\
\n\
	array += root.FindChildren( L\"\", L\"\", emptyArray, true );\n\
\n\
	// add grid\'s parameters to ref array\n\
	X3DObject grid;\n\
	root.AddGeometry( L\"Grid\", L\"MeshSurface\", L\"\", grid );\n\
\n\
	array += grid.GetParameters();\n\
\n\
	for (long i = 0; i &lt; array.GetCount(); ++i )\n\
	{\n\
		app.LogMessage(L\"\");\n\
\n\
		CRef ref(array[i]);\n\
		app.LogMessage( CString(L\"&gt;&gt;Reference object class type: \") \n\
								+ ref.GetClassName() );\n\
\n\
		if ( ref.IsA( siSIObjectID ) )\n\
		{\n\
			SIObject siobj(ref);\n\
			app.LogMessage( CString(L\"\\tObject name: \") + siobj.GetName() );\n\
		}\n\
\n\
		if ( ref.IsA( siX3DObjectID ) )\n\
		{\n\
			X3DObject xobj(ref);\n\
			app.LogMessage( CString(L\"\\tNumber of children : \") + \n\
							CValue(xobj.GetChildren().GetCount()).GetAsText() );\n\
		}\n\
\n\
		if ( ref.IsA( siParameterID ) )\n\
		{\n\
			Parameter param(ref);\n\
			app.LogMessage( CString(L\"\\tParameter\'s value : \") + \n\
							param.GetValue().GetAsText() );\n\
		}\n\
	}\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-165074B6-E00F-4535-83AD-F8775EACDC1C\"></a></span>API classes can also accept any kind of object without knowing how to operate on it.\n\
                  If the reference object passed to SetObject is incompatible then the API class is\n\
                  put in an invalid state and all its methods return errors. The code below continues\n\
                  working even though the reference object is incompatible:\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0007\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8AFA4415-C5F7-4D6E-BBD4-4BF60595716A\"></a></span> Example: Accessing the geometry of 3d objects (not typed)\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D79BBC59-2601-42EA-BB2D-5B454BF8E145\"></a></span>This example uses the GetSomeObjects() function defined in <span class=\"char_link\"><a href=\"#!/url=./files/cpp_understand_ReferencingXSIObjectsCRef.htm#WS7902B6CCE0739F4D8C2836B524C1EB2F-0004\">Example: Creating objects in Softimage</a></span> to populate a reference array and then loop through it, printing each item\'s name\n\
                  and the number of points on its geometry. This is similar to the example in <span class=\"char_link\"><a href=\"#!/url=./files/cpp_understand_ReferencingXSIObjectsCRef.htm#WS7902B6CCE0739F4D8C2836B524C1EB2F-0005\">Example: Accessing the geometry of 3d objects (typed)</a></span> but uses the generic SIObject class instead of the specific Primitive and Geometry\n\
                  classes.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	using namespace XSI;\n\
	Application app;\n\
\n\
	CRefArray array;	\n\
	GetSomeObjects(array,app);\n\
\n\
	Geometry geom;\n\
	Primitive prim;	\n\
	for (long i = 0; i &lt; array.GetCount(); ++i )\n\
	{\n\
		prim.SetObject(array[i]);\n\
		geom = prim.GetGeometry();\n\
\n\
		SIObject obj(array[i]);\n\
		app.LogMessage( obj.GetName() + L\" is a valid Geometry object: \" +\n\
			CValue(geom.IsValid()).GetAsText() );\n\
		app.LogMessage( L\"Number of <a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a> on \" + obj.GetName() + L\": \" +\n\
			CValue(geom.GetPoints().GetCount()).GetAsText() );\n\
	}\n\
</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E5A776F9-03B6-4FC3-B593-86835D2CC131\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D56FA178-5E8B-40BE-95E7-5C3289A25458\"></a></span>This example is less efficient than the first example. Working in a typed manner like\n\
                        in the first example is much more efficient as it doesn\'t perform any unnecessary\n\
                        operations as in this example.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";