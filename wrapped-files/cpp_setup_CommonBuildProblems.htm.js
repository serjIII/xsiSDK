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
      <meta name=\"topicid\" content=\"GUID-44AE114B-F015-44DD-BBA5-68CEE9F4B0AB\" />\n\
      <meta name=\"indexterm\" content=\"troubleshooting: C++ build problems\" />\n\
      <meta name=\"indexterm\" content=\"build errors: Cannot find include file\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: Cannot find include file\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Cannot find include file\" />\n\
      <meta name=\"indexterm\" content=\"Cannot find include file\" />\n\
      <meta name=\"indexterm\" content=\"C1083 - Cannot open include file\" />\n\
      <meta name=\"indexterm\" content=\"Cannot open include file\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: C1083 - Cannot open include file\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: C1083\" />\n\
      <meta name=\"indexterm\" content=\"build errors: Could not delete file\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: Could not delete file\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Could not delete file\" />\n\
      <meta name=\"indexterm\" content=\"PRJ0008 - Could not delete file\" />\n\
      <meta name=\"indexterm\" content=\"Could not delete file\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: PRJ0008 - Could not delete file\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: PRJ0008\" />\n\
      <meta name=\"indexterm\" content=\"build errors: Cannot open compiler intermediate file\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: Cannot open compiler intermediate file\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Cannot open compiler intermediate file\" />\n\
      <meta name=\"indexterm\" content=\"C1083 - Cannot open compiler intermediate file\" />\n\
      <meta name=\"indexterm\" content=\"Cannot open compiler intermediate file\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: C1083 - Cannot open compiler intermediate file\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: C1083\" />\n\
      <meta name=\"indexterm\" content=\"build errors: undefined type\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: undefined type\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: undefined type\" />\n\
      <meta name=\"indexterm\" content=\"C2027 - use of undefined type\" />\n\
      <meta name=\"indexterm\" content=\"use of undefined type\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: C2027 - use of undefined type\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: C2027\" />\n\
      <meta name=\"indexterm\" content=\"build errors: uses undefined class\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: uses undefined class\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: uses undefined class\" />\n\
      <meta name=\"indexterm\" content=\"C2079 - uses undefined class\" />\n\
      <meta name=\"indexterm\" content=\"uses undefined class\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: C2079 - uses undefined class\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: C2079\" />\n\
      <meta name=\"indexterm\" content=\"build errors: cannot convert parameter\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: cannot convert parameter\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: cannot convert parameter\" />\n\
      <meta name=\"indexterm\" content=\"build errors: Source or target has incomplete type\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: Source or target has incomplete type\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Source or target has incomplete type\" />\n\
      <meta name=\"indexterm\" content=\"C2664 - cannot convert parameter\" />\n\
      <meta name=\"indexterm\" content=\"cannot convert parameter\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: C2664 - cannot convert parameter\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: C2664\" />\n\
      <meta name=\"indexterm\" content=\"build errors: no operator found which takes a right-hand operand\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: no operator found which takes a right-hand operand\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: no operator found which takes a right-hand operand\" />\n\
      <meta name=\"indexterm\" content=\"build errors: no acceptable conversion\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: no acceptable conversion\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: no acceptable conversion\" />\n\
      <meta name=\"indexterm\" content=\"C2679 - no operator found which takes a right-hand operand\" />\n\
      <meta name=\"indexterm\" content=\"no operator found which takes a right-hand operand\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: C2679 - no operator found which takes a right-hand operand\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: C2679\" />\n\
      <meta name=\"indexterm\" content=\"build errors: cannot convert\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: cannot convert\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: cannot convert\" />\n\
      <meta name=\"indexterm\" content=\"build errors: no constructor could take the source type\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: no constructor could take the source type\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: no constructor could take the source type\" />\n\
      <meta name=\"indexterm\" content=\"build errors: constructor overload resolution was ambiguous\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: constructor overload resolution was ambiguous\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: constructor overload resolution was ambiguous\" />\n\
      <meta name=\"indexterm\" content=\"cannot convert\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: C2664 - cannot convert\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: C2664\" />\n\
      <meta name=\"indexterm\" content=\"build errors: unresolved external symbol\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: unresolved external symbol\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: unresolved external symbol\" />\n\
      <meta name=\"indexterm\" content=\"LNK2001 - unresolved external symbol\" />\n\
      <meta name=\"indexterm\" content=\"unresolved external symbol\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: LNK2001 - unresolved external symbol\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: LNK2001\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Common Build Problems</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"xsi_project.h\", \"si_cpp/xsi__project_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_ppglayout.h\", \"si_cpp/xsi__ppglayout_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_primitive.h\", \"si_cpp/xsi__primitive_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_model.h\", \"si_cpp/xsi__model_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CValue\", \"si_cpp/classXSI_1_1CValue.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"X3DObject\", \"si_cpp/classXSI_1_1X3DObject.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CRef\", \"si_cpp/classXSI_1_1CRef.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CBase\", \"si_cpp/classXSI_1_1CBase.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"xsi_application.h\", \"si_cpp/xsi__application_8h.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::PPGLayout\", \"si_cpp/classXSI_1_1PPGLayout.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CustomOperator::AddIOPort\", \"si_cpp/classXSI_1_1CustomOperator.html#a41ebbf23f96bb9900eb5fe7534afc664\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::Primitive\", \"si_cpp/classXSI_1_1Primitive.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CRef\", \"si_cpp/classXSI_1_1CRef.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::Model\", \"si_cpp/classXSI_1_1Model.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::X3DObject\", \"si_cpp/classXSI_1_1X3DObject.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CValue\", \"si_cpp/classXSI_1_1CValue.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CRefArray\", \"si_cpp/classXSI_1_1CRefArray.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-44AE114B-F015-44DD-BBA5-68CEE9F4B0AB\"></a></span><div class=\"head\">\n\
            <h1>Common Build Problems</h1>\n\
         </div><span class=\"anchor_wrapper\"><a name=\"UL_D162AD4D80A84AD8B0D00BE47D7DDC65\"></a></span><ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4F134075-AABF-4B40-8F77-A5AA3A951BB2\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CommonBuildProblems.htm#WS374443AF6891FC44B727423E4A1F220C-0019\">Cannot find include file</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C47B41D-5B79-499E-A73C-D8933A6C523F\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CommonBuildProblems.htm#WS374443AF6891FC44B727423E4A1F220C-001B\">Could not delete file</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-21EB9056-B5B1-4191-90F4-E329CD68435B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CommonBuildProblems.htm#WS374443AF6891FC44B727423E4A1F220C-001D\">Cannot open compiler intermediate file</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-45DF58D1-7A6F-4B0D-BB8B-576D08DD000B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CommonBuildProblems.htm#WS374443AF6891FC44B727423E4A1F220C-001F\">Undefined type</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-988E873B-CA5A-4A98-8258-E039C1241A6B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CommonBuildProblems.htm#WS374443AF6891FC44B727423E4A1F220C-0022\">Cannot convert</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-0019\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C0BE61B8-C060-48E4-B178-4BF4CDC412EA\"></a></span>Cannot find include file\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C66B054F-650E-405E-8702-72E8BA7C1DB6\"></a></span>If the <span class=\"code\" translate=\"no\">XSISDK_ROOT</span> environment variable is not set, the following error messages might appear: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">Cannot find include file: &lt;<a href=\"javascript:void(0)\" data=\"xsi_application.h\" class=\"a_multireflink\">xsi_application.h</a>&gt;\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E5D1F673-9336-4351-9B2F-69CA0C0E7C6C\"></a></span>or \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">c:\\users\\sblair\\My Workgroup\\Addons\\Test\\src\\TestCommand.cpp(7) : fatal error C1083: Cannot open include file: \'<a href=\"javascript:void(0)\" data=\"xsi_application.h\" class=\"a_multireflink\">xsi_application.h</a>\': No such file or directory\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-001A\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-5FEEDF7D-0157-4822-8FD9-EBE75840D1ED\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E619898-EDAD-475E-9D26-D7BDBA99B7C1\"></a></span>In Windows, start Visual Studio from a Softimage command prompt. In Linux, source\n\
                  the <span class=\"filePath\" translate=\"no\">.xsi_&lt;version&gt;</span> resource file before you run <span class=\"code\" translate=\"no\">gmake</span>. \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-001B\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D1ABA63F-FA7A-479D-90B2-6E76299FB17F\"></a></span>Could not delete file\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F309341F-99AB-4F1B-8892-2699D13CE6AA\"></a></span>If a plug-in is loaded in Softimage, the compiler cannot delete the existing dll,\n\
               and the following error appears when you try to rebuild the plug-in: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">MyCommand : error PRJ0008 : Could not delete file \'c:\\users\\sblair\\My Workgroup\\Application\\Plugins\\Debug\\MyCommand.dll\'.\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-001C\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F7E39F07-7436-4242-BBD3-FF884646DD59\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-47C36ADE-5B87-4C3D-AEF7-2F3FE0651F14\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_RebuildingPlugins.htm\">Unload</a></span> the plug-in before compiling. \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-001D\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6354B967-1A68-4CCD-A84E-88440D957BB0\"></a></span>Cannot open compiler intermediate file\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A0EE404-05AD-459C-BD8E-BA565B4140EC\"></a></span>The following error might appear after you start Visual C++ from a Softimage command\n\
               prompt, exit Softimage, and then try to rebuild the plug-in. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">c1xx : fatal error C1083: Cannot open compiler intermediate file: \'C:\\DOCUME~1\\tamu\\LOCALS~1\\Temp\\XSI_Temp_3092\\_CL_aaa02860ex\': No such file or directory\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8566607E-61B6-488F-8226-B5C586C780C4\"></a></span>The value of the <span class=\"code\" translate=\"no\">TMP</span> and <span class=\"code\" translate=\"no\">TEMP</span> environment variables change when you start Softimage. These changes are inherited\n\
               by Visual C++ when you start it from a Softimage command prompt that was opened from\n\
               the Plug-in Manager. If you exit Softimage, it removes the temporary folders, but\n\
               leaves the <span class=\"code\" translate=\"no\">TMP</span> and <span class=\"code\" translate=\"no\">TEMP</span> environment variables pointing to non-existent folders. \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-001E\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-98B14834-571D-4BD1-A699-3221672BAFF9\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-29314C7B-ACE1-489C-B300-BE9C1F808856\"></a></span>Exit and restart Visual C++, and then rebuild the plug-in. \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-001F\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A07B706A-E3C4-4B66-80D2-E5618107AAFF\"></a></span>Undefined type\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EFC1645E-9EB8-4606-9ECE-5B0FF15D8A71\"></a></span>To increase compiler speed the C++ API header files often use forward declaration.\n\
               This can cause the following errors if you do not include the header files for all\n\
               the objects you want to use. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DA0DB5C-9942-40B1-BCBD-122E11BB1553\"></a></span> <em class=\"strong\">Error sample #1</em> \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">error C2027: use of undefined <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'Project\'\n\
c:\\Program Files\\Autodesk\\Softimage &lt;<a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>&gt;\\XSISDK\\include\\<a href=\"javascript:void(0)\" data=\"xsi_application.h\" class=\"a_multireflink\">xsi_application.h</a>(30) :\n\
see declaration of \'Project\'\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA889416-436E-4450-A7C8-45F16AA8BA2F\"></a></span> <em class=\"strong\">Error sample #2</em> \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">error C2079: \'ppg\' uses undefined class \'<a href=\"javascript:void(0)\" data=\"XSI::PPGLayout\" class=\"a_multireflink\">XSI::PPGLayout</a>\'</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD95FE4E-56B3-4668-8540-82C2345FC2EB\"></a></span> <em class=\"strong\">Error sample #3</em> \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">error C2664: \'<a href=\"javascript:void(0)\" data=\"XSI::CustomOperator::AddIOPort\" class=\"a_multireflink\">XSI::CustomOperator::AddIOPort</a>\' : cannot convert parameter 1  \n\
from \'<a href=\"javascript:void(0)\" data=\"XSI::Primitive\" class=\"a_multireflink\">XSI::Primitive</a>\' to \'const <a href=\"javascript:void(0)\" data=\"XSI::CRef\" class=\"a_multireflink\">XSI::CRef</a> &amp;\'\n\
		Reason: cannot convert from \'<a href=\"javascript:void(0)\" data=\"XSI::Primitive\" class=\"a_multireflink\">XSI::Primitive</a>\' to \'const <a href=\"javascript:void(0)\" data=\"XSI::CRef\" class=\"a_multireflink\">XSI::CRef</a>\'\n\
		Source or target has incomplete <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-0020\"></a></span> <em class=\"strong\">Error sample #4</em> \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">error C2679: binary \'=\' : no operator found which takes a right-hand operand of <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'<a href=\"javascript:void(0)\" data=\"XSI::Model\" class=\"a_multireflink\">XSI::Model</a>\' \n\
(or there is no acceptable conversion)\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-0021\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E3A4C21D-83FD-41C8-B02F-030B43F70D8E\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-56F72A15-F23D-45F3-B078-F5252A312233\"></a></span>Make sure you have included all necessary header files. It is easy to know what each\n\
                  header file contains because of the naming convention of the header files. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-D7E320C4-809D-49AA-B007-D5E10AFCF493\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>You can create your own header file that includes many of the common Softimage header\n\
                     files. \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-68D0DFE8-8BB6-444D-93E3-3204F980E8DF\"></a></span>The following table shows how to resolve the sample errors: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_4F3C2460A8E142B782CC72B29DF78E99\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col width=\"50%\" align=\"left\" />\n\
                        <col width=\"50%\" align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2E039755-5018-4194-B771-829AA872AE09\"></a></span><p class=\"table-heading\">Error </p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FFECE8D5-66AF-469A-840D-3ECAA1761939\"></a></span><p class=\"table-heading\">Directive </p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-901AE831-2BED-4B2E-A0DA-69BD85E9826E\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CommonBuildProblems.htm#WS374443AF6891FC44B727423E4A1F220C-001F\">Error sample #1</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4BC95C24-E1FC-413C-8D81-68A39118C887\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">include &lt;<a href=\"javascript:void(0)\" data=\"xsi_project.h\" class=\"a_multireflink\">xsi_project.h</a>&gt;</span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C5771D86-4BAF-4DA2-929E-578A0E60EDE1\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CommonBuildProblems.htm#WS374443AF6891FC44B727423E4A1F220C-001F\">Error sample #2</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A119F4A0-F504-402D-8120-C53AB60DB227\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">include &lt;<a href=\"javascript:void(0)\" data=\"xsi_ppglayout.h\" class=\"a_multireflink\">xsi_ppglayout.h</a>&gt;</span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D890B8FA-AA10-4AFF-949D-E0E0316700A1\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CommonBuildProblems.htm#WS374443AF6891FC44B727423E4A1F220C-001F\">Error sample #3</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-079E08A1-91A5-402F-AAC1-88A0D6E5CF76\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">include &lt;<a href=\"javascript:void(0)\" data=\"xsi_primitive.h\" class=\"a_multireflink\">xsi_primitive.h</a>&gt;</span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A2374E6B-2F9F-436D-8EE9-90C48975B064\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_setup_CommonBuildProblems.htm#WS374443AF6891FC44B727423E4A1F220C-0020\">Error sample #4</a></span> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-418450D8-5930-4B9E-B326-3BB02D8D67AD\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">include &lt;<a href=\"javascript:void(0)\" data=\"xsi_model.h\" class=\"a_multireflink\">xsi_model.h</a>&gt;</span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-0022\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A07FF4AB-45B8-438E-A0F0-6772B555A522\"></a></span>Cannot convert\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3915BA46-31A9-437D-BC37-7F14BF7EDBCB\"></a></span><a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> is the generalized data type that can store many types of data, including Softimage\n\
               objects. The code that is ported from scripting or which is generated by the <em class=\"strong\">cmdstubs</em> utility often use <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span> to represent arguments. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7A26A701-C63C-4DFA-ADE7-6FAED08B16C6\"></a></span>For example: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
void DoSomething(const CValue &amp; in_XSIRef)\n\
{\n\
  //...\n\
}\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-779901CD-06F8-42B3-8E87-123FCB06FCE9\"></a></span>Now, if you want to pass a Softimage object to this function, for example an<span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"X3DObject\" class=\"a_multireflink\">X3DObject</a></span>: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
X3DObject someObj;\n\
\n\
// Won\'t compile: \n\
DoSomething(someObj);\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-43AA7089-0EF2-4A61-836E-1A73D6DE4306\"></a></span>Following compiler error appears: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">error C2664: \'DoSomething\' :\n\
cannot convert parameter 1 from \'<a href=\"javascript:void(0)\" data=\"XSI::X3DObject\" class=\"a_multireflink\">XSI::X3DObject</a>\' to \'const <a href=\"javascript:void(0)\" data=\"XSI::CValue\" class=\"a_multireflink\">XSI::CValue</a> &amp;\'Reason:\n\
No constructor could take the source <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>, or constructor overload resolution was ambiguous\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-0023\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-18A5975F-AF7B-471D-9139-11426A2711AC\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B04FB56A-690E-4C9A-93EC-42F840E2A94C\"></a></span>A <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span> takes a <a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> as its representation of a Softimage object. You can represent all Softimage objects\n\
                  as a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CRef\" class=\"a_multireflink\">CRef</a></span>, but they do not directly derive from <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CRef\" class=\"a_multireflink\">CRef</a></span> and are not true <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CRef\" class=\"a_multireflink\">CRef</a></span> objects. However, you can easily turn a Softimage object into a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CRef\" class=\"a_multireflink\">CRef</a></span> by using the cast operator or the <a href=\"#!/url=./si_cpp/classXSI_1_1CBase.html#GetRef\">CBase::GetRef()</a> function. Furthermore, you can turn a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CRef\" class=\"a_multireflink\">CRef</a></span> into a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span> using the constructor or assignment operator. Put these two operations together and\n\
                  you can build a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span> from an <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C56AA55-876E-42A7-89B8-1684489E7953\"></a></span>There are several ways to convert a Softimage object into a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span>, but you must provide some hint to the compiler about how to turn the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"X3DObject\" class=\"a_multireflink\">X3DObject</a></span> into a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CRef\" class=\"a_multireflink\">CRef</a></span>: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
DoSomething(CValue(someObj));\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-48F29839-3F7F-45C8-B009-998D0348E3DD\"></a></span>or \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
DoSomething(someObj.GetRef());\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-48A1406E-AF02-46B7-84BB-8CB4842A337D\"></a></span>or \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
DoSomething((CRef&amp;)someObj);\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED40297B-50F8-44A1-8251-D38BD7415648\"></a></span>You can also use temporary variables. This shows what functions and constructors really\n\
                  get called: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// This is just one of the several options\n\
 CRef&amp; ref = someObj.GetRef();\n\
 CValue val(ref);\n\
 DoSomething(val);</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-976DC6C3-2510-4ADF-8D4D-3D7D1D65A8E8\"></a></span>Alternatively, you can consider changing the function to be more specific about the\n\
                  type of object you expect (<span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span> is very vague): \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_291D65C1210048F1B85A823EB4B0E513\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C06CFF7-2DD4-41E3-809F-705CC99305D3\"></a></span>If the function only works for <span class=\"code\" translate=\"no\">X3DObjects</span> then that must be clear from the signature: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
void DoSomething(const X3DObject &amp; in_XSIRef)\n\
{\n\
	//...\n\
}</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-65C36842-4465-468B-B6E6-76B898343E0B\"></a></span>Or, if the function works with any Softimage object, you might can use <a href=\"#!/url=./si_cpp/classXSI_1_1CBase.html\">CBase</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">SIObject</a>: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
void DoSomething(const SIObject &amp; in_XSIRef)\n\
{\n\
	//...\n\
}\n\
</pre></div> \n\
                  </li>\n\
               </ul> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-CD286F15-A790-4F73-AC40-5D0DC0B1B504\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>The conversions between <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span>, <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CRef\" class=\"a_multireflink\">CRef</a></span>, <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CBase\" class=\"a_multireflink\">CBase</a></span> are very fast, and <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CRef\" class=\"a_multireflink\">CRef</a></span> and <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CBase\" class=\"a_multireflink\">CBase</a></span> are lightweight objects. There are no performance issues in normal circumstances,\n\
                     but within a tight loop or other performance critical bit of code, you can use explicit\n\
                     types instead of <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span>. \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-0024\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DDA873A0-4414-47E3-B186-98D787E675FD\"></a></span>Unresolved external symbol\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3368EAEE-74CB-4160-B7FC-D79317FDF0DF\"></a></span>Any linker error that refers to an unresolved symbol in the C++ API is probably caused\n\
               by not linking to <em class=\"strong\">sicppsdk.lib</em> (or an old version): \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
error LNK2001: unresolved external symbol \"__declspec(dllimport) public: \n\
	class <a href=\"javascript:void(0)\" data=\"XSI::CRefArray\" class=\"a_multireflink\">XSI::CRefArray</a> __thiscall XSI::Operator::GetInputPorts(void)const \" \n\
	(__imp_?GetInputPorts@Operator@XSI@@QBE?AVCRefArray@2@XZ)\n\
\n\
error LNK2001: unresolved external symbol \"__declspec(dllimport) public: \n\
	__thiscall XSI::MATH::CRotation::~CRotation(void)\" \n\
	(__imp_??1CRotation@MATH@XSI@@QAE@XZ)\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2CB9B31E-4C7A-4394-A87A-76A82B5306DF\"></a></span>Similarily, if there is an unresolved external symbol related to a missing constant\n\
               then it is probably caused by not linking to <em class=\"strong\">sicoresdk.lib</em> (or an old version): \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
error LNK2001: unresolved external symbol \"__declspec(dllimport) unsigned short const * const XSI::siControlCombo\" \n\
(__imp_?siControlCombo@XSI@@3PBGB)\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS374443AF6891FC44B727423E4A1F220C-0025\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-0658C1D7-0E9D-498A-9A4D-C8913D1BD8E2\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-637960C4-6A6B-4F8E-A9DF-892052E33C2B\"></a></span>Always link to <em class=\"strong\">sicoresdk.lib</em> and <em class=\"strong\">sicppsdk.lib</em> for any C++ API dll, and make sure the environment is properly set up to point to\n\
                  the correct installation of Softimage. \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";