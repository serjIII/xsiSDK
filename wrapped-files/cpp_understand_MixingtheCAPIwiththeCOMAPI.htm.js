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
      <meta name=\"topicid\" content=\"GUID-33EBA0AD-7EF3-496D-AEDF-BE02B2EEB547\" />\n\
      <meta name=\"indexterm\" content=\"CComAPIHandler\" />\n\
      <meta name=\"indexterm\" content=\"DataRepository: using with the CComAPIHandler\" />\n\
      <meta name=\"indexterm\" content=\"CComAPIHandler: accessing the DataRepository\" />\n\
      <meta name=\"indexterm\" content=\"ConvertObject\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Mixing the C++ API with the Softimage Object Model</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::CStatus\", \"si_cpp/classXSI_1_1CStatus.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-33EBA0AD-7EF3-496D-AEDF-BE02B2EEB547\"></a></span><div class=\"head\">\n\
            <h1>Mixing the C++ API with the Softimage Object Model</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E9E0636-DCE6-4B44-B95B-A828CE79F95D\"></a></span>The C++ API provides the <a href=\"#!/url=./si_cpp/classXSI_1_1CComAPIHandler.html\">CComAPIHandler</a> class and the ConvertObject function to help manage conversions between the C++ API\n\
               and the Softimage Object Model. The difference between the two is that ConvertObject()\n\
               gives you a real Automation (ActiveX) object, whereas the CComAPIHandler is a C++\n\
               API wrapper for the object model.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0030\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8E3032A3-5159-4F40-A1E7-5D3A5A0E7693\"></a></span> CComAPIHandler\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BEDCB5EB-AE32-42E9-9F61-3773B2467AA0\"></a></span>The CComAPIHandler class gives you access to members of the Automation object using\n\
                  <a href=\"#!/url=./si_cpp/classXSI_1_1CComAPIHandler.html#Call\">CComAPIHandler::Call</a> (for methods) and <a href=\"#!/url=./si_cpp/classXSI_1_1CComAPIHandler.html#GetProperty\">CComAPIHandler::GetProperty</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1CComAPIHandler.html#PutProperty\">CComAPIHandler::PutProperty</a> (for properties). For example:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Use the object model <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> of the Model::AddActionSource() function\n\
ActionSource oSource( in_oSelItem );\n\
CRef oModel = oSource.GetModel().GetRef();\n\
\n\
// To define an Automation object in C++ code, use the CComAPIHandler class\n\
CValue retVal;\n\
CComAPIHandler comHandler( oModel.GetRef() );\n\
\n\
// Now that you have an instance of the Model interface, you can use the\n\
// CComAPIHandler::Call member to execute the AddActionSource method\n\
comHandler.Call(  L\"AddActionSource\", retVal, L\"OO_\" + oSource.GetName() );\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC00FC0D-932F-40D7-A8A2-7A245F2872B0\"></a></span> This example demonstrates how to use the <a href=\"#!/url=./si_cpp/classXSI_1_1CComAPIHandler.html\">CComAPIHandler</a> to access the <a href=\"#!/url=./si_om/DataRepository.html\">DataRepository</a> object:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CRef oObj = Application().GetSelection().GetItem(0);\n\
\n\
CComAPIHandler ccomXSIUtils;\n\
\n\
ccomXSIUtils.CreateInstance( L\"XSI.Utils\");\n\
\n\
CComAPIHandler dataRep(ccomXSIUtils.GetProperty( L\"DataRepository\" )) ; \n\
\n\
<a href=\"javascript:void(0)\" data=\"XSI::CStatus\" class=\"a_multireflink\">XSI::CStatus</a> ret;\n\
CValue ioID;\n\
CValueArray inArgs;\n\
inArgs.Add(CValue(oObj));\n\
inArgs.Add(2L);\n\
ret = dataRep.Call( L\"GetIdentifier\", ioID, inArgs);\n\
\n\
Application().LogMessage(L\"Selected Object GUID is \" + ioID.GetAsText(),siInfoMsg);\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0031\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-92915A58-C357-4403-8C94-1857D2B525BE\"></a></span> ConvertObject\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F5FACC0-8359-4C08-B103-CCFA271D03D2\"></a></span>The global function ConvertObject() converts a <a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html\">CRef</a> object to a Softimage Automation object and vice-versa. This allows you to actually\n\
                  mix the object model and pure C++ inside your code.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Use the object model <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> of the Model::AddActionSource() function\n\
ActionSource oSource( in_oSelItem );\n\
CRef oModel = oSource.GetModel().GetRef();\n\
\n\
// Pass a CRef to ConvertObject and get an IDispatch* through a void* ptr\n\
ModelPtr oModelCOM = ( IDispatch* )ConvertObject( oModel );\n\
\n\
// Now you can use the new pointer to get at the object model methods\n\
ActionSourcePtr oNewSourceCOM = oModelCOM-&gt;AddActionSource( \"OO_\" &amp; oSource.GetName() );\n\
\n\
// Convert the new ActiveX Source object back to C++\n\
ActionSource oNewSource = ConvertObject( oNewSourceCOM );\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";