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
      <meta name=\"topicid\" content=\"GUID-F018D775-57B9-4904-8789-6D1B17DC76B0\" />\n\
      <meta name=\"indexterm\" content=\"Object Name\" />\n\
      <meta name=\"indexterm\" content=\"objects: names in scripts\" />\n\
      <meta name=\"indexterm\" content=\"scripts: 3D object names\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Object Name</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F018D775-57B9-4904-8789-6D1B17DC76B0\"></a></span><div class=\"head\">\n\
            <h1> Object Name</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A09B81C4-1400-42DF-87A7-623197E82C32\"></a></span>Objects are referenced by name in scripting. Objects are things like models, primitives\n\
               (curves, surfaces, meshes), nulls, cameras, lights, views, passes, layers, sources,\n\
               and clips.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SelectObj \"cone\"</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-61D803D0-64A6-4691-86DB-846F07C4AC8C\"></a></span>If an object is part of a model other than the scene root, you must also specify the\n\
               model name. This is because each model has its own namespace. For example,\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SelectObj \"aModel.cone\"</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-887D654D-468A-4E63-BC1A-D7FD3450B3C0\"></a></span>selects the object named <em class=\"strong\">cone</em> in the model named <em class=\"strong\">aModel</em>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-36F9FB7B-03A2-457E-BD91-DA21B6DC1DF2\"></a></span>You can also use an <span class=\"char_link\"><a href=\"#!/url=./files/listexpr.htm\">Object List</a></span> to reference multiple objects. For example, the following selects all objects in\n\
               the model named \"Model\":\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">SelectObj \"Model.*\"</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-BBB8F11F-1C76-4C18-8B18-A847718EC683\"></a></span>An object variable can be used in place of a fixed string. For example:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	dim aCube\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> aCube = CreatePrim( \"Cube\", \"MeshSurface\" )\n\
	SetValue \".Name\", \"myFirstCube\"\n\
\n\
	\' Name is the default property, so aCube, \n\
	\' aCube.Name, and \"myFirstCube\" are the same thing.\n\
\n\
	DeselectAll\n\
	\' Any of these SelectObj commands will select the \n\
	\' cube named \"myFirstCube\"\n\
	SelectObj aCube\n\
	\'SelectObj aCube.Name\n\
	\'SelectObj \"myFirstCube\"</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-42ACE6D9-4F4D-4E1D-BC9E-8F995169E044\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-67A61A7A-2DC8-4F6A-8465-E464A3CB2ED3\"></a></span>To determine object names, use the Explorer to select objects and check the SelectObj\n\
                     command logged in the Command Box (and the History pane of the Script Editor).\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";