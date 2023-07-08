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
      <meta name=\"topicid\" content=\"GUID-E0A06174-9148-4624-A4EB-100665A704D4\" />\n\
      <meta name=\"indexterm\" content=\"JScript: output arguments\" />\n\
      <meta name=\"indexterm\" content=\"returning: output arguments: in JScript\" />\n\
      <meta name=\"indexterm\" content=\"output arguments: in JScript\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Getting the output arguments from methods\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>JScript Example: Using the Method Ô2\' Workaround</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-E0A06174-9148-4624-A4EB-100665A704D4\"></a></span><div class=\"head\">\n\
            <h1> JScript Example: Using the Method Ô2\' Workaround</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-67FC0FD0-0DF1-47B8-B7C7-1CCAB5D156EE\"></a></span>The VBScript example above can be rewritten in JScript using the <a href=\"#!/url=./si_om/NurbsCurve.Get2.html\">NurbsCurve.Get2</a> method, which returns a complete data description of the Nurbs Curve using an array\n\
               of output values:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var oSpiral = ActiveSceneRoot.AddGeometry( \"Arc\", \"NurbsCurve\" );\n\
var vbOutput = new VBArray( oSpiral.ActivePrimitive.Geometry.Curves(0).Get2( siSINurbs ) );\n\
var aOutput = vbOutput.toArray();\n\
\n\
var vbCtrlPts = new VBArray( aOutput[0] );\n\
var vbKnots = new VBArray( aOutput[1] );\n\
var bClosed = aOutput[2];\n\
var lDegree = aOutput[3];\n\
var eParFactor = aOutput[4];\n\
\n\
LogMessage( \"INFORMATION FOR \" + oSpiral + \":\" );\n\
LogMessage( \"===================================================================\" );\n\
LogMessage( \"Control Points:\" );\n\
for ( i = 0; i &lt; vbCtrlPts.ubound(2); i++ )\n\
{\n\
	LogMessage( \"x = \" + vbCtrlPts.getItem(0,i) +\n\
			\"; y = \" + vbCtrlPts.getItem(1,i) +\n\
			\"; z = \" + vbCtrlPts.getItem(2,i)\n\
			);\n\
}\n\
\n\
LogMessage( \"---------------------------------------------------------------\" );\n\
LogMessage( \"Knots:\" );\n\
var sKnotArray = \"\";\n\
for ( j = 0; j &lt; vbKnots.ubound(1); j++ )\n\
{\n\
	if ( j == 0 )\n\
	{\n\
		sKnotArray = vbKnots.getItem(j).toString(10);\n\
	}\n\
	else\n\
	{\n\
		sKnotArray = sKnotArray + \", \" + vbKnots.getItem(j).toString(10);\n\
	}\n\
}\n\
LogMessage( sKnotArray );\n\
\n\
LogMessage( \"---------------------------------------------------------------\" );\n\
if ( bClosed )\n\
{\n\
	LogMessage( oSpiral + \" is closed.\" );\n\
}\n\
else\n\
{\n\
	LogMessage( oSpiral + \" is not closed.\" );\n\
}\n\
\n\
LogMessage( \"---------------------------------------------------------------\" );\n\
LogMessage( \"Degree of \" + oSpiral + \" is \" + lDegree + \".\" );\n\
\n\
LogMessage( \"---------------------------------------------------------------\" );\n\
switch( eParFactor )\n\
{\n\
	case siUniformParameterization :\n\
		LogMessage( oSpiral + \"\'s knot parameterization is uniform.\" );\n\
		break;\n\
	case siNonUniformParameterization :\n\
		LogMessage( oSpiral + \"\'s knot parameterization is non-uniform.\" );\n\
		break;\n\
	case siChordLengthParameterization :\n\
		LogMessage( oSpiral + \"\'s knot parameterization is chord-length.\" );\n\
		break;\n\
	default :\n\
		LogMessage( oSpiral + \"\'s knot parameterization is centripetal.\" );\n\
}\n\
\n\
// Output:\n\
//INFO : \"INFORMATION FOR arc:\"\n\
//INFO : \"=================================================================\"\n\
//INFO : \"Control Points:\"\n\
//INFO : \"x = 0; y = 4; z = 0\"\n\
//INFO : \"x = 0.13092598458093568; y = 4; z = 0\"\n\
//INFO : \"x = 0.39268664586056534; y = 3.9871386274509976; z = 0\"\n\
//INFO : \"x = 0.7816191305260763; y = 3.9294482440542317; z = 0\"\n\
//INFO : \"x = 1.1630045604222143; y = 3.833915126009607; z = 0\"\n\
//INFO : \"x = 1.5331948818921716; y = 3.701459309480353; z = 0\"\n\
//INFO : \"x = 1.888618288771264; y = 3.5333564163398594; z = 0\"\n\
//INFO : \"x = 2.22585364684673; y = 3.3312253695207223; z = 0\"\n\
//INFO : \"x = 2.541652716312285; y = 3.0970128008383315; z = 0\"\n\
//INFO : \"x = 2.832974307831633; y = 2.83297430783163; z = 0\"\n\
//INFO : \"x = 3.097012800838334; y = 2.541652716312281; z = 0\"\n\
//INFO : \"x = 3.331225369520725; y = 2.225853646846725; z = 0\"\n\
//INFO : \"x = 3.5333564163398616; y = 1.8886182887712594; z = 0\"\n\
//INFO : \"x = 3.701459309480355; y = 1.5331948818921681; z = 0\"\n\
//INFO : \"x = 3.8339151260096073; y = 1.1630045604222107; z = 0\"\n\
//INFO : \"x = 3.9294482440542317; y = 0.7816191305260733; z = 0\"\n\
//INFO : \"x = 3.987138627450999; y = 0.39268664586056134; z = 0\"\n\
//INFO : \"x = 4; y = 0.13092598458093568; z = 0\"\n\
//INFO : \"-----------------------------------------------------------------\"\n\
//INFO : \"Knots:\"\n\
//INFO : \"0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16\"\n\
//INFO : \"-----------------------------------------------------------------\"\n\
//INFO : \"arc is not closed.\"\n\
//INFO : \"-----------------------------------------------------------------\"\n\
//INFO : \"Degree of arc is 3.\"\n\
//INFO : \"-----------------------------------------------------------------\"\n\
//INFO : \"arc\'s knot parameterization is non-uniform.\"\n\
</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-ECACB6C8-33B1-4AF8-840E-A145D8EC6B40\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AE336A67-3140-4516-9ADD-D4715E93C17B\"></a></span>If the function has a return value explicitly defined, you cannot extract any output\n\
                     arguments from the return value. This is because the function is not returning an\n\
                     output argument array, but a specific value. You can check the <em class=\"mild\">Return Value</em> section in the reference documentation to see whether it uses an explicit return\n\
                     value and what that value is.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";