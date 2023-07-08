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
      <meta name=\"topicid\" content=\"GUID-EEC9E669-0124-4D34-A510-6B6F025A748A\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Custom ICENode Processing</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EEC9E669-0124-4D34-A510-6B6F025A748A\"></a></span><div class=\"head\">\n\
            <h1>Custom ICENode Processing</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D5654F9B-1093-4137-9637-341106013548\"></a></span>An <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> typically acts as a function by reading the input data, computing new values, filtering\n\
               out the input data, and ultimately setting the output port being evaluated. ICENodes\n\
               are processed in several phases: <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a>, <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> and <a href=\"#!/url=./si_cmds/cb_ICENode_EndEvaluate.html\">EndEvaluate</a>. The <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> phase is the function where the bulk of the ICENode algorithm is implemented and\n\
               the input port data accessed.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-613221A2-507F-46E6-B392-7CF6B8C6CF02\"></a></span>Depending of the current graph configuration, Softimage will determine the size and\n\
               the number of packets to send to the custom <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> for evaluation. This is done in a multi-thread context where packets are processed\n\
               in parallel by the <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> callback. For instance, suppose the portion of a sub-graph, on which a custom ICENode\n\
               is connected, is evaluated in the context of an output mesh geometry of 3800 vertices\n\
               on a 4 CPU machine. The packet size will be determined by Softimage, for example,\n\
               to 500 vertices and will be used during the evaluation as follows:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-838E578D-9B5D-4904-98CE-F3F1533595D5\"></a></span>CPU 1: vertices 0 - 499\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1010A59B-3A24-4A1A-B15A-7F1DD23A851D\"></a></span>CPU 2: vertices 500 - 999\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-00B06DDB-87B6-461D-80BE-DDAECAFFA062\"></a></span>CPU 3: vertices 1000 - 1999\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-158E4B40-1015-4A6C-8AED-E8680BF69033\"></a></span>CPU 4: vertices 2000 - 2499\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-47BF8AF0-9806-4143-95B0-1A3093A5C0C8\"></a></span>As soon as the first CPU finishes, it will get the next available batch. A possible\n\
               scenario could be:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F48DD611-2625-4A64-AB9C-446B36D7BCDB\"></a></span>CPU 3: vertices 2500 - 2999\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-016BE59B-7AB4-4BED-AA37-812E2FEB458B\"></a></span>CPU 2: vertices 3000 - 3499\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B68DB24-A0DD-4849-861F-3B5D69791C77\"></a></span>CPU 1: vertices 3500 - 3800\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6EBA33B7-89DB-4A2C-AA86-4D92665C4094\"></a></span>Each of these packets (or subsets) will go through the graph independently. A <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> might be evaluating for many CPUs at the same time, but the same subset should not\n\
               go through the same ICENode twice.\n\
            </p>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_icenodes_PortDataAccess.htm\">Port Data Access</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_icenodes_PortDataIndexing.htm\">Port Data Indexing</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_icenodes_IteratingOverPortData.htm\">Iterating Over Port Data</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_icenodes_MultiplePortConnections.htm\">Multiple Port Connections</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_icenodes-1.htm\">Handling Port Polymorphism</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_icenodes_UserData.htm\">User Data</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_icenodes_CustomVector3ToScalarExample.htm\">CustomVector3ToScalar Example</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";