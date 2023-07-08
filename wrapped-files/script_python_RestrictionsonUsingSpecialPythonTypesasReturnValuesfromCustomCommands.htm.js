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
      <meta name=\"topicid\" content=\"GUID-A1BFEEFA-8470-49B7-B896-B50F6E1D725B\" />\n\
      <meta name=\"indexterm\" content=\"Using Python Dictionaries as Return Values\" />\n\
      <meta name=\"indexterm\" content=\"Using Custom Python Classes as Return Values\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Returning Python Types from Custom Commands</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"attributes\", \"si_cpp/group__RenderMapDefine.html#ga846eefb80d8eb3fd3e0fd17e1fee1e63\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A1BFEEFA-8470-49B7-B896-B50F6E1D725B\"></a></span><div class=\"head\">\n\
            <h1> Returning Python Types from Custom Commands</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-5508D44E-D945-443C-9EDC-FFEF9632AD5B\"></a></span>When setting up your return values from a custom command authored in Python, you need\n\
            to be aware that you cannot pass native Python dictionaries and Python custom classes\n\
            <em class=\"mild\">as-is</em>: \n\
         </p><span class=\"anchor_wrapper\"><a name=\"UL_929A8DD37FCD473AACBE49A7AC379198\"></a></span><ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B2AB8A8F-E0BB-448C-9BDB-B2398F8E5197\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_python_RestrictionsonUsingSpecialPythonTypesasReturnValuesfromCustomCommands.htm#WS689E515AD51B8144BB6F07EF59FC15AE-000C\">Using Python Dictionaries as Return Values</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9AEC265A-6566-4FD5-AA97-719B52B140CD\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_python_RestrictionsonUsingSpecialPythonTypesasReturnValuesfromCustomCommands.htm#WS689E515AD51B8144BB6F07EF59FC15AE-000D\">Using Custom Python Classes as Return Values</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS689E515AD51B8144BB6F07EF59FC15AE-000C\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F1EE3FA6-D2F9-4BB8-96AB-BC1D4A3A844A\"></a></span> Using Python Dictionaries as Return Values\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E6FE61D0-9B31-4A47-8412-81E48FC35166\"></a></span>The Python native dictionary type does not conform to any of the possible data types\n\
               that Softimage allows as return values from custom commands. As a workaround, you\n\
               can use an ActiveX scripting dictionary as demonstrated in the following code snippet\n\
               from a self-installing custom command: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#---------\n\
def testdictionary_Execute(  ):\n\
	<em class=\"strong\">import win32com.client\n\
	oDict = win32com.client.Dispatch( \"Scripting.Dictionary\" )</em>\n\
\n\
	oDict[ \'key1\' ] = 123\n\
	oDict[ \'key2\' ] = 45\n\
	oDict[ \'key3\' ] = 6789\n\
	\n\
	return oDict\n\
#---------\n\
</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS689E515AD51B8144BB6F07EF59FC15AE-000D\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C0333E41-2E54-4323-AAD5-E8BE9C0C6A70\"></a></span> Using Custom Python Classes as Return Values\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E191BD8F-AB2D-4749-8B40-7DEA73BF2117\"></a></span>A Python custom command can return a Python object whose functions and attributes\n\
               are available as methods and properties to VBScript and JScript. Follow these steps:\n\
               \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-66888A8D-EDDC-4F04-96B7-1EBBD9F6EB46\"></a></span> <span class=\"anchor_wrapper\"><a name=\"OL_ACC4306E2D5645ACAD25C5F1B1B6A056\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li>Set the following attributes of the Python class to define which methods and attributes\n\
                     are exposed. <span class=\"anchor_wrapper\"><a name=\"UL_6D4CAE3B5C0B44B9A47B208E02F45E99\"></a></span><ul>\n\
                        <li>_public_methods_ – List of public functions </li>\n\
                        <li>_public_attrs_ – List of public attributes (both read-only and read-write) </li>\n\
                        <li>_readonly_attrs_ – List of read-only attributes </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li>Wrap the instance of the class being returned using the <span class=\"code\" translate=\"no\">win32com.server.util.wrap( )</span> function. \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9846D687-E453-4992-887F-CC689C9EDB81\"></a></span>The custom command creates the object and returns it. \n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9EB53272-AC55-4659-BAD7-2E85B4D06052\"></a></span>The following self-installing plug-in returns a Python object that is usable from\n\
               VBScript and JScript. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> # This class will be exported to VBScript and JScript\n\
class TestPython:\n\
    # Declare list of exported functions\n\
    _public_methods_ = [\'GetAnswer\']\n\
    # Declare list of exported <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a>\n\
    _public_attrs_ = [\'exclamation\', \'answer\']\n\
    # Declare list of exported read-only <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a>\n\
    _readonly_attrs_ = [\'answer\']\n\
\n\
    # Class init:\n\
    def __init__(self):\n\
    # Initialize exported <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a>\n\
	       self.exclamation = 1\n\
	       self.answer = 42\n\
		      # Perfectly valid to have other non exported <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a>\n\
    # Exported function\n\
    def GetAnswer(self, question):\n\
	       return \"The answer to \" + str(question) + \" is \" + str(self.answer) + \"!\"*self.exclamation\n\
	       # Perfectly valid to have other non exported functions\n\
		\n\
true = 1\n\
\n\
# Traditional Plugin installation\n\
def XSILoadPlugin( in_reg ):\n\
    in_reg.Author = \"Command Wizard User\"\n\
    in_reg.Name = \"TestPython Plug-in\"\n\
    in_reg.Major = 1\n\
    in_reg.Minor = 0\n\
    in_reg.RegisterCommand( \"TestPython\",\"TestPython\" )\n\
    return true\n\
\n\
def TestPython_Init( io_Context ):\n\
    oCmd = io_Context.Source\n\
    oCmd.ReturnValue = true\n\
    return true\n\
\n\
def TestPython_Execute(  ):\n\
    oClass = TestPython()\n\
    import win32com.server\n\
    # Class MUST be wrapped before being returned\n\
    return win32com.server.util.wrap(oClass)</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4262047-2B2C-46AA-BDE7-C3416F67E5DD\"></a></span>The following VBScript uses the Python object. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> a = TestPython()\n\
\'INFO : TestPython_Execute called\n\
LogMessage a.GetAnswer(\"life, the universe, everything\")\n\
\'INFO : The answer to life, the universe, everything is 42!\n\
a.exclamation = 10\n\
LogMessage a.GetAnswer(\"life, the universe, everything\")\n\
\'INFO : The answer to life, the universe, everything is 42!!!!!!!!!!</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-07185AD0-978D-49E8-8E75-F440B99573DD\"></a></span>You can choose whether to create a new object each time (as shown in the example),\n\
               or to share a single instance of the object. The single instance of the object is\n\
               stored as a global variable in the plug-in and all scripts can share the data. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC6A67FA-6675-444E-AAA5-C73283A846F5\"></a></span>For more information, see these Python sources: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"UL_132249373C6140CA915951F118DD5738\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-ADE4181E-37FD-427B-B649-5F2A046EBA1F\"></a></span><a href=\"http://docs.activestate.com/activepython/2.5/full_toc.html\" target=\"_blank\">http://docs.activestate.com/activepython/2.5/full_toc.html</a> – Contains information about COM-wrapping custom Python classes and how to expose\n\
                     its methods and properties to COM using the policy attributes \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1DF8571-2E49-423E-9A6E-A1B01671BC62\"></a></span><a href=\"http://oreilly.com/catalog/pythonwin32/chapter/ch12.html\" target=\"_blank\">http://oreilly.com/catalog/pythonwin32/chapter/ch12.html</a> – This is a sample chapter (Implementing COM Objects in Python) from <em class=\"mild\">Python Programming on Win32</em> that also explains working with COM. However, you can skip the CLSID/ProgID information\n\
                     because custom commands already return a fully created object. \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";