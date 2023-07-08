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
      <meta name=\"topicid\" content=\"GUID-B627E803-7F77-4799-B1BF-AD35C5F2235A\" />\n\
      <meta name=\"indexterm\" content=\"batch scripting: setting the environment\" />\n\
      <meta name=\"indexterm\" content=\"environment: variables: setting for batch scripting\" />\n\
      <meta name=\"indexterm\" content=\"batch scripting: launching Softimage\" />\n\
      <meta name=\"indexterm\" content=\"launching Softimage: with a script\" />\n\
      <meta name=\"indexterm\" content=\"batch scripting: running simple scripts\" />\n\
      <meta name=\"indexterm\" content=\"batch scripting: specifying the scripting language\" />\n\
      <meta name=\"indexterm\" content=\"scripting languages: specifying for batch mode\" />\n\
      <meta name=\"indexterm\" content=\"batch scripting: specifying procedures\" />\n\
      <meta name=\"indexterm\" content=\"batch scripting: with Python\" />\n\
      <meta name=\"indexterm\" content=\"Python: using in batch mode\" />\n\
      <meta name=\"indexterm\" content=\"-args: batch scripting\" />\n\
      <meta name=\"indexterm\" content=\"batch scripting: using the -args switch\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Running Scripts in Batch Mode</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B627E803-7F77-4799-B1BF-AD35C5F2235A\"></a></span><div class=\"head\">\n\
            <h1>Running Scripts in Batch Mode</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B21E9DD-75E4-4EDE-B82C-267D3E14D287\"></a></span>To run a script in batch mode, you must set the environment and then start Autodesk\n\
               Softimage with the script. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS191BC79056CBCA40AB80E48DE1818851-0008\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-11077F5D-72BB-4FD3-A62D-3FAA1BDB7BF8\"></a></span> Setting the Environment\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8DDEC3F-8A10-4608-98FE-04C48F355579\"></a></span>Before running a script in batch mode, you should first set the environment properly:\n\
                  \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_8923A937697C4941B35566043AA8C433\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-86336111-4F85-41B2-85ED-F8257C8C2631\"></a></span>On Windows, open a command prompt. To do this, choose <span class=\"MenuCascade\" id=\"GUID-AD2C315D-5B39-428A-ABCB-868C01B13FCF\">Programs <img src=\"../images/ac.menuaro.gif\" /> Autodesk <img src=\"../images/ac.menuaro.gif\" /> Autodesk Softimage &lt;year&gt; <img src=\"../images/ac.menuaro.gif\" /> Softimage Command Prompt</span> from the Windows <span class=\"MenuCascade\" id=\"GUID-BE5368E5-A32A-4760-B5A8-D83297CCC555\">Start</span> menu. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-70435670-75CD-4EE7-95DE-08C16F0D467D\"></a></span>On Linux, open a shell and source the <span class=\"filePath\" translate=\"no\">.xsi_&lt;year&gt;</span> Softimage resource file. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS191BC79056CBCA40AB80E48DE1818851-0009\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9497C02A-48E1-491B-8790-7F00CFAFF28B\"></a></span> Launching Autodesk Softimage with a Script\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C944D7B-190B-47A8-88CC-B55C141589BF\"></a></span>To run the program and a script in batch mode, start Autodesk Softimage with the <em class=\"strong\">-script</em> switch, specifying your script file name. There are several ways to do this, depending\n\
                  on whether you need to specify the scripting language, specify the procedure to run,\n\
                  or supply values for arguments. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS191BC79056CBCA40AB80E48DE1818851-000A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C1B962ED-1C4C-47BF-9124-FE0559433ED1\"></a></span> To run simple scripts in batch mode\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0DADC1FB-7DBF-403B-BD08-ACD30C5302A7\"></a></span>To run a simple VBScript file named <em class=\"strong\">myscript.vbs</em>, use the following syntax at the command prompt: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
xsi -script myscript.vbs</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS191BC79056CBCA40AB80E48DE1818851-000B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C37B690F-2D4C-44D2-A6B0-5F4F0FE9355F\"></a></span> To specify the scripting language in batch mode\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-28E3F7DE-3808-40A3-8435-E4D57760EA3F\"></a></span>The scripting language is determined by the file name extension according to information\n\
                     in the registry: by default, this is <em class=\"strong\">.vbs</em> for VBScript, <em class=\"strong\">.js</em> for JScript, and <em class=\"strong\">.pys</em> for Python. If your script file uses a different extension, you can specify the language\n\
                     explicitly with the <em class=\"strong\">-lang</em> switch. For example, to run a script file named <em class=\"strong\">myscript.xxx</em>, use one of the commands below: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
xsi -script myscript.xxx -lang VBScript\n\
xsi -script myscript.xxx -lang JScript\n\
xsi -script myscript.xxx -lang Python\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS191BC79056CBCA40AB80E48DE1818851-000C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1B54B492-0D68-478C-A078-0BFDEF96B70D\"></a></span> To specify a procedure in batch mode\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-88569FFE-11E0-451D-B8FA-CEC134C4F090\"></a></span>By default, when you run a script in batch mode, only global code is executed. If\n\
                     your script contains procedures, you can use the <em class=\"strong\">-main</em> switch to specify which procedure to run. For example, to run a procedure named <em class=\"strong\">myproc</em> in a VBScript file named <em class=\"strong\">myscript.vbs</em>, use the following syntax: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
xsi -script myscript.vbs -main myproc</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-2117B598-5101-4EAF-938A-C4F25E6A8607\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFB77404-BE8C-446A-803D-201A26CE29F2\"></a></span>Even when a procedure is specified, global code may be executed before the procedure\n\
                           is called. This is a side effect of parsing the script with some scripting engines.\n\
                           To be certain that your script behaves predictably in all situations, do not mix global\n\
                           code and procedures. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-95795275-50AC-4E62-9756-989D03FCC12E\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA4598C9-83AB-474F-88AE-69308D1F6BD7\"></a></span>Softimage cannot directly call procedures in Python. However, procedures called from\n\
                           global code or other procedures work properly. You can use a small VBScript or JScript\n\
                           script to create a list of arguments and call a Python procedure. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS191BC79056CBCA40AB80E48DE1818851-000D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-29A0F21A-E9E0-4664-A3CB-B06D92FB8B44\"></a></span>To supply arguments in batch mode\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B4F2629B-1F5B-4692-B34E-515D876A84F0\"></a></span>If your procedure requires arguments, you can specify them after the <em class=\"strong\">-args</em> switch. For example, if the procedure <em class=\"strong\">myproc</em> in <em class=\"strong\">myscript.vbs</em> requires two arguments named <em class=\"strong\">myargname1</em> and <em class=\"strong\">myargname2</em>, you can run the procedure and set the argument values with the following syntax\n\
                     (it should all be on one line): \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
xsi -script myscript.vbs -main myproc \n\
-args -myargname1 <em class=\"mild\">myargvalue1</em> -myargname2 <em class=\"mild\">myargvalue2</em></pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-99F9180F-5612-4F4B-9F89-EDEE26077818\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-1BF071DE-B752-4CD7-A44E-E3B671D3C6AB\"></a></span>If you specify arguments with the <em class=\"strong\">-args</em> switch but do not specify a procedure with the <em class=\"strong\">-main</em> switch, then Softimage will look for a procedure called <em class=\"strong\">main</em> and run it. If there is no procedure called <em class=\"strong\">main</em>, global code is executed and the command line arguments are ignored. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";