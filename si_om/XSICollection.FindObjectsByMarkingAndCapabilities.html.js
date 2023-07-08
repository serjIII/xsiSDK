var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSICollection.FindObjectsByMarkingAndCapabilities</title>\n\
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
            <h1>XSICollection.FindObjectsByMarkingAndCapabilities</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>.FindObjectsByMarkingAndCapabilities</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the list of <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> objects that match the input\n\
criteria (marked parameter list and/or capabilities).\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CXSICollection XSICollection.FindObjectsByMarkingAndCapabilities( Object in_marking, Int32 in_Caps );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSICollection.FindObjectsByMarkingAndCapabilities( [Marking], [Caps] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Marking		</td>\n\
		<td><a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a>, <a href=\"#!/url=./files/Array.htm\">Array</a> or <a href=\"#!/url=./files/objectexpr.htm\">marked parameters</a>		</td>\n\
		<td>\n\
The list of marked parameters to find.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
matches all			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Caps		</td>\n\
		<td><a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a>		</td>\n\
		<td>\n\
The parameter capabilities <a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a> to match			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0 (don\'t consider capabilities)			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
This example demonstrates how to use the FindObjectsByMarkingAndCapabilities method\n\
using several different matching criteria.\n\
*/\n\
NewScene( null, false );\n\
GetPrim( \"Null\" );\n\
// Collection object\n\
var collection = XSIFactory.CreateActiveXObject( \"XSI.Collection\" );\n\
// If you want to filter selection\n\
collection.AddItems( Selection );\n\
checkContents( \"Selection\", collection );\n\
// Find all the keyable parameters (using no marking string)\n\
// You can just omit the optional marking parameter\n\
var subset = collection.FindObjectsByMarkingAndCapabilities( null, siKeyable );\n\
checkContents( \"Keyable (no marking)\", subset );\n\
// Find all the keyable parameters (using no marking string)\n\
// Or you can use an empty marking string\n\
subset = collection.FindObjectsByMarkingAndCapabilities( \"\", siKeyable );\n\
checkContents( \"Keyable (empty marking)\", subset );\n\
// Find all the \'keypanel\' (siKeyable Or siNonKeyableVisible) parameters (using no marking string)\n\
subset = collection.FindObjectsByMarkingAndCapabilities( null, (siKeyable || siNonKeyableVisible) );\n\
checkContents( \"Keypanel\", subset );\n\
// Find all the keyable kinematics local posx parameters\n\
subset = collection.FindObjectsByMarkingAndCapabilities( \"kine.posx\", siKeyable );\n\
checkContents( \"Keyable Local PosX (kine.posx)\", subset );\n\
subset = collection.FindObjectsByMarkingAndCapabilities( \"kine.local.pos.posx\", siKeyable );\n\
checkContents( \"Keyable Local PosX (kine.local.pos.posx)\", subset );\n\
// Find all the marked keyable parameters\n\
// Here we explicitly set the marking\n\
SetMarking( \"kine.local.pos\" );\n\
var markings = GetMarking().toArray();		// GetMarking returns a SAFEARRAY\n\
subset = collection.FindObjectsByMarkingAndCapabilities( markings.join(), siKeyable );\n\
checkContents( \"Marked Keyable\", subset );\n\
// Find all the kinematics local posx parameters (using no capabilities)\n\
subset = collection.FindObjectsByMarkingAndCapabilities( \"kine.posx\" );\n\
checkContents( \"Local PosX (no caps)\", subset );\n\
// Find all the animatable parameters (using no marking string)\n\
subset = collection.FindObjectsByMarkingAndCapabilities( null, siAnimatable );\n\
checkContents( \"Animatable (no marking)\", subset );\n\
// Find all the readonly parameters (using no marking string)\n\
subset = collection.FindObjectsByMarkingAndCapabilities( null, siReadOnly );\n\
checkContents( \"Read-Only (no marking)\", subset );\n\
// Convenience function to log information about the collection\n\
function checkContents( in_name, in_coll )\n\
{\n\
if ( in_coll.Count &gt; 0 ) {\n\
LogMessage( in_name + \" (\" + in_coll.Count + \") = \" + in_coll.GetAsText() );\n\
} else {\n\
LogMessage( in_name + \" is empty\" );\n\
}\n\
LogMessage( \"--------------------------------------\" );\n\
}\n\
//--------------------------------------------------\n\
// Output of above script:\n\
//INFO : Selection (1) = null\n\
//INFO : --------------------------------------\n\
//INFO : Keyable (no marking) (9) = null.kine.local.posx,null.kine.local.posy,null.kine.local.posz,null.kine.local.rotx,null.kine.local.roty,null.kine.local.rotz,null.kine.local.sclx,null.kine.local.scly,null.kine.local.sclz\n\
//INFO : --------------------------------------\n\
//INFO : Keyable (empty marking) (9) = null.kine.local.posx,null.kine.local.posy,null.kine.local.posz,null.kine.local.rotx,null.kine.local.roty,null.kine.local.rotz,null.kine.local.sclx,null.kine.local.scly,null.kine.local.sclz\n\
//INFO : --------------------------------------\n\
//INFO : Keypanel (9) = null.kine.local.posx,null.kine.local.posy,null.kine.local.posz,null.kine.local.rotx,null.kine.local.roty,null.kine.local.rotz,null.kine.local.sclx,null.kine.local.scly,null.kine.local.sclz\n\
//INFO : --------------------------------------\n\
//INFO : Keyable Local PosX (kine.posx) (1) = null.kine.local.posx\n\
//INFO : --------------------------------------\n\
//INFO : Keyable Local PosX (kine.local.pos.posx) (1) = null.kine.local.posx\n\
//INFO : --------------------------------------\n\
//INFO : Marked Keyable (3) = null.kine.local.posx,null.kine.local.posy,null.kine.local.posz\n\
//INFO : --------------------------------------\n\
//INFO : Local PosX (no caps) (1) = null.kine.local.posx\n\
//INFO : --------------------------------------\n\
//INFO : Animatable (no marking) (97) = null.null.size,null.null.primary_icon,null.null.shadow_icon,null.null.shadow_offsetX,null.null.shadow_offsetY,null.null.shadow_offsetZ,null.null.shadow_scaleX,null.null.shadow_scaleY,null.null.shadow_scaleZ,null.null.R,null.null.G,null.null.B,null.kine.global.posx,null.kine.global.posy,null.kine.global.posz,null.kine.global.rotx,null.kine.global.roty,null.kine.global.rotz,null.kine.global.sclx,null.kine.global.scly,null.kine.global.sclz,null.kine.global.sclorix,null.kine.global.scloriy,null.kine.global.scloriz,null.kine.local.blendweight,null.kine.local.active,null.kine.local.posx,null.kine.local.posy,null.kine.local.posz,null.kine.local.rotx,null.kine.local.roty,null.kine.local.rotz,null.kine.local.sclx,null.kine.local.scly,null.kine.local.sclz,null.kine.local.sclorix,null.kine.local.scloriy,null.kine.local.scloriz,null.kine.local.cnsscl,null.kine.local.cnsori,null.kine.local.cnspos,null.kine.local.rotorder,null.kine.local.pivotactive,null.kine.local.pposx,null.kine.local.pposy,null.kine.local.pposz,null.kine.local.protx,null.kine.local.proty,null.kine.local.protz,null.kine.local.psclx,null.kine.local.pscly,null.kine.local.psclz,null.kine.local.pivotcompactive,null.kine.local.pcposx,null.kine.local.pcposy,null.kine.local.pcposz,null.kine.local.pcrotx,null.kine.local.pcroty,null.kine.local.pcrotz,null.kine.local.pcsclx,null.kine.local.pcscly,null.kine.local.pcsclz,null.kine.local.nposx,null.kine.local.nposy,null.kine.local.nposz,null.kine.local.nrotx,null.kine.local.nroty,null.kine.local.nrotz,null.kine.local.nsclx,null.kine.local.nscly,null.kine.local.nsclz,null.kine.local.nsclorix,null.kine.local.nscloriy,null.kine.local.nscloriz,null.visibility.viewvis,null.visibility.rendvis,null.visibility.selectability,null.visibility.hidemaster,null.visibility.primray,null.visibility.scndray,null.visibility.shdwrecv,null.visibility.shdwcast,null.visibility.reflrecv,null.visibility.reflcast,null.visibility.refrrecv,null.visibility.refrcast,null.visibility.trnsrecv,null.visibility.trnscast,null.visibility.fgrecv,null.visibility.fgcast,null.visibility.fgvis,null.visibility.globrecv,null.visibility.globcast,null.visibility.globvis,null.visibility.causrecv,null.visibility.causcast,null.visibility.causvis\n\
//INFO : --------------------------------------\n\
//INFO : Read-Only (no marking) (7) = null.kine.global.velaccactive,null.kine.global.linaccx,null.kine.global.linaccy,null.kine.global.linaccz,null.kine.global.angaccx,null.kine.global.angaccy,null.kine.global.angaccz\n\
//INFO : --------------------------------------</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";