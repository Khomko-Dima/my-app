import React from 'react';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';
import 'antd/dist/antd.variable.min.css';

import CommonModule from '@common/presentation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { FetchersInterceptor } from '@common/infrastructure/http/fetchersInterceptor';
import NotificationComponent from '@common/presentation/components/notification.component';

ConfigProvider.config({
	theme: {
		primaryColor: '#18b2ff',
	},
});
const queryClient = new QueryClient();
FetchersInterceptor();
function Main() {
	return (
		<ConfigProvider locale={ruRu}>
			<QueryClientProvider client={queryClient}>
				<CommonModule>
					<NotificationComponent />
				</CommonModule>
				{process.env.REACT_APP_BUILD === 'dev' && (
					<ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
				)}
			</QueryClientProvider>
		</ConfigProvider>
	);
}

export default Main;
