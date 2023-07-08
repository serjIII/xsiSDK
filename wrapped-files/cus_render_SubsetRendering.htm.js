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
      <meta name=\"topicid\" content=\"GUID-1A0BC4B2-CF6E-41A4-9680-CC9D1933A830\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Rendering a Subset of the Scene</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1A0BC4B2-CF6E-41A4-9680-CC9D1933A830\"></a></span><div class=\"head\">\n\
            <h1>Rendering a Subset of the Scene</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A6585837-D174-4520-AACA-C9DFB9835093\"></a></span>Softimage has the ability to render only a sub-set of the scene via several mechanisms:\n\
               <em class=\"mild\">Render Selection</em>, <em class=\"mild\">Track Selection</em> and <em class=\"mild\">Isolate Selection</em>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DA600424-3EB5-43F5-8A8E-60AD560B29E9\"></a></span> <em class=\"strong\">Render Selection</em> is active if the <span class=\"code\" translate=\"no\">\"SelectionOnly\"</span><a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">context attribute</a> is set to true, and <em class=\"strong\">Isolate Selection</em> is set if the <span class=\"code\" translate=\"no\">\"ObjectList\"</span><a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">context attribute</a> is set. The selection is based only on the X3DObjects found in the selection. Sub-components\n\
               and items of any other type are ignored. If no X3DObjects are found, the selection\n\
               is considered empty.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1CCDF046-E288-4514-A613-C5EC3C2E254E\"></a></span>In both cases, if the selection or object list is empty, then all objects are rendered.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D3037816-A958-4E00-B294-C2C6A7BF41FD\"></a></span>The object list has a priority over the selection, so if both are set, the object\n\
               list takes priority.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-739E60C2-96C6-46A5-8F5C-31AC3E6312CF\"></a></span> <em class=\"strong\">Track Selection</em>, through the <span class=\"code\" translate=\"no\">\"TrackSelection\"</span><a href=\"#!/url=./si_cmds/cb_Renderer_Process.html\">context attribute</a>, works similarly. If an object list is present and non-empty, it uses the object\n\
               list to constrain the crop window, otherwise it falls back on the current selection.\n\
               If nothing is selected, no cropping is done and the entire frame is rendered.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-060363D1-E46F-4123-A548-7F3F7EF830C1\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2CFC187-680E-4E33-AB25-AD2917CC4635\"></a></span>The object view works through the same mechanism as <em class=\"mild\">Isolate Selection</em>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";