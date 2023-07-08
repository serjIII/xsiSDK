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
      <meta name=\"topicid\" content=\"GUID-9E03810A-9A3E-4F6A-95F9-E7138F9B74C5\" />\n\
      <meta name=\"indexterm\" content=\"filters: registering\" />\n\
      <meta name=\"indexterm\" content=\"XSILoadPlugin: registering filters\" />\n\
      <meta name=\"indexterm\" content=\"RegisterFilter method (from PluginRegistrar)\" />\n\
      <meta name=\"indexterm\" content=\"Filter Names\" />\n\
      <meta name=\"indexterm\" content=\"filters: naming\" />\n\
      <meta name=\"indexterm\" content=\"names: filters\" />\n\
      <meta name=\"indexterm\" content=\"Filter Types\" />\n\
      <meta name=\"indexterm\" content=\"filters: types (registering)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Registering a Filter</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9E03810A-9A3E-4F6A-95F9-E7138F9B74C5\"></a></span><div class=\"head\">\n\
            <h1>Registering a Filter</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E9650F8A-FC43-4678-A21B-005314391D5B\"></a></span> To make a filter available in Softimage, you register it in XSILoadPlugin, which\n\
               is called when Softimage loads a self-installing plug-in. XSILoadPlugin gets a PluginRegistrar\n\
               object from Softimage, and you use the PluginRegistrar.RegisterFilter method to register\n\
               custom filters.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function XSILoadPlugin( oPluginRegistrar )\n\
{\n\
	// Give the plug-in a <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	oPluginRegistrar.Name = \"MyFilters\";\n\
\n\
	// Register a filter named \"My3DObjectFilter\" for 3D objects\n\
	var oPluginItem = oPluginRegistrar.RegisterFilter( \"My3DObjectFilter\", siFilter3DObject );\n\
	oPluginItem.Categories = \"Custom,Filter,3D Objects\";\n\
\n\
	// Register another filter\n\
	oPluginRegistrar.RegisterFilter( \"MyPointFilter\", siFilterSubComponentPoint );\n\
}</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-0021\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D998BCA6-D55A-4CA1-85DB-0AE00A9E4330\"></a></span> Filter Names\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A4AAF74-0B48-47C3-9F94-8FDBFF9BBA06\"></a></span> The first parameter to RegisterFilter is the filter name. This is the name that appears\n\
                  in the Softimage user interface, and the name you use to reference the filter in scripting\n\
                  or C++ code. You also use this name to name the filter callback functions (for example,\n\
                  the Match callback for a filter named \"My3DObjectFilter\" is \"My3DObjectFilter_Match\").\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-292B3285-F5F3-4F4A-96DB-ABD7CD41C464\"></a></span>The first character in a filter name should be a letter. Subsequent characters can\n\
                  be letters, numbers, underscore (_) characters, or spaces. If a filter name contains\n\
                  spaces (for example, \"My 3D Object Filter\"), then you remove the spaces in the callback\n\
                  function names (for example, \"My3DObjectFilter_Match\" and \"MyFilter_Subset\").\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-69F7AD2D-C330-4E8C-98A4-A45ACCE52243\"></a></span>Note that if a filter name contains spaces, you must replace the spaces with underscores\n\
                  to use the filter with scripting commands or the object model:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var cloList = SIFilter(Application.Selection, \"My_3D_Object_Filter\", true, true);\n\
var oFilter = Application.Filters.Item( \"My_3D_Object_Filter\" );</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-0022\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C941BD51-54D6-4180-993C-D63437DC864D\"></a></span> Filter Types\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF495467-EFD6-496D-9968-D27AE1C18B5E\"></a></span> The second parameter specifies the <span class=\"char_link\"><a href=\"#!/url=./files/cus_filters_WhatisaCustomFilter.htm\">filter type</a></span>. In the example above, the constant siFilter3DObject specifies that you are registering\n\
                  a 3D object filter. The available filter type constants are:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AD1315C8-41E8-410A-BC11-F0650CCFBAFB\"></a></span>siFilter3DObject\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-431C6556-23BE-4E49-80A8-25C2C48AD99E\"></a></span>siFilterSubComponentEdge\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D3FFD5D-3250-434E-9CD0-04D63244D1C6\"></a></span>siFilterSubComponentPoint\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA0442A9-C933-407D-9FD3-36486295A7A6\"></a></span>siFilterSubComponentPolygon\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD625A43-881E-4924-9313-0203FCCD6250\"></a></span>siFilterProperty\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-ECE8565C-911F-4702-AEAF-CAFDF07F7A03\"></a></span>siFilterObject\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";