var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Shader</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>Shader</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Shader</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Shader\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Shader.html\">Shader</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\">Shader</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Shader object represents a node in the render tree of an object. The initial Shader \n\
of a render tree can be created with <a href=\"#!/url=./si_om/SceneItem.AddMaterial.html\">SceneItem.AddMaterial</a> and additional \n\
shaders can be created and connected together with <a href=\"#!/url=./si_om/Parameter.ConnectFromPreset.html\">Parameter.ConnectFromPreset</a> \n\
and <a href=\"#!/url=./si_om/Parameter.Connect.html\">Parameter.Connect</a>.<br /><br />\n\
A Shader is a type of <a href=\"#!/url=./files/DataSource.htm\">DataSource</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.AddProperty.html\">AddProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.AddSharedTextureLayer.html\">AddSharedTextureLayer</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.CodePath.html\">CodePath</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.CodeText.html\">CodeText</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.CreateTextureLayer.html\">CreateTextureLayer</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.GetAllShaders.html\">GetAllShaders</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.GetPortDisplayName.html\">GetPortDisplayName</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.GetShaderContainer.html\">GetShaderContainer</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.GetShaderInputType.html\">GetShaderInputType</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.GetShaderParameterTargets.html\">GetShaderParameterTargets</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.GetShaderParameterType.html\">GetShaderParameterType</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.HasRenderer.html\">HasRenderer</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.PutPortDisplayName.html\">PutPortDisplayName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.RemoveTextureLayer.html\">RemoveTextureLayer</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.RendererOptionValue.html\">RendererOptionValue</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.SymbolName.html\">SymbolName</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.AllImageClips.html\">AllImageClips</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.ImageClips.html\">ImageClips</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockLevel.html\">LockLevel</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockMasters.html\">LockMasters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockType.html\">LockType</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Model.html\">Model</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ObjectID.html\">ObjectID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.OutputType.html\">OutputType</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.ProgID.html\">ProgID</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.Properties.html\">Properties</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.Root.html\">Root</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.ShaderDef.html\">ShaderDef</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.ShaderType.html\">ShaderType</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.Shaders.html\">Shaders</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Shader.TextureLayers.html\">TextureLayers</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example shows how to access the shader on an object\n\
\'\n\
NewScene , false\n\
dim root, grid\n\
set root = ActiveProject.ActiveScene.Root\n\
set grid = root.AddGeometry(\"Grid\", \"MeshSurface\")\n\
\'Create a Lambert shader\n\
grid.AddMaterial \"Lambert\" \n\
\'Access the new Shader\n\
LogMessage \"Shader name:\" &amp; grid.Material.Shaders(0).Name</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example shows how to recursively search a render tree\n\
\'\n\
\'	It shows how to access Shaders via the Source property of a Parameter\n\
\'	It also shows how to use XSICollection object to accumulate a list of objects\n\
\'\n\
\'	Note: to find ImageClips the Material.ImageClips property can be used rather\n\
\'	a recursive scan like this.  And the FindObjects command can be used to find\n\
\'	all shaders of a particular type.\n\
\'\n\
set oObj = BuildDemoScene			\' Create a little sample render tree\n\
FindShaders(oObj)					\' Search the scene to find and log shaders\n\
\' ---------------------------------------------------\n\
\' Expected results:\n\
\' INFO : Skipping Sources.Materials.DefaultLib.Material.Phong\n\
\' INFO : SUMMARY: Searched 2 shader(s)\n\
\' INFO : SHADERS SEARCHED:\n\
\' INFO : Sources.Materials.DefaultLib.Material.Phong\n\
\' INFO : Sources.Materials.DefaultLib.Material.Lambert\n\
\' ---------------------------------------------------\n\
\' This is the actual code doing the searching\n\
sub FindShaders( in_oObj )\n\
	dim oShaderList, oImageClipList\n\
	set oShaderList = CreateObject(\"XSI.Collection\")\n\
	oShaderList.Unique = true\n\
	\' We expect the input object to be a \"SceneItem\" object\n\
	set oMat = in_oObj.Material\n\
	\' Although not actually a shader, we start searching\n\
	\' for shaders from the parameters of the material\n\
	SearchShader oMat, oShaderList\n\
	Application.LogMessage \"SUMMARY: Searched \" &amp; oShaderList.Count &amp; \" shader(s)\"\n\
	if ( oShaderList.Count &gt; 0 ) then\n\
		Application.LogMessage \"SHADERS SEARCHED:\"\n\
		for each oShader in oShaderList\n\
			Application.LogMessage oShader.Fullname\n\
		next				\n\
	end if\n\
end sub\n\
\' Recursively search any connected shaders\n\
\' Each shader is visited only once\n\
sub SearchShader( in_oShader, io_oVisitedShaderList)\n\
	for each oParam in in_oShader.Parameters\n\
		if typename( oParam.Source ) = \"Shader\" then\n\
			if ( NOT IsShaderInList(oParam.Source, io_oVisitedShaderList) ) then\n\
				io_oVisitedShaderList.Add(oParam.Source)\n\
				\' Recursively search this shader\n\
				SearchShader oParam.Source, io_oVisitedShaderList \n\
			end if \n\
		end if\n\
	next\n\
end sub\n\
\' Determines if a shader is already in an XSICollection\n\
function IsShaderInList( oShader, io_oVisitedShaderList )\n\
	for each oVisitedShader in io_oVisitedShaderList	\n\
		if (oVisitedShader.FullName = oShader.FullName) then\n\
			Application.LogMessage \"Skipping \" &amp; oShader.FullName\n\
			IsShaderInList = true\n\
			exit function\n\
		end if\n\
	next\n\
	IsShaderInList = false \n\
end function\n\
\' ---------------------------------------------------\n\
\' Create a little sample render tree\n\
\' It has no interesting visual appearance but is a render tree with\n\
\' various shaders and two images so that we can demonstrate the \n\
\' FindImageClips routine\n\
\'\n\
\' Return value is the X3DObject\n\
function BuildDemoScene\n\
	ImageFile1 = XSIUtils.BuildPath(_\n\
		Application.InstallationPath(siFactoryPath), _\n\
		\"Data\", \"XSI_SAMPLES\", \"Pictures\", \"jaiqua_face.jpg\" )			\n\
	ImageFile2 = XSIUtils.BuildPath(_ \n\
		Application.InstallationPath(siFactoryPath), _\n\
		\"Data\", \"XSI_SAMPLES\", \"Pictures\", \"ehair_08.jpg\" )			\n\
	NewScene , false\n\
	set oObj = ActiveSceneRoot.AddGeometry(\"Sphere\", \"MeshSurface\")\n\
	oObj.AddMaterial \"Phong\" \n\
	dim oPhongShader, oAmbientParam, oDiffuseParam, oShinyParam\n\
	set oPhongShader = oObj.Material.Shaders(0)\n\
	set oAmbientParam = oPhongShader.Parameters(\"ambient\")\n\
	set oDiffuseParam = oPhongShader.Parameters(\"diffuse\")	\n\
	set oShinyParam = oPhongShader.Parameters(\"shiny\")	\n\
	dim oImageClip1, oImageClip2\n\
	SICreateImageClip ImageFile1, ,oImageClip1	\n\
	SICreateImageClip ImageFile2, ,oImageClip2\n\
	dim oImageNode1,oImageNode2\n\
	set oImageNode1 = oAmbientParam.connectfrompreset(\"Image\", siTextureShaderFamily)\n\
	oDiffuseParam.Connect(oImageNode1)	\n\
	oImageNode1.Parameters(\"tex\").Connect(oImageClip1)\n\
	set oImageNode2 = oShinyParam.connectfrompreset(\"Image\", siTextureShaderFamily)\n\
	oImageNode2.Parameters(\"tex\").Connect(oImageClip2)\n\
	\' Commands can also be used to build a render tree\n\
	CreateShaderFromPreset \"Shaders\\Material\\Lambert.Preset\", \"Sources.Materials.DefaultLib.Material\"\n\
	SIConnectShaderToCnxPoint \"Sources.Materials.DefaultLib.Material.Lambert\", oObj.Material &amp; \".Photon\"\n\
	\' Return the sphere\n\
	set BuildDemoScene = oObj\n\
end function</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example lists all installed shaders with their ProgId and OutputType, \n\
	plus all texturable parameters and their shader input type.\n\
*/\n\
var re = / /g;\n\
var strShaderNames = Dictionary.info(\"\",siShaderFamily).replace(re,\"\");\n\
var aShaders = strShaderNames.split(\",\");\n\
XSIUtils.QuickSort( aShaders );\n\
var colitem = XSIFactory.CreateObject(\"XSI.CollectionItem\");\n\
var cShaders = 0;\n\
for ( var i = 0; i &lt; aShaders.length; i++ )\n\
{\n\
	var shader = null;\n\
	var progid = \"Softimage.\" + aShaders[i];\n\
	if ( progid == \"Softimage.TraversalCallback\" ) continue;\n\
	try {\n\
		shader = XSIFactory.CreateObject( progid );\n\
	} catch (e) {\n\
		logmessage( \"Error: can\'t create shader : \" + progid );\n\
		continue;\n\
	}\n\
	cShaders++;\n\
	logmessage( progid + \" \" + ShaderParameterTypeAsText(shader.OutputType) );\n\
	var params = shader.parameters;\n\
	for ( var j = 0; j &lt; params.count; j++ )\n\
	{\n\
		var param = shader.parameters(j);\n\
		if ( param.capabilities &amp; siTexturable )					\n\
			logmessage( \"\\t\" + param.name + \" \" + ShaderParameterTypeAsText(shader.GetShaderInputType(param.scriptname)));\n\
	}\n\
}\n\
logmessage( \"Shaders found = \" + cShaders );\n\
function ShaderParameterTypeAsText(type)\n\
{\n\
	switch (type)\n\
	{\n\
		case siUnknownParameterType : return \"siUnknownParameterType\";			\n\
		case siBooleanParameterType : return \"siBooleanParameterType\";			\n\
		case siColorParameterType : return \"siColorParameterType\";			\n\
		case siDataParameterType : return \"siDataParameterType\";			\n\
		case siIntegerParameterType : return \"siIntegerParameterType\";			\n\
		case siLensParameterType : return \"siLensParameterType\";			\n\
		case siLightParameterType : return \"siLightParameterType\";			\n\
		case siMaterialParameterType : return \"siMaterialParameterType\";			\n\
		case siMatrixParameterType : return \"siMatrixParameterType\";			\n\
		case siModelParameterType : return \"siModelParameterType\";			\n\
		case siRealTimeParameterType : return \"siRealTimeParameterType\";			\n\
		case siReferenceParameterType : return \"siReferenceParameterType\";			\n\
		case siScalarParameterType : return \"siScalarParameterType\";			\n\
		case siShaderParameterType : return \"siShaderParameterType\";			\n\
		case siStringParameterType : return \"siStringParameterType\";			\n\
		case siStructParameterType : return \"siStructParameterType\";			\n\
		case siTextureParameterType : return \"siTextureParameterType\";			\n\
		case siTextureSpaceParameterType : return \"siTextureSpaceParameterType\";			\n\
		case siVectorParameterType : return \"siVectorParameterType\";			\n\
		default: return type;\n\
	}\n\
}\n\
//</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Material.Shaders.html\">Material.Shaders</a> <a href=\"#!/url=./si_om/Light.Shaders.html\">Light.Shaders</a> <a href=\"#!/url=./si_om/Camera.Shaders.html\">Camera.Shaders</a> <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a> <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> <a href=\"#!/url=./si_om/Texture.html\">Texture</a> <a href=\"#!/url=./si_om/TextureLayer.html\">TextureLayer</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";