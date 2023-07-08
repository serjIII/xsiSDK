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
      <meta name=\"topicid\" content=\"GUID-6574D09D-5323-46D0-A713-5AF446853392\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Controlling the Frame Rate and Format</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6574D09D-5323-46D0-A713-5AF446853392\"></a></span><div class=\"head\">\n\
            <h1>Controlling the Frame Rate and Format</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E696C8D-D988-44F8-97A2-998431A5D090\"></a></span>The playback frame rate and format (The speed at which frames are displayed) are used\n\
               only for the playback interaction in Softimage. These playback options take the default\n\
               settings made in the Output Format property, but you can change them as required for\n\
               playback without affecting the default frame format and rate set for the scene.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B2F7C23D-EFDF-4D78-8F9F-CBB9181FE72A\"></a></span>There are four standard frame rate formats described by the numerical value contained\n\
               in the <span class=\"code\" translate=\"no\">Format</span> parameter. Specifying the custom frame rate format allows the user to define a non-standard\n\
               frame rate in the <span class=\"code\" translate=\"no\">Rate</span> parameter value:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-57FFFBAA-9B71-47DA-9EDB-4709AB586BB0\"></a></span><p class=\"table-heading\">Format parameter value</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9AE2847F-530B-41D8-8119-B4F4419D4065\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DC7DE1AD-1477-4433-91CE-EEE9CF78B08A\"></a></span><p class=\"table-heading\">Rate parameter value (frames per second)</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF15C607-BEA3-4E18-8D63-829894E55A4E\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">7</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0498F99D-83E7-4ACE-9CFC-59B28C843645\"></a></span><p class=\"table-body\">FILM format</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6B2A5B6B-BCD7-4FA5-865E-1163AD0D683C\"></a></span><p class=\"table-body\">24 fps</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DE960E46-74F4-4D6C-BE57-3A811E4CA88C\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">8</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AFDC2996-6D88-4322-9ECD-3F754558DFA6\"></a></span><p class=\"table-body\">PAL format</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CC9FB661-86EE-4DF8-B5CC-B95A904C92F2\"></a></span><p class=\"table-body\">25 fps</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-551C8166-4CA8-49DE-B752-9A995F35A7CE\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">10</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CB149D6C-8A32-4BCF-B6CF-61E3A9DAD461\"></a></span><p class=\"table-body\">NTSC format</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A4C4CDC5-D5CB-48F3-9F35-D9967443FFB3\"></a></span><p class=\"table-body\">29.97 fps</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E0B25476-D84C-426C-91C4-EC5B0870D791\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">11</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ABBD7BC3-C7D2-4FFE-AC45-44FF1D432B68\"></a></span><p class=\"table-body\">Custom format</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4500CDE6-E380-4626-9FFA-B429DA546996\"></a></span><p class=\"table-body\">frame rate defined by user</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9BAFC47D-9278-437D-BB7D-74C43074C849\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">19</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-41147F29-DCFB-4B94-9D1C-8321C6208D1C\"></a></span><p class=\"table-body\">HDTV format</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DF2D60F2-F586-4893-AE20-109B91FF46C0\"></a></span><p class=\"table-body\">30 fps</p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-3865E848-DE77-47C8-9966-DF7995453EFC\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-58528FE8-0805-4922-B7F4-4458C74F804D\"></a></span>The <span class=\"code\" translate=\"no\">Format</span> parameter values correspond to the <a href=\"#!/url=./si_om/siDefaultTimeFormat.html\">siDefaultTimeFormat</a> enum, but these are the values that are logged when using the <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> command.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE08A95B-808A-4698-9B3A-8618452018F5\"></a></span>These can be accessed directly via the <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> and <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> commands (as discussed in <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0066\">Accessing Parameter Values Directly</a></span>) or through the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a> object, as demonstrated in the examples below.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-007C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-41F2307D-55A1-446D-9F95-B5CE7C8A4636\"></a></span>JScript Example: Finding the Current Frame Rate\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript (command access)\n\
var format = GetValue( \"PlayControl.Format\" );		\n\
var results = \"Current frame: \";\n\
\n\
switch (format) {\n\
	case 10 : results += \" NTSC (29.97 fps)\"; break;\n\
	case 8 : results += \" PAL (25 fps)\"; break;\n\
	case 7 : results += \" FILM (24 fps)\"; break;\n\
	case 19 : results += \" HDTV (30 fps)\"; break;\n\
	case 11 : results += \" Custom (User ticks per second)\";\n\
	default : results = \"Unknown format!\";\n\
}\n\
Application.LogMessage( results );\n\
\n\
// Expected results:\n\
//INFO : Current frame:  FILM (24 fps)\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-007D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D3099B38-92D5-465C-B85C-03423B22D6E0\"></a></span>Python Example: Setting a Custom Frame Rate\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# Python (command access)\n\
app = Application\n\
app.SetValue( \"PlayControl.Format\", 11 # switch to custom format \n\
app.SetValue( \"PlayControl.Rate\", 10 )# <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> rate to 10 frames per second\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-007E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A8F9F47D-DA01-4176-815C-BB533548FF2E\"></a></span>C++ Example: Changing the Current Frame Rate\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Get the current project\n\
Application app;\n\
Project prj = app.GetActiveProject();\n\
\n\
// The PlayControl property <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> is stored with scene <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> under the project\n\
CRefArray proplist = prj.GetProperties();\n\
Property playctrl( proplist.GetItem(L\"Play Control\") );\n\
\n\
// Switch to PAL format (25 frames per second)\n\
playctrl.PutParameterValue( L\"Format\", 8.0 );\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";