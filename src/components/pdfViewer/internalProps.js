const props = {
	localStoragePrefix: {
		type: 'string',
		desc: 'The local storage key to be accessed in localStorageManager',
		dft: 'pdfViewer',
		internal: true
	},
	renderMode: {
		type: 'string',
		desc: 'An internal prop used by the pdfViewer library',
		dft: 'canvas',
		internal: true
	},
	serializeKeys: {
		type: 'array',
		desc: 'Local storage keys to keep track of',
		dft: ['scale', 'page', 'rotation'],
		internal: true
	},
	error: {
		type: 'string',
		desc: 'A string containing the error message',
		internal: true
	},
	minPage: {
		type: 'number',
		desc: 'A number that defines the minimum page variable',
		dft: 1,
		internal: true
	}
};

export default props;
