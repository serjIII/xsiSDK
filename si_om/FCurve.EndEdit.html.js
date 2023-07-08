var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurve.EndEdit</title>\n\
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
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>FCurve.EndEdit</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/FCurve.html\">FCurve</a>.EndEdit</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Stops recording bulk edits made to the fcurve and commits changes to \n\
the undo/redo stack. A call to EndEdit must follow a call to \n\
<a href=\"#!/url=./si_om/FCurve.BeginEdit.html\">FCurve.BeginEdit</a>.<br /><br />\n\
Note: If you call EndEdit when there is no bulk edit in progress, the \n\
method raises an error. You can check if a bulk edit is in progress\n\
by using the <a href=\"#!/url=./si_om/FCurve.IsEditing.html\">FCurve.IsEditing</a> method.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.EndEdit();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>FCurve.EndEdit();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	This JScript example illustrates how to use the editing recording feature\n\
	of fcurves. This allows changes to be committed only after all edits have \n\
	been completed and undone if necessary.\n\
*/\n\
// Create a null\n\
Application.NewScene( null, false );\n\
var nullobj = ActiveSceneRoot.AddNull();\n\
// Create an fcurve on the posx parameter from the null\n\
var fc = nullobj.posx.AddFCurve();\n\
// Define a random number of keys\n\
var nbkeys = Math.round( Math.random() * 100 ) \n\
LogMessage( nbkeys );\n\
var arraysize = nbkeys * 2;\n\
var keys = new Array( 2 * nbkeys );\n\
var i = 0, empty;\n\
var offset = -50;\n\
for ( i=0; i&lt;arraysize; i+=2 )\n\
{\n\
	keys[i] = offset + i;\n\
	keys[i+1] = ( Math.cos( (i + 1) / 10 ) * 50 );\n\
}\n\
// Set the keys on the fcurve\n\
fc.SetKeys(keys);\n\
// Begin recording changes to fcurve\n\
fc.BeginEdit();\n\
if ( fc.IsEditing() )\n\
{\n\
	LogMessage( \"fcurve is recording changes\" );\n\
}\n\
// Assign random values to keys\n\
for ( i=0; i&lt;fc.GetNumKeys(); i++ )\n\
{\n\
	// Assign a random value to keys\n\
	fc.Keys(i).Value = ( Math.random() * 100 ) - 50;\n\
}\n\
// If the number of keys if greater than 50 then undo all the \n\
// changes you just made\n\
nbkeys = fc.GetNumKeys();\n\
if ( nbkeys&gt; 50 )\n\
{\n\
	Application.LogMessage( \"undoing changes\" );\n\
	fc.undoedit();\n\
}\n\
nbkeys = fc.GetNumKeys();\n\
LogMessage( \"total number of keys = \" + nbkeys );\n\
// End editing (not necessary to call if changes were undone)\n\
fc.EndEdit();\n\
if ( !fc.IsEditing() )\n\
{\n\
	LogMessage( \"fcurve has finished recording changes\" );\n\
}\n\
// Outputs:\n\
//INFO : 87\n\
//INFO : fcurve is recording changes\n\
//INFO : undoing changes\n\
//INFO : total number of keys = 87\n\
//INFO : fcurve has finished recording changes</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/FCurve.BeginEdit.html\">FCurve.BeginEdit</a> <a href=\"#!/url=./si_om/FCurve.UndoEdit.html\">FCurve.UndoEdit</a> <a href=\"#!/url=./si_om/FCurve.IsEditing.html\">FCurve.IsEditing</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";