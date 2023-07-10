// CustomPrimitives example
//
//	Copyright 2012 Autodesk, Inc.  All rights reserved.  
//	Use of this software is subject to the terms of the Autodesk license agreement 
//	provided at the time of installation or download, or which otherwise accompanies 
//	this software in either electronic or hard copy form.   
//
//	File:	CustomQuad.cpp
//
//	Description:
//
//		Defines a Quadrilateral primitive that is defined by 4 points on the local XY
//		plane.
//

#ifndef linux
#define NOMINMAX
#define WIN32_LEAN_AND_MEAN
#include <windows.h> // Needed for OpenGL on windows
#endif
#include <GL/gl.h>

#include <xsi_application.h>
#include <xsi_context.h>
#include <xsi_pluginregistrar.h>
#include <xsi_status.h>
#include <xsi_menu.h>
#include <xsi_customprimitive.h>
#include <xsi_factory.h>
#include <xsi_parameter.h>

using namespace XSI; 

// Defines
//

// Script names (cannot have spaces)
//
#define kPt1XScriptName	L"Point1X"
#define kPt1YScriptName	L"Point1Y"
#define kPt2XScriptName	L"Point2X"
#define kPt2YScriptName	L"Point2Y"
#define kPt3XScriptName	L"Point3X"
#define kPt3YScriptName	L"Point3Y"
#define kPt4XScriptName	L"Point4X"
#define kPt4YScriptName	L"Point4Y"

// UI names
//
#define kPt1XUIName	L"Point 1 X"
#define kPt1YUIName	L"Point 1 Y"
#define kPt2XUIName	L"Point 2 X"
#define kPt2YUIName	L"Point 2 Y"
#define kPt3XUIName	L"Point 3 X"
#define kPt3YUIName	L"Point 3 Y"
#define kPt4XUIName	L"Point 4 X"
#define kPt4YUIName	L"Point 4 Y"

// Default values
//
#define kPt1XDef	-1.0
#define kPt1YDef	0.0

#define kPt2XDef	0.0
#define kPt2YDef	-1.0

#define kPt3XDef	1.0
#define kPt3YDef	0.0

#define kPt4XDef	0.0
#define kPt4YDef	1.0

// Hard min/max
//
#define kXMin	-10000
#define kXMax	10000
#define kYMin	-10000
#define kYMax	10000

// Soft min/max (UI caps)
//
#define kXSoftMin	-100
#define kXSoftMax	100
#define kYSoftMin	-100
#define kYSoftMax	100

#define kParamCaps	(siAnimatable | siPersistable)

SICALLBACK Quad_Define( const CRef& in_ref )
{
	Context in_ctxt( in_ref );
	CustomPrimitive in_prim( in_ctxt.GetSource() );
	if( in_prim.IsValid() )
	{
		Factory l_fact = Application().GetFactory();
		CRef l_pt1XDef = l_fact.CreateParamDef( kPt1XScriptName, CValue::siDouble, kParamCaps, kPt1XUIName, L"", kPt1XDef, kXMin, kXMax, kXSoftMin, kXSoftMax );
		CRef l_pt1YDef = l_fact.CreateParamDef( kPt1YScriptName, CValue::siDouble, kParamCaps, kPt1YUIName, L"", kPt1YDef, kYMin, kYMax, kYSoftMin, kYSoftMax );

		CRef l_pt2XDef = l_fact.CreateParamDef( kPt2XScriptName, CValue::siDouble, kParamCaps, kPt2XUIName, L"", kPt2XDef, kXMin, kXMax, kXSoftMin, kXSoftMax );
		CRef l_pt2YDef = l_fact.CreateParamDef( kPt2YScriptName, CValue::siDouble, kParamCaps, kPt2YUIName, L"", kPt2YDef, kYMin, kYMax, kYSoftMin, kYSoftMax );

		CRef l_pt3XDef = l_fact.CreateParamDef( kPt3XScriptName, CValue::siDouble, kParamCaps, kPt3XUIName, L"", kPt3XDef, kXMin, kXMax, kXSoftMin, kXSoftMax );
		CRef l_pt3YDef = l_fact.CreateParamDef( kPt3YScriptName, CValue::siDouble, kParamCaps, kPt3YUIName, L"", kPt3YDef, kYMin, kYMax, kYSoftMin, kYSoftMax );

		CRef l_pt4XDef = l_fact.CreateParamDef( kPt4XScriptName, CValue::siDouble, kParamCaps, kPt4XUIName, L"", kPt4XDef, kXMin, kXMax, kXSoftMin, kXSoftMax );
		CRef l_pt4YDef = l_fact.CreateParamDef( kPt4YScriptName, CValue::siDouble, kParamCaps, kPt4YUIName, L"", kPt4YDef, kYMin, kYMax, kYSoftMin, kYSoftMax );

		Parameter l_pt1X;
		Parameter l_pt1Y;
		Parameter l_pt2X;
		Parameter l_pt2Y;
		Parameter l_pt3X;
		Parameter l_pt3Y;
		Parameter l_pt4X;
		Parameter l_pt4Y;
		in_prim.AddParameter( l_pt1XDef, l_pt1X );
		in_prim.AddParameter( l_pt1YDef, l_pt1Y );
		in_prim.AddParameter( l_pt2XDef, l_pt2X );
		in_prim.AddParameter( l_pt2YDef, l_pt2Y );
		in_prim.AddParameter( l_pt3XDef, l_pt3X );
		in_prim.AddParameter( l_pt3YDef, l_pt3Y );
		in_prim.AddParameter( l_pt4XDef, l_pt4X );
		in_prim.AddParameter( l_pt4YDef, l_pt4Y );
	}
	return CStatus::OK;
}

SICALLBACK Quad_Draw( const CRef& in_ref )
{
	Context in_ctxt( in_ref );
	CustomPrimitive in_prim( in_ctxt.GetSource() );
	if( !in_prim.IsValid() )
	{
		return CStatus::Fail;
	}

    // Use GetParameters() when there are multiple parameters to optimize
    // access and augment performance.

    CParameterRefArray& params = in_prim.GetParameters();

	double QuadPt1X = params.GetValue( kPt1XScriptName );
	double QuadPt1Y = params.GetValue( kPt1YScriptName );

	double QuadPt2X = params.GetValue( kPt2XScriptName );
	double QuadPt2Y = params.GetValue( kPt2YScriptName );

	double QuadPt3X = params.GetValue( kPt3XScriptName );
	double QuadPt3Y = params.GetValue( kPt3YScriptName );

	double QuadPt4X = params.GetValue( kPt4XScriptName );
	double QuadPt4Y = params.GetValue( kPt4YScriptName );

    // Note: the custom primitive API doesn't protect the OpenGL state
    //       for performance reasons. It is the duty of the custom primitive
    //       to leave the OpenGL state as it was on entry.

	// Draw Quad
	//
	GLdouble l_Verts[4][3];

	l_Verts[0][0] = QuadPt1X;
	l_Verts[0][1] = QuadPt1Y;
	l_Verts[0][2] = 0.0;

	l_Verts[1][0] = QuadPt2X;
	l_Verts[1][1] = QuadPt2Y;
	l_Verts[1][2] = 0.0;

	l_Verts[2][0] = QuadPt3X;
	l_Verts[2][1] = QuadPt3Y;
	l_Verts[2][2] = 0.0;

	l_Verts[3][0] = QuadPt4X;
	l_Verts[3][1] = QuadPt4Y;
	l_Verts[3][2] = 0.0;

	::glBegin( GL_LINE_STRIP );
	::glVertex3dv( l_Verts[0] );
	::glVertex3dv( l_Verts[1] );
	::glVertex3dv( l_Verts[2] );
	::glVertex3dv( l_Verts[3] );
	::glVertex3dv( l_Verts[0] );
	::glEnd();

	return CStatus::OK;
}

SICALLBACK Quad_BoundingBox( const CRef& in_ref )
{
	Context in_ctxt( in_ref );
	CustomPrimitive in_prim( in_ctxt.GetSource() );
	if( !in_prim.IsValid() )
	{
		return CStatus::Fail;
	}

    // Use GetParameters() when there are multiple parameters to optimize
    // access and augment performance.

    CParameterRefArray& params = in_prim.GetParameters();

	double QuadPt1X = params.GetValue( kPt1XScriptName );
	double QuadPt1Y = params.GetValue( kPt1YScriptName );

	double QuadPt2X = params.GetValue( kPt2XScriptName );
	double QuadPt2Y = params.GetValue( kPt2YScriptName );

	double QuadPt3X = params.GetValue( kPt3XScriptName );
	double QuadPt3Y = params.GetValue( kPt3YScriptName );

	double QuadPt4X = params.GetValue( kPt4XScriptName );
	double QuadPt4Y = params.GetValue( kPt4YScriptName );

	double lboundX = QuadPt1X;
	double lboundY = QuadPt1Y;
	double uboundX = QuadPt1X;
	double uboundY = QuadPt1Y;
	
	double xpts[3];
	xpts[0] = QuadPt2X;
	xpts[1] = QuadPt3X;
	xpts[2] = QuadPt4X;

	double ypts[3];
	ypts[0] = QuadPt2Y;
	ypts[1] = QuadPt3Y;
	ypts[2] = QuadPt4Y;

	for( int i = 0; i < 3; i++ )
	{
		if( xpts[i] < lboundX )
		{
			lboundX = xpts[i];
		}
	}

	for( int i = 0; i < 3; i++ )
	{
		if( xpts[i] > uboundX )
		{
			uboundX = xpts[i];
		}
	}

	for( int i = 0; i < 3; i++ )
	{
		if( ypts[i] < lboundY )
		{
			lboundY = ypts[i];
		}
	}

	for( int i = 0; i < 3; i++ )
	{
		if( ypts[i] > uboundY )
		{
			uboundY = ypts[i];
		}
	}

	in_ctxt.PutAttribute( "LowerBoundX", lboundX );
	in_ctxt.PutAttribute( "LowerBoundY", lboundY );
	in_ctxt.PutAttribute( "LowerBoundZ", 0.0 );
	in_ctxt.PutAttribute( "UpperBoundX", uboundX );
	in_ctxt.PutAttribute( "UpperBoundY", uboundY );
	in_ctxt.PutAttribute( "UpperBoundZ", 0.0 );

	return CStatus::OK;
}

SICALLBACK OnCustomQuadMenuItem( CRef& in_ref )
{
	Context ctxt( in_ref );
	MenuItem menuItem = ctxt.GetSource();

    Application app;
	CValue out_arg;
	CValueArray in_args;
	in_args.Add( L"Quad" );
	app.ExecuteCommand( "GetPrim", in_args, out_arg );

    return CStatus::OK;
}
