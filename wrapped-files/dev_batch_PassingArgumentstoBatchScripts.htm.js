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
      <meta name=\"topicid\" content=\"GUID-2028940B-8A08-43F7-BBD1-1234D33F3DA8\" />\n\
      <meta name=\"indexterm\" content=\"batch scripting: passing arguments in batch\" />\n\
      <meta name=\"indexterm\" content=\"arguments: passing in batch scripts\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Passing Arguments to Batch Scripts</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-2028940B-8A08-43F7-BBD1-1234D33F3DA8\"></a></span><div class=\"head\">\n\
            <h1>Passing Arguments to Batch Scripts</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B61C1C07-BAA9-4344-A82E-3C6640294827\"></a></span>In batch mode, scripts cannot require any interactive input such as prompting for\n\
               a file or path — this does not include property editors that open automatically as\n\
               you work in the interface. For example, the following code would generate an error\n\
               if it is run in batch mode. This is because the <em class=\"strong\">OpenScene</em> command, when invoked without any arguments, displays a dialog box that prompts for\n\
               a scene to import.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
sub MyBatchScript()\n\
	OpenScene	\' error\n\
end sub\n\
\n\
\' Main\n\
MyBatchScript</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C50DC445-29D8-4A1D-AE18-D4D7588422AF\"></a></span>There are two ways to deal with this. The first way is to explicitly provide all arguments\n\
               in the script. For example:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
OpenScene \"C:\\MyProject\\MyScene.scn\", false</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-52D6D4FC-D69B-47B6-A480-13A533940197\"></a></span>In this case, the <em class=\"strong\">false</em> argument is a flag that indicates that there should be no prompt to save changes\n\
               to the current scene. There is a similar flag for <span class=\"MenuCascade\" id=\"GUID-E8212295-CFBC-4875-96D8-2B801ED956AB\">DeleteAll</span>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A245AC7D-7229-4945-A253-11C7D1EA65FB\"></a></span>The other way is to declare any necessary parameters as arguments in a procedure declaration\n\
               and then pass them on the command line when the script is run in batch mode. For example,\n\
               in VBScript you would declare the arguments for a procedure as follows:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Sub myproc(myargname1, myargname2)\n\
	...\n\
End Sub\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B08F2C79-E7F3-44AB-9776-0DFDF617454D\"></a></span>At a command prompt, you would then run the script as shown below:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
xsi -script <em class=\"mild\">myscriptfile</em>.vbs -main myproc -args -myargname1 <em class=\"mild\">myargvalue1</em> -myargname2 <em class=\"mild\">myargvalue2</em></pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";