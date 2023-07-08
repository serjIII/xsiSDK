var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ICEAttribute.DataArray</title>\n\
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
            <h1>ICEAttribute.DataArray</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ICEAttribute.html\">ICEAttribute</a>.DataArray</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns a 1D <a href=\"#!/url=./files/Array.htm\">Array</a> object containing the data defined by this \n\
attribute. If <a href=\"#!/url=./si_om/ICEAttribute.IsConstant.html\">ICEAttribute.IsConstant</a> is true, the array has only one item which contains \n\
the constant value. Returns an empty array if the attribute\'s structure type is not a singleton.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = ICEAttribute.DataArray;\n\
// set accessor\n\
ICEAttribute.DataArray = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example shows how to access all attribute data on a geometry.\n\
#\n\
from win32com.client import constants\n\
xsi = Application\n\
xsi.CreatePrim(\"Cone\", \"MeshSurface\", \"\", \"\")\n\
attrs = xsi.Selection(0).GetActivePrimitive3().Geometry.ICEAttributes\n\
for attr in attrs:\n\
	xsi.LogMessage( \"*******************************************************************\" )\n\
	xsi.LogMessage( \"Name: \" + attr.Name )\n\
	xsi.LogMessage( \"DataType: \" + str(attr.DataType) )\n\
	xsi.LogMessage( \"StructType: \" + str(attr.StructureType) )\n\
	xsi.LogMessage( \"ContextType: \" + str(attr.ContextType) )\n\
	xsi.LogMessage( \"IsDefined: \" + str(attr.IsDefined) )	\n\
	xsi.LogMessage( \"IsConstant: \" + str(attr.IsConstant) )	\n\
	xsi.LogMessage( \"Readonly: \" + str(attr.IsReadonly) )\n\
	xsi.LogMessage( \"AttributeCategory: \" + str(attr.AttributeCategory) )\n\
	xsi.LogMessage( \"Element count: \" + str(attr.ElementCount) )	\n\
	if attr.IsDefined == 0 :\n\
		continue\n\
	dataType = attr.DataType;\n\
	data = attr.DataArray;\n\
	for elem in data:\n\
		if dataType == constants.siICENodeDataFloat:\n\
			xsi.LogMessage( \"float: \" + str(elem) )\n\
		elif dataType == constants.siICENodeDataLong: \n\
			xsi.LogMessage( \"long: \" + str(elem) )\n\
		elif dataType == constants.siICENodeDataBool: \n\
			xsi.LogMessage( \"bool: \" + str(elem) )\n\
		elif dataType == constants.siICENodeDataVector3: \n\
			xsi.LogMessage( \"Vector3: \" + str(elem.X) + \":\" + str(elem.Y) + \":\" + str(elem.Z) )\n\
		elif dataType == constants.siICENodeDataQuaternion: \n\
			xsi.LogMessage( \"Quaternion: \" + str(elem.W) + \":\" + str(elem.X) + \":\" + str(elem.Y) + \":\" + str(elem.Z) )\n\
		elif dataType == constants.siICENodeDataRotation: \n\
			xsi.LogMessage( \"Rotation: \" + str(elem.RotX) + \":\" + str(elem.RotY) + \":\" + str(elem.RotZ) )\n\
		elif dataType == constants.siICENodeDataMatrix33: \n\
			xsi.LogMessage( \"Matrix33:\" );\n\
			xsi.LogMessage( str(elem.Value(0,0)) + \":\" + str(elem.Value(0,1)) + \":\" + str(elem.Value(0,2)) )\n\
			xsi.LogMessage( str(elem.Value(1,0)) + \":\" + str(elem.Value(1,1)) + \":\" + str(elem.Value(1,2)) )\n\
			xsi.LogMessage( str(elem.Value(2,0)) + \":\" + str(elem.Value(2,1)) + \":\" + str(elem.Value(2,2)) )\n\
		elif dataType == constants.siICENodeDataMatrix44: \n\
			xsi.LogMessage( \"Matrix44:\" );\n\
			xsi.LogMessage( str(elem.Value(0,0)) + \":\" + str(elem.Value(0,1)) + \":\" + str(elem.Value(0,2)) + \":\" + str(elem.Value(0,3)))\n\
			xsi.LogMessage( str(elem.Value(1,0)) + \":\" + str(elem.Value(1,1)) + \":\" + str(elem.Value(1,2)) + \":\" + str(elem.Value(1,3)))\n\
			xsi.LogMessage( str(elem.Value(2,0)) + \":\" + str(elem.Value(2,1)) + \":\" + str(elem.Value(2,2)) + \":\" + str(elem.Value(2,3)))\n\
			xsi.LogMessage( str(elem.Value(3,0)) + \":\" + str(elem.Value(3,1)) + \":\" + str(elem.Value(3,2)) + \":\" + str(elem.Value(3,3)))\n\
		elif dataType == constants.siICENodeDataColor4: \n\
			xsi.LogMessage( \"Color:\" );\n\
			xsi.LogMessage( str(elem.Red) + \":\" + str(elem.Green) + \":\" + str(elem.Blue) + \":\" + str(elem.Alpha) )\n\
		elif dataType == constants.siICENodeDataString: \n\
			xsi.LogMessage( \"String: \" + elem );\n\
# Expected results:\n\
# INFO : *******************************************************************\n\
# INFO : Name: SurfaceGeometricNormal\n\
# INFO : DataType: 16\n\
# INFO : StructType: 1\n\
# INFO : ContextType: 1048576\n\
# INFO : IsDefined: False\n\
# INFO : IsConstant: False\n\
# INFO : Readonly: True\n\
# INFO : AttributeCategory: 1\n\
# INFO : Element count: 0\n\
# INFO : *******************************************************************\n\
# INFO : Name: Volume\n\
# INFO : DataType: 4\n\
# INFO : StructType: 1\n\
# INFO : ContextType: 1\n\
# INFO : IsDefined: True\n\
# INFO : IsConstant: True\n\
# INFO : Readonly: True\n\
# INFO : AttributeCategory: 1\n\
# INFO : Element count: 1\n\
# INFO : float: 3.77123618126\n\
# etc.</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example shows how to add an attribute and set its data.\n\
#\n\
from win32com.client import constants\n\
xsi = Application\n\
xsi.NewScene(\"\", \"false\")\n\
xsi.CreatePrim(\"Cone\", \"MeshSurface\", \"\", \"\")\n\
#Type = Vector3, context = One element per polygon.\n\
attr = xsi.Selection(0).GetActivePrimitive3().AddICEAttribute(\"MyVec3\", constants.siICENodeDataVector3, constants.siICENodeStructureSingle, constants.siICENodeContextComponent2D )\n\
myDataArray = [ XSIMath.CreateVector3( 0.0, 0.0, 0.0 ) ] * attr.ElementCount\n\
myDataArray[0] = XSIMath.CreateVector3( 1.0, 2.0, 3.0 )\n\
myDataArray[1] = XSIMath.CreateVector3( 4.0, 5.0, 6.0 )\n\
attr.DataArray = myDataArray\n\
#Type = String, context = One element per vertex or point.\n\
attr = xsi.Selection(0).GetActivePrimitive3().AddICEAttribute(\"MyString\", constants.siICENodeDataString, constants.siICENodeStructureSingle, constants.siICENodeContextComponent0D )\n\
myDataArray = [ \"\" ] * attr.ElementCount\n\
myDataArray[0] = \"text\"\n\
myDataArray[1] = \"why\"\n\
myDataArray[2] = \"How\"\n\
attr.DataArray = myDataArray\n\
#Type = Quaternion, context = One element per geometry. \n\
attr = xsi.Selection(0).GetActivePrimitive3().Geometry.AddICEAttribute(\"MyQuat\", constants.siICENodeDataQuaternion, constants.siICENodeStructureSingle, constants.siICENodeContextSingleton )\n\
myDataArray = [ XSIMath.CreateQuaternion( 1.0, 2.0, 3.0, 4.0 ) ] * attr.ElementCount\n\
myDataArray[0] = XSIMath.CreateQuaternion( 1.0, 2.0, 3.0, 4.0 )\n\
attr.DataArray = myDataArray\n\
#Type = Rotation, context = One element per edge. \n\
attr = xsi.Selection(0).GetActivePrimitive3().Geometry.AddICEAttribute(\"MyRot\", constants.siICENodeDataRotation, constants.siICENodeStructureSingle, constants.siICENodeContextComponent1D )\n\
myDataArray = [ XSIMath.CreateRotation( 0.0, 0.0, 0.0 ) ] * attr.ElementCount\n\
myDataArray[0] = XSIMath.CreateRotation( XSIMath.DegreesToRadians( 70 ), XSIMath.DegreesToRadians( 40 ), XSIMath.DegreesToRadians( 45 ) )\n\
myDataArray[1] = myDataArray[0]\n\
myDataArray[2] = myDataArray[0]\n\
attr.DataArray = myDataArray\n\
# Display the first values of the newly added attributes\n\
attrs = xsi.Selection(0).GetActivePrimitive3().Geometry.ICEAttributes\n\
for attr in attrs:\n\
	if attr.Name.find(\"My\") == -1 :\n\
		continue\n\
	xsi.LogMessage( \"*******************************************************************\" )\n\
	xsi.LogMessage( \"Name: \" + attr.Name )\n\
	xsi.LogMessage( \"Element count: \" + str(attr.ElementCount) )	\n\
	if attr.IsDefined == 0 :\n\
		continue\n\
	dataType = attr.DataType;\n\
	data = attr.DataArray;\n\
	i = 0 \n\
	for elem in data:\n\
		i += 1\n\
		if i &gt; 4 :\n\
			continue 			\n\
		elif dataType == constants.siICENodeDataVector3: \n\
			xsi.LogMessage( \"Vector3: (\" + str(elem.X) + \", \" + str(elem.Y) + \", \" + str(elem.Z) + \")\" )\n\
		elif dataType == constants.siICENodeDataQuaternion: \n\
			xsi.LogMessage( \"Quaternion: (\" + str(elem.W) + \", \" + str(elem.X) + \", \" + str(elem.Y) + \", \" + str(elem.Z) + \")\" )\n\
		elif dataType == constants.siICENodeDataRotation: \n\
			xsi.LogMessage( \"Rotation: (\" + str(round(elem.RotX)) + \", \" + str(round(elem.RotY)) + \", \" + str(round(elem.RotZ)) + \")\" )\n\
		elif dataType == constants.siICENodeDataString: \n\
			xsi.LogMessage( \"String: \" + elem );\n\
# Expected results:\n\
# INFO : *******************************************************************\n\
# INFO : Name: MyQuat\n\
# INFO : Element count: 1\n\
# INFO : Quaternion: (1.0, 2.0, 3.0, 4.0)\n\
# INFO : *******************************************************************\n\
# INFO : Name: MyRot\n\
# INFO : Element count: 56\n\
# INFO : Rotation: (70.0, 40.0, 45.0)\n\
# INFO : Rotation: (70.0, 40.0, 45.0)\n\
# INFO : Rotation: (70.0, 40.0, 45.0)\n\
# INFO : Rotation: (0.0, 0.0, 0.0)\n\
# INFO : *******************************************************************\n\
# INFO : Name: MyString\n\
# INFO : Element count: 26\n\
# INFO : String: text\n\
# INFO : String: why\n\
# INFO : String: How\n\
# INFO : String: \n\
# INFO : *******************************************************************\n\
# INFO : Name: MyVec3\n\
# INFO : Element count: 32\n\
# INFO : Vector3: (1.0, 2.0, 3.0)\n\
# INFO : Vector3: (4.0, 5.0, 6.0)\n\
# INFO : Vector3: (0.0, 0.0, 0.0)\n\
# INFO : Vector3: (0.0, 0.0, 0.0)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ICEAttribute.DataArray2D.html\">ICEAttribute.DataArray2D</a> <a href=\"#!/url=./si_om/ICEAttribute.GetDataArrayChunk.html\">ICEAttribute.GetDataArrayChunk</a> <a href=\"#!/url=./si_om/ICEAttribute.GetDataArray2DChunk.html\">ICEAttribute.GetDataArray2DChunk</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";