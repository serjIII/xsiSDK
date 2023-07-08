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
      <meta name=\"topicid\" content=\"GUID-D5C37D6E-94E8-435A-9958-13D973DD0A07\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: Enum\" />\n\
      <meta name=\"indexterm\" content=\"Enum Controls: creating: in a property page\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Enum Controls</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D5C37D6E-94E8-435A-9958-13D973DD0A07\"></a></span><div class=\"head\">\n\
            <h1> Enum Controls</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3EA90EC7-7E9C-428B-9E06-A6FD16F850B6\"></a></span>There are five kinds of option/list groups available that are collectively referred\n\
               to as <em class=\"mild\">Enum Controls</em> and are can be added using the <a href=\"#!/url=./si_om/PPGLayout.AddEnumControl.html\">PPGLayout.AddEnumControl</a> or PPGLayout::AddEnumControl method:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A91C621-2805-4363-9510-86532A08D4E4\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_ListBox.htm\">List Box</a></span> —list of items that appear in a window. The user can select only one at a time.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2B84D17-EFA5-4974-BBD4-82A53611D382\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_ComboDropDownBox.htm\">Combo/Drop-Down Box</a></span> —list of items that appear in a drop-down box. The user can select only one at a\n\
                     time and the current selection appears in single-line field. This control is best\n\
                     suited for large lists.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5EA6964-2535-43A4-9C91-00DAFF8735D9\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_RadioButtons.htm\">Radio Buttons</a></span> —list of options with a small selectable circle appearing beside each choice (text).\n\
                     The user can select only one at a time. This control is best suited for very small\n\
                     lists.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B07CC441-5D4D-45EA-874A-6DB55DA5452B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_IconButtons.htm\">Icon Buttons</a></span> —group of selectable icons. The user can select only one at a time. By default, the\n\
                     icons appear on the same line.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8902A8F-93FD-4502-89E9-FC12E1EA05B8\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_Bitfield.htm\">Bitfield</a></span> —group of check boxes for each numerical value in the control. The user can select\n\
                     any number of boxes and the value of the parameter is set to the sum of the checked\n\
                     items.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-374ED645-2405-40F5-9ECD-128133E5B813\"></a></span>The value of the underlying parameter takes on the value of the selected item (except\n\
               for the Bitfield control, which updates the parameter with the <em class=\"mild\">sum</em> of selected items). The user cannot change the item values directly, but they can\n\
               be changed dynamically through Logic.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-57817175-E3EE-4EFD-B0D4-7CF2B99859EE\"></a></span>The list of items that is displayed is controlled through the property page layout,\n\
               not through its associated parameter on the underlying property set. This means that\n\
               you have to set the array of values to be displayed by assigning them as an array\n\
               of label-value pairs using the <a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> or PPGItem::GetUIItems or PPGItem::PutUIItems property.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-5158D7BA-AAAF-4637-9D68-A4A97894A465\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8BA83771-6A4E-4D77-9553-C7BA7BBA53BC\"></a></span>You can update this list dynamically, but because these values are actually controlled\n\
                     by the layout of the property page (rather than a parameter in the underlying property\n\
                     set), you need to use the <a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> method to update the display.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-B7EA216C-DF3C-4993-BDB6-77B0B68B94B3\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DF71DF7-687B-4CF2-9E79-37C278E9E85F\"></a></span>All instances of a custom property set share the layout, so if you specify that a\n\
                     list of items uses a combo box, that\'s the way the list will always appear until you\n\
                     change the layout definition for the custom property set.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-EB72051E-FFCE-40F1-93F9-8FA72BD1E241\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE26F039-DED8-4690-B08A-8ADC80CBFC4D\"></a></span>When retrieving the array of values on the <a href=\"#!/url=./si_om/PPGItem.UIItems.html\">PPGItem.UIItems</a> or PPGItem::GetUIItems or PPGItem::PutUIItems property, bear in mind that a safearray\n\
                     is returned. For JScript, this means that you have to assign it to a <em class=\"strong\">VBArray</em> object and then convert that to a native JScript array.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-55B8A977-3849-4D51-ADA3-B20CC0E06721\"></a></span>For more information on changing these values dynamically, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0091\">Changing the Layout</a></span>.\n\
            </p>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_ListBox.htm\"> List Box</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_ComboDropDownBox.htm\"> Combo/Drop-Down Box</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_RadioButtons.htm\"> Radio Buttons</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_IconButtons.htm\"> Icon Buttons</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_ppg_Bitfield.htm\"> Bitfield</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";