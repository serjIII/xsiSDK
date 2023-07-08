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
      <meta name=\"topicid\" content=\"GUID-F7491B87-0CD1-4EFB-9D6A-22D054920065\" />\n\
      <meta name=\"indexterm\" content=\"commands: calling from the C++ API\" />\n\
      <meta name=\"indexterm\" content=\"C++ API: calling commands from C++ plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"in_args: input argument arrays in the C++ API\" />\n\
      <meta name=\"indexterm\" content=\"input command arguments in the C++ API\" />\n\
      <meta name=\"indexterm\" content=\"command arguments: using in the C++ API\" />\n\
      <meta name=\"indexterm\" content=\"io_val: output argument arrays in the C++ API\" />\n\
      <meta name=\"indexterm\" content=\"output command arguments in the C++ API\" />\n\
      <meta name=\"indexterm\" content=\"enums: using with C++ API for calling commands\" />\n\
      <meta name=\"indexterm\" content=\"More About Specifying the Command\'s Arguments\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Calling Commands from C++</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F7491B87-0CD1-4EFB-9D6A-22D054920065\"></a></span><div class=\"head\">\n\
            <h1> Calling Commands from C++</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E097A1F1-4DCD-4CC7-8176-883E6B841F22\"></a></span>You can call Softimage native and custom commands from inside a C++ API project, using\n\
               the <a href=\"#!/url=./si_cpp/classXSI_1_1Application.html#ExecuteCommand\">Application::ExecuteCommand</a> function. The ExecuteCommand function takes three obligatory arguments:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2732FD40-80ED-4BB4-A5D1-9F830AF9579F\"></a></span> <em class=\"strong\">in_name</em>—an input <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html\">CString</a> value representing the name of the command (for example, <span class=\"code\" translate=\"no\">L\"Translate\"</span>)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-76EA6BE5-DE89-49EB-ACA6-D1714A80BF81\"></a></span> <em class=\"strong\">in_args</em>—an input <a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a> containing the list of arguments for that command (in the same order as they appear\n\
                     in the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>)\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B26632E2-E852-4EFA-A459-D20A52EA05A9\"></a></span> <em class=\"strong\">io_val</em>—an output <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> which will hold any return value from the command\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-9DED9BC1-7863-4ED2-8291-45F1C05FE7E6\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-9EF621CF-FB5F-4D91-9F25-250CD4DA861E\"></a></span>You must specify values or variables for all three arguments even if, for example,\n\
                           you do not need the return value or the command does not return one.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-001C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4D623082-D71F-4CFA-8E47-1B64010C8475\"></a></span> More About Command\'s Arguments\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-88993FE7-F206-4FA5-A874-E2458ACFBE45\"></a></span>Most of the time it is a relatively straightforward procedure to specify the command\'s\n\
                  arguments with the <em class=\"strong\">in_args</em> array. Here are a few tricks to remember:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAE63CF5-BC96-4346-9930-709526F8B306\"></a></span>Never use an <a href=\"#!/url=./si_cpp/classXSI_1_1ArgumentArray.html\">ArgumentArray</a>, as tempting or logical as it may seem. ArgumentArrays are only for creating or editing\n\
                        custom <a href=\"#!/url=./si_cpp/classXSI_1_1Command.html\">Command</a>s.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B62CA19C-F6CA-439A-B5D5-6E679B129927\"></a></span>You can use null or empty arguments in the array, to force the default value argument\n\
                        value, but you must respect the original order of the command\'s arguments. For example,\n\
                        here are three ways to use default values:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// NewScene command using an empty CValue to force the default\n\
CValue outArg;\n\
CValueArray inArgs; \n\
inArgs.Add( CValue() ); // ProjectPathName \n\
inArgs.Add( false );// Confirm \n\
app.ExecuteCommand( L\"NewScene\", inArgs, outArg );\n\
\n\
// SaveShapeKey command using undefined values to force the default\n\
CValueArray args3(9); CValue out3;\n\
args3[0] = target;\n\
args3[3] = CValue(1.0);\n\
app.ExecuteCommand( L\"SaveShapeKey\", args3, out3 );\n\
</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-BA73623A-6CB2-46B4-B21B-4446435C2742\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-414B5950-DAA4-45F1-89FC-5EC5FF0E81FC\"></a></span>Note that this array has size <span class=\"code\" translate=\"no\">9</span> but only the items at index0 and index<span class=\"code\" translate=\"no\">3</span> actually get a real value; the rest are left with empty CValues. This is the short\n\
                              version of explicitly initializing each null argument with CValue() as in the first\n\
                              snippet above.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// AddClip command adding only the first three arguments\n\
// NOTE: here \'root\' is a reference to the Scene_Root and \'src\' \n\
// is a reference to an ActionSource created previously\n\
CValueArray inArgs; CValue outArg;\n\
inArgs.Add( root.GetFullName() );\n\
inArgs.Add( src.GetFullName() );\n\
inArgs.Add( root.GetFullName() );\n\
app.ExecuteCommand( L\"AddClip\", inArgs, outArg );\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4297064F-8719-4344-805E-D44495797C17\"></a></span>If you need to specify an enum value as one of the arguments, you need to cast it\n\
                        first as a LONG and then as a <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a>. This is because you can\'t cast directly from an enum to a CValue so you first need\n\
                        to convert it to a LONG:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Using the Translate command with the C++ API. This is a good demonstration of both how to \n\
// use enums and how to force the default arguments (ie., using undefined argument values)\n\
CValue outArg;\n\
CValueArray inArgs(19); // initialize with the 19 arguments \n\
inArgs[0] = obj.GetFullName();\n\
inArgs[1] = CValue(0.0);\n\
inArgs[2] = CValue(-2.0);\n\
inArgs[3] = CValue(0.0);\n\
inArgs[4] = CValue((LONG)siAbsolute);// double cast for the enums\n\
inArgs[5] = CValue((LONG)siPivot);\n\
inArgs[6] = CValue((LONG)siObj);\n\
inArgs[7] = CValue((LONG)siY);\n\
inArgs[17] = CValue((LONG)siConstructionModePrimaryShape);\n\
app.ExecuteCommand( L\"Translate\", inArgs, outArg );// note the \'L\' indicating wide character \n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-73DFA254-CDAD-44B1-BC2A-20CDB9990581\"></a></span>If the command uses output arguments, you still need to access them through the <em class=\"strong\">io_val</em> output argument. Passing pointers as part of the input argument arrays does not work:\n\
                        the pointers are still unintialized after the command executes. For information on\n\
                        how to extract output arguments from the <em class=\"strong\">io_val</em>, see <span class=\"char_link\"><a href=\"#!/url=./files/cpp_understand_Cmds_DealingWithOutputArguments.htm\">Dealing with Output Arguments</a></span>.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cpp_understand_Cmds_AccessingReturnValues.htm\">Accessing Return Values</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cpp_understand_Cmds_DealingWithOutputArguments.htm\">Dealing with Output Arguments</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";