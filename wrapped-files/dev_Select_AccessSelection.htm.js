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
      <meta name=\"topicid\" content=\"GUID-9883FA6B-AB39-4ECD-9ADE-1A9793376E75\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing the Selection</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9883FA6B-AB39-4ECD-9ADE-1A9793376E75\"></a></span><div class=\"head\">\n\
            <h1>Accessing the Selection</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D7F4F493-780F-4FCE-A921-C0775F9D35AF\"></a></span>The <a href=\"#!/url=./si_om/Selection.html\">Selection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Selection.html\">Selection</a> object is available from the <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Application.html\">XSIApplication</a> object via the <a href=\"#!/url=./si_om/XSIApplication.Selection.html\">XSIApplication.Selection</a> or Application::GetSelection property: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++ API\n\
Selection sel( Application.GetSelection() );\n\
\n\
// C# \n\
CXSIApplication app = new CXSIApplication();\n\
Selection sel = app.Selection;\n\
</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-BDCFFE5D-099F-48E9-A428-27E04A22276A\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-87F9090B-3761-4AF4-852E-EB08BD768FED\"></a></span>For JScript and VBScript, the <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a> object is implicit (meaning it doesn\'t need to be specified). For Python, you must\n\
                     use it explicitly: \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript -- these versions are both valid\n\
var sel = Selection;\n\
var sel = Application.Selection;\n\
\n\
\' VBScript -- these versions are both valid\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> sel = Selection\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> sel = Application.Selection\n\
\n\
# Python -- only this syntax may be used\n\
sel = Application.Selection\n\
</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";