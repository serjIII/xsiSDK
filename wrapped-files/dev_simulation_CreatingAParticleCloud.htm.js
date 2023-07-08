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
      <meta name=\"topicid\" content=\"GUID-178F86C2-231C-45C7-92EF-4D879BDC2C9F\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating a Particle Cloud</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-178F86C2-231C-45C7-92EF-4D879BDC2C9F\"></a></span><div class=\"head\">\n\
            <h1>Creating a Particle Cloud</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-98022827-5DDA-4121-956E-FFF49EBE85C3\"></a></span>You can create an emitter by specifying the primitive to use as the basis in the <a href=\"#!/url=./si_cmds/EmitPointsFromObject.html\">EmitPointsFromObject</a> command, which basically sets up a working simulated ICE tree on the new point cloud.\n\
               It takes care of creating the emitter object, adding the ICE tree operator to its\n\
               operator stack, and adding a number of ICE nodes and compounds to store the standard\n\
               settings for particles (age, size, direction, density, etc.). \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE29B8A9-16A9-4AD0-AD72-96472689E61F\"></a></span>Once the tree is set up, you can then start modifying individual values using the\n\
               <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> command with this syntax: \n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
&lt;PointCloud&gt;.&lt;PointCloudPrimitive&gt;.ICETree.&lt;nodename&gt;.&lt;portname&gt;\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3A230B1F-A12E-4715-92EE-2E63617EB539\"></a></span>You can add new basic or compound nodes to the ICE tree by first calling <a href=\"#!/url=./si_cmds/AddICENode.html\">AddICENode</a> or <a href=\"#!/url=./si_cmds/AddICECompoundNode.html\">AddICECompoundNode</a> and then connect it with <a href=\"#!/url=./si_cmds/ConnectICENodes.html\">ConnectICENodes</a>. These techniques are all documented in the following example. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSFAF98299A9AA034DB9B568933D17B312-0005\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3D41D6D9-1590-41AB-978B-70D665200381\"></a></span>JScript Example: To set up a particle system through scripting\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-269E5B32-54FF-4F8B-9DD9-8F1CF2D1B6DC\"></a></span>This example demonstrates how to set up a disc particle emission and then modify that\n\
                  simulated ICE tree by adding a sphere as its goal. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Set up the emitter\n\
NewScene(\"\", false);\n\
var emitter = CreatePrim(\"Disc\", \"MeshSurface\");\n\
var ptcloud = EmitPointsFromObject(\"disc\");\n\
\n\
// Set up goal (make it move around a bit)\n\
var goal = SetMovementOnGoal();\n\
AddICECompoundNode(\"Move Towards Goal\", \"PointCloud.pointcloud.ICETree\");\n\
AddPortToICENode(\"PointCloud.pointcloud.ICETree.port3\", siNodePortDataInsertionLocationAfter);\n\
AddICENode(\"GetDataNode\", \"PointCloud.pointcloud.ICETree\");\n\
ConnectICENodes(\"PointCloud.pointcloud.ICETree.port4\", \"PointCloud.pointcloud.ICETree.Move_Towards_Goal.Execute\");\n\
SetValue(\"PointCloud.pointcloud.ICETree.Move_Towards_Goal.Test_Distance\", 0, null);\n\
SetValue(\"PointCloud.pointcloud.ICETree.SceneReferenceNode[1].reference\", \"sphere\", null);\n\
ConnectICENodes(\"PointCloud.pointcloud.ICETree.Move_Towards_Goal.Geometry1\", \"PointCloud.pointcloud.ICETree.SceneReferenceNode[1].value\");\n\
\n\
// Test it out\n\
FirstFrame();\n\
PlayForwardsFromStart();\n\
FirstFrame();\n\
PlayForwardsFromStart();\n\
\n\
\n\
// Helper\n\
function SetMovementOnGoal()\n\
{\n\
	var sph = CreatePrim(\"Sphere\", \"NurbsSurface\");\n\
	SetValue(\"sphere.sphere.radius\", 1.5);\n\
	SaveKey(\"sphere.kine.local.posx,sphere.kine.local.posy,sphere.kine.local.posz\", 1, null, null, null, false);\n\
\n\
	SetValue(\"PlayControl.Key\", 32);\n\
	SetValue(\"PlayControl.Current\", 32);\n\
	Translate(sph, 6.70968113705515, 4.86256743059746, -0.486256743059746, siRelative, siView, siObj, siXYZ, \n\
		null, null, null, null, null, null, null, null, null, 0);\n\
	SaveKey(\"sphere.kine.local.posx,sphere.kine.local.posy,sphere.kine.local.posz\", 32, null, null, null, false);\n\
	\n\
	SetValue(\"PlayControl.Key\", 60);\n\
	SetValue(\"PlayControl.Current\", 60);\n\
	Translate(sph, -14.9707336352791, 2.77860996034141, -0.277860996034141, siRelative, siView, siObj, siXYZ, \n\
		null, null, null, null, null, null, null, null, null, 0);\n\
	SaveKey(\"sphere.kine.local.posx,sphere.kine.local.posy,sphere.kine.local.posz\", 60, null, null, null, false);\n\
	\n\
	SetValue(\"PlayControl.Key\", 98);\n\
	SetValue(\"PlayControl.Current\", 98);\n\
	Translate(sph, 1.86164563340259, -14.1631924367402, 1.41631924367402, siRelative, siView, siObj, siXYZ, \n\
		null, null, null, null, null, null, null, null, null, 0);\n\
	SaveKey(\"sphere.kine.local.posx,sphere.kine.local.posy,sphere.kine.local.posz\", 98, null, null, null, false);\n\
	\n\
	StoreAction(sph, \"sphere.kine.local.sclx,sphere.kine.local.scly,sphere.kine.local.sclz,sphere.kine.local.rotx,\"\n\
		+ \"sphere.kine.local.roty,sphere.kine.local.rotz,sphere.kine.local.posx,sphere.kine.local.posy,sphere.kine\"\n\
		+ \".local.posz,sphere.kine.global.sclx,sphere.kine.global.scly,sphere.kine.global.sclz,sphere.kine.global.\"\n\
		+ \"rotx,sphere.kine.global.roty,sphere.kine.global.rotz,sphere.kine.global.posx,sphere.kine.global.posy,sp\"\n\
		+ \"here.kine.global.posz\", 5, \"StoredAnimAction\", null, 1, 98, null, null, true, 1);\n\
	\n\
	return sph;\n\
}\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6F3F67E-B643-4FC9-8A10-33C57C07F380\"></a></span>You can also see the <a href=\"#!/url=./examples/Addons/ParticleOp/netview_ParticleOp.htm\">ParticleOp</a> example that shows how to write a particle operator for manipulating a particle cloud.\n\
                  This example is located in the examples folder of the Softimage SDK installation directory.\n\
                  \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";