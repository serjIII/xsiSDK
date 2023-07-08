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
      <meta name=\"topicid\" content=\"GUID-EFDA7F96-C299-4DA0-802F-C7F7E0CF8535\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Adding Custom Parameters</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EFDA7F96-C299-4DA0-802F-C7F7E0CF8535\"></a></span><div class=\"head\">\n\
            <h1>Adding Custom Parameters</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CBB9C2F-363C-499D-A303-73C434DC3E5B\"></a></span>You can define special parameters on your self-installed custom operator using the\n\
               <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback and tweak the property page where they appear with the <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0041\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-27214BEE-B44C-48BA-9344-885F87BB9CBA\"></a></span>C++ Example: Defining custom parameters\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Add an Alpha parameter in the Define callback\n\
CStatus MyOp_Define( CRef&amp; in_ref )\n\
{\n\
	Context ctxt( in_ref );\n\
	CustomOperator op( ctxt.GetSource() );\n\
	Factory fact = Application().GetFactory();\n\
\n\
	// Define the parameters\n\
	Parameter param;\n\
	CRef pdef = fact.CreateParamDef( L\"Alpha\", siDouble, CValue(0.5), CValue(0.01), CValue(0.99) );\n\
	op.AddParameter( pdef, param );\n\
}\n\
\n\
// Put the Alpha parameter in its own grouping\n\
CStatus MyOp_DefineLayout( CRef&amp; in_ref )\n\
{\n\
	Context ctxt( in_ref );\n\
	PPGLayout layout( ctxt.GetSource() );\n\
	layout.Clear();\n\
\n\
	// Add a group for the Alpha parameter\n\
	layout.AddGroup( L\"Intensity\" );\n\
		layout.AddItem( L\"Alpha\" );\n\
	layout.EndGroup();\n\
\n\
	//...\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0042\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-88F40E4D-D310-4BE9-B7FE-8E0ECE573C31\"></a></span>JScript Example: Defining custom parameters\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Add an Alpha parameter in the Define callback\n\
function MyOp_Define( ctxt )\n\
{\n\
	var op = ctxt.Source;\n\
\n\
	// Define the parameters\n\
	var pdef = XSIFactory.CreateParamDef2( \"Alpha\", siDouble, 0.5, 0.01, 0.99 );\n\
	var param = op.AddParameter( pdef );\n\
\n\
	// ...\n\
}\n\
\n\
// Put the Alpha parameter in its own grouping\n\
function MyOp_DefineLayout( ctxt )\n\
{\n\
	var layout = ctxt.Source;\n\
	layout.Clear();\n\
\n\
	// Add a group for the Alpha parameter\n\
	layout.AddGroup( \"Intensity\" );\n\
		layout.AddItem( \"Alpha\" );\n\
	layout.EndGroup();\n\
\n\
	//...\n\
}\n\
</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-2146D59F-68F8-4F03-969A-E8EFD005C9EC\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-7025320F-A083-40D5-847B-20E1F3C54124\"></a></span>For runtime (non-Self-Installed) operators, you can use the <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method which allows you to define and create new parameters\n\
                        on the fly.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0043\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A9CCAF22-CC29-463E-B98E-E70FD444A631\"></a></span>What Kind of Parameters to Use\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E5A67A09-1169-4CA3-AEEC-76558C63C0F4\"></a></span>Parameters on a custom operator are very similar to parameters on a <a href=\"#!/url=./files/cus_ppg.htm\">custom property</a>. However <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html\">FCurve</a> and <a href=\"#!/url=./si_om/GridData.html\">GridData</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1GridData.html\">GridData</a> type parameters are not supported.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A24C20E9-91C3-45F7-84FF-956E10AE4437\"></a></span>Custom operators can have an input connection from a custom property as an alternative\n\
                  to having its own parameters. This is useful when FCurve or GridData parameters are\n\
                  needed or when the custom property acts as a central control panel for one or more\n\
                  operators that are deeply hidden in the scene.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";