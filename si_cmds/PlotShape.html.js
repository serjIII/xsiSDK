var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PlotShape</title>\n\
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
            <h1>PlotShape</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PlotShape</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Plots the shapes for objects with shape animations.<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PlotShape( [InputObj], [Name], [StartFrame], [EndFrame], [StepFrame], [ApplyKeys], [Mode], [Content], [RefMode], [SingleSource], [KeyList], [ClipList] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects whose shapes are plotted. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current Selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Prefix for shape source names. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StartFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 First frame to plot 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">EndFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Last frame to plot 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">StepFrame		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Step between each keys 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ApplyKeys		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
  True to apply the plotted keys to the object 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./si_om/siShapeInstanceMode.html\">siShapeInstanceMode</a>		</td>\n\
		<td>\n\
Determines how the shape is to be instantiated.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siShapeBlendedWeightMode			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Content		</td>\n\
		<td><a href=\"#!/url=./si_om/siShapeContent.html\">siShapeContent</a>		</td>\n\
		<td>\n\
 Determines which deformations should get stored in the shape.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siShapeContentUseConstructionMode			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RefMode		</td>\n\
		<td><a href=\"#!/url=./si_om/siShapeReferenceMode.html\">siShapeReferenceMode</a>		</td>\n\
		<td>\n\
 The reference mode of the shape key created 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siShapeLocalReferenceMode			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SingleSource		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
  If true, the deformation will be stored into a single shape source.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">KeyList		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
  List of created shape keys 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ClipList		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>		</td>\n\
		<td>\n\
 List of created shape clips 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates an animated deformation (twist on a torus).\n\
\' Then, it replaces the animation by 4 shapes, placed at regular\n\
\' intervals. The twist op is completely replaced by shapes,\n\
\' with a similar result.\n\
\'\n\
\' The shapes created by the plotting operation are written to the log.\n\
\'\n\
\' Set up a twist deformation on a torus\n\
NewScene , false\n\
CreatePrim \"Torus\", \"MeshSurface\"\n\
SetValue \"torus.polymsh.geom.subdivu\", 24\n\
SetValue \"torus.polymsh.geom.subdivu\", 40\n\
SetValue \"torus.polymsh.geom.subdivv\", 24\n\
ApplyOp \"Twist\", \"torus\", 3, siPersistentOperation\n\
SaveKey \"torus.polymsh.twistop.angle\", 1, 90\n\
SetValue \"PlayControl.Key\", 50\n\
SetValue \"PlayControl.Current\", 50\n\
SetValue \"torus.polymsh.twistop.angle\", -90\n\
SaveKey \"torus.polymsh.twistop.angle\", 50, -90\n\
SetValue \"PlayControl.Current\", 1\n\
\' Plot the animation in shapes, from frame 0 to 50, in steps of 10 frames\n\
Dim CreatedClips, CreatedShapes\n\
PlotShape \"torus\", \"twisted\", 1, 50, 10, True, siShapeMixedWeightMode, siShapeContentAllDeforms, _ \n\
	siShapeAbsoluteReferenceMode, false, CreatedShapes, CreatedClips\n\
\' We can now delete the twist, and we will still have a similar result from the 5 shapes\n\
DeleteObj \"torus.polymsh.twistop\"\n\
for i = 0 to CreatedClips.Count-1\n\
	Application.LogMessage \"Created shape: \" &amp; CreatedShapes(i)\n\
next\n\
\'This example outputs the following information to the Script Editor in Softimage: \n\
\'\n\
\'\'INFO : Created shape: torus.polymsh.cls.twisted.twisted1\n\
\'INFO : Created shape: torus.polymsh.cls.twisted.twisted2\n\
\'INFO : Created shape: torus.polymsh.cls.twisted.twisted3\n\
\'INFO : Created shape: torus.polymsh.cls.twisted.twisted4\n\
\'INFO : Created shape: torus.polymsh.cls.twisted.twisted5</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";