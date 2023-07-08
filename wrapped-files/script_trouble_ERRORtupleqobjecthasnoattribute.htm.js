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
      <meta name=\"topicid\" content=\"GUID-D1966533-6FBB-4B49-8050-9C0C55C35A30\" />\n\
      <meta name=\"indexterm\" content=\"ERROR: \'tuple\' object has no attribute\" />\n\
      <meta name=\"indexterm\" content=\"AttributeError: \'tuple\' object has no attribute\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>ERROR : \'tuple\' object has no attribute</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D1966533-6FBB-4B49-8050-9C0C55C35A30\"></a></span><div class=\"head\">\n\
            <h1>ERROR : \'tuple\' object has no attribute</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"> # ERROR : Traceback (most recent call last):\n\
#   File \"&lt;Script Block &gt;\", line 14, in ?\n\
#     app.LogMessage( \"old source: \" + prevsrc.FullName )\n\
# AttributeError: \'tuple\' object has no attribute \'FullName\'\n\
#  - [line 14]</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0E354CC6-E552-4BAE-B09B-7B212609D554\"></a></span>Possible Cause\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E9EFC7E6-8A1A-43AF-AE0B-34053C61A8BD\"></a></span>This is a message that appears when you have provided a single variable for assignment\n\
                  from a method that supports output arguments and return values:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">myvar = surface.ConnectFromFile( \"Blinn\", \"Material Shaders\" )</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3AA77325-A3B3-41AC-833F-6EEE4401EB85\"></a></span>In this case, <a href=\"#!/url=./si_om/Parameter.ConnectFromFile.html\">ConnectFromFile</a> returns both the new shader source and provides the old disconnected shader in the\n\
                  <span class=\"code\" translate=\"no\">PrevDataSource</span> output argument, so the <span class=\"code\" translate=\"no\">myvar</span> variable is being interpreted as a tuple by Python.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0361B19EE7D4E04C89EA22DC1A1D3DCD-0025\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-354BA8FD-6C28-4B05-9A81-E76709F06584\"></a></span>Suggested Solution\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-04F2A4D3-B13D-4703-BCAD-7C97F89F12E2\"></a></span>Use the tuple-style syntax as explained in <a href=\"#!/url=./files/script_python_GettingOutputArgumentsfromMethods.htm\">Getting Output Arguments from Methods</a>.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";