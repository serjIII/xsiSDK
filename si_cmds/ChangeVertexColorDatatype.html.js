var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ChangeVertexColorDatatype</title>\n\
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
            <h1>ChangeVertexColorDatatype</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ChangeVertexColorDatatype</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Adds a <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/vertexcolorchangedatatype.html\">Vertex Color Change Datatype</a> \n\
operator on the specified <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/vertexcolor.html\">VertexColor</a> \n\
property. Vertex color properties now support two internal data representations for \n\
colors: Short (8-bits colors) or Float (32-bits). RenderMaps can be set to bake 32-bit \n\
colors into the CAVs, but the CAVs can also be changed after the fact to 8-bit or 32-bit \n\
colors. This would allow, for example, a user to write and read 32-bit precision colors in \n\
and from the CAV, using the SDK.\n\
<br /><br />\n\
The Vertex Color Change Datatype operator allows you to modify the \"datatype\" parameter which\n\
is normally read-only, and so cannot be changed via <a href=\"#!/url=./si_om/SetValue.html\">SetValue</a>, \n\
<a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a>, or <a href=\"#!/url=./si_om/Parameter.PutValue2.html\">Parameter.PutValue2</a>. The JScript example\n\
below demonstrates this principle.\n\
<br /><br />\n\
The DesiredDatatype input parameter is required. If the current VertexColor property already \n\
uses the desired datatype, then a warning message is logged and no operator is installed.\n\
<br /><br />\n\
Typically, you call this command just once to apply the Vertex Color Change Datatype operator.\n\
Then, if you need to change the \"datatype\" setting again, you can just access the \"desireddatatype\"\n\
parameter on the operator, instead of applying another operator with this command. As the JScript\n\
example below demonstrates, if you have several operators applied on the same VertexColor property, \n\
you need to be careful that you are modifying the \"desireddatatype\" parameter on the correct operator.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ChangeVertexColorDatatype( [InputObj], DesiredDatatype, [OutputObjs] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>An <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing the newly created <a href=\"#!/url=./si_om/Operator.html\">Operator</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/objectexpr.htm\">VertexColor by name</a>, \n\
		<a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> or <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
VertexColor property to change 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected objects are used as the main group.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DesiredDatatype		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Specifies the desired datatype.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>short					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>float (32 bit)					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OutputObjs		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of <a href=\"#!/url=./si_om/Operator.html\">Operator</a> object(s).		</td>\n\
		<td>\n\
Returns the new <a href=\"#!/url=./si_om/Operator.html\">Operator</a> in an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to set the read-only DataType on a VertexColor (CAV) property, including \n\
	avoiding some of the pitfalls of applying more than one Vertex Color Change Datatype operator.\n\
*/\n\
NewScene( \"\", false );\n\
var obj = Application.ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
var VtxColors = CreateVertexColorSupport( null, null, obj );\n\
// Get the datatype parameter (on the VertexColor property)\n\
var DataType = VtxColors(0).Parameters(\"datatype\");\n\
Application.LogMessage( \"Default DataType: \" + DataType.Value );\n\
// The datatype parameter is readonly\n\
try {\n\
	// This will throw an error\n\
	DataType.Value = 1;\n\
} catch(e) {\n\
	Application.LogMessage( \"Error on DataType.Value = 1: \" + e.description, siWarning );\n\
	try {\n\
		// SetValue will also fail\n\
		SetValue( DataType, 1 );\n\
	} catch(f) {\n\
		Application.LogMessage( \"Error on SetValue( DataType, 1 ): \" + f.description, siWarning );\n\
	}\n\
}\n\
// Use the VertexColorChangeDatatype operator instead\n\
var DataChgOps1 = ChangeVertexColorDatatype( VtxColors, 1 );\n\
var DesiredDType1 = DataChgOps1(0).Parameters(\"desireddatatype\");\n\
Application.LogMessage( \"DataType after 1st operator: \" + DataType.Value );\n\
// Now that you have the VertexColorChangeDatatype operator, you can \n\
// use its DesiredDatatype parameter to toggle back and forth\n\
DesiredDType1.Value = 0;\n\
Application.LogMessage( \"Back to default: \" + DataType.Value );\n\
DesiredDType1.Value = 1;\n\
Application.LogMessage( \"Switched to float again: \" + DataType.Value );\n\
// However, if you try to apply another operator, only the last one \n\
// applied will affect the actual data type\n\
var DataChgOps2 = ChangeVertexColorDatatype( VtxColors, 0 );\n\
var DesiredDType2 = DataChgOps2(0).Parameters(\"desireddatatype\");\n\
Application.LogMessage( \"DataType after 2nd operator: \" + DataType.Value );\n\
DesiredDType1.Value = 1;\n\
Application.LogMessage( \"Changed old operator: \" + DataType.Value );\n\
DesiredDType2.Value = 1;\n\
Application.LogMessage( \"Changed new operator: \" + DataType.Value );\n\
// For the truly cautious, get the last operator applied\n\
var CAVProp = obj.ActivePrimitive.Geometry.VertexColors(0);\n\
var LastChgDataTypeOp;\n\
for ( var i=CAVProp.NestedObjects.Count-1; i&gt;=0; i++ ) {\n\
	if ( CAVProp.NestedObjects.Item(i).Type == \"vertexcolorchangedatatype\" ) {\n\
		LastChgDataTypeOp = CAVProp.NestedObjects.Item(i);\n\
		break;\n\
	}\n\
}\n\
Application.LogMessage( \"LastChgDataTypeOp == DataChgOps1: \" + LastChgDataTypeOp.IsEqualTo(DataChgOps1(0)) );\n\
Application.LogMessage( \"LastChgDataTypeOp == DataChgOps2: \" + LastChgDataTypeOp.IsEqualTo(DataChgOps2(0)) );\n\
var LastDesiredDType = LastChgDataTypeOp.Parameters(\"desireddatatype\");\n\
LastDesiredDType.Value = 0;\n\
Application.LogMessage( \"Changed final operator: \" + DataType.Value );\n\
// Output:\n\
// INFO : Default DataType: 0\n\
// WARNING : 2011 - Error on DataType.Value = 1: Member not found\n\
// ERROR : 2011-EDIT-SetValue - Member not found\n\
// WARNING : Error on SetValue( DataType, 1 ): Object doesn\'t support this property or method\n\
// INFO : DataType after 1st operator: 1\n\
// INFO : Back to default: 0\n\
// INFO : Switched to float again: 1\n\
// INFO : DataType after 2nd operator: 0\n\
// INFO : Changed old operator: 0\n\
// INFO : Changed new operator: 1\n\
// INFO : LastChgDataTypeOp == DataChgOps1: false\n\
// INFO : LastChgDataTypeOp == DataChgOps2: true\n\
// INFO : Changed final operator: 0</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates a Vertex Color property (CAV) and plays with one of the colors \n\
\' to demonstrate how switching the datatype can affect the color values\n\
\'\n\
dim CAVObjs, dtype, chgOp, aColors\n\
NewScene , false\n\
SetDisplayMode \"Camera\", \"constant\"\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
\' The VertexColor property is the first element in the returned collection\n\
set CAVObj = CreateVertexColorSupport()(0)\n\
set dtype = CAVObj.Parameters(\"datatype\")\n\
\' Print current datatype\n\
Application.LogMessage \"CAV datatype = \" &amp; dtype.Value\n\
\' Change datatype to float and print new datatype\n\
set chgOp = ChangeVertexColorDatatype( CAVObj, 1 )(0)\n\
Application.LogMessage \"CAV new datatype = \" &amp; dtype.Value\n\
\' Set Color 47 (facing front view) to be RGBA ( 0.1 , 0.2 , 0.3, 0.4 )\n\
aColors = CAVObj.Elements.Array\n\
aColors(0,47) = 0.1\n\
aColors(1,47) = 0.2\n\
aColors(2,47) = 0.3\n\
aColors(3,47) = 0.4\n\
CAVObj.Elements.Array = aColors\n\
\' Retrieve the color and print it\n\
aColors = CAVObj.Elements.Array\n\
Application.LogMessage \"Color 47 is (\" &amp; aColors(0,47) &amp; \", \" &amp; aColors(1,47) &amp; \", \" &amp; aColors(2,47) &amp; \", \" &amp; aColors(3,47) &amp; \")\" \n\
\' Now switch to short datatype and print it\n\
chgOp.Parameters(\"desireddatatype\").Value = 0		\' == SetValue chgOp &amp; \".desireddatatype\", 0\n\
Application.LogMessage \"CAV last datatype = \" &amp; dtype.Value\n\
\' Retrieve the color and print it\n\
aColors = CAVObj.Elements.Array\n\
Application.LogMessage \"Color 47 is (\" &amp; aColors(0,47) &amp; \", \" &amp; aColors(1,47) &amp; \", \" &amp; aColors(2,47) &amp; \", \" &amp; aColors(3,47) &amp; \")\" \n\
\'Output\n\
\' INFO : CAV datatype = 0\n\
\' INFO : CAV new datatype = 1\n\
\' INFO : Color 47 is (0.100000001490116, 0.200000002980232, 0.300000011920929, 0.400000005960464)\n\
\' INFO : CAV last datatype = 0\n\
\' INFO : Color 47 is (9.80392172932625E-02, 0.200000002980232, 0.298039227724075, 0.400000005960464)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_om/Operator.html\">Operator</a> <a href=\"#!/url=./si_cmds/CreateVertexColorSupport.html\">CreateVertexColorSupport</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";