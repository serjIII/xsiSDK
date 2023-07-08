var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Property (Object) Presets</title>\n\
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
            <h1>Property (Object) Presets</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Property (Object) Presets</h2>\n\
\n\
<div>\n\
	<p>\n\
				List of available Property (Object) <a href=\"#!/url=./si_om/Property.html\">Property</a> presets. These presets can be used to create <a href=\"#!/url=./si_om/Property.html\">Property</a> objects on <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>s, and partial or complete <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>s using the <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> method.\n\
			</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Warning</td>\n\
		<td class=\"emph\">\n\
				Some of these presets can only be added to <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>s. Such cases are indicated in the table below.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">\n\
				See <a href=\"#!/url=./si_cmds/PropPreset.html\">Property Presets</a> for property classification. Also see <a href=\"#!/url=./si_cmds/AlphabeticalListOfAllPropertyPresets.html\">Alphabetical Listing of All Property Presets</a> for a complete list of available property types.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Preset</th>\n\
		<th>Properties</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Add-on.Preset</td>\n\
		<td><a name=\"Addon\"></a>Override Scene Object Property. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Override.html\">#Override</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Ambient Lighting Property.Preset</td>\n\
		<td><a name=\"Ambient_Lighting_Property\"></a>Ambient Lighting<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/AmbientLighting.html\">AmbientLighting</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AttributeDisplay.Preset</td>\n\
		<td><a name=\"AttributeDisplay\"></a>Attribute Display<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/attributedisplay.html\">attributedisplay</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Cloth.Preset</td>\n\
		<td><a name=\"Cloth\"></a>Cloth Property<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/ClothProp.html\">ClothProp</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Display Property.Preset</td>\n\
		<td><a name=\"Display_Property\"></a>display Softimage Object Property. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/display.html\">display</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DynamicsInfo.Preset</td>\n\
		<td><a name=\"DynamicsInfo\"></a>Dynamics Info Property<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/dyna.html\">dyna</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DynamicsInitState.Preset</td>\n\
		<td><a name=\"DynamicsInitState\"></a>Dynamics Initial State<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/DynamicsInitState.html\">DynamicsInitState</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Emission Property.Preset</td>\n\
		<td><a name=\"Emission_Property\"></a>EmissionProp Softimage Object Property. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/EmissionProp.html\">EmissionProp</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ForceControl.Preset</td>\n\
		<td><a name=\"ForceControl\"></a>Force Controller<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/forcecontrol.html\">forcecontrol</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GeomApprox.Preset</td>\n\
		<td><a name=\"GeomApprox\"></a>Geometry Approximation<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/geomapprox.html\">geomapprox</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InertiaProp.Preset</td>\n\
		<td><a name=\"InertiaProp\"></a>Inertial Properties<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/InertialProps.html\">InertialProps</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MappingTemplate.Preset</td>\n\
		<td><a name=\"MappingTemplate\"></a><span style=\"font-family: courier, monospace;\">MappingTemplate</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MotionBlur.Preset</td>\n\
		<td><a name=\"MotionBlur\"></a>Motion Blur Properties<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/motionblur.html\">motionblur</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Obstacle Property.Preset</td>\n\
		<td><a name=\"Obstacle_Property\"></a>ObstacleProp Softimage Object Property. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/ObstacleProp.html\">ObstacleProp</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Override.Preset</td>\n\
		<td><a name=\"Override\"></a>Override Scene Object Property. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/Override.html\">#Override</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParticleDisplay.Preset</td>\n\
		<td><a name=\"ParticleDisplay\"></a>Particle Display<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/particledisplay.html\">particledisplay</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ParticleInitialStateProp.Preset</td>\n\
		<td><a name=\"ParticleInitialStateProp\"></a>Initial State Property<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/ParticleInitState.html\">ParticleInitState</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RenderMap.Preset</td>\n\
		<td><a name=\"RenderMap\"></a>Render Map Property<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/rendermap.html\">rendermap</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Retargeting Tag.Preset</td>\n\
		<td><a name=\"Retargeting_Tag\"></a>Retargeting Tag<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/RetargetTag.html\">RetargetTag</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RigidBodyProp.Preset</td>\n\
		<td><a name=\"RigidBodyProp\"></a>Rigid Body Properties<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/RigidBodyProp.html\">RigidBodyProp</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SimulTimeCtrl.Preset</td>\n\
		<td><a name=\"SimulTimeCtrl\"></a>Simulation Time Control<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/simtimectrl.html\">simtimectrl</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Synoptic Property.Preset</td>\n\
		<td><a name=\"Synoptic_Property\"></a>Synoptic View Property<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/synoptic.html\">synoptic</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Transform Setup.Preset</td>\n\
		<td><a name=\"Transform_Setup\"></a>Transform Setup<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/transformsetup.html\">transformsetup</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Visibility.Preset</td>\n\
		<td><a name=\"Visibility\"></a>visibility Softimage Object Property. <br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/visibility.html\">visibility</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">cameraflare.Preset</td>\n\
		<td><a name=\"cameraflare\"></a>Camera Lens Flare Property Set<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/CameraLensFlare.html\">CameraLensFlare</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">dglow.Preset</td>\n\
		<td><a name=\"dglow\"></a>Glow Local Property Set<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/dglow.html\">dglow</a> property parameter list information.		<div class=\"tip\">\n\
		<table cellpadding=\"5\" cellspacing=\"5\">\n\
			<tr>\n\
				<td class=\"label\">Note</td>\n\
				<td class=\"emph\">This preset cannot be used with a <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a> object.</td>\n\
			</tr>\n\
		</table>\n\
		</div>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">lensflare.Preset</td>\n\
		<td><a name=\"lensflare\"></a><span style=\"font-family: courier, monospace;\">lensflare</span> property preset.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">scenevolumiclight.Preset</td>\n\
		<td><a name=\"scenevolumiclight\"></a>Volumic light Scene Local Property Set<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/VolumicLightScene.html\">VolumicLightScene</a> property parameter list information.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">volumiclight.Preset</td>\n\
		<td><a name=\"volumiclight\"></a>Volumic light Property Set<br /><br />See the <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/VolumicLight.html\">VolumicLight</a> property parameter list information.		</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";