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
      <meta name=\"topicid\" content=\"GUID-DC63DED0-6B3D-4F5A-9430-53071A87E908\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>About Data Types and Casting in C#</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"size\", \"si_cpp/group__RenderMapDefine.html#gaa9831b27d43e13316c674746b6efccb1\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DC63DED0-6B3D-4F5A-9430-53071A87E908\"></a></span><div class=\"head\">\n\
            <h1>About Data Types and Casting in C#</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB664C2E-05CC-414D-8BF5-FD85D2145DCB\"></a></span>C# is a strongly typed language. All basic types are part of the the <span class=\"code\" translate=\"no\">System</span> namespace (see <a href=\"#!/url=./files/DataTypes.htm\">Comparing Data Types across Languages</a> for more information on type in C#).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C873EF9A-039C-456B-9F5E-BD747C08F612\"></a></span>Unlike scripting, C# doesn\'t do type coercion automatically if the calling function\n\
               has arguments that don\'t match the value so the caller must perform the type cast\n\
               explicitly:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oCmd.SetFlag( (int)siCommandCapabilities.siCannotBeUsedInBatch, true );\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-000A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B65C0FE4-865C-4ACE-AB6A-F697802FEEBD\"></a></span>Comparing C# to Python and JScript\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F309DE00-A689-4D96-B528-364DA56792E3\"></a></span>This table sketches the similarities and differences between C#, Python and JScript:\n\
               </p> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C0C909B1-BD1F-495A-ACE3-986E7985EB39\"></a></span><p class=\"table-heading\">C#</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B6D1C4D5-B238-4DDB-808F-321217A4FADA\"></a></span><p class=\"table-heading\">Python</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-36CC835E-AB07-4171-AC50-808F8D2D07E3\"></a></span><p class=\"table-heading\">JScript</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
int x = 3;\n\
string y = \"foo\";\n\
FooBarQux fbq = make_fbq ();\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
x = 3\n\
y = \"foo\"\n\
fbq = make_fbq()\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var x = 3;\n\
var y = \"foo\";\n\
var fbq = make_fbq ();\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
expr_1 = expr_2 = expr_3;\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
expr_1 = expr_2 = expr_3\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
expr_1 = expr_2 = expr_3;\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Class c = new Class (params)\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
c = Class(params)\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var c = new Class (params)\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Class[] c = new Class [<a href=\"javascript:void(0)\" data=\"size\" class=\"a_multireflink\">size</a>]\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
c = array(Class, <a href=\"javascript:void(0)\" data=\"size\" class=\"a_multireflink\">size</a>)\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var c = new Array(<a href=\"javascript:void(0)\" data=\"size\" class=\"a_multireflink\">size</a>)\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Type[] l = new Type[] { expr_1, expr_1, ..., expr_n }\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
l = (expr_1, expr_1, ..., expr_n)\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var l = new Array { expr_1, expr_1, ..., expr_n }\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
if (cond) return foo;\n\
do_something ();\n\
return bar;\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
if cond:\n\
    return foo\n\
\n\
//You can also say:\n\
return foo if cond\n\
do_something()\n\
return bar\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">if (cond) return foo;\n\
do_something ();\n\
return bar;\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
if (cond) answer = 42;\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
if cond:\n\
    answer = 42\n\
//or\n\
answer = 42 if cond</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
if (cond) answer = 42;\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">if (!cond) answer = 42;\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">answer = 42 if not cond\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">if (!cond) answer = 42;\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">try ...\n\
catch (FooException e) { ... }\n\
catch (BarException e) { ... }\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
try:\n\
    ...\n\
except e as FooException:\n\
    ...\n\
except e as BarException:\n\
    ...\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
try ...\n\
catch (e) { ... }\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
try { foo (); bar (); }\n\
catch (Exception e) { baz (); }\n\
finally { qux (); }\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
try:\n\
    foo()\n\
    bar()\n\
except e:\n\
    baz()\n\
ensure:\n\
    qux()</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
try { foo (); bar (); }\n\
catch (e) { baz (); }\n\
finally { qux (); }\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
throw new System.ArgumentException (\"foo\");\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
raise System.ArgumentException(\"foo\")\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
throw new Error(\"foo\");\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> t = ((<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>) expr)\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
//exception if cast fails:\n\
t = cast(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>, expr)\n\
//or\n\
//null if cast fails:\n\
t = expr as <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A9B952F4-BFD4-4246-B5D6-7AE14668E100\"></a></span><p class=\"table-body\">(type is loose in JScript, implicit casting)</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using System.Windows.Forms;\n\
Button button = control as Button;\n\
if (button != null) ...\n\
else ...\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
import System.Windows.Forms\n\
button = control as Button\n\
if button != null:\n\
    ...\n\
else:\n\
    ...\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-40D8D7E9-9FE8-4BE5-A2B5-25268626F8E8\"></a></span><p class=\"table-body\">JScript doesn\'t really have the concept of modules, but you can import other JScript\n\
                              libraries by reading them into global memory:\n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var g_fso = new ActiveXObject( \"Scripting.FileSystemObject\" );\n\
var g_ts = g_fso.OpenTextFile( \"MyJSFunctions.js\" );\n\
var g_lib = g_ts.ReadAll();\n\
g_ts.Close();\n\
eval( g_lib );\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using System;\n\
using SWF = System.Windows.Forms;\n\
using System.Xml;\n\
...\n\
Console.WriteLine (\"foo\");\n\
SWF.Form x = new SWF.Form ();\n\
XmlDocument doc = new XmlDocument ();\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
import System\n\
import System.Windows.Forms as SWF\n\
import System.Xml\n\
\n\
print \"foo\"\n\
x = SWF.Form()\n\
doc = XmlDocument()\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-47278830-84C8-43BE-A36D-073ACA14BCFF\"></a></span><p class=\"table-body\">JScript doesn\'t use namespaces.</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
x++;\n\
++x;\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
x++\n\
++x\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
x++;\n\
++x;\n\
</pre></div> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
readonly int X = 2;\n\
const int Y = 3;\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
final X = 2\n\
static final Y = 3\n\
</pre></div> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C4AF2953-BF76-4E56-9700-78474D515E12\"></a></span><p class=\"table-body\">There are no constants or read-only variables in JScript.</p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";