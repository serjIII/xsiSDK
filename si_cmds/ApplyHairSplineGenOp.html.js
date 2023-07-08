var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ApplyHairSplineGenOp</title>\n\
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
            <h1>ApplyHairSplineGenOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ApplyHairSplineGenOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.03</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Adds hair splines.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ApplyHairSplineGenOp( in_Objs, PresetObj );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the <a href=\"#!/url=./files/paramexpr.htm\">full path</a> of the hair operator.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">in_Objs		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">Selection list</a>		</td>\n\
		<td>\n\
 Specifies the objects to be modified		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Hair geometry preset: only \"Hair-Spline\" is supported.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\"Hair-Spline\"			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Hair-Spline					</td>\n\
					<td>Hair-Spline					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create three or more curves to define hair boundaries (you need at least\n\
\' three curvelists to get this operator to work)\n\
Set oCrvList1 = SICreateCurve( \"crvlist\", 3, 0 )\n\
SIAddPointOnCurveAtEnd oCrvList1, -4.35922330097087, 0, -1.61233880745129, False\n\
SIAddPointOnCurveAtEnd oCrvList1, -2.18446601941748, 0, -1.14612035710411, False\n\
SIAddPointOnCurveAtEnd oCrvList1, -2.49514563106796, 0, 1.34037804474754, False\n\
SIAddPointOnCurveAtEnd oCrvList1, -0.300970873786408, 0, 2.77788493331803, False\n\
Set oCrvList2 = SICreateCurve( \"crvlist\", 3, 0 )\n\
SIAddPointOnCurveAtEnd oCrvList2, -4.35922330097087, 0, -1.35980381351323, False\n\
SIAddPointOnCurveAtEnd oCrvList2, -3.64077669902913, 0, -2.52534993938119, False\n\
SIAddPointOnCurveAtEnd oCrvList2, -1.40776699029126, 0, -3.18582607737304, False\n\
SIAddPointOnCurveAtEnd oCrvList2, -4.85436893203888E-02, 0, -1.94257687644721, False\n\
SIAddPointOnCurveAtEnd oCrvList2, 0.669902912621358, 0, 0.543921525404436, False\n\
SIAddPointOnCurveAtEnd oCrvList2, 2.45631067961165, 0, 1.98142841397492, False\n\
SIAddPointOnCurveAtEnd oCrvList2, 4.14563106796116, 0, 0.874159594400358, False\n\
Set oCrvList3 = SICreateCurve( \"crvlist\", 3, 0 )\n\
SIAddPointOnCurveAtEnd oCrvList3, -0.689320388349515, 0, 2.5642014769089, False\n\
SIAddPointOnCurveAtEnd oCrvList3, 2.0873786407767, 0, 2.5059241706155, False\n\
SIAddPointOnCurveAtEnd oCrvList3, 3.9126213592233, 0, 0.796456519342494, False\n\
\' Select curves and add the simulation operator to it.\n\
DeselectAll\n\
AddToSelection oCrvList1, , True\n\
AddToSelection oCrvList2, , True\n\
AddToSelection oCrvList3, , True\n\
ApplyHairSplineGenOp\n\
\' Output of above script is:\n\
\'INFO : \"Expanded: crvlist,crvlist2,crvlist4\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";