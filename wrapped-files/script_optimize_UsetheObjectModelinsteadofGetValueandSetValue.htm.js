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
      <meta name=\"topicid\" content=\"GUID-D71BDCB3-10F1-436A-B3C2-E7B721BDBCE2\" />\n\
      <meta name=\"indexterm\" content=\"Performance: Commands vs. the Object Model\" />\n\
      <meta name=\"indexterm\" content=\"Translating from SetValue and GetValue to Parameters\" />\n\
      <meta name=\"indexterm\" content=\"Case Study: Placing Nulls Along an Animation Path\" />\n\
      <meta name=\"indexterm\" content=\"Starting with Commands\" />\n\
      <meta name=\"indexterm\" content=\"Timing Your Scripts\" />\n\
      <meta name=\"indexterm\" content=\"Creating an Object Model Version\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Use the Object Model instead of GetValue and SetValue</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Null\", \"si_cpp/classXSI_1_1Null.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"color\", \"si_cpp/group__RenderMapDefine.html#ga9b982a36d73688fd43fe5f3539824d21\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D71BDCB3-10F1-436A-B3C2-E7B721BDBCE2\"></a></span><div class=\"head\">\n\
            <h1>Use the Object Model instead of GetValue and SetValue</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7DEEBEA-DEFC-44ED-A2A0-925B22EA3F27\"></a></span>There are usually two ways to get something done when scripting in Softimage: Native\n\
               Scripting Commands and the Object Model.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-656F8B05-AD82-42EF-B22A-01E1A45FF436\"></a></span> <em class=\"strong\">Scripting Commands</em> are the set of Softimage-specific functions that generally correspond to most user\n\
               actions in the user interface, such as adding a 3D object to the scene graph (<a href=\"#!/url=./si_cmds/CreatePrim.html\">CreatePrim</a>), connecting shaders to connection points (<a href=\"#!/url=./si_cmds/SIConnectShaderToCnxPoint.html\">SIConnectShaderToCnxPoint</a>) or changing a parameter value in any property set (<a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a>), etc.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-78660A80-94D2-4034-BC0E-1B7FD9D76F61\"></a></span>The <em class=\"strong\">Object Model</em> gives you access at a much deeper level by mimicking the 3D world, where you create\n\
               instances of classes that correspond to objects such as <a href=\"#!/url=./si_om/Camera.html\">Camera</a>s, <a href=\"#!/url=./si_om/NurbsSurfaceMesh.html\">NurbsSurfaceMesh</a>es, <a href=\"#!/url=./si_om/Material.html\">Material</a>s, <a href=\"#!/url=./si_om/Operator.html\">Operator</a>s, <a href=\"#!/url=./si_om/ControlPoint.html\">ControlPoint</a>s, <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>s, <a href=\"#!/url=./si_om/Pass.html\">Pass</a>es etc. These classes provide functions (methods and properties) that allow you to\n\
               access something about that object, such as the rotation of a sphere, its vertex color,\n\
               a camera\'s interest, an operator\'s connection point, etc.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-3F2CEA45-6492-415F-9F9A-A67AEA3A8DC8\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6DC14A09-667A-458F-BB9F-695B1576F51E\"></a></span>For more information on the difference between scripting commands and the object model,\n\
                     see <a href=\"#!/url=./files/dev_intro-1.htm\">Understanding the Softimage SDK Architecture</a>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS6DFFA3F900E7A940AF2908847EB46B7A-0004\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-47D335E1-21BD-4698-8F9B-C703A7E94DCF\"></a></span> Performance: Commands vs. the Object Model\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD78576E-00A0-460D-987E-DCDF14919BD5\"></a></span>There are two reasons why a script written with the object model runs faster than\n\
                  a script written with commands:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0956F01E-1CFC-48F8-A35E-31FD3ADA12CC\"></a></span>When commands run, they log command echoes to the Script Editor by default. It takes\n\
                        time to log commands, so if the log window is open your script runs slower and the\n\
                        more it\'s open the slower your script is.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3900A6C6-B29F-4403-83EC-4212EBDC4FDA\"></a></span>You can turn logging off temporarily; however, commands still run slower because...\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B45C1A3B-CC53-45BD-BEF0-8B0185DCF8ED\"></a></span>The object model accesses the core of Softimage at a lower level, meaning that there\n\
                        are more layers of code that commands have to negotiate to perform a task than the\n\
                        object model. The object model is implemented using a COM (ActiveX) layer which basically\n\
                        negotiates directly with the core engine of Softimage.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS6DFFA3F900E7A940AF2908847EB46B7A-0005\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AFB36527-6276-4382-A94D-BDA9E535CF88\"></a></span> Translating from SetValue and GetValue to Parameters\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B5DE0532-01E9-4F96-A718-19D4D1810F2F\"></a></span>The <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> and <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> commands basically operate on property sets, which contain a lot of the information\n\
                  for Softimage scene objects. If you want to switch from using scripting commands to\n\
                  the object model, you will definitely need to learn how to translate what you used\n\
                  to do with these commands to the object model.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CC8E3A5A-8EAC-4688-83A0-EC6DC7943504\"></a></span>The object-model equivalent of the GetValue and SetValue commands are the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> and <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> objects which allow you to perform almost all the same functions. For example, here\n\
                  is a JScript code example that demonstrates how to use SetValue:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	/*\n\
		The following example uses SetValue to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> various parameters \n\
		on some scene elements\n\
	*/\n\
\n\
	NewScene( null, false );\n\
\n\
	// Create a sphere and change the wireframe <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a> to red\n\
	// This demonstrates we can use SetValue for object properties.\n\
	CreatePrim( \"Sphere\", \"MeshSurface\" );\n\
	DeselectAll();\n\
	MakeLocal( \"sphere.display\", siNodePropagation );\n\
	<em class=\"strong\">SetValue( \"sphere.display.wirecol\", 15 );</em>\n\
\n\
	CreatePrim( \"Circle\", \"NurbsCurve\" );\n\
	CreatePrim( \"Circle\", \"NurbsCurve\" );\n\
	CreatePrim( \"Circle\", \"NurbsCurve\" );\n\
	CreatePrim( \"Circle\", \"NurbsCurve\" );\n\
\n\
	// Set the radius of all circles to 1\n\
	// This demonstrates we can use SetValue in a bulk-edit fashion.\n\
	<em class=\"strong\">SetValue( \"circle*.circle.radius\", 1 );</em>\n\
\n\
	// Set the radius of \"circle\" to 2, and the radius of \"circle1\" to 3\n\
	// This demonstrates we can use SetValue with an array of values.\n\
	<em class=\"strong\">SetValue( \"circle.circle.radius,circle1.circle.radius\", new Array(2,3) );</em>\n\
\n\
	// Hide the grid in all views, for all cameras (except scene camera)\n\
	// This demonstrates we can use SetValue for cameras, views, etc.\n\
	<em class=\"strong\">SetValue( \"Views.*.*.camvis.gridvis\", false );</em>\n\
\n\
	// Change current frame to 30 \n\
	// This demonstrates we can use SetValue for playback settings\n\
	<em class=\"strong\">SetValue( \"PlayControl.Current\", 30.000 );</em></pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D239B858-BE71-42BE-8BC8-15950EDF42AD\"></a></span>...and this is the equivalent script written almost entirely with the object model\n\
                  (the <a href=\"#!/url=./si_cmds/MakeLocal.html\">MakeLocal</a> command is the exception).\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	/*\n\
		The following example uses SetValue to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> various parameters\n\
		on some scene elements\n\
	*/\n\
\n\
	NewScene( null, false );\n\
	var root = ActiveSceneRoot;\n\
\n\
	// Create a sphere and change the wireframe <a href=\"javascript:void(0)\" data=\"color\" class=\"a_multireflink\">color</a> to red\n\
	// This demonstrates the OM equivalent of using\n\
	// SetValue for object properties.\n\
	var obj = root.AddGeometry( \"Sphere\", \"MeshSurface\" );\n\
	var prop = 	MakeLocal( obj.Properties( \"Display\" ), siNodePropagation );\n\
\n\
	// MakeLocal returns an XSICollection containing the new local Display\n\
	// property, so we can use it to get at the Wireframe Color parameter\n\
	<em class=\"strong\">prop(0).Parameters( \"wirecol\" ).Value = 15;</em>\n\
\n\
	// Make four circles and add them to an XSICollection\n\
	var circles = XSIFactory.CreateActiveXObject( \"XSI.Collection\" );\n\
	for (var i=0; i&lt;4; i++)\n\
	{\n\
		circles.Add( root.AddGeometry( \"Circle\", \"NurbsCurve\" ) );\n\
	}\n\
\n\
	// Set the radius of all circles to 1\n\
	// This demonstrates how to access the Radius parameter the long way\n\
	var c = new Enumerator( circles );\n\
	for (; !c.atEnd(); c.moveNext() )\n\
	{\n\
		<em class=\"strong\">c.item().Parameters( \"radius\" ).Value = 1;</em>\n\
    }\n\
\n\
    // Set the radius of the 1st circle to 2, and the radius of the 2nd to 3\n\
    // This demonstrates how to access the Radius parameter with a shortcut\n\
	<em class=\"strong\">circles(0).radius.Value = 2;\n\
	circles(1).radius.Value = 3;</em>\n\
\n\
	// Since viewports are not available in the OM, there is no way to hide\n\
	// the grid in all views, for all cameras (except scene camera) as you\n\
	// can with SetValue:\n\
	//\n\
	//      SetValue( \"Views.*.*.camvis.gridvis\", false );\n\
	//\n\
	// However, you can hide the grid for the scene camera via the OM.\n\
	// NB: The following three lines can all be combined into a single\n\
	//     line, but it has been split up here for readability:\n\
	<em class=\"strong\">var scncam = root.FindChild( \"\", siCameraPrimType );\n\
	var camvis = scncam.Properties( \"Camera Visibility\" )\n\
	camvis.Parameters( \"gridvis\" ).Value = false;</em>\n\
\n\
	// Change current frame to 30\n\
	// This demonstrates the OM equivalent of using SetValue for playback \n\
	// settings.\n\
	// NB: Again, this could be a single line but is split for readability:\n\
	<em class=\"strong\">var playctrl = ActiveProject.Properties( \"Play Control\" )\n\
	playctrl.Parameters( \"Current\" ).Value = 30.000;</em></pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS6DFFA3F900E7A940AF2908847EB46B7A-0006\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-544A3EFB-1E7F-48C0-92A0-BBE452B1F873\"></a></span> Case Study: Placing Nulls Along an Animation Path\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7002D97F-72BE-4308-A785-447D16D11180\"></a></span>Courtesy of Michael Isner (www.isner.com)\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-30F8E08F-B9BF-4A31-BCE7-0B474D039C29\"></a></span>The way I work is usually to rough out a script with commands and then remake pieces\n\
                  of it with the object model to make it faster. Here\'s a quick and simple example of\n\
                  such a process: animating a sphere and placing a null at every frame.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8AB1D02B-1430-4177-85A4-187087A122FC\"></a></span>So lets start with a script to animate a sphere. This is just a cut and paste of the\n\
                  log window (with some cosmetic changes to make it easier to read):\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">	NewScene\n\
	CreatePrim \"Sphere\", \"NurbsSurface\"\n\
	SaveKey \"sphere.kine.local.posx,sphere.kine.local.posy\" _\n\
		&amp; \",sphere.kine.local.posz\", 1\n\
	SetValue \"PlayControl.Current\", 50\n\
	Translate , -16.6915152140782, 1.0970178921512E-15, -17.9162534756914, _\n\
		siRelative, siView, siObj, siXYZ\n\
	SaveKey \"sphere.kine.local.posx,sphere.kine.local.posy\" _\n\
		&amp; \",sphere.kine.local.posz\", 50\n\
	SetValue \"PlayControl.Current\", 100\n\
	Translate , -17.3869950146648, -9.15956686650513E-16, 14.9592019311598, _\n\
		siRelative, siView, siObj, siXYZ\n\
	SaveKey \"sphere.kine.local.posx,sphere.kine.local.posy\" _\n\
		&amp; \",sphere.kine.local.posz\", 100</pre></div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS6DFFA3F900E7A940AF2908847EB46B7A-0007\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2130B918-BAB0-4A8D-8556-6BF64C826203\"></a></span> Starting with Commands\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F1E11D6-3056-43E9-9196-6D1E201EB13D\"></a></span>So to place a null at every frame we need to know how to cycle through time. Scrubbing\n\
                     the timeline gives us the feedback:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">	SetValue \"PlayControl.Current\", 27</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-450A165F-B365-4345-AF07-A6F12717FD51\"></a></span>So it\'s pretty obvious if we want to cycle through time we could do something like:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">	for i = 0 to 100\n\
		SetValue \"PlayControl.Current\", i\n\
	next</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-596F3849-16C5-4024-B980-EF9128DFCBC0\"></a></span>So next we need to get a null each frame, which is easy, just cut and paste getting\n\
                     a null.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	GetPrim \"Null\"</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B33375CE-CD56-4167-9EE4-3EA0306CA320\"></a></span>Of course by, just doing <span class=\"code\" translate=\"no\">GetPrim \"<a href=\"javascript:void(0)\" data=\"Null\" class=\"a_multireflink\">Null</a>\"</span> it\'s going to be hard to keep track of all 100 nulls. To get the latest null we made,\n\
                     we should return the newly created null (or object) into a variable name like <span class=\"code\" translate=\"no\">currentNull</span>. Do this by:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	Set currentNull = GetPrim (\"Null\")</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-289146FE-20ED-4E4D-994B-41E3FFAB61A4\"></a></span>Ok, so the next thing we need to do is get the sphere\'s position at each frame and\n\
                     put the current null there. To <em class=\"mild\">get</em> a value just find it in some slider form and move it, copy and paste the log, and\n\
                     turn the part where it says <span class=\"code\" translate=\"no\">SetValue</span> into <span class=\"code\" translate=\"no\">GetValue</span>. So to get the sphere\'s global position, open up the global transform and slide the\n\
                     positions for x, y, and z. It will return:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">	SetValue \"sphere.kine.global.posx\", -9.535\n\
	SetValue \"sphere.kine.global.posy\", 0.233\n\
	SetValue \"sphere.kine.global.posz\", -1.744</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-01CFC008-A1AD-479F-A83B-75F749988B48\"></a></span>So one of these lines would become:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	x = GetValue(\"sphere.kine.global.posx\")</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FBFC5425-B5CE-42D8-B7CB-B62A72888333\"></a></span>You can see we also had to add brackets. You need to do this with a command anytime\n\
                     you set the result equal to a variable. Notice we didn\'t use the word <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a></span> at the beginning like we did when getting the null. That\'s because <span class=\"code\" translate=\"no\">x</span> is just a number but <span class=\"code\" translate=\"no\">currentNull</span> is returning an object so we have to use the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a></span> keyword.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7DF3BD4A-1874-4A97-B3E3-BD0FD843897B\"></a></span>So now let\'s bring this all together and log the position of the sphere at each frame.\n\
                     It will look like:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	for i = 0 to 100\n\
		SetValue \"PlayControl.Current\", i\n\
		x = GetValue(\"sphere.kine.global.posx\")\n\
		y = GetValue(\"sphere.kine.global.posy\")\n\
		z = GetValue(\"sphere.kine.global.posz\")\n\
		logmessage \"(\"&amp; x &amp;\",\"&amp; y &amp;\",\"&amp; z &amp; \")\"\n\
	next\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF2DBFC1-44E1-45C5-AD0B-509C219E6AEE\"></a></span>So easy enough, now we need to bring in that null and move it to my x, y and z values.\n\
                     If I move something it returns:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	Translate , 0, 0, 0, siRelative, siView, siObj, siZ</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-508CA24D-16E7-46BA-B086-E3C538B26A96\"></a></span>Right off the bat there should be clue this isn\'t exactly right because it says <span class=\"code\" translate=\"no\">siRelative</span> which means relative coordinates (not global like we are getting in the return values\n\
                     from the sphere). If I\'m not sure what\'s happening with a command I just cut and pasted,\n\
                     I look quickly in the help. In this case it would tell us that we should use <span class=\"code\" translate=\"no\">siAbsolute</span> instead as the mode for the <span class=\"code\" translate=\"no\">siDeltaMode</span>. So bringing in the line that gets us the null as well gives us the script:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	dim i, x, y, z\n\
	for i = 0 to 100\n\
		SetValue \"PlayControl.Current\", i\n\
		x = GetValue(\"sphere.kine.global.posx\")\n\
		y = GetValue(\"sphere.kine.global.posy\")\n\
		z = GetValue(\"sphere.kine.global.posz\")\n\
		Set currentNull = GetPrim (\"Null\")\n\
		Translate currentNull, x, y, z, siAbsolute, siView, siObj, siXYZ\n\
	next</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E860FB8-C3C4-45C0-B592-B12352DC15D7\"></a></span>Ok it works. You may have noticed I added the line: <span class=\"code\" translate=\"no\">dim i, x, y, z</span> at the beginning. I did this because by declaring variables you will speed up your\n\
                     scripts. In fact it\'s a good habit to put the line <span class=\"code\" translate=\"no\">Option Explicit</span> on all your scripts because it will error every time you hit an undeclared variable\n\
                     making your scripts faster and easier to debug (pointing out variable typos and stuff\n\
                     like that).\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS6DFFA3F900E7A940AF2908847EB46B7A-0008\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-B6C9D6FF-5FFF-441B-94F1-54D89A8862E0\"></a></span> Timing Your Scripts\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A802A286-4E6B-4348-947F-FFA5328BF84F\"></a></span>How fast your scripts are may not be an issue. If that\'s the case, which it probably\n\
                     is doing something simple without extensive looping, then just use commands and call\n\
                     it a day.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C5BC4F3-BDD4-40A7-8A63-F4AA20A9E092\"></a></span>However if you\'re doing something that you need faster, but may not have time to redo\n\
                     it in C++, then using the Object Model may be a very good option.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2EF52AF5-CCE0-4E04-96AA-BB720A641844\"></a></span>Here\'s a simple variation on the script that returns how many seconds it took:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	time_in = timer\n\
	dim i, x, y, z\n\
	for i = 0 to 100\n\
		SetValue \"PlayControl.Current\", i\n\
		x = GetValue(\"sphere.kine.global.posx\")\n\
		y = GetValue(\"sphere.kine.global.posy\")\n\
		z = GetValue(\"sphere.kine.global.posz\")\n\
	Set currentNull = GetPrim (\"Null\")\n\
	Translate currentNull, x, y, z, siAbsolute, siView, siObj, siXYZ\n\
	next\n\
	time_out = timer\n\
	logmessage \"elapsed time: \" &amp; round(time_out - time_in,3) </pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A0B137EE-731A-45F7-86D2-1B6A51606FE0\"></a></span>On my machine it took 17.3611 seconds. Note that this was with the log window open.\n\
                     If you experiment a bit timing scripts you\'ll realize:\n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"GUID-9A149291-2543-475B-BD5A-D34B2BFA29E9\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F6FE3B1-42E5-41DA-A1C3-C66A6FD720FB\"></a></span>It takes time to log commands. If the log window is open your script will be slower.\n\
                           The more it\'s open the slower your script will be.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-96FDEE13-98DF-4D1B-B131-FE2F1C3EA6DE\"></a></span>By dragging and dropping your script to a button it will be faster because it doesn\'t\n\
                           log. In fact, just by dragging and dropping that script to a button, I dropped the\n\
                           time by to 5.787 seconds.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C1EACC37-063B-4D09-B1AB-6E8A6AD2BD3D\"></a></span>One of the reasons the Object Model is faster, is that it also doesn\'t log anything.\n\
                           Another is that it has lower level access to the core of Softimage.\n\
                        </p> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS6DFFA3F900E7A940AF2908847EB46B7A-0009\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-90C8E27B-8F54-49DF-B73A-98BBDFFC2C3D\"></a></span> Creating an Object Model Version\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-00CA3222-0CD8-47AB-8C96-9C8294D39FB7\"></a></span>So let\'s look at modifying this script with the object model. First let\'s look at\n\
                     getting the position. One way to do this with the OM would be:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	x = mySphere.Kinematics.Global.parameters(\"posx\").value</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-2395C3FF-28AE-440F-A26E-BB6654A4FAFF\"></a></span>You can see that\'s not really calling on any command like GetValue, but instead digging\n\
                     into the properties of that sphere object. This would return a number and we could\n\
                     substitute lines like this in our original script instead of the GetValues.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5E80AD04-2391-45C0-AC1A-FBD573211214\"></a></span>However, real time loss in this script is the fact that we are scrubbing through time.\n\
                     In fact if this sphere was located in a much bigger scene we would lose a great deal\n\
                     of time updating every object in the scene each frame as we modified the PlayControl.\n\
                     One big timesaver we could do here is to pick up the entire transform (description\n\
                     of of the Scale, Rotation, Position) of the sphere. By picking up the whole transform\n\
                     we can define where in time we read the value. Reading the transform at the current\n\
                     time would look like this:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> currentTransform = mySphere.Kinematics.Global.Transform</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF99B084-A360-4101-9632-7AA923BCD91C\"></a></span>Getting it over time would look like this:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> currentTransform = mySphere.Kinematics.Global.Transform(currentFrame)</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8A8FF8B-20CF-44F6-9183-FD77C64AE178\"></a></span>But now we don\'t have have a easy way to deal with number like <span class=\"code\" translate=\"no\">x = 34.333:</span> we have a transform object. If you look in the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a> you can find many useful objects for manipulating space like: <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a>, <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a>, <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a>, <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a>, <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a> and <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a>. If you scroll down a bit farther to <a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a> you will also find a pile of tools for creating these objects and converting between\n\
                     different Spaces.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5E01C54E-2B5B-4A18-8130-70E01110A981\"></a></span>Most of these objects, including <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a>, offer a pile of tools, including methods to convert them to other objects. In our\n\
                     case, we have a transformation and we want to turn it into an xyz position. A quick\n\
                     browse shows us there\'s a method called <a href=\"#!/url=./si_om/SITransformation.GetTranslation.html\">SITransformation.GetTranslation</a> which returns a vector of the xyz position. So our script would look like this:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> posVector = xsimath.CreateVector3\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> currentTransform = mySphere.Kinematics.Global.Transform(i)\n\
	currentTransform.GetTranslation posVector </pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-53B4E304-4C4A-47D0-A563-5258AABBC944\"></a></span>Now that we have the positions, let\'s integrate it into our original script. A quick\n\
                     look in the help for SIVector3 tells us that the easiest way to get the x from it\n\
                     is to write <span class=\"code\" translate=\"no\">posVector.x</span>. So our script becomes:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	for i = 0 to 100\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> posVector = xsimath.CreateVector3\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> currentTransform = mySphere.Kinematics.Global.Transform(i)\n\
		currentTransform.GetTranslation posVector \n\
		Set currentNull = GetPrim (\"Null\")\n\
		Translate currentNull, posVector.x, posVector.y, posVector.z, _\n\
			siAbsolute, siView, siObj, siXYZ\n\
	next</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-174DFEC0-93E5-4B37-9CD8-DDEA858EA130\"></a></span>But if you run this it doesn\'t work. The reason is that we haven\'t yet defined what\n\
                     <span class=\"code\" translate=\"no\">mySphere</span> is. With commands, it\'s often good enough just to have the name of something. With\n\
                     the object model you always need an object. Probably the easiest and most frequent\n\
                     way to do this is from the selection. You could add the line at the beginning:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	SelectObj \"sphere\"\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> mySphere = Selection(0)</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-00A8F1B6-A3BD-4FB3-982F-E4016AEDF829\"></a></span>Some people with programming experience may find working this way a bit hacky, and\n\
                     would like something that doesn\'t touch the selection. Another approach to the same\n\
                     thing could be to get the scene root and then to search from there downwards for the\n\
                     name <span class=\"code\" translate=\"no\">sphere</span>. Here\'s our working script with these lines:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oRoot = Application.ActiveProject.ActiveScene.Root\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> mySphere = oRoot.FindChild(\"sphere\")\n\
	for i = 0 to 100\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> posVector = xsimath.CreateVector3\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> currentTransform = mySphere.Kinematics.Global.Transform(i)\n\
		currentTransform.GetTranslation posVector \n\
		Set currentNull = GetPrim (\"Null\")\n\
		Translate currentNull, posVector.x, posVector.y, posVector.z, _\n\
			siAbsolute, siView, siObj, siXYZ\n\
	next</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7EEA223-353B-4C0D-87B5-B4421EC4C579\"></a></span>So at this point we could call it a day and move on. It is not necessary to do everything\n\
                     in the OM. I rarely have time to do it and usually only use the OM where I think it\n\
                     makes the biggest performance difference, and where it\'s the most useful for the task\n\
                     at hand. But in the interest of teaching people the OM, I\'m going to continue to pick\n\
                     apart this script.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-950F18A6-61AC-4E3A-85EB-912B30815F33\"></a></span>So a quick look at our script I can see there are still two things we are doing with\n\
                     commands: getting the null and translating it. As far as the translation goes we can\n\
                     save a great deal of time, by not converting <span class=\"code\" translate=\"no\">currentTransform</span> to xyz coordinates and Translating, but by just swapping over the transform to <span class=\"code\" translate=\"no\">currentNull</span>. That would look like:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oRoot = Application.ActiveProject.ActiveScene.Root\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> mySphere = oRoot.FindChild(\"sphere\")\n\
	for i = 0 to 100\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> currentTransform = mySphere.Kinematics.Global.Transform(i)\n\
		Set currentNull = GetPrim (\"Null\")\n\
		currentNull.Kinematics.Global.Transform = currentTransform \n\
	next</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC5BA184-E798-4E94-B29B-50722CCF447A\"></a></span>So just to finish the job and make it 100% OM, let\'s get the null from the OM. The\n\
                     nice thing about the <a href=\"#!/url=./si_om/X3DObject.AddPrimitive.html\">AddPrimitive (X3DObject)</a> method is that you define the parent as you create the new object. So let\'s put the\n\
                     null as the child of the sphere and our final script would be:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	dim oRoot, mySphere, currentTransform, currentNull\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oRoot = Application.ActiveProject.ActiveScene.Root\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> mySphere = oRoot.FindChild(\"sphere\")\n\
	for i = 0 to 100\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> currentTransform = mySphere.Kinematics.Global.Transform(i)\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> currentNull= mySphere.AddPrimitive(\"Null\")\n\
		currentNull.Kinematics.Global.Transform = currentTransform \n\
	next</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-20AAF5FB-7EC5-4AF2-8FA7-6FD8AB14D2C8\"></a></span>So quickly timing it, this takes: 2.3148 seconds on my machine. That\'s 2.5 times faster\n\
                     than the command version from a button, and 7.5 times faster than commands run from\n\
                     the UI.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";