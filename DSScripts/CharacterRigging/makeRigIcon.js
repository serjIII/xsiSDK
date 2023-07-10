 ////////////////////////////////////////
// Make Rig Icon Component
// misner Dec 2003

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;

/*--------------------------------
 Make Rig Icon
--------------------------------*/
function makeRigIcon(inParent, inType, inX, inY, inZ, inXlen, inYlen, inZlen, inColor, inName, inOffsetX, inOffsetY, inOffsetZ){

	//arghandler converts object to collection -  retrieve the single object	
	inParent = inParent(0);
	if(!inParent) inParent = ActiveSceneRoot;

	/*

	0 = RightSquare
	1 = TopSquare
	2 = Cube
	3 = CenteredCube
	4 = Pyramid
	5 = CenteredPyramid
	6 = Diamond
	7 = CubeWithPeak
	8 = CenteredDiamond
         9 = CurveSphere;//Jmode
         10 = Arrow;//Jmod
         11 = LookAt;//javier
         12 = EyeArrow;//javier
         13
         14 = EyeBallIcon;//javier
         15 = Tooth; // misner

	*/

	var IconPos = XSIMath.CreateVector3();
	IconPos.set(inX, inY, inZ);

	var Offset = XSIMath.CreateVector3();

	if(inOffsetX && inOffsetY && inOffsetZ){
		Offset.set(inOffsetX, inOffsetY, inOffsetZ);
	}


	switch (inType){
  	 case 0:
  	 	var curve = RightSquare(inParent, IconPos, inYlen, inZlen, inColor, inName, Offset);
	 break

  	 case 1:
  	 	var curve = TopSquare(inParent, IconPos, inXlen, inZlen, inColor, inName, Offset);
	 break

	 case 2:
		var curve = Cube(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
  	 break
 	 case 3:

		var curve = CenteredCube(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
  	 break
  	 case 4:

		var curve = Pyramid(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
  	 break
	 case 5:

		var curve = CenteredPyramid(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
	 break

	 case 6:

		var curve = Diamond(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
	 break

	 case 7:

		var curve = CubeWithPeak(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
	 break

	 case 8:

		var curve = CenteredDiamond(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
	 break
         case 9:

		var curve = CurveSphere(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
	 break

         case 10:

		var curve = EyeArrow(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
	 break
         
         case 11:

		var curve = LookAt(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
	 break
         
         case 12:
        
                var curve = PinIcon(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
                
         break
         
         case 13:
        
                var curve = AngleSurvey(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
                
         break;
         case 14:
        
                var curve = EyeBallIcon(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
                
         break;
         
            case 15:
		var curve = Tooth(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset); 
            break;
            
            case 16:
		var curve = RectangleTriangle(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset); 
            break;
            
            case 17:
                var curve = RAKHead(inParent, IconPos, inXlen, inYlen, inZlen, inColor, inName, Offset);
            break;

	}


	return curve;

}


/*--------------------------------
 Right Square
--------------------------------*/
function RightSquare(inParent, inPos, inHeight, inWidth, inColor, inName, inOffset){

	var height = inHeight/2;
	var width = inWidth/2;


	// p is positive, N is negative

	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();

	pp.set(0,height,width);
	pN.set(0,height,width*-1);
	Np.set(0,height*-1,width);
	NN.set(0,height*-1,width*-1);

	var points = new Array();

	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, pN, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, Np, inOffset);

	var curve = inParent.AddNurbsCurve(points,null,1, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}
/*--------------------------------
 Top Square
--------------------------------*/
function TopSquare(inParent, inPos, inX, inZ, inColor, inName, inOffset){

	var inX = inX/2;
	var inZ = inZ/2;


	// p is positive, N is negative

	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();

	pp.set(inX, 0, inZ);
	pN.set(inX, 0, inZ*-1);
	Np.set(inX*-1, 0, inZ);
	NN.set(inX*-1, 0, inZ*-1);

	var points = new Array();

	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, pN, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, Np, inOffset);

	var curve = inParent.AddNurbsCurve(points,null,1, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}
/*--------------------------------
 Cube
--------------------------------*/
function Cube(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){

	var xlen = inXlen/2;
	var zlen = inZlen/2;
	var ylen = inYlen;


	// p is positive, N is negative
	var ppp = XSIMath.CreateVector3();
	var ppN = XSIMath.CreateVector3();
	var pNp = XSIMath.CreateVector3();
	var Npp = XSIMath.CreateVector3();
	var pNN = XSIMath.CreateVector3();
	var NNp = XSIMath.CreateVector3();
	var NpN = XSIMath.CreateVector3();
	var NNN = XSIMath.CreateVector3();

	ppp.set(xlen,ylen,zlen);
	ppN.set(xlen,ylen,zlen*-1);
	pNp.set(xlen,0,zlen);
	Npp.set(xlen*-1,ylen,zlen);
	pNN.set(xlen,0,zlen*-1);
	NNp.set(xlen*-1,0,zlen);
	NpN.set(xlen*-1,ylen,zlen*-1);
	NNN.set(xlen*-1,0,zlen*-1);

	var points = new Array();

	points = vectorPush(points, ppp, inOffset);
	points = vectorPush(points, ppN, inOffset);
	points = vectorPush(points, NpN, inOffset);
	points = vectorPush(points, NNN, inOffset);
	points = vectorPush(points, NNp, inOffset);
	points = vectorPush(points, Npp, inOffset);
	points = vectorPush(points, NpN, inOffset);
	points = vectorPush(points, Npp, inOffset);
	points = vectorPush(points, ppp, inOffset);
	points = vectorPush(points, pNp, inOffset);
	points = vectorPush(points, NNp, inOffset);
	points = vectorPush(points, pNp, inOffset);
	points = vectorPush(points, pNN, inOffset);
	points = vectorPush(points, ppN, inOffset);
	points = vectorPush(points, pNN, inOffset);
	points = vectorPush(points, NNN, inOffset);


	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}
/*--------------------------------
 Centered Cube
--------------------------------*/
function CenteredCube(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){

	var xlen = inXlen/2;
	var ylen = inYlen/2;
	var zlen = inZlen/2;

	// p is positive, N is negative
	var ppp = XSIMath.CreateVector3();
	var ppN = XSIMath.CreateVector3();
	var pNp = XSIMath.CreateVector3();
	var Npp = XSIMath.CreateVector3();
	var pNN = XSIMath.CreateVector3();
	var NNp = XSIMath.CreateVector3();
	var NpN = XSIMath.CreateVector3();
	var NNN = XSIMath.CreateVector3();

	ppp.set(xlen,ylen,zlen);
	ppN.set(xlen,ylen,zlen*-1);
	pNp.set(xlen,ylen*-1,zlen);
	Npp.set(xlen*-1,ylen,zlen);
	pNN.set(xlen,ylen*-1,zlen*-1);
	NNp.set(xlen*-1,ylen*-1,zlen);
	NpN.set(xlen*-1,ylen,zlen*-1);
	NNN.set(xlen*-1,ylen*-1,zlen*-1);

	var points = new Array();

	points = vectorPush(points, ppp, inOffset);
	points = vectorPush(points, ppN, inOffset);
	points = vectorPush(points, NpN, inOffset);
	points = vectorPush(points, NNN, inOffset);
	points = vectorPush(points, NNp, inOffset);
	points = vectorPush(points, Npp, inOffset);
	points = vectorPush(points, NpN, inOffset);
	points = vectorPush(points, Npp, inOffset);
	points = vectorPush(points, ppp, inOffset);
	points = vectorPush(points, pNp, inOffset);
	points = vectorPush(points, NNp, inOffset);
	points = vectorPush(points, pNp, inOffset);
	points = vectorPush(points, pNN, inOffset);
	points = vectorPush(points, ppN, inOffset);
	points = vectorPush(points, pNN, inOffset);
	points = vectorPush(points, NNN, inOffset);


	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}
/*--------------------------------
 Centered Pyramid
--------------------------------*/
function CenteredPyramid(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){

	var inXlen = inXlen/2;
	var inYlen = inYlen/2;
	var inZlen = inZlen/2;

	// p is positive, N is negative

	var top = XSIMath.CreateVector3();
	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();

	top.set(0,inYlen,0);
	pp.set(inXlen,inYlen*-1,inZlen);
	pN.set(inXlen,inYlen*-1,inZlen*-1);
	Np.set(inXlen*-1,inYlen*-1,inZlen);
	NN.set(inXlen*-1,inYlen*-1,inZlen*-1);


	var points = new Array();

	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, top, inOffset);
	points = vectorPush(points, pN, inOffset);
	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, top, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, pN, inOffset);

	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}

/*--------------------------------
 Pyramid
--------------------------------*/
function Pyramid(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){

	// curve pyramid function where the center is at the bottom, not the volume center

	inZlen = inZlen/2;
	inXlen = inXlen/2;


	// p is positive, N is negative

	var top = XSIMath.CreateVector3();
	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();

	top.set(0,inYlen,0);
	pp.set(inXlen,0,inZlen);
	pN.set(inXlen,0,inZlen*-1);
	Np.set(inXlen*-1,0,inZlen);
	NN.set(inXlen*-1,0,inZlen*-1);

	var points = new Array();

	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, top, inOffset);
	points = vectorPush(points, pN, inOffset);
	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, top, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, pN, inOffset);

	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}
/*--------------------------------
 Cube With Peak
--------------------------------*/
function CubeWithPeak(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){

	var xlen = inXlen/2;
	var zlen = inZlen/2;
	var ylen = inYlen;

	// p is positive, N is negative
	var peak = XSIMath.CreateVector3();
	var ppp = XSIMath.CreateVector3();
	var ppN = XSIMath.CreateVector3();
	var pNp = XSIMath.CreateVector3();
	var Npp = XSIMath.CreateVector3();
	var pNN = XSIMath.CreateVector3();
	var NNp = XSIMath.CreateVector3();
	var NpN = XSIMath.CreateVector3();
	var NNN = XSIMath.CreateVector3();

	peak.set(0,ylen,0);
	ppp.set(xlen,ylen/2,zlen);
	ppN.set(xlen,ylen/2,zlen*-1);
	pNp.set(xlen,0,zlen);
	Npp.set(xlen*-1,ylen/2,zlen);
	pNN.set(xlen,0,zlen*-1);
	NNp.set(xlen*-1,0,zlen);
	NpN.set(xlen*-1,ylen/2,zlen*-1);
	NNN.set(xlen*-1,0,zlen*-1);

	var points = new Array();


	points = vectorPush(points, peak, inOffset);
	points = vectorPush(points, ppp, inOffset);
	points = vectorPush(points, ppN, inOffset);
	points = vectorPush(points, peak, inOffset);
	points = vectorPush(points, NpN, inOffset);

	points = vectorPush(points, ppN, inOffset);
	points = vectorPush(points, NpN, inOffset);

	points = vectorPush(points, peak, inOffset);
	points = vectorPush(points, Npp, inOffset);
	points = vectorPush(points, NpN, inOffset);

	points = vectorPush(points, NNN, inOffset);
	points = vectorPush(points, NNp, inOffset);
	points = vectorPush(points, Npp, inOffset);
	points = vectorPush(points, NpN, inOffset);
	points = vectorPush(points, Npp, inOffset);
	points = vectorPush(points, ppp, inOffset);
	points = vectorPush(points, pNp, inOffset);
	points = vectorPush(points, NNp, inOffset);
	points = vectorPush(points, pNp, inOffset);
	points = vectorPush(points, pNN, inOffset);
	points = vectorPush(points, ppN, inOffset);
	points = vectorPush(points, pNN, inOffset);
	points = vectorPush(points, NNN, inOffset);




	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}
/*--------------------------------
 Diamond
--------------------------------*/
function Diamond(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){

	// curve pyramid function where the center is at the bottom, not the volume center

	inZlen = inZlen/2;
	inXlen = inXlen/2;


	// p is positive, N is negative

	var top = XSIMath.CreateVector3();
	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();
	var bottom = XSIMath.CreateVector3();

	top.set(0,inYlen,0);
	pp.set(inXlen,inYlen/2,inZlen);
	pN.set(inXlen,inYlen/2,inZlen*-1);
	Np.set(inXlen*-1,inYlen/2,inZlen);
	NN.set(inXlen*-1,inYlen/2,inZlen*-1);
	bottom.set(0,0,0);

	var points = new Array();

	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, top, inOffset);
	points = vectorPush(points, pN, inOffset);
	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, top, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, pN, inOffset);
	points = vectorPush(points, bottom, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, bottom, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, bottom, inOffset);
	points = vectorPush(points, pp, inOffset);

	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}

/*--------------------------------
 Centered Diamond
--------------------------------*/
function CenteredDiamond(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){

	// curve pyramid function where the center is at the bottom, not the volume center

	inZlen = inZlen/2;
	inXlen = inXlen/2;


	// p is positive, N is negative

	var top = XSIMath.CreateVector3();
	var pp = XSIMath.CreateVector3();
	var pN = XSIMath.CreateVector3();
	var Np = XSIMath.CreateVector3();
	var NN = XSIMath.CreateVector3();
	var bottom = XSIMath.CreateVector3();

	top.set(0,inYlen/2,0);
	pp.set(inXlen,0,inZlen);
	pN.set(inXlen,0,inZlen*-1);
	Np.set(inXlen*-1,0,inZlen);
	NN.set(inXlen*-1,0,inZlen*-1);
	bottom.set(0,-inYlen/2,0);

	var points = new Array();

	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, top, inOffset);
	points = vectorPush(points, pN, inOffset);
	points = vectorPush(points, pp, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, top, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, pN, inOffset);
	points = vectorPush(points, bottom, inOffset);
	points = vectorPush(points, NN, inOffset);
	points = vectorPush(points, bottom, inOffset);
	points = vectorPush(points, Np, inOffset);
	points = vectorPush(points, bottom, inOffset);
	points = vectorPush(points, pp, inOffset);

	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);

	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;

	return curve;

}
/*--------------------------------
 Vector Push
--------------------------------*/
function vectorPush(inArray, inVector, inOffset)
{

	if(!inOffset){

		inArray.push(inVector.x);
		inArray.push(inVector.y);
		inArray.push(inVector.z);
		inArray.push(1);

	}
	else{
		inArray.push(inVector.x + inOffset.x);
		inArray.push(inVector.y + inOffset.y);
		inArray.push(inVector.z + inOffset.z);
		inArray.push(1);
	}

	return inArray;

}
/*--------------------------------
    EyeArrow_Icon();//Jmod
--------------------------------*/
//CenteredDiamond(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){
function EyeArrow(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){
//function EyeArrow_Icon(in_scale,in_parent,in_name){

	if (!inName){inName = "EyeArrow";}
	if (!inParent){inParent = ActiveSceneRoot;}
        
	if (!inXlen){inXlen = 1;}
	if (!inYlen){inYlen = 1;}
	if (!inZlen){inZlen = 1;}
        var v_scale = XSIMath.CreateVector3();
        v_scale.set(inXlen, inYlen, inZlen);
        
	var points = new Array(0,0,0,1,-0.075,0,0.75,1,-0.25,0,0.75,1,0,0,1,1,0.25,0,0.75,1,0.075,0,0.75,1,0,0,0,1,0,0.075,0.75,1,0,0.25,0.75,1,0,0,1,1,0,-0.25,0.75,1,0,-0.075,0.75,1,0,0,0,1,0,-0.15,0,1,0,0.15,0,1,0,0,0,1,0.15,0,0,1,-0.15,0,0,1,0,0,0,1,0,0,-0.15,1,0.15,0,0,1,0,-0.15,0,1,-0.15,0,0,1,0,0.15,0,1,0.15,0,0,1,0,0,-0.15,1,-0.15,0,0,1,0,0,0.15,1,0,0,0.15,1,0,-0.15,0,1,0,0,-0.15,1,0,0.15,0,1);
        points = xformArr(points,v_scale,inOffset);
        
	//cp = scaleArr(cp,in_scale);
	var kn = new Array (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
	var ct = 4;
	var ncp = new Array (20,4,4,4);
	var nkn = new Array (20,5,5,5);
	var cl = new Array (false,true,true,true);
	var dg = new Array (1,3,3,3);
	var pr = new Array (1,1,1,1);
	var curve = inParent.AddNurbsCurveList2 (ct,points,ncp,kn,nkn,cl,dg,pr,0,inName);
	   
        //var points = new Array(0,0,0,1,-0.075,0,0.75,1,-0.25,0,0.75,1,0,0,1.0,1,0.25,0,0.75,1,0.075,0,0.75,1,0,0,0,1,0,0.075,0.75,1,0,0.25,0.75,1,0,0,1.0,1,0,-0.25,0.75,1,0,-0.075,0.75,1,0,0,0,1,0,-0.15,0,1,0,0.15,0,1,0,0,0,1,0.15,0,0,1,-0.15,0,0,1,0,0,0,1,0,0,-0.15,1);
	//var kn = new Array (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19);
	//var curve = inParent.AddNurbsCurve (points,kn,false,1,1,0,inName);
        
        posCol(curve,inPos,inColor)

	return curve;
        
        
}

/*--------------------------------
    CurveSphere_Icon();//Jmod
--------------------------------*/
function CurveSphere(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){

	if (!inName){inName = "CurveSphere";}
	if (!inParent){inParent = ActiveSceneRoot;}
        
	if (!inXlen){inXlen = 1;}
	if (!inYlen){inYlen = 1;}
	if (!inZlen){inZlen = 1;}
        var v_scale = XSIMath.CreateVector3();
        v_scale.set(inXlen, inYlen, inZlen);
        
	var points = new Array(0.75,0,0,1,0,-0.75,0,1,-0.75,0,0,1,0,0.75,0,1,0.75,0,0,1,0,0,-0.75,1,-0.75,0,0,1,0,0,0.75,1,0,0,0.75,1,0,-0.75,0,1,0,0,-0.75,1,0,0.75,0,1);    
	points = xformArr(points,v_scale,inOffset);
        
	var kn = new Array (0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
	var ct = 3;
	var ncp = new Array (4,4,4);
	var nkn = new Array (5,5,5);
	var cl = new Array (true,true,true);
	var dg = new Array (3,3,3);
	var pr = new Array (1,1,1);
        
	var curve = inParent.AddNurbsCurveList2 (ct,points,ncp,kn,nkn,cl,dg,pr,0,inName);
        
        posCol(curve,inPos,inColor)
        
	return curve;
}
 /*--------------------------------
 EyeGoal() Icon
 --------------------------------*/
 function LookAt(inParent, inPos, inXlen, inYlen, inZlen, inColor, inName, inOffset){
 //(in_scale,in_parent,in_name){

	if (!inName){inName = "LookAt";}
	if (!inParent){inParent = ActiveSceneRoot;}
        
        if (!inXlen){inXlen = 1;}
	if (!inYlen){inYlen = 1;}
	if (!inZlen){inZlen = 1;}
        var v_scale = XSIMath.CreateVector3();
        v_scale.set(inXlen, inYlen, inZlen);
        
	var points = new Array(0.6,0,-0,1,-0.6,0,-0,1,0,0,-0,1,0,0.6,-0,1,0,0,-0,1,0,0,-1,1,-0.3,0,0,1,-0.3,0.1,0,1,-0.18,0.31,0,1,0.18,0.31,0,1,0.3,0.1,0,1,0.3,0,0,1,0.3,0,0,1,0,0,-0.6,1,-0.3,0,0,1);
	points = xformArr(points,v_scale,inOffset);
        
	var kn = new Array (0,1,2,3,4,5,0,0,0,1,2,3,3,3,0,1,2);
	var ct = 3;
	var ncp = new Array (6,6,3);
	var nkn = new Array (6,8,3);
	var cl = new Array (false,false,false);
	var dg = new Array (1,3,1);
	var pr = new Array (1,1,1);
	var curve = inParent.AddNurbsCurveList2 (ct,points,ncp,kn,nkn,cl,dg,pr,0,inName);
        
        posCol(curve,inPos,inColor);
        
	return curve;
}
 /*--------------------------------
    PinIcon();//Jmod
--------------------------------*/

function PinIcon(inParent,inPos,inXlen, inYlen, inZlen, inColor, inName, inOffset){

	if (!inName){inName = "PinIcon";}
	if (!inParent){inParent = ActiveSceneRoot;}

	if (!inXlen){inXlen = 1;}
	if (!inYlen){inYlen = 1;}
	if (!inZlen){inZlen = 1;}

	var v_scale = XSIMath.CreateVector3();
	v_scale.set(inXlen, inYlen, inZlen);

	var points = new Array(0.049,0,0,1,-0.049,0,0,1,0,0,0,1,0,-0.049,0,1,0,0.293,0,1,0.06,0.293,0,1,-0.06,0.293,0,1,0.06,0.293,0,1,0,0.233,0,1,-0.06,0.293,0,1,0,0.353,0,1);
	points = xformArr(points,v_scale,inOffset);

	var kn = new Array (0,1,2,3,4,4.064000040040823,4.188000040040823,0,1,2,3,4);
	var ct = 2;
	var ncp = new Array (7,4);
	var nkn = new Array (7,5);
	var cl = new Array (false,true);
	var dg = new Array (1,3);
	var pr = new Array (1,1);
	var curve = inParent.AddNurbsCurveList2 (ct,points,ncp,kn,nkn,cl,dg,pr,0,inName);

	posCol(curve,inPos,inColor);

	return curve;
}
 /*--------------------------------
    AngleSurvey();//Jmod
--------------------------------*/
function AngleSurvey(inParent,inPos,inXlen, inYlen, inZlen, inColor, inName, inOffset){

	if (!inName){inName = "AngleSurvey";}
	if (!inParent){inParent = ActiveSceneRoot;}

	if (!inXlen){inXlen = 1;}
	if (!inYlen){inYlen = 1;}
	if (!inZlen){inZlen = 1;}

	var v_scale = XSIMath.CreateVector3();
	v_scale.set(inXlen, inYlen, inZlen);

	var points = new Array(0.25,0,1,1,0,0,0,1,-0.25,0,1,1,-0.126,0,0.305,1,-0.1,0,0.316,1,-0.044,0,0.331,1,0.044,0,0.331,1,0.1,0,0.316,1,0.126,0,0.305,1,0,0,0,1,0,0,0,1,0,0,0,1,0,-0.15,0,1,0,0.15,0,1,0,0,0,1,0.15,0,0,1,-0.15,0,0,1,0,0,0,1,0,0,-0.15,1,0.15,0,0,1,0,-0.15,0,1,-0.15,0,0,1,0,0.15,0,1,0.15,0,0,1,0,0,-0.15,1,-0.15,0,0,1,0,0,0.15,1,0,0,0.15,1,0,-0.15,0,1,0,0,-0.15,1,0,0.15,0,1);
	points = xformArr(points,v_scale,inOffset);

	var kn = new Array (0,1,2,0,0,0,1,2,3,3,3,0,1,7,13,14,15,16,17,18,19,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
	var ct = 6;
	var ncp = new Array (3,6,10,4,4,4);
	var nkn = new Array (3,8,10,5,5,5);
	var cl = new Array (false,false,false,true,true,true);
	var dg = new Array (1,3,1,3,3,3);
	var pr = new Array (1,1,1,1,1,1);
	var curve = inParent.AddNurbsCurveList2 (ct,points,ncp,kn,nkn,cl,dg,pr,0,inName);

	posCol(curve,inPos,inColor);

	return curve;
}
 /*--------------------------------
    EyeBallIcon();//Jmod
--------------------------------*/
function EyeBallIcon(inParent,inPos,inXlen, inYlen, inZlen, inColor, inName, inOffset){

	if (!inName){inName = "EyeBallIcon";}
	if (!inParent){inParent = ActiveSceneRoot;}

	if (!inXlen){inXlen = 1;}
	if (!inYlen){inYlen = 1;}
	if (!inZlen){inZlen = 1;}

	var v_scale = XSIMath.CreateVector3();
	v_scale.set(inXlen, inYlen, inZlen);

	var points = new Array(0,-0.187,0.485,1,0.187,0,0.485,1,0,0.187,0.485,1,-0.187,0,0.485,1,0,-0.085,0.496,1,0.085,0,0.496,1,0,0.085,0.496,1,-0.085,0,0.496,1,-0.5,0,0,1,0.5,0,0,1,0,0,0,1,0,-0.5,0,1,0,0.5,0,1,0,0,0,1,0,0,-0.5,1,0,0,1.879,1,-0.05,0,1.779,1,0.05,0,1.779,1,0,0,1.879,1,0,0.75,0,1,0.75,0,0,1,0,-0.75,0,1,-0.75,0,0,1,0,0.75,0,1,0,0,-0.75,1,0,-0.75,0,1,0,0,0.75,1,0.75,0,0,1,0,0,-0.75,1,-0.75,0,0,1,0,0,0.75,1,-0.354,0,0.335,1,0,0.375,0.706,1,0.354,0,0.335,1,0.354,0,0.335,1,-0.354,0,0.335,1,0,-0.375,0.706,1,0.354,0,0.335,1,0.354,0,0.335,1);
	points = xformArr(points,v_scale,inOffset);

	var kn = new Array (-2,-1,0,1,2,-2,-1,0,1,2,0,1,2,3,4,5,6,7,8,9,10,-2,-1,0,1,2,-2,-1,0,1,2,-2,-1,0,1,2,0,0,0,1,1,1,0,0,0,1,1,1);
	var ct = 8;
	var ncp = new Array (4,4,11,4,4,4,4,4);
	var nkn = new Array (5,5,11,5,5,5,6,6);
	var cl = new Array (true,true,false,true,true,true,false,false);
	var dg = new Array (3,3,1,3,3,3,3,3);
	var pr = new Array (1,1,1,1,1,1,1,1);
	var curve = inParent.AddNurbsCurveList2 (ct,points,ncp,kn,nkn,cl,dg,pr,0,inName);

	posCol(curve,inPos,inColor);

	return curve;
}
/*--------------------------------
RectangleTriangle
--------------------------------*/
function RectangleTriangle(inParent,inPos,inXlen, inYlen, inZlen, inColor, inName, inOffset){

	if (!inName){inName = "CurveShape";}
	if (!inParent){inParent = ActiveSceneRoot;}

	if (!inXlen){inXlen = 1;}
	if (!inYlen){inYlen = 1;}
	if (!inZlen){inZlen = 1;}

	var v_scale = XSIMath.CreateVector3();
	v_scale.set(inXlen, inYlen, inZlen);

	var points = new Array(0.313,0,0,1,0,-0.313,0,1,-0.313,0,0,1,0,0.313,0,1,0.313,0,0,1,0,0,-0.313,1,-0.313,0,0,1,0,0,0.313,1,0,0,0.313,1,0,-0.313,0,1,0,0,-0.313,1,0,0.313,0,1,-0.565,-0.648,0,1,0.224,0.164,0,1,-0.23,0.164,0,1,0.565,-0.642,0,1,-0.565,-0.645,0,1,-0.65,-0.137,0,1,-0.398,0.071,0,1,0.398,0.064,0,1,0.649,-0.145,0,1,0.565,-0.646,0,1,-0.565,-0.649,0,1,-0.424,-0.218,0,1,0,0.215,0,1,0.424,-0.212,0,1,0.565,-0.642,0,1);
	points = xformArr(points,v_scale,inOffset);

	var kn = new Array (0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,0,0,1,1,1,0,0,0,0.3333333333333333,0.6666666666666666,1,1,1,0,0,0,0.5,1,1,1);
	var ct = 6;
	var ncp = new Array (4,4,4,4,6,5);
	var nkn = new Array (5,5,5,6,8,7);
	var cl = new Array (true,true,true,false,false,false);
	var dg = new Array (3,3,3,3,3,3);
	var pr = new Array (1,1,1,1,1,1);
	var curve = inParent.AddNurbsCurveList2 (ct,points,ncp,kn,nkn,cl,dg,pr,0,inName);

	posCol(curve,inPos,inColor);

	return curve;
}
/*--------------------------------
 Tooth
 --------------------------------*/
function Tooth(inParent,inPos,inXlen, inYlen, inZlen, inColor, inName, inOffset){

	if (!inName){inName = "Tooth";}
	if (!inParent){inParent = ActiveSceneRoot;}

	if (!inXlen){inXlen = 1;}
	if (!inYlen){inYlen = 1;}
	if (!inZlen){inZlen = 1;}

	var v_scale = XSIMath.CreateVector3();
	v_scale.set(inXlen, inYlen, inZlen);

	var points = new Array(0.25,0.5,-0.5,1,0.25,0.5,0.5,1,-0.25,0.5,0.5,1,-0.25,0.5,-0.5,1,0.25,0.5,-0.5,1,0.25,-0.5,-0.5,1,0.25,-0.5,0.5,1,0.25,0.5,0.5,1,0.25,-0.5,0.5,1,0,-0.5,0.5,1,0,-0.5,-0.5,1,0.25,-0.5,-0.5,1,0,-0.5,-0.5,1,-0.25,0,-0.5,1,-0.25,0,0.5,1,0,-0.5,0.5,1,-0.25,0,0.5,1,-0.25,0.5,0.5,1,-0.25,0.5,-0.5,1,-0.25,0,-0.5,1)


	points = xformArr(points,v_scale,inOffset);
	
	var curve = inParent.AddNurbsCurve(points,null,0, 1, siNonUniformParameterization, siSINurbs, inName);
	
	curve.AddProperty("Display Property")
	curve.properties("display").wirecol.value = inColor;

	var trans = XSIMath.CreateTransform();
	trans.SetTranslation(inPos);
	curve.Kinematics.Global.Transform = trans;
	
	return curve;
	
}
/*--------------------------------
 RAKHead
 --------------------------------*/

function RAKHead(inParent,inPos,inXlen, inYlen, inZlen, inColor, inName, inOffset){

	if (!inName){inName = "RAKHead";}
	if (!inParent){inParent = ActiveSceneRoot;}

	if (!inXlen){inXlen = 1;}
	if (!inYlen){inYlen = 1;}
	if (!inZlen){inZlen = 1;}

	var v_scale = XSIMath.CreateVector3();
	v_scale.set(inXlen, inYlen, inZlen);

	var points = new Array(0.045,0,0,1,0,-0.044,0,1,-0.045,0,0,1,0,0.044,0,1,0.045,0,0,1,0,0,-0.044,1,-0.045,0,0,1,0,0,0.044,1,0,0,0.044,1,0,-0.044,0,1,0,0,-0.044,1,0,0.044,0,1,-0.045,0,0,1,0.045,0,0,1,0,0,-0.044,1,0,0,0.044,1,0,-0.044,0,1,0,0.044,0,1,-0.417,0.64,0.21,1,-0.417,0.554,0.21,1,-0.355,0.554,0.21,1,-0.355,0.64,0.21,1,-0.355,0.64,0.21,1,-0.355,0.64,0.055,1,-0.267,0.64,-0.241,1,0.267,0.64,-0.241,1,0.355,0.64,0.055,1,0.355,0.64,0.21,1,-0.355,0.554,0.21,1,-0.355,0.554,0.055,1,-0.267,0.554,-0.241,1,0.267,0.554,-0.241,1,0.355,0.554,0.055,1,0.355,0.554,0.21,1,-0.417,0.554,0.21,1,-0.417,0.554,0.054,1,-0.313,0.554,-0.321,1,0.313,0.554,-0.321,1,0.417,0.554,0.054,1,0.417,0.554,0.21,1,-0.417,0.64,0.21,1,-0.417,0.64,0.054,1,-0.313,0.64,-0.321,1,0.313,0.64,-0.321,1,0.417,0.64,0.054,1,0.417,0.64,0.21,1,0.355,0.64,0.21,1,0.355,0.554,0.21,1,0.417,0.554,0.21,1,0.417,0.64,0.21,1);
	points = xformArr(points,v_scale,inOffset);

	var kn = new Array (0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,0,1,0,1,0,1,2,3,4,0,0,0,1,2,3,3,3,0,0,0,1,2,3,3,3,0,0,0,1,2,3,3,3,0,0,0,1,2,3,3,3,0,1,2,3,4);
	var ct = 12;
	var ncp = new Array (4,4,4,2,2,2,4,6,6,6,6,4);
	var nkn = new Array (5,5,5,2,2,2,5,8,8,8,8,5);
	var cl = new Array (true,true,true,false,false,false,true,false,false,false,false,true);
	var dg = new Array (3,3,3,1,1,1,1,3,3,3,3,1);
	var pr = new Array (1,1,1,1,1,1,1,1,1,1,1,1);
	var curve = inParent.AddNurbsCurveList2 (ct,points,ncp,kn,nkn,cl,dg,pr,0,inName);

	posCol(curve,inPos,inColor);

	return curve;
}
/*--------------------------------
 posCol position and Color
 --------------------------------*/
 function posCol(x3d_obj,inPos,inColor){
 
         if (inColor){
            x3d_obj.AddProperty("Display Property")
            x3d_obj.properties("display").wirecol.value = inColor;

        }
        
        if (inPos){
            var trans = XSIMath.CreateTransform();
            trans.SetTranslation(inPos);
            x3d_obj.Kinematics.Global.Transform = trans;
        
        }
     return x3d_obj;
 
 }

/*--------------------------------
    xformArr();//Jmod
--------------------------------*/
function xformArr(io_pArr,in_scl,in_offset){
    var c,ii;
    if (!in_offset){var in_offset = XSIMath.CreateVector3();}

    for(ii=0; ii<io_pArr.length/4;ii++){  
        c = ii*4;
        io_pArr[c] = io_pArr[c]*in_scl.x+in_offset.x;
        io_pArr[c+1] = io_pArr[c+1]*in_scl.y+in_offset.y;
        io_pArr[c+2] = io_pArr[c+2]*in_scl.z+in_offset.z;
        //io_pArr[c+3] = io_pArr[c+3];//pointweights stay unchanged 
    }
    return io_pArr;
}