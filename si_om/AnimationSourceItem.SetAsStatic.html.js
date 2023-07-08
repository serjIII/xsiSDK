var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AnimationSourceItem.SetAsStatic</title>\n\
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
            <h1>AnimationSourceItem.SetAsStatic</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a>.SetAsStatic</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets the source (<a href=\"#!/url=./files/DataSource.htm\">DataSource</a>) of the <a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a> as a \n\
<a href=\"#!/url=./si_om/StaticSource.html\">StaticSource</a>. There are two ways you can use this method:<br /><br />\n\
(1) Specify a new <a href=\"#!/url=./si_om/StaticSource.html\">StaticSource</a> source (eg., after creating a new AnimationSourceItem \n\
with <a href=\"#!/url=./si_om/ActionSource.AddSourceItem.html\">ActionSource.AddSourceItem</a>() ).<br /><br />\n\
(2) Replace an existing <a href=\"#!/url=./files/DataSource.htm\">DataSource</a> with a <a href=\"#!/url=./si_om/StaticSource.html\">StaticSource</a> source.\n\
<br /><br />\n\
An \"Access Denied\" error is raised if the action source is used by a locked animation layer (see <a href=\"#!/url=./si_cmds/IsAnimationLayerLocked.html\">IsAnimationLayerLocked</a>).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StaticSource AnimationSourceItem.SetAsStatic( Object in_vValue );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = AnimationSourceItem.SetAsStatic( [Value] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/StaticSource.html\">StaticSource</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The value of the static value (has to be a double)		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example llustrates some of the different ways you can work with the value of an AnimationSourceItem\'s\n\
	StaticSource, from creating using AddSourceItem and SetAsStaticValue to editing an existing static value\n\
	using the GetSournce/PutSource combo.\n\
*/\n\
app = Application;\n\
NewScene( null, false );\n\
var root = ActiveSceneRoot;\n\
// New static ActionSource\n\
MakeStaticActionSource();\n\
var n = root.FindChild( \"\", siNullPrimType );\n\
// Get the ActionSource from the model &amp; instantiate it as a clip\n\
var src = root.Sources(0);\n\
AddClip( root, src );\n\
// Find the clip\n\
var mxr = root.Mixer;\n\
var clp = mxr.Clips(0);\n\
app.LogMessage( \"BEFORE source modifications:\" );\n\
PrintClipInfo( clp );\n\
// Get the AnimationSourceItem\n\
var srcitems = src.SourceItems;\n\
var oldSrcItem = srcitems(0);\n\
// Use AnimationSourceItem.GetSource to get the StaticSource and then change its value\n\
var sv = oldSrcItem.Source;\n\
sv.Value = 2.5;\n\
// Print the values on the action source after modifications to the source\n\
app.LogMessage( \"AFTER source modifications:\" );\n\
PrintClipInfo( clp );\n\
// Expected results:\n\
//INFO : BEFORE source modifications:\n\
//INFO : Reporting on Mixer.Mixer_Anim_Track.Action_Clip clip:\n\
//INFO :  - Source used = Sources.Scene_Root.Action\n\
//INFO :  --- SrcItem #0 target = MyAnimatedNull.kine.local.posx and its datasource is a StaticSource\n\
//INFO :             (evaluates to 0)\n\
//INFO :  --- SrcItem #1 target = MyAnimatedNull.kine.local.posy and its datasource is a StaticSource\n\
//INFO :             (evaluates to 1)\n\
//INFO :  --- SrcItem #2 target = MyAnimatedNull.kine.local.posz and its datasource is a StaticSource\n\
//INFO :             (evaluates to 2)\n\
//INFO : \n\
//INFO : AFTER source modifications:\n\
//INFO : Reporting on Mixer.Mixer_Anim_Track.Action_Clip clip:\n\
//INFO :  - Source used = Sources.Scene_Root.Action\n\
//INFO :  --- SrcItem #0 target = MyAnimatedNull.kine.local.posx and its datasource is a StaticSource\n\
//INFO :             (evaluates to 2.5)\n\
//INFO :  --- SrcItem #1 target = MyAnimatedNull.kine.local.posy and its datasource is a StaticSource\n\
//INFO :             (evaluates to 1)\n\
//INFO :  --- SrcItem #2 target = MyAnimatedNull.kine.local.posz and its datasource is a StaticSource\n\
//INFO :             (evaluates to 2)\n\
//INFO : \n\
// Convenience funtion to print out information about the clip\'s source\n\
function PrintClipInfo( in_clip )\n\
{\n\
	var app = Application ;\n\
	// Clip\n\
	app.LogMessage( \"Reporting on \" + in_clip + \" clip:\" );\n\
	// Clip\'s source\n\
	PrintSourceInfo( in_clip.Source );\n\
}\n\
// Convenience function to print out information about the source\n\
function PrintSourceInfo( in_src )\n\
{\n\
	var app = Application ;\n\
	// Source\n\
	app.LogMessage( \" - Source used = \" + in_src );\n\
	// Source\'s items\n\
	var itemsRef = in_src.SourceItems;\n\
	for ( var i=0; i&lt;itemsRef.Count; i++ ) {\n\
		var animsrcitm = itemsRef(i);\n\
		app.LogMessage( \" --- SrcItem #\" + i + \" target = \" + animsrcitm.Target + \" and its datasource is a \" + ClassName(animsrcitm.Source) );\n\
		// Underlying data source is an FCurve\n\
		if ( animsrcitm.Source.isclassof(siFCurveID) ) {\n\
			var fc = animsrcitm.Source;\n\
			app.LogMessage( \"            (evaluates to \" + fc.Eval(30.0) + \" at frame 30)\" );\n\
		}\n\
		// Underlying data source is a StaticSource\n\
		if ( animsrcitm.Source.isclassof(siStaticSourceID) ) {\n\
			var sv = animsrcitm.Source;\n\
			app.LogMessage( \"            (evaluates to \" + sv.Value + \")\" );\n\
		}\n\
	}\n\
	// Extra blank line\n\
	app.LogMessage( \"\" );\n\
}\n\
// Create a simple actionsource based on static values\n\
function MakeStaticActionSource()\n\
{\n\
	var app = Application;\n\
	var root = app.ActiveSceneRoot;\n\
	var n = root.AddNull( \"MyAnimatedNull\" );\n\
	// Get the relative names for the parameter targets\n\
	var rposx = GetRelativeNameForTarget( n.posx );\n\
	var rposy = GetRelativeNameForTarget( n.posy );\n\
	var rposz = GetRelativeNameForTarget( n.posz );\n\
	// Create an empty action source\n\
	var src = root.AddActionSource();\n\
	// Populate it with a static value using ActionSource.AddSourceItem (default=0.0)\n\
	src.AddSourceItem( rposx );\n\
	// Populate it with a specified static value using ActionSource.AddSourceItem\n\
	src.AddSourceItem( rposy, 1.0, true );\n\
	// Populate it with the default static value, then set a real value later with AnimationSourceItem.SetAsStatic\n\
	var animsrcitem = src.AddSourceItem( rposz );\n\
	animsrcitem.SetAsStatic( 2.0 );\n\
}\n\
function GetRelativeNameForTarget( in_param )\n\
{\n\
	var mdlname = in_param.Model.FullName;\n\
	if ( mdlname == \"Scene_Root\" ) {\n\
		return in_param.FullName;\n\
	} else {\n\
		var tmp = in_param.FullName;\n\
		var re = new RegExp( mdlname + \".\", \"i\" );\n\
		return tmp.replace( re, \"\" );\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";