'******************************************************************************
'
' File supervisor : Ludovick Michaud
' Date :
' © Copyright 2009 Autodesk, Inc.  All rights reserved.
'
' @doc
'
' @module	ShareMat.Vbs
'
'	Simple Share Material Function a la 3.X
'******************************************************************************
ShareMat

Function ShareMat

'//Setting who's the receiver and the Transceiver ofthe new Material
set ReceiverElem = GetValue("SelectionList")
'//The Transmitter is set by a sinlge picking selection
set MasterElem = PickElement("object", "Pick Material", "Pick Material").Value("PickedElement")

set ShareGroupName = CreateGroup("Shared_Mat_of_" & MasterElem, ReceiverElem)
'//This is actually where I do the CopyPaste of the new material if the Picking Selection was not cancelled
'//-> Right Click During the picking Session is actually to Cancel the Picking Session
if TypeName(MasterElem) = "Nothing" then
	LogMessage "The Share Material was Cancelled" 	
else
	CopyPaste MasterElem &".Material", , ShareGroupName, 2
	AddtoGroup ShareGroupName, MasterElem
End if

End Function
'//Bug Right Now CopyPaste (nor Copy nor paste Function does the job in Branch mode)