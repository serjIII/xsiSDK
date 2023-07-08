var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>InspectObj</title>\n\
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
            <h1>InspectObj</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">InspectObj</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Loads objects into a property editor. This allows a user to interactively view \n\
and edit the parameters of an object. You can use the siModal mode for the Mode \n\
parameter to communicate with the user (like a dialog box), as demonstrated in \n\
the first example below.<br /><br />\n\
A property page can display several objects at the same time.  If the objects\n\
are of different types then they will appear one after another.  For example,\n\
when inspecting a Sphere, the X3DObject, Primitive and Operator are shown in \n\
this fashion.  Alternatively, if the objects are of the same type then they are \n\
shown in \"multi\" mode. This mode is useful for changing a parameter on many \n\
objects at the same time.  The examples below show both cases. <br /><br />\n\
Normally when you inspect an object its nested objects will also be inspected within the same\n\
frame.  You can limit which nested objects are inspected by using a list of keywords. For\n\
example, you can just display the Animation property set by specifying siAnimationKeyword \n\
in the Keywords parameter.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = InspectObj( [InputObjs], [Keywords], [Title], [Mode], [Throw] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns true if the command was canceled and the Throw argument is set to false. If the command was canceled and the Throw argument was not specified (or is set to true) the command throws an error. Otherwise, it returns false.</p></div>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to inspect. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection.  Note: if the selection contains more than one object then only the first appears.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Keywords		</td>\n\
		<td><a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
		<td>\n\
Specify which property set appears for the specified object (eg., Animation, Hair, IK, Deform, etc.)			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\" (clear current marking)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Title		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Title of the property editor dialog. Note: the title you use here only appears on the property editor if you use siModal for the Mode parameter.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Generated from names of input objects.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./si_om/siInspectMode.html\">siInspectMode</a>		</td>\n\
		<td>\n\
 Specifies whether the dialog should be locked, recycling, focused, or modal. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siRecycle			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Throw		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
True to throw an error if the command is cancelled. <br /><br />Note: If this argument is set to false and the user cancels the command, the command returns true instead of throwing an error.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' In modal mode, a property editor has Ok and Cancel buttons.\n\
\' Here\'s how to open a modal property editor\n\
\'\n\
NewScene , false\n\
On Error Resume Next\n\
InspectObj \"Light\",,\"Inspecting Light\", siModal\n\
\' Check if user clicked Ok\n\
if Err.Number = 0 then\n\
	LogMessage \"User has pressed OK in the modal property editor\"\n\
else\n\
	LogMessage \"User has pressed CANCEL in the modal property editor\"\n\
end if\n\
\' Open a property editor and lock it\n\
InspectObj \"Camera\",,, siLock\n\
LogMessage \"User has opened a property editor and has locked it\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how you can inspect multiple objects on the same Property Page\n\
\'\n\
NewScene , false\n\
SelectObj \"Scene_Root\"\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
\'Add a custom property set and a bend operator\n\
SIAddCustomParameter \"sphere\", \"Param\", siDouble, 0, 0, 1, , 5, 0, 1\n\
ApplyOp \"Bend\", \"sphere\", 3, siPersistentOperation\n\
set myPPGList = CreateObject(\"XSI.Collection\")\n\
myPPGList.Add \"sphere.CustomPSet\"\n\
myPPGList.Add \"sphere.polymsh.bendop\"\n\
\'The property page will show both the custom property set and \n\
\'the bend operation.\n\
InspectObj myPPGList</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	The following uses InspectObj to inspect several properties \n\
\'	in a multi-edit fashion\n\
\'\n\
NewScene , false\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
SelectObj \"cylinder.kine.global,sphere.kine.global\"\n\
InspectObj \n\
LogMessage \"The global kinestate of both the sphere and the cylinder\"\n\
LogMessage \"are inspected together in a bulk-edit fashion\"</pre></td></tr>\n\
</table>\n\
</div><h4>4. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Set up a sphere\n\
NewScene ,False\n\
set oSphere = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
\' Open a general property editor \n\
InspectObj , siGeneralKeyword\n\
\' Set up a deform on the sphere \n\
ApplyOp \"Bulge\", oSphere, 3, siPersistentOperation\n\
\' Open the Deform property editor for the sphere\n\
InspectObj , siDeformKeyword\n\
\' Add some animation\n\
SaveKey oSphere.active\n\
SetValue \"PlayControl.Key\", 65\n\
SetValue \"PlayControl.Current\", 65\n\
Translate , 3.9582518712148, 3.40954109797705, -0.340954109797705, siRelative, siView, siObj, siXYZ\n\
SaveKey oSphere.active \n\
\' Open the Animation property editor for the sphere\n\
InspectObj , siAnimationKeyword</pre></td></tr>\n\
</table>\n\
</div><h4>5. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	Another example demonstrating inspecting objects in multi-edit mode.\n\
\'\n\
NewScene , false\n\
SelectObj \"Scene_Root\"\n\
set oSphere1 = CreatePrim( \"Sphere\", \"MeshSurface\", \"FirstSphere\")\n\
set oSphere2 = CreatePrim( \"Sphere\", \"MeshSurface\", \"SecondSphere\")\n\
set myPPGList = CreateObject(\"XSI.Collection\")\n\
myPPGList.Add oSphere1.Primitives(1)\n\
myPPGList.Add oSphere2.Primitives(1)\n\
\'The property page will show just a single Radius control\n\
\'that will control both spheres\n\
InspectObj myPPGList, \"Primitive\"</pre></td></tr>\n\
</table>\n\
</div><h4>6. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to create a temporary instance of the Self-Installed \n\
	Custom Property called \"CustomColor\".\n\
*/\n\
var oColor = XSIFactory.CreateObject( \"CustomColor\" )\n\
bCancelled = InspectObj( oColor,null,\"Pick your favorite color\",siModal,false ) ;\n\
if ( !bCancelled )\n\
{\n\
	LogMessage( \"You picked \" + oColor.Color_R.Value + \",\" + oColor.Color_G.Value + \",\" + oColor.Color_B.Value ) ;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>7. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates the use of the Throw argument.\n\
	When you run this script, make sure you close the dialog using \n\
	the X (close) button on the top right or the Cancel button in\n\
	the main body of the dialog.\n\
*/\n\
// Set up a quick dialog in a property page\n\
NewScene( null, false );\n\
var pset = SetUpPSet();\n\
// Canceling here returns \'true\'\n\
var rtn1 = InspectObj( pset, \"\", \"Throw = FALSE\", siModal, false );\n\
LogMessage( \"Value returned: \" + rtn1 );\n\
// Canceling here throws an error.\n\
try\n\
{\n\
	var rtn2 = InspectObj( pset, \"\", \"Throw = TRUE\", siModal );\n\
	// This line is never executed if the user presses cancel\n\
	LogMessage( \"Value returned: \" + rtn2 );\n\
}\n\
catch(e)\n\
{\n\
	LogMessage( \"User cancelled\" );\n\
}\n\
// This is a convenience function that sets up the property page apart\n\
// from the main demo\n\
function SetUpPSet( )\n\
{\n\
	// Create the underlying pset\n\
	var prop = XSIFactory.CreateObject(\"CustomProperty\");\n\
	prop.Name = \"Jetsam\" ;\n\
	prop.AddParameter3( \"SelectOne\", siFloat, 0 );\n\
	// Set up its appearance\n\
	var pout = prop.PPGLayout;\n\
	var avals = new Array(\n\
		\"One\",		1,\n\
		\"Two\",		2,\n\
		\"Three\",	3,\n\
		\"Four\",		4,\n\
		\"Five\",		5\n\
	);\n\
	pout.AddEnumControl( \"SelectOne\", avals, \"\", siControlCombo );\n\
	// Return the property set\n\
	return prop;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPG.html\">PPG</a> <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";