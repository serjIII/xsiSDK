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
      <meta name=\"topicid\" content=\"GUID-DDD0CF17-B3D0-45F0-99A0-E63BA1935714\" />\n\
      <meta name=\"indexterm\" content=\"return value: with output arguments\" />\n\
      <meta name=\"indexterm\" content=\"returning: output arguments and return values at the same time\" />\n\
      <meta name=\"indexterm\" content=\"output arguments: with return values\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What Happens when the Function Already Returns a Value?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DDD0CF17-B3D0-45F0-99A0-E63BA1935714\"></a></span><div class=\"head\">\n\
            <h1> What Happens when the Function Already Returns a Value?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-79B92D2D-45D0-4011-A411-3127A5716A10\"></a></span>Some Softimage functions return both <span class=\"char_link\"><a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/scripting_RtnValDefined.htm#WSBAC00627FDA41F4DBFDDFE9988A39246-0026\">return values</a></span>. If the function has a return value explicitly defined, you cannot extract any output\n\
            arguments via the <span class=\"char_link\"><a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a></span> because the function is returning an a specific value instead.\n\
         </p>\n\
         <div><span class=\"anchor_wrapper\"><a name=\"GUID-F43F74C0-8862-40EE-9E4F-8767EFEA69D8\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6EA6AA3E-98BE-4118-8C3A-2772791DE7EF\"></a></span>You can check the <em class=\"strong\">Return Value</em> section in the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a> to see whether it uses an explicit return value and what that value is.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-8FF048B7-137E-48BB-9A7C-0CAABE755523\"></a></span>In these cases, VBScript must pass output parameters in order to retrieve the information\n\
            via output arguments but for JScript, and Python, other strategies must be considered.\n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-001B\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-265C3C2E-EE4A-488A-A690-BCEBC0972675\"></a></span>Strategies and Workarounds\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B57BC47-9CE1-4AF3-BEF2-70EB24C098E8\"></a></span>In most cases, there are special versions of those functions that use output arguments\n\
               and return values. These functions generally have the same name as the output argument\n\
               versions, but with \'<span class=\"code\" translate=\"no\">2</span>\' appended to the name. For example, the <a href=\"#!/url=./si_om/NurbsSurface.GetTrim.html\">NurbsSurface.GetTrim</a> function allows output arguments (see <span class=\"char_link\"><a href=\"#!/url=./files/vbs_ex.htm\">VBScript Example: Getting Output Arguments from a Method</a></span>), but the <a href=\"#!/url=./si_om/NurbsSurface.GetTrim2.html\">NurbsSurface.GetTrim2</a> function returns an array of output values (<span class=\"char_link\"><a href=\"#!/url=./files/js_ex.htm\">JScript Example: Using the Method Ô2\' Workaround</a></span>).\n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-001C\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-7DAF7FB6-DE7F-48C9-A4AB-1AE4071B61E8\"></a></span>Custom Command Workaround\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-247D0360-EC3F-45FF-9942-BF9DBBF70001\"></a></span>If there is no alternate (compliant) version of the function, your only option for\n\
                  a workaround is to create a VBScript <span class=\"char_link\"><a href=\"#!/url=./files/cus_cmds.htm\">custom command</a></span> to call the non-compliant command and return an array containing both the output\n\
                  arguments and return value.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-001D\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-6050EC90-E66B-48FC-8B10-5CD91014EA55\"></a></span>VBScript Example: Define the Work around Command\n\
                  </h4> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FB2C73E-6234-430B-B413-0F50F476598C\"></a></span>Note that this snippet contains the <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback for the custom command. See <span class=\"char_link\"><a href=\"#!/url=./files/vbs_cmd_workaround.htm\">Example: Custom Command Workaround for Both Output Arguments and Return Values</a></span> for the full implementation of this plug-in.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Execute callback for the custom command\n\
function MyGetSkeleton_Execute( InputObj )\n\
	\' Call the GetSkeleton command and pack the output \n\
	\' argument and the return value in an array \n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oSkel = GetSkeleton( InputObj, lIndex )\n\
	aReturn = Array( lIndex, oSkel )\n\
\n\
	\' Return the array\n\
	MyGetSkeleton_Execute = aReturn \n\
end function\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS9C9BD4629A5724409D1790B9C5DB9AC3-001E\"></a></span> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-D4FA9349-1ED6-4821-AB7E-874DC57660B2\"></a></span>JScript Example: Call the Work around Command\n\
                  </h4> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Execute callback for the custom command\n\
function MyGetSkeleton_Execute( InputObj )\n\
	\' Call the GetSkeleton command and pack the output \n\
	\' argument and the return value in an array \n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oSkel = GetSkeleton( InputObj, lIndex )\n\
	aReturn = Array( lIndex, oSkel )\n\
\n\
	\' Return the array\n\
	MyGetSkeleton_Execute = aReturn \n\
end function\n\
</pre></div> \n\
                  <h4><span class=\"anchor_wrapper\"><a name=\"GUID-7B714B3E-44E8-430C-A1AE-EF8EB1084085\"></a></span>JScript Example: Call the Work around Command\n\
                  </h4> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
NewScene( null, false );\n\
\n\
Create2DSkeleton( -3.004, 2.152, 0.000, -1.531, -1.163, 0.000, 0.000, 0.000, 1.000, 1 );\n\
AppendBone( \"eff\", 0.853, 1.396, 0.000 );\n\
AppendBone( \"eff\", 2.578, -1.532, 0.000 );\n\
\n\
// Returns a VBArray, which must be converted to a JS Array\n\
var RtnArray = MyGetSkeleton( \"bone1\" ).toArray();\n\
\n\
// The output argument is the first item (a Long)\n\
var MyObjIndex = RtnArray[0];\n\
LogMessage( \"Index of objects in skeleton: \" + MyObjIndex );\n\
\n\
// The return value is the second item (XSICollection)\n\
var MySkeleton = RtnArray[1];\n\
for ( i=0; i&lt;MySkeleton.Count; i++ ) {\n\
	LogMessage( \"Item[\" + i + \"] = \" + MySkeleton(i) );\n\
}\n\
\n\
// So both are available now in JScript\n\
// INFO : Index of objects in skeleton: 2\n\
// INFO : Item[0] = root\n\
// INFO : Item[1] = bone\n\
// INFO : Item[2] = bone1\n\
// INFO : Item[3] = bone2\n\
// INFO : Item[4] = eff\n\
</pre></div> \n\
               </div> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";