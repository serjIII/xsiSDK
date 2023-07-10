'******************************************************************************
'
' File supervisor : Ludovick Michaud
' Date :
' © Copyright 2009 Autodesk, Inc.  All rights reserved.
'
' @doc
'
' @module	CopyMat.Vbs
'
'	Simple Copy Material Function a la 3.X
'******************************************************************************
CopyMat

Function CopyMat

'//Setting who's the receiver and the Transceiver ofthe new Material
set ReceiverElem = GetValue("SelectionList")
'//The Transmitter is set by a sinlge picking selection
set MasterElem = PickElement("object", "Pick Material", "Pick Material").Value("PickedElement")

'//This is actually where I do the CopyPaste of the new material if the Picking Selection was not cancelled
'//-> Right Click During the picking Session is actually to Cancel the Picking Session
if TypeName(MasterElem) = "Nothing" then
		LogMessage "The Copy Material was Cancelled" 	
	else
		for each elem in ReceiverElem
			CopyPaste MasterElem &".Material", , elem &".Material" , 2
		next
End if 

End Function
'//Bug Right Now CopyPaste (nor Copy nor paste Function does the job in Branch mode)