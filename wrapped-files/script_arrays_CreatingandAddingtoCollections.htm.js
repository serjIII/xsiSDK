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
      <meta name=\"topicid\" content=\"GUID-9FD7BD78-092B-4AC1-9D10-FDDFD271F831\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): adding to\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): creating\" />\n\
      <meta name=\"indexterm\" content=\"To create an empty collection\" />\n\
      <meta name=\"indexterm\" content=\"To add items to a collection with the Add method\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): adding items using\" />\n\
      <meta name=\"indexterm\" content=\"Collection.Add\" />\n\
      <meta name=\"indexterm\" content=\"To add items to a collection with the CollectionItem.Value property\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): adding items using\" />\n\
      <meta name=\"indexterm\" content=\"CollectionItem.Value\" />\n\
      <meta name=\"indexterm\" content=\"To create a populated collection with wildcards\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating and Adding to Collections</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9FD7BD78-092B-4AC1-9D10-FDDFD271F831\"></a></span><div class=\"head\">\n\
            <h1>Creating and Adding to Collections</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC5D9DAD-DB12-4414-A4DD-A9702A788177\"></a></span>You can create a blank collection and add items (<em class=\"strong\">CollectionItem</em>) to it with the <em class=\"strong\">Add</em> method, or by using the <em class=\"strong\">Value</em> property of the <em class=\"strong\">CollectionItem</em> object. You can also create a populated collection by using wildcards.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0025\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FF39CADB-EA26-4712-AE19-4DFCB6B79CB9\"></a></span> To create an empty collection\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6D45D24-D1DE-4CA0-AF8C-D413C822FAEA\"></a></span>To create a collection in Softimage, you can use <em class=\"strong\">CreateObject</em> (a VBScript command) to create a generic <em class=\"strong\">XSICollection</em> object:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Create XSI.Collection object \n\
Set oCollection = CreateObject( \"XSI.Collection\" )</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0026\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-165D9650-770D-4C03-9DDC-CC085EF31A7C\"></a></span> To add items to a collection with the Add method\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-55A9911D-3CE0-4361-AAE7-8A162D1411A6\"></a></span>To add an item to a collection, use the collection\'s <em class=\"strong\">Add</em> method. For example, if <em class=\"strong\">oCollection</em> is a collection:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oCollection.Add \"CameraInterest\"</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0027\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1D4E6C7D-BCEB-4B1E-AD16-57743D778C2D\"></a></span> To add items to a collection with the CollectionItem.Value property\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA26BCF4-9A3F-41E8-BE61-92AB93895DD9\"></a></span>You can also create a <em class=\"strong\">CollectionItem</em> and set its value. For example, if you already created <em class=\"strong\">oCollection</em>:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oItem = CreateObject( \"XSI.CollectionItem\" )\n\
oItem.value = \"Camera\"\n\
oCollection.Add oItem</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0028\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-611D8065-6CE6-461B-994D-DA03017D027E\"></a></span> To create a populated collection with wildcards\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oLayers = CreateObject(\"XSI.Collection\")\n\
oLayers.Items = \"Layers.List.*\"\n\
For Each oLayer In oLayers\n\
   LogMessage oLayers.Name\n\
Next</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";