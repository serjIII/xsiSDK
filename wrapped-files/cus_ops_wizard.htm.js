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
      <meta name=\"topicid\" content=\"GUID-1DF7B1B3-5363-4056-AD3B-EFD5CC8F4530\" />\n\
      <meta name=\"indexterm\" content=\"wizards: creating operators\" />\n\
      <meta name=\"indexterm\" content=\"To create a custom operator using the SDK Operator Wizard\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Custom Operator Wizard</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1DF7B1B3-5363-4056-AD3B-EFD5CC8F4530\"></a></span><div class=\"head\">\n\
            <h1>Custom Operator Wizard</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-491EEC03-8D8B-47F9-8E33-A7C2566A3D59\"></a></span>You can use the SDK Operator Wizard to generate the code for a self-installing plug-in\n\
               that contains a custom operator. In addition to generating the skeleton code for the\n\
               plug-in and the operator, the wizard can also generate the code required to add the\n\
               command to apply the operator.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-61572D64-C4BB-4E94-BB9F-E7FDADFB1048\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4BB97E3C-DC2C-4BC8-8F7D-9C673F13FF66\"></a></span>The SDK Operator Wizard can generate enough code to establish a operator with valid\n\
                     connections and even the command to apply it; however, you still need to provide the\n\
                     code to calculate the scene change. The wizard does not generate more than the basic\n\
                     shell for the <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> callback, which is where the algorithm for the operator is implemented.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-6CBFA43B-155D-49BE-A9D4-D96D2386BA64\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-57D561E6-2D4A-456A-9B20-20ED353F9765\"></a></span>When using the wizard, remember that any changes you make manually to the code will\n\
                     be overwritten if you ask the wizard to regenerate the code, so it is a good idea\n\
                     to make sure you are completely ready to begin coding before clicking <span class=\"MenuCascade\" id=\"GUID-E4A532CE-A758-440D-AA3F-4EB2045028EA\">Generate Operator</span>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0012\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-957AA858-139C-4243-9C8B-21AB50A4E41D\"></a></span> To create a custom operator using the SDK Operator Wizard\n\
               </h2>  <span class=\"anchor_wrapper\"><a name=\"GUID-14AD50E5-712D-4A85-9757-6CFDF5781F74\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D73CE501-1862-4291-BEAC-C8B132068D7E\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-3F7FB501-3C7B-4FFB-A56A-B551579727D7\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-FB6E2B29-89F5-4733-AE5C-44793E113406\">Plug-ins</span> to open the Plug-in Manager.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1DB5FBA9-E3D4-4F99-AF5D-65EF56D6BE1B\"></a></span>In the Tools Development Environment layout, you can click the <span class=\"MenuCascade\" id=\"GUID-7FBD4C23-80E8-4D1A-AE89-B1ACFBE06919\">Plug-ins</span> tab to switch to the Plug-in Manager view.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC24D45E-71F6-419E-9972-AE6ACDFBF5E0\"></a></span>Do one of the following:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-613FD414-0F95-4AA3-B4B7-711982E36670\"></a></span>To create the operator in the User location, click <span class=\"MenuCascade\" id=\"GUID-B78BDA33-0C90-4367-8FD1-EC1406A3004F\">File</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-551FF1D3-DA70-4A70-B3C8-30027E2F37D7\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-CEB23442-7B24-43EE-8DE0-96B5F6538C06\">Operator</span>.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2051D601-BA66-4ABA-BB05-EC0B92AF5D9E\"></a></span>To create the operator in a different location (such as a workgroup or an Add-on directory),\n\
                              expand the location in the Plug-in Tree, right-click the <span class=\"MenuCascade\" id=\"GUID-35A9A964-EB1C-4B6C-9DAC-9F516F8577D6\">Plugins</span> folder and click <span class=\"MenuCascade\" id=\"GUID-A89F6434-8B36-4E94-836A-2860132AD703\">New</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-5BE20C2F-5449-4A86-966E-D21497F39A92\">Operator</span>.\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E92705D-90B6-45D9-A757-E995D273E825\"></a></span>The operator wizard appears.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-39A30DDC-2E08-4BEC-8462-E48CEF20C2A8\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-4206FD83-1F8B-476C-91DB-2B318634F793\">Operator Name</span> box, type a <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">name</a></span> for the operator.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2D123CD4-B8E3-4428-9F86-86EEE1283AA3\"></a></span>The first character in an operator name should be a letter. Subsequent characters\n\
                        can be letters, numbers, or underscore (_) characters.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8755FC5-AB12-4FEF-81C0-4F0E89BB0A82\"></a></span>The wizard automatically replaces spaces with underscores.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D429A2F0-A20A-4458-B386-3C82DDE767C5\"></a></span>By default, the plug-in name is based on the operator name. If you want to change\n\
                        the plug-in name, type a different name in the <span class=\"MenuCascade\" id=\"GUID-40457600-20BA-4E23-B36F-AF8A7C7259CB\">Plug-in Name</span> box.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5C696359-E03E-4A31-B425-F57FE8D88BB9\"></a></span>Note that if you change the operator name later, the wizard overwrites your plug-in\n\
                        name with a default generated name.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4341D9D6-5A0B-4EDA-8EDE-816447A3A396\"></a></span>In the <span class=\"MenuCascade\" id=\"GUID-37762F1B-DAC5-4E7D-AF05-805F260A33BE\">Language</span> list, click the language you want to generate.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FE322DD0-1248-4C0F-8840-7AFA5E279958\"></a></span>Click the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-001A\">Connections</a></span> tab, and then specify the output and input connection ports.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D86A009-2403-4E10-B8FC-DE5CF37693C1\"></a></span>The wizard makes it easy for you to set up your connections through the UI and then\n\
                        modify them to suit your needs after the code is generated. For example, if you wanted\n\
                        to create a weight map generator operator by blending two other weight maps:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-5ABED271-F217-4DFD-8A83-327B8A340CA6\"></a></span>Pick a weight map node as the output.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E213DE3-CB40-4782-8A8D-C7513D0F4ECB\"></a></span>Pick the two weight maps to be blended as input. You can also specify a variable <span class=\"MenuCascade\" id=\"GUID-7B3895DB-ED33-41E1-8F66-0CF5738A05DB\">Name</span> to use for your input ports in the Update function.\n\
                           </p> <img src=\"../images/GUID-C20B9AFD-B084-496E-97B4-DA16612C5E8F-low.png\" /> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C89A8387-7CB9-43EF-9284-B2758885B143\"></a></span>The wizard will generate code that looks something like the following snippet. Notice\n\
                              that these connections we set up on the <span class=\"MenuCascade\" id=\"GUID-06DF17E1-4075-448A-8EBA-394F395D7ACC\">Connection</span> tab actually appear in the callback for the command to apply the operator, and in\n\
                              the operator\'s <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> callback.\n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function ApplyMyWtMapOp_Execute(  )\n\
{\n\
\n\
	// ...\n\
	var newOp = XSIFactory.CreateObject(\"MyWtMapOp\");\n\
	<em class=\"strong\">newOp.AddOutputPort(\"torus.polymsh.cls.Point.Weight_Map\");\n\
	newOp.AddInputPort(\"torus.polymsh.cls.Point.Weight_Map1\");\n\
	newOp.AddInputPort(\"torus.polymsh.cls.Point.Weight_Map2\");</em>\n\
	newOp.Connect();\n\
	return newOp;\n\
}\n\
\n\
function MyWtMapOp_Update( ctxt )\n\
{\n\
	<em class=\"strong\">var inWM1 = ctxt.GetInputValue(0);\n\
	var inWM2 = ctxt.GetInputValue(1);</em>\n\
\n\
	// ...\n\
	output = ctxt.OutputTarget;\n\
	return true;\n\
}\n\
</pre></div> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-8CCCF403-C533-4540-A386-69066D806718\"></a></span>It is recommended to make the port connections generic so that your operator can be\n\
                              reused in other contexts. For example, you can try to establish a connection based\n\
                              on what objects are selected or launch a picking session:\n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function ApplyMyOp_Execute(  )\n\
{\n\
	// ...\n\
	var newOp = XSIFactory.CreateObject(\"MyOp\");\n\
\n\
	// Launch a picking session to get the connections\n\
	var btn, outWMap;\n\
	var collWMaps = new ActiveXObject(\"XSI.Collection\");\n\
	do {\n\
		var rtn = PickObject( \"Pick the weight map to write to\", \"Pick the weight maps to blend\" );\n\
		btn = rtn.Value(\"ButtonPressed\");\n\
		switch (btn) {\n\
			case 1 :\n\
				outWMap = rtn.Value(\"PickedElement\");\n\
				break;\n\
			case 2 :\n\
				collWMaps.Add( rtn.Value(\"PickedElement\") );\n\
				break;\n\
			default :\n\
		}\n\
	} while (btn)\n\
	\n\
	// Extract the input weight maps from the XSICollection\n\
	var inWMap1 = collWMaps(0);\n\
	var inWMap2 = collWMaps(1);\n\
	\n\
	// Test what we was picked &amp; if it\'s ok hook up the ports. \n\
	if ( \n\
			outWMap.IsClassOf(siClusterPropertyID) &amp;&amp; \n\
			inWMap1.IsClassOf(siClusterPropertyID) &amp;&amp; \n\
			inWMap2.IsClassOf(siClusterPropertyID) ) \n\
	{\n\
	} else {\n\
		Application.LogMessage( \"Could not connect all ports (one or more specified \"\n\
			+ \"objects were invalid connections for this operator). Please try again.\" );\n\
		return false;\n\
	}\n\
	\n\
	<em class=\"strong\">newOp.AddOutputPort(outWMap.Kinematics.Global);\n\
	newOp.AddInputPort(inWMap1.Kinematics.Global);\n\
	newOp.AddInputPort(inWMap2.Kinematics.Global);</em>\n\
	newOp.Connect();\n\
	return newOp;\n\
}\n\
</pre></div> \n\
                           <div><span class=\"anchor_wrapper\"><a name=\"GUID-21B81B85-5532-4BB8-B750-C2D44A060C22\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-86A3BEDD-6F64-4021-A71D-67AD318654AD\"></a></span>For an example of converting wizard-generated code into a truly dynamic operator,\n\
                                    see <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_StaticversusDynamicOperators.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0048\">Using the Wizard to Create Dynamic Operators</a></span>.\n\
                                 </p> \n\
                              </div>\n\
                           </div> \n\
                        </li>\n\
                     </ul> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-83A33A31-88D0-4368-BA7E-F595F4B76D22\"></a></span>Click the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-001E\">\n\
                              Code\n\
                              </a></span> tab. Here you can control which callbacks the wizard will generate, such as callbacks\n\
                        to define the command for applying the operator, and callbacks to allow you to store\n\
                        and clean per-instance user data.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0E909BA1-3B6A-41BB-A2C0-EA19D99A0391\"></a></span>If you want to add parameters or buttons to the operator\'s property page, you can\n\
                        define each parameter using the options in the <span class=\"MenuCascade\" id=\"GUID-0B039A65-6626-4C3B-9C19-BCE13A200FF2\">Define Item</span> group on the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0023\">Add Parameter</a></span> tab and then click <span class=\"MenuCascade\" id=\"GUID-5212A0B3-0D27-460B-8CA9-8A18703F653D\">AddItem</span> at the bottom of the page to add the parameter as defined by these options to the\n\
                        operator\'s property page.\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-2DBFC60C-3423-49B2-A567-2AA6B7228F43\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5EF6E64-2DD0-4E15-8FDB-90EA8524DD01\"></a></span>To remove a parameter, click on the row\'s handle (the dark leftmost column) and then\n\
                              click <span class=\"MenuCascade\" id=\"GUID-BF8DC02A-A095-46AF-B8DE-4AF9CEA248C9\">Delete Selected</span>.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DCF80AF3-A04A-4F88-9BE7-C8D06634E2B8\"></a></span>Once you have defined your parameters, click the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0031\">\n\
                              Layout (Optional)\n\
                              </a></span> tab to provide some layout on the property page. Here are some of the customization\n\
                        features available through the wizard:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-E95F2640-27F4-419F-83D5-3B209809AA3A\"></a></span>Prevent parameters from appearing on the property page.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2CA9A046-489D-4038-80B7-D4229480B3EB\"></a></span>Assign a parameter to a tab on a property page.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2BBF34C4-6325-4E55-99DE-EB8D4F0A75DB\"></a></span>Assign a parameter to a group on a property page.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-31B3A8AD-FC7B-4201-89C3-0E3E701EC54A\"></a></span>Assign a parameter to a row on a property page.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFCB0712-E17E-4464-A57C-FAEC7D85FF13\"></a></span>Tweak the parameters\'s order of appearance on the property page.\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-D4B80B02-B061-4834-9477-E3F64D736E2E\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-6263EFB2-6483-4A11-8F2B-F59164C1191B\"></a></span>The wizard can get you started with customizing the layout for your operator\'s property\n\
                              page, but there are other possibilities available by modifying the <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a>, such as:\n\
                           </p> \n\
                           <ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-E74447EC-508B-4F57-BEDF-123406D69DFA\"></a></span>providing drop down lists\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-665FB265-49AF-4C15-8020-6E8EDAA4AA5A\"></a></span>hiding animation divots\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-7BAE0559-4F6B-4791-B9D9-B6041166CF9B\"></a></span>changing the sizes of your controls\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A06E573-AF9F-4871-BCD2-ABFBD419275B\"></a></span>providing special widgets (for example, a file browser)\n\
                                 </p> \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-58845660-BC0D-4647-8168-D7A4CD97B22A\"></a></span>logic and event routines, etc.\n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C97A763-0E7F-427C-A0ED-70B3684B0482\"></a></span>For more information on the kinds of controls you can add and customize, see <a href=\"#!/url=./files/cus_ppg_WhatareMyOptions.htm\">Interacting with the User</a>.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-338F4DD5-ED99-4D73-A6EB-7407264CFA6C\"></a></span>When you are finished setting up all connections, code, parameters, etc., click <span class=\"MenuCascade\" id=\"GUID-0B3BE3BE-17D5-447F-A267-4C766F14554C\">Generate Operator</span> to generate the custom operator.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC251629-E598-4541-A4B7-1BEE4AD6334E\"></a></span>The generated plug-in is automatically loaded and executed, and the code is loaded\n\
                        into the script editor.\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-1ADAFDDA-93E7-4B24-87C6-44C90F7B8B48\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-44F20277-5011-4F84-ABA6-4C3FAE5BF2C1\"></a></span>Don\'t forget that any changes you make manually to the code will be overwritten if\n\
                              you ask the wizard to regenerate the code, so it is a good idea to make sure you are\n\
                              completely ready to begin coding before clicking <span class=\"MenuCascade\" id=\"GUID-14A94FC0-9D4D-4956-B85A-87F2412F884C\">Generate Operator</span>.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0014\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C285D1CF-975F-4D5C-B8D1-A1F0A0F40ADE\"></a></span>Notes\n\
               </h2> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-031DA1F4-1B40-42FB-BE2A-1EDB5C14810C\"></a></span>You can turn on operator debugging in an existing plug-in. Open the plug-in in a text\n\
                        editor or script editor, right-click in the editing pane, point to <span class=\"MenuCascade\" id=\"GUID-C51A3447-C9DB-4174-A256-280DE87CF665\">Tools</span>, and then click <span class=\"MenuCascade\" id=\"GUID-34E04AC6-EB0C-4FB5-965F-D6CF29A3E593\">Enable Operator Debugging</span>. Extra operator information will now be logged to history.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-99F5D67A-6CB1-45F6-9B19-FA8EA2A10D5D\"></a></span>You can save wizard presets for types of operators that you frequently want to generate.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9CDE1C80-9203-4A64-A5CF-208A7734D391\"></a></span>The wizard creates a model named <span class=\"MenuCascade\" id=\"GUID-EF79F9FE-5391-48CB-A3C2-9DD16901CE3E\">SDK_Wizards</span>, and under that model puts a custom property for each operator you create. You can\n\
                        open the wizard for an operator by double-clicking the corresponding custom property.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0015\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AC902600-2F99-48CE-ACB0-A648FEEB672D\"></a></span>Plug-in Info\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9D1FA3E2-0E09-47E7-83AF-E79CE0D7201F\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-2AC383F6-3665-4216-AF35-4D80CC28D196\">Plug-in Info</span> tab allows you to enter the information required to generate the XSILoadPlugin function,\n\
                  which registers the plug-in items such as operators and commands with Softimage.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0016\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-0F1C1EC6-4CB4-4879-9658-B37F831942E5\"></a></span>Operator Name\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EBD3542E-88B3-4B32-B6AF-3E7490410389\"></a></span>Specifies the <span class=\"char_link\"><a href=\"#!/url=./files/cus_self_NamingPluginItems.htm\">name</a></span> of the operator. The first character should be a letter. Subsequent characters can\n\
                     be letters, numbers, or underscore (_) characters.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DCBF5BE0-9CC2-487A-BD2E-75AB17BFD64F\"></a></span>The operator name is also used to name the generated callback functions. If you change\n\
                     the operator name after the code is initially generated, you\'ll have to edit the call\n\
                     to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a> or PluginRegistrar::RegisterOperator in the generated <a href=\"#!/url=./si_cmds/cb_XSILoadPlugin.html\">XSILoadPlugin</a> function. Note that changing the operator name (the first argument to <a href=\"#!/url=./si_om/PluginRegistrar.RegisterOperator.html\">PluginRegistrar.RegisterOperator</a> or PluginRegistrar::RegisterOperator) means you have to change the names of the operator\n\
                     callback functions (such as <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> and <a href=\"#!/url=./si_cmds/cb_Operator_Init.html\">Init</a>).\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0017\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-EDDC628D-996F-4799-B482-E1FF686AC4EA\"></a></span>Author\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-85E2ADEE-A2E0-4BEA-BFD5-F32E3A22ACBD\"></a></span>Identifies the author of the custom operator (for example, type your name or the name\n\
                     of your organization). The Plug-in Manager displays this information for each plug-in.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0018\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-778D4ABB-10F1-407A-A340-EA3564DB629B\"></a></span>Language\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB8C313B-CAD2-4840-BDC8-C89BD9B0ECFA\"></a></span>Specifies the type of code (C++, C#, JScript, VBScript, Python) you want to generate.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0019\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C3EFDF09-964A-4D98-BD80-7CA3F4DDC4D9\"></a></span>Output Directory\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-63BEA700-3832-4F0B-A6A1-53B6B8DAB46A\"></a></span>Specifies the location of the generated files.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-001A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-062362B4-0C9A-4CD3-BA14-6C21FFD0110D\"></a></span>Connections\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9D1C6BD3-D135-4A86-88AA-9803DBB94F70\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-4873F606-EAFD-4A05-A1C5-51BF2D5D7E10\">Connections</span> tab allows you to define the input and output connection ports for the operator.\n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-101DA281-8692-4B01-B677-90855173E63A\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D39F267A-BC29-43BF-9460-DFE6A456CF6D\"></a></span>You cannot specify a connection at the object level; you need to connect to specific\n\
                        data, such as:\n\
                     </p> \n\
                     <ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-4061938F-6A7F-4AD4-866E-A7EB7202924E\"></a></span>a primitive node\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-4A5484E3-ABB7-4A6B-B9D1-0284597AC53E\"></a></span>a parameter node\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2E897BC-E982-47FB-A3ED-8A6BC82B63DF\"></a></span>a property node\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-8BEEC126-BE32-407E-86BA-19E760304B14\"></a></span>a cluster node\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-ACEA9AF5-F3C3-4623-B107-192B07127967\"></a></span>global kinematics\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-071CD099-A9C7-464A-9B00-0FD89607D620\"></a></span>local kinematics\n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-001B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F3F60C5A-B4BF-41B1-99E7-B58038A8521B\"></a></span>Output\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-569AAC61-031A-43B4-9A21-9ECE4EAAE100\"></a></span>You can either type the name in the text box or pick it from the UI by clicking <span class=\"MenuCascade\" id=\"GUID-838428D8-31DB-4F44-9F7F-2E916F8EFDAB\">Pick</span> beside it. If you are writing a deformer operator, you must use the same connection\n\
                     node for the input and output. The wizard automatically creates an input entry based\n\
                     on the output definition if you select the <span class=\"MenuCascade\" id=\"GUID-F9E1E1F8-C5F3-481D-A89A-942FB15EFFFD\">Input/Output connection</span> option.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-095FACBE-08CA-4E71-82DF-34C8631C5909\"></a></span>There are some restrictions on what you can define as an input: you need to specify\n\
                     specific data, such as a primitive, a parameter, a property, clusters, or either global\n\
                     or local kinematics. Because of this restriction, if you use the <span class=\"MenuCascade\" id=\"GUID-67A7620A-8EC1-4FD1-BAD9-97F59FD308BE\">Input/Output connection</span> option, the output must the same node. If the operator will not be a deformer, you\n\
                     can specify any one of those specific data types.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-001C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C9FD8ACC-573C-45BF-80B2-842FC67918E8\"></a></span>Inputs\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7DA644A-AEA7-4D30-820C-DBB55600571A\"></a></span>There are three ways to specify input connections:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-7C1E46E4-5B05-4337-BC06-3A768453F1F2\"></a></span>Pick the node from the UI by clicking <span class=\"MenuCascade\" id=\"GUID-72BFB4C5-5739-4580-BDC2-65D4814CE2D5\">Pick</span>.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-385B4D8D-D52E-48F9-86FC-2AC6961C2155\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-C51712F6-52DE-4DA6-8627-9C00659D9D83\">Selection</span> to use the currently selected node.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-7C599A13-1B65-44D3-A45F-0696CC76BDDB\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-1FD5AD2A-FB29-4A3A-94A5-017301F52818\">Manual</span> to open a text box where you can type the full name of the connection target.\n\
                        </p> <img src=\"../images/GUID-904FA61F-086C-4A33-82C2-D6D645840CF2-low.png\" /> \n\
                     </li>\n\
                  </ul> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-57C87579-F527-45A8-B141-297E09B58E30\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C154AFB6-104E-4CD4-993B-DABA060596E2\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-D3FDE8E7-A3AB-4E5D-879B-B1A218E0DEF8\">Inputs</span> grid provides the full path of the node to connect to as well as a place to specify\n\
                           a custom <span class=\"MenuCascade\" id=\"GUID-030E816C-46B4-4B63-B4D3-E3E47FEDCBAB\">Name</span> for the connection. The Name you specify here will be used in the generated <a href=\"#!/url=./si_cmds/cb_Operator_Update.html\">Update</a> function as a meaningful variable name, like <span class=\"code\" translate=\"no\">inPrim, inClusterProp, inParentPos</span>, etc. If you leave the name blank, the variable names will be something like <span class=\"code\" translate=\"no\">Input0, Input1</span>, etc.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-001E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-4E0371C5-2E34-4293-B90D-3B9BBCEBAEA5\"></a></span>Code\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2243E252-DC06-4FB5-B5AD-A68C6BF893B6\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-D952C720-7EBC-4C0C-9DB8-A36E12727E52\">Code</span> tab allows you to specify what code the wizard will generate in some very specific\n\
                  cases.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-001F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-3BFFED1F-2217-455F-BCD7-CBCE162612B0\"></a></span>Always Evaluate\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A3F3624-4B44-4616-8B6E-9B10EBBD39B2\"></a></span>Specifies whether to set the <a href=\"#!/url=./si_om/CustomOperator.AlwaysEvaluate.html\">CustomOperator.AlwaysEvaluate</a> or CustomOperator::PutAlwaysEvaluate property to true or false in the <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0020\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BC6ED665-2FB1-4582-A9E8-23FB6DA2ADA5\"></a></span>Generate Command to Apply the Operator\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF4D312F-07A8-4FF7-ABA5-72C4FC4C01EF\"></a></span>Specifies whether to automatically create a command to instantiate the operator and\n\
                     hook it up to its connections. If this option is selected, the wizard will generate\n\
                     <a href=\"#!/url=./si_cmds/cb_Command_Init.html\">Init</a> and <a href=\"#!/url=./si_cmds/cb_Command_Execute.html\">Execute</a> callback functions based on the information specified on the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-001E\">\n\
                           Code\n\
                           </a></span> tab.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0021\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E62845DB-9B38-47E6-98CB-E2B02D060B32\"></a></span>Generate Init Callback\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-02ED551D-22F1-488F-9478-EB4045BB04C3\"></a></span>Specifies whether to generate the <a href=\"#!/url=./si_cmds/cb_Operator_Init.html\">Init</a> callback. The code inside this callback initially just logs information messages,\n\
                     but you typically use it to store instance data.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0022\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-5D5ADEF0-F0E8-4A30-85AE-222AF923DADF\"></a></span>Generate Term Callback\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4AB9A89D-588D-4F61-B2BB-52875D5023E1\"></a></span>Specifies whether to generate the <a href=\"#!/url=./si_cmds/cb_Plugin_Term.html\">Term</a> callback. The code inside this callback initially just logs information messages,\n\
                     but you typically use it for clean up.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0023\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-314271DA-0562-4F94-A403-BCA957E63CA4\"></a></span>Add Parameter\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-AC8E1275-AA4E-4870-A1B5-F3BA5C73D124\"></a></span>This section allows you to define the custom parameters for the operator. These settings\n\
                  tell the wizard how and what code to generate. From there you can customize it further\n\
                  and add extra functionality as desired. These settings basically correspond to the\n\
                  way the generated code calls the <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0024\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-4C7D1BF5-65B5-4D8D-B643-518FB1F6B9A0\"></a></span>ParamType\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-06A0848D-401A-4787-931D-A7B1677C0008\"></a></span>Specifies the data type for the parameter (the <em class=\"strong\">Type</em> argument of the <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method). Most of these types correspond to actual data\n\
                     types (integer, string, boolean, etc.); however, the <span class=\"MenuCascade\" id=\"GUID-000DE73A-EC17-4218-A6CC-72BB05A667F6\">Button</span> option simply adds a button (it is not a type of parameter).\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CBCCE40-78AE-4C6D-8CA8-E8D7D9B8C16E\"></a></span>Depending on the value you choose, some of the following settings may not be available.\n\
                     For example, only parameters with a numerical data type will have the ability to set\n\
                     value ranges (<em class=\"strong\">Min, Max</em>, etc.). For buttons, only the Name/Label and Callback settings are available.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0025\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-B87F87E0-0987-48CC-A0B2-8921A9F35A3F\"></a></span>Name/Label\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1CCC0805-C29B-4E94-8FB1-62FF57245EBC\"></a></span>Specifies the name for the parameter (the <em class=\"strong\">ScriptName</em> argument of the <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method). By default it is also the label that will appear\n\
                     in the property page, but you can change the code manually if you want to use something\n\
                     different (specify the user-friendly string in the <em class=\"strong\">Name</em> argument of the CreateParamDef).\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0026\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-DE0466CC-E1EE-4890-80B4-AFC58BB7353B\"></a></span>ReadOnly\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D334B6B5-A4AA-4EBA-B75C-428D3F297F3F\"></a></span>Specifies whether users can write to the parameter. This corresponds to the siReadOnly\n\
                     value of the <em class=\"strong\">Capabilities</em> argument (<a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method).\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0027\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-25D6F0E7-CDB4-475F-A2C7-E4FC1AFB731E\"></a></span>Animatable\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A6A26DBF-2676-43A5-9F33-B9393BF68A61\"></a></span>Specifies whether the parameter can be animated. This corresponds to the siAnimatable\n\
                     value of the <a href=\"#!/url=./si_om/siCapabilities.html\">siCapabilities</a> (the <em class=\"strong\">Capabilities</em> argument <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method).\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0028\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2DEC06EB-A4CA-4D01-83E0-F3707885BF7E\"></a></span>Callback\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CFDAF266-E616-41EE-87B1-C4905770E503\"></a></span>Specifies whether the wizard should generate an event callback function for the parameter\n\
                     or button. The callback type varies depending on the type of parameter (or whether\n\
                     it\'s a button). For example, for all parameters in an operator implemented with the\n\
                     C# or C++ language, the wizard will generate the <a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a> callback; for operators implemented in a scripting language, the wizard will generate\n\
                     an <a href=\"#!/url=./si_cmds/cb_Property_OnChanged.html\">OnChanged</a> callback for parameters and an <a href=\"#!/url=./si_cmds/cb_Property_OnClicked.html\">OnClicked</a> callback for a button.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0029\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-071A672F-CA87-4B64-A71F-45F20D886D43\"></a></span>Default\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4FE99A3B-4821-4D59-B65F-4AEF628AB72C\"></a></span>Specifies the default value to use for the parameter (the <em class=\"strong\">DefaultValue</em> argument of the <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method). This setting appears as a text box for the Text\n\
                     (string) type, a checkbox for the Boolean type, a slider for numeric types, and a\n\
                     color box for the Color type. It is not available for FCurves, Grid Controls and buttons.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-002A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-51575F2C-4684-4D4B-A565-C3AB1579176A\"></a></span>Min\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B90E5184-E875-449B-9514-94D020A0D746\"></a></span>Specifies the lower limit of the range of valid values for the parameter (the <em class=\"strong\">Min</em> argument of the <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method). This setting is only available to parameters\n\
                     of numeric type.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-002B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E52094EF-144E-4280-BA82-16D5DEEDE406\"></a></span>Max\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9282D789-5BA2-4F3F-ADA5-5E610780905C\"></a></span>Specifies the upper limit of the range of valid values for the parameter (the <em class=\"strong\">Max</em> argument of the <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method). This setting is only available to parameters\n\
                     of numeric type.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-002C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2C4ED110-F47A-4B7F-A5EE-11DBD17CB9E9\"></a></span>UIRange\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8860ACA6-E4AC-47B5-B5C3-EAD5202A0E3E\"></a></span>Toggles availability of the UIMin and UIMax control settings which allow you to define\n\
                     the visible range of values for a numeric slider. This option is only available to\n\
                     parameters of numeric type.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-002D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-2AA7FB02-EBE9-4920-9C01-F7DFFE7617D3\"></a></span>UIMin\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CB128FF-2B55-4E43-B86D-7E7A082E05DA\"></a></span>Specifies the lower limit of the range of values to represent on the parameter\'s slider\n\
                     bar when the property page is displayed (the <em class=\"strong\">SuggestedMin</em> argument of the <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method). This setting is only available to parameters\n\
                     of numeric type.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-002E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-4684183E-200D-4CCB-AE98-23335F9C7DAB\"></a></span>UIMax\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-579EF463-91CC-471C-B37A-68A0EBF235F1\"></a></span>Specifies the upper limit of the range of values to represent on the parameter\'s slider\n\
                     bar when the property page is displayed (the <em class=\"strong\">SuggestedMax</em> argument of the <a href=\"#!/url=./si_om/XSIFactory.CreateParamDef.html\">XSIFactory.CreateParamDef</a> or Factory::CreateParamDef method). This setting is only available to parameters\n\
                     of numeric type.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-002F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-EC4E7CE5-27E1-4C72-9CFB-EB9300CE5795\"></a></span>Add Item\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D918FB85-10FB-4A1C-BD46-FF52F9EF9E1F\"></a></span>Allows you to add a parameter to the <span class=\"MenuCascade\" id=\"GUID-42B57CD2-C27A-4C15-B0DB-516D95A947F1\">Parameters</span> table based on the settings in the <span class=\"MenuCascade\" id=\"GUID-1F61249F-070B-4A61-9C70-328D09F2E9D5\">Define Item</span> area.\n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0030\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1080AD9E-0F2D-494A-94BC-64879FCA7729\"></a></span>Delete Selected\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-67AA0DED-B36E-4D82-A7B0-0EEF8BC4F0C0\"></a></span>Allows you to remove a parameter from the <span class=\"MenuCascade\" id=\"GUID-BF5DAE66-E91E-48C8-A7DF-326830E776F7\">Parameters</span> table. First select the row containing the parameter to remove by clicking on the\n\
                     row\'s handle (the dark leftmost column) and then click <span class=\"MenuCascade\" id=\"GUID-67E389DE-0983-4B7B-B103-D4C663399B8D\">Delete Selected</span>.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0031\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F9A3BA86-4BD1-4B95-B43C-2E52E3D30454\"></a></span>Layout (Optional)\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B503BC6-F7CF-42AA-BBE9-05A11C42FB1E\"></a></span>This section allows you to arrange how the parameters appear on the operator\'s property\n\
                  page. Much of the functionality of the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1PPGLayout.html\">PPGLayout</a> object is provided here.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D047F25A-B871-497C-9771-7E16FBC233FE\"></a></span>A typical workflow includes:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9E823D8-FA0F-4FD8-8B9F-48BED4B8029C\"></a></span>adding parameters to be displayed from the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0036\">\n\
                              Parameters\n\
                              </a></span> box\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5340E3D2-4CEF-4014-B785-1AF8C4D758CE\"></a></span>tweaking the order of appearance using the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0032\">\n\
                              Layout\n\
                              </a></span> button controls\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D176569A-A20B-4EC4-96D3-D6B21B58C88B\"></a></span>adding special layout control brackets from <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0038\">\n\
                              Groupings\n\
                              </a></span> (such as tabs, groups and rows)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B0F689DD-77FA-4942-BAC1-AB83A5D96E76\"></a></span>assigning parameters by moving them in and out of these control brackets\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0032\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-747AAB9C-4C1F-4921-97CD-A2EAA24F2AD2\"></a></span>Layout\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4C4DCA0C-6044-4162-A2BF-D1ED5563A71F\"></a></span>This box represents the set of parameters that will appear on the operator\'s property\n\
                     page. The order in which parameters are arranged in this list (and eventually on the\n\
                     property page) can be controlled using the <span class=\"MenuCascade\" id=\"GUID-CC0BD290-0E43-41A1-B48A-3C1E03499EF8\">Up</span> and <span class=\"MenuCascade\" id=\"GUID-538CD188-1932-4CBC-9B05-27EB76793063\">Down</span> button controls underneath the list box.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9DB581A4-9ECF-4E86-A088-0A7D930DCCCA\"></a></span>The Layout box represents <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0038\">\n\
                           Groupings\n\
                           </a></span> as blocks delimited by labeled brackets inside which parameters can appear. The parameters\n\
                     that appear inside these blocks are considered to be assigned to that control. For\n\
                     example, given the following Layout listing, you can see that <span class=\"code\" translate=\"no\">Param1</span> and <span class=\"code\" translate=\"no\">Param2</span> will appear inside the <span class=\"code\" translate=\"no\">Wavy</span> group and <span class=\"code\" translate=\"no\">Param3</span> will appear inside the <span class=\"code\" translate=\"no\">Thick</span> group:\n\
                  </p> <img src=\"../images/GUID-03F72B2F-AAF6-4C4A-A8D4-D549F1349EFC-low.png\" /> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAC48141-F110-41A6-8C2A-8EDA253A17F6\"></a></span>The <span class=\"MenuCascade\" id=\"GUID-8AB03D4C-E6AC-41E8-99A1-46AA754381CF\">Remove</span> button allows you to remove either Groupings controls or parameters from the list.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0034\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-4B6DC125-85EF-4349-B596-FC4254E7569F\"></a></span>To remove a parameter from the Layout list\n\
                     </h4> <span class=\"anchor_wrapper\"><a name=\"GUID-85CF32D0-37BA-44D4-8740-1D45AEB56C47\"></a></span><ol type=\"1\" start=\"1\">\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C700BC02-EE9E-455B-A8AF-B1C4A4356054\"></a></span>Click the parameter you want to remove in the Layout list.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-3EE768C4-FB8A-4B32-8216-E4F40C28C667\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-C1B2C22C-23D7-43C3-A6A7-3201B9180FD4\">Remove</span>. The parameter disappears from the Layout list (but remains in the Parameters list).\n\
                           </p> \n\
                        </li>\n\
                     </ol> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0035\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-CCECD9E9-CC8A-4002-8F78-F52AADC0E731\"></a></span>To remove a grouping control from the Layout list\n\
                     </h4> <span class=\"anchor_wrapper\"><a name=\"GUID-A3E622BC-D941-4B00-872F-9E90246EB9DD\"></a></span><ol type=\"1\" start=\"1\">\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-0ED09DFC-E92C-49B2-8106-68E161AA65D4\"></a></span>Click either bracket of the control you want to remove.\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-B3D6DFB5-CDAB-4355-A654-3500091CB143\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-6CF51CCF-8AB0-434F-84FF-F11995799A4E\">Remove</span>. The grouping control brackets disappear from the Layout list leaving the parameters\n\
                              intact. The parameters are now nested under the next highest control.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7AF9064-AF84-430F-BE60-3687DC9B1157\"></a></span>For example, if the parameters were nested inside a Row on a Tab and you remove the\n\
                              row, the parameters now appear directly inside the Tab.\n\
                           </p> \n\
                        </li>\n\
                     </ol> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0036\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-4C7FC0AB-165F-4A6C-9943-E47786B29543\"></a></span>Parameters\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BECA5B52-CA2D-4C08-8F2E-FFD764D087CA\"></a></span>The Parameters list displays all parameters defined for the operator. By default,\n\
                     all will appear on the property page until you specifically declare you want a parameter\n\
                     to appear in the layout by making it appear in the <span class=\"char_link\"><a href=\"#!/url=./files/cus_ops_wizard.htm#WS3FA09F770E40D640AFBEE3CB2D491049-0032\">\n\
                           Layout\n\
                           </a></span> box. However, if just one parameter appears in the Layout box, only the parameters\n\
                     in the Layout box will be visible on the property page.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0037\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-2AA8B90D-18D6-46A3-9321-CACFCEFEE193\"></a></span>To add a parameter to the Layout list\n\
                     </h4> <span class=\"anchor_wrapper\"><a name=\"GUID-2A064230-9976-4A5D-9B8C-320D7DDE7605\"></a></span><ol type=\"1\" start=\"1\">\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2CFCC409-98FC-4637-979B-E72740A4C48A\"></a></span>Click its name in the Parameters list\n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-72199EF5-C9FB-444F-BAFA-C930DFF2FCF7\"></a></span>Click <span class=\"MenuCascade\" id=\"GUID-9D02742F-321E-4C36-B0EB-77299E43E936\">Add</span> underneath the Parameters list.\n\
                           </p> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A167A92-5D69-4D8E-9E32-660E54B73DEA\"></a></span>Notice that adding parameters to the Layout list does not remove them from the Parameters\n\
                              list.\n\
                           </p> \n\
                        </li>\n\
                     </ol> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C39A7E3-0AC4-4BE8-A2D5-358E8D69FF42\"></a></span>The wizard will generate a <a href=\"#!/url=./si_om/PPGLayout.AddItem.html\">PPGLayout.AddItem</a> or PPGLayout::AddItem call in the <a href=\"#!/url=./si_cmds/cb_Property_DefineLayout.html\">DefineLayout</a> callback for each parameter appearing in the Layout list.\n\
                     </p> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS3FA09F770E40D640AFBEE3CB2D491049-0038\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E2BE4D42-20FC-4B9F-B192-8D0334319C87\"></a></span>Groupings\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-26BBEF91-E0CF-4C09-B524-4D1C8BC5AE13\"></a></span>The Groupings section provides a mechanism for adding special controls like tabs,\n\
                     groups and rows to the property page. Each tab or group must be identified by a label\n\
                     which you can specify in the <span class=\"MenuCascade\" id=\"GUID-40AA2362-79F9-48B9-87B3-4E2ABAF40D44\">Name</span> text box. Then you click the button corresponding to type of control (<span class=\"MenuCascade\" id=\"GUID-0C86997D-862D-45B1-84D2-076D0F156628\">AddTab, AddGroup, AddRow</span>) and the control\'s bracket appears in the Layout box:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Tab \"Wavy\" {\n\
	Param1\n\
	Param2\n\
}\n\
Tab \"Thick\" {\n\
	Param3\n\
}</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";