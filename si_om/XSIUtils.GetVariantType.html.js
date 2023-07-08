var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIUtils.GetVariantType</title>\n\
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
            <h1>XSIUtils.GetVariantType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a>.GetVariantType</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v5.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the precise variant data type of the specified value represented by a <a href=\"#!/url=./files/Long.htm\">Long</a> corresponding to\n\
one of the win32 Variant types (most of which are covered in the Softimage <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a> enum).\n\
This method is for advanced script writers who require more detailed information about the internal representation \n\
of a particular variable or value.<br /><br />\n\
In normal scripting the exact type of a variable is not important. For example the string \"14\" can be used in much \n\
the same way as the integer 14 or the double 14.0.  In fact, JScript lumps all numeric types into a single umbrella \n\
term \"number\".<br /><br />\n\
All objects, including Softimage Object Model references, will return siDispatch.  Use methods like\n\
<a href=\"#!/url=./si_om/Application.ClassName.html\">Application.ClassName</a>, <a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">SIObject.IsClassOf</a> or <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> \n\
to get more information about the specific type of object.<br /><br />\n\
Internally all scripting variables are represented using the <a href=\"#!/url=./files/Variant.htm\">Variant</a> structure. This method returns \n\
the value of the \"vt\" member of that structure.  For more details please refer to the win32 documentation of the \n\
Variant structure.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>Int32 XSIUtils.GetVariantType( Object in_value );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = XSIUtils.GetVariantType( Value );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>One of the values of <a href=\"#!/url=./si_om/siVariantType.html\">siVariantType</a> as a <a href=\"#!/url=./files/Long.htm\">Long</a></p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/Variant.htm\">Variant</a>		</td>\n\
		<td>\n\
A scripting variable that needs testing		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This example demonstrates the difference between XSIUtils.GetVariantType\n\
	and the JScript typeof() function.\n\
*/\n\
//INFO : typeof: number VariantType: siInt4\n\
TestJScriptVariable( 49 ) ;\n\
//INFO : typeof: number VariantType: siDouble\n\
TestJScriptVariable( 49.1 ) ;\n\
//INFO : typeof: boolean VariantType: siBool\n\
TestJScriptVariable( true ) ;\n\
//INFO : typeof: string VariantType: siString\n\
TestJScriptVariable( \"hello\" ) ;\n\
//INFO : typeof: undefined VariantType: siEmpty\n\
TestJScriptVariable( undefined ) ;\n\
//INFO : typeof: object VariantType: VT_NULL\n\
TestJScriptVariable( null ) ;\n\
// All Softimage objects show up as siDispatch\n\
//INFO : typeof: object VariantType: siDispatch\n\
TestJScriptVariable( ActiveSceneRoot ) ;\n\
// So do these standard Automation objects\n\
//INFO : typeof: object VariantType: siDispatch\n\
TestJScriptVariable( new ActiveXObject( \"Scripting.FileSystemObject\" )) ;\n\
// A JScript array also shows up as siDispatch\n\
//INFO : typeof: object VariantType: siDispatch\n\
TestJScriptVariable( new Array( \"1\",\"2\",\"3\" )) ;\n\
// A VBScript error shows up differently than a JScript Array\n\
//INFO : typeof: unknown VariantType: VBScript Array (Safearray)\n\
TestJScriptVariable( Application.Workgroups )\n\
// Even code shows up as an object in JScript\n\
//INFO : typeof: function VariantType: siDispatch\n\
TestJScriptVariable( TestJScriptVariable ) ;\n\
function TestJScriptVariable( in_val )\n\
{\n\
	Application.LogMessage( \"typeof: \" + typeof(in_val) + \" VariantType: \" \n\
		+ siVariantTypeToStr( XSIUtils.GetVariantType(in_val) ) );	\n\
}\n\
function siVariantTypeToStr( in_vt )\n\
{\n\
	//Demonstrate just the most common\n\
	switch ( in_vt ) {\n\
		case siEmpty : \n\
			return \"siEmpty\";\n\
		case 1 :\n\
			// 1 == VT_NULL, used by jscript \"null\"\n\
			return \"VT_NULL\";\n\
		case siInt2 :\n\
			return \"siInt2\";\n\
		case siInt4 :\n\
			return \"siInt4\";\n\
		case siFloat :\n\
			return \"siFloat\";\n\
		case siDouble :\n\
			return \"siDouble\";\n\
		case siString :\n\
			return \"siString\";\n\
		case siBool :\n\
			return \"siBool\";\n\
		case siDispatch :\n\
			return \"siDispatch\";\n\
		case siUnknown :\n\
			return \"siUnknown\";\n\
		case siByte :\n\
			return \"siByte\";\n\
		case siUByte :\n\
			return \"siUByte\";\n\
		case siUInt2 :\n\
			return \"siUInt2\";\n\
		case siUInt4 :\n\
			return \"siUInt4\";\n\
		case siUByte :\n\
			return \"siUByte\";\n\
		case 8204 :\n\
			// An array of Variants\n\
			// 8204 == VT_ARRAY | VT_VARIANT\n\
			return \"VBScript Array (Safearray)\"\n\
		default :\n\
			return in_vt.toString() ; 	\n\
	}\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Application.ClassName.html\">Application.ClassName</a> <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";