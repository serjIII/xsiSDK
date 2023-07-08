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
      <meta name=\"topicid\" content=\"GUID-23F992F1-A5E6-4B46-8445-D5DA057EE5ED\" />\n\
      <meta name=\"indexterm\" content=\"selecting: getting selected components: C++ API only\" />\n\
      <meta name=\"indexterm\" content=\"selection: getting selected components: C++ API only\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Accessing the List of Selected Components via the C++ API</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-23F992F1-A5E6-4B46-8445-D5DA057EE5ED\"></a></span><div class=\"head\">\n\
            <h1>Accessing the List of Selected Components via the C++ API</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A022B656-4C07-4996-8366-98606B266D04\"></a></span>Use the Softimage Object Model <a href=\"#!/url=./si_om/SubComponent.html\">SubComponent</a> interface via the <a href=\"#!/url=./si_cpp/classXSI_1_1CComAPIHandler.html\">CComAPIHandler</a>, which is a kind of a COM wrapper for the C++ API:\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// C++ API -- iterating over the selected components\n\
Application app;\n\
\n\
// Make sure something is selected\n\
Selection sel = app.GetSelection();\n\
LONG lCount = sel.GetCount();\n\
app.LogMessage(L\"Found \" + CString(lCount) + L\" selected items.\");\n\
if ( lCount &lt; LONG(1) )\n\
{\n\
	app.LogMessage( L\"No components are selected\" );\n\
	return CStatus::OK;\n\
}\n\
for ( LONG i=0; i&lt;lCount; i++ )\n\
{\n\
	if ( sel.GetItem(i).GetClassIDName() == L\"X3DObject\" )\n\
	{\n\
		X3DObject x3dobj(sel.GetItem(i));\n\
		app.LogMessage(L\"\\titem[\" + CString(i) + L\"]: \" + x3dobj.GetName() );\n\
	}\n\
	else\n\
	{\n\
		app.LogMessage(L\"\\titem[\" + CString(i) + L\"]: \" + sel.GetItem(i).GetClassIDName() );\n\
	}\n\
}\n\
\n\
// The collection of selected components exists in the first member\n\
CComAPIHandler comCollItem( sel.GetItem(0) );\n\
CComAPIHandler comSubComp( comCollItem.GetProperty(L\"SubComponent\") );\n\
CValue subCompType = comSubComp.GetProperty( L\"Type\" );\n\
app.LogMessage( L\"Type of subcomponent: \" + CString(subCompType) );\n\
\n\
// Grab the component collection\n\
CComAPIHandler comCompColl( comSubComp.GetProperty(L\"ComponentCollection\") );\n\
\n\
// Now we can iterate over the component collection\'s members\n\
LONG lCollCount( comCompColl.GetProperty(L\"Count\") );\n\
app.LogMessage(L\"Found \" + CString(lCollCount) + L\" selected components.\");\n\
for ( LONG j=0; j&lt;lCollCount; j++ )\n\
{\n\
	CValue rtn;	// output from the Item property\n\
	CValueArray idx; idx.Add(j); // <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> to use\n\
	comCompColl.Invoke( L\"Item\", CComAPIHandler::PropertyGet, rtn, idx );\n\
\n\
	// From the CRef class, we can convert it to the actual class\n\
	CRef itm(rtn);\n\
	if ( itm.GetClassID() == siVertexID )\n\
	{\n\
		Vertex vtx = Vertex(itm);\n\
		app.LogMessage( L\"Found a vertex at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \" + CString(vtx.GetIndex()) );\n\
	}\n\
	if ( itm.GetClassID() == siSampleID )\n\
	{\n\
		Sample smp = Sample(itm);\n\
		app.LogMessage( L\"Found a sample at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \" + CString(smp.GetIndex()) );\n\
	}\n\
	if ( itm.GetClassID() == siEdgeID )\n\
	{\n\
		Edge edg = Edge(itm);\n\
		app.LogMessage( L\"Found a edge at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \" + CString(edg.GetIndex()) );\n\
	}\n\
	if ( itm.GetClassID() == siControlPointID )\n\
	{\n\
		ControlPoint ctrl = ControlPoint(itm);\n\
		app.LogMessage( L\"Found a control point at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \" + CString(ctrl.GetIndex()) );\n\
	}\n\
	// etc.\n\
}</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";