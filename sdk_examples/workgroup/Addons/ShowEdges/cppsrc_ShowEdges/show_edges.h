/******************************************************************************
* Module:  show_edges.h
* Version: 1
* Created: 09-Mar-01
* Author:  This file was generated by the Softimage shader wizard v1.0
*
* This file contains the input parameter definition for the show_edges wizard.
* Description: Show Edges Example Shader - highlights the edges of the triangulated object.
*
*	Copyright 2008 Autodesk, Inc.  All rights reserved.  
*	Use of this software is subject to the terms of the Autodesk license agreement 
*	provided at the time of installation or download, or which otherwise accompanies 
*	this software in either electronic or hard copy form.   
******************************************************************************/

#ifndef _show_edges_H_
#define _show_edges_H_

#include <math.h>
#include <shader.h>

typedef struct
{
	miScalar m_thickness; /* Thickness of the edges. */
	miColor m_edgecolor; /* Color to use for the edges */
	miColor m_incolor; /* Color to use for the interior */
} show_edges_params;
extern "C" {
DLLEXPORT int show_edges_version(void);
DLLEXPORT miBoolean show_edges(
	miColor *out_pResult,
	miState *state,
	show_edges_params *in_pParams
);
}
#endif
