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
      <meta name=\"topicid\" content=\"GUID-99C06986-E006-4911-9298-2D09D0D491D1\" />\n\
      <meta name=\"indexterm\" content=\"templated user data: accessing\" />\n\
      <meta name=\"indexterm\" content=\"user data: accessing templated data\" />\n\
      <meta name=\"indexterm\" content=\"custom data: accessing: templated data\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing Templated User Data on Components</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"points\", \"si_cpp/group__RenderMapDefine.html#ga7b51c5e95877ebaeb51314f8731f55f6\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-99C06986-E006-4911-9298-2D09D0D491D1\"></a></span><div class=\"head\">\n\
            <h1>Accessing Templated User Data on Components</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DB999D6-F7C5-41D2-950A-A2C04B4D2337\"></a></span>Templated user data also uses the binary user data map, but offers more built-in functionality\n\
               and interactive tools. The plug-in developer creates a user data template, which is\n\
               similar to an empty parameter set, and specifies what kinds of data can be attached\n\
               to the map.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-7E41E1BD-0386-4398-B3E8-EFA0EC1C54AA\"></a></span>The developer then associates this template with a user data map (also through scripting).\n\
               The template allows a user to easily view, set, and edit the user data in the map\n\
               through the user interface.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-F5D0EFDD-3E70-4C23-BB71-3913D48B871E\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CB992027-EC34-4D7B-A774-A6CFFE1628EA\"></a></span>Once the template has been built and associated to a particular user data map, and\n\
                     users have begun to associate values, you should not add or remove parameters.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2FD96F4-CE3E-4F76-BCE2-F95A0018E5D1\"></a></span>For this reason, you should consider user data templates to be <em class=\"strong\">Read-Only</em>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-000E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-BCE13206-A2E7-4066-8494-CAC4A3365118\"></a></span>VBScript Example: Creating a user data template\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"GUID-2170D65C-4128-4A7E-9D9B-19E66FB88ACA\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8538C30D-807C-4B3B-BB93-A221C2C0DFEB\"></a></span>The first part of this procedure consists of creating the template, which is the same\n\
                        as creating a custom parameter set:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Create a grid \n\
Set oRoot = ActiveSceneRoot\n\
Set oGrid = oRoot.AddGeometry( \"Grid\", \"MeshSurface\" )\n\
\n\
\' Create a custom parameter <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a>\n\
aCls = Array( 27,28,35,36 )\n\
Set oCluster = oGrid.ActivePrimitive.Geometry.AddCluster( siPolygonCluster,, _\n\
						aCls )\n\
Set oParamSet = oCluster.AddProperty( \"Custom_parameter_list\")\n\
\n\
oParamSet.AddParameter \"Juiciness_Factor\", siFloat,,,,,, 25, 0, 50\n\
oParamSet.AddParameter \"Special_Instructions\", siString\n\
oParamSet.AddParameter \"Toggle_Effect\", siBool,,,,,, True\n\
</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-FC3E92E2-3768-4225-B684-C20A71C7A5BE\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2AF8FEF2-2CC6-4B25-9F8D-EA9780B15850\"></a></span>You can create the template either through scripting or through the user interface.\n\
                              For instructions on creating custom parameter sets through the user interface, see\n\
                              the <em class=\"mild\">Animation</em> guide.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-607C33F2-61A0-47E7-8E68-83821AA6B146\"></a></span>The result of this script is a template that looks like this:\n\
                     </p> <img src=\"../images/GUID-C5478F2F-DB0F-4BE4-B68D-01F591151DA6-low.png\" /> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-86668960-57E5-4D5C-8B0E-B2FB16B63041\"></a></span>The next step is to create a user data map through scripting and associate the new\n\
                        template to it.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Attach a user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> map to a cluster on the grid\n\
Set oUDMap = oCluster.AddProperty( \"UserDataMap\" )\n\
\n\
\' Associate the template to the new user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> map\n\
Set oUDMap.Template = oParamSet\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-79999D27-D92A-4F0A-AC48-CD46CD5C24A2\"></a></span>Once this association is made, you can provide user interaction through a parameter\n\
                        dialog box.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Change some values on selected clusters\n\
Set oSubComp = oGrid.ActivePrimitive.Geometry.CreateSubComponent( _\n\
		siPolygonCluster, aCls )\n\
SIInspectUserData oUDMap, oSubComp\n\
</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6C62CAF5-2DCE-4598-B4C5-C07C95F5AFEA\"></a></span>The following message is logged to the History Log of the Script Editor:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'SIInspectUserData \"grid1.polymsh.cls.Polygon.User_Data_Map\", \"grid1.poly[27,28,35,36]\"\n\
</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-A3D52B7D-FDC8-4DB3-8CD7-8203420C7D6F\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-16CB18C8-0932-442B-8D27-A42846C7DFC4\"></a></span><a href=\"#!/url=./si_cmds/SIInspectUserData.html\">SIInspectUserData</a> is a scripting command, so if you are planning to use it in a compiled plug-in, you\n\
                              will need to use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteScriptCommand.html\">XSIApplication.ExecuteScriptCommand</a> method. At this time, there is no equivalent functionality in the object model.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1FC0E704-E629-417C-8052-3DC73A7CED16\"></a></span>You can see any changes made to these values have been updated by running the <em class=\"strong\">OMView</em> tool (see <span class=\"MenuCascade\" id=\"GUID-4DAB18F2-F690-436F-9B37-26C1AABA4BA0\">Netview</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-0712D9B3-FB80-41E0-8731-F9FD197B1FD5\">Tools</span><img src=\"../images/ac.menuaro.gif\" /><span class=\"MenuCascade\" id=\"GUID-F067993E-A10B-41E7-ACA1-34FB3838FB17\">Info OM</span>) while the user data map is selected.\n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-535661F7-4520-487F-B475-4732900DE9DB\"></a></span>Alternatively, you can access information about the values stored on the user data\n\
                        map by using the <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue</a> property. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_AccessingTemplatedUserDataonComponents.htm#WS324D95A558291241ACE764CD4620449D-0010\">VBScript Example: Getting user data on specific elements</a></span>.\n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EE29F529-3100-4234-B9CC-C8BFA2B8B57D\"></a></span>VBScript Example: Getting user data on specific elements\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"GUID-0EA7468D-F549-46FD-8B26-52DEDA2B56D1\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-02D14C38-C385-4A25-9168-8BF2616FECC9\"></a></span>Follow the steps under <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_AccessingTemplatedUserDataonComponents.htm#WS324D95A558291241ACE764CD4620449D-000E\">VBScript Example: Creating a user data template</a></span> to create and modify templated user data.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Call printInfo( oUDMap )\n\
\n\
function printInfo( in_oUDMap )\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EFFDB441-9399-494F-BB41-470F68E09D82\"></a></span>Use the <a href=\"#!/url=./si_om/UserDataMap.Template.html\">UserDataMap.Template</a> property to get the template.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oTemplate = in_oUDMap.Template\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AA1FC446-583E-4A61-8719-8DF607CD13FC\"></a></span>Use the <a href=\"#!/url=./si_om/UserDataMap.Item.html\">UserDataMap.Item</a> property to get the user data on each individual cluster element as a <a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a> object.\n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-F1C59A9F-777B-498A-BC60-22D9C11E326C\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-593C157A-5525-4876-8ECD-FC0F7D3AE7E8\"></a></span>You should test each item to see whether it contains data, since the whole user data\n\
                              map may be associated to a cluster with a lot of unused elements.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	For iCounter = 0 to in_oUDMap.Count - 1\n\
		LogMessage \"=========================================================\"\n\
		LogMessage \"Information for Point #\" &amp; (iCounter + 1)\n\
		LogMessage \"---------------------------------------------------------\"\n\
		If (Not oUDMap.IsEmpty(iCounter)) Then\n\
			Set oUDItem = in_oUDMap.Item(iCounter)\n\
			oTemplate.BinaryData = oUDItem.Value\n\
</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-96DEDBC6-F0F4-45C1-8510-2674D525A79D\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-0CC081D6-AD89-40E8-8C9C-67E8855ABC4B\"></a></span>Using the <a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a> object is the equivalent to using the <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue</a> property. For an example using the <span class=\"code\" translate=\"no\">UserDataMap.ItemValue</span> property, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_AccessingTemplatedUserDataonComponents.htm#WS324D95A558291241ACE764CD4620449D-0011\">VBScript Example: Setting user data on specific elements with UserDataMap.ItemValue</a></span>.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1952C03-B7A7-46F6-99C2-7DC94B920119\"></a></span>Iterate over each parameter in the template to get its value (each piece of user data\n\
                        can be accessed as a user data map template parameter).\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">	\n\
			For Each oParam in oTemplate.Parameters\n\
				If oParam.Value = \"\" Then\n\
					LogMessage oParam.ScriptName &amp; \": (no <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a>)\"\n\
				Else\n\
					LogMessage oParam.ScriptName &amp; \": \" &amp; oParam.Value\n\
				End If\n\
			Next\n\
		End If\n\
	Next\n\
\n\
	LogMessage \"=========================================================\"\n\
end function\n\
</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-37FE3146-1D2A-4D4A-A17A-4029EE6D80A8\"></a></span>The following message is logged to the History Log of the Script Editor:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"=========================================================\"\n\
\'INFO : \"Information for Point #1\"\n\
\'INFO : \"---------------------------------------------------------\"\n\
\'INFO : \"Juiciness_Factor: 25\"\n\
\'INFO : \"Special_Instructions: (no <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a>)\"\n\
\'INFO : \"Toggle_Effect: True\"\n\
\'INFO : \"=========================================================\"\n\
\'INFO : \"Information for Point #2\"\n\
\'INFO : \"---------------------------------------------------------\"\n\
\'INFO : \"Juiciness_Factor: 25\"\n\
\'INFO : \"Special_Instructions: (no <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a>)\"\n\
\'INFO : \"Toggle_Effect: True\"\n\
\'INFO : \"=========================================================\"\n\
\'INFO : \"Information for Point #3\"\n\
\'INFO : \"---------------------------------------------------------\"\n\
\'INFO : \"Juiciness_Factor: 25\"\n\
\'INFO : \"Special_Instructions: (no <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a>)\"\n\
\'INFO : \"Toggle_Effect: True\"\n\
\'INFO : \"=========================================================\"\n\
\'INFO : \"Information for Point #4\"\n\
\'INFO : \"---------------------------------------------------------\"\n\
\'INFO : \"Juiciness_Factor: 25\"\n\
\'INFO : \"Special_Instructions: (no <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a>)\"\n\
\'INFO : \"Toggle_Effect: True\"\n\
\'INFO : \"=========================================================\"\n\
</pre></div> \n\
                  </li>\n\
               </ol> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-567D693C-95AD-4552-AE79-A7E6D53E254E\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D94C0A21-7191-47C4-97B3-96D0033986FB\"></a></span>Notice how that the information for each cluster element (user data item) displayed\n\
                        is the same. That is because the user data on all subcomponents in the cluster is\n\
                        being inspected:\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	Set oSubComp = oGrid.ActivePrimitive.Geometry.CreateSubComponent( _\n\
			siPolygonCluster, aCls )\n\
	SIInspectUserData oUDMap, oSubComp\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2543B721-8498-4060-97BF-42A809AA2875\"></a></span>If you want to change the data on individual elements, you can either use the <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue</a> property for each cluster element (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_AccessingTemplatedUserDataonComponents.htm#WS324D95A558291241ACE764CD4620449D-0011\">VBScript Example: Setting user data on specific elements with UserDataMap.ItemValue</a></span>) or use the <a href=\"#!/url=./si_cmds/SIInspectUserData.html\">SIInspectUserData</a> command on a <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a> that is derived from a single component of the cluster:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	Set oSubComp = oGrid.ActivePrimitive.Geometry.CreateSubComponent( _\n\
			siPolygonCluster, array(27) )\n\
	SIInspectUserData oUDMap, oSubComp\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS324D95A558291241ACE764CD4620449D-0011\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0F04A529-7AD4-47FA-9B93-9782C95E4686\"></a></span>VBScript Example: Setting user data on specific elements with UserDataMap.ItemValue\n\
               </h2> <span class=\"anchor_wrapper\"><a name=\"GUID-4D326663-0DC8-4BA3-ACA4-73253D81CBD1\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-44CFEBCD-9CE9-49C6-81D3-7E971AE61CD5\"></a></span>Follow the steps under <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_AccessingTemplatedUserDataonComponents.htm#WS324D95A558291241ACE764CD4620449D-000E\">VBScript Example: Creating a user data template</a></span> to create and modify templated user data.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Change the values on some individual <a href=\"javascript:void(0)\" data=\"points\" class=\"a_multireflink\">points</a>\n\
Call setValues( oUDMap, 0, 12, \"Generic\", False )\n\
Call setValues( oUDMap, 1, 7, \"Low\", False )\n\
Call setValues( oUDMap, 2, 23, \"Severus\", True )\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A59F899-E246-44C4-95BA-38C01290EDD6\"></a></span>You can access each parameter of the templated data through the <a href=\"#!/url=./si_om/UserDataMap.Template.html\">Template</a> property on the <a href=\"#!/url=./si_om/UserDataMap.html\">UserDataMap</a> object:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
sub setValues( in_objUDM, in_intID, in_strPar1, in_strPar2, in_strPar3 )\n\
	\' Assign the specified values to the individual parameters of the template\n\
	in_objUDM.Template.Parameters(\"Juiciness_Factor\").Value = in_strPar1\n\
	in_objUDM.Template.Parameters(\"Special_Instructions\").Value = in_strPar2\n\
	in_objUDM.Template.Parameters(\"Toggle_Effect\").Value = in_strPar3\n\
</pre></div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-59985885-1D04-4748-9EC0-DD41E88D9F23\"></a></span>Even though you have updated the templated data attached to the user data map, you\n\
                        still need to save those values back to the user data map in order for them to take\n\
                        effect. To save it to a specific point, use the matching <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue</a> property:\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Assign the template values back to the user <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> map\n\
in_objUDM.ItemValue(in_intID) = in_objUDM.Template.BinaryData\n\
end sub\n\
</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-0E9AFC0F-76FC-4063-AA45-853E1ED81E9C\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A41376FA-BB48-4312-910B-8DCC1293EE15\"></a></span>Using the <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue</a> property is the equivalent to using the <a href=\"#!/url=./si_om/UserDataItem.html\">UserDataItem</a> object. For an example using the <span class=\"code\" translate=\"no\">UserDataItem</span> object, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_userdata_AccessingTemplatedUserDataonComponents.htm#WS324D95A558291241ACE764CD4620449D-0010\">VBScript Example: Getting user data on specific elements</a></span>.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ol> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";