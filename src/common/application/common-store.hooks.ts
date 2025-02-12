import { useContext } from 'react';
import { CommonContext } from '../infrastructure/store/common/context';

const useCommonStore = () => {
	const { store, dispatch } = useContext(CommonContext);
	if (dispatch === undefined) {
		throw new Error('dispatch must be inside a Provider with a value');
	}
	if (store === undefined) {
		throw new Error('store must be inside a Provider with a value');
	}
	return { store, dispatch };
};
export default useCommonStore;
