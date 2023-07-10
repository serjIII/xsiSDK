'------------------------------------------------------------------------------
'	PolyPlaneProjection.vbs
'	DESC: Apply a planar projection on the selected polygons
'	AUTHOR: Martin-Karl Lefrancois
'			November, 2000
'------------------------------------------------------------------------------
Option Explicit 

'Change this for Material Constant (OpenGL style)
Dim gMatConst 
gMatConst = true

Dim XSIDial, Plane, Combo
Set XSIDial = createobject("XSIDial.XSIDialog")

Combo = Array("Right","Top", "Front","Left","Bottom","Back")
Plane = XSIDial.Combo( "Select the current plane", Combo)

Dim ClsElemArray

'Call The sub
PolyProject Plane

Sub PolyProject( inPlane )
	Dim lObj, lPolyColl, lGeo, lSel, oCls
	Dim myNor, i, aNormal, lOri, lPnt, u, v
	Dim UVElems, lCnt, lTrs, lScl
	Dim lMin(3), lMax(3), aPoly, lItem, lPolyOffset
	Dim elem
	
	'Get the Selected object 
	Set lSel = Selection
	
	'We are not sure the 	
    For Each lItem In lSel
        Set lPolyColl = lItem
        Exit For
    Next
    
    'Trick to get the X3DObject
    If TypeName(lPolyColl) = "CollectionItem" Then
    	If lPolyColl.Type <> "polySubComponent" Then
    		MsgBox "Select Polygons! " & lPolyColl.Type
    	End If
    	
        Set lObj  = ActiveProject.ActiveScene.Root.FindChildren(lPolyColl.name)
        Set lObj = lObj(0)
        aPoly = lPolyColl.SubElements
        
    Else
    	MsgBox "Select Polygons! " & TypeName(lPolyColl)
    	
    End If

	If TypeName(lObj) <> "X3DObject" Then
		MsgBox "Wrong type of object! " & TypeName(lObj)
		Exit Sub
	End If
	
	'Get the Geometry, must be a polygon mesh
	Set lGeo = lObj.ActivePrimitive.Geometry



	If lGeo.name <> "polymsh" Then
		MsgBox "Wrong type of primitive! " & lGeo.name
		Exit Sub
	End If
	
	'Get the UV property
	GetUVProp lGeo, oCls
	If TypeName(oCls) = "Empty" Then
		MsgBox "You must create a Texture space first!"
		Exit Sub
	End If
	
	'We have a bug and we need to freeze operators
	for each elem in enumelements( oCls )
	'logmessage elem.type & ":" & typename(elem) & ":" & elem.fullname
	if typename(elem) = "Operator" then
		freezeobj elem
	end if
	next
	GetUVProp lGeo, oCls
	
	'Get the array to work on
	UVElems = oCls.Elements.array 
	Set myNor = CreateObject("Sumatra\Scripting\Math\SIVector3")
	Set lTrs = CreateObject("Sumatra\Scripting\Math\SIVector3")
	Set lScl = CreateObject("Sumatra\Scripting\Math\SIVector3")

	'Get the Bounding box of the object (local space)
	GetBBox lGeo, lMin, lMax

	'Set the transformation	
	lTrs.set -lMin(0), -lMin(1), -lMin(2) 
	lScl.set lMax(0)-lMin(0), lMax(1)-lMin(1), lMax(2)-lMin(2)
	'LogMessage "Trans : " & lTrs.x & ", " & lTrs.y & ", " & lTrs.z
	'LogMessage "Scal: " & lScl.x & ", " & lScl.y & ", " & lScl.z
	
	'Create a table of offsets for polynode
	'ReDim lPolyOffset( lGeo.Facets.count )
	'lPolyOffset(0) = 0
	'For i = 1 to lGeo.Facets.count - 1
	'	lPolyOffset(i) = lPolyOffset(i-1) + lGeo.Facets(i-1).Points.count
	'	'logmessage lPolyOffset(i)
	'Next

	'Set the UV's	
	For each i in aPoly
		' 0=x 1=y 2=z 3=-x, 4=-y 5=-z
		lCnt = 0
		
	 	For each lPnt in  lGeo.Facets(i).Points
	 		'logmessage lPnt.Position.x &", "& lPnt.Position.y
	 		Select Case inPlane 
	 		Case 0
	 			u = (-lPnt.Position.z + lTrs.z)/lScl.z
	 			v =  (lPnt.Position.y + lTrs.y)/lScl.y
	 		Case 1
	 			u = (-lPnt.Position.x + lTrs.x)/lScl.x
	 			v =  (lPnt.Position.z + lTrs.z)/lScl.z
	 		Case 2
	 			u = (lPnt.Position.x + lTrs.x)/lScl.x
	 			v = (lPnt.Position.y + lTrs.y)/lScl.y
	 		Case 3
	 			u = (lPnt.Position.z + lTrs.z)/lScl.z
	 			v = (lPnt.Position.y + lTrs.y)/lScl.y
	 		Case 4
	 			u = (-lPnt.Position.x + lTrs.x)/lScl.x
	 			v = (-lPnt.Position.z + lTrs.z)/lScl.z
	 		Case 5
	 			u = (-lPnt.Position.x + lTrs.x)/lScl.x
	 			v =  (lPnt.Position.y + lTrs.y)/lScl.y
	 		End Select
	 		
	 		'LogMessage u & "|" & v 
	 		'logmessage lCnt & " " & GetClsElemProp(lCnt)
	 		'logmessage lCnt & " " & lGeo.polygons(i).nodes(lCnt).index

	 		UVElems(0,lGeo.polygons(i).nodes(lCnt).index)=u
	 		UVElems(1,lGeo.polygons(i).nodes(lCnt).index)=v
	 		UVElems(2,lGeo.polygons(i).nodes(lCnt).index)=0
	 		'logmessage lCnt & "," & u & ","& v
	 		lCnt = lCnt + 1
	 	Next 
	 Next
	
	'Write back the array
	'logmessage Ubound( UVElems,1)	
	'logmessage Ubound( UVElems,2)
	

	
	oCls.Elements.array = UVElems
	
	'Freeze the UV's (remove the stack of operators on the UV)
	FreezeObj oCls

	If  gMatConst = true Then 
		SetValue lObj.Material & ".envmode", 8449.000
		SetValue lObj.Material & ".wrapu", 10497.000
		SetValue lObj.Material & ".wrapv", 10497.000
	End If
	

End Sub

'----------------------------------------
' Get the Bounding Box in Local Space
'----------------------------------------
Sub GetBBox( lGeo, lMin, lMax )
	Dim aPositions,i, finalMax
	
	lMin(0) = 0
	lMin(1) = 0
	lMin(2) = 0
	lMax(0) = 0
	lMax(1) = 0
	lMax(2) = 0
	aPositions = lGeo.Points.PositionArray
	for i = LBound(aPositions, 2) to UBound(aPositions, 2)
			If aPositions(0,i) < lMin(0 ) Then lMin(0) = aPositions(0,i) End If
			If aPositions(1,i) < lMin(1 ) Then lMin(1) = aPositions(1,i) End If
			If aPositions(2,i) < lMin(2 ) Then lMin(2) = aPositions(2,i) End If
			If aPositions(0,i) > lMax(0 ) Then lMax(0) = aPositions(0,i) End If
			If aPositions(1,i) > lMax(1 ) Then lMax(1) = aPositions(1,i) End If
			If aPositions(2,i) > lMax(2 ) Then lMax(2) = aPositions(2,i) End If
	Next
	'logmessage "Min " & lMin(0) & "," & lMin(1) & "," & lMin(2)
	'logmessage "Max " & lMax(0) & "," & lMax(1) & "," & lMax(2)
		
End Sub

'----------------------------------------
' Get the first UV samples 
'----------------------------------------
Sub GetUVProp( i_Geo, o_Cls )
	Dim oClusters,oCls,pCls
	
	'Initialize the output cluster property
	o_Cls = Empty
	
	'Find the "sample" clusters
	Set oClusters = i_Geo.Clusters.Filter("sample")
	If TypeName(oClusters) <> "Nothing" Then 
		For each oCls In oClusters
			'Find the UV texture property
			For  each pCls in oCls.properties
				If pCls.type = "uvspace" Then
					Set o_Cls = pCls
					'Exit For
				End If
			Next 
			If Typename(o_Cls) <> "Empty" Then
				ClsElemArray = oCls.elements.array
				Exit For
			End If 
		Next 
	Else 
		Exit Sub 
	End If 
	
	
End Sub


Function GetClsElemProp( iIndex )
	dim i
	For i = LBound(ClsElemArray) to UBound(ClsElemArray)
		If ClsElemArray(i) = iIndex Then
			GetClsElemProp = i
			Exit Function
		End If
	Next
	
End Function


