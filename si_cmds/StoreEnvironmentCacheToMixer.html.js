var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>StoreEnvironmentCacheToMixer</title>\n\
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
            <h1>StoreEnvironmentCacheToMixer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">StoreEnvironmentCacheToMixer</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Stores the environment cache as a new action in the mixer. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = StoreEnvironmentCacheToMixer( EnvironmentCache, [Name], [AddClip] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the new action created as an <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EnvironmentCache		</td>\n\
		<td><a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a>		</td>\n\
		<td>\n\
\n\
		Specify the cache to use. If the environment is not specified then the current \n\
		environment is used. If there is no current environment then the task does nothing.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the new action. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AddClip		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to apply the new actions as a clip on the mixer after storing. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create a simple simulation of two spheres falling on a grid\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
SetValue \"sphere.sphere.radius\", 1\n\
Translate , -3, 7, 0, siAbsolute, siView, siObj, siXYZ, True, \"Views.ViewC.FrontCamera\", siXY, , , , , , , 0\n\
Duplicate \"sphere\", , 2, 1, 1, 0, 0, 1, 0, 1, , , , , , , , , , , 0\n\
Translate , -2, 12, 0, siAbsolute, siView, siObj, siXYZ, True, \"Views.ViewC.FrontCamera\", siXY, , , , , , , 0\n\
CreatePrim \"Grid\", \"MeshSurface\"\n\
SetValue \"grid.grid.ulength\", 50\n\
SetValue \"grid.grid.vlength\", 50\n\
\' Set the spheres as active rigid bodies and set their collision\n\
\' type to bounding sphere\n\
CreateActiveRigidBody \"sphere1,sphere\"\n\
SetValue \"sphere1.RigidBodyProp.colltype,sphere.RigidBodyProp.colltype\", Array(1, 1)\n\
\' Set the grid as a passive rigid body\n\
CreatePassiveRigidBody \"grid\"\n\
\' Add gravity\n\
CreateForce \"Gravity\"\n\
\' Turn on caching in the environment time control\n\
SetValue \"Environments.Environment.simtimectrl.caching\", True\n\
\' Go to the last frame so that the simulation computes and stores\n\
\' into the cache\n\
LastFrame\n\
Refresh\n\
\' Copy the cache to the mixer. We pass true as the addclip parameter.\n\
\' This means that a clip will also be added in the mixer on a new\n\
\' track. Also, having this parameter set to true will mute the \n\
\' simulation so that the mixer animation doesn\'t feedback back into the \n\
\' simulation.\n\
set oEnvironment = ActiveProject.ActiveScene.ActiveSimulationEnvironment\n\
StoreEnvironmentCacheToMixer oEnvironment.Caches(0), \"SimulationRun\", True\n\
\' Now if you playback. What you will see is the animation played\n\
\' from by mixer. You can mute the mixer track, reactivate the\n\
\' simulation, tweak some simulation parameters and store another\n\
\' cache into the mixer. Once you have a series of such actions,\n\
\' review them and chose the one that you prefer.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";