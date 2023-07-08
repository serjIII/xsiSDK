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
      <meta name=\"topicid\" content=\"GUID-F76DCC5A-3AF8-4A59-9A62-9CC3BBDF1353\" />\n\
      <meta name=\"indexterm\" content=\"filters: types\" />\n\
      <meta name=\"indexterm\" content=\"siFilter3DObject enum constant\" />\n\
      <meta name=\"indexterm\" content=\"siFilterSubComponentEdge enum constant\" />\n\
      <meta name=\"indexterm\" content=\"siFilterSubComponentPoint enum constant\" />\n\
      <meta name=\"indexterm\" content=\"siFilterSubComponentPolygon enum constant\" />\n\
      <meta name=\"indexterm\" content=\"siFilterObject enum constant\" />\n\
      <meta name=\"indexterm\" content=\"Type property for filters\" />\n\
      <meta name=\"indexterm\" content=\"siFilterFundamentalType, using\" />\n\
      <meta name=\"indexterm\" content=\"siFilterType enum\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Filter Types</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F76DCC5A-3AF8-4A59-9A62-9CC3BBDF1353\"></a></span><div class=\"head\">\n\
            <h1>Filter Types</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-82EC1700-5B76-41FF-8933-DA6A4D304553\"></a></span>When you register a custom filter, the second parameter to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterFilter.html\">PluginRegistrar.RegisterFilter</a> specifies the filter type. In addition to 3D object filters, you can also have subcomponent\n\
               filters (for points, edges, or polygons), property filters, and generic object filters.\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2636044B-EA67-4DD8-B49E-02400EEBC28E\"></a></span><p class=\"table-heading\">siFilterType constants</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C0CADF5D-B4A6-4255-AA0A-ECCECF99513E\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9BD28833-24B5-4E18-98CE-893A87E9342B\"></a></span><p class=\"table-body\"> siFilter3DObject</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3B5715EF-87BC-487D-B0AB-A63F702EB896\"></a></span><p class=\"table-body\">Filter for objects that belong to the 3D Object family, such as X3DObject, Null, Light,\n\
                           Camera, Model, ChainBone, and ParticleCloud.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF59CC48-D4FF-416A-8C01-6DA6DE6E8563\"></a></span><p class=\"table-body\"> siFilterSubComponentEdge</p> <span class=\"anchor_wrapper\"><a name=\"GUID-1CF727DB-1EFA-429E-921D-CD50B1A6661F\"></a></span><p class=\"table-body\"> siFilterSubComponentPoint</p> <span class=\"anchor_wrapper\"><a name=\"GUID-86F4A945-666A-498A-BE27-9F927103E833\"></a></span><p class=\"table-body\"> siFilterSubComponentPolygon</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C2638082-4AF3-444D-804B-588B1E0B0F29\"></a></span><p class=\"table-body\">Selection filter for edges, points, and polygons.</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5B812581-E8F0-4B50-BB6C-399BE2AA2639\"></a></span><p class=\"table-body\">siFilterProperty</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-31457C55-E3E0-4423-A4C8-73340BF60682\"></a></span><p class=\"table-body\">Filter for properties, such as constraints, joints, materials, and operators.</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E5052076-F068-45D2-B153-8419C5A30897\"></a></span><p class=\"table-body\"> siFilterObject</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-37C0F390-2514-4E1C-B67E-FE32C0FD2023\"></a></span><p class=\"table-body\">Generic filter for any type of object (SIObject objects and objects of classes derived\n\
                           from SIObject). Not available as a selection filter. Object filters are available\n\
                           in explorer views for certain scopes (such as Sources/Clips, Animation, Audio, Images,\n\
                           Materials, and Models).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8AE873CF-AF4D-452B-9BF5-2B96E17D08E9\"></a></span>Softimage uses the filter type to determine when and where a filter is available.\n\
               For example, in the Select panel, subcomponent filters are not available when the\n\
               current selection includes nulls or implicit objects. In an explorer view, only 3D\n\
               object and object filters are available, and object filters are available only for\n\
               certain scopes.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-30BAE0AF-2E7E-4A21-B899-CB9489FDB6DA\"></a></span>Note that for filters, the <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a>property returns <a href=\"#!/url=./si_om/siFilterFundamentalType.html\">siFilterFundamentalType</a>values, not <a href=\"#!/url=./si_om/siFilterType.html\">siFilterType</a>values. For example, for a point filter, <span class=\"code\" translate=\"no\">SIObject.Type</span> returns the string <span class=\"code\" translate=\"no\">SubComponentFilter</span>, not the number <span class=\"code\" translate=\"no\">5</span> (the value of the <span class=\"code\" translate=\"no\">siFilterSubComponentPoint</span> constant).\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";