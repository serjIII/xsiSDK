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
      <meta name=\"topicid\" content=\"GUID-DA9BCB25-CD95-4802-8B33-8C9BD9A28565\" />\n\
      <meta name=\"indexterm\" content=\"filters: 3D objects\" />\n\
      <meta name=\"indexterm\" content=\"3D objects: filtering\" />\n\
      <meta name=\"indexterm\" content=\"filters: Match callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Match callbacks: 3D objects\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: Match\" />\n\
      <meta name=\"indexterm\" content=\"geometry: checking for existence of\" />\n\
      <meta name=\"indexterm\" content=\"filters: Subset callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Subset callbacks: 3D objects\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: Subset\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Writing 3D Object Filters</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DA9BCB25-CD95-4802-8B33-8C9BD9A28565\"></a></span><div class=\"head\">\n\
            <h1>Writing 3D Object Filters</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A01AB7DA-CEC2-4200-A64A-97A71D11ABEC\"></a></span> 3D object filters are used to filter objects, such as polygon meshes, surfaces, curves,\n\
               implicit primitives, control objects, models, nulls, cameras, and lights, that belong\n\
               to the 3D object family.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D8F664E-41EB-4A22-9920-DC5D018BF18A\"></a></span>When a user activates a 3D object selection filter, Softimage calls Match for each\n\
               3D object the user tries to select in a 3D view, the object view, or in the schematic.\n\
               Softimage does not call Match for non-3D objects, such as Material and ParticleType\n\
               objects in the schematic. Clicking on those types of objects while a 3D object filter\n\
               is active triggers a Deselect All command.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2195920-E01F-4EFE-B93A-F3675FBF3F43\"></a></span>Similarly, when a user applies a 3D object filter to an explorer view, Softimage calls\n\
               Match for each 3D object currently listed in the view (unless Subset is defined, in\n\
               which case Softimage calls Subset on the list of 3D objects).\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-0013\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-44EC9DFF-BE6D-4D7E-ACA5-FEEE9307AD2F\"></a></span>Match\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-873F3651-CAB5-46B6-858E-77D6B6AA828D\"></a></span> When Softimage calls Match, it puts a 3D object in the Input attribute of the context.\n\
                  To get the input object, you use the Context.GetAttribute() method. The following\n\
                  example shows how to get the input object and check whether it has less than 50 points.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MySmallMesh_Match( oContext )\n\
{\n\
	// Get the object from the Input attribute of the context\n\
	var o3DObject = oContext.GetAttribute( \"Input\" );\n\
\n\
	// Check if the object matches the filter conditions\n\
	var bMatch = ( classname( o3DObject ) == \"X3DObject\" ) &amp;&amp;\n\
		( o3DObject.ActivePrimitive.Geometry != undefined ) &amp;&amp;\n\
		( o3DObject.ActivePrimitive.Geometry.Points.Count &lt;= 50 );\n\
\n\
	// Return true to keep the object, false to filter the object out\n\
	return ( bMatch );\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-881E2F63-1AB4-4B25-9B31-8A031DB33121\"></a></span>After the filter gets the 3D object from the context, it checks that the object is\n\
                  an X3DObject. Other members of the 3D object family, such as nulls, cameras, and lights\n\
                  are filtered out, because they don\'t have points like polygon meshes, surfaces, and\n\
                  curves.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-82951373-D47E-486C-A5E8-4A1428515723\"></a></span> Then the filter makes sure the 3D object has geometry before trying to access Points.Count,\n\
                  because some 3D objects, such as implicit primitives, control objects, and geometry\n\
                  shader primitives, do not have a Geometry property.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-0014\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5ACA43D4-2474-41AE-B4DB-6009F57D5A3E\"></a></span>Subset\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC890128-1ECA-4AE3-B9FB-789CE968C4FE\"></a></span> Softimage calls the Subset callback when a user applies the 3D object filter to an\n\
                  explorer view. If you don\'t provide a Subset callback, Softimage calls Match on each\n\
                  object and builds the subset collection itself.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-63AC8011-7A88-4358-BBB0-A9B2DE4A5B84\"></a></span>When Softimage calls Subset, it puts an XSICollection in the Input attribute of the\n\
                  context. The collection contains 3D objects, such as X3DObject, Camera, Light, Null,\n\
                  Model, and ChainEffector. The job of the Subset callback is to build a new collection\n\
                  (the subset) that holds only the objects that match the filter conditions, and to\n\
                  put this new collection in the Output attribute of the context.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6487393A-F61C-4E01-A33D-B07058A0E8B8\"></a></span>For example, the following Subset callback builds a collection of 3D objects that\n\
                  have less than 50 points. Note that you need to set the Output attribute even if the\n\
                  subset is empty. The return value tells Softimage whether or not the subset is empty.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MySmallMesh_Subset( oContext )\n\
{\n\
	// Get a new collection to hold the output subset\n\
	var cloOutput = new ActiveXObject( \"XSI.Collection\" );\n\
\n\
	// Get the collection of objects to filter\n\
	var cloInput = oContext.GetAttribute( \"Input\" );\n\
\n\
	// Enumerate the objects. If an object matches, add it to the output subset\n\
	for (var enumerator = new Enumerator(cloInput) ; !enumerator.atEnd(); enumerator.moveNext())\n\
	{\n\
		var o3DObject = enumerator.item();\n\
		if ( object_isamatch( o3DObject ) )\n\
		{\n\
			cloOutput.Add( o3DObject );\n\
		}\n\
\n\
	}\n\
\n\
	// Put the subset in the Output attribute		\n\
	oContext.SetAttribute( \"Output\", cloOutput );\n\
\n\
	// Return true if the subset is non-empty\n\
	return (cloOutput.Count &gt; 0);\n\
}\n\
\n\
// Helper function that checks if a 3D object matches the filter conditions\n\
function object_isamatch( o )\n\
{\n\
	return	(\n\
		classname( o ) == \"X3DObject\" &amp;&amp;\n\
		o.ActivePrimitive.Geometry != undefined &amp;&amp;\n\
		o.ActivePrimitive.Geometry.Points.Count &lt;= 50\n\
		) ;\n\
}</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";