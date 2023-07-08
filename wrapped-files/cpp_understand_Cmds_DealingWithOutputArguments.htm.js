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
      <meta name=\"topicid\" content=\"GUID-EBA07246-40E7-4118-AFB8-84E5D4633026\" />\n\
      <meta name=\"indexterm\" content=\"output parameters: accessing in the C++ API\" />\n\
      <meta name=\"indexterm\" content=\"parameters: returning output parameters: C++ API\" />\n\
      <meta name=\"indexterm\" content=\"returning output parameters (C++ API)\" />\n\
      <meta name=\"indexterm\" content=\"commands: returning output parameters (C++ API)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Dealing with Output Arguments</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EBA07246-40E7-4118-AFB8-84E5D4633026\"></a></span><div class=\"head\">\n\
            <h1>Dealing with Output Arguments</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-679830AD-71C8-4C2F-8F9D-6FFED468B9A6\"></a></span>Softimage uses <span class=\"char_link\"><a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a></span> in some of its scripting commands, such as <a href=\"#!/url=./si_cmds/AddProp.html\">AddProp</a>, <a href=\"#!/url=./si_cmds/GetFCurveInfo.html\">GetFCurveInfo</a>, and <a href=\"#!/url=./si_cmds/SICreateImageClip.html\">SICreateImageClip</a>. Although C++ supports output arguments, the updated value is contained inside the\n\
               <a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a> that got passed in, not inside any variable that might have been used to initialize\n\
               the value:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application app;\n\
\n\
// Trying to get output arguments via the variable\n\
Camera cam;\n\
Null camInt;\n\
\n\
CValue retVal;\n\
CValueArray inArgs(8);\n\
inArgs[0]	= L\"Telephoto\";\n\
inArgs[1]	= L\"MyCamera\";\n\
inArgs[4]	= cam;\n\
inArgs[5]	= camInt;\n\
app.ExecuteCommand( L\"SIGetPrimCamera\", inArgs, retVal );\n\
\n\
// Testing the \'output\' arguments to see if they\'re valid\n\
if ( cam.GetRef().IsValid() ) {\n\
	app.LogMessage( cam.GetName() + L\" is valid\" );\n\
} else {\n\
	app.LogMessage( L\"\'cam\' is not valid\" );\n\
}\n\
\n\
if ( camInt.GetRef().IsValid() ) {\n\
	app.LogMessage( camInt.GetName() + L\" is valid\" );\n\
} else {\n\
	app.LogMessage( L\"\'camInt\' is not valid\" );\n\
}\n\
\n\
/* The following is logged to history:\n\
\'INFO : \'cam\' is not valid\n\
\'INFO : \'camInt\' is not valid\n\
*/\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-708B81F9-E625-459B-9D26-59B9B1415F5B\"></a></span>To extract an output argument, you get it from the input argument array (<a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a>) and from there you can convert each member of the array from the <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> to its proper data type or class:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application app;\n\
\n\
CValue retVal;\n\
CValueArray inArgs(8);\n\
inArgs[0]	= L\"Telephoto\";\n\
inArgs[1]	= L\"MyCamera\";\n\
inArgs[4]	= CValue(); // newly created Camera and Interest are returned as output arguments\n\
inArgs[5]	= CValue();\n\
app.ExecuteCommand( L\"SIGetPrimCamera\", inArgs, retVal );\n\
\n\
// The camera is in inArgs[4] and its interest in inArgs[5]\n\
Camera cam( inArgs[4] );\n\
Null camInt( inArgs[5] );\n\
\n\
app.LogMessage( cam.GetName() + L\" is at position \" \n\
	+ CString(cam.GetParameterValue(L\"posx\")) + L\",\" \n\
	+ CString(cam.GetParameterValue(L\"posy\")) + L\",\" \n\
	+ CString(cam.GetParameterValue(L\"posz\")) \n\
);\n\
\n\
app.LogMessage( camInt.GetName() + L\" is at position \" \n\
	+ CString(camInt.GetParameterValue(L\"posx\")) + L\",\" \n\
	+ CString(camInt.GetParameterValue(L\"posy\")) + L\",\" \n\
	+ CString(camInt.GetParameterValue(L\"posz\")) \n\
);\n\
\n\
/* The following is logged to history:\n\
\'INFO : Number of output arguments in the returned array: 4\n\
\'INFO : MyCamera is at position 0,2,20\n\
\'INFO : CameraInterest is at position 0,0,0\n\
*/\n\
</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-7E3215FC-1CCA-404A-9254-49F7270A676F\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D92C602-D8AE-46ED-B20E-27B5ECBF8F30\"></a></span>An easy alternative to using the <a href=\"#!/url=./si_cpp/classXSI_1_1Application.html#ExecuteCommand\">Application::ExecuteCommand</a> function is to generate command stubs using <em class=\"strong\">the cmdstubs_generator.js</em> utility under the &lt;<span class=\"filePath\" translate=\"no\">factory location&gt;\\XSISDK\\utils\\cmdstubs</span> directory. See the help page in that same folder for more information.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";