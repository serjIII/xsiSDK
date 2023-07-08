var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>AnimationSourceItem</title>\n\
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
            <h1>AnimationSourceItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">AnimationSourceItem</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_AnimationSourceItem\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1AnimationSourceItem.html\">AnimationSourceItem</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">AnimationSourceItem</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> An <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> contains a collection of animation source items \n\
(<a href=\"#!/url=./si_om/AnimationSourceItemCollection.html\">AnimationSourceItemCollection</a>) which is accessible via the \n\
<a href=\"#!/url=./si_om/ActionSource.SourceItems.html\">ActionSource.SourceItems</a> property. <br /><br />\n\
The AnimationSourceItem provides access to the animation <a href=\"#!/url=./files/DataSource.htm\">DataSource</a> \n\
(for example, an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>) and its target (the parameter which the \n\
animation source drives). <br /><br />\n\
One way to create action animation is to create an empty ActionSource and then populate\n\
it afterwards using the <a href=\"#!/url=./si_om/ActionSource.AddSourceItem.html\">ActionSource.AddSourceItem</a> method. In that\n\
case, you can add an FCurve or a StaticSource as the animation source using the \n\
<a href=\"#!/url=./si_om/AnimationSourceItem.SetAsFCurve.html\">AnimationSourceItem.SetAsFCurve</a> and \n\
<a href=\"#!/url=./si_om/AnimationSourceItem.SetAsStatic.html\">AnimationSourceItem.SetAsStatic</a> methods.<br /><br />\n\
Note: Starting from version 4.0, the <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> method \n\
returns a value contained in the <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a> \n\
enumerator.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/AnimationSourceItem.SetAsFCurve.html\">SetAsFCurve</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/AnimationSourceItem.SetAsStatic.html\">SetAsStatic</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/AnimationSourceItem.Active.html\">Active</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/AnimationSourceItem.Source.html\">Source</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/AnimationSourceItem.Target.html\">Target</a>		</td>	</tr>\n\
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
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to access the fcurves inside a\n\
\' model\'s actionsource\n\
\'\n\
NewScene , false\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
\' These commands were cut and pasted from scripting history and modified to work in a script.\n\
\' The commands create a simple actionsource from some animation on the null\'s position\n\
set oNull = GetPrim( \"Null\" )\n\
strPosParams = oNull &amp; \".kine.local.posx,\" &amp; oNull &amp; \".kine.local.posy,\" &amp; oNull &amp; \".kine.local.posz\"\n\
Translate oNull, -8.153, 7.015, -0.702, siRelative, siView, siObj, siXYZ\n\
SaveKey strPosParams, 1.000\n\
Translate oNull, 8.350, -8.935, 0.894, siRelative, siView, siObj, siXYZ\n\
SaveKey strPosParams, 50.000\n\
Translate oNull, 9.413, 8.935, -0.894, siRelative, siView, siObj, siXYZ\n\
SaveKey strPosParams, 100.000\n\
StoreAction oRoot, strPosParams, 2, \"StoredFcvAction\", True, 1, 100\n\
\' Get the ActionSource from the model\n\
set oActionSource = oRoot.Sources(\"StoredFcvAction\")\n\
LogMessage oActionSource.Name\n\
for each oSourceItem in oActionSource.SourceItems\n\
	LogMessage vbTab &amp; \"target: \" &amp; oSourceItem.Target\n\
	set oSource = oSourceItem.Source\n\
	if TypeName(oSource) = \"FCurve\" then\n\
		strKeys=\"\"\n\
		for each oKey in oSource.Keys\n\
			if strKeys&lt;&gt;\"\"then\n\
				strKeys = strKeys &amp; \",\"\n\
			end if\n\
			strKeys = strKeys &amp; oKey.Time &amp; \",\" &amp; oKey.Value\n\
		next\n\
		LogMessage vbTab &amp; \"source: \" &amp; \"fcurve keys(\" &amp; strKeys &amp; \")\"\n\
	else\n\
		LogMessage vbTab &amp; \"source ignored\"\n\
	end if\n\
next\n\
\' Output of above script:\n\
\'INFO : StoredFcvAction\n\
\'INFO : 	target: null.kine.local.posx\n\
\'INFO : 	source: fcurve keys(1,-8.153,50,0.196999999999999,100,9.61)\n\
\'INFO : 	target: null.kine.local.posy\n\
\'INFO : 	source: fcurve keys(1,7.015,50,-1.92,100,7.015)\n\
\'INFO : 	target: null.kine.local.posz\n\
\'INFO : 	source: fcurve keys(1,-0.702,50,0.192,100,-0.702)</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to create an empty ActionSource using\n\
	Model.AddActionSource, populate it with 2 static values and 1 fcurve \n\
	using ActionSource.AddSourceItem, and then replace the fcurve source \n\
	with a static value for the 2nd and change the static value for the 3rd \n\
	using AnimationSourceItem.SetAsStatic.\n\
*/\n\
NewScene( null, false );\n\
// Get the scene root\n\
var root = Application.ActiveSceneRoot;\n\
// Create a null and get pointers to the pos parameters\n\
var n = root.AddNull( \"null\");\n\
var posx = n.posx; var rposx = GetRelativeName(posx);\n\
var posy = n.posy; var rposy = GetRelativeName(posy);\n\
var posz = n.posz; var rposz = GetRelativeName(posz);\n\
// Create an empty actionsource and then populate it with static values\n\
var src = root.AddActionSource( \"StaticActionSource\" );\n\
var fc = MakeAnFCurve( n, \"posy\" );\n\
src.AddSourceItem( rposx, 2.0 );	// static value \n\
src.AddSourceItem( rposy, fc );		// fcurve \n\
src.AddSourceItem( rposz );		// default static value = 0.0\n\
// Now change the value on the posz parameter using SetAsStatic and change\n\
// the posy parameter source to an fcurve\n\
var animsrcitems = src.SourceItems;\n\
for ( var i=0; i&lt;animsrcitems.Count; i++ ) {\n\
	var srcitem = animsrcitems(i);\n\
	// Get a pointer to the source item (it can be either a StaticSource or an FCurve)\n\
	var datasrc = srcitem.Source;\n\
	if ( datasrc.IsClassOf(siFCurveID) ) {\n\
		// Print the FCurve type\n\
		Application.LogMessage( \"AnimationSourceItem[\" + i + \"] (\" + srcitem.Target \n\
			+ \") has \" + datasrc.GetNumKeys() + \" keys\" );\n\
	}\n\
	if ( datasrc.IsClassOf(siStaticSourceID) ) {\n\
		// Print the current value\n\
		Application.LogMessage( \"AnimationSourceItem[\" + i + \"] (\" + srcitem.Target \n\
			+ \") has this static value: \" + datasrc.Value );\n\
	}\n\
	// AnimationSourceItem.Target returns the RelativeName\n\
	if ( srcitem.Target == rposy ) {\n\
		srcitem.SetAsStatic( 1.0 );\n\
		// Check for the new value (we know it\'s a StaticSource because we just set it)\n\
		var datasrc = srcitem.Source;		// refresh\n\
		Application.LogMessage( \"New static value = \" + datasrc.Value );\n\
	}\n\
	if ( srcitem.Target == rposz ) {\n\
		srcitem.SetAsStatic( 1.5 );\n\
		// Check for the new value (we know it\'s a StaticSource because we just set it)\n\
		var datasrc = srcitem.Source;		// refresh\n\
		Application.LogMessage( \"New static value = \" + datasrc.Value );\n\
	}\n\
}\n\
//INFO : AnimationSourceItem[0] (null.kine.local.posx) has this static value: 2\n\
//INFO : AnimationSourceItem[1] (null.kine.local.posy) has 4 keys\n\
//INFO : New static value = 1\n\
//INFO : AnimationSourceItem[2] (null.kine.local.posz) has this static value: 0\n\
//INFO : New static value = 1.5\n\
// Function to remove the name of the model from the FullName of the specified parameter.\n\
// This is necessary when setting up a source that will later be used to instantiate a\n\
// clip when the parameter lives under a model other than the Scene_Root.\n\
function GetRelativeName( in_param )\n\
{\n\
	var mdlname = in_param.Model.FullName;\n\
	if ( mdlname == \"Scene_Root\" ) {\n\
		return in_param.FullName;\n\
	} else {\n\
		var tmp = in_param.FullName;\n\
		var re = new RegExp( mdlname + \".\", \"i\" );\n\
		return tmp.replace( re, \"\" );\n\
	}\n\
}\n\
// Convenience function \n\
function MakeAnFCurve( in_obj, in_param )\n\
{\n\
	var p = in_obj.Kinematics.Local.Parameters( in_param );\n\
	var fc = p.AddFCurve( siStandardFCurve );\n\
	fc.AddKey( 1.0, 1.25 );\n\
	fc.AddKey( 25.0, 2.0 );\n\
	fc.AddKey( 40.0, 2.75 );\n\
	fc.AddKey( 85.0, 0.0 );\n\
	return fc;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Simple example showing how to access action source items from a collection\n\
	NewScene( false, false ) ;\n\
	var cube = ActiveSceneRoot.AddPrimitive(\"Cube\") ;\n\
	var actionsource = StoreAction( null, \"cube.kine.local.posx, cube.kine.local.posy, cube.kine.local.posz\", null, \"Test\", null, 1, 5, null, null, null, 1);  \n\
	var items = actionsource.SourceItems;\n\
	// Log all items\n\
	for ( var i = 0; i&lt; items.Count; i++ )\n\
	{\n\
		LogMessage( items(i).Name );\n\
	}\n\
	// Log specific items\n\
	LogMessage( \"cube.kine.local.posx ActionSourceItem active: \" + items(\"cube.kine.local.posx\").Active );\n\
	var filtereditems = items.Filter (\"\",\"\",\"cube.kine.local.posx\");\n\
	LogMessage( \"cube.kine.local.posx ActionSourceItem source value: \" + filtereditems(0).Source.Value );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> <a href=\"#!/url=./si_om/ActionSource.SourceItems.html\">ActionSource.SourceItems</a> <a href=\"#!/url=./si_om/ActionSource.AddSourceItem.html\">ActionSource.AddSourceItem</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";