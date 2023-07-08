var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Dictionary.GetObject</title>\n\
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
            <h1>Dictionary.GetObject</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Dictionary.html\">Dictionary</a>.GetObject</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns an existing object that corresponds to a full path name. In other words, it converts from a string \n\
representation of a Softimage object to the Object Model representation.  This is similar to the <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a>\n\
command.  However, in the case of <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> objects, Dictionary.GetObject returnz the Parameter object \n\
and GetValue returns the parameter value (see the example below). <br /><br />\n\
To convert in the other direction (from an Object Model representation to a string), use <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object Dictionary.GetObject( String in_bszObjectName, Boolean in_bThrowError );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Dictionary.GetObject( Pathname, [ThrowError] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The found object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Pathname		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Full path name of the object to find.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ThrowError		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		By default Softimage will cause a script error if the object does not exist.\n\
		If you are not sure if the object exists or not pass false as the value \n\
		of this argument and Softimage will return null rather than throwing an error.\n\
		This parameter is new starting with v5.0.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
true			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Demonstrates usage of the Dictionary.GetObject method\n\
\'\n\
\' Clear the current scene to avoid name clashes and create\n\
\' a new cone named \"foo\"\n\
deleteall false\n\
CreatePrim \"Cone\", \"MeshSurface\", \"foo\"\n\
\' Find the subdivu parameter from the cone and set it to 10\n\
Set oSubdivuParam = Dictionary.GetObject(\"foo.polymsh.geom.subdivu\")\n\
Application.LogMessage \"Found a \" &amp; oSubdivuParam.type \' Outputs \"Found a Parameter\"\n\
SetValue oSubdivuParam, 10\n\
\' Find the cone by its name and delete it\n\
Set oCone = Dictionary.GetObject(\"foo\")\n\
Application.LogMessage \"Found a \" &amp; oCone.type \' Outputs \"Found a polymsh\"\n\
DeleteObj (oCone)</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Demonstrates usage of the Dictionary.GetObject method\n\
*/\n\
NewScene(null,false);\n\
var oModel = ActiveSceneRoot.AddModel(new ActiveXObject(\"XSI.Collection\"),\"MyMdl\") ;\n\
var oNull = oModel.AddNull( \"MyN\" );\n\
var oSphere = oNull.AddGeometry(\"Sphere\",\"MeshSurface\",\"MyS\");\n\
// Expect \"MyMdl.MyS\"\n\
Application.LogMessage( oSphere.FullName ) ;\n\
// Retrieve the sphere again, this time via its string name\n\
oSphere = Dictionary.GetObject( \"MyMdl.MyS\" )\n\
// The sphere is actually nested underneath the Null so you can also specify it like this\n\
oSphere = Dictionary.GetObject( \"MyMdl.MyN.MyS\" )\n\
// Now look at one of the parameters under the sphere\n\
// Expect \"MyMdl.MyS.kine.local.posx\"\n\
Application.LogMessage( oSphere.Kinematics.Local.Parameters(\"posx\").FullName );\n\
// First move the sphere to a recognizable position\n\
SetValue( \"MyMdl.MyS.kine.local.posx\", 7.5 )\n\
// Calling GetValue will return the VALUE of posx parameter\n\
var paramValue = GetValue( \"MyMdl.MyS.kine.local.posx\" ) ;\n\
// Expect \"number,7.5\"\n\
Application.LogMessage( typeof( paramValue ) + \",\" + paramValue);\n\
// But calling Dictionary.GetObject will return the \n\
// actual Parameter object\n\
var oParameter = Dictionary.GetObject( \"MyMdl.MyS.kine.local.posx\" )\n\
// Expect \"object,Parameter,7.5\"\n\
Application.LogMessage( typeof( oParameter ) + \",\" + Application.ClassName(oParameter) + \",\" + oParameter.Value ) ;</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example shows how to find an object by its name, and to create it if it doesn\'t already exists.  \n\
\' In this case we reuse the Annotation that has a specific name if it is already present at the scene root.\n\
\'\n\
NewScene , false\n\
dim strAnnotationName\n\
strAnnotationName = \"MyAnnotation\"\n\
set oObj = Dictionary.GetObject( strAnnotationName, false )\n\
if TypeName( oObj ) = \"Nothing\" then\n\
	set oObj = ActiveSceneRoot.AddProperty( \"Annotation\", false, strAnnotationName )\n\
end if\n\
InspectObj( oObj )</pre></td></tr>\n\
</table>\n\
</div><h4>4. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to find an object by its name, and to create it if it doesn\'t already exists.  \n\
	In this case we reuse the Annotation that has a specific name if it is already present at the scene root.\n\
*/\n\
var strAnnotationName = \"MyAnnotation\" ;\n\
var oObj = Dictionary.GetObject( strAnnotationName, false ) ;\n\
if ( !oObj ) {\n\
	var oObj = ActiveSceneRoot.AddProperty( \"Annotation\", false, strAnnotationName ) ;\n\
}\n\
InspectObj( oObj )</pre></td></tr>\n\
</table>\n\
</div><h4>5. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">\"\"\"\n\
Demonstrates Dictionary.GetObject() method with error handling\n\
\"\"\"\n\
Application.NewScene( \"\", False )\n\
#Create a primitive\n\
oCone = Application.CreatePrim(\"Cone\", \"MeshSurface\", \"\", \"\")\n\
# Use dictionary to locate the its render visibility\n\
try:\n\
	oRenderVisParam = Application.Dictionary.GetObject( \"cone.visibility.rendvis\", True )\n\
	Application.LogMessage( \"Parameter found. Value: \" + str( oRenderVisParam.Value ) )\n\
except:\n\
	Application.LogMessage( \"Parameter not found.\" )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";