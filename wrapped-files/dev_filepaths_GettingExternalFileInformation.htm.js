var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-8B794A48-1AB0-47A1-93FE-CD0291D11F77\" />\n\
      <meta name=\"indexterm\" content=\"Example: External file references on a model\" />\n\
      <meta name=\"indexterm\" content=\"Python Example: Getting the list of external files on a model\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Getting External File Information</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-8B794A48-1AB0-47A1-93FE-CD0291D11F77\"></a></span><div class=\"head\">\n\
            <h1>Getting External File Information</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F070AA6C-FB6F-43DF-A493-CC4F5691B8B8\"></a></span>You can get a <a href=\"#!/url=./si_om/FileReferenceCollection.html\">FileReferenceCollection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray of FileReference objects</a> representing each external file referenced in the <a href=\"#!/url=./si_om/Scene.html\">scene</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Scene.html\">scene</a> or <a href=\"#!/url=./si_om/Model.html\">model</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Model.html\">model</a> via <a href=\"#!/url=./si_om/Model.ExternalFiles.html\">Model.ExternalFiles property</a> or Model::GetExternalFiles member function or <a href=\"#!/url=./si_om/Scene.ExternalFiles.html\">Scene.ExternalFiles property</a> or Scene::GetExternalFiles member function. These <a href=\"#!/url=./si_om/FileReference.html\">FileReference</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1FileReference.html\">FileReference</a> objects are available whether they exist in the referenced location or not, which\n\
               you can test with <a href=\"#!/url=./si_om/FileReference.FileExists.html\">FileReference.FileExists method</a> or FileReference::FileExists member function. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS8042938774C2F94DA7AE1F03DFD0F295-0004\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6A973C19-082A-4DA3-BDC1-4B7B89F46AF3\"></a></span> Python Example: Getting the List of External Files on a Model\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-14DFAEF3-2250-4615-A9EE-9266CDBF319E\"></a></span>This example demonstrates how to get the list of external files on a specific model.\n\
                  \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
from win32com.client import constants as c\n\
app = Application\n\
app.NewScene(\"\", 0)\n\
root = app.ActiveSceneRoot\n\
\n\
# ---------------------------------------------------------------------------\n\
# CONVENIENCE FUNCTION\n\
# \n\
def printFileInfo( in_file ) :\n\
	# Get the original path \n\
	orig_path = in_file.Name\n\
	\n\
	app.LogMessage( \"FileType: \" + in_file.FileType )\n\
\n\
	if in_file.FileExists() :\n\
		app.LogMessage( in_file.Name + \" exists\" )\n\
		\n\
		# Get the resolved path\n\
		rslv_path = in_file.ResolvedPath\n\
		\n\
		# Get the UNC path\n\
		unc_path = in_file.UNCPath\n\
		\n\
		# Print all three results\n\
		app.LogMessage( \"ORIGINAL: \" + orig_path )\n\
		app.LogMessage( \"RESOLVED: \" + rslv_path )\n\
		app.LogMessage( \"UNC     : \" + unc_path )\n\
	else :\n\
		app.LogMessage( \"Specified FileReference does NOT exist\" )\n\
\n\
\n\
# ---------------------------------------------------------------------------\n\
# MAIN\n\
# \n\
\n\
# First import a model so we have some external files to find\n\
FPath = app.InstallationPath( c.siFactoryPath )\n\
refModels = app.ImportRefModels( XSIUtils.BuildPath(FPath, \"Data\", \"XSI_SAMPLES\", \"Models\", \"Man_Face.emdl\") )\n\
\n\
# Enumerate all files related to this model\n\
oModel = root.Models(0)\n\
extFileList = oModel.ExternalFiles\n\
for file in extFileList :\n\
	printFileInfo( file )\n\
\n\
\n\
# ---------------------------------------------------------------------------\n\
# OUTPUT\n\
# \n\
# INFO : FileType: Models\n\
# INFO : E:\\Softimage\\Softimage_<span class=\"charspan-msgph\" translate=\"no\">2015</span>\\Data\\XSI_SAMPLES\\Models\\Man_Face.emdl exists\n\
# INFO : ORIGINAL: C:\\Softimage\\Softimage_<span class=\"charspan-msgph\" translate=\"no\">2015</span>\\Data\\XSI_SAMPLES\\Models\\Man_Face.emdl\n\
# INFO : RESOLVED: C:\\Softimage\\Softimage_<span class=\"charspan-msgph\" translate=\"no\">2015</span>\\Data\\XSI_SAMPLES\\Models\\Man_Face.emdl\n\
# INFO : UNC     : C:\\Softimage\\Softimage_<span class=\"charspan-msgph\" translate=\"no\">2015</span>\\Data\\XSI_SAMPLES\\Models\\Man_Face.emdl\n\
# INFO : FileType: Models\n\
# INFO : Specified FileReference does NOT exist\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";