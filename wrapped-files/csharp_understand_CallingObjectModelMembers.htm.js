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
      <meta name=\"topicid\" content=\"GUID-554DDE85-2391-4FC0-A159-4C9902AB97BC\" />\n\
      <meta name=\"indexterm\" content=\"C#: accessing output parameters\" />\n\
      <meta name=\"indexterm\" content=\"collections (C#)\" />\n\
      <meta name=\"indexterm\" content=\"C#: working with collections\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Calling Object Model Members</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-554DDE85-2391-4FC0-A159-4C9902AB97BC\"></a></span><div class=\"head\">\n\
            <h1>Calling Object Model Members</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-686CD2A5-F3A6-4507-90D4-722EFD716AF5\"></a></span>Calling Object Model Methods\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-23902B50-0A9C-4585-A628-DE86E806DD82\"></a></span>Object model methods are quite straightforward to use in C# with only a few things\n\
                  to be aware of. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0011\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-7097E4FE-626C-41BA-8B39-C3E9045423F3\"></a></span>Default Arguments\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3F0F2A6E-779D-4D92-857C-EBF3D890BA05\"></a></span>C# does not support default arguments, so all arguments must be supplied when calling\n\
                     OM methods from C#. For example: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
app.LogMessage(str, siSeverity.siInfo);\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-532ECDE9-3A0D-4E78-9D1D-0FA269FF05EC\"></a></span>In scripting, the <a href=\"#!/url=./si_om/siSeverity.html\">siInfo</a> value is the default, but in C# it must be explicitly specified. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0012\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-9097D704-92BE-4059-8679-F03793F697D2\"></a></span>Output Arguments\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCCDBBE1-C85A-4BB9-91D2-29DA3FF7772D\"></a></span>You can access output arguments from methods as long as you pass a variable that is\n\
                     declared with the generic C# Object class (equivalent to <span class=\"char_link\"><a href=\"#!/url=./files/Variant.htm\">Variant</a></span>) along with the <span class=\"code\" translate=\"no\">out</span> keyword (which flags it as an output variable). After the method is executed, you\n\
                     can simply cast the object to the correct Softimage class, as shown in the following\n\
                     example: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Set up the scene\n\
CXSIApplicationClass app = new CXSIApplicationClass();\n\
object[] args = new object[2] { \"\", false };\n\
app.ExecuteCommand(\"NewScene\", args);\n\
Model root = app.ActiveSceneRoot;\n\
X3DObject cube = root.AddGeometry(\"Cube\", \"MeshSurface\", \"MyCube\");\n\
\n\
// Start with a Phong, then reconnect a Lambert using Parameter.ConnectFromFile\n\
Material mat = cube.AddMaterial(\"Phong\", false, \"MyPhong\");\n\
Parameter surface = mat.Parameters[\"Surface\"];\n\
app.LogMessage(\"currently connected shader: \" + surface.Source.FullName, siSeverity.siInfo);\n\
\n\
// Declare output arguments as a generic object and use the \'out\' keyword\n\
Object oldone;\n\
DataSource lambert = surface.ConnectFromFile(\"$SI_HOME\\\\Data\\\\DSPresets\\\\Shaders\\\\Material\\\\Lambert.Preset\", out oldone);\n\
app.LogMessage(\"currently connected shader: \" + surface.Source.FullName, siSeverity.siInfo);\n\
\n\
// To successfully retrieve output arguments, cast the generic object back to the correct class \n\
DataSource oldsrc = (DataSource)oldone;\n\
app.LogMessage(\"displaced shader: \" + oldsrc.FullName, siSeverity.siInfo);\n\
\n\
// Output:\n\
// INFO : currently connected shader: MyCube.Material.MyPhong\n\
// INFO : currently connected shader: MyCube.Material.Lambert\n\
// INFO : displaced shader: Sources.Materials.DefaultLib.Material.MyPhong\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0013\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E79BC052-14D5-426A-84DB-86E0EBAD3D3F\"></a></span>Generic Methods\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B53A57E9-DCB0-491B-8FE5-469F865F09C2\"></a></span>Generic methods in the object model are converted to generic methods in C#: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// GetAttribute returns a string Variant in the OM which maps to the generic Object class in C#\n\
Object obj = in_ctxt.GetAttribute(\"Button\");\n\
\n\
// To access the string value, a <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a> cast must be performed to String\n\
String str = (String)obj;\n\
\n\
// Everything in C# is an Object <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>, so if a method returns a long you still need to typecast\n\
long n = (long)in_ctxt.GetAttribute(\"LongAttribute\");\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0014\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-CE5122F7-0CBF-4B24-9C05-499D3BB56BAE\"></a></span>Geometry Interfaces\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0B34C3F5-6B42-4692-A5F8-52C0BA045077\"></a></span>With most interfaces in the object model, you can access any method on an instance\n\
                     directly without having to cast. However, for geometry collection interfaces (for\n\
                     example, PolygonFaceCollection, NurbsSampleCollection, and so on), you need to explicitly\n\
                     cast the interface before calling methods: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
PolygonFaceCollection polygons = (PolygonFaceCollection)subcomp.ComponentCollection;\n\
Array aNodeIndexArray = (Array)polygons.PolygonNodePolygonFaceIndexArray;\n\
\n\
// Type cast a gain to access FacetCollection.IndexArray\n\
FacetCollection polyFacets = (FacetCollection)polygons;\n\
Array aPolyIndexArray = (Array)polyFacets.IndexArray;\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0015\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FB8D5257-1C52-4F6C-AC0D-CC804CE40870\"></a></span>Calling Object Model Properties\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5F9EADBC-C6AB-42A5-BEBD-E685742E1550\"></a></span>The syntax to call properties in C# is similar to using JScript, except the difference\n\
                  in type declaration: \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
//JScript\n\
<em class=\"strong\">var</em> params = oObject.Kinematics.Global.Parameters;\n\
\n\
// C#\n\
<em class=\"strong\">ParameterCollection</em> params = oObject.Kinematics.Global.Parameters;\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A28591F1-9006-487F-A406-8DA162A04BC2\"></a></span>However, there are some syntactic differences when dealing with collections and workarounds\n\
                  when you have to use the get- or set-accessors. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E338ACCA-EE18-4B76-A5B5-E811E64AC898\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span>Each object model member displays a syntax section for C# which you can use to verify\n\
                     your code. In addition, the Visual C# ObjectBrowser and Visual Studio auto-complete\n\
                     are excellent tools to understand some of the issues covered in this section. \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0016\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-BD25C194-8317-4851-90B3-4A265383CED4\"></a></span>Accessing Collection Items\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-48EB65AC-583B-49B1-B640-30DFD7F749F3\"></a></span>You can access collection items with the [] syntax: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Parameter posy = oObject.Kinematics.Global.Parameters[\"posy\"];\n\
Parameter posx = oObject.Kinematics.Global.Parameters[0];\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7D084710-3A2B-4836-8F73-6ED298B50F18\"></a></span>For iterating over a collection, the easiest and most reliable approach is to use\n\
                     the C# <span class=\"code\" translate=\"no\">foreach</span> loop: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
ParameterCollection params = oObject.Kinematics.Global.Parameters;\n\
foreach (Parameter p in params) \n\
{\n\
	app.LogMessage( p.Name + \" is a \" + p.ValueType.ToString() );\n\
}\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0017\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-99631DE7-7CA8-43F7-9DA3-DEB20A7C5935\"></a></span>Implementation Differences for Properties\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1B4D93FD-3E4F-499C-973E-963896FD3413\"></a></span>Some properties defined in the object model use different data types or classes for\n\
                     getting and setting. For example, the <a href=\"#!/url=./si_om/XSIApplication.ActiveProject2.html\">XSIApplication.ActiveProject</a> property takes a String for setting and returns a Project object while getting: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Won\'t compile\n\
Project p = xsi.ActiveProject; \n\
\n\
// Last line causes a compiler error\n\
Preferences pref = xsi.Preferences;\n\
ProjectItemCollection proj_itms = pref.Categories;\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-41ABEA79-B26C-4253-BB55-1CBDF435DCCA\"></a></span>In some cases, an alternative method or property exists that resolves the problem.\n\
                     For example, <a href=\"#!/url=./si_om/XSIApplication.ActiveProject2.html\">XSIApplication.ActiveProject2</a> is an alternative property which returns and sets a <a href=\"#!/url=./si_om/Property.html\">Property</a> object: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Alternate <a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a> of above snippet:\n\
Project p = xsi.<em class=\"strong\">ActiveProject2</em>;\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-13B92CD5-A3F8-44F9-A80A-F71B1064BB2A\"></a></span>If there is no alternative method or property, you can use special syntax where you\n\
                     prefix <span class=\"code\" translate=\"no\">get_</span> or <span class=\"code\" translate=\"no\">set_</span> to the name of the property and then treat it like a method: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Special syntax as a workaround \n\
ProjectItemCollection proj_itms = pref.<em class=\"strong\">get_</em>Categories;\n\
pref.<em class=\"strong\">set_</em>Categories( proj_itms );\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-79885A3E-0F91-4B20-A5CE-8D91C641FB9C\"></a></span>When you use this special syntax you are actually using the <em class=\"mild\">get</em>- and <em class=\"mild\">set</em>-<em class=\"mild\">accessor</em> methods which you can find by browsing the methods of the object in the Visual C#\n\
                     ObjectBrowser. \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-B122A0EE-9CF8-4A99-B31F-4AE86ECEE75D\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span>On each property page in the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>, there is a special <em class=\"strong\">C# Syntax</em> section which provides a basic C# syntax string for the <span class=\"code\" translate=\"no\">get</span> and <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a></span> accessors. The data or class type is provided so you can see how to use the specific\n\
                        accessor. For example, here is the section on the <a href=\"#!/url=./si_om/Preferences.Categories.html\">Preferences.Categories</a> page: \n\
                     </div>\n\
                  </div> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// get accessor\n\
Object Preferences.get_Categories();\n\
\n\
// <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> accessor\n\
Preferences.set_Categories( [String pArrayVal] );\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-959A5A81-CC14-479B-8590-E6C2100FBF0C\"></a></span>Compare this with the <em class=\"strong\">C# Syntax</em> section on the <a href=\"#!/url=./si_om/GridData.ColumnCount.html\">GridData.ColumnCount</a> page, which sets and returns an <span class=\"code\" translate=\"no\">Int32</span> value: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// get accessor\n\
Int32 GridData.ColumnCount();\n\
\n\
// <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> accessor\n\
GridData.ColumnCount( [Int32 out_Columns] );\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS867B13D549B34C4DB8B9D98945203C0F-0018\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-AA46BDB1-925A-4A10-BFDB-3616805088EC\"></a></span>Properties with Input Arguments\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BDC467A2-1721-4662-BAD5-DFF3B44E3264\"></a></span>Some object model properties take one or more input arguments, such as <a href=\"#!/url=./si_om/Primitive.Geometry.html\">Primitive.Geometry</a>, which allows you to get the geometry at a specific frame, or <a href=\"#!/url=./si_om/FCurveKey.Constraint.html\">FCurveKey.Constraint</a>, which tests whether the specified constraint is active on the <a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a>. Many of these properties have C#-friendly method counterparts, which you can find\n\
                     in the reference documentation by looking for <span class=\"code\" translate=\"no\">Get</span> prefixed to the name of the property and 2 suffixed to it (for example, <a href=\"#!/url=./si_om/Primitive.GetGeometry2.html\">Primitive.GetGeometry2</a> and <a href=\"#!/url=./si_om/FCurveKey.GetConstraint2.html\">FCurveKey.GetConstraint2</a>). \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BFEA6CAC-5B93-4957-9E0E-22B3AA7CCFAD\"></a></span>In a few cases there is no corresponding C#-friendly method counterpart to use, so\n\
                     you can use the get- or set-accessor instead: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Get the geometry at the current frame\n\
Geometry geo = obj.ActivePrimitive.get_Geometry((int)-1);</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-3BB819FB-BCCA-48D1-A839-BE849E75E528\"></a></span>These are the object model properties that take input arguments: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"TABLE_27918D0DD36A400CBEF6AAD8B35A0CC5\"></a></span><div class=\"table_Ruled\">\n\
                     <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                        <colgroup>\n\
                           <col width=\"33.33333333333333%\" align=\"left\" />\n\
                           <col width=\"33.33333333333333%\" align=\"left\" />\n\
                           <col width=\"33.33333333333333%\" align=\"left\" />\n\
                        </colgroup>\n\
                        <tr class=\"ruledOddRow\">\n\
                           <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"UL_0047E833C2EC42C492A0827F97EA9431\"></a></span><ul>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-002ECB06-4B75-4C66-928C-2253416F081B\"></a></span> <a href=\"#!/url=./si_om/ClusterElementCollection.ItemsByIndex.html\">ClusterElementCollection.ItemsByIndex</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-775A3137-AF2D-42F0-B1A8-147F5FB7B45A\"></a></span> <a href=\"#!/url=./si_om/CollectionItem.IsA.html\">CollectionItem.IsA</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-9F33B7F2-4D84-44CD-8296-1D56CA8571EA\"></a></span> <a href=\"#!/url=./si_om/CollectionItem.Selected.html\">CollectionItem.Selected</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE4D4721-581E-4679-A207-B8D6AD57A967\"></a></span> <a href=\"#!/url=./si_om/CommandCollection.Item.html\">CommandCollection.Item</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-A00723F5-A292-4DFA-94A5-A381501D15DD\"></a></span> <a href=\"#!/url=./si_om/Device.Channel.html\">Device.Channel</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6C2DD5A-7D3B-47C5-A27D-51661E2CB0BD\"></a></span> <a href=\"#!/url=./si_om/DeviceCollection.Count.html\">DeviceCollection.Count</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-8622C671-984C-4131-A87C-CF79BA71492B\"></a></span> <a href=\"#!/url=./si_om/DeviceCollection.Item.html\">DeviceCollection.Item</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-1BA88231-1728-4B72-839C-C219C3CA952C\"></a></span> <a href=\"#!/url=./si_om/Envelope.Elements.html\">Envelope.Elements</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-744A3590-9BFA-45A6-B5DB-C3108B0095D0\"></a></span> <a href=\"#!/url=./si_om/Envelope.Weights.html\">Envelope.Weights</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-30D4E2EA-EB49-45C3-B334-1D973AAB68CE\"></a></span> <a href=\"#!/url=./si_om/FCurveEditor.EditorAttribute.html\">FCurveEditor.EditorAttribute</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-B1B26DFE-6262-4994-863B-E070491535A6\"></a></span> <a href=\"#!/url=./si_om/FCurveEditor.SelectedKeys.html\">FCurveEditor.SelectedKeys</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-B447263D-D3D4-4412-8C43-AA8F1E85E4AE\"></a></span> <a href=\"#!/url=./si_om/FCurveKey.Constraint.html\">FCurveKey.Constraint</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-489A2DA9-F626-454B-99E9-2C72E79FFA81\"></a></span> <a href=\"#!/url=./si_om/KinematicState.Transform.html\">KinematicState.Transform</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-A7C64B5E-1F2B-487E-8BC9-2305BB7686A1\"></a></span> <a href=\"#!/url=./si_om/NurbsSampleCollection.USamplingCount.html\">NurbsSampleCollection.USamplingCount</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-7AFB7029-7494-44BC-8513-07720A52D73C\"></a></span> <a href=\"#!/url=./si_om/NurbsSampleCollection.VSamplingCount.html\">NurbsSampleCollection.VSamplingCount</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-31C34D2A-7335-487F-A5D3-C6071765CA28\"></a></span> <a href=\"#!/url=./si_om/NurbsSurface.Knots.html\">NurbsSurface.Knots</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-4CFAA354-024C-433F-A46F-DF110C80EBA9\"></a></span> <a href=\"#!/url=./si_om/Operator.Port.html\">Operator.Port</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-1388B4A7-E412-4C1B-94BE-DF9BF6545AB7\"></a></span> <a href=\"#!/url=./si_om/PPGLayout.Item.html\">PPGLayout.Item</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-9FF042BA-EA22-4B9A-8D7E-184EA2C89390\"></a></span> <a href=\"#!/url=./si_om/Parameter.Value.html\">Parameter.Value</a> \n\
                                    </p> \n\
                                 </li>\n\
                              </ul> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_45589F8F83294913AD285636A3D94AB6\"></a></span><ul>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-C9306AB0-6199-4788-BA1C-4F14A41E55B7\"></a></span> ParticleCollection.AgeArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-1AD72829-253A-4216-B662-FCB41E131A6F\"></a></span> ParticleCollection.AgeLimitArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-192A3364-29AC-4330-9E44-80F050EB8D88\"></a></span> ParticleCollection.AngularVelocityArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-CFB6FE82-80FB-4913-8204-2483BA2F8B25\"></a></span> ParticleCollection.ColorArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-FFE22FAB-B5A4-49A2-A160-E7B120D7FECD\"></a></span> ParticleCollection.DensityArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-E4868838-C422-459C-979C-0CF6DDBFB639\"></a></span> ParticleCollection.MassArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-7090D1F4-0A94-425A-9A38-553BF3154740\"></a></span> ParticleCollection.PathLengthArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-11B859B4-5EF5-4F84-8936-0ECE0466D0CF\"></a></span> ParticleCollection.PositionArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-68B847F2-E638-4A25-AEFC-D30545405C4F\"></a></span> ParticleCollection.PressureArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4A0ACEC-4822-4C30-9216-936C2A854EE7\"></a></span> ParticleCollection.RotationArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-929FE0F4-11CA-40B3-84C3-F2C19BB1AEFC\"></a></span> ParticleCollection.SeedArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-95E5588F-EC9E-45A5-A735-E87E1D951C1B\"></a></span> ParticleCollection.SizeArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4D62E9A-6D46-4060-AB79-1FDCDB392B34\"></a></span> ParticleCollection.SpriteAngleArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-67F227D2-C946-453D-A8FD-89BC08CE48D4\"></a></span> ParticleCollection.SpriteIndexArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-99F29EF0-4729-464C-A105-219FB7035B05\"></a></span> ParticleCollection.TypeIDArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-351FF664-E4A3-41FD-8B72-2ACDA373D151\"></a></span> ParticleCollection.UVWArray \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-588CF6D0-1620-4A4C-B572-56D8F9745A14\"></a></span> ParticleCollection.VelocityArray \n\
                                    </p> \n\
                                 </li>\n\
                              </ul> \n\
                           </td>\n\
                           <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"UL_886E4079149B4F95BBF657A78ECD999B\"></a></span><ul>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-53694275-AC4A-481A-BF62-911B01F71F40\"></a></span> <a href=\"#!/url=./si_om/Primitive.Geometry.html\">Primitive.Geometry</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-D4784D05-09CB-4C69-A8D7-3F40D8A7408B\"></a></span> <a href=\"#!/url=./si_om/ProjectItem.Selected.html\">ProjectItem.Selected</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-177456AD-D9F6-4161-8C23-72E6F9FA08F4\"></a></span> <a href=\"#!/url=./si_om/SIMatrix3.Value.html\">SIMatrix3.Value</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-F76CD37F-1071-4F6D-B41E-FC3A8C3A542F\"></a></span> <a href=\"#!/url=./si_om/SIMatrix4.Value.html\">SIMatrix4.Value</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-C591631B-CB6C-43CC-8E6D-BD169BF50B60\"></a></span> <a href=\"#!/url=./si_om/SIQuaternion.Value.html\">SIQuaternion.Value</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-65DF3992-E486-4168-9DEC-066994B9B0B2\"></a></span> <a href=\"#!/url=./si_om/SIVector3.Value.html\">SIVector3.Value</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-4517ED02-4DF2-45F8-956B-8CCB586DB4E5\"></a></span> <a href=\"#!/url=./si_om/Selection.Item.html\">Selection.Item</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-3224B1AA-D755-4815-B057-B08989228AC3\"></a></span> <a href=\"#!/url=./si_om/StaticKinematicState.Transform.html\">StaticKinematicState.Transform</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-F6EEA2B0-32A6-4234-AB23-7EC8095B9998\"></a></span> <a href=\"#!/url=./si_om/UserDataMap.IsEmpty.html\">UserDataMap.IsEmpty</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1589E51-CC5A-4348-BB66-C595F4B3E14F\"></a></span> <a href=\"#!/url=./si_om/UserDataMap.Item.html\">UserDataMap.Item</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-70E84403-3542-49DB-8336-C475903B75DC\"></a></span> <a href=\"#!/url=./si_om/UserDataMap.ItemSize.html\">UserDataMap.ItemSize</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-CCB23F07-39FE-4BFA-A489-0776289EEF8B\"></a></span> <a href=\"#!/url=./si_om/UserDataMap.ItemValue.html\">UserDataMap.ItemValue</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-55783729-1AE4-4C79-BA14-2DFF064F3F99\"></a></span> <a href=\"#!/url=./si_om/X3DObject.Models.html\">X3DObject.Models</a> \n\
                                    </p> \n\
                                 </li>\n\
                                 <li> \n\
                                    <p><span class=\"anchor_wrapper\"><a name=\"GUID-6FC5DBE9-6852-4ADE-A035-FC1EDCA41A3F\"></a></span> <a href=\"#!/url=./si_om/XSIApplication.InstallationPath.html\">XSIApplication.InstallationPath</a> \n\
                                    </p> \n\
                                 </li>\n\
                              </ul> \n\
                           </td>\n\
                        </tr>\n\
                     </table>\n\
                  </div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";