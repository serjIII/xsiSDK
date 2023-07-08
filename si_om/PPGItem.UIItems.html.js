var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>PPGItem.UIItems</title>\n\
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
            <h1>PPGItem.UIItems</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/PPGItem.html\">PPGItem</a>.UIItems <img src=\"images/operator.gif\" alt=\"operator\" /></h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v4.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns or sets the list of items and values associated with a control as a 1-dimensional \n\
<a href=\"#!/url=./files/Array.htm\">Array</a> of Label/Value pairs (<a href=\"#!/url=./files/Variant.htm\">Variant</a>s). This property is \n\
used by controls which display items from a fixed list of choices (for example \n\
siControlCombo, siControlCheck, siControlRadio, and siControlIconList). Each label is a \n\
string and the value is a variant whose type should match the \n\
<a href=\"#!/url=./si_om/Parameter.ValueType.html\">Parameter.ValueType</a> of the associated parameter.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
Object rtn = PPGItem.UIItems;\n\
// set accessor\n\
PPGItem.UIItems = Object;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">// Example demonstrating how sophisticated UI can\n\
// be built using the PPGLayout API.\n\
//\n\
// It demonstrates how the PPGItem.UIItems\n\
// property can be used to store a list of objects\n\
// for a multi-selection ListBox Control. \n\
//\n\
// There are two listboxes.  The first shows all the\n\
// X3DObjects under the Scene Root.  The user\n\
// can move items from this list into a list of selected \n\
// objects.  This example could be adapted in various \n\
// ways, for example it could use the PickObject command.\n\
Main() ;\n\
function Main()\n\
{\n\
	// Create a simple custom property set\n\
	var oCustomProperty = ActiveSceneRoot.AddProperty( \n\
							\"CustomProperty\", \n\
							false, \n\
							\"ObjectList\" ) ;\n\
	oCustomProperty.AddParameter( \"AllObjects\", siString ) ;\n\
	oCustomProperty.AddParameter( \"SelObjects\", siString ) ;\n\
	// Establish the layout\n\
	// Which will be two list controls with 2 buttons \n\
	// in between\n\
	var oLayout = oCustomProperty.PPGLayout\n\
	oLayout.AddRow() ;\n\
	  oLayout.AddGroup( \"\", false, 45) ;\n\
		AddListBox( oLayout, \"AllObjects\" ) ;\n\
	  oLayout.EndGroup() ;\n\
	  oLayout.AddGroup( \"\", false, 10) ;\n\
	    oLayout.Addbutton( \"Add\", \"&gt;&gt;\" ) ;\n\
	    oLayout.Addbutton( \"Remove\", \"&lt;&lt;\" ) ;        \n\
	  oLayout.EndGroup() ;\n\
	  oLayout.AddGroup( \"\", false, 45) ;\n\
	AddListBox( oLayout, \"SelObjects\" ) ;\n\
	  oLayout.EndGroup() ;\n\
	oLayout.EndRow() ;\n\
	oLayout.Language = \"JScript\" ;\n\
	oLayout.Logic = Add_OnClicked.toString() + \n\
			Remove_OnClicked.toString() + \n\
			MoveSelected.toString() ;\n\
	// Populate the \"AllObjects\" list control\n\
	AddSceneItemsToList( oLayout, \"AllObjects\" ) ;\n\
	// Let the user play with the UI\n\
	if ( !InspectObj( oCustomProperty, null,null ,siModal, false ) )\n\
	{\n\
		DoSomethingWithSelectedObjects( oCustomProperty ) ;\n\
	}\n\
	// Cleanup\n\
	DeleteObj( oCustomProperty ) ;\n\
}\n\
function AddListBox( in_oLayout, in_Name )\n\
{\n\
	// Insert a ListBox into the layout\n\
	var oItem = in_oLayout.AddItem( in_Name, \"\", \"ListBox\" ) ;\n\
	oItem.SetAttribute( \"CY\", 100 ) ;\n\
	oItem.SetAttribute( \"NoLabel\", true ) ;\n\
	//Note: Multi-selection list box control only applies to string parameter.\n\
	oItem.SetAttribute( siUIMultiSelectionListBox, true ) ;\n\
}\n\
function AddSceneItemsToList( in_oLayout, in_Name )\n\
{\n\
	// Populate the specified list with the\n\
	// names of objects in the scene\n\
	var oSceneItems = ActiveSceneRoot.FindChildren() ;\n\
	var aItems = new Array( oSceneItems.Count * 2 ) ;\n\
	for ( i = 0 ; i &lt; oSceneItems.Count ; i++ )\n\
	{\n\
		// Both label and value will be the same string\n\
		aItems[i * 2] = oSceneItems.Item(i).Name ;\n\
		aItems[i * 2 + 1] = oSceneItems.Item(i).Name ;			\n\
	}\n\
	var oItem = in_oLayout.Item(in_Name);\n\
	oItem.UIItems = aItems ;\n\
}\n\
function DoSomethingWithSelectedObjects( in_oPSet )\n\
{\n\
	oPPGItem = in_oPSet.PPGLayout.Item( \"SelObjects\" ) ;\n\
	// This is bit of an unusual scenario:\n\
	// Rather than using the Parameter Value, which is\n\
	// equal to the last Selected item in the list,\n\
	// we are interested in the entire list of items in the \n\
	// layout.  Note: because this data is part of the layout,\n\
	// not the Parameter, it is not persisted as part of\n\
	// the scene and is shared by all instances.\n\
	var vbItems = new VBArray(oPPGItem.UIItems);\n\
	var aItems = vbItems.toArray();\n\
	for ( i = 0 ; i &lt; aItems.length ; i+= 2 )\n\
	{\n\
		logmessage( \"Object \" + aItems[i] + \" was selected\" ) ;\n\
	}\n\
}\n\
//Property Page Event code - this code executes\n\
//as the script logic of the Property Page.\n\
function Add_OnClicked()\n\
{\n\
	MoveSelected( \"AllObjects\", \"SelObjects\" ) ;\n\
}\n\
function Remove_OnClicked()\n\
{\n\
	MoveSelected( \"SelObjects\", \"AllObjects\" ) ;\n\
}\n\
function MoveSelected( in_FromList, in_ToList )\n\
{\n\
	// Figure out what was selected by the user\n\
	strSel = PPG.Inspected(0).Parameters(in_FromList).Value ;\n\
	if ( strSel.length == 0 )\n\
	{	\n\
		logmessage( \"Please select an item\" ) ;\n\
		return ;\n\
	}\n\
	var oLayout = PPG.PPGLayout ;\n\
	var oToList = oLayout.Item( in_ToList ) ;\n\
	var oFromList = oLayout.Item( in_FromList ) ;\n\
	var vbItems = new VBArray(oToList.UIItems);\n\
	var aItems = vbItems.toArray();\n\
	//The value associated with Multi-selection list box is\n\
	//a string which is separated with semicolons.\n\
	var splitSel = strSel.split(\";\");\n\
	for( i = 0; i &lt; splitSel.length; ++i)\n\
	{\n\
		// Add the string to the \"ToList\"	\n\
		// Check if the item is already in the list\n\
		var bIsInTheList = false;\n\
		for ( j = 0 ; j &lt; aItems.length ; j+=2 )\n\
		{\n\
			if ( aItems[j] == splitSel[i] )\n\
			{\n\
				logmessage( splitSel[i] + \" is already in the list\", siWarning ) ;\n\
				bIsInTheList = true;\n\
				break;\n\
			}\n\
		}\n\
		if(! bIsInTheList)\n\
		{\n\
			// Push the item to end of the list\n\
			var cntExistingItems = aItems.length\n\
			aItems[cntExistingItems] = splitSel[i] ; // Label\n\
			aItems[cntExistingItems+1] = splitSel[i] ; // Value\n\
			oToList.UIItems = aItems ;\n\
		}\n\
	}\n\
	// Remove the item from the \"FromList\"\n\
	vbItems = new VBArray(oFromList.UIItems);\n\
	var aCurrentItems = vbItems.toArray() ;\n\
	var aNewItems = new Array() ;\n\
	// Fill in the new array with everything except\n\
	// for the selected item\n\
	for ( i = 0 ; i &lt; aCurrentItems.length; i++ )\n\
	{\n\
		var bIsInTheList = false;\n\
		for( j = 0; j &lt; splitSel.length; j++)\n\
		{\n\
			if ( aCurrentItems[i] == splitSel[j] )\n\
			{\n\
				bIsInTheList = true;\n\
				break;\n\
			}\n\
		}\n\
		if(!bIsInTheList)\n\
		{\n\
			aNewItems[aNewItems.length] = aCurrentItems[i] ;\n\
		}\n\
	}\n\
	oFromList.UIItems = aNewItems ;\n\
	// Reset the selection\n\
	if ( aNewItems.length &gt; 0 )\n\
	{\n\
		PPG.Inspected(0).Parameters(in_FromList).Value = aNewItems[0];\n\
	}\n\
	else\n\
	{\n\
		PPG.Inspected(0).Parameters(in_FromList).Value = \"\" ;\n\
	}\n\
	// A refresh is required to show the change\n\
	PPG.Refresh() ;\n\
}</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/PPGLayout.AddEnumControl.html\">PPGLayout.AddEnumControl</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";