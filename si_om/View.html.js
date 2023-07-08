var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>View</title>\n\
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
            <h1>View</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">View</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_View\">Object Hierarchy</a> | Related C++ Class: <a href=\"#!/url=./si_cpp/classXSI_1_1View.html\">View</a></p>\n\
\n\
<h3>Inheritance<h3>\n\
<p class=\"level1\"><a href=\"#!/url=./si_om/SIObject.html\">SIObject</a></p>\n\
<p class=\"level2\"><a href=\"#!/url=./si_om/UIObject.html\">UIObject</a></p>\n\
<p class=\"level3\"><a href=\"#!/url=./si_om/UIPersistable.html\">UIPersistable</a></p>\n\
<p class=\"level4\">View</p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> The View object represents an instance of a view in Softimage. Most windows embedded \n\
in the current <a href=\"#!/url=./si_om/Layout.html\">Layout</a> as well as free floating windows are \n\
represented as View objects.\n\
<br /><br />\n\
Softimage comes with many types of views built in, including Netview, the Script Editor, \n\
the Render Tree, and the Explorer.  Toolbars and Shelves are also a type of view \n\
(except for Toolbars created with early versions of Softimage).  And Relational Views \n\
are a type of view that combine other view types together within a single view \n\
window.\n\
<br /><br />\n\
The Property Page window (see the <a href=\"#!/url=./si_om/PPG.html\">PPG</a> object) is not a type of \n\
View, but it can be embedded inside a view of type \"Property Panel\", as demonstrated\n\
in the example below.\n\
<br /><br />\n\
The View object also allows you to manipulate the four Softimage viewports by creating\n\
an instance of the View Manager via <a href=\"#!/url=./si_om/Layout.Views.html\">Layout.Views</a>(\"vm\") and then \n\
customizing it using <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> with the \n\
<a href=\"#!/url=./si_cmds/ViewManagerAttributes.html#\">View Manager Attributes</a>.\n\
<br /><br />\n\
Views are accessible from the <a href=\"#!/url=./si_om/Layout.Views.html\">Layout.Views</a> method (or from the\n\
<a href=\"#!/url=./si_om/View.Views.html\">View.Views</a> method if the view is a relational view).  To \n\
instantiate a View object inside a free floating window call \n\
<a href=\"#!/url=./si_om/Layout.CreateView.html\">Layout.CreateView</a>. \n\
<br /><br /> \n\
With view objects, you can: <br /><br />\n\
- Change the view state such as closed and minimized state.<br /><br />\n\
- Change the view position and size.<br /><br />\n\
- Hide/unhide the view.<br /><br />\n\
- Access to specific view attributes such as the Explorer scope and NetView URL.<br /><br />\n\
- Edit view attributes in bulk mode to avoid the UI to flicker.<br /><br />\n\
- Iterate over the sub views of a relational view.\n\
<br /><br />\n\
Some of these tasks can be performed using methods implemented on the View object\n\
(<a href=\"#!/url=./si_om/View.Move.html\">View.Move</a>, <a href=\"#!/url=./si_om/View.Resize.html\">View.Resize</a>, <a href=\"#!/url=./si_om/View.Visible.html\">View.Visible</a>,\n\
etc.); however, many specialized tasks, such as \n\
<a href=\"#!/url=./si_cmds/ExplorerAttributes.html#\">changing the scope and selection in the Explorer</a>\n\
or <a href=\"#!/url=./si_cmds/ViewManagerAttributes.html#\">maximizing a single viewport window</a>\n\
can only be accomplished via the <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> and\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> methods. See \n\
<a href=\"#!/url=./si_cmds/ViewAttributes.html#\">View Attributes Reference</a> for a list of\n\
attributes available for different views.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.BeginEdit.html\">BeginEdit</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.EndEdit.html\">EndEdit</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.FindView.html\">FindView</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.FindView2.html\">FindView2</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.GetAttributeValue.html\">GetAttributeValue</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">IsClassOf</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">IsEqualTo</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.Move.html\">Move</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.Rearrange.html\">Rearrange</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.Refresh.html\">Refresh</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.Resize.html\">Resize</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.SetAttributeValue.html\">SetAttributeValue</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Application.html\">Application</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Categories.html\">Categories</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.Floating.html\">Floating</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.FullName.html\">FullName</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Help.html\">Help</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.MemoCameras.html\">MemoCameras</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.NestedObjects.html\">NestedObjects</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Origin.html\">Origin</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.OriginPath.html\">OriginPath</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Parent.html\">Parent</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.Rectangle.html\">Rectangle</a>		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.State.html\">State</a>		</td>		<td class=\"members\"><a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> <img src=\"images/operator.gif\" alt=\"operator\" />		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.Views.html\">Views</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/View.Visible.html\">Visible</a>		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example restores and cascades all floating views excepted \n\
	the script editor.\n\
*/\n\
// Create some sample views \n\
var layout = Desktop.ActiveLayout;\n\
layout.CreateView( \"Explorer\", \"My Explorer\" );\n\
layout.CreateView( \"Browser\", \"My Browser\" );\n\
layout.CreateView( \"NetView\", \"My NetView\" );\n\
// Position for the first view to cascade\n\
px = 50\n\
py = 20\n\
// Delta between each view\n\
dx = 20\n\
dy = 20\n\
var views = layout.Views;\n\
for( var i=0; i&lt;views.Count; i++) {\n\
	var vw = views(i);\n\
	if( vw.Floating &amp;&amp; vw.Name != \"script_editor\") {\n\
		vw.Move( px, py );\n\
		px += dx;\n\
		py += dy\n\
		vw.State = siNormal; // put view at the top so far\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\"># Set up a few basics\n\
from win32com.client import constants as c\n\
import os.path \n\
app = Application\n\
false = 0\n\
true = 1\n\
null = None\n\
# Convenience function to create a simple synoptic page on disk\n\
def MakeSynViewPages() :\n\
	mysynviewpath = XSIUtils.BuildPath(\n\
		app.InstallationPath(c.siFactoryPath),\n\
		\"Data\", \"XSI_SAMPLES\", \"Synoptic\"\n\
	)\n\
	file1 = XSIUtils.BuildPath(mysynviewpath, \"SynViewStartWith.htm\")\n\
	file2 = XSIUtils.BuildPath(mysynviewpath, \"SynViewSwitchTo.htm\")\n\
	f = open(file1, \'w\')\n\
	f.write(\"&lt;html&gt;\\n&lt;body version=\\\"2\\\"&gt;\\n&lt;script language=\\\"VBScript\\\"&gt;\\n\\n\")\n\
	f.write(\"sub hotspot(in_obj,in_mousebutton,in_keymodifier)\\nset self = GetValue(i\")\n\
	f.write(\"n_obj)\\nApplication.LogMessage \\\"VB: Touched \\\" &amp; self.FullName &amp; \\\" at \\\" _\")\n\
	f.write(\"\\n\\t&amp; self.posx.Value &amp; \\\",\\\" &amp; self.posy.Value _\\n\\t&amp; \\\",\\\" &amp; self.posz\")\n\
	f.write(\".Value &amp; \\\" (x,y,z)\\\"\\nend sub\\n&lt;/SCRIPT&gt;\\n\\n&lt;map name=\\\"SynopticMap\\\"&gt;\\n\")\n\
	f.write(\"&lt;area shape=\\\"circle\\\" coords=\\\"260,251,129\\\" title=\\\"\\\" NOHREF onClick=\")\n\
	f.write(\"\\\"hotspot\\\"&gt;\\n&lt;/map&gt;\\n\\n&lt;img src=\\\"..\\\\pictures\\\\xsilogo.jpg\\\" usemap=\\\"#S\")\n\
	f.write(\"ynopticMap\\\"&gt;\\n\\n&lt;/body&gt;\\n&lt;/html&gt;\")\n\
	f = open(file2, \'w\')\n\
	f.write(\"&lt;html&gt;\\n&lt;body version=\\\"2\\\"&gt;\\n&lt;script language=\\\"JavaScript\\\"&gt;\\n\")\n\
	f.write(\"\\nfunction hotspot(in_obj,in_mousebutton,in_keymodifier)\\n{\\nvar self = G\")\n\
	f.write(\"etValue(in_obj);\\nApplication.LogMessage( \\\"JS: Touched \\\" + self.FullName + \")\n\
	f.write(\"\\\" at \\\" \\n\\t+ self.posx.Value + \\\",\\\" + self.posy.Value \\n\\t+ \\\",\\\" + \")\n\
	f.write(\"self.posz.Value + \\\" (x,y,z)\\\" );\\n}\\n&lt;/SCRIPT&gt;\\n\\n&lt;map name=\\\"SynopticMap\")\n\
	f.write(\"\\\"&gt;\\n&lt;area shape=\\\"circle\\\" coords=\\\"260,251,129\\\" title=\\\"\\\" NOHREF onCli\")\n\
	f.write(\"ck=\\\"hotspot\\\"&gt;\\n&lt;/map&gt;\\n\\n&lt;img src=\\\"..\\\\pictures\\\\xsilogo.jpg\\\" usemap=\")\n\
	f.write(\"\\\"#SynopticMap\\\"&gt;\\n\\n&lt;/body&gt;\\n&lt;/html&gt;\")\n\
	return [file1, file2]\n\
# Create a synoptic property and attach it to a torus\n\
app.NewScene(\"\", false)\n\
torus = app.CreatePrim(\"Torus\", \"MeshSurface\")\n\
app.Rotate(torus, 90, 0, 0, c.siAbsolute, c.siPivot, c.siObj, c.siX)\n\
app.Translate(torus, 4, 3, 2, c.siAbsolute, c.siPivot, c.siObj, c.siZ)\n\
synfiles = MakeSynViewPages()\n\
applied = torus.AddProperty(\"Synoptic Property\") \n\
applied.Parameters(1).Value = \"SynViewAttrib\"\n\
applied.Parameters(2).Value = synfiles[0]\n\
app.OpenAttachments()\n\
# Open the Synoptic viewer\n\
lay = app.Desktop.ActiveLayout\n\
vw = lay.Views(\"Synoptic View\")\n\
vw.SetAttributeValue(\"path\", synfiles[1]+\",\"+torus.Name)</pre></td></tr>\n\
</table>\n\
</div><h4>3. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how we can host a Custom Property \n\
	inside a View.  \n\
	This has some advantages over the InspectObj command:\n\
	-we can specify the exact size and positioning of the window\n\
	-the view is exposed in the Layout.Views collection so we can\n\
	find out if the property page is already being \"inspected\".\n\
	However it does not support the \"Modal\" mode supported by\n\
	InspectObj.\n\
*/\n\
// Step 1: Create the custom property\n\
var oPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"MyProp\" );\n\
oPSet.AddParameter3( \"textparam\", siString ) ;\n\
oPSet.AddFCurveParameter( \"MyFCurve\" ) ;\n\
var oLayout = oPSet.PPGLayout ;\n\
oLayout.Clear() ;\n\
oLayout.AddItem( \"textparam\" );\n\
oLayout.AddItem( \"MyFCurve\" );\n\
oLayout.AddRow()\n\
oLayout.AddButton( \"MoveView\", \"Move View\" ) ;\n\
oLayout.AddButton( \"Close\" ) ;\n\
oLayout.EndRow()\n\
oLayout.Language = \"JScript\"\n\
oLayout.Logic = MoveView_OnClicked.toString()\n\
	+ Close_OnClicked.toString() ;\n\
// Step 2: Show the custom property in a view\n\
var oActiveLayout = Application.Desktop.ActiveLayout;\n\
var oNewView = oActiveLayout.CreateView( \"Property Panel\", \"MyPropView\" );\n\
oNewView.BeginEdit();\n\
oNewView.Move( 10, 10 );\n\
oNewView.Resize( 340, 340 );\n\
oNewView.SetAttributeValue( \"targetcontent\", oPSet.FullName );\n\
oNewView.EndEdit();\n\
// Logic code used by the buttons on the Custom Property\n\
function MoveView_OnClicked()\n\
{\n\
	// We can\'t get to the view directly from the PPG object,\n\
	// but we can find it indirectly by searching through\n\
	// the open views\n\
	var thisCustomProp = PPG.Inspected.Item(0).FullName\n\
	var oActiveLayout = Application.Desktop.ActiveLayout\n\
	for ( var i = 0 ; i &lt; oActiveLayout.Views.Count ; i++ ) {\n\
		var oView = oActiveLayout.Views(i) ;\n\
		if ( oView.Type == \"Property Panel\" ) {\n\
			if ( oView.GetAttributeValue(\"targetcontent\") == thisCustomProp ) {\n\
				// found it!		\n\
				oView.Move( 250, 250 ) ;\n\
				return ;\n\
			}\n\
		}\n\
	}\n\
}\n\
function Close_OnClicked()\n\
{\n\
	// Self destruction of the custom property\n\
	DeleteObj( PPG.Inspected.Item(0) ) ;\n\
	PPG.Close() ;\n\
}</pre></td></tr>\n\
</table>\n\
</div><h4>4. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Open an Animation Editor and show the FCurves on\n\
// a custom property\n\
var oPSet = ActiveSceneRoot.AddProperty(\"CustomProperty\",false,\"Demo\" ) ;\n\
var oParam = oPSet.AddParameter3( \"Value\", siDouble, 0, 0, 100 ) ;\n\
var oParam2 = oPSet.AddParameter3( \"Value\", siDouble, 0, 0, 100 ) ;\n\
oParam.AddFCurve2( \n\
	new Array( 1, 0,\n\
		25, 50,\n\
		50, 25,\n\
		100, 100 \n\
	) \n\
) ;\n\
oParam2.AddFCurve2( \n\
	new Array( 1, 100,\n\
		25, 25,\n\
		50, 50,\n\
		100, 100 \n\
	) \n\
) ;\n\
var oLayout = Desktop.ActiveLayout;\n\
var oView = oLayout.CreateView( \"Animation Editor\", \"MyFCurves\" );\n\
oView.SetAttributeValue( \"TargetContent\", oPSet.FullName ) ;</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ViewAttributes.html#\">View Attributes Reference</a> <a href=\"#!/url=./si_om/Layout.Views.html\">Layout.Views</a> <a href=\"#!/url=./si_om/View.Views.html\">View.Views</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></h3></h3></div>\n\
   </div></body>\n\
</html>\n\
";