var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UserDataItem.Value</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>UserDataItem.Value</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a>.Value <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns a BSTR (<a href=\"#!/url=./files/String.htm\">String</a>) containing the user data for this UserDataItem.\n\
The way this property is used depends whether the UserDataMap has an associated template or not.\n\
<br /><br />\n\
In the context of templated <a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a>:\n\
<br /><br />\n\
This property is used to transfer user data to and from the <a href=\"#!/url=./si_om/CustomProperty.BinaryData.html\">CustomProperty.BinaryData</a>\n\
property of the <a href=\"#!/url=./si_om/UserDataMap.Template.html\">UserDataMap.Template</a>.  In this case you do not need to understand \n\
the format of the data, because you read and write the values via the <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> \n\
property of the template.\n\
<br /><br />\n\
Note: The call will fail if you attempt to transfer data from an empty UserDataItem its template.  \n\
It will also fail if the format of the template does not match the content of the UserDataItem.\n\
<br /><br />\n\
In the context of a binary UserDataMap:\n\
<br /><br />\n\
This property is used to read and write binary or string data to the UserDataItem, with no limits \n\
imposed on size or structure.  \n\
<br /><br />\n\
All scripting languages can conveniently store string values inside user data. Any numeric or structured \n\
data can be encoded in a text format and saved as user data. However, a string representation uses more \n\
memory than a binary representation.  Furthermore, the binary representation of strings differs on different \n\
operating systems and platforms. For example the letter A is stored as 97 0 on Windows 2000 and as 97 0 0 0 \n\
on Linux running on x86 processors.\n\
<br /><br />\n\
C++ developers can also use strings, but they can also easily store true binary data. The Win32 function \n\
SysAllocStringByteLen should be used to convert an contiguous block of memory into a BSTR representation.  \n\
SysStringByteLen provides a safe way to determine the length of a BSTR that may contain null characters.  \n\
SysFreeString should be used to free any memory allocated by SysAllocStringByteLen.  When using this technique \n\
there is practically no overhead in memory usage.  \n\
<br /><br />\n\
Note: It is not recommended that the user data contain any memory addresses or other information that is \n\
transitive.\n\
<br /><br />\n\
If you have a large number of components but only a few different user data values then you might want to \n\
consider storing a table index as the user data value instead of duplicating the user data.  This approach \n\
can reduce the memory consumption of the user data map.\n\
<br /><br />\n\
When transfering binary user data between platforms it may be necessary to perform byte-swapping.\n\
See <a href=\"#!/url=./si_om/UserDataMap.LittleEndian.html\">UserDataMap.LittleEndian</a>.\n\
<br /><br />\n\
An empty string is returned if the UserDataItem is empty. \n\
<br /><br />\n\
This property is equivalent to <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String rtn = UserDataItem.Value;\n\
// set accessor\n\
UserDataItem.Value = String;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' \n\
\' Example of the difference between a binary user data map and a templated user data map\n\
\' \n\
Option Explicit\n\
NewScene ,false\n\
dim oSphere, oCluster, oBinaryUserDataMap, oTemplatedUserDataMap, oTemplatePSet\n\
set oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
set oCluster = oSphere.ActivePrimitive.Geometry.AddCluster( siEdgeCluster, \"ExampleEdgeCluster\" ) \n\
set oBinaryUserDataMap = oCluster.AddProperty( \"UserDataMap\",,\"Binary\" )\n\
set oTemplatedUserDataMap = oCluster.AddProperty( \"UserDataMap\",,\"Templated\" )\n\
\'Create the template custom property object that will define the \n\
\'format of the user data on the templated user data map\n\
set oTemplatePSet = oCluster.AddProperty( \"Custom_parameter_list\",, \"TemplatePSet\" )\n\
oTemplatePSet.AddParameter \"ImagePath\", siString\n\
oTemplatePSet.AddParameter \"ZetaFactor\", siDouble, , , , , , 0.0, 0.0, 1.0\n\
\'This turns our second object into a templated user data map\n\
set oTemplatedUserDataMap.Template = oTemplatePSet\n\
\'Get user data for item 13 (both are initially empty)\n\
dim oUserDataOnBinaryUDM, oUserDataOnTemplatedUDM\n\
set oUserDataOnBinaryUDM = oBinaryUserDataMap.Item( 13 )\n\
set oUserDataOnTemplatedUDM = oTemplatedUserDataMap.Item( 13 )\n\
\'For the binary user data we save a string directly as the value\n\
\'(From C++ this string can easily contain binary data)\n\
oUserDataOnBinaryUDM.Value = \"Sample data\"\n\
\'For the templated user data Softimage understands the structure of the\n\
\'data and we use the PSet to get and set values\n\
oTemplatedUserDataMap.Template.Parameters(\"ImagePath\").Value = \"Image1.tif\"\n\
oTemplatedUserDataMap.Template.Parameters(\"ZetaFactor\").Value = 0.25\n\
\'Transfer the values we saved on the pset into the user data item on edge 13\n\
oUserDataOnTemplatedUDM.Value = oTemplatedUserDataMap.Template.BinaryData\n\
\'In both cases you can copy the values directly between different components like this.\n\
\'(However it would not be correct to try to copy data between the two maps)\n\
oBinaryUserDataMap.Item( 15 ).Value = oBinaryUserDataMap.Item( 13 ).Value\n\
oTemplatedUserDataMap.Item( 15 ).Value = oTemplatedUserDataMap.Item( 13 ).Value</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a> <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue</a> <a href=\"#!/url=./si_om/CustomProperty.BinaryData.html\">CustomProperty.BinaryData</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";