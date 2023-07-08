var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Texture Editor Attributes</title>\n\
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
            <h1>Texture Editor Attributes</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">Texture Editor Attributes</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v6.0</p></div>\n\
\n\
<div>\n\
	<p>View attributes for the <a href=\"http://softimage.wiki.softimage.com/xsidocs/uved8.htm\">Texture Editor</a> (see <a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and (<a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>). Not all attributes support both setting and getting. Check the third column in the table. </p>\n\
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
		<td class=\"example\">selectedsamples</td>\n\
		<td>\n\
Returns a string representation of the currently selected sampled points of the first projection in the Texture Editor. <br /><br />Warning: Since the multi-UV projections, this attribute is now obsolete.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>List of currently selected sampled points of the first projection.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">currentprojectionname</td>\n\
		<td>\n\
Returns the name of the first projection in the Texture Editor. <br /><br />Warning: Since the multi-UV projections, this attribute is now obsolete.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;string&gt;</td>\n\
					<td>The first projection name.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">allprojectionnames</td>\n\
		<td>\n\
Returns all active projection names.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;list of elements&gt;</td>\n\
					<td>A comma-delimited list of active projection names.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">all3dobjectnames</td>\n\
		<td>\n\
Returns all matching 3D object names (see allprojectionnames).			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;list of elements&gt;</td>\n\
					<td>A comma-delimited list of matching 3D object names.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">pivotu</td>\n\
		<td>\n\
Returns the u component of the current pivot if set. If not set, returns the u component of the center of selection.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;double&gt;</td>\n\
					<td>The U coordinate of the pivot.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">pivotv</td>\n\
		<td>\n\
Returns the v component of the current pivot if set. If not set, returns the v component of the center of selection.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;double&gt;</td>\n\
					<td>The V coordinate of the pivot.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectedsamplespoints</td>\n\
		<td>\n\
Returns the currently selected samples (in all projections).			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;list of elements&gt;</td>\n\
					<td>A semicolon-delimited list of currently selected samples.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">selectedprojections</td>\n\
		<td>\n\
Returns the names of the UV Props (projections) that are part of the selection.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;list of elements&gt;</td>\n\
					<td>A semicolon-delimited list of names of the UV Props (projections) that are part of the selection.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> only.</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">checkerboard</td>\n\
		<td>\n\
Enables/Disables the checkerboard mode.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the checkerboard mode.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the checkerboard mode.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">frameselection</td>\n\
		<td>\n\
Frames the selected components in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
		<td class=\"example\">frameall</td>\n\
		<td>\n\
Frames all the vertices in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
		<td class=\"example\">frameimage</td>\n\
		<td>\n\
Frames the image in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
		<td class=\"example\">showselected</td>\n\
		<td>\n\
Show the selected components in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
		<td class=\"example\">hideselected</td>\n\
		<td>\n\
Hide the selected components in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
		<td class=\"example\">showall</td>\n\
		<td>\n\
Show all the components in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
		<td class=\"example\">maxdisplayresolution</td>\n\
		<td>\n\
Sets/Gets the maximum display resolution of the image in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'64\'</td>\n\
					<td>Set maximum display resolution to 64 x 64.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'128\'</td>\n\
					<td>Set maximum display resolution to 128 x 128.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'256\'</td>\n\
					<td>(Default) Set maximum display resolution to 256 x 256.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'512\'</td>\n\
					<td>Set maximum display resolution to 512 x 512.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'1024\'</td>\n\
					<td>Set maximum display resolution to 1024 x 1024.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'max\'</td>\n\
					<td>Set maximum display resolution to the maximum supported by the hardware.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">interpolateimage</td>\n\
		<td>\n\
Enables/Disables the interpolation of the image.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the interpolation of the image.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the interpolation of the image.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">dimimage</td>\n\
		<td>\n\
Enables/Disables the dimming of the image.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the dimming of the image.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the dimming of the image.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">overlaps</td>\n\
		<td>\n\
Enables/Disables the highlighting of overlaps in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the highlight of overlaps.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the highlight of overlaps.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">oddoverlaps</td>\n\
		<td>\n\
Enables/Disables the highlighting of odd overlaps in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the highlight of odd overlaps.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the highlight of odd overlaps.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">coverage</td>\n\
		<td>\n\
Enables/Disables the display of the coverage in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the display of the coverage.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the display of the coverage.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">connectivity</td>\n\
		<td>\n\
Enables/Disables the display of the connectivity in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the display of the connectivity.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the display of the connectivity.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">statusbar</td>\n\
		<td>\n\
Enables/Disables the display of the statusbar in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>(Default) Disables the display of the statusbar.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Enables the display of the statusbar.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">clip</td>\n\
		<td>\n\
Sets/Gets the image clip in the Texture Editor view.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;image clip name&gt;</td>\n\
					<td>The <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> of the <a href=\"#!/url=./si_om/ImageClip.html\">ImageClip</a>.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">projection</td>\n\
		<td>\n\
Sets/Gets the UV projection in the Texture Editor view. For example: \n\
				<div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Set the UVs to be proj1 and proj2\n\
myView.SetAttributeValue(\"projection\", \"cylinder.polymsh.cls.Texture_Coordinates_AUTO.proj1,cylinder.polymsh.cls.Texture_Coordinates_AUTO.proj2\");</pre></td></tr>\n\
</table>\n\
</div>			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">&lt;list of uv projections&gt;</td>\n\
					<td>A comma-delimited list of UV projections. To set the UV projection to be non-editable, append \":nonedit\" behind the UV projection. e.g.: \"cylinder.polymsh.cls.Texture_Coordinates_AUTO.Texture_Projection:nonedit\".					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
				</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"example\">lock</td>\n\
		<td>\n\
Controls the lock selection state button in the toolbar.			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>\n\
					</td>					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>\n\
					</td>				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'true\'</td>\n\
					<td>Locks the selection in the Texture Editor.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">\'false\'</td>\n\
					<td>Unlocks the selection in the Texture Editor. This means that the Texture Editor display will change when the selection changes.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
		<td class=\"sa\">\n\
<a href=\"#!/url=./si_om/View.GetAttributeValue.html\">View.GetAttributeValue</a> and <a href=\"#!/url=./si_om/View.SetAttributeValue.html\">View.SetAttributeValue</a>.\n\
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