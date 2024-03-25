import internalProps from './internalProps';

const props = {
	pageNumber: {
		type: 'number',
		desc: 'The current page number for the doc',
		dft: 1
	},
	scale: {
		type: 'number',
		desc: 'A number defining the zoom level',
		dft: 1
	},
	minScale: {
		type: 'number',
		desc: 'A number defining the minimum scale value',
		dft: 1
	},
	maxScale: {
		type: 'number',
		desc: 'A number defining the maximum scale value',
		dft: 10
	},
	value: {
		type: 'string',
		desc: 'The path pointing to the pdf document to view'
	},
	rotationStep: {
		type: 'number',
		desc: 'A number defining the rotation step',
		dft: 90
	},
	doDownload: {
		type: 'boolean',
		desc: 'When true, the pdf viewer will be downloaded',
		dft: false
	},
	doReset: {
		type: 'integer',
		desc: 'When true, the pdf viewer will be reset',
		dft: false
	},
	doPage: {
		type: 'integer',
		desc: 'A number specifying current pdf page',
		dft: 0
	},
	rotation: {
		type: 'number',
		desc: 'A number specifying current document rotation',
		dft: 0
	}
};

export default Object.assign(props, internalProps);
