var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CaptureViewport</title>\n\
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
            <h1>CaptureViewport</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CaptureViewport</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Captures the viewport into an image sequence.\n\
<br /><br />\n\
Note: This command does not work in normal batch mode because it relies on the Softimage user interface.  However\n\
you can use the \"-uiscript\" command line argument instead of \"-script\" to use this command as part of a batch process.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CaptureViewport( [Target], [Interactive] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Viewport to capture.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
-1 (the current viewport, or viewport B if no current viewport)			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">-1					</td>\n\
					<td>The current viewport (under the cursor)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Viewport A					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Viewport B					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Viewport C					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Viewport D					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Interactive		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Specifies whether running in batch mode (False) or interactive mode (True)			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to perform a viewport capture via scripting.\n\
	The File Format is specified by the File Name extension. To specify the codec parameters, \n\
	you can save a preset via the UI and then load the preset back by scripting anytime you need it.\n\
	You can also specify the codec parameters by setting the \"DSCodec\" parameter, which\n\
	contains an encoded string for the codec parameters. The string for a desired set of codec\n\
	parameters can be obtained by doing a capture interactively as following:\n\
	- in a 3D view, click the Camera pulldown menu &gt; Start Capture to open the Capture Viewport dialog\n\
	- select the desired format from the File Format pulldown menu\n\
	- click Codec to select the desired parameters, click OK to exit the codec dialog\n\
	- click OK to start a capture\n\
	The encoded string for the codec parameters is printed in the Script History window. You\n\
	can copy it for future use in scripting.\n\
	You can also get the encoded codec parameters string by scripting, e.g.:\n\
		LogMessage( GetValue(\"ViewportCapture.DSCodec\"));\n\
*/\n\
// Get the current frame\n\
var currFrame = ActiveProject.Properties.Item(\"Play Control\").Parameters.Item(\"Current\").Value;\n\
// Set the capture options\n\
var oViewportCapture = Dictionary.GetObject(\"ViewportCapture\");\n\
// Capture a 1-frame sequence \n\
oViewportCapture.NestedObjects.Item(\"Start Frame\").Value = currFrame;\n\
oViewportCapture.NestedObjects.Item(\"End Frame\").Value = currFrame;         \n\
// Specify the output file name\n\
// The output file format is determined by the extension\n\
oViewportCapture.NestedObjects.Item(\"File Name\").Value = \"C:\\\\test.mov\";\n\
// Set the Quicktime codec parameters (in this case: \"Keyframe every 10 frames\")\n\
SetValue(\"ViewportCapture.DSCodec\", \"AAAAFnNwdGxycHphAAAAAAAQAAACAAAAABR0cHJsAAACAAAd+FEAAAAKAAAAGGRyYXQAAAAAAAAAUwAAAQAAAAEAAAAACW1wc28AAAAADG1mcmEAAAAAAAAADHBzZnIAAAAAAAAACWJmcmEAAAAACm1wZXMAAAAAABxoYXJkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKc2RuZQAAAAAADGNtZnJhcHBsAAAAAA==\", null);\n\
// Do not display dialog\n\
CaptureViewport( 2, false );</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">CreatePrim \"Sphere\", \"NurbsSurface\", \"MySphere\"\n\
SetValue \"PlayControl.Out\", 40\n\
\' Setting a key frame on XPos at frame 1\n\
SaveKey \"MySphere.kine.local.posx\", 1, -9.0\n\
\' Setting a key frame on XPos at frame 10\n\
SaveKey \"MySphere.kine.local.posx\", 10, 3.0\n\
\' Setting a key frame on XPos at frame 30\n\
SaveKey \"MySphere.kine.local.posx\", 30,-3.0\n\
\' Setting a key frame on XPos at frame 40\n\
SaveKey \"MySphere.kine.local.posx\", 40, 9.0\n\
\' Setting a key frame on YPos at frame 1\n\
SaveKey \"MySphere.kine.local.posy\", 1, -2.0\n\
\' Setting a key frame on YPos at frame 30\n\
SaveKey \"MySphere.kine.local.posy\", 30, 2.0\n\
SetDisplayMode \"Camera\", \"shaded\"\n\
CaptureViewport 2, true</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Flipbook.html\">Flipbook</a> <a href=\"http://softimage.wiki.softimage.com/sdkdocs/xsiparams/ViewportCapture.html\">Viewport Capture parameters</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";