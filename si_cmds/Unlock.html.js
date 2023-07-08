var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Unlock</title>\n\
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
            <h1>Unlock</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Unlock</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Unlocks an object and all its children, or a specific parameter.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Unlock( [InputObjs], [Level], [Password], [RemoveAll] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to lock. Can be objects or parameters. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Level		</td>\n\
		<td><a href=\"#!/url=./si_om/siLockLevel.html\">siLockLevel</a>		</td>\n\
		<td>\n\
The lock level is a bit field value that represent a area that is locked.\n\
The maximum level is siLockLevelAll which is all the level combined. One or many level can be set on an object. \n\
When the level is 0 (siLockLevelNone) the lock is removed. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siLockLevelAll			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Password		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
If the scene locks are protected by a password, the password needs to be supplied to unlock objects.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RemoveAll		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Force removing all locks information (all lock masters) on the object and on all its children including the parameters locked.\n\
	<br /><br />Note that when this flag is True, any objects (not locked or locked) can be selected. For example if the scene root object \n\
is selected then all locks in the scene will be removed. This can be used to clean a scene for example. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript example that show how to lock an unlock object and parameters\n\
NewScene(null, null);\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
CreatePrim(\"Cube\", \"MeshSurface\", null, null);\n\
// Lock the subdivu parameter on the cone.\n\
Lock(\"cone.polymsh.geom.subdivu\", siLockLevelManipulation);\n\
// Lock the Cube object\n\
Lock(\"cube\", siLockLevelAll);\n\
// Now unlock the parameter.\n\
Unlock(\"cone.polymsh.geom.subdivu\", siLockLevelAll, null, null);\n\
// Display the lock level, (siLockLevelAll)\n\
var oObj = GetValue(\"cube\")\n\
logmessage (\"The level of lock for the cube is : \" + oObj.LockLevel);\n\
// We can unlock only one of the level and keep the others.\n\
Unlock(\"cube\", siLockLevelManipulation, null, null);\n\
// Display the lock level, (siLockLevelConstruction + siLockLevelAnimation)\n\
var oObj = GetValue(\"cube\")\n\
logmessage (\"The level of lock for the cube is : \" + oObj.LockLevel);\n\
// then unlock everything\n\
Unlock(\"cube\", siLockLevelAll, null, null);\n\
// Display the lock level, (siLockLevelNone)\n\
var oObj = GetValue(\"cube\")\n\
logmessage (\"The level of lock for the cube is : \" + oObj.LockLevel);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Lock.html\">Lock</a> <a href=\"#!/url=./si_cmds/InspectLocks.html\">InspectLocks</a> <a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">ProjectItem.SetLock</a> <a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">ProjectItem.UnSetLock</a> <a href=\"#!/url=./si_om/Parameter.SetLock.html\">Parameter.SetLock</a> <a href=\"#!/url=./si_om/Parameter.UnSetLock.html\">Parameter.UnSetLock</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";