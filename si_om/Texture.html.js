var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Texture</title>\n\
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
            <h1>Texture</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Texture</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_Texture\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1Texture.html\">Texture</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/Shader.html\">Shader</a></p>\n\
<p class=\"level4\">Texture</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The Texture object represents the current texture as specified by the OGL hardware display settings. \n\
While there may be many texture shaders in a shader tree, only the Texture object represents the current texture. \n\
You can get the current texture using <a href=\"#!/url=./si_om/Material.CurrentTexture.html\">Material.CurrentTexture</a>.\n\
<br /><br />\n\
The UVW values obtained from <a href=\"#!/url=./si_om/Texture.GetTransformValues.html\">Texture.GetTransformValues</a> are based \n\
on the current image clip (<a href=\"#!/url=./si_om/Material.CurrentImageClip.html\">Material.CurrentImageClip</a>) and the current UVW texture property \n\
(<a href=\"#!/url=./si_om/Material.CurrentUV.html\">Material.CurrentUV</a>).\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">AddCustomOp</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddICEAttribute.html\">AddICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.AddProperty.html\">AddProperty</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">AddScriptedOp</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOpFromFile.html\">AddScriptedOpFromFile</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.AddSharedTextureLayer.html\">AddSharedTextureLayer</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.AnimatedParameters2.html\">AnimatedParameters2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BelongsTo.html\">BelongsTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.CodePath.html\">CodePath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.CodeText.html\">CodeText</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.CreateTextureLayer.html\">CreateTextureLayer</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.GetAllShaders.html\">GetAllShaders</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.GetICEAttributeFromName.html\">GetICEAttributeFromName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.GetPortDisplayName.html\">GetPortDisplayName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.GetShaderContainer.html\">GetShaderContainer</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.GetShaderInputType.html\">GetShaderInputType</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.GetShaderParameterTargets.html\">GetShaderParameterTargets</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.GetShaderParameterType.html\">GetShaderParameterType</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/Texture.GetTransformValues.html\">GetTransformValues</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.HasRenderer.html\">HasRenderer</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsA.html\">IsA</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">IsAnimated2</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsKindOf.html\">IsKindOf</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsLocked.html\">IsLocked</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">IsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.LockOwners.html\">LockOwners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.PutPortDisplayName.html\">PutPortDisplayName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.RemoveICEAttribute.html\">RemoveICEAttribute</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.RemoveTextureLayer.html\">RemoveTextureLayer</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.RendererOptionValue.html\">RendererOptionValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">SetAsSelected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetCapabilityFlag.html\">SetCapabilityFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">SetLock</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.SymbolName.html\">SymbolName</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.TaggedParameters.html\">TaggedParameters</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">UnSetLock</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.AllImageClips.html\">AllImageClips</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">BranchFlag</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">Capabilities</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.EvaluationID.html\">EvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Families.html\">Families</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.HierarchicalEvaluationID.html\">HierarchicalEvaluationID</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.ICEAttributes.html\">ICEAttributes</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.ImageClips.html\">ImageClips</a>		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.OutputType.html\">OutputType</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Owners.html\">Owners</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">PPGLayout</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Parent3DObject.html\">Parent3DObject</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.ProgID.html\">ProgID</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.Properties.html\">Properties</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.Root.html\">Root</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/ProjectItem.Selected.html\">Selected</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.ShaderDef.html\">ShaderDef</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.ShaderType.html\">ShaderType</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.Shaders.html\">Shaders</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/Shader.TextureLayers.html\">TextureLayers</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to get the Texture from the object\'s\n\
\' Material once a texture projection has been applied to the object.\n\
\'\n\
\' Create scene content\n\
NewScene , false\n\
set oGrid = CreatePrim( \"Grid\", \"MeshSurface\" )\n\
SetValue oGrid &amp; \".polymsh.geom.subdivu\", 2\n\
SetValue oGrid &amp; \".polymsh.geom.subdivv\", 1\n\
\' Put a text projection of the default image on the grid\n\
ApplyShader ,,,, siLetLocalMaterialsOverlap\n\
BlendInPresetsInsp ,,, True, True\n\
CreateProjection oGrid, siTxtPlanarXZ, siTxtDefaultSpherical, \"Texture_Support\", \"Texture_Projection\"\n\
SetInstanceDataValue , oGrid &amp; \".Material.Phong.ambient_blend.Image.tspace_id\", \"Texture_Projection\"\n\
\' You can get the texture via Material.CurrentTexture on the object\n\
set oMaterial = oGrid.Material\n\
set oTexture = oMaterial.CurrentTexture\n\
Application.LogMessage oTexture.FullName &amp; \" (\" &amp; TypeName(oTexture) &amp; \")\"\n\
\' Expected results:\n\
\'INFO : grid.Material.Phong.ambient_blend.Image (Texture)</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example demonstrates how to create image textures nodes and\n\
\'how information about them can be discovered using the Object Model.\n\
\'In particular it shows how information about the current texture can be\n\
\'discovered easily, but also how it is possible to find information about\n\
\'other textures in the render tree.  The code is structures into functions\n\
\'which can be reused in other contexts.\n\
set oObj = BuildDemoScene\n\
\'There are 2 projections, 2 texture image shaders, and 2 image clips\n\
\'But only one set acts as \"current\"\n\
logmessage \"Current texture: \" &amp; oObj.Material.CurrentTexture.FullName\n\
logmessage \"Current UV: \" &amp; oObj.Material.CurrentUV.FullName\n\
logmessage \"Current Image Clip: \" &amp; oObj.Material.CurrentImageClip.FullName\n\
set oTextureShaders = FindImageTextureNodes( oObj )\n\
for each oTexture in oTextureShaders \n\
	PrintImageTextureInfo oTexture, oObj\n\
next\n\
SetDisplayMode \"Camera\", \"texturedecal\"\n\
function BuildDemoScene\n\
	\'Creates a scene with a sphere whose material has two image textures nodes.\n\
	\'One drives the ambient of the phong and the other drives \n\
	\'the diffuse parameter.  They use two separate projections.\n\
	ImageFile1 = XSIUtils.BuildPath( Application.InstallationPath(siFactoryPath), _\n\
				\"Data\", _\n\
				\"XSI_SAMPLES\",_\n\
				\"Pictures\",_\n\
				\"jaiqua_face.jpg\" )			\n\
	ImageFile2 = XSIUtils.BuildPath( Application.InstallationPath(siFactoryPath), _\n\
				\"Data\", _\n\
				\"XSI_SAMPLES\",_\n\
				\"Pictures\",_\n\
				\"ehair_08.jpg\" )			\n\
	set oObj = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
	oObj.AddMaterial \"Phong\" \n\
	dim oPhongShader, oAmbientParam, oDiffuseParam, oShinyParam\n\
	set oPhongShader = oObj.Material.Shaders(0)\n\
	set oAmbientParam = oPhongShader.Parameters( \"ambient\" )\n\
	set oDiffuseParam = oPhongShader.Parameters( \"diffuse\" )	\n\
	dim oImageClip1, oImageClip2\n\
	SICreateImageClip ImageFile1, ,oImageClip1	\n\
	SICreateImageClip ImageFile2, ,oImageClip2\n\
	dim oImageNode1,oImageNode2\n\
	set oImageNode1 = oAmbientParam.connectfrompreset(\"Image\", siTextureShaderFamily)\n\
	oImageNode1.Parameters( \"tex\" ).Connect( oImageClip1 )\n\
	oImageNode1.Name = \"Texture1\" \n\
	set oImageNode2 = oDiffuseParam.connectfrompreset(\"Image\", siTextureShaderFamily)\n\
	oImageNode2.Parameters( \"tex\" ).Connect( oImageClip2 )\n\
	oImageNode2.Name = \"Texture2\" \n\
	\' Connect a projection\n\
	sProjectionName1 = \"MyProjection1\"\n\
	sProjectionName2 = \"MyProjection2\"\n\
	CreateProjection oObj, 	siTxtSpherical, siTxtDefaultSpherical, _\n\
		\"Texture_Support\", sProjectionName1 \n\
	CreateProjection oObj, 	siTxtSpherical, siTxtDefaultSpherical, _\n\
		\"Texture_Support\", sProjectionName2  \n\
	oImageNode1.Parameters(\"tspace_id\").SetInstanceValue oObj,sProjectionName1 \n\
	oImageNode2.Parameters(\"tspace_id\").SetInstanceValue oObj,sProjectionName2 \n\
	set BuildDemoScene = oObj\n\
end function\n\
sub PrintImageTextureInfo( oTexture, oObjectWithMaterial )\n\
	\'Display useful information about a Texture Shader node.\n\
	\'This code works even if the texture is not \"current\"\n\
	logmessage \"Texture:        \" &amp; oTexture\n\
	strProjection = oTexture.Parameters(\"tspace_id\").GetInstanceValue(oObjectWithMaterial)\n\
	logmessage \"    Projection: \" &amp; strProjection \n\
	set oImageclip = oTexture.Parameters(\"tex\").Source\n\
	logmessage \"    Image: \" &amp; oImageclip.FullName \n\
	logmessage \"    IsTexture: \" &amp; IsTexture( oTexture )\n\
	bIsCurrentTexture = ( oObjectWithMaterial.Material.CurrentTexture.Name = _\n\
						  oTexture.Name )	\n\
	logmessage \"    Current: \" &amp; bIsCurrentTexture			\n\
	set oUVClusterProp = FindProjectionClusterProperty( oObjectWithMaterial, strProjection )\n\
	if  typename( oUVClusterProp ) &lt;&gt; \"Nothing\" then\n\
		logmessage \"    Projection UV Data: \" &amp; oUVClusterProp.FullName\n\
	end if			\n\
	set oSupport = FindSupport( oObjectWithMaterial, strProjection )\n\
	if  typename( oUVClusterProp ) &lt;&gt; \"Nothing\" then\n\
		logmessage \"    Support: \" &amp; oSupport.FullName\n\
	end if	\n\
end sub\n\
function IsTexture(oShader)\n\
	\'Test whether an shader is a \"Texture\" shader\n\
	\'Note: This test returns True for Image textures, but also\n\
	\'      for procedural shaders like the fractal shader\n\
	IsTexture = InStr( 1, oShader.Families, \"Texture Shaders\", 0 ) &gt; 0\n\
end function\n\
function IsImageTexture(oShader)\n\
	\'Test more specifically whether this is an Image Shader\n\
	\'e.g. txt2d-image-explicit\n\
	IsImageTexture= InStr( 1, oShader.ProgID, \"-image\", 0 ) &gt; 0\n\
end function\n\
function FindImageTextureNodes(oObj)\n\
	\'Populate a XSICollection with all the Image Texture\n\
	\'shader nodes in the Material of the oObj argument\n\
	\'Limitations: This test only finds image nodes that are driven by an ImageClip\n\
	\'If the image is being generated (e.g. by a bumpmap generator) then\n\
	\'it will not be found.	\n\
	\'Also the returned collection does not include other shaders such as Real-time shaders\n\
	\'and lens flares that might be driven by an imageclip	\n\
	set oColl = CreateObject( \"XSI.Collection\" )\n\
	oColl.Unique = true\n\
	set oImageClips = oObj.Material.ImageClips\n\
	for each oImageClip in oImageClips\n\
		\'The Parent property would return the Shader that uses the ImageClip\n\
		\'However a single image clip can drive multiple Shaders.\n\
		\'Therefore we use the Owners property.  \n\
		\'We filter out the Scene.Clips collection which is an owner\n\
		\'of every single ImageClip.  We also filter out non-Image Textures.\n\
		for each oOwner in oImageClip.Owners			\n\
			if oOwner.Type = \"Shader\" then\n\
				if IsImageTexture( oOwner ) then\n\
					oColl.Add oOwner \n\
				end if\n\
			end if			\n\
		next \n\
	next\n\
	set FindImageTextureNodes= oColl\n\
end function\n\
function FindProjectionClusterProperty( oX3DObject, strProjectionName )\n\
	\'Find the ClusterProperty associated with\n\
	\'a particular Projection used by the Material\n\
	\'of the oX3DObject argument.\n\
	\'Note: This method does not depend on Material.CurrentUV\n\
	\'so it works for any Projection\n\
	\'Normally UV data will be underneath \n\
	\'a cluster called \"Texture_Coordinates_AUTO\"	\n\
	\'but this code searches all sample clusters\n\
	\'because the cluster might have a different name\n\
	set oCls = oX3DObject.ActivePrimitive.Geometry._\n\
				Clusters.Filter( \"sample\" )\n\
	for each oCluster in oCls\n\
		for each oProp in oCluster.Properties				\n\
			if oProp.Name = strProjectionName then\n\
				set FindProjectionClusterProperty = oProp\n\
				exit function\n\
			end if			\n\
		next		\n\
	next	\n\
end function\n\
function FindSupport( oX3DObject, strProjectionName )\n\
	\'Find the support object associated with a \n\
	\'particular projection for the provided X3DObject\n\
	\'It works based on the knowledge that the support\n\
	\'is nested underneath the Projection Def object,\n\
	\'which in turn is nested underneath the Projection\n\
	\'UV Data ClusterProperty\n\
	set oUVCluster = FindProjectionClusterProperty( oX3DObject, strProjectionName )\n\
	for each oNested in oUVCluster.NestedObjects\n\
		if oNested.Type = \"uvprojdef\" then\n\
			\'Found the Projection Def object\n\
			for each oDefNested in oNested.NestedObjects		\n\
				if oDefNested.Type = \"Texture Support\" then\n\
					set FindSupport = oDefNested\n\
					exit function\n\
				end if		\n\
			next\n\
		end if	\n\
	next	\n\
end function\n\
\'Output of this example:\n\
\'INFO : Current texture: sphere.Material.Phong.Texture2\n\
\'INFO : Current UV: sphere.polymsh.cls.Texture_Coordinates_AUTO.MyProjection2\n\
\'INFO : Current Image Clip: Clips.ehair_08_jpg\n\
\'INFO : Texture:        Sources.Materials.DefaultLib.Material.Phong.Texture1\n\
\'INFO :     Projection: MyProjection1\n\
\'INFO :     Image: Sources.Materials.DefaultLib.Material.Phong.Texture1.jaiqua_face_jpg\n\
\'INFO :     IsTexture: True\n\
\'INFO :     Current: False\n\
\'INFO :     Projection UV Data: sphere.polymsh.cls.Texture_Coordinates_AUTO.MyProjection1\n\
\'INFO :     Support: Texture_Support\n\
\'INFO : Texture:        Sources.Materials.DefaultLib.Material.Phong.Texture2\n\
\'INFO :     Projection: MyProjection2\n\
\'INFO :     Image: Sources.Materials.DefaultLib.Material.Phong.Texture2.ehair_08_jpg\n\
\'INFO :     IsTexture: True\n\
\'INFO :     Current: True\n\
\'INFO :     Projection UV Data: sphere.polymsh.cls.Texture_Coordinates_AUTO.MyProjection2\n\
\'INFO :     Support: Texture_Support1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Material.CurrentTexture.html\">Material.CurrentTexture</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";