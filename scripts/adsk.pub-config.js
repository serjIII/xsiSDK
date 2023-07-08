
     $.extend({
         config: {
             productFullName: "Softimage Developer Help",
             productFullNameHelp: "Softimage Developer Help",
             defaultPage:  "./files/si_sdk_landing.htm",
             locale: "en_US",

             // Labels (captions).
             

 labels: {
     locateInContent: "Show in Contents",
     addToFavorites: "Add to Favorites",
     home: "Home: Softimage Developer Help",
     print: "Print Frame",

     tabs: {
         contents: 'Contents',
         index: 'Index',
         favorites: 'Favorites',
         search: 'Search'
     },

     search: {
         contentFilters: 'Include results from:',
         searchOptions: 'Search options',
         searchInHelpFor: 'Search help for:',
         anyWord: 'Any word',
         allWords: 'All words',
         phrase: 'Phrase',
         searchInFilesFor: 'Search in files for:',
         otherOptions: 'Other options',
         ignoreCase: 'Ignore case',
         exactWords: 'Exact words',
         highlightWords: 'Highlight words',

         warnings: {
             toManyOccurrences: '',
             refineSearch: 'Please refine your query or try different search method.',
             filteredStopwords: 'Following stop words were filtered -',
             noResultsBegin: 'Your search —',
             noResultsEnd: '— did not match any documents. Suggestions:',
             correctSpelling: 'Make sure all words are spelled correctly.',
             differentKeywords: 'Try different keywords.',
             generalKeywords: 'Try more general keywords.',
             searchOptions: 'Try different search options.'
         }
     },

     favorites: {
         noTopicsAdded: 'There are no topics added to favorites.'
     }
 },


             // Default publication search options.
             searchOptions: { caseInsensitiveEnabled: true, caseSensitiveSwitch: true, wholeWordsEnabled: true, wholeWordsSwitch: true, searchMethod: 'or', highlightEnabled: true, searchInThisBook: true, searchStopWords: 'stop-words.js',
contentFilters: [
{ id: 'prog', filter: 'files/.*htm', enabled: true, label: 'Search Programming Guide?' },
{ id: 'si_cpp', filter: 'si_cpp/((?!8h_source).)*\.html', enabled: true, label: 'Search C++ API Reference?' },
{ id: 'headers', filter: 'si_cpp/.*8h_source\.html', enabled: true, label: 'Search C++ header files?' },
{ id: 'commands', filter: 'si_cmds/.*htm', enabled: true, label: 'Search commands and scripting reference?' },
{ id: 'objectmodel', filter: 'si_om/.*htm', enabled: true, label: 'Search object model reference?' },
{ id: 'examples', filter: 'examples/.*htm', enabled: true, label: 'Search SDK examples?' }
]

},

             // Index options.
             indexOptions: {dataFile:"adsk.indexes-data.js"},

             // UI options.
             

 ui: {
     // Navigation pane tab settings.
     tabs: {
         order: [
             'C','I','S','F'
         ],
         tocEnabled: true,
         indexEnabled: false,
         favoritesEnabled: true,
         searchEnabled: true
     },

     responsive: false,

     // Toolbar button settings.
     tools: {
         order: ['home', 'previous', 'parent', 'following', 'separator',
                 'favorites', 'share', 'separator', 'print'],
         home: true,
         previous: true,
         parent: true,
         following: true,
         favorites: true,
         share: true,
         print: true
     }
 },

 features: {
     tabsbarParent: 'navigation',
     banner: true,
     header: true,
     navigation: true,
     splitter: true,
     breadcrums: true,
     splitter: true
 },


             // Array of book configs.
             books: [],

             // Context ids.
             contextIds: {},

             // Booklists.
             booklist: []
         }
     });
 