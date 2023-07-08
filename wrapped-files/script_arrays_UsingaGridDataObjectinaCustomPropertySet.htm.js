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
      <meta name=\"topicid\" content=\"GUID-B402F81F-DB38-4ADC-880D-5F10E7B3753A\" />\n\
      <meta name=\"indexterm\" content=\"Example: Setting an entire column of values on a GridData object\" />\n\
      <meta name=\"indexterm\" content=\"Example: Storing an existing array in a GridData object\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using a GridData Object in a Custom Property Set</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-B402F81F-DB38-4ADC-880D-5F10E7B3753A\"></a></span><div class=\"head\">\n\
            <h1>Using a GridData Object in a Custom Property Set</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C025726F-F755-4CC2-9084-9006D67899FE\"></a></span>If you would like to see or manipulate the values of a 2-dimensional array using a\n\
               user-friendly interface you can create a property set with a GridData parameter that\n\
               will display the information in a property page.\n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6EE8595-B00F-4842-B890-11AAD24226E4\"></a></span>The basic workflow is as follows:\n\
            </p>\n\
            <ul>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-A9A9BCB8-ACCC-400A-B698-66D350334B06\"></a></span>Set up a custom property set (<a href=\"#!/url=./si_om/SceneItem.AddCustomProperty.html\">AddCustomProperty (SceneItem)</a>).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-69E51861-61D9-4530-B08D-C7E1F62857D1\"></a></span>Add a grid parameter to it (<a href=\"#!/url=./si_om/CustomProperty.AddGridParameter.html\">AddGridParameter (CustomProperty)</a>).\n\
                  </p> \n\
               </li>\n\
               <li> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-20E64910-0922-4DF3-8345-A5797B4A896F\"></a></span>Get the GridData object from the grid parameter value (<a href=\"#!/url=./si_om/Parameter.Value.html\">Value (Parameter) *</a>).\n\
                  </p> \n\
               </li>\n\
            </ul>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A527A575-E982-42A7-A44D-0CB705D7BAFE\"></a></span>Once you have the GridData object, you can set its values either a cell at a time\n\
               or a whole column or row at once (see <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingaGridDataObjectinaCustomPropertySet.htm#WS51A0B8DF367E804591A913DDA18BECD3-0015\">Example: Setting an entire column of values on a GridData object</a></span>). You can also set the entire grid in one shot by assigning an existing 2-dimensional\n\
               array as its data (see <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingaGridDataObjectinaCustomPropertySet.htm#WS51A0B8DF367E804591A913DDA18BECD3-0016\">Example: Storing an existing array in a GridData object</a></span>).\n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0015\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-732E06D6-F798-466C-8239-7E95EE985D85\"></a></span> Example: Setting an entire column of values on a GridData object\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-429994EB-3110-46B0-A8E3-7CB28B005653\"></a></span>You can use the <a href=\"#!/url=./si_om/GridData.SetCell.html\">SetCell (GridData) *</a> or SetRowValues (GridData) * methods to populate the grid. These are convenience\n\
                  methods that allow you to set an entire row or column using a 1-dimensional array\n\
                  instead of having to iterate over every cell in the grid (using the SetCell (GridData)\n\
                  * method).\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
/*\n\
   This example demonstrates how to create 2 JScript arrays (columns) and \n\
   then store them in a GridData object. It also shows how to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> columns \n\
   without using pre-existing arryas and then displays the new grid in a \n\
   property page.\n\
*/\n\
var aCol1, aCol2;\n\
\n\
// The top left cell is A1 and the bottom right cell is D3:\n\
aCol1 = new Array( \"A1\", \"A2\", \"A3\" );\n\
aCol4 = new Array( \"D1\", \"D2\", \"D3\" );\n\
\n\
// Now create a GridData object and save the arrays in it as columns\n\
var oPSet = ActiveSceneRoot.AddCustomProperty( \"MyTableDemo\" );\n\
var oGridParam = oPSet.AddGridParameter( \"MyTable\" );\n\
\n\
// This just tweaks the formatting (it will still appear without this)\n\
var oLayout = oPSet.PPGLayout\n\
var oGridCtrl = oLayout.AddItem( \"MyTable\", \"My 2D Array\" );\n\
oGridCtrl.SetAttribute( siUIGridHideColumnHeader, true );\n\
oGridCtrl.SetAttribute( siUIGridHideRowHeader, true );\n\
oGridCtrl.SetAttribute( siUIGridColumnWidths, \"50\" );\n\
\n\
// The GridData object itself is in the Value property of the parameter\n\
var oGrid = oGridParam.Value;\n\
\n\
// Before setting any values you need to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> the dimensions of the grid\n\
oGrid.ColumnCount = 4;\n\
oGrid.RowCount = 3;\n\
\n\
// You can use the GridData.SetColumnValues() method to <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> each array\n\
oGrid.SetColumnValues( 0, aCol1 );\n\
oGrid.SetColumnValues( 3, aCol4 );\n\
\n\
// Or you can use it without pre-existing arrays\n\
oGrid.SetColumnValues( 1, new Array( \"B1\", \"B2\", \"B3\" ) );\n\
oGrid.SetColumnValues( 2, new Array( \"C1\", \"C2\", \"C3\" ) );\n\
\n\
// You can still change individual values. For example, you can target\n\
// just one cell of the grid (here the middle row, last column):\n\
oGrid.SetCell( 3, 1, \"N/A\" );\n\
\n\
// Display the GridData table on a property page. While you are looking at\n\
// the property page, change the \'N/A\' value.\n\
InspectObj( oPSet, null, null, siModal, false );\n\
\n\
// Users can change the values in the 2D array through the property \n\
// page: the underlying Grid object is automatically refreshed.\n\
Application.LogMessage( oGrid.GetCell(3,1) );	// &lt;= this will reflect your \'N/A\' change</pre></div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0016\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-79F8AB79-5BB9-4F5B-9F52-18B56E9F8FCB\"></a></span> Example: Storing an existing array in a GridData object\n\
               </h2>  <img src=\"../images/GUID-61484E88-93D6-47A2-9C30-3D1E94CD300D-low.png\" /> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-DA64B4D7-46E7-4C83-9289-97944D184D3D\"></a></span>One way to use the GridData object is to store an existing 2-dimensional array in\n\
                  it and then display the grid in a property page. Of course, this only works with languages\n\
                  that support 2-dimensional arrays, such as VBScript:\n\
               </p> \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
\' This example demonstrates how to create a 2D array (3 columns and \n\
\' 2 rows) and then store it in a GridData object to display in a \n\
\' property page\n\
\n\
Dim aTbl()\n\
ReDim aTbl(2,1)\n\
\n\
\' The top left cell is A1 and the bottom right cell is C2:\n\
aTbl(0,0) = \"A1\"\n\
aTbl(2,1) = \"C2\"\n\
\n\
\' Fill in the rest:\n\
aTbl(1,0) = \"B1\"\n\
aTbl(2,0) = \"C1\"\n\
\n\
aTbl(0,1) = \"A2\"\n\
aTbl(1,1) = \"B2\"\n\
\n\
\' Now create a GridData object and save the 2D array in it\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oPSet = ActiveSceneRoot.AddCustomProperty( \"MyTableDemo\" )\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oGridParam = oPSet.AddGridParameter( \"MyTable\" )\n\
\n\
\' This just tweaks the formatting (it will still appear without this)\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oLayout = oPSet.PPGLayout\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oGridCtrl = oLayout.AddItem( \"MyTable\", \"My 2D Array\" )\n\
oGridCtrl.SetAttribute siUIGridHideColumnHeader, true \n\
oGridCtrl.SetAttribute siUIGridHideRowHeader, true \n\
oGridCtrl.SetAttribute siUIGridColumnWidths, \"100\" \n\
\n\
\' The GridData object itself is in the Value property of the parameter\n\
<a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> oGrid = oGridParam.Value\n\
\n\
\' The Data property of the GridData object allows you to store an \n\
\' existing array in one shot (instead of iterating over the array\n\
\' and setting up the GridData manually)\n\
oGrid.Data = aTbl\n\
\n\
\' You can still change individual values. For example, you can target\n\
\' just one cell of the grid (here the middle column, top row):\n\
oGrid.SetCell 1, 0, \"N/A\"\n\
\n\
\' Display the GridData table on a property page. While you are looking at\n\
\' the property page, change the \'N/A\' value.\n\
InspectObj oPSet, , , siModal, false\n\
\n\
\' Users can change the values in the 2D array through the property \n\
\' page: the underlying Grid object is automatically refreshed.\n\
Application.LogMessage oGrid.GetCell( 1, 0 )\' &lt;= this will reflect your \'N/A\' change\n\
\n\
\' But there is no longer any relationship with the original 2D array \n\
Application.LogMessage aTbl( 1, 0 )\' &lt;= this still says \"B1\"</pre></div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";