'------------------------------------------------------------------------------
'	CubicTexture.vbs
'	DESC: This initialize the object with a cubic environment
'	AUTHOR: Martin-Karl Lefrancois
'			November, 2000
'------------------------------------------------------------------------------
Option Explicit 

'Change this for Material Constant (OpenGL style)
Dim gMatConst 
gMatConst = true

'Call The sub
InitObject

Sub InitObject()
	Dim lGeo, lSel, oCls
	Dim myNor, i, aNormal, lOri, lPnt, u, v
	Dim UVElems, lCnt, lTrs, lScl
	Dim lMin(3), lMax(3)
	
	'Get the Selected object 
	Set lSel = Selection(0)
	If TypeName(lSel) <> "X3DObject" Then
		MsgBox "Wrong type of object! " & TypeName(lSel)
		Exit Sub
	End If
	
	'Get the Geometry, must be a polygon mesh
	Set lGeo = lSel.ActivePrimitive.Geometry
	If lGeo.name <> "polymsh" Then
		MsgBox "Wrong type of primitive! " & lGeo.name
		Exit Sub
	End If
	
	'Get the UV property
	GetUVProp lGeo, oCls
	If TypeName(oCls) = "Empty" Then
		MsgBox "You must create a Texture Projection first!"
		Exit Sub
	End If
	
	'Freeze the UV's (remove the stack of operators on the UV)
	FreezeObj oCls
	
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
	
	'Set the UV's	
	lCnt = 0
	For i=0 to lGeo.Facets.Count -1
	
		'Get polygon normal
		aNormal = lGeo.Facets.NormalArray
		myNor.Set aNormal(0,i),aNormal(1,i),aNormal(2,i)
		'LogMessage "Normal: " & myNor.x & " | " & myNor.y & " | " & myNor.z   

		' 0=x 1=y 2=z 3=-x, 4=-y 5=-z
		lOri = FGetNormOri(myNor)
	 	For each lPnt in  lGeo.Facets(i).Points
	 		Select Case lOri
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
	 		UVElems(0,lCnt)=u
	 		UVElems(1,lCnt)=v
	 		UVElems(2,lCnt)=0
	 		lCnt = lCnt + 1
	 	Next 
	 Next
	
	'Write back the array	
	oCls.Elements.array = UVElems

	If  gMatConst = true Then 
		SetValue lSel.Material & ".envmode", 8449.000
		SetValue lSel.Material & ".wrapu", 10497.000
		SetValue lSel.Material & ".wrapv", 10497.000
	End If
	

End Sub

'----------------------------------------
' Get the Bounding Box in Local Space
'----------------------------------------
Sub GetBBox( lGeo, lMin, lMax )
	Dim aPositions,i, finalMax
	
	aPositions = lGeo.Points.PositionArray
	for i = LBound(aPositions, 2) to UBound(aPositions, 2)
			If aPositions(0,i) < lMin(0 ) Then lMin(0) = aPositions(0,i) End If
			If aPositions(1,i) < lMin(1 ) Then lMin(1) = aPositions(1,i) End If
			If aPositions(2,i) < lMin(2 ) Then lMin(2) = aPositions(2,i) End If
			If aPositions(0,i) > lMax(0 ) Then lMax(0) = aPositions(0,i) End If
			If aPositions(1,i) > lMax(1 ) Then lMax(1) = aPositions(1,i) End If
			If aPositions(2,i) > lMax(2 ) Then lMax(2) = aPositions(2,i) End If
	Next
	
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
					Exit For
				End If
			Next 
			If Typename(o_Cls) <> "Nothing" then
				Exit For
			End If 
		Next 
	Else 
		Exit Sub 
	End If 
End Sub


'------------------------------------------------------------------------------
' DESCRIPTION: Return the orientation of the normal 0=x 1=y .. 3=-x, 4=-y
'------------------------------------------------------------------------------
Function FGetNormOri(i_Norm)
	
	If (Abs(i_Norm.x) > Abs(i_Norm.y)) and  (Abs(i_Norm.x) > Abs(i_Norm.z)) Then
		If i_Norm.x < 0 Then
			FGetNormOri = 3
		Else
			FGetNormOri = 0
		End If
		Exit Function
	End If
	
	If Abs(i_Norm.y) > Abs(i_Norm.x) and  Abs(i_Norm.y) > Abs(i_Norm.z) Then
		If i_Norm.y < 0 Then
			FGetNormOri = 4
		Else
			FGetNormOri = 1
		End If
		Exit Function
	End If
			
	If i_Norm.z < 0 Then
		FGetNormOri = 5
	Else
		FGetNormOri = 2
	End If

End Function





