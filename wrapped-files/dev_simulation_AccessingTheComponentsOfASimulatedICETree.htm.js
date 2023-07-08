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
      <meta name=\"topicid\" content=\"GUID-18BEF2D8-9BDB-4FF3-8A3F-31107564D610\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing the Components of a Simulated ICE Tree</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-18BEF2D8-9BDB-4FF3-8A3F-31107564D610\"></a></span><div class=\"head\">\n\
            <h1>Accessing the Components of a Simulated ICE Tree</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7F0422E-B891-4966-B1AE-61C51CDA0170\"></a></span>Nodes are accessible in an ICE tree one level at a time: if a node contains subnodes,\n\
               then that node is considered to be a node container. This means that you need to perform\n\
               some kind of recursion to get all of the nested subnodes.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1C2EF8E-F9A9-4E60-B5AF-04FFCF4CE153\"></a></span>Because ports can have multiple instances, you need to specify not only the portgroup\n\
               index and the port index, but also which portgroup instance a port belongs to.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSFAF98299A9AA034DB9B568933D17B312-0008\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EBE0BD00-2241-4E37-9543-5E63D1344F09\"></a></span>JScript Example: To access the components of a simulated ICE tree through scripting\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9DF63A0C-17A6-48AC-AB22-5E6A6045A8D7\"></a></span>This example demonstrates how to navigate from the scene graph to the ICE tree, then\n\
                  how to traverse the ICE tree graph to visit each node and each port in turn.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
NewScene(null, false);\n\
var obj = CreatePrim(\"Cylinder\", \"MeshSurface\");\n\
var emitter = EmitPointsFromObject(obj);\n\
\n\
// Find ICE tree (operator)\n\
var ICEop = emitter.ActivePrimitive.ICETrees(0);\n\
\n\
// From the ICE tree you get the list of nodes one level at a time\n\
RecursivelyLogNodeInfo(ICEop, \"- \");\n\
\n\
\n\
// Recursive function for traversing a node graph\n\
function RecursivelyLogNodeInfo( node, indent )\n\
{\n\
	Application.LogMessage( indent + \"Node: \" + node.FullName + \" is a \" + node.Type );\n\
	\n\
	// Now log the node\'s ports with their portgroups\n\
	if ( node.Type != \"ICETree\" ) {\n\
		for ( var i=0; i&lt;node.PortGroupCount; i++ ) {\n\
			Application.LogMessage( indent + \" - PortGroup[\"+i+\"]\" );\n\
			for ( var j=0; j&lt;node.GetGroupInstanceCount(i); j++ ) {\n\
				Application.LogMessage( indent + \" - - PortGroupInstance[\"+j+\"]\" );\n\
				for ( var k=0; k&lt;node.GetPortCount(i); k++ ) {\n\
					var port = node.GetPortFromIndex(k, i, j);\n\
					var direction = ( port.IsOutput ) ? \"output\" : \"input\";\n\
					Application.LogMessage( indent + \" - - - Port \" + port.FullName + \" is an \" + direction );\n\
				}\n\
			}\n\
		}\n\
	}\n\
\n\
	// Recursion: if node contains other nodes, log them as well\n\
	if ( node.IsClassOf(siICENodeContainerID) ) {\n\
		for ( var h=0; h&lt;node.Nodes.Count; h++ ) {\n\
			RecursivelyLogNodeInfo(node.Nodes(h), indent+\"- \");\n\
		}\n\
	}\n\
}\n\
\n\
\n\
// Expected results:\n\
// INFO : - Node: PointCloud.pointcloud.ICETree is a ICETree\n\
// INFO : - - Node: PointCloud.pointcloud.ICETree.SceneReferenceNode is a SceneReferenceNode\n\
// INFO : - -  - PortGroup[0]\n\
// INFO : - -  - - PortGroupInstance[0]\n\
// INFO : - -  - - - Port PointCloud.pointcloud.ICETree.SceneReferenceNode.value is an output\n\
// INFO : - -  - - - Port PointCloud.pointcloud.ICETree.SceneReferenceNode.outname is an output\n\
// INFO : - -  - PortGroup[1]\n\
// INFO : - -  - - PortGroupInstance[0]\n\
// INFO : - -  - - - Port PointCloud.pointcloud.ICETree.SceneReferenceNode.source is an input\n\
// INFO : - -  - PortGroup[2]\n\
// INFO : - -  - - PortGroupInstance[0]\n\
// INFO : - -  - - - Port PointCloud.pointcloud.ICETree.SceneReferenceNode.inname is an input\n\
// INFO : - - Node: PointCloud.pointcloud.ICETree.Emit_from_Surface is a Emit_from_Surface\n\
// INFO : - -  - PortGroup[0]\n\
// INFO : - -  - - PortGroupInstance[0]\n\
// INFO : - -  - - - Port PointCloud.pointcloud.ICETree.Emit_from_Surface.Seed is an input\n\
// INFO : - -  - - - Port PointCloud.pointcloud.ICETree.Emit_from_Surface.Emitter1 is an input\n\
// INFO : - -  - - - Port PointCloud.pointcloud.ICETree.Emit_from_Surface.Select_Rate_Type is an input\n\
// etc.\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";