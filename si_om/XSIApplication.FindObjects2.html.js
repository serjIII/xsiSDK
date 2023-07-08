var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIApplication.FindObjects2</title>\n\
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
            <h1>XSIApplication.FindObjects2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>.FindObjects2</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.5 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a collection of all <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a> objects found in the application that match a <a href=\"#!/url=./si_om/siClassID.html\">siClassID</a> identifier as\n\
listed below. These identifiers can also be discovered by inspecting Softimage objects with the SDK Explorer. \n\
<br /><br />\n\
siAnnotationID<br /><br />\n\
siCameraID<br /><br />\n\
siClusterID<br /><br />\n\
siClusterPropertyID<br /><br />\n\
siConstraintID<br /><br />\n\
siCustomOperatorID<br /><br />\n\
siCustomPropertyID<br /><br />\n\
siEnvelopeID<br /><br />\n\
siEnvelopeWeightID<br /><br />\n\
siExpressionID<br /><br />\n\
siGeometryID<br /><br />\n\
siGroupID<br /><br />\n\
siICETreeID<br /><br />\n\
siImageClipID<br /><br />\n\
siLayerID<br /><br />\n\
siLightID<br /><br />\n\
siMaterialID<br /><br />\n\
siModelID<br /><br />\n\
siNullID<br /><br />\n\
siNurbsSurfaceMeshID<br /><br />\n\
siNurbsCurveListID<br /><br />\n\
siOperatorID<br /><br />\n\
siPassID<br /><br />\n\
siPolygonMeshID<br /><br />\n\
siPropertyID<br /><br />\n\
siShaderID<br /><br />\n\
siShapeKeyID<br /><br />\n\
siX3DObjectID<br /><br /></p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIObjectCollection XSIApplication.FindObjects2( siClassID in_classID );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIApplication.FindObjects2( Identifier );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIObjectCollection.html\">SIObjectCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Identifier		</td>\n\
		<td><a href=\"#!/url=./si_om/siClassID.html\">siClassID</a>		</td>\n\
		<td>\n\
 An object class identifier as defined in siClassID.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># Enumerate all properties in the application.\n\
from win32com.client import constants as c\n\
props = Application.FindObjects2( c.siPropertyID )\n\
for p in props:\n\
	LogMessage( p.FullName )\n\
# INFO : Views.ViewA.SpotCamera.visibility\n\
# INFO : light.visibility\n\
# INFO : Views.ViewD.SpotCamera.visibility\n\
# INFO : Views.ViewC.SpotCamera.visibility\n\
# INFO : Camera.visibility\n\
# INFO : Views.ViewB.SpotCamera.visibility\n\
# INFO : Camera_Root.visibility\n\
# INFO : Camera_Interest.visibility\n\
# INFO : Passes.mentalray\n\
# INFO : Views.ViewD.RenderRegion.mentalray\n\
# INFO : Views.ViewB.RenderRegion.mentalray\n\
# INFO : Views.ViewA.RenderRegion.mentalray\n\
# INFO : Views.ViewC.RenderRegion.mentalray\n\
# INFO : ReadAnimation\n\
etc...</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Model.FindObjects.html\">Model.FindObjects</a> <a href=\"#!/url=./si_om/Model.FindObjectsFromCLSID.html\">Model.FindObjectsFromCLSID</a> <a href=\"#!/url=./si_cmds/FindObjects.html\">FindObjects</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";