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
      <meta name=\"topicid\" content=\"GUID-7AD2ADA7-DFC4-404E-A0E6-8CCB1AB49168\" />\n\
      <meta name=\"indexterm\" content=\"build errors: \'type\' does not contain a definition for \'identifier\'\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: \'type\' does not contain a definition for \'identifier\'\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: \'type\' does not contain a definition for \'identifier\'\" />\n\
      <meta name=\"indexterm\" content=\"\'type\' does not contain a definition for \'identifier\'\" />\n\
      <meta name=\"indexterm\" content=\"build errors: Name does not exist\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: Name does not exist\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Name does not exist\" />\n\
      <meta name=\"indexterm\" content=\"Name does not exist\" />\n\
      <meta name=\"indexterm\" content=\"CS0103 - Name does not exist\" />\n\
      <meta name=\"indexterm\" content=\"Name does not exist\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: CS0103 - Name does not exist\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: CS0103\" />\n\
      <meta name=\"indexterm\" content=\"build errors: No overload for method takes arguments\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: No overload for method takes arguments\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: No overload for method takes arguments\" />\n\
      <meta name=\"indexterm\" content=\"No overload for method takes arguments\" />\n\
      <meta name=\"indexterm\" content=\"CS1501 - No overload for method takes arguments\" />\n\
      <meta name=\"indexterm\" content=\"No overload for method takes arguments\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: CS1501 - No overload for method takes arguments\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: CS1501\" />\n\
      <meta name=\"indexterm\" content=\"build errors: Property is not supported\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: Property is not supported\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Property is not supported\" />\n\
      <meta name=\"indexterm\" content=\"Property is not supported\" />\n\
      <meta name=\"indexterm\" content=\"CS1545 - Property is not supported\" />\n\
      <meta name=\"indexterm\" content=\"Property is not supported\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: CS1545 - Property is not supported\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: CS1545\" />\n\
      <meta name=\"indexterm\" content=\"build errors: Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"CS0246 - Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: CS0246 - Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: CS0246\" />\n\
      <meta name=\"indexterm\" content=\"build errors: Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"compiler errors: Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: Type/namespace could not be found\" />\n\
      <meta name=\"indexterm\" content=\"Type/namespace does not exist\" />\n\
      <meta name=\"indexterm\" content=\"CS0234 - Type/namespace does not exist\" />\n\
      <meta name=\"indexterm\" content=\"Type/namespace does not exist\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: CS0234 - Type/namespace does not exist\" />\n\
      <meta name=\"indexterm\" content=\"error IDs: CS0234\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Common Build or Load Problems</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7AD2ADA7-DFC4-404E-A0E6-8CCB1AB49168\"></a></span><div class=\"head\">\n\
            <h1>Common Build or Load Problems</h1>\n\
         </div><span class=\"anchor_wrapper\"><a name=\"UL_C418840A9AEE4C7FAC0ECE0BC42CF422\"></a></span><ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-808CC6C4-9960-4509-91ED-78857B378AAD\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CommonBuildProblems.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-0018\">Class Does Not Contain (Member) Definition</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-559E30B9-34E1-42F6-BE48-0069BF01B413\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CommonBuildProblems.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-001A\">Name Does Not Exist</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-332EAE67-B191-4879-97DC-9DF4E9BC5FE1\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CommonBuildProblems.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-001C\">No Method Takes &lt;#&gt; Arguments</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-099C8663-0957-4537-9C1F-3E3B9A2BC3EA\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CommonBuildProblems.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-0017\">Property Is Not Supported</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D0E33281-47AC-4051-90D8-83C31AFAC92B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CommonBuildProblems.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-0020\">Type/Namespace Could Not Be Found or Does Not Exist</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-69161C58-92AF-446A-8B0C-545F7617CF94\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_PluginFailsToLoadFromNetworkShare.htm\">Plug-in Fails to Load from Network Share</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4F675B15-360A-4EFF-9E98-F5954979116D\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_XSIFailedToLoadDotNETPlugin.htm\">Softimage Failed to Load a .NET Plug-in</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-0018\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-455CE140-9CE8-4BD7-AA68-A1DAF89D4F2D\"></a></span>Class Does Not Contain (Member) Definition\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C9FF78DB-20E0-4159-9D07-E95FDEE063B3\"></a></span>If you are trying to use a property that requires special syntax (the get- or set-accessor),\n\
               the following error message appears: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> \n\
Compiler Error CS0117:\n\
\'<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\' does not contain a definition for \'identifier\'\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-0019\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-4052B62E-F7C8-45D6-B86B-31E9E9633879\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0038B89F-F69C-428D-9580-A161B77FA599\"></a></span>There are two situations when you need to use the get- or set-accessor syntax for\n\
                  properties: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_65782F918FCD4657AF6396D3AEF74BD6\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-22B02B7A-A15C-48C0-9189-570F9AAF2F5C\"></a></span>If the property uses different classes or data types for getting and setting (see\n\
                        <a href=\"#!/url=./files/csharp_understand_CallingObjectModelMembers.htm\">Implementation Differences for Properties</a>) \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8DD0194-5C65-4E97-A5F1-5BADED1B0DCF\"></a></span>If the property takes input arguments (see <a href=\"#!/url=./files/csharp_understand_CallingObjectModelMembers.htm\">Properties with Input Arguments</a>) \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-ABFC16FB-841E-4D84-9AE9-A694C594EB01\"></a></span>You can check the <em class=\"strong\">C# Syntax</em> section in the reference section which displays the correct syntax to use. In addition,\n\
                  you can use the ObjectBrowser or the auto-complete features in Visual Studio. \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-001A\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9F29A936-7A5E-4526-9250-63B85C42DCCB\"></a></span>Name Does Not Exist\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8CC1383-8136-4AEC-B2B3-4C632D0AA64B\"></a></span>If the enum or string constant is not prefixed with its module name, the following\n\
               error message appears: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> Compiler \n\
Error CS0103:\n\
The <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> \'identifier\' does not exist in the current context\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-001B\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-98149BE1-6BC0-43E1-A810-EA8E92B8DAFD\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3C4D37A8-4823-45C0-B7EF-734BC1B5A453\"></a></span>For enums, you must include the module name. For example: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
siMenuAnchorPoints.siMenuTbGetPrimitiveCurveID\n\
siToolbarControl.siTBCtrlBlankSeparator\n\
siImageBitDepth.siImageBitDepthFloat16\n\
siClassID.siGeometryID\n\
// ...\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D4D1217-82D4-4128-B673-52312475C9E1\"></a></span>For string constants, you must use <span class=\"code\" translate=\"no\">StringModule</span>. For example: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
StringModule.siBendOpType\n\
StringModule.siCurveFilter\n\
StringModule.siLocalType\n\
StringModule.siUIButtonDisable\n\
// ...\n\
</pre></div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-001C\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C094ED36-745A-46A8-843F-BE53A4713A61\"></a></span>No Method Takes &lt;#&gt; Arguments\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-593C38A2-02F5-4B4C-B947-EF3634685F15\"></a></span>If you omit an <em class=\"mild\">optional</em> argument when calling an object model method, the following error message appears:\n\
               \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> Compiler \n\
Error CS1501\n\
No overload for method \'method\' takes \'number\' arguments\n\
</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-001D\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-911D88B5-5C2A-4E56-B86A-C2E5BCFEE753\"></a></span>Solution\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F72EE32-63C9-4A9D-BBCD-E005BB16A027\"></a></span>Check the number of arguments the method takes and verify whether you are missing\n\
               any arguments. \n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-43DB2D01-23DE-4DA6-9987-D40146343EFA\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> You must pass all arguments explicitly, regardless of whether they are optional for\n\
                  scripting or not. \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-001E\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9E1C3B4D-64FD-447F-9A41-1F4F7B5EC352\"></a></span>Property Is Not Supported\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7AEAEE6A-9308-477D-9A08-E3FE4B6E556D\"></a></span>If you use a property which requires different data types or classes for getting and\n\
               setting (such as <a href=\"#!/url=./si_om/Preferences.Categories.html\">Preferences.Categories</a> or the deprecated <span class=\"code\" translate=\"no\">XSIApplication.ActiveProject</span>), the following error message appears: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> Compiler \n\
Error CS1545:\n\
Property, indexer, or event \'property\' is not supported by the language; try directly calling accessor methods \'<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> accessor\' or \'get accessor\'\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-001F\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F29A7678-AA75-4FC7-9108-88157D09CFA2\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4D77FB38-BFAE-44A5-B380-C250D1A8C435\"></a></span>In some cases, an alternative method or property exists that resolves the problem.\n\
                  For example, <a href=\"#!/url=./si_om/XSIApplication.ActiveProject2.html\">XSIApplication.ActiveProject2</a> is an alternative property which returns and sets a <a href=\"#!/url=./si_om/Property.html\">Property</a> object. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1522C097-7ADB-4182-A3A7-1F0321D2B4D1\"></a></span>When there are no alternative methods or properties, you can use the accessor method\n\
                  associated with the property. The accessor method can be called by prefixing <span class=\"code\" translate=\"no\">get_</span> and <span class=\"code\" translate=\"no\">set_</span> to the name of the property: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Raises compiler error CS1545:\n\
Preferences pref = xsi.Preferences;\n\
ProjectItemCollection proj_itms = pref.Categories; \n\
\n\
// Special syntax as a workaround\n\
ProjectItemCollection proj_itms = pref.<em class=\"strong\">get_</em>Categories;\n\
pref.<em class=\"strong\">set_</em>Categories( proj_itms );\n\
</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-C39E56AA-7A29-4887-836D-33154BD64E3C\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span>For more information, see <a href=\"#!/url=./files/csharp_understand_CallingObjectModelMembers.htm\">Implementation Differences for Properties</a>. \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-0020\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8A86AC73-7E8B-4640-A4BE-8428A1FA0AEF\"></a></span>Type/Namespace Could Not Be Found or Does Not Exist\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F46B1DE7-3ACE-4548-AB54-107CB6BE260B\"></a></span>If the Softimage Object Model assemblies are not properly installed or referenced\n\
               or you forgot to reference them with the <span class=\"code\" translate=\"no\">using</span> directive, the following error message appears: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> Compiler \n\
Error CS0246:\n\
The <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> or namespace <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> \'<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>/namespace\' could not be found (are you missing a using directive or an assembly reference?)\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A7ED425-2E56-4CAF-9362-E0CF404407D5\"></a></span> <em class=\"mild\">or</em> \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> Compiler \n\
Error CS0234:\n\
The <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> or namespace <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> \'<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\' does not exist in the namespace \'namespace\' (are you missing an assembly reference?)\n\
</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1D1057D35CC4FA4FBF44F4C18EA3351F-0021\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BB16BFF0-E210-4E51-B8B9-AD4A9A998F12\"></a></span>Solution\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C13D997-AA85-476D-BC08-6267EFF2F46D\"></a></span>Verify whether the following directives appear in your <span class=\"filePath\" translate=\"no\">.cs</span> source file (the plug-in wizards include them automatically): \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using XSIOM; // Softimage object model\n\
using XSIMath;\n\
using XSIUtil;\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D53CA25A-028F-4C16-9820-6079DA5D7863\"></a></span>If they do appear, most likely the assemblies are not either referenced or installed\n\
                  properly. Open the References folder in the Solution Explorer: \n\
               </p> <img src=\"../images/GUID-51518323-41DD-48C5-A5F8-8B3308CE02E4-low.png\" /> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6BC7E0C-D2D3-4328-8F9F-1FDC98BEE3BF\"></a></span>If the assembly you are trying to use is not in the list you can right-click to add\n\
                  a reference to the assembly. If the assembly is in the list, it might not be installed\n\
                  properly. To resolve this situation, you need to <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CompilingPlugins.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-000B\">find out whether it was properly installed</a></span> and if not, <span class=\"char_link\"><a href=\"#!/url=./files/csharp_setup_CompilingPlugins.htm#WS1D1057D35CC4FA4FBF44F4C18EA3351F-000C\">add it to the GAC</a></span>. \n\
               </p> \n\
            </div> \n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/csharp_setup_PluginFailsToLoadFromNetworkShare.htm\">Plug-in Fails to Load from Network Share </a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/csharp_setup_XSIFailedToLoadDotNETPlugin.htm\">Softimage Failed to Load a .NET Plug-in</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";