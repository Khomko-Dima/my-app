import React, { FC } from 'react';
import { CommonStore } from '@common/infrastructure/store/common/provider';
import { NotificationStore } from '@common/infrastructure/store/notification/provider';
import IndexTest from '@common/presentation/components';

const CommonModule: FC<{ children: any }> = ({ children }) => {
	return (
		<NotificationStore>
			<IndexTest />
			<CommonStore>{children}</CommonStore>
		</NotificationStore>
	);
};
export default CommonModule;
