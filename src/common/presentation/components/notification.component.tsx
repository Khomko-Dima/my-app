import { useEffect } from 'react';
import { notification } from 'antd';
import InnerHTMLFunction from '@common/presentation/utils/InnerHTMLFunction';
import useNotificationStoreHook from '@common/application/notification-store.hooks';
import { NotificationClose } from '@common/infrastructure/store/notification/actions';

const NotificationComponent = () => {
	const { store, dispatch } = useNotificationStoreHook();
	useEffect(() => {
		if (store.type !== null) {
			notification[store.type]({
				message: store.title,
				description: store.description && (
					<div dangerouslySetInnerHTML={InnerHTMLFunction(store.description)} />
				),
				duration: 1.5,
			});
			dispatch(NotificationClose());
		}
	}, [dispatch, store]);
	return null;
};
export default NotificationComponent;
