var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Application.ClassName</title>\n\
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
            <h1>Application.ClassName</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Application.html\">Application</a>.ClassName</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the class name of a Softimage object. The name returned is the most derived class supported by the object.<br /><br />\n\
For example, as shown in the hierarchy information, a <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> supports \n\
<a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>, <a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a>, <a href=\"#!/url=./si_om/Property.html\">Property</a>, and ClusterProperty.  \n\
Because ClusterProperty is the last class listed (the \"leaf\" or \"most-derived\") it is the name returned by this method. <br /><br />\n\
This method is very important for determining what type an object is and what Object Model methods and properties are \n\
available on it. <br /><br />\n\
Unlike <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a>, this method is available for all objects including non-SIObject ones like  \n\
<a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>, <a href=\"#!/url=./si_om/PPG.html\">PPG</a>, and <a href=\"#!/url=./si_om/Image.html\">Image</a>. <br /><br />\n\
In some cases calling this method may not return enough information to fully distinguish between different types of objects.  \n\
For example, various geometries, lattices, forces all return <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> as their ClassName. <br /><br />\n\
Note: This method returns the same information as TypeName(obj) in VBScript and can be used by languages that do not support \n\
the TypeName() function. However unlike VBScript\'s TypeName(), this method fails when passed strings, numbers and other \n\
standard data types. It only works for actual Softimage objects. <br /><br />\n\
Note: With each release of Softimage more objects are added to the Object Model, which adds new classes to the hierarchy.  \n\
This means that the value returned by this method may start returning a new ClassName, which could potentially break existing \n\
scripts that were hardcoded to expect certain behavior from this method.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>String Application.ClassName( Object in_pObject );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = Application.ClassName( Object );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/String.htm\">String</a></p></div>\n\
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
		<td>Object		</td>\n\
		<td>\n\
 Object to describe 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example displays the class name of an object\n\
*/\n\
var oObj = ActiveProject.ActiveScene.Root.AddGeometry(\"Sphere\", \"NurbsSurface\");\n\
LogMessage( \"Object typename = \" + Application.ClassName(oObj) );</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
#	This is a basic demonstration using Application.ClassName to\n\
#	test the type of an object\n\
#\n\
def IsModel( in_obj )  :\n\
	# There are no classes which derive from model so this is\n\
	# a safe way to test the object \n\
	try:\n\
		return ( Application.ClassName( in_obj ) == \"Model\" )\n\
	except:\n\
		#Exception will occur if in_obj isn\'t really an COM object\n\
		return False\n\
oSceneRoot = Application.ActiveSceneRoot \n\
oNull = oSceneRoot.AddNull()\n\
oModel = oSceneRoot.AddModel()\n\
# This is a model (prints \"True\")\n\
Application.LogMessage( IsModel( oSceneRoot ) ) \n\
Application.LogMessage( IsModel( oModel ) ) \n\
# These are not models (prints \"False\")\n\
Application.LogMessage( IsModel( Application ) ) \n\
Application.LogMessage( IsModel( oNull ) ) \n\
# These are not even Softimage objects (prints \"False\")\n\
Application.LogMessage( IsModel( \"not even an object\" ) ) \n\
Application.LogMessage( IsModel( 22 ) )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> <a href=\"#!/url=./si_om/Dictionary.GetObject.html\">Dictionary.GetObject</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";