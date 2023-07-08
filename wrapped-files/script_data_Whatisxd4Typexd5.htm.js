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
      <meta name=\"topicid\" content=\"GUID-133FDFCB-5CCF-4531-8DDB-E1C769A5BCD8\" />\n\
      <meta name=\"indexterm\" content=\"Type in VBScript\" />\n\
      <meta name=\"indexterm\" content=\"Testing for Type in VBScript\" />\n\
      <meta name=\"indexterm\" content=\"Type in JScript\" />\n\
      <meta name=\"indexterm\" content=\"Testing for Type in JScript\" />\n\
      <meta name=\"indexterm\" content=\"Type in Python\" />\n\
      <meta name=\"indexterm\" content=\"Converting Types in Python\" />\n\
      <meta name=\"indexterm\" content=\"Testing for Type in Python\" />\n\
      <meta name=\"indexterm\" content=\"Type in C++ (Comparison)\" />\n\
      <meta name=\"indexterm\" content=\"Testing for Type in C++ (Comparison)\" />\n\
      <meta name=\"indexterm\" content=\"Type in C# (Comparison)\" />\n\
      <meta name=\"indexterm\" content=\"Testing for Type in C# (Comparison)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<type \'instance\'&gt;\" />\n\
      <meta name=\"keyword\" content=\"<type \'instance\'&gt;\" />\n\
      <title>What is \'Type\'?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-133FDFCB-5CCF-4531-8DDB-E1C769A5BCD8\"></a></span><div class=\"head\">\n\
            <h1>What is \'Type\'?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD2C36FD-5201-4632-B2C9-16FBD059B1A1\"></a></span>In a programming language, type is often related to how much storage space a variable\n\
            takes up. For example, storing a short integer takes up less space than storing a\n\
            long integer, so the language allots a certain range depending on what type you declare\n\
            your variable to be. Some examples of type available are: \n\
         </p><span class=\"anchor_wrapper\"><a name=\"UL_D9EF055336EA4247BA46501B64926EA9\"></a></span><ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0849B4B7-1DCC-4F56-A40A-CD78B019E465\"></a></span> <em class=\"strong\"> <span class=\"char_link\"><a href=\"#!/url=./files/Integer.htm\">Integer</a></span>s</em>: numbers without a decimal point. These generally take less memory to store and are\n\
                  popular in representing the index of an array. Some languages distinguish between\n\
                  a <em class=\"strong\">Short</em> (often just called <em class=\"mild\">integer</em>) and a <span class=\"char_link\"><a href=\"#!/url=./files/Long.htm\">Long</a></span> integer, which has a larger value rane (usually just called <em class=\"mild\">long</em>). \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A940519F-8D4C-46A8-8BF9-6971473B694A\"></a></span> <em class=\"strong\">Floating point</em>: numbers with a decimal point. There are two precisions, the single-precision 32-bit,\n\
                  generally referred to as a <span class=\"char_link\"><a href=\"#!/url=./files/Float.htm\">Float</a></span> and the double-precision 64-bit format, often called a <span class=\"char_link\"><a href=\"#!/url=./files/Double.htm\">Double</a></span>. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F706A816-CE77-4445-9878-FDC98C2B7BC3\"></a></span> <em class=\"strong\"> <span class=\"char_link\"><a href=\"#!/url=./files/String.htm\">String</a></span> </em>: a single character or collection of single characters. The length of the string\n\
                  is variable. The number of characters being stored in the string determines how much\n\
                  memory is used. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2121481B-1A6F-4133-ACF0-7C324865C204\"></a></span> <em class=\"strong\"> <span class=\"char_link\"><a href=\"#!/url=./files/Boolean.htm\">Boolean</a></span> </em>: yes or no value usually represented with 1 bit (1=yes or 0=no). These are often\n\
                  used as the return value of a function to indicate whether it failed or succeeded.\n\
                  \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-016DFD77-0477-4CCE-87F8-544CF642252A\"></a></span> <em class=\"strong\"> <span class=\"char_link\"><a href=\"#!/url=./files/Variant.htm\">Variant</a></span> </em>: a non-specific data type, especially useful for parameters that may hold either\n\
                  objects, numbers, or strings. This type is used predominantly by Windows Scripting\n\
                  Host languages based on ActiveX such as VBScript and JScript. (The C# type <span class=\"code\" translate=\"no\">System.Object</span> maps to the Variant type.) \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E06888A-D14B-4C11-92DF-171709A33D73\"></a></span> <em class=\"strong\">Object</em>: reference to an object. What is actually stored is a reference to an address in\n\
                  memory. \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A0C78D46-FC38-4F29-B6B3-5A1E4B259820\"></a></span> <em class=\"strong\">Empty/Undefined/Null</em>: differs between languages. Some languages distinguish between types that are intentionally\n\
                  left empty, have yet to be defined, or have zero-length strings (\"\"). \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-33A42493-174B-4AE3-867B-867956C157B7\"></a></span> <em class=\"strong\">User-defined</em>: customized data type. The programmer/user defines a data type as part of the program.\n\
                  \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FEC5F391-A64B-4AD1-B71C-8CD116317652\"></a></span> <em class=\"strong\"> <span class=\"char_link\"><a href=\"#!/url=./files/Array.htm\">Array</a></span> </em>: list of other data values. While some languages do not treat arrays as discrete\n\
                  data types, they are closely related to data type. For more information, see <a href=\"#!/url=./files/script_arrays.htm\">Working with Arrays (and Other Collections) in Softimage</a>. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-AF7429C8-0FA7-4925-89EF-CB1E9F1B1CB6\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB874A48-FD3F-46D5-BD1F-693ACA6DE9A3\"></a></span>This list is only a general summary of possible types. For more specific information,\n\
                        see <span class=\"char_link\"><a href=\"#!/url=./files/DataTypes.htm\">Comparing Data Types across Languages</a></span> or the documentation for the scripting or programming language of your choice. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8F719706-8F1D-42BA-8C1A-FF93FFBCD1DF\"></a></span> Type in VBScript\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E19D135-D450-4C10-AF98-83BE831FEF10\"></a></span>There is only one type in VBScript, called <em class=\"strong\">Variant</em>, which consists of several different subtypes that correspond with many of the types\n\
               in the list above. For example, VBScript supports both integer and long subtypes,\n\
               as well as object, boolean, and string subtypes. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-361C6EC0-7B60-4EFC-AAFA-3AF210C6ECC2\"></a></span>VBScript automatically performs type coercion, or casting, but also allows you to\n\
               explicitly convert between data types using special pre-defined functions (CStr, Clng,\n\
               CDbl, etc.). \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B69AC44B-B5BE-4CA4-AEAF-A5F547DE4CC8\"></a></span>When you create a variable (with the <em class=\"strong\">Dim</em>ension keyword) in VBScript, it is always the variant type: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' First you declare the variable (always variant)\n\
	dim myIndex\n\
	dim myNumber, myLetter\n\
	\n\
	\' When you assign a value, VBScript decides what \n\
	\' subtype it is based on the value\n\
	myIndex = 0\n\
	myNumber = 365.77351\n\
	myLetter = \"A\"</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0005\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-4AB9F460-D424-4BFC-9010-FE415FFA82D3\"></a></span> Testing for Type in VBScript\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB76E826-563D-45F6-9FFC-A93CF79BBFD0\"></a></span>VBScript provides the <em class=\"strong\">TypeName</em>() function which takes the variable as input and returns its sub-type: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	myIndex = 0\n\
	myNumber = 365.77351\n\
	myLetter = \"A\"\n\
	\' NB: You have to use the <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> keyword for objects\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> my3DObject = ActiveSceneRoot\n\
	\n\
	Application.LogMessage TypeName(myIndex)\n\
	Application.LogMessage TypeName(myNumber)\n\
	Application.LogMessage TypeName(myLetter)\n\
	Application.LogMessage TypeName(my3DObject)\n\
	\n\
	\'INFO : Integer\n\
	\'INFO : Double\n\
	\'INFO : String\n\
	\' TypeName can also figure out the class <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	\' of object variables\n\
	\'INFO : Model</pre></div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0006\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-361CE07B-E528-4663-AEDF-27B29B873E0E\"></a></span> Type in JScript\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DEF66F70-3B1E-4EE9-9E4D-A2AD28DB54EB\"></a></span>Type in JScript is similar to VBScript, in that all variables are declared with a\n\
               generic data type, but when you assign a value to a variable (with the <em class=\"strong\">var</em>iable keyword), it is automatically coerced to one of several data types (String,\n\
               Number, Boolean, Object, Array, Null, and Undefined): \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">	\n\
	// You can declare and assign separately\n\
	var myIndex;\n\
	myIndex = 0;\n\
	\n\
	// You can declare and assign at the same time\n\
	var myNumber = 365.77351;\n\
	var myLetter = \"A\";</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0007\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BFE35464-00DC-4024-86D5-DDC5C3342C70\"></a></span> Testing for Type in JScript\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-293D3A10-0A52-4D32-93E2-FC723741A645\"></a></span>JScript provides the <em class=\"strong\">typeof()</em> operator which, like the VBScript TypeName() function, takes the variable as input\n\
                  and returns its type. However, unlike TypeName, it only returns the names of basic\n\
                  data types, not class names. If you use this operator on an ActiveX object as used\n\
                  in Softimage or other applications, it returns \"object\". For this reason, it is much\n\
                  more effective to use the <a href=\"#!/url=./si_om/Application.ClassName.html\">ClassName (Application)</a> method when you are dealing with native Softimage objects: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	// You can declare and assign separately\n\
	var myIndex = 0;\n\
	var myNumber = 365.77351;\n\
	var myLetter = \"A\";\n\
	var my3DObject = ActiveSceneRoot;\n\
	\n\
	Application.LogMessage( typeof(myIndex) );\n\
	Application.LogMessage( typeof(myNumber) );\n\
	Application.LogMessage( typeof(myLetter) );\n\
	Application.LogMessage( typeof(my3DObject) );\n\
	\n\
	// Once we know we are dealing with an \'object\'\n\
	// we can test it with Application.ClassName\n\
	if ( typeof(my3DObject) == \"object\" ) \n\
	{\n\
		Application.LogMessage( ClassName(my3DObject) );\n\
	} else {\n\
		Application.LogMessage( typeof(my3DObject) );\n\
	}\n\
	\n\
	//INFO : number\n\
	//INFO : number\n\
	//INFO : string\n\
	//INFO : object\n\
	//INFO : Model</pre></div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0009\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6A91CE3F-3302-4488-B40C-23AAD1435F81\"></a></span> Type in Python\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-58781CD8-19C2-4919-9402-03ECACCCFAC6\"></a></span>Python takes data type very seriously and does not provide automatic type coercion\n\
               like VBScript and JScript. However, you do not declare variables with special keywords:\n\
               all you need to indicate in the assignment statement is the name of the new variable\n\
               and Python decides what kind of type it is when it is initialized (assigned a value\n\
               for the first time): \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	# You can assign a single value to a variable\n\
	myIndex = 0\n\
	\n\
	# You can also assign multiple values at once \n\
	myNumber, myLetter = 365.77351, \"A\"</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-000A\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BAE00A55-7E6E-4FFC-A5CF-8C077F55AEB0\"></a></span> Converting Types in Python\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFA42682-E039-4800-81F7-92F5187EB379\"></a></span>Once a variable is initialized, you can assign a different type of value to that variable\n\
                  without using an explicit type conversion operator. However, if you are performing\n\
                  operations on variables with different types, you must use one of the type-conversion\n\
                  functions (<span class=\"code\" translate=\"no\">int()</span>, <span class=\"code\" translate=\"no\">str()</span> and <span class=\"code\" translate=\"no\">float()</span>): \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	val = 123\n\
	stmt = \"sally has \"\n\
	\n\
	#    msg = stmt + val + \" marbles\"\n\
	\n\
	# Note: the above commented statement will generate\n\
	# the following error message\n\
	\n\
	#ERROR : Traceback (most recent call last):\n\
	#  File \"&lt;Script Block &gt;\", line 3, in ?\n\
	#    msg = stmt + val + \" marbles\"\n\
	#TypeError: cannot concatenate \'str\' and \'int\' \n\
	#objects - [line 3]\n\
	\n\
	msg = stmt + str(val) + \" marbles\"\n\
	\n\
	# The above statement converts the numeric value \n\
	# into a string to avoid a mismatch while\n\
	# concatenating:\n\
	\n\
	Application.LogMessage( msg )\n\
	#INFO : sally has 123 marbles</pre></div> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-000B\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-D2A7F6A1-AF2D-42FE-B933-A329E16D899F\"></a></span> Testing for Type in Python\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-75ECAD07-B316-4BE0-AD3F-E0F3B3582D0C\"></a></span>Python provides the <em class=\"strong\">type()</em> function which, like the VBScript TypeName() function, takes the variable as input\n\
                  and returns its type. However, unlike TypeName, it only returns the names of basic\n\
                  data types, not class names. If you use this function on an ActiveX object as used\n\
                  in Softimage or other applications, it returns \"<span class=\"keyword\">&lt;type \'instance\'&gt;</span>\". For this reason, it is much more effective to use the <a href=\"#!/url=./si_om/Application.ClassName.html\">ClassName (Application)</a> method when you are dealing with native Softimage objects: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	myIndex, myNumber, myLetter = 0, 365.77351, \"A\"\n\
	my3DObject = Application.ActiveSceneRoot\n\
	\n\
	Application.LogMessage( str(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>(myIndex)) )\n\
	Application.LogMessage( str(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>(myNumber)) )\n\
	Application.LogMessage( str(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>(myLetter)) )\n\
	Application.LogMessage( str(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>(my3DObject)) )\n\
	\n\
	# Once we know we are dealing with an \'instance\'\n\
	# we can test it with Application.ClassName\n\
	if str(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>(my3DObject)) == \"&lt;<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'instance\'&gt;\":\n\
		Application.LogMessage( \\\n\
			Application.ClassName(my3DObject) )\n\
	else:\n\
		Application.LogMessage( str(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>(my3DObject)) )\n\
		\n\
	#INFO : &lt;<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'int\'&gt;\n\
	#INFO : &lt;<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'float\'&gt;\n\
	#INFO : &lt;<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'str\'&gt;\n\
	#INFO : &lt;<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'instance\'&gt;\n\
	#INFO : Model</pre></div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-000C\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8958F9D7-CEEF-4449-ACF5-30E83BBF430C\"></a></span> Type in C++ (Comparison)\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-49357BCA-B825-443D-BA5A-CDEDC2A41CEA\"></a></span>Type is very specific in C++. For example, there are several kinds of integers and\n\
               floating point number types. C++ also supports user-defined types. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-86013921-E30D-43DB-AA28-B7D5BADDB798\"></a></span>C++ performs some implicit type coercion, or casting, but imposes strict regulations\n\
               on how it does this. It is much better to explicitly convert between data types than\n\
               rely on C++ to do it for you. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBF8F14E-0625-4120-9822-994253AC53B9\"></a></span>When you create a variable in C++, you include the type as part of the expression:\n\
               \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	// You can declare and assign separately\n\
	int myIndex;\n\
	myIndex = 0;\n\
\n\
	// You can declare and assign at the same time\n\
	double myNumber = 365.77351;\n\
	char myLetter = \"A\";\n\
\n\
	// You must explicitly declare the class of each \n\
	// Softimage object instance you create\n\
	Application app;\n\
	app.LogMessage( L\"Hello, World!\" );\n\
\n\
	// The scene root is an instance of the Model class\n\
	Model root = app.GetActiveSceneRoot();</pre></div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-000D\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2BE4390A-C35E-488E-AD44-B39A40C19FF5\"></a></span> Testing for Type in C++ (Comparison)\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C76EA14-E106-4292-8BF8-F4C105E59CA3\"></a></span>Since C++ is so heavily typed, you always have to declare what type of item you have\n\
                  assigned to a variable and thus there is no equivalent to ClassName or any other type-testing\n\
                  functions. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-06D9BE9D-B648-4BE2-AF67-B9104D383711\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9EE0D53C-BF6A-452D-91C8-729B6478C5F1\"></a></span>You can use the <em class=\"strong\">sizeof()</em> operator which returns the number of bytes used by a basic type or struct; however,\n\
                        you can\'t depend on consistency between different platforms or machines. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2033C660-8440-44F9-9014-1CA7AAAEA1D5\"></a></span>For information on the sizeof() operator, see msdn2.microsoft.com/en-us/library/ms860979.aspx.\n\
                        \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-000E\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3FFB3844-5B53-48D5-9A8D-177C26F19019\"></a></span> Type in C# (Comparison)\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF1E7DD4-8737-4843-A4A2-B8C3B67E48F1\"></a></span>Type is very specific in C#, there are several kinds of integers and floating point\n\
               number types. C# also supports user-defined types. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BAF8C0AC-9D0A-479B-AFB0-92329F54B60B\"></a></span>C# is quite strict about some kinds of type casting (conversion between data types).\n\
               In addition, C# arrays cannot contain members of different types. \n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-54D83293-3025-42A8-95BC-29E121224030\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F471550A-85A5-4565-B183-F18C6C4BD40E\"></a></span>The <span class=\"code\" translate=\"no\">bool</span> type is set apart from the other basic data types (<span class=\"code\" translate=\"no\">int</span>, <span class=\"code\" translate=\"no\">char</span>, <span class=\"code\" translate=\"no\">float</span>, etc.) in that there is no conversion allowed between bool and the other types. This\n\
                     means that an empty string or 0 is <em class=\"mild\">not</em> equivalent to <span class=\"code\" translate=\"no\">false</span>, and likewise a populated string or a non-zero value is also not equivalent to <span class=\"code\" translate=\"no\">true</span>. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF978F2F-B987-4005-A0D2-0705A264AB6B\"></a></span>Therefore, all condition tests (ie., tests to be evaluated in the context of if- or\n\
                     while-clauses) must strictly evaluate to a true bool value (other data types cannot\n\
                     be coerced/are not implicitly converted). \n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-000F\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-17F488EB-C8AC-4B9A-AB68-91EE24D0AE7A\"></a></span> Testing for Type in C# (Comparison)\n\
               </h3>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB5A09D5-FC57-4A43-9D7B-BDA282E8E68B\"></a></span>Since C# is so heavily typed, you always have to declare what type of item you have\n\
                  assigned to a variable and thus there is no equivalent to ClassName or any other type-testing\n\
                  functions. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-78D70E2F-EFA6-49CD-B218-E5DD2E8E09BB\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1BC8D4A3-71AB-4132-A264-889F4CB62821\"></a></span>For more information on the C# language, see msdn2.microsoft.com/vcsharp/Aa336809.\n\
                        \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div> \n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/DataTypes.htm\">Comparing Data Types across Languages</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/Integer.htm\">Integer</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/Long.htm\">Long</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/Float.htm\">Float</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/Double.htm\">Double</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/String.htm\">String</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/Boolean.htm\">Boolean</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/Variant.htm\">Variant</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/Array.htm\">Array</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/KeyValue.htm\">KeyValue</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";