var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RemoveFlexEnvDeformer</title>\n\
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
            <h1>RemoveFlexEnvDeformer</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RemoveFlexEnvDeformer</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Removes deformers from an envelope. Every point in an envelope\n\
is assigned to one or more deformers. For each point, weights control the\n\
relative influence of its deformers. <br /><br />\n\
Deformers are the objects that control the shape of the envelope. You pick\n\
the deformers when you first create an envelope deformation, but you can\n\
still add and remove deformers later if necessary. <br /><br />\n\
Although it is common to use skeletons as deformers, you can actually use\n\
any object. The geometry of a deformer does not matter because the points\n\
of the envelope are assigned to its center. (Bones are the exception--points\n\
are deformed by the whole length of a bone.) <br /><br />\n\
Whether you use a cube, a sphere, or a null, all transformations of the\n\
surrounding envelope are relative in size, orientation, and position to\n\
the deformer\'s center, not its shape. Nulls and implicit objects are good\n\
choices because they do not render.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RemoveFlexEnvDeformer( [ConnectionSet], [Interactive] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">ConnectionSet		</td>\n\
		<td><a href=\"#!/url=./files/cnxset.htm\">ConnectionSet</a>		</td>\n\
		<td>\n\
 Specifies the envelope and the deformer objects to remove.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected objects are used as the main group.<br /><br />Warning: An error occurs if the connection set is invalid. Please verify the connection set required for this operator to avoid breaking your scripts.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Interactive		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to prompt user to pick objects. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'This example builds an envelope made of 2 skeleton objects on a sphere\n\
\'and a cylinder. Then, it removes individual deformers from the cylinder,\n\
\'and all envelope components from the shere.\n\
\'\n\
\'The deformers removed from the cylinder are outputted in the log.\n\
NewScene\n\
Set Sphere = CreatePrim(\"Sphere\", \"MeshSurface\")\n\
Set Cylinder = CreatePrim(\"Cylinder\", \"MeshSurface\")\n\
SetValue Cylinder &amp; \".polymsh.geom.subdivu\", 16\n\
SetValue Cylinder &amp; \".polymsh.geom.subdivv\", 16\n\
SetValue Cylinder &amp; \".cylinder.height\", 7.325\n\
Create2DSkeleton 0.1, 0.7, 0, 0, 3.6, 0, 0, 0, 0, 4\n\
Create2DSkeleton 0.0, -0.3, 0, -0.2, -3.6, 0, 0, 0, 0, 4\n\
ApplyFlexEnv Sphere &amp; \",\" &amp; Cylinder &amp; \";bone1,bone\", False\n\
Translate \"eff\", 2.5, -2.0, 0, siRelative, siView, siObj, siXYZ\n\
Translate \"eff1\", 3.7, 1.8, 0, siRelative, siView, siObj, siXYZ\n\
SelectDeformersFromEnvelope Cylinder\n\
Set Bones = SIFilter(, \"Chain_Element\")\n\
\'Remove 1 by 1 all deformers of the cylinder.\n\
\'However, the envelope and the envelope weight property remain.\n\
For i = 0 to Bones.Count - 1\n\
logmessage \"Removing \" &amp; Bones(i) &amp; \" from the deformers of \" &amp; Cylinder\n\
	RemoveFlexEnvDeformer Cylinder &amp; \";\" &amp; Bones(i)\n\
next\n\
\'Call RemoveFlexEnv: removes deformers of the sphere.\n\
\'The envelope and the envelope weight property are removed too.\n\
RemoveFlexEnv Sphere\n\
\'This example outputs the following:\n\
\'\n\
\'INFO : \"Removing bone1 from the deformers of cylinder\"\n\
\'INFO : \"Removing bone from the deformers of cylinder\"\n\
\'INFO : \"Removing eff1 from the deformers of cylinder\"\n\
\'INFO : \"Removing eff from the deformers of cylinder\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyFlexEnv.html\">ApplyFlexEnv</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";