var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NurbsSurfaceMesh.Set</title>\n\
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
            <h1>NurbsSurfaceMesh.Set</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>.Set <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets a NurbsSurfaceMesh from a complete data description of the mesh. This is only \n\
available from scripted operators. \n\
Note: If you use it on a object with some clusters and you change the topology\n\
the burden of updating the clusters is on the user. For non-scripted operators this\n\
property can only be set if the object has been frozen.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsSurfaceMesh.Set( Object in_vsalCount, Object in_vsaUVControlPoints, Object in_vsaNbUControlPoints, Object in_vsaNbVControlPoints, Object in_vsadUKnots, Object in_vsaNbUKnots, Object in_vsadVKnots, Object in_vsaNbVKnots, Object in_vsabUClosed, Object in_vsabVClosed, Object in_vsalUDegree, Object in_vsalVDegree, Object in_vsaeUParam, Object in_vsaeVParam, siNurbsFormat in_eNurbsFormat );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>NurbsSurfaceMesh.Set( Count, UVControlPoints, [NbUControlPoints], [NbVControlPoints], [UKnots], [NbUKnots], [VKnots], [NbVKnots], [UClosed], [VClosed], [UDegree], [VDegree], [UParam], [VParam], [NurbsFormat] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Count		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Number of NurbsSurface in the mesh.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UVControlPoints		</td>\n\
		<td>1D or 3D <a href=\"#!/url=./files/Array.htm\">Array</a>		</td>\n\
		<td>\n\
 \n\
		The control points are stored in a 1-dimentional array or in a 3-dimensional matrix(UxVx4) of x,y,z,w values. \n\
		If the NurbsSurfaceMesh only contains one NurbsSurface, the 1 dimentional array must contain the number of U control points,\n\
		followed by the number of V control points, \n\
		followed by the sequence of x,y,z,w values \n\
		e.g. {NbU, NbV, Xo,Yo,Zo,Wo...X(n-1),Y(n-1),Z(n-1),W(n-1)}. \n\
		Otherwise, the array is a sequence of x,y,z,w values (e.g. {Xo,Yo,Zo,...X(n-1),Y(n-1),Z(n-1),W(n-1)}).<br /><br />\n\
		Note: UV ordering is different for scripting than it is for the C++ API.<br /><br /> \n\
		In scripting, a control point array is ordered U-V like so:<br /><br />\n\
		(0,0)...(0,cntV-1), (1,0)....(1,cntV-1),(cntU-1,0)...(cntU-1,cntV-1)<br /><br />\n\
		However, the order for the C++ API is V-U:<br /><br />\n\
		(0,0)...(cntU-1,0), (0,1)....(cntU-1,1)...(0,cntV-1)...(cntU-1,cntV-1)\n\
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
 Specifies whether the nurbs surface is closed in U direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VClosed		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Boolean.htm\">Boolean</a> values		</td>\n\
		<td>\n\
 Specifies whether the nurbs surface is closed in V direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UDegree		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Degree of the nurbs surface in U direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VDegree		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./files/Long.htm\">Long</a>s		</td>\n\
		<td>\n\
 Degree of the nurbs surface in V direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UParam		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a> values		</td>\n\
		<td>\n\
 The parameterization factor of the nurbs surface in U direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">VParam		</td>\n\
		<td><a href=\"#!/url=./files/Array.htm\">Array</a> of <a href=\"#!/url=./si_om/siKnotParameterization.html\">siKnotParameterization</a> values		</td>\n\
		<td>\n\
 The parameterization factor of the nurbs surface in V direction.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NurbsFormat		</td>\n\
		<td><a href=\"#!/url=./si_om/siNurbsFormat.html\">siNurbsFormat</a>		</td>\n\
		<td>\n\
 Specifies how the data is formatted. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSINurbs			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Dim lDegree(2), bClosed(2), eParameterization(2), aControlPoints, aKnots(2), aNbKnots(2), aNbControlVertex(2), lCount\n\
set oRoot = Application.activeproject.activescene.root\n\
set oGrid1 = oRoot.AddGeometry(\"Grid\", \"NurbsSurface\")\n\
oGrid1.Kinematics.Global.Parameters(\"posx\").value = oG\n\
set oGrid2 = oRoot.AddGeometry(\"Grid\", \"NurbsSurface\")\n\
oGrid2.Kinematics.Global.Parameters(\"posx\").value = oGrid1.Kinematics.Global.Parameters(\"posx\").value - 4.0\n\
SelectObj oGrid2\n\
AddToSelection oGrid1\n\
SIAssembleNurbsMesh , 0.150, False, False, True\n\
SelectObj \"surfmsh\"\n\
set oAssembledSurface = selection(0)\n\
\'We must freeze the object so that Set call succeeds\n\
FreezeObj oAssembledSurface\n\
oAssembledSurface.ActivePrimitive.Geometry.Get _		\n\
	siSINurbs, _\n\
	lCount, _\n\
	aControlVertex, aNbControlVertex(siUDirection), aNbControlVertex(siVDirection), _\n\
	aKnots(siUDirection), aNbKnots(siUDirection), aKnots(siVDirection) , aNbKnots(siVDirection), _\n\
	bClosed(siUDirection),bClosed(siVDirection), _\n\
	lDegree(siUDirection),lDegree(siVDirection), _\n\
	eParameterization(siUDirection),eParameterization(siVDirection)\n\
\'Making a tunnel\n\
l_total = 0\n\
for k = 0 to lCount - 1\n\
	for i = 0 to aNbControlVertex(siVDirection)(k) - 1\n\
		for j = 0 to aNbControlVertex(siUDirection)(k) - 1\n\
			aControlVertex(1,i, j + l_total) = aControlVertex(1,i,j + l_total) + (aNbControlVertex(siVDirection)(k)/2 - abs( aNbControlVertex(siVDirection)(k)/2 - i))\n\
		next\n\
	next\n\
	l_total = l_total + aNbControlVertex(siUDirection)(k)\n\
next\n\
oAssembledSurface.ActivePrimitive.Geometry.Set _		\n\
	lCount, _\n\
	aControlVertex, aNbControlVertex(siUDirection), aNbControlVertex(siVDirection), _\n\
	aKnots(siUDirection), aNbKnots(siUDirection), aKnots(siVDirection) , aNbKnots(siVDirection), _\n\
	bClosed(siUDirection),bClosed(siVDirection), _\n\
	lDegree(siUDirection),lDegree(siVDirection), _\n\
	eParameterization(siUDirection),eParameterization(siVDirection), _\n\
	siSINurbs</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example shows how to set a NurbsSurfaceMesh in JScript\n\
NewScene(null, false);\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
var oGrid1 = oRoot.AddGeometry( \"Grid\", \"NurbsSurface\" );\n\
var oGrid2 = oRoot.AddGeometry( \"Grid\", \"NurbsSurface\" );\n\
oGrid1.Kinematics.Global.Parameters(\"posx\").value -=  4.0\n\
SelectObj( \"grid,grid1\", null, 1 );\n\
SIAssembleNurbsMesh( null, 0.150, 0, 0, 1 );\n\
FreezeObj(\"surfmsh\", null, null); \n\
SelectObj( \"surfmsh\" );\n\
// convert VB array to JScript array\n\
var oAssembledSurface = Selection(0).ActivePrimitive.Geometry;\n\
var vbArgs = new VBArray(oAssembledSurface.Get2( siSINurbs ));\n\
// get the number of surfaces\n\
var numSurfs = vbArgs.getItem(0);\n\
LogMessage(\"number of surfaces: \" + numSurfs);\n\
// get the number of control points in U per surface\n\
var aNbUPoints = vbArgs.getItem(2).toArray();\n\
// get the number of control points in V per surface\n\
var aNbVPoints = vbArgs.getItem(3).toArray() \n\
// get the control point array\n\
var vbPoints = vbArgs.getItem(1);\n\
var aUVPoints = [];\n\
// Push the number of points in U and V at the beginning for single surface.\n\
if( numSurfs == 1 )\n\
{\n\
	aUVPoints.push(aNbUPoints[0]);\n\
	aUVPoints.push(aNbVPoints[0]);\n\
}	\n\
for ( k=0, offset=0; k&lt;numSurfs; offset += aNbUPoints[k], k++ )\n\
{\n\
	for ( u=0; u&lt;aNbUPoints[k]; u++ ) // U\n\
	{\n\
		for ( v=0; v&lt;aNbVPoints[k]; v++ ) // V\n\
		{\n\
			idx = u+offset;\n\
			var x = vbPoints.getItem(0, v, idx) \n\
			var y = vbPoints.getItem(1, v, idx) + (aNbVPoints[k]/2 - Math.abs( aNbVPoints[k]/2 - v));\n\
			var z = vbPoints.getItem(2, v, idx);\n\
			var w = vbPoints.getItem(3, v, idx);\n\
			aUVPoints.push(x);\n\
			aUVPoints.push(y);\n\
			aUVPoints.push(z);\n\
			aUVPoints.push(w);\n\
		}\n\
	}\n\
}\n\
var aUKnots = vbArgs.getItem(4).toArray();\n\
var aNbUKnots = vbArgs.getItem(5).toArray();\n\
var aVKnots = vbArgs.getItem(6).toArray();\n\
var aNbVKnots = vbArgs.getItem(7).toArray();\n\
var aUIsClosed = vbArgs.getItem(8).toArray();\n\
var aVIsClosed = vbArgs.getItem(9).toArray();\n\
var aUDegree = vbArgs.getItem(10).toArray();\n\
var aVDegree = vbArgs.getItem(11).toArray();\n\
var aUParam = vbArgs.getItem(12).toArray();\n\
var aVParam = vbArgs.getItem(13).toArray();	\n\
oAssembledSurface.Set( \n\
	numSurfs, \n\
	aUVPoints, aNbUPoints, aNbVPoints, \n\
	aUKnots, aNbUKnots, aVKnots, aNbVKnots, \n\
	aUIsClosed, aVIsClosed,\n\
	aUDegree, aVDegree, \n\
	aUParam, aVParam,\n\
	siSINurbs);</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";