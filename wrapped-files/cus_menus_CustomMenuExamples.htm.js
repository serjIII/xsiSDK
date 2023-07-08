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
      <meta name=\"topicid\" content=\"GUID-68A607F2-94FE-47E9-AD5B-4DD6096B2D9B\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Nesting SubMenus within SubMenus\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Simulating Command Instances with Menu Callback Items\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Custom Menu Examples</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-68A607F2-94FE-47E9-AD5B-4DD6096B2D9B\"></a></span><div class=\"head\">\n\
            <h1>Custom Menu Examples</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-61CEDC84-D747-4C9F-B4FC-4A2F6BA5C7D0\"></a></span>The following custom menu examples are provided:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B846165D-1E3E-4F34-A0BF-A14D5747613C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_CustomMenuExamples.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0032\">JScript Example: Nesting SubMenus within SubMenus</a></span> —demonstrates how to use the AddItem method to create submenus that cascade down\n\
                     through three or four levels.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-46285762-BC11-4EB8-A4D9-AE9E8DA6EC29\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_CustomMenuExamples.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0033\">JScript Example: Simulating Command Instances with Menu Callback Items</a></span> —demonstrates how you can define a number of callback menu items in a self-installing\n\
                     plug-in that implement different flavors (instances) of standard Softimage commands.\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-BA69B419-F59A-4835-844A-31AE925A46F1\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-389EC3A0-1717-42C0-AB80-68152545C764\"></a></span>In addition, there is a Simple Menu plug-in example (versions written in VBScript,\n\
                     JScript and C++) included with the Softimage SDK installation: check the following\n\
                     location:\n\
                  </p> <span class=\"filePath\" translate=\"no\">%XSI_ROOT%/XSISDK/examples/menus</span> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0032\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-72F0568F-42EE-44EC-9F57-299F9F4BAED5\"></a></span> JScript Example: Nesting SubMenus within SubMenus\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EDB8A935-A87F-42EB-B5A1-5FD8798C57D3\"></a></span>This self-installing menu plug-in demonstrates how to nest submenus deeply. he entries\n\
                  used are just blank entries to demonstrate the mechanism.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">/* ------------------------------------------------------------------\n\
\n\
		This self-installing menu plug-in demonstrates how to\n\
		nest submenus deeply. The entries used are just blank\n\
		entries to demonstrate the mechanism.\n\
\n\
*/\n\
\n\
/* ------------------------------------------------------------------\n\
\n\
	### REGISTRATION ###\n\
\n\
*/\n\
function XSILoadPlugin( in_reg )\n\
{\n\
	// Set up some basic information for the whole plug-in\n\
	in_reg.Name = \"Nested Demo\";\n\
	in_reg.Author = \"Softimage SDK Education\";\n\
	in_reg.Email = \"editors@softimage.com\";\n\
	in_reg.URL = \"http://www.softimage.com/education\";\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0;\n\
\n\
	// Register a single Menu entry point on the Help menu\n\
	in_reg.RegisterMenu( siMenuMainHelpID, \"NestedMenus\" );\n\
\n\
	// Only the first level is flat; the submenus still cascade on\n\
	// the Window menu\n\
	in_reg.RegisterMenu( siMenuMainWindowID, \"NestedMenus\", false );\n\
\n\
	// This one will stick all submenus on the same level on the Layers\n\
	// contextual menu\n\
	in_reg.RegisterMenu( siMenuSELayersContextID, \"FlatMenus\" );\n\
\n\
	// You can also log a message about this plug-in\'s installation\n\
	Application.LogMessage( \"The \'Nested Demo\' plug-in has been \"\n\
		+ \"successfully installed.\" );\n\
\n\
	// Finish with success notification\n\
	return true;\n\
}\n\
\n\
\n\
/* ------------------------------------------------------------------\n\
\n\
	### DEFINITION ###\n\
\n\
	This menu definition creates a cascading menu effect\n\
	with several submenus nested inside the next one.\n\
\n\
*/\n\
function NestedMenus_Init( in_context )\n\
{\n\
	// Get the menu object from the Context input\n\
	var oTopMnu = in_context.Source;\n\
\n\
	// Add some regular menu items\n\
	oTopMnu.AddItem( \"Regular Item1\", siMenuItem );\n\
	oTopMnu.AddItem( \"Regular Item2\", siMenuItem );\n\
\n\
	// Add the submenu item\n\
	var oSubLevel1 = oTopMnu.AddItem( \"SubMenu Demo Level1\",\n\
		siMenuItemSubmenu )\n\
	oSubLevel1.AddItem( \"SubLevel1 ItemA\", siMenuItem );\n\
	oSubLevel1.AddItem( \"SubLevel1 ItemB\", siMenuItem );\n\
\n\
	// Nest another submenu item\n\
	var oSubLevel2 = oSubLevel1.AddItem( \"SubMenu Demo Level2\",\n\
		siMenuItemSubmenu )\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemA\", siMenuItem );\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemB\", siMenuItem );\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemC\", siMenuItem );\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemD\", siMenuItem );\n\
\n\
	// ...and another ...\n\
	var oSubLevel3 = oSubLevel2.AddItem( \"SubMenu Demo Level3\",\n\
		siMenuItemSubmenu )\n\
	oSubLevel3.AddItem( \"SubLevel3 ItemA\", siMenuItem );\n\
	oSubLevel3.AddItem( \"SubLevel3 ItemB\", siMenuItem );\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemC\", siMenuItem );\n\
\n\
	// ,,, etc.\n\
\n\
	// Finish with success notification\n\
	return true;\n\
}\n\
\n\
\n\
/* ------------------------------------------------------------------\n\
\n\
	### DEFINITION ###\n\
\n\
	This menu definition creates a several submenus\n\
	appearing as siblings.\n\
\n\
*/\n\
function FlatMenus_Init( in_context )\n\
{\n\
	// Get the menu object from the Context input\n\
	var oTopMnu = in_context.Source;\n\
\n\
	// Add some regular menu items\n\
	oTopMnu.AddItem( \"Regular Item1\", siMenuItem );\n\
	oTopMnu.AddItem( \"Regular Item2\", siMenuItem );\n\
\n\
	// Add a submenu item\n\
	var oSubLevel1 = oTopMnu.AddItem( \"SubMenu Demo Level1\",\n\
		siMenuItemSubmenu )\n\
	oSubLevel1.AddItem( \"SubLevel1 ItemA\", siMenuItem );\n\
	oSubLevel1.AddItem( \"SubLevel1 ItemB\", siMenuItem );\n\
\n\
	// And another submenu item\n\
	var oSubLevel2 = oTopMnu.AddItem( \"SubMenu Demo Level2\",\n\
		siMenuItemSubmenu )\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemA\", siMenuItem );\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemB\", siMenuItem );\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemC\", siMenuItem );\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemD\", siMenuItem );\n\
\n\
	// ...and another ...\n\
	var oSubLevel3 = oTopMnu.AddItem( \"SubMenu Demo Level3\",\n\
		siMenuItemSubmenu )\n\
	oSubLevel3.AddItem( \"SubLevel3 ItemA\", siMenuItem );\n\
	oSubLevel3.AddItem( \"SubLevel3 ItemB\", siMenuItem );\n\
	oSubLevel2.AddItem( \"SubLevel2 ItemC\", siMenuItem );\n\
\n\
	// ,,, etc.\n\
\n\
	// Finish with success notification\n\
	return true;\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0033\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-25849BB1-1E42-41D9-A0D1-3FE84FB476EB\"></a></span> JScript Example: Simulating Command Instances with Menu Callback Items\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-158920C2-7E12-466A-BECB-53DFD1097D42\"></a></span>This example demonstrates how you can define a number of callback menu items in a\n\
                  self-installing plug-in that implement different flavors (instances) of standard Softimage\n\
                  commands:\n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-8DF81D16-CAC6-42A5-BB51-1F108F6FB64C\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE80F609-AB6D-41A6-88AC-A9AE7BD2860D\"></a></span>Create a script file in the <span class=\"filePath\" translate=\"no\">$user/Application/Plugins</span> folder and name it <em class=\"strong\"> <span class=\"filePath\" translate=\"no\">OpMenuInstances.js</span> </em>. This will contain the JScript implementation of the new custom menu.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-617E5585-CFE2-4E32-933B-A5A903446E76\"></a></span>Set up the registration callback containing two custom menus to appear in the <span class=\"MenuCascade\" id=\"GUID-9B220140-FF10-4EBE-8E80-677D5B274B44\">Application</span> menu: one containing Deform operator instances and another containing Generator operator\n\
                        instances:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function XSILoadPlugin( in_reg )\n\
{\n\
	// Register the plug-in information\n\
	in_reg.Author = \"Softimage Corp.\";\n\
	in_reg.Name = \"Submenu command example\";\n\
\n\
	// Set the <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> number of this plugin\n\
	in_reg.Major = 1;\n\
	in_reg.Minor = 0 ;\n\
\n\
	// Register the Deform menu in the Application menu\n\
	in_reg.RegisterMenu( siMenuMainApplicationID, \"ApplyDeformOp_Menu\" );\n\
\n\
	// Register the Generator menu in the Application menu\n\
	in_reg.RegisterMenu( siMenuMainApplicationID, \"ApplyGenOp_Menu\" );\n\
\n\
	LogMessage( in_reg.Name + \" has been loaded.\" );\n\
\n\
	return true;\n\
}</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B2316A44-4A5B-4A89-A53A-C3CD33B6E1DA\"></a></span>Define the <em class=\"mild\">Apply Deform Operators</em> menu using the <span class=\"code\" translate=\"no\">Init</span> callback. This menu\'s items will always appear, regardless of what is currently selected.\n\
                        It contains three sections separated by menu separator bars:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function ApplyDeformOp_Menu_Init( in_ctxt )\n\
{\n\
	var menu = in_ctxt.source;\n\
\n\
	menu.Name = \"Apply Deform Operators\";\n\
	menu.AddCallbackItem( \"Twist\", \"OnApplyDeformOp\" );\n\
	menu.AddCallbackItem( \"Bend\", \"OnApplyDeformOp\" );\n\
	menu.AddCallbackItem( \"Bulge\", \"OnApplyDeformOp\" );\n\
	menu.AddCallbackItem( \"Shear\", \"OnApplyDeformOp\" );\n\
	menu.AddCallbackItem( \"Taper\", \"OnApplyDeformOp\" );\n\
\n\
	menu.AddSeparatorItem();\n\
\n\
	menu.AddCallbackItem( \"Expand\", \"OnApplyDeformOp2\" );\n\
	menu.AddCallbackItem( \"Contract\", \"OnApplyDeformOp2\" );\n\
\n\
	menu.AddSeparatorItem();\n\
\n\
	menu.AddCallbackItem( \"Randomize\", \"OnApplyDeformOp2\" );\n\
	menu.AddCallbackItem( \"Relax\", \"OnApplyDeformOp2\" );\n\
	menu.AddCallbackItem( \"Smooth\", \"OnApplyDeformOp2\" );\n\
	menu.AddCallbackItem( \"QStretch\", \"OnApplyDeformOp2\" );\n\
\n\
	return true;\n\
}</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1646287F-69D6-475A-8740-967663032927\"></a></span>This menu uses two callbacks:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-1FA79AFF-1BC8-4AD5-A7A7-41137A3B8780\"></a></span> <span class=\"code\" translate=\"no\">OnApplyDeformOp</span>—simple implementation that takes the name of the operator (used as the name of the\n\
                              menu item) and calls the <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> command with all default values.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A013162-2E0C-417E-B7B6-CCD2602C8A95\"></a></span> <span class=\"code\" translate=\"no\">OnApplyDeformOp2</span>—more complex implementation that uses a <span class=\"MenuCascade\" id=\"GUID-535BB47E-FEF2-4B3C-AC4A-03BD5EA541A9\">switch</span> statement to test the name of the menu item. Based on the name, either <a href=\"#!/url=./si_cmds/ApplyOp.html\">ApplyOp</a> or <a href=\"#!/url=./si_cmds/ApplyKinematicOp.html\">ApplyKinematicOp</a> is called with specific parameter values and, in some cases, extra tasks are performed\n\
                              after the operator is applied.\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D919D258-8A2F-44A2-AA01-D13BED30F464\"></a></span>Write the simple implementation for the <span class=\"code\" translate=\"no\">OnApplyDeformOp</span> callback:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function OnApplyDeformOp( in_ctxt )\n\
{\n\
	// Get the menu item <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	var mnu_itm = in_ctxt.Source;\n\
\n\
	ApplyOp( mnu_itm.Name );\n\
	return true;\n\
}</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-448A503B-0019-4988-8481-96554FCA983F\"></a></span>Write the more complex implementation for the <span class=\"code\" translate=\"no\">OnApplyDeformOp2</span> callback:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function OnApplyDeformOp2( in_ctxt )\n\
{\n\
	// Get the menu item <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	var mnu_itm = in_ctxt.Source;\n\
\n\
	switch (mnu_itm.Name) {\n\
		case \"Randomize\" :\n\
			// You can specify extra arguments\n\
			ApplyOp( \"Randomize\", null, siBranch );\n\
			break;\n\
		case \"Expand\" :\n\
			// You could run extra commands to tweak the result...\n\
			var op = ApplyOp( \"Push\" )(0);\n\
			op.ampl.Value = 2;\n\
			break;\n\
		case \"Contract\" :\n\
			// ...and make slight changes\n\
			var op = ApplyOp( \"Push\" )(0);\n\
			op.ampl.Value = -2;\n\
			break;\n\
		case \"QStretch\" :\n\
			// You can call a different command\n\
			ApplyKinematicOp( \"QStretch\", null, siBranch );\n\
			break;\n\
		case \"Punch Out Shape\" :\n\
			ApplyOp( \"QStretch\", null, siBranch );\n\
			break;\n\
		default :\n\
			// This will catch \"Relax\" and \"Smooth\"\n\
			ApplyOp( mnu_itm.Name );\n\
	}\n\
	\n\
	return true;\n\
}</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C8CF3FA-92E4-4C75-B680-164D9A7A115D\"></a></span>Define the <em class=\"mild\">Apply Generator Operators</em> menu using the <span class=\"code\" translate=\"no\">Init</span> callback. This menu\'s items appear only under certain circumstances related to what\n\
                        is currently selected:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA0095D2-89B3-48D9-8212-D71254372125\"></a></span>When the selected items have different primitive types, no items are added to the\n\
                              menu.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-0FAD6F35-AD55-426C-BE7C-E3EAD4A537C9\"></a></span>When two or more surface meshes are selected, only the <em class=\"mild\">Fit</em> and <em class=\"mild\">Fillet Intersection</em> operators are added to the menu.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-496AD906-0347-4F98-8559-C9B9CFA17D5B\"></a></span>When only one polygon mesh is selected, only the <em class=\"mild\">Subdivide</em> operator is added to the menu.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-B36F936F-9FD0-41FE-8B1F-4ADA7CEA777B\"></a></span>When two or more polygon meshes are selected, the three <em class=\"mild\">Boolean</em>, <em class=\"mild\">Blend</em> and <em class=\"mild\">Subdivide</em> operators are added to the menu.\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-EDD93A96-B5A8-481B-8300-50A45A285131\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-29EEC6D4-FD2F-483B-8F6C-06A853818CFD\"></a></span>This conditional menu contruction only works when the menu is <em class=\"mild\">dynamic</em> (that is, when the <a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">RegisterMenu (PluginRegistrar)</a> method uses the default value, true, for the <em class=\"strong\">Dynamic</em> argument—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0014\">Are the Contents of My Menu Fixed?</a></span> for more information).\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function ApplyGenOp_Menu_Init( in_ctxt )\n\
{\n\
	var menu = in_ctxt.source;\n\
\n\
	menu.Name = \"Apply Generator Operators\";\n\
\n\
	// Make all selected objects are the same <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> \n\
	var primtype = \"\";\n\
	for ( var i=0; i&lt;Selection.Count; i++ ) {\n\
		if ( primtype == \"\" ) {\n\
			primtype = Selection(i).Type;\n\
		} else {\n\
			if ( primtype != Selection(i).Type ) {\n\
				return false;\n\
			}\n\
		}\n\
	}\n\
\n\
	// Build the menu items according to the primitive <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> of the \n\
	// selected objects\n\
	switch (primtype) {\n\
		case siSrfMeshPrimType :\n\
			// Only display operator types that can be applied to surfmeshes\n\
			if ( Selection.Count &gt; 1 ) {\n\
				// Make sure at least two items are selected \n\
				menu.AddCallbackItem( \"Fit to Shape\", \"OnApplyGenOp\" );\n\
				menu.AddCallbackItem( \"Fillet Intersection\", \"OnApplyGenOp\" );\n\
			}\n\
			break;\n\
\n\
		case siPolyMeshType :\n\
			// Only display operator types that can be applied to polymeshes\n\
			if ( Selection.Count &gt; 1 ) {\n\
				// Make sure at least two items are selected for boolean operations\n\
				menu.AddCallbackItem( \"Punch Out Shape (Difference)\", \n\
					\"OnApplyGenOp\" );\n\
				menu.AddCallbackItem( \"Leave Remainder Shape (Intersection)\", \n\
					\"OnApplyGenOp\" );\n\
				menu.AddCallbackItem( \"Bind Shapes Together (Union)\", \n\
					\"OnApplyGenOp\" );\n\
				menu.AddCallbackItem( \"Blend Shapes (Mesh)\", \"OnApplyGenOp\" );\n\
			}\n\
			\n\
			menu.AddCallbackItem( \"Subdivide Selection\", \"OnApplyGenOp\" );\n\
			break;\n\
	}\n\
\n\
	return true;\n\
}</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8717DF01-7FF9-4F0C-91C9-73FAFC9AD5D8\"></a></span>Write the implementation for the <span class=\"code\" translate=\"no\">OnApplyGenOp</span> callback. Since the Init callback performed all the tests on the selection before\n\
                        enabling certain callbacks, this callback doesn\'t need to check that the selected\n\
                        types are appropriate for the input objects, since any commands that didn\'t fit the\n\
                        selection were filtered out:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">function OnApplyGenOp( in_ctxt )\n\
{\n\
	// Get the menu item <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
	var mnu_itm = in_ctxt.Source;\n\
\n\
	switch (mnu_itm.Name) {\n\
		case \"Punch Out Shape (Difference)\" :\n\
			ApplyGenOp( \"BooleanGenDifference\", \"\", \"\", null, \n\
				siImmediateOperation, siDeleteGenOpInputs );\n\
			break;\n\
		case \"Leave Remainder Shape (Intersection)\" :\n\
			ApplyGenOp( \"BooleanGenIntersection\", \"\", \"\", null, \n\
				siImmediateOperation, siDeleteGenOpInputs );\n\
			break;\n\
		case \"Bind Shapes Together (Union)\" :\n\
			ApplyGenOp( \"BooleanGenUnion\", \"\", \"\", null, \n\
				siImmediateOperation, siDeleteGenOpInputs );\n\
			break;\n\
		case \"Subdivide Selection\" :\n\
			MeshSubdivideWithCenter( null, \"\", null, \n\
				siImmediateOperation, siDeleteGenOpInputs );\n\
			break;\n\
		case \"Fit to Shape\" :\n\
			ApplyGenOp( \"SrfFit\", \"\", \"\", null, \n\
				siImmediateOperation, siDeleteGenOpInputs );\n\
			break;\n\
		case \"Fillet Intersection\" :\n\
			ApplyGenOp( null, \"\", \"\", null, \n\
				siImmediateOperation, siDeleteGenOpInputs );\n\
			break;\n\
		case \"Blend Shapes (Mesh)\" :\n\
			ApplyGenOp( \"MeshBlend\", \"\", \"\", null, \n\
				siImmediateOperation, siDeleteGenOpInputs );\n\
			break;\n\
		default :\n\
	}\n\
\n\
	return true;\n\
}</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D66AE1ED-73FB-4B75-8728-139F4FF273E6\"></a></span>Save the file and launch Softimage. If Softimage is already running, you can explicitly\n\
                        load this plug-in by opening the Plug-in Manager (select <span class=\"MenuCascade\" id=\"GUID-6E476D57-A34F-4A1B-A272-9DB15B5BB201\">Plug-ins</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-CEFCD074-FB66-4555-BF73-0251B1B05F98\">Manager</span> from the <span class=\"MenuCascade\" id=\"GUID-34992919-34F3-451E-B443-63627D997510\">File</span> menu) and clicking the <span class=\"MenuCascade\" id=\"GUID-882AA1F1-5549-4B70-A8C4-4629C5327C6B\">Update</span> button.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A8AC505-DC6B-4050-80C5-2FAED87709C9\"></a></span>To test the menus, create and select some primitives and open the Application menu.\n\
                        At the bottom you will see the new menus:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-9033329A-487B-43C5-820B-6B338D2F5697\"></a></span>Apply Deform Operators [u]\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C066DE76-1D9F-40CF-B32A-0A84E970C891\"></a></span>Apply Generator Operators [u]\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";