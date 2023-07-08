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
      <meta name=\"topicid\" content=\"GUID-7FBADAFE-A951-428C-8E74-E583BE00755F\" />\n\
      <meta name=\"indexterm\" content=\"Defining Your Workspace\" />\n\
      <meta name=\"indexterm\" content=\"scripting: defining your workspace\" />\n\
      <meta name=\"indexterm\" content=\"workspace: in scripting\" />\n\
      <meta name=\"indexterm\" content=\"To get the root model of the scene\" />\n\
      <meta name=\"indexterm\" content=\"To get the active scene\" />\n\
      <meta name=\"indexterm\" content=\"To get the active project\" />\n\
      <meta name=\"indexterm\" content=\"Identifying Your Object\" />\n\
      <meta name=\"indexterm\" content=\"scripting: identifying your object\" />\n\
      <meta name=\"indexterm\" content=\"object model: how to identify the object\" />\n\
      <meta name=\"indexterm\" content=\"Adding Something to Your Scene\" />\n\
      <meta name=\"indexterm\" content=\"scripting: adding an object with the object model\" />\n\
      <meta name=\"indexterm\" content=\"object model: adding an object\" />\n\
      <meta name=\"indexterm\" content=\"scripting: finding an object with the object model\" />\n\
      <meta name=\"indexterm\" content=\"object model: finding an object\" />\n\
      <meta name=\"indexterm\" content=\"To access the first object starting with &#34;cube&#34;\" />\n\
      <meta name=\"indexterm\" content=\"To access all lights under the scene root using the Type parameter\" />\n\
      <meta name=\"indexterm\" content=\"To find the number of null primitives in the scene\" />\n\
      <meta name=\"indexterm\" content=\"Working with Parameters\" />\n\
      <meta name=\"indexterm\" content=\"Getting Information about a Specific Object\'s Parameters\" />\n\
      <meta name=\"indexterm\" content=\"To print out a list of information on all parameters on an object\" />\n\
      <meta name=\"indexterm\" content=\"Accessing a Specific Parameter by its Name with the Object Model\" />\n\
      <meta name=\"indexterm\" content=\"To get the camera visibility property (parameter set)\" />\n\
      <meta name=\"indexterm\" content=\"What You Should Know about the Range of a Parameter\" />\n\
      <meta name=\"indexterm\" content=\"To find out what the range is for a given parameter\" />\n\
      <meta name=\"indexterm\" content=\"Getting and Setting Object Data\" />\n\
      <meta name=\"indexterm\" content=\"scripting: getting and setting object data\" />\n\
      <meta name=\"indexterm\" content=\"object model: getting and setting data\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using the Softimage Object Model for Novices</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-7FBADAFE-A951-428C-8E74-E583BE00755F\"></a></span><div class=\"head\">\n\
            <h1>Using the Softimage Object Model for Novices</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A283D13-59DE-4120-95BE-75D3AB0B8260\"></a></span>Using the object model to write code usually consists of three steps:\n\
            </p><span class=\"anchor_wrapper\"><a name=\"GUID-D9FA3730-2539-4319-9E4F-DFBC5FE21E67\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0443BDA6-7FB7-4208-BFF6-9CAE31437E99\"></a></span>Indicate where you are working—see <span class=\"char_link\"><a href=\"#!/url=./files/script_intro_UsingtheXSIObjectModelforNovices.htm#WS74F57519B241D54691EA264324B2CEC7-000C\">Defining Your Workspace</a></span>.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-33A80672-7041-4865-9769-97F7A4B516BB\"></a></span>Identify what you are working on—see <span class=\"char_link\"><a href=\"#!/url=./files/script_intro_UsingtheXSIObjectModelforNovices.htm#WS74F57519B241D54691EA264324B2CEC7-0010\">Identifying Your Object</a></span>.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D47F04E0-2B4A-4B84-AB63-87EC4C18373B\"></a></span>Explain what you want to do with it or know about it—see <span class=\"char_link\"><a href=\"#!/url=./files/script_intro_UsingtheXSIObjectModelforNovices.htm#WS74F57519B241D54691EA264324B2CEC7-001D\">Getting and Setting Object Data</a></span>.\n\
                  </p> \n\
               </li>\n\
            </ol>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-03CE1E4E-3F5C-45DC-A569-D6DE2BD37D61\"></a></span>For more information on using the components of the object model, see individual help\n\
               in the C++ API Reference or the <a href=\"#!/url=./si_cmds/_scriptref.html\">Commands and Scripting Reference</a>.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-000C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-020EC89F-6152-482E-99A6-8874AB697EE3\"></a></span> Defining Your Workspace\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-46C3213B-D1F1-4466-A331-0A02A7211ECB\"></a></span>The first thing you need to indicate is where to look for the object you want to deal\n\
                  with. Typically you start at the scene root.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-000D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-150EBED4-03FA-4A3B-84DA-8766310B59D8\"></a></span> To get the root model of the scene\n\
                  </h3>  \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E0E520E7-8A78-46A3-AE26-11B27DF5EBE9\"></a></span>The Application object contains a property that accesses the root directly:\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application.ActiveSceneRoot</pre></div> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-D3589ACF-C4F4-46C0-BB3D-070D810161CE\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-B75444BD-E1F6-4D15-96C5-DB60D2BE8524\"></a></span>If your script is running inside Softimage, using the word <em class=\"mild\">Application</em> is optional. This is because the Application object is global. That means that these\n\
                                 two statements are equivalent:\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
ActiveSceneRoot\n\
Application.ActiveSceneRoot</pre></div> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-C7AB2FB2-0613-4E6B-A6BF-731C99E6ED5C\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-F5E2322E-2A64-4F57-958B-ACDC82EC40C2\"></a></span>Use a Set statement to assign objects to variables, so that you can refer to them\n\
                                 quickly in the rest of your procedure. You can combine Set statements to suit your\n\
                                 needs. The following statement gets an object pointer to the scene root:\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\"><a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oRoot = ActiveSceneRoot</pre></div> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-000E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-D6762570-875E-44D9-83FB-36AF2A75A29C\"></a></span> To get the active scene\n\
                  </h3>  \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D1E7A87-DF94-4C7C-ABED-BAE5164CAFB8\"></a></span>You can access the ActiveScene property on the Project object:\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application.ActiveProject.ActiveScene</pre></div> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-000F\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-534DF0B0-915C-46C6-BEBE-BBDAC9EC9FB1\"></a></span> To get the active project\n\
                  </h3>  \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-8AEE24D7-2225-4233-8347-4065F48CA513\"></a></span>You can access the ActiveProject property on the Application object:\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application.ActiveProject</pre></div> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-601A210B-C709-4A37-91F0-F63491A3F1A4\"></a></span> Identifying Your Object\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D269D48-F5ED-4083-8146-0CAD503F0C22\"></a></span>After indicating where to look, you need to identify which object you want to work\n\
                  with. This process is different depending on whether you need to add an object to\n\
                  the scene or work with an existing object.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0011\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-5082A20F-FCCB-4FC6-9E50-A67932700EC4\"></a></span> Adding Something to Your Scene\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9529EB86-BA75-4DBC-80B2-31F6A9EAF46F\"></a></span>You can add a 3D object to your scene by using a method of whatever object will be\n\
                     its parent (typically the root model). For example, if you want to create a polygon\n\
                     mesh sphere, you need to use the AddGeometry method of the root model object:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oSphere = ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-52030D41-90BB-4197-A8B9-F95E2CDC9CC8\"></a></span>You can also use scene items themselves as parents of other objects. For example,\n\
                     if you want to add a phong material to your new sphere, you could add this statement\n\
                     to the previous one:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oMaterial = oSphere.AddMaterial(\"Phong\")</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0012\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-B5D09261-4296-4C83-A97F-ABE4E7AFABB6\"></a></span>Working with an Existing Softimage Object\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BB287A10-4637-4D5C-A768-B89E3FAEDE65\"></a></span>To find objects in the scene, you need to use the FindChild or FindChildren method\n\
                     of the model you want look under. Both of these methods allow you to use several different\n\
                     ways of searching (criteria); the only difference is that FindChild returns the first\n\
                     object it finds that matches the criteria, and FindChildren returns a collection of\n\
                     every object that matches.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EA698589-4453-4CD5-877C-CEC3009CB937\"></a></span>You can search using any of these criteria:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-AFC4DACD-D43D-49B9-8288-4CDB33912087\"></a></span> <em class=\"strong\">Name</em>—the name of the object as a string expression. This can include wildcards, so that\n\
                           any object beginning with <span class=\"code\" translate=\"no\">\"co*\"</span> is a potential match.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-6052EC37-4787-4CAF-A206-738D53111062\"></a></span> <em class=\"strong\">Type</em>—the type of the object as a string or a constant. For a list of possible values,\n\
                           see the <a href=\"#!/url=./si_om/siType.html\">siType</a> constant reference page.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-7C11F2A2-1A4B-4559-95A6-859893ED3033\"></a></span> <em class=\"strong\">Family</em>—the name of the family to which the object belongs. A family is a group of objects\n\
                           that are connected. They may be loosely connected (Geometries) or a very similar type\n\
                           (Topology Operators). For a list of possible values, see the <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a> constant reference page.\n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-06C7B284-B62A-4691-AD17-E93B5B7275D8\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D432363-5DC1-42C4-A4F0-A14EB62E5459\"></a></span>The other parameter you can specify is <em class=\"strong\">Recursive</em>, which is a Boolean (meaning it can be only False or True) value. If you specify\n\
                                 False here, the method searches only the current object\'s children; otherwise, all\n\
                                 of its dependents are also searched.\n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </li>\n\
                  </ul> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0013\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-6E70FD21-CE6E-4C00-937A-2DB64F07CEF3\"></a></span> To access the first object starting with \"cube\"\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' Set up the scene with a cube\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oRoot = ActiveSceneRoot\n\
	oRoot.AddGeometry \"Cube\", \"MeshSurface\", \"cubeist\"\n\
\n\
	\' Find the first thing starting with \"cube\"\n\
	Set oCube = oRoot.FindChild( \"cube*\" )\n\
	\' Here\'s a check to make sure that an empty object doesn\'t crash the script\n\
	if Application.ClassName( oCube ) &lt;&gt; \"Nothing\" then\n\
		Application.LogMessage \"Found \" &amp; oCube.Name\n\
	else\n\
		Application.LogMessage \"Couldn\'t find it... Sorry.\"\n\
\n\
	end if\n\
	\' Script outputs the following:\n\
	\'INFO : \"Found cubeque\"</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-6C0D96AC-037F-4B4A-A416-6CD5C98E7F95\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-05221F2D-234C-497E-A51B-42AF2150026C\"></a></span>Notice that because this example uses the Name parameter with a wildcard, this method\n\
                              might return \"cube\", \"cube99\", or \"cubeist\", depending on what it finds first.\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0014\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-B217A4C1-877E-4E6C-8A2C-FAA6DAB60EC2\"></a></span> To access all lights under the scene root using the Type parameter\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	Set oLights = ActiveSceneRoot.FindChildren( , \"light\" )\n\
	\' Once you get the collection of lights you can loop through it\n\
	\' Here\'s another check to make sure the collection isn\'t empty\n\
	if oLights.Count &gt; 0 then\n\
	   Application.LogMessage \"Found the following member(s)...\" \n\
	   For Each oMember in oLights\n\
	      Application.LogMessage vbTab &amp; oMember\n\
	   Next\n\
	else\n\
	   Application.LogMessage \"Couldn\'t find it... Sorry.\"\n\
	end if\n\
\n\
	\' Script outputs the following:\n\
	\'INFO : \"Found the following member(s)...\"\n\
	\'INFO : \"	light\"</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-50B9FE3A-6E3B-4B3F-B969-E077FD0F9739\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-2DA08A6B-7442-40A9-BCFB-8A2A6CFA7A4C\"></a></span>Notice that this example uses the string name of the Light primitive type. You could\n\
                              also use the name of the constant instead too: siLightPrimType (without quotation\n\
                              marks).\n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0015\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-3ACEF422-A7E6-43D3-ABA9-9C156A779048\"></a></span> To find the number of null primitives in the scene\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Set up two nested nulls under the scene root\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oRoot = ActiveSceneRoot\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oNested = oRoot.AddNull(\"Nodule\")\n\
oNested.AddNull\n\
\n\
\' Starting at the lower nested level, look for any nulls underneath\n\
printFindResults oNested\n\
\' Then look at the scene root\n\
printFindResults oRoot\n\
\n\
\n\
function printFindResults( in_object )\n\
   <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oNullColl = in_object.FindChildren( ,,siNullPrimitiveFamily )\n\
	\n\
   \' Check to make sure empty collections won\'t crash the script\n\
   if oNullColl.Count &gt; 0 then\n\
      LogMessage \"There are \" &amp; oNullColl.Count &amp; \" null primitives under \" _\n\
              &amp; in_object.Parent.Name &amp; \":\"\n\
      for each oNP in oNullColl \n\
         LogMessage vbTab &amp; oNP.Name &amp; \" is nested under \" &amp; oNP.Parent.Name\n\
      next\n\
   else\n\
      LogMessage \"Couldn\'t find it...Sorry.\"\n\
   end if\n\
end function\n\
\n\
\n\
\' Output of above script:\n\
\'INFO : \"There are 2 null primitives under Scene_Root:\"\n\
\'INFO : 	\"Nodule is nested under Scene_Root\"\n\
\'INFO : 	\"null is nested under Nodule\"\n\
\'INFO : \"There are 4 null primitives under Scene_Root:\"\n\
\'INFO : 	\"Camera_Root is nested under Scene_Root\"\n\
\'INFO : 	\"Camera_Interest is nested under Camera_Root\"\n\
\'INFO : 	\"Nodule is nested under Scene_Root\"\n\
\'INFO : 	\"null is nested under Nodule\"</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0016\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0ADD1BFC-DB23-447C-9D5F-FC43DCE37B20\"></a></span> Working with Parameters\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0017\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-8C880E89-CC4E-4A11-8A52-8937742213ED\"></a></span> Getting Information about a Specific Object\'s Parameters\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8E74B95C-3D02-4D53-9865-546A8CB4F651\"></a></span>Some parameters are defined directly on an object (that is, there is no organizing\n\
                     parameter/property set to go through first) and some are accessible only through the\n\
                     parameter set (also known as a property).\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5EBFC51-E701-41D5-8F17-48BCE13AEB29\"></a></span>You can get all the information about an object\'s parameters by accessing the ParameterCollection\n\
                     either directly from the object or through each member of the PropertyCollection.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E384562B-36BA-456F-990C-5887B16F1672\"></a></span>The following example pulls all the parameter names and descriptions out of Softimage\n\
                     and dumps the information in a text file on your hard drive.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0018\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-998CAFB3-D8EC-4F51-8809-B980B070D9A6\"></a></span> To print out a list of information on all parameters on an object\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE4869D0-3306-46E2-96CF-AC77EE1995B6\"></a></span>Copy and paste this script into the Softimage Script Editor and run it. Once it\'s\n\
                        done you can view the information is written in the textfile in this location: <span class=\"filePath\" translate=\"no\">C:\\Temp\\Camera_Parameter_List.txt.</span></p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' First get the camera\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oCamera = ActiveSceneRoot.FindChild( ,siCameraPrimType )\n\
\n\
\' Check to make sure it found something (prevent it from crashing)\n\
if ClassName( oCamera ) &lt;&gt; \"Nothing\" then\n\
   \' Write some headers to identify the start and end of \n\
   \' the list of parameters \n\
   sOutput = \"========================================\" &amp; _ \n\
	 \"========================================\" &amp; vbLf\n\
   sOutput = sOutput &amp; 	\"PARAMETERS directly on the \" &amp; _\n\
         oCamera.Name &amp; \" object......\" &amp; vbLf\n\
   sOutput = sOutput &amp; \"----------------------------------------\" &amp; _\n\
         \"----------------------------------------\" &amp; vbLf\n\
\n\
   \' Print out the information for each parameter\n\
   for each oParam in oCamera.Parameters\n\
      sOutput = sOutput &amp; oParam.ScriptName &amp; \": \" &amp; vbTab &amp; _\n\
	    \"(\" &amp; oParam.Name &amp; \")\" &amp; vbTab &amp; _\n\
	    oParam.Description &amp; vbLf\n\
      next\n\
	\n\
      for each oProp in oCamera.Properties\n\
	 \' Write some headers to identify the start and end of \n\
	 \' the list of parameters \n\
	 sOutput = sOutput &amp; \"----------------------------------------\" &amp; _\n\
                    \"----------------------------------------\" &amp; vbLf\n\
         sOutput = sOutput &amp; 	\"PARAMETERS on the \" &amp; oCamera.Name &amp; \".\" &amp; _\n\
	          oProp.Name &amp; \" property......\" &amp; vbLf\n\
         sOutput = sOutput &amp; \"----------------------------------------\" &amp; _\n\
\n\
                    \"----------------------------------------\" &amp; vbLf\n\
         \' Print out the information for each parameter\n\
	 for each oParam in oProp.Parameters\n\
	    sOutput = sOutput &amp; oParam.ScriptName &amp; \": \" &amp; vbTab &amp; _\n\
	          \"(\" &amp; oParam.Name &amp; \")\" _\n\
              &amp; vbTab &amp; oParam.Description &amp; vbLf\n\
         next\n\
      next\n\
	\' Write a footer to identify the end of the file\n\
        sOutput = sOutput &amp; \"========================================\" &amp; _ \n\
                  \"========================================\" &amp; vbLf\n\
end if\n\
\n\
\' Write the output to the external file\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> fso = CreateObject( \"Scripting.FileSystemObject\" )\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> ts = fso.CreateTextFile( \"C:\\Temp\\Camera_Parameter_List.txt\", true )\n\
ts.Write sOutput \n\
ts.Close\n\
\n\
\' Just so you know when it\'s done\n\
Application.LogMessage \"Output complete.\"</pre></div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-0019\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-94AE5BE5-260D-491E-8D3C-FA5A8CBE419E\"></a></span> Accessing a Specific Parameter by its Name with the Object Model\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0A775B99-3536-4791-B724-5AA42F1B4BF1\"></a></span>A lot of script writers use the automatic logging feature of the History Log to give\n\
                     the correct command syntax for certain commands in the scripts they want to write.\n\
                     Some also activate the Use Script Names feature from the Show menu in the Softimage\n\
                     explorer so that they can see how to refer to each object in scripting.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BE045FEC-0C95-4810-ABFE-732FD21902CF\"></a></span>However, the object model uses a different way to access objects and parameters. What\n\
                     the History Log of the Script Editor shows is the object and parameter names (generally\n\
                     called String Expressions) that can be used with commands, but not necessarily with\n\
                     the object model. The object model uses its own set of object and parameter names,\n\
                     some of which have shortcuts.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8DDC724-4EE9-4CD6-A16F-D9DC9CF7BD5A\"></a></span>If you want to use the object model, it\'s a little more involved, but it makes sense\n\
                     once you know what to look for. You just traverse down the hierarchy as it appears\n\
                     in the explorer.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-001A\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-6DC99DC0-46EC-4E92-8389-11A3C7A404DE\"></a></span> To get the camera visibility property (parameter set)\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' First get the camera (Camera object)\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oCamera = ActiveSceneRoot.FindChild( , siCameraPrimType )\n\
\n\
\' Underneath the camera are its properties (Properties returns the \n\
\' PropertyCollection)\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oProps = oCamera.Properties\n\
\n\
\' Once you have all the property sets (PropertyCollection) you can specify the \n\
\' one you want (the Property object is returned)\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oVis = oProps( \"visibility\" )\n\
\n\
\' Now we have a single Property (property <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a>), so we need to get all the \n\
\' parameters for that property <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> (Parameters returns the ParameterCollection)\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oParams = oVis.Parameters\n\
\n\
\' Again we choose the single parameter we want from the collection (the \n\
\' Parameter object is returned)\n\
\' NB: This is where what appears in the History Log comes into play...\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oViewVis = oParams( \"viewvis\" )\n\
\n\
\' And once you have a single Parameter object, you can get it\'s value...\n\
\' (the line below returns \'INFO : \"False\")\n\
logmessage oViewVis.Value\n\
\n\
\' ...or <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> it...\n\
oViewVis.Value = true\n\
\n\
\' And you can make as many shortcuts as you like, so...\n\
oCamera.Properties( \"visibility\" ).Parameters( \"viewvis\" ).Value = false\n\
</pre></div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-001B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-70F748BD-E429-4DAA-951F-CCD736584876\"></a></span> What You Should Know about the Range of a Parameter\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-204EA138-E97A-49AE-A7CA-F2E86CB77AC5\"></a></span>Using the object model to set parameters can bypass the maximum and minimum values\n\
                     allowed. Setting a value outside the allowable range can cause unpredictable results.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-546A1EBA-6F3B-42B0-B2C2-C8CF408A8AA1\"></a></span>To avoid this, it\'s good programming practice to get the maximum and minimum allowable\n\
                     values for a parameter before you try to change them.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-001C\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-1FD60A4C-A54E-40B8-813B-15FA9179CB88\"></a></span> To find out what the range is for a given parameter\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Pick a number out of the air for the new value for a parameter\n\
dProposedValue = -10.00\n\
\n\
\' Set up an object and get its Display::Near Distance to\n\
\' Output Camera parameter\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oNull = ActiveSceneRoot.AddNull()\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oParam = oNull.Properties( \"display\" ).Parameters( \"neardist\" )\n\
\n\
\' Get the range of allowable values for this parameter\n\
dMaxValue = oParam.Max\n\
dMinValue = oParam.Min\n\
\n\
\' Now check the number you were going to use against the range\n\
if dProposedValue &gt; dMaxValue then\n\
   \' Here is where you write some code to handle it\n\
   Application.LogMessage dProposedValue &amp; \" has exceeded the \" _\n\
         &amp; \"maximum value (\" &amp; dMaxValue &amp; \") <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> for this \" _\n\
         &amp; \"parameter. Please adjust the value and try again.\"\n\
elseif dProposedValue &lt; dMinValue then\n\
   \' Here is where you write some code to handle it\n\
   Application.LogMessage dProposedValue &amp; \" has not met the \" _\n\
         &amp; \"minimum value (\" &amp; dMinValue &amp; \") <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> for this \" _\n\
         &amp; \"parameter. Please adjust the value and try again.\"\n\
else\n\
   \' Here is where you update the parameter with your value\n\
   oParam.Value = dProposedValue\n\
   Application.LogMessage oParam.Name &amp; \"\'s value = \" &amp; oParam.Value\n\
end if\n\
\n\
\' Output of above script:\n\
\'INFO : \"-10 has not met the minimum value (0) <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> for this parameter. Please adjust the value and try again.\"\n\
</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS74F57519B241D54691EA264324B2CEC7-001D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DF40BE59-80E5-4D0C-9A50-D638D53B360C\"></a></span> Getting and Setting Object Data\n\
               </h2>    \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-9C07E34D-A3FB-4C0E-B12F-ECB800BFACA4\"></a></span>Once you have identified the object you want to work with, you need to explain what\n\
                  you want to find out about it or what you want to do to it. For example, if you want\n\
                  to display the object\'s name in the history pane of the Script Editor, you could use\n\
                  the following:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveSceneRoot\n\
Set oThing = oRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
Application.LogMessage oThing.Name  \' Getting information\n\
\n\
If you want to change the <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> of the object instead, you could use this code fragment:\n\
\n\
Set oRoot = ActiveSceneRoot\n\
Set oThing = oRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
oThing.Name = \"Toybox\"              \' Setting information\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";