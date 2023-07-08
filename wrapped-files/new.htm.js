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
      <meta name=\"topicid\" content=\"GUID-49EE43BE-1E13-46B7-B2F5-47A875BC82E4\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"siMenuSchematicViewID, siMenuSchematicViewContextID, siMenuSchematicNodeContextID, Layout.CreateView, Layout::CreateView\" />\n\
      <meta name=\"keyword\" content=\"siMenuSchematicViewID\" />\n\
      <meta name=\"keyword\" content=\"siMenuSchematicViewContextID\" />\n\
      <meta name=\"keyword\" content=\"siMenuSchematicNodeContextID\" />\n\
      <meta name=\"keyword\" content=\"Layout.CreateView\" />\n\
      <meta name=\"keyword\" content=\"Layout::CreateView\" />\n\
      <title>Softimage 2012</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"ToolContext\", \"si_cpp/classXSI_1_1ToolContext.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CLine\", \"si_cpp/classXSI_1_1MATH_1_1CLine.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"CPlane\", \"si_cpp/classXSI_1_1MATH_1_1CPlane.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-49EE43BE-1E13-46B7-B2F5-47A875BC82E4\"></a></span><div class=\"head\">\n\
            <h1>Softimage 2012</h1>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_1CC1633287014D7CA7B21350EBC5D953\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F62B78FD-3F0C-495E-8BD3-BA3C04F09535\"></a></span>Getting and Setting Size and Position for PPGs\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8925B810-78DB-43E9-AAC9-DE9840B20B56\"></a></span>New methods and functions were added to <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> in the Object Model and the C++ API to allow for setting and getting the size and\n\
               position of a modal property editor (also known as a PPG). <span class=\"anchor_wrapper\"><a name=\"UL_579EB926C2B44EA790C2390C49228083\"></a></span><ul>\n\
                  <li> <a href=\"#!/url=./si_om/PPGLayout.SetViewSize.html\">PPGLayout.SetViewSize</a> \n\
                  </li>\n\
                  <li> <a href=\"#!/url=./si_om/PPGLayout.SetViewPosition.html\">PPGLayout.SetViewPosition</a> \n\
                  </li>\n\
                  <li> <a href=\"#!/url=./si_om/PPGLayout.ViewSize.html\">PPGLayout.ViewSize</a> \n\
                  </li>\n\
                  <li> <a href=\"#!/url=./si_om/PPGLayout.ViewPosition.html\">PPGLayout.ViewPosition</a> \n\
                  </li>\n\
               </ul> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_20981B740EEC446390B97084CC980EAF\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EAC51772-7664-4679-AC96-7DEEA6EAA19B\"></a></span>Undo API\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F050900B-6D6F-4C98-8C66-BE24FEACEE5D\"></a></span> New methods and functions were added to <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a> in the Object Model and the C++ API to allow for opening and closing undo complexes\n\
               and return true if a command is undoing or redoing. <span class=\"anchor_wrapper\"><a name=\"UL_2EC7623D90394B339BF382C302D53322\"></a></span><ul>\n\
                  <li> <a href=\"#!/url=./si_om/XSIApplication.OpenUndo.html\">XSIApplication.OpenUndo</a> \n\
                  </li>\n\
                  <li> <a href=\"#!/url=./si_om/XSIApplication.CloseUndo.html\">XSIApplication.CloseUndo</a> \n\
                  </li>\n\
                  <li> <a href=\"#!/url=./si_om/XSIApplication.IsUndoing.html\">XSIApplication.IsUndoing</a> \n\
                  </li>\n\
               </ul> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_798203ABD2FD46C39E57A32EDE6DD542\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E15D5E15-FE46-4F43-957C-CAF1FCF18178\"></a></span> UVProperty Pinning API\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A4551B7-3F5F-4360-92DF-46B3B2015747\"></a></span>New C++ and Object Model API for marking cluster components as pinned or unpinned.\n\
               This API is mainly used by the UVUnfold feature. <span class=\"anchor_wrapper\"><a name=\"UL_C1919A1958844E0FAAB661952C28CD4D\"></a></span><ul>\n\
                  <li> <a href=\"#!/url=./si_om/UVProperty.html\">UVProperty</a> \n\
                  </li>\n\
               </ul> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_390437720F2543B0B0B00E0ED78E2B5E\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4B819093-EBEB-499B-B3F7-7DB2584C0B6C\"></a></span>Schematic View and Nodes API\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-73607B50-62F7-4DE7-8374-DAFBAB337360\"></a></span>New C++ and Object Model API for manipulating the schematic view nodes, and new menu\n\
               anchor points: <span class=\"keyword\">siMenuSchematicViewID</span>, <span class=\"keyword\">siMenuSchematicViewContextID</span>, and <span class=\"keyword\">siMenuSchematicNodeContextID</span>. The schematic view presents the scene in a hierarchical structure with graphical\n\
               links that show the relationships between objects, as well as material and texture\n\
               nodes to indicate how each object is defined. A SchematicDemo example is added to\n\
               the SDK Examples Workgroup. \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"UL_CB5BD0B09E704358B09C5C83A0735FF0\"></a></span><ul>\n\
               <li> <a href=\"#!/url=./si_om/Schematic.html\">Schematic</a> \n\
               </li>\n\
               <li> <a href=\"#!/url=./si_om/SchematicNode.html\">SchematicNode</a> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_693F901F8CBF4879842C7078B99E7F64\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CF95936E-1560-4CD8-9B6D-D3EBECDDDB24\"></a></span>Events\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_31AAC97072284CE68D2ED918E34CE96B\"></a></span><ul>\n\
               <li><span class=\"MenuCascade\" id=\"GUID-91014EC8-9FE0-41B8-A3C1-222EA2564683\">siOnBeginCommand</span>: Fired when a command is about to be executed. The event can be used to abort the\n\
                  command execution, modify the command argument values or launch other commands. \n\
               </li>\n\
               <li> <span class=\"MenuCascade\" id=\"GUID-F0FBB018-686F-47A1-9A6C-01A152956579\">siOnEndCommand</span>: Fired when a command has been executed. The event can be used to access the command\n\
                  return value or output argument values. Contrary to other event types, this event\n\
                  is always fired when the current command has been aborted by a previous event. \n\
               </li>\n\
               <li><span class=\"MenuCascade\" id=\"GUID-D496B475-89B2-47CC-BFA5-451C5031B3C4\">siOnRenderAbort</span>: Fired when a render sequence has been aborted by the user. The event can also be\n\
                  sent when a render region job is re-executed as a result of a scene change. \n\
               </li>\n\
               <li>Added<span class=\"MenuCascade\" id=\"GUID-A4D7FF0D-54CA-4042-8406-8F8F3808A7AD\"> ActionSource</span> support for siFileTypeAction to <span class=\"MenuCascade\" id=\"GUID-16EEDAB2-D092-461F-AB5D-C868D6335ECC\">siOnBeginFileImport </span>and <span class=\"MenuCascade\" id=\"GUID-D313C0CD-0ED9-4F2B-BAA4-C2CB2CAC1A5B\">siOnEndFileImport</span> events. Now siOnBeginFileExport/siOnEndFileExport and siOnBeginFileImport/siOnEndFileImport\n\
                  events support Action and Shape actions. \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_F5718ABF28B240B38582887DF8D3BE9D\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-43461C91-0AD4-4223-848A-C25529C4422D\"></a></span>Interactive Tool SDK\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_234B2E148F7341798334200FC655DFD6\"></a></span><ul>\n\
               <li> New <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"ToolContext\" class=\"a_multireflink\">ToolContext</a></span> class added to the C++ API for building plug-in tools that can be used in 3D views.\n\
                  \n\
               </li>\n\
               <li>New Math classes <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CLine\" class=\"a_multireflink\">CLine</a></span> and <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"CPlane\" class=\"a_multireflink\">CPlane</a></span> used by the Tool SDK. \n\
               </li>\n\
               <li> Tool Wizard in the Plug-in Manager. </li>\n\
               <li> New CustomTool example added to the SDK Examples Workgroup. </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_63F9018B19F1420E947BFE503EC61CB1\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-72F02451-7031-4226-B7DC-9519152C0401\"></a></span>Image Clip and Bitmap Controls\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_82CF4F3F00B948AD8CE6AB372487A97A\"></a></span><ul>\n\
               <li> New Image Clip Control in PPGLayout (siControlImageClip): A control that shows an\n\
                  Image Clip. A string parameter sets the Image Clip full name. Supported attribute\n\
                  is siUIShowClip Set to True to show the thumbnail of the Image Clip control. The control\n\
                  toolbar is always displayed, regardless of this attribute value. \n\
               </li>\n\
               <li> Static Bitmap control (siControlBitmap): Use siUIFilePath to set the bitmap to show.\n\
                  \n\
               </li>\n\
               <li>For an example of both, see PSetUIDemo in the SDK Examples Workgroup. </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_BC1B56FA993C4C5C924D6AD870832789\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-191163B8-448C-4C40-8902-119CB85E733D\"></a></span>Support for Menu Checkmarks\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-19329C73-145E-4737-904F-F895E16FA49A\"></a></span>A new method and two functions where added to <a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> in the Object Model and the C++ API to support menu checkmarks. \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"UL_EC193FF1AD604AAE9249F8540FFD9890\"></a></span><ul>\n\
               <li> <a href=\"#!/url=./si_om/MenuItem.Checked.html\">MenuItem.Checked</a> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_9EA57FEFC83B4BF1AE24736B15C7CED3\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3A9C1650-E792-4DE1-8FAB-3153FDEA1E48\"></a></span>Scripting Shortcuts for Python\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-769DFF11-EA3B-451D-9400-A2BCAC38A950\"></a></span>New Object Model shortcuts were added to siutils.py to facilitate python scripting.\n\
               See <span class=\"char_link\"><a href=\"#!/url=./files/script_python_ScriptingShortcutsforPython.htm\">Shortcuts for Python</a></span>. \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_C0782CC36F0E47439533BEF90C0328D4\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0989105B-260A-469A-A557-301EF2F5C2AE\"></a></span>Behavior Changes in the SDK\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_5A3E89032B434B5C9CFC836E0D222953\"></a></span><ul>\n\
               <li>The <span class=\"keyword\">Layout.CreateView</span> method and the <span class=\"keyword\">Layout::CreateView</span> function now display the name (in the titlebar) of the created view. \n\
               </li>\n\
               <li> Scripts can no longer change the number of undo levels permanently. This prevents\n\
                  problems that occurred when scripts set the number of undo levels to 0 to increase\n\
                  performance, and then failed to set it back or terminated abnormally. \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS275A3752F8AF964EB4BF595E8A69DBED-0014\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6A466918-A8C2-4ECD-8A33-CE3ACD7803B4\"></a></span>New Commands\n\
            </h2> <span class=\"anchor_wrapper\"><a name=\"UL_A2D30C3A964F41429B970D3BCB12E6DD\"></a></span><ul>\n\
               <li> <a href=\"#!/url=./si_cmds/CreateLayerGroup.html\">CreateLayerGroup</a> \n\
               </li>\n\
               <li> <a href=\"#!/url=./si_cmds/FBXGetPluginVersion.html\">FBXGetPluginVersion</a> \n\
               </li>\n\
               <li> <a href=\"#!/url=./si_cmds/FBXGetSDKVersion.html\">FBXGetSDKVersion</a> \n\
               </li>\n\
               <li> <a href=\"#!/url=./si_cmds/PinAllUVComponents.html\">PinAllUVComponents</a> \n\
               </li>\n\
               <li> <a href=\"#!/url=./si_cmds/PinUVComponents.html\">PinUVComponents</a> \n\
               </li>\n\
               <li> <a href=\"#!/url=./si_cmds/UnPinAllUVComponents.html\">UnPinAllUVComponents</a> \n\
               </li>\n\
               <li> <a href=\"#!/url=./si_cmds/UnPinUVComponents.html\">UnPinUVComponents</a> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";