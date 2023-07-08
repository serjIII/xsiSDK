var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIObject.Name</title>\n\
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
            <h1>SIObject.Name</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a>.Name <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns the name of the object as a <a href=\"#!/url=./files/String.htm\">String</a>. The name accessed through this \n\
property is the object\'s name without context. For example, Name and <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> \n\
return the same thing for <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> objects (for example, \"cube\"), but on a \n\
<a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> object, Name returns the type of geometry (\"Polygon Mesh\"), whereas \n\
FullName returns the object name string expression including the parent object (\"cube.polymsh\"). <br /><br />\n\
For <a href=\"#!/url=./si_om/ActionDeltaItem.html\">ActionDeltaItem</a>s, this property returns the \n\
<a href=\"#!/url=./files/RelativeName.htm\">Relative Name</a> because <a href=\"#!/url=./si_om/Delta.html\">Delta</a>s store the \n\
relative name instead of the <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> of a parameter so actions can be \n\
easily copied from one <a href=\"#!/url=./si_om/Model.html\">Model</a> to another.<br /><br />\n\
The difference between the various name properties is especially important to remember when you \n\
are working with commands, because the Name of the command is not what you use when writing scripts, \n\
or what gets logged to the History pane. That information is contained in the \n\
<a href=\"#!/url=./si_om/Command.ScriptingName.html\">Command.ScriptingName</a> property.<br /><br />\n\
Note: Not all objects can be renamed. If you try to set the name on some objects (such as \n\
parameters on built-in Softimage parameter/property sets), it doesn\'t work, but it doesn\'t raise an \n\
error either.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String rtn = SIObject.Name;\n\
// set accessor\n\
SIObject.Name = String;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
\' This snippet creates a sphere (called \'sphere\' by default)\n\
\' and then changes its name to \"NewName\"\n\
set oObj = ActiveProject.ActiveScene.Root.AddGeometry(\"Sphere\", \"NurbsSurface\")\n\
printName oObj			\' default name = \"sphere\"\n\
oObj.Name = \"NewName\"\n\
printName oObj			\' new name = \"NewName\"\n\
\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
\' This snippet tries to change the name of a built-in \n\
\' parameter with no luck\n\
set oParam = oObj.Properties( \"Visibility\" ).Parameters( \"viewvis\" )\n\
printName oParam			\' name = \"View Visibility\"\n\
oParam.Name = \"ThisWontWork\"\n\
printName oParam			\' name is still the same\n\
\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
function printName( in_obj )\n\
	Application.LogMessage in_obj.Name\n\
end function\n\
\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
\' Output of above script:\n\
\'INFO : \"sphere\"\n\
\'INFO : \"NewName\"\n\
\'INFO : \"View Visibility\"\n\
\'INFO : \"View Visibility\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
\' This example demonstrates the differences between the name information you can\n\
\' access in Softimage. Specifically, it shows when you can use the Name, FullName, \n\
\' ScriptingName, and ScriptName properties and what information they return.\n\
\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
CreateParticleCloud()\n\
Application.LogMessage \"PARTICLE CLOUD INFO..............\"\n\
showNames selection(0), \"particle cloud\"\n\
set oCube = activesceneroot.addgeometry( \"cube\", \"meshsurface\" )\n\
Application.LogMessage typename( oCube.parameters(0) )\n\
Application.LogMessage \"OBJECT INFO..............\"\n\
showNames oCube, \"oCube\"\n\
Application.LogMessage \"PRIMITIVE INFO..............\"\n\
showNames oCube.activeprimitive, \"oCube.activeprimitive\"\n\
Application.LogMessage \"GEOMETRY INFO..............\"\n\
showNames oCube.activeprimitive.geometry, \"oCube.activeprimitive.geometry\"\n\
Application.LogMessage \"PARAMETER INFO..............\"\n\
showNames oCube.activeprimitive.parameters(0), \"oCube.activeprimitive.parameters(0)\"\n\
Application.LogMessage \"PROPERTIES INFO..............\"\n\
showNames oCube.properties(0), \"oCube.properties(0)\"\n\
Application.LogMessage \"PARAMETER INFO..............\"\n\
showNames oCube.parameters(0), \"oCube.parameters(0)\"\n\
Application.LogMessage \"COMMAND INFO..............\"\n\
showNames application.commands(0), \"application.commands(0)\"\n\
removefromselection oCloud \n\
addtoselection oCube \n\
set oOps = applyop( \"twist\" )\n\
Application.LogMessage \"OPERATOR INFO..............\"\n\
showNames oOps(0), \"oOps(0)\"\n\
\n\
\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
function showNames( in_ShowMe, in_ErrWhere )\n\
	Application.LogMessage \"-------------------------------------------------------------------\"\n\
	if typename( in_ShowMe ) &lt;&gt; \"Nothing\" then\n\
		Application.LogMessage \"Name = \" &amp; in_ShowMe.Name\n\
		Application.LogMessage \"FullName = \" &amp; in_ShowMe.FullName\n\
		if typename( in_ShowMe ) = \"Command\" then\n\
			Application.LogMessage \"ScriptingName = \" &amp; in_ShowMe.ScriptingName \n\
		else\n\
			Application.LogMessage \"ScriptingName is not available for the \" _\n\
				&amp; in_ShowMe.Name &amp; \" (it\'s only for commands)\"\n\
		end if\n\
		if typename( in_ShowMe ) = \"Parameter\" then\n\
			Application.LogMessage \"ScriptName = \" &amp; in_ShowMe.ScriptName\n\
		else\n\
			Application.LogMessage \"ScriptName is not available for the \" _\n\
				&amp; in_ShowMe.Name &amp; \" (it\'s only for parameters)\"\n\
		end if\n\
	else\n\
		Application.LogMessage \"Object required for \" &amp; in_ErrWhere\n\
	end if\n\
	Application.LogMessage \"-------------------------------------------------------------------\"\n\
end function\n\
\'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\
\' OUTPUT OF THIS SCRIPT IS:\n\
\'INFO : \"PARTICLE CLOUD INFO..............\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Name = cloud\"\n\
\'INFO : \"FullName = cloud\"\n\
\'INFO : \"ScriptingName is not available for the cloud (it\'s only for commands)\"\n\
\'INFO : \"ScriptName is not available for the cloud (it\'s only for parameters)\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Parameter\"\n\
\'INFO : \"OBJECT INFO..............\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Name = cube\"\n\
\'INFO : \"FullName = cube\"\n\
\'INFO : \"ScriptingName is not available for the cube (it\'s only for commands)\"\n\
\'INFO : \"ScriptName is not available for the cube (it\'s only for parameters)\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"PRIMITIVE INFO..............\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Name = Polygon Mesh\"\n\
\'INFO : \"FullName = cube.polymsh\"\n\
\'INFO : \"ScriptingName is not available for the Polygon Mesh (it\'s only for commands)\"\n\
\'INFO : \"ScriptName is not available for the Polygon Mesh (it\'s only for parameters)\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"GEOMETRY INFO..............\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Name = polymsh\"\n\
\'INFO : \"FullName = polymsh\"\n\
\'INFO : \"ScriptingName is not available for the polymsh (it\'s only for commands)\"\n\
\'INFO : \"ScriptName is not available for the polymsh (it\'s only for parameters)\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"PARAMETER INFO..............\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Object required for oCube.activeprimitive.parameters(0)\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"PROPERTIES INFO..............\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Name = Kinematics\"\n\
\'INFO : \"FullName = cube.kine\"\n\
\'INFO : \"ScriptingName is not available for the Kinematics (it\'s only for commands)\"\n\
\'INFO : \"ScriptName is not available for the Kinematics (it\'s only for parameters)\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"PARAMETER INFO..............\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Name = Name\"\n\
\'INFO : \"FullName = cube.Name\"\n\
\'INFO : \"ScriptingName is not available for the Name (it\'s only for commands)\"\n\
\'INFO : \"ScriptName = Name\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"COMMAND INFO..............\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Name = Volumic\"\n\
\'INFO : \"FullName = Volumic\"\n\
\'INFO : \"ScriptingName = AddProp\"\n\
\'INFO : \"ScriptName is not available for the Volumic (it\'s only for parameters)\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"OPERATOR INFO..............\"\n\
\'INFO : \"-------------------------------------------------------------------\"\n\
\'INFO : \"Name = Twist Op\"\n\
\'INFO : \"FullName = cube.polymsh.twistop\"\n\
\'INFO : \"ScriptingName is not available for the Twist Op (it\'s only for commands)\"\n\
\'INFO : \"ScriptName is not available for the Twist Op (it\'s only for parameters)\"\n\
\'INFO : \"-------------------------------------------------------------------\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> <a href=\"#!/url=./si_om/Command.ScriptingName.html\">Command.ScriptingName</a> <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";