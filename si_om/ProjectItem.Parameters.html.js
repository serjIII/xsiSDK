var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ProjectItem.Parameters</title>\n\
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
            <h1>ProjectItem.Parameters</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a>.Parameters <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> containing all <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> objects on the \n\
object that support read access. You can get their value using the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> property.\n\
<br /><br />\n\
Note: In some cases the parameters of nested objects are also included in the returned collection. You can \n\
use the <a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> property to test the exact source of each Parameter.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
ParameterCollection rtn = ProjectItem.Parameters;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example demonstrates how to access the parameters directly associated with a cube \n\
\' (ie., these do not include the parameters defined on properties associated with the cube).\n\
\' \n\
NewScene , false\n\
set oRoot = Application.ActiveProject.ActiveScene.Root\n\
set oCube = oRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
for each oParam in oCube.Parameters\n\
	Application.LogMessage oParam.FullName\n\
next\n\
\' Expecte result:\n\
\'INFO : cube.Name\n\
\'INFO : cube.kine.local.blendweight\n\
\'INFO : cube.kine.local.active\n\
\'INFO : cube.kine.local.posx\n\
\'INFO : cube.kine.local.posy\n\
\'INFO : cube.kine.local.posz\n\
\'INFO : cube.kine.local.rotx\n\
\'INFO : cube.kine.local.roty\n\
\'INFO : cube.kine.local.rotz\n\
\'INFO : cube.kine.local.quatw\n\
\'INFO : cube.kine.local.quatx\n\
\'INFO : cube.kine.local.quaty\n\
\'INFO : cube.kine.local.quatz\n\
\'INFO : cube.kine.local.sclx\n\
\'INFO : cube.kine.local.scly\n\
\'INFO : cube.kine.local.sclz\n\
\'INFO : cube.kine.local.sclorix\n\
\'INFO : cube.kine.local.scloriy\n\
\'INFO : cube.kine.local.scloriz\n\
\'INFO : cube.kine.local.cnsscl\n\
\'INFO : cube.kine.local.cnsori\n\
\'INFO : cube.kine.local.cnspos\n\
\'INFO : cube.kine.local.affbyscl\n\
\'INFO : cube.kine.local.affbyori\n\
\'INFO : cube.kine.local.posxmaxactive\n\
\'INFO : cube.kine.local.posxminactive\n\
\'INFO : cube.kine.local.posymaxactive\n\
\'INFO : cube.kine.local.posyminactive\n\
\'INFO : cube.kine.local.poszmaxactive\n\
\'INFO : cube.kine.local.poszminactive\n\
\'INFO : cube.kine.local.rotxmaxactive\n\
\'INFO : cube.kine.local.rotxminactive\n\
\'INFO : cube.kine.local.rotymaxactive\n\
\'INFO : cube.kine.local.rotyminactive\n\
\'INFO : cube.kine.local.rotzmaxactive\n\
\'INFO : cube.kine.local.rotzminactive\n\
\'INFO : cube.kine.local.siscaling\n\
\'INFO : cube.kine.local.rotorder\n\
\'INFO : cube.kine.local.pivotactive\n\
\'INFO : cube.kine.local.pposx\n\
\'INFO : cube.kine.local.pposy\n\
\'INFO : cube.kine.local.pposz\n\
\'INFO : cube.kine.local.protx\n\
\'INFO : cube.kine.local.proty\n\
\'INFO : cube.kine.local.protz\n\
\'INFO : cube.kine.local.psclx\n\
\'INFO : cube.kine.local.pscly\n\
\'INFO : cube.kine.local.psclz\n\
\'INFO : cube.kine.local.pivotcompactive\n\
\'INFO : cube.kine.local.pcposx\n\
\'INFO : cube.kine.local.pcposy\n\
\'INFO : cube.kine.local.pcposz\n\
\'INFO : cube.kine.local.pcrotx\n\
\'INFO : cube.kine.local.pcroty\n\
\'INFO : cube.kine.local.pcrotz\n\
\'INFO : cube.kine.local.pcsclx\n\
\'INFO : cube.kine.local.pcscly\n\
\'INFO : cube.kine.local.pcsclz\n\
\'INFO : cube.kine.local.nposx\n\
\'INFO : cube.kine.local.nposy\n\
\'INFO : cube.kine.local.nposz\n\
\'INFO : cube.kine.local.nrotx\n\
\'INFO : cube.kine.local.nroty\n\
\'INFO : cube.kine.local.nrotz\n\
\'INFO : cube.kine.local.nsclx\n\
\'INFO : cube.kine.local.nscly\n\
\'INFO : cube.kine.local.nsclz\n\
\'INFO : cube.kine.local.nsclorix\n\
\'INFO : cube.kine.local.nscloriy\n\
\'INFO : cube.kine.local.nscloriz\n\
\'INFO : cube.polymsh.geom.subdivu\n\
\'INFO : cube.polymsh.geom.subdivv\n\
\'INFO : cube.polymsh.geom.subdivbase\n\
\'INFO : cube.cube.length</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";