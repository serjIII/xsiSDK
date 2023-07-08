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
      <meta name=\"topicid\" content=\"GUID-AEC3F4FC-27C1-4B1B-9152-CF68CFAFB772\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Integer</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-AEC3F4FC-27C1-4B1B-9152-CF68CFAFB772\"></a></span><div class=\"head\">\n\
            <h1>Integer</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9D89408-1B6E-48D9-94E8-E7399C65B39B\"></a></span>Short integer values can be positive whole numbers, negative whole numbers, and 0.\n\
               These generally take less memory to store than their <span class=\"char_link\"><a href=\"#!/url=./files/Long.htm\">Long</a></span> integers and are popular in representing the index of an array. This type is commonly\n\
               referred to simply as an <em class=\"strong\">Integer</em>. \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_C638B88B89A24B7E8DFFBEF91F301DA8\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"66.66666666666666%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0E6C12DC-9917-4357-A0AC-199B067BCCF9\"></a></span><p class=\"table-heading\">Language </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6E085CBB-8890-4061-89BB-588D26772C16\"></a></span><p class=\"table-heading\">Comments </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DD89427D-2E10-49A6-BB39-E1D45CC09FB3\"></a></span><p class=\"table-body\">VBScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-57E7E952-9D03-4EDD-BF8A-2C1E58CBDFE9\"></a></span><p class=\"table-body\">The VBScript (short) Integer type contains an integer in the range -32,768 to 32,767.\n\
                           \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-05D2B7CF-873A-432F-A4D7-143A80A40E18\"></a></span><p class=\"table-body\">JScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-47CD6AA0-419D-4C1F-A67C-D0C02F1DC82F\"></a></span><p class=\"table-body\">JScript uses a generic \"number\" data type which corresponds to integer values as well\n\
                           as floating point values. There is no specific Short integer type in JScript. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-815AD024-BF14-4551-8BF8-2234E061BEAF\"></a></span><p class=\"table-body\">Python </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-80F0C3C8-A5C6-410C-A183-AACFD3C7C506\"></a></span><p class=\"table-body\">See <span class=\"char_link\"><a href=\"#!/url=./files/Long.htm\">Long</a></span>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7B8EA931-15FF-4C8B-B43C-7D1D18015E4F\"></a></span><p class=\"table-body\">C++ </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F051E071-1EBC-40D3-9583-0A539FAB1424\"></a></span><p class=\"table-body\">See <span class=\"char_link\"><a href=\"#!/url=./files/Long.htm\">Long</a></span>. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B7BCB166-8598-47BF-9B58-196F728A5593\"></a></span><p class=\"table-body\">C# </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B1EE92EE-792D-49F7-851F-5C45C39B316A\"></a></span><p class=\"table-body\">There are a number of data types available: </p> <span class=\"anchor_wrapper\"><a name=\"UL_0F65F8A15E144BAEBB51C837EC0112EA\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-48A75FE5-CB91-4915-B438-B384A355202F\"></a></span> <em class=\"strong\">byte</em>: Unsigned 8-bit integer in the range 0 to 255 (System.Byte) \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-3CDA71D1-FB03-4142-96F8-804031C1E6FF\"></a></span> <em class=\"strong\">sbyte</em>: Signed 8-bit integer in the range -128 to 127 (System.SByte) \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-99F40049-4BB6-4452-BFBD-EF927B3DA0F3\"></a></span> <em class=\"strong\">char</em>: Unicode 16-bit character in the range U+0000 to U+ffff (System.Char) \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-D154ADA1-1B7C-4D11-979D-55CB3C05C57B\"></a></span> <em class=\"strong\">short</em>: Signed 16-bit integer in the range -32,768 to 32,767 (System.Int16) \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB7669FC-EB5C-46CF-86A3-F4ED7335FB09\"></a></span> <em class=\"strong\">ushort</em>: Unsigned 16-bit integer in the range 0 to 65,535 (System.UInt16) \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-57FCC5C8-BD4C-49FA-850F-202037058B65\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-923D5BC0-1FDC-4520-AA75-AD8788F9D5B3\"></a></span>Most of the time, you will probably use one of the C# types that map to <span class=\"char_link\"><a href=\"#!/url=./files/Long.htm\">Long</a></span> instead of integer types. And most Softimage integer types actually map to one of\n\
                                 the long values in C#. \n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-29A6EEFE-C8C1-4742-9035-66343D60934F\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED091A26-4696-4CF7-9FCC-32BCD822CC76\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/DataTypes.htm\">Comparing Data Types across Languages</a></span> for a table that compares the short integer data type across several different languages.\n\
                     \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA17EBE0-EB55-45D1-99CF-465A7C26D941\"></a></span>For high-level information about how these languages approach data type in general,\n\
                     see one of the following topics: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_97A2EA492E134F17B487C6FEB66ED538\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CC294A4-BA65-4054-B534-EE545D79453B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0004\">Type in VBScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-3687FA01-433A-4DD7-A45F-DF20BBA846B5\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0006\">Type in JScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-14443F62-9572-4F96-B746-6177552D7252\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0009\">Type in Python</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-72648A42-4CB9-4FDA-BBF0-603FC99639B3\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000C\">Type in C++ (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-74BBBA32-4C21-4583-B79E-538633FC3B62\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000E\">Type in C# (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";