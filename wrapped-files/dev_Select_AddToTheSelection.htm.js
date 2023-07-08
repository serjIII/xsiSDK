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
      <meta name=\"topicid\" content=\"GUID-6B179C44-927B-4625-991A-722FDAA3F777\" />\n\
      <meta name=\"indexterm\" content=\"scripting: adding to the selection: single items: using the object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"adding to the selection: single items: using the object model or the C++ API\" />\n\
      <meta name=\"indexterm\" content=\"selection: adding single items to the selection: using the object model or C++ API\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Selecting a Single Item (Adding to the Selection)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6B179C44-927B-4625-991A-722FDAA3F777\"></a></span><div class=\"head\">\n\
            <h1>Selecting a Single Item (Adding to the Selection)</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><span class=\"anchor_wrapper\"><a name=\"UL_F8A421B68A3C461C9C78155D9BA67357\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-75753E53-A8A7-4840-81FC-49EF1CABC18F\"></a></span>Use <a href=\"#!/url=./si_om/Selection.Add.html\">Selection.Add</a> or Selection::Add which take an object pointer as input: \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++ API\n\
Application app;\n\
Model root = app.GetActiveSceneRoot();\n\
X3DObject myGrid;\n\
root.AddGeometry( L\"Grid\", L\"NurbsSurface\", L\"myGrid\", myGrid );\n\
Selection sel( app.GetSelection() );\n\
sel.Add( myGrid );\n\
\n\
// C#\n\
CXSIApplication app = new CXSIApplication();\n\
Model root = app.ActiveSceneRoot;\n\
X3DObject myGrid = root.AddGeometry(\"Grid\", \"NurbsSurface\", \"myGrid\");\n\
Selection sel = app.Selection;\n\
sel.Add(myGrid, siSelectMode.siSelectDefault);\n\
\n\
// JScript\n\
var myGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" );\n\
Selection.Add( myGrid );\n\
\n\
\' VBScript\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> myGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" )\n\
Selection.Add myGrid\n\
\n\
# Python\n\
app = Application\n\
myGrid = app.ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" )\n\
app.Selection.Add( myGrid )\n\
\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0017\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5B9ADD91-748C-4669-A520-8668BCD24820\"></a></span>Related Scripting Commands\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_504B9B6F4AEF47FE95429F50E50820C8\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-086A0563-0871-44ED-9315-FE803DC1C4EC\"></a></span> <a href=\"#!/url=./si_cmds/AddToSelection.html\">AddToSelection</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E9D14029-8452-405A-AD87-7533EA991B4E\"></a></span> <a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F95771D4-F1EF-40D9-93BB-8E7BF8ECB4FC\"></a></span><a href=\"#!/url=./si_cmds/SelectTree.html\">SelectTree</a>, <a href=\"#!/url=./si_cmds/SelectBranch.html\">SelectBranch</a>, <a href=\"#!/url=./si_cmds/SelectModel.html\">SelectModel</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD2F6DEA-8B04-4D4F-A9FE-B4B0AEDB04A9\"></a></span><a href=\"#!/url=./si_cmds/GrowSelection.html\">GrowSelection</a>, <a href=\"#!/url=./si_cmds/InvertSelection.html\">InvertSelection</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FCC998CB-CC60-4C65-AFF1-873B727354DD\"></a></span><a href=\"#!/url=./si_cmds/SelectAllUsingFilter.html\">SelectAllUsingFilter</a>, <a href=\"#!/url=./si_cmds/SelectGeometryComponents.html\">SelectGeometryComponents</a>, <a href=\"#!/url=./si_cmds/SelectAdjacent.html\">SelectAdjacent</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-56E7CF21-C25A-46C0-AAD1-27FD1F05D1D5\"></a></span><a href=\"#!/url=./si_cmds/ToggleSelection.html\">ToggleSelection</a>, <a href=\"#!/url=./si_cmds/ToggleObjectComponentSelectionFilter.html\">ToggleObjectComponentSelectionFilter</a>, <a href=\"#!/url=./si_cmds/ToggleParameterValue.html\">ToggleParameterValue</a>, <a href=\"#!/url=./si_cmds/SetAndToggleSelection.html\">SetAndToggleSelection</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-31634F14-67B9-4661-8455-4305D8C1F1EC\"></a></span><a href=\"#!/url=./si_cmds/ActivateElements.html\">ActivateElements</a>, <a href=\"#!/url=./si_cmds/SetActiveElements.html\">SetActiveElements</a>, <a href=\"#!/url=./si_cmds/ToggleActiveElements.html\">ToggleActiveElements</a>, <a href=\"#!/url=./si_cmds/SetAndToggleActiveElements.html\">SetAndToggleActiveElements</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C555F0E8-ED1C-457C-8D1A-0047BDC2C5AC\"></a></span><a href=\"#!/url=./si_cmds/ConvertSelection.html\">ConvertSelection</a>, <a href=\"#!/url=./si_cmds/ConvertSelectionToEdges.html\">ConvertSelectionToEdges</a>, <a href=\"#!/url=./si_cmds/ConvertSelectionToPoints.html\">ConvertSelectionToPoints</a>, <a href=\"#!/url=./si_cmds/ConvertSelectionToPolygons.html\">ConvertSelectionToPolygons</a> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";