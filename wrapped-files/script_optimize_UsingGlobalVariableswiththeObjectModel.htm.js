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
      <meta name=\"topicid\" content=\"GUID-40C48A56-CB8A-4BAF-84A2-BA6E31111673\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using Global Variables with the Object Model</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-40C48A56-CB8A-4BAF-84A2-BA6E31111673\"></a></span><div class=\"head\">\n\
            <h1>Using Global Variables with the Object Model</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-80E2A2C5-19A3-448B-8D4B-F9927D5D9095\"></a></span>Getting objects through a lot of intermediate classes tends to be slower than assigning\n\
               the intermediate classes to global variables. For example, these are equivalent statements\n\
               in result:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	x = obj.Kinematics.Global.Parameters( \"posx\" ).Value\n\
	y = obj.Kinematics.Global.Parameters( \"posy\" ).Value\n\
	z = obj.Kinematics.Global.Parameters( \"posz\" ).Value\n\
\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> gk = obj.Kinematics.Global\n\
	x = gk.Parameters( \"posx\" ).Value\n\
	y = gk.Parameters( \"posy\" ).Value\n\
	z = gk.Parameters( \"posz\" ).Value</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A925EB3C-CFE9-42B4-A10F-738711C6E7B3\"></a></span>While both of these snippets access the x-position of the same object, the first version\n\
               has to call the same functions three times, whereas the second version reuses the\n\
               initial object. Let\'s run that down a bit: in order to get at the x, y and z positions\n\
               for the object, the following property calls are made:\n\
            </p><span class=\"anchor_wrapper\"><a name=\"GUID-F1CF5ED6-109E-416A-B000-F211E80F5F04\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F25A22E2-D0CC-427D-8401-9A6EA691A1B8\"></a></span>The <a href=\"#!/url=./si_om/X3DObject.Kinematics.html\">Kinematics (X3DObject)</a> property returns a <a href=\"#!/url=./si_om/Kinematics.html\">Kinematics</a> object.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-568CA7DE-A0E8-4A70-8BC7-CBB06068ED73\"></a></span>The <a href=\"#!/url=./si_om/Kinematics.Global.html\">Global (Kinematics) *</a> property returns a <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> object.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C17FF53-2FD9-4BC5-94D7-A6710C614B0F\"></a></span>From the KinematicState object, the <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">Parameters (ProjectItem) *</a> property returns a <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> object.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-345E769F-33E7-4FFA-BDA8-ADFE82EC0EB8\"></a></span>The <a href=\"#!/url=./si_om/ParameterCollection.Item.html\">Item (ParameterCollection) *</a> property returns a <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C1D1BAB9-E3C8-4122-BD2A-93446EED7B5C\"></a></span>The <a href=\"#!/url=./si_om/Parameter.Value.html\">Value (Parameter) *</a> property returns the position.\n\
                  </p> \n\
               </li>\n\
            </ol>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FE986E0D-AC3C-4D8C-B8AA-50B1E791C89F\"></a></span>By using a pointer to the KinematicState object, we save four property calls in our\n\
               script, as we can just reference the created objects in memory. In short scripts the\n\
               savings aren\'t as apparent, but you will really notice the performance improvement\n\
               when you replace a lot of repetitive calls.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";