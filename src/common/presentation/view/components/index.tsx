import React from 'react';
import { LoginStartAction } from '@common/infrastructure/store/actions';
import { TestService } from '@common/infrastructure/servises/test-servise';
import useCommonStoreHook from '@common/application/common-store.hooks';
import { UseAxiosHooks, UseAxiosSendHooks } from '@common/application/useAxios.hooks';
import { Button } from 'antd';

const TestComponent: React.FC = () => {
	const { dispatch, store } = useCommonStoreHook();
	console.log('render TestComponent');

	const { data } = UseAxiosHooks<undefined, any>({ service: TestService.getDataTest });
	const { sendData } = UseAxiosSendHooks<string, number>({ service: TestService.getDataTest });
	return (
		<>
			<div>Lorem ipsum dolor sit amet.</div>
			<Button
				onClick={(event) => {
					dispatch(LoginStartAction());
				}}
			>
				test
			</Button>
		</>
	);
};
export default TestComponent;
