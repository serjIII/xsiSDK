var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Object View Attributes</title>\n\
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
            <h1>Object View Attributes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Object View Attributes</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<div>\n\
	<p>View attributes for the <a href=\"http://softimage.wiki.softimage.com/xsidocs/objectview1.htm\">Object View</a>. Some of these attributes are available for <a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a> but some are only available for <a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a>. Check the third column in the table.</p>\n\
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
		<td class=\"example\">autoalign</td>\n\
		<td>\n\
If set to \"true\", the camera automatically aligns along the default view axis whenever the view is updated.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Enables the Auto Align Camera option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Disables the Auto Align Camera option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">autoframe</td>\n\
		<td>\n\
If set to \"true\", the camera automatically frames the selection whenever the view is updated.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Enables the Auto Frame Camera option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Disables the Auto Frame Camera option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">autoselect</td>\n\
		<td>\n\
Modifies the behaviour of the Auto Align Camera option so that the camera alignment axis is controlled by the maximum area of the bounding box. In other words, the camera view is set to front/top/right based on the area of the bounding box in that view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the Auto Select View option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the Auto Select View option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">camera</td>\n\
		<td>\n\
The name of a camera to use. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">default</td>\n\
					<td>User (default)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">user</td>\n\
					<td>User (default)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">render</td>\n\
					<td>Render Pass					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">render pass</td>\n\
					<td>Render Pass					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any scene camera name&gt;</td>\n\
					<td>The name of any camera in the scene					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any spotlight name&gt;</td>\n\
					<td>The name of any spotlight in the scene					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">compensate</td>\n\
		<td>\n\
Controls whether the camera is adjusted to compensate for changes to the selection. In other words, when this option is enabled, the camera is locked to the selection while it is animated, transformed, and so on.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Enables the Camera Compensation option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Disables the Camera Compensation option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">displayall</td>\n\
		<td>\n\
Displays all visible scene objects in the object view, instead of just the selection.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the Display All Objects option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the Display All Objects option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">displaymode</td>\n\
		<td>\n\
Get or set the default display mode to use when the object view is opened.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">bounding box</td>\n\
					<td>Bounding Box					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">wireframe</td>\n\
					<td>Wireframe (default)					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">depth cue</td>\n\
					<td>DepthCue					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">hidden line removal</td>\n\
					<td>Hidden Line					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">constant</td>\n\
					<td>Constant					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">shaded</td>\n\
					<td>Shaded					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">textured</td>\n\
					<td>Textured					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">textured decal</td>\n\
					<td>Textured Decal					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">high quality</td>\n\
					<td>High Quality					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">opengl</td>\n\
					<td>OpenGL					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;any custom display mode&gt;</td>\n\
					<td>The name of any custom display mode					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">holdselection</td>\n\
		<td>\n\
Controls whether to show the last selection when nothing is selected in Object View.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Hold the last selection. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Don\'t hold the last selection. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">localview</td>\n\
		<td>\n\
Controls whether the top/bottom/front/back/left/right views are based on the reference object (i.e. the first object in the display list) or whether they are global views.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Enables the Local Camera View option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Disables the Local Camera View option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">lockstatus</td>\n\
		<td>\n\
Controls the state of the lock selection button in the toolbar.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Locks the selection in the object view.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Unlocks the selection in the object view. This means that the object view display will change when the selection changes.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">modifycameras</td>\n\
		<td>\n\
When the View is set to a scene camera or spotlight, changing the selection modifies the camera/light\'s position based on changes in the object view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the Modify Scene Cameras option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the Modify Scene Cameras option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">rotatecomp</td>\n\
		<td>\n\
When Camera Compensation is activated, this option allows you to toggle the compensation for rotation. <br /><br />For example, this is useful if you want to track an object, but you don\'t want the camera to rotate with it.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Enables the Compensate > Rotation option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Disables the Compensate > Rotation option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">scalecomp</td>\n\
		<td>\n\
When Camera Compensation is activated, this option allows you to toggle the compensation for scaling. <br /><br />For example, this is useful if you want to track an object, but you don\'t want the camera to scale with it.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Enables the Compensate > Scaling option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Disables the Compensate > Scaling option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">targetcontent</td>\n\
		<td>\n\
The name of an object to view by default when the object view is opened. When the view is opened, it displays this element if it exists. The displayed object may change as you select objects unless the object view is locked. <br /><br />If the view is driven by a relationship, this content can be replaced dynamically.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;name of a scene item&gt;</td>\n\
					<td>The <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> of the object to display (by default, the current selection is used).					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">translatecomp</td>\n\
		<td>\n\
When Camera Compensation is activated, this option allows you to toggle the compensation for translation. <br /><br />For example, this is useful if you want to track an object, but you don\'t want the camera to translate with it.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>(Default) Enables the Compensate > Translation option. Note: Use the string \"true\", not the boolean true.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Disables the Compensate > Translation option. Note: Use the string \"false\", not the boolean false.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">view</td>\n\
		<td>\n\
The default point of view to use when the object view is opened. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">top</td>\n\
					<td>View from the top					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">bottom</td>\n\
					<td>View from the bottom					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">front</td>\n\
					<td>View from the front					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">back</td>\n\
					<td>View from the back					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">right</td>\n\
					<td>View from the right					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">left</td>\n\
					<td>View from the left					</td>\n\
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