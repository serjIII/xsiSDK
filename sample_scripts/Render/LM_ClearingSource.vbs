'******************************************************************************
'
' File supervisor : Ludovick Michaud
' Date :
' © Copyright 2009 Autodesk, Inc.  All rights reserved.
'
' @doc
'
' @module	LM_ClearingSource.vbs
'
'******************************************************************************
'//Script to Clean unused Sources and Clips in a Scene

ImageCleaner
Function ImageCleaner

'//set some counter for info to user at the end
dim ClipCount, SourceCount
'//Resetting the Counters
ClipCount = 0
SourceCount = 0

'//Clear Clips First
set ClipList = EnumElements("Clips.Image")

if TypeName(ClipList) <> "Nothing" then
	For each elem in ClipList
		'//Need to bypass Scaling since it's not a Image Clip
		if elem <> "Clips.Scaling" then
			if EnumElements(elem, FALSE).count = 1 then
				deleteObj elem
				ClipCount = ClipCount + 1
			end if
		end if
	Next
end if


'//Clear Sources after			
set SourceList = EnumElements("Sources.Image")

if TypeName(SourceList) <> "Nothing" then
	For each elem in SourceList
		if EnumElements(elem, FALSE).count = 1 then
			DeleteObj elem
			SourceCount = SourceCount + 1
		end if
	Next
end if

'//
if SourceCount + ClipCount <> 0 then
	Logmessage SourceCount & " Sources and " & ClipCount & " Clips were deleted from this scene"
end if

end Function