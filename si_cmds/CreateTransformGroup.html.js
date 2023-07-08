var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateTransformGroup</title>\n\
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
            <h1>CreateTransformGroup</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateTransformGroup</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Reparents the objects in the input list under a transform group object. A transform group is a special \n\
type of null that allows you to parent a number of objects for group transformations. Transform groups \n\
are not visible by default. Transform groups can be made visible in Camera Visibility > Objects > Control \n\
Objects > Transform Groups. Note that a transform group is not the same as a <a href=\"#!/url=./si_om/Group.html\">Group</a>. \n\
Unlike transform groups, groups are not 3D objects and do not affect the parenting of their members.<br /><br /> \n\
This command positions a transform group null at the location of the nearest common ancestor of all the \n\
objects in the input list. If there are no input objects, the transform group will be placed under the \n\
scene root. The command branch selects the new transform group. <br /><br />\n\
Note: Bones cannot be part of a transform group because they cannot be reparented.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = CreateTransformGroup( [Name], [InputObjs] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the transform-group (an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> object).</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the group 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Group\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to put in the group. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example will transform group a cone twice, making a hierarchy 3 objects deep. \n\
	Each object will be offset by 5 units in Y.\n\
*/\n\
// Make transform groups visible in the camera view\n\
SetValue(\"Camera.camvis.objctrltransfogroups\", true, null);\n\
// Create and position the cone\n\
var oCone = CreatePrim(\"Cone\", \"MeshSurface\");\n\
var pos = XSIMath.CreateVector3();\n\
pos.Set(0,5,0);\n\
oCone.LocalTranslation = pos;\n\
// Transform group the cone and offset the group 5 units in Y\n\
var oXfmGroup = CreateTransformGroup(null, \"cone\");\n\
LogMessage(\"---1st group created---\");\n\
LogMessage(\"1st group\'s parent:\" + oXfmGroup.Parent);\n\
LogMessage(\"1st group         :\" + oXfmGroup.Name);\n\
LogMessage(\"1st group\'s child :\" + oXfmGroup.Children(0));\n\
oXfmGroup.LocalTranslation = pos;\n\
// Group the cone again offset the new group.\n\
var oXfmGroup2 = CreateTransformGroup(null, \"cone\");\n\
//Move the Transform Group up\n\
oXfmGroup2.LocalTranslation = pos;\n\
LogMessage(\"-----------------------\");\n\
LogMessage(\"---2nd group created---\");\n\
LogMessage(\"1st group\'s parent:\" + oXfmGroup.Parent);\n\
LogMessage(\"1st group         :\" + oXfmGroup.Name);\n\
LogMessage(\"1st group\'s child :\" + oXfmGroup.Children(0));\n\
LogMessage(\"-----------------------\");\n\
LogMessage(\"2nd group\'s parent:\" + oXfmGroup2.Parent);\n\
LogMessage(\"2nd group         :\" + oXfmGroup2.Name);\n\
LogMessage(\"2nd group\'s child :\" + oXfmGroup2.Children(0));\n\
/////////////////////////////////////\n\
// Output from running this script:\n\
/////////////////////////////////////\n\
//INFO : ---1st group created---\n\
//INFO : 1st group\'s parent:Scene_Root\n\
//INFO : 1st group         :transfogroup\n\
//INFO : 1st group\'s child :cone\n\
//INFO : -----------------------\n\
//INFO : ---2nd group created---\n\
//INFO : 1st group\'s parent:Scene_Root\n\
//INFO : 1st group         :transfogroup\n\
//INFO : 1st group\'s child :transfogroup1\n\
//INFO : -----------------------\n\
//INFO : 2nd group\'s parent:transfogroup\n\
//INFO : 2nd group         :transfogroup1\n\
//INFO : 2nd group\'s child :cone</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RemoveTransformGroup.html\">RemoveTransformGroup</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";