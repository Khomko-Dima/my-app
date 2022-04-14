import React from 'react';
import './App.sass';
import { Button } from 'antd';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';
import 'antd/dist/antd.variable.min.css';
import CommonModule from '@common/index';

ConfigProvider.config({
	theme: {
		primaryColor: '#25b864',
	},
});

function App() {
	return (
		<ConfigProvider locale={ruRu}>
			<CommonModule />
			<div className="App test">
				<Button type={'primary'}>test</Button>
			</div>
		</ConfigProvider>
	);
}

export default App;
