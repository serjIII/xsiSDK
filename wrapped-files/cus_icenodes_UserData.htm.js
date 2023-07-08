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
      <meta name=\"topicid\" content=\"GUID-C638B3A6-5071-467C-9E73-85EBCB7FC83A\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>User Data</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"XSI::MATH::CVector3f\", \"si_cpp/classXSI_1_1MATH_1_1CVector3f.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"size\", \"si_cpp/group__RenderMapDefine.html#gaa9831b27d43e13316c674746b6efccb1\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C638B3A6-5071-467C-9E73-85EBCB7FC83A\"></a></span><div class=\"head\">\n\
            <h1>User Data</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB410769-E983-4638-A3E1-F71B7E3D059D\"></a></span>Custom <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a> support user data which can be added with <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#PutUserData\">Context::PutUserData</a> and retrieved with <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#GetUserData\">Context::GetUserData</a>. Any data type supported by <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> can be used as user data type. User data is typically set from the <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a> callback, and any memory allocated in BeginEvaluate must be released in the <a href=\"#!/url=./si_cmds/cb_ICENode_EndEvaluate.html\">EndEvaluate</a> callback. You can also set the user data from the <a href=\"#!/url=./si_cmds/cb_ICENodes_Init.html\">Init</a> callback when the custom node gets created, in which case the <a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a> callback must be used for releasing any memory allocated in <a href=\"#!/url=./si_cmds/cb_ICENodes_Init.html\">Init</a>. The user data stored in <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a> or <a href=\"#!/url=./si_cmds/cb_ICENodes_Init.html\">Init</a> is always accessible from the <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> callback. However, unless the custom node threading mode is single-threading, the\n\
               <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html#PutUserData\">Context::PutUserData</a> property cannot be used from the Evaluate callback.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-659D3CC5-7B08-434D-A8FB-BAE7E3F8CF73\"></a></span>One important issue when using multiple threads is to avoid conflicts when one or\n\
               more threads need to modify the user data. Write access to the user data must be synchronized\n\
               with thread locks. If you\'re not careful, overlapping modifications to user data from\n\
               multiple threads may cause all sort of problems. Locking is a fundamental synchronization\n\
               mechanism that allows multiple threads to access shared data: when a thread holds\n\
               a lock to access the data, other threads that need to access the same data are halted\n\
               until the lock is released.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-76634598-498B-4E52-9A85-598B31C86E81\"></a></span>While using locks is a safe mechanism for sharing data, it may slow down the execution\n\
               of your custom ICENode since only one thread at a time can access the user data. Locks\n\
               can be overcome by using a thread safe buffer. This technique consists of creating\n\
               a buffer containing a copy of the user data for each evaluation thread created by\n\
               Softimage, and since each thread works with their own data copy data access conflicts\n\
               will not happen. Thread safe buffers must be created in the <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a> callback. The size of the buffer must be set with the number of evaluation threads\n\
               returned by ICEContextNode::GetEvaluationThreadCount. In some cases the number of\n\
               threads may increase for a given evaluation, therefore you should always make sure\n\
               your safe thread buffer can be extended to the new number of threads. The <a href=\"#!/url=./si_cmds/cb_ICENodes_Init.html\">Init</a> callback cannot be used for creating thread-safe buffers and locks must be used in\n\
               the <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> callback to avoid data access conflicts.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-E5F46D3D-B393-4B07-8717-891463C81634\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-938351F7-FD66-4792-9A8B-0769229FC0B0\"></a></span>Avoid using <a href=\"#!/url=./si_cpp/classXSI_1_1CValueArray.html\">CValueArray</a> to store C pointers, the <a href=\"#!/url=./si_cpp/classXSI_1_1CValue.html\">CValue</a> objects of type <span class=\"code\" translate=\"no\">siPrtType</span> are not supported by CValueArray.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A6CD515-6979-4B55-9595-3B839364073C\"></a></span>The following example demonstrates how to set and get user data from <a href=\"#!/url=./si_cmds/cb_ICENode_BeginEvaluate.html\">BeginEvaluate</a> using the technique of thread safe buffers:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// For storing CSampleData user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> objects\n\
#include &lt;vector&gt;\n\
\n\
// Simple user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> struct\n\
struct CSampleData \n\
{\n\
	CSampleData() : nLen(0), pBuffer(NULL) {}\n\
	~CSampleData() \n\
	{\n\
		if (pBuffer)\n\
			delete [] pBuffer;\n\
	}\n\
	\n\
	LONG nLen;\n\
	<a href=\"javascript:void(0)\" data=\"XSI::MATH::CVector3f\" class=\"a_multireflink\">XSI::MATH::CVector3f</a>* pBuffer;\n\
};\n\
	\n\
XSIPLUGINCALLBACK CStatus TestCustomICENode_BeginEvaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	\n\
	CValue userData = in_ctxt.GetUserData( );\n\
	\n\
	ULONG nThreadCount = in_ctxt.GetEvaluationThreadCount( );\n\
	std::vector&lt;CSampleData&gt;* pPerThreadData = NULL;\n\
	if ( userData.IsEmpty() )\n\
	{\n\
		pPerThreadData = new std::vector&lt;CSampleData&gt;;\n\
		in_ctxt.PutUserData( (CValue::siPtrType)pPerThreadData );\n\
	}\n\
	else\n\
	{\n\
		// Reuse the user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> buffer if already created.\n\
		pPerThreadData = (std::vector&lt;CSampleData&gt;*)(CValue::siPtrType)in_ctxt.GetUserData( );\n\
	}\n\
	\n\
	if ( pPerThreadData &amp;&amp; pPerThreadData-&gt;<a href=\"javascript:void(0)\" data=\"size\" class=\"a_multireflink\">size</a>() &lt; nThreadCount)\n\
	{\n\
		// Extend buffer if needed\n\
		for(ULONG i = (ULONG)pPerThreadData-&gt;<a href=\"javascript:void(0)\" data=\"size\" class=\"a_multireflink\">size</a>(); i &lt; nThreadCount; i++)\n\
		{\n\
			// Create a CSampleData object for each thread\n\
			pPerThreadData-&gt;push_back( CSampleData() );\n\
		}\n\
	}\n\
	return CStatus::OK;\n\
}\n\
	\n\
XSIPLUGINCALLBACK CStatus TestCustomICENode_Evaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	\n\
	// Get the user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> that we allocated in BeginEvaluate\n\
	std::vector&lt;CSampleData&gt;* pPerThreadData = (std::vector&lt;CSampleData&gt;*)(CValue::siPtrType)in_ctxt.GetUserData( );\n\
	\n\
	// The user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> array is indexed by the current thread ID\n\
	ULONG nThreadID = in_ctxt.GetCurrentThreadIndex( );\n\
	CSampleData&amp; userData = (*pPerThreadData)[ nThreadID ];\n\
	Application().LogMessage( L\"User <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> thread(\"+CString(nThreadID)+L\"): \" + CString( userData.nLen ) );\n\
	\n\
	// Processing code goes here ...\n\
	\n\
	return CStatus::OK;\n\
}\n\
	\n\
XSIPLUGINCALLBACK CStatus TestCustomICENode_EndEvaluate( ICENodeContext&amp; in_ctxt )\n\
{\n\
	\n\
	// Release memory allocated in BeginEvaluate\n\
	CValue userData = in_ctxt.GetUserData( );\n\
	if ( userData.IsEmpty() )\n\
	{\n\
		return CStatus::OK;\n\
	}\n\
	\n\
	std::vector&lt;CSampleData&gt;* pPerThreadData = (std::vector&lt;CSampleData&gt;*)(CValue::siPtrType)in_ctxt.GetUserData( );\n\
	delete pPerThreadData;\n\
	\n\
	// Clear user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a>\n\
	in_ctxt.PutUserData( CValue() );\n\
	\n\
	return CStatus::OK;\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";