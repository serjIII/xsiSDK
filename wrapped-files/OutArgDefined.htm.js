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
      <meta name=\"topicid\" content=\"GUID-7DADC477-397F-45DF-BBC6-01CD2D303274\" />\n\
      <meta name=\"indexterm\" content=\"returning: output arguments\" />\n\
      <meta name=\"indexterm\" content=\"output arguments\" />\n\
      <meta name=\"indexterm\" content=\"return values: output arguments various\" />\n\
      <meta name=\"indexterm\" content=\"arguments (in scripting): accessing with various scripting languages (VBScript, JScript, Python)\" />\n\
      <meta name=\"indexterm\" content=\"VBScript: accessing output arguments\" />\n\
      <meta name=\"indexterm\" content=\"Python: accessing output arguments\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is an Output Argument?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Clip\", \"si_cpp/classXSI_1_1Clip.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7DADC477-397F-45DF-BBC6-01CD2D303274\"></a></span><div class=\"head\">\n\
            <h1> What is an Output Argument?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-75BBAA20-E958-49B5-B86E-8C2CDB3934F9\"></a></span> <em class=\"mild\">Output Arguments</em> are used in certain scripting languages (such as VBScript) and compiled languages\n\
            (such as C++) as an alternative to <span class=\"char_link\"><a href=\"#!/url=./files/scripting_RtnValDefined.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0026\">returning values with the assignment operator</a></span>. One of the benefits of using output arguments is that functions that use them can\n\
            pass back more than one value at a time. However, not all languages support output\n\
            arguments (such as JScript) while others (such as Python) support output arguments\n\
            in only some situations with Softimage. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF5DC7C6-C661-435F-A76A-E735EC59BCFB\"></a></span>Softimage uses output arguments in some of its scripting commands (<a href=\"#!/url=./si_cmds/AddProp.html\">AddProp</a>, <a href=\"#!/url=./si_cmds/GetFCurveInfo.html\">GetFCurveInfo</a>, and <a href=\"#!/url=./si_cmds/SICreateImageClip.html\">SICreateImageClip</a>) and for some methods (<a href=\"#!/url=./si_om/NurbsSurface.EvaluateNormalizedPosition.html\">NurbsSurface.EvaluateNormalizedPosition</a>, <a href=\"#!/url=./si_om/SIMatrix4.Get.html\">SIMatrix4.Get</a>, and <a href=\"#!/url=./si_om/NurbsCurveList.Get.html\">NurbsCurveList.Get</a>). If you are using VBScript with these commands or methods, you can simply pass in\n\
            a variable name as a placeholder for each output argument and then use it in the rest\n\
            of your code: \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' This VBScript example illustrates how to use the AddProp\n\
\' command to add an annotation property to a null object.\n\
Set oNull = GetPrim(\"Null\")\n\
AddProp \"Annotation\", oNull, , \"MyAnnonation\", oRtn\n\
\n\
\' You can use an output argument in VBScript to avoid\n\
\' using the implicit return argument collection.\n\
SetValue oRtn &amp; \".text\", \"Hello World\"\n\
InspectObj oRtn</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-3AC2359F-74C6-4626-9FBB-B13FA004BAE3\"></a></span>However, for the other languages, it works a little differently. \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-0008\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F202136F-1E30-431E-94E6-D11991C83EB5\"></a></span>Commands with Output Arguments\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4F72E05-4E6B-404C-B78E-6B5E0B38C1DB\"></a></span>For an overview of how each language works in all scenarios, see <span class=\"char_link\"><a href=\"#!/url=./files/outarg_bylang.htm\">Output Argument Support by Language</a></span>. This section explains how each language works with commands that support output\n\
               arguments but don\'t return a value. \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-0009\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-97F4E324-8941-494B-99D5-131023E259AD\"></a></span>Scripting Languages\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CACDE745-D804-4D36-9795-6879AFFEF03E\"></a></span>Scripting commands return an <span class=\"char_link\"><a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a></span>, as long as there is no other return value specified. Use the argument name <span class=\"char_link\"><a href=\"#!/url=./files/OutArgDefined.htm#WS9C9BD4629A5724409D1790B9C5DB9AC3-0010\">exactly as it appears</a></span> (no spaces unless indicated and the exact same case) in the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a> for that command. For example, the <a href=\"#!/url=./si_cmds/SICreateImageClip.html\">SICreateImageClip</a> command uses two output arguments: <span class=\"code\" translate=\"no\">\"FileName\"</span> and <span class=\"code\" translate=\"no\">\"<a href=\"javascript:void(0)\" data=\"Clip\" class=\"a_multireflink\">Clip</a>\"</span>. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-6E2A3D0A-50C4-4A22-8A06-A14F613DF843\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-23FA3319-03AE-40E5-A641-943503A0EA50\"></a></span>You can also query Softimage for the name of the argument using the <a href=\"#!/url=./si_om/Command.html\">Command</a> and <a href=\"#!/url=./si_om/Argument.html\">Argument</a> objects. See the example on the <a href=\"#!/url=./si_om/ArgumentCollection.html\">ArgumentCollection</a> reference page. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-000A\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2915D299-030B-4127-A5A0-5B77F150ABEF\"></a></span>C# (.NET)\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-75FDA9E0-8276-4A99-BA36-09B1E727D8F7\"></a></span>You need to use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call commands from C#. The output arguments are packed into an Array which\n\
                  is returned from the <span class=\"code\" translate=\"no\">ExecuteCommand</span> method inside a generic C# Object. \n\
               </p> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-000B\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-56BFEDE5-5F42-44C7-941C-3324D60544A2\"></a></span>C++ API\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-445A407F-7159-4AE8-8560-2564F0283527\"></a></span>When you use the <a href=\"#!/url=./si_cpp/classXSI_1_1Application.html#ExecuteCommand\">Application::ExecuteCommand</a> function, you populate the input argument array with <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> objects. Once the command is executed, you can convert those objects to the appropriate\n\
                  class. Check the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a> to see the order and type of each argument. For more information, see Dealing with\n\
                  Output Arguments. \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-000C\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CE74BF74-17ED-42FC-9E46-BEFB16CB4FBF\"></a></span>Methods with Output Arguments\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2EFF7D8-0AEB-4DDF-AF6A-1357E6C74849\"></a></span>For an overview of how each language works in all scenarios, see <span class=\"char_link\"><a href=\"#!/url=./files/outarg_bylang.htm\">Output Argument Support by Language</a></span>. Here is how each language works with commands that support output arguments but\n\
               don\'t return a value: \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-000D\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-95F367D7-B114-4838-A542-444381EE52A4\"></a></span>Scripting Languages\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-88C5BB2B-EBD8-481A-8A8C-7C9E22EB51C9\"></a></span>All scripting languages except for Python treat methods that return output arguments\n\
                  the same way they treat <span class=\"char_link\"><a href=\"#!/url=./files/OutArgDefined.htm#WS9C9BD4629A5724409D1790B9C5DB9AC3-0008\">commands that return output arguments</a></span>. Python is unique in that it supports output arguments for methods, as long as you\n\
                  use the multiple-variable assignment syntax (see <a href=\"#!/url=./files/script_python_GettingOutputArgumentsfromMethods.htm\">Getting Output Arguments from Methods</a>). \n\
               </p> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-000E\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F3806FC3-EB32-486D-9760-D99CC9DC2354\"></a></span>C# (.NET)\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C741852A-69D3-412E-A401-53735A541E1D\"></a></span>Output arguments are supported for C# when using Softimage methods, but there are\n\
                  a couple of special restrictions. See <a href=\"#!/url=./files/csharp_understand_CallingObjectModelMembers.htm\">Calling Object Model Methods</a>. \n\
               </p> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-000F\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-225CDF0C-0093-4D79-9765-F3A3005089CF\"></a></span>C++ API\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C360835-67D1-458E-A745-870385B075C6\"></a></span>Output arguments are supported in the C++ API. \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-0010\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1D43C1EA-1D1C-4EFB-BA1D-D1020CA4D5CC\"></a></span>Identifying Output Arguments from the Reference\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3A50F7DB-243F-4404-8678-A96D84F1DA43\"></a></span>Softimage uses output arguments in some of its scripting commands (<a href=\"#!/url=./si_cmds/AddProp.html\">AddProp</a>, <a href=\"#!/url=./si_cmds/GetFCurveInfo.html\">GetFCurveInfo</a>, and <a href=\"#!/url=./si_cmds/SICreateImageClip.html\">SICreateImageClip</a>) and for some methods (<a href=\"#!/url=./si_om/NurbsSurface.EvaluateNormalizedPosition.html\">NurbsSurface.EvaluateNormalizedPosition</a>, <a href=\"#!/url=./si_om/SIMatrix4.Get.html\">SIMatrix4.Get</a>, and <a href=\"#!/url=./si_om/NurbsCurveList.Get.html\">NurbsCurveList.Get</a>). \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F859DE57-E077-41CE-9935-55553355ECB6\"></a></span>For example, the <a href=\"#!/url=./si_cmds/PickObject.html\">PickObject</a> command uses three output arguments, which are: <span class=\"code\" translate=\"no\">\"PickedElement\"</span>, <span class=\"code\" translate=\"no\">\"ButtonPressed\"</span>, and <span class=\"code\" translate=\"no\">\"ModifierPressed\"</span>. \n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-71FFA148-AA28-4E1F-8A2E-BB39ACE9B8D6\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1DA10EF5-3724-4765-966A-37FD2758D25D\"></a></span>To get the name of a specific output argument, check the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>. The names of each parameter are listed in the Parameters table under the <em class=\"strong\">Parameter</em> column. All output arguments are identified with <span class=\"code\" translate=\"no\">[out]</span> appearing after the name: \n\
                  </p> <img src=\"../images/GUID-C94D3FAB-34D3-4848-A95B-161467F12C3A-low.png\" /> \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";