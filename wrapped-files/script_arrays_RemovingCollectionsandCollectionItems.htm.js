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
      <meta name=\"topicid\" content=\"GUID-39292191-CEBA-41C3-A02D-ABEA339179DE\" />\n\
      <meta name=\"indexterm\" content=\"deleting: collections (in scripting)\" />\n\
      <meta name=\"indexterm\" content=\"removing: collections (in scripting)\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): removing\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): removing items\" />\n\
      <meta name=\"indexterm\" content=\"To remove an item with the Remove method\" />\n\
      <meta name=\"indexterm\" content=\"To empty a collection with the RemoveAll method\" />\n\
      <meta name=\"indexterm\" content=\"To remove a collection from the scene\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Removing Collections and CollectionItems</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-39292191-CEBA-41C3-A02D-ABEA339179DE\"></a></span><div class=\"head\">\n\
            <h1>Removing Collections and CollectionItems</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FAF35016-72A5-4C9E-8F69-B3AB88D32258\"></a></span>When you want to remove individual collection items from a collection, you can use\n\
               the <em class=\"strong\">Remove</em> method. You can also remove the collection from the scene using the <em class=\"strong\">RemoveChild</em> method of the <em class=\"strong\">Model</em> (on the scene root) object or use the <em class=\"strong\">RemoveAll</em> method to leave the collection empty (but still in the scene).\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-002B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-86531943-04BE-4E64-9639-961B28539A7C\"></a></span> To remove an item with the Remove method\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D393601-E59C-4D8C-80E3-AB53F0EBADFA\"></a></span>To remove an item from a collection, use the collection\'s <em class=\"strong\">Remove</em> method. For example, if you already created <em class=\"strong\">oCollection</em> and <em class=\"strong\">oItem</em>:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oCollection.Remove \"CameraInterest\"\n\
oCollection.Remove item\n\
LogMessage \"Collection= \" &amp; oCollection</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-002C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D8A6F314-A9FD-4A67-9C79-2B0AAAAEED9E\"></a></span> To empty a collection with the RemoveAll method\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-12D3FBDB-6FC9-483B-8A81-CC3AB82D27D1\"></a></span>To remove all items from a collection, use the collection\'s <em class=\"strong\">RemoveAll</em> method. For example, if you already created <em class=\"strong\">oCollection</em>:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oCollection.RemoveAll\n\
LogMessage \"Object Count = \" &amp; oCollection.Count</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-002D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C8F61163-CF3C-437B-ADCB-A475C324D1A8\"></a></span> To remove a collection from the scene\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8EA13958-EDF7-4714-B691-A580F94E516E\"></a></span>To remove the collection itself from the scene, use the RemoveChild method of the\n\
                  root. For example, if you already defined the <em class=\"strong\">oRoot</em> and <em class=\"strong\">oCollection</em> objects:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oRoot.RemoveChild( oCollection )</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";