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
      <meta name=\"topicid\" content=\"GUID-5B63BFA2-65BF-42A6-9B43-9C1A38DA962A\" />\n\
      <meta name=\"indexterm\" content=\"Relative Name\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Relative Name</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5B63BFA2-65BF-42A6-9B43-9C1A38DA962A\"></a></span><div class=\"head\">\n\
            <h1> Relative Name</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B0D6A201-D737-4AE9-BB87-B0F6521D5968\"></a></span><a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a>s store paths to parameters as <em class=\"mild\">relative names</em>. A relative name consists of the <a href=\"#!/url=./si_om/SIObject.FullName.html\">SIObject.FullName</a> or SIObject::GetFullName of the <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html\">Parameter</a> without the <a href=\"#!/url=./si_om/Model.html\">Model</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Model.html\">Model</a> name. For example, the full name of the <em class=\"strong\">posx</em> parameter on a cube under a model called <em class=\"mild\">Cricket</em> is <span class=\"code\" translate=\"no\">Cricket.cube.kine.global.posx</span>. The relative name makes an action source easy to share between different models\n\
               because a parameter\'s relative name is the same everywhere: <span class=\"code\" translate=\"no\">cube.kine.global.posx</span>.\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-CCB20318-6BE3-41D5-8EB8-5B60C61B5D40\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7DBA9105-0B40-41C9-BB4E-4DA89B53777C\"></a></span>If you are running scripts that create action sources and then instantiate them in\n\
                     the <a href=\"#!/url=./si_om/Mixer.html\">Mixer</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Mixer.html\">Mixer</a>, you may have had a connection mapping dialog pop up asking how to connect the action\n\
                     on the parameters. This often happens when you create a source using the parameter\'s\n\
                     full name instead of a relative name when the parameter is nested in a model (and\n\
                     it won\'t happen if the parameter is under the scene root because in that case the\n\
                     parameter does not use the scene root in its full name).\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-005B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D3D1B950-424A-48C9-8B1B-41644AF6B2B6\"></a></span>JScript Example: Getting the RelativeName\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F745F4A6-D00E-4328-9E3C-4AB31148996D\"></a></span>Here is a JScript function that takes the specified <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> object and returns its relative name. GetRelativePathForTarget uses regular expressions\n\
                  to find and remove the name of the model from the FullName of the specified parameter.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
function GetRelativeNameForTarget( in_param )\n\
{\n\
	var mdlname = in_param.Model.FullName;\n\
	if ( mdlname == \"Scene_Root\" ) {\n\
		return in_param.FullName;\n\
	} else {\n\
		var tmp = in_param.FullName;\n\
		var re = new RegExp( mdlname + \".\", \"i\" );\n\
		return tmp.replace( re, \"\" );\n\
	}\n\
}\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-005C\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0D27EEBA-7684-43D6-897B-361AD883A54D\"></a></span>Python Example: Getting the RelativeName\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-CA21F3AA-9EB5-425B-93E4-BE1975A65574\"></a></span>Here\'s the same function in Python. This of GetRelativePathForTarget also uses regular\n\
                  expressions to remove the name of the model from the FullName of the specified parameter.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
def GetRelativeNameForTarget( in_param ) :\n\
	import string as s\n\
	mdlname = in_param.Model.FullName\n\
	if mdlname == \"Scene_Root\" :\n\
		return in_param.FullName\n\
	else :\n\
		return s.replace( in_param.FullName,  mdlname + \".\", \"\" )\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-005D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A9400361-AC05-49E6-BE51-61609456A972\"></a></span>C++ Example: Getting the RelativeName\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-49E9C988-D889-4EC1-A4DF-B83277817B15\"></a></span>Here\'s a similar function for the C++ API. However, since C++ has doesn\'t have the\n\
                  power of regular expressions for string manipulation, a workaround is provided using\n\
                  the C++ API <a href=\"#!/url=./si_cpp/classXSI_1_1CString.html#IsEqualNoCase\">CString::IsEqualNoCase</a> function instead.\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CString GetRelativeNameForTarget( Parameter&amp; in_param )\n\
{\n\
	Model mdl = in_param.GetModel();\n\
	CString mdlname = mdl.GetFullName();\n\
	if ( mdlname.IsEqualNoCase(L\"Scene_Root\") ) {\n\
		// We don\'t care about an object under the scene root \n\
		// (it automatically uses relative names anyways)\n\
		return in_param.GetFullName();\n\
	} else {\n\
		CString tmp = in_param.GetFullName();\n\
		CString lookfor = mdlname + L\".\";\n\
		CString foundsofar = L\"\";\n\
		CString relpath = L\"\";\n\
		\n\
		// This loop looks to find the modelname in the full path. \n\
		// When it finds it, it collects the rest of the string \n\
		// as the relative <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> \n\
		for ( ULONG i=0; i&lt;tmp.Length(); ++i ) {\n\
			if ( foundsofar.IsEqualNoCase(lookfor) ) {\n\
				relpath += tmp[i];\n\
			} else {\n\
				foundsofar += tmp[i];\n\
			}\n\
		}\n\
		\n\
		// Return the relative <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> extracted from the full path\n\
		return relpath;\n\
	}\n\
}\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";