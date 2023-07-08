var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>X3DObject.Models</title>\n\
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
            <h1>X3DObject.Models</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>.Models</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/ModelCollection.html\">ModelCollection</a> containing each <a href=\"#!/url=./si_om/Model.html\">Model</a> \n\
under this 3D object.\n\
<br /><br />\n\
Note: Since Python does not support input parameters on properties, X3DObject.Models \n\
will fail in Python. Use the Python-compliant version <a href=\"#!/url=./si_om/X3DObject.GetModels2.html\">X3DObject.GetModels2</a>\n\
instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
ModelCollection X3DObject.get_Models( Boolean in_bMode );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Recursive		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
Recurse if True, otherwise the search is done on the immediate children.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">main() ;\n\
function main()\n\
{\n\
	NewScene( null, false );\n\
	var oRoot = Application.ActiveSceneRoot;\n\
	// Stick all the x3dobjects in the current scene into a model\n\
	var oModel = oRoot.AddModel( oRoot.Children, \"TopModel\" );\n\
	// Create two models, each of which contain a Null and nest them inside the TopModel.\n\
	oNull = oRoot.AddNull( \"mynull\");\n\
	oModel.AddModel( oNull, \"SubModel\" );\n\
	oNull2 = oRoot.AddNull( \"mynull\" );\n\
	oModel.AddModel( oNull2, \"AnotherSubModel\" );\n\
	WriteModels( oRoot ) ;\n\
}\n\
function  WriteModels( in_obj )\n\
{\n\
	var mdls = in_obj.Models;\n\
	n = mdls.Count;\n\
	for ( var i=0; i&lt;n; i++ ) {\n\
		m = mdls.Item(i);\n\
		Application.LogMessage( \"Model \" + m.Name + \" is nested inside \" + m.model ) ;\n\
	}\n\
}\n\
// Expected results:\n\
//INFO : Model TopModel is nested inside Scene_Root\n\
//INFO : Model SubModel is nested inside TopModel\n\
//INFO : Model AnotherSubModel is nested inside TopModel</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">Option Explicit\n\
main()\n\
sub main()\n\
	NewScene , false\n\
	dim oRoot\n\
	set oRoot = Application.ActiveProject.ActiveScene.Root\n\
	oRoot.AddModel oRoot.Children, \"Mary\"\n\
	WriteModels oRoot\n\
end sub\n\
\' Recursive function to read all models no matter how deeply nested\n\
function WriteModels( in_obj )\n\
	dim list, n, i, mdls\n\
	set mdls = in_obj.Models(0)\n\
	n = mdls.Count\n\
	if n = 0 then\n\
		exit function\n\
	end if\n\
	for i=0 to n-1\n\
		Application.LogMessage mdls(i).Name\n\
		\' Drill down\n\
		WriteModels mdls(i)\n\
	next\n\
end function\n\
\' Expected results:\n\
\'INFO : Mary</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/X3DObject.GetModels2.html\">X3DObject.GetModels2</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";