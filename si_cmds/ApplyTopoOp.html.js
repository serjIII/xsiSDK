var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ApplyTopoOp</title>\n\
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
            <h1>ApplyTopoOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ApplyTopoOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Applies and returns a topology operator. A topology operator is an operator which modifies existing geometry, such as adding \n\
or removing edges. For example, BridgeEdges, \n\
DissolveComponent, and \n\
SubdividePolygon are all examples of topology operators. <br /><br />\n\
Tip: You can also use the <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> command to apply a topology operator.<br /><br />\n\
Note: This command uses output arguments. Some scripting languages don\'t support arguments passed by reference \n\
(such as JScript, PerlScript and Python). Normally these languages can use the ISIVTCollection to get the output\n\
arguments; however, since this command already returns a value, that particular workaround is not available \n\
(see <a href=\"#!/url=./files/OutputArgArrays.htm\">About Output Argument Arrays</a> for more information).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ApplyTopoOp( PresetObj, [ConnectionSet], [ConnectType], [ImmediateMode], [OutputObjs], [ConstructionMode] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> that contains a list of the created operators.<br /><br />\n\
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
Topology Operators		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConnectionSet		</td>\n\
		<td><a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a>		</td>\n\
		<td>\n\
 Specifies the objects connected to an operator.  <br /><br />Note: Because this is an in/out parameter, any string (variable or value) you pass into this parameter is automatically converted to a ConnectionSet object.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
 Returns the primitives created by the operator. For now none return an object 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConstructionMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siConstructionMode.html\">siConstructionMode</a>		</td>\n\
		<td>\n\
 Specifies in which construction mode the \'Delete Edge\' operator will be applied. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Use the current construction mode			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Collapse some vertices on a polygon mesh.\n\
dim obj, op\n\
set obj = CreatePrim( \"Grid\", \"MeshSurface\" )\n\
set op = ApplyTopoOp( \"Collapse\" , \"grid.pnt[30-32,39-41,48-50]\" )</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Example demonstrating how to get use ApplyTopoOp\n\
// to create an operator and retrieve it from the return value.\n\
NewScene( null, false );\n\
// Get a pointer to the internal object database. \n\
var objdata = XSIUtils.DataRepository;\n\
// Apply the Collapse operator in ImmediateMode to see what gets returned.\n\
var obj = CreatePrim( \"Grid\", \"MeshSurface\" );\n\
var ops = ApplyTopoOp( \"Collapse\" , obj + \".pnt[30-32,39-41,48-50]\", null, siPersistentOperation);\n\
// Because we only apply to a single object we only expect a \n\
// single item in the XSICollection.  But\n\
// it is a good habit to use a \"for\" loop\n\
// to go through all elements.\n\
for (var i=0; i&lt;ops.Count; i++) {\n\
	logmessage( \"New Operator: \" + ops(i).Name +\n\
		 \", Type: \" + ops(i).Type + \n\
\", ClassName: \" + ClassName( ops(i) ) ) ;\n\
}\n\
// Output of above script:\n\
//INFO : New Operator: Collapse Op ,Type: collapseop, ClassName: Operator</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates what gets returned when you apply and freeze a TopoOp with the \n\
	ApplyTopoOp command in siImmediateOperation mode. \n\
	The command still returns a pointer to the operator, but, unlike the\n\
	example above, it no longer exists in the scene, so you can\'t do anything with it.\n\
	The tricky part is testing the returned object to see whether it is valid or not. Normally you can \n\
	test the class or type to determine its validity; however, these operators will tell you\n\
	that they are Operator objects (Application.ClassName). The Type property\n\
	returns an empty string, which you can also use to test for an operator\'s validity, but\n\
	this example uses the DataRepository object instead.\n\
	The DataRepository object is an internal database which keeps track of objects in Softimage. It\n\
	holds the ID for each object in the system which you can retrieve with the GetIdentifier\n\
	method.\n\
	Note: This example is only provided to illustrate what to expect from an XSICollection \n\
	containing frozen operators. Normally, you would not be interested in the returned value\n\
	of an apply-and-freeze-operator operation.\n\
*/\n\
NewScene( null, false );\n\
// Get a pointer to the internal object database. \n\
var objdata = XSIUtils.DataRepository;\n\
// Apply the Collapse operator in ImmediateMode to see what gets returned.\n\
var obj = CreatePrim( \"Grid\", \"MeshSurface\" );\n\
var ops = ApplyTopoOp( \"Collapse\" , obj + \".pnt[30-32,39-41,48-50]\", null, siImmediateOperation );\n\
for (var i=0; i&lt;ops.Count; i++) {\n\
	// Normally this returns \'collapseop\'\n\
	logmessage( \"Type returns: \'\" + ops(i).Type + \"\'\" );\n\
	// Wrap the call to DataRepository.GetIdentifier in a try-catch block because it will\n\
	// throw an error if the object is invalid (if it\'s valid, you would see a GUID)\n\
	try {\n\
		logmessage( objdata.GetIdentifier(ops(i), siObjectGUID) );\n\
	} catch(e) {\n\
		logmessage( \"object is not valid\" );\n\
	}\n\
}\n\
// Output of above script:\n\
//INFO : Type returns: \'\'\n\
//INFO : object is not valid</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyOperator.html\">ApplyOperator</a> <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_cmds/ApplyGenOp.html\">ApplyGenOp</a> <a href=\"#!/url=./si_cmds/ApplyHairOp.html\">ApplyHairOp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";