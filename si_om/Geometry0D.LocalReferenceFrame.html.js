var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Geometry0D.LocalReferenceFrame</title>\n\
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
            <h1>Geometry0D.LocalReferenceFrame</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Geometry0D.html\">Geometry0D</a>.LocalReferenceFrame</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Get the local reference frame at a given 0D component</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Geometry0D.LocalReferenceFrame( compIdx, XAxis, XAxisValid, YAxis, YAxisValid, ZAxis, ZAxisValid );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">compIdx		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Index of the component 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0 <= compidx=\"\"></=>< number=\"\" of=\"\" 0d=\"\" component=\"\" /></td>\n\
					<td>The compIdx must be valid					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">XAxis		</td>\n\
		<td><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>		</td>\n\
		<td>\n\
 Upon return, contains the X axis of the local reference frame at the (compIdx)th 0D component 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">XAxisValid		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Upon return, contains TRUE if the X axis of the reference frame is valid, else FALSE 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">YAxis		</td>\n\
		<td><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>		</td>\n\
		<td>\n\
 Upon return, contains the Y axis of the local reference frame at the (compIdx)th 0D component 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">YAxisValid		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Upon return, contains TRUE if the Y axis of the reference frame is valid, else FALSE 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ZAxis		</td>\n\
		<td><a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>		</td>\n\
		<td>\n\
 Upon return, contains the Z axis of the local reference frame at the (compIdx)th 0D component 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ZAxisValid		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Upon return, contains TRUE if the Z axis of the reference frame is valid, else FALSE 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'Create a cube\n\
CreatePrim \"Cube\", \"MeshSurface\"\n\
set oSelList = GetValue(\"SelectionList\")\n\
set oItem = oSelList(0)\n\
set oGeometry = oItem.obj\n\
oNb0D = oGeometry.Nb0D\n\
set o0DGeometry = oGeometry.Geometry0D\n\
set oXAxis = XSIMath.CreateVector3()\n\
set oYAxis = XSIMath.CreateVector3()\n\
set oZAxis = XSIMath.CreateVector3()\n\
\' Loop on all the 0D Component\n\
for i = 0 to oNb0D - 1\n\
o0DGeometry.LocalReferenceFrame i, oXAxis, oXAxisValid, oYAxis, oYAxisValid, oZAxis, oZAxisValid\n\
if oXAxisValid then\n\
LogMessage \"Component [\" &amp; i &amp; \"] X axis : \" &amp; oXAxis.x &amp; \" | \" &amp; oXAxis.y &amp; \" | \" &amp; oXAxis.z \n\
else\n\
LogMessage \"Component [\" &amp; i &amp; \"] INVALID X axis\"\n\
end if\n\
if oYAxisValid then\n\
LogMessage \"Component [\" &amp; i &amp; \"] Y axis : \" &amp; oYAxis.x &amp; \" | \" &amp; oYAxis.y &amp; \" | \" &amp; oYAxis.z \n\
else\n\
LogMessage \"Component [\" &amp; i &amp; \"] INVALID Y axis\"\n\
end if\n\
if oZAxisValid then\n\
LogMessage \"Component [\" &amp; i &amp; \"] Z axis : \" &amp; oZAxis.x &amp; \" | \" &amp; oZAxis.y &amp; \" | \" &amp; oZAxis.z \n\
else\n\
LogMessage \"Component [\" &amp; i &amp; \"] INVALID Z axis\"\n\
end if\n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Geometry0D.AverageLocalReferenceFrame.html\">Geometry0D.AverageLocalReferenceFrame</a> <a href=\"#!/url=./si_om/Geometry0D.html\">Geometry0D</a> <a href=\"#!/url=./si_om/Geometry_V1.Nb0D.html\">Geometry_V1.Nb0D</a> <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";