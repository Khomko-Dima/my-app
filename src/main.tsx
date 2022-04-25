import React from 'react';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';
import 'antd/dist/antd.variable.min.css';

import CommonModule from '@common/presentation/view';
import TestComponent from '@common/presentation/view/components';
import { QueryClient, QueryClientProvider } from 'react-query';

ConfigProvider.config({
	theme: {
		primaryColor: '#25b864',
	},
});
const queryClient = new QueryClient();
function Main() {
	return (
		<ConfigProvider locale={ruRu}>
			<QueryClientProvider client={queryClient}>
				<CommonModule>
					<TestComponent />
				</CommonModule>
			</QueryClientProvider>
		</ConfigProvider>
	);
}

export default Main;
