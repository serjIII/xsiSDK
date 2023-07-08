var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MoveJoint</title>\n\
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
            <h1>MoveJoint</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MoveJoint</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Repositions a chain element (root, bone, or effector) while fixing all others in space. \n\
Connecting bones resize and rotate to fit the new position of the chain element. In branch \n\
mode elements after the moved element move together as a group (fixed relative to the moved \n\
element), whereas in node mode they are fixed in global space. In bone mode a bone\'s base \n\
and tip move together, otherwise the base and tip move independently.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>MoveJoint( InputObjs, X, Y, Z, [MoveJointBranch], [MoveJointBone] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Skeleton root, bone, effector, or joint property 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">X		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 New x coordinate 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Y		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 New y coordinate 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Z		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 New z coordinate 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MoveJointBranch		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True if moving the element in branch mode, False for node mode. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MoveJointBone		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		 Specifies whether to move the element as a bone or a joint. \n\
		 If FALSE, the bone\'s base is moved and the tip stays fixed. If TRUE \n\
		 the bone\'s bone and tip move together. This parameter is ignored for \n\
		 roots and effectors.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Create a circle with 5 control points.\n\
\' Then create a 4 bone chain and move the joints to the control point positions.\n\
\'\n\
\'\n\
\' create the circle\n\
\'\n\
set oRoot = application.activeproject.activescene.root\n\
set oCircle = oRoot.addgeometry(\"Circle\", \"NurbsCurve\" )\n\
SetValue oCircle&amp;\".crvlist.geom.subdivu\", 5\n\
\'\n\
\' Create a 4 bone chain\n\
\'\n\
set oChain = oRoot.Add2DChain( Array(-2,0,0),Array(-1,0,0), , si2DChainTop ) \n\
for i = 0 to 2\n\
	oChain.AddBone(Array(i,0,0))\n\
next \n\
\'\n\
\' move the joints on the chain to the circle\'s control points\n\
\'\n\
set oGeometry = oCircle.activeprimitive.geometry\n\
for i=0 to oGeometry.Points.Count - 1\n\
	\' get the position of point\n\
	set oPos = oGeometry.Points(i).position\n\
	if i &lt; oGeometry.Points.Count - 1 then\n\
		MoveJoint oChain.Bones(i), oPos.x, oPos.y, oPos.z, False, False\n\
	else\n\
		MoveJoint oChain.Effector, oPos.x, oPos.y, oPos.z, False, False\n\
	end if\n\
next \n\
\'\n\
\' log the positions to show that they are the same\n\
\'\n\
set oPosP = XSIMath.CreateVector3\n\
set oPosJ = XSIMath.CreateVector3\n\
for i=0 to oGeometry.Points.Count - 1\n\
	set oPosP = oGeometry.Points(i).position\n\
	if i &lt; oGeometry.Points.Count - 1 then\n\
		oChain.Bones(i).kinematics.global.transform.GetTranslation oPosJ\n\
	else\n\
		oChain.Effector.kinematics.global.transform.GetTranslation oPosJ\n\
	end if\n\
	logmessage \"Point Position: \" &amp; oPosP.x &amp; \" \" &amp; oPosP.y &amp; \" \" &amp; oPosP.z\n\
	logmessage \"Joint Position: \" &amp; oPosJ.x &amp; \" \" &amp; oPosJ.y &amp; \" \" &amp; oPosJ.z\n\
next\n\
\'\n\
\' Output from running this script:\n\
\'\n\
\'INFO : \"Point Position: 5.19701675181841 0 0\"\n\
\'INFO : \"Joint Position: 5.19701675181841 0 0\"\n\
\'INFO : \"Point Position: 1.60596649636318 -4.94265664711197 0\"\n\
\'INFO : \"Joint Position: 1.60596649636318 -4.94265664711197 -7.48168305103674E-16\"\n\
\'INFO : \"Point Position: -4.20447487227238 -3.05472980263579 0\"\n\
\'INFO : \"Joint Position: -4.20447487227238 -3.0547298026358 2.95822839457879E-31\"\n\
\'INFO : \"Point Position: -4.20447487227238 3.05472980263579 0\"\n\
\'INFO : \"Joint Position: -4.20447487227238 3.0547298026358 -5.39677520623026E-33\"\n\
\'INFO : \"Point Position: 1.60596649636318 4.94265664711197 0\"\n\
\'INFO : \"Joint Position: 1.60596649636318 4.94265664711198 6.99081284597971E-32\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";