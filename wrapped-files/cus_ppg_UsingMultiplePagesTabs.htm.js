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
      <meta name=\"topicid\" content=\"GUID-F59187EA-9479-4EA8-A641-01F3E50344F3\" />\n\
      <meta name=\"indexterm\" content=\"Tabs (multiple pages): creating: in a property page\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: multiple pages (tabs)\" />\n\
      <meta name=\"indexterm\" content=\"Multiple pages (Tabs): creating: in a property page\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using Multiple Pages (Tabs)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F59187EA-9479-4EA8-A641-01F3E50344F3\"></a></span><div class=\"head\">\n\
            <h1> Using Multiple Pages (Tabs)</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-AE78C1A5-9CA5-403E-8584-FF61DCB43560-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-3AE3701C-D157-4254-87D9-0C5AD7A6E424\"></a></span>You can build property pages with lots of controls and organize them on different\n\
               tabs. Tabs are inserted into the code with the <a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">PPGLayout.AddTab</a> or PPGLayout::AddTab call (like group and row controls) but no closing call is needed.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-B91DCA4F-A33F-441C-8404-FFB725023CE2\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE0B0953-335E-4D02-9FAD-A489518903DE\"></a></span>All controls from one <a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">PPGLayout.AddTab</a> or PPGLayout::AddTab call to the next <a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">PPGLayout.AddTab</a> or PPGLayout::AddTab call (or the end of the property page) will appear on a single\n\
                     tab.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-31AC6AE0-694D-4965-A71F-7BEA1E6A0129\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9488851B-D486-4FEB-9F27-42720E8089C9\"></a></span>It is important to remember that the first <a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">PPGLayout.AddTab</a> or PPGLayout::AddTab call needs to precede <em class=\"mild\">all</em> controls in the layout to avoid unpredictable results.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-26731DB3-1767-4FC5-ADA8-B8C90164DA74\"></a></span>The label that appears on each tab control is specified as the (mandatory) argument\n\
               of the <a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">PPGLayout.AddTab</a> or PPGLayout::AddTab method.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3272B99C-0180-4C92-8BF3-C52C7A83131B\"></a></span>Like group controls, tag controls can be enumerated by setting up a loop using the\n\
               <a href=\"#!/url=./si_om/PPGLayout.Count.html\">PPGLayout.Count</a> or PPGLayout::GetCount property and testing each <a href=\"#!/url=./si_om/PPGLayout.Item.html\">PPGLayout.Item</a> or PPGLayout::GetItem to see if it\'s a group (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0091\">Changing the Layout</a></span> for more information).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-41AA1FAB-91DF-4453-8CC7-E06EB65FD623\"></a></span>The <a href=\"#!/url=./si_om/PPGLayout.Item.html\">PPGLayout.Item</a> or PPGLayout::GetItem property takes either the index or the name of the item, so\n\
               you can test it using the <a href=\"#!/url=./si_om/PPGItem.Type.html\">PPGItem.Type</a> or PPGItem::GetType property as in the following example:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function FindFirstTab_OnClicked() {\n\
	// Loop forwards through the list of items to find the tab tag \n\
	// that starts the first tab \n\
	for (var i=0; i&lt;PPG.PPGLayout.Count; i++) {\n\
\n\
		// Test for \"Tab\" (<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> or <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> of either Tab tag)\n\
		if (PPG.PPGLayout.Item(i).Type == \"Tab\") {\n\
\n\
			// When we find it, print it out and quit\n\
			LogMessage( PPG.PPGLayout.Item(i).Name );\n\
			break;\n\
		}\n\
	}\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";