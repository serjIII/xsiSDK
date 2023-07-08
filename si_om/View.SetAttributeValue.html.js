var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>View.SetAttributeValue</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>View.SetAttributeValue</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/View.html\">View</a>.SetAttributeValue</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Sets a view-specific attribute value.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>View.SetAttributeValue( String in_pParamName, Object& in_pVal );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>View.SetAttributeValue( Name, Val );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The attribute name. See <a href=\"#!/url=./si_cmds/ViewAttributes.html#\">ViewAttributes</a> \n\
		for a list of attributes views organized by view type.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Val		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
The attribute value.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to set up the viewports (A,B,C,D) to display \n\
# a horizontally split pane (the Explorer on the bottom and the Camera at the \n\
# top) and then make sure that the Camera\'s view display type is set to \n\
# \'Depth Cue\' and the Explorer uses the \'Scene\' scope, script names, and is\n\
# filtered for \'All + Animated Parameter Nodes\'.\n\
#\n\
# This could be useful as part of OnStartup or OnEndNewScene event if you\n\
# wanted to customize how Softimage appears (for example, if you are using the\n\
# Tools Development Environment and want to retain the double view instead\n\
# of the default when you call the NewScene command)\n\
#\n\
def CustomizeViews() :\n\
	# Get the first camera in the scene and change it to depthcue\n\
	cam = app.ActiveSceneRoot.FindChild( \"\", \"camera\" )\n\
	app.SetDisplayMode( cam.Name, \"depthcue\" )\n\
	# Split horizontal with Camera on top, Explorer on bottom \n\
	viewports = Application.Desktop.ActiveLayout.Views( \"vm\" )\n\
	viewports.SetAttributeValue( \"activecamera:a\", cam.Name )\n\
	viewports.SetAttributeValue( \"viewport:c\", \"Explorer\" )\n\
	viewports.SetAttributeValue( \"layout\", \"horizontal:ac\" )\n\
	# Viewports start at index 0, so A=0 and C=2 to get the Explorer\n\
	c_view = viewports.Views(2)\n\
	c_view.SetAttributeValue( \"scope\", \"Scene\" )				# scope 	= Scene_Root\n\
	c_view.SetAttributeValue( \"scriptnames\", \"true\" )			# display 	= script names\n\
	filterAllPlusAnimated = \"Object|Operator|Primitive|Property\" \\\n\
		+ \"|Cluster|Group|Shader|Material|\" \\\n\
		+ \"Action|Model|Animatable|Miscellaneous\"\n\
	c_view.SetAttributeValue( \"FilterMask\", filterAllPlusAnimated )		# filter 	= \'All + Animated Parameter Nodes\'\n\
# Run the example\n\
app = Application\n\
app.NewScene( \"\", 0 )\n\
obj = app.CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
CustomizeViews()</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to manipulate the Explorer \'scope\'\n\
	and open NetView to a specific location (URL)\n\
*/\n\
NewScene( null, false );\n\
// Sets the scope of an explorer view\n\
var l = Desktop.ActiveLayout;\n\
var v = l.CreateView( \"Explorer\", \"Explorer\" );\n\
// Set scope to \"Sources and Clips\"\n\
v.SetAttributeValue( \"scope\", \"Sources and Clips\" );\n\
LogMessage( v.Name + \" scope: \" + v.GetAttributeValue(\"scope\") );\n\
// Set the URL of NetView to the Softimage home page\n\
var nv = Desktop.ActiveLayout.CreateView(\"netview\", \"netview\");\n\
nv.SetAttributeValue( \"url\", \"http://softimage.wiki.softimage.com/index.php/Main_Page\" );\n\
// Output of above script\n\
//INFO : Explorer scope: Sources and Clips</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to set up the viewports (A,B,C,D) to display \n\
\' different views (Texture Editor on the left and Camera and Explorer on the right)\n\
\'\n\
NewScene , false\n\
set obj = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
\' Change what appears in the viewports \n\
set oVM = Application.Desktop.ActiveLayout.Views( \"vm\" )\n\
oVM.SetAttributeValue \"viewport:a\", \"Texture Editor\"\n\
oVM.SetAttributeValue \"layout\", \"vertical:ac\"\n\
oVM.SetAttributeValue \"viewport:d\", \"Explorer\"\n\
\' The Explorer is now set to appear in D (the 4th viewport),\n\
\' so make sure the Passes scope is on\n\
set oVM_D = oVM.Views(3)\n\
oVM_D.SetAttributeValue \"scope\", \"Passes\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";