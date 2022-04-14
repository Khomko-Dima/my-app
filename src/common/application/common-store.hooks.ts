import { useContext } from 'react';
import { CommonContext } from '@common/infrastructure/store/context';

const useCommonStoreHook = () => {
	const { store, dispatch } = useContext(CommonContext);

	return { store, dispatch: dispatch };
};
export default useCommonStoreHook();
