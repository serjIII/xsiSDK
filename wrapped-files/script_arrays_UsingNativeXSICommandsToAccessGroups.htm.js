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
      <meta name=\"topicid\" content=\"GUID-ABF8AD98-03C5-4025-8430-61E2F721A430\" />\n\
      <meta name=\"indexterm\" content=\"scripting: groups\" />\n\
      <meta name=\"indexterm\" content=\"groups: accessing using\" />\n\
      <meta name=\"indexterm\" content=\"native Softimage scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"To remove items from a group\" />\n\
      <meta name=\"indexterm\" content=\"RemoveFromGroup command: using\" />\n\
      <meta name=\"indexterm\" content=\"commands: RemoveFromGroup\" />\n\
      <meta name=\"indexterm\" content=\"To remove a group from the scene\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using Native Softimage Commands To Access Groups</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-ABF8AD98-03C5-4025-8430-61E2F721A430\"></a></span><div class=\"head\">\n\
            <h1>Using Native Softimage Commands To Access Groups</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7CB6DF1-AC35-4748-900C-E39D4F0FDCBE\"></a></span>There are four basic actions when it comes to working with groups:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-85516EB7-D75B-46E7-A9BE-CD87C11C117F\"></a></span>Creating a group.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB2E1BFC-EBFD-44A6-96EB-DAC401B732AD\"></a></span>Adding members to an existing group.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A054853-DC4C-4BDD-806F-F8FFCE7D823D\"></a></span>Removing members from an existing group.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-747754C9-1726-4E22-A6FA-3B34021C2C4C\"></a></span>Removing a group from the scene.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CC00FF1-6796-486D-BAEE-1686E2E5FDCD\"></a></span>The next four sections provide demonstrations of how to do each of these actions,\n\
               and all four code fragments may be run at once.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0032\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8447B33D-48B3-48D5-8D76-BD9B5BB5C8E6\"></a></span>To create a group with native Softimage commands\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Create a new model called \"MyModel\"\n\
Set oModel = GetPrim( \"Null\", \"MyModel\" )\n\
\n\
\' Create a new polymesh sphere called \"MySphere\"\n\
Set oSphere = CreatePrim( \"Sphere\", _\n\
	\"MeshSurface\", \"MySphere\" )\n\
\n\
\' Create a new group containing the model and sphere\n\
Set oGroup = CreateGroup( \"MyGroup\", oSphere &amp; \", \" _\n\
&amp; oSphere &amp; \".polymsh.cls.Point\", oModel )</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0033\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-828791DE-FB77-40A8-8DC8-EE88F5EC3A80\"></a></span>To add items to a group with native Softimage commands\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Create a torus called \"MyTorus\"\n\
Set oTorus = CreatePrim( \"Torus\", _\n\
   \"MeshSurface\", \"MyTorus\" )\n\
\n\
\' Add it to the group\n\
AddToGroup oGroup, oTorus</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0034\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CE17767C-641D-407E-B9F2-343799A9C979\"></a></span> To remove items from a group\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Remove \"MySphere\" from \"MyGroup\"\n\
RemoveFromGroup oGroup, oSphere</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-BEF23883-6589-4372-A9C4-F10C87AE1351\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A2E3546-D72D-4072-8F5E-99D44ECD2702\"></a></span>If you added an object in branch mode to a group, to remove it you must select it\n\
                        properly, then use the <em class=\"strong\">RemoveFromGroup</em> command without any parameters. For example:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
SelectObj \"null\", \"BRANCH\", True\n\
AddToGroup \"Group\"\n\
\' ...\n\
SelectObj \"Group\"\n\
AddToSelection \"null\", \"BRANCH\"\n\
RemoveFromGroup</pre></div> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0035\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-563F4CCF-FF84-42F9-97A1-275AFAEB92D6\"></a></span> To remove a group from the scene\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">RemoveGroup oGroup</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";