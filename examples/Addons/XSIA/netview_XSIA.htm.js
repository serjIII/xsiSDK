var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../../../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../../../scripts/prettify.js\"></script><script src=\"../../../../../../../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\" /><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../../../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>XSIA</title>\n\
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
</style><link rel=\"StyleSheet\" href=\"examples/Addons/XSIA/doc/shared/examples.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/XSIA/doc/shared/utils.js\"); });</script><script type=\"text/javascript\">\n\
			function runExample(mode)\n\
			{\n\
				if (mode == 1) {\n\
					g_app.XSIA_Export();\n\
				} else if (mode==2) {\n\
					g_app.XSIA_Import();\n\
				}\n\
			}\n\
		</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./examples/Addons/scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>XSIA</h1>\n\
         </div>\n\
\n\
	<div class=\"body\"><a name=\"top\"></a>\n\
	<img class=\"netview\" src=\"netview_XSIA.jpg\" style=\"float:left;padding-right:6px;\" />\n\
	<h1>XSIA Importer/Exporter</h1>\n\
	<p>This JScript example demonstrates writing your own importer/exporter for scene summary data using a XML file format.\n\
		The example makes use of the JScript objects, which can be used to emulate object oriented behaviour.\n\
		<br /><br />\n\
		Scene summary files represent a textual (human readable) description of the scene, including referenced models with their\n\
		resolutions and deltas, groups, layers and passes. These files can be generated by the plugin to transport scenes or\n\
		parts of scenes, to rebuild scenes from their basic elements or to just change key scene data such as paths of models.<br />\n\
		Furthermore having an ASCII scene description makes it possible to generate scenes externally, switch models externally etc...\n\
		<br /><br />\n\
		<strong>Note:</strong> This example implements its own XML parsing mechanism, it does not use parsers such as Microsoft DOM, and\n\
		there are limitations to the XML file format used.\n\
	</p>\n\
\n\
	<h2>Example Files</h2>\n\
		<table>\n\
			<tr>\n\
				<td><strong>Location</strong></td>\n\
				<td><span class=\"installPath\"></span></td>\n\
			</tr>\n\
			<tr>\n\
				<td><strong>Files</strong></td>\n\
				<td><div class=\"examplefile\">xsia_plugin.js</div></td>\n\
			</tr>\n\
		</table>\n\
\n\
\n\
	<a name=\"build\"></a><h2>Running the Example</h2>\n\
\n\
	<div id=\"toinstall\" style=\"display:none\">\n\
	<p class=\"proc-head\">To install the example</p>\n\
	<ul>\n\
	<li><p>Connect to the Softimage SDK workgroup at <span class=\"workgroupPath\">%XSISDK_ROOT%\\examples\\workgroup</span>.</p>\n\
		<ol>\n\
		<li>In the <strong>Plug-in Manager</strong>, click the <strong>Workgroups</strong> tab.</li>\n\
		<li>Click <strong>File</strong> and then click <strong>Connect</strong>.</li>\n\
		<li>In the <strong>Connect to Workgroup</strong> dialog box, click <img src=\"..\\..\\doc\\shared\\bBrowse.gif\" />, locate the workgroup folder and then click <strong>Select</strong>.</li>\n\
		</ol>\n\
	</li>\n\
	</ul>\n\
\n\
	<p class=\"proc-head\">To view the help page for an example</p>\n\
\n\
	<ul>\n\
	<li>Do one of the following:</li>\n\
	<ul>\n\
	<li>In the Plug-in Tree, expand the SDK examples workgroup, right-click the example add-on and then click <strong>Help</strong>.\n\
	</li>\n\
	<li>\n\
	Open a Net View and click <img style=\"position:relative;bottom:-6px;\" src=\"..\\..\\doc\\shared\\xsiweb.png\" /> to go to Softimage Net local. In the top navigation bar, click <strong>add-ons</strong>, and then click the SDK example add-on.\n\
	</li>\n\
	</ul>\n\
	</ul>\n\
\n\
	</div>\n\
\n\
	<div>\n\
	<p class=\"proc-head\">To run the exporter example</p>\n\
	<ol>\n\
	<li>\n\
		Select <strong>Referenced Models</strong>, <strong>Groups</strong>, <strong>Layers</strong> and/or <strong>Passes</strong>.\n\
	</li>\n\
\n\
	<p><li>On the main Softimage menubar, click on <strong>File</strong>, then on <strong>Export</strong> and finally on <strong><span class=\"Export_XSIA\" title=\"Click to run the example\">Export XSIA</span></strong>.\n\
	</li></p>\n\
\n\
	<li>\n\
		<p>\n\
			Input the <strong>filename</strong> in the file-save dialog and hit <strong>OK</strong>.\n\
			</p>\n\
	</li>\n\
	</ol>\n\
\n\
\n\
	<p><strong>Notes</strong></p>\n\
	<ul>\n\
	<li>\n\
		<p>The xsia exporter outputs the an ASCII file looking like this:</p>\n\
		<ul>\n\
			<pre>\n\
&#60;?xml version=\"1.0\" encoding=\"iso-8859-1\"?&#62;\n\
&#60;xsia_file type=\"AssetSummaryFile\" xsi_version=\"5.0.2005.0920\" syntax_version=\"1.0\"&#62;\n\
  &#60;models&#62;\n\
	&#60;model name=\"Bobby\" active_resolution=\"1\"&#62;\n\
	  &#60;resolutions&#62;\n\
		&#60;resolution name=\"Offloaded\" filename=\"\"&#62;&#60;/resolution&#62;\n\
		&#60;resolution name=\"res1\" filename=\"C:/XSI_Project/Models/Bobby.emdl\"&#62;&#60;/resolution&#62;\n\
	  &#60;/resolutions&#62;\n\
	  &#60;deltas&#62;\n\
		&#60;delta name=\"Delta\" target=\"test\" persist_modif=\"479\" filename=\"C:/XSI_Project/Deltas/bobby_Delta.delta\" status=\"2\"&#62;&#60;/delta&#62;\n\
	  &#60;/deltas&#62;\n\
	&#60;/model&#62;\n\
  &#60;/models&#62;\n\
  &#60;layers&#62;\n\
	&#60;layer name=\"test\" filename=\"e:/temp/layer_test.Preset\" members=\"\"&#62;&#60;/layer&#62;\n\
  &#60;/layers&#62;\n\
  &#60;passes&#62;\n\
	&#60;pass name=\"Shadow\" filename=\"e:/temp/pass_Shadow.Preset\"&#62;\n\
	  &#60;partitions&#62;\n\
		&#60;partition name=\"Background_Objects_Partition\" members=\"Bobby.cube\"&#62;&#60;/partition&#62;\n\
		&#60;partition name=\"Partition\" members=\"\"&#62;&#60;/partition&#62;\n\
		&#60;partition name=\"Background_Lights_Partition\" members=\"light\"&#62;&#60;/partition&#62;\n\
	  &#60;/partitions&#62;\n\
	&#60;/pass&#62;\n\
  &#60;/passes&#62;\n\
&#60;/xsia_file&#62;</pre>\n\
		</ul>\n\
	</li>\n\
	<li>\n\
		The exporter also creates all of the preset files necessary in the same location as the xsia file.\n\
	</li>\n\
	</ul>\n\
	</div>\n\
\n\
	<a name=\"build\"></a><h2>Running the importer example</h2>\n\
\n\
\n\
	<div>\n\
	<p class=\"proc-head\">To run the importer example</p>\n\
	<ol>\n\
	<li>On the main Softimage menubar, click on <strong>File</strong>, then on <strong>Import</strong> and finally on <strong><span class=\"Import_XSIA\" title=\"Click to run the example\">Import XSIA</span></strong>.\n\
	</li>\n\
\n\
	<li>\n\
		<p>\n\
			Input the <strong>filename</strong> in the file-save dialog and hit <strong>OK</strong>.\n\
			</p>\n\
	</li>\n\
	</ol>\n\
\n\
\n\
	<p><strong>Notes</strong></p>\n\
	<ul>\n\
	<li>\n\
		<p>The importer generates each item described in the XSIA file.</p>\n\
	</li>\n\
	<li>\n\
		If you run the import of the same file multiple times, you will receive multiple copies of the same item.\n\
	</li>\n\
	</ul>\n\
	</div>\n\
\n\
	<a name=\"build\"></a><h2>The XSIA object model</h2>\n\
\n\
	<div>\n\
	<p class=\"proc-head\">Retrieving a XSIA object</p>\n\
	<ul>\n\
	<li>\n\
		In scripting, call the <strong>XSIA_GetXSIAObject</strong>. It returns a XSIA object.\n\
	</li>\n\
	</ul>\n\
\n\
	<p class=\"proc-head\">Object Model Description</p>\n\
	<ul>\n\
	<li>\n\
		<p><strong>XSIA Object</strong></p>\n\
		The XSIA object respresents the content of a xsia file. It can contain data relevant for referenced models, groups, layers and passes.\n\
		<br />Its methods are:\n\
		<ul>\n\
			<li>\n\
				<strong>Clear()</strong> Resets/Clears the object.\n\
			</li>\n\
			<li>\n\
				<strong>AddItemFromScene(item)</strong> - Adds a description of an item to the xsia, where item can be a referenced model, a group, a layer or a pass.\n\
			</li>\n\
			<li>\n\
				<strong>AddItemsFromCollection(coll)</strong> - Adds descriptions of items to the xsia, where coll is a XSIACollection of items.\n\
			</li>\n\
			<li>\n\
				<strong>AddItemsFromArray(arr)</strong> - Adds descriptions of items to the xsia, where arr is a JavaScript Array of items.\n\
			</li>\n\
			<li>\n\
				<strong>WriteToFile(filename)</strong> - Outputs the descriptions of the XSIA object to a file with the given filename.\n\
			</li>\n\
			<li>\n\
				<strong>ReadFromFile(file)</strong> - Adds a description of all item of a given XSIA file to the XSIA object.\n\
			</li>\n\
			<li>\n\
				<strong>BuildInScene(parent)</strong> - Creates all items described in the XSIA object in the scene. parent is typically the current Scene_Root.\n\
			</li>\n\
		</ul>\n\
		Its properties are:\n\
		<ul>\n\
			<li>\n\
				<strong>type</strong> - A string storing \"XSIA\".\n\
			</li>\n\
			<li>\n\
				<strong>fso</strong> - An instance of the ActiveXObject \"Scripting.FileSystemObject\".\n\
			</li>\n\
			<li>\n\
				<strong>models</strong> - A XSICollection storing XSIAModel objects.\n\
			</li>\n\
			<li>\n\
				<strong>groups</strong> - A XSICollection storing XSIAGroup objects.\n\
			</li>\n\
			<li>\n\
				<strong>layers</strong> - A XSICollection storing XSIAGroup objects (for layers though).\n\
			</li>\n\
			<li>\n\
				<strong>passes</strong> - A XSICollection storing XSIAPass objects.\n\
			</li>\n\
			<li>\n\
				<strong>includes</strong> - A XSICollection storing nested XSIA objects.\n\
			</li>\n\
		</ul>\n\
	</li>\n\
	<li>\n\
		<p><strong>XSIAModel Object</strong></p>\n\
		The XSIAModel object respresents the description of a referenced model.\n\
		<br />Its methods are:\n\
		<ul>\n\
			<li>\n\
				<strong>Clear()</strong> Resets/Clears the object.\n\
			</li>\n\
			<li>\n\
				<strong>SetFromScene(model)</strong> - Sets the description data of the XSIAModel based on the given model in the scene.\n\
			</li>\n\
			<li>\n\
				<strong>BuildInScene(parent)</strong> - Builds the model in the scene based on the description of the XSIAModel.\n\
			</li>\n\
		</ul>\n\
		Its properties are:\n\
		<ul>\n\
			<li>\n\
				<strong>type</strong> - A string storing \"XSIAModel\".\n\
			</li>\n\
			<li>\n\
				<strong>name</strong> - The name of the model.\n\
			</li>\n\
			<li>\n\
				<strong>active_resolution</strong> - The index of the active resolution of the referenced model.\n\
			</li>\n\
			<li>\n\
				<strong>scnPtr</strong> - The object in the scene (if existent)\n\
			</li>\n\
			<li>\n\
				<strong>resolutions</strong> - A XSICollection storing XSIAResolution objects.\n\
			</li>\n\
			<li>\n\
				<strong>deltas</strong> - A XSICollection storing XSIADelta objects.\n\
			</li>\n\
		</ul>\n\
	</li>\n\
	<li>\n\
		<p><strong>XSIAResolution Object</strong></p>\n\
		The XSIAResolution object respresents the description of a resolution of a referenced model.\n\
		<br />Its methods are:\n\
		<ul>\n\
			<li>\n\
				<strong>Clear()</strong> Resets/Clears the object.\n\
			</li>\n\
			<li>\n\
				<strong>SetFromScene(index)</strong> - Sets the description data of the XSIAResolution based on the given index (on its parent model).\n\
			</li>\n\
			<li>\n\
				<strong>BuildInScene(model)</strong> - Builds the resolution on the given model.\n\
			</li>\n\
		</ul>\n\
		Its properties are:\n\
		<ul>\n\
			<li>\n\
				<strong>type</strong> - A string storing \"XSIAResolution\".\n\
			</li>\n\
			<li>\n\
				<strong>name</strong> - The name of the resolution.\n\
			</li>\n\
			<li>\n\
				<strong>filename</strong> - The filename of the EMDL used for this resolution.\n\
			</li>\n\
		</ul>\n\
	</li>\n\
	<li>\n\
		<p><strong>XSIADelta Object</strong></p>\n\
		The XSIADelta object respresents the description of a delta object on a referenced model.\n\
		<br />Its methods are:\n\
		<ul>\n\
			<li>\n\
				<strong>Clear()</strong> Resets/Clears the object.\n\
			</li>\n\
			<li>\n\
				<strong>SetFromScene(delta)</strong> - Sets the description data of the XSIADelta based on the given delta in the scene.\n\
			</li>\n\
			<li>\n\
				<strong>BuildInScene(model)</strong> - Builds the delta in the scene based on the description of the XSIADelta as a child of the given model.\n\
			</li>\n\
		</ul>\n\
		Its properties are:\n\
		<ul>\n\
			<li>\n\
				<strong>type</strong> - A string storing \"XSIADelta\".\n\
			</li>\n\
			<li>\n\
				<strong>name</strong> - The name of the delta.\n\
			</li>\n\
			<li>\n\
				<strong>filename</strong> - The filename of the delta.\n\
			</li>\n\
			<li>\n\
				<strong>scnPtr</strong> - The object in the scene (if existent)\n\
			</li>\n\
			<li>\n\
				<strong>persist_modif</strong> - The value of the persist_modifications on the delta.\n\
			</li>\n\
			<li>\n\
				<strong>target</strong> - The name of the target model of the delta.\n\
			</li>\n\
			<li>\n\
				<strong>status</strong> - The value of the \'status\' of the delta (offloaded/loaded)\n\
			</li>\n\
		</ul>\n\
	</li>\n\
	<li>\n\
		<p><strong>XSIAGroup Object</strong></p>\n\
		The XSIAGroup object respresents the description of a group/layer/partition.\n\
		<br />Its methods are:\n\
		<ul>\n\
			<li>\n\
				<strong>Clear()</strong> Resets/Clears the object.\n\
			</li>\n\
			<li>\n\
				<strong>SetFromScene(group)</strong> - Sets the description of the XSIAGroup based on the given group/layer/partition in the scene.\n\
			</li>\n\
			<li>\n\
				<strong>BuildInScene(parent)</strong> - Builds the group in the scene. Normal groups are parent under the given parent.\n\
			</li>\n\
		</ul>\n\
		Its properties are:\n\
		<ul>\n\
			<li>\n\
				<strong>type</strong> - A string storing \"XSIAGroup\".\n\
			</li>\n\
			<li>\n\
				<strong>groupType</strong> - A string storing \"group\",\"layer\" or \"partition\".\n\
			</li>\n\
			<li>\n\
				<strong>name</strong> - The name of the group.\n\
			</li>\n\
			<li>\n\
				<strong>filename</strong> - The filename of the preset used to create this group.\n\
			</li>\n\
			<li>\n\
				<strong>members</strong> - A XSICollection of all of the members of this group.\n\
			</li>\n\
		</ul>\n\
	</li>\n\
	<li>\n\
		<p><strong>XSIAPass Object</strong></p>\n\
		The XSIAPass object respresents the description of a group/layer/partition.\n\
		<br />Its methods are:\n\
		<ul>\n\
			<li>\n\
				<strong>Clear()</strong> Resets/Clears the object.\n\
			</li>\n\
			<li>\n\
				<strong>SetFromScene(pass)</strong> - Sets the description of the XSIAPass based on the given pass in the scene.\n\
			</li>\n\
			<li>\n\
				<strong>BuildInScene()</strong> - Builds the pass in the scene.\n\
			</li>\n\
		</ul>\n\
		Its properties are:\n\
		<ul>\n\
			<li>\n\
				<strong>type</strong> - A string storing \"XSIAPass\".\n\
			</li>\n\
			<li>\n\
				<strong>name</strong> - The name of the pass.\n\
			</li>\n\
			<li>\n\
				<strong>filename</strong> - The filename of the preset used to create this pass.\n\
			</li>\n\
			<li>\n\
				<strong>partitions</strong> - A XSICollection of XSIAGroup objects representing the partitions of the pass.\n\
			</li>\n\
		</ul>\n\
	</li>\n\
	</ul>\n\
	</div>\n\
\n\
	<div>\n\
	<p class=\"proc-head\">Example uses of the object model</p>\n\
	You cannot run these examples. They are examples of how to use the object model, not runnable scripts.\n\
	<ul>\n\
	<li>\n\
		Create a new xsia object, add a model to it and write the file out.\n\
		(For this you will need a referenced model in the scene called \"model1\" and a directory on you machine called \"C:/temp\"<br /><br />\n\
		<pre>\n\
var xsia = XSIA_GetXSIAObject();\n\
xsia.AddItemFromScene(\"model1\");\n\
xsia.WriteToFile(\"c:/temp/test.xsia\");\n\
		</pre>\n\
	</li>\n\
	<li>\n\
		Open an existing xsia file, get all \"ant\" - models in it and write them to a new file.<br /><br />\n\
		<pre>\n\
var xsia = XSIA_GetXSIAObject();\n\
xsia.ReadFromFile(\"c:/temp/allModels.xsia\");\n\
\n\
var xsia_onlyAnts = XSIA_GetXSIAObject();\n\
\n\
var r = new RegExp(/^ant/i);\n\
for(var i=0;i&#62xsia.models.count;i++)\n\
{\n\
	var match = r.exec(xsia.models(i).name);\n\
	if(match)\n\
	{\n\
		xsia_onlyAnts.models.Add(xsia.models(i));\n\
	}\n\
}\n\
xsia_onlyAnts.WriteToFile(\"c:/temp/onlyAnts.xsia\");\n\
		</pre>\n\
	</li>\n\
	<li>\n\
		Open an existing xsia file and remap a drive of all used models from drive \"s:\" to \"\\\\server\\share\"<br /><br />\n\
		<pre>\n\
var xsia = XSIA_GetXSIAObject();\n\
xsia.ReadFromFile(\"c:/temp/allModels.xsia\");\n\
for(var i=0;i&#62xsia.models.count;i++)\n\
{\n\
	var model = xsia.models(i);\n\
	for(var j=0;j&#62model.resolutions.count)\n\
	{\n\
		var res = model.resolution(j);\n\
		res.filename = res.filename.replace(/s:/i,\'\\\\\\\\server\\\\share\');\n\
	}\n\
}\n\
xsia.WriteToFile(\"c:/temp/allModels_UNC.xsia\");\n\
		</pre>\n\
	</li>\n\
	<li>\n\
		Open two files and include the one file into the other one.<br /><br />\n\
		<pre>\n\
var xsia_1 = XSIA_GetXSIAObject();\n\
var xsia_2 = XSIA_GetXSIAObject();\n\
xsia_1.ReadFromFile(\"C:/temp/xsia_1.xsia\");\n\
xsia_2.ReadFromFile(\"C:/temp/xsia_1.xsia\");\n\
xsia_1.xsia_includes.Add(xsia_2);\n\
\n\
xsia_1.WriteToFile(\"C:/temp/include.xsia\");\n\
		</pre>\n\
	</li>\n\
	<li>\n\
		Open an existing XSIA file and import just the passes.<br /><br />\n\
		<pre>\n\
var xsia = XSIA_GetXSIAObject();\n\
xsia.ReadFromFile(\"C:/temp/passes.xsia\");\n\
for(var i=0;i&#62xsia.passes.count;i++)\n\
{\n\
	xsia.passes(i).BuildInScene();\n\
}\n\
		</pre>\n\
	</li>\n\
	</ul>\n\
\n\
	<div id=\"keywords\">\n\
	<h2>Keywords</h2>\n\
	<p>This example uses the following keywords:</p>\n\
	<p>\n\
	import, export, ascii, xsia, xml,\n\
	example, javascript, registercommand,\n\
	registermenu\n\
	</p>\n\
	</div>\n\
\n\
	</div>\n\
	      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></div></body>\n\
</html>\n\
";