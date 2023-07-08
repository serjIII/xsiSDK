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
      <meta name=\"topicid\" content=\"GUID-A69E82A0-7314-4938-9D96-BA8B07BDD8C3\" />\n\
      <meta name=\"indexterm\" content=\"UI controls for shader parameters\" />\n\
      <meta name=\"indexterm\" content=\"shader parameters: UI controls\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Refining UI Controls for Parameter Definitions</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A69E82A0-7314-4938-9D96-BA8B07BDD8C3\"></a></span><div class=\"head\">\n\
            <h1>Refining UI Controls for Parameter Definitions</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FF110BA-8FA0-4D3A-A015-065B69FC23DE\"></a></span>There are two ways you can customize the appearance of an instantiated shader definition\n\
               in the UI:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2981B5A9-792D-446E-901B-4000AA3A30FB\"></a></span>You can modify the <a href=\"#!/url=./si_om/ShaderDef.RenderTreeLayout.html\">ShaderDef.RenderTreeLayout</a> or ShaderDef::GetRenderTreeLayout, which controls what you see on the shader node.\n\
                     For example, grouping ports together—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders-2.htm\">VBScript Example: Grouping Ports in the Render Tree</a></span>.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE345FF9-20A8-4F53-816F-4F0572F9C588\"></a></span>You can modify the associated <a href=\"#!/url=./si_om/ShaderDef.PPGLayout.html\">ShaderDef.PPGLayout</a> or ShaderDef::GetPPGLayout, which supports most of the functionality of the standard\n\
                     <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object. For example, you can customize parameter-based controls (for example, specify\n\
                     option lists as combo list boxes), arrange shader parameters in groups and tabs, and\n\
                     prevent others from appearing at al.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-20215E87-7303-443B-8325-E7ABB97560DE\"></a></span>For an example demonstrating how to set up a combo box control, see the example. For\n\
                     an example showing how to prevent parameter definitions from appearing in the UI,\n\
                     see <span class=\"char_link\"><a href=\"#!/url=./files/cus_shaders-3.htm\">JScript Example: No UI for Parameter Definition</a></span>.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E1EFB2A9-AAF6-4248-98C6-E93E96233A82\"></a></span>To add a parameter definition as a connectable port in the shader node only, set the\n\
               parameter definition options to be <a href=\"#!/url=./si_om/ShaderParamDefOptions.SetTexturable.html\">ShaderParamDefOptions.SetTexturable</a> or ShaderParamDefOptions::SetTexturable (true) but <em class=\"mild\">not</em><a href=\"#!/url=./si_om/ShaderParamDefOptions.SetInspectable.html\">ShaderParamDefOptions.SetInspectable</a> or ShaderParamDefOptions::SetInspectable (false). To add a parameter definition as\n\
               a parameter on the associated property page, set the inspectable capability to true\n\
               and the texturable capability to false.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-83699411-6F40-44CD-8CB9-B01BF9F10E30\"></a></span>You can control what appears on the property page by modifying the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object via the <a href=\"#!/url=./si_om/ShaderDef.PPGLayout.html\">ShaderDef.PPGLayout</a> or ShaderDef::GetPPGLayout property: use it to add the parameter definitions that\n\
               you want to appear and simply don\'t add the ones you don\'t want to appear. However,\n\
               if you don\'t need to prevent a non-texturable parameter definition from appearing\n\
               or customize a control on the property page, you don\'t need to access it at all.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-101C2D97-C7E5-4094-BBC2-B5F0BAEDE95E\"></a></span>Similarly, the render tree layout does not need to be explicitly accessed unless you\n\
               need to group connection ports on the shader node. In that case you can get the PPGLayout\n\
               from the <a href=\"#!/url=./si_om/ShaderDef.RenderTreeLayout.html\">ShaderDef.RenderTreeLayout</a> or ShaderDef::GetRenderTreeLayout property.\n\
            </p>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders-2.htm\">VBScript Example: Grouping Ports in the Render Tree</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders-3.htm\">JScript Example: No UI for Parameter Definition</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";