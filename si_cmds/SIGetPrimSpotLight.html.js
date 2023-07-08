var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIGetPrimSpotLight</title>\n\
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
            <h1>SIGetPrimSpotLight</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIGetPrimSpotLight</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Creates a spot light primitive.\n\
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
		<td class=\"example\"><pre>SIGetPrimSpotLight( PresetObj, [Name], [InterestName], [Parent], [3DObjSpot], [3DObjSpotInterest], [PrimObjSpot], [PrimObjSpotInterest] );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 A spot light preset (see <a href=\"#!/url=./si_cmds/LightPrimitives.html#\">Light Primitives</a>). 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">Spot					</td>\n\
					<td>The spot preset					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the light. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InterestName		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the interest. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Parent <a href=\"#!/url=./files/objectexpr.htm\">object</a> for the light. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">3DObjSpot		</td>\n\
		<td><a href=\"#!/url=./si_om/Light.html\">Light</a>		</td>\n\
		<td>\n\
 Returns the spot light object. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">3DObjSpotInterest		</td>\n\
		<td><a href=\"#!/url=./si_om/Null.html\">Null</a>		</td>\n\
		<td>\n\
 Returns the spot interest. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PrimObjSpot		</td>\n\
		<td><a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>		</td>\n\
		<td>\n\
 Returns the spot light primitive. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PrimObjSpotInterest		</td>\n\
		<td><a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>		</td>\n\
		<td>\n\
 Returns the interest primitive. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to retrieve the output arguments through \n\
	the returned ISIVTCollection, by using their name with the Value property.\n\
*/\n\
NewScene( null, false );\n\
// Get the output arguments via the ISIVTCollection\n\
var rtn = SIGetPrimSpotLight( \"Spot.Preset\", \"MySpotName\", \"MySpotInterestName\" );\n\
// With the ISIVTCollection, you can either get the items by index number using the Item\n\
// property, or by output argument name by using the Value property, which is much clearer\n\
// and faster to use\n\
var o3DObjSpot = rtn.Value(\"3DObjSpot\");\n\
var o3DObjSpotInterest = rtn.Value(\"3DObjSpotInterest\");\n\
var oPrimObjSpot = rtn.Value(\"PrimObjSpot\");\n\
var oPrimObjSpotInterest = rtn.Value(\"PrimObjSpotInterest\");\n\
// For each object, find out its name and class, if possible\n\
WhatAmI( o3DObjSpot );		//INFO : MySpotName is a Light\n\
WhatAmI( o3DObjSpotInterest );	//INFO : MySpotInterestName is a Null\n\
WhatAmI( oPrimObjSpot );		//INFO : MySpotName.light is a Primitive\n\
WhatAmI( oPrimObjSpotInterest );	//INFO : MySpotInterestName.SpotInterest is a Primitive\n\
// Convenience function\n\
function WhatAmI( in_obj ) \n\
{\n\
	// To prevent crashes, use the try...catch statement, because using ClassName \n\
	// on a simple data type (string, number, etc.) will throw an error\n\
	try {\n\
		LogMessage( in_obj + \" is a \" + ClassName(in_obj) );\n\
	} catch (e) {\n\
		LogMessage( \"input object is a \" + typeof(in_obj) );\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/GetPrimLight.html\">GetPrimLight</a> <a href=\"#!/url=./si_cmds/SIGetPrimLight.html\">SIGetPrimLight</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";