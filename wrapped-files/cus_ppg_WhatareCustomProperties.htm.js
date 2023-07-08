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
      <meta name=\"topicid\" content=\"GUID-2B34D9E5-EFBA-43C4-BB09-989D249DC76A\" />\n\
      <meta name=\"indexterm\" content=\"custom properties\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What are Custom Properties?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-2B34D9E5-EFBA-43C4-BB09-989D249DC76A\"></a></span><div class=\"head\">\n\
            <h1>What are Custom Properties?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB50EF1F-8025-49FB-BF49-AEA4FDB69753\"></a></span>In short, <em class=\"mild\">custom property sets</em> hold data (as a set of parameters), <em class=\"mild\">custom property pages</em> display data (in a dialog using user-interface controls), but they are closely tied\n\
            together and are often referred to by the more generic term <em class=\"mild\">custom properties</em>. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-5916BAD1-9722-4DE8-9D1D-D9962EA73C9E\"></a></span>More specifically, a set of custom parameters defined as a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomProperty.html\">CustomProperty</a> object contains pure data. The layout for a property page is defined in conjunction\n\
            with the parameter data as a <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object. The property page itself as a <a href=\"#!/url=./si_om/PPG.html\">PPG</a> or <a href=\"#!/url=./si_om/PPGEventContext.html\">PPG</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGEventContext.html\">PPG</a> object combines the information from the data and the layout and displays the information\n\
            and any other custom controls, messages or images defined for that page. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-744BD005-4D2B-45DF-A1E6-6FAF7DC69422\"></a></span>The user can then view and modify the set of parameters defined on that custom property\n\
            set along with using any logic defined for the dialog layout. \n\
         </p>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-9C74CB4D-112A-4451-BC15-7C06575AEBCF\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3A762006-8C22-4319-9CCA-DEFA6B5F84EC\"></a></span>Not all property pages are tied to parameters that affect real scene data. For example,\n\
                  you can create parameters that hold temporary data only used for the duration of the\n\
                  property page, such as a Bimap Control that displays your company\'s logo. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS34BA39B437A993419C80CAB58E3BEFA1-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FE1C26B2-69FA-48D2-A7BD-30B114CCC895\"></a></span> More about Custom Property Sets\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EAE2245B-FEF2-4061-B1F0-DC01CE429B5F\"></a></span>A custom property set represents a set of related parameters that can be attached\n\
               to a scene item, such as a 3D Object or the Scene_Root. The individual parameters\n\
               can be standard data types (integers, booleans, doubles, strings) or more complex\n\
               Softimage data types such as RGB/RGBA colors, fcurves and <a href=\"#!/url=./si_om/GridData.html\">GridData</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a> (2-dimensional arrays). \n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-93796073-BBC1-4D8E-A5DC-52B5DF8C0B95\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CFFE8DB5-CA0A-427E-AB89-7E5D3FD8C01B\"></a></span>Over the course of time a few different names have been used to describe these objects,\n\
                     including: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_93495C6CCA164DE8A373B0454AE09908\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-72E09DC8-C468-491E-B410-0741CFA2DC24\"></a></span>Custom Property Sets \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4F711C5A-BAD7-43AE-A761-56329E634B97\"></a></span>Custom Parameter Sets \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C73F0822-C49B-4755-889B-B852D7A371A2\"></a></span>CustomParamList \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A35BF1B1-B46D-4AAF-932B-9D1A7F57DB28\"></a></span>Custom PSet \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D881E4A-D9B4-4838-B050-3AA73E7EB714\"></a></span>All these are equivalent to the custom property set (CustomProperty object) described\n\
                     in this section. \n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F6DB6EBF-2525-4EE5-A3C5-56B856AD5655\"></a></span>Custom properties are one of the most useful tools available to plug-in developers.\n\
               These objects can be used to store custom \'user\' data in a scene, centralize the control\n\
               of other parameters (via Proxy Parameters and Marking Sets) and build user interfaces.\n\
               For example, CustomProperty objects can be used to store Game Engine attributes inside\n\
               a scene, or to display a dialog box with settings for an Import plug-in. Custom Properties\n\
               make a large range of UI widgets available. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8CB6A90-32C2-491B-A89F-2A07E0394186\"></a></span>You can see the following examples that are located in the examples folder of the\n\
               Softimage SDK installation directory. <span class=\"anchor_wrapper\"><a name=\"UL_D3EE1DED94D340AE916B271E963C1A45\"></a></span><ul>\n\
                  <li><a href=\"#!/url=./examples/Addons/PPGDemos/netview_PPGDemos.htm\">PPG Demos</a> shows how to build property pages. \n\
                  </li>\n\
                  <li><a href=\"#!/url=./examples/Addons/PSetUIDemo/netview_PSetUIDemo.htm\">PSetUIDemo</a> shows how to use a custom property (a set of custom parameters) to build a user interface\n\
                     for a plug-in. \n\
                  </li>\n\
               </ul> \n\
            </p> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";