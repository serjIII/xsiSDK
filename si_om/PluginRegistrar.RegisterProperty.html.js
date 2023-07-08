var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PluginRegistrar.RegisterProperty</title>\n\
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
            <h1>PluginRegistrar.RegisterProperty</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a>.RegisterProperty</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Registers a new type of <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a>. To create instances of this \n\
CustomProperty, use <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a>.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PluginItem PluginRegistrar.RegisterProperty( String in_name );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = PluginRegistrar.RegisterProperty( Name );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
\n\
		The name of the property (actually, the name of the <a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a> object created for \n\
		this property). Instances of the property have this name as their <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a>.\n\
		It should begin with a letter and contain only letters, numbers and the underscore character. It is \n\
		recommended to use a prefix based on your company or plug-in name.\n\
		<br /><br />\n\
		If a property name contains spaces (for example, \"My Custom Property\"), the callback \n\
		function names must omit the spaces (for example, \"MyCustomProperty_DefineLayout\").\n\
		<br /><br />\n\
		Property names must be unique. To avoid naming conflicts, it is recommended to use a prefix\n\
		based on your company name or the plug-in name (for example, \"ACME_TornadoKit_Configuration\").\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	\"SimpleProp\"\n\
	Example of a script-based Custom Property plug-in\n\
	To try out this example, use the Plug-in Tree to create an empty plug-in, \n\
	replace the generated code with the example code, and save the file. Softimage\n\
	will automatically load the plug-in, and you can create an instance of the\n\
	property by right-clicking the property in the Plug-in Tree and choosing\n\
	Create Property.\n\
	(You can also load the plug-in without restarting Softimage - see\n\
	XSIApplication.LoadPlugin)\n\
*/\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	// Called on startup of Softimage to defined\n\
	// what is contained in the script.  (We could potentially\n\
	// implement many PluginItems in the same script)\n\
	in_reg.Author = \"Softimage SDK Team\" ;\n\
	in_reg.Name = \"SDK Example - Simple Custom Property\" ;\n\
	in_reg.Major = 1 ;\n\
	in_reg.Minor = 1 ;\n\
	in_reg.RegisterProperty( \"SimpleProp\" ) ;\n\
	return true ;\n\
}\n\
function SimpleProp_Define( io_Context )\n\
{\n\
	//Called when a new instance of the Custom Property is created\n\
	//Define is not called when the plug-in is updated or reloaded.\n\
	var oCustomProperty = io_Context.Source\n\
	oCustomProperty.AddParameter3( \"U\", siDouble, 0.3, 0.0, 1.0  ) ;\n\
	oCustomProperty.AddParameter3( \"V\", siDouble, 0.75, 0.0, 1.0  ) ;	\n\
	oCustomProperty.AddParameter3( \"LockUV\",siBool,false,null,null,false ) ;		\n\
	oCustomProperty.AddParameter3( \"ShowInfo\",siBool,false,null,null,false ) ;\n\
	// Some static text that we will dynamically show and hide\n\
	strInfo = \"This is an sdk example showing a Custom\\r\\n\" +\n\
			  \"Property that is defined inside a script-based\\r\\n\" +\n\
			  \"plug-in.\" ;\n\
	var oParameter = oCustomProperty.AddParameter3( \"InfoStatic\", siString ) ;		\n\
	oParameter.Show( false ) ;\n\
	oParameter.Value = strInfo ;\n\
}\n\
function SimpleProp_DefineLayout( io_Context )\n\
{\n\
	// Called once per Softimage session, or after\n\
	// a call to XSIUtils.Reload\n\
	var oPPGLayout = io_Context.Source\n\
	//Important first step is to erase any existing contents\n\
	oPPGLayout.Clear() ;\n\
	oPPGLayout.AddGroup( \"Data\" ) ;\n\
	oPPGLayout.AddRow() ;\n\
	var oItem =	oPPGLayout.AddItem( \"U\" ) ;\n\
	oItem.SetAttribute( siUIThumbWheel, true ) ;\n\
	oItem.LabelMinPixels = 20 ;\n\
	oItem.LabelPercentage = 1 ;	\n\
	oItem =	oPPGLayout.AddItem( \"V\" ) ;\n\
	oItem.SetAttribute( siUITreadmill, true ) ;\n\
	oItem.LabelMinPixels = 20 ;\n\
	oItem.LabelPercentage = 1  ;\n\
	oPPGLayout.EndRow() ;\n\
	oPPGLayout.AddItem( \"LockUV\", \"Lock UV\" ) ;	\n\
	oPPGLayout.EndGroup() ;\n\
	oPPGLayout.AddGroup() ;	\n\
	// The InfoStatic is always in the layout,\n\
	// but it will not appear if siNotInspected \n\
	// capability has been set by calling Parameter.Show(false)\n\
	oItem = oPPGLayout.AddItem( \"InfoStatic\", \"\", siControlStatic ) ;\n\
	oItem.SetAttribute( siUIValueOnly, true ) ;\n\
	oPPGLayout.AddItem( \"ShowInfo\", \"Show Info\" ) ;	\n\
	oPPGLayout.EndGroup() ;\n\
	oPPGLayout.AddButton( \"Done\" ) ;\n\
}\n\
//\n\
// Logic Code - these callbacks are called when\n\
// events happen in the user interface\n\
//\n\
// The syntax is basically the same as SPDL logic\n\
// but notice how each function uses a prefix based on the\n\
// Custom Property that we registered, i.e. \n\
// \"SimpleProp_\"\n\
//\n\
function SimpleProp_OnInit()\n\
{\n\
	//Called when the UI first appears.\n\
	Application.LogMessage( \"Someone is inspecting \" + \n\
		PPG.Inspected(0).FullName ) ;\n\
}\n\
function SimpleProp_Done_OnClicked()\n\
{\n\
	// See the documentation for\n\
	// PPG.Close for more info about this\n\
	// technique.\n\
	// Self destruct the property page\n\
	DeleteObj( PPG.Inspected(0) ) ;\n\
	// Close the property page\n\
	PPG.Close() ;\n\
}\n\
function SimpleProp_ShowInfo_OnChanged()\n\
{\n\
	// Toggle the visibility of the static text\n\
	PPG.InfoStatic.Show( PPG.ShowInfo.Value ) ;\n\
	// It isn\'t strictly necessary to call this for\n\
	// simple cases of hiding and showing controls,\n\
	// but it ensures that the property page is fully\n\
	// redrawn and resized.\n\
	PPG.Refresh() ;\n\
}\n\
// The following three logic routines force both \n\
// parameters to have the same value\n\
function SimpleProp_U_OnChanged()\n\
{\n\
	if ( PPG.LockUV.Value )\n\
	{	\n\
		// Note: Changing the value from\n\
		// within the logic code will not \n\
		// result in SimpleProp_V_OnChanged\n\
		// being called.  So there is\n\
		// minimal risk of infinite loops.\n\
		PPG.V.Value = PPG.U.Value ;\n\
	}\n\
}\n\
function SimpleProp_V_OnChanged()\n\
{\n\
	if ( PPG.LockUV.Value )\n\
	{	\n\
		PPG.U.Value = PPG.V.Value ;\n\
	}\n\
}\n\
function SimpleProp_LockUV_OnChanged()\n\
{\n\
	if ( PPG.LockUV.Value )\n\
	{\n\
		// When locking is enabled make sure\n\
		// that the two values snap to the same,\n\
		// value.		\n\
		avg = ( PPG.U.Value + PPG.V.Value	 ) / 2 ;\n\
		PPG.U.Value = avg ;\n\
		PPG.V.Value = avg ;\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Plugin.Items.html\">Plugin.Items</a> <a href=\"#!/url=./si_om/SceneItem.AddProperty.html\">SceneItem.AddProperty</a> <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> <a href=\"#!/url=./si_om/PPG.html\">PPG</a> <a href=\"#!/url=./si_cmds/callbacks.html\">Definition Callbacks for Properties</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";