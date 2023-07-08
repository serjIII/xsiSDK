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
      <meta name=\"topicid\" content=\"GUID-52CE2408-87ED-471A-8FEF-159ED098C3BA\" />\n\
      <meta name=\"indexterm\" content=\"ERROR:NameError: name XXX is not defined:enum\" />\n\
      <meta name=\"indexterm\" content=\"NameError:name XXX is not defined: enum\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>ERROR : &lt;enum_name&gt; is not defined</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-52CE2408-87ED-471A-8FEF-159ED098C3BA\"></a></span><div class=\"head\">\n\
            <h1>ERROR : &lt;enum_name&gt; is not defined</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> #ERROR : Traceback (most recent call last):\n\
#  File \"&lt;Script Block &gt;\", line 2, in ?\n\
#    rtn = app.ActiveSceneRoot.FindChildren(\"\",\"\",siMeshType)\n\
#NameError: <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> \'siMeshType\' is not defined\n\
# - [line 2]</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-001C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8C56A3D7-CCF2-47B1-8BC2-C24B9594979E\"></a></span>Possible Cause\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2CD3E88-ABEF-4F45-8B2C-A330DCE6C5C1\"></a></span>This is a message that typically appears when using Python because the constants (enums)\n\
                  are available only as an imported module.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-001D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0E4C3E05-869F-4561-B7E8-5FD2CA2A23A9\"></a></span>Suggested Solution\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B9D82FF2-9F08-41EF-AE94-46E434CC6978\"></a></span>You can import the constants module and then specify the name of the constant or enum\n\
                  as its member (see <a href=\"#!/url=./files/script_python_HowDoIGetPythontoRecognizeXSIConstantsEnums.htm\">How Do I Get Python to Recognize Softimage Constants (Enums)?</a>).\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";