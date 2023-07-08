var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siHardwareInputSemantic</title>\n\
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
            <h1>siHardwareInputSemantic</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siHardwareInputSemantic</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v9.0 (2011)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Describes the standard vertex attribute hardware slot for a Realtime Shader.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siHardwareInputSemantic.siHardwareSemanticPosition                          // 0\n\
siHardwareInputSemantic.siHardwareSemanticNormal                            // 1\n\
siHardwareInputSemantic.siHardwareSemanticColor0                            // 2\n\
siHardwareInputSemantic.siHardwareSemanticColor1                            // 3\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord0                         // 4\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord1                         // 5\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord2                         // 6\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord3                         // 7\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord4                         // 8\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord5                         // 9\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord6                         // 10\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord7                         // 11\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord8                         // 12\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord9                         // 13\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord10                        // 14\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord11                        // 15\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord12                        // 16\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord13                        // 17\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord14                        // 18\n\
siHardwareInputSemantic.siHardwareSemanticTexcoord15                        // 19\n\
siHardwareInputSemantic.siHardwareSemanticAttr0                             // 20\n\
siHardwareInputSemantic.siHardwareSemanticAttr1                             // 21\n\
siHardwareInputSemantic.siHardwareSemanticAttr2                             // 22\n\
siHardwareInputSemantic.siHardwareSemanticAttr3                             // 23\n\
siHardwareInputSemantic.siHardwareSemanticAttr4                             // 24\n\
siHardwareInputSemantic.siHardwareSemanticAttr5                             // 25\n\
siHardwareInputSemantic.siHardwareSemanticAttr6                             // 26\n\
siHardwareInputSemantic.siHardwareSemanticAttr7                             // 27\n\
siHardwareInputSemantic.siHardwareSemanticAttr8                             // 28\n\
siHardwareInputSemantic.siHardwareSemanticAttr9                             // 29\n\
siHardwareInputSemantic.siHardwareSemanticAttr10                            // 30\n\
siHardwareInputSemantic.siHardwareSemanticAttr11                            // 31\n\
siHardwareInputSemantic.siHardwareSemanticAttr12                            // 32\n\
siHardwareInputSemantic.siHardwareSemanticAttr13                            // 33\n\
siHardwareInputSemantic.siHardwareSemanticAttr14                            // 34\n\
siHardwareInputSemantic.siHardwareSemanticAttr15                            // 35\n\
siHardwareInputSemantic.siHardwareSemanticFogcoord                          // 36\n\
siHardwareInputSemantic.siHardwareSemanticPsize                             // 37\n\
siHardwareInputSemantic.siHardwareSemanticTangent                           // 38\n\
siHardwareInputSemantic.siHardwareSemanticBinormal                          // 39\n\
siHardwareInputSemantic.siHardwareSemanticWeight                            // 40\n\
siHardwareInputSemantic.siHardwareSemanticIndice                            // 41\n\
siHardwareInputSemantic.siHardwareSemanticTessfactor                        // 42\n\
siHardwareInputSemantic.siHardwareSemanticDepth                             // 43\n\
siHardwareInputSemantic.siHardwareSemanticSample                            // 44\n\
siHardwareInputSemantic.siHardwareSemanticMax                               // 45</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr0\"> </a>siHardwareSemanticAttr0		</td>\n\
		<td class=\"example\">20		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr1\"> </a>siHardwareSemanticAttr1		</td>\n\
		<td class=\"example\">21		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr2\"> </a>siHardwareSemanticAttr2		</td>\n\
		<td class=\"example\">22		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr3\"> </a>siHardwareSemanticAttr3		</td>\n\
		<td class=\"example\">23		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr4\"> </a>siHardwareSemanticAttr4		</td>\n\
		<td class=\"example\">24		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr5\"> </a>siHardwareSemanticAttr5		</td>\n\
		<td class=\"example\">25		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr6\"> </a>siHardwareSemanticAttr6		</td>\n\
		<td class=\"example\">26		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr7\"> </a>siHardwareSemanticAttr7		</td>\n\
		<td class=\"example\">27		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr8\"> </a>siHardwareSemanticAttr8		</td>\n\
		<td class=\"example\">28		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr9\"> </a>siHardwareSemanticAttr9		</td>\n\
		<td class=\"example\">29		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr10\"> </a>siHardwareSemanticAttr10		</td>\n\
		<td class=\"example\">30		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr11\"> </a>siHardwareSemanticAttr11		</td>\n\
		<td class=\"example\">31		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr12\"> </a>siHardwareSemanticAttr12		</td>\n\
		<td class=\"example\">32		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr13\"> </a>siHardwareSemanticAttr13		</td>\n\
		<td class=\"example\">33		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr14\"> </a>siHardwareSemanticAttr14		</td>\n\
		<td class=\"example\">34		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticAttr15\"> </a>siHardwareSemanticAttr15		</td>\n\
		<td class=\"example\">35		</td>\n\
		<td>\n\
Passed using glVertexAttribute		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticBinormal\"> </a>siHardwareSemanticBinormal		</td>\n\
		<td class=\"example\">39		</td>\n\
		<td>\n\
Passed using glMultiTexCoord[7]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticColor0\"> </a>siHardwareSemanticColor0		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Passed using glColor		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticColor1\"> </a>siHardwareSemanticColor1		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Passed using glSecondaryColor		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticDepth\"> </a>siHardwareSemanticDepth		</td>\n\
		<td class=\"example\">43		</td>\n\
		<td>\n\
DirectX only (D3DDECLUSAGE_DEPTH).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticFogcoord\"> </a>siHardwareSemanticFogcoord		</td>\n\
		<td class=\"example\">36		</td>\n\
		<td>\n\
Passed using glFogCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticIndice\"> </a>siHardwareSemanticIndice		</td>\n\
		<td class=\"example\">41		</td>\n\
		<td>\n\
DirectX only (D3DDECLUSAGE_BLENDINDICES).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticMax\"> </a>siHardwareSemanticMax		</td>\n\
		<td class=\"example\">45		</td>\n\
		<td>\n\
Max		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticNormal\"> </a>siHardwareSemanticNormal		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Passed using glNormal		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticPosition\"> </a>siHardwareSemanticPosition		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Passed using glVertex		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticPsize\"> </a>siHardwareSemanticPsize		</td>\n\
		<td class=\"example\">37		</td>\n\
		<td>\n\
Passed using glPointSize		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticSample\"> </a>siHardwareSemanticSample		</td>\n\
		<td class=\"example\">44		</td>\n\
		<td>\n\
DirectX only (D3DDECLUSAGE_SAMPLE).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTangent\"> </a>siHardwareSemanticTangent		</td>\n\
		<td class=\"example\">38		</td>\n\
		<td>\n\
Passed using glMultiTexCoord[6]		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTessfactor\"> </a>siHardwareSemanticTessfactor		</td>\n\
		<td class=\"example\">42		</td>\n\
		<td>\n\
DirectX only (D3DDECLUSAGE_TESSFACTOR).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord0\"> </a>siHardwareSemanticTexcoord0		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord1\"> </a>siHardwareSemanticTexcoord1		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord2\"> </a>siHardwareSemanticTexcoord2		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord3\"> </a>siHardwareSemanticTexcoord3		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord4\"> </a>siHardwareSemanticTexcoord4		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord5\"> </a>siHardwareSemanticTexcoord5		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord6\"> </a>siHardwareSemanticTexcoord6		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord7\"> </a>siHardwareSemanticTexcoord7		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord8\"> </a>siHardwareSemanticTexcoord8		</td>\n\
		<td class=\"example\">12		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord9\"> </a>siHardwareSemanticTexcoord9		</td>\n\
		<td class=\"example\">13		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord10\"> </a>siHardwareSemanticTexcoord10		</td>\n\
		<td class=\"example\">14		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord11\"> </a>siHardwareSemanticTexcoord11		</td>\n\
		<td class=\"example\">15		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord12\"> </a>siHardwareSemanticTexcoord12		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord13\"> </a>siHardwareSemanticTexcoord13		</td>\n\
		<td class=\"example\">17		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord14\"> </a>siHardwareSemanticTexcoord14		</td>\n\
		<td class=\"example\">18		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticTexcoord15\"> </a>siHardwareSemanticTexcoord15		</td>\n\
		<td class=\"example\">19		</td>\n\
		<td>\n\
Passed using glMultiTexCoord		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSemanticWeight\"> </a>siHardwareSemanticWeight		</td>\n\
		<td class=\"example\">40		</td>\n\
		<td>\n\
DirectX only (D3DDECLUSAGE_BLENDWEIGHT).		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttribute.html#PutSemanticValue\">CHardwareAttribute::PutSemanticValue</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttribute.html#GetSemantic\">CHardwareAttribute::GetSemantic</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CHardwareAttribute.html#PutSemanticValue\">CHardwareAttribute::PutSemanticValue</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";