var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateUserMotion</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>CreateUserMotion</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateUserMotion</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v10.5 (2012)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a user motion property. User motions are used to control motion vectors on vertices\n\
of an object\'s geometry. User motions can only be created on vertex clusters.\n\
A user motion property stores three floating point values for each vertex of the cluster.\n\
When a user motion property is applied to an object, the motion blur is no longer computed and instead\n\
uses the motion data from this property.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CreateUserMotion( [InputObjs], [PropertyName], PropPresetObj );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p> Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of the newly created properties. </p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects or complete point clusters 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropertyName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the user motion property 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"UserMotion\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropPresetObj		</td>\n\
		<td>Preset object		</td>\n\
		<td>\n\
 User motion property preset 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"User Motion Property\" preset			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This JScript example illustrates how to set the user motion vectors on\n\
	the UserMotion Cluster Property with ICE. The motion vectors of a static\n\
	cylinder are set by the motion of an animated cylinder.\n\
*/\n\
// Create the cylinders\n\
NewScene(null, false);\n\
CreatePrim(\"Cylinder\", \"MeshSurface\");\n\
Duplicate(\"cylinder\");\n\
// Animate the cylinder\n\
Translate(null, -8, 5, 0);\n\
SaveKeyOnKeyable(\"cylinder1\", 1);\n\
Translate(null, 16, 0, 0);\n\
SaveKeyOnKeyable(\"cylinder1\", 25);\n\
Translate(null, 0, -10, 0);\n\
SaveKeyOnKeyable(\"cylinder1\", 50);\n\
Translate(null, -16, 0, 0);\n\
SaveKeyOnKeyable(\"cylinder1\", 75);\n\
Translate(null, 0, 10, 0);\n\
SaveKeyOnKeyable(\"cylinder1\", 100);\n\
SelectObj(\"cylinder\", null, true);\n\
// Add a User Motion Cluster Prop on the static cylinder and set its ICE Tree\n\
CreateUserMotion();\n\
var oICETreeColl = CreateSimulatedICETree(\"cylinder\", siNode, null);\n\
var oICETree = oICETreeColl.Item(0);\n\
AddICENode(\"GetDataAtPreviousFrameNode\", oICETree);\n\
SetValue(oICETree + \".GetDataAtPreviousFrameNode.reference\", \"cylinder1.PointPosition\");\n\
AddICENode(\"GetDataAtPreviousFrameNode\", oICETree);\n\
SetValue(oICETree + \".GetDataAtPreviousFrameNode[1].reference\", \"cylinder1.kine.local\");\n\
AddICENode(\"MultiplyVectorByMatrixNode\", oICETree);\n\
ConnectICENodes(oICETree + \".MultiplyVectorByMatrixNode.vector\", oICETree + \".GetDataAtPreviousFrameNode.value\");\n\
ConnectICENodes(oICETree + \".MultiplyVectorByMatrixNode.matrix\", oICETree + \".GetDataAtPreviousFrameNode[1].value\");\n\
AddICENode(\"GetDataNode\", oICETree);\n\
SetValue(oICETree + \".SceneReferenceNode.reference\", \"cylinder1.PointPosition\", null);\n\
AddICENode(\"GetDataNode\", oICETree);\n\
SetValue(oICETree + \".SceneReferenceNode[1].reference\", \"cylinder1.kine.local\", null);\n\
AddICENode(\"MultiplyVectorByMatrixNode\", oICETree);\n\
ConnectICENodes(oICETree + \".MultiplyVectorByMatrixNode[1].vector\", oICETree + \".SceneReferenceNode.value\");\n\
ConnectICENodes(oICETree + \".MultiplyVectorByMatrixNode[1].matrix\", oICETree + \".SceneReferenceNode[1].value\");\n\
AddICENode(\"SubtractNode\", oICETree);\n\
ConnectICENodes(oICETree + \".SubtractNode.first\", oICETree + \".MultiplyVectorByMatrixNode.result\");\n\
ConnectICENodes(oICETree + \".SubtractNode.second\", oICETree + \".MultiplyVectorByMatrixNode[1].result\");\n\
AddICENode(\"DivideByScalarNode\", oICETree);\n\
ConnectICENodes(oICETree + \".DivideByScalarNode.value\", oICETree + \".SubtractNode.result\");\n\
SetValue(oICETree + \".DivideByScalarNode.divideby\", 2, null);\n\
AddICECompoundNode(\"Set Data\", oICETree);\n\
SetValue(oICETree + \".Set_Data.Reference\", \"cylinder.cls.UserMotionCls.UserMotion.Motions\", null);\n\
AddICENode(\"SwitchContextNode\", oICETree);\n\
ConnectICENodes(oICETree + \".SwitchContextNode.value\", oICETree + \".DivideByScalarNode.result\");\n\
ConnectICENodes(oICETree + \".Set_Data.Value\", oICETree + \".SwitchContextNode.result\");\n\
ConnectICENodes(oICETree + \".port1\", oICETree + \".Set_Data.Execute\");\n\
// Draw a render region with motion blur on, and playback the scene\n\
RenderRegionCreate(siViewportB, 0, 1, 0, 1);\n\
SetValue(\"Views.ViewB.RenderRegion.MotionBlur\", true, null);\n\
PlayForwardsFromStart();</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddProp.html\">AddProp</a> <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";