import { useContext } from 'react';
import { CommonContext } from '@common/infrastructure/store/context';

const useCommonStoreHook = () => {
	const { store, dispatch } = useContext(CommonContext);
	if (dispatch === undefined) {
		throw new Error('dispatch must be inside a Provider with a value');
	}
	if (store === undefined) {
		throw new Error('store must be inside a Provider with a value');
	}
	return { store, dispatch };
};
export default useCommonStoreHook;
