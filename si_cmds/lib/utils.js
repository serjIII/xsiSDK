/*
	This script is a stripped-down version of the one used for the release docs (utils.js embedded in the chm files)
	
	Most of the functionality having to do with processing chm stuff has been removed and what remains has been
	reworked to match the HTML output by XHTML.XSL (BuildDocs.pl)
	
	Limitations: 	The original script was written using the MS DOM extensions (eg., TextRange object) which do not
					work for Mozilla-based browsers, so I was able to get the inheritance tables to display properly
					but the comment-coloring and keyword-highlighting is not enabled for Mozilla-based browsers. To
					implement this would take several more days of investigation and work and would be a great task
					to consider for future improvements.
	
	Original author:		sblair
	This version's author:	algreen
	Last updated:			12/06/2005
*/

var debug = 0;
var m_sTopicName = null; // runtime name of the topic
var m_sPN = null; // persistent name of the topic
var m_oRng = null; // TextRange representing the current element
var m_sBM = null; // TextRange bookmark
var m_bAutoHilite = false; // indicates that we should decorate the current element only
var m_sMarkerColor = "green"; // color for comment delimiters
var m_sTextColor = "green"; // color for text within comments
var m_bScriptPage = false;//Indicates if the page is a script page
var isMoz = navigator.appName.search(/Netscape/) >= 0;


var CELLBODY_CSS_CLASS = 'members';
var CELLBODY_BGCOLOR = '#ffffc0';		// Background color for non-inherited members

window.onload = function () {
	if ( !document.documentElement ) return;

	var collTITLE = document.getElementsByTagName('title');
	var sTitle = collTITLE[0].innerHTML;
	var arrKeywords = new Array();
	
	var re = new RegExp( /^(\w+)\.(\w+)$/ );


	// Determine the type of page and get the command/object/method/property name.
	var sObjectName = '';
	var sMemberName = '';
	var sCommandName = '';
	if ( sTitle.match(re) ) {
		sObjectName = RegExp.$1;
		sMemberName = RegExp.$2;
	} else {
		sCommandName = sTitle;
	}

	var colMeta=window.document.getElementsByTagName('meta');
	if (colMeta) {
		for (var iMETAs=0; iMETAs<colMeta.length; iMETAs++) {
			if (!colMeta[iMETAs].getAttribute("name")=="Description") { continue; }
			switch (colMeta[iMETAs].getAttribute("content")) {
				case "Object Model" : m_bScriptPage=true; sObjectName=sCommandName; sCommandName=""; break;
				case "Command" : m_bScriptPage=true; break;
				default:
			}
		}
	}

	// Change the background color of non-inherited properties and methods.
	// And build a list of keywords for highlighting in code samples on the Object page.
	if ( sObjectName && !sMemberName ) {
		var collLinks = document.links;
		for (var i=0; i<collLinks.length; i++ ) {
			var oLink = collLinks.item(i);
			var sHref = oLink.getAttribute("title");
			if ( sHref ) {
				if ( sHref.match(re) ) {
					if ( sObjectName == RegExp.$1 ) {
						if ( debug ) { alert( "found " + RegExp.$2 + " in " + sHref ); }
						if ( oLink.parentNode.className == CELLBODY_CSS_CLASS ) {
							oLink.parentNode.style.background=CELLBODY_BGCOLOR;
							arrKeywords.push("." + RegExp.$2);
						}
					}
				}
			}
		}
	} else {
		if ( sCommandName ) { arrKeywords.push(sCommandName); }
		if ( sMemberName ) { arrKeywords.push("." + sMemberName); }

	}

	var sKeywords = ( arrKeywords.length ) ? arrKeywords.join(";") : "";
	handle_docready( sKeywords );

}


function handle_docready( keywords )
{
	m_oRng = ( isMoz ) ? window.document.createRange() : m_oRng = window.document.body.createTextRange();
	if (!m_oRng) { alert('failed to create body range'); return; }
	
	// Walk the entire topic, and decorate special block elements
	var oPRElist = window.document.getElementsByTagName("pre");
	for (var i=0; i<oPRElist.length; i++) {
		var oPRE = oPRElist[i];
		var sClassName = oPRE.className;
		var re = /Python|JScript|VBScript|Cplusplus|Cpp|^cwC$|PerlScript|CSharp/i;
		var arrTmp = sClassName.match(re);

		var sLang = ( arrTmp != null ) ? arrTmp[0] : ""; 
		DecorateElement(oPRE, keywords, sLang );
	}

}


function DecorateElement(oElem, keywords, sLang )
{
	if ( isMoz ) { return; }
	m_oRng.moveToElementText(oElem);
	m_sBM = m_oRng.getBookmark(); // save our place in case we have to move the range
	HiliteComments(m_oRng, sLang );
	if( sLang.length > 0 ) { HiliteTokens(oElem, m_oRng, keywords ); }
    if (oElem.previousSibling && oElem.previousSibling.ShowHideType ) { toggle(oElem.previousSibling); }
}

// restore our place
function RestoreRange()
{
	m_oRng.moveToBookmark(m_sBM);
}

// Dispatch calls to the various routines that hilite different code comment types
function HiliteComments(oRng, sLang )
{
	if ( sLang.length == 0 ) { return; }
	switch ( sLang.toLowerCase() ) {
		case "csharp":
		case "cpp":
		case "cplusplus":
		case "cwc":
		case "jscript" :
			HiliteCStyleComments(oRng);
			HiliteSingleLineComment(oRng, "//");
			break;
		case "vbscript" :
			HiliteSingleLineComment(oRng, "'");
			break;
		case "python" :
		case "perlscript" :
			HiliteSingleLineComment(oRng, "#");
			break;
	}

	if (m_bScriptPage) { HiliteHTMLComments(oRng); }
}

// Hilites comments of the following form
//      // C++ or JScript comment
//      '  VB(S) comment
//      # Perl(Script) or Python comment
function HiliteSingleLineComment(oRng, sToken)
{
	if (typeof(sToken) != "string")
	{
		return;
	}

	var oRngStart = oRng.duplicate();
	var oRngEnd;
	
	while (oRngStart.findText(sToken, 1000000) && oRng.inRange(oRngStart))
	{
		// handle exceptions
		if (sToken == "//")
		{
			var sBM = oRngStart.getBookmark();
			oRngStart.move("character", -1);
			oRngStart.moveEnd("character", 1);
			var sPrecedingChar = oRngStart.text;
			oRngStart.moveToBookmark(sBM);
			if (sPrecedingChar == ":") // the token is likely part of an http (or some other protocol) link
			{
			   oRngStart.collapse(false);
			   continue;
			}
			else if (sPrecedingChar == "-") // part of a DOCTYPE decl?
			{
				oRngStart.move("character", -2);
				oRngStart.moveEnd("character", 1);
				var sQuote = oRngStart.text;
				if (/(["'])/.test(sQuote))
				{
					oRngStart.collapse(false);
					if (oRngStart.findText(RegExp.$1)) // look for matching quote at the end of the DOCTYPE
					{
						oRngStart.collapse(false);
						continue;
					}
					else
					{
						// bad news
						return;
					}
				}
				else
				{
					oRngStart.moveToBookmark(sBM); // reset and proceed
				}
			}
		}

		oRngStart.execCommand("ForeColor", false, m_sMarkerColor);
		oRngStart.collapse(false);
		oRngEnd = oRngStart.duplicate();
		if (oRngEnd.findText("\r", 1000000))
		{
			oRngStart.setEndPoint("EndToStart", oRngEnd);
		}
		else
		{
			// comment is the last line in the block
			oRngStart.setEndPoint("EndToEnd", oRng);
		}
		oRngStart.execCommand("ForeColor", false, m_sTextColor);
	}

}

// Hilite C-style comments in the specified range
function HiliteCStyleComments(oRng)
{
	var oRngStart = oRng.duplicate();
	var oRngEnd;

	while (oRngStart.findText("/*", 1000000) && oRng.inRange(oRngStart))
	{
		oRngStart.execCommand("ForeColor", false, m_sMarkerColor);
		oRngStart.collapse(false);
		oRngEnd = oRngStart.duplicate();
		if (!oRngEnd.findText("*/", 1000000))
		{
			break; // bad news; couldn't find closing comment. Bail.
		}
		oRngEnd.execCommand("ForeColor", false, m_sMarkerColor);
		oRngStart.setEndPoint("EndToStart", oRngEnd);
		oRngStart.execCommand("ForeColor", false, m_sTextColor);
	}
}

// Hilite HTML-style comments in the specified range
function HiliteHTMLComments(oRng)
{
	var oRngStart = oRng.duplicate();
	var oRngEnd;
	while (oRngStart.findText("<!--") && oRng.inRange(oRngStart))
	{
		// Check for a conditional IE comment
		oRngStart.setEndPoint( "EndToEnd", oRng );
		if ( /<!--\s*\[\s*if/.test( oRngStart.text ) )
		{
			oRngEnd = oRngStart.duplicate();
			if ( oRngEnd.findText( ">" ) )
			{	// Skip conditional comment
				oRngStart.setEndPoint( "StartToEnd", oRngEnd );
			}
			continue;
		}
		else
		{	// Reset text range
			oRngStart.findText("<!--");
		}

		oRngStart.moveEnd("character", -2); // back up to exclude the --
		oRngStart.execCommand("ForeColor", false, m_sMarkerColor);
		oRngStart.collapse(false);
		oRngEnd = oRngStart.duplicate();
		if (!oRngEnd.findText("-->"))
		{
			break; // bad news; couldn't find closing comment. Bail.
		}
		oRngEnd.moveStart("character", 2); // roll forward to exclude the --
		oRngEnd.execCommand("ForeColor", false, m_sMarkerColor);
		oRngStart.setEndPoint("EndToStart", oRngEnd);
		oRngStart.execCommand("ForeColor", false, m_sTextColor); // hilite the comment text
	}
}

// Apply hiliting to the keywords identified in the semi-colon delimited string associated with the HILITE attribute.
function HiliteTokens(oElement, oRng, keywords )
{
	var oRegEmptyStr = new RegExp("^\\s*$");

	// process any author-defined tokens
//	var sTokens = oElement.getAttribute("HILITE");
	var sTokens = keywords;
	if (!sTokens && !m_sTopicName && !m_sPN)
	{
		return; // nothing to hilite
	}

	var aTokens; // array of tokens to search for

	if (sTokens)
	{
		aTokens = sTokens.split(";");
	}
	else
	{
		aTokens = new Array();
	}

	// if available, append the topic's runtime and persistent name to the list
	if (m_sTopicName) aTokens[aTokens.length] = m_sTopicName;
	if (m_sPN) aTokens[aTokens.length] = m_sPN;

	var ahTokens = new Array(); // hash of tokens we've already searched for to prevent accidental toggling

	var oRngTemp = oRng.duplicate();
	for (var iToken = 0; iToken < aTokens.length; iToken++)
	{
		var sToken = aTokens[iToken];
		// watch out for dupe tokens
		if (oRegEmptyStr.test(sToken) || ahTokens[sToken])
		{
			continue;
		}

		ahTokens[sToken] = 1;

		while (oRngTemp.findText(sToken, 1000000, 6) && oRng.inRange(oRngTemp))
		{
			// Hilight the token if it is not in a comment ("Green" = 32768)
			if ( oRngTemp.queryCommandValue("ForeColor") != 32768 )		
			{
				oRngTemp.execCommand("BackColor", false, "Yellow");
				oRngTemp.execCommand("ForeColor", false, "Black");
			}
			oRngTemp.collapse(false);
		}

		oRngTemp.moveToBookmark(m_sBM); // reset the temporary range for the next iteration

	}
}
