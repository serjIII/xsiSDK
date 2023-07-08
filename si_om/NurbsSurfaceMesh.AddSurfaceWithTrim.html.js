var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsSurfaceMesh.AddSurfaceWithTrim</title>\n\
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
            <h1>NurbsSurfaceMesh.AddSurfaceWithTrim</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>.AddSurfaceWithTrim</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Adds a trimmed surface to the mesh.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsSurface NurbsSurfaceMesh.AddSurfaceWithTrim( Object in_vsaControlPoints, Object in_vsadUKnots, Object in_vsadVKnots, Boolean in_bUClosed, Boolean in_bVClosed, Int32 in_lUDegree, Int32 in_lVDegree, siKnotParameterization in_eUParam, siKnotParameterization in_eVParam, siNurbsFormat in_eNurbsFormat, Int32 in_lNbTrim, Object in_vsabIsBoundary, Object in_vsalProjectionType, Object in_vsalNbCurve, Object in_vsaCurveControlPoints, Object in_vsaCurveNbControlPoints, Object in_vsaCurveParam, Object in_vsaCurveKnots, Object in_vsaCurveNbKnots, Object in_vsaCurveDegree, Object in_vsaCurveClosed );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = NurbsSurfaceMesh.AddSurfaceWithTrim( [ControlPoints], [UKnots], [VKnots], [UClosed], [VClosed], [UDegree], [VDegree], [UParam], [VParam], [NurbsFormat], [NbTrim], [IsBoundary], [ProjectionType], [NbCurve], [CurveControlPoints], [CurveNbControlPoints], [CurveParam], [CurveKnots], [CurveNbKnots], [CurveDegree], [CurveClosed] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsSurface.html\">NurbsSurface</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ControlPoints		</td>\n\
		<td>1D or 3D <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
 \n\
		The control points used for creating the nurbs surface. The control points \n\
		can be stored in a 1-dimensional array or in a 3-dimensional matrix (UxVx4) \n\
		of x,y,z,w values. The 1 dimensional array should contain the number of \n\
		points in U and V at the beginning followed by a sequence of x,y,z,w values \n\
		e.g. {U,V,Xo,Yo,Zo,...X(uv-1),Y(uv-1),Z(uv-1),W(uv-1)}. \n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
A vector of knot values in the U direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
An array of knot values in the V direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UClosed		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether the nurbs surface is closed or not in U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VClosed		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies whether the nurbs surface is closed or not in V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UDegree		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Degree of the nurbs surface in U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VDegree		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Degree of the nurbs surface in V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UParam		</td>\n\
		<td><a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a>		</td>\n\
		<td>\n\
 The parameterization factor of the nurbs surface in U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siNonUniformParameterization			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VParam		</td>\n\
		<td><a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a>		</td>\n\
		<td>\n\
 The parameterization factor of the nurbs surface in V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siNonUniformParameterization			</p>\n\
		</td>\n\
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
		<td class=\"name\">NbTrim		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
 Specifies how many trims this surface contains. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">IsBoundary		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Boolean.htm\">Boolean</a>s		</td>\n\
		<td>\n\
 Specifies whether each trim is a boundary.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ProjectionType		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
\n\
		Specifies the projection type of each trim. Each member of the array maps to a single trim, \n\
		so the array is actually a combination of the possible values (0 and 1). \n\
				<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
		<td class=\"name\">NbCurve		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Number of nurbs curves in each trim		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveControlPoints		</td>\n\
		<td>2D <a href=\"#!/url=./files/Array.htm\">Array</a> of 2D Array		</td>\n\
		<td>\n\
\n\
		Array where each set of control points is stored in a 2-dimensional array. \n\
		The array is 4 x Number of ControlPoints.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveNbControlPoints		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of Array of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Specifies the number of ControlPoints per NurbsCurve per trim.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveParam		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of Array of <a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a> values		</td>\n\
		<td>\n\
 The parameterization factor of the nurbs curve for each trim.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of Array of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
An array of knot values for each trim.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveNbKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of Array of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Specifies the number of Knots per nurbs curve per trim.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveDegree		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of Array of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Degree of the nurbs curves for each trim.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveClosed		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of Array of <a href=\"#!/url=./files/Boolean.htm\">Boolean</a>s		</td>\n\
		<td>\n\
 Specifies whether the nurbs curve is closed for each trim.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example creates a sphere with a circular trim\n\
Dim lDegree(2), bClosed(2), eParameterization(2), aControlPoints, aKnots(2)\n\
\' Extract data from a sphere nurbs surface\n\
set oRoot = Application.activeproject.activescene.root\n\
set oSphere = oRoot.AddGeometry( \"Sphere\", \"NurbsSurface\" )\n\
oSphere.ActivePrimitive.Geometry.Surfaces(0).Get _		\n\
	siSINurbs, _\n\
	aControlPoints, _\n\
	aKnots(siUDirection),aKnots(siVDirection) , _\n\
	bClosed(siUDirection),bClosed(siVDirection), _\n\
	lDegree(siUDirection),lDegree(siVDirection), _\n\
	eParameterization(siUDirection),eParameterization(siVDirection)\n\
\' Extract data from a cricular curve for the trim\n\
set oCurve = CreatePrim(\"Circle\", \"NurbsCurve\")\n\
Dim lCDegree, bCClosed, eCParameterization, aCControlVertex, aCKnots, lCCount, aCNbControlVertex\n\
oCurve.ActivePrimitive.geometry.get _\n\
	siSINurbs, _\n\
	lCCount, _\n\
	aCControlVertex, _\n\
	aCNbControlVertex, _\n\
	aCKnots , _\n\
	aCNbKnots, _\n\
	bCClosed, _\n\
	lCDegree, _\n\
	eCParameterization\n\
\' Create the trimmed surface\n\
set oNew = oRoot.AddNurbsSurfaceMesh\n\
oNew.ActivePrimitive.Geometry.AddSurfaceWithTrim _\n\
	aControlPoints, _\n\
	aKnots(siUDirection),aKnots(siVDirection) , _\n\
	bClosed(siUDirection),bClosed(siVDirection), _\n\
	lDegree(siUDirection),lDegree(siVDirection), _\n\
	eParameterization(siUDirection),eParameterization(siVDirection), _\n\
	siSINurbs, _\n\
	1, _\n\
	array(True), _\n\
	array(0), _\n\
	array(lCCount), _\n\
	array(aCControlVertex), _\n\
	array(aCNbControlVertex), _\n\
	array(eCParameterization), _\n\
	array(aCKnots) , _\n\
	array(aCNbKnots), _\n\
	array(lCDegree), _\n\
	array(bCClosed)</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";