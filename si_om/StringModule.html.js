var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>StringModule</title>\n\
   \n\
</head>\n\
   <body height=\"100%\"><div class=\"body_content\" id=\"body-content\"><style>\n\
/*  These settings override ones in the default stylesheets\n\
	used by the merged files that cause problems in combination\n\
	with the standard HTML help styles and page templates. */\n\
\n\
div, div.example, div.tip {\n\
	 margin:0;\n\
}\n\
\n\
td.example {\n\
	background: inherit;\n\
}\n\
\n\
/* This fixes a problem with nested pre blocks on an example page */\n\
pre pre {\n\
	display:block;\n\
	padding:0;\n\
	border-style:none;\n\
}\n\
</style><link rel=\"stylesheet\" href=\"si_om/css/en.css\" type=\"text/css\" /><script>$(document).ready(function() { yepnope.injectJs(\"./si_om/lib/utils.js\"); });</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/ac_common.js\"); });</script><script type=\"text/javascript\">var reflinkid = \"si_cpp\"; var reflinkdata = new Array(); function closeRefLinkDiv() { }; $(document).on(\'click\', function() { closeRefLinkDiv(); } );</script><script>$(document).ready(function() { yepnope.injectJs(\"./scripts/multireflink.js\"); });</script><script>$(document).ready(function () { prettyPrint(); } );</script><script>$(\"div#WidgetFloaterPanels,link[href*=\'microsofttranslator.com\'],script[src*=\'microsofttranslator.com\'],script[src*=\'bing.com\']\").remove();</script><script type=\'text/javascript\'>$(\"div#navigation,div#breadcrumbs,div#banner\").attr(\"translate\",\"no\"); var mtLocation = ((location && location.href && location.href.indexOf(\'https\') == 0)?\'https://ssl.microsofttranslator.com\':\'http://www.microsofttranslator.com\')+\'/ajax/v3/WidgetV3.ashx?siteData=y5CYlxTRD0znCzRLDwX0Wy7-g1EdC1XA4dSC-Y1LtaeScyli8_Ps5jPKqTr4xKxMI0OOUfkDplvX3uxN0JnPclebSYW8_J1HBzf4VLQEzQ8M4PsYXF_cMyp1Oumaetky&category=5297189e-446b-459e-ae1d-9d0360400781_tech&ctf=True&ui=true&settings=Manual&from=en&hidelanguages=\'; yepnope.injectJs(mtLocation, function() {}, { charset:\'utf-8\', type:\'text/javascript\' } );</script><script type=\"text/javascript\">\n\
 </script><!-- begin MT -->\n\
            \n\
            <div id=\'MicrosoftTranslatorWidget\' class=\'Dark\' style=\'position:absolute;right:20px;top:5px;z-index:100;color:white;background-color:#555555;height:58px;overflow:hidden\'></div><div id=\"reflinkdiv\" style=\"display:none; font-family: \'RobotoRegular\', Arial, Tahoma, sans-serif; visibility:hidden; position:absolute; z-index:40001; padding:5px; border-style:solid; border-width:1px; border-color:#666666; background-color:#dfdfdf; overflow:visible\"></div>\n\
      <div>\n\
         <div class=\"head\">\n\
            <h1>StringModule</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">StringModule</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>The C# StringModule contains all Softimage string constant declarations.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.si0DComponentFamily                                            // 0DComponent\n\
StringModule.si1DComponentFamily                                            // 1DComponent\n\
StringModule.si2DComponentFamily                                            // 2DComponent\n\
StringModule.si2PntCnsType                                                  // 2ptscns\n\
StringModule.si3DObjectFamily                                               // 3D Objects\n\
StringModule.si3DObjectType                                                 // #3dobject\n\
StringModule.si3PntCnsType                                                  // 3ptscns\n\
StringModule.siATFilterPresetAll                                            // All\n\
StringModule.siATFilterPresetAnimation                                      // Animation\n\
StringModule.siATFilterPresetColor                                          // Color\n\
StringModule.siATFilterPresetCustom                                         // Custom\n\
StringModule.siATFilterPresetGeneral                                        // General\n\
StringModule.siATFilterPresetKinematics                                     // Kinematics\n\
StringModule.siATFilterPresetLocalTransform                                 // LocalTransform\n\
StringModule.siATFilterPresetModeling                                       // Modeling\n\
StringModule.siATFilterPresetPosition                                       // Position\n\
StringModule.siATFilterPresetPositionX                                      // PositionX\n\
StringModule.siATFilterPresetPositionY                                      // PositionY\n\
StringModule.siATFilterPresetPositionZ                                      // PositionZ\n\
StringModule.siATFilterPresetRendering                                      // Rendering\n\
StringModule.siATFilterPresetRotation                                       // Rotation\n\
StringModule.siATFilterPresetRotationX                                      // RotationX\n\
StringModule.siATFilterPresetRotationY                                      // RotationY\n\
StringModule.siATFilterPresetRotationZ                                      // RotationZ\n\
StringModule.siATFilterPresetScaling                                        // Scaling\n\
StringModule.siATFilterPresetScalingX                                       // ScalingX\n\
StringModule.siATFilterPresetScalingY                                       // ScalingY\n\
StringModule.siATFilterPresetScalingZ                                       // ScalingZ\n\
StringModule.siATFilterPresetViewing                                        // Viewing\n\
StringModule.siATFilterTagged1                                              // Tag1\n\
StringModule.siATFilterTagged10                                             // Tag10\n\
StringModule.siATFilterTagged2                                              // Tag2\n\
StringModule.siATFilterTagged3                                              // Tag3\n\
StringModule.siATFilterTagged4                                              // Tag4\n\
StringModule.siATFilterTagged5                                              // Tag5\n\
StringModule.siATFilterTagged6                                              // Tag6\n\
StringModule.siATFilterTagged7                                              // Tag7\n\
StringModule.siATFilterTagged8                                              // Tag8\n\
StringModule.siATFilterTagged9                                              // Tag9\n\
StringModule.siATFilterTaggedAll                                            // TagAll\n\
StringModule.siActionClipType                                               // actionclip\n\
StringModule.siActionType                                                   // Action\n\
StringModule.siAddEdgeOpType                                                // addedgeop\n\
StringModule.siAddMeshPntOpType                                             // addmeshpointsop\n\
StringModule.siAddNurbsCrvPntOpType                                         // addnurbscrvpointsop\n\
StringModule.siAddNurbsSrfPntOpType                                         // addnurbssrfpointsop\n\
StringModule.siAddPntMiddleCrvType                                          // addpt_middlecrv\n\
StringModule.siAddPntMiddleSrfOpType                                        // addpt_middlesrf\n\
StringModule.siAmbientLightingType                                          // AmbientLighting\n\
StringModule.siAnimCompoundAnimItem                                         // AnimCompoundAnimItem\n\
StringModule.siAnimationKeyword                                             // Animation\n\
StringModule.siArcPrimType                                                  // arc\n\
StringModule.siArgHandlerAnimatableParameters                               // AnimatableParameters\n\
StringModule.siArgHandlerCollection                                         // Collection\n\
StringModule.siArgHandlerFrame                                              // Frame\n\
StringModule.siArgHandlerFrameRate                                          // FrameRate\n\
StringModule.siArgHandlerMarkedParameters                                   // MarkedParameters\n\
StringModule.siArgHandlerSingleObj                                          // SingleObj\n\
StringModule.siAssignmentOperatorFamily                                     // AssignmentOperators\n\
StringModule.siAttractorCtrlType                                            // attractor\n\
StringModule.siAutoCageAssignOpType                                         // autocageassign\n\
StringModule.siAutoEnvAssignOpType                                          // autoenvassign\n\
StringModule.siAutoInspect                                                  // AutoInspectEnabled\n\
StringModule.siBPlaneCnsType                                                // bplanecns\n\
StringModule.siBVolCnsType                                                  // bvolcns\n\
StringModule.siBallJointCnsType                                             // BallJointCns\n\
StringModule.siBasePathCnsType                                              // basepathcns\n\
StringModule.siBendOpType                                                   // bendop\n\
StringModule.siBevelOpType                                                  // bevelop\n\
StringModule.siBirail2GenOpType                                             // Birail2Generators\n\
StringModule.siBirailOpType                                                 // birail\n\
StringModule.siBlasterOpType                                                // blasterop\n\
StringModule.siBlendCrvOpType                                               // blendcrv\n\
StringModule.siBlendSrfOpType                                               // blendsrf\n\
StringModule.siBooleanGenOpType                                             // booleangen\n\
StringModule.siBooleanSrfTopoOpType                                         // booleansrftopoop\n\
StringModule.siBoundaryCluster                                              // bndry\n\
StringModule.siBoundaryFilter                                               // boundary\n\
StringModule.siBridgeOpType                                                 // bridgeop\n\
StringModule.siBrushPropertiesType                                          // BrushProperties\n\
StringModule.siBulgeOpType                                                  // bulgeop\n\
StringModule.siCAVBinormalsAttribute                                        // Binormals\n\
StringModule.siCAVTangentsAttribute                                         // Tangents\n\
StringModule.siCageDeformOpType                                             // cagedeformop\n\
StringModule.siCamDispType                                                  // camdisp\n\
StringModule.siCamVisType                                                   // camvis\n\
StringModule.siCameraFamily                                                 // Camera\n\
StringModule.siCameraFilter                                                 // camera\n\
StringModule.siCameraLensFlareType                                          // CameraLensFlare\n\
StringModule.siCameraPrimType                                               // camera\n\
StringModule.siCameraRootPrimType                                           // CameraRoot\n\
StringModule.siCameraTxtOpType                                              // CameraTxt\n\
StringModule.siCapOpType                                                    // capop\n\
StringModule.siCenterOpType                                                 // center\n\
StringModule.siChainBonePrimType                                            // bone\n\
StringModule.siChainEffPrimType                                             // eff\n\
StringModule.siChainElementFamily                                           // Chain Elements\n\
StringModule.siChainElementFilter                                           // chainelement\n\
StringModule.siChainRootPrimType                                            // root\n\
StringModule.siCirclePrimType                                               // circle\n\
StringModule.siCleanCrvOpType                                               // cleancrv\n\
StringModule.siCleanSrfOpType                                               // cleansrf\n\
StringModule.siClipAnimCompoundType                                         // AnimActionCompoundClip\n\
StringModule.siClipAnimationLayerType                                       // mixerlayerclip\n\
StringModule.siClipAnimationType                                            // mixeranimclip\n\
StringModule.siClipAudioType                                                // mixeraudioclip\n\
StringModule.siClipCacheType                                                // mixercacheclip\n\
StringModule.siClipImageType                                                // ImageClip\n\
StringModule.siClipMixerType                                                // Mixer\n\
StringModule.siClipShapeCompoundType                                        // ShapeActionCompoundClip\n\
StringModule.siClipShapeType                                                // mixershapeclip\n\
StringModule.siClipShotType                                                 // camerashotclip\n\
StringModule.siClothOpType                                                  // ClothOp\n\
StringModule.siClothPropType                                                // ClothProp\n\
StringModule.siCloudPrimType                                                // cloud\n\
StringModule.siClsColorType                                                 // clscolor\n\
StringModule.siClsCtrOpType                                                 // clsctr\n\
StringModule.siClsKeyType                                                   // clskey\n\
StringModule.siClsKeyWgtMapOpType                                           // ClusterKeyWeightMap\n\
StringModule.siClsPoseType                                                  // clspose\n\
StringModule.siClsShapeCombinerOpType                                       // clustershapecombiner\n\
StringModule.siClsUVSpaceTxtType                                            // uvspace\n\
StringModule.siClusterFamily                                                // Clusters\n\
StringModule.siClusterFilter                                                // cluster\n\
StringModule.siClusterKeyword                                               // Cluster\n\
StringModule.siClusterableComponentFamily                                   // Clusterable Components\n\
StringModule.siCoBBoxSclOpType                                              // CoBBoxSclOp\n\
StringModule.siCoPoseFCrvOpType                                             // CoPoseFcurveOp\n\
StringModule.siCollapseOpType                                               // collapseop\n\
StringModule.siCompensationFlag                                             // SI3D_CONSTRAINT_COMPENSATION_MODE\n\
StringModule.siCompoundMappedItem                                           // CompoundMappedItem\n\
StringModule.siConePrimType                                                 // cone\n\
StringModule.siConstraintAnimItem                                           // ConstraintAnimItem\n\
StringModule.siConstraintFamily                                             // Constraints\n\
StringModule.siConstraintFilter                                             // constraint\n\
StringModule.siConstraintKeyword                                            // Constraint\n\
StringModule.siConstraintMappedItem                                         // ConstraintMappedItem\n\
StringModule.siContourContrastShaderFamily                                  // Contour Contrast Shaders\n\
StringModule.siContourShaderFamily                                          // Contour Shaders\n\
StringModule.siContourStoreShaderFamily                                     // Contour Store Shaders\n\
StringModule.siControlBitmap                                                // BitmapWidget\n\
StringModule.siControlBoolean                                               // Boolean\n\
StringModule.siControlButton                                                // commandbutton\n\
StringModule.siControlCheck                                                 // Check\n\
StringModule.siControlCombo                                                 // Combo\n\
StringModule.siControlEdit                                                  // edit\n\
StringModule.siControlFCurve                                                // FCurveWidget\n\
StringModule.siControlFilePath                                              // FilePath\n\
StringModule.siControlFilter                                                // controlobject\n\
StringModule.siControlFolder                                                // Folder\n\
StringModule.siControlGradient                                              // gradient\n\
StringModule.siControlGrid                                                  // GridWidget\n\
StringModule.siControlIconList                                              // IconList\n\
StringModule.siControlImageClip                                             // ImageClipWidget\n\
StringModule.siControlListBox                                               // ListBox\n\
StringModule.siControlNumber                                                // Number\n\
StringModule.siControlObjectFamily                                          // Control Objects\n\
StringModule.siControlObjectKeyword                                         // ControlObject\n\
StringModule.siControlObjectNurbsTextureFamily                              // Control Objects Nurbs Texture\n\
StringModule.siControlObjectTextureFamily                                   // Control Objects Texture\n\
StringModule.siControlObjectTextureProjectionFamily                         // Control Objects Texture Projection\n\
StringModule.siControlRGB                                                   // RGB\n\
StringModule.siControlRGBA                                                  // RGBA\n\
StringModule.siControlRadio                                                 // Radio\n\
StringModule.siControlStatic                                                // Static\n\
StringModule.siControlString                                                // String\n\
StringModule.siControlSynoptic                                              // SynopticWidget\n\
StringModule.siControlTextEditor                                            // TextEditorWidget\n\
StringModule.siControlTextureSpace                                          // TextureSpaceItem.TextureSpaceItem.1\n\
StringModule.siConverterKeyword                                             // Converter\n\
StringModule.siConverterOperatorFamily                                      // Converters\n\
StringModule.siCopyOpType                                                   // copyop\n\
StringModule.siCopyShapeOpType                                              // copyshape\n\
StringModule.siCopyUVWOpType                                                // Copyuvw\n\
StringModule.siCreatePolyOpType                                             // createpolygonop\n\
StringModule.siCrvCnsType                                                   // curvecns\n\
StringModule.siCrvCreationOpType                                            // CurveCreationOp\n\
StringModule.siCrvCtrlOpType                                                // CrvControlOp\n\
StringModule.siCrvCutOpType                                                 // CrvCutOp\n\
StringModule.siCrvDeformOpType                                              // crvdeform\n\
StringModule.siCrvListAggregatePrimType                                     // crvlistaggregate\n\
StringModule.siCrvListPrimType                                              // crvlist\n\
StringModule.siCrvListToMeshOpType                                          // CurveListToMesh\n\
StringModule.siCrvNetOpType                                                 // curvenet\n\
StringModule.siCrvOpenCloseOpType                                           // crvopenclose\n\
StringModule.siCrvReparamOpType                                             // crvreparam\n\
StringModule.siCrvShiftOpType                                               // crvshift\n\
StringModule.siCubePrimType                                                 // cube\n\
StringModule.siCurrentKeyword                                               // <current>\n\
StringModule.siCurveFamily                                                  // Curves\n\
StringModule.siCurveFilter                                                  // curve\n\
StringModule.siCurveKeyword                                                 // Curve\n\
StringModule.siCustomCommandLibCache                                        // CustomCommandLibCache\n\
StringModule.siCustomOperatorLibCache                                       // CustomOperatorLibCache\n\
StringModule.siCustomPSetKeyword                                            // CustomPSet\n\
StringModule.siCustomParamSet                                               // customparamset\n\
StringModule.siCustomTypeNameAttribute                                      // CustomTypeName\n\
StringModule.siCycleUVWType                                                 // Cycleuvw\n\
StringModule.siCylinderPrimType                                             // cylinder\n\
StringModule.siDGlowType                                                    // dglow\n\
StringModule.siDefaultConnectionAttribute                                   // DefaultConnection\n\
StringModule.siDeformBySpineOp2Type                                         // deformbyspineop2\n\
StringModule.siDeformBySpineOpType                                          // deformbyspineop\n\
StringModule.siDeformKeyword                                                // Deform\n\
StringModule.siDeformOpType                                                 // deformop\n\
StringModule.siDeformOperatorFamily                                         // DeformOperators\n\
StringModule.siDelPntCrvOpType                                              // delpt_crv\n\
StringModule.siDeleteCompOpType                                             // deletecompop\n\
StringModule.siDirCnsType                                                   // dircns\n\
StringModule.siDiscPrimType                                                 // disc\n\
StringModule.siDisplacementShaderFamily                                     // Displacement Shaders\n\
StringModule.siDisplayCallbackLibCache                                      // DisplayCallbackLibCache\n\
StringModule.siDisplayLibCache                                              // DisplayLibCache\n\
StringModule.siDisplayPassLibCache                                          // DisplayPassLibCache\n\
StringModule.siDisplayType                                                  // display\n\
StringModule.siDissolveCompOpType                                           // dissolvecompop\n\
StringModule.siDistCnsType                                                  // distcns\n\
StringModule.siDistanceOpType                                               // DistanceOp\n\
StringModule.siDodecahedronPrimType                                         // dodecahedron\n\
StringModule.siDragCtrlPrimType                                             // drag\n\
StringModule.siDynamicsKeyword                                              // Dynamics\n\
StringModule.siEddyCtrlPrimType                                             // eddy\n\
StringModule.siEdgeCluster                                                  // edge\n\
StringModule.siEdgeFilter                                                   // edge\n\
StringModule.siEditPolyOpType                                               // editpolygonop\n\
StringModule.siEffectorFilter                                               // effector\n\
StringModule.siEmissionPropType                                             // EmissionProp\n\
StringModule.siEnvSelClsOpType                                              // EnvSelClsOp\n\
StringModule.siEnvWgtType                                                   // envweights\n\
StringModule.siEnvelopOpType                                                // envelopop\n\
StringModule.siEnvironmentShaderFamily                                      // Environment Shaders\n\
StringModule.siEventLibCache                                                // EventLibCache\n\
StringModule.siExplosionOpType                                              // ExplosionOp\n\
StringModule.siExpressionAnimItem                                           // ExpressionAnimItem\n\
StringModule.siExpressionMappedItem                                         // ExpressionMappedItem\n\
StringModule.siExpressionsKeyword                                           // expressions\n\
StringModule.siExtendCrv2PntOpType                                          // extendcrv2pt\n\
StringModule.siExtendToCrvOpType                                            // extendtocrv\n\
StringModule.siExtractCrvOpType                                             // extractcrv\n\
StringModule.siExtractCrvSegOpType                                          // extractcrvseg\n\
StringModule.siExtractPolyOpType                                            // extractpolygons\n\
StringModule.siExtractSubCrvOpType                                          // extractsubcrv\n\
StringModule.siExtrude2ProfsOpType                                          // extrude2profs\n\
StringModule.siExtrudeCompAxisOpType                                        // extrudecompaxisop\n\
StringModule.siExtrudeComponentOpType                                       // extrudecomponentop\n\
StringModule.siExtrusionOpType                                              // extrusion\n\
StringModule.siFCurveAnimItem                                               // FCurveAnimItem\n\
StringModule.siFCurveMappedItem                                             // FCurveMappedItem\n\
StringModule.siFaceCluster                                                  // face\n\
StringModule.siFanType                                                      // fan\n\
StringModule.siFillHoleOpType                                               // fillHoleOp\n\
StringModule.siFilletCrvOpType                                              // filletcrv\n\
StringModule.siFilletSrfOpType                                              // Fillet Surfaces\n\
StringModule.siFilter3DObjectType                                           // Filter3DObjectType\n\
StringModule.siFilterEdgeOpType                                             // filteredgeop\n\
StringModule.siFilterLibCache                                               // FilterLibCache\n\
StringModule.siFilterObjectType                                             // FilterObjectType\n\
StringModule.siFilterPolyOpType                                             // filterpolygonop\n\
StringModule.siFilterPropertyType                                           // FilterPropertyType\n\
StringModule.siFilterSubComponentType                                       // FilterSubComponentType\n\
StringModule.siFitCrvOpType                                                 // fitcrv\n\
StringModule.siFitSrfOpType                                                 // fitsrf\n\
StringModule.siFlipUVWOpType                                                // Flipuvw\n\
StringModule.siFluidOpType                                                  // FluidOp\n\
StringModule.siFoldOpType                                                   // foldop\n\
StringModule.siFourSidedOpType                                              // foursided\n\
StringModule.siFurOpType                                                    // furop\n\
StringModule.siFurPrimType                                                  // fur\n\
StringModule.siFurPropType                                                  // furProp\n\
StringModule.siFurSimOpType                                                 // furSimop\n\
StringModule.siFxOperatorFamily                                             // FxOperator\n\
StringModule.siGeneralKeyword                                               // General\n\
StringModule.siGeneratorKeyword                                             // Generator\n\
StringModule.siGeneratorOpType                                              // generatorop\n\
StringModule.siGeneratorOperatorFamily                                      // GeneratorOperators\n\
StringModule.siGenericObjectFilter                                          // object\n\
StringModule.siGeoShaderPrimType                                            // GeoShader\n\
StringModule.siGeoTxtOpType                                                 // GeoTxtOp\n\
StringModule.siGeomApproxType                                               // geomapprox\n\
StringModule.siGeometryFamily                                               // Geometries\n\
StringModule.siGeometryFilter                                               // geometry\n\
StringModule.siGeometryKeyword                                              // Geometry\n\
StringModule.siGeometryShaderFamily                                         // Geometry Shaders\n\
StringModule.siGlobalType                                                   // global\n\
StringModule.siGravityCtrlType                                              // gravity\n\
StringModule.siGridPrimType                                                 // grid\n\
StringModule.siGroup                                                        // #Group\n\
StringModule.siGroupFamily                                                  // Groups\n\
StringModule.siGroupFilter                                                  // group\n\
StringModule.siGroupType                                                    // #Group\n\
StringModule.siHWShaderDirtyParameterUpdate                                 // HWShaderDirtyParameterUpdate\n\
StringModule.siHWShaderForceAttributeUpdate                                 // HWShaderForceAttributeUpdate\n\
StringModule.siHWShaderPortType                                             // xgsRTCtx\n\
StringModule.siHWShaderVersionAttribute                                     // HWShaderVersion\n\
StringModule.siHairKeyword                                                  // Hair\n\
StringModule.siHealOpType                                                   // heal\n\
StringModule.siHealUVWOpType                                                // healuvw\n\
StringModule.siICERenderPropSuffixIsHomogeneous                             // _ishomogeneous\n\
StringModule.siICERenderPropSuffixSmoothWhenSubd                            // _smoothwhensubdi\n\
StringModule.siICERenderPropSuffixTransform                                 // _transform\n\
StringModule.siICERenderPropSuffixUWrap                                     // _u_wrap\n\
StringModule.siICERenderPropSuffixVWrap                                     // _v_wrap\n\
StringModule.siICERenderPropSuffixWWrap                                     // _w_wrap\n\
StringModule.siIKKeyword                                                    // IK\n\
StringModule.siIcosahedronPrimType                                          // icosahedron\n\
StringModule.siImageClipType                                                // ImageClip\n\
StringModule.siImageCropOpType                                              // ImageCropOp\n\
StringModule.siImageDataTypeAlpha                                           // Alpha\n\
StringModule.siImageDataTypeBitMask                                         // BitMask\n\
StringModule.siImageDataTypeDepth                                           // Depth\n\
StringModule.siImageDataTypeIntensity                                       // Intensity\n\
StringModule.siImageDataTypeLabel                                           // Label\n\
StringModule.siImageDataTypeMotion                                          // Motion\n\
StringModule.siImageDataTypeNormal                                          // Normal\n\
StringModule.siImageDataTypePoint                                           // Vector\n\
StringModule.siImageDataTypeRGB                                             // RGB\n\
StringModule.siImageDataTypeRGBA                                            // RGBA\n\
StringModule.siImageDataTypeRGBE                                            // RGBE\n\
StringModule.siImageDataTypeVector                                          // Vector\n\
StringModule.siImageFXOpType                                                // ImageFXOp\n\
StringModule.siImageObjectType                                              // ImageObject\n\
StringModule.siImageOperatorFamily                                          // Image Operators\n\
StringModule.siImageSourceOpType                                            // ImageSourceOp\n\
StringModule.siImageSourceType                                              // ImageSource\n\
StringModule.siImplicitFilter                                               // implicit\n\
StringModule.siImplicitGeometryFamily                                       // Geometry\n\
StringModule.siInsSrfKnotOpType                                             // inssrfknot\n\
StringModule.siInsertCrvKnotOpType                                          // InsertCrvKnot\n\
StringModule.siIntersectSrfOpType                                           // intersectsrf\n\
StringModule.siInvCrvOpType                                                 // invcrv\n\
StringModule.siInvSrfOpType                                                 // invsrf\n\
StringModule.siInvertPolyOpType                                             // invertpolygonop\n\
StringModule.siInvisiblePolygonsClusterName                                 // InvisiblePolygons\n\
StringModule.siIsoLineUCluster                                              // isolineu\n\
StringModule.siIsoLineVCluster                                              // isolinev\n\
StringModule.siIsoPointCluster                                              // isopnt\n\
StringModule.siIsopointFilter                                               // isopoint\n\
StringModule.siKineChainPropType                                            // KineChainProp\n\
StringModule.siKineChainType                                                // chain\n\
StringModule.siKineCnsType                                                  // kinecns\n\
StringModule.siKineInfoFamily                                               // KineInfo\n\
StringModule.siKineInfoType                                                 // kine\n\
StringModule.siKineJointType                                                // joint\n\
StringModule.siKinematicsKeyword                                            // Kinematics\n\
StringModule.siKnotCluster                                                  // knot\n\
StringModule.siKnotCurveUCluster                                            // knotcrvu\n\
StringModule.siKnotCurveVCluster                                            // knotcrvv\n\
StringModule.siKnotFilter                                                   // knot\n\
StringModule.siLatticeFamily                                                // Lattices\n\
StringModule.siLatticeFilter                                                // lattice\n\
StringModule.siLatticeOpType                                                // lattice\n\
StringModule.siLatticePrimType                                              // lattice\n\
StringModule.siLayerFilter                                                  // layer\n\
StringModule.siLayersType                                                   // Layers\n\
StringModule.siLensShaderFamily                                             // Lens Shaders\n\
StringModule.siLightFilter                                                  // light\n\
StringModule.siLightLensFlareType                                           // LightLensFlare\n\
StringModule.siLightPartitionFilter                                         // lightpartition\n\
StringModule.siLightPhotonShaderFamily                                      // Light Photon Shaders\n\
StringModule.siLightPrimType                                                // light\n\
StringModule.siLightPrimitiveFamily                                         // Lights\n\
StringModule.siLightShaderFamily                                            // Light Shaders\n\
StringModule.siLineCnsType                                                  // LineCns\n\
StringModule.siLocalType                                                    // local\n\
StringModule.siLoftOpType                                                   // loft\n\
StringModule.siMapCompOpType                                                // mapCompOp\n\
StringModule.siMarkHardEdgeVertexOpType                                     // MarkHardEdgeVertex\n\
StringModule.siMarkerOperatorFamily                                         // MarkerOperators\n\
StringModule.siMaterialFamily                                               // Material\n\
StringModule.siMaterialShaderFamily                                         // Material Shaders\n\
StringModule.siMaterialType                                                 // material\n\
StringModule.siMentalRayContourContrastPortType                             // mrCntrCntrst\n\
StringModule.siMentalRayContourStorePortType                                // mrCntStr\n\
StringModule.siMentalRayGeometryPortType                                    // mrGeom\n\
StringModule.siMentalRayLightmapPortType                                    // mrLmap\n\
StringModule.siMentalRayPhenomenonMaterialPortType                          // mrPhenMat\n\
StringModule.siMenuLibCache                                                 // MenuLibCache\n\
StringModule.siMergeCrvOpType                                               // mergecrv\n\
StringModule.siMergeMeshOpType                                              // mergemesh\n\
StringModule.siMergeSrfOpType                                               // mergesrf\n\
StringModule.siMeshFamily                                                   // Mesh Geometries\n\
StringModule.siMeshKeyword                                                  // Mesh\n\
StringModule.siMeshLocalSubdivisionOpType                                   // meshlocalsubdivisionop\n\
StringModule.siMeshSubdivOpType                                             // MeshSubdivide\n\
StringModule.siMeshSubdivWithCenterOpType                                   // MeshSubdivideWithCenter\n\
StringModule.siMixerAnimClipType                                            // mixeranimclip\n\
StringModule.siMixerAnimTrackType                                           // mixeranimtrack\n\
StringModule.siMixerAudioClipType                                           // mixeraudioclip\n\
StringModule.siMixerAudioTrackType                                          // mixeraudiotrack\n\
StringModule.siMixerKeyword                                                 // Mixer\n\
StringModule.siMixerPropType                                                // MixerProp\n\
StringModule.siMixerShapeClipType                                           // mixershapeclip\n\
StringModule.siMixerShapeTrackType                                          // mixershapetrack\n\
StringModule.siMixerType                                                    // mixer\n\
StringModule.siModelClipType                                                // model_clip\n\
StringModule.siModelFilter                                                  // model\n\
StringModule.siModelNullPrimType                                            // modelnull\n\
StringModule.siModelType                                                    // #model\n\
StringModule.siModelingKeyword                                              // Modeling\n\
StringModule.siMotionBlurType                                               // motionblur\n\
StringModule.siMoveComponentOpType                                          // movecomponentop\n\
StringModule.siNPntCnsType                                                  // Nptscns\n\
StringModule.siNullFilter                                                   // null\n\
StringModule.siNullPrimType                                                 // null\n\
StringModule.siNullPrimitiveFamily                                          // Nulls\n\
StringModule.siNurbsCurveListFamily                                         // Nurbs CurveList Geometries\n\
StringModule.siNurbsSurfaceMeshFamily                                       // Nurbs Surface Mesh Geometries\n\
StringModule.siNurbsToMeshOpType                                            // nurbstomesh\n\
StringModule.siObjClsCnsType                                                // objclscns\n\
StringModule.siObjectFilter                                                 // sceneobject\n\
StringModule.siObjectPartitionFilter                                        // objectpartition\n\
StringModule.siObstaclePropType                                             // ObstacleProp\n\
StringModule.siOctahedronPrimType                                           // octahedron\n\
StringModule.siOffsetClsOpType                                              // offsetclusterop\n\
StringModule.siOffsetCrvOpType                                              // offsetcrv\n\
StringModule.siOffsetSrfOpType                                              // offsetsrf\n\
StringModule.siOpenCloseSrfOpType                                           // openclosesrf\n\
StringModule.siOperatorFamily                                               // Operators\n\
StringModule.siOperatorFilter                                               // operator\n\
StringModule.siOperatorsKeyword                                             // Operators\n\
StringModule.siOriCnsType                                                   // oricns\n\
StringModule.siOutputShaderFamily                                           // Output Shaders\n\
StringModule.siOverrideType                                                 // #Override\n\
StringModule.siParDecayType                                                 // ParDecay\n\
StringModule.siParObstExtSparksType                                         // ParObstExtSparks\n\
StringModule.siParticleControlObjectFamily                                  // Particle Control Object\n\
StringModule.siParticleEventType                                            // ParticleEvent\n\
StringModule.siParticleFamily                                               // Particle\n\
StringModule.siParticleKeyword                                              // Particle\n\
StringModule.siParticlesOpType                                              // ParticlesOp\n\
StringModule.siPassFamily                                                   // Pass\n\
StringModule.siPatchNetworkFamily                                           // Patch Networks\n\
StringModule.siPathCnsType                                                  // pathcns\n\
StringModule.siPhotonShaderFamily                                           // Photon Shaders\n\
StringModule.siPinJointCnsType                                              // PinJointCns\n\
StringModule.siPlanarObjectFamily                                           // Planar Objects\n\
StringModule.siPlaneCnsType                                                 // PlaneCns\n\
StringModule.siPointCloudFamily                                             // Point Cloud Geometries\n\
StringModule.siPointCloudFilter                                             // PointCloud\n\
StringModule.siPointCloudPrimType                                           // PointCloud\n\
StringModule.siPointFilter                                                  // point\n\
StringModule.siPolyMeshFilter                                               // polygonmesh\n\
StringModule.siPolyMeshPNetOpType                                           // PolyMeshPNetOp\n\
StringModule.siPolyMeshType                                                 // polymsh\n\
StringModule.siPolygonCluster                                               // poly\n\
StringModule.siPolygonFilter                                                // polygon\n\
StringModule.siPolygonNodeCluster                                           // polyn\n\
StringModule.siPosCnsType                                                   // poscns\n\
StringModule.siPoseCnsType                                                  // posecns\n\
StringModule.siPrimitiveFilter                                              // primitive\n\
StringModule.siPrimitiveKeyword                                             // Primitive\n\
StringModule.siProjectCrvOpType                                             // projectcrv\n\
StringModule.siProjectionKeyword                                            // Projection\n\
StringModule.siPropVolumeOpType                                             // propvolumeop\n\
StringModule.siPropertyFamily                                               // Properties\n\
StringModule.siPropertyFilter                                               // property\n\
StringModule.siPropertyFilterAttribute                                      // PropertyFilter\n\
StringModule.siPropertyLibCache                                             // PropertyLibCache\n\
StringModule.siProportionalOpType                                           // proportional\n\
StringModule.siPushOpType                                                   // pushop\n\
StringModule.siQStretchOpType                                               // qstretch\n\
StringModule.siRTShaderLibCache                                             // RealTimeShaderLibCache\n\
StringModule.siRandomizeOpType                                              // randomizeop\n\
StringModule.siRealTimeShaderFamily                                         // RealTime Shaders\n\
StringModule.siRecompileMetaSLOnValueChange                                 // RecompileMetaSLOnValueChange\n\
StringModule.siRefPlaneType                                                 // refplane\n\
StringModule.siReferenceFilterAttribute                                     // ReferenceFilter\n\
StringModule.siRelaxUVWOpType                                               // Relaxuvw\n\
StringModule.siRemSrfKnotOpType                                             // remsrfknot\n\
StringModule.siRemoveCrvKnotOpType                                          // RemoveCrvKnot\n\
StringModule.siRenderMapType                                                // rendermap\n\
StringModule.siRenderTreeNodeColorBAttribute                                // RenderTreeNodeColorB\n\
StringModule.siRenderTreeNodeColorGAttribute                                // RenderTreeNodeColorG\n\
StringModule.siRenderTreeNodeColorRAttribute                                // RenderTreeNodeColorR\n\
StringModule.siRenderingKeyword                                             // Rendering\n\
StringModule.siRevolutionOpType                                             // revolution\n\
StringModule.siRotoscopeType                                                // rotoscope\n\
StringModule.siSCMFixerOpType                                               // scmfixerop\n\
StringModule.siSCMTopologyOpType                                            // scmtopologyop\n\
StringModule.siSEFilterActionNodes                                          // Action\n\
StringModule.siSEFilterAllNodeTypes                                         // AllNodeTypes\n\
StringModule.siSEFilterAnimatableNodes                                      // Animatable\n\
StringModule.siSEFilterAnimatedNodes                                        // Animated\n\
StringModule.siSEFilterClusterNodes                                         // Cluster\n\
StringModule.siSEFilterGroupNodes                                           // Group\n\
StringModule.siSEFilterKeywordAll                                           // AllKeywords\n\
StringModule.siSEFilterKeywordAnimation                                     // Animation\n\
StringModule.siSEFilterKeywordCustom                                        // Custom\n\
StringModule.siSEFilterKeywordGeneral                                       // General\n\
StringModule.siSEFilterKeywordKinematics                                    // Kinematics\n\
StringModule.siSEFilterKeywordModeling                                      // Modeling\n\
StringModule.siSEFilterKeywordRendering                                     // Rendering\n\
StringModule.siSEFilterKeywordViewing                                       // Viewing\n\
StringModule.siSEFilterMaterialNodes                                        // Material\n\
StringModule.siSEFilterMiscellaneousNodes                                   // Miscellaneous\n\
StringModule.siSEFilterModelNodes                                           // Model\n\
StringModule.siSEFilterObjectNodes                                          // Object\n\
StringModule.siSEFilterOperatorNodes                                        // Operator\n\
StringModule.siSEFilterParameterNodes                                       // Parameter\n\
StringModule.siSEFilterPrimitiveNodes                                       // Primitive\n\
StringModule.siSEFilterPropertyNodes                                        // Property\n\
StringModule.siSEFilterSceneNodes                                           // Scene\n\
StringModule.siSEFilterShaderNodes                                          // Shader\n\
StringModule.siSampledPointCluster                                          // sample\n\
StringModule.siSceneAmbienceType                                            // ambience\n\
StringModule.siSceneColorsType                                              // Scenecolors\n\
StringModule.siSceneFilter                                                  // scene\n\
StringModule.siSclCnsType                                                   // sclcns\n\
StringModule.siScrCommandLogEnabled                                         // SCR_CMDLOG_ENABLED\n\
StringModule.siScrCommandLogFileName                                        // SCR_CMDLOG_FILENAME\n\
StringModule.siScrCommandLogMaxSize                                         // SCR_CMDLOG_MAXSIZE\n\
StringModule.siScrCommandLogToFile                                          // SCR_CMDLOG_TOFILE\n\
StringModule.siScrCommandLogUnlimitedSize                                   // SCR_CMDLOG_UNLIMITEDSIZE\n\
StringModule.siScrLanguage                                                  // ScriptLanguage\n\
StringModule.siScrMessageLogEnabled                                         // SCR_MSGLOG_ENABLED\n\
StringModule.siScrRealTimeMessagingEnabled                                  // SCR_RTMSG_ENABLED\n\
StringModule.siScriptedOpType                                               // scriptedop\n\
StringModule.siSetEdgeCreaseValueOpType                                     // SetEdgeCreaseValue\n\
StringModule.siShaderFamily                                                 // Shaders\n\
StringModule.siShaderFamilyAttribute                                        // ShaderFamily\n\
StringModule.siShaderFamilyCntContrast                                      // mrContourContrast\n\
StringModule.siShaderFamilyCntMat                                           // mrContourMat\n\
StringModule.siShaderFamilyCntStore                                         // mrContourStore\n\
StringModule.siShaderFamilyData                                             // mrData\n\
StringModule.siShaderFamilyEnvironment                                      // mrEnvironment\n\
StringModule.siShaderFamilyGeometry                                         // mrGeometry\n\
StringModule.siShaderFamilyLens                                             // mrLens\n\
StringModule.siShaderFamilyLight                                            // mrLight\n\
StringModule.siShaderFamilyLightmap                                         // mrLightmap\n\
StringModule.siShaderFamilyOutput                                           // mrOutput\n\
StringModule.siShaderFamilyPhenomMat                                        // mrPhenomenonMat\n\
StringModule.siShaderFamilyPhotonLight                                      // mrPhotonLight\n\
StringModule.siShaderFamilyPhotonMat                                        // mrPhotonMat\n\
StringModule.siShaderFamilyPhotonVolume                                     // mrPhotonVolume\n\
StringModule.siShaderFamilyRTShader                                         // xgsRealTimeShader\n\
StringModule.siShaderFamilyShadowMat                                        // mrShadowMat\n\
StringModule.siShaderFamilyState                                            // mrState\n\
StringModule.siShaderFamilySurfaceMat                                       // mrSurfaceMat\n\
StringModule.siShaderFamilyTexture                                          // mrTexture\n\
StringModule.siShaderFamilyVolume                                           // mrVolume\n\
StringModule.siShaderFilter                                                 // shader\n\
StringModule.siShadowShaderFamily                                           // Shadow Shaders\n\
StringModule.siShapeActionCompoundClipType                                  // ShapeActionCompoundClip\n\
StringModule.siShapeActionType                                              // ShapeAction\n\
StringModule.siShapeCompoundAnimItem                                        // ShapeCompoundAnimItem\n\
StringModule.siShapeCompoundMappedItem                                      // ShapeCompoundMappedItem\n\
StringModule.siShapeKeyAnimItem                                             // ShapeKeyAnimItem\n\
StringModule.siShapeKeyMappedItem                                           // ShapeKeyMappedItem\n\
StringModule.siShearOpType                                                  // shearop\n\
StringModule.siShrinkWrapOpType                                             // shrinkwrap\n\
StringModule.siSimulationKeyword                                            // Simulation\n\
StringModule.siSkelCtrlOpPropType                                           // SkeletonCtrlOpProp\n\
StringModule.siSkeletonJointFilter                                          // joint\n\
StringModule.siSmoothEnvelopeWgtOpType                                      // smoothenvelopeweight\n\
StringModule.siSnapBoundOpType                                              // snapbound\n\
StringModule.siSnapCrvOpType                                                // SnapCrvsOp\n\
StringModule.siSnipSrfOpType                                                // snipsrf\n\
StringModule.siSoftBodyOpType                                               // SoftBodyOp\n\
StringModule.siSpherePrimType                                               // sphere\n\
StringModule.siSpineDefOp2Type                                              // spinedefop2\n\
StringModule.siSpineDefOpType                                               // spinedefop\n\
StringModule.siSpineWgtMapOp3Type                                           // spinewgtmapop\n\
StringModule.siSpineWgtMapOp4Type                                           // spinewgtmapop\n\
StringModule.siSpiralPrimType                                               // spiral\n\
StringModule.siSplitEdgeOpType                                              // splitedgeop\n\
StringModule.siSplitPolyOpType                                              // splitpolygonop\n\
StringModule.siSpotInterestPrimType                                         // SpotInterest\n\
StringModule.siSpotRootPrimType                                             // SpotRoot\n\
StringModule.siSquarePrimType                                               // square\n\
StringModule.siSrfCnsType                                                   // surfcns\n\
StringModule.siSrfCrvInverseOpType                                          // SurfaceCurveInverseOp\n\
StringModule.siSrfCrvShiftOpType                                            // srfcrvshift\n\
StringModule.siSrfCtrlOpType                                                // SrfControlOp\n\
StringModule.siSrfDefOpType                                                 // srfdefop\n\
StringModule.siSrfMeshPrimType                                              // surfmsh\n\
StringModule.siSrfPQOpType                                                  // SurfacePQ\n\
StringModule.siSrfReparamOpType                                             // srfreparam\n\
StringModule.siSrfShiftOpType                                               // srfshift\n\
StringModule.siSrfSubdivisionOpType                                         // srfsubdivisionop\n\
StringModule.siSrfUVCtrlOpType                                              // SurfaceUVControl\n\
StringModule.siStandInPrimType                                              // standin\n\
StringModule.siStartOffsetOpType                                            // startoffset\n\
StringModule.siStaticValueAnimItem                                          // StaticValueAnimItem\n\
StringModule.siStaticValueMappedItem                                        // StaticValueMappedItem\n\
StringModule.siStitchCrvToCrvOpType                                         // stitchcrvtocrv\n\
StringModule.siStitchCrvToSrfOpType                                         // stitchcrvtosrf\n\
StringModule.siStitchSrfOpType                                              // stitchsrf\n\
StringModule.siStrokeOpType                                                 // stroke\n\
StringModule.siSubCompType                                                  // subcomp\n\
StringModule.siSubComponentFamily                                           // SubComponents\n\
StringModule.siSubComponentFilter                                           // subcomponent\n\
StringModule.siSubCurveCluster                                              // subcrv\n\
StringModule.siSubSurfaceCluster                                            // subsrf\n\
StringModule.siSubSurfaceFilter                                             // SubSurface\n\
StringModule.siSubdivEdgeOpType                                             // subdivideedgeop\n\
StringModule.siSubdivPolyOpType                                             // subdividepolygonop\n\
StringModule.siSurfaceCurveCluster                                          // srfcrv\n\
StringModule.siSurfaceCurveFamily                                           // Surface Curves\n\
StringModule.siSurfaceCurveFilter                                           // SurfaceCurve\n\
StringModule.siSurfaceFamily                                                // Surfaces\n\
StringModule.siSurfaceKeyword                                               // Surface\n\
StringModule.siSurfaceMeshFilter                                            // surfacemesh\n\
StringModule.siSwapSrfUVOpType                                              // swapsrfuv\n\
StringModule.siSymmetrizePolygon                                            // symmetrizepolygonop\n\
StringModule.siSymmetryCnsType                                              // symmetrycns\n\
StringModule.siSymmetryMapOpType                                            // symmetrymapop\n\
StringModule.siSymmetryMapType                                              // map\n\
StringModule.siSynopticViewType                                             // synoptic\n\
StringModule.siTaperOpType                                                  // taperop\n\
StringModule.siTetrahedronPrimType                                          // tetrahedron\n\
StringModule.siTextToCrvListOpType                                          // TextToCurveList\n\
StringModule.siTextureControlFilter                                         // texturecontrol\n\
StringModule.siTextureShaderFamily                                          // Texture Shaders\n\
StringModule.siTimeDisplayFormatDisplayAsFrames                             // SI3D_TIMEDISPLAYFORMAT_DISPLAYASFRAMES\n\
StringModule.siTimeDisplayFormatDisplayUserFormat                           // SI3D_TIMEDISPLAYFORMAT_DISPLAYUSERFORMAT\n\
StringModule.siTimeDisplayFormatUserFormat                                  // SI3D_TIMEDISPLAYFORMAT_USERFORMAT\n\
StringModule.siTimeFormatDefaultFrameFormat                                 // SI3D_TIMEFORMAT_DEFAULTFRAMEFORMAT\n\
StringModule.siTimeFormatDefaultFrameRate                                   // SI3D_TIMEFORMAT_DEFAULTFRAMERATE\n\
StringModule.siTopologyEditorKeyword                                        // Topology_Editor\n\
StringModule.siTopologyKeyword                                              // Topology\n\
StringModule.siTopologyOperatorFamily                                       // TopologyOperators\n\
StringModule.siTorusPrimType                                                // torus\n\
StringModule.siTrackAnimationLayerType                                      // TrackAnimationLayerType\n\
StringModule.siTrackAnimationType                                           // TrackAnimationType\n\
StringModule.siTrackAudioType                                               // TrackAudioType\n\
StringModule.siTrackCacheType                                               // TrackCacheType\n\
StringModule.siTrackShapeType                                               // TrackShapeType\n\
StringModule.siTrackShotType                                                // TrackShotType\n\
StringModule.siTrajCnsType                                                  // trajcns\n\
StringModule.siTransformAxisMode                                            // 3D_TRANSFO_EDITED_AXIS_CHANGED\n\
StringModule.siTransformRefMode                                             // 3D_TRANSFO_REFERENTIAL_CHANGED\n\
StringModule.siTransformSetupType                                           // transformsetup\n\
StringModule.siTransitionBridgeType                                         // TransitionBridgeType\n\
StringModule.siTransitionCardinalType                                       // TransitionCardinalType\n\
StringModule.siTransitionStandardType                                       // TransitionStandardType\n\
StringModule.siTrimCurveCluster                                             // trimcrv\n\
StringModule.siTrimCurveFilter                                              // trimcurve\n\
StringModule.siTurbulenceCtrlPrimType                                       // turbulence\n\
StringModule.siTwistOpType                                                  // twistop\n\
StringModule.siTxtMapType                                                   // TextureProp\n\
StringModule.siTxtOpType                                                    // TextureOp\n\
StringModule.siTxtSupportType                                               // Texture Support\n\
StringModule.siUIAlignCenter                                                // AlignCenter\n\
StringModule.siUIAlignLeft                                                  // AlignLeft\n\
StringModule.siUIAlignRight                                                 // AlignRight\n\
StringModule.siUIAudioFile                                                  // AudioFile\n\
StringModule.siUIAutoComplete                                               // AutoComplete\n\
StringModule.siUIBackgroundColor                                            // Background\n\
StringModule.siUIButtonDisable                                              // ButtonDisable\n\
StringModule.siUICX                                                         // CX\n\
StringModule.siUICY                                                         // CY\n\
StringModule.siUICapability                                                 // Capability\n\
StringModule.siUICaption                                                    // caption\n\
StringModule.siUIColumnCnt                                                  // nocol\n\
StringModule.siUIColumnGap                                                  // colgap\n\
StringModule.siUICommentColor                                               // CommentColor\n\
StringModule.siUICommentFont                                                // CommentFont\n\
StringModule.siUIContinue                                                   // Continue\n\
StringModule.siUIDecimals                                                   // decimals\n\
StringModule.siUIDictionary                                                 // Dictionary\n\
StringModule.siUIFCurveColorNonBijective                                    // ColorNonBijective\n\
StringModule.siUIFCurveGhosting                                             // Ghosting\n\
StringModule.siUIFCurveGridSpaceX                                           // GridSpaceX\n\
StringModule.siUIFCurveGridSpaceY                                           // GridSpaceY\n\
StringModule.siUIFCurveLabelX                                               // LabelX\n\
StringModule.siUIFCurveLabelY                                               // LabelY\n\
StringModule.siUIFCurveNoGrid                                               // NoGrid\n\
StringModule.siUIFCurveNoRulerX                                             // NoRulerX\n\
StringModule.siUIFCurveNoRulerY                                             // NoRulerY\n\
StringModule.siUIFCurveShowTimeCursor                                       // ShowTimeCursor\n\
StringModule.siUIFCurveSnapX                                                // SnapX\n\
StringModule.siUIFCurveSnapY                                                // SnapY\n\
StringModule.siUIFCurveViewMaxX                                             // ViewMaxX\n\
StringModule.siUIFCurveViewMaxY                                             // ViewMaxY\n\
StringModule.siUIFCurveViewMinX                                             // ViewMinX\n\
StringModule.siUIFCurveViewMinY                                             // ViewMinY\n\
StringModule.siUIFileFilter                                                 // FileFilter\n\
StringModule.siUIFileMustExist                                              // MustExist\n\
StringModule.siUIFilePath                                                   // path\n\
StringModule.siUIFolding                                                    // Folding\n\
StringModule.siUIFont                                                       // Font\n\
StringModule.siUIFontSize                                                   // FontSize\n\
StringModule.siUIForegroundColor                                            // Foreground\n\
StringModule.siUIGradientConDivot                                           // ConDivot\n\
StringModule.siUIGradientMaxMarker                                          // MaxMarker\n\
StringModule.siUIGradientMidPoint                                           // MidPoint\n\
StringModule.siUIGradientType                                               // GradientType\n\
StringModule.siUIGridColumnWidths                                           // ColumnWidths\n\
StringModule.siUIGridHideColumnHeader                                       // HideColumnHeader\n\
StringModule.siUIGridHideRowHeader                                          // HideRowHeader\n\
StringModule.siUIGridLockColumnHeader                                       // LockColumnHeader\n\
StringModule.siUIGridLockColumnWidth                                        // LockColumnWidth\n\
StringModule.siUIGridLockRowHeader                                          // LockRowHeader\n\
StringModule.siUIGridLockRowHeight                                          // LockRowHeight\n\
StringModule.siUIGridReadOnlyColumns                                        // ReadOnlyColumns\n\
StringModule.siUIGridSelectionMode                                          // SelectionMode\n\
StringModule.siUIGridShowColumns                                            // ShowColumns\n\
StringModule.siUIGridThumbnailSize                                          // ThumbnailSize\n\
StringModule.siUIHeight                                                     // Height\n\
StringModule.siUIHelpButtonFile                                             // HelpButtonFile\n\
StringModule.siUIHelpFile                                                   // HelpFile\n\
StringModule.siUIHelpID                                                     // HelpID\n\
StringModule.siUIHorizontalScroll                                           // HorizontalScroll\n\
StringModule.siUIImageFile                                                  // ImageFile\n\
StringModule.siUIInitialDir                                                 // InitialDir\n\
StringModule.siUIItems                                                      // UIItems\n\
StringModule.siUIKeywordFile                                                // KeywordFile\n\
StringModule.siUIKeywords                                                   // Keywords\n\
StringModule.siUILabel                                                      // label\n\
StringModule.siUILabelMinPixels                                             // LabelMinPixels\n\
StringModule.siUILabelPercentage                                            // LabelPercentage\n\
StringModule.siUILanguage                                                   // Language\n\
StringModule.siUILayoutDefault                                              // UI_LAYOUT_DEFAULT\n\
StringModule.siUILineCnt                                                    // noline\n\
StringModule.siUILineGap                                                    // linegap\n\
StringModule.siUILineNumbering                                              // LineNumbering\n\
StringModule.siUILineWrap                                                   // LineWrap\n\
StringModule.siUILogarithmic                                                // log\n\
StringModule.siUILogic                                                      // Logic\n\
StringModule.siUILogicFile                                                  // LogicFile\n\
StringModule.siUILogicPrefix                                                // LogicPrefix\n\
StringModule.siUIMarginWidth                                                // MarginWidth\n\
StringModule.siUIMultiSelectionListBox                                      // MultiSelectionListBox\n\
StringModule.siUINoLabel                                                    // NoLabel\n\
StringModule.siUINoSlider                                                   // NoSlider\n\
StringModule.siUIOpenFile                                                   // OpenFile\n\
StringModule.siUIPreprocessorColor                                          // PreprocessorColor\n\
StringModule.siUISelectionColor                                             // selcolor\n\
StringModule.siUIShowChildren                                               // ShowChildren\n\
StringModule.siUIShowClip                                                   // showclip\n\
StringModule.siUIShowFrame                                                  // ShowFrame\n\
StringModule.siUIShowIndentationGuides                                      // ShowIndentationGuides\n\
StringModule.siUIShowWhitespace                                             // ShowWhitespace\n\
StringModule.siUIStyle                                                      // style\n\
StringModule.siUISubFolder                                                  // SubFolder\n\
StringModule.siUISyncSlider                                                 // SyncSlider\n\
StringModule.siUITabSize                                                    // TabSize\n\
StringModule.siUIThumbWheel                                                 // ThumbWheel\n\
StringModule.siUIToolbar                                                    // Toolbar\n\
StringModule.siUITreadmill                                                  // Treadmill\n\
StringModule.siUIType                                                       // UIType\n\
StringModule.siUIUseSelectionIcon                                           // useselicon\n\
StringModule.siUIUseSpacesForTab                                            // UseSpacesForTab\n\
StringModule.siUIValueOnly                                                  // ValueOnly\n\
StringModule.siUIVerticalScroll                                             // VerticalScroll\n\
StringModule.siUIWidthPercentage                                            // WidthPercentage\n\
StringModule.siUIsolineFilter                                               // uisoline\n\
StringModule.siUKnotCurveFilter                                             // uknotcurve\n\
StringModule.siUVProjDefType                                                // uvprojdef\n\
StringModule.siUpVctCnsType                                                 // upvctcns\n\
StringModule.siUseRenderTreeLayoutPortDisplayNamesAttribute                 // UseRenderTreeLayoutPortDisplayNames\n\
StringModule.siUserMotionType                                               // motion\n\
StringModule.siUserNormalType                                               // normal\n\
StringModule.siVIsolineFilter                                               // visoline\n\
StringModule.siVKnotCurveFilter                                             // vknotcurve\n\
StringModule.siVertexCluster                                                // pnt\n\
StringModule.siVertexcolorType                                              // vertexcolor\n\
StringModule.siViewingKeyword                                               // Viewing\n\
StringModule.siVirtualComponentFamily                                       // Virtual Components\n\
StringModule.siVirtualCurveFamily                                           // Virtual Curves\n\
StringModule.siVisemeActionType                                             // VisemeAction\n\
StringModule.siVisibilityType                                               // visibility\n\
StringModule.siVolumeDeformType                                             // volume_deform\n\
StringModule.siVolumeShaderFamily                                           // Volume Shaders\n\
StringModule.siVolumicLightSceneType                                        // VolumicLightScene\n\
StringModule.siVolumicLightType                                             // VolumicLight\n\
StringModule.siVortexCtrlType                                               // vortex\n\
StringModule.siVtxColPainterOpType                                          // vertexcolorpainter\n\
StringModule.siVtxColPropOpType                                             // vertexcolorpropop\n\
StringModule.siWaveCtrlType                                                 // wave\n\
StringModule.siWaveFilter                                                   // wave\n\
StringModule.siWaveOpType                                                   // wave\n\
StringModule.siWeldEdgesOpType                                              // weldedgesop\n\
StringModule.siWeldPntOpType                                                // weldpointsop\n\
StringModule.siWgtMapCnxOpType                                              // WMCnxOp\n\
StringModule.siWgtMapOpType                                                 // weightmapop\n\
StringModule.siWgtMapType                                                   // wtmap\n\
StringModule.siWgtMapsMixOpType                                             // WghtMapsMixOp\n\
StringModule.siWgtPainterOpType                                             // weightpainter\n\
StringModule.siWindType                                                     // wind\n\
StringModule.siWritableImageAttribute                                       // WritableImage\n\
StringModule.siWritableImageTypeAttribute                                   // WritableImageType\n\
StringModule.siWtStrokeOpType                                               // wtstroke\n\
StringModule.siXGSRealTimePortType                                          // xgsRTCtx</current></pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si0DComponentFamily\"> </a>si0DComponentFamily		</td>\n\
		<td class=\"example\">0DComponent		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si1DComponentFamily\"> </a>si1DComponentFamily		</td>\n\
		<td class=\"example\">1DComponent		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si2DComponentFamily\"> </a>si2DComponentFamily		</td>\n\
		<td class=\"example\">2DComponent		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si2PntCnsType\"> </a>si2PntCnsType		</td>\n\
		<td class=\"example\">2ptscns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si3DObjectFamily\"> </a>si3DObjectFamily		</td>\n\
		<td class=\"example\">3D Objects		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si3DObjectType\"> </a>si3DObjectType		</td>\n\
		<td class=\"example\">#3dobject		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si3PntCnsType\"> </a>si3PntCnsType		</td>\n\
		<td class=\"example\">3ptscns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetAll\"> </a>siATFilterPresetAll		</td>\n\
		<td class=\"example\">All		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetAnimation\"> </a>siATFilterPresetAnimation		</td>\n\
		<td class=\"example\">Animation		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetColor\"> </a>siATFilterPresetColor		</td>\n\
		<td class=\"example\">Color		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetCustom\"> </a>siATFilterPresetCustom		</td>\n\
		<td class=\"example\">Custom		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetGeneral\"> </a>siATFilterPresetGeneral		</td>\n\
		<td class=\"example\">General		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetKinematics\"> </a>siATFilterPresetKinematics		</td>\n\
		<td class=\"example\">Kinematics		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetLocalTransform\"> </a>siATFilterPresetLocalTransform		</td>\n\
		<td class=\"example\">LocalTransform		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetModeling\"> </a>siATFilterPresetModeling		</td>\n\
		<td class=\"example\">Modeling		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetPosition\"> </a>siATFilterPresetPosition		</td>\n\
		<td class=\"example\">Position		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetPositionX\"> </a>siATFilterPresetPositionX		</td>\n\
		<td class=\"example\">PositionX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetPositionY\"> </a>siATFilterPresetPositionY		</td>\n\
		<td class=\"example\">PositionY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetPositionZ\"> </a>siATFilterPresetPositionZ		</td>\n\
		<td class=\"example\">PositionZ		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRendering\"> </a>siATFilterPresetRendering		</td>\n\
		<td class=\"example\">Rendering		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRotation\"> </a>siATFilterPresetRotation		</td>\n\
		<td class=\"example\">Rotation		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRotationX\"> </a>siATFilterPresetRotationX		</td>\n\
		<td class=\"example\">RotationX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRotationY\"> </a>siATFilterPresetRotationY		</td>\n\
		<td class=\"example\">RotationY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetRotationZ\"> </a>siATFilterPresetRotationZ		</td>\n\
		<td class=\"example\">RotationZ		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetScaling\"> </a>siATFilterPresetScaling		</td>\n\
		<td class=\"example\">Scaling		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetScalingX\"> </a>siATFilterPresetScalingX		</td>\n\
		<td class=\"example\">ScalingX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetScalingY\"> </a>siATFilterPresetScalingY		</td>\n\
		<td class=\"example\">ScalingY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetScalingZ\"> </a>siATFilterPresetScalingZ		</td>\n\
		<td class=\"example\">ScalingZ		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterPresetViewing\"> </a>siATFilterPresetViewing		</td>\n\
		<td class=\"example\">Viewing		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterPreset.html\">siATFilterPreset</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged1\"> </a>siATFilterTagged1		</td>\n\
		<td class=\"example\">Tag1		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged10\"> </a>siATFilterTagged10		</td>\n\
		<td class=\"example\">Tag10		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged2\"> </a>siATFilterTagged2		</td>\n\
		<td class=\"example\">Tag2		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged3\"> </a>siATFilterTagged3		</td>\n\
		<td class=\"example\">Tag3		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged4\"> </a>siATFilterTagged4		</td>\n\
		<td class=\"example\">Tag4		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged5\"> </a>siATFilterTagged5		</td>\n\
		<td class=\"example\">Tag5		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged6\"> </a>siATFilterTagged6		</td>\n\
		<td class=\"example\">Tag6		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged7\"> </a>siATFilterTagged7		</td>\n\
		<td class=\"example\">Tag7		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged8\"> </a>siATFilterTagged8		</td>\n\
		<td class=\"example\">Tag8		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTagged9\"> </a>siATFilterTagged9		</td>\n\
		<td class=\"example\">Tag9		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siATFilterTaggedAll\"> </a>siATFilterTaggedAll		</td>\n\
		<td class=\"example\">TagAll		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siATFilterTaggedParameters.html\">siATFilterTaggedParameters</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siActionClipType\"> </a>siActionClipType		</td>\n\
		<td class=\"example\">actionclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siActionType\"> </a>siActionType		</td>\n\
		<td class=\"example\">Action		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddEdgeOpType\"> </a>siAddEdgeOpType		</td>\n\
		<td class=\"example\">addedgeop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddMeshPntOpType\"> </a>siAddMeshPntOpType		</td>\n\
		<td class=\"example\">addmeshpointsop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddNurbsCrvPntOpType\"> </a>siAddNurbsCrvPntOpType		</td>\n\
		<td class=\"example\">addnurbscrvpointsop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddNurbsSrfPntOpType\"> </a>siAddNurbsSrfPntOpType		</td>\n\
		<td class=\"example\">addnurbssrfpointsop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddPntMiddleCrvType\"> </a>siAddPntMiddleCrvType		</td>\n\
		<td class=\"example\">addpt_middlecrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddPntMiddleSrfOpType\"> </a>siAddPntMiddleSrfOpType		</td>\n\
		<td class=\"example\">addpt_middlesrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAmbientLightingType\"> </a>siAmbientLightingType		</td>\n\
		<td class=\"example\">AmbientLighting		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAnimCompoundAnimItem\"> </a>siAnimCompoundAnimItem		</td>\n\
		<td class=\"example\">AnimCompoundAnimItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAnimationKeyword\"> </a>siAnimationKeyword		</td>\n\
		<td class=\"example\">Animation		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArcPrimType\"> </a>siArcPrimType		</td>\n\
		<td class=\"example\">arc		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerAnimatableParameters\"> </a>siArgHandlerAnimatableParameters		</td>\n\
		<td class=\"example\">AnimatableParameters		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siArgumentHandler.html\">siArgumentHandler</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerCollection\"> </a>siArgHandlerCollection		</td>\n\
		<td class=\"example\">Collection		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siArgumentHandler.html\">siArgumentHandler</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerFrame\"> </a>siArgHandlerFrame		</td>\n\
		<td class=\"example\">Frame		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siArgumentHandler.html\">siArgumentHandler</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerFrameRate\"> </a>siArgHandlerFrameRate		</td>\n\
		<td class=\"example\">FrameRate		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siArgumentHandler.html\">siArgumentHandler</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerMarkedParameters\"> </a>siArgHandlerMarkedParameters		</td>\n\
		<td class=\"example\">MarkedParameters		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siArgumentHandler.html\">siArgumentHandler</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgHandlerSingleObj\"> </a>siArgHandlerSingleObj		</td>\n\
		<td class=\"example\">SingleObj		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siArgumentHandler.html\">siArgumentHandler</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAssignmentOperatorFamily\"> </a>siAssignmentOperatorFamily		</td>\n\
		<td class=\"example\">AssignmentOperators		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAttractorCtrlType\"> </a>siAttractorCtrlType		</td>\n\
		<td class=\"example\">attractor		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAutoCageAssignOpType\"> </a>siAutoCageAssignOpType		</td>\n\
		<td class=\"example\">autocageassign		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAutoEnvAssignOpType\"> </a>siAutoEnvAssignOpType		</td>\n\
		<td class=\"example\">autoenvassign		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAutoInspect\"> </a>siAutoInspect		</td>\n\
		<td class=\"example\">AutoInspectEnabled		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBPlaneCnsType\"> </a>siBPlaneCnsType		</td>\n\
		<td class=\"example\">bplanecns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBVolCnsType\"> </a>siBVolCnsType		</td>\n\
		<td class=\"example\">bvolcns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBallJointCnsType\"> </a>siBallJointCnsType		</td>\n\
		<td class=\"example\">BallJointCns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBasePathCnsType\"> </a>siBasePathCnsType		</td>\n\
		<td class=\"example\">basepathcns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBendOpType\"> </a>siBendOpType		</td>\n\
		<td class=\"example\">bendop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBevelOpType\"> </a>siBevelOpType		</td>\n\
		<td class=\"example\">bevelop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBirail2GenOpType\"> </a>siBirail2GenOpType		</td>\n\
		<td class=\"example\">Birail2Generators		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBirailOpType\"> </a>siBirailOpType		</td>\n\
		<td class=\"example\">birail		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBlasterOpType\"> </a>siBlasterOpType		</td>\n\
		<td class=\"example\">blasterop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBlendCrvOpType\"> </a>siBlendCrvOpType		</td>\n\
		<td class=\"example\">blendcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBlendSrfOpType\"> </a>siBlendSrfOpType		</td>\n\
		<td class=\"example\">blendsrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBooleanGenOpType\"> </a>siBooleanGenOpType		</td>\n\
		<td class=\"example\">booleangen		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBooleanSrfTopoOpType\"> </a>siBooleanSrfTopoOpType		</td>\n\
		<td class=\"example\">booleansrftopoop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBoundaryCluster\"> </a>siBoundaryCluster		</td>\n\
		<td class=\"example\">bndry		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBoundaryFilter\"> </a>siBoundaryFilter		</td>\n\
		<td class=\"example\">boundary		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBridgeOpType\"> </a>siBridgeOpType		</td>\n\
		<td class=\"example\">bridgeop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBrushPropertiesType\"> </a>siBrushPropertiesType		</td>\n\
		<td class=\"example\">BrushProperties		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBulgeOpType\"> </a>siBulgeOpType		</td>\n\
		<td class=\"example\">bulgeop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCAVBinormalsAttribute\"> </a>siCAVBinormalsAttribute		</td>\n\
		<td class=\"example\">Binormals		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCAVTangentsAttribute\"> </a>siCAVTangentsAttribute		</td>\n\
		<td class=\"example\">Tangents		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCageDeformOpType\"> </a>siCageDeformOpType		</td>\n\
		<td class=\"example\">cagedeformop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCamDispType\"> </a>siCamDispType		</td>\n\
		<td class=\"example\">camdisp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCamVisType\"> </a>siCamVisType		</td>\n\
		<td class=\"example\">camvis		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraFamily\"> </a>siCameraFamily		</td>\n\
		<td class=\"example\">Camera		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraFilter\"> </a>siCameraFilter		</td>\n\
		<td class=\"example\">camera		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraLensFlareType\"> </a>siCameraLensFlareType		</td>\n\
		<td class=\"example\">CameraLensFlare		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraPrimType\"> </a>siCameraPrimType		</td>\n\
		<td class=\"example\">camera		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraRootPrimType\"> </a>siCameraRootPrimType		</td>\n\
		<td class=\"example\">CameraRoot		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraTxtOpType\"> </a>siCameraTxtOpType		</td>\n\
		<td class=\"example\">CameraTxt		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCapOpType\"> </a>siCapOpType		</td>\n\
		<td class=\"example\">capop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCenterOpType\"> </a>siCenterOpType		</td>\n\
		<td class=\"example\">center		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainBonePrimType\"> </a>siChainBonePrimType		</td>\n\
		<td class=\"example\">bone		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainEffPrimType\"> </a>siChainEffPrimType		</td>\n\
		<td class=\"example\">eff		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainElementFamily\"> </a>siChainElementFamily		</td>\n\
		<td class=\"example\">Chain Elements		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainElementFilter\"> </a>siChainElementFilter		</td>\n\
		<td class=\"example\">chainelement		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainRootPrimType\"> </a>siChainRootPrimType		</td>\n\
		<td class=\"example\">root		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCirclePrimType\"> </a>siCirclePrimType		</td>\n\
		<td class=\"example\">circle		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCleanCrvOpType\"> </a>siCleanCrvOpType		</td>\n\
		<td class=\"example\">cleancrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCleanSrfOpType\"> </a>siCleanSrfOpType		</td>\n\
		<td class=\"example\">cleansrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipAnimCompoundType\"> </a>siClipAnimCompoundType		</td>\n\
		<td class=\"example\">AnimActionCompoundClip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipAnimationLayerType\"> </a>siClipAnimationLayerType		</td>\n\
		<td class=\"example\">mixerlayerclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipAnimationType\"> </a>siClipAnimationType		</td>\n\
		<td class=\"example\">mixeranimclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipAudioType\"> </a>siClipAudioType		</td>\n\
		<td class=\"example\">mixeraudioclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipCacheType\"> </a>siClipCacheType		</td>\n\
		<td class=\"example\">mixercacheclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipImageType\"> </a>siClipImageType		</td>\n\
		<td class=\"example\">ImageClip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipMixerType\"> </a>siClipMixerType		</td>\n\
		<td class=\"example\">Mixer		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipShapeCompoundType\"> </a>siClipShapeCompoundType		</td>\n\
		<td class=\"example\">ShapeActionCompoundClip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipShapeType\"> </a>siClipShapeType		</td>\n\
		<td class=\"example\">mixershapeclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipShotType\"> </a>siClipShotType		</td>\n\
		<td class=\"example\">camerashotclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siClipType.html\">siClipType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClothOpType\"> </a>siClothOpType		</td>\n\
		<td class=\"example\">ClothOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClothPropType\"> </a>siClothPropType		</td>\n\
		<td class=\"example\">ClothProp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCloudPrimType\"> </a>siCloudPrimType		</td>\n\
		<td class=\"example\">cloud		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsColorType\"> </a>siClsColorType		</td>\n\
		<td class=\"example\">clscolor		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsCtrOpType\"> </a>siClsCtrOpType		</td>\n\
		<td class=\"example\">clsctr		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsKeyType\"> </a>siClsKeyType		</td>\n\
		<td class=\"example\">clskey		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsKeyWgtMapOpType\"> </a>siClsKeyWgtMapOpType		</td>\n\
		<td class=\"example\">ClusterKeyWeightMap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsPoseType\"> </a>siClsPoseType		</td>\n\
		<td class=\"example\">clspose		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsShapeCombinerOpType\"> </a>siClsShapeCombinerOpType		</td>\n\
		<td class=\"example\">clustershapecombiner		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsUVSpaceTxtType\"> </a>siClsUVSpaceTxtType		</td>\n\
		<td class=\"example\">uvspace		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterFamily\"> </a>siClusterFamily		</td>\n\
		<td class=\"example\">Clusters		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterFilter\"> </a>siClusterFilter		</td>\n\
		<td class=\"example\">cluster		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterKeyword\"> </a>siClusterKeyword		</td>\n\
		<td class=\"example\">Cluster		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterableComponentFamily\"> </a>siClusterableComponentFamily		</td>\n\
		<td class=\"example\">Clusterable Components		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCoBBoxSclOpType\"> </a>siCoBBoxSclOpType		</td>\n\
		<td class=\"example\">CoBBoxSclOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCoPoseFCrvOpType\"> </a>siCoPoseFCrvOpType		</td>\n\
		<td class=\"example\">CoPoseFcurveOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCollapseOpType\"> </a>siCollapseOpType		</td>\n\
		<td class=\"example\">collapseop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCompensationFlag\"> </a>siCompensationFlag		</td>\n\
		<td class=\"example\">SI3D_CONSTRAINT_COMPENSATION_MODE		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCompoundMappedItem\"> </a>siCompoundMappedItem		</td>\n\
		<td class=\"example\">CompoundMappedItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siMappedItemType.html\">siMappedItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConePrimType\"> </a>siConePrimType		</td>\n\
		<td class=\"example\">cone		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstraintAnimItem\"> </a>siConstraintAnimItem		</td>\n\
		<td class=\"example\">ConstraintAnimItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstraintFamily\"> </a>siConstraintFamily		</td>\n\
		<td class=\"example\">Constraints		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstraintFilter\"> </a>siConstraintFilter		</td>\n\
		<td class=\"example\">constraint		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstraintKeyword\"> </a>siConstraintKeyword		</td>\n\
		<td class=\"example\">Constraint		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstraintMappedItem\"> </a>siConstraintMappedItem		</td>\n\
		<td class=\"example\">ConstraintMappedItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siMappedItemType.html\">siMappedItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siContourContrastShaderFamily\"> </a>siContourContrastShaderFamily		</td>\n\
		<td class=\"example\">Contour Contrast Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siContourShaderFamily\"> </a>siContourShaderFamily		</td>\n\
		<td class=\"example\">Contour Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siContourStoreShaderFamily\"> </a>siContourStoreShaderFamily		</td>\n\
		<td class=\"example\">Contour Store Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlBitmap\"> </a>siControlBitmap		</td>\n\
		<td class=\"example\">BitmapWidget		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlBoolean\"> </a>siControlBoolean		</td>\n\
		<td class=\"example\">Boolean		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlButton\"> </a>siControlButton		</td>\n\
		<td class=\"example\">commandbutton		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlCheck\"> </a>siControlCheck		</td>\n\
		<td class=\"example\">Check		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlCombo\"> </a>siControlCombo		</td>\n\
		<td class=\"example\">Combo		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlEdit\"> </a>siControlEdit		</td>\n\
		<td class=\"example\">edit		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlFCurve\"> </a>siControlFCurve		</td>\n\
		<td class=\"example\">FCurveWidget		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlFilePath\"> </a>siControlFilePath		</td>\n\
		<td class=\"example\">FilePath		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlFilter\"> </a>siControlFilter		</td>\n\
		<td class=\"example\">controlobject		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlFolder\"> </a>siControlFolder		</td>\n\
		<td class=\"example\">Folder		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlGradient\"> </a>siControlGradient		</td>\n\
		<td class=\"example\">gradient		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlGrid\"> </a>siControlGrid		</td>\n\
		<td class=\"example\">GridWidget		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlIconList\"> </a>siControlIconList		</td>\n\
		<td class=\"example\">IconList		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlImageClip\"> </a>siControlImageClip		</td>\n\
		<td class=\"example\">ImageClipWidget		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlListBox\"> </a>siControlListBox		</td>\n\
		<td class=\"example\">ListBox		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlNumber\"> </a>siControlNumber		</td>\n\
		<td class=\"example\">Number		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlObjectFamily\"> </a>siControlObjectFamily		</td>\n\
		<td class=\"example\">Control Objects		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlObjectKeyword\"> </a>siControlObjectKeyword		</td>\n\
		<td class=\"example\">ControlObject		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlObjectNurbsTextureFamily\"> </a>siControlObjectNurbsTextureFamily		</td>\n\
		<td class=\"example\">Control Objects Nurbs Texture		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlObjectTextureFamily\"> </a>siControlObjectTextureFamily		</td>\n\
		<td class=\"example\">Control Objects Texture		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlObjectTextureProjectionFamily\"> </a>siControlObjectTextureProjectionFamily		</td>\n\
		<td class=\"example\">Control Objects Texture Projection		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlRGB\"> </a>siControlRGB		</td>\n\
		<td class=\"example\">RGB		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlRGBA\"> </a>siControlRGBA		</td>\n\
		<td class=\"example\">RGBA		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlRadio\"> </a>siControlRadio		</td>\n\
		<td class=\"example\">Radio		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlStatic\"> </a>siControlStatic		</td>\n\
		<td class=\"example\">Static		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlString\"> </a>siControlString		</td>\n\
		<td class=\"example\">String		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlSynoptic\"> </a>siControlSynoptic		</td>\n\
		<td class=\"example\">SynopticWidget		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlTextEditor\"> </a>siControlTextEditor		</td>\n\
		<td class=\"example\">TextEditorWidget		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlTextureSpace\"> </a>siControlTextureSpace		</td>\n\
		<td class=\"example\">TextureSpaceItem.TextureSpaceItem.1		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGControlType.html\">siPPGControlType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConverterKeyword\"> </a>siConverterKeyword		</td>\n\
		<td class=\"example\">Converter		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConverterOperatorFamily\"> </a>siConverterOperatorFamily		</td>\n\
		<td class=\"example\">Converters		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCopyOpType\"> </a>siCopyOpType		</td>\n\
		<td class=\"example\">copyop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCopyShapeOpType\"> </a>siCopyShapeOpType		</td>\n\
		<td class=\"example\">copyshape		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCopyUVWOpType\"> </a>siCopyUVWOpType		</td>\n\
		<td class=\"example\">Copyuvw		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCreatePolyOpType\"> </a>siCreatePolyOpType		</td>\n\
		<td class=\"example\">createpolygonop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvCnsType\"> </a>siCrvCnsType		</td>\n\
		<td class=\"example\">curvecns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvCreationOpType\"> </a>siCrvCreationOpType		</td>\n\
		<td class=\"example\">CurveCreationOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvCtrlOpType\"> </a>siCrvCtrlOpType		</td>\n\
		<td class=\"example\">CrvControlOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvCutOpType\"> </a>siCrvCutOpType		</td>\n\
		<td class=\"example\">CrvCutOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvDeformOpType\"> </a>siCrvDeformOpType		</td>\n\
		<td class=\"example\">crvdeform		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvListAggregatePrimType\"> </a>siCrvListAggregatePrimType		</td>\n\
		<td class=\"example\">crvlistaggregate		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvListPrimType\"> </a>siCrvListPrimType		</td>\n\
		<td class=\"example\">crvlist		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvListToMeshOpType\"> </a>siCrvListToMeshOpType		</td>\n\
		<td class=\"example\">CurveListToMesh		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvNetOpType\"> </a>siCrvNetOpType		</td>\n\
		<td class=\"example\">curvenet		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvOpenCloseOpType\"> </a>siCrvOpenCloseOpType		</td>\n\
		<td class=\"example\">crvopenclose		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvReparamOpType\"> </a>siCrvReparamOpType		</td>\n\
		<td class=\"example\">crvreparam		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvShiftOpType\"> </a>siCrvShiftOpType		</td>\n\
		<td class=\"example\">crvshift		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCubePrimType\"> </a>siCubePrimType		</td>\n\
		<td class=\"example\">cube		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurrentKeyword\"> </a>siCurrentKeyword		</td>\n\
		<td class=\"example\"><current>		</current></td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveFamily\"> </a>siCurveFamily		</td>\n\
		<td class=\"example\">Curves		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveFilter\"> </a>siCurveFilter		</td>\n\
		<td class=\"example\">curve		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCurveKeyword\"> </a>siCurveKeyword		</td>\n\
		<td class=\"example\">Curve		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomCommandLibCache\"> </a>siCustomCommandLibCache		</td>\n\
		<td class=\"example\">CustomCommandLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomOperatorLibCache\"> </a>siCustomOperatorLibCache		</td>\n\
		<td class=\"example\">CustomOperatorLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomPSetKeyword\"> </a>siCustomPSetKeyword		</td>\n\
		<td class=\"example\">CustomPSet		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomParamSet\"> </a>siCustomParamSet		</td>\n\
		<td class=\"example\">customparamset		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomTypeNameAttribute\"> </a>siCustomTypeNameAttribute		</td>\n\
		<td class=\"example\">CustomTypeName		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCycleUVWType\"> </a>siCycleUVWType		</td>\n\
		<td class=\"example\">Cycleuvw		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCylinderPrimType\"> </a>siCylinderPrimType		</td>\n\
		<td class=\"example\">cylinder		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDGlowType\"> </a>siDGlowType		</td>\n\
		<td class=\"example\">dglow		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDefaultConnectionAttribute\"> </a>siDefaultConnectionAttribute		</td>\n\
		<td class=\"example\">DefaultConnection		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeformBySpineOp2Type\"> </a>siDeformBySpineOp2Type		</td>\n\
		<td class=\"example\">deformbyspineop2		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeformBySpineOpType\"> </a>siDeformBySpineOpType		</td>\n\
		<td class=\"example\">deformbyspineop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeformKeyword\"> </a>siDeformKeyword		</td>\n\
		<td class=\"example\">Deform		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeformOpType\"> </a>siDeformOpType		</td>\n\
		<td class=\"example\">deformop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeformOperatorFamily\"> </a>siDeformOperatorFamily		</td>\n\
		<td class=\"example\">DeformOperators		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDelPntCrvOpType\"> </a>siDelPntCrvOpType		</td>\n\
		<td class=\"example\">delpt_crv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeleteCompOpType\"> </a>siDeleteCompOpType		</td>\n\
		<td class=\"example\">deletecompop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDirCnsType\"> </a>siDirCnsType		</td>\n\
		<td class=\"example\">dircns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDiscPrimType\"> </a>siDiscPrimType		</td>\n\
		<td class=\"example\">disc		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplacementShaderFamily\"> </a>siDisplacementShaderFamily		</td>\n\
		<td class=\"example\">Displacement Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplayCallbackLibCache\"> </a>siDisplayCallbackLibCache		</td>\n\
		<td class=\"example\">DisplayCallbackLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplayLibCache\"> </a>siDisplayLibCache		</td>\n\
		<td class=\"example\">DisplayLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplayPassLibCache\"> </a>siDisplayPassLibCache		</td>\n\
		<td class=\"example\">DisplayPassLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplayType\"> </a>siDisplayType		</td>\n\
		<td class=\"example\">display		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDissolveCompOpType\"> </a>siDissolveCompOpType		</td>\n\
		<td class=\"example\">dissolvecompop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDistCnsType\"> </a>siDistCnsType		</td>\n\
		<td class=\"example\">distcns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDistanceOpType\"> </a>siDistanceOpType		</td>\n\
		<td class=\"example\">DistanceOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDodecahedronPrimType\"> </a>siDodecahedronPrimType		</td>\n\
		<td class=\"example\">dodecahedron		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDragCtrlPrimType\"> </a>siDragCtrlPrimType		</td>\n\
		<td class=\"example\">drag		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDynamicsKeyword\"> </a>siDynamicsKeyword		</td>\n\
		<td class=\"example\">Dynamics		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEddyCtrlPrimType\"> </a>siEddyCtrlPrimType		</td>\n\
		<td class=\"example\">eddy		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEdgeCluster\"> </a>siEdgeCluster		</td>\n\
		<td class=\"example\">edge		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEdgeFilter\"> </a>siEdgeFilter		</td>\n\
		<td class=\"example\">edge		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEditPolyOpType\"> </a>siEditPolyOpType		</td>\n\
		<td class=\"example\">editpolygonop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEffectorFilter\"> </a>siEffectorFilter		</td>\n\
		<td class=\"example\">effector		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEmissionPropType\"> </a>siEmissionPropType		</td>\n\
		<td class=\"example\">EmissionProp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvSelClsOpType\"> </a>siEnvSelClsOpType		</td>\n\
		<td class=\"example\">EnvSelClsOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvWgtType\"> </a>siEnvWgtType		</td>\n\
		<td class=\"example\">envweights		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvelopOpType\"> </a>siEnvelopOpType		</td>\n\
		<td class=\"example\">envelopop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvironmentShaderFamily\"> </a>siEnvironmentShaderFamily		</td>\n\
		<td class=\"example\">Environment Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEventLibCache\"> </a>siEventLibCache		</td>\n\
		<td class=\"example\">EventLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplosionOpType\"> </a>siExplosionOpType		</td>\n\
		<td class=\"example\">ExplosionOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExpressionAnimItem\"> </a>siExpressionAnimItem		</td>\n\
		<td class=\"example\">ExpressionAnimItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExpressionMappedItem\"> </a>siExpressionMappedItem		</td>\n\
		<td class=\"example\">ExpressionMappedItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siMappedItemType.html\">siMappedItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExpressionsKeyword\"> </a>siExpressionsKeyword		</td>\n\
		<td class=\"example\">expressions		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtendCrv2PntOpType\"> </a>siExtendCrv2PntOpType		</td>\n\
		<td class=\"example\">extendcrv2pt		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtendToCrvOpType\"> </a>siExtendToCrvOpType		</td>\n\
		<td class=\"example\">extendtocrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtractCrvOpType\"> </a>siExtractCrvOpType		</td>\n\
		<td class=\"example\">extractcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtractCrvSegOpType\"> </a>siExtractCrvSegOpType		</td>\n\
		<td class=\"example\">extractcrvseg		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtractPolyOpType\"> </a>siExtractPolyOpType		</td>\n\
		<td class=\"example\">extractpolygons		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtractSubCrvOpType\"> </a>siExtractSubCrvOpType		</td>\n\
		<td class=\"example\">extractsubcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtrude2ProfsOpType\"> </a>siExtrude2ProfsOpType		</td>\n\
		<td class=\"example\">extrude2profs		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtrudeCompAxisOpType\"> </a>siExtrudeCompAxisOpType		</td>\n\
		<td class=\"example\">extrudecompaxisop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtrudeComponentOpType\"> </a>siExtrudeComponentOpType		</td>\n\
		<td class=\"example\">extrudecomponentop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtrusionOpType\"> </a>siExtrusionOpType		</td>\n\
		<td class=\"example\">extrusion		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFCurveAnimItem\"> </a>siFCurveAnimItem		</td>\n\
		<td class=\"example\">FCurveAnimItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFCurveMappedItem\"> </a>siFCurveMappedItem		</td>\n\
		<td class=\"example\">FCurveMappedItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siMappedItemType.html\">siMappedItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFaceCluster\"> </a>siFaceCluster		</td>\n\
		<td class=\"example\">face		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFanType\"> </a>siFanType		</td>\n\
		<td class=\"example\">fan		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFillHoleOpType\"> </a>siFillHoleOpType		</td>\n\
		<td class=\"example\">fillHoleOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilletCrvOpType\"> </a>siFilletCrvOpType		</td>\n\
		<td class=\"example\">filletcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilletSrfOpType\"> </a>siFilletSrfOpType		</td>\n\
		<td class=\"example\">Fillet Surfaces		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilter3DObjectType\"> </a>siFilter3DObjectType		</td>\n\
		<td class=\"example\">Filter3DObjectType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFilterFundamentalType.html\">siFilterFundamentalType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterEdgeOpType\"> </a>siFilterEdgeOpType		</td>\n\
		<td class=\"example\">filteredgeop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterLibCache\"> </a>siFilterLibCache		</td>\n\
		<td class=\"example\">FilterLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterObjectType\"> </a>siFilterObjectType		</td>\n\
		<td class=\"example\">FilterObjectType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFilterFundamentalType.html\">siFilterFundamentalType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterPolyOpType\"> </a>siFilterPolyOpType		</td>\n\
		<td class=\"example\">filterpolygonop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterPropertyType\"> </a>siFilterPropertyType		</td>\n\
		<td class=\"example\">FilterPropertyType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFilterFundamentalType.html\">siFilterFundamentalType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterSubComponentType\"> </a>siFilterSubComponentType		</td>\n\
		<td class=\"example\">FilterSubComponentType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFilterFundamentalType.html\">siFilterFundamentalType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFitCrvOpType\"> </a>siFitCrvOpType		</td>\n\
		<td class=\"example\">fitcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFitSrfOpType\"> </a>siFitSrfOpType		</td>\n\
		<td class=\"example\">fitsrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFlipUVWOpType\"> </a>siFlipUVWOpType		</td>\n\
		<td class=\"example\">Flipuvw		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFluidOpType\"> </a>siFluidOpType		</td>\n\
		<td class=\"example\">FluidOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFoldOpType\"> </a>siFoldOpType		</td>\n\
		<td class=\"example\">foldop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFourSidedOpType\"> </a>siFourSidedOpType		</td>\n\
		<td class=\"example\">foursided		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFurOpType\"> </a>siFurOpType		</td>\n\
		<td class=\"example\">furop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFurPrimType\"> </a>siFurPrimType		</td>\n\
		<td class=\"example\">fur		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFurPropType\"> </a>siFurPropType		</td>\n\
		<td class=\"example\">furProp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFurSimOpType\"> </a>siFurSimOpType		</td>\n\
		<td class=\"example\">furSimop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFxOperatorFamily\"> </a>siFxOperatorFamily		</td>\n\
		<td class=\"example\">FxOperator		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeneralKeyword\"> </a>siGeneralKeyword		</td>\n\
		<td class=\"example\">General		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeneratorKeyword\"> </a>siGeneratorKeyword		</td>\n\
		<td class=\"example\">Generator		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeneratorOpType\"> </a>siGeneratorOpType		</td>\n\
		<td class=\"example\">generatorop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeneratorOperatorFamily\"> </a>siGeneratorOperatorFamily		</td>\n\
		<td class=\"example\">GeneratorOperators		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGenericObjectFilter\"> </a>siGenericObjectFilter		</td>\n\
		<td class=\"example\">object		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeoShaderPrimType\"> </a>siGeoShaderPrimType		</td>\n\
		<td class=\"example\">GeoShader		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeoTxtOpType\"> </a>siGeoTxtOpType		</td>\n\
		<td class=\"example\">GeoTxtOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeomApproxType\"> </a>siGeomApproxType		</td>\n\
		<td class=\"example\">geomapprox		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeometryFamily\"> </a>siGeometryFamily		</td>\n\
		<td class=\"example\">Geometries		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeometryFilter\"> </a>siGeometryFilter		</td>\n\
		<td class=\"example\">geometry		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeometryKeyword\"> </a>siGeometryKeyword		</td>\n\
		<td class=\"example\">Geometry		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeometryShaderFamily\"> </a>siGeometryShaderFamily		</td>\n\
		<td class=\"example\">Geometry Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGlobalType\"> </a>siGlobalType		</td>\n\
		<td class=\"example\">global		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGravityCtrlType\"> </a>siGravityCtrlType		</td>\n\
		<td class=\"example\">gravity		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGridPrimType\"> </a>siGridPrimType		</td>\n\
		<td class=\"example\">grid		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGroup\"> </a>siGroup		</td>\n\
		<td class=\"example\">#Group		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGroupFamily\"> </a>siGroupFamily		</td>\n\
		<td class=\"example\">Groups		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGroupFilter\"> </a>siGroupFilter		</td>\n\
		<td class=\"example\">group		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGroupType\"> </a>siGroupType		</td>\n\
		<td class=\"example\">#Group		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHWShaderDirtyParameterUpdate\"> </a>siHWShaderDirtyParameterUpdate		</td>\n\
		<td class=\"example\">HWShaderDirtyParameterUpdate		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderRendererAttribute.html\">siShaderRendererAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHWShaderForceAttributeUpdate\"> </a>siHWShaderForceAttributeUpdate		</td>\n\
		<td class=\"example\">HWShaderForceAttributeUpdate		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderRendererAttribute.html\">siShaderRendererAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHWShaderPortType\"> </a>siHWShaderPortType		</td>\n\
		<td class=\"example\">xgsRTCtx		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHWShaderVersionAttribute\"> </a>siHWShaderVersionAttribute		</td>\n\
		<td class=\"example\">HWShaderVersion		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderRendererAttribute.html\">siShaderRendererAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHairKeyword\"> </a>siHairKeyword		</td>\n\
		<td class=\"example\">Hair		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHealOpType\"> </a>siHealOpType		</td>\n\
		<td class=\"example\">heal		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHealUVWOpType\"> </a>siHealUVWOpType		</td>\n\
		<td class=\"example\">healuvw		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICERenderPropSuffixIsHomogeneous\"> </a>siICERenderPropSuffixIsHomogeneous		</td>\n\
		<td class=\"example\">_ishomogeneous		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siICERenderPropSuffix.html\">siICERenderPropSuffix</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICERenderPropSuffixSmoothWhenSubd\"> </a>siICERenderPropSuffixSmoothWhenSubd		</td>\n\
		<td class=\"example\">_smoothwhensubdi		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siICERenderPropSuffix.html\">siICERenderPropSuffix</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICERenderPropSuffixTransform\"> </a>siICERenderPropSuffixTransform		</td>\n\
		<td class=\"example\">_transform		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siICERenderPropSuffix.html\">siICERenderPropSuffix</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICERenderPropSuffixUWrap\"> </a>siICERenderPropSuffixUWrap		</td>\n\
		<td class=\"example\">_u_wrap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siICERenderPropSuffix.html\">siICERenderPropSuffix</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICERenderPropSuffixVWrap\"> </a>siICERenderPropSuffixVWrap		</td>\n\
		<td class=\"example\">_v_wrap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siICERenderPropSuffix.html\">siICERenderPropSuffix</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICERenderPropSuffixWWrap\"> </a>siICERenderPropSuffixWWrap		</td>\n\
		<td class=\"example\">_w_wrap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siICERenderPropSuffix.html\">siICERenderPropSuffix</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIKKeyword\"> </a>siIKKeyword		</td>\n\
		<td class=\"example\">IK		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIcosahedronPrimType\"> </a>siIcosahedronPrimType		</td>\n\
		<td class=\"example\">icosahedron		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageClipType\"> </a>siImageClipType		</td>\n\
		<td class=\"example\">ImageClip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageCropOpType\"> </a>siImageCropOpType		</td>\n\
		<td class=\"example\">ImageCropOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeAlpha\"> </a>siImageDataTypeAlpha		</td>\n\
		<td class=\"example\">Alpha		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeBitMask\"> </a>siImageDataTypeBitMask		</td>\n\
		<td class=\"example\">BitMask		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeDepth\"> </a>siImageDataTypeDepth		</td>\n\
		<td class=\"example\">Depth		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeIntensity\"> </a>siImageDataTypeIntensity		</td>\n\
		<td class=\"example\">Intensity		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeLabel\"> </a>siImageDataTypeLabel		</td>\n\
		<td class=\"example\">Label		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeMotion\"> </a>siImageDataTypeMotion		</td>\n\
		<td class=\"example\">Motion		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeNormal\"> </a>siImageDataTypeNormal		</td>\n\
		<td class=\"example\">Normal		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypePoint\"> </a>siImageDataTypePoint		</td>\n\
		<td class=\"example\">Vector		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeRGB\"> </a>siImageDataTypeRGB		</td>\n\
		<td class=\"example\">RGB		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeRGBA\"> </a>siImageDataTypeRGBA		</td>\n\
		<td class=\"example\">RGBA		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeRGBE\"> </a>siImageDataTypeRGBE		</td>\n\
		<td class=\"example\">RGBE		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageDataTypeVector\"> </a>siImageDataTypeVector		</td>\n\
		<td class=\"example\">Vector		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siImageDataType.html\">siImageDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageFXOpType\"> </a>siImageFXOpType		</td>\n\
		<td class=\"example\">ImageFXOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageObjectType\"> </a>siImageObjectType		</td>\n\
		<td class=\"example\">ImageObject		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageOperatorFamily\"> </a>siImageOperatorFamily		</td>\n\
		<td class=\"example\">Image Operators		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageSourceOpType\"> </a>siImageSourceOpType		</td>\n\
		<td class=\"example\">ImageSourceOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageSourceType\"> </a>siImageSourceType		</td>\n\
		<td class=\"example\">ImageSource		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImplicitFilter\"> </a>siImplicitFilter		</td>\n\
		<td class=\"example\">implicit		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImplicitGeometryFamily\"> </a>siImplicitGeometryFamily		</td>\n\
		<td class=\"example\">Geometry		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInsSrfKnotOpType\"> </a>siInsSrfKnotOpType		</td>\n\
		<td class=\"example\">inssrfknot		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInsertCrvKnotOpType\"> </a>siInsertCrvKnotOpType		</td>\n\
		<td class=\"example\">InsertCrvKnot		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIntersectSrfOpType\"> </a>siIntersectSrfOpType		</td>\n\
		<td class=\"example\">intersectsrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInvCrvOpType\"> </a>siInvCrvOpType		</td>\n\
		<td class=\"example\">invcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInvSrfOpType\"> </a>siInvSrfOpType		</td>\n\
		<td class=\"example\">invsrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInvertPolyOpType\"> </a>siInvertPolyOpType		</td>\n\
		<td class=\"example\">invertpolygonop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInvisiblePolygonsClusterName\"> </a>siInvisiblePolygonsClusterName		</td>\n\
		<td class=\"example\">InvisiblePolygons		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIsoLineUCluster\"> </a>siIsoLineUCluster		</td>\n\
		<td class=\"example\">isolineu		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIsoLineVCluster\"> </a>siIsoLineVCluster		</td>\n\
		<td class=\"example\">isolinev		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIsoPointCluster\"> </a>siIsoPointCluster		</td>\n\
		<td class=\"example\">isopnt		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIsopointFilter\"> </a>siIsopointFilter		</td>\n\
		<td class=\"example\">isopoint		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineChainPropType\"> </a>siKineChainPropType		</td>\n\
		<td class=\"example\">KineChainProp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineChainType\"> </a>siKineChainType		</td>\n\
		<td class=\"example\">chain		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineCnsType\"> </a>siKineCnsType		</td>\n\
		<td class=\"example\">kinecns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineInfoFamily\"> </a>siKineInfoFamily		</td>\n\
		<td class=\"example\">KineInfo		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineInfoType\"> </a>siKineInfoType		</td>\n\
		<td class=\"example\">kine		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineJointType\"> </a>siKineJointType		</td>\n\
		<td class=\"example\">joint		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKinematicsKeyword\"> </a>siKinematicsKeyword		</td>\n\
		<td class=\"example\">Kinematics		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKnotCluster\"> </a>siKnotCluster		</td>\n\
		<td class=\"example\">knot		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKnotCurveUCluster\"> </a>siKnotCurveUCluster		</td>\n\
		<td class=\"example\">knotcrvu		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKnotCurveVCluster\"> </a>siKnotCurveVCluster		</td>\n\
		<td class=\"example\">knotcrvv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKnotFilter\"> </a>siKnotFilter		</td>\n\
		<td class=\"example\">knot		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLatticeFamily\"> </a>siLatticeFamily		</td>\n\
		<td class=\"example\">Lattices		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLatticeFilter\"> </a>siLatticeFilter		</td>\n\
		<td class=\"example\">lattice		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLatticeOpType\"> </a>siLatticeOpType		</td>\n\
		<td class=\"example\">lattice		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLatticePrimType\"> </a>siLatticePrimType		</td>\n\
		<td class=\"example\">lattice		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLayerFilter\"> </a>siLayerFilter		</td>\n\
		<td class=\"example\">layer		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLayersType\"> </a>siLayersType		</td>\n\
		<td class=\"example\">Layers		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLensShaderFamily\"> </a>siLensShaderFamily		</td>\n\
		<td class=\"example\">Lens Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightFilter\"> </a>siLightFilter		</td>\n\
		<td class=\"example\">light		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightLensFlareType\"> </a>siLightLensFlareType		</td>\n\
		<td class=\"example\">LightLensFlare		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightPartitionFilter\"> </a>siLightPartitionFilter		</td>\n\
		<td class=\"example\">lightpartition		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightPhotonShaderFamily\"> </a>siLightPhotonShaderFamily		</td>\n\
		<td class=\"example\">Light Photon Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightPrimType\"> </a>siLightPrimType		</td>\n\
		<td class=\"example\">light		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightPrimitiveFamily\"> </a>siLightPrimitiveFamily		</td>\n\
		<td class=\"example\">Lights		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightShaderFamily\"> </a>siLightShaderFamily		</td>\n\
		<td class=\"example\">Light Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLineCnsType\"> </a>siLineCnsType		</td>\n\
		<td class=\"example\">LineCns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLocalType\"> </a>siLocalType		</td>\n\
		<td class=\"example\">local		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLoftOpType\"> </a>siLoftOpType		</td>\n\
		<td class=\"example\">loft		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMapCompOpType\"> </a>siMapCompOpType		</td>\n\
		<td class=\"example\">mapCompOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMarkHardEdgeVertexOpType\"> </a>siMarkHardEdgeVertexOpType		</td>\n\
		<td class=\"example\">MarkHardEdgeVertex		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMarkerOperatorFamily\"> </a>siMarkerOperatorFamily		</td>\n\
		<td class=\"example\">MarkerOperators		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialFamily\"> </a>siMaterialFamily		</td>\n\
		<td class=\"example\">Material		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialShaderFamily\"> </a>siMaterialShaderFamily		</td>\n\
		<td class=\"example\">Material Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialType\"> </a>siMaterialType		</td>\n\
		<td class=\"example\">material		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMentalRayContourContrastPortType\"> </a>siMentalRayContourContrastPortType		</td>\n\
		<td class=\"example\">mrCntrCntrst		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMentalRayContourStorePortType\"> </a>siMentalRayContourStorePortType		</td>\n\
		<td class=\"example\">mrCntStr		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMentalRayGeometryPortType\"> </a>siMentalRayGeometryPortType		</td>\n\
		<td class=\"example\">mrGeom		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMentalRayLightmapPortType\"> </a>siMentalRayLightmapPortType		</td>\n\
		<td class=\"example\">mrLmap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMentalRayPhenomenonMaterialPortType\"> </a>siMentalRayPhenomenonMaterialPortType		</td>\n\
		<td class=\"example\">mrPhenMat		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuLibCache\"> </a>siMenuLibCache		</td>\n\
		<td class=\"example\">MenuLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMergeCrvOpType\"> </a>siMergeCrvOpType		</td>\n\
		<td class=\"example\">mergecrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMergeMeshOpType\"> </a>siMergeMeshOpType		</td>\n\
		<td class=\"example\">mergemesh		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMergeSrfOpType\"> </a>siMergeSrfOpType		</td>\n\
		<td class=\"example\">mergesrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshFamily\"> </a>siMeshFamily		</td>\n\
		<td class=\"example\">Mesh Geometries		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshKeyword\"> </a>siMeshKeyword		</td>\n\
		<td class=\"example\">Mesh		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshLocalSubdivisionOpType\"> </a>siMeshLocalSubdivisionOpType		</td>\n\
		<td class=\"example\">meshlocalsubdivisionop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshSubdivOpType\"> </a>siMeshSubdivOpType		</td>\n\
		<td class=\"example\">MeshSubdivide		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshSubdivWithCenterOpType\"> </a>siMeshSubdivWithCenterOpType		</td>\n\
		<td class=\"example\">MeshSubdivideWithCenter		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerAnimClipType\"> </a>siMixerAnimClipType		</td>\n\
		<td class=\"example\">mixeranimclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerAnimTrackType\"> </a>siMixerAnimTrackType		</td>\n\
		<td class=\"example\">mixeranimtrack		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerAudioClipType\"> </a>siMixerAudioClipType		</td>\n\
		<td class=\"example\">mixeraudioclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerAudioTrackType\"> </a>siMixerAudioTrackType		</td>\n\
		<td class=\"example\">mixeraudiotrack		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerKeyword\"> </a>siMixerKeyword		</td>\n\
		<td class=\"example\">Mixer		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerPropType\"> </a>siMixerPropType		</td>\n\
		<td class=\"example\">MixerProp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerShapeClipType\"> </a>siMixerShapeClipType		</td>\n\
		<td class=\"example\">mixershapeclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerShapeTrackType\"> </a>siMixerShapeTrackType		</td>\n\
		<td class=\"example\">mixershapetrack		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerType\"> </a>siMixerType		</td>\n\
		<td class=\"example\">mixer		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelClipType\"> </a>siModelClipType		</td>\n\
		<td class=\"example\">model_clip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelFilter\"> </a>siModelFilter		</td>\n\
		<td class=\"example\">model		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelNullPrimType\"> </a>siModelNullPrimType		</td>\n\
		<td class=\"example\">modelnull		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelType\"> </a>siModelType		</td>\n\
		<td class=\"example\">#model		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelingKeyword\"> </a>siModelingKeyword		</td>\n\
		<td class=\"example\">Modeling		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMotionBlurType\"> </a>siMotionBlurType		</td>\n\
		<td class=\"example\">motionblur		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMoveComponentOpType\"> </a>siMoveComponentOpType		</td>\n\
		<td class=\"example\">movecomponentop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNPntCnsType\"> </a>siNPntCnsType		</td>\n\
		<td class=\"example\">Nptscns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNullFilter\"> </a>siNullFilter		</td>\n\
		<td class=\"example\">null		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNullPrimType\"> </a>siNullPrimType		</td>\n\
		<td class=\"example\">null		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNullPrimitiveFamily\"> </a>siNullPrimitiveFamily		</td>\n\
		<td class=\"example\">Nulls		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsCurveListFamily\"> </a>siNurbsCurveListFamily		</td>\n\
		<td class=\"example\">Nurbs CurveList Geometries		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsSurfaceMeshFamily\"> </a>siNurbsSurfaceMeshFamily		</td>\n\
		<td class=\"example\">Nurbs Surface Mesh Geometries		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsToMeshOpType\"> </a>siNurbsToMeshOpType		</td>\n\
		<td class=\"example\">nurbstomesh		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjClsCnsType\"> </a>siObjClsCnsType		</td>\n\
		<td class=\"example\">objclscns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjectFilter\"> </a>siObjectFilter		</td>\n\
		<td class=\"example\">sceneobject		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjectPartitionFilter\"> </a>siObjectPartitionFilter		</td>\n\
		<td class=\"example\">objectpartition		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObstaclePropType\"> </a>siObstaclePropType		</td>\n\
		<td class=\"example\">ObstacleProp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOctahedronPrimType\"> </a>siOctahedronPrimType		</td>\n\
		<td class=\"example\">octahedron		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOffsetClsOpType\"> </a>siOffsetClsOpType		</td>\n\
		<td class=\"example\">offsetclusterop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOffsetCrvOpType\"> </a>siOffsetCrvOpType		</td>\n\
		<td class=\"example\">offsetcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOffsetSrfOpType\"> </a>siOffsetSrfOpType		</td>\n\
		<td class=\"example\">offsetsrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOpenCloseSrfOpType\"> </a>siOpenCloseSrfOpType		</td>\n\
		<td class=\"example\">openclosesrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOperatorFamily\"> </a>siOperatorFamily		</td>\n\
		<td class=\"example\">Operators		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOperatorFilter\"> </a>siOperatorFilter		</td>\n\
		<td class=\"example\">operator		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOperatorsKeyword\"> </a>siOperatorsKeyword		</td>\n\
		<td class=\"example\">Operators		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOriCnsType\"> </a>siOriCnsType		</td>\n\
		<td class=\"example\">oricns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOutputShaderFamily\"> </a>siOutputShaderFamily		</td>\n\
		<td class=\"example\">Output Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOverrideType\"> </a>siOverrideType		</td>\n\
		<td class=\"example\">#Override		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParDecayType\"> </a>siParDecayType		</td>\n\
		<td class=\"example\">ParDecay		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParObstExtSparksType\"> </a>siParObstExtSparksType		</td>\n\
		<td class=\"example\">ParObstExtSparks		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleControlObjectFamily\"> </a>siParticleControlObjectFamily		</td>\n\
		<td class=\"example\">Particle Control Object		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleEventType\"> </a>siParticleEventType		</td>\n\
		<td class=\"example\">ParticleEvent		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleFamily\"> </a>siParticleFamily		</td>\n\
		<td class=\"example\">Particle		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleKeyword\"> </a>siParticleKeyword		</td>\n\
		<td class=\"example\">Particle		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticlesOpType\"> </a>siParticlesOpType		</td>\n\
		<td class=\"example\">ParticlesOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPassFamily\"> </a>siPassFamily		</td>\n\
		<td class=\"example\">Pass		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPatchNetworkFamily\"> </a>siPatchNetworkFamily		</td>\n\
		<td class=\"example\">Patch Networks		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPathCnsType\"> </a>siPathCnsType		</td>\n\
		<td class=\"example\">pathcns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPhotonShaderFamily\"> </a>siPhotonShaderFamily		</td>\n\
		<td class=\"example\">Photon Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPinJointCnsType\"> </a>siPinJointCnsType		</td>\n\
		<td class=\"example\">PinJointCns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPlanarObjectFamily\"> </a>siPlanarObjectFamily		</td>\n\
		<td class=\"example\">Planar Objects		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPlaneCnsType\"> </a>siPlaneCnsType		</td>\n\
		<td class=\"example\">PlaneCns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointCloudFamily\"> </a>siPointCloudFamily		</td>\n\
		<td class=\"example\">Point Cloud Geometries		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointCloudFilter\"> </a>siPointCloudFilter		</td>\n\
		<td class=\"example\">PointCloud		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointCloudPrimType\"> </a>siPointCloudPrimType		</td>\n\
		<td class=\"example\">PointCloud		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointFilter\"> </a>siPointFilter		</td>\n\
		<td class=\"example\">point		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolyMeshFilter\"> </a>siPolyMeshFilter		</td>\n\
		<td class=\"example\">polygonmesh		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolyMeshPNetOpType\"> </a>siPolyMeshPNetOpType		</td>\n\
		<td class=\"example\">PolyMeshPNetOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolyMeshType\"> </a>siPolyMeshType		</td>\n\
		<td class=\"example\">polymsh		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolygonCluster\"> </a>siPolygonCluster		</td>\n\
		<td class=\"example\">poly		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolygonFilter\"> </a>siPolygonFilter		</td>\n\
		<td class=\"example\">polygon		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolygonNodeCluster\"> </a>siPolygonNodeCluster		</td>\n\
		<td class=\"example\">polyn		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPosCnsType\"> </a>siPosCnsType		</td>\n\
		<td class=\"example\">poscns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPoseCnsType\"> </a>siPoseCnsType		</td>\n\
		<td class=\"example\">posecns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPrimitiveFilter\"> </a>siPrimitiveFilter		</td>\n\
		<td class=\"example\">primitive		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPrimitiveKeyword\"> </a>siPrimitiveKeyword		</td>\n\
		<td class=\"example\">Primitive		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProjectCrvOpType\"> </a>siProjectCrvOpType		</td>\n\
		<td class=\"example\">projectcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProjectionKeyword\"> </a>siProjectionKeyword		</td>\n\
		<td class=\"example\">Projection		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropVolumeOpType\"> </a>siPropVolumeOpType		</td>\n\
		<td class=\"example\">propvolumeop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropertyFamily\"> </a>siPropertyFamily		</td>\n\
		<td class=\"example\">Properties		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropertyFilter\"> </a>siPropertyFilter		</td>\n\
		<td class=\"example\">property		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropertyFilterAttribute\"> </a>siPropertyFilterAttribute		</td>\n\
		<td class=\"example\">PropertyFilter		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropertyLibCache\"> </a>siPropertyLibCache		</td>\n\
		<td class=\"example\">PropertyLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProportionalOpType\"> </a>siProportionalOpType		</td>\n\
		<td class=\"example\">proportional		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPushOpType\"> </a>siPushOpType		</td>\n\
		<td class=\"example\">pushop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siQStretchOpType\"> </a>siQStretchOpType		</td>\n\
		<td class=\"example\">qstretch		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRTShaderLibCache\"> </a>siRTShaderLibCache		</td>\n\
		<td class=\"example\">RealTimeShaderLibCache		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRandomizeOpType\"> </a>siRandomizeOpType		</td>\n\
		<td class=\"example\">randomizeop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRealTimeShaderFamily\"> </a>siRealTimeShaderFamily		</td>\n\
		<td class=\"example\">RealTime Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRecompileMetaSLOnValueChange\"> </a>siRecompileMetaSLOnValueChange		</td>\n\
		<td class=\"example\">RecompileMetaSLOnValueChange		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRefPlaneType\"> </a>siRefPlaneType		</td>\n\
		<td class=\"example\">refplane		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siReferenceFilterAttribute\"> </a>siReferenceFilterAttribute		</td>\n\
		<td class=\"example\">ReferenceFilter		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRelaxUVWOpType\"> </a>siRelaxUVWOpType		</td>\n\
		<td class=\"example\">Relaxuvw		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRemSrfKnotOpType\"> </a>siRemSrfKnotOpType		</td>\n\
		<td class=\"example\">remsrfknot		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRemoveCrvKnotOpType\"> </a>siRemoveCrvKnotOpType		</td>\n\
		<td class=\"example\">RemoveCrvKnot		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderMapType\"> </a>siRenderMapType		</td>\n\
		<td class=\"example\">rendermap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderTreeNodeColorBAttribute\"> </a>siRenderTreeNodeColorBAttribute		</td>\n\
		<td class=\"example\">RenderTreeNodeColorB		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderTreeNodeColorGAttribute\"> </a>siRenderTreeNodeColorGAttribute		</td>\n\
		<td class=\"example\">RenderTreeNodeColorG		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderTreeNodeColorRAttribute\"> </a>siRenderTreeNodeColorRAttribute		</td>\n\
		<td class=\"example\">RenderTreeNodeColorR		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderingKeyword\"> </a>siRenderingKeyword		</td>\n\
		<td class=\"example\">Rendering		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRevolutionOpType\"> </a>siRevolutionOpType		</td>\n\
		<td class=\"example\">revolution		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRotoscopeType\"> </a>siRotoscopeType		</td>\n\
		<td class=\"example\">rotoscope		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSCMFixerOpType\"> </a>siSCMFixerOpType		</td>\n\
		<td class=\"example\">scmfixerop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSCMTopologyOpType\"> </a>siSCMTopologyOpType		</td>\n\
		<td class=\"example\">scmtopologyop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterActionNodes\"> </a>siSEFilterActionNodes		</td>\n\
		<td class=\"example\">Action		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterAllNodeTypes\"> </a>siSEFilterAllNodeTypes		</td>\n\
		<td class=\"example\">AllNodeTypes		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterAnimatableNodes\"> </a>siSEFilterAnimatableNodes		</td>\n\
		<td class=\"example\">Animatable		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterAnimatedNodes\"> </a>siSEFilterAnimatedNodes		</td>\n\
		<td class=\"example\">Animated		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterClusterNodes\"> </a>siSEFilterClusterNodes		</td>\n\
		<td class=\"example\">Cluster		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterGroupNodes\"> </a>siSEFilterGroupNodes		</td>\n\
		<td class=\"example\">Group		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordAll\"> </a>siSEFilterKeywordAll		</td>\n\
		<td class=\"example\">AllKeywords		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordAnimation\"> </a>siSEFilterKeywordAnimation		</td>\n\
		<td class=\"example\">Animation		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordCustom\"> </a>siSEFilterKeywordCustom		</td>\n\
		<td class=\"example\">Custom		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordGeneral\"> </a>siSEFilterKeywordGeneral		</td>\n\
		<td class=\"example\">General		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordKinematics\"> </a>siSEFilterKeywordKinematics		</td>\n\
		<td class=\"example\">Kinematics		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordModeling\"> </a>siSEFilterKeywordModeling		</td>\n\
		<td class=\"example\">Modeling		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordRendering\"> </a>siSEFilterKeywordRendering		</td>\n\
		<td class=\"example\">Rendering		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterKeywordViewing\"> </a>siSEFilterKeywordViewing		</td>\n\
		<td class=\"example\">Viewing		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterMaterialNodes\"> </a>siSEFilterMaterialNodes		</td>\n\
		<td class=\"example\">Material		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterMiscellaneousNodes\"> </a>siSEFilterMiscellaneousNodes		</td>\n\
		<td class=\"example\">Miscellaneous		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterModelNodes\"> </a>siSEFilterModelNodes		</td>\n\
		<td class=\"example\">Model		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterObjectNodes\"> </a>siSEFilterObjectNodes		</td>\n\
		<td class=\"example\">Object		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterOperatorNodes\"> </a>siSEFilterOperatorNodes		</td>\n\
		<td class=\"example\">Operator		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterParameterNodes\"> </a>siSEFilterParameterNodes		</td>\n\
		<td class=\"example\">Parameter		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterPrimitiveNodes\"> </a>siSEFilterPrimitiveNodes		</td>\n\
		<td class=\"example\">Primitive		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterPropertyNodes\"> </a>siSEFilterPropertyNodes		</td>\n\
		<td class=\"example\">Property		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterSceneNodes\"> </a>siSEFilterSceneNodes		</td>\n\
		<td class=\"example\">Scene		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSEFilterShaderNodes\"> </a>siSEFilterShaderNodes		</td>\n\
		<td class=\"example\">Shader		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siSEFilterMask.html\">siSEFilterMask</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSampledPointCluster\"> </a>siSampledPointCluster		</td>\n\
		<td class=\"example\">sample		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSceneAmbienceType\"> </a>siSceneAmbienceType		</td>\n\
		<td class=\"example\">ambience		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSceneColorsType\"> </a>siSceneColorsType		</td>\n\
		<td class=\"example\">Scenecolors		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSceneFilter\"> </a>siSceneFilter		</td>\n\
		<td class=\"example\">scene		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSclCnsType\"> </a>siSclCnsType		</td>\n\
		<td class=\"example\">sclcns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogEnabled\"> </a>siScrCommandLogEnabled		</td>\n\
		<td class=\"example\">SCR_CMDLOG_ENABLED		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogFileName\"> </a>siScrCommandLogFileName		</td>\n\
		<td class=\"example\">SCR_CMDLOG_FILENAME		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogMaxSize\"> </a>siScrCommandLogMaxSize		</td>\n\
		<td class=\"example\">SCR_CMDLOG_MAXSIZE		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogToFile\"> </a>siScrCommandLogToFile		</td>\n\
		<td class=\"example\">SCR_CMDLOG_TOFILE		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrCommandLogUnlimitedSize\"> </a>siScrCommandLogUnlimitedSize		</td>\n\
		<td class=\"example\">SCR_CMDLOG_UNLIMITEDSIZE		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrLanguage\"> </a>siScrLanguage		</td>\n\
		<td class=\"example\">ScriptLanguage		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrMessageLogEnabled\"> </a>siScrMessageLogEnabled		</td>\n\
		<td class=\"example\">SCR_MSGLOG_ENABLED		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScrRealTimeMessagingEnabled\"> </a>siScrRealTimeMessagingEnabled		</td>\n\
		<td class=\"example\">SCR_RTMSG_ENABLED		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScriptedOpType\"> </a>siScriptedOpType		</td>\n\
		<td class=\"example\">scriptedop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSetEdgeCreaseValueOpType\"> </a>siSetEdgeCreaseValueOpType		</td>\n\
		<td class=\"example\">SetEdgeCreaseValue		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamily\"> </a>siShaderFamily		</td>\n\
		<td class=\"example\">Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyAttribute\"> </a>siShaderFamilyAttribute		</td>\n\
		<td class=\"example\">ShaderFamily		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyCntContrast\"> </a>siShaderFamilyCntContrast		</td>\n\
		<td class=\"example\">mrContourContrast		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyCntMat\"> </a>siShaderFamilyCntMat		</td>\n\
		<td class=\"example\">mrContourMat		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyCntStore\"> </a>siShaderFamilyCntStore		</td>\n\
		<td class=\"example\">mrContourStore		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyData\"> </a>siShaderFamilyData		</td>\n\
		<td class=\"example\">mrData		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyEnvironment\"> </a>siShaderFamilyEnvironment		</td>\n\
		<td class=\"example\">mrEnvironment		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyGeometry\"> </a>siShaderFamilyGeometry		</td>\n\
		<td class=\"example\">mrGeometry		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyLens\"> </a>siShaderFamilyLens		</td>\n\
		<td class=\"example\">mrLens		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyLight\"> </a>siShaderFamilyLight		</td>\n\
		<td class=\"example\">mrLight		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyLightmap\"> </a>siShaderFamilyLightmap		</td>\n\
		<td class=\"example\">mrLightmap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyOutput\"> </a>siShaderFamilyOutput		</td>\n\
		<td class=\"example\">mrOutput		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyPhenomMat\"> </a>siShaderFamilyPhenomMat		</td>\n\
		<td class=\"example\">mrPhenomenonMat		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyPhotonLight\"> </a>siShaderFamilyPhotonLight		</td>\n\
		<td class=\"example\">mrPhotonLight		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyPhotonMat\"> </a>siShaderFamilyPhotonMat		</td>\n\
		<td class=\"example\">mrPhotonMat		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyPhotonVolume\"> </a>siShaderFamilyPhotonVolume		</td>\n\
		<td class=\"example\">mrPhotonVolume		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyRTShader\"> </a>siShaderFamilyRTShader		</td>\n\
		<td class=\"example\">xgsRealTimeShader		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyShadowMat\"> </a>siShaderFamilyShadowMat		</td>\n\
		<td class=\"example\">mrShadowMat		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyState\"> </a>siShaderFamilyState		</td>\n\
		<td class=\"example\">mrState		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilySurfaceMat\"> </a>siShaderFamilySurfaceMat		</td>\n\
		<td class=\"example\">mrSurfaceMat		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyTexture\"> </a>siShaderFamilyTexture		</td>\n\
		<td class=\"example\">mrTexture		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFamilyVolume\"> </a>siShaderFamilyVolume		</td>\n\
		<td class=\"example\">mrVolume		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderFamilyType.html\">siShaderFamilyType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderFilter\"> </a>siShaderFilter		</td>\n\
		<td class=\"example\">shader		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShadowShaderFamily\"> </a>siShadowShaderFamily		</td>\n\
		<td class=\"example\">Shadow Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeActionCompoundClipType\"> </a>siShapeActionCompoundClipType		</td>\n\
		<td class=\"example\">ShapeActionCompoundClip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeActionType\"> </a>siShapeActionType		</td>\n\
		<td class=\"example\">ShapeAction		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeCompoundAnimItem\"> </a>siShapeCompoundAnimItem		</td>\n\
		<td class=\"example\">ShapeCompoundAnimItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeCompoundMappedItem\"> </a>siShapeCompoundMappedItem		</td>\n\
		<td class=\"example\">ShapeCompoundMappedItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siMappedItemType.html\">siMappedItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeKeyAnimItem\"> </a>siShapeKeyAnimItem		</td>\n\
		<td class=\"example\">ShapeKeyAnimItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeKeyMappedItem\"> </a>siShapeKeyMappedItem		</td>\n\
		<td class=\"example\">ShapeKeyMappedItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siMappedItemType.html\">siMappedItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShearOpType\"> </a>siShearOpType		</td>\n\
		<td class=\"example\">shearop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShrinkWrapOpType\"> </a>siShrinkWrapOpType		</td>\n\
		<td class=\"example\">shrinkwrap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSimulationKeyword\"> </a>siSimulationKeyword		</td>\n\
		<td class=\"example\">Simulation		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSkelCtrlOpPropType\"> </a>siSkelCtrlOpPropType		</td>\n\
		<td class=\"example\">SkeletonCtrlOpProp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSkeletonJointFilter\"> </a>siSkeletonJointFilter		</td>\n\
		<td class=\"example\">joint		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSmoothEnvelopeWgtOpType\"> </a>siSmoothEnvelopeWgtOpType		</td>\n\
		<td class=\"example\">smoothenvelopeweight		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapBoundOpType\"> </a>siSnapBoundOpType		</td>\n\
		<td class=\"example\">snapbound		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapCrvOpType\"> </a>siSnapCrvOpType		</td>\n\
		<td class=\"example\">SnapCrvsOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnipSrfOpType\"> </a>siSnipSrfOpType		</td>\n\
		<td class=\"example\">snipsrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSoftBodyOpType\"> </a>siSoftBodyOpType		</td>\n\
		<td class=\"example\">SoftBodyOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpherePrimType\"> </a>siSpherePrimType		</td>\n\
		<td class=\"example\">sphere		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpineDefOp2Type\"> </a>siSpineDefOp2Type		</td>\n\
		<td class=\"example\">spinedefop2		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpineDefOpType\"> </a>siSpineDefOpType		</td>\n\
		<td class=\"example\">spinedefop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpineWgtMapOp3Type\"> </a>siSpineWgtMapOp3Type		</td>\n\
		<td class=\"example\">spinewgtmapop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpineWgtMapOp4Type\"> </a>siSpineWgtMapOp4Type		</td>\n\
		<td class=\"example\">spinewgtmapop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpiralPrimType\"> </a>siSpiralPrimType		</td>\n\
		<td class=\"example\">spiral		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSplitEdgeOpType\"> </a>siSplitEdgeOpType		</td>\n\
		<td class=\"example\">splitedgeop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSplitPolyOpType\"> </a>siSplitPolyOpType		</td>\n\
		<td class=\"example\">splitpolygonop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpotInterestPrimType\"> </a>siSpotInterestPrimType		</td>\n\
		<td class=\"example\">SpotInterest		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpotRootPrimType\"> </a>siSpotRootPrimType		</td>\n\
		<td class=\"example\">SpotRoot		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSquarePrimType\"> </a>siSquarePrimType		</td>\n\
		<td class=\"example\">square		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfCnsType\"> </a>siSrfCnsType		</td>\n\
		<td class=\"example\">surfcns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfCrvInverseOpType\"> </a>siSrfCrvInverseOpType		</td>\n\
		<td class=\"example\">SurfaceCurveInverseOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfCrvShiftOpType\"> </a>siSrfCrvShiftOpType		</td>\n\
		<td class=\"example\">srfcrvshift		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfCtrlOpType\"> </a>siSrfCtrlOpType		</td>\n\
		<td class=\"example\">SrfControlOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfDefOpType\"> </a>siSrfDefOpType		</td>\n\
		<td class=\"example\">srfdefop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfMeshPrimType\"> </a>siSrfMeshPrimType		</td>\n\
		<td class=\"example\">surfmsh		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfPQOpType\"> </a>siSrfPQOpType		</td>\n\
		<td class=\"example\">SurfacePQ		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfReparamOpType\"> </a>siSrfReparamOpType		</td>\n\
		<td class=\"example\">srfreparam		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfShiftOpType\"> </a>siSrfShiftOpType		</td>\n\
		<td class=\"example\">srfshift		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfSubdivisionOpType\"> </a>siSrfSubdivisionOpType		</td>\n\
		<td class=\"example\">srfsubdivisionop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfUVCtrlOpType\"> </a>siSrfUVCtrlOpType		</td>\n\
		<td class=\"example\">SurfaceUVControl		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStandInPrimType\"> </a>siStandInPrimType		</td>\n\
		<td class=\"example\">standin		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStartOffsetOpType\"> </a>siStartOffsetOpType		</td>\n\
		<td class=\"example\">startoffset		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStaticValueAnimItem\"> </a>siStaticValueAnimItem		</td>\n\
		<td class=\"example\">StaticValueAnimItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siAnimationSourceItemType.html\">siAnimationSourceItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStaticValueMappedItem\"> </a>siStaticValueMappedItem		</td>\n\
		<td class=\"example\">StaticValueMappedItem		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siMappedItemType.html\">siMappedItemType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStitchCrvToCrvOpType\"> </a>siStitchCrvToCrvOpType		</td>\n\
		<td class=\"example\">stitchcrvtocrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStitchCrvToSrfOpType\"> </a>siStitchCrvToSrfOpType		</td>\n\
		<td class=\"example\">stitchcrvtosrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStitchSrfOpType\"> </a>siStitchSrfOpType		</td>\n\
		<td class=\"example\">stitchsrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStrokeOpType\"> </a>siStrokeOpType		</td>\n\
		<td class=\"example\">stroke		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubCompType\"> </a>siSubCompType		</td>\n\
		<td class=\"example\">subcomp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubComponentFamily\"> </a>siSubComponentFamily		</td>\n\
		<td class=\"example\">SubComponents		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubComponentFilter\"> </a>siSubComponentFilter		</td>\n\
		<td class=\"example\">subcomponent		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubCurveCluster\"> </a>siSubCurveCluster		</td>\n\
		<td class=\"example\">subcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubSurfaceCluster\"> </a>siSubSurfaceCluster		</td>\n\
		<td class=\"example\">subsrf		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubSurfaceFilter\"> </a>siSubSurfaceFilter		</td>\n\
		<td class=\"example\">SubSurface		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubdivEdgeOpType\"> </a>siSubdivEdgeOpType		</td>\n\
		<td class=\"example\">subdivideedgeop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubdivPolyOpType\"> </a>siSubdivPolyOpType		</td>\n\
		<td class=\"example\">subdividepolygonop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceCurveCluster\"> </a>siSurfaceCurveCluster		</td>\n\
		<td class=\"example\">srfcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceCurveFamily\"> </a>siSurfaceCurveFamily		</td>\n\
		<td class=\"example\">Surface Curves		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceCurveFilter\"> </a>siSurfaceCurveFilter		</td>\n\
		<td class=\"example\">SurfaceCurve		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceFamily\"> </a>siSurfaceFamily		</td>\n\
		<td class=\"example\">Surfaces		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceKeyword\"> </a>siSurfaceKeyword		</td>\n\
		<td class=\"example\">Surface		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSurfaceMeshFilter\"> </a>siSurfaceMeshFilter		</td>\n\
		<td class=\"example\">surfacemesh		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSwapSrfUVOpType\"> </a>siSwapSrfUVOpType		</td>\n\
		<td class=\"example\">swapsrfuv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSymmetrizePolygon\"> </a>siSymmetrizePolygon		</td>\n\
		<td class=\"example\">symmetrizepolygonop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSymmetryCnsType\"> </a>siSymmetryCnsType		</td>\n\
		<td class=\"example\">symmetrycns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSymmetryMapOpType\"> </a>siSymmetryMapOpType		</td>\n\
		<td class=\"example\">symmetrymapop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSymmetryMapType\"> </a>siSymmetryMapType		</td>\n\
		<td class=\"example\">map		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSynopticViewType\"> </a>siSynopticViewType		</td>\n\
		<td class=\"example\">synoptic		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTaperOpType\"> </a>siTaperOpType		</td>\n\
		<td class=\"example\">taperop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTetrahedronPrimType\"> </a>siTetrahedronPrimType		</td>\n\
		<td class=\"example\">tetrahedron		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextToCrvListOpType\"> </a>siTextToCrvListOpType		</td>\n\
		<td class=\"example\">TextToCurveList		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureControlFilter\"> </a>siTextureControlFilter		</td>\n\
		<td class=\"example\">texturecontrol		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureShaderFamily\"> </a>siTextureShaderFamily		</td>\n\
		<td class=\"example\">Texture Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeDisplayFormatDisplayAsFrames\"> </a>siTimeDisplayFormatDisplayAsFrames		</td>\n\
		<td class=\"example\">SI3D_TIMEDISPLAYFORMAT_DISPLAYASFRAMES		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeDisplayFormatDisplayUserFormat\"> </a>siTimeDisplayFormatDisplayUserFormat		</td>\n\
		<td class=\"example\">SI3D_TIMEDISPLAYFORMAT_DISPLAYUSERFORMAT		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeDisplayFormatUserFormat\"> </a>siTimeDisplayFormatUserFormat		</td>\n\
		<td class=\"example\">SI3D_TIMEDISPLAYFORMAT_USERFORMAT		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeFormatDefaultFrameFormat\"> </a>siTimeFormatDefaultFrameFormat		</td>\n\
		<td class=\"example\">SI3D_TIMEFORMAT_DEFAULTFRAMEFORMAT		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeFormatDefaultFrameRate\"> </a>siTimeFormatDefaultFrameRate		</td>\n\
		<td class=\"example\">SI3D_TIMEFORMAT_DEFAULTFRAMERATE		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTopologyEditorKeyword\"> </a>siTopologyEditorKeyword		</td>\n\
		<td class=\"example\">Topology_Editor		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTopologyKeyword\"> </a>siTopologyKeyword		</td>\n\
		<td class=\"example\">Topology		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTopologyOperatorFamily\"> </a>siTopologyOperatorFamily		</td>\n\
		<td class=\"example\">TopologyOperators		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTorusPrimType\"> </a>siTorusPrimType		</td>\n\
		<td class=\"example\">torus		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrackAnimationLayerType\"> </a>siTrackAnimationLayerType		</td>\n\
		<td class=\"example\">TrackAnimationLayerType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siTrackType.html\">siTrackType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrackAnimationType\"> </a>siTrackAnimationType		</td>\n\
		<td class=\"example\">TrackAnimationType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siTrackType.html\">siTrackType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrackAudioType\"> </a>siTrackAudioType		</td>\n\
		<td class=\"example\">TrackAudioType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siTrackType.html\">siTrackType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrackCacheType\"> </a>siTrackCacheType		</td>\n\
		<td class=\"example\">TrackCacheType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siTrackType.html\">siTrackType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrackShapeType\"> </a>siTrackShapeType		</td>\n\
		<td class=\"example\">TrackShapeType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siTrackType.html\">siTrackType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrackShotType\"> </a>siTrackShotType		</td>\n\
		<td class=\"example\">TrackShotType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siTrackType.html\">siTrackType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrajCnsType\"> </a>siTrajCnsType		</td>\n\
		<td class=\"example\">trajcns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransformAxisMode\"> </a>siTransformAxisMode		</td>\n\
		<td class=\"example\">3D_TRANSFO_EDITED_AXIS_CHANGED		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransformRefMode\"> </a>siTransformRefMode		</td>\n\
		<td class=\"example\">3D_TRANSFO_REFERENTIAL_CHANGED		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransformSetupType\"> </a>siTransformSetupType		</td>\n\
		<td class=\"example\">transformsetup		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransitionBridgeType\"> </a>siTransitionBridgeType		</td>\n\
		<td class=\"example\">TransitionBridgeType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siTransitionType.html\">siTransitionType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransitionCardinalType\"> </a>siTransitionCardinalType		</td>\n\
		<td class=\"example\">TransitionCardinalType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siTransitionType.html\">siTransitionType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransitionStandardType\"> </a>siTransitionStandardType		</td>\n\
		<td class=\"example\">TransitionStandardType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siTransitionType.html\">siTransitionType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrimCurveCluster\"> </a>siTrimCurveCluster		</td>\n\
		<td class=\"example\">trimcrv		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrimCurveFilter\"> </a>siTrimCurveFilter		</td>\n\
		<td class=\"example\">trimcurve		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTurbulenceCtrlPrimType\"> </a>siTurbulenceCtrlPrimType		</td>\n\
		<td class=\"example\">turbulence		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTwistOpType\"> </a>siTwistOpType		</td>\n\
		<td class=\"example\">twistop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTxtMapType\"> </a>siTxtMapType		</td>\n\
		<td class=\"example\">TextureProp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTxtOpType\"> </a>siTxtOpType		</td>\n\
		<td class=\"example\">TextureOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTxtSupportType\"> </a>siTxtSupportType		</td>\n\
		<td class=\"example\">Texture Support		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAlignCenter\"> </a>siUIAlignCenter		</td>\n\
		<td class=\"example\">AlignCenter		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAlignLeft\"> </a>siUIAlignLeft		</td>\n\
		<td class=\"example\">AlignLeft		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAlignRight\"> </a>siUIAlignRight		</td>\n\
		<td class=\"example\">AlignRight		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAudioFile\"> </a>siUIAudioFile		</td>\n\
		<td class=\"example\">AudioFile		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIAutoComplete\"> </a>siUIAutoComplete		</td>\n\
		<td class=\"example\">AutoComplete		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIBackgroundColor\"> </a>siUIBackgroundColor		</td>\n\
		<td class=\"example\">Background		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIButtonDisable\"> </a>siUIButtonDisable		</td>\n\
		<td class=\"example\">ButtonDisable		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICX\"> </a>siUICX		</td>\n\
		<td class=\"example\">CX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICY\"> </a>siUICY		</td>\n\
		<td class=\"example\">CY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICapability\"> </a>siUICapability		</td>\n\
		<td class=\"example\">Capability		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICaption\"> </a>siUICaption		</td>\n\
		<td class=\"example\">caption		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIColumnCnt\"> </a>siUIColumnCnt		</td>\n\
		<td class=\"example\">nocol		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIColumnGap\"> </a>siUIColumnGap		</td>\n\
		<td class=\"example\">colgap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICommentColor\"> </a>siUICommentColor		</td>\n\
		<td class=\"example\">CommentColor		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUICommentFont\"> </a>siUICommentFont		</td>\n\
		<td class=\"example\">CommentFont		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIContinue\"> </a>siUIContinue		</td>\n\
		<td class=\"example\">Continue		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIDecimals\"> </a>siUIDecimals		</td>\n\
		<td class=\"example\">decimals		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIDictionary\"> </a>siUIDictionary		</td>\n\
		<td class=\"example\">Dictionary		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveColorNonBijective\"> </a>siUIFCurveColorNonBijective		</td>\n\
		<td class=\"example\">ColorNonBijective		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveGhosting\"> </a>siUIFCurveGhosting		</td>\n\
		<td class=\"example\">Ghosting		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveGridSpaceX\"> </a>siUIFCurveGridSpaceX		</td>\n\
		<td class=\"example\">GridSpaceX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveGridSpaceY\"> </a>siUIFCurveGridSpaceY		</td>\n\
		<td class=\"example\">GridSpaceY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveLabelX\"> </a>siUIFCurveLabelX		</td>\n\
		<td class=\"example\">LabelX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveLabelY\"> </a>siUIFCurveLabelY		</td>\n\
		<td class=\"example\">LabelY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveNoGrid\"> </a>siUIFCurveNoGrid		</td>\n\
		<td class=\"example\">NoGrid		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveNoRulerX\"> </a>siUIFCurveNoRulerX		</td>\n\
		<td class=\"example\">NoRulerX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveNoRulerY\"> </a>siUIFCurveNoRulerY		</td>\n\
		<td class=\"example\">NoRulerY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveShowTimeCursor\"> </a>siUIFCurveShowTimeCursor		</td>\n\
		<td class=\"example\">ShowTimeCursor		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveSnapX\"> </a>siUIFCurveSnapX		</td>\n\
		<td class=\"example\">SnapX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveSnapY\"> </a>siUIFCurveSnapY		</td>\n\
		<td class=\"example\">SnapY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveViewMaxX\"> </a>siUIFCurveViewMaxX		</td>\n\
		<td class=\"example\">ViewMaxX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveViewMaxY\"> </a>siUIFCurveViewMaxY		</td>\n\
		<td class=\"example\">ViewMaxY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveViewMinX\"> </a>siUIFCurveViewMinX		</td>\n\
		<td class=\"example\">ViewMinX		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFCurveViewMinY\"> </a>siUIFCurveViewMinY		</td>\n\
		<td class=\"example\">ViewMinY		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFileFilter\"> </a>siUIFileFilter		</td>\n\
		<td class=\"example\">FileFilter		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFileMustExist\"> </a>siUIFileMustExist		</td>\n\
		<td class=\"example\">MustExist		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFilePath\"> </a>siUIFilePath		</td>\n\
		<td class=\"example\">path		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFolding\"> </a>siUIFolding		</td>\n\
		<td class=\"example\">Folding		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFont\"> </a>siUIFont		</td>\n\
		<td class=\"example\">Font		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIFontSize\"> </a>siUIFontSize		</td>\n\
		<td class=\"example\">FontSize		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIForegroundColor\"> </a>siUIForegroundColor		</td>\n\
		<td class=\"example\">Foreground		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGradientConDivot\"> </a>siUIGradientConDivot		</td>\n\
		<td class=\"example\">ConDivot		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGradientMaxMarker\"> </a>siUIGradientMaxMarker		</td>\n\
		<td class=\"example\">MaxMarker		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGradientMidPoint\"> </a>siUIGradientMidPoint		</td>\n\
		<td class=\"example\">MidPoint		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGradientType\"> </a>siUIGradientType		</td>\n\
		<td class=\"example\">GradientType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridColumnWidths\"> </a>siUIGridColumnWidths		</td>\n\
		<td class=\"example\">ColumnWidths		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridHideColumnHeader\"> </a>siUIGridHideColumnHeader		</td>\n\
		<td class=\"example\">HideColumnHeader		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridHideRowHeader\"> </a>siUIGridHideRowHeader		</td>\n\
		<td class=\"example\">HideRowHeader		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridLockColumnHeader\"> </a>siUIGridLockColumnHeader		</td>\n\
		<td class=\"example\">LockColumnHeader		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridLockColumnWidth\"> </a>siUIGridLockColumnWidth		</td>\n\
		<td class=\"example\">LockColumnWidth		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridLockRowHeader\"> </a>siUIGridLockRowHeader		</td>\n\
		<td class=\"example\">LockRowHeader		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridLockRowHeight\"> </a>siUIGridLockRowHeight		</td>\n\
		<td class=\"example\">LockRowHeight		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridReadOnlyColumns\"> </a>siUIGridReadOnlyColumns		</td>\n\
		<td class=\"example\">ReadOnlyColumns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridSelectionMode\"> </a>siUIGridSelectionMode		</td>\n\
		<td class=\"example\">SelectionMode		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridShowColumns\"> </a>siUIGridShowColumns		</td>\n\
		<td class=\"example\">ShowColumns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIGridThumbnailSize\"> </a>siUIGridThumbnailSize		</td>\n\
		<td class=\"example\">ThumbnailSize		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHeight\"> </a>siUIHeight		</td>\n\
		<td class=\"example\">Height		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHelpButtonFile\"> </a>siUIHelpButtonFile		</td>\n\
		<td class=\"example\">HelpButtonFile		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHelpFile\"> </a>siUIHelpFile		</td>\n\
		<td class=\"example\">HelpFile		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHelpID\"> </a>siUIHelpID		</td>\n\
		<td class=\"example\">HelpID		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIHorizontalScroll\"> </a>siUIHorizontalScroll		</td>\n\
		<td class=\"example\">HorizontalScroll		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIImageFile\"> </a>siUIImageFile		</td>\n\
		<td class=\"example\">ImageFile		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIInitialDir\"> </a>siUIInitialDir		</td>\n\
		<td class=\"example\">InitialDir		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIItems\"> </a>siUIItems		</td>\n\
		<td class=\"example\">UIItems		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIKeywordFile\"> </a>siUIKeywordFile		</td>\n\
		<td class=\"example\">KeywordFile		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIKeywords\"> </a>siUIKeywords		</td>\n\
		<td class=\"example\">Keywords		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILabel\"> </a>siUILabel		</td>\n\
		<td class=\"example\">label		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILabelMinPixels\"> </a>siUILabelMinPixels		</td>\n\
		<td class=\"example\">LabelMinPixels		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILabelPercentage\"> </a>siUILabelPercentage		</td>\n\
		<td class=\"example\">LabelPercentage		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILanguage\"> </a>siUILanguage		</td>\n\
		<td class=\"example\">Language		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILayoutDefault\"> </a>siUILayoutDefault		</td>\n\
		<td class=\"example\">UI_LAYOUT_DEFAULT		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/UserPreference.html\">UserPreference</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILineCnt\"> </a>siUILineCnt		</td>\n\
		<td class=\"example\">noline		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILineGap\"> </a>siUILineGap		</td>\n\
		<td class=\"example\">linegap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILineNumbering\"> </a>siUILineNumbering		</td>\n\
		<td class=\"example\">LineNumbering		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILineWrap\"> </a>siUILineWrap		</td>\n\
		<td class=\"example\">LineWrap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILogarithmic\"> </a>siUILogarithmic		</td>\n\
		<td class=\"example\">log		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILogic\"> </a>siUILogic		</td>\n\
		<td class=\"example\">Logic		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILogicFile\"> </a>siUILogicFile		</td>\n\
		<td class=\"example\">LogicFile		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUILogicPrefix\"> </a>siUILogicPrefix		</td>\n\
		<td class=\"example\">LogicPrefix		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIMarginWidth\"> </a>siUIMarginWidth		</td>\n\
		<td class=\"example\">MarginWidth		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIMultiSelectionListBox\"> </a>siUIMultiSelectionListBox		</td>\n\
		<td class=\"example\">MultiSelectionListBox		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUINoLabel\"> </a>siUINoLabel		</td>\n\
		<td class=\"example\">NoLabel		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUINoSlider\"> </a>siUINoSlider		</td>\n\
		<td class=\"example\">NoSlider		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIOpenFile\"> </a>siUIOpenFile		</td>\n\
		<td class=\"example\">OpenFile		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIPreprocessorColor\"> </a>siUIPreprocessorColor		</td>\n\
		<td class=\"example\">PreprocessorColor		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUISelectionColor\"> </a>siUISelectionColor		</td>\n\
		<td class=\"example\">selcolor		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowChildren\"> </a>siUIShowChildren		</td>\n\
		<td class=\"example\">ShowChildren		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGLayoutAttribute.html\">siPPGLayoutAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowClip\"> </a>siUIShowClip		</td>\n\
		<td class=\"example\">showclip		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowFrame\"> </a>siUIShowFrame		</td>\n\
		<td class=\"example\">ShowFrame		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowIndentationGuides\"> </a>siUIShowIndentationGuides		</td>\n\
		<td class=\"example\">ShowIndentationGuides		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIShowWhitespace\"> </a>siUIShowWhitespace		</td>\n\
		<td class=\"example\">ShowWhitespace		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIStyle\"> </a>siUIStyle		</td>\n\
		<td class=\"example\">style		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUISubFolder\"> </a>siUISubFolder		</td>\n\
		<td class=\"example\">SubFolder		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUISyncSlider\"> </a>siUISyncSlider		</td>\n\
		<td class=\"example\">SyncSlider		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUITabSize\"> </a>siUITabSize		</td>\n\
		<td class=\"example\">TabSize		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIThumbWheel\"> </a>siUIThumbWheel		</td>\n\
		<td class=\"example\">ThumbWheel		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIToolbar\"> </a>siUIToolbar		</td>\n\
		<td class=\"example\">Toolbar		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUITreadmill\"> </a>siUITreadmill		</td>\n\
		<td class=\"example\">Treadmill		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIType\"> </a>siUIType		</td>\n\
		<td class=\"example\">UIType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIUseSelectionIcon\"> </a>siUIUseSelectionIcon		</td>\n\
		<td class=\"example\">useselicon		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIUseSpacesForTab\"> </a>siUIUseSpacesForTab		</td>\n\
		<td class=\"example\">UseSpacesForTab		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIValueOnly\"> </a>siUIValueOnly		</td>\n\
		<td class=\"example\">ValueOnly		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIVerticalScroll\"> </a>siUIVerticalScroll		</td>\n\
		<td class=\"example\">VerticalScroll		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIWidthPercentage\"> </a>siUIWidthPercentage		</td>\n\
		<td class=\"example\">WidthPercentage		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siPPGItemAttribute.html\">siPPGItemAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIsolineFilter\"> </a>siUIsolineFilter		</td>\n\
		<td class=\"example\">uisoline		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUKnotCurveFilter\"> </a>siUKnotCurveFilter		</td>\n\
		<td class=\"example\">uknotcurve		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUVProjDefType\"> </a>siUVProjDefType		</td>\n\
		<td class=\"example\">uvprojdef		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUpVctCnsType\"> </a>siUpVctCnsType		</td>\n\
		<td class=\"example\">upvctcns		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUseRenderTreeLayoutPortDisplayNamesAttribute\"> </a>siUseRenderTreeLayoutPortDisplayNamesAttribute		</td>\n\
		<td class=\"example\">UseRenderTreeLayoutPortDisplayNames		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUserMotionType\"> </a>siUserMotionType		</td>\n\
		<td class=\"example\">motion		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUserNormalType\"> </a>siUserNormalType		</td>\n\
		<td class=\"example\">normal		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVIsolineFilter\"> </a>siVIsolineFilter		</td>\n\
		<td class=\"example\">visoline		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVKnotCurveFilter\"> </a>siVKnotCurveFilter		</td>\n\
		<td class=\"example\">vknotcurve		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVertexCluster\"> </a>siVertexCluster		</td>\n\
		<td class=\"example\">pnt		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/ClusterTypes.html\">ClusterTypes</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVertexcolorType\"> </a>siVertexcolorType		</td>\n\
		<td class=\"example\">vertexcolor		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siViewingKeyword\"> </a>siViewingKeyword		</td>\n\
		<td class=\"example\">Viewing		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/Keywords.html\">Keywords</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVirtualComponentFamily\"> </a>siVirtualComponentFamily		</td>\n\
		<td class=\"example\">Virtual Components		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVirtualCurveFamily\"> </a>siVirtualCurveFamily		</td>\n\
		<td class=\"example\">Virtual Curves		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVisemeActionType\"> </a>siVisemeActionType		</td>\n\
		<td class=\"example\">VisemeAction		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVisibilityType\"> </a>siVisibilityType		</td>\n\
		<td class=\"example\">visibility		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVolumeDeformType\"> </a>siVolumeDeformType		</td>\n\
		<td class=\"example\">volume_deform		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVolumeShaderFamily\"> </a>siVolumeShaderFamily		</td>\n\
		<td class=\"example\">Volume Shaders		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siFamily.html\">siFamily</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVolumicLightSceneType\"> </a>siVolumicLightSceneType		</td>\n\
		<td class=\"example\">VolumicLightScene		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVolumicLightType\"> </a>siVolumicLightType		</td>\n\
		<td class=\"example\">VolumicLight		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVortexCtrlType\"> </a>siVortexCtrlType		</td>\n\
		<td class=\"example\">vortex		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVtxColPainterOpType\"> </a>siVtxColPainterOpType		</td>\n\
		<td class=\"example\">vertexcolorpainter		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVtxColPropOpType\"> </a>siVtxColPropOpType		</td>\n\
		<td class=\"example\">vertexcolorpropop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWaveCtrlType\"> </a>siWaveCtrlType		</td>\n\
		<td class=\"example\">wave		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWaveFilter\"> </a>siWaveFilter		</td>\n\
		<td class=\"example\">wave		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/FilterConstant.html\">FilterConstant</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWaveOpType\"> </a>siWaveOpType		</td>\n\
		<td class=\"example\">wave		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeldEdgesOpType\"> </a>siWeldEdgesOpType		</td>\n\
		<td class=\"example\">weldedgesop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeldPntOpType\"> </a>siWeldPntOpType		</td>\n\
		<td class=\"example\">weldpointsop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtMapCnxOpType\"> </a>siWgtMapCnxOpType		</td>\n\
		<td class=\"example\">WMCnxOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtMapOpType\"> </a>siWgtMapOpType		</td>\n\
		<td class=\"example\">weightmapop		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtMapType\"> </a>siWgtMapType		</td>\n\
		<td class=\"example\">wtmap		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtMapsMixOpType\"> </a>siWgtMapsMixOpType		</td>\n\
		<td class=\"example\">WghtMapsMixOp		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtPainterOpType\"> </a>siWgtPainterOpType		</td>\n\
		<td class=\"example\">weightpainter		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWindType\"> </a>siWindType		</td>\n\
		<td class=\"example\">wind		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWritableImageAttribute\"> </a>siWritableImageAttribute		</td>\n\
		<td class=\"example\">WritableImage		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWritableImageTypeAttribute\"> </a>siWritableImageTypeAttribute		</td>\n\
		<td class=\"example\">WritableImageType		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderParameterAttribute.html\">siShaderParameterAttribute</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWtStrokeOpType\"> </a>siWtStrokeOpType		</td>\n\
		<td class=\"example\">wtstroke		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siType.html\">siType</a>		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siXGSRealTimePortType\"> </a>siXGSRealTimePortType		</td>\n\
		<td class=\"example\">xgsRTCtx		</td>\n\
		<td>\n\
See <a href=\"#!/url=./si_om/siShaderCustomDataType.html\">siShaderCustomDataType</a>		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";