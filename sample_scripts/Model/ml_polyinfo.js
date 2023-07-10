/*********************************************************
 * ml_PolyInfo() v1.0 (c)2000 Matt Lind
 *
 * Mimicks "Model > Info > InfoPolygon+" from Softimage|3D
 *
 * TO DO:
 * 1) detection for concave polygons.
 * 2) detection for concave meshes.
 * 3) detection for non-planar polygons.
 * 4) detection for corrupted meshes (they shouldn't exist, but...)
 *********************************************************/
var PRG = "PolyInfo";
var VERSION = 1.0;
var DEBUG = 1;
 
PolyInfo_main();

/*******************************************************
 * PolyInfo_main()
 ******************************************************/
function PolyInfo_main()
{
	var	selected;
	
	// Get selected elements from scene.
	selected = GetValue( "SelectionList" );
	
	if ( !selected ) {
		LogMessage( "Nothing selected", siError );
		return(-1);
	}

	// Send selected elements to the effect.
	PolyInfo( selected );

	return(0);
}

/*******************************************************
 * PolyInfo - gets low level info about polygons on a mesh
 ******************************************************/
function PolyInfo( elements )
{
	var	a, b, polygon_nb_vertices, polygon_vertices_list;
	var	mesh_list, this_mesh, nb_meshes;
	var mesh = new Object();
	
	// Initialize counters to zero.
	mesh.nb_tri  = mesh.nb_quad     = mesh.nb_nsided = mesh.nb_faces     = 0;
	mesh.nb_poly = mesh.nb_vertices = mesh.nb_edges  = mesh.nb_triangles = 0;
	mesh.nb_polygons = mesh.nb_colinear_edges = 0;
	
	// Get polygon meshes from selectionlist
	mesh_list = SIFilter( elements, "polygon_mesh", true, siQuickSearch );
	
	if ( !mesh_list ) {
		LogMessage( "No Polygon meshes selected", siError );
		return(-1);
	}
	
	mesh.nb_meshes = mesh_list.count;
	
	// Run thru selection and get required attributes
	for ( i = 0; i < mesh.nb_meshes; i++ ) {
	
		// Get current polygon mesh from selection list.
		this_mesh = mesh_list(i);
		
		// Create a reference to the geometry of this mesh.
		geometry = this_mesh.obj;
	
		// Get high-level info of the mesh
		this_nb_vertices = geometry.nb0D;	// nb of vertices
  		this_nb_edges    = geometry.nb1D;	// nb of edges
		this_nb_polygons = geometry.nb2D;	// nb of polygons (faces)

		// Create a reference to the polygon array for this mesh.
		polygon = geometry.Geometry2D;
		
		// Get sum of polygon types (eg. tris, quads, N-sided, ...)
		for ( j = 0; j < this_nb_polygons; j++ ) {
		
			// Get number of vertices on this polygon.
			polygon_nb_vertices = polygon.nb0D2D(j);
			
			// Count the number of polygon types (eg. tris, quads, nsided...)
			if ( polygon_nb_vertices == 2 ) {
				mesh.nb_colinear_edges++;
			} else if ( polygon_nb_vertices == 3 ) {
				mesh.nb_tri++;
			} else if ( polygon_nb_vertices == 4 ) {
				mesh.nb_quad++;
			} else if ( polygon_nb_vertices >= 5 ) {
				mesh.nb_nsided++;
			} else {
				LogMessage( "DOH! the polygon is corrupted!", siFatal );
			}
			
			// Increment triangle counter.  This accounts for tesselation.
			mesh.nb_triangles += ( polygon_nb_vertices - 2 );
		}
		// Increment counters to include this mesh.
		mesh.nb_vertices += this_nb_vertices;
		mesh.nb_edges    += this_nb_edges;
		mesh.nb_faces    += this_nb_polygons;
	}
	
	// Send results to the property page.
	PolyInfo_dialog( mesh );

	return(0);
}


/*******************************************************
 * Display results of the query in a dialog box.
 ******************************************************/
function PolyInfo_dialog( polymesh )
{
	var	dialog, scn_root, mode;

	// Locate the scene root - we'll be storing temp data there.
	scn_root = GetSceneRoot();

	// Add a property to the scene_root - this will hold the tmp data used in the dialog.
	dialog = SIAddProp( "Custom_parameter_list", scn_root, null, PRG ).value( "Value" );

	// define a macro for the PPG for legibility.
	PPG = scn_root + "." + dialog;

	// Add parameters to the property set.
	SIAddCustomParameter( PPG, "Nb_Vertices",     siString, 0, 0, 0, siClassifMetaData, siSilent, 0, 1, null, null );
	SIAddCustomParameter( PPG, "Nb_Edges",        siString, 0, 0, 0, siClassifMetaData, siSilent, 0, 1, null, null );
	SIAddCustomParameter( PPG, "Nb_Colinear",     siString, 0, 0, 0, siClassifMetaData, siSilent, 0, 1, null, null );
	SIAddCustomParameter( PPG, "Nb_Tris",         siString, 0, 0, 0, siClassifMetaData, siSilent, 0, 1, null, null );
	SIAddCustomParameter( PPG, "Nb_Quads",        siString, 0, 0, 0, siClassifMetaData, siSilent, 0, 1, null, null );
	SIAddCustomParameter( PPG, "Nb_Nsided",       siString, 0, 0, 0, siClassifMetaData, siSilent, 0, 1, null, null );
	SIAddCustomParameter( PPG, "Total_Faces",     siString, 0, 0, 0, siClassifMetaData, siSilent, 0, 1, null, null );
	SIAddCustomParameter( PPG, "Total_Triangles", siString, 0, 0, 0, siClassifMetaData, siSilent, 0, 1, null, null );
	SIAddCustomParameter( PPG, "Total_Meshes",    siString, 0, 0, 0, siClassifMetaData, siSilent, 0, 1, null, null );

	// Dump values into the dialog parameters
	SetValue( PPG + ".Nb_Vertices",     polymesh.nb_vertices);
	SetValue( PPG + ".Nb_Edges",        polymesh.nb_edges   );
	SetValue( PPG + ".Nb_Colinear",     polymesh.nb_colinear);
	SetValue( PPG + ".Nb_Tris",         polymesh.nb_tris    );
	SetValue( PPG + ".Nb_Quads",        polymesh.nb_quads   );
	SetValue( PPG + ".Nb_NSided",       polymesh.nb_nsided  );
	SetValue( PPG + ".Total_Faces",     polymesh.nb_faces   );
	SetValue( PPG + ".Total_Triangles", polymesh.nb_nb_tris );
	SetValue( PPG + ".Total_Meshes",    polymesh.nb_nb_mesh );

	// Prompt the user with the dialog
	try {
		InspectObj( PPG, null, PRG + " v" + VERSION, siModal );
	} catch(e) {
		// User cancelled via "cancel" button or <Esc>.
		DeleteObj( PPG );				// Clean up tmp data.
		return(-1);
	}
	
	// Delete the property, it's no longer needed.
	DeleteObj( PPG );
	
	// return info to the effect.
	return(0);
}

/***********************************************************
 * Returns scene root as a string from the current project.
 * ( This function borrowed from Softimage scripts. )
 ***********************************************************/
function GetSceneRoot()
{
	var	l_Scene, l_SceneRoot, l_Children;

	l_Children  = EnumElements( "Project", true );         // Return project's immediate children
	l_Scene	    = SIFilter( l_Children, siSceneFilter );   // Find scene within list of project children.
	l_Children  = EnumElements( l_Scene(0) );              // Find all subcomponents of the 1st available scene.
	l_SceneRoot = SIFilter( l_Children, siObjectFilter );  // Return 1st scene root available from current scene.
	return( l_SceneRoot(0) );
}
