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
      <meta name=\"topicid\" content=\"GUID-0C142EB2-8377-4F49-BD45-B26861A32C3C\" />\n\
      <meta name=\"indexterm\" content=\"returning: ISIVTCollections\" />\n\
      <meta name=\"indexterm\" content=\"ISIVTCollection\" />\n\
      <meta name=\"indexterm\" content=\"ISIVTCollection: methods\" />\n\
      <meta name=\"indexterm\" content=\"ISIVTCollection: properties\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is an ISIVTCollection?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-0C142EB2-8377-4F49-BD45-B26861A32C3C\"></a></span><div class=\"head\">\n\
            <h1> What is an ISIVTCollection?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-FAF7F8FE-E5E4-47EA-A003-9037EC61161D\"></a></span>When a command has <span class=\"char_link\"><a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a></span> but does not explicitly specify a <span class=\"char_link\"><a href=\"#!/url=./files/scripting_RtnValDefined.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0026\">return value</a></span>, it actually returns a special collection called an <em class=\"mild\">ISIVTCollection</em> which implements the following methods and properties:\n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-0016\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-94A935AD-C0C4-4436-9AD5-A9FFD6AE5F4B\"></a></span> Methods\n\
            </h2>  \n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-348F4500-AC4A-435B-AE24-2090111BD371\"></a></span><p class=\"table-heading\">Name</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-36F97029-3CB8-4D98-A86A-156DE2EE8F18\"></a></span><p class=\"table-heading\">Parameters</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C6CE5993-9920-4504-A3B4-64A257039B1A\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-29943CA9-1647-40C7-901A-E6CAE9769CEB\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"> <em class=\"strong\">Add</em> </span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C43DD4C2-40E0-49A9-B8E4-6CF8A549FF01\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">key</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BF53DB0D-1B0C-40BF-A490-D380C7AF172F\"></a></span><p class=\"table-body\">Adds an item to the collection as a value associated with a key (String). For example:</p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">vtcol.Add(\"Native\", false);</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-D21A9505-6846-4838-9B3E-ACA47EA78AD9\"></a></span><p class=\"table-body\" /> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E2539836-D6FA-4990-BD4D-D99461B82432\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">value</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp; <span class=\"anchor_wrapper\"><a name=\"GUID-2015DF85-7A04-4407-8967-011B3A808B16\"></a></span><p class=\"table-body\" /> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2257004F-A50C-43E0-A56A-6893EB055749\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"> <em class=\"strong\">Remove</em> </span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1BFF85E4-853A-429F-89E0-82B406C2B0FE\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">key</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A3F0E854-1024-4195-8EAE-358045ECAB77\"></a></span><p class=\"table-body\">Removes an item identified by key (String) from the collection. For example:</p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">vtcol.Remove(\"Native\");</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-221C3D6E-52E9-4EF7-BF75-BB447985A7BE\"></a></span><p class=\"table-body\"> <em class=\"mild\">supports</em> __NewEnum\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7F043BA5-D58D-42EC-8962-25AB3A88F078\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">--</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-01933354-ABFA-4482-9114-63A9D97005E4\"></a></span><p class=\"table-body\">Provides support for standard collection enumeration. For example:</p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var eArg = new Enumerator(vtcol);\n\
for ( ; !eArg.atEnd(); eArg.moveNext() ) {\n\
	var myArg = eArg.item();\n\
	Application.LogMessage( myArg == null );\n\
}</pre></div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-0017\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-83A34890-4FE3-4C34-8460-DF9FF8C163DE\"></a></span> Properties\n\
            </h2>  \n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-22CF907C-D09F-4FB9-A48C-2EF83075BD25\"></a></span><p class=\"table-heading\">Name</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2A22784D-0FE1-4093-99FB-D87CB4330F6C\"></a></span><p class=\"table-heading\">Parameters</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A34A0B66-2F16-44DC-9ACB-EF428A349606\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FCC9CD7F-4CBD-42FD-B80D-27982459AE92\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"> <em class=\"strong\">Item</em> </span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2BAFF615-9C5C-4BAA-A0AD-A02EE43007A8\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">key</span> or <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a></span></p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-79E08691-1841-4F5E-B7C6-F9DBF3DBF8AB\"></a></span><p class=\"table-body\">Returns or sets the value for an item identified by key (String) or index (Long).\n\
                           Since this the default property for the ISIVTCollection, you can omit the <span class=\"code\" translate=\"no\">Item</span> when accessing it. For example:\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// explicitly calling the Item property\n\
var oldVal = vtcol.Item(\"CurveKind\");\n\
vtcol.Item(\"CurveKind\") = 15;\n\
\n\
// omitting the Item when calling the property\n\
var oldVal = vtcol(0);\n\
vtcol(0) = true;\n\
</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A8B92080-0892-489B-B942-86797BBC7E34\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"> <em class=\"strong\">Count</em> </span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-569A63B0-B093-49F3-A581-3032C5F7CD23\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">--</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-50459BE0-86D1-4890-AE5F-695D466B1AC9\"></a></span><p class=\"table-body\">Returns the total number of items in the collection. For example:</p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">Application.LogMessage( vtcol.Count );</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FDEA0C78-FE35-470A-8F28-F85A3578814F\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\"> <em class=\"strong\">Value</em> </span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-CA24E20F-B27B-4350-86BD-3A2ADAA0C3F1\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">key</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0F684B95-85A9-45E6-8B63-29FF6034FE33\"></a></span><p class=\"table-body\">Returns or sets the value for an item identified by key (String) only. For example:</p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">var oldVal = vtcol.Value(\"CurveKind\");\n\
vtcol.Value(\"CurveKind\") = 15;</pre></div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-0018\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1602EE7C-A83E-42FF-B6C6-E540CBBF06CE\"></a></span>Examples\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BDC317F3-5E42-4D41-9BF3-62E079C05E05\"></a></span>The following examples demonstrate the use of the ISIVTCollection:\n\
            </p> \n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBF65DBB-9D47-49BC-B904-CEC79557C8B4\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/outarg_vs_ivtcoll.htm\">VBScript Example: Output Arguments vs. the ISIVTCollection</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFC89992-DB64-448A-B8E0-F13BB50E7932\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/js_ex_isivt.htm\">JScript Example: Using the ISIVTCollection</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7BBC2DA3-E326-4925-90E5-94F3FD05ACF9\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/pys_ex.htm\">Python Example: Working with the ISIVTCollection returned from a Command</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";