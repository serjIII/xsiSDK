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
      <meta name=\"topicid\" content=\"GUID-771A5ACB-1E55-4A75-A454-AF2ACBCF1144\" />\n\
      <meta name=\"indexterm\" content=\"filters: callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Match Callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Match callbacks: overview\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: Match\" />\n\
      <meta name=\"indexterm\" content=\"Subset Callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Subset callbacks: overview\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: Subset\" />\n\
      <meta name=\"indexterm\" content=\"subcomponents: selection filters\" />\n\
      <meta name=\"indexterm\" content=\"filters: subcomponent selection\" />\n\
      <meta name=\"indexterm\" content=\"IsApplicable callbacks\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: IsApplicable\" />\n\
      <meta name=\"indexterm\" content=\"Other Callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Init callbacks: filters\" />\n\
      <meta name=\"indexterm\" content=\"filters: Init callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Term callbacks: filters\" />\n\
      <meta name=\"indexterm\" content=\"filters: Term callbacks\" />\n\
      <meta name=\"indexterm\" content=\"Unload callbacks: filters\" />\n\
      <meta name=\"indexterm\" content=\"filters: Unload callbacks\" />\n\
      <meta name=\"indexterm\" content=\"plug-ins: unloading from cache\" />\n\
      <meta name=\"indexterm\" content=\"Reload callbacks: filters\" />\n\
      <meta name=\"indexterm\" content=\"filters: Reload callbacks\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Filter Callbacks</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-771A5ACB-1E55-4A75-A454-AF2ACBCF1144\"></a></span><div class=\"head\">\n\
            <h1>Filter Callbacks</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1E345DE-6B2F-462F-B8C3-40F8CD9951B8\"></a></span> You can implement a custom filter by writing a single callback: the Match callback.\n\
               All filters must implement Match, and can optionally implement two additional callbacks:\n\
               Subset and IsApplicable.\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0CD0E8B6-894C-4B37-8458-92E6FE3DEA44\"></a></span>Match determines whether an element (such as a 3D object, or an edge, point, or polygon)\n\
                     matches the filter requirements. Softimage uses the Match callback to filter selections\n\
                     in 3D views and the schematic. For subcomponent filters, however, Softimage will use\n\
                     Subset, if it exists, instead of Match to filter the selection.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6198E332-E769-4279-9D08-0799CA93C003\"></a></span>Subset takes a collection of elements (objects or subcomponents) and determines the\n\
                     subset of elements that match the filter requirements. Softimage uses the Subset callback\n\
                     to filter the nodes displayed in an explorer view, and to filter subcomponents selected\n\
                     in a 3D view. If you don\'t provide a Subset callback, Softimage calls Match on each\n\
                     object to be filtered.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD9CE7ED-7FB7-4DE2-95CA-7784C075EEBB\"></a></span>IsApplicable determines whether or not a Softimage subcomponent filter should be added\n\
                     to the list of filters available in the Select pane of the main command area.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-0009\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F4BEAD7F-E6B8-46EA-B27B-0FBCCC1D3007\"></a></span> Match Callbacks\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-300BB286-3B0D-4F0D-9DD0-B0A5DFBC4816\"></a></span> All filter callback functions follow same naming convention, take the same type of\n\
                  input argument, and return true or false. For example, consider a Match callback function:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function My3DObjectFilter_Match( oContext )\n\
{\n\
	// Get the 3D object from the Input attribute of the context\n\
	var o3DObject = oContext.GetAttribute( \"Input\" );\n\
\n\
	// Check if the 3D object matches some filter conditions\n\
	var bMatch = object_isamatch( o3DObject );\n\
\n\
	// Return true to keep the object, false to filter the object out\n\
	return ( bMatch );\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF20AB26-7F71-4840-9E62-9A4C0EF25DFA\"></a></span>The function name is the name of the filter (\"My3DObjectFilter\") and the callback\n\
                  name (\"Match\"), separated by an underscore (_). The filter name is specified in <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a>: it\'s the first argument to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterFilter.html\">PluginRegistrar.RegisterFilter</a>.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D964419-FCFE-4846-A341-61E6EC920EF5\"></a></span>The only argument to the callback function is a <a href=\"#!/url=./si_om/Context.html\">Context</a> object, which holds the elements to filter in its Input attribute. For a 3D object\n\
                  filter, the input is a 3D object.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-241D7A82-69BA-48FE-B066-85D8011DA4EB\"></a></span>Match returns True if the object matches the filter, and False otherwise. When Match\n\
                  returns True, Softimage selects the corresponding 3D object.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-272B8263-C070-4553-A104-D3B734719239\"></a></span>The Match callbacks for property and object filters are pretty much the same, except\n\
                  for the types of objects they get in the Input attribute. For example, when a user\n\
                  clicks a polygon mesh, the Match callback for a property filter gets a Primitive,\n\
                  while the Match callback for a 3D object filter gets an X3DObject.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-000A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DCAD4963-4CA4-454F-988B-F80E3D7DFF2E\"></a></span> Subset Callbacks\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-257A64D6-8E78-40B0-9B6D-FA27BCD3ED33\"></a></span> Subset callbacks are similar to Match callbacks. They take a Context object as an\n\
                  argument, and return true or false. However, for Subset, the Input attribute holds\n\
                  a collection of objects. And the context has an Output attribute where Subset puts\n\
                  the subset of objects that match the filter conditions.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C0A43D0-541E-44F4-8AE1-918388E35778\"></a></span>Subset is the main callback for subcomponent filters, because Softimage always uses\n\
                  Subset instead of Match to filter selections of subcomponents. Writing Subset callbacks\n\
                  for subcomponent filters is somewhat more involved, because you have to work with\n\
                  subcomponent indices and either create or modify SubComponent objects. For other filters\n\
                  types, you simply add objects to a collection if the objects match the filter conditions.\n\
                  For example, the following example shows how to build a subset of 3D objects.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function My3DObjectFilter_Subset( oContext )\n\
{\n\
	// Get a new collection to hold the subset\n\
	var cloOutput = new ActiveXObject( \"XSI.Collection\" );\n\
\n\
	// Get the collection of objects to filter\n\
	var cloInput = oContext.GetAttribute( \"Input\" );\n\
\n\
	// Enumerate the objects. If an object matches, add it to the subset\n\
	for (var enumerator = new Enumerator(cloInput) ; !enumerator.atEnd(); enumerator.moveNext())\n\
	{\n\
		var o3DObject = enumerator.item();\n\
		if ( object_isamatch( o3DObject ) )\n\
		{\n\
			cloOutput.Add( o3DObject );\n\
		}\n\
	}\n\
\n\
	// Put the subset in the Output attribute		\n\
	oContext.SetAttribute( \"Output\", cloOutput );\n\
\n\
	// Return true if the subset is non-empty\n\
	return (cloOutput.Count &gt; 0);\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E83A970-B701-4C32-9CB1-8CCC4578495D\"></a></span>If you don\'t provide a Subset callback, Softimage calls Match on each object to determine\n\
                  the subset. For example, the following code works even if you don\'t implement a My3DObjectFilter_Subset\n\
                  function:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var oFilter = Application.Filters( \"My3DObjectFilter\" );\n\
var cloSubset = oFilter.Subset( Application.Selection );</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-000B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9ACE0DDB-26EF-451D-AA27-024A3873F30E\"></a></span>IsApplicable Callbacks\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB9C11D8-A041-4C92-BD40-5CC66EC39582\"></a></span> Softimage uses the IsApplicable callback to determine whether to add subcomponent\n\
                  filters to the filter list in the main command area. Softimage has its own default\n\
                  criteria for determining whether a subcomponent filter is applicable to the current\n\
                  selection (basically, Softimage checks if the selected objects have subcomponents).\n\
                  Softimage calls your IsApplicable callback only if its default criteria are satisfied.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSC098C24645EDDE428048CE3C4F46FCA7-000C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-00AC5528-BD31-4F7C-97AE-2CE146478582\"></a></span> Other Callbacks\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-985DD306-113E-4CAE-A9E3-F7100F2494DE\"></a></span>A custom filter also has callbacks that are triggered when a plug-in is installed\n\
                  (Init), removed (Term), unloaded from the cache (Unload), and loaded into the cache\n\
                  (Reload). Init and Term are the plug-in item versions of XSILoadPlugin and XSIUnloadPlugin.\n\
                  For example, XSILoadPlugin is called once when a plug-in is installed and registered,\n\
                  and Init is called once for each plug-in item after the plug-in is installed.\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-844D87C4-3EFD-4383-98ED-F741237C51B9\"></a></span> Init is called after the plug-in is installed in Softimage and the custom filter\n\
                        is registered (that is, after XSILoadPlugin returns). For example, Init is triggered\n\
                        when you:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-50E6BD2A-7B27-4D3D-8FBC-E46A53E3A2EC\"></a></span>Start Softimage (and Softimage loads all the self-installing plug-ins)\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-42656C82-DE21-46AB-A1C8-206A27DC640E\"></a></span>Load or update the plug-in from the Plugin Manager\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-DA376B3D-551E-43E4-BD44-F2C4C2A4F029\"></a></span>Run Application.LoadPlugin\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A3AA6C7-2D03-462D-9788-3F596A39E3DA\"></a></span> Term is called just before a plug-in is removed from Softimage (that is, before Softimage\n\
                        calls XSIUnloadPlugin). For example, Term is triggered when you:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-CDA02725-45AB-4222-9394-28D0DC8863A7\"></a></span>Exit Softimage\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B7838D6-4E92-4ACE-90D8-3855D4FD873B\"></a></span>Run Application.UnloadPlugin\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4EEF0D6-896C-47B0-896D-6C467C69728F\"></a></span>Unload or delete the plug-in from the Plugin Manager\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-32F0C746-5034-4CE1-8115-96C2ABF38172\"></a></span>Softimage releases any user data stored in the context after the Term callback returns.\n\
                        Softimage also releases the user data after Unload returns.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5EA70000-4CFC-45A2-95E4-33B5BAA5EA91\"></a></span> Unload is called when the plug-in is unloaded from the cache.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F3D418A6-552C-4624-8F7C-979D33B2E041\"></a></span>A plug-in is unloaded from the cache when a user clears the check mark in the Cached\n\
                        column (Plug-ins tab) of the Plugin Manager. This unloads the plug-in (the .dll/.so\n\
                        file, or the script file) from memory, but does not \"unload\" the plug-in from Softimage.\n\
                        The Plugin and PluginItem objects still exist in Softimage, and the plug-in is still\n\
                        registered.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D23FAB12-F04F-4D68-B330-4B98412BBD6A\"></a></span>Softimage releases any user data stored in the context after the Unload callback returns.\n\
                        Softimage also releases the user data after Term returns.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A3F026E-5EA5-456B-AE52-C8BF0D0C571C\"></a></span> Reload is called when the plug-in is reloaded into the cache.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2F2E2EF-853C-4938-B4BB-C0E7CC394AC0\"></a></span>A plug-in is reloaded when a user selects Cached (clicks an empty cell in the Cached\n\
                        column) on the Plug-ins tab of the Plug-in Manager. Reload is also called the first\n\
                        time the custom filter is referenced after being unloaded from the cache.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D53F7EAB-32D4-4D20-95B4-BE2FAE1C3B25\"></a></span>The typical sequence of callbacks is as follows:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Load plug-in (e.g. at startup, Softimage loads a self-installing plug-in)\n\
XSILoadPlugin\n\
&lt;PluginItem&gt;_Init\n\
...\n\
	// User unloads plug-in from cache\n\
	&lt;PluginItem&gt;_Unload\n\
	...\n\
	// User runs script that uses unloaded plug-in, forcing an automatic reload\n\
	&lt;PluginItem&gt;_Reload\n\
...\n\
// Remove plug-in (e.g., exit Softimage)\n\
&lt;PluginItem&gt;_Term\n\
XSIUnloadPlugin</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A0F3DBB5-799B-48FE-8786-036FC9728C93\"></a></span>If a user unloads a plug-in from the cache, then Reload and Unload are called every\n\
                  time the plug-in is referenced.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";