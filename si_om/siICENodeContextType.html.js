var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siICENodeContextType</title>\n\
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
            <h1>siICENodeContextType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siICENodeContextType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Defines the element set associated with the data for ICE node connections. In other \n\
words, which elements will be evaluated.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siICENodeContextType.siICENodeContextSingleton                              // 1\n\
siICENodeContextType.siICENodeContextComponent0D                            // 2\n\
siICENodeContextType.siICENodeContextComponent1D                            // 4\n\
siICENodeContextType.siICENodeContextComponent2D                            // 8\n\
siICENodeContextType.siICENodeContextComponent0D2D                          // 16\n\
siICENodeContextType.siICENodeContextElementGenerator                       // 32\n\
siICENodeContextType.siICENodeContextSingletonOrComponent0D                 // 3\n\
siICENodeContextType.siICENodeContextSingletonOrComponent1D                 // 5\n\
siICENodeContextType.siICENodeContextSingletonOrComponent2D                 // 9\n\
siICENodeContextType.siICENodeContextSingletonOrComponent0D2D               // 17\n\
siICENodeContextType.siICENodeContextSingletonOrElementGenerator            // 33\n\
siICENodeContextType.siICENodeContextComponent0DOr1DOr2D                    // 14\n\
siICENodeContextType.siICENodeContextNotSingleton                           // 62\n\
siICENodeContextType.siICENodeContextAny                                    // 63</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextSingleton\"> </a>siICENodeContextSingleton		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Only one element; for example, the transformation matrix of a geometry.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextComponent0D\"> </a>siICENodeContextComponent0D		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
One element per vertex or point.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextComponent1D\"> </a>siICENodeContextComponent1D		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
One element per edge or segment.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextComponent2D\"> </a>siICENodeContextComponent2D		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
One element per polygon or subsurface.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextComponent0D2D\"> </a>siICENodeContextComponent0D2D		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
One element per sampled point or polynode.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextElementGenerator\"> </a>siICENodeContextElementGenerator		</td>\n\
		<td class=\"example\">32		</td>\n\
		<td>\n\
Elements generated by a node. These are the special nodes that generate themselves their own evaluation context, and this context can be propagated to the connected nodes. They control how many elements will be evaluated, starting at their output. The number of output elements is not related to the number of components on the output geometry.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextSingletonOrComponent0D\"> </a>siICENodeContextSingletonOrComponent0D		</td>\n\
		<td class=\"example\">siICENodeContextSingleton | siICENodeContextComponent0D		</td>\n\
		<td>\n\
One element or one element per vertex or point.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextSingletonOrComponent1D\"> </a>siICENodeContextSingletonOrComponent1D		</td>\n\
		<td class=\"example\">siICENodeContextSingleton | siICENodeContextComponent1D		</td>\n\
		<td>\n\
One element or one element per edge or segment.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextSingletonOrComponent2D\"> </a>siICENodeContextSingletonOrComponent2D		</td>\n\
		<td class=\"example\">siICENodeContextSingleton | siICENodeContextComponent2D		</td>\n\
		<td>\n\
One element or one element per polygon or subsurface.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextSingletonOrComponent0D2D\"> </a>siICENodeContextSingletonOrComponent0D2D		</td>\n\
		<td class=\"example\">siICENodeContextSingleton | siICENodeContextComponent0D2D		</td>\n\
		<td>\n\
One element or one element per sampled point or polynode.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextSingletonOrElementGenerator\"> </a>siICENodeContextSingletonOrElementGenerator		</td>\n\
		<td class=\"example\">siICENodeContextSingleton | siICENodeContextElementGenerator		</td>\n\
		<td>\n\
One element or one element generated by a node.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextComponent0DOr1DOr2D\"> </a>siICENodeContextComponent0DOr1DOr2D		</td>\n\
		<td class=\"example\">siICENodeContextComponent0D | siICENodeContextComponent1D | siICENodeContextComponent2D		</td>\n\
		<td>\n\
One element per: vertex or point; edge or segment; polygon or subsurface.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextNotSingleton\"> </a>siICENodeContextNotSingleton		</td>\n\
		<td class=\"example\">siICENodeContextComponent0D | siICENodeContextComponent1D | siICENodeContextComponent2D | siICENodeContextComponent0D2D | siMDNodeEvaluationContextPointLocator		</td>\n\
		<td>\n\
Any element set except the singleton (one element only).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextAny\"> </a>siICENodeContextAny		</td>\n\
		<td class=\"example\">siICENodeContextSingleton | siICENodeContextComponent0D | siICENodeContextComponent1D | siICENodeContextComponent2D | siICENodeContextComponent0D2D | siMDNodeEvaluationContextPointLocator		</td>\n\
		<td>\n\
Any element set.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/ICENodePort.ContextType.html\">ICENodePort.ContextType</a> <a href=\"#!/url=./si_om/ICEAttribute.ContextType.html\">ICEAttribute.ContextType</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";