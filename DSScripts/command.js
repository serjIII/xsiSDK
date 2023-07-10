//*****************************************************************************
//
// File supervisor : gketseti
// Date : October 2003
// (c) Copyright 2003 Softimage
//
// @doc
// @module	command.js | JScript 
//
// 
// Contains implementation of the following XSI Commands:
//		EditCommand
//		CreateAndEditCommand
//*****************************************************************************

//******************************************************************************
// String Constants (used to translate)
//******************************************************************************
var IDS_SCRIPTNAME_CHANGED_MSG				= 1053;
var IDS_INVALID_ARG_VALUE_TITLE				= 1054;
var IDS_LONGNAME_CHANGED_MSG				= 1055;
var IDS_BUTTON_GENERATE_CODE_MSG			= 1056;
var IDS_EDIT_COMMAND_DETAIL_TITLE			= 1057;
var IDS_EDIT_COMMAND_TITLE					= 1058;

// Add a push method to the JScript Array Object
// (Array.Push was added in Jscript 5.5 but we cannot rely on this)
var push = function(item){return this[this.length++] = item;}
Array.prototype.push = push;


//******************************************************************************
// HELPER FUNCTIONS
//******************************************************************************

function IsReadOnly( in_oCmd )
{		
	if (in_oCmd.BuiltIn)
	{
		// Never update builtin commands
		return true;
	}

	if ( in_oCmd.Origin != siUserPath )
	{
		// Block editing commands in workgroup, addons etc
		return true ;
	} 
	
	// REVIEW: currently it is hard to tell if this is self-installed
	// (plugin based or not) we have to look it by checking every single plugin item
	
	var i,j ;
	for ( i = 0 ; i < Application.Plugins.Count ; i++ )
	{
		var plugin = Application.Plugins.Item(i) 
		
		// Fast way to discard most plugins
		if ( in_oCmd.Origin != plugin.Origin )
			continue; 
		
		for ( j = 0 ; j < plugin.Items.Count ; j++ )
		{
			var pluginitem = plugin.Items(j) ;
			
			if ( pluginitem.type == "Custom Command" )
			{			
				if ( pluginitem.Name == in_oCmd.Name )
				{
					// This command is self-installed.
					// User should edit the original script, they can't use the UI
					return true ;
				}
			}
		}		
	}		
		
	return false ;
}


//------------------------------------------------------------------------------
// NAME:		UpdateCommandFromPSet 
// INPUT:		in_oCustomPSet		Custom property object containing new data
//				in_oParamData		CParamData array containing update rules
//				io_oCmd				The command to update
// RETURN:		None
// DESCRIPTION: Updates the command definition according to edit rules
//------------------------------------------------------------------------------
function UpdateCommandFromPSet( in_oCustomPSet, in_oParamData, io_oCmd )
{
	// never update builtin commands
	if (IsReadOnly( io_oCmd ))
	{
		return;
	}

	//
	// Update command attributes
	//

	var oParameterCollection = in_oCustomPSet.Parameters;
	for (var i = 0; i < in_oParamData.length; i++ )
	{
		var oCurrentParamData = in_oParamData[i];

		// skip read-only parameters
		if ( true == oCurrentParamData.IsReadOnly ) continue;

		// fetch default value (prior to change) and current value (the new value)
		var defaultValue = eval( "io_oCmd." + oCurrentParamData.ReadAccessor.Pre + oCurrentParamData.ReadAccessor.Post );
		var currentValue = eval( "oParameterCollection.Item(" + '"' + oCurrentParamData.Name + '"' + ").Value;" );

		// do not update if the value did not change
		if (currentValue == defaultValue) continue;


		if ( oCurrentParamData.Name == "Code" )
		{		
			// Code can contain " characters so the fancy technique above won't work
			io_oCmd.Code = currentValue ;
		}
		else if ( oCurrentParamData.Name == "FileName" )
		{
			// Filename can contain "\" characters which are not valid in jscript
			io_oCmd.FileName = currentValue ;
		}	
		else
		{
			// value changed, update
			var setValueToCmdCode = "io_oCmd." + 
									oCurrentParamData.WriteAccessor.Pre + 
									currentValue + 
									oCurrentParamData.WriteAccessor.Post;


			eval( setValueToCmdCode	);		
		}
	}

	//
	// Update command arguments as required
	//
	var oParams = in_oCustomPSet.Parameters;
	var oArgParam = oParams.Item("Arguments");
	var oDestinationArgs = io_oCmd.Arguments;
	var oSourceArgs = oArgParam.Value;

	// Flush the arguments and regenerate based on the grid contents
	
	oDestinationArgs.RemoveAll();

	var argCount = oSourceArgs.RowCount;
			
	for (var i = 0; i < argCount; i++)
	{
		var defaultValue = oSourceArgs.GetCell("Default Value", i);
		oDestinationArgs.Add
		( 
			oSourceArgs.GetCell("Name", i),
			oSourceArgs.GetCell("Type", i),
			defaultValue, 
			("object" == typeof(defaultValue)) ? siDispatch : siEmpty
		);
	}
	//
	// Update argument handlers
	//
	var noValue;
	var argCount = oDestinationArgs.count;
	var argHandlerDataArray = CreateArgumentHandlerArray();

	for (var i=0; i < argCount; i++)
	{
		var argHandlerName = "" ;

		if ( oSourceArgs.GetCell("Handler", i) != null )
		{
			argHandlerName = argHandlerDataArray[oSourceArgs.GetCell("Handler", i)].Name;
		}
		
		var oCurrentArg = oDestinationArgs.Item(i);

		if ("" == argHandlerName)
		{
			oCurrentArg.Handler = noValue;
		}
		else
		{
			oCurrentArg.Handler = argHandlerName;
		}
	}

	//
	// commit changes
	//
	io_oCmd.Update();
}


// Look for any potential scripting name clash, excluding
// a given command.

//------------------------------------------------------------------------------
// NAME:		ScriptingNameExists
// INPUT:		in_cmdName			Name of the command to verify.  This command
//									will be excluded from search.
//				in_scriptingName	Scripting name to look for
//				
// RETURN:		true | Another command with the scripting name exists
// DESCRIPTION: Checks if the scripting name is used by any other command
//------------------------------------------------------------------------------
function ScriptingNameExists
( 
	in_cmdName, 
	in_scriptingName 
)
{
	var commandCount = Commands.Count;
	var oCurrentCommand = Commands(in_cmdName);

	for (var i = 0; i < commandCount; i++ )
	{
		oCurrentCommand = Commands(i);
		if (oCurrentCommand.ScriptingName == in_scriptingName)
		{
			if (oCurrentCommand.Name != in_cmdName)
			{ 
				return true;
			}
		}
	}

	return false;
}

//------------------------------------------------------------------------------
// NAME:		CParamData
// INPUT:		in_scriptingName	Scripting name of the parameter
//				in_Type				siType of the parameter
//				in_ReadAccessor		CAccessor | defines how the parameter is read
//				in_WriteAccessor	CAccessor | defines how the parameter is written
//				in_IsReadOnly		boolean.  True for read-only parameter.
//				
// RETURN:		None.
// DESCRIPTION: Class that holds information about a command parameter
//------------------------------------------------------------------------------
function CParamData
( 
	in_ScriptingName, 
	in_Type, 
	in_ReadAccessor, 
	in_WriteAccessor, 
	in_IsReadOnly 
)
{
	this.Name = in_ScriptingName;			// Scripting name of the parameter
	this.Type = in_Type;					// siType of the parameter
	this.ReadAccessor = in_ReadAccessor;	// CAccessor - name of the property to read value
	this.WriteAccessor = in_WriteAccessor;	// string - syntax to set value
	this.IsReadOnly = in_IsReadOnly;		// bool - Is this a read-only parameter or not?
}

//------------------------------------------------------------------------------
// NAME:		CAccessor
// INPUT:		in_Pre	String that appears immediatly after the parameter
//				in_Post String that finishes the access string
//
//	ex: To access a property named "myProperty" that can be accessed by scripting
//		as follow :  "oMyObject.myProperty" you have in_Pre = "myProperty" and
//					 in_Post = ";"
//
//  ex2: To write to the same property you would have:
//			in_Pre = "myProperty =" and in_Post = ";"
//
//  ex3: To write the same property using a method called "SetValue":
//			in_Pre = ".SetValue(" and in_Post = ");"
//
//  see CreateParamDataArray for many other examples.
//				
// RETURN:		None.
// DESCRIPTION: Class that defines the string to access a parameter
//------------------------------------------------------------------------------
function CAccessor( in_Pre, in_Post )
{
	this.Pre = in_Pre;
	this.Post= in_Post;
}

//------------------------------------------------------------------------------
// NAME:		CArgumentHandlerData
// INPUT:		in_Name	String The Unique name of the argument handler
//				in_UIName String The UI name of the argument handler
//				
// RETURN:		None.
// DESCRIPTION: Class that keeps information about the argument handler we
//				expose trough the editor
//------------------------------------------------------------------------------
function CArgumentHandlerData( in_Name, in_UIName )
{
	this.Name = in_Name;
	this.UIName = in_UIName;
}

//------------------------------------------------------------------------------
// NAME:		CreateArgumentHandlerArray
// INPUT:		None
//				
// RETURN:		A CArgumentHandlerData array
// DESCRIPTION: Returns the array containing all the supported argument handlers
//------------------------------------------------------------------------------
function CreateArgumentHandlerArray()
{
	var array = new Array;
	array.push( new CArgumentHandlerData( "", "None"));
	array.push( new CArgumentHandlerData( "AnimatableParameters", "Animatable Marked Parameters"));
	array.push( new CArgumentHandlerData( "Collection", "Collection/Selection"));
	array.push( new CArgumentHandlerData( "SingleObj", "SingleObj"));
	array.push( new CArgumentHandlerData( "Frame", "Frame"));
	array.push( new CArgumentHandlerData( "FrameRate", "Frame Rate"));
	array.push( new CArgumentHandlerData( "MarkedParameters", "Marked Parameters"));
	
	return array;
}

//------------------------------------------------------------------------------
// NAME:		GetArgumentHandlerIndex
// INPUT:		in_ArgumentHandlerArray | array of CArgumentHandlerData
//				in_oArgumentHandler		| Argument handler object (or NULL for none)
//				
// RETURN:		Index of the argument handler in in_ArgumentHandlerArray
// DESCRIPTION: Returns the index of an argument handler within in_ArgumentHandlerArray
//------------------------------------------------------------------------------
function GetArgumentHandlerIndex
( 
	in_ArgumentHandlerArray,	// array of CArgumentHandlerData
	in_oArgumentHandler			// Argument handler object (or NULL for none)
)
{
	var argHandlerName;
	if (null == in_oArgumentHandler)
	{
		argHandlerName = "";
	}
	else
	{
		argHandlerName = in_oArgumentHandler.Name;
	}

	for (var i=0; i < in_ArgumentHandlerArray.length; i++)
	{
		if (argHandlerName == in_ArgumentHandlerArray[i].Name)
		{
			return i;
		}
	}

	return 0; // invalid argument handler name. 
}

//------------------------------------------------------------------------------
// NAME:		CreateParamDataArray
// INPUT:		in_oCmd	Command whose parameter we're interested in.
//				
// RETURN:		The newly created CParamData array.
// DESCRIPTION: Creates an array that contains all the access rules for all
//				command parameters.
//------------------------------------------------------------------------------
function CreateParamDataArray( in_oCmd )
{
	//
	// Determine the access rules for the command
	//
	var bReadOnly = IsReadOnly( in_oCmd ) ;

	//
	// Populate th param data array
	//
	var array = new Array;
	array.push( new CParamData(	"ScriptingName", 
								siString, 
								new CAccessor("ScriptingName", ";"), 
								new CAccessor("ScriptingName =" + '"', '"' + ";"), 
								bReadOnly ));
	
	array.push( new CParamData( "LongName", siString, 
								new CAccessor("Name", ";"), 
								new CAccessor("Name =" + '"', '"' + ";"), 
								bReadOnly ));

	array.push( new CParamData( "Description", 
								siString, 
								new CAccessor("Description", ";"), 
								new CAccessor("Description =" + '"', '"' + ";"), 
								bReadOnly ));

	array.push( new CParamData( "ToolTip",
								siString, 
								new CAccessor("ToolTip", ";"),
								new CAccessor("ToolTip =" + '"', '"' + ";"), 
								bReadOnly ));

	array.push( new CParamData( "Category",
								siString,
								new CAccessor("Category", ";"), 
								new CAccessor("Category =" + '"', '"' + ";"), 
								true )); // category alway read-only

	array.push( new CParamData( "ReturnValue", 
								siBool, 
								new CAccessor("ReturnValue", ";"),
								new CAccessor("ReturnValue =", ";"),
								bReadOnly ));

	array.push( new CParamData( "Language", 
								siString, 
								new CAccessor("Language", ";"), 
								new CAccessor("Language =" + '"', '"' + ";"), 
								bReadOnly ));

	array.push( new CParamData( "FileName", 
								siString, 
								new CAccessor("FileName", ";"),
								new CAccessor("FileName =" + '"', '"' + ";"), 
								bReadOnly ));

	array.push( new CParamData( "Code", 
								siString, 
								new CAccessor("Code", ";"),
								new CAccessor("Code =" + '"', '"' + ";"), 
								bReadOnly ));

	array.push( new CParamData( "Handler", 
								siString, 
								new CAccessor("Handler", ";"),
								new CAccessor("Handler =" + '"', '"' + ";"), 
								bReadOnly ));

	array.push( new CParamData( "Enabled",
								siBool, 
								new CAccessor("Enabled", ";"), 
								new CAccessor("Enabled =", ";"), 
								bReadOnly ));
	
	array.push( new CParamData( "SupportsKeyAssignment", 
								siBool, 
								new CAccessor("SupportsKeyAssignment", ";"), 
								new CAccessor("SetFlag( siSupportsKeyAssignment,", ");"), 
								bReadOnly ));

	array.push( new CParamData( "CannotBeUsedInBatch", 
								siBool, 
								new CAccessor("CannotBeUsedInBatch", ";"),
								new CAccessor("SetFlag( siCannotBeUsedInBatch,", ");"),
								bReadOnly ));

	array.push( new CParamData( "IsNotLogged", 
								siBool, 
								new CAccessor("IsNotLogged", ";"),
								new CAccessor("SetFlag( siNoLogging,", ");"),
								bReadOnly ));

	return array;
}

//------------------------------------------------------------------------------
// NAME:	EditNewCommand 
// INPUT:	in_Cmd | The newly created command to edit
//
// RETURN:		True if user canceled operation or False if operation went trough
// DESCRIPTION:	Edits a new command, creating a handler file and command body
//				for the user.
//------------------------------------------------------------------------------
function EditNewCommand(in_Cmd)
{
	var oCmd = in_Cmd;
	var commandName = oCmd.Name;

	oCmd.ScriptingName = commandName;
	oCmd.Handler = "On" + commandName;
	oCmd.Language = GetCurrentLanguage();

	// Just put something simple in the implementation
	// so that we are able to add the command.
	// With a properly formed handler you can't actually 
	// run this command, but the user gets a chance to edit it
	// one EditCommand() is called.
	oCmd.Code = GenerateTodoComment( oCmd.Language );
	
	Application.AddCommand( oCmd );

	var editingCancelled = EditCommand(commandName)
	if (true == editingCancelled)
	{
		// remove temporary command and delete command file
		RemoveCommand(commandName);
	}
	
	return editingCancelled;
}

//------------------------------------------------------------------------------
// NAME:	GetUniqueCommandName 
// INPUT:	in_BaseName | Base name for which a suffix is added in case of name
//						  clash.
//
// RETURN:		A unique command name
// DESCRIPTION:	Creates a unique name for a command.
//------------------------------------------------------------------------------
function GetUniqueCommandName( in_BaseName )
{
	var oExistingCommands = Commands.Filter("Custom");
	var getCommandSuffix = new RegExp(in_BaseName + "(\\d*)$");
	var oExistingSuffixArray = new Array;
	
	// for every command name starting with NewCommand,
	// extract the suffix
	var cmdCount = oExistingCommands.Count;
	for ( var i = 0; i < cmdCount; i++ )
	{
		var cmdName = oExistingCommands(i).Name;
		if ( 0 == cmdName.search(getCommandSuffix) )
		{
			oExistingSuffixArray.push( RegExp.$1 );
		}
	}
	
	var suffixToUse = GetUniqueSuffix( oExistingSuffixArray );
		
	return "NewCommand" + suffixToUse;
}

//------------------------------------------------------------------------------
// NAME:	CreateCommandFile 
// INPUT:	in_CmdName | Name of the command the file is for.
//
// RETURN:		A File object.
// DESCRIPTION:	Creates a file for the command.  The file is left empty.
//------------------------------------------------------------------------------
function CreateCommandFile( in_CmdName )
{
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var oFolder = fso.GetFolder(InstallationPath(siUserPath));
	
	var fileExtension = GetFileExtensionForCurrentLanguage();
	
	var oExistingSuffixArray = new Array;
	var oEnumerator = new Enumerator(oFolder.files);
	var suffixToUse = "";
	
	var getFilenameSuffix = new RegExp(in_CmdName + "Impl([0-9]*)\\" + fileExtension + "$");
	for (; !oEnumerator.atEnd(); oEnumerator.moveNext())
	{
		var filename = oEnumerator.item().Name;
		
		if ( 0 == filename.search(getFilenameSuffix) )
		{
			oExistingSuffixArray.push( RegExp.$1 );
		}
	}
	suffixToUse = GetUniqueSuffix( oExistingSuffixArray );

	var filename = in_CmdName + "Impl" + suffixToUse + fileExtension;

	var oTextStream = oFolder.CreateTextFile( filename, false);
	oTextStream.Close();
	
	return fso.GetFile( oFolder.Path + "/" + filename );
}

//------------------------------------------------------------------------------
// NAME:	SortNumberFromString
// INPUT:	first  | First value to compare (either "" or an number)
//			second | Second value to compare (either "" or an number)
//
// RETURN:		negative if first < second,  0 for equality, > 0 if first > second
// DESCRIPTION:	Compares two strings as if they where numbers
//------------------------------------------------------------------------------
function SortNumberFromString( first, second )
{
	var firstVal = (("" == first) ? 0 : new Number(first));
	var secondVal = (("" == second) ? 0 : new Number(second));

	return firstVal - secondVal;
}

//------------------------------------------------------------------------------
// NAME:	GetUniqueSuffix 
// INPUT:	in_SuffixArray | Array of integers representing the currently used
//							 suffixes.
//
// RETURN:		A unique suffix that doesn't clash with the one in the array.
// DESCRIPTION:	Creates a unique suffix that can be appended to a name to make
//				it unique.
//------------------------------------------------------------------------------
function GetUniqueSuffix( in_SuffixArray )
{
	var suffix = "";
	
	var arraySize = in_SuffixArray.length;
	if (arraySize > 0)
	{
		in_SuffixArray.sort(SortNumberFromString);
		var latestSuffix = in_SuffixArray[arraySize - 1];
		if ("" == latestSuffix)
		{
			suffix = 1;
		}
		else
		{
			var number = new Number( latestSuffix );
			suffix = number + 1;
		}
	}
	
	return suffix;
}

//------------------------------------------------------------------------------
// NAME:	CreateJScriptFunction 
// INPUT:	in_Cmd | Command for which we define the body
//
// RETURN:		String containing skeleton code for the function.
// DESCRIPTION:	Creates JScript skeleton code for the command handler
//------------------------------------------------------------------------------
function CreateJScriptFunction()
{
	var func = "// Implementation of the " + PPG.Name.Value + " function handler\r\n";
	func +=    "function " + PPG.Handler.Value + "( ";
	
	var oGridArgs = PPG.Arguments.Value ;
	var argCount = oGridArgs.RowCount ;
	for (var i = 0; i < argCount; i++ )
	{
		var strArgName = oGridArgs.GetCell(0,i);
		func += strArgName;
		if (i != argCount - 1)
		{
			func += ", ";
		}
	}
	func +=    " )\r\n{\r\n\t// TODO: Implement function\r\n}";
	
	return func;	
}

//------------------------------------------------------------------------------
// NAME:	CreatePythonFunction 
// INPUT:	in_Cmd | Command for which we define the body
//
// RETURN:		String containing skeleton code for the function.
// DESCRIPTION:	Creates Python skeleton code for the command handler
//------------------------------------------------------------------------------
function CreatePythonFunction()
{
	var func = "# Implementation of the " + PPG.Name.Value + " function handler\r\n";
	func    += "def " + PPG.Handler.Value + "( ";

	var oGridArgs = PPG.Arguments.Value ;
	var argCount = oGridArgs.RowCount ;
	for (var i = 0; i < argCount; i++ )
	{
		var strArgName = oGridArgs.GetCell(0,i);
		func += strArgName;
		if (i != argCount - 1)
		{
			func += ", ";
		}
	}
	func +=    " ):\r\n\t# TODO: Implement function\r\n";
	
	return func;
}

//------------------------------------------------------------------------------
// NAME:	CreateVBScriptFunction 
// INPUT:	in_Cmd | Command for which we define the body
//
// RETURN:		String containing skeleton code for the function.
// DESCRIPTION:	Creates VBScript skeleton code for the command handler
//------------------------------------------------------------------------------
function CreateVBScriptFunction()
{
	var func = "' Implementation of the " + PPG.Name.Value + " function handler\r\n";
	var funcType;
	if (0 != PPG.ReturnValue.Value)
	{ 
		funcType = "Function";
	}
	else
	{ 
		funcType = "Sub";
	}
	
	func += funcType + " " + PPG.Handler.Value + "( ";
	
	var oGridArgs = PPG.Arguments.Value ;
	var argCount = oGridArgs.RowCount ;
	for (var i = 0; i < argCount; i++ )
	{
		var strArgName = oGridArgs.GetCell(0,i);
		func += strArgName;
		if (i != argCount - 1)
		{
			func += ", ";
		}
	}
	func +=    " )\r\n\t' TODO: Implement function\r\nEnd " + funcType;
	
	return func;
}

//------------------------------------------------------------------------------
// NAME:	CreatePerlScriptFunction 
// INPUT:	in_Cmd | Command for which we define the body
//
// RETURN:		String containing skeleton code for the function.
// DESCRIPTION:	Creates Perl skeleton code for the command handler
//------------------------------------------------------------------------------
function CreatePerlScriptFunction()
{
	var func = "# Implementation of the " + PPG.Name.Value + " function handler\r\n";
	func += "sub " + PPG.Handler.Value + "\r\n{\r\n";
	
	
	var oGridArgs = PPG.Arguments.Value ;
	var argCount = oGridArgs.RowCount ;
	for (var i = 0; i < argCount; i++ )
	{
		var strArgName = oGridArgs.GetCell(0,i);
		func += "\tmy($" + strArgName + ") = $_[" + i + "];\r\n";
	}
	func +=    "\r\n\t# TODO: Implement function\r\n}";

	return func;
}

//------------------------------------------------------------------------------
// NAME:	CreateFunctionPrototype 
// INPUT:	in_Filename | Filename in which the body should be written
//			in_Cmd		| Function whose handler's body we want to create
//
// RETURN:		None.
// DESCRIPTION:	Creates skeleton code for the command handler in a file if the
//				file size == 0.
//------------------------------------------------------------------------------
function CreateFunctionPrototype()
{
	var functionBody;	
	switch (PPG.Language.Value)
	{
		case "JScript":
		{
			functionBody = CreateJScriptFunction();
			break;
		}
		case "VBScript":
		{
			functionBody = CreateVBScriptFunction();
			break;
		}
		case "PerlScript":
		{
			functionBody = CreatePerlScriptFunction();
			break;
		}
		case "Python":
		{
			functionBody = CreatePythonFunction();
			break;
		}
		default: return;
	}
	
	PPG.Code.Value = functionBody
}

// Generate a simple comment in the implementation
function GenerateTodoComment( in_Language )
{
	switch (in_Language)
	{
		case "JScript":
		{
			strComment = "//Todo" ;
			break;
		}
		case "VBScript":
		{
			strComment = "'Todo" ;
			break;
		}
		case "PerlScript":
		{
			strComment = "#Todo";
			break;
		}
		case "Python":
		{
			strComment = "#Todo";
			break;
		}
		default: return;
	}

	return strComment ;
}


//------------------------------------------------------------------------------
// NAME:	Replace 
// INPUT:	in_String			| String containing the characters to replace
//			in_CharToReplace	| Character to replace
//			in_NewChar			| The replacement for the character
//
// RETURN:		String with the replaced characters.
// DESCRIPTION:	Replaces all occurences of a character in a string.
//------------------------------------------------------------------------------
function Replace( in_String, in_CharToReplace, in_NewChar )
{
	var newString  = "";
	var array = in_String.split(in_CharToReplace);
	var arraySize = array.length;
	
	for (var i = 0; i < arraySize; i++)
	{
		newString += array[i];
		if (i != arraySize - 1)
		{
			newString += in_NewChar;
		}
	}
	
	return newString;
}

//------------------------------------------------------------------------------
// NAME:	GetFileExtensionForCurrentLanguage 
// INPUT:	None.
//
// RETURN:		File extension including the dot (ex: ".js" )
// DESCRIPTION:	Returns the file extension for the current scripting language
//------------------------------------------------------------------------------
function GetFileExtensionForCurrentLanguage()
{
	var scriptingLanguage = GetValue("preferences.scripting.language" );

	switch( scriptingLanguage )
	{
		case "JScript Language": return ".js";
		case "JScript": return ".js";
		case "PerlScript Language": return ".pls";
		case "PerlScript": return ".pls";
		case "VB Script Language": return ".vbs";
		case "VB": return ".vbs";
		case "Python ActiveX Scripting Engine": return ".pys";
		case "Python": return ".pys";
		default: return ".js";
	}
}

//------------------------------------------------------------------------------
// NAME:	GetCurrentLanguage
// Note:	The previous language preference wasn't actually a valid language string
//------------------------------------------------------------------------------

function GetCurrentLanguage()
{
	var scriptingLanguage = GetValue("preferences.scripting.language" );

	switch( scriptingLanguage )
	{
		case "JScript Language": return "JScript";
		case "PerlScript Language": return "PerlScript";
		case "VB Script Language": return "VBScript";
		case "Python ActiveX Scripting Engine": return "Python";

		default:
			return scriptingLanguage;
	}
}


//******************************************************************************
// Callbacks
//******************************************************************************

//------------------------------------------------------------------------------
// Called when the PPG first displays itself
//------------------------------------------------------------------------------
function EditCmd_OnInit()
{
	//Initialize
	EditCmd_Embedded_OnChanged()
}

//------------------------------------------------------------------------------
//Called when the user changes the value in the
//"Implementation" drop down
//------------------------------------------------------------------------------
function EditCmd_Embedded_OnChanged()
{
	// Toggle whether code or file control is enabled
	
	var oCmd = Application.Commands(PPG.LongName.Default);
	
	if ( !IsReadOnly( oCmd ) )
	{
		if ( PPG.Embedded == 0 )
		{
			PPG.FileName.Enable( true );

			// File name is ignored unless the embedded code is empty
			PPG.CodeBackup = PPG.Code;
			PPG.Code = "";			
			PPG.Code.Enable(false);
			
		}
		else
		{
			// Restore CodeBackup if necessary
			if ( new String(PPG.Code).length == 0 )
			{
				PPG.Code = PPG.CodeBackup
			}
			
			PPG.Code.Enable( true );		
						
			PPG.FileName.Enable(false);
		}
	}	
}

function EditCmd_Language_OnChanged()
{
	if ( PPG.Language == "CPP" )
	{
		// Embedded feature only makes sense for scripts
		// REVIEW: CPP case still needs some more work, ideally 
		// we should completely hide the embedded and change some wording to
		// mention DLL instead of script
		PPG.Embedded = 0 ;
		EditCmd_Embedded_OnChanged() ;
	}
} 

function EditCmd_Help_OnClicked()
{
	try
	{
		var oCmd = Application.Commands(PPG.LongName.Default);
		
		if ( oCmd.ScriptingName != PPG.ScriptingName.Default )
		{
			// UDEV00180690 - which command is selected can get confused if
			// there are multiple with the same Name
			oCmd = Application.GetCommandByScriptingName(PPG.ScriptingName.Default) ;
		}
		
		var strURL = oCmd.Help;
		
		if ( strURL.length )
			XSIUtils.DisplayHtmlHelp( strURL ) ;
	}
	catch(e)
	{
	}
}


//------------------------------------------------------------------------------
// NAME:		EditCmd_ScriptingName_OnChanged
// INPUT:		None
//				
// RETURN:		None
// DESCRIPTION: Callback that gets called when the scripting name is updated
//------------------------------------------------------------------------------
function EditCmd_ScriptingName_OnChanged()
{
	var oPPG = PPG.Inspected.Item(0);
	var oCmd = Commands(oPPG.LongName.Default);
			
	// make sure that the new name doesn't clash with an existing scripting
	// name
	if (ScriptingNameExists(oCmd.Name, oPPG.ScriptingName.Value))
	{
		// restore value to default
		oPPG.ScriptingName.Value = oPPG.ScriptingName.Default;

		XSIUIToolkit.MsgBox(XSIUtils.Translate( IDS_SCRIPTNAME_CHANGED_MSG, "XSISCRIPTS" ), siMsgExclamation, XSIUtils.Translate( IDS_INVALID_ARG_VALUE_TITLE, "XSISCRIPTS" ) );
	}

	// If we get here, the update can go on. (nothing to do).
}

//------------------------------------------------------------------------------
// NAME:		LongName_OnChanged
// INPUT:		None
//				
// RETURN:		None
// DESCRIPTION: Callback that gets called when the command name is updated
//------------------------------------------------------------------------------
function EditCmd_LongName_OnChanged()
{
	var oPPG = PPG.Inspected.Item(0);
	var oCmd = Commands(oPPG.LongName.Default);
	
	if ( oPPG.LongName.Value != oPPG.LongName.Default )
	{		
		//
		// Check if a command with the same name already exists
		//
		var oExistingCommand = Commands(oPPG.LongName.Value);
	
		if (null != oExistingCommand)
		{
			// restore value to default
			oPPG.LongName.Value = oPPG.LongName.Default;

			XSIUIToolkit.MsgBox(XSIUtils.Translate( IDS_LONGNAME_CHANGED_MSG, "XSISCRIPTS" ), siMsgExclamation, XSIUtils.Translate( IDS_INVALID_ARG_VALUE_TITLE, "XSISCRIPTS" ) );
		}
	}

	// If we get here, the update can go on. (nothing to do).
}

//------------------------------------------------------------------------------
// NAME:		BtnAddArgument_OnClicked
// INPUT:		None
//				
// RETURN:		None
// DESCRIPTION: Callback that gets called when the user clicks the add argument
//				button.
//------------------------------------------------------------------------------
function EditCmd_BtnAddArgument_OnClicked()
{
	var oGridParameter = PSet.Arguments ;
	var oArgumentGrid = oGridParameter.Value;

	oArgumentGrid.RowCount++;

	// Initialize with default values
	// (but leave the default value as VT_EMPTY)

	var noArg ;

	oArgumentGrid.SetRowValues
	( 
		oArgumentGrid.RowCount-1, 
		new Array( "Arg" + ( oArgumentGrid.RowCount - 1), siArgumentInput, noArg, 0 )
	);

	if ( oArgumentGrid.RowCount == 1 )
	{
		// Make sure grid control is visible
		oGridParameter.Show(true);
	}
	
	PPG.Refresh();
}

//------------------------------------------------------------------------------
// NAME:		BtnRemoveArgument_OnClicked
// INPUT:		None
//				
// RETURN:		None
// DESCRIPTION: Callback that gets called when the user clicks the remove 
//				argument button.
//------------------------------------------------------------------------------
function EditCmd_BtnRemoveArgument_OnClicked()
{
	var oArgumentGrid = PSet.Arguments.Value;
	
	if (oArgumentGrid.RowCount > 0)
	{
		oArgumentGrid.RowCount--;
		if ( 0 == oArgumentGrid.RowCount)
		{
			var oGridParameter = PPG.Inspected(0).Parameters("Arguments");
			oGridParameter.Show(false);
		}
		PPG.Refresh();
	}
}


/*

function EditCmd_BtnEditCode_OnClicked()
{
	// TODO: Pop open the text editor.
	// Show error messages if the language is CPP, or the script
	// file has not been filled in (or is missed) or if code has been
	// edited.
	// We probably need to make the window non-modal first
}
*/

function EditCmd_BtnGenerateCode_OnClicked()
{
	var strExistingCode = new String( PPG.Code ) ;
	
	if ( strExistingCode.length != 0 &&
		 strExistingCode != GenerateTodoComment(PPG.Language.Value) )
	{
		// Avoid accidental erasing of a real implementation
		var btnPressed = XSIUIToolkit.MsgBox(XSIUtils.Translate( IDS_BUTTON_GENERATE_CODE_MSG, "XSISCRIPTS" ), siMsgYesNo | siMsgQuestion);
		if ( btnPressed == siMsgNo )
		{
			return ;
		}
	}

	if ( PPG.Embedded.Value == 0 )
	{
		PPG.Embedded.Value = 1 ;
		EditCmd_Embedded_OnChanged() ;
	}


	CreateFunctionPrototype() ;
}

//******************************************************************************
// COMMAND IMPLEMENTATION
//******************************************************************************

//------------------------------------------------------------------------------
// NAME:	EditCommandProc  Implementation of EditCommmand
// INPUT:	in_CmdName	Name of the command to edit
//
// RETURN:		True if user canceled operation or False if the user pressed
// DESCRIPTION:	Launches the command editor which can be used to view a built-in
//				command or to modify a custom command. <br/>
//				Note: editing is limited to certain properties of the command 
//------------------------------------------------------------------------------
function EditCommandProc( in_CmdName )
{
	var retVal = true; // assume user pressed "Cancel" to dismiss dialog

	try
	{
		//////////////////////////////////////
		// Find the command
		//////////////////////////////////////
			var oCmd = Application.Commands(in_CmdName);
			if (null == oCmd) 						
			{
				// Commands have both a display name
				// and scripting name.  Its actually the
				// scripting name that users would be
				// most familiar with
			
				// Using new method that saves us the trouble
				// of scanning all commands
				oCmd = Application.GetCommandByScriptingName( in_CmdName ) ;
			}
		
		if (null == oCmd)					
		{		
			logmessage("'" + in_CmdName + "' is not an editable command.", siWarning);
			return false;
		}

		// Turn off logging
		SetValue( "preferences.scripting.cmdlog", false );
		
		//////////////////////////////////////////////////////////////////////////////
		// Create custom PSet with command data
		//////////////////////////////////////////////////////////////////////////////
		var noArgument
		var oCustomPSet = XSIFactory.CreateObject( "CustomProperty" ) ;
		oCustomPSet.Name = in_CmdName ;
		
		// Determine capabilities (built-in commands are read-only)
		var bIsReadOnly = IsReadOnly(oCmd) ;


		// Properties under the command object
		var oParameterDataArray = CreateParamDataArray( oCmd );

		for (var i = 0; i < oParameterDataArray.length; i++ )
		{
			var oCurrentParamData = oParameterDataArray[i];
			var defaultValue = eval( "oCmd." + oCurrentParamData.ReadAccessor.Pre + oCurrentParamData.ReadAccessor.Post );
			oCustomPSet.AddParameter3(	oCurrentParamData.Name, 
										oCurrentParamData.Type,
										defaultValue,
										noArgument,
										noArgument,
										false,
										oCurrentParamData.IsReadOnly );
		}
	
		//Used by drop down
		oCustomPSet.AddParameter3( "Embedded", siInt4, 1, 0, 10, false ) ;
		
		// Never changable
		oCustomPSet.AddParameter3( "Builtin", siBool, oCmd.BuiltIn, null, null, false, true ) ;

		// To avoid losing script code if use toggles between Code and File and back
		oCustomPSet.AddParameter3( "CodeBackup", siString ) ;
	
		// Arguments
		var oArgCollection = oCmd.Arguments;
		var oGridParam = oCustomPSet.AddGridParameter("Arguments");
		var oGridData = oGridParam.Value
		var argHandlerDataArray = CreateArgumentHandlerArray();

		oGridData.ColumnCount = 4;
		oGridData.SetColumnLabel(0, XSIUtils.Translate("Name", "XSISPDLFILE"));
		oGridData.SetColumnLabel(1, XSIUtils.Translate("Type", "XSISPDLFILE"));
		oGridData.SetColumnType(1, siColumnCombo);
		oGridData.SetColumnComboItems(1, 
						new Array("Input", siArgumentInput, 
								  "Output", siArgumentOutput, 
								  "Input/Output", siArgumentInputOutput, 
								  "", -1));
		oGridData.SetColumnLabel(2, XSIUtils.Translate("Default Value", "XSISPDLFILE"));
		oGridData.SetColumnLabel(3, XSIUtils.Translate("Handler", "XSISPDLFILE"));
		oGridData.SetColumnType(3, siColumnCombo);

		var argHandlerComboContent = new Array;
		for (var i=0; i < argHandlerDataArray.length; i++)
		{
			var argHandlerData = argHandlerDataArray[i];
			argHandlerComboContent.push(argHandlerData.UIName);
			argHandlerComboContent.push(i);
		}
		
		oGridData.SetColumnComboItems(3, argHandlerComboContent );
			
		var oArg;
		var currentIndex = 0;
		var argCount = oArgCollection.Count;
		
		oGridData.RowCount = argCount

		for (var i = 0; i < argCount; i++)
		{
			// add a new row for the argument
			var oArg = oArgCollection.Item(i);
			
			// compute the argument handler to display
			var argHandlerIdx = GetArgumentHandlerIndex( argHandlerDataArray, oArg.Handler );
			
			// set the row values						
			oGridData.SetRowValues
			( 
				i, 
				new Array( oArg.Name, oArg.Flags, oArg.Value, argHandlerIdx )
			);
		}

		if (0 == argCount)
		{
			oGridParam.Show(false);
		}
		
		////////////////////////////////////////////////////////////////////////////////////////
		// create layout
		////////////////////////////////////////////////////////////////////////////////////////
		var oLayout = oCustomPSet.PPGLayout;
		
		// Install items
		oLayout.AddTab("Description");
		oLayout.AddString("LongName", "Name");
		oLayout.AddString("ScriptingName", "Scripting Name");
		oLayout.AddString("Description", "Description");
		oLayout.AddString("ToolTip", "ToolTip");
		oLayout.AddString("Category", "Category");
		oLayout.AddItem("Enabled", "Enabled");
		oLayout.AddItem("SupportsKeyAssignment","Supports Key Assignment");
		oLayout.AddItem("CannotBeUsedInBatch","Cannot Be Used In Batch");
		oLayout.AddItem("IsNotLogged","Is Not Logged");
		oLayout.AddItem("Builtin","Built-in");


		if ( oCmd.Help != "" )
		{
			oLayout.AddButton( "Help", "Help" ) ;
		}

		oLayout.AddTab("Arguments");

		oLayout.AddItem("ReturnValue");
		oLayout.AddGroup("Argument List");

		var oGridCtrl = oLayout.AddItem("Arguments", "", siControlGrid);
		oGridCtrl.SetAttribute(siUINoLabel, 1);

		var readOnlyColumns ; 

		if (!bIsReadOnly)
		{
			oLayout.AddRow();
			oLayout.AddButton( "BtnAddArgument", "Add Argument" );
			oLayout.AddButton( "BtnRemoveArgument", "Remove Argument" );
			oLayout.EndRow();

			// show drop down as text field (workaround for UI visibility problem)
			oGridData.SetColumnType(4, siColumnStandard);
			
			// column order = Name, Input Type, Default Value, Handler
			// Only input arguments are supported so that column is read-only

			readOnlyColumns = "0:1:0:0";
		}
		else
		{
			// make all the columns read only
			readOnlyColumns = "1:1:1:1";
		}

		oGridCtrl.SetAttribute(siUIGridColumnWidths, "0:100:75:100:125");		
		oGridCtrl.SetAttribute(siUIGridReadOnlyColumns, readOnlyColumns);		
		oGridCtrl.SetAttribute(siUIGridHideRowHeader, true);

		oLayout.EndGroup() ;

		oLayout.AddTab("Implementation");
		oLayout.AddEnumControl("Language", new Array("VBScript", "VBScript", "JScript", "JScript", "PerlScript", "PerlScript", "Python", "Python", "CPP", "CPP" ), "Language");

		oLayout.AddString("Handler", "Handler");

		var aEmbeddedOptions ;
		if ( oCmd.Language != "CPP" )
		{
			oLayout.AddEnumControl("Embedded", new Array( "Embedded", 1, "in Script File (or DLL)", 0 ), "Implementation" ) ;
		}	

		var strCode = new String(oCmd.Code) ;
		var bEmbedded = ( strCode.length > 0 ) ;	

		oCustomPSet.Parameters( "Embedded" ).Value = bEmbedded ;		
				
		var bCanChangeCode = !IsReadOnly( oCmd ) ;	
		oCustomPSet.Parameters("Embedded").Enable(bCanChangeCode ) ;
	
		if ( bCanChangeCode || !bEmbedded )
		{
			oLayout.AddGroup( "File Name" ) ;			
		
			var oCurrentPPGItem = oLayout.AddItem("FileName", noArgument, siControlFilePath);
			var dynamicLibraryFileExtension = ("Win32" == Platform) ? "*.dll" : "*.so";
			oCurrentPPGItem.SetAttribute( siUIFileFilter, "Script Files (*.js,*.vbs,*.pys,*.pls)|*.js:*.vbs:*.pys:*.pls|Compiled plugins (" + dynamicLibraryFileExtension + ")|" + dynamicLibraryFileExtension + "|All Files (*.*)|*.*||");
			oCurrentPPGItem.SetAttribute( siUIOpenFile, true );
			oCurrentPPGItem.SetAttribute( siUIFileMustExist, true );
			oCurrentPPGItem.SetAttribute( siUINoLabel,true ) ;
			
			oLayout.EndGroup() ;
		}
				
		if ( bCanChangeCode || bEmbedded )
		{
			oLayout.AddGroup( "Embedded Code" ) ;
			oLayout.AddButton( "BtnGenerateCode", "Generate Stub" ) ;

			var oItem = oLayout.AddString("Code","",true,500);
			oItem.SetAttribute( siUINoLabel, true );

			oLayout.EndGroup() ;
		}

		// Install callbacks
		oLayout.Language = "JScript";
		oLayout.SetAttribute( siUILogicPrefix, "EditCmd_" );
		
		// Rather than embedd the SPDL logic and all the helper functions
		// that it uses we just refer to this file 
		
		var strThisFile = Application.InstallationPath(siFactoryPath) +
			"/Application/DSScripts/command.js" ;		
		
		oLayout.SetAttribute( siUILogicFile, strThisFile ) ;
		
		// Set the correct help topic
		oLayout.SetAttribute( siUIHelpFile, "<FactoryPath>/Doc/<DocLangPref>/xsidocs.chm::/property8526.htm" );

		if ( bIsReadOnly )
			strLabel = XSIUtils.Translate( IDS_EDIT_COMMAND_DETAIL_TITLE, "XSISCRIPTS" ) ;
		else 
			strLabel = XSIUtils.Translate( IDS_EDIT_COMMAND_TITLE, "XSISCRIPTS" ) ;		

		////////////////////////////////////////////////////////////////////////////////////////////
		// Lauch PPG and let the user edit the command
		////////////////////////////////////////////////////////////////////////////////////////////
		retVal = InspectObj(oCustomPSet, noArgument, strLabel, siModal, false);
				
		//////////////////////////////////////////////////////////////////////////////////////////
		// Update the command definition as required
		//////////////////////////////////////////////////////////////////////////////////////////
		
		// if user pressed "OK"
		if (!retVal)
		{
			UpdateCommandFromPSet( oCustomPSet, oParameterDataArray, oCmd);
		}
	}
	finally
	{
		////////////////////////////////////////////////////////////////////////////////////////
		// Cleanup
		////////////////////////////////////////////////////////////////////////////////////////
		SetValue("preferences.scripting.cmdlog", true);
	}

	return retVal;
}

//------------------------------------------------------------------------------
// NAME:	CreateAndEditCommand 
// INPUT:	nothing.
//
// RETURN:		True if user canceled operation or False if operation went trough
// DESCRIPTION:	Creates a new regular command and edit it with the command editor.
//------------------------------------------------------------------------------
function CreateAndEditCommand()
{
	var oCmd = Application.CreateCommand( GetUniqueCommandName("NewCommand") );
	return EditNewCommand( oCmd );
}


//******************************************************************************
// END OF FILE
//******************************************************************************
