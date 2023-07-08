var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siBranchFlag</title>\n\
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
            <h1>siBranchFlag</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siBranchFlag</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>The branch flag is used to determine whether we are referring to the object as a node or as a branch.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siBranchFlag.siNode                                                         // 0\n\
siBranchFlag.siBranch                                                       // 1\n\
siBranchFlag.siUnspecified                                                  // 3\n\
siBranchFlag.siNotSelected                                                  // 4</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNode\"> </a>siNode		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Node		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBranch\"> </a>siBranch		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Branch		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUnspecified\"> </a>siUnspecified		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Unspecified		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNotSelected\"> </a>siNotSelected		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Not selected		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ApplyGenOp.html\">ApplyGenOp</a> <a href=\"#!/url=./si_cmds/ApplyKinematicOp.html\">ApplyKinematicOp</a> <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> <a href=\"#!/url=./si_cmds/ApplyOperator.html\">ApplyOperator</a> <a href=\"#!/url=./si_cmds/ApplyPropVolumeOp.html\">ApplyPropVolumeOp</a> <a href=\"#!/url=./si_cmds/ApplyShader.html\">ApplyShader</a> <a href=\"#!/url=./si_cmds/ApplySnapFaceOp.html\">ApplySnapFaceOp</a> <a href=\"#!/url=./si_cmds/ApplyTopoOp.html\">ApplyTopoOp</a> <a href=\"#!/url=./si_cmds/FreezeModeling.html\">FreezeModeling</a> <a href=\"#!/url=./si_cmds/FreezeObj.html\">FreezeObj</a> <a href=\"#!/url=./si_cmds/GetConnectionSet.html\">GetConnectionSet</a> <a href=\"#!/url=./si_cmds/IsAnimated.html\">IsAnimated</a> <a href=\"#!/url=./si_cmds/MeshSubdivideWithCenter.html\">MeshSubdivideWithCenter</a> <a href=\"#!/url=./si_cmds/RemoveAllAnimation.html\">RemoveAllAnimation</a> <a href=\"#!/url=./si_cmds/RemoveAllProperties.html\">RemoveAllProperties</a> <a href=\"#!/url=./si_cmds/RemoveProperties.html\">RemoveProperties</a> <a href=\"#!/url=./si_cmds/SIApplyShader.html\">SIApplyShader</a> <a href=\"#!/url=./si_cmds/SIDuplicate.html\">SIDuplicate</a> <a href=\"#!/url=./si_om/CollectionItem.Selected.html\">CollectionItem.Selected</a> <a href=\"#!/url=./si_om/CollectionItem.Singleton.html\">CollectionItem.Singleton</a> <a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">ProjectItem.BranchFlag</a> <a href=\"#!/url=./si_om/ProjectItem.IsSelected.html\">ProjectItem.IsSelected</a> <a href=\"#!/url=./si_om/ProjectItem.Selected.html\">ProjectItem.Selected</a> <a href=\"#!/url=./si_om/ProjectItem.SetAsSelected.html\">ProjectItem.SetAsSelected</a> <a href=\"#!/url=./si_om/Property.Branch.html\">Property.Branch</a> <a href=\"#!/url=./si_om/Property.Singleton.html\">Property.Singleton</a> <a href=\"#!/url=./si_om/SceneItem.ApplyEnvelope.html\">SceneItem.ApplyEnvelope</a> <a href=\"#!/url=./si_om/SchematicNode.Selected.html\">SchematicNode.Selected</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CObjectRemovedNotification.html#GetBranchFlag\">CObjectRemovedNotification::GetBranchFlag</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetSelected\">ProjectItem::GetSelected</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#PutSelected\">ProjectItem::PutSelected</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetBranchFlag\">ProjectItem::GetBranchFlag</a> <a href=\"#!/url=./si_cpp/classXSI_1_1SceneItem.html#ApplyEnvelope\">SceneItem::ApplyEnvelope</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.Expand.html\">XSICollection.Expand</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";