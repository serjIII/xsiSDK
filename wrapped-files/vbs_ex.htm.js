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
      <meta name=\"topicid\" content=\"GUID-001DBEC4-3F87-4349-AC37-D0A36E4290D1\" />\n\
      <meta name=\"indexterm\" content=\"VBScript: output arguments\" />\n\
      <meta name=\"indexterm\" content=\"returning: output arguments: in VBScript\" />\n\
      <meta name=\"indexterm\" content=\"output arguments: in VBScript\" />\n\
      <meta name=\"indexterm\" content=\"VBScript Example: Using output arguments\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>VBScript Example: Getting Output Arguments from a Method</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-001DBEC4-3F87-4349-AC37-D0A36E4290D1\"></a></span><div class=\"head\">\n\
            <h1> VBScript Example: Getting Output Arguments from a Method</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A298FEDD-6813-45B6-9918-E4EC61648EE9\"></a></span>Some functions use output arguments to return multiple values in scripting languages\n\
               that support them (such as VBScript). For example, the <a href=\"#!/url=./si_om/NurbsCurve.Get.html\">NurbsCurve.Get</a> method returns a complete data description of the Nurbs Curve all using output arguments:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Set oSpiral = ActiveSceneRoot.AddGeometry( \"Arc\", \"NurbsCurve\" )\n\
oSpiral.ActivePrimitive.Geometry.Curves(0).Get siSINurbs, aCtrlPts, aKnots, bClosed, lDegree, eParFactor\n\
\n\
LogMessage \"INFORMATION FOR \" &amp; oSpiral &amp; \":\"\n\
LogMessage \"==========================================================================\"\n\
LogMessage \"Control Points:\"\n\
For i = 0 to UBound( aCtrlPts, 2 )\n\
	LogMessage \"x = \" &amp; aCtrlPts(0,i) &amp; _\n\
			\"; y = \" &amp; aCtrlPts(1,i) &amp; _\n\
			\"; z = \" &amp; aCtrlPts(2,i)\n\
Next\n\
\n\
LogMessage \"---------------------------------------------------------------\"\n\
LogMessage \"Knots:\"\n\
For j = 0 to UBound( aKnots )\n\
	If j = 0 Then\n\
		sKnotArray = aKnots(j)\n\
	Else\n\
		sKnotArray = sKnotArray &amp; \", \" &amp; aKnots(j)\n\
	End If\n\
Next\n\
LogMessage sKnotArray\n\
\n\
LogMessage \"---------------------------------------------------------------\"\n\
If bClosed Then\n\
	LogMessage oSpiral &amp; \" is closed.\"\n\
Else\n\
	LogMessage oSpiral &amp; \" is not closed.\"\n\
End If\n\
\n\
LogMessage \"---------------------------------------------------------------\"\n\
LogMessage \"Degree of \" &amp; oSpiral &amp; \" is \" &amp; lDegree &amp; \".\"\n\
\n\
LogMessage \"---------------------------------------------------------------\"\n\
Select Case eParFactor\n\
	Case siUniformParameterization\n\
		LogMessage oSpiral &amp; \"\'s knot parameterization is uniform.\"\n\
	Case siNonUniformParameterization\n\
		LogMessage oSpiral &amp; \"\'s knot parameterization is non-uniform.\"\n\
	Case siChordLengthParameterization\n\
		LogMessage oSpiral &amp; \"\'s knot parameterization is chord-length.\"\n\
	Case Else\n\
		LogMessage oSpiral &amp; \"\'s knot parameterization is centripetal.\"\n\
End Select\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-1EE920DB-4CDC-44F4-8817-93764EBC14FD\"></a></span>This example outputs the following information to the Script Editor in Softimage:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\'INFO : \"INFORMATION FOR arc:\"\n\
\'INFO : \"====================================================================\"\n\
\'INFO : \"Control Points:\"\n\
\'INFO : \"x = 0; y = 4; z = 0\"\n\
\'INFO : \"x = 0.130925984580936; y = 4; z = 0\"\n\
\'INFO : \"x = 0.392686645860565; y = 3.987138627451; z = 0\"\n\
\'INFO : \"x = 0.781619130526076; y = 3.92944824405423; z = 0\"\n\
\'INFO : \"x = 1.16300456042221; y = 3.83391512600961; z = 0\"\n\
\'INFO : \"x = 1.53319488189217; y = 3.70145930948035; z = 0\"\n\
\'INFO : \"x = 1.88861828877126; y = 3.53335641633986; z = 0\"\n\
\'INFO : \"x = 2.22585364684673; y = 3.33122536952072; z = 0\"\n\
\'INFO : \"x = 2.54165271631229; y = 3.09701280083833; z = 0\"\n\
\'INFO : \"x = 2.83297430783163; y = 2.83297430783163; z = 0\"\n\
\'INFO : \"x = 3.09701280083833; y = 2.54165271631228; z = 0\"\n\
\'INFO : \"x = 3.33122536952073; y = 2.22585364684672; z = 0\"\n\
\'INFO : \"x = 3.53335641633986; y = 1.88861828877126; z = 0\"\n\
\'INFO : \"x = 3.70145930948036; y = 1.53319488189217; z = 0\"\n\
\'INFO : \"x = 3.83391512600961; y = 1.16300456042221; z = 0\"\n\
\'INFO : \"x = 3.92944824405423; y = 0.781619130526073; z = 0\"\n\
\'INFO : \"x = 3.987138627451; y = 0.392686645860561; z = 0\"\n\
\'INFO : \"x = 4; y = 0.130925984580936; z = 0\"\n\
\'INFO : \"x = 4; y = 0; z = 0\"\n\
\'INFO : \"--------------------------------------------------------------------\"\n\
\'INFO : \"Knots:\"\n\
\'INFO : \"0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 16\"\n\
\'INFO : \"--------------------------------------------------------------------\"\n\
\'INFO : \"arc is not closed.\"\n\
\'INFO : \"--------------------------------------------------------------------\"\n\
\'INFO : \"Degree of arc is 3.\"\n\
\'INFO : \"--------------------------------------------------------------------\"\n\
\'INFO : \"arc\'s knot parameterization is non-uniform.\"\n\
</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";