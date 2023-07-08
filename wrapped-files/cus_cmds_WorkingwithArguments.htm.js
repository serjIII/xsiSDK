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
      <meta name=\"topicid\" content=\"GUID-08147419-B343-4DE7-B07B-6B571D1775A8\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: arguments in the Execute callback\" />\n\
      <meta name=\"indexterm\" content=\"arguments: custom commands (Execute callback)\" />\n\
      <meta name=\"indexterm\" content=\"Arguments context attribute\" />\n\
      <meta name=\"indexterm\" content=\"Context: Arguments attribute\" />\n\
      <meta name=\"indexterm\" content=\"attributes: Arguments\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Working with Arguments</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"CValueArray\", \"si_cpp/classXSI_1_1CValueArray.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CValue\", \"si_cpp/classXSI_1_1CValue.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-08147419-B343-4DE7-B07B-6B571D1775A8\"></a></span><div class=\"head\">\n\
            <h1>Working with Arguments</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF5241F5-B589-4EEA-A3E9-CD26B8CFD52C\"></a></span> For scripted commands, the <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback takes the same arguments as the command. The order in which you add the\n\
               arguments determines how Softimage passes data into the <span class=\"code\" translate=\"no\">Execute</span> callback. \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// [ JScript ]\n\
function MyCommand_Init( ctxt )\n\
{\n\
	// Get the Command object from the callback context\n\
	var oCmd;\n\
	oCmd = ctxt.Source;\n\
\n\
	// Get the ArgumentCollection\n\
	var oArgs;\n\
	oArgs = oCmd.Arguments;\n\
\n\
	oArgs.AddWithHandler(<em class=\"strong\">\"Arg0\"</em>,\"Collection\");\n\
	oArgs.Add( <em class=\"strong\">\"Arg1\"</em>, siArgumentInput, false );\n\
\n\
	return true;\n\
}\n\
function MyCommand_Execute( <em class=\"strong\">Arg0</em>, <em class=\"strong\">Arg1</em> )\n\
{\n\
	...\n\
}</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4B05703-A955-47CE-AB0D-A7C9F61E5F3E\"></a></span>A C++ command gets a <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object that contains the command arguments in its <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Arguments attribute</a>: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++\n\
XSIPLUGINCALLBACK CStatus MyCommand_Execute( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	CValueArray args = ctxt.GetAttribute(L\"Arguments\");\n\
\n\
	CValue objects = args[0];\n\
	CValue flag = args[1];\n\
\n\
#ifdef _DEBUG\n\
	Application app;\n\
	for (long i=0; i&lt;args.GetCount(); i++)\n\
	{\n\
		app.LogMessage( L\"Arg\" + CValue(i).GetAsText() + L\" : \" \n\
			+ L\"DataType = \" + CValue( (long)args[i].m_t ).GetAsText() );\n\
	}\n\
#endif\n\
	...\n\
	return CStatus::OK;\n\
}</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-84E5816D-2E91-4D21-B981-DC47A1D54491\"></a></span> The <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Arguments attribute</a> is a <a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a>. Each element of this array is a <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> object that stores an argument, which could be a boolean, numeric, or string value,\n\
               a single Softimage object, or a collection of objects. For example, if you add an\n\
               argument using the Collection argument handler: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
oArgs.AddWithHandler( L\"objects\", L\"Collection\" );</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-77BE80DA-968F-4E7B-B8C2-AFF1CDAC0AA0\"></a></span>then in the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValueArray\" class=\"a_multireflink\">CValueArray</a></span> of arguments, there will be a CValue element that stores a collection of objects:\n\
               \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus MyCommand_Execute( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
	CValueArray args = ctxt.GetAttribute(L\"Arguments\");\n\
\n\
	// CValue::operator CValueArray() automatically converts \n\
	// args[0], which is a CValue, to a CValueArray\n\
	CValueArray objects = args[0];\n\
	for (long i=0; i&lt;objects.GetCount(); i++)\n\
	{\n\
		// objects[i] is a CValue object that holds a CRef to an object\n\
		CRef ref = objects[i];			// CValue::operator CRef() does the conversion for us\n\
		if ( ref.GetClassID() == siX3DObjectID )\n\
		{\n\
			// Construct an X3DObject from the CRef\n\
			X3DObject obj( ref );\n\
			...\n\
		}		\n\
	}\n\
	...\n\
}</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7B649E7-D92E-4E8A-8DF4-8EA75E8B6286\"></a></span>Note that if you use the SDK Command Wizard to generate your C++ command, the wizard\n\
               always assigns the arguments to <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> objects like this: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CValue Arg0 = args[0];\n\
CValue Arg1 = args[1];</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-85E32530-C195-4B20-819E-3E5A5CE0DD7D\"></a></span>However, args[i] is a <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span>, and the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CValue\" class=\"a_multireflink\">CValue</a></span> class provides a set of conversion operators that allow you to do this instead: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CValueArray objects = args[0];	// arg that uses the Collection arg handler\n\
CRef obj_ref = args[1];// arg that uses the SingleObj arg handler\n\
bool flag = args[1];// boolean arg\n\
CString <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> = args[2];// string arg</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";