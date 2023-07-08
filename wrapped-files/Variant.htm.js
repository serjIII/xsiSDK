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
      <meta name=\"topicid\" content=\"GUID-6AB324FD-BC11-4A60-A7AC-730800C5E734\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Variant</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6AB324FD-BC11-4A60-A7AC-730800C5E734\"></a></span><div class=\"head\">\n\
            <h1>Variant</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-271331C3-937D-4013-8258-4818C8602DB7\"></a></span>Using the Variant data type allows you to postpone dealing with specific type (like\n\
               <span class=\"char_link\"><a href=\"#!/url=./files/Float.htm\">Float</a></span> versus <span class=\"char_link\"><a href=\"#!/url=./files/Integer.htm\">Integer</a></span>). It is especially useful for parameters that may hold either objects, numbers, or\n\
               strings. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-819D2AA7-C85D-446B-BB7E-47EF058F214B\"></a></span>For example, the <a href=\"#!/url=./si_cmds/SetUserPref.html\">SetUserPref</a> command allows you to set some of the Softimage User Preferences through scripting.\n\
               If you are using this command to toggle the Constraint Compensation Flag, you pass\n\
               either 0 or 1 (integers) in the Value argument; however, if you are trying to set\n\
               the name of the scripting filename, you pass a string. \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_9D0FC4CBEA3A4B568B420F41EBA0B973\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"50%\" align=\"left\" />\n\
                     <col width=\"50%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FB1CC915-4EDE-4002-A67D-FD22F2A5916A\"></a></span><p class=\"table-heading\">Language </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3C1AF9A0-5B19-4A8C-B4F8-A96B68017D1B\"></a></span><p class=\"table-heading\">Comments </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4929C211-8F89-45E0-97D1-52A416CA89AE\"></a></span><p class=\"table-body\">VBScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2374F087-BA8E-406B-A352-D0D03780A5C7\"></a></span><p class=\"table-body\">In VBScript, Variant is the main data type available, with several subtypes (Boolean,\n\
                           integer, long, etc.) which are returned when you use the TypeName function, (ie.,\n\
                           not Variant). \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-775DEE6F-96A9-4419-83E2-634AD1562542\"></a></span><p class=\"table-body\">VBScript automatically performs type coercion, or casting, but also allows you to\n\
                           explicitly convert between data types using special pre-defined functions (<em class=\"strong\">CStr</em>, <em class=\"strong\">CLng</em>, <em class=\"strong\">CDbl</em>, etc.). When you create a variable (with the dimension keyword) in VBScript, it is\n\
                           always the variant type: \n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' First you declare the variable (always variant)\n\
	dim myIndex \n\
	dim myNumber, myLetter\n\
	\' When you assign a value, VBScript decides what \n\
	\' subtype it is (based on the value)\n\
	myIndex = 0\n\
	myNumber = 365.77351\n\
	myLetter = \"A\"\n\
	\' See what TypeName() thinks it is...\n\
	testThing myIndex, \"myIndex\"\n\
	testThing myNumber, \"myNumber\"\n\
	testThing myLetter, \"myLetter\"\n\
	function testThing( in_Thing, in_Name )\n\
		LogMessage in_Name &amp; \" is a(n) \" &amp; TypeName( in_Thing )\n\
	end function\n\
	\' The output of the above script is:\n\
	\'INFO : \"myIndex is a(n) Integer\"\n\
	\'INFO : \"myNumber is a(n) Double\"\n\
	\'INFO : \"myLetter is a(n) String\"</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FD8C4548-329F-41EA-A471-252CDEC97310\"></a></span><p class=\"table-body\">JScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E4553DAB-4D52-42ED-A83B-3FE341BDB112\"></a></span><p class=\"table-body\">In Jscript, any variable that you declare without assigning any value is considered\n\
                           to be undefined, which is similar to variant in this context. For example, this code\n\
                           snippet tests the three JScript variables, one of which is declared but not assigned,\n\
                           while the other two are assigned different values. As soon as a value is assigned\n\
                           to a variable, JScript implicitly coerces the data type of that variable to match\n\
                           the kind of data that was assigned. Otherwise, it is undefined: \n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	var myEmptyVar;\n\
	var myBoolean = true;\n\
	var myString = \"This is text.\";\n\
	testType( myEmptyVar, \"myEmptyVar\" );\n\
	testType( myBoolean, \"myBoolean\" );\n\
	testType( myString, \"myString\" );\n\
	function testType(in_Thing, in_Name)\n\
	{\n\
		if (typeof(in_Thing) == \"undefined\")\n\
		{\n\
			LogMessage( in_Name + \" is undefined.\" );\n\
		}\n\
		else\n\
		{\n\
			LogMessage( in_Name + \" is a \" + typeof(in_Thing) );\n\
		}\n\
	}\n\
	// Output of the above script is:\n\
	//INFO : \"myEmptyVar is undefined.\"\n\
	//INFO : \"myBoolean is a Boolean\"\n\
	//INFO : \"myString is a string\"</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DBB6C207-12C2-4972-8E01-E02CA5874BF5\"></a></span><p class=\"table-body\">Python </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1F62FFF6-6113-4DB3-ABCA-48E8A0574791\"></a></span><p class=\"table-body\">Python does not have a specific type that represents variant values, but provides\n\
                           implicit conversion between Softimage data types and Python native data types. You\n\
                           need to link to the win32com module that comes with ActivePython (for more information,\n\
                           see <em class=\"strong\">http://www.activestate.com/Products/ActivePython/index.plex</em>). \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-06865110-D691-4342-9B25-D3F507F5BA69\"></a></span><p class=\"table-body\">C++ </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8A94F723-429A-48CA-A45F-2F16075A3C5A\"></a></span><p class=\"table-body\">The Softimage|Softimage C++ API implements a class called XSI::CValue, which approximates\n\
                           a type of Variant for the C++ API Class Library. However, this is not a real ActiveX\n\
                           variant; it simply handles most data conversion between Softimage data types and C++\n\
                           native data types. \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-37AD3568-9619-47D7-B9ED-FE6BA8E734E8\"></a></span><p class=\"table-body\">C# </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-213060E5-7F3A-41BC-B46A-75F1775AD16D\"></a></span><p class=\"table-body\">Variants are mapped to the object type (System.Object) in C#. </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-79D99165-09E2-4B8A-8991-89D71CDEE34D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE4BB384-BD03-4898-93B0-1D6B2DA4E55C\"></a></span>In the case of Variants that hold SAFEARRAYs, you can cast the object to an <span class=\"char_link\"><a href=\"#!/url=./files/Array.htm\">Array</a></span>: \n\
                              </p> \n\
                              <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// The Context.GetAttribute method returns a Variant which, in\n\
// the case of the Arguments attribute, is an array\n\
public bool Execute( Context in_ctxt )\n\
{\n\
	Array args = (Array)in_ctxt.GetAttribute(\"Arguments\");\n\
	// equivalent to :\n\
	//Object rtn = in_ctxt.GetAttribute(\"Argument\");\n\
	//Array args = (Array)rtn;\n\
	//...\n\
}</pre></div> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-33C77CAF-0AE6-4A60-9F36-34721B45020F\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3CCA772D-1425-48F4-BAD9-66268817C427\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/DataTypes.htm\">Comparing Data Types across Languages</a></span> for a table that compares the variant data type across several different languages.\n\
                     \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F873A332-835D-400A-841D-0C3EAFC52C85\"></a></span>For high-level information about how these languages approach data type in general,\n\
                     see one of the following topics: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_A7537A5D45C7405FB3B370BCB13CF187\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E664D3D1-BCC5-4A2C-B022-516FAB663A00\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0004\">Type in VBScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-26177C63-A788-46C9-82AC-721293DFECBF\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0006\">Type in JScript</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E4175EA-9DF4-49AC-8835-828A88036975\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0009\">Type in Python</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-8683858B-9BBA-48B8-A0F0-3DA2EE58ADDC\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000C\">Type in C++ (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-05B90B20-4562-4F4F-A021-0C85D515F52C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-000E\">Type in C# (Comparison)</a></span> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";