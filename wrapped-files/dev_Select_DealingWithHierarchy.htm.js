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
      <meta name=\"topicid\" content=\"GUID-0B1FC90B-4298-41FF-AE0A-B43DF3D31C32\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Dealing with Hierarchy</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-0B1FC90B-4298-41FF-AE0A-B43DF3D31C32\"></a></span><div class=\"head\">\n\
            <h1>Dealing with Hierarchy</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CC3E595-AD43-4AD4-952E-D1C66AB2D2CC\"></a></span>Selection recognizes four different levels of object hierarchy, or <em class=\"mild\">selection modes</em>. Selection modes are important for certain operations (such as applying operators),\n\
               as they change the scope of these operations: \n\
            </p><span class=\"anchor_wrapper\"><a name=\"UL_772824BE2DA04155B4CAB86B41B9F15C\"></a></span><ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7818F43B-5FC8-4B02-9F6F-F8751B9AB2D2\"></a></span> <em class=\"strong\">Node:</em> the specified 3d object is selected and subsequent operations are performed on only\n\
                     on that object. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9695F2C9-FD4A-4AE9-A3D6-0BEFB717E164\"></a></span> <em class=\"strong\">Branch:</em> the specified 3d object is selected and subsequent operations are performed on the\n\
                     specified 3d object as well as its children. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-436FE38C-78AF-43BB-B820-51263B78141B\"></a></span> <em class=\"strong\">Tree:</em> the highest 3D object in the hierarchy under the specified 3D object\'s model is selected\n\
                     and subsequent operations are performed on the newly selected object as well as its\n\
                     children. \n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-07C242DE-8631-4FB6-A009-515E5EC6425B\"></a></span> <em class=\"strong\">Model:</em> the model containing the specified 3D object is selected and subsequent operations\n\
                     are performed on the newly selected object as well as its children. \n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-D64519F0-4CD0-4641-9AA3-54E77A879248\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1039606D-52FD-4583-9961-52EAEF875BC7\"></a></span>For general information about hierarchy selection in Softimage, see Selecting Objects\n\
                     in a Hierarchy in the Softimage User\'s guide. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0023\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FA1B4A78-A2D3-4702-8D99-090B2EED788F\"></a></span>Specifying Hierarchy while Selecting\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E30F2CBF-A768-4269-899C-3FE246ED1BDE\"></a></span>Both the <a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a> command or the <a href=\"#!/url=./si_om/Selection.Add.html\">Selection.Add</a> or Selection::Add method provide a parameter which allows you to specify one of the\n\
                  hierarchical modes: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_A0D9CD7BE4DB41B1BF1ED8416C9E4E9D\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FE7551BF-6D4D-4C3B-9245-5EA84431F99A\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0029\">JScript Example: Hierarchical selection with the SelectObj command</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-98B4E5AD-1A3E-49C5-B5DB-0307062DC288\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002A\">Python Example: Hierarchical selection with the Selection.Add method</a></span> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-9C3E16C1-629C-46EF-97E2-0B2CD7F6D979\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-75A368BD-AB9E-4A0D-A502-CE4E7A1D3FC6\"></a></span>There are several other commands which support the hierarchical keywords: <a href=\"#!/url=./si_cmds/AddToSelection.html\">AddToSelection</a>, <a href=\"#!/url=./si_cmds/ToggleSelection.html\">ToggleSelection</a>, <a href=\"#!/url=./si_cmds/SelectNeighborObj.html\">SelectNeighborObj</a>. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A43ED2F-FA88-40D0-90CC-88E77E77D4C3\"></a></span>There are also a few convenience commands which you can use to specify a hierarchical\n\
                        selection: <a href=\"#!/url=./si_cmds/SelectBranch.html\">SelectBranch</a>, <a href=\"#!/url=./si_cmds/SelectTree.html\">SelectTree</a>, <a href=\"#!/url=./si_cmds/SelectModel.html\">SelectModel</a>. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-0BE9845A-6436-4946-B1F3-B2C616376AF6\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B2C687F3-5BCB-4700-A66D-DB4DAD23D61C\"></a></span>There is also another way to specify whether an item is branch-selected, independent\n\
                        of the selection: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_97AA3B03E65F4CF5ADA52A53648557A5\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-CE613F4C-CB85-42D3-9898-EBF5D1CE35AA\"></a></span>When running a command that takes a <span class=\"char_link\"><a href=\"#!/url=./files/objectexpr.htm\">string expression</a></span> to identify an object, prefix its name with <span class=\"code\" translate=\"no\">\"B:\"</span>. See <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002B\">VBScript Example: Deleting a null in Branch</a></span> for an example using this technique. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8038E96A-D842-45F5-814C-3DAF648B2354\"></a></span>Deleting Objects with Hierarchy\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2C524DDA-F401-4523-81F5-787048FF2A9D\"></a></span>Most of the time deleting objects is a simple matter of passing the name of object\n\
                  to the <a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a> command. But if the object contains other 3D object(s), you need to follow special\n\
                  procedures: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_065A6FE627934C408FD95E8DF9AA2893\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-61131D8E-45DC-4A6E-931D-69C4E6263E85\"></a></span>If the object you want to delete is a model or a null, you must branch-delete it in\n\
                        order to remove it and its children. If you don\'t branch-delete the model or null,\n\
                        nothing happens. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6F91D790-D00B-4F77-A629-D34C2126B55F\"></a></span>If the object you want to delete is any other 3D object (sphere, cone, etc.) and you\n\
                        branch-delete it, the object and all contained nodes are removed. If you node-delete\n\
                        it, the object is removed and replaced by a null with the same name (in order to preserve\n\
                        the hierarchy for the contained nodes. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-BFE9A5B4-E987-41D3-92B3-8861A7A5F860\"></a></span>To branch-delete an object you must either select it in branch and run the <a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a> command without any arguments or use the <span class=\"code\" translate=\"no\">\"B:\"</span> branch prefix with the name of the object to delete. For example: \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0025\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-233A0DA7-3DBB-4B4F-9EE5-ABB2FCA529EB\"></a></span>JScript Example: Deleting a Model (Node vs. Branch)\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Create a simple model containing a sphere\n\
NewScene(null, false);\n\
var sph = CreatePrim(\"Sphere\", \"MeshSurface\");\n\
var mdl = CreateModel(sph, \"LocalModel\")(0);\n\
Application.LogMessage(Application.ActiveSceneRoot.Models.GetAsText());\n\
// INFO : LocalModel\n\
\n\
// First node-delete it (nothing happens)\n\
DeleteObj(mdl);\n\
Application.LogMessage(Application.ActiveSceneRoot.Models.GetAsText());\n\
// INFO : LocalModel\n\
\n\
// Then try branch-deleting it (it is removed)\n\
SelectObj(mdl, \"BRANCH\")// models must be branch-selected when deleting\n\
DeleteObj();\n\
Application.LogMessage(Application.ActiveSceneRoot.Models.GetAsText());\n\
// INFO :\n\
</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-DAF6F098-4CFE-4281-B903-1E49B3004EE1\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-18550BBA-BABC-469E-A652-A69FF0A44209\"></a></span>For an example demonstrating how to use the <span class=\"code\" translate=\"no\">\"B:\"</span> prefix with the <a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a> command, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002B\">VBScript Example: Deleting a null in Branch</a></span>. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0026\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CB971E1F-819C-4016-ABFE-BEBE950ACBE5\"></a></span>Testing the Selection for Hierarchy\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA2E0374-F1DF-4D3C-BBB0-F4C50E61B53D\"></a></span>Every 3d object stores its own <a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">ProjectItem.BranchFlag</a> or ProjectItem::GetBranchFlag that remembers whether or not the object is node-selected\n\
                  or not. In other words, if the object is selected in branch, tree, or model, the branch\n\
                  flag is set to <span class=\"code\" translate=\"no\">1</span>. If the object is node-selected only, the branch flag is set to <span class=\"code\" translate=\"no\">0</span>. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-89681D70-8378-49EC-B439-97B142D881C9\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E43C9EE-3D1F-489E-A841-7CABDE78359C\"></a></span>Remember that parameters and compound properties cannot be selected at all: their\n\
                        owning 3dobject is selected and they are considered to be marked. In the SDK, parameters\n\
                        derive from the <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1SIObject.html\">SIObject</a> class, but it is the <a href=\"#!/url=./si_om/ProjectItem.html\">ProjectItem</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html\">ProjectItem</a> class which implements the <a href=\"#!/url=./si_om/ProjectItem.BranchFlag.html\">ProjectItem.BranchFlag</a> or ProjectItem::GetBranchFlag property. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1254BA69-58A2-4DB5-BDC2-1E20D7C9CF5A\"></a></span>For a demonstration of testing the selection for hierarchy in Python, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002C\">Python Example: Testing selected items for Hierarchy</a></span>. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0027\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-AA895950-102A-40DC-9B67-DDDCD599EBAD\"></a></span>Hierarchy and SubComponents\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-30A01098-7799-4BA3-9E23-625F665B372F\"></a></span>Points, edges, polygons, etc. do not support any hierarchical modes because they are\n\
                  individual SubComponents. Hierarchy is really only important in terms of operations\n\
                  that work on scene items, such as applying operators in branch. \n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0028\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-ACE05304-3107-4D02-AEE1-2855DDEA2EB6\"></a></span>Examples\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5D387AA0-AC23-4053-A192-F94E7A6157A4\"></a></span>The following examples are available: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_C14B65CE247044F4A92C894B48142A4A\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-C80F5E15-A4F1-46A6-8B31-E5F805CE8E7B\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0029\">JScript Example: Hierarchical selection with the SelectObj command</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-199B27EE-3801-4B24-ACDA-0232492D772E\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002A\">Python Example: Hierarchical selection with the Selection.Add method</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-506F7851-58FE-4B91-AE04-73065A36728E\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0025\">JScript Example: Deleting a Model (Node vs. Branch)</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9D47B9CB-659F-43D5-A465-B6A2ADEBBEF6\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002B\">VBScript Example: Deleting a null in Branch</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9B900774-B154-4CF7-B85D-D3F8E327FB15\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/dev_Select_DealingWithHierarchy.htm#WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002C\">Python Example: Testing selected items for Hierarchy</a></span> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-0029\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-A7D9D48C-0853-4FC7-80C1-5EF311BF663E\"></a></span>JScript Example: Hierarchical selection with the SelectObj command\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-60A405AF-5739-44F3-8091-511DEA86CC64\"></a></span>This example demonstrates how to use the <a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a> command to select an object in different hierchical modes: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Set up a scene with lots of hierarchy \n\
SetUpScene();\n\
\n\
// Try the different modes with the SelectObj command\n\
\n\
SelectObj(\"Herman.Larm\", \"NODE\");\n\
Application.LogMessage(Selection.GetAsText());\n\
// INFO : Herman.LArm\n\
\n\
SelectObj(\"Herman.Larm\", \"BRANCH\");\n\
Application.LogMessage(Selection.GetAsText());\n\
// INFO : Herman.LArm\n\
\n\
SelectObj(\"Herman.Larm\", \"TREE\");\n\
Application.LogMessage(Selection.GetAsText());\n\
// INFO : Herman.Arms\n\
\n\
SelectObj(\"Herman.Larm\", \"MODEL\");\n\
Application.LogMessage(Selection.GetAsText());\n\
// INFO : Herman\n\
\n\
\n\
// --------------------------\n\
//	Convenience function\n\
//\n\
function SetUpScene()\n\
{\n\
	NewScene(null, false);\n\
\n\
	// Topmost level\n\
	CreateModel(\"\", \"Herman\");\n\
\n\
	// General body parts\n\
	GetPrim(\"Null\", \"Head\", \"Herman\");\n\
	GetPrim(\"Null\", \"Chest\", \"Herman\");\n\
	GetPrim(\"Null\", \"Arms\", \"Herman\");\n\
	GetPrim(\"Null\", \"Torso\", \"Herman\");\n\
	GetPrim(\"Null\", \"Legs\", \"Herman\");\n\
\n\
	// Individual body parts\n\
	GetPrim(\"Null\", \"LArm\", \"Herman.Arms\");\n\
	GetPrim(\"Null\", \"RArm\", \"Herman.Arms\");\n\
\n\
	// Specific body parts\n\
	CreatePrim(\"Sphere\", \"MeshSurface\", \"Bicep\", \"Herman.Larm\");\n\
	Scale(\"Herman.Bicep\", 0.35, 1, 0.35, siAbsolute, siPivot, siObj, siXZ);\n\
}</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-02982CA0-8996-4166-9634-C34152F13C13\"></a></span>Python Example: Hierarchical selection with the Selection.Add method\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-161B6A44-4ADB-4213-B598-5F08B178B59A\"></a></span>You could also use the <a href=\"#!/url=./si_om/siSelectMode.html\">siSelectMode</a> values with <a href=\"#!/url=./si_om/Selection.Add.html\">Selection.Add</a> or Selection::Add instead of the <a href=\"#!/url=./si_cmds/SelectObj.html\">SelectObj</a> command: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
from win32com.client import constants as xsi\n\
app = Application\n\
\n\
# --------------------------\n\
#	Convenience function\n\
#\n\
def SetUpScene() :\n\
	Application.NewScene(\"\", 0)\n\
\n\
	# Topmost level\n\
	Application.CreateModel(\"\", \"Herman\")\n\
\n\
	# General body parts\n\
	Application.GetPrim(\"Null\", \"Head\", \"Herman\")\n\
	Application.GetPrim(\"Null\", \"Chest\", \"Herman\")\n\
	Application.GetPrim(\"Null\", \"Arms\", \"Herman\")\n\
	Application.GetPrim(\"Null\", \"Torso\", \"Herman\")\n\
	Application.GetPrim(\"Null\", \"Legs\", \"Herman\")\n\
\n\
	# Individual body parts\n\
	oRefObj = app.GetPrim(\"Null\", \"LArm\", \"Herman.Arms\")\n\
	Application.GetPrim(\"Null\", \"RArm\", \"Herman.Arms\")\n\
\n\
	# Specific body parts\n\
	Application.CreatePrim(\"Sphere\", \"MeshSurface\", \"Bicep\", \"Herman.Larm\")\n\
	Application.Scale(\"Herman.Bicep\", 0.35, 1, 0.35, \"siAbsolute\", \"siPivot\", \"siObj\", \"siXZ\")\n\
	\n\
	return oRefObj\n\
\n\
\n\
# --------------------------\n\
#	Hierarchical selection\n\
#\n\
# Set up a scene with lots of hierarchy \n\
o3DSceneItem = SetUpScene()\n\
\n\
# Try the different modes with the Selection.Add method\n\
oSel = app.Selection\n\
\n\
oSel.Clear()\n\
oSel.Add(o3DSceneItem, xsi.siSelectNode)\n\
app.LogMessage(oSel.GetAsText())\n\
# INFO : Herman.LArm\n\
\n\
oSel.Clear()\n\
oSel.Add(o3DSceneItem, xsi.siSelectBranch)\n\
app.LogMessage(oSel.GetAsText())\n\
# INFO : Herman.LArm\n\
\n\
oSel.Clear()\n\
oSel.Add(o3DSceneItem, xsi.siSelectTree)\n\
app.LogMessage(oSel.GetAsText())\n\
# INFO : Herman.Arms\n\
\n\
oSel.Clear()\n\
oSel.Add(o3DSceneItem, xsi.siSelectModel)\n\
app.LogMessage(oSel.GetAsText())\n\
# INFO : Herman\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-C3BFE98D-31C6-4919-8E53-DA136520EBD7\"></a></span>VBScript Example: Deleting a null in Branch\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-77F6A65F-155E-4A15-A3F3-6FE694ADF640\"></a></span>This example demonstrates how to delete an object and all its children by prefixing\n\
                     the object\'s string expression with the <span class=\"code\" translate=\"no\">\"B:\"</span> branch designation: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> app = Application\n\
NewScene , false\n\
\n\
GetPrim \"Null\", \"top\"\n\
GetPrim \"Null\", \"middle_1\", \"top\"\n\
GetPrim \"Null\", \"middle_2\", \"top\"\n\
GetPrim \"Null\", \"middle_3\", \"top\"\n\
GetPrim \"Null\", \"mid_2_bottom_1\", \"middle_2\"\n\
GetPrim \"Null\", \"way_low\", \"mid_2_bottom_1\"\n\
GetPrim \"Null\", \"mid_2_bottom_2\", \"middle_2\"\n\
GetPrim \"Null\", \"mid_3_bottom\", \"middle_3\"\n\
\n\
SelectAll\n\
app.LogMessage \"There are currently \" &amp; app.Selection.Count &amp; \" item(s) selected.\"\n\
for each sel_item in app.Selection\n\
	app.LogMessage sel_item.Name\n\
next\n\
\' INFO : There are currently 12 item(s) selected.\n\
\' INFO : Camera_Root\n\
\' INFO : Camera\n\
\' INFO : Camera_Interest\n\
\' INFO : light\n\
\' INFO : top\n\
\' INFO : middle_1\n\
\' INFO : middle_2\n\
\' INFO : mid_2_bottom_1\n\
\' INFO : way_low\n\
\' INFO : mid_2_bottom_2\n\
\' INFO : middle_3\n\
\' INFO : mid_3_bottom\n\
\n\
\n\
\' Now delete the entire middle_2 branch\n\
DeleteObj \"B:middle_2\"\n\
app.LogMessage \"There are currently \" &amp; app.Selection.Count &amp; \" item(s) selected.\"\n\
for each sel_item in app.Selection\n\
	app.LogMessage sel_item.Name\n\
next\n\
\' INFO : There are currently 8 item(s) selected.\n\
\' INFO : Camera_Root\n\
\' INFO : Camera\n\
\' INFO : Camera_Interest\n\
\' INFO : light\n\
\' INFO : top\n\
\' INFO : middle_1\n\
\' INFO : middle_3\n\
\' INFO : mid_3_bottom\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAD267DAFDEB0A4CB722B5BE63CEBF6C-002C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-152C5D57-FB06-48FC-8340-FD9E941B0905\"></a></span>Python Example: Testing selected items for Hierarchy\n\
                  </h3> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C669DFBD-4EE8-4C3B-B3A2-BF9D1BC60CDB\"></a></span>This example demonstrates how to iterate over the selection and test whether or not\n\
                     each item is node-selected: \n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
app = Application\n\
\n\
# --------------------------\n\
#	Convenience function\n\
#\n\
def SetUpMultiLevelNulls() :\n\
	app.NewScene(\"\", 0)\n\
	app.CreateModel(\"\", \"TopDog\")\n\
	\n\
	# Create a hierarchy to test\n\
	app.CreateModel(\"\", \"NextLevel\")\n\
	app.GetPrim(\"Null\", \"HigherLevel\", \"NextLevel\")\n\
	targetObj = app.GetPrim(\"Null\", \"MidLevel\", \"NextLevel.HigherLevel\")\n\
	app.GetPrim(\"Null\", \"LowerLevel\", \"NextLevel.MidLevel\")\n\
	app.GetPrim(\"Null\", \"BottomFeeder\", \"NextLevel.LowerLevel\")\n\
	app.CreateModel(app.ActiveSceneRoot.Models(0), \"TopDog\")\n\
\n\
	\n\
	return targetObj\n\
\n\
\n\
# --------------------------\n\
#	Hierarchical selection\n\
#\n\
def TestSelection() :\n\
	for thing in app.Selection :\n\
		if ( thing.BranchFlag ) :\n\
			app.LogMessage( thing.Name + \" is selection in BRANCH\" )\n\
		else :\n\
			app.LogMessage( thing.Name + \" is selection in NODE\" )\n\
\n\
\n\
# --------------------------\n\
#	Logging results\n\
#\n\
# NODE-selected\n\
refObj = SetUpMultiLevelNulls()\n\
app.SelectObj( refObj.FullName )\n\
TestSelection()	# INFO : MidLevel is selection in NODE\n\
\n\
# BRANCH-selected\n\
refObj = SetUpMultiLevelNulls()\n\
app.SelectObj( \"B:\" + refObj.FullName )\n\
TestSelection()	# INFO : MidLevel is selection in BRANCH\n\
\n\
# TREE-selected\n\
refObj = SetUpMultiLevelNulls()\n\
app.SelectObj( \"B:\" + refObj.FullName, \"TREE\" )\n\
TestSelection()	# INFO : HigherLevel is selection in BRANCH\n\
\n\
# MODEL-selected\n\
refObj = SetUpMultiLevelNulls()\n\
app.SelectObj( \"B:\" + refObj.FullName, \"MODEL\" )\n\
TestSelection()	# INFO : NextLevel is selection in BRANCH\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";