var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MappedItem</title>\n\
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
            <h1>MappedItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MappedItem</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_MappedItem\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1MappedItem.html\">MappedItem</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">MappedItem</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The MappedItem object holds the <a href=\"#!/url=./files/DataSource.htm\">DataSource</a> of a <a href=\"#!/url=./si_om/Clip.html\">Clip</a> \n\
object. It provides access to the related source (<a href=\"#!/url=./si_om/MappedItem.Source2.html\">MappedItem.Source2</a>), the \n\
parameter which is driven by the related source (<a href=\"#!/url=./si_om/MappedItem.Destination.html\">MappedItem.Destination</a>), and\n\
any <a href=\"#!/url=./si_om/ClipEffectItem.html\">ClipEffectItem</a>s applied to the clip (<a href=\"#!/url=./si_om/MappedItem.ClipEffectItem.html\">MappedItem.ClipEffectItem</a>).<br /><br />\n\
Note: This object is available from the <a href=\"#!/url=./si_om/Clip.MappedItems.html\">Clip.MappedItems</a> property (which \n\
returns a <a href=\"#!/url=./si_om/MappedItemCollection.html\">MappedItemCollection</a>). The MappedItem object is only available for clips\n\
instantiated from <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a>s (either action animation or shape animation). You\n\
can test this by calling the base property <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> on the Clip object which\n\
returns one of the values for the <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a> constant.\n\
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
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MappedItem.ClipEffectItem.html\">ClipEffectItem</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MappedItem.Destination.html\">Destination</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/MappedItem.Source2.html\">Source2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use MappedItems by creating some\n\
	sources and clips and then finding the mapped items on the clips\n\
	in the mixer.\n\
*/\n\
NewScene( null, false );\n\
// Set up some sources and clips in the scene (see end of example for details)\n\
CreateShapeAction( ActiveSceneRoot );\n\
// Get all the clips in the mixer and then the sources\n\
var clips = ActiveSceneRoot.Mixer.Clips;\n\
for ( var i=0; i&lt;clips.Count; i++ ) {\n\
	// Look at their mapped items, but avoid the audio clips\n\
	if ( clips(i).Type != siClipAudioType &amp;&amp; clips(i).MappedItems ) {\n\
		var clp = clips(i);\n\
		LogMessage( \"Found \" + clp.MappedItems.Count + \" mapped items(s)\" );\n\
		for ( var j=0; j&lt;clp.MappedItems.Count; j++ ) {\n\
			var mapping = clp.MappedItems(j);\n\
			LogMessage( \"\\t...does it have a clip effect item associated? \" \n\
				+ (mapping.ClipEffectItem.Expression != \"\") );\n\
			LogMessage( \"\\t...destination parameter: \" + mapping.Destination );\n\
		}\n\
	}\n\
}\n\
// Expected results:\n\
//INFO : Found 1 mapped items(s)\n\
//INFO : 	...does it have a clip effect item associated? false\n\
//INFO : 	...destination parameter: cone.polymsh.cls.Shape\n\
// Convenience function\n\
function CreateShapeAction( in_model )\n\
{\n\
	var obj = in_model.AddGeometry( \"Cone\", \"MeshSurface\" );\n\
	var target = obj + \".pnt[0,2,5,8,11,14,17,20,23]\"\n\
	SetSelFilter( \"Vertex\" );\n\
	SelectGeometryComponents( target );\n\
	Translate( null, 0, -2, 0, siAbsolute, siPivot, siObj, siY, null, \n\
		null, null, null, null, null, null, null, null, 1 );\n\
	SaveShapeKey( target, null, null, 1, null, null, null, \n\
		null, siShapeObjectReferenceMode );\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Clip.MappedItems.html\">Clip.MappedItems</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";