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
      <meta name=\"topicid\" content=\"GUID-CBDCA078-70E9-46A7-8C76-59FCEB017A17\" />\n\
      <meta name=\"indexterm\" content=\"Understanding Menu Anchor Points\" />\n\
      <meta name=\"indexterm\" content=\"Dissecting the Morphology of the siMenuAnchorPoints Enum\" />\n\
      <meta name=\"indexterm\" content=\"menu anchor points: understanding the siMenuAnchorPoints enum\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: understanding the siMenuAnchorPoints enum structure\" />\n\
      <meta name=\"indexterm\" content=\"Adding the Same Menu to Several Different Anchor Points\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: adding: to multiple points\" />\n\
      <meta name=\"indexterm\" content=\"menu anchor points: adding to multiple locations\" />\n\
      <meta name=\"indexterm\" content=\"Fiddling with its Appearance\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: automatic separators\" />\n\
      <meta name=\"indexterm\" content=\"separators: when they appear automatically in custom menus\" />\n\
      <meta name=\"indexterm\" content=\"Nesting: Using SubMenus\" />\n\
      <meta name=\"indexterm\" content=\"nesting: in custom menus\" />\n\
      <meta name=\"indexterm\" content=\"submenus: adding to custom menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: adding submenus (nesting)\" />\n\
      <meta name=\"indexterm\" content=\"custom filters: naming submenu anchor points\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: multiple nesting\" />\n\
      <meta name=\"indexterm\" content=\"nesting: multiple submenus\" />\n\
      <meta name=\"indexterm\" content=\"Naming: Using Labels\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: specifying the name to appear\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: assigning access keys\" />\n\
      <meta name=\"indexterm\" content=\"Assigning Access Keys\" />\n\
      <meta name=\"indexterm\" content=\"access keys: assigning in custom menus\" />\n\
      <meta name=\"indexterm\" content=\"&amp; (access key for custom menus)\" />\n\
      <meta name=\"indexterm\" content=\"access keys: on Windows XP\" />\n\
      <meta name=\"indexterm\" content=\"Organizing: Using Separators\" />\n\
      <meta name=\"indexterm\" content=\"separators: using in custom menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: using: separators\" />\n\
      <meta name=\"indexterm\" content=\"Ordering: Specifying the Sequence of Menu Items\" />\n\
      <meta name=\"indexterm\" content=\"ordering: menu items on custom menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: ordering menu items\" />\n\
      <meta name=\"indexterm\" content=\"Should I Use Callbacks or Commands?\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: special callback functions vs. commands\" />\n\
      <meta name=\"indexterm\" content=\"Adding Filters to Your Menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: adding: filters\" />\n\
      <meta name=\"indexterm\" content=\"filters: adding to custom menus\" />\n\
      <meta name=\"indexterm\" content=\"Example: Using the polygonmesh filter with a custom menu\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>How to Make Your Own Menus</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Context\", \"si_cpp/classXSI_1_1Context.html\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-CBDCA078-70E9-46A7-8C76-59FCEB017A17\"></a></span><div class=\"head\">\n\
            <h1>How to Make Your Own Menus</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B5BB0344-9A16-49F1-B5F3-E97DE0B91D08\"></a></span>As with all self-installing plug-ins, you have to deal with the installation of the\n\
               plug-in while you are working on its implementation. The installation of menus requires\n\
               you to use special callbacks to indicate what you want to register and where it will\n\
               go in addition to what components (items) the plug-in will implement. \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B72B60D-C17F-425F-A63D-8DFDB71640F8\"></a></span>The components of a menu consist of the entries you want to appear on your menu, along\n\
               with any special custom functions that are required (in the case of callback menu\n\
               items). \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A3A43CEA-C544-45B4-9EFB-21848DF30C8B\"></a></span>To install (register) your custom menu, you need to include the <em class=\"strong\">XSILoadPlugin</em> callback in which you specify the name of each menu plug-in item (and any related\n\
               plug-in items, such as self-installing commands or operators, etc.). Each menu plug-in\n\
               item is registered using a separate call to the <a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">RegisterMenu (PluginRegistrar)</a> method which contains the following information: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_39026B250CDD45238E9E1230F21F30A5\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2C5FF05-64A3-478E-AB10-BFF29D717A59\"></a></span>Where the menu will appear (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0018\">Understanding Menu Anchor Points</a></span>). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8C42942-63FD-4391-8A1E-059F04FEC262\"></a></span>How it will appear (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-001C\">Fiddling with its Appearance</a></span>). \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DDB5D51B-EEF7-40CE-90AE-EF3A1587A9F8\"></a></span>What name it will have: the name of the menu plug-in is important because Softimage\n\
                     will expect to see its definition callback matching that name plus <span class=\"code\" translate=\"no\">_Init</span> in order to figure out how to display it when the time comes For more information,\n\
                     see <a href=\"#!/url=./si_cmds/callbacks.html#cb_menu\">Menu Callbacks</a>. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0018\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AB6E5388-BCEB-48B6-A4D9-213E2FA37F65\"></a></span> Understanding Menu Anchor Points\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3BD73F1A-1797-497D-9A33-F419B83FC41D\"></a></span>As outlined in <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-000D\">\n\
                        Where Can Menus Appear?\n\
                        </a></span>, a <em class=\"mild\">menu anchor point</em> represents the location where a menu plug-in item will appear in the Softimage user\n\
                  interface. There are three types of locations where you can insert your menu plug-in\n\
                  item: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_6A307C2E81014F35981E8898C620C1CC\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-43FADAA1-A6FB-4305-8057-B375443C0C0E\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-000E\">Toolbar Menus</a></span>—menus that drop down from a toolbar button (for example, the <span class=\"code\" translate=\"no\">siMenuTbGetPrimitiveSurfaceID</span> member of the <a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuAnchorPoints</a> enum corresponds to <span class=\"MenuCascade\" id=\"GUID-730717B0-1001-4BBC-8F6D-3A2007D2CC80\">Get</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-9330C140-8ADA-4386-87D9-11127EFC8756\">Primitive</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-3C86718A-A4E8-4128-A632-AAF3B27A98FE\">Surface</span> on the <span class=\"MenuCascade\" id=\"GUID-5103DBEE-5251-473C-AF78-53129C7724B1\">Model</span> toolbar). \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E2C9078-CFC0-47B5-AC63-49FA2E0643A9\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-000F\">Window Menus</a></span>—menus that drop down from a fixed menubar (for example, the <span class=\"code\" translate=\"no\">siMenuMainFileImportID</span> member of the <a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuAnchorPoints</a> enum corresponds to the end of the <span class=\"MenuCascade\" id=\"GUID-06EDEC19-0F8B-4084-A71D-4C437398B189\">Import</span> submenu under the <span class=\"MenuCascade\" id=\"GUID-9D15ED4D-4F2E-4B60-9F3A-21CB1CA6C255\">File</span> menu). \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-92FBC276-41E1-488E-B658-E0A3BA4C77C4\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0010\">Contextual Menus</a></span>—menus that pop up when you right-click in the Scene Explorer or one of the 3D Views\n\
                        according to the context (for example, the <span class=\"code\" translate=\"no\">siMenuSELayersContextID</span> member of the <a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuAnchorPoints</a> enum corresponds to the pop-up menu that appears when the Scene Explorer\'s Scope\n\
                        Menu is set to Layers). \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0019\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-6931FA27-BFDC-4033-ADA0-CA19CDB2B475\"></a></span> Dissecting the Morphology of the siMenuAnchorPoints Enum\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EDD00F28-B4CD-4FF6-B978-F0092F588CE2\"></a></span>To begin with, all members of the <a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuAnchorPoints</a> enum begin with <span class=\"code\" translate=\"no\">siMenu</span> and end with <span class=\"code\" translate=\"no\">ID</span>. Each member identifies the type of anchor point with one of the following conventions\n\
                     (bolded): \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_2FC9925F2B77434787FF725EC9BA2F32\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-46C74AF2-74AE-4213-8CF1-05A658114A32\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-000E\">Toolbar Menus</a></span>: <span class=\"code\" translate=\"no\">siMenu<em class=\"strong\">Tb</em></span>___<span class=\"code\" translate=\"no\">ID</span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B5DDFA96-C1EA-4921-9C1B-79171B75C48B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-000F\">Window Menus</a></span>: <span class=\"code\" translate=\"no\">siMenu<em class=\"strong\">Main</em></span>___<span class=\"code\" translate=\"no\">ID</span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B2D47DCA-6620-45CA-A60B-061389709D45\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0010\">Contextual Menus</a></span>: <span class=\"code\" translate=\"no\">siMenu</span>___<span class=\"code\" translate=\"no\"><em class=\"strong\"><a href=\"javascript:void(0)\" data=\"Context\" class=\"a_multireflink\">Context</a></em>ID</span> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8A6EDF1-0A44-494E-94D8-147CBB82F9AC\"></a></span>In addition, there are two kinds of contextual menus that correspond to the view context:\n\
                     \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_7988DF9D062F4D84A2124D8B615551B8\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-35E37494-003C-49D8-ADBA-D1355E0B948A\"></a></span>Scene Explorer: <span class=\"code\" translate=\"no\">siMenu<em class=\"strong\">SE</em></span>___<span class=\"code\" translate=\"no\">ContextID</span> \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-510DF8CD-CAFB-491F-B8E9-AB6A3BEDA1CF\"></a></span>3D Views: <span class=\"code\" translate=\"no\">siMenu<em class=\"strong\">3DView</em></span>___<span class=\"code\" translate=\"no\">ContextID</span> \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-62693E35-7BEF-495C-8E70-8C14A7FCC9F5\"></a></span>The rest of the enum name (___) contains the path of the submenu. For example, <span class=\"code\" translate=\"no\">siMenuTbCreateRigidBodyConstraintID</span> can be broken down as follows: \n\
                  </p> <img src=\"../images/GUID-5481404C-CD8B-48D1-AC01-395672BAB9A9-low.png\" /> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-001B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-92F97E1D-44F4-441B-95D2-2EFA6F5B8967\"></a></span> Adding the Same Menu to Several Different Anchor Points\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B28A29D6-6AB9-4F90-9514-E588146F342A\"></a></span>You may want to add the same menu plug-in item to many different menus. For example,\n\
                     if you created a custom command that creates a new type of primitive you may decide\n\
                     to add a command menu entry under the <span class=\"MenuCascade\" id=\"GUID-7606E0CB-9E2B-4DEB-BE7C-CCB976542774\">Application</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-6914B191-035F-49E5-ADF4-523026B229FB\">Commands</span> and <span class=\"MenuCascade\" id=\"GUID-60DC2BB7-6D32-44C3-A7F0-403C41A562C4\">Model</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-C81E034C-4174-4DA0-8577-FFEC3B9B9DDD\">Create</span><span class=\"MenuCascade\" id=\"GUID-775A6411-A8E9-4E79-ABC1-41D0191C717E\">Poly. Mesh</span> window menus, the <span class=\"MenuCascade\" id=\"GUID-7F3AADD5-5CC0-4790-B010-5172A42FEF5B\">Get</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-18134FED-C881-49EA-A92A-98D4F6ECC33A\">Primitive</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-28571BC1-41F4-4366-9AA7-15E750169916\">Polygon Mesh</span> toolbar menu and one or more of the contextual menus. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7798BD02-EC02-48BC-A238-3B3417F2E844\"></a></span>To add an entry to several points, you need to add one <a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">RegisterMenu (PluginRegistrar)</a> call for each menu anchor point but use the same menu plug-in item for each. For\n\
                     example, if your plug-in implements a custom command plug-in item called <em class=\"mild\">MooMooCow</em> and you want that command to appear in the <span class=\"MenuCascade\" id=\"GUID-5747E3D0-C113-498C-AFE3-42FA342A1165\">Application</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-830A1E6E-4DFD-4AEB-9350-F068BF4541B4\">Preferences</span> window menu as well as the <span class=\"MenuCascade\" id=\"GUID-E9986922-9300-4F54-8DB7-E68585FF552E\">Preferences</span> contextual menu in the Scene Explorer, the XSILoadPlugin callback should include\n\
                     calls similar to these: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">// Register the Moo command \n\
	in_reg.RegisterCommand( \"MooMooCow\", \"Moo\" );\n\
	\n\
	// The Moo command will appear in the Application &gt; Preferences\n\
	// menu as well as the (SE) Preferences contextual menu\n\
	in_reg.RegisterMenu( siMenuMainApplicationPreferencesID, \"MooMenu\", true );\n\
	in_reg.RegisterMenu( siMenuSEPreferenceContextID, \"MooMenu\", false );</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F285F4E4-EA62-4449-9DEC-327F8435D45F\"></a></span>Then you only need to define (specify which menu items or entries are associated to\n\
                     that menu plug-in item) the menu plug-in item once: in the <span class=\"code\" translate=\"no\">MooMenu_Init</span> callback. \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-B0179A8A-D4CD-47F3-869E-DC6B6436C23C\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-AD8DFEC4-D5B1-4554-B5BF-F162E97E9BF7\"></a></span>As you can see from this example, a menu plug-in item doesn\'t necessarily have to\n\
                           appear the same way in different locations. In this example, the menu that appears\n\
                           in the <span class=\"MenuCascade\" id=\"GUID-49075880-4E7A-4876-911A-85EDC02CB38B\">Application</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-6AF13108-D2ED-47B6-BC6D-7EC57FCBF984\">Preferences</span> window menu will appear as a drop-down (secondary) menu but the one that appears\n\
                           in the <span class=\"MenuCascade\" id=\"GUID-F6C2B7AC-F7E8-402E-9B25-B4479E0DCA1A\">Preferences</span> contextual menu will appear on the main menu level. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-001C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-654AF9AC-FF15-4103-9B70-5926F838BF5E\"></a></span> Fiddling with its Appearance\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-656A508F-F02A-4088-95D3-E8B62BEBFFCC\"></a></span>You have a number of options available to define how your menu will appear: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_198D8676DBCA4C13A0445ABD0AA70FD9\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-ACCB5313-ABC4-4109-8F12-125523F7FF67\"></a></span>You can decide whether you want your menu items (entries) to appear in a submenu (secondary\n\
                        menu) off a single menu anchor point or on the same level as the anchor point—see\n\
                        <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-001D\">Nesting: Using SubMenus</a></span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E7597A4-2A89-4ABA-A05D-DCDA8C5A69FB\"></a></span>You can define how each entry will appear (and to some extent, what label announces\n\
                        the submenu, if relevant) and assign an access key to it—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0023\">Naming: Using Labels</a></span>. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-632387D8-ED7D-4507-9371-877E080E187F\"></a></span>You can distinguish some of your menu items from the rest by using separators (horizontal\n\
                        lines between items)—see <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0025\">Organizing: Using Separators</a></span>. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-40AEE60F-49EE-42CA-8CE4-F6D22B7D3F03\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EAF2C8DA-5F16-4633-AE56-4486E6641F8E\"></a></span>Explicitly adding separators is only necessary to set off menu items within a single\n\
                        menu, since a single menu comes already separated from other menu plug-in items or\n\
                        native Softimage menu entries. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-001D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-72152741-6C32-44B9-80C3-9AF57D7DD064\"></a></span> Nesting: Using SubMenus\n\
                  </h3>     \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C0651B8-FA4A-4996-B85B-21BAB66E25FB\"></a></span>In many cases your menus will appear at the end of an exising menu. If you have only\n\
                     a few entries, it may make sense to display the entries in the same menu. Otherwise,\n\
                     you can use submenus to easily organize large numbers of entries: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_B95F7E1DA362465DB0B69511610E80D6\"></a></span><div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col />\n\
                           <col />\n\
                        </colgroup>\n\
                        <tr class=\"ruledHeading\">\n\
                           <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-A53C0CE4-5951-4E01-B1B9-AF1BD7975127\"></a></span><p class=\"table-heading\">Flat Entry(same menu) </p> \n\
                           </th>\n\
                           <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-001E\"></a></span><p class=\"table-heading\"> SubMenu (drop-down menu) </p> \n\
                           </th>\n\
                        </tr>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\">&nbsp; <img src=\"../images/GUID-521EC557-C829-495E-9E32-7A0F8E417F47-low.png\" /> \n\
                           </td>\n\
                           <td class=\"table-body\">&nbsp; <img src=\"../images/GUID-A92C6AD6-D620-4188-BD26-0B4BB1BB8B58-low.png\" /> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D8DAA9B6-0224-43AC-8484-A89EAA8268F0\"></a></span>You specify whether your menu plug-in item will appear as a flat list inside the anchor\n\
                     menu or as a secondary drop-down menu when you are registering the menu plug-in item\n\
                     with the <em class=\"strong\">DisplayAsSubmenu</em> parameter of the <a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">PluginRegistrar.RegisterMenu</a> method: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">// To register a flat menu (no submenu):\n\
	in_reg.RegisterMenu( siMenuTbDeformID, \"AnchorPoint\", <em class=\"strong\">false</em> );\n\
\n\
	// To register a submenu:\n\
	in_reg.RegisterMenu( siMenuTbDeformID, \"AnchorPoint\", <em class=\"strong\">true</em> );\n\
	// ... or the equivalent (true is the default):\n\
	in_reg.RegisterMenu( siMenuTbDeformID, \"AnchorPoint\" );</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-0129CF34-0553-40E1-8F72-7EAC606F8751\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1024E3A-26AD-4881-9231-1DD996FA2900\"></a></span>One thing to be aware of is that the name of the menu plug-in item will appear as\n\
                           the submenu anchor point, as the above statement demonstrates the underlying code\n\
                           to produce the <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-001E\">SubMenu (drop-down menu)</a></span> example in the table above. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EBADD8F6-1C85-4480-B719-AF7EEA8AECF6\"></a></span>Another point of interest is that you can nest any number of submenus, but you only\n\
                     need one menu anchor point: the other dependent submenus are defined inside the <span class=\"code\" translate=\"no\">Init</span> callback for the top-level menu plug-in using an AddItem call with siMenuItemSubmenu\n\
                     as the specified value for the Style parameter: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">function NestedMenus_Init( in_context )\n\
	{\n\
		// Get the menu object from the Context input\n\
		var oTopMnu = in_context.Source;\n\
\n\
		// Add some regular menu items\n\
		oTopMnu.AddItem( \"Regular Item1\", siMenuItem );\n\
		oTopMnu.AddItem( \"Regular Item2\", siMenuItem );\n\
\n\
		// Add the submenu item \n\
		var oSubLevel1 = oTopMnu.AddItem( \"SubMenu Demo Level1\", \n\
			<em class=\"strong\">siMenuItemSubmenu</em> )\n\
		oSubLevel1.AddItem( \"SubLevel1 ItemA\", siMenuItem );\n\
		oSubLevel1.AddItem( \"SubLevel1 ItemB\", siMenuItem );\n\
\n\
		// Nest another submenu item \n\
		var oSubLevel2 = oSubLevel1.AddItem( \"SubMenu Demo Level2\", \n\
			<em class=\"strong\">siMenuItemSubmenu</em> )\n\
		oSubLevel2.AddItem( \"SubLevel2 ItemA\", siMenuItem );\n\
		oSubLevel2.AddItem( \"SubLevel2 ItemB\", siMenuItem );\n\
		oSubLevel2.AddItem( \"SubLevel2 ItemC\", siMenuItem );\n\
		oSubLevel2.AddItem( \"SubLevel2 ItemD\", siMenuItem );\n\
\n\
		// ... and another ...\n\
		var oSubLevel3 = oSubLevel2.AddItem( \"SubMenu Demo Level3\", \n\
			<em class=\"strong\">siMenuItemSubmenu</em> )\n\
		oSubLevel3.AddItem( \"SubLevel3 ItemA\", siMenuItem );\n\
		oSubLevel3.AddItem( \"SubLevel3 ItemB\", siMenuItem );\n\
		oSubLevel2.AddItem( \"SubLevel2 ItemC\", siMenuItem );\n\
\n\
		// ... etc.\n\
\n\
		// Finish with success notification\n\
		return true;\n\
	}</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE6D33F5-A09A-435C-A65F-8D5F1EA746BE\"></a></span>This example produces this type of nesting: \n\
                  </p> <img src=\"../images/GUID-8767810B-14B3-4842-8E9C-B381412574A5-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D19CAC40-8D99-4EF0-B79E-7DE1CCF9B892\"></a></span>Since each submenu is added to a menu object, you get the menu object returned from\n\
                     the <a href=\"#!/url=./si_om/Menu.AddItem.html\">AddItem (Menu)</a> call to nest another submenu. In the above example, if it had used the <span class=\"code\" translate=\"no\">oTopMnu</span> object to add each <span class=\"code\" translate=\"no\">SubLevel</span> submenu, it would have created the three submenus as siblings instead: \n\
                  </p> <img src=\"../images/GUID-F08998FB-7C5F-4B66-959B-B4BC346A75F6-low.png\" /> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0023\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-4050078C-6211-413D-A77D-9B49E7F133FE\"></a></span> Naming: Using Labels\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1C792D23-D0C5-4DDF-B871-DC15E3CC197C\"></a></span>For flat menus, the name of the main entry point does not appear, but the name you\n\
                     register the top submenu with (<a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">RegisterMenu (PluginRegistrar)</a>) or the name you add submenus with (<a href=\"#!/url=./si_om/Menu.AddItem.html\">AddItem (Menu)</a>) appears as the name of the anchor point (see <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-001D\">Nesting: Using SubMenus</a></span> for more information about creating submenus). \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-81AD9BD0-6667-451C-89F8-3C16ED223A80\"></a></span>For menu items (except separators), you define the name of the item with the <em class=\"strong\">Label</em> parameter for whichever method you use (<a href=\"#!/url=./si_om/Menu.AddItem.html\">AddItem (Menu)</a>, AddCommandItem (Menu) or <a href=\"#!/url=./si_om/Menu.AddItem.html\">AddItem (Menu)</a>): \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">// Add an entry that appears as \'Daffy Duck\' and calls a special \n\
	// function defined in the same plug-in file as \'QuackQuackQuack\':\n\
	oMnu.AddCallbackItem( \"<em class=\"strong\">Daffy Duck</em>\", \"QuackQuackQuack\" );\n\
\n\
	// Add an entry that appears as \'Launch Explorer\' and invokes the\n\
	// \'OpenXSIExplorer\' command:\n\
	oMnu.AddCommandItem( \"<em class=\"strong\">Launch Explorer</em>\", \"OpenXSIExplorer\" );\n\
\n\
	// Alternative ways to do the same things:\n\
	var cbk = oMnu.AddItem( \"<em class=\"strong\">Daffy Duck</em>\", siMenuItem );\n\
	cbk.Callback = \"QuackQuackQuack\";\n\
\n\
	var cmd = oMnu.AddItem( \"<em class=\"strong\">Launch Explorer</em>\", siMenuItem );\n\
	cmd.Command = \"OpenXSIExplorer\";</pre></div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0024\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-C5DE3317-BB8F-4FC9-99D7-E36CFC398BCF\"></a></span> Assigning Access Keys\n\
                     </h4>    \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C9BD1DA-C4C3-42A9-A013-4A4D98E4866C\"></a></span>You can also assign one of the letters in the label as an access key by inserting\n\
                        an ampersand (&amp;) before that letter. An access key is a letter that appears underlined\n\
                        which the user can press to activate the associated callback or command. For example:\n\
                        \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">// Assign \'k\' as the access key for the \'Daffy Duck\' menu entry:\n\
	oMnu.AddCallbackItem( \"Daffy Duc&amp;k\", \"QuackQuackQuack\" );\n\
\n\
	// Assign \'x\' as the access key for the \'Launch Explorer\' menu entry:\n\
	oMnu.AddCommandItem( \"Launch E&amp;xplorer\", \"OpenXSIExplorer\" );</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-61F68F3C-9905-4D93-BE40-0E2E9594ACD9\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-BFBD0B91-673F-48DB-B086-956FBD4F105D\"></a></span>On Windows XP access keys are not identified (do not appear underlined) by default.\n\
                              To display them, press the <span class=\"MenuCascade\" id=\"GUID-33C804BB-FE57-48C4-BE57-7963BEDBF7E4\">Alt</span> key. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0025\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-83DB82B5-A32E-4268-BD91-B6D1CB7EDF4A\"></a></span> Organizing: Using Separators\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-13B0F3B8-9821-4BF9-B883-D1F8424BF740\"></a></span>You may want to set certain menu items apart from the others visually. There is a\n\
                     special method that inserts a horizontal line between items: the <a href=\"#!/url=./si_om/Menu.AddSeparatorItem.html\">AddSeparatorItem (Menu)</a> method. For example: \n\
                  </p> <img src=\"../images/GUID-36EC402E-FAAF-47C7-9F29-F552D68EE963-low.png\" /> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">// Of five items, separate the third and fourth\n\
		oSepMnu.AddItem( \"Menu Item 1\", siMenuItem );\n\
		oSepMnu.AddItem( \"Menu Item 2\", siMenuItem );\n\
\n\
		oSepMnu.<em class=\"strong\">AddSeparatorItem</em>();\n\
\n\
		oSepMnu.AddItem( \"Menu Item 3\", siMenuItem );\n\
		oSepMnu.AddItem( \"Menu Item 4\", siMenuItem );\n\
\n\
		oSepMnu.<em class=\"strong\">AddSeparatorItem</em>();\n\
\n\
		oSepMnu.AddItem( \"Menu Item 5\", siMenuItem );</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-7263291C-FA80-4EA7-AC67-6630F6250F81\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8C90D2F-022A-42DE-AEAE-18FB11FF63BE\"></a></span>Notice that the order of these items determines the order in which they appear. See\n\
                           <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0027\">Ordering: Specifying the Sequence of Menu Items</a></span> for more information. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0027\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2BEF04E4-4C9D-4BB6-9E70-A718C3958AFF\"></a></span> Ordering: Specifying the Sequence of Menu Items\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2CAEE80-2472-47DE-B393-8396AA0A4AC3\"></a></span>The sequence in which you define menu items determines their order in the final menu.\n\
                     This is true for all menu items: command entries, callback entries, submenus and separators.\n\
                     Compare the following example with the example in the previous section (<span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0025\">Organizing: Using Separators</a></span>): \n\
                  </p> <img src=\"../images/GUID-2B0BC93E-AC0E-4626-983D-05D048F21D26-low.png\" /> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">// Move the lines out of order\n\
		oSepMnu.AddItem( \"Menu Item 3\", siMenuItem );\n\
		oSepMnu.AddItem( \"Menu Item 4\", siMenuItem );\n\
\n\
		oSepMnu.AddItem( \"Menu Item 1\", siMenuItem );\n\
		oSepMnu.AddItem( \"Menu Item 2\", siMenuItem );\n\
\n\
		oSepMnu.AddSeparatorItem();\n\
		oSepMnu.AddSeparatorItem();\n\
\n\
		oSepMnu.AddItem( \"Menu Item 5\", siMenuItem );</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0029\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AD1E531F-CC53-4D07-B950-6486D2806E6F\"></a></span> Should I Use Callbacks or Commands?\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-937E9619-81FD-44EB-AC58-2652427EEF30\"></a></span>If you are defining your own custom command and you wonder whether it is really necessary\n\
                  to implement a command or if you can get away with defining a special callback function,\n\
                  consider these facts: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_33F136B87647446895A2238B5EE17308\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F24ED03A-811A-4772-803E-6783407C7165\"></a></span>Commands get added to the Softimage command map; callbacks do not. One implication\n\
                        of this is that callbacks cannot be assigned hotkeys. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B0C4B8EE-B387-41FF-B132-A802785656BE\"></a></span>Callbacks cannot be re-used outside of the plug-in module in which they are defined;\n\
                        but once a command is registered, it is available throughout Softimage until it is\n\
                        explicitly unloaded. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2269A1A0-5F6E-4CBD-B59D-BCF75D14B987\"></a></span>Commands must have unique names in Softimage; callbacks can use the same name as another\n\
                        command in Softimage (in case of a clash, the callback is invoked). \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCFFC7CE-6A28-4D34-A81E-FF99256AA8AF\"></a></span>Callbacks are easier to implement: all functionality is contained within the single\n\
                        callback named in the <a href=\"#!/url=./si_om/Menu.AddItem.html\">AddItem (Menu)</a> call. In addition to being identified in the AddCommandItem (Menu) call, commands\n\
                        need to be registered in the <span class=\"code\" translate=\"no\">XSILoadPlugin</span> callback, defined in their <span class=\"code\" translate=\"no\">Init</span> callback and then implemented in their <span class=\"code\" translate=\"no\">Execute</span> callback. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-002A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-643710C5-808D-48B3-B99B-4DEECA0789CE\"></a></span> Adding Filters to Your Menus\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-22663760-A606-4FD4-A093-BAC5A86DD38D\"></a></span>Some operations require specific types of input, whether it be a minimum number of\n\
                  input objects, or objects of a certain primitive type, etc. You can add a filter that\n\
                  matches whatever condition your function or command requires such that if the selected\n\
                  object(s) do not match that condition, your menu will be disabled (even appearing\n\
                  greyed-out). \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-712F4C21-5EA5-449C-8F52-15864B10AFDA\"></a></span>Filters are applied to a <a href=\"#!/url=./si_om/MenuItem.html\">MenuItem</a> object by identifying which registered filter (either as the name of the filter or\n\
                  the <a href=\"#!/url=./si_om/Filter.html\">Filter</a> object) you want to use with the <a href=\"#!/url=./si_om/MenuItem.Filter.html\">MenuItem.Filter</a> property. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-002B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-7B86E45B-9F0F-4B3A-BE82-597060D6D537\"></a></span> Example: Using the polygonmesh filter with a custom menu\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3AD6395F-DEBF-444D-8F89-EF3E6588578C\"></a></span>This example demonstrates how to specify a filter for a custom menu. The code is defined\n\
                     in the <span class=\"code\" translate=\"no\">Init</span> callback. When the user tries to invoke any of the menu entries with a null or surface\n\
                     mesh object selected, the menu will be disabled. As soon as the user selects a polygon\n\
                     mesh object, the menu becomes accessible: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">// Get the menu object from the Context input\n\
	var oFMnu = in_context.Source;\n\
	oFMnu.<em class=\"strong\">Filter</em> = \"polygonmesh\";\n\
\n\
	// Add three callback items but only enable them for\n\
	// polygon meshes.\n\
	oFMnu.AddCallbackItem( \"Punch Out Hole\", \"PunchOutHole\" );\n\
	oFMnu.AddCallbackItem( \"Remove Corner\", \"RemoveCorner\" );\n\
	oFMnu.AddCallbackItem( \"Smooth Curves\", \"SmoothCurves\" );</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";