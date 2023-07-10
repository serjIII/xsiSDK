' Triangulate Geo
' Author: Martin-Karl Lefrançois
' 
' DESCRIPTION:
'	Recreate the selected Geometru in triangles.
'	Note: the material, textures, and all other things are not supported.
'
' OPERATION:
'  	Select a PolyMesh

Option Explicit

'Call it
Triangulate

Function Triangulate()
  Dim lSel, lItem, lObj, lPnt, lCnt, aTri, i,j, a
  Dim root, lNewObj
  Dim lMax, tva
  
    
  'Get the selection
  Set lSel = Selection


  'For each element of the selection, find the type
  For Each lItem In lSel
	Set lObj = lItem

   	' Deal with a 3D Object
   	If TypeName(lObj) = "X3DObject" Then
		Dim lVertex, lPoly, lGeo, lTri
		logmessage "Will triangulate the polygons of: " & lObj		
		
		Set lGeo = lObj.ActivePrimitive.Geometry
		Set lTri = lGeo.Triangles

		lCnt = 0
		lMax = 0
		'Make new Polygons
		ReDim lPoly(lGeo.Triangles.Count * 4) 'size, p1, p2, p3
		aTri = lTri.indexarray
		for i=LBound( aTri, 2 ) to UBound( aTri, 2 )
			'logmessage aTri(0,i) & ", " & aTri(1,i) & ", " & aTri(2,i)
			lPoly(lCnt) = 3
			lCnt = lCnt + 1
			lPoly(lCnt) = aTri(0,i)
			if lPoly(lCnt) > lMax then lMax = lPoly(lCnt) end if
			lCnt = lCnt + 1
			lPoly(lCnt) = aTri(1,i)
			if lPoly(lCnt) > lMax then lMax = lPoly(lCnt) end if
			lCnt = lCnt + 1
			lPoly(lCnt) = aTri(2,i)
			if lPoly(lCnt) > lMax then lMax = lPoly(lCnt) end if
			lCnt = lCnt + 1
		next
		
		tva = Geometry_TriangleVertexPositionArray(LgEO)


		logmessage lMax & "," & ubound(tva,2)
		'Make new vertices
		'Create an array of vertices
		a = lTri.positionarray
		ReDim lVertex(((lMax+1)* 3)-1)
		logmessage Ubound(lVertex)
		
		lCnt = 0

		for i=lbound(tva,2) to ubound(tva,2)
				'logmessage "t" & i & ".p" & j & ".position: " & a(0,j,i) & "," & a(1,j,i) & "," & a(2,j,i)	
				lVertex(lCnt) = tva( 0, i )
				lCnt = lCnt + 1
				lVertex(lCnt) = tva( 1, i )
				lCnt = lCnt + 1
				lVertex(lCnt) = tva( 2, i )
				lCnt = lCnt + 1

	
		next
		
'		For Each lPnt In lGeo.Points
'			lVertex(lCnt) = lPnt.position.x
'			lCnt = lCnt + 1
'			lVertex(lCnt) = lPnt.position.y
'			lCnt = lCnt + 1
'			lVertex(lCnt) = lPnt.position.z
'			lCnt = lCnt + 1
'		Next
	
				
		logmessage lGeo.Points.Count
		
		set root = application.activeproject.activescene.root
		set lNewObj = root.AddPolygonMesh( lVertex, lPoly, "MyNewMesh" )

		'Copy the transformation
		Translate lNewObj, lObj.posx.value, lObj.posy.value, lObj.posz.value
		Scale lNewObj, lObj.sclx.value, lObj.scly.value, lObj.sclz.value
		Rotate lNewObj, lObj.rotx.value, lObj.roty.value, lObj.rotz.value


		set Triangulate = lNewObj
   	End If
   
	logmessage lObj & ": has triangle polygons"
 
  Next
  
End Function



Function Geometry_TriangleVertexPositionArray( in_geom )
	Dim tri, ia, pa, nti,j,i,k

	set Geometry_TriangleVertexPositionArray = Nothing
	
	if not isobject(in_geom) then
		exit function
	end if
	
	set tri = in_geom.triangles
	
	ia  = tri.indexarray
	pa = tri.positionarray
	
	nti=0
	for j=lbound(ia,2) to ubound(ia,2)	' triangle
		for i=lbound(ia,1) to ubound(ia,1)	' point
			if ia( i, j ) > nti then
				nti = ia( i, j )
			end if
		next	
	next
	
	Dim tva
	
	redim tva( 3, nti )
	
	for j=lbound(ia,2) to ubound(ia,2)	' triangle
		for i=lbound(ia,1) to ubound(ia,1)	' point
			if IsEmpty(tva( 0, ia(i,j) )) then
				for k=lbound( pa, 1 ) to ubound( pa, 1 )
					tva(k, ia(i,j)) = pa(k, i, j)
				next	
			end if
		next	
	next
	
	Geometry_TriangleVertexPositionArray = tva
End Function