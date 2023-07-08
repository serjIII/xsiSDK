var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UserDataMap.Template</title>\n\
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
            <h1>UserDataMap.Template</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a>.Template <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the templated user data for this User Data Map as a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> \n\
(or NULL if there is no template). A User Data Map can be associated with a custom property that \n\
serves as a template for the data inside the User Data Map.\n\
<br /><br />\n\
This allows the storage of strongly typed data on each component.  The template defines the format\n\
of the data, but the values of the data are stored seperately for each component.\n\
<br /><br />\n\
For example a User Data Map on a polygon cluster may have a Template with a integer parameter X \n\
and a floating point parameter Y.  This means that each polygon can store its own value of X and Y.\n\
<br /><br />\n\
The transfer of data between the associated custom property and individual components can be performed\n\
using <a href=\"#!/url=./si_om/UserDataItem.Value.html\">UserDataItem.Value</a> and <a href=\"#!/url=./si_om/CustomProperty.BinaryData.html\">CustomProperty.BinaryData</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
CustomProperty rtn = UserDataMap.Template;\n\
// set accessor\n\
UserDataMap.Template = CustomProperty;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">dim oRoot, oObj, oCluster, oPropSet1, oPropSet2, oUserDataMap\n\
\'Create all the objects \n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oObj = oRoot.AddGeometry(\"Grid\",\"MeshSurface\")\n\
set oCluster = oObj.ActivePrimitive.Geometry.AddCluster( siPolygonCluster,\"PolyCluster\" )\n\
set oPropSet1 = oCluster.AddProperty( \"Custom_parameter_list\",, \"PSet1\" )\n\
set oUserDataMap = oCluster.AddProperty( \"UserDataMap\", false, \"DataOnPoints\" )\n\
\'Add some parameters to the PSet\n\
dim oParam\n\
set oParam = oPropSet1.AddParameter( \"Str\", siString )\n\
oParam.Value = \"Test\"\n\
oPropSet1.AddParameter \"X\", siDouble, , , _\n\
							\"X short\", \"X Long\", , _\n\
							9.87, 0.01, 11.14\n\
oPropSet1.AddParameter \"UByte\", siUByte, siClassifMetaData , siPersistable, _\n\
							, , , _\n\
							64, 0, 128 \n\
set oUserDataMap.Template = oPropSet1\n\
\'Change a parameter value via the User Data Map\n\
set oParam = oUserDataMap.Template.Parameters( \"X\" )	\n\
oParam.Value = 3.23\n\
\'So far none of the polygons actually have any user data stored on them.\n\
\'We can save the current values of the template custom property onto polygon 5\n\
\'using the following:\n\
oUserDataMap.Item( 5 ).Value = oUserDataMap.Template.BinaryData\n\
\'Change our minds and remove the association.  (This doesn\'t\n\
\'erase the user data we stored on polygon 5)\n\
set oUserDataMap.Template = Nothing</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> <a href=\"#!/url=./si_om/CustomProperty.BinaryData.html\">CustomProperty.BinaryData</a> <a href=\"#!/url=./si_om/UserDataItem.Value.html\">UserDataItem.Value</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";