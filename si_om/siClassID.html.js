var topic = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n\
<!-- saved from url=(0024)http://docs.autodesk.com -->\n\
<html>\n\
   <head>\n\
<link href=\"../style/prettify.css\" type=\"text/css\" rel=\"stylesheet\" />\n\
<script type=\"text/javascript\" src=\"../scripts/prettify.js\"></script><script src=\"../scripts/lib/jquery-1.9.1.min.js\" type=\"text/javascript\"></script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /><script type=\"text/javascript\" src=\"../scripts/utils/adsk.redirect.js\"></script>\n\
      <title>siClassID</title>\n\
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
            <h1>siClassID</h1>\n\
         </div>\n\
\n\
<h2 class=\"pagehead\">siClassID</h2>\n\
\n\
<h3>Description</h3>\n\
<div><p>\n\
The class ID of Softimage objects. This enumerator is used by the C++ API to manage references \n\
between the object model and C++. For example, the CRef::IsA function uses the class ID\n\
to determine whether or not the class type is compatible with the underlying reference object.\n\
</p></div>\n\
\n\
<h3>C# Syntax</h3>\n\
<div><p><table>\n\
	<tr>\n\
		<td class=\"example\"><pre>siClassID.siObjectID                                                        // 0\n\
siClassID.siUnknownClassID                                                  // 0\n\
siClassID.siSIObjectID                                                      // 1\n\
siClassID.siOGLMaterialID                                                   // 2\n\
siClassID.siOGLTextureID                                                    // 3\n\
siClassID.siOGLLightID                                                      // 4\n\
siClassID.siApplicationID                                                   // 5\n\
siClassID.siArgumentID                                                      // 6\n\
siClassID.siCommandID                                                       // 7\n\
siClassID.siClipID                                                          // 8\n\
siClassID.siShapeClipID                                                     // 9\n\
siClassID.siSubComponentID                                                  // 10\n\
siClassID.siFacetID                                                         // 11\n\
siClassID.siNurbsSurfaceID                                                  // 12\n\
siClassID.siPointID                                                         // 13\n\
siClassID.siControlPointID                                                  // 14\n\
siClassID.siNurbsCurveControlPointID                                        // 15\n\
siClassID.siNurbsCurveListControlPointID                                    // 16\n\
siClassID.siNurbsSurfaceControlPointID                                      // 17\n\
siClassID.siNurbsCurveID                                                    // 18\n\
siClassID.siSampleID                                                        // 19\n\
siClassID.siNurbsSampleID                                                   // 20\n\
siClassID.siPolygonNodeID                                                   // 21\n\
siClassID.siGeometryID                                                      // 22\n\
siClassID.siNurbsSurfaceMeshID                                              // 23\n\
siClassID.siNurbsCurveListID                                                // 24\n\
siClassID.siPolygonMeshID                                                   // 25\n\
siClassID.siSegmentID                                                       // 26\n\
siClassID.siConnectionPointID                                               // 27\n\
siClassID.siConstructionHistoryID                                           // 28\n\
siClassID.siDictionaryID                                                    // 29\n\
siClassID.siEventInfoID                                                     // 30\n\
siClassID.siFCurveID                                                        // 31\n\
siClassID.siNestedFCurveID                                                  // 32\n\
siClassID.siFCurveKeyID                                                     // 33\n\
siClassID.siFileBrowserID                                                   // 34\n\
siClassID.siImageID                                                         // 35\n\
siClassID.siMappedItemID                                                    // 36\n\
siClassID.siPortID                                                          // 37\n\
siClassID.siInputPortID                                                     // 38\n\
siClassID.siSelectionID                                                     // 39\n\
siClassID.siStaticSourceID                                                  // 40\n\
siClassID.siTriangleID                                                      // 41\n\
siClassID.siTriangleVertexID                                                // 42\n\
siClassID.siUpdateContextID                                                 // 43\n\
siClassID.siParameterID                                                     // 44\n\
siClassID.siCompoundParameterID                                             // 45\n\
siClassID.siProjectID                                                       // 46\n\
siClassID.siProjectItemID                                                   // 47\n\
siClassID.siActionSourceID                                                  // 48\n\
siClassID.siExpressionID                                                    // 49\n\
siClassID.siImageClipID                                                     // 50\n\
siClassID.siSceneID                                                         // 51\n\
siClassID.siShaderID                                                        // 52\n\
siClassID.siOperatorID                                                      // 53\n\
siClassID.siEnvelopeID                                                      // 54\n\
siClassID.siPrimitiveID                                                     // 55\n\
siClassID.siParticleCloudPrimitiveID                                        // 56\n\
siClassID.siPropertyID                                                      // 57\n\
siClassID.siClusterPropertyID                                               // 58\n\
siClassID.siConstraintID                                                    // 59\n\
siClassID.siConstraintWithUpVectorID                                        // 60\n\
siClassID.siCustomPropertyID                                                // 61\n\
siClassID.siJointID                                                         // 62\n\
siClassID.siKinematicsID                                                    // 63\n\
siClassID.siMaterialID                                                      // 64\n\
siClassID.siStaticKinematicStateID                                          // 65\n\
siClassID.siSceneItemID                                                     // 66\n\
siClassID.siClusterID                                                       // 67\n\
siClassID.siGroupID                                                         // 68\n\
siClassID.siLayerID                                                         // 69\n\
siClassID.siPassID                                                          // 70\n\
siClassID.siUserGroupID                                                     // 71\n\
siClassID.siX3DObjectID                                                     // 72\n\
siClassID.siParticleCloudID                                                 // 73\n\
siClassID.siModelID                                                         // 74\n\
siClassID.siChainElementID                                                  // 75\n\
siClassID.siChainRootID                                                     // 76\n\
siClassID.siChainBoneID                                                     // 77\n\
siClassID.siChainEffectorID                                                 // 78\n\
siClassID.siDirectedID                                                      // 79\n\
siClassID.siCameraID                                                        // 80\n\
siClassID.siLightID                                                         // 81\n\
siClassID.siNullID                                                          // 82\n\
siClassID.siRigID                                                           // 83\n\
siClassID.siCameraRigID                                                     // 84\n\
siClassID.siLightRigID                                                      // 85\n\
siClassID.siKinematicStateID                                                // 86\n\
siClassID.siTrackID                                                         // 87\n\
siClassID.siUserDataMapID                                                   // 88\n\
siClassID.siFxTreeID                                                        // 89\n\
siClassID.siFxOperatorID                                                    // 90\n\
siClassID.siTriangleCollectionID                                            // 91\n\
siClassID.siTriangleVertexCollectionID                                      // 92\n\
siClassID.siSampleCollectionID                                              // 93\n\
siClassID.siPolygonNodeCollectionID                                         // 94\n\
siClassID.siPointCollectionID                                               // 95\n\
siClassID.siFacetCollectionID                                               // 97\n\
siClassID.siVertexID                                                        // 98\n\
siClassID.siVertexCollectionID                                              // 99\n\
siClassID.siEdgeID                                                          // 100\n\
siClassID.siEdgeCollectionID                                                // 101\n\
siClassID.siPolygonFaceID                                                   // 102\n\
siClassID.siPolygonFaceCollectionID                                         // 103\n\
siClassID.siDataSourceID                                                    // 104\n\
siClassID.siAnimationSourceID                                               // 105\n\
siClassID.siOutputPortID                                                    // 106\n\
siClassID.siProxyParameterID                                                // 107\n\
siClassID.siDeviceCollectionID                                              // 108\n\
siClassID.siDeviceID                                                        // 109\n\
siClassID.siChannelID                                                       // 110\n\
siClassID.siKnotCollectionID                                                // 111\n\
siClassID.siControlPointCollectionID                                        // 112\n\
siClassID.siNurbsCurveCollectionID                                          // 113\n\
siClassID.siNurbsSurfaceCollectionID                                        // 114\n\
siClassID.siNurbsSampleCollectionID                                         // 115\n\
siClassID.siTextureID                                                       // 116\n\
siClassID.siUserDataBlobID                                                  // 117\n\
siClassID.siParticleID                                                      // 118\n\
siClassID.siAddonID                                                         // 119\n\
siClassID.siPPGLayoutID                                                     // 120\n\
siClassID.siPPGItemID                                                       // 121\n\
siClassID.siPreferencesID                                                   // 122\n\
siClassID.siParticleTypeID                                                  // 123\n\
siClassID.siParticleAttributeID                                             // 124\n\
siClassID.siGridDataID                                                      // 125\n\
siClassID.siTextureLayerID                                                  // 126\n\
siClassID.siTextureLayerPortID                                              // 127\n\
siClassID.siCustomOperatorID                                                // 128\n\
siClassID.siPortGroupID                                                     // 129\n\
siClassID.siDesktopID                                                       // 130\n\
siClassID.siLayoutID                                                        // 131\n\
siClassID.siUIObjectID                                                      // 132\n\
siClassID.siUIPersistableID                                                 // 133\n\
siClassID.siViewID                                                          // 134\n\
siClassID.siArrayParameterID                                                // 135\n\
siClassID.siViewContextID                                                   // 137\n\
siClassID.siContextID                                                       // 138\n\
siClassID.siPPGEventContextID                                               // 139\n\
siClassID.siClipEffectID                                                    // 140\n\
siClassID.siClipEffectItemID                                                // 141\n\
siClassID.siShapeKeyID                                                      // 142\n\
siClassID.siSourceID                                                        // 143\n\
siClassID.siTimeControlID                                                   // 144\n\
siClassID.siTransitionID                                                    // 145\n\
siClassID.siAnimationSourceItemID                                           // 146\n\
siClassID.siClipContainerID                                                 // 147\n\
siClassID.siArgumentHandlerID                                               // 148\n\
siClassID.siMenuID                                                          // 149\n\
siClassID.siMenuItemID                                                      // 150\n\
siClassID.siPluginID                                                        // 151\n\
siClassID.siPluginItemID                                                    // 152\n\
siClassID.siPluginRegistrarID                                               // 153\n\
siClassID.siFilterID                                                        // 154\n\
siClassID.siUIToolkitID                                                     // 155\n\
siClassID.siProgressBarID                                                   // 156\n\
siClassID.siParamDefID                                                      // 157\n\
siClassID.siFactoryID                                                       // 158\n\
siClassID.siCommandCollectionID                                             // 159\n\
siClassID.siArgumentCollectionID                                            // 160\n\
siClassID.siGraphicSequencerContextID                                       // 161\n\
siClassID.siClipRelationID                                                  // 162\n\
siClassID.siMixerID                                                         // 163\n\
siClassID.siLibraryID                                                       // 164\n\
siClassID.siSimulationEnvironmentID                                         // 165\n\
siClassID.siGridWidgetID                                                    // 166\n\
siClassID.siGeometryAccessorID                                              // 167\n\
siClassID.siEnvelopeWeightID                                                // 168\n\
siClassID.siMeshBuilderID                                                   // 169\n\
siClassID.siSegmentCollectionID                                             // 170\n\
siClassID.siFileReferenceID                                                 // 171\n\
siClassID.siClusterPropertyBuilderID                                        // 172\n\
siClassID.siMaterialLibraryID                                               // 173\n\
siClassID.siHairPrimitiveID                                                 // 174\n\
siClassID.siRenderHairAccessorID                                            // 175\n\
siClassID.siPointLocatorDataID                                              // 176\n\
siClassID.siCollectionItemID                                                // 177\n\
siClassID.siOperatorContextID                                               // 178\n\
siClassID.siPointCloudID                                                    // 179\n\
siClassID.siRigidBodyAccessorID                                             // 180\n\
siClassID.siRigidConstraintAccessorID                                       // 181\n\
siClassID.siDeltaID                                                         // 182\n\
siClassID.siActionDeltaID                                                   // 183\n\
siClassID.siActionDeltaItemID                                               // 184\n\
siClassID.siTimerEventID                                                    // 185\n\
siClassID.siPassContainerID                                                 // 186\n\
siClassID.siRenderChannelID                                                 // 187\n\
siClassID.siSceneRenderPropertyID                                           // 188\n\
siClassID.siFramebufferID                                                   // 189\n\
siClassID.siRendererContextID                                               // 190\n\
siClassID.siRendererID                                                      // 191\n\
siClassID.siTimeTransportID                                                 // 192\n\
siClassID.siTimeTransportContextID                                          // 193\n\
siClassID.siICENodeID                                                       // 194\n\
siClassID.siICECompoundNodeID                                               // 195\n\
siClassID.siICENodePortID                                                   // 196\n\
siClassID.siICETreeID                                                       // 197\n\
siClassID.siICENodeContainerID                                              // 198\n\
siClassID.siICENodeInputPortID                                              // 199\n\
siClassID.siICENodeOutputPortID                                             // 200\n\
siClassID.siICEDataProviderNodeID                                           // 201\n\
siClassID.siICEDataModifierNodeID                                           // 202\n\
siClassID.siICENodeDefID                                                    // 203\n\
siClassID.siICENodeContextID                                                // 204\n\
siClassID.siICEAttributeID                                                  // 205\n\
siClassID.siPartitionID                                                     // 206\n\
siClassID.siOverrideID                                                      // 207\n\
siClassID.siHardwareShaderContextID                                         // 208\n\
siClassID.siValueMapID                                                      // 209\n\
siClassID.siShaderParamDefID                                                // 210\n\
siClassID.siShaderParamDefOptionsID                                         // 211\n\
siClassID.siShaderballOptionsID                                             // 212\n\
siClassID.siShaderParamDefContainerID                                       // 213\n\
siClassID.siMetaShaderRendererDefID                                         // 214\n\
siClassID.siShaderDefID                                                     // 215\n\
siClassID.siShaderStructParamDefID                                          // 216\n\
siClassID.siShaderArrayParamDefID                                           // 217\n\
siClassID.siShaderParameterID                                               // 218\n\
siClassID.siShaderArrayItemParameterID                                      // 219\n\
siClassID.siShaderArrayParameterID                                          // 220\n\
siClassID.siShaderCompoundParameterID                                       // 221\n\
siClassID.siRenderTreeNodeID                                                // 222\n\
siClassID.siShaderBaseID                                                    // 223\n\
siClassID.siShaderContainerID                                               // 224\n\
siClassID.siShaderCompoundID                                                // 225\n\
siClassID.siShaderCommentID                                                 // 226\n\
siClassID.siShaderDefManagerID                                              // 227\n\
siClassID.siHardwareSurfaceID                                               // 228\n\
siClassID.siGraphicDriverID                                                 // 229\n\
siClassID.siHairGeometryID                                                  // 230\n\
siClassID.siPointCloudGeometryID                                            // 231\n\
siClassID.siSchematicNodeID                                                 // 232\n\
siClassID.siSchematicID                                                     // 233\n\
siClassID.siSchematicNodeCollectionID                                       // 234\n\
siClassID.siUVPropertyID                                                    // 235\n\
siClassID.siToolContextID                                                   // 236\n\
siClassID.siPickBufferID                                                    // 237\n\
siClassID.siMemoCameraID                                                    // 238\n\
siClassID.siMemoCameraCollectionID                                          // 239\n\
siClassID.siAnnotationID                                                    // 250\n\
siClassID.siCustomPrimitiveID                                               // 251\n\
siClassID.siCustomPrimitiveContextID                                        // 252</pre>		</td>	</tr>\n\
</table>\n\
</p></div>\n\
\n\
<div><table cellpadding=\"5\" cellspacing=\"5\">\n\
	<tr>\n\
		<th>Constant		</th>		<th>Value		</th>		<th>Description		</th>	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siActionDeltaID\"> </a>siActionDeltaID		</td>\n\
		<td class=\"example\">183		</td>\n\
		<td>\n\
ActionDelta object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siActionDeltaItemID\"> </a>siActionDeltaItemID		</td>\n\
		<td class=\"example\">184		</td>\n\
		<td>\n\
ActionDeltaItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siActionSourceID\"> </a>siActionSourceID		</td>\n\
		<td class=\"example\">48		</td>\n\
		<td>\n\
ActionSource object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAddonID\"> </a>siAddonID		</td>\n\
		<td class=\"example\">119		</td>\n\
		<td>\n\
Addon object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAnimationSourceID\"> </a>siAnimationSourceID		</td>\n\
		<td class=\"example\">105		</td>\n\
		<td>\n\
AnimationSource object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAnimationSourceItemID\"> </a>siAnimationSourceItemID		</td>\n\
		<td class=\"example\">146		</td>\n\
		<td>\n\
AnimationSourceItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siAnnotationID\"> </a>siAnnotationID		</td>\n\
		<td class=\"example\">250		</td>\n\
		<td>\n\
Annotation object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siApplicationID\"> </a>siApplicationID		</td>\n\
		<td class=\"example\">5		</td>\n\
		<td>\n\
Application object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgumentCollectionID\"> </a>siArgumentCollectionID		</td>\n\
		<td class=\"example\">160		</td>\n\
		<td>\n\
Argument Collection id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgumentHandlerID\"> </a>siArgumentHandlerID		</td>\n\
		<td class=\"example\">148		</td>\n\
		<td>\n\
Argument Handler object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArgumentID\"> </a>siArgumentID		</td>\n\
		<td class=\"example\">6		</td>\n\
		<td>\n\
Argument object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siArrayParameterID\"> </a>siArrayParameterID		</td>\n\
		<td class=\"example\">135		</td>\n\
		<td>\n\
ArrayParameter object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraID\"> </a>siCameraID		</td>\n\
		<td class=\"example\">80		</td>\n\
		<td>\n\
Camera object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCameraRigID\"> </a>siCameraRigID		</td>\n\
		<td class=\"example\">84		</td>\n\
		<td>\n\
CameraRig object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainBoneID\"> </a>siChainBoneID		</td>\n\
		<td class=\"example\">77		</td>\n\
		<td>\n\
ChainBone object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainEffectorID\"> </a>siChainEffectorID		</td>\n\
		<td class=\"example\">78		</td>\n\
		<td>\n\
ChainEffector object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainElementID\"> </a>siChainElementID		</td>\n\
		<td class=\"example\">75		</td>\n\
		<td>\n\
ChainElement object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChainRootID\"> </a>siChainRootID		</td>\n\
		<td class=\"example\">76		</td>\n\
		<td>\n\
ChainRoot object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siChannelID\"> </a>siChannelID		</td>\n\
		<td class=\"example\">110		</td>\n\
		<td>\n\
Channel object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipContainerID\"> </a>siClipContainerID		</td>\n\
		<td class=\"example\">147		</td>\n\
		<td>\n\
ClipContainer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipEffectID\"> </a>siClipEffectID		</td>\n\
		<td class=\"example\">140		</td>\n\
		<td>\n\
ClipEffect object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipEffectItemID\"> </a>siClipEffectItemID		</td>\n\
		<td class=\"example\">141		</td>\n\
		<td>\n\
ClipEffectItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipID\"> </a>siClipID		</td>\n\
		<td class=\"example\">8		</td>\n\
		<td>\n\
Clip object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClipRelationID\"> </a>siClipRelationID		</td>\n\
		<td class=\"example\">162		</td>\n\
		<td>\n\
ClipRelation object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterID\"> </a>siClusterID		</td>\n\
		<td class=\"example\">67		</td>\n\
		<td>\n\
Cluster object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterPropertyBuilderID\"> </a>siClusterPropertyBuilderID		</td>\n\
		<td class=\"example\">172		</td>\n\
		<td>\n\
ClusterPropertyBuilder object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siClusterPropertyID\"> </a>siClusterPropertyID		</td>\n\
		<td class=\"example\">58		</td>\n\
		<td>\n\
ClusterProperty object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCollectionItemID\"> </a>siCollectionItemID		</td>\n\
		<td class=\"example\">177		</td>\n\
		<td>\n\
CollectionItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCommandCollectionID\"> </a>siCommandCollectionID		</td>\n\
		<td class=\"example\">159		</td>\n\
		<td>\n\
Command object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCommandID\"> </a>siCommandID		</td>\n\
		<td class=\"example\">7		</td>\n\
		<td>\n\
Command object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCompoundParameterID\"> </a>siCompoundParameterID		</td>\n\
		<td class=\"example\">45		</td>\n\
		<td>\n\
CompoundParameter object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConnectionPointID\"> </a>siConnectionPointID		</td>\n\
		<td class=\"example\">27		</td>\n\
		<td>\n\
ConnectionPoint object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstraintID\"> </a>siConstraintID		</td>\n\
		<td class=\"example\">59		</td>\n\
		<td>\n\
Constraint object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstraintWithUpVectorID\"> </a>siConstraintWithUpVectorID		</td>\n\
		<td class=\"example\">60		</td>\n\
		<td>\n\
ConstraintWithUpVector object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siConstructionHistoryID\"> </a>siConstructionHistoryID		</td>\n\
		<td class=\"example\">28		</td>\n\
		<td>\n\
ConstructionHistory object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siContextID\"> </a>siContextID		</td>\n\
		<td class=\"example\">138		</td>\n\
		<td>\n\
Context object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlPointCollectionID\"> </a>siControlPointCollectionID		</td>\n\
		<td class=\"example\">112		</td>\n\
		<td>\n\
ControlPointCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siControlPointID\"> </a>siControlPointID		</td>\n\
		<td class=\"example\">14		</td>\n\
		<td>\n\
ControlPoint object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomOperatorID\"> </a>siCustomOperatorID		</td>\n\
		<td class=\"example\">128		</td>\n\
		<td>\n\
CustomOperator object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomPrimitiveID\"> </a>siCustomPrimitiveID		</td>\n\
		<td class=\"example\">251		</td>\n\
		<td>\n\
CustomPrimitive object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomPrimitiveContextID\"> </a>siCustomPrimitiveContextID		</td>\n\
		<td class=\"example\">252		</td>\n\
		<td>\n\
CustomPrimitiveContext object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siCustomPropertyID\"> </a>siCustomPropertyID		</td>\n\
		<td class=\"example\">61		</td>\n\
		<td>\n\
CustomProperty object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDataSourceID\"> </a>siDataSourceID		</td>\n\
		<td class=\"example\">104		</td>\n\
		<td>\n\
DataSource object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeltaID\"> </a>siDeltaID		</td>\n\
		<td class=\"example\">182		</td>\n\
		<td>\n\
Delta object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDesktopID\"> </a>siDesktopID		</td>\n\
		<td class=\"example\">130		</td>\n\
		<td>\n\
Desktop object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeviceCollectionID\"> </a>siDeviceCollectionID		</td>\n\
		<td class=\"example\">108		</td>\n\
		<td>\n\
Device collection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDeviceID\"> </a>siDeviceID		</td>\n\
		<td class=\"example\">109		</td>\n\
		<td>\n\
Device object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDictionaryID\"> </a>siDictionaryID		</td>\n\
		<td class=\"example\">29		</td>\n\
		<td>\n\
Dictionary object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siDirectedID\"> </a>siDirectedID		</td>\n\
		<td class=\"example\">79		</td>\n\
		<td>\n\
Directed object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEdgeCollectionID\"> </a>siEdgeCollectionID		</td>\n\
		<td class=\"example\">101		</td>\n\
		<td>\n\
EdgeCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEdgeID\"> </a>siEdgeID		</td>\n\
		<td class=\"example\">100		</td>\n\
		<td>\n\
Edge object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvelopeID\"> </a>siEnvelopeID		</td>\n\
		<td class=\"example\">54		</td>\n\
		<td>\n\
Envelope object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEnvelopeWeightID\"> </a>siEnvelopeWeightID		</td>\n\
		<td class=\"example\">168		</td>\n\
		<td>\n\
EnvelopeWeight property object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siEventInfoID\"> </a>siEventInfoID		</td>\n\
		<td class=\"example\">30		</td>\n\
		<td>\n\
EventInfo object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siExpressionID\"> </a>siExpressionID		</td>\n\
		<td class=\"example\">49		</td>\n\
		<td>\n\
Expression object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFacetCollectionID\"> </a>siFacetCollectionID		</td>\n\
		<td class=\"example\">97		</td>\n\
		<td>\n\
FacetCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFacetID\"> </a>siFacetID		</td>\n\
		<td class=\"example\">11		</td>\n\
		<td>\n\
Facet object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFactoryID\"> </a>siFactoryID		</td>\n\
		<td class=\"example\">158		</td>\n\
		<td>\n\
Factory object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFCurveID\"> </a>siFCurveID		</td>\n\
		<td class=\"example\">31		</td>\n\
		<td>\n\
FCurve object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFCurveKeyID\"> </a>siFCurveKeyID		</td>\n\
		<td class=\"example\">33		</td>\n\
		<td>\n\
FCurveKey object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileBrowserID\"> </a>siFileBrowserID		</td>\n\
		<td class=\"example\">34		</td>\n\
		<td>\n\
FileBrowser object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFileReferenceID\"> </a>siFileReferenceID		</td>\n\
		<td class=\"example\">171		</td>\n\
		<td>\n\
X3DObject object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFilterID\"> </a>siFilterID		</td>\n\
		<td class=\"example\">154		</td>\n\
		<td>\n\
Filter object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFramebufferID\"> </a>siFramebufferID		</td>\n\
		<td class=\"example\">189		</td>\n\
		<td>\n\
Framebuffer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFxOperatorID\"> </a>siFxOperatorID		</td>\n\
		<td class=\"example\">90		</td>\n\
		<td>\n\
FxOperator object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siFxTreeID\"> </a>siFxTreeID		</td>\n\
		<td class=\"example\">89		</td>\n\
		<td>\n\
FxTree object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeometryAccessorID\"> </a>siGeometryAccessorID		</td>\n\
		<td class=\"example\">167		</td>\n\
		<td>\n\
Geometry accessor object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGeometryID\"> </a>siGeometryID		</td>\n\
		<td class=\"example\">22		</td>\n\
		<td>\n\
Geometry object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGraphicDriverID\"> </a>siGraphicDriverID		</td>\n\
		<td class=\"example\">229		</td>\n\
		<td>\n\
Graphic Driver object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGraphicSequencerContextID\"> </a>siGraphicSequencerContextID		</td>\n\
		<td class=\"example\">161		</td>\n\
		<td>\n\
Graphic Sequencer Core id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGridDataID\"> </a>siGridDataID		</td>\n\
		<td class=\"example\">125		</td>\n\
		<td>\n\
GridData object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGridWidgetID\"> </a>siGridWidgetID		</td>\n\
		<td class=\"example\">166		</td>\n\
		<td>\n\
GridWidget object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siGroupID\"> </a>siGroupID		</td>\n\
		<td class=\"example\">68		</td>\n\
		<td>\n\
Group object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHairGeometryID\"> </a>siHairGeometryID		</td>\n\
		<td class=\"example\">230		</td>\n\
		<td>\n\
HairGeometry object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHairPrimitiveID\"> </a>siHairPrimitiveID		</td>\n\
		<td class=\"example\">174		</td>\n\
		<td>\n\
HairPrimitive object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareShaderContextID\"> </a>siHardwareShaderContextID		</td>\n\
		<td class=\"example\">208		</td>\n\
		<td>\n\
Hardware Shader Context Object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siHardwareSurfaceID\"> </a>siHardwareSurfaceID		</td>\n\
		<td class=\"example\">228		</td>\n\
		<td>\n\
HardwareSurface object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICEAttributeID\"> </a>siICEAttributeID		</td>\n\
		<td class=\"example\">205		</td>\n\
		<td>\n\
ICEAttribute object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICECompoundNodeID\"> </a>siICECompoundNodeID		</td>\n\
		<td class=\"example\">195		</td>\n\
		<td>\n\
ICECompoundNode object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICEDataModifierNodeID\"> </a>siICEDataModifierNodeID		</td>\n\
		<td class=\"example\">202		</td>\n\
		<td>\n\
ICEDataModifierNode object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICEDataProviderNodeID\"> </a>siICEDataProviderNodeID		</td>\n\
		<td class=\"example\">201		</td>\n\
		<td>\n\
ICEDataProviderNode object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContainerID\"> </a>siICENodeContainerID		</td>\n\
		<td class=\"example\">198		</td>\n\
		<td>\n\
ICENodeContainer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeContextID\"> </a>siICENodeContextID		</td>\n\
		<td class=\"example\">204		</td>\n\
		<td>\n\
ICENodeContext object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeDefID\"> </a>siICENodeDefID		</td>\n\
		<td class=\"example\">203		</td>\n\
		<td>\n\
ICENodeDef object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeID\"> </a>siICENodeID		</td>\n\
		<td class=\"example\">194		</td>\n\
		<td>\n\
ICENode object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeInputPortID\"> </a>siICENodeInputPortID		</td>\n\
		<td class=\"example\">199		</td>\n\
		<td>\n\
ICENodeInputPort object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodeOutputPortID\"> </a>siICENodeOutputPortID		</td>\n\
		<td class=\"example\">200		</td>\n\
		<td>\n\
ICENodeOutputPort object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICENodePortID\"> </a>siICENodePortID		</td>\n\
		<td class=\"example\">196		</td>\n\
		<td>\n\
ICENodePort object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siICETreeID\"> </a>siICETreeID		</td>\n\
		<td class=\"example\">197		</td>\n\
		<td>\n\
ICETree object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageClipID\"> </a>siImageClipID		</td>\n\
		<td class=\"example\">50		</td>\n\
		<td>\n\
ImageClip object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siImageID\"> </a>siImageID		</td>\n\
		<td class=\"example\">35		</td>\n\
		<td>\n\
Image object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siInputPortID\"> </a>siInputPortID		</td>\n\
		<td class=\"example\">38		</td>\n\
		<td>\n\
InputPort object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siJointID\"> </a>siJointID		</td>\n\
		<td class=\"example\">62		</td>\n\
		<td>\n\
Joint object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKinematicsID\"> </a>siKinematicsID		</td>\n\
		<td class=\"example\">63		</td>\n\
		<td>\n\
Kinematics object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKinematicStateID\"> </a>siKinematicStateID		</td>\n\
		<td class=\"example\">86		</td>\n\
		<td>\n\
KinematicState object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siKnotCollectionID\"> </a>siKnotCollectionID		</td>\n\
		<td class=\"example\">111		</td>\n\
		<td>\n\
KnotCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLayerID\"> </a>siLayerID		</td>\n\
		<td class=\"example\">69		</td>\n\
		<td>\n\
Layer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLayoutID\"> </a>siLayoutID		</td>\n\
		<td class=\"example\">131		</td>\n\
		<td>\n\
Layout object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLibraryID\"> </a>siLibraryID		</td>\n\
		<td class=\"example\">164		</td>\n\
		<td>\n\
Library id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightID\"> </a>siLightID		</td>\n\
		<td class=\"example\">81		</td>\n\
		<td>\n\
Light object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siLightRigID\"> </a>siLightRigID		</td>\n\
		<td class=\"example\">85		</td>\n\
		<td>\n\
LightRigobject id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMappedItemID\"> </a>siMappedItemID		</td>\n\
		<td class=\"example\">36		</td>\n\
		<td>\n\
MappedItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialID\"> </a>siMaterialID		</td>\n\
		<td class=\"example\">64		</td>\n\
		<td>\n\
Material object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMaterialLibraryID\"> </a>siMaterialLibraryID		</td>\n\
		<td class=\"example\">173		</td>\n\
		<td>\n\
MaterialLibrary id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMemoCameraID\"> </a>siMemoCameraID		</td>\n\
		<td class=\"example\">238		</td>\n\
		<td>\n\
MemoCamera object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMemoCameraCollectionID\"> </a>siMemoCameraCollectionID		</td>\n\
		<td class=\"example\">239		</td>\n\
		<td>\n\
MemoCameraCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuID\"> </a>siMenuID		</td>\n\
		<td class=\"example\">149		</td>\n\
		<td>\n\
Menu object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMenuItemID\"> </a>siMenuItemID		</td>\n\
		<td class=\"example\">150		</td>\n\
		<td>\n\
MenuItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMeshBuilderID\"> </a>siMeshBuilderID		</td>\n\
		<td class=\"example\">169		</td>\n\
		<td>\n\
MeshBuilder object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMetaShaderRendererDefID\"> </a>siMetaShaderRendererDefID		</td>\n\
		<td class=\"example\">214		</td>\n\
		<td>\n\
MetaShaderRendererDef object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siMixerID\"> </a>siMixerID		</td>\n\
		<td class=\"example\">163		</td>\n\
		<td>\n\
Mixer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siModelID\"> </a>siModelID		</td>\n\
		<td class=\"example\">74		</td>\n\
		<td>\n\
Model object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNestedFCurveID\"> </a>siNestedFCurveID		</td>\n\
		<td class=\"example\">32		</td>\n\
		<td>\n\
NestedFCurve object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNullID\"> </a>siNullID		</td>\n\
		<td class=\"example\">82		</td>\n\
		<td>\n\
Null object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsCurveCollectionID\"> </a>siNurbsCurveCollectionID		</td>\n\
		<td class=\"example\">113		</td>\n\
		<td>\n\
NurbsCurveCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsCurveControlPointID\"> </a>siNurbsCurveControlPointID		</td>\n\
		<td class=\"example\">15		</td>\n\
		<td>\n\
NurbsCurveControlPoint object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsCurveID\"> </a>siNurbsCurveID		</td>\n\
		<td class=\"example\">18		</td>\n\
		<td>\n\
NurbsCurve object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsCurveListControlPointID\"> </a>siNurbsCurveListControlPointID		</td>\n\
		<td class=\"example\">16		</td>\n\
		<td>\n\
NurbsCurveListControlPoint object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsCurveListID\"> </a>siNurbsCurveListID		</td>\n\
		<td class=\"example\">24		</td>\n\
		<td>\n\
NurbsCurveList object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsSampleCollectionID\"> </a>siNurbsSampleCollectionID		</td>\n\
		<td class=\"example\">115		</td>\n\
		<td>\n\
NurbsSampleCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsSampleID\"> </a>siNurbsSampleID		</td>\n\
		<td class=\"example\">20		</td>\n\
		<td>\n\
NurbsSample object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsSurfaceCollectionID\"> </a>siNurbsSurfaceCollectionID		</td>\n\
		<td class=\"example\">114		</td>\n\
		<td>\n\
NurbsSurfaceCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsSurfaceControlPointID\"> </a>siNurbsSurfaceControlPointID		</td>\n\
		<td class=\"example\">17		</td>\n\
		<td>\n\
NurbsSurfaceControlPoint object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsSurfaceID\"> </a>siNurbsSurfaceID		</td>\n\
		<td class=\"example\">12		</td>\n\
		<td>\n\
NurbsSurfaceFace object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siNurbsSurfaceMeshID\"> </a>siNurbsSurfaceMeshID		</td>\n\
		<td class=\"example\">23		</td>\n\
		<td>\n\
NurbsSurfaceMesh object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siObjectID\"> </a>siObjectID		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Generic object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOGLLightID\"> </a>siOGLLightID		</td>\n\
		<td class=\"example\">4		</td>\n\
		<td>\n\
OGLLight object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOGLMaterialID\"> </a>siOGLMaterialID		</td>\n\
		<td class=\"example\">2		</td>\n\
		<td>\n\
OGLMaterial object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOGLTextureID\"> </a>siOGLTextureID		</td>\n\
		<td class=\"example\">3		</td>\n\
		<td>\n\
OGLTexture object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOperatorContextID\"> </a>siOperatorContextID		</td>\n\
		<td class=\"example\">178		</td>\n\
		<td>\n\
Operator context object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOperatorID\"> </a>siOperatorID		</td>\n\
		<td class=\"example\">53		</td>\n\
		<td>\n\
Operator object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOutputPortID\"> </a>siOutputPortID		</td>\n\
		<td class=\"example\">106		</td>\n\
		<td>\n\
OuptputPort object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siOverrideID\"> </a>siOverrideID		</td>\n\
		<td class=\"example\">207		</td>\n\
		<td>\n\
Override object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParamDefID\"> </a>siParamDefID		</td>\n\
		<td class=\"example\">157		</td>\n\
		<td>\n\
ParamDef object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParameterID\"> </a>siParameterID		</td>\n\
		<td class=\"example\">44		</td>\n\
		<td>\n\
Parameter object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleAttributeID\"> </a>siParticleAttributeID		</td>\n\
		<td class=\"example\">124		</td>\n\
		<td>\n\
ParticleAttribute object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleCloudID\"> </a>siParticleCloudID		</td>\n\
		<td class=\"example\">73		</td>\n\
		<td>\n\
ParticleCloud object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleCloudPrimitiveID\"> </a>siParticleCloudPrimitiveID		</td>\n\
		<td class=\"example\">56		</td>\n\
		<td>\n\
ParticleCloudPrimitive object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleID\"> </a>siParticleID		</td>\n\
		<td class=\"example\">118		</td>\n\
		<td>\n\
Particle object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siParticleTypeID\"> </a>siParticleTypeID		</td>\n\
		<td class=\"example\">123		</td>\n\
		<td>\n\
ParticleType object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPartitionID\"> </a>siPartitionID		</td>\n\
		<td class=\"example\">206		</td>\n\
		<td>\n\
Partition object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPassContainerID\"> </a>siPassContainerID		</td>\n\
		<td class=\"example\">186		</td>\n\
		<td>\n\
PassContainer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPassID\"> </a>siPassID		</td>\n\
		<td class=\"example\">70		</td>\n\
		<td>\n\
Pass object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPluginID\"> </a>siPluginID		</td>\n\
		<td class=\"example\">151		</td>\n\
		<td>\n\
Plugin object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPluginItemID\"> </a>siPluginItemID		</td>\n\
		<td class=\"example\">152		</td>\n\
		<td>\n\
PluginItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPluginRegistrarID\"> </a>siPluginRegistrarID		</td>\n\
		<td class=\"example\">153		</td>\n\
		<td>\n\
PluginRegistrar object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointCloudID\"> </a>siPointCloudID		</td>\n\
		<td class=\"example\">179		</td>\n\
		<td>\n\
PointCloud object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointCloudGeometryID\"> </a>siPointCloudGeometryID		</td>\n\
		<td class=\"example\">231		</td>\n\
		<td>\n\
PointCloudGeometry object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointCollectionID\"> </a>siPointCollectionID		</td>\n\
		<td class=\"example\">95		</td>\n\
		<td>\n\
PointCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointID\"> </a>siPointID		</td>\n\
		<td class=\"example\">13		</td>\n\
		<td>\n\
Point object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPointLocatorDataID\"> </a>siPointLocatorDataID		</td>\n\
		<td class=\"example\">176		</td>\n\
		<td>\n\
PointLocatorData object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolygonFaceCollectionID\"> </a>siPolygonFaceCollectionID		</td>\n\
		<td class=\"example\">103		</td>\n\
		<td>\n\
PolygonFaceCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolygonFaceID\"> </a>siPolygonFaceID		</td>\n\
		<td class=\"example\">102		</td>\n\
		<td>\n\
PolygonFace object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolygonMeshID\"> </a>siPolygonMeshID		</td>\n\
		<td class=\"example\">25		</td>\n\
		<td>\n\
PolygonMesh object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolygonNodeCollectionID\"> </a>siPolygonNodeCollectionID		</td>\n\
		<td class=\"example\">94		</td>\n\
		<td>\n\
PolygonNodeCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPolygonNodeID\"> </a>siPolygonNodeID		</td>\n\
		<td class=\"example\">21		</td>\n\
		<td>\n\
PolygonNode object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPortGroupID\"> </a>siPortGroupID		</td>\n\
		<td class=\"example\">129		</td>\n\
		<td>\n\
PortGroup object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPortID\"> </a>siPortID		</td>\n\
		<td class=\"example\">37		</td>\n\
		<td>\n\
Port object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPPGEventContextID\"> </a>siPPGEventContextID		</td>\n\
		<td class=\"example\">139		</td>\n\
		<td>\n\
PPGEventContext id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPPGItemID\"> </a>siPPGItemID		</td>\n\
		<td class=\"example\">121		</td>\n\
		<td>\n\
PPGItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPPGLayoutID\"> </a>siPPGLayoutID		</td>\n\
		<td class=\"example\">120		</td>\n\
		<td>\n\
PPGLayout object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPreferencesID\"> </a>siPreferencesID		</td>\n\
		<td class=\"example\">122		</td>\n\
		<td>\n\
Preferences object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPrimitiveID\"> </a>siPrimitiveID		</td>\n\
		<td class=\"example\">55		</td>\n\
		<td>\n\
Primitive object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProgressBarID\"> </a>siProgressBarID		</td>\n\
		<td class=\"example\">156		</td>\n\
		<td>\n\
ProgressBar object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProjectID\"> </a>siProjectID		</td>\n\
		<td class=\"example\">46		</td>\n\
		<td>\n\
Project object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProjectItemID\"> </a>siProjectItemID		</td>\n\
		<td class=\"example\">47		</td>\n\
		<td>\n\
ProjectItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPropertyID\"> </a>siPropertyID		</td>\n\
		<td class=\"example\">57		</td>\n\
		<td>\n\
Property object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siProxyParameterID\"> </a>siProxyParameterID		</td>\n\
		<td class=\"example\">107		</td>\n\
		<td>\n\
Proxy Parameter object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siPickBufferID\"> </a>siPickBufferID		</td>\n\
		<td class=\"example\">237		</td>\n\
		<td>\n\
PickBuffer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderChannelID\"> </a>siRenderChannelID		</td>\n\
		<td class=\"example\">187		</td>\n\
		<td>\n\
RenderChannel object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRendererContextID\"> </a>siRendererContextID		</td>\n\
		<td class=\"example\">190		</td>\n\
		<td>\n\
RendererContext object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRendererID\"> </a>siRendererID		</td>\n\
		<td class=\"example\">191		</td>\n\
		<td>\n\
Renderer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderHairAccessorID\"> </a>siRenderHairAccessorID		</td>\n\
		<td class=\"example\">175		</td>\n\
		<td>\n\
RenderHairAccessor object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRenderTreeNodeID\"> </a>siRenderTreeNodeID		</td>\n\
		<td class=\"example\">222		</td>\n\
		<td>\n\
RenderTreeNode object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRigID\"> </a>siRigID		</td>\n\
		<td class=\"example\">83		</td>\n\
		<td>\n\
Rig object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRigidBodyAccessorID\"> </a>siRigidBodyAccessorID		</td>\n\
		<td class=\"example\">180		</td>\n\
		<td>\n\
RigidBodyAccessor object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siRigidConstraintAccessorID\"> </a>siRigidConstraintAccessorID		</td>\n\
		<td class=\"example\">181		</td>\n\
		<td>\n\
RigidConstraintAccessor object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSampleCollectionID\"> </a>siSampleCollectionID		</td>\n\
		<td class=\"example\">93		</td>\n\
		<td>\n\
SampleCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSampleID\"> </a>siSampleID		</td>\n\
		<td class=\"example\">19		</td>\n\
		<td>\n\
Sample object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSceneID\"> </a>siSceneID		</td>\n\
		<td class=\"example\">51		</td>\n\
		<td>\n\
Scene object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSceneItemID\"> </a>siSceneItemID		</td>\n\
		<td class=\"example\">66		</td>\n\
		<td>\n\
SceneItem object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSceneRenderPropertyID\"> </a>siSceneRenderPropertyID		</td>\n\
		<td class=\"example\">188		</td>\n\
		<td>\n\
SceneRenderProperty object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSchematicID\"> </a>siSchematicID		</td>\n\
		<td class=\"example\">233		</td>\n\
		<td>\n\
Schematic object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSchematicNodeID\"> </a>siSchematicNodeID		</td>\n\
		<td class=\"example\">232		</td>\n\
		<td>\n\
SchematicNode object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSchematicNodeCollectionID\"> </a>siSchematicNodeCollectionID		</td>\n\
		<td class=\"example\">234		</td>\n\
		<td>\n\
SchematicNodeCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSegmentID\"> </a>siSegmentID		</td>\n\
		<td class=\"example\">26		</td>\n\
		<td>\n\
Segment object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSelectionID\"> </a>siSelectionID		</td>\n\
		<td class=\"example\">39		</td>\n\
		<td>\n\
Selection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderID\"> </a>siShaderID		</td>\n\
		<td class=\"example\">52		</td>\n\
		<td>\n\
Shader object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderArrayItemParameterID\"> </a>siShaderArrayItemParameterID		</td>\n\
		<td class=\"example\">219		</td>\n\
		<td>\n\
ShaderArrayItemParameter object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderArrayParamDefID\"> </a>siShaderArrayParamDefID		</td>\n\
		<td class=\"example\">217		</td>\n\
		<td>\n\
ShaderArrayParamDef object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderArrayParameterID\"> </a>siShaderArrayParameterID		</td>\n\
		<td class=\"example\">220		</td>\n\
		<td>\n\
ShaderArrayParameter object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderballOptionsID\"> </a>siShaderballOptionsID		</td>\n\
		<td class=\"example\">212		</td>\n\
		<td>\n\
ShaderballOptions object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderBaseID\"> </a>siShaderBaseID		</td>\n\
		<td class=\"example\">223		</td>\n\
		<td>\n\
ShaderBase object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderCommentID\"> </a>siShaderCommentID		</td>\n\
		<td class=\"example\">226		</td>\n\
		<td>\n\
ShaderComment object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderCompoundID\"> </a>siShaderCompoundID		</td>\n\
		<td class=\"example\">225		</td>\n\
		<td>\n\
ShaderCompound object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderCompoundParameterID\"> </a>siShaderCompoundParameterID		</td>\n\
		<td class=\"example\">221		</td>\n\
		<td>\n\
ShaderCompoundParameter object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderContainerID\"> </a>siShaderContainerID		</td>\n\
		<td class=\"example\">224		</td>\n\
		<td>\n\
ShaderContainer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDefID\"> </a>siShaderDefID		</td>\n\
		<td class=\"example\">215		</td>\n\
		<td>\n\
ShaderDef object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderDefManagerID\"> </a>siShaderDefManagerID		</td>\n\
		<td class=\"example\">227		</td>\n\
		<td>\n\
ShaderDefManager object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderParamDefID\"> </a>siShaderParamDefID		</td>\n\
		<td class=\"example\">210		</td>\n\
		<td>\n\
ShaderParamDef object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderParamDefContainerID\"> </a>siShaderParamDefContainerID		</td>\n\
		<td class=\"example\">213		</td>\n\
		<td>\n\
ShaderParamDefContainer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderParamDefOptionsID\"> </a>siShaderParamDefOptionsID		</td>\n\
		<td class=\"example\">211		</td>\n\
		<td>\n\
ShaderParamDefOptions object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderParameterID\"> </a>siShaderParameterID		</td>\n\
		<td class=\"example\">218		</td>\n\
		<td>\n\
ShaderParameter object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShaderStructParamDefID\"> </a>siShaderStructParamDefID		</td>\n\
		<td class=\"example\">216		</td>\n\
		<td>\n\
ShaderStructParamDef object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeClipID\"> </a>siShapeClipID		</td>\n\
		<td class=\"example\">9		</td>\n\
		<td>\n\
ShapeClip object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siShapeKeyID\"> </a>siShapeKeyID		</td>\n\
		<td class=\"example\">142		</td>\n\
		<td>\n\
ShapeKey object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSimulationEnvironmentID\"> </a>siSimulationEnvironmentID		</td>\n\
		<td class=\"example\">165		</td>\n\
		<td>\n\
SimulationEnvironment object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSIObjectID\"> </a>siSIObjectID		</td>\n\
		<td class=\"example\">1		</td>\n\
		<td>\n\
SIObject object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSourceID\"> </a>siSourceID		</td>\n\
		<td class=\"example\">143		</td>\n\
		<td>\n\
Source object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStaticKinematicStateID\"> </a>siStaticKinematicStateID		</td>\n\
		<td class=\"example\">65		</td>\n\
		<td>\n\
StaticKinematicState object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siStaticSourceID\"> </a>siStaticSourceID		</td>\n\
		<td class=\"example\">40		</td>\n\
		<td>\n\
StaticSource object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siSubComponentID\"> </a>siSubComponentID		</td>\n\
		<td class=\"example\">10		</td>\n\
		<td>\n\
SubComponent object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureID\"> </a>siTextureID		</td>\n\
		<td class=\"example\">116		</td>\n\
		<td>\n\
Texture object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureLayerID\"> </a>siTextureLayerID		</td>\n\
		<td class=\"example\">126		</td>\n\
		<td>\n\
TextureLayer object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTextureLayerPortID\"> </a>siTextureLayerPortID		</td>\n\
		<td class=\"example\">127		</td>\n\
		<td>\n\
TextureLayerPort object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeControlID\"> </a>siTimeControlID		</td>\n\
		<td class=\"example\">144		</td>\n\
		<td>\n\
TimeControl object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeTransportID\"> </a>siTimeTransportID		</td>\n\
		<td class=\"example\">192		</td>\n\
		<td>\n\
TimeTransport object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimeTransportContextID\"> </a>siTimeTransportContextID		</td>\n\
		<td class=\"example\">193		</td>\n\
		<td>\n\
TimeTransportContext object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTimerEventID\"> </a>siTimerEventID		</td>\n\
		<td class=\"example\">185		</td>\n\
		<td>\n\
TimerEvent object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siToolContextID\"> </a>siToolContextID		</td>\n\
		<td class=\"example\">236		</td>\n\
		<td>\n\
ToolContext object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTrackID\"> </a>siTrackID		</td>\n\
		<td class=\"example\">87		</td>\n\
		<td>\n\
Track object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTransitionID\"> </a>siTransitionID		</td>\n\
		<td class=\"example\">145		</td>\n\
		<td>\n\
Transition object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTriangleCollectionID\"> </a>siTriangleCollectionID		</td>\n\
		<td class=\"example\">91		</td>\n\
		<td>\n\
TriangleCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTriangleID\"> </a>siTriangleID		</td>\n\
		<td class=\"example\">41		</td>\n\
		<td>\n\
Triangle object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTriangleVertexCollectionID\"> </a>siTriangleVertexCollectionID		</td>\n\
		<td class=\"example\">92		</td>\n\
		<td>\n\
TriangleVertexCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siTriangleVertexID\"> </a>siTriangleVertexID		</td>\n\
		<td class=\"example\">42		</td>\n\
		<td>\n\
TriangleVertex object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIObjectID\"> </a>siUIObjectID		</td>\n\
		<td class=\"example\">132		</td>\n\
		<td>\n\
UIObject object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIPersistableID\"> </a>siUIPersistableID		</td>\n\
		<td class=\"example\">133		</td>\n\
		<td>\n\
UIPersistable object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUIToolkitID\"> </a>siUIToolkitID		</td>\n\
		<td class=\"example\">155		</td>\n\
		<td>\n\
UIToolkit object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUnknownClassID\"> </a>siUnknownClassID		</td>\n\
		<td class=\"example\">0		</td>\n\
		<td>\n\
Unknown object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUpdateContextID\"> </a>siUpdateContextID		</td>\n\
		<td class=\"example\">43		</td>\n\
		<td>\n\
UpdateContext object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUserDataBlobID\"> </a>siUserDataBlobID		</td>\n\
		<td class=\"example\">117		</td>\n\
		<td>\n\
UserDataBlob object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUserDataMapID\"> </a>siUserDataMapID		</td>\n\
		<td class=\"example\">88		</td>\n\
		<td>\n\
UserDataMap object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUserGroupID\"> </a>siUserGroupID		</td>\n\
		<td class=\"example\">71		</td>\n\
		<td>\n\
UserGroup object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siUVPropertyID\"> </a>siUVPropertyID		</td>\n\
		<td class=\"example\">235		</td>\n\
		<td>\n\
UVProperty property object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siValueMapID\"> </a>siValueMapID		</td>\n\
		<td class=\"example\">209		</td>\n\
		<td>\n\
ValueMap object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVertexCollectionID\"> </a>siVertexCollectionID		</td>\n\
		<td class=\"example\">99		</td>\n\
		<td>\n\
VertexCollection object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siVertexID\"> </a>siVertexID		</td>\n\
		<td class=\"example\">98		</td>\n\
		<td>\n\
Vertex object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siViewContextID\"> </a>siViewContextID		</td>\n\
		<td class=\"example\">137		</td>\n\
		<td>\n\
X3DObject object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siViewID\"> </a>siViewID		</td>\n\
		<td class=\"example\">134		</td>\n\
		<td>\n\
View object id.		</td>\n\
	</tr>\n\
	<tr>\n\
		<td class=\"name\"><a name=\"siX3DObjectID\"> </a>siX3DObjectID		</td>\n\
		<td class=\"example\">72		</td>\n\
		<td>\n\
X3DObject object id.		</td>\n\
	</tr>\n\
</table>\n\
</div>\n\
\n\
<h3>Applies To</h3>\n\
<div><p><a href=\"#!/url=./si_om/CustomOperator.AddInputPortByClassID.html\">CustomOperator.AddInputPortByClassID</a> <a href=\"#!/url=./si_om/CustomOperator.AddIOPortByClassID.html\">CustomOperator.AddIOPortByClassID</a> <a href=\"#!/url=./si_om/CustomOperator.AddOutputPortByClassID.html\">CustomOperator.AddOutputPortByClassID</a> <a href=\"#!/url=./si_om/SIObject.IsClassOf.html\">SIObject.IsClassOf</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html#GetClassID\">CRef::GetClassID</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CRef.html#IsA\">CRef::IsA</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddInputPortByClassID\">CustomOperator::AddInputPortByClassID</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddIOPortByClassID\">CustomOperator::AddIOPortByClassID</a> <a href=\"#!/url=./si_cpp/classXSI_1_1CustomOperator.html#AddOutputPortByClassID\">CustomOperator::AddOutputPortByClassID</a></p></div>\n\
\n\
      <div class=\"footer-block\"><a href=\"../html/ac.cmtdialog.htm\" class=\"comments-anchor\" target=\"_blank\"><span class=\"comments-link\">Please send us your comment about this page</span></a></div><br /></div>\n\
   </div></body>\n\
</html>\n\
";