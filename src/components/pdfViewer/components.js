//React
import React, { useCallback, useContext } from 'react';

//System
import { createContext } from '@intenda/opus-ui';

//Events
import { onError } from './events';

//Plugins
import { Document, Page, pdfjs } from 'react-pdf';

//Helpers
import { getPersistedConfig } from './helpers';

const PdfContext = createContext('pdfViewer');

const workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export const Viewer = () => {
	const props = useContext(PdfContext);
	const { getHandler, state: { value, scale, rotation, pageNumber } } = props;

	const handlerOnLoadSuccess = useCallback(getHandler(getPersistedConfig), []);
	const handlerOnError = useCallback(getHandler(onError), []);

	return (
		<Document
			file={value}
			onSourceError={handlerOnError}
			onLoadSuccess={handlerOnLoadSuccess}
			rotate={rotation}
		>
			<Page
				pageNumber={pageNumber}
				scale={scale}
			/>
		</Document>
	);
};
