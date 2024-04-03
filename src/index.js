/* eslint-disable max-lines-per-function, max-lines */

//System
import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import { PdfViewer } from './components/pdfViewer';

//PropSpecs
import propsPdfViewer from './components/pdfViewer/props';

//Opus Lib
import Opus from '@intenda/opus-ui';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Opus
		registerComponentTypes={[{
			type: 'pdfViewer',
			component: PdfViewer,
			propSpec: propsPdfViewer
		}]}
		startupMda={{
			type: 'containerSimple',
			prps: {
				singlePage: true,
				mainAxisAlign: 'center',
				crossAxisAlign: 'center'
			},
			wgts: [{
				type: 'pdfViewer',
				prps: { }
			}]
		}}
	/>
);
