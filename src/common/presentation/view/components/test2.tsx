import React from 'react';
import { Button } from 'antd';

const Test2 = () => {
	console.log('render Test2');
	return (
		<>
			<div>Lorem ipsum dolor sit amet.</div>
			<Button
				onClick={(event) => {
					console.log('asd');
				}}
			>
				test
			</Button>
		</>
	);
};
export default Test2;
