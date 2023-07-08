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
      <meta name=\"topicid\" content=\"GUID-022E98FA-6038-4B09-9A32-0B11C7F6606C\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Boolean</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-022E98FA-6038-4B09-9A32-0B11C7F6606C\"></a></span><div class=\"head\">\n\
            <h1>Boolean</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-64AECF76-E88C-4422-80DE-9F1EAEB78578\"></a></span>A Boolean is a TRUE or FALSE value usually represented with 1 bit (1=TRUE or 0=FALSE).\n\
               However, the common representation in VBScript and JScript is VARIANT_TRUE (-1) and\n\
               VARIANT_FALSE (0). These are often used as the return value of a function to indicate\n\
               whether it failed or succeeded. VBScript, JScript, C#, and the C++ API all support\n\
               the TRUE and FALSE keywords; Python does not. \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_E15B696A163B4A7DBA5DABB64982F5E8\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"66.66666666666666%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4ECE5A5-5CF8-4062-9D67-44C05442FA5B\"></a></span><p class=\"table-heading\">Language </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DB909A43-C502-4882-AEE0-3E761456453F\"></a></span><p class=\"table-heading\">Comments </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E85E0670-0B1F-4F0F-B6E1-57049138FCF9\"></a></span><p class=\"table-body\">VBScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3975E191-5E5E-466C-BAE2-F969C64EBE27\"></a></span><p class=\"table-body\">VBScript uses the Boolean data type. </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8743C789-D630-4F8C-9AB2-ADF17FE19A15\"></a></span><p class=\"table-body\">JScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1781A722-AE54-4D93-875A-BFCC723AA9BC\"></a></span><p class=\"table-body\">JScript uses the Boolean data type. </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A36562BA-4CC1-46BF-85C2-A27A547DFC00\"></a></span><p class=\"table-body\">Python </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FBB36690-D196-458F-8444-4861A7A8814B\"></a></span><p class=\"table-body\">Python does not have a specific type that represents Boolean values, but you can use\n\
                           either integer values or the built-in constants <span class=\"code\" translate=\"no\">False</span> (<span class=\"code\" translate=\"no\">0</span>) and <span class=\"code\" translate=\"no\">True</span> (<span class=\"code\" translate=\"no\">1</span>). \n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-17F2DA4F-8210-41C8-A83C-3507F116B0BE\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-3C052554-EA8A-4D55-A5B6-9A2B42DBF121\"></a></span>These constants are context-sensitive, so <span class=\"code\" translate=\"no\">false</span> will not work. \n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-892A82FF-4E60-418C-A7D1-6821D68B4351\"></a></span><p class=\"table-body\">C++ </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F0708569-1298-4454-A73E-A0C04AD7CCC9\"></a></span><p class=\"table-body\">The C++ API uses bool. </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D888C606-FDBC-4128-96E1-39A1506FA618\"></a></span><p class=\"table-body\">C# </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A62DFAD6-CD04-47DC-B51C-5CF2FBCFA1DF\"></a></span><p class=\"table-body\">C# uses the bool type (System.Boolean). </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-E2D13070-6EBC-47A7-B037-7720E752465B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D5729B3-5BAB-4216-A9C8-B470FDAD3891\"></a></span>The <span class=\"code\" translate=\"no\">bool</span> type is set apart from the other basic data types (<span class=\"code\" translate=\"no\">int</span>, <span class=\"code\" translate=\"no\">char</span>, <span class=\"code\" translate=\"no\">float</span>, etc.) in that there is no conversion allowed between bool and the other types. This\n\
                                 means that an empty string or 0 is <em class=\"mild\">not</em> equivalent to <span class=\"code\" translate=\"no\">false</span>, and likewise a populated string or a non-zero value is also not equivalent to <span class=\"code\" translate=\"no\">true</span>. \n\
                              </p> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E04358E4-D333-4CE0-8F97-60C4FD7D8532\"></a></span>Therefore, all condition tests (ie., tests to be evaluated in the context of if- or\n\
                                 while-clauses) must strictly evaluate to a true bool value (other data types cannot\n\
                                 be coerced/are not implicitly converted). \n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-894F6A09-F435-45D2-84AB-9AB5D9EC5F62\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-67B46D3D-F06B-4D60-8F93-222962DEC0CC\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/DataTypes.htm\">Comparing Data Types across Languages</a></span> for a table that compares the single-precision floating point data type across several\n\
                     different languages. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9E20EC5E-AE83-4E4D-BC30-ED84E8DDDF36\"></a></span>For high-level information about how these languages approach data type in general,\n\
                     see one of the following topics: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_4C61B9AC71F44025A493FFDFBEE5EF13\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-993F67FB-5151-4399-8FF8-2516F2CF8B50\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0004\">Type in VBScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4F93ABDA-2221-4834-A8CD-5B0B81F171C6\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0006\">Type in JScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-22F5292B-5DDF-413E-82D3-9B8C8AD916F3\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0009\">Type in Python</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4F4253E5-6F89-4767-8D23-C1610405404E\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000C\">Type in C++ (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-94955872-F7ED-4CD9-A935-1BD21E7D84EA\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000E\">Type in C# (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";