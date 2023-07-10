'******************************************************************************
'
' File supervisor : Rejean Gagne
' Date : July 2001
' (c) Copyright 2001 Softimage
'
' $Archive:  $
' $Revision:  $  $Date:  $
' Checkin by: $Author:  $
'
' @doc
' @module	parameters.vbs | VB Script 
'
'******************************************************************************

option explicit
'******************************************************************************
' HELPER FUNCTIONS
'******************************************************************************

const cSelect = 0
const cMute	  = 1
const cUnMute = 2
const cToggle = 3
const cDelete = 4

const cBracketParams	= 0
const cRandomizeParams	= 1

const cCapture		= 0
const cCapturePlain = 1
const cRender		= 2

Dim g_InitialParamValues
Dim g_SnapshotParamMemory(10)
Dim g_RenderParamMemory(4)

Dim g_Timer1, g_Timer2

'******************************************************************************
' String Constants (used to translate)
'******************************************************************************
const IDS_SAMPLE_PARAM_VALUE_TITLE			= 1096


'------------------------------------------------------------------------------
' NAME:		FWizardDialog
'
' INPUT:	in_customparam				- custom param to inspect
' INPUT:	in_title					- dialog title
' RETURN:	vbOk | vbCancel	
'
' DESCRIPTION: Pop up a modal dialog to inspect custom parameter
'------------------------------------------------------------------------------
function FWizardDialog(in_customparam, in_title)
	On Error Resume Next
	InspectObj in_customparam,,in_title, siModal

	if Err.Number <> 0 then
		FWizardDialog = vbCancel
	else
		FWizardDialog = vbOk
	end if
end function


'------------------------------------------------------------------------------
' NAME:		GetParamRange
'
' INPUT:	in_param				- parameter for which we want the range
' OUTPUT:	out-min, out_max		- range (suggested range)
'
' DESCRIPTION: Just return the min/max range of the paran, this sub is needed
'			   because we have to do special cases for booleans and colors...
'------------------------------------------------------------------------------
sub GetParamRange( in_param, out_min, out_max )	
 
	if ( in_param.valuetype = 11 ) then ' for boolean range is 0 to 1
		out_min = 0
		out_max = 1
	else
		out_min = in_param.SuggestedMin
		out_max = in_param.SuggestedMax
	end if

end sub


'======================================================================

'------------------------------------------------------------------------------
' NAME:		RandomizeParamsProc
'
' INPUT:	in_params - list of parameters (typically the marked params)
'			in_perc - percentage of the UIRange we want to see random values in
'			in_relative - randomize relative to the current value?
'			in_seed 
'				- if = 0 then will always return a completely random value
'				- if < 0 will initialize the random number generator
'				- if > 1 (anything will do) gives you the next number in the sequence
'
' DESCRIPTION: Randomizes the given parameters
'------------------------------------------------------------------------------
sub RandomizeParamsProc( in_params, in_perc, in_relative, in_seed )

	Dim l_param, l_param_coll, l_rval, l_newval, l_range, l_adjrange, l_valbase, l_min, l_max

	'logmessage "RandomizeParamsProc  rel " & in_relative & " seed " & in_seed

	if ( in_params = "" ) then
		logmessage "No valid parameter marking selection"
		Err.Raise siErrCancelled
		Exit Sub
	end if

	' in_params contains the expanded list of marked parameters (ex: "cube.pset.p1,cube.pset.p2")
	' We need to convert this to a collection of OM Parameter objects as follows
	set l_param_coll = CreateObject("XSI.Collection")  
	l_param_coll.setastext( in_params )

	' See header for details
	if ( in_seed = 0 ) then
		Randomize
	elseif ( in_seed < 0 ) then
		rnd( in_seed )
		Randomize( -1 * in_seed )
	end if

	for each l_param in l_param_coll

		GetParamRange l_param, l_min, l_max

		' Divide the range in which the parameter can vary in two
		' because we will vary half the range both sides of a 'pivot' base value
		l_range = in_perc * (l_max - l_min)
		l_adjrange = l_range * 0.5

		'logmessage "> " & l_param & " current value " & l_param.value
		'logmessage "> type " & l_param.valuetype
		'logmessage "   min " & l_min & " max " & l_max & " range " & l_range

		' for boolean parameters we simply set to True or False based on the random value
		if ( l_param.valuetype = 11 ) then

			l_rval = rnd()
			l_param.Value = ( l_rval > 0.5 )

		else

			' Get a random value between -1 and 1
			l_rval = ( rnd() * 2 ) - 1

			' If relative then use the current value as the base for randomization
			' else the base around which we vary is the center of the UI range
			if ( in_relative ) then
				l_valbase = l_param.value
			else
				l_valbase =  (l_min + l_max) * 0.5
			end if

			' Compute the final new value
			l_newval = ( l_rval * l_adjrange ) + l_valbase

			'logmessage "   valbase " & l_valbase & " random val " & l_rval
			'logmessage "   l_adjrange " & l_adjrange & " l_newval " & l_newval

			' make sure the value we give remains within the UI Range
			if ( l_newval > l_min and l_newval < l_max ) then
				l_param.Value = l_newval
			elseif ( l_newval < l_min ) then
				l_param.Value = l_min
			else
				l_param.Value = l_max
			end if

			'logmessage " final value " & l_param.Value

		end if
	
	next

end sub


'------------------------------------------------------------------------------
' NAME:		CreateDisplayInfoFromMarkedParametersProc
'
' INPUT:	in_objs - list of objects on which we want to create a DisplaInfo pset
'			in_name - default name of the DisplayInfo pset
'			in_show - activate the visibility of the displayInfo for the output camera
'
' DESCRIPTION: Creates DisplayInfo pset on the given object that will contain the marked params
'------------------------------------------------------------------------------
function CreateDisplayInfoFromMarkedParametersProc( in_objs, in_name, in_show )

	Dim l_params, l_obj, l_infopset, i, l_psetcoll

	set l_psetcoll = CreateObject("XSI.Collection")

	'logmessage " CreateDisplayInfoFromMarkedParametersProc " & in_show
	l_params = getMarking()
	
	if typename(l_params) <> "Empty" then


		for each l_obj in in_objs

			' need to check first if there is already a displayInfo property
			' of that name

			' note: the double (0) at the end is because SIAddProp doesn't define a return value 
			' so it returns the implicit dictionary object (-Simon). Otherwize we'd receive an
			' Object instead of a proper parameterset
			On Error Resume Next
			set l_infopset = SIAddProp("Custom_parameter_list", l_obj, siNodePropagation, in_name)(0)(0)

			' If the above line didn't work, that is because the select item is not a 3Dobject
			' or a cluster so we cannot add the pset. In this case, add the pset on the scene root
			if typename( l_infopset ) = "Empty" then
				set l_infopset = SIAddProp("Custom_parameter_list", "Scene_Root", siNodePropagation, in_name)(0)(0)
			end if

			' add new pset to the returned collection
			l_psetcoll.Add l_infopset
		
			for i = 0 to UBound(l_params)				
				AddProxyParam l_infopset, l_obj & "." & l_params(i)
			next
		next

		' Now set the visibility of the displayInfo for the output camera
		SetValue "Camera.camvis.custominfo", in_show


	end if

	set CreateDisplayInfoFromMarkedParametersProc = l_psetcoll
end function


'------------------------------------------------------------------------------
' NAME:			PrepareSampleParamSnapshot	
' INPUT:		- in_capturemethod: cCapture, cCapturePlain or cRender
'				- in_size: size (width) of the capture (camera ratio is used for height)
'				- in_frame: frame at which we should do the capture
' DESCRIPTION:	Sets up capture options parameters (keeps copies of the current values)
'------------------------------------------------------------------------------
sub PrepareSampleParamSnapshot( in_capturemethod, in_size, in_frame )

	Dim l_ratio
	l_ratio = GetValue( "Camera.camera.aspect" )

	if ( CInt(in_capturemethod) = CInt(cCapture) or _
		 CInt(in_capturemethod) = CInt(cCapturePlain) ) then

		g_SnapshotParamMemory(0) = GetValue( "ViewportCapture.Padding" )
		g_SnapshotParamMemory(1) = GetValue( "ViewportCapture.IsMovie" )
		g_SnapshotParamMemory(2) = GetValue( "ViewportCapture.ImageWidth" )
		g_SnapshotParamMemory(3) = GetValue( "ViewportCapture.ImageHeight" )
		g_SnapshotParamMemory(4) = GetValue( "ViewportCapture.ImageScale" )
		g_SnapshotParamMemory(5) = GetValue( "ViewportCapture.Start" )
		g_SnapshotParamMemory(6) = GetValue( "ViewportCapture.End" )
		g_SnapshotParamMemory(7) = GetValue( "ViewportCapture.LaunchFlipbook" )
		g_SnapshotParamMemory(8) = GetValue( "ViewportCapture.Filename" )
		g_SnapshotParamMemory(9) = GetValue( "ViewportCapture.PixelRatio" )
		g_SnapshotParamMemory(10) = GetValue( "ViewportCapture.UserPixelRatio" )


		SetValue "ViewportCapture.Padding", "(fn).1(ext)"
		' ideally we'd use this padding but due to rendering padding that
		' is different, i cannot for now.
		'SetValue "ViewportCapture.Padding", "(fn)(ext)"
		SetValue "ViewportCapture.IsMovie", False
		SetValue "ViewportCapture.ImageWidth", in_size * l_ratio
		SetValue "ViewportCapture.ImageHeight", in_size
		SetValue "ViewportCapture.ImageScale", 1
		SetValue "ViewportCapture.Start", in_frame
		SetValue "ViewportCapture.End", in_frame
		SetValue "ViewportCapture.LaunchFlipbook", False
		SetValue "ViewportCapture.PixelRatio", 1
		SetValue "ViewportCapture.UserPixelRatio", True
		'SetValue "ViewportCapture.Filename", ""

	elseif ( CInt(in_capturemethod) = CInt(cRender) ) then

		g_RenderParamMemory(0) = GetValue( "Passes.Current.RenderOptions.ImageFormat" )
		g_RenderParamMemory(1) = GetValue( "Passes.Current.RenderOptions.CameraYRes" )
		g_RenderParamMemory(2) = GetValue( "Passes.Current.RenderOptions.CameraXRes" )
		g_RenderParamMemory(3) = GetValue( "Passes.Current.RenderOptions.ImageFileName" )
		g_RenderParamMemory(4) = GetValue( "Passes.Current.RenderOptions.ImageFramePadding" )

		SetValue "Passes.Current.RenderOptions.ImageFormat", "{32D3C212-0E3B-11CF-AFA9-00AA00629284}"
		SetValue "Passes.Current.RenderOptions.CameraYRes", in_size
		SetValue "Passes.Current.RenderOptions.CameraXRes", in_size * l_ratio
		SetValue "Passes.Current.RenderOptions.ImageFramePadding", 0
		'SetValue "Passes.Current.RenderOptions.ImageFileName", ""

	end if

	'g_Timer1 = timer

end sub

'------------------------------------------------------------------------------
' NAME:			ResetSampleParamSnapshot
' INPUT:		- in_capturemethod: cCapture, cCapturePlain or cRender		
' DESCRIPTION:	Resets the snapshot parameters to what they were before we messed with them
'------------------------------------------------------------------------------
sub ResetSampleParamSnapshot( in_capturemethod )

	if ( CInt(in_capturemethod) = CInt(cCapture) or _
		 CInt(in_capturemethod) = CInt(cCapturePlain) ) then

		SetValue "ViewportCapture.Padding",			g_SnapshotParamMemory(0)
		SetValue "ViewportCapture.IsMovie",			g_SnapshotParamMemory(1)
		SetValue "ViewportCapture.ImageWidth",		g_SnapshotParamMemory(2)
		SetValue "ViewportCapture.ImageHeight",		g_SnapshotParamMemory(3)
		SetValue "ViewportCapture.ImageScale",		g_SnapshotParamMemory(4)
		SetValue "ViewportCapture.Start",			g_SnapshotParamMemory(5)
		SetValue "ViewportCapture.End",				g_SnapshotParamMemory(6)
		SetValue "ViewportCapture.LaunchFlipbook",	g_SnapshotParamMemory(7)
		SetValue "ViewportCapture.Filename",		g_SnapshotParamMemory(8)
		SetValue "ViewportCapture.PixelRatio",		g_SnapshotParamMemory(9)
		SetValue "ViewportCapture.UserPixelRatio",	g_SnapshotParamMemory(10)

	elseif ( CInt(in_capturemethod) = CInt(cRender) ) then

		SetValue "Passes.Current.RenderOptions.ImageFormat",		g_RenderParamMemory(0)
		SetValue "Passes.Current.RenderOptions.CameraYRes",			g_RenderParamMemory(1)
		SetValue "Passes.Current.RenderOptions.CameraXRes",			g_RenderParamMemory(2)
		SetValue "Passes.Current.RenderOptions.ImageFileName",		g_RenderParamMemory(3)
		SetValue "Passes.Current.RenderOptions.ImageFramePadding",	g_RenderParamMemory(4)

	end if

end sub

'------------------------------------------------------------------------------
' NAME:			SampleParamSnapshot		
' INPUT:		- in_capturemethod: cCapture, cCapturePlain or cRender
'				- in_fpath: base file path + name - where we want to save the capture
'				- in_id: id of the capture		
' DESCRIPTION:	Takes an actual screen snapshot or render and saves in the specified file
'------------------------------------------------------------------------------
sub SampleParamSnapshot( in_capturemethod, in_fpath, in_id ) 

	Dim l_file

	if ( CInt(in_capturemethod) = CInt(cCapture) or _
		 CInt(in_capturemethod) = CInt(cCapturePlain) ) then

		l_file = in_fpath & in_id & ".jpg"
		SetValue "ViewportCapture.Filename", l_file
		CaptureViewport 2, 0

	elseif ( CInt(in_capturemethod) = CInt(cRender) ) then

		l_file = in_fpath & in_id
		SetValue "Passes.Current.RenderOptions.ImageFileName", l_file
		SIRenderPass ,,1,1

	else
		Refresh
	end if

	'g_Timer2 = timer
	'logmessage "Time required for sample " & in_id & ": " & g_Timer2 - g_Timer1 & " sec"
	'g_Timer1 = timer

end sub

'------------------------------------------------------------------------------
' NAME:			logarray		
' DESCRIPTION:	Utility debugging function, just logs the content of an array
'------------------------------------------------------------------------------
sub logarray( title, in_array )
	Dim str, i

	str = title & "["
	for i = 0 to UBound( in_array )
		str = str & in_array(i) & ","
	next
	str = str & "]"
	logmessage str
end sub


'------------------------------------------------------------------------------
' NAME:			applyarray		
' DESCRIPTION:	applies the values in the array to the given pset parameters
'------------------------------------------------------------------------------
sub applyarray( in_pset, in_array )
	Dim i, l_param, l_min, l_max

	for i = 0 to UBound( in_array )

		set l_param = in_pset.parameters.Item(i)

		GetParamRange l_param, l_min, l_max

		' make sure we remain within the physical parameter range
		if ( in_array(i) < l_min ) then
			l_param.value = l_min
		elseif ( in_array(i) > l_max ) then
			l_param.value = l_max
		else
			l_param.value = in_array(i)
		end if
	next

end sub

'------------------------------------------------------------------------------
' NAME:			combine
' INPUTS:		
'	- in_pset			pset for which we vary parameter values
'	- in_valarray		array of current parameter values
'	- in_minarray		array of the parameter's suggested min values
'	- in_maxarray		array of the parameter's suggested max values
'	- in_nstepsarray	array that says how many 'samples' of each param we want.
'						for example for a float we may want 5 samples, for a boolean
'						that will awlways be 2 samples only (true,false)
'						The number of samples we get in total is typically
'						nstep exponent the number of params (ex: 2*2*2 = 8 samples
'						for 3 parameters, 2 samples each)
'	- in_index			index of the parameter we are currently stepping through (start with 0)
'	- in_level			recursive depth (use 0 to start the recursion)
'	- in_size			size of the arrays (i.e. number of params)
'	- in_fpath			file path where we want to save screen snapshots or renders
'	- in_capturemethod	cCapture, cCapturePlain or cRender
'	- in_capsize		horizontal size of the capture/render
'	- in_frame			frame at which we want to do the capture
'	- in_retrieveresult	if True, it means we are running the function not to generate
'						snapshots but to recall a specific sample. We do not keep the
'						values of all samples we produce (could be a lot, and would
'						be slow to save presets for each), so we basically just redo
'						the whole process when we want to retrieve a given sample...
'	- in_resultid		which sample we want to retrieve values for
'	- in_oProgressBar	progress bar object, must be initialized already
'	- io_take			current incrementing count of parameter samples we have taken so far
'
' DESCRIPTION:	Recursive function that creates all of the combinations of
'				values in the given input array, each with the given number of steps
'------------------------------------------------------------------------------
function combine( in_pset, in_valarray, in_minarray, in_maxarray, in_nstepsarray, _
			 in_index, in_level, in_size, _
			 in_fpath, in_capturemethod, in_capsize, _
			 in_frame, in_retrieveresult, in_resultid, in_oProgressBar, io_take )

	combine = True

	'logmessage "combine " & in_index &","& in_level &","& in_size
	if ( in_level > in_size ) then
		exit function
	end if

	if ( in_retrieveresult and io_take >= in_resultid) then
		exit function
	end if

	Dim new_valarray, l_val, l_param, l_nsteps, l_valstep, i, l_file, l_ok
	
	new_valarray = in_valarray

	'logarray "in  ", in_valarray
	'logarray "new ", new_valarray

	l_nsteps = in_nstepsarray(in_index)
	l_valstep = (in_maxarray(in_index) - in_minarray(in_index)) / ( l_nsteps - 1 )
	l_val = in_minarray(in_index)

	'logmessage "about to loop [" & in_level & "]" & l_nsteps & "," & l_valstep
	for i = 0 to l_nsteps - 1

		if ( not in_retrieveresult ) then
			if in_oProgressBar.CancelPressed then
				'logmessage " CANCELED"
				combine = False
				exit function
			end if
		end if

	'logmessage " i " & i & "[" & in_level & "]----------------"

		new_valarray(in_index) = l_val
		
		if ( in_level = in_size ) then

			io_take = io_take + 1

			if ( in_retrieveresult ) then
				if ( io_take = in_resultid ) then
					applyarray in_pset, new_valarray
					exit function
				end if
			else
				'logarray "loop", new_valarray
				applyarray in_pset, new_valarray

				'logmessage " ongoing nb of results " & io_take

				SampleParamSnapshot in_capturemethod, in_fpath, io_take

				in_oProgressBar.Value = io_take
				in_oProgressBar.StatusText = "Sample " & io_take

			end if 
		end if
		
		if ( in_level < in_size ) then
			l_ok = combine( in_pset, new_valarray, in_minarray, in_maxarray, in_nstepsarray, _
			        in_index+1, in_level+1, in_size, _
					in_fpath, in_capturemethod, in_capsize, in_frame, _
					in_retrieveresult, in_resultid, in_oProgressBar, io_take )

			if ( l_ok = False ) then
				combine = False
				exit function
			end if
		end if

		l_val = l_val + l_valstep

		'logmessage " level [" & in_level & "]" & i & "," & l_val
	next

	combine = True
'logmessage "done combine " & in_index &","& in_level &","& in_size
	
end function




'------------------------------------------------------------------------------
' NAME:			SampleParamValuesProc
' INPUTS:
'	- in_objs
'	- in_method
'	- in_samples
'	- in_perc
'	- in_relative
'	- in_seed
'	- in_capturemethod
'	- in_capname
'	- in_capsize
'	- in_retreive_result
'	- in_resultid
' DESCRIPTION:	Main function that generates parameter samples
'------------------------------------------------------------------------------
function SampleParamValuesProc( in_objs, in_method, in_samples, in_perc, in_relative, in_seed, _
					in_capturemethod, in_capname, in_capsize, in_retreive_result, in_resultid )

	Dim l_fpath,l_frame, l_nbtakes, i, takeid, l_testnbtakes, l_file, l_psets, l_pset, l_doBracket, l_size, l_nbresults, l_seed

	Dim l_displayparams, l_param, l_initialvalarray, l_range, l_min, l_max
	Dim l_oProgressBar

'logmessage " SampleParamValuesProc , method = [" & in_method & "] samples[" & in_samples & "][" & in_capname & "]"
'logmessage " SampleParamValuesProc , seed = [" & in_seed
'logmessage " SampleParamValuesProc , retrieve = [" & in_retreive_result
'logmessage " SampleParamValuesProc , retrieve id = [" & in_resultid
'logmessage " SampleParamValuesProc , in_capturemethod = [" & in_capturemethod

	SampleParamValuesProc = 0

	l_displayparams = True
	if ( CInt(in_capturemethod) <> CInt(cCapture) ) then
		l_displayparams = False
	end if

	' if we do absolute sampling, let's do it with the 100% range
	if ( not in_relative ) then
		in_perc = 1.0
	end if

	' create a temporary displayinfo pset to take a snapshot of the values
	set l_psets = CreateDisplayInfo( in_objs, "DisplayInfoBracketParams", l_displayparams )
	set l_pset = l_psets(0)

	l_fpath = in_capname
	l_frame = GetValue( "PlayControl.Current" )
	l_nbtakes = in_samples
	l_doBracket = True


	'-------- Preparation ----------------------------------------------------------------

	PrepareSampleParamSnapshot in_capturemethod, in_capsize, l_frame

	' Take a snapshot of the current values of all marked parameters
	l_size = l_pset.parameters.count - 1

	if ( in_retreive_result ) then
		Redim l_initialvalarray(l_size)
		
		for  i = 0 to l_size

			set l_param = l_pset.Parameters.Item(i)
			l_param.value = g_InitialParamValues(i)
			l_initialvalarray(i) = g_InitialParamValues(i)

		next
	else
		Redim l_initialvalarray(l_size)
		Redim g_InitialParamValues(l_size)

		l_testnbtakes = 1

		for  i = 0 to l_size

			set l_param = l_pset.Parameters.Item(i)
			l_initialvalarray(i)	= l_param.value
			g_InitialParamValues(i) = l_param.value

			if ( l_param.valuetype = 11 ) then
				l_testnbtakes = l_testnbtakes * 2
			else
				l_testnbtakes = l_testnbtakes * in_samples
			end if
			
		next

'logmessage " about to get the progress bar"
		set l_oProgressBar = XSIUIToolkit.ProgressBar
'logmessage " got the progress bar"
	end if


	'logmessage " predicting nb of takes " & l_testnbtakes

	l_seed = -1 * in_seed

	'-------- PARAMETER BRACKETING -------------------------------------------------------
	if ( in_method = cBracketParams ) then

		' Create an array with as many entries as we have parameters to bracket
		dim l_valarray, l_minarray, l_maxarray, l_nstepsarray

		Redim l_valarray(l_size)
		Redim l_minarray(l_size)
		Redim l_maxarray(l_size)
		Redim l_nstepsarray(l_size)

		for  i = 0 to l_size

			set l_param = l_pset.Parameters.Item(i)
			'logmessage "param " & l_param & "," & l_param.SuggestedMin &","& l_param.SuggestedMax

			GetParamRange l_param, l_min, l_max

			if ( in_relative ) then
				' set the sampling range to be half the percentage of the overall range both side of the current va;ue
				l_range = l_max - l_min
				l_minarray( i ) = l_param.value - (l_range * in_perc * 0.5)
				l_maxarray( i ) = l_param.value + (l_range * in_perc * 0.5)

				'logmessage " relative " & in_perc & " range " & l_range
				'logmessage " value " & l_param.value & " min " & l_minarray( i ) & " max " & l_maxarray( i )

				if l_minarray( i ) < l_min then
					l_minarray( i ) = l_min
				end if
				if l_maxarray( i ) > l_max then
					l_maxarray( i ) = l_max
				end if
			else	
				l_minarray( i ) = l_min
				l_maxarray( i ) = l_max
			end if

			l_valarray(i)		= 0
			l_nstepsarray( i )	= in_samples

			if ( l_param.valuetype = 11 ) then  ' for boolean params, take only 2 samples
				l_nstepsarray( i )	= 2
			end if

		next
		'logarray "init", l_valarray

		if ( not in_retreive_result ) then
			l_oProgressBar.Minimum = 1
			l_oProgressBar.Maximum = l_testnbtakes
			l_oProgressBar.Caption = "Generating Bracket Samples"
			l_oProgressBar.Visible = True
		end if

		i = 0
		combine l_pset, l_valarray, l_minarray, l_maxarray, l_nstepsarray, 0, 0, _
				l_size, l_fpath, in_capturemethod, in_capsize, l_frame, _
				in_retreive_result, in_resultid, l_oProgressBar, i

		l_nbtakes = i


	'-------- PARAMETER RANDOMIZE -------------------------------------------------------
	else  ' in_method = cRandomizeParams

		if ( not in_retreive_result ) then
			l_oProgressBar.Minimum = 1
			l_oProgressBar.Maximum = l_nbtakes
			l_oProgressBar.Caption = "Generating Random Samples"
			l_oProgressBar.Visible = True
		end if

		for takeid = 1 to l_nbtakes

			RandomizeParameters , in_perc, in_relative, l_seed
			l_seed = 1

			' if we are retreiving a value then we stop once
			' we reach the take id we were looking for
			if ( in_retreive_result and takeid = in_resultid ) then
				exit for
			end if

			if ( not in_retreive_result ) then
				if l_oProgressBar.CancelPressed then
					exit for
				end if

				SampleParamSnapshot in_capturemethod, l_fpath, takeid

				l_oProgressBar.Value = takeid
				l_oProgressBar.StatusText = "Sample " & takeid
			end if

			' Reset the parameter values that they were before 
			' so the next take of random number starts from these
			' values, otherwize values are gradually shifting far
			' away from the initial set.

			for  i = 0 to l_size
				set l_param = l_pset.Parameters.Item(i)
				l_param.value = l_initialvalarray( i )
			next

		next

		' set the actual number of takes, in case progress was cancaled before the end
		l_nbtakes = takeid  - 1

	end if

	'-------- Cleanup ----------------------------------------------------------------

	' Reset the parameter values that they were before unless of course
	' what we want is to retrieve a particular value set
	if ( not in_retreive_result ) then

		for  i = 0 to l_size
			set l_param = l_pset.Parameters.Item(i)
			l_param.value = l_initialvalarray( i )
		next

	end if

	ResetSampleParamSnapshot in_capturemethod

	' Delete the displayinfo psets we have created
	for each l_pset in l_psets

		' Issue : DeleteObj doesn't seem to work properly on a custom pset that contains
		' proxies of material parameters (ex: "Material.Phong.ambient.blue")
		'logmessage l_pset
		'logmessage typename(l_pset)
		'for each l_param in l_pset.parameters
		'	logmessage l_param
		'	SetMarking l_param
		'	RemoveProxyParam
		'next

		On Error Resume Next
		DeleteObj l_pset
	next


	SampleParamValuesProc = l_nbtakes

end function


'------------------------------------------------------------------------------
' NAME:			GetInputAndSampleParamValuesProc	
' DESCRIPTION:	UI front end that allows to do parameter sampling/bracketing
'				from XSI user interface. This is not called when you use the feature
'				from the netview script page.
'------------------------------------------------------------------------------
function GetInputAndSampleParamValuesProc( in_objs, in_samplingmethod, in_samples, in_perc, in_relative, in_seed, _
					in_capmethod, in_capname, in_capsize, in_retreive_result, in_resultid  )

	Dim l_GeneratePset, l_Pset, l_BracketPset
	Dim	l_samplesr, l_samplesb, l_marking, l_objs
	Dim l_capname, l_cappath, l_nbresults

	GetInputAndSampleParamValuesProc = 0

	set	l_objs = SIFilter( in_objs, siObjectFilter )

	' Make Sure we have a valid selection
	if IsEmpty(l_objs) Or TypeName(l_objs) = "Nothing" Then
		logmessage "Please select an object first", siError
		Err.Raise siErrCancelled
		Exit function
	end if

	' Make sure something is marked
	l_marking = getMarking()			
	if typename(l_marking) = "Empty" Then
		logmessage "Please mark some parameters first", siError
		Err.Raise siErrCancelled
		Exit function
	end if

	' Keep this around so it's easier to regenerate a new pset/preset if needed
	l_GeneratePset = FALSE

	if (l_GeneratePset = TRUE) then

		'Build the Dialog
		Set l_Pset = SIAddProp("Custom_parameter_list", "Scene_Root", , "Parameter Bracketing").value("Value")
		l_BracketPset = "Scene_Root." & l_Pset

		SIAddCustomParameter l_Pset, "SamplingMethod",	siInt2,		0, 0, 1, , siPersistable+siSilent, 0, 1, "Sampling Method", "Sampling Method"
		SIAddCustomParameter l_Pset, "SamplesRandom",	siInt2,		50, 1, 10000, , siPersistable+siSilent, 1, 100, "Samples Random Total", "No of Samples Total"
		SIAddCustomParameter l_Pset, "SamplesBracket",	siInt2,		3, 1, 10000, , siPersistable+siSilent, 1, 10, "Samples Bracket per Param", "No of Samples Bracket per Param"
		SIAddCustomParameter l_Pset, "Seed",			siInt2,		8457, 1, 10000, , siPersistable+siSilent, 1, 100, "Seed", "Seed"
		SIAddCustomParameter l_Pset, "Perc",			siDouble,	0.25, 0, 1, , siPersistable+siSilent, 0, 1, "Perc", "Perc"
		SIAddCustomParameter l_Pset, "Relative",		siBool,		FALSE, , , , siPersistable+siSilent, , ,"", "" 
		SIAddCustomParameter l_Pset, "CaptureMethod",	siInt2,		0, 0, 3, , siPersistable+siSilent, 0, 3,"Capture", "Capture" 
		SIAddCustomParameter l_Pset, "CaptureSize",		siInt2,		100, 1, 1000, , siPersistable+siSilent, 1, 1000, "", ""
		SIAddCustomParameter l_Pset, "CaptureName",		siString,	"sample", 0, 1, , siPersistable+siSilent, 0, 1, "", ""
		SIAddCustomParameter l_Pset, "CapturePath",		siString,	"C:\Temp\", 0, 1, , siPersistable+siSilent, 0, 1, "", ""

	Else
		' We have a preset already for this custom pset, for which we have defined a SPDL file
		Set l_Pset = SIAddProp("SampleParamValues", "Scene_Root", , "Sample Parameter Values").value("Value")
		l_BracketPset = "Scene_Root." & l_Pset

		' Initialize with the input values
		SetValue l_BracketPset & ".SamplingMethod", in_samplingmethod
		SetValue l_BracketPset & ".SamplesRandom", 50
		SetValue l_BracketPset & ".SamplesBracket", 3
		SetValue l_BracketPset & ".Seed", in_seed
		SetValue l_BracketPset & ".Perc", in_perc
		SetValue l_BracketPset & ".Relative", in_relative
		SetValue l_BracketPset & ".CaptureMethod", in_capmethod
		SetValue l_BracketPset & ".CaptureSize", in_capsize
		SetValue l_BracketPset & ".CaptureName", "sample"
		SetValue l_BracketPset & ".CapturePath", "C:\Temp\"
	End if

	If FWizardDialog(l_BracketPset,XSIUtils.Translate( IDS_SAMPLE_PARAM_VALUE_TITLE, "XSISCRIPTS" )) = vbOk Then

		' Read the parameters of the property page
		in_samplingmethod	= GetValue( l_BracketPset & ".SamplingMethod")
		l_samplesr			= GetValue( l_BracketPset & ".SamplesRandom")
		l_samplesb			= GetValue( l_BracketPset & ".SamplesBracket")
		in_seed				= GetValue( l_BracketPset & ".Seed")
		in_perc				= GetValue( l_BracketPset & ".Perc")
		in_relative			= GetValue( l_BracketPset & ".Relative")
		in_capmethod		= GetValue( l_BracketPset & ".CaptureMethod") 
		in_capsize			= GetValue( l_BracketPset & ".CaptureSize")
		l_capname			= GetValue( l_BracketPset & ".CaptureName")
		l_cappath			= GetValue( l_BracketPset & ".CapturePath")

		in_capname = l_cappath & l_capname
		if ( in_samplingmethod = 0) then
			in_samples = l_samplesb
		else
			in_samples = l_samplesr
		end if

		l_nbresults = SampleParamValuesProc( l_objs, in_samplingmethod, in_samples, in_perc, in_relative, _
											in_seed,  in_capmethod, in_capname, in_capsize, 0, 0 )

		' Delete the pset
		DeleteObj l_Pset
	Else
		Err.Raise siErrCancelled
	End If

	GetInputAndSampleParamValuesProc = l_nbresults

end function

'------------------------------------------------------------------------------
' NAME :		SetKeyableAttributesProc
'
' INPUT :		in_params - list of parameters
'				in_attrib - 
'
' DESCRIPTION :	Applies the input keyable attribute flag to the input list
'				of parameters.  It does this by setting/clearing the
'				appropriate capability bit(s).
'------------------------------------------------------------------------------
Sub SetKeyableAttributesProc( in_objects, io_params, in_attrib )

	Dim l_obj_coll, l_param_coll, l_param, l_caps, l_marking

	If ( IsEmpty( in_objects ) Or TypeName( in_objects ) = "Nothing" ) Then
		logmessage "No valid objects on input list"
		Err.Raise siErrCancelled
		Exit Sub
	End If

	' First create a xsi collection object out of the input objects
	Set l_obj_coll = CreateObject( "XSI.Collection" )
	l_obj_coll.setastext( in_objects )

	' If we weren't given any input params we'll use the marking string
	If ( io_params = "" ) Then
		l_marking = GetMarking()
		If ( Not IsEmpty( l_marking ) ) Then
			io_params = Join( l_marking, "," )
		End If
	End If

	' Then get the subset of that collection based on the input params
	Set l_param_coll = l_obj_coll.FindObjectsByMarkingAndCapabilities( io_params )

	For Each l_param In l_param_coll
		'Logmessage "Param : " & l_param.Name & ", " & l_param.Type
		If ( l_param.IsClassOf( siParameterID ) ) Then
			l_caps = l_param.Capabilities

			Select Case in_attrib
				Case siKeyableAttributeClear
					' Clear both the keyable and non-keyable visible cap bits
					'Logmessage "Clear the keyable and non-keyable visible cap bits"
					l_param.SetCapabilityFlag siKeyable Or siNonKeyableVisible, FALSE

				Case siKeyableAttributeKeyable
					' Clear the non-keyable visible bit and set the keyable bit
					'Logmessage "Clear the non-keyable visible and setting the keyable cap bits"
					If ( l_caps And siNonKeyableVisible ) Then
						l_param.SetCapabilityFlag siNonKeyableVisible, FALSE
					End If
					l_param.SetCapabilityFlag siKeyable, TRUE

				Case siKeyableAttributeNonKeyableVisible
					' Clear the keyable bit and set the non-keyable visible bit
					'Logmessage "Clear the keyable and setting the non-keyable visible cap bits"
					If ( l_caps And siKeyable ) Then
						l_param.SetCapabilityFlag siKeyable, FALSE
					End If
					l_param.SetCapabilityFlag siNonKeyableVisible, TRUE

				Case Else
					Logmessage "Invalid input attribute"
					Err.Raise siErrCancelled
					Exit Sub
			End Select
		End If
	Next

End Sub

