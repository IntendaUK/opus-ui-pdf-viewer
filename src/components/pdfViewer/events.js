//Helpers
import { persistConfig, clearPersistedConfig } from './helpers';

export const onError = ({ setState }, { message }) => {
	setState({ error: message });
};

const fetchDownload = url => {
	const a = document.createElement('a');
	a.setAttribute('href', url);
	a.click();
};

export const onPage = props => {
	let { setState, state: { minPage, doPage, numPages, page } } = props;
	if (!doPage)
		return;

	const newPage = Math.max(minPage, Math.min(page + doPage, numPages));

	setState({
		doPage: 0,
		page: newPage
	});

	persistConfig(props);
};

export const onReset = props => {
	const { setState, state: { doReset } } = props;

	if (!doReset)
		return;

	clearPersistedConfig(props);

	setState({
		doReset: false,
		doDownload: false,
		doRotate: 0,
		doScale: 0,
		rotation: 0,
		scale: 1,
		pageNumber: 1
	});
};

export const onRotate = props => {
	const { setState, state: { rotationStep, doRotate, rotation } } = props;
	if (!doRotate)
		return;

	const newRotation = rotation + (doRotate * rotationStep);

	setState({
		doRotate: 0,
		rotation: newRotation
	});

	persistConfig(props);
};

export const onScale = props => {
	const { setState, state: { minScale, maxScale, doScale, scale } } = props;
	if (!doScale)
		return;

	const newScale = Math.max(minScale, Math.min(scale + doScale, maxScale));

	setState({
		doScale: 0,
		scale: newScale
	});

	persistConfig(props);
};

export const onDownload = props => {
	const { setState, state: { value, doDownload } } = props;

	if (!doDownload)
		return;

	fetchDownload(value);

	setState({ doDownload: false });
};
