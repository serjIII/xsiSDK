'-------------------------------------------------------------
' AddNulltoPoint.vbs
' Will add Nulls to all points of the selected object
' This is mostly useful for Curves, so you can animate them
' with a few nulls, instead of shapes.
' 
'
' -Olivier Ozoux
'-------------------------------------------------------------


'Get the Current Selection
set SelList = GetValue("SelectionList")
if SelList.count > 0 then
	for each myObj in SelList
		AddNullToPoint myObj
	next
else
	LogMessage "No Objects Selected"
end if


' Create a Cluster for each point and add a ClusterCenter Null
Sub AddNullToPoint( InObj )
	Dim Obj, Points, nbPoints, Pos, myNull	
	Set Obj = InObj.obj
	If NOT TypeName(Obj) = "Nothing" Then 
		'create some objects for the Points and Position
		Set Points = Obj.Geometry0D
		Set Pos = CreateObject("Sumatra\Scripting\Math\SIVector3")
		nbPoints = Obj.nb0d

		For i=0 to nbPoints - 1
			'Get the position
			Points.Position i, Pos
			
			'Create a Null child of the curve to get the same local space.
			set myNull = SIGetPrim( "Null", "Point_" & i +1, InObj).value("Value")
			Translate myNull, Pos.X, Pos.Y, Pos.Z, FALSE, 6
			
			'Create a 1 point cluster			
			'Damn! I need to use a different format for each geometry type
			LogMessage myObj.type
			Select Case myObj.type
				Case "polymsh"
					set myCls = CreateCluster(myObj &","& InObj & ".pnt[" & i & "]" )
					SetValue myCls & ".Name", "Cls_" & i + 1
				Case "crvlist"
					set myCls = CreateCluster(myObj &","& InObj & ".pnt[" & i & "]" )
					SetValue myCls & ".Name", "Cls_" & i + 1
				Case "lattice"
					subX = GetValue( myObj & ".lattice.subdivx") + 1
					subY = GetValue( myObj & ".lattice.subdivy") + 1
					subZ = GetValue( myObj & ".lattice.subdivz") + 1
					dimX = Int( i / (subZ * subY))
					dimY = Int( (i - (dimX * subZ * subY)) / subZ   )
					dimZ = i - ((dimX*subZ*subY) + (dimY*subZ) )
					coord = "("& dimX &","& dimY &","& dimZ & ")"
					set myCls = CreateCluster(myObj &","& InObj & ".pnt[" & coord & "]" )
					SetValue myCls & ".Name", "Cls_" & i + 1
				Case "surfmsh"
					set myCls = CreateCluster(myObj &","& InObj & ".pnt[" & i & "]" )
					SetValue myCls & ".Name", "Cls_" & i + 1

				Case else
					exit sub
			End Select

			'Create a Cluster Center
			ApplyOperator "ClusterCenter", myCls & ";" & myNull , 0
			'ApplyCns "ObjectToCluster", myNull, myCls
		Next
	Else
		LogMessage InObj & " doesn't have any points!"
	End If 
End Sub
