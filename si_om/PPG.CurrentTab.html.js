var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPG.CurrentTab</title>\n\
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
            <h1>PPG.CurrentTab</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPG.html\">PPG</a>.CurrentTab</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the current tab visible on the property page as a <a href=\"#!/url=./files/String.htm\">String</a>.\n\
The tab is identified by its label (see <a href=\"#!/url=./si_om/PPGLayout.AddTab.html\">PPGLayout.AddTab</a>).\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Demonstration of the ability to manipulate Tabs on \n\
// a PPG from within PPG logic code.\n\
//\n\
// It is possible to find out what tab is active,\n\
// change the tab, and to get notified when the tab changes.\n\
// Create a basic Custom PSet that doesn\'t even have any parameters,\n\
// just layout elements.\n\
var oPSet = ActiveSceneRoot.AddProperty( \"CustomProperty\",false,\"TabDemo\" )\n\
var oLayout = oPSet.PPGLayout\n\
oLayout.AddTab( \"Tab 1\" );\n\
oLayout.AddButton( \"Tab1Button\", \"Next\" );\n\
oLayout.AddTab( \"Tab 2\" );\n\
oLayout.AddButton( \"Tab2Button\", \"Previous\" );\n\
oLayout.AddTab( \"LeaveMeAlone\" ) ;\n\
oLayout.AddButton( \"NeverSeen\" );\n\
oLayout.Language = \"JScript\";\n\
oLayout.Logic = OnInit.toString() + \n\
		Tab1_OnTab.toString() + \n\
		Tab2_OnTab.toString() + \n\
		LeaveMeAlone_OnTab.toString() +\n\
		Tab1Button_OnClicked.toString() +\n\
		Tab2Button_OnClicked.toString() ;\n\
InspectObj( oPSet )\n\
//\n\
// The following is the logic code that\n\
// controls the behavior of the PPG.\n\
//\n\
function OnInit()\n\
{\n\
	// Note: Currently it is not possible to change\n\
	// tabs during the OnInit callback		\n\
}\n\
function Tab1Button_OnClicked()\n\
{\n\
	// \"Next\" button\n\
	PPG.CurrentTab = \"Tab 2\" ;\n\
}\n\
function Tab2Button_OnClicked()\n\
{\n\
	// Move to the Previous tab\n\
	PPG.CurrentTab = \"Tab 1\" ;\n\
}\n\
function Tab1_OnTab()\n\
{\n\
	// Called when Tab1 gets clicked\n\
	// and when we first open the PPG.\n\
	// (But not called when we change\n\
	// the tab programmatically.)\n\
	// Notice how the space in the tab label (\"Tab 1\")\n\
	// has been removed to generate the callback name\n\
	// (\"Tab1_OnTab\")\n\
	Logmessage( \"Current tab is: \" + PPG.CurrentTab ) ;	\n\
}\n\
function Tab2_OnTab()\n\
{\n\
	Logmessage( \"Now current tab is: \" + PPG.CurrentTab ) ;\n\
}\n\
function LeaveMeAlone_OnTab()\n\
{\n\
	// Rather a harsh user interface - \n\
	// prevent users from going to this\n\
	// tab.  This might be useful when implementing\n\
	// a Wizard-style workflow \n\
	PPG.CurrentTab = \"Tab 1\" ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/InspectObj.html\">InspectObj</a> <a href=\"#!/url=./si_om/PPG.Inspected.html\">PPG.Inspected</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";