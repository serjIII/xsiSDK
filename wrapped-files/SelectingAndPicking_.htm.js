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
      <meta name=\"topicid\" content=\"GUID-D208AC56-BD27-4BD9-BA2F-22D0E0407E7E\" />\n\
      <meta name=\"indexterm\" content=\"scripting: selection\" />\n\
      <meta name=\"indexterm\" content=\"accessing using commands\" />\n\
      <meta name=\"indexterm\" content=\"getting: current selection\" />\n\
      <meta name=\"indexterm\" content=\"using scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"current selection: accessing\" />\n\
      <meta name=\"indexterm\" content=\"using scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"SelectionList\" />\n\
      <meta name=\"indexterm\" content=\"scripting: SelectionList\" />\n\
      <meta name=\"indexterm\" content=\"To access the SelectionList with the GetValue command\" />\n\
      <meta name=\"indexterm\" content=\"return values: convert strings into objects\" />\n\
      <meta name=\"indexterm\" content=\"data types: convert strings into objects\" />\n\
      <meta name=\"indexterm\" content=\"type conversion: selection to objects\" />\n\
      <meta name=\"indexterm\" content=\"object model: converting selection strings into objects\" />\n\
      <meta name=\"indexterm\" content=\"selecting: converting selection strings into objects\" />\n\
      <meta name=\"indexterm\" content=\"converting: selection strings into objects\" />\n\
      <meta name=\"indexterm\" content=\"scripting: converting strings into objects\" />\n\
      <meta name=\"indexterm\" content=\"To convert the current selection into an object collection\" />\n\
      <meta name=\"indexterm\" content=\"To convert a wildcard string selection into a object collection\" />\n\
      <meta name=\"indexterm\" content=\"changing the selection: using scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"scripting: changing the selection\" />\n\
      <meta name=\"indexterm\" content=\"using commands\" />\n\
      <meta name=\"indexterm\" content=\"selecting: scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"selection: commands\" />\n\
      <meta name=\"indexterm\" content=\"changing through scripting\" />\n\
      <meta name=\"indexterm\" content=\"selection: clearing\" />\n\
      <meta name=\"indexterm\" content=\"using scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"adding to the selection: single items\" />\n\
      <meta name=\"indexterm\" content=\"using scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"scripting: adding to the selection\" />\n\
      <meta name=\"indexterm\" content=\"single items: using commands\" />\n\
      <meta name=\"indexterm\" content=\"selection: adding to the selection\" />\n\
      <meta name=\"indexterm\" content=\"scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"scripting: adding to the selection\" />\n\
      <meta name=\"indexterm\" content=\"multiple items: using commands\" />\n\
      <meta name=\"indexterm\" content=\"removing from the selection: single items\" />\n\
      <meta name=\"indexterm\" content=\"using scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"scripting: removing from the selection\" />\n\
      <meta name=\"indexterm\" content=\"using commands\" />\n\
      <meta name=\"indexterm\" content=\"selection: removing from the selection\" />\n\
      <meta name=\"indexterm\" content=\"scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"removing from the selection: all items\" />\n\
      <meta name=\"indexterm\" content=\"using scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"selection: clearing\" />\n\
      <meta name=\"indexterm\" content=\"using scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"scripting: clearing the selection\" />\n\
      <meta name=\"indexterm\" content=\"using commands\" />\n\
      <meta name=\"indexterm\" content=\"scripts: picking\" />\n\
      <meta name=\"indexterm\" content=\"picking: in scripts\" />\n\
      <meta name=\"indexterm\" content=\"scripting: commands\" />\n\
      <meta name=\"indexterm\" content=\"picking\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Selecting through Scripting Commands</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-D208AC56-BD27-4BD9-BA2F-22D0E0407E7E\"></a></span><div class=\"head\">\n\
            <h1>Selecting through Scripting Commands</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4726231B-5A8D-4157-BB45-27B54CFC76CD\"></a></span> Everything that you can do manually in Softimage can be done through scripting commands,\n\
               and selecting is no exception. You can change what\'s selected or find out what\'s selected.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-80EBD22A-501B-40AD-9672-52EB8D6E23D2\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EBD173C6-1922-4229-8009-E810732876A8\"></a></span>This section only addresses how to work with the selection using scripting commands.\n\
                     For the more powerful object model and C++ API access, see <a href=\"#!/url=./si_om/Selection.html\">Selection</a>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-0012\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4922DC9A-E502-4A84-A6E4-B76B2DEBAC80\"></a></span>Getting the Current Selection\n\
               </h2>     \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-701740C8-49E9-457C-8EC2-FBE021E248C4\"></a></span>To find out what is currently selected, use the native Softimage <a href=\"#!/url=./si_cmds/GetValue.html\">GetValue</a> command to return the <span class=\"code\" translate=\"no\">SelectionList</span>.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-0013\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-7FF51EA3-6C2F-41B2-B1DD-DFE36588BD2B\"></a></span>The SelectionList (Native Softimage Commands)\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A134E581-8490-4D41-BD35-D8571B1249EB\"></a></span>The SelectionList is a comma-delimited list of scene item names (strings) that represents\n\
                     all the objects that are currently selected.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-0014\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-2546C112-A4F3-4F3A-9098-66F0053E652C\"></a></span> To access the SelectionList with the GetValue command\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	Set oReturn = GetValue(\"SelectionList\")\n\
	For Each r In oReturn \n\
		LogMessage r &amp; \" is an \" &amp; r.Type\n\
	Next</pre></div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-0015\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-62905772-77F7-45E5-AA41-51224C6814F7\"></a></span>Converting Selection Strings into Objects\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C927E12-FD16-404B-903E-6A9FDAE72E86\"></a></span>        \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-87423706-741B-42EA-82B3-A4B45B914314\"></a></span>When you use the <span class=\"code\" translate=\"no\">Set</span> keyword with certain native Softimage commands, the return value is automatically\n\
                     converted into a real object. This is very useful if, for example, you wanted to build\n\
                     a collection of objects from a string of Softimage object names, and especially if\n\
                     you want to use wildcards.\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-816ED957-1A13-43D5-B458-48D8E8579F6C\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FDC4EFA-5EF5-42AE-8342-9668D17C94F6\"></a></span>If you are using a parameter string path with the <span class=\"code\" translate=\"no\">GetValue</span> command, the value type is returned; object string paths return proper objects.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-0016\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-9CDFA45E-DA6F-4F00-A3CE-FB2347E396E7\"></a></span> To convert the current selection into an object collection\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveProject.ActiveScene.Root\n\
Set oSelection = GetValue( \"SelectionList\" )\n\
\n\
For Each item In oSelection\n\
	LogMessage item.Name\n\
Next</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-0017\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-4806687A-2935-4E31-8302-953B15117DCA\"></a></span> To convert a wildcard string selection into a object collection\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
SelectObj \"cube*\" \n\
Set oSelection = Application.Selection\n\
\n\
For Each item In oSelection\n\
	LogMessage item.Name\n\
Next</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-0018\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-1B0E4D2E-8D89-4078-9014-45900D37B3F0\"></a></span> Changing the Selection\n\
               </h2>       \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-FED50383-09E0-438F-B005-E501A41181D0\"></a></span>You can add items to the current selection through scripting or remove items from\n\
                  the current selection.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-0019\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-832C991E-0C9D-44B9-9722-F236793AA354\"></a></span>Selecting an Item\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF3EB976-FFE3-4D78-A68E-2B6D07A9CE7A\"></a></span>To select an element or parameter, use the <a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a> command with the corresponding name. For example:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">SelectObj \"Camera_Interest\"</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-001A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BADEA3E8-6834-45D4-BAE5-10DE42E58DAE\"></a></span> Adding an Item to the Selection\n\
                  </h3>       \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A1C3281-1BF0-42C1-B4F7-E7F507A4BBDB\"></a></span>To add something to the current selection, use the <a href=\"#!/url=./si_cmds/AddToSelection.html\">AddToSelection</a> command:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">AddToSelection \"Spot_Interest\"</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-94380ADB-C835-40CD-BE86-68BB7595A6A0\"></a></span>To select all cameras, lights, and 3D objects in a scene, use:\n\
                  </p> <span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/SelectAll.html\">SelectAll</a> </span> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-001B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BCF0C633-87E0-473F-912F-376DD8F64A5E\"></a></span> Removing an Item from the Selection\n\
                  </h3>       \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-347DFDD5-93D9-40E6-8516-693AD98B5050\"></a></span>To remove something from the current selection, use the <a href=\"#!/url=./si_cmds/RemoveFromSelection.html\">RemoveFromSelection</a> command:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">RemoveFromSelection \"Scene.Scenecolors.litcol\"</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-001C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-7F26F752-04E5-44E0-ABBA-7688C00647D1\"></a></span> Clearing the Selection\n\
                  </h3>       \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F842BE0-54AD-4C2E-B672-E357355BE8A8\"></a></span>To remove all items from the current selection, use:\n\
                  </p> <span class=\"code\" translate=\"no\"> <a href=\"#!/url=./si_cmds/DeselectAll.html\">DeselectAll</a> </span> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-001D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FF299425-6E50-4C6B-98FF-60334D801E73\"></a></span>Picking\n\
               </h2>     \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-63759DE3-11AA-442B-9F1A-2B94733F3E9F\"></a></span>You can use the <a href=\"#!/url=./si_cmds/PickElement.html\">PickElement</a> command to start an interactive picking session in a script.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE0EB967FDB9C3D46AED68C0193CE3E26-001E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-9F1F2052-2645-472D-8641-9C7098ABDF88\"></a></span>Using Pick Element\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E11BD166-2048-41B4-8E5D-272AB534B313\"></a></span>The following example uses <a href=\"#!/url=./si_cmds/PickElement.html\">PickElement</a> to prompt the user to pick a property. The returned variables are <span class=\"code\" translate=\"no\">PickedElement, ButtonPressed,</span> and <span class=\"code\" translate=\"no\">ModifierPressed</span> (for example, the Shift or Ctrl key). <span class=\"code\" translate=\"no\">ButtonPressed</span> is <span class=\"code\" translate=\"no\">0</span> if the users presses Esc or right-clicks to cancel the picking.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Dim PickedElement, ButtonPressed, ModifierPressed\n\
call PickElement( \"property\", \"Select a property\", \"Select a property\",_\n\
		PickedElement, ButtonPressed, ModifierPressed) \n\
if ButtonPressed &lt;&gt; 0 Then \n\
	\'Test PickedElement to see if it\'s a property then\n\
	\'Do something with PickedElement\n\
End if</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";