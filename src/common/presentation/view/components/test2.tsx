import React from 'react';
import useCommonStoreHook from '@common/application/common-store.hooks';
import { Button } from 'antd';
import { LoginStartAction } from '@common/infrastructure/store/actions';

const Test2 = () => {
	const { dispatch, store } = useCommonStoreHook();
	console.log('render Test2');
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
export default Test2;
