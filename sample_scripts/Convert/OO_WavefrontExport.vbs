'Sample Converter Script - Wavefront Exporter
'Written by Olivier Ozoux, SOFTIMAGE Special PRojects.
'
Option Explicit



'Main function call
ExportWavefrontProc





'--------'--------'--------'--------'--------'--------'--------'--------'
sub ExportWavefrontProc()
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim objs,path, filename
path = "C:\"
path = inputbox ( "OBJ filepath", "Wavefront OBJ Export", path )
filename = "XSIObject"
filename = inputbox ( "OBJ filename", "Wavefront OBJ Export", filename )

path = trim(path)
path = trim(path)
if Asc(Right(path,1)) <> 92 and Asc(Right(path,1)) <> 47 then	' end by \ or /
	path = path & "/"
end if

'expand the selection
set objs = SelectChildNodes(,FALSE)

if objs.count < 1 then
	'get all the objects if nothing is selected
	set objs = SelectChildNodes("*",FALSE)
end if
	
'keep only the geometry
set objs = SIFilter(objs, "geometry", TRUE)
if TypeName(objs) <> "Nothing" then
	ExportWavefrontObjFile objs, path, filename
end if
end sub
'-----------------------------------------------------------------------'





'--------'--------'--------'--------'--------'--------'--------'--------'
sub ExportWavefrontObjFile( inObjs,inPath, inFile)
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim allMat, myObj, myMat, myGeom, myCls,cItem
Dim myText,fso,f,n, i, offsets, localMatList
Dim vCount,  vnCount,  vtCount
Dim vOffset, vnOffset, vtOffset

Dim oUKnots,oVKnots, oNurbs
Dim umin, umax, vmin,vmax, uList,vList


n = chr(10) 'UNIX Linefeed

'Create the Collection for the material lib.
set allMat = createObject("XSI.Collection")
set cItem = createObject("XSI.CollectionItem")

'Open the textfile
Set fso = CreateObject("Scripting.FileSystemObject")
Set f = fso.OpenTextFile(inPath & inFile & ".obj" , 2, True)

'Write the Header
myText = "# XSI Wavefront Object (.obj) Export" & n
myText = myText & "# Prototype written by Olivier Ozoux" & n
myText = myText & "# Created " & Now & n & n
f.Write myText

'Initialize the offsets
vOffset = 1		'Vertex
vnOffset = 1	'Vertex Normals
vtOffset = 1	'Vertex Textures

'Write the Object Name
f.Write "o " &  application.activeproject.activescene.root &n&n

'Write the Material Lib declaration
f.Write "mtllib " & inFile & ".mtl" &n&n

'Loop over the Object List (pre filtered to contain geometry only!!!)  	
for each myObj in inObjs

'Filter out the particles for now (bug in PointCollection)
if myObj.type <> "cloud" then

	'Get the geometry
	set myGeom = myObj.activeprimitive.geometry
	
	'Create a new group for the surface
	f.Write n&"# Hierarchy (from self to top father)"&n
	f.Write "g "& GetFamilyTree(myObj) &n

	'Process the vertices
	vCount = parseVertices( myObj, vOffset, myText )
	if vCount > 0 then
		f.Write myText
	end if

	'Process the normals
	vnCount = parseNormals( myObj, vnOffset, myText)
	if vnCount > 0 then
		f.Write myText
	end if

	'Process the uv
	vtCount = parseUVs( myObj, vtOffset, myText )
	if vtCount > 0 then
		f.Write myText
	end if


	
	select case myObj.Type
		case "polymsh"	
			'Process the Global material
			allMat.Add myObj.Material
			'Prepare the Local Material Array
			localMatList = facetMatArray( myObj, allMat )
			
			'export faces
			myMat = ""
			Dim points, j, k
			k = vtOffset

			'Write each PolygonFace statement
			for i=0 to myGeom.Facets.count -1
				if myMat <> localMatList(i) then
					myMat = localMatList(i)
					f.Write n& "usemtl "& mangleMatName(myMat) &n
				end if
				points = myGeom.Facets(i).Points.IndexArray
				myText = ""
				if vtCount > 0 then
					'Print the VT data in the face
					for j = 0 to ubound(points)
						myText = myText & points(j) + vOffset &"/"& k &"/"& points(j) + vnOffset &" "
						k = k + 1						
					next
				else
					'don't use the VT data
					for j = 0 to ubound(points)
						myText = myText & points(j) + vOffset &"//"& points(j) + vnOffset &" "						
					next					
				end if

				f.Write "f " & myText &n
			next

			'Write the comment once all faces are declared.
			f.Write "# " & myGeom.Facets.count & " polygon faces" &n
			
		case "surfmsh"
			'Process the Global material
			allMat.Add myObj.Material
			'Prepare the Local Material Array
			localMatList = facetMatArray( myObj, allMat )
			
			'Write each PolygonFace statement
			for i=0 to myGeom.Facets.count -1
				if myMat <> localMatList(i) then
					myMat = localMatList(i)
					f.Write n& "usemtl "& mangleMatName(myMat) &n
				end if
				
				set oNurbs = myGeom.Facets(i)
				set oUKnots = oNurbs.Knots(siUDirection)
				set oVKnots = oNurbs.Knots(siVDirection)
				points = myGeom.Facets(i).Points.IndexArray
				uList = oUKnots.Array
				for j=0 to Ubound(uList)
					uList(j) = Round(uList(j), 6)
				next
				vList = oVKnots.Array
				for j=0 to Ubound(vList)
					vList(j) = Round(vList(j), 6)
				next				
				umin = uList(0)
				vmin = vList(0)
				umax = uList(Ubound(uList))
				vmax = vList(Ubound(vList))
				
				myText = "cstype rat bspline" &n
				myText = myText &"deg "& oUKnots.Degree &" "& oVKnots.Degree &n
				myText = myText &"surf "& umin &" "& umax &" "& vmin &" "& vmax &" "
				for j=0 to Ubound(points)
					myText = myText & points(j) + vtOffset &"//"& points(j) + vnOffset &" " 
				next
				myText = myText &n
				
				myText = myText &"parm u "& join(uList, " ") &n
				myText = myText &"parm v "& join(vList, " ") &n
				myText = myText &"end" &n
				'LogMessage myText
				f.Write myText &n
			next
		case "XXXcrvlist"

			set oNurbs = myGeom
			set oUKnots = oNurbs.Knots(siUDirection)
				
			points = oNurbs.Points.IndexArray
			uList = oUKnots.Array
			for j=0 to Ubound(uList)
				uList(j) = Round(uList(j), 6)
			next
			umin = uList(0)
			umax = uList(Ubound(uList))

				
			myText = "cstype rat bspline" &n
			myText = myText &"deg "& oUKnots.Degree &n
			myText = myText &"curv "& umin &" "& umax &" "
			for j=0 to Ubound(points)
				myText = myText & points(j) + vtOffset &"//"& points(j) + vnOffset &" " 
			next
			myText = myText &n			
			myText = myText &"parm u "& join(uList, " ") &n
			myText = myText &"end" &n
			'LogMessage myText
			f.Write myText &n
			
		case else
					
	end select
	
	'Update the offset counters 
	vOffset = vOffset + vCount
	vnOffset = vnOffset + vnCount
	vtOffset = vtOffset + vtCount
end if
next

'Close the text file
f.Close

'Remove Material Duplicates and Export
set allMat = SIFilter(allMat)
ExportWavefrontMtlFile allMat, inPath, inFile
end sub
'-----------------------------------------------------------------------'




'--------'--------'--------'--------'--------'--------'--------'--------'
sub ExportWavefrontMtlFile( inMats, inPath, inFile )
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim fso, f, myMat

'Open the textfile
Set fso = CreateObject("Scripting.FileSystemObject")
Set f = fso.OpenTextFile(inPath & inFile & ".mtl" , 2, True)

'Enumerate the Materials (pre-filtered)
for each myMat in inMats
	f.Write parseMaterial(myMat) & Chr(10)
	LogMessage "Exporting material: " & mangleMatName(myMat), siVerbose
next

'Close the text file
f.Close
end sub
'-----------------------------------------------------------------------'





'--------'--------'--------'--------'--------'--------'--------'--------'
function parseMaterial(inMat)
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim myOGL, n, item, name, val, i, illumtype	
n =  Chr(10) 'New Line (UNIX style)
	
'Write the Material Name
parseMaterial = "newmtl " & mangleMatName(inMat.FullName) & n
	
'Get the OGL stuff
set myOGL = inMat.OGLMaterial
parseMaterial = parseMaterial & "Ka " & col2txt(myOGL.ambient) & n
parseMaterial = parseMaterial & "Kd " & col2txt(myOGL.diffuse) & n
parseMaterial = parseMaterial & "Ks " & col2txt(myOGL.specular) & n
parseMaterial = parseMaterial & "Ns " & myOGL.decay & n
parseMaterial = parseMaterial & "Ni " & "1.000" & n

'Get the Surface Shader
'NEED TO FIND THE TYPE (now hardcoded to constant)
' 0=constant 1=lambert 2=phong/other
set myOGL = inMat.ConnectionPoints("surface").source
illumtype = GetIllumType( myOGL )
parseMaterial = parseMaterial & "illum " & illumtype & n

'Get the Texture if any
set myOGL = inMat.OGLTexture
if typeName(myOGL) <> "Nothing" then
	parseMaterial = parseMaterial & "map_Kd " & myOGL.FullName & n
end if	
end function
'-----------------------------------------------------------------------'




'--------'--------'--------'--------'--------'--------'--------'--------'
function GetIllumType( inShader )
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim oParams, oParam, key, illum, trans
	set oParams = inShader.Parameters

	'Create the key from the first letter of each param.
	for each oParam in oParams
		if oParam.Name <> "Name" then
			key = key & left(oParam.Name,1)
		end if
	next

	'Compare against that key.
	Select Case key
		Case "ct" 'Constant
			illum = 0
		Case "aadtttrrritiibndrrit" 'Full Lambert
			illum = 1
		Case "adab" 'Simple Lambert
			illum = 1
		Case "madsastrissnldt" 'Legacy SI3D shader
			illum = inShader.mode.value
		Case else
			illum = 2
	End Select
	
	if illum > 2 then
		illum = 2
	end if
	
	GetIllumType  = illum
end function
'-----------------------------------------------------------------------'







'--------'--------'--------'--------'--------'--------'--------'--------'
function col2txt( inCol )
'--------'--------'--------'--------'--------'--------'--------'--------'
col2txt = Round( inCol.red, 4) &" "&_
	Round( inCol.green, 4) &" "&_
	Round( inCol.blue, 4)
end function
'-----------------------------------------------------------------------'






'--------'--------'--------'--------'--------'--------'--------'--------'
function enumColl( inCol)
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim list(), i
Redim list( inCol.count -1)
for i=0 to inCol.count -1
	list(i) = inCol(i).Name
next
enumColl = join(list,",")
end function
'-----------------------------------------------------------------------'





'--------'--------'--------'--------'--------'--------'--------'--------'
function GetFamilyTree(inObj)
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim oParent, oRoot
GetFamilyTree = inObj.Name
set oRoot = application.activeproject.activescene.root
set oParent = inObj
Do Until oParent.IsEqualTo( oRoot )
	set oParent = oParent.Parent
	'if oParent.IsEqualTo(oRoot) then
	'	exit do
	'end if 
	GetFamilyTree = GetFamilyTree &" "& oParent.Name
Loop
end function
'-----------------------------------------------------------------------'





'--------'--------'--------'--------'--------'--------'--------'--------'
function parseVertices(inObj, offset, outText)
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim positions, oGeom, oPoints, i, n, x,y,z
Dim matrix, vPos
n = chr(10)

set oGeom = inObj.ActivePrimitive.Geometry
set oPoints = oGeom.Points

'Get the global tranformation matrix for the object
set matrix = CreateSIMatrix(_
	GetValueVector( inObj & ".kine.global.scl"),_
	GetValueVector( inObj & ".kine.global.rot"),_
	GetValueVector( inObj & ".kine.global.pos"))
set vPos = CreateObject("Sumatra\Scripting\Math\SIVector3")

'Print Header
outText = n&"#begin "& oPoints.count & " vertices" &n
positions = oPoints.PositionArray
for i = 0 to Ubound(positions, 2)
	vPos.x =  positions(0,i)
	vPos.y =  positions(1,i)
	vPos.z =  positions(2,i)
	'Convert to Global coordinates!
	vPos.MulByMatrix4 vPos , matrix
	x = Round(vPos.x, 6)
	y = Round(vPos.y, 6)
	z = Round(vPos.z, 6)
	outText = outText &"v "& x &" "& y &" "& z &n
next

'Print Footer
outText = outText & "#end ("& offset -1 &") + "& oPoints.count & " vertices" &n
'Return the number of vertex found
parseVertices = oPoints.count
end function
'-----------------------------------------------------------------------'





'--------'--------'--------'--------'--------'--------'--------'--------'
function parseNormals(inObj, offset, outText)
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim normals, oGeom,oPoints, i, n, x,y,z
n = chr(10)

set oGeom = inObj.ActivePrimitive.Geometry
set oPoints = oGeom.Points

'WE CAN'T GET THE POLYNODE NORMALS YET.

'Print Header
outText = n&"#begin "& oPoints.count & " vertex normals" &n
normals = oPoints.NormalArray
for i = 0 to Ubound(normals, 2)
	x = Round( normals(0,i), 6) 
	y = Round( normals(1,i), 6) 
	z = Round( normals(2,i), 6)
	outText = outText &"vn "& x &" "& y &" "& z &n
next
'Print Footer
outText = outText & "#end ("& offset -1 &") + "& oPoints.count & " vertex normals" &n
'Return the number of normals found
parseNormals = oPoints.count
end function
'-----------------------------------------------------------------------'




'--------'--------'--------'--------'--------'--------'--------'--------'
function parseUVs(inObj, offset, outText)
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim textureUVs,uv,oGeom,oClusters,oCls, i, n,nb, x,y,z
n = chr(10) 'UNIX newline

'Check for sample clusters
set oGeom = inObj.ActivePrimitive.Geometry

'Find the "sample" clusters
set oClusters = oGeom.Clusters.Filter("sample")
if Typename(oClusters) <> "Nothing" then
	for each oCls in oClusters
		'Find the UV texture property
		set oCls = oCls.properties.filter("uvspace")
		if Typename(oCls) <> "Nothing" then
			set uv = oCls(0).elements
			exit for
		end if
	next
else
	parseUVs = 0
	exit function
end if

nb = uv.count

'Header
outText = n&"#begin "& nb & " texture vertices" &n
textureUVs = uv.array
for i = 0 to Ubound(textureUVs, 2)
	x = Round( textureUVs(0,i), 6) 
	y = Round( textureUVs(1,i), 6) 
	z = Round( textureUVs(2,i), 6)
	outText = outText &"vt "& x &" "& y &" "& z &n
next
'Footer
outText = outText & "#end ("& offset -1 &") + "& nb & " texture vertices" &n

'Return the number of UV found
parseUVs = nb
end function
'-----------------------------------------------------------------------'





'--------'--------'--------'--------'--------'--------'--------'--------'
function facetMatArray(inObj, inMaterials)
'--------'--------'--------'--------'--------'--------'--------'--------'
Dim oGeom, oFacets,oMat,oCls,oClusters, i,nb,indices, list()

set oGeom = inObj.ActivePrimitive.Geometry
set oFacets = oGeom.Facets
set oMat = inObj.Material
nb = oFacets.count -1

'Fill the list with the global material first
Redim list(nb)
for i=0 to nb
	list(i) = oMat
next

'We support local materials on polygons and nurbs mesh
select case inObj.type
	case "polymsh"
		set oClusters = oGeom.Clusters.filter("poly")
	case "surfmsh"
		set oClusters = oGeom.Clusters.filter("subsrf")
end select

if Typename(oClusters) <> "Nothing" then
	'Find the local materials, if any
	for each oCls in oClusters
		'Add the material to the list
		inMaterials.Add oCls.Material
		indices = oCls.obj.Elements
		for i=0 to oCls.obj.NbElements -1
			list(indices(i)) = oCls.Material
		next
	next
end if

'return the array
facetMatArray = list
end function
'-----------------------------------------------------------------------'




'--------'--------'--------'--------'--------'--------'--------'--------'
function mangleMatName( name )
'--------'--------'--------'--------'--------'--------'--------'--------'
'Remove the ".polymsh.cls"
mangleMatName = Replace( name, ".polymsh.cls.", ".")
'Change the ".localprops.material." into ""
mangleMatName = Replace( mangleMatName, ".localprops.material.", ".")	
'Change the "." into "_"
mangleMatName = Replace( mangleMatName, ".", "_")
end function
'-----------------------------------------------------------------------'

'---------'---------'---------'---------'---------'---------'---------'--------'
function CreateSIMatrix( inScl, inRot, inPos )
'---------'---------'---------'---------'---------'---------'---------'--------'
	'Returns a Matrix4 object containing the global transformation
	Dim l_Rot, l_Trs, l_Matrix, l_RadToDeg, l_DegToRad
	
	
	set l_Trs = CreateObject("Sumatra\Scripting\Math\SITransformation")
	set l_Matrix = CreateObject("Sumatra\Scripting\Math\SIMatrix4")
	set l_Rot = CreateObject("Sumatra\Scripting\Math\SIVector3")

	
	l_RadToDeg = 180.0 / 3.1415926535897932
	l_DegToRad = 3.1415926535897932 / 180.0
	
	'Conversion of the rotation angles into radians
	l_Rot.Copy inRot
	l_Rot.ScaleInPlace l_DegToRad

	'Create an SI Transform first.	
	l_Trs.SetScaling inScl
	l_Trs.SetTranslation inPos
	l_Trs.SetRotationFromXYZAngles l_Rot

	'Extract a Matrix from that transform.
	l_Trs.GetMatrix4 l_Matrix
	
	set CreateSIMatrix = l_Matrix
end function

'---------'---------'---------'---------'---------'---------'---------'--------'
function GetValueVector(in_Path)
'---------'---------'---------'---------'---------'---------'---------'--------'
	'Create a vector containing the x y z component of the path
	'for example  GetValueVector(obj & ".kine.local.pos")
	Dim V
	set V = createobject("Sumatra\Scripting\Math\SIVector3")
	V.Set GetValue(in_Path & "x"),_
	GetValue(in_Path & "y"),_
	GetValue(in_Path & "z")
	set GetValueVector = V
end function
