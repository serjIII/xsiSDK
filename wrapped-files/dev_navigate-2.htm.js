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
      <meta name=\"topicid\" content=\"GUID-DA2AA784-BD02-40E5-B60F-137464CDFE39\" />\n\
      <meta name=\"indexterm\" content=\"navigation: tree crawling\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Tree Crawling</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DA2AA784-BD02-40E5-B60F-137464CDFE39\"></a></span><div class=\"head\">\n\
            <h1> Tree Crawling</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSCCB38D56FBFEDE49938B52B2D83F09E3-0006\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-33A3FA99-E626-4336-9FA3-58EDB252DA8A\"></a></span>SIObject.NestedObjects Property (Object Model) and SIObject::GetNestedObjects Function\n\
                  (C++ API)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-46370F27-B627-4255-A615-3E652E7A86C8\"></a></span>The <a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">SIObject.NestedObjects</a> object model property and the <a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html#GetNestedObjects\">SIObject::GetNestedObjects</a> function return elements below the current object (ie., children). The nested objects\n\
                  returned by the function are scene objects such as Property, Parameter, X3DObject,\n\
                  etc.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-56E261ED-E555-4D0E-98A9-46C02C1F4AEB\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD79B9BF-9FAA-4240-BB34-1F83AEE64D5D\"></a></span>To return elements above the current object (ie., parents), you can use <a href=\"#!/url=./si_om/SIObject.Parent.html\">SIObject.Parent</a> or <a href=\"#!/url=./si_om/ProjectItem.Owners.html\">ProjectItem.Owners</a> with the object model and <a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html#GetParent\">SIObject::GetParent</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetOwners\">ProjectItem::GetOwners</a> with the C++ API.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSCCB38D56FBFEDE49938B52B2D83F09E3-0007\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DA9B9E5E-038F-497F-A698-E69478A99AF5\"></a></span>EnumElements (Scripting Command)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E91651D8-8421-41FC-94CE-B5C589CF2A0C\"></a></span>The <a href=\"#!/url=./si_cmds/EnumElements.html\">EnumElements</a> command returns a list of elements either above or below the specified object. Normally,\n\
                  when you use one of the <em class=\"strong\">FindChild</em> methods on a scene object, it only considers other scene objects underneath. However,\n\
                  EnumElements makes it much easier to crawl up and down the hierarchy because it treats\n\
                  properties and parameters like children.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";