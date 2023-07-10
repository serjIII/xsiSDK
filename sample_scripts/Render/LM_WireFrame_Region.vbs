'//Creating the pass and applying the shader to the partition
dim WireFrame_PassName
CreatePass , "WireFrame_Pass", WireFrame_PassName
logmessage WireFrame_PassName

applyshader "$SI_HOME\DSPresets\Shaders\Material\soft3d\Toon_wire.preset", WireFrame_PassName &".Background_Objects_Partition"

'//Creating the Camera and Hiding it
Set WireFrame_CameraName = GetPrimCamera ("Camera.Preset", "WireFrame_Camera")
logmessage WireFrame_CameraName
SelectObj "WireFrame_Camera_Root", "BRANCH"
ToggleVisibility

'//have to figure out the proper way to get the camera name
SIApplyShaderToCnxPoint "$SI_HOME\DSPresets\Shaders\Lens\Cartoon.Preset", "WireFrame_Camera.camera.lensshader", , False

'//Setting Values for it to show what is needed.
SetValue "WireFrame_Camera.camera.Cartoon.ink_only", True
SetValue WireFrame_PassName &".Background_Objects_Partition.Material.Toon_wire.facet_ink", True
SetValue WireFrame_PassName &".Background_Objects_Partition.Material.Toon_wire.ink_color.red", 1.000

'//get the proper region settings in order to see something in the region 
SetValue "ViewRenderOptions.MinSamplingLevel", 0
SetValue "ViewRenderOptions.MaxSamplingLevel", 1
SetValue "ViewRenderOptions.SamplingJitter", 1
