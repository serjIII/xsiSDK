var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.LocalTranslation</title>\n\
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
            <h1>X3DObject.LocalTranslation</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.LocalTranslation</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5.1</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the object\'s local translation. This acts as a shortcut to accessing the \n\
translation <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> through <a href=\"#!/url=./si_om/Kinematics.html\">Kinematics</a>, local \n\
<a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a>, and <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = X3DObject.LocalTranslation;\n\
// set accessor\n\
X3DObject.LocalTranslation = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to get/set the local translation using two \n\
	different approaches\n\
*/\n\
NewScene( null, false );\n\
var oNull1 = Application.ActiveSceneRoot.AddNull();\n\
oNull1.posx.Value = 45;\n\
var oNull2 = Application.ActiveSceneRoot.AddNull();\n\
oNull2.posx.Value = 19;\n\
// ACCESSING\n\
// Access the local translation using the KinematicState\n\
var oTransform = oNull1.Kinematics.Local.Transform;\n\
var oTranslation = oTransform.Translation;\n\
// Access the local translation using X3DObject.LocalTranslation\n\
var oTranslation2 = oNull2.LocalTranslation;\n\
Application.LogMessage( \"Null1 pos x - \" + oTranslation.X );\n\
Application.LogMessage( \"Null2 pos x - \" + oTranslation2.X );\n\
// SETTING\n\
// Set the translation using the KinematicState\n\
oTransform.SetTranslationFromValues( 2.0, 1.0, 0.0 );\n\
oNull1.Kinematics.Local.Transform = oTransform;\n\
// Set the translation using X3DObject.LocalTranslation\n\
oTranslation2.Set( 2.0, 1.0, 0.0 );\n\
oNull2.LocalTranslation = oTranslation2;\n\
// Expected results:\n\
//INFO : Null1 pos x - 45\n\
//INFO : Null2 pos x - 19</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example illustrates how to get/set local translation using\n\
\' two different approaches\n\
\' \n\
set oNull1 = Application.ActiveSceneRoot.AddNull()\n\
set oNull2 = Application.ActiveSceneRoot.AddNull()\n\
\' ACCESSING\n\
\' Access the local translation using the KinematicState\n\
set oTransform = oNull1.Kinematics.Local.Transform\n\
set oTranslation = oTransform.Translation\n\
\' Access the local translation using X3DObject.LocalTranslation\n\
set oTranslation2 = oNull2.LocalTranslation\n\
\' SETTING\n\
\' Set the local translation using the KinematicState\n\
oTransform.SetTranslationFromValues 2.0, 1.0, 0.0\n\
oNull1.Kinematics.Local.Transform = oTransform\n\
\' Set the local translation using X3DObject.LocalTranslation\n\
oTranslation2.Set 2.0, 1.0, 0.0\n\
oNull2.LocalTranslation = oTranslation2</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";