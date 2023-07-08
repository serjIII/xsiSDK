var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPG.Close</title>\n\
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
            <h1>PPG.Close</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPG.html\">PPG</a>.Close</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Forces the PPG to close itself.  This can be useful for simulating pseudo-modal\n\
behavior in a Property Page without actually using the siModal argument to \n\
<a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>PPG.Close();</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Jscript example of a pseudo-modal, self-destructive\n\
// property page.\n\
//\n\
// In cases where a fully modal dialog box isn\'t suitable\n\
// you can accomplish a very similar feature \n\
ClosePPGDemo() ;\n\
function ClosePPGDemo()\n\
{\n\
	newscene( null, false ) ;\n\
	var oPSet = ActiveSceneRoot.AddCustomProperty( \n\
					\"CloseDemo\", \n\
					false ) ;\n\
	oPSet.AddParameter3( \"MyValue\", siInt4 ) ;\n\
	oPSet.AddParameter3( \"Pickedobj\", siString ) ;\n\
	var oPPGLayout = oPSet.PPGLayout ;\n\
	oPPGLayout.AddItem( \"MyValue\" ) ;\n\
	oPPGLayout.AddGroup( \"Picked Object\" )\n\
	oPPGLayout.AddRow() ;\n\
	var oPPGItem = oPPGLayout.AddItem( \"Pickedobj\" ) ;\n\
	oPPGItem.SetAttribute( siUINoLabel, true ) ;	\n\
	oPPGItem = oPPGLayout.AddButton( \"Pick\", \"Pick...\" ) ;\n\
	oPPGItem.WidthPercentage = 10 ;\n\
	oPPGLayout.EndRow() ;\n\
	oPPGLayout.EndGroup() ;\n\
	oPPGLayout.AddRow();\n\
	oPPGLayout.AddButton( \"OK\" ) ;\n\
	oPPGLayout.AddButton( \"Cancel\" ) ;	\n\
	oPPGLayout.EndRow();\n\
	oPPGLayout.Language = \"JScript\" ;\n\
	oPPGLayout.SetAttribute( \"LogicPrefix\", \"CloseDemo_\" ) ;\n\
	oPPGLayout.Logic = CloseDemo_OK_OnClicked.toString() + \n\
		CloseDemo_Cancel_OnClicked.toString() +\n\
		CloseDemo_Pick_OnClicked.toString() ;\n\
	// Pop up the Propery Page.\n\
	// It is not modal, but will clean itself up			\n\
	InspectObj( oPSet ) ;\n\
	// Because the dialog is not modal\n\
	// the script will continue to execute here\n\
	// immediately, even before the Custom Property\n\
	// page has a change to appear.  Be careful not\n\
	// to assume the user has already made some selection\n\
	// and dismissed the dialog.  instead we leave it\n\
	// for the Spdl logic callback to complete whatever\n\
	// work we are trying to accomplish\n\
	Logmessage( \"After InspectObj call\" ) ;\n\
}\n\
// TIP: neither of these callbacks will get called if the\n\
// user closes the dialog using the \"X\".  These only get\n\
// called if the specific OK and Cancel buttons are clicked.\n\
function CloseDemo_OK_OnClicked()\n\
{\n\
	if ( PPG.PickedObj == \"\" )\n\
	{\n\
		// Example of doing some validation \n\
		// before allowing the user to \n\
		// proceed\n\
		XSIUIToolkit.MsgBox( \"Please pick an object first\" ) ;\n\
		return ;\n\
	}		\n\
	// Here is where you would do something\n\
	// based on the values in the property page	\n\
	Logmessage( \"User clicked OK with value: \" + PPG.MyValue ) ;	\n\
	// Cleanup:\n\
	// Delete the object from right beneath us\n\
	DeleteObj( PPG.Inspected.Item(0) ) ;\n\
	// Clearly it would not be safe to make any further\n\
	// Object Model calls now that our object has been\n\
	// deleted\n\
	// However rather than leaving an empty frame\n\
	// we can close the whole window	\n\
	PPG.Close() ;\n\
}\n\
function CloseDemo_Cancel_OnClicked()\n\
{\n\
	// Same as OK, but don\'t do any action\n\
	DeleteObj( PPG.Inspected.Item(0) ) ;\n\
	PPG.Close() ;\n\
}\n\
function CloseDemo_Pick_OnClicked()\n\
{\n\
	// The PickObject command is a good candidate for \n\
	// a pseudo-modal dialog, because it\n\
	// does not work in modal dialogs.\n\
	// PickObject returns multiple arguments\n\
	var aRtn = PickObject( \"Select Object\", \"Select Object\" )\n\
	var buttonChoice = aRtn.Value( \"ButtonPressed\" ) ;\n\
	if ( buttonChoice != 0 ) \n\
	{\n\
		PPG.PickedObj.Value = aRtn.Value( \"PickedElement\" ) ;\n\
	}\n\
}\n\
// Typical results of running this script:\n\
// \n\
//INFO : \"After InspectObj call\"\n\
//INFO : \"User clicked OK with value: 43\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a> <a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";