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
      <meta name=\"topicid\" content=\"GUID-DAD3F999-6D44-4860-AE7D-38BA07762FA1\" />\n\
      <meta name=\"indexterm\" content=\"UNC path\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <meta name=\"keywords\" content=\"<servername&gt;, <sharename&gt;, <directory&gt;\" />\n\
      <meta name=\"keyword\" content=\"<servername&gt;\" />\n\
      <meta name=\"keyword\" content=\"<sharename&gt;\" />\n\
      <meta name=\"keyword\" content=\"<directory&gt;\" />\n\
      <title>UNC Path</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-DAD3F999-6D44-4860-AE7D-38BA07762FA1\"></a></span><div class=\"head\">\n\
            <h1>UNC Path</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-07740524-707C-4A11-B350-4B61168ADF92\"></a></span> <em class=\"strong\">UNC</em> stands for <em class=\"strong\">Uniform Naming Convention</em> which is a Microsoft standard for identifying shared resources on a network. For\n\
               example, if you share a folder for public access then someone else on your network\n\
               can access that folder by typing the UNC path at the command prompt.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C9A93B89-9BA2-4354-B7F2-1BA12753C822\"></a></span>The format of a UNC path is: <span class=\"filePath\" translate=\"no\">\\\\&lt;servername&gt;\\&lt;sharename&gt;\\&lt;directory&gt;</span>, where these placeholders represent the following types of names:\n\
            </p>\n\
            <div class=\"table_Ruled\">\n\
               <table cellpadding=\"0\" cellspacing=\"0\" class=\"ruled\">\n\
                  <colgroup>\n\
                     <col align=\"left\" />\n\
                     <col align=\"left\" />\n\
                  </colgroup>\n\
                  <tr class=\"ruledHeading\">\n\
                     <th class=\"table-heading\"> <span class=\"anchor_wrapper\"><a name=\"GUID-3E9296A6-7EFA-4F8D-9643-D803D56D903E\"></a></span><p class=\"table-heading\">Placeholder</p> \n\
                     </th>\n\
                     <th class=\"table-heading\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-4E4BA6F6-2FB9-4079-BDBB-CCE1A4BA22D8\"></a></span><p class=\"table-heading\">Description</p> \n\
                     </th>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-E28C828B-3A32-4805-BE3E-0E8FC597147B\"></a></span><p class=\"table-body\"> <span class=\"keyword\">&lt;servername&gt;</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-7500FAB9-AFE3-4535-ADE5-B93AA0630E68\"></a></span><p class=\"table-body\"> <em class=\"strong\">The network name for that computer.</em> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-6B8196F5-9986-47C8-8A2F-CDA421F312FF\"></a></span><p class=\"table-body\">On Windows this is generally the Computer Name found under Network (Identification)\n\
                           via the Control Panel. For example, <span class=\"code\" translate=\"no\">oslo256, sallyf</span>, etc.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledEvenRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-F72B3D83-649A-4208-BEF7-147046BBC75E\"></a></span><p class=\"table-body\"> <span class=\"keyword\">&lt;sharename&gt;</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-9297BB37-04DC-421E-A0B5-66E26BF49716\"></a></span><p class=\"table-body\"> <em class=\"strong\">The share name for the directory.</em> \n\
                        </p> <span class=\"anchor_wrapper\"><a name=\"GUID-331244DD-A10C-44B5-A8ED-1282728D8813\"></a></span><p class=\"table-body\">On Windows this is generally the Share Name you specify on the Sharing tab of the\n\
                           folder\'s properties dialog. For example, if you share the folder located at <span class=\"filePath\" translate=\"no\">C:\\temp\\mistakes\\baddies,</span> it defaults to a Share Name of <span class=\"code\" translate=\"no\">baddies</span>.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
                  <tr class=\"ruledOddRow\">\n\
                     <td class=\"table-body\"> <span class=\"anchor_wrapper\"><a name=\"GUID-63B584DE-58DD-400C-8246-B8E1A653B390\"></a></span><p class=\"table-body\"> <span class=\"keyword\">&lt;directory&gt;</span> \n\
                        </p> \n\
                     </td>\n\
                     <td class=\"table-body\" align=\"left\"> <span class=\"anchor_wrapper\"><a name=\"GUID-B3B41A8D-42FD-4F94-B69B-A8AAE0EAB27E\"></a></span><p class=\"table-body\">Any <em class=\"strong\">additional directories</em> below the shared directory.\n\
                        </p> \n\
                     </td>\n\
                  </tr>\n\
               </table>\n\
            </div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-3B1308C1-2543-4A3E-B432-C2CA0E75626E\"></a></span>As an example, the following are all valid UNC paths:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	\\sallyf\\baddies\n\
	\\sallyf\\baddies\\snip\n\
	\\sallyf\\baddies\\snap\n\
	\\sallyf\\baddies\\snerp\n\
	\\sallyf\\baddies\\snerp\\batter\n\
	\\sallyf\\baddies\\snerp\\bath\n\
</pre></div>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-E60950EB-3B44-45C0-A186-BC8E1E4F6889\"></a></span>...assuming the following file structure:\n\
            </p>\n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
	c: (c-drive on a computer called \"sallyf\")\n\
	|-- temp\n\
	      |-- mistakes\n\
		     |-- baddies (shared as \"baddies\")\n\
			    |-- snip\n\
			    |-- snap\n\
			    |-- snerp\n\
				  |-- batter\n\
				  |-- bath\n\
</pre></div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";