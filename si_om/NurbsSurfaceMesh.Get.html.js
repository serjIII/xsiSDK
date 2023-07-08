var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsSurfaceMesh.Get</title>\n\
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
            <h1>NurbsSurfaceMesh.Get</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>.Get <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a complete data description of a NurbsSurfaceMesh. <br /><br />\n\
Note: This method uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript and PerlScript) don\'t support arguments passed by reference. However, there is a \n\
alternate version of this method which is considered safe to use with C#, JScript and PerlScript: \n\
<a href=\"#!/url=./si_om/NurbsSurfaceMesh.Get2.html\">NurbsSurfaceMesh.Get2</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsSurfaceMesh.Get( siNurbsFormat in_eNurbsFormat, Object& out_pvsalCount, Object& out_pvsaUVControlPoints, Object& out_pvsaNbUControlPoints, Object& out_pvsaNbVControlPoints, Object& out_pvsadUKnots, Object& out_pvsaNbUKnots, Object& out_pvsadVKnots, Object& out_pvsaNbVKnots, Object& out_pvsabUClosed, Object& out_pvsabVClosed, Object& out_pvsalUDegree, Object& out_pvsalVDegree, Object& out_pvsaeUParam, Object& out_pvsaeVParam );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsSurfaceMesh.Get( [NurbsFormat], [Count], [UVControlPoints], [NbUControlPoints], [NbVControlPoints], [UKnots], [NbUKnots], [VKnots], [NbVKnots], [UClosed], [VClosed], [UDegree], [VDegree], [UParam], [VParam] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">NurbsFormat		</td>\n\
		<td><a href=\"#!/url=./si_om/siNurbsFormat.html\">siNurbsFormat</a>		</td>\n\
		<td>\n\
 Specifies how the data is formatted. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSINurbs			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Count		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Number of NurbsSurface in the mesh.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UVControlPoints		</td>\n\
		<td>3D <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
\n\
		The control points are stored in a 3 dimensional array. The array is \n\
		4 * (Number of V ControlPoints) * (Number of U ControlPoints)\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbUControlPoints		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Specifies the number of U ControlPoints per Nurbs surface.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbVControlPoints		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Specifies the number of V ControlPoints per Nurbs surface.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
An array of knot values in U direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbUKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Specifies the number of U Knots per Nurbs surface.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Double.htm\">Double</a>s		</td>\n\
		<td>\n\
An array of knot values in V direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbVKnots		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Specifies the number of V Knots per Nurbs surface.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UClosed		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> values		</td>\n\
		<td>\n\
 Specifies whether the Nurbs surface are closed in U direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VClosed		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> values		</td>\n\
		<td>\n\
 Specifies whether the Nurbs surfaces are closed in V direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UDegree		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Degree of the Nurbs surfaces in U direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VDegree		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Degree of the Nurbs surfaces in V direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UParam		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a> values		</td>\n\
		<td>\n\
 The parameterization factor of the Nurbs surface in U direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VParam		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a> values		</td>\n\
		<td>\n\
 The parameterization factor of the Nurbs surface in V direction.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">set obj = activeproject.activescene.root.addgeometry( \"grid\", \"nurbssurface\" )\n\
obj.activeprimitive.Geometry.Get siSIFormat, _\n\
	count, _\n\
	cpoints, _\n\
	nupoints, _\n\
	nvpoints, _\n\
	uknots, _\n\
	nuknots, _\n\
	vknots, _\n\
	nvknots, _\n\
	uclosed, _\n\
	vclosed, _\n\
	udeg, _\n\
	vdeg, _\n\
	uparam, _\n\
	vparam \n\
activeproject.activescene.root.AddNurbsSurfaceMesh2 _\n\
	1, _\n\
	cpoints, , ,_\n\
	uknots, ,_\n\
	vknots, ,_\n\
	udeg, _\n\
	vdeg, _\n\
	uclosed, _\n\
	vclosed, _\n\
	uparam, _\n\
	vparam, _ \n\
	siSIFormat, _\n\
	\"MyNurbsSurface\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";