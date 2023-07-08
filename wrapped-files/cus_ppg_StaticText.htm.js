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
      <meta name=\"topicid\" content=\"GUID-213E62A6-BE63-426A-9937-A723C012B327\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: Static Text\" />\n\
      <meta name=\"indexterm\" content=\"Static Text: creating: in a property page\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Static Text</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-213E62A6-BE63-426A-9937-A723C012B327\"></a></span><div class=\"head\">\n\
            <h1> Static Text</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-EDD3831D-9B52-4F1F-9B34-795F142EBF94-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-AA5E409A-4370-4E1D-8EAD-EC3589E8F606\"></a></span>Static text controls display text on property pages. Static text controls do not have\n\
               to be associated with a parameter, but if you want, you can display the value of a\n\
               <em class=\"strong\">String</em> parameter as static text.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3D4739D-5F6F-4762-AAE2-9154A6997FFB\"></a></span>To add static text to a property page, use <a href=\"#!/url=./si_om/PPGLayout.AddStaticText.html\">PPGLayout.AddStaticText</a> or PPGLayout::AddStaticText.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function EmbeddedSynoptic_DefineLayout( ctxt )\n\
{\n\
	var oLayout,oItem;\n\
	oLayout = ctxt.Source;\n\
	oLayout.Clear();\n\
\n\
	// UI text that explains how to use the synoptic view\n\
	oLayout.AddStaticText( \n\
			\"Click the sphere to translate the object by the specified increment.\\n\" + \n\
			\"Click the large cone to reset the translations.\"\n\
			0, // Use default width\n\
			0		// Use default height\n\
			);\n\
\n\
	return true;\n\
}\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-98D1D478-FFC5-4ECA-AADB-0C6D2A0C9358\"></a></span><a href=\"#!/url=./si_om/PPGLayout.AddStaticText.html\">PPGLayout.AddStaticText</a> or PPGLayout::AddStaticText is a shortcut for calling <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem with the <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlStatic</a> attribute:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Use the <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> \"Static\" to display static text on the ppg\n\
// The second parameter, which usually specifies the label, is the static text\n\
\n\
oLayout.AddItem( \"Static\", \"Static Text\", siControlStatic );\n\
oLayout.AddItem( \"Static\", \"More Static Text\", siControlStatic );\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-117C4EAB-AB7B-4964-9E3A-CB0B5E971F75\"></a></span>Static text does not word wrap when a user resized the property page, so you may want\n\
               to specify a width and height in the call to <a href=\"#!/url=./si_om/PPGLayout.AddStaticText.html\">PPGLayout.AddStaticText</a> or PPGLayout::AddStaticText.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FDF8A960-3966-454C-B73A-A4B5214C07BA\"></a></span>You access a static text control through the <a href=\"#!/url=./si_om/PPGLayout.Item.html\">PPGLayout.Item</a> or PPGLayout::GetItem property, which returns the <a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a> for the static text. To change the static text, set the <a href=\"#!/url=./si_om/PPGItem.Label.html\">PPGItem.Label</a> or PPGItem::GetLabel or PPGItem::PutLabel property:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function EmbeddedSynoptic_OnInit( )\n\
{\n\
	// The static text we want to display\n\
	// Use \"\\n\" to insert a line break\n\
	var sUIText =	\"Click a sphere to translate \" + \n\
					PPG.Inspected(0).Parent +\n\
				 	\" by the specified increment.\\n\" + \n\
				 	\"Click the large cone to reset the translations.\";\n\
\n\
	// Set the static text\n\
	// Static text controls are named \"Static\"\n\
	PPG.PPGLayout.Item(\"Static\").Label = sUIText;\n\
\n\
	// If you have more than one static text control,\n\
	// use the <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> number instead of the <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> \"Static\".\n\
	// The <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> numbers correspond to the order\n\
	// in which the controls were added to the layout.\n\
//	PPG.PPGLayout.Item(0).Label = sUIText;\n\
\n\
}\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8FB136D9-3FA0-4FDD-9F6B-F52BB357CA95\"></a></span>If you want to display the value of a <em class=\"strong\">String</em> parameter as static text, use <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem to add a static control for the parameter.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyProperty_Define( ctxt )\n\
\n\
{\n\
\n\
	var oCustomProperty;\n\
	oCustomProperty = ctxt.Source;\n\
	oCustomProperty.AddParameter2(\"Param1\",siString,\"This is a Text parameter\",null,null,null,null,0,siPersistable);\n\
	return true;\n\
}\n\
\n\
function MyProperty_DefineLayout( ctxt )\n\
{\n\
	var oLayout;\n\
	oLayout = ctxt.Source;\n\
	oLayout.Clear();\n\
	\n\
	// Add a static control for the string parameter Param1\n\
	// No label required: the control displays the parameter value\n\
	oLayout.AddItem( \"Param1\", \"\", siControlStatic );\n\
	\n\
	return true;\n\
}\n\
</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-79342F0D-63AD-4988-BEFE-676BD29F4963\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-23D1A8FA-5DC9-4512-8841-9126C7528164\"></a></span>You can break static text into several lines by using line-return characters (for\n\
                     example, \\n for most languages and vbCRLF in <span class=\"code\" translate=\"no\">VBScript</span>).\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-03AAF782-68FC-4CF0-8CC1-754BCE1D11DF\"></a></span>The following item attributes are available:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D3EB2FD8-C347-44FB-B81A-C8D54D73F52C\"></a></span><p class=\"table-heading\">Available on all Controls also as a property on the PPGItem object:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-07CFF27D-E105-403D-B533-F882C4133575\"></a></span><p class=\"table-heading\">Common to many Controls:</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2489E76E-80E6-4AC5-8BE2-5B556A3F1F2C\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-459274AB-46BD-4F79-AA1E-34A8B5607C5B\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A68EB510-FA7E-4AC6-97B7-645F22956E6E\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-12F07CBF-3C92-4D82-90DA-3D744A67A41B\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-AFBFA665-06CF-4A4E-8E0B-DE81B30C012F\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-95A37919-A16A-4591-A0DD-0D891252CD53\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD638881-6C02-4E7F-8CF0-4E359197EF0B\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoLabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-955675DA-C80C-407F-9A3C-06AF1AE40579\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIValueOnly</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B82DDB4-FABE-400A-A929-E0E0B24CCA51\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB09F9B8-67FF-4DAB-8BBF-171DFCD844C0\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICX</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A067BB3-AD2F-4D05-B9BA-9971B141B54B\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICY</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";