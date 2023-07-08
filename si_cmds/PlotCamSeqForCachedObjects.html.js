var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PlotCamSeqForCachedObjects</title>\n\
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
            <h1>PlotCamSeqForCachedObjects</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PlotCamSeqForCachedObjects</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v12.0 (2014)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
			Plot file cached objects to new cache files in Camera Sequencer time.\n\
		</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oArray = PlotCamSeqForCachedObjects( [Path], [SequencerIn], [SequencerOut], [PlotWithoutGaps], [Attributes], [UseGlobalKine] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
			An <a href=\"#!/url=./files/Array.htm\">Array</a> consisting of a comma-delimited <a href=\"#!/url=./files/String.htm\">String</a> containing object names, a comma-delimited <a href=\"#!/url=./files/String.htm\">String</a> containing the location to plotted cache files, a collection of cache clips that will be deleted.\n\
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
		<td class=\"name\">Path		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 The target path to put plotted cache files. The filename needs to contain a \"_#\" token.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SequencerIn		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Start Camera Sequencer frame to plot			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SequencerOut		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 End Camera Sequencer frame to plot			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
100			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PlotWithoutGaps		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Determine whether or not to ignore the gaps between ShotClips. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Attributes		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 List of attributes to include. If not specified, all attributes will be plotted. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UseGlobalKine		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to plot in global space. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">\"\"\"\n\
The sample code demonstrates how to construction a camera sequencer shot with cached ICE simulations\n\
\"\"\"\n\
# 1) Create a basic emission from grid and cache the ICE simulation to file\n\
Application.NewScene( \"\", False )\n\
Application.CreatePrim(\"Grid\", \"MeshSurface\", \"\", \"\")\n\
Application.ICEFlow_CreateParticles(\"\", \"\", \"\")\n\
Application.CacheObjectsIntoFile( \"pointcloud\", 5, 1, 100, 1, True, True, \n\
 \"Color,Force,Mass,NbSubSamples,Orientation,PointPosition,PointVelocity,Scale,Shape,SimulatedFrameFraction,Size,State_ID\", \n\
 \"ICECache1\",\n\
 XSIUtils.BuildPath( \"[project path]\", \"Simulation\", \"[model]\", \"[object]\", \"[object]_ICECache1_#.icecache\" ), \n\
 False )\n\
\n\
# 2) Create a new point cloud and apply the cached simulation\n\
Application.NewScene( \"\", False )\n\
Application.GetPrim( \"pointcloud\", \"ice_cached_cloud\" )\n\
Application.AddFileCacheSource( \"ice_cached_cloud\", \n\
 XSIUtils.BuildPath( \"[project path]\", \"Simulation\", \"scene_root\", \"pointcloud\", \"pointcloud_ICECache1_[1..100].icecache\" ), \n\
 \"\", \"\" )\n\
	\n\
# 3) Create Camera Sequencer Shot Clips\n\
Application.AddShotClip( \"\", \"Shot1\", \"\", 1, 80, 99 )\n\
Application.AddShotClip( \"\", \"Shot2\", \"\", 25, 1, 31 )\n\
Application.AddShotClip( \"\", \"Shot3\", \"\", 60, 80, 99 )\n\
\n\
Application.SceneRefresh()\n\
\n\
# 4) Plot the cached ICE simulation in the Camera Sequencer\n\
RetVal = Application.PlotCamSeqForCachedObjects( XSIUtils.BuildPath( \"[project path]\", \"Simulation\", \"CamSeq\", \"ice_cached_cloud_CamSeqCache_#.icecache\" ), \n\
 1, 100, \"\", \"\", False )\n\
\n\
Application.LogMessage( \"Name of cached cloud: \" + RetVal[0] )\n\
Application.LogMessage( \"Location of cache files: \" + RetVal[1] )\n\
Application.LogMessage( \"Collection of clips to be deleted: \" + RetVal[2].GetAsText() )\n\
\n\
# 5) Re-apply plotted cache simulation back to the pointcloud\n\
Application.ApplyCamSeqFileCacheSources( RetVal[0], RetVal[1], RetVal[2] )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyCamSeqFileCacheSources.html\">ApplyCamSeqFileCacheSources</a> <a href=\"#!/url=./si_cmds/PlotCamSeqToActions.html\">PlotCamSeqToActions</a> <a href=\"#!/url=./si_cmds/PlotFrameSetToActions.html\">PlotFrameSetToActions</a> <a href=\"#!/url=./si_cmds/PlotCamSeqShape.html\">PlotCamSeqShape</a> <a href=\"#!/url=./si_cmds/PlotSequencerCamera.html\">PlotSequencerCamera</a> <a href=\"#!/url=./si_cmds/GetSceneFrameSetFromCamSeq.html\">GetSceneFrameSetFromCamSeq</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";