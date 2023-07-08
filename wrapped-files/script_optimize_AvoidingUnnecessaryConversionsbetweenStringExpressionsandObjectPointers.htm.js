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
      <meta name=\"topicid\" content=\"GUID-72215410-3F1E-40F1-9232-B3E4A055D0A7\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Avoiding Unnecessary Conversions between String Expressions and Object Pointers</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-72215410-3F1E-40F1-9232-B3E4A055D0A7\"></a></span><div class=\"head\">\n\
            <h1>Avoiding Unnecessary Conversions between String Expressions and Object Pointers</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-F27D5118-9BE8-44DD-BD28-736A7F1382CF\"></a></span>String Expressions are used mostly by scripting commands as a way of identifying scene\n\
               items; object pointers are the preferred type of variable for the object model.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\' Get a pointer to the camera\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> c = ActiveSceneRoot.FindChild( \"Camera\" )\n\
\n\
	\' We can save the <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> of the object as a string in different ways\n\
	\' 	Object -&gt; String Expression\n\
	s1 = GetValue( c )\n\
	s2 = c.Name\n\
\n\
	\' As can converting the object\'s <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> to an object pointer \n\
	\' 	String Expression -&gt; Object\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> o1 = GetValue( s1 )\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> o2 = Dictionary.GetObject( s2 )\n\
\n\
	LogMessage \"c = \" &amp; TypeName(c)\n\
	LogMessage \"s1 = \" &amp; TypeName(s1)\n\
	LogMessage \"s2 = \" &amp; TypeName(s2)\n\
	LogMessage \"o1 = \" &amp; TypeName(o1)\n\
	LogMessage \"o2 = \" &amp; TypeName(o2)\n\
\n\
	\'INFO : c = Camera\n\
	\'INFO : s1 = String\n\
	\'INFO : s2 = String\n\
	\'INFO : o1 = Camera\n\
	\'INFO : o2 = Camera</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-B593DD92-B2F9-49EE-91A8-AB9464F8F71F\"></a></span>While you can convert fairly easily between String Expressions and object pointers\n\
               in the Softimage SDK, this can reduce performance and it\'s not generally necessary.\n\
               For example, if you want to use a scripting command that takes a String Expression\n\
               as input to identify a scene element, you don\'t have to convert your object pointer\n\
               to a string: the default property on most simple objects is the <a href=\"#!/url=./si_om/SIObject.Name.html\">Name (SIObject) *</a> property, so you can just pass the object pointer to the command.\n\
            </p>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";