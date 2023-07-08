var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Operator.ConnectToGroup</title>\n\
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
            <h1>Operator.ConnectToGroup</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Operator.html\">Operator</a>.ConnectToGroup</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Connects an object to a port group. This method is useful for dynamic operators, where optional or \n\
multi-instance connections are made after the object is already connected.\n\
<br /><br />\n\
Note: This method only works for Self-Installed Custom Operators if there is a single port inside the \n\
port group. This limitation exists because you can only pass a single object in the Object argument. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Int32 Operator.ConnectToGroup( Int32 in_group, Object in_obj );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oLong = Operator.ConnectToGroup( Group, Object );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./files/Long.htm\">Long</a> The index of new port group instance.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Group		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Which port group to connect		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Object		</td>\n\
		<td>Object		</td>\n\
		<td>\n\
\n\
		The object to be connected to the port.  For built-in <a href=\"#!/url=./si_om/Operator.html\">Operator</a>s this \n\
		object can be a <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> and Softimage will attempt to find the correct data \n\
		underneath the X3DObject to match each port inside the PortGroup.  For Self-Installed Custom \n\
		Operators this should be the specific target object for the port inside the <a href=\"#!/url=./si_om/PortGroup.html\">PortGroup</a>.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates how to connect a runtime custom operator to an object.\n\
*/\n\
NewScene( null, false );\n\
var null1 = GetPrim( \"null\" );\n\
var null2 = GetPrim( \"null\" );\n\
// Create a runtime scripted operator and turn on debugging (logs extra information)\n\
var sop = XSIFactory.CreateScriptedOp( \"myexpr\", myexpr_Update.toString(), \"JScript\" );\n\
sop.Debug = 1;\n\
// Add a portgroup to read from/write to\n\
var group1 = sop.AddPortGroup( \"MainGroup\" )\n\
// We use an IO port because we want to blend the existing\n\
// transformation rather than completely replacing it\n\
sop.AddIOPort( null1.Kinematics.Local, \"\", group1.Index );\n\
// Add a second group with an optional port\n\
var group2 = sop.AddPortGroup( \"SecondGroup\", 0, 1 )\n\
sop.AddInputPort( null2.Kinematics.Local, \"inputs\", -1, group2.Index );\n\
// Connect first group.  Operator would start functioning immediately\n\
sop.ConnectToGroup( group1.Index, null1.Kinematics.Local );\n\
// Connect to the optional port\n\
sop.ConnectToGroup( 1, null2.Kinematics.Local);\n\
// This has no effect on null1\n\
Translate( null2, 1, -1, 1 );\n\
// This changes null1 rotation as well\n\
Rotate(null2, 90, -45, 0 ) ;\n\
// This operator constrains the rotation of the connected (target) object to the\n\
// rotation of the object connected through the second portgroup.\n\
function myexpr_Update( ctx, out, inlocal1, inlocal2 )\n\
{\n\
	Application.LogMessage( \"myexpr_Update: \" + out.Name );\n\
	Application.LogMessage( \"\"+(inlocal2) );\n\
	var transfo = inlocal1.Value.Transform;\n\
	// Is there an object connected to the 2nd group?\n\
	if ( ctx.Operator.GetNumInstancesInGroup( 1 ) )\n\
	{\n\
		var inlocal2 = ctx.Operator.PortAt( 0, 1, 0 );\n\
		// Is the port connected?\n\
		if ( inlocal2.IsConnected )\n\
		{\n\
			var rot = inlocal2.Value.Transform.Rotation;\n\
			transfo.SetRotation	( rot );\n\
		}\n\
	}\n\
	out.Value.Transform = transfo;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Operator.DisconnectGroup.html\">Operator.DisconnectGroup</a> <a href=\"#!/url=./si_cmds/UpdateConnectOnOp.html\">UpdateConnectOnOp</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";