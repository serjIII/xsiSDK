var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ApplyOp</title>\n\
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
            <h1>ApplyOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ApplyOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Applies an operator to one or several objects, returns any objects created by the operator, and opens the newly applied operator\'s \n\
property page. This is a generic command that can apply any type of operator (hair, deform, generator, topology, custom, etc.). <br /><br />\n\
You can also use commands that are specific to the type of operator you are applying. For example, the <a href=\"#!/url=./si_cmds/ApplyGenOp.html\">ApplyGenOp</a> \n\
command can be used to apply generator operators (such as the Birail or \n\
Loft operators). Some operators have their own commands, such as the \n\
HairCombOp which can be applied with the <a href=\"#!/url=./si_cmds/ApplyHairCombOp.html\">ApplyHairCombOp</a>. <br /><br />\n\
This command supports group-level <a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a>s only. To specify a\n\
port-level ConnectionSet, use the <a href=\"#!/url=./si_cmds/ApplyOperator.html\">ApplyOperator</a> command instead.<br /><br />\n\
Tip: These type-specific commands often have features that are specialized for the type of operator you are applying. For example, the\n\
ApplyGenOp command gives the option of applying the operator in immediate or persistent mode and another option for what to do with\n\
the input (original) objects after the new geometry has been generated, whereas this command does not provide those options.<br /><br />\n\
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
		<td class=\"example\"><pre>oReturn = ApplyOp( PresetObj, [ConnectionSet], [ConnectType], [ImmediateMode], [OutputObjs], [ConstructionMode] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> that contains a list of the created operators.</p></div>\n\
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
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (for example, an object obtained from <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
 Operator Preset. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConnectionSet		</td>\n\
		<td><a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a>		</td>\n\
		<td>\n\
 Specifies the objects connected to an operator. <br /><br />Note: Because this is an in/out parameter, any string (variable or value) you pass into this parameter is automatically converted to a ConnectionSet object.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected objects are used as the main group.<br /><br />Warning: An error occurs if the connection set is invalid. Please verify the connection set required for this operator to avoid breaking your scripts.			</p>\n\
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
		<td class=\"name\">OutputObjs		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
 Returns the primitives created by the operator. For example, Loft creates a primitive surface. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConstructionMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siConstructionMode.html\">siConstructionMode</a>		</td>\n\
		<td>\n\
 Specifies in which construction mode the operator will be applied. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Use the current construction mode			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to create\n\
\' loft operators\n\
\'\n\
\'\n\
\' Use Loft to create a surface from 2 curves\n\
\'\n\
set curve1 = CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
translate curve1, , , 2\n\
set curve2 = CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
set oplist = ApplyOp( \"Loft\", curve1 &amp; \",\" &amp; curve2,,,createdobjects )\n\
set loftop = oplist(0)\n\
\' change the subdivision level in U\n\
setvalue loftop &amp; \".subdivu\", 19\n\
\'\n\
\' Loft onto an existing surface\n\
\'\n\
set surface = createdobjects(0)\n\
surface.name = \"Surface_created_by_lofting_2_curves\"\n\
set curve1 = CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
translate curve1, , , 2\n\
set curve2 = CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
set surface = CreatePrim( \"Grid\", \"NurbsSurface\", \"Loft_into_existing_surface\" )\n\
\' Freeze the surface so that the object can be used to contain a\n\
\' new lofted surface\n\
FreezeObj surface\n\
set oplist = ApplyOp( \"Loft\", curve1 &amp; \",\" &amp; curve2 &amp; \";\" &amp; surface )\n\
set surface = oplist(0)\n\
surface.name = \"Surface_created_by_lofting_2_curves\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/* \n\
	Example showing how to retrieve the newly created operator\n\
	when ApplyOp is called on a single object\n\
*/\n\
// Create primitive\n\
oCube = activesceneroot.addgeometry( \"Cube\", \"MeshSurface\" );\n\
// Call command to apply a Taper deformer and \n\
// retrieve the newly created operator\n\
oColl = ApplyOp( \"Taper\", oCube, 3, 0, null, 0 ) ;\n\
// Because there is only 1 input object (oCube)\n\
// we know there is only one operator created\n\
var oOp = oColl(0);\n\
// Modify the Amplitude Parameter\n\
oOp.ampl = 0.25 ;</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Create empty collection to store objects that\n\
// we want to apply the operator to\n\
oInputCollection = XSIFactory.CreateObject( \"XSI.Collection\" );\n\
// Create primitive\n\
oInputCollection.add( activesceneroot.addgeometry( \"Cube\", \"MeshSurface\" ) );\n\
oInputCollection.add( activesceneroot.addgeometry( \"Sphere\", \"MeshSurface\" ) );\n\
// Call command to apply a Taper deformer and populate collection with its return value\n\
oOps = ApplyOp( \"Taper\", oInputCollection, 3, 0, null, 0 ) ;\n\
// Validate result\n\
for( var i=0; i &lt; oOps.count; i++ )\n\
{\n\
// Get operator\n\
oOp = oOps(i);\n\
logmessage( oOp.fullname );\n\
}\n\
//Expected results:\n\
//INFO : cube.polymsh.taperop\n\
//INFO : sphere.polymsh.taperop</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyOperator.html\">ApplyOperator</a> <a href=\"#!/url=./si_cmds/ApplyGenOp.html\">ApplyGenOp</a> <a href=\"#!/url=./si_cmds/ApplyTopoOp.html\">ApplyTopoOp</a> <a href=\"#!/url=./si_cmds/ApplyHairOp.html\">ApplyHairOp</a> <a href=\"#!/url=./si_om/Operator.html\">Operator</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";