var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPG.PPGLayout</title>\n\
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
            <h1>PPG.PPGLayout</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPG.html\">PPG</a>.PPGLayout</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns the <a href=\"#!/url=./si_om/PPGLayout.html\">PPGLayout</a> for the currently inspected\n\
object.  By changing the PPGLayout\'s contents, it is possible\n\
to dynamically change the UI from within logic code.  After changes\n\
are complete use <a href=\"#!/url=./si_om/PPG.Refresh.html\">PPG.Refresh</a> to redraw the user\n\
interface.\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// JScript Custom Property example demonstrating how to\n\
// build a simple Script viewer by using the\n\
// siControlFolder, siControlCombo and multi-line string\n\
// control.\n\
//\n\
// Note: This example could be extended: for example by adding a \n\
// \"Save\" and \"New\" button.\n\
Main()\n\
function Main()\n\
{\n\
	var oCustomProperty = ActiveSceneRoot.AddProperty( \n\
	                          \"CustomProperty\", false,\n\
	                          \"Script View\" ) ;\n\
	oCustomProperty.AddParameter3( \"Dir\", siString ) ;\n\
	oCustomProperty.AddParameter3( \"Scripts\", siString ) ;\n\
	oCustomProperty.AddParameter3( \"File\", siString ) ;\n\
	var oLayout = oCustomProperty.PPGLayout\n\
	oLayout.AddGroup( \"Script Directory\" ) ;\n\
	var oItem = oLayout.AddItem( \"Dir\", \"Directory\", \"Folder\" ) ;	\n\
	oItem.SetAttribute( \"NoLabel\", true ) ;	\n\
	oLayout.EndGroup() ;\n\
	oLayout.AddGroup( \"Script File\" ) ;\n\
	var oItem = oLayout.AddEnumControl( \"Scripts\", Array(),\n\
		             \"\", siControlCombo ) ;\n\
	oItem.SetAttribute( \"NoLabel\", true ) ;	\n\
	oLayout.EndGroup();\n\
	oLayout.AddGroup( \"File Contents\" ) ;\n\
	var oItem = oLayout.AddString( \"File\", \"\", true, 200 ) ;\n\
	oItem.SetAttribute( \"NoLabel\", true ) ;	\n\
	oLayout.EndGroup() ;\n\
	oLayout.Language = \"Jscript\" ;\n\
	oLayout.Logic = OnInit.toString() +\n\
		             PopulateCombo.toString() +\n\
		             Dir_OnChanged.toString() +\n\
		             Scripts_OnChanged.toString();\n\
	strDefaultDir = Application.InstallationPath( siUserPath ) + \n\
	                     \"/Data/Scripts\" ;\n\
	oCustomProperty.Dir = strDefaultDir ;	\n\
	InspectObj( oCustomProperty );\n\
}\n\
//\n\
// The remaining code is event code which\n\
// is injected into the PPG layout.\n\
//\n\
function OnInit()\n\
{\n\
	PopulateCombo() ;	\n\
}\n\
function Dir_OnChanged()\n\
{\n\
	PopulateCombo() ;\n\
	PPG.File.Value = \"\" ;\n\
}\n\
function Scripts_OnChanged()\n\
{\n\
	strDir = PPG.Dir.Value \n\
	strScript = PPG.Scripts.Value \n\
	if ( strDir == \"\" || strScript == \"\" )\n\
	{\n\
		PPG.File.Value = \"\" ;\n\
		return ;\n\
	}\n\
	try\n\
	{\n\
		var oFSO = new ActiveXObject( \"Scripting.FileSystemObject\" ) ;		\n\
		var oFile = oFSO.OpenTextFile( strDir + \"/\" + strScript ) ;\n\
		PPG.File.Value = oFile.ReadAll() ;\n\
	}\n\
	catch( e )\n\
	{\n\
		PPG.File.Value = \"\" ;\n\
		Application.LogMessage ( \"Error reading file \" + \n\
		             strDir + \"/\" + strScript + \n\
		             \"(\" + e.Description + \")\" ) ;\n\
	}\n\
}\n\
function PopulateCombo()\n\
{\n\
	strDir = PPG.Dir.Value ;\n\
	strOldValue = PPG.Scripts.Value ; \n\
	// Get access to the PPGLayout object\n\
var oLayout = PPG.PPGLayout ;\n\
	// The Combo box definition is part of the layout.\n\
	// We look it up based on the script name of the associated\n\
	// parameter\n\
	var oCombo = PPG.PPGLayout.Item( \"Scripts\" ) ;\n\
	if ( strDir == \"\" )\n\
	{\n\
		//Flush any contents\n\
		oCombo.UIItems = null ;\n\
		PPG.Scripts.Value = \"\" ;\n\
	}\n\
	else\n\
	{\n\
		var oFSO = new ActiveXObject( \"Scripting.FileSystemObject\" ) ;		\n\
		var oItems = new Array() ;\n\
		try\n\
		{\n\
			bFoundOldValue = false ;\n\
			var oFolder = oFSO.GetFolder( strDir ) ;\n\
		   fc = new Enumerator(oFolder.files);\n\
		   for (; !fc.atEnd(); fc.moveNext())\n\
		   {\n\
		   		var oFile = fc.item() ;\n\
		   		if ( -1 != oFile.Name.indexOf( \".vbs\" ) ||\n\
			   		  -1 != oFile.Name.indexOf( \".js\" ) ||\n\
			   		  -1 != oFile.Name.indexOf( \".pys\" ) ||\n\
			   		  -1 != oFile.Name.indexOf( \".pls\" ) )\n\
			   	{			   		 		   		\n\
			   		// Both label and value will be the string name\n\
			   		oItems.push( oFile.Name ) ;\n\
		   			oItems.push( oFile.Name ) ;\n\
		   			if ( strOldValue == oFile.Name )\n\
		   			{\n\
		   				bFoundOldValue = true ;\n\
		   			}\n\
		   		}\n\
		   }\n\
			oCombo.UIItems = oItems ;\n\
			if ( bFoundOldValue )\n\
			{\n\
				// This is the case when you close and reopen the\n\
				// property page - we want to restore the original \n\
				// setting if possible.\n\
				PPG.Scripts.Value = strOldValue ;\n\
			}\n\
			else\n\
			{\n\
				// We leave the value empty\n\
				// so that the user actually \n\
				// picks a script file\n\
				// before we load anything\n\
				PPG.Scripts.Value = \"\" ;\n\
			}\n\
		}\n\
		catch( e )\n\
		{\n\
			Application.LogMessage( \"Error finding script files\" +\n\
		           \" in specified directory: \" + e.Description );\n\
		}\n\
	}	\n\
	// Necessary to make sure the updated Combo is drawn\n\
	PPG.Refresh() ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/ProjectItem.PPGLayout.html\">ProjectItem.PPGLayout</a> <a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";