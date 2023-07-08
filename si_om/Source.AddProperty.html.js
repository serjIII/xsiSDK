var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Source.AddProperty</title>\n\
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
            <h1>Source.AddProperty</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Source.html\">Source</a>.AddProperty</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates and adds a <a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlob</a> or <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>\n\
to a Source object.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Property Source.AddProperty( Object in_Preset, Boolean in_Branch, String in_name );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Source.AddProperty( Preset, [BranchFlag], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>, <a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlob</a> or <a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a>, \n\
depending on the preset that was used.\n\
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
		<td class=\"name\">Preset		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		This argument contains either the name of a <a href=\"#!/url=./si_cmds/PropPreset.html\">Property Preset</a> \n\
		or a string with the filename or full path to a Preset file. \n\
		<br /><br />\n\
		Note: Only <a href=\"#!/url=./si_cmds/CustomPropertyPresets.html\">CustomProperty Presets</a>,\n\
		<a href=\"#!/url=./si_cmds/UserDataBlobPresets.html\">UserDataBlob Presets</a>, and\n\
		<a href=\"#!/url=./si_cmds/UserDataMapPresets.html\">UserDataMap Presets</a> are valid for sources.\n\
		<br /><br />\n\
		The type of property that is created is determined by this argument. For example, \"CustomProperty\"  \n\
		creates an empty <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> and \"UserDataBlob\" creates a <a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlob</a>.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">BranchFlag		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
False is the only supported value			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Represents the name of the new property (see <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a>).\n\
		If not specified the object is named based on the Preset argument.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to add user data to a shape source\n\
*/\n\
// First build a simple scene \n\
NewScene( null, false );\n\
var oCone = ActiveSceneRoot.AddGeometry( \"Cone\", \"MeshSurface\" );\n\
// Set up the time in seconds\n\
var oPlayCtrl = GetValue(\"PlayControl\");\n\
var dFrameRate = oPlayCtrl.Parameters(\"Rate\").Value;\n\
var dTime = 1.0 * dFrameRate;					// start at the beginning\n\
// Using SaveShapeKey stores the source and applies the clip simultaneously\n\
var aIndices = new Array( 1,4,7,10,13,16,19,22,25 );\n\
var aPositions = new Array( /*    X,        Y,        Z         */\n\
				0,        1.6667,  0,      	// point 1\n\
				-0.5,     -0.5,    0,      	// point 4\n\
				-0.3536,  -0.5,    -0.3536,	// point 7\n\
				0,        -0.5,    0.5,    	// point 10\n\
				0.3536,   -0.5,    0.3536, 	// point 13\n\
				0.5,      -0.5,    0,      	// point 16\n\
				0.3536,   -0.5,    -0.3536,	// point 19\n\
				0,        -0.5,    -0.5,   	// point 22\n\
				-0.3536,  -0.5,    -0.3536 	// point 25\n\
			);\n\
var oShapeClip = oCone.ActivePrimitive.Geometry.SaveShapeKey( \n\
			dTime,	 				// Time (when to evaluate)\n\
			-1,		 			// ClipDuration\n\
			siShapeObjectReferenceMode, 		// RefMode (shape ref. mode)\n\
			siShapeMixedWeightMode, 		// InstMode (shape inst. mode)\n\
			\"MyNewShape\",		 		// Name for shape\n\
			aIndices,				// IndexArray (point indices)\n\
			aPositions				// PositionArray (key positions)\n\
		);\n\
// Add a CustomProperty nested under the Source of the 1st clip\n\
var oShapeSource = oShapeClip.Source;\n\
var oShapePSet = oShapeSource.AddProperty( \"CustomProperty\",false, \"ShapePSet\" );\n\
oShapePSet.AddParameter3( \"Foo\", siString ) ;\n\
// Add a UserDataBlob nested under the ShapeSource\n\
var oShapeUserDataBlob = oShapeSource.AddProperty( \"UserDataBlob\" );\n\
LogMessage( \"There are \" + oShapeSource.Properties.Count + \" Properties under this Shape Source\" ) ;\n\
// Expected result:\n\
//INFO : There are 2 Properties under this Shape Source</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> <a href=\"#!/url=./si_om/Source.Properties.html\">Source.Properties</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";