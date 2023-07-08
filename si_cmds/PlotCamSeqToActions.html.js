var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PlotCamSeqToActions</title>\n\
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
            <h1>PlotCamSeqToActions</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PlotCamSeqToActions</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v12.0 (2014)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates and returns new actions by plotting values from consecutive Camera Sequencer frames. Actions are created under models containing animated parameters matching\n\
the specified list.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PlotCamSeqToActions( [InputObjs], [ActionName], [SequencerIn], [SequencerOut], [PlotWithoutGaps], [FCurve Kind], [DefaultSegKind], [Fit FCurve], [Fit Tolerance], [ProcessContRots], [Apply], [Delete] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the created actions (a <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> object). Returns nothing if you chose the Delete option.</p></div>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of parameters to plot into actions. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
All animated parameters in the scene (ie., every animated parameter on each object in the scene). 			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ActionName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name for the new actions.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
CamSeq_PlotAction			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SequencerIn		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Start camera sequencer frame of the region on which to operate.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SequencerOut		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 End camera sequencer frame of the region on which to operate.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
		<td class=\"name\">FCurve Kind		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveType.html\">siFCurveType</a>		</td>\n\
		<td>\n\
 What kind of fcurve do we want to plot to? 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siStandardFCurve			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siBooleanFCurve					</td>\n\
					<td>BOOLEAN (value true or false)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siIntegerFCurve					</td>\n\
					<td>INTEGER (staircase-like fcurve with integer values)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siStandardFCurve					</td>\n\
					<td>STANDARD (fcurve with spline/linear/constant interpolation)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siRawDataFCurve					</td>\n\
					<td>RAWDATA (linear fcurve: less storage than a standard fcurve but with linear interpolation only)					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DefaultSegKind		</td>\n\
		<td><a href=\"#!/url=./si_om/siFCurveInterpolation.html\">siFCurveInterpolation</a>		</td>\n\
		<td>\n\
 What kind of interpolation do we want for the resulting fcurves? <br /><br />\n\
	Note: Only relevant when FCurveKind is 20 (Standard).			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siCubicInterpolation			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siConstantInterpolation					</td>\n\
					<td>Constant function					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siLinearInterpolation					</td>\n\
					<td>Linear function					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siCubicInterpolation					</td>\n\
					<td>Bezier cubic function					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Fit FCurve		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Do we want to fit an fcurve through the plotted values? 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Fit Tolerance		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 What tolerance do we want for the fit? 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0.01			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ProcessContRots		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Do we want to process rotation curves to ensure their continuity?			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Apply		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Do we want to apply the actions after plotting them? 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Delete		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 After plotting and applying, do we want to delete the actions? Only valid if Apply is specified. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/PlotFrameSetToActions.html\">PlotFrameSetToActions</a> <a href=\"#!/url=./si_cmds/PlotCamSeqShape.html\">PlotCamSeqShape</a> <a href=\"#!/url=./si_cmds/PlotSequencerCamera.html\">PlotSequencerCamera</a> <a href=\"#!/url=./si_cmds/PlotCamSeqForCachedObjects.html\">PlotCamSeqForCachedObjects</a> <a href=\"#!/url=./si_cmds/ApplyCamSeqFileCacheSources.html\">ApplyCamSeqFileCacheSources</a> <a href=\"#!/url=./si_cmds/GetSceneFrameSetFromCamSeq.html\">GetSceneFrameSetFromCamSeq</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";