var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetSelFilter</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>SetSelFilter</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetSelFilter</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Sets the selection filter and activates the selection tool.</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetSelFilter( [SelFilter] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SelFilter		</td>\n\
		<td><a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
		<td>\n\
 Selection filter that specifies what type of elements to select. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection filter			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example demonstrates how to set the Edge filter \n\
\' with the SetSelFilter command using the string value.\n\
\'\n\
SetSelFilter \"Edge\" \n\
\' Alternatively you could use the matching string constant:\n\
SetSelFilter siEdgeFilter</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//\n\
// This example demonstrates how to set the Polygon filter \n\
// with the SetSelFilter command using the string constant.\n\
//\n\
SetSelFilter(siPolygonFilter);\n\
// Alternatively you could use the matching string value:\n\
SetSelFilter(\"Polygon\");</pre></td></tr>\n\
</table>\n\
</div><h4>3. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to set the Polygon filter \n\
# with the SetSelFilter command using the string constant.\n\
#\n\
from win32com.client import constants \n\
Application.SetSelFilter(constants.siCameraFilter)\n\
# Alternatively you could use the matching string value:\n\
Application.SetSelFilter(\"Camera\")</pre></td></tr>\n\
</table>\n\
</div><h4>4. C# Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"csharp\">// \n\
// This example demonstrates how to use the SetSelFilter command in C# to change\n\
// the selection filter to limit selection to scene objects. Depending on the\n\
// value of the inUseString input argument, either the string itself (true) or\n\
// the string constant representing the string (false) will be used to call SetSelFilter.\n\
// \n\
// Tip: You need to compile the generated code before you can load the plug-in.\n\
// After you compile the plug-in, you can load it by clicking Update All in the Plugin Manager.\n\
// \n\
using System;\n\
using Softimage.XSIOM; // Softimage object model\n\
using Softimage.XSIMath;\n\
using Softimage.XSIUtil;\n\
public class Base\n\
{\n\
	CXSIApplicationClass m_xsi;\n\
	CXSIFactoryClass m_fact;\n\
	CXSIUtilsClass m_utils;\n\
	protected Base()\n\
	{\n\
		m_xsi = new CXSIApplicationClass();\n\
		m_fact = new CXSIFactoryClass();\n\
		m_utils = new CXSIUtilsClass();\n\
	}\n\
	protected XSIApplication GetXSI()\n\
	{\n\
		return m_xsi;\n\
	}\n\
}\n\
public class XSIPlugin : Base\n\
{\n\
	public bool Load( PluginRegistrar in_reg )\n\
	{\n\
		in_reg.Author = \"SDK Documentation\";\n\
		in_reg.Name = \"SetSceneObjectSelFilterPlugin\";\n\
		in_reg.Major = 1;\n\
		in_reg.Minor = 0;\n\
		in_reg.RegisterCommand(\"SetSceneObjectSelFilter\", \"SetSceneObjectSelFilter\");\n\
		return true;\n\
	}\n\
	public bool Unload( PluginRegistrar in_reg )\n\
	{\n\
		String strPluginName = null;\n\
		strPluginName = in_reg.Name;\n\
		return true;\n\
	}\n\
}\n\
public class SetSceneObjectSelFilter : Base\n\
{\n\
	public bool Init( Context in_ctxt )\n\
	{\n\
		Command oCmd = null;\n\
		oCmd = (Command)in_ctxt.Source;\n\
		oCmd.Description = \"Demonstrates how to set the Selection Filter in Softimage to Scene Object\";\n\
		oCmd.Tooltip = \"Set Selection Filter to SceneObject\";\n\
		oCmd.SetFlag((int)siCommandCapabilities.siCannotBeUsedInBatch, true);\n\
		oCmd.ReturnValue = false;\n\
		ArgumentCollection oArgs = oCmd.Arguments;\n\
		oArgs.Add(\"inUseString\", siArgumentFlags.siArgumentInput, false, siVariantType.siBool);\n\
		return true;\n\
	}\n\
	// In C# you have to use the XSIApplication.ExecuteCommand method to invoke\n\
	// a command, so we are just implementing a command stub to simplify the call\n\
	// in the Execute function.\n\
	public void SetSelFilter(String SelFilter)\n\
	{\n\
		XSIApplication app = this.GetXSI();\n\
		// The SetSelFilter command takes only one argument: \'SelFilter\', which\n\
		// can be either the siObjectFilter string constant or the string to \n\
		// which it refers: \'sceneobject\'\n\
		object[] oCmdArgs = new object[1];\n\
		oCmdArgs[0] = SelFilter;\n\
		app.ExecuteCommand(\"SetSelFilter\", oCmdArgs);\n\
	}\n\
	public bool Execute(Context in_ctxt)\n\
	{\n\
		Command oCmd = null;\n\
		oCmd = (Command)in_ctxt.Source;\n\
		// Set the selection filter to scene object. Whether we use the string\n\
		// constant or the actual string depends on the value of inUseString.  \n\
		ArgumentCollection oArgs = oCmd.Arguments;\n\
		if ((bool)oArgs[0].Value == true)\n\
		{\n\
			SetSelFilter(\"SceneObject\");\n\
		} \n\
		else\n\
		{\n\
			// All string constants are members of the StringModule\n\
			SetSelFilter(StringModule.siObjectFilter);\n\
		}\n\
		return true;\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ActivatePolygonSelTool.html\">ActivatePolygonSelTool</a> <a href=\"#!/url=./si_cmds/ActivatePolygonSelToolWithNoObjStateChange.html\">ActivatePolygonSelToolWithNoObjStateChange</a> <a href=\"#!/url=./si_cmds/ActivateVertexSelTool.html\">ActivateVertexSelTool</a> <a href=\"#!/url=./si_cmds/ActivateVertexSelToolWithNoObjStateChange.html\">ActivateVertexSelToolWithNoObjStateChange</a> <a href=\"#!/url=./si_cmds/ActivateSampledPointSelTool.html\">ActivateSampledPointSelTool</a> <a href=\"#!/url=./si_cmds/ActivateSampledPointSelToolWithNoObjStateChange.html\">ActivateSampledPointSelToolWithNoObjStateChange</a> <a href=\"#!/url=./si_cmds/ActivateObjectSelTool.html\">ActivateObjectSelTool</a> <a href=\"#!/url=./si_cmds/ActivateObjectSelToolWithNoObjStateChange.html\">ActivateObjectSelToolWithNoObjStateChange</a> <a href=\"#!/url=./si_cmds/SelectObjectFilter.html\">SelectObjectFilter</a> <a href=\"#!/url=./si_cmds/SelectVertexFilter.html\">SelectVertexFilter</a> <a href=\"#!/url=./si_cmds/SelectSampledPointFilter.html\">SelectSampledPointFilter</a> <a href=\"#!/url=./si_cmds/SelectPolygonFilter.html\">SelectPolygonFilter</a> <a href=\"#!/url=./si_cmds/SelectEdgeFilter.html\">SelectEdgeFilter</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";