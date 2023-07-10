/*******************************************************************************   
EvolverLipSynch.js helpers  
(c) Copyright 2012 Autodesk Ltd
*******************************************************************************/
// string
var IDS_SELECTED_OBJ_IS_NOT_MODEL = 28;
var IDS_COMMAND_CANCELLED = 1520;
var IDS_FILE_NOTFOUND = 23;
var IDS_LIPSYNC_AUDIO_IMPORT_FAILED = 1088
var IDS_LIPSYNC_CREATE_SPEECHACTION_FAILED = 1089
var IDS_LIPSYNC_PHONEME_RECOGNITION_FAILED = 1090
var IDS_LIPSYNC_MESH_RESOLUTION_NOTFOUND = 1091
var IDS_INVALID_ARG = 1020

var siArgValidity_OK = 0;
var siArgValidity_Invalid = 1;
var siArgValidity_Unspecified = 2;

function BuildTrackset(Model) {
    var Mixer = Model.Mixer;
    var TrackCompoundName = Model.Mixer.FullName
    var TrackName = "Phoneme"
    var TrackInsertPosition = null
    var PhonemeTracks = new ActiveXObject("XSI.Collection")

    //Animation Track
    var Track = AddTrack(Model, TrackCompoundName, 0, TrackName + "_Speech", TrackInsertPosition)
    PhonemeTracks.Add(Track)
    SetUserKeyword(Track, "Phoneme,Speech")

    //Audio Track
    var Track = AddTrack(Model, TrackCompoundName, 2, TrackName + "_Audio", TrackInsertPosition)
    PhonemeTracks.Add(Track)
    SetUserKeyword(Track, "Phoneme,Audio")
    return PhonemeTracks
}

////////////////////////////////////////////
///
///Parsing utilities :ReadFile
///
function ReadFile(FileName, Debug) {
    var FSO = XSIFactory.CreateActiveXObject("Scripting.FileSystemObject");
    if (!FSO.FileExists(FileName)) {
        throw new Error(siError, XSIUtils.Translate(IDS_FILE_NOTFOUND, "XSIMSGCAT", FileName));
        return; 
    }
    var F = FSO.OpenTextFile(FileName, 1);
    var FileText = F.ReadAll();
    return (FileText);
}

function FileExists(Filename) {
    var FSO = XSIFactory.CreateActiveXObject("Scripting.FileSystemObject");
    return FSO.FileExists(Filename);
}

function CreateSpeechActionAndClip(Model, SpeechActionName, ShapeKeyList, Language, AudioFileName, TextFileName, Offset, SilenceDuration) {
    //LogMessage("CreateSpeechActionAndClip", siInfo);

    // Import Audio
    var AudioSource = ImportAudio(Model, AudioFileName, null);
    if (!AudioSource) {
        throw new Error(siError, XSIUtils.Translate(IDS_LIPSYNC_AUDIO_IMPORT_FAILED, "XSIACTION2"));
        return;
    }

    // Build tracks
    var TrackSet = BuildTrackset(Model);
    var AudioClip = AddAudioClip(Model, AudioSource, null, TrackSet(1), Offset, null);
    var startoffset = Math.round(AudioClip.TimeControl.parameters("startoffset").value);
    var clipin = Math.round(AudioClip.TimeControl.parameters("clipin").value) + startoffset;
    var clipout = Math.round(AudioClip.TimeControl.parameters("clipout").value) + startoffset;
    SetValue("PlayControl.Out", clipout, null);
    SetValue("PlayControl.In", clipin - 1, null);

    var SpeechAction = CreateEvolverSpeechAction(Model, SpeechActionName, ShapeKeyList);
    if (!SpeechAction) {
        throw new Error(siError, XSIUtils.Translate(IDS_LIPSYNC_CREATE_SPEECHACTION_FAILED, "XSIACTION2"));
        DeleteObj(TrackSet);
        DeleteObj(AudioSource);
        return;
    }

    // Add Clip
    var SpeechClip = AddClip(Model, SpeechAction, null, TrackSet(0), Offset, null, null, null, null);
    SetValue(SpeechClip + ".actionclip.timectrl.clipin", clipin, null);
    SetValue(SpeechClip + ".actionclip.timectrl.clipout", clipout, null);
    //LogMessage(SpeechClip.FullName, siInfo);
    // Extract phonemes
    var Text = "";
    if (FileExists(TextFileName)) {
        Text = ReadFile(TextFileName);
        Text = Text.replace(/;/g, " ");
    }

    try {
        //LogMessage("Recognizing Phonemes", siInfo);
        if (Language == "jp")
            ExtractPhonemesToSpeechOpJapanese(SpeechClip, AudioFileName, Text, Offset, SilenceDuration);
        else
            ExtractPhonemesToSpeechOp(SpeechClip, AudioFileName, Text, Offset, SilenceDuration);

        var Clips = new ActiveXObject("XSI.Collection");
        Clips.Add(SpeechClip);
        Clips.Add(AudioClip);
        AddClipRelation(Clips, Clips, null);
    } catch (e) {
        throw new Error(siError, XSIUtils.Translate(IDS_LIPSYNC_PHONEME_RECOGNITION_FAILED, "XSIACTION2"));
        DeleteObj(SpeechAction);
        DeleteObj(TrackSet);
        DeleteObj(AudioSource);
        return;
    }

    return SpeechClip;
}

function GenerateLipSyncProc(InputObjs, AudioFileName, TextFileName, Language, Resolutions, MappingProfilePath) {

    var Offset = 0;
    var SilenceDuration = 10;
    var Model = null;

    if (Application.Interactive) {
        var inputModels = SIFilter(InputObjs, siModelFilter);
        var picked = null;
        if (inputModels && inputModels.Count > 0) {
            picked = inputModels(0);
        }

        if (picked && picked.Type == "#model") {
            Model = picked;
        }
        else{
            var button;

            var ivtRet = PickObject(XSIUtils.Translate("Select Model", "XSISCENEEXPLORER"), "");
            button = ivtRet.Item("ButtonPressed");
            picked = ivtRet.Item("PickedElement");
            if (button != 1) {
                LogMessage(XSIUtils.Translate(IDS_COMMAND_CANCELLED, "XSISCRIPTS"), siWarning);
                return;
            }
            else {
                if (picked.Type == "#model") {
                    //LogMessage("\nModel selected: " + picked);
                    Model = picked;
                }
                else {
                    throw new Error(siError, XSIUtils.Translate(IDS_SELECTED_OBJ_IS_NOT_MODEL, "XSIMSGCAT"));
                    return;
                }
            }
        }

        if (typeof (AudioFileName) == "undefined" || (typeof (AudioFileName) == "string" && AudioFileName.length == 0)) {
            var oUIToolkit = new ActiveXObject("XSI.UIToolKit");
            var oFileBrowser = oUIToolkit.FileBrowser;
            oFileBrowser.DialogTitle = "Select a file";
            oFileBrowser.InitialDirectory = XSIUtils.BuildPath(
                                Application.InstallationPath(siFactoryPath),
								"FaceRobot",
								"Data",
                                "FaceRobot",
                                "Audio");
            oFileBrowser.Filter = "Wav Files (*.wav)|*.wav||";
            oFileBrowser.ShowOpen();
            if (oFileBrowser.FilePathName != "") {
                //display info on the selected file
                //LogMessage("\nAudio file selected: " + oFileBrowser.FilePathName);
                AudioFileName = oFileBrowser.FilePathName;
            }
            else {
                LogMessage(XSIUtils.Translate(IDS_COMMAND_CANCELLED, "XSISCRIPTS"), siWarning);
                return;
            }
        }

        if (!(typeof (AudioFileName) == "string" && FileExists(AudioFileName))) {
            throw new Error(siError, XSIUtils.Translate(IDS_FILE_NOTFOUND, "XSIMSGCAT", AudioFileName));
            return;
        }

    }
    else {
        // XSIBatch mode, just return if the arguments are invalid

        var Model = null;

        if (InputObjs && InputObjs.Type == "XSICollection") {
            if (InputObjs.Count > 0) {
                var picked = InputObjs(0);
                if (picked.Type == "#model")
                    Model = picked;
            }
        }

        if (!Model){
            throw new Error(siError, XSIUtils.Translate(IDS_INVALID_ARG, "XSIMSGCAT") + " \"" + InputObjs + "\"");
            return;
        }
        

        if (!(typeof (AudioFileName) == "string" && FileExists(AudioFileName))) {
            throw new Error(siError, XSIUtils.Translate(IDS_INVALID_ARG, "XSIMSGCAT") + " \"" + AudioFileName + "\"");
            return;
        }
    }

    var validity = CheckFileNameArgumentValidity(TextFileName)
    if (validity == siArgValidity_Unspecified) {
        TextFileName = ""
    }
    else if (validity == siArgValidity_Invalid) {
        throw new Error(siError, XSIUtils.Translate(IDS_FILE_NOTFOUND, "XSIMSGCAT", TextFileName));
        return;
    }

    validity = CheckFileNameArgumentValidity(MappingProfilePath)
    if (validity == siArgValidity_Unspecified) {
        MappingProfilePath = XSIUtils.BuildPath(
            Application.InstallationPath(siFactoryPath),
            "Application", "rsrc", "DefaultPhonVisMapping.xml");

        if (!FileExists(MappingProfilePath)) {
            throw new Error(siError, XSIUtils.Translate(IDS_FILE_NOTFOUND, "XSIMSGCAT", MappingProfilePath));
            return;
        }
    }
    else if (validity == siArgValidity_Invalid) {
        throw new Error(siError, XSIUtils.Translate(IDS_FILE_NOTFOUND, "XSIMSGCAT", MappingProfilePath));
        return;
    }

    validity = CheckValueArgumentValidity(Language, "string");
    if (validity == siArgValidity_Unspecified) {
        Language = "en";
    }
    else if (validity == siArgValidity_Invalid) {
        throw new Error(siError, XSIUtils.Translate(IDS_INVALID_ARG, "XSIMSGCAT") + " \"" + Language + "\"");
        return;
    }
    else {
        Language = Language.toLowerCase();
        if (Language != "en" && Language != "jp") {
            throw new Error(siError, XSIUtils.Translate(IDS_INVALID_ARG, "XSIMSGCAT") + " \"" + Language + "\"");
            return;
        }
    }

    validity = CheckValueArgumentValidity(Resolutions, "string");
    if (validity == siArgValidity_Unspecified) {
        Resolutions = "hmlc";
    }
    else if (validity == siArgValidity_Invalid) {
        throw new Error(siError, XSIUtils.Translate(IDS_INVALID_ARG, "XSIMSGCAT") + " \"" + Resolutions + "\"");
        return;
    }
    else if (validity == siArgValidity_OK) {
        var patt = /[hmlc]+/gi;

        if (patt.test(Resolutions)==false) {
            throw new Error(siError, XSIUtils.Translate(IDS_INVALID_ARG, "XSIMSGCAT") + " \"" + Resolutions + "\"");
            return;
        }
        Resolutions = Resolutions.toLowerCase();
    }

    return CreateLipSync(Model, AudioFileName, TextFileName, Offset, Language, SilenceDuration, Resolutions, MappingProfilePath);
}

function CheckObjectArgumentValidity(arg, ExpectedType) {
    var obj = arg;
    if (typeof (arg) == "undefined" || (typeof (arg) == "string" && arg.length == 0))
        return siArgValidity_Unspecified;
    else if (typeof (arg) == "string") {
        var obj = Dictionary.GetObject(arg);
    }

    try {
        if (obj && obj.Type == ExptectedType)
            return siArgValidity_OK;
        else
            return siArgValidity_Invalid;
    }
    catch (e) {
        return siArgValidity_Invalid;
    }
}

function CheckFileNameArgumentValidity(arg) {
    if (typeof (arg) == "undefined" || (typeof (arg) == "string" && arg.length == 0))
        return siArgValidity_Unspecified;
    else if (typeof (arg) == "string") {
        if (FileExists(arg))
            return siArgValidity_OK;
        else
            return siArgValidity_Invalid;
    }

    return siArgValidity_Invalid;
}

function CheckValueArgumentValidity(arg, type) {
    if (typeof (arg) == "undefined")
        return siArgValidity_Unspecified;
    else if (typeof (arg) == type) {
        return siArgValidity_OK;
    }

    return siArgValidity_Invalid;
}

function CreateLipSync(Model, AudioFileName, TextFileName, Offset, Language, SilenceDuration, Resolutions, MappingProfilePath) {
    var RESOLUTION_ABBR = ["h", "m", "l", "c"];
    var FACEMESH_RESOLUTIONS = ["H_DDS_HighRes", "H_DDS_MidRes", "H_DDS_LowRes", "H_DDS_CrowdRes"];

    var CompactRes = "";

    for (var i = 0; i < FACEMESH_RESOLUTIONS.length; i++) {
        if (Resolutions.indexOf(RESOLUTION_ABBR[i]) != -1) {
            var FaceMeshName = Model.FullName + "." + FACEMESH_RESOLUTIONS[i];
            
            // Check if at least the face mesh exists
            var mesh = Dictionary.GetObject(FaceMeshName, false);

            if (mesh) {
                CompactRes += RESOLUTION_ABBR[i];
            }
            else {
                LogMessage(XSIUtils.Translate(IDS_LIPSYNC_MESH_RESOLUTION_NOTFOUND, "XSIACTION2", FaceMeshName), siWarning);
            }

        }
    }

    // Setup viseme sources
    var ClipList = FindBaseShapeClips(Model, CompactRes);
    var ivtReturn = SetupEvolverVisemes(Model, ClipList, MappingProfilePath);
    var ShapeKeyList = ivtReturn("KeyList");

    //LogMessage(ShapeKeyList, siInfo);
    var SpeechActionName = "EvolverSpeechAction_" + CompactRes;

    if (ShapeKeyList.Count>0) {
        var SpeechClip = CreateSpeechActionAndClip(Model, SpeechActionName, ShapeKeyList, Language, AudioFileName, TextFileName, Offset, SilenceDuration);
        //LogMessage("Speech action clip: " + SpeechClip.FullName, siInfo);
        return SpeechClip;
    }
    else {
        throw new Error(siError, XSIUtils.Translate(IDS_LIPSYNC_MESH_RESOLUTION_NOTFOUND, "XSIACTION2", Resolutions));
        return;
    }

}

function FindBaseShapeClips(Model, Resolution) {
    var mixer = Model.Mixer;
    var baseClips = null;

    var tracks = mixer.Tracks;

    for (var iTrack = 0; iTrack < tracks.Count; iTrack++) {
        var track = tracks(iTrack);
        var clips = track.Clips
        for (var iCompClip = 0; iCompClip < clips.Count; iCompClip++) {
            var compClip = clips(iCompClip);
            //logmessage(ClassName(compClip))
            if (ClassName(compClip) != "ClipContainer")
                continue;
            var shapeTracks = compClip.Tracks;
            for (var iShapeTrack = 0; iShapeTrack < shapeTracks.Count; iShapeTrack++) {
                var shapeTrack = shapeTracks(iShapeTrack);
                var shapeClips = shapeTrack.Clips;
                if (shapeClips.Count > 0) {
                    var shapeClip = shapeClips(0);
                    if (IsBaseClip(shapeClip, Resolution)) {
                        if (!baseClips)
                            baseClips = new ActiveXObject("XSI.Collection");
						//LogMessage(shapeClip);
						//LogMessage(baseClips);
                        baseClips.Add(shapeClip);
                    }
                }
            }
        }
    }

    return baseClips;
}

function IsBaseClip(Clip, Resolutions) {
    var RESOLUTION_ABBR = ["h", "m", "l", "c"];
    var BASE_PHONEMES = ["SH_CH", "UW_U", "_S_", "RRR", "UH_OO", "MPB", "AO_a", "LLL", "KG", "TD_I", "H_EST", "FV", "AE_AA"]
    var name = Clip.Name;
    for (var i = 0; i < BASE_PHONEMES.length; i++) {
        if (name.indexOf(BASE_PHONEMES[i]) != -1){
            var tokens = name.split("_");
            if (tokens.length > 0) {
                if (tokens[0].length==1 && Resolutions.indexOf(tokens[0]) != -1)
                    return true;
            }
        }
    }

    return false;
}