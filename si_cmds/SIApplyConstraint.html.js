var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIApplyConstraint</title>\n\
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
            <h1>SIApplyConstraint</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIApplyConstraint</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Constrains an object to one or more constraining objects. Constraints are placed under the kinematics \n\
property of the constrained object. SIApplyConstraint differs from <a href=\"#!/url=./si_cmds/ApplyCns.html\">ApplyCns</a> and \n\
<a href=\"#!/url=./si_cmds/SIApplyCns.html\">SIApplyCns</a> in that it has parameters for directly controlling the constraint\'s \n\
offsets. When both compensating and passing offsets, the offset values take precedence over compensation.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SIApplyConstraint( PresetObj, [ConstrainedObj], [ConstrainingObj], [Compensation], [Offset1X], [Offset1Y], [Offset1Z], [Offset2X], [Offset2Y], [Offset2Z] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> containing the new <a href=\"#!/url=./si_om/Constraint.html\">Constraint</a> object(s).</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PresetObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a> or a preset object (see <a href=\"#!/url=./si_cmds/SIGetPreset.html\">SIGetPreset</a>)		</td>\n\
		<td>\n\
\n\
		Constraint preset.\n\
		<br /><br />\n\
		Warning: The preset name is case-sensitive on Linux. \n\
			</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConstrainedObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of objects to be constrained. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">ConstrainingObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of constraining objects.  			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Selected objects			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Compensation		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 True to turn on compensation 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
False			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Offset1X		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 X offset value 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">RotationOffset(Orientationconstraint)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">TargetOffset(Directionconstraint)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ScalingOffset(Scalingconstraint)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ConstrainedObjectAttachPoint(Distance,Position,Surface,Trajectoryconstraints)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Offset1Y		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 Y offset value 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">RotationOffset(Orientationconstraint)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">TargetOffset(Directionconstraint)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ScalingOffset(Scalingconstraint)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ConstrainedObjectAttachPoint(Distance,Position,Surface,Trajectoryconstraints)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Offset1Z		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 Z offset value 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">RotationOffset(Orientationconstraint)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">TargetOffset(Directionconstraint)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ScalingOffset(Scalingconstraint)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ConstrainedObjectAttachPoint(Distance,Position,Trajectory,Surface,Trajectoryconstraints)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Offset2X		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 X offset value 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ConstrainingObjectAttachPoint(Distance,Positionconstraints)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Offset2Y		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 Y offset value 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ConstrainingObjectAttachPoint(Distance,Positionconstraints)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Offset2Z		</td>\n\
		<td>Number		</td>\n\
		<td>\n\
 Z offset value 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">ConstrainingObjectAttachPoint(Distance,Positionconstraints)					</td>\n\
					<td>					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Orientation constrain two cones to a cube, compensating one of them.\n\
\'\n\
dim oCube, oConeCompensated, oConeUncompensated\n\
\'\n\
\' get a cube and rotate it so we can see how orientation is being constrained.\n\
\'\n\
set oCube = GetPrim(\"Cube\")\n\
oCube.length = 2\n\
Scale oCube, 0.5, 3, 0.5, siRelative, siLocal, siObj, siXYZ\n\
Rotate oCube, 45, 0, 45, siRelative, siAdd, siObj, siXYZ\n\
\'\n\
\' create the two cones and put on either side of the cube\n\
\'\n\
set oConeCompensated = GetPrim(\"Cone\")\n\
Translate oConeCompensated, -4, 0, 0, siAbsolute, siParent, siObj, siXYZ\n\
set oConeUncompensated = GetPrim(\"Cone\")\n\
Translate oConeUncompensated, 4, 0, 0, siAbsolute, siParent, siObj, siXYZ \n\
\'\n\
\' Apply the constraint\n\
\' Offset one cone\'s orientation by 30 degrees about each axis\n\
\'\n\
SIApplyConstraint \"Orientation\", oConeCompensated, oCube, false, 30,30,30  \n\
SIApplyConstraint \"Orientation\", oConeUncompensated, oCube, false\n\
\'\n\
\' display the constraint relationship in the camera view\n\
\'\n\
SetValue \"Camera.camvis.*constraint*\", True\n\
\'\n\
\' log the constraint offsets to show \n\
\' that one has been compensated\n\
\'\n\
dim comp_x,comp_y,comp_z,uncomp_x,uncomp_y,uncomp_z\n\
comp_x = GetValue( oConeCompensated&amp;\".kine.oricns.offx\")\n\
comp_y = GetValue( oConeCompensated&amp;\".kine.oricns.offy\")\n\
comp_z = GetValue( oConeCompensated&amp;\".kine.oricns.offz\")\n\
uncomp_x = GetValue( oConeUncompensated&amp;\".kine.oricns.offx\")\n\
uncomp_y = GetValue( oConeUncompensated&amp;\".kine.oricns.offy\")\n\
uncomp_z = GetValue( oConeUncompensated&amp;\".kine.oricns.offz\") \n\
logmessage \"Compensated cone offsets:   x= \" &amp; comp_x   &amp; \" y= \" &amp; comp_y   &amp; \" z= \" &amp; comp_z\n\
logmessage \"Uncompensated cone offsets: x= \" &amp; uncomp_x &amp; \" y= \" &amp; uncomp_y &amp; \" z= \" &amp; uncomp_z\n\
\'Results of running this script:\n\
\'INFO : \"Compensated cone offsets:   x= 30 y= 30 z= 30\"\n\
\'INFO : \"Uncompensated cone offsets: x= 0 y= 0 z= 0\"</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIApplyCns.html\">SIApplyCns</a> <a href=\"#!/url=./si_cmds/RemoveAllCns.html\">RemoveAllCns</a> <a href=\"#!/url=./si_cmds/RemoveCns.html\">RemoveCns</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";