var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GetFCurveInfo</title>\n\
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
            <h1>GetFCurveInfo</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GetFCurveInfo</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Gets function curve information for a parameter.\n\
<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>GetFCurveInfo( InputObj, [CurveKind], [ValueWhenNoKey], [NbKeys], [ExtrapolationKind], [DefaultSegKind], [LowClamp], [HighClamp] );</pre>		</td>	</tr>\n\
</table>\n\
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
		<td class=\"name\">InputObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 FCurve animation source. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">CurveKind		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Returns the type of function curve. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>UNKNOWN					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">10					</td>\n\
					<td>BOOLEAN					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">15					</td>\n\
					<td>INTEGER					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">20					</td>\n\
					<td>STANDARD					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">30					</td>\n\
					<td>RAWDATA					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ValueWhenNoKey		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the value of the function curve when it has no keys. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbKeys		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Returns the number of keys. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ExtrapolationKind		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Returns the extrapolation type of the function curve. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>CONSTANT					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>LINEAR					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>PERIODIC					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">DefaultSegKind		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Returns the default segment kind. Applies to standard function curves. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>DEFAULT					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>CONSTANT					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>LINEAR					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>CUBIC					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LowClamp		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the lower-clamping value. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">HighClamp		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the higher-clamping value. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">dim source, fcurve\n\
dim crvtype, nokeyval, nbKeys, extrap, seq, lowclamp, highclamp\n\
GetPrim \"Null\"\n\
\' Save some keys on the X position of the Null object\n\
SaveKey \"Null.kine.local.posx\", 1, -5.0\n\
SaveKey \"Null.kine.local.posx\", 25, 7.0\n\
SaveKey \"Null.kine.local.posx\", 50, 2.0\n\
\' Get the FCurve animation source\n\
set source = GetSource( \"Null.kine.local.posx\", siFCurveSource )\n\
for each fcurve in source\n\
	GetFCurveInfo fcurve, crvtype, nokeyval, nbKeys, extrap, seq, lowclamp, highclamp\n\
	Application.LogMessage \"Number of keys	: \" &amp; nbKeys\n\
	Application.LogMessage \"Value when no keys	: \" &amp; nokeyval\n\
	Application.LogMessage \"Type of fcurve	: \" &amp; crvtype\n\
	Application.LogMessage \"Extrapolation type	: \" &amp; extrap\n\
	Application.LogMessage \"Default segment type: \" &amp; seq\n\
	Application.LogMessage \"Lower clamp bound	: \" &amp; lowclamp\n\
	Application.LogMessage \"Upper clamp bound	: \" &amp; highclamp\n\
next</pre></td></tr>\n\
</table>\n\
</div><h4>2. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// This example illustrates how to get access to the output\n\
// arguments returned by the GetFCurveInfo command.\n\
// Commands that don\'t explicitly define a return value but have output\n\
// arguments in fact have an implicit return value which contains collection \n\
// object ( IVTCollection ). The .value is a method on this object.\n\
// Create scene\n\
NewScene(\"\",false);\n\
GetPrim(\"Null\", null, null);\n\
SetValue(\"null.Name\", \"null\", null);\n\
CreatePrim(\"Arc\", \"NurbsCurve\", null, null);\n\
SelectObj(\"null\", null, true);\n\
ApplyCns(\"Path\", \"null\", \"arc\", null);\n\
SaveKey(\"null.kine.pathcns.perc\", 1, 0, null);\n\
LastFrame();\n\
SetValue(\"null.kine.pathcns.perc\", 100, null);\n\
SaveKey(\"null.kine.pathcns.perc\", 100, 100, null);\n\
// Get the fcurve from a string path\n\
var col = GetSource(\"null.kine.pathcns.perc\");\n\
var src = col(0); \n\
// Get the fcurve info\n\
var vtcol = GetFCurveInfo( src );\n\
// Dump the fcurve info\n\
Application.LogMessage( \"CurveKind = \" + vtcol.value(\"CurveKind\") );\n\
Application.LogMessage( \"ValueWhenNoKey= \" + vtcol.value(\"ValueWhenNoKey\") ); \n\
Application.LogMessage( \"NbKeys= \" + vtcol.value(\"NbKeys\") ); \n\
Application.LogMessage( \"ExtrapolationKind= \" + vtcol.value(\"ExtrapolationKind\") ); \n\
Application.LogMessage( \"DefaultSegKind= \" + vtcol.value(\"DefaultSegKind\") ); \n\
Application.LogMessage( \"LowClamp= \" + vtcol.value(\"LowClamp\") ); \n\
Application.LogMessage( \"HighClamp= \" + vtcol.value(\"HighClamp\") );</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> <a href=\"#!/url=./si_cmds/GetSource.html\">GetSource</a> <a href=\"#!/url=./si_cmds/GetKeyInfo.html\">GetKeyInfo</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";