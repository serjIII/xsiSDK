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
      <meta name=\"topicid\" content=\"GUID-964D5EAD-0969-41EF-A656-4650872B04DF\" />\n\
      <meta name=\"indexterm\" content=\"Example: Working with MakeTorso\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Working with Return Values</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-964D5EAD-0969-41EF-A656-4650872B04DF\"></a></span><div class=\"head\">\n\
            <h1>Working with Return Values</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-72D936C8-056F-455B-AFDA-EAFA1A8F44F4\"></a></span>Each command returns JScript objects representing the components of the rig, which\n\
               you can use in any other language Softimage supports (Python, VBScript, VB and C++).\n\
               You can use these return objects for a variety of purposes--to hide objects, add them\n\
               to an envelope group, etc. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS59CC1705BE42794BBCB80457F107A6E8-003C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-61C61447-37A4-4BC1-9CB4-C00C895992BE\"></a></span> Example: Working with MakeTorso\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3490DF88-192E-45CF-8B70-E3DC898145DC\"></a></span>If you look at the return of the <a href=\"#!/url=./si_cmds/MakeTorso.html\">MakeTorso</a> command, it returns a <span class=\"char_link\"><a href=\"#!/url=./files/CDKTorso.htm\">Torso</a></span> object that contains 16 data members, including the hip control icon object called\n\
                  <span class=\"code\" translate=\"no\">Torso.Hip</span>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8B132C2-8D18-47D0-B1C4-F30C2F451513\"></a></span>If you called the following in your script: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">var myTorso = makeTorso( <em class=\"mild\">arguments</em> ); </pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-33D1A824-913D-4665-8FC9-0DAC91C1BFC3\"></a></span>You could find the hip by calling: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">Application.LogMessage( myTorso.Hip );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA043598-DD91-457B-8D1D-048FC9C4EB98\"></a></span>Alternatively, you could find the hip\'s parent by calling \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">Application.LogMessage( myTorso.Hip.Parent );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-732CC4F0-75D3-4959-8C3E-8B0E7B31712E\"></a></span><a href=\"#!/url=./si_cmds/MakeTorso.html\">MakeTorso</a> also returns the spine\'s vertebrae. The number of vertebra is variable, but you can\n\
                  still get a particular one. For example, to get vertebra 4 off the spine, call: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">var Vertebra4 = Torso.Spine.Vertebra(4);</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FCFC0ED9-CD01-4F7E-BD07-CBAF7624F689\"></a></span>Or to get vertebra 4 on a dog leg Biped: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">var Vertebra4 = Biped.Torso.Spine.Vetebra(4);</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-55A5F1E7-3728-4AA1-B514-0EBD265D3C20\"></a></span>Entire characters (and conceivably even crowds) follow the same object return structure.\n\
                  Return objects are documented for each command in <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>. The <span class=\"char_link\"><a href=\"#!/url=./files/cdkref.htm\">CDK Object Reference</a></span> outlines the character rig components that are built by each of the commands. \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";