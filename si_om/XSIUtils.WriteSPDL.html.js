var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIUtils.WriteSPDL</title>\n\
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
            <h1>XSIUtils.WriteSPDL</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a>.WriteSPDL</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Generates a SPDL file to describe a Softimage object.  This is a low-level API.  Normally\n\
this method would be used to install a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a> that \n\
has been created in memory.  In this circumstance, the purpose of a SPDL file \n\
is to remember the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>, and the logic code between Softimage sessions.\n\
If the CustomProperty is only used in a temporary fashion then it is not necessary to\n\
use a SPDL file, but if the CustomProperty will be saved in a scene file this is necessary.<br /><br />\n\
Softimage will not use the newly created SPDL file until <a href=\"#!/url=./si_om/XSIUtils.RegisterSPDL.html\">XSIUtils.RegisterSPDL</a> is\n\
called.<br /><br />\n\
Any existing file is overwritten.  If there was an existing SPDL file and it \n\
was associated with a different type of object then the installation of Softimage may be damaged.<br /><br />\n\
This method can be used to write out the SPDL file for a built-in operator. <br /><br />\n\
When writing out SPDL file for operators the GUID identifying the operator and the GUIDs use in the parameter\n\
definitions will always be re-generated when the SPDL is written. This is to ensure that there\'s no \n\
conflict with an installed or in-use operator. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>XSIUtils.WriteSPDL( Object in_object, String in_SpdlFileName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>XSIUtils.WriteSPDL( Object, SpdlFileName );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">Object		</td>\n\
		<td><a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>		</td>\n\
		<td>\n\
Object that the SPDL file should be based on.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SpdlFileName		</td>\n\
		<td><a href=\"#!/url=./files/string.htm\">string</a>		</td>\n\
		<td>\n\
Name of the SPDL file.  If no path is included then the new SPDL file \n\
		is saved in the [User Directory]\\Application\\spdl directory.  Any existing SPDL file\n\
		is replaced.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIUtils.RegisterSPDL.html\">XSIUtils.RegisterSPDL</a> <a href=\"#!/url=./si_om/XSIUtils.UnregisterSPDL.html\">XSIUtils.UnregisterSPDL</a> <a href=\"#!/url=./si_om/XSIUtils.Reload.html\">XSIUtils.Reload</a> <a href=\"#!/url=./si_om/DataRepository.GetIdentifier.html\">DataRepository.GetIdentifier</a> <a href=\"#!/url=./si_cmds/SpdlCheck.html\">SpdlCheck</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";