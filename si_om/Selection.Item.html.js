var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Selection.Item</title>\n\
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
            <h1>Selection.Item</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Selection.html\">Selection</a>.Item</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the element at the specified key in the <a href=\"#!/url=./si_om/Selection.html\">Selection</a>. If the element is \n\
a 3d object, an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> is returned. If the element is a subcomponent, then \n\
a <a href=\"#!/url=./si_om/CollectionItem.html\">CollectionItem</a> is returned.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object Selection.get_Item( Object in_Key );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Key		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or <a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Item name if the key is a String; otherwise, position of the item in the selection.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example prints all the items in the \n\
\' Selection, according to their position\n\
SelectAll\n\
dim oSelection, i\n\
set oSelection = Application.Selection\n\
for i = 0 to (oSelection.Count - 1)\n\
	Application.LogMessage oSelection(i).Name\n\
next\n\
\' OUTPUT:\n\
\'INFO : \"Camera_Root\"\n\
\'INFO : \"Camera\"\n\
\'INFO : \"Camera_Interest\"\n\
\'INFO : \"light\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example gets an item in the \n\
\' Selection according to its name\n\
SelectAll\n\
set oSelection = Application.Selection\n\
set oCam = oSelection.Item(\"Camera_Root\")\n\
LogMessage typename(oCam)\n\
for each oParam in oCam.Parameters\n\
	LogMessage oParam.FullName\n\
next\n\
\' OUTPUT\n\
\'INFO : \"CameraRig\"\n\
\'INFO : \"Camera_Root.Name\"\n\
\'INFO : \"Camera_Root.kine.local.blendweight\"\n\
\'INFO : \"Camera_Root.kine.local.active\"\n\
\'INFO : \"Camera_Root.kine.local.posx\"\n\
\'INFO : \"Camera_Root.kine.local.posy\"\n\
\'INFO : \"Camera_Root.kine.local.posz\"\n\
\'INFO : \"Camera_Root.kine.local.rotx\"\n\
\'INFO : \"Camera_Root.kine.local.roty\"\n\
\'INFO : \"Camera_Root.kine.local.rotz\"\n\
\'INFO : \"Camera_Root.kine.local.quatw\"\n\
\'INFO : \"Camera_Root.kine.local.quatx\"\n\
\'INFO : \"Camera_Root.kine.local.quaty\"\n\
\'INFO : \"Camera_Root.kine.local.quatz\"\n\
\'INFO : \"Camera_Root.kine.local.sclx\"\n\
\'INFO : \"Camera_Root.kine.local.scly\"\n\
\'INFO : \"Camera_Root.kine.local.sclz\"\n\
\'INFO : \"Camera_Root.kine.local.sclorix\"\n\
\'INFO : \"Camera_Root.kine.local.scloriy\"\n\
\'INFO : \"Camera_Root.kine.local.scloriz\"\n\
\'INFO : \"Camera_Root.kine.local.cnsscl\"\n\
\'INFO : \"Camera_Root.kine.local.cnsori\"\n\
\'INFO : \"Camera_Root.kine.local.cnspos\"\n\
\'INFO : \"Camera_Root.kine.local.affbyscl\"\n\
\'INFO : \"Camera_Root.kine.local.affbyori\"\n\
\'INFO : \"Camera_Root.kine.local.posxmaxactive\"\n\
\'INFO : \"Camera_Root.kine.local.posxminactive\"\n\
\'INFO : \"Camera_Root.kine.local.posymaxactive\"\n\
\'INFO : \"Camera_Root.kine.local.posyminactive\"\n\
\'INFO : \"Camera_Root.kine.local.poszmaxactive\"\n\
\'INFO : \"Camera_Root.kine.local.poszminactive\"\n\
\'INFO : \"Camera_Root.kine.local.rotxmaxactive\"\n\
\'INFO : \"Camera_Root.kine.local.rotxminactive\"\n\
\'INFO : \"Camera_Root.kine.local.rotymaxactive\"\n\
\'INFO : \"Camera_Root.kine.local.rotyminactive\"\n\
\'INFO : \"Camera_Root.kine.local.rotzmaxactive\"\n\
\'INFO : \"Camera_Root.kine.local.rotzminactive\"\n\
\'INFO : \"Camera_Root.kine.local.siscaling\"\n\
\'INFO : \"Camera_Root.kine.local.rotorder\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";