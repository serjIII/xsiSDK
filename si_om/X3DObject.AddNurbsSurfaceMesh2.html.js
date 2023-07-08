var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.AddNurbsSurfaceMesh2</title>\n\
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
            <h1>X3DObject.AddNurbsSurfaceMesh2</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.AddNurbsSurfaceMesh2</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a> object. This method can be used for creating \n\
a mesh of multiple nurbs surfaces from a set of geometry data.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>X3DObject X3DObject.AddNurbsSurfaceMesh2( Object in_Count, Object in_ControlPoints, Object in_vsaNbUControlPoints, Object in_vsaNbVControlPoints, Object in_uKnots, Object in_vsaNbUKnots, Object in_vKnots, Object in_vsaNbVKnots, Object in_bUClosed, Object in_bVClosed, Object in_lUDegree, Object in_lVDegree, Object in_uParameterization, Object in_vParameterization, siNurbsFormat in_eNurbsFormat, String in_bstrName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = X3DObject.AddNurbsSurfaceMesh2( Count, ControlPoints, [NbUControlPoints], [NbVControlPoints], [UKnots], [NbUKnots], [VKnots], [NbVKnots], [UDegree], [VDegree], [UClosed], [VClosed], [UParam], [VParam], [NurbsFormat], [Name] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> object holding the new geometry; the new X3DObject is parented under this X3DObject.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Count		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Number of surfaces.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ControlPoints		</td>\n\
		<td>3D <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
The control points are stored in a 3-dimensional array. The array is 4 *  (Max Number of  V ControlPoints for a NurbsSurface) * (Total Number of U ControlPoints)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbUControlPoints		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Specifies the number of U ControlPoints per NurbsCurve. Optional if you have only one <a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbVControlPoints		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Specifies the number of V ControlPoints per NurbsCurve.  Optional if you have only one <a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
A vector of knot values in the U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Knots derived from control points.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbUKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Specifies the number of U Knots per NurbsCurve. Optional if there\'s only one <a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
A vector of knot values in the V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Knots derived from control points.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbVKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Specifies the number of V Knots per NurbsCurve. Optional if there\'s only one <a href=\"#!/url=./si_om/NurbsCurve.html\">NurbsCurve</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UDegree		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Degree of the nurbs surface in U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VDegree		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
Degree of the nurbs surface in V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UClosed		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Specifies whether the nurbs surface is closed or not in U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VClosed		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Specifies whether the nurbs surface is closed or not in V direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UParam		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a>		</td>\n\
		<td>\n\
The parameterization factor of the nurbs surface in U direction.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siNonUniformParameterization			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VParam		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a>		</td>\n\
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
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
name of object 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example creates a 4x4 nurbs mesh\n\
\'\n\
NewScene , false\n\
dim cv( 3, 3, 3 ), ukv, vkv\n\
cv(0,0,0) = -2.0\n\
cv(1,0,0) = 2.0\n\
cv(2,0,0) = 2.0\n\
cv(3,0,0) = 1.00\n\
cv(0,0,1) = -0.666667\n\
cv(1,0,1) = 2.0\n\
cv(2,0,1) = 2.0\n\
cv(3,0,1) = 1.00\n\
cv(0,0,2) = 0.666667\n\
cv(1,0,2) = 2.0\n\
cv(2,0,2) = 2.0\n\
cv(3,0,2) = 1.00\n\
cv(0,0,3) = 2.0\n\
cv(1,0,3) = 2.0\n\
cv(2,0,3) = 2.0\n\
cv(3,0,3) = 1.00\n\
cv(0,1,0) = -2.0\n\
cv(1,1,0) = 0.0\n\
cv(2,1,0) = 0.666667\n\
cv(3,1,0) = 1.00\n\
cv(0,1,1) = -0.666667\n\
cv(1,1,1) = 0.0\n\
cv(2,1,1) = 0.666667\n\
cv(3,1,1) = 1.00\n\
cv(0,1,2) = 0.666667\n\
cv(1,1,2) = 0.0\n\
cv(2,1,2) = 0.666667\n\
cv(3,1,2) = 1.00\n\
cv(0,1,3) = 2.0\n\
cv(1,1,3) = 0.0\n\
cv(2,1,3) = 0.666667\n\
cv(3,1,3) = 1.00\n\
cv(0,2,0) = -2.0\n\
cv(1,2,0) = 0.0\n\
cv(2,2,0) = -0.666667\n\
cv(3,2,0) = 1.00\n\
cv(0,2,1) = -0.666667\n\
cv(1,2,1) = 0.0\n\
cv(2,2,1) = -0.666667\n\
cv(3,2,1) = 1.00\n\
cv(0,2,2) = 0.666667\n\
cv(1,2,2) = 0.0\n\
cv(2,2,2) = -0.666667\n\
cv(3,2,2) = 1.00\n\
cv(0,2,3) = 2.0\n\
cv(1,2,3) = 0.0\n\
cv(2,2,3) = -0.666667\n\
cv(3,2,3) = 1.00\n\
cv(0,3,0) = -2.0\n\
cv(1,3,0) = 1.0\n\
cv(2,3,0) = -2.0\n\
cv(3,3,0) = 1.00\n\
cv(0,3,1) = -0.666667\n\
cv(1,3,1) = 1.0\n\
cv(2,3,1) = -2.0\n\
cv(3,3,1) = 1.00\n\
cv(0,3,2) = 0.666667\n\
cv(1,3,2) = 1.0\n\
cv(2,3,2) = -2.0\n\
cv(3,3,2) = 1.00\n\
cv(0,3,3) = 2.0\n\
cv(1,3,3) = 1.0\n\
cv(2,3,3) = -2.0\n\
cv(3,3,3) = 1.00\n\
ukv = Array( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 )\n\
vkv = Array( 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 )\n\
set root = application.activeproject.activescene.root\n\
\' Create nurbs surface from default values\n\
set ns = root.AddNurbsSurfaceMesh2(1,cv,,,ukv,,vkv,,,,,,,,siSINurbs,\"MyDefaultNurbsSurface\")\n\
\' Create nurbs surface from explicit values\n\
set ns = root.AddNurbsSurfaceMesh2( _\n\
	1, _\n\
	cv, _\n\
	Array(4), Array(4), _\n\
	ukv, Array(6), _\n\
	vkv, Array(6), _\n\
	Array(2), Array(2), _\n\
	Array(False), Array(False), _\n\
	Array(siUniformParameterization), Array(siUniformParameterization), _\n\
	siSINurbs, _\n\
	\"MyExplicitNurbsSurface\")</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";