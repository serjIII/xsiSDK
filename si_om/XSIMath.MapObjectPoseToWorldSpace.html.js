var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIMath.MapObjectPoseToWorldSpace</title>\n\
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
            <h1>XSIMath.MapObjectPoseToWorldSpace</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a>.MapObjectPoseToWorldSpace</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Converts a Pose described in a given ObjectSpace to WorldSpace.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SITransformation XSIMath.MapObjectPoseToWorldSpace( SITransformation in_pObjectSpace, SITransformation in_pPose );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIMath.MapObjectPoseToWorldSpace( ObjectSpace, Pose );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a> (pose)</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ObjectSpace		</td>\n\
		<td><a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>		</td>\n\
		<td>\n\
ObjectSpace in which the pose is described.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Pose		</td>\n\
		<td><a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>		</td>\n\
		<td>\n\
 Pose to convert.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to map a cube\'s position relative to its parent \n\
	to global coordinates\n\
*/\n\
NewScene (null, false)\n\
var oRoot = Application.ActiveProject.ActiveScene.Root\n\
var oCubeParent = oRoot.AddGeometry(\"Cube\",\"MeshSurface\", \"CubeParent\")\n\
oCubeParent.Kinematics.Global.Parameters(\"posx\").value = 2.0\n\
oCubeParent.Kinematics.Global.Parameters(\"posy\").value = 4.0\n\
var oCubeChild =  oCubeParent.AddGeometry(\"Cube\",\"MeshSurface\", \"CubeChild\" )\n\
oCubeChild.Kinematics.Global.Parameters(\"posz\").value = 3.0\n\
oCubeChild.Kinematics.Global.Parameters(\"rotx\").value = 45.0\n\
var oTransParent = oCubeParent.Kinematics.Global.Transform\n\
// This is the translation relative to the parent cube\n\
var oTrans = oCubeChild.Kinematics.Local.Transform\n\
var oVec3 = XSIMath.CreateVector3()\n\
oTrans.GetTranslation (oVec3)\n\
Application.LogMessage (\"The translation of the cube relative to its parent: x \" +\n\
				 oVec3.x + \" y \" + oVec3.y + \" z \" + oVec3.z)\n\
// oTrans is relative to the parent cube, but can be mapped back to\n\
// global space like this:\n\
var oWorldTrans = XSIMath.MapObjectPoseToWorldSpace(oTransParent, oTrans)\n\
oWorldTrans.GetTranslation (oVec3)\n\
Application.LogMessage (\"The translation of the cube relative to the origin of the universe: x \"\n\
				+ oVec3.x + \" y \" + oVec3.y + \" z \" + oVec3.z)\n\
// Note: The global KinematicState already expresses this information\n\
var oTransGlobal = oCubeChild.Kinematics.Global.Transform\n\
oTransGlobal.GetTranslation (oVec3)\n\
Application.LogMessage (\"The translation of the cube relative to the origin of the universe: x \" +\n\
				 oVec3.x + \" y \" + oVec3.y + \" z \" + oVec3.z)\n\
// Expected output:\n\
//INFO : The translation of the cube relative to its parent: x -2 y -4 z 3\n\
//INFO : The translation of the cube relative to the origin of the universe: x 0 y 0 z 3\n\
//INFO : The translation of the cube relative to the origin of the universe: x 0 y 0 z 3</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to map a cube\'s position relative to its parent \n\
\'	to global coordinates\n\
\'\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oCubeParent = oRoot.AddGeometry(\"Cube\",\"MeshSurface\", \"CubeParent\")\n\
oCubeParent.Kinematics.Global.Parameters(\"posx\").value = 2.0\n\
oCubeParent.Kinematics.Global.Parameters(\"posy\").value = 4.0\n\
set oCubeChild =  oCubeParent.AddGeometry(\"Cube\",\"MeshSurface\", \"CubeChild\" )\n\
oCubeChild.Kinematics.Global.Parameters(\"posz\").value = 3.0\n\
oCubeChild.Kinematics.Global.Parameters(\"rotx\").value = 45.0\n\
set oTransParent = oCubeParent.Kinematics.Global.Transform\n\
\' This is the translation relative to the parent cube\n\
set oTrans = oCubeChild.Kinematics.Local.Transform\n\
set oVec3 = XSIMath.CreateVector3\n\
oTrans.GetTranslation oVec3\n\
Application.LogMessage \"The translation of the cube relative to its parent: x \" &amp;_\n\
				 oVec3.x &amp; \" y \" &amp; oVec3.y &amp; \" z \" &amp; oVec3.z\n\
\' oTrans is relative to the parent cube, but can be mapped back to\n\
\' global space like this:\n\
set oWorldTrans = XSIMath.MapObjectPoseToWorldSpace(oTransParent, oTrans)\n\
oWorldTrans.GetTranslation oVec3\n\
Application.LogMessage \"The translation of the cube relative to the origin of the universe: x \" &amp;_\n\
				 oVec3.x &amp; \" y \" &amp; oVec3.y &amp; \" z \" &amp; oVec3.z\n\
\'\n\
\' Note: The global KinematicState already expresses this information\n\
\'\n\
set oTransGlobal = oCubeChild.Kinematics.Global.Transform\n\
oTransGlobal.GetTranslation oVec3\n\
Application.LogMessage \"The translation of the cube relative to the origin of the universe: x \" &amp;_\n\
				 oVec3.x &amp; \" y \" &amp; oVec3.y &amp; \" z \" &amp; oVec3.z\n\
\' Expected output:\n\
\'INFO : The translation of the cube relative to its parent: x -2 y -4 z 3\n\
\'INFO : The translation of the cube relative to the origin of the universe: x 0 y 0 z 3\n\
\'INFO : The translation of the cube relative to the origin of the universe: x 0 y 0 z 3</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";