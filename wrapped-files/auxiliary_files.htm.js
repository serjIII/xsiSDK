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
      <meta name=\"topicid\" content=\"GUID-0F546E79-8F4A-47D2-B855-3652E7AE469F\" />\n\
      <meta name=\"indexterm\" content=\"auxiliary files: about\" />\n\
      <meta name=\"indexterm\" content=\"scenes: auxiliary data\" />\n\
      <meta name=\"indexterm\" content=\"auxiliary files: loading/opening scenes\" />\n\
      <meta name=\"indexterm\" content=\"auxiliary files: creating\" />\n\
      <meta name=\"indexterm\" content=\"auxiliary files: format\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Setting Values After a Scene Has Loaded (Auxiliary Files)</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-0F546E79-8F4A-47D2-B855-3652E7AE469F\"></a></span><div class=\"head\">\n\
            <h1>Setting Values After a Scene Has Loaded (Auxiliary Files) </h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C3DFE2F-253D-4E6E-92E2-A930E73AC14B\"></a></span>An auxiliary data file contains a sequence of values to that can be set once a scene\n\
               finished loading. All parameters are set sequentially prior to registered OnEndSceneOpen\n\
               events.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F8A895E7-2DAA-4996-B85F-618D84627B65\"></a></span>Auxiliary data is especially useful for batch rendering as it provides a simple way\n\
               to modify various parameters of a scene without having to modify the scene file.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-15206535-2FF2-461E-8AE2-B76C5CFBBA5D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C5522D48-8801-4A5B-939C-43FFC3846354\"></a></span>You cannot apply auxiliary data to SI3D scenes and models directly. You have to import\n\
                     the SI3D scene or model and save it in the Softimage scene format first.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-002D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C57C1A03-91C9-4A3E-B9A0-911AB8D78AA0\"></a></span> Loading and Applying Auxiliary Data\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-79C9873A-4D8F-4784-95AB-C442352FF15E\"></a></span>To apply auxiliary data in Softimage, you have to specify which file contains the\n\
                  values you want to set with the <span class=\"code\" translate=\"no\">-auxiliary_data</span> switch.\n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-603217B7-AB1D-4B6E-A9BB-1C9F20537E14\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-96873E44-71FB-4B13-A9E0-47A1601F98F8\"></a></span>If your auxiliary data file is named <span class=\"filePath\" translate=\"no\">c:\\myData.txt</span>, type the following at the command line:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
xsi -auxiliary_data c:\\myData.txt</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2AB66F0-AA79-4B1E-8E00-7402FD15324A\"></a></span>This creates a new check box labeled <em class=\"strong\">Apply Auxiliary Data</em> in the Open Scene dialog box.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E97D102F-FE3F-443E-AD76-4E449095F5A7\"></a></span>Turn this option on to apply the auxiliary data when a scene is opened. This is a\n\
                        very convenient way to test if your auxiliary data is applied correctly.\n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-002E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C843007F-013D-459F-AC77-0767530ECEB9\"></a></span>To apply auxiliary data with scripting\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-43BAADD2-8627-45F0-A6CD-A5E1E4B5623D\"></a></span>You can use scripting to apply previously loaded auxiliary data. For example, if you\n\
                     want to apply auxiliary data to your scene called <span class=\"filePath\" translate=\"no\">c:\\MyProject\\Scenes\\MyScene.scn</span>, use the following command:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
OpenScene \"c:\\MyProject\\Scenes\\MyScene.scn\",,TRUE\n\
</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-AFC68CA5-956C-4144-90CB-D750E74DD1A8\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C99C1BF-C43E-41EB-9C8A-BC508B4A0CF5\"></a></span>Auxiliary data is not applied by default in both cases (through the interface and\n\
                           scripting).\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-002F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-DD4110D7-AE1E-4D47-9765-954E65585889\"></a></span>To apply auxiliary data from the command line\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AEF3DC32-A02C-45DE-9B73-40A5661F9ADF\"></a></span>You can apply auxiliary data automatically to a scene from the command line by typing\n\
                     either of these lines at the prompt:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
xsi c:\\MyProject\\Scenes\\MyScene.scn -auxiliary_data c:\\myData.txt\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-66DE62C0-BC7E-4339-9ED0-AB46033D718B\"></a></span> <em class=\"mild\">or</em> \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSIBatch -r -scene c:\\MyProject\\Scenes\\MyScene.scn -auxiliary_data c:/myData.txt\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0030\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0472D66A-FB3E-4BEC-B1DF-994EF87DB592\"></a></span> Defining an Auxiliary Data File\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-055BC9F4-BD5B-4136-B4A5-C7B21AC06206\"></a></span>The auxiliary data file format is a plain ASCII file that must start with the following\n\
                  header:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
XSI_AuxiliaryDataFile ASCII 1 0</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-377049E0-C19F-4C93-9E59-09687D52387D\"></a></span>The header identifies the file as a v1.0 Auxiliary data file in plain ASCII. At the\n\
                  time being, there is no other format but we might introduce other file formats in\n\
                  the future.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8B0D785-1447-4702-972E-2FD65CAEC8C1\"></a></span>Lines following the header can be:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BBBA9F79-CA3E-40EA-B75A-F0126558E930\"></a></span>Comments (lines starting with //)\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB6554EE-7D0E-46BB-A42A-01E7446DB45A\"></a></span>Comments cannot be put anywhere else but on the start of a line, unlike C++ style\n\
                        comments.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D775EBC0-C967-4743-9B6E-C531C58B9851\"></a></span>White space (carriage returns, tabs, or spaces)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C4D619E7-D47E-44B6-80E5-BC0E2697C8EE\"></a></span>Parameters\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4C3F041-2719-44AC-96DA-FF720413BEF5\"></a></span>Parameters use the same syntax as the argument of the <a href=\"#!/url=./si_cmds/SetValue.html\">SetValue</a> command called with VBScript. For instance using this line in your auxiliary file:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\"Passes.Default_Pass.RenderOptions.EndFrame\", 1\n\
</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B1ED81C-A17B-4B7F-918B-9FE0FAACD956\"></a></span>... has the same effect as calling using this command in Softimage:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
SetValue \"Passes.Default_Pass.RenderOptions.EndFrame\", 1\n\
</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-A7CE630C-C5AF-49F3-8D8A-2B817FC26879\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB5A7318-22D1-479C-A4E2-9201C431D70C\"></a></span>Make sure that every parameter in the auxiliary data file fits on a single line.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";