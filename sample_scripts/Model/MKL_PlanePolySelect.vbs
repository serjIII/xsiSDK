'------------------------------------------------------------------------------
'	PolyPlaneSelect.vbs
'	DESC: Select all polygon facing one direction
'	AUTHOR: Martin-Karl Lefrancois
'			November, 2000
'------------------------------------------------------------------------------
Option Explicit 

Dim XSIDial, Plane, Combo
Set XSIDial = createobject("XSIDial.XSIDialog")

Combo = Array("Right","Top", "Front","Left","Bottom","Back")
Plane = XSIDial.Combo( "Select the current plane", Combo)

if Plane > 0 then
Dim Tolerance
Tolerance = InputBox("Tolerance", ,0.3) 
PolyPlaneSelect Plane, Tolerance
end if

Sub PolyPlaneSelect( inPlane, inTolerance )
	Dim lGeo, lSel, lSelPoly, bFirst
	Dim myNor, i, aNormal, lOri, lItem, lObj
	
	Logmessage "Try to select polygons facing plane: " & inPlane
	
	bFirst = true
	
	'Get the Selected object 
	Set lSel = Selection
	
	'We are not sure the 	
    For Each lItem In lSel
        Set lObj = lItem
        Exit For
    Next
    
    'Trick to get the X3DObject
    If TypeName(lObj) = "CollectionItem" Then
        Set lObj  = ActiveProject.ActiveScene.Root.FindChildren(lObj.name)
        Set lSel = lObj(0)
        
    Else
    	Set lSel = lObj
    End If
 
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
		
	'The Normal of the polygon
	Set myNor = CreateObject("Sumatra\Scripting\Math\SIVector3")

LogMessage "Number of faces: " & lGeo.Facets.Count
	'Get the polygons
	For i=0 to lGeo.Facets.Count -1
		'Get polygon normal
		aNormal = lGeo.Facets.NormalArray
		myNor.Set aNormal(0,i),aNormal(1,i),aNormal(2,i)
		'LogMessage "Normal: " & myNor.x & " | " & myNor.y & " | " & myNor.z   

		' 0=x 1=y 2=z 3=-x, 4=-y 5=-z
		If FGetNormOri(myNor, inPlane, inTolerance) Then
			'LogMessage "Found"
			If bFirst = true Then
				lSelPoly = i
				bFirst = false
			Else
				lSelPoly = lSelPoly & "," & i
			End If
			
		End If 
	 Next
	
	'Do the Selection
	If lSelPoly <> "" Then
		SelectGeometryComponents lSel & ".poly[" & lSelPoly & "]"		
	End If
	
End Sub 

'------------------------------------------------------------------------------
' DESCRIPTION: Return the orientation of the normal 0=x 1=y .. 3=-x, 4=-y
'------------------------------------------------------------------------------
Function FGetNormOri(i_Norm, i_Plane, i_Tol)
	dim lVect, lDot
	Set lVect = CreateObject("Sumatra\Scripting\Math\SIVector3")
	
	Select Case i_Plane
	case 0
		lVect.set 1,0,0
	case 1
		lVect.set 0,1,0
	case 2
		lVect.set 0,0,1
	case 3
		lVect.set -1,0,0
	case 4
		lVect.set 0,-1,0
	case 5
		lVect.set 0,0,-1
	end Select
		
	lDot = i_Norm.dot(lVect)
	
	if lDot-(1-i_Tol) > 0 then
		FGetNormOri = 1
	else
		FGetNormOri = 0
	end if

End Function


