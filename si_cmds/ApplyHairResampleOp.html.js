var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>ApplyHairResampleOp</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_cmds/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_cmds/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>ApplyHairResampleOp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">ApplyHairResampleOp</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Applies a uniform resample operation to a hair object. This makes all segments uniform in length, and ensures the \n\
hair is ready to be manipulated or styled with the standard hair constraints active. Hair must be resampled \n\
whenever hair is non-uniform (for example, when it has been edited in \"stretchy\" mode) and when constrained \n\
editing operations need to be applied, such as adding dynamics or scaling the hair.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = ApplyHairResampleOp( InputObjs );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns the <a href=\"#!/url=./files/paramexpr.htm\">full path</a> of the hair operator.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">InputObjs		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">Selection list</a>		</td>\n\
		<td>\n\
 Specifies the hair object to be resampled 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example shows use of the ApplyHairResampleOp command.\n\
NewScene , False\n\
set oGrid = CreatePrim( \"Grid\", \"MeshSurface\" )\n\
SetValue oGrid &amp; \".polymsh.geom.subdivu\", 1\n\
SetValue oGrid &amp; \".polymsh.geom.subdivv\", 1\n\
set oHair = ApplyHairOp( oGrid )\n\
\' Turn on \"show points\" mode in the camera view.\n\
SetValue \"Camera.camvis.compobjselvert\", True\n\
\' Move some hair points in stretchy mode.\n\
SetValue oHair &amp; \".hair.AllowStretch\", True\n\
Translate oHair &amp; \".pnt[(1,13)]\", 5.7, 2.4, 0, siRelative, siView, siObj, siXYZ\n\
Translate oHair &amp; \".pnt[(1,12)]\", 3.5, 2.8, 0, siRelative, siView, siObj, siXYZ\n\
Translate oHair &amp; \".pnt[(1,11)]\", 1.9, 2.2, 0, siRelative, siView, siObj, siXYZ\n\
Translate oHair &amp; \".pnt[(3,11)]\", -2.7, -0.5, 0, siRelative, siView, siObj, siXYZ\n\
Translate oHair &amp; \".pnt[(3,12)]\", -3.2, 0, 0, siRelative, siView, siObj, siXYZ\n\
msgbox \"See how some hair segments are stretched now...\"\n\
\' Now resample the hair uniformly and turn off stretchy mode.\n\
ApplyHairResampleOp oHair\n\
SetValue oHair &amp; \".hair.AllowStretch\", False\n\
msgbox \"And now they\'re all uniformly sampled...\"\n\
\' Running the script should pop up the two message boxes, one before\n\
\' and the other after uniformly resampling the hair segments.</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";