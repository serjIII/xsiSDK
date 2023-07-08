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
      <meta name=\"topicid\" content=\"GUID-8FA734C2-27AA-4CAE-91FA-61C1D13439C3\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Tips</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"name\", \"si_cpp/group__RenderMapDefine.html#ga882c17490314f92c7159d6d7d69696e7\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-8FA734C2-27AA-4CAE-91FA-61C1D13439C3\"></a></span><div class=\"head\">\n\
            <h1>Tips</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-D9BEC9AC-2D73-442A-8C38-69BF89A4F38E\"></a></span>Following are some helpful tips for working with Python. \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_F844E2A5AC5E4616BE47E4B0356A2FE8\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B2657423-C2A4-42D9-8D59-3A45BEB48A0D\"></a></span>Calling the Item Method of a Collection\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-75060FC8-9857-4E96-B53F-7680F2FA656B\"></a></span>To access an item in a collection using an integer index, use the <span class=\"code\" translate=\"no\">[]</span> syntax as shown in the following example: \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">oObj = Application.ActiveSceneRoot.AddGeometry(\"Cube\",\"MeshSurface\")\n\
oEdges = oObj.ActivePrimitive.Geometry.Edges\n\
\n\
try:\n\
    oEdge = oEdges.Item( 10 )\n\
except:\n\
    Application.LogMessage( \"You cannot call .Item() method explicitly\" ) ;\n\
	\n\
# Instead do this\n\
oEdge = oEdges[10]\n\
Application.LogMessage( oEdge.Vertices.Count ) \n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D9E17375-D6E7-4D2C-8BA6-0CDA2CE40433\"></a></span>The following is another example. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">XSIUtils.Environment[\"MYVAR\"] = \"bar\" ;\n\
Application.LogMessage( XSIUtils.Environment[\"MYVAR\"] ) ;</pre></div> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_057B54D832F74DE1AEE10CDB11AAA6C5\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CFAF3AB5-F7B2-4CB4-AC2C-4F298FB89D59\"></a></span>Retrieving the Methods of an Object at Runtime \n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-70AFF379-A589-40A2-83E6-66061CC336B2\"></a></span>The following example shows how to retrieve the methods of a scripting object at runtime.\n\
               \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">def GetFunctions( dynDisp ):\n\
    \"\"\"Returns a sorted and unique list of all functions defined in a dynamic dispatch\"\"\"\n\
    dict = {}\n\
    try:\n\
        for iTI in xrange(0,dynDisp._oleobj_.GetTypeInfoCount()):\n\
                 typeInfo = dynDisp._oleobj_.GetTypeInfo(iTI)\n\
                 typeAttr = typeInfo.GetTypeAttr()\n\
                 for iFun in xrange(0,typeAttr.cFuncs):\n\
                        funDesc = typeInfo.GetFuncDesc(iFun)\n\
                        <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> = typeInfo.GetNames(funDesc.memid)[0]\n\
                        dict[<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>] = 1\n\
    except:\n\
        pass \n\
    ret = dict.keys()\n\
    ret.sort()\n\
    return ret\n\
\n\
import pprint\n\
\n\
funcs = GetFunctions(Application)\n\
Application.LogMessage(pprint.pformat(funcs))\n\
\n\
funcs = GetFunctions(Application.ActiveSceneRoot)\n\
Application.LogMessage(pprint.pformat(funcs))</pre></div> \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2F2FD70C-5B42-4EF9-BAA6-AD7BBF3E76E7\"></a></span>You can also generate some basic object model documentation from the information exposed\n\
               by Python as follows: \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">def FormatDocumentation(typeInfo, funDesc):\n\
    nameAndParms = typeInfo.GetNames(funDesc.memid)\n\
    docum = typeInfo.GetDocumentation(funDesc.memid)\n\
    import pythoncom\n\
# This differentiates between \"functions\" and \"accessors\"\n\
    if funDesc.invkind == pythoncom.INVOKE_FUNC:\n\
        docStr = nameAndParms[0] + \"(\" + \",\".join(nameAndParms[1:]) + \")\\n\"\n\
    else:\n\
        docStr = nameAndParms[0] + \"\\n\" \n\
    if docum[1]:\n\
        docStr += \"\\t\" + docum[1]\n\
    return docStr\n\
\n\
def GetDocumentation( dynDisp, funcName = None ):\n\
    allTypeInfoDoc = []\n\
    for iTI in xrange(0,dynDisp._oleobj_.GetTypeInfoCount()):\n\
        typeInfo = dynDisp._oleobj_.GetTypeInfo(iTI)\n\
        typeAttr = typeInfo.GetTypeAttr()\n\
        if funcName:\n\
            for iFun in xrange(0,typeAttr.cFuncs):\n\
                funDesc = typeInfo.GetFuncDesc(iFun)\n\
                <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> = typeInfo.GetNames(funDesc.memid)[0]\n\
                if name.upper() == funcName.upper():\n\
                    return FormatDocumentation(typeInfo, funDesc)\n\
    else:\n\
            dict = {}\n\
            className = dynDisp._oleobj_.GetTypeInfo(0).GetDocumentation(-1)\n\
            classDoc = \"class %s \\n\\t%s\\n\\n\"%(className[0],className[1])\n\
            allFuncDoc = []\n\
            for iFun in xrange(0,typeAttr.cFuncs):\n\
                funDesc = typeInfo.GetFuncDesc(iFun)\n\
                <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> = typeInfo.GetNames(funDesc.memid)[0]\n\
                if not dict.has_key(<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>):\n\
                    dict[<a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>] = 1\n\
                    allFuncDoc.append(FormatDocumentation(typeInfo, funDesc))\n\
            allFuncDoc.sort()				\n\
            allTypeInfoDoc.append(classDoc + \"\\n\".join(allFuncDoc))\n\
    if funcName:\n\
        return \"Documentation not found for %s\"%(funcName,)\n\
    else:\n\
        return \"\\n\".join(allTypeInfoDoc)\n\
\n\
# There are two ways to call this: without a function <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a> and with a function <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>\n\
# Without a function <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>, it retrieves documentation for all functions\n\
Application.LogMessage(GetDocumentation(Application))\n\
# And with a function <a href=\"javascript:void(0)\" data=\"name\" class=\"a_multireflink\">name</a>, it tries to find the documentation for that function\n\
Application.LogMessage(GetDocumentation(Application, \"StatusBar\"))\n\
Application.LogMessage(GetDocumentation(Application, \"NotThere\"))</pre></div> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_37C34D9ADEC24637ACA4C49AA6538186\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-85A8E2AC-3A89-4B46-B8A6-8FF9FD94FCB6\"></a></span>Determining if an SDK Object Supports a Particular Property or Method\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-01C1EBB0-99D8-4498-AD46-6970ED38702B\"></a></span>You can use <span class=\"code\" translate=\"no\">getattr</span> as shown in the following example to determine if the selected object supports the\n\
               <span class=\"code\" translate=\"no\">Properties</span> property. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">oObj = Application.Selection(0)\n\
if getattr(oObj, \"Properties\", None):\n\
    Application.LogMessage(\"Yes\")\n\
else:\n\
    Application.LogMessage(\"No\")</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-ED58A68B-BCC6-4061-A187-AED4959B6552\"></a></span>You can use exception handling to continue without errors even when the property or\n\
               method is not supported. \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_70753AFA31A745D19A8B830F85E2D86A\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-5CDCED66-3CCD-4AF3-AE3F-D50913DCA439\"></a></span>Unwrapping a Python Variable\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D2AEEBD5-F4C6-4C97-90B4-849B860773FC\"></a></span>The return value of a Python based custom command is always converted into an ActiveX\n\
               safe object type. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-8FB12800-F367-42CE-9E08-9CF3E2C16313\"></a></span>If you are calling the Python based command from another Python script, you can use\n\
               the <span class=\"code\" translate=\"no\">unwrap</span> function in <span class=\"filePath\" translate=\"no\">win32com.server</span> to get the pure Python object. \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_3185F81F5B9641D3A48AF2403CA3D638\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-E8483704-89D9-43FC-AA56-E20BBF97AF48\"></a></span>Exposing a Python Object to Other Languages\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E191BD8F-AB2D-4749-8B40-7DEA73BF2117\"></a></span>A Python custom command can return a Python object whose functions and attributes\n\
               are available as methods and properties to VBScript and JScript. See <span class=\"char_link\"><a href=\"#!/url=./files/script_python_RestrictionsonUsingSpecialPythonTypesasReturnValuesfromCustomCommands.htm\"> Returning Python Types from Custom Commands</a></span> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_B8F407AF102E4A53B30888365605B0DD\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-31092B58-9425-4DEB-B7A4-EC6B469D4790\"></a></span> Print Statement\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD7924EF-EF45-4698-B2D8-A32FBE84EDCC\"></a></span>Since Softimage 2013, the <span class=\"code\" translate=\"no\">print</span> statement works only with the built-in Python version that ships with Softimage.\n\
               \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_45AE71A0217E456B9C1E8144E67AB768\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B4844580-E304-45CC-B7AD-86B76801EACE\"></a></span>Using the <span class=\"code\" translate=\"no\">vars([object])</span> function\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-CFFAF69E-6864-4950-BC77-F1DF245B7282\"></a></span>Without arguments, the <span class=\"code\" translate=\"no\">vars()</span> function returns a dictionary corresponding to the current local symbol table. With\n\
               a module, class, or class instance object as argument (or anything else that has a\n\
               <span class=\"code\" translate=\"no\">__dict__ </span> attribute), it returns a dictionary corresponding to the object\'s symbol table. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-95860C16-5B39-4C83-90E3-FE521CF965A9\"></a></span>See the <span class=\"code\" translate=\"no\">LogMessage</span> call in the following example. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\"># Set up an SIVector3 math object\n\
v3 = XSIMath.CreateVector3()\n\
v3.Set( 10.0, 20.0, 30.0)\n\
v3.ScaleInPlace(2)\n\
\n\
# Initialize the variables (you need to initialize\n\
# variables to be used as input to SIVector3.Get)\n\
x=0\n\
y=0\n\
z=0\n\
\n\
# Retrieve the three values from the SIVector3.Get method\n\
# (use the same variables as input)\n\
x, y, z = v3.Get(x, y, z)\n\
\n\
# Write the results to the Script Editor\n\
Application.LogMessage( \'%(x).2f %(y).2f %(z).2f\' % vars() )</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-476AF72D-F613-440B-962D-18DA5AD2CC89\"></a></span>Here, <span class=\"code\" translate=\"no\">vars()</span> is returning a dictionary with x, y, and z. \n\
            </p> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-71232C39-0B44-4147-9245-57F0412F0B5E\"></a></span>Additionally, consider the following example code. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">x = 10.0\n\
y = 20.0\n\
z = 30.0\n\
Application.LogMessage( \'%(x).2f %(y).2f %(z).2f\' % vars() )</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3169EF8B-8D61-4BA2-9ABE-2131C967A761\"></a></span>This is same as the following code. \n\
            </p> \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">my_dict = { \'x\':10.0, \'y\' : 20.0, \'z\' : 30.0 }\n\
Application.LogMessage( \'%(x).2f %(y).2f %(z).2f\' % my_dict )</pre></div> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";