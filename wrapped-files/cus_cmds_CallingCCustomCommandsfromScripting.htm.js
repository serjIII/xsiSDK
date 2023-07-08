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
      <meta name=\"topicid\" content=\"GUID-3CB259E5-9413-4B58-B6D9-39AC1CB84873\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: calling compiled commands from scripting\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: returning arrays\" />\n\
      <meta name=\"indexterm\" content=\"arrays: returning from custom commands\" />\n\
      <meta name=\"indexterm\" content=\"safe arrays and custom C++ commands\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Calling a C++ command that returns an array\" />\n\
      <meta name=\"indexterm\" content=\"python: handling arrays\" />\n\
      <meta name=\"indexterm\" content=\"Python Example: Calling a C++ command that returns an array\" />\n\
      <meta name=\"indexterm\" content=\"VBScript Example: Calling a C++ command that returns an array\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Calling C++ Custom Commands from Scripting</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"CValueArray\", \"si_cpp/classXSI_1_1CValueArray.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CRefArray\", \"si_cpp/classXSI_1_1CRefArray.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3CB259E5-9413-4B58-B6D9-39AC1CB84873\"></a></span><div class=\"head\">\n\
            <h1>Calling C++ Custom Commands from Scripting</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C49F2603-2BF8-427C-93B7-E30664150F4E\"></a></span> When a C++ custom command returns an array, the value received by the caller depends\n\
               on the scripting language, and whether a <a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a> or a <a href=\"#!/url=./si_cpp/classXSI_1_1CRefArray.html\">CRefArray</a> is returned. For example, if a command returns a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValueArray\" class=\"a_multireflink\">CValueArray</a></span>, then a JScript caller gets a safe array, but if a command returns a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CRefArray\" class=\"a_multireflink\">CRefArray</a></span>, then a JScript caller gets an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>. \n\
            </p><span class=\"anchor_wrapper\"><a name=\"TABLE_7691E31224D44DA4849EDB59E137DF99\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7A7F7EF9-6395-4B6F-9C1A-F7D1B4369588\"></a></span><p class=\"table-heading\">Language </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A31F254E-4521-4BD6-B31F-C17E63F3DE4B\"></a></span><p class=\"table-heading\">CRefArray </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5512F4D5-98DB-4240-A20D-4B21BE8AE2D1\"></a></span><p class=\"table-heading\">CValueArray </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-FE70694F-6679-40B4-9EC3-E9147C8ED0B8\"></a></span><p class=\"table-body\">VBScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-53AF8FC4-1035-495C-8BD7-7410D5F4E2FD\"></a></span><p class=\"table-body\">XSICollection </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-220278B6-69F6-43F2-B735-C96BCD107560\"></a></span><p class=\"table-body\">XSICollection </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EA589FAB-1165-476E-AFF7-9D2AB2494D55\"></a></span><p class=\"table-body\">JScript </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8585E7D4-6C04-4B73-A80B-E74D88E26F8A\"></a></span><p class=\"table-body\">XSICollection </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4E8BD6B0-32F0-492C-91A9-49100A62807C\"></a></span><p class=\"table-body\">safe array </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-297E4842-E006-4691-9A34-B480BE3236A8\"></a></span><p class=\"table-body\">Python </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-28114907-37DD-47F8-B03C-37DAE7508F42\"></a></span><p class=\"table-body\">XSICollection instance </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-71B951B3-7DAC-4E33-8749-8DC751ADFC46\"></a></span><p class=\"table-body\">tuple </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0042\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5B6CDC72-239C-484F-9F0D-2CB543FEB792\"></a></span> JScript Example: Calling a C++ command that returns an array\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
//\n\
// GetValueArray() is a C++ custom command that returns a CValueArray\n\
//\n\
\n\
var aSafeArray = GetValueArray();\n\
\n\
var aVBArray = new VBArray( aSafeArray );\n\
logmessage( typeof( aVBArray ) );\n\
logmessage( aVBArray.dimensions() );\n\
\n\
// Access the VBArray directly\n\
for (var i=0; i &lt;= aVBArray.ubound(1); i++)\n\
{\n\
	Application.LogMessage( aVBArray.getItem(i).fullname );\n\
}\n\
\n\
// Convert the VBArray to a JScript array\n\
var aJSarray = aVBArray.toArray();\n\
for (e=new Enumerator(aJSarray);!e.atEnd();e.moveNext())\n\
{\n\
	var o = e.item();\n\
	logmessage( o.fullname );\n\
}\n\
\n\
//\n\
// GetRefArray() is a C++ custom command that returns a CRefArray\n\
//\n\
\n\
var objects = GetRefArray();\n\
logmessage( objects.type );	//INFO : XSICollection\n\
for (e=new Enumerator(objects);!e.atEnd();e.moveNext())\n\
{\n\
	var o = e.item();\n\
	Application.LogMessage( o.fullname );\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0043\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BAC2174B-68AE-48C9-A4A8-7FEA7B0AF687\"></a></span> Python Example: Calling a C++ command that returns an array\n\
               </h2>   \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
#\n\
# GetValueArray is a C++ custom command that returns a CValueArray\n\
#\n\
\n\
objects = Application.GetValueArray()\n\
\n\
Application.Logmessage( unicode(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>(objects)) )#INFO : &lt;<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'tuple\'&gt;\n\
\n\
for o in objects:\n\
	Application.LogMessage( o.name )\n\
	Application.Logmessage( unicode(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>(o)) )#INFO : &lt;<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'instance\'&gt;\n\
	Application.LogMessage( Application.classname(o) )\n\
\n\
#\n\
# GetRefArray is a C++ custom command that returns a CRefArray\n\
#\n\
\n\
objects = Application.GetRefArray()\n\
Application.Logmessage( unicode(<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>(objects)) )#INFO : &lt;<a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \'instance\'&gt;\n\
Application.Logmessage( objects.type )# XSICollection\n\
\n\
for o in objects:\n\
	Application.LogMessage(o.name)\n\
\n\
for i in range(objects.Count):\n\
	Application.LogMessage(objects(i).FullName)</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-0044\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-ADEB9201-3DD2-4687-9607-86E7B8B3B0B3\"></a></span> VBScript Example: Calling a C++ command that returns an array\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'\n\
\' GetValueArray() returns a CValueArray\n\
\'\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> objects = GetValueArray()\n\
\n\
logmessage( typename( objects ) )\'INFO : Object\n\
logmessage( objects.type )\'INFO : XSICollection\n\
\n\
for each o in objects\n\
	logmessage o.name\n\
next\n\
\'\n\
\' GetRefArray() returns a CRefArray\n\
\'\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> objects = GetRefArray()\n\
logmessage typename( objects )\'INFO : Object\n\
logmessage( objects.type )\'INFO : XSICollection\n\
for each o in objects\n\
	logmessage o.name\n\
next</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";