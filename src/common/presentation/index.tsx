import React, { FC } from 'react';
import { CommonStore } from '@common/infrastructure/store/common/provider';
import { NotificationStore } from '@common/infrastructure/store/notification/provider';
import { GoogleApiProvider } from 'react-gapi';
import Header from '@common/presentation/components/header/header';

const CommonModule: FC<{ children: any }> = ({ children }) => {
	return (
		<GoogleApiProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID2 as string}>
			<NotificationStore>
				<Header />
				<CommonStore>{children}</CommonStore>
			</NotificationStore>
		</GoogleApiProvider>
	);
};
export default CommonModule;
