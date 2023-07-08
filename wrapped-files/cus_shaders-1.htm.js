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
      <meta name=\"topicid\" content=\"GUID-1CDF33B1-E2E3-4FCC-993E-954D6594FF06\" />\n\
      <meta name=\"indexterm\" content=\"parameters: for shaders (defining)\" />\n\
      <meta name=\"indexterm\" content=\"shader parameters: defining\" />\n\
      <meta name=\"indexterm\" content=\"shader definitions: parameters\" />\n\
      <meta name=\"indexterm\" content=\"custom shaders: parameter: definition\" />\n\
      <meta name=\"indexterm\" content=\"dynamic shaders: parameter: definition\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Shader Parameter Definitions</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-1CDF33B1-E2E3-4FCC-993E-954D6594FF06\"></a></span><div class=\"head\">\n\
            <h1>Shader Parameter Definitions</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D646EFC4-1D3F-4367-B2B9-849EFB171DE6\"></a></span>Parameter definitions are stored in a special container represented as a <a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainer</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefContainer.html\">ShaderParamDefContainer</a>. On the <a href=\"#!/url=./si_om/ShaderDef.html\">ShaderDef</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderDef.html\">ShaderDef</a> there is one ShaderParamDefContainer for input parameter definitions and another\n\
               for outputs. In addition, when you create a parameter definition of type <a href=\"#!/url=./si_om/siShaderParameterDataType.html\">structure</a>, its members are also stored in a ShaderParamDefContainer.\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-254A4D37-EF48-4802-99CF-D51A43FACD3E\"></a></span><p class=\"table-heading\">To get the ShaderParamDefContainer for ...</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7305727E-F501-485E-9782-8169E6322A69\"></a></span><p class=\"table-heading\">... use this access member</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-1CA4AA4C-C4C5-4077-AE49-3ECAA4F1F338\"></a></span><p class=\"table-body\">input parameters</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E33DC74A-520E-4417-9669-01206974A53F\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ShaderDef.InputParamDefs.html\">ShaderDef.InputParamDefs</a> or ShaderDef::GetInputParamDefs \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D7ED4050-1798-48D0-900A-3BDA80E0EA06\"></a></span><p class=\"table-body\">output parameters</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F11CFEAD-30AC-4089-9405-BAAF165D853E\"></a></span><p class=\"table-body\"><a href=\"#!/url=./si_om/ShaderDef.OutputParamDefs.html\">ShaderDef.OutputParamDefs</a> or ShaderDef::GetOutputParamDefs \n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-783C631B-D7C1-4069-9AC0-8BC0CE455B68\"></a></span><p class=\"table-body\">structure parameter members</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-8EB2AD60-B5B7-4722-B077-22C638F641CE\"></a></span><p class=\"table-body\">StructParamDef.SubParamDefs or StructParamDef::GetSubParamDefs </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-2A29CE9A-AE17-492F-B869-DC476078D7F2\"></a></span>From the ShaderParamDefContainer on an instantiated shader, you can access its collection\n\
               of parameter definitions via the <a href=\"#!/url=./si_om/ShaderParamDefContainer.Definitions.html\">ShaderParamDefContainer.Definitions</a> or ShaderParamDefContainer::GetDefinitions member, or to a specific member via the\n\
               <a href=\"#!/url=./si_om/ShaderParamDefContainer.GetParamDefByName.html\">ShaderParamDefContainer.GetParamDefByName</a> or ShaderParamDefContainer::GetParamDefByName method:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# Iterating over all input parameter definitions to find a struct containing a \n\
# member parameter definition called \"mute\"\n\
oInputParamsContainer = oShaderDef.InputParamDefs\n\
for oParamDef in oInputParamsContainer.Definitions :\n\
	if (oParamDef.IsStructure) :\n\
		oStructSubParamDefs = oParamDef.SubParamDefs\n\
		oMuteParamDef = oStructSubParamDefs.GetParamDefByName(\"mute\")\n\
		Application.LogMessage(\"Found struct member paramdef called %s\" % oMuteParamDef.DisplayName)</pre></div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-A6B80805-5FFB-4F3B-8771-EB5E5DD47C2E\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-409AC9CF-9E8A-41FF-8084-378D28D8FC1C\"></a></span>Because plug-in based shader definitions are only populated when instantiated, you\n\
                     must instantiate a shader (for example, via scripting using the <a href=\"#!/url=./si_cmds/CreateShaderFromProgID.html\">CreateShaderFromProgID</a> command) before any <a href=\"#!/url=./si_om/ShaderParamDefContainer.html\">ShaderParamDefContainers</a> or <a href=\"#!/url=./si_cpp/classXSI_1_1ShaderParamDefContainer.html\">ShaderParamDefContainers</a> can return a list of parameter definitions.\n\
                  </p> \n\
               </div>\n\
            </div>\n\
         </div><span class=\"noindex\">\n\
            <div class=\"topic-list\">\n\
               <h4 class=\"related\">Topics in this section</h4>\n\
               <ul class=\"jumplist\">\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders_ParamsData.htm\">Parameter Data Types</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders_ParamsAdding.htm\">Adding Parameter Definitions</a></li>\n\
                  <li class=\"topiclist-litem\"><a href=\"#!/url=./files/cus_shaders_ParamsControls.htm\">Refining UI Controls for Parameter Definitions</a></li>\n\
               </ul>\n\
            </div></span><div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";