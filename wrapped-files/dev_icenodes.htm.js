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
      <meta name=\"topicid\" content=\"GUID-18318C3A-BE0D-40CE-8FA5-F0CF4D01C4F1\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is ICE?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-18318C3A-BE0D-40CE-8FA5-F0CF4D01C4F1\"></a></span><div class=\"head\">\n\
            <h1>What is ICE?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-189EEF95-389C-4502-B845-0C281AF057E1\"></a></span>An ICE (Interactive Creative Environment) tree is a special kind of operator that\n\
            you create yourself consisting of a set of interconnected nodes that represent data\n\
            and functions. It\'s very similar to building shader trees in the Render Tree. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B392B90-490B-427C-BC70-23E53F72CE2B\"></a></span>The object model and C++ API both have an interface representing these atomic units\n\
            called <a href=\"#!/url=./si_om/ICENode.html\">ICENodes</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a>. Each ICENode must have at least one output port and may have one or more input port(s)\n\
            organized in groups (similar to operators). The interfaces for these are <a href=\"#!/url=./si_om/ICENodeInputPort.html\">ICENodeInputPort</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeInputPort.html\">ICENodeInputPort</a> and <a href=\"#!/url=./si_om/ICENodeOutputPort.html\">ICENodeOutputPort</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeOutputPort.html\">ICENodeOutputPort</a>. You can encapsulate a graph of ICENodes in a special container called an <a href=\"#!/url=./si_om/ICECompoundNode.html\">ICECompoundNode</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICECompoundNode.html\">ICECompoundNode</a>, for convenience, reusability, or privacy, just like a function or a subroutine in\n\
            programming. Because this is primarily a way to build particles, the <a href=\"#!/url=./si_om/ICEAttribute.html\">ICEAttribute</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICEAttribute.html\">ICEAttribute</a> interface gives access to the attribute data set that belongs to scene objects such\n\
            as geometries and properties. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-3F05F85C-39FB-46DD-9599-08FD29BD22D8\"></a></span>The operator is called an <a href=\"#!/url=./si_om/ICETree.html\">ICETree</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICETree.html\">ICETree</a> because it is the entry point to the ICE Tree for a Softimage scene element. When\n\
            you add an ICE Tree to an object, you are basically applying the <a href=\"#!/url=./si_om/ICETree.html\">ICETree</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ICETree.html\">ICETree</a> operator to the object, so you use the <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> command. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-454E7EEA-D6A2-4A6D-B4BF-92D5B203BFD1\"></a></span>You can build custom ICENodes with the C++ API as self-installing plug-ins. You define\n\
            your custom node with the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a> class and code the main logic (computation) in the <a href=\"#!/url=./files/cus_icenodes.htm\">Custom ICENodes</a> callback. The Evaluate callback uses the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> object to get the input and output port data. For more information, see Custom ICENodes.\n\
            \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-B437D9D3-4D0C-4071-9B52-434F5E745547\"></a></span>You can also see the <a href=\"#!/url=./examples/Addons/ICEAttribute/netview_ICEAttribute.htm\">Inspect ICE Attributes</a> example that demonstrates how to navigate through the ICE attributes of a geometry\n\
            or property and how to log all attribute values. This example is located in the examples\n\
            folder of the Softimage SDK installation directory. \n\
         </p>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";