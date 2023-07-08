var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>GetKeyInfo</title>\n\
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
            <h1>GetKeyInfo</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">GetKeyInfo</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Gets information for a function curve key.\n\
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
		<td class=\"example\"><pre>GetKeyInfo( InputObj, Index, [Parameter], [LeftValue], [RightValue], [LeftTanParam], [LeftTanValue], [RightTanParam], [RightTanValue], [RightSegKind], [Constraints] );</pre>		</td>	</tr>\n\
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
 Component on which is connected a FCurve 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Index		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Index of a key. Keys are indexed from 0 to (nbKeys - 1). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parameter		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the parameter value. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LeftValue		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the left value of the key. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RightValue		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the right value of the key. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LeftTanParam		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the left value of the tangent parameter for the key. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">LeftTanValue		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the left value of the tangent for the key. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RightTanParam		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the right value of the tangent parameter for the key. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RightTanValue		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Returns the right value of the tangent for the key. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">RightSegKind		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Returns the segment type of the right side of the key. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
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
		<td class=\"name\">Constraints		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Constraints on the key. This value is a bitfield. 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>No constraint.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Parameter is immutable.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Left and right values are immutable.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Function curve is G1 continuous at this key.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">8					</td>\n\
					<td>Left- and right-tangent directions are immutable.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">16					</td>\n\
					<td>Left- and right-tangent lengths are immutable.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">32					</td>\n\
					<td>Parameter, values, and tangents are immutable.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">64					</td>\n\
					<td>Tangents are considered horizontal.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">128					</td>\n\
					<td>Tangents are considered as horizontal when the key is a local extremum.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">256					</td>\n\
					<td>Tangents are adjusted automatically when neighbouring keys are created or moved.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' create a null to hold animation\n\
GetPrim \"Null\"\n\
\' Save some keys on the X position of the Null object\n\
SaveKey \"Null.kine.local.posx\", 1, -5.0\n\
SaveKey \"Null.kine.local.posx\", 25, 7.0\n\
SaveKey \"Null.kine.local.posx\", 50, 2.0\n\
\' Get the animation source of type FCurve\n\
set collection = GetSource( \"Null.kine.local.posx\",siFCurveSource  )\n\
for each fcurve in collection\n\
	\' get fcurve info\n\
		GetFCurveInfo fcurve, crvtype, nokeyval, nbKeys, extrap, segtype, lowclamp, highclamp\n\
	LogMessage \"FCurve: \" &amp; vbCR &amp; vbLF &amp; _\n\
		\"Type : \" &amp; crvtype &amp; vbCR &amp; vbLF &amp; _\n\
		\"No Key Value : \" &amp; nokeyval&amp; vbCR &amp; vbLF &amp; _\n\
		\"Num Keys : \" &amp; nbKeys&amp; vbCR &amp; vbLF &amp; _\n\
		\"Extrapolation : \" &amp; extrap &amp; vbCR &amp; vbLF &amp; _\n\
		\"Default Segment Type : \" &amp; segtype&amp; vbCR &amp; vbLF &amp; _\n\
		\"Low Clamp : \" &amp; seglowclamp &amp; vbCR &amp; vbLF &amp; _\n\
		\"High Clamp : \" &amp; highclamp &amp; vbCR &amp; vbLF\n\
	for i = 0 to nbkeys - 1\n\
		\' get fcurvekey info\n\
		GetKeyInfo fcurve, i, parameter, leftval, rightval, lefttanparam, lefttanval, righttanparam, righttanval, rightsegkind, constraints\n\
		LogMessage \"Key: \" &amp; i &amp; vbCR &amp; vbLF &amp; _\n\
			\"KeyParam : \" &amp; parameter &amp; vbCR &amp; vbLF &amp; _\n\
			\"LeftValue: \" &amp; leftval &amp; vbCR &amp; vbLF &amp; _\n\
			\"RightValue: \" &amp; rightval &amp; vbCR &amp; vbLF &amp; _\n\
			\"LeftTanParam: \" &amp; lefttanparam &amp; vbCR &amp; vbLF &amp; _\n\
			\"LeftTanValue: \" &amp; lefttanval &amp; vbCR &amp; vbLF &amp; _\n\
			\"RightTanParam: \" &amp; righttanparam &amp; vbCR &amp; vbLF &amp; _\n\
			\"RightTanValue: \" &amp; righttanval &amp; vbCR &amp; vbLF &amp; _\n\
			\"RightSegKind: \" &amp; rightsegkind &amp; vbCR &amp; vbLF &amp; _\n\
			\"Constraints: \" &amp; constraints &amp; vbCR &amp; vbLF\n\
	next\n\
next \n\
\'INFO : \"FCurve: \n\
\'Type : 20\n\
\'No Key Value : -5\n\
\'Num Keys : 3\n\
\'Extrapolation : 1\n\
\'Default Segment Type : 3\n\
\'Low Clamp : \n\
\'High Clamp : 1.79769313486232E+308\n\
\'\"\n\
\'INFO : \"Key: 0\n\
\'KeyParam : 3.33666666666667E-02\n\
\'LeftValue: -5\n\
\'RightValue: -5\n\
\'LeftTanParam: 0\n\
\'LeftTanValue: 0\n\
\'RightTanParam: 0.266933333333333\n\
\'RightTanValue: 0\n\
\'RightSegKind: 3\n\
\'Constraints: 260\n\
\'\"\n\
\'INFO : \"Key: 1\n\
\'KeyParam : 0.834166666666667\n\
\'LeftValue: 7\n\
\'RightValue: 7\n\
\'LeftTanParam: -0.266933333333333\n\
\'LeftTanValue: -1.14285714285714\n\
\'RightTanParam: 0.278055555555556\n\
\'RightTanValue: 1.19047619047619\n\
\'RightSegKind: 3\n\
\'Constraints: 260\n\
\'\"\n\
\'INFO : \"Key: 2\n\
\'KeyParam : 1.66833333333333\n\
\'LeftValue: 2\n\
\'RightValue: 2\n\
\'LeftTanParam: -0.278055555555556\n\
\'LeftTanValue: 0\n\
\'RightTanParam: 0\n\
\'RightTanValue: 0\n\
\'RightSegKind: 3\n\
\'Constraints: 260\n\
\'\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a> <a href=\"#!/url=./si_cmds/GetFCurveInfo.html\">GetFCurveInfo</a> <a href=\"#!/url=./si_cmds/GetSource.html\">GetSource</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";