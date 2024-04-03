//System
import { localStorageGetItem, localStorageRemoveItem, localStorageAddItem } from '@intenda/opus-ui';

export const persistConfig = props => {
	const { state, state: { serializeKeys, localStoragePrefix, value } } = props;

	const obj = {};

	serializeKeys.forEach(key => {
		obj[key] = state[key] ? state[key] : 0;
	});

	localStorageAddItem(localStoragePrefix, 'savedPdfState', value, obj);
};

export const getPersistedConfig = ({ setState, state: { localStoragePrefix, value } }) => {
	const localStorageObj = localStorageGetItem({
		type: localStoragePrefix,
		subType: 'savedPdfState',
		key: value
	});

	if (!localStorageObj)
		return;

	setState(localStorageObj);
};

export const clearPersistedConfig = ({ state: { localStoragePrefix, value } }) => {
	localStorageRemoveItem(localStoragePrefix, 'savedPdfState', value);
};

