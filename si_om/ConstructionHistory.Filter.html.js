var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ConstructionHistory.Filter</title>\n\
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
            <h1>ConstructionHistory.Filter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ConstructionHistory.html\">ConstructionHistory</a>.Filter</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Returns a collection of <a href=\"#!/url=./si_om/Operator.html\">Operator</a> objects that match the specified criteria.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>OperatorCollection ConstructionHistory.Filter( String in_filter, Object in_famArray, String in_path );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ConstructionHistory.Filter( [Type], [Family], [Path] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/OperatorCollection.html\">OperatorCollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Operator type e.g. twistop (see <a href=\"#!/url=./si_cmds/OpPreset.html\">Operator Information</a> for a list of available operators.)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Family		</td>\n\
		<td><a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
		<td>\n\
Name of family to filter by (for example, use \"siDeformOperatorFamily\" for the deform operator family).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Path		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Name of object(s) as an <a href=\"#!/url=./files/listexpr.htm\">Object List</a> string expression (for example, \"twist*\" to return all twist operators).		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' The following code illustrates how to get a ConstructionHistory, \n\
\' filter the construction history for DeformOperators and then iterate \n\
\' the converters using the For Each...Next statement: \n\
Dim oGPig\n\
\' See if there are any DeformOperators now\n\
Set oGPig = ActiveSceneRoot.AddGeometry( \"Torus\", \"MeshSurface\" )\n\
ShowTransforms oGPig \n\
\' Apply a Bend Operator and then see\n\
ApplyOp \"bend\", oGPig\n\
ShowTransforms oGPig \n\
\' Apply a Twist Operator and then see\n\
ApplyOp \"twist\", oGPig\n\
ShowTransforms oGPig \n\
Function ShowTransforms( in_object )\n\
	Dim oStack, oTransform, sMemberList \n\
	Set oStack = in_object.ActivePrimitive.ConstructionHistory.Filter( , siDeformOperatorFamily )\n\
	If oStack.Count &gt; 0 Then\n\
		For Each oTransform In oStack\n\
			sMemberList = sMemberList &amp; oTransform.Name &amp; \", \"\n\
		Next\n\
		sMemberList = Left( sMemberList, ( Len( sMemberList ) - 2 ) )\n\
	Else\n\
		sMemberList = \"(none found)\"\n\
	End If\n\
	LogMessage sMemberList\n\
	ShowConstructionHistory = sMemberList\n\
End Function\n\
\' Output of above script:\n\
\'INFO : \"(none found)\"\n\
\'INFO : \"Bend Op\"\n\
\'INFO : \"Twist Op, Bend Op\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";