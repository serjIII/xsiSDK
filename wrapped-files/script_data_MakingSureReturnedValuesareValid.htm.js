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
      <meta name=\"topicid\" content=\"GUID-F0882C22-B7F7-43A1-86F6-CF934F32D809\" />\n\
      <meta name=\"indexterm\" content=\"return values: exception handling\" />\n\
      <meta name=\"indexterm\" content=\"return values: TypeName\" />\n\
      <meta name=\"indexterm\" content=\"return values: Nothing\" />\n\
      <meta name=\"indexterm\" content=\"values: testing return values\" />\n\
      <meta name=\"indexterm\" content=\"return values: testing\" />\n\
      <meta name=\"indexterm\" content=\"trapping errors (scripting): from return values\" />\n\
      <meta name=\"indexterm\" content=\"error trapping: return values\" />\n\
      <meta name=\"indexterm\" content=\"exception handling\" />\n\
      <meta name=\"indexterm\" content=\"TypeName\" />\n\
      <meta name=\"indexterm\" content=\"Nothing\" />\n\
      <meta name=\"indexterm\" content=\"JScript: testing with exception handling\" />\n\
      <meta name=\"indexterm\" content=\"VBScript: testing with TypeName\" />\n\
      <meta name=\"indexterm\" content=\"VBScript: testing with Nothing\" />\n\
      <meta name=\"indexterm\" content=\"testing (in scripting): exception handling\" />\n\
      <meta name=\"indexterm\" content=\"testing (in scripting): TypeName\" />\n\
      <meta name=\"indexterm\" content=\"testing (in scripting): Nothing\" />\n\
      <meta name=\"indexterm\" content=\"To find out whether the return object is valid in VBScript\" />\n\
      <meta name=\"indexterm\" content=\"To find out whether the return object is valid in JScript\" />\n\
      <meta name=\"indexterm\" content=\"properties: Count\" />\n\
      <meta name=\"indexterm\" content=\"Count property\" />\n\
      <meta name=\"indexterm\" content=\"Filter method: and empty collections\" />\n\
      <meta name=\"indexterm\" content=\"FindChildren method: and empty collections\" />\n\
      <meta name=\"indexterm\" content=\"methods: using the Filter method with empty collections\" />\n\
      <meta name=\"indexterm\" content=\"methods: using the FindChildren method with empty collections\" />\n\
      <meta name=\"indexterm\" content=\"return values: empty collections\" />\n\
      <meta name=\"indexterm\" content=\"invalid collections\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): invalid\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): detecting invalid collections\" />\n\
      <meta name=\"indexterm\" content=\"collections (scripting): empty\" />\n\
      <meta name=\"indexterm\" content=\"empty collections (returned)\" />\n\
      <meta name=\"indexterm\" content=\"trapping errors (scripting): empty collections\" />\n\
      <meta name=\"indexterm\" content=\"error trapping\" />\n\
      <meta name=\"indexterm\" content=\"return values: testing collections with the Count property\" />\n\
      <meta name=\"indexterm\" content=\"testing (in scripting): return values with the Count property\" />\n\
      <meta name=\"indexterm\" content=\"To find out whether a collection contains any items in VBScript\" />\n\
      <meta name=\"indexterm\" content=\"To find out whether a collection contains any items in JScript\" />\n\
      <meta name=\"indexterm\" content=\"Calling a Command or Method That Might Fail\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Making Sure Returned Values are Valid</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"type\", \"si_cpp/group__RenderMapDefine.html#ga7117e14e60390664f1862525dd6acaf6\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"data\", \"si_cpp/group__RenderMapDefine.html#gadd4f4d7b7bb549a29e5ea45fe633c5c3\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-F0882C22-B7F7-43A1-86F6-CF934F32D809\"></a></span><div class=\"head\">\n\
            <h1>Making Sure Returned Values are Valid</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-65D772FC-B2A4-4FBD-9925-4183A5CA1000\"></a></span>Some commands and methods may return invalid collections or objects. For example,\n\
               if you try to use the <a href=\"#!/url=./si_om/X3DObjectCollection.Find.html\">Find</a> method to return an item that doesn\'t exist in the scene, it returns nothing. Unfortunately,\n\
               if you try to use that invalid object or collection later on in your script, you will\n\
               get an error.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0034\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9E2BE270-2A8B-4D8A-9F05-04ED8E62EE48\"></a></span> To find out whether the return object is valid in VBScript\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1801DE89-DB4C-4B18-8AE3-A050D6BEE917\"></a></span>In VBScript, if the command or method returns an invalid object, the <em class=\"strong\">TypeName</em> function returns <span class=\"code\" translate=\"no\">Nothing</span>:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveSceneRoot\n\
Set oChildren = oRoot.FindChildren\n\
Set oChild = oChildren.Find( \"polymsh\" )\n\
If TypeName( oChild ) &lt;&gt; \"Nothing\" Then\n\
	LogMessage \"Found \" &amp; oChild.Name\n\
Else\n\
	LogMessage \"Couldn\'t find it!\"\n\
End If</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0035\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9B2BD253-E72A-4997-9DF7-06D72FAFCEDE\"></a></span> To find out whether the return object is valid in JScript\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-79595AD6-4A62-45A0-9EEE-6BA303ABA482\"></a></span>In JScript, if the command or method returns an invalid object, you can trap it with\n\
                  exception handling:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var oRoot = ActiveSceneRoot;\n\
var oChildren = oRoot.FindChildren();\n\
var oChild = oChildren.Find( \"polymsh\" );\n\
\n\
try {\n\
	sMessage = \"Found \" + oChild.Name;\n\
} catch(e) {\n\
	sMessage = \"Couldn\'t find it!\";\n\
} finally {\n\
	LogMessage( sMessage );\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6A2A3E8D-264F-419B-B28A-2A45FE933C92\"></a></span>Alternatively, you could use the following error trap instead:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var oRoot = ActiveSceneRoot;\n\
var oChildren = oRoot.FindChildren();\n\
var oChild = oChildren.Find( \"polymsh\" );\n\
\n\
if ( oChild == null ) {\n\
	LogMessage( \"Couldn\'t find it!\" );\n\
} else {\n\
	LogMessage( \"Found \" + oChild.Name );\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0036\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B9A83B15-0EFA-4EA5-8BB2-F066D70FF799\"></a></span>Empty Collections\n\
               </h2>                 \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-8D1CBB6E-49EB-4983-A94A-4DCA50D7E535\"></a></span>Empty collections can sometimes be tricky. They behave differently depending on how\n\
                  you get them (which command or method returned them). For example, the <a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">FindChildren</a> method returns a valid collection containing no members:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveSceneRoot\n\
Set oChildren = oRoot.FindChildren( \"sphere\" )\n\
LogMessage oChildren &amp; \" contains \" &amp; oChildren.Count &amp; \" members.\"</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-1A945BCC-5495-400C-8FC6-20F8166B9263\"></a></span>If you run this code snippet on a scene with no objects named \"sphere\", the following\n\
                  message appears:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"This collection contains 0 members.\"</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B184507C-FC9A-4604-BD1A-7378357D9753\"></a></span>However, the <a href=\"#!/url=./si_om/X3DObjectCollection.Filter.html\">Filter</a> method does not return a valid collection:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveSceneRoot\n\
Set oChildren = oRoot.FindChildren\n\
Set oPolyMeshes = oChildren.Filter( \"polymsh\" )\n\
LogMessage \"This collection contains \" &amp; oPolyMeshes.Count &amp; \" members.\"</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2FF62F17-2D1B-41C9-8620-B250C2A59B92\"></a></span>If you run this code snippet on a scene with no polygon mesh objects, the script aborts\n\
                  and the following error message appears:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'ERROR : \"Object required: \'oPolyMeshes\'\"</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7D19AD10-F235-455F-B773-B22DDF772DD5\"></a></span>You can trap errors of these kinds in VBScript with a combination of <em class=\"strong\">Nothing</em> and <a href=\"#!/url=./si_om/X3DObjectCollection.Count.html\">Count</a> and in JScript with exception handling.\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0037\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-53D89104-602C-4CE7-AB5D-01398A10ECD1\"></a></span> To find out whether a collection contains any items in VBScript\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F7574F8B-72F0-4508-B795-614AC10C234E\"></a></span>You can use the VBScript <em class=\"strong\">TypeName</em> function to test whether the collection returns a valid collection without throwing\n\
                     an error:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveSceneRoot\n\
Set oChildren = oRoot.FindChildren\n\
If TypeName( oChildren ) = \"Nothing\" Then\n\
	LogMessage \"This collection is empty.\"\n\
Else\n\
	LogMessage \"This collection has members.\"\n\
End If</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-97FD74C1-AC5B-4B2A-8B4B-F7DE73087F5E\"></a></span>The only problem is that if the collection is a valid collection with no members and\n\
                     you run this test, you get the wrong results:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"This collection has members.\"</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9811FBB-6DA9-4033-ABD5-2294808C8D26\"></a></span>This means that your test has to include the <a href=\"#!/url=./si_om/X3DObjectCollection.Count.html\">Count</a> property to find out whether a collection contains any items (collection members):\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oRoot = ActiveSceneRoot\n\
Set oChildren = oRoot.FindChildren( \"sphere\" )\n\
Set oPolyMeshes = oChildren.Filter( \"polymsh\" )\n\
Call IsCollectionEmpty( oChildren )\n\
Call IsCollectionEmpty( oPolyMeshes )\n\
\n\
Function IsCollectionEmpty( in_collection )\n\
	If TypeName( in_collection ) &lt;&gt; \"Nothing\" Then\n\
		If in_collection.Count &gt; 0 Then\n\
			LogMessage \"Collection has some members\"\n\
		Else\n\
			LogMessage \"Collection has no members\"\n\
		End If\n\
	Else\n\
		LogMessage \"Collection is empty\"\n\
	End If\n\
End Function</pre></div> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-4B2FE685-4AD9-41A6-A3AA-1A08176A6918\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-E9A81D8D-A31D-461E-8428-8C303AFE80EF\"></a></span>In VBScript, there are functions called <em class=\"strong\">IsNull</em> and <em class=\"strong\">IsEmpty</em>. Do not use them to test whether your collection is empty, because what it is actually\n\
                           testing for is whether your collection\'s data subtype is <em class=\"strong\">Null</em> or <em class=\"strong\">Empty</em>. For more information on the Null and Empty data types and subtypes, see <span class=\"char_link\"><a href=\"#!/url=./files/script_data_Whatisxd4Typexd5.htm\">What is ÔType\'?</a></span> or msdn2.microsoft.com/en-us/library/9e7a57cf.aspx.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0038\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-1BD6A9E5-F2CE-40E7-BC83-7CC988660D6E\"></a></span> To find out whether a collection contains any items in JScript\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A991A5B8-A567-4146-9932-943654CCFCFC\"></a></span>You can trap the error using the <em class=\"strong\">try...catch...finally</em> statements in JScript. For example, the function in the following code snippet uses\n\
                     the <a href=\"#!/url=./si_om/X3DObjectCollection.Count.html\">Count</a> property to see whether the collection is valid and if so, whether it has any members:\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var oRoot = ActiveSceneRoot;\n\
var oChildren = oRoot.FindChildren( \"sphere\" );\n\
var oPolyMeshes = oChildren.Filter( \"surfmsh\" );\n\
\n\
if ( IsCollectionEmpty(oChildren) ){\n\
	// If empty, then...\n\
}\n\
\n\
if ( IsCollectionEmpty(oPolyMeshes) ){\n\
	// If empty, then...\n\
}\n\
\n\
function IsCollectionEmpty( in_collection )\n\
{\n\
	var bCollIsEmpty;\n\
	try {\n\
		if( in_collection.Count &gt; 0 ) {\n\
			bCollIsEmpty = false;\n\
		} else {\n\
			bCollIsEmpty = true;\n\
		}\n\
	} catch(e) {\n\
		bCollIsEmpty = true;\n\
	} finally {\n\
		return bCollIsEmpty;\n\
	}\n\
}</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSBAC00627FDA41F4DBFDDFE9988A39246-0039\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DB05A1BE-5013-492A-AA77-65CC21431780\"></a></span> Calling a Command or Method That Might Fail\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-05B7A063-6E63-4F5D-BEAE-22D40BD17204\"></a></span>Some methods or commands will fail if the arguments or context are not correct. For\n\
                  example, the <a href=\"#!/url=./si_cmds/GeneratorOperatorPresets.html\">Loft</a> operator takes a connection set of two or more curves as input. If you try to apply\n\
                  it to anything else (in the following example, a torus), the command fails and your\n\
                  script will break .\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// This is the incorrect way to apply the Loft operator:\n\
var cnxset = ActiveSceneRoot.AddGeometry( \"Torus\", \"MeshSurface\" );\n\
var oplist = ApplyOp( \"Loft\", cnxset );\n\
\n\
//WARNING : 3040-EDIT-GetConnectionSet - Some input objects are invalid ...\n\
//ERROR : Subscript out of range: \'[number: 0]\' - [line 213 in ...\n\
//ERROR :  - [line 2]\n\
\n\
\n\
// This is the correct way to apply the Loft operator:\n\
var curve1 = ActiveSceneRoot.AddGeometry( \"Arc\", \"NurbsCurve\" );\n\
Translate( curve1, null, null, 2 );\n\
var curve2 = ActiveSceneRoot.AddGeometry( \"Arc\", \"NurbsCurve\" );\n\
var cnxset = curve1 + \",\" + curve2;\n\
\n\
var oplist = ApplyOp( \"Loft\", cnxset );\n\
var msh = oplist.Item( \"OutputObjs\" );</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E11F926C-7CAE-40D6-80EF-8A4EA3759DCF\"></a></span>This could obviously be avoided by using the correct type of connection set for the\n\
                  operator. However, sometimes your script has to rely on the user to supply input arguments.\n\
                  In this case, you need to make sure you test that input before even calling the command.\n\
                  For example, if you are applying the <a href=\"#!/url=./si_cmds/GeneratorOperatorPresets.html\">Loft</a> to a connection set supplied by the user, you could write something like this:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
/*\n\
	This function demonstrates how to provide checks to input objects that\n\
	could cause your scripts to break.\n\
*/\n\
function MakeMesh( in_cnxset )\n\
{\n\
	var allgood;\n\
	// It should be either a string or a selection\n\
	if (typeof(in_cnxset) == \'object\') {\n\
		// If it\'s an object, find out if it\'s the Selection\n\
		if (ClassName(in_cnxset) == \"Selection\" ) {\n\
			// Check to make sure that we have at least two items\n\
			if (in_cnxset.Count &lt; 2) {\n\
				LogMessage( \"You need at least two curves for Lofting.\" );\n\
				allgood = false;\n\
			} else {\n\
			// Check each member to make sure that it\'s a curve\n\
				var e = new Enumerator(in_cnxset);\n\
				for ( ; !e.atEnd(); e.moveNext() ) {\n\
					var chkit = e.item();\n\
					if (chkit.Type != \'crvlist\') {\n\
						LogMessage( \"You have the right number of objects,\"\n\
							+ \" but the wrong <a href=\"javascript:void(0)\" data=\"type\" class=\"a_multireflink\">type</a>!\" );\n\
						allgood = false;\n\
						break;\n\
					}\n\
				}\n\
				// At this point, all collection members must have been valid\n\
				allgood = true;\n\
				// Convert Selection to a real connection <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> (string)\n\
				in_cnxset = in_cnxset.GetAsText();\n\
			}\n\
		} else {\n\
			// There are more possibilities (like XSICollections) that could\n\
			// still be correct that you could test for here, but let\'s\n\
			// assume that no other kind of object is acceptable\n\
			LogMessage( \"What did you give me?!? -- Try again.\" );\n\
			allgood = false;\n\
		}\n\
	} else {\n\
		// If it\'s not the Selection object make sure it\'s a string (that is,\n\
		// a real connection <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a>)\n\
		if (typeof(in_cnxset) == \'string\') {\n\
			// Real connection sets should actually report that they are\n\
			// strings. To make sure it\'s a good connection <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a>, we have to\n\
			// examine each item by splitting the string into an array\n\
			// (assuming that it\'s delimited by commas \',\')\n\
			var mbrs = in_cnxset.split( \",\" );\n\
			for (var m=0; m&lt;mbrs.length; m++) {\n\
				// Find each item in the scene and make sure that it\'s\n\
				// really a curve\n\
				var fnd = ActiveSceneRoot.FindChild( mbrs[m] );\n\
				if (fnd != null) {\n\
					// Make sure we found something to test (avoiding errors)\n\
					if (fnd.Type != \'crvlist\') {\n\
						// If any member is not a curve, it\'s no good...\n\
						LogMessage( \"This contains non-curve items.\" );\n\
						allgood = false;\n\
						break;\n\
					}\n\
				}\n\
			}\n\
			// At this point, all members of the connection <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> must be valid\n\
			allgood = true;\n\
		} else {\n\
			// No other kind of <a href=\"javascript:void(0)\" data=\"data\" class=\"a_multireflink\">data</a> value is acceptable\n\
			LogMessage( \"Ummm -- I need at least 2 curves!\" );\n\
			allgood = false;\n\
		}\n\
	}\n\
	\n\
	// Whew! Now can you proceed?...\n\
	if (allgood) {\n\
		var oplist = ApplyOp( \"Loft\", in_cnxset );\n\
		var msh = oplist.Item( \"OutputObjs\" );\n\
		return \"Success!\";\n\
	} else {\n\
		return \"Failure :(\";\n\
	}\n\
}</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B74D179E-C45B-4F2D-B441-2CF0061C260D\"></a></span>Sometimes you just can\'t test for all contingencies. In cases where you expect the\n\
                  call might fail you can use something like the <em class=\"strong\">try...catch</em> statement in JScript (or VBScript\'s <em class=\"strong\">On Error Resume Next</em> if you\'re feeling really lucky). This gives you a chance to continue the script or\n\
                  to show an informative message to the user.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";