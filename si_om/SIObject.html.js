var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIObject</title>\n\
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
            <h1>SIObject</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIObject</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_SIObject\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">SIObject</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> SIObject exposes properties and methods that are supported by practically every object in the \n\
Softimage Object Model, such as the name of the object, its type and parent. <br /><br />\n\
Some very basic Softimage objects do not support SIObject, for example <a href=\"#!/url=./si_om/GridData.html\">GridData</a>, \n\
<a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> and <a href=\"#!/url=./si_om/Image.html\">Image</a> (see the <a href=\"#!/url=./si_om/_hier.html#oh_HierarchyMap\">Object Hierarchy</a> \n\
for a complete list.  For this reason some caution must be used to avoid assuming that all objects \n\
support <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> and <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
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
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example outputs an object\'s properties\n\
\'\n\
Option Explicit\n\
MAIN()\n\
sub main()\n\
	On Error Resume Next\n\
	\' Create the scene\n\
	dim oObj\n\
	set oObj = ActiveProject.ActiveScene.Root.AddGeometry(\"Sphere\", \"NurbsSurface\")\n\
	LogSIObject oObj\n\
end sub\n\
\'------------------------------------------------------------------------------\n\
\' NAME:		LogSIObject\n\
\'\n\
\' INPUT:\n\
\'\n\
\' DESCRIPTION: logs SIObject properties\n\
\'------------------------------------------------------------------------------\n\
sub LogSIObject(in_obj)\n\
	Application.LogMessage \"Name: \" &amp; in_obj.Name\n\
	Application.LogMessage \"Class: \" &amp; typename(in_obj)\n\
	Application.LogMessage \"Type: \" &amp; in_obj.Type\n\
	Application.LogMessage \"Fullname: \" &amp; in_obj.FullName\n\
	Application.LogMessage \"Parent: \" &amp; in_obj.Parent.Name\n\
	Application.LogMessage \"Application : \" &amp; in_obj.Application.Name\n\
	Application.LogMessage \"Is Equal To Parent ? \" &amp; in_obj.IsEqualTo(in_obj.Parent)\n\
	Application.LogMessage \"Is Equal To Self ? \" &amp; in_obj.IsEqualTo(in_obj)	\n\
end sub</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' These objects all support SIObject\n\
Application.LogMessage IsSIObject( ActiveSceneRoot )\n\
Application.LogMessage IsSIObject( Dictionary.GetObject( \"Camera\" ) )\n\
Application.LogMessage IsSIObject( CreateObject( \"XSI.Application\" ) )\n\
Application.LogMessage IsSIObject( ActiveSceneRoot.AddNull() )\n\
\' A string cannot be accepted without conversion\n\
Application.LogMessage IsSIObject( \"Camera\" )\n\
\' XSICollection and GridData do not support SIObject\n\
Application.LogMessage IsSIObject( CreateObject( \"XSI.Collection\" ) )\n\
Application.LogMessage IsSIObject( XSIFactory.CreateGridData )\n\
function IsSIObject( in_obj )\n\
	\' One way to test if an object supports\n\
	\' SIObject is to call a method and see if\n\
	\' there is a scripting error.\n\
	\' Careful use of \"on error resume next\"\n\
	\' prevents the entire script form halting\n\
	dim strFullName\n\
	on error resume next\n\
	strFullName = in_obj.Fullname\n\
	if ( err &lt;&gt; 0 ) then\n\
		IsSIObject = false\n\
	else\n\
		IsSIObject = true    	\n\
	end if\n\
	\' Turn error checking back on\n\
	on error goto 0\n\
end function\n\
\' The above example logs the following results:\n\
\'INFO : True\n\
\'INFO : True\n\
\'INFO : True\n\
\'INFO : True\n\
\'INFO : False\n\
\'INFO : False\n\
\'INFO : False</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";