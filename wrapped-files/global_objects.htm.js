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
      <meta name=\"topicid\" content=\"GUID-B0FF0CC0-07EC-4B5A-91BF-E803B83516B1\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Global (Intrinsic) Objects</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B0FF0CC0-07EC-4B5A-91BF-E803B83516B1\"></a></span><div class=\"head\">\n\
            <h1>Global (Intrinsic) Objects</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-5DDB724C-6CE5-40FC-B760-59165739B954\"></a></span>There are a number of intrinsic objects with global scope available within Softimage.\n\
               An intrinsic object is one that you do not have to create an instance of it in your\n\
               code but can refer to it by name. The following intrinsic objects are available within\n\
               Softimage scripting:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-6A195755-DC75-475B-BDE9-8E43015D7FBF\"></a></span><p class=\"table-heading\">Language Element</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3A3307D6-C706-4DED-8E6C-4DED9DC9ECFD\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-BC314693-739A-4DDF-B367-F91013E44389\"></a></span><p class=\"table-body\">Application Object (see <a href=\"#!/url=./si_om/XSIApplication.html\">XSIApplication</a>)\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2DEAA0B4-8E42-45DB-8415-030829B950B3\"></a></span><p class=\"table-body\">An intrinsic object that represents the running instance of a Softimage application.</p> \n\
                        <ul>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-35FB8A81-BBF7-4EE6-8138-88C27CB30596\"></a></span>In VBScript and JScript all the methods and properties of the Application object are\n\
                                 available even without specifying the <span class=\"code\" translate=\"no\">\"Application.\"</span> prefix. For example, using <span class=\"code\" translate=\"no\">LogMessage</span> is the same as using <span class=\"code\" translate=\"no\">Application.LogMessage</span>.\n\
                              </p> \n\
                           </li>\n\
                           <li> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-62F13037-C400-4059-923A-5F8C60900A9B\"></a></span>All Softimage commands are available as if they were methods of the Application object.\n\
                                 For example, <span class=\"code\" translate=\"no\">Application.NewScene()</span> executes the <a href=\"#!/url=./si_cmds/NewScene.html\">NewScene</a> command. This is the main syntax for calling commands from Python.\n\
                              </p> \n\
                           </li>\n\
                        </ul> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2E1B371A-73CC-4BC6-BF2C-D10E21A24AFA\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/Dictionary.html\">Dictionary</a> Object\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-40EA11AD-D6CC-4F20-BC9F-399AA07B7A52\"></a></span><p class=\"table-body\">An intrinsic object that provides access to application definitions (see <a href=\"#!/url=./si_om/Dictionary.GetObject.html\">GetObject (Dictionary)</a>) and methods to access existing objects using the full path name (see GetObject (Dictionary)).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-825E759E-B0EA-49AD-8C7D-7468740EBBBC\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIFactory.html\">XSIFactory</a> Object\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-64155029-7E17-4541-9601-E2915AC578C4\"></a></span><p class=\"table-body\">An intrinsic object that provides access to functions for creating helper objects\n\
                           (see <a href=\"#!/url=./si_om/XSIFactory.CreateActiveXObject.html\">CreateActiveXObject (XSIFactory)</a>) and objects that need to be created without being made part of the scene graph (see\n\
                           <a href=\"#!/url=./si_om/XSIFactory.CreateGridData.html\">CreateGridData (XSIFactory)</a>).\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-486940B2-EAAF-4B0A-8BC1-0EC74B1036F2\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIMath.html\">XSIMath</a> Object\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-0EE261D3-59B5-40ED-85A6-A7B664427850\"></a></span><p class=\"table-body\">An intrinsic object that provides basic 3D mathematics functionality.</p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-D85E39A6-92CE-4609-85D8-98DB06724E84\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIUIToolkit.html\">XSIUIToolkit</a> Object\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-2C22E000-8D69-479F-B930-84F4BD474D4E\"></a></span><p class=\"table-body\">An intrinsic object that provides access to user interface objects such as the <a href=\"#!/url=./si_om/ProgressBar.html\">ProgressBar</a> object.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-053DA1E2-0F00-4ED8-B27F-E0BC6D89A1CA\"></a></span><p class=\"table-body\"> <a href=\"#!/url=./si_om/XSIUtils.html\">XSIUtils</a> Object\n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-851C72B3-FE3E-4767-B3DC-DA163DA48A9C\"></a></span><p class=\"table-body\">An intrinsic object that provides access to miscellaneous methods such as the <a href=\"#!/url=./si_om/XSIUtils.QuickSort.html\">QuickSort (XSIUtils)</a> method.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <div><span class=\"anchor_wrapper\"><a name=\"GUID-DBA46E0F-758C-4A5C-89FC-8384ECBEACE5\"></a></span><div class=\"note-important\"><span class=\"label\">IMPORTANT:</span> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-092DE88F-610C-423B-84C5-70D3CBC5339C\"></a></span>Intrinsic objects are not available within the context of Netview.\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-63FCA3E9-A8E3-4B3A-B030-C457D4F267D9\"></a></span>The following example illustrates the use of the XSIMath and XSIApplication global\n\
                     objects:\n\
                  </p> \n\
               </div>\n\
            </div>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	Dim v3\n\
	\n\
	\' Create a Vector3 object directly from XSIMath\n\
	Set v3 = XSIMath.CreateVector3\n\
	v3.Set 10.0, 10.0, 10.0\n\
	v3.ScaleInPlace 2\n\
	\' This calls the LogMessage method of the global\n\
	\' Application object which prints the array of\n\
	\' XYZ values returned from the Get2 method \n\
	\' separated by the comma-space string\n\
	LogMessage join( v3.Get2, \", \" )\n\
	\n\
	\' Outputs:\n\
	\'INFO : 20, 20, 20\n\
</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";