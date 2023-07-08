var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Addon.AddItem</title>\n\
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
            <h1>Addon.AddItem</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Addon.html\">Addon</a>.AddItem</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Adds an item to the add-on. You can use this method only while packaging add-ons.\n\
You can use this method to add any of the item types that appear in the File > Add-On > Package dialog\n\
(see <a href=\"#!/url=./si_om/siAddonItemType.html\">siAddonItemType</a> for details on the types of items you can add to a package).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Addon.AddItem( siAddonItemType in_eItemKind, String in_bstrItemName );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Addon.AddItem( in_eItemKind, in_bstrItemName );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">in_eItemKind		</td>\n\
		<td><a href=\"#!/url=./si_om/siAddonItemType.html\">siAddonItemType</a>		</td>\n\
		<td>\n\
The type of the item being added.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">in_bstrItemName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
	The name of the item (for example, the name of a command) or the location (the full path including the file name) of the \n\
	file that contains the item. See <a href=\"#!/url=./si_om/siAddonItemType.html\">siAddonItemType</a> to determine whether you can use the item name or the \n\
	full path and file name.\n\
	<br /><br />\n\
	Note. This parameter is case-sensitive.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' **********************************\n\
\'\n\
\' This example shows how to add a custom command to an add-on package.\n\
\'\n\
sPath = InstallationPath( siUserPath )\n\
sCmdName = makeCusCmd()\n\
\' Create the add-on package object\n\
set oAddOn = Application.CreateAddon\n\
\' Add the custom command to the add-on package\n\
oAddOn.AddItem siScriptCmdAddonItemType, sCmdName\n\
\' Save the package in the Addons directory\n\
sAddOnFileName = XSIUtils.BuildPath( sPath,  \"Addons\", \"myAddOn.xsiaddon\" )\n\
oAddOn.Save sAddOnFileName\n\
\' Remove the custom command and install it from the add-on package\n\
if cleanUpCmd( sCmdName ) then\n\
	Application.InstallAddOn sAddOnFileName, siUserAddonPath \n\
	\' Run it to make sure it works\n\
	set oInstalledCmd = Commands( sCmdName )\n\
	if TypeName( oInstalledCmd ) &lt;&gt; \"Nothing\" then\n\
		Application.LogMessage \"Logged after installing from add-on:\"\n\
		oInstalledCmd.Execute\n\
		\' After we know it works, we can uninstall it\n\
		Application.UnInstallAddon sAddOnFileName \n\
	else\n\
		Application.LogMessage \"Can\'t find command.\"\n\
	end if\n\
end if\n\
\' **********************************\n\
\' Helper functions that take care of \n\
\' creating and removing the command. \n\
function makeCusCmd()\n\
	\' Start with a clean slate\n\
	Application.RemoveCommand \"Howdy\"\n\
	\' Build the filename &amp; path\n\
	sCmdFileName = XSIUtils.BuildPath( sPath, \"Data\", \"Scripts\", \"HelloWorld.vbs\" )\n\
	\' Create a \"hello world\" script file\n\
	set fso = CreateObject( \"Scripting.FileSystemObject\" )\n\
	set fHWFile = fso.CreateTextFile( sCmdFileName )\n\
	fHWFile.WriteLine \"function SayHi()\"\n\
	fHWFile.WriteLine \" \"\n\
	fHWFile.WriteLine vbTab &amp; \"Application.LogMessage \" &amp; Chr(34) &amp; \"Hello, World!\" &amp; Chr(34)\n\
	fHWFile.WriteLine \"end function\"\n\
	fHWFile.Close\n\
	\' Add it to the command map in Softimage\n\
	set oCmd = Application.CreateCommand( \"Howdy\", siNoCategory )\n\
	oCmd.Description = \"Display the traditional greeting\"\n\
	oCmd.ScriptingName = \"Howdy\"\n\
	oCmd.Handler = \"SayHi\"\n\
	oCmd.FileName = sCmdFileName\n\
	oCmd.Language = \"VBScript\"\n\
	Application.AddCommand oCmd \n\
	\' Run it just to make sure it\'s working\n\
	Application.LogMessage \"Logged from within makeCusCmd():\"\n\
	oCmd.Execute\n\
	\' Return the name of the new command\n\
	makeCusCmd = \"Howdy\"\n\
	Application.LogMessage \"========================================\"\n\
end function\n\
function cleanUpCmd( in_sCmd2Delete )\n\
	Application.RemoveCommand in_sCmd2Delete\n\
	if Err.Number &lt;&gt; 0 then\n\
		cleanUpCmd = false\n\
	else\n\
		cleanUpCmd = true\n\
	end if\n\
end function\n\
\' ------------------------------------\n\
\' Output of above script:\n\
\'\n\
\'INFO : \"Logged from within makeCusCmd():\"\n\
\'INFO : \"Hello, World!\"\n\
\'Howdy\n\
\'INFO : \"========================================\"\n\
\'INFO : \"Logged after installing from add-on:\"\n\
\'INFO : \"Hello, World!\"\n\
\'Howdy</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Addon.AddOtherItem.html\">Addon.AddOtherItem</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";