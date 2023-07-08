var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ChangeEnvironmentDynamicsOperator</title>\n\
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
            <h1>ChangeEnvironmentDynamicsOperator</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ChangeEnvironmentDynamicsOperator</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Changes the rigid body dynamics engine (from physX to ODE or vice-versa) for the specified environment.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ChangeEnvironmentDynamicsOperator( [InputEnvironment], [DynamicsEngine] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputEnvironment		</td>\n\
		<td><a href=\"#!/url=./si_om/SimulationEnvironment.html\">SimulationEnvironment</a>		</td>\n\
		<td>\n\
Environment for which we want to change the rigid body dynamics engine			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current active environment			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DynamicsEngine		</td>\n\
		<td><a href=\"#!/url=./si_om/siRBDEngine.html\">siRBDEngine</a>		</td>\n\
		<td>\n\
The dynamics engine to which you want to switch the specified environment			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siPhysXEngine			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to create a simple RigidBody simulation\n\
	and then switch the dynamics engine\n\
*/\n\
var oCone = ActiveSceneRoot.AddGeometry(\"cone\",\"MeshSurface\");\n\
var oModel = ActiveSceneRoot.AddModel();\n\
oModel.Name = \"Model\";\n\
var oGrid = oModel.AddGeometry(\"grid\",\"MeshSurface\");\n\
// Move the cone\n\
oCone.posy.value = 6.0;\n\
// Modify the grid\n\
oGrid.ulength.value = 24;\n\
oGrid.vlength.value = 24;\n\
oGrid.subdivu.value = 24;\n\
oGrid.subdivv.value = 24;\n\
// The following line creates the SimulationEnvironment object.\n\
CreatePassiveRigidBody( oGrid );\n\
CreateActiveRigidBody( oCone );\n\
CreateForce( \"Gravity\" );\n\
var oEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment;\n\
// Switch the rigid body dynamics engine to PhyX by NVIDIA \n\
ChangeEnvironmentDynamicsOperator(  oEnvironment, siPhysXEngine);\n\
// Results of running this script:\n\
//  * If the currently used engine is the same as the one specified in\n\
//    the command, there is no output.\n\
//  * Otherwise the following output will be echoed (as appropriate):\n\
//    //INFO : Switched to physX\n\
//    or\n\
//    //INFO : Switched to ODE\n\
// Simulate\n\
for(i =0 ; i &lt; 100 ; i++)\n\
{\n\
	NextFrame();\n\
	Refresh();\n\
}\n\
// Switch the rigid body dynamics engine to ODE\n\
ChangeEnvironmentDynamicsOperator( oEnvironment, siOpenDynamicsEngine);\n\
// Simulate again\n\
FirstFrame();\n\
Refresh();\n\
for(i =0 ; i &lt; 100 ; i++)\n\
{\n\
	NextFrame();\n\
	Refresh();\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CreateActiveRigidBody.html\">CreateActiveRigidBody</a> <a href=\"#!/url=./si_cmds/CreatePassiveRigidBody.html\">CreatePassiveRigidBody</a> <a href=\"#!/url=./si_cmds/RemoveRigidBody.html\">RemoveRigidBody</a> <a href=\"#!/url=./si_cmds/AttachRigidBodies.html\">AttachRigidBodies</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";