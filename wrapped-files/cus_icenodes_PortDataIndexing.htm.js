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
      <meta name=\"topicid\" content=\"GUID-C6424314-956F-48DD-8587-B7A19BDFBAD8\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Port Data Indexing</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-C6424314-956F-48DD-8587-B7A19BDFBAD8\"></a></span><div class=\"head\">\n\
            <h1>Port Data Indexing</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-4BF65DCC-1640-4F36-9F04-FA092196A068\"></a></span>The <a href=\"#!/url=./si_cpp/classXSI_1_1CIndexSet.html\">CIndexSet</a> and CIndexSet::Iterator classes are recommended for accessing the input data of custom\n\
               <a href=\"#!/url=./si_cpp/classXSI_1_1ICENode.html\">ICENodes</a>. These classes encapsulate the indices required for accessing the custom ICENode\n\
               input ports for a given evaluation thread. Conventional array indexing (direct access)\n\
               is still possible for accessing the input port data but it is not as efficient as\n\
               CIndexSet. This is particularly true in multi-threading mode since ICE breaks index\n\
               subsets and run them on separate threads. If direct access is used instead, then all\n\
               threads will iterate over the data with the same indices resulting with a loss of\n\
               performance.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-20597122-70B6-4F90-A9C0-F4D7C8D812A9\"></a></span>In the <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes-2.htm\">multi-threading operation mode</a></span>, the CIndexSet objects are associated to the ICENode input and output ports that\n\
               share the same evaluation context. In <span class=\"char_link\"><a href=\"#!/url=./files/cus_icenodes_ICENodeProcessingSingleThread.htm\">single-threading mode</a></span>, CIndexSet objects are not associated to the input and output ports because their\n\
               context can be different. Therefore, CIndexSet objects must be created for specific\n\
               input ports in single-threading mode.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-0019\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-C2A6DA4D-22C3-4432-B6BA-1F3410599D3F\"></a></span>Using CIndexSet in single-threading mode for a specific port:\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CIndexSet indexSet( in_ctxt, ID_IN_PointPosition );\n\
for ( CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next() )\n\
{\n\
	CVector3f&amp; v3f = posArray[ it ];\n\
\n\
	if ( v3fMin.GetX() &gt;= v3f.GetX() &amp;&amp; v3fMin.GetY() &gt;= v3f.GetY() &amp;&amp; v3fMin.GetZ() &gt;= v3f.GetZ() )\n\
	{\n\
		v3fMin = v3f;\n\
	}\n\
\n\
	if ( v3fMax.GetX() &lt;= v3f.GetX() &amp;&amp; v3fMax.GetY() &lt;= v3f.GetY() &amp;&amp; v3fMax.GetZ() &lt;= v3f.GetZ() )\n\
	{\n\
		v3fMax = v3f;\n\
	}\n\
}</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSB2B58C11414F714EB9B26CD8E647E1E1-001A\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A5896D04-42D7-44E4-9AF7-72C25339F73B\"></a></span>Using CIndexSet in multi-threading mode:\n\
               </h2> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
CIndexSet indexSet( in_ctxt );\n\
for(CIndexSet::Iterator it = indexSet.Begin(); it.HasNext(); it.Next())\n\
{\n\
	outData[it] = inputData[it].GetX();\n\
}</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E0727D0D-DC48-4AC9-B83A-7CFD082180DF\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-62B03CA4-929C-42DB-BCB5-60BE8F84BCBA\"></a></span>When a custom ICENode is set up for the multi-phase mode (<a href=\"#!/url=./si_om/siICENodeThreadingModel.html\">siICENodeMultiEvaluationPhase</a>), CIndexSet objects must be created for specific ports. This is required only for\n\
                        the intermediate phases since they are always run in single-threading.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A2919F06-7A31-4A6D-907A-2D0A8BBC08FC\"></a></span>Unlike the input port data, the indices exposed by CIndexSet are not immutable and\n\
                  can be removed from the subset. This operation is called element filtering. Filtering\n\
                  out indices from a subset hides these indices from other ICENodes in the graph. Element\n\
                  filtering is an important concept which enables condition-based optimizations that\n\
                  could occur in an ICE graph. Removing indices from the subset doesn\'t alter the content\n\
                  of the input data which will always be set to the same size. The CIndexSet::Iterator\n\
                  class has been designed to automatically skip the filtered elements of a subset, that\'s\n\
                  why it is absolutely crucial to always iterate over the input data with the CIndexSet::Iterator\n\
                  class.\n\
               </p> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";