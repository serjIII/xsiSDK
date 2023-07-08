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
      <meta name=\"topicid\" content=\"GUID-EDF23359-E39A-44CF-B6E3-32F5490692E0\" />\n\
      <meta name=\"indexterm\" content=\"custom commands: undoing and redoing\" />\n\
      <meta name=\"indexterm\" content=\"undoing and redoing custom commands\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Undoing and Redoing Custom Commands</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-EDF23359-E39A-44CF-B6E3-32F5490692E0\"></a></span><div class=\"head\">\n\
            <h1>Undoing and Redoing Custom Commands</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-397745DB-5047-41BF-8FDD-BA3F1401E187\"></a></span> When you need to undo/redo actions performed by a C++ API custom command on non-scene\n\
               data, you can implement it in the <a href=\"#!/url=./si_cmds/Undo.html\">Undo</a>, and <a href=\"#!/url=./si_cmds/Redo.html\">Redo</a> callbacks.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-A14DD68D-0380-4F47-88CE-5200CD241C5E\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8F1CC30-0EC1-425A-BDBA-F68264DE33EC\"></a></span>The custom command is only responsible for undoing the work performed on the user\n\
                     data only: Softimage could become unstable if scene data are modified during undo\n\
                     or redo (for example, calling undoable commands). For instance, if the custom command\n\
                     fires a series of <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> commands, the <a href=\"#!/url=./si_cmds/Undo.html\">Undo</a> callback shouldn\'t undo these actions on its own, this is taken care of by Softimage\n\
                     automatically.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E152AE6E-B464-4F75-8D8A-0D32E78FB242\"></a></span>No matter when the user data is modified during the execution of an undoable command,\n\
               the custom <a href=\"#!/url=./si_cmds/Undo.html\">Undo</a> callback is always executed once all Softimage commands are undone and the <a href=\"#!/url=./si_cmds/Redo.html\">Redo</a> callback is always called before any Softimage commands are redone.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSD74ADB6ECD122649867B3D8C4DDB866E-004D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-42A4899E-C7EB-427B-A770-060C5B67A4AF\"></a></span>Implementating Undo and Redo\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F6D55B6-10C2-4469-963D-99D36E9DC939\"></a></span>In the command\'s <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback, you can check the <a href=\"#!/url=./si_cmds/cb_Command_TermUndoRedo.html\">TermUndoRedo</a> context attribute to see whether you have to allocate memory for undoing and redoing\n\
                  the command action. If so, you store the command action data by setting the UndoRedoData\n\
                  attribute. This data can then be used by the <a href=\"#!/url=./si_cmds/Undo.html\">Undo</a> and <a href=\"#!/url=./si_cmds/Redo.html\">Redo</a> callbacks to reverse or redo the work done in the command\'s <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback. The data must be released in <a href=\"#!/url=./si_cmds/cb_Command_TermUndoRedo.html\">TermUndoRedo</a>.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A76F3CBB-DADC-4F9B-855C-72661777CEF7\"></a></span>For more control, the undo data management can be handled entirely by the plug-in.\n\
                  In which case the custom command will have to maintain its own undo stack in order\n\
                  to match with Softimage\'s undo stack.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-4BF5534F-575B-4353-A290-4B3A0CC6E485\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4F67501-7722-408C-88EA-CFACE815875D\"></a></span>The Simple Undoable Command example demonstrates how to implement an undoable custom\n\
                        command with the C++ API. The example creates a NetView view at <span class=\"code\" translate=\"no\">0,100</span> and the undoable command moves the window to <span class=\"code\" translate=\"no\">200,100</span>. The positioning of the window can be undone and redone through the <a href=\"#!/url=./si_cmds/Undo.html\">Undo</a> and <a href=\"#!/url=./si_cmds/Redo.html\">Redo</a> Softimage built-in commands.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";