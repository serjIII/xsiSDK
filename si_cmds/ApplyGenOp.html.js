var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ApplyGenOp</title>\n\
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
            <h1>ApplyGenOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ApplyGenOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Applies a generator operator and returns the newly created operator(s). (A generator operator is an operator \n\
which creates new geometry, such as the Loft, \n\
CrvStitch, and \n\
SrfFillet operators.)  The newly generated \n\
objects are also available via one of the following methods:<br /><br />\n\
(1) Use the output argument OutputObjs (only available for VBScript because most languages cannot cope with\n\
both an output argument and a return value--see the note below).<br /><br />\n\
(2) Use <a href=\"#!/url=./si_om/Operator.OutputPorts.html\">Operator.OutputPorts</a> first on the output operator and then use <a href=\"#!/url=./si_om/Port.Target2.html\">Port.Target2</a> \n\
on an item of the returned collection (as demonstrated in the JScript example below.<br /><br />\n\
Warning: If you use the OutputPorts/Target2 method of getting the newly generated objects, remember that you can \n\
only access the output ports on an operator if it was applied in persistent mode (ie., don\'t freeze it until \n\
you get a pointer to the target object).<br /><br />\n\
You can also use the generic <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> command to apply a generator operator; however, if you want to hide or\n\
delete the input objects (original geometry) or you want the new geometry to be a polymsh, you must use this command.<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference. Normally \n\
you can get the output arguments via either <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method (C#) or the \n\
<a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> (scripting languages), but this command\n\
already returns a value.<br /><br />\n\
The only available workaround in this case is to create a VBScript custom command which returns both the output\n\
arguments and the return value in one array. For details, see \n\
<a href=\"#!/url=./files/RtnValProblem.htm\">What Happens when the Function Already Returns a Value?</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ApplyGenOp( PresetObj, [Target], [ConnectionSet], [ConnectType], [ImmediateMode], [GenOpInputsDisposal], [OutputObjs] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> that contains the newly created operators.<br /><br />\n\
Note: If you apply the operator in ImmediateMode (which immediately freezes it), you still get a collection of \n\
the operators applied, but they are invalid (not connected to anything in the scene).\n\
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
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (see <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
Generator and Converter Operators		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Geometry type of the output surface for the following surface-from-curves types of operators:<br /><br />\n\
		\"Birail\", \"CrvNet\", \"Extrusion\", \"ExtrusionAlongAxis\", \"ExtrusionTwoProfiles\", \"FourSided\", \"Loft\",\n\
		\"Revolution\", and \"RevolutionAroundAxis\"\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
NurbsSurface			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">MeshSurface					</td>\n\
					<td>Mesh surface geometry					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">NurbsSurface					</td>\n\
					<td>Nurbs surface geometry					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConnectionSet		</td>\n\
		<td><a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a>		</td>\n\
		<td>\n\
\n\
		Specifies the objects connected to an operator.  \n\
		required for the specific operator you are using.<br /><br />\n\
		Note: Because this is an in/out parameter, any string (variable or value) you pass into this parameter is \n\
		automatically converted to a ConnectionSet.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\n\
		Currently selected objects are used as the main group.<br /><br />\n\
		Warning: An error occurs if the connection set is invalid. Please verify the connection set required for the \n\
		operator you are using to avoid breaking your scripts.\n\
				</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConnectType		</td>\n\
		<td><a href=\"#!/url=./si_om/siBranchFlag.html\">siBranchFlag</a>		</td>\n\
		<td>\n\
 Specifies the type of connection (node or branch). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siUnspecified			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ImmediateMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siOperationMode.html\">siOperationMode</a>		</td>\n\
		<td>\n\
Specifies whether or not the operator should be immediately frozen.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siPersistentOperation			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GenOpInputsDisposal		</td>\n\
		<td><a href=\"#!/url=./si_om/siGeneratorInputsDisposalMode.html\">siGeneratorInputsDisposalMode</a>		</td>\n\
		<td>\n\
Specifies what to do with the input objects after the operation is performed.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siKeepGenOpInputs			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siKeepGenOpInputs					</td>\n\
					<td>The inputs will be kept					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siHideGenOpInputs					</td>\n\
					<td>The inputs will be hidden					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siDeleteGenOpInputs					</td>\n\
					<td>The inputs will be deleted					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OutputObjs		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
 Returns a collection of <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> object(s) created by the generator operator.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to get the newly generated object after\n\
	applying one of the generator ops with the ApplyGenOp command. \n\
	It also demonstrates how to extract the newly applied operator\n\
	object from the special ISIVTCollection which is a workaround for \n\
	languages like JScript that don\'t support output arguments. \n\
*/\n\
NewScene( null, false );\n\
// Use a Nurbs disc to apply the Fit Surface operator \n\
var original_3dobject = CreatePrim( \"Disc\", \"NurbsSurface\" );\n\
original_3dobject.innerradius.Value = 0.5;\n\
Application.LogMessage( original_3dobject.Name + \" is a \" + ClassName(original_3dobject) );\n\
// Get the ISIVTCollection back from this command. In this example, it contains \n\
// only one object (our operator), so we can just use this shortcut\n\
// NB: You cannot use siImmediateOperation for the ImmediateMode parameter if you\n\
//     want to get at the new object, because a frozen operator is invalid.\n\
var new_srffit_op = ApplyGenOp( \"SrfFit\", \"NurbsSurface\", original_3dobject, \n\
	siUnspecified, siPersistentOperation, siKeepGenOpInputs, null)(0);\n\
Application.LogMessage( new_srffit_op.Name + \" is a \" + ClassName(new_srffit_op) );\n\
// You can change the operator\'s parameters to tweak the new surface mesh\n\
new_srffit_op.Parameters( \"upoints\" ).Value = 5;\n\
new_srffit_op.Parameters( \"upoints\" ).Value = 5;\n\
new_srffit_op.Parameters( \"udeg\" ).Value = 1;\n\
new_srffit_op.Parameters( \"vdeg\" ).Value = 1;\n\
// You can also get the newly generated object \n\
var newly_generated_object = new_srffit_op.OutputPorts(0).Target2.Parent;\n\
Application.LogMessage( newly_generated_object.Name + \" is a \" + ClassName(newly_generated_object) );\n\
// Output of above script:\n\
//INFO : disc is a X3DObject\n\
//INFO : Fit surface is a Operator\n\
//INFO : surfmsh is a X3DObject</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to merge two mesh objects together and automatically delete the originals.\n\
\'\n\
CreatePrim \"Grid\", \"MeshSurface\"\n\
Duplicate \"grid\", , 2, 1, 1, 0, 0, 1, 0, 1, , , , , , , , , , , 0\n\
Translate , 8.31067961165049, -8.32607541679225E-18, 0.135979621382887, siRelative, siView, siObj, siXYZ\n\
SelectObj \"grid\", , True\n\
AddToSelection \"grid1\", , True\n\
ApplyGenOp \"MeshMerge\", , , 3, siImmediateOperation, siDeleteGenOpInputs</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how to create surfaces from curves. It creates two polymsh objects and two \n\
\'	srfmesh objects from the same input curves.\n\
\'\n\
NewScene , false\n\
Dim oMeshRev, oMeshExt\n\
Dim oNurbsRev, oNurbsExt\n\
\' Create the two curves to use to create surfaces\n\
CreatePrim \"Circle\", \"NurbsCurve\"\n\
CreatePrim \"Circle\", \"NurbsCurve\"\n\
SetValue \"circle1.circle.radius\", 2\n\
Translate \"circle1\", 7, 0, 0, siAbsolute, siParent, siObj, siX\n\
\' Create NURBS surfaces of revolution and extrusion.\n\
ApplyGenOp \"RevolutionAroundAxis\", \"NurbsSurface\", \"circle1\", 3, siPersistentOperation, siKeepGenOpInputs, oNurbsRev\n\
Translate , 16, 0, 0, siAbsolute, siParent, siObj, siX\n\
Translate , 0, 8, 0, siAbsolute, siParent, siObj, siY\n\
ApplyGenOp \"Extrusion\", \"NurbsSurface\", \"circle1;circle\", 3, siPersistentOperation, siKeepGenOpInputs, oNurbsExt\n\
Translate , 16, 0, 0, siAbsolute, siParent, siObj, siX\n\
\' Create Mesh surfaces of revolution and extrusion.\n\
ApplyGenOp \"RevolutionAroundAxis\", \"MeshSurface\", \"circle1\", 3, siPersistentOperation, siKeepGenOpInputs, oMeshRev\n\
Translate , -12, 0, 0, siAbsolute, siParent, siObj, siX\n\
Translate , 0, 8, 0, siAbsolute, siParent, siObj, siY\n\
ApplyGenOp \"Extrusion\", \"MeshSurface\", \"circle1;circle\", 3, siPersistentOperation, siKeepGenOpInputs, oMeshExt\n\
Translate , -12, 0, 0, siAbsolute, siParent, siObj, siX\n\
\' Move a point on input circle to show the effect on all created surfaces from curve.\n\
Translate \"circle1.pnt[12]\", 0.0, 2, 0.0, siRelative, siView, siObj, siXYZ\n\
SetDisplayMode \"Camera\", \"shaded\"\n\
\' Select output and log information about created surfaces.\n\
SelectObj oMeshRev,,True\n\
AddToSelection oMeshExt,,True\n\
AddToSelection oNurbsRev,,True\n\
AddToSelection oNurbsExt,,True\n\
Application.LogMessage \"Mesh Created from Revolution: \" &amp; oMeshRev\n\
Application.LogMessage \"Mesh Created from Extrusion: \" &amp; oMeshExt\n\
Application.LogMessage \"NURBS Created from Revolution: \" &amp; oNurbsRev\n\
Application.LogMessage \"NURBS Created from Extrusion: \" &amp; oNurbsExt\n\
\' Running this script should log the following:\n\
\' ---------------------------------------------\n\
\'INFO : \"Mesh Created from Revolution: polymsh\"\n\
\'INFO : \"Mesh Created from Extrusion: polymsh1\"\n\
\'INFO : \"NURBS Created from Revolution: surfmsh\"\n\
\'INFO : \"NURBS Created from Extrusion: surfmsh1\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyOperator.html\">ApplyOperator</a> <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_cmds/ApplyTopoOp.html\">ApplyTopoOp</a> <a href=\"#!/url=./si_cmds/ApplyHairOp.html\">ApplyHairOp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";