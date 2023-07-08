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
      <meta name=\"topicid\" content=\"GUID-C392B34F-A03A-4BB2-ACFF-9AD24432ED19\" />\n\
      <meta name=\"indexterm\" content=\"current selection: accessing: using the object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"getting: current selection: using the object model or C++ API\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Finding Out What\'s Currently Selected</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C392B34F-A03A-4BB2-ACFF-9AD24432ED19\"></a></span><div class=\"head\">\n\
            <h1>Finding Out What\'s Currently Selected </h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9CF8B68-4C1A-4116-8D9E-D3AD9E1C3DE7\"></a></span>There is a difference between how you get the list of selected objects vs. components.\n\
               Basically, you can access selected objects by treating the <a href=\"#!/url=./si_om/Selection.html\">Selection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Selection.html\">Selection</a> object as a collection or array of currently selected objects, so you can enumerate\n\
               over them or access them directly as an item in the collection/array (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_AccessListOfSelectedObjects.htm\">Accessing the List of Selected Objects</a></span>).\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-00E800CE-49B9-42E9-A609-917AD913A37D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F64A96C-1FB0-4587-AFB0-7BC1A22210D4\"></a></span>You can also find out which selection filter is currently selected via the <a href=\"#!/url=./si_om/Selection.html\">Selection</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Selection.html\">Selection</a> object (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_GetCurrentSelectionFilter.htm\">Getting the Current Selection Filter</a></span>).\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6949E394-DF48-49B9-A731-B169009F1A95\"></a></span>However, when components are selected, for C# and scripting you need to use the <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a> interface to convert the selection to its relevant component collection (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_AccessListOfSelectedComponents_Scripting.htm\">Accessing the List of Selected Components via the Object Model</a></span>). For the C++ API, it is more complicated, since the <a href=\"#!/url=./si_cpp/classXSI_1_1SubComponent.html\">SubComponent</a> class is not yet fully implemented, you need to use the <a href=\"#!/url=./si_cpp/classXSI_1_1CComAPIHandler.html\">CComAPIHandler</a> to invoke the .NET/scripting implementation of <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a> (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_AccessListOfSelectedComponents_CPP.htm\">Accessing the List of Selected Components via the C++ API</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_WorkWithSelectionArray.htm\">Working with the Selection List as a CRefArray (C++ API only)</a></span>).\n\
            </p>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_Select_AccessListOfSelectedObjects.htm\">Accessing the List of Selected Objects</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_Select_AccessListOfSelectedComponents_Scripting.htm\">Accessing the List of Selected Components via the Object Model</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_Select_AccessListOfSelectedComponents_CPP.htm\">Accessing the List of Selected Components via the C++ API</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_Select_WorkWithSelectionArray.htm\">Working with the Selection List as a CRefArray (C++ API only)</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_Select_GetCurrentSelectionFilter.htm\">Getting the Current Selection Filter</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";