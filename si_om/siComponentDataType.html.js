var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siComponentDataType</title>\n\
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
            <h1>siComponentDataType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siComponentDataType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>Specifies the type of component data (vector3, boolean, color, etc.) on an <a href=\"#!/url=./si_om/ICEAttribute.html\">ICEAttribute</a>.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siComponentDataType.siComponentDataTypeBool                                 // 1\n\
siComponentDataType.siComponentDataTypeLong                                 // 2\n\
siComponentDataType.siComponentDataTypeFloat                                // 4\n\
siComponentDataType.siComponentDataTypeVector2                              // 8\n\
siComponentDataType.siComponentDataTypeVector3                              // 16\n\
siComponentDataType.siComponentDataTypeVector4                              // 32\n\
siComponentDataType.siComponentDataTypeQuaternion                           // 64\n\
siComponentDataType.siComponentDataTypeMatrix33                             // 128\n\
siComponentDataType.siComponentDataTypeMatrix44                             // 256\n\
siComponentDataType.siComponentDataTypeColor4                               // 512\n\
siComponentDataType.siComponentDataTypeRotation3                            // 16384\n\
siComponentDataType.siComponentDataTypeShape                                // 32768\n\
siComponentDataType.siComponentDataTypeIcon                                 // 131072</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeBool\"> </a>siComponentDataTypeBool		</td>\n\
		<td class=\"example\">0x00000001		</td>\n\
		<td>\n\
A boolean		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeLong\"> </a>siComponentDataTypeLong		</td>\n\
		<td class=\"example\">0x00000002		</td>\n\
		<td>\n\
A long integer		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeFloat\"> </a>siComponentDataTypeFloat		</td>\n\
		<td class=\"example\">0x00000004		</td>\n\
		<td>\n\
A floating point		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeVector2\"> </a>siComponentDataTypeVector2		</td>\n\
		<td class=\"example\">0x00000008		</td>\n\
		<td>\n\
A 2-point vector		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeVector3\"> </a>siComponentDataTypeVector3		</td>\n\
		<td class=\"example\">0x00000010		</td>\n\
		<td>\n\
A 3-point vector		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeVector4\"> </a>siComponentDataTypeVector4		</td>\n\
		<td class=\"example\">0x00000020		</td>\n\
		<td>\n\
A 4-point vector		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeQuaternion\"> </a>siComponentDataTypeQuaternion		</td>\n\
		<td class=\"example\">0x00000040		</td>\n\
		<td>\n\
A quaternion		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeMatrix33\"> </a>siComponentDataTypeMatrix33		</td>\n\
		<td class=\"example\">0x00000080		</td>\n\
		<td>\n\
A 3x3 matrix		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeMatrix44\"> </a>siComponentDataTypeMatrix44		</td>\n\
		<td class=\"example\">0x00000100		</td>\n\
		<td>\n\
A 4x4 matrix		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeColor4\"> </a>siComponentDataTypeColor4		</td>\n\
		<td class=\"example\">0x00000200		</td>\n\
		<td>\n\
An RGBA color		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeRotation3\"> </a>siComponentDataTypeRotation3		</td>\n\
		<td class=\"example\">0x00004000		</td>\n\
		<td>\n\
A 3-component rotation		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeShape\"> </a>siComponentDataTypeShape		</td>\n\
		<td class=\"example\">0x00008000		</td>\n\
		<td>\n\
Shape		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeString\"> </a>siComponentDataTypeString		</td>\n\
		<td class=\"example\">0x00020000		</td>\n\
		<td>\n\
String		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeIcon\"> </a>siComponentDataTypeIcon		</td>\n\
		<td class=\"example\">0x00040000		</td>\n\
		<td>\n\
Icon		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeTopo\"> </a>siComponentDataTypeTopo		</td>\n\
		<td class=\"example\">0x00080000		</td>\n\
		<td>\n\
Topo		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siComponentDataTypeNone\"> </a>siComponentDataTypeNone		</td>\n\
		<td class=\"example\">0x00000000		</td>\n\
		<td>\n\
None		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddAttributeToSetDataICENode.html\">AddAttributeToSetDataICENode</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataType</a> <a href=\"#!/url=./si_om/siComponentDataStructure.html\">siComponentDataStructure</a> <a href=\"#!/url=./si_om/siComponentDataContext.html\">siComponentDataContext</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";