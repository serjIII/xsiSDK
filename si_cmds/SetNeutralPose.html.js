var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SetNeutralPose</title>\n\
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
            <h1>SetNeutralPose</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SetNeutralPose</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Copies all or parts of the current local transform to the neutral pose transform. It also\n\
recalculates the local transform based on the new neutral pose. The neutral pose acts like an intermediate parent \n\
between an object and its real parent. Neutral pose transform values are relative the parent object. <br /><br />\n\
An object\'s neutral pose is the pose where the local transform is identity. In Softimage the default neutral pose \n\
is the object\'s parent pose. Local animation is relative the object\'s neutral pose. <br /><br />\n\
Use <a href=\"#!/url=./si_cmds/ResetTransform.html\">ResetTransform</a> to reset an object to its neutral pose. \n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SetNeutralPose( [InputObjs], [Type], [Reset] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects or components. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected elements			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Type		</td>\n\
		<td><a href=\"#!/url=./si_om/siTransformFilter.html\">siTransformFilter</a>		</td>\n\
		<td>\n\
 Specifies the type of transformation to reset 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siSRT			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Reset		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 False = Set the neutral pose, True = Reset the neutral pose.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">//\n\
// This script creates a cone, sets a pose, copies the local transform \n\
// into the neutral pose (which will zero-out the local transform), then \n\
// resets the neutral pose (which will restore the local transform).\n\
//\n\
var oMyCone = CreatePrim(\"Cone\", \"MeshSurface\")\n\
Translate(oMyCone, 1,2,3,siRelative, siView, siObj, siXYZ, null, null, null, null, null, null, null, null, null);\n\
Rotate(oMyCone, 10, 20, 30, siRelative, siLocal, siObj, siXYZ, null, null, null, null, null, null, null);\n\
LogMessage(\"Original\");\n\
LogPosAndRot(oMyCone);\n\
//set the current pose as the neutral pose\n\
SetNeutralPose(oMyCone, siSRT, false);\n\
LogMessage(\"After setting neutral pose\");\n\
LogPosAndRot(oMyCone);\n\
//reset the neutral pose\n\
SetNeutralPose(oMyCone, siSRT, true);\n\
LogMessage(\"After resetting neutral pose\");\n\
LogPosAndRot(oMyCone);\n\
//--------------------------------------------//\n\
// log the local position and rotation,		  //\n\
// and the neutral pose position and rotation //\n\
//--------------------------------------------//\n\
function LogPosAndRot( in_obj )\n\
{\n\
	LogMessage(\"Local Position:\" +\n\
		   \" (\" + GetValue(in_obj+ \".kine.local.posx\") + \n\
		   \" ,\" + GetValue(in_obj+ \".kine.local.posy\") + \n\
		   \" ,\" + GetValue(in_obj+ \".kine.local.posz\") + \")\");\n\
	LogMessage(\"Local Rotation:\" + \n\
		   \" (\" + GetValue(in_obj+ \".kine.local.rotx\") + \n\
		   \" ,\" + GetValue(in_obj+ \".kine.local.roty\") + \n\
		   \" ,\" + GetValue(in_obj+ \".kine.local.rotz\") + \")\");\n\
	LogMessage(\"Neutral Position:\" + \n\
		   \" (\" + GetValue(in_obj+ \".kine.local.nposx\") + \n\
		   \" ,\" + GetValue(in_obj+ \".kine.local.nposy\") + \n\
		   \" ,\" + GetValue(in_obj+ \".kine.local.nposz\") + \")\");\n\
	LogMessage(\"Neutral Rotation:\" + \n\
		   \" (\" + GetValue(in_obj+ \".kine.local.nrotx\") + \n\
		   \" ,\" + GetValue(in_obj+ \".kine.local.nroty\") + \n\
		   \" ,\" + GetValue(in_obj+ \".kine.local.nrotz\") + \")\");\n\
	LogMessage (\"--------------------------\");\n\
}\n\
//\n\
// Output from this script:\n\
//\n\
//INFO : \"Original\"\n\
//INFO : \"Local Position: (1 ,2 ,3)\"\n\
//INFO : \"Local Rotation: (10 ,20 ,30)\"\n\
//INFO : \"Neutral Position: (0 ,0 ,0)\"\n\
//INFO : \"Neutral Rotation: (0 ,0 ,0)\"\n\
//INFO : \"--------------------------\"\n\
//INFO : \"After setting neutral pose\"\n\
//INFO : \"Local Position: (0 ,0 ,0)\"\n\
//INFO : \"Local Rotation: (0 ,0 ,0)\"\n\
//INFO : \"Neutral Position: (1 ,2 ,3)\"\n\
//INFO : \"Neutral Rotation: (10 ,20 ,30)\"\n\
//INFO : \"--------------------------\"\n\
//INFO : \"After resetting neutral pose\"\n\
//INFO : \"Local Position: (1 ,2 ,3)\"\n\
//INFO : \"Local Rotation: (10 ,20 ,30)\"\n\
//INFO : \"Neutral Position: (0 ,0 ,0)\"\n\
//INFO : \"Neutral Rotation: (0 ,0 ,0)\"\n\
//INFO : \"--------------------------\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/ResetTransform.html\">ResetTransform</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";