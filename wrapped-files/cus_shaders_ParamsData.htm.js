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
      <meta name=\"topicid\" content=\"GUID-B07DED18-1C28-4CB5-AAF7-C0C3F17E3E36\" />\n\
      <meta name=\"indexterm\" content=\"data types: shader parameters\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: parameter: data types\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: parameter: data types\" />\n\
      <meta name=\"indexterm\" content=\"shader parameters: data types\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Parameter Data Types</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B07DED18-1C28-4CB5-AAF7-C0C3F17E3E36\"></a></span><div class=\"head\">\n\
            <h1>Parameter Data Types</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9658C9C-0C1A-4168-A709-C307FA0D2B8F\"></a></span>The usual basic data types are supported for <a href=\"#!/url=./si_om/ShaderParamDef.html\">ShaderParamDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDef.html\">ShaderParamDef</a> objects (such as colors, matrices, scalars, strings, booleans, etc.) but there are\n\
               also a couple of more complex types which combine the simpler types: array and struct\n\
               types. These basically act as containers for more shader parameter definitions.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-993BDC6D-17D0-48A7-AEA0-4A90F533618F\"></a></span>In addition, there are reference and property parameters which associate a picking\n\
               widget in the render tree to handle getting scene objects (3d objects, materials,\n\
               lights, etc.) and special properties (UV, CAV, weight maps, etc.). For the picking\n\
               widgets, you can filter what the user can choose from by applying one of the <a href=\"#!/url=./si_om/siShaderPropertyFilterType.html\">siShaderPropertyFilterType</a> or <a href=\"#!/url=./si_om/siShaderReferenceFilterType.html\">siShaderReferenceFilterType</a> values.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E02051EF-B699-4BE9-A886-0977F98CE119\"></a></span>A number of custom parameter data types are also available which allow you to specify\n\
               special shader node connection types such as lightmap, geometry, realtime, etc. Like\n\
               the reference and property look-up widgets, you define the specific data type for\n\
               your shader parameter by applying one of the siShaderCustomDataType values.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-E3221FC1-EF83-4DBB-ABBA-F4980494D24A\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-41144107-57E4-4CAD-8C16-B65DF3D1D515\"></a></span>For an example of how to define the reference, property, and custom parameter data\n\
                     types, see the example installed with Softimage, available in both C++ and JScript.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-25A9A294-5145-4845-ACFB-1ACA971B3CE3\"></a></span>Besides the native Softimage data types, you can also create your own custom parameter\n\
               data type using the <a href=\"#!/url=./si_om/XSIApplication.RegisterShaderCustomParameterType.html\">RegisterShaderCustomParameterType</a> or RegisterShaderCustomParameterType method. This method allows you to specify a\n\
               custom display color in the render tree, specify what port types and shader families\n\
               can be connected to a port having the data type.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";