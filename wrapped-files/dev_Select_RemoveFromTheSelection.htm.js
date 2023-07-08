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
      <meta name=\"topicid\" content=\"GUID-B604C280-2B81-4A8B-B2A2-408C8E37E9EA\" />\n\
      <meta name=\"indexterm\" content=\"scripting: removing from the selection: using the object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"removing from the selection: single items: using the object model or C++ API\" />\n\
      <meta name=\"indexterm\" content=\"selection: removing from the selection: object model or C++ API\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Deselecting Specific Items (Removing from the Selection)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B604C280-2B81-4A8B-B2A2-408C8E37E9EA\"></a></span><div class=\"head\">\n\
            <h1>Deselecting Specific Items (Removing from the Selection)</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\"><span class=\"anchor_wrapper\"><a name=\"UL_90B2CE2AD6514A78837A6B8C9FD7A3FE\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4F88E82E-466F-4ED1-9AB9-10468CA590F8\"></a></span>Use <a href=\"#!/url=./si_om/Selection.Remove.html\">Selection.Remove</a> or Selection::Remove which takes an object pointer as input: \n\
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
sel.Remove( myGrid );// leaves only \'myCylinder\' selected\n\
\n\
// C#\n\
CXSIApplication app = new CXSIApplication();\n\
Model root = app.ActiveSceneRoot;\n\
X3DObject myGrid = root.AddGeometry(\"Grid\", \"NurbsSurface\", \"myGrid\");\n\
X3DObject myCylinder = root.AddGeometry(\"Cylinder\", \"MeshSurface\", \"myCylinder\");\n\
Selection sel = app.Selection;\n\
sel.SetAsText(myGrid.Name + \",\" + myCylinder.Name);\n\
sel.Remove(myGrid, siSelectMode.siSelectDefault);	// leaves only \'myCylinder\' selected\n\
\n\
// JScript\n\
var myGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" );\n\
var myCylinder = ActiveSceneRoot.AddGeometry( \"Cylinder\", \"MeshSurface\" );\n\
Selection.SetAsText( myGrid + \",\" + myCylinder );\n\
Selection.Remove( myGrid );// leaves only \'myCylinder\' selected\n\
\n\
\' VBScript\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> myGrid = ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" )\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> myCylinder = ActiveSceneRoot.AddGeometry( \"Cylinder\", \"MeshSurface\" )\n\
Selection.SetAsText myGrid &amp; \",\" &amp; myCylinder\n\
Selection.Remove myGrid\' leaves only \'myCylinder\' selected\n\
\n\
# Python\n\
app = Application\n\
myGrid = app.ActiveSceneRoot.AddGeometry( \"Grid\", \"NurbsSurface\" )\n\
myCylinder = app.ActiveSceneRoot.AddGeometry( \"Cylinder\", \"MeshSurface\" )\n\
app.Selection.SetAsText( \"%s,%s\" %(myGrid.Name,myCylinder.Name) )\n\
app.Selection.Remove( myGrid )# leaves only \'myCylinder\' selected\n\
\n\
</pre></div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-001D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C7450E56-8B46-4254-9585-A0F0EFED3487\"></a></span>Related Scripting Commands\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"UL_037EDB72998E4FF9A768580237E70CF9\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-389F6A54-98E8-47B0-955C-B0FB5CFC85F9\"></a></span> <a href=\"#!/url=./si_cmds/RemoveFromSelection.html\">RemoveFromSelection</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E9DFEB91-7AD1-47BD-9D13-9B53C84EAAC5\"></a></span><a href=\"#!/url=./si_cmds/ShrinkSelection.html\">ShrinkSelection</a>, <a href=\"#!/url=./si_cmds/InvertSelection.html\">InvertSelection</a> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-52DF117A-EA45-411C-A20A-C6325E26806C\"></a></span><a href=\"#!/url=./si_cmds/DeactivateElements.html\">DeactivateElements</a>, <a href=\"#!/url=./si_cmds/ToggleActiveElements.html\">ToggleActiveElements</a>, <a href=\"#!/url=./si_cmds/SetAndToggleActiveElements.html\">SetAndToggleActiveElements</a> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";