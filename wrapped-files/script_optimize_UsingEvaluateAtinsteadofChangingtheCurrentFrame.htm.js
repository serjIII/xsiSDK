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
      <meta name=\"topicid\" content=\"GUID-C8541FD0-97F0-459F-9478-7F97BECC7E22\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using EvaluateAt() instead of Changing the Current Frame</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C8541FD0-97F0-459F-9478-7F97BECC7E22\"></a></span><div class=\"head\">\n\
            <h1>Using EvaluateAt() instead of Changing the Current Frame</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-23026E38-4431-4F0D-B0DB-587AD329C2CE\"></a></span>If you are writing a script that visits one or more objects at each (or several) frames\n\
               in the timeline, you should consider using the <a href=\"#!/url=./si_om/ProjectItem.EvaluateAt.html\">EvaluateAt (ProjectItem)</a> method instead of changing the current frame using the SetValue command:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">	SetValue( \"PlayControl.Current\", &lt;new_time&gt; );</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED417A16-342F-4C35-A292-835400286C73\"></a></span>The EvaluateAt method is much faster than the SetValue method, in large part due to\n\
               the fact that nothing gets logged when you run object model methods. The following\n\
               example times the two methods, performing otherwise identical activities in the scene:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	// Set up a scene with a null\n\
	NewScene( null, false );\n\
	var root = ActiveSceneRoot;\n\
	var obj = root.AddNull();\n\
\n\
	// Add some animation on the null\'s position using an fcurve\n\
	var xkeys = new Array( 1.0, -8.153, 50, 0.197, 100, 9.61 );\n\
	var ykeys = new Array( 1.0, 7.015, 50, -1.92, 100, 7.015 );\n\
	var zkeys = new Array( 1.0, -0.702, 50, 0.192, 100, -0.702 );\n\
\n\
	var xfc = obj.posx.AddFCurve2( xkeys, siStandardFCurve );\n\
	var yfc = obj.posy.AddFCurve2( ykeys, siStandardFCurve );\n\
	var zfc = obj.posz.AddFCurve2( zkeys, siStandardFCurve );\n\
\n\
	// For each frame in the scene, time how long it takes to get \n\
	// the object and <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> an SIVector3 object with both using\n\
	// the Play Controls and the EvaluateAt method\n\
	var evalobj, pos, posm, dt\n\
\n\
	// ------------------------------------------------------------\n\
	// EvaluateAt...\n\
	var dt = new Date();\n\
	var starttime = dt.getTime();\n\
\n\
	for ( var i=1; i&lt;=100; i++ )\n\
	{\n\
		evalobj = obj.EvaluateAt(i);\n\
		pos = XSIMath.CreateVector3();\n\
		posm = XSIMath.CreateVector3();\n\
		posm.Set( .05, .1, .15 );\n\
\n\
		pos.Set( evalobj.posx.Value, evalobj.posy.Value, evalobj.posz.Value );\n\
		pos.AddInPlace( posm ); \n\
		evalobj.posx = pos.X;\n\
		evalobj.posy = pos.Y;\n\
		evalobj.posz = pos.Z;\n\
	}\n\
\n\
	dt = new Date();\n\
	LogMessage( \"EvaluateAt() took \" + ( dt.getTime() - starttime ) \n\
			+ \" milliseconds to complete.\" );\n\
\n\
\n\
	// ------------------------------------------------------------\n\
	// Play Controls...\n\
	dt = new Date();\n\
	starttime = dt.getTime();\n\
\n\
	var currframe = 1;\n\
	SetValue( \"PlayControl.Current\", currframe )\n\
	while ( currframe &lt; 100 )\n\
	{\n\
		pos = XSIMath.CreateVector3();\n\
		posm = XSIMath.CreateVector3();\n\
		posm.Set( .05, .1, .15 );\n\
\n\
		pos.Set( obj.posx.Value, obj.posy.Value, obj.posz.Value );\n\
		pos.AddInPlace( posm );\n\
 \n\
		obj.posx = pos.X;\n\
		obj.posy = pos.Y;\n\
		obj.posz = pos.Z;\n\
\n\
		currframe += 1;\n\
		SetValue( \"PlayControl.Current\", currframe )\n\
	}\n\
\n\
	dt = new Date();\n\
	LogMessage( \"Play Controls took \" + ( dt.getTime() - starttime ) \n\
			+ \" milliseconds to complete.\" );\n\
\n\
	// ------------------------------------------------------------\n\
	// Results.................\n\
	//INFO : EvaluateAt() took 371 milliseconds to complete.\n\
	//INFO : Play Controls took 1973 milliseconds to complete.</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";