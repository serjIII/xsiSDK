var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siRefMode</title>\n\
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
            <h1>siRefMode</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siRefMode</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Reference transformation modes for transformation commands (Translate, Rotate, Scale). <br /><br />Note: \"COG\" indicates an additional translation about the Centre-Of-Geometry. \"Sym\" indicates a symmetrical translation. These indicators can also be used in combination.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siRefMode.siGlobal                                                          // 1\n\
siRefMode.siLocal                                                           // 2\n\
siRefMode.siObjCtr                                                          // 3\n\
siRefMode.siView                                                            // 4\n\
siRefMode.siParent                                                          // 6\n\
siRefMode.siPlane                                                           // 7\n\
siRefMode.siPivot                                                           // 8\n\
siRefMode.siAdd                                                             // 70\n\
siRefMode.siGlobalCOG                                                       // 17\n\
siRefMode.siLocalCOG                                                        // 18\n\
siRefMode.siObjectCOG                                                       // 19\n\
siRefMode.siViewCOG                                                         // 20\n\
siRefMode.siParentCOG                                                       // 22\n\
siRefMode.siPlaneCOG                                                        // 23\n\
siRefMode.siPivotCOG                                                        // 24\n\
siRefMode.siAddCOG                                                          // 86\n\
siRefMode.siGlobalSym                                                       // 2049\n\
siRefMode.siLocalSym                                                        // 2050\n\
siRefMode.siObjectSym                                                       // 2051\n\
siRefMode.siViewSym                                                         // 2052\n\
siRefMode.siParentSym                                                       // 2054\n\
siRefMode.siPlaneSym                                                        // 2055\n\
siRefMode.siPivotSym                                                        // 2056\n\
siRefMode.siAddSym                                                          // 2118\n\
siRefMode.siGlobalSymCOG                                                    // 2065\n\
siRefMode.siLocalSymCOG                                                     // 2066\n\
siRefMode.siObjectSymCOG                                                    // 2067\n\
siRefMode.siViewSymCOG                                                      // 2068\n\
siRefMode.siParentSymCOG                                                    // 2070\n\
siRefMode.siPlaneSymCOG                                                     // 2071\n\
siRefMode.siPivotSymCOG                                                     // 2072\n\
siRefMode.siAddSymCOG                                                       // 2134</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGlobal\"> </a>siGlobal		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Global (world) relative movement or position		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLocal\"> </a>siLocal		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Local movement relative to center of each object/component		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjCtr\"> </a>siObjCtr		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
By Reference movement relative to center of referenced object or an absolute position where 0,0,0 is the center of the referenced object. This corresponds to Ref mode on the MCP panel.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siView\"> </a>siView		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
By Reference movement relative to the view. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParent\"> </a>siParent		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Object/Parent movement is relative to the center of the parent (for an object) or the object (for a component).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPlane\"> </a>siPlane		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
By Reference movement relative to the active reference plane. This corresponds to Plane mode on the MCP panel.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPivot\"> </a>siPivot		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Object/Pivot movement is relative to the object\'s pivot. If the object has not pivot or neutral pose, siPivot is the same as siParent.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAdd\"> </a>siAdd		</td>\n\
		<td class=\"example\">70		</td>\n\
		<td>\n\
Additive rotation when manipulating  (rotation only)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGlobalCOG\"> </a>siGlobalCOG		</td>\n\
		<td class=\"example\">17		</td>\n\
		<td>\n\
Global + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLocalCOG\"> </a>siLocalCOG		</td>\n\
		<td class=\"example\">18		</td>\n\
		<td>\n\
Local + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjectCOG\"> </a>siObjectCOG		</td>\n\
		<td class=\"example\">19		</td>\n\
		<td>\n\
Object + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siViewCOG\"> </a>siViewCOG		</td>\n\
		<td class=\"example\">20		</td>\n\
		<td>\n\
View + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParentCOG\"> </a>siParentCOG		</td>\n\
		<td class=\"example\">22		</td>\n\
		<td>\n\
Parent + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPlaneCOG\"> </a>siPlaneCOG		</td>\n\
		<td class=\"example\">23		</td>\n\
		<td>\n\
Plane + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPivotCOG\"> </a>siPivotCOG		</td>\n\
		<td class=\"example\">24		</td>\n\
		<td>\n\
Pivot + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddCOG\"> </a>siAddCOG		</td>\n\
		<td class=\"example\">86		</td>\n\
		<td>\n\
Add + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGlobalSym\"> </a>siGlobalSym		</td>\n\
		<td class=\"example\">2049		</td>\n\
		<td>\n\
Global + Sym		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLocalSym\"> </a>siLocalSym		</td>\n\
		<td class=\"example\">2050		</td>\n\
		<td>\n\
Local + Sym		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjectSym\"> </a>siObjectSym		</td>\n\
		<td class=\"example\">2051		</td>\n\
		<td>\n\
Object + Sym		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siViewSym\"> </a>siViewSym		</td>\n\
		<td class=\"example\">2052		</td>\n\
		<td>\n\
View + Sym		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParentSym\"> </a>siParentSym		</td>\n\
		<td class=\"example\">2054		</td>\n\
		<td>\n\
Parent + Sym		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPlaneSym\"> </a>siPlaneSym		</td>\n\
		<td class=\"example\">2055		</td>\n\
		<td>\n\
Plane + Sym		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPivotSym\"> </a>siPivotSym		</td>\n\
		<td class=\"example\">2056		</td>\n\
		<td>\n\
Pivot + Sym		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddSym\"> </a>siAddSym		</td>\n\
		<td class=\"example\">2118		</td>\n\
		<td>\n\
Add + Sym		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGlobalSymCOG\"> </a>siGlobalSymCOG		</td>\n\
		<td class=\"example\">2065		</td>\n\
		<td>\n\
Global + Sym + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLocalSymCOG\"> </a>siLocalSymCOG		</td>\n\
		<td class=\"example\">2066		</td>\n\
		<td>\n\
Local + Sym + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjectSymCOG\"> </a>siObjectSymCOG		</td>\n\
		<td class=\"example\">2067		</td>\n\
		<td>\n\
Object + Sym + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siViewSymCOG\"> </a>siViewSymCOG		</td>\n\
		<td class=\"example\">2068		</td>\n\
		<td>\n\
View + Sym + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParentSymCOG\"> </a>siParentSymCOG		</td>\n\
		<td class=\"example\">2070		</td>\n\
		<td>\n\
Parent + Sym + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPlaneSymCOG\"> </a>siPlaneSymCOG		</td>\n\
		<td class=\"example\">2071		</td>\n\
		<td>\n\
Plane + Sym + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPivotSymCOG\"> </a>siPivotSymCOG		</td>\n\
		<td class=\"example\">2072		</td>\n\
		<td>\n\
Pivot + Sym + COG		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddSymCOG\"> </a>siAddSymCOG		</td>\n\
		<td class=\"example\">2134		</td>\n\
		<td>\n\
Add + Sym + COG		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Translate.html\">Translate</a> <a href=\"#!/url=./si_cmds/Rotate.html\">Rotate</a> <a href=\"#!/url=./si_cmds/Scale.html\">Scale</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";