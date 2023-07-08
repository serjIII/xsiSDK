var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../../../../../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ShaderParser</title>\n\
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
</style><link href=\"examples/Addons/ShaderParser/doc/shared/examples.css\" type=\"text/css\" rel=\"StyleSheet\" /><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/ShaderParser/doc/shared/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>ShaderParser</h1>\n\
         </div>\n\
\n\
		<div class=\"body\"><a name=\"top\"></a><img class=\"netview\" style=\"PADDING-RIGHT: 6px; FLOAT: left\" src=\"netview_ShaderParser.jpg\" />\n\
			<h1>Custom Shader Parser Example</h1>\n\
			<p>This example shows how to create a self-installing custom shader language parser in JScript. A number of parseable file\n\
			definitions (with the .bck and .pck extensions) are included to demonstrate how the parser system works, both valid and invalid.\n\
			</p><br />\n\
			<h2>Example Files</h2>\n\
			<table>\n\
				<tr>\n\
					<td><strong>Location</strong></td>\n\
					<td><span class=\"installPath\"></span></td>\n\
				</tr>\n\
				<tr>\n\
					<td><strong>Files</strong></td>\n\
					<td>\n\
						<div class=\"examplefile\">ShaderParserExample.js</div>\n\
						<div class=\"examplefile\" folder=\"puck\">AnotherBadParamPuckShader.bck</div>\n\
						<div class=\"examplefile\" folder=\"puck\">BadParamPuckShader.bck</div>\n\
						<div class=\"examplefile\" folder=\"puck\">DisorderedParamPuckShader.bck</div>\n\
						<div class=\"examplefile\" folder=\"puck\">NoRendererPuckShader.bck</div>\n\
						<div class=\"examplefile\" folder=\"puck\">ArrayCnxPuck.pck</div>\n\
						<div class=\"examplefile\" folder=\"puck\">BogusPuckShader.pck</div>\n\
						<div class=\"examplefile\" folder=\"puck\">ColorShare.pck</div>\n\
						<div class=\"examplefile\" folder=\"puck\">WellorderedParamPuckShader.pck</div>\n\
					</td>\n\
				</tr>\n\
			</table>\n\
			<a name=\"build\"></a>\n\
			<h2>Running the Example</h2>\n\
			<div id=\"toinstall\" style=\"DISPLAY: none\">\n\
				<p class=\"proc-head\">To install the example</p>\n\
				<ul>\n\
					<li>\n\
						<p>Connect to the Softimage SDK workgroup at\n\
							<span class=\"workgroupPath\">%XSISDK_ROOT%\\examples\\workgroup</span>.</p>\n\
						<ol>\n\
					<li>\n\
						In the <strong>Plug-in Manager</strong>, click the <strong>Workgroups</strong> tab.\n\
					<li>\n\
						Click <strong>File</strong> and then click <strong>Connect</strong>.\n\
					<li>\n\
						In the <strong>Connect to Workgroup</strong> dialog box, click <img src=\"..\\..\\doc\\shared\\bBrowse.gif\" />,\n\
						locate the workgroup folder and then click <strong>Select</strong>.\n\
					</li>\n\
					</li></li></ol></li></ul>\n\
				<p class=\"proc-head\">To view the help page for an example</p>\n\
				<ul>\n\
					<li>\n\
						Do one of the following:\n\
						<ul>\n\
							<li>\n\
								In the Plug-in Tree, expand the SDK examples workgroup, right-click the example\n\
								add-on and then click <strong>Help</strong>.\n\
							<li>\n\
								Open a Net View and click <img style=\"BOTTOM: -6px; POSITION: relative\" src=\"..\\..\\doc\\shared\\xsiweb.png\" />\n\
								to go to XSI Net local. In the top navigation bar, click <strong>add-ons</strong>,\n\
								and then click the SDK example add-on.\n\
							</li>\n\
						</li></ul>\n\
					\n\
				</li></ul>\n\
			</div>\n\
			<div>\n\
				<p class=\"proc-head\">To instantiate the Puck shader definitions</p>\n\
				<ul>\n\
					<li>\n\
						<p>Start Softimage and open the render tree.\n\
						<br /><br />\n\
						You can see a number of presets in the preset manager under the Parsed (Good) and Parsed (Bad)\n\
						sub-categories under the main Example Shaders category:\n\
						<br /><br />\n\
						<img src=\"PresetManager.jpg\" alt=\"Preset Manager\" />\n\
						</p>\n\
					</li>\n\
					<li>\n\
						<p>You can instantiate it by running the following in the Script Editor::</p>\n\
						<pre><span class=\"comment\">// [JScript]</span>\n\
NewScene(\"\", false);\n\
CreatePrim(\"Cone\", \"MeshSurface\");\n\
CreateShaderFromProgID(\"Puck.ArrayCnxPuck.1.0\", \"Sources.Materials.DefaultLib.Scene_Material\");\n\
SIConnectShaderToCnxPoint(\"Sources.Materials.DefaultLib.Scene_Material.Array_Cnx_Puck.out_vector3\",\n\
   \"Sources.Materials.DefaultLib.Scene_Material.Phong.bump\", false);\n\
</pre>\n\
					</li>\n\
				</ul>\n\
			</div>\n\
\n\
			<div id=\"keywords\">\n\
				<h2>Keywords</h2>\n\
				<p>This example uses the following keywords:</p>\n\
				<p>JScript example, JScript, RegisterShaderLanguageParser, QueryParserSettings, Parse, ParseInfo, ShaderDef, Context, GetSource\n\
				</p>\n\
			</div>\n\
		</div>\n\
	      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";