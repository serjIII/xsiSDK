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
      <meta name=\"topicid\" content=\"GUID-6C028D44-CEB4-40DF-A429-D99DBFA0D4A6\" />\n\
      <meta name=\"indexterm\" content=\"filters: properties\" />\n\
      <meta name=\"indexterm\" content=\"properties: filtering\" />\n\
      <meta name=\"indexterm\" content=\"constraints: filtering\" />\n\
      <meta name=\"indexterm\" content=\"joints: filtering\" />\n\
      <meta name=\"indexterm\" content=\"operators: filtering\" />\n\
      <meta name=\"indexterm\" content=\"schematic view\" />\n\
      <meta name=\"indexterm\" content=\"BelongsTo method (from ProjectItem)\" />\n\
      <meta name=\"indexterm\" content=\"Local Material filter\" />\n\
      <meta name=\"indexterm\" content=\"filters: Local Material\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Writing Property Filters</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6C028D44-CEB4-40DF-A429-D99DBFA0D4A6\"></a></span><div class=\"head\">\n\
            <h1>Writing Property Filters</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B0CE04A0-004C-417B-8FED-97069B42117A\"></a></span> In a 3D view, a property filter can filter the selection of constraints, joints,\n\
               and operators.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2F84066F-9267-4833-B91B-751638C2A2FC\"></a></span>In a schematic view, a property filter can filter the selection of materials (and\n\
               of particle types). Note that in a schematic view, property filters do not modify\n\
               the selection of constraint and operator links: Softimage does not call the filter\n\
               when a user selects a link in the schematic view.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5512518D-DBE5-4546-93A3-F07F3DD30F9F\"></a></span>Property filters are not available in explorer views.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A1FA027-10C3-4894-A5A9-0FC2AA24A224\"></a></span>The following example shows a property filter that filters out inactive constraints,\n\
               so that only active constraints are selected.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function ActiveConstraints_Match( oContext )\n\
{\n\
	// Get the Constraint object\n\
	var oObject = oContext.GetAttribute( \"Input\" );\n\
	var bMatch = false;\n\
\n\
	// Check if the object is an active constraint\n\
	if ( oObject.BelongsTo( siConstraintFamily ) &amp;&amp; oObject.Parameters.Item(\"active\").Value == true )\n\
	{\n\
		bMatch = true;\n\
	}\n\
\n\
	return( bMatch );\n\
}</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4DCC981-68DF-4095-B3C8-D7BB6F256331\"></a></span>Property filters that work with constraints, joints, and operators require certain\n\
               camera visibility options in a 3D view:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F08D124-67AC-4515-8A36-C9BBC7162DD1\"></a></span>For constraints and operators, relation links must be visible in the 3D view (press\n\
                     Shift+S, and on the Attributes property page, select the Relations check boxes).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-50451408-5436-4ED4-9014-D421BE65CFB5\"></a></span>For joints, the joints must be visible in the 3D view (press Shift+S, and on the Attributes\n\
                     property page, select the Chain Joint Rotation Limits check boxes).\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C3662778-EA1A-4572-80B2-BEA732D69BA0\"></a></span>Note that clicking anywhere in a 3D view triggers the Match callback for each constraint,\n\
               joint, and operator in the scene, but Softimage selects only the properties, if any,\n\
               the user clicked.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DBB1AF67-E9DF-42C8-B295-51E5B7827F25\"></a></span>You can also use a property filter to select objects based on their properties. For\n\
               example, Softimage includes a Local Material property filter that selects objects\n\
               with local materials. The Local Material filter shipped with Softimage is written\n\
               in VBScript; a JScript version is shown below.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function MyLocalMaterial_Match( oContext )\n\
{\n\
	// Get the input object, which could a Primitive, X3DObject, Constraint, Joint, ...\n\
	var oInput = oContext.GetAttribute( \"Input\" );\n\
\n\
	// Return value\n\
	var bMatch = false;\n\
\n\
	// Try to get a 3D object from the input object\n\
	var o3DObject = Get3DObject( oInput );\n\
\n\
	// If we have a 3D object, check its local properties for a material\n\
	if ( o3DObject != null &amp;&amp; classname( o3DObject ) == \"X3DObject\" )\n\
	{\n\
		for (var enumerator = new Enumerator( o3DObject.LocalProperties ) ; !enumerator.atEnd(); enumerator.moveNext())\n\
		{\n\
			var oProperty = enumerator.item();\n\
			if ( classname( oProperty ) == \"Material\" )\n\
			{\n\
				bMatch = true;\n\
				break;\n\
			}\n\
		}\n\
\n\
	}\n\
\n\
	return ( bMatch );\n\
}</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9B1E9289-B24A-479D-8A6B-3D774F5FEC8A\"></a></span>Property filters have to be able to handle any type of object, because they don\'t\n\
               always get a 3D object from Softimage. For example, when a user uses the mouse to\n\
               select objects in a 3D view, the filter gets Primitive objects, not X3DObjects. In\n\
               addition, Softimage calls the Match callback for every constraint, joint, and operator\n\
               in the scene.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function Get3DObject( oObject )\n\
{\n\
	var o3DObject = null;\n\
\n\
	if ( classname( oObject ) == \"X3DObject\"  )\n\
	{\n\
		o3DObject = oObject ;\n\
	}\n\
	else if ( classname( oObject ) == \"Primitive\" )\n\
	{\n\
		o3DObject = oObject.Parent;\n\
	}\n\
\n\
	return( o3DObject );\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";