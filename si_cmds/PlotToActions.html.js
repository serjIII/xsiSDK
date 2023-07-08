var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PlotToActions</title>\n\
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
            <h1>PlotToActions</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PlotToActions</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates and returns new actions by plotting values from consecutive frames \n\
of an animation. Actions are created under models containing animated \n\
parameters matching the specified list.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PlotToActions( [InputObj], [Name], [StartFrame], [EndFrame], [StepFrame], [FCurve Kind], [DefaultSegKind], [Fit FCurve], [Fit Tolerance], [ProcessContRots] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the created actions (a <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> object).</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> \n\
		of parameters to plot into actions.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Marked values in current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name for the actions 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Action\"			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 First frame to plot 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Last frame to plot 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StepFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Step between frames 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">FCurve Kind		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 What kind of fcurve do we want to plot to? 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
20			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">10					</td>\n\
					<td>BOOLEAN (value true or false)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">15					</td>\n\
					<td>INTEGER (staircase-like fcurve with integer values)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">20					</td>\n\
					<td>STANDARD (fcurve with spline/linear/constant interpolation)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">30					</td>\n\
					<td>RAWDATA (linear fcurve: less storage than a standard fcurve but with linear interpolation only)					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DefaultSegKind		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 What kind of interpolation do we want for the resulting fcurves? <br /><br />\n\
	Note: Only relevant when FCurveKind is 20 (Standard).			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>CONSTANT					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>LINEAR					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>CUBIC					</td>\n\
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
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//\n\
// This example sets up one model with a sphere and another with a cone,\n\
// marks the local posz parameter of each primitive, plots various parameters\n\
// to an action source for each model, and then prints out the new sources.\n\
//\n\
// Set up the scene.\n\
NewScene( null, false );\n\
var oSphere = CreatePrim( \"Sphere\", \"NurbsSurface\", \"MySphere\" );\n\
var oCone = CreatePrim( \"Cone\", \"NurbsSurface\", \"MyCone\" );\n\
CreateModel( oSphere, \"SphereModel\" );\n\
CreateModel( oCone, \"ConeModel\" );\n\
// Create a path for the sphere and cone, just to make things more interesting.\n\
var oPath = CreatePrim( \"Spiral\", \"NurbsCurve\" );\n\
ApplyPath( oSphere, oPath, 1, 50, 2, true, true );\n\
ApplyPath( oCone, oPath, 50, 100, 2, true, true );\n\
// Mark the local position parameter in Z for the sphere and cone.\n\
SelectObj( oSphere + \",\" + oCone, null, true );\n\
SetMarking( \"kine.local.posz\" );\n\
// Plot the values of the marked parameter for the sphere and cone between frames 20 and 60.\n\
// Notice that the default input is the marked parameters, so\n\
// we do not have to specify anything for the 1st argument\n\
PlotToActions( null, null, 20, 60 );\n\
// Plot the local X position of the sphere and cone every frame between frames 20 and 60 \n\
// and store the result in raw data fcurves.\n\
PlotToActions( oSphere + \".kine.local.posx,\" + oCone + \".kine.local.posx\",\n\
			\"ActionPosX\", 20, 60, 1, 30 );\n\
// Plot the local Y position of the sphere only every frame between frames 20 and 60\n\
// and store the result in a standard fcurve with constant interpolation after \n\
// applying a fit with a tolerance of 0.1 to the plotted values.\n\
PlotToActions( oSphere.posy, \"ActionPosY\", 20, 60, 1, 30, 1, true, 0.1, true );\n\
// Once they are created, they are stored with the scene waiting to be applied\n\
var oRoot = Application.ActiveSceneRoot;\n\
var oModelsFound = oRoot.Models;\n\
var iModelsCount = oModelsFound.Count;\n\
if( iModelsCount &gt; 0 )\n\
{\n\
	for( var i = 0; i &lt; iModelsCount; i++ )\n\
	{\n\
		var oModel = oModelsFound.Item( i );\n\
		var oSourcesFound = oModel.Sources;\n\
		var iSourcesCount = oSourcesFound.Count;\n\
		if( iSourcesCount &gt; 0 )\n\
		{\n\
			Application.LogMessage( \"Found the following sources in \" + oModel + \":\" );\n\
			for( var j = 0; j &lt; iSourcesCount; j++ )\n\
			{\n\
				Application.LogMessage( \"\\t\" + oSourcesFound.Item( j ).Name );\n\
			}\n\
		}\n\
		else\n\
		{\n\
			Application.LogMessage( \"No sources found in \" + oModel + \".\" );\n\
		}\n\
	}\n\
}\n\
else\n\
{\n\
	Application.LogMessage( \"No models found in the scene.\" );\n\
}\n\
//---------------------------------------------------------\n\
// OUTPUT OF ABOVE SCRIPT IS:\n\
// INFO : Found the following sources in SphereModel:\n\
// INFO : 	Action\n\
// INFO : 	ActionPosX\n\
// INFO : 	ActionPosY\n\
// INFO : Found the following sources in ConeModel:\n\
// INFO : 	Action\n\
// INFO : 	ActionPosX\n\
//---------------------------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/PlotAndApplyActions.html\">PlotAndApplyActions</a> <a href=\"#!/url=./si_cmds/PlotConstrainedTransformsToActions.html\">PlotConstrainedTransformsToActions</a> <a href=\"#!/url=./si_cmds/PlotKeyableToActions.html\">PlotKeyableToActions</a> <a href=\"#!/url=./si_cmds/StoreAction.html\">StoreAction</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";