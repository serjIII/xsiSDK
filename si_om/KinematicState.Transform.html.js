var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>KinematicState.Transform</title>\n\
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
            <h1>KinematicState.Transform</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a>.Transform <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the transformation (<a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>) of an object. \n\
<br /><br />\n\
Currently you cannot set the tranform at a different time than the current time.  To cause the\n\
transformation to change over time you should animate the parameters of the <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a>\n\
object.\n\
<br /><br />\n\
Note: This property is not Python-compliant because Python does not support input parameters on \n\
properties. Use <a href=\"#!/url=./si_om/KinematicState.GetTransform2.html\">KinematicState.GetTransform2</a> and <a href=\"#!/url=./si_om/KinematicState.PutTransform2.html\">KinematicState.PutTransform2</a>\n\
instead.\n\
<br /><br />\n\
Warning: The returned SITransformation object contains a copy of the transformation values,\n\
so modifying its state will have no effect on the original object.  To change the object\'s\n\
kinematic state you must set this property with the modified SITransformation object, as shown\n\
in the example below.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object KinematicState.get_Transform( Object inFrame );\n\
// set accessor\n\
KinematicState.set_Transform( Object inFrame, Object out_ppRetVal );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Frame		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
Frame at which to get the transform.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	This example shows how to modify the state of a transform \n\
	when you are working on a copy of the object.  \n\
*/\n\
NewScene (null, false);\n\
var oRoot = Application.ActiveSceneRoot;\n\
var oCube = oRoot.AddGeometry(\"Cube\", \"MeshSurface\", \"Cube\");\n\
// Retrieve a copy of the transform object\n\
var oTrans = oCube.Kinematics.Local.Transform;\n\
var oMat4 = XSIMath.CreateMatrix4();\n\
oMat4.Set( 1.0, 1.0, 0.0, 10.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0 );\n\
// Warning: you cannot change the object\'s transform like this: \n\
// oCube.Kinematics.Local.Transform.SetMatrix4(oMat4);\n\
// because this will only modify a copy of the transform object\n\
// not the real state of oCube.Kinematics.Local.Transform	\n\
oTrans.SetMatrix4(oMat4);	\n\
// Replace the transform with the modified copy \n\
oCube.Kinematics.Local.Transform = oTrans;</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oCube = Application.ActiveProject.ActiveScene.Root.AddGeometry(\"Cube\",\"MeshSurface\")\n\
oCube.Kinematics.Global.Parameters(\"posy\").Value = 4.0\n\
set oLocalTrans = oCube.Kinematics.Local.Transform\n\
set oVec3 = XSIMath.CreateVector3\n\
oLocalTrans.GetTranslation oVec3\n\
oVec3.y = oVec3.y - 2.0\n\
oLocalTrans.SetTranslation oVec3\n\
\' Change the object\'s translation by setting \n\
\' the modified SITransformation back\n\
oCube.Kinematics.Local.Transform = oLocalTrans</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/KinematicState.GetTransform2.html\">KinematicState.GetTransform2</a> <a href=\"#!/url=./si_om/KinematicState.PutTransform2.html\">KinematicState.PutTransform2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";