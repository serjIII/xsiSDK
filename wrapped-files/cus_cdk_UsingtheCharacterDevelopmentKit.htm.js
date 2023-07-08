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
      <meta name=\"topicid\" content=\"GUID-AB869429-2EBB-4EB9-B153-881FF04058CF\" />\n\
      <meta name=\"indexterm\" content=\"For More Information\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the Character Development Kit</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-AB869429-2EBB-4EB9-B153-881FF04058CF\"></a></span><div class=\"head\">\n\
            <h1>Using the Character Development Kit</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8DFB669-238B-46A9-A946-1542D4330FFF\"></a></span>Softimage provides a development kit that allow you to create a customized character\n\
               rig based on the default ones provided. The development kit not only lets you automate\n\
               the choices you have for the attributes you want for your rig, such as whether to\n\
               use a quaternion spine or not, but allows you to customize the rig completely to suit\n\
               your needs. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-87FB5FD1-66EA-4398-990F-64AF4C07436F\"></a></span>The SDK is object-oriented, which means that you concentrate on building the components\n\
               of the rig (torso, belly, arm, hand, spine, hip, tail, leg, dog leg, and foot) without\n\
               worrying about many of the rig\'s implementation details. Moreover, you can mix and\n\
               match each component as you like—create a two-headed monster, an eight-armed octopus,\n\
               a multi-legged centipede, or any creature your production demands. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-20AFC701-8284-400D-B52A-E01C6901434C\"></a></span>Also, because the rig creation process is scriptable, it\'s easier to produce large\n\
               numbers of rigged characters that suit your production needs exactly and in a predictable\n\
               manner. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-0004\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2ADEDB88-7FE6-4B75-A8AA-62B117EFE85C\"></a></span> For More Information\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"UL_8B118ECC829C420BA0BC6D39275D95B7\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-69DBF332-5C75-4293-B8CC-DA0CA42906F3\"></a></span>For detailed information about the behavior of the each of the components of the rigs,\n\
                        see Character Rigging in the Softimage User\'s Guide. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E0D9DA79-781C-4193-A5D3-F38E2981F1F4\"></a></span>For detailed information about the commands available to build rigs, see the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";