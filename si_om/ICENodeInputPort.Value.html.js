var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ICENodeInputPort.Value</title>\n\
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
            <h1>ICENodeInputPort.Value</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/ICENodeInputPort.html\">ICENodeInputPort</a>.Value</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the port value as a <a href=\"#!/url=./files/Variant.htm\">Variant</a> at the current time frame. The type of the value depends on \n\
<a href=\"#!/url=./si_om/ICENodePort.DataType.html\">ICENodePort.DataType</a>. The value stored in this port is only accessible when the port is \n\
not connected. If the port is connected, it returns an Empty variant.\n\
<br /><br /><span class=\"b\">Note:</span> This property only returns values for simple types such as float, integer and boolean. Returning other value \n\
types is not yet supported. If the port is unable to retrieve the value, it returns an Empty variant. \n\
<br /><br /><span class=\"b\">Tip:</span> Values for non-supported types can be accessed with <a href=\"#!/url=./si_om/ICENodePort.Parameters.html\">ICENodePort.Parameters</a>. \n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = ICENodeInputPort.Value;\n\
// set accessor\n\
ICENodeInputPort.Value = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>Python Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"python\">#\n\
# This example demonstrates how to get and set a port value on an InitData node\n\
#\n\
import win32com.client\n\
from win32com.client import constants\n\
xsi = Application\n\
xsi.NewScene(\"\", 0)\n\
xsi.CreatePrim(\"Grid\", \"MeshSurface\", \"\", \"\")\n\
xsi.ApplyOp(\"ICETree\", \"grid\", \"siNode\", \"siPersistentOperation\", \"\", 0)\n\
xsi.AddICENode(\"InitializeNode\", \"grid.polymsh.ICETree\")\n\
xsi.SetValue(\"grid.polymsh.ICETree.InitDataNode.PredefinedAttributeName\", \"EdgeLength\", \"\")\n\
xsi.AddAttributeToSetDataICENode(\"grid.polymsh.ICETree.InitDataNode\", \"EdgeLength\", constants.siComponentDataTypeFloat, constants.siComponentDataContextComponent1D, constants.siComponentDataStructureSingle )\n\
xsi.SelectObj(\"grid.polymsh.ICETree.InitDataNode\", \"\", \"\")\n\
initDataNode = xsi.Selection(0)\n\
nodeport = initDataNode.InputPorts(\"EdgeLength\")\n\
nodeport.Value = 5.0\n\
xsi.LogMessage( \"EdgeLength value: \" + str(nodeport.Value) )\n\
# Expected results:\n\
# INFO : EdgeLength value: 5.0</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ICENodeInputPort.PutValueAtFrame.html\">ICENodeInputPort.PutValueAtFrame</a> <a href=\"#!/url=./si_om/ICENodeInputPort.GetValueAtFrame.html\">ICENodeInputPort.GetValueAtFrame</a> <a href=\"#!/url=./si_cmds/AddAttributeToSetDataICENode.html\">AddAttributeToSetDataICENode</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";