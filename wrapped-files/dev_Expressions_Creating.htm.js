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
      <meta name=\"topicid\" content=\"GUID-54D8D778-2A46-4A5B-A3C9-8E8A2770D3E6\" />\n\
      <meta name=\"indexterm\" content=\"expressions: creating\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Creating Expressions</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-54D8D778-2A46-4A5B-A3C9-8E8A2770D3E6\"></a></span><div class=\"head\">\n\
            <h1> Creating Expressions</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0DB5A1F7-AF71-4FF4-B656-DCD4A0DF5AB4\"></a></span>Expressions can be created using scripting commands, the <a href=\"#!/url=./si_om/Parameter.AddExpression.html\">Parameter.AddExpression</a> or Parameter::AddExpression method. The <a href=\"#!/url=./si_cmds/SetExpr.html\">SetExpr</a> command substitutes an <a href=\"#!/url=./si_om/Expression.html\">Expression</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1Expression.html\">Expression</a> object for the specified parameter\'s value by using an expression function (see <a href=\"http://softimage.wiki.softimage.com/sdkdocs/ExprRef.htm\">Expression Reference</a> for more information on available expression functions).\n\
            </p>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-87D2AFCD-411E-4949-8E78-BB2082EAC853\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-F2D6ADE4-D703-448C-BCBC-3EADFBC7AEF1\"></a></span>The <a href=\"#!/url=./si_cmds/AddExpr.html\">AddExpr</a> command basically does the same thing as the <a href=\"#!/url=./si_cmds/SetExpr.html\">SetExpr</a> command, but it also displays the new expression in the Expression Editor.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-000F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-F37AE699-13DB-47A4-B398-7717C55B8223\"></a></span>Python Example: Setting an Expression with the SetExpr Command\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F6D55A62-6A5E-45AD-9F44-A17601B4197A\"></a></span>This is the above example written in Python:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
from win32com.client import constants as c\n\
n = Application.ActiveSceneRoot.AddNull( \"Null4Expr\" )\n\
params = n.posx.FullName+\",\"+n.posy.FullName+\",\"+n.posz.FullName\n\
Application.SetExpr( params, \"RAND(17,2,7)\" )\n\
</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-618C960E-F08C-459A-AD4C-18DD8389FF2A\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-F4615FF4-CCFD-44BE-B171-841374921BA5\"></a></span>The thread of this example continues with accessing the expression in <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0014\">Python Example: Using the GetSource Command</a></span>, in which the <a href=\"#!/url=./si_om/siSourceType.html\">siSourceType</a> enum is used (which is why the constants module was imported).\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0010\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-0E992D49-E701-4D03-BBB1-30993F496AE1\"></a></span>JScript Example: Setting an Expression with the Parameter.AddExpression Method\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-D1786F74-4BFE-4BE1-ABFD-7068CA8B3818\"></a></span>Applying the random expression produces a kind of a buzzing effect:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var n = Application.ActiveSceneRoot.AddNull( \"Null4Expr\" );\n\
n.posx.AddExpression( \"RAND(17,2,7)\" );\n\
n.posy.AddExpression( \"RAND(17,2,7)\" );\n\
n.posz.AddExpression( \"RAND(17,2,7)\" );\n\
</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-625D0A2B-D7F1-4D9C-BA31-9DB966B82E7B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-957DDBF8-F1A6-4015-B68A-124216782B52\"></a></span>The thread of this example continues with accessing the expression in <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0015\">JScript Example: Using the Source Property</a></span>.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS00FA839CE9F5F148906F76DDEF5331DD-0011\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-6902C41B-3C63-41C0-B601-103A0E6FFCDB\"></a></span>C++ API Example: Setting an Expression with the Parameter::AddExpression Member Function\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-3D80A1CB-5711-480C-84F4-E2E00FC0FADD\"></a></span>The following snippet is the C++ API equivalent of the previous JScript example:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Setup\n\
Application app = Application();\n\
Model root = app.GetActiveSceneRoot();\n\
Null n; root.AddNull( L\"Null4Expr\", n );\n\
\n\
// Get Parameters for names\n\
Parameter posx = n.GetParameter(L\"posx\");\n\
Parameter posy = n.GetParameter(L\"posy\");\n\
Parameter posz = n.GetParameter(L\"posz\");\n\
\n\
// Set the expression\n\
posx.AddExpression( L\"RAND(17,2,7)\" );\n\
posy.AddExpression( L\"RAND(17,2,7)\" );\n\
posz.AddExpression( L\"RAND(17,2,7)\" );\n\
</pre></div> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-820170AD-7B34-43D4-A3FA-EE2E86B59CC5\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-B506A6B1-E420-4AAF-B3A6-440A7CD5D343\"></a></span>The thread of this example continues with accessing the expression in <span class=\"char_link\"><a href=\"#!/url=./files/dev_Expressions_Accessing.htm#WS00FA839CE9F5F148906F76DDEF5331DD-0016\">C++ Example: Using the GetSource Member</a></span>.\n\
                     </p> \n\
                  </div>\n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";