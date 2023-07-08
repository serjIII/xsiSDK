var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>FCurveEditor</title>\n\
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
            <h1>FCurveEditor</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">FCurveEditor</h2>\n\
\n\
<p><a href=\"#!/url=./si_om/_hier.html#oh_FCurveEditor\">Object Hierarchy</a></p>\n\
\n\
<h3>Introduced</h3>\n\
<div><p>v3.0</p></div>\n\
\n\
<h3>Description</h3>\n\
<div><p> This object provides the context information of the Softimage FCurve editor.  By using the information\n\
exposed by this object, it is possible to write custom fcurve editing scripts or plug-ins which \n\
react to user\'s actions in the FCurve Editor.\n\
<br /><br />\n\
In order to access an instance of this object you need to create a custom command with \n\
the <a href=\"#!/url=./si_om/siCommandCategory.html\">siCommandCategory</a> set to siFCurveCategory.  This command will appear in the\n\
edit menu of the fcurve editor so that the user can execute it on demand.  The command\n\
takes a single argument, which is a pointer to an instance of the FCurveEditor object.\n\
<br /><br />\n\
Using the methods and properties of the <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a> and <a href=\"#!/url=./si_om/FCurveKey.html\">FCurveKey</a> objects\n\
the custom command can change the fcurves.  The user interface will update automatically to reflect \n\
any changes made to the underlying fcurve objects.\n\
<br /><br />\n\
The following example demonstrates two custom fcurve editor scripts, and there are \n\
more examples in Netview, under XSI Local: Tools: Animate.\n\
</p></div>\n\
\n\
<h3>Methods</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveEditor.GetEditorAttribute2.html\">GetEditorAttribute2</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveEditor.GetSelectedKeys2.html\">GetSelectedKeys2</a>		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Properties</h3>\n\
<div><p><table>\n\
	<tr>\n\
\n\
		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveEditor.EditorAttribute.html\">EditorAttribute</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveEditor.SelectedFCurves.html\">SelectedFCurves</a>		</td>		<td class=\"members\" style=\"background:#ffffc0;\"><a href=\"#!/url=./si_om/FCurveEditor.SelectedKeys.html\">SelectedKeys</a>		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
	<tr>\n\
\n\
		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>		<td class=\"members\">&nbsp;		</td>	</tr>\n\
\n\
</table>\n\
</p></div>\n\
\n\
<h3>Examples</h3>\n\
<div><p><h4>VBScript Example</h4><div class=\"example\"><table>\n\
<tr>\n\
<td class=\"example\"><pre class=\"vbscript\">\'\n\
\' Custom FCurve Command Demo\n\
\'\n\
\'This script demontrates the Softimage support for plugging in a \n\
\'custom command.\n\
\'\n\
\'Instructions:\n\
\'\n\
\'1) In order to try this code the commands needs to be saved onto disk in a .vbs \n\
\'file so that it can be registered.\n\
\'\n\
\'2) install the commands using the following, (changing the path according to your config):\n\
\'  xsi -script \"C:/temp/FCurveDemo.vbs\" -main InstallFCurveCmdExamples -args -Location \"c:/temp/FCurveDemo.vbs\"\n\
\'\n\
\'3) Launch Softimage, \n\
\'4) Create some animated parameters, \n\
\'5) Open the fcurve editor, select curves and keys from your animated parameters\n\
\'6) Try the FCurveEditorInfo and AvgSelectedPoints commands which will appear in the Edit menu\n\
sub InstallFCurveCmdExamples( Location )\n\
	dim cmd\n\
	\'Location argument is expected to be the full path name of the script file \n\
	\'where the commands we are installing are implemented\n\
	logmessage \"Installing fcurve editor commands found in \" &amp; Location\n\
	\'Remove any existing earlier registrations of this command\n\
	Application.RemoveCommand \"FCurveEditorInfo\"		\n\
	Application.RemoveCommand \"AvgSelectedPoints\" \n\
	set cmd = Application.CreateCommand(\"FCurveEditorInfo\", siFCurveCategory)\n\
	cmd.Description = \"FCurveEditorInfo shows information about FCurve Context\"\n\
	cmd.ScriptingName = \"FCurveEditorInfo\"\n\
	cmd.Handler = \"OnFCurveEditorInfo\"\n\
	cmd.FileName = Location\n\
	cmd.Language = \"VBScript\"\n\
	\'FCurve callbacks are a sub not a function\n\
	cmd.ReturnValue = false											\n\
	\'FCurve commands get a pointer to an FCurveEditor OM object\n\
	cmd.Arguments.Add \"FCurveEditor\", siArgumentInput, 0, siDispatch\n\
	Application.AddCommand cmd\n\
	logmessage \"FCurveEditorInfo is now added to fcurve editor Edit menu\"\n\
	set cmd = Application.CreateCommand(\"AvgSelectedPoints\", siFCurveCategory)\n\
	cmd.Description = \"AvgSelectedPoints change value of selected keys\"\n\
	cmd.ScriptingName = \"AvgSelectedPoints\"\n\
	cmd.Handler = \"OnAvgSelectedPoints\"\n\
	cmd.FileName = Location\n\
	cmd.Language = \"VBScript\"\n\
	cmd.ReturnValue = false											\n\
	cmd.Arguments.Add \"FCurveEditor\", siArgumentInput, 0, siDispatch\n\
	Application.AddCommand cmd\n\
	logmessage \"AvgSelectedPoints is now added to fcurve editor Edit menu\"\n\
end sub\n\
\'This first demo is informative - it logs a bunch of information about the \n\
\'state of the FCurve editor, in effect demonstrating what you can find out\n\
sub OnFCurveEditorInfo( in_objFCurveEditor )\n\
	LogMessage \"FCurveEditorInfo called - showing information about current context of FCurve Editor\"\n\
	if ( typename( in_objFCurveEditor ) = \"Nothing\" ) then\n\
		Logmessage \"FCurve Argument is NULL\"\n\
	elseif ( typename( in_objFCurveEditor ) &lt;&gt; \"FCurveEditor\" ) then\n\
		LogMessage \"FCurve Argument is not an FCurve, it is a \" &amp; typename( in_objFCurveEditor ) \n\
	else		\n\
		\'Now access the FCurve Context listing the contents.\n\
		dim oCurves, oCurve\n\
		set oCurves = in_objFCurveEditor.SelectedFCurves\n\
		if ( oCurves.Count = 0 ) then\n\
			logmessage \"There are no selected fcurves in the editor\"\n\
		end if\n\
		dim i, strInfo\n\
		for each oCurve in oCurves\n\
			logmessage \"-------------------------------------\"\n\
			\'build a string description of the frame/keyvalues \n\
			\'(for a real motion capture fcurve this would be too long to display like this)\n\
			strInfo = \"\"\n\
			for i = 0 to ( oCurve.Keys.Count - 1 )\n\
				strInfo = strInfo &amp; \"(\" &amp; Round( oCurve.Keys.Item( i ).Time, 3 ) _\n\
							&amp; \", \" &amp; Round( oCurve.Keys.Item( i ).Value, 3 ) &amp; \") \"\n\
			next		\n\
			LogMessage \"Selected FCurve has the following keys: \" &amp; strInfo\n\
			\'List the selected keys\n\
			dim oKeys, oKey\n\
			set oKeys = in_objFCurveEditor.SelectedKeys( oCurve )\n\
			if ( oKeys.Count = 0 ) then\n\
				logmessage \"There are no keys selected on this fcurve\"\n\
			else\n\
				strInfo = \"\"\n\
				for each oKey in oKeys\n\
					strInfo = strInfo &amp; \"(\" &amp; Round( oKey.Time, 3 ) &amp; \", \" &amp; Round( oKey.Value, 3 ) &amp; \") \"\n\
				next\n\
				LogMessage \"The following keys are selected on this FCurve: \" &amp; strInfo\n\
			end if			\n\
		next\n\
		\'The user may have selected a region in the fcurve editor.  This information is available like this:\n\
		logmessage \"-------------------------------------\"\n\
		dim Start, endFrame, Min, Max\n\
		Start = in_objFCurveEditor.EditorAttribute( siRegionStartFrame )\n\
		endFrame = in_objFCurveEditor.EditorAttribute( siRegionEndFrame )\n\
		Min = in_objFCurveEditor.EditorAttribute( siRegionMin )\n\
		Max = in_objFCurveEditor.EditorAttribute( siRegionMax )\n\
		if ( Start &lt;&gt; endFrame ) then\n\
			logmessage \"User has selected time region from frame \" &amp;_ \n\
						round( Start, 2 ) &amp; \" to \" &amp; round( endFrame, 2 )\n\
		else\n\
			logmessage \"No time region is selected\"\n\
		end if \n\
		if ( Min &lt;&gt; Max ) then\n\
			logmessage \"User has selected key value range from \" &amp;_ \n\
						round( Min, 2 ) &amp; \" to \" &amp; round( Max, 2 )\n\
		else\n\
			logmessage \"No Value region is selected\"\n\
		end if \n\
	end if\n\
end sub\n\
\'This second demo is action oriented - it changes the state of the FCurves that are selected.\n\
\'\n\
\'In this case we take the selected keys and set their values to the average.\n\
sub OnAvgSelectedPoints( in_objFCurveEditor )\n\
	LogMessage \"AvgSelectedPoints called\"\n\
	\'Example of some simple error handling\n\
	if ( typename( in_objFCurveEditor ) &lt;&gt; \"FCurveEditor\" ) then\n\
		LogMessage \"Invalid argument to command - Should be FCurveEditor object instead we got a \" _ \n\
					&amp; typename( in_objFCurveEditor ), siError\n\
		exit sub\n\
	end if\n\
	dim bDidSomething\n\
	bDidSomething = false\n\
	dim oCurves, oCurve\n\
	set oCurves = in_objFCurveEditor.SelectedFCurves\n\
	for each oCurve in oCurves\n\
		dim oKeys, oKey, cntKeys\n\
		set oKeys = in_objFCurveEditor.SelectedKeys( oCurve )\n\
		cntKeys = oKeys.Count\n\
		if ( cntKeys &gt; 1 ) then\n\
			dim sumValues, avgValue\n\
			sumValues = 0\n\
			for each oKey in oKeys\n\
				sumValues = sumValues + oKey.Value\n\
			next\n\
			avgValue = sumValues / cntKeys\n\
			for each oKey in oKeys\n\
				oKey.Value = avgValue\n\
			next\n\
			bDidSomething = true\n\
		end if \n\
	next\n\
	if ( not bDidSomething ) then\n\
		LogMessage \"Please select two or more keys on an fcurve to average\"\n\
	end if\n\
end sub</pre></td></tr>\n\
</table>\n\
</div></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Command.html\">Command</a> <a href=\"#!/url=./si_om/FCurve.html\">FCurve</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";