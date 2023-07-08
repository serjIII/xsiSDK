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
      <meta name=\"topicid\" content=\"GUID-BA11B4EC-7AFC-494D-BB53-3DFE6DF85CD6\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Command Examples</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Parameter\", \"si_cpp/classXSI_1_1Parameter.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-BA11B4EC-7AFC-494D-BB53-3DFE6DF85CD6\"></a></span><div class=\"head\">\n\
            <h1>Command Examples</h1>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_C2BEB56DAD0B4B9C99CD63558C4D9F82\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-8697B7CF-4F97-4B1A-BA19-C9854020FC93\"></a></span>Looping Through an Array\n\
            </h2> \n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-B3A5246A-E510-4C52-96D3-C914BDB3CA55\"></a></span>The following example shows how to loop through an array. \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">Application.GetPrim( \"Null\" )\n\
Application.SetMarking( \"kine.local.pos,kine.global.pos\" )\n\
Application.AddToMarking( \"kine.local.ori\" )\n\
markings = Application.GetMarking()\n\
for i in markings:\n\
    Application.LogMessage( i )</pre></div> \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_C2F5331A713148048405BF838B34EA4F\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F39807DB-4518-4614-B940-B9FD68AC0231\"></a></span>Getting the Output Arguments from Commands\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8F4DF770-BF15-49F3-9B74-971C30C8831C\"></a></span>The following example uses the <span class=\"code\" translate=\"no\">GetKeyInfo</span> command to demonstrate how to use the <span class=\"code\" translate=\"no\">ISIVTCollection</span> with Python. The <span class=\"code\" translate=\"no\">GetKeyInfo</span> command does not have a return value, but uses nine output arguments in this order:\n\
               <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"Parameter\" class=\"a_multireflink\">Parameter</a></span>, <span class=\"code\" translate=\"no\">LeftValue</span>, <span class=\"code\" translate=\"no\">RightValue</span>, <span class=\"code\" translate=\"no\">LeftTanParam</span>, <span class=\"code\" translate=\"no\">LeftTanValue</span>, <span class=\"code\" translate=\"no\">RightTanParam</span>, <span class=\"code\" translate=\"no\">RightTanValue</span>, <span class=\"code\" translate=\"no\">RightSegKind</span>, and <span class=\"code\" translate=\"no\">Constraints</span>. These arguments are returned as an <span class=\"code\" translate=\"no\">ISIVTCollection</span> object. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">from win32com.client import constants as c\n\
Application.NewScene( Application.ActiveProject, 0 )\n\
root = Application.ActiveSceneRoot\n\
\n\
# Set up an fcurve on a null\n\
oObj = root.AddNull()\n\
aKeys = ( 1, -5.0, 25, 7.0, 50, 2.0 )\n\
oFCurve = oObj.posx.AddFCurve2( aKeys, c.siDefaultFCurve )\n\
\n\
# The GetKeyInfo command uses these output parameters (in order)\n\
# Parameter LeftValue RightValue LeftTanParam LeftTanValue RightTanParam \n\
# RightTanValue RightSegKind Constraints \n\
ivtInfo = Application.GetKeyInfo( oFCurve, 1 )\n\
Application.LogMessage( \"# of items: \" + str(ivtInfo.Count) )\n\
\n\
# You can loop through the info\n\
for entry in ivtInfo :\n\
    Application.LogMessage( str(entry) )\n\
\n\
# You can get the info by <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a>\n\
i = ivtInfo.Count-1\n\
while i &gt;= 0 :\n\
    Application.LogMessage( \"Item\" + str(i+1) + \" = \" + str(ivtInfo(i)) )\n\
    i = i - 1\n\
\n\
# You can get the info by <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
Application.LogMessage( \"Parameter: \" + str(ivtInfo.Value(\"Parameter\")) )\n\
Application.LogMessage( \"LeftValue: \" + str(ivtInfo.Value(\"LeftValue\")) )\n\
Application.LogMessage( \"RightValue: \" + str(ivtInfo.Value(\"RightValue\")) )\n\
Application.LogMessage( \"LeftTanParam: \" + str(ivtInfo.Value(\"LeftTanParam\")) )\n\
Application.LogMessage( \"LeftTanValue: \" + str(ivtInfo.Value(\"LeftTanValue\")) )\n\
Application.LogMessage( \"RightTanParam: \" + str(ivtInfo.Value(\"RightTanParam\")) )\n\
Application.LogMessage( \"RightTanValue: \" + str(ivtInfo.Value(\"RightTanValue\")) )\n\
Application.LogMessage( \"RightSegKind: \" + str(ivtInfo.Value(\"RightSegKind\")) )\n\
Application.LogMessage( \"Constraints: \" + str(ivtInfo.Value(\"Constraints\")) )</pre></div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";