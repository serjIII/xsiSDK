var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Control Object Primitives</title>\n\
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
            <h1>Control Object Primitives</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Control Object Primitives</h2>\n\
\n\
<div>\n\
	<p>Control object primitive presets (including both waves and forces) can be used with the <a href=\"#!/url=./si_om/X3DObject.AddPrimitive.html\">X3DObject.AddPrimitive</a> method or one of the primitive-creation commands (<a href=\"#!/url=./si_cmds/GetPrim.html\">GetPrim</a>, <a href=\"#!/url=./si_cmds/SIGetPrim.html\">SIGetPrim</a>).</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">See <a href=\"#!/url=./si_cmds/PrimPreset.html\">Primitive Presets</a> for list of the possible types of primitives. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllPrimitives.html#\">Alphabetical Listing of All Primitive Presets</a> for a complete list of available primitive types.</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Primitives</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Attractor</td>\n\
		<td><a name=\"Attractor\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/attractor.html\">Attractor forces</a> simulate the effect of electro-magnetism in both positive and negative directions to attract and repel particles and hair. The Attractor force has no effect on Fluid, Explosion, Soft body, or Cloth simulations.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Drag</td>\n\
		<td><a name=\"Drag\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/drag.html\">Drag forces</a> oppose the movement of particles and hair as if they were in a fluid medium. You can set the flow type to be either smooth or irregular.  Drag has no effect on Fluid, Explosion, Soft body, or Cloth simulations.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Eddy</td>\n\
		<td><a name=\"Eddy\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/eddy.html\">Eddy forces</a> simulate the effect of a vacuum or local turbulence on particles, hair, and cloth by creating a vortex force field inside a cylinder. The eddy\'s intensity falls off from the center to the cylinder\'s border, moving from bottom to top. Eddy has no effect on Soft body simulations.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Fan</td>\n\
		<td><a name=\"Fan\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/fan.html\">Fan forces</a> simulate the effect of a \"local\" wind blowing via a cylinder on other objects. The wind\'s direction follows with cylinder\'s axis, while wind\'s intensity falls off from the center to the cylinder\'s border, moving from bottom to top. Fan has no effect on Soft body simulations.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Gravity</td>\n\
		<td><a name=\"Gravity\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/gravity.html\">Gravity forces</a> simulate a gravitational pull on objects, including in a negative direction.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SphereVolume</td>\n\
		<td><a name=\"SphereVolume\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/volume_deform.html\">Sphere Volume control objects</a> are	 used to pull points within its volume with a proportional fall-off. See the <a href=\"#!/url=./si_cmds/GetPrimVolumeDeform.html\">GetPrimVolumeDeform</a> command.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ToricForce</td>\n\
		<td><a name=\"ToricForce\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Toric_Force.html\">Toric forces</a> simulate the effect of a vacuum or local turbulence by creating a vortex force field inside the torus. Anything that is inside the torus is affected by the force. This force is useful for making billowing effects in smoke simulations (especially when used in conjunction with the drag force) or having particles \"sucked\" through a tube to follow a path (if the torus is open-ended).<br /><br />The toric force has no effect on Fluid, Explosion, Soft body, or Cloth simulations.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Turbulence</td>\n\
		<td><a name=\"Turbulence\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/turbulence.html\">Turbulence forces</a> build a wind field to let you imitate real-life turbulence effects, such as the violent gusts of air that occur when an airplane lands. A wind field is created by superimposing a small scale random field over a large scale deterministic field. Intensity is applied to the whole wind field.<br /><br />You can control the orientation of the large scale wind field and the frequency of the eddies in the small scale wind field. As well, you can control the wind field direction (phase angle) independently of the turbulence direction (force direction).<br /><br />Turbulence has no effect on Fluid, Explosion, Soft body, or Cloth simulations.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Vortex</td>\n\
		<td><a name=\"Vortex\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/vortex.html\">Vortex forces</a> simulate the swirling movement of a vortex on particles and hair. Vortex has no effect on Fluid, Explosion, Soft body, or Cloth simulations.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Wave</td>\n\
		<td><a name=\"Wave\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/wave.html\">Wave control objects</a> control the basic parameters that are intrinsic to the wave itself, such as its speed and shape. Each wave control object can be used to deform any number of objects in a scene. See the <a href=\"#!/url=./si_cmds/GetPrimWave.html\">GetPrimWave</a> command.<br /><br />		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Wind</td>\n\
		<td><a name=\"Wind\"></a><a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/wind.html\">Wind forces</a> simulate the effect of wind blowing on simulated objects.<br /><br />		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";