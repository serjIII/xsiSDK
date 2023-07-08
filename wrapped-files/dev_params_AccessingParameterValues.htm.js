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
      <meta name=\"topicid\" content=\"GUID-A7A403DF-6965-48BD-80E1-533DA542C19C\" />\n\
      <meta name=\"indexterm\" content=\"values: accessing parameter values\" />\n\
      <meta name=\"indexterm\" content=\"parameters: accessing\" />\n\
      <meta name=\"indexterm\" content=\"parameters: getting values\" />\n\
      <meta name=\"indexterm\" content=\"parameter values: setting\" />\n\
      <meta name=\"indexterm\" content=\"parameter values: setting on multiple objects\" />\n\
      <meta name=\"indexterm\" content=\"parameters: finding a parameter\'s name: from a script\" />\n\
      <meta name=\"indexterm\" content=\"parameters: finding a parameter\'s name: from the Script Editor\'s history\" />\n\
      <meta name=\"indexterm\" content=\"parameters: finding a parameter\'s name: from the Scene Explorer\" />\n\
      <meta name=\"indexterm\" content=\"parameters: referencing properties with the same name\" />\n\
      <meta name=\"indexterm\" content=\"parameters: accessing using shortcuts\" />\n\
      <meta name=\"indexterm\" content=\"shortcuts (overview)\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing Parameter Values</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-A7A403DF-6965-48BD-80E1-533DA542C19C\"></a></span><div class=\"head\">\n\
            <h1>Accessing Parameter Values</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-21377B94-0587-4C2D-AAFC-5983AB1F292D\"></a></span>If you are using scripting commands to work with parameter values, you can use the\n\
               <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> and <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> commands. To use these commands, you need to know a parameter\'s scripting name—see\n\
               <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_AccessingParameterValues.htm#WSED592B8513B33F4E98849086F360A587-0013\">Finding Parameter Names</a></span>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3960B2B-5193-4622-AB94-9D4AD8B119A4\"></a></span>If you are using the object model, you can get and set the parameter values directly\n\
               from the any project item by using the <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a>.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-5DE9B097-A026-421E-85AC-6B24B27F16D4\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-36B60D74-9EE1-4F90-8CD8-C8D787BF9B5E\"></a></span>With either of these two approaches, you can use <em class=\"mild\">Shortcuts</em>, which provide a way to bypass the usual, more verbose style of specifying parameter\n\
                     names and are available on a select set of parameters. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_AccessingParameterValues.htm#WSED592B8513B33F4E98849086F360A587-001E\">Using Shortcuts</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0009\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E32E3ECA-AF45-4CDD-BC5B-9C3F5F0ED34C\"></a></span>Getting Parameter Values\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-16D05F8F-8297-423F-A7FB-9826024D5AB6\"></a></span>To get the value of a parameter, first identify the object that you are interested\n\
                  in and then the parameter. You can then either store the value in a variable or work\n\
                  with the value directly.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6A0BCC6-6ECB-4220-A2F0-C647DFCE71D5\"></a></span>You can use the <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> command which takes the full name of the parameter as its argument like so:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
rtn = GetValue( \"light.Name\" );\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0995D43C-91FD-4FA9-BBAB-304F8C372EA2\"></a></span>You can use the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> property on the parameter like so:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Get a pointer to the parameter first\n\
var p = oObject.Parameters( \"Name\" );\n\
rtn = p.Value;\n\
\n\
// Or just get the value directly\n\
rtn = oObject.Parameters( \"Name\" ).Value;\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-49B2AC79-A9D5-47BE-9FF4-FF27F9A86F52\"></a></span>Whether you use commands or the object model, you need to figure out the full path\n\
                  to the parameter. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_AccessingParameterValues.htm#WSED592B8513B33F4E98849086F360A587-0013\">Finding Parameter Names</a></span>.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-000A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E495A860-909F-4DCA-B3A1-A6E76B8F4AA8\"></a></span>Example: getting the camera\'s field of view angle using native Softimage commands\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Get an object containing the camera\'s fov\n\
lFOV = GetValue( \"Camera.camera.fov\" ) \n\
\n\
\' Display the value\n\
LogMessage \"Camera\'s field of view = \" &amp; lFOV\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-000B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-795B6400-9925-493C-8FAD-88864A65A6F2\"></a></span>Example: getting the camera\'s field of view angle using the object model\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Get an object containing the camera\'s fov\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oCamera = ActiveSceneRoot.FindChild( \"Camera\" )\n\
\n\
\' Display the value\n\
LogMessage oCamera.ActivePrimitive.Parameters( \"fov\" ).Value\n\
\n\
\' Or, the identical approach using shortcuts:\n\
LogMessage oCamera.fov.Value\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-000C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1A045BA5-07BD-4255-8458-7170773E5F51\"></a></span>Example: getting the camera\'s position at a given frame using native Softimage commands\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Store the position value in a variable and then display the variable\n\
iPos = GetValue( \"Scene_Root.Camera.kine.local.pos.posx\", 24 )\n\
LogMessage \"Camera\'s X position at frame 24 is \" &amp; CStr( iPos )\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-000D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-73E44FBC-3B62-4060-BD8E-9FC265906038\"></a></span>Example: getting the camera\'s position at a given frame using the object model\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Store the position value in a variable and then display the variable\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oCamera = ActiveSceneRoot.FindChild( \"Camera\" )\n\
iPos = oCamera.Kinematics.Local.Parameters( \"posx\" ).Value(24)\n\
LogMessage \"Camera\'s X position at frame 24 is \" &amp;CStr(iPos)\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-000E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-11C21071-917C-4515-9341-7C0C6A46924D\"></a></span>Setting Parameter Values\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CBB38CA6-E7CC-4B28-9E63-F09B03E9B81E\"></a></span>Setting values is similar to getting values, except you also have to specify a value\n\
                  to set in addition to the reference to the parameter you want to change.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-000F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F04B4DB1-333D-4B7B-92E7-288597663CDF\"></a></span>Setting a Value on a Single Parameter\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-60D0D20A-005C-416E-A6FF-DF353C2FCD1E\"></a></span>You can use the <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> command which takes the full name of the parameter as its first argument and the\n\
                     new value to apply like so:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
SetValue( \"light.Name\", \"Sparky\" );\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5AEAF669-DA7B-44C4-8865-3B9E7AA41E0A\"></a></span>You can use the <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> property on the parameter like so:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Get a pointer to the parameter first\n\
var p = oObject.Parameters( \"Name\" );\n\
p.Value = \"Sparky\";\n\
\n\
// Or just <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the value directly\n\
oObject.Parameters( \"Name\" ).Value = \"Sparky\";\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B35EF637-DF4C-4AB2-A9CD-4B535C731292\"></a></span>Whether you use commands or the object model, you need to figure out the full path\n\
                     to the parameter. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_AccessingParameterValues.htm#WSED592B8513B33F4E98849086F360A587-0013\">Finding Parameter Names</a></span>.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0010\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-CE0DAC38-CFC5-4D21-B1A8-D97530C0DD1C\"></a></span> Setting the Same Value on Multiple Objects at Once\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E079A4D0-0A98-4B25-B255-24E313C90AC7\"></a></span>When using native Softimage commands to set values, you can change values relatively,\n\
                     use ranges of values, use random values, and so on. The object model allows you to\n\
                     change values on a whole collection of objects, provided that the values are relevant\n\
                     to the entire collection.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0011\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-CB734C43-5197-4BE5-B817-7C8902BEC66E\"></a></span>To translate several spheres at once using native Softimage Commands\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7F4064B-11A1-4D8C-86D1-B9AC97D290B2\"></a></span>This example uses the wildcard in the string <span class=\"code\" translate=\"no\">\"sphere*\"</span> to target all objects that start with the word sphere. The string <span class=\"code\" translate=\"no\">\".kine.local.posy\"</span> that follows the target indicates that the parameter value to be changed is the local\n\
                        position in Y. Finally, the last argument increases the current value by 10 units.\n\
                        To set the current value to the number 10 instead, you would use the number without\n\
                        the plus sign.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
SetValue \"sphere*.kine.local.posy\", \"10+\"\n\
</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0012\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-676BED47-3EDA-4D0A-8C37-0B10E12FFD9A\"></a></span>To translate several spheres at once using the object model\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F797FBC-0F94-4124-98A3-49080462FC94\"></a></span>This example is a little more precise in that it doesn\'t rely on the names (because\n\
                        you could name a sphere \"Buck\" or name a cube \"sphere\") of the objects, but instead\n\
                        builds a collection out of all the spheres in the scene. Then, one by one, it increments\n\
                        the value of the local position in Y of each sphere in the collection by adding 10\n\
                        to the existing value.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Find all the spheres under the Scene Root\n\
Set oRoot = ActiveProject.ActiveScene.Root\n\
Set oSpheres = oRoot.FindChildren( , \"Sphere\" )\n\
\n\
\' Loop through the whole collection and add 10 to \n\
\' each sphere\'s position in Y\n\
For Each s in Spheres\n\
	s.posy = s.posy.Value + 10\n\
Next\n\
</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D5C0567E-6CB9-4508-898E-D4C2A740574D\"></a></span>The parameter value for the local position in Y is represented by <span class=\"code\" translate=\"no\">\"posy\"</span> in this example, which is its shortcut name—see <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_AccessingParameterValues.htm#WSED592B8513B33F4E98849086F360A587-001E\">Using Shortcuts</a></span> for more information on shortcuts and how to use them.\n\
                     </p> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0013\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-84E0F871-F379-4128-B8C9-5FCCC7B2B0AD\"></a></span>Finding Parameter Names\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E112298E-3F0F-416C-BE06-57E3841053CA\"></a></span>The parameter name for coding is the same name as that which appears in the marked-parameter\n\
                  box on the Animation panel. How you refer to that parameter by name in your code depends\n\
                  on whether you are using it in a native Softimage command or with the object model.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA6695C5-E7A5-4184-A4CD-CF842768C866\"></a></span>Native Softimage commands use string expressions to identify the scene object you\n\
                  want to target, and you can simply extend that string expression to include the parameters\n\
                  found on those objects.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-F2A5AA2E-FCFF-4F2D-AF38-133603F6011F\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAA48650-DB87-4683-95EE-C62768ECA2D2\"></a></span>For parameters, the scripting name is not always the same as the path that is shown\n\
                        in the explorer. Scripting names are internal names that cannot contain spaces, while\n\
                        the explorer displays user interface labels.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-39759F70-BA01-4B5D-8C3D-6FFA3F4691CF\"></a></span>For more information on the difference between scripting names and interface labels,\n\
                        see <a href=\"#!/url=./si_om/Parameter.ScriptName.html\">Parameter.ScriptName</a>. For information on how to display scripting names in the explorer, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_AccessingParameterValues.htm#WSED592B8513B33F4E98849086F360A587-0018\">Using the Scene Explorer to Determine Parameter Names</a></span>.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0014\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-014BD8AD-9264-4DF1-B3C0-8E6BF45747AF\"></a></span>Example: parameter name in a native Softimage command\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
SetValue \"myModel.cone.kine.local.ori.euler.rotx\", 90\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-39911A25-44FA-460B-AE73-288AB69FE604\"></a></span>where:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-552BE9B0-162B-4E85-964B-9B5B0C6736F2\"></a></span> <em class=\"strong\">myModel</em> is the model. This can be omitted in the case of <em class=\"strong\">Scene_Root</em>. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-81B93455-1A8D-4E9B-8EC0-2666D0388D14\"></a></span> <em class=\"strong\">cone</em> is the object. For the current selection, you can omit the object name and put a\n\
                           period before the rest of the parameter name. For example, <em class=\"strong\">.kine.local.ori.euler.rotx</em> specifies the local X rotation of the currently selected object. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-2EA7DBDC-CB7C-425D-A4EC-279270A550E2\"></a></span> <em class=\"strong\">kine.local.ori.euler</em> contains a complex of elements that break down in the following way:\n\
                        </p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-FC8C8BCD-C58F-4620-B2D5-F8C3C167A6F2\"></a></span> <em class=\"strong\">kine.local</em> is the KinematicState object which is composed of a property set (<em class=\"strong\">kine</em>) and a <span class=\"char_link\"><a href=\"#!/url=./files/CompoundParameter.htm\">compound parameter</a></span> (<em class=\"strong\">local</em>).\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-CF7893ED-D201-49EE-A397-74A379E7BB5C\"></a></span> <em class=\"strong\">ori.euler</em> is a special kind of <span class=\"char_link\"><a href=\"#!/url=./files/CompoundParameter.htm\">compound parameter</a></span> containing <em class=\"strong\">ori.euler.rotx</em> as the precise path of the parameter.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-007F5EDC-AC96-44DF-903B-C60D57404203\"></a></span>In certain cases, parts of this complex path may be omitted—see <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_AccessingParameterValues.htm#WSED592B8513B33F4E98849086F360A587-001E\">Using Shortcuts</a></span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-61C54B57-7EC0-4FD7-98D5-76A8167CD46F\"></a></span> <em class=\"strong\">rotx</em> is the parameter.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F909C639-6E25-4C50-8C39-513BE7E1ECD1\"></a></span>The object model uses the <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a> to access information about most of the parameters of any project item. Like native\n\
                     Softimage commands, you first identify the target and then access its parameters as\n\
                     a collection.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8DE6A720-E5D7-41B3-89DA-F6CE98E91CAB\"></a></span>As with all collections in the Autodesk Softimage SDK, you can use a member\'s index\n\
                     (position by number starting at 0) or its name to identify it. In the case of the\n\
                     <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a>, you can use the parameter\'s scripting name as you would use in a native Softimage\n\
                     command.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0015\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-54387940-E4DB-4F59-BAA1-F4F8E47D2A40\"></a></span>Example: full parameter name in the object model\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveProject.ActiveScene.Root\n\
Set oCone = oRoot.AddGeometry(\"Cone\", \"MeshSurface\")\n\
oCone.Kinematics.Local.Parameters(\"rotx\") = 90\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-38264C77-BBC6-40CC-88D8-ECB707C94BB8\"></a></span>where:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8EEA985-1721-4BF2-8D7C-4644260FB98F\"></a></span> <em class=\"strong\">oCone</em> is the object variable. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-83973D8F-390E-45DE-9601-52E4EE40CB7A\"></a></span> <em class=\"strong\">Kinematics.Local</em> is the property set. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-96FB4605-99C7-4763-8B68-CDA09D2A00AB\"></a></span> <em class=\"strong\">Parameters</em> is the collection of parameters in the property set. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-D0F0CDFA-8604-4046-A2F2-D283CD2F4818\"></a></span> <em class=\"strong\">rotx</em> is the specific parameter being called.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-95DD3B4A-2E31-43A1-9332-9A975DB30B67\"></a></span>Shortcuts allow you to omit some of the hierarchy between the object and its parameters.\n\
                     For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_params_AccessingParameterValues.htm#WSED592B8513B33F4E98849086F360A587-001E\">Using Shortcuts</a></span>.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0016\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-361CF786-3EE9-4CF8-8A6B-79093F36C2BD\"></a></span>Example: parameter shortcut name in the object model\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveProject.ActiveScene.Root\n\
Set oCone = oRoot.AddGeometry(\"Cone\", \"MeshSurface\")\n\
oCone.rotx = 90\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3EF03D63-5857-45DE-B3D7-0E201A4B1812\"></a></span>where:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-653533DD-470E-4ADF-A65B-CDCDEE104B48\"></a></span> <em class=\"strong\">oCone</em> is the object variable. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C16EC168-B071-4360-9D9D-4801358BA23D\"></a></span> <em class=\"strong\">rotx</em> is the shortcut to the parameter.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0017\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-0C272837-FCD7-4888-8567-38A58144444B\"></a></span> Using the History to Determine Parameter Names\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4AB4551E-F4D9-49BC-87B8-8FF0C6D93CEC\"></a></span>One way to determine a parameter name is to change its value in a property editor\n\
                     and see what gets logged in the command history:\n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"GUID-F3F5D933-A6B8-4134-A080-4833FF19C797\"></a></span><ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCD6B4ED-DE3B-47A3-8AE1-CCF97A9E9443\"></a></span>Select an object (or any node in the explorer—use the scope and filter options to\n\
                           find the object you want).\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C0896CB-8BAC-4E34-9985-DE6273320316\"></a></span>Press Enter to open a property editor with the object\'s properties, or press Alt+Enter\n\
                           to open a property editor with all the object\'s properties.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-277C7391-C054-45CA-B249-C294E22D7170\"></a></span>On the appropriate property page, modify a parameter.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-65AE38B8-5024-4635-9FD5-8138AB34D187\"></a></span>View the resulting command in the history pane of the script editor. It should resemble\n\
                           the following:\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
SetValue \"[<em class=\"mild\">Model</em>.]<em class=\"mild\">Object.Property.Parameter</em>\", <em class=\"mild\">Value</em></pre></div> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-0B30C845-5FF4-43A7-B390-4BFE591B0DEF\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2B04EF7-C522-497F-AC45-C4CFDDE3F8B4\"></a></span>You can also determine a parameter name by marking a parameter in the explorer, then\n\
                                 checking the argument in the resulting <a href=\"#!/url=./si_cmds/SetMarking.html\">SetMarking</a> command. However, the name that is logged is relative to the currently selected node\n\
                                 and may not show the whole property set.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </li>\n\
                  </ol> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0018\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-DA82E3CC-B2BF-48EC-806C-80FB37573DBB\"></a></span> Using the Scene Explorer toDetermine Parameter Names\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BED597D7-A528-4C0C-AE63-27C1B5EA50D3\"></a></span>Another way to determine a parameter name for scripting is to display script names\n\
                     in the explorer with the scope set to either <em class=\"strong\">Selection</em> or <em class=\"strong\">Scene</em>.\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8E2DC52-7A6C-4AF8-A789-A2BE46B1C658\"></a></span> <em class=\"strong\">Selection</em> displays only nodes related to the currently selected element(s).\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-492FFC77-F125-4DAA-9854-474E14DAF531\"></a></span> <em class=\"strong\">Scene</em> displays all scene element and property nodes from the scene root.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9933A3D-372E-4381-89DA-82DAD17489EB\"></a></span>You can choose which part of the scene structure to display by selecting an item from\n\
                     a menu in the explorer window:\n\
                  </p> <img src=\"../images/GUID-52DCF18E-C57C-46B0-95FB-FB1306AD8AC5-low.png\" /> \n\
                  <div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col align=\"left\" />\n\
                           <col align=\"left\" />\n\
                        </colgroup>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6BEB16BE-62E3-429D-BE95-4496263F1480\"></a></span><p class=\"table-body\"> <em class=\"strong\">A</em> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-848847B6-8ED3-4B28-9957-85A2BEFFC93C\"></a></span><p class=\"table-body\">Click the <span class=\"MenuCascade\" id=\"GUID-6FDF46DE-3EFB-49DD-9784-5B680D96ABFD\">scope</span> button to select the part of the scene structure you want to view.\n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledEvenRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-165D7B27-78EE-49FE-98BA-9835D4D53ACA\"></a></span><p class=\"table-body\"> <em class=\"strong\">B</em> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2BE82D16-A834-417A-8B90-A06696C0125E\"></a></span><p class=\"table-body\">The bulleted item in the menu indicates the currently selected view.</p> \n\
                           </td>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0C16F775-2CA4-46A6-B926-7A83CC19269A\"></a></span><p class=\"table-body\"> <em class=\"strong\">C</em> \n\
                              </p> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BFCB8966-CA97-4B67-AD4F-78D8B1D27A5D\"></a></span><p class=\"table-body\">The bold item in the menu indicates the last selected view. Middle-click the <span class=\"MenuCascade\" id=\"GUID-3458CB29-84FD-4561-9B7E-A5E69CF30D92\">scope</span> button to quickly select this view\n\
                              </p> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-91CE60F9-2147-46EF-9494-C696ACB848ED\"></a></span>Choose <span class=\"MenuCascade\" id=\"GUID-9DDC57E6-4D20-458D-A8F1-36B2EE1A051C\">Show</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-FE7B5F02-25B3-441A-A9DF-6282A06AE203\">Use Script Names</span> to use script names for nodes and parameters. For example, using script names for\n\
                           Kinematics &gt; Global Transform &gt; Pos &gt; X would result in kine &gt; global &gt; pos &gt; posx.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD746ABB-D67F-4E1F-A496-432D0B2FF8D9\"></a></span>When the hierarchy is flattened, you can see the property path and name of a parameter\n\
                     by hovering the mouse pointer over a parameter — a tooltip opens with the parameter\'s\n\
                     path and name. If <em class=\"strong\">Use Script Names</em> is on, the tooltip shows the scripting path and name. Strings that are unnecessary\n\
                     for scripting (such as <em class=\"strong\">kine</em>) are omitted from the path displayed in the tooltip.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-001A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-0FEE114A-0279-4329-8EE2-3684F3D5484D\"></a></span> Referencing Multiple Properties with the Same Name\n\
                  </h3>  <img src=\"../images/GUID-9C5314B5-6319-46AE-9D89-E67CF6BA53C1-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F92FA5D2-E629-4A8A-BB6D-E82EE2970A5D\"></a></span>There are some cases where you need to access a parameter that belongs to one of several\n\
                     property sets that have the same name. For example, you can apply several constraints\n\
                     of a single type (such as a position constraint) to a scene object. You could have\n\
                     3 of these on your constraints stack and they are all called \"Position Cns\".\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E377F260-956F-45BD-AFFF-FA34A5E777F7\"></a></span>To differentiate which position constraint you want to access (for example, to mute\n\
                     it), you need to specify the index number (starting at 0) that appears beside it in\n\
                     the scene explorer.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-001C\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-C427ABFA-AF48-4EB5-987B-567081F77849\"></a></span>To reference multiple properties using native Softimage Commands\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C81C123F-475E-4F25-9BE5-C93D986CFD6B\"></a></span>If there are multiple properties with the same name, you can identify them by their\n\
                        index number in square brackets. For example, the following line mutes the third positional\n\
                        constraint under an object called \"ball\":\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
SetValue \"ball.kine.poscns[2].active\", false\n\
</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-001D\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-480BF0EF-C7DD-4ED6-957D-99F3D0BA8B0B\"></a></span>To reference multiple properties using the Object Model\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B50E9D5-5F9D-4573-9F50-3068FB00B910\"></a></span>If there are multiple properties with the same name, you can identify them by their\n\
                        index number in parentheses. For example, the following line mutes the third positional\n\
                        constraint under an object called \"ball\":\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oBall = ActiveSceneRoot.FindChild( \"ball\" )\n\
oBall.Kinematics.Constraints.Filter( siPosCnsType )(2).Active = false\n\
</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-001E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0414370A-F89F-459C-ABA3-966D5C2EC972\"></a></span> Using Shortcuts\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F90CD2B-E912-4BC6-A691-7DF8B179753A\"></a></span>A complex object in Softimage might be described by hundreds or even thousands of\n\
                  individual parameters. These parameters are distributed throughout the hierarchy of\n\
                  properties, operators, primitives, shaders and other elements that describe the object.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFD7A930-08D5-4DEF-AD8A-9C92EDABF83F\"></a></span>The object model provides ways to traverse through this hierarchy to visit each ProjectItem\n\
                  object and find its parameters. However, for convenience some of the most common parameters\n\
                  are also promoted so that they act as if they are parameters directly on the X3DObject\n\
                  parent. These are what we call <em class=\"mild\">shortcuts</em>.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-80F2F330-518A-4BC6-834B-471D48C4C078\"></a></span>You can use shortcuts in your scripts or use the full property and parameter name\n\
                  syntax, although compiled code only supports the full parameter name syntax. Using\n\
                  shortcuts allows you to omit the names of the intermediate nodes as an alternative\n\
                  to specifying the full name and are available when scripting with both commands and\n\
                  the object model.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-1ADAD969-FDAD-4B40-B089-C2248EC1372A\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B4AD920-BD59-4CBB-9E0A-C5E477C4CE93\"></a></span>Kinematics shortcuts refer to only the parameters nested under the Local Tranform\n\
                        node. For example, the expanded version of <em class=\"strong\">oCone.posx</em> is always <em class=\"strong\">oCone.Kinematics.Local.Parameters</em>(<em class=\"strong\">\"posx\"</em>).\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D5416CF7-D288-40DB-8FB5-5F9D98365AD6\"></a></span>If you need to access a Global Transform parameter, you must use the full parameter\n\
                        syntax (for example, <em class=\"strong\">oCone.Kinematics.Global.Parameters</em>(<em class=\"strong\">\"posx\"</em>)).\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-001F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-D7D952D8-98C5-41FE-A987-2E698F8869C5\"></a></span>Using Shortcuts with Property-set and Parameter Names\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE1DBC9B-1366-4463-B0E7-E0A77AE19CB4\"></a></span>The following node names can be omitted in property-set names:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A68485C-43F5-4204-82D3-D87977B77B9E\"></a></span> <em class=\"strong\">surfmesh</em>, <em class=\"strong\">polymsh</em>, <em class=\"strong\">crvlist</em>, and other geometry types in native Softimage commands.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-930249AF-BA29-4376-85A7-1F0EA361BB18\"></a></span> <em class=\"strong\">local</em> or <em class=\"strong\">global</em> coordinate systems for transformations. If this is omitted, local is used by default.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3B684C0-8F2C-46C8-93F2-67E98375009E\"></a></span>for transformations, any other nodes (such as <em class=\"strong\">euler</em>) between <em class=\"strong\">kine</em> or <em class=\"strong\">Kinematics</em> and the parameter itself.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-44301ED1-A735-4E8B-ADF4-74E774040D74\"></a></span>For example, if <em class=\"mild\">cone</em> is selected, then the following statements are equivalent:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
SetValue \"cone.kine.local.ori.euler.rotx\", 90\n\
SetValue \".kine.rotx\", 90\n\
Selection(0).Kinematics.Local.Parameters(\"rotx\").Value = 90\n\
Selection(0).rotx.Value = 90\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0020\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-71C93C45-F77A-41C7-827F-C8E1F92911E1\"></a></span>Referring to Shortcuts in Compiled Code\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA29C889-65D4-4CB5-9A16-17B7F9CC1322\"></a></span>Unfortunately, you cannot use shortcuts in C++. You must refer to a parameter using\n\
                     the normal syntax (including those parameters that are exposed as shortcuts).\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BCA17BF2-8940-441C-854B-C7902B380DAE\"></a></span>For example, you can use the following snippet to print out the name and value of\n\
                     each parameter of the \"cube\" object:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
using namespace XSI;\n\
Application app;\n\
Model root = app.GetActiveSceneRoot();\n\
\n\
X3DObject myCube;\n\
root.AddGeometry( L\"Cube\", L\"MeshSurface\", CString(L\"MyCube\"), myCube );\n\
\n\
// print the names of all parameter exposed by the cube object\n\
CRefArray params = myCube.GetParameters();\n\
\n\
for (long i = 0 ; i &lt; params.GetCount(); ++i )\n\
{\n\
	Parameter param(params[i]);\n\
	app.LogMessage\n\
	( \n\
		param.GetScriptName() + L\" = \" + param.GetValue().GetAsText() \n\
	);\n\
}\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0021\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-EBA89D77-FD83-4F74-8DFF-3DABBC8C8A54\"></a></span>Getting More Information on Using Shortcuts with the Object Model\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-935F0115-4160-473D-88EF-1ABC622D37FD\"></a></span>There are several types of elements that support shortcuts in the object model:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-116C3AE7-0C89-4C2C-813E-E993277A4986\"></a></span>3D objects (for example, cameras, control objects, lattices, lights, the model presets—such\n\
                           as the preset for the skeleton of a man—and primitives)\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-1123A292-908A-4682-B21D-030CE12488A3\"></a></span>Operators (for example, Curve Generator, Deform, Surface Generator, and Topology)\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-47B0529B-AF1A-4FB9-9F73-B37E3E647C73\"></a></span>Scene properties (for example, Ambient Lighting, Annotation, Display, Geometry Approximation,\n\
                           Material, Texture Projection, Visibility, and Weight Maps)\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-386826AC-6F0A-46E7-BC23-79BD00C09D7B\"></a></span>All custom properties\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F41334AB-BEEA-490A-A855-3A571AD5DDA4\"></a></span>All shaders (for example, Anisotropic, Blinn, Constant, Cook-Torrance, Lambert, Phong,\n\
                           and Strauss)\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F29FE973-4399-4C99-B8EF-53411809C374\"></a></span>Skeletons (for example, ChainBone, ChainEffector, and ChainRoot)\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-CD1FD763-B4A3-4BA6-B2B9-EFC30E684DE1\"></a></span>Constraints (for example, 2 Points, 3 Points, Bounding Volume, Curve Path, Direction,\n\
                           Distance, Object To Cluster, Orientation, Pose, Position, Scaling, Surface Path, and\n\
                           Up Vector)\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-878A4A6C-EB33-4371-A96F-D7C455C6B49D\"></a></span>Not all parameters are supported by every object. The <a href=\"http://softimage.wiki.softimage.com/index.php/Category:Scripting\">Shortcut Reference</a> describes the available properties for each of these categories.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";