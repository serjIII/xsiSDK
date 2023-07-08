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
      <meta name=\"topicid\" content=\"GUID-07182A4C-474A-42FD-8574-8DB8A8BAA60D\" />\n\
      <meta name=\"indexterm\" content=\"CompoundParameter\" />\n\
      <meta name=\"indexterm\" content=\"Parameter: compound\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Compound Parameters</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-07182A4C-474A-42FD-8574-8DB8A8BAA60D\"></a></span><div class=\"head\">\n\
            <h1> Compound Parameters</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F95A0441-8340-4454-855A-898412163418\"></a></span>Compound parameters represent bundles of parameters in Softimage. These bundles are\n\
               like an intermediate node between parameters and their property owners. The most common\n\
               compound parameter is the <a href=\"#!/url=./si_om/KinematicState.html\">local or global kinematics</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1KinematicState.html\">local or global kinematics</a>.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-13732BED-A770-45BD-A5F9-D0421D56C70D\"></a></span>For the SDK, compound parameters usually implement their own class ID which derive\n\
               from an internal class called <em class=\"strong\">CompoundParameter</em>. Since this class implements no methods or properties and serves only as an intermediate\n\
               class for more specific classes, the only time you will encounter the class is if\n\
               you <a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">SIObject.IsClassOf</a> or CBase::IsA against the <a href=\"#!/url=./si_om/siClassID.html\">siCompoundParameterID</a>) class ID. Compound parameters also identify themselves as being of type <span class=\"code\" translate=\"no\">CompoundParameter</span> when you <a href=\"#!/url=./si_om/SIObject.Type.html\">SIObject.Type</a> or SIObject::GetType.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSED592B8513B33F4E98849086F360A587-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FC35DA34-082E-4839-A587-71A0786FE2FF\"></a></span>VBScript Example: Testing for Property, Simple and Compound Parameters\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
NewScene , false\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oTorus = Application.ActiveSceneRoot.AddGeometry( \"Torus\", \"MeshSurface\" )\n\
\n\
\' Test a property and its simple parameter\n\
LogInfo oTorus.Properties( \"Visibility\" )\n\
LogInfo oTorus.Properties( \"Visibility\" ).Parameters( \"viewvis\" )\n\
\n\
\' Test property, its compound and simple parameters\n\
LogInfo oTorus.Kinematics\n\
LogInfo oTorus.Kinematics.Local\n\
LogInfo oTorus.Kinematics.Local.Parameters( \"PosX\" )\n\
\n\
\' Ouput:\n\
\' INFO : ----------------------\n\
\' INFO : Name: torus.visibility\n\
\' INFO : Type: visibility\n\
\' INFO : Class: Property\n\
\' INFO : IsClassOf(siParameterID): False\n\
\' INFO : IsClassOf(siCompoundParameterID): False\n\
\' INFO : IsClassOf(siPropertyID): True\n\
\' INFO : ----------------------\n\
\' INFO : Name: torus.visibility.viewvis\n\
\' INFO : Type: Parameter\n\
\' INFO : Class: Parameter\n\
\' INFO : IsClassOf(siParameterID): True\n\
\' INFO : IsClassOf(siCompoundParameterID): False\n\
\' INFO : IsClassOf(siPropertyID): False\n\
\' INFO : ----------------------\n\
\' INFO : Name: torus.kine\n\
\' INFO : Type: kine\n\
\' INFO : Class: Kinematics\n\
\' INFO : IsClassOf(siParameterID): False\n\
\' INFO : IsClassOf(siCompoundParameterID): False\n\
\' INFO : IsClassOf(siPropertyID): True\n\
\' INFO : ----------------------\n\
\' INFO : Name: torus.kine.local\n\
\' INFO : Type: CompoundParameter\n\
\' INFO : Class: KinematicState\n\
\' INFO : IsClassOf(siParameterID): True\n\
\' INFO : IsClassOf(siCompoundParameterID): True\n\
\' INFO : IsClassOf(siPropertyID): False\n\
\' INFO : ----------------------\n\
\' INFO : Name: torus.kine.local.posx\n\
\' INFO : Type: Parameter\n\
\' INFO : Class: Parameter\n\
\' INFO : IsClassOf(siParameterID): True\n\
\' INFO : IsClassOf(siCompoundParameterID): False\n\
\' INFO : IsClassOf(siPropertyID): False\n\
\n\
\n\
\n\
\' Convenience method to print info easily\n\
sub LogInfo( in_obj )\n\
	Application.LogMessage \"----------------------\"\n\
	Application.LogMessage \"Name: \" &amp; in_obj.FullName\n\
	Application.LogMessage \"Type: \" &amp; in_obj.Type\n\
	Application.LogMessage \"Class: \" &amp; TypeName(in_obj)\n\
	Application.LogMessage \"IsClassOf(siParameterID): \" &amp; in_obj.IsClassOf(siParameterID)\n\
	Application.LogMessage \"IsClassOf(siCompoundParameterID): \" &amp; in_obj.IsClassOf(siCompoundParameterID)\n\
	Application.LogMessage \"IsClassOf(siPropertyID): \" &amp; in_obj.IsClassOf(siPropertyID)\n\
end sub\n\
</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";