
set obj = Break

logmessage "Select all polygons"
AddToSelection obj & ".poly[*]", , True
logmessage "Now translate the selection in Local"
logmessage "It will take some time"
Translate , 0.000, 1.0, 0.000, siRelative, siLocal, siObj, siXYZ
logmessage "Done"

logmessage "Now translate AGAIN the selection in Local"
logmessage "IT WILL TAKE VERY VERY LONG TIME BEFORE IT COMES BACK"
Translate , 0.000, 1.0, 0.000, siRelative, siLocal, siObj, siXYZ
logmessage "Done"


Function Break()

  'Get the selection
  Set lsel = Selection

  'For each element of the selection, find the type
  For Each Item In lsel
	Set lObj = Item

   	' Deal with a 3D Object
   	If TypeName(lObj) = "X3DObject" Then
		Dim lVertex, lPoly, lGeo
		logmessage "Will break the polygon of: " & lObj		
		nbPolyNode = GetNbPolynode( lObj )
		'Create an array of vertices
		ReDim lVertex(nbPolyNode*3)
			
		nElemV = 0
		nElemP = 0
		nElemPV = 0
		Set lGeo = lObj.ActivePrimitive.Geometry
		ReDim lPoly(nbPolyNode+lGeo.Facets.count)

		For i=0 To lGeo.Facets.count -1
			
			'Make new vertices
				For Each pnt In lGeo.Facets(i).Points
					lVertex(nElemV) = pnt.position.x
					nElemV = nElemV + 1
					lVertex(nElemV) = pnt.position.y
					nElemV = nElemV + 1
					'logmessage nElemV
					lVertex(nElemV) = pnt.position.z
					nElemV = nElemV + 1
				Next
			
			'Make new Polygons
			lPoly(nElemP) = lGeo.Facets(i).Points.count
			nElemP = nElemP + 1
			For j=0 To lGeo.Facets(i).Points.count -1 
				lPoly(nElemP) = nElemPV
				nElemP = nElemP + 1
				nElemPV = nElemPV + 1
			Next 			
		Next
		
		set root = application.activeproject.activescene.root
		set obj = root.AddPolygonMesh( lVertex, lPoly, "MyNewMesh" )

		set Break = obj
   	End If
   
	logmessage obj & ": has independent polygons"
 
  Next
  
end function

'-----------------------------------------------------
' Get the number of polynodes (vertex of polygons)
'-----------------------------------------------------
Function GetNbPolynode( inObj )
	Dim i, nbPolyN
	Dim geo
	
	nbPolyN = 0
	
	Set geo = inObj.ActivePrimitive.Geometry
	For i=0 To geo.Facets.count -1
		nbPolyN = nbPolyN + geo.facets(i).points.count
	Next

	GetNbPolynode = nbPolyN
End Function