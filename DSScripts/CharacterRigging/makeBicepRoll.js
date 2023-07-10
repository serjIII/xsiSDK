////////////////////////////////////////
// Make Bicep Roll
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

inPrefix > Prefix to name the new dividers with, for example "L"

inNbDivisions > number of divisions


--------- RETURNS -------------------

Returns a BicepRoll Object where:


BicepRoll.Division > is a collection of the dividing null objects
BicepRoll.Nb > is the number of divisions

*/


/*--------------------------------
 Make Bicep Roll
--------------------------------*/
function makeBicepRoll(inBicep, inPrefix, inNbDivisions){

	var BicepRoll = new Object();

	//because arghandlers are used, input objects are collections.
	//If we are expecting a single object get the first object in the collection.
	inBicep = inBicep(0);

	BicepRoll.Nb = inNbDivisions;

	BicepRoll.Divisions = new ActiveXObject("XSI.Collection");


	var lastPos = (BicepRoll.Nb + 1)/(BicepRoll.Nb + 2)


	for(var i = 0; i < BicepRoll.Nb; i++){

			var index = i+1;

			var divider = inBicep.parent.addnull(inPrefix +"Roll"+ index);
			BicepRoll.Divisions.add(divider);


			var myOp = ApplyOp ("FirstBoneRollDivisionRO", divider +","+ inBicep)(0)
			SetValue (myOp  + ".length_perc", lastPos * i / BicepRoll.Nb);
			SetValue (myOp  + ".mySlerp", (i + 1) /(BicepRoll.Nb + 2));

			divider.AddProperty("Display Property")
			divider.properties("display").wirecol.value = 421
			divider.ActivePrimitive.parameters("size").value = .3
	}

	index ++;
	var divider = inBicep.addnull(inPrefix +"Roll_"+ index);
	BicepRoll.Divisions.add(divider);


		Translate( divider, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ);
		Rotate (divider, 0, 0, 0, siAbsolute, siLocal, siObj, siXYZ);
		SetExpr(divider + ".kine.local.posx", inBicep.fullname + ".bone.length *" + lastPos);

		divider.AddProperty("Display Property")
		divider.properties("display").wirecol.value = 421


	return BicepRoll;

}



