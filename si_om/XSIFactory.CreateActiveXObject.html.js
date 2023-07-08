var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIFactory.CreateActiveXObject</title>\n\
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
            <h1>XSIFactory.CreateActiveXObject</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>.CreateActiveXObject</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Creates and returns an ActiveX object specified by a scripting ProgID for example \"XSI.Collection\".\n\
This method can be useful within the context of NetView based html pages as it can be\n\
used to create Automation Object (COM object) such as the \n\
\"Scripting.FileSystemObject\" object without any NetView warning dialogs. \n\
It is also more convenient method than having to remember the various different\n\
ways of creating activeX objects with other scripting languages such\n\
as JScript, Python and PerlScript.<br /><br />\n\
Each scripting language natively supports the ability to create Automation Objects,\n\
for example \"new ActiveXObject\" in JScript.\n\
However, when called from Netview, the native methods may result in a\n\
warning message being displayed.  \n\
This is because many ActiveX objects, including \n\
objects like \"Scripting.FileSystemObject\", and \"Microsoft.XMLDOM\",\n\
are not marked as being safe to be part of a web page.  However in the context of\n\
a Netview page running within Softimage these security warnings do not make sense, \n\
so this mechanism makes it possible to bypass them.<br /><br />\n\
All Softimage Automation objects, such as <a href=\"#!/url=./si_om/Application.html\">Application</a>, <a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a>\n\
and <a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a> are marked as safe so this method is not required to \n\
create them.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Object XSIFactory.CreateActiveXObject( String Name );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIFactory.CreateActiveXObject( ProgID );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>The newly created object</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ProgID		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Name of the object as a ProgID, in the format \"servername.typename\".  For example\n\
		\"Scripting.FileSystemObject\", or \"Excel.Sheet\".\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' This function is a useful tool within Netview Scripts that want to use \n\
\' Automation objects like \"Scripting.FileSystemObject\"\n\
\' \n\
function SafeCreateObject( in_ProgID )\n\
	on error resume next\n\
	\' First create our ActiveX (which is marked as safe)\n\
	set oXSIFactory = CreateObject( \"XSI.Factory\" )\n\
	\' Use xsifactory to create the object\n\
	set oOBj = oXSIFactory.CreateActiveXObject( in_ProgID )\n\
	if err.number &lt;&gt; 0 then\n\
		\' Problem might be that user is running an older version of Softimage, so \n\
		\' try the old version (this method might pop a ActiveX warning dialog)\n\
		err.Clear\n\
		set oObj = CreateObject( in_ProgID )\n\
	end if\n\
	set SafeCreateObject = oObj\n\
end function\n\
\' Example use\n\
set oXML = SafeCreateObject( \"Microsoft.XMLDOM\" )\n\
oXML.load \"c:\\info.xml\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">function getFileSystemObject()\n\
{\n\
	// Avoid the warning dialog that will appear NetView\n\
	// by getting Softimage to create the object for us\n\
	var oXSIFactory = new ActiveXObject( \'XSI.Factory\' );\n\
	var fso = oXSIFactory.CreateActiveXObject( \'Scripting.FileSystemObject\' );		\n\
	return fso ;		\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">import win32com.client\n\
my_xsifactory = win32com.client.Dispatch( \"XSI.Factory\" )\n\
my_fso = my_xsifactory.CreateActiveXObject( \"Scripting.FileSystemObject\" )\n\
Application.LogMessage( my_fso.FolderExists( \'C:\\\\temp\' ) )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";