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
      <meta name=\"topicid\" content=\"GUID-93CD18E6-A745-40BB-88EC-DD326F4ED433\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Making Connections</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-93CD18E6-A745-40BB-88EC-DD326F4ED433\"></a></span><div class=\"head\">\n\
            <h1>Making Connections</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B291A5BB-6973-4F4A-A94F-71D58E914D77\"></a></span>For a general understanding of operator connections for built-in Softimage operators,\n\
               read <a href=\"#!/url=./files/cnxset.htm\">About Connection Sets</a>.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-003B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D0D58FF8-41DB-4A2C-A259-526F37282DB7\"></a></span>Understanding Ports\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-149AFCAC-4369-411B-87A6-FC4CC11A98D9\"></a></span>Each operator has at least one output port and zero or more input ports. Each port\n\
                  has a direction, so to read from and write to a particular object requires two ports\n\
                  (an input and an output). Deformers are examples of operators that read an existing\n\
                  geometry and deform it via an input and output port.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4D92423E-BFC9-4D2C-B019-EE1E80879E92\"></a></span>Port connections are made to the specific data that needs to be read or written. Valid\n\
                  objects to connect with include any <a href=\"#!/url=./si_om/Property.html\">Property</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a>, <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a>, <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1KinematicState.html\">KinematicState</a>, <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Primitive.html\">Primitive</a> or <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a>. The connection needs to go to the specific data within the <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a>, not to the X3DObject itself. To help enforce this rule the object model or C++ API\n\
                  prevents access to certain methods and properties designed to traverse through the\n\
                  nested data of an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a>. For example, <a href=\"#!/url=./si_om/Geometry.Clusters.html\">Geometry.Clusters</a> or <a href=\"#!/url=./si_cpp/Geometry.html#GetClusters\">Geometry::GetClusters</a> is blocked inside Custom Operators because the operator is expected to connect to\n\
                  each cluster that it wants to access.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-95292818-D681-467B-8BDB-0ED16A7F3E3B\"></a></span>One of the main tasks of building a custom operator is to define the ports so that\n\
                  all the necessary input data can be read and the result of the calculations used to\n\
                  update the output object(s).\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-003C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-4CA96C58-A07F-40A7-B23B-90CFDA2FE1E3\"></a></span>Port Indexing\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C99655BB-7E3F-44B9-82C8-AE5DEE572463\"></a></span>To access ports within the <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> function, you can use <a href=\"#!/url=./si_om/OperatorContext.GetInputValue.html\">OperatorContext.GetInputValue</a> or OperatorContext::GetInputValue which allows you to specify the port by name or\n\
                     index. Accessing ports by index is much faster than by name, and you can figure out\n\
                     the index by the order in which the ports were added:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-029AB588-004E-4B54-BB2A-D874BB3864CA\"></a></span>If the operator was created by the <a href=\"#!/url=./si_cmds/AddCustomOp.html\">AddCustomOp</a> command or <a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">Parameter.AddCustomOp</a> or Parameter::AddCustomOp method then the index is easy to determine based on the\n\
                           order of the inputs in the input argument.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-60F173B5-3C9C-43AE-9D44-874D3BC7AA03\"></a></span>If the operator was built manually then the index can be determined based on the order\n\
                           of calls to <a href=\"#!/url=./si_om/CustomOperator.AddInputPort.html\">CustomOperator.AddInputPort</a> or CustomOperator::AddInputPort or <a href=\"#!/url=./si_om/CustomOperator.AddIOPort.html\">CustomOperator.AddIOPort</a> or CustomOperator::AddIOPort.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A0169A3-8E4E-42C3-8A1A-1EF6E0BF785B\"></a></span>To access ports outside of the <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> function, you can use <a href=\"#!/url=./si_om/Operator.InputPorts.html\">Operator.InputPorts</a> or Operator::GetInputPorts and <a href=\"#!/url=./si_om/Operator.OutputPorts.html\">Operator.OutputPorts</a> or Operator::GetOutputPorts.\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-464621ED-B16E-4849-94C5-F6FFFB51CCDB\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-1FA34132-6C03-4552-8052-CD1969B49E12\"></a></span>There are other methods you can use to retrieve a port by its index, <a href=\"#!/url=./si_om/Operator.PortAt.html\">Operator.PortAt</a> or Operator::GetPortAt. However it is important to understand how this method reads\n\
                           indexes: regardless of the order in which they were implemented, all input ports precede\n\
                           the output ports.\n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C34BBA80-EB26-4D31-B76F-270BAE4122FD\"></a></span>It is recommended (and much safer) to use <a href=\"#!/url=./si_om/OperatorContext.GetInputValue.html\">OperatorContext.GetInputValue</a> or OperatorContext::GetInputValue (or <a href=\"#!/url=./si_om/Operator.GetInputValue.html\">Operator.GetInputValue</a> or Operator::GetInputValue) and <a href=\"#!/url=./si_om/Operator.InputPorts.html\">Operator.InputPorts</a> or Operator::GetInputPorts or <a href=\"#!/url=./si_om/Operator.OutputPorts.html\">Operator.OutputPorts</a> or Operator::GetOutputPorts instead.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-003D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-6B9F3378-3B5E-4829-9DCF-0839027A64CC\"></a></span>Port Groups\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DF3071C-FB2B-4CBB-9F1D-DCD01D2C0C08\"></a></span>A port group is a sophisticated tool for organizing the ports of an Operator. Each\n\
                     port must belong to a single group, and an operator can define multiple groups.\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-F5B4B5A7-5AD2-4239-988D-69FB584040DD\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F0F71D0E-8BFC-40F3-AC66-772B3BEAEDC1\"></a></span>The word <em class=\"mild\">Group</em> in this context has nothing to do with the <a href=\"#!/url=./si_om/Group.html\">Group</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Group.html\">Group</a> object in Softimage.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C952519A-2081-454A-B36F-E6556D60AB51\"></a></span>There are two main purposes for port groups:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F957179-98DE-4D0A-ACAF-00A843314371\"></a></span>To make it easier to connect to an operator when it is created.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-DBFC65F6-6267-4F37-8A26-0EE2BF8842A2\"></a></span>To allow an arbitrary number of objects to connect to a single operator.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-921819EE-967D-4351-B505-B2FD87A6550D\"></a></span>Unless you are creating an advanced operator, such as a dynamic operator or a complex\n\
                     operator that reads from an arbitrary number of inputs, you do not have to worry about\n\
                     port groups, which are explained in <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_StaticversusDynamicOperators.htm\">Static versus Dynamic Operators</a></span>.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-003E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CB00F926-74A5-4609-B16B-49801C9EE762\"></a></span>What is a Target?\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-650C610B-CDFF-4D61-AC5A-B593D2841B94\"></a></span>A target is an object (<a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Primitive.html\">Primitive</a>, <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1KinematicState.html\">KinematicState</a>, <a href=\"#!/url=./si_om/Property.html\">Property</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a>, <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a>, etc.) that is connected, via a port, to the operator. If the connection is to a\n\
                  parameter then you get the current value of the parameter (for example, a double value),\n\
                  otherwise, you get the connected object (for example, a <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Primitive.html\">Primitive</a> object):\n\
               </p> \n\
               <div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledHeading\">\n\
                        <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2FFF508E-720E-431C-887E-4584B0323480\"></a></span><p class=\"table-heading\">Member to use</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F1347EF-1FCC-42DD-A922-CD204F27E95C\"></a></span><p class=\"table-heading\">Parameter connection</p> \n\
                        </th>\n\
                        <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-18510C68-EE17-4745-969B-36C1B8101AEB\"></a></span><p class=\"table-heading\">Non-parameter connection</p> \n\
                        </th>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-08E379FF-B2BE-4F1D-96C4-534A6ABB74D9\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/OperatorContext.GetInputValue.html\">OperatorContext.GetInputValue</a> or OperatorContext::GetInputValue \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DB2DCDDD-0E1B-416D-91C3-6BA55740350F\"></a></span><p class=\"table-body\">Returns the parameter value</p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-10A0F36B-6FDD-41FC-B99B-A8204080F406\"></a></span><p class=\"table-body\">Returns the object.</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-341E5D3E-F941-44A8-8012-9439C4F7CCA9\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/OperatorContext.OutputTarget.html\">OperatorContext.OutputTarget</a> or OperatorContext::GetOutputTarget \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B713DC5C-2772-4394-8F64-D82B7490E18D\"></a></span><p class=\"table-body\">Returns the object connected to the output port.</p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-582E8E43-606D-4395-8669-3935238027EE\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/OperatorContext.OutputPort.html\">OperatorContext.OutputPort</a> or OperatorContext::GetOutputPort \n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E90CCF90-5CC6-4B1B-93A1-DE60F92D6BFA\"></a></span><p class=\"table-body\">Returns the port object itself. You can then write a new value to the parameter connected\n\
                              to the port with <a href=\"#!/url=./si_om/OutputPort.Value.html\">OutputPort.Value</a> or OutputPort::PutValue.\n\
                           </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\">&nbsp;</td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";