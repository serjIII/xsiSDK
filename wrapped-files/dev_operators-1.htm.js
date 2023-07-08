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
      <meta name=\"topicid\" content=\"GUID-06C62316-D788-4DC2-BB40-3F9B512A5111\" />\n\
      <meta name=\"indexterm\" content=\"operators: defined\" />\n\
      <meta name=\"indexterm\" content=\"operators: classification\" />\n\
      <meta name=\"indexterm\" content=\"operators: generators\" />\n\
      <meta name=\"indexterm\" content=\"generators\" />\n\
      <meta name=\"indexterm\" content=\"operators: topology\" />\n\
      <meta name=\"indexterm\" content=\"topology operators\" />\n\
      <meta name=\"indexterm\" content=\"operators: deformers\" />\n\
      <meta name=\"indexterm\" content=\"deformations: operators\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is an Operator?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-06C62316-D788-4DC2-BB40-3F9B512A5111\"></a></span><div class=\"head\">\n\
            <h1> What is an Operator?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBE7A150-2B87-4BA2-8DBE-F83F4A9E2103\"></a></span>Operators are calculators or functions that manipulate (deform) or generate data.\n\
            They are connected to objects or properties via any number of input and output ports\n\
            and may also use one or more parameters. Operators read data from their input port(s),\n\
            taking any parameter values into account, perform the specified calculation and then\n\
            write the result onto their output port(s) using the operator\'s Update() method. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-6678DF15-EC5E-4977-9379-688815F89ADA\"></a></span>Operator ports are organized into groups, for example, the Loft operator takes a main\n\
            group of at least two input ports connected to NURBS curves and a secondary group\n\
            consisting of only one output port (the new NURBS mesh generated from the input curves).\n\
            Using one port group for the curves allows multiple ports of the same type to be passed\n\
            in as input to the operator. These groupings are generally expressed as connection\n\
            sets (see <span class=\"char_link\"><a href=\"#!/url=./files/cnxset.htm\">About Connection Sets</a></span>), which essentially describe the operator\'s requirements when connecting an operator\n\
            to data nodes in the scene. These connection sets can be found in the <a href=\"#!/url=./si_cmds/OpPreset.html\">Operator Presets</a> reference. \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3DFE7D62-12AB-46AF-9FE2-07D5F3C16105\"></a></span> Types of Operators\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9D82CE5C-0AC5-46E2-AC89-09571083C0EB\"></a></span>Operators are divided into several categories, based on the type of information they\n\
               change: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"UL_915E2DC0B4194153AF7FF0780DAF9A3F\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2681A3A7-D1FB-42FC-89FA-CC2ADF93AAEE\"></a></span> <em class=\"strong\">Geometry Operators</em>, which fall into three sub-categories: <span class=\"char_link\"><a href=\"#!/url=./files/dev_operators-1.htm#WS77221A8DAB94FA47A70B11D9A7AC166B-0005\">Generator Operators</a></span>, <span class=\"char_link\"><a href=\"#!/url=./files/dev_operators-1.htm#WS77221A8DAB94FA47A70B11D9A7AC166B-0006\">Topology Operators</a></span> and <span class=\"char_link\"><a href=\"#!/url=./files/dev_operators-1.htm#WS77221A8DAB94FA47A70B11D9A7AC166B-0007\">Deformer Operators</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4022F8BA-A9DE-400D-A43B-E5FDDBD84B25\"></a></span> <em class=\"strong\">Simulation Operators</em> (for RigidBody, Particles, etc.)—see <a href=\"#!/url=./si_cmds/SimulationOperatorPresets.html\">Simulation Operator Presets</a> and <a href=\"#!/url=./files/dev_simulation_ICENodes.htm\">ICE Node Particles</a> for more information about working with Simulation in the Softimage SDK. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5041882B-4CC2-4B33-B116-0CC81E8EB52A\"></a></span>To learn how to create your own FxOperator, see <a href=\"#!/url=./files/cus_queries_PackagingSpreadsheetQueries.htm\">Custom Fx Operators</a>. \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-411FFEDA-7358-4590-8797-02D83668AE0C\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-523EDAE9-8E67-4501-A3CC-45DCC2A64E78\"></a></span>Constraints are similar to operators from a user perspective in that they connect\n\
                           manage data between scene elements where one element is affected by the data of another.\n\
                           However, the way they manage this read-write relationship is internally very different\n\
                           from how operators manage it and as such they support their own interface (see the\n\
                           reference documentation for the <a href=\"#!/url=./si_om/Constraint.html\">Constraint</a> object). \n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-8EB7E0D1-A651-4710-88C3-4E469DAC2838\"></a></span>For more information on working with Constraints in the Softimage SDK, see <a href=\"#!/url=./files/dev_Constraints.htm\">Constraints</a>. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </li>\n\
            </ul> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-75EC1AE5-C737-4882-A06A-D68EAB58B5B0\"></a></span>You can also build your own custom operators to perform tasks similar to the types\n\
               listed above or special tasks, such as controlling a particle simulation or populating\n\
               a UserDataBlob or a Custom Property, etc. For more information, see <a href=\"#!/url=./files/cus_ops.htm\">Custom Operators</a>. \n\
            </p> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-0005\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-D55A05AA-E996-4A2F-B6D7-A4758D7091BA\"></a></span> Generator Operators\n\
               </h3>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E5851E43-972F-4A88-96A9-DC22941A3A49\"></a></span> <em class=\"strong\">Generators</em> create an object. These include most of the operators available from the <span class=\"MenuCascade\" id=\"GUID-FA00FEDD-0D9B-445B-BB8C-2C8CBFFBEC33\">Get</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-7193613E-E496-44E4-A51F-EA3C97701AD2\">Primitive</span> menu, as well as those under <em class=\"strong\">Create</em>. Examples include Geometry (primitive), CurveCreation, Loft, NURBS to Mesh, and so\n\
                  on. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-539EDF80-2770-4028-B60F-1C4158E7CA8E\"></a></span>For example, the built-in <em class=\"mild\">Loft</em> operator takes two or more NURBS curves as input and creates a new NURBS mesh between\n\
                  them. Some of the options that are available on the Loft operator include closing\n\
                  the mesh in U and/or V and changing the subdivisions in U and V. See <a href=\"#!/url=./si_cmds/GeneratorOperatorPresets.html\">Generator Operator Presets</a> for a full list of Generator operators and their preset reference. \n\
               </p> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-0006\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-29B3E309-5C00-40AF-85A0-18E024CDDD08\"></a></span> Topology Operators\n\
               </h3>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-983857BA-B2A3-4F3C-B7C9-188A3AFC59C7\"></a></span> <em class=\"strong\">Topology operators</em> change the geometry, for example, by adding or removing components. These include\n\
                  most of the operators available under <em class=\"strong\">Modify</em>. Examples include Curve Shift, Insert Surface Knot, Subdivide Polygon, and so on.\n\
                  \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-161754B5-0066-4AEF-B5C9-2CB1C7EAB0F0\"></a></span>For example, the built-in <em class=\"mild\">SubividePolyOp</em> operator takes one or more polygons as input, split the polygon according to a pattern\n\
                  specified by the user (triangles, diamond, X, or plus) and iterated (multiplied) according\n\
                  to the number specified by the user. See <a href=\"#!/url=./si_cmds/TopologyOperatorPresets.html\">Topology Operator Presets</a> for a full list of Topology operators and their preset reference. \n\
               </p> \n\
            </div> \n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS77221A8DAB94FA47A70B11D9A7AC166B-0007\"></a></span> \n\
               <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F640DB4C-F682-446F-BFA6-1C35909C1DDF\"></a></span> Deformer Operators\n\
               </h3>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6CD0CFFE-EDF5-4016-9889-E83320F8A9FB\"></a></span> <em class=\"strong\">Deformations</em> modify the shape of an object by changing the positions of its points. These include\n\
                  the operators available from the <span class=\"MenuCascade\" id=\"GUID-FBCB0E69-E3EA-4CC8-9140-6036319F0B08\">Deform</span> menu, as well as the Move Component and Envelope operators. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-67245684-0B3E-4161-A1F1-9BA16E7EF100\"></a></span>For example, the built-in <em class=\"mild\">Twist</em> operator takes an object as input, calculates new positions for the object\'s geometry\n\
                  and then writes this new data back to the object. This operator provides a number\n\
                  of options for the user to customize the twist deformation (for example, adjusting\n\
                  the angle of deformation). See <a href=\"#!/url=./si_cmds/DeformOperatorPresets.html\">Deform Operator Presets</a> for a full list of Deformer operators and their preset reference. \n\
               </p> \n\
            </div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";