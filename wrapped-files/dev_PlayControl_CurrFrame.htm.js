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
      <meta name=\"topicid\" content=\"GUID-77B408F3-F18A-4C49-85AD-EF5AF86CD594\" />\n\
      <meta name=\"indexterm\" content=\"current frame: accessing\" />\n\
      <meta name=\"indexterm\" content=\"playback controls: current frame\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Getting and Changing the Current Frame</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-77B408F3-F18A-4C49-85AD-EF5AF86CD594\"></a></span><div class=\"head\">\n\
            <h1>Getting and Changing the Current Frame</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB200898-64A3-4C91-822B-7133A5F54D3F\"></a></span>The current frame value is contained in a parameter named <span class=\"code\" translate=\"no\">Current</span> and can be accessed directly, via the <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> and <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> commands (as discussed in <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0066\">Accessing Parameter Values Directly</a></span>) or through the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a> object, as demonstrated in the examples below.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-27964595-65DB-4CCD-AECC-04E7CE64EFB8\"></a></span>Parameters are available from the <a href=\"#!/url=./si_om/Property.html\">Property</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a> object (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_Accessing.htm\">Accessing the PlayControl Property Set</a></span> for details on how to get a pointer to the PlayControl property).\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-006F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-292E46F2-BCA4-405E-8BDA-3363528CC535\"></a></span>VBScript Example: Getting the Current Frame\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' VBScript (command access)\n\
dim curr_frame\n\
curr_frame = GetValue( \"PlayControl.Current\" )\' GetValue only returns <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> values for Parameters\n\
\n\
\' Go to frame 10, and then the last frame\n\
SetValue \"PlayControl.Current\", 10.0 \n\
SetValue \"PlayControl.Current\", GetValue( \"PlayControl.Out\" )\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0070\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4522790E-5136-4F01-BE41-7293D86DBC79\"></a></span>JScript Example: Getting the Current Frame\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript (object model access)\n\
var remote_control = ActiveProject.Properties( \"Play Control\" );\n\
var curr_frame = remote_control.Parameters( \"Current\" );// returns a pointer to the specified Parameter\n\
\n\
// Find out what the current frame is\n\
Application.LogMessage( \"Current frame: \" + curr_frame.Value );\n\
\n\
// Go to frame 10, and then the last frame\n\
curr_frame.Value = 10.0;\n\
curr_frame.Value = remote_control.Parameters( \"Out\" ).Value;\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";