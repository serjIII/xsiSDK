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
      <meta name=\"topicid\" content=\"GUID-D345A672-9B23-4AAE-A1DB-5B23CF0A63DE\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Comparing Data Types across Languages</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D345A672-9B23-4AAE-A1DB-5B23CF0A63DE\"></a></span><div class=\"head\">\n\
            <h1>Comparing Data Types across Languages</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8178986-AF66-4D93-808A-FD4E3FE21E0E\"></a></span>The following table compares various data types across the various languages supported\n\
               in Softimage. For more information about each data type you can click on the links\n\
               in the <em class=\"strong\">Type</em> column. \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_DAE151751A9D4599AA2BF8D5F6680C6C\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"9.090909090909092%\" align=\"left\" />\n\
                     <col width=\"9.090909090909092%\" align=\"left\" />\n\
                     <col width=\"9.090909090909092%\" align=\"left\" />\n\
                     <col width=\"9.090909090909092%\" align=\"left\" />\n\
                     <col width=\"9.090909090909092%\" align=\"left\" />\n\
                     <col width=\"18.181818181818183%\" align=\"left\" />\n\
                     <col width=\"18.181818181818183%\" align=\"left\" />\n\
                     <col width=\"18.181818181818183%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-510D3A88-587A-47F6-8695-CFEEBB0A9DF0\"></a></span><p class=\"table-heading\">Type </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C22F616C-B1F4-42B2-9664-0624E59C8FCB\"></a></span><p class=\"table-heading\">VBScript </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7448372C-FCC0-4B2D-AAAA-5D4954569AC1\"></a></span><p class=\"table-heading\">JScript </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B6757B5F-6E18-4F7A-BCA9-D91E678BF2D6\"></a></span><p class=\"table-heading\">Python </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7F64DFAB-1159-4480-BAB1-50A1BE63897B\"></a></span><p class=\"table-heading\"> <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a> enum value \n\
                        </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0B4B5AC8-9B5C-4EBE-9C57-3C6734FA829C\"></a></span><p class=\"table-heading\">C# </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F8182EA9-3BBC-4646-BD3D-43311B44B5D6\"></a></span><p class=\"table-heading\">C++ </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6E7FF402-081B-412F-B8F6-984637A765A1\"></a></span><p class=\"table-heading\">Description </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\" rowspan=\"5\"> <span class=\"anchor_wrapper\"><a name=\"GUID-69B0F210-7706-43B8-BA08-361BB8793BE0\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/Integer.htm\">Integer</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D00D9D94-57F4-4A8F-9E62-D5C33C96ADEA\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4A07ADA-549B-41E6-AFA7-03FBFF16EA29\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-577D299E-1D96-4A97-9312-1CB725829DDF\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6778F88D-4139-4836-B083-5C46F1FBF783\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siByte</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C42F115F-6B55-4670-9F6D-FCF2B78A36F0\"></a></span><p class=\"table-body\">sbyte (System.SByte) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F792D9D6-E831-4EF3-B630-44C28E1C2B51\"></a></span><p class=\"table-body\">signed char </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1E48294D-E116-43C6-ABCB-3657C6129D47\"></a></span><p class=\"table-body\">1-byte signed integer </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-85442877-4271-4A69-89C3-0533DBD649F0\"></a></span><p class=\"table-body\">Byte </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A1F35AD1-3815-4C62-8F2B-0903F2E45BCA\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0590E45D-F647-46AC-979D-EBE6F6854E0C\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A732AE6C-99B3-4312-AF91-8A2B18144C8A\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siUByte</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-818B048F-E9CA-40C3-B10E-93E0A81CD8AE\"></a></span><p class=\"table-body\">byte (System.Byte) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0CCD2D58-2DFE-4946-95AF-BAEDF0AD13E1\"></a></span><p class=\"table-body\">unsigned char </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5FCDD3E6-D3BA-4A82-AF57-234D366E6C1C\"></a></span><p class=\"table-body\">1-byte unsigned integer </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-00B0303B-D56D-4A64-84C6-A17A127965B0\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BF35EA6A-1C2D-4543-BB92-4F2E1C4F1363\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2240AAE1-6B94-4D7C-9A9B-3F3965A46501\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4C835AA3-B8E9-4288-B1CF-77FA87155E6B\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A886F07D-0BF9-4C2D-A726-B3F207D312D8\"></a></span><p class=\"table-body\">char (System.Char) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-83B3F695-45F4-4A1C-8B72-A3DE0A1D1DC4\"></a></span><p class=\"table-body\">unsigned char </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AB68DF39-6CB8-45E5-9937-57BC43D80463\"></a></span><p class=\"table-body\">2-byte Unicode character </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D96A1B9D-FACF-40B9-AE1E-07A6EE60594E\"></a></span><p class=\"table-body\">Integer </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8D8BE067-FBB1-4E70-8C24-000608CE9823\"></a></span><p class=\"table-body\">number </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B947AEB2-ADCD-4182-82CD-27E86139F9E1\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D79720F4-7902-4EBA-8E18-0752D57B44B9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siInt2</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5EC09DC8-71C8-4119-9D16-C548B455C7FC\"></a></span><p class=\"table-body\">short (System.Int16) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3639BCBD-C3F0-4EE6-B979-DC5A92818E3A\"></a></span><p class=\"table-body\">short </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8ED60D34-DFE3-4B5D-A0C8-205759738523\"></a></span><p class=\"table-body\">2-byte signed integer </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E4200F39-4046-4965-B72E-03311D6E52A6\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EFC497D8-4407-4235-B226-7BE5602E177D\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D5479FC0-EB9C-44D6-8536-DE65E52F2145\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-081EA465-4446-4482-9909-6B498E53C0A4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siUInt2</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D1F7DC44-3814-4950-9558-FC7B51E600D1\"></a></span><p class=\"table-body\">ushort (System.UInt16) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-499C3713-9157-42DF-B3E0-306EAF22F293\"></a></span><p class=\"table-body\">unsigned short </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA1D73AF-F554-4206-A77B-605A3A4AD443\"></a></span><p class=\"table-body\">2-byte unsigned integer </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\" rowspan=\"4\"> <span class=\"anchor_wrapper\"><a name=\"GUID-725EC64F-D916-4A8C-83B5-CFAEC3FA8261\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/Long.htm\">Long</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-99786649-5D0C-412D-BD27-70E9422FBC21\"></a></span><p class=\"table-body\">Long </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B5524123-0EA4-4252-83B9-8E4196A6C2E8\"></a></span><p class=\"table-body\">number </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-764F191B-43A9-4B1D-9242-9E06CDD50633\"></a></span><p class=\"table-body\">int </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-63574124-C6D8-4A1F-8A0F-E8A5B7C3D02C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siInt4</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AFB467BB-DB04-4F0D-B77F-8B0278698DD2\"></a></span><p class=\"table-body\">int (System.Int32) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4FC34F85-02FD-441E-9185-2750012DD81F\"></a></span><p class=\"table-body\">long </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-38BF1055-7CAA-4FA3-B648-0CD51F17EA0F\"></a></span><p class=\"table-body\">4-byte signed long integer </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7FC59599-8C39-4190-98CC-DAD97B5EA7F1\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1CB01325-2889-4122-A1A1-FEDFA9BAAA4B\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-89D08B15-A5FD-4226-B165-985235E9A0BF\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9BAD51C4-24D2-4E4A-8C41-5F383058C67C\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siUInt4</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EB6209CA-5D3E-4F9B-9977-3EE74C50785A\"></a></span><p class=\"table-body\">uint (System.UInt32) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-96690459-5610-41D4-95B8-06780B1F287E\"></a></span><p class=\"table-body\">unsigned int </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0ACCAC12-F733-408E-8899-CD50F195AE8B\"></a></span><p class=\"table-body\">4-byte unsigned integer </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-042948D8-75BA-485A-A11C-5D40FC0234BB\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9307DD54-9D66-4FCD-8ED2-9561EC050118\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DAD40CF7-F3DC-4BE1-9670-E348E83CE832\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5236FFFC-D0DD-4B80-A045-6DC6EE360884\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2DE3828D-2230-4756-BEF8-E20B93A5DD94\"></a></span><p class=\"table-body\">long (System.Int64) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0C76F1B9-3349-4934-AF00-FBA73648FB0A\"></a></span><p class=\"table-body\">__int64 </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-56D995C8-9F43-4C5A-AC91-BDA878099012\"></a></span><p class=\"table-body\">8-byte signed integer </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BB21CE4B-F76C-4F53-972D-3A7E2C384C52\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-ABC45A78-EFCE-4213-9E59-79C3914D5FD0\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0660FEDF-2C0A-465B-88E1-EE09158299EF\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E6C39A95-0CFA-4756-874D-9E28D65C40AF\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D9E9AF8C-C36C-40FE-BE9F-4D03F5097E57\"></a></span><p class=\"table-body\">ulong (System.UInt64) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D058F805-45E8-4E49-8B3D-4967BCCEFBC7\"></a></span><p class=\"table-body\">unsigned __int64 </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-AB335EC9-1F8E-41DD-BE22-9017FE302B4E\"></a></span><p class=\"table-body\">8-byte unsigned integer </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4C8D3963-4D65-4BB9-B5B0-33A6049DFB78\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/Float.htm\">Float</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0F4DAD42-FC84-4943-BCD9-510EFE65077F\"></a></span><p class=\"table-body\">Single </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-625DB482-3020-45F7-A0E8-A904EEEE40D6\"></a></span><p class=\"table-body\">number </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8FA0E765-2A8A-4C5F-B394-A3EED04CF214\"></a></span><p class=\"table-body\">float </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9B2B9BE7-2F4B-4D2A-8765-D85143F09A57\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siFloat</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0F8FF75F-B966-4B3F-BB3E-00FA87BA5B2F\"></a></span><p class=\"table-body\">float (System.Single) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-064046C9-73E2-42B6-869D-173D883C83B8\"></a></span><p class=\"table-body\">float </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BF5A9659-75FE-4318-B5EE-749C9C397C7E\"></a></span><p class=\"table-body\">4-byte single floating-point number </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3054AC97-2442-4FE0-8198-D1EFFD2F40D3\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/Double.htm\">Double</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DD8AF9C7-CF61-44A1-B8CD-3B3FAE184701\"></a></span><p class=\"table-body\">Double </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EF663857-7D04-4ADB-A6B1-E3C0F21E1579\"></a></span><p class=\"table-body\">number </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C2E1EA3A-4B0B-4793-BD43-F23B94AE340C\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9668009D-F2C2-45DE-A4D2-D5B395D2A7E4\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siDouble</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-634EB7DB-AF9A-4618-A5F1-67A2CBE1546F\"></a></span><p class=\"table-body\">double (System.Double) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34AB2427-E12E-43B5-A5E7-2C7D0FE3F0C1\"></a></span><p class=\"table-body\">double </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-53850D63-A1A9-430B-ABAC-BFEB4F5200DA\"></a></span><p class=\"table-body\">8-byte double floating-point number </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D1E15EB0-D3A3-4128-B331-8CF2E93A050C\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/String.htm\">String</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2B33478B-0A99-4232-AF60-70AC00F22309\"></a></span><p class=\"table-body\">String </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A27B492C-A8D8-4B7B-BCF6-9B218486F5F5\"></a></span><p class=\"table-body\">String </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A8704F0C-97EE-4E32-969C-038A7673D59C\"></a></span><p class=\"table-body\">string </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EC6DD411-699F-4392-8750-83CE43337238\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siString</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FCEAABC2-EF45-413C-8B67-F66B383C19D9\"></a></span><p class=\"table-body\">string (System.String) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DC51D2B2-2C5B-4721-951B-43C98D7A0952\"></a></span><p class=\"table-body\">XSI::CString </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1E66649D-BF9C-4970-AE88-E1496EB5080C\"></a></span><p class=\"table-body\">string </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F6C73C1D-2BBE-4F14-A857-81FC2799F380\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/Boolean.htm\">Boolean</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4C4A0C3D-C6B5-4F87-AE31-8975F75EBFBE\"></a></span><p class=\"table-body\">Boolean </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2B37253D-D958-4E5F-A7B1-BD53C90333FE\"></a></span><p class=\"table-body\">Boolean </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3498E375-403B-47CC-B2B7-2115C6D1FA36\"></a></span><p class=\"table-body\">(int) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0AA32BF0-439E-4B10-8630-8323AAF3716D\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siBool</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0CD0A63A-9318-41DA-9BF4-32CD6E4B6A00\"></a></span><p class=\"table-body\">bool (System.Boolean) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D59B0A9C-FE34-40CF-8F4C-7C07C593C5BE\"></a></span><p class=\"table-body\">bool </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D47ACB26-0FC4-4E59-9035-672E08EF7E10\"></a></span><p class=\"table-body\">Boolean </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0369909F-681C-4B47-BE3E-1042A8BA55C4\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/Variant.htm\">Variant</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-054B65CF-53B8-4A86-BEFA-23397647C27F\"></a></span><p class=\"table-body\">(Variant) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-44D4BF18-6E8B-44A2-BCB0-EF7F501C8DE7\"></a></span><p class=\"table-body\">(Undefined) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9508B955-A7BD-4A97-8DDE-3CA824434F14\"></a></span><p class=\"table-body\">(implicit conversion) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F633EFD-B3D0-4994-8865-0B16EB55DA43\"></a></span><p class=\"table-body\">n/a </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7EBC4563-6BCC-4062-8C84-F0603AF79C51\"></a></span><p class=\"table-body\">object (System.Object) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5F390093-590F-4890-A493-FCA6689A1D62\"></a></span><p class=\"table-body\">XSI::CValue </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9E1BE5B2-2962-4537-BF2E-922AA727C056\"></a></span><p class=\"table-body\">A union of data types with associated functions for creating, deleting, copying, accessing\n\
                           and manipulating. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1FD70BA3-2C6F-45A5-A80B-B62730C8BA7F\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3CC4F4CC-613C-411E-B7EE-40A2A4A3AA7B\"></a></span><p class=\"table-body\">Object </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-26825287-445C-44D6-89CF-291C0A7E57A8\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9BBF9385-0BE6-4DA5-BC01-2FE51D5D0399\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA20B848-2A01-4C6E-8417-5A89A4A5D4B9\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/siVariantType.html\">siDispatch</a> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A9B84D1D-3871-43D6-AE64-7F24BB3D9622\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1A94522A-FBC1-486F-889C-011EC6310864\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A9DB60C0-6162-4CCB-8300-DCE1D42FFC1E\"></a></span><p class=\"table-body\">IDispatch interface pointer </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9A97A2F0-6967-4115-86E0-D556DDF50B5C\"></a></span><p class=\"table-body\"> <span class=\"char_link\"><a href=\"#!/url=./files/Array.htm\">Array</a></span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D7FFDEFC-0BE3-4719-84C2-561196DD3B98\"></a></span><p class=\"table-body\">Array </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1A458147-6341-4C68-A6C0-8996A43864A5\"></a></span><p class=\"table-body\">(use VBArray instead of Array) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D5951CD5-1E0D-4638-98CE-EC479D50FABB\"></a></span><p class=\"table-body\">(list or tuple) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-91DA784D-4CA9-486F-B9A8-CD419C7BAA3D\"></a></span><p class=\"table-body\">-- </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F129EEED-6039-4DEB-8A46-0142B43B110C\"></a></span><p class=\"table-body\">System.Array </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A99C0D8E-960A-41F0-B9F8-A8538FF12A56\"></a></span><p class=\"table-body\">XSI::CValueArray </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-097B4BBB-A0A8-43F4-BD03-8FB1839C78F6\"></a></span><p class=\"table-body\">SAFEARRAY or sequence of data </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-3EF535EF-49B5-4AAB-991C-888232B06993\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2624701-C7C8-409C-91DA-9638B8DDF908\"></a></span>For high-level information about how these languages approach data type in general,\n\
                     see one of the following topics: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_0EF73D045B32466886C2448F0DB92B82\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC13B309-5497-49F3-9A6F-5516EF9C3881\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0004\">Type in VBScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-D6ACF392-ECF9-422F-8839-EAF14811E752\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0006\">Type in JScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A66338B-BD19-45F0-BAC7-F7634ABDD32D\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0009\">Type in Python</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-BE5455C8-C5D8-4B30-AC5F-890923ABB96E\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000C\">Type in C++ (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE90DAD8-B050-48B0-AAC9-996709DF10D5\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000E\">Type in C# (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";