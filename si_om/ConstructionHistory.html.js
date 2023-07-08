var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ConstructionHistory</title>\n\
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
            <h1>ConstructionHistory</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ConstructionHistory</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_ConstructionHistory\">Object Hierarchy</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\">ConstructionHistory</p>\n\
\n\
<h3>Description</h3>\n\
<div><p>This object represents the <a href=\"#!/url=./si_om/Operator.html\">Operator</a> stack for a \n\
<a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> object. It allows you to browse through the stack one \n\
operator at a time by enumerating the ConstructionHistory object, which you can\n\
get with the <a href=\"#!/url=./si_om/Primitive.ConstructionHistory.html\">Primitive.ConstructionHistory</a> property.<br /><br />\n\
The operator stack on a primitive is called the \"Construction History\" because\n\
the order of the operators generally reflects the order that the operators were created.\n\
However because of the concept of <a href=\"#!/url=./si_om/siConstructionMode.html\">siConstructionMode</a>, operators may\n\
sometime be added underneath existing operators.\n\
<br /><br />\n\
The construction history is one example of the more general concept of \"Connection Stack\",\n\
see <a href=\"#!/url=./si_om/DataRepository.GetConnectionStackInfo.html\">DataRepository.GetConnectionStackInfo</a> for details.\n\
<br /><br />\n\
Note: For performance reasons the Item and Count properties have not been implemented,\n\
so you have to enumerate the entire stack and check each one to see if it\'s the one you\n\
want.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ConstructionHistory.Filter.html\">Filter</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/ConstructionHistory.Find.html\">Find</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Set up the scenario (a cylinder with two operators)\n\
Set oObj = CreatePrim( \"Cylinder\", \"MeshSurface\" )\n\
ApplyOp \"Bulge\", oObj, 3, siPersistentOperation\n\
ApplyOp \"Twist\", oObj, 3, siPersistentOperation\n\
\' First find the cylinder with the operators on it\n\
Set oRoot = ActiveSceneRoot\n\
Set oCyl = oRoot.FindChild(,,siMeshFamily)\n\
\' Now get the primitive from the cylinder and then the \n\
\' operator stack as the construction history object\n\
Set oPrim = oCyl.ActivePrimitive\n\
Set oOpStack = oPrim.ConstructionHistory\n\
\' This isn\'t a normal collection, so Count and Item \n\
\' do not work, as you can see if you uncomment these lines:\n\
REM LogMessage \"The stack contains \" &amp; oOpStack.Count &amp; \" operators.\"\n\
REM LogMessage \"...and the first one is: \" &amp; oOpStack.Item(0)\n\
\' Since you cannot indicate which one you want with Item,\n\
\' you need to enumerate each one to check to see whether it\n\
\' is the one you are looking for \n\
For Each o in oOpStack\n\
	If (o = oPrim &amp; \".bulgeop\") Then\n\
		\' You found it!\n\
		Set oBulgeOp = o\n\
		\' Find the DeformAlong settings and toggle Y and Z\n\
		For Each p in oBulgeOp.Parameters\n\
			Select Case p.ScriptName\n\
				Case \"defy\"\n\
					LogMessage \"Original value for DeformAlongY = \" &amp; p.Value\n\
					p.Value = not( p.Value )\n\
					LogMessage \"New value = \" &amp; p.Value\n\
				Case \"defz\"\n\
					LogMessage \"Original value for DeformAlongZ = \" &amp; p.Value\n\
					p.Value = not( p.Value )\n\
					LogMessage \"New value = \" &amp; p.Value\n\
				Case Else\n\
			End Select\n\
		Next\n\
	End If\n\
Next\n\
REM Output of above script is:\n\
\'INFO : \"Original value for DeformAlongY = False\"\n\
\'INFO : \"New value = True\"\n\
\'INFO : \"Original value for DeformAlongZ = True\"\n\
\'INFO : \"New value = False\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' The following code illustrates how to get a ConstructionHistory \n\
\' object and how to iterate the construction history using the \n\
\' For Each...Next statement: \n\
Set oObject = Application.ActiveProject.ActiveScene.Root.AddGeometry(\"Sphere\",\"MeshSurface\")\n\
ApplyOp \"Twist\", oObject\n\
ApplyOp \"Bend\", oObject\n\
ApplyOp \"Taper\", oObject\n\
LogMessage \"The \" &amp; oObject.Name &amp; \" has the following operators applied:\"\n\
For Each oOperator in oObject.ActivePrimitive.ConstructionHistory\n\
	LogMessage vbTab &amp; oOperator.Name \n\
Next\n\
REM The output of the above script is:\n\
\'INFO : \"The sphere has the following operators applied:\"\n\
\'INFO : \"	Taper Op\"\n\
\'INFO : \"	Bend Op\"\n\
\'INFO : \"	Twist Op\"\n\
\'INFO : \"	Geometry\"</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//jscript example showing how to \n\
//enumerate the Operators on a geometry\n\
var oGrid = ActiveProject.ActiveScene.Root.AddGeometry( \"Sphere\", \"MeshSurface\" ) ;\n\
ApplyOp(\"Bulge\", oGrid.Name, 3, siPersistentOperation);\n\
ApplyOp(\"Bend\", oGrid.Name, 3, siPersistentOperation);\n\
oEnum = new Enumerator( oGrid.ActivePrimitive.ConstructionHistory );\n\
for (;!oEnum.atEnd();oEnum.moveNext())           \n\
{\n\
	// Print the name of the operator\n\
	logmessage( oEnum.item().fullname ) ;\n\
}\n\
// Output of this script is:\n\
//INFO : \"sphere.polymsh.bendop\"\n\
//INFO : \"sphere.polymsh.bulgeop\"\n\
//INFO : \"sphere.polymsh.geom\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Primitive.ConstructionHistory.html\">Primitive.ConstructionHistory</a> <a href=\"#!/url=./si_om/Operator.html\">Operator</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";