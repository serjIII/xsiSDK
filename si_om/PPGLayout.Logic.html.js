var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGLayout.Logic</title>\n\
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
            <h1>PPGLayout.Logic</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a>.Logic <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets a <a href=\"#!/url=./files/String.htm\">String</a> value containing the script code associated with \n\
the layout in an <a href=\"#!/url=./files/cus_ppg_Creating.htm\">on-the-fly</a>\n\
custom property. This script code contains subroutines to react to events in the property page, which \n\
corresponds to the text found in the BeginScript/EndScript section (or equivalent \n\
<a href=\"#!/url=./files/cus_ppg_DynamicallyChangingCustomProperties.htm\">Logic</a> section) of a SPDL file.\n\
<br /><br />\n\
The provided string must be a correctly-formed script, written in the language specified \n\
in the <a href=\"#!/url=./si_om/PPGLayout.Language.html\">PPGLayout.Language</a> section.  The script is not tested for syntax \n\
errors at the time this call is made.\n\
<br /><br />\n\
The logic script consists of subroutines implemented in any of the supported Scripting \n\
Languages. A routine named \"OnInit\", if defined, is called when the PPG first loads.  To \n\
react to a parameter changing, create a routine named \"PARAMSCRIPTNAME_OnChanged\" with a\n\
<a href=\"#!/url=./files/cus_self_Prefixes.htm\">prefix</a> (optional \n\
for on-the-fly custom properties; defaults to the property name for plug-ins).  To provide \n\
script code that gets executed when a button is pressed, create \"BUTTONNAME_OnClicked\" (same\n\
<a href=\"#!/url=./files/cus_self_Prefixes.htm\">prefixing</a> rules \n\
apply).  In all these routines a global instance of the object <a href=\"#!/url=./si_om/PPG.html\">PPG</a> is \n\
available to get context information.\n\
<br /><br />\n\
Note: To avoid conflicts with other routines in an on-the-fly custom property, you can \n\
specify a prefix using the <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html#siUILogicPrefix\">siUILogicPrefix</a> attribute. \n\
This differs from the way that these event handlers are specified for plug-in based custom \n\
properties, which by default use the property name as a prefix. For more information on the\n\
differences between naming plug-in based and on-the-fly event handlers, see \n\
<a href=\"#!/url=./files/cus_self_Prefixes.htm\">Using Prefixes with Custom Properties</a>\n\
and <a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">Naming Plug-in Items</a>.\n\
<br /><br />\n\
This property makes it possible to still have property page event handling on a custom object even \n\
when there is no associated SPDL file.  For example it would be possible to read a script file into \n\
a string and provide it as the value of this property.\n\
<br /><br />\n\
Rather than using this property to embed script code directly in the PPGLayout, it is also possible\n\
to specify an external file, using the <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html#siUILogicFile\">siUILogicFile</a> attribute.  \n\
See <a href=\"#!/url=./si_om/PPGLayout.SetAttribute.html\">PPGLayout.SetAttribute</a>.\n\
<br /><br />\n\
It is not necessary to set this Property for a <a href=\"#!/url=./si_om/CustomProperty.html\">CustomProperty</a> that is based on a \n\
<a href=\"#!/url=./si_om/PluginItem.html\">PluginItem</a>.  In that case it is possible to write the event handling callbacks\n\
directly in the same script file that implements the <a href=\"#!/url=./si_om/Plugin.html\">Plugin</a> (see \n\
<a href=\"#!/url=./si_om/PluginRegistrar.RegisterProperty.html\">PluginRegistrar.RegisterProperty</a>).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
String rtn = PPGLayout.Logic;\n\
// set accessor\n\
PPGLayout.Logic = String;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script demonstrates how it is possible to create a modal dialog box from \n\
	scripting to ask a user a question.  It then generates a simple skeleton based \n\
	on the number of bones and positions requested by the user.\n\
	Key points of this example:\n\
	(1) Advantage of Object Model API over SPDL files.  \n\
	Because \"for\" loops can be used to dynamically add as many parameters \n\
	are necessary it is easy to handle a variable number of options.  For\n\
	instance, this example can be changed to support 10 bone skeletons \n\
	instead of 5 bone skeletons by changing a single variable.\n\
	(2) Single script file takes care the entire plug-in\n\
	(3) Logic code can be added to dynamically change the layout in response\n\
	to the user\'s actions.  This replaced the need for \"spdl logic\".\n\
	(4) JScript\'s ability to get the source code associated with a function\n\
	using the toString() property.\n\
*/\n\
g_maxbones = 5 ;\n\
Main() ;\n\
function Main()\n\
{	\n\
	var oPSet = CreatePSet() ;\n\
	// We\'re going to take some of the routines in the script and \n\
	// inject the code into the PPG layout, using the convenient\n\
	// toString() method of JScript\n\
	// Alternatively we could have saved that code as a separate \n\
	// file\n\
	var oLayout = oPSet.PPGLayout\n\
	oLayout.Logic = OnInit.toString() +\n\
	                BoneNumber_OnChanged.toString() + \n\
	                CreateLayout.toString() + \n\
	                AddXYZRow.toString() ;\n\
	oLayout.Language = \"JScript\" ;\n\
	if ( !InspectObj( oPSet, null, null, siModal, false ) ) {\n\
		CreateBones( oPSet ) ;\n\
	}\n\
	// Erase the temporary pset\n\
	DeleteObj( oPSet ) ;\n\
}\n\
function CreatePSet()\n\
{\n\
	var oPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"Create_Bones_SDK_Example\" ) ;\n\
	// Default number of bones is three\n\
	oPSet.AddParameter3( \"BoneNumber\", siInt4, 3 ) ;\n\
	oPSet.AddParameter3( \"origin_x\", siDouble, 0 ) ;\n\
	oPSet.AddParameter3( \"origin_y\", siDouble, 0 ) ;\n\
	oPSet.AddParameter3( \"origin_z\", siDouble, 0 ) ;\n\
	// Start bone numbering at \"1\" instead of 0 for usability\n\
	for ( i = 1 ; i &lt;= g_maxbones ; i++ ) {\n\
		// We use a simple naming scheme.  \n\
		// e.g. \"b4_x\" is the \"x\" axis of bone 4.	\n\
		oPSet.AddParameter3( \"b\" + i.toString() + \"_x\", siDouble, i ) ;\n\
		oPSet.AddParameter3( \"b\" + i.toString() + \"_y\", siDouble, i ) ;\n\
		oPSet.AddParameter3( \"b\" + i.toString() + \"_z\", siDouble, i ) ;\n\
	}\n\
	// None of the parameters are animatable - we are only using them\n\
	// temporarily for the UI\n\
	for ( i = 0 ; i &lt; oPSet.Parameters.Count ; i++ ) {\n\
		oPSet.Parameters(i).Animatable = false ;\n\
	}\n\
	return oPSet ;\n\
}\n\
// Do the work based on the values the user has entered in the \n\
// Custom Property\n\
function CreateBones( oPSet )\n\
{\n\
	// There must always be at least 1 bone\n\
	oChainRoot = ActiveSceneRoot.Add3DChain( \n\
		new Array( oPSet.origin_x.Value, oPSet.origin_y.Value, oPSet.origin_z.Value ),\n\
		new Array( oPSet.b1_x.Value, oPSet.b1_y.Value, oPSet.b1_z.Value ) \n\
	) ;\n\
	//  Create a variable number of additional bones\n\
	for ( i = 2 ; i &lt;= oPSet.BoneNumber.Value ; i++ )\n\
	{	\n\
		strBoneName = \"b\" + i.toString() ;	\n\
		oChainRoot.AddBone( Array( oPSet.Parameters( strBoneName + \"_x\" ).Value,\n\
	                               oPSet.Parameters( strBoneName + \"_y\" ).Value,\n\
	                               oPSet.Parameters( strBoneName + \"_z\" ).Value ) ) ;\n\
	}\n\
}\n\
// Event logic section - this code gets injected as part of the layout\n\
// Hence it can\'t rely on any global variables or other functions.\n\
function OnInit()\n\
{	\n\
	// Create the initial layout, based on the\n\
	// default number of bones\n\
	BoneNumber_OnChanged()\n\
}\n\
function BoneNumber_OnChanged()\n\
{\n\
	// Redraw the UI, showing only controls\n\
	// relevant to the number of Bones selected in the drop down\n\
	CreateLayout(PPG.BoneNumber.Value );	\n\
	PPG.Refresh() ;\n\
}\n\
function CreateLayout( in_cntBones )\n\
{\n\
	var oLayout = PPG.PPGLayout ;\n\
	oLayout.Clear() ; // Flush old layout\n\
	var oItem = oLayout.AddEnumControl( \n\
	                    \"BoneNumber\", \n\
	                    Array( \"One\", 1, \n\
	                           \"Two\", 2, \n\
	                           \"Three\", 3, \n\
	                           \"Four\", 4, \n\
	                           \"Five\", 5 ),\n\
	                    siControlCombo )\n\
	oItem.Label = \"Number of Bones\" ;\n\
	oLayout.AddGroup( \"Bone Positions\" );\n\
		AddXYZRow( oLayout, \"Origin\", \"origin_x\", \"origin_y\", \"origin_z\" ) ;\n\
		for ( i = 1 ; i &lt;= in_cntBones ; i++ ) {\n\
			strOfI = i.toString() ;\n\
			AddXYZRow( \n\
			    oLayout, \n\
			    \"Bone \" + strOfI, \n\
			    \"b\" + strOfI + \"_x\", \n\
			    \"b\" + strOfI + \"_y\", \n\
			    \"b\" + strOfI + \"_z\" ) ;\n\
		}\n\
	oLayout.EndGroup() ;\n\
}\n\
// Add a XYZ vector of parameters to the layout\n\
function AddXYZRow( in_Layout, in_Label, in_xName, in_yName, in_zName )\n\
{\n\
	in_Layout.AddGroup( in_Label ) ;\n\
		in_Layout.AddRow();	\n\
			oItem = in_Layout.AddItem( in_xName ) ;\n\
			oItem.SetAttribute( siUIValueOnly, true ) ;\n\
			oItem.SetAttribute( siUINoSlider, true ) ;\n\
			oItem = in_Layout.AddItem( in_yName ) ;\n\
			oItem.SetAttribute( siUIValueOnly, true ) ;	\n\
			oItem.SetAttribute( siUINoSlider, true ) ;\n\
			oItem = in_Layout.AddItem( in_zName ) ;\n\
			oItem.SetAttribute( siUIValueOnly, true ) ;\n\
			oItem.SetAttribute( siUINoSlider, true ) ;\n\
		in_Layout.EndRow() ;		\n\
	in_Layout.EndGroup() ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGLayout.Language.html\">PPGLayout.Language</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";