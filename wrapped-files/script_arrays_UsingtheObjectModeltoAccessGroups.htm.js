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
      <meta name=\"topicid\" content=\"GUID-2B47CAB9-C1A4-4663-AAEA-8DEA02001557\" />\n\
      <meta name=\"indexterm\" content=\"organizing scene items with groups (through scripting)\" />\n\
      <meta name=\"indexterm\" content=\"object model: using groups\" />\n\
      <meta name=\"indexterm\" content=\"groups: accessing using\" />\n\
      <meta name=\"indexterm\" content=\"the object model\" />\n\
      <meta name=\"indexterm\" content=\"To create a group with the object model\" />\n\
      <meta name=\"indexterm\" content=\"To add items to a group with the object model\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the Object Model to Access Groups</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-2B47CAB9-C1A4-4663-AAEA-8DEA02001557\"></a></span><div class=\"head\">\n\
            <h1>Using the Object Model to Access Groups</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E6EDBDBF-C1BC-4388-ACFB-5E958067C4FC\"></a></span>Currently, the object model only supports creating a group and adding members to it.\n\
               If you need to remove members from a group or remove the group itself, you can use\n\
               the native Softimage commands:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C00AE004-ECF6-4254-90FF-0898527BB41A\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingNativeXSICommandsToAccessGroups.htm#WS51A0B8DF367E804591A913DDA18BECD3-0034\">To remove items from a group</a></span>.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9FEC305E-AD7F-45BE-AD4B-56D39B60EC0F\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingNativeXSICommandsToAccessGroups.htm#WS51A0B8DF367E804591A913DDA18BECD3-0035\">To remove a group from the scene</a></span>.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-67742BEC-EAE2-48C5-B738-96B1BF80C3B0\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D7662A7E-05CD-4CCD-845D-FCF69892AA0E\"></a></span>Don\'t forget that if you use object pointers when working with the native Softimage\n\
                     commands, you can mix many of the object model functions and the native Softimage\n\
                     commands seamlessly. The examples of using the groups commands demonstrate how to\n\
                     use object pointers.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0038\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3223F1BA-40EA-4DCC-83C3-34D18C0D2AB2\"></a></span> To create a group with the object model\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Set my workspace\n\
Set oRoot = ActiveProject.ActiveScene.Root\n\
\n\
\' Create a new model called \"MyModel\"\n\
Set oModel = oRoot.AddNull( \"MyModel\" )\n\
\n\
\' Create a new polymesh sphere called \"MySphere\"\n\
Set oSphere = oRoot.AddGeometry( \"Sphere\", _\n\
	\"MeshSurface\", \"MySphere\" )\n\
\n\
\' Create a new group containing the sphere\n\
Set oGroup = oRoot.AddGroup( oSphere, \"MyGroup\" )\n\
\n\
\' Print the names of the group members\n\
LogMessage oGroup &amp; \" contains... \" \n\
For Each o In oGroup.Members\n\
   LogMessage o.Name\n\
Next</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0039\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-646F643A-F51E-4BC7-B8B6-25B34AA43877\"></a></span> To add items to a group with the object model\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Create a torus called \"MyTorus\"\n\
Set oTorus = oRoot.AddGeometry( \"Torus\", _\n\
   \"MeshSurface\", \"MyTorus\" )\n\
\n\
\' Add it to the group\n\
Set oGroup = oGroup.AddMember( oTorus )</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";