var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Animation Editor Attributes</title>\n\
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
            <h1>Animation Editor Attributes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Animation Editor Attributes</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<div>\n\
	<p>View attributes for the <a href=\"http://softimage.wiki.softimage.com/xsidocs/animeditor501.htm\">Animation Editor</a> (see <a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>). Not all attributes support both setting and getting. Check the third column in the table.</p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Note</td>\n\
		<td class=\"emph\">See <a href=\"#!/url=./si_cmds/ViewAttributes.html#\">ViewAttributes</a> for a complete list of types of attributes that you can use when customizing your Relational Views.</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
</div>\n\
\n\
<div><table class=\"values\">\n\
	<tr>\n\
		<th>Attribute Name</th>\n\
		<th>Description</th>\n\
		<th>Supports</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">targetcontent</td>\n\
		<td>\n\
The name of the object for which to display the animated parameters. If the view is driven by a relationship, this content can be replaced dynamically. You can also control this attribute programmatically even if the view is not driven.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any eligible scene object&gt;</td>\n\
					<td>The <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> of an object with animated parameters.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">viewer</td>\n\
		<td>\n\
The viewer to display in the animation editor when it is opened. When you open the Animation Editor the list of parameters is scanned and the \"default\" editor for those parameters is opened.  So if you have a single parameter with an expression then the Expression Editor is opened.  However, if there is a mix of expressions and fcurves then the FCurve Editor is opened.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">FCurve Editor</td>\n\
					<td>Load the FCurve Editor in the editor.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">DopeSheet</td>\n\
					<td>Load the DopeSheet in the editor.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Expression Editor</td>\n\
					<td>Load the Expression Editor in the editor.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Scripted Operator Editor</td>\n\
					<td>Load the Scripted Operator Editor in the editor.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">drivingaction</td>\n\
		<td>\n\
Determines or not whether the animation editor will display only the parameters that are driven by an action clip at the current frame.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Display parameters whether driven or not. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Display only driven parameters. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">animatedparamsonly</td>\n\
		<td>\n\
Determines whether or not the animation editor will display only the element\'s animated parameters and their associated fcurves in the graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>No restrictions on displaying animated parameter. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Display only the element\'s animated parameters and fcurves. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">keyableparamsonly</td>\n\
		<td>\n\
Determines whether or not the animation editor will display only the element\'s keyable parameters as defined in the keyable parameters editor.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) No restrictions on displaying keyable parameters. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Display only the element\'s keyable parameters. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">filterpreset</td>\n\
		<td>\n\
Determines what kind of parameters will be displayed. See the <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a> enum for the list of valid values.		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">taggedparameters</td>\n\
		<td>\n\
Determines which tagged parameters for the elements and their associated fcurves will be displayed. This is the scripting equivalent of changing the selection in the Explorer->Parameter Filters->Tagged Parameters menu. This is a kind of a string mask, so to set the value, you can pass a pipe-delimited (\'|\') list of options or specify a single value from the <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a> enum. For example:\n\
					<div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Show only tagged 1 parameters\n\
myView.SetAttributeValue(\"TaggedParameters\", siATFilterTagged1); \n\
\n\
// Show tagged 3, 4 and 5 parameters\n\
myView.SetAttributeValue(\"TaggedParameters\", \"Tag3|Tag4|Tag5\");</pre></td></tr>\n\
</table>\n\
</div>\n\
				If the <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html#siATFilterTaggedAll\">siATFilterTaggedAll</a> value is passed to the <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> method, any other values will be ignored.		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">activationparamsonly</td>\n\
		<td>\n\
Determines whether or not the animation editor will display only the element\'s <span style=\"font-family: courier, monospace;\">active</span> or <span style=\"font-family: courier, monospace;\">mute</span> parameters.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) No restrictions on displaying Active or Mute parameters. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Display only the element\'s Active or Mute parameters. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">markedparamsonly</td>\n\
		<td>\n\
Determines whether or not the animation editor will display only the marked parameters for the elements and their associated function curves.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) No restrictions on displaying marked parameters. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Display only the marked parameters. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">trackselection</td>\n\
		<td>\n\
Determines whether or not the animation explorer will automatically scroll to ensure that the node of the first selected elements is always visible.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
Determines whether the animation explorer will display the children, grandchildren, and other descendents of a branch-selected object as top-level nodes or as a nested hierarchy.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
Determines whether the animation explorer will display only the properties that have been applied directly to an object or all properties, no matter how they are propagated.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
Determines whether or not the animation explorer will display the locked parameters.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
Controls how the hierarchy appears when the animation editor opens.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'None\'</td>\n\
					<td>Displays the entire hierarchy.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'Parameters\'</td>\n\
					<td>Appears without intermediate nodes and with renamed nodes at the ends of branches. For example, <span style=\"font-family: courier, monospace;\">Global Transform &gt; Pos &gt; X</span> node appears as <span style=\"font-family: courier, monospace;\">Global Transform &gt; Pos.X</span>.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'All\'</td>\n\
					<td>(Default) Displays parameters in a flat list, hiding intermediate nodes (properties, primitives, materials, etc.). For example, <span style=\"font-family: courier, monospace;\">Global Transform &gt; Pos &gt; X</span> node is shortened to <span style=\"font-family: courier, monospace;\">Global Transform.Pos.X</span>.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">colorcoding</td>\n\
		<td>\n\
Determines whether or not the animation explorer will display different types of nodes in different colors.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
Determines whether the animation explorer will use the script name instead of regular name for node labels.<br /><br /> See the <a href=\"#!/url=./si_om/View.BeginEdit.html\">View.BeginEdit</a> method for an example using this attribute.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Use the regular name. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Use the script name. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">parametervalues</td>\n\
		<td>\n\
Determines whether or not the animation explorer will display the values of any and all selected parameters.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
					<td>Uses the order based on when an element was created or parented.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'Alphabetical\'</td>\n\
					<td>(Default) Sorts the parameters alphabetically. Any numeric suffix is sorted in correct numerical order, so <span style=\"font-family: courier, monospace;\">Param2</span> comes before <span style=\"font-family: courier, monospace;\">Param10</span>.					</td>\n\
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
Controls the lock state of the animation explorer.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Lock the animation explorer. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Unlock the animation explorer. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">ripple</td>\n\
		<td>\n\
Determines whether or not existing keys are pushed ahead on the timeline when you parse keys on an fcurve or when you scale a region of keys.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Turns off ripple mode. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Turns on ripple mode. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">snaptogrid</td>\n\
		<td>\n\
Determines whether or not the animation editor will use the snap-to-grid feature.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Do not use snap-to-grid feature. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Use the snap-to-grid feature. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">snaptoframe</td>\n\
		<td>\n\
Determines whether or not the animation editor will use the snap-to-frame feature.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Do not use snap-to-frame feature. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Use the snap-to-frame feature. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">snapslopes</td>\n\
		<td>\n\
Determines whether or not the slope handles on key points will snap when manipulated.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) No snapping on slope handles. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>The slope handles on key points will snap when manipulated. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectedcurves</td>\n\
		<td>\n\
Returns or sets the selected FCurve objects as a comma-delimited string containing the full name of the FCurve\'s parent. If nothing is selected, it returns an empty string.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>The parent(s) <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> of FCurve Object(s).					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a>  and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameall</td>\n\
		<td>\n\
Frames all displayed fcurves.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameselection</td>\n\
		<td>\n\
Frames selection.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameplaybackrange</td>\n\
		<td>\n\
Frames all the fcurves within the time span specified by the timeline.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameselectedkeys</td>\n\
		<td>\n\
Frames selected keys.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameselectedcurves</td>\n\
		<td>\n\
Frames selected fcurves.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameregion</td>\n\
		<td>\n\
Frames a region.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">centercurrenttime</td>\n\
		<td>\n\
Centers the fcurve graph around the timeline cursor\'s position, when the timeline cursor is visible.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">autoframe</td>\n\
		<td>\n\
Determines whether or not animation editor will frame all fcurves automatically.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables the automatic framing. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Enables the automatic framing. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">interactiveupdate</td>\n\
		<td>\n\
Determines whether or not to see the effect of the changes in viewports as you edit the fcurves.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) \"Interactive update\" option is off. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>\"Interactive update\" option is on. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">showbuffercurves</td>\n\
		<td>\n\
Determines whether or not to display a temporary copy of the original function curve that has been saved into a buffer.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Don\'t show the buffer curves. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows the buffer curves. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">displaynormalized</td>\n\
		<td>\n\
Determines whether or not to display the normalized fcurves.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Displays non-normalized fcurves. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Displays normalized fcurves. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">classicmode</td>\n\
		<td>\n\
Switches between Suite and Classic Mode.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Suite Mode is active which is designed to be used if you\'re running the Suite version of Softimage. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Classic Mode is on to provide all tools that you are used to as a seasoned Softimage user. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">hle</td>\n\
		<td>\n\
\n\
					Determines whether or not to enable the high-level editing (HLE) tool.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.\n\
							<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables the high-level editing (HLE) tool. Note: Use the binary false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Enables the high-level editing (HLE) tool. Note: Use the binary true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">hlecompensation</td>\n\
		<td>\n\
\n\
					Determines whether or not to enable the high-level editing (HLE) compensation mode, when the HLE tool is activated.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.\n\
							<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables the high-level editing (HLE) compensation mode. Note: Use the binary false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Enables the high-level editing (HLE) compensation mode. Note: Use the binary true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">hleoperation</td>\n\
		<td>\n\
\n\
					Determines which high-level editing (HLE) operation the HLE tool uses, when enabled.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.\n\
							<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">siHLEOperationRelativeOffset</td>\n\
					<td>The HLE tool uses the Relative Offset operation.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siHLEOperationAbsoluteOffset</td>\n\
					<td>(Default) The HLE tool uses the Absolute Offset operation.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siHLEOperationAbsoluteScaling</td>\n\
					<td>The HLE tool uses the Absolute Scaling operation.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">displayoptions</td>\n\
		<td>\n\
Determines which fcurves are displayed in the graph by default.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">siAllParam</td>\n\
					<td>Displays fcurves for all parameters of the selected object.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siMarkedParam</td>\n\
					<td>Displays fcurves only for the object\'s marked parameters.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siAnimatedParam</td>\n\
					<td>(Default) Displays fcurves only for the object\'s animated parameters.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siSelectedParam</td>\n\
					<td>Displays fcurves only for the object\'s selected parameters.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">isolatecurve</td>\n\
		<td>\n\
Determines whether or not to isolate the selected fcurves so that only they appear in the graph.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables the isolating feature. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Isolates the selected fcurves. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">clearallcurves</td>\n\
		<td>\n\
Hides all fcurves associated with the selected object without collapsing the animation explorer.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">hidecurve</td>\n\
		<td>\n\
Hides the selected fcurves. This also deselects the fcurves.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">unhideallcurves</td>\n\
		<td>\n\
Displays all hidden fcurves.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">keysonunselectedcurves</td>\n\
		<td>\n\
Determins whether or not to display keys on all unselected curves.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Hides keys on all unselected curves. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows keys on all unselected curves. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">slopesonunselectedkeys</td>\n\
		<td>\n\
Determines whether or not to display the slope handles of all unselected keys on a selected curve.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Hides slope handles of all unselected keys. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows slope handles of all unselected keys. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">showlabels</td>\n\
		<td>\n\
Determines whether or not to display labels on all selected curves.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Hides the curve and axis labels. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows the curve and axis labels. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">keyscoordinates</td>\n\
		<td>\n\
Determines whether or not to display the X and Y coordinate values for each selected key.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Hides the coordinate values. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Shows the coordinate values. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">grid</td>\n\
		<td>\n\
Determines whether or not to display the X and Y axis grid lines.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Hides the grid lines. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Shows the grid lines. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">rulers</td>\n\
		<td>\n\
Determines whether or not to display the rulers on the horizontal X (time) and vertical Y (value) axes.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Hides both X and Y axes. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Shows both X and Y axes. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">timecursorvisible</td>\n\
		<td>\n\
\n\
					Determines whether or not to display the red playback cursor in the fcurve graph.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.\n\
							<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>Hides the playback cursor. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>(Default) Shows the playback cursor. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">timecursorselectable</td>\n\
		<td>\n\
\n\
					Determines whether or not the red playback cursor is selectable in the fcurve graph.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.\n\
							<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Only can drag the cursor in the timeline area. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Makes the playback cursor available in the graph so that you can also select and drag it in graph area. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">metacurveregion</td>\n\
		<td>\n\
\n\
					Determines whether or not to display a bar below the graph showing an overview representation of all the keys of the selected fcurves.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.\n\
							<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Hides the metacurve region. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows the metacurve region. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">localtime</td>\n\
		<td>\n\
\n\
					Determines whether or not to display the corresponding time of the animation between the action in the animation mixer and the fcurve editor.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.\n\
							<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">false</td>\n\
					<td>(Default) Disables this feature. Note: Use the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">true</td>\n\
					<td>Shows the local time of where the original action source is being evaluated in fcurve editor, and shows whether this point is in relation to the global time of the scene in Mixer. Note: Use the boolean true.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">framerange</td>\n\
		<td>\n\
Returns or sets the frame range in frame values.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;start&gt;,&lt;end&gt;</td>\n\
					<td>Frame range, specified by a comma-delimited string containing the start and end frame values.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">timerange</td>\n\
		<td>\n\
Returns or sets the frame range in time values.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;start&gt;,&lt;end&gt;</td>\n\
					<td>Frame range, specified by a comma-delimited string containing the start and end time values.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">valuerange</td>\n\
		<td>\n\
Returns or sets the minimum/maximum values (Y axis) range.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;minimum&gt;,&lt;maximum&gt;</td>\n\
					<td>Value range, specified by a comma-delimited string containing the minimum and maximum values (Y axis).					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">displayedcurves</td>\n\
		<td>\n\
Returns or sets the displayed FCurve objects as a comma delimited string containing the full name of the FCurve\'s parent. If nothing is displayed, it returns an empty string.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>The Parent\'s <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> of FCurve Object(s).					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectedkeysatframes</td>\n\
		<td>\n\
\n\
					Returns or sets the selected keys of FCurve objects as a string. The string format is the following: \"<first fcurve\'s=\"\" parent=\"\" full=\"\" name=\"\">,<first frame=\"\">,<second frame=\"\">;<second fcurve\'s=\"\" parent=\"\" full=\"\" name=\"\">,<first frame=\"\">,<second frame=\"\">\".<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.<br /><br /> For example:\n\
					<div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Selects keys at frame 1 and frame 25 of the local posx of the cone object and the frame 50 of the local sclx of the Model.sphere object.\n\
myView.SetAttributeValue( \"selectedkeysatframes\", \"cone.kine.local.posx,1,25;Model.sphere.local.kine.sclx,50\" );</pre></td></tr>\n\
</table>\n\
</div>			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>A string representing the selected keys in a context of frame values (X axis).					</td>\n\
				</tr>\n\
			</table>\n\
		</second></first></second></second></first></first></td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectedkeysattimes</td>\n\
		<td>\n\
\n\
					Returns or sets the selected keys of FCurve objects as a string. The string format is the following: \"<first fcurve\'s=\"\" parent=\"\" full=\"\" name=\"\">,<first time=\"\">,<second time=\"\">;<second fcurve\'s=\"\" parent=\"\" full=\"\" name=\"\">,<first time=\"\">,<second time=\"\">\".<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.<br /><br /> For example:\n\
					<div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Selects keys at time 0.5 and time 4 of the local posx of the cone object and the time 8 of the local sclx of the Model.sphere object.\n\
myView.SetAttributeValue( \"selectedkeysattimes\", \"cone.kine.local.posx,0.5,4;Model.sphere.local.kine.sclx,8\" );</pre></td></tr>\n\
</table>\n\
</div>			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>A string representing the selected keys in a context of time values (X axis).					</td>\n\
				</tr>\n\
			</table>\n\
		</second></first></second></second></first></first></td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">savebuffer</td>\n\
		<td>\n\
Saves the buffer copy of the edited curve, when buffer curves option is active.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">swapbuffer</td>\n\
		<td>\n\
Swaps between the edited curve and its buffer copy, when buffer curves option is active.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any value&gt;</td>\n\
					<td>This value is ignored.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">autosnaptoframes</td>\n\
		<td>\n\
Determines whether the keys will be kept on frames when scaling regions or not.<br /><br />Note: This attribute is only effective if the view area (right panel) is the fcurve graph or the dopesheet.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Keys will not be snapped to frames. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>The keys will be kept on frames when scaling regions. Note: Use the string \"true\", not the boolean true.					</td>\n\
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