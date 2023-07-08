var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DataRepository.GetIdentifier</title>\n\
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
            <h1>DataRepository.GetIdentifier</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/DataRepository.html\">DataRepository</a>.GetIdentifier</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Returns the object identifier, model identifier, GUID, ClassID, or SPDL file of the specifed object.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object DataRepository.GetIdentifier( Object in_varObject, siObjectIdentifierType in_idType );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = DataRepository.GetIdentifier( Object, [Type] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./files/Integer.htm\">Integer</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Object		</td>\n\
		<td>Object or <a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Object on which the information should be retrieved.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siObjectIdentifierType.html\">siObjectIdentifierType</a>		</td>\n\
		<td>\n\
Type of identifier to be returned.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siObjectIdentifier (object id)			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene , false\n\
set oDatabase = XSIUtils.DataRepository\n\
set oCube = CreatePrim( \"Cube\", \"MeshSurface\" )\n\
Application.LogMessage oDatabase.GetIdentifier( oCube )\n\
Application.LogMessage oDatabase.GetIdentifier( oCube, siObjectGUID )\n\
\' Select an object out of model and in a model\n\
SelectObj \"Views.ViewA.UserCamera.camera,Cube,Scene_Root\"\n\
set oSelection = Application.Selection\n\
for each oItem in oSelection\n\
	Application.LogMessage oItem.name &amp; \" has ID \" &amp; oDatabase.GetIdentifier( oItem , siModelIdentifier )\n\
	Application.LogMessage oItem.name &amp; \" has ID \" &amp; oDatabase.GetIdentifier( oItem )\n\
next\n\
\'INFO : 60\n\
\'INFO : {76BD459D-0C6F-4AC6-8489-1F0AD4E31079}\n\
\'INFO : Camera has ID -1\n\
\'INFO : Camera has ID 97\n\
\'INFO : cube has ID 416\n\
\'INFO : cube has ID 60\n\
\'INFO : Scene_Root has ID 416\n\
\'INFO : Scene_Root has ID 416</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example demonstrating how to determine the Class ID and the SPDL file of an object.\n\
	It also demonstrates how to use the Class ID to find all objects of a particular type in the scene.\n\
*/\n\
NewScene( null, false ) ;\n\
GetPrimLight(\"Point.Preset\", \"Point\", \"\");\n\
GetPrimLight(\"Spot.Preset\", \"Spot\", \"\");\n\
GetPrimLight(\"Spot.Preset\", \"Spot\", \"\");\n\
GetPrimLight(\"Infinite.Preset\", \"Infinite\", \"\");\n\
// Get information about about one of the lights\n\
var oDataRep = XSIUtils.DataRepository ;\n\
var oLight = Dictionary.GetObject( \"Point.light\" )\n\
var classID = oDataRep.GetIdentifier( oLight, siObjectCLSID );\n\
// Now that we know the ClassID from one light we can discover all the \n\
// lights in the scene\n\
var oLightsXSICollection = FindObjects( null, classID ) ;\n\
Application.LogMessage( \"Info about lights in the scene:\" ) ;\n\
for ( var i = 0 ; i &lt; oLightsXSICollection.Count ; i++ )\n\
{\n\
	var oLight = oLightsXSICollection.Item(i) ;\n\
	classID = oDataRep.GetIdentifier( oLight, 3 );\n\
	var objectGuid = oDataRep.GetIdentifier( oLight, siObjectGUID );\n\
	var	spdlFile = oDataRep.GetIdentifier( oLight, siSpdlFile ) ;\n\
	// Each light has a different Object GUID but they \n\
	// all share the same SPDL file and Class ID\n\
	Application.LogMessage( \"Name: \" + oLight + \"\\t\\tType: \" + oLight.Type ) ;\n\
	Application.LogMessage( \"ClassID: \" + classID ) ;\n\
	Application.LogMessage( \"Object GUID: \" + objectGuid ) ;\n\
	Application.LogMessage( \"SPDL File: \" + spdlFile + \"\\n\" ) ;\n\
}\n\
// Output of this example is similar to the following (SPDL path and Object GUID may differ):\n\
// \n\
//INFO : \"Info about lights in the scene:\"\n\
//INFO : \"Name: Point.light		Type: light\"\n\
//INFO : \"ClassID: {F3705C30-5204-11D0-8298-00A0243E366B}\"\n\
//INFO : \"Object GUID: {6AB2367F-1714-4F63-9AD8-334EB405F6FB}\"\n\
//INFO : \"SPDL File: s:\\Application\\spdl\\C3DLightPoint.spdl\n\
//\"\n\
//INFO : \"Name: Infinite.light		Type: light\"\n\
//INFO : \"ClassID: {F3705C30-5204-11D0-8298-00A0243E366B}\"\n\
//INFO : \"Object GUID: {BC839168-AB8A-4913-B8DE-801A9CD570C7}\"\n\
//INFO : \"SPDL File: s:\\Application\\spdl\\C3DLightPoint.spdl\n\
//\"\n\
//INFO : \"Name: light.light		Type: light\"\n\
//INFO : \"ClassID: {F3705C30-5204-11D0-8298-00A0243E366B}\"\n\
//INFO : \"Object GUID: {1667B7C6-6347-4FB2-81FC-B91557C9F35D}\"\n\
//INFO : \"SPDL File: s:\\Application\\spdl\\C3DLightPoint.spdl\n\
//\"\n\
//INFO : \"Name: Spot1.light		Type: light\"\n\
//INFO : \"ClassID: {F3705C30-5204-11D0-8298-00A0243E366B}\"\n\
//INFO : \"Object GUID: {B7E88791-0899-407C-9C13-3E426564136D}\"\n\
//INFO : \"SPDL File: s:\\Application\\spdl\\C3DLightPoint.spdl\n\
//\"\n\
//INFO : \"Name: Spot.light		Type: light\"\n\
//INFO : \"ClassID: {F3705C30-5204-11D0-8298-00A0243E366B}\"\n\
//INFO : \"Object GUID: {42171148-C315-4D96-AC79-C423AF977B1F}\"\n\
//INFO : \"SPDL File: s:\\Application\\spdl\\C3DLightPoint.spdl</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/FindObjects.html\">FindObjects</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";