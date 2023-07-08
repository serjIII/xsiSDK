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
      <meta name=\"topicid\" content=\"GUID-9512D384-549B-4A25-8EB3-DF9C7D2B5E90\" />\n\
      <meta name=\"indexterm\" content=\"linked parameters: simple links\" />\n\
      <meta name=\"indexterm\" content=\"linked parameters: multiple links\" />\n\
      <meta name=\"indexterm\" content=\"linked parameters: object orientation\" />\n\
      <meta name=\"indexterm\" content=\"linked parameters: creating and accessing\" />\n\
      <meta name=\"indexterm\" content=\"linked parameters: setting and getting expressions\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Linked Parameters</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-9512D384-549B-4A25-8EB3-DF9C7D2B5E90\"></a></span><div class=\"head\">\n\
            <h1>Linked Parameters</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A4A672B-1A1F-4F12-A8B2-73F145A2A3A0\"></a></span>When you link parameters, you create a relationship between them in which one parameter\n\
               depends on the animation state of another. In Softimage, you can create simple one-to-one\n\
               links with one parameter controlling another or you can have multiple parameters controlling\n\
               one.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2EFED6EB-C27F-483C-8BA6-90CCF1B73F74\"></a></span>After you link parameters, you set the values that you want the parameters to have,\n\
               relative to a certain condition (when A does this, B does this).\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A77E00E4-C8A3-463A-920C-11C6CB23CD7F\"></a></span>You can link any animatable parameter together—from translation to color—to create\n\
               some very interesting or unusual animation conditions. For example, you could create\n\
               a chameleon effect so that when object A approaches object B, it changes color. Basically,\n\
               if you can animate it, you can link it.\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-917ACAFD-8257-4496-8A08-0574F525F46C\"></a></span>Simple linked parameters are parameters that are connected in a way defined by an\n\
                     expression.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-8E91226F-C2CE-4A76-ACF3-30FFF5AEC3A8\"></a></span>When you link one parameter to another, a simple relationship is established that\n\
                     makes the value of the one parameter depend on the value of another.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-81392F33-F419-497A-A0B9-8B0C5F3D463E\"></a></span>With multi-linked parameters, you can connect many parameters to one parameter.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9B50936C-1044-4AFE-95E7-9B69B0A662C2\"></a></span>This allows you to create more complex relationships, where many parameter inputs\n\
                     are interpolated to create an output for one parameter.\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9ACBD30F-5E4A-4E1A-A9D2-9672645F9BE6\"></a></span>Orientation-linked parameters let you link an object\'s orientation to any animatable\n\
                     parameter.\n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-A6BF9F71-0C0D-4010-8F17-6A6BA3245408\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-4EFDF160-BDB9-40BD-B0C3-C0ABB970634F\"></a></span>Linked parameters actually use three special types of expressions: <em class=\"strong\">l_fcv(), l_interp()</em> and <em class=\"strong\">l_interpOri()</em>. For more information about linked parameters, see the Softimage user guide.\n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
               </li>\n\
            </ul>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0021\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A9C1464E-32FE-4D3C-A25C-A3C24E94A325\"></a></span> Simple Links\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-6B3579ED-75A3-4427-B3BC-D115391DC037\"></a></span>When you link one parameter to another, you specify that its value is to be controlled\n\
                  by another parameter.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D25B52C5-F55E-45D6-ADA3-F7DB6DF57CF6\"></a></span>Linked parameters are similar to expressions, but the value of one parameter drives\n\
                  the other as dictated by a function curve rather than by a mathematical formula. They\n\
                  provide you with a quick and easy way to create relationships between parameters without\n\
                  having to work out the mathematical expressions involved.\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8429D25-0516-4E3C-A89C-44DF0BAD8684\"></a></span>They are especially useful with custom parameters, such as creating a custom control\n\
                  panel to control a rig with sliders.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0022\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E2BDAB78-CABD-4ED4-B7FC-CB7340A17768\"></a></span> Multiple Links\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2587F740-34BA-4CDF-9B79-DA30E3446856\"></a></span>When you link many parameters to one parameter, its value is controlled by a combination\n\
                  of those parameters (many inputs to one output). Unlike simple linked parameters,\n\
                  where the link is represented by a function curve representing the one-to-one relationship,\n\
                  a multi-linked parameter has an interpolator (contained within an expression) that\n\
                  calculates how all the parameters are combined together to come up with a result.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0023\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3E47169B-116A-44B9-B619-94ABDA8E3791\"></a></span> Links to an Object\'s Orientation\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-B093D7D0-08B8-4329-B4B7-E7CB0CE2ECC0\"></a></span>As well as linking multiple parameters, you can link the orientation of an object\n\
                  to an animatable parameter. You don\'t link to the object\'s individual Euler X, Y,\n\
                  and Z rotation parameters; instead you link to the \"complete\" orientation of an object\n\
                  (calculated in quaternion space).\n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DE738998-F661-477B-B87F-BDCC649663E2\"></a></span>The same interpolation technique used for multiple parameters is also used for linking\n\
                  an object\'s orientation to a parameter. The interpolator for multi-linked parameters\n\
                  computes \"how far\" it is from one of its relative values by using a distance metric;\n\
                  for orientation, the interpolator uses the orientation (or quaternion) distance.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0024\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B61579B5-F7CF-4220-B21F-98DECAFC2B22\"></a></span> Creating and Accessing Links\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-46868B09-4818-4CFD-9E88-CAE4DFEC5415\"></a></span>When you link parameters you are basically setting an expression on a parameter that\n\
                  uses the path to another parameter in its definition. You can use the <a href=\"#!/url=./si_cmds/SetExpr.html\">SetExpr</a> command to create an expression using one of the following expression functions:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-451D1976-4E00-4655-91D0-9F6EE49AEA95\"></a></span> <em class=\"strong\">l_fcv()</em>—simple (one-to-one) link. Only one parameter appears inside parentheses.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5223E28B-50C2-44C3-ACF5-752D66DFF442\"></a></span> <em class=\"strong\">l_interp()</em>—multiple link. List of parameters to link to appears inside parentheses.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-0DA11DE1-4B6F-48C3-9FF7-BB3C509852DA\"></a></span> <em class=\"strong\">l_interpOri()</em>—link to object\'s orientation.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-E74B4B7F-2476-4195-9071-70703A490F1D\"></a></span>Accessing linked parameters is like accessing any regular parameter. However, because\n\
                  the linked parameters contain an <a href=\"#!/url=./si_om/Expression.html\">Expression</a> property, you can access its four parameters:\n\
               </p> \n\
               <ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-877F4B7B-F07C-4E23-B767-0465BB5116B5\"></a></span> <em class=\"strong\">Active</em>—true by default; setting this parameter to false mutes the link.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-CDE36948-01FA-48E8-82F2-689166F7E61E\"></a></span> <em class=\"strong\">Target</em>—returns the name of the target parameter (that is, the parameter that owns the expression).\n\
                        Read only.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED59DCE0-94D1-4F5A-A187-8B05AF9E31AE\"></a></span> <em class=\"strong\">Definition</em>—this is the real meat of the expression: you can change this string definition if\n\
                        you need to change the link or even remove the link entirely.\n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-5E6EFB74-7CD4-4898-8F14-4D40BDD68193\"></a></span> <em class=\"strong\">Comment</em>—nothing specified by default.\n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-D740C6E7-2C05-4276-9D41-F011D137874F\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-9203A686-2B31-4693-A49B-5583AC606107\"></a></span>While you can edit the definition of an existing expression entirely through the object\n\
                        model, there is no equivalent to the <a href=\"#!/url=./si_cmds/SetExpr.html\">SetExpr</a> command in the object model, and the <a href=\"#!/url=./si_om/Expression.html\">Expression</a> object does not implement any functionality of its own.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0025\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-FBB1846F-1484-411F-BBB7-8AC9E4C9913A\"></a></span> Example: setting and getting expressions on linked parameters\n\
                  </h3>  \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\'-----------------------------------------------------\n\
	\'	SETUP\n\
	\'\n\
	\' Set up scene with a null, a cube and a disc\n\
	NewScene , false\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> root = ActiveSceneRoot\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> actor1 = root.AddNull()\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> actor2 = root.AddGeometry( \"Disc\", \"MeshSurface\" )\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> target = root.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
\n\
	\'-----------------------------------------------------\n\
	\'	CREATION\n\
	\'\n\
	\' Set up a simple link using an expression with l_fcv()\n\
	SetExpr target.posx, \"l_fcv( \" &amp; actor1.posx &amp; \")\"\n\
\n\
	\' Set up a multiple link using an expression with l_interp()\n\
	SetExpr target.sclx, \"l_interp( \" &amp; actor1.sclx &amp; \",\" _\n\
				&amp; actor1.scly &amp; \",\" &amp; actor1.sclz &amp; \" )\"\n\
\n\
	\' Set up a multiple link using an expression with l_interpOri()\n\
	SetExpr target.rotx, \"l_interpOri( \" &amp; actor2.rotx &amp; \",\" _\n\
				&amp; actor2.roty &amp; \",\" &amp; actor2.rotz &amp; \" )\"\n\
\n\
	\'-----------------------------------------------------\n\
	\'	INFO\n\
	\'\n\
	\' Get pointers to the linked parameters and print the info\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> lnk1 = target.posx\n\
	TestLinks lnk1\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> lnk2 = target.sclx\n\
	TestLinks lnk2\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> lnk3 = target.rotx\n\
	TestLinks lnk3\n\
\n\
\n\
	\'-----------------------------------------------------\n\
	\'	HELPER\n\
	\'\n\
	function TestLinks(lnk)\n\
	\' NB: Since the definition is itself a parameter on the\n\
	\'     Expression object, we could just as easily assign\n\
	\'     a new definition to the expression using \'Value\':\n\
	\'           expr.Parameters( \"definition\" ).Value = new_expr\n\
		if TypeName(lnk) &lt;&gt; \"Nothing\" then\n\
			LogMessage lnk.FullName &amp; \" is a \" &amp; TypeName(lnk)\n\
			<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> expr = lnk.Source\n\
			if TypeName(expr) &lt;&gt; \"Nothing\" then\n\
				LogMessage vbTab &amp; \"Name:\" &amp; vbTab &amp; expr.FullName \n\
				LogMessage vbTab &amp; \"Type:\" &amp; vbTab &amp; TypeName(expr) \n\
				LogMessage vbTab &amp; \"Definition:\" &amp; vbTab _\n\
					&amp; expr.Parameters( \"definition\" ).Value\n\
			else\n\
				LogMessage \"No expression found.\"\n\
			end if\n\
		else\n\
			LogMessage \"Could not find linked parameter.\"\n\
		end if\n\
	end function\n\
\n\
	\'-----------------------------------------------------\n\
	\'	OUTPUT\n\
	\'\n\
	\'INFO : \"cube.kine.local.posx is a Parameter\"\n\
	\'INFO : 	\"Name:	cube.kine.local.Expression\"\n\
	\'INFO : 	\"Type:	Expression\"\n\
	\'INFO : 	\"Definition:	l_fcv( null.kine.local.posx )\"\n\
	\'INFO : \"cube.kine.local.sclx is a Parameter\"\n\
	\'INFO : 	\"Name:	cube.kine.local.scl.sclx.Expression\"\n\
	\'INFO : 	\"Type:	Expression\"\n\
	\'INFO : 	\"Definition:	l_interp( null.kine.local.sclx, null.kine.local.scly, null.kine.local.sclz )\"\n\
	\'INFO : \"cube.kine.local.rotx is a Parameter\"\n\
	\'INFO : 	\"Name:	cube.kine.local.ori.euler.rotx.Expression\"\n\
	\'INFO : 	\"Type:	Expression\"\n\
	\'INFO : 	\"Definition:	l_interpOri( disc.kine.local.rotx, disc.kine.local.roty, disc.kine.local.rotz )\"\n\
</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";