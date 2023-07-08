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
      <meta name=\"topicid\" content=\"GUID-C89E6F43-6E07-475D-AE43-21B9130409FF\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Parameter Performance Optimization</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C89E6F43-6E07-475D-AE43-21B9130409FF\"></a></span><div class=\"head\">\n\
            <h1>Parameter Performance Optimization</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-3676E625-0DD7-4882-B965-728B37368B28\"></a></span>Functions like <a href=\"#!/url=./si_cpp/classXSI_1_1CParameterRefArray.html#GetValue\">CParameterRefArray::GetValue</a> are designed to improve the speed of C++ code that reads and writes Parameters. There\n\
            has also been a fair amount of optimization within Softimage to provide fast access\n\
            to Parameter values. However the SDK user also needs some knowledge about how to write\n\
            fast parameter access code, so here are a few suggestions to help take advantage of\n\
            parameters in the C++ API:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E920374-E9D5-494D-AE86-789875117FEB\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_understand_ParameterPerformanceOptimization.htm#WS7902B6CCE0739F4D8C2836B524C1EB2F-0018\">Always get the parameters from the primary owner</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-04919E14-AE28-4C07-A713-854C3FFA39C3\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cpp_understand_ParameterPerformanceOptimization.htm#WS7902B6CCE0739F4D8C2836B524C1EB2F-0019\">Single parameter access</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0018\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6CFC9D15-88C6-40D0-9B66-067D2768486C\"></a></span>Always get the parameters from the primary owner\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E079B41E-9F45-449F-BAFE-B6BD33AEE398\"></a></span>Parameters are accessed in the Softimage SDK through the <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html\">ProjectItem</a> class. This class is the base for most of the SDK classes and allow writing generic\n\
               and reusable code. While it always pay off to write generic code, it also comes with\n\
               a performance cost when it comes down to parameter access. To optimize the performance\n\
               we recommend to always get the parameters from their primary owner i.e the immediate\n\
               parent of the parameters.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E0143244-B8B1-4D6D-87D6-56729D8ACD19\"></a></span>Consider the <a href=\"#!/url=./si_cpp/classXSI_1_1Camera.html\">Camera</a> object for instance which has several children objects where each have their own\n\
               parameters. You can write some generic code like this to get the camera\'s X position:\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application app;\n\
Model model = app.GetActiveSceneRoot();\n\
ProjectItem camera = model.GetChild(L\"Camera\");\n\
Parameter posx = camera.GetParameters().GetItem(\"posx\");\n\
app.LogMessage( posx.GetValue().GetAsText() );\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1390F148-1111-4FC0-A857-3AE54EDDF2B5\"></a></span>The call to <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetParameters\">ProjectItem::GetParameters</a> navigates the whole camera hierarchy and collects all the parameters nested under\n\
               the camera including the primitive, camera display, kinematics, visibility, etc. It\n\
               would be preferable to get the parameters directly from the camera\'s local <a href=\"#!/url=./si_cpp/classXSI_1_1KinematicState.html\">KinematicState</a> object instead which holds the posx parameter. Doing so, Softimage will not navigate\n\
               all camera children objects but only the kinematic property where posx is defined.\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application app;\n\
Model model = app.GetActiveSceneRoot();\n\
Camera camera = model.GetChild(L\"Camera\");\n\
KinematicState ks = camera.GetKinematics().GetLocal();\n\
Parameter posx = ks.GetParameters().GetItem(\"posx\");\n\
app.LogMessage( posx.GetValue().GetAsText() );\n\
</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0019\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-ABE56DD0-F5CD-410C-8CD0-03B1314307F6\"></a></span>Single parameter access\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2FA9F3E-FEA3-42FC-B4CA-A478062DA2E4\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetParameterValue\">ProjectItem::GetParameterValue</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetParameterValue\">Parameter::GetParameterValue</a> are typically used for accessing a minimum number of parameters. As opposed to GetParameters\n\
               which traverses the entire hierarchy of the target object in order to cache all visited\n\
               node parameters, GetParameterValue only looks for a specific parameter and returns\n\
               its value as soon as the parameter is located.\n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-669E4977-FED7-4295-BDE4-38AD47AD6958\"></a></span>GetParameterValue doesn\'t use a cache, therefore the overhead that would be required\n\
               to build the cache (potentially huge) is avoided since only one parameter value is\n\
               requested. Use GetParameterValue only in scenarios when a very few number of parameters\n\
               are involved.\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application app;\n\
Model model = app.GetActiveSceneRoot();\n\
Camera camera = model.GetChild(L\"Camera\");\n\
\n\
// Wrong way of getting a single parameter value. This \n\
// will traverse the entire camera parameter hierarchy and \n\
// cache all parameters\n\
\n\
Parameter fov = camera.GetParameters().GetItem(L\"fov\");\n\
app.LogMessage( fov.GetValue().GetAsText() );\n\
\n\
// Suggested way of getting a single parameter value.\n\
CValue val = camera.GetParameterValue(L\"fov\");\n\
app.LogMessage( val.GetAsText() );\n\
</pre></div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";