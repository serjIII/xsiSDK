var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-3A0B4F25-C6C9-4667-9976-A7E4875EA1E4\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Tips and Tricks</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3A0B4F25-C6C9-4667-9976-A7E4875EA1E4\"></a></span><div class=\"head\">\n\
            <h1>Tips and Tricks</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-006F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-492EDC5B-445E-4DF8-8725-E1D2127942C9\"></a></span>Evaluation Time\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C10DF679-67B4-4CDE-B176-D499F9E56DC0\"></a></span>The operator is not necessarily being evaluated at the current <span class=\"char_link\"><a href=\"#!/url=./files/dev_PlayControl.htm\">PlayControl</a></span> position. Instead, use the time value from the context object (see <a href=\"#!/url=./si_om/OperatorContext.Time.html\">OperatorContext.Time</a> or OperatorContext::GetTime). This is most useful for simulation style operators\n\
                  where a cache might be kept for the simulation state at each frame.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0070\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-72DC90E6-8B2A-4668-AB64-58BD8380B38D\"></a></span>Optimization\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE3446BB-4B78-4BB3-979A-B67EACDE38B7\"></a></span>Here are a few tips to help you optimize your operator implementation:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBBCFB02-365E-4B02-9786-AECF5E2F29BA\"></a></span>Referring to ports and groups by index rather than string is more efficient.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-45F73957-75F0-41A8-B8EB-5D80F30B8ACE\"></a></span>Use <a href=\"#!/url=./si_om/OperatorContext.GetParameterValue.html\">OperatorContext.GetParameterValue</a> or OperatorContext::GetParameterValue to read the parameters of the operator. This\n\
                        is faster and more convenient that reading it from the custom operator.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-42C46B1F-1740-4155-BA19-F3BFCBAFE94C\"></a></span>Use <a href=\"#!/url=./si_om/OperatorContext.GetInputValue.html\">OperatorContext.GetInputValue</a> or OperatorContext::GetInputValue to easily access the data that is connected to\n\
                        the operator. If the input is a parameter this returns the actual parameter value\n\
                        (such as a number). If the input is an object (<a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Primitive.html\">Primitive</a>, <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1KinematicState.html\">KinematicState</a>, <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a> etc.) then the SDK object representing that object is returned.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-57396EC4-5BC9-44F3-92B7-9E15E37D5536\"></a></span>Use cached data to avoid redundant calculations. The cache can be stored as a global\n\
                        variable of your plug-in, or if you want separate caches for each instance of the\n\
                        operator use the user data methods on the <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1OperatorContext.html\">OperatorContext</a> object. For example, the speed of a scripted operator can sometimes be improved by\n\
                        re-using math objects (such as <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> or CMatrix3) rather than recreating them (<a href=\"#!/url=./si_om/XSIMath.CreateMatrix3.html\">XSIMath.CreateMatrix3</a> or CMatrix3()) each time <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> is called.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0071\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-95B88CBD-0C20-47B1-9375-92645532D896\"></a></span>Operator Migration\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9F56F505-9DFF-489E-ABBB-9937E203B6A7\"></a></span>If you have existing legacy or runtime operators, it is strongly recommended to port\n\
                  them to Self-Installed Custom Operators (SICO). Persisted instances of other types\n\
                  of custom operators are not affected by migration. Once the operator code has been\n\
                  ported to SICO you will need to delete and recreate any existing operators to use\n\
                  the new SICO version.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B28AB63-A5DE-4D8A-9DE8-7A2B743C38D8\"></a></span>The types of operator migration covered in this section include <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_TipsandTricks.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0072\">Runtime to SICO</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_TipsandTricks.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0074\">SPDL/Preset to SICO</a></span>.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0072\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BBE97463-9321-4DF0-95C1-7B60028EC8D0\"></a></span>Runtime to SICO\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FD05BF0-B4E3-4A7C-A3F6-3C4A9081A4BA\"></a></span>Rather than embedding scripting code into the operator, it is more efficient to set\n\
                     up a self-installed plug-in to define your operator. Here are some steps to get you\n\
                     started:\n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9B4B632A-0CBB-488E-8D28-0C69A6153AC8\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-20B01A10-70F1-4174-BB90-5507626769D6\"></a></span>If the code creating the operator is not already in a self-installed plug-in then\n\
                           put the <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> callback and other code directly into the new self-installed plug-in and add a call\n\
                           to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a> or PluginRegistrar::RegisterOperator.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-397C7A70-08E7-431E-94A6-D471319CAE2A\"></a></span>The same plug-in can contain both a command to create the operator and the operator\n\
                           itself but you can also separate these into their own individual plug-ins, and the\n\
                           command is not really mandatory.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-88D49A1B-DCF2-4564-A54D-82A0CD0889BA\"></a></span>Reconsider any global variables that were being injected into the runtime operator:\n\
                        </p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-21E7DA99-8E0E-4702-8EA7-1CE62A2223DF\"></a></span>If they are per-instance caches then they must be embedded into the user data of the\n\
                                 context object. You can store user data in the <a href=\"#!/url=./si_cmds/cb_Operator_Init.html\">Init</a> callback and release it in the <a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a> callback.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-13DB9670-033D-432A-A809-1879DB54B8B1\"></a></span>If they can be global between all instances of the operator then they can become global\n\
                                 variables of the plug-in.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA1349C3-632B-40A6-965D-5767622A6661\"></a></span>Remove any output and input port arguments from the Update method signature and rewrite\n\
                           the body of the <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> callback to retrieve these from the <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1OperatorContext.html\">OperatorContext</a> object. The way to get the actual values of the input and output ports is slightly\n\
                           different, but the actual algorithm of the operator should still work once these syntactic\n\
                           issues are fixed.\n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0073\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-37E732D1-F6C6-46FE-9737-77947E63AED4\"></a></span>Example: Converting from JScript Runtime to C++ SICO\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-97243FFD-B4BF-4534-A0A0-F2C9E90ED2AB\"></a></span>Here is the original JScript version of the runtime operator. The bolded lines highlight\n\
                        where the <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> function is getting and setting port connections:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// ...Creation Code...\n\
	var code = GeometryDeform_Update.toString();\n\
	g_sop = XSIFactory.CreateScriptedOp( \"GeometryDeform\", code, \"JScript\" );\n\
\n\
	var p1 = g_sop.AddIOPort( g_prim, \"\", 0, -1, siBranchGroupPort  );			\n\
	var p2 = g_sop.AddInputPort( g_obj.posy, \"\", 0, -1, siBranchGroupPort  );			\n\
\n\
	g_sop.Connect(g_obj);\n\
\n\
<em class=\"strong\">// Notice that the port connections are passed in as arguments to Update\n\
function GeometryDeform_Update( ctx, Out, Inpolymsh, Inposy )</em>\n\
{\n\
	Application.LogMessage( \"GeometryDeform_Update: \" + Out.TargetPath + \":\" + Inposy.TargetPath );\n\
	\n\
	<em class=\"strong\">var arr = Inpolymsh.Value.Geometry.Points.PositionArray.toArray();</em>\n\
\n\
	for ( var i=0; i&lt;arr.length; i=i+3 )\n\
	{\n\
	  var x = arr[0+i];\n\
	  var z = arr[2+i];\n\
	  var y = 0;\n\
 \n\
	  var x0 = x;\n\
	  var z0 = z + 1;\n\
	  var l = Math.sqrt(x0 * x0 + z0 * z0)\n\
	  var dif = l - Inposy.Value // In2 can be any value, e.g. posx\n\
	  dif = dif * dif;\n\
	  dif = Math.sqrt(dif);\n\
	 \n\
	  if ( dif &lt; 1 ) {\n\
		y = y + (1 - dif);\n\
	  }\n\
 \n\
	  arr[1+i] = y;\n\
	}\n\
	<em class=\"strong\">Out.Value.Geometry.Points.PositionArray = arr;</em>\n\
}\n\
</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-83D3F5FC-D996-415A-8EC7-212FA748C5F1\"></a></span>And this is the operator after being converted. Notice the lines in bold again which\n\
                        underline the difference between how the <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> function gets and sets port connections for SICOs:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
//... from Creation Code (where prim is primitive of a sphere mesh)...\n\
	var op = XSIFactory.CreateObject( \"CppGeometryDeform\" ) ;\n\
\n\
	op.AddIOPort( prim, \"\", 0, -1, siBranchGroupPort ) ;\n\
	op.AddInputPort( obj.posy, \"\", 0, -1, siBranchGroupPort ) ;\n\
\n\
	op.Connect( ) ;\n\
...\n\
\n\
<em class=\"strong\">// Notice that only the context object is an argument to Update\n\
function CppGeometryDeform_Update( in_ctxt )\n\
{\n\
\n\
	// The OperatorContext gives you access to the input ports\n\
	var prim = ctxt.GetInputValue( 0 /* input primitive of IO port*/ ) ;\n\
	var posyVal = ctxt.GetInputValue( 1 /* posy param */) ;\n\
\n\
	var inGeom = prim.Geometry ;\n\
	var arr = inGeom.Points.PositionArray.toArray() ;</em>\n\
\n\
	for ( var i=0; i&lt;arr.length; i=i+3 )\n\
\n\
	{\n\
	  var x = arr[0+i];\n\
	  var z = arr[2+i];\n\
	  var y = 0;\n\
 \n\
	  var x0 = x;\n\
	  var z0 = z + 1;\n\
	  var l = Math.sqrt(x0 * x0 + z0 * z0)\n\
	  var dif = l - Inposy.Value // In2 can be any value, e.g. posx\n\
	  dif = dif * dif;\n\
	  dif = Math.sqrt(dif);\n\
	 \n\
	  if ( dif &lt; 1 ) {\n\
		y = y + (1 - dif);\n\
	  }\n\
 \n\
	  arr[1+i] = y;\n\
	}\n\
\n\
	<em class=\"strong\">// The OperatorContext gives you access to the output ports\n\
	var outPrim = ctxt.OutputTarget ;\n\
	outPrim.Geometry.Points.PositionArray( arr ) ;</em>\n\
\n\
	return CStatus::OK ;\n\
}\n\
</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-566EAAC0-9D57-4CB5-BAC0-1BACD62A8DDF\"></a></span>And because you might be interested in taking the extra step of compiling the operator,\n\
                        here is the C++ equivalent of the above:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
//... from Creation Code (where prim is primitive of a sphere mesh)...\n\
	CustomOperator op = Application().GetFactory().CreateObject( L\"CppGeometryDeform\" ) ;\n\
\n\
	op.AddIOPort( prim, L\"\", 0, -1, siBranchGroupPort ) ;\n\
	op.AddInputPort( obj.GetParameters().GetItem( L\"posy\" ), L\"\", 0, -1, siBranchGroupPort ) ;\n\
\n\
	op.Connect( ) ;\n\
...\n\
\n\
<em class=\"strong\">// Notice that only the context object is an argument to Update\n\
XSIPLUGINCALLBACK CStatus CppGeometryDeform_Update( CRef&amp; in_ctxt )</em>\n\
{\n\
\n\
	OperatorContext ctxt( in_ctxt ) ;\n\
\n\
	<em class=\"strong\">// The OperatorContext gives you access to the input ports\n\
	Primitive prim = ctxt.GetInputValue( 0 /* input primitive of IO port*/ ) ;\n\
	double posyVal = ctxt.GetInputValue( 1 /* posy param */) ;\n\
\n\
	Geometry inGeom = prim.GetGeometry() ;\n\
	CVector3Array posArray = inGeom.GetPoints().GetPositionArray();</em>\n\
\n\
	for ( LONG i=0 ; i&lt;posArray.GetCount(); i++ )\n\
	{\n\
			CVector3&amp; pos = posArray[i] ;\n\
			pos.PutY( 0.0 ) ;\n\
\n\
			CVector3 pos0( pos.GetX(), 0.0, pos.GetZ() + 1.0 )  ;\n\
		\n\
			double l = pos0.GetLength() ;\n\
\n\
			double dif = l - posyVal ;\n\
				\n\
			if ( dif &lt; 0 )\n\
				dif = -dif ;\n\
\n\
			if ( dif &lt; 1 )\n\
				pos.PutY( 1 - dif ) ;				\n\
	}\n\
\n\
	<em class=\"strong\">// The OperatorContext gives you access to the output ports\n\
	Primitive outPrim = ctxt.GetOutputTarget() ;\n\
	outPrim.GetGeometry().GetPoints().PutPositionArray( posArray ) ;</em>\n\
\n\
	return CStatus::OK ;\n\
}\n\
</pre></div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0074\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-00EEA3E2-2FD8-4F2C-B9C0-F40857ED640F\"></a></span>SPDL/Preset to SICO\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7B0EE8B4-DF50-4155-ABFA-75429593F567\"></a></span>Changing your legacy (preset-based) operator to use the new Self-Installed Custom\n\
                     Operator API is basically a matter of converting any SPDL-based parameters to use\n\
                     the <a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a> API, updating the existing entry points to match the new signatures, and implementing\n\
                     a few new callbacks to register the operator with the <a href=\"#!/url=./si_om/PluginRegistrar.html\">PluginRegistrar</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html\">PluginRegistrar</a>.\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-4B68D216-D9C5-4A39-8474-41D7853F418D\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD45C77D-F743-4A8F-8EE1-C0E34C94B838\"></a></span>Before starting the conversion process, you should have a clear idea of how custom\n\
                           operator are implemented. For information about applying operators, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm\">Applying Operators in Softimage</a></span>; for information about using the callbacks and entry points, see <a href=\"#!/url=./si_cmds/callbacks.html#cb_operator\">Operator Callbacks</a>.\n\
                        </p> \n\
                     </div>\n\
                  </div> <span class=\"anchor_wrapper\"><a name=\"GUID-FE359AA3-E06B-4A4B-9BC2-5D882107D07C\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-43F2BFF3-E49B-4453-BC70-6DFFF5494FCF\"></a></span>If you are using C++ API to implement your operator, change the project file (<span class=\"filePath\" translate=\"no\">.vcproj</span>, <span class=\"filePath\" translate=\"no\">.sln</span>) to output the dll into <span class=\"filePath\" translate=\"no\">\\Application\\Plugins</span> instead of <span class=\"filePath\" translate=\"no\">\\Application\\bin\\</span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-297AF337-1BEE-47FC-B327-230AE45E49D8\"></a></span>Add the <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> entry point that registers the operator.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C5D67E2-DA56-41B8-A849-2CB4D4B512B5\"></a></span>Examine the parameter definition in the SPDL and create equivalent parameters in the\n\
                           <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-96BFCC2E-729D-4AFC-A0E9-B66F6B7D2BBF\"></a></span>Use the port connection information in the SPDL to build a list of outputs and inputs\n\
                           for the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm\">code to apply the operator</a></span>:\n\
                        </p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-F1A97D88-0862-44C1-94F0-420828A3C016\"></a></span>If the connections are basic, with no usage of multi-instance groups or optional ports,\n\
                                 then you can <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-004B\">apply the operator automatically</a></span>.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-52DE17D3-E7AC-4A4C-BC1A-0173158F069F\"></a></span>If the connections are optional or dynamic, then you must <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0054\">apply the operator manually</a></span>.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-6A482D3C-90D5-46EB-B086-8DFA8C99A19A\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-22490635-67D4-4E46-A1C2-B6A39EE904B1\"></a></span>Because the SPDL contains GUIDs that are hard to decipher, it can help to load a scene\n\
                                 with the SPDL-based operator and use the SDK Explorer to inspect the actual objects\n\
                                 that connect to it.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B13EFC46-2C68-47EC-ACBB-A42A0B08A27C\"></a></span>However you decide to apply the operator, you need to visit each call to <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> and replace it with the manual or automatic application code. You could either:\n\
                        </p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-08E37B52-AC2D-4182-A83F-5E4D6B67EECD\"></a></span>Add a menu callback that uses <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-004B\">AddCustomOp</a></span> to create the operator, as demonstrated in the <a href=\"#!/url=./examples/Addons/DeformOperators/netview_DeformOperators.htm\">Splatter example</a>.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-49B3AAD6-DB8B-4F4A-ADA0-92F99BDEE656\"></a></span>Add a custom command to apply the operator and change any calls to <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> to use the new command. It can be implemented in the same plug-in as the operator\n\
                                 as demonstrated in the <a href=\"#!/url=./examples/Addons/VertexColorMixer/netview_VertexColorMixer.htm\">Vertex Color Mixer example</a>.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB0C7652-D846-4727-9D83-56642B5C87FE\"></a></span>Change the <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> function to use the new signature, the new context object, and the new API to get\n\
                           at the input and outputs (the actual algorithm should be unchanged):\n\
                        </p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7CCD718-5998-4DEE-8FF2-F172874F6D8E\"></a></span>The old Update callback required you to pass in all port connections as arguments.\n\
                                 The new Update callback supports only one argument: the context, from which you can\n\
                                 get the port connections and custom parameters (variables).\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-BC1D34A3-43AB-40F6-8F18-450706E847AF\"></a></span>The old Update callback provided access to the <a href=\"#!/url=./si_om/UpdateContext.html\">UpdateContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1UpdateContext.html\">UpdateContext</a> object; the new Update callback provides access to the <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1OperatorContext.html\">OperatorContext</a> object, which provides easy access to the operator\'s ports and custom parameters.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6ACFFAE4-2BDC-4347-8549-DB82C9F827D5\"></a></span>You still have access to the <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html\">CustomOperator</a> through the source of the <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1OperatorContext.html\">OperatorContext</a> (via <a href=\"#!/url=./si_om/Context.Source.html\">Context.Source</a> or Context::GetSource), however, the <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1OperatorContext.html\">OperatorContext</a> object provides faster, more convenient ways to get at the data, such as <a href=\"#!/url=./si_om/OperatorContext.GetInputValue.html\">OperatorContext.GetInputValue</a> or OperatorContext::GetInputValue which returns the data connected to the specified\n\
                                 input port, or <a href=\"#!/url=./si_om/OperatorContext.OutputPort.html\">OperatorContext.OutputPort</a> or OperatorContext::GetOutputPort and <a href=\"#!/url=./si_om/OperatorContext.OutputTarget.html\">OperatorContext.OutputTarget</a> or OperatorContext::GetOutputTarget which allow you to write to the output port of\n\
                                 the operator.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-320BBD7F-0B6F-43FF-9160-40B24C0789F4\"></a></span>Test the operator.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-05F28550-4CA0-4A80-A27D-0FB0930EBB56\"></a></span>If necessary, replace any operators stored in scene files with the new operator.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-68261340-9E83-4D09-BDE6-88BF29A4AA19\"></a></span>Remove the Preset, SPDL and DLL associated with the SPDL-version of the operator,\n\
                           unless legacy scene files continue to depend on it. There should be no problems with\n\
                           coexistence of both versions.\n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";