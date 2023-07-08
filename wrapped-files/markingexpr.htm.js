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
      <meta name=\"topicid\" content=\"GUID-12F30A1F-BB07-42CB-81B4-E10A0491820B\" />\n\
      <meta name=\"indexterm\" content=\"Marked Parameter List\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Marked Parameter List</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-12F30A1F-BB07-42CB-81B4-E10A0491820B\"></a></span><div class=\"head\">\n\
            <h1> Marked Parameter List</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C300E714-02F2-4EE5-BE14-690FDD47DE43\"></a></span>A marked parameter list is a string that contains a list of relative paths for objects\n\
               and parameters. Marking parameters is a way of selecting which parameters you want\n\
               to use for a specific task. For example you may want to only key the local X and Y\n\
               translation of an object. If you mark the X and Y translation parameters each time\n\
               you save a key only the X and Y translation parameters will be keyed. The current\n\
               marked parameter list is independent of the current selection. This means that you\n\
               can use the same marking list when you change the selection, if you mark the parameters\n\
               of a sphere, then select a cube, the same parameters are marked on the cube; parameters\n\
               that do not apply are ignored.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E38970C6-0ACF-4F75-84FB-B36774A660D6\"></a></span>A marking list can mark a single object or parameter. For example, if the cube object\n\
               is selected then the string \"kine.local.posx\" marks the local X translation of the\n\
               cube object. Or a marking list can mark many parameters. For example, the following\n\
               marks the local X, Y, and Z translations:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\"kine.local.posx, kine.local.posy, kine.local.posz\"</pre></div>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-59C1FC6F-EE86-40F0-971B-1D20BC1FF152\"></a></span><p class=\"table-heading\">Syntax keyword</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DFD8417F-4FB8-4D29-96AE-30982BFC078A\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E8838B56-7169-4EB3-B34F-6FA32376A895\"></a></span><p class=\"table-body\">,</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AC66C583-A0EA-49DB-B9CF-D8DECDA51F57\"></a></span><p class=\"table-body\">Separates items in a list. For example:</p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\"cube.kine.local.posx, cube.kine.local.posy, cube.kine.local.posz\"</pre></div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF23A765-C5E9-4A01-AFAC-9596FDBAE4D9\"></a></span>A collection or object can be used in place of a string in which case the marking\n\
               list to constructed is relative to the current selection. For example:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' Mark all the kinematics local parameters\n\
	Set o = GetPrim( \"Null\" )\n\
	SetMarking o.Kinematics.Local.Parameters</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";