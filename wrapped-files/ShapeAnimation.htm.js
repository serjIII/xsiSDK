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
      <meta name=\"topicid\" content=\"GUID-7AB10014-8841-4CA9-B0E2-0A4F58C7C29F\" />\n\
      <meta name=\"indexterm\" content=\"KeyType parameter values\" />\n\
      <meta name=\"indexterm\" content=\"shape reference mode\" />\n\
      <meta name=\"indexterm\" content=\"shape key reference mode\" />\n\
      <meta name=\"indexterm\" content=\"siShapeReferenceMode and KeyType values\" />\n\
      <meta name=\"indexterm\" content=\"shape animation: creating\" />\n\
      <meta name=\"indexterm\" content=\"shape animation: in the mixer\" />\n\
      <meta name=\"indexterm\" content=\"shape animation: exporting shape keys\" />\n\
      <meta name=\"indexterm\" content=\"exporting: shapekeys\" />\n\
      <meta name=\"indexterm\" content=\"soloing shape animation\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Shape Animation</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7AB10014-8841-4CA9-B0E2-0A4F58C7C29F\"></a></span><div class=\"head\">\n\
            <h1>Shape Animation</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-07E13439-BCCA-4624-888E-486ACF4C7302\"></a></span>With shape animation you can change the shape of an object over time. To do this,\n\
               you store shape keys for each pose based on the geometrical shape (deformation) of\n\
               an object\'s clusters of points (clusters made of polygons or edges are not supported).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D265CB60-E298-4C1A-BED1-9CC8757C57E1\"></a></span>Shape animation stores shape data on point clusters relative to the reference shape\n\
               in <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKeys</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShapeKey.html\">ShapeKeys</a>. Shape animation is a specialized kind of <a href=\"#!/url=./si_om/Source.html\">Source</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Source.html\">Source</a> object called an <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a> object.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0048\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D2917D28-B4AD-492A-80DF-2AC310EAEC35\"></a></span>Shape Key Reference Modes\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-742F85AE-14D3-4DEC-8F49-346F9AABAFEE\"></a></span>The <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKey</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShapeKey.html\">ShapeKey</a> object represents a special <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ClusterProperty.html\">ClusterProperty</a> which is used to store a specific geometry. Shape keys provide information about\n\
                  how the shape of a cluster changes by either storing its <em class=\"mild\">absolute</em> value, an offset based on the <em class=\"mild\">object</em> referential or values based on the <em class=\"mild\">local</em> reference frame of vertices. You can find out the key\'s reference mode by getting\n\
                  the value of the KeyType parameter, which uses these values:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EDC677C8-CE0F-4FFE-AA8F-53A656AA2530\"></a></span> <span class=\"code\" translate=\"no\">0</span> = <em class=\"strong\">Absolute</em> (shape is absolute)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-36223B53-B361-4C0A-980F-A5EEDE40BBFD\"></a></span> <span class=\"code\" translate=\"no\">1</span> = <em class=\"strong\">Local</em> (shape is relative to the reference frame of the control vertices)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-42A4BA85-C967-464C-8CC1-0AEFEA5ADD2A\"></a></span> <span class=\"code\" translate=\"no\">2</span> = <em class=\"strong\">Object</em> (shape is relative to the primitive reference frame)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E2AC6C5-486B-4281-B18A-8327352EC2BC\"></a></span> <span class=\"code\" translate=\"no\">3</span> = <em class=\"strong\">Result Object</em> (blended shape is relative to the primitive reference frame)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A4458E3B-A60B-41D2-A768-F2B82EA666C0\"></a></span> <span class=\"code\" translate=\"no\">4</span> = <em class=\"strong\">Reference</em></p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-03BA85D5-546E-4669-B253-B0815FEC9760\"></a></span> <span class=\"code\" translate=\"no\">5</span> = <em class=\"strong\">Result Local</em> (blended shape is relative to the reference frame of the control vertices)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8E26685D-4158-474A-BDE0-0EB1730B0B5D\"></a></span> <span class=\"code\" translate=\"no\">6</span> = <em class=\"strong\">Result Absolute</em> (blended shape is absolute)\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4434F5E6-A37E-40FE-BC6B-4D7842A0F6AF\"></a></span> <span class=\"code\" translate=\"no\">7</span> = <em class=\"strong\">Result Absolute Null</em></p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1513661B-D762-4F45-8AC1-5521DC0195A5\"></a></span> <span class=\"code\" translate=\"no\">8</span> = <em class=\"strong\">Unknown</em></p> \n\
                  </li>\n\
               </ul> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-3A402657-B6B2-491A-81B0-05FD5667BDBC\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B0B3B45-B045-46A1-9CE1-39FD3FC4D30A\"></a></span>It is important to recognize that the values used by the KeyType parameter do not\n\
                        correspond to the values represented by the <a href=\"#!/url=./si_om/siShapeReferenceMode.html\">siShapeReferenceMode</a> enum, which is used for many functions such as the <a href=\"#!/url=./si_om/Geometry.SaveShapeKey.html\">Geometry.SaveShapeKey</a> method, the <a href=\"#!/url=./si_cpp/classXSI_1_1CClusterPropertyBuilder.html#AddShapeKey\">CClusterPropertyBuilder::AddShapeKey</a> member function, the <a href=\"#!/url=./si_cmds/ConvertShapeReferenceMode.html\">ConvertShapeReferenceMode</a> command, etc.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-24EFD93A-00F6-47A3-AC2C-FBDB1594A55B\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CEB8A4BB-D277-4707-B6C6-5E09C9143012\"></a></span>To convert from one shape key reference mode to the other, use the <a href=\"#!/url=./si_cmds/ConvertShapeReferenceMode.html\">ConvertShapeReferenceMode</a> command.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0049\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9E6D731F-05A0-4C9C-8291-836D68D6A1FD\"></a></span> Creating Shape Animation\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5227AA64-899E-476F-AC41-C43D7A28DDBE\"></a></span>There are a number of scripting commands that can create shape keys from point clusters:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A4C1324A-DDB0-4C3D-A6AB-1B06B3ADB3D1\"></a></span><a href=\"#!/url=./si_cmds/ApplyDeformKey.html\">ApplyDeformKey</a>: Saves a pose-based deformation key\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-75CFAA15-37AF-4BC2-85D2-66149EACCE91\"></a></span><a href=\"#!/url=./si_cmds/SaveDeformKey.html\">SaveDeformKey</a>: Saves a key on a pose-based deformation\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-316ED21A-5FD0-4715-867C-0E5EFAB72E91\"></a></span><a href=\"#!/url=./si_cmds/SelectShapeKey.html\">SelectShapeKey</a>: Selects a list of objects as shape keys for another object\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5ED499F3-2C19-4D74-935B-7421E216397E\"></a></span>Shape keys can also be assigned to <em class=\"mild\">shape groups</em> (used to semantically organize shape keys within a given cluster). You can create\n\
                  shape groups with the <a href=\"#!/url=./si_cmds/CreateShapeGroup.html\">CreateShapeGroup</a> command and use the <a href=\"#!/url=./si_cmds/SetShapeGroup.html\">SetShapeGroup</a> command to assign shape keys to the groups.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-004A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D72FDEF8-8BC0-4A7E-B0C1-0D29539EBAC3\"></a></span> Shape Animation and the Mixer\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-02BA553C-8AFA-4D90-BD56-8955A9BD7EBE\"></a></span>A Shape key can also be bundled into an <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a> which is stored under the Mixer and instantiated as a <a href=\"#!/url=./si_om/ShapeClip.html\">ShapeClip</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShapeClip.html\">ShapeClip</a>. A ShapeClip object is an instance of a shape key (source) at a particular position\n\
                  along a shape track in the animation mixer. You can create shape clips using the <a href=\"#!/url=./si_om/Geometry.SaveShapeKey.html\">Geometry.SaveShapeKey</a> method in the object model (there is no equivalent function in the C++ API) or one\n\
                  of the following scripting commands:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E5A87789-1D36-4ADE-BFF7-9475131E0F8B\"></a></span><a href=\"#!/url=./si_cmds/SaveShapeKey.html\">SaveShapeKey</a>: Creates a shape key for the current shape and adds it to the model\'s list of shape\n\
                        sources in the model\'s Mixer &gt; Sources &gt; Shape folder\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-67AC3C98-C48A-4418-845D-41BFEADA550B\"></a></span><a href=\"#!/url=./si_cmds/StoreShapeKey.html\">StoreShapeKey</a>: Stores a shape key in the model\'s Mixer &gt; Sources &gt; Shape folder but it does not\n\
                        create a shape clip in the mixer\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9BBAD246-4BCE-41E4-B0DC-F15B4359CF42\"></a></span><a href=\"#!/url=./si_cmds/ApplyShapeKey.html\">ApplyShapeKey</a>: Applies the specified shape key to an object at the current frame and creates a\n\
                        ShapeClip in the animation mixer\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EEF3D1FD-D244-4C2A-BC14-56F342F338B8\"></a></span>Like other clips based on ActionSources, ShapeClips can be simple (siClipShapeType)\n\
                  or compound (siClipShapeCompoundType) which you can test on the Clip object with the\n\
                  <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> or SIObject::GetType property.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-004B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-033F1A77-32E1-484A-B924-2030AC1F9363\"></a></span> Exporting Shape Keys\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DC0A767-C063-4637-A237-2CAE7705B6F5\"></a></span>You can export shape keys to .obj files without touching the animation by soloing\n\
                  the shapes on the geometry. Soloing consists of two actions:\n\
               </p> <span class=\"anchor_wrapper\"><a name=\"GUID-708514CB-E435-4ADF-9539-F73E544A63ED\"></a></span><ol type=\"1\" start=\"1\">\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DAFC4D4B-E7BD-47B8-B289-B2F3ED028CE8\"></a></span>Set the <span class=\"code\" translate=\"no\">ShowResult</span> parameter of the clustershapecombiner to false.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F658F88E-B12E-4189-A0BD-10FDBCB8F491\"></a></span>Set the <span class=\"code\" translate=\"no\">SoloIndex</span> parameter to the shape you want to export.\n\
                     </p> \n\
                  </li>\n\
               </ol> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-64CF0C65-9D29-4A96-9C67-CEB7676B6A83\"></a></span>For example, this snippet demonstrates how to solo and then export a shape key using\n\
                  scripting commands:\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-004C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-CCF12E3A-46C6-45D2-B30B-BE3D4BA0193E\"></a></span>Python Example: Soloing and Exporting Shape Keys\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC1A26C9-2F80-4249-8280-7E2C9D772F91\"></a></span>This example uses scripting commands to perform most of the actions.\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# Setup a few Python-specific things\n\
from win32com.client import constants as c# so we can use Softimage constants\n\
app = Application			# use pointer since we are using so many commands\n\
\n\
# Start by making a cone and deforming the topmost point\n\
app.NewScene( \"\", 0 )\n\
obj = app.CreatePrim( \"Cone\", \"MeshSurface\" )\n\
app.SetValue( \"Context.ConstructionMode\", 1 )\n\
app.ActivateVertexSelTool()\n\
app.AddToSelection( \"cone.pnt[1]\", \"ASITIS\", 1 )\n\
app.Translate( \"cone.pnt[1]\", -4.03443654541759, 4.44089209850063E-16, -3.46944695195361E-17, \n\
	c.siRelative, c.siView, c.siObj, c.siXYZ )\n\
\n\
# Now save a shape key on the cone\n\
app.SaveShapeKey( \"cone.pnt[1]\", \"\", \"\", 1, \"\", \"\", \"\", \"\", c.siShapeObjectReferenceMode )\n\
app.SelectFilter( \"object\" )\n\
app.SelectObj( \"Mixer.Mixer_Shape_Track.Shape_ClusterClip\" )\n\
app.SetValue( \"Mixer.Mixer_Shape_Track.Shape_ClusterClip.Mixer_Shape_Track1.ShapeKey_Clip.actionclip.weight\", 0.52 )\n\
app.SetKey( \"Mixer.Mixer_Shape_Track.Shape_ClusterClip.Mixer_Shape_Track1.ShapeKey_Clip.actionclip.weight\", 1, 0.52 )\n\
\n\
# Solo the shape key \n\
app.Selection.SetAsText( obj.Name )\n\
stack = obj.ActivePrimitive.ConstructionHistory\n\
for op in stack :\n\
	if op.Type == \"clustershapecombiner\" :\n\
		op.Parameters(\"ShowResult\").Value = 1 #true\n\
		op.Parameters(\"SoloIndex\").Value = 1  #solo shape key\n\
\n\
# This is the equivalent using scripting commands:\n\
#app.SelectObj( \"cone.polymsh.clustershapecombiner\" )\n\
#app.SetValue( \"cone.polymsh.clustershapecombiner.ShowResult\", 0 )\n\
#app.SetValue( \"cone.polymsh.clustershapecombiner.SoloIndex\", 1 )\n\
\n\
# Export the soloed geometry in an OBJ file\n\
sPath = XSIUtils.BuildPath( app.InstallationPath(c.siUserPath), \"Data\", \"SoloExportDemo.obj\" )\n\
app.ObjExport( sPath )\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";