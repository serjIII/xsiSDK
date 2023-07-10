// C Header File Generated by XSI Shader Wizard
//
//	Copyright 2008 Autodesk, Inc.  All rights reserved.  
//	Use of this software is subject to the terms of the Autodesk license agreement 
//	provided at the time of installation or download, or which otherwise accompanies 
//	this software in either electronic or hard copy form.   

#ifndef OGLPARTICLE_H
#define OGLPARTICLE_H

#include <XSI_rtshaders.h>

////////////////////////////////////////////////////////////////
// Type definition

typedef struct
{
	LONG				Type;		
	FLOAT				PointSize;
	LONG				PointSmooth;
	LONG				BlendSrc;
	LONG				BlendDest;
	FLOAT				PointSizeMin;
	FLOAT				PointSizeMax;
	FLOAT				Attx;
	FLOAT				Atty;
	FLOAT				Attz;
	LONG				PrimitiveType;
	LONG				OGLLighting;
	LONG				TextureUnitCount;

	LONG				AlphaTest;
	LONG				AlphaFunc;
	FLOAT				AlphaRef;
	LONG				Blending;
	LONG				Textured;

	FLOAT				DensityFalloff;
	LONG				MaximumDensity;

	FLOAT				SparseColor_R;
	FLOAT				SparseColor_G;
	FLOAT				SparseColor_B;
	FLOAT				SparseColor_A;

	FLOAT				DenseColor_R;
	FLOAT				DenseColor_G;
	FLOAT				DenseColor_B;
	FLOAT				DenseColor_A;

	LONG				VelocityStretch;

	LONG				GPUInstancing;

	FLOAT				FadeThreshold;

	LONG				CustomFragmentShader;
	
	char*				FragmentShader;

	XSI_RTS_Texture		Sprite;
} OGLParticle_t;


// Attribute structure
typedef struct tagOGLParticleAttributeData
{
	float*	m_pPositions;
	float*	m_pColors;
	float*	m_pVelocities;
	float*	m_pOrientations;
	float*	m_pSize;
	float*	m_pID;
} OGLParticleAttributeData;

#define POINT		0
#define CUBE		1
#define WIRESPHERE	2
#define SPHERE		3
#define SNOWFLAKE	4
#define DEBRIS		5
#define QUAD		6

typedef bool ( *pfRenderParticleCloud )(IRTSExecutionState				* in_pExecState,
										XSI_RTS_SystemParams *in_pSysParams, 
										void *in_pParams, 
										XSI_RTS_Primitive	*in_pPrimitive,
										void				*in_pAttributes,
										XSI_RTS_Attribute_Size	*in_pAttributesSize,
										void	**io_pShaderInstanceData );

bool RenderBillboardSprites(IRTSExecutionState				* in_pExecState,
										XSI_RTS_SystemParams *in_pSysParams, 
										void *in_pParams, 
										XSI_RTS_Primitive	*in_pPrimitive,
										void				*in_pAttributes,
										XSI_RTS_Attribute_Size	*in_pAttributesSize,
										void	**io_pShaderInstanceData );

bool RenderHWAcceleratedSprites(IRTSExecutionState				* in_pExecState,
										XSI_RTS_SystemParams *in_pSysParams, 
										void *in_pParams, 
										XSI_RTS_Primitive	*in_pPrimitive,
										void				*in_pAttributes,
										XSI_RTS_Attribute_Size	*in_pAttributesSize,
										void	**io_pShaderInstanceData ) ;


bool VelocityVectors(IRTSExecutionState				* in_pExecState,
										XSI_RTS_SystemParams *in_pSysParams, 
										void *in_pParams, 
										XSI_RTS_Primitive	*in_pPrimitive,
										void				*in_pAttributes,
										XSI_RTS_Attribute_Size	*in_pAttributesSize,
										void	**io_pShaderInstanceData ) ;

bool DensityField(IRTSExecutionState				* in_pExecState,
										XSI_RTS_SystemParams *in_pSysParams, 
										void *in_pParams, 
										XSI_RTS_Primitive	*in_pPrimitive,
										void				*in_pAttributes,
										XSI_RTS_Attribute_Size	*in_pAttributesSize,
										void	**io_pShaderInstanceData ) ;

bool LineTrails(IRTSExecutionState				* in_pExecState,
										XSI_RTS_SystemParams *in_pSysParams, 
										void *in_pParams, 
										XSI_RTS_Primitive	*in_pPrimitive,
										void				*in_pAttributes,
										XSI_RTS_Attribute_Size	*in_pAttributesSize,
										void	**io_pShaderInstanceData ) ;


bool RenderPoints(IRTSExecutionState				* in_pExecState,
										XSI_RTS_SystemParams *in_pSysParams, 
										void *in_pParams, 
										XSI_RTS_Primitive	*in_pPrimitive,
										void				*in_pAttributes,
										XSI_RTS_Attribute_Size	*in_pAttributesSize,
										void	**io_pShaderInstanceData);


bool RenderPrimitiveUsingPseudoInstancing(IRTSExecutionState				* in_pExecState,
										XSI_RTS_SystemParams *in_pSysParams, 
										void *in_pParams, 
										XSI_RTS_Primitive	*in_pPrimitive,
										void				*in_pAttributes,
										XSI_RTS_Attribute_Size	*in_pAttributesSize,
										void	**io_pShaderInstanceData );

bool RenderPrimitiveSlow				(IRTSExecutionState				* in_pExecState,
										 XSI_RTS_SystemParams *in_pSysParams, 
										void *in_pParams, 
										XSI_RTS_Primitive	*in_pPrimitive,
										void				*in_pAttributes,
										XSI_RTS_Attribute_Size	*in_pAttributesSize,
										void	**io_pShaderInstanceData );


#endif // OGLPARTICLE_H
