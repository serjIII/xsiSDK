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
      <meta name=\"topicid\" content=\"GUID-EB463F47-90FC-4B03-90D4-93C213C2CD78\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Building Dialogs</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EB463F47-90FC-4B03-90D4-93C213C2CD78\"></a></span><div class=\"head\">\n\
            <h1>Building Dialogs</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4DD7CF44-CB2E-4007-AFC1-DCD4BF0B6CF9\"></a></span>The standard way to provide a user interface for a plug-in is to create a custom property\n\
               and use its property page as the dialog.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE368215-24A1-49A4-AD6B-A93EA241E83A\"></a></span>If you are going to manipulate data as part of your property page\'s logic, you need\n\
               to create an underlying custom property set, or <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html\">CustomProperty</a> object. This is the case even if the data you are referencing is not directly associated\n\
               with any real scene data and will be deleted after the property page closes.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-677D02D7-5440-402B-9552-17EE1DDC9985\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5AB7507C-9093-497D-898C-9FEF697DC944\"></a></span>If you only want to display a message to users or have them answer a Yes/No type of\n\
                     question, the custom property page dialog is probably more powerful than you need.\n\
                     If so, consider using the <a href=\"#!/url=./si_om/XSIUIToolkit.MsgBox.html\">XSIUIToolkit.MsgBox</a> or UIToolkit::MsgBox feature instead.\n\
                  </p> \n\
               </div>\n\
            </div><span class=\"anchor_wrapper\"><a name=\"GUID-1E21B4CF-7618-40B8-A2BE-54EB7222872E\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCA7856D-3051-4F87-B817-C97DD97314EB\"></a></span>Make your custom property a self-installing plug-in by using the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> and XSIUnloadPlugin callbacks (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm\">Property Callbacks</a></span>) if either of these situations applies:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-98A45F46-FF11-4291-B79E-591DFA4B524F\"></a></span>If you are planning to save your custom property in the scene (ie., if you want the\n\
                           data and layout to persist after the property page closes).\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8FBEABF-F093-44E3-AD00-01E1BEEB1D6F\"></a></span>If you are planning on distributing it but would like to protect your intellectual\n\
                           knowledge.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C089D9F6-D8B5-4449-9205-4C990944015A\"></a></span>Create a CustomProperty object and populate it with Parameter objects (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_DefiningaCustomProperty.htm\">Defining a Custom Property</a></span>).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2E26C14-0F76-4B6D-B7C4-5B3CE0E5C9FB\"></a></span>Define a layout for the CustomProperty object using the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object and include any extra controls or logic as necessary (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyPageControls.htm\">Property Page Controls</a></span>).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA43D66E-7C57-4685-9365-9F909B064078\"></a></span>You may need to tweak the layout to achieve a more user-friendly presentation (see\n\
                     <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_SettingControlAttributes.htm\">Setting Control Attributes</a></span>). This can include:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A52F34E-DFE2-450E-957F-C3C5B92600DD\"></a></span>You can set a number of attributes on individual controls (<a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGItem.html\">PPGItem</a> objects). For example, you can set the size on control items, among other things.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-0245DE2B-DCD3-4EB4-90B8-2BAADE443811\"></a></span>Grouping related controls to align them in columns. For example, you could create\n\
                           a column of bitmap widgets on the left matching a column of text boxes on the right.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D811A3B-D9F0-440A-9CAD-EF5AB8842080\"></a></span>Grouping related controls inside a labelled boxed area. For example, you can group\n\
                           a set of three numeric controls that represent positions in X, Y, and Z.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B5DE9FAA-0793-42EC-85EC-B62BC2C6D8D1\"></a></span>Separating the information into several pages with an associated tab control for easy\n\
                           access.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-924F8C22-2315-4B67-AA8A-6602ADF71432\"></a></span>Create and connect the logic to the PPGLayout object (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_PropertyCallbacks.htm\">Property Callbacks</a></span>). The logic contains the functions that respond to user action on the property pages.\n\
                     Logic code can be implemented with scripting, in which case it can be embedded directly\n\
                     in the scene or stored in a script file. Alternatively, it can be implemented with\n\
                     C++ code inside a library file (*.dll or *.so).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C23E1CAF-33F2-4484-A935-6CA610CCA6E9\"></a></span>Associate any help pages to the property page (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg_ProvidingHelpFiles.htm\">Providing Help Files</a></span>). You can set a location to a HTML file. For example, you can supply an URL to a\n\
                     web page that provides help on your customization.\n\
                  </p> \n\
               </li>\n\
            </ol>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";