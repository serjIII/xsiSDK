var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ActionSource.Reload</title>\n\
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
            <h1>ActionSource.Reload</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a>.Reload</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Reloads the action source. This method is useful when you want to find externally \n\
stored action sources that have become disconnected from a clip.  <br /><br />\n\
You can also use this method to reload a source which has been offloaded. If the \n\
source has external storage and the file is valid, the source removes all current \n\
<a href=\"#!/url=./si_om/AnimationSourceItem.html\">AnimationSourceItem</a>s and reloads them from the source file.<br /><br />\n\
Reloading the source disconnects all action <a href=\"#!/url=./si_om/Clip.html\">Clip</a>s that use this \n\
source and reconnects them (this happens even if the source is stored internally \n\
or if the file is invalid). Once the paths are updated, reloading the source \n\
reconnects everything correctly. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ActionSource.Reload();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ActionSource.Reload();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to use the Reload method on an ActionSource\n\
*/\n\
NewScene( null, false );\n\
var oRoot = Application.ActiveProject.ActiveScene.Root;\n\
// Create a new model and add a null under it\n\
var oModel = oRoot.AddModel();\n\
oModel.Parameters(\"Name\").Value = \"ActionModel\";\n\
var oNull = oModel.AddNull();\n\
// These commands were cut-and-pasted from scripting history and modified to work in a\n\
// script. They create a simple actionsource from animation on the null\'s position\n\
strPosParams = oNull + \".kine.local.posx,\" + oNull + \".kine.local.posy,\" + oNull + \".kine.local.posz\";\n\
Translate( oNull, -8.153, 7.015, -0.702, siRelative, siView, siObj, siXYZ );\n\
SaveKey( strPosParams, 1.000 );\n\
Translate( oNull, 8.350, -8.935, 0.894, siRelative, siView, siObj, siXYZ );\n\
SaveKey( strPosParams, 50.000 );\n\
Translate( oNull, 9.413, 8.935, -0.894, siRelative, siView, siObj, siXYZ );\n\
SaveKey( strPosParams, 100.000 );\n\
// Create a new ActionSource based on the null\'s translation\n\
var oActionSource = oModel.AddActionSource( \"MyActionSource\" );\n\
// Use the fcurves on the null object to create the actionsource items\n\
var oPosx = oNull.Posx;\n\
var oPosy = oNull.Posy;\n\
var oPosz = oNull.Posz;\n\
oActionSource.AddSourceItem( GetRelativeName(oPosx), oPosx.Source );\n\
oActionSource.AddSourceItem( GetRelativeName(oPosy), oPosy.Source );\n\
oActionSource.AddSourceItem( GetRelativeName(oPosz), oPosz.Source );\n\
// Set the action storage to external (text)\n\
oActionSource.Parameters( \"storage\" ).Value = 2; 	// equivalent to: SetValue( oActionSource + \".storage\", 2 );\n\
// Add a clip for the source\n\
AddClip( oModel, oActionSource, \"\", \"\", 16, \"\", \"\", \"\", false );\n\
// Save the scene, in order to save the action externally\n\
var sSavePath = XSIUtils.BuildPath( Application.InstallationPath(siProjectPath), \"Scenes\", \"ASTestScene.scn\" );\n\
SaveSceneAs( sSavePath, true );\n\
// So, calling Reload on the source will disconnect the source, reload the action and reconnect the source.\n\
oActionSource.Reload();\n\
/* \n\
	GetRelativeName removes the name of the model from the FullName \n\
	of the specified parameter. This is necessary when setting up a source \n\
	that will later be used to instantiate a clip when the parameter lives \n\
	under a model other than the Scene_Root.\n\
*/\n\
function GetRelativeName( in_param )\n\
{\n\
	var mdlname = in_param.Model.FullName;\n\
	if ( mdlname == \"Scene_Root\" ) {\n\
		return in_param.FullName;\n\
	} else {\n\
		var tmp = in_param.FullName;\n\
		var re = new RegExp( mdlname + \".\", \"i\" );\n\
		return tmp.replace( re, \"\" );\n\
	}\n\
}\n\
//</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";