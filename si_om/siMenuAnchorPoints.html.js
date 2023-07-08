var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siMenuAnchorPoints</title>\n\
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
            <h1>siMenuAnchorPoints</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siMenuAnchorPoints</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>Identifies the location of a custom menu.</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siMenuAnchorPoints.siMenuUndefinedID                                        // 0\n\
siMenuAnchorPoints.siMenuTbGetPrimitiveCurveID                              // 1\n\
siMenuAnchorPoints.siMenuTbGetPrimitivePolygonMeshBasicID                   // 2\n\
siMenuAnchorPoints.siMenuTbGetPrimitivePolygonMeshHedronID                  // 3\n\
siMenuAnchorPoints.siMenuTbGetPrimitivePolygonMeshID                        // 4\n\
siMenuAnchorPoints.siMenuTbGetPrimitiveSurfaceID                            // 5\n\
siMenuAnchorPoints.siMenuTbGetPrimitiveImplicitCurveID                      // 6\n\
siMenuAnchorPoints.siMenuTbGetPrimitiveImplicitID                           // 7\n\
siMenuAnchorPoints.siMenuTbGetPrimitiveControlObjectID                      // 8\n\
siMenuAnchorPoints.siMenuTbGetPrimitiveModelID                              // 9\n\
siMenuAnchorPoints.siMenuTbGetPrimitiveID                                   // 10\n\
siMenuAnchorPoints.siMenuTbGetCameraID                                      // 11\n\
siMenuAnchorPoints.siMenuTbGetLightID                                       // 12\n\
siMenuAnchorPoints.siMenuTbGetMaterialID                                    // 13\n\
siMenuAnchorPoints.siMenuTbGetMaterialBasicID                               // 14\n\
siMenuAnchorPoints.siMenuTbGetMaterialSimpleID                              // 15\n\
siMenuAnchorPoints.siMenuTbGetMaterialRealTimeID                            // 16\n\
siMenuAnchorPoints.siMenuTbGetPropertyID                                    // 17\n\
siMenuAnchorPoints.siMenuTbGetPropertyTextureProjectionID                   // 18\n\
siMenuAnchorPoints.siMenuTbGetPropertyTextureMapID                          // 19\n\
siMenuAnchorPoints.siMenuTbGetPropertyTextureID                             // 20\n\
siMenuAnchorPoints.siMenuTbGetPropertyUserDataMapID                         // 21\n\
siMenuAnchorPoints.siMenuTbGetPropertyMapPaintID                            // 22\n\
siMenuAnchorPoints.siMenuTbGetPropertyPSetID                                // 23\n\
siMenuAnchorPoints.siMenuTbDeformSpatialID                                  // 24\n\
siMenuAnchorPoints.siMenuTbDeformID                                         // 25\n\
siMenuAnchorPoints.siMenuTbCreateSkeletonID                                 // 26\n\
siMenuAnchorPoints.siMenuTbCreateSkeletonDrawID                             // 27\n\
siMenuAnchorPoints.siMenuTbCreateSkeletonInspectID                          // 28\n\
siMenuAnchorPoints.siMenuTbModelCreateCurveID                               // 100\n\
siMenuAnchorPoints.siMenuTbModelCreateSurfaceMeshID                         // 101\n\
siMenuAnchorPoints.siMenuTbModelCreatePolygonMeshID                         // 102\n\
siMenuAnchorPoints.siMenuTbModelCreateModelID                               // 103\n\
siMenuAnchorPoints.siMenuTbModelCreateTextID                                // 104\n\
siMenuAnchorPoints.siMenuTbModelModifyComponentID                           // 105\n\
siMenuAnchorPoints.siMenuTbModelModifyCurveID                               // 106\n\
siMenuAnchorPoints.siMenuTbModelModifySurfaceMeshID                         // 107\n\
siMenuAnchorPoints.siMenuTbModelModifyPolygonMeshID                         // 108\n\
siMenuAnchorPoints.siMenuTbModelModifyModelID                               // 109\n\
siMenuAnchorPoints.siMenuTbAnimateCreateParameterID                         // 200\n\
siMenuAnchorPoints.siMenuTbAnimateCreateParameterCustomPSetID               // 201\n\
siMenuAnchorPoints.siMenuTbAnimateCreateParameterCustomParamID              // 202\n\
siMenuAnchorPoints.siMenuTbAnimateCreateParameterExpressionID               // 203\n\
siMenuAnchorPoints.siMenuTbAnimateCreateParameterProxyID                    // 204\n\
siMenuAnchorPoints.siMenuTbAnimateCreateCurveID                             // 205\n\
siMenuAnchorPoints.siMenuTbAnimateCreatePathID                              // 206\n\
siMenuAnchorPoints.siMenuTbAnimateCreateCharacterID                         // 207\n\
siMenuAnchorPoints.siMenuTbAnimateDeformShapeID                             // 208\n\
siMenuAnchorPoints.siMenuTbAnimateDeformShapeKeyID                          // 209\n\
siMenuAnchorPoints.siMenuTbAnimateDeformEnvelopeID                          // 210\n\
siMenuAnchorPoints.siMenuTbAnimateActionsStoreID                            // 211\n\
siMenuAnchorPoints.siMenuTbAnimateActionsApplyID                            // 212\n\
siMenuAnchorPoints.siMenuTbAnimateActionsTemplatesID                        // 213\n\
siMenuAnchorPoints.siMenuTbAnimateToolsPlotID                               // 214\n\
siMenuAnchorPoints.siMenuTbAnimateToolsDevicesID                            // 215\n\
siMenuAnchorPoints.siMenuTbAnimateToolsImportID                             // 216\n\
siMenuAnchorPoints.siMenuTbAnimateToolsExportID                             // 217\n\
siMenuAnchorPoints.siMenuTbAnimateToolsMotorID                              // 218\n\
siMenuAnchorPoints.siMenuTbRenderRegionID                                   // 300\n\
siMenuAnchorPoints.siMenuTbRenderPreviewID                                  // 301\n\
siMenuAnchorPoints.siMenuTbRenderRenderID                                   // 302\n\
siMenuAnchorPoints.siMenuTbRenderExportMIID                                 // 303\n\
siMenuAnchorPoints.siMenuTbRenderPassEditID                                 // 304\n\
siMenuAnchorPoints.siMenuTbRenderPassEditNewPassID                          // 305\n\
siMenuAnchorPoints.siMenuTbRenderPassPartitionID                            // 306\n\
siMenuAnchorPoints.siMenuTbRenderExportID                                   // 307\n\
siMenuAnchorPoints.siMenuTbICEParticlesCreateID                             // 320\n\
siMenuAnchorPoints.siMenuTbICEParticlesOnEmissionID                         // 321\n\
siMenuAnchorPoints.siMenuTbICEParticlesAfterEmissionID                      // 322\n\
siMenuAnchorPoints.siMenuTbICEParticlesForceID                              // 323\n\
siMenuAnchorPoints.siMenuTbICEParticlesCollisionID                          // 324\n\
siMenuAnchorPoints.siMenuTbICEParticlesSimulationID                         // 325\n\
siMenuAnchorPoints.siMenuTbICEParticlesModelLibraryID                       // 326\n\
siMenuAnchorPoints.siMenuTbICEDeformCreateID                                // 340\n\
siMenuAnchorPoints.siMenuTbICEDeformSimulateID                              // 341\n\
siMenuAnchorPoints.siMenuTbICEKinematicsEffectsID                           // 360\n\
siMenuAnchorPoints.siMenuTbICEKinematicsConstrainID                         // 361\n\
siMenuAnchorPoints.siMenuTbICECrowdFXActorsID                               // 380\n\
siMenuAnchorPoints.siMenuTbICECrowdFXSimulationID                           // 381\n\
siMenuAnchorPoints.siMenuTbICECrowdFXCrowdID                                // 382\n\
siMenuAnchorPoints.siMenuTbGetForceID                                       // 400\n\
siMenuAnchorPoints.siMenuTbCreateParticlesID                                // 401\n\
siMenuAnchorPoints.siMenuTbCreateParticlesFluidID                           // 402\n\
siMenuAnchorPoints.siMenuTbCreateParticlesExplosionID                       // 403\n\
siMenuAnchorPoints.siMenuTbCreateParticlesNewPTypeID                        // 404\n\
siMenuAnchorPoints.siMenuTbCreateRigidBodyID                                // 405\n\
siMenuAnchorPoints.siMenuTbCreateRigidBodyConstraintID                      // 406\n\
siMenuAnchorPoints.siMenuTbCreateClothID                                    // 407\n\
siMenuAnchorPoints.siMenuTbModifyParticlesID                                // 408\n\
siMenuAnchorPoints.siMenuTbModifyRigidBodyID                                // 409\n\
siMenuAnchorPoints.siMenuTbModifyEnvironmentID                              // 410\n\
siMenuAnchorPoints.siMenuTbCreateSoftBodyID                                 // 411\n\
siMenuAnchorPoints.siMenuTbICECreateID                                      // 412\n\
siMenuAnchorPoints.siMenuTbICEEditID                                        // 413\n\
siMenuAnchorPoints.siMenuMainFileSceneID                                    // 1000\n\
siMenuAnchorPoints.siMenuMainFileProjectID                                  // 1001\n\
siMenuAnchorPoints.siMenuMainFileExportID                                   // 1002\n\
siMenuAnchorPoints.siMenuMainFileImportID                                   // 1003\n\
siMenuAnchorPoints.siMenuMainWindowID                                       // 1004\n\
siMenuAnchorPoints.siMenuMainHelpID                                         // 1005\n\
siMenuAnchorPoints.siMenuMainApplicationID                                  // 1006\n\
siMenuAnchorPoints.siMenuMainApplicationPropertySetsID                      // 1007\n\
siMenuAnchorPoints.siMenuMainApplicationLayoutsID                           // 1008\n\
siMenuAnchorPoints.siMenuMainApplicationViewsID                             // 1009\n\
siMenuAnchorPoints.siMenuMainApplicationToolbarsID                          // 1010\n\
siMenuAnchorPoints.siMenuMainApplicationCommandsID                          // 1011\n\
siMenuAnchorPoints.siMenuMainApplicationKeyMappingsID                       // 1012\n\
siMenuAnchorPoints.siMenuMainApplicationPreferencesID                       // 1013\n\
siMenuAnchorPoints.siMenuMainTopLevelID                                     // 1014\n\
siMenuAnchorPoints.siMenuMainFileCrosswalkID                                // 1015\n\
siMenuAnchorPoints.siMenuMCPSelectTopID                                     // 2000\n\
siMenuAnchorPoints.siMenuMCPSelectBottomID                                  // 2001\n\
siMenuAnchorPoints.siMenuMCPSelectExploreBtnID                              // 2002\n\
siMenuAnchorPoints.siMenuMCPSelectSelBtnContextID                           // 2003\n\
siMenuAnchorPoints.siMenuMCPTransformTopID                                  // 2004\n\
siMenuAnchorPoints.siMenuMCPTransformBottomID                               // 2005\n\
siMenuAnchorPoints.siMenuMCPSnapID                                          // 2006\n\
siMenuAnchorPoints.siMenuMCPConstrainID                                     // 2007\n\
siMenuAnchorPoints.siMenuMCPEditID                                          // 2008\n\
siMenuAnchorPoints.siMenuMCPAnimationID                                     // 2009\n\
siMenuAnchorPoints.siMenuMCPPlaybackID                                      // 2010\n\
siMenuAnchorPoints.siMenuVMViewTypeID                                       // 3000\n\
siMenuAnchorPoints.siMenuVMCameraID                                         // 3001\n\
siMenuAnchorPoints.siMenuVMVisibilityID                                     // 3002\n\
siMenuAnchorPoints.siMenuVMDisplayID                                        // 3003\n\
siMenuAnchorPoints.siMenu3DViewClusterContextID                             // 3100\n\
siMenuAnchorPoints.siMenu3DViewComponentContextID                           // 3101\n\
siMenuAnchorPoints.siMenu3DViewComponentEditContextID                       // 3102\n\
siMenuAnchorPoints.siMenu3DViewGeneralContextID                             // 3103\n\
siMenuAnchorPoints.siMenu3DViewObjectContextID                              // 3104\n\
siMenuAnchorPoints.siMenu3DViewObjectEditContextID                          // 3105\n\
siMenuAnchorPoints.siMenu3DViewObjectGroupContextID                         // 3106\n\
siMenuAnchorPoints.siMenu3DViewObjectMeshContextID                          // 3107\n\
siMenuAnchorPoints.siMenu3DViewObjectSelectContextID                        // 3108\n\
siMenuAnchorPoints.siMenuSEGeneralContextID                                 // 3200\n\
siMenuAnchorPoints.siMenuSELayersContextID                                  // 3201\n\
siMenuAnchorPoints.siMenuSEPassesContextID                                  // 3202\n\
siMenuAnchorPoints.siMenuSEPartitionsContextID                              // 3203\n\
siMenuAnchorPoints.siMenuSEObjectContextID                                  // 3204\n\
siMenuAnchorPoints.siMenuSEGroupContextID                                   // 3205\n\
siMenuAnchorPoints.siMenuSEAnimContextID                                    // 3206\n\
siMenuAnchorPoints.siMenuSEClusterContextID                                 // 3207\n\
siMenuAnchorPoints.siMenuSEOperatorContextID                                // 3208\n\
siMenuAnchorPoints.siMenuSEConstraintContextID                              // 3209\n\
siMenuAnchorPoints.siMenuSEPreferenceContextID                              // 3210\n\
siMenuAnchorPoints.siMenuSEMaterialContextID                                // 3211\n\
siMenuAnchorPoints.siMenuSEModelContextID                                   // 3212\n\
siMenuAnchorPoints.siMenuPluginMgrPluginFileID                              // 3300\n\
siMenuAnchorPoints.siMenuPluginMgrTreeFileID                                // 3301\n\
siMenuAnchorPoints.siMenuPluginMgrContextPluginID                           // 3302\n\
siMenuAnchorPoints.siMenuPluginMgrContextPluginLocationID                   // 3303\n\
siMenuAnchorPoints.siMenuPluginMgrContextUserRootID                         // 3304\n\
siMenuAnchorPoints.siMenuPluginMgrContextFactoryRootID                      // 3305\n\
siMenuAnchorPoints.siMenuPluginMgrContextWorkgroupRootID                    // 3306\n\
siMenuAnchorPoints.siMenuPluginMgrContextAddonID                            // 3307\n\
siMenuAnchorPoints.siMenuPluginMgrContextCustomLocationID                   // 3308\n\
siMenuAnchorPoints.siMenuPluginMgrSPDLFileID                                // 3309\n\
siMenuAnchorPoints.siMenuPluginMgrContextSPDLID                             // 3310\n\
siMenuAnchorPoints.siMenuPluginMgrContextSPDLLocationID                     // 3311\n\
siMenuAnchorPoints.siMenuPluginMgrContextPluginItemID                       // 3312\n\
siMenuAnchorPoints.siMenuPluginMgrContextViewLocationID                     // 3313\n\
siMenuAnchorPoints.siMenuPluginMgrContextViewID                             // 3314\n\
siMenuAnchorPoints.siMenuPluginMgrContextToolbarLocationID                  // 3315\n\
siMenuAnchorPoints.siMenuPluginMgrContextToolbarID                          // 3316\n\
siMenuAnchorPoints.siMenuWorkgroupMgrFileID                                 // 3350\n\
siMenuAnchorPoints.siMenuWorkgroupMgrContextID                              // 3351\n\
siMenuAnchorPoints.siMenuScriptEditContextID                                // 3400\n\
siMenuAnchorPoints.siMenuScriptHistoryContextID                             // 3401\n\
siMenuAnchorPoints.siMenuFCurveEditorTopLevelID                             // 3500\n\
siMenuAnchorPoints.siMenuFCurveEditorFileID                                 // 3501\n\
siMenuAnchorPoints.siMenuFCurveEditorEditID                                 // 3502\n\
siMenuAnchorPoints.siMenuFCurveEditorViewID                                 // 3503\n\
siMenuAnchorPoints.siMenuFCurveEditorKeysID                                 // 3504\n\
siMenuAnchorPoints.siMenuFCurveEditorCurvesID                               // 3505\n\
siMenuAnchorPoints.siMenuFCurveEditorSelectID                               // 3506\n\
siMenuAnchorPoints.siMenuPropertyPageContextID                              // 3600\n\
siMenuAnchorPoints.siMenuPropertyPageAnimContextID                          // 3601\n\
siMenuAnchorPoints.siMenuShapeManagerEditID                                 // 3700\n\
siMenuAnchorPoints.siMenuShapeManagerCreateContextSingleSelectionID         // 3701\n\
siMenuAnchorPoints.siMenuShapeManagerCreateContextMultiSelectionID          // 3702\n\
siMenuAnchorPoints.siMenuShapeManagerAnimateContextSingleSelectionID        // 3703\n\
siMenuAnchorPoints.siMenuShapeManagerAnimateContextMultiSelectionID         // 3704\n\
siMenuAnchorPoints.siMenuShapeManagerAnimateID                              // 3705\n\
siMenuAnchorPoints.siMenuRenderRegionContextID                              // 3800\n\
siMenuAnchorPoints.siMenuMaterialPanelMaterialID                            // 3900\n\
siMenuAnchorPoints.siMenuTextureEditorToolsID                               // 4000\n\
siMenuAnchorPoints.siMenuRenderTreeToolsID                                  // 4100\n\
siMenuAnchorPoints.siMenuICEViewToolsID                                     // 4101\n\
siMenuAnchorPoints.siMenuRTNodeContextID                                    // 4102\n\
siMenuAnchorPoints.siMenuICENodeContextID                                   // 4103\n\
siMenuAnchorPoints.siMenuICENodePortContextID                               // 4104\n\
siMenuAnchorPoints.siMenuRenderTreeTopLevelID                               // 4105\n\
siMenuAnchorPoints.siMenuICEViewTopLevelID                                  // 4106\n\
siMenuAnchorPoints.siMenuTextEditorWidgetEditID                             // 4200\n\
siMenuAnchorPoints.siMenuTextEditorContextID                                // 4201\n\
siMenuAnchorPoints.siMenuTextureSpaceProjectionID                           // 4300\n\
siMenuAnchorPoints.siMenuSchematicViewID                                    // 4400\n\
siMenuAnchorPoints.siMenuSchematicViewContextID                             // 4401\n\
siMenuAnchorPoints.siMenuSchematicNodeContextID                             // 4402\n\
siMenuAnchorPoints.siMenuSchematicViewTopLevelID                            // 4403\n\
siMenuAnchorPoints.siMenuSceneLayerManagerLayersID                          // 4500\n\
siMenuAnchorPoints.siMenuSceneLayerManagerContextID                         // 4501\n\
siMenuAnchorPoints.siMenuMaterialManagerTopLevelID                          // 4600\n\
siMenuAnchorPoints.siMenuAnimMixerEditID                                    // 4700\n\
siMenuAnchorPoints.siMenuAnimMixerViewID                                    // 4701\n\
siMenuAnchorPoints.siMenuAnimMixerTrackID                                   // 4702\n\
siMenuAnchorPoints.siMenuAnimMixerClipID                                    // 4703\n\
siMenuAnchorPoints.siMenuAnimMixerMixID                                     // 4704\n\
siMenuAnchorPoints.siMenuAnimMixerEffectID                                  // 4705\n\
siMenuAnchorPoints.siMenuShaderCodeEditContextID                            // 4800\n\
siMenuAnchorPoints.siMenuWeightEditorFileID                                 // 10000\n\
siMenuAnchorPoints.siMenuWeightEditorEditID                                 // 10001\n\
siMenuAnchorPoints.siMenuWeightEditorViewID                                 // 10002\n\
siMenuAnchorPoints.siMenuScriptedOpEditContextID                            // 10100</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuUndefinedID\"> </a>siMenuUndefinedID		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Undefined menu id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitiveCurveID\"> </a>siMenuTbGetPrimitiveCurveID		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
Get > Primitive > Curve menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitivePolygonMeshBasicID\"> </a>siMenuTbGetPrimitivePolygonMeshBasicID		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
Basic section (Cone, Cube, ..., Torus) in the Get > Primitive > Polygon Mesh menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitivePolygonMeshHedronID\"> </a>siMenuTbGetPrimitivePolygonMeshHedronID		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
Hedron section (Dodecahedron, Icosahedron, ..., Rhombicosidodecahedron) in the Get > Primitive > Polygon Mesh menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitivePolygonMeshID\"> </a>siMenuTbGetPrimitivePolygonMeshID		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
Get > Primitive > Polygon Mesh menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitiveSurfaceID\"> </a>siMenuTbGetPrimitiveSurfaceID		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Get > Primitive > Surface menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitiveImplicitCurveID\"> </a>siMenuTbGetPrimitiveImplicitCurveID		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Curve section (Arc, Circle, ..., Square) in the Get > Primitive > Implicit menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitiveImplicitID\"> </a>siMenuTbGetPrimitiveImplicitID		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
Get > Primitive > Implicit menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitiveControlObjectID\"> </a>siMenuTbGetPrimitiveControlObjectID		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Get > Primitive > Control Object menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitiveModelID\"> </a>siMenuTbGetPrimitiveModelID		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
Get > Primitive > Model menu .		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPrimitiveID\"> </a>siMenuTbGetPrimitiveID		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
Get > Primitive menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetCameraID\"> </a>siMenuTbGetCameraID		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
Get > Primitive > Camera menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetLightID\"> </a>siMenuTbGetLightID		</td>\n\
		<td class=\"example\">12		</td>\n\
		<td>\n\
Get > Primitive > Light menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetMaterialID\"> </a>siMenuTbGetMaterialID		</td>\n\
		<td class=\"example\">13		</td>\n\
		<td>\n\
Get > Material menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetMaterialBasicID\"> </a>siMenuTbGetMaterialBasicID		</td>\n\
		<td class=\"example\">14		</td>\n\
		<td>\n\
Basic (Phong, Lambert, ..., Toon) section in the Get > Material menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetMaterialSimpleID\"> </a>siMenuTbGetMaterialSimpleID		</td>\n\
		<td class=\"example\">15		</td>\n\
		<td>\n\
Simple section in the Get > Material menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetMaterialRealTimeID\"> </a>siMenuTbGetMaterialRealTimeID		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
Realtime section (OGL Combined,...) in the Get > Material menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPropertyID\"> </a>siMenuTbGetPropertyID		</td>\n\
		<td class=\"example\">17		</td>\n\
		<td>\n\
Get > Property menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPropertyTextureProjectionID\"> </a>siMenuTbGetPropertyTextureProjectionID		</td>\n\
		<td class=\"example\">18		</td>\n\
		<td>\n\
Get > Property > Texture Projection menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPropertyTextureMapID\"> </a>siMenuTbGetPropertyTextureMapID		</td>\n\
		<td class=\"example\">19		</td>\n\
		<td>\n\
Get > Property > Texture Map menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPropertyTextureID\"> </a>siMenuTbGetPropertyTextureID		</td>\n\
		<td class=\"example\">20		</td>\n\
		<td>\n\
Texture section in the Get > Property menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPropertyUserDataMapID\"> </a>siMenuTbGetPropertyUserDataMapID		</td>\n\
		<td class=\"example\">21		</td>\n\
		<td>\n\
Get > Property > User Data Map menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPropertyMapPaintID\"> </a>siMenuTbGetPropertyMapPaintID		</td>\n\
		<td class=\"example\">22		</td>\n\
		<td>\n\
Get > Property > Map Paint Tools menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetPropertyPSetID\"> </a>siMenuTbGetPropertyPSetID		</td>\n\
		<td class=\"example\">23		</td>\n\
		<td>\n\
Property section (Ultimapper, TextProp, ..., Tangent) in the Get > Property menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbDeformSpatialID\"> </a>siMenuTbDeformSpatialID		</td>\n\
		<td class=\"example\">24		</td>\n\
		<td>\n\
Spatial section (Bend, Bulge, ..., Fold) in the Modify > Deform menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbDeformID\"> </a>siMenuTbDeformID		</td>\n\
		<td class=\"example\">25		</td>\n\
		<td>\n\
dify > Deform menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateSkeletonID\"> </a>siMenuTbCreateSkeletonID		</td>\n\
		<td class=\"example\">26		</td>\n\
		<td>\n\
Create > Skeleton menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateSkeletonDrawID\"> </a>siMenuTbCreateSkeletonDrawID		</td>\n\
		<td class=\"example\">27		</td>\n\
		<td>\n\
Draw section (2D Chain, 3D Chain) in the Create > Skeleton menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateSkeletonInspectID\"> </a>siMenuTbCreateSkeletonInspectID		</td>\n\
		<td class=\"example\">28		</td>\n\
		<td>\n\
Inspect section (Inspect Chain Properties) in the Create > Skeleton menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelCreateCurveID\"> </a>siMenuTbModelCreateCurveID		</td>\n\
		<td class=\"example\">100		</td>\n\
		<td>\n\
Create > Curve menu (Model toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelCreateSurfaceMeshID\"> </a>siMenuTbModelCreateSurfaceMeshID		</td>\n\
		<td class=\"example\">101		</td>\n\
		<td>\n\
Create > Surf. Mesh menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelCreatePolygonMeshID\"> </a>siMenuTbModelCreatePolygonMeshID		</td>\n\
		<td class=\"example\">102		</td>\n\
		<td>\n\
Create > Poly. Mesh menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelCreateModelID\"> </a>siMenuTbModelCreateModelID		</td>\n\
		<td class=\"example\">103		</td>\n\
		<td>\n\
Create > Model menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelCreateTextID\"> </a>siMenuTbModelCreateTextID		</td>\n\
		<td class=\"example\">104		</td>\n\
		<td>\n\
Create > Text menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelModifyComponentID\"> </a>siMenuTbModelModifyComponentID		</td>\n\
		<td class=\"example\">105		</td>\n\
		<td>\n\
Modify > Component menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelModifyCurveID\"> </a>siMenuTbModelModifyCurveID		</td>\n\
		<td class=\"example\">106		</td>\n\
		<td>\n\
Modify > Curve menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelModifySurfaceMeshID\"> </a>siMenuTbModelModifySurfaceMeshID		</td>\n\
		<td class=\"example\">107		</td>\n\
		<td>\n\
Modify > Surf. Mesh menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelModifyPolygonMeshID\"> </a>siMenuTbModelModifyPolygonMeshID		</td>\n\
		<td class=\"example\">108		</td>\n\
		<td>\n\
Modify > Poly. Mesh menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModelModifyModelID\"> </a>siMenuTbModelModifyModelID		</td>\n\
		<td class=\"example\">109		</td>\n\
		<td>\n\
Modify > Model menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateCreateParameterID\"> </a>siMenuTbAnimateCreateParameterID		</td>\n\
		<td class=\"example\">200		</td>\n\
		<td>\n\
Create > Parameter menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateCreateParameterCustomPSetID\"> </a>siMenuTbAnimateCreateParameterCustomPSetID		</td>\n\
		<td class=\"example\">201		</td>\n\
		<td>\n\
Custom Property Wizard section in the Create > Parameter menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateCreateParameterCustomParamID\"> </a>siMenuTbAnimateCreateParameterCustomParamID		</td>\n\
		<td class=\"example\">202		</td>\n\
		<td>\n\
Custom Parameter section in the Create > Parameter menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateCreateParameterExpressionID\"> </a>siMenuTbAnimateCreateParameterExpressionID		</td>\n\
		<td class=\"example\">203		</td>\n\
		<td>\n\
Expression section in the Create > Parameter menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateCreateParameterProxyID\"> </a>siMenuTbAnimateCreateParameterProxyID		</td>\n\
		<td class=\"example\">204		</td>\n\
		<td>\n\
Proxy Parameter section in the Create > Parameter menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateCreateCurveID\"> </a>siMenuTbAnimateCreateCurveID		</td>\n\
		<td class=\"example\">205		</td>\n\
		<td>\n\
Create > Curve menu (Animate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateCreatePathID\"> </a>siMenuTbAnimateCreatePathID		</td>\n\
		<td class=\"example\">206		</td>\n\
		<td>\n\
Create > Path menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateCreateCharacterID\"> </a>siMenuTbAnimateCreateCharacterID		</td>\n\
		<td class=\"example\">207		</td>\n\
		<td>\n\
Create > Character menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateDeformShapeID\"> </a>siMenuTbAnimateDeformShapeID		</td>\n\
		<td class=\"example\">208		</td>\n\
		<td>\n\
Deform > Shape menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateDeformShapeKeyID\"> </a>siMenuTbAnimateDeformShapeKeyID		</td>\n\
		<td class=\"example\">209		</td>\n\
		<td>\n\
Shape Key section in the Deform > Shape menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateDeformEnvelopeID\"> </a>siMenuTbAnimateDeformEnvelopeID		</td>\n\
		<td class=\"example\">210		</td>\n\
		<td>\n\
Deform > Envelope menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateActionsStoreID\"> </a>siMenuTbAnimateActionsStoreID		</td>\n\
		<td class=\"example\">211		</td>\n\
		<td>\n\
Actions > Store menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateActionsApplyID\"> </a>siMenuTbAnimateActionsApplyID		</td>\n\
		<td class=\"example\">212		</td>\n\
		<td>\n\
Actions > Apply menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateActionsTemplatesID\"> </a>siMenuTbAnimateActionsTemplatesID		</td>\n\
		<td class=\"example\">213		</td>\n\
		<td>\n\
Actions > Templates menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateToolsPlotID\"> </a>siMenuTbAnimateToolsPlotID		</td>\n\
		<td class=\"example\">214		</td>\n\
		<td>\n\
Tools > Plot menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateToolsDevicesID\"> </a>siMenuTbAnimateToolsDevicesID		</td>\n\
		<td class=\"example\">215		</td>\n\
		<td>\n\
Tools > Devices menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateToolsImportID\"> </a>siMenuTbAnimateToolsImportID		</td>\n\
		<td class=\"example\">216		</td>\n\
		<td>\n\
Import section in the Tools > Import/Export menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateToolsExportID\"> </a>siMenuTbAnimateToolsExportID		</td>\n\
		<td class=\"example\">217		</td>\n\
		<td>\n\
Export section in the Tools > Import/Export menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbAnimateToolsMotorID\"> </a>siMenuTbAnimateToolsMotorID		</td>\n\
		<td class=\"example\">218		</td>\n\
		<td>\n\
MOTOR section in the Tools > Import/Export menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbRenderRegionID\"> </a>siMenuTbRenderRegionID		</td>\n\
		<td class=\"example\">300		</td>\n\
		<td>\n\
Render > Region menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbRenderPreviewID\"> </a>siMenuTbRenderPreviewID		</td>\n\
		<td class=\"example\">301		</td>\n\
		<td>\n\
Obsolete - menu no longer exists.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbRenderRenderID\"> </a>siMenuTbRenderRenderID		</td>\n\
		<td class=\"example\">302		</td>\n\
		<td>\n\
Render > Render menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbRenderExportMIID\"> </a>siMenuTbRenderExportMIID		</td>\n\
		<td class=\"example\">303		</td>\n\
		<td>\n\
Obsolete - renamed siMenuTbRenderExportID.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbRenderPassEditID\"> </a>siMenuTbRenderPassEditID		</td>\n\
		<td class=\"example\">304		</td>\n\
		<td>\n\
Render > Pass > Edit menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbRenderPassEditNewPassID\"> </a>siMenuTbRenderPassEditNewPassID		</td>\n\
		<td class=\"example\">305		</td>\n\
		<td>\n\
Render > Pass > Edit > New Pass menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbRenderPassPartitionID\"> </a>siMenuTbRenderPassPartitionID		</td>\n\
		<td class=\"example\">306		</td>\n\
		<td>\n\
Render > Pass > Partition menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbRenderExportID\"> </a>siMenuTbRenderExportID		</td>\n\
		<td class=\"example\">307		</td>\n\
		<td>\n\
Render > Export menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEParticlesCreateID\"> </a>siMenuTbICEParticlesCreateID		</td>\n\
		<td class=\"example\">320		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEParticlesOnEmissionID\"> </a>siMenuTbICEParticlesOnEmissionID		</td>\n\
		<td class=\"example\">321		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEParticlesAfterEmissionID\"> </a>siMenuTbICEParticlesAfterEmissionID		</td>\n\
		<td class=\"example\">322		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEParticlesForceID\"> </a>siMenuTbICEParticlesForceID		</td>\n\
		<td class=\"example\">323		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEParticlesCollisionID\"> </a>siMenuTbICEParticlesCollisionID		</td>\n\
		<td class=\"example\">324		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEParticlesSimulationID\"> </a>siMenuTbICEParticlesSimulationID		</td>\n\
		<td class=\"example\">325		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEParticlesModelLibraryID\"> </a>siMenuTbICEParticlesModelLibraryID		</td>\n\
		<td class=\"example\">326		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEDeformCreateID\"> </a>siMenuTbICEDeformCreateID		</td>\n\
		<td class=\"example\">340		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEDeformSimulateID\"> </a>siMenuTbICEDeformSimulateID		</td>\n\
		<td class=\"example\">341		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEKinematicsEffectsID\"> </a>siMenuTbICEKinematicsEffectsID		</td>\n\
		<td class=\"example\">360		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEKinematicsSkeletonID\"> </a>siMenuTbICEKinematicsSkeletonID		</td>\n\
		<td class=\"example\">361		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEKinematicsConstrainID\"> </a>siMenuTbICEKinematicsConstrainID		</td>\n\
		<td class=\"example\">362		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICECrowdFXActorsID\"> </a>siMenuTbICECrowdFXActorsID		</td>\n\
		<td class=\"example\">380		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICECrowdFXSimulationID\"> </a>siMenuTbICECrowdFXSimulationID		</td>\n\
		<td class=\"example\">381		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICECrowdFXCrowdID\"> </a>siMenuTbICECrowdFXCrowdID		</td>\n\
		<td class=\"example\">382		</td>\n\
		<td>\n\
Menu the ICE module toolbar		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbGetForceID\"> </a>siMenuTbGetForceID		</td>\n\
		<td class=\"example\">400		</td>\n\
		<td>\n\
Get > Force menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateParticlesID\"> </a>siMenuTbCreateParticlesID		</td>\n\
		<td class=\"example\">401		</td>\n\
		<td>\n\
Create > Particles menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateParticlesFluidID\"> </a>siMenuTbCreateParticlesFluidID		</td>\n\
		<td class=\"example\">402		</td>\n\
		<td>\n\
Create > Particles > Fluid menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateParticlesExplosionID\"> </a>siMenuTbCreateParticlesExplosionID		</td>\n\
		<td class=\"example\">403		</td>\n\
		<td>\n\
Create > Particles > Explosion menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateParticlesNewPTypeID\"> </a>siMenuTbCreateParticlesNewPTypeID		</td>\n\
		<td class=\"example\">404		</td>\n\
		<td>\n\
Create > Particles > New Particle Type menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateRigidBodyID\"> </a>siMenuTbCreateRigidBodyID		</td>\n\
		<td class=\"example\">405		</td>\n\
		<td>\n\
Create > Rigid Body menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateRigidBodyConstraintID\"> </a>siMenuTbCreateRigidBodyConstraintID		</td>\n\
		<td class=\"example\">406		</td>\n\
		<td>\n\
Create > Rigid Body > Rigid Constraint menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateClothID\"> </a>siMenuTbCreateClothID		</td>\n\
		<td class=\"example\">407		</td>\n\
		<td>\n\
Create > Cloth menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModifyParticlesID\"> </a>siMenuTbModifyParticlesID		</td>\n\
		<td class=\"example\">408		</td>\n\
		<td>\n\
Modify > Particles menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModifyRigidBodyID\"> </a>siMenuTbModifyRigidBodyID		</td>\n\
		<td class=\"example\">409		</td>\n\
		<td>\n\
Modify > Rigid Body menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbModifyEnvironmentID\"> </a>siMenuTbModifyEnvironmentID		</td>\n\
		<td class=\"example\">410		</td>\n\
		<td>\n\
Modify > Environment menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbCreateSoftBodyID\"> </a>siMenuTbCreateSoftBodyID		</td>\n\
		<td class=\"example\">411		</td>\n\
		<td>\n\
Create > Soft Body menu (Simulate toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICECreateID\"> </a>siMenuTbICECreateID		</td>\n\
		<td class=\"example\">412		</td>\n\
		<td>\n\
ICE > Particles > Create menu (ICE toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTbICEEditID\"> </a>siMenuTbICEEditID		</td>\n\
		<td class=\"example\">413		</td>\n\
		<td>\n\
ICE > Particles > Simulation menu (ICE toolbar).		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainFileSceneID\"> </a>siMenuMainFileSceneID		</td>\n\
		<td class=\"example\">1000		</td>\n\
		<td>\n\
Scene section in the File menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainFileProjectID\"> </a>siMenuMainFileProjectID		</td>\n\
		<td class=\"example\">1001		</td>\n\
		<td>\n\
Project section in the File menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainFileExportID\"> </a>siMenuMainFileExportID		</td>\n\
		<td class=\"example\">1002		</td>\n\
		<td>\n\
File > Export menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainFileImportID\"> </a>siMenuMainFileImportID		</td>\n\
		<td class=\"example\">1003		</td>\n\
		<td>\n\
File > Import menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainWindowID\"> </a>siMenuMainWindowID		</td>\n\
		<td class=\"example\">1004		</td>\n\
		<td>\n\
Windows menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainHelpID\"> </a>siMenuMainHelpID		</td>\n\
		<td class=\"example\">1005		</td>\n\
		<td>\n\
Help menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainApplicationID\"> </a>siMenuMainApplicationID		</td>\n\
		<td class=\"example\">1006		</td>\n\
		<td>\n\
Do not use. The Application menu was removed in Softimage v5.0. Existing menus that use this anchor point are added to the View menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainApplicationPropertySetsID\"> </a>siMenuMainApplicationPropertySetsID		</td>\n\
		<td class=\"example\">1007		</td>\n\
		<td>\n\
Do not use. The Application menu was removed in Softimage v5.0. Existing menus that use this anchor point are added to the View menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainApplicationLayoutsID\"> </a>siMenuMainApplicationLayoutsID		</td>\n\
		<td class=\"example\">1008		</td>\n\
		<td>\n\
Do not use. The Application menu was removed in Softimage v5.0. Existing menus that use this anchor point are added to the View > Layouts menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainApplicationViewsID\"> </a>siMenuMainApplicationViewsID		</td>\n\
		<td class=\"example\">1009		</td>\n\
		<td>\n\
Do not use. The Application menu was removed in Softimage v5.0. Existing menus that use this anchor point are added to the View menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainApplicationToolbarsID\"> </a>siMenuMainApplicationToolbarsID		</td>\n\
		<td class=\"example\">1010		</td>\n\
		<td>\n\
Do not use. The Application menu was removed in Softimage v5.0. Existing menus that use this anchor point are added to the View menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainApplicationCommandsID\"> </a>siMenuMainApplicationCommandsID		</td>\n\
		<td class=\"example\">1011		</td>\n\
		<td>\n\
Do not use. The Application menu was removed in Softimage v5.0. Existing menus that use this anchor point are added to the View menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainApplicationKeyMappingsID\"> </a>siMenuMainApplicationKeyMappingsID		</td>\n\
		<td class=\"example\">1012		</td>\n\
		<td>\n\
Do not use. The Application menu was removed in Softimage v5.0. Existing menus that use this anchor point are added to the View menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainApplicationPreferencesID\"> </a>siMenuMainApplicationPreferencesID		</td>\n\
		<td class=\"example\">1013		</td>\n\
		<td>\n\
Do not use. The Application menu was removed in Softimage v5.0. Existing menus that use this anchor point are added to the Preferences section of the File menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainTopLevelID\"> </a>siMenuMainTopLevelID		</td>\n\
		<td class=\"example\">1014		</td>\n\
		<td>\n\
The main menu bar. Menus registered with this identifier are added to the Softimage main menu bar as top-level menus.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMainFileCrosswalkID\"> </a>siMenuMainFileCrosswalkID		</td>\n\
		<td class=\"example\">1015		</td>\n\
		<td>\n\
File > Crosswalk menu on the main menu bar.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPSelectTopID\"> </a>siMenuMCPSelectTopID		</td>\n\
		<td class=\"example\">2000		</td>\n\
		<td>\n\
Top of Select menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPSelectBottomID\"> </a>siMenuMCPSelectBottomID		</td>\n\
		<td class=\"example\">2001		</td>\n\
		<td>\n\
Bottom of Select menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPSelectExploreBtnID\"> </a>siMenuMCPSelectExploreBtnID		</td>\n\
		<td class=\"example\">2002		</td>\n\
		<td>\n\
Explore menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPSelectSelBtnContextID\"> </a>siMenuMCPSelectSelBtnContextID		</td>\n\
		<td class=\"example\">2003		</td>\n\
		<td>\n\
Context menu displayed when a user right-clicks the Selection button in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPTransformTopID\"> </a>siMenuMCPTransformTopID		</td>\n\
		<td class=\"example\">2004		</td>\n\
		<td>\n\
Top of Transform menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPTransformBottomID\"> </a>siMenuMCPTransformBottomID		</td>\n\
		<td class=\"example\">2005		</td>\n\
		<td>\n\
Bottom of Transform menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPSnapID\"> </a>siMenuMCPSnapID		</td>\n\
		<td class=\"example\">2006		</td>\n\
		<td>\n\
Snap menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPConstrainID\"> </a>siMenuMCPConstrainID		</td>\n\
		<td class=\"example\">2007		</td>\n\
		<td>\n\
Constrain menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPEditID\"> </a>siMenuMCPEditID		</td>\n\
		<td class=\"example\">2008		</td>\n\
		<td>\n\
Edit menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPAnimationID\"> </a>siMenuMCPAnimationID		</td>\n\
		<td class=\"example\">2009		</td>\n\
		<td>\n\
Animation menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMCPPlaybackID\"> </a>siMenuMCPPlaybackID		</td>\n\
		<td class=\"example\">2010		</td>\n\
		<td>\n\
Playback menu in the MCP.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuVMViewTypeID\"> </a>siMenuVMViewTypeID		</td>\n\
		<td class=\"example\">3000		</td>\n\
		<td>\n\
View type menu in the View Manager. See <a href=\"#!/url=./si_cmds/ViewManagerAttributes.html#\">View Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuVMCameraID\"> </a>siMenuVMCameraID		</td>\n\
		<td class=\"example\">3001		</td>\n\
		<td>\n\
Camera menu in the View Manager. See <a href=\"#!/url=./si_cmds/ViewManagerAttributes.html#\">View Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuVMVisibilityID\"> </a>siMenuVMVisibilityID		</td>\n\
		<td class=\"example\">3002		</td>\n\
		<td>\n\
Visibility menu in the View Manager. See <a href=\"#!/url=./si_cmds/ViewManagerAttributes.html#\">View Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuVMDisplayID\"> </a>siMenuVMDisplayID		</td>\n\
		<td class=\"example\">3003		</td>\n\
		<td>\n\
Display menu in the View Manager. See <a href=\"#!/url=./si_cmds/ViewManagerAttributes.html#\">View Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenu3DViewClusterContextID\"> </a>siMenu3DViewClusterContextID		</td>\n\
		<td class=\"example\">3100		</td>\n\
		<td>\n\
Context menu for a cluster in a 3D view.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenu3DViewComponentContextID\"> </a>siMenu3DViewComponentContextID		</td>\n\
		<td class=\"example\">3101		</td>\n\
		<td>\n\
Context menu for subcomponents (such as points, edges, and polygons) in a 3D view.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenu3DViewComponentEditContextID\"> </a>siMenu3DViewComponentEditContextID		</td>\n\
		<td class=\"example\">3102		</td>\n\
		<td>\n\
Edit section of the context menu for subcomponents in a 3D view.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenu3DViewGeneralContextID\"> </a>siMenu3DViewGeneralContextID		</td>\n\
		<td class=\"example\">3103		</td>\n\
		<td>\n\
Context menu displayed when a user right-clicks a blank area of a 3D view.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenu3DViewObjectContextID\"> </a>siMenu3DViewObjectContextID		</td>\n\
		<td class=\"example\">3104		</td>\n\
		<td>\n\
Context menu for an object in a 3D view.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenu3DViewObjectEditContextID\"> </a>siMenu3DViewObjectEditContextID		</td>\n\
		<td class=\"example\">3105		</td>\n\
		<td>\n\
Edit section of the context menu for an object in a 3D view.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenu3DViewObjectGroupContextID\"> </a>siMenu3DViewObjectGroupContextID		</td>\n\
		<td class=\"example\">3106		</td>\n\
		<td>\n\
Group section of the context menu for an object in a 3D view.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenu3DViewObjectMeshContextID\"> </a>siMenu3DViewObjectMeshContextID		</td>\n\
		<td class=\"example\">3107		</td>\n\
		<td>\n\
Mesh section of the context menu for an object in a 3D view.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenu3DViewObjectSelectContextID\"> </a>siMenu3DViewObjectSelectContextID		</td>\n\
		<td class=\"example\">3108		</td>\n\
		<td>\n\
Select section of the context menu for an object in a 3D view.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEGeneralContextID\"> </a>siMenuSEGeneralContextID		</td>\n\
		<td class=\"example\">3200		</td>\n\
		<td>\n\
Context menu displayed when a user right-clicks an object (such as a Property, Parameter, or Primtive) that does not have a specific context menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSELayersContextID\"> </a>siMenuSELayersContextID		</td>\n\
		<td class=\"example\">3201		</td>\n\
		<td>\n\
Context menu displayed for Layer objects in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEPassesContextID\"> </a>siMenuSEPassesContextID		</td>\n\
		<td class=\"example\">3202		</td>\n\
		<td>\n\
Context menu displayed for Pass objects in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEPartitionsContextID\"> </a>siMenuSEPartitionsContextID		</td>\n\
		<td class=\"example\">3203		</td>\n\
		<td>\n\
Context menu displayed for Partition objects in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEObjectContextID\"> </a>siMenuSEObjectContextID		</td>\n\
		<td class=\"example\">3204		</td>\n\
		<td>\n\
Context menu displayed for 3D objects in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEGroupContextID\"> </a>siMenuSEGroupContextID		</td>\n\
		<td class=\"example\">3205		</td>\n\
		<td>\n\
Context menu displayed for Groups in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEAnimContextID\"> </a>siMenuSEAnimContextID		</td>\n\
		<td class=\"example\">3206		</td>\n\
		<td>\n\
Context menu displayed for animated parameters in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEClusterContextID\"> </a>siMenuSEClusterContextID		</td>\n\
		<td class=\"example\">3207		</td>\n\
		<td>\n\
Context menu displayed for clusters in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEOperatorContextID\"> </a>siMenuSEOperatorContextID		</td>\n\
		<td class=\"example\">3208		</td>\n\
		<td>\n\
Context menu displayed for operators in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEConstraintContextID\"> </a>siMenuSEConstraintContextID		</td>\n\
		<td class=\"example\">3209		</td>\n\
		<td>\n\
Context menu displayed for constraints in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEPreferenceContextID\"> </a>siMenuSEPreferenceContextID		</td>\n\
		<td class=\"example\">3210		</td>\n\
		<td>\n\
Context menu displayed for preferences in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEMaterialContextID\"> </a>siMenuSEMaterialContextID		</td>\n\
		<td class=\"example\">3211		</td>\n\
		<td>\n\
Context menu displayed for Materials in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSEModelContextID\"> </a>siMenuSEModelContextID		</td>\n\
		<td class=\"example\">3212		</td>\n\
		<td>\n\
Context menu displayed for Models in the Scene Explorer.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrPluginFileID\"> </a>siMenuPluginMgrPluginFileID		</td>\n\
		<td class=\"example\">3300		</td>\n\
		<td>\n\
File menu on the Plug-ins and Items tabs of the Plug-in Manager. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrTreeFileID\"> </a>siMenuPluginMgrTreeFileID		</td>\n\
		<td class=\"example\">3301		</td>\n\
		<td>\n\
File menu on the Tree tab of the Plug-in Manager. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextPluginID\"> </a>siMenuPluginMgrContextPluginID		</td>\n\
		<td class=\"example\">3302		</td>\n\
		<td>\n\
Context menu for plug-ins listed on the Tree and Plug-ins tabs of the Plugin Manager. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextPluginLocationID\"> </a>siMenuPluginMgrContextPluginLocationID		</td>\n\
		<td class=\"example\">3303		</td>\n\
		<td>\n\
Context menu in the Plug-in Manager for an add-on or other location where plug-ins can be stored. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextUserRootID\"> </a>siMenuPluginMgrContextUserRootID		</td>\n\
		<td class=\"example\">3304		</td>\n\
		<td>\n\
Context menu for the User Root node in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextFactoryRootID\"> </a>siMenuPluginMgrContextFactoryRootID		</td>\n\
		<td class=\"example\">3305		</td>\n\
		<td>\n\
Context menu for the Factory Root node in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextWorkgroupRootID\"> </a>siMenuPluginMgrContextWorkgroupRootID		</td>\n\
		<td class=\"example\">3306		</td>\n\
		<td>\n\
Context menu for the Workgroup Root node in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextAddonID\"> </a>siMenuPluginMgrContextAddonID		</td>\n\
		<td class=\"example\">3307		</td>\n\
		<td>\n\
Context menu for the add-ons listed in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextCustomLocationID\"> </a>siMenuPluginMgrContextCustomLocationID		</td>\n\
		<td class=\"example\">3308		</td>\n\
		<td>\n\
Context menu for the Root node of a custom folder in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrSPDLFileID\"> </a>siMenuPluginMgrSPDLFileID		</td>\n\
		<td class=\"example\">3309		</td>\n\
		<td>\n\
File menu on the SPDLs tab of the Plug-in Manager. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextSPDLID\"> </a>siMenuPluginMgrContextSPDLID		</td>\n\
		<td class=\"example\">3310		</td>\n\
		<td>\n\
Context menu for the plug-ins listed on the SPDLs tab of the Plugin Manager. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextSPDLLocationID\"> </a>siMenuPluginMgrContextSPDLLocationID		</td>\n\
		<td class=\"example\">3311		</td>\n\
		<td>\n\
Context menu for the SPDLs Root node in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextPluginItemID\"> </a>siMenuPluginMgrContextPluginItemID		</td>\n\
		<td class=\"example\">3312		</td>\n\
		<td>\n\
Context menu for the plug-ins listed on the Items tab of the Plugin Manager. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextViewLocationID\"> </a>siMenuPluginMgrContextViewLocationID		</td>\n\
		<td class=\"example\">3313		</td>\n\
		<td>\n\
Context menu for the Views Root node in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextViewID\"> </a>siMenuPluginMgrContextViewID		</td>\n\
		<td class=\"example\">3314		</td>\n\
		<td>\n\
Context menu for view plug-ins listed in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextToolbarLocationID\"> </a>siMenuPluginMgrContextToolbarLocationID		</td>\n\
		<td class=\"example\">3315		</td>\n\
		<td>\n\
Context menu for the Toolbars Root node in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPluginMgrContextToolbarID\"> </a>siMenuPluginMgrContextToolbarID		</td>\n\
		<td class=\"example\">3316		</td>\n\
		<td>\n\
Context menu for the toolbar plug-ins listed in the plug-in tree. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuWorkgroupMgrFileID\"> </a>siMenuWorkgroupMgrFileID		</td>\n\
		<td class=\"example\">3350		</td>\n\
		<td>\n\
File menu on the Workgroups tab of the Plug-in Manager. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuWorkgroupMgrContextID\"> </a>siMenuWorkgroupMgrContextID		</td>\n\
		<td class=\"example\">3351		</td>\n\
		<td>\n\
Context menu for a selected workgroup. See <a href=\"#!/url=./si_cmds/PluginManagerAttributes.html#\">Plug-in Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuScriptEditContextID\"> </a>siMenuScriptEditContextID		</td>\n\
		<td class=\"example\">3400		</td>\n\
		<td>\n\
Context menu for the editing pane of a script editor or a text editor. See <a href=\"#!/url=./si_cmds/ScriptEditorAttributes.html#\">Script Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuScriptHistoryContextID\"> </a>siMenuScriptHistoryContextID		</td>\n\
		<td class=\"example\">3401		</td>\n\
		<td>\n\
Context menu for the history pane of a script editor. See <a href=\"#!/url=./si_cmds/ScriptHistoryAttributes.html#\">Script History Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuFCurveEditorTopLevelID\"> </a>siMenuFCurveEditorTopLevelID		</td>\n\
		<td class=\"example\">3500		</td>\n\
		<td>\n\
Menus registered with this identifier are added to the FCurve Editor toolbar as top-level menus. See <a href=\"#!/url=./si_cmds/FCurveEditorAttributes.html#\">FCurve Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuFCurveEditorFileID\"> </a>siMenuFCurveEditorFileID		</td>\n\
		<td class=\"example\">3501		</td>\n\
		<td>\n\
File menu in the FCurve Editor. See <a href=\"#!/url=./si_cmds/FCurveEditorAttributes.html#\">FCurve Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuFCurveEditorEditID\"> </a>siMenuFCurveEditorEditID		</td>\n\
		<td class=\"example\">3502		</td>\n\
		<td>\n\
Edit menu in the FCurve Editor. See <a href=\"#!/url=./si_cmds/FCurveEditorAttributes.html#\">FCurve Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuFCurveEditorViewID\"> </a>siMenuFCurveEditorViewID		</td>\n\
		<td class=\"example\">3503		</td>\n\
		<td>\n\
View menu in the FCurve Editor. See <a href=\"#!/url=./si_cmds/FCurveEditorAttributes.html#\">FCurve Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuFCurveEditorKeysID\"> </a>siMenuFCurveEditorKeysID		</td>\n\
		<td class=\"example\">3504		</td>\n\
		<td>\n\
Keys menu in the FCurve Editor. See <a href=\"#!/url=./si_cmds/FCurveEditorAttributes.html#\">FCurve Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuFCurveEditorCurvesID\"> </a>siMenuFCurveEditorCurvesID		</td>\n\
		<td class=\"example\">3505		</td>\n\
		<td>\n\
Curves menu in the FCurve Editor. See <a href=\"#!/url=./si_cmds/FCurveEditorAttributes.html#\">FCurve Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuFCurveEditorSelectID\"> </a>siMenuFCurveEditorSelectID		</td>\n\
		<td class=\"example\">3506		</td>\n\
		<td>\n\
Select menu in the FCurve Editor. See <a href=\"#!/url=./si_cmds/FCurveEditorAttributes.html#\">FCurve Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPropertyPageContextID\"> </a>siMenuPropertyPageContextID		</td>\n\
		<td class=\"example\">3600		</td>\n\
		<td>\n\
Context menu for the top area of a Property Page.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuPropertyPageAnimContextID\"> </a>siMenuPropertyPageAnimContextID		</td>\n\
		<td class=\"example\">3601		</td>\n\
		<td>\n\
Context menu displayed for animatable parameters in a Property Page.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuShapeManagerEditID\"> </a>siMenuShapeManagerEditID		</td>\n\
		<td class=\"example\">3700		</td>\n\
		<td>\n\
Edit menu in the Shape Manager. See <a href=\"#!/url=./si_cmds/ShapeManagerAttributes.html#\">Shape Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuShapeManagerCreateContextSingleSelectionID\"> </a>siMenuShapeManagerCreateContextSingleSelectionID		</td>\n\
		<td class=\"example\">3701		</td>\n\
		<td>\n\
Context menu for the Create tab of the Shape Manager when a single shape is selected. See <a href=\"#!/url=./si_cmds/ShapeManagerAttributes.html#\">Shape Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuShapeManagerCreateContextMultiSelectionID\"> </a>siMenuShapeManagerCreateContextMultiSelectionID		</td>\n\
		<td class=\"example\">3702		</td>\n\
		<td>\n\
Context menu for the Create tab of the Shape Manager when multiple shapes are selected. See <a href=\"#!/url=./si_cmds/ShapeManagerAttributes.html#\">Shape Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuShapeManagerAnimateContextSingleSelectionID\"> </a>siMenuShapeManagerAnimateContextSingleSelectionID		</td>\n\
		<td class=\"example\">3703		</td>\n\
		<td>\n\
Context menu for the Animate tab of the Shape Manager when only a single shape is selected. See <a href=\"#!/url=./si_cmds/ShapeManagerAttributes.html#\">Shape Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuShapeManagerAnimateContextMultiSelectionID\"> </a>siMenuShapeManagerAnimateContextMultiSelectionID		</td>\n\
		<td class=\"example\">3704		</td>\n\
		<td>\n\
Context menu for the Animate tab of the Shape Manager when multiple shapes are selected. See <a href=\"#!/url=./si_cmds/ShapeManagerAttributes.html#\">Shape Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuShapeManagerAnimateID\"> </a>siMenuShapeManagerAnimateID		</td>\n\
		<td class=\"example\">3705		</td>\n\
		<td>\n\
Animate menu in the Shape Manager. See <a href=\"#!/url=./si_cmds/ShapeManagerAttributes.html#\">Shape Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuRenderRegionContextID\"> </a>siMenuRenderRegionContextID		</td>\n\
		<td class=\"example\">3800		</td>\n\
		<td>\n\
Context menu for the Render Region.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMaterialPanelMaterialID\"> </a>siMenuMaterialPanelMaterialID		</td>\n\
		<td class=\"example\">3900		</td>\n\
		<td>\n\
Material menu in the Material Panel.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTextureEditorToolsID\"> </a>siMenuTextureEditorToolsID		</td>\n\
		<td class=\"example\">4000		</td>\n\
		<td>\n\
Tools menu in the Texture Editor. See <a href=\"#!/url=./si_cmds/TextureEditorAttributes.html#\">Texture Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuRenderTreeToolsID\"> </a>siMenuRenderTreeToolsID		</td>\n\
		<td class=\"example\">4100		</td>\n\
		<td>\n\
Tools menu in the RenderTree.  See <a href=\"#!/url=./si_cmds/RenderTreeAttributes.html#\">Render Tree Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuICEViewToolsID\"> </a>siMenuICEViewToolsID		</td>\n\
		<td class=\"example\">4101		</td>\n\
		<td>\n\
Tools menu in the ICE view. See <a href=\"#!/url=./si_cmds/RenderTreeAttributes.html#\">ICE Tree Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuRTNodeContextID\"> </a>siMenuRTNodeContextID		</td>\n\
		<td class=\"example\">4102		</td>\n\
		<td>\n\
Context menu displayed for shader/materials in the RenderTree. See <a href=\"#!/url=./si_cmds/RenderTreeAttributes.html#\">Render Tree Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuICENodeContextID\"> </a>siMenuICENodeContextID		</td>\n\
		<td class=\"example\">4103		</td>\n\
		<td>\n\
Context menu displayed for ICE Nodes in the ICE view. See <a href=\"#!/url=./si_cmds/RenderTreeAttributes.html#\">ICE Tree Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuICENodePortContextID\"> </a>siMenuICENodePortContextID		</td>\n\
		<td class=\"example\">4104		</td>\n\
		<td>\n\
Context menu displayed for ICE Node Ports in the ICE view. See <a href=\"#!/url=./si_cmds/RenderTreeAttributes.html#\">ICE Tree Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuRenderTreeTopLevelID\"> </a>siMenuRenderTreeTopLevelID		</td>\n\
		<td class=\"example\">4105		</td>\n\
		<td>\n\
The RenderTree main toolbar. Menus registered with this identifier are added to the RenderTree toolbar as top-level menus. See <a href=\"#!/url=./si_cmds/RenderTreeAttributes.html#\">Render Tree Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuICEViewTopLevelID\"> </a>siMenuICEViewTopLevelID		</td>\n\
		<td class=\"example\">4106		</td>\n\
		<td>\n\
The ICE view main toolbar. Menus registered with this identifier are added to the ICE view toolbar as top-level menus. See <a href=\"#!/url=./si_cmds/RenderTreeAttributes.html#\">ICE Tree Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTextEditorWidgetEditID\"> </a>siMenuTextEditorWidgetEditID		</td>\n\
		<td class=\"example\">4200		</td>\n\
		<td>\n\
Edit menu in the Text Editor Widget. See <a href=\"#!/url=./si_cmds/ScriptEditorAttributes.html#\">Text Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTextEditorContextID\"> </a>siMenuTextEditorContextID		</td>\n\
		<td class=\"example\">4201		</td>\n\
		<td>\n\
Context menu in the edit pane of a Text Editor Widget. See <a href=\"#!/url=./si_cmds/ScriptEditorAttributes.html#\">Text Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuTextureSpaceProjectionID\"> </a>siMenuTextureSpaceProjectionID		</td>\n\
		<td class=\"example\">4300		</td>\n\
		<td>\n\
Texture Space > New > Texture Projection menu.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSchematicViewID\"> </a>siMenuSchematicViewID		</td>\n\
		<td class=\"example\">4400		</td>\n\
		<td>\n\
View menu in the Schematic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSchematicViewContextID\"> </a>siMenuSchematicViewContextID		</td>\n\
		<td class=\"example\">4401		</td>\n\
		<td>\n\
Context menu for the Schematic when clicking in the background.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSchematicNodeContextID\"> </a>siMenuSchematicNodeContextID		</td>\n\
		<td class=\"example\">4402		</td>\n\
		<td>\n\
Context menu displayed for nodes in the Schematic.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSchematicViewTopLevelID\"> </a>siMenuSchematicViewTopLevelID		</td>\n\
		<td class=\"example\">4403		</td>\n\
		<td>\n\
Menus registered with this identifier are added to the Schematic view toolbar as top-level menus.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSceneLayerManagerLayersID\"> </a>siMenuSceneLayerManagerLayersID		</td>\n\
		<td class=\"example\">4500		</td>\n\
		<td>\n\
Layers menu in the Scene Layer Manager.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuSceneLayerManagerContextID\"> </a>siMenuSceneLayerManagerContextID		</td>\n\
		<td class=\"example\">4501		</td>\n\
		<td>\n\
Context menu displayed for layer rows in the Scene Layer Manager.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuMaterialManagerTopLevelID\"> </a>siMenuMaterialManagerTopLevelID		</td>\n\
		<td class=\"example\">4600		</td>\n\
		<td>\n\
Material Manager main toolbar. Menus registered with this identifier are added to the Material Manager toolbar as top-level menus. See <a href=\"#!/url=./si_cmds/MaterialManagerAttributes.html#\">Material Manager Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuAnimMixerEditID\"> </a>siMenuAnimMixerEditID		</td>\n\
		<td class=\"example\">4700		</td>\n\
		<td>\n\
Edit menu in the Animation Mixer. See <a href=\"#!/url=./si_cmds/AnimationMixerAttributes.html#\">Animation Mixer Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuAnimMixerViewID\"> </a>siMenuAnimMixerViewID		</td>\n\
		<td class=\"example\">4701		</td>\n\
		<td>\n\
View menu in the Animation Mixer. See <a href=\"#!/url=./si_cmds/AnimationMixerAttributes.html#\">Animation Mixer Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuAnimMixerTrackID\"> </a>siMenuAnimMixerTrackID		</td>\n\
		<td class=\"example\">4702		</td>\n\
		<td>\n\
Track menu in the Animation Mixer. See <a href=\"#!/url=./si_cmds/AnimationMixerAttributes.html#\">Animation Mixer Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuAnimMixerClipID\"> </a>siMenuAnimMixerClipID		</td>\n\
		<td class=\"example\">4703		</td>\n\
		<td>\n\
Clip menu in the Animation Mixer. See <a href=\"#!/url=./si_cmds/AnimationMixerAttributes.html#\">Animation Mixer Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuAnimMixerMixID\"> </a>siMenuAnimMixerMixID		</td>\n\
		<td class=\"example\">4704		</td>\n\
		<td>\n\
Mix menu in the Animation Mixer. See <a href=\"#!/url=./si_cmds/AnimationMixerAttributes.html#\">Animation Mixer Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuAnimMixerEffectID\"> </a>siMenuAnimMixerEffectID		</td>\n\
		<td class=\"example\">4705		</td>\n\
		<td>\n\
Effect menu in the Animation Mixer. See <a href=\"#!/url=./si_cmds/AnimationMixerAttributes.html#\">Animation Mixer Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuShaderCodeEditContextID\"> </a>siMenuShaderCodeEditContextID		</td>\n\
		<td class=\"example\">4800		</td>\n\
		<td>\n\
Context menu displayed for the Shader Code Editor.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuWeightEditorFileID\"> </a>siMenuWeightEditorFileID		</td>\n\
		<td class=\"example\">10000		</td>\n\
		<td>\n\
File menu in the Weight Editor. See <a href=\"#!/url=./si_cmds/WeightEditorAttributes.html#\">Weight Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuWeightEditorEditID\"> </a>siMenuWeightEditorEditID		</td>\n\
		<td class=\"example\">10001		</td>\n\
		<td>\n\
Edit menu in the Weight Editor. See <a href=\"#!/url=./si_cmds/WeightEditorAttributes.html#\">Weight Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuWeightEditorViewID\"> </a>siMenuWeightEditorViewID		</td>\n\
		<td class=\"example\">10002		</td>\n\
		<td>\n\
View menu in the Weight Editor. See <a href=\"#!/url=./si_cmds/WeightEditorAttributes.html#\">Weight Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuScriptedOpEditContextID\"> </a>siMenuScriptedOpEditContextID		</td>\n\
		<td class=\"example\">10100		</td>\n\
		<td>\n\
Context menu displayed for both text editors in the Scripted Operator Editor. See <a href=\"#!/url=./si_cmds/ScriptedOpEditorAttributes.html#\">Scripted Operator Editor Attributes</a> for a list of attributes you can use with this custom menu hook.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/PluginRegistrar.RegisterMenu.html\">PluginRegistrar.RegisterMenu</a> <a href=\"#!/url=./si_cpp/classXSI_1_1PluginRegistrar.html#RegisterMenu\">PluginRegistrar::RegisterMenu</a></p></div>\n\
\n\
<h3>See Also</h3>\n\
<div><p><a href=\"#!/url=./si_om/Menu.AddCommandItem.html\">Menu.AddCommandItem</a> <a href=\"#!/url=./si_cpp/classXSI_1_1Menu.html#AddCommandItem\">Menu::AddCommandItem</a> <a href=\"#!/url=./files/cus_menus_HowtoMakeYourOwnMenus.htm\">How to Make Your Own Menus</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";