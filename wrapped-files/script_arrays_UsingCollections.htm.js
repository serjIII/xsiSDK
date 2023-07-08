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
      <meta name=\"topicid\" content=\"GUID-2B524EB4-C1BF-4B86-B25A-8E32970BFC87\" />\n\
      <meta name=\"indexterm\" content=\"object model: using collections\" />\n\
      <meta name=\"indexterm\" content=\"scripting: collections\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): using\" />\n\
      <meta name=\"indexterm\" content=\"To get information about a collection using VBScript\" />\n\
      <meta name=\"indexterm\" content=\"To get information about a collection using JScript\" />\n\
      <meta name=\"indexterm\" content=\"To get information about a collection using Python\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using Collections</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-2B524EB4-C1BF-4B86-B25A-8E32970BFC87\"></a></span><div class=\"head\">\n\
            <h1>Using Collections</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-596CA3B9-8D1A-4BAE-9961-8B7115D6CAD3\"></a></span>A collection is a group of objects. For example, the selection list is stored as a\n\
               collection. \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Get the selection using the native Softimage commands\n\
Set oList = GetValue( \"SelectionList\" )\n\
\n\
\' Get the selection using the object model\n\
Set oList = Selection</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3442C178-D3C2-4205-9079-0257A547411E\"></a></span>Whether you get the selection with commands or the object model, the object that is\n\
               returned in both these examples (<span class=\"code\" translate=\"no\">oList</span>) is a valid collection, even if it has no members (and the Count property returns\n\
               0). \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Print out the number of items in the selection\n\
LogMessage oList.Count &amp; \" items are selected.\"</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EFB40156-42B2-4E54-84E9-048BF3129F52\"></a></span>In the code snippet above, <span class=\"code\" translate=\"no\">oList.Count</span> gives you the number of objects in the selection collection. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C276AE3B-9531-4477-8CCE-ECBEBD41BE56\"></a></span>Sometimes a collection is empty. For example, you may try to get a collection of all\n\
               CurveLists in a scene that contains none (maybe on purpose!). In that case, an empty\n\
               collection is returned. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-48B663AC-FFAE-4EE9-AEBC-E2FBA2975CBC\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6CAD90B0-D41E-4B9F-8D4C-A06E8896C331\"></a></span>Empty collections can sometimes cause errors. For example, if you are looking for\n\
                     something that is not there, either the SIFilter command or the Filter method return\n\
                     nothing. As you may suspect, your script will fail if you try to use an invalid object\n\
                     or collection (nothing). For this reason, you need to test the return value before\n\
                     trying to work with it any further. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_WhattoWatchOutforwithObjectsandCollections.htm#GUID-E279711B-7202-4418-B49C-F049F2FBC8ED\">What to Watch Out for with Objects and Collections</a></span>. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-40FF453D-15FD-4FB0-B52A-BBD10A11658E\"></a></span>Many Softimage commands and objects use collections to store parameters. The following\n\
               examples iterate over Softimage\'s selection list and log the name of each selected\n\
               object. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-001F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0C97C41F-645A-4F25-B195-897F068A6974\"></a></span> To get information about a collection using VBScript\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7173BDD8-955A-41DC-B531-997831029DE7\"></a></span>VBScript offers two ways to iterate over collections. One way uses the For Each statement.\n\
                  \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
For Each oSel In Selection\n\
   LogMessage oSel\n\
Next</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D113D98B-6345-4524-ADF6-DC7D889B60F5\"></a></span>The other way uses the For statement to index the items in the collection. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oSelList = Selection\n\
For i = 0 To oSelList.Count - 1\n\
   LogMessage oSelList(i)\n\
Next</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0020\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B3A12CD5-D91B-47D0-A656-861EC6A081B1\"></a></span> To get information about a collection using JScript\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C69FD2D-47FC-4734-BFEB-003E599FFF0E\"></a></span>JScript offers two ways to iterate over collections. One way uses the For statement\n\
                  to index the items in the collection. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oSelList = Selection;\n\
for (iSel = 0; iSel &lt; oSelList.Count; ++iSel) {\n\
   LogMessage(oSelList(iSel));\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7274CFE4-A30A-4F0A-8DF2-E9A359AB58D6\"></a></span>The other way uses the Enumerator object. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
e = new Enumerator(Selection);\n\
for (; !e.atEnd(); e.moveNext()) {\n\
   LogMessage(e.item());\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0022\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9AA07F8F-1CAF-4FFE-BCE0-DCBBAFCF6107\"></a></span> To get information about a collection using Python\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF4D87F9-80D1-4462-A6CD-674BCCBEE288\"></a></span>Python supports iteration over a collection using the For statement to index the items\n\
                  in the collection. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oSelList = Application.Selection\n\
for iSel in range(oSelList.Count):\n\
   Application.LogMessage(oSelList.Item(iSel).FullName)</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";