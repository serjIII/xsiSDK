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
      <meta name=\"topicid\" content=\"GUID-50D28A4C-D400-4F29-8ECC-7ABC5E333A06\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Setting Control Attributes</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"attributes\", \"si_cpp/group__RenderMapDefine.html#ga846eefb80d8eb3fd3e0fd17e1fee1e63\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-50D28A4C-D400-4F29-8ECC-7ABC5E333A06\"></a></span><div class=\"head\">\n\
            <h1>Setting Control Attributes</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC560E55-0FA0-4255-86A6-C2ED3B7AFF4F\"></a></span>Control attributes allow you to tweak the appearance of the control items on the property\n\
               page. From the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object you can get each <a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a> (via the <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem method when you are adding them to the layout or by using the\n\
               <a href=\"#!/url=./si_om/PPGLayout.Item.html\">PPGLayout.Item</a> or PPGLayout::GetItem property if you are modifying the layout via property page\n\
               events) and then use the GetAttribute and SetAttribute methods to set such physical\n\
               features as its width and height, whether or not there\'s a label, etc. These attributes\n\
               can also be used to specify control-specific features, such as the file filters to\n\
               use on a file widget (<a href=\"#!/url=./si_om/siPPGControlType.html\">siControlFilePath</a>) or basic aspects, such as which numeric widget to use (a thumbwheel, a slider, etc.)\n\
               for a numeric parameter (<a href=\"#!/url=./si_om/siPPGControlType.html\">siControlNumber</a>). For a detailed list, please see <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-007E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-03D1596B-4A2D-48E1-A7AA-D672D1646904\"></a></span>JScript Example: Changing PPGItem Attributes\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-414D87B1-E040-4B5F-83DE-9B314EF322F9\"></a></span>This example demonstrates how to change control attributes both while building the\n\
                  property page as well as how to change them dynamically (via property page logic).\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Set up the underlying parameters\n\
var oPSet = Application.ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"Demo\" );\n\
\n\
oPSet.AddParameter3( \"FileDemo\", siString );\n\
oPSet.AddParameter3( \"NumberDemo\", siDouble );\n\
oPSet.AddParameter3( \"Mute\", siBool );\n\
\n\
// Set up the PPGItems on the layout\n\
var oPPGLayout = oPSet.PPGLayout;\n\
var oParamStr = oPPGLayout.AddItem( \"FileDemo\", \"FileDemo\", siControlFilePath );\n\
var oParamDbl = oPPGLayout.AddItem( \"NumberDemo\", \"NumberDemo\", siControlNumber );\n\
var oParamBoo = oPPGLayout.AddItem( \"Mute\", \"Mute\", siControlBoolean );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-618E2E8C-C31F-4B7D-A0FA-D5207B3C6FB2\"></a></span>This is what the property page would look like at this point:\n\
               </p> <img src=\"../images/GUID-B21BABC0-C3C4-4830-AC85-8C0D0AE04A41-low.png\" /> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC1674A5-4A3B-4D5F-9F6C-9732532F770C\"></a></span>Notice how the slider is full length and the file filter offers only <em class=\"strong\">All Files (*.*)</em>. If you display a property set that has no layout defined, Softimage decides which\n\
                  controls to use and how to lay them out on the property page.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4CF455C-5151-4FF7-B53B-62469DCB3069\"></a></span>Now explicitly set up the controls using the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// For the file widget, <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the file filter to *.pic and *.bmp\n\
oParamStr.SetAttribute( siUIFileFilter, \"Softimage PIC files (*.pic)|*.pic|Bitmap files (*.bmp)|*.bmp|All Files (*.*)|*.*||\" );\n\
\n\
// For the number control, specify # of decimals and use treadmill widget\n\
oParamDbl.SetAttribute( siUIDecimals, 3 );\n\
oParamDbl.SetAttribute( siUITreadmill, true );\n\
\n\
// For the check box, decrease the width\n\
oParamBoo.SetAttribute( siUIWidthPercentage, \"50\" );\n\
// (equivalent to oParamBoo.WidthPercentage = 50;)</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A547B32E-3E83-477B-B30D-A320F491E979\"></a></span>Here is the result of the changes to the file filter, the number control and the check\n\
                  box:\n\
               </p> <img src=\"../images/GUID-82154851-D6D1-4BB6-8085-2D9CD6A0D249-low.png\" /> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3DEB1F2A-7E29-46A4-81C2-E8CEA27E3E26\"></a></span>Finally, add some logic which will change the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> attribute on the number control dynamically (via the <span class=\"code\" translate=\"no\">OnClicked</span> button event):\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Add a click event to the button which will demonstrate \n\
// how to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> these <a href=\"javascript:void(0)\" data=\"attributes\" class=\"a_multireflink\">attributes</a> via property page logic\n\
oPPGLayout.AddButton( \"ChangeLayoutDemo\", \"Change Layout\" );\n\
oPPGLayout.Language = \"JScript\";\n\
oPPGLayout.Logic = ChangeLayoutDemo_OnClicked.toString();\n\
\n\
\n\
// This function toggles between displaying the number slider and \n\
// check box on two lines vs. the same line\n\
function ChangeLayoutDemo_OnClicked()\n\
{\n\
	var oCtrl = PPG.PPGLayout.Item( \"NumberDemo\" );\n\
	if ( oCtrl.GetAttribute(siUIContinue) ) {\n\
		oCtrl.SetAttribute( siUIContinue, false );\n\
	} else {\n\
		oCtrl.SetAttribute( siUIContinue, true );\n\
	}\n\
	PPG.Refresh();\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-37932D13-5D30-4C98-BD23-665A7312665E\"></a></span>So clicking the <span class=\"MenuCascade\" id=\"GUID-8A681023-F8CC-430B-B2A8-327B3C91679B\">Change Layout</span> button will toggle between these two states:\n\
               </p> <img src=\"../images/GUID-59CF711E-0E0D-4B78-8866-F1D79FF57AEA-low.png\" /> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";