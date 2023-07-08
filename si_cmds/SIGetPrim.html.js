var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIGetPrim</title>\n\
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
            <h1>SIGetPrim</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIGetPrim</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p />\n\
Creates raw primitives.  For geometrical objects it creates implicit geometrical objects. \n\
It is also possible to create other types of primitives: cameras, lights, nulls, control objects, lattices, geometry shaders.\n\
The created primitive will not be selected. <br /><br />\n\
SIGetPrim creates a primitive.  The name SIGetPrim comes from the Softimage menu Get-Primitive-<primitivetype>.<br /><br />\n\
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
<p /></primitivetype></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIGetPrim( PresetObj, [Name], [Parent], [AddToScene], [Value], [Primitive] );</pre>		</td>	</tr>\n\
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
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (see <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
\n\
		The name of a primitive preset. See \n\
		<a href=\"#!/url=./si_cmds/ImplicitPrimitives.html#\">Implicit Primitives</a> and \n\
		<a href=\"#!/url=./si_cmds/GeometryPrimitives.html#\">Geometry Primitives</a>\n\
		for a list of supported preset names.\n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of the new primitive. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Parent		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 \n\
		Name of an existing <a href=\"#!/url=./files/objectexpr.htm\">object</a> \n\
		to use as the parent of the new primitive. \n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">AddToScene		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to create the object in the scene. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>		</td>\n\
		<td>\n\
 Returns the 3D object created for the primitive. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Primitive		</td>\n\
		<td><a href=\"#!/url=./si_om/Primitive.html\">Primitive</a>		</td>\n\
		<td>\n\
 Returns the implicit primitive object. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This examples shows how to create an implicit primitive\n\
\' and convert it to a NURBS surface.\n\
newscene\n\
dim MyGrid, MyCamera\n\
\'Create implicit primitive.  It will be named and nested under the scene root.  \n\
\'We consult the returned list instead of the output parameters because \n\
\'it is better supported by other scripting languages.\n\
set MyGrid = SIGetPrim( \"Grid\",  \"aGrid\", , True)\n\
\'Logged information:\n\
\'INFO : \"ISIVTCollection contains 2 elements.\"\n\
\'INFO : \"First object is: Primitive\"\n\
\'INFO : \"Second object is: X3DObject\"\n\
logmessage typename(MyGrid) &amp; \" contains \" &amp; MyGrid.count &amp; \" elements.\"\n\
logmessage \"First object is: \" &amp; typename( MyGrid(0) )\n\
logmessage \"Second object is: \" &amp; typename( MyGrid(1) )\n\
\' It is possible to convert the implicit to a Nurbs Surface\n\
SIConvert \"NurbsSurface\", MyGrid(1)\n\
\'Create a camera without an interest. It uses default values.\n\
set MyCamera = SIGetPrim( \"Camera\" )\n\
\'Logged information:\n\
\'INFO : \"ISIVTCollection contains 2 elements.\"\n\
\'INFO : \"First object is: Primitive\"\n\
\'INFO : \"Second object is: Camera\"\n\
logmessage typename(MyCamera) &amp; \" contains \" &amp; MyCamera.count &amp; \" elements.\"\n\
logmessage \"First object is: \" &amp; typename( MyCamera(0) )\n\
logmessage \"Second object is: \" &amp; typename( MyCamera(1) )</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/GetPrim.html\">GetPrim</a> <a href=\"#!/url=./si_cmds/CreatePrim.html\">CreatePrim</a> <a href=\"#!/url=./si_cmds/SIConvert.html\">SIConvert</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";