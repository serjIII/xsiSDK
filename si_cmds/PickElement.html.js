var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PickElement</title>\n\
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
            <h1>PickElement</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PickElement</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Prompts the user to pick an element.\n\
<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PickElement( SelFilter, LeftMessage, MiddleMessage, [PickedElement], [ButtonPressed], SelRegionMode, [ModifierPressed] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">SelFilter		</td>\n\
		<td><a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
		<td>\n\
 Selection filter that specifies what type of element to pick. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siGenericObjectFilter			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LeftMessage		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Status bar message for the left mouse button. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MiddleMessage		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Status bar message for the middle mouse button. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PickedElement		</td>\n\
		<td><a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a>		</td>\n\
		<td>\n\
 Returns the element picked by the user. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ButtonPressed		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Returns the mouse button clicked by the user. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Right mouse button (or the Esc key), which means the user aborted the picking session					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Left mouse button					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Middle mouse button					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SelRegionMode		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Type of selection to perform. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>None (use current mode)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Rectangle					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Raycast					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Lasso					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Freeform					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">5					</td>\n\
					<td>Paint					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ModifierPressed		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Returns the modifier key pressed by the user. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>None					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Shift modifier key					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Ctrl modifier key					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Shift-Ctrl modifier key					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to set up a pick session to pick only polygons.\n\
*/\n\
NewScene( null, false );\n\
CreatePrim( \"Cube\", \"MeshSurface\" );\n\
var rtn = PickElement( \"polygon\", \"Select polygons\", \"Select polygons\", polygons, button, 0 )\n\
logmessage( \"Picked Element:\" + rtn.Value(\"PickedElement\") +\n\
		\" Button:\" + rtn.Value(\"ButtonPressed\") +\n\
		\" Modifier:\" + rtn.Value(\"ModifierPressed\") );\n\
var element = rtn.Value( \"PickedElement\" );\n\
var button = rtn.Value( \"ButtonPressed\" );\n\
var modifier = rtn.Value( \"ModifierPressed\" );\n\
if ( button != 0 ) \n\
{\n\
var polygons = element.SubComponent.Parent3DObject.ActivePrimitive.Geometry.Facets;\n\
var polygonIndices = element.SubComponent.ElementArray.toArray();\n\
	for ( var i=0; i&lt;polygonIndices.length; i++ )\n\
{\n\
		var currpolygon = polygons( polygonIndices[i] );\n\
		logmessage( currpolygon + \" is at index \" + currpolygon.Index );\n\
}\n\
}\n\
// Result is something like this (varies as to what gets picked):\n\
// INFO : Picked Element:cube.poly[0,4] Button:1 Modifier:0\n\
// INFO : PolygonFace is at index 0\n\
// INFO : PolygonFace is at index 4\n\
//</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' The following example uses PickElement to pick an object of a given type \n\
\' (eg: mesh) then another of another given type (eg: nurbs) to finally \n\
\' parent one to the other\n\
dim parent, child, button, modifier\n\
CreatePrim \"Sphere\", \"NurbsSurface\"\n\
Translate , -4.80504207251944, 6.3879907927616, -0.63879907927616, _\n\
siRelative, siView, siObj, siXYZ\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
PickElement \"surface_mesh\", \"Select parent nurbs object\", _\n\
\"Select parent nurbs object\", parent, button,, modifier\n\
if button &lt;&gt; 0 then\n\
	PickElement \"polygon_mesh\", \"Select child mesh object\", _\n\
		\"Select child mesh object\", child, button\n\
	if button &lt;&gt; 0 then\n\
		if modifier = 0 then\n\
			ParentObj parent, child\n\
		else\n\
			ParentObj child, parent\n\
		end if\n\
	end if\n\
end if\n\
\'The nurbs should now be parent of the mesh (or vice-versa for MMB)</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	The following example uses PickElement to pick subcomponents on a geometry\n\
*/\n\
CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
SetSelFilter(\"Vertex\");\n\
var rtn = PickElement( \"point\", \"Select points\", \"Select points\" );\n\
var button = rtn.Value( \"ButtonPressed\" );\n\
var points = rtn.Value(\"PickedElement\");\n\
if ( button != 0 ) {\n\
	CreateCluster( points );\n\
}\n\
// A cluster of points should now exist in the sphere.</pre></td></tr>\n\
</table>\n\
</div><h4>4. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' The following example uses PickElement to select a property of a 3D object\n\
\'\n\
dim parent, child, button\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
set AProperty = PickElement( \"property\", \"Select a property\", _\n\
	\"Select a property\", property, button )\n\
if button &lt;&gt; 0 then\n\
	SelectObj property\n\
end if\n\
\' A property of the sphere should now be selected.</pre></td></tr>\n\
</table>\n\
</div><h4>5. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	This example demonstrates how to get values from the\n\
#	output arguments of PickElement.\n\
#\n\
from win32com.client import constants as c\n\
xsi = Application\n\
xsi.NewScene( Application.ActiveProject, 0 )\n\
root = xsi.ActiveSceneRoot\n\
# Set up some models to pick\n\
oMdl = root.AddModel()\n\
oMdl.Name = \"Parent1\"\n\
oMdl = root.AddModel()\n\
oMdl.Name = \"Parent2\"\n\
oMdl1 = oMdl.AddModel()\n\
oMdl1.Name = \"Child\"\n\
oPicked = xsi.PickElement( c.siModelFilter, \'Pick model\', \'Pick model\' )\n\
xsi.LogMessage( \"# of values returned: \" + str(oPicked.Count) )\n\
# You can access the output arguments by index (returned sorted\n\
# alphabetically according to parameter name)...\n\
xsi.LogMessage( \"Button pressed: \" + str(oPicked(0)) )\n\
xsi.LogMessage( \"Picked element: \" + str(oPicked(2)) )\n\
# ... or access them by name\n\
xsi.LogMessage( \"Modifier pressed: \" + str(oPicked.Value(\"ModifierPressed\")) )\n\
# Expected result for picking Parent2 with the MMB while \n\
# holding down alt+shift (# of values will always be 3):\n\
#INFO : # of values returned: 3\n\
#INFO : Button pressed: 2\n\
#INFO : Picked element: Parent2\n\
#INFO : Modifier pressed: 3</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";