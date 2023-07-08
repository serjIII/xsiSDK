var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClipEffect</title>\n\
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
            <h1>ClipEffect</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ClipEffect</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ClipEffect\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1ClipEffect.html\">ClipEffect</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">ClipEffect</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The ClipEffect object represents the set of effects associated with a clip. Each ClipEffect\n\
object contains one item corresponding to a <a href=\"#!/url=./si_om/MappedItem.html\">MappedItem</a>. These \n\
<a href=\"#!/url=./si_om/ClipEffectItem.html\">ClipEffectItem</a>s contain expressions that control the clip without affecting \n\
the <a href=\"#!/url=./si_om/Source.html\">Source</a> on which the clip was instantiated. For example, you can create a\n\
walk cycle with a progressive offset by using an expression similar to this: \'(cid * 10) + this\'<br /><br />\n\
ClipEffects are available from the Clip object using the <a href=\"#!/url=./si_om/Clip.Effect.html\">Clip.Effect</a> property.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClipEffect.IsActive.html\">IsActive</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClipEffect.IsPoseEffectActive.html\">IsPoseEffectActive</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClipEffect.Items.html\">Items</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClipEffect.PoseEffect.html\">PoseEffect</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClipEffect.TimeReference.html\">TimeReference</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ClipEffect.Variables.html\">Variables</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">oRoot = Application.ActiveSceneRoot\n\
oCube = oRoot.AddGeometry(\"Cube\", \"MeshSurface\")	\n\
#Creating the first animation source\n\
oSource = Application.StoreAction(oRoot, \"cube.kine.local.posx,cube.kine.local.posy,cube.kine.local.posz\", \n\
	1, \"StoredStaticPose\", 1, 1, 5, 0, 0)\n\
#Creating the first clip\n\
oClip = Application.AddClip(oRoot, oSource)	\n\
for i in range(oClip.MappedItems.Count):\n\
	oCurrMappedItem = oClip.MappedItems(i)\n\
	oParam = oCurrMappedItem.Destination\n\
	if oParam.FullName == \"cube.kine.local.posy\":\n\
		Application.SetMappingRule(oClip.FullName + \".ActionClip\",oParam,\"frame\",i+1)\n\
		break\n\
Application.LogMessage(\"The expression associated with the posy item is \" \n\
	+ oCurrMappedItem.ClipEffectItem.Expression)</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to get at the ClipEffect objects by creating some \n\
	sources and clips with clip effects and then finding them again through the mapped \n\
	items on the clips in the mixer.\n\
*/\n\
NewScene( ActiveProject, false );\n\
// Set up some sources and clips in the scene (see end of example for details)\n\
CreateFCurveAction( ActiveSceneRoot );\n\
// Get all the clips in the mixer and then the sources\n\
var clips = ActiveSceneRoot.Mixer.Clips;\n\
for ( var i=0; i&lt;clips.Count; i++ ) {\n\
	// Look at their mapped items, but avoid the audio clips\n\
	if ( clips(i).Type != siClipAudioType &amp;&amp; clips(i).MappedItems ) {\n\
		var clp = clips(i);\n\
		LogMessage( \"Found \" + clp.MappedItems.Count + \" mapped items(s)\" );\n\
		for ( var j=0; j&lt;clp.MappedItems.Count; j++ ) {\n\
			var mapping = clp.MappedItems(j);\n\
			if ( mapping.ClipEffectItem.Expression != \"\" ) {\n\
				LogMessage( \"\\t...this clip has a clip effect item matching this expression:\" );\n\
				LogMessage( \"\\t\\t\" + mapping.ClipEffectItem.Expression );\n\
			}\n\
			LogMessage( \"\\t...destination parameter: \" + mapping.Destination );\n\
		}\n\
	}\n\
}\n\
// Expected results:\n\
//INFO : Found 3 mapped items(s)\n\
//INFO : 	...this clip has a clip effect item matching this expression:\n\
//INFO : 		this+5\n\
//INFO : 	...destination parameter: null.kine.local.sclx\n\
//INFO : 	...destination parameter: null.kine.local.scly\n\
//INFO : 	...destination parameter: null.kine.local.sclz\n\
// Convenience function\n\
function CreateFCurveAction( in_model )\n\
{\n\
	var obj = in_model.AddNull();\n\
	// Set FCurves on the null\'s scaling\n\
	var keys = new Array( 5, 1.2,  20, 1.7,  45, 2.0,  90, 2.5 );\n\
	obj.sclx.AddFCurve2( keys );\n\
	var keyfactor = Math.random() * 10;\n\
	var posfactor = Math.random();\n\
	for ( var i=0; i&lt;keys.length; i=i+2 ) {\n\
		keys[i] = keys[i] + keyfactor;\n\
		keys[i+1] = keys[i+1] * posfactor;\n\
	}\n\
	obj.scly.AddFCurve2( keys );\n\
	var keyfactor = Math.random() * 10;\n\
	var posfactor = Math.random();\n\
	for ( var i=0; i&lt;keys.length; i=i+2 ) {\n\
		keys[i] = keys[i] - keyfactor;\n\
		keys[i+1] = keys[i+1] * posfactor;\n\
	}\n\
	obj.sclz.AddFCurve2( keys );\n\
	// Get list of parameters to mark\n\
	var params = obj.sclx.FullName + \",\";\n\
	params += obj.scly.FullName + \",\";\n\
	params += obj.sclz.FullName;\n\
	// Make the FCurves into an Action\n\
	var src = StoreAction( in_model, params, 2, \"StoredAnimFCrvAction\" );\n\
	var clip = AddClip( in_model, src );\n\
	// Add some clip effects to it\n\
	var toclip = clip+\".ActionClip\";\n\
	var rtn = GetMappingRule( toclip, 0 );\n\
	var from = rtn.Value( \"From\" );\n\
	SetMappingRule( toclip, from, \"this+5\", 1 );\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ClipEffectItem.html\">ClipEffectItem</a> <a href=\"#!/url=./si_om/Clip.Effect.html\">Clip.Effect</a> <a href=\"#!/url=./si_cmds/GetMappingRule.html\">GetMappingRule</a> <a href=\"#!/url=./si_cmds/SetMappingRule.html\">SetMappingRule</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";