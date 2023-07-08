var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>TransferShapeAnimation</title>\n\
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
            <h1>TransferShapeAnimation</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">TransferShapeAnimation</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Transfers shape animation from the specified source object to the destination object. The\n\
animation to be transferred is contained within the Animation <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> and \n\
includes any pre-existing mapping connected on the origin <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a>s. <br /><br />\n\
In order for this command to work you need to specify a source object, a destination object \n\
and two lists of shape key cluster properties. The lists of shape keys should be of the same \n\
length and the order is important as it is specifying the mapping between the source \n\
ShapeKeys and the destination ShapeKeys. <br /><br />\n\
If there is no cluster shape combiner operator on the destination object it will be added. If \n\
there is already some shape animation corresponding to the destination shape key list, it will\n\
be deleted.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>TransferShapeAnimation( SourceObject, DestinationObject, SourceShapeKeys, DestinationShapeKeys );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SourceObject		</td>\n\
		<td><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>		</td>\n\
		<td>\n\
 Object from which the shape animation will originate. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DestinationObject		</td>\n\
		<td><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>		</td>\n\
		<td>\n\
 Object to which the shape animation will be transferred. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SourceShapeKeys		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
 The collection of shape keys on the source object that contain the animation you want to transfer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DestinationShapeKeys		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
 The collection of shape keys on the destination object that will receive the animation you want to transfer.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to transfer shape animation from one object to the other\n\
*/\n\
NewScene( null, false );\n\
// Create source animation object\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
SetValue(\"Context.constructionmode\", 1, null);\n\
ActivateVertexSelTool(null);\n\
SelectGeometryComponents(\"cone.pnt[1,4,7,10,13,16,19,22,LAST]\");\n\
Translate(null, -3.98256016551092, 0, 0, siRelative, siGlobal, siObj, siXYZ, null, null, siXYZ, null, null, null, null, null, null, 1);\n\
SaveShapeKey(\"cone.pnt[1,4,7,10,13,16,19,22,LAST]\", null, null, 1, null, null, null, null, siShapeObjectReferenceMode);\n\
SetValue(\"PlayControl.Key\", 30, null);\n\
SetValue(\"PlayControl.Current\", 30, null);\n\
SelectGeometryComponents(\"cone.pnt[1,4,7,10,13,16,19,22,LAST]\");\n\
Translate(null, -3.98256016551092, 0, 0, siRelative, siGlobal, siObj, siXYZ, null, null, siXYZ, null, null, null, null, null, null, 1);\n\
SaveShapeKey(\"cone.polymsh.cls.Shape\", null, null, 30, null, null, null, null, siShapeObjectReferenceMode);\n\
SelectObj(\"cone.polymsh.cls.Shape.ShapeKey1\", null, null);\n\
SelectObj(\"cone.polymsh.cls.Shape.ShapeKey\", null, null);\n\
SetValue(\"PlayControl.Key\", 27, null);\n\
SetValue(\"PlayControl.Current\", 27, null);\n\
// Create destination animation object\n\
CreatePrim(\"Cylinder\", \"MeshSurface\", null, null);\n\
CreateModel(null, null, null, null);\n\
SelectObj(\"Model.cylinder\", null, true);\n\
ActivateVertexSelTool(null);\n\
SelectGeometryComponents(\"Model.cylinder.pnt[4-6,10,39,40]\");\n\
Translate(null, -2.92834449479742, 0, 0, siRelative, siGlobal, siObj, siXYZ, null, null, siXYZ, null, null, null, null, null, null, 1);\n\
StoreShapeKey(\"Model.cylinder.pnt[4-6,10,39,40]\", null, siShapeObjectReferenceMode, 27, 0, 0, siShapeContentPrimaryShape, false);\n\
SelectFilter(\"object\");\n\
Translate(null, 2.05775559093871, 0, 0, siRelative, siGlobal, siObj, siXYZ, null, null, siXYZ, null, null, null, null, null, null, 1);\n\
Translate(null, 0, 2.8035894047944, 0, siRelative, siGlobal, siObj, siXYZ, null, null, siXYZ, null, null, null, null, null, null, 1);\n\
SaveShapeKey(\"Model.cylinder.polymsh.cls.Shape\", null, null, 27, null, null, null, null, siShapeObjectReferenceMode);\n\
Selection.SetAsText(\"cone,Model.cylinder\");\n\
// Gather data to transfer\n\
var oSource = Selection(0);\n\
var oDestination = Selection(1);\n\
var oSourceList = new ActiveXObject(\"XSI.Collection\") ;\n\
var oSourceClusterProperties = oSource.ActivePrimitive.Geometry.Clusters(0).Properties;\n\
for ( var i=0; i&lt;oSourceClusterProperties.Count; i++ ) {\n\
	if ( oSourceClusterProperties(i).IsClassOf(siShapeKeyID) ) {\n\
		oSourceList.Add(oSourceClusterProperties(i));\n\
	}\n\
}\n\
var oDestList = new ActiveXObject(\"XSI.Collection\");\n\
var oDestClusterProperties = oDestination.ActivePrimitive.Geometry.Clusters(0).Properties;\n\
for ( var i=0; i&lt;oDestClusterProperties.Count; i++ ) {\n\
	if ( oDestClusterProperties(i).IsClassOf(siShapeKeyID) ) {\n\
		oDestList.Add(oDestClusterProperties(i));\n\
	}\n\
}\n\
TransferShapeAnimation(oSource, oDestination, oSourceList, oDestList);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/TransferShapeAnimationAcrossGenOp.html\">TransferShapeAnimationAcrossGenOp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";