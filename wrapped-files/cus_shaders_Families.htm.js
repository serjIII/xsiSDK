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
      <meta name=\"topicid\" content=\"GUID-566E05AF-BDDC-4154-9344-31A767A1B0FC\" />\n\
      <meta name=\"indexterm\" content=\"data types: shader families\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: families (types)\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: families (types)\" />\n\
      <meta name=\"indexterm\" content=\"Families: types for shaders\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Shader Families</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-566E05AF-BDDC-4154-9344-31A767A1B0FC\"></a></span><div class=\"head\">\n\
            <h1>Shader Families</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-054F9E38-7700-4813-BDDC-8A2B9F15D028\"></a></span>A <em class=\"mild\">shader family</em> is a way of categorizing shaders so that users know (usually indicated in the UI\n\
               by color) how they can be used. When you use one of the Softimage families for your\n\
               custom shader definition, the same restrictions apply as for native Softimage shader\n\
               definitions. For example, if you make the <span class=\"code\" translate=\"no\">mrLight</span> the primary family for your custom shader definition, Softimage will only allow users\n\
               to connect it to a light in the render tree.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-767852C0-687C-4A3E-932A-687DD27B48B7\"></a></span>You can use one of the <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_FamiliesNative.htm\">native Softimage shader families</a></span> or <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders_FamiliesCustom.htm\">create your own family</a></span>. You can specify more than one family on a custom shader definition, but you must\n\
               specify at least one, or else when your shader definition is instantiated in Softimage\n\
               it will fail. If you specify more than one family for your shader definition, one\n\
               of them is considered to be primary, and it is that family that determines what restrictions\n\
               apply as well as the color of the shader node in the render tree.\n\
            </p>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders_FamiliesAccess.htm\">Detecting Shader Families</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders_FamiliesNative.htm\">Native Softimage Shader Families</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders_FamiliesCustom.htm\">Creating Custom Shader Families</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";