//Components
import { PdfViewer } from './components/pdfViewer';

//PropSpecs
import propsPdfViewer from './components/pdfViewer/props';

import { registerComponentTypes } from 'opus-ui';

registerComponentTypes([{
	type: 'pdfViewer',
	component: PdfViewer,
	propSpec: propsPdfViewer
}]);
