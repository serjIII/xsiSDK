var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIQuaternion.Slerp</title>\n\
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
            <h1>SIQuaternion.Slerp</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\"><a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a>.Slerp</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p> Calculates a spherical linear interpolation between q1 and q2 (two unitary quaternions).<br /><br />\n\
Note: In versions earlier than v3.5 the method name was called SLerp. The unnecessary capitialization\n\
has been removed. Plug-ins will remain binary compatible but those that need to be recompiled will \n\
need editing to rename SLerp to Slerp.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIQuaternion.Slerp( SIQuaternion in_pQuat1, SIQuaternion in_pQuat2, Double in_dU );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>SIQuaternion.Slerp( q1, q2, alpha );</pre>		</td>	</tr>\n\
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
		<td class=\"name\">q1		</td>\n\
		<td><a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a>		</td>\n\
		<td>\n\
 unitary quaternion operand 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">q2		</td>\n\
		<td><a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a>		</td>\n\
		<td>\n\
 unitary quaternion operand 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">alpha		</td>\n\
		<td><a href=\"#!/url=./files/Double.htm\">Double</a>		</td>\n\
		<td>\n\
 Interpolation factor 			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">[0.0, 1.0]					</td>\n\
					<td>Validity domain					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>1. JScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"jscript\">/*\n\
	Example showing how to use SIQuaternion.Slerp \n\
	to blend between two rotations\n\
*/\n\
//\n\
// Code for the example scripted operator\n\
//\n\
strDeclOperatorGlobals = \"var gQA, gQB, gQC;\" ;\n\
function Slerper_Init( ctx )\n\
{\n\
	// The SIQuaternion objects are global\n\
	// to avoid recreating them at each update\n\
	gQA = XSIMath.CreateQuaternion() ;\n\
	gQB = XSIMath.CreateQuaternion() ;\n\
	gQC = XSIMath.CreateQuaternion() ;\n\
}\n\
function Slerper_Update( ctx, outC, inA, inB )\n\
{\n\
	slerpFactor = ctx.Parameters( \"Slerp\" ).Value ;\n\
	oATrans = inA.Value.Transform ;\n\
	oATrans.GetRotationQuaternion( gQA ) ;\n\
	oBTrans = inB.Value.Transform ;\n\
	oBTrans.GetRotationQuaternion( gQB ) ;\n\
	gQA.Normalize() ;\n\
	gQB.Normalize() ;\n\
	gQC.Slerp( gQA, gQB, slerpFactor ) ; \n\
	oCTrans = outC.Value.Transform ;\n\
	oCTrans.SetRotationFromQuaternion( gQC ) ;\n\
	// Very important: oCTrans is just a temporary\n\
	// so we must set it back to change it\n\
	outC.Value.Transform = oCTrans ;\n\
}\n\
//\n\
// Demo the scripted operator\n\
//\n\
// Build 3 cones.  C will show the blended rotation of A and B\n\
NewScene( null,false) ;\n\
var oConeA = ActiveSceneRoot.AddPrimitive( \"Cone\", \"A\" ) ;\n\
var oConeB = ActiveSceneRoot.AddPrimitive( \"Cone\", \"B\" ) ;\n\
var oConeC = ActiveSceneRoot.AddPrimitive( \"Cone\", \"C\" ) ;\n\
//\n\
// Set some initial position/rotation\n\
//\n\
oTransA = XSIMath.CreateTransform() ;\n\
oTransA.SetTranslationFromValues( 5, 0 , 0 ) ;\n\
oTransA.SetRotationFromXYZAnglesValues( 0, 0 , XSIMath.DegreesToRadians(-90) ) ;\n\
oConeA.Kinematics.Global.Transform = oTransA ;\n\
oTransB = XSIMath.CreateTransform() ;\n\
oTransB.SetTranslationFromValues( -5, 0 , 0 ) ;\n\
oTransB.SetRotationFromXYZAnglesValues( 0, 0 , XSIMath.DegreesToRadians(90) ) ;\n\
oConeB.Kinematics.Global.Transform = oTransB ;\n\
//\n\
// Connect the Kinematics\n\
//\n\
strOpCode = strDeclOperatorGlobals + \n\
			Slerper_Init.toString() + \n\
			Slerper_Update.toString() ;\n\
oOp = XSIFactory.CreateScriptedOp( \n\
			\"Slerper\", \n\
			strOpCode,\n\
			\"JScript\"\n\
			) ;\n\
oOp.AddOutputPort( oConeC.Kinematics.Global ) ;\n\
oOp.AddInputPort( oConeA.Kinematics.Global )\n\
oOp.AddInputPort( oConeB.Kinematics.Global ) ;\n\
oSlerp = oOp.AddParameter ( XSIFactory.CreateParamDef2(\"Slerp\", siDouble, 0.5, 0, 1) );\n\
oOp.Connect() ;\n\
// Show the operator so that the Slerp amount can be changed with a slider\n\
InspectObj( oOp ) ;</pre></td></tr>\n\
</table>\n\
</div><h4>2. VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">dim q1, q2, q3\n\
\' Create Quaternions.\n\
set q1 = XSIMath.CreateQuaternion(1.0, 1.0, 2.0, 3.0)\n\
set q2 = XSIMath.CreateQuaternion(1.0, 4.0, 5.0, 6.0)\n\
set q3 = XSIMath.CreateQuaternion\n\
q1.Normalize\n\
q2.Normalize\n\
for alpha = 0 to 1 step .1\n\
q3.Slerp q1, q2, alpha\n\
\'do something with q3\n\
next</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/SIQuaternion.Normalize.html\">SIQuaternion.Normalize</a> <a href=\"#!/url=./si_om/SIVector3.html\">SIVector3</a> <a href=\"#!/url=./si_om/SIMatrix3.html\">SIMatrix3</a> <a href=\"#!/url=./si_om/SIMatrix4.html\">SIMatrix4</a> <a href=\"#!/url=./si_om/SIRotation.html\">SIRotation</a> <a href=\"#!/url=./si_om/SITransformation.html\">SITransformation</a> <a href=\"#!/url=./si_om/SIQuaternion.html\">SIQuaternion</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";