var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>MakeBicepRoll</title>\n\
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
            <h1>MakeBicepRoll</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">MakeBicepRoll</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates roll nulls along the length of a bone. When used as deformers on an envelope they evenly\n\
distribute twist along the length of a bone giving a more natural skin deformation.<br /><br />\n\
The start and end rotations are determined differently for a bicep division than a forearm division \n\
(<a href=\"#!/url=./si_cmds/MakeForearmRoll.html\">MakeForearmRoll</a>). In a bicep roll division, the bicep\'s local rotation without spin is the \n\
start rotation, while its rotation with spin is used for the end rotation. Roll divisions are then interpolated \n\
between start and end. In the case of forearm roll, the forearm\'s rotation minus spin (calculated using the bicep\'s \n\
rotation) is used as the starting rotation, while the end rotation is the next bone\'s rotation (wrist) including spin.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oBicepRoll = MakeBicepRoll( Bicep, [Prefix], [NbDivisions] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns a <a href=\"#!/url=./files/CDKBicepRoll.htm\">BicepRoll</a> JScript object.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Bicep		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
The chain element used for the start and end rotations of the roll division.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Prefix		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
Prefix added to the name of the roll divisions.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NbDivisions		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
The number of roll divisions. If the value is zero no roll is created.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
3			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This script creates 3 roll divisions on a bone\n\
*/\n\
var lPosStart = XSIMath.CreateVector3();\n\
var lPosEnd = XSIMath.CreateVector3();\n\
lPosStart.Set(0,0,0);\n\
lPosEnd.Set(-5,0,0);\n\
var Chain = ActiveSceneRoot.Add2DChain(lPosStart, lPosEnd);\n\
var BicepRoll = MakeBicepRoll(Chain.Bones(0), \"L\");\n\
DumpBicepRoll (BicepRoll );\n\
function DumpBicepRoll (inBicepRoll)\n\
{\n\
	logmessage (\"Data in the returned bicep roll object:\");\n\
	logmessage (\"---------------------------------------\");\n\
	logmessage (\"#Divisions: \" + inBicepRoll.Nb);\n\
	if(inBicepRoll.Nb &gt; 0)\n\
	{\n\
		for(var b=0;b&lt;inBicepRoll.Divisions.count;b++)\n\
		{logmessage (\"  RollDiv\" + b + \": \" + inBicepRoll.Divisions(b));}\n\
	}\n\
}\n\
//results from running this script\n\
//INFO : \"Data in the returned bicep roll object:\"\n\
//INFO : \"---------------------------------------\"\n\
//INFO : \"#Divisions: 3\"\n\
//INFO : \"  RollDiv0: LBicepRoll1\"\n\
//INFO : \"  RollDiv1: LBicepRoll2\"\n\
//INFO : \"  RollDiv2: LBicepRoll3\"\n\
//INFO : \"  RollDiv3: LBicepRoll_4\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/MakeForearmRoll.html\">MakeForearmRoll</a> <a href=\"#!/url=./si_cmds/MakeArm.html\">MakeArm</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";