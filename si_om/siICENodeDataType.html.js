var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siICENodeDataType</title>\n\
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
            <h1>siICENodeDataType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siICENodeDataType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v7.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Defines the types of data that can be associated to a ICE node port connection.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siICENodeDataType.siICENodeDataBool                                         // 1\n\
siICENodeDataType.siICENodeDataLong                                         // 2\n\
siICENodeDataType.siICENodeDataFloat                                        // 4\n\
siICENodeDataType.siICENodeDataVector2                                      // 8\n\
siICENodeDataType.siICENodeDataVector3                                      // 16\n\
siICENodeDataType.siICENodeDataVector4                                      // 32\n\
siICENodeDataType.siICENodeDataQuaternion                                   // 64\n\
siICENodeDataType.siICENodeDataMatrix33                                     // 128\n\
siICENodeDataType.siICENodeDataMatrix44                                     // 256\n\
siICENodeDataType.siICENodeDataColor4                                       // 512\n\
siICENodeDataType.siICENodeDataGeometry                                     // 1024\n\
siICENodeDataType.siICENodeDataLocation                                     // 2048\n\
siICENodeDataType.siICENodeDataExecute                                      // 4096\n\
siICENodeDataType.siICENodeDataReference                                    // 8192\n\
siICENodeDataType.siICENodeDataRotation                                     // 16384\n\
siICENodeDataType.siICENodeDataShape                                        // 32768\n\
siICENodeDataType.siICENodeDataCustomType                                   // 65536\n\
siICENodeDataType.siICENodeDataString                                       // 131072\n\
siICENodeDataType.siICENodeDataIcon                                         // 262144\n\
siICENodeDataType.siICENodeDataValue                                        // 508927\n\
siICENodeDataType.siICENodeDataInterface                                    // 1024\n\
siICENodeDataType.siICENodeDataMultiComp                                    // 17400\n\
siICENodeDataType.siICENodeDataArithmeticSupport                            // 16894\n\
siICENodeDataType.siICENodeDataAny                                          // 524287\n\
siICENodeDataType.siICENodeInputDataAny                                     // 247807\n\
siICENodeDataType.siICENodeOutputDataAny                                    // 246783</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataBool\"> </a>siICENodeDataBool		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/Boolean.htm\">Boolean</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataLong\"> </a>siICENodeDataLong		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/Long.htm\">Long</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataFloat\"> </a>siICENodeDataFloat		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/Float.htm\">Float</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataVector2\"> </a>siICENodeDataVector2		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
2D vector. For the C++ API, this maps to <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector2f.html\">CVector2f</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataVector3\"> </a>siICENodeDataVector3		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
3D vector. For the C++ API, this maps to \n\
	<a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3.html\">CVector3</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector3f.html\">CVector3f</a>. For the\n\
	object model, this maps to <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataVector4\"> </a>siICENodeDataVector4		</td>\n\
		<td class=\"example\">32		</td>\n\
		<td>\n\
4D vector. For the C++ API, this maps to \n\
	<a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector4.html\">CVector4</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CVector4f.html\">CVector4f</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataQuaternion\"> </a>siICENodeDataQuaternion		</td>\n\
		<td class=\"example\">64		</td>\n\
		<td>\n\
Quaternion. For the C++ API, this maps to \n\
	<a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CQuaternion.html\">CQuaternion</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CQuaternionf.html\">CQuaternionf</a>. For the\n\
	object model, this maps to <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataMatrix33\"> </a>siICENodeDataMatrix33		</td>\n\
		<td class=\"example\">128		</td>\n\
		<td>\n\
3x3 matrix. For the C++ API, this maps to \n\
	<a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3.html\">CMatrix3</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix3f.html\">CMatrix3f</a>. For the\n\
	object model, this maps to <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataMatrix44\"> </a>siICENodeDataMatrix44		</td>\n\
		<td class=\"example\">256		</td>\n\
		<td>\n\
4x4 matrix. For the C++ API, this maps to \n\
	<a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4.html\">CMatrix4</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CMatrix4f.html\">CMatrix4f</a>. For the\n\
	object model, this maps to <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataColor4\"> </a>siICENodeDataColor4		</td>\n\
		<td class=\"example\">512		</td>\n\
		<td>\n\
RGBA color. For the C++ API, this maps to \n\
	<a href=\"#!/url=./si_cpp/structXSI_1_1CColor.html\">CColor</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CColor4f.html\">CColor4f</a>. For the\n\
	object model, this maps to <a href=\"#!/url=./si_om/Color.html\">Color</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataGeometry\"> </a>siICENodeDataGeometry		</td>\n\
		<td class=\"example\">1024		</td>\n\
		<td>\n\
Geometry. Note: this data type is not available for Custom <a href=\"#!/url=./si_om/ICENode.html\">ICENode</a>s output ports.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataLocation\"> </a>siICENodeDataLocation		</td>\n\
		<td class=\"example\">2048		</td>\n\
		<td>\n\
Data location. Note: this data type is not available for Custom <a href=\"#!/url=./si_om/ICENode.html\">ICENode</a>s.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataExecute\"> </a>siICENodeDataExecute		</td>\n\
		<td class=\"example\">4096		</td>\n\
		<td>\n\
Execution logic. Note: this data type is not available for Custom <a href=\"#!/url=./si_om/ICENode.html\">ICENode</a>s.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataReference\"> </a>siICENodeDataReference		</td>\n\
		<td class=\"example\">8192		</td>\n\
		<td>\n\
Reference. Note: this data type is not available for Custom <a href=\"#!/url=./si_om/ICENode.html\">ICENode</a>s.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataRotation\"> </a>siICENodeDataRotation		</td>\n\
		<td class=\"example\">16384		</td>\n\
		<td>\n\
Rotation. For the C++ API, this maps to \n\
	<a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CRotation.html\">CRotation</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CRotationf.html\">CRotationf</a>. For the\n\
	object model, this maps to <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataShape\"> </a>siICENodeDataShape		</td>\n\
		<td class=\"example\">32768		</td>\n\
		<td>\n\
Shape. For the C++ API, this maps to \n\
	<a href=\"#!/url=./si_cpp/classXSI_1_1MATH_1_1CShape.html\">CShape</a>. For the object model, this maps to \n\
	<a href=\"#!/url=./si_om/Shape.html\">Shape</a>.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataCustomType\"> </a>siICENodeDataCustomType		</td>\n\
		<td class=\"example\">65536		</td>\n\
		<td>\n\
Custom data type.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataValue\"> </a>siICENodeDataValue		</td>\n\
		<td class=\"example\">siICENodeDataBool | siICENodeDataLong | siICENodeDataFloat | siICENodeDataVector2 | siICENodeDataVector3 | siICENodeDataVector4 | siICENodeDataQuaternion | siICENodeDataRotation | siICENodeDataMatrix33 | siICENodeDataMatrix44 | siICENodeDataColor4 | siICENodeDataShape | siICENodeDataIcon		</td>\n\
		<td>\n\
Value (for internal use).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataString\"> </a>siICENodeDataString		</td>\n\
		<td class=\"example\">131072		</td>\n\
		<td>\n\
String type.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataIcon\"> </a>siICENodeDataIcon		</td>\n\
		<td class=\"example\">131072		</td>\n\
		<td>\n\
Icon.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataInterface\"> </a>siICENodeDataInterface		</td>\n\
		<td class=\"example\">siICENodeDataGeometry		</td>\n\
		<td>\n\
Interface (for internal use).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataMultiComp\"> </a>siICENodeDataMultiComp		</td>\n\
		<td class=\"example\">siICENodeDataVector2 | siICENodeDataVector3 | siICENodeDataVector4 | siICENodeDataQuaternion | siICENodeDataRotation | siICENodeDataMatrix33 | siICENodeDataMatrix44 | siICENodeDataColor4		</td>\n\
		<td>\n\
Multi Comp (for internal use).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataArithmeticSupport\"> </a>siICENodeDataArithmeticSupport		</td>\n\
		<td class=\"example\">siICENodeDataLong | siICENodeDataFloat | siICENodeDataVector2 | siICENodeDataVector3 | siICENodeDataVector4 | siICENodeDataQuaternion | siICENodeDataRotation | siICENodeDataMatrix33 | siICENodeDataMatrix44		</td>\n\
		<td>\n\
Arithmetic Support (for internal use).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDataAny\"> </a>siICENodeDataAny		</td>\n\
		<td class=\"example\">siICENodeDataBool | siICENodeDataLong | siICENodeDataFloat | siICENodeDataVector2 | siICENodeDataVector3 | siICENodeDataVector4 | siICENodeDataQuaternion | siICENodeDataRotation | siICENodeDataMatrix33 | siICENodeDataMatrix44 | siICENodeDataColor4 | siICENodeDataShape | siICENodeDataIcon | siICENodeDataGeometry | siICENodeDataLocation | siICENodeDataReference | siICENodeDataExecute		</td>\n\
		<td>\n\
Any supported type.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeInputDataAny\"> </a>siICENodeInputDataAny		</td>\n\
		<td class=\"example\">siICENodeDataBool | siICENodeDataLong | siICENodeDataFloat | siICENodeDataVector2 | siICENodeDataVector3 | siICENodeDataVector4 | siICENodeDataQuaternion | siICENodeDataRotation | siICENodeDataMatrix33 | siICENodeDataMatrix44 | siICENodeDataColor4 | siICENodeDataShape | siICENodeDataGeometry		</td>\n\
		<td>\n\
Any supported type by the input ports on a Custom ICE Node.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeOutputDataAny\"> </a>siICENodeOutputDataAny		</td>\n\
		<td class=\"example\">siICENodeDataBool | siICENodeDataLong | siICENodeDataFloat | siICENodeDataVector2 | siICENodeDataVector3 | siICENodeDataVector4 | siICENodeDataQuaternion | siICENodeDataRotation | siICENodeDataMatrix33 | siICENodeDataMatrix44 | siICENodeDataColor4 | siICENodeDataShape		</td>\n\
		<td>\n\
Any supported type by the output ports on a Custom ICE Node. This can be used as input port type definition.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/ICENodePort.DataType.html\">ICENodePort.DataType</a> <a href=\"#!/url=./si_om/ICEAttribute.DataType.html\">ICEAttribute.DataType</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";