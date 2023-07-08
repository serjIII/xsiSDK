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
      <meta name=\"topicid\" content=\"GUID-42CCABCE-E8D7-4E6F-91DC-3C8D0095A003\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Runtime vs. Self-Installed Custom Operators</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-42CCABCE-E8D7-4E6F-91DC-3C8D0095A003\"></a></span><div class=\"head\">\n\
            <h1>Runtime vs. Self-Installed Custom Operators</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1F714875-6BBA-421D-A39E-16E0A4F7C97E\"></a></span>Although Self-Installed Custom Operators (SICOs) are the preferred way to implement\n\
               custom operators in Softimage, legacy operators continue to be supported and you can\n\
               also build operators on-the-fly, which are known as <em class=\"mild\">runtime</em> operators.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4403893A-DB3C-4FA3-8F78-BAB4C3F85A6F\"></a></span>Runtime operators are embedded directly within the scene. They are similar in implementation\n\
               from SICOs but differ in a few key ways:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5BCDCB0B-B034-45B7-83F3-6C9907F97D32\"></a></span><p class=\"table-heading\">Area</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34525B57-4660-49E7-AB90-F37D51CACD34\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B7A6E8E1-CFEB-45B5-BFD4-EBB362ECF151\"></a></span><p class=\"table-heading\">Runtime</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-393FEDEC-92DD-4E43-AB4A-85F992D0F2CA\"></a></span><p class=\"table-heading\">SICO</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EE377ED7-9E22-4ECD-844B-C5D526EA3087\"></a></span><p class=\"table-body\">Applying operators</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-42D4BA18-939D-4B0D-988E-E737A58209F6\"></a></span><p class=\"table-body\">To apply runtime operators, use either one of the <em class=\"strong\">AddScriptedOp</em> methods or the <em class=\"strong\">AddScriptedOp</em> command. For SICOs, you use the AddCustomOp versions.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6EFF07DD-5390-4F09-9BAE-7482C0913AA5\"></a></span> <a href=\"#!/url=./si_cmds/AddScriptedOp.html\">AddScriptedOp</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-20A3A60E-0B33-45D1-A4A8-1AF79E30DF1F\"></a></span><a href=\"#!/url=./si_om/Parameter.AddScriptedOp.html\">Parameter.AddScriptedOp</a> or Parameter::AddScriptedOp \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CAB38CB1-09AF-48C1-936D-48B1808A1EBA\"></a></span><a href=\"#!/url=./si_om/ProjectItem.AddScriptedOp.html\">ProjectItem.AddScriptedOp</a> or ProjectItem::AddScriptedOp \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-17C34915-0734-4C16-A2F5-7F65D484E6DC\"></a></span> <a href=\"#!/url=./si_cmds/AddCustomOp.html\">AddCustomOp</a> \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-EED37DD2-6B5F-4FE0-8539-3DFCD7D01355\"></a></span><a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">Parameter.AddCustomOp</a> or Parameter::AddCustomOp \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF8EA428-21BA-4509-BCA6-03281723FD44\"></a></span><a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">ProjectItem.AddCustomOp</a> or ProjectItem::AddCustomOp \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D7028398-AFE2-4916-959F-8902E8D92C50\"></a></span><p class=\"table-body\">Update signature</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0E13E74F-2B4C-4972-BBDC-89AD7A9A60BA\"></a></span><p class=\"table-body\">Runtime operators include all output and input ports in the Update signature in addition\n\
                           to the context. SICOs only include the context in its Update signature.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Update( \n\
		ctxt, \n\
		outport, \n\
		inport1, \n\
		inport2, \n\
		... \n\
		)</pre></div> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">Update( ctxt )</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C83A32C4-8842-48DC-9579-FAF107CAC7B0\"></a></span><p class=\"table-body\">Context available</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FE67531E-CBB9-4F46-B8B7-EA222481140D\"></a></span><p class=\"table-body\">The UpdateContext object is available for runtime operators. SICOs take the OperatorContext\n\
                           object instead.\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA1465F3-3E0B-4C59-9B29-702526A7B7D4\"></a></span><a href=\"#!/url=./si_om/UpdateContext.html\">UpdateContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1UpdateContext.html\">UpdateContext</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E5CBEEA-7C85-40C8-BFBE-CEC0C3782018\"></a></span><a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1OperatorContext.html\">OperatorContext</a> \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";