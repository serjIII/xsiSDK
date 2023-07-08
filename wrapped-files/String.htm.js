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
      <meta name=\"topicid\" content=\"GUID-03FBA695-C4A8-4BCF-AD62-87D757C39B5B\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>String</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-03FBA695-C4A8-4BCF-AD62-87D757C39B5B\"></a></span><div class=\"head\">\n\
            <h1>String</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC503C99-8D74-40CA-8AB3-098E0A6870C9\"></a></span>String values consist of a single character or collection of single characters. The\n\
               length of the string is variable and can be a chain of zero or more characters (letters,\n\
               digits, and punctuation marks) strung together. You use the string data type to represent\n\
               text. String literals can be included in your scripts by enclosing them in matching\n\
               pairs of single or double quotation marks. The following are examples of strings:\n\
               \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-57594420-72AE-4681-9391-1040DCCBEA89\"></a></span> <span class=\"code\" translate=\"no\">\"Jerry saw the penguin and froze.\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-59FB06F6-C39B-4790-8166-148909277519\"></a></span> <span class=\"code\" translate=\"no\">\'\"Where did you come from?\" asked the king.\'</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A96722FB-6E22-45A4-AF08-8EA3C50FF19B\"></a></span> <span class=\"code\" translate=\"no\">\"128\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0BCBABBA-E1C2-4E7D-AF8C-21DE7FAA6EE0\"></a></span> <span class=\"code\" translate=\"no\">\'z\'</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1BF7F2FE-F6E7-4B47-8DB6-2E456DED422E\"></a></span>A string that contains zero characters (\"\") is an empty (zero-length) string. The\n\
               BSTR (Basic or Binary String) data type is a pointer to a wide character string used\n\
               in Automation manipulation. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-C690F889-F5F2-4620-9693-EAAF6C080037\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B5A3ECF-699C-4CC6-AF72-F78AB4F969C6\"></a></span>Because of Unicode support each BSTR character is normally expressed as two bytes\n\
                     rather than a single byte. \n\
                  </p> \n\
               </div>\n\
            </div><span class=\"anchor_wrapper\"><a name=\"TABLE_1FB1020A8BC848ADAA5BFCE7C75B4C78\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"50%\" align=\"left\" />\n\
                     <col width=\"50%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A931CB09-8C26-47EB-BCFD-AA62C28740F8\"></a></span><p class=\"table-heading\">Language </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CC402E14-E261-499A-B736-CEF09189245D\"></a></span><p class=\"table-heading\">Comments </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F5B80FEA-2F69-47A6-BF20-440CB00E26A3\"></a></span><p class=\"table-body\">VBScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4A631816-2FB4-4E66-BD19-905862792163\"></a></span><p class=\"table-body\">The VBScript String type contains a variable-length string that can be up to approximately\n\
                           2 billion characters in length. In addition to the String type, VBScript also supports\n\
                           the Byte type, which represents a single character (like C++\'s char). \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-08743BBF-F6A8-490E-9A59-B95D30106460\"></a></span><p class=\"table-body\">JScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2D493252-D7CE-4F1F-AF44-FE23D22CE46F\"></a></span><p class=\"table-body\">JScript uses a String object, which implements several methods and properties that\n\
                           allow you to manipulate and format text strings or locate substrings within strings.\n\
                           There is no type to represent a single character (such as C++\'s char or VBScript\'s\n\
                           Byte); to represent a single character in JScript, you can create a string that consists\n\
                           of only one character. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6CB9D893-24DD-409B-8835-D638CAC7FFDE\"></a></span><p class=\"table-body\">Python </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-44A88DD1-38D0-43B2-A201-4A5FDABE61DB\"></a></span><p class=\"table-body\">Python does not have a type to represent a single character (such as C++\'s char).\n\
                           To represent a single character in Python, you create a string that consists of only\n\
                           one character. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9550B8FC-0A8D-458D-BFDD-1E7632D79A59\"></a></span><p class=\"table-body\">C++ </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8705D479-7702-4E72-BD56-F76C677EF967\"></a></span><p class=\"table-body\">The C++ API implements strings as a XSI::CString, with functions and operators for\n\
                           creating, concatenating, and comparing wide character strings together. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3F3010B5-E980-42FA-9B26-A1498923088D\"></a></span><p class=\"table-body\">C# </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8B10892F-91FD-4583-8C0C-525592FA5FE1\"></a></span><p class=\"table-body\">The C# string type (System.String) represents a string of Unicode characters. </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-589AF831-51C5-45DD-9186-8410F9938EC6\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-295684FF-935B-4703-AA1D-964063F0A81D\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/DataTypes.htm\">Comparing Data Types across Languages</a></span> for a table that compares the string data type across several different languages.\n\
                     \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1F549DD3-E26C-4DAF-8FFA-C22E6C622B62\"></a></span>For high-level information about how these languages approach data type in general,\n\
                     see one of the following topics: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_25138AD3155349D9AAC86FB708C1D486\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4388098-9980-421E-813B-D7B16204372B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0004\">Type in VBScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-57673509-6687-403C-B395-676F0B4C1FAE\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0006\">Type in JScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-90807B79-29C5-4876-8901-B9576C493F83\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0009\">Type in Python</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-D316E86B-3CB5-4ADA-84F4-6EB3E735851A\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000C\">Type in C++ (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-66BA1852-054C-42F5-9155-FEAA1C160AAD\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000E\">Type in C# (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";