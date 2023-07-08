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
      <meta name=\"topicid\" content=\"GUID-31682525-0946-4663-8F82-9166D256C4C7\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Working with Custom Python Modules in Softimage</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-31682525-0946-4663-8F82-9166D256C4C7\"></a></span><div class=\"head\">\n\
            <h1>Working with Custom Python Modules in Softimage</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4785832F-DE92-4672-963D-3177CCD2A087\"></a></span>Python modules are convenient for writing reusable code for Softimage plug-ins. To\n\
               import a module in a Softimage plug-in, you first need to tell Python where to find\n\
               the module by adding the module folder path to the Python system path (sys.path).\n\
               Once Python knows where to find your module file, you can import it into your plug-in.\n\
               \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#---------\n\
\n\
import sys\n\
\n\
sys.path.append( \'d:\\MyModules\' )\n\
\n\
import moduleA\n\
\n\
--------</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3980D98D-85C4-4173-89B0-88006A47ED6D\"></a></span>The example above imports <em class=\"strong\">moduleA</em> defined in <span class=\"filePath\" translate=\"no\">d:\\MyModules</span>. You can add more than one path to sys.path, but keep in mind that the order in which\n\
               the paths are added determines the search order that Python uses to look for your\n\
               modules. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BC0553AC-EE6E-4836-8359-D6A343574345\"></a></span>Adding specific paths to sys.path is not always the most convenient method. This is\n\
               particularly true for plug-ins that need to be installed to different locations. For\n\
               instance, when your modules are located with your plug-in file, the plug-in path must\n\
               be added to sys.path. In this case, you can use the variable __sipath__ which gets\n\
               set by Softimage to the plug-in file folder path. This variable is always defined\n\
               in the plug-in file namespace and can be used as is without going through the Softimage\n\
               Application object. \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#---------\n\
\n\
import sys\n\
\n\
if __sipath__ not in sys.path:\n\
\n\
	sys.path.append( __sipath__ )\n\
\n\
import moduleA\n\
\n\
--------\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E7EF71B-451B-4E2C-807C-51E8603FD7D2\"></a></span>In the example above, Python will search the plug-in folder and import moduleA. The\n\
               code also ensures that __sipath__ gets added to sys.path only (this check is required\n\
               because a plug-in can be loaded multiple times during a Softimage session). __sipath__\n\
               can also be used to specify any folder paths related to your plug-in folder. \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#---------\n\
\n\
import sys\n\
\n\
import os\n\
\n\
myModules = __sipath__ + os.sep + \'MyModules\'\n\
\n\
if myModules not in sys.path:\n\
\n\
	sys.path.append( myModules )\n\
\n\
import moduleA\n\
\n\
--------\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA69DF7A-DE0C-40A1-92B0-6D1B0AA35A3B\"></a></span>The Softimage sipyutils module contains functions to help you specify your module\n\
               paths more easily. It also contains functions for importing source code files as modules,\n\
               which can be handy if versioning has to be considered when writing plug-ins. The sipyutils\n\
               module file is located in the Softimage application folder: <span class=\"filePath\" translate=\"no\">&lt;install_folder&gt;\\Application\\bin\\sipyutils.py.</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C43B8AEF-0CAC-4546-808F-27700631D83D\"></a></span>The following example demonstrates how to use the functions defined in sipyutils:\n\
               \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#---------\n\
Example 1:\n\
\n\
# note: for the example, the plug-in\'s __sipath__ variable is <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> to d:\\Application\\Plugins\n\
\n\
\n\
# import the Softimage utility module\n\
	\n\
import sipyutils\n\
\n\
\n\
#add some paths to python system path\n\
\n\
sipyutils.add_to_syspath( __sipath__ )\n\
\n\
sipyutils.add_subfolder_to_syspath( __sipath__, \'mysubfolder\' )\n\
\n\
\n\
# import eggs from d:\\Application\\Plugins\n\
\n\
import eggs\n\
\n\
\n\
def XSILoadPlugin( in_reg ):\n\
\n\
	in_reg.Author = \"Softimage\"\n\
\n\
	in_reg.Name = \"TestPlugin\"\n\
\n\
	in_reg.Major = 1\n\
\n\
	in_reg.Minor = 0\n\
\n\
\n\
	in_reg.RegisterCommand( \"TestCommand\", \"TestCommand\")\n\
\n\
\n\
	return True\n\
\n\
\n\
def TestCommand_Execute(  ):\n\
\n\
	# INFO: d:\\Application\\Plugins\\eggs.pyc\n\
\n\
	LogMessage( \'eggs.__siplugin_file__ \' + eggs.__siplugin_file__  )	\n\
\n\
\n\
	# import foo from d:\\Application\\Plugins\\mysubfolder\n\
\n\
	import foo\n\
\n\
	LogMessage( \'foo.__siplugin_file__ \' + foo.__siplugin_file__  )\n\
	\n\
	return True\n\
\n\
\n\
Example 2:\n\
\n\
\n\
import sipyutils\n\
\n\
\n\
sipyutils.add_to_syspath( __sipath__ )\n\
\n\
\n\
# import foo.py from d:\\Application\\Plugins\n\
\n\
# INFO: d:\\Application\\Plugins\\foo.pyc\n\
\n\
import foo\n\
\n\
LogMessage( foo.__siplugin_file__ )\n\
\n\
	\n\
# import foo.py from d:\\Application\\Plugins\\mysubfolderA\n\
\n\
foo = sipyutils.import_source( __sipath__ + os.sep + \'mysubfolderA\' + os.sep + \'foo.py\' )\n\
\n\
# INFO: d:\\Application\\Plugins\\mysubfolderA\\foo.pyc\n\
\n\
LogMessage( foo.__siplugin_file__ )\n\
\n\
\n\
# import foo.py from d:\\Application\\Plugins\\mysubfolderB\n\
\n\
foo = sipyutils.import_source( __sipath__ + os.sep + \'mysubfolderB\' + os.sep + \'foo.py\' )\n\
\n\
# INFO: d:\\Application\\Plugins\\mysubfolderB\\foo.pyc\n\
\n\
LogMessage( foo.__siplugin_file__ )\n\
\n\
---------\n\
</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";