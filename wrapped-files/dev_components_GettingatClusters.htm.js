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
      <meta name=\"topicid\" content=\"GUID-8B30DDC9-714A-4911-8DA7-71389182C0C0\" />\n\
      <meta name=\"indexterm\" content=\"clusters: overview\" />\n\
      <meta name=\"indexterm\" content=\"clusters: accessing: elements\" />\n\
      <meta name=\"indexterm\" content=\"clusters: accessing: parent object through scripting\" />\n\
      <meta name=\"indexterm\" content=\"clusters: type information (getting)\" />\n\
      <meta name=\"indexterm\" content=\"clusters: creating\" />\n\
      <meta name=\"indexterm\" content=\"clusters: adding: to a 3D object through scripting\" />\n\
      <meta name=\"indexterm\" content=\"clusters: finding\" />\n\
      <meta name=\"indexterm\" content=\"accessing: clusters\" />\n\
      <meta name=\"indexterm\" content=\"clusters: adding: elements through scripting\" />\n\
      <meta name=\"indexterm\" content=\"clusters: removing elements through scripting\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Getting at Clusters</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-8B30DDC9-714A-4911-8DA7-71389182C0C0\"></a></span><div class=\"head\">\n\
            <h1>Getting at Clusters</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-C369BB78-50B9-4172-93BC-456495C8313D\"></a></span>This section demonstrates how to create, access, and modify clusters and their elements\n\
            on 3D objects. All of the code in this section belongs to one large script, but is\n\
            presented in modules according to usage. The topics covered include:\n\
         </p>\n\
         <ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4A881A3-7AB0-478F-AED7-FFD3B5B15E2D\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0017\">Example: Accessing the cluster\'s elements, parent, and type</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-521F38C5-171D-4521-B472-5C3EA0F90DC5\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0019\">Example: Create a cluster</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C20FE1BB-D4C7-499A-B0A6-4A2452095387\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001B\">Example: Find the cluster in the scene</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-105099FA-5410-42AC-A09A-0C104C1C2680\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001C\">Example: Add points to the cluster</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-515B3738-0B23-451F-91A4-C515CFF17E0D\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001D\">Example: Remove points from the cluster</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-08173227-C206-42C3-A662-3D0FCB63914C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001E\">Example: Copying clusters</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA386E7A-016D-4AF6-A2EE-C96AF1A156E8\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001F\">Example: Deleting clusters</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0017\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0018\"></a></span>Example:Accessing the cluster\'s elements, parent, and type\n\
            </h2>    \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3182DBA1-6A18-4475-ABDC-954132D6C617\"></a></span>A lot of the tasks when working with cluster involve using the cluster\'s elements.\n\
               You can access the elements through the SubComponent object (Cluster.CreateSubComponent).\n\
               From there, you can access the 3D object that is parenting the cluster (SubComponent.Parent3DObject).\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-307337F9-B608-4347-96F9-3731E9678A92\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DBC0C8C3-A84C-4D5A-86F6-DB6CC1201269\"></a></span>You can also access the elements through the Cluster.Elements property, which returns\n\
                     the collection of geometry indices as a ClusterElementCollection.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B602AF2-112C-4C68-9A38-E86CBB771777\"></a></span>This function prints the name of the cluster\'s parent, which elements it contains,\n\
               and the type of elements it contains. The other examples in this section also refer\n\
               to this function.\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Function printClusterInfo( in_cluster )\n\
	\' Make sure the inbound object is a valid cluster\n\
	If TypeName( in_cluster ) = \"Cluster\" Then\n\
		\' Get the cluster\'s elements\n\
		Set oMembers = in_cluster.CreateSubComponent\n\
		aIndices = oMembers.ElementArray\n\
		\n\
		\' Format its values\n\
		sElementData = \"\"\n\
		For i = 0 To UBound( aIndices )\n\
			sElementData = sElementData &amp; \", \" &amp; in_cluster.Type \n\
									&amp; \"[\" &amp; aIndices(i) &amp; \"]\"\n\
		Next \n\
		sElementData = vbTab &amp; vbTab &amp; Right( sElementData, Len(sElementData)-2 )\n\
		\n\
		\' Print them out\n\
		LogMessage \"Current cluster contains these element(s) under the \'\" _\n\
				&amp; oMembers.Parent3DObject.Name &amp; \"\' object:\" &amp; vbLf _\n\
				&amp; sElementData &amp; vbLf\n\
		LogMessage \"==========================================================\"\n\
		\n\
		printClusterInfo = True\n\
	Else\n\
		LogMessage \"Object is not a valid cluster.\"\n\
		printClusterInfo = False\n\
	End If\n\
End Function</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0019\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-001A\"></a></span>Example:Create a cluster\n\
            </h2>   \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-13D218CC-C5D2-49FE-B6E3-A8CA000E4247\"></a></span>This example demonstrates how to create a cluster (using the object model) from a\n\
               3D object (in this case, a grid).\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-89876842-2461-4F35-AA07-8D58AF16E4B2\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D13247BA-7EA6-4CE6-BCDE-5275E05E619C\"></a></span>This code snippet uses the printClusterInfo() function described in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0017\">Example: Accessing the cluster\'s elements, parent, and type</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9AC96517-BE86-4382-B531-12E3238EF669\"></a></span>After you create the grid, you can add a point (vertex) cluster on it using the Geometry.AddCluster\n\
               method. Notice that you have to create the cluster on the Geometry object, not directly\n\
               on the grid.\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' Create the grid\n\
	Set oGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\", \"wall\" )\n\
\n\
	\' You can use an array variable to save the point indices \n\
	aPointsForCluster = Array( 21,22,31,40,41 )\n\
\n\
	\' The indices used in this method correspond to the indexing order of the \n\
	\' element for the 3D object\n\
	Set oCluster = oGrid.ActivePrimitive.Geometry.AddCluster( _\n\
									siVertexCluster, _\n\
									\"wallpaper\", _\n\
									aPointsForCluster _\n\
								)</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7985D92A-0347-4B30-B486-8C5ED9EBA4DE\"></a></span>The printClusterInfo(oCluster) function displays the following message in the History\n\
               Log of the Script Editor at this point:\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"Current cluster contains these element(s) under the \'wall\' object:\n\
		\'pnt[21], pnt[23], pnt[29], pnt[31], pnt[33], pnt[39], pnt[41]\n\
\'\"\n\
\'INFO : \"==========================================================\"\n\
</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-001B\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-65AF7D42-E21F-45BB-91B4-CECA21757092\"></a></span>Example: Find the cluster in the scene\n\
            </h2>   \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2ADD6906-668F-43F2-89D8-EE51CE89E4D4\"></a></span>This step is not necessary if you have already created a cluster, but is provided\n\
               simply as a demonstration of finding an existing cluster in the scene assuming you\n\
               know only that you want the point cluster on a polymsh grid object.\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-AEAD55BC-532D-4D1B-A1BC-70F01B0CC019\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1964316F-E041-4768-99E4-581365CD099C\"></a></span>This code snippet follows the one in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0019\">Example: Create a cluster</a></span> and uses the printClusterInfo() function described in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0017\">Example: Accessing the cluster\'s elements, parent, and type</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CF6C788F-CF22-4DCB-B9CD-5055ACBE5733\"></a></span>Just to make it interesting, let\'s add a couple more clusters.\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' Add an edge cluster to the grid\n\
	aEdgesForCluster = Array( 28,31,47,50,66 )\n\
	Set oECls = oGrid.ActivePrimitive.Geometry.AddCluster( _\n\
									siEdgeCluster, _\n\
									\"paint\", _\n\
									aEdgesForCluster _\n\
									)\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3F8478B2-9903-40BC-B515-EABF218C2FE0\"></a></span>The printClusterInfo(oECls) function displays the following message in the History\n\
               Log of the Script Editor at this point:\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"Current cluster contains these element(s) under the \'wall\' object:\n\
		\'edge[28], edge[31], edge[47], edge[50], edge[66]\n\
\'\"\n\
\'INFO : \"==========================================================\"\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C5EE3F2-9C0C-415E-9D50-D92976284F90\"></a></span>This piece of code adds a cube and makes another point cluster on it. Notice how you\n\
               can use either an array variable or pass an array directly to the argument.\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' Create a cube and add another point cluster to it\n\
	Set oCube = ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\", \"chair\" )\n\
	Set oPCls = oCube.ActivePrimitive.Geometry.AddCluster( _\n\
									siVertexCluster, _\n\
									\"seat\", _\n\
									Array( 1,3,5,7 ) _\n\
							     )\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-804C9264-92C5-4546-94FA-6891E017FF0C\"></a></span>The printClusterInfo(oPCls) function displays the following message in the History\n\
               Log of the Script Editor at this point:\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"Current cluster contains these element(s) under the \'chair\' object:\n\
		\'pnt[1], pnt[3], pnt[5], pnt[7]\n\
\'\"\n\
\'INFO : \"==========================================================\"\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-73B1DC9B-D0FA-4164-94F1-2CB699EDC6E8\"></a></span>Now the fun begins! This piece gets each object with mesh geometry in the scene and\n\
               then gets the cluster collection from each using the Geometry.Clusters property. Make\n\
               sure to trap as many potential errors as you can, since you may be working with empty\n\
               or invalid objects at some point.\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' Using the X3DObject.FindChildren method and specifying the mesh family\n\
	\' (3rd argument) returns a collection of all polygon mesh objects that \n\
	\' appear in the hierarchy under the scene root. From there we can find\n\
	\' which one matches our criteria.\n\
	Set oAllObjects = ActiveSceneRoot.FindChildren( , , siMeshFamily )\n\
\n\
	\' Loop through the collection to find any Point clusters\n\
	For Each obj In oAllObjects\n\
		\' Get all the clusters on the mesh  geometry as a collection\n\
		Set oAllClusters = obj.ActivePrimitive.Geometry.Clusters\n\
\n\
		\' Loop through the collection to find any Point clusters\n\
		For Each cls In oAllClusters\n\
			\' Only deal with point clusters\n\
			If cls.Type = \"pnt\" Then\n\
				\' Get the one whose parent = grid \n\
				Set oPoint = cls.CreateSubComponent\n\
				Set oParent = oPoint.Parent3DObject\n\
\n\
				\' If it matches, grab it &amp; run\n\
				If oParent.IsKindOf( \"Grid\" ) Then\n\
					Set oCluster = cls\n\
					Exit For\n\
				End If \n\
			End If\n\
		Next\n\
	Next\n\
</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-001C\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3D1DF864-C0D2-4475-B301-A417ADBE088B\"></a></span>Example: Add points to the cluster\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B6DA349-46E0-4A70-BB4C-43135B601BA5\"></a></span>This example demonstrates how to add points to an existing point cluster. In this\n\
               case, you have to use a mixture of the object model and scripting commands.\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-80096C43-57D4-4BF1-B478-7F52976C74B9\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-39FECDE7-0681-4099-AEE6-14A9A33A65A0\"></a></span>This code snippet follows the one in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001B\">Example: Find the cluster in the scene</a></span> and uses the printClusterInfo() function described in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0017\">Example: Accessing the cluster\'s elements, parent, and type</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' Create a new SubComponent object so you can specify which elements to add. \n\
	Set oSubComp = oCluster.CreateSubComponent\n\
	\n\
	\' Use the SubComponent.AddElement method to add each point separately \n\
	\' to the subcomponent. \n\
	oSubComp.AddElement 23\n\
	oSubComp.AddElement 29\n\
	oSubComp.AddElement 33\n\
	oSubComp.AddElement 39\n\
	\n\
	\' Add the subcomponent to the cluster using the SIAddToCluster command. \n\
	SIAddToCluster oCluster, oSubComp\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-93FD9D9E-94DF-44E0-BA2C-F8C156D611FC\"></a></span>The printClusterInfo(oCluster) function displays the following message in the History\n\
               Log of the Script Editor at this point:\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"Current cluster contains these element(s) under the \'wall\' object:\n\
		\'pnt[21],pnt[22],pnt[23],pnt[29],pnt[31],pnt[33],pnt[39],pnt[40],pnt[41]\n\
\'\"\n\
\'INFO : \"==========================================================\"\n\
</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-001D\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-81E5D956-E4A0-491A-BE15-B200E1DFB177\"></a></span>Example: Remove points from the cluster\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-21737E96-38B8-4B2E-8BF0-104A9DEB46DD\"></a></span>When you want to remove points (or any element) from a cluster, you have to use the\n\
               SubComponent.RemoveElement method to clear the elements you <em class=\"mild\">want to keep</em> from the SubComponent object and then use the SIRemoveFromCluster command to remove\n\
               the leftover elements from the actual cluster.\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-37F925AA-CAC7-4873-B369-8336583F5BAA\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C94874E-923F-4079-85EC-563E88DFFBAF\"></a></span>This code snippet follows the one in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001C\">Example: Add points to the cluster</a></span> and uses the printClusterInfo() function described in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-0017\">Example: Accessing the cluster\'s elements, parent, and type</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B50F54DC-7FA0-45EB-BE97-848EA09BB9B0\"></a></span>In this case, we want to remove points 22 and 40, so we have to remove \"pnt[21,23,29,31,33,39,41]\"\n\
               from the subcomponent and then use it with SIRemoveFromCluster:\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' Create a new SubComponent object to specify which elements to remove. \n\
	Set oSubComp = oCluster.CreateSubComponent\n\
	\n\
	\' Remove the elements you want to keep from the subcomponent\n\
	oSubComp.RemoveElement 21\n\
	oSubComp.RemoveElement 23\n\
	oSubComp.RemoveElement 29\n\
	oSubComp.RemoveElement 31\n\
	oSubComp.RemoveElement 33\n\
	oSubComp.RemoveElement 39\n\
	oSubComp.RemoveElement 41\n\
\n\
	\' Remove the specified subcomponent from the cluster\n\
	SIRemoveFromCluster oCluster, oSubComp\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7429369C-B091-4076-93D9-EF67C4AFCCB7\"></a></span>The printClusterInfo(oCluster) function displays the following message in the History\n\
               Log of the Script Editor at this point:\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"Current cluster contains these element(s) under the \'wall\' object:\n\
		\'pnt[21], pnt[23], pnt[29], pnt[31], pnt[33], pnt[39], pnt[41]\n\
\'\"\n\
\'INFO : \"==========================================================\"\n\
</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-001E\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E5B9D60A-7026-4BA2-8358-E994CF393594\"></a></span>Example: Copying clusters\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D7D9939-AC08-4D5F-8E0C-F177042EBCC9\"></a></span>When you want to copy an entire cluster from one object to another, you have to use\n\
               the CopyCluster command\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-89BA39D6-F2CF-4BF0-A69F-551D8AB98A62\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-828A9689-74B7-4E6B-9E3D-A79089D0692F\"></a></span>This code snippet follows the one in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001D\">Example: Remove points from the cluster</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'\n\
\' Copying clusters can only be done via the CopyCluster command. This example \n\
\' demonstrates how to copy clusters between objects.\n\
Set oTarget = ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\", \"floor\" )\n\
CopyCluster oCluster, oTarget \n\
\n\
\' Now you have to find it in the scene again (since the CopyCluster command \n\
\' doesn\'t return the newly created cluster). It\'s probably the first one in \n\
\' the bunch.\n\
Set oNewCls = oTarget.ActivePrimitive.Geometry.Clusters(0)\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE79746C-F9E2-40F5-A263-BEF91ACB016B\"></a></span>The printClusterInfo(oCluster) function displays the following message in the History\n\
               Log of the Script Editor at this point:\n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"Current cluster contains these element(s) under the \'floor\' object:\n\
		\'pnt[21], pnt[23], pnt[29], pnt[31], pnt[33], pnt[39], pnt[41]\n\
\'\"\n\
\'INFO : \"==========================================================\"\n\
</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-001F\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-565A2ED0-9D32-4583-87E9-9A9BF965A0BA\"></a></span>Example: Deleting clusters\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-448CF725-56BC-42AC-BB71-0278E372636E\"></a></span>Now that you\'ve created a copy of the cluster on the new object, delete the old one.\n\
               For this you need to use the RemoveCluster command:\n\
            </p> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-0FF3F86B-AF43-4455-9677-A1EE73A6D044\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6ADAC0ED-47BE-4231-8F24-9E9982EE15BC\"></a></span>This code snippet follows the one in <span class=\"char_link\"><a href=\"#!/url=./files/dev_components_GettingatClusters.htm#WS0712F8CE7932674FBBDF8F8482ED1B3D-001E\">Example: Copying clusters</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
RemoveCluster oCluster\n\
</pre></div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";