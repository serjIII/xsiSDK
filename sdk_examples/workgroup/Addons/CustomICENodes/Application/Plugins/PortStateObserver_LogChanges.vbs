' PortStateObserver_LogChanges
' Initial code generated by Softimage SDK Wizard
' Executed Fri Feb 27 11:53:51 EST 2009 by belzilm
' 
' Tip: To add a command to this plug-in, right-click in the 
' script editor and choose Tools > Add Command.
' 
' Tip: To get help on a callback, highlight the callback name
' (for example, "Init", "Define", or "Execute") and press F1.

function XSILoadPlugin( in_reg )
	in_reg.Author = "belzilm"
	in_reg.Name = "PortStateObserver_LogChanges"
	in_reg.Major = 1
	in_reg.Minor = 0

	in_reg.RegisterCommand "PortStateObserver_LogChanges","PortStateObserver_LogChanges"
	in_reg.RegisterMenu siMenuMainTopLevelID,"PortStateObserver",false,false
	'RegistrationInsertionPoint - do not remove this line

	XSILoadPlugin = true
end function

function PortStateObserver_LogChanges_Init( in_ctxt )
	dim oCmd
	set oCmd = in_ctxt.Source
	oCmd.Description = ""
	oCmd.ReturnValue = true
	oCmd.SetFlag siNoLogging

	' Store the sample scene path to load
	set plugin = Application.Plugins( "PortStateObserver_LogChanges" )	
	SetGlobal "PortStateObserver scene", XSIUtils.ResolvePath( Application.InstallationPath( plugin.Origin ) & "/CustomICENodes/Data/Project/Scenes/PortStateObserver.scn" )
	
	PortStateObserver_LogChanges_Init = true
end function

function PortStateObserver_LogChanges_Execute(  )
	
	OpenScene GetGlobal( "PortStateObserver scene" ), false
	
	LogMessage ">>>>>>>>>>>>>>>>>> At loading time all ports are dirty"

	SetValue "cylinder.polymsh.ICETree.Port_State_Observer.LogChanges", True
	Refresh
	SetValue "cylinder.polymsh.ICETree.Port_State_Observer.LogChanges", False

	LogMessage ">>>>>>>>>>>>>>>>>> Test type changes (port & geometry)"

	ConnectICENodes "cylinder.polymsh.ICETree.GroupGeometryNode.geometry1", "cylinder.polymsh.ICETree.SceneReferenceNode[6].value"
	ConnectICENodes "cylinder.polymsh.ICETree.Port_State_Observer.NurbsCurve", "cylinder.polymsh.ICETree.SceneReferenceNode[3].value"
	ConnectICENodes "cylinder.polymsh.ICETree.Port_State_Observer.Data", "cylinder.polymsh.ICETree.3DVectorNode.result"

	SetValue "cylinder.polymsh.ICETree.Port_State_Observer.LogChanges", True
	Refresh
	SetValue "cylinder.polymsh.ICETree.Port_State_Observer.LogChanges", False

	LogMessage ">>>>>>>>>>>>>>>>>> Test data changes, position changes, topology changes and transfo changes"

	DisconnectICENodePort "cylinder.polymsh.ICETree.3DVectorNode.value"
	SetValue "cylinder.polymsh.ICETree.3DVectorNode.value_y", 4.138
	SelectObj "torus", , True
	SetSelFilter "Polygon"
	SelectGeometryComponents "torus.poly[32,33,37-39,44-46]"
	ApplyTopoOp "DeleteComponent", "torus.poly[32,33,37-39,44-46]", siUnspecified, siPersistentOperation
	SelectObj "grid", , True
	SetSelFilter "Vertex"
	SelectGeometryComponents "grid.pnt[112]"
	Translate , 0.611387015991916, -0.180104325097856, -0.416560246962716, siRelative, siView, siObj, siXYZ, , , , , , , , , , 0
	SelectObj "cube", , True
	Translate , -7.03139239645552, 0, 4.35628792178066, siRelative, siGlobal, siObj, siXYZ, , , , , , , , , , 0
	SaveKey "cylinder.polymsh.ICETree.3DVectorNode.value_x", 1
	SaveKey "sphere.pointcloud.geom.subdivu", 1
	SetValue "PlayControl.Key", 1
	SetValue "PlayControl.Current", 1
	SetValue "cylinder.polymsh.ICETree.3DVectorNode.value_x", 6.552
	SaveKey "cylinder.polymsh.ICETree.3DVectorNode.value_x", 1
	SetValue "sphere.pointcloud.geom.subdivu", 11
	SaveKey "sphere.pointcloud.geom.subdivu", 1

	SetValue "cylinder.polymsh.ICETree.Port_State_Observer.LogChanges", True
	Refresh
	SetValue "cylinder.polymsh.ICETree.Port_State_Observer.LogChanges", False

	LogMessage ">>>>>>>>>>>>>>>>>> Test time changes (animation)"

	NextFrame

	SetValue "cylinder.polymsh.ICETree.Port_State_Observer.LogChanges", True
	Refresh
	SetValue "cylinder.polymsh.ICETree.Port_State_Observer.LogChanges", False

	PortStateObserver_LogChanges_Execute = true
end function

function PortStateObserver_Init( in_ctxt )
	dim oMenu
	set oMenu = in_ctxt.Source
	oMenu.AddCommandItem "Log Changes","PortStateObserver_LogChanges"
	PortStateObserver_LogChanges_Menu_Init = true
end function

