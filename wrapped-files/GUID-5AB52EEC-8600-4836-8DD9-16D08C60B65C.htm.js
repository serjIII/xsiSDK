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
      <meta name=\"topicid\" content=\"GUID-5AB52EEC-8600-4836-8DD9-16D08C60B65C\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Localization</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5AB52EEC-8600-4836-8DD9-16D08C60B65C\"></a></span><div class=\"head\">\n\
            <h1>Localization</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-0BB8A098-BDCE-47DC-8CFC-EDE8668E6C86\"></a></span>You can localize the plug-in after it is <span class=\"char_link\"><a href=\"#!/url=./files/GUID-44C8F287-6B76-4068-98E5-FA81A904CD06.htm\">internationalized</a></span>. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-46818E2E-743A-45D5-A35E-04E9BC5250B4\"></a></span>The following steps are involved in localization: <span class=\"anchor_wrapper\"><a name=\"OL_75048962A2584947BE1839B07790C000\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li>Create a dictionary (an XML file) with the <span class=\"filePath\" translate=\"no\">.dictxml</span> file extension. See <span class=\"char_link\"><a href=\"#!/url=./files/GUID-5AB52EEC-8600-4836-8DD9-16D08C60B65C.htm#GUID-8659C188-E322-48DB-9CDB-1581D63EC905\">Creating an XML File</a></span>. \n\
               </li>\n\
               <li>Add the strings that need to be localized to this file. See <span class=\"char_link\"><a href=\"#!/url=./files/GUID-5AB52EEC-8600-4836-8DD9-16D08C60B65C.htm#GUID-CC8888C4-0A86-4B80-B44B-2F8E970DC838\">Adding Strings to the File</a></span>. \n\
               </li>\n\
               <li>Compile the <span class=\"filePath\" translate=\"no\">.dictxml</span> file into a binary file (<span class=\"filePath\" translate=\"no\">.dict</span>) using <span class=\"filePath\" translate=\"no\">xsiDictParser.pl</span>. See <span class=\"char_link\"><a href=\"#!/url=./files/GUID-5AB52EEC-8600-4836-8DD9-16D08C60B65C.htm#SECTION_D4A4630276BA4E3C843CB9B68E77B7DC\">Compiling to a Binary File</a></span>. \n\
               </li>\n\
               <li>Deploy the dictionary. See <span class=\"char_link\"><a href=\"#!/url=./files/GUID-5AB52EEC-8600-4836-8DD9-16D08C60B65C.htm#GUID-8EDD8BB8-F910-46C2-8D1E-79DDC176DEE0\">Deploying the Dictionary</a></span>. \n\
               </li>\n\
            </ol> \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-3C69313C-4141-411F-ADFB-2D0A4CFE3C86\"></a></span>You can also refer to the <a href=\"#!/url=./examples/Addons/InternationalPSetUI/netview_InternationalPSetUI.htm\">InternationalPSetUI</a> plug-in example located in the SDK workgroup (<span class=\"filePath\" translate=\"no\">&lt;yourinstallationfolder&gt;XSISDK\\examples\\workgroup\\Addons</span>) for more information. \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_8EACE179493546FBAC4352983926E16B\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8659C188-E322-48DB-9CDB-1581D63EC905\"></a></span>Creating an XML File\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7487FCF4-3BBA-42F6-AFD9-4CB821B6E788\"></a></span>You must create the XML file in the unicode format. \n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-9ABFA999-F04C-4CA2-A579-B08E19D10943\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span>It is a best practice to name the XML file as <span class=\"filePath\" translate=\"no\">EXT&lt;pluginname&gt;.dictxml</span>, where EXT represents an external file. \n\
               </div>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B025FDE-59F5-4D60-8A6C-62A61BB1CD00\"></a></span>Following is an example template for the <span class=\"filePath\" translate=\"no\">.dictxml</span> file: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;?xml <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>=\'1.0\' encoding=\'UTF-8\'?&gt;\n\
&lt;xsidict&gt;\n\
    &lt;namespace <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>=\"EXTFooPlugin\" headerfile=\"sidictres.h\" langs=\"en,jp\"&gt;\n\
        &lt;dictstring context=\"…\"&gt;\n\
            &lt;dictkey&gt;…&lt;/dictkey&gt;\n\
            &lt;dictval lang=”jp”&gt;…&lt;/dictval&gt;\n\
        &lt;/dictstring&gt;\n\
        ... \n\
        &lt;dictstring context=\"…\" unique_lang=\"1\"&gt;\n\
            &lt;dictkey&gt;…&lt;/dictkey&gt;\n\
        &lt;/dictstring&gt;\n\
        ...\n\
        &lt;dictidstring define=\"IDS_XXX\" idvalue=\"…\" context=\"…\"&gt;\n\
            &lt;dictval&gt;…&lt;/dictval&gt;\n\
            &lt;dictval lang=”jp”&gt;…&lt;/dictval&gt;\n\
        &lt;/dictstring&gt;\n\
        ...\n\
        &lt;dictidstring define=\"IDS_XXX\" idvalue=\"…\" context=\"…\" unique_lang=\"1\"&gt;\n\
            &lt;dictval&gt;…&lt;/dictval&gt;\n\
        &lt;/dictstring&gt;\n\
    &lt;/namespace&gt;\n\
&lt;/xsidict&gt;</pre></div>The following table defines the elements and attributes in the <span class=\"filePath\" translate=\"no\">.dict</span> file. <span class=\"anchor_wrapper\"><a name=\"TABLE_F50B25FA544644AB99C100E530201854\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" />\n\
                     <col width=\"66.66666666666666%\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\">Element </th>\n\
                     <th class=\"table-heading\">Description </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"code\" translate=\"no\">xsidict</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> Root element. There is only root element in each file. </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"code\" translate=\"no\">namespace</span> \n\
                     </td>\n\
                     <td class=\"table-body\">Namespace. Following are the related attributes: <span class=\"anchor_wrapper\"><a name=\"GUID-D43ECBD9-8226-4A38-BF76-94B6540134B1\"></a></span><p class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"UL_D698D599CE034942B2F40084EF3095BB\"></a></span><ul>\n\
                              <li><span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a></span> – The unique identifier for a dictionary. \n\
                              </li>\n\
                              <li> <span class=\"code\" translate=\"no\">headerfile</span> – Optional. The <span class=\"filePath\" translate=\"no\">.h</span> header file is generated including all the string declarations referenced by the\n\
                                 numeric ID. \n\
                              </li>\n\
                              <li> <span class=\"code\" translate=\"no\">langs</span> – The languages that are translated. \n\
                              </li>\n\
                           </ul> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"code\" translate=\"no\">dictstring</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> The string entry that is referenced by the English version of the string. Following\n\
                        are the related attributes: <span class=\"anchor_wrapper\"><a name=\"GUID-CFD75114-3B60-4A79-BAAD-55F280FC5497\"></a></span><p class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"UL_9036E2A9C6D743D3B8D8A7473BB81580\"></a></span><ul>\n\
                              <li> <span class=\"code\" translate=\"no\">context</span> – Additional description for this string. This attribute is not compiled. It is used\n\
                                 to provide extra information when editing. \n\
                              </li>\n\
                              <li> <span class=\"code\" translate=\"no\">unique_lang</span> – Add this attribute if the string need not be translated. You do not need to add\n\
                                 the Japanese text. \n\
                              </li>\n\
                           </ul> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-02BE0E49-0C22-4471-B61A-896A02EC0D03\"></a></span><p class=\"table-body\">Folowing are the child elements: </p> <span class=\"anchor_wrapper\"><a name=\"UL_DDE6491048C8437B8A2C6003AED56889\"></a></span><ul>\n\
                           <li><span class=\"code\" translate=\"no\">dictkey</span> – The English string that is used as key in the string table. \n\
                           </li>\n\
                           <li><span class=\"code\" translate=\"no\">dictval</span> – The string for a specific language. The <span class=\"code\" translate=\"no\">lang</span> attribute is used for specifying the language. If this attribute is not specified,\n\
                              the string is considered to be in English. \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"code\" translate=\"no\">dictidstring</span> \n\
                     </td>\n\
                     <td class=\"table-body\"> The string entry that is referenced by its numeric ID. Following are the related\n\
                        attributes: <span class=\"anchor_wrapper\"><a name=\"GUID-8561A598-6A26-4740-B041-60DC110270C7\"></a></span><p class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"UL_A47C1280DD634C7782520156078A4F5E\"></a></span><ul>\n\
                              <li> <span class=\"code\" translate=\"no\">define</span> – The ID representation to be referenced. \n\
                              </li>\n\
                              <li> <span class=\"code\" translate=\"no\">idvalue</span> – Allocate a unique numeric ID. \n\
                              </li>\n\
                              <li> <span class=\"code\" translate=\"no\">context</span> – Same as the <span class=\"code\" translate=\"no\">context</span> attribute for the <span class=\"code\" translate=\"no\">dictstring</span> element. \n\
                              </li>\n\
                              <li> <span class=\"code\" translate=\"no\">unique_lang</span> – Same as the <span class=\"code\" translate=\"no\">unique_lang</span> attribute for the <span class=\"code\" translate=\"no\">dictstring</span> element. \n\
                              </li>\n\
                           </ul> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-113D0325-9197-4579-9FE0-D81E0B97BAFF\"></a></span><p class=\"table-body\">The <span class=\"code\" translate=\"no\">dictval</span> child element is same as the child element for <span class=\"code\" translate=\"no\">dictstring</span>. \n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-37223268-D922-4E0B-A90A-EE7A59AE61CB\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> Do not define the <span class=\"code\" translate=\"no\">dictkey</span> child element for <span class=\"code\" translate=\"no\">dictidstring</span>. \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_941D7DE6A75D40BBBD57C2E1BA62BF87\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CC8888C4-0A86-4B80-B44B-2F8E970DC838\"></a></span>Adding Strings to the File\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C5975EC-2A59-4153-9B7E-2932C1D8050D\"></a></span>You can add new strings in the following formats: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"UL_1637887591BE4B468F6DF24DCB91024A\"></a></span><ul>\n\
               <li> <span class=\"code\" translate=\"no\">dictstring</span> \n\
                  <div class=\"codeBlock\"><span class=\"anchor_wrapper\"><a name=\"LANG-XML\"></a></span><pre class=\"prettyprint lang-xml\">&lt;dictstring context=\"Write where to find the string in the UI\"&gt;\n\
    &lt;dictkey&gt;Add the English string here&lt;/dictkey&gt;\n\
    &lt;dictval lang=\"jp\"&gt;Add the Japanese string here&lt;/dictval&gt;\n\
&lt;/dictstring&gt;</pre></div> \n\
               </li>\n\
               <li> <span class=\"code\" translate=\"no\">dictidstring</span> \n\
                  <div class=\"codeBlock\"><span class=\"anchor_wrapper\"><a name=\"LANG-XML\"></a></span><pre class=\"prettyprint lang-xml\">&lt;dictidstring define=\"IDS_MYNEWSTRING\" idvalue=\"1\" context=\"Write where to find the string in the UI\"&gt;\n\
    &lt;dictval&gt;Add the English String here&lt;/dictval&gt;\n\
    &lt;dictval lang=\"jp\"&gt;Add the Japanese string here&lt;/dictval&gt;\n\
&lt;/dictidstring&gt;</pre></div> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-51C07161-38FF-49F3-83A1-49EE4C55A138\"></a></span>Follow these guidelines: <span class=\"anchor_wrapper\"><a name=\"UL_961BFBA1D1234BEAB1A908FEC322812D\"></a></span><ul>\n\
                  <li>You must use a unique <span class=\"code\" translate=\"no\">idvalue</span>. If you repeat the <span class=\"code\" translate=\"no\">idvalue</span>, it results in a compiler warning message. \n\
                  </li>\n\
                  <li>You must specify the <span class=\"code\" translate=\"no\">context</span>. If you do not specify the <span class=\"code\" translate=\"no\">context</span>, it results in a compiler error. Information in the <span class=\"code\" translate=\"no\">context</span> is helpful to the translator. You can specify where to find a string in the UI or\n\
                     how to use it in the <span class=\"code\" translate=\"no\">context</span>. \n\
                  </li>\n\
                  <li>If you do not want to translate a string, remove the Japanese text and use the <span class=\"code\" translate=\"no\">unique_lang=”1”</span> flag as shown in the following example. \n\
                     <div class=\"codeBlock\"><span class=\"anchor_wrapper\"><a name=\"LANG-XML\"></a></span><pre class=\"prettyprint lang-xml\">&lt;dictidstring define=\"IDS_MYNEWSTRING\" idvalue=\"1\" unique_lang=”1” context=\"Write where to find the string in the UI\"&gt;</pre></div> \n\
                  </li>\n\
               </ul> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_D4A4630276BA4E3C843CB9B68E77B7DC\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A895829A-B6EF-4F3B-B1DD-622EBEAB7B12\"></a></span>Compiling to a Binary File\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0ED534E4-C08E-4D10-9AD4-6DE387C3C195\"></a></span> <span class=\"anchor_wrapper\"><a name=\"OL_AFB5EA2A9B75428D9EC55C16BDDFA599\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li>Open the Softimage command prompt. </li>\n\
                  <li>Run the following command: \n\
                     <div class=\"codeBlock\"><span class=\"anchor_wrapper\"><a name=\"NOHIGHLIGHT\"></a></span><pre>xsiDictParser.pl –dictdir C:\\Program Files\\Autodesk\n\
\\Softimage &lt;<a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>&gt;\\Application\\Dictionary –inputfile “EXTFooPlugin.dictxml”</pre></div> \n\
                  </li>\n\
               </ol>\n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-226FF8B7-2CC8-4879-A557-EA308D739EF1\"></a></span>You can specify the <span class=\"code\" translate=\"no\">–dictdir</span> directory as <span class=\"filePath\" translate=\"no\">&lt;your_installation_folder&gt;\\Application\\Dictionary</span>. \n\
               </p> \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA1758E3-7510-4EDC-81CE-F72C50A7EF53\"></a></span>The <span class=\"code\" translate=\"no\">EXTFooPlugin.dict</span> file is generated in the <span class=\"filePath\" translate=\"no\">en</span> and <span class=\"filePath\" translate=\"no\">jp</span> subfolders under the <span class=\"filePath\" translate=\"no\">–dictdir</span> directory. \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_5327E9745C1A4BFF9BAF6703836A03B3\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8EDD8BB8-F910-46C2-8D1E-79DDC176DEE0\"></a></span>Deploying the Dictionary\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7398B3CB-2404-4F1C-8B31-69FDFB1B6600\"></a></span>Store each <span class=\"filePath\" translate=\"no\">.dict</span> file in a language folder (<span class=\"filePath\" translate=\"no\">en</span> and <span class=\"filePath\" translate=\"no\">jp</span>) at <span class=\"filePath\" translate=\"no\">&lt;your_installation_folder&gt;\\Application\\Dictionary\\&lt;language_folder&gt;</span>. For example, the <span class=\"filePath\" translate=\"no\">.dict</span> file for English must be saved in the <span class=\"filePath\" translate=\"no\">en</span> folder, and the <span class=\"filePath\" translate=\"no\">.dict</span> file for Japanese must be saved in the <span class=\"filePath\" translate=\"no\">jp</span> folder. \n\
            </p> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";