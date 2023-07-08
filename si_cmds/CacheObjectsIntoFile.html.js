var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CacheObjectsIntoFile</title>\n\
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
            <h1>CacheObjectsIntoFile</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CacheObjectsIntoFile</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Caches the specified list of objects into cache files.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CacheObjectsIntoFile( [ObjectsToCache], [PathID], [FirstFrame], [LastFrame], [FramesPerStep], [Overwrite], [ShowProgressbar], [Attributes], [Version], [AlternativePath], [KineAnimation], [TargetCacheObjects] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">ObjectsToCache		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
The <a href=\"#!/url=./files/listexpr.htm\">list</a> of objects to cache into files.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PathID		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 The index of the path template 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FirstFrame		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 The first frame at which caching begins.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LastFrame		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 The last frame at which caching stops.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
100			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FramesPerStep		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Defines how many frames to jump per frame.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Overwrite		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to overwrite the file if it exists 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ShowProgressbar		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to display a <a href=\"#!/url=./si_om/ProgressBar.html\">ProgressBar</a> during this operation 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Attributes		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 List of attributes to include 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
PointPosition			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Version		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Version id for cache file 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
A			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AlternativePath		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Alternative path to use (in case of failure)			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">KineAnimation		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to cache in global space			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TargetCacheObjects		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 If the cache format is Alembic, this will be used to specify the target objects in the OArchive			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"\"			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/CopyCacheFiles.html\">CopyCacheFiles</a> <a href=\"#!/url=./si_cmds/CopyExtFilesIntoProject.html\">CopyExtFilesIntoProject</a> <a href=\"#!/url=./si_cmds/CacheObjectsIntoFileDialog.html\">CacheObjectsIntoFileDialog</a> <a href=\"#!/url=./si_om/SimulationEnvironment.html\">SimulationEnvironment</a> <a href=\"#!/url=./si_om/ProgressBar.html\">ProgressBar</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";