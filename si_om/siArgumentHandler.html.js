var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siArgumentHandler</title>\n\
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
            <h1>siArgumentHandler</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siArgumentHandler</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Specifies the different <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a> objects available for Custom \n\
<a href=\"#!/url=./si_om/Command.html\">Command</a>s. Please refer to the example on the <a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a> \n\
page for a demo of these objects.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.siArgHandlerAnimatableParameters                               // AnimatableParameters\n\
StringModule.siArgHandlerCollection                                         // Collection\n\
StringModule.siArgHandlerFrame                                              // Frame\n\
StringModule.siArgHandlerFrameRate                                          // FrameRate\n\
StringModule.siArgHandlerMarkedParameters                                   // MarkedParameters\n\
StringModule.siArgHandlerSingleObj                                          // SingleObj</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerAnimatableParameters\"> </a>siArgHandlerAnimatableParameters		</td>\n\
		<td class=\"example\">AnimatableParameters		</td>\n\
		<td>\n\
This ArgumentHandler is identical to the \n\
		MarkedParameters argument handler, except it filters out any parameters in the list which are not animatable.  This is a \n\
		convenient way to avoid having to write extra error handling code in the command implementation.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerCollection\"> </a>siArgHandlerCollection		</td>\n\
		<td class=\"example\">Collection		</td>\n\
		<td>\n\
When no argument value is specified this ArgumentHandler passes the \n\
		current <a href=\"#!/url=./si_om/Selection.html\">Selection</a> to the Command.\n\
		<br /><br />\n\
		When a string is specified it is resolved into an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing all the specified objects.  \n\
		Wildcards and lists of objects are supported with the same syntax as used by <a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a>. For example \n\
		\"*\", \"*.polymsh\", \"cube1,grid2,light1\".		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerFrame\"> </a>siArgHandlerFrame		</td>\n\
		<td class=\"example\">Frame		</td>\n\
		<td>\n\
When no argument value is specified this ArgumentHandler sends the current \n\
		frame number as the value of the Argument. If a value (or default value) is specified for the <a href=\"#!/url=./si_om/Argument.html\">Argument</a> \n\
		then this Argument Handler does nothing.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerFrameRate\"> </a>siArgHandlerFrameRate		</td>\n\
		<td class=\"example\">FrameRate		</td>\n\
		<td>\n\
When no argument value is specified this ArgumentHandler sends the \n\
		current frame rate, for example 25. If a value (or default value) is specified for the <a href=\"#!/url=./si_om/Argument.html\">Argument</a> then \n\
		this Argument Handler does nothing.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerMarkedParameters\"> </a>siArgHandlerMarkedParameters		</td>\n\
		<td class=\"example\">MarkedParameters		</td>\n\
		<td>\n\
This ArgumentHandler is similar to the Collection argument\n\
		handler, except it deals with Marked <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>s (see <a href=\"#!/url=./files/markingexpr.htm\">Marked Parameters</a>.\n\
		<br /><br />\n\
		When no argument value is specified this ArgumentHandler passes an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing all the \n\
		<a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>s that have been marked on the selected objects. Note: Only the Selected objects are considered \n\
		when determining\n\
		the marking list.\n\
		<br /><br />\n\
		When a string value is specified Softimage attempts to resolve this into an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> with the specified \n\
		arguments.  Wild cards such as \"*\" and \"/\" are supported. For example \"Grid1,Grid2/Name\" will resolve into the Parameters\n\
		Grid1.Name and Grid2.Name.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerSingleObj\"> </a>siArgHandlerSingleObj		</td>\n\
		<td class=\"example\">SingleObj		</td>\n\
		<td>\n\
When no argument value is specified this ArgumentHandler passes NULL \n\
		(an empty object) as the value. When a string is specified Softimage attempts to resolve it to an object.  For example \"MyGrid\" \n\
		would be converted to the <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> representing that Grid.  In effect its behavior is similar to calling \n\
		<a href=\"#!/url=./si_om/Dictionary.GetObject.html\">Dictionary.GetObject</a>. When an object is specified the Argument Handler just passes it directly to the Command.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/Argument.Handler.html\">Argument.Handler</a> <a href=\"#!/url=./si_om/ArgumentCollection.AddWithHandler.html\">ArgumentCollection.AddWithHandler</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Argument.html#PutHandler\">Argument::PutHandler</a> <a href=\"#!/url=./si_cpp/classXSI_1_1ArgumentArray.html#AddWithHandler\">ArgumentArray::AddWithHandler</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ArgumentHandler.html\">ArgumentHandler</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";