var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Parameter.Disconnect</title>\n\
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
            <h1>Parameter.Disconnect</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>.Disconnect</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v2.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Disconnects any <a href=\"#!/url=./si_om/Shader.html\">Shader</a> or animation connected to the parameter.  \n\
Animation that can be removed with this method includes <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>s, \n\
<a href=\"#!/url=./si_om/Expression.html\">Expression</a>s and <a href=\"#!/url=./si_om/Operator.html\">Operator</a>s.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>DataSource Parameter.Disconnect();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oDataSource = Parameter.Disconnect();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Previously connected <a href=\"#!/url=./files/DataSource.htm\">DataSource</a>.  Note: The returned object is \n\
valid if it is a <a href=\"#!/url=./si_om/Shader.html\">Shader</a>, but not if it is an <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example illustrates how to disconnect a shader from the photon parameter of a material.\n\
\'\n\
NewScene , false\n\
set grid = Application.ActiveSceneRoot.AddGeometry( \"Cube\",\"MeshSurface\" )\n\
set mat = grid.AddMaterial( \"Phong\" )\n\
set photon = mat.Parameters(\"Photon\")\n\
set shader = photon.Disconnect()</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' Demonstration of using Disconnect to remove an FCurve from a Parameter\n\
\' \n\
NewScene , false\n\
set oCube = Application.ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
set oPosXParam = oCube.PosX\n\
dim aValues\n\
aValues = Array( 0.00, 5.00, 1.00, 6.00, 2.00, 7.00, 3.00, 8.00 )\n\
oPosXParam.AddFCurve2( aValues )\n\
set oFCurve = oPosXParam.Source\n\
Application.LogMessage \"Expected value at frame 10: \" &amp; oFCurve.Eval( 10 )  \n\
\' Disconnect the FCurve\n\
set oFCurve = oPosXParam.Disconnect\n\
\' You can still evalute the fcurve but it doesn\'t belong to the parameter\n\
Application.LogMessage \"FCurve value at Frame 10:\" &amp; oFCurve.Eval( 10 )  \n\
\' Prove that the FCurve is gone.\n\
Application.LogMessage \"Source driving Parameter value: \" &amp; TypeName( oPosXParam.Source ) \n\
SetValue \"PlayControl.Current\", 10\n\
Application.LogMessage( \"Parameter value with no FCurve: \" &amp; oPosXParam.Value ) \n\
\' Expected output\n\
\'INFO : Expected value at frame 10: 8\n\
\'INFO : FCurve value at Frame 10:8\n\
\'INFO : Source driving Parameter value: Nothing\n\
\'INFO : Parameter value with no FCurve: 5</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Demonstrates deleting an FCurve with Parameter.Disconnect\n\
*/\n\
NewScene( null, false ) ;\n\
var oCube = Application.ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" ) ;\n\
var oPosXParam = oCube.PosX\n\
aValues = new Array( 0.00, 5.00, 1.00, 6.00, 2.00, 7.00, 3.00, 8.00 ) ;\n\
oPosXParam.AddFCurve2( aValues ) ;\n\
Application.LogMessage( oPosXParam.Source == null ) ;\n\
oPosXParam.Disconnect();\n\
Application.LogMessage( oPosXParam.Source == null ) ;\n\
// Expected results:\n\
//INFO: false\n\
//INFO: true</pre></td></tr>\n\
</table>\n\
</div><h4>4. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Demonstration of removing an expression with Parameter.Disconnect\n\
*/\n\
NewScene( null, false ) ;\n\
var oCube = Application.ActiveSceneRoot.AddGeometry( \"Cube\",\"MeshSurface\" ) ;\n\
var oLocalKine = oCube.Kinematics.Local\n\
var oPosXParam = oLocalKine.PosX\n\
var oPosYParam = oLocalKine.PosY\n\
oPosXParam.AddExpression( oPosYParam.FullName + \" * 2.0\" ) ;\n\
Application.LogMessage( \"Before disconnecting:\" ) ;\n\
Application.LogMessage( \"Source: \" + oPosXParam.Source.Type  ) ;\n\
Application.LogMessage( \"Number of Animated parameters: \" + oCube.AnimatedParameters().Count ) ;\n\
oPosXParam.Disconnect();\n\
Application.LogMessage( \"After disconnecting:\" ) ;\n\
Application.LogMessage( \"Source is null? \" + ( oPosXParam.Source == null ) ) ;\n\
Application.LogMessage( \"Number of Animated parameters: \" + oCube.AnimatedParameters().Count ) ;\n\
//INFO : Before disconnecting:\n\
//INFO : Source: Expression\n\
//INFO : Number of Animated parameters: 1\n\
//INFO : After disconnecting:\n\
//INFO : Source is null? true\n\
//INFO : Number of Animated parameters: 0</pre></td></tr>\n\
</table>\n\
</div><h4>5. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example of removing an Operator using Parameter.Disconnect\n\
*/\n\
NewScene( null, false );\n\
var obj = Application.ActiveSceneRoot.AddNull();\n\
obj.posx.AddScriptedOp( myexpr_Update.toString(), obj.posy, \"myexpr\", \"JScript\" );\n\
// Invoke the custom operator\n\
obj.posy = 26 ;\n\
// posx will have been changed to 20 by the operator\n\
Application.LogMessage( \"Value of posx:\" + obj.posx.Value ) ;\n\
obj.posx.Disconnect() ;\n\
// Change the value of posy again\n\
// However because there is no operator \n\
// now it will have no effect on posx\n\
obj.posy = 18 ;\n\
Application.LogMessage( \"No source anymore? \" + (obj.posx.Source == null) ) ;\n\
Application.LogMessage( \"Value of posx \" + obj.posx.Value ) ;\n\
//Expected output:\n\
//INFO : Value of posx:20\n\
//INFO : No source anymore? true\n\
//INFO : Value of posx 20\n\
function myexpr_Update( ctx, out, inposy )\n\
{\n\
	var posYVal = inposy.Value ;\n\
	if ( posYVal &lt; 20 )	\n\
		out.Value = inposy;\n\
	else\n\
		out.Value = 20 ;	\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RemoveAnimation.html\">RemoveAnimation</a> <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> <a href=\"#!/url=./si_om/Parameter.Connect.html\">Parameter.Connect</a> <a href=\"#!/url=./si_om/Parameter.ConnectFromFile.html\">Parameter.ConnectFromFile</a> <a href=\"#!/url=./si_om/Parameter.ConnectFromPreset.html\">Parameter.ConnectFromPreset</a> <a href=\"#!/url=./si_om/Parameter.ConnectFromProgID.html\">Parameter.ConnectFromProgID</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";