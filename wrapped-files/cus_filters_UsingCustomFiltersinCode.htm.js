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
      <meta name=\"topicid\" content=\"GUID-934DC573-7AC1-4C72-AC93-EECD49B59DA3\" />\n\
      <meta name=\"indexterm\" content=\"filters: using in scripting and C++\" />\n\
      <meta name=\"indexterm\" content=\"PickElement: custom filters\" />\n\
      <meta name=\"indexterm\" content=\"SIFilter: custom filters\" />\n\
      <meta name=\"indexterm\" content=\"SIFilter command\" />\n\
      <meta name=\"indexterm\" content=\"Match callbacks\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: Match\" />\n\
      <meta name=\"indexterm\" content=\"Application.Filters collection\" />\n\
      <meta name=\"indexterm\" content=\"Filters property (from Application)\" />\n\
      <meta name=\"indexterm\" content=\"Subset callbacks\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: Subset\" />\n\
      <meta name=\"indexterm\" content=\"Selection object: and custom filters\" />\n\
      <meta name=\"indexterm\" content=\"filters: Selection object\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using Custom Filters in Code</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-934DC573-7AC1-4C72-AC93-EECD49B59DA3\"></a></span><div class=\"head\">\n\
            <h1>Using Custom Filters in Code</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-145FA73C-A5F5-4FFB-A4C2-426DA55616AC\"></a></span> You can use custom filters in scripting and C++ code, just like any other Softimage\n\
               filter. For example, you can use custom filters with commands such as PickElement\n\
               and SIFilter.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var cloList = SIFilter( Application.Selection, \"My3DObjectFilter\" );</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F1C336AD-4ED1-4ED8-82C5-A99B8CB66B97\"></a></span>This call to SIFilter fires the My3DObjectFilter_Match callback for each object in\n\
               the selection list. Softimage takes care of marshalling the objects in the selection\n\
               to the Context objects expected by the Match callback. Note also that if the selection\n\
               contains something other than a 3D object, such as polygons or edges, Softimage gets\n\
               the X3DObject parent and passes it to Match. This is true for 3D object filters only;\n\
               other filter types will get whatever is in the selection.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-98633538-4748-45BD-B18A-06F4B3DDCC62\"></a></span>Custom filters are included in the Application.Filters collection, so you can use\n\
               custom filters with the object model:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var oFilter = Application.Filters(\"MyPolygonFilter\");\n\
var cloSubComponents = oFilter.Subset( Application.Selection );\n\
\n\
// For each object with selected polygons that matched the filter\n\
for (var objEnum = new Enumerator( cloSubComponents ) ; !objEnum.atEnd(); objEnum.moveNext() )\n\
{\n\
	var oObject = objEnum.item();\n\
\n\
	// Do something with each polygon\n\
	for (var polyEnum = new Enumerator( oObject.SubComponent.ComponentCollection ) ; !polyEnum.atEnd(); polyEnum.moveNext() )\n\
	{\n\
		var oPoly = polyEnum.item();\n\
		// Do something\n\
	}\n\
\n\
} </pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF4729CE-BF3A-4D9A-AC68-810BC5622B14\"></a></span>Note that for Subset, Softimage put the Selection object in the callback context,\n\
               so Subset gets whatever is selected. The same thing happens if you invoke oFilter.Subset()\n\
               with a collection of objects: Softimage puts the collection as is in the callback\n\
               context, and Subset gets whatever is in the collection.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";