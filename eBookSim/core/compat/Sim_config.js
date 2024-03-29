// Name: 300
// Description: Sony PRS-300 model specific configuration
//
// History:
//	2010-09-02 kartu - Initial version
//	2010-09-24 kartu - Added hasJoypadButtons / hasOtherButtons
//	2010-11-16 kartu - Added BOOK_HISTORY icon
//	2010-11-27 kartu - restored "hold" events for numeric buttons, erroneously lost in previous commit
//	2011-02-28 kartu -  ALL: Added 
//		Calculator by Mark Nord
//		Chess by Ben Chenoweth / Stefano Gioffre
//		Five in a Row by Ben Chenoweth
//		Five Balls by Clemenseken
//		Free Cell by Ben Chenoweth
//		Mahjong by Clemenseken
//		Sudoku by Obelix
//		Dictionary by Clemenseken, lysak, m-land, Mark Nord
//	2011-04-01 Mark Nord - adapted for Sim
//  2011-10-19 Ben Chenoweth - Added ALT icons
return {
	// Menu icon indices 
	NodeKinds: {
		EMPTY: 1000,
		ALL_BOOKS: 1,
		BOOK: 2,
		FILE: 2,
		AUDIO: 3,
		PICTURE: 4,
		SETTINGS: 5,
		AUTHOR: 6,
		CONTINUE: 7,
		PREVIOUS_PAGE: 8,
		NEXT_PAGE: 9,
		BOOKMARK: 10,
		NOTES: 10,
		LIST: 11,
		BOOK_HISTORY: 1, // 11
		CLOCK: 12,
		PAUSE: 13,
		PLAY: 14,
		INFO: 15,
		LOCK: 16,
		BOOKS: 17,
		PICTURES: 18,
		CROSSED_BOX: 19,
		DATE: 22,
		ABOUT: 25,
		BACK: 26,
		ABC: 27,
		DATETIME: 28,
		DB: 29,
		SHUTDOWN: 31,
		MS: 34,
		SD: 35,
		INTERNAL_MEM: 36,
		SEARCH: 37,
		ROOT_MENU: 38,

		STANDBY: 62,

		UNCHECKED: 39,
		CHECKED: 40,
		
		FOLDER: 41,
		GAME: 42,
		CALC: 43,
		LANGUAGE: 44,
		KEYBOARD: 45,
		CHESS: 46,
		CARDS: 47,
		SUDOKU: 48,
		MAHJONG: 49,
		FIVEROW: 50,
		FIVEBALLS: 51,
		DRAUGHTS: 52,
		TEXT_SCALE: 53,
		BOMB: 54,
		
		FONT: 55,
		EXECUTABLE: 56,
		APPLICATIONS: 57,
		PREVIOUS_SONG: 58,
		NEXT_SONG: 59,
		PREVIOUS: 60,
		NEXT: 61,
		
		BOOK_ALT: 63,
		PICTURE_ALT: 64,
		SEARCH_ALT: 65,
		
		DEFAULT: 41,
		
		// At least 600 and 900 have more than one type of icons
		getIcon: function (strKind, type) {
			var kind = this[strKind];
			if (typeof kind === "undefined") {
				kind = 41;
			}
			return kind;
		}
	},
	
	// PRS+ abstract key code to actual key code, model specific
	keyCodes: {
		"1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "0": "0",
		"1_h": "11", "2_h": "12", "3_h": "13", "4_h": "14", "5_h": "15", "6_h": "16", "7_h": "17", "8_h": "18", "9_h": "19", "0_h": "10",		
		jp_left: "kLeft", jp_right: "kRight", jp_up: "kUp", jp_down: "kDown",
		jp_left_h: "kLeft-hold", jp_right_h: "kRight-hold", jp_up_h: "kUp-hold", jp_down_h: "kDown-hold",
		jp_center: "0x27", jp_center_h: "0x27-hold",
		home: "0x50", home_h: "0x50-hold",
		menu: "0x51", menu_h: "0x51-hold",
		bookmark: "0x54", bookmark_h: "0x54-hold",
		size: "0x42", size_h: "0x42-hold"
	},
	// does device have numeric keys
	hasNumericButtons: true,
	// are there volume keys
	hasVolumeButtons: false,
	// are there paging buttons
	hasPagingButtons: false,
	// are there joypad buttons
	hasJoypadButtons: true,
	// are there "other" buttons
	hasOtherButtons: true,
	// Are there SD/MS card slots
	hasCardSlots: false /*,
	
	// Where to find which node, relative to kbook.root
	standardMenuLayout: {
		"continue": [0],
		booksByTitle: [1],
		booksByAuthor: [2],
		booksByDate: [3],
		collections: [4],
		bookmarks: [5],
		settings: [6],
		advancedSettings: [6,4]			
	},
	
	// Menu configuration
	prspMenu: {
		// Container nodes
		customContainers: [
			{ name: "gamesAndUtils", title: "NODE_GAMES_AND_UTILS", icon: "GAME"}
		],
		// Nodes assigned to certain nodes
		customNodes: [
			{ name: "BookHistory", parent: "gamesAndUtils"},
			{ name: "DictionaryCL", parent: "gamesAndUtils" },
			{ name: "Calculator", parent: "gamesAndUtils" },				
			{ name: "Chess", parent: "gamesAndUtils" },				
			{ name: "FiveBalls", parent: "gamesAndUtils" },				
			{ name: "FiveRow", parent: "gamesAndUtils" },				
			{ name: "FreeCell", parent: "gamesAndUtils" },				
			{ name: "Mahjong", parent: "gamesAndUtils" },
			{ name: "Sudoku", parent: "gamesAndUtils" },
			{ name: "PRSPSettings", parent: "settings", position: 8 }
		],
		movableNodes: [1,0 ,1,1,1, 0,  0, 1,1,1],
		defaultLayout: [
			{ name: "continue"}, 
			{ name: "booksByTitle"}, 
			{ name: "booksByDate"}, 
			{ name: "booksByAuthor"},
			{ name: "BrowseFolders", separator: true},
			{ name: "bookmarks"}, 
			{ name: "settings"},
			{ name: "collections"},
			{ name: "gamesAndUtils"},
			{ name: "BookHistory"}
		]
	},
	
	media: {
		// types to be used to determine media type using "xs.isInstanceOf"
		types: [FskCache.text],
		// what kind it is, supported are: "book", "picture", "note", "audio"
		kinds: ["book"],
		// node prototypes to use when creating media nodes
		prototypes: [FskCache.tree.bookNode]
	}, 
	
	compareStrings: function(a, b) {
		if (a === b) {
			return 0;
		}
		return a > b ? 1 : -1;
	} */
};