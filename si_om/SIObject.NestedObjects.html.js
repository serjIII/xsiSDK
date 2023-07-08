var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIObject.NestedObjects</title>\n\
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
            <h1>SIObject.NestedObjects</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>.NestedObjects</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns an <a href=\"#!/url=./si_om/SIObjectCollection.html\">SIObjectCollection</a> of objects which are nested under this object. \n\
The nested objects returned by the function are scene objects such as <a href=\"#!/url=./si_om/Property.html\">Property</a>, \n\
<a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>, <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>, etc... The collection is empty if there \n\
are no nested objects. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
SIObjectCollection rtn = SIObject.NestedObjects;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example traverses the hierarchy of a selected object and logs \n\
\' recursively all its nested objects.\n\
\'\n\
\' Note: Although this example sets up its own selection, you \n\
\' could remove the SETUP section and run this example with\n\
\' your own selection instead.\n\
\'\n\
\' SETUP\n\
NewScene , false\n\
set arc = CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
set disc = CreatePrim( \"Disc\", \"MeshSurface\" )\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
set oSelection = Application.Selection\n\
oSelection.Clear\n\
oSelection.Add arc\n\
oSelection.Add disc\n\
\' MAIN\n\
set obj = Application.Selection(0)\n\
VisitNestedObjects obj, 0 \n\
\' RESULTS\n\
\'INFO : X3DObject:arc\n\
\'INFO :  Parameter:Name:arc\n\
\'INFO :  Parameter:Primitive:\n\
\'INFO :   Primitive:Arc\n\
\'INFO :    Parameter:Radius:4\n\
\'INFO :    Parameter:Start Angle:0\n\
\'INFO :    Parameter:End Angle:90\n\
\'INFO :   Primitive:NURBS Curve List\n\
\'INFO :    SIObject:Clusters\n\
\'INFO :     Parameter:Point\n\
\'INFO :      Parameter:Cluster List\n\
\'	etc.\n\
\' HELPER\n\
sub VisitNestedObjects( obj, indent )\n\
	dim strMsg, nestees, nestedobj\n\
	strMsg = String( indent, \" \" ) &amp; TypeName(obj) &amp; \":\" &amp; obj.Name\n\
	\' Turn on error trapping (in some cases parameter values \n\
	\' are not accessible using the Value property)\n\
	on error resume next\n\
	if obj.IsClassOf( siParameterID ) then\n\
		\' Log the parameter value if any\n\
		strMsg = strMsg &amp; \":\" &amp; obj.Value\n\
	end if\n\
	\' Turn off error trapping \n\
	on error goto 0\n\
	Application.LogMessage strMsg\n\
	\' Traverse recursively all nested objects\n\
	set nestees = obj.NestedObjects\n\
	for each nestedobj in nestees\n\
		VisitNestedObjects nestedobj, indent+1\n\
	next\n\
end sub</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Use NestedObjects to do a Brute Force Recursion\n\
	through the entire scene to find all custom properties\n\
	This will be slow because it goes through entire scene\n\
	but this basic approach can be modified to do many \n\
	types of searches.  (For a fast approach see the CustomProperty\n\
	example located at the FindObjects command reference)\n\
*/\n\
SetupDemoScene() ;\n\
// Results are accumulated into these \n\
// global variables \n\
var g_cntTestedElements = 0 ;\n\
var g_oCol = new ActiveXObject( \"XSI.Collection\" ) ;\n\
// Doing a recursive search may visit\n\
// the same object more than once\n\
g_oCol.Unique = true ;\n\
FindCustomProperties( ActiveSceneRoot ) ;\n\
ShowResults() ;\n\
function ShowResults()\n\
{\n\
	Application.LogMessage( \"Searched \" + g_cntTestedElements + \" objects to find Custom Properties\" ) ;\n\
	for ( var i = 0 ; i &lt; g_oCol.Count ; i++ )\n\
	{\n\
		// Our search was very general, so we\n\
		// found every single Custom Property\n\
		// We can do further tests at this stage,\n\
		// for example based on the object\n\
		if ( g_oCol(i).Type == \"CustomColor\" )\n\
			LogMessage( \"Found CustomColor \" + g_oCol(i).FullName ) ;\n\
		else \n\
			LogMessage( \"Found CustomProperty \" + g_oCol(i).FullName ) ;		\n\
	}\n\
}\n\
function FindCustomProperties( oParent )\n\
{\n\
	var oChildren = oParent.NestedObjects ;\n\
	for ( var i = 0 ; i &lt; oChildren.Count ; i++ )\n\
	{\n\
		var oChild = oChildren.Item( i ) ;		\n\
		TestObject( oChild ) ;				\n\
		// Note: If you have some ideas about\n\
		// where the object is you can make the\n\
		// search faster by skipping this call\n\
		// for some types of objects.  For example\n\
		// you could avoid shader trees by\n\
		// stopping at any material objects,\n\
		FindCustomProperties( oChild ) ;	\n\
	}\n\
}\n\
// This function is called for every single\n\
// object in the scene\n\
function TestObject( oObj )\n\
{\n\
	g_cntTestedElements++ ;\n\
	if ( oObj.IsClassOf( siCustomPropertyID ))\n\
	{\n\
		g_oCol.Add( oObj ) ;\n\
	}\n\
}\n\
// Build an example scene with Custom Properties\n\
// tucked into various locations.\n\
function SetupDemoScene()\n\
{\n\
	newscene( null, false ) ;\n\
	// CustomColor is a self-installed Custom Property\n\
	ActiveSceneRoot.AddProperty( \"CustomColor\", false, \"MyColor\" ) ;\n\
	ActiveSceneRoot.AddProperty( \"CustomColor\", false, \"MyColor2\" ) ;\n\
	ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"MyEmptyCustomProp\" ) ;\n\
	oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" ) ;\n\
	oCls = oSphere.ActivePrimitive.Geometry.AddCluster( \"edge\", \"MyCluster\" ) ;\n\
	oCls.AddProperty( \"CustomColor\", false, \"MyColor\" ) ;\n\
	oSphere.AddMaterial( \"Phong\" ) ;\n\
	var oPhongShader = oSphere.Material.Shaders(0)\n\
	oPhongShader.AddProperty( \"CustomProperty\", false, \"EmptyNestedProp\" ) ;\n\
	oPhongShader.AddProperty( \"CustomProperty\", false, \"MyColor\" ) ;	\n\
	var oModel = ActiveSceneRoot.AddModel(null, \"MyModel\" ) ;\n\
	oModel.AddProperty( \"CustomColor\", false, \"MyColor3\" ) ;\n\
	oModel.AddProperty( \"CustomProperty\", false, \"EmptyProperty\" ) ;\n\
	oModel.AddNull().AddProperty( \"CustomColor\", false, \"MyColor4\" ) ;				\n\
}\n\
//Expected results (number of objects searched may vary)\n\
//INFO : Searched 2922 objects to find Custom Properties\n\
//INFO : Found CustomColor MyColor\n\
//INFO : Found CustomColor MyColor2\n\
//INFO : Found CustomProperty MyEmptyCustomProp\n\
//INFO : Found CustomColor sphere.polymsh.cls.MyCluster.MyColor\n\
//INFO : Found CustomProperty sphere.Material.Phong.EmptyNestedProp\n\
//INFO : Found CustomProperty sphere.Material.Phong.MyColor\n\
//INFO : Found CustomColor MyModel.MyColor3\n\
//INFO : Found CustomProperty MyModel.EmptyProperty\n\
//INFO : Found CustomColor MyModel.null.MyColor4</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/EnumElements.html\">EnumElements</a> <a href=\"#!/url=./si_cmds/FindObjects.html\">FindObjects</a> <a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> <a href=\"#!/url=./si_om/SceneItem.Properties.html\">SceneItem.Properties</a> <a href=\"#!/url=./si_om/ProjectItem.Owners.html\">ProjectItem.Owners</a> <a href=\"#!/url=./si_om/X3DObject.Models.html\">X3DObject.Models</a> <a href=\"#!/url=./si_om/X3DObject.Children.html\">X3DObject.Children</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";