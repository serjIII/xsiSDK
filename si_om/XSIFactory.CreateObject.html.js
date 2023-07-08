var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIFactory.CreateObject</title>\n\
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
            <h1>XSIFactory.CreateObject</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>.CreateObject</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Creates an object from a type name.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object XSIFactory.CreateObject( String Name );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIFactory.CreateObject( NamespaceID );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>A Softimage object, for example a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NamespaceID		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Type Name.  In the case of a Self-installed CustomProperty or CustomOperator\n\
	this is the name as provided in <a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">PluginRegistrar.RegisterProperty</a> \n\
	and <a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a>.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example shows how to create a temporary instance of the Self-Installed \n\
	Custom Property called \"CustomColor\". This object is not part of the scene \n\
	so you don\'t have to delete it after you are done using it.\n\
*/\n\
var oColor = XSIFactory.CreateObject( \"CustomColor\" )\n\
bCancelled = InspectObj( oColor, null, \"Pick your favorite color\", siModal, false ) ;\n\
if ( !bCancelled )\n\
{\n\
	Application.LogMessage( \"You picked \" + oColor.Color_R.Value + \",\" + oColor.Color_G.Value + \",\" + oColor.Color_B.Value ) ;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This example shows a typical use of XSIFactory.CreateObject to create a temporary\n\
\' CustomProperty object used as the UI for an Import or Export operation.\n\
\'\n\
\' There are two routines.  DoScanUI is a user-friendly version that lets the user pick\n\
\' the options for the operation via a temporary custom pset.  It then calls DoScanLowLevel \n\
\' which does the actual operation without any UI.\n\
\'\n\
DoScanUI Application.InstallationPath( siUserPath ), false \n\
sub DoScanUI( in_defaultScanLocation, in_bRecursive )\n\
	if NOT Application.Interactive then			\n\
		\' If you want your script to work in batch mode you could skip the modal dialog box and just \n\
		\' use the default values.  But it would be clearly code to call DoScanLowLevel directly.\n\
		DoScanLowLevel in_defaultScanLocation, in_bRecursive\n\
		exit sub\n\
	end if\n\
	\' This CustomProperty is not part of the scene \n\
	\' and will not be persisted\n\
	set oTempPSet = XSIFactory.CreateObject( \"CustomProperty\" )\n\
	oTempPSet.Name = \"Scan Options\"\n\
	oTempPSet.AddParameter3 \"ScanFolder\", siString\n\
	oTempPSet.AddParameter3 \"Recursive\", siBool, , , , false\n\
	\' Establish the default values in the Custom PSet\n\
	oTempPSet.ScanFolder.Value = in_defaultScanLocation\n\
	oTempPSet.Recursive.Value = in_bRecursive\n\
	\' Build a custom layout\n\
	set oLayout = oTempPSet.PPGLayout\n\
	oLayout.AddItem \"ScanFolder\", \"Scan Folder\", siControlFolder\n\
	oLayout.AddItem \"Recursive\"\n\
	\' Show the custom ui, Softimage is frozen until the user closes the dialog\n\
	bCancel = InspectObj( oTempPSet,,,siModal,false )\n\
	if bCancel then\n\
		Logmessage \"Operation cancelled\"\n\
	else\n\
		\'Read the values from the pset	\n\
		strScanLocation = oTempPSet.ScanFolder.Value\n\
		bRecursive = oTempPSet.Recursive.Value\n\
		DoScanLowLevel strScanLocation, bRecursive \n\
	end if\n\
	\' No need to call DeleteObj\n\
end sub\n\
sub DoScanLowLevel( in_folder, in_bRecursive )\n\
	\' Do the scanning operation not actually implemented in this example)\n\
	strMsg = \"Doing \"\n\
	if in_bRecursive then\n\
		strMsg = strMsg &amp; \"recursive \"\n\
	end if\n\
	Application.LogMessage strMsg &amp; \"scan of \" &amp; in_folder\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";