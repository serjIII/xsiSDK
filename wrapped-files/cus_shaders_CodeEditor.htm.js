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
      <meta name=\"topicid\" content=\"GUID-179637E8-607C-41B7-B1C0-B9C188553C6B\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Editing Shader Code in Softimage</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-179637E8-607C-41B7-B1C0-B9C188553C6B\"></a></span><div class=\"head\">\n\
            <h1>Editing Shader Code in Softimage</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CDCBEE4-2179-4479-B8EC-FF1C4492EE59\"></a></span>The Shader Code Editor is a specialized text editor that allows you to edit a text-based\n\
               file used to support a shader in Softimage. This could be a shader definition file,\n\
               a SPDL file, a CGFX file, a shader compound file, etc.\n\
            </p><img src=\"../images/GUID-1B3389BE-39B6-4014-AFE5-E1C9801D7E76-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-C4BB7FAD-975B-499D-BAB8-7B8D2887FAE9\"></a></span>The shader code editor allows you to edit, validate and apply file-based realtime\n\
               shaders. In addition, you can create your own FX orCGFX file by clicking the <span class=\"MenuCascade\" id=\"GUID-F607B23C-2158-470D-B982-E876E0ABC562\">New Shader</span> button, which launches the Realtime Shader wizard.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-32FAA014-504D-47B7-AFD6-D110C6560150\"></a></span>Many Scintilla text editor features are supported by the Shader Code Editor, such\n\
               as such as syntax styling, folding, auto-complete and highlighting for keywords. For\n\
               more information about Scintilla features, see <a href=\"#!/url=./files/script_editor_CustomizingYourScriptingEnvironment.htm\">Setting Script Editor Preferences</a>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B36CFF9B-C498-4AF3-BE97-264BA4E79F78\"></a></span>Like other text-based editors in Softimage, you can use this editor as part of a Relational\n\
               View, or access it using the <a href=\"#!/url=./si_om/View.html\">View</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1View.html\">View</a> object. It also supports a number of <a href=\"#!/url=./si_cmds/ShaderCodeEditorAttributes.html\">view attributes</a> that allow you to load a particular file, set the shader parser, or specify an entry\n\
               point to scroll to when the editor opens.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";