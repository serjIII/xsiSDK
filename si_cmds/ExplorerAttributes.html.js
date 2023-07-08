var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Explorer Attributes</title>\n\
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
            <h1>Explorer Attributes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Explorer Attributes</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<div>\n\
	<p>View attributes for the <a href=\"http://softimage.wiki.softimage.com/xsidocs/3dexplorer510.htm\">Explorer</a> (see <a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>). Not all attributes support both setting and getting. Check the third column in the table.</p>\n\
	<p>See <a href=\"#!/url=./si_cmds/ViewAttributes.html#\">ViewAttributes</a> for a complete list of types of attributes that you can use when customizing your Relational Views.</p>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Attribute Name</th>\n\
		<th>Description</th>\n\
		<th>Supports</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">allownodeexpansion</td>\n\
		<td>\n\
This attribute controls whether you can expand the nodes in the explorer by providing a + (plus) sign (therefore making them expandable).<br /><br /> See the <a href=\"#!/url=./si_om/View.BeginEdit.html\">View.BeginEdit</a> method for an example using this attribute.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Nodes are expandable (plus signs appear). Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Nodes are not expandable (no plus signs). Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">scope</td>\n\
		<td>\n\
The scope to display (for setting) or currently on display (for getting).<br /><br /> See the <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>, <a href=\"#!/url=./si_om/View.BeginEdit.html\">View.BeginEdit</a> and <a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> methods for an example using this attribute.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">Project</td>\n\
					<td>Project (Application) scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Preferences</td>\n\
					<td>Preferences scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Scene</td>\n\
					<td>(Default) Scene (Scene root) scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Layers</td>\n\
					<td>Layers scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Passes</td>\n\
					<td>Passes scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Environments</td>\n\
					<td>Environments scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Selection</td>\n\
					<td>Selection scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Custom</td>\n\
					<td>Custom scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Current Layer</td>\n\
					<td>Current Layer scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Current Pass</td>\n\
					<td>Current Pass scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Current Environment</td>\n\
					<td>Current Environment scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Sources and Clips</td>\n\
					<td>Sources and Clips (combined) scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Animation Sources</td>\n\
					<td>Animation sources scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Audio Sources and Clips</td>\n\
					<td>Audio sources and clips scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Image Sources and Clips</td>\n\
					<td>Image sources and clips scope.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Material Sources</td>\n\
					<td>Material sources scope.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">localselection</td>\n\
		<td>\n\
Determines whether the explorer maintains its own local selection. If this option is on, elements selected in the explorer do not affect the global selection in the scene. Locally selected elements are highlighted in pale blue rather than white.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Selected elements affect the global selection in the scene. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Selected elements do not affect the global selection in the scene. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">targetcontent</td>\n\
		<td>\n\
The node(s) to display (for setting) or currently on display (for getting) in the Explorer. This attribute is only available when the scope is set to either \"Selection\" or \"Custom\".			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;node name&gt;</td>\n\
					<td>The <a href=\"#!/url=./files/objectexpr.htm\">Object Name</a> or <a href=\"#!/url=./files/paramexpr.htm\">Parameter Name</a> to focus on.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">select</td>\n\
		<td>\n\
The node(s) to select (for setting) or already selected (for getting) in the Explorer. The selection can be either global or local.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;node name&gt;</td>\n\
					<td>The <a href=\"#!/url=./files/objectexpr.htm\">Object Name</a> or <a href=\"#!/url=./files/paramexpr.htm\">Parameter Name</a> to select.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">supportmarking</td>\n\
		<td>\n\
Determines whether the explorer will mark or select parameter nodes. If this option is on, parameter nodes selected in the explorer are \"marked\" rather than selected. Marked elements are highlighted in yellow rather than white.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Selected parameter nodes are marked rather than selected. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Parameter nodes will be selected. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">generalsort</td>\n\
		<td>\n\
Sorts objects, sources, clips, and other basic elements according to the specified sorting order.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'None\'</td>\n\
					<td>Uses the order based on when an element was created or parented.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'Alphabetical\'</td>\n\
					<td>Sorts the elements alphabetically. Any numeric suffix is sorted in correct numerical order, so <span style=\"font-family: courier, monospace;\">Object2</span> comes before <span style=\"font-family: courier, monospace;\">Object10</span>. The children of an object are always listed after any parameter sets of the object.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'Used + Alphabetical\'</td>\n\
					<td>Sorts the elements into used and unused groups, and then sorts alphabetically within each group. This option is available only with the Sources/Clips scopes.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'Type + Alphabetical\'</td>\n\
					<td>(Default) Sorts the elements by type first, and then alphabetically within each type. The types depend on the scope. For example with the Scene Root scope, the explorer lists all the cameras in alphabetical order, then all the lights, models, referenced models, nulls, chains, curves, polygon meshes, NURBS surfaces, text, particle clouds, hair objects, control objects, forces, dynamic constraints, implicits, and geoshaders, each in alphabetical order. If the scope contains only one type of element, this option is equivalent to Alphabetical.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">FilterMask</td>\n\
		<td>\n\
Determines which types of nodes are displayed in the explorer. This is the scripting equivalent of changing the selection in the Filter menu. This is a kind of a string mask, so to set the value, you can pass a pipe-delimited (\'|\') list of options or specify a single value from the <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a> enum. For example:\n\
				<div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Show only animated nodes\n\
myView.SetAttributeValue(\"FilterMask\", siSEFilterAnimatedNodes); \n\
\n\
// Show objects, models and groups\n\
myView.SetAttributeValue(\"FilterMask\", \"Group|Object|Model\");</pre></td></tr>\n\
</table>\n\
</div>		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">trackselection</td>\n\
		<td>\n\
Determines whether or not the explorer will automatically scroll to ensure that the node of the first selected elements is always visible.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disable automatic scrolling. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enable automatic scrolling. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">decomposebranchsel</td>\n\
		<td>\n\
Determines whether the explorer will display the children, grandchildren, and other descendents of a branch-selected object as top-level nodes or as a nested hierarchy.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Display as nested hierarchy. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Display hierarchy as top-level nodes. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">localpropsonly</td>\n\
		<td>\n\
Determines whether the explorer will display only the properties that have been applied directly to an object or all properties, no matter how they are propagated.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Display all properties. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Display the properties that have been applied directly to an object. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">lockedparams</td>\n\
		<td>\n\
Determines whether or not the explorer will display the locked parameters.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Locked parameters will not be visible. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Display the locked parameters. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">flattenstate</td>\n\
		<td>\n\
Controls how the hierarchy appears when the explorer opens.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'None\'</td>\n\
					<td>(Default) Displays the entire hierarchy.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'Parameters\'</td>\n\
					<td>Appears without intermediate nodes and with renamed nodes at the ends of branches. For example, <span style=\"font-family: courier, monospace;\">Global Transform &gt; Pos &gt; X</span> node appears as <span style=\"font-family: courier, monospace;\">Global Transform &gt; Pos.X</span>.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'All\'</td>\n\
					<td>Displays parameters in a flat list, hiding intermediate nodes (properties, primitives, materials, etc.). For example, <span style=\"font-family: courier, monospace;\">Global Transform &gt; Pos &gt; X</span> node is shortened to <span style=\"font-family: courier, monospace;\">Global Transform.Pos.X</span>.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">colorcoding</td>\n\
		<td>\n\
Determines whether or not the explorer will display different types of nodes in different colors.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>No color coding for type. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Indicates node type by color. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">scriptnames</td>\n\
		<td>\n\
Determines whether the explorer will use the script name instead of regular name for node labels.<br /><br /> See the <a href=\"#!/url=./si_om/View.BeginEdit.html\">View.BeginEdit</a> method for an example using this attribute.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Use the regular name. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Use the script name. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">parametervalues</td>\n\
		<td>\n\
Determines whether or not the explorer will display the values of any and all selected parameters.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Do not display values. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Parameter values will appear next to the parameter name. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">parametersort</td>\n\
		<td>\n\
Sorts parameters according to the specified criteria.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'None\'</td>\n\
					<td>(Default) Uses the order based on when an element was created or parented.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'Alphabetical\'</td>\n\
					<td>Sorts the parameters alphabetically. Any numeric suffix is sorted in correct numerical order, so <span style=\"font-family: courier, monospace;\">Param2</span> comes before <span style=\"font-family: courier, monospace;\">Param10</span>.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'Layout\'</td>\n\
					<td>Uses the order in which the parameters appear in their property editor. If a parameter does not appear in the corresponding property editor, it is not listed.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">lock</td>\n\
		<td>\n\
This attribute controls the lock state of the selection scope. Set is only valid for Selection scope (attribute is ignored for other scopes).  Get returns \"false\" for non-selection scopes.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Lock the Selection scope. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Unlock the Selection scope. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";