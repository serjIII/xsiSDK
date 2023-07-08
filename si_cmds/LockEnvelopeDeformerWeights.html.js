var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>LockEnvelopeDeformerWeights</title>\n\
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
            <h1>LockEnvelopeDeformerWeights</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">LockEnvelopeDeformerWeights</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Prevents modifying the envelope weights of the specified deformers. <br /><br />\n\
The effect of an envelope deformation is controlled by a weight mapping. You can modify these envelope \n\
weights with painting, smoothing, or numerical edition tools. This command allows you to block weights \n\
for some deformers to be modified either directly or indirectly through normalization.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = LockEnvelopeDeformerWeights( PropObj, Deformers, [Locked] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing the new <a href=\"#!/url=./si_om/Operator.html\">Operator</a> that applies the locking.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Envelope weights property for which we want to lock the weights.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Deformers		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of deformer objects (see the example below)		</td>\n\
		<td>\n\
 List of deformers to be locked.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Locked		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Should these deformers be locked (otherwise unlocked). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example illustrates how you can control the normalization process\n\
\'	when setting envelope weights by using weight locking. Normalization\n\
\'	automatically enforces that the sum of the weights for a given point\n\
\'	is always maintained to 100% when modifying weights numerically,\n\
\'	by painting or through any of the other weight editing commands.\n\
\'\n\
\' We start with a simple cylinder enveloped to a 6 bone chain\n\
NewScene , false\n\
set oCyl = CreatePrim( \"Cylinder\", \"MeshSurface\" )\n\
SetValue \"cylinder.cylinder.height\", 10\n\
SetValue \"cylinder.polymsh.geom.subdivv\", 20\n\
SetValue \"cylinder.polymsh.geom.subdivu\", 16\n\
Create2DSkeleton 1.97818728045807E-02, 5.04656031338284, 0, 0.81105678498785, 3.66123003127775, 0, 0, 0, 0, 4\n\
AppendBone \"eff\", 0.890184276206176, 1.91967196234563, 0\n\
AppendBone \"eff\", 0.969311767424504, 0.257275623819517, 0\n\
AppendBone \"eff\", 1.00887551303367, -1.76134850153362, 0\n\
AppendBone \"eff\", 0.969311767424504, -3.18625964884171, 0\n\
AppendBone \"eff\", 1.97818728045807E-02, -4.96739858297683, 0\n\
SelectObj \"cylinder\", , True\n\
ApplyFlexEnv \"cylinder;bone,bone1,bone2,bone3,bone4,bone5,eff\", False, 0\n\
\' Say that for a given set of points you want to set the\n\
\' envelope weight assignment so that the points are weighted\n\
\' 50% to \"bone1\", 25% to \"bone\" and 25% to \"bone2\"\n\
\' You can first set the weight for these points to 50% to \"bone1\"\n\
SIModifyFlexEnvWght \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights\", \"bone1\", _\n\
	\"cylinder.pnt[18,19,41,42,64,65,87,88,110,111,133,134,156,157,179,180,202,203,225,226,248,249,271,272,294,295,317,318,340,341,363,364]\", 0, 50\n\
\' Get the list of deformers to use as input to the LockEnvelopeDeformerWeights command\n\
set oDefs = CreateObject( \"XSI.Collection\" )\n\
oDefs.SetAsText \"bone1\" \n\
\' Tip - Alternatively, you could use \"oDefs.Add oCyl.Envelopes(0).Deformers(0)\" to populate the Deformers collection\n\
\' Now to avoid that normalization affects the new 50%\n\
\' assignment, we can lock the weights for deformer \"bone1\" as follows:\n\
LockEnvelopeDeformerWeights \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights\", oDefs, True\n\
\' Now we can assign the two other bones to 25% without having normaliztion\n\
\' affect the \"bone1\" values.\n\
SIModifyFlexEnvWght \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights\", \"bone\", _ \n\
	\"cylinder.pnt[18,19,41,42,64,65,87,88,110,111,133,134,156,157,179,180,202,203,225,226,248,249,271,272,294,295,317,318,340,341,363,364]\", 0, 25\n\
SIModifyFlexEnvWght \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights\", \"bone2\", _ \n\
	\"cylinder.pnt[18,19,41,42,64,65,87,88,110,111,133,134,156,157,179,180,202,203,225,226,248,249,271,272,294,295,317,318,340,341,363,364]\", 0, 25\n\
\' Now once we\'re done we can unlock the weights for that\n\
\' deformer in the same way:\n\
LockEnvelopeDeformerWeights \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights\", oDefs, False\n\
\' We could have also simply cleared all weight locks as follows:\n\
ClearEnvelopeWeightLocks \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights\"\n\
\' Now weights don\'t need to be locked on a per deformer basis.\n\
\' One could have locked individual point/deformer weight pairs as follows:\n\
LockEnvelopeWeights \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights\", Array(41, 42, 64, 65), Array(1, 1, 2, 2), True\n\
\' This last command locks the weight for points 41 and 42 for deformer 1 (the\n\
\' second deformer since indices start at zero) and points 64 and 65 for deformer 2.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIApplyFlexEnv.html\">SIApplyFlexEnv</a> <a href=\"#!/url=./si_cmds/LockEnvelopeWeights.html\">LockEnvelopeWeights</a> <a href=\"#!/url=./si_cmds/LockEnvelopePointWeights.html\">LockEnvelopePointWeights</a> <a href=\"#!/url=./si_cmds/ClearEnvelopeWeightLocks.html\">ClearEnvelopeWeightLocks</a> <a href=\"#!/url=./si_cmds/SIModifyFlexEnvWght.html\">SIModifyFlexEnvWght</a> <a href=\"#!/url=./si_om/Envelope.html\">Envelope</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";