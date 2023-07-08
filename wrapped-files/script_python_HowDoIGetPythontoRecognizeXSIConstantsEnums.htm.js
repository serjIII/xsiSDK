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
      <meta name=\"topicid\" content=\"GUID-A073F3C3-5473-4D79-B7C9-88E22EABB8A5\" />\n\
      <meta name=\"indexterm\" content=\"Python: using Softimage constants\" />\n\
      <meta name=\"indexterm\" content=\"global constants: using in Python\" />\n\
      <meta name=\"indexterm\" content=\"constants: using Softimage constants and enums\" />\n\
      <meta name=\"indexterm\" content=\"enums: using Softimage constants and enums\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Getting Python to Recognize Softimage Constants (Enums)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"constant\", \"si_cpp/group__RenderMapDefine.html#ga3be3199d36669028e9a1169e4cc7ee88\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A073F3C3-5473-4D79-B7C9-88E22EABB8A5\"></a></span><div class=\"head\">\n\
            <h1>Getting Python to Recognize Softimage Constants (Enums)</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-C12F3436-A0C5-4A41-AE39-914EC82BDA2B\"></a></span>One of the idiosyncrasies of using Python with Softimage is that you need to import\n\
            the Softimage constants (including enums) typelib as a custom Python module, then\n\
            refer to each constant (or enum) as a member of the constants module. This example\n\
            demonstrates how to use constants in a Python script: \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# Import the Softimage constants module\n\
from win32com.client import <em class=\"strong\">constants</em>\n\
\n\
root = Application.ActiveSceneRoot\n\
kids = root.Children\n\
\n\
# Then prefix the placeholder word constants to the Softimage <a href=\"javascript:void(0)\" data=\"constant\" class=\"a_multireflink\">constant</a> or enum\n\
nulls = kids.Filter( \"\", <em class=\"strong\">constants</em>.siNullPrimitiveFamily )\n\
for n in nulls :\n\
   Application.LogMessage( n, <em class=\"strong\">constants</em>.siComment )\n\
	\n\
# The above snippet returns:\n\
#Camera_Root\n\
</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-A0C061CC-8A46-4041-A8AC-FE1E1EBF7D74\"></a></span>If you dislike typing, you can use a small keyword or letter as a reference to the\n\
            constants instead: \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
from win32com.client import constants as <em class=\"strong\">c</em>\n\
#...&lt;snip&gt;...\n\
Application.LogMessage( n<em class=\"strong\">, c.</em>siComment )\n\
</pre></div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";