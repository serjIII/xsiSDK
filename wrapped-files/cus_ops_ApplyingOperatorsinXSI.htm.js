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
      <meta name=\"topicid\" content=\"GUID-F416B3D2-BA93-461D-AFC0-AFAD87688E85\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Applying Operators in Softimage</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F416B3D2-BA93-461D-AFC0-AFAD87688E85\"></a></span><div class=\"head\">\n\
            <h1>Applying Operators in Softimage</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C510245D-501D-4BCC-B734-D0986B45D9B0\"></a></span>Applying operators is a three-part process that includes:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9F9B620B-5428-4B42-88AA-85F6D5EA47A4\"></a></span>instantiating the operator\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-71757E26-502B-426D-A0F7-379920C961B0\"></a></span>specifying the ports to hook up\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9540183A-6882-4CB9-94C9-A257A804673B\"></a></span>making the connections\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-261978DD-47F2-497D-8A6A-D78B263D0A3F\"></a></span>There are several ways to apply custom operators, depending on what kind of operator\n\
               you are building (static vs. dynamic) and how much control you need over the connection\n\
               process.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A9D3B49-3A2D-4F57-B060-8F004879BE06\"></a></span>If you are building an operator with the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm\">wizard</a></span>, it can generate the code to instantiate the operator and make the port connections\n\
               (the <span class=\"MenuCascade\" id=\"GUID-55A24097-D4A4-4433-BE64-2BB6885AEA13\">Generate Command to Apply the Operator</span> option is selected by default).\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-004B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6144AF55-3E60-4AC7-BD78-06A6547C3AC2\"></a></span>Automatic Static\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-865EA69C-A4AA-4400-BD3A-C9DBF56D3E92\"></a></span>This is the simplest case, a static operator with a fixed number of port connections\n\
                  and includes cases where the objects to be connected are not yet created. You can\n\
                  use the <span class=\"MenuCascade\" id=\"GUID-43E1826B-0E76-4B0F-8837-9743EDDBE6DE\">AddCustomOp</span> method or command, which takes care of instantiating the operator, specifying the\n\
                  ports to hook up, and making the connections.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-004C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-18E2886F-870F-4277-B9E6-242C432A06CD\"></a></span>Related Links\n\
                  </h3> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-7D2C15DE-4BC8-4587-83F1-7426B2A80D5C\"></a></span>Scripting Command: <a href=\"#!/url=./si_cmds/AddCustomOp.html\">AddCustomOp</a></p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE33066B-C079-42F3-B70B-AF244F0D094E\"></a></span>Object Model: <a href=\"#!/url=./si_om/ProjectItem.AddCustomOp.html\">ProjectItem.AddCustomOp</a>, <a href=\"#!/url=./si_om/Parameter.AddCustomOp.html\">Parameter.AddCustomOp</a></p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-381B9BF7-7512-4AC4-8974-BD499AD06F05\"></a></span>C++ API: <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#AddCustomOp\">ProjectItem::AddCustomOp</a>, <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#AddCustomOp\">Parameter::AddCustomOp</a></p> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-004D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-7FA53ECA-4248-4762-A31D-827B28330450\"></a></span>Manual Static\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BFB189A5-FA4E-4B16-9428-991BF9435ACD\"></a></span>If you want to break the application process into its component parts you can also\n\
                  use specific object model and C++ API functions to perform each part. This is the\n\
                  way that the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm\">wizard</a></span> generates the code.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-004E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E56CD6F0-F1DB-4E5E-A9BD-01A05656BD28\"></a></span>Instantiating the Operator\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7343B02-D7D7-4F91-AD6D-7C95A6130D5B\"></a></span>You can use the <span class=\"MenuCascade\" id=\"GUID-E1D25A6E-4C03-4535-B805-35D57EFA34AA\">CreateObject</span> function to instantiate the operator by specifying the PluginItem name used to register\n\
                     the operator with <a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a> or PluginRegistrar::RegisterOperator. The CreateObject function returns a pointer\n\
                     to the instantiated operator which you need in order to define the port connections\n\
                     and connect the objects to ports.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript\n\
var op = XSIFactory.CreateObject( \"MyCustomOperator\" );\n\
\n\
// C++\n\
Factory factory = Application().GetFactory();\n\
CustomOperator op( factory.CreateObject(L\"MyCustomOperator\") );</pre></div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-004F\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-9862D107-B8FB-4F6B-8663-6C8C68A1BFCF\"></a></span>Related Links\n\
                     </h4> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D5060A4-7430-4015-A257-9E6C9258516C\"></a></span>Object Model: <a href=\"#!/url=./si_om/XSIFactory.CreateObject.html\">XSIFactory.CreateObject</a></p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-3F3B6412-FFDE-49F1-99BA-D2CB3084947B\"></a></span>C++ API: <a href=\"#!/url=./si_cpp/classXSI_1_1Factory.html#CreateObject\">Factory::CreateObject</a></p> \n\
                        </li>\n\
                     </ul> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0050\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F7A1DE7A-4B50-4608-8273-CE3503DDB6F9\"></a></span>Defining Port Connections\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-541FE97F-7B35-4CE1-A8C4-F5CC5B101F14\"></a></span>For static operators you can define the port connections with a set of methods and\n\
                     functions that require the objects to be connected to exist. You can define an input\n\
                     port (<em class=\"strong\">AddInputPort</em>), an output port (<em class=\"strong\">AddOutputPort</em>), or both at the same time (<em class=\"strong\">AddIOPort</em>, for example, for deformer operators).\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript\n\
op.AddInputPort( \"sphere.polymsh.cls.Point\" );\n\
\n\
// C++ API\n\
CRef obj;\n\
obj.Set( \"sphere.polymsh.cls.Point\" );\n\
op.AddIOPort( obj );</pre></div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0051\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-B5A2C5A1-6241-4C88-BF8A-F78B6BACE44F\"></a></span>Related Links\n\
                     </h4> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-67487A7D-CFCC-477C-8C4A-7EECFCFDDCC5\"></a></span>Object Model: <a href=\"#!/url=./si_om/CustomOperator.AddInputPort.html\">CustomOperator.AddInputPort</a>, <a href=\"#!/url=./si_om/CustomOperator.AddOutputPort.html\">CustomOperator.AddOutputPort</a>, <a href=\"#!/url=./si_om/CustomOperator.AddIOPort.html\">CustomOperator.AddIOPort</a></p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2F46C420-F00E-4327-A394-F202D91FE4E9\"></a></span>C++ API: <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddInputPort\">CustomOperator::AddInputPort</a>, <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddOutputPort\">CustomOperator::AddOutputPort</a>, <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddIOPort\">CustomOperator::AddIOPort</a></p> \n\
                        </li>\n\
                     </ul> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0052\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C7D03030-BD90-4073-87E8-288D99194319\"></a></span>Connecting Objects to Ports\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-44D27CD0-2660-4D45-B9E5-5B8961903590\"></a></span>You can use the <em class=\"strong\">Connect</em> method to finish the port connections. In the case of static operators, it is usually\n\
                     not necessary to pass in any arguments for the connection specification (such as an\n\
                     object or a <a href=\"#!/url=./files/cnxset.htm\">connection set</a>) because the explicit object needed was specified when the port connections were\n\
                     defined.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0053\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-F05BF32D-F646-48C5-AEAB-F306DE026737\"></a></span>Related Links\n\
                     </h4> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-97F59A52-ED51-474E-B17D-D3433A8B6D66\"></a></span>Object Model: <a href=\"#!/url=./si_om/Operator.Connect.html\">Operator.Connect</a></p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A3FB628-B180-47FB-8D1D-83846A03DE5C\"></a></span>C++ API: <a href=\"#!/url=./si_cpp/classXSI_1_1Operator.html#Connect\">Operator::Connect</a></p> \n\
                        </li>\n\
                     </ul> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0054\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-61DE19F5-769F-47A1-9D35-B1EB36E4DB1F\"></a></span>Dynamic\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3F1FD965-2B5E-4651-9ABE-A0EF25E905A2\"></a></span>Applying dynamic operator is very similar to <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-004D\">applying static operators manually</a></span>, but you also have to add port groups before declaring port connections. In addition,\n\
                  you need to add ports by specifying the class ID instead of explicit objects since\n\
                  your connection objects may not exist yet. Finally, the ConnectToGroup method allows\n\
                  you to add instances of port objects to groups, thereby allowing you to connect in\n\
                  a truly dynamic way.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0055\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-37E65728-1D75-45FB-BA23-6E41B1C93C84\"></a></span>Adding Port Groups\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A324A47-C729-4DE1-92AE-A3F8CF4E6E24\"></a></span>The AddPortGroup method allows you to specify how many objects can be connected to\n\
                     within this port group. By default, there is only one port connection allowed, but\n\
                     you can specify a valid range, as in the case of an operator that averages between\n\
                     at least two and no more than ten inputs:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
myOp.AddPortGroup( \"Inputs\", 2, 10, \"MyPolygonFilter\" );</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-16F3D90E-614A-4ECC-BEFF-5080AD28D7CB\"></a></span>This method also allows you to specify a filter to validate any input object to connect\n\
                     to the group.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0056\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-662CD30C-5492-43EE-894B-18FC391D647A\"></a></span>Related Links\n\
                     </h4> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-8854E871-9AEA-4D1D-8A2F-1E4218FAAC0E\"></a></span>Object Model: <a href=\"#!/url=./si_om/CustomOperator.AddPortGroup.html\">CustomOperator.AddPortGroup</a></p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E4D06A0-D9E3-4008-83B7-8CFE233059F5\"></a></span>C++ API: <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddPortGroup\">CustomOperator::AddPortGroup</a></p> \n\
                        </li>\n\
                     </ul> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0057\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1433BAA8-A9A2-4BCE-9923-BE4F57EEDE33\"></a></span>Declaring Potential Port Connections\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD508D60-5D49-4F1C-BC66-F2C26246790F\"></a></span>The methods used to <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0050\">define static port connections manually</a></span> need an explicit path to an object that already exists, whereas dynamic connections\n\
                     need to declared in a more hypothetical manner. For this reason, the <a href=\"#!/url=./si_om/CustomOperator.html\">CustomOperator</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html\">CustomOperator</a> also provides methods that allow you to add ports by class ID:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">myOp.AddInputPortByClassID( siPrimitiveID, \"inputprim\", 1 /* <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> of input port group */ );</pre></div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0058\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-CB4A31D0-76B4-4D21-AF80-AD3ADC8160FE\"></a></span>Related Links\n\
                     </h4> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF939B16-1EB2-4438-8BF3-8D4D6A919C7D\"></a></span>Object Model:\n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B59BDC6-5810-4B22-8AD1-A1B4874862AD\"></a></span> <a href=\"#!/url=./si_om/CustomOperator.AddInputPortByClassID.html\">CustomOperator.AddInputPortByClassID</a> \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-D9EA0F10-748B-4DF3-92B6-4FD0FB7D109F\"></a></span> <a href=\"#!/url=./si_om/CustomOperator.AddOutputPortByClassID.html\">CustomOperator.AddOutputPortByClassID</a> \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-0985328E-A2F3-469C-80CA-9A24CB1DA29B\"></a></span> <a href=\"#!/url=./si_om/CustomOperator.AddIOPortByClassID.html\">CustomOperator.AddIOPortByClassID</a> \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-BF188912-0CF3-4D9B-92B3-2D98FFB9A4DD\"></a></span>C++ API:\n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-9092D8B8-2AB0-4A6F-858F-5CFB50588C54\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddInputPortByClassID\">CustomOperator::AddInputPortByClassID</a> \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-05448DFA-D3FC-41A3-BA7E-53626A7E0CCB\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddOutputPort\">CustomOperator::AddOutputPort</a> \n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-5908F361-88D1-48F2-AD5D-F47E9B4A832C\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddIOPortByClassID\">CustomOperator::AddIOPort</a> \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </li>\n\
                     </ul> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0059\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-DD58B4EC-0BFD-4F23-BF26-3DF61726B21C\"></a></span>Dynamically Connecting To Groups\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C77EFFF-9323-4D10-A885-EC92780373AB\"></a></span>The ConnectToGroup method allows you to add objects to a port group at any time after\n\
                     it is defined. However, this method can only be used on a port group containing a\n\
                     single port, and the object passed in the <em class=\"strong\">Object</em> argument must be a specific node (that is, a <a href=\"#!/url=./si_om/KinematicState.html\">KinematicState</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1KinematicState.html\">KinematicState</a> or <a href=\"#!/url=./si_om/Primitive.html\">Primitive</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Primitive.html\">Primitive</a> rather than an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html\">X3DObject</a>):\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">newOp.ConnectToGroup( 0, mySphere.Kinematics.Local );</pre></div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-005A\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-7EC4802A-EF02-4804-BE72-63023430296A\"></a></span>Related Links\n\
                     </h4> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-7E44B6AC-A585-4DA3-988C-D3C2107C3B87\"></a></span>Object Model: <a href=\"#!/url=./si_om/Operator.ConnectToGroup.html\">Operator.ConnectToGroup</a></p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F61D4A02-1584-4E9B-A878-F9B664B4BC85\"></a></span>C++ API: <a href=\"#!/url=./si_cpp/classXSI_1_1Operator.html#ConnectToGroup\">Operator::ConnectToGroup</a></p> \n\
                        </li>\n\
                     </ul> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-005B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-43D837A9-A111-4580-8160-6E47D39501FF\"></a></span>Examples of Applying Custom Operators\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-22ADB84B-4913-4652-87EE-0EDFA197B0B1\"></a></span>These examples demonstrate a number of approaches for applying custom operators:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3EB31154-6AEC-47C4-9FC7-103C0738E023\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-005C\">JScript Example: Applying a Static Operator (Manual)</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6FC81713-2537-4585-BF8A-5FD91C3E6091\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-005D\">C++ Example: Applying a Static Operator (Automatic)</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6E6731D7-EB91-40F5-9FEE-56D99B8A9486\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-005E\">JScript Example: Applying an Operator Before Port Targets Exist</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-08F46543-72FA-4F66-B774-85C1FF305A9F\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-005F\">C++ Example: Applying a Dynamic Operator</a></span> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-005C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E5FF1C2E-38C1-4247-831B-CE8E0CB5EF74\"></a></span>JScript Example: Applying a Static Operator (Manual)\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF275CAC-886F-4E4E-A018-37BE88140ECB\"></a></span>This example is extracted from the code generated by the SDK Operator Wizard. Note\n\
                     that because the ports are specified explicitly, no parameters need to be passed to\n\
                     the <a href=\"#!/url=./si_om/Operator.Connect.html\">Operator.Connect</a> or Operator::Connect method (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-005D\">C++ Example: Applying a Static Operator (Automatic)</a></span> for an <em class=\"mild\">automatic</em> version of this example).\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Instantiate the operator\n\
var newOp = XSIFactory.CreateObject(\"MyOp\");\n\
\n\
// Specify the ports to hook up\n\
newOp.AddOutputPort(\"sphere.polymsh\");\n\
newOp.AddInputPort(\"sphere.polymsh\");\n\
\n\
// Connect the operator\n\
newOp.Connect();</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-005D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E0F0C357-B619-4FC1-9698-7C4D75288724\"></a></span>C++ Example: Applying a Static Operator (Automatic)\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0413BADF-089D-4DFE-BC69-CA0AC42EE799\"></a></span>This snippet is similar to the wizard-generated code in <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_ApplyingOperatorsinXSI.htm#WS3FA09F770E40D640AFBEE3CB2D491049-005C\">JScript Example: Applying a Static Operator (Manual)</a></span> but uses the AddCustomOp function which combines the three steps (instantiate, declare\n\
                     ports, connect) into one. The JScript version and this one are examples of <em class=\"mild\">static</em> operators, so the port connections must already exist.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Output of the operator will be this mesh\n\
CRef obj;\n\
obj.Set(L\"sphere.polymsh\");\n\
Primitive prim(obj);\n\
\n\
// AddCustomOp takes an array of inputs\n\
CRefArray inputs(3);\n\
\n\
// Get the objects to which the operator will be connected\n\
inputs[0].Set(L\"grid.polymsh\");\n\
inputs[1].Set(L\"null.kine.global\");\n\
inputs[2].Set(L\"null2.kine.global\");\n\
\n\
// Apply the custom operator\n\
prim.AddCustomOp(\"MyOp\", inputs);</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F03F78E1-3ABC-4B4C-8C27-1F4292A8EA38\"></a></span>Check out how the equivalent code in JScript using the <a href=\"#!/url=./si_cmds/AddCustomOp.html\">AddCustomOp</a> command takes only one line:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
AddCustomOp(\"MyOp\", \"sphere.polymsh\", \n\
\"grid.polymsh,null.kine.global,null2.kine.global\");</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-005E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-050BFE6F-C3D8-4077-8277-C7D8DF8DAFDC\"></a></span>JScript Example: Applying an Operator Before Port Targets Exist\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF0BDC02-8519-489A-8A81-E5960134DFEA\"></a></span>In this example the operator ports are declared before any matching objects actually\n\
                     exist in the scene, thanks to the AddIOPortByClassID method, which simply declares\n\
                     what kind of object to expect to connect to the port, rather than the exact object.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Instantiate the operator\n\
var newOp = XSIFactory.CreateObject( \"MyOp\" );\n\
\n\
// Specify the ports to hook up, this time using AddXXXPortByClassID which\n\
// allows you to add the port without specifying an existing object to connect\n\
newOp.AddIOPortByClassID( siKinematicStateID );\n\
\n\
// ...\n\
\n\
// The operator connections are <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> up before the target object exists\n\
var sph = Application.ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
newOp.ConnectToGroup( 0, sph.Kinematics.Local );</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-005F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-937D89F0-4E67-4F90-9063-071FB472CDB5\"></a></span>C++ Example: Applying a Dynamic Operator\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D89E5F37-AD81-46AA-8F7D-4307419B6CE6\"></a></span>This example demonstrates how to apply an operator with a variable number of objects\n\
                     connected by adding a port group that can accept between 2 and 10 connections and\n\
                     defining the ports using only a class ID.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Instantiate the operator\n\
CustomOperator newOp = Application().GetFactory().CreateObject( L\"MyOp\" );\n\
\n\
// Define an input port group that can accept at least 2 and up to 10 connections\n\
newOp.AddPortGroup( L\"Output\" );\n\
newOp.AddPortGroup( L\"Inputs\", 2, 10 );\n\
\n\
// Specify the ports to hook up, using AddXXXPortByClassID which allows you to\n\
// add the port without specifying an existing object to connect\n\
newOp.AddOutputPortByClassID( siClusterPropertyID, L\"\", 0 /* output port group */ );\n\
newOp.AddInputPortByClassID( siClusterPropertyID, L\"\", 1 /* input port group */ );\n\
\n\
// ...\n\
// When it\'s time to connect a new port instance to the operator\n\
CRef wp; CRef out_instance;\n\
wp.Set( L\"sphere.polymsh.cls.Point.Weight_Map\" );\n\
newOp.ConnectToGroup( 1, wp, out_instance );\n\
\n\
// etc.</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";