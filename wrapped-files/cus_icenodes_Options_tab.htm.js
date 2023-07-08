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
      <meta name=\"topicid\" content=\"GUID-C951EE4A-EA92-49B9-82A3-9E496B898F34\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Options</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C951EE4A-EA92-49B9-82A3-9E496B898F34\"></a></span><div class=\"head\">\n\
            <h1>Options</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-84F9D160-BB9B-4982-968D-0C14D55CB3F7\"></a></span>You can set some options for how the data will be evaluated using the <span class=\"MenuCascade\" id=\"GUID-80510776-1ABE-4C9A-AB5B-81338D313320\">Options</span> tab. Enabling these options will generate code containing calls to the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html#SetAsTimeVarying\">ICENodeContext::SetAsTimeVarying</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html#SetAsElementDataVarying\">ICENodeContext::SetAsElementDataVarying</a> functions.\n\
            </p><img src=\"../images/GUID-211CA25C-E95F-4666-9944-D6EBFFEE05AC-low.png\" /><div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-005C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-346ACA67-3B6B-47D5-B20D-1AC97F2E601E\"></a></span>Time Varying\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-81D086AB-7A0D-4E3C-AE98-89DFCDEBDA2E\"></a></span>By default, the output port being evaluated is dependent on the incoming data. If\n\
                  the data varies at each evaluation then the output data is considered to be non-constant.\n\
                  If the data does not vary at each evaluation then the output data is constant.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4095646F-561D-4074-833F-51721E8D8CB1\"></a></span>This option can be used to remove this dependency by setting the output data to non-constant\n\
                  regardless of the incoming data current state; for example, when a node needs to output\n\
                  data randomly regardless of the input data state.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-7B59D272-E2B3-471D-A33A-DFD760FB2182\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-45850530-FF3F-42F3-8458-5B8175F2BC35\"></a></span>Using this option could lead to performance issues when it is not strictly required.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-005D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8CB51C45-2907-42EE-9D3B-B5DEF24C25FE\"></a></span>Element Data Varying\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE974B14-82D5-4850-8859-0F03497887D1\"></a></span>Forces the node to evaluate frame by frame regardless of the overall graph state.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";