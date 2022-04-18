import React, { FC } from 'react';
import { Button } from 'antd';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getTodos, Todo } from '@common/infrastructure/store/atoms';

const TestComponent: React.FC = () => {
	const userNameLoadable = useRecoilValueLoadable(getTodos);
	const [value, setValue] = useRecoilState(getTodos);
	console.log('userNameLoadable', userNameLoadable);
	console.log('todoList', value);
	return (
		<>
			<div>Lorem ipsum dolor sit amet.</div>
			<Button
				onClick={(event) => {
					setValue({ id: '2', value: '2' } as Todo);
				}}
			>
				test
			</Button>
		</>
	);
};
export default TestComponent;
