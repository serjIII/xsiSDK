var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIObject.Parent</title>\n\
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
            <h1>SIObject.Parent</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>.Parent</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the parent (any object that derives from <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>) of the object as follows:<br /><br />\n\
If you call the Parent property on the scene root (<a href=\"#!/url=./si_om/Model.html\">Model</a>), it returns itself.<br /><br />\n\
If you call the Parent property on any other <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>, it returns the parent \n\
of the X3DObject.<br /><br />\n\
If you call the Parent property on a <a href=\"#!/url=./si_om/Property.html\">Property</a>, it returns the X3DObject that owns \n\
that Property.<br /><br />\n\
If you call the Parent property on a <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>, it returns the <a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a> \n\
directly containing that Parameter.  Note that often the <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">ProjectItem.Parameters</a> collection \n\
includes parameters that are actually contained inside children objects.  For example an X3DObject may appear \n\
to have parameters that actually come from the <a href=\"#!/url=./si_om/Kinematics.html\">Kinematics</a> and other nested properties.  For \n\
this reason the Parent property is very useful for determining where these parameters come from.  This concept \n\
is demonstrated in one of the examples below.<br /><br />\n\
If you call the Parent property on a geometry component (e.g. <a href=\"#!/url=./si_om/Point.html\">Point</a>,  <a href=\"#!/url=./si_om/Segment.html\">Segment</a>, \n\
or <a href=\"#!/url=./si_om/Facet.html\">Facet</a>) it returns the parent <a href=\"#!/url=./si_om/Geometry.html\">Geometry</a>.<br /><br />\n\
If you call the Parent property on a <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a>, it returns the parent geometry because a \n\
SubComponent object contains references to geometry components (to get the actual X3DObject parenting the \n\
subcomponent, use <a href=\"#!/url=./si_om/SubComponent.Parent3DObject.html\">SubComponent.Parent3DObject</a>).<br /><br />\n\
If you call the Parent property on a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>, it returns the parent <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>.<br /><br />\n\
If you call the Parent property on an <a href=\"#!/url=./si_om/Operator.html\">Operator</a>, it returns the target of the operator\'s first <a href=\"#!/url=./si_om/OutputPort.html\">OutputPort</a>.<br /><br />\n\
If you call the Parent property on an <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> under a model, it returns that \n\
<a href=\"#!/url=./si_om/Model.html\">Model</a>. If you call the Parent property on a <a href=\"#!/url=./si_om/SimulationEnvironment.html\">SimulationEnvironment</a> cache, \n\
it returns the <a href=\"#!/url=./si_om/SimulationEnvironment.html\">SimulationEnvironment</a>. This changed as of v5.0: in previous releases it \n\
was returning the <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> object.<br /><br />\n\
If you call the Parent property on an object that has no parent, like the <a href=\"#!/url=./si_om/Application.html\">Application</a> object, \n\
it returns the object as parent. <br /><br />\n\
Some simple objects like <a href=\"#!/url=./si_om/Command.html\">Command</a> return the <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a> as parent.<br /><br />\n\
Tip: Some objects may actually have multiple parents, such as a shared <a href=\"#!/url=./si_om/Material.html\">Material</a>, in which \n\
case the same object appears at multiple places in the scene explorer and in the graph. In this case all the\n\
\"parents\" can be reached via the <a href=\"#!/url=./si_om/ProjectItem.Owners.html\">ProjectItem.Owners</a> property.<br /><br />\n\
Note: These is currently no equivalent property for finding all nested \"children\" of an SIObject. Instead these \n\
children are available in different collections depending on their type (for example, <a href=\"#!/url=./si_om/X3DObject.Children.html\">X3DObject.Children</a>, \n\
<a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">ProjectItem.Parameters</a>, <a href=\"#!/url=./si_om/ParticleCloudPrimitive.Particles.html\">ParticleCloudPrimitive.Particles</a>, and \n\
<a href=\"#!/url=./si_om/X3DObject.Primitives.html\">X3DObject.Primitives</a>). The <a href=\"#!/url=./si_cmds/EnumElements.html\">EnumElements</a> command is one way of finding all \n\
children without regard to the type.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = SIObject.Parent;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example displays the name of the object\'s parent\n\
\'\n\
set oObj = ActiveProject.ActiveScene.Root.AddGeometry(\"Sphere\", \"NurbsSurface\")\n\
Application.LogMessage oObj.Parent.Name</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oObject = ActiveSceneroot.AddGeometry(\"Cube\",\"MeshSurface\",\"MyCube\")\n\
set oCluster = oObject.ActivePrimitive.Geometry.AddCluster(siVertexCluster,\"MyCluster\",Array(3,4,5))\n\
set oSubComponent = oCluster.CreateSubComponent\n\
set oClusterGeometry = oSubComponent.Parent\n\
set oObjectGeometry = oObject.Parent\n\
Application.LogMessage \"The parent of \" &amp; oSubComponent &amp; \" is \" &amp; oClusterGeometry\n\
Application.LogMessage \"The parent of the \" &amp; oObject &amp; \" is \" &amp; oObjectGeometry\n\
\' OUTPUT OF ABOVE SCRIPT IS:\n\
\'INFO : \"The parent of MyCube.pnt[3-5] is polymsh\"\n\
\'INFO : \"The parent of the MyCube is Scene_Root\"</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	This Python example demonstrates how the Parent property can \n\
#	be used to travel from a child SIObject to its parent\n\
#\n\
# Expected results: each line in the scripted history should print \"True\"\n\
# Prepare a simple scene and collect some object model\n\
# references to objects inside it\n\
Application.NewScene( \"\", 0 )\n\
oSceneRoot = Application.ActiveSceneRoot\n\
oNull = oSceneRoot.AddNull()\n\
oNullLocalKine = oNull.Kinematics.Local\n\
oNestedCone = oNull.AddGeometry( \"Cone\",\"MeshSurface\",\"NestedCone\")\n\
oNestedConeGeom = oNestedCone.GetActivePrimitive3().Geometry\n\
# Parent of Scene Root is itself\n\
Application.LogMessage( oSceneRoot.Parent.IsEqualTo( oSceneRoot ) ) \n\
# Parent of Null is the Scene Root\n\
Application.LogMessage( oNull.Parent.IsEqualTo( oSceneRoot ) )\n\
# Parent of nested cone is the Null\n\
Application.LogMessage( oNestedCone.Parent.IsEqualTo( oNull ) )\n\
# Parent of a property is the direct owner\n\
Application.LogMessage( oNull.Kinematics.Parent.IsEqualTo( oNull ) )\n\
# Parent of a parameter\n\
Application.LogMessage( oNullLocalKine.Parameters(\"posx\").Parent.FullName \n\
						== oNullLocalKine.FullName )\n\
# This same parameter also appears directly under the Null,\n\
# but the Parent property tells the truth about where it comes from\n\
Application.LogMessage( oNull.Parameters(\"posx\").Parent.FullName \n\
						== oNullLocalKine.FullName )\n\
# Use Parent to travel all the way from a Point to its X3DObject\n\
Application.LogMessage( oNestedConeGeom.Points(0).Parent.Parent.Parent.IsEqualTo( oNestedCone ) )\n\
# Command object just returns the XSIApplication as its parent\n\
Application.LogMessage( Application.Commands(0).Parent.IsEqualTo( Application ) )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SubComponent.Parent3DObject.html\">SubComponent.Parent3DObject</a> <a href=\"#!/url=./si_cmds/EnumElements.html\">EnumElements</a> <a href=\"#!/url=./si_om/ProjectItem.Owners.html\">ProjectItem.Owners</a> <a href=\"#!/url=./si_om/X3DObject.Children.html\">X3DObject.Children</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";