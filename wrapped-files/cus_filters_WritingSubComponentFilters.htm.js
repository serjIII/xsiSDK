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
      <meta name=\"topicid\" content=\"GUID-4B979F05-6289-46EE-BBDD-286D98DA4F33\" />\n\
      <meta name=\"indexterm\" content=\"subcomponents: filtering\" />\n\
      <meta name=\"indexterm\" content=\"filters: subcomponents\" />\n\
      <meta name=\"indexterm\" content=\"points: filtering\" />\n\
      <meta name=\"indexterm\" content=\"filters: points\" />\n\
      <meta name=\"indexterm\" content=\"polygons: filtering\" />\n\
      <meta name=\"indexterm\" content=\"filters: polygons\" />\n\
      <meta name=\"indexterm\" content=\"edges: filtering\" />\n\
      <meta name=\"indexterm\" content=\"filters: edges\" />\n\
      <meta name=\"indexterm\" content=\"filters: Subset callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Subset callbacks: subcomponents\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: Subset\" />\n\
      <meta name=\"indexterm\" content=\"SubComponent property (from CollectionItem)\" />\n\
      <meta name=\"indexterm\" content=\"SubComponent property (from CollectionItem)\" />\n\
      <meta name=\"indexterm\" content=\"ComponentCollection property (from SubComponent)\" />\n\
      <meta name=\"indexterm\" content=\"RemoveElement method (from SubComponent)\" />\n\
      <meta name=\"indexterm\" content=\"filters: Match callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Match callbacks: subcomponents\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: Match\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Writing SubComponent Filters</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"points\", \"si_cpp/group__RenderMapDefine.html#ga7b51c5e95877ebaeb51314f8731f55f6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-4B979F05-6289-46EE-BBDD-286D98DA4F33\"></a></span><div class=\"head\">\n\
            <h1>Writing SubComponent Filters</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-79905836-6B78-40BF-AB8A-050EEBBF577B\"></a></span> To filter selections of subcomponents (edges, points, or polygons), Softimage prefers\n\
               the Subset callback to the Match callback. That is, Softimage calls Subset instead\n\
               of the Match callback when a user selects some subcomponents. You should always provide\n\
               a Subset callback for a subcomponent filter.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-0017\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1B393CDD-E47F-406A-AFDC-FB3961AA48D8\"></a></span>Subset\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5863AAEC-AB70-4296-AA5A-DF15602C514E\"></a></span> When Softimage calls Subset, it puts an XSICollection in the Input attribute of the\n\
                  callback context. This collection contains one CollectionItem for each 3D object with\n\
                  selected subcomponents. In the callback function, you get the selected subcomponents\n\
                  from the CollectionItem.SubComponent.ComponentCollection property.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2AEA708D-7E8D-48F6-B0A7-B8753532EAB4\"></a></span>The following example shows the typical structure of a Subset callback for subcomponent\n\
                  filter. First, the callback creates a new XSICollection, which will be used to hold\n\
                  the output of the callback. Then for each 3D object, Subset finds the matching polygons\n\
                  and creates a new SubComponent object with them. The new SubComponent objects are\n\
                  added to the output collection, and the collection is put in the Output attribute\n\
                  of the callback context.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyPolygonFilter_Subset( oContext )\n\
{\n\
	var oFilter = oContext.Source;\n\
	logmessage( oFilter.Name + \"_Subset\");\n\
\n\
	// Create a new XSICollection to hold the output\n\
	var cloSubset = new ActiveXObject( \"XSI.Collection\" );\n\
\n\
	// Get the XSI.Collection from the context\n\
	// The collection contains one CollectionItem for each object with selected polygons\n\
	var cloObjects = oContext.GetAttribute( \"Input\" );\n\
\n\
	for (var objEnumerator = new Enumerator(cloObjects) ; !objEnumerator.atEnd(); objEnumerator.moveNext())\n\
	{\n\
		// Get the CollectionItem\n\
		var oItem = objEnumerator.item();\n\
\n\
		// Get the SubComponent object\n\
		var oPolySubComponent = oItem.SubComponent;\n\
\n\
		if ( !( (classname(oPolySubComponent) == \"SubComponent\") &amp;&amp; ( oPolySubComponent.type == \"polySubComponent\" ) ) )\n\
			continue;\n\
\n\
		// This array will hold the indices of the polygons that match the filter conditions\n\
		var aIndices = new Array();\n\
\n\
		// Enumerate the selected polygons; if a polygon matches, put its <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> in the array\n\
		for (var polyEnumerator = new Enumerator(oPolySubComponent.ComponentCollection) ; !polyEnumerator.atEnd(); polyEnumerator.moveNext())\n\
		{\n\
			var oPoly = polyEnumerator.item();\n\
			if ( polygon_isamatch( oPoly ) )\n\
			{\n\
				aIndices.push( oPoly.index );\n\
			}\n\
		}\n\
\n\
		// Create a SubComponent from the subset of polygons that match, and add the SubComponent to the output\n\
		if ( aIndices.length &gt; 0 )\n\
		{\n\
			var oSubComponent = oPolySubComponent.Parent3DObject.ActivePrimitive.Geometry.CreateSubComponent(siPolygonCluster, aIndices );\n\
			cloSubset.Add( oSubComponent );\n\
		}\n\
	}\n\
\n\
	// You always <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the Output attribute, even if the subset is empty\n\
	oContext.SetAttribute( \"Output\", cloSubset );\n\
\n\
	// Return True if the subset is non-empty\n\
	return (cloSubset.Count &gt; 0);\n\
}\n\
\n\
\n\
// Select only polygons with more than 3 <a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a>\n\
function polygon_isamatch( oPoly )\n\
{\n\
	return ( oPoly.NbPoints != 3 )\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7C4200CC-5935-4467-ACAE-89478008857C\"></a></span>Another way to implement a Subset callback is to work directly with the SubComponent\n\
                  objects passed in by Softimage. In this approach, you use SubComponent.RemoveElement\n\
                  to remove the polygons that don\'t match, and put the modified SubComponent in the\n\
                  output collection.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyPolygonFilter_Subset( oContext )\n\
{\n\
	var cloSubset = new ActiveXObject( \"XSI.Collection\" );\n\
\n\
	var cloObjects = oContext.GetAttribute( \"Input\" );\n\
\n\
	for (var objEnumerator = new Enumerator(cloObjects) ; !objEnumerator.atEnd(); objEnumerator.moveNext())\n\
	{\n\
		var oItem = objEnumerator.item();\n\
\n\
		var oPolySubComponent = oItem.SubComponent;\n\
\n\
		if ( !( (classname(oPolySubComponent) == \"SubComponent\") &amp;&amp; ( oPolySubComponent.type == \"polySubComponent\" ) ) )\n\
			continue;\n\
\n\
		// Get a copy of the PolygonFaceCollection; \n\
		// We\'ll enumerate cloTmpCopy, and modify oPolySubComponent.ComponentCollection \n\
		var cloTmpCopy = oPolySubComponent.ComponentCollection;\n\
\n\
		// Enumerate the selected polygons; if a polygon doesn\'t match, remove it from oPolySubComponent\n\
		for (var polyEnumerator = new Enumerator(cloTmpCopy) ; !polyEnumerator.atEnd(); polyEnumerator.moveNext())\n\
		{\n\
			var oPoly = polyEnumerator.item();\n\
			if ( !polygon_isamatch( oPoly ) )\n\
			{\n\
				oPolySubComponent.RemoveElement( oPoly.index );\n\
			}\n\
		}\n\
\n\
		// Add the modified SubComponent the output collection\n\
		if ( aIndices.length &gt; 0 )\n\
		{\n\
			cloSubset.Add( oPolySubComponent );\n\
		}\n\
	}\n\
\n\
	oContext.SetAttribute( \"Output\", cloSubset );\n\
\n\
	return (cloSubset.Count &gt; 0);\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-0018\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2C14420F-9505-4FDB-B395-CD04A246B3F1\"></a></span>Match\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3B00DD80-975B-4FC6-8610-F385DDC113F9\"></a></span> For subcomponent filters, Subset is the most important callback. Softimage won\'t\n\
                  call Match unless a filter doesn\'t have a Subset callback. However, Match is required,\n\
                  so you must provide an implementation. Typically, Match returns false as soon as it\n\
                  finds a subcomponent that doesn\'t match the filter conditions.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B3F867B-87BF-4464-A71C-22C803847EE9\"></a></span>When Softimage calls Match for a subcomponent filter, it puts a SubComponent object\n\
                  in the callback context. The following example shows a typical structure for a Match\n\
                  callback.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyPolygonFilter_Match( oContext )\n\
{\n\
	// Get the SubComponent object from the context\n\
	var oPolySubComponent = oContext.GetAttribute( \"Input\" );\n\
\n\
	// Return false if we don\'t have a SubComponent, or we don\'t have polygons\n\
	if ( !( (classname(oPolySubComponent) == \"SubComponent\") &amp;&amp; ( oPolySubComponent.type == \"polySubComponent\" ) ) )\n\
	{\n\
		return false;\n\
	}\n\
\n\
	// Enumerate the selected polygons; Return false as soon as we find a polygon that doesn\'t match\n\
	for (var polyEnumerator = new Enumerator(oPolySubComponent.ComponentCollection) ; !polyEnumerator.atEnd(); polyEnumerator.moveNext())\n\
	{\n\
		var oPoly = polyEnumerator.item();\n\
		if ( !polygon_isamatch( oPoly ) )\n\
		{\n\
			return false;\n\
		}\n\
	}\n\
\n\
	// If we make it here, all the polygons match\n\
	return true;\n\
}</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";