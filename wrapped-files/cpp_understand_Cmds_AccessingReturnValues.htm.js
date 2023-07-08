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
      <meta name=\"topicid\" content=\"GUID-DC7399A2-5875-4EA0-A4DA-CD9D4CB56B02\" />\n\
      <meta name=\"indexterm\" content=\"Getting Multiple Return Values from a Command\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing Return Values</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DC7399A2-5875-4EA0-A4DA-CD9D4CB56B02\"></a></span><div class=\"head\">\n\
            <h1>Accessing Return Values</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C12F0474-FCE4-45FC-BB0A-69DD42A71B6F\"></a></span>To get at the value returned from a command, you convert it from the returned . Ror\n\
               example, the <a href=\"#!/url=./si_cmds/AddImageSource.html\">AddImageSource</a> command returns a <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_source.html\">Source</a> object representing the new image source:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application app;\n\
CValue retVal;CValueArray inArgs(2);\n\
inArgs[0]= CValue();// default: prompts user for location\n\
inArgs[1]= L\"MyNewImgSrc\";\n\
app.ExecuteCommand( L\"AddImageSource\", inArgs, retVal );\n\
\n\
// The new image source can be extracted from the returned CValue \n\
Source sph( retVal );\n\
\n\
app.LogMessage( sph.GetFullName() );\n\
\n\
/* The following is logged to history:\n\
//INFO : Sources.MyNewImgSrc\n\
*/\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS7902B6CCE0739F4D8C2836B524C1EB2F-001F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DD85C072-D998-468E-96E1-37A1D93A435B\"></a></span> Getting Multiple Return Values from a Command\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5B3EB4E3-74E5-41AC-A378-B3EC71DA9447\"></a></span>If the command returns a collection you can convert it to a <a href=\"#!/url=./si_cpp/class_x_s_i_1_1_c_value_array.html\">CValueArray</a> and then cast each member to its proper class. This example demonstrates how to apply\n\
                  an orientation constraint to two objects using the <a href=\"#!/url=./si_cmds/SIApplyCns.html\">SIApplyCns</a> command which then returns a constraint collection containing the two new constraints:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application app;\n\
Model root = app.GetActiveSceneRoot();\n\
\n\
// Create a cone and 2 cubes\n\
X3DObject cone; root.AddGeometry( L\"Cone\", L\"MeshSurface\", L\"MyCone\", cone );\n\
X3DObject cube1; root.AddGeometry( L\"Cube\", L\"MeshSurface\", L\"MyCube1\", cube1 );\n\
X3DObject cube2; root.AddGeometry( L\"Cube\", L\"MeshSurface\", L\"MyCube2\", cube2 );\n\
\n\
CValue retVal;\n\
CValueArray inArgs(4);\n\
inArgs[0] = L\"Orientation\";\n\
inArgs[1] = cube1.GetFullName() + L\",\" + cube2.GetFullName();\n\
inArgs[2] = cone.GetFullName();\n\
inArgs[3] = CValue(); // default: false\n\
app.ExecuteCommand( L\"SIApplyCns\", inArgs, retVal );\n\
\n\
// The new constraints can be extracted from the returned CValue\n\
CValueArray cnslist( retVal );\n\
for ( LONG i=0; i&lt;cnslist.GetCount(); ++i ) {\n\
	Constraint cns( cnslist[i] );\n\
	app.LogMessage( cns.GetFullName() );\n\
}\n\
\n\
/* The following is logged to history:\n\
//INFO : MyCube1.kine.oricns\n\
//INFO : MyCube2.kine.oricns\n\
*/\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";