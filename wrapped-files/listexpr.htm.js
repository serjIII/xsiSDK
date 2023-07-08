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
      <meta name=\"topicid\" content=\"GUID-45F57FA1-BDCE-4336-AFE3-A503CA0CE9B8\" />\n\
      <meta name=\"indexterm\" content=\"Object List\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Object List</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"Camera\", \"si_cpp/classXSI_1_1Camera.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-45F57FA1-BDCE-4336-AFE3-A503CA0CE9B8\"></a></span><div class=\"head\">\n\
            <h1> Object List</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-6893473B-F37F-4BCF-B74A-38F318B3CA82\"></a></span>An object list is a string that identifies objects, components, and parameters.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-ACA42596-35A2-489C-B0AD-4B5AC57AA5DE\"></a></span>A object list can identify a single object. For example, the following string identifies\n\
               the local <em class=\"strong\">X</em> translation of the cube object:\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-32AF6ADC-23A7-48D0-A0DA-9E9EED787DE6\"></a></span> <span class=\"code\" translate=\"no\">\"cube.kine.local.posx\"</span> \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C33FB3F9-4E08-420E-9003-7B6E68EA8FFA\"></a></span>An object list can also identify many objects. For example, the following string identifies\n\
               the local <em class=\"strong\">X</em>, <em class=\"strong\">Y</em>, and <em class=\"strong\">Z</em> translations:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\"cube.kine.local.posx, cube.kine.local.posy, cube.kine.local.posz\"</pre></div>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-23ED0147-0D84-4546-92EC-078FF535BE37\"></a></span><p class=\"table-heading\">Syntax keyword</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3F5D2E5E-E506-437F-82B9-A35D03E03AA3\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-5079C385-7817-40CA-B6AF-1AF6B98B7842\"></a></span><p class=\"table-body\">,</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-30A3417E-636A-4DC2-930E-AD744CEB0FC8\"></a></span><p class=\"table-body\">Separates items in a list. For example:</p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\"cube.kine.local.posx, cube.kine.local.posy, cube.kine.local.posz\"</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-274C4DF9-71BD-4A6D-8E8F-ADB135EAD219\"></a></span><p class=\"table-body\">{}</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6F86F3F6-788C-460F-913F-AE504E35E595\"></a></span><p class=\"table-body\">Specifies a list of objects. For example, the following selects the posx local transfo\n\
                           parameter of the cube and sphere objects:\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">\"{cube, sphere}.kine.local.posx\"</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-21247F83-CAB7-44AF-82C9-B630E0EEB367\"></a></span><p class=\"table-body\">*</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9E575754-25A2-4E2C-92FB-0A16D504616D\"></a></span><p class=\"table-body\">Matches one or more characters. For example:</p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-0109FD8F-F6B4-48F9-B168-D16D32A0C7E7\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">\"Views.ViewA.*<a href=\"javascript:void(0)\" data=\"Camera\" class=\"a_multireflink\">Camera</a>\"</em> </span> matches all cameras of view A.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E78EB882-F750-408D-BF17-03B4252F40B6\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">\"Passes.MyPass.*\"</em> </span> matches all partitions under \"MyPass\".\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-A78D3E91-6F12-4EEA-BF56-DE9C6F4AED1C\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">\"Layers.MyLayer.*\"</em> </span> matches all objects in \"MyLayer\".\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-1D11EAB2-BCFE-44DE-B4D5-6B37642C1A7E\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">\"cube*\"</em> </span> matches all objects whose names begin with \"cube\".\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E073E9C2-409C-4852-A95F-B72D961BA328\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">\"Cone.pnt[*]\"</em> </span> matches all the points on the object. This is the same as \"Cone.point[0-LAST]\".\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2AF4FA1E-FDE0-4CB0-A283-B886B10551DA\"></a></span><p class=\"table-body\">/</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-78236476-E239-49AC-BEB6-8ADA70B0E27C\"></a></span><p class=\"table-body\">A marking list for a command. Separates a list of objects and a list of animatable\n\
                           parameters. For example, the following command adds fcurves to the local position\n\
                           parameters of all objects whose names begin with the letters \"cone\":\n\
                        </p> \n\
                        <div class=\"codeBlock\"><pre class=\"prettyprint\">AddFCurve \"cone*/kine.local.pos\"</pre></div> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B0F6446E-89C7-4E21-8E50-2002D78F4A64\"></a></span><p class=\"table-body\">#</p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-62C121FD-79B4-401B-A3D2-96BBBB229C09\"></a></span><p class=\"table-body\">Used to reference types of objects:</p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-5779C19F-C2EF-4DF4-B9EB-5617C483AA5F\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">SelectObj \"*.#override\"</em> </span> selects all overrides in the scene.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-F5DF0433-DAEB-4A1D-97BF-0AED17EC234F\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">SelectObj \"#model\"</em> </span> selects all models in the scene.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E65262C7-0E8E-4DCE-AE0B-20C8CA6B8C27\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">SelectObj \"*.#3dobject\"</em> </span> selects all 3D objects in the scene.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-0966865E-3E36-4675-B94C-144E2EA8C440\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">SelectObj \"*.#pass\"</em> </span> selects all passes in the scene.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-422AD7E6-088D-456D-B094-043B3057C0BA\"></a></span> <span class=\"code\" translate=\"no\"> <em class=\"strong\">SelectObj \"*.#group\"</em> </span> selects all groups in the scene.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C22AE804-A055-4137-8A22-2D1A5B165F4A\"></a></span>A collection can be used in place of a string to represent a object list. For example,\n\
               both of the following LogMessage commands log a string that is a comma-separated list\n\
               of object names. For example, if the objects \"cone\", \"cube\", and \"sphere\" are selected,\n\
               then list is equivalent to the string \"cube, cone, sphere\":\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	dim list\n\
	<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> list = GetValue( \"SelectionList\" )\n\
	LogMessage cstr(list)\n\
	LogMessage list\n\
</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";