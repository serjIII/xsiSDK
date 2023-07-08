var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>CreateValueMap</title>\n\
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
            <h1>CreateValueMap</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">CreateValueMap</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Traverses two hierarchies, computes the differences in their transformations, \n\
and outputs the differences to global value mapping template of the first \n\
hierarchy. Value-mapping templates provide a way for you to automatically \n\
modify the animation values in an action when you create clips. For example, \n\
you can add an offset so that two characters don\'t try to walk in the same \n\
place at the same time. Similar to connection-mapping templates, value-mapping \n\
templates let you map out information before you perform an action. <br /><br />\n\
Each model can have multiple value-mapping templates and each of these \n\
templates can be active or not. The order of templates is the order of \n\
their creation, as listed in the explorer. You can automatically create a \n\
template that contains the offsets of the current transformation values \n\
between two objects or you can create an empty value-mapping template and \n\
then add rules manually. <br /><br />\n\
Important: The two hierarchies must have the exact same topology, that is, \n\
the same number of children and the same subtree structure.<br /><br />\n\
Note: This command uses <a href=\"#!/url=./files/OutArgDefined.htm\">output arguments</a>. C# and some \n\
scripting languages (such as JScript, PerlScript and Python) don\'t support arguments passed by reference so you \n\
need to use the best workaround for your situation:\n\
<br /><br />\n\
For scripting languages this command returns an <a href=\"#!/url=./files/ISIVTCollection.htm\">ISIVTCollection</a> \n\
which you can use to get the output arguments. \n\
<br /><br />\n\
For C# you can use the <a href=\"#!/url=./si_om/XSIApplication.ExecuteCommand.html\">XSIApplication.ExecuteCommand</a> method to call this command. ExecuteCommand \n\
packs the output arguments into a C# System.Object containing an <a href=\"#!/url=./files/Array.htm\">Array</a> of the output arguments (see\n\
<a href=\"#!/url=./files/csharp_understand_CallingCommandsfromCSharp.htm\">Calling Commands from C#</a>).\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>CreateValueMap( [Obj1], [Obj2], [Mode], [Scope], [UseNames], [MappingTemplate] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Obj1		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/objectexpr.htm\">Root</a> \n\
	of the target hierarchy on which to create the value map.<br /><br />\n\
	Note: The mixer under this object\'s model will be the owner of the newly \n\
	created value map. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
User is prompted to pick			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Obj2		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/objectexpr.htm\">Root</a> of the hierarchy used as the reference pose 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
User is prompted to pick			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Specifies the portions of the pose that will be considered \n\
	when evaluating the differences for the value map.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
4 (all differences)			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Put no data into the template.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Put scaling differences into the template					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Put rotation differences into the template					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Put translation differences into the template					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Put all differences into the template					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Scope		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Specifies whether to compute differences for local or global transformations 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1 (local)			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Put global transform data into the template.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Put local transform data into the template.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Put both local and global transform data into the template.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">UseNames		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Specifies how to compare the hierarchies. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">False					</td>\n\
					<td>Use topology-based hiearchy matching.					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">True					</td>\n\
					<td>Use name comparison-based hiearchy matching.					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">MappingTemplate		</td>\n\
		<td><a href=\"#!/url=./si_om/Property.html\">Property</a>		</td>\n\
		<td>\n\
 Returns the new mapping template. 		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' This example illustrates various mapping template commands,\n\
\' for both connection and value mapping templates -- in particular\n\
\' how to create them and look at the data contained in them.\n\
NewScene , False\n\
\' Create some objects for our example.\n\
set oParent = CreatePrim( \"Sphere\", \"MeshSurface\", \"Parent\" )\n\
set oChild = CreatePrim( \"Cone\", \"MeshSurface\", \"Child\", oParent )\n\
posParams = \"/kine.local.posx,kine.local.posy,kine.local.posz\"\n\
\' Animate the sphere moving horizontally and the\n\
\' cone (child) moving down.\n\
SetPositionKey oParent, 1, -5, 0, 0\n\
SetPositionKey oParent, 50, 5, 0, 0\n\
SetPositionKey oChild, 1, 0, 0, 0\n\
SetPositionKey oChild, 50, 0, -2, 0\n\
\' Store an Action of this animation (on both objects).\n\
set oSource = StoreAction( , oParent &amp; \",\" &amp; oChild &amp; posParams, 2, _\n\
			\"Fun\", True, 1, 50 )\n\
\' We want to map the animation to another \"character\", so we will\n\
\' use a connection mapping template.  CreateConnectionMap can look\n\
\' at identical hierarchies and automatically build an appropriate\n\
\' map.  (or you could build it yourself manually or using scripting)\n\
\' Here we\'ll build a hierarchy and use the auto-matching capability...\n\
set oParent2 = CreatePrim( \"Cube\", \"MeshSurface\", \"Top\" )\n\
set oChild2 = CreatePrim( \"Cylinder\", \"MeshSurface\", \"Bottom\", oParent2 )\n\
\' Translate it so we can demonstrate value mapping templates.\n\
Translate oParent2, 2, 5, 0, siAbsolute, siView, siObj, siXYZ\n\
Translate oChild2, 2, -5, 0, siAbsolute, siView, siObj, siXYZ\n\
\' Instantiate a clip driving the objects on which the animation was\n\
\' originally authored, for comparison.\n\
set oClip = AddClip( \"Scene_Root\", oSource, , , 1, \"Original\" )\n\
\' Now create the connection map so we can apply the original animation\n\
\' on the other hierarchy.  Also, create a value map which will build\n\
\' offset expressions using the pose differences between the objects.\n\
CreateConnectionMap oParent2, oParent, oCnxMap\n\
CreateValueMap oParent2, oParent, 3, 1, False, oValMap\n\
\' Instantiate a clip which uses the connection map to remap to the\n\
\' second set of objects.  Also use the value map to create a clip\n\
\' effect with the appropriate offset for the second hierarchy.\n\
set oClip = AddClip( \"Scene_Root\", oSource, , , 1, \"Remapped\", oCnxMap, oValMap )\n\
\' Let\'s take a look at the connection and value mapping templates\n\
\' that were created and used.\n\
DumpTemplateInfo oCnxMap\n\
DumpTemplateInfo oValMap\n\
\' Finally, a clip itself can be treated as a (value) mapping template.\n\
\' Let\'s look at one...\n\
DumpTemplateInfo oClip &amp; \".actionclip\"\n\
\'==================================================\n\
\' Helper method to key an object somewhere at a given frame.\n\
\'==================================================\n\
sub SetPositionKey( in_oObj, in_frame, in_posX, in_posY, in_posZ )\n\
	Translate in_oObj, in_posX, in_posY, in_posZ, siAbsolute, siParent, siObj, siXYZ\n\
	SaveKey in_oObj &amp; posParams, in_frame\n\
end sub\n\
\'==================================================\n\
\' Helper method to dump some mapping template info.\n\
\'==================================================\n\
sub DumpTemplateInfo( in_Templ )\n\
	\' Get the actual object referenced by name in the argument.\n\
	set oTempl = GetValue( in_Templ )\n\
	msg = \"Template: \" &amp; oTempl.fullname &amp; Chr(10)\n\
	numRules = GetNumMappingRules( in_Templ )\n\
	if oTempl.type = \"actionclip\" then\n\
		msg = msg &amp; \"(Clip acting as value map)\" &amp; Chr(10)\n\
		bSupportsActive = true\n\
	else\n\
		bSupportsActive = false\n\
	end if\n\
	for i = 1 to numRules\n\
		GetMappingRule in_Templ, i, param, expr, active\n\
		msg = msg &amp; Chr(9) &amp; \"Rule \" &amp; i &amp; \": \"\n\
		if bSupportsActive then\n\
			if active then\n\
				msg = msg &amp; \"( active ) \"\n\
			else\n\
				msg = msg &amp; \"(inactive) \"\n\
			end if\n\
		end if\n\
		msg = msg &amp; param &amp; \" -&gt; \" &amp; expr &amp; Chr(10)\n\
	next\n\
	LogMessage msg \n\
end sub\n\
\' Running this script should log the following:\n\
\' ---------------------------------------------\n\
\'INFO : \"Template: Mixer.MappingTemplate\n\
\'	Rule 1: Parent -&gt; Top\n\
\'	Rule 2: Child -&gt; Bottom\n\
\'\"\n\
\'INFO : \"Template: Mixer.ValueMappingTemplate\n\
\'	Rule 1: Top.kine.local.posx -&gt; this + -3.000000\n\
\'	Rule 2: Top.kine.local.posy -&gt; this + 5.000000\n\
\'	Rule 3: Top.kine.local.posz -&gt; \n\
\'	Rule 4: Bottom.kine.local.posx -&gt; \n\
\'	Rule 5: Bottom.kine.local.posy -&gt; this + -8.000000\n\
\'	Rule 6: Bottom.kine.local.posz -&gt; \n\
\'\"\n\
\'INFO : \"Template: Mixer.Mixer_Anim_Track1.Remapped.actionclip\n\
\'(Clip acting as value map)\n\
\'	Rule 1: ( active ) Top.kine.local.posx -&gt; this+-3.000000\n\
\'	Rule 2: ( active ) Top.kine.local.posy -&gt; this+5.000000\n\
\'	Rule 3: ( active ) Top.kine.local.posz -&gt; \n\
\'	Rule 4: ( active ) Bottom.kine.local.posx -&gt; \n\
\'	Rule 5: ( active ) Bottom.kine.local.posy -&gt; this+-8.000000\n\
\'	Rule 6: ( active ) Bottom.kine.local.posz -&gt; \n\
\'\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create first hierarchy\n\
CreatePrim \"Cone\", \"NurbsSurface\", \"MyCone\"\n\
CreatePrim \"Cylinder\", \"NurbsSurface\", \"MyCylinder\", \"MyCone\"\n\
SetValue \"MyCylinder.cylinder.height\", 2\n\
\' Create second hierarchy translated from the first one\n\
CreatePrim \"Cone\", \"NurbsSurface\", \"MyCone1\"\n\
Translate , 5, 0, 0, siAbsolute, siParent, SiObj, siX\n\
CreatePrim \"Cylinder\", \"NurbsSurface\", \"MyCylinder1\", \"MyCone1\"\n\
Translate , , , , siAbsolute, siParent\n\
\' Create a value map.\n\
\' Put local translation differences into the template,\n\
\' and use topology based hierarchy matching, starting\n\
\' with MyCone1 as the reference.\n\
CreateValueMap \"MyCone\", \"MyCone1\", 3, 1, False\n\
\' Although it appears that nothing has happened,\n\
\' a value-mapping template was indeed created for MyCone.\n\
\' You can check for it in the\n\
\' Mixer &gt; Templates &gt; Value Mapping folder in the explorer.\n\
\' If you open the Value Mapping Template, you will see a translation\n\
\' of -5 along the X axis for MyCone relative to MyCone1</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/AddMappingRule.html\">AddMappingRule</a> <a href=\"#!/url=./si_cmds/CreateConnectionMap.html\">CreateConnectionMap</a> <a href=\"#!/url=./si_cmds/DeleteMappingRule.html\">DeleteMappingRule</a> <a href=\"#!/url=./si_cmds/GetMappingRule.html\">GetMappingRule</a> <a href=\"#!/url=./si_cmds/GetNumMappingRules.html\">GetNumMappingRules</a> <a href=\"#!/url=./si_cmds/SetMappingRule.html\">SetMappingRule</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";