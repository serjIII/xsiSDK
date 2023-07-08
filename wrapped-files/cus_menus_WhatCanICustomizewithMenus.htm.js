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
      <meta name=\"topicid\" content=\"GUID-E091C6C7-3BE5-4C4C-BAC2-0AE635DA0D36\" />\n\
      <meta name=\"indexterm\" content=\"What Can I Put in a Menu?\" />\n\
      <meta name=\"indexterm\" content=\"origin indicators in menus\" />\n\
      <meta name=\"indexterm\" content=\"\\\" />\n\
      <meta name=\"indexterm\" content=\"\\\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: adding: commands\" />\n\
      <meta name=\"indexterm\" content=\"commands: adding to menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: special callback functions in menus\" />\n\
      <meta name=\"indexterm\" content=\"callbacks: special functions in menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: adding: separators\" />\n\
      <meta name=\"indexterm\" content=\"separators: using in custom menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: adding: submenus (nesting)\" />\n\
      <meta name=\"indexterm\" content=\"submenus: adding to custom menus\" />\n\
      <meta name=\"indexterm\" content=\"Where Can Menus Appear?\" />\n\
      <meta name=\"indexterm\" content=\"anchor points (menus)\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: anchor points\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: toolbar menus\" />\n\
      <meta name=\"indexterm\" content=\"toolbar menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: window menus\" />\n\
      <meta name=\"indexterm\" content=\"window menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: contextual menus\" />\n\
      <meta name=\"indexterm\" content=\"contextual menus\" />\n\
      <meta name=\"indexterm\" content=\"Are the Contents of My Menu Fixed?\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: dynamic or static\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: static or dynamic\" />\n\
      <meta name=\"indexterm\" content=\"static menus\" />\n\
      <meta name=\"indexterm\" content=\"dynamic menus\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: using: filters\" />\n\
      <meta name=\"indexterm\" content=\"Do I Have to Use Self-installing Menu Plug-ins?\" />\n\
      <meta name=\"indexterm\" content=\"custom menus: restrictions\" />\n\
      <meta name=\"indexterm\" content=\"restrictions: on building custom menus\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What Can I Customize with Menus?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E091C6C7-3BE5-4C4C-BAC2-0AE635DA0D36\"></a></span><div class=\"head\">\n\
            <h1>What Can I Customize with Menus?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC4B3870-B5A9-43CC-A53C-EE9D9E633D10\"></a></span>In Softimage, custom menus can only be built as <span class=\"char_link\"><a href=\"#!/url=./files/cus_self.htm\">self-installing plug-ins</a></span>. Self-installing menus contain a definition (what items will appear on the menu,\n\
            how it will behave and what it will look like) and any extra custom functions (procedures\n\
            that run when the matching menu item is clicked) you choose to provide. \n\
         </p><img src=\"../images/GUID-D00EF574-D37D-4E27-A689-AF505E00866D-low.png\" /><p><span class=\"anchor_wrapper\"><a name=\"GUID-EBA12F5A-D9F3-4E71-B1B0-87AD0B8EDD8F\"></a></span>Before getting into the details of how to build custom menus, this section provides\n\
            answers to questions about the structure of menu and their components: \n\
         </p><span class=\"anchor_wrapper\"><a name=\"UL_84D340061FFD4D18A4EF62F3C558C1BE\"></a></span><ul>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E53C206A-B395-4254-A4F6-75CFD036791B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0005\">What Can I Put in a Menu?</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E85FB94A-0F34-43E2-B57E-E46D84F683E6\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-000D\">Where Can Menus Appear?</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7415015C-AB2D-44E1-9A21-5E7B49887B74\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0014\">Are the Contents of My Menu Fixed?</a></span> \n\
               </p> \n\
            </li>\n\
            <li> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E94AC17C-9C44-4002-A0BE-82475934B294\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/cus_menus_WhatCanICustomizewithMenus.htm#WS209F6C4D71DA954DB0E0FF512CF0DEBA-0015\">Do I Have to Use Self-installing Menu Plug-ins?</a></span> \n\
               </p> \n\
            </li>\n\
         </ul>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0005\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F8608677-883A-45D3-8408-73146ACC1899\"></a></span> What Can I Put in a Menu?\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D0C80715-3EB1-4F77-BE47-6DF424DD43CD\"></a></span>Everything appearing on a menu is called a <em class=\"mild\">menu item</em>. Depending on the menu item\'s <em class=\"mild\">origin</em> (the location from which the command or callback was installed) one of the following\n\
               symbols may appear beside the label: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_1A84B238996245428A449BF09E918F0B\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"33.33333333333333%\" align=\"left\" />\n\
                     <col width=\"66.66666666666666%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9EA15F59-4EC4-4766-9930-2C7463C66856\"></a></span><p class=\"table-heading\">Symbol </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8F5E0551-11BE-4FCD-BEDF-910694651A4F\"></a></span><p class=\"table-heading\">Origin </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-34F9E88F-5AC6-4FA6-8344-DB01C071050B\"></a></span><p class=\"table-body\">  <img src=\"../images/GUID-DAD17C05-0983-4304-925B-F620B1CF852E-low.png\" /> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2CF2DA3D-9AC4-45BB-8972-1CB6C1ACFAC5\"></a></span><p class=\"table-body\"> the user location </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-45B02B53-FCD1-46C9-9FCA-FA99E3321DC1\"></a></span><p class=\"table-body\">  <img src=\"../images/GUID-D1953A4B-E6E1-43DD-B1DC-C0281CFC6F8C-low.png\" /> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-20692E2B-7D40-4AAE-8C77-25BA0A4867C8\"></a></span><p class=\"table-body\"> the workgroup location </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0443D5B1-91B3-4998-8724-5244F25BBB74\"></a></span><p class=\"table-body\">(no symbol) </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-EED18D19-DEAC-414B-9192-D87C24549BF2\"></a></span><p class=\"table-body\">the factory location </p> <span class=\"anchor_wrapper\"><a name=\"GUID-DC4B0C21-9E6B-4A3E-8258-ACA4ED4482DB\"></a></span><p class=\"table-body\">—or— </p> <span class=\"anchor_wrapper\"><a name=\"GUID-CAB0133B-517B-43EC-8D14-E680FE0453FB\"></a></span><p class=\"table-body\">a custom location (a location specified by the <span class=\"code\" translate=\"no\">XSI_PLUGINS</span> environment variable) \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC10A2AF-E0B7-4496-946F-F86DBACA2D5F\"></a></span>When you define a menu you can add any of the following items: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"UL_02F33D375C144533BDEA1171E036ABE3\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-6AD1234F-84B6-449A-9400-AE1AE49FB6DD\"></a></span> <em class=\"strong\">Commands</em> (regular, instance and template commands) \n\
                  </p> <img src=\"../images/GUID-F930DDA3-7C2A-472B-9A60-AD90029AA8BC-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-944FA698-2E59-41C6-842E-397C0BE54E8F\"></a></span>Launch custom and built-in Softimage commands. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E79581E5-3B40-44AD-A898-151697CA6CE5\"></a></span>If you add a command item to a menu but the command is not enabled, the entry appears\n\
                     in grey on the menu. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFCBB889-BDC5-4ED0-822A-6EFD5CC4505F\"></a></span>If there is a hotkey assigned to the command it automatically appears next to the\n\
                     label (the text that actually appears in the menu). \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-D4467A76-2373-4057-B45C-F0700EA14E2E\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6FE399DA-3740-40F3-AD45-D7C356315218\"></a></span>You do not have to use the actual name of the command for the label. You can specify\n\
                           any name or phrase you want. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3914C75C-9365-4100-9A68-155E2ED40F31\"></a></span> <em class=\"strong\">Callbacks</em> (to custom functions) \n\
                  </p> <img src=\"../images/GUID-1826D7AA-F9A8-4172-9765-2AEE7B0EB98C-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E2C89D8-3744-47AA-B438-4138FCF47F63\"></a></span>Launch your own custom callback functions. These functions must be defined in the\n\
                     same file as your menu definition. \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-5CF4CF6E-2D47-44ED-A886-45EF0EB7C17A\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-BC29FA9A-AC46-4432-99A8-B0F57AEC5A6F\"></a></span>Callback functions are undoable provided that commands or object model methods they\n\
                           used support Undo and Redo. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-75F3B9BC-E72A-43B5-9B6A-E2FF6E24211E\"></a></span>   <em class=\"strong\">Separators</em> \n\
                  </p> <img src=\"../images/GUID-352F155A-864B-4A02-82D2-C7BBC1CB89E0-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E15729C2-1770-441F-9D65-245A0BC46ED5\"></a></span>You can split your menu into logical sections with these horizontal lines. These are\n\
                     purely cosmetic entities. \n\
                  </p> <img src=\"../images/GUID-7CF3366D-F5AB-4ED9-9BB4-2A20BB63AB8A-low.png\" /> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BD784BA5-78F7-4552-8C67-F30C06EB1D85\"></a></span> <em class=\"strong\">Sub-menus</em> (sometimes called <em class=\"mild\">Secondary</em> or <em class=\"mild\">Drop-down</em> menus) \n\
                  </p> <img src=\"../images/GUID-35351C4A-F598-4877-84FB-8745A67D3426-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-85E08646-D2F6-4B6F-921D-D29A826BB6F4\"></a></span>You can organize your menus and menu items by nesting menus. Sub-menus can be identified\n\
                     by the arrow on the right side of the entry label. \n\
                  </p> \n\
               </li>\n\
            </ul> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-000D\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8E7279AA-FCE4-4529-9D0C-DE30AF82CFBD\"></a></span> Where Can Menus Appear?\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E3D96FD6-0D93-4728-BF9B-B2965AD2703A\"></a></span>There are actually more than 100 different locations you can choose from (see <a href=\"#!/url=./si_om/siMenuAnchorPoints.html\">siMenuAnchorPoints</a> for the complete list). These locations are <em class=\"mild\">called menu anchor points</em> which you specify during menu registration (see <a href=\"#!/url=./files/cus_menus_RegisteringaCustomMenuinXSI.htm\">Registering a Custom Menu in Softimage</a>). Anchor points can be used on: \n\
            </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_EE171156F26341DD928E24938B03670C\"></a></span><div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col width=\"20%\" align=\"left\" />\n\
                     <col width=\"40%\" align=\"left\" />\n\
                     <col width=\"40%\" align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-000E\"></a></span><p class=\"table-heading\"> Toolbar Menus </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-000F\"></a></span><p class=\"table-heading\"> Window Menus </p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0010\"></a></span><p class=\"table-heading\"> Contextual Menus </p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\">&nbsp; <img src=\"../images/GUID-230C204C-22F4-4AE1-97A8-543CD22EF090-low.png\" /> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\">&nbsp; <img src=\"../images/GUID-742C2C56-DFD3-433A-9E29-7A8F2CF66B68-low.png\" /> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3C73FF8E-2CDA-47EA-8F1D-6937B5CA0AE2\"></a></span><p class=\"table-body\"> <img src=\"../images/GUID-2C5F4F5E-B501-41CF-A07D-5ACCBE4E0BFD-low.png\" /> \n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-7C21CFC6-BE58-451B-8B73-24A6287A1F93\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5A61D66-545E-449D-9A58-690674A42C8B\"></a></span>Contextual menus occur in both the Scene Explorer and 3d Views \n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div> \n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-87573983-0345-4036-8A5F-0398428C5A31\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F88AD82E-968B-4513-8095-C2E231B692F4\"></a></span>A menu\'s anchor point is completely fixed once the menu is registered (installed)\n\
                     in Softimage because of the way plug-ins are loaded. During registration, the PluginRegistrar\n\
                     figures out where each menu will go but doesn\'t actually build anything until the\n\
                     user activates its parent menu. \n\
                  </p> \n\
               </div>\n\
            </div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0014\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3138ABC2-6421-4CC9-8816-8901D7930C80\"></a></span> Are the Contents of My Menu Fixed?\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FBF52B8-D494-447E-8F28-5EDBA072CA2F\"></a></span>You have the option of creating either static or dynamic menus. Menus are rebuilt\n\
               every time they are loaded or reloaded in Softimage, but you can also choose to rebuild\n\
               them every time their parent (the menu on which they are anchored) opens. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A8F5C2D-96FE-44B5-A32D-E24AD992CA72\"></a></span>For example, you can assign a filter to am item on your menu (using the <a href=\"#!/url=./si_om/MenuItem.Filter.html\">MenuItem.Filter</a> property) for validating the menu against the target or selected objects before it\n\
               gets displayed. If the filter criteria is not satisfied then the custom menu item\n\
               is either greyed out or, if attached to a contextual menu, removed. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9E04F1B8-0226-406F-BD54-F5F85F38FDB1\"></a></span>Alternatively, you could limit menu items from appearing if certain conditions are\n\
               not met. For example, your menu <span class=\"code\" translate=\"no\">Init</span> callback might look like this: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">if ( Selection.Count &gt; 0) {\n\
		menu.AddCommandItem( \"Add Duck To Water\", \"AddDuckToWater\" );\n\
	} else {\n\
		menu.AddCommandItem( \"Drain Tub\", \"DrainTub\" );\n\
	}\n\
\n\
	menu.AddCommandItem( \"Add More Hot Water\", \"AddMoreHotWater\" );</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4B7729F1-EAD4-40E7-ACB7-5F164FB5ACE7\"></a></span>With this example, if nothing is selected in the current scene when the user opens\n\
               the menu, only the <em class=\"mild\">Drain Tub</em> and <em class=\"mild\">Add More Hot Water</em> command entries will appear. If something is selected, the <em class=\"mild\">Add Duck to Water</em> and <em class=\"mild\">Add More Hot Water</em> command entries appear instead. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE6BC719-3FC7-42B2-A801-CB204B738C0C\"></a></span>By default, menus are dynamic. To make your menu static, you can set the <em class=\"strong\">Dynamic</em> parameter to <span class=\"code\" translate=\"no\">false</span> when you call the <a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">RegisterMenu (PluginRegistrar)</a> method inside the <em class=\"strong\">XSILoadPlugin</em> registration callback. \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS209F6C4D71DA954DB0E0FF512CF0DEBA-0015\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D5E6971D-868F-4A9B-8378-60E9511BBEC4\"></a></span> Do I Have to Use Self-installing Menu Plug-ins?\n\
            </h2>  \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-28829014-A196-4FD9-8BFB-1B91A95C8C53\"></a></span>Yes. While menus can be scripted or compiled, they cannot be created on the fly (in\n\
               the Script Editor). You must implement your custom menus as a self-installing plug-in\n\
               using the correct callbacks. For more information, see <a href=\"#!/url=./files/cus_self.htm\">Self-Installing Plug-ins</a>. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-55981100-6581-4E00-BA05-6759BEBF1793\"></a></span>You can also see the <a href=\"#!/url=./examples/Addons/SimpleMenu/netview_SimpleMenu.htm\">Simple Menu</a> example that shows how to add custom menus in Softimage. This example is located\n\
               in the examples folder of the Softimage SDK installation directory. \n\
            </p> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";