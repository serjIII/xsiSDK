var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIConvert</title>\n\
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
            <h1>SIConvert</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIConvert</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Converts an implicit primitive to a geometry type.\n\
<br /><br />\n\
Warning: The implicit primitives must be compatible with the geometry types.\n\
<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference. However, \n\
this command also returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing the output arguments.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SIConvert( Target, Source, CreatedObj, OutputObj );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> that contains the created converter <a href=\"#!/url=./si_om/Operator.html\">Operator</a> and \n\
the newly created geometric <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> object wrapped in an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>. \n\
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
		<td class=\"name\">Target		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 name of the output geometry 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">MeshSurface					</td>\n\
					<td>Mesh surface geometry					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">NurbsSurface					</td>\n\
					<td>Nurbs curve geometry					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">NurbsCurve					</td>\n\
					<td>Nurbs curve geometry					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Glyphs					</td>\n\
					<td>Output geometry type for use with implicit text					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Source		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Object to convert 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CreatedObj		</td>\n\
		<td><a href=\"#!/url=./si_om/Operator.html\">Operator</a>		</td>\n\
		<td>\n\
 Returns the converter operator 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OutputObj		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing the <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>		</td>\n\
		<td>\n\
 Returns the primitive. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example shows how to convert an implicit sphere to a mesh sphere\n\
NewScene , false\n\
dim lCreated, oImplicitSphere\n\
\' Create implicit sphere\n\
set oImplicitSphere = GetPrim(\"Sphere\")\n\
\' Implicit sphere becomes a mesh.\n\
\' SIConvert returns more information than Convert.\n\
\' The return collection is consulted instead of the return parameters\n\
\' because it is more scripting language neutral.\n\
set lCreated = SIConvert( \"MeshSurface\", oImplicitSphere )\n\
\'Log the following information:\n\
\'INFO : \"2 elements in collection.\"\n\
\'INFO : \"First object is an Operator\"\n\
\'INFO : \"Second object is an Object\"\n\
LogMessage lCreated.Count &amp; \" elements in collection.\"\n\
LogMessage \"First object is an \" &amp; typename( lCreated(0))\n\
LogMessage \"Second object is an \" &amp; typename( lCreated(1))</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/Convert.html\">Convert</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";