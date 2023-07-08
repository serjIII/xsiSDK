var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>SIModifyFlexEnvWght</title>\n\
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
            <h1>SIModifyFlexEnvWght</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">SIModifyFlexEnvWght</h2>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v1.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
Modifies the weighting of envelope points. An envelope is an object\n\
or hierarchy that is assigned as a \"skin\" to a set of deformers such\n\
as IK chains. Envelopes move and deform in response to the movements\n\
of their deformers. In this way, for example, a character moves as you\n\
animate its skeleton. <br /><br />\n\
Every point in an envelope is assigned to one or more deformers. For\n\
each point, weights control the relative influence of its deformers.<br /><br />\n\
Note: An alternative, and potentially faster, way to set envelope weights\n\
is via the Object Model, see <a href=\"#!/url=./si_om/Envelope.Weights.html\">Envelope.Weights</a>.\n\
</p></div>\n\
\n\
<h3>Scripting Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>oReturn = SIModifyFlexEnvWght( PropObj, Name, [SubComp], [Mode], [Value], [Normalize] );</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Return Value</h3>\n\
<div><p>Returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> that contains the new envelope operators.</p></div>\n\
\n\
<h3>Parameters</h3>\n\
<div><p><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th title=\"Name of the parameter\">Parameter		</th>\n\
		<th title=\"Data type\">Type		</th>\n\
		<th title=\"Description of the parameter\">Description		</th>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">PropObj		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Envelope weights property to be modified.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Name		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
 Name of a deformer object. Weight values relative to this object are modified. 		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">SubComp		</td>\n\
		<td><a href=\"#!/url=./files/String.htm\">String</a>		</td>\n\
		<td>\n\
<a href=\"#!/url=./files/listexpr.htm\">List</a> of points. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
Current selection			</p>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Mode		</td>\n\
		<td><a href=\"#!/url=./files/Integer.htm\">Integer</a>		</td>\n\
		<td>\n\
 Weight modification mode 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
0 (Absolute)			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0					</td>\n\
					<td>Absolute					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">1					</td>\n\
					<td>Additive					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">2					</td>\n\
					<td>Add Percentage					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Value		</td>\n\
		<td><a href=\"#!/url=./files/Float.htm\">Float</a>		</td>\n\
		<td>\n\
 Weight value applied to the specified points. <br /><br />Note: The valid value range for weights is between 0 and 100.0. When you change the weight for one of the deformers, it also affects other deformer weights since the total weight is always 100%.			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
100.0			</p>\n\
			<table cellpadding=\"5\" cellspacing=\"5\">\n\
				<tr>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Possible Values: </span>						</p>					</td>\n\
					<td>						<p class=\"cell\"><span class=\"hilite\">Description: </span>						</p>					</td>\n\
				</tr>\n\
				<tr>\n\
					<td class=\"name\">0 to 100.0					</td>\n\
					<td>Valid value range is between 0 and 100.0					</td>\n\
				</tr>\n\
			</table>\n\
		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\">Normalize		</td>\n\
		<td><a href=\"#!/url=./files/Boolean.htm\">Boolean</a>		</td>\n\
		<td>\n\
 Normalize weights between deformers. 			<p class=\"cell\"><span class=\"hilite\">Default Value: </span>\n\
True			</p>\n\
		</td>\n\
	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'CreateSinusoidalEnvelope: creates an envelope over 2 Nulls,\n\
\'with a customized, special wave-like weight assignment.\n\
\'\n\
\'A generic subroutine was created; it can handle any mesh as input.\n\
Sub CreateSinusoidalEnvelopeAssign( Object, out_Null0, out_Null1 )\n\
\'Create the two envelope \"handles\"\n\
Set out_Null0 = GetPrim(\"Null\")\n\
Set out_Null1 = GetPrim(\"Null\")\n\
\'Envelope the object with the 2 Nulls\n\
Set EnvelopeWeightsAssign =_\n\
ApplyFlexEnv(Object &amp; \";\" &amp; out_Null0 &amp; \",\" &amp; out_Null1, False)\n\
Set EnvelopeWeightsProperty = _\n\
GetValue( CStr( EnvelopeWeightsAssign ) ).Owners(0)\n\
\'Reset all weights to 100% for Null0 and 0% for Null1\n\
\'(use absolute mode), with normalize ON\n\
SIModifyFlexEnvWght EnvelopeWeightsProperty, out_Null0,_\n\
Object &amp; \".pnt[*]\", 0, 100, True\n\
\'Get object\'s points collection\n\
Set Points = Object.ActivePrimitive.Geometry.Points\n\
NbPts = Points.Count\n\
for i = 0 to NbPts - 1\n\
\'We will set the weight of out_Null1 as\n\
\'\"(1 + Sin(Z Coord of the point))*100/8\" (or any formula).\n\
\'We will user the additive mode in SIModifyFlexEnvWght.\n\
Weight = (1 + Sin(Points(i).position.z * 2.0))*50\n\
SIModifyFlexEnvWght EnvelopeWeightsProperty, out_Null1,_\n\
Object &amp; \".pnt[\" &amp; i &amp; \"]\", 1, Weight\n\
next\n\
End Sub\n\
\'Call CreateSinusoidalEnvelopeAssign with a Grid.\n\
\'Then move one of the 2 Null deformers in order to see the effect.\n\
NewScene\n\
Set Grid = CreatePrim(\"Grid\", \"MeshSurface\")\n\
SetValue Grid &amp; \".polymsh.geom.subdivu\", 1\n\
SetValue Grid &amp; \".polymsh.geom.subdivv\", 30\n\
CreateSinusoidalEnvelopeAssign Grid, Null0, Null1\n\
\'Translate Null1 to see the effect of the special weighting\n\
\'You can move Null1 to see more...\n\
Translate Null1, 3, 0.0, 0.0, siRelative, siView, siObj, siXYZ\n\
\'Let\'s show the weight maps so you can see what was computed:\n\
SetDisplayMode \"Views.ViewA.TopCamera\", \"constant\"\n\
SetValue \"Views.ViewA.TopCamera.camvis.objctrlpropmaps\", True\n\
SelectObj \"grid\", , True</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/SIApplyFlexEnv.html\">SIApplyFlexEnv</a> <a href=\"#!/url=./si_om/Envelope.html\">Envelope</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";