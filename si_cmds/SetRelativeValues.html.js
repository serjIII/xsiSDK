var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetRelativeValues</title>\n\
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
            <h1>SetRelativeValues</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetRelativeValues</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Sets a key on the parameter function curve if the parameter is single-linked (l_fcv) or\n\
sets a set of relative values in the Interpolator object if the parameter is multiple-linked (l_interp) or object\'s orientation linked (l_interpOri).<br /><br />\n\
An Interpolator object is created when linking a parameter with multiple driving parameters or with an object\'s orientation.\n\
It is used to access and store sets of relative values.<br /><br />\n\
If A is single-linked with B, then there is a link function curve that animates \n\
the value of A as the value of B changes. On this function curve, the Y \n\
axis represents values of A, and the X axis represents values of B. \n\
SetRelativeValues \"A\" sets a key on this function curve using the current \n\
values of A and B.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetRelativeValues( [InputObj] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/paramexpr.htm\">Parameter</a> that is linked with (controlled by) another parameter. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected and marked parameters			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example shows that relative values of a single-linked parameter (l_fcv) are represented by an FCurve function.\n\
NewScene, false\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
SetExpr \"cube.kine.local.posx\", \"l_fcv( cone.kine.global.posx )\"\n\
SetValue \"cone.kine.local.posx\", 1\n\
SetValue \"cube.kine.local.posx\", 2.5\n\
SetRelativeValues \"cube.kine.local.posx\"\n\
SetValue \"cone.kine.local.posx\", 3\n\
SetValue \"cube.kine.local.posx\", 4\n\
SetRelativeValues \"cube.kine.local.posx\"\n\
OpenView \"Animation Editor\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example shows that relative values of a multiple-linked parameter (l_interp) are stored in the Interpolator object.\n\
NewScene, false\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
SetExpr \"cube.kine.local.posx\", \"l_interp( cone.kine.global.posx, cone.kine.global.posy )\"\n\
SetValue \"cone.kine.local.posx\", 1.5\n\
SetValue \"cone.kine.local.posy\", 2\n\
SetValue \"cube.kine.local.posx\", 2.5\n\
SetRelativeValues \"cube.kine.local.posx\"\n\
SetValue \"cone.kine.local.posx\", 3\n\
SetValue \"cone.kine.local.posy\", 3.5\n\
SetValue \"cube.kine.local.posx\", 4\n\
SetRelativeValues \"cube.kine.local.posx\"\n\
numKeys = GetNumRelativeValues( \"cube.kine.local.Expression.Interpolator\" )\n\
Application.LogMessage \"The Interpolator object has \" &amp; numKeys &amp; \" sets of relative values\"\n\
for i = 0 to numKeys - 1\n\
	Application.LogMessage \"---------------------------\"\n\
	Application.LogMessage \"Relative values set #\" &amp; i &amp; \":\"\n\
	values = GetRelativeValue( \"cube.kine.local.Expression.Interpolator\", i )\n\
	j = 0\n\
	for each item in values\n\
		if (j = 0) then\n\
			Application.LogMessage \"Controlled value = \" &amp; item\n\
		else\n\
			Application.LogMessage \"Controlling #\" &amp; j &amp; \" value = \" &amp; item\n\
		end if\n\
		j = j + 1\n\
	next\n\
next\n\
\' INFO : The Interpolator object has 3 sets of relative values\n\
\' INFO : ---------------------------\n\
\' INFO : Relative values set #0:\n\
\' INFO : Controlled value = 0\n\
\' INFO : Controlling #1 value = 0\n\
\' INFO : Controlling #2 value = 0\n\
\' INFO : ---------------------------\n\
\' INFO : Relative values set #1:\n\
\' INFO : Controlled value = 2.5\n\
\' INFO : Controlling #1 value = 1.5\n\
\' INFO : Controlling #2 value = 2\n\
\' INFO : ---------------------------\n\
\' INFO : Relative values set #2:\n\
\' INFO : Controlled value = 4\n\
\' INFO : Controlling #1 value = 3\n\
\' INFO : Controlling #2 value = 3.5</pre></td></tr>\n\
</table>\n\
</div><h4>3. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example shows how to deal with sets of relative values with an object\'s orientation linked parameter (l_interpOri).\n\
NewScene , False\n\
CreatePrim \"Cone\", \"MeshSurface\"\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
SetExpr \"cube.kine.local.posx\", \"l_interpOri( cone.kine.local.rotx, cone.kine.local.roty, cone.kine.local.rotz )\"\n\
SetValue \"cube.kine.local.posx\", 2.5\n\
SetValue \"cone.kine.local.rotx\", 45\n\
SetRelativeValues \"cube.kine.local.posx\"\n\
SetValue \"cube.kine.local.posx\", 5.5\n\
SetValue \"cone.kine.local.rotx\", 90\n\
SetRelativeValues \"cube.kine.local.posx\"\n\
numKeys = GetNumRelativeValues( \"cube.kine.local.Expression.Interpolator\" )\n\
Application.LogMessage \"The Interpolator object has \" &amp; numKeys &amp; \" sets of relative values\"\n\
for i = 0 to numKeys - 1\n\
	Application.LogMessage \"---------------------------\"\n\
	Application.LogMessage \"Relative values set #\" &amp; i &amp; \":\"\n\
	values = GetRelativeValue( \"cube.kine.local.Expression.Interpolator\", i )\n\
	Application.LogMessage \"Controlled value (cube.kine.local.posx) : \" &amp; values(0)\n\
	set quaternion = XSIMath.CreateQuaternion( values(1), values(2), values(3), values(4) )\n\
	eulerValues = quaternion.GetXYZAngleValues2()\n\
	Application.LogMessage \"Controlling #1 value (cone.kine.local.rotx) : \" &amp; XSIMath.RadiansToDegrees( eulerValues(0) )\n\
	Application.LogMessage \"Controlling #2 value (cone.kine.local.roty) : \" &amp; XSIMath.RadiansToDegrees( eulerValues(1) )\n\
	Application.LogMessage \"Controlling #3 value (cone.kine.local.rotz) : \" &amp; XSIMath.RadiansToDegrees( eulerValues(2) )\n\
next\n\
\' INFO : The Interpolator object has 3 sets of relative values\n\
\' INFO : ---------------------------\n\
\' INFO : Relative values set #0:\n\
\' INFO : Controlled value (cube.kine.local.posx) : 0\n\
\' INFO : Controlling #1 value (cone.kine.local.rotx) : 0\n\
\' INFO : Controlling #2 value (cone.kine.local.roty) : 0\n\
\' INFO : Controlling #3 value (cone.kine.local.rotz) : 0\n\
\' INFO : ---------------------------\n\
\' INFO : Relative values set #1:\n\
\' INFO : Controlled value (cube.kine.local.posx) : 2.5\n\
\' INFO : Controlling #1 value (cone.kine.local.rotx) : 45\n\
\' INFO : Controlling #2 value (cone.kine.local.roty) : 0\n\
\' INFO : Controlling #3 value (cone.kine.local.rotz) : 0\n\
\' INFO : ---------------------------\n\
\' INFO : Relative values set #2:\n\
\' INFO : Controlled value (cube.kine.local.posx) : 5.5\n\
\' INFO : Controlling #1 value (cone.kine.local.rotx) : 90\n\
\' INFO : Controlling #2 value (cone.kine.local.roty) : 0\n\
\' INFO : Controlling #3 value (cone.kine.local.rotz) : 0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddExpr.html\">AddExpr</a> <a href=\"#!/url=./si_cmds/SetExpr.html\">SetExpr</a> <a href=\"#!/url=./si_cmds/GetRelativeValue.html\">GetRelativeValue</a> <a href=\"#!/url=./si_cmds/GetNumRelativeValues.html\">GetNumRelativeValues</a> <a href=\"#!/url=./si_cmds/RemoveRelativeValue.html\">RemoveRelativeValue</a> <a href=\"#!/url=./si_cmds/RemoveAnimation.html\">RemoveAnimation</a> <a href=\"#!/url=./si_om/Expression.html\">Expression</a> <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";