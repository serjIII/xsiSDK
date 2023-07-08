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
      <meta name=\"topicid\" content=\"GUID-880300CA-0D84-4197-96AD-093F9DD52333\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: dynamically changing\" />\n\
      <meta name=\"indexterm\" content=\"dynamic changes: to custom properties: changing parameter values\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: changing: parameter values (dynamically)\" />\n\
      <meta name=\"indexterm\" content=\"parameter values: dynamically changing\" />\n\
      <meta name=\"indexterm\" content=\"dynamic changes: to custom properties: changing the layout\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: defining the layout: dynamically\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: changing: the layout (dynamically)\" />\n\
      <meta name=\"indexterm\" content=\"Layout: dynamically changing in a property page\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: changing: underlying property set (dynamically)\" />\n\
      <meta name=\"indexterm\" content=\"dynamic changes: to custom properties: adding parameters\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: adding: parameters: dynamically\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Dynamically Changing Custom Properties</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-880300CA-0D84-4197-96AD-093F9DD52333\"></a></span><div class=\"head\">\n\
            <h1> Dynamically Changing Custom Properties</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-32316F5D-1337-4320-8146-42FB53FE475B\"></a></span>Using the PPG and <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> objects, you can dynamically change parameter values, add and remove parameters,\n\
               and modify the layout of controls on the property page. \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_416270FBE34A4F0AA22AE1599C65E5E0\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F045E5AE-4194-439B-B072-2F98E28712B0\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0090\">Changing Parameter Values</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8172D65-727F-4D21-A305-5EED22D276B2\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0091\">Changing the Layout</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CBFDAF38-DDF5-4C80-A055-A131EEED30AC\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0092\">Adding Parameters</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0090\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-7A08E253-B6AE-4BC6-8A12-E88F0AFB45AC\"></a></span> Changing Parameter Values\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CDD4D758-22A7-4185-9114-437FC45457DC\"></a></span>For any control with an underlying parameter, you can update the parameter value directly.\n\
                  Most of the time the new value appears immediately in the property page. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-FF06F07B-BD0A-4EAE-A065-C58112CEE119\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC0579E6-584C-4D34-9108-697FAF0FD51E\"></a></span>The exception to this would be the case where you had specified a standard numeric\n\
                        control with the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUISyncSlider</a> attribute set to false. In that case, you would have to refresh the layout in order\n\
                        to see the new values. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7EB7BBC-1A74-431B-9B2E-E083F5A02DC9\"></a></span>Parameters return either a data value or an object instance for the underlying parameter,\n\
                  depending on what that underlying parameter is. For example, <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> parameters return the instance of the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> while Boolean parameters return either true or false. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D26DB811-7083-4D6D-B0F4-6FBE5073D431\"></a></span>To retrieve a value from an underlying parameter, use the <a href=\"#!/url=./si_om/PPG.html\">PPG</a> object, which is a global variable in the context of a property page\'s Logic section.\n\
                  The PPG object allows you to access a parameter, which you can use in turn to get\n\
                  the value of the parameter. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E9FE480F-31A6-4A36-B31C-EA1BACD04E41\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3E80EC8-D953-4DF3-BB69-F504EE7B91BA\"></a></span>The long form of such a call would look like this: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
PPG.Inspected(0).Parameter( \"MyPC\" ).Value;</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FFF1E3E-8566-4E75-95F6-1037DFB88391\"></a></span>The shortcut would look like this: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
PPG.MyPC.Value;</pre></div> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-58C7F8D4-2BCC-4090-B054-7DB4A21A8B43\"></a></span>For example, say we created a string parameter called <span class=\"code\" translate=\"no\">DaisyChain</span> and we want to log the parameter value every time it is changed. Here are the highlights\n\
                  of the script: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Create the underlying parameters (eg., under the _Define callback)\n\
var oCusProp = in_Context.Source\n\
oCusProp.AddParameter3( \"DaisyChain\", siString, \"Wheelbarrow6\" );\n\
\n\
// &lt;snip&gt;\n\
\n\
// Create the property page layout (eg., under the _DefineLayout callback)\n\
var oPPGLayout = in_Context.Source\n\
oPPGLayout.AddItem( \"DaisyChain\" );\n\
\n\
// &lt;snip&gt;\n\
\n\
// Event handler must be attached to logic\n\
function DaisyChain_OnChanged() {\n\
	LogMessage( <em class=\"strong\">PPG.DaisyChain.Value</em> );\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0091\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-740217F0-661F-475B-B87A-A2940DB2FD00\"></a></span> Changing the Layout\n\
               </h2>     \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-52781AC5-4E80-449C-B498-00DFAAB8A242\"></a></span>Each control but the row control is accessible by name from <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> object and generally has some UI component, such as a label or a width. You can enumerate\n\
                  over all the controls in the layout or by accessing a control directly by name (using\n\
                  <a href=\"#!/url=./si_om/PPGLayout.Item.html\">PPGLayout.Item</a>). \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6B5E58E7-EF60-4C8C-AB2C-EFC71389684A\"></a></span>Having access to each control gives you access to their attributes, which is what\n\
                  gives you the control over their look and ... uh ... <em class=\"mild\">layout</em>. But the types of attributes are quite diverse. For example, some attributes control\n\
                  the height, width and general style of their controls, whereas others determine whether\n\
                  to interactively update Softimage or not. Some attributes specify the location of\n\
                  bitmaps to display on controls. For a complete listing of item attributes that you\n\
                  can use, see the beginning of the section on <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_SettingControlAttributes.htm\">Setting Control Attributes</a></span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-305CA326-3D88-496A-8601-78C2B2E3E5D9\"></a></span>To set an attribute on a control, use the <a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">PPGItem.SetAttribute</a> method. <a href=\"#!/url=./si_om/PPGItem.SetAttribute.html\">SetAttribute</a> takes two arguments: the name of the attribute to set and the value to use. How you\n\
                  get the <a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a> object depends on which stage of the developement process you are in: when you are\n\
                  defining the layout, you can get a pointer to the item as you create it; in Logic,\n\
                  you need to use the <a href=\"#!/url=./si_om/PPG.html\">PPG</a> (global) object to get the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> and from there you can get a <a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a> object. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-F6381A49-DF18-46A9-8979-48A739E9894D\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-515ED6C9-E144-4B50-8F75-424B34DFF8B5\"></a></span>If you change the layout through the Logic section of the property page, don\'t forget\n\
                        to update the onscreen layout using the <a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> method! \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-89ED2CEA-4C57-47F5-8B4B-39F6F94556C7\"></a></span>For example, say we want to create a bitmap control that could be interactively changed\n\
                  to another image when the user clicks a button. Here are the highlights of the script:\n\
                  \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Create the underlying parameters (eg., inside the Define callback)\n\
var oCusProp = in_Context.Source\n\
oCusProp.AddParameter3( \"CompanyLogo\", siString );\n\
\n\
// &lt;snip&gt;\n\
\n\
// Create the property page layout (eg., under the _DefineLayout callback)\n\
var oPPGLayout = in_Context.Source\n\
\n\
// Need to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> up the location of the bitmap image when layout is defined\n\
var oItem = oPPGLayout.AddItem( \"CompanyLogo\", \"\", siControlBitmap );\n\
<em class=\"strong\">oItem.SetAttribute( siUIFilePath, \"C:\\temp\\images\\pauper.bmp\" );\n\
oPPGLayout.AddButton( \"ChgImg\", \"Change Image\" );</em>\n\
\n\
// &lt;snip&gt;\n\
\n\
// Event handler must be attached to logic\n\
function ChgImg_OnClicked() \n\
{\n\
	// Get a pointer to the control as a PPGItem\n\
	<em class=\"strong\">var oCtrl = PPG.PPGLayout.Item( \"CompanyLogo\" );\n\
	if ( oCtrl.GetAttribute(siUIFilePath) == \"C:\\temp\\images\\pauper.bmp\" ) {</em>\n\
		oCtrl.SetAttribute( siUIFilePath, \"C:\\temp\\images\\prince.bmp\" );\n\
	} else {\n\
		oCtrl.SetAttribute( siUIFilePath, \"C:\\temp\\images\\pauper.bmp\" );\n\
	}\n\
\n\
	// Finish by refreshing the layout\n\
	PPG.Refresh();\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0092\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B97E37DD-74F1-4933-949B-4DB90C6B4F72\"></a></span> Adding Parameters\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F94ED6FC-4FEF-48D3-876B-4ECA07F492EA\"></a></span>You can also add, remove or redefine parameters on the custom property set while the\n\
                  property page is being inspected. The <a href=\"#!/url=./si_om/PPG.html\">PPG</a> object (which is always available inside the callbacks defined for the Logic section)\n\
                  gives you access to the underlying custom property through the <a href=\"#!/url=./si_om/PPG.Inspected.html\">PPG.Inspected</a> property which returns a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> object. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-105A750C-F363-4E34-896C-3C50BA8F3549\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFDDA51A-2175-4689-B26F-678E866EBF2E\"></a></span>If you remove a parameter that is associated to a layout control, the control simply\n\
                        does not appear when you refresh the layout. Likewise, if you add a new parameter\n\
                        and you want it to appear on the property page, you need to update the layout. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E800B45-1B45-4489-B63B-2ED370B42171\"></a></span>The <a href=\"#!/url=./si_om/PPG.html\">PPG</a> object gives you access to the associated layout through the <a href=\"#!/url=./si_om/PPG.PPGLayout.html\">PPG.PPGLayout</a> property which returns a <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> object. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3983478F-562F-4C37-AB40-342A4F8A22B9\"></a></span>For example, this is a sample of a self-installing plug-in which can add a string\n\
                  field on the fly (when the user clicks the <span class=\"MenuCascade\" id=\"GUID-E37FE185-D4E7-47EF-BB9B-07E383F80B9B\">AddField</span> button), complete with a logic (although admittedly weak functionality): \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyProperty_AddField_OnClicked() \n\
{\n\
	// Get the CustomProperty and PPGLayout objects\n\
	var oCusProp = PPG.Inspected(0);\n\
	var oLayout = PPG.PPGLayout;\n\
\n\
	// Add a new string parameter to the CustomProperty\n\
	sNewName = \"Item_\" + oLayout.Count.toString();\n\
	oCusProp.AddParameter3( sNewName, siString );\n\
\n\
	// Add a new string control to the PPGLayout with logic\n\
	oLayout.AddItem( sNewName );\n\
	oLayout.Logic = oLayout.Logic.toString()\n\
			+ \"function \" + sNewName + \"_OnChanged() {\\n\"\n\
			+ \"    Application.LogMessage( PPG.\" + sNewName + \".Value );\\n\"\n\
			+ \"}\";\n\
\n\
\n\
	// Redraw the page\n\
	PPG.Refresh();\n\
}</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";