var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SaveKey</title>\n\
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
            <h1>SaveKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SaveKey</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Saves key frames on parameters at a given frame. When you invoke this command on a parameter not\n\
already driven by an FCurve, a new FCurve is automatically created. <br /><br />\n\
The tolerance argument can be used to merge all keys within a certain range. The range is\n\
defined as  Frame - Tolerance and Frame + Tolerance. The merged key will inherit the constraints \n\
of the nearest key within this range.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SaveKey( [InputObjs], [Time], [Value], [Tolerance], [Layer], [ModifiedOnly], [AutokeyScope] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
List of animatable parameters (for example \"cone*/kine.local.pos\").			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
\n\
		If no argument is specified, the current <a href=\"#!/url=./files/markingexpr.htm\">marking</a> \n\
		is used.<br /><br />\n\
		Note: This command will fail if no argument is specified and no parameters are marked.\n\
				</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
Frame at which to set the key.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
If no argument is specified, the current frame is used.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
Key frame values.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Parameter values at current frame.			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Tolerance		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Frame tolerance 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Nearest 0.5 frame (-1)			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">>0					</td>\n\
					<td>Merge all keys between Frame - Tolerance and Frame + Tolerance					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Key must be exactly at frame					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">-1					</td>\n\
					<td>Nearest 0.5 frame					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Layer		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Animation layer to set keys on 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current animation layer (-1)			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ModifiedOnly		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 If true keys will only be set for parameters that have been modified at the current frame 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AutokeyScope		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Specifies whether keys will be set on all parameters or only those with existing fcurves or keys. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
All specified parameters (0)			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Key all specified parameters					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Only key parameters that have an existing key at the given time					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Only key parameters that have an existing fcurve					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\'	This example demonstrates how you can use the SaveKey command with\n\
\'	or without marking parameters. This example saves position keys on \n\
\'	the nulls using various techniques demonstrating the flexibility of\n\
\'	this command.\n\
\'\n\
NewScene , false\n\
\' Specify the parameter to set, the frame at which to set it and the value to use\n\
GetPrim \"Null\", \"null\"\n\
SaveKey \"null.kine.global.posx\", 50, 3\n\
SaveKey \"null.kine.global.posy\", 50, 3\n\
SaveKey \"null.kine.global.posz\", 50, 3\n\
\' Instead of a string identifying the null, we can also use the Null \n\
\' object\'s shortcut to the Parameter \n\
set n1 = GetPrim( \"Null\" )\n\
SaveKey n1.posx, 50, 3\n\
SaveKey n1.posy, 50, 3\n\
SaveKey n1.posz, 50, 3\n\
\' You can also mark the parameters instead of specifying them\n\
GetPrim \"Null\" \n\
SetMarking \"kine.local.pos\"\n\
SaveKey , 50, 3\n\
\' This saves the same keys, but does not mark posx, posy, and posz\n\
ClearMarking\n\
GetPrim \"Null\"\n\
SaveKey \"/kine.local.pos\", 50, 3\n\
\' You can also use the currently marked parameters at the current frame\n\
GetPrim \"Null\" \n\
SetMarking \"kine.local.pos\"\n\
Translate , 3, 3, 3\n\
SetValue \"PlayControl.Key\", 50\n\
SetValue \"PlayControl.Current\", 50\n\
SaveKey</pre></td></tr>\n\
</table>\n\
</div><h4>2. Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how you can use the SaveKey command to define an FCurve \n\
# on a parameter and then change its interpolation type to Linear (the default is \n\
# cubic Bezier -- see the FCurve object\'s documentation for more details). \n\
#\n\
from win32com.client import constants as c\n\
# Create scene\n\
Application.NewScene( \"\", 0 )\n\
Application.GetPrim( \"Null\", \"null\" )\n\
Application.CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
Application.SelectObj( \"null\", c.siSelectDefault, 1 )\n\
Application.ApplyCns( \"Path\", \"null\", \"arc\" )\n\
# Set some keys\n\
Application.SaveKey( \"null.kine.pathcns.perc\", 1, 0 )\n\
Application.SaveKey( \"null.kine.pathcns.perc\", 30, 25 )\n\
Application.SaveKey( \"null.kine.pathcns.perc\", 75, 85 )\n\
Application.SaveKey( \"null.kine.pathcns.perc\", 100, 100 )\n\
# Get the fcurve from a string path using the GetSource command\n\
col = Application.GetSource( \"null.kine.pathcns.perc\" )\n\
fc = col(0)\n\
# Alternatively, you can use the Dictionary.GetObject method to \n\
# get the parameter object and then use its Source method\n\
pathperc = Application.Dictionary.GetObject( \"null.kine.pathcns.perc\" )\n\
fc = pathperc.Source\n\
# Get the fcurve interpolation type \n\
Application.LogMessage( fc.Interpolation )\n\
# Change the fcurve from cubic Bezier (3) to linear (2) and then \n\
# print the interpolation type again\n\
Application.SetCurveType( \"null.kine.pathcns.perc\", 2 )\n\
Application.LogMessage( fc.Interpolation )\n\
# Expected results: (siFCurveInterpolation: 1=constant; 2=linear; 3=bezier cubic)\n\
#INFO : 3\n\
#INFO : 2</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SaveKeyOnKeyable.html\">SaveKeyOnKeyable</a> <a href=\"#!/url=./si_cmds/SaveKeyOnMarkedKeyable.html\">SaveKeyOnMarkedKeyable</a> <a href=\"#!/url=./si_om/FCurve.SetKey.html\">FCurve.SetKey</a> <a href=\"#!/url=./si_om/FCurve.SetKeys.html\">FCurve.SetKeys</a> <a href=\"#!/url=./si_cmds/AddFCurve.html\">AddFCurve</a> <a href=\"#!/url=./si_cmds/RemoveAnimation.html\">RemoveAnimation</a> <a href=\"#!/url=./si_cmds/RemoveAllAnimation.html\">RemoveAllAnimation</a> <a href=\"#!/url=./si_cmds/RemoveKey.html\">RemoveKey</a> <a href=\"#!/url=./si_cmds/PrevKey.html\">PrevKey</a> <a href=\"#!/url=./si_cmds/NextKey.html\">NextKey</a> <a href=\"#!/url=./si_cmds/FirstKey.html\">FirstKey</a> <a href=\"#!/url=./si_cmds/LastKey.html\">LastKey</a> <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";