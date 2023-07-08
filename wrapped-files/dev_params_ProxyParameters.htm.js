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
      <meta name=\"topicid\" content=\"GUID-CB07227C-BF24-4155-B1D3-C4C706C1BDD6\" />\n\
      <meta name=\"indexterm\" content=\"proxy parameters: creating and accessing\" />\n\
      <meta name=\"indexterm\" content=\"VBScript Example: Creating and Finding a Proxy Parameter\" />\n\
      <meta name=\"indexterm\" content=\"Example: Creating and Finding a Proxyarameter\" />\n\
      <meta name=\"indexterm\" content=\"proxy parameters: self-installing plug-ins\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Using Proxy Parameters in a Self-Installing Custom Property\" />\n\
      <meta name=\"indexterm\" content=\"Example: Using Proxy Parameters in a Self-Installing Custom Property\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Proxy Parameters</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-CB07227C-BF24-4155-B1D3-C4C706C1BDD6\"></a></span><div class=\"head\">\n\
            <h1>Proxy Parameters</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B23ABC7D-FE1F-481E-AAE8-EB9A0E126D51\"></a></span>A proxy parameter is a kind of a linked custom parameter, but with a fundamental difference.\n\
               Linked custom parameters can drive target parameters (that is, the parameters they\n\
               are linked to), but they are still separate and different parameters. This means that\n\
               when you set keyframes, you key the custom parameter and not the driven parameter.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1ADBA6C-B2E6-46B8-8C51-65AC61D5A6A6\"></a></span>So what do you do when you want to drive the actual parameter or expose only certain\n\
               parameters to build a custom property editor? You can use <em class=\"mild\">proxy parameters</em>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-383B4805-FE4A-4701-BFAF-FFB41FE0ACE8\"></a></span>Unlike custom parameters, proxy parameters are actually cloned parameters: they reflect\n\
               the data of another parameter in the scene. Any operation done on a proxy parameter\n\
               has the same result as if it had been done on the real parameter itself (change a\n\
               value, save a key, etc.).\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-3BC0F820-3C4C-4919-86D4-B5188E9EB2E1\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-95C73EA9-16D8-479B-B2FD-D59D9233829B\"></a></span>For more information about proxies, see the user guide.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0027\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2646101E-0B70-486B-B94C-C877932FA891\"></a></span> Creating and Accessing Proxy Parameters\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1099D81A-6C5F-4103-8493-856AB1A72676\"></a></span>You can use the <a href=\"#!/url=./si_om/CustomProperty.AddProxyParameter.html\">CustomProperty.AddProxyParameter</a> method or <a href=\"#!/url=./si_cmds/AddProxyParam.html\">AddProxyParam</a> command to create the <a href=\"#!/url=./si_om/ProxyParameter.html\">ProxyParameter</a> object, which gives you access to the master parameter (through the <a href=\"#!/url=./si_om/ProxyParameter.MasterParameter.html\">ProxyParameter.MasterParameter property</a>). Otherwise, finding a proxy parameter is the same procedure as finding a regular\n\
                  parameter.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0028\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-23BFD146-0954-4A6F-A501-E3F55C12E44A\"></a></span> VBScript Example: Creating and Finding a Proxy Parameter\n\
                  </h3>   \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'-----------------------------------------------------\n\
	\'SETUP\n\
\'\n\
\' Set up scene with a null, a cube and a cpset\n\
\' containing a proxy to the cube.sclx parameter\n\
NewScene , false\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> root = ActiveSceneRoot\n\
root.AddNull\n\
root.AddGeometry \"Cube\", \"MeshSurface\"\n\
\n\
\'-----------------------------------------------------\n\
	\'CREATION\n\
\'\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> cpset = root.AddCustomProperty( \"proxy_test\" )\n\
cpset.AddProxyParameter \"cube.kine.local.sclx\"\n\
\n\
\n\
\'-----------------------------------------------------\n\
	\'SEARCH\n\
\'\n\
\' Get a pointer to the proxy parameter and return its info\n\
\' NB: The AddProxyParameter method returns the parameter, so this would not\n\
\' normally be necessary, this is just to demonstrate finding existing proxies\n\
if TypeName(cpset) &lt;&gt; \"Nothing\" then\n\
	bFound = false\n\
	for each pxy in cpset.Parameters\n\
		if TypeName(pxy) = \"ProxyParameter\" then\n\
			bFound = true\n\
			LogMessage pxy.FullName &amp; \" is linked to \" &amp; pxy.MasterParameter.FullName\n\
		end if\n\
	next\n\
	if Not(bFound) then\n\
		LogMessage \"Could not find a proxy parameter on cpset.\"\n\
	end if\n\
else\n\
	LogMessage \"Could not find \'proxy test\' custom pset.\"\n\
end if\n\
\n\
\'-----------------------------------------------------\n\
	\'OUTPUT\n\
\'\n\
\'INFO : \"proxy_test.cube_sclx is linked to cube.kine.local.sclx\"\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0029\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3078328A-5AF6-491B-9C17-56FFD60A3A7B\"></a></span>Proxy Parameters in a Self-Installing Plug-in\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-899CF00A-5571-44CD-94E3-5CCE1EBF1555\"></a></span>You can use proxy parameters in self-installing custom properties as well. Instead\n\
                  of defining them in the <a href=\"#!/url=./si_cmds/cb_Property_OnInit.html\">OnInit</a> callback, check to see if they have already been defined in the OnInit callback and\n\
                  if not, define them and then refresh the page.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-002A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-4B6DAAC4-FCD5-42AC-B66A-F27C6D3E261A\"></a></span> JScript Example: Using Proxy Parameters in a Self-Installing Custom Property\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD3B5AB1-DEE9-4DB4-A716-885A46E7FE74\"></a></span>This example basically does the same thing as the previous <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_ProxyParameters.htm#WSED592B8513B33F4E98849086F360A587-0028\">VBScript example</a></span> but inside a self-installing custom property plug-in. Notice that opening the property\n\
                     page more than once does not create new proxy parameters.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
//-----------------------------------------------------\n\
//	SETUP\n\
//\n\
// Set up scene with a null, a cube and a cpset containing a proxy to the cube.sclx parameter\n\
NewScene( null, false );\n\
var root = Application.ActiveSceneRoot;\n\
root.AddNull();\n\
root.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
\n\
//-----------------------------------------------------\n\
//	SELF-INSTALLING PROPERTY \n\
//\n\
// Write the helper functions under CREATION &amp; SEARCH below to the plug-in file\n\
var fso = XSIFactory.CreateObject( \"Scripting.FileSystemObject\" );\n\
var sFilename = XSIUtils.BuildPath( Application.InstallationPath(siUserPath),\n\
	\"Application\", \"Plugins\", \"ProxyParamDemo.js\" );\n\
var ts = fso.CreateTextFile( sFilename, true /* overwrite old ones */ );\n\
ts.Write( XSILoadPlugin.toString() + ProxyParamDemo_Define.toString() + \n\
	ProxyParamDemo_DefineLayout.toString() + ProxyParamDemo_OnInit );\n\
\n\
// Load the plug-in and then open the property page (to fire the OnInit callback)\n\
var oPlugin = Application.LoadPlugin( sFilename );\n\
var oCusProp = root.AddProperty( oPlugin.Items(0).Name );\n\
var bCancel = InspectObj( oCusProp, \"\", \"ProxyParamDemo\", siModal, false );\n\
\n\
\n\
//-----------------------------------------------------\n\
//	OUTPUT\n\
//\n\
//INFO : ProxyParamDemo.cube_sclx is linked to cube.kine.local.sclx\n\
\n\
\n\
//-----------------------------------------------------\n\
//	CREATION &amp; SEARCH\n\
//\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	in_reg.Author = \"Demo\";\n\
	in_reg.Name = \"ProxyParamDemoPlugin\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
\n\
	in_reg.RegisterProperty(\"ProxyParamDemo\");\n\
	return true;\n\
}\n\
\n\
function ProxyParamDemo_Define( in_ctxt )\n\
{\n\
	var oCustomProperty = in_ctxt.Source;\n\
	return true;\n\
}\n\
\n\
function ProxyParamDemo_DefineLayout( in_ctxt )\n\
{\n\
	var oLayout = in_ctxt.Source;\n\
	oLayout.Clear();\n\
	return true;\n\
}\n\
\n\
function ProxyParamDemo_OnInit()\n\
{\n\
	// Get the custom property\n\
	var oCustomProperty = PPG.Inspected.Item(0);\n\
	\n\
	// Does the proxy parameter already exist? If not, create it\n\
	if ( oCustomProperty.Parameters.Count &lt; 1 ) {\n\
		// Make sure the cube actually exists\n\
		var oCube = Application.ActiveSceneRoot.FindChild( \"\", siCubePrimType );\n\
		if ( oCube ) {\n\
			oCustomProperty.AddProxyParameter( oCube.sclx );\n\
		} else {\n\
			Application.LogMessage( \"Could not create proxy parameter because the cube does not exist.\", siWarning );\n\
		}\n\
	}\n\
	\n\
	// Check each parameter to find the proxy\n\
	var eParams = new Enumerator( oCustomProperty.Parameters );\n\
	for ( ; !eParams.atEnd(); eParams.moveNext() ) {\n\
		var oProxy = eParams.item();\n\
		if ( oProxy.IsClassOf(siProxyParameterID) ) {\n\
			Application.LogMessage( oProxy.FullName + \" is linked to \" + oProxy.MasterParameter.FullName );\n\
		}\n\
	}\n\
	\n\
	// Refresh the layout so that it appears\n\
	PPG.Refresh();\n\
}</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";