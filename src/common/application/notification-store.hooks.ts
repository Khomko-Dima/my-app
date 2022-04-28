import { useContext } from 'react';
import { NotificationContext } from '@common/infrastructure/store/notification/context';

const useNotification = () => {
	const { store, dispatch } = useContext(NotificationContext);
	if (dispatch === undefined) {
		throw new Error('dispatch must be inside a Provider with a value');
	}
	if (store === undefined) {
		throw new Error('store must be inside a Provider with a value');
	}
	return { store, dispatch };
};
export default useNotification;
