var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>Model.Groups</title>\n\
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
            <h1>Model.Groups</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/Model.html\">Model</a>.Groups</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Returns a <a href=\"#!/url=./si_om/GroupCollection.html\">GroupCollection</a> containing all <a href=\"#!/url=./si_om/Group.html\">Group</a> \n\
objects in the model.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>// get accessor\n\
GroupCollection rtn = Model.Groups;</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'----------------------------------------------------------\n\
\'\n\
\'	This example demonstrates how to find groups under the\n\
\'	scene root or under a specific model given the \n\
\'	following structure:\n\
\'\n\
\'        Scene_Root                        Model    Group\n\
\'            + RootGroup                              *\n\
\'            + ChildModel                    *\n\
\'                + ChildGroup                         *\n\
\'            + AnotherChildModel             *\n\
\'                + AnotherChildGroup                  *\n\
\'                + GrandChildModel           *\n\
\'                    + GrandChildGroup                *\n\
\'                                          =====    =====\n\
\'                                            3        4\n\
\'\n\
\'	NB: The Model.Groups property has a limitation of only \n\
\'		getting the immediate children of that model \n\
\'		(whereas you can get every all models in all \n\
\'		generations with the X3DObject.Models property).\n\
\'\n\
\'----------------------------------------------------------\n\
\'\n\
\'	SETUP\n\
\'\n\
NewScene , false\n\
\' Set up a scene with 4 objects\n\
set oRoot = ActiveSceneRoot\n\
set oMbr1 = oRoot.AddGeometry( \"Disc\", \"MeshSurface\" )\n\
set oMbr2 = oRoot.AddGeometry( \"Torus\", \"MeshSurface\" )\n\
set oMbr3 = oRoot.AddGeometry( \"Sphere\", \"MeshSurface\" )\n\
set oMbr4 = oRoot.AddNull()\n\
\' Create a group under the root \n\
oRoot.AddGroup oMbr1, \"RootGroup\"\n\
\' Create a new model and another group under the new model \n\
set oMdl = oRoot.AddModel( oMbr2, \"ChildModel\" )\n\
oMdl.AddGroup oMbr2, \"ChildGroup\" \n\
\' Add another model to the root \n\
set oMdl = oRoot.AddModel( oMbr3, \"AnotherChildModel\" )\n\
oMdl.AddGroup oMbr3, \"AnotherChildGroup\"\n\
\' Nest yet another model under the second child model\n\
set oMdl = oMdl.AddModel( oMbr4, \"GrandChildModel\" )\n\
oMdl.AddGroup oMbr4, \"GrandChildGroup\"\n\
\'----------------------------------------------------------\n\
\'\n\
\'	SEARCH\n\
\'\n\
\' Find all groups under the scene root\n\
LogMessage \"******** GROUPS UNDER \" &amp; oRoot.Name &amp; \" ********\"\n\
FindGroupsUnderModel oRoot\n\
\' Find all groups under \'AnotherChildModel\' \n\
LogMessage \"******** GROUPS UNDER \" &amp; oMdl.Name &amp; \" ********\"\n\
FindGroupsUnderModel oMdl \n\
\' Now find all groups in the scene\n\
RecursiveGroupSearch oRoot\n\
\'----------------------------------------------------------\n\
\'\n\
\'	RESULTS\n\
\'\n\
\'INFO : \"******** GROUPS UNDER Scene_Root ********\"\n\
\'INFO : \"RootGroup contains these members:\"\n\
\'INFO : \"	disc\"\n\
\'INFO : \"******** GROUPS UNDER GrandChildModel ********\"\n\
\'INFO : \"GrandChildModel.GrandChildGroup contains these members:\"\n\
\'INFO : \"	null\"\n\
\'INFO : \"******** FINDING ALL GROUPS IN THE SCENE ********\"\n\
\'INFO : \"# of models under the root: 3\"\n\
\'INFO : \"RootGroup contains these members:\"\n\
\'INFO : \"	disc\"\n\
\'INFO : \"ChildModel.ChildGroup contains these members:\"\n\
\'INFO : \"	torus\"\n\
\'INFO : \"AnotherChildModel.AnotherChildGroup contains these members:\"\n\
\'INFO : \"	sphere\"\n\
\'INFO : \"GrandChildModel.GrandChildGroup contains these members:\"\n\
\'INFO : \"	null\"\n\
\'----------------------------------------------------------\n\
\'\n\
\'	HELPERS\n\
\'\n\
\' Finds all groups under a specific model (not recursive)\n\
function FindGroupsUnderModel( in_model )\n\
	\' Find all groups under the specified model\n\
	set oGrps = in_model.Groups\n\
	for each g in oGrps \n\
		LogMessage g.FullName &amp; \" contains these members:\"\n\
		for each m in g.Members\n\
			LogMessage vbTab &amp; m.Name\n\
		next\n\
	next\n\
end function\n\
\'----------------------------------------------------------\n\
\' Finds all groups under a specific model (recursive). Since\n\
\' we can get every model recursively (except the one we \n\
\' started with) start with listing the groups under the \n\
\' current model and then get the groups for each model under\n\
\' it, calling FindGroupsUnderModel for each one.\n\
function RecursiveGroupSearch( in_model )\n\
	LogMessage \"******** FINDING ALL GROUPS IN THE SCENE ********\"\n\
	LogMessage \"# of models under the root: \" &amp; in_model.Models.Count\n\
	\' First print out the groups info for the current model\n\
	FindGroupsUnderModel in_model\n\
	\' Then iterate over every model contained inside the\n\
	\' current model, printing the groups info for each one\n\
	for each mdl in in_model.Models\n\
		FindGroupsUnderModel mdl\n\
	next\n\
end function</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";