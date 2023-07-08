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
      <meta name=\"topicid\" content=\"GUID-DB74AF66-F804-402F-A966-56A8F568C4D1\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: connecting to Softimage\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: creating an X3DObject\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: iterating a list of children\" />\n\
      <meta name=\"indexterm\" content=\"C++ Example: accessing parameters\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Interacting with Softimage</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DB74AF66-F804-402F-A966-56A8F568C4D1\"></a></span><div class=\"head\">\n\
            <h1>Interacting with Softimage</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DA65977E-E267-4CE3-8456-3A91353AF437\"></a></span>This section provides a number of examples of how to use the C++ API class library\n\
               to interact with Softimage. For more examples of code and information on each individual\n\
               class, see the C++ API Reference. You can also refer to the <a href=\"#!/url=./examples/Addons/ImportExport/netview_ImportExport.htm\">ImportExport</a> example located in the examples folder of the Softimage SDK installation directory.\n\
               \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-4E8E5C8B-CC80-4D1D-A107-B40C2290B9DC\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9D5392C-EDD0-4F8C-B0DC-5CBFF172216A\"></a></span>The following code fragments comprise a sampling of how to use the C++ API. For more\n\
                     extensive examples, see the C++ API Reference. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-000D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-846AF861-5204-44E4-96FD-F2BDD61BFBBF\"></a></span> C++ Example: connecting to Softimage\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// gets the application object, which you can use to communicate with Softimage\n\
// eg., \n\
Application app;\n\
app.LogMessage( \"Welcome to Softimage!\" );\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-000E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-962F3B21-1C5B-4A5F-95C2-F6F49531D1FB\"></a></span> C++ Example: creating an X3DObject\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// returns the reference root object\n\
namespace XSI;\n\
Application app;\n\
CRef rootRef = app.GetActiveSceneRoot();\n\
\n\
// create object with a reference object\n\
X3DObject rootObj(rootRef);\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-000F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-720E7EC4-7FCB-48D7-A4B9-A3CD85880DD6\"></a></span> C++ Example: iterating a list of children\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// returns the reference root object\n\
namespace XSI;\n\
CRef rootRef = app.GetActiveSceneRoot();\n\
\n\
// create object with a reference object\n\
X3DObject rootObj(rootRef);\n\
\n\
// get children recursively\n\
CRefArray childArray = rootObj.FindChildren(L\"\",L\"\",L\"\");\n\
// count number of children\n\
for ( long i=0; i&lt;childArray.GetCount();i++ )\n\
{\n\
	CRef ref = childArray[i];\n\
	if ( ref.IsA( xsi3DObjectType ) )\n\
	{\n\
		dw3DObjectCount++;\n\
	}\n\
	else if ( ref.IsA( xsiModelType ) )\n\
	{\n\
		dwModelCount++;\n\
	}\n\
	else if ( ref.IsA( xsiChainElementType ) )\n\
	{\n\
		dwChainElementCount++;\n\
	}\n\
	else if (ref.IsA( xsiDirectedObjectType ) )\n\
	{\n\
		dwDirectedObjectCount++;\n\
	}\n\
	else if (ref.IsA( xsiNullType ) )\n\
	{\n\
		dwNullCount++;\n\
	}\n\
	else if (ref.IsA( xsiParticleCloudType ) )\n\
	{\n\
		dwParticleCloudCount++;\n\
	}\n\
	else\n\
	{\n\
		dwUnknownCount++;\n\
	}\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-729A385F-EDCD-4BBD-B952-DD90F49E8C21\"></a></span> C++ Example: accessing parameters\n\
               </h2>  \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using namespace XSI;\n\
Application app;\n\
\n\
CRefArray array;\n\
GetSomeObjects(array,app);\n\
\n\
// Find all X3DObjects in the scene and add them to the ref array\n\
CStringArray emptyArray;\n\
Model root( app.GetActiveSceneRoot() );\n\
\n\
array += root.FindChildren( L\"\", L\"\", emptyArray, true );\n\
\n\
// add grid\'s parameters to ref array\n\
X3DObject grid;\n\
root.AddGeometry( L\"Grid\", L\"MeshSurface\", L\"\", grid );\n\
\n\
array += grid.GetParameters();\n\
\n\
for (long i = 0; i &lt; array.GetCount(); ++i )\n\
{\n\
	app.LogMessage(L\"\");\n\
\n\
	CRef ref(array[i]);\n\
	app.LogMessage( L\"&gt;&gt;Reference object class type: \" + ref.GetClassName() );\n\
\n\
	if ( ref.IsA( siSIObjectID ) )\n\
	{\n\
		SIObject siobj(ref);\n\
		app.LogMessage( L\"\\tObject name: \" + siobj.GetName() );\n\
	}\n\
\n\
	if ( ref.IsA( siX3DObjectID ) )\n\
	{\n\
		X3DObject xobj(ref);\n\
		app.LogMessage( L\"\\tNumber of children : \" \n\
				+ CValue(xobj.GetChildren().GetCount()).GetAsText() );\n\
	}\n\
\n\
	if ( ref.IsA( siParameterID ) )\n\
	{\n\
		Parameter param(ref);\n\
		app.LogMessage( L\"\\tParameter\'s value: \" + param.GetValue().GetAsText() );\n\
	}\n\
}\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";