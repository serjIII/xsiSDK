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
      <meta name=\"topicid\" content=\"GUID-A243EE1E-EA18-40D1-9E7B-62FCBC68E78E\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Static versus Dynamic Operators</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A243EE1E-EA18-40D1-9E7B-62FCBC68E78E\"></a></span><div class=\"head\">\n\
            <h1>Static versus Dynamic Operators</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C39A958-A6FA-4A4D-9363-1708DFD73B81\"></a></span>Most custom operators have a simple design with a fixed number of mandatory inputs\n\
               and a single output. This operator is said to be <em class=\"mild\">static</em> because its connections are not changed once the operator is connected. Two techniques\n\
               are supported for creating and connecting static operators: <em class=\"mild\">automatic</em> and <em class=\"mild\">manual</em>. For static operators it is not necessary to consider port groups at all and only\n\
               a minimal understanding of Ports is necessary.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA485977-6AF6-4331-A0A8-DF2D7379CBF3\"></a></span>The second type of operator is a <em class=\"mild\">dynamic</em> operator. This is a more advanced model where an operator expects to have its connections\n\
               change after it has been connected. For example it may support an optional connection\n\
               with a object, or support an unlimited number of connections to objects. A typical\n\
               example is a blending operator, which accepts any number of inputs and blends their\n\
               data to a single output. The API supports this type of operator and there is a recommended\n\
               technique for creating these operators.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0046\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3A8B0266-C6EC-43CF-9EDD-49C663DB5DD9\"></a></span>Using Port Groups\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B11011CB-AB6D-4765-B18C-E0A7FC95959A\"></a></span>An operator may have many ports, and these ports are connected to specific data nested\n\
                  underneath an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a>. Unlike native Softimage operators, which can take X3DObjects and resolve the precise\n\
                  node to connect to, when building custom operators, you need to make connections to\n\
                  very specific nodes, such as primitives, global or local kinematic states, specific\n\
                  parameters, cluster properties, etc.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D113F1C5-2AF8-4107-90DE-7A7DF29DCA93\"></a></span>As a general guideline, if you are having trouble connecting your own custom operator\n\
                  you will probably do well to divide your ports into more groups—there is no size problem\n\
                  with having many groups. In fact, the only reason you are likely to have to want to\n\
                  group several ports together is based on the multi-instance feature, or dynamic connections.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0047\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BB4109F8-6043-4015-9B90-F16558513D4E\"></a></span>Specifying Dynamic Connections\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD2E24D3-83A5-46E3-9D33-FEE6E985B311\"></a></span>Port groups are necessary when you want to build an operator that connects to an arbitrary\n\
                  number objects of the same type. For example you might want to have an object that\n\
                  can take any number of meshes and blend them together to form a new mesh. Rather than\n\
                  creating a huge number of ports based on some arbitrary maximum number of objects\n\
                  it is better to use multiple instances of a group.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4073EB49-0605-4341-B61F-D3B8653C458F\"></a></span>Part of the definition of a group is how many instances it supports - it could be\n\
                  0 to 1 for an optional group, 1 to 1 for a mandatory single instance group or 1 to\n\
                  1000 for a mandatory group that supports up to 1000 connected objects. When an group\n\
                  has multiple instances active then there is a separate instance of each port within\n\
                  the group for each group instance, so the operator can read from all the objects.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-380EBB31-9C07-4788-8214-0A14500B4CE8\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4D14D3AC-0D71-40CE-820E-599CC80282EE\"></a></span>Note that you can add or remove ports and port groups dynamically until the operator\n\
                        is connected. Once it is connected, its definition is frozen.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0048\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A46A5D3A-C0A5-42F0-9FA2-68FAD592CBC9\"></a></span>Using the Wizard to Create Dynamic Operators\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6D07CC50-05DE-4C89-AC01-F6C2AB44066B\"></a></span>Although the wizard generates only static code, you can still use it to generate basic\n\
                  operator code which can then be rendered dynamic with a few simple changes. For example,\n\
                  if you wanted to create a generator operator with a variable number of inputs, you\n\
                  could use the wizard to generate code for a static operator with two objects similar\n\
                  to this:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// This is the implementation for the command to apply the operator, which is\n\
// is where you <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> up the ports and hook up the operator for static operators\n\
function ApplyMyOp_Execute(  )\n\
{\n\
	Application.LogMessage(\"ApplyMyOp_Execute called\");\n\
	// TODO: This generated code works by hardcoding the exact names of the\n\
	// input and output objects.\n\
	// If you want to operator to be applied to objects with different names\n\
	// you way want to generalise this code to determine the objects\n\
	// based on the Selection or the arguments to this command\n\
	// \n\
	// Note: The AddCustomOp command is an alternative way to build the operator\n\
	var newOp = XSIFactory.CreateObject(\"MyOp\");\n\
	<em class=\"strong\">newOp.AddOutputPort(\"grid2.polymsh\");\n\
	newOp.AddInputPort(\"grid.polymsh\");\n\
	newOp.AddInputPort(\"grid1.polymsh\");</em>\n\
	newOp.Connect();\n\
	return newOp;\n\
}\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-673EA6D6-7BE2-45F1-BE3B-E8DF2AC42D71\"></a></span>Once you have this basic code you can convert it to be dynamic with just a few modifications:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AFF2A3A6-0D82-4C66-9BA9-930AA0297119\"></a></span>Explicitly <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0055\">create a port group</a></span> that can have a variable number of port objects connected. You do this with the <a href=\"#!/url=./si_om/CustomOperator.AddPortGroup.html\">CustomOperator.AddPortGroup</a> or CustomOperator::AddPortGroup method, which you only need to explicitly call in\n\
                        these more complex cases.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-57AC1757-DF7F-4B47-AC0B-81151B1E0C7E\"></a></span>Rewrite the code from using the <a href=\"#!/url=./si_om/CustomOperator.AddInputPort.html\">CustomOperator.AddInputPort</a> or CustomOperator::AddInputPort and <a href=\"#!/url=./si_om/CustomOperator.AddOutputPort.html\">CustomOperator.AddOutputPort</a> or CustomOperator::AddOutputPort methods to use the more flexible <a href=\"#!/url=./si_om/CustomOperator.AddInputPortByClassID.html\">CustomOperator.AddInputPortByClassID</a> or CustomOperator::AddInputPortByClassID and <a href=\"#!/url=./si_om/CustomOperator.AddOutputPortByClassID.html\">CustomOperator.AddOutputPortByClassID</a> or CustomOperator::AddOutputPortByClassID methods. These allow you to <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0057\">define what kind of objects</a></span> need to be connected to a port without requiring specific objects to actually exist.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-24395DC1-0600-4FE7-9FD5-EEE1E604CA6E\"></a></span>Replace the <a href=\"#!/url=./si_om/Operator.Connect.html\">Operator.Connect</a> or Operator::Connect method with the <a href=\"#!/url=./si_om/Operator.ConnectToGroup.html\">Operator.ConnectToGroup</a> or Operator::ConnectToGroup method. The difference between the two is that the <a href=\"#!/url=./si_om/Operator.Connect.html\">Operator.Connect</a> or Operator::Connect method hooks all connections up at once, whereas the ConnectToGroup\n\
                        method allows you to <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0059\">connect objects individually</a></span> at different times.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-52EF98CD-1FA7-48DF-B4D8-42283AD374FF\"></a></span>The highlighted snippet above (bold) might be rewritten as follows:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// ...\n\
	<em class=\"strong\">var ingrp = newOp.AddPortGroup(\"MyDynPortGroup\", 1, 1000);\n\
	newOp.AddInputPortByClassID(siPrimitiveID, \"inprim\", ingrp.Index);</em>\n\
	// ...\n\
	// Once the objects exist in the scene they can be hooked up\n\
	<em class=\"strong\">newOp.ConnectToGroup(ingrp.Index, grid0.ActivePrimitive);\n\
	newOp.ConnectToGroup(ingrp.Index, grid1.ActivePrimitive);</em>\n\
	// etc.</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-CE13AF17-C9DF-4ED2-8010-7E997A12914D\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-427C13F1-6E7A-47D4-BE1E-0F19F9C229A7\"></a></span>The SDK workgroup provides a <a href=\"#!/url=./examples/Addons/ConstraintOps/netview_ConstraintOps.htm\">number of constraint examples</a> that demonstrate the differences between static and dynamic operators:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-E2D421D9-2D0C-4074-93EA-3590FC396C63\"></a></span> <em class=\"strong\">CenterOp_Basic</em>: Uses a fixed number of inputs and a single output.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-E45F4F33-ACA4-47E8-8376-4FB9F5E7C055\"></a></span> <em class=\"strong\">CenterOp_Simple</em>: Similar to the Basic variation, but uses a variable number of inputs.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-B38FA4E7-C720-4669-B27E-EFEE757AA612\"></a></span> <em class=\"strong\">CenterOp_Dynamic</em>: Demonstrates how to hook up additional objects even after the operator has been\n\
                              created. by using a single port with multiple instances.\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";