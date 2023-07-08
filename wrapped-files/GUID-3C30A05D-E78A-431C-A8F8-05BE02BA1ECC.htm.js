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
      <meta name=\"topicid\" content=\"GUID-3C30A05D-E78A-431C-A8F8-05BE02BA1ECC\" />\n\
      <meta name=\"topic-type\" content=\"concept\" />\n\
      <title>Object Model Examples</title><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script></head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 reflinkdata.push([\"FCurveKey\", \"si_cpp/classXSI_1_1FCurveKey.html\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"index\", \"si_cpp/group__RenderMapDefine.html#gadca2b0ae15c62d8023e6645c3404056c\", \"C++ API Reference\", \"../\"]); \n\
reflinkdata.push([\"set\", \"si_cpp/group__RenderMapDefine.html#ga793ad1cfa149967fe4b97fc66251b831\", \"C++ API Reference\", \"../\"]); \n\
</script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div><span class=\"anchor_wrapper\"><a name=\"GUID-3C30A05D-E78A-431C-A8F8-05BE02BA1ECC\"></a></span><div class=\"head\">\n\
            <h1>Object Model Examples</h1>\n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_EB8D416BC0A1430189A091E0A1CDB72C\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-FCB5129B-0AFA-4EE8-AD10-0877A0945A41\"></a></span> Enumerating Properties\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-963647AB-DE60-4017-9018-74C3CDB5A907\"></a></span>The following example shows how to enumerate the properties. \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oDefaultLight = Application.ActiveSceneRoot.Children( \"light\" )    \n\
    \n\
for oProp in oDefaultLight.Properties:   \n\
    Application.LogMessage( oProp.Name )   \n\
   \n\
</pre></div> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_1C3D47DEC5BD4D51AD1C767215FD0BBB\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-98850F07-657A-48D5-BB48-4CBA0C16862C\"></a></span>Enumerating Edges\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A15BEEFE-1A15-42AA-AD8E-7C01FAFDE933\"></a></span>The following example shows how to enumerate the edges. \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oObj = Application.ActiveSceneRoot.AddGeometry(\"Cone\",\"MeshSurface\")\n\
oEdges = oObj.ActivePrimitive.Geometry.Edges\n\
\n\
for oEdge in oEdges:\n\
	   <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> = oEdge.Index\n\
	   Application.LogMessage( \"Found edge %d\" % <a href=\"javascript:void(0)\" data=\"index\" class=\"a_multireflink\">index</a> )</pre></div> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_BE93DBEFAD3F48BE914E235CC550988B\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-946D4D57-B8BD-409F-B162-F2FB267E02F0\"></a></span>Using the Math Library from Python \n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-51E04604-4244-4AE9-A8C1-4ED5DE63C7E7\"></a></span>The following example shows how to use the math library. \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">v3 = XSIMath.CreateVector3()	\n\
\n\
#Vector can be <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> using its properties\n\
v3.X = 10.0\n\
\n\
#Or using this method\n\
v3.Set( 10.0, 20.0, 30.0)\n\
\n\
#Vector3 has many convenient methods\n\
v3.ScaleInPlace(2)\n\
\n\
#Read the vector values\n\
x=0\n\
y=0\n\
z=0\n\
x, y, z = v3.Get(x,y,z)\n\
valstr = \'%(x).2f %(y).2f %(z).2f\' % vars()\n\
\n\
Application.LogMessage( valstr ) ;</pre></div> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_92E54E486EFD4C1CBFFC241607E3A3AE\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-CC002D87-F76E-4571-AA29-1FF11EE24696\"></a></span>Representing the Arrays as Tuples\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-A5F3FD59-5C5D-45E5-98AB-BFC54893B8CB\"></a></span>The following example shows how the arrays are represented as tuples. \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oObject = Application.ActiveSceneRoot.AddGeometry( \"Grid\",\"MeshSurface\",\"PolyMeshGetTest\" )\n\
	\n\
Application.SetValue(str(oObject) + \".polymsh.geom.subdivu\", 1, \"\")\n\
Application.SetValue(str(oObject) + \".polymsh.geom.subdivv\", 1, \"\")\n\
\n\
oGeometry = oObject.ActivePrimitive.Geometry\n\
\n\
aReturnArray = oGeometry.Get2() ;\n\
\n\
Application.LogMessage( repr(aReturnArray) ) ;\n\
\n\
aVertices = aReturnArray[0]		# 2D array of x,y,z\n\
aPolydata = aReturnArray[1]\n\
\n\
Application.LogMessage( repr(aVertices) ) ;\n\
Application.LogMessage( repr(aPolydata) ) ;</pre></div> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_0D57491C73504DBAA511D2D28ED6829E\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-B0366E2A-E07A-4429-8C90-07CE7B85C380\"></a></span>Converting a Tuple to a List\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-C6407BA7-BB7B-487C-AB9B-6C3B9C78D3C8\"></a></span>If you want to modify array data that has more than one dimension such as, XYZ, UVW,\n\
               or RGBA, you need to know how to convert from the immutable tuple returned by Softimage\n\
               to a flattened mutable list. The following example shows how to convert the tuple.\n\
               \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">import win32com.client\n\
from win32com.client import constants\n\
import sys\n\
\n\
xsi = Application\n\
true=1\n\
false=0\n\
\n\
def main():\n\
    Test1()\n\
\n\
# test1: turn a tuple into  a list\n\
def Test1():\n\
    # immutable tuple i.e. read-only\n\
    print \"1 dimensional tuple example\" \n\
    w_tuple = (\'W1\',\'W2\',\'W3\',\'W4\',\'W5\')\n\
    print repr(w_tuple) \n\
  \n\
    w_list = [w for w in w_tuple]\n\
    print  repr(w_list)\n\
  \n\
    w_tuple = (0.25,0.26,0.27,0.28,0.29)\n\
    print repr(w_tuple) \n\
  \n\
    w_list = [1.0-w for w in w_tuple]\n\
    print  repr(w_list)\n\
  \n\
    print \"2 dimensional tuple example (such as XYZ)\" \n\
    w_tuple = ((\'X1\',\'X2\',\'X3\',\'X4\'),(\'Y1\',\'Y2\',\'Y3\',\'Y4\'),(\'Z1\',\'Z2\',\'Z3\',\'Z4\'))\n\
    print repr(w_tuple) \n\
  \n\
    w_list = [w_tuple[j][i] for i in range(len(w_tuple[0])) for j in range(len(w_tuple)) ]\n\
    print  repr(w_list)\n\
  \n\
 \n\
# test2: turn a weightmap tuple into a list, invert and <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> back\n\
def Test2():\n\
    obj = xsi.ActiveSceneRoot.AddGeometry( \"Sphere\", \"MeshSurface\", \"TupleTest2\" )\n\
    wmap = xsi.CreateWeightMap(\"WeightMap\", obj , \"Weight Map\", \"Weight Map Property\", false)(0)\n\
    \n\
    # get weightmap as tuple\n\
    w_tuple = wmap.Elements.Array\n\
    print \"wmap as tuple: \" + repr(w_tuple)\n\
    \n\
    # convert to list and invert\n\
    w_list = [ 1-w for w in w_tuple[0] ]\n\
    print \"wmap as inverted list: \" + repr(w_list)\n\
   \n\
    # <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> weightmap as list\n\
    wmap.Elements.Array = w_list\n\
    \n\
# test3: turn a uvw tuple into a list, invert and <a href=\"javascript:void(0)\" data=\"set\" class=\"a_multireflink\">set</a> back\n\
def Test3():\n\
    obj = xsi.ActiveSceneRoot.AddGeometry( \"Cube\", \"MeshSurface\", \"TupleTest3\" )\n\
    xsi.GenerateUniqueUVs(obj, \"Texture_Projection\", \"\", \"\", \"\", \"\", \"\", \"\", \"\")\n\
\n\
    mesh = obj.ActivePrimitive.Geometry\n\
    cluster= mesh.Clusters.Filter( \"sample\" )(0)\n\
    uvw = cluster.Properties.Filter(\"uvspace\")(0)\n\
    \n\
    uvw_tuple = uvw.Elements.Array\n\
    print \"uvw tuple: \" + repr(uvw_tuple)\n\
    \n\
    uvw_list = [1-uvw_tuple[j][i] for i in range(len(uvw_tuple[0])) for j in range(len(uvw_tuple)) ]\n\
    print \"uvw list: \" + repr(uvw_list)\n\
    \n\
    uvw.Elements.Array = uvw_list\n\
    \n\
def XSITuple_toList(_tuple):\n\
    return [_tuple[j][i] for i in range(len(_tuple[0])) for j in range(len(_tuple)) ]\n\
    \n\
if __name__==\'__ax_main__\':\n\
    class WritableObject:\n\
        def __init__(self):\n\
            self.content = \"\"\n\
        def write(self, string):\n\
            if (string==\'\\n\'):\n\
                Application.Logmessage(self.content,32)\n\
                self.content=\"\"\n\
            else:\n\
                self.content+=string\n\
\n\
    # example with redirection of sys.stdout\n\
    sys.stdout = WritableObject()\n\
    \n\
main() \n\
	</pre></div> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_272AFD4BD12F42189BED1EF737A9B998\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-D75194C7-3449-4345-8995-CA8D2FA4AB1D\"></a></span>Creating a Clip\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-D7996C99-7D44-444C-A258-BC500A865862\"></a></span>The following example shows how to create a clip containing the static values of the\n\
               local position of an object. \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">oRoot = Application.ActiveSceneRoot\n\
oCube = oRoot.AddGeometry( \"Cube\", \"MeshSurface\" )\n\
\n\
# Creating the first animation source\n\
sParams = \"cube.kine.local.posx,cube.kine.local.posy,cube.kine.local.posz\"\n\
oSource = Application.StoreAction( oRoot, sParams, 1, \"StoredStaticPose\", 1, 1, 5, 0, 0) \n\
\n\
# Creating the first clip\n\
oClip = Application.AddClip( oRoot, oSource )	\n\
Application.LogMessage( \"First created clip \" + oClip.FullName )\n\
\n\
# Creating the second animation source\n\
oCube.Parameters(\"posx\").Value = 3.0\n\
oSource2 = Application.StoreAction( oRoot, sParams, 1, \"StoredStaticPose\", 1, 7, 9, 0, 0 )\n\
\n\
# Creating the second clip\n\
oClip2 = Application.AddClip(oRoot, oSource2)\n\
Application.LogMessage(\"Second created clip \" + oClip2.FullName)</pre></div> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_C670A1D8A1CF49339B395BEF5DAA8795\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-3D552BCF-75F2-48AF-8E3A-F811B0FFDE4E\"></a></span>Accessing Geometry\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-27A1B8AB-DF91-4245-A7DF-F2D24372DD49\"></a></span>The following example shows how to get the position of a point at a specific time\n\
               frame. \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\"># Import the constants \n\
from win32com.client import constants as c\n\
\n\
import sys, types\n\
\n\
Application.NewScene(\"\", 0)\n\
oGrid = Application.ActiveSceneRoot.AddGeometry( \"Grid\", \"MeshSurface\" )\n\
Application.SetValue (oGrid.Name + \".polymsh.geom.subdivu\", 1)\n\
Application.SetValue (oGrid.Name + \".polymsh.geom.subdivv\", 1)\n\
Application.Scale( oGrid, 0.25, 0.25, 0.25, c.siAbsolute, c.siParent, c.siObj, c.siXYZ)\n\
\n\
startTimeInSeconds = 5 / 29.97\n\
duration = startTimeInSeconds * 2\n\
\n\
# Start at frame 5 &amp; last 100 frames\n\
oClip = oGrid.ActivePrimitive.Geometry.SaveShapeKey( \n\
				startTimeInSeconds, \n\
				duration, \n\
				c.siShapeAbsoluteReferenceMode, \n\
				c.siShapeInstanceOnlyMode, \n\
				\"Clip\", ( 0,1,2,3), \n\
				( -4,0,-4, \n\
				  -4,0, 4, \n\
				   4,0, 0, \n\
				   4,0, 4 ))\n\
\n\
# Frame 3 must be the original grid\n\
oPoints = oGrid.ActivePrimitive.GetGeometry2(3,c.siConstructionModeSecondaryShape).Points\n\
oPos = oPoints[2].Position\n\
Application.LogMessage( \"%f,%f,%f\" % ( oPos.X,oPos.Y,oPos.Z ) )\n\
\n\
# Frame 10 must be the modified grid in the clip\n\
oPoints = oGrid.ActivePrimitive.GetGeometry2(10).Points\n\
oPos = oPoints[2].position\n\
Application.LogMessage( \"%f,%f,%f\" % ( oPos.X,oPos.Y,oPos.Z ) )\n\
</pre></div> \n\
            </p> \n\
         </div>\n\
         <div class=\"section\"><span class=\"anchor_wrapper\"><a name=\"SECTION_92069C0F3693498D8A53F1BBCB8A1ADC\"></a></span> \n\
            <h2><span class=\"anchor_wrapper\"><a name=\"GUID-820CD8EC-18E9-408D-AA99-B4B6EE7E1CD9\"></a></span>Setting and Getting FCurve Keys\n\
            </h2> \n\
            <p><span class=\"anchor_wrapper\"><a name=\"GUID-0D1EEA7C-AA6A-495D-BC7C-6444AC41667B\"></a></span>This example demonstrates how to set an fcurve on the <span class=\"code\" translate=\"no\">posx</span> parameter and how to access the keys through the <span class=\"code\" translate=\"no\"><a href=\"javascript:void(0)\" data=\"FCurveKey\" class=\"a_multireflink\">FCurveKey</a></span> object. \n\
               <div class=\"codeBlock\"><pre class=\"prettyprint\">Application.NewScene( \"\", 0 )\n\
\n\
oRoot = Application.ActiveProject.ActiveScene.Root\n\
oNull = oRoot.AddNull()\n\
oPosX = oNull.posx\n\
\n\
# Create and connect an fcurve to the position x\n\
oFCurve = oPosX.AddFCurve2( [1, 10, 50, 0, 100, 10] )\n\
\n\
# Set the zero slopes on the key tangents\n\
oFCurve.SetKeyTangents( [ \n\
	-10.5, 0, 10.5, 0, \n\
	-10.5, 0, 10.5, 0, \n\
	-10.5, 0, 10.5, 0 \n\
])\n\
\n\
# Get the keys on the fcurve\n\
for oFCKey in oFCurve.Keys :\n\
    Application.LogMessage( \"oFCKey[\" + str(oFCKey.Index) + \"] at frame \" + str(oFCKey.Time) + \" = \" + str(oFCKey.Value) )\n\
</pre></div> \n\
            </p> \n\
         </div>\n\
         <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /><p class=\"footer-license-block\"><a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\"><img alt=\"Creative Commons License\" style=\"border-width: 0;\" src=\"../images/ccLink.png\" /></a>&nbsp;<em>Except where otherwise noted, this work is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/\" target=\"_blank\">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>. Please see the <a href=\"http://autodesk.com/creativecommons\" target=\"_blank\">Autodesk Creative Commons FAQ</a> for more information.</em></p><br /></div>\n\
   </div></body>\n\
</html>";