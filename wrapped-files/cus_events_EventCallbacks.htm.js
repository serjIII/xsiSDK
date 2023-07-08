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
      <meta name=\"topicid\" content=\"GUID-0FFD21BE-F9B8-4DCA-AFE8-C42636C02D5E\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: OnEvent Callback\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: OnEvent Callback\" />\n\
      <meta name=\"indexterm\" content=\"Python Example: OnEvent Callback\" />\n\
      <meta name=\"indexterm\" content=\"VBScript Example: OnEvent Callback\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Event Callbacks</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-0FFD21BE-F9B8-4DCA-AFE8-C42636C02D5E\"></a></span><div class=\"head\">\n\
            <h1>Event Callbacks</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F359FD00-8CC5-4712-9AC8-1C86A3A49632\"></a></span>An event handler is implemented by an <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html\">OnEvent</a> callback. All <span class=\"code\" translate=\"no\">OnEvent</span> callbacks have the same signature: they get a <a href=\"#!/url=./si_om/Context.html\">Context</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object as an argument, and return true or false. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE6F22389D4AF5541AB13394556078574-000F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A1353014-034A-42DD-A476-D56BCA15307A\"></a></span> C++ Example: OnEvent Callback\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIPLUGINCALLBACK CStatus &lt;event_name&gt;_OnEvent( CRef&amp; in_ctxt )\n\
{\n\
	Context ctxt( in_ctxt );\n\
\n\
	// 	Your code goes here ...\n\
\n\
	// 	Return false to perform the operation, true to abort\n\
	return false;\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE6F22389D4AF5541AB13394556078574-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C39469F1-8DCF-4B89-983E-D9905839D369\"></a></span>C# Example: OnEvent Callback\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
public class &lt;event_name&gt;\n\
{\n\
   public bool OnEvent( Context in_ctxt )\n\
   {\n\
		// 	Your code goes here ...\n\
	\n\
		// 	Return false to perform the operation, true to abort\n\
		return false;\n\
	}\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE6F22389D4AF5541AB13394556078574-0011\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-91F0D040-3C8F-4C7D-9B48-9D56EB48007C\"></a></span> JScript Example: OnEvent Callback\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function &lt;event_name&gt;_OnEvent( in_ctxt )\n\
{\n\
	// Your code goes here ...\n\
\n\
	// Return false to perform the operation, true to abort\n\
	return false;\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE6F22389D4AF5541AB13394556078574-0012\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8A979D8E-4777-4714-916A-868B90328115\"></a></span> Python Example: OnEvent Callback\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
def &lt;event_name&gt;_OnEvent( in_ctxt ):\n\
	# Your code goes here ...\n\
\n\
	# Return 0 (false) to perform the operation, 1 (true) to abort\n\
	return 0\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE6F22389D4AF5541AB13394556078574-0013\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-05A857CD-0851-4BDD-8922-05905854F16C\"></a></span> VBScript Example: OnEvent Callback\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Function &lt;event_name&gt;_OnEvent( in_ctxt )\n\
	\' Your code goes here ...\n\
\n\
	\' Return False to perform the operation, True to abort\n\
	&lt;event_name&gt;_OnEvent = False\n\
End Function\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE6F22389D4AF5541AB13394556078574-0014\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3CCA482A-DB15-43FA-8588-7601139CFDE3\"></a></span>When You Can Abort\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-34ECA862-8F92-4FFB-90EC-1F59CF4C9F1A\"></a></span>For operations such as save, import, and export, the <a href=\"#!/url=./si_cmds/cb_Event_OnEvent.html\">OnEvent</a> return value specifies whether to abort the operation. Return <span class=\"code\" translate=\"no\">True</span> to abort the operation, and otherwise return <span class=\"code\" translate=\"no\">False</span> to allow the operation to continue. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A20B8D8A-9281-4E5D-9B06-FBC21B846A01\"></a></span>You can abort the following events: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_C276123752684C6A95E6CE93CD1CCA87\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-95660F30-A4A0-4235-BF92-F22C8418C0D3\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnBeginFileExport</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E492CCD-5AEA-4071-9BD0-0089769F7CF4\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnBeginFileImport</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AAB583BC-F45E-40E5-A44A-0F39C5977D44\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnBeginFrame</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-35EFD64E-F1AA-46CD-AAB7-7E00EC3B151C\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnBeginNewScene</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-07A6BBD6-DAA3-4589-AA5F-00E58CA4C1C7\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnBeginSceneOpen</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FCF486E1-4874-4F87-A473-E6C8FC5C0442\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnBeginSceneSave</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F4DCE09-1A68-41D1-AB64-494937E92683\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnBeginSceneSave2</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-19785BFE-ABC5-47D6-8084-266EB7747989\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnBeginSceneSaveAs</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4FACBF4A-0879-417F-9222-7A5C15903C93\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnBeginSequence</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6BD0E50B-89E7-43F6-9307-E5BD56FE8881\"></a></span> <a href=\"#!/url=./si_om/siEventID.html\">OnTimer</a> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";