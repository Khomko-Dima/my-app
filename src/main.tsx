import React from 'react';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';
import 'antd/dist/antd.variable.min.css';

import CommonModule from '@common/presentation/view';
import TestComponent from '@common/presentation/view/components';
import Test2 from '@common/presentation/view/components/test2';

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
				<Test2 />
			</CommonModule>
		</ConfigProvider>
	);
}

export default Main;
