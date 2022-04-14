import React from 'react';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';
import 'antd/dist/antd.variable.min.css';

import CommonModule from '@common/presentation/view';
import TestComponent from '@common/presentation/view/components';

ConfigProvider.config({
	theme: {
		primaryColor: '#25b864',
	},
});

function Main() {
	return (
		<ConfigProvider locale={ruRu}>
			<CommonModule>
				<TestComponent />
			</CommonModule>
		</ConfigProvider>
	);
}

export default Main;
