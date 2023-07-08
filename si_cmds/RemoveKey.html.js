var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>RemoveKey</title>\n\
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
            <h1>RemoveKey</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">RemoveKey</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Removes key frames from parameters at a given frame. This is the scripting\n\
equivalent of selecting Remove Key from the animation pop-up menu (or \n\
pressing Shift+K with the default keyboard layout).<br /><br />\n\
Note: If any of the keys cannot be removed the command raises an siErrCancelled \n\
error; see <a href=\"#!/url=./si_om/siErrorValueEnum.html\">siErrorValueEnum</a> for details. To avoid an error wrap\n\
the call to RemoveKey with the \'On Error Resume Next...On Error Goto 0\' statements\n\
in VBScript or the \'try()...catch(e)\' construction in JScript.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>RemoveKey( [InputObjs], [Time], [Tolerance], [Layer] );</pre>		</td>	</tr>\n\
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
<a href=\"#!/url=./files/listexpr.htm\">List</a> of animatable parameters (for example \"cone*/kine.local.pos\"). 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Currently selected and marked parameters			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Time		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 Key frames are removed at this frame. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current frame			</p>\n\
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
					<td class=\"name\">> 0					</td>\n\
					<td>Remove all keys between ( keyframe - tolerance and keyframe + tolerance )					</td>\n\
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
 Animation layer to remove keys from 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current animation layer (-1)			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' This example sets up some animation on the X position of a sphere, moves to the next key frame,\n\
\' prints out the key information for this parameter, removes the next key and prints out the \n\
\' key information again.\n\
\'\n\
\' Set up an object to animate\n\
set oGlobe = CreatePrim( \"Sphere\", \"NurbsSurface\", \"MySphere\" )\n\
\' Set the maximum frame number to 40\n\
SetValue \"PlayControl.Out\", 40\n\
\' Set some keys on XPos at various frames\n\
SaveKey oGlobe &amp; \".kine.local.posx\", 1, -9.0\n\
SaveKey oGlobe &amp; \".kine.local.posx\", 10, 3.0\n\
SaveKey oGlobe &amp; \".kine.local.posx\", 30,-3.0\n\
SaveKey oGlobe &amp; \".kine.local.posx\", 40, 9.0\n\
\' Return to frame 1\n\
SetValue \"PlayControl.Current\", 1\n\
\' Goto key at frame 10\n\
NextKey oGlobe &amp; \"/kine.local.pos\"\n\
\' Print out key info for the globe\'s position in X before\n\
\' removing the next key\n\
WhereAmI oGlobe\n\
\' Remove key at frame 30 (next key)\n\
if RemoveNextKey( oGlobe &amp; \"/kine.local.pos\" ) then\n\
	LogMessage \"Successfully removed the key.\"\n\
else\n\
	LogMessage \"This is the last key.\"\n\
end if\n\
\' Print out key info for the globe\'s position in X after\n\
\' removing the next key\n\
WhereAmI oGlobe\n\
\' Goto NextKey (at frame 40 now)\n\
NextKey ( oGlobe &amp; \"/kine.local.pos\" )\n\
\' This function removes the next key (provided that there is a next key to remove)\n\
\' and returns a boolean value indicating whether it could remove the key or not.\n\
function RemoveNextKey ( in_parameter )\n\
	\' Check if there is another key (if there is no next key, NextKey returns \"1.#INF\")\n\
	if ( NextKey( in_parameter ) &lt;&gt; \"1.#INF\" ) then\n\
		RemoveKey in_parameter\n\
		RemoveNextKey = true\n\
		exit function\n\
	end if\n\
	RemoveNextKey = false\n\
end function \n\
\' This subroutine prints out the total number of keys on the object, and then prints\n\
\' the frame number and value for each key in the collection.\n\
sub WhereAmI( in_object )\n\
	if TypeName( in_object ) &lt;&gt; \"Nothing\" then\n\
		\' Get the fcurve object that is attached to the XPos parameter\n\
		set oAnimationFC = in_object.posx.Source\n\
		\' From the fcurve object you can get the list of keys\n\
		set oFCKeys = oAnimationFC.Keys\n\
		\' Make sure there are some keys on the parameter\n\
		if oFCKeys.Count &gt; 0 then\n\
			\' Print the total number of keys now present on this parameter\n\
			LogMessage \"Number of keys on the \" &amp; in_object &amp; \" object: \" &amp; oFCKeys.Count\n\
			\' Loop through the collection of keys, printing out the key index &amp; its frame number\n\
			for each k in oFCKeys\n\
				LogMessage \"Key [\" &amp; k.Index &amp; \"] is set on Frame[\" &amp; k.Time &amp; \"] with a value of \" &amp; k.Value \n\
			next\n\
		end if\n\
	end if\n\
end sub\n\
\n\
\' Output of above script:\n\
\'...before key was removed\n\
\'INFO : \"Number of keys on the MySphere object: 4\"\n\
\'INFO : \"Key [0] is set on Frame[1] with a value of -9\"\n\
\'INFO : \"Key [1] is set on Frame[10] with a value of 3\"\n\
\'INFO : \"Key [2] is set on Frame[30] with a value of -3\"\n\
\'INFO : \"Key [3] is set on Frame[40] with a value of 9\"\n\
\'\n\
\'INFO : \"Successfully removed the key.\"\n\
\'\n\
\'...after key was removed\n\
\'INFO : \"Number of keys on the MySphere object: 3\"\n\
\'INFO : \"Key [0] is set on Frame[1] with a value of -9\"\n\
\'INFO : \"Key [1] is set on Frame[10] with a value of 3\"\n\
\'INFO : \"Key [2] is set on Frame[40] with a value of 9\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/RemoveKeyOnKeyable.html\">RemoveKeyOnKeyable</a> <a href=\"#!/url=./si_cmds/RemoveKeyOnMarkedKeyable.html\">RemoveKeyOnMarkedKeyable</a> <a href=\"#!/url=./si_cmds/AddFCurve.html\">AddFCurve</a> <a href=\"#!/url=./si_cmds/RemoveAnimation.html\">RemoveAnimation</a> <a href=\"#!/url=./si_cmds/RemoveAllAnimation.html\">RemoveAllAnimation</a> <a href=\"#!/url=./si_cmds/SaveKey.html\">SaveKey</a> <a href=\"#!/url=./si_cmds/PrevKey.html\">PrevKey</a> <a href=\"#!/url=./si_cmds/NextKey.html\">NextKey</a> <a href=\"#!/url=./si_cmds/FirstKey.html\">FirstKey</a> <a href=\"#!/url=./si_cmds/LastKey.html\">LastKey</a> <a href=\"#!/url=./si_om/FCurve.RemoveKey.html\">FCurve.RemoveKey</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";