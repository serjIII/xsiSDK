var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ArrayParameter.Move</title>\n\
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
            <h1>ArrayParameter.Move</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ArrayParameter.html\">ArrayParameter</a>.Move</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Moves the specified array parameter up or down within the\n\
array. Using negative values for the UpOrDown parameter moves \n\
the parameter down (towards the beginning of the array) and \n\
specifying positive values moves it up (towards the end of \n\
the array). The parameters cannot be moved beyond the array \n\
boundaries. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ArrayParameter.Move( Parameter, UpOrDown );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Parameter		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
\n\
		The array parameter to remove. You can use either a\n\
		zero-based index in the array or as a parameter object \n\
		that\'s already a member of the array. Any other type \n\
		generates an Invalid Argument error.\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UpOrDown		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		Number of indices and direction to move the parameter.\n\
		The new index of the parameter will be its current\n\
		index plus this value. A parameter cannot moved\n\
beyond the array\'s boundaries.\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">NewScene ,false\n\
GetPrimLight \"Point.Preset\", \"Point\"\n\
SIApplyShaderToCnxPoint \"Volume\\Fast_volume_effects.Preset\", \"Passes.Default_Pass.VolumeShaderStack\", , False\n\
AddObjectsToShader \"light\", \"Passes.Default_Pass.Fast_volume_effects.Lights\"\n\
AddObjectsToShader \"Point\", \"Passes.Default_Pass.Fast_volume_effects.Lights\"\n\
Set oShader = GetValue( \"Passes.Default_Pass.Fast_volume_effects\" )\n\
Set oLights = oShader.Lights\n\
LogMessage oLights.type\n\
LogMessage \"No Light: \" &amp; oLights.Count\n\
For i = 0 To oLights.Count - 1\n\
Set oLight = oLights.Parameters( i ).NestedObjects(0)\n\
LogMessage \"Light \" &amp; i &amp; \" : \" &amp; oLight.FullName\n\
Next</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to move elements \n\
	up and down in a parameter array.\n\
*/\n\
NewScene( null, false );\n\
var oCube = ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
var oMat = oCube.AddMaterial( \"Phong\" );\n\
var oMixer = oMat.surface.ConnectFromProgid( \"Softimage.XSIColorMixer.1\" );\n\
var oLayers = oMixer.layers;\n\
var aLayers = new Array();\n\
for( i = 0; i &lt; 4; i++ )\n\
{\n\
	aLayers[ i ] = oLayers.Add();\n\
	aLayers[ i ].parameters(\"layer_mixmode\").value = i;\n\
}\n\
var strMsg = \"Before : \";\n\
for( i = 0; i &lt; oLayers.Count; i++ )\n\
	strMsg += oLayers.Parameters( i ).parameters(\"layer_mixmode\").value + \" \";\n\
LogMessage( strMsg );\n\
// Move element by index, ten indices down. The move will be\n\
// clamped to the beginning of the array.\n\
oLayers.Move( 3, -10 );\n\
strMsg = \"After 1: \";\n\
for( i = 0; i &lt; oLayers.Count; i++ )\n\
	strMsg += oLayers.Parameters( i ).parameters(\"layer_mixmode\").value + \" \";\n\
LogMessage( strMsg );\n\
// Move the element by reference, three indices up. The move will\n\
// again be clamped, this time to the end of the array.\n\
oLayers.Move( aLayers[ 1 ], 3 );\n\
// Move element by reference\n\
strMsg = \"After 2: \";\n\
for( i = 0; i &lt; oLayers.Count; i++ )\n\
	strMsg += oLayers.Parameters( i ).parameters(\"layer_mixmode\").value + \" \";\n\
LogMessage( strMsg );\n\
// Output of above script is:\n\
// --------------------------\n\
// INFO : \"Before : 0 1 2 3\"\n\
// INFO : \"After 1: 3 0 1 2\"\n\
// INFO : \"After 2: 3 0 2 1\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ArrayParameter.Add.html\">ArrayParameter.Add</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";