import React, { FC } from 'react';
import useCommonStoreHook from '@common/application/common-store.hooks';
import { Button } from 'antd';
import { LoginStartAction } from '@common/infrastructure/store/actions';

const TestComponent: React.FC = () => {
	const { store, dispatch } = useCommonStoreHook();
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
