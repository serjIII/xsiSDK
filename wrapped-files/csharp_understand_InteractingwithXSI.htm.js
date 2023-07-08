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
      <meta name=\"topicid\" content=\"GUID-C2F273F8-DEAA-4073-9EE4-BB4351C0419C\" />\n\
      <meta name=\"indexterm\" content=\"C#: connecting to Softimage\" />\n\
      <meta name=\"indexterm\" content=\"XSIApplication: creating in C#\" />\n\
      <meta name=\"indexterm\" content=\"XSIFactory: creating in C#\" />\n\
      <meta name=\"indexterm\" content=\"XSIUIToolkit: creating in C#\" />\n\
      <meta name=\"indexterm\" content=\"XSIMath: creating in C#\" />\n\
      <meta name=\"indexterm\" content=\"C#: creating an X3DObject\" />\n\
      <meta name=\"indexterm\" content=\"C#: iterating a list of children\" />\n\
      <meta name=\"indexterm\" content=\"C#: accessing parameters\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Interacting with Softimage</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C2F273F8-DEAA-4073-9EE4-BB4351C0419C\"></a></span><div class=\"head\">\n\
            <h1>Interacting with Softimage</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8ABF6D74-DEB8-42EB-B3DF-C1126D90544E\"></a></span>This section provides a number of examples of how to use C# to interact with Softimage.\n\
               For more information on each individual class, see the Object Model documentation\n\
               in the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-80347692-1650-4B1C-96A7-7C6FFBD4046D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7E26A691-0A0B-43C1-A658-F0D415969F75\"></a></span>The following code fragments comprise a sampling of how to use Softimage Object Model\n\
                     with C#. For more extensive examples, see the following examples installed with Softimage:\n\
                     \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_3EFBC0CA16FC44279D1381DD0C1902E3\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-59AD70D1-FC01-41EB-8ABC-7751B5DEB73B\"></a></span> <a href=\"#!/url=./examples/Addons/SimpleCommand/netview_SimpleCommand.htm\">Custom Commands</a> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B62F7F99-2B07-4A68-A881-728466CC6A5E\"></a></span> <a href=\"#!/url=./examples/Addons/ConstraintOps/netview_ConstraintOps.htm\">Constraint Operator </a> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6CE95B41-B2DD-4E38-82A6-7D03A31F3CF6\"></a></span> <a href=\"#!/url=./examples/Addons/DeformOperators/netview_DeformOperators.htm\">Deform Operators</a> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-EBD641C2-1BBF-4C62-B1CB-6D40C76B98DF\"></a></span> <a href=\"#!/url=./examples/Addons/ProjectSelector/netview_projectselector.htm\">Project Selector</a> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3ACF7BE-509A-46D4-B680-668551289E37\"></a></span> <a href=\"#!/url=./examples/Addons/SimpleFilter/netview_SimpleFilter.htm\">Simple Filter</a> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E3670B1D-928A-4F18-981D-A5B3A5D8FF3F\"></a></span> <a href=\"#!/url=./examples/Addons/XSIServer/netview_xsiserver.htm\">Softimage TCP Server</a> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0004\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5F4D54CA-6D59-4D19-8421-D91A597A3A3E\"></a></span>C# Example: connecting to Softimage\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9BBFA6B-3770-470C-9630-CFC4C297C2A0\"></a></span>You can access Softimage by creating an instance of the <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a> object with the <span class=\"code\" translate=\"no\">new</span> keyword: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using XSIOM;\n\
CXSIApplicationClass app = new CXSIApplicationClass();\n\
</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-69D914B3-BAD6-413B-90AA-BFF7893A46EA\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E98FB681-7D51-49BE-82E7-C70AB8312607\"></a></span>Besides the <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a> class, you must use this syntax to create instances of the following objects: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_11786482196741419332FE2C7ECBC023\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-3A607FAA-1A2D-4631-8E1D-58465D6709CA\"></a></span>  <a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a> \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-28F1EED4-6A6F-491B-BFB2-316483EAD5EF\"></a></span>  <a href=\"#!/url=./si_om/XSIUIToolkit.html\">XSIUIToolkit</a> \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-21CB1092-00EC-4D65-BC4B-C26BCB3F66E3\"></a></span>  <a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a> \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0005\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F4304C5E-609B-49D9-A2C2-9927F9511E5C\"></a></span>C# Example: creating an X3DObject\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C84E165-C854-4739-A17B-904FB5D0FBDF\"></a></span>The <a href=\"#!/url=./si_om/X3DObject.AddGeometry.html\">X3DObject.AddGeometry</a> method creates a new <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// returns the root object\n\
using XSIOM;\n\
CXSIApplicationClass app = new CXSIApplicationClass();\n\
Model root = app.ActiveSceneRoot;\n\
\n\
// create object as a child of the root\n\
X3DObject obj = root.AddGeometry(\"Torus\", \"MeshSurface\", \"Torific\");\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0006\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-713A91AA-7D46-44D1-BC6D-E3F793837978\"></a></span>C# Example: iterating a list of children\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED29E421-1869-49B1-AF5E-BEF0BC0A0625\"></a></span>When you don\'t know the exact interface of the object in a collection of children,\n\
                  you can use the base <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> class or test it using the <a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">SIObject.IsClassOf</a> method and coerce it to a more specific class: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// returns the root object\n\
using XSIOM;\n\
CXSIApplicationClass app = new CXSIApplicationClass();\n\
Model root = app.ActiveSceneRoot;\n\
\n\
// create object as a child of the root\n\
X3DObject obj = root.AddGeometry(\"Torus\", \"MeshSurface\", \"Torific\");\n\
\n\
// browse the 3d objects under the scene root\n\
X3DObjectCollection kids = root.FindChildren(\"\", \"\", \"\", true);\n\
Log(\"Total # of kids: \" + kids.Count);\n\
foreach (X3DObject thing in kids)\n\
{\n\
	if (thing.IsClassOf(siClassID.siCameraID))\n\
	{\n\
		Camera cam = (Camera)thing;\n\
		Log(cam.Name);\n\
		continue;\n\
	}\n\
	if (thing.IsClassOf(siClassID.siCameraRigID))\n\
	{\n\
		CameraRig camRig = (CameraRig)thing;\n\
		Log(camRig.Name);\n\
		continue;\n\
	}\n\
	if (thing.IsClassOf(siClassID.siLightID))\n\
	{\n\
		Light lite = (Light)thing;\n\
		Log(lite.Name);\n\
		continue;\n\
	}\n\
	if (thing.IsClassOf(siClassID.siLightRigID))\n\
	{\n\
		LightRig liteRig = (LightRig)thing;\n\
		Log(liteRig.Name);\n\
		continue;\n\
	}\n\
	if (thing.IsClassOf(siClassID.siModelID))\n\
	{\n\
		Model mdl = (Model)thing;\n\
		Log(mdl.Name);\n\
		continue;\n\
	}\n\
	if (thing.IsClassOf(siClassID.siNullID)) \n\
	{\n\
		Null n = (Null)thing;\n\
		Log(n.Name);\n\
		continue;\n\
	}\n\
	if (thing.IsClassOf(siClassID.siX3DObjectID))\n\
	{\n\
		X3DObject obj3d = (X3DObject)thing;\n\
		Log(obj3d.Name);\n\
		continue;\n\
	}\n\
	if (thing.IsClassOf(siClassID.siParameterID))\n\
	{\n\
		Parameter param = (Parameter)thing;\n\
		Log(param.Name);\n\
		continue;\n\
	}\n\
	// etc.\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0007\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C1C0A2C7-F3AC-4E7D-90DE-1AE5FAFFCFB9\"></a></span>C# Example: accessing parameters\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-69372640-AD79-4E89-A89A-E2F0E66C8707\"></a></span><a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> lists are returned in a <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> with which you can use the handy and reliable <span class=\"code\" translate=\"no\">foreach</span> loop: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// returns the root object\n\
using XSIOM;\n\
CXSIApplicationClass app = new CXSIApplicationClass();\n\
Model root = app.ActiveSceneRoot;\n\
\n\
// create object as a child of the root\n\
X3DObject obj = root.AddGeometry(\"Torus\", \"MeshSurface\", \"Torific\");\n\
\n\
// find the parameters under the torus\n\
ParameterCollection paramlist = obj.Parameters;\n\
Log(\"Total # of parameters found: \" + paramlist.Count);\n\
foreach (Parameter param in paramlist)\n\
{\n\
	Log(param.Name + \" is a \" + param.ValueType);\n\
}\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";