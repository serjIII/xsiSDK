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
      <meta name=\"topicid\" content=\"GUID-59752D77-CFD6-4987-AECB-D0C9714E2F1D\" />\n\
      <meta name=\"indexterm\" content=\"navigation: special navigational tools\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Special Navigational Tools</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-59752D77-CFD6-4987-AECB-D0C9714E2F1D\"></a></span><div class=\"head\">\n\
            <h1> Special Navigational Tools</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-146711DC-17AB-41A0-9398-5D03D1C70EC3\"></a></span>The Softimage SDK offers many specialized API methods to traverse through relationships\n\
               of the scene graph. For example:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-912EE4C3-9072-42B7-BF05-ACE6A03CC509\"></a></span><a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> (<a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetSource\">Parameter::GetSource</a> in the C++ API) returns the piece of data attached to (driving) a parameter, such\n\
                     as an FCurve, Shader, Expression or Operator.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-21785F3D-777B-44AE-8B64-9C324F027A34\"></a></span>The <a href=\"#!/url=./si_om/ConstructionHistory.html\">ConstructionHistory</a> allows you to browse the operator stack.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6A2586D-46C4-480F-B9C5-8B7D07185968\"></a></span>In the object model, you can use the <a href=\"#!/url=./si_om/SceneItem.LocalProperties.html\">SceneItem.LocalProperties</a> (<a href=\"#!/url=./si_cpp/classXSI_1_1SceneItem.html#GetLocalProperties\">SceneItem::GetLocalProperties</a> in the C++ API) to get the local versions of shared properties (material, for example).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C0D044E6-6855-4A71-9812-F2A577F9ECD6\"></a></span><a href=\"#!/url=./si_om/Geometry.Clusters.html\">Geometry.Clusters</a> (<a href=\"#!/url=./si_cpp/classXSI_1_1Geometry.html#GetClusters\">Geometry::GetClusters</a> in the C++ API) provides the access to any cluster properties on the object.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-16A61F58-F73E-4272-84B7-BE273D7BD6EB\"></a></span>etc.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";