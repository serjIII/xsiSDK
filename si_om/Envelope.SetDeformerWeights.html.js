var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Envelope.SetDeformerWeights</title>\n\
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
            <h1>Envelope.SetDeformerWeights</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Envelope.html\">Envelope</a>.SetDeformerWeights</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Sets the envelope weights for a given deformer and normalizes the weights. Use the\n\
<a href=\"#!/url=./si_om/Envelope.SetDeformerWeights2.html\">Envelope.SetDeformerWeights2</a> method if you don\'t want to normalize weights.<br /><br />\n\
The deformer weights need\n\
to be passed in the cluster index order not in the geometry index order. To retrieve\n\
the cluster index corresponding to a given geometry index you can use <a href=\"#!/url=./si_om/Envelope.Elements.html\">Envelope.Elements</a>\n\
in conjunction with <a href=\"#!/url=./si_om/ClusterElementCollection.FindIndex.html\">ClusterElementCollection.FindIndex</a>.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Envelope.SetDeformerWeights( X3DObject, Object );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Envelope.SetDeformerWeights( Deformer, [Weights] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Deformer		</td>\n\
		<td><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> or expression		</td>\n\
		<td>\n\
 deformer object 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Weights		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
Array of weights, one for each point influenced by the Envelope		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'vbscript example demonstrates GetDeformerWeights and SetDeformerWeights\n\
\'methods on the Envelope object\n\
newscene ,false\n\
set oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
\'Create the skeleton\n\
set oChainRoot = ActiveSceneRoot.Add3DChain\n\
\'There is already a first bone automatically created\n\
set oBone0 = oChainRoot.Bones.Item(0) \n\
set oEffPos = XSIMath.CreateVector3\n\
oEffPos.Set 3,3,3\n\
set oBone1 = oChainRoot.AddBone(oEffPos)\n\
set oEnvelope = oSphere.ApplyEnvelope( oChainRoot, siBranch )\n\
\'Access 1-dimensional arrays with the weights\n\
aBone0Weights = oEnvelope.GetDeformerWeights( oBone0 )\n\
aBone1Weights = oEnvelope.GetDeformerWeights( oBone1 )\n\
\'Demonstrate how we can read the weight values\n\
for iElement=lbound(aBone1Weights,1) to ubound(aBone1Weights,1)\n\
	if ( aBone1Weights( iElement ) &gt; 80.0 ) then\n\
		logmessage \"Point \" &amp; oEnvelope.Elements.Item( iElement ) &amp; _\n\
			\" is almost completely influenced by Bone 0\"\n\
	end if\n\
next\n\
\'We can use SetDeformerWeights to change the weightings.\n\
\'In this case we complete switch the influence of the bones\n\
oEnvelope.SetDeformerWeights oBone1, aBone0Weights  \n\
oEnvelope.SetDeformerWeights oBone0, aBone1Weights \n\
\'Output of this script is the following:\n\
\'INFO : \"Point 21 is almost completely influenced by Bone 0\"\n\
\'INFO : \"Point 26 is almost completely influenced by Bone 0\"\n\
\'INFO : \"Point 27 is almost completely influenced by Bone 0\"\n\
\'INFO : \"Point 28 is almost completely influenced by Bone 0\"\n\
\'INFO : \"Point 29 is almost completely influenced by Bone 0\"\n\
\'INFO : \"Point 35 is almost completely influenced by Bone 0\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//JScript example showing how to modify deformer weights\n\
//via GetDeformerWeights/SetDeformerWeights\n\
var root = Application.ActiveProject.ActiveScene.Root\n\
var n = root.AddNull();\n\
var n1 = root.AddNull();\n\
var n2 = root.AddNull();\n\
translate( n, 1, 0, 1 );\n\
translate( n1, 0, 0, 1 );\n\
translate( n2, 0, 0, 0 );\n\
var grid = root.AddGeometry( \"cube\", \"MeshSurface\");\n\
var deformers = new ActiveXObject( \"XSI.Collection\");\n\
deformers.Add( n );\n\
deformers.Add( n1 );\n\
deformers.Add( n2 );\n\
var env = grid.ApplyEnvelope( deformers );\n\
//get and set the weights from the first deformer\n\
var vba = new VBArray( env.getdeformerweights( n ) );\n\
var jsa = vba.toArray();\n\
logmessage( \"weight values before changes:\" );\n\
for( var i=0; i&lt;jsa.length; i++ )\n\
{\n\
	logmessage( jsa[i] )\n\
	jsa[i] = 10.0;\n\
}\n\
env.setdeformerweights( n, jsa );\n\
//Show values after changes\n\
var vba = new VBArray( env.getdeformerweights( n ) );\n\
logmessage( \"weight values after changes:\" )	\n\
var jsa = vba.toArray();\n\
for( var i=0; i&lt;jsa.length; i++ )\n\
{\n\
	logmessage( jsa[i] )\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Envelope.SetDeformerWeights2.html\">Envelope.SetDeformerWeights2</a> <a href=\"#!/url=./si_om/Envelope.GetDeformerWeights.html\">Envelope.GetDeformerWeights</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";