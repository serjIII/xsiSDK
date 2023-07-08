var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Model.AddActionSource</title>\n\
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
            <h1>Model.AddActionSource</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Model.html\">Model</a>.AddActionSource</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates and adds an <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> to the model\'s \n\
collection of sources.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ActionSource Model.AddActionSource( String in_vName, Object in_vTargetArray, Object in_vSourceArray, Object in_vActiveArray );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Model.AddActionSource( [Name], [TargetArray], [SourceArray], [ActiveArray] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of the new action source		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">TargetArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
Array of source item target paths.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SourceArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		Array of source item sources. For now only <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>,\n\
		<a href=\"#!/url=./si_om/StaticSource.html\">StaticSource</a> or <a href=\"#!/url=./files/Double.htm\">Double</a> values \n\
		representing static values are valid sources.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ActiveArray		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
Array of source item active flags.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to create an ActionSource \n\
\' from FCurve information.\n\
\'\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
if Application.Selection.Count &lt;&gt; 0 then\n\
	set oObject = Application.Selection(0)\n\
else\n\
	\' Create sample scene\n\
	set oNull = oRoot.AddNull\n\
	set oObject = oNull.AddNull()\n\
	oObject.posx.AddFCurve2( Array(1, -10, 50, 0, 100, 10) )\n\
	oObject.posy.AddFCurve2( Array(1, 10, 50, 0, 100, 10) )\n\
end if\n\
CreateActionSourceFromLocalFCurves oObject\n\
sub CreateActionSourceFromLocalFCurves( in_object )\n\
	strTitle = \"Create ActionSource from Local FCurves\"\n\
	if IsObject(in_object) &lt;&gt; True then\n\
		MsgBox \"Please select an object\", vbExclamation, strTitle\n\
		exit sub\n\
	end if\n\
	if InStr(in_object.Families, \"3D Object\") = 0 then\n\
		MsgBox \"Please select a 3D object\", vbExclamation, strTitle\n\
		exit sub\n\
	end if\n\
	set k = in_object.Kinematics\n\
	\' ... assuming all animation is on local transform\n\
	set oAnimatedParams = k.AnimatedParameters(siFCurveSource)\n\
	if oAnimatedParams.Count = 0 then\n\
		MsgBox \"Please select an object with animation\", vbExclamation, strTitle\n\
		exit sub\n\
	end if\n\
	\' Find local parameters		\n\
	set oLocalParams = CreateObject(\"XSI.Collection\")\n\
	for each oAnimatedParam in oAnimatedParams\n\
		\' Poor man\'s test for local parameters \n\
		if InStr( oAnimatedParam.FullName, \".local.\" ) &lt;&gt; 0 then\n\
			\' Only support fcurves for now.\n\
			if TypeName(oAnimatedParam.Source) = \"FCurve\" then\n\
				oLocalParams.Add oAnimatedParam \n\
			end if\n\
		end if	\n\
	next\n\
	if oLocalParams.Count = 0 then\n\
		exit sub\n\
	end if\n\
	Dim aTarget, aSource, aActive\n\
	ReDim aTarget(oLocalParams.Count-1)\n\
	ReDim aSource(oLocalParams.Count-1)\n\
	ReDim aActive(oLocalParams.Count-1)\n\
	i=0\n\
	for each oLocalParam in oLocalParams\n\
		aTarget(i) = oLocalParam.FullName\n\
		set aSource(i) = oLocalParam.Source\n\
		aActive(i) = True\n\
		i = i + 1\n\
	next\n\
	set oActionSource = oRoot.AddActionSource( in_object.Name &amp; \"-localfcurves\", _\n\
		aTarget, aSource, aActive )\n\
	LogMessage \"Created new ActionSource \" &amp; oActionSource.FullName\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";