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
      <meta name=\"topicid\" content=\"GUID-EFEA969D-656A-464A-9C57-851F2BFD990A\" />\n\
      <meta name=\"indexterm\" content=\"fcurves: profile: creating and accessing\" />\n\
      <meta name=\"indexterm\" content=\"fcurves: animation: creating and accessing\" />\n\
      <meta name=\"indexterm\" content=\"fcurves: copying animation\" />\n\
      <meta name=\"indexterm\" content=\"animation: copying fcurves\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>FCurves</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EFEA969D-656A-464A-9C57-851F2BFD990A\"></a></span><div class=\"head\">\n\
            <h1>FCurves</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B04A2B20-755C-4257-9322-C2E7EFBD9853\"></a></span>There are two kinds of fcurves that are used with parameters. Both of these types\n\
               are represented in the SDK by the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html\">FCurve</a> class (see <a href=\"#!/url=./si_om/FCurve.DependsOnFrameRate.html\">FCurve.DependsOnFrameRate</a> or FCurve::GetDependsOnFrameRate):\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F4154F1-34F0-47CC-BA05-63E5E70ECEB7\"></a></span> <em class=\"strong\">animation fcurves</em>: fcurves that drive a parameter over time (where the x-axis represents the scene\n\
                     time—for example, an fcurve source that drives an object\'s position in X, created\n\
                     by setting animation keys on the posx parameter.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-24FCDA3B-762B-455A-BF5C-0DEEB6026D1C\"></a></span> <em class=\"strong\">profile fcurves</em>: fcurves where the meaning of the x-axis is more arbitrary (it depends on the context)—for\n\
                     example, an fcurve parameter added to a custom property set.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0028\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9124A66F-7F8E-46CA-8F32-6F3258D55D51\"></a></span> Creating and Accessing Profile FCurves\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4AAE06A2-E4B1-487D-B60A-058619685E00\"></a></span>Profile fcurves only populate parameters of a specific type: FCurve parameters. These\n\
                  are generally only found on custom property sets and can be added with <a href=\"#!/url=./si_om/CustomProperty.AddFCurveParameter.html\">CustomProperty.AddFCurveParameter</a> or CustomProperty::AddFCurveParameter. This adds a simple instance of an fcurve with\n\
                  three keys, creating a bell curve:\n\
               </p> <img src=\"../images/GUID-42BF7829-FC09-423A-B4A0-5EA4CC68D593-low.png\" /> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	// Create a custom property with a profile curve\n\
	var oCPSet, oFCurve, oFCParam, oFCKeys;\n\
	oCPSet = ActiveSceneRoot.AddProperty( \n\
			\"CustomProperty\", false, \"NewPSet\" );\n\
	oFCParam = oCPSet.AddFCurveParameter(\"TestFCurve\");\n\
\n\
	// The Value of the Parameter is an FCurve object\n\
	oFCurve = oFCParam.Value;\n\
	LogMessage( \n\
		\"FCurve has \" + oFCurve.GetNumKeys() + \" keys.\"\n\
	);\n\
\n\
	// Print the value of each key\n\
	oFCKeys = oFCurve.Keys;\n\
	for (var i=0; i&lt;oFCKeys.Count; i++) {\n\
		LogMessage( \n\
			\"Key \" + i + \" = \" + oFCKeys(i).Value \n\
		);\n\
	}\n\
\n\
	//INFO : \"FCurve has 3 keys.\"\n\
	//INFO : \"Key 0 = 0\"\n\
	//INFO : \"Key 1 = 100\"\n\
	//INFO : \"Key 2 = 0\"\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-909CCEF5-7089-4786-9957-FBC6409D40AC\"></a></span>Once you have a pointer to the fcurve, you can then manipulate it using the object\n\
                  model. For example, you could inverse the curve:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	// Inverse the curve by using an array of key,value \n\
	// pairs with the FCurve.SetKeys method \n\
	oFCurve.SetKeys( new Array(0,100, 1,0, 2,100) );\n\
\n\
	/*\n\
		You could also <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> each key value individually:\n\
\n\
			oFCKeys(0).Value = 100;\n\
			oFCKeys(1).Value = 0;\n\
			oFCKeys(2).Value = 100;\n\
\n\
		Alternatively, you could remove all the keys \n\
			and then add each key manually:\n\
\n\
			oFCurve.RemoveKeys();\n\
			oFCurve.AddKey( 0, 100 );\n\
			oFCurve.AddKey( 50, 0 );\n\
			oFCurve.AddKey( 100, 100 );\n\
	*/\n\
\n\
	// Print the value of each key\n\
	oFCKeys = oFCurve.Keys;\n\
	for (var i=0; i&lt;oFCKeys.Count; i++) {\n\
		LogMessage( \"Key \" + i + \" = \" + oFCKeys(i).Value );\n\
	}\n\
\n\
	//INFO : \"FCurve has 3 keys.\"\n\
	//INFO : \"Key 0 = 100\"\n\
	//INFO : \"Key 1 = 0\"\n\
	//INFO : \"Key 2 = 100\"\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-002A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5D662114-0F9D-4A79-8F0C-BA0EA4E03190\"></a></span> Creating and Accessing Animation FCurves\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-32E0C015-7F13-4259-9024-AC485D745058\"></a></span>Animation fcurves drive the values of animatable parameters by determining the parameter\n\
                  value at each frame. Since these values are dictated by the fcurve, that fcurve is\n\
                  said to be the <em class=\"mild\">source</em> of that parameter\'s value. This is the key difference between profile and animation\n\
                  fcurves, in that the profile fcurve is the parameter value (as an instance of an fcurve),\n\
                  whereas the animation fcurve is the <em class=\"mild\">source</em> that <em class=\"mild\">drives</em> the numeric parameter value (as a double, float, etc.).\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-796ED95F-F1EA-4370-8B0A-875231203477\"></a></span>What you get by using the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> or Parameter::GetValue property on an animated parameter is the numeric value for\n\
                  that parameter at the given frame. To get the fcurve that is <em class=\"mild\">driving</em> that parameter, you need to use the <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a> or Parameter::GetSource property, which returns the animation fcurve object.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E9111719-FAAE-4526-93E9-4B7CA18F6694\"></a></span>The following examples demonstrate how to work with animation fcurves by showing how\n\
                  to create them, how to find them from your animated object, and how to manipulate\n\
                  them from there.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-002B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-144BA9A2-2AF5-4F46-BF15-4E9224495EC7\"></a></span>Example (part 1): SETUP—Create the object to animate and then set some keys\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E19EFDDA-6072-4AE4-85CC-DE6BC9824BC8\"></a></span>This part of the example sets up an animation fcurve on the position of the cube that\n\
                     looks something like this:\n\
                  </p> <img src=\"../images/GUID-A020B3FB-DA83-4646-B6FA-D56650A675A2-low.png\" /> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	var box = ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\" );\n\
\n\
	// Create one array for each position parameter (x,y,z)\n\
	var keys_x = new Array( \n\
							5,	0, \n\
							27,	5.15951238934461, \n\
							53,	-8.73436753361836,\n\
							80,	4.47354844432886,\n\
							99,	0\n\
						)\n\
	var keys_y = new Array( \n\
							5,	0, \n\
							27,	2.67822017156815,\n\
							53,	5.56809635144552,\n\
							80,	-11.1029681960437,\n\
							99,	0\n\
						)\n\
	var keys_z = new Array( \n\
							5,	0, \n\
							27,	-3.76974943963522,\n\
							53,	-11.5588639140921,\n\
							80,	-44.9661083382855,\n\
							99,	53.6825813319457\n\
						)\n\
\n\
	// Add each array as the values for the new fcurve source\n\
	box.posx.AddFCurve2( keys_x );\n\
	box.posy.AddFCurve2( keys_y );\n\
	box.posz.AddFCurve2( keys_z );\n\
\n\
	// Play the animation just to make sure it works\n\
	FirstFrame();\n\
	PlayForwardsFromStart();\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-002D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F654FB34-C24F-4408-894D-52E5A946BB9C\"></a></span>Example (part 2): ACCESSING—Get the fcurve sources from the object using the pos parameters\n\
                  </h3> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-0258740B-5A61-4699-A8D0-D5FA0CB92541\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-2180FD38-E47E-46FD-8BE3-46C2FF49235D\"></a></span>This example is a continuation of the previous example, so the object pointer \'box\'\n\
                           has already been set.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	// Get the fcurve from the animated parameter using Parameter.Source\n\
	var fcx = box.posx.Source;\n\
	var fcy = box.posy.Source;\n\
	var fcz = box.posz.Source;\n\
\n\
	// Print some info about the curve\n\
	PrintFCInfo( fcx );\n\
	PrintFCInfo( fcy );\n\
	PrintFCInfo( fcz );\n\
\n\
\n\
	// --------------------------------------------------------------\n\
	//	OUTPUT: \n\
	//\n\
	//INFO : \"FCurve for parameter cube.kine.local.posx\"\n\
	//INFO : 	\"Number of keys: 5\"\n\
	//INFO : 	\"Is the fcurve being edited? ... false\"\n\
	//INFO : 		\"Key[0] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 5 = 0\"\n\
	//INFO : 		\"Key[1] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 27 = 5.15951238934461\"\n\
	//INFO : 		\"Key[2] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 53 = -8.73436753361836\"\n\
	//INFO : 		\"Key[3] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 80 = 4.47354844432886\"\n\
	//INFO : 		\"Key[4] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 99 = 0\"\n\
	//INFO : \"-------------------------------\"\n\
	//INFO : \"FCurve for parameter cube.kine.local.posy\"\n\
	//INFO : 	\"Number of keys: 5\"\n\
	//INFO : 	\"Is the fcurve being edited? ... false\"\n\
	//INFO : 		\"Key[0] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 5 = 0\"\n\
	//INFO : 		\"Key[1] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 27 = 2.67822017156815\"\n\
	//INFO : 		\"Key[2] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 53 = 5.56809635144552\"\n\
	//INFO : 		\"Key[3] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 80 = -11.1029681960437\"\n\
	//INFO : 		\"Key[4] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 99 = 0\"\n\
	//INFO : \"-------------------------------\"\n\
	//INFO : \"FCurve for parameter cube.kine.local.posz\"\n\
	//INFO : 	\"Number of keys: 5\"\n\
	//INFO : 	\"Is the fcurve being edited? ... false\"\n\
	//INFO : 		\"Key[0] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 5 = 0\"\n\
	//INFO : 		\"Key[1] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 27 = -3.76974943963522\"\n\
	//INFO : 		\"Key[2] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 53 = -11.5588639140921\"\n\
	//INFO : 		\"Key[3] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 80 = -44.9661083382855\"\n\
	//INFO : 		\"Key[4] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 99 = 53.6825813319457\"\n\
	//INFO : \"-------------------------------\"\n\
\n\
\n\
\n\
	// --------------------------------------------------------------\n\
	//	HELPER: This is just a convenience to print out\n\
	//	information on the fcurve.\n\
	//\n\
	function PrintFCInfo( in_fc ) {\n\
		// Make sure we have an fcurve before calling fcurve functions\n\
		if ( ClassName(in_fc) == \"FCurve\" ) {\n\
			// Print some general info about fcurve\n\
			LogMessage( \"FCurve for parameter \" + in_fc.Parent );\n\
			LogMessage( \"\\tNumber of keys: \" + in_fc.GetNumKeys() );\n\
			LogMessage( \"\\tIs the fcurve being edited? ... \" \n\
				+ in_fc.IsEditing() );\n\
		\n\
			// Print key info\n\
			fckeys = in_fc.Keys;\n\
			for ( var i=0; i&lt;fckeys.Count; i++ ) {\n\
				LogMessage( \"\\t\\tKey[\" + i + \"] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame \"  \n\
					+ fckeys(i).Time + \" = \" + fckeys(i).Value );\n\
			}\n\
		} else {\n\
			LogMessage( \"You passed me a(n) \" \n\
				+ ClassName(in_fc) + \" instead of an FCurve.\" );\n\
		}\n\
		LogMessage( \"-------------------------------\" );\n\
	}\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-002E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E981C21C-3BD1-468F-A54E-A3FC3C7505C2\"></a></span>Example (part 3): MANIPULATING—Remove 2 keys (1 and 3) and resample.\n\
                  </h3> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-BB68F9A2-36FF-4E83-837B-265A7D93FDD7\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2F9F94A-4151-48CB-ACA5-25DA874A74E8\"></a></span>This example is a continuation of the previous example, so we are using the same helper\n\
                           function that was already defined: PrintFCInfo().\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	// Use fcurve editing mode in case we want to undo or discard \n\
	// any edits\n\
	LogMessage( \"Starting editing..............................\" );\n\
	fcx.BeginEdit();\n\
		fcx.RemoveKeyAtIndex(1);\n\
		fcx.RemoveKeyAtIndex(3);\n\
		PrintFCInfo( fcx );\n\
		fcx.Resample( \n\
			fcx.GetKeyAtIndex(0), 						/* first key */\n\
			fcx.GetKeyAtIndex(fcx.GetNumKeys() - 1), 	/* last key */\n\
			1, 											/* 1-frame steps */\n\
			true 										/* keep keys */\n\
		);\n\
	fcx.EndEdit();\n\
	LogMessage( \"Done editing..................................\" );\n\
\n\
	// Print info about modified fcurve again:\n\
	PrintFCInfo( fcx );\n\
\n\
\n\
\n\
	// --------------------------------------------------------------\n\
	//	OUTPUT: \n\
	//\n\
	//INFO : \"Starting editing..............................\"\n\
	//INFO : \"FCurve for parameter cube.kine.local.posx\"\n\
	//INFO : 	\"Number of keys: 3\"\n\
	//INFO : 	\"Is the fcurve being edited? ... true\"\n\
	//INFO : 		\"Key[0] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 5 = 0\"\n\
	//INFO : 		\"Key[1] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 53 = -8.73436753361836\"\n\
	//INFO : 		\"Key[2] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 80 = 4.47354844432886\"\n\
	//INFO : \"-------------------------------\"\n\
	//INFO : \"Done editing..................................\"\n\
	//INFO : \"FCurve for parameter cube.kine.local.posx\"\n\
	//INFO : 	\"Number of keys: 9\"\n\
	//INFO : 	\"Is the fcurve being edited? ... false\"\n\
	//INFO : 		\"Key[0] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 0 = 0\"\n\
	//INFO : 		\"Key[1] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 1 = 0\"\n\
	//INFO : 		\"Key[2] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 2 = 0\"\n\
	//INFO : 		\"Key[3] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 3 = 0\"\n\
	//INFO : 		\"Key[4] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 4 = 0\"\n\
	//INFO : 		\"Key[5] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 4.47354844432886 = 0\"\n\
	//INFO : 		\"Key[6] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 5 = 0\"\n\
	//INFO : 		\"Key[7] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 53 = -8.73436753361836\"\n\
	//INFO : 		\"Key[8] <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> at frame 80 = 4.47354844432886\"\n\
	//INFO : \"-------------------------------\"\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-002F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FFBEC5B7-7729-49FD-94FA-56149B54386E\"></a></span> Copying FCurve Animation\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD3DF507-6974-43B5-96B2-A4B19DB14099\"></a></span>Duplicating FCurve animation from one object to another is a two-step process: copying\n\
                  from the source object or parameter to the clipboard (using the <a href=\"#!/url=./si_cmds/CopyAnimation.html\">CopyAnimation</a> or <a href=\"#!/url=./si_cmds/CopyAllAnimation2.html\">CopyAllAnimation2</a> commands) and then pasting the contents of the clipboard to the target object or\n\
                  parameter (using the <a href=\"#!/url=./si_cmds/PasteAnimation.html\">PasteAnimation</a> or <a href=\"#!/url=./si_cmds/PasteAllAnimation.html\">PasteAllAnimation</a> commands).\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-930C3EE0-3657-491F-97B9-E75BDE89C0D3\"></a></span>The difference between these sets of commands is that the CopyAnimation/PasteAnimation\n\
                  pair uses marked parameters, so the source and target is tightly controlled, whereas\n\
                  the CopyAllAnimation2/PasteAllAnimation2 pair can take an object as input in which\n\
                  case all animation matching the specified source type (fcurve, expression, etc.) is\n\
                  copied over.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0030\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-AD4DE924-8965-43D2-91CD-10B6CA1D5D52\"></a></span>Python Example: Copying FCurves from One Object to Another\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8FD48FB-FBA0-4C69-A262-891307BFC6B0\"></a></span>This example demonstrates how to copy the scaling animation with the <a href=\"#!/url=./si_cmds/CopyAnimation.html\">CopyAnimation</a> command and then paste it onto another object with the <a href=\"#!/url=./si_cmds/PasteAnimation.html\">PasteAnimation</a> command.\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-2A602ACF-BF30-4AF2-9828-DB78FDB31EBD\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-89139B4E-47EF-4E38-B8C2-8D2A0633F8C3\"></a></span>You can also use the <a href=\"#!/url=./si_cmds/CopyAllAnimation2.html\">CopyAllAnimation2</a> and <a href=\"#!/url=./si_cmds/PasteAllAnimation.html\">PasteAllAnimation</a> command combination which is a quick way to transfer all animation under one object\n\
                           to another. To use it in this example, you could replace the bolded lines with these:\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\"><em class=\"strong\">app.CopyAllAnimation2( disc1, c.siAnySource, c.siScl )</em><em class=\"strong\">app.PasteAllAnimation( disc2, 1 )</em></pre></div> \n\
                     </div>\n\
                  </div> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
from win32com.client import constants as c\n\
app = Application \n\
app.NewScene( \"\", 0 )\n\
\n\
# Create a disc and animate its scaling in X\n\
disc1 = app.CreatePrim( \"Disc\", \"MeshSurface\" )\n\
akeys = [ 2, 1.4, 47, 2, 84, 0.15 ]\n\
disc1.sclx.AddFCurve2( akeys )\n\
\n\
# Create another disc onto which we will paste this animation\n\
disc2 = app.CreatePrim( \"Disc\", \"MeshSurface\" )\n\
\n\
# Copy the animation from disc1 to disc2 (scaling parameters only)\n\
<em class=\"strong\">app.CopyAnimation( disc1.sclx, 1, 0 )</em><em class=\"strong\">app.PasteAnimation( disc2.sclx, 1 )</em>\n\
\n\
# Now delete disc1 just to prove that the animation you see is\n\
# really on disc2, then start the playback\n\
app.DeleteObj( disc1 )\n\
app.PlayForwardsFromStart()\n\
\n\
# You will see that the disc still scales up and down, even though the \n\
# original disc has been deleted.\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/dev_animation_FCurveInterpolationAndExtrapolation.htm\">FCurve Interpolation and Extrapolation</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";