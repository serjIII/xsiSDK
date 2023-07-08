var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siType</title>\n\
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
            <h1>siType</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siType</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>The Softimage object type constant strings.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>StringModule.si2PntCnsType                                                  // 2ptscns\n\
StringModule.si3DObjectType                                                 // #3dobject\n\
StringModule.si3PntCnsType                                                  // 3ptscns\n\
StringModule.siActionClipType                                               // actionclip\n\
StringModule.siActionType                                                   // Action\n\
StringModule.siAddEdgeOpType                                                // addedgeop\n\
StringModule.siAddMeshPntOpType                                             // addmeshpointsop\n\
StringModule.siAddNurbsCrvPntOpType                                         // addnurbscrvpointsop\n\
StringModule.siAddNurbsSrfPntOpType                                         // addnurbssrfpointsop\n\
StringModule.siAddPntMiddleCrvType                                          // addpt_middlecrv\n\
StringModule.siAddPntMiddleSrfOpType                                        // addpt_middlesrf\n\
StringModule.siAmbientLightingType                                          // AmbientLighting\n\
StringModule.siArcPrimType                                                  // arc\n\
StringModule.siAttractorCtrlType                                            // attractor\n\
StringModule.siAutoCageAssignOpType                                         // autocageassign\n\
StringModule.siAutoEnvAssignOpType                                          // autoenvassign\n\
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
StringModule.siBPlaneCnsType                                                // bplanecns\n\
StringModule.siBridgeOpType                                                 // bridgeop\n\
StringModule.siBrushPropertiesType                                          // BrushProperties\n\
StringModule.siBulgeOpType                                                  // bulgeop\n\
StringModule.siBVolCnsType                                                  // bvolcns\n\
StringModule.siCageDeformOpType                                             // cagedeformop\n\
StringModule.siCamDispType                                                  // camdisp\n\
StringModule.siCameraLensFlareType                                          // CameraLensFlare\n\
StringModule.siCameraPrimType                                               // camera\n\
StringModule.siCameraRootPrimType                                           // CameraRoot\n\
StringModule.siCameraTxtOpType                                              // CameraTxt\n\
StringModule.siCamVisType                                                   // camvis\n\
StringModule.siCapOpType                                                    // capop\n\
StringModule.siCenterOpType                                                 // center\n\
StringModule.siChainBonePrimType                                            // bone\n\
StringModule.siChainEffPrimType                                             // eff\n\
StringModule.siChainRootPrimType                                            // root\n\
StringModule.siCirclePrimType                                               // circle\n\
StringModule.siCleanCrvOpType                                               // cleancrv\n\
StringModule.siCleanSrfOpType                                               // cleansrf\n\
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
StringModule.siCoBBoxSclOpType                                              // CoBBoxSclOp\n\
StringModule.siCollapseOpType                                               // collapseop\n\
StringModule.siConePrimType                                                 // cone\n\
StringModule.siCoPoseFCrvOpType                                             // CoPoseFcurveOp\n\
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
StringModule.siCustomParamSet                                               // customparamset\n\
StringModule.siCycleUVWType                                                 // Cycleuvw\n\
StringModule.siCylinderPrimType                                             // cylinder\n\
StringModule.siDeformBySpineOp2Type                                         // deformbyspineop2\n\
StringModule.siDeformBySpineOpType                                          // deformbyspineop\n\
StringModule.siDeformOpType                                                 // deformop\n\
StringModule.siDeleteCompOpType                                             // deletecompop\n\
StringModule.siDelPntCrvOpType                                              // delpt_crv\n\
StringModule.siDGlowType                                                    // dglow\n\
StringModule.siDirCnsType                                                   // dircns\n\
StringModule.siDiscPrimType                                                 // disc\n\
StringModule.siDisplayType                                                  // display\n\
StringModule.siDissolveCompOpType                                           // dissolvecompop\n\
StringModule.siDistanceOpType                                               // DistanceOp\n\
StringModule.siDistCnsType                                                  // distcns\n\
StringModule.siDodecahedronPrimType                                         // dodecahedron\n\
StringModule.siDragCtrlPrimType                                             // drag\n\
StringModule.siEddyCtrlPrimType                                             // eddy\n\
StringModule.siEditPolyOpType                                               // editpolygonop\n\
StringModule.siEmissionPropType                                             // EmissionProp\n\
StringModule.siEnvelopOpType                                                // envelopop\n\
StringModule.siEnvSelClsOpType                                              // EnvSelClsOp\n\
StringModule.siEnvWgtType                                                   // envweights\n\
StringModule.siExplosionOpType                                              // ExplosionOp\n\
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
StringModule.siFanType                                                      // fan\n\
StringModule.siFilletCrvOpType                                              // filletcrv\n\
StringModule.siFilletSrfOpType                                              // Fillet Surfaces\n\
StringModule.siFillHoleOpType                                               // fillHoleOp\n\
StringModule.siFilterEdgeOpType                                             // filteredgeop\n\
StringModule.siFilterPolyOpType                                             // filterpolygonop\n\
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
StringModule.siGeneratorOpType                                              // generatorop\n\
StringModule.siGeomApproxType                                               // geomapprox\n\
StringModule.siGeoShaderPrimType                                            // GeoShader\n\
StringModule.siGeoTxtOpType                                                 // GeoTxtOp\n\
StringModule.siGlobalType                                                   // global\n\
StringModule.siGravityCtrlType                                              // gravity\n\
StringModule.siGridPrimType                                                 // grid\n\
StringModule.siGroup                                                        // #Group\n\
StringModule.siGroupType                                                    // #Group\n\
StringModule.siHealOpType                                                   // heal\n\
StringModule.siHealUVWOpType                                                // healuvw\n\
StringModule.siIcosahedronPrimType                                          // icosahedron\n\
StringModule.siImageClipType                                                // ImageClip\n\
StringModule.siImageCropOpType                                              // ImageCropOp\n\
StringModule.siImageFXOpType                                                // ImageFXOp\n\
StringModule.siImageObjectType                                              // ImageObject\n\
StringModule.siImageSourceOpType                                            // ImageSourceOp\n\
StringModule.siImageSourceType                                              // ImageSource\n\
StringModule.siInsertCrvKnotOpType                                          // InsertCrvKnot\n\
StringModule.siInsSrfKnotOpType                                             // inssrfknot\n\
StringModule.siIntersectSrfOpType                                           // intersectsrf\n\
StringModule.siInvCrvOpType                                                 // invcrv\n\
StringModule.siInvertPolyOpType                                             // invertpolygonop\n\
StringModule.siInvisiblePolygonsClusterName                                 // InvisiblePolygons\n\
StringModule.siInvSrfOpType                                                 // invsrf\n\
StringModule.siKineChainPropType                                            // KineChainProp\n\
StringModule.siKineChainType                                                // chain\n\
StringModule.siKineCnsType                                                  // kinecns\n\
StringModule.siKineInfoType                                                 // kine\n\
StringModule.siKineJointType                                                // joint\n\
StringModule.siLatticeOpType                                                // lattice\n\
StringModule.siLatticePrimType                                              // lattice\n\
StringModule.siLayersType                                                   // Layers\n\
StringModule.siLightLensFlareType                                           // LightLensFlare\n\
StringModule.siLightPrimType                                                // light\n\
StringModule.siLineCnsType                                                  // LineCns\n\
StringModule.siLocalType                                                    // local\n\
StringModule.siLoftOpType                                                   // loft\n\
StringModule.siMapCompOpType                                                // mapCompOp\n\
StringModule.siMarkHardEdgeVertexOpType                                     // MarkHardEdgeVertex\n\
StringModule.siMaterialType                                                 // material\n\
StringModule.siMergeCrvOpType                                               // mergecrv\n\
StringModule.siMergeMeshOpType                                              // mergemesh\n\
StringModule.siMergeSrfOpType                                               // mergesrf\n\
StringModule.siMeshLocalSubdivisionOpType                                   // meshlocalsubdivisionop\n\
StringModule.siMeshSubdivOpType                                             // MeshSubdivide\n\
StringModule.siMeshSubdivWithCenterOpType                                   // MeshSubdivideWithCenter\n\
StringModule.siMixerAnimClipType                                            // mixeranimclip\n\
StringModule.siMixerAnimTrackType                                           // mixeranimtrack\n\
StringModule.siMixerAudioClipType                                           // mixeraudioclip\n\
StringModule.siMixerAudioTrackType                                          // mixeraudiotrack\n\
StringModule.siMixerPropType                                                // MixerProp\n\
StringModule.siMixerShapeClipType                                           // mixershapeclip\n\
StringModule.siMixerShapeTrackType                                          // mixershapetrack\n\
StringModule.siMixerType                                                    // mixer\n\
StringModule.siModelClipType                                                // model_clip\n\
StringModule.siModelNullPrimType                                            // modelnull\n\
StringModule.siModelType                                                    // #model\n\
StringModule.siMotionBlurType                                               // motionblur\n\
StringModule.siMoveComponentOpType                                          // movecomponentop\n\
StringModule.siNPntCnsType                                                  // Nptscns\n\
StringModule.siNullPrimType                                                 // null\n\
StringModule.siNurbsToMeshOpType                                            // nurbstomesh\n\
StringModule.siObjClsCnsType                                                // objclscns\n\
StringModule.siObstaclePropType                                             // ObstacleProp\n\
StringModule.siOctahedronPrimType                                           // octahedron\n\
StringModule.siOffsetClsOpType                                              // offsetclusterop\n\
StringModule.siOffsetCrvOpType                                              // offsetcrv\n\
StringModule.siOffsetSrfOpType                                              // offsetsrf\n\
StringModule.siOpenCloseSrfOpType                                           // openclosesrf\n\
StringModule.siOriCnsType                                                   // oricns\n\
StringModule.siOverrideType                                                 // #Override\n\
StringModule.siParDecayType                                                 // ParDecay\n\
StringModule.siParObstExtSparksType                                         // ParObstExtSparks\n\
StringModule.siParticleEventType                                            // ParticleEvent\n\
StringModule.siParticlesOpType                                              // ParticlesOp\n\
StringModule.siPathCnsType                                                  // pathcns\n\
StringModule.siPinJointCnsType                                              // PinJointCns\n\
StringModule.siPlaneCnsType                                                 // PlaneCns\n\
StringModule.siPointCloudPrimType                                           // PointCloud\n\
StringModule.siPolyMeshPNetOpType                                           // PolyMeshPNetOp\n\
StringModule.siPolyMeshType                                                 // polymsh\n\
StringModule.siPosCnsType                                                   // poscns\n\
StringModule.siPoseCnsType                                                  // posecns\n\
StringModule.siProjectCrvOpType                                             // projectcrv\n\
StringModule.siProportionalOpType                                           // proportional\n\
StringModule.siPropVolumeOpType                                             // propvolumeop\n\
StringModule.siPushOpType                                                   // pushop\n\
StringModule.siQStretchOpType                                               // qstretch\n\
StringModule.siRandomizeOpType                                              // randomizeop\n\
StringModule.siRefPlaneType                                                 // refplane\n\
StringModule.siRelaxUVWOpType                                               // Relaxuvw\n\
StringModule.siRemoveCrvKnotOpType                                          // RemoveCrvKnot\n\
StringModule.siRemSrfKnotOpType                                             // remsrfknot\n\
StringModule.siRenderMapType                                                // rendermap\n\
StringModule.siRevolutionOpType                                             // revolution\n\
StringModule.siRotoscopeType                                                // rotoscope\n\
StringModule.siSceneAmbienceType                                            // ambience\n\
StringModule.siSceneColorsType                                              // Scenecolors\n\
StringModule.siSclCnsType                                                   // sclcns\n\
StringModule.siSCMFixerOpType                                               // scmfixerop\n\
StringModule.siSCMTopologyOpType                                            // scmtopologyop\n\
StringModule.siScriptedOpType                                               // scriptedop\n\
StringModule.siSetEdgeCreaseValueOpType                                     // SetEdgeCreaseValue\n\
StringModule.siShapeActionCompoundClipType                                  // ShapeActionCompoundClip\n\
StringModule.siShapeActionType                                              // ShapeAction\n\
StringModule.siShearOpType                                                  // shearop\n\
StringModule.siShrinkWrapOpType                                             // shrinkwrap\n\
StringModule.siSkelCtrlOpPropType                                           // SkeletonCtrlOpProp\n\
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
StringModule.siStitchCrvToCrvOpType                                         // stitchcrvtocrv\n\
StringModule.siStitchCrvToSrfOpType                                         // stitchcrvtosrf\n\
StringModule.siStitchSrfOpType                                              // stitchsrf\n\
StringModule.siStrokeOpType                                                 // stroke\n\
StringModule.siSubCompType                                                  // subcomp\n\
StringModule.siSubdivEdgeOpType                                             // subdivideedgeop\n\
StringModule.siSubdivPolyOpType                                             // subdividepolygonop\n\
StringModule.siSwapSrfUVOpType                                              // swapsrfuv\n\
StringModule.siSymmetrizePolygon                                            // symmetrizepolygonop\n\
StringModule.siSymmetryCnsType                                              // symmetrycns\n\
StringModule.siSymmetryMapOpType                                            // symmetrymapop\n\
StringModule.siSymmetryMapType                                              // map\n\
StringModule.siSynopticViewType                                             // synoptic\n\
StringModule.siTaperOpType                                                  // taperop\n\
StringModule.siTetrahedronPrimType                                          // tetrahedron\n\
StringModule.siTextToCrvListOpType                                          // TextToCurveList\n\
StringModule.siTorusPrimType                                                // torus\n\
StringModule.siTrajCnsType                                                  // trajcns\n\
StringModule.siTransformSetupType                                           // transformsetup\n\
StringModule.siTurbulenceCtrlPrimType                                       // turbulence\n\
StringModule.siTwistOpType                                                  // twistop\n\
StringModule.siTxtMapType                                                   // TextureProp\n\
StringModule.siTxtOpType                                                    // TextureOp\n\
StringModule.siTxtSupportType                                               // Texture Support\n\
StringModule.siUpVctCnsType                                                 // upvctcns\n\
StringModule.siUserMotionType                                               // motion\n\
StringModule.siUserNormalType                                               // normal\n\
StringModule.siUVProjDefType                                                // uvprojdef\n\
StringModule.siVertexcolorType                                              // vertexcolor\n\
StringModule.siVisemeActionType                                             // VisemeAction\n\
StringModule.siVisibilityType                                               // visibility\n\
StringModule.siVolumeDeformType                                             // volume_deform\n\
StringModule.siVolumicLightSceneType                                        // VolumicLightScene\n\
StringModule.siVolumicLightType                                             // VolumicLight\n\
StringModule.siVortexCtrlType                                               // vortex\n\
StringModule.siVtxColPainterOpType                                          // vertexcolorpainter\n\
StringModule.siVtxColPropOpType                                             // vertexcolorpropop\n\
StringModule.siWaveCtrlType                                                 // wave\n\
StringModule.siWaveOpType                                                   // wave\n\
StringModule.siWeldEdgesOpType                                              // weldedgesop\n\
StringModule.siWeldPntOpType                                                // weldpointsop\n\
StringModule.siWgtMapCnxOpType                                              // WMCnxOp\n\
StringModule.siWgtMapOpType                                                 // weightmapop\n\
StringModule.siWgtMapsMixOpType                                             // WghtMapsMixOp\n\
StringModule.siWgtMapType                                                   // wtmap\n\
StringModule.siWgtPainterOpType                                             // weightpainter\n\
StringModule.siWindType                                                     // wind\n\
StringModule.siWtStrokeOpType                                               // wtstroke</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si2PntCnsType\"> </a>si2PntCnsType		</td>\n\
		<td class=\"example\">2ptscns		</td>\n\
		<td>\n\
Two Points Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si3DObjectType\"> </a>si3DObjectType		</td>\n\
		<td class=\"example\">#3dobject		</td>\n\
		<td>\n\
3D Object type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"si3PntCnsType\"> </a>si3PntCnsType		</td>\n\
		<td class=\"example\">3ptscns		</td>\n\
		<td>\n\
Three Points Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siActionClipType\"> </a>siActionClipType		</td>\n\
		<td class=\"example\">actionclip		</td>\n\
		<td>\n\
Action Clip type (instanced action)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siActionType\"> </a>siActionType		</td>\n\
		<td class=\"example\">Action		</td>\n\
		<td>\n\
Action type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddEdgeOpType\"> </a>siAddEdgeOpType		</td>\n\
		<td class=\"example\">addedgeop		</td>\n\
		<td>\n\
AddEdge Operator type (add an edge between an existing point and an existing edge)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddMeshPntOpType\"> </a>siAddMeshPntOpType		</td>\n\
		<td class=\"example\">addmeshpointsop		</td>\n\
		<td>\n\
Add Mesh Points Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddNurbsCrvPntOpType\"> </a>siAddNurbsCrvPntOpType		</td>\n\
		<td class=\"example\">addnurbscrvpointsop		</td>\n\
		<td>\n\
Add Nurbs Curve Points Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddNurbsSrfPntOpType\"> </a>siAddNurbsSrfPntOpType		</td>\n\
		<td class=\"example\">addnurbssrfpointsop		</td>\n\
		<td>\n\
Add Nurbs Surface Points Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddPntMiddleCrvType\"> </a>siAddPntMiddleCrvType		</td>\n\
		<td class=\"example\">addpt_middlecrv		</td>\n\
		<td>\n\
Add Point Inside Curve Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddPntMiddleSrfOpType\"> </a>siAddPntMiddleSrfOpType		</td>\n\
		<td class=\"example\">addpt_middlesrf		</td>\n\
		<td>\n\
Add Point Inside Surface Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAmbientLightingType\"> </a>siAmbientLightingType		</td>\n\
		<td class=\"example\">AmbientLighting		</td>\n\
		<td>\n\
Ambient Lighting type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArcPrimType\"> </a>siArcPrimType		</td>\n\
		<td class=\"example\">arc		</td>\n\
		<td>\n\
Implicit Arc Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAttractorCtrlType\"> </a>siAttractorCtrlType		</td>\n\
		<td class=\"example\">attractor		</td>\n\
		<td>\n\
Attractor Control Object type (electric force)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAutoCageAssignOpType\"> </a>siAutoCageAssignOpType		</td>\n\
		<td class=\"example\">autocageassign		</td>\n\
		<td>\n\
Automatic Cage Assignment Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAutoEnvAssignOpType\"> </a>siAutoEnvAssignOpType		</td>\n\
		<td class=\"example\">autoenvassign		</td>\n\
		<td>\n\
Automatic Envelope Assignment Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBallJointCnsType\"> </a>siBallJointCnsType		</td>\n\
		<td class=\"example\">BallJointCns		</td>\n\
		<td>\n\
Ball Joint Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBasePathCnsType\"> </a>siBasePathCnsType		</td>\n\
		<td class=\"example\">basepathcns		</td>\n\
		<td>\n\
Base Path Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBendOpType\"> </a>siBendOpType		</td>\n\
		<td class=\"example\">bendop		</td>\n\
		<td>\n\
Bend Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBevelOpType\"> </a>siBevelOpType		</td>\n\
		<td class=\"example\">bevelop		</td>\n\
		<td>\n\
Bevel Operator type (bevel geometry component)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBirail2GenOpType\"> </a>siBirail2GenOpType		</td>\n\
		<td class=\"example\">Birail2Generators		</td>\n\
		<td>\n\
Birail2Generators Operator Type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBirailOpType\"> </a>siBirailOpType		</td>\n\
		<td class=\"example\">birail		</td>\n\
		<td>\n\
Birail Operator type (generates a surface from 2 curves and a profile)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBlasterOpType\"> </a>siBlasterOpType		</td>\n\
		<td class=\"example\">blasterop		</td>\n\
		<td>\n\
Blaster Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBlendCrvOpType\"> </a>siBlendCrvOpType		</td>\n\
		<td class=\"example\">blendcrv		</td>\n\
		<td>\n\
Blend Curves Operator type (create a blended curve between two existing curves)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBlendSrfOpType\"> </a>siBlendSrfOpType		</td>\n\
		<td class=\"example\">blendsrf		</td>\n\
		<td>\n\
Blend Surfaces Operator type (blend surfaces)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBooleanGenOpType\"> </a>siBooleanGenOpType		</td>\n\
		<td class=\"example\">booleangen		</td>\n\
		<td>\n\
Boolean Generator Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBooleanSrfTopoOpType\"> </a>siBooleanSrfTopoOpType		</td>\n\
		<td class=\"example\">booleansrftopoop		</td>\n\
		<td>\n\
Boolean Surface Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBPlaneCnsType\"> </a>siBPlaneCnsType		</td>\n\
		<td class=\"example\">bplanecns		</td>\n\
		<td>\n\
Bounding Plane Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBridgeOpType\"> </a>siBridgeOpType		</td>\n\
		<td class=\"example\">bridgeop		</td>\n\
		<td>\n\
Bridge Op Operator type (bridge polygon)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBrushPropertiesType\"> </a>siBrushPropertiesType		</td>\n\
		<td class=\"example\">BrushProperties		</td>\n\
		<td>\n\
Brush Properties type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBulgeOpType\"> </a>siBulgeOpType		</td>\n\
		<td class=\"example\">bulgeop		</td>\n\
		<td>\n\
Bulge Op Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siBVolCnsType\"> </a>siBVolCnsType		</td>\n\
		<td class=\"example\">bvolcns		</td>\n\
		<td>\n\
Bounding Volume Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCageDeformOpType\"> </a>siCageDeformOpType		</td>\n\
		<td class=\"example\">cagedeformop		</td>\n\
		<td>\n\
Cage Deform Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCamDispType\"> </a>siCamDispType		</td>\n\
		<td class=\"example\">camdisp		</td>\n\
		<td>\n\
Camera Display type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraLensFlareType\"> </a>siCameraLensFlareType		</td>\n\
		<td class=\"example\">CameraLensFlare		</td>\n\
		<td>\n\
Camera Lens Flare type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraPrimType\"> </a>siCameraPrimType		</td>\n\
		<td class=\"example\">camera		</td>\n\
		<td>\n\
Camera Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraRootPrimType\"> </a>siCameraRootPrimType		</td>\n\
		<td class=\"example\">CameraRoot		</td>\n\
		<td>\n\
Camera Root primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraTxtOpType\"> </a>siCameraTxtOpType		</td>\n\
		<td class=\"example\">CameraTxt		</td>\n\
		<td>\n\
CameraTxt Operator type (camera texture projection operator)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCamVisType\"> </a>siCamVisType		</td>\n\
		<td class=\"example\">camvis		</td>\n\
		<td>\n\
Camera Visibility type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCapOpType\"> </a>siCapOpType		</td>\n\
		<td class=\"example\">capop		</td>\n\
		<td>\n\
CapOp type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCenterOpType\"> </a>siCenterOpType		</td>\n\
		<td class=\"example\">center		</td>\n\
		<td>\n\
Center Operator type (center manipulation)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainBonePrimType\"> </a>siChainBonePrimType		</td>\n\
		<td class=\"example\">bone		</td>\n\
		<td>\n\
Chain Bone Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainEffPrimType\"> </a>siChainEffPrimType		</td>\n\
		<td class=\"example\">eff		</td>\n\
		<td>\n\
Chain End Effector Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainRootPrimType\"> </a>siChainRootPrimType		</td>\n\
		<td class=\"example\">root		</td>\n\
		<td>\n\
Chain Root Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCirclePrimType\"> </a>siCirclePrimType		</td>\n\
		<td class=\"example\">circle		</td>\n\
		<td>\n\
Implicit Circle Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCleanCrvOpType\"> </a>siCleanCrvOpType		</td>\n\
		<td class=\"example\">cleancrv		</td>\n\
		<td>\n\
Clean Curve Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCleanSrfOpType\"> </a>siCleanSrfOpType		</td>\n\
		<td class=\"example\">cleansrf		</td>\n\
		<td>\n\
Clean Surface Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClothOpType\"> </a>siClothOpType		</td>\n\
		<td class=\"example\">ClothOp		</td>\n\
		<td>\n\
Cloth Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClothPropType\"> </a>siClothPropType		</td>\n\
		<td class=\"example\">ClothProp		</td>\n\
		<td>\n\
Cloth Property type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCloudPrimType\"> </a>siCloudPrimType		</td>\n\
		<td class=\"example\">cloud		</td>\n\
		<td>\n\
Cloud Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsColorType\"> </a>siClsColorType		</td>\n\
		<td class=\"example\">clscolor		</td>\n\
		<td>\n\
Cluster Color type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsCtrOpType\"> </a>siClsCtrOpType		</td>\n\
		<td class=\"example\">clsctr		</td>\n\
		<td>\n\
Cluster Center Operator type (cluster center deformation)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsKeyType\"> </a>siClsKeyType		</td>\n\
		<td class=\"example\">clskey		</td>\n\
		<td>\n\
Cluster Key type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsKeyWgtMapOpType\"> </a>siClsKeyWgtMapOpType		</td>\n\
		<td class=\"example\">ClusterKeyWeightMap		</td>\n\
		<td>\n\
Cluster Key Weight Map Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsPoseType\"> </a>siClsPoseType		</td>\n\
		<td class=\"example\">clspose		</td>\n\
		<td>\n\
Cluster Pose type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsShapeCombinerOpType\"> </a>siClsShapeCombinerOpType		</td>\n\
		<td class=\"example\">clustershapecombiner		</td>\n\
		<td>\n\
Cluster Shape Combiner Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClsUVSpaceTxtType\"> </a>siClsUVSpaceTxtType		</td>\n\
		<td class=\"example\">uvspace		</td>\n\
		<td>\n\
Cluster Property UV Texture Projection type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCoBBoxSclOpType\"> </a>siCoBBoxSclOpType		</td>\n\
		<td class=\"example\">CoBBoxSclOp		</td>\n\
		<td>\n\
CoBBoxSclOp type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCollapseOpType\"> </a>siCollapseOpType		</td>\n\
		<td class=\"example\">collapseop		</td>\n\
		<td>\n\
Collapse Operator type (collapse geometry component)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConePrimType\"> </a>siConePrimType		</td>\n\
		<td class=\"example\">cone		</td>\n\
		<td>\n\
Cone Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCoPoseFCrvOpType\"> </a>siCoPoseFCrvOpType		</td>\n\
		<td class=\"example\">CoPoseFcurveOp		</td>\n\
		<td>\n\
CoPoseFCurveOp type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCopyOpType\"> </a>siCopyOpType		</td>\n\
		<td class=\"example\">copyop		</td>\n\
		<td>\n\
Copy Operator type (geometry copy operator for instances)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCopyShapeOpType\"> </a>siCopyShapeOpType		</td>\n\
		<td class=\"example\">copyshape		</td>\n\
		<td>\n\
copyshape operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCopyUVWOpType\"> </a>siCopyUVWOpType		</td>\n\
		<td class=\"example\">Copyuvw		</td>\n\
		<td>\n\
CopyUVW Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCreatePolyOpType\"> </a>siCreatePolyOpType		</td>\n\
		<td class=\"example\">createpolygonop		</td>\n\
		<td>\n\
Create Polygon Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvCnsType\"> </a>siCrvCnsType		</td>\n\
		<td class=\"example\">curvecns		</td>\n\
		<td>\n\
Curve Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvCreationOpType\"> </a>siCrvCreationOpType		</td>\n\
		<td class=\"example\">CurveCreationOp		</td>\n\
		<td>\n\
Curve Creation Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvCtrlOpType\"> </a>siCrvCtrlOpType		</td>\n\
		<td class=\"example\">CrvControlOp		</td>\n\
		<td>\n\
CrvControlOp type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvCutOpType\"> </a>siCrvCutOpType		</td>\n\
		<td class=\"example\">CrvCutOp		</td>\n\
		<td>\n\
CrvCutOp type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvDeformOpType\"> </a>siCrvDeformOpType		</td>\n\
		<td class=\"example\">crvdeform		</td>\n\
		<td>\n\
Curve Deform Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvListAggregatePrimType\"> </a>siCrvListAggregatePrimType		</td>\n\
		<td class=\"example\">crvlistaggregate		</td>\n\
		<td>\n\
NURBS Curve List Aggregate Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvListPrimType\"> </a>siCrvListPrimType		</td>\n\
		<td class=\"example\">crvlist		</td>\n\
		<td>\n\
NURBS Curve List Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvListToMeshOpType\"> </a>siCrvListToMeshOpType		</td>\n\
		<td class=\"example\">CurveListToMesh		</td>\n\
		<td>\n\
Curve To Mesh Converter Operator type (curve list to polygon mesh converter)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvNetOpType\"> </a>siCrvNetOpType		</td>\n\
		<td class=\"example\">curvenet		</td>\n\
		<td>\n\
Curve Net Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvOpenCloseOpType\"> </a>siCrvOpenCloseOpType		</td>\n\
		<td class=\"example\">crvopenclose		</td>\n\
		<td>\n\
Open/Close Curve Operator type (open or close a curve)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvReparamOpType\"> </a>siCrvReparamOpType		</td>\n\
		<td class=\"example\">crvreparam		</td>\n\
		<td>\n\
Reparameterize Curve Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCrvShiftOpType\"> </a>siCrvShiftOpType		</td>\n\
		<td class=\"example\">crvshift		</td>\n\
		<td>\n\
Curve Shift Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCubePrimType\"> </a>siCubePrimType		</td>\n\
		<td class=\"example\">cube		</td>\n\
		<td>\n\
Cube Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomParamSet\"> </a>siCustomParamSet		</td>\n\
		<td class=\"example\">customparamset		</td>\n\
		<td>\n\
Custom Parameter Set type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCycleUVWType\"> </a>siCycleUVWType		</td>\n\
		<td class=\"example\">Cycleuvw		</td>\n\
		<td>\n\
Cycleuvw Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCylinderPrimType\"> </a>siCylinderPrimType		</td>\n\
		<td class=\"example\">cylinder		</td>\n\
		<td>\n\
Cylinder Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeformBySpineOp2Type\"> </a>siDeformBySpineOp2Type		</td>\n\
		<td class=\"example\">deformbyspineop2		</td>\n\
		<td>\n\
Deform By Spine Operator type (alternate envelope by spine operator)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeformBySpineOpType\"> </a>siDeformBySpineOpType		</td>\n\
		<td class=\"example\">deformbyspineop		</td>\n\
		<td>\n\
Deform by spine operator type (envelope by spine)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeformOpType\"> </a>siDeformOpType		</td>\n\
		<td class=\"example\">deformop		</td>\n\
		<td>\n\
Base Deform Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeleteCompOpType\"> </a>siDeleteCompOpType		</td>\n\
		<td class=\"example\">deletecompop		</td>\n\
		<td>\n\
Delete Component Operator type (delete geometry component)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDelPntCrvOpType\"> </a>siDelPntCrvOpType		</td>\n\
		<td class=\"example\">delpt_crv		</td>\n\
		<td>\n\
Delete Point From Curve Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDGlowType\"> </a>siDGlowType		</td>\n\
		<td class=\"example\">dglow		</td>\n\
		<td>\n\
DGlow type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDirCnsType\"> </a>siDirCnsType		</td>\n\
		<td class=\"example\">dircns		</td>\n\
		<td>\n\
Direction Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDiscPrimType\"> </a>siDiscPrimType		</td>\n\
		<td class=\"example\">disc		</td>\n\
		<td>\n\
Disc Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDisplayType\"> </a>siDisplayType		</td>\n\
		<td class=\"example\">display		</td>\n\
		<td>\n\
Display type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDissolveCompOpType\"> </a>siDissolveCompOpType		</td>\n\
		<td class=\"example\">dissolvecompop		</td>\n\
		<td>\n\
Dissolve Component Operator type (dissolve geometry component)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDistanceOpType\"> </a>siDistanceOpType		</td>\n\
		<td class=\"example\">DistanceOp		</td>\n\
		<td>\n\
Distance Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDistCnsType\"> </a>siDistCnsType		</td>\n\
		<td class=\"example\">distcns		</td>\n\
		<td>\n\
Distance Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDodecahedronPrimType\"> </a>siDodecahedronPrimType		</td>\n\
		<td class=\"example\">dodecahedron		</td>\n\
		<td>\n\
Dodecahedron Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDragCtrlPrimType\"> </a>siDragCtrlPrimType		</td>\n\
		<td class=\"example\">drag		</td>\n\
		<td>\n\
Drag Control Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEddyCtrlPrimType\"> </a>siEddyCtrlPrimType		</td>\n\
		<td class=\"example\">eddy		</td>\n\
		<td>\n\
Eddy Control Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEditPolyOpType\"> </a>siEditPolyOpType		</td>\n\
		<td class=\"example\">editpolygonop		</td>\n\
		<td>\n\
Edit Polygon Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEmissionPropType\"> </a>siEmissionPropType		</td>\n\
		<td class=\"example\">EmissionProp		</td>\n\
		<td>\n\
Emission Property type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvelopOpType\"> </a>siEnvelopOpType		</td>\n\
		<td class=\"example\">envelopop		</td>\n\
		<td>\n\
Envelope Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvSelClsOpType\"> </a>siEnvSelClsOpType		</td>\n\
		<td class=\"example\">EnvSelClsOp		</td>\n\
		<td>\n\
Envelope Selection Clusters Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvWgtType\"> </a>siEnvWgtType		</td>\n\
		<td class=\"example\">envweights		</td>\n\
		<td>\n\
Envelope Weights type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExplosionOpType\"> </a>siExplosionOpType		</td>\n\
		<td class=\"example\">ExplosionOp		</td>\n\
		<td>\n\
Explosion Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtendCrv2PntOpType\"> </a>siExtendCrv2PntOpType		</td>\n\
		<td class=\"example\">extendcrv2pt		</td>\n\
		<td>\n\
Extend Curve To Point Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtendToCrvOpType\"> </a>siExtendToCrvOpType		</td>\n\
		<td class=\"example\">extendtocrv		</td>\n\
		<td>\n\
Extend To Curve Operator type (extend the surface to the selected curve)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtractCrvOpType\"> </a>siExtractCrvOpType		</td>\n\
		<td class=\"example\">extractcrv		</td>\n\
		<td>\n\
Extract Curve Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtractCrvSegOpType\"> </a>siExtractCrvSegOpType		</td>\n\
		<td class=\"example\">extractcrvseg		</td>\n\
		<td>\n\
Extract Curve Segment Operator type (extract a curve from a segment of an existing curve)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtractPolyOpType\"> </a>siExtractPolyOpType		</td>\n\
		<td class=\"example\">extractpolygons		</td>\n\
		<td>\n\
Extract Polygons Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtractSubCrvOpType\"> </a>siExtractSubCrvOpType		</td>\n\
		<td class=\"example\">extractsubcrv		</td>\n\
		<td>\n\
Extract Subcurve Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtrude2ProfsOpType\"> </a>siExtrude2ProfsOpType		</td>\n\
		<td class=\"example\">extrude2profs		</td>\n\
		<td>\n\
Extrusion 2 Profiles Operator type (extrude 2 profiles)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtrudeCompAxisOpType\"> </a>siExtrudeCompAxisOpType		</td>\n\
		<td class=\"example\">extrudecompaxisop		</td>\n\
		<td>\n\
Extrude Component Axis Operator type (extrude geometry component)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtrudeComponentOpType\"> </a>siExtrudeComponentOpType		</td>\n\
		<td class=\"example\">extrudecomponentop		</td>\n\
		<td>\n\
Extrude Component Operator type (extrude geometry component)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExtrusionOpType\"> </a>siExtrusionOpType		</td>\n\
		<td class=\"example\">extrusion		</td>\n\
		<td>\n\
Extrusion Operator type (extrude a curve to create a surface)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFanType\"> </a>siFanType		</td>\n\
		<td class=\"example\">fan		</td>\n\
		<td>\n\
Fan Force Object type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilletCrvOpType\"> </a>siFilletCrvOpType		</td>\n\
		<td class=\"example\">filletcrv		</td>\n\
		<td>\n\
Fillet Curves Operator type (intersecting or not)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilletSrfOpType\"> </a>siFilletSrfOpType		</td>\n\
		<td class=\"example\">Fillet Surfaces		</td>\n\
		<td>\n\
Fillet Surfaces Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFillHoleOpType\"> </a>siFillHoleOpType		</td>\n\
		<td class=\"example\">fillHoleOp		</td>\n\
		<td>\n\
Fill Hole Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterEdgeOpType\"> </a>siFilterEdgeOpType		</td>\n\
		<td class=\"example\">filteredgeop		</td>\n\
		<td>\n\
Edge Filter Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterPolyOpType\"> </a>siFilterPolyOpType		</td>\n\
		<td class=\"example\">filterpolygonop		</td>\n\
		<td>\n\
Polygon Filter Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFitCrvOpType\"> </a>siFitCrvOpType		</td>\n\
		<td class=\"example\">fitcrv		</td>\n\
		<td>\n\
Fit Curve Operator type (fit a new curve on to the selected curve)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFitSrfOpType\"> </a>siFitSrfOpType		</td>\n\
		<td class=\"example\">fitsrf		</td>\n\
		<td>\n\
Fit Surface Operator type (fit a new surface on to the selected surface)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFlipUVWOpType\"> </a>siFlipUVWOpType		</td>\n\
		<td class=\"example\">Flipuvw		</td>\n\
		<td>\n\
Flip UVW Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFluidOpType\"> </a>siFluidOpType		</td>\n\
		<td class=\"example\">FluidOp		</td>\n\
		<td>\n\
Fluid Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFoldOpType\"> </a>siFoldOpType		</td>\n\
		<td class=\"example\">foldop		</td>\n\
		<td>\n\
Fold Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFourSidedOpType\"> </a>siFourSidedOpType		</td>\n\
		<td class=\"example\">foursided		</td>\n\
		<td>\n\
Four Sided Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFurOpType\"> </a>siFurOpType		</td>\n\
		<td class=\"example\">furop		</td>\n\
		<td>\n\
Fur Operator type (fur generator operator)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFurPrimType\"> </a>siFurPrimType		</td>\n\
		<td class=\"example\">fur		</td>\n\
		<td>\n\
Fur Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFurPropType\"> </a>siFurPropType		</td>\n\
		<td class=\"example\">furProp		</td>\n\
		<td>\n\
Fur Property type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFurSimOpType\"> </a>siFurSimOpType		</td>\n\
		<td class=\"example\">furSimop		</td>\n\
		<td>\n\
Fur Simulation Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeneratorOpType\"> </a>siGeneratorOpType		</td>\n\
		<td class=\"example\">generatorop		</td>\n\
		<td>\n\
Base Generator Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeomApproxType\"> </a>siGeomApproxType		</td>\n\
		<td class=\"example\">geomapprox		</td>\n\
		<td>\n\
Geometry Approximation type (tesselation)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeoShaderPrimType\"> </a>siGeoShaderPrimType		</td>\n\
		<td class=\"example\">GeoShader		</td>\n\
		<td>\n\
GeoShader Primitive Type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeoTxtOpType\"> </a>siGeoTxtOpType		</td>\n\
		<td class=\"example\">GeoTxtOp		</td>\n\
		<td>\n\
GeoTxtOp type (copy geometry xyz to uvw texture operator)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGlobalType\"> </a>siGlobalType		</td>\n\
		<td class=\"example\">global		</td>\n\
		<td>\n\
Global Transform type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGravityCtrlType\"> </a>siGravityCtrlType		</td>\n\
		<td class=\"example\">gravity		</td>\n\
		<td>\n\
Gravity Force Control Object type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGridPrimType\"> </a>siGridPrimType		</td>\n\
		<td class=\"example\">grid		</td>\n\
		<td>\n\
Grid Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGroup\"> </a>siGroup		</td>\n\
		<td class=\"example\">#Group		</td>\n\
		<td>\n\
Group type (obsolete)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGroupType\"> </a>siGroupType		</td>\n\
		<td class=\"example\">#Group		</td>\n\
		<td>\n\
Group type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHealOpType\"> </a>siHealOpType		</td>\n\
		<td class=\"example\">heal		</td>\n\
		<td>\n\
Heal Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHealUVWOpType\"> </a>siHealUVWOpType		</td>\n\
		<td class=\"example\">healuvw		</td>\n\
		<td>\n\
Heal UVW Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIcosahedronPrimType\"> </a>siIcosahedronPrimType		</td>\n\
		<td class=\"example\">icosahedron		</td>\n\
		<td>\n\
Icosahedron Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageClipType\"> </a>siImageClipType		</td>\n\
		<td class=\"example\">ImageClip		</td>\n\
		<td>\n\
Image Clip type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageCropOpType\"> </a>siImageCropOpType		</td>\n\
		<td class=\"example\">ImageCropOp		</td>\n\
		<td>\n\
Image Crop Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageFXOpType\"> </a>siImageFXOpType		</td>\n\
		<td class=\"example\">ImageFXOp		</td>\n\
		<td>\n\
Image FX Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageObjectType\"> </a>siImageObjectType		</td>\n\
		<td class=\"example\">ImageObject		</td>\n\
		<td>\n\
Image Object type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageSourceOpType\"> </a>siImageSourceOpType		</td>\n\
		<td class=\"example\">ImageSourceOp		</td>\n\
		<td>\n\
Image Source Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageSourceType\"> </a>siImageSourceType		</td>\n\
		<td class=\"example\">ImageSource		</td>\n\
		<td>\n\
Image Source type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInsertCrvKnotOpType\"> </a>siInsertCrvKnotOpType		</td>\n\
		<td class=\"example\">InsertCrvKnot		</td>\n\
		<td>\n\
Insert Curve Knot Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInsSrfKnotOpType\"> </a>siInsSrfKnotOpType		</td>\n\
		<td class=\"example\">inssrfknot		</td>\n\
		<td>\n\
Insert Surface Knot Operator type (inserts a knot in a nurbs surface)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siIntersectSrfOpType\"> </a>siIntersectSrfOpType		</td>\n\
		<td class=\"example\">intersectsrf		</td>\n\
		<td>\n\
Intersect Surfaces Operator type (extract a curve from the intersection of two surfaces)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInvCrvOpType\"> </a>siInvCrvOpType		</td>\n\
		<td class=\"example\">invcrv		</td>\n\
		<td>\n\
Inverse Curve Operator type (inverse curve direction)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInvertPolyOpType\"> </a>siInvertPolyOpType		</td>\n\
		<td class=\"example\">invertpolygonop		</td>\n\
		<td>\n\
Invert Polygon Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInvisiblePolygonsClusterName\"> </a>siInvisiblePolygonsClusterName		</td>\n\
		<td class=\"example\">InvisiblePolygons		</td>\n\
		<td>\n\
Name of the InvisiblePolygons cluster		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInvSrfOpType\"> </a>siInvSrfOpType		</td>\n\
		<td class=\"example\">invsrf		</td>\n\
		<td>\n\
Inverse Normals Operator type (inverse normals direction)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineChainPropType\"> </a>siKineChainPropType		</td>\n\
		<td class=\"example\">KineChainProp		</td>\n\
		<td>\n\
Kinematic Chain Properties type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineChainType\"> </a>siKineChainType		</td>\n\
		<td class=\"example\">chain		</td>\n\
		<td>\n\
Kinematic Chain type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineCnsType\"> </a>siKineCnsType		</td>\n\
		<td class=\"example\">kinecns		</td>\n\
		<td>\n\
Kinematic Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineInfoType\"> </a>siKineInfoType		</td>\n\
		<td class=\"example\">kine		</td>\n\
		<td>\n\
Kinematics Information type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKineJointType\"> </a>siKineJointType		</td>\n\
		<td class=\"example\">joint		</td>\n\
		<td>\n\
Kinematic Joint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLatticeOpType\"> </a>siLatticeOpType		</td>\n\
		<td class=\"example\">lattice		</td>\n\
		<td>\n\
Lattice Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLatticePrimType\"> </a>siLatticePrimType		</td>\n\
		<td class=\"example\">lattice		</td>\n\
		<td>\n\
Lattice Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLayersType\"> </a>siLayersType		</td>\n\
		<td class=\"example\">Layers		</td>\n\
		<td>\n\
Layers type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightLensFlareType\"> </a>siLightLensFlareType		</td>\n\
		<td class=\"example\">LightLensFlare		</td>\n\
		<td>\n\
Light Lens Flare type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightPrimType\"> </a>siLightPrimType		</td>\n\
		<td class=\"example\">light		</td>\n\
		<td>\n\
Light Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLineCnsType\"> </a>siLineCnsType		</td>\n\
		<td class=\"example\">LineCns		</td>\n\
		<td>\n\
Line Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLocalType\"> </a>siLocalType		</td>\n\
		<td class=\"example\">local		</td>\n\
		<td>\n\
Local Transform type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLoftOpType\"> </a>siLoftOpType		</td>\n\
		<td class=\"example\">loft		</td>\n\
		<td>\n\
Loft Generator Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMapCompOpType\"> </a>siMapCompOpType		</td>\n\
		<td class=\"example\">mapCompOp		</td>\n\
		<td>\n\
Component Map Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMarkHardEdgeVertexOpType\"> </a>siMarkHardEdgeVertexOpType		</td>\n\
		<td class=\"example\">MarkHardEdgeVertex		</td>\n\
		<td>\n\
Mark Hard Edge/Vertex Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialType\"> </a>siMaterialType		</td>\n\
		<td class=\"example\">material		</td>\n\
		<td>\n\
Material type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMergeCrvOpType\"> </a>siMergeCrvOpType		</td>\n\
		<td class=\"example\">mergecrv		</td>\n\
		<td>\n\
Merge Curves Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMergeMeshOpType\"> </a>siMergeMeshOpType		</td>\n\
		<td class=\"example\">mergemesh		</td>\n\
		<td>\n\
Merge Meshes Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMergeSrfOpType\"> </a>siMergeSrfOpType		</td>\n\
		<td class=\"example\">mergesrf		</td>\n\
		<td>\n\
Merge Surfaces Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshLocalSubdivisionOpType\"> </a>siMeshLocalSubdivisionOpType		</td>\n\
		<td class=\"example\">meshlocalsubdivisionop		</td>\n\
		<td>\n\
Mesh Local Subdivision Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshSubdivOpType\"> </a>siMeshSubdivOpType		</td>\n\
		<td class=\"example\">MeshSubdivide		</td>\n\
		<td>\n\
Mesh Subdivision Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshSubdivWithCenterOpType\"> </a>siMeshSubdivWithCenterOpType		</td>\n\
		<td class=\"example\">MeshSubdivideWithCenter		</td>\n\
		<td>\n\
Mesh Subdivide With Center Operator type (mesh subdivision with center)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerAnimClipType\"> </a>siMixerAnimClipType		</td>\n\
		<td class=\"example\">mixeranimclip		</td>\n\
		<td>\n\
Mixer Animation Clip type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerAnimTrackType\"> </a>siMixerAnimTrackType		</td>\n\
		<td class=\"example\">mixeranimtrack		</td>\n\
		<td>\n\
Mixer Animation Action Track type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerAudioClipType\"> </a>siMixerAudioClipType		</td>\n\
		<td class=\"example\">mixeraudioclip		</td>\n\
		<td>\n\
Mixer Audio Clip type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerAudioTrackType\"> </a>siMixerAudioTrackType		</td>\n\
		<td class=\"example\">mixeraudiotrack		</td>\n\
		<td>\n\
Mixer Audio Track type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerPropType\"> </a>siMixerPropType		</td>\n\
		<td class=\"example\">MixerProp		</td>\n\
		<td>\n\
Mixer Property type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerShapeClipType\"> </a>siMixerShapeClipType		</td>\n\
		<td class=\"example\">mixershapeclip		</td>\n\
		<td>\n\
Mixer Shape Clip type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerShapeTrackType\"> </a>siMixerShapeTrackType		</td>\n\
		<td class=\"example\">mixershapetrack		</td>\n\
		<td>\n\
Mixer Shape Track type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerType\"> </a>siMixerType		</td>\n\
		<td class=\"example\">mixer		</td>\n\
		<td>\n\
Mixer type (property)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelClipType\"> </a>siModelClipType		</td>\n\
		<td class=\"example\">model_clip		</td>\n\
		<td>\n\
3D Model Clip type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelNullPrimType\"> </a>siModelNullPrimType		</td>\n\
		<td class=\"example\">modelnull		</td>\n\
		<td>\n\
Model Null Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelType\"> </a>siModelType		</td>\n\
		<td class=\"example\">#model		</td>\n\
		<td>\n\
3D Model type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMotionBlurType\"> </a>siMotionBlurType		</td>\n\
		<td class=\"example\">motionblur		</td>\n\
		<td>\n\
Motion Blur type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMoveComponentOpType\"> </a>siMoveComponentOpType		</td>\n\
		<td class=\"example\">movecomponentop		</td>\n\
		<td>\n\
Move Component Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNPntCnsType\"> </a>siNPntCnsType		</td>\n\
		<td class=\"example\">Nptscns		</td>\n\
		<td>\n\
N Points Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNullPrimType\"> </a>siNullPrimType		</td>\n\
		<td class=\"example\">null		</td>\n\
		<td>\n\
Null Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsToMeshOpType\"> </a>siNurbsToMeshOpType		</td>\n\
		<td class=\"example\">nurbstomesh		</td>\n\
		<td>\n\
Nurbs To Mesh Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjClsCnsType\"> </a>siObjClsCnsType		</td>\n\
		<td class=\"example\">objclscns		</td>\n\
		<td>\n\
Object To Cluster Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObstaclePropType\"> </a>siObstaclePropType		</td>\n\
		<td class=\"example\">ObstacleProp		</td>\n\
		<td>\n\
Obstacle Property type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOctahedronPrimType\"> </a>siOctahedronPrimType		</td>\n\
		<td class=\"example\">octahedron		</td>\n\
		<td>\n\
Octahedron Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOffsetClsOpType\"> </a>siOffsetClsOpType		</td>\n\
		<td class=\"example\">offsetclusterop		</td>\n\
		<td>\n\
Offset Cluster Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOffsetCrvOpType\"> </a>siOffsetCrvOpType		</td>\n\
		<td class=\"example\">offsetcrv		</td>\n\
		<td>\n\
Offset Curve Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOffsetSrfOpType\"> </a>siOffsetSrfOpType		</td>\n\
		<td class=\"example\">offsetsrf		</td>\n\
		<td>\n\
Offset Surface Operator type (offset a surface to create a new surface)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOpenCloseSrfOpType\"> </a>siOpenCloseSrfOpType		</td>\n\
		<td class=\"example\">openclosesrf		</td>\n\
		<td>\n\
Open/Close Surface Operator type (open or close a surface)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOriCnsType\"> </a>siOriCnsType		</td>\n\
		<td class=\"example\">oricns		</td>\n\
		<td>\n\
Orientation Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOverrideType\"> </a>siOverrideType		</td>\n\
		<td class=\"example\">#Override		</td>\n\
		<td>\n\
Override type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParDecayType\"> </a>siParDecayType		</td>\n\
		<td class=\"example\">ParDecay		</td>\n\
		<td>\n\
Particle decay type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParObstExtSparksType\"> </a>siParObstExtSparksType		</td>\n\
		<td class=\"example\">ParObstExtSparks		</td>\n\
		<td>\n\
ParObstExtSparks type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleEventType\"> </a>siParticleEventType		</td>\n\
		<td class=\"example\">ParticleEvent		</td>\n\
		<td>\n\
Particle Event type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticlesOpType\"> </a>siParticlesOpType		</td>\n\
		<td class=\"example\">ParticlesOp		</td>\n\
		<td>\n\
Particles Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPathCnsType\"> </a>siPathCnsType		</td>\n\
		<td class=\"example\">pathcns		</td>\n\
		<td>\n\
Path Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPinJointCnsType\"> </a>siPinJointCnsType		</td>\n\
		<td class=\"example\">PinJointCns		</td>\n\
		<td>\n\
Pin Joint Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPlaneCnsType\"> </a>siPlaneCnsType		</td>\n\
		<td class=\"example\">PlaneCns		</td>\n\
		<td>\n\
Plane Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointCloudPrimType\"> </a>siPointCloudPrimType		</td>\n\
		<td class=\"example\">crvlist		</td>\n\
		<td>\n\
Point CloudPrimitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolyMeshPNetOpType\"> </a>siPolyMeshPNetOpType		</td>\n\
		<td class=\"example\">PolyMeshPNetOp		</td>\n\
		<td>\n\
PolyMeshPNetOp type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolyMeshType\"> </a>siPolyMeshType		</td>\n\
		<td class=\"example\">polymsh		</td>\n\
		<td>\n\
Polygon Mesh type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPosCnsType\"> </a>siPosCnsType		</td>\n\
		<td class=\"example\">poscns		</td>\n\
		<td>\n\
Position Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPoseCnsType\"> </a>siPoseCnsType		</td>\n\
		<td class=\"example\">posecns		</td>\n\
		<td>\n\
Pose Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProjectCrvOpType\"> </a>siProjectCrvOpType		</td>\n\
		<td class=\"example\">projectcrv		</td>\n\
		<td>\n\
Project Curve Operator type (project a curve on to a surface)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProportionalOpType\"> </a>siProportionalOpType		</td>\n\
		<td class=\"example\">proportional		</td>\n\
		<td>\n\
Proportional Modeling Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropVolumeOpType\"> </a>siPropVolumeOpType		</td>\n\
		<td class=\"example\">propvolumeop		</td>\n\
		<td>\n\
Proportional Volume Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPushOpType\"> </a>siPushOpType		</td>\n\
		<td class=\"example\">pushop		</td>\n\
		<td>\n\
Push Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siQStretchOpType\"> </a>siQStretchOpType		</td>\n\
		<td class=\"example\">qstretch		</td>\n\
		<td>\n\
QStretch Operator type (quick stretch)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRandomizeOpType\"> </a>siRandomizeOpType		</td>\n\
		<td class=\"example\">randomizeop		</td>\n\
		<td>\n\
Randomize Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRefPlaneType\"> </a>siRefPlaneType		</td>\n\
		<td class=\"example\">refplane		</td>\n\
		<td>\n\
Reference Plane type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRelaxUVWOpType\"> </a>siRelaxUVWOpType		</td>\n\
		<td class=\"example\">Relaxuvw		</td>\n\
		<td>\n\
Relax UVW Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRemoveCrvKnotOpType\"> </a>siRemoveCrvKnotOpType		</td>\n\
		<td class=\"example\">RemoveCrvKnot		</td>\n\
		<td>\n\
Remove Curve Knot Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRemSrfKnotOpType\"> </a>siRemSrfKnotOpType		</td>\n\
		<td class=\"example\">remsrfknot		</td>\n\
		<td>\n\
Remove Surface Knot Operator type (removes a knot from a nurbs surface)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderMapType\"> </a>siRenderMapType		</td>\n\
		<td class=\"example\">rendermap		</td>\n\
		<td>\n\
Render Map type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRevolutionOpType\"> </a>siRevolutionOpType		</td>\n\
		<td class=\"example\">revolution		</td>\n\
		<td>\n\
Revolution Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRotoscopeType\"> </a>siRotoscopeType		</td>\n\
		<td class=\"example\">rotoscope		</td>\n\
		<td>\n\
Camera Rotoscopy type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSceneAmbienceType\"> </a>siSceneAmbienceType		</td>\n\
		<td class=\"example\">ambience		</td>\n\
		<td>\n\
Scene Ambience type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSceneColorsType\"> </a>siSceneColorsType		</td>\n\
		<td class=\"example\">Scenecolors		</td>\n\
		<td>\n\
Scene Display Colors type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSclCnsType\"> </a>siSclCnsType		</td>\n\
		<td class=\"example\">sclcns		</td>\n\
		<td>\n\
Scaling Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSCMFixerOpType\"> </a>siSCMFixerOpType		</td>\n\
		<td class=\"example\">scmfixerop		</td>\n\
		<td>\n\
SCM Fixer Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSCMTopologyOpType\"> </a>siSCMTopologyOpType		</td>\n\
		<td class=\"example\">scmtopologyop		</td>\n\
		<td>\n\
SCM Topology Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siScriptedOpType\"> </a>siScriptedOpType		</td>\n\
		<td class=\"example\">scriptedop		</td>\n\
		<td>\n\
Scripted Operator type (scripted operator host)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSetEdgeCreaseValueOpType\"> </a>siSetEdgeCreaseValueOpType		</td>\n\
		<td class=\"example\">SetEdgeCreaseValue		</td>\n\
		<td>\n\
Set Edge Crease Value Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeActionCompoundClipType\"> </a>siShapeActionCompoundClipType		</td>\n\
		<td class=\"example\">ShapeActionCompoundClip		</td>\n\
		<td>\n\
Shape Action Compound Clip type (base compound clip)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeActionType\"> </a>siShapeActionType		</td>\n\
		<td class=\"example\">ShapeAction		</td>\n\
		<td>\n\
Shape Action type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShearOpType\"> </a>siShearOpType		</td>\n\
		<td class=\"example\">shearop		</td>\n\
		<td>\n\
Shear Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShrinkWrapOpType\"> </a>siShrinkWrapOpType		</td>\n\
		<td class=\"example\">shrinkwrap		</td>\n\
		<td>\n\
Shrink Wrap Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSkelCtrlOpPropType\"> </a>siSkelCtrlOpPropType		</td>\n\
		<td class=\"example\">SkeletonCtrlOpProp		</td>\n\
		<td>\n\
Skeleton Controller Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSmoothEnvelopeWgtOpType\"> </a>siSmoothEnvelopeWgtOpType		</td>\n\
		<td class=\"example\">smoothenvelopeweight		</td>\n\
		<td>\n\
Smooth Envelope Weight Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapBoundOpType\"> </a>siSnapBoundOpType		</td>\n\
		<td class=\"example\">snapbound		</td>\n\
		<td>\n\
Snap Boundary Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnapCrvOpType\"> </a>siSnapCrvOpType		</td>\n\
		<td class=\"example\">SnapCrvsOp		</td>\n\
		<td>\n\
Snap To Curves Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSnipSrfOpType\"> </a>siSnipSrfOpType		</td>\n\
		<td class=\"example\">snipsrf		</td>\n\
		<td>\n\
Snip Surface Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSoftBodyOpType\"> </a>siSoftBodyOpType		</td>\n\
		<td class=\"example\">SoftBodyOp		</td>\n\
		<td>\n\
SoftBody Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpherePrimType\"> </a>siSpherePrimType		</td>\n\
		<td class=\"example\">sphere		</td>\n\
		<td>\n\
Sphere Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpineDefOp2Type\"> </a>siSpineDefOp2Type		</td>\n\
		<td class=\"example\">spinedefop2		</td>\n\
		<td>\n\
Deform by Spine Operator 2 type (alternate operator)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpineDefOpType\"> </a>siSpineDefOpType		</td>\n\
		<td class=\"example\">spinedefop		</td>\n\
		<td>\n\
Deform by Spine Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpineWgtMapOp3Type\"> </a>siSpineWgtMapOp3Type		</td>\n\
		<td class=\"example\">spinewgtmapop		</td>\n\
		<td>\n\
Spine Weight Map Operator 3 type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpineWgtMapOp4Type\"> </a>siSpineWgtMapOp4Type		</td>\n\
		<td class=\"example\">spinewgtmapop		</td>\n\
		<td>\n\
Deform by Spine Weight Map Operator 4 type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpiralPrimType\"> </a>siSpiralPrimType		</td>\n\
		<td class=\"example\">spiral		</td>\n\
		<td>\n\
Implicit Spiral Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSplitEdgeOpType\"> </a>siSplitEdgeOpType		</td>\n\
		<td class=\"example\">splitedgeop		</td>\n\
		<td>\n\
Split Edge Operator type (split some edges)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSplitPolyOpType\"> </a>siSplitPolyOpType		</td>\n\
		<td class=\"example\">splitpolygonop		</td>\n\
		<td>\n\
Split Polygon Operator type (split some polygons)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpotInterestPrimType\"> </a>siSpotInterestPrimType		</td>\n\
		<td class=\"example\">SpotInterest		</td>\n\
		<td>\n\
Spot Interest Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSpotRootPrimType\"> </a>siSpotRootPrimType		</td>\n\
		<td class=\"example\">SpotRoot		</td>\n\
		<td>\n\
Spot Root Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSquarePrimType\"> </a>siSquarePrimType		</td>\n\
		<td class=\"example\">square		</td>\n\
		<td>\n\
Implicit Square Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfCnsType\"> </a>siSrfCnsType		</td>\n\
		<td class=\"example\">surfcns		</td>\n\
		<td>\n\
Surface Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfCrvInverseOpType\"> </a>siSrfCrvInverseOpType		</td>\n\
		<td class=\"example\">SurfaceCurveInverseOp		</td>\n\
		<td>\n\
Surface Curve Inverse Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfCrvShiftOpType\"> </a>siSrfCrvShiftOpType		</td>\n\
		<td class=\"example\">srfcrvshift		</td>\n\
		<td>\n\
Surface Curve Shift Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfCtrlOpType\"> </a>siSrfCtrlOpType		</td>\n\
		<td class=\"example\">SrfControlOp		</td>\n\
		<td>\n\
SrfControlOp type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfDefOpType\"> </a>siSrfDefOpType		</td>\n\
		<td class=\"example\">srfdefop		</td>\n\
		<td>\n\
Surface Deform Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfMeshPrimType\"> </a>siSrfMeshPrimType		</td>\n\
		<td class=\"example\">surfmsh		</td>\n\
		<td>\n\
NURBS Surface Mesh Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfPQOpType\"> </a>siSrfPQOpType		</td>\n\
		<td class=\"example\">SurfacePQ		</td>\n\
		<td>\n\
SurfacePQ Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfReparamOpType\"> </a>siSrfReparamOpType		</td>\n\
		<td class=\"example\">srfreparam		</td>\n\
		<td>\n\
Reparameterize Surface Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfShiftOpType\"> </a>siSrfShiftOpType		</td>\n\
		<td class=\"example\">srfshift		</td>\n\
		<td>\n\
 Surface Shift Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfSubdivisionOpType\"> </a>siSrfSubdivisionOpType		</td>\n\
		<td class=\"example\">srfsubdivisionop		</td>\n\
		<td>\n\
Surface Subdivision Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSrfUVCtrlOpType\"> </a>siSrfUVCtrlOpType		</td>\n\
		<td class=\"example\">SurfaceUVControl		</td>\n\
		<td>\n\
Surface UV Control Operator type (Nurbs UV control)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStandInPrimType\"> </a>siStandInPrimType		</td>\n\
		<td class=\"example\">standin		</td>\n\
		<td>\n\
Stand-in Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStartOffsetOpType\"> </a>siStartOffsetOpType		</td>\n\
		<td class=\"example\">startoffset		</td>\n\
		<td>\n\
Start Offset Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStitchCrvToCrvOpType\"> </a>siStitchCrvToCrvOpType		</td>\n\
		<td class=\"example\">stitchcrvtocrv		</td>\n\
		<td>\n\
Stitch Curve To Curve Operator type (stitch curves together)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStitchCrvToSrfOpType\"> </a>siStitchCrvToSrfOpType		</td>\n\
		<td class=\"example\">stitchcrvtosrf		</td>\n\
		<td>\n\
Stitch Curve To Surface Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStitchSrfOpType\"> </a>siStitchSrfOpType		</td>\n\
		<td class=\"example\">stitchsrf		</td>\n\
		<td>\n\
Stitch Surfaces Operator type (stitch surfaces and curves together)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStrokeOpType\"> </a>siStrokeOpType		</td>\n\
		<td class=\"example\">stroke		</td>\n\
		<td>\n\
Gap Stroke Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubCompType\"> </a>siSubCompType		</td>\n\
		<td class=\"example\">subcomp		</td>\n\
		<td>\n\
Subcomponents type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubdivEdgeOpType\"> </a>siSubdivEdgeOpType		</td>\n\
		<td class=\"example\">subdivideedgeop		</td>\n\
		<td>\n\
Subdivide Edge Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubdivPolyOpType\"> </a>siSubdivPolyOpType		</td>\n\
		<td class=\"example\">subdividepolygonop		</td>\n\
		<td>\n\
Subdivide Polygon Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSwapSrfUVOpType\"> </a>siSwapSrfUVOpType		</td>\n\
		<td class=\"example\">swapsrfuv		</td>\n\
		<td>\n\
Swap Surface UVs Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSymmetrizePolygon\"> </a>siSymmetrizePolygon		</td>\n\
		<td class=\"example\">symmetrizepolygonop		</td>\n\
		<td>\n\
Symmetrize Polygon Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSymmetryCnsType\"> </a>siSymmetryCnsType		</td>\n\
		<td class=\"example\">symmetrycns		</td>\n\
		<td>\n\
Symmetry Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSymmetryMapOpType\"> </a>siSymmetryMapOpType		</td>\n\
		<td class=\"example\">symmetrymapop		</td>\n\
		<td>\n\
Symmetry Map Genrator Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSymmetryMapType\"> </a>siSymmetryMapType		</td>\n\
		<td class=\"example\">map		</td>\n\
		<td>\n\
Symmetry Map type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSynopticViewType\"> </a>siSynopticViewType		</td>\n\
		<td class=\"example\">synoptic		</td>\n\
		<td>\n\
Synoptic View type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTaperOpType\"> </a>siTaperOpType		</td>\n\
		<td class=\"example\">taperop		</td>\n\
		<td>\n\
Taper Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTetrahedronPrimType\"> </a>siTetrahedronPrimType		</td>\n\
		<td class=\"example\">tetrahedron		</td>\n\
		<td>\n\
Tetrahedron Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextToCrvListOpType\"> </a>siTextToCrvListOpType		</td>\n\
		<td class=\"example\">TextToCurveList		</td>\n\
		<td>\n\
Text To CurveList Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTorusPrimType\"> </a>siTorusPrimType		</td>\n\
		<td class=\"example\">torus		</td>\n\
		<td>\n\
Torus Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrajCnsType\"> </a>siTrajCnsType		</td>\n\
		<td class=\"example\">trajcns		</td>\n\
		<td>\n\
Trajectory Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransformSetupType\"> </a>siTransformSetupType		</td>\n\
		<td class=\"example\">transformsetup		</td>\n\
		<td>\n\
Transform Setup type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTurbulenceCtrlPrimType\"> </a>siTurbulenceCtrlPrimType		</td>\n\
		<td class=\"example\">turbulence		</td>\n\
		<td>\n\
Turbulence Control Primitive type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTwistOpType\"> </a>siTwistOpType		</td>\n\
		<td class=\"example\">twistop		</td>\n\
		<td>\n\
Twist Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTxtMapType\"> </a>siTxtMapType		</td>\n\
		<td class=\"example\">TextureProp		</td>\n\
		<td>\n\
Texture Map type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTxtOpType\"> </a>siTxtOpType		</td>\n\
		<td class=\"example\">TextureOp		</td>\n\
		<td>\n\
Texture Projection Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTxtSupportType\"> </a>siTxtSupportType		</td>\n\
		<td class=\"example\">Texture Support type		</td>\n\
		<td>\n\
Texture Support type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUpVctCnsType\"> </a>siUpVctCnsType		</td>\n\
		<td class=\"example\">upvctcns		</td>\n\
		<td>\n\
Up Vector Constraint type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUserMotionType\"> </a>siUserMotionType		</td>\n\
		<td class=\"example\">motion		</td>\n\
		<td>\n\
User Motion Property type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUserNormalType\"> </a>siUserNormalType		</td>\n\
		<td class=\"example\">normal		</td>\n\
		<td>\n\
User Normal Property type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUVProjDefType\"> </a>siUVProjDefType		</td>\n\
		<td class=\"example\">uvprojdef		</td>\n\
		<td>\n\
UV Projection Definition type (definition of how to perform a texture projection)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVertexcolorType\"> </a>siVertexcolorType		</td>\n\
		<td class=\"example\">vertexcolor		</td>\n\
		<td>\n\
Vertex Color type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVisemeActionType\"> </a>siVisemeActionType		</td>\n\
		<td class=\"example\">VisemeAction		</td>\n\
		<td>\n\
Viseme Action type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVisibilityType\"> </a>siVisibilityType		</td>\n\
		<td class=\"example\">visibility		</td>\n\
		<td>\n\
Visibility type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVolumeDeformType\"> </a>siVolumeDeformType		</td>\n\
		<td class=\"example\">volume_deform		</td>\n\
		<td>\n\
Volume Deform type (implicit sphere volume)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVolumicLightSceneType\"> </a>siVolumicLightSceneType		</td>\n\
		<td class=\"example\">VolumicLightScene		</td>\n\
		<td>\n\
Volumic Light Scene Local Property Set type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVolumicLightType\"> </a>siVolumicLightType		</td>\n\
		<td class=\"example\">VolumicLight		</td>\n\
		<td>\n\
Volumic Light Effect type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVortexCtrlType\"> </a>siVortexCtrlType		</td>\n\
		<td class=\"example\">vortex		</td>\n\
		<td>\n\
Vortex Control Object type (magnetic force)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVtxColPainterOpType\"> </a>siVtxColPainterOpType		</td>\n\
		<td class=\"example\">vertexcolorpainter		</td>\n\
		<td>\n\
Vertex Color Painter Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVtxColPropOpType\"> </a>siVtxColPropOpType		</td>\n\
		<td class=\"example\">vertexcolorpropop		</td>\n\
		<td>\n\
Vertex Color Property Generator Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWaveCtrlType\"> </a>siWaveCtrlType		</td>\n\
		<td class=\"example\">wave		</td>\n\
		<td>\n\
Wave Control Object type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWaveOpType\"> </a>siWaveOpType		</td>\n\
		<td class=\"example\">wave		</td>\n\
		<td>\n\
Wave Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeldEdgesOpType\"> </a>siWeldEdgesOpType		</td>\n\
		<td class=\"example\">weldedgesop		</td>\n\
		<td>\n\
Weld Edges Operator type (weld pair of edges together)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWeldPntOpType\"> </a>siWeldPntOpType		</td>\n\
		<td class=\"example\">weldpointsop		</td>\n\
		<td>\n\
Weld Points Operator type (weld two points together)		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtMapCnxOpType\"> </a>siWgtMapCnxOpType		</td>\n\
		<td class=\"example\">WMCnxOp		</td>\n\
		<td>\n\
Weight Map Connection Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtMapOpType\"> </a>siWgtMapOpType		</td>\n\
		<td class=\"example\">weightmapop		</td>\n\
		<td>\n\
Weight Map Generator Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtMapsMixOpType\"> </a>siWgtMapsMixOpType		</td>\n\
		<td class=\"example\">WghtMapsMixOp		</td>\n\
		<td>\n\
Weight Maps Mixer Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtMapType\"> </a>siWgtMapType		</td>\n\
		<td class=\"example\">wtmap		</td>\n\
		<td>\n\
Weight Map type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWgtPainterOpType\"> </a>siWgtPainterOpType		</td>\n\
		<td class=\"example\">weightpainter		</td>\n\
		<td>\n\
Weight Painter Operator type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWindType\"> </a>siWindType		</td>\n\
		<td class=\"example\">wind		</td>\n\
		<td>\n\
Wind Force Object type		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siWtStrokeOpType\"> </a>siWtStrokeOpType		</td>\n\
		<td class=\"example\">wtstroke		</td>\n\
		<td>\n\
Weight Stroke Operator type		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_cmds/TransferAllPropertiesAcrossGenOp.html\">TransferAllPropertiesAcrossGenOp</a> <a href=\"#!/url=./si_om/X3DObject.FindChild.html\">X3DObject.FindChild</a> <a href=\"#!/url=./si_om/X3DObject.FindChildren.html\">X3DObject.FindChildren</a> <a href=\"#!/url=./si_om/X3DObjectCollection.Filter.html\">X3DObjectCollection.Filter</a> <a href=\"#!/url=./si_om/X3DObjectCollection.Find.html\">X3DObjectCollection.Find</a> <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html#FindChild\">X3DObject::FindChild</a> <a href=\"#!/url=./si_cpp/classXSI_1_1X3DObject.html#FindChildren\">X3DObject::FindChildren</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";