//React
import React, { useEffect } from 'react';

//System
import { createContext } from '@intenda/opus-ui';

//Styles
import './styles.css';

//Components
import { Viewer } from './components';

//Events
import { onRotate, onScale, onPage, onReset, onDownload } from './events';

const PdfContext = createContext('pdfViewer');

export const PdfViewer = props => {
	const { id, classNames, attributes, state, getHandler } = props;
	const {	doRotate, doScale, doPage, doReset, doDownload } = state;

	useEffect(getHandler(onRotate), [doRotate]);
	useEffect(getHandler(onScale), [doScale]);
	useEffect(getHandler(onPage), [doPage]);
	useEffect(getHandler(onReset), [doReset]);
	useEffect(getHandler(onDownload), [doDownload]);

	return (
		<PdfContext.Provider value={props}>
			<div
				id={id}
				className={classNames}
				{...attributes}
			>
				<Viewer />
			</div>
		</PdfContext.Provider>
	);
};
