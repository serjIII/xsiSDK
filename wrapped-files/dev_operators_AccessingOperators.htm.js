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
      <meta name=\"topicid\" content=\"GUID-7E9C05FC-947F-4C08-8161-A3E0AC44DE67\" />\n\
      <meta name=\"indexterm\" content=\"operators: accessing\" />\n\
      <meta name=\"indexterm\" content=\"operators: getting information from\" />\n\
      <meta name=\"indexterm\" content=\"operators: operator stack\" />\n\
      <meta name=\"indexterm\" content=\"operator stack: overview\" />\n\
      <meta name=\"indexterm\" content=\"markers for construction modes (operator stack)\" />\n\
      <meta name=\"indexterm\" content=\"operator stack: regions (construction modes)\" />\n\
      <meta name=\"indexterm\" content=\"regions (construction modes)\" />\n\
      <meta name=\"indexterm\" content=\"construction mode regions\" />\n\
      <meta name=\"indexterm\" content=\"operators: accessing via the construction history\" />\n\
      <meta name=\"indexterm\" content=\"construction history: navigating\" />\n\
      <meta name=\"indexterm\" content=\"operators: navigating the operator stack\" />\n\
      <meta name=\"indexterm\" content=\"navigating: the operator stack\" />\n\
      <meta name=\"indexterm\" content=\"operator stack: navigating\" />\n\
      <meta name=\"indexterm\" content=\"operators: selecting from a specific construction region\" />\n\
      <meta name=\"indexterm\" content=\"construction history: selecting operators from a specific construction region\" />\n\
      <meta name=\"indexterm\" content=\"CComAPIHandler: using to access the operator stack\" />\n\
      <meta name=\"indexterm\" content=\"operators: accessing the operator stack with the CComAPIHandler\" />\n\
      <meta name=\"indexterm\" content=\"operator stack: accessing with the CComAPIHandler (C++ API)\" />\n\
      <meta name=\"indexterm\" content=\"C++ API: accessing the operator stack with the CComAPIHandler\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing Operators and Beyond</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7E9C05FC-947F-4C08-8161-A3E0AC44DE67\"></a></span><div class=\"head\">\n\
            <h1> Accessing Operators and Beyond</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D6DA1C59-84AF-41C8-9489-A92B36A7B622\"></a></span>As operators are applied, they are pushed onto a stack called the <em class=\"mild\">operator stack</em> until they are removed (usually by freezing the stack). Because this stack keeps\n\
               track of the object\'s history it is also known as the <em class=\"mild\">construction history</em>. The object model provides access to the <a href=\"#!/url=./si_om/ConstructionHistory.html\">ConstructionHistory</a> object through the <a href=\"#!/url=./si_om/Primitive.ConstructionHistory.html\">Primitive.ConstructionHistory</a> property. which you can use to enumerate over the construction history to access\n\
               its operators. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_operators_AccessingOperators.htm#WS77221A8DAB94FA47A70B11D9A7AC166B-0012\">The Operator Stack</a></span>.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-0011\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8759B7F4-5858-45BE-A5F2-F9F6BDF2A0FD\"></a></span> What You Can Do with an Operator\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD4FFD11-39F9-4EE9-985A-5D188C451354\"></a></span>Once you have a pointer to an operator, you can access its <em class=\"mild\">input ports</em> (the values that are driving the operator\'s data change) and its <em class=\"mild\">output ports</em> (for example, the parameter being driven) using these methods:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC9C4D46-1BD0-4188-B1FE-ADBF17C863EE\"></a></span>Object Model: <a href=\"#!/url=./si_om/Operator.InputPorts.html\">Operator.InputPorts</a> and <a href=\"#!/url=./si_om/Operator.OutputPorts.html\">Operator.OutputPorts</a></p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E6F9652C-0F51-4445-83C6-6FF29ECAD1BB\"></a></span>C++ API: <a href=\"#!/url=./si_cpp/classXSI_1_1Operator.html\">Operator::GetInputPorts</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1Operator.html\">Operator::GetOutputPorts</a></p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C2558908-EA81-4667-A23A-13EEC9E4E51A\"></a></span>From the ports you can get a pointer to the object to which the port is connected:\n\
                  <a href=\"#!/url=./si_om/Port.Target2.html\">Port.Target2</a> (object model) and <a href=\"#!/url=./si_cpp/classXSI_1_1Port.html\">Port::GetTarget</a> (C++ API).\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-113A42E1-FC1C-4E1E-972A-FA97A2A1B8F0\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-456CED3A-065B-4832-9976-6630B20E6A79\"></a></span>To see the input and output ports in the UI, you can use the <em class=\"strong\">SDK Explorer</em> (available from the <span class=\"MenuCascade\" id=\"GUID-E2CF25ED-A759-4219-AEA9-6BBCDE6CDC08\">View</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-0960D9AE-BD2E-431C-BED2-7892443160C1\">Scripting</span> menu) by clicking on the operator and then clicking the <span class=\"MenuCascade\" id=\"GUID-FA3B2294-2C53-4711-B3BC-CAE6CB23D9CD\">Object Details</span> link above the main content pane.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0BA65199-5F0F-42A9-9527-0D0B66478419\"></a></span>Note that the operator appears in the scene explorer according to which objects it\n\
                        is writing to (that is, it appears in the operator stack of the object it is creating\n\
                        or modifying) so it may appear in multiple places in the scene explorer at once.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-0012\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DBFE2E6A-CF66-4C3F-A3A3-9D754F61C8AF\"></a></span> The Operator Stack\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C59E6A3-CAD9-44A9-8A11-4BE17FD60C0F\"></a></span>In the SDK, the <em class=\"mild\">operator stack</em> is called the construction history because it keeps track of each persistent change\n\
                  to the object; that is, each operator applied to an object until it is frozen. The\n\
                  operator stack is subdivided into four <em class=\"mild\">construction mode</em> regions:\n\
               </p> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-037FB309-313E-4EA4-A438-6074B6964A75\"></a></span><p class=\"table-heading\">Region Name:</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3CA9B074-7957-4C5D-82E0-08046C9B71F7\"></a></span><p class=\"table-heading\">Description:</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-83FC63E4-5E25-40B2-AEC0-22D5398B6D79\"></a></span><p class=\"table-heading\">Name Returned from FullName</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B290B707-5886-4630-8AC0-7E971D89C637\"></a></span><p class=\"table-body\"> <em class=\"strong\">Modeling</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-263F9F38-1527-4E37-8268-46AD68694C5C\"></a></span><p class=\"table-body\">Defines the basic shape and topology of an object using both deformations and topology\n\
                              operators.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-18C6B457-5D40-46F4-BF73-BC79EB6886BE\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">modelingmarker</span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-456F3F9B-75B9-4F94-948E-69098233F921\"></a></span><p class=\"table-body\"> <em class=\"strong\">Shape Modeling</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B1B2A5EF-C410-455B-B90C-8982CFEFC240\"></a></span><p class=\"table-body\">Contains the Cluster Shape Combiner node and lets you apply deformations to define\n\
                              shape keys for shape animation.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8BF4D0E6-AE4D-45B3-A51C-3AEAA42A5D47\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">shapemarker</span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DC8EE21A-9003-44A6-9D3C-E7378D9D3113\"></a></span><p class=\"table-body\"> <em class=\"strong\">Animation</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-991A10AE-514B-45B5-AAF3-9709A5A8AC1F\"></a></span><p class=\"table-body\">Keeps animated deformations from being removed when the modeling is frozen or a shape\n\
                              is applied\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-65AFEB06-46E3-4849-92FE-226EBAF95C28\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">animationmarker</span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0C81B7E0-2E44-47BE-9CC0-2FC8079015CA\"></a></span><p class=\"table-body\"> <em class=\"strong\">Secondary Shape Modeling</em> \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A5A00376-F8CB-4350-AC72-5FAA8465B869\"></a></span><p class=\"table-body\">use it to create shape keys for things like muscle bulges on top of an enveloped character</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-985B6DFF-71B6-47CF-8B55-964B9A2B6FFA\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">secondaryshapemarker</span> \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A74A4198-206D-4C0C-B08B-2D4B49895EE8\"></a></span>As soon as an operator is applied, a construction history is built containing the\n\
                  new operator in addition to these four markers. When you enumerate over the operators\n\
                  in the construction history, these four markers will report their full names (shown\n\
                  in the third column in the table above), so you can test each item in the construction\n\
                  history to make sure you have what you think you have.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-0013\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-22135BDC-B54A-4481-80A7-35D98312E06E\"></a></span> Navigating the Operator Stack/Construction History\n\
                  </h3>      \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A60DF02-A9B0-46CA-AEAB-1ADF927560C7\"></a></span>To find an operator applied on a scene object, you need to browse through the contents\n\
                     of the object\'s <a href=\"#!/url=./si_om/ConstructionHistory.html\">ConstructionHistory</a>, which is accessible through the <a href=\"#!/url=./si_om/Primitive.ConstructionHistory.html\">Primitive.ConstructionHistory</a> property (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_operators_AccessingOperators.htm#WS77221A8DAB94FA47A70B11D9A7AC166B-0014\">JScript Example: Picking Operators from a Specific Construction Region</a></span> for a script example of how to navigate through the construction mode regions).\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-3F2CC5BE-6A2C-4D84-B7DD-C6EF0818FD3C\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-79E57378-8838-49EA-B607-C11DBC9397EB\"></a></span>Currently the Primitive.ConstructionHistory property is only available in the object\n\
                           model. However, by using the <a href=\"#!/url=./si_cpp/classXSI_1_1CComAPIHandler.html\">CComAPIHandler</a>, a C++ API plug-in can reach the operators connected to a <a href=\"#!/url=./si_cpp/classXSI_1_1Primitive.html\">Primitive</a> (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_operators_AccessingOperators.htm#WS77221A8DAB94FA47A70B11D9A7AC166B-0015\">C++ Example: Accessing the Construction History via the CComAPIHandler</a></span> for an example).\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-0014\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-B078A0E8-67AD-436F-8321-5564EE94D978\"></a></span> JScript Example: Picking Operators from a Specific Construction Region\n\
                     </h4>   \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-86D38715-A2FF-4728-A4AD-8BD102568904\"></a></span>In this example, a cube is created and several operators applied in different construction\n\
                        modes. Then the operator stack is read so that only those operators under the Animation\n\
                        construction mode region are considered.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Set up a scene with a cube and apply a variety of deform operators\n\
// in a variety of construction modes\n\
NewScene( null, false );\n\
var obj = CreatePrim( \"Cube\", \"MeshSurface\" );\n\
ApplyOp( \"Bulge\", \"cube\", 3, siPersistentOperation, null, 0 );\n\
ApplyOp( \"Bend\", \"cube\", 3, siPersistentOperation, null, 0 );\n\
SetValue( \"Context.ConstructionMode\", 2 );\n\
ApplyOp( \"Fold\", \"cube\", 3, siPersistentOperation, null, 2 );\n\
ApplyOp( \"Shear\", \"cube\", 3, siPersistentOperation, null, 2 );\n\
SetValue( \"Context.ConstructionMode\", 3 );\n\
ApplyOp( \"Smooth\", \"cube\", 3, siPersistentOperation, null, 3 );\n\
\n\
\n\
// Get the cube\'s operator stack/construction history and browse it...\n\
var opstack = new Enumerator( obj.ActivePrimitive.ConstructionHistory );\n\
var getanimops = false;\n\
for ( ; !opstack.atEnd(); opstack.moveNext() ) {\n\
	var op = opstack.item();\n\
	Application.LogMessage( \"Current node: \" + op.FullName );\n\
\n\
	// Use RegularExpression matching to identify the markers in the stack\n\
	var beginregion = false;\n\
	if ( op.FullName.match(/marker/i) != null ) {\n\
		beginregion = true;\n\
	} else {\n\
		beginregion = false;\n\
	}\n\
	\n\
	// Grab only animation operators\n\
	if ( !beginregion &amp;&amp; getanimops ) {\n\
		Application.LogMessage( \"\\tFound this animation operator: \" + op.Name );\n\
	}\n\
	\n\
	// Figures out when we\'re in the Animation region\n\
	if ( beginregion ) {\n\
		if ( op.FullName.match(/animationmarker/i) != null ) {\n\
			getanimops = true;\n\
		} else {\n\
			getanimops = false;\n\
		}\n\
	}\n\
}\n\
\n\
//INFO : Current node: cube.polymsh.secondaryshapemarker\n\
//INFO : Current node: cube.polymsh.smoothop\n\
//INFO : Current node: cube.polymsh.animationmarker\n\
//INFO : Current node: cube.polymsh.shearop\n\
//INFO : 	Found this animation operator: Shear Op\n\
//INFO : Current node: cube.polymsh.foldop\n\
//INFO : 	Found this animation operator: Fold Op\n\
//INFO : Current node: cube.polymsh.shapemarker\n\
//INFO : Current node: cube.polymsh.modelingmarker\n\
//INFO : Current node: cube.polymsh.bendop\n\
//INFO : Current node: cube.polymsh.bulgeop\n\
//INFO : Current node: cube.polymsh.geom\n\
</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-0015\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-A027C1F2-1752-4828-88FB-FC7C0B6D9782\"></a></span> C++ Example: Accessing the Construction History via the CComAPIHandler\n\
                     </h4>     \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1F6F106A-9928-4F71-84EF-84182CB2D671\"></a></span>This example demonstrates how to create a CRefArray of the operators connected to\n\
                        a Primitive using the CComAPIHandler object to access the Construction History.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Given an X3DObject (e.g. a mesh or nurbs), fills in an array with all the operators connected to its\n\
// primitive.	This function is suitable for re-use in any plug-in that wants to access construction history\n\
void GetOperators( X3DObject in_ops, CRefArray &amp; out_ops )\n\
{\n\
	Primitive primitive = in_ops.GetActivePrimitive() ;\n\
	CComAPIHandler comPrimitive( primitive.GetRef() ) ;\n\
\n\
	CComAPIHandler constructionHistory = comPrimitive.GetProperty( L\"ConstructionHistory\" ) ;\n\
	\n\
	// Currently there isn\'t a \"Count\" or \"Item\" property on the ConstructionHistory \n\
	// scripting object, so we use Filter to find all operators\n\
	CValue valOperatorCollection	;\n\
	CValueArray args(3)	;\n\
	args[1] = CValue( L\"Operators\" ) ;	// We want all operators (siOperatorFamily)\n\
	constructionHistory.Call( L\"Filter\", valOperatorCollection, args ) ;\n\
	\n\
\n\
	// Now convert from a OperatorCollection object to a C++ CRefArray\n\
	CComAPIHandler comOpColl = valOperatorCollection ;\n\
	CValue cnt = comOpColl.GetProperty( L\"Count\" ) ;\n\
	\n\
	CRefArray ops( (LONG)cnt ) ;\n\
	\n\
	for ( LONG i=0 ; i&lt;(LONG)cnt; i++ )\n\
	{\n\
		CValue outOp;\n\
		CValueArray itemsArgs;\n\
		itemsArgs.Add( i );\n\
		comOpColl.Invoke(L\"Item\", CComAPIHandler::PropertyGet, outOp, itemsArgs);\n\
	\n\
		ops[i] = outOp ;\n\
	}\n\
	\n\
	out_ops = ops ;\n\
}</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";