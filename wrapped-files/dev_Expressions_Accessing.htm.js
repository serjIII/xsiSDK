var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script>\n\
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n\
      <meta name=\"product\" content=\"SI\" />\n\
      <meta name=\"release\" content=\"2015\" />\n\
      <meta name=\"book\" content=\"Developer\" />\n\
      <meta name=\"created\" content=\"2014-03-13\" />\n\
      <meta name=\"topicid\" content=\"GUID-4D1BA778-3E4D-453C-A7DB-ED9FF1603E54\" />\n\
      <meta name=\"indexterm\" content=\"expressions: accessing\" />\n\
      <meta name=\"indexterm\" content=\"expressions: in the mixer\" />\n\
      <meta name=\"indexterm\" content=\"expressions: storing as actions\" />\n\
      <meta name=\"indexterm\" content=\"clips: accessing expression-based\" />\n\
      <meta name=\"indexterm\" content=\"sources: accessing expression-based\" />\n\
      <meta name=\"indexterm\" content=\"expressions: accessing sources and clips\" />\n\
      <meta name=\"indexterm\" content=\"constraints: interacting with expressions\" />\n\
      <meta name=\"indexterm\" content=\"expressions: interacting with constraints\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing Expressions</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-4D1BA778-3E4D-453C-A7DB-ED9FF1603E54\"></a></span><div class=\"head\">\n\
            <h1> Accessing Expressions</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C9C774EF-87A7-4DF3-8A01-7D47A3A81801\"></a></span>An expression is a piece of data (a <span class=\"char_link\"><a href=\"#!/url=./files/DataSource.htm\">DataSource</a></span> ) that drives a parameter value, which means it is accessible using any of the following\n\
               approaches:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F298C883-B40D-4B50-B2A9-506863651F8C\"></a></span> <em class=\"strong\">Scripting command</em>:<a href=\"#!/url=./si_cmds/GetSource.html\">GetSource</a> which takes the name(s) of of one or more parameters and returns an <a href=\"#!/url=./si_om/XSICollection.html\">XSICollection</a> of its sources\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-C65993F9-6F7A-4160-B456-ECC086D7F77D\"></a></span> <em class=\"strong\">Object model</em>: <a href=\"#!/url=./si_om/Parameter.Source.html\">Parameter.Source</a></p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-D04F2300-B512-40B8-AB0C-BEF885A1A49B\"></a></span> <em class=\"strong\">C++ API</em>: <a href=\"#!/url=./si_cpp/classXSI_1_1Parameter.html#GetSource\">Parameter::GetSource</a></p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8CD82983-DAC6-4D71-85AB-D660780BE554\"></a></span>You can also get animation information from clips and sources that are based on expressions.\n\
               For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0017\">Expressions and the Mixer</a></span>.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0014\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DA35BDD3-1F34-4BB7-8816-0D487CA74302\"></a></span>Python Example: Using the GetSource Command\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-408A9B4B-D5AD-4770-974A-209D74E714F9\"></a></span>This example demonstrates how to use the GetSource ommand in Python to get a pointer\n\
                  to the expression. This example continues from <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Creating.htm#WS00FA839CE9F5F148906F76DDEF5331DD-000F\">Python Example: Setting an Expression with the SetExpr Command</a></span>, which applied an expression to the null\'s position:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# Find the expressions on Null4Expr\n\
rtn = Application.GetSource( params, c.siExpressionSource )\n\
for expr in rtn :\n\
	# From the expression we can access its output port\n\
	for oport in expr.OutputPorts :\n\
		target = oport.Target2\n\
		Application.LogMessage( \"Expression is writing \" + str(target.Value) + \" to \" + target.FullName );\n\
	\n\
\n\
# Expected result:\n\
#INFO : Expression is writing 2.0 to Null4Expr.kine.local.posx\n\
#INFO : Expression is writing 2.0 to Null4Expr.kine.local.posy\n\
#INFO : Expression is writing 2.0 to Null4Expr.kine.local.posz\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0015\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-36B469EB-C1C6-401A-9D94-53563CC6F3FA\"></a></span>JScript Example: Using the Source Property\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-06A163C1-B9AF-439A-B25B-21722B87805F\"></a></span>This example demonstrates how to use the Source property in JScript to get a pointer\n\
                  to the expression. This example continues from <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Creating.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0010\">JScript Example: Setting an Expression with the Parameter.AddExpression Method</a></span>, which applied an expression to the null\'s position:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Find the expressions on Null4Expr\n\
var params2search = n.AnimatedParameters();\n\
for ( var i=0; i&lt;params2search.Count; i++ ) {\n\
	var expr = params2search(i).Source;\n\
\n\
	// From the expression we can access its output port\n\
	var oports = new Enumerator( expr.OutputPorts );\n\
	for ( ; !oports.atEnd(); oports.moveNext() ) {\n\
		var target = oports.item().Target2;\n\
		Application.LogMessage( \"Expression is writing \" + target.Value + \" to \" + target.FullName );\n\
	}\n\
}\n\
\n\
// Expected result:\n\
//INFO : Expression is writing 2 to Null4Expr.kine.local.posx\n\
//INFO : Expression is writing 2 to Null4Expr.kine.local.posy\n\
//INFO : Expression is writing 2 to Null4Expr.kine.local.posz\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0016\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E1FF7074-4D96-47B8-A73E-D3B62A3421C5\"></a></span>C++ Example: Using the GetSource Member\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-7C2EF24D-83AD-4E25-A93B-7A1731C0DBFB\"></a></span>This example demonstrates how to use the GetSource member in C++ to get a pointer\n\
                  to the expression. This example continues from <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Creating.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0011\">C++ API Example: Setting an Expression with the Parameter::AddExpression Member Function</a></span>, which applied an expression to the null\'s position:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Find the expressions on Null4Expr\n\
CRefArray params2search = n.GetAnimatedParameters( siExpressionSource );\n\
for ( LONG i=0; i&lt;params2search.GetCount(); ++i ) \n\
{\n\
	Parameter posparam( params2search[i] );\n\
	Expression expr( posparam.GetSource() );\n\
\n\
	// From the expression we can access its output port\n\
	CRefArray oports( expr.GetOutputPorts() );\n\
	for ( LONG j=0; j&lt;oports.GetCount(); ++j ) \n\
	{\n\
		OutputPort currport( oports[j] );\n\
		Parameter target( currport.GetTarget() );\n\
		app.LogMessage( L\"Expression is writing \" + CString(target.GetValue()) + L\" to \" + target.GetFullName() );\n\
	}\n\
}\n\
\n\
// Expected results:\n\
//INFO : Expression is writing 2 to Null4Expr.kine.local.posx\n\
//INFO : Expression is writing 2 to Null4Expr.kine.local.posy\n\
//INFO : Expression is writing 2 to Null4Expr.kine.local.posz\n\
</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0017\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D6F36B32-7FE4-4416-91C2-5B3C08738294\"></a></span> Expressions and the Mixer\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0018\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-8F0014E2-E14B-42BE-868B-A1548F4DFFD3\"></a></span> Storing Expressions as Actions\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-65FC7C6E-9461-48AB-97A7-6F3171AE9020\"></a></span>The only way to store an action via scripting or the C++ API is by using the <a href=\"#!/url=./si_cmds/StoreAction.html\">StoreAction</a> (or <a href=\"#!/url=./si_cmds/SIStoreAction.html\">SIStoreAction</a>) command. The StoreAction command stores several different kinds of low-level animation\n\
                     as an <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a> besides expressions: fcurves, constraints, and static values.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0019\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-73A0B78F-6B65-4E45-86C2-0053C35B9EC3\"></a></span>JScript Example: Creating Expression-based Sources and Clips\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0DC6B62D-765B-45CC-99C9-2061AAB115F1\"></a></span>This example demonstrates how to set up an linked-parameter expression between two\n\
                        nulls and then store it as an action. The example continues in <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-001C\">JScript Example: Accessing Expression-based ActionSources and Clips</a></span> with accessing the source from the model and the clip from the mixer\'s track.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var root = Application.ActiveSceneRoot;\n\
var jack = root.AddNull(\"jack\");\n\
var diane = root.AddNull(\"diane\");\n\
\n\
// Get list of parameters to mark\n\
var params = jack+\".kine.local.posx,\";\n\
params += jack+\".kine.local.posy,\";\n\
params += jack+\".kine.local.posz\";\n\
\n\
// Create an Expression (linked parameter)\n\
AddExpr( jack+\".kine.local.posx\", \"l_fcv(\"+diane+\".kine.local.posx)-0.25\", true );\n\
AddExpr( jack+\".kine.local.posy\", \"l_fcv(\"+diane+\".kine.local.posy)\",      true );\n\
AddExpr( jack+\".kine.local.posz\", \"l_fcv(\"+diane+\".kine.local.posz)+0.25\", false );\n\
\n\
// Make the Expressions into an Action\n\
StoreAction( root, params, 3, \"StoredExprAction\", true, 0, 0, false, false, true, 0);\n\
</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-001A\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-3261B0F0-D3E9-4CB1-875F-8834FB5AE259\"></a></span>C++ Example: Creating Expression-based Sources and Clips\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-06FD6AE8-517C-4CD7-B027-843C380C57CB\"></a></span>This example demonstrates how to create an expression source and instantiate it as\n\
                        a clip in the mixer using the C++ API. The example continues in <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-001D\">C++ Example: Accessing an Expression-based ActionSource and Clip</a></span> with accessing the source and clip from the model and the clip from the mixer\'s track.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application app = Application();\n\
Model root = app.GetActiveSceneRoot();\n\
Null jack; root.AddNull( L\"jack\", jack );\n\
Null diane; root.AddNull( L\"diane\", diane );\n\
\n\
// Get list of parameters to mark\n\
CString jname = jack.GetFullName();\n\
CString dname = diane.GetFullName();\n\
CString params = jname + L\".kine.local.posx,\" + jname + L\".kine.local.posy,\" + jname + L\".kine.local.posz\";\n\
\n\
// Create an Expression (linked parameter) on posx\n\
CValueArray addExprArgs; CValue outArg;\n\
addExprArgs.Add( jname + L\".kine.local.posx\" );\n\
addExprArgs.Add( L\"l_fcv(\" + dname + L\".kine.local.posx)-0.25\" );\n\
addExprArgs.Add( true );\n\
app.ExecuteCommand( L\"AddExpr\", addExprArgs, outArg );\n\
\n\
// For the second call, just change the first two arguments\n\
addExprArgs[0] = jname + L\".kine.local.posy\";\n\
addExprArgs[1] = L\"l_fcv(\" + dname + L\".kine.local.posy)\";\n\
app.ExecuteCommand( L\"AddExpr\", addExprArgs, outArg );\n\
\n\
// For the third call, change all arguments\n\
addExprArgs[0] = jname + L\".kine.local.posz\";\n\
addExprArgs[1] = L\"l_fcv(\" + dname + L\".kine.local.posz)+0.25\";\n\
addExprArgs[2] = false;\n\
app.ExecuteCommand( L\"AddExpr\", addExprArgs, outArg );\n\
\n\
// Make the Expressions into an Action\n\
CValueArray storeActionArgs; \n\
storeActionArgs.Add( root.GetFullName() );\n\
storeActionArgs.Add( params );\n\
storeActionArgs.Add( CValue(3.0) );\n\
storeActionArgs.Add( L\"StoredExprAction\" );\n\
storeActionArgs.Add( true );\n\
storeActionArgs.Add( CValue(0.0) );\n\
storeActionArgs.Add( CValue(0.0) );\n\
storeActionArgs.Add( false );\n\
storeActionArgs.Add( false );\n\
storeActionArgs.Add( true );\n\
storeActionArgs.Add( CValue(0.0) );\n\
app.ExecuteCommand( L\"StoreAction\", storeActionArgs, outArg );\n\
</pre></div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-001B\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-8F80E3F4-03A1-41E1-BAB0-43FBBEE547FD\"></a></span> Accessing Expression-based Sources and Clips\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1384EE8A-A13A-4926-8B47-976552365CFE\"></a></span>The <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a> is available from the Model under which it is stored or instantiated via the <a href=\"#!/url=./si_om/Model.Sources.html\">Model.Sources</a> property (OM) or the <a href=\"#!/url=./si_cpp/classXSI_1_1Model.html#GetSources\">Model::GetSources</a> member (C++ API).\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-1BC586D7-3EAA-42AF-81F3-9332919E37D7\"></a></span>The Clip is available from either the mixer or the compound clip on which it is instantiated.\n\
                     It is also available directly off its Track owner. For the object model, the properties\n\
                     to use are <a href=\"#!/url=./si_om/ClipContainer.Clips.html\">ClipContainer.Clips</a> and <a href=\"#!/url=./si_om/Track.Clips.html\">Track.Clips</a>. For the C++ API you can use <a href=\"#!/url=./si_cpp/classXSI_1_1ClipContainer.html#GetClips\">ClipContainer::GetClips</a> and <a href=\"#!/url=./si_cpp/classXSI_1_1Track.html#GetClips\">Track::GetClips</a>.\n\
                  </p> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-001C\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-40E7EF06-D9E4-4EAE-9A15-E7742E24DC31\"></a></span>JScript Example: Accessing Expression-based ActionSources and Clips\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-088FA0B8-723E-4174-BDBE-F2132E0ACE4F\"></a></span>This example demonstrates how to get the ActionSource via the Model.Sources property\n\
                        and how to get the Clip via the Track.Clips property. This example continues from\n\
                        <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0019\">JScript Example: Creating Expression-based Sources and Clips</a></span>, which applied an expression to the null\'s position and then stored and instantiated\n\
                        it.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Get the new source from the model\n\
var sourcelist = new Enumerator( root.Sources );\n\
for ( ; !sourcelist.atEnd(); sourcelist.moveNext() ) {\n\
	var src = sourcelist.item();\n\
	// Make sure we are getting the right source by testing the underlying\n\
	// AnimationSourceItem to verify that it is an Expression\n\
	if ( src.SourceItems(0).Type == siExpressionAnimItem ) {\n\
		Application.LogMessage( \"Found \" + src.FullName );\n\
	}\n\
}\n\
\n\
// Get the clip from the mixer via the Track object\n\
if ( root.HasMixer() ) {\n\
	var alltracks = new Enumerator( root.Mixer.Tracks );\n\
	for ( ; !alltracks.atEnd(); alltracks.moveNext() ) {\n\
		// Make sure to skip audio and shape tracks\n\
		if ( alltracks.item().Type == siTrackAnimationType ) {\n\
			var currtrack = alltracks.item();\n\
			var cliplist = new Enumerator( currtrack.Clips );\n\
			for ( ; !cliplist.atEnd(); cliplist.moveNext() ) {\n\
				var clp = cliplist.item();\n\
				Application.LogMessage( \"Found \" + clp.FullName );\n\
			}\n\
		}\n\
	}\n\
}\n\
\n\
//INFO : Found Sources.Scene_Root.StoredExprAction\n\
//INFO : Found Mixer.Mixer_Anim_Track.StoredExprAction_Clip\n\
</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-001D\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-A2881A70-656A-4A4E-820D-44416CF3B5FC\"></a></span>C++ Example: Accessing an Expression-based ActionSource and Clip\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD3C56B2-1274-454B-84F2-523C20A3A178\"></a></span>This example demonstrates how to get the ActionSource via <a href=\"#!/url=./si_cpp/classXSI_1_1Model.html#GetSources\">Model::GetSources</a> and how to get the Clip via <a href=\"#!/url=./si_cpp/classXSI_1_1Track.html#GetClips\">Track::GetClips</a>. This example continues from <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-001A\">C++ Example: Creating Expression-based Sources and Clips</a></span>, which applied an expression to the null\'s position and then stored and instantiated\n\
                        it.\n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Get the new source from the model\n\
CRefArray sourcelist = root.GetSources();\n\
for ( LONG i=0; i&lt;sourcelist.GetCount(); ++i ) \n\
{\n\
	ActionSource src( sourcelist[i] );\n\
	// Make sure we are getting the right source by testing the underlying\n\
	// AnimationSourceItem to verify that it is an Expression\n\
	CRefArray underlying = src.GetItems();\n\
	AnimationSourceItem animsrcitm( underlying[0] );\n\
	if ( animsrcitm.GetType() == siExpressionAnimItem ) \n\
	{\n\
		app.LogMessage( L\"Found \" + src.GetFullName() );\n\
	} \n\
}\n\
\n\
// Get the clip from the mixer via the Track object\n\
if ( root.HasMixer() ) {\n\
	CRefArray alltracks = root.GetMixer().GetTracks();\n\
	for ( LONG j=0; j&lt;alltracks.GetCount(); ++j ) \n\
	{\n\
		// Make sure to skip audio and shape tracks\n\
		Track currtrack( alltracks[j] );\n\
		if ( currtrack.GetType() == siTrackAnimationType ) {\n\
			CRefArray cliplist = currtrack.GetClips();\n\
			for ( LONG k=0; k&lt;cliplist.GetCount(); ++k ) \n\
			{\n\
				Clip clp( cliplist[k] );\n\
				app.LogMessage( L\"Found \" + clp.GetFullName() );\n\
			}\n\
		}\n\
	}\n\
}\n\
\n\
// Expected results:\n\
//INFO : Found Sources.Scene_Root.StoredExprAction\n\
//INFO : Found Mixer.Mixer_Anim_Track.StoredExprAction_Clip\n\
</pre></div> \n\
                  </div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-001E\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-08D0FC04-A0AB-429D-B30A-0FCE8C847B47\"></a></span> How Do Expressions Interact with Constraints?\n\
                  </h3>   \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-CBDD2DCA-BE50-4A71-9EF8-7893BE58C033\"></a></span>Expressions are always evaluated before constraints on the same object. If an expression\n\
                     is reading from a parameter that is driven by a constraint, the data pulled by the\n\
                     expression may be stale. You can work around this problem by applying the constraint\n\
                     to a null and reading the data from there instead.\n\
                  </p> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";