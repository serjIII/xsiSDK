var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIFactory.CreateGridParamDef</title>\n\
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
            <h1>XSIFactory.CreateGridParamDef</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>.CreateGridParamDef</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates a <a href=\"#!/url=./si_om/GridData.html\">GridData</a> parameter definition for use with a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> \n\
or <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a>. The grid is a convenient way to store 1- or 2-dimensional Arrays and \n\
the user can view and edit this data via the siControlGrid (see <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a> constant).\n\
<br /><br />\n\
To change the contents of the grid via scripting use the <a href=\"#!/url=./si_om/GridData.html\">GridData</a> object, which is \n\
accessible via <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a>.\n\
<br /><br />\n\
To include the GridData in the property page of the CustomProperty or CustomOperator use \n\
<a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>ParamDef XSIFactory.CreateGridParamDef( String in_ScriptName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIFactory.CreateGridParamDef( ScriptName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/ParamDef.html\">ParamDef</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ScriptName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		This argument specifies the ScriptName of a parameter (see \n\
		<a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a>). This name is also \n\
		used as the name and description.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to create a grid parameter from a parameter definition.\n\
*/\n\
var o = Application.ActiveSceneRoot.AddCustomProperty( \"MagicIdentity \");\n\
var param = o.AddParameterFromDef( XSIFactory.CreateGridParamDef(\"magicI\") );\n\
// Set data on grid\n\
var grid = param.value;\n\
grid.RowCount = 180+1;\n\
grid.ColumnCount = 4;\n\
for ( var i = 0; i &lt;= 180; i++ )\n\
{\n\
	var magicI = Math.pow( Math.cos(i), 2 ) + Math.pow( Math.sin(i), 2 );\n\
	grid.SetRowValues( i, Array(i, Math.cos(i), Math.sin(i), magicI) );\n\
}\n\
// Set column labels\n\
grid.SetColumnLabel( 0, \"@\" ) ;\n\
grid.SetColumnLabel( 1, \"cos(@)\" ) ;\n\
grid.SetColumnLabel( 2, \"sin(@)\" ) ;\n\
grid.SetColumnLabel( 3, \"sqr(cos(@) + sqr(sin(@)\" ) ;\n\
// Set layout attributes\n\
var oLayout = o.PPGLayout;\n\
var oPPGItem = oLayout.AddItem( \"magicI\", \"\",siControlGrid) ;\n\
oPPGItem.SetAttribute( \"NoLabel\", true ) ;\n\
oPPGItem.SetAttribute( siUIGridLockColumnHeader, true );\n\
oPPGItem.SetAttribute( siUIGridHideRowHeader, true );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomOperator.AddParameter.html\">CustomOperator.AddParameter</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameterFromDef.html\">CustomProperty.AddParameterFromDef</a> <a href=\"#!/url=./si_om/GridData.html\">GridData</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";