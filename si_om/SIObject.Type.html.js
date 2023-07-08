var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIObject.Type</title>\n\
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
            <h1>SIObject.Type</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>.Type <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns information about the object\'s type as a <a href=\"#!/url=./files/String.htm\">String</a>. In many cases it \n\
returns the same result as <a href=\"#!/url=./si_om/Application.ClassName.html\">Application.ClassName</a> but in other cases it \n\
returns a more specific result that further categorizes the object.  The returned value \n\
is not necessarily the name of an object in the Object Model. <br /><br />\n\
Some examples:<br /><br />\n\
A Phong <a href=\"#!/url=./si_om/Shader.html\">Shader</a> returns \"Shader\" as its type.  (To distinguish\n\
between shaders use <a href=\"#!/url=./si_om/Shader.ProgID.html\">Shader.ProgID</a>.) <br /><br />\n\
An Infinite <a href=\"#!/url=./si_om/Light.html\">Light</a> returns \"light\" as its type. <br /><br />\n\
A <a href=\"#!/url=./si_om/Null.html\">Null</a> returns \"null\" as its type. <br /><br />\n\
A turbulence force returns \"turbulence\" as its type. <br /><br />\n\
A polygon mesh cylinder returns returns \"polymsh\" as its type. The active \n\
<a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> of a polygon mesh cylinder also returns \"polymsh\" as its type.<br /><br />\n\
A nurbs surface cylinder returns returns \"surfmsh\" as its type. <br /><br />\n\
The visibility <a href=\"#!/url=./si_om/Property.html\">Property</a> returns \"visibility\" as its type. <br /><br />\n\
An instance of a self-installed <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> returns the name of its \n\
<a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a> as its type.  A dynamically-created or spdl-based CustomProperty \n\
returns \"customparamset\" as its type. <br /><br />\n\
The scene root and other <a href=\"#!/url=./si_om/Model.html\">Model</a>s in the scene return \"#model\" as their type. <br /><br />\n\
An <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> does not support <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>, however it also has its own \n\
Type property which returns information about the <a href=\"#!/url=./si_om/siFCurveType.html\">siFCurveType</a>. <br /><br />\n\
A <a href=\"#!/url=./si_om/Clip.html\">Clip</a> returns one of the values from the <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a> constant. <br /><br />\n\
A <a href=\"#!/url=./si_om/Track.html\">Track</a> returns one of the values from the <a href=\"#!/url=./si_om/siTrackType.html\">siTrackType</a> constant. <br /><br />\n\
A <a href=\"#!/url=./si_om/Transition.html\">Transition</a> returns one of the values from the <a href=\"#!/url=./si_om/siTransitionType.html\">siTransitionType</a> constant. <br /><br />\n\
A <a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a> returns one of the values from the \n\
<a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a> enum. <br /><br />\n\
A <a href=\"#!/url=./si_om/MappedItem.html\">MappedItem</a> returns one of the values from the <a href=\"#!/url=./si_om/siMappedItemType.html\">siMappedItemType</a> constant. <br /><br /><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>, <a href=\"#!/url=./si_om/PPG.html\">PPG</a>, and <a href=\"#!/url=./si_om/Image.html\">Image</a> are examples\n\
of objects which do not support <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a> and do not support a Type property.\n\
See <a href=\"#!/url=./si_om/_hier.html#oh_HierarchyMap\">Object Hierarchy</a> for more details.<br /><br />\n\
A <a href=\"#!/url=./si_om/Filter.html\">Filter</a> returns one of the <a href=\"#!/url=./si_om/siFilterFundamentalType.html\">siFilterFundamentalType</a> values. For \n\
example, a point filter reports the string \"SubComponentFilter\", not the number 5 (which is the value \n\
for siFilterSubComponentPoint of the <a href=\"#!/url=./si_om/siFilterType.html\">siFilterType</a> enum). <br /><br />\n\
An <a href=\"#!/url=./si_om/EventInfo.html\">EventInfo</a> returns the type of event (for example, \"OnBeginNewScene\" or \"OnEndNewScene\"). See \n\
the Description column of the <a href=\"#!/url=./si_om/siEventID.html\">siEventID</a> enumerator for a list of supported event types.<br /><br />\n\
An <a href=\"#!/url=./si_om/ActionDelta.html\">ActionDelta</a> and <a href=\"#!/url=./si_om/ActionDeltaItem.html\">ActionDeltaItem</a> return the type of modification \n\
as one of the <a href=\"#!/url=./si_om/siModificationDeltaType.html\">siModificationDeltaType</a> enum values.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String rtn = SIObject.Type;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example displays the type of an object\n\
\'\n\
set oObj = ActiveProject.ActiveScene.Root.AddGeometry(\"Sphere\", \"NurbsSurface\")\n\
LogMessage \"Object type = \" &amp; oObj.Type</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates using the SIObject.Type property to distinguish \n\
	objects of a certain type inside a collection\n\
*/\n\
// First fill a collection will many different types of objects\n\
var oCollection = new ActiveXObject( \"XSI.Collection\" ) ;\n\
oCollection.Add( ActiveSceneRoot.AddNull() );\n\
oCollection.Add( ActiveSceneRoot.AddGeometry(\"Cone\",\"MeshSurface\") );\n\
oCollection.Add( ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\") );\n\
oCollection.Add( ActiveSceneRoot.AddGeometry(\"Cube\",\"NurbsSurface\") );\n\
oCollection.Add( ActiveSceneRoot.AddProperty( \"CustomProperty\", false ) );\n\
oCollection.Add( ActiveSceneRoot.AddGeometry(\"Cylinder\",\"NurbsSurface\") );\n\
oCollection.Add( ActiveSceneRoot.AddParticleCloud() );\n\
// Next filter the collection\n\
var oFilteredCollection = FindNurbsSurfaces( oCollection );\n\
// Expect that there are 2 (Cube1 and Cylinder)\n\
Application.LogMessage( \"There are \" + oFilteredCollection.Count + \" Nurbs objects\" ) ;\n\
// Function that takes an XSICollection and returns a new\n\
// XSICollection containing only the Nurbs Surfaces that\n\
// were in the input\n\
function FindNurbsSurfaces( in_Collection )\n\
{\n\
	var oReturnCollection = new ActiveXObject( \"XSI.Collection\" ) ;\n\
	for ( var i = 0 ; i &lt; in_Collection.Count ; i++ )\n\
	{\n\
		if ( in_Collection.Item(i).Type == \"surfmsh\" )\n\
		{\n\
			oReturnCollection.Add( in_Collection.Item(i) )\n\
		}\n\
	}\n\
	return oReturnCollection ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Application.ClassName.html\">Application.ClassName</a> <a href=\"#!/url=./si_om/DataRepository.GetIdentifier.html\">DataRepository.GetIdentifier</a> <a href=\"#!/url=./si_om/ProjectItem.Families.html\">ProjectItem.Families</a> <a href=\"#!/url=./si_om/FCurve.Type.html\">FCurve.Type</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";