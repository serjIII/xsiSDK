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
      <meta name=\"topicid\" content=\"GUID-6FB31361-A81F-4D3B-892B-87460FE77515\" />\n\
      <meta name=\"indexterm\" content=\"objects: invalid (in scripting)\" />\n\
      <meta name=\"indexterm\" content=\"objects: empty (in scripting)\" />\n\
      <meta name=\"indexterm\" content=\"empty collections (what to watch out for)\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): invalid\" />\n\
      <meta name=\"indexterm\" content=\"Returning Values and Objects\" />\n\
      <meta name=\"indexterm\" content=\"Returning Data Values\" />\n\
      <meta name=\"indexterm\" content=\"values: returning data values\" />\n\
      <meta name=\"indexterm\" content=\"data values, returning\" />\n\
      <meta name=\"indexterm\" content=\"return values: data values\" />\n\
      <meta name=\"indexterm\" content=\"Returning Objects\" />\n\
      <meta name=\"indexterm\" content=\"values: returning objects\" />\n\
      <meta name=\"indexterm\" content=\"objects: return values (in scripting)\" />\n\
      <meta name=\"indexterm\" content=\"return values: objects\" />\n\
      <meta name=\"indexterm\" content=\"Example: Returning objects using scripting commands\" />\n\
      <meta name=\"indexterm\" content=\"Example: Returning objects using the object model\" />\n\
      <meta name=\"indexterm\" content=\"Simple Objects versus Collections\" />\n\
      <meta name=\"indexterm\" content=\"return values: objects vs. collections\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): vs. objects\" />\n\
      <meta name=\"indexterm\" content=\"objects: vs. collections (in scripting)\" />\n\
      <meta name=\"indexterm\" content=\"To check whether the return value is an object or a collection\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What to Watch Out for with Objects and Collections</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-6FB31361-A81F-4D3B-892B-87460FE77515\"></a></span><div class=\"head\">\n\
            <h1>What to Watch Out for with Objects and Collections</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F28CF7A-860D-4198-8026-EFD3474FD817\"></a></span>Commands and methods generally behave in one of two ways:\n\
            </p><span class=\"anchor_wrapper\"><a name=\"GUID-9627C5FD-BBD9-4E25-8944-A41EC176610F\"></a></span><ol type=\"1\" start=\"1\">\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-BAEF5772-6365-475A-A1F3-FAAA7D3F5BB7\"></a></span>They always return a valid object or collection. For example:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-67DD6578-AFBF-4EE0-BA78-78BD4D3926CF\"></a></span>The <a href=\"#!/url=./si_cmds/GetPrimCamera.html\">GetPrimCamera</a> command or <a href=\"#!/url=./si_om/X3DObject.AddCamera.html\">AddCamera</a> method adds a camera to the scene and returns the new camera. The return value is\n\
                           always a valid object because the method always creates a new camera.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-D7A80DED-23C1-4EAF-A7CA-D3E6DEE72829\"></a></span>The <a href=\"#!/url=./si_om/Geometry.Points.html\">Geometry.Points</a> property gets the collection of points from the object\'s geometry. The return value\n\
                           is always a valid collection because the any object implementing this property always\n\
                           contains a collection of points.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-61941901-5F55-43F8-B0BC-6EC57FB55CA2\"></a></span>The <a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">FindChildren</a> and <a href=\"#!/url=./si_om/X3DObjectCollection.Filter.html\">Filter</a> methods always return valid collections that match the criteria specified. Even when\n\
                           it has no members, it still returns an empty but valid collection, unlike the <a href=\"#!/url=./si_cmds/SIFilter.html\">SIFilter</a> command.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D1A84063-24D3-4C85-8CDB-367C821BF1F0\"></a></span>They may return an invalid object or collection. For example:\n\
                  </p> \n\
                  <ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E644EAE-FFD3-4D87-AF30-99B143AEF1B7\"></a></span>The <a href=\"#!/url=./si_cmds/SIFilter.html\">SIFilter</a> command takes an existing list as input and returns a subset of its members as a\n\
                           new collection that matches the criteria specified. If nothing matches the criteria,\n\
                           no valid collection is created. This behavior is different from the <a href=\"#!/url=./si_om/X3DObjectCollection.Filter.html\">Filter</a> methods which return a valid, empty collection if the criteria are not met.\n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A94594F0-A3DB-498D-BF85-568EB12DEF77\"></a></span>The <a href=\"#!/url=./si_om/X3DObject.FindChild.html\">FindChild</a> or <a href=\"#!/url=./si_om/X3DObjectCollection.Find.html\">Find</a> method takes input objects and returns the first thing that matches the criteria\n\
                           specified. If nothing matches, no valid object is returned.\n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </li>\n\
            </ol>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-3AA4BFE4-0820-4EFE-83C7-0752139A19B6\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EC2315CC-D4D5-419D-BE17-E097CABC294E\"></a></span>As you may suspect, your script will fail if you try to use an invalid object or collection\n\
                     (nothing). For this reason, you need to test the return value before trying to work\n\
                     with it any further. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_MakingSureReturnedValuesareValid.htm\">Making Sure Returned Values are Valid</a></span>.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-002B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F5AC5B0A-7069-4405-BF2A-773FA01252F7\"></a></span> Returning Values and Objects\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-002C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E279711B-7202-4418-B49C-F049F2FBC8ED\"></a></span> Returning Data Values\n\
                  </h3>     \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A6677136-EB7A-4241-BC3A-56A4CE9266D3\"></a></span>Some commands and methods test objects to see whether a certain condition is true,\n\
                     so they return a <em class=\"strong\">boolean</em> value which represents either True or False. For example, the <a href=\"#!/url=./si_cmds/IsAnimated.html\">IsAnimated</a> command checks to see whether the object has animated parameters and the <a href=\"#!/url=./si_om/SIObject.IsEqualTo.html\">SIObject.IsEqualTo</a> method checks to see whether the object is the same as some other item.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A6781D1E-D6B8-406F-9108-9E6AC56AB5AE\"></a></span>There are many others that perform some kind of mathematical calculation, so they\n\
                     return a numerical value. For example, the <a href=\"#!/url=./si_cmds/GetNbTriangles.html\">GetNbTriangles</a> command returns the number of triangles (as a <em class=\"strong\">long</em>) on a given object and the <a href=\"#!/url=./si_om/XSIMath.DegreesToRadians.html\">XSIMath.DegreesToRadians</a> method converts an angle in degrees to radians (as a <em class=\"strong\">double</em>).\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-0C7236E5-D50E-4F32-AE5E-4F10FE66BF88\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E1E7D910-76D9-4E94-B1C8-EC989B7D0B75\"></a></span>For more information on types, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm\">What is ÔType\'?</a></span>.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-002D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-66CAFE04-4016-4BEC-AB06-C88C49BE9094\"></a></span> Returning Objects\n\
                  </h3>     \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-098D1A6F-93FB-426A-A7E4-A39258A8B5C9\"></a></span>Most methods and some commands create individual scene items, so they return the name\n\
                     of the newly created object. For example, the <a href=\"#!/url=./si_cmds/CreatePrim.html\">CreatePrim</a> command and the <a href=\"#!/url=./si_om/X3DObject.AddGeometry.html\">X3DObject.AddGeometry</a> method both create 3D objects of the specified geometry type.\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-5D30E8D8-E002-46F3-A5DF-2E9D028A6898\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-7576EC2E-F154-4565-90AF-EE391792E26E\"></a></span>In these cases, if you are using VBScript you need to use the <em class=\"strong\">Set</em> keyword before the variable name to get an object. For example, the <a href=\"#!/url=./si_cmds/CreatePrim.html\">CreatePrim</a> command returns the primitive it creates. With the Set keyword, you get a pointer\n\
                           to the object (as an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>):\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oObj = CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
\' TypeName(oObj) returns \'X3DObject\'</pre></div> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A46E70CA-8DF0-4098-805F-A842D6F1E663\"></a></span>Without the Set keyword, you get the name of the new object because the default property\n\
                           of an <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a> is the <a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> property:\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
sRtn = CreatePrim( \"Arc\", \"NurbsCurve\" )\n\
\' TypeName(sRtn) returns \'String\'</pre></div> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A8F06D5F-EFC9-4181-B296-A7F16E2AB825\"></a></span>Other languages, such as JScript, implicitly assign the object type to the variable,\n\
                           so there is no need to use a special keyword.\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// ClassName(oObj) will return \'X3DObject\'\n\
var oObj = CreatePrim( \"Arc\", \"NurbsCurve );</pre></div> \n\
                     </div>\n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-002E\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-5E361C17-A99A-44E7-AD7F-7F3B738E87FD\"></a></span> Example: Returning objects using scripting commands\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Using the Set keyword allows you to create variables \n\
\' that point to objects.\n\
Set oSphere = CreatePrim(\"Sphere\", \"NurbsSurface\")</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-002F\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-28CC4F91-C50C-49F1-94D7-08F9559E6F7E\"></a></span> Example: Returning objects using the object model\n\
                     </h4>  \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveProject.ActiveScene.Root\n\
Set oSphere = oRoot.AddGeometry(\"Sphere\", \"NurbsSurface\", \"sphere\")\n\
LogMessage oSphere.Name &amp; \" has a position in X of \" &amp; oSphere.posx.Value</pre></div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0030\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F8454DC5-ECD4-4B3B-829E-BBC584575FC4\"></a></span> Simple Objects versus Collections\n\
                  </h3>     \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1E851327-A5C8-492B-A79F-53496B296CEA\"></a></span>When you get a returned object, it is important to remember that it could be either\n\
                     a simple object or a collection. This affects how you test and use the returned object\n\
                     — for example, simple objects have <a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> and <a href=\"#!/url=./si_om/SIObject.Type.html\">Type</a> properties, while collections have <a href=\"#!/url=./si_om/SIObjectCollection.Count.html\">Count</a> and <a href=\"#!/url=./si_om/SIObjectCollection.Item.html\">Item</a> properties.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7B34A1F9-AC93-4F6B-8C9B-5FF3DA01E716\"></a></span>The default property for an object is the <a href=\"#!/url=./si_om/SIObject.Name.html\">Name</a> property, which means that when you use an object variable <span class=\"code\" translate=\"no\">oSphere</span> in a code statement, it can be interpreted either as <span class=\"code\" translate=\"no\">oSphere</span> or as <span class=\"code\" translate=\"no\">oSphere.Name</span>, depending on the context:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' These two LogMessage statements are equivalent\n\
\' since LogMessage is looking for a string\n\
Set oSphere = CreatePrim( \"Sphere\", \"NurbsSurface\" )\n\
LogMessage oSphere\n\
LogMessage oSphere.Name</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-0AD008B1-F558-4B0C-8506-1E62E3B318E4\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-F067812B-F2B8-4CD3-BC24-5A1B3BDD6CC9\"></a></span>For more information about objects, see <a href=\"#!/url=./files/dev_intro_AbouttheStructureofXSIxd5sAPIs.htm\">About the Structure of the Softimage APIs</a>.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8009AAAE-6619-4AAF-89DF-E62729AFE9CA\"></a></span>The default property for a collection is the <a href=\"#!/url=./si_om/SIObjectCollection.Item.html\">Item</a> property, which means that when you use an object variable <span class=\"code\" translate=\"no\">oOwners</span> in a code statement, it can be interpreted either as <span class=\"code\" translate=\"no\">oOwners</span> or as <span class=\"code\" translate=\"no\">oOwners.Item</span>, depending on the context:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' These four LogMessage statements are also equivalent\n\
\' because the Item actually identifies the object \n\
\' that is the first member of the collection, both\n\
\' are interpreted as oOwners.Item(0).Name\n\
Set oSphere = CreatePrim( \"Sphere\", \"NurbsSurface\" )\n\
Set oOwners = oSphere.Owners\n\
LogMessage oOwners(0)\n\
LogMessage oOwners(0).Name\n\
LogMessage oOwners.Item(0)\n\
LogMessage oOwners.Item(0).Name</pre></div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0031\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-BCA58CF5-8DA7-4719-83C3-456D99836A8E\"></a></span> To check whether the return value is an object or a collection\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB79FDEB-5CA2-4294-A7E3-E6BF4C08F262\"></a></span>The following code tests to see whether a mystery object is a collection or a simple\n\
                        object.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Continue processing if there is an error in the next block\n\
On Error Resume Next\n\
\n\
\' Test to see if it is a collection\n\
myCount = mysteryObj.Count\n\
if (Err.Number = 0) then \n\
	if (myCount = 0) then\n\
		LogMessage \"Empty collection.\"\n\
	else\n\
		LogMessage \"Collection contains:\"\n\
		for each myItem in mysteryObj\n\
			LogMessage myItem.Name &amp; \" is a \" &amp; myItem.Type\n\
		next\n\
	end if\n\
	\n\
\' Test to see if it is a simple object\n\
else\n\
	Err.Clear\n\
	myName = mysteryObj.Name\n\
	if (Err.Number = 0) then\n\
		LogMessage \"Object: \" &amp; myName &amp; \" is a \" &amp; mysteryObj.Type\n\
	else\n\
		LogMessage \"Unknown\"\n\
	end if\n\
end if\n\
\n\
\'Stop processing if there is an error in the remainder of the script\n\
Err.Clear\n\
On Error GoTo 0</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";