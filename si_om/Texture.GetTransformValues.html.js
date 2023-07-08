var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Texture.GetTransformValues</title>\n\
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
            <h1>Texture.GetTransformValues</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Texture.html\">Texture</a>.GetTransformValues</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Calculates the UVW values based on the current OGL hardware display settings for the material.\n\
The values are read from cluster properties, and the following texture objects are used in the calculation:<br /><br />\n\
- Texture projection definition<br /><br />\n\
- Texture shader<br /><br />\n\
- Image clip<br /><br />\n\
You use bit flags to specify the texture transformation effects you want to apply. Note that some texture \n\
transformation effects are approximations. For example, GetTransformValues cannot resample the surface to create\n\
the additional sample points required by texture repeats.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object Texture.GetTransformValues( Int32 );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oVariant = Texture.GetTransformValues( Flags );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>A <a href=\"#!/url=./files/Variant.htm\">Variant</a> containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a> values. This\n\
array is in the same order as the <a href=\"#!/url=./si_om/Material.CurrentUV.html\">Material.CurrentUV</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Flags		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./si_om/siTextureEffectsComputation.html\">siTextureEffectsComputation</a> bit flags that specify the result of the transformation \n\
		you want to compute. To apply multiple effects, add the constant values together. For example, to set \n\
		all the flags, use the decimal value 127, which is the sum of all the flag constants.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to use this Texture.GetTransformValues to bake the UVW effects directly in the cluster property\n\
\' This is done on the object material and assumes only one TextureProjection definition.\n\
\'\n\
\' Create scene content\n\
NewScene , false\n\
set oGrid = CreatePrim( \"Grid\", \"MeshSurface\" )\n\
SetValue oGrid &amp; \".polymsh.geom.subdivu\", 2\n\
SetValue oGrid &amp; \".polymsh.geom.subdivv\", 1\n\
ApplyShader ,,,, siLetLocalMaterialsOverlap\n\
BlendInPresetsInsp ,,, True, True\n\
CreateProjection oGrid, siTxtPlanarXZ, siTxtDefaultSpherical, \"Texture_Support\", \"Texture_Projection\"\n\
SetInstanceDataValue , oGrid &amp; \".Material.Phong.ambient_blend.Image.tspace_id\", \"Texture_Projection\"\n\
\' Set a translation in U of 0.5\n\
SetValue oGrid &amp; \".polymsh.cls.Texture_Coordinates_AUTO.Texture_Projection.Texture_Projection_Def.projtrsu\", 0.5\n\
\' Freeze everything ;-)\n\
FreezeCurrentUV 127\n\
sub FreezeCurrentUV( in_lFlags )\n\
	set oMy3DObject = Application.Selection(0)\n\
	if TypeName(oMy3DObject) &lt;&gt; \"X3DObject\" then\n\
		Application.LogMessage \"The command won\'t perform it should be connected to an X3DObject\"\n\
	else\n\
		if TypeName(oMy3DObject.ActivePrimitive.Geometry) = \"PolygonMesh\" then\n\
			set oMaterial = oMy3DObject.Material\n\
			set oClusterProperty = oMaterial.CurrentUV\n\
			set oTexture = oMaterial.CurrentTexture\n\
			if TypeName(oTexture) &lt;&gt; \"Nothing\" then\n\
				aUVWValues = oTexture.GetTransformValues( in_lFlags )\n\
				FreezeUVWValues oClusterProperty, aUVWValues\n\
				SetDefaultValues oMaterial, oTexture, oClusterProperty, in_lflags\n\
			else\n\
				Application.LogMessage \"There\'s no current texture\"\n\
			end if\n\
		else\n\
			Application.LogMessage \"The command won\'t perform it should be connected to a PolygonMesh object\"\n\
		end if\n\
	end if\n\
end sub\n\
\' The array is already in cluster offset order\n\
sub FreezeUVWValues(in_oClusterProperty, in_aUVWValues)\n\
	aOLDUVWValues = in_oClusterProperty.Elements.Array\n\
	for i = 0 to ubound(aOLDUVWValues,2)\n\
		aOLDUVWValues(0,i) = in_aUVWValues(i*3)\n\
		aOLDUVWValues(1,i) = in_aUVWValues(i*3 + 1)\n\
		aOLDUVWValues(2,i) = in_aUVWValues(i*3 + 2)\n\
	next\n\
	in_oClusterProperty.Elements.Array = aOLDUVWValues\n\
end sub\n\
\' Reset the default values, so to remove the actions of those effects on the\n\
\' Texture projection cluster property.\n\
sub SetDefaultValues(in_oMaterial, in_oTexture, in_oClusterProperty, in_lflags)\n\
	if in_lflags and siTextureComputeTransformation then\n\
		strClusterProperty = in_oClusterProperty.FullName\n\
		\' Set translation\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.projtrsu\", 0\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.projtrsv\", 0\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.projtrsw\", 0\n\
		\' Set scaling\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.projsclu\", 1\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.projsclv\", 1\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.projsclw\", 1\n\
		\' Set rotation\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.projrotu\", 0\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.projrotv\", 0\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.projrotw\", 0\n\
	end if\n\
	if in_lflags and siTextureComputeWrapping then\n\
		strClusterProperty = in_oClusterProperty.FullName\n\
		\' Set wrapping\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.wrap_u\", false\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.wrap_v\", false\n\
		SetValue strClusterProperty &amp; \".Texture_Projection_Def.wrap_w\", false\n\
	end if\n\
	if in_lflags and siTextureComputeRepeats then\n\
		strTexture = in_oTexture.FullName\n\
		SetValue strTexture &amp; \".repeats.x\", 1\n\
		SetValue strTexture &amp; \".repeats.y\", 1\n\
		SetValue strTexture &amp; \".repeats.z\", 1\n\
	end if\n\
	if in_lflags and siTextureComputeUVRemap then\n\
		strTexture = in_oTexture.FullName\n\
		SetValue strTexture &amp; \".min.x\", 0\n\
		SetValue strTexture &amp; \".min.y\", 0\n\
		SetValue strTexture &amp; \".min.z\", 0\n\
		SetValue strTexture &amp; \".max.x\", 1\n\
		SetValue strTexture &amp; \".max.y\", 1\n\
		SetValue strTexture &amp; \".max.z\", 1\n\
	end if\n\
	if in_lflags and siTextureComputeAlternate then\n\
		strTexture = in_oTexture.FullName\n\
		SetValue strTexture &amp; \".alt_x\", 0\n\
		SetValue strTexture &amp; \".alt_y\", 0\n\
	end if\n\
	if in_lflags and siTextureComputeCropping then\n\
		set oImageClip = in_oMaterial.CurrentImageClip\n\
		strImageClip = oImageClip.FullName\n\
		SetValue strImageClip &amp; \".Xmin\", 0\n\
		SetValue strImageClip &amp; \".Ymin\", 0\n\
		SetValue strImageClip &amp; \".Xmax\", 1\n\
		SetValue strImageClip &amp; \".Ymax\", 1\n\
	end if\n\
	if in_lflags and siTextureComputeFlip then\n\
		set oImageClip = in_oMaterial.CurrentImageClip\n\
		strImageClip = oImageClip.FullName\n\
		SetValue strImageClip &amp; \".FlipX\", False\n\
		SetValue strImageClip &amp; \".FlipY\", False\n\
	end if\n\
end sub</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example demonstrated the relationship\n\
// between Texture.GetTransformValues, the Texture Projection\n\
// and the Cluster Property\n\
var sProjectionName = \"MyProjection\" ;\n\
var oCylinder = CreateCylinderWithMaterial() ;\n\
var oCurrentTexture = oCylinder.Material.CurrentTexture ;\n\
logmessage( \"Current Texture: \" + oCurrentTexture.FullName  ) ;\n\
logmessage( \"Current UV: \" + oCylinder.Material.CurrentUV.FullName ) ;\n\
logmessage( \"Current ImageClip: \" + oCylinder.Material.CurrentImageClip  ) ;\n\
logmessage( \"-------------Before applying a repeat----------\" ) ;\n\
PrintTransformValues( oCurrentTexture ) ;\n\
// Now actually apply a transformation at the Texture level \n\
oCurrentTexture.Parameters( \"repeats\" ).Parameters(\"x\").Value = 2 ;\n\
logmessage( \"-------------After applying a repeat----------\" ) ;\n\
PrintTransformValues( oCurrentTexture ) ;\n\
// Show that the raw data was not affected\n\
logmessage( \"-------------Raw UV----------\" ) ;\n\
PrintRawProjectionData( oCylinder ) ;\n\
SetDisplayMode(\"Camera\", \"texturedecal\");\n\
function CreateCylinderWithMaterial()\n\
{\n\
	// Function to create a sample scene.  It has a Cylinder\n\
	// with a simple render tree of an image connected to a Phong.\n\
	// To simplify the example it does not load a specific image \n\
	// clip so it is using the default noIcon image.\n\
	// Create a cylinder\n\
	newscene(null,false) ;\n\
	var oCylinder = ActiveSceneRoot.AddGeometry( \"Cylinder\", \"MeshSurface\" ) ;\n\
	// Reduce the size of the geometry to reduce the amount of UV values we will print out\n\
	var oGeometryParams = GetValue( oCylinder + \".polymsh.geom\" ).Parameters\n\
	oGeometryParams(\"subdivu\").Value = 2\n\
	oGeometryParams(\"subdivv\").Value = 1\n\
	oGeometryParams(\"subdivbase\").Value = 1\n\
	var oMaterial = oCylinder.AddMaterial( \"Phong\" ) ;\n\
	var oPhong = oMaterial.Shaders(0) \n\
	var oPhongParams = oPhong.Parameters ;\n\
	// Create a texture node and connect it to both ambient and diffuse\n\
	var oTextureShader = oPhongParams( \"ambient\" ).ConnectFromPreset(\"Image\", siTextureShaderFamily) ;\n\
	oPhongParams( \"diffuse\" ).Connect( oTextureShader ) ;\n\
	// At this point the texture will not draw because there is \n\
	// no projection to map the 2D onto the 3D\n\
	// This command creates the projection and the support\n\
	CreateProjection(\n\
			oCylinder, \n\
			siTxtCylindrical, \n\
			siTxtDefaultCylindrical, \n\
			\"MySupport\",      // Name to give new support\n\
			sProjectionName,   // Name to give new projection\n\
			null, \n\
			null, \n\
			null);\n\
	// Connect the projection\n\
	oTextureShader.Parameters(\"tspace_id\").SetInstanceValue( oCylinder,sProjectionName ) ;\n\
	return oCylinder ;\n\
}\n\
function PrintRawProjectionData( in_oObj )\n\
{\n\
	// Find the ClusterProperty that contains the raw UVW values \n\
	// of the current texture\n\
	var oTextureClusterProperty = in_oObj.Material.CurrentUV ;\n\
	PrintUVWClusterProperty( oTextureClusterProperty ) ;\n\
}\n\
function PrintUVWClusterProperty( in_oTextureClusterProperty )\n\
{\n\
	// Print the UVW cluster property.  It shows how to read\n\
	// the 2-Dimensional data with JScript VBArray object\n\
	logmessage( \"Contents of \" + in_oTextureClusterProperty.FullName ) ;\n\
	var aRawUVValues = new VBArray( in_oTextureClusterProperty.Elements.Array ) ;\n\
	for ( i = 0 ; i &lt;= aRawUVValues.ubound(2) ; i++ )\n\
	{\n\
		logmessage( \"UVW[\"+i+\"] = \" \n\
			+ XSIRound( aRawUVValues.getItem( 0, i ), 2) + \",\" +\n\
			+ XSIRound( aRawUVValues.getItem( 1, i ), 2) + \",\" +\n\
			+ XSIRound( aRawUVValues.getItem( 2, i ), 2)) ;				\n\
	}\n\
}\n\
function PrintTransformValues( in_oTexture )\n\
{\n\
	// Print the transformed UVW values associated with the texture\n\
	// It shows how the data is structured as a flattened 1D array\n\
	logmessage( \"Fully transformed contents of \" +  in_oTexture.FullName ) ;\n\
	aTransformedTexture = new VBArray(in_oTexture.GetTransformValues(127)) ;\n\
	// We have a 1 dimensional array, with the U,V,W values flattened\n\
	cntItems = ( aTransformedTexture.ubound(1) + 1 ) / 3 ;\n\
	for ( i = 0 ; i &lt; cntItems ; i++ )\n\
	{\n\
		logmessage( \"UVW[\"+i+\"] = \" \n\
			+ XSIRound( aTransformedTexture.getItem( 3*i ), 2) + \",\" +\n\
			+ XSIRound( aTransformedTexture.getItem( 3*i+1 ), 2) + \",\" +\n\
			+ XSIRound( aTransformedTexture.getItem( 3*i+2 ), 2)) ;\n\
	}\n\
}\n\
// Output:\n\
//\n\
//INFO : Current Texture: cylinder.Material.Phong.Image\n\
//INFO : Current UV: cylinder.polymsh.cls.Texture_Coordinates_AUTO.MyProjection\n\
//INFO : Current ImageClip: Clips.noIcon_pic\n\
//INFO : -------------Before applying a repeat----------\n\
//INFO : Fully transformed contents of cylinder.Material.Phong.Image\n\
//INFO : UVW[0] = 0.61,0,0\n\
//INFO : UVW[1] = 0.25,0,0\n\
//INFO : UVW[2] = 0.75,0,0\n\
//...snip...\n\
//INFO : UVW[28] = 1.25,1,0\n\
//INFO : UVW[29] = 0.75,1,0\n\
//INFO : -------------After applying a repeat----------\n\
//INFO : Fully transformed contents of cylinder.Material.Phong.Image\n\
//INFO : UVW[0] = 1.23,0,0\n\
//INFO : UVW[1] = 0.5,0,0\n\
//INFO : UVW[2] = 1.5,0,0\n\
//...snip...\n\
//INFO : UVW[28] = 1.5,1,0\n\
//INFO : UVW[29] = 0.5,1,0\n\
//INFO : -------------Raw UV----------\n\
//INFO : Contents of cylinder.polymsh.cls.Texture_Coordinates_AUTO.MyProjection\n\
//INFO : UVW[0] = 0.61,0,0\n\
//INFO : UVW[1] = 0.25,0,0\n\
//INFO : UVW[2] = 0.75,0,0\n\
//...snip...\n\
//INFO : UVW[28] = 1.25,1,0\n\
//INFO : UVW[29] = 0.75,1,0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> <a href=\"#!/url=./si_om/ClusterElementCollection.Array.html\">ClusterElementCollection.Array</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";