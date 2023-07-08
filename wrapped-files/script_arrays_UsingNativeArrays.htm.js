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
      <meta name=\"topicid\" content=\"GUID-79D92AB0-E67E-49B4-8371-70BA5AA34AF8\" />\n\
      <meta name=\"indexterm\" content=\"object model: using arrays\" />\n\
      <meta name=\"indexterm\" content=\"scripting: arrays\" />\n\
      <meta name=\"indexterm\" content=\"arrays (in scripting): using\" />\n\
      <meta name=\"indexterm\" content=\"Working with Return Value Arrays\" />\n\
      <meta name=\"indexterm\" content=\"VBScript: safearrays\" />\n\
      <meta name=\"indexterm\" content=\"VBScript Example: Looping through a returned array\" />\n\
      <meta name=\"indexterm\" content=\"JScript: safearrays\" />\n\
      <meta name=\"indexterm\" content=\"JScript and One-Dimensional (Flat) SafeArrays\" />\n\
      <meta name=\"indexterm\" content=\"JScript and Multiple Dimensions\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Looping through a returned Array (via VBArray)\" />\n\
      <meta name=\"indexterm\" content=\"JScript Example: Managing a returned 2-dimensional VBArray with a GridData object\" />\n\
      <meta name=\"indexterm\" content=\"Python Example: Looping through a returned array\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Using (Native) Arrays</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-79D92AB0-E67E-49B4-8371-70BA5AA34AF8\"></a></span><div class=\"head\">\n\
            <h1>Using (Native) Arrays</h1>\n\
         </div>\n\
         <div class=\"bodyProcess\">\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-577FF878-4075-4891-B306-F6788CC9897B\"></a></span>Even though each scripting language uses its own unique implementation of an array,\n\
               all share certain commonalities. For example, an array in any language is a list of\n\
               values or objects and each language provides a set of tools to add and remove items.\n\
               \n\
            </p>\n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-58A77A7D-B5C9-4089-A755-956616B0D990\"></a></span>Most script writers probably use build and manipulate arrays for their own purposes,\n\
               but many Softimage functions either take arrays as input or return arrays as output,\n\
               so it\'s important to understand how to work with arrays and Softimage smoothly. The\n\
               following sections show how to use arrays with different scripting languages. \n\
            </p>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0004\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-EB901E56-3144-4498-A88D-18DB9A9D85A5\"></a></span> Working with Return Value Arrays\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-A01F4543-6180-4ED9-8D95-AA210077703D\"></a></span>Some commands, methods, and properties return an array of values. Depending on the\n\
                  scripting language you use, you may get either a Visual Basic safe array or an array\n\
                  of arrays. For example, if you run the command GetMarking() from VBScript or JScript,\n\
                  you get a Visual Basic safe array, and from Python, you get a tuple. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F663BEEE-96FB-499A-884F-E04BAED7792C\"></a></span> In VBScript, the <em class=\"mild\">native</em> array is called a SafeArray, which is the standard array used inside Variants and\n\
                  for Automation scripting objects like the Softimage object model. For scripting languages\n\
                  other than VBScript, different strategies must used: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_8A3810413F0348C9A7E6A0C4A24A6B70\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-A20816E7-8841-4952-AC9B-D852B22C9DFC\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingNativeArrays.htm#WS51A0B8DF367E804591A913DDA18BECD3-0007\">JScript</a></span> \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-4ECE39CD-7399-4667-BB0B-9CA2488ACB9C\"></a></span> <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingNativeArrays.htm#WS51A0B8DF367E804591A913DDA18BECD3-000F\">Python</a></span> \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0005\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-A3ADB710-5075-4F87-BD39-37C917D3ADE2\"></a></span>VBScript\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9C3EF93-8DD7-4367-A5DD-3E3063D6C40F\"></a></span>Since SafeArrays are native to VBScript, you can work with a returned array using\n\
                  the standard VBScript methods (see http://msdn.microsoft.com/ for more information).\n\
                  \n\
               </p> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0006\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-B7E9C266-EB16-43A8-AB9D-50FB6D446A88\"></a></span> VBScript Example: Looping through a returned array\n\
                  </h3>  \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Dim arrMarkedParams, strItem, i\n\
GetPrim \"Null\"\n\
SetMarking \"kine.local.pos,kine.global.pos\"\n\
AddToMarking \"kine.local.ori\"\n\
arrMarkedParams = GetMarking()\n\
for i=0 to UBound(arrMarkedParams)\n\
   strItem = arrMarkedParams(i)\n\
   LogMessage \"Value of item at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \" &amp; i \" = &amp; strItem\n\
next\n\
\n\
\' Expected result:\n\
\'INFO : Value of item at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> 0 = kine.local.pos\n\
\'INFO : Value of item at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> 1 = kine.global.pos\n\
\'INFO : Value of item at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> 2 = kine.local.ori</pre></div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0007\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B9CD8A7A-24B3-498F-8985-A2C15F7EE5C3\"></a></span>JScript\n\
               </h2>  \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-2AF98201-2DFB-4053-B7F9-442DA23BDF21\"></a></span>There are some restrictions in working with returned arrays in JScript, because while\n\
                  JScript has its own native Array object, it is not a SafeArray and it does not support\n\
                  more than one dimension. However, many parts of the Softimage interface allow you\n\
                  to provide JScript arrays instead of SafeArrays. For example, you can pass in a native\n\
                  JScript array to <a href=\"#!/url=./si_om/Envelope.SetDeformerWeights.html\">Envelope.SetDeformerWeights</a> (<em class=\"strong\">Weights</em> parameter) but <a href=\"#!/url=./si_om/Envelope.GetDeformerWeights.html\">Envelope.GetDeformerWeights</a> returns a SafeArray (see the example for Envelope.SetDeformerWeights. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-F9515D87-27C9-4E7A-A0BB-C3410FD9B07F\"></a></span>In addition, JScript also provides a special kind of object called a <em class=\"strong\">VBArray</em>. The VBArray object provides functions that allow you to read from a SafeArray (for\n\
                  example, access to multiple dimensions, upper- and lower-bounds) and also provides\n\
                  a handy method called <em class=\"strong\">toArray</em>(), which converts the VBArray to a native JScript <em class=\"strong\">Array</em>. \n\
               </p> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-C94E6AF5-9D0F-4AB7-A113-E0D08520F261\"></a></span>Most scripters prefer to work with a JScript array even if they only need to read\n\
                  the values, because converting a VBArray to a JScript array is very simple (<span class=\"code\" translate=\"no\">var jsArray = vbArray.toArray();</span>) and the JScript Array object has many more methods that are useful to work with\n\
                  (the VBArray is really only designed to provide basic access to the data). \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-B7CA1704-E99B-4247-B97B-5EFC6DEE5205\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-88095782-BE5D-4BFF-85DB-CCA61579DF11\"></a></span>For information on the methods available with either of these array objects, see http://msdn.microsoft.com/en-us/library/k4h76zbx(VS.85).aspx.\n\
                        \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0008\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-81F898EF-AEEE-4FC1-BE0D-E75034A68961\"></a></span> JScript and One-Dimensional (Flat) SafeArrays\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-9E7B4B4B-E075-4B95-8E9B-72FC0D729ACD\"></a></span>Reading and writing one-dimensional arrays is not a problem, since JScript Array objects\n\
                     are one-dimensional: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_FFBE14B83D334B83AAE2AFC8AB8564F7\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-B5D59E6D-33FE-41FB-8FCE-10E094896326\"></a></span>For reading, simply convert the returned SafeArray into a JScript array with the <span class=\"code\" translate=\"no\">VBArray.toArray()</span> method. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-FD357157-FF2D-4720-B4FB-101DCA578FE7\"></a></span>For writing, use a JScript array either converted from a VBArray or created from scratch\n\
                           with the <span class=\"code\" translate=\"no\">new Array()</span> constructor. Functions that take a one-dimensional SafeArray as input will accept\n\
                           JScript arrays and convert them automatically. \n\
                        </p> \n\
                        <div><span class=\"anchor_wrapper\"><a name=\"GUID-F9C24E6C-C721-43FA-8452-F98B6EBB08E0\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-E876AF4B-D350-408F-9DB0-0ED7AF57395F\"></a></span>See <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingNativeArrays.htm#WS51A0B8DF367E804591A913DDA18BECD3-000A\">JScript Example: Looping through a returned Array (via VBArray)</a></span> for an example that demonstrates how to convert and read a one-dimensional SafeArray\n\
                                 in JScript. \n\
                              </p> \n\
                              <p><span class=\"anchor_wrapper\"><a name=\"GUID-2B1C9564-40A8-4A96-B20D-61AD8D180EE8\"></a></span>See the JScript example on the <a href=\"#!/url=./si_om/Envelope.SetDeformerWeights.html\">Envelope.SetDeformerWeights</a> reference page for an example of how to convert a one-dimensional SafeArray to a\n\
                                 JScript array, modify it, and then write it back via Envelope.GetDeformerWeights.\n\
                                 \n\
                              </p> \n\
                           </div>\n\
                        </div> \n\
                     </li>\n\
                  </ul> \n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0009\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-59F850B0-64F0-4380-8C2E-DAB88AB1DF4F\"></a></span> JScript and Multiple Dimensions\n\
                  </h3>  \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-0C7E5CC8-B730-4A67-A580-AC7386839B47\"></a></span>SafeArrays support the notion of multiple dimensions. Softimage generally uses 1-dimensional\n\
                     (flat) arrays, but will occasionally use a 2-dimensional arrays, which are often characterized\n\
                     as tables or spreadsheet grids. The first dimension represents the rows, the second\n\
                     dimension represents the columns, and each entry represents a cell. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-24AB23E4-276D-4B65-AA7D-9871D2DC2B1D\"></a></span>For example, <a href=\"#!/url=./si_om/ClusterElementCollection.html\">ClusterElementCollection</a>s can be used to map <a href=\"#!/url=./si_om/ClusterProperty.html\">ClusterProperty</a> UV data to specific <a href=\"#!/url=./si_om/Cluster.html\">Cluster</a>s, which are managed as a 2-dimensional array where each row represents the clusters\'\n\
                     component indices and each column represents each of the RGBA vertex color values\n\
                     for that cluster. \n\
                  </p> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-18EE9820-DEC9-4E68-80F4-5834793CCB48\"></a></span>The JScript (native) array is always one-dimensional; that is, one long list of values\n\
                     or references instead of a table or grid of values. For reading the returned values,\n\
                     you can use the methods of the VBArray object (see <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingNativeArrays.htm#WS51A0B8DF367E804591A913DDA18BECD3-0008\">JScript and One-Dimensional (Flat) SafeArrays</a></span>) to access the data. \n\
                  </p> \n\
                  <div><span class=\"anchor_wrapper\"><a name=\"GUID-D83C4694-E49F-4000-9BA5-1E93BDD5F16B\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A1E89E8B-0C9D-4CCC-AC17-EB7A456DE8F0\"></a></span>If you decide to convert the SafeArray to a JScript array, you need to know that the\n\
                           extra dimensions of the SafeArray are folded into the (flat) JScript array by appending\n\
                           each successive dimension to the first one. \n\
                        </p> \n\
                     </div>\n\
                  </div> \n\
                  <p><span class=\"anchor_wrapper\"><a name=\"GUID-23599A50-CC01-430A-B2DE-09B3D5E418F7\"></a></span>Because Softimage commands, methods, and properties always return a SafeArray in JScript,\n\
                     you need to use one of the following workaround: \n\
                  </p> <span class=\"anchor_wrapper\"><a name=\"UL_91D658B8888E4926B35BA9AB6E5B37E7\"></a></span><ul>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-02C4C81F-152A-4DBF-A23B-91C406378AAF\"></a></span>Store it in a <a href=\"#!/url=./si_om/GridData.html\">GridData</a> object, which simulates a 2-dimensional SafeArray. For more information, see <span class=\"char_link\"><a href=\"#!/url=./files/script_arrays_UsingtheGridDataObject.htm\">Using the GridData Object</a></span>. \n\
                        </p> \n\
                     </li>\n\
                     <li> \n\
                        <p><span class=\"anchor_wrapper\"><a name=\"GUID-A3606C50-3758-4F31-A199-06E03BE502DC\"></a></span>Encapsulate the returned SafeArray in a <em class=\"strong\">VBArray</em> object: \n\
                        </p> \n\
                     </li>\n\
                  </ul> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-000A\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-0C741658-9A59-4D90-ABAA-993B4802261A\"></a></span> JScript Example: Looping through a returned Array (via VBArray)\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DC8ECD03-2044-4EE1-BD1F-7DB7496DAB48\"></a></span>This example demonstrates how to convert and read a one-dimensional SafeArray in JScript.\n\
                        \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
GetPrim( \"Null\" );\n\
SetMarking( \"kine.local.pos,kine.global.pos\" );\n\
AddToMarking( \"kine.local.ori\" );\n\
\n\
// GetMarking() returns a VBArray, which you can \n\
// convert to a JS Array with the toArray() function\n\
var vbaMarkings = <em class=\"strong\">new VBArray(</em> GetMarking() <em class=\"strong\">)</em>;\n\
var jsaMarkings = vbaMarkings.<em class=\"strong\">toArray()</em>;\n\
for ( var i=0; i&lt;jsaMarkings.length; i++ ) {\n\
	LogMessage( jsaMarkings[i] );\n\
}\n\
\n\
// Expected result:\n\
//INFO : kine.local.pos\n\
//INFO : kine.global.pos\n\
//INFO : kine.local.ori</pre></div> \n\
                     <div><span class=\"anchor_wrapper\"><a name=\"GUID-0BADB417-F48C-4C2A-A48B-EBC59054EBC3\"></a></span><div class=\"note-tip\"><span class=\"label\">TIP:</span> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-D13EE313-8ED2-499E-B953-B18B5C782F18\"></a></span>The example above demonstrates how to convert the returned SafeArray to a JScript\n\
                              array step by step: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var vbaMarkings = <em class=\"strong\">new VBArray(</em> GetMarking() <em class=\"strong\">)</em>;\n\
var jsaMarkings = vbaMarkings.<em class=\"strong\">toArray()</em>;</pre></div> \n\
                           <p><span class=\"anchor_wrapper\"><a name=\"GUID-C7E4AFF0-42E0-4B90-B993-B4157B1E95F5\"></a></span>You can also use the following shortcut in place of the above two lines: \n\
                           </p> \n\
                           <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
var jsaMarkings = GetMarking().<em class=\"strong\">toArray()</em>;</pre></div> \n\
                        </div>\n\
                     </div> \n\
                  </div> \n\
                  <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-000B\"></a></span> \n\
                     <h4><span class=\"anchor_wrapper\"><a name=\"GUID-D0AC186E-A345-48D9-8318-CA085814B040\"></a></span> JScript Example: Managing a returned 2-dimensional VBArray with a GridData object\n\
                     </h4>  \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-64B4F88B-5866-4F61-BF41-E2ACA10C5539\"></a></span>These are two excerpts from a longer example (see <a href=\"#!/url=./si_om/ClusterElementCollection.Array.html\">ClusterElementCollection.Array</a>) in which a grid is created and vertex colors are applied. The GridData is then used\n\
                        to display the values of the cluster properties by inspecting the GridData object.\n\
                        \n\
                     </p> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-BBA7600A-F9D8-4C63-9928-12FC2A9359FF\"></a></span>This snippet begins with getting a pointer to the cluster properties on the color\n\
                        vertex property: \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// Returns a ClusterElementCollection\n\
var cls_prop_elems = vertexcolor.Elements;\n\
\n\
// Returns a VBArray\n\
var vbValues = cls_prop_elems.Array;\n\
Application.LogMessage( \"# of dimensions: \" + vbValues.dimensions() );\n\
for ( var d=1; d&lt;=vbValues.dimensions(); d++ ) {\n\
   Application.LogMessage( \"range of dimension \" + d + \": \" + vbValues.lbound(d) + \"..\" + vbValues.ubound(d) );\n\
}\n\
\n\
// Display info\n\
var gridtable = MakeMeAPPG( vbValues );\n\
InspectObj( gridtable, \"\", \"\", siModal, false );\n\
\n\
// Change info\n\
grid_mod = gridtable.Parameters(\"VertexColorChart\").Value;\n\
grid_mod.SetCell( 0, 0, 1.23 );\n\
DeleteObj( gridtable );\n\
gridtable = MakeMeAPPG( grid_mod.Data );\n\
\n\
// Re-display modified info\n\
InspectObj( gridtable, \"\", \"\", siModal, false );</pre></div> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-31A81D6B-5991-469B-AFBC-D643C2940BFE\"></a></span>This snippet demonstrates how to construct a custom property with a GridData parameter,\n\
                        where the GridData acts like a 2-dimensional array. \n\
                     </p> \n\
                     <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
// ***************************************\n\
//\n\
// 		Functions to support PPG\n\
//\n\
function MakeMeAPPG( in_SafeArray )\n\
{\n\
   var gprop = ActiveSceneRoot.AddProperty( \"CustomProperty\", false, \"Visual2DArray\" );			\n\
   var gparam = gprop.AddGridParameter( \"VertexColorChart\" );\n\
   var ugrid = gparam.Value;\n\
	\n\
   // Set bounds of this grid\n\
   ugrid.ColumnCount = in_SafeArray.ubound(1)+1;\n\
   ugrid.RowCount = in_SafeArray.ubound(2)+1;\n\
   ugrid.Data = in_SafeArray;\n\
	\n\
   // Set up the labels\n\
   var tmp = new Array( \"R\", \"G\", \"B\", \"A\" );\n\
   for ( var c=0; c&lt;ugrid.ColumnCount; c++ ) {\n\
      ugrid.SetColumnLabel( c, tmp[c]) ;\n\
   }\n\
   for ( var r=0; r&lt;ugrid.RowCount; r++ ) {\n\
      ugrid.SetRowLabel( r, \"Cluster \" + r.toString() );\n\
   }\n\
	\n\
   // Return the Property Set (not the Grid itself)\n\
   return gprop;\n\
}\n\
</pre></div> \n\
                  </div> \n\
               </div> \n\
            </div>\n\
            <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-000F\"></a></span> \n\
               <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3E860E73-2F4F-40A8-9290-3BD4BE7FE198\"></a></span>Python\n\
               </h2> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-86C22767-C15C-48EE-9A40-B8E2B48422D0\"></a></span>Since Python (using the ActiveX Scripting Engine) converts all SafeArrays to tuples\n\
                  automatically. Tuples are one of two types of arrays available in Python: \n\
               </p> <span class=\"anchor_wrapper\"><a name=\"UL_BC91A47FE0F541CD8743971CB44CD1FB\"></a></span><ul>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-DF23F1CB-5A9E-4966-9C9D-815FC61DEC49\"></a></span> <em class=\"mild\">tuples</em>—fixed sequences which are often used to return multiple values from functions, roughly\n\
                        equivalent to VBScript\'s <em class=\"mild\">static</em> arrays. \n\
                     </p> \n\
                  </li>\n\
                  <li> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-EE9DB700-11E7-4759-971A-966DF9A67B65\"></a></span> <em class=\"mild\">lists</em>—dynamic arrays of values, roughly equivalent to VBScript\'s <em class=\"mild\">dynamic</em> arrays. \n\
                     </p> \n\
                  </li>\n\
               </ul> \n\
               <p><span class=\"anchor_wrapper\"><a name=\"GUID-25CC7493-9DBD-4D24-9A8B-84DE915CDB3E\"></a></span>Python provides a wide variety of very powerful functions for working with tuples\n\
                  and lists. For more information, refer to one of the Python sites mentioned in <a href=\"#!/url=./files/script_intro_WheretoFindMoreInformation.htm\">Where to Find More Information</a>. \n\
               </p> \n\
               <div><span class=\"anchor_wrapper\"><a name=\"GUID-E52986E3-EB0C-48C7-963E-D26FF969B19A\"></a></span><div class=\"note-note\"><span class=\"label\">NOTE:</span> \n\
                     <p><span class=\"anchor_wrapper\"><a name=\"GUID-E8D099F8-A2F5-4A87-9F41-CFD76CE7A3FC\"></a></span>If you need to do any serious array manipulation (especially working with multi-dimensional\n\
                        arrays and matrices), you should use the Numerical Python extension. For more information,\n\
                        see http://sourceforge.net/projects/numpy. \n\
                     </p> \n\
                  </div>\n\
               </div> \n\
               <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"WS51A0B8DF367E804591A913DDA18BECD3-0010\"></a></span> \n\
                  <h3><span class=\"anchor_wrapper\"><a name=\"GUID-6E732DA2-6D21-4B7A-BEB1-1DF4A52FA3ED\"></a></span> Python Example: Looping through a returned array\n\
                  </h3>  \n\
                  <div class=\"codeBlock\"><pre class=\"prettyprint\">\n\
Application.GetPrim( \"Null\" )\n\
Application.SetMarking( \"kine.local.pos,kine.global.pos\" )\n\
Application.AddToMarking( \"kine.local.ori\" )\n\
markings = Application.GetMarking()\n\
i = 0\n\
for mrk in markings\n\
   Application.LogMessage( \"Value of item at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> \" + str(i) + \" = \" + mrk )\n\
   i = i + 1\n\
\n\
# Expected result:\n\
#INFO : Value of item at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> 0 = kine.local.pos\n\
#INFO : Value of item at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> 1 = kine.global.pos\n\
#INFO : Value of item at <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> 2 = kine.local.ori</pre></div> \n\
               </div> \n\
            </div>\n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";