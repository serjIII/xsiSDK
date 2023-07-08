var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CopyAnimationAcrossGenerator</title>\n\
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
            <h1>CopyAnimationAcrossGenerator</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CopyAnimationAcrossGenerator</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Copies the shape and envelope animation from the generator operator inputs\n\
to the generated object. This includes the installation of the envelope and shape combiner\n\
operators on the generated primitive, and the copy of shape animation (tracks and clips).<br /><br />\n\
If the generator is connected over the modeling marker, it will be reconnected automatically \n\
in modeling construction mode.<br /><br />\n\
If none of the input primitives\' envelope weight properties and shape key properties were \n\
transfered before the command was executed, the command will automatically transfer them all \n\
before copying the animation. However, if only some of input primitives\' envelope weight properties \n\
or shape key properties were transfered before the command was executed, then the decision to transfer \n\
or not the remaining ones will depend on the TransferRemainingShapesAndEnvelopes argument.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CopyAnimationAcrossGenerator( Operator, [ReadPosition], [TransferRemainingShapesAndEnvelopes] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Operator		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Specifies the generator operator to modify		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ReadPosition		</td>\n\
		<td><a href=\"#!/url=./si_om/siConstructionMode.html\">siConstructionMode</a>		</td>\n\
		<td>\n\
Specifies which construction stack to read from.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siConstructionModeModeling			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TransferRemainingShapesAndEnvelopes		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
		What to do with any transfered shapes and/or envelope weight properties when the\n\
		command will reconnect the generator over the primary shape/animation construction \n\
		mode. It is usually preferred to undo these transfers, since otherwise there could \n\
		be a double deformation (the envelope is applied to the input and the generated object).\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
2			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Yes					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>No					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Prompt the user					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example creates 2 spheres with animation (shapes and envelopes), merges them and manually transfers \n\
	only one of the envelopes. Then, using CopyAnimationAcrossGenerator, it copies the animation with \n\
	TransferRemainingShapesAndEnvelopes = 1, and then TransferRemainingShapesAndEnvelopes = 0.\n\
*/\n\
NewScene(null, null);\n\
//Create an enveloped sphere that has an applied shape key\n\
Sphere1 = CreatePrim(\"Sphere\", \"MeshSurface\", null, null);\n\
NullPrim1 = GetPrim(\"Null\", null, null, null);\n\
SetSelFilter(\"Vertex\");\n\
SelectGeometryComponents(\"sphere.pnt[44-50]\");\n\
Translate(null, 0, 0, -4.83347471775276, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 1);\n\
StoreShapeKey(\"sphere.pnt[44-50]\", \"\", siShapeObjectReferenceMode, 1, 0, 0, siShapeContentPrimaryShape);\n\
ApplyFlexEnv(Sphere1 + \";\" + NullPrim1, false, 2);\n\
SelectObj(NullPrim1, null, true);\n\
Translate(null, -3.20599401067148, 0, 0, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0);\n\
//Create a second enveloped sphere\n\
Sphere2 = CreatePrim(\"Sphere\", \"MeshSurface\", null, null);\n\
NullPrim2 = GetPrim(\"Null\", null, null, null);\n\
ApplyFlexEnv(Sphere2 + \";\" + NullPrim2, false, 2);\n\
SelectObj(NullPrim2, null, null);\n\
Translate(null, 6.77561899920499, 0, -1.00435838290967, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 2);\n\
//Generate a new object from the merge of the two spheres\n\
SetValue(\"Context.constructionmode\", 0, null);\n\
ApplyGenOp(\"MeshMerge\", \"\", Sphere1 + \",\" + Sphere2, 3, siPersistentOperation, siKeepGenOpInputs, null);\n\
Translate(null, 5.54342092599887, 0, 8.39090426346892, siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 2);\n\
//Transfer manually only one of the envelope weight props of the input spheres\n\
TransferClusterPropertiesAcrossGenOp(\"polymsh.polymsh.mergemesh\", \"polymsh\", \"sphere.polymsh.cls.EnvelopWeightCls.Envelope_Weights\", \"Envelope_Weights\", true);\n\
//Copy the animation without transfering the envelope weight props that were not transfered\n\
CopyAnimationAcrossGenerator(\"polymsh.polymsh.mergemesh\", 0, 1 /*don\'t transfer remaining envelopes*/);\n\
//Copy the animation and transfer the envelope weight props that were not transfered\n\
CopyAnimationAcrossGenerator(\"polymsh.polymsh.mergemesh\", 0, 0 /*transfer remaining envelopes*/);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/TransferPropertiesAcrossGenOp.html\">TransferPropertiesAcrossGenOp</a> <a href=\"#!/url=./si_cmds/TransferPropertiesAcrossGenOp.html\">TransferPropertiesAcrossGenOp</a> <a href=\"#!/url=./si_cmds/TransferClusterPropertiesAcrossGenOp.html\">TransferClusterPropertiesAcrossGenOp</a> <a href=\"#!/url=./si_cmds/TransferAllPropertiesAcrossGenOp.html\">TransferAllPropertiesAcrossGenOp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";