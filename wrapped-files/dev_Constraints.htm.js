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
      <meta name=\"topicid\" content=\"GUID-4816C1D3-65A0-4B87-98DB-8168CAB8A907\" />\n\
      <meta name=\"indexterm\" content=\"constraints: applying\" />\n\
      <meta name=\"indexterm\" content=\"constraints: accessing\" />\n\
      <meta name=\"indexterm\" content=\"constraints: navigating the constraint stack\" />\n\
      <meta name=\"indexterm\" content=\"constraints: order of operations\" />\n\
      <meta name=\"indexterm\" content=\"constraints: blending\" />\n\
      <meta name=\"indexterm\" content=\"constraints: in the mixer\" />\n\
      <meta name=\"indexterm\" content=\"constraints: storing as actions\" />\n\
      <meta name=\"indexterm\" content=\"clips: accessing constraint-based\" />\n\
      <meta name=\"indexterm\" content=\"sources: accessing constraint-based\" />\n\
      <meta name=\"indexterm\" content=\"constraints: accessing sources and clips\" />\n\
      <meta name=\"indexterm\" content=\"sources: cycles with constraints\" />\n\
      <meta name=\"indexterm\" content=\"cycles with constraints in sources\" />\n\
      <meta name=\"indexterm\" content=\"constraints: cycles in sources\" />\n\
      <meta name=\"indexterm\" content=\"operators: vs. constraints\" />\n\
      <meta name=\"indexterm\" content=\"scripted operators: vs. constraints\" />\n\
      <meta name=\"indexterm\" content=\"custom (scripted) operators: vs. constraints\" />\n\
      <meta name=\"indexterm\" content=\"constraints: vs. custom (scripted) operators\" />\n\
      <meta name=\"indexterm\" content=\"scripted operators: interaction with constraints and expressions\" />\n\
      <meta name=\"indexterm\" content=\"custom (scripted) operators: interaction with constraints and expressions\" />\n\
      <meta name=\"indexterm\" content=\"operators: interaction with constraints and expressions\" />\n\
      <meta name=\"indexterm\" content=\"expressions: interaction with constraints and operators\" />\n\
      <meta name=\"indexterm\" content=\"constraints: interaction with expressions and operators\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Constraints</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-4816C1D3-65A0-4B87-98DB-8168CAB8A907\"></a></span><div class=\"head\">\n\
            <h1>Constraints</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5575F3C2-7E5E-454F-94E1-349E8074EB17\"></a></span>Constraints allow you to animate one object via another object\'s animation. You constrain\n\
               different properties, such as position or direction, of one object to another object.\n\
               You cannot create your own constraints, but Softimage provides many diverse types\n\
               that you can apply and manipulate through the SDK. \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-ACCC1017-02EA-4628-85D0-D5C62975DD7A\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-909DFE29-8D18-48EE-A8E7-1B50C01D1933\"></a></span>For general information about using constraints in Softimage, see the Softimage User\'s\n\
                     Guide. \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8A24A366-CDCF-4935-B576-254BEB519510\"></a></span>A constraint recognizes one or more objects as the <em class=\"mild\">constraining</em> object(s) and one object as the <em class=\"mild\">constrained</em> object. It is the constrained object which \"owns\" the constraint: you can access\n\
               the constraint via the constrained object\'s kinematics. From the constraint, you can\n\
               then access both the constraining and constrained objects (see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Constraints.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0038\">Accessing Constraints through the SDK</a></span> for more information). \n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-FB290AA4-BB1A-4831-9E40-C32233BDC4E2\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B52792AF-F66C-4EFB-8002-AAD0434FE61E\"></a></span>Constraints use only global space for transformations, so be aware that any changes\n\
                     you make to local parameters may be overridden by constraints (because global transformations\n\
                     override local transformations, no matter how the parameters are animated). \n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A50EAF45-0180-404D-920E-46F47DE01B49\"></a></span>A constraint is a piece of data that mediates between the constraining and constrained\n\
               objects. Depending on its type, the constraint expects a specific set of connection\n\
               points, for example a surface constraint expects the constrainer to be a NURBS surface\n\
               whereas the pose constraint expects the constraining object to be any 3D object. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0037\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-9865EA20-3CB8-4E55-9AC1-E1AE508AA188\"></a></span> Applying Constraints through the SDK\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-5AEF5C8E-9716-49F1-B7BA-EE92125F2DEC\"></a></span>You can apply a constraint using scripting commands, the OM, or the C++ API: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_99FBAC9317084BA3AE8ACA190F0A1AAA\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-2E38805D-5586-4197-9AD3-65FA2D6C0CF0\"></a></span> <em class=\"strong\">Scripting command:</em> <a href=\"#!/url=./si_cmds/SIApplyCns.html\">SIApplyCns</a> \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-E10F399C-91CB-4363-A2B3-3A33CFA6B7EE\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-9FF86DD3-C836-4216-BF27-FC4B85F5E40E\"></a></span>Alternatively, you can use the <a href=\"#!/url=./si_cmds/ApplyCns.html\">ApplyCns</a> command, which performs cycle checking; however, cycle checking can create problems\n\
                              because it can log a lot of warnings that can be safely ignored in some cases (some\n\
                              cycles are on purpose). Another problem is that a popup message appears if there\'s\n\
                              a cycle, which halt automated tools and requires manual intervention for each cycle\n\
                              warning message. \n\
                           </p> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-21C72CE6-144D-48DC-9C0C-9F3A73CEC270\"></a></span> <em class=\"strong\">Object Model:</em><a href=\"#!/url=./si_om/Kinematics.AddConstraint.html\">Kinematics.AddConstraint</a> method on the object to be constrained \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4DA65ABA-19AE-4257-BA48-6AF934185B19\"></a></span> <em class=\"strong\">C++ API:</em><a href=\"#!/url=./si_cpp/classXSI_1_1Kinematics.html#AddConstraint\">Kinematics::AddConstraint</a> member on the object to be constrained \n\
                     </p> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-80BC759F-EEE3-45C4-B992-4BD54CCDC1A8\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2B2C6A5-63F5-4C12-BCA2-9F13792159AD\"></a></span>To remove a constraint through the SDK, you can only use one of these scripting commands:\n\
                              \n\
                           </p> <span class=\"anchor_wrapper\"><a name=\"UL_8567D15355E948E6A1790719AD09AB51\"></a></span><ul>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-56ABC290-2CF7-4347-B725-96AF40E8A314\"></a></span><a href=\"#!/url=./si_cmds/RemoveCns.html\">RemoveCns</a>: removes the constraint identified by name \n\
                                 </p> \n\
                              </li>\n\
                              <li> <a href=\"#!/url=./si_cmds/RemoveCnsType.html\">RemoveCnsType</a>: removes all constraints matching the specified constraint type. \n\
                              </li>\n\
                              <li> \n\
                                 <p><span class=\"anchor_wrapper\"><a name=\"GUID-C86F77AE-DC9A-4F74-8546-79E2F8BCCA52\"></a></span><a href=\"#!/url=./si_cmds/DeleteObj.html\">DeleteObj</a>: this is a general purpose command that deletes the specified object \n\
                                 </p> \n\
                              </li>\n\
                           </ul> \n\
                        </div>\n\
                     </div> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0038\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-307D32A5-435F-4DC9-8AF9-B7184DFC19E8\"></a></span> Accessing Constraints through the SDK\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-ECA68077-35D8-4E1A-9ED5-4DFA390319FD\"></a></span>You can get the constraints applied to an object through its Kinematics property for\n\
                  both the object model (<span class=\"char_link\"><a href=\"#!/url=./files/dev_Constraints.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0039\">JScript Example: Accessing the Constraint object</a></span>) and the C++ API (<span class=\"char_link\"><a href=\"#!/url=./files/dev_Constraints.htm#WS00FA839CE9F5F148906F76DDEF5331DD-003A\">C++ API Example: Accessing the Constraint object</a></span>). For scripting commands, you can get the constrained objects using the <a href=\"#!/url=./si_cmds/GetConstrainedObjects.html\">GetConstrainedObjects</a> command. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-0CCDAB30-7B5A-4F2C-BE3B-65CA68010073\"></a></span>From there, the <a href=\"#!/url=./si_om/Constraint.html\">Constraint</a> object gives you access to the collection of constraining objects as well as the\n\
                  constrained object, and the UpVector reference (the object that determines in which\n\
                  direction the constrained object should point). The following examples demonstrate\n\
                  how to access the Constraint object and its properties. \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0039\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-8C139982-F612-4B69-8BD2-01A28EFE63D5\"></a></span>JScript Example: Accessing the Constraint object\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// \"obj\" is a pointer to a constrained object\n\
var cnslist = obj.Kinematics.Constraints;\n\
\n\
// Enumerate over the ConstraintCollection\n\
for ( var i=0; i&lt;cnslist.Count; i++ ) {\n\
	var cns = cnslist(0);\n\
	var myself = cns.Constrained; // this should point to the original \'obj\'\n\
	var stuckonyou = cns.Constraining; // everyone constraining \'obj\'\n\
	var upvect = cns.UpVectorReference; // object used as my upvector reference\n\
\n\
	Application.LogMessage( \"Constraint type: \" + cns.Type );\n\
	Application.LogMessage( \"Constrained object: \" + myself );\n\
	Application.LogMessage( \"# of Constraining objects: \" + stuckonyou.Count );\n\
	Application.LogMessage( \"UpVectorRef: \" + upvect );\n\
}\n\
\n\
// So if you had a sphere pose-constrained by a null (with no up-vector \n\
// reference), you would get something like this:\n\
//INFO : Constraint type: posecns\n\
//INFO : Constrained object: sphere\n\
//INFO : # of Constraining objects: 1\n\
//INFO : UpVectorRef: null\n\
</pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-003A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-5E33F8D1-0676-42E3-ABE9-8202798A7357\"></a></span>C++ API Example: Accessing the Constraint object\n\
                  </h3> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// \"obj\" is a pointer to a constrained object\n\
Kinematics kine = obj.GetKinematics();\n\
CRefArray cnslist = kine.GetConstraints();\n\
\n\
// Enumerate over the CRefArray of Constraints\n\
for ( LONG i=0; i&lt;cnslist.GetCount(); ++i ) {\n\
	CRef ref = cnslist.GetItem(i);\n\
	if ( ref.IsA(siConstraintID) ) {\n\
		Constraint cns(ref);\n\
		X3DObject myself = cns.GetConstrained(); // this should point to the original \'obj\'\n\
		CRefArray stuckonyou = cns.GetConstraining(); // everyone constraining \'obj\'\n\
		X3DObject upvect = cns.GetUpVectorReference(); // object used as my upvector reference\n\
\n\
		app.LogMessage( L\"Constraint type: \" + cns.GetType() );\n\
		app.LogMessage( L\"Constrained object: \" + myself.GetName() );\n\
		app.LogMessage( L\" # of Constraining objects: \" + stuckonyou.GetCount() );\n\
		app.LogMessage( L\"UpVectorRef: \" + upvect.GetName() );\n\
	}\n\
}\n\
\n\
// So if you had a sphere pose-constrained by a null (with no up-vector \n\
// reference), you would get something like this:\n\
//INFO : Constraint type: posecns\n\
//INFO : Constrained object: sphere\n\
//INFO : # of Constraining objects: \n\
//INFO : UpVectorRef:\n\
</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-EF291741-64E1-4BB7-A807-8918B07EE52C\"></a></span>You can also get animation information from clips and sources that are based on constraints.\n\
                     For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/dev_Constraints.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0040\">Constraints and the Mixer</a></span>. \n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-003B\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-DD586217-936D-43A8-82B6-D34F5B6C9EDD\"></a></span> Navigating the Constraint Stack\n\
               </h2>  \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-003C\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-12C22C34-2FD8-4BF6-8101-39F535EE82D5\"></a></span> Order of Constraint Operations\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9FF20455-4B25-4A9A-A738-B73CA234E5B2\"></a></span>The Constraint Stack is the collection of constraints nested under a constrained object\'s\n\
                     Kinematics property. The order that you see in the UI mirrors the typical operator\n\
                     stack, that is the last constraint applied is at the top. When you access the collection\n\
                     of constraints through the SDK, you get the constraints in the same order they were\n\
                     applied. \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-003D\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-5AF2C30B-F6B2-43BB-82F7-68705C39E120\"></a></span> Blending Multiple Constraints\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-AF3E3656-C63B-42A7-842F-8347C8D3BB63\"></a></span>If an object has more than one constraint applied and you want to blend the constraint\n\
                     weighting, you can access the <span class=\"code\" translate=\"no\">blendweight</span> parameter from the Constraint object. \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-40641452-413C-4B3A-9B08-AEEF5AE0DCD1\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-3E3404CD-D64F-4844-9363-5A2B5AB3135C\"></a></span>There are some peculiarities about setting blendweights when dealing with 3 or more\n\
                           constraints. For more information on how to set blendweights in this case and why\n\
                           it\'s necessary, see <em class=\"mild\">Blending Constraints</em> in the <em class=\"mild\">Animation</em> (user) guide. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-003E\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-4BEC046E-1BC2-4039-B150-CE8F19006E10\"></a></span>JScript Example: Blending Constraints\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-18C61D3C-587E-4F26-9CB2-74A58A9B618D\"></a></span>The <span class=\"code\" translate=\"no\">blendweight</span> parameter can be identified with shortcut notation or standard (full) notation (getting\n\
                        the parameter by name from the <a href=\"#!/url=./si_om/ParameterCollection.html\">ParameterCollection</a>: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// \"cns\" is a pointer to a constraint\n\
cns.blendweight.Value = .25;// shortcut notation\n\
cns.Parameters(\"blendweight\").Value = .25;// full notation\n\
</pre></div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-003F\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-D31644DE-0650-4B1C-B1C8-7DAE3CF10A6D\"></a></span>C++ API Example: Blending Constraints\n\
                     </h4> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-D5BCDD26-4BB5-4697-A9D7-B0F9162DF218\"></a></span>You can change the blendweight parameter\'s value with the convenience <a href=\"#!/url=./si_cpp/classXSI_1_1ProjectItem.html#PutParameterValue\">ProjectItem::PutParameterValue</a> function or by using the standard (full) notation (getting the parameter by name\n\
                        from the <a href=\"#!/url=./si_cpp/classXSI_1_1CParameterRefArray.html\">CParameterRefArray</a>): \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// \"cns\" is a pointer to a constraint\n\
cns.PutParameterValue(L\"blendweight\", 0.75);// use convenience method\n\
\n\
CParameterRefArray paramlist = cns.GetParameters();// full notation\n\
Parameter param = paramlist.GetItem(L\"blendweight\");\n\
param.PutValue(0.75);\n\
</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0040\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CA13F53D-A25F-49CD-BDF9-153F1358F5A9\"></a></span> Constraints and the Mixer\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B6B984BC-53D4-4B84-89D6-B856371233C1\"></a></span>Constraints can be used in the animation mixer as a type of animation within an <a href=\"#!/url=./si_om/ActionSource.html\">ActionSource</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ActionSource.html\">ActionSource</a>. However, when a constraint is used as the underlying <span class=\"char_link\"><a href=\"#!/url=./files/DataSource.htm\">DataSource</a></span> for an action, the constraint is no longer accessible from the clip or the source,\n\
                  unlike some other types of data sources (such as <a href=\"#!/url=./si_om/FCurve.html\">FCurves</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1FCurve.html\">FCurves</a> or <a href=\"#!/url=./si_om/ShapeKey.html\">ShapeKeys</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShapeKey.html\">ShapeKeys</a>). This is because the full constraint is not stored inside the action (for performance\n\
                  reasons). Constraint clips maintain their own data independent from the source, so\n\
                  when you update the constraint (the source), the clip in the mixer does not reflect\n\
                  the new values. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-48875995-BC36-4625-802F-E86006C8DF98\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5CEB10EB-3138-4920-A024-D1E7183F9F46\"></a></span>For more information about constraints and the mixer generally, including limitations,\n\
                        see the <em class=\"mild\">Nonlinear Animation</em> (user) guide. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0041\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-DF1D0FF7-53BD-46F6-B11C-9118E1A678D9\"></a></span> Storing Constraints as Actions\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8C08957B-44C9-4F3B-BE89-EEB502F85575\"></a></span>The only way to create an action source in the SDK is to use the <a href=\"#!/url=./si_cmds/StoreAction.html\">StoreAction</a> command. The StoreAction command stores any kind of action, so you need to make sure\n\
                     you set its parameters correctly. Here are few guidelines to follow: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_FBF9EF2CED5D4853B790FCA13A041562\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-7A14C9E8-31B7-4C2D-95BB-607743A8D608\"></a></span>For the <em class=\"strong\">InputObjs</em> parameter, specify the <em class=\"mild\">affected parameters</em>, not the constraint itself. And remember that constraints are always defined in global\n\
                           space, so these will always be the global transformation parameters. \n\
                        </p> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-84B3CA02-3593-4AAB-AE72-3D052B7C676D\"></a></span>Another important things to remember is that you need to specify the affected parameters\n\
                           with <span class=\"char_link\"><a href=\"#!/url=./files/RelativeName.htm\">Relative Name</a></span>s. Otherwise, you may have connection problems later on instantiating this source\n\
                           as a clip in the mixer. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-715DD183-EBAA-4577-9AE1-6835E0D2F541\"></a></span>For the <em class=\"strong\">Mode</em> parameter, specify one of the following values: \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"UL_9EC1CEDCBE71421C993CCABF01FB5649\"></a></span><ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-FB1C62C0-9FC7-4714-9497-A271BA72A15A\"></a></span> <span class=\"code\" translate=\"no\">4</span> to create a source based on the Constraint only \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-6CF7CA6A-8814-4F92-9C37-DDD579022AE3\"></a></span> <span class=\"code\" translate=\"no\">5</span> to create a source based on FCurves, Expressions and Constraints \n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-7ED34AEF-C962-47F4-982C-7B07C987D9C4\"></a></span> <span class=\"code\" translate=\"no\">6</span> to create a source based on FCurves, Expressions and Constraints as well as the current\n\
                                 values of non-animated parameters \n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-FA6DB43E-E3C5-484E-8E7F-2EAABC752E3F\"></a></span>For the <em class=\"strong\">RemoveAnim</em> parameter, if you specify <span class=\"code\" translate=\"no\">true</span> (the default), the constraint is removed from the animated parameters. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-00A9BB70-966E-447B-9C01-35EB9DE3951D\"></a></span>For the <em class=\"strong\">AddClip</em> parameter, if you specify <span class=\"code\" translate=\"no\">false</span> (the default) you can run the <a href=\"#!/url=./si_cmds/AddClip.html\">AddClip</a> command later on with this source to instantiate it in the mixer. \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0042\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-849A9F3A-B227-47E8-8D8F-31321E815A0F\"></a></span> Accessing Constraint-Based Sources and Clips\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-657CF18A-0264-4122-839E-E4221F8F8644\"></a></span>Action sources and clips based on constraints can be accessed like any other action\n\
                     source or mixer clip (see <span class=\"char_link\"><a href=\"#!/url=./files/SourcesAndClips.htm\">Sources and Clips</a></span> for more information). But because a constraint-based source does not store the full\n\
                     constraint, the underlying constraint object is not accessible using either of the\n\
                     following: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_B2438269C0844DDB84EA5ED751E527D8\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-C3A45916-2829-4432-BEB2-087772CB1BFE\"></a></span><a href=\"#!/url=./si_om/AnimationSourceItem.Source.html\">AnimationSourceItem.Source</a> or AnimationSourceItem::GetSource \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-0F356C51-BE48-4009-8450-6996E4977914\"></a></span><a href=\"#!/url=./si_om/MappedItem.Source2.html\">MappedItem.Source2</a> or MappedItem::GetAnimationSource \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0043\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-E0F46BE6-56FC-406D-975A-7D478E49DA28\"></a></span> A Word About Cycles in Sources\n\
                  </h3>    \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-E6CAF016-FFD8-414A-8D3A-F90DDFCE2D0A\"></a></span>You always have to be careful about creating cycles with constraints (see the <em class=\"mild\">Animation</em> (user) guide for details), but when you are working with constraint-based animation\n\
                     in the mixer it is easy to lose track of potential cycles, especially if you are copying\n\
                     sources from one object to another. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-5A92D23E-40D8-4454-98F1-F50D8CA0945B\"></a></span>The <a href=\"#!/url=./si_cmds/CycleChecking.html\">CycleChecking</a> command can help detect these cycles, but there\'s no way to work around them. The\n\
                     only fix is to modify that part of the scene so there is no circular dependency. \n\
                  </p> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0044\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C3E3766F-7C7C-45D9-8EC7-0426E9E8B721\"></a></span> Constraints vs. Custom (Scripted) Operators?\n\
               </h2>     \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-EED567F4-12BB-4737-8264-22013153DEEC\"></a></span>At first glance, constraints may seem similar to custom (scripted) operators. However,\n\
                  there are several basic differences in the way they are implemented in Softimage which\n\
                  lead to these differences in behavior and appearance: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_052610C0943D438B9EBC062066D063F3\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D450325-4529-47A2-B188-B758DE1B4148\"></a></span>In the UI, constraints appear as a collection of properties under the kinematics property\n\
                        of the constrained object while custom operators are nested under their output parameters.\n\
                        \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4398C875-2327-42C0-A8B0-E0ED7E779E3E\"></a></span>Constraints are generally applied to an entire object unlike custom operators, which\n\
                        are always applied directly to a specific parameter. Constraints affect the object\'s\n\
                        global transform, not its parameters. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-6B857195-C769-48D5-BDC2-0911ECB3B4F9\"></a></span>Both constraints and custom operators can be muted and even deleted; however, objects\n\
                        that were altered via constraints remain as they were at the time the constraint was\n\
                        removed, whereas objects affected by custom operators <em class=\"mild\">snap</em> back to their pre-operator condition. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0045\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-A4244280-4C62-4153-B81E-E86BD0175B88\"></a></span> How Do Constraints Interact with Operators and Expressions?\n\
                  </h3>      \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-7FC99DFD-0822-42AA-8478-063C0D482ACD\"></a></span>Operators and expressions are always evaluated before constraints on the same object.\n\
                     If an operator is reading from a parameter that is driven by a constraint, the data\n\
                     pulled by the operator may be stale. You can work around this problem by applying\n\
                     the constraint to a null and reading the data from there instead. \n\
                  </p> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";