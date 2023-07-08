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
      <meta name=\"topicid\" content=\"GUID-4339E29B-3FD3-4171-9CDE-738888C06CE3\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Example: Custom Command Workaround for Both Output Arguments and Return Values</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-4339E29B-3FD3-4171-9CDE-738888C06CE3\"></a></span><div class=\"head\">\n\
            <h1>Example: Custom Command Workaround for Both Output Arguments and Return Values</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-9AD71075-A56C-4002-93F3-5476A931F9DE\"></a></span>This example contains a command plug-in that you can call from languages that do not\n\
               support output arguments. It allows those languages to get at the <a href=\"#!/url=./si_cmds/GetSkeleton.html\">GetSkeleton</a> command\'s output argument (<span class=\"code\" translate=\"no\">Index</span>) as well as the returned skeleton objects.\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' Load MyGetSkeleton command\n\
function XSILoadPlugin( in_reg )\n\
	in_reg.Name = \"MyGetSkeletonPlugin\"\n\
	in_reg.Major = 1\n\
	in_reg.Minor = 0\n\
\n\
	in_reg.RegisterCommand \"MyGetSkeleton\",\"MyGetSkeleton\"\n\
\n\
	XSILoadPlugin = true\n\
end function\n\
\n\
\' Define MyGetSkeleton command\n\
function MyGetSkeleton_Init( in_ctxt )\n\
	dim oCmd\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oCmd = in_ctxt.Source\n\
	oCmd.Description = \"Version of GetSkeleton with no output arguments\"\n\
	oCmd.Tooltip = \"Version of GetSkeleton with no output arguments\"\n\
	oCmd.ReturnValue = true\n\
\n\
	dim oArgs\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oArgs = oCmd.Arguments\n\
	oArgs.Add \"InputObj\",siArgumentInput\n\
	MyGetSkeleton_Init = true\n\
end function\n\
\n\
\' Execute callback for the custom command\n\
function MyGetSkeleton_Execute( InputObj )\n\
	\' Call the GetSkeleton command and pack the output \n\
	\' argument and the return value in an array \n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oSkel = GetSkeleton( InputObj, lIndex )\n\
	aReturn = Array( lIndex, oSkel )\n\
\n\
	\' Return the array\n\
	MyGetSkeleton_Execute = aReturn \n\
end function\n\
</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";