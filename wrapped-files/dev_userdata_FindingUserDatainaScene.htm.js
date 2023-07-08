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
      <meta name=\"topicid\" content=\"GUID-39EFA7A6-738B-49AC-8503-2C23FF1B311A\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Finding User Data in a Scene</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-39EFA7A6-738B-49AC-8503-2C23FF1B311A\"></a></span><div class=\"head\">\n\
            <h1>Finding User Data in a Scene</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-58959CFC-52CC-46E3-A9CC-34BF949BD18D\"></a></span>You may need to find out whether a scene contains any user data. You may also need\n\
               to return or assign the stored values on a user data map or blob. To do so, you need\n\
               to find the object or cluster to which the user data is associated.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-4BAE4075-8887-4122-9AFA-4122499257A6\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C696B26-5F99-41AD-B20F-D6BB23555B3C\"></a></span>You should choose a unique name for each user data map and blob you create so that\n\
                     multiple user data stored on a particular element do not create conflicts.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-912600B7-9E6A-427D-BF9A-2453D6CD3E9A\"></a></span>The following examples are provided:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D6F3953-AF38-43F6-BD4A-EB4FF3D0C47A\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_FindingUserDatainaScene.htm#WS324D95A558291241ACE764CD4620449D-0014\">VBScript Example: Finding a user data map</a></span> \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-33F242B5-11FA-47F4-8428-BE4373C8D3F5\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_FindingUserDatainaScene.htm#WS324D95A558291241ACE764CD4620449D-0015\">JScript Example: Finding a user data blob</a></span> \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-0014\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E01D00CF-8FD4-4F32-8B7B-E2FBA0D015B2\"></a></span>VBScript Example: Finding a user data map\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"GUID-4169BBF0-5ACD-4F6D-B2B4-5BC814A865A6\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E047529B-D1E7-49C4-834C-7255FA671E28\"></a></span>Start from a scene that contains one or more user data maps.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5AB0EE15-DEE3-4F3B-AB22-110CC09C7C7F\"></a></span>Get a list of geometry objects and their clusters.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F452EF2B-0751-4192-8902-843160E13727\"></a></span>Get the properties of each cluster and weed out everything but the user data maps.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5B57A3BA-0064-4B7B-8A48-19ECE22549BE\"></a></span>Get the individual items on each user data map.\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-F7360EFA-4270-4EA7-9BFE-F830387E7B19\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-DA4A4B13-B864-48D4-A359-C78DD2AB15A1\"></a></span>Since user data maps are applied to a cluster of items, each item can be set individually.\n\
                              To access the individual data on each cluster member, you need to use the <a href=\"#!/url=./si_om/UserDataMap.Item.html\">UserDataMap.Item</a> property to get the <a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a> object where the values are stored.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ol> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Get a list of geometry objects \n\
Set oFoundThings = ActiveSceneRoot.FindChildren(,,siGeometryFamily)\n\
\n\
\' Set the counter to measure the number of user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> maps\n\
iCount = 0\n\
\n\
For Each t in oFoundThings\n\
	\' Print the geometry information\n\
	LogMessage \"=======================================================\"\n\
	LogMessage \"Found a \" &amp; TypeName(t) &amp; \" called \" &amp; t.Name\n\
\n\
	\' Get the clusters on the current geometry\n\
	Set oClusters = t.ActivePrimitive.Geometry.Clusters\n\
\n\
	\' Enumerate each cluster for its properties\n\
	For Each c in oClusters\n\
		Set oProps = c.Properties\n\
\n\
		\' Check each property to see if it\'s a user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> map\n\
		For Each p in oProps\n\
			If TypeName(p) = \"UserDataMap\" Then\n\
				\' Increment the counter\n\
				iCount = iCount + 1\n\
			End If\n\
		Next\n\
	Next\n\
Next\n\
\n\
LogMessage \"=======================================================\"\n\
LogMessage \"Found \" &amp; iCount &amp; \" user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> map(s).\"\n\
\n\
\n\
\' OUTPUT OF SCRIPT (assuming an object called \"grid\" with a user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> map on it)\n\
\'INFO : \"=======================================================\"\n\
\'INFO : \"Found a X3DObject called grid\"\n\
\'INFO : \"=======================================================\"\n\
\'INFO : \"Found 1 user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> map(s).\"\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-0015\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5CEC3C53-C3B9-477F-8D6A-C70C2D568FF9\"></a></span>JScript Example: Finding a user data blob\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	/* \n\
		This example demonstrates how to find UserDataBlobs in a scene\n\
	*/\n\
	NewScene( null, false);\n\
	\n\
	// --------------------------------------------------------------------\n\
	//      SETUP\n\
	//\n\
	// Set up the scene by creating a null to hold the blobs and then\n\
	// adding two blobs (one empty and one populated)\n\
	var oNull = ActiveSceneRoot.AddNull();\n\
	\n\
	var oBlob1 = oNull.AddProperty( \"UserDataBlob\", false, \"nulldata\" );\n\
	oBlob1.Value = \"xyz123\";\n\
\n\
	oNull.AddProperty( \"UserDataBlob\", false, \"emptynulldata\" );\n\
\n\
\n\
	// --------------------------------------------------------------------\n\
	//      SEARCH\n\
	//\n\
	// Find all UserDataBlobs on the object and print out their values\n\
	var e = new Enumerator( oNull.Properties );\n\
	var item ;\n\
\n\
	for ( ;!e.atEnd();e.moveNext() )\n\
	{\n\
		item = e.item();\n\
\n\
		if ( item.Type == \"UserDataBlob\" )\n\
		{\n\
			if ( item.IsEmpty )\n\
			{\n\
				LogMessage( \"Found empty UserDataBlob called \" + item.Name );\n\
			}\n\
			else\n\
			{\n\
				LogMessage( \"Found user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> blob called \" + item.Name + \n\
							  \" with value \" + item.Value );\n\
			}	 \n\
		}	\n\
	}\n\
\n\
\n\
\n\
	// --------------------------------------------------------------------\n\
	//      RESULT\n\
	//\n\
	// The following output is logged to the Script Editor:\n\
	//INFO : \"Found user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> blob called nulldata with value xyz123\"\n\
	//INFO : \"Found empty UserDataBlob called emptynulldata\"\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";