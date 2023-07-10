/*--------------------------------
   IsProxyParam
     - Tests if the parameter is a proxy parameter or not
--------------------------------*/
function IsProxyParam(in_oParam) 
{
   return (ClassName(in_oParam) == "ProxyParameter");
}

/*--------------------------------
   AddEmptySubCharacterKeySet
     - Tests if the parameter is a proxy parameter or not
--------------------------------*/
function AddEmptySubCharacterKeySet(in_parentCharSet, in_newName)
{

    CreateSubCharacterKeySet(in_parentCharSet.FullName, null, in_newName);
    var currCharSet = GetCurrentCharacterKeySet();
    var params = currCharSet.Parameters;
    for (var i=0; i<params.Count; i++) {
        currCharSet.RemoveParameter(params(i));
    }
    
    return currCharSet;
}

/*--------------------------------
   FindCharacterKeySetNames
     - Tests if the parameter is a proxy parameter or not
--------------------------------*/
function FindCharacterKeySetNames(in_charSetName)
{
    var stringArray = in_charSetName.split(".");   
    return stringArray;
}

/*--------------------------------
   GetMarkingSetParameters
     - From a marking set, it returns a string list of all the marking
       set parameters, that are proxy parameters.. these are the ones that
       should be added to the character key set
--------------------------------*/
function GetMarkingSetParameters(in_markingSet)
{
	var outList = new String();

	var list = in_markingSet.NestedObjects;
	for (var i=0; i<list.Count; i++) 
	{
		elem = list(i);
		if (IsProxyParam(elem)) {
			if (i > 0) {
				outList = outList + ", ";
			}
			outList = outList + elem.MasterParameter;
		}
	}

	return outList;
}

/*--------------------------------
   FindMarkingSets
    - Returns a collection of all marking sets from the rig
--------------------------------*/
function FindMarkingSets(in_object)
{
   var oAllCustomProperties = FindObjects( null, "{76332571-D242-11d0-B69C-00AA003B3EA6}" ) ;

   var oMarkingSetList = new ActiveXObject( "XSI.Collection" ) ;

   for (var i = 0; i < oAllCustomProperties.Count; i++)
   {
       var oPSet = oAllCustomProperties(i);
       if (   (oPSet.Name.indexOf("MarkingSet") >=0)
           && (in_object.Model.IsEqualTo(oPSet.Model)) )
       {
          oMarkingSetList.Add(oPSet);
       }
   }

   return oMarkingSetList;
}

/*--------------------------------
  PopulateCharacterKeySet
    - Returns a collection of all marking sets from the rig
--------------------------------*/
function PopulateCharacterKeySet(in_obj, in_charSetName, in_deleteMarkingSet, in_suffix)
{
    // find the marking sets
    var markingSets = FindMarkingSets(in_obj);
    var usedMarkingSets = new ActiveXObject("XSI.Collection");

	// loop through the marking sets that haven't been allotted yet.
    for (var i=0; i<markingSets.Count; i++) 
	{
    	var markingSet = markingSets(i);

		// if we didn't throw, then we've got ourselves a markingset
		var characterSetName = null;
        try {
    		characterSetName = markingSet.Parameters("CharacterKeySet").Value;
    	} catch (e) {
    	    LogMessage("MarkingSet - " + markingSet + " - not included in Character Key Set");
    	    continue;
    	}
    	
		var parenting = FindCharacterKeySetNames(characterSetName);

	    var oParameters = GetMarkingSetParameters(markingSet);

        // set keyable parameters
        SetKeyableParametersFromList(markingSet, oParameters);

        // check if this is one of the marking sets that we just want to
        // use for keyable parameters, but not actually add to the character keysets
        if (characterSetName.indexOf("None") == 0) {
            // just delete the marking set
            usedMarkingSets.add(markingSet);
        }

		// check what type of characterSet we're dealing with (nested or not)
		if (parenting.length > 1)
		{
			var foundProp = false;
			for (var j=0; j<parenting.length-1; j++) {
				if (in_charSetName.FullName.indexOf(parenting[j]) >= 0) {
					foundProp = true;
					break;
				}
			}
	
			// this property is nested so we have to add it to the name before
			// setting the character set
			if (foundProp == true)
			{
				try {
		            // in this case we have a blank MarkingSet to convert; use
		            // the parent and then delete the proxies
	                SetCurrentCharacterKeySet(in_charSetName + "." + parenting[parenting.length-1] + in_suffix);
	                AddProxyParamToCharacterKeySet(GetCurrentCharacterKeySet().FullName, oParameters);
	                usedMarkingSets.add(markingSet);
				} catch (e) {
					Logmessage("Error setting CharacterSubSet - " + in_charSetName + "." + parenting[parenting.length-1] + in_suffix);
				}
			}
		}
		else
		{
			// just add to the character set that was passed in
			if (in_charSetName.FullName.indexOf(characterSetName) >= 0)
			{
				try {
		            // in this case we have a blank MarkingSet to convert; use
		            // the parent and then delete the proxies
	                SetCurrentCharacterKeySet(in_charSetName);
	                AddProxyParamToCharacterKeySet(GetCurrentCharacterKeySet().FullName, oParameters);
	                usedMarkingSets.add(markingSet);
				} catch (e) {
					Logmessage("Error setting CharacterSubSet - " + in_charSetName + "." + parenting[parenting.length-1 + in_suffix]);
				}
			}
		}
    }

    for (var k=0; k<usedMarkingSets.Count; k++) {
		// if desired, delete the marking set that we found
		if (in_deleteMarkingSet) {
			DeleteObj(usedMarkingSets(k));
		}
	}
}

/*--------------------------------
makeQuadrupedCharacterKeySet
 - this function recursively traverses the new rig and creates a character
   key set for each marking set found
--------------------------------*/
function makeQuadrupedCharacterKeySet(RootObject, CharacterKeySetName, DeleteMarkingSet, Prefix, Suffix)
{
	//note: because arghandlers are used all the input objects are collections.
	//Get the first object from collection.
	if(!RootObject(0)) { logmessage("makeQuadrupedCharacterKeySet: argument 0 is invalid"); return ; }
	else 			 { RootObject = RootObject(0); }

     // Setup the rig to not be keyable
    RemoveKeyableFromRig(RootObject.Model);

   // save the popup preference's value
    var oldPopupPrefValue = GetValue("preferences.Interaction.autoinspect");
    SetValue("preferences.Interaction.autoinspect", false, null);

    // make sure nothing is selected so that we can create empty character sets
    SelectObj("");

    // we need to create all character sets at once, since when
    // the script is running there is no way to determine if a CKSet has already been
    // created or not -- for this reason, read the "global" (to this model) CustomPSet
    // entry on the model for the list of CKSets to create and their hierarchy
    CreateCharacterKeySet(RootObject, Prefix + CharacterKeySetName + Suffix);
    var quadrupedCharSet = GetCurrentCharacterKeySet();
    PopulateCharacterKeySet(RootObject, quadrupedCharSet, DeleteMarkingSet, Suffix);

    var upperBodyCharSet = AddEmptySubCharacterKeySet(quadrupedCharSet, Prefix + "Upper" + Suffix);
    AddEmptySubCharacterKeySet(upperBodyCharSet, Prefix + "Torso" + Suffix);
    AddEmptySubCharacterKeySet(upperBodyCharSet, Prefix + "Head_Neck" + Suffix);
    PopulateCharacterKeySet(RootObject, upperBodyCharSet, DeleteMarkingSet, Suffix);

    var lowerBodyCharSet = AddEmptySubCharacterKeySet(quadrupedCharSet, Prefix + "Lower" + Suffix);
    AddEmptySubCharacterKeySet(lowerBodyCharSet, Prefix + "L_Leg" + Suffix);
    AddEmptySubCharacterKeySet(lowerBodyCharSet, Prefix + "R_Leg" + Suffix);
    AddEmptySubCharacterKeySet(lowerBodyCharSet, Prefix + "BL_Leg" + Suffix);
    AddEmptySubCharacterKeySet(lowerBodyCharSet, Prefix + "BR_Leg" + Suffix);
    AddEmptySubCharacterKeySet(lowerBodyCharSet, Prefix + "Tail" + Suffix);
    PopulateCharacterKeySet(RootObject, lowerBodyCharSet, DeleteMarkingSet, Suffix);
    
    SetValue("preferences.Interaction.autoinspect", oldPopupPrefValue, null);
    
    return quadrupedCharSet;
}

/*--------------------------------
makeBipedCharacterKeySet
 - this function recursively traverses the new rig and creates a character
   key set for each marking set found
--------------------------------*/
function makeBipedCharacterKeySet(RootObject, CharacterKeySetName, DeleteMarkingSet, Prefix, Suffix)
{
	//note: because arghandlers are used all the input objects are collections.
	//Get the first object from collection.
	if(!RootObject(0)) { logmessage("makeBipedCharacterKeySet: argument 0 is invalid"); return ; }
	else 			 { RootObject = RootObject(0); }

    // Setup the rig to not be keyable
    RemoveKeyableFromRig(RootObject.Model);

    // save the popup preference's value
    var oldPopupPrefValue = GetValue("preferences.Interaction.autoinspect");
    SetValue("preferences.Interaction.autoinspect", false, null);

    // make sure nothing is selected so that we can create empty character sets
    SelectObj("");

    // we need to create all character sets at once, since when
    // the script is running there is no way to determine if a CKSet has already been
    // created or not -- for this reason, read the "global" (to this model) CustomPSet
    // entry on the model for the list of CKSets to create and their hierarchy
    CreateCharacterKeySet(RootObject, Prefix + CharacterKeySetName + Suffix);
    var bipedCharSet = GetCurrentCharacterKeySet();
    PopulateCharacterKeySet(RootObject, bipedCharSet, DeleteMarkingSet, Suffix);

    var upperBodyCharSet = AddEmptySubCharacterKeySet(bipedCharSet, Prefix + "Upper" + Suffix);
    AddEmptySubCharacterKeySet(upperBodyCharSet, Prefix + "R_Arm" + Suffix);
    AddEmptySubCharacterKeySet(upperBodyCharSet, Prefix + "L_Arm" + Suffix);
    AddEmptySubCharacterKeySet(upperBodyCharSet, Prefix + "R_Hand" + Suffix);
    AddEmptySubCharacterKeySet(upperBodyCharSet, Prefix + "L_Hand" + Suffix);
    AddEmptySubCharacterKeySet(upperBodyCharSet, Prefix + "Torso" + Suffix);
    AddEmptySubCharacterKeySet(upperBodyCharSet, Prefix + "Head_Neck" + Suffix);
    PopulateCharacterKeySet(RootObject, upperBodyCharSet, DeleteMarkingSet, Suffix);

    var lowerBodyCharSet = AddEmptySubCharacterKeySet(bipedCharSet, Prefix + "Lower" + Suffix);
    AddEmptySubCharacterKeySet(lowerBodyCharSet, Prefix + "L_Leg" + Suffix);
    AddEmptySubCharacterKeySet(lowerBodyCharSet, Prefix + "R_Leg" + Suffix);
    PopulateCharacterKeySet(RootObject, lowerBodyCharSet, DeleteMarkingSet, Suffix);
    
    SetValue("preferences.Interaction.autoinspect", oldPopupPrefValue, null);
    
    return bipedCharSet;
}

function RemoveKeyableFromRig(in_model)
{
    var oCollection = in_model.FindChildren();
    SetKeyableAttributes(oCollection.GetAsText(), "kine.local.scl", siKeyableAttributeClear );
    SetKeyableAttributes(oCollection.GetAsText(), "kine.local.ori", siKeyableAttributeClear );
    SetKeyableAttributes(oCollection.GetAsText(), "kine.local.pos", siKeyableAttributeClear );
    SetKeyableAttributes(oCollection.GetAsText(), "kine.posecns", siKeyableAttributeClear );
}

function SetKeyableParametersFromList(in_markingSet, in_parameters)
{
    // set the parameters we want as keyable
    var oParamNamesForKeyable = new String("");
    if (in_parameters.indexOf("kine.local.rot") >= 0) {
        oParamNamesForKeyable = "kine.local.ori.euler";
        SetKeyableAttributes(in_markingSet.Parent, oParamNamesForKeyable, siKeyableAttributeKeyable );
    }
    if (in_parameters.indexOf("kine.local.pos") >= 0) {
        oParamNamesForKeyable = "kine.local.pos";
        SetKeyableAttributes(in_markingSet.Parent, oParamNamesForKeyable, siKeyableAttributeKeyable );
    }
}

function setKeyableRig(RootObject)
{
	//note: because arghandlers are used all the input objects are collections.
	//Get the first object from collection.
	if(!RootObject(0)) { logmessage("makeBipedCharacterKeySet: argument 0 is invalid"); return ; }
	else 			 { RootObject = RootObject(0); }

    // clean up the keyable parameters
    RemoveKeyableFromRig(RootObject);

    // find the marking sets
    var markingSets = FindMarkingSets(RootObject);
    var usedMarkingSets = new ActiveXObject("XSI.Collection");

	// loop through the marking sets that haven't been allotted yet.
    for (var i=0; i<markingSets.Count; i++) 
	{
    	var markingSet = markingSets(i);

	    var oParameters = GetMarkingSetParameters(markingSet);

        // set keyable parameters and flag it for deletion
        SetKeyableParametersFromList(markingSet, oParameters);
        usedMarkingSets.add(markingSet);
	}

    for (var k=0; k<usedMarkingSets.Count; k++) {
		// if desired, delete the marking set that we found
		DeleteObj(usedMarkingSets(k));
	}
}