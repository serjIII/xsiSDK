var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Model.Sources</title>\n\
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
            <h1>Model.Sources</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Model.html\">Model</a>.Sources</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a collection of all source objects within the model. Currently, the only\n\
sources available to the model are of type <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a>, which\n\
is a specialized kind of <a href=\"#!/url=./si_om/Source.html\">Source</a> object. \n\
<br /><br />\n\
Audio and <a href=\"#!/url=./si_om/Image.html\">Image</a> sources (which are basically references to audio \n\
and image files) are all stored under the <a href=\"#!/url=./si_om/Scene.html\">Scene</a> container (see \n\
<a href=\"#!/url=./si_om/Scene.ExternalFiles.html\">Scene.ExternalFiles</a>).\n\
<br /><br />\n\
Note: Prior to v6.0, Model sources were also available using this property as a\n\
way to manage changes to reference models; however, this functionality is now\n\
provided by the <a href=\"#!/url=./si_om/Delta.html\">Delta</a> system.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
DataSourceCollection rtn = Model.Sources;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to find all sources in the scene\n\
	by using the Model.Sources property on every model returned from\n\
	the X3DObject.Models property, given this structure:\n\
	    Scene_Root (Model)\n\
	        |- Herb (Model)\n\
	        |    |- Mixer		(animation clip on null.posx)\n\
	        |    |- null 		(null.size = FCurve)\n\
	        |\n\
	        |- Jesse (Model)\n\
	        |    |- Mixer		(animation clips on null.scly,null.sclz,null.rotz)\n\
	        |    |- null\n\
	        |\n\
	        |- Sally (Model)\n\
	             |- Mixer		(audio clip)\n\
	             |- grid		(image on its texture projection)\n\
*/\n\
function FindSourcesUnderModel( in_model )\n\
{\n\
	// We will return a comma-delimited string of the names of all sources found \n\
	var foundsrcs = \"\";\n\
	Application.LogMessage( \"\\n\\tSearching \" + in_model.FullName + \" for sources...\", siComment );\n\
	// Loop through the collection of sources found under this model to print the\n\
	// name and add its name to the result string\n\
	if ( in_model.Sources.Count &gt; 0 ) {\n\
		var s = new Enumerator( in_model.Sources );\n\
		for ( ; !s.atEnd(); s.moveNext() ) {\n\
			var src = s.item();\n\
			Application.LogMessage( \"\\t\" + src.FullName + \" is a \" + ClassName(src), siComment );\n\
			// Shorthand for making sure we don\'t add an extra comma to the start of the list\n\
			foundsrcs += ( foundsrcs == \"\" ) ? src.FullName : \",\" + src.FullName;\n\
		}\n\
	} else {\n\
		Application.LogMessage( \"\\tNo sources found on \" + in_model.FullName, siComment );\n\
	}\n\
	// Return empty strings too; the caller will handle testing for no data\n\
	return foundsrcs;\n\
}\n\
// Set up the scene (see end of example for details)\n\
SetTheScene();\n\
// Search through all models in the scene for sources\n\
var models = new ActiveXObject( \"XSI.Collection\" );\n\
models.AddItems( ActiveSceneRoot.Models(true) );\n\
models.Add( ActiveSceneRoot );\n\
Application.LogMessage( \"SEARCHING MODELS: \" + models.GetAsText(), siComment );\n\
// Build a collection of sources\n\
var sources = new ActiveXObject( \"XSI.Collection\" );\n\
for ( var m=0; m&lt;models.Count; m++ ) {\n\
	var results = FindSourcesUnderModel( models(m) );\n\
	if ( results != \"\" ) { \n\
		sources.AddItems(results); \n\
	}\n\
}\n\
// Now this source collection contains all sources in the scene,\n\
// regardless of which model they are under\n\
Application.LogMessage( \"\\nFINAL SCORE: Found \" + sources.Count + \" sources: \", siComment );\n\
Application.LogMessage( sources.GetAsText(), siComment );\n\
// And just for bonus marks, get the list of external files\n\
var extfiles = ActiveProject.ActiveScene.ExternalFiles;\n\
Application.LogMessage( \"\\nBONUS: Found \" + extfiles.Count + \" external file(s)\", siComment );\n\
for ( var f=0; f&lt;extfiles.Count; f++ ) {\n\
	Application.LogMessage( \"\\t\" + extfiles(f).ResolvedPath, siComment );\n\
}\n\
// Expected results:\n\
//SEARCHING MODELS: Herb,Jesse,Sally,Scene_Root\n\
//\n\
//	Searching Herb for sources...\n\
//	Sources.Herb.Shuffle is a ActionSource\n\
//\n\
//	Searching Jesse for sources...\n\
//	Sources.Jesse.Zinging is a ActionSource\n\
//	Sources.Jesse.Thwacking is a ActionSource\n\
//\n\
//	Searching Sally for sources...\n\
//	No sources found on Sally\n\
//\n\
//	Searching Scene_Root for sources...\n\
//	No sources found on Scene_Root\n\
//\n\
//FINAL SCORE: Found 3 sources: \n\
//Sources.Herb.Shuffle,Sources.Jesse.Zinging,Sources.Jesse.Thwacking\n\
//\n\
//BONUS: Found 2 external file(s)\n\
//	C:\\Program Files\\Messenger\\ONLINE.WAV\n\
//	&lt;factory_path&gt;\\Application\\rsrc\\noIcon.pic\n\
// Helper function to make this example more readable\n\
function SetTheScene()\n\
{\n\
	NewScene( null, false );\n\
	// ~~~~ HERB\'S SETUP ~~~~ \n\
	var herb = ActiveSceneRoot.AddModel();\n\
	herb.Name = \"Herb\";\n\
	var obj = herb.AddNull();\n\
	// Make the icon a diamond\n\
	obj.primary_icon = 7;\n\
	// Set up an fcurve on the size of the null\n\
	var keys = new Array( 1, 1,  34, 12,  73, 38 );\n\
	obj.size.AddFCurve2( keys );	\n\
	// Set up another fcurve on the null\'s position in X\n\
	keys = new Array( 3, 0.5,  22, 1.0,  75, 3.5,  80, -2.0 );\n\
	var fc = obj.posx.AddFCurve2( keys );\n\
	// Store the fcurve on posx as an action source\n\
	herb.AddActionSource( \"Shuffle\", new Array(obj.posx.FullName), \n\
		new Array(fc), new Array(true) );\n\
	// ~~~~ JESSE\'S SETUP ~~~~ \n\
	var jess = ActiveSceneRoot.AddModel();\n\
	jess.Name = \"Jesse\";\n\
	obj = jess.AddNull();\n\
	// Create an action source on the null\'s scaling in Y and Z (fcurves)\n\
	keys = new Array( 5, 1.2,  20, 1.7,  45, 2.0,  90, 2.5 );\n\
	targets = new Array( obj.scly.FullName, obj.sclz.FullName );\n\
	sources = new Array( obj.scly.AddFCurve2(keys), obj.sclz.AddFCurve2(keys) );\n\
	actives = new Array( true, true );\n\
	jess.AddActionSource( \"Zinging\", targets, sources, actives );\n\
	// Add a rotation source too\n\
	keys = new Array( 6, 0,  36, -30,  99, 0 );\n\
	targets = new Array( obj.rotz.FullName );\n\
	sources = new Array( obj.rotz.AddFCurve2(keys) );\n\
	actives = new Array( true );\n\
	jess.AddActionSource( \"Thwacking\", targets, sources, actives );\n\
	// ~~~~ SALLY\'S SETUP ~~~~ \n\
	var sal = ActiveSceneRoot.AddModel();\n\
	sal.Name = \"Sally\";\n\
	obj = sal.AddGeometry( \"Grid\", \"MeshSurface\" );\n\
	// Create a grid with a texture projection\n\
	ApplyShader( obj, null, null, siUnspecified, siLetLocalMaterialsOverlap );\n\
	CreateProjection( obj, siTxtSpherical, siTxtDefaultSpherical, \"\", \"Texture_Projection\", null, siRelDefault, \"\" );\n\
	// Applying an image to the texture projection creates an image source\n\
	BlendInTextureLayers( \"Image\", obj, 1, false, siReplaceAndBlendInPreset, true, true, false, false );\n\
	// Also add an audio source and instantiate it in the mixer\n\
	var aud = ImportAudio( sal, null, \"Wavy\" );\n\
	AddAudioClip( sal, aud );\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";