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
      <meta name=\"topicid\" content=\"GUID-D572D0A1-8D1A-4EC2-A9D4-0050E8DF8C61\" />\n\
      <meta name=\"indexterm\" content=\"PlayControl property set. playback controls\" />\n\
      <meta name=\"indexterm\" content=\"playback controls: accessing\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing the PlayControl Property Set</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D572D0A1-8D1A-4EC2-A9D4-0050E8DF8C61\"></a></span><div class=\"head\">\n\
            <h1>Accessing the PlayControl Property Set</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C5378C49-3B0A-4C5E-B277-935C7DEBA861\"></a></span>The PlayControl property set is one of the scene-level properties; that is, it remembers\n\
               how you want the scene to play back. Because it is scene-level, it can be identified\n\
               by name directly, it does not need any other namespace (for example, <span class=\"code\" translate=\"no\">GetValue(\"PlayControl\")</span>).\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-946625C6-E832-422C-801B-F2275172EB98\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D70F1E7-4471-4AF7-BCC7-AB27E815BC61\"></a></span>The <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> or SIObject::GetName of the PlayControl property set is \"<span class=\"code\" translate=\"no\">Play Control</span>\" (with space) but its <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> or SIObject::GetFullName is \"<span class=\"code\" translate=\"no\">PlayControl</span>\" (without space). This distinction is important to remember when you are trying to\n\
                     access it because you use the Name to identify it from the list of properties but\n\
                     you use the FullName otherwise as explained below.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C92888EE-2415-4DCF-B860-A1B3FFFF05CB\"></a></span>Like other properties in Softimage, you can either read and write its parameter data\n\
               values directly or get a pointer to the <a href=\"#!/url=./si_om/Property.html\">Property</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a> object and then use the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a> object to get and set data.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0066\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-2DA541C5-FBA2-49F5-928C-5C34787DDFAE\"></a></span>Accessing Parameter Values Directly\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-701CB03C-BB93-484E-AA5D-FD063DB03A94\"></a></span>You can get and set PlayControl parameter values directly using the <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> and <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> commands using the <a href=\"#!/url=./si_om/SIObject.Name.html\">SIObject.Name</a> or SIObject::GetName (\"<span class=\"code\" translate=\"no\">PlayControl</span>\") of the PlayControl property set.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0067\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-49A53A88-8140-47D6-B00C-A53279E155F2\"></a></span>VBScript Example: Accessing a PlayControl Parameter Value Directly Using the GetValue\n\
                     and SetValue Commands\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' VBScript (command access)\n\
dim near_dist\n\
near_dist = GetValue( \"PlayControl.NearDist\" ) \' GetValue only returns <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> values for Parameters\n\
\' Double the distance threshold value\n\
SetValue \"PlayControl.NearDist\", near_dist*2\n\
</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-8A70BE95-943F-4847-AACC-CF347F3AAFB0\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-5FA8F69A-A135-44B1-9B78-AAAD81AC0EE0\"></a></span>The C++ API also provides functions that read and write data values directly, but\n\
                           you still need a pointer to the PlayControl property first.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0068\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A3BE7540-5951-446F-8123-52ADED466C1E\"></a></span>Getting a Pointer to the PlayControl Property via Dictionary.GetObject (OM Only)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD67C50C-08A6-4058-9C44-138DDBBE6409\"></a></span>The <a href=\"#!/url=./si_om/Dictionary.GetObject.html\">Dictionary.GetObject</a> method uses the <a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> (\"<span class=\"code\" translate=\"no\">PlayControl</span>\") of the PlayControl property set to identify which object to get. Because PlayControl\n\
                  is a scene-level property, there is always only one per scene, so there is no namespace\n\
                  needed.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-728DE3A4-62BF-4CA1-A663-983D21E6C9C0\"></a></span>Once you have a pointer to the Property you can use <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">PlayControl.Parameters</a> to access each <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a>. You can get and set parameter values using the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> property.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0069\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1000807D-638D-48BA-80A2-8FC82542FFDA\"></a></span>JScript Example: Getting a Pointer to PlayControl via Dictionary.GetObject\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// JScript (object model access)\n\
var remote_control = Dictionary.GetObject( \"PlayControl\" );\n\
var curr_frame = remote_control.Parameters( \"Current\" ); \' Dictionary.GetObject returns a pointer to the specified Parameter\n\
\n\
// Find out what the current frame is\n\
Application.LogMessage( \"Current frame: \" + curr_frame.Value );\n\
\n\
// Go to frame 10, and then the last frame\n\
curr_frame.Value = 10.0;\n\
curr_frame.Value = remote_control.Parameters( \"Out\" ).Value;\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-006A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1C3CFB7C-D1B8-4259-BD7E-D209FB9B0E48\"></a></span>Getting a Pointer to the PlayControl Property via the Current Project\'s Properties\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AEA8BD38-F11E-4C7C-96A5-B3BA9A9881D8\"></a></span>Both the C++ API and the object model provide access via the collection of scene-level\n\
                  properties from the current (active) <a href=\"#!/url=./si_om/XSIProject.html\">project</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Project.html\">project</a>. The trick with this approach is that, unlike the other strategies, you identify\n\
                  the PlayControl property set by its <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> or SIObject::GetFullName (\"<span class=\"code\" translate=\"no\">Play Control</span>\"), as the examples below demonstrate.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1053426D-6975-492C-9EC0-AF59FF15A659\"></a></span>Using the object model, once you have a pointer to the Property you can use <a href=\"#!/url=./si_om/ProjectItem.Parameters.html\">PlayControl.Parameters</a> to access each <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> and then get and set parameter values using the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> property.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DA90321-2933-42F1-80C0-AABF545386A2\"></a></span>Using the C++ API, once you have a pointer to the Property you can use any of the\n\
                  functions available to the <a href=\"#!/url=./si_cpp/classXSI_1_1Property.html\">Property</a> class to get a pointer to the <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a> class (<a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetParameter\">GetParameter</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetParameters\">GetParameters</a>) or read and write parameter values (<a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#GetParameterValue\">GetParameterValue</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#PutParameterValue\">PutParameterValue</a>).\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-006B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-B3F6BBB6-9E67-4EAB-9DB4-6B1F46874F4D\"></a></span>Python Example: Getting a Pointer to Play Control via the Current Project\'s Properties\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# Get the current project\n\
app = Application\n\
prj = app.ActiveProject\n\
\n\
# The PlayControl property <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> is stored with scene <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> under the project\n\
proplist = prj.Properties\n\
playctrl = proplist(\"Play Control\")\n\
\n\
# Remember that the fullname of PlayControl is different from its name:\n\
app.LogMessage( \"PlayControl\'s Name: \" + playctrl.Name );\n\
app.LogMessage( \"PlayControl\'s FullName: \" + playctrl.FullName );\n\
\n\
# Expected result\n\
#INFO : PlayControl\'s Name: Play Control\n\
#INFO : PlayControl\'s FullName: PlayControl\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-006C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-3D77A862-BA56-4B5E-9735-1C57910115DE\"></a></span>C++ API Example: Getting a Pointer to Play Control via the Current Project\'s Properties\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Get the current project\n\
Application app;\n\
Project prj = app.GetActiveProject();\n\
\n\
// The PlayControl property <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> is stored with scene <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> under the project\n\
CRefArray proplist = prj.GetProperties();\n\
Property playctrl( proplist.GetItem(L\"Play Control\") );\n\
\n\
// Remember that the fullname of PlayControl is different from its name:\n\
app.LogMessage( L\"PlayControl\'s Name: \" + playctrl.GetName() );\n\
app.LogMessage( L\"PlayControl\'s FullName: \" + playctrl.GetFullName() );\n\
\n\
// Expected result\n\
//INFO : PlayControl\'s Name: Play Control\n\
//INFO : PlayControl\'s FullName: PlayControl\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";