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
      <meta name=\"topicid\" content=\"GUID-075EC4A6-1436-4918-B874-D314C32160F7\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is a Custom Operator?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"positions\", \"si_cpp/group__RenderMapDefine.html#ga4ff6c20401928cc896711bb86fab2870\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-075EC4A6-1436-4918-B874-D314C32160F7\"></a></span><div class=\"head\">\n\
            <h1>What is a Custom Operator?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-C3516754-DD4D-46F1-A5AE-2E87269DD32A\"></a></span>An operator reads in data, performs some calculations, and then writes out data. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE182982-FFBA-40D5-BBCE-5E23F0081251\"></a></span>The input and output for an operator comes from other scene elements. For example,\n\
            an operator can have an input connection to the local kinematics of one object, and\n\
            an output connection to the local kinematics of another object. \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function ApplyMyFirstOperator_Execute(  )\n\
{\n\
	// Create an Operator object\n\
	var newOp = XSIFactory.CreateObject(\"MyTestOp\");\n\
	\n\
	// Define the input and output ports\n\
	newOp.AddInputPort(\"Camera_Root.kine.local\");\n\
	newOp.AddOutputPort(\"Camera_Interest.kine.local\");\n\
\n\
	// Make the connections	\n\
	newOp.Connect();\n\
	return newOp;\n\
}\n\
</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-64B8394B-26FA-4DDD-86B2-FC241BB994FD\"></a></span>Each operator defines input and output ports, and it is through these ports that the\n\
            operator is connected to scene elements such as local kinematics properties. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-7DE18871-DCE8-4DCE-AE7F-5740894CC4F7\"></a></span>Softimage supports creating custom operators through a special API that allows you\n\
            to implement the main calculation in an <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> callback and provide user interaction/customization via the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ppg.htm\">property page</a></span> API in the same plug-in. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-23A7E897-5F15-4016-B4A5-112139F5D678\"></a></span>The Update callback uses the <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1OperatorContext.html\">OperatorContext</a> object to get the input values and then write to the output target: \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyFirstOperator_Update( ctxt )\n\
{\n\
\n\
	// Get the input value from the first port (port indexing is 0-based)\n\
	var trans = ctxt.GetInputValue( 0 ).Transform;\n\
\n\
	// Perform some sort of operator on the transformations... \n\
	\n\
	// Apply the result to the target of the output port\n\
	ctxt.OutputTarget.Transform = trans ;\n\
	\n\
	return true;\n\
}\n\
</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A41E3E5-71F0-4DF1-8777-CD932A4C0FDE\"></a></span>Because the input port is connected to a <span class=\"code\" translate=\"no\">kine.local</span>, GetInputValue(0) returns a <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1KinematicState.html\">KinematicState</a> object. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-7F569A3B-5AE5-4D0C-A6C4-5399A15A5EFC\"></a></span>If the port was connected to an actual parameter, such as <span class=\"code\" translate=\"no\">kine.local.posx</span>, GetInputValue would return the X position value. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-44758A75-962B-4C8E-AE1B-F0ADA4EBD058\"></a></span>An operator may not necessarily know how many input connections there are. For example,\n\
            there may be an input port for each selected object, or for each object picked by\n\
            a user. To handle an arbitrary number of connections, we can get the <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html\">CustomOperator</a> object from the context and then get the actual number of connections. \n\
         </p>\n\
         <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyFirstOperator_Update( ctxt )\n\
{\n\
	\n\
	// Get the CustomOperator and use it to \n\
	// find out how many inputs are connected\n\
	var oOp = ctxt.Source ;	\n\
	\n\
	// There is only one port group, containing all the inputs and\n\
	// the single output\n\
	var cntInputs = oOp.GetNumPortsInGroup(0) - 1 ;\n\
	\n\
	// Add all the input objects <a href=\"javascript:void(0)\" data=\"positions\" class=\"a_multireflink\">positions</a>\n\
	for ( var i = 0 ; i &lt; cntInputs ; i++ )\n\
	{\n\
		var oInputKinematicState = ctxt.GetInputValue( i /* port */, 0, 0) ;\n\
		\n\
	}\n\
}\n\
</pre></div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-213E93FE-C4FE-4BA4-A572-F2104301C640\"></a></span>So far, all the code we\'ve looked at is for <em class=\"mild\">static</em> operators whose connections never change after Connect() is called. If you want to\n\
            build a <em class=\"mild\">dynamic</em> operator that allows you to dynamically add and remove connections, see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_StaticversusDynamicOperators.htm\">Static versus Dynamic Operators</a></span>. \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-32A9B571-8781-43D0-B3C1-6D0BFBB14ED9\"></a></span>Terminology Notes:\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_33BBC2DC4B0B4510913C697CA3889B7D\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-44C9888B-F118-465F-BCF4-C0ACE517C122\"></a></span>The recommended way to create custom operators is using the Self-Installed Custom\n\
                     Operator (often abbreviated as <em class=\"mild\">SICO</em>) API, which is the focus of this chapter. There are other ways to build custom operators,\n\
                     such as <em class=\"mild\">runtime</em> or <em class=\"mild\">legacy</em>; however, the term custom operator in this chapter always refers to the self-installed\n\
                     type of custom operator, unless otherwise specified. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-849751F7-07E6-4A24-9816-E0F12FF05C5F\"></a></span>Furthermore, the term <em class=\"mild\">custom operator</em> does not apply to <em class=\"mild\">Fx</em> and <em class=\"mild\">Simulation</em> operators (which are two examples of <span class=\"char_link\"><a href=\"#!/url=./files/dev_operators-1.htm#WS77221A8DAB94FA47A70B11D9A7AC166B-0004\">other types of operators in Softimage</a></span>). For information about customizing Fx operators, see <a href=\"#!/url=./files/cus_queries_PackagingSpreadsheetQueries.htm\">Custom Fx Operators</a>. Simulation operators cannot be custom-built for use in Softimage but you can use\n\
                     custom operators to achieve similar effects. \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0005\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-74C68998-12D8-4448-8672-3C64F81F487D\"></a></span>Implementation at a Glance\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E7395E5-E927-4E69-8E26-DFEDE45684F8\"></a></span>Here is a basic overview of how to implement custom operators for Softimage: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"GUID-186A9F26-0468-4317-8B6A-5A87B9652A3D\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC186B8B-0367-42D4-A3D4-CC638A7CFE41\"></a></span>Implement your algorithm inside the <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> callback, which provides access to the custom operator, its connections, and any\n\
                     parameters defined for that operator through the <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1OperatorContext.html\">OperatorContext</a> argument. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-62596F1C-1D5B-4BE5-A89F-65316DEFBB8A\"></a></span>If you need to store any user data, implement the <a href=\"#!/url=./si_cmds/cb_Operator_Init.html\">Init</a> and the <a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a> callbacks. These callbacks provide a means of storing user data when the operator\n\
                     is instantiated, and then releasing it when the operator is removed (for example,\n\
                     storing a pointer to a custom C++ object). The cached data is not persisted. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C63D22EB-A0AB-441C-AF50-65BDA0B24BFC\"></a></span>To set up custom parameters, you need to add them to the operator as part of the <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback implementation. You can then format them with <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> (just like <a href=\"#!/url=./files/cus_ppg.htm\">Custom Properties</a>). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9B3B920B-F614-4B65-BD1F-08EA8D216583\"></a></span>There is no callback for creating the connection definition of the operator, or for\n\
                     resolving the connection. That is handled by the code that creates the operator, as\n\
                     described in <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm\">Applying Operators in Softimage</a></span>. \n\
                  </p> \n\
               </li>\n\
            </ol> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DDB9CCC2-BC56-4D4E-804F-CEFFE80596FE\"></a></span>All callbacks take only a single argument. This argument is either a <a href=\"#!/url=./si_om/Context.html\">Context</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Context.html\">Context</a> object or an <a href=\"#!/url=./si_om/OperatorContext.html\">OperatorContext</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1OperatorContext.html\">OperatorContext</a> object. \n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-63C701CF-799D-479B-8FCE-EB9901D74DBC\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0006\"></a></span> There is no specific callback for creating the connection definition of the operator,\n\
                     or for resolving connections. That is handled by the code that creates the operator,\n\
                     for example in the callback of the command that will apply the operator. \n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-1A793057-3FE1-42DA-A5F1-B9BB60973078\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A966C753-9767-4924-9619-FC91FBF71F79\"></a></span>Most of the time, you should be able to use the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm\">Custom Operator Wizard</a></span> to do much of the legwork before writing the actual implementation code. \n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCC1956B-3046-4855-A50E-6F6CCC042AE2\"></a></span>For more information, see the <a href=\"#!/url=./si_cmds/callbacks.html#cb_operator\">Operator Callbacks</a> reference. \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0007\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4BD83FDA-54C0-4D2F-AF93-98B8259C88DE\"></a></span>Types of Operators\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8C01F0F-B559-4E98-B21B-3642EDD8D462\"></a></span>You can build several types of custom operators: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"GUID-48BC1BE2-A3E0-46BB-8B6E-2C40CF476095\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DA11D650-EEBF-4A2D-8E8A-25618DD018FA\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_WhatisaCustomOperator.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0008\">Generators</a></span> —operators that create mesh geometry. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8593BBC-BCF3-4094-9639-B3E959731597\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_WhatisaCustomOperator.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0009\">Deformer</a></span> —operators that change the positions of the points on the geometry \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-80F5A144-D6D0-4BA6-8FE0-F8F0D1864902\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_WhatisaCustomOperator.htm#WS3FA09F770E40D640AFBEE3CB2D491049-000A\">Constraining Operators</a></span> —operators that influence the position of an object or drive the value of a parameter.\n\
                     \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-78198672-9522-4549-8280-B92880FDF826\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_WhatisaCustomOperator.htm#WS3FA09F770E40D640AFBEE3CB2D491049-000B\">Topology Changes</a></span> —operators that add or remove points (not fully supported) \n\
                  </p> \n\
               </li>\n\
            </ol> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0008\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BE37253F-3AD7-4EDE-AC55-9600EA359BD8\"></a></span>Generators\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-95FAF4B1-A46D-4030-9B6E-1E8CCE0B4ADD\"></a></span>A generator operator builds its own mesh; for example, it may be a new type of primitive\n\
                  that is programmatically generated, or it may be a mesh that contains the processed\n\
                  results of some other mesh or input. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7B49EC93-C59D-49C4-B39C-5CE542F35D5D\"></a></span>A generator operator needs to be at the very bottom of the operator stack. Otherwise\n\
                  it won\'t successfully write to the geometry. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D1C27875-8733-418C-8DF4-6ADA5062F860\"></a></span>The typical method for applying a generator operator is to build a simple primitive,\n\
                  freeze it (to erase the Softimage generator operator), and then apply the custom generator.\n\
                  This properly installs the operator, and then deformation and other operators can\n\
                  be added above it. \n\
               </p> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0009\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-55A022BA-2320-4106-82AC-22B4374509B9\"></a></span>Deformer\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B5092CA-D7FE-4B3D-BF20-7D194E855BE7\"></a></span>You must have an input and output port (on the same group) attached to the <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Primitive.html\">Primitive</a> of the object you want to deform. You must specify the output port first. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C0F54D9-B079-4DD0-8350-4223B1E78D6D\"></a></span>A deformation operator never adds or removes points of the geometry, it just changes\n\
                  their positions. In other words it changes the shape but not the topology of the operator.\n\
                  See the <a href=\"#!/url=./examples/Addons/DeformOperators/netview_DeformOperators.htm\">Deform Operators</a> example located in the examples folder of the Softimage SDK installation directory.\n\
                  \n\
               </p> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-000A\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-29472F92-5EDF-45B4-8F20-3774C9EB9BA9\"></a></span>Constraining Operators\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8E2DF3BF-2FCA-4228-BC28-DF1B5EB4CAD5\"></a></span>You can establish a constraint-like relationship between two or more elements similar\n\
                  to the built-in Softimage constraint (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Constraints.htm#GUID-C3E3766F-7C7C-45D9-8EC7-0426E9E8B721\">Constraints vs. Custom (Scripted) Operators?</a></span> for more information on the difference between true constraints and custom operators).\n\
                  For example, you could create a custom operator that calculates an object\'s position\n\
                  based on averaging two or more scene elements. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9D56F192-D514-43C1-873B-726645B8B26D\"></a></span>See the <a href=\"#!/url=./examples/Addons/ConstraintOps/netview_ConstraintOps.htm\">Constraint Operator</a> example located in the examples folder of the Softimage SDK installation directory.\n\
                  \n\
               </p> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-000B\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-953E0A25-6093-4581-90EA-2BAA4A8BA452\"></a></span>Topology Changes\n\
               </h3> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6AAB1B15-33CC-4266-93C7-D5D00A0FAC33\"></a></span>Topology operators are similar to deformers except that they actually add or remove\n\
                  points from the geometry. An example of a built-in topology operator is Extrude Geometry\n\
                  Component. Unlike a generator operator, this type of operator is not at the bottom\n\
                  of the stack - instead it has an input port which reads some initial geometry and\n\
                  then outputs a new topology to that same geometry. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E97259A0-2F19-489F-AECF-712CA16FEDD4\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-918CA33E-FCDA-43F0-B650-EA284451F7AB\"></a></span>Softimage currently does not fully support custom topology operators. The problem\n\
                        is that any cluster or cluster property will not properly update when a topology operator\n\
                        adds or removes points that belong to the cluster. In the worst case Softimage may\n\
                        crash. Hence custom topology operators should only be used in the more limited scenario\n\
                        of objects that do not have any clusters. Once the geometry is ready it would be possible\n\
                        to freeze the object to remove the custom topology operators (but leave the result\n\
                        of their evaluation), then to add the clusters and other operators. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E9E208FE-4F11-4312-B34C-D292220C0011\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-44B10191-E4D3-469F-916C-390DF5D06BC2\"></a></span>As a workaround, you may want to consider creating a generator operator that takes\n\
                        the original geometry as input and then hides the original geometry. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2AA6A766-8980-4D7B-9EDC-C205F89A990C\"></a></span>You can also see the <a href=\"#!/url=./examples/Addons/VertexColorMixer/netview_VertexColorMixer.htm\">VertexColorMixer</a> operator example that shows how to implement port group instances. This example is\n\
                  located in the examples folder of the Softimage SDK installation directory. \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";