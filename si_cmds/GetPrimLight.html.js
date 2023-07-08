var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GetPrimLight</title>\n\
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
            <h1>GetPrimLight</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GetPrimLight</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a primitive light.\n\
<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference. Normally \n\
you can get the output arguments via either <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method (C#) or the \n\
<a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> (scripting languages), but this command\n\
already returns a value. \n\
<br /><br />\n\
The only available workaround in this case is to create a VBScript custom command which returns both the output\n\
arguments and the return value in one array. For details, see \n\
<a href=\"#!/url=./files/RtnValProblem.htm\">What Happens when the Function Already Returns a Value?</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = GetPrimLight( PresetObj, [Name], [Parent], [Primitive], [PrimObjSpot], [PrimObjSpotInterest] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
Returns the <a href=\"#!/url=./si_om/LightRig.html\">LightRig</a> object for the Spot and Light_Box and \n\
the <a href=\"#!/url=./si_om/Light.html\">Light</a> object for the other light types.\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (see <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
Any preset for the <a href=\"#!/url=./si_cmds/LightPrimitives.html#\">Light Primitives</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the light. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Parent <a href=\"#!/url=./files/objectexpr.htm\">object</a> for the light. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Primitive		</td>\n\
		<td><a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>		</td>\n\
		<td>\n\
 Returns the light primitive.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PrimObjSpot		</td>\n\
		<td><a href=\"#!/url=./si_om/Light.html\">Light</a>		</td>\n\
		<td>\n\
 \n\
		Returns the spot light object. For other light types, this is the light object \n\
		(the same object returned by GetPrimLight). \n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PrimObjSpotInterest		</td>\n\
		<td><a href=\"#!/url=./si_om/Null.html\">Null</a>		</td>\n\
		<td>\n\
 \n\
		Returns the spot interest for the Spot and Light_Box types of lights \n\
		(and Nothing for the other light types). \n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">GetPrimLight \"Neon\", \"MyNeonLight\"\n\
set root = GetPrimLight( \"Spot\", \"aSpot\", , spot, prim, interest )\n\
logmessage \"root = \" &amp; root\n\
logmessage \"prim = \" &amp; prim \n\
logmessage \"spot = \" &amp; spot \n\
if Not TypeName (interest) = \"Nothing\" then\n\
	logmessage \"int  = \" &amp; interest\n\
end if</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIGetPrimLight.html\">SIGetPrimLight</a> <a href=\"#!/url=./si_cmds/SIGetPrimSpotLight.html\">SIGetPrimSpotLight</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";