/////////////////////////////////////////////////////////////////////
//
// FX Paint Scripting Commands
//
// File:		fxscripts.js
// Supervisor:	glenf
// Date:		December 2003
//
/////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////
//
// FirstPaintShapeKeyProc
//
/////////////////////////////////////////////////////////////////////
function FirstPaintShapeKeyProc( in_shape )
{
	var newFrame, oKey;
	oKey = GetFirstPaintShapeKey( in_shape );
	if ( typeof( oKey ) != "undefined" )
	{
		newFrame = GetValue( oKey + ".time" );
		SetValue( "Project.Data.PlayControl.Current", newFrame );
	}
}


/////////////////////////////////////////////////////////////////////
//
// PrevPaintShapeKeyProc
//
/////////////////////////////////////////////////////////////////////
function PrevPaintShapeKeyProc( in_shape, in_frame )
{
	var newFrame, oKey;
	oKey = GetPrevPaintShapeKey( in_shape, in_frame );
	if ( typeof( oKey ) != "undefined" )
	{
		newFrame = GetValue( oKey + ".time" );
		SetValue( "Project.Data.PlayControl.Current", newFrame );
	}
}


/////////////////////////////////////////////////////////////////////
//
// ClosestPaintShapeKeyProc
//
/////////////////////////////////////////////////////////////////////
function ClosestPaintShapeKeyProc( in_shape, in_frame )
{
	var newFrame, oKey;
	oKey = GetClosestPaintShapeKey( in_shape, in_frame );
	if ( typeof( oKey ) != "undefined" )
	{
		newFrame = GetValue( oKey + ".time" );
		SetValue( "Project.Data.PlayControl.Current", newFrame );
	}
}


/////////////////////////////////////////////////////////////////////
//
// NextPaintShapeKeyProc
//
/////////////////////////////////////////////////////////////////////
function NextPaintShapeKeyProc( in_shape, in_frame )
{
	var newFrame, oKey;
	oKey = GetNextPaintShapeKey( in_shape, in_frame );
	if ( typeof( oKey ) != "undefined" )
	{
		newFrame = GetValue( oKey + ".time" );
		SetValue( "Project.Data.PlayControl.Current", newFrame );
	}
}


/////////////////////////////////////////////////////////////////////
//
// LastPaintShapeKeyProc
//
/////////////////////////////////////////////////////////////////////
function LastPaintShapeKeyProc( in_shape )
{
	var newFrame, oKey;
	oKey = GetLastPaintShapeKey( in_shape );
	if ( typeof( oKey ) != "undefined" )
	{
		newFrame = GetValue( oKey + ".time" );
		SetValue( "Project.Data.PlayControl.Current", newFrame );
	}
}


/////////////////////////////////////////////////////////////////////
//
// DeletePaintShapeKeyProc
//
/////////////////////////////////////////////////////////////////////
function DeletePaintShapeKeyProc( in_shape, in_frame )
{
	var newFrame, curFrame, oKey;
	oKey = GetClosestPaintShapeKey( in_shape, in_frame, oKey );
	if ( typeof( oKey ) != "undefined" )
	{
		newFrame = GetValue( oKey + ".time" );
		keyFrame = GetValue( "Project.Data.PlayControl.Current" );
		if ( Math.abs( newFrame - keyFrame ) < 1.0e-3 )
		{
			logmessage( "Deleting key: " + oKey );
			DeleteObj( oKey );
		}
	}
}


/////////////////////////////////////////////////////////////////////
//
// SavePaintShapeKeyProc
//
/////////////////////////////////////////////////////////////////////
function SavePaintShapeKeyProc( in_shape, io_frame )
{
	var keyFrame;

	//
	// Get key time from playcontrol
	//
	keyFrame = GetValue( "Project.Data.PlayControl.Key" );
		
	//
	// Save the Key
	//
	SavePaintShapeKey( in_shape, keyFrame );

	//
	// Set the current frame to keyframe (if they're different)
	//
	if ( io_frame != keyFrame )
	{
		io_frame = keyFrame;	// Note this does not work -- JScript doesn't allow output (or IO) args.
		SetValue( "Project.Data.PlayControl.Current", io_frame );
	}

}


/////////////////////////////////////////////////////////////////////
//
// PaintShapeManipToolProc
//
/////////////////////////////////////////////////////////////////////
function PaintShapeManipToolProc()
{
	//
	// Set the marking.
	//
	SetMarking( "PosX,PosY,SclX,SclY,PivX,PivY,RotZ" );

	//
	// Set the current tool to the select shape tool.
	//
	SetValue( "PaintTool.CurrentTool", 80 );
}
