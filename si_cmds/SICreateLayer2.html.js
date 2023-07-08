var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SICreateLayer2</title>\n\
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
            <h1>SICreateLayer2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SICreateLayer2</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v8.0 (2010)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates an empty <a href=\"#!/url=./si_om/Layer.html\">Layer</a>.\n\
<br /><br />\n\
This command is similar to the <a href=\"#!/url=./si_cmds/SICreateLayer.html\">SICreateLayer</a> command except that it does not use output arguments \n\
so it is safe to use with languages that don\'t support passing arguments by reference, such as JScript and Python.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SICreateLayer2( [PresetObj], [Name], [LayerGroupName] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the <a href=\"#!/url=./si_om/Layer.html\">Layer</a>.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (see <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
 Layer preset to use 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Default_New_Layer\"			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Default_New_Layer					</td>\n\
					<td>Default new layer					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the new layer 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, the name will be automatically generated.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LayerGroupName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the layer group that will contain the new layer 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If not specified, the group containing the current layer will be used.			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to use the SICreateLayer2 command \n\
#\n\
app = Application\n\
app.NewScene(None, 0)\n\
# Convenience function to \n\
def checkCurrLayer() :\n\
	# What is the current layer?\n\
	rtn = app.GetCurrentLayer()\n\
	oCurrLayer = rtn.Value(\"Value\")\n\
	app.LogMessage(\"Current layer is.....\" + oCurrLayer.FullName)\n\
	app.LogMessage(\"Current layer is in layer group.....\" + str(oCurrLayer.LayerGroupName.Value))\n\
# Get initial settings\n\
checkCurrLayer()\n\
# Make a new layer\n\
oNewLayer = app.SICreateLayer2(None, \"LayerA\")\n\
checkCurrLayer()\n\
# Now explicitly set the new layer as current and check again\n\
app.SetCurrentLayer(oNewLayer)\n\
checkCurrLayer()\n\
# Make another new layer\n\
oNewLayer = app.SICreateLayer2(None, \"LayerB\", \"GroupB\")\n\
app.SetCurrentLayer(oNewLayer)\n\
checkCurrLayer()\n\
#OUTPUT OF ABOVE SCRIPT IS:\n\
#INFO : \"Current layer is.....Layers.Layer_Default\"\n\
#INFO : Current layer is in layer group.....Group_Default\n\
#INFO : \"Current layer is.....Layers.Layer_Default\"\n\
#INFO : Current layer is in layer group.....Group_Default\n\
#INFO : \"Current layer is.....Layers.LayerA\"\n\
#INFO : Current layer is in layer group.....Group_Default\n\
#INFO : \"Current layer is.....Layers.LayerB\"\n\
#INFO : Current layer is in layer group.....GroupB</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RenderPasses.html\">RenderPasses</a> <a href=\"#!/url=./si_cmds/CreateLayer.html\">CreateLayer</a> <a href=\"#!/url=./si_cmds/CreatePartition.html\">CreatePartition</a> <a href=\"#!/url=./si_cmds/CreatePass.html\">CreatePass</a> <a href=\"#!/url=./si_cmds/SICreateLayer.html\">SICreateLayer</a> <a href=\"#!/url=./si_cmds/SICreateLayerFromSelection.html\">SICreateLayerFromSelection</a> <a href=\"#!/url=./si_cmds/SICreateLayerFromSelection2.html\">SICreateLayerFromSelection2</a> <a href=\"#!/url=./si_cmds/SICreatePartition.html\">SICreatePartition</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";