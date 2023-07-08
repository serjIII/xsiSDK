var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Operator.PortAt</title>\n\
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
            <h1>Operator.PortAt</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Operator.html\">Operator</a>.PortAt <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the specified <a href=\"#!/url=./si_om/Port.html\">Port</a> object.\n\
<br /><br />\n\
Note: Regardless of the order that ports are added to a Group, input ports are always indexed \n\
before output ports. For example, if a custom operator is built with two output ports A and B \n\
and two input ports C and D then port 0 will be C, port 1 will be D, port 2 will be A and port 3 \n\
will be B.\n\
<br /><br />Note: This method could return an invalid object in python, use <a href=\"#!/url=./si_om/Operator.GetPortAt.html\">Operator.GetPortAt</a> instead.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Port Operator.PortAt( Int32 in_lPortIndex, Int32 in_lPortGroupIndex, Int32 in_lPortGroupInstance );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = Operator.PortAt( PortIndex, PortGroupIndex, PortGroupInstance );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p><a href=\"#!/url=./si_om/Port.html\">Port</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PortIndex		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Port index.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PortGroupIndex		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Port group index.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PortGroupInstance		</td>\n\
		<td><a href=\"#!/url=./files/Long.htm\">Long</a>		</td>\n\
		<td>\n\
Port group instance index.		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example illustrates how to generate a mesh by using the loft operator and\n\
	a number of input curves. The code also illustrates how to traverse the operator\'s\n\
	port group, port group instances and ports and logs the name of the port, its type\n\
	and the full path name of the object connected to the port.\n\
*/\n\
NewScene( null, false );\n\
var arc = Application.ActiveSceneRoot.AddGeometry( \"Arc\", \"NurbsCurve\" );\n\
// Duplicate arc 4 times and translate in y\n\
var args = new Array(19);\n\
args[0] = arc;                                       // source object\n\
args[1] = 4;                                         // number of copies\n\
args[9] = siApplyRepeatXForm;                        // Xform\n\
args[18] = 1;                                        // Ty\n\
var objs = Application.ExecuteScriptCommand( \"Duplicate\", args );\n\
// Create array containing arc and duplicates\n\
var aobjs = new Array(5)\n\
aobjs[0] = arc;\n\
for ( var i = 0; i &lt; objs.count; i++ ) aobjs[i+1] = objs(i);\n\
// Apply loft operator\n\
var op = ApplyOp( \"Loft\", aobjs )(0);\n\
// Traverse port group, instances and ports and log port connections\n\
// For each port group ...\n\
for ( var idxGroup = 0; idxGroup &lt; op.GetNumPortGroups(); idxGroup++ )\n\
{\n\
	// For each instance in a port group ...\n\
	for ( var idxInstance = 0; idxInstance &lt; op.GetNumInstancesInGroup( idxGroup ); idxInstance++ )\n\
	{\n\
		// For each port in a  port group instance ...\n\
		for ( var idxPort = 0; idxPort &lt; op.GetNumPortsInGroup( idxGroup ); idxPort++ )\n\
		{\n\
			// Get a specific port\n\
			var port = op.PortAt( idxPort, idxGroup, idxInstance );\n\
			// If the port is an input port ...\n\
			if ( port.PortType == siPortInput )\n\
				porttypestr = \"input\"\n\
			else if ( port.PortType == siPortOutput )\n\
				porttypestr = \"output\"\n\
			else\n\
				porttypestr = \"error\"\n\
			var target = port.target2;\n\
			// ... and the connected type is an object connection\n\
			if ( typeof(target) == \"object\" )\n\
			{\n\
				Application.LogMessage( op.Name + \" group:\" + port.groupindex + \" \" + \" instance:\" \n\
								+ port.GroupInstance + \" \" + porttypestr + \"port:\" \n\
								+ port.Index + \":\" + target.FullName );\n\
			}\n\
		} \n\
	}\n\
}\n\
//INFO : \"Loft group:0  instance:0 inputport:0:arc.crvlist\"\n\
//INFO : \"Loft group:0  instance:0 inputport:1:arc.kine.global\"\n\
//INFO : \"Loft group:0  instance:1 inputport:0:arc1.crvlist\"\n\
//INFO : \"Loft group:0  instance:1 inputport:1:arc1.kine.global\"\n\
//INFO : \"Loft group:0  instance:2 inputport:0:arc2.crvlist\"\n\
//INFO : \"Loft group:0  instance:2 inputport:1:arc2.kine.global\"\n\
//INFO : \"Loft group:0  instance:3 inputport:0:arc3.crvlist\"\n\
//INFO : \"Loft group:0  instance:3 inputport:1:arc3.kine.global\"\n\
//INFO : \"Loft group:0  instance:4 inputport:0:arc4.crvlist\"\n\
//INFO : \"Loft group:0  instance:4 inputport:1:arc4.kine.global\"\n\
//INFO : \"Loft group:1  instance:0 inputport:0:surfmsh.kine.global\"\n\
//INFO : \"Loft group:1  instance:0 outputport:1:surfmsh.surfmsh\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Operator.Port.html\">Operator.Port</a> <a href=\"#!/url=./si_om/Port.Index.html\">Port.Index</a> <a href=\"#!/url=./si_om/Port.GroupIndex.html\">Port.GroupIndex</a> <a href=\"#!/url=./si_om/Port.GroupInstance.html\">Port.GroupInstance</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";