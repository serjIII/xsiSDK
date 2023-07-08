var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Envelope.SetDeformerWeights2</title>\n\
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
            <h1>Envelope.SetDeformerWeights2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Envelope.html\">Envelope</a>.SetDeformerWeights2</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v10.5 (2012)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Sets the envelope weights for a given deformer without normalizing the weights. Use the\n\
<a href=\"#!/url=./si_om/Envelope.SetDeformerWeights.html\">Envelope.SetDeformerWeights</a> method if you want to normalize weights.<br /><br />\n\
The deformer weights need to be passed in the cluster index order not in the geometry index order. To retrieve\n\
the cluster index corresponding to a given geometry index you can use <a href=\"#!/url=./si_om/Envelope.Elements.html\">Envelope.Elements</a>\n\
in conjunction with <a href=\"#!/url=./si_om/ClusterElementCollection.FindIndex.html\">ClusterElementCollection.FindIndex</a>.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Envelope.SetDeformerWeights2( X3DObject, Object );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Envelope.SetDeformerWeights2( Deformer, [Weights] );</pre>		</td>	</tr>\n\
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
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># This example shows how to set vertex envelope weights\n\
# on a deformer without normalizing the weights\n\
xsiApp = Application\n\
# Create the scene made of a cube and 3 nulls\n\
xsiApp.NewScene( None, False )\n\
root = xsiApp.ActiveProject.ActiveScene.Root\n\
grid = root.AddGeometry( \"cube\", \"MeshSurface\" )\n\
n = root.AddNull()\n\
n1 = root.AddNull()\n\
n2 = root.AddNull()\n\
# Move the nulls\n\
xsiApp.Translate( n, 1, 0, 1 )\n\
xsiApp.Translate( n1, 0, 0, 1 )\n\
xsiApp.Translate( n2, 0, 0, 0 )\n\
# Create a deformer list made of the 3 nulls\n\
deformers = XSIFactory.CreateObject( \"XSI.Collection\" )\n\
deformers.Add( n )\n\
deformers.Add( n1 )\n\
deformers.Add( n2 )\n\
# Create an Envelope Weight on the grid with the 3 nulls\n\
env = grid.ApplyEnvelope( deformers )\n\
# Output the current values of the Envelope Weight\n\
xsiApp.LogMessage( \"Envelope Weights before user edit\" )\n\
allWeights = env.GetWeights2( None )\n\
i = 0\n\
for vertexWeights in allWeights:\n\
	sum = 0\n\
	for singleWeight in vertexWeights:\n\
		sum += singleWeight\n\
	xsiApp.LogMessage( \"Vertex \" + str( i ) + \": \" + \n\
					   str( \"Deformer 0: %4.1f, \" % vertexWeights[ 0 ] ) +\n\
					   str( \"Deformer 1: %4.1f, \" % vertexWeights[ 1 ] ) +\n\
					   str( \"Deformer 2: %4.1f, \" % vertexWeights[ 2 ] ) +\n\
					   str( \"Vertex Weight Sum: %5.1f\" % sum ) )\n\
	i += 1\n\
xsiApp.LogMessage( \"\" )\n\
# Set new vertex envelope weights for the first deformer\n\
env.SetDeformerWeights2( n, [10,10,10,10,10,10,10,10] )\n\
# Output the new values of the Envelope Weight\n\
xsiApp.LogMessage( \"Envelope Weights after user edit\" )\n\
allWeights = env.GetWeights2( None )\n\
i = 0\n\
for vertexWeights in allWeights:\n\
	sum = 0\n\
	for singleWeight in vertexWeights:\n\
		sum += singleWeight\n\
	xsiApp.LogMessage( \"Vertex \" + str( i ) + \": \" + \n\
					   str( \"Deformer 0: %4.1f, \" % vertexWeights[ 0 ] ) +\n\
					   str( \"Deformer 1: %4.1f, \" % vertexWeights[ 1 ] ) +\n\
					   str( \"Deformer 2: %4.1f, \" % vertexWeights[ 2 ] ) +\n\
					   str( \"Vertex Weight Sum: %5.1f\" % sum ) )\n\
	i += 1\n\
#-----------------------------------------\n\
# Output of this example is the following:\n\
#-----------------------------------------\n\
# INFO : Envelope Weights before user edit\n\
# INFO : Vertex 0: Deformer 0:  0.0, Deformer 1: 41.5, Deformer 2: 58.5, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 1: Deformer 0: 48.0, Deformer 1:  0.0, Deformer 2: 52.0, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 2: Deformer 0:  0.0, Deformer 1: 41.5, Deformer 2: 58.5, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 3: Deformer 0: 48.0, Deformer 1:  0.0, Deformer 2: 52.0, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 4: Deformer 0:  0.0, Deformer 1: 57.8, Deformer 2: 42.2, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 5: Deformer 0: 59.3, Deformer 1: 40.7, Deformer 2:  0.0, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 6: Deformer 0:  0.0, Deformer 1: 57.8, Deformer 2: 42.2, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 7: Deformer 0: 59.3, Deformer 1: 40.7, Deformer 2:  0.0, Vertex Weight Sum: 100.0\n\
# INFO : \n\
# INFO : Envelope Weights after user edit\n\
# INFO : Vertex 0: Deformer 0: 10.0, Deformer 1: 37.3, Deformer 2: 52.7, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 1: Deformer 0: 10.0, Deformer 1:  0.0, Deformer 2: 52.0, Vertex Weight Sum:  62.0\n\
# INFO : Vertex 2: Deformer 0: 10.0, Deformer 1: 37.3, Deformer 2: 52.7, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 3: Deformer 0: 10.0, Deformer 1:  0.0, Deformer 2: 52.0, Vertex Weight Sum:  62.0\n\
# INFO : Vertex 4: Deformer 0: 10.0, Deformer 1: 52.0, Deformer 2: 38.0, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 5: Deformer 0: 10.0, Deformer 1: 40.7, Deformer 2:  0.0, Vertex Weight Sum:  50.7\n\
# INFO : Vertex 6: Deformer 0: 10.0, Deformer 1: 52.0, Deformer 2: 38.0, Vertex Weight Sum: 100.0\n\
# INFO : Vertex 7: Deformer 0: 10.0, Deformer 1: 40.7, Deformer 2:  0.0, Vertex Weight Sum:  50.7</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Envelope.SetDeformerWeights.html\">Envelope.SetDeformerWeights</a> <a href=\"#!/url=./si_om/Envelope.GetWeights2.html\">Envelope.GetWeights2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";