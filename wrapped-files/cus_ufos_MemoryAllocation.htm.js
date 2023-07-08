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
      <meta name=\"topicid\" content=\"GUID-0A267E81-FD5B-438A-A229-9B9C4612D4C7\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: memory allocation\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: memory allocation\" />\n\
      <meta name=\"indexterm\" content=\"Order of UFO Process User Function Calls\" />\n\
      <meta name=\"indexterm\" content=\"UFOs: order of UFO process user funcion calls\" />\n\
      <meta name=\"indexterm\" content=\"compositor initialization\" />\n\
      <meta name=\"indexterm\" content=\"UFO Process Instance Copy\" />\n\
      <meta name=\"indexterm\" content=\"UFO Process Instance Destruction\" />\n\
      <meta name=\"indexterm\" content=\"UFO Process Instance Saving and Loading\" />\n\
      <meta name=\"indexterm\" content=\"Rendering Sequence\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Memory Allocation</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-0A267E81-FD5B-438A-A229-9B9C4612D4C7\"></a></span><div class=\"head\">\n\
            <h1>Memory Allocation</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-AB118B54-4822-4463-8E0B-D34432239EB8\"></a></span>You should use the UFO memory allocation mechanism to dynamically allocate and free\n\
               memory. This will make use of the Softimage Compositor\'s memory manager. The functions\n\
               <em class=\"mild\">ufoMalloc</em>, <em class=\"mild\">ufoRealloc</em>, and <em class=\"mild\">ufoFree</em> have the same functionality as the <em class=\"mild\">malloc</em>, <em class=\"mild\">realloc</em> and <em class=\"mild\">free system</em> calls.\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0025\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-183240C5-E5F0-4738-A99A-C642787E39C7\"></a></span> Order of UFO Process User Function Calls\n\
               </h2>   \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-60E8DDCF-F9CA-400B-ACEF-4504E6462730\"></a></span>UFO user functions are called as follows:\n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0026\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-53558153-4E87-4306-A10C-82D8C25F6F30\"></a></span> Softimage Compositor Initialization\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-4E6D09AB-3A1D-47A6-8775-0B1BA65124C6\"></a></span> <span class=\"code\" translate=\"no\">ufoProcessDefine</span> \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0027\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-F041F51F-C168-4C35-B12A-B5CEC318F009\"></a></span> UFO Process Instance Copy\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A139D230-515F-418B-BC48-F8014E113FBB\"></a></span> <span class=\"code\" translate=\"no\">ufoProcessCopyUserData</span> \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0028\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-60A57F09-A8FB-46D6-98A5-084D319B8D8A\"></a></span> UFO Process Instance Destruction\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-48D5F078-C89E-4D35-B699-572C2D729299\"></a></span> <span class=\"code\" translate=\"no\">ufoProcessDeleteUserData</span> \n\
                  </p> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-0029\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-8A4E2548-9C57-4D47-865D-71663A51C038\"></a></span> UFO Process Instance Saving and Loading\n\
                  </h3>  \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
ufoProcessWriteAsciiData \n\
ufoProcessReadAsciiData \n\
ufoProcessWriteBinaryData \n\
ufoProcessReadBinaryData </pre></div> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-002A\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-6B4B91AB-BD67-4849-8998-91BFB328037E\"></a></span> Rendering Sequence\n\
                  </h3>  \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
ufoProcessPreSequenceRender\n\
	:\n\
	Rendering Frame <em class=\"mild\">f</em>\n\
	ufoProcessCanAvoidRendering\n\
	ufoProcessCalcDefinedRectangle\n\
	ufoProcessCalcDefinePixelType\n\
	ufoProcessCalcNeedRectangles\n\
	ufoProcessSpecifyConvertPixelTypes\n\
	ufoProcessPreRender\n\
	Render Pass <em class=\"mild\">0</em>\n\
		:\n\
	Rendering Pass <em class=\"mild\">p</em>\n\
		ufoProcessPreRenderPass\n\
		ufoProcessRenderRectangle\n\
		[ufoProcessRenderRectangle ..]</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-B8E19E03-E69E-4E63-A421-0A230F9A9970\"></a></span>(possibly rendered in tiles or slices)\n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-65BF092A-86CC-43DB-8EBB-A67E2D5D1D62\"></a></span>or\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">		ufoProcessRenderLine ..\n\
		[ufoProcessRenderLine ..]</pre></div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-07340514-DCFD-45DB-ACA1-44EB429C3A1D\"></a></span>or\n\
                  </p> \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">		ufoProcessRenderPixel..\n\
		[ufoProcessRenderPixel..]\n\
		ufoProcessPostRenderPass\n\
	Rendering Pass <em class=\"mild\">p+1</em>\n\
		:\n\
		ufoProcessPostRender\n\
	Render Frame <em class=\"mild\">f+1</em>\n\
		:\n\
		ufoProcessPostSequenceRender</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";