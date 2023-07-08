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
      <meta name=\"topicid\" content=\"GUID-3B5FF6E0-5C9D-4F81-B231-3E521A79A107\" />\n\
      <meta name=\"indexterm\" content=\"Single-level Query\" />\n\
      <meta name=\"indexterm\" content=\"Example of Showing Local SRT Values for Selected Objects\" />\n\
      <meta name=\"indexterm\" content=\"Example: Line script\" />\n\
      <meta name=\"indexterm\" content=\"Example: Column script\" />\n\
      <meta name=\"indexterm\" content=\"Example: Query file\" />\n\
      <meta name=\"indexterm\" content=\"Single-level Queries with Custom Information\" />\n\
      <meta name=\"indexterm\" content=\"Example of Showing Geometry Information for All Scene Objects\" />\n\
      <meta name=\"indexterm\" content=\"Example: Row Script\" />\n\
      <meta name=\"indexterm\" content=\"Example: Column Script\" />\n\
      <meta name=\"indexterm\" content=\"Example: Query file\" />\n\
      <meta name=\"indexterm\" content=\"Relational Queries\" />\n\
      <meta name=\"indexterm\" content=\"Example of Showing Cluster List s for All Selected Objects\" />\n\
      <meta name=\"indexterm\" content=\"Example: Query file\" />\n\
      <meta name=\"indexterm\" content=\"Example: Relation Object script\" />\n\
      <meta name=\"indexterm\" content=\"Example: Second-level column script\" />\n\
      <meta name=\"indexterm\" content=\"Example: First-level Column Script\" />\n\
      <meta name=\"indexterm\" content=\"Sorting Queries\" />\n\
      <meta name=\"indexterm\" content=\"Script Column Syntax\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<line_def&gt;, <col_def&gt;\" />\n\
      <meta name=\"keyword\" content=\"<line_def&gt;\" />\n\
      <meta name=\"keyword\" content=\"<col_def&gt;\" />\n\
      <title>Scripting for the Spreadsheet Queries</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Application\", \"si_cpp/classXSI_1_1Application.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"version\", \"si_cpp/group__RenderMapDefine.html#gad6034d1c8c050eba0cf6533a8e6f3785\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3B5FF6E0-5C9D-4F81-B231-3E521A79A107\"></a></span><div class=\"head\">\n\
            <h1>Scripting for the Spreadsheet Queries </h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-000C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8B3E10BE-518A-48B5-867C-49584244215D\"></a></span> Single-level Query\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-000D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-EC42A771-3E09-452B-B1DB-77E7E8A3735F\"></a></span> Example of Showing Local SRT Values for Selected Objects\n\
                  </h3>  \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-000E\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-15589B9C-FC5E-4036-9C60-B10EE974F28A\"></a></span> Example: Line script\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A301A57D-983B-4AEB-87E9-C669F885B80A\"></a></span>The first line of this script returns the list of selected items, making sure that\n\
                        branch-selected items are turned into node selections (SelectChildNodes). The spreadsheet\n\
                        scripts must return arrays, so this is why the collection returned by GetValue(\"SelectionList\")\n\
                        and then SelectChildNodes must be transferred to an array in a loop. The array must\n\
                        be dimensioned with the right number of elements. \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-23A10683-E92B-4AED-BB75-B441A54D54FB\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-9A3C0E78-396A-45F5-B810-6353A620792F\"></a></span>If you have errors in your script as you run the query, the errors will appear in\n\
                              the Log window in the script editor. You can use logmessage calls to help debug scripts.\n\
                              \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Function Current_Selection ()\n\
	Dim R(), SelList\n\
\n\
	Set SelList = GetValue( \"SelectionList\" )\n\
	if SelList.Count = 0 then\n\
		Current_Selection = R\n\
		Exit Function\n\
	end if\n\
\n\
	Set SelList = SelectChildNodes( SelList, False )\n\
	Dim i\n\
	ReDim R(SelList.Count - 1)\n\
	for i = 0 to SelList.Count - 1\n\
		R(i) = SelList(i)\n\
	next\n\
	Current_Selection = R\n\
End Function</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-000F\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-FC1F3D09-261E-45B9-ABA7-C4E4713B7A34\"></a></span> Example: Column script\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5189B29E-3C68-4BF9-A022-82C2E20DF974\"></a></span>Column scripts also return arrays, but given that they do not return a list of scene\n\
                        elements, but rather a description of which parameter each column must show, a special\n\
                        syntax is required. As this example shows, the syntax is relatively simple because\n\
                        all columns display standard Softimage parameters. Each element in the array is a\n\
                        string composed of three values: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_BF094620A3CF49D1853A0B6C352B20EE\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-9890E43A-3F0E-4605-84A6-EFC2FCEDA508\"></a></span>The parameter to display (for example, kine.local.posx, which will be appended to\n\
                              each item from each line). \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7976675-5751-4D20-AEE1-8DFFE6840D54\"></a></span>The type of cell. In this case \'Default\' is sufficient because Softimage knows what\n\
                              the type of the parameter is (float, integer, boolean, string. etc.) \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-BAA93A98-F54D-49EC-84FB-59F9F91E49D1\"></a></span>The label to display at the top of the column. If left empty, the column title will\n\
                              use the name of the parameter. This is why for the first column containing the name\n\
                              of object (see example) we can omit the type and label information. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-80FB54DA-BFFA-4CBD-A129-D04F64549992\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-93A0083A-4B7B-4F66-8088-F33044B23F72\"></a></span>Be careful when dimensioning the array because VBScript deals with this a bit strangely:\n\
                              <span class=\"code\" translate=\"no\">Dim(9)</span> will declare an array that goes from 0 to 9, thus containing 10 items. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Function Object_Xfo ()\n\
	Dim R(9)\n\
	R(0) = \"Name\"\n\
	R(1) = \"kine.local.posx:Default:Local posx\"\n\
	R(2) = \"kine.local.posy:Default:Local posy\"\n\
	R(3) = \"kine.local.posz:Default:Local posz\"\n\
	R(4) = \"kine.local.rotx:Default:Local rotx\"\n\
	R(5) = \"kine.local.roty:Default:Local roty\"\n\
	R(6) = \"kine.local.rotz:Default:Local rotz\"\n\
	R(7) = \"kine.local.sclx:Default:Local sclx\"\n\
	R(8) = \"kine.local.scly:Default:Local scly\"\n\
	R(9) = \"kine.local.sclz:Default:Local sclz\"\n\
	Object_Transformations = R\n\
End Function</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0010\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-CB4F7AD7-5407-49AE-9292-8444A6EFFDC6\"></a></span> Example: Query file\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8FFDD5B0-CE5B-4F38-8BEB-EEF87CD44FE8\"></a></span>The query file is a simple file that can be loaded in the Softimage spreadsheet to\n\
                        tell it which scripts to use. It can be stored anywhere. \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_68EEC415B6844AB48F6FCEF6EFFD5C01\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C0BDE4A4-81C7-4B21-83F5-C517BEAB5E16\"></a></span>The row script is defined with the tag <span class=\"keyword\">&lt;line_def&gt;</span>. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-31BB249A-D850-4EBA-9EB0-435813E67FA0\"></a></span>The column script with the tag <span class=\"keyword\">&lt;col_def&gt;</span>. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-200FC295-CF03-4DA7-91A3-28EC4E596613\"></a></span>For each tag, you supply the scripting language being used, the file where the script\n\
                        will be found, and the name of the function to call. \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A085172D-9BC5-4B6C-A9C5-6D066ACEDC51\"></a></span>The script file can be any name, but it must be placed under the ..\\Application\\DSScripts\n\
                        folder (could be an absolute path too if needed). \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Ex: Object_Xfo_Selected.query\n\
&lt;<a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>&gt;{1}\n\
&lt;line_def&gt;\n\
{\n\
	vbscript\n\
	spreadsheet.vbs\n\
	Current_Selection\n\
}\n\
&lt;col_def&gt;\n\
{\n\
	vbscript\n\
	spreadsheet.vbs\n\
	Object_Xfo\n\
}</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0011\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C63ACAA8-795F-4E10-A707-933F158D44A6\"></a></span> Single-level Queries with Custom Information\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0012\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-0F44E030-0694-4159-BC1F-E1AF4A2A96A7\"></a></span> Example of Showing Geometry Information for All Scene Objects\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B70F0DE6-4685-47FC-AF1F-E47D8685A389\"></a></span>This example query counts the number of triangles, points, edges (segments) and polygons\n\
                     in the scene. This is the Geometry query used by the spreadsheet in Softimage. Given\n\
                     that there is no specific scene parameter that holds the number of each component,\n\
                     the spreadsheet must be given functions that return these values. These functions\n\
                     can be used to calculate any type of measure, such as the distance of an object to\n\
                     the camera, its the volume, etc. \n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0013\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-6C3E0316-6541-4422-A697-0D0E6CE0D168\"></a></span> Example: Row Script\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-022DC7A4-4CC0-45F2-A706-A183153EE655\"></a></span>Since you want all of the elements in the scene, the row script will be like the one\n\
                        shown below. The <span class=\"code\" translate=\"no\">SIFilter</span> command ensures we get only the 3D objects from the selection \"*\". \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Function All_SceneObject ()\n\
	Dim R(), sceneObjectList\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> sceneObjectList =  SIFilter( \"*\", \"sceneobject\",,siQuickSearch)\n\
\n\
	if sceneObjectList.Count = 0 then\n\
		All_SceneObject = R\n\
		Exit Function\n\
	end if\n\
End Function</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0014\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-115D5221-5316-4E86-B353-19FC8C70202F\"></a></span> Example: Column Script\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AAFC3C82-9F32-417C-8175-E3709A730CA9\"></a></span>The columns for cells that will contain custom information are defined using the following\n\
                        syntax: \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_89379F74E925473E9699573EB40CA4ED\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C8241640-A897-4665-9673-C3787ED011F8\"></a></span>Name string that will be used as the label of the column. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-F615D647-9C46-496D-A936-A4EF3A33A6B7\"></a></span>Script as the type of the cell. \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-0025A286-94D1-4F6B-9235-92B73A0A28D3\"></a></span>&lt;Script Language&gt;~&lt;script filename&gt;~&lt;name of the function to call&gt; \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Function Object_Geometry ()\n\
	Dim R(7)\n\
	R(0) = \"Name\"\n\
	R(1) = \"Type:Script:vbscript~spreadsheet.vbs~GetObjType\"\n\
	R(2) = \"Triangles:Script:vbscript~spreadsheet.vbs~GetNbrTriangles\"\n\
	R(3) = \"Points:Script:vbscript~spreadsheet.vbs~GetNbPoints\"\n\
	R(4) = \"Segments:Script:vbscript~spreadsheet.vbs~GetNbSegments\"\n\
	R(5) = \"Facets:Script:vbscript~spreadsheet.vbs~GetNbFacets\"\n\
	R(6) = \"Particles:Script:vbscript~spreadsheet.vbs~GetNbParticles\"\n\
	R(7) = \"geomapprox.gapproxmosl:Default:Subdiv\"\n\
	Object_Geometry = R\n\
End Function</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8E593B6-65A1-49FF-ADA7-1549B2D6DB92\"></a></span>The following script functions are the ones used by the script column query above.\n\
                        These functions are called for each script cell and for each row. Results are cached\n\
                        for operations like sorting. \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-7027B727-8B8B-4508-8E19-F37943DD13A1\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-14770C4F-DB35-465E-9F46-C5E426C4937F\"></a></span> The function receives a string that corresponds to the object for each line. It must\n\
                              be converted into an object for the object model. The example here is using the <span class=\"code\" translate=\"no\">GetObject</span> function below, but other methods to do this exists. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'----------------------------------------------------------------------\n\
\' GetObject\n\
\' Function that converts an object string into a scripting object \n\
\' (for the object model)\n\
\'----------------------------------------------------------------------\n\
Function GetObject (in_obj)\n\
	GetObject = \"Nothing\"\n\
	if IsEmpty(in_obj) Then\n\
		exit function\n\
	end if\n\
\n\
	dim l_coll\n\
\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_coll = CreateObject(\"XSI.Collection\")\n\
	l_coll.Add in_obj\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> GetObject = l_coll(0)  \' returns a X3DObject\n\
End Function\n\
\n\
Function GetNbrTriangles( in_obj )\n\
	GetNbrTriangles = 0\n\
	Dim l_obj \n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_obj = GetObject( in_obj )\n\
	if l_obj.type = \"polymsh\" Or l_obj.type = \"surfmsh\" Or l_obj.type = \"crvlist\" then\n\
		GetNbrTriangles = GetNbTriangles( in_obj )\n\
	end if\n\
End Function\n\
\n\
Function GetNbPoints( in_obj )\n\
	GetNbPoints = 0\n\
	Dim l_obj, l_geom\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_obj = GetObject( in_obj )\n\
	if l_obj.type = \"polymsh\" Or l_obj.type = \"surfmsh\" Or l_obj.type = \"crvlist\" then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_geom = l_obj.obj\n\
		GetNbPoints = l_geom.nb0D\n\
	end if\n\
End Function\n\
\n\
Function GetNbSegments( in_obj )\n\
	GetNbSegments = 0\n\
	Dim l_obj, l_geom\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_obj = GetObject( in_obj )\n\
	if l_obj.type = \"polymsh\" then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_geom = l_obj.obj\n\
		GetNbSegments = l_geom.nb1D\n\
	end if\n\
End Function\n\
\n\
Function GetNbFacets( in_obj )\n\
	GetNbFacets = 0\n\
	Dim l_obj, l_geom\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_obj = GetObject( in_obj )\n\
	if l_obj.type = \"polymsh\" Or l_obj.type = \"surfmsh\" then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_geom = l_obj.obj\n\
		GetNbFacets = l_geom.nb2D\n\
	end if\n\
End Function\n\
\n\
Function GetNbParticles( in_obj )\n\
	Dim myType, l_obj, l_part\n\
\n\
	GetNbParticles = 0\n\
	myType = GetObjType( in_obj )\n\
	if myType = \"cloud\" then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_obj = GetObject( in_obj )\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_part = l_obj.particles\n\
		GetNbParticles = l_part.count\n\
	end if\n\
End Function</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0015\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-2384382E-7758-48CC-8C9B-3ABF73825887\"></a></span> Example: Query file\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2203F47F-72A5-48BF-8031-959A19B48C6C\"></a></span>Finally, the query file, as you may have already guessed, looks like this: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Object_Geometry_All.query\n\
&lt;<a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>&gt;{1}\n\
&lt;line_def&gt;\n\
{\n\
	vbscript\n\
	spreadsheet.vbs\n\
	All_SceneObject\n\
}\n\
&lt;col_def&gt;\n\
{\n\
	vbscript\n\
	spreadsheet.vbs\n\
	Object_Geometry\n\
}\n\
&lt;sort_order&gt;\n\
{\n\
	asc:-1\n\
}</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0016\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C66DD401-5B8E-40BB-8D02-5AFCB2CB0109\"></a></span> Relational Queries\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0017\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-3AE5D0FB-910E-43DC-8743-861938F340C7\"></a></span> Example of Showing Cluster List s for All Selected Objects\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7C73D414-A316-41A9-AE03-AD56867DBA98\"></a></span>This example shows a two-level query. The first level lists all of the selected objects,\n\
                     which also display some visibility information. For each of these objects, their clusters\n\
                     will appear, if any. For each of these clusters, their name, their type and number\n\
                     of elements will appear. \n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0018\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-5D452DCF-1878-440D-B046-C20AA83206CC\"></a></span> Example: Query file\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D6B35108-7D50-45F9-B28D-97DFC0547D26\"></a></span>This time, start with the query file. As you can see, there are three additional tags:\n\
                        \n\
                     </p> <span class=\"anchor_wrapper\"><a name=\"UL_E5827D75759C40BFA830BDB17166A27A\"></a></span><ul>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-87CC731C-AD53-4C96-94D7-57FE4A95C3A4\"></a></span>&lt;relation&gt;. This gives the name of the relation that you want to appear in the spreadsheet.\n\
                              \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D8A8527-BBB7-409D-89AB-E8801FFFA1C1\"></a></span>&lt;relation_object_def&gt;. This provides a script which will, for each item provided by\n\
                              the &lt;line_def&gt; script, define the row of second-level items to display in the spreadsheet\n\
                              \n\
                           </p> \n\
                        </li>\n\
                        <li> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-695C48B5-1D34-43AA-8C38-DD047B6B9F44\"></a></span>&lt;relation_param_def&gt;. This provides a script which will define the columns we want\n\
                              to display for the second-level items. Nothing prevents you from using the same script\n\
                              as the &lt;col_def&gt; tag; it just depends on the items you want to appear in each row\n\
                              and what columns you want to see. \n\
                           </p> \n\
                        </li>\n\
                     </ul> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
&lt;<a href=\"javascript:void(0)\" data=\"version\" class=\"a_multireflink\">version</a>&gt;{1}\n\
&lt;line_def&gt;\n\
{\n\
	vbscript\n\
	spreadsheet.vbs\n\
	Current_Selection\n\
}\n\
&lt;col_def&gt;\n\
{\n\
	vbscript\n\
	spreadsheet.vbs\n\
	Object_Visibility\n\
}\n\
&lt;relation&gt;\n\
{\n\
	Clusters\n\
}\n\
&lt;relation_object_def&gt;\n\
{\n\
	vbscript\n\
	spreadsheet.vbs\n\
	ObjectClusters\n\
}\n\
&lt;relation_param_def&gt;\n\
{\n\
	vbscript\n\
	spreadsheet.vbs\n\
	Cluster_Info\n\
}\n\
&lt;sort_order&gt;\n\
{\n\
	asc:-1\n\
}</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-0019\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-F62DE235-2BB1-40FC-AA0C-750FB2397800\"></a></span> Example: Relation Object script\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B8FEA9A-B862-4264-8CFD-7333754CFB5C\"></a></span>This script receives the objects for each row and must return an array that contains\n\
                        the second-level items. Other than that, the script can pretty much do anything that\n\
                        regular scripting in Softimage can do, so you can define a wide variety of relations\n\
                        (for example, objects that are close to the camera, objects that are blue, clusters\n\
                        that have properties, etc.). \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DD843259-61A8-4A4A-BE39-3CAC88C244F0\"></a></span>In the example below, the script (using the object model and not a command) accesses\n\
                        the geometry of the object, upon which we can find the list of clusters. It excludes\n\
                        texture support objects because these have a geometry but do not hold a cluster container.\n\
                        \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Function ObjectClusters( in_obj )\n\
	Dim l_obj, i, l_geom, l_clusters, l_cluster\n\
\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_obj = GetObject( in_obj )\n\
\n\
	Dim l_cArray()\n\
	if typename(l_obj) = \"X3DObject\" and not (l_obj.type = \"Texture Support\") then\n\
\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_geom = l_obj.activeprimitive.geometry\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_clusters = l_geom.clusters\n\
\n\
		if ( l_clusters.count &gt; 0 ) then\n\
			ReDim l_cArray( l_clusters.count - 1 )\n\
			for i = 0 to l_clusters.count - 1\n\
				l_cArray(i) = l_clusters.Item(i)\n\
			next\n\
		else\n\
			ReDim l_cArray(0)\n\
		end if\n\
	else\n\
		ReDim l_cArray(0)\n\
	end if\n\
	 \n\
	ObjectClusters = l_cArray\n\
end function</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-001A\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-D52AFE9E-8199-4844-8C56-2D35CAA44EB8\"></a></span> Example: Second-level column script\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-32B6CF74-CB60-4E9D-B5B3-E55E2B594F76\"></a></span>The script displays the name, type, and number of components for each cluster. There\'s\n\
                        nothing specifically new here, so here are the needed scripts. \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Function Cluster_Info ()\n\
	Dim R(2)\n\
	R(0) = \"Name\"\n\
	R(1) = \"Type:Script:vbscript~spreadsheet.vbs~GetObjType\"\n\
	R(2) = \"Components:Script:vbscript~spreadsheet.vbs~GetNbClsComponents\"\n\
\n\
	Cluster_Info = R\n\
End Function\n\
\n\
Function GetObjType (in_obj)\n\
	Dim l_obj\n\
\n\
	GetObjType = \" \"\n\
	if IsEmpty(in_obj) Then\n\
		exit function\n\
	end if\n\
\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_obj = GetObject( in_obj )\n\
	GetObjType = l_obj.Type\n\
End Function\n\
\n\
Function GetNbClsComponents( in_cls )\n\
	Dim l_cls, l_elems\n\
\n\
	GetNbClsComponents = 0\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_cls = GetObject( in_cls )\n\
	if typename(l_cls) = \"Cluster\" then\n\
		<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> l_elems = l_cls.elements\n\
		GetNbClsComponents = l_elems.count\n\
	end if\n\
End Function</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-001B\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-9B07F1C3-73AE-4C40-AC5B-B4DBEC65871C\"></a></span> Example: First-level Column Script\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-8B5795B1-9484-41EA-9D8F-263FEFF4E039\"></a></span>Finally, the first-level columns use the following script. It uses an alternate syntax\n\
                        for the cell: instead of giving a label explicitly for the column, we use the GUID\n\
                        identification of the parameter (which can be found in the appropriate SPDL file).\n\
                        This seeks and displays the appropriate parameter name for you. \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Function Object_Visibility ()\n\
	Dim R(4)\n\
	R(0) = \"Name\"\n\
	R(1) = \"Type:Script:vbscript~spreadsheet.vbs~GetObjType\"\n\
	R(2) = \"visibility.viewvis:Default:{D636F4D0-D94B-11D1-B0ED-00A024C79287}\"\n\
	R(3) = \"visibility.rendvis:Default:{A9D242E0-D948-11D1-B0ED-00A024C79287}\"\n\
	R(4) = \"visibility.selectability:Default:{4256027B-C691-11d2-B740-0008C7A011A6}\"\n\
	Object_Visibility = R\n\
End Function</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-001C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0E4B7858-5337-4838-A1D2-42F69CFD2757\"></a></span> Sorting Queries\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CF6116F3-D3FF-446D-9E5E-2A50B9F32472\"></a></span>One final thing we haven\'t covered is how to sort the results that are presented to\n\
                  the user when the query gets executed. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-4365EB53-24B3-4B80-BEDA-079B62E28846\"></a></span>By default you can use the following information for the Sort tag. This will sort\n\
                  based on the line header. Use <span class=\"code\" translate=\"no\">asc</span> for ascendant sort and des for descendent. \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
&lt;sort_order&gt;\n\
{\n\
	asc:-1\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D090E300-C01C-4C10-8332-BF964535F79D\"></a></span>However you can have the query sorted on specific columns. In the example below, the\n\
                  query sorts in ascending order the eighth column, then the third in ascending order,\n\
                  and so on. Of course, the user can then sort the spreadsheet using the contextual\n\
                  menu sort command on any column (only one column sort can be sorted for now). \n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">&lt;sort_order&gt;\n\
{\n\
	asc: 8\n\
	des: 3\n\
	asc:-1\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS5EE8E32878D4074790F31E2B430E2186-001D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E1D42EB4-EEC5-4C03-ADB2-1E67CEB77CD2\"></a></span> Script Column Syntax\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A42F09FB-F157-486D-8348-3185A4B787DF\"></a></span>Here is a summary of the currently available syntax for the script columns, which\n\
                  we have seen in the examples in this case study. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5E5C523F-4D51-4522-9E8B-724769F7A759\"></a></span>A cell description can be given as one of the following options: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_7E260E98E68640D2A98A1C6590FC810C\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-082D95E6-9405-4D93-A605-3E4F15FFF6ED\"></a></span>\"&lt;param name&gt;\" \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F09AE17F-49B3-426D-AE05-D8F750C0E8AB\"></a></span>\"&lt;param name&gt;:&lt;cell type&gt;\" \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-11C57A5A-7F3E-49A9-883F-5A39D4E2827C\"></a></span>\"&lt;param name&gt;:&lt;cell type&gt;:&lt;column label&gt;\" \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-57FFDD50-34EF-4771-97E2-E485C394E1CC\"></a></span>\"&lt;param name&gt;:&lt;cell type&gt;:&lt;param guid&gt;\" (automatic column labeling) \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DEA77EA-594A-46A3-9AEC-050855E56622\"></a></span>\"&lt;param name&gt;:Script:&lt;script language&gt;~&lt;script filename&gt;~&lt;name of the function to\n\
                        call&gt;\" \n\
                     </p> \n\
                  </li>\n\
               </ul> <span class=\"anchor_wrapper\"><a name=\"TABLE_73545F1089B14D3E85BABA2F35192278\"></a></span><div class=\"table_Ruled\">\n\
                  <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                     <colgroup>\n\
                        <col align=\"left\" />\n\
                        <col align=\"left\" />\n\
                     </colgroup>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-624D3A9E-72B8-4CCB-A7BC-EEBA853A88E7\"></a></span><p class=\"table-body\">&lt;param name&gt; </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-DA7FF000-CAB0-4E9E-A2A1-0E5A434D01DA\"></a></span><p class=\"table-body\">Name of the parameter as you would see in the script log, without the leading dot\n\
                              (ex: kine.posx). \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-86B54705-EC21-4043-9359-405B218E7D64\"></a></span><p class=\"table-body\">&lt;cell type&gt; </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BFD4882E-2E71-4A85-A02B-8330A0189391\"></a></span><p class=\"table-body\">\"Default\" or \"Script\". The are other types but we suggest not using them for now...\n\
                              \n\
                           </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledOddRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-31B8E7F4-7FAC-45D0-94B8-EDFAC954E43D\"></a></span><p class=\"table-body\">&lt;column label&gt; </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9216F67E-A14D-4711-B0C6-BB4045E63050\"></a></span><p class=\"table-body\">String that will be used as the column header </p> \n\
                        </td>\n\
                     </tr>\n\
                     <tr class=\"ruledEvenRow\">\n\
                        <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7D237DAC-F47E-42DC-9DF0-44378E0F4F31\"></a></span><p class=\"table-body\">&lt;param guid&gt; </p> \n\
                        </td>\n\
                        <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2A85F639-B9D0-4514-BD25-51484891D2FA\"></a></span><p class=\"table-body\">GUID associated with the parameter, as found in SPDL files. </p> \n\
                        </td>\n\
                     </tr>\n\
                  </table>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_5B0F6C8642644D989B8D927F069AB400\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-60709F2A-16FD-4446-BFB8-F7D7E8039F74\"></a></span>Installing the Spreadsheet Queries\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B75642EF-3D7C-4088-9294-1407E97EFD27\"></a></span> <span class=\"anchor_wrapper\"><a name=\"GUID-EBEA7381-9FCA-4F69-A1B0-2C2E7E1420B5\"></a></span><p class=\"list-intro\"><span class=\"anchor_wrapper\"><a name=\"GUID-68C5CF7C-E922-4557-9D6D-89BA1BB1C2E0\"></a></span>After you have written the queries and the query handler support scripts, perform\n\
                     these steps:\n\
                  </p>\n\
                  <ol type=\"1\" start=\"1\">\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-68268ED3-D8E7-4570-A078-A74A9618DB1E\"></a></span>Put the scripts in the following location: \n\
                        </p> <span class=\"code\" translate=\"no\">$factory/<a href=\"javascript:void(0)\" data=\"Application\" class=\"a_multireflink\">Application</a>/DSScripts</span> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-D55447C4-6471-4AD3-B50F-972C3B89C444\"></a></span>Put the queries in the following location: \n\
                        </p> <span class=\"code\" translate=\"no\">$factory/<a href=\"javascript:void(0)\" data=\"Application\" class=\"a_multireflink\">Application</a>/Queries</span> \n\
                     </li>\n\
                  </ol> \n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";