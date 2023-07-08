var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ProjectItem.AnimatedParameters2</title>\n\
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
            <h1>ProjectItem.AnimatedParameters2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a>.AnimatedParameters2</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a collection of <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> objects containing all parameters \n\
animated by a specific animation source type. This function can return local,\n\
nested and referenced parameters, see the Local argument for details. \n\
<br /><br />\n\
Warning: Because this method returns all animated parameters for the object and its \n\
children, this can be very expensive if used on a model (such as the scene \n\
root). Use <a href=\"#!/url=./si_om/X3DObject.NodeAnimatedParameters.html\">X3DObject.NodeAnimatedParameters</a> to get the \n\
animated parameters for the object only.\n\
<br /><br />\n\
Note: This method replaces the deprecated <a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">ProjectItem.IsAnimated2</a> \n\
method, which is supported for backwards compatibility only.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ParameterCollection ProjectItem.AnimatedParameters2( siSourceType, Boolean );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ProjectItem.AnimatedParameters2( [sourceType], [Local] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">sourceType		</td>\n\
		<td><a href=\"#!/url=./si_om/siSourceType.html\">siSourceType</a>		</td>\n\
		<td>\n\
Animation source type. siShapeAnimationSource is only supported by <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
 siAnySource 			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Local		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 \n\
		Specifies whether the animation to check is local to the object or not. If \n\
		true then all animated parameters that come from propagated properties or \n\
		from intermediate nodes are ignored (referenced parameters). Intermediate \n\
		nodes are nested under the object but are not necessary owned by the object \n\
		itself. For instance, the camera object nested under a Texture_Projection_Def \n\
		property is not considered unless the target object is the projection \n\
		property itself. When the argument is set to false (default), all parameters \n\
		are considered.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
 False 			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oCube = oRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
set oCluster = oCube.ActivePrimitive.Geometry.AddCluster( siVertexCluster )\n\
for each p in oCluster.AnimatedParameters2( siAnySource )\n\
	Application.LogMessage p.Name\n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ProjectItem.IsAnimated2.html\">ProjectItem.IsAnimated2</a> <a href=\"#!/url=./si_om/X3DObject.IsNodeAnimated.html\">X3DObject.IsNodeAnimated</a> <a href=\"#!/url=./si_om/X3DObject.NodeAnimatedParameters.html\">X3DObject.NodeAnimatedParameters</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";