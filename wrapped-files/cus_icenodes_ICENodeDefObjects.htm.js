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
      <meta name=\"topicid\" content=\"GUID-B7F08F23-1042-4C6F-A729-8EAE208E3E98\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>ICENodeDef Objects</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B7F08F23-1042-4C6F-A729-8EAE208E3E98\"></a></span><div class=\"head\">\n\
            <h1>ICENodeDef Objects</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1CE97CF-D392-4379-B99E-79C538E8C355\"></a></span> <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a> are configured with an <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a> object which provides the API with definitions for the input and output ports (<a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#AddInputPort\">ICENodeDef::AddInputPort</a>, <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#AddOutputPort\">ICENodeDef::AddOutputPort</a>), groups (<a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#AddPortGroup\">ICENodeDef::AddPortGroup</a>) and to specify the threading model (<a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#PutThreadingModel\">ICENodeDef::PutThreadingModel</a>, <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#GetThreadingModel\">ICENodeDef::GetThreadingModel</a>).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EB39CE37-2D19-4BCF-9114-725D8E468609\"></a></span>Each custom ICENode has at least one output and zero or more input ports. Each port\n\
               must be configured for the specific data it needs to read or write to. <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodePort.html\">ICENodePorts</a> need to be defined with a group, which can contain an unlimited number of ports.\n\
               You usually want to regroup ports in the same logical group but nothing prevents you\n\
               from defining one port per group. Input and output ports cannot be mixed in the same\n\
               group.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-000C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5A0E85CC-BB57-4548-8761-C59187A1B23D\"></a></span>Port Types\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7D799CEF-6734-4C31-9611-29AF2E826090\"></a></span>Input and output ports use a strong typing system defined with a 3-category type set:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-39110220-1B23-4FE9-854F-A3908618C7DC\"></a></span> <em class=\"strong\">Data type</em> \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8DC7DD95-8375-49D4-B13E-4C0318385568\"></a></span>Type of data the port can support. See <a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataType</a> for a list of available data types.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-14166171-5F8F-4FAD-B44C-5B09B608F746\"></a></span> <em class=\"strong\">Structure type</em> \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCCAA58E-9675-4860-9A82-F51DE8BBF7CF\"></a></span>The way the data is stored when passed to the <a href=\"#!/url=./si_cmds/cb_ICENode_Evaluate.html\">Evaluate</a> callback. See <a href=\"#!/url=./si_om/siICENodeStructureType.html\">siICENodeStructureType</a> for a list of available structure types.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FC9631A-88B1-4D1D-A84B-3A5099C236E5\"></a></span> <em class=\"strong\">Context type</em> \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-64AF55CA-3953-474A-A057-3B7C9221CE49\"></a></span>Specifies the elements on which the data is evaluated. See <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextType</a> for a list of available context types.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F43EF516-B465-44C0-9C77-6D7595683591\"></a></span>The type of a port is specified with a triple value set, one for each category.For\n\
                  example:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// single array of vector3 elements evaluated for each mesh vertex\n\
siICENodeDataVector3 + siICENodePortStructureSingle + siICENodeEvaluationContextComponent0D:\n\
\n\
// single array of booleans evaluated per object\n\
siICENodePortDataBool + siICENodePortStructureSingle + siICENodeContextSingleton:\n\
\n\
// 2D array of long values evaluated per mesh polygons\n\
siICENodePortDataLong + siICENodePortStructureArray + siICENodeEvaluationContextComponent2D:</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-000D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8E272C7D-B545-4FEE-A28C-06125A134DCC\"></a></span>Custom (User-defined) Data Types\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A45DAD13-9AF3-4C30-8660-E028B71CF807\"></a></span>You can create user-defined types which can be used like any regular data type for\n\
                  defining a custom node port. Custom types are typically used in ICE for propagating\n\
                  user-defined data (such as binary data) through the graph. Custom types can be defined\n\
                  with the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a> object and are identified with a global identifier (string name), a fundamental data\n\
                  type (<a href=\"#!/url=./si_om/siICENodeDataType.html\">siICENodeDataCustomType</a>) and a port connection handle color.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-000E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-63F569F1-770A-472D-89D5-D85EB6BD01D0\"></a></span>Port Polymorphism\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAEE0905-92B8-4053-8480-5CDAF09F117C\"></a></span>In general, port types of a same category can be combined together to allow port polymorphism.\n\
                  Polymorphism refers to a <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> port\'s ability to support multiple types. This is helpful if you need to define general-purpose\n\
                  nodes where the input data is used generically (see Polymorphism handling section\n\
                  for details.). You can assign multiple types to ports by using the bitwise OR operator\n\
                  with <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#AddInputPort\">AddInputPort</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#AddOutputPort\">AddOutputPort</a> methods.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-000F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EC0E344B-59CC-4EE1-AB9D-64903F11E43E\"></a></span>Port Constraint Maps\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD26567D-5667-4B07-BCCF-F4A8E7775144\"></a></span>Constraint maps force multiple input and output ports to use the same data, structure\n\
                  or context types. For instance, mapping can be used to enforce the context of input\n\
                  port A and output port B to <a href=\"#!/url=./si_om/siICENodeContextType.html\">siICENodeContextSingleton</a>. In some scenarios, input ports can also be constrained between each other, as can\n\
                  output ports. You can set up a mapping by linking the port types or structures with\n\
                  an integer: use the same integer for ports that need to match or <span class=\"code\" translate=\"no\">ULONG_MAX</span> if no constraints are required. Port constraints are specified when defining ports\n\
                  with <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#AddInputPort\">AddInputPort</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html#AddOutputPort\">AddOutputPort</a>.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-ADE6C9B2-72EF-4F75-AAE2-4EC65C507CEA\"></a></span>Unique Identifiers\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F4CD565-FCCB-4F1F-A527-272D70920ED7\"></a></span>Ports and groups must be defined with unique identifiers. <a href=\"#!/url=./si_cpp/classXSI_1_1ICENodeDef.html\">ICENodeDef</a> will issue an error if duplicate identifiers are used. A simple way to ensure your\n\
                  identifiers are unique is to use an enum. Using unique IDs also ensures full backward\n\
                  compatibility on ports in case <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> ports or groups are removed or new ones added. Ports can be added or removed without\n\
                  affecting the loading of old scenes saved with a previous version of a specific ICENode.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-A15C6CE0-8763-4D71-8DE5-FDC358991039\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F0DCA56-8A3B-41D1-A146-211D4D4386B3\"></a></span>You must not change the enum identifiers in order to maintain backward compatibility.\n\
                        Once an identifier is used, it must remain intact for the entire life of the <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENode</a> and must not be reused by another port or group. You can only add new identifiers\n\
                        at the end of the enum when new ports are required.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";