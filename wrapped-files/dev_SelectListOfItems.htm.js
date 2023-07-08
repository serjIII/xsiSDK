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
      <meta name=\"topicid\" content=\"GUID-BEA03E0C-01DC-4253-AF94-5F51E8EA41BB\" />\n\
      <meta name=\"indexterm\" content=\"selection: adding to the selection: object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"selection: setting from a string: object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"scripting: setting the selection from a string: object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"changing the selection: using the object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"scripting: adding to the selection: multiple items: using the object model or C++ API\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Selecting a List of Items</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-BEA03E0C-01DC-4253-AF94-5F51E8EA41BB\"></a></span><div class=\"head\">\n\
            <h1>Selecting a List of Items</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><span class=\"anchor_wrapper\"><a name=\"UL_087E0EFEEAEC4038A292A19C7D80D21B\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-523EA07B-9D1F-4662-8491-A14E992C6527\"></a></span>Use <a href=\"#!/url=./si_om/Selection.SetAsText.html\">Selection.SetAsText</a> or Selection::SetAsText which takes a <span class=\"char_link\"><a href=\"#!/url=./files/StringExpression.htm\">String Expression</a></span> as input: \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++ API\n\
Application app;\n\
Model root = app.GetActiveSceneRoot();\n\
X3DObject myGrid;\n\
root.AddGeometry( L\"Grid\", L\"NurbsSurface\", L\"myGrid\", myGrid );\n\
X3DObject myCylinder;\n\
root.AddGeometry( L\"Cylinder\", L\"MeshSurface\", L\"myCylinder\", myCylinder );\n\
Selection sel( app.GetSelection() );\n\
sel.SetAsText( L\"myGrid,myCylinder\" );\n\
\n\
// C#\n\
CXSIApplication app = new CXSIApplication();\n\
Model root = app.ActiveSceneRoot;\n\
X3DObject myGrid = root.AddGeometry(\"Grid\", \"NurbsSurface\", \"myGrid\");\n\
X3DObject myCylinder = root.AddGeometry(\"Cylinder\", \"MeshSurface\", \"myCylinder\");\n\
Selection sel = app.Selection;\n\
sel.SetAsText(myGrid.Name + \",\" + myCylinder.Name);\n\
\n\
// JScript\n\
var myGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" );\n\
var myCylinder = ActiveSceneRoot.AddGeometry( \"Cylinder\", \"MeshSurface\" );\n\
Selection.SetAsText( myGrid + \",\" + myCylinder );\n\
\n\
\' VBScript\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> myGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" )\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> myCylinder = ActiveSceneRoot.AddGeometry( \"Cylinder\", \"MeshSurface\" )\n\
Selection.SetAsText myGrid &amp; \",\" &amp; myCylinder\n\
\n\
# Python\n\
app = Application\n\
myGrid = app.ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" )\n\
myCylinder = app.ActiveSceneRoot.AddGeometry( \"Cylinder\", \"MeshSurface\" )\n\
app.Selection.SetAsText( \"%s,%s\" %(myGrid.Name,myCylinder.Name) )\n\
\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-001A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-14A38A59-87D7-432F-AE90-AFF91E0B7041\"></a></span>Related Scripting Commands\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_608AA19B420643DCA9D8124936798E1E\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DCD6198B-41DD-445C-A434-A3A85D067813\"></a></span> <a href=\"#!/url=./si_cmds/SelectAll.html\">SelectAll</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8502839A-5A4B-430E-AE01-1A4F1DDE3EA9\"></a></span><a href=\"#!/url=./si_cmds/SelectTree.html\">SelectTree</a>, <a href=\"#!/url=./si_cmds/SelectBranch.html\">SelectBranch</a>, <a href=\"#!/url=./si_cmds/SelectModel.html\">SelectModel</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E1694878-B0DD-40A0-82F2-11F2FD1F8E2C\"></a></span><a href=\"#!/url=./si_cmds/GrowSelection.html\">GrowSelection</a>, <a href=\"#!/url=./si_cmds/InvertSelection.html\">InvertSelection</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FF761F91-879A-4EB1-9BC7-135FF9A61186\"></a></span><a href=\"#!/url=./si_cmds/SelectAllUsingFilter.html\">SelectAllUsingFilter</a>, <a href=\"#!/url=./si_cmds/SelectGeometryComponents.html\">SelectGeometryComponents</a>, <a href=\"#!/url=./si_cmds/SelectAdjacent.html\">SelectAdjacent</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3AE80C62-63D6-4922-8445-9111306439F3\"></a></span><a href=\"#!/url=./si_cmds/ToggleSelection.html\">ToggleSelection</a>, <a href=\"#!/url=./si_cmds/ToggleObjectComponentSelectionFilter.html\">ToggleObjectComponentSelectionFilter</a>, <a href=\"#!/url=./si_cmds/ToggleParameterValue.html\">ToggleParameterValue</a>, <a href=\"#!/url=./si_cmds/SetAndToggleSelection.html\">SetAndToggleSelection</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB5AD01E-D908-4618-A408-B71D9A662F69\"></a></span><a href=\"#!/url=./si_cmds/ActivateElements.html\">ActivateElements</a>, <a href=\"#!/url=./si_cmds/SetActiveElements.html\">SetActiveElements</a>, <a href=\"#!/url=./si_cmds/ToggleActiveElements.html\">ToggleActiveElements</a>, <a href=\"#!/url=./si_cmds/SetAndToggleActiveElements.html\">SetAndToggleActiveElements</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-24A394E1-C2D5-43E5-8D7B-2E22A5055C5B\"></a></span><a href=\"#!/url=./si_cmds/ConvertSelection.html\">ConvertSelection</a>, <a href=\"#!/url=./si_cmds/ConvertSelectionToEdges.html\">ConvertSelectionToEdges</a>, <a href=\"#!/url=./si_cmds/ConvertSelectionToPoints.html\">ConvertSelectionToPoints</a>, <a href=\"#!/url=./si_cmds/ConvertSelectionToPolygons.html\">ConvertSelectionToPolygons</a> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";