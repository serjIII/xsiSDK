var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>TransferAllPropertiesAcrossGenOp</title>\n\
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
            <h1>TransferAllPropertiesAcrossGenOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">TransferAllPropertiesAcrossGenOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Transfers all properties and cluster properties from the specified input objects \n\
on a generator operator to a specified output object using a heuristic.<br /><br />\n\
Note: To transfer cluster properties alone, use the \n\
<a href=\"#!/url=./si_cmds/TransferClusterPropertiesAcrossGenOp.html\">TransferClusterPropertiesAcrossGenOp</a> command. <br /><br />\n\
Note: To transfer properties alone, use the \n\
<a href=\"#!/url=./si_cmds/TransferPropertiesAcrossGenOp.html\">TransferPropertiesAcrossGenOp</a> command.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = TransferAllPropertiesAcrossGenOp( Operator, Object, PropertyTransferType, ShareProperty, [IncludeAllClusters] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the created <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of new transferred properties.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Operator		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Specifies the generator operator on which the property transfer will be performed. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Object		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Specifies an output object to which the new property will be added.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropertyTransferType		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Specifies the type of properties to transfer to the specified output object from the \n\
		input objects of the specified generator operator. An empty string implies that all \n\
		allowable properties are transferred.  Specific string property types are listed in \n\
		the <a href=\"#!/url=./si_om/siType.html\">siType</a> enum. <br /><br />\n\
		Note: When siMaterialType is specified, all referenced cluster properties are also transferred.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Empty string which implies the transfer of all allowable properties and cluster properties			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siMaterialType					</td>\n\
					<td> material property type.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siWgtMapType					</td>\n\
					<td> weight map cluster property type.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siClsUVSpaceTxtType					</td>\n\
					<td> uv texture coordinates cluster property type.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siVertexcolorType					</td>\n\
					<td> color at vertices cluster property type.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siClsKeyType					</td>\n\
					<td> shape cluster key cluster property type.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShareProperty		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		True implies that the transferred property will be shared. <br /><br />\n\
		Note: This applies to properties (currently only to materials) and not to cluster properties. \n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IncludeAllClusters		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		True implies that even clusters with no properties will be transferred.  By default,\n\
clusters without properties are not transferred.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example transfers properties across generator \n\
\' operators that admit transfer of properties.\n\
\'\n\
Dim l_NewProperties\n\
NewScene ,false\n\
\' Create objects\n\
CreatePrim \"Grid\", \"MeshSurface\", \"grid\"\n\
CreatePrim \"Grid\", \"MeshSurface\", \"grid1\"\n\
Translate \"grid1\", 8.2, 0, 0, siRelative, siView, siObj, siXYZ\n\
\' Add some properties to objects: Materials and texture coordinates.\n\
ApplyShader , , , , siLetLocalMaterialsOverlap\n\
SetValue \"grid1.Material.Phong.diffuse.red\", 0.750\n\
SIApplyShaderToCnxPoint \"Image\", \"grid1.Material.Phong.diffuse\"\n\
SelectObj \"grid\", , True\n\
SetSelFilter \"Polygon\"\n\
AddToSelection \"grid.poly[18-21,26-29,34-37,42-45,50-53]\", , True\n\
ApplyShader , , , , siLetLocalMaterialsOverlap\n\
SetValue \"grid.polymsh.cls.Polygon.Material.Phong.diffuse.green\", 0.250\n\
SIApplyShaderToCnxPoint \"Image\", \"grid.polymsh.cls.Polygon.Material.Phong.diffuse\"\n\
CreateProjection \"grid\", siTxtPlanarXZ, siTxtDefaultSpherical, _\n\
		\"Texture_Support\", \"Texture_Projection\"\n\
SetInstanceDataValue , \"grid.polymsh.cls.Polygon.Material.Phong.Image.tspace_id\", _\n\
		\"Texture_Projection\"\n\
SelectObj \"grid1\", , True\n\
CreateProjection \"grid1\", siTxtPlanarXZ, siTxtDefaultSpherical, \"Texture_Support\", _\n\
		\"Texture_Projection\"\n\
SetInstanceDataValue , \"grid1.Material.Phong.Image.tspace_id\", \"Texture_Projection\"\n\
\' Add cluster property: weight map on both objects.\n\
SelectObj \"grid\", , True\n\
ActivateVertexSelTool\n\
AddToSelection \"grid.pnt[48-51,57-60,66-69]\", , True\n\
CreateWeightMap , , \"Weight_Map\"\n\
SelectObj \"grid1\", , True\n\
ActivateVertexSelTool\n\
AddToSelection \"grid1.pnt[20-25,29-34,38-43,47-52]\", , True\n\
CreateWeightMap , , \"Weight_Map\"\n\
\' Apply merge operator. \n\
ApplyGenOp \"MeshMerge\", , \"grid,grid1\", 3, siPersistentOperation, siKeepGenOpInputs\n\
SetValue \"polymsh.polymsh.mergemesh.tolerance\", 2.0\n\
Translate , -4.0, 3.0, -0.0, siRelative, siView, siObj, siXYZ\n\
\' Transfer all properties across the merge operator.  The empty string is passed to \n\
\' transfer all allowable properties.\n\
set l_NewProperties = TransferAllPropertiesAcrossGenOp( \"polymsh.polymsh.mergemesh\", _\n\
		\"polymsh\", \"\",  True )\n\
\' View results.  \n\
SetValue \"Camera.camvis.objctrlpropmaps\", True\n\
SetDisplayMode \"Camera\", \"texturedecal\"\n\
SelectObj \"polymsh.polymsh.cls.Point.Weight_Map\"\n\
for each item in l_NewProperties\n\
	Application.LogMessage \"New Property : \" &amp; item\n\
next\n\
\' Expected results\n\
\' INFO : New Property : polymsh.polymsh.cls.Polygon.Material1\n\
\' INFO : New Property : polymsh.polymsh.cls.grid.Scene_Material\n\
\' INFO : New Property : polymsh.polymsh.cls.grid1.Material\n\
\' INFO : New Property : polymsh.polymsh.cls.Texture_Coordinates_AUTO.Texture_Projection\n\
\' INFO : New Property : polymsh.polymsh.cls.Point.Weight_Map</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example transfers  properties across generator \n\
	operators that admit transfer of properties.\n\
*/\n\
NewScene( null, false );\n\
// Create objects\n\
CreatePrim(\"Grid\", \"MeshSurface\", \"grid\", null);\n\
CreatePrim(\"Grid\", \"MeshSurface\", \"grid1\", null);\n\
Translate( \"grid1\", 8.2, 0.0, 0.0, \n\
	siRelative, siView, siObj, siXYZ, \n\
	null, null, null, null, null, null, null, null, null);\n\
// Add some properties to objects: Materials and texture coordinates.\n\
ApplyShader(null, \"\", null, \"\", siLetLocalMaterialsOverlap);\n\
SetValue(\"grid1.Material.Phong.diffuse.red\", 1, null);\n\
SIApplyShaderToCnxPoint(\"Image\", \"grid1.Material.Phong.diffuse\", null, null);\n\
CreateProjection(\"grid1\", \n\
	siTxtPlanarXZ, \n\
	siTxtDefaultSpherical, \n\
	\"Texture_Support\", 	\n\
	\"Texture_Projection\", \n\
	null, null, \"\");\n\
SetInstanceDataValue(null, \n\
	\"grid1.Material.Phong.Image.tspace_id\", \n\
	\"Texture_Projection\");\n\
SelectObj(\"grid\", null, true);\n\
SetSelFilter(\"Polygon\");\n\
AddToSelection(\"grid.poly[26-29,34-37,42-45]\", null, true);\n\
ApplyShader(null, \"\", null, \"\", siLetLocalMaterialsOverlap);\n\
SetValue(\"grid.polymsh.cls.Polygon.Material.Phong.diffuse.blue\", 0.006, null);\n\
SIApplyShaderToCnxPoint(\"Image\", \n\
	\"grid.polymsh.cls.Polygon.Material.Phong.diffuse\", \n\
	null, null);\n\
CreateProjection(\"grid\", \n\
	siTxtPlanarXZ, \n\
	siTxtDefaultSpherical, \n\
	\"Texture_Support\", 	\n\
	\"Texture_Projection1\", \n\
	null, null, \"\");\n\
SetInstanceDataValue(null, \n\
	\"grid.polymsh.cls.Polygon.Material.Phong.Image.tspace_id\", \n\
	\"Texture_Projection1\");\n\
// Add cluster property: weight map on both objects.\n\
SetSelFilter(\"Point\");\n\
AddToSelection(\"grid.pnt[20-23,29-32,38-41,47-50,56-59]\", null, true);\n\
CreateWeightMap(null, null, \"Weight_Map\", null, null);\n\
SelectObj(\"grid1\", null, true);\n\
ActivateVertexSelTool(null);\n\
AddToSelection(\"grid1.pnt[30-32,39-41,48-50]\", null, true);\n\
CreateWeightMap(null, null, \"Weight_Map\", null, null);\n\
// Apply merge operator. \n\
ApplyGenOp(\"MeshMerge\", \"\", \"grid,grid1\", 3, siPersistentOperation, \n\
	siKeepGenOpInputs);\n\
SetValue(\"polymsh.polymsh.mergemesh.tolerance\", 2, null);\n\
Translate( \"polymsh\", -4.0, 4.0, -5.0, \n\
	siRelative, siView, siObj, siXYZ,\n\
	null, null, null, null, null, null, null, null, null);\n\
// Transfer all properties across the merge operator. Pass in empty string \n\
// to transfer all properties.\n\
l_NewProperties = TransferAllPropertiesAcrossGenOp(\n\
	\"polymsh.polymsh.mergemesh\", \n\
	\"polymsh\", 	\n\
	\"\", \n\
	true);\n\
// View results\n\
SetDisplayMode(\"Camera\", \"texturedecal\");\n\
SetValue(\"Camera.camvis.objctrlpropmaps\", true, null);\n\
var eNewProps = new Enumerator( l_NewProperties );\n\
for ( ; !eNewProps.atEnd(); eNewProps.moveNext() )\n\
{	\n\
	 Application.LogMessage( \"New Property : \" + eNewProps.item().FullName );\n\
}\n\
// Expected results:\n\
// INFO : New Property : polymsh.polymsh.cls.Polygon.Material1\n\
// INFO : New Property : polymsh.polymsh.cls.grid.Scene_Material\n\
// INFO : New Property : polymsh.polymsh.cls.grid1.Material\n\
// INFO : New Property : polymsh.polymsh.cls.Texture_Coordinates_AUTO.Texture_Projection1\n\
// INFO : New Property : polymsh.polymsh.cls.Point.Weight_Map</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/TransferPropertiesAcrossGenOp.html\">TransferPropertiesAcrossGenOp</a> <a href=\"#!/url=./si_cmds/TransferClusterPropertiesAcrossGenOp.html\">TransferClusterPropertiesAcrossGenOp</a> <a href=\"#!/url=./si_cmds/CopyAnimationAcrossGenerator.html\">CopyAnimationAcrossGenerator</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";