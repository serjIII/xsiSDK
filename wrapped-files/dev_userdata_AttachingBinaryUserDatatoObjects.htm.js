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
      <meta name=\"topicid\" content=\"GUID-72944F6C-E740-4434-8336-327ACC418861\" />\n\
      <meta name=\"indexterm\" content=\"binary user data: attaching data\" />\n\
      <meta name=\"indexterm\" content=\"user data: binary data: attaching\" />\n\
      <meta name=\"indexterm\" content=\"custom data: binary data: attaching\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Attaching Binary User Data to Objects</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-72944F6C-E740-4434-8336-327ACC418861\"></a></span><div class=\"head\">\n\
            <h1>Attaching Binary User Data to Objects</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-188203F4-0CB5-464D-B0DA-8C3A2F50E3C6\"></a></span>Raw binary user data on objects is available to plug-in developers through the object\n\
               model as the UserDataBlob object. You can attach a user data blob to any object that\n\
               supports the SceneItem.AddProperty method.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FC64C8D2-104F-4A7F-8E0B-50C9019457C9\"></a></span>The UserDataBlob is similar to the UserDataMap, but supports storing object level\n\
               binary data rather than per-component binary data. For example, if some user data\n\
               is meant to apply to every point in a vertex cluster then it should be stored in a\n\
               UserDataBlob, whereas, if the user data is meant to apply only to a single vertex,\n\
               it should be stored at the correct index in a UserDataMap.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-0008\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-80026FB4-EBEF-4C43-8FA7-5184B38D04A4\"></a></span>C++ Example: Applying a UserDataBlob to the scene root\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++ example (using the C++ API) giving an overview of applying user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> \n\
// to a scene object (the scene root)\n\
\n\
	using namespace XSI;\n\
\n\
	Application app ;\n\
	Model root = app.GetActiveSceneRoot();\n\
\n\
	UserDataBlob myBlob ;\n\
	root.AddProperty( L\"UserDataBlob\", false, L\"udb\", myBlob ) ;\n\
\n\
	// This is the structure that we would like to save inside Softimage\n\
	struct ExampleData\n\
	{\n\
		double x ;\n\
		int    y ;\n\
		int    z ;\n\
	} ;\n\
\n\
	// Save the structure\n\
	ExampleData <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> ;\n\
	data.x = 90.1 ;\n\
	data.y = 12 ;\n\
	data.z = 14 ;\n\
\n\
	myBlob.PutValue( (unsigned char*)&amp;<a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a>, sizeof( ExampleData ) ) ;\n\
\n\
	// Retrieve the structure again\n\
	unsigned char * pBuffer = NULL ;\n\
	unsigned int cntBuffer = 0 ;\n\
\n\
	myBlob.GetValue( pBuffer, cntBuffer ) ;\n\
\n\
	// We can conveniently read the contents of the user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a>\n\
	// by casting back to the structure\n\
	ExampleData * pData = (ExampleData*)pBuffer ;\n\
\n\
	// Update our structure based on what is already on the userdatablob\n\
	data.x = 3.15 + pData-&gt;x ;\n\
	data.y = 12 + pData-&gt;y ;\n\
	data.z = 0 ;\n\
\n\
	// Save our updated values\n\
	myBlob.PutValue( (unsigned char*)&amp;<a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a>, sizeof( ExampleData ) ) ;\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";