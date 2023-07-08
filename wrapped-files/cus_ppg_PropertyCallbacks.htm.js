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
      <meta name=\"topicid\" content=\"GUID-5E02679D-07C0-4AEC-BD11-A899CD74F7CE\" />\n\
      <meta name=\"indexterm\" content=\"dynamic changes: to custom properties: callback function names\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: naming conventions and prefixes\" />\n\
      <meta name=\"indexterm\" content=\"Define callback (custom properties)\" />\n\
      <meta name=\"indexterm\" content=\"DefineLayout callback (custom properties)\" />\n\
      <meta name=\"indexterm\" content=\"PPGEvent callback (custom properties)\" />\n\
      <meta name=\"indexterm\" content=\"OnInit callback (custom properties)\" />\n\
      <meta name=\"indexterm\" content=\"OnChanged callback (custom properties)\" />\n\
      <meta name=\"indexterm\" content=\"OnClicked callback (custom properties)\" />\n\
      <meta name=\"indexterm\" content=\"OnTab callback (custom properties)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<button-name&gt;, <tab-label&gt;,  <property_name&gt;, <parameter_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<button-name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<tab-label&gt;\" />\n\
      <meta name=\"keyword\" content=\" <property_name&gt;\" />\n\
      <meta name=\"keyword\" content=\"<parameter_name&gt;\" />\n\
      <title>Property Callbacks</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"GridData\", \"si_cpp/classXSI_1_1GridData.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5E02679D-07C0-4AEC-BD11-A899CD74F7CE\"></a></span><div class=\"head\">\n\
            <h1>Property Callbacks</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0021\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2C44BAAB-BF77-43E4-B282-564F2EC35226\"></a></span> Naming Callback Functions\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C9119FE-7EA0-4E24-B29D-F84A8F3191A3\"></a></span>Self-installed callbacks (callbacks for <em class=\"mild\">plug-in based</em> properties) are named using the name of the property (for example, <span class=\"code\" translate=\"no\">MyProperty_<a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a></span> or <span class=\"code\" translate=\"no\">MyProperty_MyButton_<a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a></span>, where <span class=\"code\" translate=\"no\">MyProperty</span> is the name used in the call to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">PluginRegistrar.RegisterProperty</a> or PluginRegistrar::RegisterProperty). \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F689E33-C2B8-480B-9CF8-3138DC4EE679\"></a></span>On-the-fly properties (<em class=\"mild\">runtime-based</em> properties), on the other hand, do not use the property name in the callback name,\n\
                  so for example the <a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> callback would be named simply <span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> </span>, and the <a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a> callback for a button would be named <span class=\"code\" translate=\"no\">MyButton_<a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a></span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-724CCB3E-A9AB-4D67-A41B-87B826DC5AC9\"></a></span>For both plug-in based and runtime properties, you might want to use a prefix, which\n\
                  is a namespace that helps differentiate between multiple event handlers in a single\n\
                  file. In this case, you can specify a prefix by setting the <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siUILogicPrefix</a> layout attribute. The specified prefix will then be expected on all handlers in the\n\
                  <a href=\"#!/url=./si_om/PPGLayout.Logic.html\">PPGLayout.Logic</a> or PPGLayout::GetLogic. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F1690438-4A9A-4F1D-B493-421DBC46500B\"></a></span>For example, if the prefix is <span class=\"code\" translate=\"no\">MyPlugin</span>_, then Softimage expects a handler named <span class=\"code\" translate=\"no\">MyPlugin_<a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a></span> rather than <span class=\"code\" translate=\"no\">MyProperty_<a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a></span> or just plain <span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> </span>. Similarly, the <span class=\"code\" translate=\"no\">MyPlugin_<a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a></span> handler will be expected rather than <span class=\"code\" translate=\"no\">MyProperty_<a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a></span> or <span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a> </span> only. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-BD1C018D-4E63-4922-BD6E-5E1FCA0FC41F\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B676CA06-43E2-4758-A72F-4D1D49788149\"></a></span>For a discussion about the differences between SPDL-based, runtime, and plug-in properties\n\
                        with respect to prefixes and naming conventions for their event handlers, see <a href=\"#!/url=./files/cus_self_Prefixes.htm\">Using Prefixes with Custom Properties</a>. This section also includes examples of how to specify logic prefixes for <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm#WSEFBD9C1CA813C8499600F28142419F26-0015\">runtime-based properties</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm#WSEFBD9C1CA813C8499600F28142419F26-0016\">plug-in (self-installing) properties</a></span>. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0022\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-34DA7DB4-2927-43A2-B492-A7300AAEE521\"></a></span> Define\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-621BCE33-2ADB-4055-924F-8E2972796330\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback is where you add parameters to the custom property. The Define callback\n\
                  gets a <a href=\"#!/url=./si_om/Context.html\">Context</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object as input, from which you can get the <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html\">CustomProperty</a> object. The <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html\">CustomProperty</a> object provides methods for adding parameters: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_8B501FFBA7674E5AA26B27548FF80184\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C0E140A-7B1F-484E-A1A4-57ED3FF463C3\"></a></span><a href=\"#!/url=./si_om/CustomProperty.AddParameter3.html\">CustomProperty.AddParameter3</a> or CustomProperty::AddParameter, (and for the object model only, <a href=\"#!/url=./si_om/CustomProperty.AddParameter2.html\">AddParameter2</a> and <a href=\"#!/url=./si_om/CustomProperty.AddParameter3.html\">AddParameter3</a>) \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4190EB4B-8D7B-4BE6-9B6D-3EF49C0D8877\"></a></span><a href=\"#!/url=./si_om/CustomProperty.AddFCurveParameter.html\">CustomProperty.AddFCurveParameter</a> or CustomProperty::AddFCurveParameter \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3CA8FE46-63E8-4AF1-8633-A428CD50BCA7\"></a></span><a href=\"#!/url=./si_om/CustomProperty.AddGridParameter.html\">CustomProperty.AddGridParameter</a> or CustomProperty::AddGridParameter \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-922B4F06-C309-4126-86E6-E1C3EAE9CD92\"></a></span><a href=\"#!/url=./si_om/CustomProperty.AddProxyParameter.html\">CustomProperty.AddProxyParameter</a> or CustomProperty::AddProxyParameter \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C30886E9-43D2-4A8C-9FBF-FBB33361A0A1\"></a></span><a href=\"#!/url=./si_om/CustomProperty.AddParameterFromDef.html\">CustomProperty.AddParameterFromDef</a> or CustomProperty::AddParameterFromDef \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript code generated by the wizard\n\
function MyJsProperty_Define( ctxt )\n\
{\n\
	var oCustomProperty;\n\
	oCustomProperty = ctxt.Source;\n\
	oCustomProperty.AddParameter2(\"Param\",siInt4,0,0,100,0,100,0,siPersistable);\n\
\n\
	return true;\n\
}\n\
\n\
// C++ code generated by the wizard\n\
XSIPLUGINCALLBACK CStatus MyCppProperty_Define( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	CustomProperty oCustomProperty;\n\
	Parameter oParam;\n\
	oCustomProperty = ctxt.GetSource();\n\
\n\
	oCustomProperty.AddParameter(L\"Param\",CValue::siInt4,siPersistable,L\"\",L\"\",0l,0l,100l,0l,100l,oParam);\n\
	return CStatus::OK;\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0023\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-53E27AFE-F530-477A-8D09-A7BFC1D0FC6F\"></a></span> DefineLayout\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC9EE43C-C921-4971-BADD-9225941DC487\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback defines the layout of controls on the property page for a self-installing\n\
                  custom property. The DefineLayout callback gets a <a href=\"#!/url=./si_om/Context.html\">Context</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object as input, from which you can get the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object. The <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object provides methods for adding and grouping controls. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript code generated by the wizard\n\
function MyProperty_DefineLayout( ctxt )\n\
{\n\
	var oLayout,oItem;\n\
	oLayout = ctxt.Source;\n\
	oLayout.Clear();\n\
	oLayout.AddTab(\" Plug-in Info\");\n\
	oLayout.AddGroup(\" \");\n\
	oLayout.AddItem(\"Property_Name\", \"Property Name\");\n\
	oLayout.AddItem(\"Author\");\n\
	oLayout.AddItem(\"Script_Language\");\n\
	oLayout.AddItem(\"Add_to_Menu\");\n\
	oLayout.EndGroup();\n\
	oLayout.AddTab(\"Add Parameter\");\n\
	oLayout.AddItem(\"ParamType\");\n\
	return true;\n\
}\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0743F903-EC00-4D36-8F1F-FE0DF5CAF18A\"></a></span>Typically, the <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback is called once per Softimage session. However, in scripting you can force\n\
                  Softimage to call <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> again using the <a href=\"#!/url=./si_cmds/Refresh.html\">Refresh</a> command, the <a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> method, or the <a href=\"#!/url=./si_om/XSIUtils.Reload.html\">XSIUtils.Reload</a> method. You can also refresh a property page by right-clicking the header bar of\n\
                  a property page and choosing <span class=\"MenuCascade\" id=\"GUID-41E9758C-30DC-43EA-9F46-6E5E84988C30\">Refresh</span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-699230D3-2209-459F-88C4-43A846F97E78\"></a></span>You should always call <a href=\"#!/url=./si_om/PPGLayout.Clear.html\">PPGLayout.Clear</a> or PPGLayout::Clear before you define the layout. Otherwise, a new set of controls\n\
                  is appended to the existing layout each time <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> is called. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C32BABB7-E8B7-4EAA-BA02-94086E68D760\"></a></span> PPGEvent\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-31D4DB03-35E2-4B51-8104-B423EC409584\"></a></span>C++ and C# properties use <a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> to handle all the property page events. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-61371865-74AB-468A-A356-D178886F0FB1\"></a></span><a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> is fired when the property page is opened, when a parameter value is changed, or\n\
                  when a user clicks a button or tab. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5E20D782-B6B1-4B5D-9E13-39DEDBD9C316\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> callback takes the <a href=\"#!/url=./si_om/PPGEventContext.html\">PPGEventContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGEventContext.html\">PPGEventContext</a> object as input, which allows access to the event ID (event such as, property page\n\
                  loaded, parameter change, button click, or tab selection) and the effected control,\n\
                  if any. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0025\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9BD1FBC1-ECFC-4E8F-A436-4EC7DEA8834E\"></a></span> OnInit\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B9D6A17B-E6BB-42C0-B13F-26B6DB6E71AE\"></a></span>Scripted properties use <a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> to respond when the property page loads. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-79CDC6B0-5873-4434-B205-BA0AFA533E53\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a> callback can contain any code you want to run to initialize the property page before\n\
                  loading. For example, if the values of certain parameters determine which controls\n\
                  are included in the layout, you can define the layout in <a href=\"#!/url=./si_cmds/cb_Property_PPGEvent.html\">PPGEvent</a>, instead of in <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a>. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0026\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B4CCA5F5-9CCC-431C-A1DD-96E7B45C9B12\"></a></span> OnChanged\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-56ED13BD-BCF7-4DF3-B583-737AB2521A02\"></a></span>Scripted properties use <a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a> to handle changes to parameter values. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-50E00D01-71CE-4AD9-90CE-D3AF01BC1EF7\"></a></span>Each time the value of a parameter changes, the <a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a> event for that parameter is fired. You can trap those events and use them to perform\n\
                  a variety of tasks. For example, you might want to validate a new value. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-94BE9B63-6D1A-4F0B-BA3A-21B9C50F9694\"></a></span>You can implement the handler code inside a callback that uses the following convention:\n\
                  \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm\">&lt;prefix-name&gt;</a></span>_&lt;parameter-<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>&gt;_OnChanged() {\n\
	// Implement the handler here\n\
}\n\
</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-1DBF693B-C386-478E-ABE8-B8E5313C5FAB\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>By default, plug-in based custom properties use the name of the custom property as\n\
                     prefix, whereas runtime and SPDL-based custom properties do not use a prefix by default.\n\
                     For more information, see <a href=\"#!/url=./files/cus_self_Prefixes.htm\">Using Prefixes with Custom Properties</a>. \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0027\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FA0A7C08-71D1-494E-8C85-7E19E93739A5\"></a></span> OnClicked\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C0C4465-ADC3-4ADE-AB07-434C92530D6C\"></a></span>Scripted properties use <a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a> to handle button events. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7B87529-56BF-455E-A0A6-06FC4C165032\"></a></span>Each <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_CommandButton.htm\">Command Button</a></span> has its own <a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a> callback to associate the code to the button. Therefore, you need to write your handler\n\
                  inside a callback that uses the following convention: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm\">&lt;prefix-name&gt;</a></span>_&lt;button-<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>&gt;_OnClicked()\n\
{\n\
	// Implement the handler here\n\
}\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-43775DC0-1CE4-40DA-8215-7E7381C7FD8D\"></a></span>Here, <span class=\"keyword\">&lt;button-name&gt;</span> is the name specified in the call to <a href=\"#!/url=./si_om/PPGLayout.AddButton.html\">AddButton</a>, with any spaces removed. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-B6807C12-F08A-4149-94E1-7734437152AD\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB6A607A-9663-43B3-923D-8274E27F1D1F\"></a></span>By default, plug-in based custom properties use the name of the custom property as\n\
                        prefix, whereas runtime and SPDL-based custom properties do not use a prefix by default.\n\
                        For more information, see <a href=\"#!/url=./files/cus_self_Prefixes.htm\">Using Prefixes with Custom Properties</a>. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0028\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4C0E1CB6-C2F5-4578-8F7D-0CFF8F5195AD\"></a></span> OnTab\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E3BF0C7-BCD0-4891-81F2-426ED9DA1BA2\"></a></span>Scripted properties use <a href=\"#!/url=./si_cmds/cb_Property_OnTab.html\">OnTab</a> to handle tab events. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-62C11AC1-D399-44D5-9752-503BC726ACC6\"></a></span>The <a href=\"#!/url=./si_cmds/cb_Property_OnTab.html\">OnTab</a> callback is fired when the user clicks a tab. Write your handler inside a callback\n\
                  that uses the following convention: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_Prefixes.htm\">&lt;prefix-name&gt;</a></span>_&lt;tab-label&gt;_OnTab()\n\
{\n\
	// Implement the handler here\n\
}\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-482E26BF-3D24-4991-A2C9-D9B4CA0578BC\"></a></span>Here, <span class=\"keyword\">&lt;tab-label&gt;</span> is the label specified in the call to <a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">PPGLayout.AddTab</a> or PPGLayout::AddTab, with any spaces removed. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-3CF51341-59AD-4EAD-A82A-1143C7BA44ED\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1ED3D383-473A-47EB-B041-2BB959369B39\"></a></span>By default, plug-in based custom properties use the name of the custom property as\n\
                        prefix, whereas runtime and SPDL-based custom properties do not use a prefix by default.\n\
                        For more information, see <a href=\"#!/url=./files/cus_self_Prefixes.htm\">Using Prefixes with Custom Properties</a>. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_011FBBA7D46949A683B7A93C9E91D1F8\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5FBCA286-EC88-40A2-94CB-F49E95B4E86C\"></a></span>GridData Events\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-ECD5D6C9-FB4A-4A29-ADE1-CF876B5CD311\"></a></span>The following events are for the <span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_om/GridData.html\">GridData</a> </span> object. \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_2F7A5579573E42E0A13DBDEEBD98F7F8\"></a></span><ul>\n\
                  <li><span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_GridData_OnBeginValueChange.html\">OnBeginValueChange</a> </span> – Fired before applying modifications to a grid data parameter. Write your handler\n\
                     inside a callback that uses the following convention: \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function &lt;property_name&gt;_&lt;parameter_name&gt;_OnBeginValueChange()\n\
{ \n\
 // Implement the handler here\n\
}</pre></div> \n\
                  </li>\n\
                  <li><span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_GridData_OnEndValueChange.html\">OnEndValueChange</a> </span> – Fired after modifications have been applied to a grid data parameter. Write your\n\
                     handler inside a callback that uses the following convention: \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function &lt;property_name&gt;_&lt;parameter_name&gt;_OnEndValueChange()\n\
{ \n\
 // Implement the handler here \n\
}\n\
</pre></div> \n\
                  </li>\n\
                  <li><span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_GridData_OnBeginSelectionChange.html\">OnBeginSelectionChange</a> </span> – Fired before applying a selection change to a grid widget that is associated with\n\
                     a grid data parameter. Write your handler inside a callback that uses the following\n\
                     convention: \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function &lt;property_name&gt;_&lt;parameter_name&gt;_OnBeginSelectionChange()\n\
{\n\
 // Implement the handler here\n\
}\n\
</pre></div> \n\
                  </li>\n\
                  <li><span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_GridData_OnEndSelectionChange.html\">OnEndSelectionChange</a> </span> – Fired after a selection change is applied to a grid widget that is associated with\n\
                     a grid data parameter. Write your handler inside a callback that uses the following\n\
                     convention: \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function &lt;property_name&gt;_&lt;parameter_name&gt;_OnEndSelectionChange()\n\
{\n\
 // Implement the handler here\n\
}\n\
</pre></div> \n\
                  </li>\n\
                  <li><span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_GridData_OnButtonClicked.html\">OnButtonClicked</a> </span> – Fired when a button gets clicked in a grid widget associated with a grid data parameter.\n\
                     Write your handler inside a callback that uses the following convention: \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function &lt;property_name&gt;_&lt;parameter_name&gt;_OnButtonClicked()\n\
{\n\
 // Implement the handler here\n\
}\n\
</pre></div> \n\
                  </li>\n\
                  <li><span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_GridData_OnHeaderDoubleClick.html\">OnHeaderDoubleClick</a> </span> – Fired when a header gets double-clicked in a grid widget associated with a grid\n\
                     data parameter. Write your handler inside a callback that uses the following convention:\n\
                     \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function &lt;property_name&gt;_&lt;parameter_name&gt;_OnHeaderDoubleClick()\n\
{\n\
 // Implement the handler here\n\
}\n\
</pre></div> \n\
                  </li>\n\
                  <li><span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_GridData_OnContextMenuInit.html\">OnContextMenuInit</a> </span> – Fired when a mouse is right-clicked over a grid widget that is associated with\n\
                     a grid data parameter. The callback must return the contextual menu definition as\n\
                     String/Long pairs in a return value. Write your handler inside a callback that uses\n\
                     the following convention: \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function &lt;property_name&gt;_&lt;parameter_name&gt;_OnContextMenuInit()\n\
{\n\
 // Implement the handler here\n\
}\n\
</pre></div> \n\
                  </li>\n\
                  <li><span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/cb_GridData_OnContextMenuSelected.html\">OnContextMenuSelected</a> </span> – Fired when a contextual menu item is selected over a grid widget that is associated\n\
                     with a grid data parameter. Write your handler inside a callback that uses the following\n\
                     convention: \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function &lt;property_name&gt;_&lt;parameter_name&gt;_OnContextMenuSelected()\n\
{\n\
 // Implement the handler here\n\
}\n\
</pre></div> \n\
                  </li>\n\
               </ul> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-A121E567-9B79-401E-8911-CFDE08C81367\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BE9CFBD8-61D7-4308-8853-4CDA25E30B23\"></a></span>For all of these <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"GridData\" class=\"a_multireflink\">GridData</a></span> events: <span class=\"anchor_wrapper\"><a name=\"UL_50E7368B83724501B0FC9910175C1B9C\"></a></span><ul>\n\
                           <li><span class=\"keyword\"> &lt;property_name&gt;</span> is the name specified in the call to <span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">PluginRegistrar.RegisterProperty</a> </span>, with any spaces converted to underscores. \n\
                           </li>\n\
                           <li><span class=\"keyword\">&lt;parameter_name&gt;</span> is the name specified in the call to <span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_om/CustomProperty.AddGridParameter.html\">CustomProperty.AddGridParameter</a> </span>, with any spaces converted to underscores. \n\
                           </li>\n\
                        </ul> \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8E7DD4D-5047-4E2B-8012-4363C8D68AB6\"></a></span>See the <a href=\"#!/url=./examples/Addons/GridData/netview_GridData.htm\">GridData</a> example for more information. This example is located in the examples folder of the\n\
                  Softimage SDK installation directory. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";