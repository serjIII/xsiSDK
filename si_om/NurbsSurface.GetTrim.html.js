var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsSurface.GetTrim</title>\n\
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
            <h1>NurbsSurface.GetTrim</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a>.GetTrim <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a complete data description of a nurbs surface trim.\n\
A trim is a nurbs curve list that is projected on a nurbs surface.<br /><br />\n\
Note: This method uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript and PerlScript) don\'t support arguments passed by reference. However, there is a \n\
alternate version of this method which is considered safe to use with C#, JScript and PerlScript: \n\
<a href=\"#!/url=./si_om/NurbsSurface.GetTrim2.html\">NurbsSurface.GetTrim2</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsSurface.GetTrim( Int32 in_nTrimIndex, siNurbsFormat in_eNurbsFormat, Object& out_vsabIsBoundary, Object& out_vsalProjectionType, Object& out_vsalCount, Object& out_vsaControlPoints, Object& out_vsaNbControlPoints, Object& out_vsadKnots, Object& out_vsaNbKnots, Object& out_vsasClosed, Object& out_vsalDegree, Object& out_vsalParameterization );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsSurface.GetTrim( TrimIndex, [NurbsFormat], IsBoundary, ProjectionType, Count, ControlPoints, [NbControlPoints], [Knots], [NbKnots], [Closed], [Degree], [Parameterization] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">TrimIndex		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Specifies which trim must be described. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NurbsFormat		</td>\n\
		<td><a href=\"#!/url=./si_om/siNurbsFormat.html\">siNurbsFormat</a>		</td>\n\
		<td>\n\
 Specifies how the data is formatted. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSINurbs			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IsBoundary		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether the trim is a boundary.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ProjectionType		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Specifies the projection type of this trim.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>UV space					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>World space					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Count		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Number of nurbs curve in the trim		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ControlPoints		</td>\n\
		<td>2D <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		The control points are stored in a 2 dimensional array.<br /><br />\n\
		The array is a 4 x Number of ControlPoints\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbControlPoints		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Specifies the number of ControlPoints per NurbsCurve.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Knots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
An array of knot values.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Specifies the number of Knots per nurbs curve.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Closed		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether the nurbs curve is closed .			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Degree		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Degree of the nurbs curves.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parameterization		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a>		</td>\n\
		<td>\n\
 The parameterization factor of the nurbs curve.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Dim lDegree, bClosed, eParameterization, aControlVertex, aKnots, lCount, aNbControlVertex, bIsBoundary, lProjType\n\
set oRoot = application.activeproject.activescene.root\n\
set oSphere = oRoot.AddGeometry( \"Sphere\", \"NurbsSurface\" )\n\
\' extract each trim contained in the surface\n\
for i = 0 to (oSphere.ActivePrimitive.Geometry.Surfaces.Item(0).TrimCount - 1)\n\
	oSphere.ActivePrimitive.Geometry.Surfaces.Item(0).GetTrim _\n\
		i, _\n\
		siSINurbs, _\n\
		bIsBoundary, _\n\
		lProjType, _\n\
		lCount, _\n\
		aControlVertex, _\n\
		aNbControlVertex, _\n\
		aKnots , _\n\
		aNbKnots, _\n\
		bClosed, _\n\
		lDegree, _\n\
		eParameterization\n\
	oRoot.AddNurbsCurveList2 _\n\
		lCount, _\n\
		aControlVertex, _\n\
		aNbControlVertex, _\n\
		aKnots, _\n\
		aNbKnots, _\n\
		bClosed, _\n\
		lDegree, _\n\
		eParameterization, _\n\
		siSINurbs\n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsSurfaceMesh.AddSurfaceWithTrim.html\">NurbsSurfaceMesh.AddSurfaceWithTrim</a> <a href=\"#!/url=./si_om/NurbsSurface.GetTrim2.html\">NurbsSurface.GetTrim2</a> <a href=\"#!/url=./si_om/NurbsSurface.TrimCount.html\">NurbsSurface.TrimCount</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";