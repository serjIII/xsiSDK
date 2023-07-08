var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIUtils.RegisterSPDL</title>\n\
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
            <h1>XSIUtils.RegisterSPDL</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a>.RegisterSPDL</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Installs a SPDL file in the Registry and optionally generates a new Preset.  <br /><br />\n\
WARNING: This is a low-level API and should only be used with caution because it \n\
can damage the Softimage installation.<br /><br />\n\
This method associates the SPDL file with a particular \"Class ID\" (CLSID).  Each different object in\n\
Softimage has its own Class ID.  For example a Phong shader has a different CLSID than a \n\
Lambert shader.  Each time a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> is created it is assigned a new, unique CLSID.\n\
However if copies of the CustomProperty are made (via cut and paste, or <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a>\n\
with the Preset name) then they will all share the same CLSID. (See <a href=\"#!/url=./si_om/siObjectIdentifierType.html\">siObjectIdentifierType</a>)<br /><br />\n\
Each SPDL file has a reference GUID at the top of the file which tells Softimage what CLSID it is associated with.\n\
However, until the SPDL file is registered, Softimage is not aware of the SPDL file.  A Custom Property can exist without\n\
a SPDL file, in which case it shows a default layout for its parameters.  Most other objects must have a SPDL file\n\
to work properly, for example Custom <a href=\"#!/url=./si_om/Operator.html\">Operator</a>s and Custom <a href=\"#!/url=./si_om/Shader.html\">Shader</a>s.<br /><br />\n\
Only a single SPDL file can be associated with each ClassID.  Hence calling this method a second time will\n\
overwrite the effects of the first call.<br /><br />\n\
It is possible to generate a SPDL file for a CustomProperty using <a href=\"#!/url=./si_om/XSIUtils.WriteSPDL.html\">XSIUtils.WriteSPDL</a>.<br /><br />\n\
Calling this function is very similar to calling \"xsi -i\" with a spdl file name.\n\
However, unlike \"xsi -i\", the SPDL file is not duplicated.  When the SPDL file and Preset are installed from\n\
an .xsiaddon file the registration is automatic.  Similarly the Workgroup feature makes SPDL registration automatic.\n\
Hence in normal circumstances it is not necessary to call this method.<br /><br />\n\
This method can also generate a Preset file.  It is the preset which allows the object to be \n\
instantiated with calls to <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a>.  When a SPDL file is changed\n\
it is always recommended that the Preset file also be regenerated.  The Preset file is generated\n\
in a path relative to the SPDL file location, so it is recommended that the spdl file always be\n\
located in the Application/spdl directory of the user, factory, workgroup, user addon or workgroup addon \n\
directories.  Because it is possible to rename or create new presets there can be multiple presets referring\n\
to the same object.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>String XSIUtils.RegisterSPDL( String in_SpdlFileName, Boolean in_bGeneratePreset );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oString = XSIUtils.RegisterSPDL( SpdlFileName, [GeneratePreset] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p> If the GeneratePreset argument is true then the return value is a <a href=\"#!/url=./files/String.htm\">String</a> \n\
with the full path of the new Preset file.\n\
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
		<td class=\"name\">SpdlFileName		</td>\n\
		<td><a href=\"#!/url=./files/string.htm\">string</a>		</td>\n\
		<td>\n\
Name of the SPDL file.  If no path is included then Softimage expects the SPDL file \n\
		to be in the [User Directory]\\Application\\spdl directory.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">GeneratePreset		</td>\n\
		<td><a href=\"#!/url=./files/boolean.htm\">boolean</a>		</td>\n\
		<td>\n\
Whether to generate a Preset based on the SPDL file.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// SPDL repair example\n\
//\n\
// This script scans for spdls and re-registers them.\n\
// Normally it should not be necessary to run this\n\
// script because Softimage itself performs a similar scan\n\
// each time it starts.\n\
//\n\
// However it is a good example of using the FileSystemObject\n\
// to recurse through directories and can be repurposed for\n\
// other uses.\n\
var g_oFSO = new ActiveXObject( \"Scripting.FileSystemObject\" ) ;\n\
var g_oProgressBar = XSIUIToolkit.ProgressBar\n\
var g_slash = \"\\\\\" ;\n\
if ( Application.Platform != \"Win32\" )\n\
{\n\
	g_slash = \"/\" ;\n\
}\n\
SpdlRepair() ;\n\
function SpdlRepair()\n\
{\n\
	var g_aSpdlList = new Array() ;\n\
	// Use a progress bar in case it takes a long time\n\
	// to scan the workgroup\n\
	g_oProgressBar.maximum = 3\n\
	g_oProgressBar.step = 1\n\
	g_oProgressBar.visible = true\n\
	g_oProgressBar.caption = \"Processing SPDLs\"\n\
	// Scan workgroup (including workgroup addon location)\n\
	// followed by factory addon, then user.  We don\'t scan the factory\n\
	// itself because built-in spdls should not be registered with this\n\
	// script.  Order of scanning is important because a local spdl should\n\
	// take priority over remote spdls.\n\
	if ( Application.InstallationPath( siWorkgroupPath ) != \"\" )\n\
	{\n\
		FindSpdls( Application.InstallationPath( siWorkgroupPath ), g_aSpdlList ) ;\n\
	}\n\
	// Factory addon location\n\
	FindSpdls( Application.InstallationPath( siAddonPath ), g_aSpdlList ) ;\n\
	// Look for local spdls\n\
	FindSpdls( Application.InstallationPath( siUserPath ), g_aSpdlList ) ;\n\
	g_oProgressBar.Increment() ;\n\
	InstallSpdls( g_aSpdlList ) ;\n\
	g_oProgressBar.Increment() ;\n\
	Application.LogMessage( \"Complete\" ); \n\
}\n\
// Recursively search for spdl files\n\
function FindSpdls( in_root, io_list )\n\
{\n\
	g_oProgressBar.StatusText = in_root ;\n\
	//Application.LogMessage( \"Visiting \" + in_root ) ;\n\
	var oFolder = g_oFSO.GetFolder( in_root ) ;\n\
	// Scan for spdl files in the current directory\n\
	var oFiles = new Enumerator( oFolder.Files ) ;		\n\
	for (;!oFiles.atEnd(); oFiles.moveNext())\n\
	{\n\
		var oFile = oFiles.item() ;\n\
		var strFileName = oFile.Name ;\n\
		var aElems = strFileName.split( \".\" ); \n\
		if ( aElems.length &lt; 2 )\n\
			continue ;\n\
		// Check the extension\n\
		if ( aElems[aElems.length-1].toLowerCase() != \"spdl\" )\n\
			continue ;\n\
		// Add the spdl to our list						\n\
		io_list[ io_list.length ] = oFolder.Path + g_slash + strFileName ;\n\
	}\n\
	// Recurse into sub folders.  There are rules\n\
// about the folders that a spdl can be stored at,\n\
// e.g. \\Application\\spdl \\Addons\\Application\\spdl\n\
// \\Addons\\&lt;subdir&gt;\\Application\\spdl but\n\
// in this case it is easier to do a brute force\n\
// scan.  (This might cause problem if the user\n\
// had manually copied backups of spdl files into \n\
// unexpected locations)\n\
	var oSubFolders = new Enumerator( oFolder.SubFolders ) ;		\n\
	for (;!oSubFolders.atEnd(); oSubFolders.moveNext())\n\
	{\n\
		var oSubFolder = oSubFolders.item() ;\n\
		FindSpdls( oSubFolder.Path, io_list ) ;\n\
	}		\n\
}\n\
function InstallSpdls( in_SpdlList )\n\
{\n\
	// Add each spdl to the registry\n\
	for ( var i = 0 ; i &lt; in_SpdlList.length ; i++ )\n\
	{\n\
		var bFailed = false; \n\
		try\n\
		{\n\
			XSIUtils.RegisterSpdl( in_SpdlList[i], false ) ;			\n\
			Application.LogMessage( \"Registered \" + in_SpdlList[i] ) ;\n\
		}\n\
		catch( e )\n\
		{\n\
			bFailed = true ;\n\
		}\n\
		if ( bFailed )\n\
		{\n\
			var bSpdlCheckFailed = false; \n\
			try\n\
			{\n\
				// call spdl check.  (See the example with XSIUtils.LaunchProcess\n\
				// for a better way to call spdlcheck.)\n\
				system( \"spdlcheck \" + in_SpdlList[i] ) ;		\n\
			}\n\
			catch(e)\n\
			{\n\
				bSpdlCheckFailed = true ;\n\
			}\n\
			if ( bSpdlCheckFailed )\n\
			{\n\
				Application.LogMessage( \"SPDL parsing error in \" + in_SpdlList[i] + \n\
					\" use spdlcheck for more info\" ) ;\n\
			}\n\
			else\n\
			{			\n\
				// This could fail for various reasons \n\
				//- Current user doesn\'t have write access to the registry			\n\
			    	//- missing dll for compiled shader or operator\n\
				//- dll dependency problem (use depends.exe to track down)\n\
				Application.LogMessage( \"Failed to register \" + in_SpdlList[i] ) ;\n\
			}\n\
		}		\n\
	}		\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSIUtils.UnregisterSPDL.html\">XSIUtils.UnregisterSPDL</a> <a href=\"#!/url=./si_om/XSIUtils.WriteSPDL.html\">XSIUtils.WriteSPDL</a> <a href=\"#!/url=./si_om/XSIUtils.Reload.html\">XSIUtils.Reload</a> <a href=\"#!/url=./si_om/DataRepository.GetIdentifier.html\">DataRepository.GetIdentifier</a> <a href=\"#!/url=./si_cmds/SpdlCheck.html\">SpdlCheck</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";