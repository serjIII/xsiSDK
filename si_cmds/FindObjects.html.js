var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FindObjects</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>FindObjects</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FindObjects</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Finds objects by their type</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = FindObjects( [Path], [Type] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> object that contains the found objects.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Path		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Object path name - NOT IMPLEMENTED 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The Class ID of the Object.  This is GUID which uniquely \n\
		identifies each type of object.  For example, each instance of\n\
		a Phong shader has the same Class ID, which is different from the Class ID\n\
		of a Lambert shader.  You can determine the Class ID from the Reference line\n\
		of the SPDL file or via <a href=\"#!/url=./si_om/DataRepository.GetIdentifier.html\">DataRepository.GetIdentifier</a>. \n\
		Note: To find Self-Installed Custom Operators use \"{72936430-9B0C-4167-8CA7-C30FC2188BB9}\"\n\
		and to find Self-Installed Custom Properties use \"{76332571-D242-11d0-B69C-00AA003B3EA6}\".\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Demonstrates how to use FindObjects to get all models\n\
*/\n\
NewScene( null, false ) ;\n\
var oModel = ActiveSceneRoot.AddModel(null, \"MyModel\" ) ;\n\
var oNestedModel = oModel.AddModel(null, \"Nested1\" ) ;\n\
var oNestedModel = oModel.AddModel(null, \"Nested2\" ) ;\n\
var oNotAModel = oModel.AddNull() ; // Won\'t be found\n\
var classIDOfModels = XSIUtils.DataRepository.GetIdentifier( oModel, siObjectCLSID ) ;\n\
var oColl = FindObjects( null, classIDOfModels ) ;\n\
Application.LogMessage( \"FindObjects found \" + oColl.GetAsText() ) ;\n\
// An alternative way to find models is with the Model property\n\
var oModelsUnderSceneRootModel =  ActiveSceneRoot.Models ;\n\
for ( var i = 0 ; i &lt; oModelsUnderSceneRootModel.count ; i++ )\n\
{\n\
	Application.LogMessage( oModelsUnderSceneRootModel.Item( i ) ) ;		\n\
}\n\
//Expected results:\n\
//\n\
//INFO : FindObjects found MyModel,Nested1,Nested2,Scene_Root\n\
//INFO : MyModel\n\
//INFO : Nested1\n\
//INFO : Nested2</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">SetupDemoScene() ;\n\
DemoSearchFunctions(); \n\
// General function to find all custom properties. This returns a XSICollection and includes all custom properties\n\
// that are part of the scene, or installed as custom preferences or \"free-floating\"\n\
function FindAllCustomProperties( oParent )\n\
{\n\
	// All Custom Properties are registered with this GUID\n\
	return FindObjects( null, \"{76332571-D242-11d0-B69C-00AA003B3EA6}\" ) ;\n\
}\n\
// Function to only find the \"CustomColor\" Custom Property\n\
function FindCustomColorProperties()\n\
{\n\
	var oAllCustomProperties = FindObjects( null, \"{76332571-D242-11d0-B69C-00AA003B3EA6}\" ) ;\n\
	var oFilteredList = new ActiveXObject( \"XSI.Collection\" ) ;\n\
	for ( var i = 0 ; i &lt; oAllCustomProperties.Count ; i++ )\n\
	{\n\
		if ( oAllCustomProperties(i).Type == \"CustomColor\" )\n\
		{\n\
			oFilteredList.Add( oAllCustomProperties(i) ) ;\n\
		}\n\
	}		\n\
	return oFilteredList ;\n\
}\n\
// Function to find all psets under a particular 3dobject\n\
function FindNestedCustomProperties( oParent )\n\
{\n\
	var oAllCustomProperties = FindObjects( null, \"{76332571-D242-11d0-B69C-00AA003B3EA6}\" ) ;\n\
	var oFilteredList = new ActiveXObject( \"XSI.Collection\" ) ;\n\
	for ( var i = 0 ; i &lt; oAllCustomProperties.Count ; i++ )\n\
	{\n\
		// This will be null for free floating custom properties, \n\
		// custom preferences, objects nested under a shader etc\n\
		o3DObjectOfCustomProperty = oAllCustomProperties(i).Parent3DObject ;\n\
		if ( o3DObjectOfCustomProperty  != null &amp;&amp;\n\
			o3DObjectOfCustomProperty.FullName == oParent.FullName )\n\
		{\n\
			oFilteredList.Add( oAllCustomProperties(i) ) ;\n\
		}\n\
	}		\n\
	return oFilteredList ;\n\
}\n\
// Build a scene with Custom Properties at various places\n\
function SetupDemoScene()\n\
{\n\
	NewScene( null, false ) ;\n\
	ActiveSceneRoot.AddProperty( \"CustomColor\", false, \"MyColor\" ) ;\n\
	ActiveSceneRoot.AddProperty( \"CustomColor\", false, \"MyColor2\" ) ;\n\
	ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"MyEmptyCustomProp\" ) ;\n\
	oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" ) ;\n\
	oSphere.AddProperty( \"CustomColor\", false, \"ColorUnderSphere\" ) ;\n\
	oCls = oSphere.ActivePrimitive.Geometry.AddCluster( \"edge\", \"MyCluster\" ) ;\n\
	oCls.AddProperty( \"CustomColor\", false, \"MyColor\" ) ;\n\
	oSphere.AddMaterial( \"Phong\" ) ;\n\
	var oPhongShader = oSphere.Material.Shaders(0)\n\
	oPhongShader.AddProperty( \"CustomProperty\", false, \"EmptyNestedProp\" ) ;\n\
	oPhongShader.AddProperty( \"CustomProperty\", false, \"MyColor\" ) ;	\n\
	var oModel = ActiveSceneRoot.AddModel(null, \"MyModel\" ) ;\n\
	oModel.AddProperty( \"CustomColor\", false, \"MyColor3\" ) ;\n\
	oModel.AddProperty( \"CustomProperty\", false, \"EmptyProperty\" ) ;\n\
	oModel.AddNull().AddProperty( \"CustomColor\", false, \"MyColor4\" ) ;\n\
	// Create a PSet that doesn\'t belong anywhere in the scene\n\
	// It\'s fullname will be something like \"CustomColor&lt;yyyy&gt;\"\n\
	// where yyyy is a number.\n\
	var oFreeFloatingPSet = XSIFactory.CreateObject( \"CustomColor\" ) ;			\n\
}\n\
// Show the result of calling the Find functions\n\
// with the demo scene\n\
function DemoSearchFunctions()\n\
{\n\
	// All Custom Properties\n\
	//\n\
	//Example output (in this case a Custom Preference called\n\
	//XSI_UserNormalEditing is installed):\n\
	//INFO : ------------------------------------------------\n\
	//INFO : All Custom Properties\n\
	//INFO : ------------------------------------------------\n\
	//INFO : sphere.polymsh.cls.MyCluster.MyColor\n\
	//INFO : Sources.Materials.DefaultLib.Material.Phong.EmptyNestedProp\n\
	//INFO : MyEmptyCustomProp\n\
	//INFO : MyColor2\n\
	//INFO : preferences.XSI_UserNormalEditing\n\
	//INFO : CustomColor&lt;1068&gt;\n\
	//INFO : MyColor\n\
	//INFO : MyModel.EmptyProperty\n\
	//INFO : Sources.Materials.DefaultLib.Material.Phong.MyColor\n\
	//INFO : sphere.ColorUnderSphere\n\
	//INFO : MyModel.null.MyColor4\n\
	//INFO : MyModel.MyColor3\n\
	var oAllCustomProperties = FindAllCustomProperties() ;\n\
	PrintCollection( oAllCustomProperties, \"All Custom Properties\" ) ;\n\
	// Find only the Custom Properties that come from the \"Custom Color\"\n\
	// Self-installed Property\n\
	//\n\
	//Example output:	\n\
	//INFO : ------------------------------------------------\n\
	//INFO : Custom Color Properties\n\
	//INFO : ------------------------------------------------\n\
	//INFO : sphere.polymsh.cls.MyCluster.MyColor\n\
	//INFO : MyColor2\n\
	//INFO : CustomColor&lt;1068&gt;\n\
	//INFO : MyColor\n\
	//INFO : sphere.ColorUnderSphere\n\
	//INFO : MyModel.null.MyColor4\n\
	//INFO : MyModel.MyColor3		\n\
	var oCustomColorOnly = FindCustomColorProperties() ;\n\
	PrintCollection( oCustomColorOnly , \"Custom Color Properties\" ) ;\n\
	// Find all the custom properties nested under the sphere\n\
	// Note: It does not include custom properties that are part \n\
	// of the material of the Sphere.\n\
	//\n\
	//Example output:\n\
	//INFO : ------------------------------------------------\n\
	//INFO : Custom Properties Under Sphere\n\
	//INFO : ------------------------------------------------\n\
	//INFO : sphere.polymsh.cls.MyCluster.MyColor\n\
	//INFO : sphere.ColorUnderSphere\n\
	var oSphereCustomProps = FindNestedCustomProperties( GetValue( \"Sphere\" ) ) ;\n\
	PrintCollection( oSphereCustomProps , \"Custom Properties Under Sphere\" ) ;\n\
	// These are custom properties directly under the scene root (not\n\
	// including those nested inside X3DObjects)\n\
	//\n\
	//Example output:\n\
	//INFO : ------------------------------------------------\n\
	//INFO : Custom Properties Under Scene Root\n\
	//INFO : ------------------------------------------------\n\
	//INFO : MyEmptyCustomProp\n\
	//INFO : MyColor2\n\
	//INFO : MyColor	\n\
	var oSceneRootCustomProps = FindNestedCustomProperties( ActiveSceneRoot ) ;\n\
	PrintCollection( oSceneRootCustomProps, \"Custom Properties Under Scene Root\" ) ;		\n\
}\n\
// Show contents of a XSICollection object in the Script history\n\
function PrintCollection( in_col, in_title )\n\
{\n\
	LogMessage( \"------------------------------------------------\" ) ;\n\
	LogMessage( in_title ) ;\n\
	LogMessage( \"------------------------------------------------\" ) ;\n\
	for ( var i = 0 ; i &lt; in_col.Count ; i++ )\n\
	{\n\
		LogMessage( in_col(i).FullName ) ;		\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how FindObjects can be used to quickly find all instances of a particular type of shader.\n\
	This approach can be faster than doing a recursive search through all the scene shader trees.\n\
*/\n\
SetupDemoScene() ;\n\
LogMessage( DiscoverCloudClassID() ) ;\n\
//INFO : {A85CBE5F-DDD7-11D1-804A-00A0C906835D}\n\
LogMessage( DiscoverImageClassID() ) ;\n\
//INFO : {1C500B61-023C-11D3-8C03-00A0243E3672}\n\
var oAllClouds = FindCloudShaders() ;\n\
PrintCollection( oAllClouds, \"All Cloud Shaders\" ) ;\n\
//INFO : ------------------------------------------------\n\
//INFO : All Cloud Shaders\n\
//INFO : ------------------------------------------------\n\
//INFO : Sources.Materials.DefaultLib.Material.Phong.Cloud1\n\
//INFO : Sources.Materials.DefaultLib.Material.Phong.Cloud1.Cloud2\n\
//INFO : Sources.Materials.DefaultLib.Material1.Lambert.Cloud3\n\
//INFO : Sources.Materials.DefaultLib.Material1.Lambert.Cloud3.Cloud4\n\
//INFO : Sources.Materials.DefaultLib.Material1.Lambert.Cloud5\n\
var oAllImages = FindImageShaders() ;\n\
PrintCollection( oAllImages, \"All Image Shaders\" ) ;\n\
//INFO : ------------------------------------------------\n\
//INFO : All Image Shaders\n\
//INFO : ------------------------------------------------\n\
//INFO : Sources.Materials.DefaultLib.Material.Phong.Image\n\
function FindCloudShaders()\n\
{\n\
	// This GUID was determined by calling DiscoverCloudClassID().\n\
	// Because it never changes it can be hardcoded rather than\n\
	// being re-discovered each time the script is run\n\
	return FindObjects( null, \"{A85CBE5F-DDD7-11D1-804A-00A0C906835D}\" ) ;	\n\
}\n\
function FindImageShaders()\n\
{	\n\
	// Using GUID returned by DiscoverImageClassID()	\n\
	return FindObjects( null, \"{1C500B61-023C-11D3-8C03-00A0243E3672}\" ) ;	\n\
}\n\
// Function to determine the ClassID of the Cloud Shader\n\
// Similar code can work for custom shaders, and the GUID can also\n\
// be read from the SPDL file and is visible in the SDK Explorer \n\
function DiscoverCloudClassID()\n\
{\n\
	var oTempCloud = XSIFactory.CreateObjectFromPreset( \n\
			\"Cloud\", \n\
			\"Texture Shaders\" ) ;\n\
	var oCloudGUID = GetClassID( oTempCloud ) ;\n\
	// Delete the shader right away so it doesn\'t appear when we search\n\
	DeleteObj( oTempCloud ) ;\n\
	return oCloudGUID ;\n\
}\n\
function DiscoverImageClassID()\n\
{\n\
	var oTempImageNode = XSIFactory.CreateObjectFromPreset( \n\
			\"Image\", \n\
			\"Texture Shaders\" ) ;\n\
	var oImageGUID = GetClassID( oTempImageNode ) ;\n\
	DeleteObj( oTempImageNode ) ;\n\
	return oImageGUID ;\n\
}\n\
// Determine the ClassID GUID of a particular object.\n\
// All other instances of this object have this same GUID\n\
// and it never changes.\n\
function GetClassID( in_ExampleObject )\n\
{\n\
	oDataRepository = XSIUtils.DataRepository ;\n\
	return oDataRepository.GetIdentifier( in_ExampleObject, siObjectCLSID ) ;\n\
}\n\
// Build some render trees with the Object Model\n\
// They don\'t make any sense in terms of rendering\n\
// a nice texture, but show nodes connected in various ways\n\
function SetupDemoScene()\n\
{\n\
	NewScene( null, false ) ;\n\
	// First render tree\n\
	oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" ) ;\n\
	oSphere.AddMaterial( \"Phong\" ) ;\n\
	var oPhongShader = oSphere.Material.Shaders(0) ;\n\
	ImageFile1 = XSIUtils.BuildPath( Application.InstallationPath(siFactoryPath),\n\
					\"Data\",\n\
					\"XSI_SAMPLES\",\n\
					\"Pictures\",\n\
					\"jaiqua_face.jpg\" ) ;\n\
	var oImageClip1 = SICreateImageClip2( ImageFile1 ).Item(0) ;\n\
	var oAmbientParam = oPhongShader.Parameters( \"ambient\" )\n\
	var oImageNode1 = oAmbientParam.connectfrompreset(\"Image\", siTextureShaderFamily) ;\n\
	oImageNode1.Parameters( \"tex\" ).Connect( oImageClip1 ) ;\n\
	var oDiffuseParam = oPhongShader.Parameters( \"diffuse\" )\n\
	var oCloud1 = oDiffuseParam.connectfrompreset(\"Cloud\", siTextureShaderFamily) ;\n\
	oCloud1.Name = \"Cloud1\" ;\n\
	var oCloud1Color1 = oCloud1.Parameters(\"color1\") ;\n\
	var oCloud2 = oCloud1Color1.connectfrompreset(\"Cloud\", siTextureShaderFamily) ;\n\
	oCloud2.Name = \"Cloud2\" ;\n\
	//Second render tree\n\
	oCone = ActiveSceneRoot.AddGeometry( \"Cone\", \"MeshSurface\" ) ;\n\
	oCone.AddMaterial( \"Lambert\" ) ;\n\
	var oLamberShader = oCone.Material.Shaders(0) ;\n\
	oDiffuseParam = oLamberShader.Parameters( \"diffuse\" ) ;\n\
	var oCloud3= oDiffuseParam.connectfrompreset(\"Cloud\", siTextureShaderFamily);\n\
	oCloud3.Name = \"Cloud3\" ;\n\
	oCloud3Color2 = oCloud3.Parameters( \"color2\" ) ;\n\
	oCloud4= oCloud3Color2.connectfrompreset(\"Cloud\", siTextureShaderFamily);\n\
	oCloud4.Name = \"Cloud4\"\n\
	// Fractal is connected twice. This can provide a tricky\n\
	// scenario for recursive scans of a shader tree, because the\n\
	// same shaders can appear multiple times.  \n\
	// But FindObjects() would have not trouble finding just one instance\n\
	// of this object\n\
	oCloud3Color1 = oCloud3.Parameters( \"color1\" ) ;\n\
	oCloud3Color1.Connect( oCloud4 ) ;	\n\
	oAmbientParam = oLamberShader.Parameters( \"ambient\" ) ;\n\
	oCloud5 = oAmbientParam.connectfrompreset(\"Cloud\", siTextureShaderFamily) ;\n\
	oCloud5.Name = \"Cloud5\" ;	\n\
}\n\
// Show contents of a XSICollection object in the Script history\n\
function PrintCollection( in_col, in_title )\n\
{\n\
	LogMessage( \"------------------------------------------------\" ) ;\n\
	LogMessage( in_title ) ;\n\
	LogMessage( \"------------------------------------------------\" ) ;\n\
	for ( var i = 0 ; i &lt; in_col.Count ; i++ )\n\
	{\n\
		LogMessage( in_col(i).FullName ) ;		\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>4. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Demonstration of how to use FindObjects to \n\
// find Runtime scripted operators in the scene.\n\
//\n\
// This technique does not find SPDL-based custom operators\n\
// because once a Custom Operator is stored inside a SPDL file\n\
// it is assigned its own GUID, which is found as the Reference \n\
// value at the top of the file.\n\
function GetAllRuntimeCustomOperators()\n\
{\n\
	var siScriptedOperatorID = \"{CCECD9D9-10A3-11d4-879F-00A0C983050D}\"\n\
	var oItems = FindObjects(null,siScriptedOperatorID)\n\
	// For convenience to the caller,\n\
	// always return a collection even if nothing was found\n\
	if ( oItems == null )\n\
		oItems = new ActiveXObject( \"XSI.Collection\") ;\n\
	return oItems ;\n\
}\n\
// Simple usage of GetAllRuntimeCustomOperators\n\
function SelectAllRuntimeOperators()\n\
{\n\
	SelectObj( GetAllRuntimeCustomOperators() ) ;\n\
}\n\
//\n\
// Demonstration of GetAllRuntimeCustomOperators\n\
//\n\
function BuildDemoScene()\n\
{\n\
	var oNull = Application.ActiveSceneRoot.AddNull() ;\n\
	var oPosX = oNull.Kinematics.Global.Parameters( \"posx\" ) ;\n\
	var oRotX = oNull.Kinematics.Local.Parameters( \"rotx\" ) ;\n\
	AddSimpleOp( oPosX ) ;\n\
	AddSimpleOp( oRotX ) ;	\n\
}\n\
function AddSimpleOp( in_param )\n\
{\n\
	// Build a runtime operator that drives in_param\n\
	var oOp = XSIFactory.CreateScriptedOp( \n\
				\"FindMe\",\n\
				FindMe_Update.toString(),\n\
				\"JScript\" ) ;\n\
	oOp.AlwaysEvaluate = true ;		\n\
	oOp.AddOutputPort( in_param ) ;\n\
	oOp.Connect() ;\n\
}\n\
function FindMe_Update(ctx,out)\n\
{\n\
	// Just set the output parameter\n\
	// to current frame value\n\
	out.Value = ctx.CurrentFrame ;\n\
}\n\
BuildDemoScene() ;\n\
var oOps = GetAllRuntimeCustomOperators() ;\n\
for ( var i = 0 ; i &lt; oOps.Count ; i++ )\n\
{\n\
	Application.LogMessage( oOps(i).FullName )  ;\n\
}\n\
//Expected output:\n\
//INFO : null.kine.global.FindMe\n\
//INFO : null.kine.local.FindMe</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/DataRepository.GetIdentifier.html\">DataRepository.GetIdentifier</a> <a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">X3DObject.FindChildren</a> <a href=\"#!/url=./si_om/XSIFactory.CreateObject.html\">XSIFactory.CreateObject</a> <a href=\"#!/url=./si_om/XSIFactory.CreateObjectFromPreset.html\">XSIFactory.CreateObjectFromPreset</a> <a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">SIObject.NestedObjects</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";