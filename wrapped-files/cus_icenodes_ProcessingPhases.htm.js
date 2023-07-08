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
      <meta name=\"topicid\" content=\"GUID-AD03B125-774A-417D-BA54-0F4AF1D8A608\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Processing phases</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-AD03B125-774A-417D-BA54-0F4AF1D8A608\"></a></span><div class=\"head\">\n\
            <h1>Processing phases</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB25DCD4-8397-4520-BB7B-B8451EDCE578\"></a></span>The processing of custom <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a> is done in several phases, where a specific callback function is assigned to each\n\
               phase. Each callback takes a <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeContext.html\">ICENodeContext</a> object as argument, which is used to access the required data for processing the\n\
               phase:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D822C25-B4D1-4987-8244-B2A5C6C501C3\"></a></span> <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-00D480EF-761F-4349-92E0-C2E9801C21E7\"></a></span>This callback is called during a single-threaded phase where memory is usually allocated\n\
                     in preparation for the multi-threaded evaluation phase. This callback is optional.\n\
                     For example, we can use this callback to attach some pre-thread data to a node.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4DEB058F-F104-4135-950A-5B4D887287D7\"></a></span> <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5E620224-D044-4294-A9B3-D7A424A057E3\"></a></span>This callback must be implemented for each registered ICENode. The evaluation phase\n\
                     can be called in single-threaded or in multi-threaded context depending on the threading\n\
                     processing mode in use. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes-1.htm\">Handling Port Polymorphism</a></span>.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF173855-678D-4E01-8012-24F02E8E50A9\"></a></span> <a href=\"#!/url=./si_cmds/cb_ICENode_EndEvaluate.html\">EndEvaluate</a> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-35235A9B-8637-4C96-A347-CCF55D1C5378\"></a></span>This callback is a single-threaded task for freeing up memory, cleaning resources,or\n\
                     anything required to undo the work performed in <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a>. This callback is also optional.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-86FB6FF2-C9EC-4F62-8518-E469849DB9C8\"></a></span> <a href=\"#!/url=./si_cmds/cb_ICENode_SubmitEvaluationPhaseInfo.html\">SubmitEvaluationPhaseInfo</a> \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D25AD900-F6A1-4965-A973-0682FBB11249\"></a></span>This callback is required in the multi-phase evaluation mode for specifying the ports\n\
                     to be pulled for the current evaluation phase.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";