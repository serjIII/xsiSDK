var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>View Manager Attributes</title>\n\
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
            <h1>View Manager Attributes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">View Manager Attributes</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<div>\n\
	<p>View attributes for the View Manager. The View Manager gives you access to the four viewports (see the \'Working with Views\' topic in the Softimage user guide). Not all attributes support both setting and getting. Check the third column in the table. </p>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Tip</td>\n\
		<td class=\"emph\">Unlike most of the other views you create with the <a href=\"#!/url=./si_om/Layout.CreateView.html\">Layout.CreateView</a> method, you are not creating a new view when you instantiate this view; you are creating a pointer to the View Manager (and there is always only one). This means that you always have to access this view using the name \"vm\", no matter what name you passed with the CreateView method.</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
<div class=\"tip\">\n\
<table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<td class=\"label\">Warning</td>\n\
		<td class=\"emph\">Some commands (like <a href=\"#!/url=./si_cmds/GetPrimCamera.html\">GetPrimCamera</a>) return the <a href=\"#!/url=./si_om/CameraRig.html\">CameraRig</a> (root). If you try to pass in the return value from that command, the designated viewport will not change cameras.</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
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
		<td class=\"example\">activecamera:a</td>\n\
		<td>\n\
Changes the camera for the \'A\' view to a specific scene camera or spotlight. Also returns the name of the current scene camera. This syntax can also be applied to views: \'B\', \'C\' and \'D\'.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any scene camera or spotlight&gt;</td>\n\
					<td>The <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> of any <a href=\"#!/url=./si_om/Camera.html\">Camera</a> or  <a href=\"#!/url=./si_om/SpotLight.html\">SpotLight</a> currently in the scene (not its root). The active camera or spotlight can be set to the Front, Right, Top, or User camera using the values: \'front\', \'right\', \'top\', or \'user\' or \'default\'. The active camera or spotlight can be set to the render pass camera using the values: \'render\' or \'render pass\'.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> (cameras only) and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> (both cameras and spotlights).</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">viewport:a</td>\n\
		<td>\n\
Changes the \'A\' viewport to a specific view. This syntax can also be applied to viewports: \'B\', \'C\' and \'D\'.<br /><br /> See the <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> method for an example using this attribute.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any view&gt;</td>\n\
					<td>The <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> of any <a href=\"#!/url=./si_om/View.html\">View</a>. A list of views can be found defined in the definition of the Type argument for the <a href=\"#!/url=./si_cmds/OpenView.html\">OpenView</a> command.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">focusedviewport</td>\n\
		<td>\n\
The viewport (\"A\", \"B\", \"C\" or \"D\") in the view manager which has the focus (view clicked in which is indicated by a light gray border).			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;viewport&gt;</td>\n\
					<td>The viewport to set (\"A\", \"B\", \"C\" or \"D\").					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">viewportundermouse</td>\n\
		<td>\n\
The viewport (\"A\", \"B\", \"C\" or \"D\") under the mouse (or last viewport if mouse is not currently over the view manager).		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">layout</td>\n\
		<td>\n\
Changes or returns the layout of the specified viewport(s) (\"A\", \"B\", \"C\" or \"D\"). Possible layouts are fullscreen, vertical, horizontal, or the default (four panes).<br /><br />When setting the layout, you specify the viewport letter with the value (2nd argument). When getting the layout, you specify the viewport letter with the attribute (1st argument).<br /><br /> See the <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> and <a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> methods for examples using this attribute.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">maximize:&lt;any one viewport letter&gt;</td>\n\
					<td>Makes the specified viewport fullscreen. Possible values are \'a\', \'b\', \'c\' or \'d\'. For example, \'oVM.SetAttributeValue(\"layout\",\"maximize:d\")\' makes the \'D\' viewport the only visible viewport in the layout.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">horizontal:&lt;up to two viewport letters&gt;</td>\n\
					<td>Makes the specified viewport(s) maximized horizontally (halfscreen). Possible values include any combination of \'a\', \'b\', \'c\' or \'d\', but only the first two letters are used. For example, \'oVM.SetAttributeValue(\"layout\",\"horizontal:ad\")\' makes the \'A\' viewport halfscreen on top and the \'D\' viewport halfscreen on bottom (ie., \'B\' and \'C\' disappear). Another example: \'oVM.SetAttributeValue(\"layout\",\"horizontal:c\")\' makes the \'C\' viewport horizontally maximized at the bottom.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">vertical:&lt;up to two viewport letters&gt;</td>\n\
					<td>Makes the specified viewport(s) maximized vertically (halfscreen). Possible values include any combination of \'a\', \'b\', \'c\' or \'d\', but only the first two letters are used. For example, \'oVM.SetAttributeValue(\"layout\",\"vertical:ad\")\' makes the \'A\' viewport halfscreen at the left and the \'D\' viewport halfscreen at the right (ie., \'B\' and \'C\' disappear). Another example: \'oVM.SetAttributeValue(\"layout\",\"vertical:abcd\")\' makes the \'A\' and \'B\' viewports vertically maximized (ie., \'C\' and \'D\' disappear).					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">default</td>\n\
					<td>(Set only) Displays all four views at once (default layout).					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">reset</td>\n\
					<td>(Set only) Resets the display to show all four views at once and make the splitters symmetrical. This ensures that viewports can be constant across different screen resolutions for any scene.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">hidden</td>\n\
					<td>(Get only) The specified viewport is hidden. For example, if you made A and D each horizontally halfscreen with \'oVM.SetAttributeValue(\"layout\",\"horizontal:ad\")\' and then called \'oVM.GetAttributeValue(\"layout:b\")\', you would get \"hidden\" as the returned value.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'\'</td>\n\
					<td>(Get only) An empty string is returned if the viewport letter is not \'a\', \'b\', \'c\' or \'d\'.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">suspenddrawing</td>\n\
		<td>\n\
Suspends the drawing. It allows you to change serveral view attributes in bulk without redrawing the view many times.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Suspends the drawing. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Requests to cancel the suspension. Each call to cancel should match a previous call to set a suspension. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> only.\n\
				</td>\n\
	</tr>\n\
</table>\n\
<br />\n\
\n\
</div>\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";