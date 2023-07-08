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
      <meta name=\"topicid\" content=\"GUID-3D222989-6FC8-45C8-8C6B-F4D11F8318FC\" />\n\
      <meta name=\"indexterm\" content=\"custom properties: creating controls: Numeric Edit Box with Slider\" />\n\
      <meta name=\"indexterm\" content=\"Numeric Edit Box with Slider: creating: in a property page\" />\n\
      <meta name=\"indexterm\" content=\"Numeric Edit Box with Slider\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Numeric Edit Box with Slider</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3D222989-6FC8-45C8-8C6B-F4D11F8318FC\"></a></span><div class=\"head\">\n\
            <h1> Numeric Edit Box with Slider</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><img src=\"../images/GUID-41FD3EBF-86F1-4D11-83C3-F812C9441C53-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-CB518C66-1DCC-402B-BA22-D93B01B7F26C\"></a></span>Standard numeric controls display a numeric edit box and optional slider along with\n\
               an optional animation divot and an optional label. They are associated to an underlying\n\
               parameter of any numeric type.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-4F092DAD-9F98-48D6-9CC1-52041462A7DF\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FD73804-EAB5-4EAB-B470-973AD288DFDE\"></a></span>To provide a valid value range for your slider, use the <a href=\"#!/url=./si_om/Parameter.Min.html\">Parameter.Min</a> or Parameter::GetMin and <a href=\"#!/url=./si_om/Parameter.Max.html\">Parameter.Max</a> or Parameter::GetMax properties when you create the parameter.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-ABBDFF03-E9ED-40BF-B22B-B840A29E9D17\"></a></span>You create them using the <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem method (the <a href=\"#!/url=./si_om/siPPGControlType.html\">siControlNumber</a> is the default for numeric parameters):\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">var oItem = oLayout.AddItem( \"Girth\", \"\", siControlNumber );</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-47D222F1-33C0-455D-9B08-5A3849B00E57\"></a></span>Here are some tips and tricks for how to set up some of the special features for file\n\
               browser widget:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC147317-FEFE-456F-A32A-38D48E276914\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_NumericEditBoxWithSlider.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0065\">To customize the slider\'s appearance</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-21A5AB5F-8103-43C4-9AA3-DF84F60D7ECC\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_NumericEditBoxWithSlider.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0065\">To set the decimal precision for the control</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A518A1AC-0042-4665-AB61-5E65B9495B08\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_NumericEditBoxWithSlider.htm#WS34BA39B437A993419C80CAB58E3BEFA1-0066\">To use logarithmic scaling for the slider</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-A2014ADA-F938-498E-B14D-A4139BE13321\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E46852CF-DDF7-4CCB-A901-CE1CDC4A741C\"></a></span>To get a sense of the full range of configuring numbers in the layout, check out the\n\
                     <em class=\"mild\">Number Control</em> example for the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> object.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-03C6E2AB-2A80-448B-AFEE-BCB325E65DA5\"></a></span>The following item attributes are available:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-31FB992C-F2FE-4A20-BA32-0D7519A8E270\"></a></span><p class=\"table-heading\">Available on all Controls also as a property on the PPGItem object:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2E3C14D5-888B-4C40-84AD-C27C49E7601D\"></a></span><p class=\"table-heading\">Common to many Controls:</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-84E77839-16AE-400A-B031-A22A3F26251A\"></a></span><p class=\"table-heading\">Specific to the Standard Numeric control:</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-20068EC2-F511-4445-97A4-18FC6C47E9B1\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A86B2F4C-AA11-488B-85C8-BF22DAC4EEB0\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIItems</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-980335EF-931E-40FC-AF88-17FA9EFF56FF\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIType</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-14A524EE-9B24-479C-B10E-31F1E87F2310\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIWidthPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB3F1866-02D2-4D6A-B82E-8DE47E682D92\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelPercentage</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD6AB5F7-4910-4DDC-B886-86F507302A68\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILabelMinPixels</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C9E1969-7A4C-4C9F-ACD9-5993B5F5F90C\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoLabel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB5E2750-5F65-4CB0-9EDD-FC71F966FAE8\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIValueOnly</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-D1EFB1EF-E02F-44A3-AA74-9B42C2665333\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIContinue</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-7D9D2828-C6C0-4D98-9711-830913052577\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICX</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6101D97-CCDE-43B4-9D10-EC713E54A960\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUICY</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DE55396-8C7F-4001-9CA4-4842D8FFB24B\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUISyncSlider</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-94BE9B06-7831-4231-8554-BF5C919E80B8\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILogarithmic</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A30D3D56-19FE-47D7-8085-59317D35FD64\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIDecimals</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-447841C0-21DD-452D-9275-4BC0859C09F8\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoSlider</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD24EBE8-43BA-4C23-BFCC-B4985D70A6F1\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIThumbWheel</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E100CAA-8E48-4E01-B580-A5283B9AA894\"></a></span> <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUITreadmill</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0064\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BC06BE21-DE0D-41AC-A729-977F2A0857D9\"></a></span>To customize the slider\'s appearance\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-02780A03-FE53-45A9-B970-E199A84A41F5\"></a></span>There are a number of attributes that allow you to change the default slider:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B650580A-6592-4793-8DF0-4C66C3BA535C\"></a></span><a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUINoSlider</a>: entry box for the numeric value only (no slider)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D059542C-E839-4438-9BF2-3213CF2B7D63\"></a></span><a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIThumbWheel</a>: small version of default slider\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D2888AE-7A41-488E-9D51-A0D950C38757\"></a></span><a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUITreadmill</a>: same size as the thumbwheel, but controls the value change by scrubbing left and\n\
                        right (that is, clicking inside the slider does not change the value)\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// use the thumbwheel\n\
oItem.SetAttribute( siUIThumbWheel, true );\n\
\n\
// use the treadmill\n\
oItem.SetAttribute( siUITreadmill, true );\n\
\n\
// skip the slider entirely\n\
oItem.SetAttribute( siUINoSlider, true );</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0065\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5C06819C-05EA-4194-B928-C79F39F81F4F\"></a></span>To set the decimal precision for the control\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8D792EC-C8E8-4013-943B-CEB57AB4D269\"></a></span>The <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUIDecimals</a> attribute allows you to specify the number of decimal places to appear in the numeric\n\
                  edit box:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oItem.SetAttribute( siUIDecimals, 1 );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-841A9E2B-6DAB-4D92-8493-C121443DF83E\"></a></span>This attribute doesn\'t change the precision of the underlying parameter; however,\n\
                  when the user changes the value from the UI, the new value uses the precision set\n\
                  by this control. For example, if you set up a slider with a decimal precision of <span class=\"code\" translate=\"no\">0</span>, even if the user types <span class=\"code\" translate=\"no\">2.5</span> into the numeric edit box, the new parameter value will still be <span class=\"code\" translate=\"no\">3</span>.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0066\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A8A5BD0F-4A37-40EB-A25F-586E8C16E4D9\"></a></span>To use logarithmic scaling for the slider\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8B6924E-F532-42D5-9B2A-AD598FC75040\"></a></span>You can set the <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siUILogarithmic</a> attribute to <span class=\"code\" translate=\"no\">true</span> to change the scaling stylke for the slider from linear (additive) to logarithmic\n\
                  (multiplicative):\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oItem.SetAttribute( siUILogarithmic, true );</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";