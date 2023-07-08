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
      <meta name=\"topicid\" content=\"GUID-4CF27FF7-163A-4B12-B45B-41AF9A3638F3\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Compiling Fx Operators</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-4CF27FF7-163A-4B12-B45B-41AF9A3638F3\"></a></span><div class=\"head\">\n\
            <h1>Compiling Fx Operators</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A024A152-C134-4E38-9CB0-E7522885F9BD\"></a></span>Fx operators should be compiled and linked into a dynamic shared object (.so) or dynamically\n\
               linked object (.dll).\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-002D\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3D22DE05-B570-471F-B8A1-2CFDD795FD61\"></a></span>Linux\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-559A1C8F-0DBD-4B9C-B24F-07842B5167A5\"></a></span>For example, a simple <em class=\"mild\">makefile</em> to build and install an Fx operator might be as follows:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
.SUFFIXES:.c .o .ufo\n\
UFO_SRCS = mix.c \\\n\
	colour_mix.c \\\n\
	swirl.c\n\
UFO_TARGETS = $(UFO_SRCS:.c=.ufo)\n\
UFO_DIR = /var/userdsk/parallax/parallax_process_ufos\n\
$(UFO_TARGETS)::\n\
	cc -c -g $(@:.ufo=.c)\n\
	ld -shared -exports_file export_symbols -o $@ $(@:.ufo=.o)\n\
all:\n\
	make $(UFO_TARGETS)\n\
release:\n\
	- mkdir $(UFO_DIR)\n\
	cp $(UFO_TARGETS) $(UFO_DIR)\n\
</pre></div> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-247B896F-2D7E-43A9-8D40-F5F6FB21982F\"></a></span>The <em class=\"mild\">-exports_file export_symbols</em> flag prevents two (or more) UFOs with global functions of the same name from calling\n\
                  each other\'s functions instead of their own functions. <em class=\"mild\">export_symbols</em> is a file containing the symbols for all the UFO user functions. When linked with\n\
                  this flag, all global symbols are hidden apart from the user function global symbols\n\
                  in this file.\n\
               </p> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS1DF8264D3D78F14A83B5A0B860AA3F2F-002E\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B21CA5C1-8025-48DF-AE1E-40B844533FA2\"></a></span>Windows\n\
               </h2> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";