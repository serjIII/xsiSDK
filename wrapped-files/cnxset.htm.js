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
      <meta name=\"topicid\" content=\"GUID-E8C57674-61F3-4BD8-AEC5-A98E4CF70ABE\" />\n\
      <meta name=\"indexterm\" content=\"connection sets\" />\n\
      <meta name=\"indexterm\" content=\"operators: connection sets\" />\n\
      <meta name=\"indexterm\" content=\"connectionset\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>About Connection Sets</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E8C57674-61F3-4BD8-AEC5-A98E4CF70ABE\"></a></span><div class=\"head\">\n\
            <h1> About Connection Sets</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8392C4CE-5036-4AC0-9E4F-06B00A5EB665\"></a></span>When you connect an operator to the scene graph (the set of data nodes in the Softimage\n\
               scene), that operator requires a special set of input and output ports. For example,\n\
               the only valid input port to connect to the Loft operator is on a NURBS curve (not\n\
               a point, not a mesh, etc.). A ConnectionSet uses a specialized string syntax to delimit\n\
               groups you are specifying as input.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8322DF1D-8AE3-46DF-A3B1-956CDB1D0042\"></a></span>A connection set is identified with a string expression containing a list of groups\n\
               separated with a semi-colon (<span class=\"code\" translate=\"no\">;</span>). Inside each group is a list of objects or components separated with a comma (<span class=\"code\" translate=\"no\">,</span>). A set is specified either with group or port objects.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-109662C6-3F9C-4A9B-8F86-F5A6CEDCFE5C\"></a></span>A <em class=\"mild\">group-level</em> connection set is a high-level connection (implicit) specification whereas a <em class=\"mild\">port-level</em> set (explicit) provides the actual objects that are connected on the operator\'s ports.\n\
               In other words, group-level connection sets can accept objects and automatically resolve\n\
               the underlying port connections, whereas port-level connection specify the exact node\n\
               connection point for each port. For example, the Lattice operator takes a connection\n\
               set containing the following groups and ports:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-26A840B4-7D0A-4980-9277-97F6088ABA1A\"></a></span><p class=\"table-heading\">Groups</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D0FC067B-9F83-4B1F-A16C-0C9B3451366C\"></a></span><p class=\"table-heading\">Ports</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-33B84AA1-C88A-4250-A04F-1CF0BBD5B126\"></a></span><p class=\"table-heading\">Example</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\" rowspan=\"6\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B9E3633-D34F-432E-912A-B531FF85C23D\"></a></span><p class=\"table-body\">0 (the object to be deformed)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-67C2255C-3DC2-4492-AC28-69B3DA638AE7\"></a></span><p class=\"table-body\">the object\'s primitive</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B94E3CB5-9ED0-4067-89E1-FB2BE4DC8096\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">sphere.polymsh</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5ABBD854-356B-4CE7-B766-10EB448E66DE\"></a></span><p class=\"table-body\">the object\'s global kinematics</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-18A5EB33-DFDF-4489-9BE4-B8B28560EB03\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">sphere.kine.global</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-49416503-FBF4-4EFA-AE3C-BBFD1C026EA3\"></a></span><p class=\"table-body\">the object\'s global kinematics</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-03C0AF0E-A0B6-4022-8617-4B37B150D360\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">sphere.kine.global</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3957525B-133E-4475-82F2-C458C2F92566\"></a></span><p class=\"table-body\">(optional) a list of subcomponents on the object (such as a point cluster)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1B95C444-E23D-4731-94B5-E220917ED8C4\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">sphere.polymsh.cls.point</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4E5599F1-F5D5-40F9-880B-3D5EF9AD9B8B\"></a></span><p class=\"table-body\">(optional) a weightmap on the object</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-C27EDA31-EED6-4B66-BDB3-13F166F75743\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">sphere.polymsh.cls.WeightMapCls.Weight_Map</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E5B3A073-8BE7-4B36-BD4A-9CBC2DF2F17F\"></a></span><p class=\"table-body\">the object\'s primitive</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-50A716AB-DFAE-41FC-8455-018B994A953D\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">sphere.polymsh</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\" rowspan=\"2\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1A75077A-5319-4BCA-98B5-CB0CEDEE3F73\"></a></span><p class=\"table-body\">1 (the lattice deformer)</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F8F5FD17-7FAD-43A2-96B3-F65A391F3AE8\"></a></span><p class=\"table-body\">the lattice\'s implicit primitive</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0EE758A2-2C22-4BD9-881A-AEFF7F36A737\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">lattice.lattice</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0084500F-9C50-49A1-8196-357447684410\"></a></span><p class=\"table-body\">the lattice\'s global kinematics</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-24741DE0-6412-4A1B-8B02-B9D477D71013\"></a></span><p class=\"table-body\"> <span class=\"code\" translate=\"no\">lattice.kine.global</span> \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C32B6AD6-FE3D-4C5C-973E-A5CF0C0BDF02\"></a></span>The syntax for group-level and port-level connection sets differs slightly in that\n\
               you indicate that you are explicitly specifying port-level connections in the connection\n\
               set with square brackets (<span class=\"code\" translate=\"no\">[</span> and <span class=\"code\" translate=\"no\">]</span>) inside the double-quotation marks.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-6CCB3B56-CAA7-4CC9-9D9D-952C65C1509A\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-19BD77E2-585F-409D-BA34-392B2349A129\"></a></span>The <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> command supports only group-level connection sets. To specify a port-level connection\n\
                     sets, use the <a href=\"#!/url=./si_cmds/ApplyOperator.html\">ApplyOperator</a> command.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB74692B-A179-4C19-B5C6-03975FC4444D\"></a></span>For example, to explicitly specify the port connections you would use this connection\n\
               set string:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"[sphere.polymsh, sphere.kine.global, sphere.kine.global, , , sphere.polymsh; lattice.lattice, lattice.kine.global]\"\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8936CA8-2764-4265-B276-BF0BEBB53341\"></a></span>... and to leave the specific connections up to Softimage to resolve you would use\n\
               this connection set string:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"sphere;lattice\"\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-000C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2FAB80C2-2A14-48A1-8491-55C4B41EE3F8\"></a></span>VBScript Example: Group-level connection sets\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D36755F-632E-4DC6-806A-A6DA8BE02268\"></a></span>Many of the envelope commands, such as <a href=\"#!/url=./si_cmds/SIApplyFlexEnv.html\">SIApplyFlexEnv</a>, use group-level connection sets to pass the envelope object in the main group of\n\
                  the connection set and the bones and effectors in the secondary group:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Build a simple Envelope with no picking required.\n\
CreatePrim \"Sphere\", \"MeshSurface\"\n\
Create2DSkeleton -0.019, 3.703, 0.000, -0.795, 0.000, 0.000, 0.000, 0.000, 1.000, 1\n\
AppendBone , 0.000, -3.509, 0.000\n\
SelectObj \"sphere\", , True\n\
SIApplyFlexEnv \"sphere;bone,bone1,eff\", False, False\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1205D54B-AB54-46EB-AAB8-1BC899A4465A\"></a></span>The connection set is divided into main and secondary groups using the semi-colon\n\
                  (<span class=\"code\" translate=\"no\">;</span>), and the members of each group are delimited using the comma (<span class=\"code\" translate=\"no\">,</span>), so in the case of <span class=\"code\" translate=\"no\">sphere;bone,bone1,eff</span>, the first group (\'<span class=\"code\" translate=\"no\">sphere</span>\') represents the envelope, and the second group (\'<span class=\"code\" translate=\"no\">bone,bone1,eff</span>\') represents the items to be enveloped.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-000D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-823D4B60-B67A-4D9F-AFBB-F32EA6E37B3F\"></a></span>VBScript Example: Port-level connection sets\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F24B315-E10A-40E5-A6D1-716CB81CF44F\"></a></span>The Lattice (deform) operator is an operator for which you can specify a port-level\n\
                  connection set instead of a group-level connection set, provided you use the <a href=\"#!/url=./si_cmds/ApplyOperator.html\">ApplyOperator</a> command. Here is an example of how to use this to connect a lattice to a primitive\n\
                  and then to a cluster:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
GetPrimLattice(null, null, null, null, null);\n\
CreatePrim(\"Sphere\", \"MeshSurface\", null, null);\n\
SelectGeometryComponents(\"sphere.pnt[9-29]\");\n\
CreateCluster(null);\n\
SelectGeometryComponents(\"lattice.pnt[(0,2,0),(0,2,1),(0,2,2),(0,2,3),(0,2,4),(0,3,0),(0,3,1),(0,3,2),(0,3,3),(0,3,4),(0,4,0),(0,4,1),(0,4,2),(0,4,3),(0,4,4),(1,2,0),(1,2,1),(1,2,2),(1,2,3),(1,2,4),(1,3,0),(1,3,1),(1,3,2),(1,3,3),(1,3,4),(1,4,0),(1,4,1),(1,4,2),(1,4,3),(1,4,4),(2,2,0),(2,2,1),(2,2,2),(2,2,3),(2,2,4),(2,3,0),(2,3,1),(2,3,2),(2,3,3),(2,3,4),(2,4,0),(2,4,1),(2,4,2),(2,4,3),(2,4,4),(3,2,0),(3,2,1),(3,2,2),(3,2,3),(3,2,4),(3,3,0),(3,3,1),(3,3,2),(3,3,3),(3,3,4),(3,4,0),(3,4,1),(3,4,2),(3,4,3),(3,4,4),(4,2,0),(4,2,1),(4,2,2),(4,2,3),(4,2,4),(4,3,0),(4,3,1),(4,3,2),(4,3,3),(4,3,4),(4,4,0),(4,4,1),(4,4,2),(4,4,3),(4,4,4)]\");\n\
Scale(null, 1, 0.222437137330754, 1, siRelative, siLocal, siObj, siXYZ, null, null, null, null, null, null, null, 0);\n\
Translate(null, 0, -1.17562305635889, 0, siRelative, siLocal, siObj, siXYZ, null, null, null, null, null, null, null, null, null, 0);\n\
\n\
SetValue(\"Context.constructionmode\", siConstructionModeModelling);\n\
\n\
// This is the standard Group Level way of calling ApplyOp\n\
// It applies the lattice on the sphere point cluster\n\
ApplyOp(\"Lattice\",\"sphere.polymsh.cls.Point;lattice\");\n\
\n\
// This does exactly the same thing, but you can specify each and every port you want to connect\n\
ApplyOperator(\"Lattice\",\"[sphere.polymsh,sphere.kine.global,sphere.kine.global,sphere.polymsh.cls.Point,,sphere.polymsh;lattice.lattice,lattice.kine.global]\");\n\
\n\
// Set the ContructionHistory mode to Animation\n\
SetValue(\"Context.constructionmode\", siConstructionModeAnimation);\n\
\n\
// It applies the lattice on the whole sphere, standard portgroup level\n\
ApplyOp(\"Lattice\",\"sphere.polymsh.cls.Point;lattice\");\n\
\n\
// This does exactly the same thing, but you can specify each and every port you want to connect\n\
ApplyOperator(\"Lattice\",\"[sphere.polymsh,sphere.kine.global,sphere.kine.global,sphere.polymsh.cls.Point,,;lattice.lattice,lattice.kine.global]\");\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3C096769-CAD9-4516-B6A1-D0087AC91EEF\"></a></span>For a complete list of all operators and the details of their connection sets, see\n\
                  <a href=\"#!/url=./si_cmds/OpPreset.html\">Operator Presets</a>.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-000E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-87A90000-B320-44F0-8B3F-8ABD8432C729\"></a></span>ConnectionSets and the Dictionary Object\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-901F57DD-3E7A-4889-A01B-574F8E990D69\"></a></span>The SDK provides a complete set of information about the connection set for each operator.\n\
                  You can query the <a href=\"#!/url=./si_om/Dictionary.html\">Dictionary</a> object directly in the Script Editor to get the complete set of information on each\n\
                  operator, or a list of all operators matching their family name (<a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>):\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application.LogMessage Dictionary.Info( \"FlexibleEnvelope\" )\n\
\n\
\' Output:\n\
\'INFO : FlexibleEnvelope\n\
\'Families = Operators, DeformOperators\n\
\'Number Of Groups = 2\n\
\'\n\
	\'Group(0)\n\
	\'Flags = E3DOPGROUP_MAIN\n\
	\'Bounds = 1..1\n\
	\'Filter = components for deforms\n\
	\'Pick Prompt = Deformation Value\n\
\'\n\
	\'Group(1)\n\
	\'Flags =&lt;undefined&gt;\n\
	\'Bounds = 1..N\n\
	\'Filter = &lt;undefined&gt;\n\
	\'Pick Prompt = Skeleton Object\n\
\'Pick Node\n\
\'Pick Branch\n\
\'\n\
\'</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";