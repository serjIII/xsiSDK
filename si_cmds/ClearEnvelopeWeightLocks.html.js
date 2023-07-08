var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ClearEnvelopeWeightLocks</title>\n\
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
            <h1>ClearEnvelopeWeightLocks</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ClearEnvelopeWeightLocks</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Clears all locks on the envelope weights.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ClearEnvelopeWeightLocks( PropObj );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> that contains the new operator that applies the unlocking.</p></div>\n\
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
 Envelope weights property for which we want to lock the weights.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
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
\' This simple example illustrates how locking envelope point weights\n\
\' can be used to protect your weighting work on parts of the object\n\
\' \n\
\' We start with a simple cylinder enveloped to a 6 bone chain\n\
NewScene\n\
CreatePrim \"Cylinder\", \"MeshSurface\"\n\
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
\' We reassign some points to the first bone\n\
LocalAssignFlexEnv \"cylinder.pnt[1,21-24,44-47,67-70,90-93,113-116,136-139,159-162,182-185,205-208,228-231,251-254,274-277,297-300,320-323,343-346,366-LAST]\", \"cylinder;bone\"\n\
\' We reassign some points to the second bone\n\
LocalAssignFlexEnv \"cylinder.pnt[18,19,41,42,64,65,87,88,110,111,133,134,156,157,179,180,202,203,225,226,248,249,271,272,294,295,317,318,340,341,363,364]\", \"cylinder;bone1\"\n\
\' We reassign some intermediate point to both bones\n\
LocalAssignFlexEnv \"cylinder.pnt[20,43,66,89,112,135,158,181,204,227,250,273,296,319,342,365]\", \"cylinder;bone,bone1\"\n\
\' Now let\'s assume that the weighting for those bones is what\n\
\' we want. To protect it from unexpectedly modifying it later on\n\
\' we lock the weights.\n\
LockEnvelopePointWeights , \"cylinder.pnt[1,18-24,41-47,64-70,87-93,110-116,133-139,156-162,179-185,202-208,225-231,248-254,271-277,294-300,317-323,340-346,363-LAST]\", True\n\
\' We continue the assignment of some points to the third bone\n\
LocalAssignFlexEnv \"cylinder.pnt[15,16,38,39,61,62,84,85,107,108,130,131,153,154,176,177,199,200,222,223,245,246,268,269,291,292,314,315,337,338,360,361]\", \"cylinder;bone2\"\n\
\' Similarily we reassign some points to the second and third bone\n\
LocalAssignFlexEnv \"cylinder.pnt[17,40,63,86,109,132,155,178,201,224,247,270,293,316,339,362]\", \"cylinder;bone1,bone2\"\n\
\' We smooth the weights for some points selected\n\
SISmoothEnvWght , \"cylinder.pnt[16-18,39-41,62-64,85-87,108-110,131-133,154-156,177-179,200-202,223-225,246-248,269-271,292-294,315-317,338-340,361-363]\"\n\
SetValue \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights.smoothenvelopeweight.neighborhooddepth\", 3\n\
SetValue \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights.smoothenvelopeweight.profilescaling\", 14.681\n\
\' Inadvertently, we selected some points that which weights we didn\'t want\n\
\' to modify. However, since we had locked their weights remain\n\
\' intact.\n\
\' Now I can modify some locked weights by unlocking them first.\n\
LockEnvelopePointWeights , \"cylinder.pnt[1,22-24,45-47,68-70,91-93,114-116,137-139,160-162,183-185,206-208,229-231,252-254,275-277,298-300,321-323,344-346,367-LAST]\", False\n\
SIModifyFlexEnvWght \"cylinder.polymsh.cls.EnvelopWeightCls.Envelope_Weights\", \"bone1\", \"cylinder.pnt[1,22-24,45-47,68-70,91-93,114-116,137-139,160-162,183-185,206-208,229-231,252-254,275-277,298-300,321-323,344-346,367-LAST]\", 1, 10\n\
\' I can also unlock all weights in order to weight freely.\n\
ClearEnvelopeWeightLocks \"cylinder\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIApplyFlexEnv.html\">SIApplyFlexEnv</a> <a href=\"#!/url=./si_cmds/LockEnvelopeDeformerWeights.html\">LockEnvelopeDeformerWeights</a> <a href=\"#!/url=./si_cmds/LockEnvelopeWeights.html\">LockEnvelopeWeights</a> <a href=\"#!/url=./si_cmds/LockEnvelopePointWeights.html\">LockEnvelopePointWeights</a> <a href=\"#!/url=./si_cmds/SIModifyFlexEnvWght.html\">SIModifyFlexEnvWght</a> <a href=\"#!/url=./si_om/Envelope.html\">Envelope</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";