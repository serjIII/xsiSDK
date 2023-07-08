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
      <meta name=\"topicid\" content=\"GUID-5363B671-F1B6-4BF6-84FC-96ABC538E618\" />\n\
      <meta name=\"indexterm\" content=\"OnDragAndDrop: file importer example\" />\n\
      <meta name=\"indexterm\" content=\"drag and drop: event handler\" />\n\
      <meta name=\"indexterm\" content=\"event handlers: drag and drop\" />\n\
      <meta name=\"indexterm\" content=\"import/export: trigger with drag and drop event\" />\n\
      <meta name=\"indexterm\" content=\"Python Example: Self-installing drag-and-drop event handler\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>What is an Event?</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-5363B671-F1B6-4BF6-84FC-96ABC538E618\"></a></span><div class=\"head\">\n\
            <h1>What is an Event?</h1>\n\
         </div>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-811D2DB4-CFC1-46B4-AB68-8D57BEA9FEFA\"></a></span>In Softimage, user actions such as creating new scenes, rendering frames, and pressing\n\
            keys trigger <em class=\"mild\">events</em>. For example, when a user creates a new scene, the <a href=\"#!/url=./si_om/siEventID.html\">OnBeginNewScene</a> and OnEndNewScene events are triggered. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-80CDC259-EF3F-4D9A-9F41-AE70606D5726\"></a></span>You can write special functions to handle events, and register these functions with\n\
            Softimage as <em class=\"mild\">event handlers</em>. Whenever an event is triggered, Softimage calls the event handlers registered for\n\
            that event. \n\
         </p>\n\
         <p><span class=\"anchor_wrapper\"><a name=\"GUID-80438D04-34E9-4063-A8B0-2152234C5413\"></a></span>For example, the following demonstrates how to launch a custom file importer when\n\
            a file matching a specific type (file format/extension) is dropped in the scene. This\n\
            is done by using a drag and drop event to call the custom importer command when the\n\
            correct file extension is detected (see the <span class=\"code\" translate=\"no\">siOnDragAndDropEvent_OnEvent</span> callback below): \n\
         </p>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WSE6F22389D4AF5541AB13394556078574-0004\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B84C7181-F1FF-4E01-9B5C-1C0105A3C0F9\"></a></span> Python Example: Self-installing drag-and-drop event handler\n\
            </h2>     \n\
            <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
# \n\
# Drag and drop events are intentionally disabled by default for performance, so the\n\
# drag portion of the event gives you the opportunity to enable drop detection while \n\
# the drop portion is where you can perform the desired action on the item.\n\
#\n\
import win32com.client\n\
from win32com.client import constants as c	# to use Softimage enums and constants\n\
import re					# for regular expressions\n\
\n\
# Registration \n\
def XSILoadPlugin( in_reg ):\n\
	in_reg.Author = \"SDK Doc\"\n\
	in_reg.Name = \"ImportBooFile Plug-in\"\n\
	in_reg.RegisterCommand(\"ImportBoo\",\"ImportBoo\")\n\
	in_reg.RegisterEvent(\"siOnDragAndDropEvent\",c.siOnDragAndDrop)\n\
	return 1\n\
\n\
# Set up custom importer command\n\
def ImportBoo_Init( in_ctxt ):\n\
	oCmd = in_ctxt.Source\n\
	oCmd.ReturnValue = 1\n\
	oArgs = oCmd.Arguments\n\
	oArgs.Add(\"in_filename\",c.siArgumentInput)\n\
	return 1\n\
\n\
# Implementation of the importer\n\
def ImportBoo_Execute( in_filename ):\n\
	Application.LogMessage( \"Importing \" + in_filename )\n\
	#\n\
	# This is where you either implement the importer or call the implementation\n\
	#\n\
	return 1\n\
\n\
# Callback for the siOnDragAndDropEvent event. The important thing to remember is that\n\
# the drag and drop event is a two-stage action: dragging and dropping. When the item \n\
# is being dragged, you can check to see whether it is something you want to pay \n\
# attention to after it\'s dropped (ie., if it\'s the right kind of file). If it is, you\n\
# enable the DragSourceSupported attribute so that when the file is actually dropped,\n\
# the siSourceDropAction is fired and you can call the importer.\n\
def siOnDragAndDropEvent_OnEvent( in_ctxt ):\n\
	action = in_ctxt.GetAttribute(\"DragAndDropAction\")\n\
	file = in_ctxt.GetAttribute(\"DragSource\")\n\
	\n\
	if ( action == c.siSourceDragAction ) :\n\
		# When the file is dragged, check to see if it\'s got the right extension \n\
		pattrn = re.compile( \"\\.boo$\", re.I ) # equivalent to JScript\'s /\\.boo$/i\n\
		if ( pattrn.search(file) ) :\n\
			# Enable the drop action via the DragSourceSupported\n\
			# context attribute if it\'s got the right extension\n\
			in_ctxt.SetAttribute( \"DragSourceSupported\", 1 )\n\
		else :\n\
			# Otherwise disable the drop action \n\
			in_ctxt.SetAttribute( \"DragSourceSupported\", 0 )\n\
	else : # action == c.siSourceDropAction\n\
		# When file is , dropped, run your custom importer command\n\
		ImportBoo_Execute( file )\n\
	\n\
     return 1\n\
\n\
# Output:\n\
# INFO : Importing &lt;user_location&gt;\\Application\\Plugins\\test.boo\n\
</pre></div> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-163D3738-426C-40E8-9B99-2CF155FF300A\"></a></span>You can also see the <a href=\"#!/url=./examples/Addons/ProjectSelector/netview_projectselector.htm\">Project Selector</a> example that shows how to use the change project event (siOnChangeProject). This\n\
               example is located in the examples folder of the Softimage SDK installation directory.\n\
               \n\
            </p> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";