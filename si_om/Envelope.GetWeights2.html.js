var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Envelope.GetWeights2</title>\n\
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
            <h1>Envelope.GetWeights2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Envelope.html\">Envelope</a>.GetWeights2</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/ClusterElementCollection.html\">ClusterElementCollection</a> object containing the deformer \n\
weights for the envelope. The <a href=\"#!/url=./si_om/ClusterElementCollection.Array.html\">ClusterElementCollection.Array</a> property \n\
provides access to a 2-dimensional array, where the first dimension maps to the \n\
<a href=\"#!/url=./si_om/Envelope.Deformers.html\">Envelope.Deformers</a> and the second dimension maps to the cluster elements.\n\
<br /><br />\n\
Note: This is the Python-compliant version of the <a href=\"#!/url=./si_om/Envelope.Weights.html\">Envelope.Weights</a>. \n\
Since Python does not support input parameters on properties, Envelope.Weights will fail \n\
in Python.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ClusterElementCollection Envelope.GetWeights2( Object );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Envelope.GetWeights2( [Time] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ClusterElementCollection.html\">ClusterElementCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Time (in frames) at which to get property			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current time in frames			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>C# Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">/*\n\
	C# version of the Envelope.Weights examples,\n\
	demonstrating how to deform a sphere\n\
	and access the weights on each vertex\n\
*/\n\
CXSIApplicationClass app = new CXSIApplicationClass();\n\
// Set up some null objects to be used for passing default values\n\
object dummy = null;\n\
Object[] args = new Object[2];\n\
args[1] = false;\n\
app.ExecuteCommand(\"NewScene\", args);\n\
Model oRoot = app.ActiveSceneRoot;\n\
Object[] aRootPos = new Object[3] { 0.254, 3.998, 0.045 };\n\
Object[] aEffPos1 = new Object[3] { -0.01, -0.056, -2.972 };\n\
Object[] aEffPos2 = new Object[3] { 0.183, -3.999, 0.115 };\n\
// Create the Skeleton\n\
ChainRoot oChain1 = oRoot.Add2DChain(aRootPos, aEffPos1, dummy, si2DChainAlignType.si2DChainTop, \"\");\n\
ChainBone oChain2 = oChain1.AddBone(aEffPos2, siChainBoneType.siChainBonePin, \"\");\n\
// Create the Envelope\n\
X3DObject oSphere = oRoot.AddGeometry(\"Sphere\", \"MeshSurface\", \"\");\n\
oSphere.Parameters[\"subdivu\"].PutValue2(dummy, 2);\n\
oSphere.Parameters[\"subdivv\"].PutValue2(dummy, 2);\n\
Geometry oGeometry = oSphere.ActivePrimitive.GetGeometry2(dummy, siConstructionMode.siConstructionModeDefault);\n\
// Apply the Envelope to the Skeleton\n\
Envelope oEnvelope = oSphere.ApplyEnvelope(oChain1, siBranchFlag.siBranch, siBranchFlag.siBranch);\n\
// Weights are represented as a 2-dimensional array, which are supported\n\
// by the Array class in C#, just cast the returned object into an Array\n\
// and use the Array class\'s access members (same idea as in VBScript)\n\
ClusterElementCollection oWeights = oEnvelope.GetWeights2(dummy);\n\
Array aWeightValues = (Array)oWeights.Array;\n\
for (int iElement = aWeightValues.GetLowerBound(1); iElement &lt; aWeightValues.GetLength(1); iElement++)\n\
{\n\
	string strElementWeights = \"\";\n\
	for (int iDeformer = aWeightValues.GetLowerBound(0); iDeformer &lt; aWeightValues.GetLength(0); iDeformer++)\n\
	{\n\
		double dCurrWeight = (double)aWeightValues.GetValue(iDeformer, iElement);\n\
		double dRndWeight = Math.Round(dCurrWeight);\n\
		strElementWeights = strElementWeights + dRndWeight.ToString() + \",\";\n\
	}\n\
	// Trip the final comma from the string\n\
	strElementWeights.Remove(strElementWeights.Length-1, 1);\n\
	app.LogMessage(\"weight (\" + iElement.ToString() + \") = \" + strElementWeights, siSeverity.siInfo);\n\
}\n\
// Output of the script is this:\n\
//INFO : \"weight(0) = 0,0,100,0\"\n\
//INFO : \"weight(1) = 0,100,0,0\"\n\
//INFO : \"weight(2) = 0,50,50,0\"\n\
//INFO : \"weight(3) = 0,50,50,0\"\n\
//INFO : \"weight(4) = 0,50,50,0\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Envelope.Weights.html\">Envelope.Weights</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";