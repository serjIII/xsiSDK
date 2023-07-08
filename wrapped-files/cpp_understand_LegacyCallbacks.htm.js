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
      <meta name=\"topicid\" content=\"GUID-B8B84D0D-5E6F-4AAB-BBD7-B076B0D3199C\" />\n\
      <meta name=\"indexterm\" content=\"C++ Callbacks for CustomEvents\" />\n\
      <meta name=\"indexterm\" content=\"To export your event handler function (on Windows)\" />\n\
      <meta name=\"indexterm\" content=\"C++ Callbacks for CustomCommands\" />\n\
      <meta name=\"indexterm\" content=\"To export your command handler function (on Windows)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Legacy Plug-in Callbacks</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"XSI::CStatus\", \"si_cpp/classXSI_1_1CStatus.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CValueArray\", \"si_cpp/classXSI_1_1CValueArray.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CString\", \"si_cpp/classXSI_1_1CString.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CValue\", \"si_cpp/classXSI_1_1CValue.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B8B84D0D-5E6F-4AAB-BBD7-B076B0D3199C\"></a></span><div class=\"head\">\n\
            <h1>Legacy Plug-in Callbacks</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A489708E-36D5-4476-A36D-00E7173AD931\"></a></span>Legacy plug-ins expose certain functions so that Softimage can communicate with the\n\
               implementation library file. These <em class=\"mild\">callback</em> functions must have exactly the correct name and parameter signature in order to\n\
               function properly with Softimage. This section describes the specific signatures for\n\
               each supported legacy plug-in type (signatures for self-installing plug-ins are described\n\
               in <a href=\"#!/url=./si_cmds/callbacks.html\">Callbacks for Self-Installing Plug-ins</a>).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A93D1A8-47F1-43FF-8F24-CC50B18378FC\"></a></span>On Linux your functions are automatically exported from your .SO. On Windows you can\n\
               use the XSIPLUGINCALLBACK macro instead of explicitly exporting them in a DEF file.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6FD3284D-39D7-45E1-A40D-88EA6260CB35\"></a></span> Event Callbacks\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0025\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-A8A9A5EB-479F-413A-880B-12E8E8671159\"></a></span>To use the XSIOnEventCPP callback function to declare your event handler\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-816230B4-300A-401D-848E-15784F000E7A\"></a></span>You need to implement this routine in your DLL or SO file:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK <a href=\"javascript:void(0)\" data=\"XSI::CStatus\" class=\"a_multireflink\">XSI::CStatus</a> XSIOnEventCPP( long in_eventID,  <a href=\"javascript:void(0)\" data=\"XSI::CValueArray\" class=\"a_multireflink\">XSI::CValueArray</a>&amp; in_args);\n\
</pre></div> \n\
                  <div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col align=\"left\" />\n\
                           <col align=\"left\" />\n\
                        </colgroup>\n\
                        <tr class=\"ruledHeading\">\n\
                           <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9BB90304-3F08-4110-AB45-B975D3B232C2\"></a></span><p class=\"table-heading\">Parameter</p> \n\
                           </th>\n\
                           <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-35FCD539-98F8-4D46-A295-A71672E94D3F\"></a></span><p class=\"table-heading\">Description</p> \n\
                           </th>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-553B2ACC-63F3-458A-9917-0700A5176CD2\"></a></span><p class=\"table-body\">in_eventID</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4D4B1C3-8668-4525-B719-663EAAA43450\"></a></span><p class=\"table-body\">Event ID to process</p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FD192B4C-EAA9-47D2-9A9D-8455441562F1\"></a></span><p class=\"table-body\">in_args</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7298B178-8AD8-41AC-90D4-E69817C8DC5C\"></a></span><p class=\"table-body\">Array of arguments for this specific event</p> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0026\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-24CF5AE3-9C20-4A83-8CC2-B737FBCD7C77\"></a></span> To export your event handler function (on Windows)\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3CA42EFD-A4D4-40AE-AB1A-1F42E8C477A6\"></a></span>To export a function from a DLL, add the <em class=\"strong\">XSIPLUGINCALLBACK</em> macro to the function definition. On Windows, this macro resolves to:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">extern \"C\" __declspec(dllexport)</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C1B32EE4-8428-4223-B4C6-135AD0DDE0DC\"></a></span>and on Linux to:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">extern \"C\"</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F829206A-6C68-4072-B18C-A5CD11B3AAA2\"></a></span> <em class=\"strong\">XSIPLUGINCALLBACK</em> is defined in sicppsdk.h.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0027\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-986FCB0C-EB76-4A91-9288-73A63A2F5EF5\"></a></span> Command Callbacks\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0028\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-A9C0C062-D81F-4076-9C8B-AF2F064F9345\"></a></span>To use the XSIOnCommandCPP callback function to declare your command handler\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE6B8C18-6E39-4361-8342-86B56C23BC4A\"></a></span>You need to implement this function in your DLL or SO file:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK <a href=\"javascript:void(0)\" data=\"XSI::CStatus\" class=\"a_multireflink\">XSI::CStatus</a> XSIOnCommandCPP( const <a href=\"javascript:void(0)\" data=\"XSI::CString\" class=\"a_multireflink\">XSI::CString</a>&amp; in_name,  <a href=\"javascript:void(0)\" data=\"XSI::CValueArray\" class=\"a_multireflink\">XSI::CValueArray</a>&amp; in_args, <a href=\"javascript:void(0)\" data=\"XSI::CValue\" class=\"a_multireflink\">XSI::CValue</a>&amp; out_value);\n\
</pre></div> \n\
                  <div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col align=\"left\" />\n\
                           <col align=\"left\" />\n\
                        </colgroup>\n\
                        <tr class=\"ruledHeading\">\n\
                           <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-961F2377-1D5A-4C1C-879D-8839C60341BD\"></a></span><p class=\"table-heading\">Parameter</p> \n\
                           </th>\n\
                           <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8CAC80D5-9ED4-4612-9243-52173DF2B787\"></a></span><p class=\"table-heading\">Description</p> \n\
                           </th>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-301EF0C6-18C0-4DA8-B4DA-FC7BF0334D74\"></a></span><p class=\"table-body\">in_name</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-24F52142-83A9-420B-BE92-1E729E8BD02A\"></a></span><p class=\"table-body\">Command name.</p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E11775A8-8528-4663-81A9-499597C5D19E\"></a></span><p class=\"table-body\">in_args</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-523A2B3D-6C47-45BB-BFCF-0FD22B35DDB3\"></a></span><p class=\"table-body\">Array of arguments for this specific command.</p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-483A90CC-94E3-4C45-951B-4594FBF3396B\"></a></span><p class=\"table-body\">out_value</p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-39A861EB-2712-4612-83F4-8A02C6EC66B5\"></a></span><p class=\"table-body\">Return value.</p> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-27C9023D-95EE-4C15-B8E4-555628671C2C\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-9443EF31-DE71-4241-A9F7-A3C6759836F3\"></a></span>Starting with Softimage, v4.0 custom commands can be fully implemented as self-installing\n\
                           plug-ins which is now the recommended approach (see <a href=\"#!/url=./files/cus_cmds.htm\">Custom Commands</a> for detailed instructions on implementing self-installing command plug-ins). However,\n\
                           this approach (often called a v1.0 plug-in type) is still fully supported.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0029\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E9635EDA-8A80-4AB1-AFCD-412438329A20\"></a></span> To export your command handler function (on Windows)\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-61ACA1F1-1D8C-4104-B3B0-DE08D6C457FD\"></a></span>To export a function from a DLL, add the <em class=\"strong\">XSIPLUGINCALLBACK</em> macro to the function definition. On Windows, this macro resolves to:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
extern \"C\" __declspec(dllexport)\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F9C63D2-F6B6-49A5-8054-22BFAD684427\"></a></span>and on Linux to:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
extern \"C\"\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0188E08D-158F-47DB-816E-45386F6630EB\"></a></span> <em class=\"strong\">XSIPLUGINCALLBACK</em> is defined in sicppsdk.h.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";