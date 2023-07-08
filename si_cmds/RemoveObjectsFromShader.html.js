var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RemoveObjectsFromShader</title>\n\
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
            <h1>RemoveObjectsFromShader</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RemoveObjectsFromShader</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Removes lights or objects from shaders.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RemoveObjectsFromShader( [InputObjs], [Target] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to remove. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection. If there is no current selection, the user is prompted to pick the objects.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of shader properties (lights, difflights, or objs). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates a spotlight with a realistic light emission \n\
\' by adding a spotlight to the scene, applying a volume shader to the \n\
\' default pass, and then connecting it to the spotlight. \n\
\'\n\
NewScene , false\n\
\' Get a pointer to the default pass\n\
Set oDefPass = GetValue( \"Passes.Default_Pass\" )\n\
\' Here we are using a utility function that will set up the spotlights\n\
\' connected to the volume shader on the default pass. The function\n\
\' passes back the names for the spotlight and the connection point.\n\
aSpotInfo = setUpSpots( \"Spot1\", oDefPass, false )\n\
\' The 2nd time around we don\'t need the info, so we won\'t use another\n\
\' array of returned values\n\
setUpSpots \"Spot2\", oDefPass, true\n\
\' Render a single frame of the default pass just to see both spotlights\n\
\' after connecting them to the volume shader: you can see that both spots\n\
\' emit their own spotlight beam (from opposite sides)\n\
RenderPasses oDefPass, 1, 1\n\
\' Now remove the first spot from the light list and render another frame\n\
\' to see the effect. \n\
RemoveObjectsFromShader aSpotInfo(0), aSpotInfo(1)\n\
\' Render a single frame of the default pass: you can see that since the\n\
\' first one was removed from the volume shader, it does not appear to \n\
\' emit a spotlight beam\n\
RenderPasses oDefPass, 1, 1\n\
\' --------------------------------------------------------------------------\n\
function setUpSpots( in_spot_name, in_pass, in_move_me )\n\
	\' Define these locally only\n\
	Dim oSpotObj, oRetValue, oLightShader, sVolShader, sLightCnxPnt\n\
	\' Get a spot light\n\
	GetPrimLight \"Spot\", in_spot_name, , , oSpotObj\n\
	\' This is just a cheat to make sure we translate only one of the spots\n\
	If in_move_me Then\n\
		Translate  oSpotObj, -7, 1, 0\n\
	End If \n\
	\' Apply a light shader and get an object pointer to it (the returned\n\
	\' value is an XSICollection containing the shader as its only member)\n\
	Set oRetValue = SIApplyShader( \"Fast_light_effects.Preset\", oSpotObj )\n\
	Set oLightShader = oRetValue(0)\n\
	\' Add a volume shader on the default pass and save its fullname\n\
	sVolShader = SIApplyShaderToCnxPoint( \"Fast_volume_effects.Preset\", _\n\
			in_pass &amp; \".VolumeShaderStack\", , false )\n\
	sLightCnxPnt = sVolShader &amp; \".Lights\"\n\
	\' Now add the Spot to the Volume shader light list\n\
	AddObjectsToShader oSpotObj, sLightCnxPnt\n\
	\' Return the array of names we will need later\n\
	setUpSpots = Array( oSpotObj, sLightCnxPnt )\n\
end function</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddObjectsToShader.html\">AddObjectsToShader</a> <a href=\"#!/url=./si_cmds/ApplyShader.html\">ApplyShader</a> <a href=\"#!/url=./si_cmds/RemoveShaderFromCnxPoint.html\">RemoveShaderFromCnxPoint</a> <a href=\"#!/url=./si_cmds/RemoveAllShadersFromCnxPoint.html\">RemoveAllShadersFromCnxPoint</a> <a href=\"#!/url=./si_cmds/SIConnectShaderToCnxPoint.html\">SIConnectShaderToCnxPoint</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";