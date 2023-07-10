////////////////////////////////////////
// Make Forearm Roll
///////////////////////////
// originally proto-typed:
// July 2001 Michael Isner
//
// re-engineered using a component SDK
/// Dec 2003 Michael Isner
///////////////


/*


--------- PARAMETERS -------------------

expects to be handed data surrounding a 2 bone arm with a one bone wrist


inBicep > Biped chain element

inForearm > Forearm chain element, the object on which the Roll nulls will be parented under

inArmEff > Effector of the chain including the Bicep and Foream

inHandEff > Effector of the chain of the wrist

inHandBone > bone of the hand

inPrefix > Prefix to name the new dividers with, for example "L"

inNbDivisions > number of divisions

inRollOffset > offset to roll the forearm with.  The roll has a range of -180 to 180 and this lets
               you place the seam of that roll.  The value is driving a new custom parameter that
	       will be placed under the Hand Bone to interactivly control this value.


--------- RETURNS -------------------

Returns a ForeArm Object where:

ForeArm.Division > is a collection of the dividing null objects
ForeArm.Sliders > is the slider page for roll offset placed on the hand
ForeArm.Nb > is the number of divisions
ForeArm.RollOffset > is the value of the roll Offset on creation


*/


/*--------------------------------
 Make Forearm Roll
--------------------------------*/
function makeForearmRoll(inBicep, inForearm, inArmEff, inHandEff, inHandBone, inPrefix, inNbDivisions, inRollOffset)
{
	//check for valid objects on required inputs.
	//because arghandlers are used all the input objects are collections. Get the first object from collection.
	//first 5 arguments are single objects
	var l_bExit;
	for (i = 0; i < 5; i++)
	{
		if(arguments[i]) { arguments[i] = arguments[i](0);}	//extract first object from coll.
		if(!arguments[i]){ logmessage("makeForearmRoll: argument " + i + " is invalid", siError); l_bExit = true;	}
	}
	if(l_bExit) return;

	var ForearmRoll = new Object();

	ForearmRoll.Sliders 			= inHandBone.AddProperty("Custom_parameter_list",0,"Roll_Compensation")
	ForearmRoll.RollOffset 			= ForearmRoll.Sliders.AddParameter ("roll_offset", siDouble, siClassifVisualization , siAnimatable, "roll_offset", "roll_offset", "", 0, -360, 360,-180,180)
	ForearmRoll.RollOffset.value 	= inRollOffset;
	ForearmRoll.Nb 					= inNbDivisions;
	ForearmRoll.Divisions 			=  new ActiveXObject("XSI.Collection");


	for(i = 0; i < ForearmRoll.Nb; i++){


			var divider = (i==0) ? inForearm.addnull(inPrefix + "Elbow") : inForearm.addnull(inPrefix + "ForearmRoll");

			ForearmRoll.Divisions.add(divider);

			var myOp = ApplyOp ("ForeArmRollDivision", ForearmRoll.Divisions(i) +","+ inBicep  +","+ inForearm+","+ inArmEff +","+ inHandEff+","+ inHandBone)(0);

			SetValue( myOp + ".blend", 1 - i/ForearmRoll.Nb);
			AddExpr ( myOp + ".compensation", ForearmRoll.RollOffset, true);

			SetExpr (ForearmRoll.Divisions(i)+ ".kine.local.posx", inForearm.fullname + ".bone.length * (" + i / ForearmRoll.Nb + ")");
			SetExpr (ForearmRoll.Divisions(i)+ ".kine.local.posy", "0");
			SetExpr (ForearmRoll.Divisions(i)+ ".kine.local.posz", "0");


			ForearmRoll.Divisions(i).AddProperty("Display Property");
			ForearmRoll.Divisions(i).properties("display").wirecol.value = 544;
	}


	return ForearmRoll;

}


