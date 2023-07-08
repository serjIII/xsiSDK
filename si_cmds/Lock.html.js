var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Lock</title>\n\
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
            <h1>Lock</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Lock</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p />\n\
Locks an object and all its children, or lock a parameter. <br /><br />\n\
Note: If you try to lock an object that is already locked, the History Pane \n\
displays the error message \'ERROR : \"2087 - The object: <object> is locked.\"\n\
and the command returns Nothing.\n\
<p /></object></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Lock( [InputObjs], [Level] );</pre>		</td>	</tr>\n\
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
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript example that show basic lock and unlock usage\n\
NewScene(null, null);\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
CreatePrim(\"Cylinder\", \"MeshSurface\", null, null);\n\
CopyPaste(\"cylinder\", null, \"cone\", 1);\n\
// This will lock in branch the cone. (the cylinder will also be locked.\n\
Lock(\"B:Cone\", siLockLevelAll);\n\
// The object is locked so it cannot be modified, the following commented line\n\
// for example would fail as follow: ERROR : \"2009-EDIT-SetValue - Access denied\"\n\
// SetValue(\"cone.polymsh.geom.subdivu\", 13, null);\n\
// Now unlock the object in branch. \n\
SelectObj(\"cone\", \"BRANCH\", null);\n\
Unlock(null, siLockLevelAll, null, null);\n\
// now the setvalue is working.\n\
SetValue(\"cone.polymsh.geom.subdivu\", 13, null);</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript example that show how to work with levels of locking.\n\
NewScene(null, null);\n\
CreatePrim(\"Disc\", \"MeshSurface\", null, null);\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
Lock(\"cone\", siLockLevelConstruction);\n\
// The object is locked in construction, so we can change the parameters values but not the hierarchy.\n\
// So this is working...\n\
SetValue(\"cone.polymsh.geom.subdivu\", 13, null);\n\
// But not this...\n\
//ERROR : \"2087 - The object: cone is locked.\"\n\
//ERROR : \"2009-EDIT-CopyPaste - Access denied\"\n\
try {\n\
CopyPaste(\"Disc\", null, \"cone\", 1);\n\
}\n\
catch (e) {\n\
	logmessage (\"this is normal,since it is locked\");\n\
}\n\
// Now add to the lock the manipulatio level that will prevent changing the parameter values.\n\
Lock(\"cone\", siLockLevelManipulation);\n\
// Now this is not working...\n\
//ERROR : \"2087 - The object: cone.polymsh.geom.subdivu is locked.\"\n\
//ERROR : \"2009-EDIT-SetValue - Access denied\"\n\
try {\n\
SetValue(\"cone.polymsh.geom.subdivu\", 5, null);\n\
}\n\
catch (e) {\n\
	logmessage (\"this is normal,since it is locked\");\n\
}\n\
// Display the lock level, ( in this case it is 5 which is siLockLevelConstruction &amp; siLockLevelManipul\n\
var oObj = GetValue(\"cone\")\n\
logmessage (\"The level of lock for the cone is : \" + oObj.LockLevel);\n\
// Unlock just the construction level of the lock \n\
Unlock(\"cone\", siLockLevelConstruction, null, null);\n\
// Display the lock level, ( in this case it is 0 since by removing the construction level all other levels have been removed \n\
var oObj = GetValue(\"cone\")\n\
logmessage (\"The level of lock for the cone is : \" + oObj.LockLevel);</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript example that show how to lock a parameter\n\
NewScene(null, null);\n\
CreatePrim(\"Cone\", \"MeshSurface\", null, null);\n\
// This will lock only the subdivu parameter.\n\
Lock(\"cone.polymsh.geom.subdivu\", siLockLevelManipulation);\n\
// The object is locked so it cannot be modified, for example this will fail.\n\
//ERROR : \"2009-EDIT-SetValue - Access denied\"\n\
try {\n\
SetValue(\"cone.polymsh.geom.subdivu\", 13, null);\n\
}\n\
catch (e) {\n\
	logmessage (\"this is normal,since it is locked\");\n\
}\n\
// But the subdivv is working!\n\
SetValue(\"cone.polymsh.geom.subdivv\", 4, null);\n\
// Now unlock the parameter.\n\
Unlock(\"cone.polymsh.geom.subdivu\", siLockLevelAll, null, null);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Unlock.html\">Unlock</a> <a href=\"#!/url=./si_cmds/InspectLocks.html\">InspectLocks</a> <a href=\"#!/url=./si_om/ProjectItem.SetLock.html\">ProjectItem.SetLock</a> <a href=\"#!/url=./si_om/ProjectItem.UnSetLock.html\">ProjectItem.UnSetLock</a> <a href=\"#!/url=./si_om/Parameter.SetLock.html\">Parameter.SetLock</a> <a href=\"#!/url=./si_om/Parameter.UnSetLock.html\">Parameter.UnSetLock</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";