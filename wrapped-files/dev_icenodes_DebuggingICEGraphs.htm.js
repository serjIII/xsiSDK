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
      <meta name=\"topicid\" content=\"GUID-6F44B118-F536-4003-BEBE-58DAB6220549\" />\n\
      <meta name=\"indexterm\" content=\"gotolink ../reference/ref_icenode.fm: LogValuesNode\" />\n\
      <meta name=\"indexterm\" content=\"gotolink ../reference/ref_icenode.fm: LogValuesNode\" />\n\
      <meta name=\"indexterm\" content=\"gotolink ../reference/ref_icenode.fm: LogValuesNode\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Debugging ICE Graphs</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6F44B118-F536-4003-BEBE-58DAB6220549\"></a></span><div class=\"head\">\n\
            <h1>Debugging ICE Graphs</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-68B5842F-E87A-4CF5-A29C-9D174D828EC5\"></a></span>There is a special node called the LogValuesNode which allows you to log values to\n\
               the Script Editor\'s history pane while passing them through from one port to another\n\
               port. For example, imagine a <em class=\"strong\">Turbulize Around Value</em> compound as input to a <em class=\"strong\">Gravity Force</em> compound in a particle simulation:\n\
            </p><img src=\"../images/GUID-340C181C-E9EA-40AC-B334-B97A10F27BE1-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-9E27CA4F-9490-4B32-BB9B-B9904B4FB538\"></a></span>If you want to print the values that are being set on the <em class=\"strong\">Gravity Force</em> compound, you can pass them through a LogValuesNode:\n\
            </p><img src=\"../images/GUID-4E0865B9-E94F-4D90-907C-76F7CAF6F86A-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-A6F9CC3B-B32C-409E-B28C-C7F608C74746\"></a></span>These are some of the ways you can customize what gets logged and how:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DBCE06FD-ED01-4FEC-AC86-D6D566147010\"></a></span>Specifying a Range of Elements to Log \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B5FB0C38-F60E-4F51-9EAE-B5CFDDC35811\"></a></span>Differentiating Multiple LogValuesNodes\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD930A938130D924C97971D07E53F8636-000C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-7B84C36A-65E3-4D58-88E9-C30BE97021A8\"></a></span>Specifying a Range of Elements to Log\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-74E440A0-000D-4863-807D-17483D6AFBDF\"></a></span>You can limit the values that get logged to a subset of elements. For example, if\n\
                  every element logs its value in a particle simulation, the more particles are have\n\
                  been emitted, the more the simulation will be bogged down logging values to the Script\n\
                  Editor.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD930A938130D924C97971D07E53F8636-000D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1F9827B4-2382-4D21-AD0E-EC1B02590D31\"></a></span>To specify a range of elements to log\n\
                  </h3> <span class=\"anchor_wrapper\"><a name=\"GUID-FC9274B4-B1AA-4B9C-83BB-ECA43AD67843\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1A45049-6DBE-47DE-9A21-1F061615D531\"></a></span>Set the <span class=\"MenuCascade\" id=\"GUID-BA989413-77D7-4C4B-9227-52B1212E44C6\">allelements</span> (All Elements) port to <span class=\"code\" translate=\"no\">false</span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-925AE497-42E8-4500-9095-071CA81F1DCF\"></a></span>Specify the range by setting the following values:\n\
                        </p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-65D529FC-F981-48BA-A7F3-15DD62050977\"></a></span>The index of the first element in the range in the <span class=\"MenuCascade\" id=\"GUID-817743A7-BFCD-46EA-90A8-C03FE05CA7FE\">firstelement</span> (First Element) port. The index is 0-based, and any invalid values (values that fall\n\
                                 below 0 or above the <span class=\"MenuCascade\" id=\"GUID-87F742EE-E69A-4889-A086-35797EE04380\">lastelement</span> value) will be clamped to the closest valid value.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C2746423-6A3E-4C65-9353-29A3D2EF6853\"></a></span>The index of the last element in the range in the <span class=\"MenuCascade\" id=\"GUID-9B4DB88B-5DAD-44E5-8119-A94CE371C28A\">lastelement</span> (Last Element) port. The index is 0-based, and any invalid values (values that fall\n\
                                 below the <span class=\"MenuCascade\" id=\"GUID-F07EEDB5-B4CB-4609-B8F2-FD5832A3E458\">firstelement</span> value or above the last available element for that time will be clamped to the closest\n\
                                 valid value.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-5E68B15B-5A19-4B01-9E1A-AC326E422903\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8662C5E-FF35-41B5-8655-4E6A1A2C64D7\"></a></span>You can specify a very high value for both values, such as 5000, to set up a range\n\
                                 of just the last element at every point in the simulation. That way, if there are\n\
                                 5 elements at frame 2 and 45 elements at frame 60, at frame 2 element 5\'s values will\n\
                                 log but at frame 60 element 45\'s values will log.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD930A938130D924C97971D07E53F8636-000E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-753D721E-E647-4D36-9252-511CE8206BFF\"></a></span>Differentiating Multiple LogValuesNodes\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6553BBB0-9FFB-4EDB-84AD-C0F61C17D82B\"></a></span>If you have several LogValuesNodes connected in the same graph, you can use a special\n\
                  label to identify which node wrote the message to the history pane:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-94E2F695-2AA8-4B8C-8C00-B5C639E45CD4\"></a></span>Write the identifying label to the debugprinttag\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";