var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGItem</title>\n\
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
            <h1>PPGItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">PPGItem</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_PPGItem\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object represents a component of the user interface of a Property Page.  \n\
Normally a PPGItem represents a user interface control that is directly \n\
related to a <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> of the object that is inspected.\n\
For example a PPGItem of type siControlString would display the\n\
value of a <a href=\"#!/url=./files/String.htm\">String</a> parameter.  Similarly a \n\
PPGItem of type siControlFCurve would show the FCurve contained inside \n\
a FCurve Parameter.  The connection between the control and its associated \n\
Parameter is established based on the <a href=\"#!/url=./si_om/PPGItem.Name.html\">PPGItem.Name</a>.<br /><br />\n\
Other PPGItems do not directly correspond to a parameter, for example Buttons,\n\
Tabs and Groups.<br /><br />\n\
Each PPGItem exposes a series of \"attributes\" that can be used to tweak its appearance.\n\
Some of the most common attributes are exposed directly as properties of the object,\n\
for example <a href=\"#!/url=./si_om/PPGItem.Label.html\">PPGItem.Label</a>, whereas the more specialized or uncommon\n\
attributes can be accessed via <a href=\"#!/url=./si_om/PPGItem.GetAttribute.html\">PPGItem.GetAttribute</a>.<br /><br />\n\
PPGItem objects are accessible via the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> of a\n\
<a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a>.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGItem.GetAttribute.html\">GetAttribute</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">SetAttribute</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGItem.Label.html\">Label</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGItem.LabelMinPixels.html\">LabelMinPixels</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGItem.LabelPercentage.html\">LabelPercentage</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGItem.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGItem.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGItem.UIItems.html\">UIItems</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/PPGItem.WidthPercentage.html\">WidthPercentage</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'example demonstrating using the PPGItem \n\
\'object to set the Labels of an object.\n\
dim oPSet,oPPGLayout, oItem\n\
set oPSet=ActiveSceneRoot.AddProperty(\"CustomProperty\",false,\"Demo\")\n\
oPSet.AddParameter3 \"Check1\", siBool\n\
oPSet.AddParameter3 \"Check2\", siBool\n\
set oPPGLayout = oPSet.PPGLayout\n\
oPPGLayout.AddGroup \"\", true\n\
oPPGLayout.AddRow\n\
oPPGLayout.AddItem \"Check1\"\n\
set oItem = oPPGLayout.AddItem( \"Check2\" )\n\
oItem.Label = \"Check Box 2\"\n\
oPPGLayout.EndRow\n\
oPPGLayout.EndGroup\n\
\'We can look up and change the items afterwards\n\
set oItem = oPPGLayout.Item( \"Check1\" )\n\
oItem.Label = \"Check Box 1\"\n\
\'Show our PPG\n\
InspectObj oPSet</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//example building a layout with two Controls for selecting a \n\
//filepath and one for selecting a folder.\n\
var oPSet=ActiveSceneRoot.AddProperty(\"CustomProperty\",false,\"Demo\") ;\n\
oPSet.AddParameter3( \"ExportFile\", siString ) ;\n\
oPSet.AddParameter3( \"ImportFile\", siString ) ;\n\
oPSet.AddParameter3( \"FolderPicker\", siString ) ;\n\
var oPPGLayout = oPSet.PPGLayout ;\n\
var oItem = oPPGLayout.AddItem( \"ExportFile\",\"Export Filename\",siControlFilePath ) ;\n\
// You can use the string directly, or the typdef siUIInitialDir (see siPPGItemAttribute enum)\n\
oItem.SetAttribute( \"initialdir\", \"project\" ) ;\n\
oItem.SetAttribute( siUIFileFilter, \"Text files (*.txt)|*.txt|All Files (*.*)|*.*||\" ) ;\n\
var oItem = oPPGLayout.AddItem( \"ImportFile\",\"\",siControlFilePath ) ;\n\
oItem.SetAttribute( siUIFileFilter, \n\
				\"spdl files (*.spdl)|*.spdl|\" +\n\
				\"xsiaddon files (*.xsiaddon)|*.xsiaddon|\" +\n\
				\"All Files (*.*)|*.*||\" );\n\
oItem.SetAttribute( siUIOpenFile, true ) ;\n\
oItem.SetAttribute( siUIInitialDir, \"factory\" ) ;\n\
oItem.SetAttribute( siUISubFolder, \"Application/spdl\" ) ;\n\
oItem.SetAttribute( siUIFileMustExist, true );\n\
var oItem = oPPGLayout.AddItem( \"FolderPicker\", \"\", \"Folder\" );\n\
oItem.SetAttribute( siUIInitialDir, \"user\" ) ;\n\
InspectObj( oPSet );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> <a href=\"#!/url=./si_om/PPGLayout.Item.html\">PPGLayout.Item</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";