var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIObject.IsClassOf</title>\n\
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
            <h1>SIObject.IsClassOf</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>.IsClassOf <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns true if the object implements the class identified by the <a href=\"#!/url=./si_om/siClassID.html\">siClassID</a>. \n\
The method allows you to test which classes an object can implement and reflects the hierarchy illustrated in the object\'s \n\
documentation. For example, the <a href=\"#!/url=./si_om/ProxyParameter.html\">ProxyParameter</a> class supports its own properties and methods, but also the properties\n\
and methods of the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> class and the <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a> class. This means that IsClassOf returns true for \n\
siProxyParameterID, siParameterID and siObjectID.  On the other hand, a proxy parameter is not a <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>, \n\
so IsClassOf would return false for siX3DObjectID.\n\
<br /><br />\n\
This method is very similar to the <a href=\"#!/url=./si_om/Application.ClassName.html\">Application.ClassName</a> method \n\
with the exception that it takes an siClassID instead of a string and you can test for all the classes implemented by a class.\n\
<br /><br />\n\
Note: The VBScript TypeName() function and JScript typeof() function can also be used to report the type name of simple data types such\n\
as a string or integer. For objects, the TypeName() function will give the same result as the <a href=\"#!/url=./si_om/Application.ClassName.html\">Application.ClassName</a> method\n\
but the typeof() function will only return \'object\', the typeof() function will also return \'object\' for variables set to \'null\'.\n\
<br /><br />\n\
The C++ API has an equivalent methods: <a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">SIObject::IsA</a> and \n\
<a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">SIObject::IsA</a> and take exactly the same <a href=\"#!/url=./si_om/siClassID.html\">siClassID</a> constant.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Boolean SIObject.IsClassOf( siClassID );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBoolean = SIObject.IsClassOf( ClassID );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Boolean.htm\">Boolean</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ClassID		</td>\n\
		<td><a href=\"#!/url=./si_om/siClassID.html\">siClassID</a>		</td>\n\
		<td>\n\
The classid to compare with 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// \n\
// Demonstrates how to test an object for its implementation classes\n\
// \n\
var oModel = ActiveSceneRoot.AddModel();\n\
Application.LogMessage( \"Is object a model: \" + oModel.IsClassOf(siModelID) );\n\
Application.LogMessage( \"Is object an x3dobject: \" + oModel.IsClassOf(siX3DObjectID) );\n\
Application.LogMessage( \"Is object a scene item: \" + oModel.IsClassOf(siSceneItemID) );\n\
Application.LogMessage( \"Is object a project item: \" + oModel.IsClassOf(siProjectItemID) );\n\
Application.LogMessage( \"Is object an siobject: \" + oModel.IsClassOf(siSIObjectID) );\n\
Application.LogMessage( \"Is object a null: \" + oModel.IsClassOf(siNullID) );\n\
// Expected result:\n\
//INFO : \"Is object a model: True\"\n\
//INFO : \"Is object an x3dobject: True\"\n\
//INFO : \"Is object a scene item: True\"\n\
//INFO : \"Is object a project item: True\"\n\
//INFO : \"Is object an siobject: True\"\n\
//INFO : \"Is object a null: False\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	The SIObject.IsClassOf() method can be very useful in determining whether\n\
	the selection contains a 3DObject.\n\
*/\n\
newscene(null, false);\n\
CreateModel(null, null, null, null);\n\
Application.LogMessage( \"Is the selected \"+selection(0).name+\" object a 3dobject? \" + selection(0).IsClassOf(siX3DObjectID) );\n\
CreatePrim(\"Sphere\", \"MeshSurface\", null, null);\n\
var obj = selection(0);\n\
Application.LogMessage( \"Is the selected \"+selection(0).name+\" object a 3dobject? \" + selection(0).IsClassOf(siX3DObjectID) );\n\
SelectGeometryComponents(\"sphere.pnt[1,6-8,14,15,22,29,35,36,40-43,47-50,54-LAST]\");\n\
CreateCluster(null);\n\
Application.LogMessage( \"Is the selected \"+selection(0).name+\" object a 3dobject? \" + selection(0).IsClassOf(siX3DObjectID) );\n\
// Expected result:\n\
//INFO : Is the selected Model object a 3dobject? true\n\
//INFO : Is the selected sphere object a 3dobject? true\n\
//INFO : Is the selected Point object a 3dobject? false</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";