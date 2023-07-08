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
      <meta name=\"topicid\" content=\"GUID-3C05FC4C-A619-41B6-B7EF-33DF87624BB1\" />\n\
      <meta name=\"indexterm\" content=\"Example: Manipulating ClusterProperties in JScript\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using a Temporary GridData Object</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"color\", \"si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3C05FC4C-A619-41B6-B7EF-33DF87624BB1\"></a></span><div class=\"head\">\n\
            <h1>Using a Temporary GridData Object</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4668DDD8-B065-41FC-9446-EBA94AC2650C\"></a></span>You can create a GridData object to help manage 2-dimensional arrays via the XSIFactory\n\
               object (the <a href=\"#!/url=./si_om/XSIFactory.CreateGridData.html\">CreateGridData (XSIFactory)</a> method). The XSIFactory object is an intrinsic (global) object that does not need\n\
               to be instantiated as part of the scene graph, which is convenient for languages such\n\
               as JScript which does not support 2-dimensional arrays.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2B2DA04-6688-4B0D-9576-DBEFC7C2B090\"></a></span>Normally it is necessary to convert 2-dimensional arrays to a 1-dimensional array\n\
               using the <em class=\"strong\">VBArray.toArray()</em> method. However, if you transfer the data into a DataGrid object then you can access\n\
               the data more conveniently; for example, Row by Row or setting values at a precise\n\
               Row/Column coordinate. This is demonstrated in the following example.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-001A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9211FCE1-4DE8-4BBA-9A4D-57026009E9A5\"></a></span> Example: Manipulating ClusterProperties in JScript\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-364FC754-20B1-424E-A878-3EDABAAA48EA\"></a></span>ClusterProperties are widely used in scripting and their data is represented as a\n\
                  2-dimensional array. For example, there is a row for each component and each component\n\
                  has multiple values (such as RGBA or UVW) which are the column values. Even a Weight\n\
                  Map is represented this way, even though there is only 1 value per component.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	/*\n\
		Example of using GridData as a convenient way to deal with \n\
		2D arrays from JScript\n\
	*/\n\
	\n\
	NewScene( null, false );\n\
	\n\
	// Set up a grid object with only one subdivision in U and V\n\
	var oGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\" );\n\
	oGrid.subdivu = 1;\n\
	oGrid.subdivv = 1;\n\
\n\
	// Add a vertex <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a> support and\n\
	CreateVertexColorSupport( null, null, oGrid );\n\
	SetDisplayMode(\"Camera\", \"shaded\");\n\
\n\
	// Get the new vertex <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a> support as a ClusterProperty object\n\
	var oGeometry = oGrid.ActivePrimitive.Geometry;\n\
	var oClusterProp = oGeometry.Clusters(0).Properties( \"Vertex_Color\" );\n\
\n\
	// Set up a temporary GridData object: this kind of GridData object\n\
	// is created through the instrinsic XSIFactory object (ie., it does\n\
	// not have to be defined via a Parameter on a property set.\n\
	var oGridData = XSIFactory.CreateGridData();\n\
\n\
	// Read the vertex <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a> values by transferring them into the GridData.  \n\
	// There are 4 Columns - R,G,B, and A and there is 1 Row for each vertex.\n\
	oGridData.Data = oClusterProp.Elements.Array;\n\
\n\
	LogMessage( \"Blue Component on Vertex 0: \" + oGridData.GetCell(2,0) );\n\
	LogMessage( \"Red Component on Vertex 2: \" + oGridData.GetCell(0,2) );\n\
\n\
	// Now we can change the vertex <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a> values\n\
	for ( var i=0; i&lt;oGridData.RowCount; i++ )\n\
	{\n\
           // Set RGBA value on each vertex\n\
	   oGridData.SetRowValues( i, Array( i*0.10, 0.50, 0.75, 0.1 ) );\n\
	}\n\
\n\
	// We MUST put the changed <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> back into the cluster property if we\n\
	// want our changes to take effect\n\
	oClusterProp.Elements.Array = oGridData.Data\n\
\n\
	// Now we can view the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> on a property page by creating a property\n\
	// <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> and \n\
	var oPSet = ActiveSceneRoot.AddCustomProperty( \"ClusterPropContents\" );\n\
	var oParam1 = oPSet.AddGridParameter( \"ClusterGrid\" );\n\
\n\
	var oLayout = oPSet.PPGLayout\n\
	var oPPGItem = oLayout.AddItem( \"ClusterGrid\", \"\", siControlGrid );\n\
	oPPGItem.SetAttribute( \"NoLabel\", true );\n\
\n\
	//Copy <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> from our free floating \n\
	//GridData object to the one on the Custom Property\n\
	var oGridDataOnPSet = oParam1.Value;\n\
	oGridDataOnPSet.Data = oGridData.Data;\n\
\n\
	// Set up labels so the user knows what the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> is\n\
	oGridDataOnPSet.SetColumnLabel( 0, \"R\" );\n\
	oGridDataOnPSet.SetColumnLabel( 1, \"G\" );\n\
	oGridDataOnPSet.SetColumnLabel( 2, \"B\" );\n\
	oGridDataOnPSet.SetColumnLabel( 3, \"A\" );\n\
\n\
	for ( i=0; i&lt;oGridData.RowCount; i++ )\n\
	{\n\
           oGridDataOnPSet.SetRowLAbel( i, \"Vertex \" + i.toString() );\n\
	}\n\
\n\
	// Now you can change the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> by using the labels\n\
	// (this doesn\'t change the copy of the <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> inside oGridData)\n\
	oGridDataOnPSet.SetCell( \"G\", \"Vertex 2\", 0.99 );\n\
\n\
	// Change some of the <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a> values and then see the updates\n\
	InspectObj( oPSet, null, null, siModal, false );\n\
	\n\
	oClusterProp.Elements.Array = oGridDataOnPSet.Data</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";