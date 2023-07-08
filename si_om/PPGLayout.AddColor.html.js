var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGLayout.AddColor</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>PPGLayout.AddColor</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.AddColor <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This method is similar to <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> but it helps add\n\
a color widget to a layout.  There are two variations of the Color widget, \n\
siControlRGBA and siControlRGB.  Rather than a single parameter, this control\n\
reads and writes a separate parameter for each \"channel\" of the color.\n\
<br /><br />\n\
To successfully create an RGBA color control on a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>, first\n\
add four siDouble or siFloat parameters to the control, for example \"MyR\", \"MyG\", \"MyB\", and \"MyA\".\n\
The naming scheme is not important but the parameters must be consecutive.  This parameters\n\
should have a UI Range of 0 to 1 because the values are stored in normalized format.  However\n\
you can have a larger actual Range if you want to support colors outside the normal color space.  \n\
(See <a href=\"#!/url=./si_om/Parameter.SuggestedMax.html\">Parameter.SuggestedMax</a> and <a href=\"#!/url=./si_om/Parameter.Max.html\">Parameter.Max</a>).\n\
<br /><br />\n\
The default control for a siDouble parameter is siControlNumber, but the color widget\n\
can be displayed instead by calling this method and specifying the name of the first parameter, for example\n\
\"MyR\".  To read the color value through the object model, just refer to the values of the four\n\
parameters, for example \"MyG\" will contain the normalized green component of the color.\n\
<br /><br />\n\
Note: Shaders support colors directly as a native \"strong\" type.  So rather than having multiple\n\
parameters of type siDouble or siFloat, they use a single parameter of type \"Color\".\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PPGItem PPGLayout.AddColor( String in_RedComponentParamName, String in_opt_Label, Boolean in_opt_Alpha );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PPGLayout.AddColor( RedComponentParamName, [Label], [Alpha] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RedComponentParamName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Script Name of the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> that represents the Red\n\
		component of the color.  The names of the Green, Blue and optional Alpha parameters\n\
		do not need to be specified because Softimage uses the parameters that are consecutive after\n\
		the Red component.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Label		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		Specify the text which appears to the left of the Color Widget.  \n\
		If not specified here, the name of the parameter\n\
		(see <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a>) or <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a> of the\n\
		red component parameter appears instead.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Alpha		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
		Specifies whether the color should include an Alpha channel.  This\n\
		argument decides whether a siControlRGBA or siControlRBG is created.\n\
				<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
false			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Proxy Parameters are an useful way to centralize parameters from\n\
	different objects on the same property, or even to build a simplified\n\
	version of a property page.\n\
	This example demonstrates creation of a custom property set\n\
	that only shows a few items of the Shader that it controls,\n\
	but maintains a pleasing layout.\n\
*/\n\
NewScene( null, false ) ;\n\
var oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" ) ;\n\
oSphere.AddMaterial( \"Phong\"  );\n\
var oPhongShader = oSphere.Material.Shaders(0) ;\n\
// This is a Boolean for enabling diffuse\n\
var oDiffuseEnable = oPhongShader.Parameters( \"diffuse_inuse\" ) ;\n\
// These are CompoundParameters, each with R,G,B sub-parameters\n\
var oAmbientParam = oPhongShader.Parameters( \"ambient\" ) ;\n\
var oDiffuseParam = oPhongShader.Parameters( \"diffuse\" ) ;\n\
var oCustomProperty = oSphere.AddProperty(\"CustomProperty\",false,\"Proxies\");\n\
// We specify a name to avoid having a long one like \"sphere_Material_Phong_diffuse_inuse\"\n\
oCustomProperty.AddProxyParameter( oDiffuseEnable, \"Enable\", \"Enable\" );\n\
oCustomProperty.AddProxyParameter( oDiffuseParam.Parameters(\"red\"), \"Diffuse\", \"Diffuse\" );\n\
oCustomProperty.AddProxyParameter( oDiffuseParam.Parameters(\"green\"));\n\
oCustomProperty.AddProxyParameter( oDiffuseParam.Parameters(\"blue\"));\n\
oCustomProperty.AddProxyParameter( oAmbientParam.Parameters(\"red\"), \"Ambient\", \"Ambient\" );\n\
oCustomProperty.AddProxyParameter( oAmbientParam.Parameters(\"green\"));\n\
oCustomProperty.AddProxyParameter( oAmbientParam.Parameters(\"blue\"));\n\
// If we inspect the object now we would see 6 separate sliders,\n\
// each controlling a different component of the colors\n\
// We can create a custom layout to clean up the display\n\
var oLayout = oCustomProperty.PPGLayout\n\
oLayout.AddGroup( \"Phong Diffuse\" )\n\
	oLayout.AddItem( \"Enable\" ) ;\n\
	// Just for fun, show the ambient before the diffuse, which\n\
	// is the opposite of the normal Phong Property Page\n\
	oLayout.AddColor( \"Ambient\", \"Ambient\", false ) ;\n\
	oLayout.AddColor( \"Diffuse\", \"Diffuse\", false ) ;\n\
oLayout.EndGroup() ;\n\
oLayout.Logic = Enable_OnChanged.toString() ;\n\
oLayout.Language = \"JScript\" ;\n\
// Show both dialogs.  You will see that both items\n\
// are identical.\n\
InspectObj ( oCustomProperty, null, null, siLock ) ;\n\
InspectObj ( oPhongShader, null, null, siLock ) ;\n\
function Enable_OnChanged()\n\
{\n\
	// A little Property Page event code to properly\n\
	// grey out the color controls if the Disable checkbox is\n\
	// clicked\n\
	bEnable = PPG.Enable.Value ;\n\
	// To disable the color control we just disable the proxy\n\
	// parameter representing the \"red\" component\n\
	PPG.Ambient.Enable( bEnable ) ;\n\
	PPG.Diffuse.Enable( bEnable ) ;	\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> <a href=\"#!/url=./si_om/PPGItem.Label.html\">PPGItem.Label</a> <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a> <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";