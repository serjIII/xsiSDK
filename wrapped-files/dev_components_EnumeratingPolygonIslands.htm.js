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
      <meta name=\"topicid\" content=\"GUID-6C089239-23C2-404A-92C1-694C1C1CFC92\" />\n\
      <meta name=\"indexterm\" content=\"filters: polygon islands\" />\n\
      <meta name=\"indexterm\" content=\"islands: enumerating or filtering\" />\n\
      <meta name=\"indexterm\" content=\"polygons: islands (enumerating)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Enumerating Polygon Islands</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6C089239-23C2-404A-92C1-694C1C1CFC92\"></a></span><div class=\"head\">\n\
            <h1>Enumerating Polygon Islands</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6CD94E9E-8BE2-4778-BA7A-91FF3F45FB04\"></a></span>This example demonstrates how to enumerate polygon islands by implementing a function\n\
               that returns an array of all the polygon islands, each one as a <a href=\"#!/url=./si_om/PolygonFaceCollection.html\">PolygonFaceCollection</a>.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS0712F8CE7932674FBBDF8F8482ED1B3D-0029\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-89A3F9C3-2BCB-43DB-8F76-27D604E3D8D1\"></a></span>JScript Example: enumerating polygon islands\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function GetIslands(in_obj) \n\
{\n\
	var arrIslands = new Array();\n\
	var plyPolygons = in_obj.ActivePrimitive.Geometry.Polygons;\n\
	var arrSeen = new Array(plyPolygons.Count);					// for optimization\n\
\n\
	for ( var i=0; i&lt;plyPolygons.Count; i++ ) {\n\
		// Skip any we\'ve already seen\n\
		if ( arrSeen[i] ) { continue; }\n\
		\n\
		// Stuff the current polygon into an XSICollection (custom \n\
		// filters only accept and return XSICollections)\n\
		var xsiCurrPolygons = new ActiveXObject(\"XSI.Collection\");\n\
		xsiCurrPolygons.Add(plyPolygons(i));\n\
\n\
		// Activate and apply the filter \n\
		var fltPolyIslandFilter = Application.Filters(\"Polygon_Island\");\n\
		var xsiCurrIslands = fltPolyIslandFilter.Subset(xsiCurrPolygons);\n\
		\n\
		// To return an actual PolygonFaceCollection instead of an\n\
		// XSICollection, we can convert it via the SubComponent \n\
		var plyCurrIslands = Dictionary.GetObject(xsiCurrIslands).SubComponent.ComponentCollection;\n\
		\n\
		// Indicate that we\'ve see all of these components (optimization) \n\
		for ( var j=0; j&lt;plyCurrIslands.Count; j++ ) {\n\
			arrSeen[plyCurrIslands(j).Index] = 1;\n\
		}\n\
		\n\
		// Add the PolygonFaceCollection of polygon islands to the return array\n\
		arrIslands.push(plyCurrIslands);\n\
	}\n\
\n\
	return arrIslands;\n\
}\n\
 \n\
 \n\
// Open the club bot sample scene and select the feet polygon mesh\n\
var strClubBot = XSIUtils.BuildPath(\n\
	Application.InstallationPath(siFactoryPath),\n\
	\"Data\", \"XSI_SAMPLES\", \"Scenes\", \"club_bot.scn\"\n\
);\n\
OpenScene(strClubBot, false);\n\
SelectObj(\"club_bot.BotFeet\");\n\
\n\
// Using this in a tool, you might use the selection:\n\
var e = new Enumerator(Selection);\n\
for ( ; !e.atEnd(); e.moveNext() ) {\n\
	var obj = e.item();\n\
	var arrPolyIslands = GetIslands(obj);\n\
	Application.LogMessage( \"# of polygon islands: \" + arrPolyIslands.length );\n\
}\n\
\n\
// Expected results:\n\
// INFO : # of arrPolyIslands: 2\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";