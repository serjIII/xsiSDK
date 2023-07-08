var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>UserDataBlob.ByteArray</title>\n\
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
            <h1>UserDataBlob.ByteArray</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/UserDataBlob.html\">UserDataBlob</a>.ByteArray <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v8.0 (2010)</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Sets or returns binary user data on the UserDataBlob as a Safe<a href=\"#!/url=./files/Array.htm\">Array</a> of unsigned bytes.\n\
The preferred language for working with this property is Python.\n\
<br /><br />\n\
The data is copied internally and will be persisted as part of the scene. There are no limits \n\
to the size or structure of this data. Internally, the <a href=\"#!/url=./si_om/UserDataBlob.Value.html\">UserDataBlob.Value</a>,\n\
<a href=\"#!/url=./si_om/UserDataBlob.Array32.html\">UserDataBlob.Array32</a> and the ByteArray properties refer to the same data. \n\
However, for the sake of clarity, use only one or the other across your plug-in.\n\
<br /><br />\n\
The <a href=\"#!/url=./si_om/UserDataBlob.Array32.html\">UserDataBlob.Array32</a> property is an optimization of the ByteArray property\n\
and the preferred language for working with these two properties is Python.\n\
<br /><br />\n\
The returned value may appear unexpected for a given scripting language. No matter what the final \n\
representation is, the returned container contains one element per stored byte, and the value is \n\
in the 0-255 range.\n\
<br /><br />\n\
Warning: For clarity, the ByteArray property accepts only Safe<a href=\"#!/url=./files/Array.htm\">Array</a> objects and \n\
fails if given any other kind of data. In Python, the recommended data structure is array.array(\'B\').\n\
In JScript, native arrays are accepted. Python and JScript arrays are internally converted to\n\
Safe<a href=\"#!/url=./files/Array.htm\">Array</a> objects. In addition, each element of the safe array is converted to a \n\
byte internally. If such a conversion is impossible, setting the property fails and the data \n\
remains unchanged. \n\
<br /><br /> \n\
Note: Make sure you are setting a safe array of unsigned byte values (in the 0-255 range) in order\n\
to preserve the data appropriately.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = UserDataBlob.ByteArray;\n\
// set accessor\n\
UserDataBlob.ByteArray = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># Setting the data using UserDataBlob.ByteArray\n\
#\n\
import array\n\
Application.NewScene(\"\", False)\n\
n = Application.GetPrim(\"Null\", \"\", \"\", \"\")\n\
Application.CreateModel(\"\", \"\", \"\", \"\")\n\
blob = n.AddProperty(\"UserDataBlob\", False, \"Bytes\");\n\
# Create an array of bytes and set it as the blob data\n\
#\n\
WriteArray = array.array(\'B\', [1,3,5,7]);\n\
blob.ByteArray = WriteArray;\n\
# Retrieve the data. In Python, the data comes back as a tuple\n\
#\n\
BlobTuple = blob.ByteArray;\n\
# Convert it back to an array\n\
#\n\
ReadArray = array.array(\'B\');\n\
ReadArray.fromlist(list(BlobTuple));\n\
Application.LogMessage(\"ReadArray  = \" + str(ReadArray));\n\
# Expected results:\n\
# INFO : ReadArray  = array(\'B\', [1, 3, 5, 7])</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/UserDataBlob.Array32.html\">UserDataBlob.Array32</a> <a href=\"#!/url=./si_om/UserDataBlob.Value.html\">UserDataBlob.Value</a> <a href=\"#!/url=./si_om/UserDataItem.Value.html\">UserDataItem.Value</a> <a href=\"#!/url=./si_om/CustomProperty.BinaryData.html\">CustomProperty.BinaryData</a> <a href=\"#!/url=./si_om/CustomProperty.AddParameter.html\">CustomProperty.AddParameter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";