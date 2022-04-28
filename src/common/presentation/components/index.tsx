import React from 'react';
import { Button } from 'antd';
import { NotificationOpen } from '@common/infrastructure/store/notification/actions';
import useNotification from '@common/application/notification-store.hooks';

const IndexTest = () => {
	const { dispatch } = useNotification();
	return (
		<Button
			type={'primary'}
			onClick={(_event) => dispatch(NotificationOpen('info', 'asd', 'asdasd'))}
		>
			test
		</Button>
	);
};
export default IndexTest;
