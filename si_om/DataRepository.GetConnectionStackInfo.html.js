var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>DataRepository.GetConnectionStackInfo</title>\n\
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
            <h1>DataRepository.GetConnectionStackInfo</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/DataRepository.html\">DataRepository</a>.GetConnectionStackInfo</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.1</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns information in XML format about which objects read from and write to an object.\n\
The connection stack is called the <a href=\"#!/url=./si_om/ConstructionHistory.html\">ConstructionHistory</a> in the context \n\
of a Primitive.  \n\
<br /><br />\n\
The connection stack can contain connections to <a href=\"#!/url=./si_om/Operator.html\">Operator</a>s, \n\
<a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>s, <a href=\"#!/url=./si_om/Shader.html\">Shader</a>s and other objects, so it is more \n\
than just a \"Operator Stack\".  The order of the objects in the connection stack is \n\
important because it determines the order in which the scene is evaluated.  For example, \n\
if a scripted operator reads from a Primitive above a deform operator that reads and writes \n\
to the Primitive, then the scripted operator will read the deformed version of the geometry, \n\
not the original version.\n\
<br /><br />\n\
This method returns low-level information, including the presence of hidden objects, that is \n\
intended for internal Softimage usage.  It is exposed in the SDK primarily to help users write \n\
and debug <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a>s.\n\
<br /><br />\n\
The format of the XML may change in the future.  Currently it returns the following possible \n\
attributes:\n\
<br /><br />\n\
object - <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> of the object.  Empty if there is no active connection.\n\
<br /><br />\n\
type - \"in\" or \"out\".  If \"in\" it means that the object being queried is reading data from the \n\
connected object.\n\
<br /><br />\n\
localparameter - Some connections read and write to a specific <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.  In that\n\
case this contains the <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a>.\n\
<br /><br />\n\
remoteparameter - If the connection is to a specific parameter on the connected object, then this \n\
contains its <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a>.\n\
<br /><br />\n\
hidden - \"true\" if the object has the siNotInspectable capability.  See <a href=\"#!/url=./si_om/ProjectItem.Capabilities.html\">ProjectItem.Capabilities</a>.\n\
<br /><br />\n\
region - For internal use.\n\
<br /><br />\n\
datacopy - For internal use.  This is the internal handle to the object, for example \"0x1c9f0448\".  \n\
The value of this handle serves no meaningful purpose in the context of the SDK.  Softimage may create \n\
several temporary \"datacopies\" of an individual object to assist in the clean evaluation of the scene.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>String DataRepository.GetConnectionStackInfo( Object in_object );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = DataRepository.GetConnectionStackInfo( Object );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>XML <a href=\"#!/url=./files/String.htm\">String</a>, containing the connections in a top-to-bottom ordering.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Object		</td>\n\
		<td>Softimage Object		</td>\n\
		<td>\n\
\n\
		Object to query, for example a <a href=\"#!/url=./si_om/Property.html\">Property</a> or <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>. \n\
		Connections are managed at the object level, not the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> level.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use DataRepository.GetConnectionStackInfo\n\
	to find which objects read from a particular object.\n\
*/\n\
NewScene( null, false ) ;\n\
CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
ApplyOp( \"Twist\", \"sphere\", 3, siPersistentOperation, null, 0 );\n\
SetSelFilter( \"Vertex\" );\n\
AddToSelection( \"sphere.pnt[26,33]\", null, true );\n\
Translate( null, 1, 0.2, -1.2, siRelative, siView, siObj, siXYZ );\n\
SelectObj( \"Sphere.polymsh\" ) ;\n\
// Get the connection information\n\
var oDR = XSIUtils.DataRepository ;\n\
opInfo = oDR.GetConnectionStackInfo( Selection(0) )\n\
// This line would dump the actual XML content:\n\
//Application.LogMessage( \"\\n----------------\\nRAW XML OUTPUT\\n------------------\\n\" + opInfo ) ;\n\
// Get the list of output objects\n\
aOutputs = GetOutputObjects( opInfo ) ;\n\
Application.LogMessage( \"Objects that read from the Sphere primitive:\\n\" + aOutputs.join(\"\\n\") ) ;\n\
// Helper function to load the XML data using the Microsoft\n\
// implementation of the DOM (see msdn.microsoft.com for documentation)\n\
function ParseXML( strXML )\n\
{\n\
	var oXMLParser = new ActiveXObject( \"Microsoft.XMLDOM\" ) \n\
	oXMLParser.async = false	\n\
	oXMLParser.loadXML( opInfo ) ;\n\
	if (oXMLParser.parseError.errorCode != 0) \n\
	{\n\
		Application.LogMessage( \"Invalid XML \" + oXMLParser.parseError.reason , siError ) ;	\n\
		return null ;\n\
	}\n\
	// the xsi_file node\n\
	// If this is NULL we must have failed to load the XML\n\
	var oTopNode = oXMLParser.documentElement ;\n\
	return oTopNode ;\n\
}\n\
// Go through the connection information and determine which connected\n\
// operators/objects are reading from the object\n\
//\n\
// opInfo is the XML string returned by calling DataRespository.GetOperatorStackInfo\n\
function GetOutputObjects( opInfo )\n\
{\n\
	aOutputs = new Array() ;\n\
	var oTopNode = ParseXML( opInfo ) ;\n\
	if ( oTopNode == null ) \n\
		return aOutputs ;\n\
	var oConnections = oTopNode.childNodes ;\n\
	for ( var i = 0 ; i &lt; oConnections.length ; i++ )\n\
	{\n\
		oConnection= oConnections.item(i) ;\n\
		oObjNode = oConnection.selectSingleNode( \"object\" ) ;\n\
		strObj = oObjNode.text ;				\n\
		oTypeNode = oConnection.selectSingleNode( \"type\" ) ;\n\
		if ( oTypeNode != null &amp;&amp; oTypeNode.text == \"out\" )\n\
			aOutputs[aOutputs.length] = strObj ;\n\
	}						\n\
	return aOutputs ;\n\
}\n\
//Example output:\n\
//\n\
//INFO : Objects that read from the Sphere primitive:\n\
//sphere.polymsh.secondaryshapemarker\n\
//sphere.polymsh.animationmarker\n\
//sphere.polymsh.shapemarker\n\
//sphere.polymsh.modelingmarker\n\
//sphere.polymsh.movecomponentop\n\
//sphere.polymsh.cls.Point_INTERNAL.AddToClsOp\n\
//sphere.polymsh.twistop\n\
//sphere.polymsh.cls.default_Point.SetClsOp</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to use DataRepository.GetConnectionStackInfo\n\
	to find which objects are influenced by a parameter.\n\
*/\n\
// Create simple scene\n\
NewScene( null, false );\n\
var oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\", \"sphere\" ) ;\n\
var oSphereGlobalPosx = oSphere.Kinematics.Global.posx ;\n\
// posy parameter on light will be driven by posx parameter of the sphere.\n\
// (This creates an Expression object between the two parameters)\n\
CopyPaste( oSphereGlobalPosx, null, \"light.kine.global.posy\", 1 );\n\
// posz parameter will also be driven by the posx parameter\n\
CopyPaste( oSphereGlobalPosx, null, \"light.kine.global.posz\", 1 );\n\
aDependentData = FindDataDrivenByParameter( oSphereGlobalPosx )\n\
for ( var i = 0 ; i &lt; aDependentData.length ; i++ )\n\
{\n\
	Application.LogMessage( aDependentData[i] ) ;\n\
}\n\
// Get the connection information for a particular parameter.  It returns an \n\
// array of strings with the full name of the expression operator or other \n\
// object that is reading the value of the in_Parameter argument\n\
function FindDataDrivenByParameter( in_Parameter )\n\
{\n\
	var aConnections = [] ;\n\
	// Connection information is managed at the Object level, not Parameter level\n\
	var oObj = in_Parameter.Parent ;\n\
	var oDR = XSIUtils.DataRepository ;\n\
	opInfo = oDR.GetConnectionStackInfo( oObj )\n\
	var oXMLParser = new ActiveXObject( \"Microsoft.XMLDOM\" ) \n\
	oXMLParser.async = false	\n\
	oXMLParser.loadXML( opInfo ) ;\n\
	var oTopNode = oXMLParser.documentElement ;\n\
	var oConnections = oTopNode.childNodes ;\n\
	for ( var i = 0 ; i &lt; oConnections.length ; i++ )\n\
	{\n\
		var oConnection = oConnections(i) ;\n\
		oObjNode = oConnection.selectSingleNode( \"object\" ) ;\n\
		if ( oObjNode == null )\n\
			continue ; // Not connected to anything\n\
		// See if this is a connection to the parameter we are interested in\n\
		oParameterNode = oConnection.selectSingleNode( \"localparameter\" ) ;\n\
		if ( oParameterNode != null )\n\
		{\n\
			strConnectedParameter = oParameterNode.text ;\n\
			if ( strConnectedParameter == in_Parameter.ScriptName )\n\
			{				\n\
				// Found a connection to this parameter \n\
				strType = oConnection.selectSingleNode( \"type\" ).text ;\n\
				if ( strType == \"out\" )\n\
				{\n\
					aConnections[aConnections.length] =oObjNode.text\n\
				}\n\
				// Tip if the type was \"in\" then it means that the connection is controlling the\n\
				// value of this parameter, e.g. a FCurve, expression, operator. This information\n\
				// can also be retrieved with Parameter.Source\n\
			}\n\
		}	\n\
	}	\n\
	return aConnections ;\n\
}\n\
//Output of this example:\n\
//INFO : light.kine.global.pos.posz.Expression\n\
//INFO : light.kine.global.Expression</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";