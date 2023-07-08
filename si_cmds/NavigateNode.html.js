var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>NavigateNode</title>\n\
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
            <h1>NavigateNode</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">NavigateNode</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.5</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> \n\
Navigates through the given object or component, given the specified \n\
navigation filter and direction.  Returns the corresponding object or \n\
component.<br /><br />\n\
Note:  To select an element, use <a href=\"#!/url=./si_cmds/SelectNeighborObj.html\">SelectNeighborObj</a> instead.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = NavigateNode( [Source], [NavDirection], [NavLoop], [NavFilter], [NavSubFilter], [OutputObj] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>\n\
The node at the requested position or InputObj if there is no such node.  \n\
<br /><br />Note : Only the first matching node is returned.\n\
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
		<td class=\"name\">Source		</td>\n\
		<td><a href=\"#!/url=./files/listexpr.htm\">Selection List</a>		</td>\n\
		<td>\n\
Starting point of the navigation.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NavDirection		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
\n\
Specifies how to navigate (ie. Up to the parent, down to the child or \n\
sideways to a sibling).\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
siParentNode			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siParentNode					</td>\n\
					<td>Retrieve the parent					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siChildNode					</td>\n\
					<td>Retrieve the child					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siNextNode					</td>\n\
					<td>Retrieve the next sibling					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siPreviousNode					</td>\n\
					<td>Retrieve the previous sibling					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siFirstNode					</td>\n\
					<td>Retrieve the first sibling					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">siLastNode					</td>\n\
					<td>Retrieve the last sibling					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NavLoop		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
\n\
Specifies whether to return to the begining of the hierarchy and continue searching \n\
when the end is reached or stop searching at the end.\n\
			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">False					</td>\n\
					<td>Do not loop through the hierarchy					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">True					</td>\n\
					<td>Loop through the hierarchy					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NavFilter		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
Type of object we want back.  Default filtering is always used regardless of this value when NavDirection is siParentNode or siChildNode. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
11 : Same type as input			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Scene					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>3D Object					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">3					</td>\n\
					<td>Operator					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">4					</td>\n\
					<td>Primitive					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">5					</td>\n\
					<td>Container or attribute					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">6					</td>\n\
					<td>Cluster					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">7					</td>\n\
					<td>Subcomponent					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">8					</td>\n\
					<td>Group					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">9					</td>\n\
					<td>Any COM Obj					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">10					</td>\n\
					<td>Any type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">11					</td>\n\
					<td>Same Type as input					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">NavSubFilter		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
SubType of object we want.  This is used in conjunction with the NavFilter argument.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
1: Same type as input.			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Any type					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Same Type as input					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">OutputObj		</td>\n\
		<td>Object derived from <a href=\"#!/url=./si_om/SIObject.html\">SIObject</a> (for example, <a href=\"#!/url=./si_om/Parameter.html\">Parameter</a> or <a href=\"#!/url=./si_om/Property.html\">Property</a> or <a href=\"#!/url=./si_om/X3DObject.html\">X3DObject</a>)		</td>\n\
		<td>\n\
\n\
		The node at the requested position.  If there is no such node, the node specified by the \n\
		InputObj parameter is returned.\n\
		<br /><br />\n\
		Note : Only the first matching node is returned.\n\
			</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Returns the children of the current selection in a collection\n\
\' Ouput: XSICollection	| Children of the selected object\n\
Function GetChildren()\n\
	Set childColl = CreateObject( \"XSI.Collection\" )\n\
	If Selection.Count &lt;&gt; 1 Then\n\
		MsgBox \"You must select an object in order to get its children.\", vbExclamation, \"GetChildren\"\n\
	Else\n\
		Set oSelected = Selection(0)\n\
		SetUserPref \"SCR_CMDLOG_ENABLED\", False\n\
		\' get the first child\n\
		Set oChild = NavigateNode( oSelected, siChildNode )\n\
		Set oCurrent = oChild\n\
		\' if there is at least one child\n\
		If	StrComp( oSelected, oChild ) &lt;&gt; 0 Then\n\
			\' Add the child and its siblings to the collection\n\
			Do \n\
				childColl.Add oCurrent\n\
				set oCurrent = NavigateNode( oCurrent, siNextNode, True, 10 )\n\
			Loop Until StrComp( oCurrent, oChild ) = 0\n\
		End If\n\
		SetUserPref \"SCR_CMDLOG_ENABLED\", True\n\
	End If\n\
	Set GetChildren = childColl\n\
End Function\n\
\' Displays the content of a collection in the scripting\n\
\' log\n\
\' Input: oColl	| Collection to display\n\
Sub DisplayCollectionContent( ByRef oColl )\n\
	Dim message\n\
	message = \"The collection contains the following elements:\" &amp; vbLF &amp; vbLF\n\
	For Each element In oColl\n\
		message = message &amp; element &amp; vbLf\n\
	Next\n\
	LogMessage message\n\
End Sub\n\
\' Create a new scene with a null then display its children\n\
NewScene ,False\n\
GetPrim \"Null\", \"MyNull\"\n\
DisplayCollectionContent( GetChildren() )\n\
\'Output of the above script:\n\
\'INFO : \"The collection contains the following elements:\n\
\' \n\
\' MyNull.Name\n\
\' MyNull.null\n\
\' MyNull.AmbientLighting\n\
\' MyNull.Scene_Material\n\
\' MyNull.geomapprox\n\
\' MyNull.display\n\
\' MyNull.kine\n\
\' MyNull.visibility\n\
\' MyNull.kine\n\
\' MyNull.display\n\
\' MyNull.visibility\n\
\' MyNull.Children\n\
\'\"</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\' Create a sphere and a cone :\n\
oSphere = CreatePrim( \"Sphere\", \"MeshSurface\" )\n\
oCone = CreatePrim( \"Cone\", \"MeshSurface\" )\n\
ParentObj oSphere, oCone \n\
\'\n\
\' Navigate in the 3D object hierarchy.\n\
\'\n\
LogMessage \" --- Object Navigation ---\"\n\
\' First, from the sphere, navigate \"up\" to get the scene root:\n\
rtn = NavigateNode( oSphere, 1, , , 0 )\n\
LogMessage \"From \" &amp; oSphere &amp; \", we obtained \" &amp; rtn \n\
\' Now navigate \"down\" from the sphere:\n\
rtn = NavigateNode( oSphere, 2, , 11, 0 )\n\
LogMessage \"From \" &amp; oSphere &amp; \", we obtained \" &amp; rtn \n\
\'\n\
\' Now, navigate amongst newly created clusters.\n\
\'\n\
LogMessage \"--- Cluster Navigation ---\"\n\
oCls1 = CreateCluster( oSphere &amp; \".pnt[25-27,31-34,38-41]\" )\n\
oCls2 = CreateCluster( oSphere &amp; \".pnt[3-6,11-13,52-55]\" )\n\
\' From the first cluster, get the second one:\n\
rtn = NavigateNode( oCls1, 3, True )\n\
LogMessage \"From \" &amp; oCls1 &amp; \", we obtained \" &amp; rtn \n\
\' From the previously obtained cluster, return the next one.\n\
\' If the next one doesn\'t exist, make sure we loop.\n\
LogMessage \"We have now reached the end of the cluster list.\"\n\
newrtn = NavigateNode( rtn, 3, True, 6, 1 )\n\
LogMessage \"From \" &amp; rtn &amp; \", we loop and we obtained \" &amp; newrtn \n\
\' Same as above but this time, we will not \"loop\".\n\
newrtn = NavigateNode( rtn, 3, False, 6, 1 )\n\
LogMessage \"From \" &amp; rtn &amp; \", we DON\'T loop and we obtained \" &amp; newrtn \n\
\' Running this script should log the following:\n\
\' ---------------------------------------------\n\
\'INFO : \" --- Object Navigation ---\"\n\
\'INFO : \"From sphere, we obtained Scene_Root\"\n\
\'INFO : \"From sphere, we obtained sphere.Name\"\n\
\'INFO : \"--- Cluster Navigation ---\"\n\
\'INFO : \"From sphere.polymsh.cls.Point, we obtained sphere.polymsh.cls.Point1\"\n\
\'INFO : \"We have now reached the end of the cluster list.\"\n\
\'INFO : \"From sphere.polymsh.cls.Point1, we loop and we obtained sphere.polymsh.cls.Point\"\n\
\'INFO : \"From sphere.polymsh.cls.Point1, we DON\'T loop and we obtained sphere.polymsh.cls.Point1\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SelectNeighborObj.html\">SelectNeighborObj</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";