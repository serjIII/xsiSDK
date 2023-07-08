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
      <meta name=\"topicid\" content=\"GUID-263BC3D3-03B6-457E-98A6-C5CF792B9D37\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Array</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-263BC3D3-03B6-457E-98A6-C5CF792B9D37\"></a></span><div class=\"head\">\n\
            <h1>Array</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2616B4FE-F19A-484E-BD60-46881DD9ACE0\"></a></span>An Array isn\'t really a data type, but a container that holds more than one value,\n\
               such as point coordinate values. Arrays identify their members by an index number,\n\
               which starts at 0. So the first member in an array is the item at index 0, the second\n\
               member is the item at index 1, and so on. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AAD94E9B-E82B-4F8F-8DA5-736E7465346E\"></a></span>The specific array format supported in ActiveX is called a SAFEARRAY. The <span class=\"char_link\"><a href=\"#!/url=./files/Variant.htm\">Variant</a></span> data type can contain a SAFEARRAY which can be multidimensional. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2B12E54-A13A-431C-BC75-E618970175BD\"></a></span>For C#, the <span class=\"code\" translate=\"no\">System.Array</span> class supports multidimensional arrays. SAFEARRAYs are generally returned wrapped\n\
               in a <span class=\"code\" translate=\"no\">System.Object</span> object (roughly corresponding to a Variant) containing the <span class=\"code\" translate=\"no\">System.Array</span> object. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-A86A434F-7DD1-486F-BD40-13589F542B70\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B16E54E5-5DD4-4313-A424-035ABF019AB2\"></a></span>For JScript, you can convert SAFEARRAYs to native JScript arrays using the <em class=\"strong\">VBScript.toArray()</em> method (see <em class=\"strong\">msdn.microsoft.com/library/default.asp?url=/library/en-us/jscript7/html/jsmthtoarray.asp</em>). For more information, see <a href=\"#!/url=./files/script_arrays.htm\">Working with Arrays (and Other Collections) in Softimage</a>. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-F9BF6382-0ED2-4E2E-8B01-A6E1E3F0073E\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8113F3F1-19CC-4D06-AB08-9C1714A9D796\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/DataTypes.htm\">Comparing Data Types across Languages</a></span> for a table that compares the single-precision floating point data type across several\n\
                     different languages. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8650D9CF-F8C2-4DBE-B8F2-9A5FF3ADE048\"></a></span>For high-level information about how these languages approach data type in general,\n\
                     see one of the following topics: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_6BDCCF53CB224FAF8F28FBFE699BDE31\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-5BF8EE38-573A-442B-A9D3-A56B3685CE7A\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0004\">Type in VBScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-996A61C9-E51E-4FA8-8330-5801A5170F90\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0006\">Type in JScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA36AC66-70B1-4B90-BFAF-D37B996EAE87\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0009\">Type in Python</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-94C2D55A-12C6-4D64-9ED2-5B42909B2E46\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000C\">Type in C++ (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B5D32D7-F2DC-4DB2-B998-B122F2465E89\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000E\">Type in C# (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";